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

// The site-wide bug: fifty-three course landing pages were published at
// /courses/<course>/ while every card, the navbar and the footer linked to
// /<course>/. Spot-check three of them from different points in the alphabet,
// and assert the landing page actually lists its chapters.
const landings = ['machine-learning', 'python-programming', 'theory-of-computation'];
const landingResults = await Promise.all(landings.map((c) => get(`${BASE}/${c}/`)));
const brokenLandings = landings.filter((c, i) => landingResults[i].status !== 200);
checks.push([
  'course landing pages resolve',
  brokenLandings.length === 0,
  brokenLandings.length ? `404: ${brokenLandings.join(', ')}` : `${landings.length} of ${landings.length} live`,
]);
const ml = landingResults[0];
const mlChapterLinks = (ml.text.match(/href="\/ai-engineering-journey\/machine-learning\/[a-z0-9-]+\/"/g) || []).length;
checks.push(['a landing page links to its chapters', mlChapterLinks >= 8, `${mlChapterLinks} chapter links`]);

// Count how many single-segment course routes the sitemap publishes. Before the
// fix this was 12 (pages only); with the landing pages it should exceed 60.
const singleSegment = [...sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1].replace(`${BASE}/`, ''))
  .filter((u) => u.split('/').filter(Boolean).length === 1);
checks.push(['sitemap publishes the course landing pages', singleSegment.length >= 60, `${singleSegment.length} single-segment urls`]);

let failed = 0;
for (const [name, ok, detail] of checks) {
  if (!ok) failed++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name.padEnd(46)} ${detail}`);
}
console.log(`\n${failed === 0 ? 'ALL DETAIL CHECKS PASSED' : failed + ' DETAIL CHECK(S) FAILED'}`);
