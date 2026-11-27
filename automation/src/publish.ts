import fs from "node:fs";
import path from "node:path";
import {
  AUTOMATION_DIR,
  formatSlot,
  listQueue,
  loadConfig,
  loadEnv,
  parseArgs,
  saveItem,
  type BrandConfig,
  type QueueItem,
} from "./core.ts";

const MAX_CAROUSEL = 10;

interface ApiEnv {
  igUserId: string;
  token: string;
  version: string;
}

function readApiEnv(cfg: BrandConfig): ApiEnv | null {
  const igUserId = process.env.IG_USER_ID?.trim();
  const token = process.env.IG_ACCESS_TOKEN?.trim();
  if (!igUserId || !token) return null;
  return { igUserId, token, version: cfg.publishing.apiVersion };
}

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function graph(
  env: ApiEnv,
  pathname: string,
  init?: { method?: string; body?: Record<string, string> },
): Promise<Record<string, unknown>> {
  const url = `https://graph.facebook.com/${env.version}/${pathname}`;
  const params = new URLSearchParams({ ...(init?.body ?? {}), access_token: env.token });
  const method = init?.method ?? "GET";

  const response =
    method === "GET" ? await fetch(`${url}?${params}`) : await fetch(url, {
      method,
      body: params,
    });

  const json = (await response.json()) as Record<string, unknown>;
  if (!response.ok || json.error) {
    const error = json.error as { message?: string; code?: number } | undefined;
    throw new Error(
      `Graph API ${response.status}: ${error?.message ?? JSON.stringify(json).slice(0, 300)}`,
    );
  }
  return json;
}

/* ------------------------------------------------------------------------- *
 * Media hosting — the Graph API only accepts a public image_url
 * ------------------------------------------------------------------------- */

async function uploadMedia(item: QueueItem, imageRelPath: string): Promise<string> {
  const base = process.env.MEDIA_PUBLIC_BASE_URL?.trim();
  const fileName = imageRelPath.replace(/^out\//, "");

  if (base) {
    return `${base.replace(/\/$/, "")}/${fileName}`;
  }

  const supabaseUrl = process.env.SUPABASE_URL?.trim();
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY?.trim();
  const bucket = process.env.SUPABASE_BUCKET?.trim() || "social";

  if (supabaseUrl && supabaseKey) {
    const abs = path.join(AUTOMATION_DIR, imageRelPath);
    const objectKey = `${item.id}/${path.basename(imageRelPath)}`;
    const response = await fetch(
      `${supabaseUrl}/storage/v1/object/${bucket}/${objectKey}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "image/jpeg",
          "x-upsert": "true",
        },
        body: fs.readFileSync(abs),
      },
    );
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Supabase upload failed (${response.status}): ${text.slice(0, 200)}`);
    }
    return `${supabaseUrl}/storage/v1/object/public/${bucket}/${objectKey}`;
  }

  throw new Error(
    "No media host configured. Set SUPABASE_URL + SUPABASE_SERVICE_KEY + SUPABASE_BUCKET, " +
      "or MEDIA_PUBLIC_BASE_URL if you already host automation/out/ somewhere public.",
  );
}

/* ------------------------------------------------------------------------- *
 * Publishing
 * ------------------------------------------------------------------------- */

async function waitForContainer(env: ApiEnv, containerId: string): Promise<void> {
  for (let attempt = 0; attempt < 30; attempt++) {
    const json = await graph(env, containerId, { body: { fields: "status_code,status" } });
    const status = String(json.status_code ?? "");
    if (status === "FINISHED") return;
    if (status === "ERROR" || status === "EXPIRED") {
      throw new Error(`Container ${containerId} failed with status ${status}`);
    }
    await sleep(4000);
  }
  throw new Error(`Container ${containerId} did not finish in time`);
}

async function publishItem(item: QueueItem, env: ApiEnv): Promise<string> {
  const images = item.images.slice(0, MAX_CAROUSEL);
  if (!images.length) throw new Error("No rendered images — run npm run render");

  const urls: string[] = [];
  for (const image of images) urls.push(await uploadMedia(item, image));

  let creationId: string;

  if (urls.length === 1) {
    const container = await graph(env, `${env.igUserId}/media`, {
      method: "POST",
      body: { image_url: urls[0], caption: item.caption },
    });
    creationId = String(container.id);
    await waitForContainer(env, creationId);
  } else {
    const children: string[] = [];
    for (const url of urls) {
      const child = await graph(env, `${env.igUserId}/media`, {
        method: "POST",
        body: { image_url: url, is_carousel_item: "true" },
      });
      children.push(String(child.id));
    }
    for (const child of children) await waitForContainer(env, child);

    const parent = await graph(env, `${env.igUserId}/media`, {
      method: "POST",
      body: {
        media_type: "CAROUSEL",
        children: children.join(","),
        caption: item.caption,
      },
    });
    creationId = String(parent.id);
    await waitForContainer(env, creationId);
  }

  const published = await graph(env, `${env.igUserId}/media_publish`, {
    method: "POST",
    body: { creation_id: creationId },
  });
  return String(published.id);
}

/* ------------------------------------------------------------------------- *
 * CLI
 * ------------------------------------------------------------------------- */

async function main(): Promise<void> {
  loadEnv();
  const cfg = loadConfig();
  const { flags, values } = parseArgs(process.argv.slice(2));

  const real = flags.has("real") || process.env.PUBLISH === "1";
  const limit = Number(values.get("max") ?? cfg.publishing.maxPerRun);
  const now = Date.now();

  const candidates = listQueue()
    .filter((item) => {
      if (item.status === "published" || item.status === "skipped") return false;
      if (item.status === "approved") return true;
      return cfg.publishing.autoApprove && item.status === "queued";
    })
    .filter((item) => new Date(item.scheduledFor).getTime() <= now)
    .slice(0, limit);

  if (!candidates.length) {
    console.log("Nothing due. (Check npm run manage list)");
    return;
  }

  console.log(
    `\n${real ? "PUBLISHING" : "DRY RUN"} — ${candidates.length} item(s) due, ` +
      `autoApprove=${cfg.publishing.autoApprove}\n`,
  );

  for (const item of candidates) {
    const when = formatSlot(item.scheduledFor, cfg.schedule.timezone);
    if (!real) {
      console.log(`  would publish ${item.id}  (${when})  ${item.images.length} images`);
      continue;
    }

    const env = readApiEnv(cfg);
    if (!env) {
      console.error(
        "\nMissing IG_USER_ID / IG_ACCESS_TOKEN.\n" +
          "Create automation/.env from .env.example, then see README → Publishing.\n",
      );
      process.exit(1);
    }

    try {
      const mediaId = await publishItem(item, env);
      item.status = "published";
      item.igMediaId = mediaId;
      item.publishedAt = new Date().toISOString();
      item.error = null;
      item.attempts += 1;
      saveItem(item);
      console.log(`  ✓ ${item.id} → media ${mediaId}`);
    } catch (error) {
      item.status = "failed";
      item.error = error instanceof Error ? error.message : String(error);
      item.attempts += 1;
      saveItem(item);
      console.error(`  ✗ ${item.id} → ${item.error}`);
    }
  }

  if (!real) {
    console.log(
      "\nNothing was sent to Instagram. To actually publish:  npm run publish -- --real\n",
    );
  }
}

await main();
