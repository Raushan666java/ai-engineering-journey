import fs from "node:fs";
import path from "node:path";
import {
  OUT_DIR,
  ensureDir,
  listQueue,
  loadConfig,
  loadEnv,
} from "./core.ts";

interface MediaRow {
  id: string;
  caption?: string;
  like_count?: number;
  comments_count?: number;
  timestamp?: string;
  permalink?: string;
}

function main(): void {
  loadEnv();
  const cfg = loadConfig();
  const version = cfg.publishing.apiVersion;
  const igUserId = process.env.IG_USER_ID?.trim();
  const token = process.env.IG_ACCESS_TOKEN?.trim();

  if (!igUserId || !token) {
    console.error(
      "Set IG_USER_ID and IG_ACCESS_TOKEN in automation/.env first.\n" +
        "The same token used for publishing also reads insights.",
    );
    process.exit(1);
  }

  const base = `https://graph.facebook.com/${version}`;

  const call = async (pathname: string): Promise<Record<string, unknown>> => {
    const url = `${base}/${pathname}${pathname.includes("?") ? "&" : "?"}access_token=${token}`;
    const response = await fetch(url);
    const json = (await response.json()) as Record<string, unknown>;
    if (!response.ok || json.error) {
      throw new Error(JSON.stringify(json).slice(0, 300));
    }
    return json;
  };

  void (async () => {
    const account = await call(
      `${igUserId}?fields=username,followers_count,media_count`,
    );
    const media = await call(
      `${igUserId}/media?fields=id,caption,like_count,comments_count,timestamp,permalink&limit=50`,
    );

    const rows = (media.data as MediaRow[] | undefined) ?? [];
    const queue = new Map(listQueue().map((item) => [item.igMediaId, item]));

    const lines: string[] = [
      `# Instagram insights — @${String(account.username ?? "")}`,
      ``,
      `Followers: **${account.followers_count ?? "?"}** · Posts: **${account.media_count ?? "?"}**`,
      ``,
      `| When | Likes | Comments | Chapter | Link |`,
      `|---|---|---|---|---|`,
    ];

    for (const row of rows) {
      const item = queue.get(row.id);
      const chapter = item?.chapter.title ?? (row.caption ?? "").split("\n")[0].slice(0, 60);
      lines.push(
        `| ${(row.timestamp ?? "").slice(0, 10)} | ${row.like_count ?? 0} | ${row.comments_count ?? 0} | ${chapter} | ${row.permalink ?? ""} |`,
      );
    }

    if (!rows.length) {
      lines.push(`| — | 0 | 0 | no posts yet | — |`);
    }

    ensureDir(OUT_DIR);
    fs.writeFileSync(path.join(OUT_DIR, "insights.md"), lines.join("\n") + "\n", "utf8");
    fs.writeFileSync(
      path.join(OUT_DIR, "insights.json"),
      JSON.stringify({ account, media: rows }, null, 2) + "\n",
      "utf8",
    );

    console.log(`Wrote automation/out/insights.md (${rows.length} posts)`);
  })().catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  });
}

main();
