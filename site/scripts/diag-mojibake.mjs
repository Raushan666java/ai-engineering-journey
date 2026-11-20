#!/usr/bin/env node
/** Diagnostic: show why a line is not being repaired. */
import fs from 'node:fs';

const files = [
  'docs/courses/gate-cs-preparation/02-theory-of-computation.md',
  'docs/courses/cyber-security/10-pentesting.md',
];

const CP1252_SET = new Set();
for (let b = 0x20; b <= 0x7e; b++) CP1252_SET.add(String.fromCharCode(b));
for (const cp of [
  0x20ac, 0x201a, 0x0192, 0x201e, 0x2026, 0x2020, 0x2021, 0x02c6, 0x2030,
  0x0160, 0x2039, 0x0152, 0x017d, 0x2018, 0x2019, 0x201c, 0x201d, 0x2022,
  0x2013, 0x2014, 0x02dc, 0x2122, 0x0161, 0x203a, 0x0153, 0x017e, 0x0178,
]) CP1252_SET.add(String.fromCodePoint(cp));
for (let b = 0xa0; b <= 0xff; b++) CP1252_SET.add(String.fromCharCode(b));

for (const f of files) {
  const text = fs.readFileSync(f, 'utf8');
  const bad = text.split('\n').filter((l) => /[\u00C3\u00C2]/.test(l)).slice(0, 3);
  console.log(`\n=== ${f} (${bad.length} sample lines)`);
  for (const line of bad) {
    console.log(`\n  ${JSON.stringify(line.slice(0, 100))}`);
    const offending = [...line].filter((c) => !CP1252_SET.has(c) && c.codePointAt(0) > 0x7e);
    console.log(`  chars outside cp1252: ${JSON.stringify(offending.slice(0, 10))}`);
    console.log(`  codepoints: ${[...line.slice(0, 40)].map((c) => c.codePointAt(0).toString(16)).join(' ')}`);
  }
}
