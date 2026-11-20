#!/usr/bin/env node
/**
 * Classify the 300+ pending differences between docs/ and site/docs before
 * writing anything: are they repairs, or content that exists only in one tree?
 *
 *   node scripts/sync-drift-report.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';

const REPO = path.resolve('..');
const SRC = path.join(REPO, 'docs');
const SITE = path.resolve('docs');
const DAMAGE = /[\u00C3\u00C2\uFFFD\u00EF\u00BF\u00BD]/g;

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

const split = (t) => {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(t);
  return m ? t.slice(m[0].length) : t;
};

const norm = (t) => split(t).replace(/\s+/g, ' ').trim();

const buckets = {repair: [], drift: []};

for (const file of walk(SRC)) {
  const rel = path.relative(SRC, file);
  const sitePath = path.join(SITE, rel);
  if (!fs.existsSync(sitePath)) continue;
  const a = fs.readFileSync(file, 'utf8');
  const b = fs.readFileSync(sitePath, 'utf8');
  if (norm(a) === norm(b)) continue;

  const damageInSite = (b.match(DAMAGE) || []).length;
  const damageInSource = (a.match(DAMAGE) || []).length;
  const entry = {rel: rel.split(path.sep).join('/'), damageInSite, damageInSource};
  if (damageInSite > damageInSource) buckets.repair.push(entry);
  else buckets.drift.push(entry);
}

console.log(`repairs (deploy copy is more damaged) : ${buckets.repair.length}`);
console.log(`drift   (deploy copy is not damaged)  : ${buckets.drift.length}`);

if (buckets.drift.length) {
  console.log('\ndrift samples — check these by hand before overwriting:');
  for (const d of buckets.drift.slice(0, 15)) {
    console.log(`  ${d.rel}`);
    // show the first differing line
    const a = split(fs.readFileSync(path.join(SRC, d.rel), 'utf8')).split('\n');
    const b = split(fs.readFileSync(path.join(SITE, d.rel), 'utf8')).split('\n');
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i].trim() !== b[i].trim()) {
        console.log(`     source: ${a[i].trim().slice(0, 90)}`);
        console.log(`     site  : ${b[i].trim().slice(0, 90)}`);
        break;
      }
    }
  }
}

if (buckets.repair.length) {
  console.log('\nlargest repairs:');
  const sorted = [...buckets.repair].sort((x, y) => y.damageInSite - x.damageInSite);
  for (const r of sorted.slice(0, 8)) console.log(`  ${String(r.damageInSite).padStart(4)} chars  ${r.rel}`);
}
