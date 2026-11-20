#!/usr/bin/env node
/**
 * Audit — and optionally repair — mojibake in the docs tree.
 *
 * Symptom: characters were replaced by U+FFFD (the "�" replacement character)
 * during an earlier conversion. Typical losses:
 *
 *   "20¹â�°"  -> 20^10          "?279 lakhs" -> ₹279 lakhs
 *   "500 � 1.20" -> 500 × 1.20  "1/3 � 33.33%" -> 1/3 ≈ 33.33%
 *   "data � often" -> data — often
 *
 * U+FFFD is lossy: the original byte is gone, so a repair is a guess. This
 * script only applies repairs whose context makes the intent unambiguous, and
 * never touches anything inside a fenced code block.
 *
 *   node scripts/fix-mojibake.mjs                 # report only
 *   node scripts/fix-mojibake.mjs --write
 *   node scripts/fix-mojibake.mjs --root ../docs --write
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const WRITE = args.includes('--write');
const rootIdx = args.indexOf('--root');
const ROOT = path.resolve(
  process.cwd(),
  rootIdx !== -1 && args[rootIdx + 1] ? args[rootIdx + 1] : 'docs',
);

const BAD = '\uFFFD';

/** Unambiguous repairs, applied only outside code fences. */
const SAFE_RULES = [
  // "word � word" is almost always an em dash. Applied by default.
  [/\s\uFFFD\s/g, ' — '],
];

/**
 * Everything else is a guess about which of × ≈ → ± ₹ was lost. Only applied
 * with --aggressive, and worth eyeballing before you commit the result.
 */
const AGGRESSIVE_RULES = [
  [/(\d)\s*\uFFFD\s*(\d)/g, '$1 × $2'],
  [/¹â\uFFFD°/g, '^10'],
  [/\?(\d[\d,.]*\s*(?:lakh|lakhs|crore|crores|thousand))/g, '₹$1'],
  [/\uFFFD\s*>\s*/g, ' → '],
];

const RULES = process.argv.includes('--aggressive')
  ? [...SAFE_RULES, ...AGGRESSIVE_RULES]
  : SAFE_RULES;

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

const files = walk(ROOT);
let affected = 0;
let repairedFiles = 0;
let repairedChars = 0;
const worst = [];

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  if (!text.includes(BAD)) continue;
  affected++;

  const before = (text.match(new RegExp(BAD, 'g')) || []).length;
  worst.push({file: path.relative(ROOT, file), count: before});

  const lines = text.split('\n');
  let inFence = false;
  let changed = 0;
  const out = lines.map((line) => {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      return line;
    }
    if (inFence || !line.includes(BAD)) return line;
    let next = line;
    for (const [re, repl] of RULES) next = next.replace(re, repl);
    const lost = (line.match(new RegExp(BAD, 'g')) || []).length;
    const left = (next.match(new RegExp(BAD, 'g')) || []).length;
    changed += lost - left;
    return next;
  });

  const joined = out.join('\n');
  if (joined !== text) {
    repairedFiles++;
    repairedChars += changed;
    if (WRITE) fs.writeFileSync(file, joined, 'utf8');
  }
}

worst.sort((a, b) => b.count - a.count);

console.log(`root            : ${ROOT}`);
console.log(`files scanned   : ${files.length}`);
console.log(`files with U+FFFD: ${affected}`);
console.log(`files repairable : ${repairedFiles}`);
console.log(`chars repairable : ${repairedChars}`);
console.log(`mode            : ${WRITE ? 'WRITE' : 'report only'}`);
console.log('\nworst offenders:');
for (const w of worst.slice(0, 12)) console.log(`  ${String(w.count).padStart(4)}  ${w.file}`);
