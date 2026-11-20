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

## Still open

- **29 files still contain `U+FFFD`** in contexts where the lost character is
  ambiguous — `×`, `≈`, `→`, `±`, `₹` or ` — `. Mostly
  `gate-cs-preparation/*` solved papers and `learning-how-to-learn/ch-08..10`.
  They read as `500 � 1.20` instead of `500 × 1.20`. The em-dash cases are
  already fixed; the rest need a human pass, one file at a time. Run
  `node scripts/fix-mojibake.mjs --root docs` for the current list.
  Worst: `gate-cs-preparation/02-theory-of-computation.md` (613 occurrences),
  `04-digital-logic.md` (349), `05-gate-strategy.md` (321).
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
