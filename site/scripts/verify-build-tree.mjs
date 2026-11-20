import fs from 'node:fs';
import path from 'node:path';

const checks = [];
const ok = (name, pass, detail) => checks.push([name, pass, detail]);

// Course landing pages exist at the single-segment route, not under /courses/.
for (const c of ['machine-learning', 'python-programming', 'theory-of-computation', 'laravel']) {
  ok(`landing /${c}/`, fs.existsSync(path.join('build', c, 'index.html')), fs.existsSync(path.join('build', c, 'index.html')) ? 'built' : 'MISSING');
}
ok('no /courses/<course>/ index left', !fs.existsSync(path.join('build', 'courses', 'machine-learning', 'index.html')), 'old route');

// Author-only drafts.
ok('PLAN.md not built', !fs.existsSync(path.join('build', 'courses', 'ai-engineering-placement', 'PLAN', 'index.html')), 'draft: true');
ok('TEMPLATE.md not built', !fs.existsSync(path.join('build', 'courses', 'TEMPLATE', 'index.html')), 'draft: true');

// About anchor.
const about = fs.readFileSync(path.join('build', 'about', 'index.html'), 'utf8');
ok('/about declares id=contact', about.includes('id="contact"'), `${about.split('id="contact"').length - 1} occurrences`);

// Repaired learning-course page: no YAML in the body, real title.
const lcPath = path.join('build', 'learning-course', '02_AI_Learning_Basics', 'Learning_Science', 'index.html');
if (fs.existsSync(lcPath)) {
  const lc = fs.readFileSync(lcPath, 'utf8');
  ok('learning-course page has no YAML body', !/slug:\s*\/learning-course/.test(lc), 'clean');
  const title = (/<title[^>]*>([\s\S]*?)<\/title>/.exec(lc) || [])[1] || '';
  ok('learning-course page has a real title', /Learning Science/.test(title), title.replace(/\s*\|\s*AI Engineering Journey\s*$/, ''));
} else {
  ok('learning-course page built', false, 'missing');
}

// Coefficient of the compiler-design paper: the dollar escaping landed. The page
// has one legitimate formula elsewhere, so the assertion is that this paragraph
// is plain text - not that the page has no math.
const cdPath = path.join('build', 'gate-cs-preparation', '03-compiler-design', 'index.html');
if (fs.existsSync(cdPath)) {
  const cd = fs.readFileSync(cdPath, 'utf8');
  ok('FOLLOW-set dollar renders as text', /FOLLOW\(A\)=\{b,\$/.test(cd), 'escaped');
  ok('FOLLOW paragraph was not swallowed by math', !/<span class="katex">[^<]*FOLLOW/.test(cd), 'not inside a math span');
}

// Catalogue.
const overview = fs.readFileSync(path.join('build', 'course-overview', 'index.html'), 'utf8');
ok('catalogue states 1,282 chapters', /1,282 chapters/.test(overview), 'measured');
ok('catalogue has no MkDocs syntax', !/:octicons-|:fontawesome-|grid cards/.test(overview), 'converted');

let failed = 0;
for (const [name, pass, detail] of checks) {
  if (!pass) failed++;
  console.log(`${pass ? 'PASS' : 'FAIL'}  ${name.padEnd(46)} ${detail}`);
}
console.log(`\n${failed === 0 ? 'ALL BUILD-TREE CHECKS PASSED' : failed + ' CHECK(S) FAILED'}`);
