/**
 * Count dollar signs that KaTeX will treat as a math delimiter but that were
 * meant literally: not escaped as `\$`, not inside inline code, not inside a
 * code fence.
 *
 *   node scripts/bare-dollar-report.mjs <file> [...]
 *   node scripts/bare-dollar-report.mjs --all
 */
import fs from 'node:fs';
import path from 'node:path';

function bareDollars(text) {
  const hits = [];
  let fence = null;

  text.split('\n').forEach((line, index) => {
    if (/^\s*(```|~~~)/.test(line)) {
      fence = fence === null ? 'on' : null;
      return;
    }
    if (fence !== null) return;

    // Remove inline code, replacing with spaces so columns stay aligned.
    const stripped = line.replace(/`[^`]*`/g, (m) => ' '.repeat(m.length));
    let count = 0;
    for (let i = 0; i < stripped.length; i++) {
      if (stripped[i] !== '$') continue;
      if (i > 0 && stripped[i - 1] === '\\') continue; // already escaped
      count++;
    }
    if (count) hits.push({line: index + 1, count, text: line.trim().slice(0, 150)});
  });

  return hits;
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.mdx?$/.test(entry.name)) out.push(full);
  }
  return out;
}

const args = process.argv.slice(2);
const files = args.includes('--all') ? walk('docs') : args;

let pages = 0;
let dollars = 0;
for (const file of files) {
  const hits = bareDollars(fs.readFileSync(file, 'utf8'));
  if (!hits.length) continue;
  pages++;
  dollars += hits.reduce((n, h) => n + h.count, 0);
  console.log(`${file.split(path.sep).join('/')}   (${hits.length} lines, ${hits.reduce((n, h) => n + h.count, 0)} bare)`);
  for (const h of hits.slice(0, 4)) console.log(`   ${h.line}: ${h.text}`);
}

console.log(`\npages: ${pages}   bare dollars: ${dollars}`);
