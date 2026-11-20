/**
 * Print the actual shapes behind the survey counts, so a fix can be scripted
 * against evidence instead of guesses.
 *
 *   node scripts/structure-report.mjs
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
    } else if (/\.mdx?$/.test(entry.name)) out.push(full);
  }
  return out;
}

/** Headings with fenced code removed. A `#` comment is not a heading. */
function headings(body) {
  const cleaned = body.replace(/^(\s*)(```|~~~)[\s\S]*?^\1?\2[^\n]*$/gm, '');
  return [...cleaned.matchAll(/^(#{1,6})\s+(.+)$/gm)].map((m) => ({
    level: m[1].length,
    text: m[2].trim(),
  }));
}

const noTitle = [];
const multiH1 = [];
const slugTitle = [];

for (const file of walk(ROOT)) {
  const rel = file.split(path.sep).join('/');
  if (NOT_A_CHAPTER.test(path.basename(file))) continue;

  const text = fs.readFileSync(file, 'utf8');
  const fm = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!fm) continue;
  const body = text.slice(fm[0].length);
  const rawTitle = ((/^title:\s*(.+)$/m.exec(fm[1]) || [])[1] || '').trim();
  const title = rawTitle.replace(/^["'](.*)["']$/, '$1');

  const hs = headings(body);
  const h1 = hs.filter((h) => h.level === 1);
  const first = hs[0];

  if (!title) noTitle.push({rel, h1: h1.map((h) => h.text), first});
  else if (/^[a-z0-9]+([-_][a-z0-9]+)+$/i.test(title)) slugTitle.push({rel, title, h1: h1.map((h) => h.text), first});
  if (h1.length > 1) multiH1.push({rel, title, h1: h1.map((h) => h.text)});
}

console.log(`=== no title: ${noTitle.length} ===`);
for (const r of noTitle) {
  console.log(`  ${r.rel}`);
  console.log(`     first heading: ${r.first ? `h${r.first.level} ${r.first.text}` : '(none)'}`);
}
console.log(`\n=== title is the filename: ${slugTitle.length} ===`);
for (const r of slugTitle) {
  console.log(`  ${r.title.padEnd(38)} h1: ${r.h1[0] || '(none)'}`);
  console.log(`     ${r.rel}`);
}
console.log(`\n=== more than one H1: ${multiH1.length} ===`);
for (const r of multiH1) {
  console.log(`  ${r.rel}`);
  console.log(`     title: ${r.title || '(none)'}`);
  for (const h of r.h1) console.log(`     h1: ${h}`);
}
