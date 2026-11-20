#!/usr/bin/env node
/**
 * Classify every U+FFFD occurrence so repairs can be rule-driven, not guessed.
 *
 * Prints the character on each side plus a short window, grouped by the
 * (left, right) pair, so a single rule can be written per distinct shape.
 *
 *   node scripts/mojibake-contexts.mjs
 *   node scripts/mojibake-contexts.mjs --root ../docs
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const rootIdx = process.argv.indexOf('--root');
const ROOT = path.resolve(
  process.cwd(),
  rootIdx !== -1 && process.argv[rootIdx + 1] ? process.argv[rootIdx + 1] : 'docs',
);
const BAD = '\uFFFD';

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

const groups = new Map();

for (const file of walk(ROOT)) {
  const text = fs.readFileSync(file, 'utf8');
  if (!text.includes(BAD)) continue;

  let inFence = false;
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence || !line.includes(BAD)) continue;

    let idx = line.indexOf(BAD);
    while (idx !== -1) {
      const left = line[idx - 1] ?? '';
      const right = line[idx + 1] ?? '';
      const window = line.slice(Math.max(0, idx - 22), idx + 22).replace(new RegExp(BAD, 'g'), '¤');
      const key = `${left}|${right}`;
      if (!groups.has(key)) groups.set(key, {count: 0, samples: new Map(), files: new Set()});
      const g = groups.get(key);
      g.count++;
      g.files.add(path.relative(ROOT, file));
      const shape = window.trim();
      if (!g.samples.has(shape) && g.samples.size < 3) g.samples.set(shape, true);
      idx = line.indexOf(BAD, idx + 1);
    }
  }
}

const rows = [...groups.entries()].sort((a, b) => b[1].count - a[1].count);
const total = rows.reduce((n, [, g]) => n + g.count, 0);

console.log(`root      : ${ROOT}`);
console.log(`occurrences: ${total}   distinct (left|right) shapes: ${rows.length}`);
console.log('');

for (const [key, g] of rows.slice(0, 30)) {
  const [l, r] = key.split('|');
  const show = (c) => (c === '' ? 'EOL' : c === ' ' ? 'SPACE' : JSON.stringify(c));
  console.log(`${String(g.count).padStart(5)}x  left=${show(l)}  right=${show(r)}   files=${g.files.size}`);
  for (const s of g.samples.keys()) console.log(`         …${s}…`);
}
