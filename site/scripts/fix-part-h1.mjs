#!/usr/bin/env node
/**
 * Five pages of `agentic-ai-book` opened with a part divider as a body H1:
 *
 *     # Part II - Building Blocks
 *     ## Chapter 4: Tool Calling From First Principles
 *     ### 4.1 ...
 *
 * Docusaurus already renders the frontmatter title as the page's H1, so that
 * line produced a second H1 saying something else entirely. The part grouping
 * belongs to the book index, not to every chapter page.
 *
 *   node scripts/fix-part-h1.mjs           # report
 *   node scripts/fix-part-h1.mjs --write
 */

import fs from 'node:fs';
import path from 'node:path';

const WRITE = process.argv.includes('--write');
const SUB = path.join('docs', 'courses', 'ai-agent-engineer', 'agentic-ai-book');
const TREES = [
  {root: path.resolve('..'), label: 'source'},
  {root: path.resolve('.'), label: 'site'},
];

const LEADING_PART_H1 = /^\s*#\s+Part\s+[IVXLC]+\b[^\n]*\n+/;

let changed = 0;

for (const tree of TREES) {
  const dir = path.join(tree.root, SUB);
  if (!fs.existsSync(dir)) continue;

  for (const name of fs.readdirSync(dir).filter((f) => /\.mdx?$/.test(f)).sort()) {
    const file = path.join(dir, name);
    const text = fs.readFileSync(file, 'utf8');

    // The H1 has to be the first thing in the *body*; testing the whole file
    // never matches because the frontmatter sits in front of it.
    const fm = /^(---\r?\n[\s\S]*?\r?\n---\r?\n)/.exec(text);
    if (!fm) continue;
    const head = fm[1];
    const body = text.slice(head.length);

    if (!LEADING_PART_H1.test(body)) continue;

    const next = head + body.replace(LEADING_PART_H1, '').replace(/^\n+/, '');
    changed++;
    console.log(`${tree.label.padEnd(6)} ${name}`);
    if (WRITE) fs.writeFileSync(file, next, 'utf8');
  }
}

console.log(`\nleading part H1 removed: ${changed}   mode: ${WRITE ? 'WRITE' : 'report'}`);
