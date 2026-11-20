#!/usr/bin/env node
/**
 * Content-quality census across the deploy tree.
 *
 * The house rule for this repo is "400+ lines per chapter, with learning
 * objectives, theory, examples, summary, takeaways, quiz and exercises".
 * This measures how much of the tree actually meets it, so content work is
 * aimed at the chapters that need it instead of guessed at.
 *
 *   node scripts/content-census.mjs            # summary + worst offenders
 *   node scripts/content-census.mjs --course laravel
 */

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const only = args.includes('--course')
  ? args[args.indexOf('--course') + 1]
  : null;

const ROOT = 'docs/courses';

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
      walk(full, out);
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      out.push(full);
    }
  }
  return out;
}

const SECTIONS = [
  ['objectives', /^#{1,3}\s*.*(learning objective|objectives|what you.{0,3}ll learn)/im],
  ['summary', /^#{1,3}\s*.*summary/im],
  ['takeaways', /^#{1,3}\s*.*(practical takeaway|key takeaway|takeaways)/im],
  ['quiz', /^#{1,3}\s*.*(quiz|check your understanding|self.?test)/im],
  ['exercises', /^#{1,3}\s*.*(exercise|practice|drill|homework)/im],
];

const courses = new Map();

for (const file of walk(ROOT)) {
  const rel = file.split(path.sep).join('/');
  const course = rel.replace(`${ROOT}/`, '').split('/')[0];
  if (only && course !== only) continue;

  const text = fs.readFileSync(file, 'utf8');
  const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
  const lines = body.split('\n').length;
  const words = (body.match(/\S+/g) || []).length;
  const fences = (body.match(/^```/gm) || []).length / 2;
  const h2 = (body.match(/^## /gm) || []).length;
  const missing = SECTIONS.filter(([, re]) => !re.test(body)).map(([name]) => name);

  const row = {rel, lines, words, fences: Math.round(fences), h2, missing};
  if (!courses.has(course)) courses.set(course, []);
  courses.get(course).push(row);
}

const all = [...courses.values()].flat();
const short = all.filter((r) => r.lines < 400);
const empty = all.filter((r) => r.words < 250);
const noH2 = all.filter((r) => r.h2 === 0);
const missingQuiz = all.filter((r) => r.missing.includes('quiz'));
const missingObjectives = all.filter((r) => r.missing.includes('objectives'));
const missingExercises = all.filter((r) => r.missing.includes('exercises'));

console.log(`chapters                : ${all.length}`);
console.log(`under 400 lines         : ${short.length}  (${Math.round((short.length / all.length) * 100)}%)`);
console.log(`under 250 words         : ${empty.length}`);
console.log(`no "## " section at all : ${noH2.length}`);
console.log(`no objectives section   : ${missingObjectives.length}`);
console.log(`no quiz section         : ${missingQuiz.length}`);
console.log(`no exercises section    : ${missingExercises.length}`);

const words = all.map((r) => r.words).sort((a, b) => a - b);
console.log(`median words            : ${words[Math.floor(words.length / 2)]}`);

console.log('\nper course (chapters, median words, under 400 lines):');
const rows = [...courses.entries()]
  .map(([name, items]) => {
    const w = items.map((i) => i.words).sort((a, b) => a - b);
    return {
      name,
      n: items.length,
      median: w[Math.floor(w.length / 2)],
      short: items.filter((i) => i.lines < 400).length,
    };
  })
  .sort((a, b) => a.median - b.median);

for (const r of rows) {
  console.log(
    `  ${String(r.median).padStart(5)}  ${String(r.n).padStart(3)} ch  ${String(r.short).padStart(3)} short  ${r.name}`,
  );
}

console.log('\nthinnest 15 chapters:');
for (const r of [...all].sort((a, b) => a.words - b.words).slice(0, 15)) {
  console.log(
    `  ${String(r.words).padStart(5)} words  ${String(r.lines).padStart(5)} lines  ${r.rel}${r.missing.length ? '  [missing: ' + r.missing.join(', ') + ']' : ''}`,
  );
}
