/**
 * A bare `$` in prose pairs with the next bare `$` anywhere later on the page.
 * Everything between them becomes one math span, so the reader sees the text
 * between them rendered as mathematics (or KaTeX's unknownSymbol warning).
 *
 * This lists every page where an unescaped `$` appears outside math, outside
 * inline code and outside a code fence, so the three or four genuine cases can
 * be fixed without touching the currency amounts that are already escaped.
 *
 *   node scripts/dollar-report.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

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

/** Split a page into prose segments, excluding code fences and inline code. */
function proseSegments(text) {
  const segments = [];
  let fence = null;
  let lineNo = 0;

  for (const line of text.split('\n')) {
    lineNo++;
    const fenceMatch = /^\s*(```|~~~)/.exec(line);
    if (fenceMatch) {
      fence = fence === null ? fenceMatch[1] : null;
      continue;
    }
    if (fence !== null) continue;
    if (/^\s*---\s*$/.test(line)) continue;

    // Remove inline code spans, keeping their length so column numbers hold.
    // A `$` in the middle of prose still counts as a delimiter candidate.
    const stripped = line.replace(/`[^`]*`/g, (m) => ' '.repeat(m.length));
    segments.push({line: lineNo, text: stripped, raw: line});
  }
  return segments;
}

const hits = [];

for (const file of walk('docs')) {
  const text = fs.readFileSync(file, 'utf8');
  const segments = proseSegments(text);
  const joined = segments.map((s) => s.text).join('\n');

  // Drop display math ($$...$$) and inline math ($...$) when their content looks
  // like math rather than prose: KaTeX-valid content has no sentence punctuation.
  const withoutMath = joined
    .replace(/\$\$[\s\S]*?\$\$/g, '')
    .replace(/\$[^$\n]{0,200}\$/g, (m) => (/[.!?]\s|\bthe\b|\band\b/.test(m) ? m : ''));

  // An escaped `\$` is already correct and is not a delimiter candidate.
  const remaining = (withoutMath.replace(/\\\$/g, '').match(/\$/g) || []).length;
  if (!remaining) continue;

  const evidence = [];
  for (const s of segments) {
    if (!s.text.includes('$')) continue;
    // Skip lines that are pure math.
    const noMath = s.text
      .replace(/\\\$/g, '')
      .replace(/\$\$[\s\S]*?\$\$/g, '')
      .replace(/\$[^$\n]{0,200}\$/g, '');
    if (!noMath.includes('$')) continue;
    evidence.push({line: s.line, raw: s.raw.trim().slice(0, 170)});
  }

  hits.push({file: file.split(path.sep).join('/'), remaining, evidence});
}

console.log(`pages with a bare (unescaped) dollar sign outside code and math: ${hits.length}\n`);
for (const h of hits) {
  console.log(`${h.file}   (${h.remaining} unescaped)`);
  for (const e of h.evidence.slice(0, 3)) console.log(`   ${e.line}: ${e.raw}`);
}
