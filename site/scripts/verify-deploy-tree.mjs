// Compare the pushed gh-pages tree with the local build, and spot-check the
// files whose correctness this deploy was about.
import fs from 'node:fs';
import path from 'node:path';

const WT = 'C:/Users/hiii/AppData/Local/Temp/opencode/ghpages-wt';
const BUILD = 'C:/xampp/htdocs/ai-engineering-journey/site/build';

function walk(root, rel = '', out = []) {
  for (const entry of fs.readdirSync(path.join(root, rel), {withFileTypes: true})) {
    const next = rel ? `${rel}/${entry.name}` : entry.name;
    if (entry.isDirectory()) walk(root, next, out);
    else out.push(next);
  }
  return out;
}

const inBuild = new Set(walk(BUILD));
const inBranch = new Set(
  walk(WT).filter((p) => !p.startsWith('.git/') && p !== '.git'),
);

const missing = [...inBuild].filter((p) => !inBranch.has(p));
const extra = [...inBranch].filter((p) => !inBuild.has(p));

console.log(`files in build : ${inBuild.size}`);
console.log(`files on branch: ${inBranch.size}`);
console.log(`missing from branch: ${missing.length}${missing.length ? ' -> ' + missing.slice(0, 8).join(', ') : ''}`);
console.log(`extra on branch    : ${extra.length}${extra.length ? ' -> ' + extra.slice(0, 8).join(', ') : ''}`);

const mb = (n) => `${(n / 1048576).toFixed(1)} MB`;
const idx = path.join(WT, 'search-index.json');
console.log(`\nsearch-index.json on branch: ${mb(fs.statSync(idx).size)}`);
const groups = JSON.parse(fs.readFileSync(idx, 'utf8'));
console.log(`  groups: ${groups.length}, docs: ${groups.map((g) => g.documents.length).join(' / ')}`);

console.log(`\n404 page shipped: ${fs.existsSync(path.join(WT, '404.html'))}`);

const sets = fs.readFileSync(path.join(WT, 'discrete-mathematics/01-sets/index.html'), 'utf8');
console.log(`katex spans (discrete-mathematics/01-sets): ${(sets.match(/class="katex"/g) || []).length}`);

const page = fs.readFileSync(path.join(WT, 'ai-agent-engineer/agentic-ai-book/13-evaluation/index.html'), 'utf8');
// React Helmet emits `<title data-rh="true">`, so the plain `<title>` pattern
// reports "no title" for every page on the site.
const title = /<title[^>]*>([^<]*)<\/title>/.exec(page);
const h1s = page.match(/<h1[\s>]/g) || [];
console.log(`\nagentic-ai-book/13-evaluation`);
console.log(`  title tag: ${title ? title[1] : '(none)'}`);
console.log(`  h1 count : ${h1s.length}`);

const sitemap = fs.readFileSync(path.join(WT, 'sitemap.xml'), 'utf8');
const urls = (sitemap.match(/<loc>/g) || []).length;
const lastmod = (sitemap.match(/<lastmod>/g) || []).length;
console.log(`\nsitemap: ${urls} urls, ${lastmod} lastmod entries`);

const home = fs.readFileSync(path.join(WT, 'index.html'), 'utf8');
const corpus = /1,282 chapters|1,282<\/strong>/.test(home);
console.log(`homepage states the measured 1,282 chapters: ${corpus}`);
