/**
 * Source heuristics lie: Docusaurus derives a page title from the first H1 when
 * frontmatter has none, and humanizes the filename when neither exists. So ask
 * the built HTML what a reader actually sees.
 *
 *   node scripts/rendered-titles.mjs [--limit 40]
 *
 * Reports pages whose rendered <title> still looks like a filename or a path,
 * and pages whose body has more than one <h1>.
 */
import fs from 'node:fs';
import path from 'node:path';

const BUILD = 'build';
const limitArg = process.argv.indexOf('--limit');
const LIMIT = limitArg > -1 ? Number(process.argv[limitArg + 1]) : 40;

function pages(dir, out = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'assets' || entry.name === 'img' || entry.name === 'search') continue;
      pages(full, out);
    } else if (entry.name === 'index.html') out.push(full);
  }
  return out;
}

const fileSlug = /^[\d_]*[a-z0-9]+([-_][a-z0-9]+)+$/;
const dirSlug = /^[\d_]*[a-z0-9]+([-_][a-z0-9]+)+(-[\w-]+)*$/;

const bad = [];
const multi = [];
let checked = 0;

for (const file of pages(BUILD)) {
  const html = fs.readFileSync(file, 'utf8');
  checked++;
  const titleTag = (/<title[^>]*>([\s\S]*?)<\/title>/.exec(html) || [])[1] || '';
  const title = titleTag.replace(/\s*\|\s*AI Engineering Journey\s*$/, '').trim();
  const rel = path.relative(BUILD, file).split(path.sep).join('/');
  const h1s = (html.match(/<h1[\s>][\s\S]*?<\/h1>/g) || []).length;

  if (fileSlug.test(title) || dirSlug.test(title) || /^[\w-]+\/[\w-]+$/.test(title)) {
    bad.push({rel, title});
  }
  if (h1s > 1) multi.push({rel, title, h1s});
}

console.log(`pages checked: ${checked}`);
console.log(`\nrendered title still looks like a filename/slug: ${bad.length}`);
for (const r of bad.slice(0, LIMIT)) console.log(`  ${r.title.padEnd(44)} ${r.rel}`);
if (bad.length > LIMIT) console.log(`  ... ${bad.length - LIMIT} more`);

console.log(`\nmore than one <h1> in the rendered page: ${multi.length}`);
for (const r of multi.slice(0, LIMIT)) console.log(`  ${r.h1s} h1  ${r.title.padEnd(40)} ${r.rel}`);
if (multi.length > LIMIT) console.log(`  ... ${multi.length - LIMIT} more`);
