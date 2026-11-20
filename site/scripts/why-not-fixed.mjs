#!/usr/bin/env node
/**
 * Why is a specific line still mojibaked? Show the run-by-run round trip.
 *
 *   node scripts/why-not-fixed.mjs <file> <substring> [limit]
 *
 * Reading the text out of the file avoids passing exotic characters through a
 * shell, which the portable scanner refuses.
 */

import fs from 'node:fs';

const [, , file, needle, limitArg] = process.argv;
const limit = Number(limitArg || 3);

const CP1252_HIGH = {
  0x80: '\u20AC', 0x82: '\u201A', 0x83: '\u0192', 0x84: '\u201E',
  0x85: '\u2026', 0x86: '\u2020', 0x87: '\u2021', 0x88: '\u02C6',
  0x89: '\u2030', 0x8A: '\u0160', 0x8B: '\u2039', 0x8C: '\u0152',
  0x8E: '\u017D', 0x91: '\u2018', 0x92: '\u2019', 0x93: '\u201C',
  0x94: '\u201D', 0x95: '\u2022', 0x96: '\u2013', 0x97: '\u2014',
  0x98: '\u02DC', 0x99: '\u2122', 0x9A: '\u0161', 0x9B: '\u203A',
  0x9C: '\u0153', 0x9E: '\u017E', 0x9F: '\u0178',
};

const CHAR_TO_BYTE = new Map();
for (const [byte, ch] of Object.entries(CP1252_HIGH)) CHAR_TO_BYTE.set(ch, Number(byte));
for (let b = 0x00; b <= 0xff; b++) CHAR_TO_BYTE.set(String.fromCharCode(b), b);

const decoder = new TextDecoder('utf-8', {fatal: true});

function analyse(line) {
  console.log('\nline: ' + JSON.stringify(line));
  let run = '';
  const flush = () => {
    if (!run) return;
    const bytes = Buffer.from([...run].map((c) => CHAR_TO_BYTE.get(c)));
    let out;
    try {
      out = JSON.stringify(decoder.decode(bytes));
    } catch {
      out = 'INVALID UTF-8';
    }
    console.log(`  run ${JSON.stringify(run)}  bytes ${bytes.toString('hex')}  -> ${out}`);
    run = '';
  };
  for (const ch of line) {
    if (CHAR_TO_BYTE.has(ch)) run += ch;
    else {
      flush();
      console.log(`  break at ${JSON.stringify(ch)} U+${ch.codePointAt(0).toString(16).toUpperCase()}`);
    }
  }
  flush();
}

const lines = fs.readFileSync(file, 'utf8').split('\n');
const hits = lines.filter((l) => l.includes(needle)).slice(0, limit);
console.log(`${hits.length} matching lines in ${file}`);
for (const l of hits) analyse(l);
