/**
 * Assert the things the live site was actually wrong about, from the live site.
 *
 *   node scripts/verify-live-detail.mjs
 *
 * Checks the rendered HTML (not just the status code) and the size of the
 * search payload a visitor downloads on first Ctrl+K.
 */
const BASE = 'https://raushan666java.github.io/ai-engineering-journey';

async function get(url) {
  const res = await fetch(url, {redirect: 'follow'});
  const text = await res.text();
  return {status: res.status, text, length: Buffer.byteLength(text, 'utf8')};
}

const checks = [];

const sets = await get(`${BASE}/discrete-mathematics/01-sets/`);
const katex = (sets.text.match(/class="katex"/g) || []).length;
checks.push(['KaTeX renders on /discrete-mathematics/01-sets/', sets.status === 200 && katex > 0, `${katex} spans`]);

const idx = await fetch(`${BASE}/search-index.json`);
const idxText = await idx.text();
const idxMb = Buffer.byteLength(idxText, 'utf8') / 1048576;
checks.push(['search payload is usable', idx.status === 200 && idxMb < 40, `${idxMb.toFixed(1)} MB`]);
let groups = -1;
try {
  groups = JSON.parse(idxText).length;
} catch {
  groups = -1;
}
checks.push(['search index has the trimmed shape', groups === 3, `${groups} groups`]);

const gate = await get(`${BASE}/gate-cs-preparation/01-general-aptitude/`);
const gateTitle = (/<title[^>]*>([\s\S]*?)<\/title>/.exec(gate.text) || [])[1] || '';
checks.push([
  'GATE chapter no longer titled by filename',
  !/^01-general-aptitude/.test(gateTitle.trim()),
  gateTitle.replace(/\s*\|\s*AI Engineering Journey\s*$/, ''),
]);

const sitemap = await get(`${BASE}/sitemap.xml`);
const lastmod = (sitemap.text.match(/<lastmod>/g) || []).length;
const urls = (sitemap.text.match(/<loc>/g) || []).length;
checks.push(['sitemap carries lastmod', lastmod > 0, `${lastmod} of ${urls} urls`]);

const home = await get(`${BASE}/`);
checks.push(['homepage states the measured chapter count', /1,272|1,28\d/.test(home.text), 'looking for 1,2xx chapters']);

let failed = 0;
for (const [name, ok, detail] of checks) {
  if (!ok) failed++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name.padEnd(46)} ${detail}`);
}
console.log(`\n${failed === 0 ? 'ALL DETAIL CHECKS PASSED' : failed + ' DETAIL CHECK(S) FAILED'}`);
