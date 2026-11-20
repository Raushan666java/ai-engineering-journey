#!/usr/bin/env node
/**
 * Content pass: replace the stale, self-referential copy on the placement hub.
 *
 * The hub advertised "33 subjects, 299+ sub-chapters, 3,253+ interview Q&A".
 * Measured today: 34 modules, 357 chapters in this course, 290 `### Q<n>`
 * questions in it, 4,713 site-wide. Numbers a reader can check are worth more
 * than numbers that sound big.
 *
 * Safe to re-run: every replacement is anchored and skipped when absent.
 *
 *   node scripts/content-pass.mjs
 *   node scripts/content-pass.mjs --write
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const WRITE = process.argv.includes('--write');

const DESC =
  '34 modules from core CS to production LLM systems: Python, SQL, ML, RAG, agents and interview prep, with 357 chapters, quizzes and exercises.';

const RULES = [
  // frontmatter description (any quote style, any previous value)
  [/^description:.*$/m, `description: "${DESC}"`],
  // hero blurb
  [
    /^> \*\*Zero to job-ready in 12 months\.[^\n]*$/m,
    '> **34 modules · 357 chapters · 290 interview questions in this course, 4,700+ across the site. Every chapter ships with a quiz and exercises. Progress tracking runs in browser localStorage — no backend.**',
  ],
  // feature table
  [/\| \*\*Subjects\*\* \| 33 broad subject areas/, '| **Subjects** | 34 broad subject areas'],
  [
    /\| \*\*Sub-chapters\*\* \| 299\+ focused topic files, each 400\+ lines \|/,
    '| **Chapters** | 357 focused topic files, most 400+ lines |',
  ],
  [
    /\| \*\*Interview Q&A\*\* \| 3,253\+ questions with expandable answers/,
    '| **Interview Q&A** | 290 here, 4,700+ site-wide, with expandable answers',
  ],
  [
    /\| \*\*Chapter Quizzes\*\* \| 5 MCQ per sub-chapter = 1,495\+ total questions \|/,
    '| **Chapter Quizzes** | 5 multiple-choice questions per chapter |',
  ],
  [
    /\| \*\*Exercises\*\* \| 5 hands-on per sub-chapter = 1,290\+ exercises \|/,
    '| **Exercises** | 5 hands-on tasks per chapter |',
  ],
];

const TARGETS = [
  'docs/courses/ai-engineering-placement/index.md',
  'site/docs/courses/ai-engineering-placement/index.md',
];

let touched = 0;
for (const rel of TARGETS) {
  const file = path.resolve(rel);
  if (!fs.existsSync(file)) {
    console.log(`missing  : ${rel}`);
    continue;
  }
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  let hits = 0;
  for (const [re, repl] of RULES) {
    if (re.test(text)) {
      text = text.replace(re, repl);
      hits++;
    }
  }
  if (text === before) {
    console.log(`no change: ${rel}`);
    continue;
  }
  touched++;
  if (WRITE) fs.writeFileSync(file, text, 'utf8');
  console.log(`${WRITE ? 'wrote' : 'would write'}    : ${rel}  (${hits} rules)`);
}

console.log(`\nmode: ${WRITE ? 'WRITE' : 'dry-run'}   files: ${touched}`);
