import type { BrandConfig, ChapterRef, Slide } from "./core.ts";
import type { ChapterBrief } from "./chapter.ts";

export interface BuiltContent {
  slides: Slide[];
  caption: string;
  hashtags: string[];
  reelScript: string;
}

const STOPWORDS = new Set([
  "and",
  "the",
  "for",
  "with",
  "from",
  "your",
  "you",
  "into",
  "that",
  "this",
  "are",
  "not",
  "how",
  "why",
  "what",
  "its",
  "use",
  "using",
  "basics",
]);

function hashtagsFor(ref: ChapterRef, cfg: BrandConfig): string[] {
  const moduleKey = ref.moduleId.slice(0, 2);
  const curated = cfg.content.moduleHashtags?.[moduleKey] ?? [];

  const all = [...curated, ...cfg.content.hashtagsBase]
    .map((tag) => tag.replace(/[^#a-z0-9]/g, ""))
    .filter((tag) => tag.length > 3);

  return [...new Set(all)].slice(0, 8);
}

function buildSlides(brief: ChapterBrief, cfg: BrandConfig, totalChapters: number): Slide[] {
  const { ref, objectives, glance, code } = brief;
  const drafts: Omit<Slide, "index" | "total">[] = [];

  drafts.push({
    kind: "cover",
    label: `MODULE ${ref.moduleId.slice(0, 2)} · ${ref.moduleTitle}`,
    title: ref.title,
    body: `Chapter ${ref.chapterNumber} of ${totalChapters}`,
  });

  if (objectives.length >= 2) {
    drafts.push({
      kind: "list",
      label: "WHAT YOU'LL GET",
      title: "By the end of this chapter",
      body: objectives
        .slice(0, 3)
        .map((objective) => `• ${objective}`)
        .join("\n"),
    });
  }

  glance.slice(0, 4).forEach((row, index) => {
    drafts.push({
      kind: "concept",
      label: row.num ? `SECTION ${row.num}` : `KEY IDEA ${String(index + 1).padStart(2, "0")}`,
      title: row.topic,
      body: row.concept,
    });
  });

  if (code) {
    drafts.push({
      kind: "code",
      label: code.lang.toUpperCase(),
      title: "The part people actually get stuck on",
      body: "",
      code: code.lines.join("\n"),
    });
  }

  drafts.push({
    kind: "cta",
    label: "FREE",
    title: `${totalChapters} chapters. No paywall.`,
    body: `DSA · ML · system design · AI agents\nSave this before your next prep session.\n\nLink in bio — all ${totalChapters} chapters, free.`,
  });

  const maxSlides = Math.max(6, cfg.content.maxSlides);
  const capped =
    drafts.length <= maxSlides
      ? drafts
      : [...drafts.slice(0, maxSlides - 1), drafts[drafts.length - 1]];
  const total = capped.length;
  return capped.map((draft, i) => ({ ...draft, index: i + 1, total }));
}

function buildCaption(brief: ChapterBrief, hashtags: string[], totalChapters: number): string {
  const { ref, intro, objectives, glance } = brief;

  const bullets = (objectives.length >= 2 ? objectives.slice(0, 3) : glance.map((row) => row.topic).slice(0, 3))
    .map((line) => `• ${line}`)
    .join("\n");

  const lines = [
    ref.title,
    "",
    `Chapter ${ref.chapterNumber} of ${totalChapters} · ${ref.moduleTitle}`,
    "",
    intro || `Notes from ${ref.title}.`,
    "",
    `Inside:`,
    bullets,
    "",
    `The whole roadmap is free — every chapter, every project, no signup. Link in bio.`,
    "",
    hashtags.join(" "),
  ];

  return lines.filter((line, i, arr) => !(line === "" && arr[i - 1] === "")).join("\n");
}

function buildReelScript(brief: ChapterBrief, hashtags: string[]): string {
  const { ref, objectives, glance, code } = brief;
  const beats: string[] = [];

  if (objectives[0]) beats.push(`Say it plainly: ${objectives[0]}`);
  for (const row of glance.slice(0, 2)) {
    beats.push(`Show "${row.topic}" on screen${row.concept ? ` — ${row.concept}` : ""}`);
  }
  if (code) beats.push(`Type the snippet live:\n${code.lines.slice(0, 4).join("\n")}`);

  if (beats.length < 3) {
    beats.push("Name the mistake most beginners make here");
    beats.push("Show the correct version side by side");
  }

  return [
    `# Reel script — ${ref.title}`,
    `Module: ${ref.moduleTitle} (${ref.moduleId})`,
    ``,
    `## HOOK (0–3s, no intro, no "hey guys")`,
    `"${ref.title} is chapter ${ref.chapterNumber} of 322. This is the part everyone gets wrong."`,
    ``,
    `## BEATS (4–25s)`,
    ...beats.slice(0, 4).map((beat, i) => `${i + 1}. ${beat}`),
    ``,
    `## CTA (26–30s)`,
    `"The full ${ref.moduleTitle.toLowerCase()} module is free — link in bio."`,
    ``,
    `## Text on screen`,
    `Keep the chapter title pinned top-left the whole reel. 80% watch muted.`,
    ``,
    `## Hashtags`,
    hashtags.join(" "),
  ].join("\n");
}

export function buildContent(
  brief: ChapterBrief,
  cfg: BrandConfig,
  totalChapters: number,
): BuiltContent {
  const hashtags = hashtagsFor(brief.ref, cfg);
  return {
    slides: buildSlides(brief, cfg, totalChapters),
    caption: buildCaption(brief, hashtags, totalChapters),
    hashtags,
    reelScript: buildReelScript(brief, hashtags),
  };
}
