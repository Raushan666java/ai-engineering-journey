#!/usr/bin/env node
/**
 * Repair mojibake from a reference table instead of guessing per case.
 *
 * How the damage happened: this repo's markdown was decoded as CP1252 at some
 * point, so every non-ASCII character became the CP1252 spelling of its UTF-8
 * bytes (`Ã—` -> `Ãƒâ€”`, `â‰¥` -> `Ã¢â€°Â¥`), and a later pass did it again to some files
 * (`Ã—` -> `ÃƒÆ’â€”`). Bytes with no CP1252 glyph (0x81, 0x8D, 0x8F, 0x90, 0x9D) were
 * destroyed into U+FFFD, and those are the only truly unrecoverable cases.
 *
 * The repair is therefore not a judgement call: generate the mojibake spelling
 * of every character in the ranges this content uses, one two and three
 * encodings deep, and replace the longest matches first. Anything the table
 * does not cover is left exactly as it is.
 *
 *   node scripts/fix-mojibake-table.mjs                 # report (site/docs)
 *   node scripts/fix-mojibake-table.mjs --write
 *   node scripts/fix-mojibake-table.mjs --root ../docs --write
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const WRITE = process.argv.includes('--write');
const rootIdx = process.argv.indexOf('--root');
const ROOT = path.resolve(process.cwd(), rootIdx !== -1 ? process.argv[rootIdx + 1] : 'docs');

/** CP1252 bytes 0x80..0x9F that differ from Latin-1. */
const CP1252_HIGH = {
  0x80: 0x20ac, 0x82: 0x201a, 0x83: 0x0192, 0x84: 0x201e, 0x85: 0x2026,
  0x86: 0x2020, 0x87: 0x2021, 0x88: 0x02c6, 0x89: 0x2030, 0x8a: 0x0160,
  0x8b: 0x2039, 0x8c: 0x0152, 0x8e: 0x017d, 0x91: 0x2018, 0x92: 0x2019,
  0x93: 0x201c, 0x94: 0x201d, 0x95: 0x2022, 0x96: 0x2013, 0x97: 0x2014,
  0x98: 0x02dc, 0x99: 0x2122, 0x9a: 0x0161, 0x9b: 0x203a, 0x9c: 0x0153,
  0x9e: 0x017e, 0x9f: 0x0178,
};

/** Bytes 0x81/8D/8F/90/9D have no CP1252 glyph; they become U+FFFD, i.e. loss. */
const LOST = new Set([0x81, 0x8d, 0x8f, 0x90, 0x9d]);

/** One byte -> the character CP1252 shows for it. */
function byteToChar(b) {
  if (CP1252_HIGH[b]) return String.fromCodePoint(CP1252_HIGH[b]);
  if (LOST.has(b)) return '\uFFFD';
  return String.fromCharCode(b);
}

/** One character -> the byte CP1252 would have produced for it, or null. */
function charToByte(ch) {
  const cp = ch.codePointAt(0);
  for (const [byte, code] of Object.entries(CP1252_HIGH)) {
    if (code === cp) return Number(byte);
  }
  if (cp >= 0xa0 && cp <= 0xff) return cp;
  if (cp <= 0xff) return cp;
  return null;
}

/** The mojibake spelling of `str`, one decoding deep, or null if unmappable. */
function mojibakeOnce(str) {
  const bytes = Buffer.from(str, 'utf8');
  let out = '';
  for (const b of bytes) out += byteToChar(b);
  return out;
}

/** Code points worth tabulating: the content is English + maths + arrows. */
function* candidates() {
  for (let cp = 0xa0; cp <= 0x17f; cp++) yield cp; // Latin-1, Latin Ext-A
  for (let cp = 0x180; cp <= 0x1ff; cp++) yield cp;
  for (let cp = 0x2000; cp <= 0x206f; cp++) yield cp; // general punctuation
  for (let cp = 0x2070; cp <= 0x209f; cp++) yield cp; // super/subscripts
  for (let cp = 0x20a0; cp <= 0x20cf; cp++) yield cp; // currency
  for (let cp = 0x2100; cp <= 0x214f; cp++) yield cp; // letterlike
  for (let cp = 0x2190; cp <= 0x21ff; cp++) yield cp; // arrows
  for (let cp = 0x2200; cp <= 0x22ff; cp++) yield cp; // maths operators
  for (let cp = 0x2300; cp <= 0x23ff; cp++) yield cp; // misc technical
  for (let cp = 0x25a0; cp <= 0x25ff; cp++) yield cp; // geometric shapes
  for (let cp = 0x2600; cp <= 0x27bf; cp++) yield cp; // misc symbols, dingbats
  for (let cp = 0x0370; cp <= 0x03ff; cp++) yield cp; // Greek
  for (let cp = 0x0400; cp <= 0x04ff; cp++) yield cp; // Cyrillic
  for (let cp = 0x2500; cp <= 0x257f; cp++) yield cp; // box drawing
  for (let cp = 0x1d400; cp <= 0x1d7ff; cp++) yield cp; // maths alphanumerics
  yield 0x20b9; // rupee
  yield 0xfb01;
  yield 0xfb02;
}

const table = new Map(); // variant -> original character
const owners = new Map(); // variant -> set of originals (collision check)

function add(variant, original) {
  if (!variant || variant === original) return;
  if (variant.length < 2) return; // a single char is normal text, not mojibake
  const prev = owners.get(variant);
  if (prev && !prev.has(original)) {
    prev.add(original);
    table.delete(variant); // ambiguous: do not touch it
    return;
  }
  if (!prev) owners.set(variant, new Set([original]));
  if (!table.has(variant)) table.set(variant, original);
}

for (const cp of candidates()) {
  const ch = String.fromCodePoint(cp);
  let level = ch;
  for (let depth = 1; depth <= 3; depth++) {
    const next = mojibakeOnce(level);
    if (!next || next === level) break;
    add(next, ch);
    if (next.includes('\uFFFD')) break; // further layers are already lossy
    level = next;
  }
}

const variants = [...table.keys()].sort((a, b) => b.length - a.length);
const lookup = table;

// Global flag matters: String.match without it returns the first match plus
// capture groups, so a file with 858 damaged characters reported "1".
const BAD_G = /[\u00C3\u00C2\uFFFD\u0080-\u009F]/g;
const BAD = /[\u00C3\u00C2\uFFFD\u0080-\u009F]/;

/**
 * Damage that a table of round trips cannot express, because an earlier
 * "repair" pass substituted the wrong character into a correct mojibake tail.
 * Each rule below is pinned to context that makes the original unambiguous.
 */
const KNOWN = [
  // `Ã—` (mojibake of ×) whose U+2014 tail was rewritten as an arrow.
  // Context is always arithmetic: "quantity × price", "10×", "2 × (…)".
  [/Ã\u2192/g, '\u00D7'],
  // Degree sign whose ° was rewritten as the word. "30Â deg", "120Â deg".
  [/\u00C2 deg/g, '\u00B0'],
  [/\u00C2\u00B0/g, '\u00B0'],
  // Superscripts: U+2070..U+2079 are E2 81 xx and 0x81 has no CP1252 glyph, so
  // the middle byte became U+FFFD while the last byte survived. The surviving
  // byte identifies the digit, which makes this recoverable, not a guess.
  [/\u00E2\uFFFD\u00B0/g, '\u2070'],
  [/\u00E2\uFFFD\u00B4/g, '\u2074'],
  [/\u00E2\uFFFD\u00B5/g, '\u2075'],
  [/\u00E2\uFFFD\u00B6/g, '\u2076'],
  [/\u00E2\uFFFD\u00B7/g, '\u2077'],
  [/\u00E2\uFFFD\u00B8/g, '\u2078'],
  [/\u00E2\uFFFD\u00B9/g, '\u2079'],
];

function repair(text) {
  let out = text;
  for (const [pattern, replacement] of KNOWN) out = out.replace(pattern, replacement);
  for (let pass = 0; pass < 4; pass++) {
    let touched = 0;
    for (const variant of variants) {
      if (!out.includes(variant)) continue;
      const replacement = lookup.get(variant);
      out = out.split(variant).join(replacement);
      touched++;
    }
    if (!touched) break;
  }
  return out;
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

const markerCount = (t) => (t.match(BAD_G) || []).length;

let changed = 0;
let beforeTotal = 0;
let afterTotal = 0;
const samples = [];

for (const file of walk(ROOT)) {
  const text = fs.readFileSync(file, 'utf8');
  const before = markerCount(text);
  if (before === 0) continue;
  const after = repair(text);
  const afterCount = markerCount(after);
  if (after === text) continue;

  changed++;
  beforeTotal += before;
  afterTotal += afterCount;
  if (samples.length < 6) {
    const line = after.split('\n').find((l) => BAD.test(l) === false && l.trim().length > 30) || '';
    samples.push(
      `${path.relative(ROOT, file)}   markers ${before} -> ${afterCount}\n    ${line.trim().slice(0, 100)}`,
    );
  }
  if (WRITE) fs.writeFileSync(file, after, 'utf8');
}

console.log(`root       : ${ROOT}`);
console.log(`table size : ${variants.length} spellings`);
console.log(`files      : ${changed} changed`);
console.log(`markers    : ${beforeTotal} -> ${afterTotal}`);
console.log(`mode       : ${WRITE ? 'WRITE' : 'report only'}`);
if (samples.length) {
  console.log('\nsamples:');
  for (const s of samples) console.log('  ' + s);
}

