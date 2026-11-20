/**
 * KaTeX warned during build 8:
 *
 *   Unrecognized Unicode character "—" (8212) [unknownSymbol]
 *   Unrecognized Unicode character """ (8221) [unknownSymbol]
 *   % comment has no terminating newline ... [commentAtEnd]
 *
 * Those come from prose characters that ended up inside a math span. KaTeX
 * cannot typeset an em dash or a curly quote, and `%` starts a LaTeX comment,
 * so the formula after it silently disappears. The page still builds - it just
 * renders a broken formula, which is the worst kind of bug on a teaching site.
 *
 * This lists every math span containing such a character.
 *
 *   node scripts/math-chars-report.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'docs/courses';
const BAD = /[\u2014\u2013\u201d\u201c\u2212\u00d7\u00f7%]/;

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
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  let fence = null;

  lines.forEach((line, i) => {
    const m = /^\s*(```|~~~)/.exec(line);
    if (m) {
      if (!fence) fence = m[1];
      else if (m[1] === fence) fence = null;
      return;
    }
    if (fence) return;

    const spans = [...line.matchAll(/\$([^$]{1,200})\$/g)].map((x) => x[1]);
    if (!spans.length) return;
    const bad = spans.filter((s) => BAD.test(s));
    if (bad.length) {
      hits.push({
        file: file.split(path.sep).join('/'),
        line: i + 1,
        bad,
        text: line.trim().slice(0, 140),
      });
    }
  });
}

console.log(`math spans containing an em dash, curly quote, or bare %: ${hits.length}\n`);
for (const h of hits) {
  console.log(`${h.file}:${h.line}`);
  console.log(`   ${h.text}`);
  for (const b of h.bad) console.log(`   math: $${b}$`);
}
