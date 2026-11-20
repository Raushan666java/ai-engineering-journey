/**
 * `docs/index.md` - the sidebar's first entry, published at /course-overview -
 * was imported from an MkDocs site and never converted:
 *
 *   - its CSS classes (`home-hero`, `hero-btn`, `course-chaps`, `course-icon`,
 *     `cta-row`, ...) do not exist anywhere in this theme, so none of it was
 *     styled;
 *   - its icon syntax (`:fontawesome-solid-brain:{ .lg .middle }`) and
 *     `grid cards` directive are Material for MkDocs, and render here as
 *     literal text;
 *   - all 59 catalogue links pointed at `/courses/<slug>/`, which stopped
 *     existing when the course landing pages moved to `/<slug>/`;
 *   - it linked to `/roadmap/`, `/trending/`, `/projects/`, `/resume/` and four
 *     `ai-engineering-from-scratch/phases/...` pages. None of them exist;
 *   - it advertised "52+ Courses", "1,900+ Lessons", "170K+ Lines" and
 *     "700+ Problems". The measured corpus is 60 courses and 1,282 teaching
 *     chapters.
 *
 * The page is the catalogue, so it should not be able to drift again: this
 * generates it from the same two data files the React pages use
 * (`src/data/courses.ts` for names and areas, `src/data/chapter-counts.ts` for
 * measured sizes), which are themselves generated from the tree.
 *
 * Links are written site-absolute (`/machine-learning/`); Docusaurus prepends
 * baseUrl at build time and, with `onBrokenLinks: 'throw'`, fails the build if
 * one of them stops resolving.
 *
 *   node scripts/gen-course-overview.mjs           # report
 *   node scripts/gen-course-overview.mjs --write
 */
import fs from 'node:fs';
import path from 'node:path';

const WRITE = process.argv.includes('--write');
const OUT = path.join('docs', 'index.md');

/* ---------- read the two data files without a TypeScript loader ---------- */

const coursesSrc = fs.readFileSync(path.join('src', 'data', 'courses.ts'), 'utf8');
const courses = [...coursesSrc.matchAll(
  /\{\s*name:\s*'([^']+)',\s*slug:\s*'([^']+)',\s*category:\s*'([^']+)',?\s*\}/g,
)].map((m) => ({name: m[1], slug: m[2], category: m[3]}));

const countsSrc = fs.readFileSync(path.join('src', 'data', 'chapter-counts.ts'), 'utf8');
const sizes = new Map();
for (const m of countsSrc.matchAll(
  /"([^"]+)":\s*\{chapters:\s*(\d+),\s*words:\s*(\d+)\}/g,
)) {
  sizes.set(m[1], {chapters: Number(m[2]), words: Number(m[3])});
}

if (!courses.length) throw new Error('could not read courses.ts');
if (!sizes.size) throw new Error('could not read chapter-counts.ts');

const totals = courses.reduce(
  (acc, c) => {
    const s = sizes.get(c.slug) || {chapters: 0, words: 0};
    acc.chapters += s.chapters;
    acc.words += s.words;
    return acc;
  },
  {chapters: 0, words: 0},
);

const fmt = (n) => n.toLocaleString('en-US');
const words = `${(totals.words / 1e6).toFixed(1)} million words`;

/* ------------------------------ the page -------------------------------- */

const AREA_ORDER = [
  'Core',
  'AI/ML',
  'CS Core',
  'Programming',
  'DevOps',
  'Security',
  'Aptitude',
  'Placement',
  'Marketing',
  'Meta',
];

const AREA_BLURB = {
  Core: 'The placement track: backend + AI, module by module, with interview practice.',
  'AI/ML': 'Machine learning, applied AI, LLM application engineering and agents.',
  'CS Core': 'The subjects an interview and an exam both assume you know.',
  Programming: 'Languages and the frameworks built on them.',
  DevOps: 'Deployment, containers, and running things in production.',
  Security: 'Application security, information security, and distributed ledgers.',
  Aptitude: 'Quant, reasoning, verbal and the banking-specific subjects.',
  Placement: 'Mock tests, drills, question banks, and company-specific preparation.',
  Marketing: 'Digital marketing for people who ship the product themselves.',
  Meta: 'How to learn: methods, tools, and a practical system for doing it.',
};

const areaSection = (area) => {
  const items = courses.filter((c) => c.category === area);
  if (!items.length) return '';
  const rows = items
    .map((c) => {
      const s = sizes.get(c.slug);
      const count = s && s.chapters ? `${fmt(s.chapters)} chapters` : '-';
      return `| [${c.name}](/${c.slug}/) | ${count} |`;
    })
    .join('\n');
  return `### ${area}\n\n${AREA_BLURB[area] || ''}\n\n| Course | Size |\n|---|---|\n${rows}\n`;
};

const page = `---
slug: /course-overview
title: "Course Overview"
sidebar_label: "Course Overview"
sidebar_position: 1
description: "${fmt(courses.length)} courses and ${fmt(totals.chapters)} chapters on backend engineering, machine learning and LLM applications, grouped by area with the size of each course."
---

# Course Overview

${fmt(courses.length)} courses, **${fmt(totals.chapters)} chapters**, ${words}. Every
course below is written as teaching material: learning objectives, worked
examples, a summary, practical takeaways, a chapter quiz and exercises.

Sizes on this page are measured from the source tree, not typed by hand. The
same numbers drive the [course list](/courses) and the homepage.

## Where to start

- **Placement track (backend + AI):** [AI Engineering Placement](/ai-engineering-placement/) - ${fmt(sizes.get('ai-engineering-placement')?.chapters || 0)} chapters across 34 modules, from Python and SQL to RAG, agents and system design. It is the point of the site.
- **Building with LLMs:** [AI Agent Engineer](/ai-agent-engineer/) for the Laravel-backend-to-AI-agent path, then [Modern AI Engineering](/modern-ai-engineering/).
- **Interview fundamentals:** [Data Structures](/data-structures/) and [Algorithms](/algorithms/), then [System Design](/system-design/).
- **Machine learning from first principles:** [Machine Learning](/machine-learning/).
- **Government exams:** [GATE CS Preparation](/gate-cs-preparation/) and the [Government Exams](/government-exams/) hub.

## The catalogue

${AREA_ORDER.map(areaSection).join('\n')}
---

## About this site

It is a public record of what I am learning, kept in the open so the work can be
checked rather than claimed. [More about me](/about/).
`;

console.log(`courses: ${courses.length}   chapters: ${fmt(totals.chapters)}   words: ${fmt(totals.words)}`);
console.log(`areas: ${new Set(courses.map((c) => c.category)).size}`);
console.log(`page length: ${page.split('\n').length} lines`);
const missing = courses.filter((c) => !sizes.has(c.slug)).map((c) => c.slug);
if (missing.length) console.log(`courses with no measured size: ${missing.join(', ')}`);

// The repo keeps two trees: `docs/` is the raw source, where a page carries a
// description and nothing else, and `site/docs/` is the deploy tree, where the
// routing keys live. Both get this page so that a body sync between them is a
// no-op instead of silently restoring the old MkDocs catalogue.
const body = page.replace(/^---\n[\s\S]*?\n---\n/, '');
const description = (/^description:\s*(.+)$/m.exec(page) || [])[1] || '';
const sourcePage = `---\ndescription: ${description}\n---\n${body}`;

if (WRITE) {
  fs.writeFileSync(OUT, page, 'utf8');
  fs.writeFileSync(path.join('..', 'docs', 'index.md'), sourcePage, 'utf8');
  console.log(`wrote ${OUT} and ../docs/index.md`);
} else {
  console.log('report only - pass --write to replace the page');
}
