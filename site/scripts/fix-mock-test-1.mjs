#!/usr/bin/env node
/**
 * Hand-repair table for `gate-cs-preparation/15-mock-test-1.md`.
 *
 * Every other chapter yielded to the general round-trip fixer. This one went
 * through an extra bad pass that replaced correct mojibake tails with visible
 * junk, so the general table has nothing to match: `×` became `Ã---”`, `−`
 * became `âË†---™`, and superscripts lost their middle byte to `Â\u0081`.
 *
 * Each replacement is pinned to a shape whose meaning is fixed by the
 * surrounding arithmetic, and the diff is printed for review:
 *
 *   `2Ã---”2 matrix`            -> 2×2
 *   `(0.5)âÂ\u0081µ`             -> (0.5)⁵      (0.5)^5 in a binomial term
 *   `f(x) = xâÂ\u0081´ − 8x²`    -> f(x) = x⁴ − 8x²
 *   `{aⁿbⁿ | n ≥ 0}`            -> ⁿ from âÂ\u0081¿
 *   `λ₁+λ₂=5, λ₁λ₂=6`          -> subscripts from â---šÂ / â---š---š
 *
 *   node scripts/fix-mock-test-1.mjs                 # show diff
 *   node scripts/fix-mock-test-1.mjs --write         # write both trees
 *   node scripts/fix-mock-test-1.mjs --write --source-only
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const WRITE = process.argv.includes('--write');
const SOURCE_ONLY = process.argv.includes('--source-only');

const SOURCE = path.resolve('../docs/courses/gate-cs-preparation/15-mock-test-1.md');
const SITE = path.resolve('docs/courses/gate-cs-preparation/15-mock-test-1.md');

const SUP = '\u00E2\u00C2\u0081'; // "âÂ" + the C1 byte that survived as U+0081
const SUP2 = '\u00E2\u0081'; // the same, when the extra C2 was already removed

const MAP = [
  // multiplication sign
  ['Ã---\u201D', '\u00D7'],
  // minus sign
  ['âË†---\u2122', '\u2212'],
  // greater-or-equal
  ['â---\u00B0\u00A5', '\u2265'],
  // subscripts in "λ₁+λ₂=5" and "log₂"
  ['â---š---š', '\u2082'],
  ['â---š\u00C2', '\u2081'],
  // stray C1 byte left behind after a repaired subscript
  ['\u2081\u0081', '\u2081'],
  // superscripts. U+2074..U+207F are E2 81 xx; 0x81 has no CP1252 glyph, so the
  // last byte is the only thing that survived, and it names the digit.
  [`${SUP}\u00B4`, '\u2074'],
  [`${SUP}\u00B5`, '\u2075'],
  [`${SUP}\u00B6`, '\u2076'],
  [`${SUP}\u00B7`, '\u2077'],
  [`${SUP}\u00B8`, '\u2078'],
  [`${SUP}\u00B9`, '\u2079'],
  [`${SUP}\u00BA`, '\u207A'],
  [`${SUP}\u00BF`, '\u207F'],
  [`${SUP} deg`, '\u2070'],
  [`${SUP2}\u00BA`, '\u207A'],
  [`${SUP2}\u00B4`, '\u2074'],
  [`${SUP2}\u00B5`, '\u2075'],
  [`${SUP2}\u00BF`, '\u207F'],
  [`${SUP2} deg`, '\u2070'],
  // "2ʰ": ʰ is U+02B0, whose ° tail was rewritten as the word "deg"
  ['\u00CA deg', '\u02B0'],
  // prose dashes destroyed into U+FFFD — em dash, except the 0–100 range
  ['0\uFFFD100', '0\u2013100'],
  ['\uFFFD', '\u2014'],
];

const targets = SOURCE_ONLY ? [SOURCE] : [SOURCE, SITE];
let total = 0;

for (const file of targets) {
  if (!fs.existsSync(file)) {
    console.log(`skip (missing): ${file}`);
    continue;
  }
  const before = fs.readFileSync(file, 'utf8');
  let after = before;
  for (const [from, to] of MAP) after = after.split(from).join(to);

  if (after === before) {
    console.log(`unchanged: ${file}`);
    continue;
  }

  const a = before.split('\n');
  const b = after.split('\n');
  console.log(`\n${file}`);
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) continue;
    total++;
    if (total <= 25) {
      console.log(`  ${i + 1}- ${a[i].trim().slice(0, 110)}`);
      console.log(`  ${i + 1}+ ${b[i].trim().slice(0, 110)}`);
    }
  }
  if (WRITE) fs.writeFileSync(file, after, 'utf8');
}

console.log(`\nlines changed: ${total}   mode: ${WRITE ? 'WRITE' : 'report only'}`);
