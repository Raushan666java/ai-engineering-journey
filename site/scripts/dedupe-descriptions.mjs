#!/usr/bin/env node
/**
 * Second pass over the backfilled descriptions.
 *
 * The first pass derives each description from the first prose paragraph. Module
 * intro pages and their chapters share that paragraph, so ~190 pages end up with
 * a duplicate description — which is exactly the SEO problem we are fixing.
 *
 * This pass finds every description used more than once and prefixes it with the
 * page title, making it unique. Unique descriptions are left untouched.
 *
 *   node scripts/dedupe-descriptions.mjs --root ../docs
 *   node scripts/dedupe-descriptions.mjs --root ../docs --write
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
const MAX = 155;

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

const DESC = /^description:\s*"(.*)"\s*$/m;

function readDesc(text) {
  const m = DESC.exec(text);
  return m ? m[1] : null;
}

function titleOf(text) {
  const t = /^title:\s*["']?(.+?)["']?\s*$/m.exec(text);
  if (t) return t[1].trim();
  const h = /^#\s+(.+)$/m.exec(text);
  return h ? h[1].trim() : '';
}

function clip(s) {
  const clean = s.replace(/\s+/g, ' ').trim();
  if (clean.length <= MAX) return clean;
  const cut = clean.slice(0, MAX);
  const at = cut.lastIndexOf(' ');
  return (at > 80 ? cut.slice(0, at) : cut).replace(/[,;:.\-\s]+$/, '');
}

const files = walk(ROOT);
const rows = [];
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const desc = readDesc(text);
  if (desc) rows.push({file, text, desc});
}

const counts = new Map();
for (const r of rows) counts.set(r.desc, (counts.get(r.desc) ?? 0) + 1);

let rewritten = 0;
const sample = [];
for (const r of rows) {
  if (counts.get(r.desc) < 2) continue;
  const title = titleOf(r.text);
  if (!title) continue;
  const next = clip(`${title}: ${r.desc}`);
  if (next === r.desc) continue;

  if (sample.length < 8) sample.push(`${path.relative(ROOT, r.file)}\n    "${next}"`);
  rewritten++;
  if (WRITE) {
    fs.writeFileSync(r.file, r.text.replace(DESC, `description: "${next}"`), 'utf8');
  }
}

const dupeGroups = [...counts.values()].filter((n) => n > 1).length;
console.log(`root            : ${ROOT}`);
console.log(`files w/ desc   : ${rows.length}`);
console.log(`duplicate texts : ${dupeGroups}`);
console.log(`to rewrite      : ${rewritten}`);
console.log(`mode            : ${WRITE ? 'WRITE' : 'dry-run'}`);
if (sample.length) {
  console.log('\nsamples:');
  for (const s of sample) console.log('  ' + s);
}
