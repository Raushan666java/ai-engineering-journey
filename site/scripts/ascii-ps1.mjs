#!/usr/bin/env node
/**
 * PowerShell 5.1 decodes a .ps1 file as ANSI (CP1252) unless it starts with a
 * UTF-8 BOM. An em dash inside a string becomes `aâ€"` - and when the byte after
 * it is a quote, the parser sees a closed string and the whole script fails to
 * parse. That is exactly how deploy-gh-pages.ps1 stopped running.
 *
 * Writing the scripts in plain ASCII removes the failure mode instead of
 * depending on every editor preserving a BOM.
 *
 *   node scripts/ascii-ps1.mjs            # report
 *   node scripts/ascii-ps1.mjs --write
 */

import fs from 'node:fs';
import path from 'node:path';

const WRITE = process.argv.includes('--write');
const DIR = path.resolve('scripts');

// Escape sequences only: no non-ASCII literals live in this file either.
const MAP = [
  ['\\u2014', '-'], // em dash
  ['\\u2013', '-'], // en dash
  ['\\u2192', '->'], // right arrow
  ['\\u2026', '...'], // ellipsis
  ['\\u2018', "'"],
  ['\\u2019', "'"],
  ['\\u201c', '"'],
  ['\\u201d', '"'],
  ['\\u00d7', 'x'],
  ['\\u2265', '>='],
  ['\\u2264', '<='],
  ['\\u00b7', '-'],
  ['\\u2022', '*'],
  ['\\u00a0', ' '],
];

let touched = 0;

for (const name of fs.readdirSync(DIR).filter((f) => f.endsWith('.ps1'))) {
  const file = path.join(DIR, name);
  const before = fs.readFileSync(file, 'utf8');
  let after = before;
  for (const [pattern, replacement] of MAP) {
    after = after.replace(new RegExp(pattern, 'g'), replacement);
  }

  const looking = after !== before;
  if (looking) touched++;

  const leftover = [...new Set([...after].filter((c) => c.charCodeAt(0) > 126))];
  console.log(
    `${name.padEnd(26)} ${looking ? 'fixed' : 'ascii'}${leftover.length ? '  leftover: ' + leftover.join(' ') : ''}`,
  );
  if (WRITE && looking) fs.writeFileSync(file, after, 'utf8');
}

console.log(`\nfiles changed: ${touched}   mode: ${WRITE ? 'WRITE' : 'report'}`);
