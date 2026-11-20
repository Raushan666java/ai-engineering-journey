#!/usr/bin/env node
/**
 * Everything a reader trips over before reading a word: the page's name in the
 * sidebar, its title in the browser tab, and whether the body has any structure
 * at all. Read-only.
 *
 *   node scripts/title-survey.mjs
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'docs/courses';
const NOT_A_CHAPTER = /^(index|readme|visual-notes|template)\.mdx?$/i;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
      walk(full, out);
    } else if (/\.mdx?$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

const slugShape = (v) => /^["']?[a-z0-9]+([-_][a-z0-9]+)+["']?$/i.test(v || '');
const partShape = (v) => /^["']?Part\s+[IVXLC]+\b/i.test(v || '');

/**
 * Markdown with fenced code removed. A Python or bash comment starts with `#`
 * at column 0, so counting headings in the raw text reports hundreds of phantom
 * H1s that the renderer never produces.
 */
function prose(body) {
  return body.replace(/^(\s*)(```|~~~)[\s\S]*?^\1?\2[^\n]*$/gm, '');
}

const byCourse = new Map();
const rows = [];

for (const file of walk(ROOT)) {
  const rel = file.split(path.sep).join('/');
  const course = rel.replace(`${ROOT}/`, '').split('/')[0];
  const base = path.basename(file);
  if (NOT_A_CHAPTER.test(base)) continue;

  const text = fs.readFileSync(file, 'utf8');
  const fm = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!fm) continue;
  const body = text.slice(fm[0].length);
  const title = ((/^title:\s*(.+)$/m.exec(fm[1]) || [])[1] || '')
    .trim()
    .replace(/^["'](.*)["']$/, '$1');

  const h1 = (prose(body).match(/^#\s+/gm) || []).length;
  const h2 = (prose(body).match(/^##\s+/gm) || []).length;
  const words = (body.match(/\S+/g) || []).length;

  const flags = [];
  if (!title) flags.push('no-title');
  else if (slugShape(title)) flags.push('slug-as-title');
  else if (partShape(title)) flags.push('part-as-title');
  if (h1 > 1) flags.push(`h1x${h1}`);
  if (h2 === 0) flags.push('no-h2');
  if (words < 300) flags.push(`thin:${words}w`);
  if (!flags.length) continue;

  rows.push({rel, course, title, flags});
  if (!byCourse.has(course)) byCourse.set(course, []);
  byCourse.get(course).push(flags);
}

console.log(`pages with a naming or structure defect: ${rows.length}\n`);

const counts = {};
for (const r of rows) for (const f of r.flags) {
  const key = f.startsWith('thin:') ? 'thin' : f.replace(/x\d+$/, '');
  counts[key] = (counts[key] || 0) + 1;
}
for (const [k, n] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(n).padStart(4)}  ${k}`);
}

console.log('\nby course:');
for (const [course, items] of [...byCourse.entries()].sort((a, b) => b[1].length - a[1].length)) {
  console.log(`  ${String(items.length).padStart(4)}  ${course}`);
}

const interesting = rows.filter((r) =>
  r.flags.some((f) => f === 'slug-as-title' || f === 'part-as-title' || f === 'no-h2'),
);
console.log(`\nname/structure defects (${interesting.length}):`);
for (const r of interesting.slice(0, 60)) {
  console.log(`  ${r.flags.join(',').padEnd(28)} ${r.title || '(no title)'}`);
  console.log(`      ${r.rel}`);
}
