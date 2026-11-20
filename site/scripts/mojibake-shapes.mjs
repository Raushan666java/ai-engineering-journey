#!/usr/bin/env node
/**
 * List the distinct mojibake shapes left after the automatic passes, with
 * context and counts, so a human can decide the mapping.
 *
 *   node scripts/mojibake-shapes.mjs ../docs
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.argv[2] || 'docs');
const BAD = /[\u00C3\u00C2\uFFFD]/;

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

const shapes = new Map();

for (const file of walk(ROOT)) {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  for (const line of lines) {
    const chars = [...line];
    for (let i = 0; i < chars.length; i++) {
      if (!BAD.test(chars[i])) continue;
      // take up to 3 characters after the marker, but stop at a space
      const after = [];
      for (let j = i + 1; j < chars.length && after.length < 3; j++) {
        if (chars[j] === ' ') break;
        after.push(chars[j]);
      }
      const shape = chars[i] + after.join('');
      const key = `${shape}\u0000${path.relative(ROOT, file)}`;
      const prev = shapes.get(key) || {shape, file: path.relative(ROOT, file), count: 0, sample: line};
      prev.count++;
      shapes.set(key, prev);
    }
  }
}

const rows = [...shapes.values()].sort((a, b) => b.count - a.count);
console.log(`distinct shapes: ${rows.length}`);
for (const r of rows.slice(0, 40)) {
  console.log(`${String(r.count).padStart(4)}  ${JSON.stringify(r.shape).padEnd(26)} ${r.file}`);
  console.log(`      ${r.sample.trim().slice(0, 110)}`);
}
