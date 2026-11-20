/**
 * Every course has a landing page, and every course landing page was at a
 * different URL from the one the site links to.
 *
 * The docs plugin runs with routeBasePath '/', so a doc at
 * `docs/courses/machine-learning/index.md` with no `slug:` is published at
 * `/courses/machine-learning/`. Six courses declare `slug: /<course>` and so
 * publish at `/<course>/`. Chapters declare their own slugs
 * (`slug: /machine-learning/01-introduction`), so chapter URLs were already
 * `/<course>/<chapter>/`.
 *
 * The result: the navbar, the footer, the 404 page, /about and /courses all
 * link to `/<course>/`, which existed for six courses and 404'd for the other
 * fifty-three. Clicking any course card was a dead end, and with
 * `onBrokenLinks: 'throw'` the build now refuses to ship it.
 *
 * This gives the fifty-three courses the same explicit `slug:` the other six
 * already use, so one consistent rule holds for the whole site:
 *
 *     /<course>/            the course landing page
 *     /<course>/<chapter>/  a chapter
 *
 * Nothing links to the old `/courses/<course>/` form, so nothing is orphaned.
 *
 *   node scripts/add-course-slugs.mjs           # report
 *   node scripts/add-course-slugs.mjs --write
 */
import fs from 'node:fs';
import path from 'node:path';

const WRITE = process.argv.includes('--write');
const ROOT = path.join('docs', 'courses');

const hasSlug = [];
const added = [];
const skipped = [];

for (const entry of fs.readdirSync(ROOT, {withFileTypes: true})) {
  if (!entry.isDirectory()) continue;
  const file = path.join(ROOT, entry.name, 'index.md');
  if (!fs.existsSync(file)) {
    skipped.push(`${entry.name}  (no index.md)`);
    continue;
  }

  const text = fs.readFileSync(file, 'utf8');
  const fm = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  if (!fm) {
    skipped.push(`${entry.name}  (no frontmatter)`);
    continue;
  }

  const front = fm[1];
  if (/^slug:/m.test(front)) {
    hasSlug.push(entry.name);
    continue;
  }

  let next = front;
  if (!/^id:/m.test(next)) next = `id: index\n${next}`;
  // Insert the slug right after id so the routing keys sit together.
  next = next.replace(/^id:\s*.*$/m, (line) => `${line}\nslug: /${entry.name}`);

  added.push(entry.name);
  console.log(`  ${entry.name.padEnd(34)} -> /${entry.name}/`);

  if (WRITE) {
    fs.writeFileSync(file, text.replace(fm[1], next), 'utf8');
  }
}

console.log(`\nslug added: ${added.length}   already had one: ${hasSlug.length}   skipped: ${skipped.length}   mode: ${WRITE ? 'WRITE' : 'report'}`);
for (const s of skipped) console.log(`  skipped ${s}`);
