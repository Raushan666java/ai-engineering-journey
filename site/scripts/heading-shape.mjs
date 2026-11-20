#!/usr/bin/env node
/**
 * Survey the heading shape of one course before rewriting titles:
 * does every page open with `## Chapter N: ...`, are the sections `### N.x`,
 * and is the H1 missing everywhere?
 *
 *   node scripts/heading-shape.mjs ai-agent-engineer/agentic-ai-book
 */

import fs from 'node:fs';
import path from 'node:path';

const sub = process.argv[2] || 'ai-agent-engineer/agentic-ai-book';
const ROOT = path.join('docs', 'courses', sub);

const files = fs
  .readdirSync(ROOT)
  .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
  .sort();

const shapes = new Map();

for (const name of files) {
  const text = fs.readFileSync(path.join(ROOT, name), 'utf8');
  const fm = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  const body = fm ? text.slice(fm[0].length) : text;
  const title = fm ? (/^title:\s*(.+)$/m.exec(fm[1]) || [])[1] : '';
  const headings = [...body.matchAll(/^(#{1,6})\s+(.+)$/gm)].map((m) => ({
    level: m[1].length,
    text: m[2].trim(),
  }));
  const h1 = headings.filter((h) => h.level === 1);
  const first = headings[0];

  const key = `${h1.length} h1 / first level ${first ? first.level : '-'}`;
  shapes.set(key, (shapes.get(key) || 0) + 1);

  console.log(
    `${name.padEnd(34)} title=${JSON.stringify(title || '')}  h1=${h1.length}  first=${first ? first.level : '-'}:${(first ? first.text : '').slice(0, 52)}`,
  );
}

console.log('\nshapes:');
for (const [k, n] of shapes) console.log(`  ${String(n).padStart(3)}  ${k}`);
