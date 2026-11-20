/**
 * Thirty-three docs still published under `/courses/...` because they declare
 * no `slug:`, so the route came from the file path. The site then serves the
 * same content at two shapes:
 *
 *     /learning-course/START_HERE          (declares a slug)
 *     /courses/learning-course/01_AI_Setup/First_AI_Learning_Session  (does not)
 *
 * and two author-only files were public: `PLAN.md` (a syllabus expansion plan)
 * and `TEMPLATE.md` (a chapter template).
 *
 * This gives the thirty-three the same explicit-slug convention their siblings
 * already use - `/<course>/<path inside the course>` - and marks the two
 * author files `draft: true`, which the production build skips.
 *
 *   node scripts/add-remaining-slugs.mjs           # report
 *   node scripts/add-remaining-slugs.mjs --write
 */
import fs from 'node:fs';
import path from 'node:path';

const WRITE = process.argv.includes('--write');
const ROOT = 'docs/courses';
const SKIP = /^(index|visual-notes)\.mdx?$/i;
const AUTHOR_ONLY = /^(PLAN|TEMPLATE)\.mdx?$/i;

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

const slugged = [];
const drafted = [];

for (const file of walk(ROOT)) {
  const base = path.basename(file);
  if (SKIP.test(base)) continue;

  const text = fs.readFileSync(file, 'utf8');
  const fm = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  if (!fm) continue;
  const front = fm[1];

  if (AUTHOR_ONLY.test(base)) {
    if (/^draft:/m.test(front)) continue;
    const next = `draft: true\n${front}`;
    drafted.push(file.split(path.sep).join('/'));
    console.log(`${file.split(path.sep).join('/')}\n    -> draft: true (removed from the production build)`);
    if (WRITE) fs.writeFileSync(file, text.replace(front, next), 'utf8');
    continue;
  }

  if (/^slug:/m.test(front)) continue;

  const rel = path.relative(ROOT, file).split(path.sep).join('/');
  const slug = `/${rel.replace(/\.mdx?$/, '')}`;

  let next = front;
  if (!/^id:/m.test(next)) {
    const stem = base.replace(/\.mdx?$/, '');
    next = `id: ${JSON.stringify(stem)}\n${next}`;
  }
  next = next.replace(/^id:.*$/m, (line) => `${line}\nslug: ${slug}`);

  slugged.push(rel);
  console.log(`${rel}\n    -> ${slug}`);
  if (WRITE) fs.writeFileSync(file, text.replace(front, next), 'utf8');
}

console.log(`\nslugs added: ${slugged.length}   drafts set: ${drafted.length}   mode: ${WRITE ? 'WRITE' : 'report'}`);
