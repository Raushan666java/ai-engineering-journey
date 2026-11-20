#!/usr/bin/env node
/**
 * Damage profile for one file across every revision it ever had, in both trees.
 *
 *   node scripts/damage-history.mjs courses/learning-how-to-learn/ch-09-framework-language-learning.md
 */

import {execFileSync} from 'node:child_process';
import path from 'node:path';

const rel = process.argv[2];
const REPO = path.resolve('..');

const paths = [
  `docs/${rel}`,
  `site/docs/${rel}`,
  `docs/courses/learning-course/${rel.split('/').pop()}`,
];

const score = (t) => ({
  fffd: (t.match(/\uFFFD/g) || []).length,
  ilf: (t.match(/\u00EF\u00BF\u00BD/g) || []).length,
  c3: (t.match(/\u00C3/g) || []).length,
  c2: (t.match(/\u00C2/g) || []).length,
});

for (const p of paths) {
  let revs;
  try {
    revs = execFileSync('git', ['log', '--format=%h', '--', p], {cwd: REPO, encoding: 'utf8'})
      .trim()
      .split('\n')
      .filter(Boolean);
  } catch {
    continue;
  }
  if (!revs.length) {
    console.log(`\n${p}: never committed`);
    continue;
  }
  console.log(`\n${p}  (${revs.length} revisions)`);
  for (const rev of revs.slice(0, 8)) {
    let text;
    try {
      text = execFileSync('git', ['show', `${rev}:${p}`], {cwd: REPO, maxBuffer: 64 * 1024 * 1024}).toString('utf8');
    } catch {
      continue;
    }
    const s = score(text);
    const subj = execFileSync('git', ['log', '-1', '--format=%s', rev], {cwd: REPO, encoding: 'utf8'})
      .trim()
      .slice(0, 46);
    console.log(
      `  ${rev}  FFFD=${String(s.fffd).padStart(4)} ilf=${String(s.ilf).padStart(4)} C3=${String(s.c3).padStart(4)} C2=${String(s.c2).padStart(4)}  ${subj}`,
    );
  }
}
