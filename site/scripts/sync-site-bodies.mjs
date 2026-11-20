#!/usr/bin/env node
/**
 * Copy repaired prose from the source tree (`docs/`) into the deploy tree
 * (`site/docs/`), without touching the frontmatter that the site depends on.
 *
 * The two trees hold the same documents but not the same headers:
 * `site/docs/*` carries generated `id`, `slug` and `sidebar_position`, and URLs
 * and sidebar order are derived from those. The source tree only has
 * `description:`. So the site header is preserved field by field, and only the
 * fields that come from the text (`title`, `sidebar_label`, `description`) plus
 * the body are regenerated.
 *
 *   node scripts/sync-site-bodies.mjs           # report
 *   node scripts/sync-site-bodies.mjs --write
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const WRITE = process.argv.includes('--write');
const REPO = path.resolve('..');
const SRC = path.join(REPO, 'docs');
const SITE = path.resolve('docs');

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

function split(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!m) return {front: '', body: text};
  return {front: m[1], body: text.slice(m[0].length)};
}

const field = (front, name) => {
  const m = new RegExp(`^${name}:\\s*(.*)$`, 'm').exec(front);
  return m ? m[1].trim() : '';
};

const h1 = (body) => {
  const m = /^#\s+(.+)$/m.exec(body);
  return m ? m[1].trim() : '';
};

const unquote = (v) => v.replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');

let updated = 0;
let identical = 0;
let onlyInSource = 0;
let onlyInSite = 0;

const sourceFiles = walk(SRC);

for (const file of sourceFiles) {
  const rel = path.relative(SRC, file);
  const sitePath = path.join(SITE, rel);
  if (!fs.existsSync(sitePath)) {
    onlyInSource++;
    console.log(`source only: ${rel.split(path.sep).join('/')}`);
    continue;
  }

  const sourceText = fs.readFileSync(file, 'utf8');
  const siteText = fs.readFileSync(sitePath, 'utf8');
  const s = split(sourceText);
  const t = split(siteText);

  // Only the prose matters. When the bodies already agree, leave the deploy
  // copy alone: rewriting frontmatter that is already correct would churn
  // hundreds of files for no benefit.
  const normBody = (x) => x.replace(/\s+/g, ' ').trim();
  if (normBody(s.body) === normBody(t.body)) {
    identical++;
    continue;
  }

  const body = s.body.replace(/^\r?\n+/, '');
  const title = unquote(field(s.front, 'title')) || h1(body) || path.basename(rel, '.md');
  const description = unquote(field(s.front, 'description')) || '';

  const lines = [];
  const id = field(t.front, 'id');
  const slug = field(t.front, 'slug');
  const pos = field(t.front, 'sidebar_position');
  const sidebarLabel = field(t.front, 'sidebar_label');
  if (id) lines.push(`id: ${id}`);
  if (slug) lines.push(`slug: ${slug}`);
  lines.push(`title: ${JSON.stringify(title)}`);
  if (sidebarLabel) lines.push(`sidebar_label: ${JSON.stringify(unquote(sidebarLabel))}`);
  if (pos) lines.push(`sidebar_position: ${pos}`);
  if (description) lines.push(`description: ${JSON.stringify(description)}`);

  const next = `---\n${lines.join('\n')}\n---\n\n${body}`;
  if (next === siteText) {
    identical++;
    continue;
  }

  updated++;
  const badBefore = (siteText.match(/[\u00C3\u00C2\uFFFD\u00EF\u00BF\u00BD]/g) || []).length;
  if (updated <= 12) console.log(`sync: ${rel.split(path.sep).join('/')}   damaged chars in deploy copy: ${badBefore}`);
  if (WRITE) fs.writeFileSync(sitePath, next, 'utf8');
}

const siteFiles = new Set(walk(SITE).map((f) => path.relative(SITE, f)));
for (const f of siteFiles) {
  if (!fs.existsSync(path.join(SRC, f))) {
    onlyInSite++;
    if (onlyInSite <= 10) console.log(`site only: ${f.split(path.sep).join('/')}`);
  }
}

console.log(`\nupdated      : ${updated}`);
console.log(`identical    : ${identical}`);
console.log(`source only  : ${onlyInSource}`);
console.log(`site only    : ${onlyInSite}`);
console.log(`mode         : ${WRITE ? 'WRITE' : 'report only'}`);
