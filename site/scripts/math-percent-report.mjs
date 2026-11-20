/**
 * KaTeX warns "LaTeX-incompatible input ... % comment has no terminating
 * newline ... [commentAtEnd]" during the build. That warning is not cosmetic:
 * in LaTeX, `%` starts a comment, so a percent sign written inside inline math
 *
 *     $50%$ of the price
 *
 * swallows the rest of the line and the formula renders wrong or not at all.
 * The corpus is full of percentages, so this matters.
 *
 * This finds every inline/display math span that contains a bare `%`, and
 * reports the file and the exact expression.
 *
 *   node scripts/math-percent-report.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'docs/courses';

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('.')) continue;
      walk(full, out);
    } else if (/\.mdx?$/.test(entry.name)) out.push(full);
  }
  return out;
}

const hits = [];

for (const file of walk(ROOT)) {
  const text = fs.readFileSync(file, 'utf8');
  const rel = file.split(path.sep).join('/');
  const lines = text.split('\n');
  let inFence = null;

  lines.forEach((line, i) => {
    const fence = /^\s*(```|~~~)/.exec(line);
    if (fence) {
      if (!inFence) inFence = fence[1];
      else if (fence[1] === inFence) inFence = null;
      return;
    }
    if (inFence) return;
    // Skip escaped dollars.
    const stripped = line.replace(/\\\$/g, '');
    // Even number of $ on the line means the math spans are closed on it.
    const marks = (stripped.match(/\$/g) || []).length;
    if (marks >= 2 && /%/.test(stripped)) {
      // Pull out each $...$ span and report the ones with a % inside.
      const spans = [...stripped.matchAll(/\$([^$]{1,120})\$/g)].map((m) => m[1]);
      const bad = spans.filter((s) => s.includes('%'));
      if (bad.length) hits.push({rel, line: i + 1, spans: bad, text: line.trim().slice(0, 130)});
    }
  });
}

console.log(`math spans containing a bare %: ${hits.length}\n`);
for (const h of hits.slice(0, 60)) {
  console.log(`${h.rel}:${h.line}`);
  console.log(`   ${h.text}`);
  for (const s of h.spans) console.log(`   math: $${s}$`);
}
if (hits.length > 60) console.log(`... ${hits.length - 60} more`);
