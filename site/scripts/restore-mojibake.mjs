#!/usr/bin/env node
/**
 * Restore the 34 chapters that still carry U+FFFD, from the last clean commit.
 *
 * Timeline (verified with `git log -S`):
 *   377bc1469b  last revision with zero U+FFFD in these files
 *   1813749381  "docs: repair CP1252 mojibake in 966 markdown files"
 *               -> rewrote 43,257 lines character-for-character and left
 *                  U+FFFD in the places it could not decode
 *   d1367f31d2  a later partial attempt; still broken
 *
 * Guessing which character was lost (`Ã—`, `â‰ˆ`, `â†’`, `â‚¹`, `â´`) is inventing
 * content. Restoring the pre-corruption blob is not a guess, so that is what
 * this does. The only content that can disappear is 4 lines per file, which
 * are the `description:` frontmatter this project added afterwards â€” and the
 * script puts a fresh one back.
 *
 * site/docs keeps its generated structural frontmatter (`id`, `slug`,
 * `sidebar_position`) because URLs and sidebar order depend on it. Only
 * `title`, `sidebar_label`, `description` and the body are regenerated from
 * the restored text.
 *
 *   node scripts/restore-mojibake.mjs            # report only
 *   node scripts/restore-mojibake.mjs --write
 */

import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import process from 'node:process';

const WRITE = process.argv.includes('--write');
const BAD = '\uFFFD';

// Two trees carry the same prose: site/docs (deploy tree, generated
// frontmatter) and repo docs (raw source). They have to be repaired together
// or the next sync quietly reintroduces the damage, so the root is a flag:
//   node scripts/restore-mojibake.mjs              -> site/docs
//   node scripts/restore-mojibake.mjs --root ../docs
const rootIdx = process.argv.indexOf('--root');
const SITE = path.resolve(rootIdx !== -1 ? process.argv[rootIdx + 1] : 'docs');
const REPO = path.resolve('..');
const MAX = 155;

/**
 * The newest revision of `rel` that contains no U+FFFD.
 *
 * Hardcoding a SHA was wrong once already: the obvious candidate (377bc1469b)
 * still had 435 bad characters, and PowerShell's pipe decoding made it look
 * clean. Reading the blob as a Buffer and counting matches is the only
 * trustworthy check.
 */
function newestCleanRevision(rel) {
  const revs = execFileSync('git', ['log', '--format=%h', '--', `docs/${rel}`], {
    cwd: REPO,
    encoding: 'utf8',
  })
    .trim()
    .split('\n')
    .filter(Boolean);

  for (const rev of revs) {
    let text;
    try {
      text = execFileSync('git', ['show', `${rev}:docs/${rel}`], {
        cwd: REPO,
        maxBuffer: 64 * 1024 * 1024,
      }).toString('utf8');
    } catch {
      continue;
    }
    if (!text.includes(BAD)) {
      return {rev, text, subject: subjectOf(rev)};
    }
  }
  return null;
}

function subjectOf(rev) {
  return execFileSync('git', ['log', '-1', '--format=%s', rev], {
    cwd: REPO,
    encoding: 'utf8',
  })
    .trim()
    .slice(0, 60);
}

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

const corrupted = walk(SITE).filter((f) => fs.readFileSync(f, 'utf8').includes(BAD));

function splitFront(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!m) return {front: '', body: text};
  return {front: m[1], body: text.slice(m[0].length)};
}

function field(front, name) {
  const m = new RegExp(`^${name}:\\s*(.*)$`, 'm').exec(front);
  return m ? m[1].trim() : '';
}

function h1(body) {
  const m = /^#\s+(.+)$/m.exec(body);
  return m ? m[1].trim() : '';
}

const JUNK = /^(-{3,}|>|#|\||```|!\[|[A-Za-z][^:]{0,30}:)/;

/** Structural markers that mojibake does not change. */
function structure(t) {
  const c = (re) => (t.match(re) || []).length;
  return {
    h2: c(/^## /gm),
    h3: c(/^### /gm),
    details: c(/<details/g),
    fences: c(/^```/gm),
    tables: c(/^\|/gm),
    questions: c(/^#{3,4}\s*Q\d+/gm),
  };
}

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

let restored = 0;
const problems = [];
const preview = [];
const revisions = [];

for (const siteFile of corrupted) {
  const rel = path.relative(SITE, siteFile).split(path.sep).join('/');
  const docsFile = path.join(REPO, 'docs', rel);

  const found = newestCleanRevision(rel);
  if (!found) {
    problems.push(`${rel} â€” no clean revision found in history`);
    continue;
  }
  const clean = found.text;

  const cleanSplit = splitFront(clean);
  const body = cleanSplit.body.replace(/^\r?\n+/, '');
  const title = h1(body) || path.basename(rel, '.md');
  const description = derive(body) || title;

  // Guard: refuse to write when the clean revision lost a section. Structure
  // (headings, tables, code fences, Q&A blocks) survives mojibake, so any
  // difference means this revision is not the same document.
  const currentRaw = fs.readFileSync(siteFile, 'utf8');
  const a = structure(body);
  const b = structure(currentRaw);
  const drift = Object.keys(a).filter((k) => a[k] !== b[k]);
  if (drift.length) {
    problems.push(
      `${rel} — structure drift from ${found.rev}: ${drift.map((k) => `${k} ${b[k]}->${a[k]}`).join(', ')}`,
    );
    continue;
  }

  // --- source tree: restored text (description frontmatter re-added later) ---
  const docsText = `---\ndescription: "${description}"\n---\n\n${body}`;

  // --- site tree: keep generated structure, regenerate prose fields ---
  const current = currentRaw;
  const siteFront = splitFront(current).front;
  const id = field(siteFront, 'id');
  const slug = field(siteFront, 'slug');
  const pos = field(siteFront, 'sidebar_position');

  const frontLines = [];
  if (id) frontLines.push(`id: ${id}`);
  if (slug) frontLines.push(`slug: ${slug}`);
  frontLines.push(`title: "${title.replace(/"/g, "'")}"`);
  frontLines.push(`sidebar_label: "${title.replace(/"/g, "'")}"`);
  if (pos) frontLines.push(`sidebar_position: ${pos}`);
  frontLines.push(`description: "${description}"`);
  const siteText = `---\n${frontLines.join('\n')}\n---\n\n${body}`;

  restored++;
  const cleanLines = body.split('\n').length;
  const nowLines = current.split('\n').length;
  if (preview.length < 6) {
    preview.push(
      `${rel}\n    from ${found.rev} "${found.subject}"\n    lines ${nowLines} -> ${cleanLines}   bad chars ${(current.match(new RegExp(BAD, 'g')) || []).length} -> 0`,
    );
  }
  revisions.push({rel, rev: found.rev});

  if (WRITE) {
    fs.writeFileSync(docsFile, docsText, 'utf8');
    fs.writeFileSync(siteFile, siteText, 'utf8');
  }
}

console.log('method         : newest U+FFFD-free revision per file');
console.log(`corrupted files: ${corrupted.length}`);
console.log(`restorable     : ${restored}`);
console.log(`mode           : ${WRITE ? 'WRITE' : 'report only'}`);
if (preview.length) {
  console.log('\nsamples:');
  for (const p of preview) console.log('  ' + p);
}
if (problems.length) {
  console.log('\nproblems:');
  for (const p of problems) console.log('  ' + p);
}

