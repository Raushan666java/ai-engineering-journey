/**
 * Two docs that resolve to the same route, or two docs in one folder with the
 * same explicit id, fail the build in a way that names only one of them. This
 * lists every collision so the fix is obvious.
 *
 *   node scripts/route-collisions.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const slugs = new Map();
const ids = new Map();

function walk(dir, course) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, course || entry.name);
    } else if (/\.mdx?$/.test(entry.name)) {
      const text = fs.readFileSync(full, 'utf8');
      const fm = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
      if (!fm) continue;
      const slug = /^slug:\s*["']?([^"'\r\n]+)["']?\s*$/m.exec(fm[1]);
      const id = /^id:\s*["']?([^"'\r\n]+)["']?\s*$/m.exec(fm[1]);
      const rel = path.relative('docs', full).split(path.sep).join('/');

      if (slug) {
        const key = slug[1].trim();
        if (!slugs.has(key)) slugs.set(key, []);
        slugs.get(key).push(rel);
      }
      if (id) {
        // An explicit id replaces the file's base name, and Docusaurus scopes it
        // to the containing folder.
        const key = `${path.dirname(rel)}::${id[1].trim()}`;
        if (!ids.has(key)) ids.set(key, []);
        ids.get(key).push(rel);
      }
    }
  }
}

walk('docs');

const dupSlug = [...slugs.entries()].filter(([, v]) => v.length > 1);
const dupId = [...ids.entries()].filter(([, v]) => v.length > 1);

console.log(`docs with an explicit slug: ${[...slugs.values()].flat().length}`);
console.log(`duplicate slugs: ${dupSlug.length}`);
for (const [slug, files] of dupSlug) {
  console.log(`  ${slug}`);
  for (const f of files) console.log(`     ${f}`);
}

console.log(`\nduplicate ids within one folder: ${dupId.length}`);
for (const [key, files] of dupId) {
  console.log(`  ${key}`);
  for (const f of files) console.log(`     ${f}`);
}

const withoutSlug = [...slugs.keys()].filter((s) => s !== '/' && !s.startsWith('/'));
if (withoutSlug.length) {
  console.log(`\nslugs without a leading slash: ${withoutSlug.length}`);
  for (const s of withoutSlug.slice(0, 10)) console.log(`  ${s}`);
}
