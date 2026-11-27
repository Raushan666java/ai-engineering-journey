import fs from "node:fs";
import path from "node:path";
import { CHAPTERS_ROOT, slugify, type ChapterRef } from "./core.ts";

export interface GlanceRow {
  num: string;
  topic: string;
  concept: string;
}

export interface ChapterBrief {
  ref: ChapterRef;
  description: string;
  intro: string;
  objectives: string[];
  glance: GlanceRow[];
  code: { lang: string; lines: string[] } | null;
}

const SKIP_FILES = new Set(["index.md", "visual-notes.md", "readme.md"]);

/* ------------------------------------------------------------------------- *
 * Discovery
 * ------------------------------------------------------------------------- */

function prettifyModuleName(folder: string): string {
  return folder
    .replace(/^\d+-/, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function moduleHeading(moduleDir: string): string {
  const indexFile = path.join(moduleDir, "index.md");
  if (fs.existsSync(indexFile)) {
    const raw = fs.readFileSync(indexFile, "utf8").replace(/<!--[\s\S]*?-->/g, "");
    const title = firstHeading(raw);
    if (title) return title;
  }
  return prettifyModuleName(path.basename(moduleDir));
}

/** Finds every chapter that is not a module index / notes file. */
export function discoverChapters(): ChapterRef[] {
  if (!fs.existsSync(CHAPTERS_ROOT)) {
    throw new Error(`Chapter root not found: ${CHAPTERS_ROOT}`);
  }

  const modules = fs
    .readdirSync(CHAPTERS_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^\d{2}-/.test(entry.name))
    .map((entry) => entry.name)
    .sort();

  const chapters: ChapterRef[] = [];

  for (const moduleId of modules) {
    const moduleDir = path.join(CHAPTERS_ROOT, moduleId);
    const moduleTitle = moduleHeading(moduleDir);

    const files = fs
      .readdirSync(moduleDir)
      .filter((name) => name.endsWith(".md") && !SKIP_FILES.has(name.toLowerCase()))
      .filter((name) => /^\d{2}-/.test(name))
      .sort();

    for (const file of files) {
      const absPath = path.join(moduleDir, file);
      const chapterNumber = file.slice(0, 2);
      const raw = fs.readFileSync(absPath, "utf8").replace(/<!--[\s\S]*?-->/g, "");
      const title = firstHeading(raw) ?? prettifyModuleName(file.replace(/\.md$/, ""));
      const relPath = path.relative(CHAPTERS_ROOT, absPath).split(path.sep).join("/");

      chapters.push({
        id: `${moduleId.slice(0, 2)}-${chapterNumber}-${slugify(title)}`,
        absPath,
        relPath,
        moduleId,
        moduleTitle,
        chapterNumber,
        title,
      });
    }
  }

  return chapters;
}

/* ------------------------------------------------------------------------- *
 * Markdown parsing (dependency-free, fence aware — chapters contain "## ..."
 * lines inside bash code blocks that would break naive section splitting)
 * ------------------------------------------------------------------------- */

function firstHeading(markdown: string): string | null {
  let inFence = false;
  for (const line of markdown.split(/\r?\n/)) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = /^#\s+(.+?)\s*$/.exec(line);
    if (m) return m[1].trim();
  }
  return null;
}

function normalizeHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/^\d+(\.\d+)*[\s.):-]*/, "")
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function splitSections(markdown: string): Map<string, string> {
  const sections = new Map<string, string>();
  let current = "__preamble__";
  let buffer: string[] = [];
  let inFence = false;

  const flush = (): void => {
    sections.set(current, buffer.join("\n"));
  };

  for (const line of markdown.split(/\r?\n/)) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      buffer.push(line);
      continue;
    }
    if (!inFence) {
      const m = /^##\s+(.+?)\s*$/.exec(line);
      if (m) {
        flush();
        current = normalizeHeading(m[1]);
        buffer = [];
        continue;
      }
    }
    buffer.push(line);
  }
  flush();
  return sections;
}

function parseTable(section: string): string[][] {
  const rows: string[][] = [];
  for (const line of section.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("|")) continue;
    const cells = trimmed
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => cell.trim().replace(/\*\*/g, ""));
    if (cells.every((cell) => cell === "" || /^:?-{2,}:?$/.test(cell))) continue;
    rows.push(cells);
  }
  // Drop header rows such as | Objective | Description |
  if (rows.length && /^(objective|objectives|section|topic|#|num|no|id|term|terminology)$/i.test(rows[0][0])) {
    rows.shift();
  }
  return rows;
}

/** Strips mojibake left over from earlier encoding damage in the course files. */
function sanitize(text: string): string {
  return text
    .replace(/\uFFFD+\??["'”’]?/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanInline(text: string): string {
  return sanitize(
    text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[`*_]{1,3}/g, ""),
  );
}

/** First paragraph, trimmed to a sentence boundary near `maxChars`. */
function excerpt(text: string, maxChars = 260): string {
  const paragraphs = text
    .split(/\r?\n\s*\r?\n/)
    .map((block) => block.trim())
    .filter(
      (block) =>
        block &&
        !block.startsWith("```") &&
        !block.startsWith("|") &&
        !block.startsWith("<!--"),
    );
  const raw = cleanInline((paragraphs[0] ?? "").split(/\r?\n/).join(" "));
  if (!raw) return "";
  let out = "";
  for (const sentence of raw.split(/(?<=[.!?])\s+/)) {
    if (out && (out + " " + sentence).length > maxChars) break;
    out = out ? `${out} ${sentence}` : sentence;
  }
  return trimToSentence(out || raw, maxChars);
}

/** `### Heading` blocks inside a section, with their first sentence of body. */
function subsections(section: string): { title: string; body: string }[] {
  const out: { title: string; body: string }[] = [];
  let inFence = false;
  let title: string | null = null;
  let buffer: string[] = [];

  const flush = (): void => {
    if (title) out.push({ title, body: buffer.join("\n") });
  };

  for (const line of section.split(/\r?\n/)) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      if (title) buffer.push(line);
      continue;
    }
    if (!inFence) {
      const m = /^###\s+(.+?)\s*$/.exec(line);
      if (m) {
        flush();
        title = cleanInline(m[1]);
        buffer = [];
        continue;
      }
    }
    if (title) buffer.push(line);
  }
  flush();
  return out;
}

function firstSentence(text: string, maxLength = 150): string {
  const paragraphs = text
    .split(/\r?\n\s*\r?\n/)
    .map((block) => block.trim())
    .filter(
      (block) =>
        block &&
        !block.startsWith("```") &&
        !block.startsWith("|") &&
        !block.startsWith("<!--"),
    );
  const raw = cleanInline((paragraphs[0] ?? "").split(/\r?\n/).join(" "));
  if (!raw) return "";
  const sentence = raw.split(/(?<=[.!?])\s+/)[0] ?? raw;
  return trimToSentence(sentence, maxLength);
}

function firstParagraph(section: string): string {
  const blocks = section
    .split(/\r?\n\s*\r?\n/)
    .map((block) => block.trim())
    .filter((block) => block && !block.startsWith("```") && !block.startsWith("|"));
  return cleanInline(blocks[0] ?? "");
}

function trimToSentence(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  const cut = text.slice(0, maxLength);
  const lastStop = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("? "), cut.lastIndexOf("! "));
  if (lastStop > maxLength * 0.5) return cut.slice(0, lastStop + 1);
  return cut.slice(0, cut.lastIndexOf(" ")) + "…";
}

function pickCodeBlock(
  markdown: string,
): { lang: string; lines: string[] } | null {
  const preferred = ["bash", "python", "ts", "typescript", "javascript", "sql", "yaml", "dockerfile", "http"];
  const blocks: { lang: string; lines: string[]; score: number }[] = [];
  const fence = /```([a-zA-Z0-9]*)\r?\n([\s\S]*?)```/g;
  let match: RegExpExecArray | null;

  while ((match = fence.exec(markdown)) !== null) {
    const lang = (match[1] || "").toLowerCase();
    const lines = match[2]
      .split(/\r?\n/)
      .map((line) => line.replace(/\s+$/, ""))
      .filter((line) => line.trim().length > 0);

    if (lines.length < 2 || lines.length > 14) continue;
    if (lines.some((line) => line.length > 60)) continue;

    const maxLine = Math.max(...lines.map((line) => line.length));
    const langBonus = preferred.includes(lang) ? 10 : 0;
    blocks.push({ lang, lines, score: langBonus - maxLine / 10 - lines.length / 10 });
  }

  if (!blocks.length) return null;
  blocks.sort((a, b) => b.score - a.score);
  return { lang: blocks[0].lang || "text", lines: blocks[0].lines.slice(0, 9) };
}

function parseObjectives(section: string): string[] {
  const fromTable = parseTable(section)
    .map((row) => cleanInline(row[1] ?? row[0] ?? ""))
    .filter((line) => line.length > 12 && line.length < 165);
  if (fromTable.length >= 2) return fromTable.slice(0, 4);

  const bullets = section
    .split(/\r?\n/)
    .filter((line) => /^\s*([-*+]|\d+[.)])\s+/.test(line))
    .map((line) => cleanInline(line.replace(/^\s*([-*+]|\d+[.)])\s+/, "")))
    .filter((line) => line.length > 12 && line.length < 165);
  if (bullets.length >= 2) return bullets.slice(0, 4);

  // Prose objectives — "After this chapter you will be able to …"
  const prose = cleanInline(section.replace(/\n+/g, " "));
  return prose
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 25 && sentence.length < 165)
    .slice(0, 3);
}

function parseGlance(sections: Map<string, string>): GlanceRow[] {
  const fromTable = parseTable(sections.get("chapter at a glance") ?? "")
    .filter((row) => row.length >= 3 && row[0] && row[1])
    .map((row) => ({
      num: cleanInline(row[0]),
      topic: cleanInline(row[1]),
      concept: cleanInline(row[2] ?? ""),
    }))
    .filter((row) => row.topic.length > 2 && row.topic.length < 60);
  if (fromTable.length) return fromTable.slice(0, 4);

  // Fallback: theory subsections are the de-facto outline of the chapter
  const theory = subsections(sections.get("theory") ?? "");
  const fromTheory = theory
    .map((sub) => ({
      num: "",
      topic: sub.title,
      concept: excerpt(sub.body, 260),
    }))
    .filter((row) => row.topic.length > 2 && row.topic.length < 70 && row.concept.length > 10);

  return fromTheory.slice(0, 4);
}

/* ------------------------------------------------------------------------- *
 * Public API
 * ------------------------------------------------------------------------- */

export function readChapter(ref: ChapterRef): ChapterBrief {
  const raw = fs.readFileSync(ref.absPath, "utf8").replace(/<!--[\s\S]*?-->/g, "");
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---/.exec(raw);
  const descriptionMatch = frontmatter
    ? /description\s*:\s*"?([^"\r\n]+)"?/.exec(frontmatter[1])
    : null;
  const description = descriptionMatch ? cleanInline(descriptionMatch[1]) : "";

  const sections = splitSections(raw);

  const objectives = parseObjectives(sections.get("learning objectives") ?? "");
  const glance = parseGlance(sections);

  const intro =
    firstParagraph(sections.get("introduction") ?? "") || description;

  return {
    ref,
    description,
    intro: trimToSentence(intro, 220),
    objectives,
    glance,
    code: pickCodeBlock(raw),
  };
}
