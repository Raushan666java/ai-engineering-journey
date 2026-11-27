import fs from "node:fs";
import path from "node:path";
import {
  OUT_DIR,
  ensureDir,
  formatSlot,
  listQueue,
  loadConfig,
  type QueueItem,
} from "./core.ts";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function imagePathForDashboard(image: string): string {
  return image.replace(/^out\//, "");
}

function card(item: QueueItem, timezone: string): string {
  const shots = item.images
    .map(
      (image) =>
        `<img src="${escapeHtml(imagePathForDashboard(image))}" alt="slide" loading="lazy" />`,
    )
    .join("");

  return `
  <article class="card" data-status="${item.status}">
    <header>
      <span class="badge ${item.status}">${item.status}</span>
      <time>${escapeHtml(formatSlot(item.scheduledFor, timezone))}</time>
    </header>
    <div class="strip">${shots || "<span class='empty'>not rendered yet</span>"}</div>
    <h2>${escapeHtml(item.chapter.title)}</h2>
    <p class="meta">${escapeHtml(item.chapter.moduleTitle)} · chapter ${escapeHtml(item.chapter.chapterNumber)} · ${item.slides.length} slides</p>
    <pre class="caption">${escapeHtml(item.caption)}</pre>
    <div class="tags">${item.hashtags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
    <details><summary>Reel script</summary><pre>${escapeHtml(item.reelScript)}</pre></details>
    ${
      item.status === "published"
        ? `<p class="done">Published ${escapeHtml(item.publishedAt ?? "")} · media ${escapeHtml(item.igMediaId ?? "")}</p>`
        : `<code class="cmd">npm run manage approve ${escapeHtml(item.id)}</code>`
    }
    ${item.error ? `<p class="err">${escapeHtml(item.error)}</p>` : ""}
  </article>`;
}

function main(): void {
  const cfg = loadConfig();
  const items = listQueue().filter((item) => item.status !== "skipped");
  ensureDir(OUT_DIR);

  const counts = items.reduce<Record<string, number>>((acc, item) => {
    acc[item.status] = (acc[item.status] ?? 0) + 1;
    return acc;
  }, {});

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Autopilot dashboard — ${escapeHtml(cfg.brand.handle)}</title>
<style>
  :root {
    --ink:#1a1b23; --ink-soft:#4a4b52; --accent:#4446e8; --tint:#eef0ff;
    --line:#d0d2e6; --muted:#6a6b78; --faint:#9a9ba6;
  }
  * { box-sizing: border-box; }
  body { margin:0; background:#f6f7fb; color:var(--ink);
    font-family: Inter, "Segoe UI", system-ui, sans-serif; }
  .wrap { max-width:1400px; margin:0 auto; padding:40px 24px 80px; }
  h1 { font-size:30px; margin:0 0 6px; letter-spacing:-0.02em; }
  .sub { color:var(--muted); margin:0 0 26px; font-size:15px; }
  .bar { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:26px; }
  .bar button { border:1px solid var(--line); background:#fff; color:var(--ink-soft);
    padding:9px 16px; border-radius:999px; font-size:13px; cursor:pointer; font-weight:600; }
  .bar button[aria-pressed="true"] { background:var(--ink); border-color:var(--ink); color:#fff; }
  .grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(330px,1fr)); gap:22px; }
  .card { background:#fff; border:1px solid var(--line); border-radius:18px;
    padding:18px; display:flex; flex-direction:column; gap:10px; }
  .card[data-hidden="true"] { display:none; }
  .card header { display:flex; justify-content:space-between; align-items:center; gap:8px; }
  .badge { font:600 11px/1 "JetBrains Mono", Consolas, monospace; letter-spacing:.08em;
    text-transform:uppercase; padding:6px 10px; border-radius:999px; background:var(--tint); color:var(--accent); }
  .badge.published { background:#e7f7ee; color:#14804a; }
  .badge.failed { background:#fdeaea; color:#b4242b; }
  .badge.approved { background:#fff4e2; color:#9a5b00; }
  time { font-size:12px; color:var(--faint); font-family:"JetBrains Mono", Consolas, monospace; }
  .strip { display:flex; gap:8px; overflow-x:auto; padding-bottom:4px; }
  .strip img { width:132px; height:165px; object-fit:cover; border-radius:10px; flex:0 0 auto;
    border:1px solid var(--line); background:#fff; }
  .empty { color:var(--faint); font-size:13px; }
  h2 { font-size:17px; margin:4px 0 0; letter-spacing:-0.01em; }
  .meta { margin:0; font-size:12px; color:var(--muted); }
  pre.caption { margin:0; font-size:12.5px; line-height:1.55; color:var(--ink-soft);
    white-space:pre-wrap; background:#fafbff; border:1px solid var(--line);
    border-radius:10px; padding:12px; max-height:190px; overflow:auto; }
  .tags { display:flex; flex-wrap:wrap; gap:6px; }
  .tags span { font-size:11px; color:var(--accent); background:var(--tint);
    border-radius:6px; padding:4px 8px; }
  details summary { cursor:pointer; font-size:12px; color:var(--muted); font-weight:600; }
  details pre { font-size:11.5px; line-height:1.5; white-space:pre-wrap; color:var(--ink-soft); }
  .cmd { display:block; font:12px/1.4 "JetBrains Mono", Consolas, monospace; color:var(--ink);
    background:#f2f3f9; border-radius:8px; padding:9px 11px; overflow-x:auto; }
  .done { margin:0; font-size:12px; color:#14804a; }
  .err { margin:0; font-size:12px; color:#b4242b; }
</style>
</head>
<body>
<div class="wrap">
  <h1>Content autopilot</h1>
  <p class="sub">${escapeHtml(cfg.brand.handle)} · ${items.length} posts in queue · ${counts.published ?? 0} published · ${counts.approved ?? 0} approved · ${counts.queued ?? 0} waiting</p>
  <div class="bar" id="filters">
    <button data-filter="all" aria-pressed="true">All</button>
    <button data-filter="queued">Queued</button>
    <button data-filter="approved">Approved</button>
    <button data-filter="published">Published</button>
    <button data-filter="failed">Failed</button>
  </div>
  <div class="grid" id="grid">
    ${items.map((item) => card(item, cfg.schedule.timezone)).join("")}
  </div>
</div>
<script>
  const buttons = document.querySelectorAll("#filters button");
  const cards = document.querySelectorAll(".card");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((b) => b.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      const filter = button.dataset.filter;
      cards.forEach((card) => {
        card.dataset.hidden = filter !== "all" && card.dataset.status !== filter;
      });
    });
  });
</script>
</body>
</html>`;

  const target = path.join(OUT_DIR, "dashboard.html");
  fs.writeFileSync(target, html, "utf8");
  console.log(`Dashboard written: ${path.relative(process.cwd(), target)}`);
  console.log(`Open it with: start ${path.relative(process.cwd(), target)}`);
}

main();
