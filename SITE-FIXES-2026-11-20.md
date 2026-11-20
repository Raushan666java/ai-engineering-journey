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
