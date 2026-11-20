/**
 * Docusaurus validates links but not images. A `![alt](./diagram.png)` whose
 * file was never imported renders as a broken-image icon with no build error,
 * so this walks every markdown image reference in the deploy tree and checks
 * the target exists on disk.
 *
 *   node scripts/image-report.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

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

const missing = new Map();
let checked = 0;

for (const file of walk('docs')) {
  const text = fs.readFileSync(file, 'utf8');
  const rel = path.relative('docs', file).split(path.sep).join('/');

  for (const m of text.matchAll(/!\[[^\]]*\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g)) {
    const target = m[1];
    if (/^(https?:)?\/\//.test(target) || target.startsWith('data:')) continue;
    if (target.startsWith('@site/')) {
      const abs = path.join('.', target.slice('@site/'.length));
      checked++;
      if (!fs.existsSync(abs)) push(abs);
      continue;
    }
    if (target.startsWith('/')) {
      const abs = path.join('static', target.slice(1));
      checked++;
      if (!fs.existsSync(abs)) push(`static/${target.slice(1)}`);
      continue;
    }
    const abs = path.resolve(path.dirname(file), decodeURI(target));
    checked++;
    if (!fs.existsSync(abs)) push(path.relative('.', abs).split(path.sep).join('/'));
  }
}

function push(target) {
  if (!missing.has(target)) missing.set(target, []);
  missing.get(target).push(rel);
}

console.log(`image references checked: ${checked}`);
console.log(`missing image files: ${missing.size}`);
for (const [target, from] of [...missing.entries()].slice(0, 40)) {
  console.log(`  ${target}   (referenced from ${from.length} page${from.length > 1 ? 's' : ''}: ${from[0]})`);
}
