/**
 * Dump the first heading-ish line of every page whose rendered title is still a
 * filename, so the repair is written against the real text.
 *
 *   node scripts/filename-title-dump.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'docs/courses';

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.mdx?$/.test(entry.name)) out.push(full);
  }
  return out;
}

const fileSlug = /^[\d_]*(ch[-_])?[a-z0-9]+([-_][a-z0-9]+)+$/i;
const rows = [];

for (const file of walk(ROOT)) {
  const text = fs.readFileSync(file, 'utf8');
  const fm = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!fm) continue;
  const raw = ((/^title:\s*(.+)$/m.exec(fm[1]) || [])[1] || '').trim().replace(/^["'](.*)["']$/, '$1');
  if (!fileSlug.test(raw)) continue;

  const body = text.slice(fm[0].length);
  const firstLines = body.split('\n').slice(0, 6);
  const headingLike = firstLines.find((l) => /#\s+\S/.test(l)) || '';

  rows.push({
    rel: file.split(path.sep).join('/'),
    title: raw,
    label: ((/^sidebar_label:\s*(.+)$/m.exec(fm[1]) || [])[1] || '').trim(),
    headingLike,
  });
}

console.log(`${rows.length} pages with a filename title:\n`);
for (const r of rows) {
  console.log(`${r.rel}`);
  console.log(`   title   : ${r.title}`);
  console.log(`   label   : ${r.label}`);
  console.log(`   heading : ${JSON.stringify(r.headingLike.slice(0, 110))}`);
}
