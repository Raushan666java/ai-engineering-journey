#!/usr/bin/env node
/**
 * Regenerate `description:` frontmatter for files whose current description was
 * derived from text that was still mojibaked.
 *
 * The description is taken from the body exactly the way the original backfill
 * did it (first real paragraph, markdown stripped, clipped on a word boundary),
 * so the result reads as a summary instead of a fragment of the title.
 *
 *   node scripts/refresh-descriptions.mjs ../docs        # report
 *   node scripts/refresh-descriptions.mjs ../docs --write
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const WRITE = args.includes('--write');
const rootArg = args.find((a) => !a.startsWith('--'));
const ROOT = path.resolve(process.cwd(), rootArg || 'docs');

const BAD = /[\u00C3\u00C2\uFFFD\u0080-\u009F]/;
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

function splitFront(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!m) return {frontBlock: '', front: '', body: text};
  return {frontBlock: m[0], front: m[1], body: text.slice(m[0].length)};
}

const JUNK = /^(-{3,}|>|#|\||```|!\[|[A-Za-z][^:]{0,30}:)/;

/** Same derivation the backfill used, so descriptions stay consistent. */
function derive(body) {
  const para = [];
  let inFence = false;
  for (const raw of body.split(/\r?\n/)) {
    const line = raw.trim();
    if (/^(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    if (!line) {
      if (para.length) break;
      continue;
    }
    if (JUNK.test(line)) {
      if (para.length) break;
      continue;
    }
    para.push(
      line
        .replace(/^>\s*/, '')
        .replace(/`([^`]*)`/g, '$1')
        .replace(/\*\*([^*]*)\*\*/g, '$1')
        .replace(/\*([^*]*)\*/g, '$1')
        .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
        .replace(/\s+/g, ' '),
    );
  }
  let text = para.join(' ').replace(/"/g, "'").trim();
  if (text.length > MAX) {
    const cut = text.slice(0, MAX);
    const at = cut.lastIndexOf(' ');
    text = (at > 80 ? cut.slice(0, at) : cut).replace(/[,;:.\-\s]+$/, '');
  }
  return text;
}

let changed = 0;
const skipped = [];

for (const file of walk(ROOT)) {
  const text = fs.readFileSync(file, 'utf8');
  const {frontBlock, front, body} = splitFront(text);
  const m = /^description:\s*(.*)$/m.exec(front);
  if (!m) continue;
  if (!BAD.test(m[1])) continue;

  const fresh = derive(body);
  if (!fresh || BAD.test(fresh)) {
    skipped.push(`${path.relative(ROOT, file)} — body still carries damage`);
    continue;
  }

  const nextFront = front.replace(/^description:\s*.*$/m, `description: "${fresh}"`);
  const next = frontBlock.replace(front, nextFront) + body;

  changed++;
  console.log(`${path.relative(ROOT, file)}`);
  console.log(`   was: ${m[1].slice(0, 90)}`);
  console.log(`   now: ${fresh.slice(0, 90)}`);
  if (WRITE) fs.writeFileSync(file, next, 'utf8');
}

console.log(`\nregenerated: ${changed}   skipped: ${skipped.length}   mode: ${WRITE ? 'WRITE' : 'report'}`);
for (const s of skipped) console.log('  ' + s);
