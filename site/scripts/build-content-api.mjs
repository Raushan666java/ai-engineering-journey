/**
 * Build the content API the mobile app reads.
 *
 * The site is 613 MB: 446 MB of HTML, 146 MB of JS chunks, a search index. None
 * of that helps an app that renders markdown. The same 1,282 chapters are
 * **70 MB of markdown**, and a single chapter is about **55 KB**.
 *
 * Shape, and why it is two files rather than one:
 *
 *   static/content/manifest.json     every course, and every chapter's title,
 *                                    reading time and quiz - no bodies (~370 KB)
 *   static/content/ch/<id>.json      one chapter's markdown (~55 KB each)
 *
 * A per-course bundle was tried first and rejected: `ai-engineering-placement`
 * alone is 18 MB, and AsyncStorage on Android reads through a SQLite cursor
 * window of about 2 MB, so the biggest course would have failed to cache on the
 * one platform that matters. A chapter at a time fits comfortably, and the
 * Review deck can still work offline because the quiz lives in the manifest.
 *
 * Markdown is transformed only where a plain renderer would show noise:
 * Material for MkDocs admonitions (`:::tip`) become blockquotes, Mermaid fences
 * become a readable note rather than a syntax error, and links to sibling `.md`
 * files lose their href (the app cannot resolve a repo path) but keep their text.
 *
 *   node scripts/build-content-api.mjs            # report
 *   node scripts/build-content-api.mjs --write
 */
import fs from 'node:fs';
import path from 'node:path';

const WRITE = process.argv.includes('--write');
const SRC = '../docs/courses';
const OUT = 'static/content';

const NOT_A_CHAPTER = /^(index|readme|visual-notes|template)\.mdx?$/i;

function stripFrontmatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  return m ? text.slice(m[0].length) : text;
}

function titleOf(body, fallback) {
  const h1 = /^#\s+(.+)$/m.exec(body);
  if (h1) return h1[1].trim();
  const h2 = /^##\s+(.+)$/m.exec(body);
  if (h2) return h2[1].trim();
  return fallback;
}

const capitalise = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/** `:::tip Title` ... `:::` -> a blockquote, which every renderer understands. */
function convertAdmonitions(md) {
  return md
    .replace(/^:::(\w+)?[ \t]*(.*)$/gm, (_m, kind, title) => {
      const label = (kind || 'note').toLowerCase();
      const head = title && title.trim() ? capitalise(title.trim()) : capitalise(label);
      return `> **${head}**`;
    })
    .replace(/^:::\s*$/gm, '');
}

/** A Mermaid diagram is a picture; a code block of `flowchart TD` is noise. */
function flattenMermaid(md) {
  return md.replace(/```mermaid\r?\n([\s\S]*?)```/g, (_m, diagram) => {
    const kind = /^\s*(\w+)/.exec(diagram);
    return `> *Diagram (${kind ? kind[1] : 'diagram'}) - view this chapter on the website to see it drawn.*`;
  });
}

/** `[text](../other/01-foo.md)` cannot resolve in the app, so keep `text`. */
function defangRelativeLinks(md) {
  return md.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, href) =>
    /^(https?:|mailto:|#)/i.test(href) ? match : text,
  );
}

/**
 * Pull the MCQ block out of a chapter.
 *
 * The corpus has no single quiz format. Measured across the 249 chapters that
 * have one, the answer key appears in all of these shapes:
 *
 *   1. ...  / - A) ... / // correct: C
 *   **Answer: B**
 *   Correct answer: B
 *   - B) 42 <-- Correct
 *   ### Answer Key   followed by   1. C   2. B
 *
 * A positional "nth answer line goes with nth question" rule was tried first and
 * silently mismatched whenever a chapter used one of the other shapes, so the
 * key is now attached to its own question, with the answer-key table only as a
 * fallback by number. A question with no provable key gets `null`; guessing is
 * worse than admitting the key could not be read, because the app builds its
 * review deck out of exactly this field.
 */
function extractQuiz(md) {
  const lines = md.split(/\r?\n/);

  const start = lines.findIndex((line) => /^#{1,3}\s*(?:chapter\s+)?quiz\b/i.test(line));
  if (start === -1) return [];

  const level = (lines[start]?.match(/^#+/) ?? ['##'])[0].length;
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++) {
    const heading = /^(#{1,6})\s+/.exec(lines[i] ?? '');
    if (heading && (heading[1] ?? '').length <= level) {
      end = i;
      break;
    }
  }

  const block = lines.slice(start + 1, end).join('\n');

  /** `1. C` style key list, used only when a question carries no key itself. */
  const keyByNumber = new Map();
  for (const line of block.split(/\r?\n/)) {
    const row = /^\s*(?:[-*]\s*)?\*{0,2}(\d{1,2})[.)]\s*(?:→|:|=|-)?\s*\*{0,2}([A-D])\b\s*$/.exec(line);
    if (row) {
      keyByNumber.set(Number(row[1]), row[2].toUpperCase());
      continue;
    }
    // `Answers: 1-B, 2-C, 3-A` on one line.
    if (/\banswers?\b/i.test(line)) {
      for (const pair of line.matchAll(/\b(\d{1,2})\s*[-–:.)=]\s*([A-D])\b/g)) {
        keyByNumber.set(Number(pair[1]), pair[2].toUpperCase());
      }
    }
  }

  const markers = [...block.matchAll(/^(?:\*\*(?:Q\d+[.)]?|\d+[.)])\*\*|(?:Q\d+[.)]|\d+[.)]))\s*/gim)];
  const questions = [];

  for (let i = 0; i < markers.length; i++) {
    const marker = markers[i];
    if (marker.index == null) continue;
    const from = marker.index + marker[0].length;
    const next = markers[i + 1];
    const chunk = block.slice(from, next?.index ?? block.length).trim();
    if (!chunk) continue;

    const numberMatch = /(?:Q)?(\d+)/i.exec(marker[0]);
    const number = numberMatch ? Number(numberMatch[1]) : null;

    let key = null;
    let stem = '';
    let afterAnswerSummary = false;
    const options = [];

    for (const raw of chunk.split(/\r?\n/)) {
      const line = raw.trim();
      if (!line) continue;

      // `<details><summary>Answer</summary>` then `**B) ...explanation...` is the
      // shape used by the java and gate chapters.
      if (/<summary>\s*(?:correct\s+)?answer/i.test(line)) {
        afterAnswerSummary = true;
        continue;
      }
      if (/^<\/?(?:details|summary)\b/i.test(line)) continue;

      if (afterAnswerSummary) {
        const bold = /^\*{2}([A-D])[).:]/i.exec(line);
        if (bold) {
          key = (key ?? bold[1] ?? '').toUpperCase() || null;
          afterAnswerSummary = false;
          continue;
        }
        afterAnswerSummary = false;
      }

      // Key lines next: `// correct: C`, `Answer: B`, `Correct answer: C`.
      const keyed = /^(?:\/\/|<!--|\*{0,2})?\s*(?:correct(?:\s+answer)?|answer(?:\s+key)?)\s*[:=]?\s*\*{0,2}\s*([A-D])\b/i.exec(line);
      if (keyed) {
        key = (key ?? keyed[1] ?? '').toUpperCase() || null;
        continue;
      }

      const opt = /^\s*(?:[-*]\s*)?\*{0,2}([A-D])[).:]\s*\*{0,2}\s*(.+?)\s*$/.exec(line);
      if (opt) {
        let text = opt[2].replace(/\*{2}/g, '').trim();
        // `<-- Correct` / `(correct)` / `✅` sit inside the option text.
        if (/<--\s*correct|\(correct\)|✅|✔/i.test(text)) {
          key = key ?? (opt[1] ?? '').toUpperCase();
          text = text.replace(/<--\s*correct|\(correct\)|✅|✔/gi, '').trim();
        }
        options.push(`${(opt[1] ?? '').toUpperCase()}) ${text}`);
        continue;
      }

      if (!stem) stem = line.replace(/\*{2}/g, '').trim();
    }

    if (!key && number != null) key = keyByNumber.get(number) ?? null;
    if (!stem || stem.length < 8) continue;
    if (options.length < 2) continue;

    questions.push({q: stem, options: options.slice(0, 4), answer: key ?? null});
  }

  return questions;
}

/** Chapter bodies carry HTML entities that React Native renders literally. */
function decodeEntities(md) {
  return md
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');
}

function convert(md) {
  let out = md;
  out = flattenMermaid(out);
  out = convertAdmonitions(out);
  out = defangRelativeLinks(out);
  out = decodeEntities(out);
  // The app renders the chapter title as its header, so a body H1 is a duplicate.
  out = out.replace(/^#\s+.+\r?\n+/, '');
  return out.trim();
}

const courses = [];
let chapterCount = 0;
let bytes = 0;
let quizChapters = 0;
let quizQuestions = 0;
const sizes = [];

/**
 * Search index: term -> chapter numbers, in manifest order.
 *
 * The site's own index is 20 MB because it stores page content. This one stores
 * only which chapters contain a word, which is what a phone needs: the chapter
 * body is then fetched (or already cached) when a result is opened. Terms are
 * kept per chapter by frequency, capped at 80, because a chapter that says
 * "model" forty times does not need forty postings.
 */
const STOP = new Set(
  ('a an and are as at be been being but by can could did do does for from had has have he her his how i if in into is it its ' +
    'may me might more most must my no nor not of on one only or other our out over same she should so some such than that the ' +
    'their them then there these they this those through to too under until up use used using very was we were what when where ' +
    'which while who why will with within would you your also any each just like man many now see two way well')
    .split(' '),
);

function termsOf(text, title) {
  const freq = new Map();
  const tokens = (s) =>
    s
      .toLowerCase()
      .replace(/`[^`]*`/g, ' ')
      .split(/[^a-z0-9+#.]+/)
      .map((w) => w.replace(/^\.+|\.+$/g, ''))
      .filter((w) => w.length >= 3 && w.length <= 40 && !STOP.has(w) && !/^[\d.]+$/.test(w));

  for (const token of tokens(title)) freq.set(token, (freq.get(token) ?? 0) + 6);
  for (const token of tokens(text)) freq.set(token, (freq.get(token) ?? 0) + 1);

  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 80)
    .map(([term]) => term);
}

fs.mkdirSync(path.join(OUT, 'ch'), {recursive: true});

for (const entry of fs.readdirSync(SRC, {withFileTypes: true})) {
  if (!entry.isDirectory()) continue;
  const courseId = entry.name;
  const dir = path.join(SRC, courseId);

  const files = [];
  const walk = (d) => {
    for (const e of fs.readdirSync(d, {withFileTypes: true})) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) walk(full);
      else if (/\.mdx?$/.test(e.name) && !NOT_A_CHAPTER.test(e.name)) files.push(full);
    }
  };
  walk(dir);
  if (!files.length) continue;

  const chapters = [];
  for (const file of files.sort()) {
    const raw = fs.readFileSync(file, 'utf8');
    const body = stripFrontmatter(raw);
    if (!body.trim()) continue;

    const rel = file.split(path.sep).join('/').replace(`${SRC}/${courseId}/`, '');
    // A slash cannot appear in a filename, so `--` keeps the id readable and
    // unique across nested course folders.
    const slug = rel.replace(/\.mdx?$/, '').replace(/\//g, '--');
    const id = `${courseId}--${slug}`;
    const words = (body.match(/\S+/g) || []).length;
    const quiz = extractQuiz(body);

    if (quiz.length) {
      quizChapters++;
      quizQuestions += quiz.length;
    }

    const markdown = convert(body);
    const payload = JSON.stringify({id, title: titleOf(body, slug), markdown});
    const size = Buffer.byteLength(payload, 'utf8');
    bytes += size;
    sizes.push(size);

    if (WRITE) fs.writeFileSync(path.join(OUT, 'ch', `${id}.json`), payload);

    chapters.push({
      id,
      path: rel,
      title: titleOf(body, slug),
      // 200 words a minute is a slow, careful read; these chapters are dense.
      minutes: Math.max(1, Math.round(words / 200)),
      words,
      quiz,
      // Not serialized with the chapter: only the search build reads it.
      terms: termsOf(markdown, titleOf(body, slug)),
    });
    chapterCount++;
  }

  if (!chapters.length) continue;

  courses.push({
    id: courseId,
    title: courseId
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' '),
    chapters,
  });
}

// Chapter numbers follow the manifest order, so the app can look a result up
// without a second table. Build the postings after the sort, then drop the
// per-chapter terms so they are not shipped twice.
const sorted = courses.sort((a, b) => b.chapters.length - a.chapters.length);
const postings = new Map();
let flat = 0;
for (const course of sorted) {
  for (const chapter of course.chapters) {
    for (const term of chapter.terms) {
      const list = postings.get(term);
      if (list) list.push(flat);
      else postings.set(term, [flat]);
    }
    flat++;
  }
}

const search = {
  version: 1,
  chapters: flat,
  // Sorted, so the app can binary-search a prefix instead of scanning 40k keys.
  terms: [...postings.entries()].sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0)),
};

const manifest = {
  version: 1,
  generated: new Date().toISOString().slice(0, 10),
  source: 'https://raushan666java.github.io/ai-engineering-journey/',
  chapterBase: 'ch/',
  courses: sorted.map((course) => ({
    ...course,
    chapters: course.chapters.map(({terms, ...rest}) => rest),
  })),
};

const manifestJson = JSON.stringify(manifest);
const searchJson = JSON.stringify(search);
if (WRITE) {
  fs.writeFileSync(path.join(OUT, 'manifest.json'), manifestJson);
  fs.writeFileSync(path.join(OUT, 'search.json'), searchJson);
}

sizes.sort((a, b) => a - b);
const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

console.log(`courses:   ${courses.length}`);
console.log(`chapters:  ${chapterCount}`);
console.log(`words:     ${courses.reduce((n, c) => n + c.chapters.reduce((m, x) => m + x.words, 0), 0).toLocaleString()}`);
console.log(`manifest:  ${kb(Buffer.byteLength(manifestJson))}`);
console.log(`search:    ${kb(Buffer.byteLength(searchJson))}, ${postings.size.toLocaleString()} terms`);
console.log(`chapters:  ${(bytes / 1048576).toFixed(1)} MB total, median ${kb(sizes[Math.floor(sizes.length / 2)] ?? 0)}, max ${kb(sizes[sizes.length - 1] ?? 0)}`);
console.log(`with quiz: ${quizChapters} chapters, ${quizQuestions} questions`);
console.log(`mode:      ${WRITE ? 'WRITE' : 'report'}`);
