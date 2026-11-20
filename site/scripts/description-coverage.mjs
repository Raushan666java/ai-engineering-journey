import fs from 'node:fs';
import path from 'node:path';

// Every built page should carry a meta description, because the earlier pass
// backfilled all 1,419. Walk the build and report the exceptions.
const root = 'build';
const missing = [];
let total = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name === 'index.html') {
      total++;
      const html = fs.readFileSync(full, 'utf8');
      // React Helmet puts `data-rh="true"` before `name=`, so the tag has to be
      // matched whole and read attribute by attribute.
      const tag = /<meta[^>]*name=["']description["'][^>]*>/i.exec(html);
      const content = tag ? /content=["']([^"']*)["']/i.exec(tag[0]) : null;
      if (!content || content[1].trim() === '') missing.push(full.split(path.sep).join('/').replace(/^build\//, '').replace(/\/index\.html$/, ''));
    }
  }
}

walk(root);
console.log(`pages: ${total}   without a meta description: ${missing.length}`);
for (const m of missing.slice(0, 30)) console.log('  ' + m);
