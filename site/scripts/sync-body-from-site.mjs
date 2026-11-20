#!/usr/bin/env node
/**
 * Bring the raw source tree (docs/) up to the repaired text already in the
 * deploy tree (site/docs/).
 *
 * The two trees hold the same prose; site/docs additionally carries generated
 * frontmatter (id, slug, sidebar_position). Where site/docs is clean and docs/
 * still has mojibake, the clean body is the better copy — but only when the
 * bodies are otherwise identical, so nothing gets silently overwritten.
 *
 *   node scripts/sync-body-from-site.mjs          # report
 *   node scripts/sync-body-from-site.mjs --write
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const WRITE = process.argv.includes('--write');
const REPO = path.resolve('..');
const SRC = path.join(REPO, 'docs');
const SITE = path.resolve('docs');

const BAD = /[\u00C3\u00C2\uFFFD]/g;
const score = (t) => (t.match(BAD) || []).length;

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

/** Frontmatter split that tolerates CRLF and a missing trailing newline. */
function split(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!m) return {front: '', body: text};
  return {front: m[1], body: text.slice(m[0].length)};
}

/** Description from docs/ frontmatter, so the source tree keeps its convention. */
function descriptionOf(front) {
  const m = /^description:\s*(.*)$/m.exec(front);
  return m ? m[1].trim() : null;
}

/**
 * Text reduced to a shape that survives mojibake: every run of characters that
 * can carry encoding damage collapses to one marker. Two copies of the same
 * paragraph then compare equal even when one of them spells an em dash as
 * `â€”` and the other spells it as `—`.
 */
const mask = (t) =>
  t
    .replace(/[\u0080-\u00FF\u2018-\u203A\u20AC\u2020\u2021\u02C6\u02DC\u2030\u0160-\u017E\uFFFD]+/g, '\u0000')
    .replace(/\s+/g, ' ')
    .trim();

let fixed = 0;
const skipped = [];

for (const file of walk(SRC)) {
  const text = fs.readFileSync(file, 'utf8');
  if (score(text) === 0) continue;

  const rel = path.relative(SRC, file);
  const sitePath = path.join(SITE, rel);
  if (!fs.existsSync(sitePath)) {
    skipped.push(`${rel} — no site/docs counterpart`);
    continue;
  }

  const siteText = fs.readFileSync(sitePath, 'utf8');
  if (score(siteText) !== 0) {
    skipped.push(`${rel} — site/docs is not clean either (${score(siteText)})`);
    continue;
  }

  const a = split(text);
  const b = split(siteText);
  if (mask(a.body) !== mask(b.body)) {
    // Different prose, not just different characters: leave it to a human.
    skipped.push(`${rel} — bodies differ beyond mojibake, not overwriting`);
    continue;
  }

  const desc = descriptionOf(a.front) || descriptionOf(b.front);
  const out = desc ? `---\ndescription: ${desc}\n---\n\n${b.body}` : b.body;

  fixed++;
  console.log(`${rel}   markers ${score(text)} -> 0`);
  if (WRITE) fs.writeFileSync(file, out, 'utf8');
}

console.log(`\nreplaceable : ${fixed}`);
console.log(`skipped     : ${skipped.length}`);
for (const s of skipped) console.log('  ' + s);
console.log(`mode        : ${WRITE ? 'WRITE' : 'report only'}`);
