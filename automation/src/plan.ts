import {
  ensureDir,
  formatSlot,
  listQueue,
  loadConfig,
  nextSlots,
  parseArgs,
  saveItem,
  QUEUE_DIR,
  type QueueItem,
} from "./core.ts";
import { discoverChapters, readChapter } from "./chapter.ts";
import { buildContent } from "./content.ts";

function main(): void {
  const { flags, values } = parseArgs(process.argv.slice(2));
  const cfg = loadConfig();

  const countValue = flags.has("all")
    ? Number.MAX_SAFE_INTEGER
    : Number(values.get("count") ?? 7);
  const dryRun = flags.has("dry");

  if (!Number.isFinite(countValue) || countValue <= 0) {
    console.error("--count must be a positive number");
    process.exit(1);
  }

  const chapters = discoverChapters();
  const existing = listQueue();
  const usedChapterIds = new Set(existing.map((item) => item.chapter.id));
  const takenSlots = new Set(existing.map((item) => item.scheduledFor));

  // --topup N keeps at most N upcoming posts in the queue instead of adding
  // a fixed number every day (which would front-load all 322 chapters).
  let count = countValue;
  const topup = values.get("topup");
  if (topup) {
    const target = Number(topup);
    const pending = existing.filter(
      (item) => item.status === "queued" || item.status === "approved",
    ).length;
    if (pending >= target) {
      console.log(`Queue already holds ${pending} upcoming post(s) (target ${target}) — nothing to plan.`);
      return;
    }
    count = target - pending;
  }

  const fresh = chapters.filter((chapter) => !usedChapterIds.has(chapter.id));
  if (!fresh.length) {
    console.log(`All ${chapters.length} chapters are already queued. Nothing to plan.`);
    return;
  }

  const toPlan = fresh.slice(0, count);
  const slots = nextSlots(cfg, toPlan.length, takenSlots);

  if (slots.length < toPlan.length) {
    console.warn(
      `Only ${slots.length} free slot(s) available in the next 400 days — planning ${slots.length} post(s).`,
    );
  }

  ensureDir(QUEUE_DIR);

  const planned: QueueItem[] = [];

  toPlan.slice(0, slots.length).forEach((chapter, index) => {
    const brief = readChapter(chapter);
    const content = buildContent(brief, cfg, chapters.length);

    const item: QueueItem = {
      id: chapter.id,
      chapter: {
        id: chapter.id,
        relPath: chapter.relPath,
        moduleId: chapter.moduleId,
        moduleTitle: chapter.moduleTitle,
        chapterNumber: chapter.chapterNumber,
        title: chapter.title,
      },
      format: "carousel",
      scheduledFor: slots[index],
      status: "queued",
      caption: content.caption,
      hashtags: content.hashtags,
      slides: content.slides,
      reelScript: content.reelScript,
      images: [],
      igMediaId: null,
      publishedAt: null,
      error: null,
      attempts: 0,
      createdAt: new Date().toISOString(),
    };

    planned.push(item);
    if (!dryRun) saveItem(item);
  });

  const header = dryRun ? "Would queue" : "Queued";
  const remaining = chapters.length - usedChapterIds.size - planned.length;
  console.log(`\n${header} ${planned.length} post(s) — ${remaining} chapter(s) still unplanned.\n`);

  for (const item of planned) {
    console.log(
      `  ${formatSlot(item.scheduledFor, cfg.schedule.timezone).padEnd(24)} ${item.slides.length} slides  ${item.chapter.title}`,
    );
  }

  if (!dryRun) {
    console.log(`\nNext: npm run render  →  npm run dashboard`);
  }
}

main();
