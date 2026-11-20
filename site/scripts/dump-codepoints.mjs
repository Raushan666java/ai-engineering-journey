#!/usr/bin/env node
/**
 * Print the code points of every line in a file that still carries damage, so a
 * mapping can be written against what is actually there rather than what the
 * terminal renders.
 *
 *   node scripts/dump-codepoints.mjs <file> [limit]
 */

import fs from 'node:fs';

const [, , file, limitArg] = process.argv;
const limit = Number(limitArg || 10);
const BAD = /[\u00C3\u00C2\uFFFD\u0080-\u009F]/;

const lines = fs.readFileSync(file, 'utf8').split('\n');
let shown = 0;

for (let i = 0; i < lines.length && shown < limit; i++) {
  const line = lines[i];
  if (!BAD.test(line)) continue;
  shown++;
  console.log(`\nline ${i + 1}: ${JSON.stringify(line.trim().slice(0, 100))}`);
  // print codepoints only around the damage, to keep the output readable
  const chars = [...line];
  const idx = chars.findIndex((c) => BAD.test(c));
  const from = Math.max(0, idx - 12);
  const to = Math.min(chars.length, idx + 18);
  console.log(
    '  ' +
      chars
        .slice(from, to)
        .map((c) => {
          const cp = c.codePointAt(0);
          const name = cp > 0x7e ? `U+${cp.toString(16).toUpperCase().padStart(4, '0')}` : c;
          return name;
        })
        .join(' '),
  );
}
console.log(`\n${shown} damaged lines shown`);
