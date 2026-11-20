#!/usr/bin/env node
/**
 * Backfill missing `description:` frontmatter for Docusaurus docs.
 *
 * Why: Docusaurus falls back to the first line of body text when a doc has no
 * description, which for this site means ~1,400 pages advertise themselves to
 * Google as "Learning Objectives", "Previous File Handling" or "---".
 *
 * Dry-run by default. Pass --write to modify files.
 *
 *   node scripts/backfill-descriptions.mjs
 *   node scripts/backfill-descriptions.mjs --write
 *   node scripts/backfill-descriptions.mjs --write --root docs/courses/java
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
const MIN = 55;

// Lines that are page furniture, not prose. Never use these as a description.
const JUNK = [
  /^-{3,}$/,
  /^(previous|next|prev)\b/i,
  /^(last updated|estimated time)\b/i,
  /^chapter at a glance$/i,
  /^learning objectives$/i,
  /^table of contents$/i,
  /^overview$/i,
  /^introduction$/i,
  /^summary$/i,
  /^\|/, // table row
  /^<[a-z!/]/i, // html/mdx tag
  /^!?\[[^\]]*\]\([^)]*\)\s*$/, // bare image or link
  /^\d+\.\s*$/, // empty ordered item
  // "Duration: Week 1, ~12h. Goal: ..." style meta lines
  /^(duration|goal|prerequisite|prerequisites|recommendation|purpose|objective|audience|level|format|time|cost|difficulty|stack|tooling)\b[^.]{0,40}[:—-]/i,
];

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

/** Split frontmatter (if any) from the body. */
function split(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!m) return {front: null, body: text, eol: text.includes('\r\n') ? '\r\n' : '\n'};
  return {
    front: m[1],
    body: text.slice(m[0].length),
    eol: text.includes('\r\n') ? '\r\n' : '\n',
    head: m[0],
  };
}

/** First real sentence of the document. */
function derive(body) {
  const lines = body.split(/\r?\n/);
  let inFence = false;
  const paras = [];
  let current = [];

  for (const raw of lines) {
    const line = raw.trim();

    if (/^(```|~~~)/.test(line)) {
      inFence = !inFence;
      if (current.length) {
        paras.push(current.join(' '));
        current = [];
      }
      continue;
    }
    if (inFence) continue;

    if (!line) {
      if (current.length) {
        paras.push(current.join(' '));
        current = [];
      }
      continue;
    }
    if (/^#{1,6}\s/.test(line)) continue;
    if (/^[-*+]\s/.test(line)) {
      if (current.length) {
        paras.push(current.join(' '));
        current = [];
      }
      continue;
    }
    if (/^\d+[.)]\s/.test(line)) continue;
    if (JUNK.some((re) => re.test(line))) continue;

    // Strip inline markup so the snippet reads cleanly in a search result.
    const plain = line
      .replace(/^>\s*/, '')
      .replace(/`([^`]*)`/g, '$1')
      .replace(/\*\*([^*]*)\*\*/g, '$1')
      .replace(/\*([^*]*)\*/g, '$1')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/\s+/g, ' ')
      .trim();

    // Drop a leading meta label ("Goal: ...", "Prerequisite: ...").
    const stripped = plain.replace(
      /^(duration|goal|prerequisite|prerequisites|recommendation|purpose|objective|audience|level|format|time|cost|difficulty)\s*[:—-]\s*/i,
      '',
    );
    if (JUNK.some((re) => re.test(stripped))) continue;
    if (stripped.length < 25) continue;

    current.push(stripped);
    const joined = current.join(' ');
    if (joined.length >= MAX) break;
  }
  if (current.length) paras.push(current.join(' '));

  let best = '';
  for (const p of paras) {
    if (p.length >= MIN && p.length > best.length) best = p;
    if (p.length >= MAX) break;
  }
  return best;
}

function titleOf(text, body) {
  const h1 = /^#\s+(.+)$/m.exec(body);
  if (h1) return h1[1].trim();
  const t = /^title:\s*["']?(.+?)["']?\s*$/m.exec(text);
  return t ? t[1].trim() : path.basename(text, path.extname(text));
}

function courseOf(file) {
  const parts = file.split(/[\\/]/);
  const i = parts.indexOf('courses');
  return i !== -1 && parts[i + 1] ? parts[i + 1] : '';
}

function clip(s) {
  if (s.length <= MAX) return s;
  const cut = s.slice(0, MAX);
  const at = cut.lastIndexOf(' ');
  return (at > 80 ? cut.slice(0, at) : cut).replace(/[,;:.\-\s]+$/, '');
}

function clean(s) {
  return s.replace(/"/g, "'").replace(/\s+/g, ' ').trim();
}

let scanned = 0;
let skipped = 0;
let updated = 0;
const samples = [];

for (const file of walk(ROOT)) {
  scanned++;
  const text = fs.readFileSync(file, 'utf8');
  const {front, body, eol} = split(text);

  if (front && /^description:/m.test(front)) {
    skipped++;
    continue;
  }

  let desc = clean(derive(body));
  if (desc.length < MIN) {
    const course = courseOf(file);
    desc = clean(`${titleOf(text, body)}${course ? ` — ${course.replace(/-/g, ' ')}` : ''}`);
  }
  if (!desc) {
    desc = clean(titleOf(text, body));
  }
  desc = clip(desc);

  let next;
  if (front !== null) {
    next = text.replace(
      /^---\r?\n([\s\S]*?)\r?\n---/,
      (_m, fm) => `---${eol}${fm}${eol}description: "${desc}"${eol}---`,
    );
  } else {
    next = `---${eol}description: "${desc}"${eol}---${eol}${eol}${text}`;
  }

  if (next === text) {
    skipped++;
    continue;
  }

  updated++;
  if (samples.length < 12) samples.push(`${path.relative(ROOT, file)}\n    "${desc}"`);
  if (WRITE) fs.writeFileSync(file, next, 'utf8');
}

console.log(`root      : ${ROOT}`);
console.log(`scanned   : ${scanned}`);
console.log(`had desc  : ${skipped}`);
console.log(`to write  : ${updated}`);
console.log(`mode      : ${WRITE ? 'WRITE' : 'dry-run (pass --write to apply)'}`);
if (samples.length) {
  console.log('\nsamples:');
  for (const s of samples) console.log('  ' + s);
}
