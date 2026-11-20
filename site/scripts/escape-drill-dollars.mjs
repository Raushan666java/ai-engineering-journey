/**
 * A `$` that was meant literally - "FOLLOW(S)={$}", "costs $5", "${VAR}" - is a
 * math delimiter as far as the MDX math plugin is concerned. It pairs with the
 * next bare `$` anywhere later on the page, so the prose between them is handed
 * to KaTeX: it either renders as nonsense math or, when the count is odd, the
 * rest of the page is swallowed into an unclosed span.
 *
 * A page that contains no real math at all (`$$`, `$...$`, `\command`) should
 * never have a delimiter, so every bare `$` there is escaped to `\$`. Pages
 * that do contain math are reported but not touched: deciding which dollar is a
 * delimiter needs eyes, and a wrong guess breaks working formulas.
 *
 *   node scripts/escape-drill-dollars.mjs           # report
 *   node scripts/escape-drill-dollars.mjs --write
 */
import fs from 'node:fs';
import path from 'node:path';

const WRITE = process.argv.includes('--write');

const hasMath = (text) =>
  /\$\$/.test(text) ||
  /\\[a-zA-Z]{2,}/.test(text) || // \frac, \text, \alpha, \sim ...
  /\$[^$\n]+\$/.test(text.replace(/\\\$/g, ''));

/** Escape `$` outside code fences, indented code blocks and inline code. */
function escapeBare(text) {
  let fence = null;
  let changed = 0;
  const lines = text.split('\n');

  // An indented code block is four spaces of indent that follows a blank line
  // (or another indented line). A `$` there is source code, not a delimiter.
  const indented = (i) => {
    const line = lines[i];
    if (!/^( {4}|\t)/.test(line)) return false;
    let j = i - 1;
    while (j >= 0 && lines[j].trim() === '') j--;
    if (j < 0) return true;
    return /^( {4}|\t)/.test(lines[j]) || lines[j].trim() === '';
  };

  const out = lines.map((line, index) => {
    if (/^\s*(```|~~~)/.test(line)) {
      fence = fence === null ? 'on' : null;
      return line;
    }
    if (fence !== null) return line;
    if (indented(index)) return line;

    // Protect inline code by splitting on it.
    return line
      .split(/(`[^`]*`)/)
      .map((part) => {
        if (part.startsWith('`')) return part;
        return part.replace(/(^|[^\\])\$/g, (m, prefix) => {
          changed++;
          return `${prefix}\\$`;
        });
      })
      .join('');
  });

  return {text: out.join('\n'), changed};
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
      walk(full, out);
    } else if (/\.mdx?$/.test(entry.name)) out.push(full);
  }
  return out;
}

/**
 * Only the two course trees. `docs/ai-engineering-from-scratch/` is imported
 * course material with its own upstream, and the site does not publish it, so
 * it is not ours to rewrite on a bulk pass.
 */
const ROOTS = [path.join('docs', 'courses'), path.join('..', 'docs', 'courses')];

let fixedPages = 0;
let fixedDollars = 0;
const skipped = [];

for (const root of ROOTS) {
  if (!fs.existsSync(root)) continue;
  for (const file of walk(root)) {
    const original = fs.readFileSync(file, 'utf8');
    const rel = file.split(path.sep).join('/');

    if (hasMath(original)) {
      const {changed} = escapeBare(original);
      if (changed) skipped.push({rel, changed});
      continue;
    }

    const {text, changed} = escapeBare(original);
    if (!changed) continue;

    fixedPages++;
    fixedDollars += changed;
    console.log(`${rel}   (${changed} dollars)`);
    if (WRITE) fs.writeFileSync(file, text, 'utf8');
  }
}

if (skipped.length) {
  console.log(`\npages WITH real math and bare dollars (left alone): ${skipped.length}`);
  for (const s of skipped.slice(0, 15)) console.log(`  ${s.rel}   (${s.changed})`);
}

console.log(`\nmath-free pages escaped: ${fixedPages}   dollars: ${fixedDollars}   mode: ${WRITE ? 'WRITE' : 'report'}`);
