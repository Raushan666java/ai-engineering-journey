/**
 * After the course-landing fix, the sitemap still published 89 URLs under
 * `/courses/`. Those are docs that declare no `slug:`, so the docs plugin
 * derives their route from the file path - and the file path starts at
 * `docs/courses/`. The result is the same content reachable at two shapes:
 *
 *     /discrete-mathematics/01-sets/     (declares a slug)
 *     /courses/cyber-security/cloud-mobile   (declares none)
 *
 * That is duplicate content for crawlers and an inconsistent URL space for
 * readers. It also keeps two author-only files public: `PLAN.md` and
 * `TEMPLATE.md`.
 *
 *   node scripts/slug-coverage.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'docs/courses';
const SKIP = /^(index|visual-notes)\.mdx?$/i;

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

const noSlug = [];
const authorOnly = [];

for (const file of walk(ROOT)) {
  const rel = file.split(path.sep).join('/');
  const base = path.basename(file);
  if (SKIP.test(base)) continue;

  const text = fs.readFileSync(file, 'utf8');
  const fm = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  const front = fm ? fm[1] : '';

  if (/^(PLAN|TEMPLATE)\.mdx?$/i.test(base) || /^(PLAN|TEMPLATE)\.mdx?$/i.test(path.basename(rel))) {
    authorOnly.push({rel, draft: /^draft:/m.test(front)});
    continue;
  }

  if (!fm || !/^slug:/m.test(front)) noSlug.push(rel);
}

console.log(`docs with no slug (published under /courses/): ${noSlug.length}`);
for (const r of noSlug.slice(0, 16)) console.log(`  ${r}`);
if (noSlug.length > 16) console.log(`  ... ${noSlug.length - 16} more`);

console.log(`\nauthor-only files: ${authorOnly.length}`);
for (const a of authorOnly) console.log(`  ${a.rel}   draft: ${a.draft}`);
