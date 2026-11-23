/**
 * Assert the content API the app reads.
 *
 *   node scripts/verify-content-api.mjs
 *
 * The app trusts three files and cannot repair any of them. A manifest entry
 * with no chapter file is a reader tapping a chapter and getting an error; a
 * search posting pointing past the end of the manifest is a result that cannot
 * be opened; a chapter over AsyncStorage's practical limit is a chapter that
 * silently fails to cache. None of those throw anywhere, so each is asserted.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'static/content';
const MAX_MANIFEST = 2 * 1024 * 1024;
const MAX_CHAPTER = 1_500_000; // the app's own caching threshold
const MAX_SEARCH = 2 * 1024 * 1024;

const checks = [];
const ok = (name, pass, detail = '') => checks.push([name, pass, detail]);
const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

const manifestPath = path.join(ROOT, 'manifest.json');
const searchPath = path.join(ROOT, 'search.json');

ok('manifest exists', fs.existsSync(manifestPath));
const manifestBytes = fs.statSync(manifestPath).size;
ok('manifest under 2 MB', manifestBytes < MAX_MANIFEST, kb(manifestBytes));

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const chapters = [];
for (const course of manifest.courses) {
  for (const chapter of course.chapters) chapters.push({...chapter, courseId: course.id});
}

ok('manifest has courses', manifest.courses.length > 0, `${manifest.courses.length} courses`);
ok('manifest has chapters', chapters.length > 0, `${chapters.length} chapters`);
ok('every chapter has a title', chapters.every((c) => typeof c.title === 'string' && c.title.length > 0));
ok('every chapter has a reading time', chapters.every((c) => Number.isInteger(c.minutes) && c.minutes >= 1));
ok(
  'chapter ids are unique',
  new Set(chapters.map((c) => c.id)).size === chapters.length,
  `${new Set(chapters.map((c) => c.id)).size} unique`,
);

// Every chapter must have a body file, and no body file may be orphaned — an
// orphan is a chapter the app will never be able to open on a clean install.
const missing = [];
const tooBig = [];
for (const chapter of chapters) {
  const file = path.join(ROOT, 'ch', `${chapter.id}.json`);
  if (!fs.existsSync(file)) {
    missing.push(chapter.id);
    continue;
  }
  const size = fs.statSync(file).size;
  if (size > MAX_CHAPTER) tooBig.push(`${chapter.id} ${kb(size)}`);
}
ok('every chapter has a body file', missing.length === 0, missing.slice(0, 3).join(', ') || `${chapters.length} files`);

const bodyFiles = new Set(fs.readdirSync(path.join(ROOT, 'ch')).filter((f) => f.endsWith('.json')));
const expected = new Set(chapters.map((c) => `${c.id}.json`));
const orphans = [...bodyFiles].filter((f) => !expected.has(f));
ok('no orphaned chapter files', orphans.length === 0, orphans.slice(0, 3).join(', ') || 'none');
ok('no chapter over the caching limit', tooBig.length === 0, tooBig.slice(0, 3).join(', ') || `max under ${kb(MAX_CHAPTER)}`);

// A body file must contain the same title the manifest advertises; otherwise the
// reader opens a chapter headed with the wrong name.
const mismatched = [];
for (const chapter of chapters.slice(0, 60)) {
  const file = path.join(ROOT, 'ch', `${chapter.id}.json`);
  if (!fs.existsSync(file)) continue;
  const body = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (body.title !== chapter.title) mismatched.push(chapter.id);
}
ok('chapter titles match the manifest', mismatched.length === 0, mismatched.slice(0, 3).join(', ') || 'sampled 60');

const questions = chapters.flatMap((c) => c.quiz);
const keyed = questions.filter((q) => q.answer);
ok('some quizzes have a readable answer key', keyed.length > 400, `${keyed.length} of ${questions.length} questions`);
ok('every keyed question has 2-4 options', keyed.every((q) => q.options.length >= 2 && q.options.length <= 4));
ok('no option repeats its letter', keyed.every((q) => new Set(q.options.map((o) => o[0])).size === q.options.length));

// --- search ---------------------------------------------------------------

ok('search index exists', fs.existsSync(searchPath));
const searchBytes = fs.statSync(searchPath).size;
ok('search index under 2 MB', searchBytes < MAX_SEARCH, kb(searchBytes));

const search = JSON.parse(fs.readFileSync(searchPath, 'utf8'));
ok('search index covers every chapter', search.chapters === chapters.length, `${search.chapters} vs ${chapters.length}`);

const terms = search.terms;
const sorted = terms.every((entry, i) => i === 0 || (terms[i - 1]?.[0] ?? '') <= entry[0]);
ok('search terms are sorted (binary search depends on it)', sorted);

const outOfRange = terms.flatMap(([term, ids]) => ids.filter((id) => id < 0 || id >= chapters.length).map((id) => `${term}:${id}`));
ok('every posting points at a real chapter', outOfRange.length === 0, outOfRange.slice(0, 3).join(', ') || `${terms.length.toLocaleString()} terms`);

// The three queries a reader is most likely to type, resolved the way the app
// resolves them: prefix, then map the chapter number back to a title.
function lookup(query) {
  const hits = new Set();
  for (const [term, ids] of terms) {
    if (!term.startsWith(query)) continue;
    for (const id of ids) hits.add(id);
  }
  return [...hits].map((id) => chapters[id]?.title).filter(Boolean);
}
for (const query of ['rag', 'sql', 'gradient']) {
  const found = lookup(query);
  ok(`search finds "${query}"`, found.length > 0, `${found.length} chapters, e.g. ${found[0] ?? '-'}`);
}

// --- report ---------------------------------------------------------------

let failed = 0;
for (const [name, pass, detail] of checks) {
  if (!pass) failed++;
  console.log(`${pass ? 'PASS' : 'FAIL'}  ${name.padEnd(48)} ${detail}`);
}
console.log(`\n${failed === 0 ? 'ALL CONTENT API CHECKS PASSED' : `${failed} CHECK(S) FAILED`}`);
process.exit(failed === 0 ? 0 : 1);
