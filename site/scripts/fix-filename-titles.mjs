/**
 * Thirty-one pages show their filename as the page title and as the sidebar
 * entry: "01-general-aptitude", "15-mock-test-1", "ch-08-gate-theory-prep".
 *
 * The cause is a stray three-byte UTF-8 BOM written into the body by an earlier
 * import. It survived a CP1252 round-trip as the text `i»¿` and now sits right
 * before the heading marker:
 *
 *     i»¿# General Aptitude for GATE CS
 *
 * That is not a heading to the markdown parser. So the page had no H1, the line
 * rendered as a paragraph with a literal "#" in front of it, and Docusaurus
 * fell back to the filename for the title.
 *
 * Per page, in the deploy tree (`site/docs`):
 *   1. strip the junk prefix so the line becomes a real H1;
 *   2. clean the heading text (`Chapter 08:` prefix, `->` and `->`-shaped
 *      arrows where a dash belongs, and the `-"` mojibake dash) and make it the
 *      title and sidebar label;
 *   3. remove the heading line from the body - the title already renders as the
 *      page H1, and printing both reads like a mistake.
 *
 * Only pages whose declared title is exactly the filename are touched, and only
 * when the junk heading is in the first three non-empty lines: scanning the
 * whole body found "Validate input", a heading inside a section, and tried to
 * make that the page title.
 *
 * The raw source tree (`docs`) has no frontmatter titles, so it receives the
 * body edit only, and only for files the site tree fixed - otherwise the two
 * trees drift.
 *
 * Five of these pages also carry a mangled heading in `description:` (that is
 * what search results and social cards display), so those are rewritten too.
 *
 *   node scripts/fix-filename-titles.mjs           # report
 *   node scripts/fix-filename-titles.mjs --write
 */
import fs from 'node:fs';
import path from 'node:path';

const WRITE = process.argv.includes('--write');
const SUB = path.join('docs', 'courses');
const SITE = path.resolve('.');
const SOURCE = path.resolve('..');

const fileSlugTitle = /^[\d_]*(ch[-_])?[a-z0-9]+([-_][a-z0-9]+)+$/i;

/** Junk prefix (mojibake BOM, stray spaces) before the heading marker. */
const JUNK_HEADING = /^([^\p{L}\p{N}#]{1,10})#\s+(.+)$/u;

const DESCRIPTIONS = {
  '03-compiler-design.md':
    'Compiler design for GATE CS: phases of compilation, lexical analysis, grammar classification, parsing (LL, LR, LALR), syntax-directed translation and code optimisation.',
  '09-computer-networks.md':
    'Computer networks for GATE CS: layered models, framing and switching, IPv4/IPv6 addressing and subnetting, routing algorithms, TCP congestion control and applied network security.',
  '15-mock-test-1.md':
    'GATE CS mock test 1: a full-length paper in exam order, with an answer key and worked solutions for every question.',
  '31-gate-2017-solved.md':
    'GATE CS 2017 solved paper: every question with the official answer and a worked explanation, grouped by subject so weak areas are easy to find.',
  '32-gate-2016-solved.md':
    'GATE CS 2016 solved paper: every question with the official answer and a worked explanation, grouped by subject so weak areas are easy to find.',
};

function cleanTitle(raw) {
  return raw
    .replace(/^\s*chapter\s+0?\d+\s*[:.]\s*/i, '')
    .replace(/\u2014["”]/g, '\u2014') // mojibake dash
    .replace(/\u2192|->/g, '\u2014') // arrow used where a dash belongs
    .replace(/\s+/g, ' ')
    .replace(/"/g, "'")
    .trim();
}

/** Index of a junk-prefixed heading among the first three non-empty lines. */
function findJunkHeading(lines) {
  const nonEmpty = [];
  for (let i = 0; i < lines.length && nonEmpty.length < 3; i++) {
    if (lines[i].trim()) nonEmpty.push(i);
  }
  return nonEmpty.find((i) => JUNK_HEADING.test(lines[i]) && /#\s+\S/.test(lines[i]));
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('.')) continue;
      walk(full, out);
    } else if (/\.mdx?$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

const fixed = [];

for (const file of walk(path.join(SITE, SUB))) {
  const text = fs.readFileSync(file, 'utf8');
  const fm = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!fm) continue;

  const front = fm[1];
  const body = text.slice(fm[0].length);
  const declared = ((/^title:\s*(.+)$/m.exec(front) || [])[1] || '')
    .trim()
    .replace(/^["'](.*)["']$/, '$1');
  const name = path.basename(file);
  const stem = name.replace(/\.mdx?$/, '');

  // "Human-in-the-Loop" is a real title; "01-general-aptitude" is the filename.
  if (declared !== stem) continue;

  const lines = body.split('\n');
  const index = findJunkHeading(lines);
  if (index === undefined) continue;

  const title = cleanTitle(JUNK_HEADING.exec(lines[index])[2]);
  if (!title) continue;

  lines.splice(index, 1);
  const nextBody = lines.join('\n').replace(/^\n+/, '');

  let nextFront = front.replace(/^title:\s*.*$/m, `title: ${JSON.stringify(title)}`);
  if (/^sidebar_label:/m.test(nextFront)) {
    nextFront = nextFront.replace(
      /^sidebar_label:\s*.*$/m,
      `sidebar_label: ${JSON.stringify(title)}`,
    );
  }

  const description = DESCRIPTIONS[name];
  if (description) {
    if (/^description:/m.test(nextFront)) {
      nextFront = nextFront.replace(/^description:\s*.*$/m, `description: ${JSON.stringify(description)}`);
    } else {
      nextFront += `\ndescription: ${JSON.stringify(description)}`;
    }
  }

  const rel = path.relative(path.join(SITE, SUB), file);
  fixed.push(rel);
  console.log(`${rel}\n    -> ${title}${description ? '   [description rewritten]' : ''}`);
  if (WRITE) fs.writeFileSync(file, `---\n${nextFront}\n---\n\n${nextBody}`, 'utf8');
}

// Source tree: body only, same files, same edit.
let mirrored = 0;
for (const rel of fixed) {
  const file = path.join(SOURCE, SUB, rel);
  if (!fs.existsSync(file)) continue;
  const text = fs.readFileSync(file, 'utf8');
  const fm = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!fm) continue;
  const body = text.slice(fm[0].length);
  const lines = body.split('\n');
  const index = findJunkHeading(lines);
  if (index === undefined) continue;
  lines.splice(index, 1);
  const nextBody = lines.join('\n').replace(/^\n+/, '');
  mirrored++;
  if (WRITE) fs.writeFileSync(file, `${fm[0]}${nextBody}`, 'utf8');
}

console.log(`\npages fixed: ${fixed.length}   source bodies mirrored: ${mirrored}   mode: ${WRITE ? 'WRITE' : 'report'}`);
