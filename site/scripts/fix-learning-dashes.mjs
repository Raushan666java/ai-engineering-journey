#!/usr/bin/env node
/**
 * The three `learning-how-to-learn` chapters were imported with 222 U+FFFD
 * characters each, at a point that predates every commit in this repo, so git
 * cannot restore them.
 *
 * What is recoverable is the *meaning*. Reading the surviving context, every
 * one of them stands where a dash belongs:
 *
 *   title: "Python <FFFD> list comprehension"
 *   description: "Theory exams <FFFD> especially competitive ones ... <FFFD> demand"
 *   "Learning Dashboard <FFFD> Week of [Date]"
 *
 * The progress bars (`[<FFFD><FFFD><FFFD><FFFD><FFFD><FFFD>]`) are the one
 * exception: they were block characters, and a run of dashes is a closer
 * rendering than a run of replacement glyphs. This script therefore writes a
 * dash and nothing else — it does not invent words.
 *
 * The two `data-analysis-interpretation` chapters are deliberately excluded:
 * there the lost characters are operators (×, −, ÷) and a blanket replacement
 * would silently change the arithmetic.
 *
 *   node scripts/fix-learning-dashes.mjs            # report
 *   node scripts/fix-learning-dashes.mjs --write
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const WRITE = process.argv.includes('--write');
const REPO = path.resolve('..');

const FILES = [
  'docs/courses/learning-how-to-learn/ch-08-gate-theory-prep.md',
  'docs/courses/learning-how-to-learn/ch-09-framework-language-learning.md',
  'docs/courses/learning-how-to-learn/ch-10-meta-learning-system.md',
  'site/docs/courses/learning-how-to-learn/ch-08-gate-theory-prep.md',
  'site/docs/courses/learning-how-to-learn/ch-09-framework-language-learning.md',
  'site/docs/courses/learning-how-to-learn/ch-10-meta-learning-system.md',
];

// U+FFFD twice over ("ï¿½"), and the plain form.
const LOST = [/\u00EF\u00BF\u00BD/g, /\uFFFD/g];

for (const rel of FILES) {
  const file = path.join(REPO, rel);
  if (!fs.existsSync(file)) {
    console.log(`skip (missing): ${rel}`);
    continue;
  }
  const before = fs.readFileSync(file, 'utf8');
  let after = before;
  for (const re of LOST) after = after.replace(re, '\u2014');

  const count = LOST.reduce((n, re) => n + (before.match(re) || []).length, 0);
  if (!count) {
    console.log(`clean: ${rel}`);
    continue;
  }
  console.log(`${rel}   ${count} replacement chars -> dash`);
  if (WRITE) fs.writeFileSync(file, after, 'utf8');
}

console.log(`mode: ${WRITE ? 'WRITE' : 'report only'}`);
