import fs from "node:fs";
import path from "node:path";

/* ------------------------------------------------------------------------- *
 * Paths
 * ------------------------------------------------------------------------- */

export const AUTOMATION_DIR = path.resolve(import.meta.dirname, "..");
export const ROOT = path.resolve(AUTOMATION_DIR, "..");
export const CHAPTERS_ROOT = path.join(ROOT, "docs", "courses", "ai-engineering-placement");
export const QUEUE_DIR = path.join(AUTOMATION_DIR, "queue");
export const OUT_DIR = path.join(AUTOMATION_DIR, "out");
export const CONFIG_PATH = path.join(AUTOMATION_DIR, "config", "brand.json");
export const ENV_PATH = path.join(AUTOMATION_DIR, ".env");

/* ------------------------------------------------------------------------- *
 * Types
 * ------------------------------------------------------------------------- */

export type SlideKind = "cover" | "list" | "concept" | "code" | "cta";

export interface Slide {
  kind: SlideKind;
  label?: string;
  title: string;
  body?: string;
  code?: string;
  index: number;
  total: number;
}

export interface ChapterRef {
  id: string;
  absPath: string;
  relPath: string;
  moduleId: string;
  moduleTitle: string;
  chapterNumber: string;
  title: string;
}

export type ItemStatus =
  | "queued"
  | "approved"
  | "published"
  | "failed"
  | "skipped"
  | "draft";

export interface QueueItem {
  id: string;
  chapter: {
    id: string;
    relPath: string;
    moduleId: string;
    moduleTitle: string;
    chapterNumber: string;
    title: string;
  };
  format: "carousel";
  scheduledFor: string;
  status: ItemStatus;
  caption: string;
  hashtags: string[];
  slides: Slide[];
  reelScript: string;
  images: string[];
  igMediaId: string | null;
  publishedAt: string | null;
  error: string | null;
  attempts: number;
  createdAt: string;
}

export interface BrandConfig {
  brand: { name: string; handle: string; tagline: string; link: string };
  colors: Record<string, string>;
  fonts: { display: string; mono: string };
  schedule: {
    timezone: string;
    slots: string[];
    days: string[];
    startAfterHours: number;
  };
  publishing: { autoApprove: boolean; maxPerRun: number; apiVersion: string };
  content: {
    maxSlides: number;
    hashtagsBase: string[];
    moduleHashtags?: Record<string, string[]>;
  };
}

/* ------------------------------------------------------------------------- *
 * Small utilities
 * ------------------------------------------------------------------------- */

export function ensureDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}

export function readJson<T>(file: string): T {
  return JSON.parse(fs.readFileSync(file, "utf8")) as T;
}

export function writeJson(file: string, value: unknown): void {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, JSON.stringify(value, null, 2) + "\n", "utf8");
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Minimal .env reader — no dependency, only fills vars that are not already set. */
export function loadEnv(): void {
  if (!fs.existsSync(ENV_PATH)) return;
  const raw = fs.readFileSync(ENV_PATH, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    const m = /^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/.exec(line);
    if (!m) continue;
    const key = m[1];
    let value = m[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

export function loadConfig(): BrandConfig {
  return readJson<BrandConfig>(CONFIG_PATH);
}

/** Parses `--key value`, `--key=value` and bare `--flag` in one pass. */
export function parseArgs(argv: string[]): { flags: Set<string>; values: Map<string, string> } {
  const flags = new Set<string>();
  const values = new Map<string, string>();
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (!arg.startsWith("--")) continue;
    const eq = arg.indexOf("=");
    if (eq !== -1) {
      values.set(arg.slice(2, eq), arg.slice(eq + 1));
      continue;
    }
    const key = arg.slice(2);
    const next = argv[i + 1];
    if (next && !next.startsWith("--")) {
      values.set(key, next);
      i++;
    } else {
      flags.add(key);
    }
  }
  return { flags, values };
}

/* ------------------------------------------------------------------------- *
 * Timezone-correct scheduling
 * ------------------------------------------------------------------------- */

export function tzOffsetMinutes(date: Date, timeZone: string): number {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const parts: Record<string, string> = {};
  for (const p of dtf.formatToParts(date)) parts[p.type] = p.value;
  const asUtc = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour) % 24,
    Number(parts.minute),
    Number(parts.second),
  );
  return (asUtc - date.getTime()) / 60000;
}

/** Converts a wall-clock time in `timeZone` into the correct UTC instant. */
export function zonedToUtc(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  timeZone: string,
): Date {
  const guess = new Date(Date.UTC(year, month - 1, day, hour, minute, 0));
  const offset = tzOffsetMinutes(guess, timeZone);
  return new Date(guess.getTime() - offset * 60000);
}

function weekdayInTz(date: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-US", { timeZone, weekday: "short" }).format(date);
}

function datePartsInTz(date: Date, timeZone: string): { y: number; m: number; d: number } {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const parts: Record<string, string> = {};
  for (const p of dtf.formatToParts(date)) parts[p.type] = p.value;
  return { y: Number(parts.year), m: Number(parts.month), d: Number(parts.day) };
}

/**
 * Allocates the next `count` posting slots as UTC ISO strings, skipping any
 * slot already taken by a queued item and any slot too close to "now".
 */
export function nextSlots(
  cfg: BrandConfig,
  count: number,
  taken: Set<string> = new Set(),
): string[] {
  const { timezone, slots, days, startAfterHours } = cfg.schedule;
  const threshold = Date.now() + startAfterHours * 3600 * 1000;
  const result: string[] = [];
  const start = datePartsInTz(new Date(), timezone);

  for (let dayOffset = 0; dayOffset < 400 && result.length < count; dayOffset++) {
    const cursor = new Date(Date.UTC(start.y, start.m - 1, start.d + dayOffset, 12, 0, 0));
    const { y, m, d } = datePartsInTz(cursor, timezone);
    for (const slot of slots) {
      if (result.length >= count) break;
      const [hh, mm] = slot.split(":").map(Number);
      const utc = zonedToUtc(y, m, d, hh, mm, timezone);
      if (utc.getTime() <= threshold) continue;
      if (!days.includes(weekdayInTz(utc, timezone))) continue;
      const iso = utc.toISOString();
      if (taken.has(iso)) continue;
      result.push(iso);
    }
  }
  return result;
}

export function formatSlot(iso: string, timeZone: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone,
    weekday: "short",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(iso));
}

/* ------------------------------------------------------------------------- *
 * Queue store — one JSON file per post so every change is reviewable in git
 * ------------------------------------------------------------------------- */

export function queueFile(id: string): string {
  return path.join(QUEUE_DIR, `${id}.json`);
}

export function listQueue(): QueueItem[] {
  ensureDir(QUEUE_DIR);
  const items: QueueItem[] = [];
  for (const name of fs.readdirSync(QUEUE_DIR)) {
    if (!name.endsWith(".json")) continue;
    try {
      items.push(readJson<QueueItem>(path.join(QUEUE_DIR, name)));
    } catch {
      // ignore malformed files, they show up as missing items rather than crashes
    }
  }
  items.sort((a, b) => a.scheduledFor.localeCompare(b.scheduledFor));
  return items;
}

export function saveItem(item: QueueItem): void {
  writeJson(queueFile(item.id), item);
}

export function emptyItem(partial: Partial<QueueItem> & { id: string }): QueueItem {
  return {
    id: partial.id,
    chapter: partial.chapter as QueueItem["chapter"],
    format: "carousel",
    scheduledFor: partial.scheduledFor ?? new Date().toISOString(),
    status: "queued",
    caption: "",
    hashtags: [],
    slides: [],
    reelScript: "",
    images: [],
    igMediaId: null,
    publishedAt: null,
    error: null,
    attempts: 0,
    createdAt: new Date().toISOString(),
  };
}
