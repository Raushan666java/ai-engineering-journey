/**
 * Check the content API as a phone would receive it.
 *
 *   node scripts/verify-content-live.mjs
 *
 * The build-tree verifier proves the files are right on disk. This proves they
 * are reachable at the URL the app has hard-coded, with the byte sizes and the
 * CORS behaviour a fetch from React Native needs (same-origin does not apply
 * there, so a missing `access-control-allow-origin` breaks the app while the
 * site still looks perfect).
 */
const BASE = 'https://raushan666java.github.io/ai-engineering-journey/content';

const checks = [];
const ok = (name, pass, detail = '') => checks.push([name, pass, detail]);

async function head(url) {
  const response = await fetch(url);
  const body = await response.arrayBuffer();
  return {
    status: response.status,
    bytes: body.byteLength,
    type: response.headers.get('content-type'),
    cors: response.headers.get('access-control-allow-origin'),
    text: () => Buffer.from(body).toString('utf8'),
  };
}

const manifestRes = await head(`${BASE}/manifest.json`);
ok('manifest is live', manifestRes.status === 200, `HTTP ${manifestRes.status}, ${(manifestRes.bytes / 1024).toFixed(0)} KB`);

const manifest = JSON.parse(manifestRes.text());
ok('manifest lists 59 courses', manifest.courses.length === 59, String(manifest.courses.length));
const chapters = manifest.courses.flatMap((c) => c.chapters);
ok('chapter count is 1,282', chapters.length === 1282, String(chapters.length));

const searchRes = await head(`${BASE}/search.json`);
ok('search index is live', searchRes.status === 200, `HTTP ${searchRes.status}, ${(searchRes.bytes / 1024).toFixed(0)} KB`);
const search = JSON.parse(searchRes.text());
ok('search index has terms', search.terms.length > 10000, `${search.terms.length.toLocaleString()} terms`);

function lookup(query) {
  const hits = new Set();
  for (const [term, ids] of search.terms) {
    if (!term.startsWith(query)) continue;
    for (const id of ids) hits.add(id);
  }
  return [...hits];
}
const ragHits = lookup('rag');
ok('offline search resolves "rag"', ragHits.length > 10, `${ragHits.length} chapters`);

// The first chapter a reader is likely to open, fetched the way the app does.
const sample = chapters[0];
const chapterRes = await head(`${BASE}/ch/${sample.id}.json`);
ok('a chapter body is live', chapterRes.status === 200, `HTTP ${chapterRes.status}, ${(chapterRes.bytes / 1024).toFixed(0)} KB`);
if (chapterRes.status === 200) {
  const body = JSON.parse(chapterRes.text());
  ok('chapter body carries its markdown', typeof body.markdown === 'string' && body.markdown.length > 500, `${body.markdown.length.toLocaleString()} chars`);
  ok('chapter body has no admonition markers', !/^:::/m.test(body.markdown));
}

// A quiz-bearing chapter, to prove the deck has material end to end.
const quizChapter = chapters.find((c) => c.quiz.some((q) => q.answer));
ok('the manifest carries answer keys', Boolean(quizChapter), quizChapter ? `${quizChapter.quiz.length} questions` : 'none found');

ok(
  'chapter responses are CORS-open',
  chapterRes.cors === '*',
  chapterRes.cors ?? '(no header)',
);

let failed = 0;
for (const [name, pass, detail] of checks) {
  if (!pass) failed++;
  console.log(`${pass ? 'PASS' : 'FAIL'}  ${name.padEnd(40)} ${detail}`);
}
console.log(`\n${failed === 0 ? 'CONTENT API IS LIVE' : `${failed} CHECK(S) FAILED`}`);
process.exit(failed === 0 ? 0 : 1);
