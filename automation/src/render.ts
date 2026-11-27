import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import {
  AUTOMATION_DIR,
  OUT_DIR,
  ensureDir,
  listQueue,
  loadConfig,
  parseArgs,
  saveItem,
  type BrandConfig,
  type QueueItem,
  type Slide,
} from "./core.ts";

/* ------------------------------------------------------------------------- *
 * Design system — one 1080x1350 canvas, four layouts
 * ------------------------------------------------------------------------- */

const W = 1080;
const H = 1350;
const PAD = 96;
const CONTENT_W = W - PAD * 2;
const FOOTER_Y = 1272;

const RATIO_DISPLAY = 0.56;
const RATIO_BODY = 0.52;
const RATIO_MONO = 0.6;

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function breakLongWords(text: string, maxChars: number): string[] {
  const words: string[] = [];
  for (const word of text.split(/\s+/)) {
    if (word.length <= maxChars) {
      words.push(word);
      continue;
    }
    for (let i = 0; i < word.length; i += maxChars) {
      words.push(word.slice(i, i + maxChars));
    }
  }
  return words;
}

function wrapBlock(
  text: string,
  size: number,
  ratio: number,
  maxWidth: number = CONTENT_W,
): string[] {
  const maxChars = Math.max(8, Math.floor(maxWidth / (size * ratio)));
  const out: string[] = [];

  for (const paragraph of text.split("\n")) {
    const trimmed = paragraph.trim();
    if (!trimmed) {
      out.push("");
      continue;
    }

    // Bullets get a hanging indent so wrapped lines align under the text
    // (non-breaking spaces — SVG collapses ordinary leading whitespace)
    const isBullet = /^[•\-–*]\s+/.test(trimmed);
    const indent = isBullet ? "\u00A0\u00A0\u00A0" : "";
    const limit = isBullet ? Math.max(8, maxChars - 3) : maxChars;

    const lines: string[] = [];
    let line = "";
    for (const word of breakLongWords(trimmed, limit)) {
      if (!line) {
        line = word;
        continue;
      }
      if ((line + " " + word).length <= limit) {
        line += " " + word;
      } else {
        lines.push(line);
        line = word;
      }
    }
    if (line) lines.push(line);

    lines.forEach((entry, index) => out.push(index === 0 ? entry : indent + entry));
  }

  return out;
}

function fitText(
  text: string,
  sizes: number[],
  ratio: number,
  maxLines: number,
  maxWidth: number = CONTENT_W,
): { size: number; lines: string[]; truncated: boolean } {
  let best = { size: sizes[sizes.length - 1], lines: [] as string[], truncated: false };

  for (const size of sizes) {
    const lines = wrapBlock(text, size, ratio, maxWidth);
    best = { size, lines, truncated: false };
    if (lines.length <= maxLines) return best;
  }

  best.lines = best.lines.slice(0, maxLines);
  if (best.lines.length) {
    const last = best.lines[best.lines.length - 1];
    best.lines[best.lines.length - 1] = last.slice(0, Math.max(0, last.length - 1)) + "…";
    best.truncated = true;
  }
  return best;
}

function textLines(
  lines: string[],
  opts: {
    x: number;
    y: number;
    size: number;
    lineHeight: number;
    fill: string;
    font: string;
    weight?: number;
    spacing?: number;
  },
): { svg: string; height: number } {
  const parts = lines.map((line, i) => {
    const y = opts.y + i * opts.lineHeight;
    if (!line) return "";
    return `<text x="${opts.x}" y="${y}" xml:space="preserve" font-family="${opts.font}" font-size="${opts.size}" font-weight="${opts.weight ?? 400}" fill="${opts.fill}" letter-spacing="${opts.spacing ?? 0}">${esc(line)}</text>`;
  });
  return { svg: parts.join(""), height: lines.length * opts.lineHeight };
}

export function slideSvg(slide: Slide, cfg: BrandConfig): string {
  const c = cfg.colors;
  const display = cfg.fonts.display;
  const mono = cfg.fonts.mono;

  const isCover = slide.kind === "cover";
  const isCta = slide.kind === "cta";
  const isCode = slide.kind === "code";
  const dark = isCover || isCta;

  const bg = isCover ? c.ink : isCta ? c.accent : c.paper;
  const titleColor = dark ? "#ffffff" : c.ink;
  const bodyColor = isCover ? c.tint : isCta ? "#ffffff" : c.inkSoft;
  const labelColor = isCta ? "#ffffff" : c.accent;
  const faintColor = isCta ? "rgba(255,255,255,0.72)" : c.faint;

  const chips: string[] = [];

  // Top label
  const labelSize = 24;
  let labelSvg = "";
  if (slide.label) {
    labelSvg = textLines([slide.label.toUpperCase()], {
      x: PAD,
      y: 168,
      size: labelSize,
      lineHeight: labelSize,
      fill: dark ? faintColor : labelColor,
      font: mono,
      weight: 500,
      spacing: 3.5,
    }).svg;
  }

  // Accent rule under the label
  const rule = isCover
    ? `<rect x="${PAD}" y="222" width="128" height="9" fill="${c.accent}"/>`
    : isCta
      ? `<rect x="${PAD}" y="222" width="128" height="9" fill="#ffffff"/>`
      : `<rect x="${PAD}" y="222" width="128" height="9" fill="${c.accent}"/>`;

  if (isCover) {
    // Oversized faint chapter numeral as texture, kept clear of the title
    const chapterNum = /(\d+)\s+of/.exec(slide.body ?? "")?.[1] ?? "";
    if (chapterNum) {
      chips.push(
        `<text x="${W - PAD}" y="1186" text-anchor="end" font-family="${display}" font-size="360" font-weight="800" fill="rgba(255,255,255,0.05)">${esc(chapterNum)}</text>`,
      );
    }
  }

  const titleSizes = isCover ? [84, 76, 68, 60, 52] : [62, 56, 50, 44, 40];
  const title = fitText(slide.title, titleSizes, RATIO_DISPLAY, 4);
  const titleY = 330;
  const titleHeight = title.lines.length * title.size * 1.16;

  const titleSvg = textLines(title.lines, {
    x: PAD,
    y: titleY,
    size: title.size,
    lineHeight: title.size * 1.16,
    fill: titleColor,
    font: display,
    weight: isCover ? 800 : 700,
  }).svg;

  let bodySvg = "";
  let cursor = titleY + titleHeight + 46;

  if (!isCover && !isCta) {
    bodySvg += `<rect x="${PAD}" y="${cursor - 40}" width="${CONTENT_W}" height="2" fill="${c.line}"/>`;
    cursor += 40;
  }

  if (isCode && slide.code) {
    const monoSize = 30;
    const lineHeight = 44;
    const lines = slide.code.split("\n").slice(0, 9);
    const boxHeight = lines.length * lineHeight + 76;
    const boxY = cursor - 10;
    bodySvg += `<rect x="${PAD - 24}" y="${boxY}" width="${CONTENT_W + 48}" height="${boxHeight}" rx="18" fill="${c.tint}"/>`;
    bodySvg += `<rect x="${PAD - 24}" y="${boxY}" width="6" height="${boxHeight}" rx="3" fill="${c.accent}"/>`;
    const codeText = textLines(lines, {
      x: PAD + 12,
      y: boxY + 56,
      size: monoSize,
      lineHeight,
      fill: c.ink,
      font: mono,
    });
    bodySvg += codeText.svg;
    cursor = boxY + boxHeight;
  } else if (slide.body) {
    const available = FOOTER_Y - 108 - cursor;
    const bodySizes = [46, 42, 36, 30, 26];
    let chosen = bodySizes[bodySizes.length - 1];
    let lines: string[] = [];
    for (const size of bodySizes) {
      const candidate = wrapBlock(slide.body, size, RATIO_BODY);
      if (candidate.length * size * 1.45 <= available) {
        chosen = size;
        lines = candidate;
        break;
      }
      chosen = size;
      lines = candidate;
    }
    const maxLines = Math.max(2, Math.floor(available / (chosen * 1.45)));
    if (lines.length > maxLines) {
      lines = lines.slice(0, maxLines);
      const last = lines[lines.length - 1] ?? "";
      lines[lines.length - 1] = last.slice(0, Math.max(0, last.length - 1)) + "…";
    }
    bodySvg += textLines(lines, {
      x: PAD,
      y: cursor + chosen,
      size: chosen,
      lineHeight: chosen * 1.45,
      fill: bodyColor,
      font: display,
      weight: 400,
    }).svg;
  }

  const footer = textLines([cfg.brand.handle], {
    x: PAD,
    y: FOOTER_Y,
    size: 24,
    lineHeight: 24,
    fill: dark ? faintColor : c.faint,
    font: mono,
  }).svg;

  const counter = `<text x="${W - PAD}" y="${FOOTER_Y}" text-anchor="end" font-family="${mono}" font-size="24" fill="${esc(faintColor)}">${String(slide.index).padStart(2, "0")} / ${String(slide.total).padStart(2, "0")}</text>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<rect width="${W}" height="${H}" fill="${bg}"/>
${chips.join("")}
${labelSvg}
${rule}
${titleSvg}
${bodySvg}
<rect x="${PAD}" y="${FOOTER_Y - 46}" width="${CONTENT_W}" height="1" fill="${esc(dark ? "rgba(255,255,255,0.18)" : c.line)}"/>
${footer}
${counter}
</svg>`;
}

/* ------------------------------------------------------------------------- *
 * Rendering
 * ------------------------------------------------------------------------- */

export async function renderItem(
  item: QueueItem,
  cfg: BrandConfig,
  force = false,
): Promise<QueueItem> {
  const dir = path.join(OUT_DIR, item.id);
  ensureDir(dir);

  const images: string[] = [];
  for (const slide of item.slides) {
    const name = `slide-${String(slide.index).padStart(2, "0")}.jpg`;
    const abs = path.join(dir, name);
    if (force || !fs.existsSync(abs)) {
      const svg = slideSvg(slide, cfg);
      await sharp(Buffer.from(svg))
        .jpeg({ quality: 92, chromaSubsampling: "4:4:4" })
        .toFile(abs);
    }
    images.push(path.relative(AUTOMATION_DIR, abs).split(path.sep).join("/"));
  }

  fs.writeFileSync(path.join(dir, "caption.txt"), item.caption + "\n", "utf8");
  fs.writeFileSync(path.join(dir, "reel-script.md"), item.reelScript + "\n", "utf8");

  item.images = images;
  saveItem(item);
  return item;
}

/* ------------------------------------------------------------------------- *
 * CLI
 * ------------------------------------------------------------------------- */

async function main(): Promise<void> {
  const { flags, values } = parseArgs(process.argv.slice(2));
  const cfg = loadConfig();
  const onlyId = values.get("id");
  const reRenderable = new Set(["queued", "approved", "failed"]);

  const items = listQueue().filter((item) => {
    if (onlyId) return item.id === onlyId;
    return reRenderable.has(item.status);
  });

  if (!items.length) {
    console.log("Nothing to render. Run: npm run plan");
    return;
  }

  let rendered = 0;
  for (const item of items) {
    const force = flags.has("force") || !item.images.length;
    await renderItem(item, cfg, force);
    rendered++;
    console.log(`  ${item.id}  → ${item.slides.length} slides`);
  }

  console.log(`\nRendered ${rendered} post(s) into automation/out/`);
}

if (import.meta.filename === process.argv[1]) {
  await main();
}
