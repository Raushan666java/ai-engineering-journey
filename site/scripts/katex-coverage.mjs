#!/usr/bin/env node
/**
 * Does the site actually contain any LaTeX?
 *
 * remark-math + rehype-katex only do something when a document has `$...$` or
 * `$$...$$`. This counts both across the deploy tree and prints the files that
 * would exercise the pipeline, so the KaTeX check in verify-live.ps1 points at
 * a page that can prove rendering instead of a page with no math at all.
 *
 *   node scripts/katex-coverage.mjs
 */

import fs from 'node:fs';
import path from 'node:path';

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
      walk(full, out);
    } else if (/\.mdx?$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

const files = walk('docs');
let dollars = 0;
const blockRows = [];
const inlineRows = [];

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const count = (pattern) => (text.match(pattern) || []).length;

  dollars += count(/\$/g);
  const block = count(/\$\$/g);
  // `$...$` with no `$` inside: cheap but adequate as a presence test.
  const inline = count(/\$[^$\n]{1,120}\$/g);

  if (block >= 2) blockRows.push([block, file.split(path.sep).join('/')]);
  if (inline >= 2) inlineRows.push([inline, file.split(path.sep).join('/')]);
}

console.log(`documents           : ${files.length}`);
console.log(`total "$" chars     : ${dollars}`);
console.log(`files with $$ blocks: ${blockRows.length}`);
console.log(`files with $ inline : ${inlineRows.length}`);

for (const [n, f] of [...blockRows, ...inlineRows].sort((a, b) => b[0] - a[0]).slice(0, 12)) {
  console.log(`  ${String(n).padStart(4)}  ${f}`);
}
