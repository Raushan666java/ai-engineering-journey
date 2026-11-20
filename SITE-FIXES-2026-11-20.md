# Site fixes — 20 Nov 2026

Companion to `SITE-AUDIT-2026-11-20.md`. That document is the "before" picture;
this is the record of what was changed and how each fix was verified.

---

## What was fixed

| # | Defect | Change | File |
|---|---|---|---|
| 1 | KaTeX stylesheet blocked by a fabricated SRI hash | Replaced with the computed `sha384-1vdNCNel…` hash; inline comment explains how to recompute it | `site/docusaurus.config.ts` |
| 2 | No `robots.txt` | Added, pointing crawlers at the sitemap | `site/static/robots.txt` |
| 3 | 1,419 pages with auto-derived meta descriptions | Backfilled every one, then de-duplicated 223 collisions | `site/scripts/backfill-descriptions.mjs`, `site/scripts/dedupe-descriptions.mjs` |
| 4 | Derived descriptions contained backslashes → invalid YAML | Rewrote 52 values as single-quoted scalars; all 1,419 files parse-verified with js-yaml | `site/scripts/fix-description-yaml.mjs` |
| 5 | The 34 module index pages had the worst descriptions | Hand-written, one per module, ≤160 characters | `site/scripts/set-module-descriptions.mjs` |
| 6 | Nothing on the site said who owns it | `/about` page, `author` metadata, footer links, `Hire me` navbar button | `site/src/pages/about.tsx`, `site/src/data/profile.ts` |
| 7 | No `og:image` — every shared link previewed blank | Generated a 1200×630 card and wired `themeConfig.image` | `site/static/img/social-card.png`, `site/scripts/make-social-card.ps1` |
| 8 | Homepage and `/courses` were the same 59-card grid | Homepage now: attributed hero, proof strip with real numbers, a 4-step "where to begin" path, 6 featured courses, hiring band | `site/src/pages/index.tsx` |
| 9 | Stock Docusaurus green, no brand | Brand tokens (ink / accent / tint / line) shared with the diagram set, dark-mode aware | `site/src/css/custom.css` |
| 10 | 97 chapters existed only inside the build tree | Copied `learning-course` into `docs/courses/`; the source tree is now complete | `docs/courses/learning-course/` |
| 11 | No "last updated", no "edit this page" | `showLastUpdateTime: true` plus an `editUrl` pointing at `site/docs/` | `site/docusaurus.config.ts` |
| 12 | Deployed site was four weeks behind `main` | Rebuild script + worktree deploy script | `site/scripts/deploy-gh-pages.ps1` |
| 13 | Stale, self-referential copy on the placement hub ("33 subjects, 299+ sub-chapters, 3,253+ Q&A") | Replaced with measured numbers: 34 modules, 357 chapters, 290 questions here / 4,713 site-wide | `site/scripts/content-pass.mjs` |
| 14 | Mojibake: `U+FFFD` where `—` should be | 468 em dashes restored across 5 files, outside code fences only | `site/scripts/fix-mojibake.mjs` |

---

## Verification actually run

### Live site, measured 20 Nov 2026 13:56 IST

The deploy that is live right now is the one built before the Mojibake repair and
before the KaTeX fix, so these results are the honest "before" for the next push:

| URL | Result |
|---|---|
| `/` | 200 |
| `/digital-marketing/` | **200** — the 404 is gone (13 sitemap entries) |
| `/about/` | 200 |
| `/ai-engineering-placement/` | 200 |
| `/robots.txt` | **200** — Sitemap line present |
| `/img/social-card.png` | 200, 25 KB PNG |
| `/sitemap.xml` | 200, 1,423 URLs |
| `/discrete-mathematics/01-sets/` | 200, **0 KaTeX spans** — the deployed HTML predates the `remark-math`/`rehype-katex` fix. The local build renders 1,030 |
| sitemap `lastmod` | **0 of 1,423** — same cause: the deployed build predates `showLastUpdateTime` |

`site/scripts/verify-live.ps1` reproduces this table in one command. Two probe
bugs found while running it, both fixed: the home check assigned to `$home`,
which is a read-only PowerShell automatic variable, and the KaTeX check pointed
at a chapter with no math in it at all.

### Offline checks

```
js-yaml parse of all 1,419 files under site/docs
  -> 0 YAML errors, 0 missing descriptions

description uniqueness
  -> 1,417 distinct of 1,419  (2 residual duplicates, acceptable)

route existence for the 6 featured courses and the 4 "start here" steps
  -> all 10 directories exist

digital-marketing
  -> 13 files present in site/docs/courses, entry present in courses.ts
  -> the live 404 was a stale deploy, not a missing course

internal links, earlier crawl
  -> 269 unique internal links across 45 sampled pages, 0 broken
```

---

## Build memory: why every full build exited 134

Three attempts, same wall:

| Attempt | Heap | Died at | Evidence |
|---------|------|---------|----------|
| webpack, 8 GB | `--max-old-space-size=8192` | client compile | `Ineffective mark-compacts near heap limit` |
| webpack, 10 GB | `10240` | start of static generation | 9,684 MB live, `html pages: 0`, GC unable to reclaim |
| Rspack + SWC, 8 GB | `8192` | — | completes |

The 9,684 MB was the giveaway: webpack's module graph for a 309 MB server
bundle (1,419 documents) lives in the JS heap and is still resident when static
generation begins, so V8 hit its ceiling before writing one HTML file. Moving
that graph into Rspack's Rust memory is what fixed it:

```ts
future: {
  faster: {
    swcJsLoader: true,
    swcJsMinimizer: true,
    swcHtmlMinimizer: true,
    rspackBundler: true,
    mdxCrossCompilerCache: true,
  },
},
```

`@docusaurus/faster` was already a dependency; in 3.10 the key is `future.faster`
(`future.experimental_faster` throws a rename error).

---

## Still open

- **Mojibake is now mostly repaired, and the repair is documented.** The damage
  was UTF-8 text read as CP1252, one to three layers deep. It is reversible
  except where bytes `0x81/0x8D/0x8F/0x90/0x9D` were destroyed (`U+FFFD`).
  Current state of the raw source tree (`docs/`):

  ```
  before this pass   16,515 damaged characters
  after              449 damaged characters in 13 files
  ```

  What fixed it, in order: restore each file from its newest
  `U+FFFD`-free revision (`scripts/restore-mojibake.mjs`), then a CP1252
  round-trip on runs of text (`scripts/fix-mojibake-deep.mjs`), then a
  reference table of the mojibake spelling of every character in the ranges
  this content uses (`scripts/fix-mojibake-table.mjs`), then two pinned
  hand-tables for damage that a round trip cannot express
  (`scripts/fix-mock-test-1.mjs`, `scripts/fix-learning-dashes.mjs`).

  Remaining 449 characters, none of which can be recovered from data alone:

  | File | Chars | Why it cannot be automated |
  |------|-------|----------------------------|
  | `data-analysis-interpretation/02-missing-data-caselet-di.md` | 222 | lost characters are operators (`×`, `−`, `÷`) — a blanket replacement would change the arithmetic |
  | `data-analysis-interpretation/05-mixed-data-interpretation.md` | 198 | same |
  | 11 other files | 29 | scattered single characters in prose, mostly `—` |

  The three `learning-how-to-learn/ch-08..10` chapters were destroyed at import
  (every revision in history carries the same 222 lost characters), so they
  were repaired by context: every lost character there sat where a dash belongs.

- `onBrokenLinks` and `onBrokenMarkdownLinks` are still `'warn'`. Flip to
  `'throw'` once one deploy has gone green, or a 404 will ship again.
  Note `onBrokenMarkdownLinks` is deprecated in v4 and belongs under
  `markdown.hooks`.
- The 404 page is still a dead end — no search box, no suggested links.
- No analytics and no `<lastmod>` in the sitemap, so there is still no feedback
  loop on whether any of this is read.
- Visual rendering, dark-mode contrast and mobile layout remain unverified: the
  browser engine would not start here (`browse newtab failed: Server failed to
  start within 15s`). Run `/design-review` on a machine where it launches.
- `profile.email` and `profile.linkedin` in `site/src/data/profile.ts` are empty
  strings. The About page omits them rather than shipping a broken `mailto:` or a
  404 profile link — **fill both in before sending the URL to a recruiter.**
- `site/docs` (1,419 files) is still a copy of `docs` (1,418 + module pages).
  Make the sync one-directional and documented (`docs/` → `site/docs/`, always).

---

## Second pass: what was actually blocking the deploy

The deploy had failed four times and the assumed cause was a slow link. The
real cause was a single file:

| File | Size | GitHub's limit |
|---|---|---|
| `build/search-index.json` | **284.3 MB** | 100 MB per file |

GitHub's pre-receive hook refuses the whole push, so none of the other 3,000
files ever landed. The earlier HTTP 408s were a symptom of the same upload.

### Why the index was 284 MB

`@easyops-cn/docusaurus-search-local` writes a positional array of lunr
indexes, one per document type:

| # | Type | Docs | Size |
|---|---|---|---|
| 0 | Title | 1,419 | 0.5 MB |
| 1 | Heading | 60,856 | 18.6 MB |
| 2 | Description | 1,419 | 1.4 MB |
| 3 | Keywords | 0 | 0.0 MB |
| 4 | Content | 55,345 | **261.9 MB** |

Type 4 is every word of every chapter, and this corpus is 9.5 million words.
`scripts/trim-search-index.mjs` now runs after every build and keeps Title,
Heading and Description: **284.3 MB to 20.5 MB, 93% smaller**. The search worker
in the plugin reads the array by position and resolves each result's parent page
through entry 0, so truncating to the first three keeps the types aligned. With
dozens of descriptive headings per chapter, heading search still lands on the
right section and links straight to the anchor.

This was not only a deploy problem. Every visitor who pressed Ctrl+K would have
tried to download 262 MB.

### Deploy mechanics that had to change

- `deploy-gh-pages.ps1` now fetches and hard-resets the worktree to
  `origin/gh-pages` before copying. A push rejected for a large blob leaves a
  local commit that carries the blob; pushing again offers it again and fails
  before any new content is considered.
- It also pushes in size-bounded chunks (`-ChunkBytes`, default 120 MB, or
  `-SingleCommit` to try one request).

## Second pass: design and content

### Design

- **Reading surface.** The median chapter is ~6,800 words and was still set like
  a short docs page: 16.5px/1.72 base type, 76ch measure on prose, sticky table
  headers, framed code blocks, hover-only heading anchors, a TOC that scrolls in
  its own column, visible focus rings on every control, and a print sheet with
  the navigation removed.
- **The homepage now states its measured size** (1,282 chapters, 60 courses,
  9.5M words) instead of `1,400+`, which was counting index and navigation pages.
  Generated by `scripts/gen-chapter-counts.mjs` from the tree itself.
- **The course index shows weight.** A name alone cannot distinguish a 5-chapter
  overview from a 392-chapter course, so cards carry their chapter count and
  category headers carry their course count.

### Content: chapter titles

All 17 chapters of `ai-agent-engineer/agentic-ai-book` shipped a title that was
not the chapter:

- 12 showed the **filename** in the sidebar and browser tab (`13-evaluation`);
- 5 showed the **part divider** - "Part II - Building Blocks" was the title of
  the page that is Chapter 4, Tool Calling From First Principles.

Each page now takes its name from the body's chapter heading, that heading line
is removed so the title is not printed twice, sections are promoted one level so
the TOC keeps its hierarchy, and five stray `# Part X` body H1s (a second H1 on
a page that already has one) are gone. Both trees carry the change.

### The remaining content debt, measured

`scripts/title-survey.mjs` (fence-aware: `#` inside a code block is a comment,
not a heading) reports **139 pages** with a naming or structure defect:

| Defect | Pages |
|---|---|
| no `## ` section at all | 49 |
| title is the filename | 34 |
| more than one H1 | 27 |
| no `title:` in frontmatter | 27 |
| under 300 words | 2 |

Concentrated in `learning-course` (76) and `gate-cs-preparation` (29). An earlier
count of "375 duplicate-H1 pages" from the same script was wrong - the regex was
matching Python and shell comments inside fenced blocks - which is why the survey
now strips fences before counting.

**Also measured, not yet acted on:** of 1,282 teaching chapters, 275 have no quiz
section and 188 no exercises section, against the house rule of objectives,
theory, examples, summary, takeaways, quiz and exercises. 64 chapters are under
600 words.


---

## Third pass: the defects the deploy exposed

Once the site actually deployed, the checks that had been impossible became
possible. Three of them failed, and one of those was the largest usability bug
the site had.

### Fifty-three of sixty course landing pages were 404

`docs/courses/<course>/index.md` is the course landing page. Six of those files
declare `slug: /<course>` and were published at `/<course>/`. The other
fifty-three declared no slug, so the docs plugin - which runs with
`routeBasePath: '/'` - published them at `/courses/<course>/`.

Everything that links to a course links to `/<course>/`: the navbar, the footer,
the custom 404 page, `/about`, `/courses`, and every card on the homepage. So
fifty-three course cards led to a 404, and because the footer is on every page,
the same three targets appeared as broken links site-wide.

Chapters were always fine: each declares its own slug (`slug:
/machine-learning/01-introduction`). Only the landing pages were split in two.

Fix: give the fifty-three the same explicit slug the other six always had.
One rule now holds everywhere:

    /<course>/            course landing page
    /<course>/<chapter>/  a chapter

Nothing linked to the old `/courses/<course>/` form, so nothing was orphaned.
This is also what made `onBrokenLinks: 'throw'` possible - the build can now
refuse to ship a broken tree, because there are no broken links left to ship.

### Thirty-one pages were titled by their filename

`01-general-aptitude`, `15-mock-test-1`, `ch-08-gate-theory-prep`, and two
module indexes titled with the literal string `index`. Cause: a UTF-8 BOM
written into the body by an earlier import survived a CP1252 round-trip as the
text `i>>?` sitting immediately before the heading marker:

    i>>?# General Aptitude for GATE CS

That is not a heading to the markdown parser. The page therefore had no H1, the
line rendered as a paragraph starting with a literal `#`, and Docusaurus fell
back to the filename for both the tab title and the sidebar entry. Stripping the
prefix restores the H1, which becomes the title; the heading line is then
removed, because the title already renders as the page H1.

Five of the same pages carried a mangled heading in `description:` - the string
search results and social cards display - such as `i>>?# GATE CS Mock Test 1 ->
Full-Length Practice Paper`. Those are now sentences.

### Fifty-six visual-notes pages had five H1s each

The generated `visual-notes.md` files used `#` for every section, so a revision
page rendered five H1s and a flat table of contents. The first heading is the
title (Docusaurus renders it from frontmatter), so the rest are sections and are
now `##`.

### The sitemap had no lastmod

`showLastUpdateTime: true` puts a date under each chapter. It does not reach
`sitemap.xml`: the sitemap plugin emits `<lastmod>` only from its own `lastmod`
option, which defaults to `null`. All 1,424 URLs shipped with no lastmod, so a
crawler had no reason to revisit a page that had actually changed. Now
`lastmod: 'date'`.

### Module 33 had no house sections

The house rule is objectives, theory, examples, summary, takeaways, quiz,
exercises. `33-campus-placement` had the theory - sixteen quant topics with
formula boxes, twelve reasoning types, ten verbal sections, forty speed rules -
and none of the scaffolding. Its five teaching chapters now carry all five
missing sections, with quiz answers behind a `<details>` block so the page does
not spoil itself.

Its fourteen mock papers and question banks are exempt by design: the paper is
the quiz. `scripts/rule-gaps.mjs` now recognises a drill paper by shape (30+
numbered questions plus an `Answer Key` heading) rather than counting it as
missing work. Reported placement-course gap: 21 chapters to 16, of which 15 are
drill papers.

### The homepage advertised a number it could not back up

The proof strip said "1,400+ chapters" next to honest metrics (Recall@4 0.93,
MRR 0.89, 37x cost reduction). The corpus is 1,282 teaching chapters. The strip
now reads the count from generated `chapter-counts.ts`, so the figure cannot
drift from the tree.

### The chunked deploy aborted after chunk 1

`deploy-gh-pages.ps1` runs with `$ErrorActionPreference = 'Stop'`. Git writes
its progress to stderr, PowerShell turns stderr from a native command into a
terminating `NativeCommandError`, and the script died after the first chunk even
when the push had succeeded. The push is now judged by `$LASTEXITCODE` with the
preference relaxed around it, and a chunk with nothing staged is skipped because
`git diff --cached --quiet` says it is already on the branch.

All six chunks pushed: `origin/gh-pages` = `629f086542`.

## Fourth pass: what the first green build then reported

`onBrokenLinks: 'throw'` had been switched on for the third-pass build and it
failed that build, which is the point — 59 links on `/course-overview` went
nowhere and the page had been shipping them. This pass starts from the first
build that threw and works down its list.

### Thirty-two pages published their own YAML as body text

`docs/courses/learning-course` came from a bad import. Each affected file had a
frontmatter block whose only key was `description:`, whose value was scraped from
the first line of the original file — which happened to be the YAML — and the
original block was then dumped into the article body:

```yaml
---
description: "slug: /learning-course/02_AI_Learning_Basics/Learning_Science
              title: 'Learning Science - Day 1' sidebar_label: '...'"
---

<mojibake BOM>---
slug: /learning-course/02_AI_Learning_Basics/Learning_Science
title: "Learning Science - Day 1"
sidebar_label: "Learning Science - Day 1"
sidebar_position: 5
---
# Learning Science - Day 1
```

A reader got two horizontal rules and a paragraph of YAML before the article.
The page had no real title, so the tab, the sidebar entry and the social card
fell back to a guess. Its slug and sidebar position sat in the body where
nothing reads them, so the URL came from the file path. And the description in
search results was the string `slug: /learning-course/...`.

Each page now has one frontmatter block rebuilt from the embedded one, a
description derived from the page's own goal paragraph, and a body that starts
where the article starts. The duplicate H1 goes too, since the title already
renders as the page heading. Both trees were written, because a routine body
sync from `docs/` would otherwise restore the YAML.

Scripts: `fix-embedded-frontmatter.mjs`, `embedded-frontmatter-report.mjs`.

### The catalogue page was still the Material for MkDocs one

`docs/index.md` — the sidebar's first entry, at `/course-overview` — was the
MkDocs page it started life as. Its CSS classes (`home-hero`, `hero-btn`,
`course-chaps`, `cta-row`) do not exist in this theme, so nothing was styled.
Its icon syntax (`:fontawesome-solid-brain:{ .lg .middle }`) and `grid cards`
directive are MkDocs-only and rendered as literal text. All 59 catalogue links
pointed at `/courses/<slug>/`, which stopped existing when the landing pages
moved. It linked to `/roadmap/`, `/trending/`, `/projects/`, `/resume/` and four
`ai-engineering-from-scratch/phases/...` pages, none of which exist. And it
advertised "52+ Courses", "1,900+ Lessons", "170K+ Lines" and "700+ Problems"
against a measured 60 courses and 1,282 teaching chapters.

The page is now generated from the same two data files the React pages read —
`courses.ts` for names and areas, `chapter-counts.ts` for measured sizes — and
both trees get the same body, so a sync between them is a no-op. Links are
site-absolute, and `onBrokenLinks: 'throw'` means a catalogue entry that stops
resolving fails the build instead of shipping a 404.

Script: `gen-course-overview.mjs`.

### One link, repeated 1,423 times: the `/about` anchor

The navbar's `Hire me` button, the footer's `Contact` item and the homepage's
closing call to action all point at `/about#contact`. Because the footer is on
every page, the build reported that one link as a broken anchor **1,426 times**.

The anchor was not missing — the rendered HTML has `<section id="contact">`.
Docusaurus collects anchors from markdown headings automatically; a React page
in `src/pages` has to declare its own with `useBrokenLinks().collectAnchor()`.
A target page that collected no anchors is treated as broken, so every link into
`/about` was flagged. The damage is not the noise: 1,423 false positives hide
the real ones.

`about.tsx` now registers `contact`, and the remaining four turned out to be
genuine: `learning-how-to-learn/ch-16` has a "what to do next" table linking to
`#q261`, `#q267`, `#q273` and `#q278`, but its headings slugify to
`q261-how-do-i-conduct-a-comprehensive-self-assessment` and friends. The links
now use the slugs the page actually emits, read out of the built HTML rather
than guessed.

Build 12 reports **0 broken links and 0 broken anchors**.

### A dollar sign in prose is a math delimiter

KaTeX warnings had been explained away as currency false positives. They are
not: `FOLLOW(S)={$}` in a compiler-design drill opens a math span that never
closes, so the rest of the paragraph is swallowed; `A$AP Rocky` in a
computer-vision chapter does the same. `$API_KEY`, `${VAR}`, `$?` and
`${{ secrets.X }}` behaved identically.

`escape-drill-dollars.mjs` escapes a bare dollar as `\$` — but only on pages
that contain no mathematics at all, where no `$` can be a delimiter by
definition. Pages that contain math are listed and left alone, because choosing
which dollar is a delimiter needs eyes and a wrong guess breaks a working
formula. 55 pages, 96 dollars. The pass skips code fences, indented code blocks
and inline code, because a `\$` shown verbatim in a code sample is a new bug.

Three spots needed judgement rather than the mechanical pass:
`18-debugging-code-review` and `04-lora-implementation` had dollars inside
`<code>` elements and now use backtick spans, where a `$` is unambiguous;
`03-strings` quotes the character itself and uses `&#36;`. Two files were
reverted after review — `java/58-interview-rest-api` and
`job-preparation/03-aptitude-test-preparation` keep their dollars inside
indented code blocks, where the escape would be visible to the reader.

### Two files that exist for the author were published

`ai-engineering-placement/PLAN.md` is a syllabus expansion plan and
`courses/TEMPLATE.md` is the chapter template. Both are marked `draft: true`,
which the production build skips.

### The URL space is now single-shaped

After the landing-page fix, 89 URLs were still published under `/courses/...`,
derived from the file path because those docs declared no `slug:`. Same content
reachable at two shapes is duplicate content for a crawler and an inconsistent
URL space for a reader. 1,417 of 1,419 docs now carry an explicit slug;
`route-collisions.mjs` checks that no route and no explicit id is declared twice,
and reports zero of either.

### What the fourth-pass build reports

```
build 12        exit 0, 1,422 pages, search index 20.6 MB (3 groups)
broken links    0        (onBrokenLinks: 'throw')
broken anchors  0        (was 1,426)
KaTeX warnings  5 unknownSymbol, 6 commentAtEnd   (was ~28)
```

The remaining KaTeX warnings are `\%` and currency amounts that sat next to real
math, plus one `<p>` whose dollars are inside an HTML block on a page that does
contain math. They are cosmetic: the page renders.
