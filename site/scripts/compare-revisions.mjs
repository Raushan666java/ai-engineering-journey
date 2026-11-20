#!/usr/bin/env node
/**
 * Is the clean revision the same document as the current one, or does it have
 * less content? Compares structural markers, which survive mojibake.
 *
 *   node scripts/compare-revisions.mjs 815c93e284
 */

import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const rev = process.argv[2] || '815c93e284';
const REPO = path.resolve('..');

const targets = [
  'courses/gate-cs-preparation/01-general-aptitude.md',
  'courses/gate-cs-preparation/02-theory-of-computation.md',
  'courses/gate-cs-preparation/04-digital-logic.md',
  'courses/gate-cs-preparation/05-gate-strategy.md',
  'courses/gate-cs-preparation/23-gate-2025-solved.md',
  'courses/learning-how-to-learn/ch-09-framework-language-learning.md',
  'courses/data-analysis-interpretation/05-mixed-data-interpretation.md',
];

const count = (t, re) => (t.match(re) || []).length;

function stat(t) {
  return {
    lines: t.split('\n').length,
    h2: count(t, /^## /gm),
    h3: count(t, /^### /gm),
    h4: count(t, /^#### /gm),
    details: count(t, /<details/g),
    fences: count(t, /^```/gm),
    questions: count(t, /^#{3,4}\s*Q\d+/gm),
    tables: count(t, /^\|/gm),
    words: t.split(/\s+/).filter(Boolean).length,
  };
}

for (const rel of targets) {
  const docsPath = path.join(REPO, 'docs', rel);
  if (!fs.existsSync(docsPath)) {
    console.log(`${rel}: missing`);
    continue;
  }
  const clean = execFileSync('git', ['show', `${rev}:docs/${rel}`], {
    cwd: REPO,
    maxBuffer: 128 * 1024 * 1024,
  }).toString('utf8');
  const now = fs.readFileSync(docsPath, 'utf8');
  const a = stat(clean);
  const b = stat(now);

  const delta = {};
  for (const k of Object.keys(a)) if (a[k] !== b[k]) delta[k] = `${a[k]} -> ${b[k]}`;

  console.log(`\n${rel}`);
  console.log(`  clean   ${JSON.stringify(a)}`);
  console.log(`  current ${JSON.stringify(b)}`);
  console.log(`  delta   ${Object.keys(delta).length ? JSON.stringify(delta) : 'identical structure'}`);
  console.log(`  bad in clean: ${count(clean, /\uFFFD/g)}`);
}
