#!/usr/bin/env node
/**
 * Chapter-level content census that excludes the pages which are supposed to be
 * short: module indexes, READMEs, visual notes and templates. The first version
 * of this script counted them, which made "88 short chapters" in the placement
 * course — most of those are the 34 module hub pages, not thin teaching.
 *
 *   node scripts/chapter-quality.mjs            # whole tree
 *   node scripts/chapter-quality.mjs laravel    # one course
 */

import fs from 'node:fs';
import path from 'node:path';

const only = process.argv[2] || null;
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

const SECTIONS = {
  objectives: /^#{1,3}\s*.*(learning objective|objectives|what you.{0,3}ll learn)/im,
  summary: /^#{1,3}\s*.*summary/im,
  takeaways: /^#{1,3}\s*.*(practical takeaway|key takeaway|takeaways)/im,
  quiz: /^#{1,3}\s*.*(quiz|check your understanding|self.?test)/im,
  exercises: /^#{1,3}\s*.*(exercise|practice|drill|homework)/im,
};

const rows = [];
let skipped = 0;

for (const file of walk(ROOT)) {
  const rel = file.split(path.sep).join('/');
  const base = path.basename(file);
  const course = rel.replace(`${ROOT}/`, '').split('/')[0];
  if (only && course !== only) continue;
  if (NOT_A_CHAPTER.test(base)) {
    skipped++;
    continue;
  }

  const text = fs.readFileSync(file, 'utf8');
  const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
  const words = (body.match(/\S+/g) || []).length;
  const lines = body.split('\n').length;
  const h2 = (body.match(/^## /gm) || []).length;
  const missing = Object.entries(SECTIONS)
    .filter(([, re]) => !re.test(body))
    .map(([name]) => name);

  rows.push({rel, course, words, lines, h2, missing});
}

const byCourse = new Map();
for (const r of rows) {
  if (!byCourse.has(r.course)) byCourse.set(r.course, []);
  byCourse.get(r.course).push(r);
}

const thin = rows.filter((r) => r.words < 600);
const veryThin = rows.filter((r) => r.words < 300);

console.log(`chapters (index/readme/visual-notes excluded): ${rows.length}   skipped: ${skipped}`);
console.log(`under 600 words: ${thin.length}   under 300: ${veryThin.length}`);
console.log(`no "## " heading: ${rows.filter((r) => r.h2 === 0).length}`);
console.log(`no quiz: ${rows.filter((r) => r.missing.includes('quiz')).length}`);
console.log(`no exercises: ${rows.filter((r) => r.missing.includes('exercises')).length}`);

console.log('\ncourses with the most thin chapters:');
const ranked = [...byCourse.entries()]
  .map(([course, items]) => ({
    course,
    n: items.length,
    thin: items.filter((i) => i.words < 600).length,
    median: items.map((i) => i.words).sort((a, b) => a - b)[Math.floor(items.length / 2)],
  }))
  .filter((r) => r.thin > 0)
  .sort((a, b) => b.thin - a.thin);

for (const r of ranked.slice(0, 14)) {
  console.log(`  ${String(r.thin).padStart(3)} of ${String(r.n).padStart(3)} thin   median ${String(r.median).padStart(5)} w   ${r.course}`);
}

console.log('\nthinnest 20 chapters:');
for (const r of [...rows].sort((a, b) => a.words - b.words).slice(0, 20)) {
  const miss = r.missing.length ? `  [no ${r.missing.join('/')}]` : '';
  console.log(`  ${String(r.words).padStart(5)} w  ${r.rel}${miss}`);
}
