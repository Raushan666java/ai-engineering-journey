#!/usr/bin/env node
/**
 * The pentesting chapter embeds `nop_sled = b"<0x90>" * 32` — a real control
 * byte inside a markdown code fence. That byte is what the HTML minifier
 * rejects on every one of the 1,423 pages ("Control character in input
 * stream"), and it is also invisible to a reader.
 *
 * Writing it as the Python escape `\x90` keeps the sampayload identical while
 * making the page plain text.
 */

import fs from 'node:fs';

const FILES = [
  '../docs/courses/cyber-security/10-pentesting.md',
  'docs/courses/cyber-security/10-pentesting.md',
];

const RAW = '\u0090';
const ESCAPED = '\\x90'; // one backslash, then x90
const DOUBLED = '\\\\x90'; // what an over-escaped first pass left behind

for (const file of FILES) {
  if (!fs.existsSync(file)) {
    console.log(`skip (missing): ${file}`);
    continue;
  }
  const before = fs.readFileSync(file, 'utf8');
  const after = before.split(RAW).join(ESCAPED).split(DOUBLED).join(ESCAPED);
  if (after === before) {
    console.log(`clean: ${file}`);
  } else {
    fs.writeFileSync(file, after, 'utf8');
    console.log(`fixed: ${file}`);
  }
  const text = fs.readFileSync(file, 'utf8');
  const at = text.indexOf('nop_sled');
  console.log(`   ${JSON.stringify(text.slice(at, at + 26))}`);
  console.log(
    `   control chars left: ${(text.match(/[\u0080-\u009F]/g) || []).length}`,
  );
}
