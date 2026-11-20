/**
 * Per-course list of chapters that break the house rule (objectives, theory,
 * examples, summary, takeaways, quiz, exercises). Prints counts and, for one
 * course, the exact files, so the work can be scoped instead of guessed.
 *
 *   node scripts/rule-gaps.mjs                 # counts per course
 *   node scripts/rule-gaps.mjs ai-engineering-placement
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'docs/courses';
const NOT_A_CHAPTER = /^(index|readme|visual-notes|template)\.mdx?$/i;
const only = process.argv[2] || null;

const SECTIONS = {
  objectives: /^#{1,4}\s*.*(learning objective|objectives|what you.{0,3}ll learn|goals)/im,
  summary: /^#{1,4}\s*.*summary/im,
  takeaways: /^#{1,4}\s*.*(practical takeaway|key takeaway|takeaways)/im,
  quiz: /^#{1,4}\s*.*(quiz|check your understanding|self.?test|practice questions)/im,
  exercises: /^#{1,4}\s*.*(exercise|practice|drill|homework|assignment)/im,
};

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('.')) continue;
      walk(full, out);
    } else if (/\.mdx?$/.test(entry.name)) out.push(full);
  }
  return out;
}

const rows = [];
for (const file of walk(ROOT)) {
  if (NOT_A_CHAPTER.test(path.basename(file))) continue;
  const rel = file.split(path.sep).join('/');
  const course = rel.replace(`${ROOT}/`, '').split('/')[0];
  if (only && course !== only) continue;

  const text = fs.readFileSync(file, 'utf8');
  const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
  const words = (body.match(/\S+/g) || []).length;

  // A mock paper or a question bank is itself the quiz: asking it to also carry
  // "Chapter Quiz" and "Exercises" sections would mean writing a second paper.
  // Detect that by shape, not by filename: 30+ numbered questions plus an
  // "Answer Key" heading. Numbered questions alone is too loose - a topic
  // reference with 80 worked examples is teaching material, not a paper.
  const numberedQuestions = (body.match(/^\s*\d{1,3}[.)]\s+\S/gm) || []).length;
  const hasAnswerKey = /^#{1,4}\s*.*(answer key|answers)\b/im.test(body);
  const isDrill = numberedQuestions >= 30 && hasAnswerKey;

  let missing = Object.entries(SECTIONS)
    .filter(([, re]) => !re.test(body))
    .map(([k]) => k);
  if (isDrill) missing = missing.filter((k) => k === 'objectives' || k === 'summary' || k === 'takeaways');
  rows.push({rel, course, words, missing, isDrill, numberedQuestions});
}

const byCourse = new Map();
for (const r of rows) {
  if (!byCourse.has(r.course)) byCourse.set(r.course, []);
  byCourse.get(r.course).push(r);
}

if (!only) {
  console.log('course                              chapters  no-quiz  no-exercises  no-objectives');
  const ranked = [...byCourse.entries()]
    .map(([course, items]) => ({
      course,
      n: items.length,
      quiz: items.filter((i) => i.missing.includes('quiz')).length,
      ex: items.filter((i) => i.missing.includes('exercises')).length,
      obj: items.filter((i) => i.missing.includes('objectives')).length,
    }))
    .sort((a, b) => b.quiz - a.quiz);
  for (const r of ranked) {
    console.log(
      `  ${r.course.padEnd(34)} ${String(r.n).padStart(4)}     ${String(r.quiz).padStart(4)}        ${String(r.ex).padStart(4)}         ${String(r.obj).padStart(4)}`,
    );
  }
  const totals = ranked.reduce((a, r) => ({
    n: a.n + r.n,
    quiz: a.quiz + r.quiz,
    ex: a.ex + r.ex,
    obj: a.obj + r.obj,
  }), {n: 0, quiz: 0, ex: 0, obj: 0});
  console.log(`\n  TOTAL${' '.repeat(30)} ${String(totals.n).padStart(4)}     ${String(totals.quiz).padStart(4)}        ${String(totals.ex).padStart(4)}         ${String(totals.obj).padStart(4)}`);
  process.exit(0);
}

const items = rows.filter((r) => r.missing.length);
console.log(`${items.length} of ${rows.length} chapters in ${only} are missing a required section:\n`);
for (const r of items) {
  const tag = r.isDrill ? '   [drill paper: the paper is the quiz]' : '';
  console.log(`  ${String(r.words).padStart(5)} w  [${r.missing.join(', ').padEnd(28)}] ${r.rel.replace(`${ROOT}/${only}/`, '')}${tag}`);
}
const drills = rows.filter((r) => r.isDrill).length;
console.log(`\n${drills} chapters in this course are drill papers (exempt from quiz/exercise sections).`);
