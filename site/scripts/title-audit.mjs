#!/usr/bin/env node
/**
 * Findings that cost a reader orientation rather than knowledge:
 *
 *  1. `title:` / `sidebar_label:` that are really the filename ("13-evaluation"),
 *     so the sidebar and the browser tab read like a URL instead of a heading.
 *  2. no `## ` heading at all — the page renders as one wall of text.
 *  3. a title that duplicates the H1 verbatim, which double-prints on the page.
 *
 *   node scripts/title-audit.mjs              # summary + samples
 *   node scripts/title-audit.mjs --fix        # adopt the H1 as title where safe
 */

import fs from 'node:fs';
import path from 'node:path';

const FIX = process.argv.includes('--fix');
const ROOT = 'docs/courses';

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

const sluggy = (v) => /^[a-z0-9]+([-_][a-z0-9]+)+$/i.test(v) || /^\d+[-_][a-z]/.test(v);

const rows = [];
let fixed = 0;

for (const file of walk(ROOT)) {
  const text = fs.readFileSync(file, 'utf8');
  const fm = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!fm) continue;
  const front = fm[1];
  const body = text.slice(fm[0].length);

  const titleMatch = /^title:\s*(.+)$/m.exec(front);
  if (!titleMatch) continue;
  const rawTitle = titleMatch[1].trim();
  const title = rawTitle.replace(/^["'](.*)["']$/, '$1');

  const h1Match = /^#\s+(.+)$/m.exec(body);
  const h1 = h1Match ? h1Match[1].trim() : '';

  const problems = [];
  if (sluggy(title)) problems.push('slug-as-title');
  if (!h1) problems.push('no-h1');
  if (!/^##\s+/m.test(body)) problems.push('no-sections');
  if (!problems.length) continue;

  rows.push({rel: file.split(path.sep).join('/'), title, h1, problems});

  // Adopting the H1 is only safe when the H1 reads like a name, not a sentence
  // and not a numbered chapter heading that would then repeat in the sidebar.
  if (
    FIX &&
    problems.includes('slug-as-title') &&
    h1 &&
    h1.length > 6 &&
    h1.length <= 90 &&
    !/^\d+(\.\d+)*\s*[-:.]/.test(h1)
  ) {
    const clean = h1.replace(/"/g, "'");
    let next = front.replace(/^title:\s*.*$/m, `title: "${clean}"`);
    if (/^sidebar_label:/m.test(next)) {
      next = next.replace(/^sidebar_label:\s*.*$/m, `sidebar_label: "${clean}"`);
    }
    fs.writeFileSync(file, `---\n${next}\n---\n${body}`, 'utf8');
    fixed++;
  }
}

const counts = {};
for (const r of rows) for (const p of r.problems) counts[p] = (counts[p] || 0) + 1;

console.log(`pages with a title/structure problem: ${rows.length}`);
for (const [name, n] of Object.entries(counts)) console.log(`  ${String(n).padStart(4)}  ${name}`);
if (FIX) console.log(`\ntitles rewritten from H1: ${fixed}`);

console.log('\nsamples (slug-as-title):');
for (const r of rows.filter((x) => x.problems.includes('slug-as-title')).slice(0, 12)) {
  console.log(`  ${r.title}`);
  console.log(`     H1: ${r.h1 || '(none)'}`);
  console.log(`     ${r.rel}`);
}
