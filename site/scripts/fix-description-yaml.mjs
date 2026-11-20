#!/usr/bin/env node
/**
 * Repair frontmatter `description:` values that cannot survive a YAML parse.
 *
 * The backfill script derived descriptions from body prose, which includes
 * markdown escapes (`\$1,200`, `\d`, `\_`). Emitted inside a double-quoted YAML
 * scalar those are invalid escape sequences and Docusaurus refuses to parse the
 * file — a 1,419-file build dies on the first one.
 *
 * This rewrites the value as a single-quoted YAML scalar, where the only escape
 * that matters is the single quote itself (doubled). Safer than string-surgery
 * on backslashes, and it leaves prose like `\$1,200` readable as `$1,200`.
 *
 *   node scripts/fix-description-yaml.mjs --root ../docs
 *   node scripts/fix-description-yaml.mjs --root ../docs --write
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const WRITE = args.includes('--write');
const rootIdx = args.indexOf('--root');
const ROOT = path.resolve(
  process.cwd(),
  rootIdx !== -1 && args[rootIdx + 1] ? args[rootIdx + 1] : '../docs',
);

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

const DESC = /^(description:)\s*"((?:[^"\\]|\\.)*)"\s*$/m;

/** Turn a raw derived string into a safe single-quoted YAML scalar body. */
function scalar(value) {
  return value
    .replace(/\\(?=[$*_{}\[\]()#+\-.!`|>])/g, '') // drop markdown escapes
    .replace(/\\/g, ' ')                            // any remaining backslash
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/'/g, "''");
}

const files = walk(ROOT);
let changed = 0;
const samples = [];

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const m = DESC.exec(text);
  if (!m) continue;

  const raw = m[2];
  const looksUnsafe = /\\/.test(raw) || raw.includes("''");
  const quoteUnsafe = raw.includes("''");
  if (!looksUnsafe && !quoteUnsafe) continue;

  const value = scalar(raw);
  if (!value) continue;

  const replaced = text.replace(DESC, `$1 '${value}'`);
  if (replaced === text) continue;

  changed++;
  if (samples.length < 6) {
    samples.push(`${path.relative(ROOT, file)}\n    '${value.slice(0, 110)}'`);
  }
  if (WRITE) fs.writeFileSync(file, replaced, 'utf8');
}

console.log(`root     : ${ROOT}`);
console.log(`files    : ${files.length}`);
console.log(`repaired : ${changed}`);
console.log(`mode     : ${WRITE ? 'WRITE' : 'dry-run'}`);
if (samples.length) {
  console.log('\nsamples:');
  for (const s of samples) console.log('  ' + s);
}
