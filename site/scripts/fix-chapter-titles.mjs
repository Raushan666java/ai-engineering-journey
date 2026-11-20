#!/usr/bin/env node
/**
 * The `ai-agent-engineer/agentic-ai-book` course has three title defects that a
 * reader sees before reading a single paragraph:
 *
 *   A. a page whose title is its filename — sidebar says "13-evaluation",
 *      browser tab says "13-evaluation";
 *   B. a page whose title is a part divider — sidebar says "Part II — Building
 *      Blocks" for the page that is actually Chapter 4, Tool Calling;
 *   C. leftover mojibake inside those strings ("Part I \uFFFD?\" Foundations"),
 *      which is what a botched dash repair looks like.
 *
 * All three collapse into one operation: take the real chapter name from the
 * body's `## Chapter N: <name>` line, make it the title, and delete the line so
 * the heading is not printed twice under Docusaurus' auto-rendered H1. On the
 * divider pages the stray `# Part X` H1 goes too.
 *
 * Sections are promoted one level (`### 13.1` -> `## 13.1`) so the table of
 * contents keeps its hierarchy once the `## Chapter N` heading is gone.
 *
 * Frontmatter the site depends on (`id`, `slug`, `sidebar_position`,
 * `description`) is preserved verbatim. The source tree has no `title:` at all,
 * so there the filename is the title and only body edits are mirrored.
 *
 *   node scripts/fix-chapter-titles.mjs           # report
 *   node scripts/fix-chapter-titles.mjs --write
 */

import fs from 'node:fs';
import path from 'node:path';

const WRITE = process.argv.includes('--write');
const SUB = path.join('docs', 'courses', 'ai-agent-engineer', 'agentic-ai-book');
const TREES = [
  {root: path.resolve('..'), label: 'source', hasTitle: false},
  {root: path.resolve('.'), label: 'site', hasTitle: true},
];

/** Rewrite heading levels outside fenced code blocks. */
function promote(body, minLevel = 3) {
  const out = [];
  let fence = null;
  for (const line of body.split('\n')) {
    const fenceMatch = /^\s*(```|~~~)/.exec(line);
    if (fenceMatch) {
      if (!fence) fence = fenceMatch[1];
      else if (fenceMatch[1] === fence) fence = null;
      out.push(line);
      continue;
    }
    if (!fence) {
      const heading = /^(#{1,6})(\s+.*)$/.exec(line);
      if (heading && heading[1].length >= minLevel) {
        out.push(`${heading[1].slice(1)}${heading[2]}`);
        continue;
      }
    }
    out.push(line);
  }
  return out.join('\n');
}

/** "Chapter 4: Tool Calling From First Principles" -> "Tool Calling From First Principles" */
function chapterName(line) {
  return line
    .replace(/^##\s+Chapter\s+\d+\s*[:.]\s*/i, '')
    .replace(/\s*[\u2014\u2013-]\s*(How|Why|What|When)\b/, ' \u2014 $1')
    .trim()
    .replace(/"/g, "'");
}

const slugTitle = (v) =>
  !v || /^["']?[a-z0-9]+([-_][a-z0-9]+)+["']?$/i.test(v);
const partTitle = (v) => /^["']?Part\s+[IVXLC]+\b/i.test(v || '');

let changed = 0;

for (const tree of TREES) {
  const dir = path.join(tree.root, SUB);
  if (!fs.existsSync(dir)) {
    console.log(`skip (missing): ${dir}`);
    continue;
  }

  for (const name of fs.readdirSync(dir).filter((f) => /\.mdx?$/.test(f)).sort()) {
    const file = path.join(dir, name);
    const text = fs.readFileSync(file, 'utf8');
    const fm = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
    if (!fm) continue;

    const front = fm[1];
    let body = text.slice(fm[0].length);

    // In the source tree the title is the filename, which is exactly the slug
    // shape we are fixing, so use it as the stand-in value.
    const declared = (/^title:\s*(.+)$/m.exec(front) || [])[1]?.trim();
    const current = declared
      ? declared.replace(/^["'](.*)["']$/, '$1')
      : name.replace(/\.mdx?$/, '');

    const chapter = /^##\s+Chapter\s+\d+\s*[:.]\s*(.+)$/m.exec(body);
    if (!chapter) continue;

    const kind = partTitle(current)
      ? 'part-divider'
      : slugTitle(current)
        ? 'slug'
        : null;
    if (!kind) continue;

    const realTitle = chapterName(chapter[0]);
    if (!realTitle || realTitle.length < 6) continue;

    // A stray "# Part X" H1 above the chapter heading is the divider leaking
    // into the page body; Docusaurus renders the title as H1, so drop it.
    body = body.replace(/^#\s+Part\s+[IVXLC]+\b[^\n]*\n+/, '');

    // Drop the chapter heading itself: the title now carries that text.
    body = body.replace(chapter[0] + '\n', '');
    body = body.replace(/^\n+/, '');
    body = promote(body, 3);

    let nextFront = front;
    if (tree.hasTitle) {
      nextFront = front.replace(/^title:\s*.*$/m, `title: ${JSON.stringify(realTitle)}`);
      if (/^sidebar_label:/m.test(nextFront)) {
        nextFront = nextFront.replace(
          /^sidebar_label:\s*.*$/m,
          `sidebar_label: ${JSON.stringify(realTitle)}`,
        );
      }
    }

    const next = `---\n${nextFront}\n---\n\n${body}`;
    changed++;
    console.log(`${tree.label.padEnd(6)} ${name.padEnd(34)} [${kind}] -> ${realTitle}`);
    if (WRITE) fs.writeFileSync(file, next, 'utf8');
  }
}

console.log(`\npages rewritten: ${changed}   mode: ${WRITE ? 'WRITE' : 'report'}`);
