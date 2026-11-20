/**
 * KaTeX warned during build 8 about unrecognised Unicode characters inside
 * math. Finding them by eye is unreliable because the corpus writes currency as
 * an escaped dollar (`\$250`), and a naive `$...$` scan treats that `\$` as the
 * opening of a math span - which is exactly how a currency sentence gets
 * reported as a broken formula.
 *
 * This hides escaped dollars first, then scans what is left, so only genuine
 * math spans are reported. A genuine span that contains prose is a real bug:
 * KaTeX drops the rest of the formula and the page shows a broken equation.
 *
 *   node scripts/math-spans-report.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'docs/courses';
const PROSE = /[\u2014\u2013\u201c\u201d\u2212\u00d7\u00f7]/;

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
let unbalanced = [];

for (const file of walk(ROOT)) {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  const rel = file.split(path.sep).join('/');
  let fence = null;

  lines.forEach((line, i) => {
    const m = /^\s*(```|~~~)/.exec(line);
    if (m) {
      if (!fence) fence = m[1];
      else if (m[1] === fence) fence = null;
      return;
    }
    if (fence) return;

    // Hide escaped dollars so they cannot open or close a span.
    const masked = line.replace(/\\\$/g, '\u0001');
    const spans = [...masked.matchAll(/\$([^$\u0001]{1,240})\$/g)].map((x) => x[1]);
    const bad = spans.filter((s) => PROSE.test(s) || s.includes('%'));
    if (bad.length) {
      hits.push({rel, line: i + 1, bad, text: line.trim().slice(0, 150)});
    }
    if ((masked.match(/\$/g) || []).length % 2 === 1) {
      unbalanced.push({rel, line: i + 1, text: line.trim().slice(0, 130)});
    }
  });
}

console.log(`math spans that contain prose characters: ${hits.length}\n`);
for (const h of hits) {
  console.log(`${h.rel}:${h.line}`);
  console.log(`   ${h.text}`);
  for (const b of h.bad) console.log(`   math: $${b}$`);
}

console.log(`\nlines with an odd number of $ (a span that never closes): ${unbalanced.length}`);
for (const u of unbalanced.slice(0, 25)) {
  console.log(`  ${u.rel}:${u.line}  ${u.text}`);
}
