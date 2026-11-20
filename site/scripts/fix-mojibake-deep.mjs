#!/usr/bin/env node
/**
 * Reverse CP1252-reinterpreted UTF-8, repeatedly, until the text stops changing.
 *
 * History matters here. An earlier pass tried to "repair mojibake" and produced
 * a second layer of it, which is why some chapters ended up with U+FFFD: bytes
 * 0x81, 0x8D, 0x8F, 0x90 and 0x9D have no CP1252 mapping, so a second decode
 * destroys them permanently. Files restored from before that pass carry only
 * one layer, and one layer is a perfect round trip:
 *
 *   "∈"  -> UTF-8 E2 88 88 -> CP1252 "âˆˆ" -> UTF-8 again "Ã¢Ë†Ë†"
 *   "Ã¢Ë†Ë†" -> CP1252 bytes C3 A2 CB 86 CB 86 -> UTF-8 "âˆˆ" -> CP1252 "∈"
 *
 * So: encode the string back to bytes through CP1252, decode as strict UTF-8,
 * and keep the result only when it scores better (fewer mojibake markers).
 *
 *   node scripts/fix-mojibake-deep.mjs              # report
 *   node scripts/fix-mojibake-deep.mjs --write
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const WRITE = process.argv.includes('--write');
const rootIdx = process.argv.indexOf('--root');
const ROOT = path.resolve(
  process.cwd(),
  rootIdx !== -1 && process.argv[rootIdx + 1] ? process.argv[rootIdx + 1] : 'docs',
);

/** CP1252 code points for bytes 0x80..0x9F that differ from Latin-1. */
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
for (let b = 0x00; b <= 0xff; b++) {
  if (b >= 0x80 && b <= 0x9f) continue; // handled above; 0x81/8D/8F/90/9D unmapped
  CHAR_TO_BYTE.set(String.fromCharCode(b), b);
}
// C1 controls. Bytes 0x80-0x9F with no CP1252 glyph survive a *lossless*
// round trip as U+0080..U+009F, and two-layer files depend on it: the middle
// byte of a superscript or subscript lands here, and refusing to map it back
// makes the second decode round fail for the whole run.
for (let b = 0x80; b <= 0x9f; b++) CHAR_TO_BYTE.set(String.fromCharCode(b), b);

/** Returns a Buffer, or null when a character cannot be represented. */
function encodeCp1252(text) {
  const out = Buffer.allocUnsafe(text.length);
  for (let i = 0; i < text.length; i++) {
    const byte = CHAR_TO_BYTE.get(text[i]);
    if (byte === undefined) return null;
    out[i] = byte;
  }
  return out;
}

const decoder = new TextDecoder('utf-8', {fatal: true});

/**
 * How much mojibake is left. Only counts the classic leading bytes, not
 * legitimate punctuation (—, …, •, ™ are all valid CP1252 text and would
 * otherwise make a correct line look "worse" than a mojibaked one).
 */
function score(text) {
  const a = (text.match(/\u00C3/g) || []).length;
  const b = (text.match(/\u00C2/g) || []).length;
  const c = (text.match(/\u00E2[\u20AC\u201A\u02DC\u201E\u2026\u2020\u2021\u2030]/g) || []).length;
  return a + b + c;
}

/**
 * Repair one contiguous run of CP1252-representable characters.
 * Returns the input untouched when it is not mojibake.
 */
function fixRun(run) {
  let current = run;
  for (let round = 0; round < 6; round++) {
    const bytes = encodeCp1252(current);
    if (!bytes) break;

    // Pure ASCII cannot be mojibake of anything useful.
    let hasHigh = false;
    for (const b of bytes) {
      if (b >= 0x80) {
        hasHigh = true;
        break;
      }
    }
    if (!hasHigh) break;

    let decoded;
    try {
      decoded = decoder.decode(bytes);
    } catch {
      break; // not valid UTF-8 once re-encoded: this run is not mojibake
    }
    if (decoded === current) break;
    current = decoded;
  }
  return current;
}

function fix(text) {
  // Split into runs of CP1252-representable characters.
  //
  // Lines here are *partially* mojibaked: an earlier pass fixed some characters
  // and left others, so a line can read `Î´: Q Ã— Î£ → Q`. The `→` is correct and
  // is not in CP1252, so encoding the whole line fails and nothing gets fixed.
  // Repairing each run separately handles the mixed case, which is the common
  // one across these chapters.
  return text
    .split('\n')
    .map((line) => {
      let out = '';
      let run = '';
      for (const ch of line) {
        if (CHAR_TO_BYTE.has(ch)) {
          run += ch;
        } else {
          out += fixRun(run) + ch;
          run = '';
        }
      }
      return out + fixRun(run);
    })
    .join('\n');
}

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

let changed = 0;
let totalBefore = 0;
let totalAfter = 0;
const samples = [];

for (const file of walk(ROOT)) {
  const text = fs.readFileSync(file, 'utf8');
  const before = score(text);
  if (before === 0) continue;

  const after = fix(text);
  const afterScore = score(after);
  if (afterScore >= before) continue;

  changed++;
  totalBefore += before;
  totalAfter += afterScore;
  if (samples.length < 5) {
    const line = after.split('\n').find((l) => l.trim().length > 40) || '';
    samples.push(`${path.relative(ROOT, file)}   markers ${before} -> ${afterScore}\n    ${line.trim().slice(0, 110)}`);
  }
  if (WRITE) fs.writeFileSync(file, after, 'utf8');
}

console.log(`root      : ${ROOT}`);
console.log(`improved  : ${changed} files`);
console.log(`markers   : ${totalBefore} -> ${totalAfter}`);
console.log(`mode      : ${WRITE ? 'WRITE' : 'report only'}`);
if (samples.length) {
  console.log('\nsamples:');
  for (const s of samples) console.log('  ' + s);
}
