#!/usr/bin/env node
/**
 * How much mojibake does each revision of a file carry?
 * mojibake markers = U+00C3 (Ã) + U+00C2 (Â) + U+FFFD, which appear only when
 * UTF-8 bytes have been reinterpreted as CP1252.
 */
import {execFileSync} from 'node:child_process';

const rel = process.argv[2] || 'courses/gate-cs-preparation/02-theory-of-computation.md';
const revs = execFileSync('git', ['log', '--format=%h', '--', `docs/${rel}`], {encoding: 'utf8'})
  .trim()
  .split('\n')
  .filter(Boolean);

for (const rev of revs) {
  let text;
  try {
    text = execFileSync('git', ['show', `${rev}:docs/${rel}`], {maxBuffer: 128 * 1024 * 1024}).toString('utf8');
  } catch {
    continue;
  }
  const c3 = (text.match(/\u00C3/g) || []).length;
  const c2 = (text.match(/\u00C2/g) || []).length;
  const fffd = (text.match(/\uFFFD/g) || []).length;
  const subj = execFileSync('git', ['log', '-1', '--format=%s', rev], {encoding: 'utf8'}).trim().slice(0, 52);
  console.log(`${rev}  Ã=${String(c3).padStart(4)} Â=${String(c2).padStart(4)} FFFD=${String(fffd).padStart(4)}  ${subj}`);
}
