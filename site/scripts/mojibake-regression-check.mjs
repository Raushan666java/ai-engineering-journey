#!/usr/bin/env node
/**
 * Compare the working tree against HEAD for the files touched by the
 * mojibake repair, counting damage markers on both sides.
 *
 *   markers = Ã + Â + U+FFFD   (all only appear from UTF-8 read as CP1252)
 *
 * A repair is only a win when the working-tree count is lower.
 */
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';

const BAD = '\uFFFD';
const REPO = path.resolve('..');

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

const score = (t) =>
  (t.match(/\u00C3/g) || []).length + (t.match(/\u00C2/g) || []).length + (t.match(/\uFFFD/g) || []).length;

let better = 0;
let worse = 0;
let same = 0;
const worseList = [];
const betterList = [];

for (const file of walk('docs')) {
  const rel = path.relative(REPO, file).split(path.sep).join('/');
  let head;
  try {
    head = execFileSync('git', ['show', `HEAD:${rel}`], {
      cwd: REPO,
      maxBuffer: 128 * 1024 * 1024,
    }).toString('utf8');
  } catch {
    continue;
  }
  const now = fs.readFileSync(file, 'utf8');
  const a = score(head);
  const b = score(now);
  if (a === b) {
    same++;
    continue;
  }
  if (b > a) {
    worse++;
    worseList.push({rel, a, b});
  } else {
    better++;
    betterList.push({rel, a, b});
  }
}

betterList.sort((x, y) => y.a - y.b - (x.a - x.b));
worseList.sort((x, y) => y.b - y.a - (x.b - x.a));

console.log(`files compared : ${better + worse + same}`);
console.log(`improved       : ${better}`);
console.log(`unchanged      : ${same}`);
console.log(`regressed      : ${worse}`);

if (betterList.length) {
  console.log('\nbiggest improvements (HEAD -> now):');
  for (const r of betterList.slice(0, 8)) console.log(`  ${r.a} -> ${r.b}   ${r.rel}`);
}
if (worseList.length) {
  console.log('\nREGRESSIONS (HEAD -> now):');
  for (const r of worseList.slice(0, 15)) console.log(`  ${r.a} -> ${r.b}   ${r.rel}`);
}
