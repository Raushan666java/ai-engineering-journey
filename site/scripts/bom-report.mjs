/**
 * Two file-level defects that show up in the rendered page:
 *
 *  1. a UTF-8 BOM inside the body, before the first heading. `\uFEFF# Title`
 *     is not a heading to the markdown parser, so the page loses its H1 and
 *     Docusaurus falls back to the filename as the title;
 *  2. a frontmatter description that is not a description - a previous repair
 *     wrote a mangled heading into it, complete with the mojibake BOM (`i»¿`)
 *     and a literal `#`. That string is what search results and social cards
 *     show.
 *
 *   node scripts/bom-report.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const TREES = ['docs/courses', path.join('docs')];
const ROOT = 'docs/courses';

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
      walk(full, out);
    } else if (/\.mdx?$/.test(entry.name)) out.push(full);
  }
  return out;
}

const bodyBom = [];
const badDescription = [];
let scanned = 0;

for (const file of walk(ROOT)) {
  const text = fs.readFileSync(file, 'utf8');
  scanned++;
  const fm = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!fm) continue;
  const body = text.slice(fm[0].length);
  const rel = file.split(path.sep).join('/');

  if (/^\uFEFF/.test(body)) bodyBom.push(rel);

  const desc = (/^description:\s*(.+)$/m.exec(fm[1]) || [])[1] || '';
  const value = desc.trim().replace(/^["'](.*)["']$/, '$1');
  if (/^[\uFEFFï»¿#]|ï»¿|\uFEFF|^#/.test(value) || /^[A-Z ]+->/.test(value)) {
    badDescription.push({rel, value: value.slice(0, 100)});
  }
}

console.log(`files scanned: ${scanned}`);
console.log(`\nBOM before the body: ${bodyBom.length}`);
for (const r of bodyBom.slice(0, 40)) console.log(`  ${r}`);
if (bodyBom.length > 40) console.log(`  ... ${bodyBom.length - 40} more`);

console.log(`\ndescription is a mangled heading: ${badDescription.length}`);
for (const r of badDescription.slice(0, 40)) console.log(`  ${r.rel}\n     "${r.value}"`);
if (badDescription.length > 40) console.log(`  ... ${badDescription.length - 40} more`);
