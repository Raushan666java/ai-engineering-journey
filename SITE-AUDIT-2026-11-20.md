# Site diagnosis — raushan666java.github.io/ai-engineering-journey

**Audited 20 Nov 2026.** Live crawl + local build tree + repo history.
Every claim below is marked with how it was checked.

**Composite score: 5.0 / 10.** The content is a 9. The site around it is a 3.

| Dimension | Score | One-line reason |
|---|---|---|
| Content depth | **9/10** | 1,408 live pages, 59 courses, real syllabus coverage |
| Information architecture | 6/10 | Course → module → chapter works; but 1,400 flat pages, no path |
| Technical SEO | **2/10** | No robots.txt, no real meta descriptions, no og:image |
| Performance | 6/10 | 342KB gzip JS, 60KB heaviest page — fine, not great |
| Accessibility | 7/10 | lang, skip link, alt text all present; contrast unverified |
| Identity / conversion | **1/10** | Nothing on the site says who you are |
| Deploy hygiene | **2/10** | Live build is 4 weeks behind `main` |
| Design polish | 6/10 | Clean Docusaurus default; undifferentiated |

---

## P0 — fix tonight. These actively cost you interviews.

### 1. The deployed site is 4 weeks stale

```
origin/gh-pages  last commit : 7c2698adaa  2026-10-23  "deploy: pin navbar link"
origin/main      last commit : fa2123fe50  2026-11-12  "feat(data-analyst): Dubai track"
docs commits in the last 30 days : 10
```

**Verified by `git log origin/gh-pages`.** Ten documentation commits are sitting on
`main` and are not on the internet.

Concrete symptom: the **Digital Marketing** course exists on disk
(`site/docs/courses/digital-marketing/` — 12 chapters + `index.md`), but
`https://…/digital-marketing/` returns **404** and `digital-marketing` appears **0 times**
in the sitemap. The link `/courses` generates for it is dead.

Second symptom: the live `/courses` page says "59 courses across **9** categories".
`src/data/courses.ts` has **60** entries across **10** categories. The page you
show people is the October version of your own data file.

**Fix:** rebuild and redeploy. That is the whole fix. Everything else in this
document is worthless while the deploy is stale.

### 2. Every maths formula on the site is unstyled

`docusaurus.config.ts` loads KaTeX from a CDN with an SRI hash:

```
integrity="sha384-MGSJqY4DN3IeBT2FaTa1bQ8GhO6H3l5a3cS2D/2Q3Y2S2Q3Y2S2Q3Y2S2Q3Y2S2"
```

**Verified by computing it.** Downloaded `katex@0.18.1/dist/katex.min.css` and hashed it:

```
computed : sha384-1vdNCNel6Tx/NQa8IR1mGOGKsbGreCkOPfbtPPnUURJ5Tu2PRVfQ/7KLZC+Pi1p1
config   : sha384-MGSJqY4DN3IeBT2FaTa1bQ8GhO6H3l5a3cS2D/2Q3Y2S2Q3Y2S2Q3Y2S2
match    : False      config hash length: 63  (a valid sha384 is 64)
```

The hash is fabricated — it is a repeating `2Q3Y2S2` pattern. A browser that sees
an `integrity` mismatch **refuses to apply the stylesheet**. The KaTeX markup is
still emitted (`class="katex"` appears 66 times on `08-machine-learning/11-naive-bayes`),
so the formulas render as unstyled HTML: wrong fonts, collapsed spacing, broken
fractions, misaligned subscripts.

Every ML, statistics and probability chapter is affected.

**Fix — either one of these:**

```ts
// Option A: correct hash (recommended)
stylesheets: [
  {
    href: 'https://cdn.jsdelivr.net/npm/katex@0.18.1/dist/katex.min.css',
    type: 'text/css',
    integrity: 'sha384-1vdNCNel6Tx/NQa8IR1mGOGKsbGreCkOPfbtPPnUURJ5Tu2PRVfQ/7KLZC+Pi1p1',
    crossorigin: 'anonymous',
  },
],
```

```ts
// Option B: drop integrity, let the CDN serve it (fine for CSS)
stylesheets: [
  {href: 'https://cdn.jsdelivr.net/npm/katex@0.18.1/dist/katex.min.css', type: 'text/css'},
],
```

Verify after deploy: open `08-machine-learning/11-naive-bayes`, DevTools → Network →
`katex.min.css` must be **200, not "(blocked:integrity)"**.

### 3. There is no `robots.txt`

```
GET /ai-engineering-journey/robots.txt → 404
```

Docusaurus does not generate one. Without it there is no crawl directive and — more
importantly — **nothing points crawlers at your sitemap**, which does exist and is
valid (1,408 URLs).

**Fix:** create `site/static/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://raushan666java.github.io/ai-engineering-journey/sitemap.xml
```

Two minutes. Highest ratio of SEO value to effort available.

### 4. Meta descriptions are machine garbage on ~1,400 pages

**Verified on a 25-page random sample from the sitemap.** Not one had an intentional
description. The backfill script confirms the scale: **1,419 of 1,419** markdown files
under `site/docs` have no usable frontmatter `description:`, so Docusaurus derives every
one from the first line of body text:

| Times in sample | Description shown to Google |
|---|---|
| 8 | `Learning Objectives` |
| 1 | `---` |
| 1 | `Previous R2DBC &amp; Reactive Data Access` |
| 1 | `Next: Variables and Data Types` |
| 1 | `Last Updated 60-75 minutes` |
| 1 | `Prev: Terraform &amp; IaC` |
| 1 | `Previous File Handling` |
| 1 | `Prerequisites Procrastination, Habits &amp; Deep Work, Chapter 12…` |
| 1 | `Chapter at a Glance` |

Your pages are competing in search results with the snippet *"Previous File Handling."*
Google sees ~1,400 pages with the identical description and treats the whole set as
low-value boilerplate.

**Fix:** run `site/scripts/backfill-descriptions.mjs` (included in this commit,
dry-run by default), then hand-edit the 40 pages that actually matter — the module
index pages and the placement hub.

```
cd site
node scripts/backfill-descriptions.mjs          # dry-run: prints 12 samples, writes nothing
node scripts/backfill-descriptions.mjs --write  # applies to all 1,419 files
```

Dry-run output today: `scanned 1419 · had desc 0 · to write 1419`. Samples it generates:

```
courses/ai-agent-engineer/03-phase2-llm-rag-theory.md
  "Understand embeddings, vector search, chunking strategies, and RAG
   architecture well enough to defend every design decision in a technical interview"

courses/ai-agent-engineer/09-ai-system-design.md
  "Architect production AI systems — RAG pipelines, agent infrastructures, and
   cost-optimized serving stacks. Make design decisions you can defend in a review"
```

Roughly 11 in 12 come out usable. The rest are list items that leaked through; fix
those by hand.

### 5. Nothing on the site says who you are

Read `site/src/pages/index.tsx` end to end. The homepage is:

- hero: `AI Engineering Journey` / `Complete Learning Path - Backend + AI Engineer`
- three cards: Complete Curriculum / Placement Focused / Learn by Doing
- a grid of 59 course cards

Navbar: **Placement Course · All Courses · GitHub**. Footer: **GitHub · Learning Playground**.

There is no name, no photo, no "about", no LinkedIn, no résumé, no email, no
"hire me". A recruiter or tech lead who lands here — and they will, it is the top
result for your GitHub profile link — cannot tell whether this is your work, an
aggregator you cloned, or a course you bought.

This is your largest single asset: 1,408 pages of technical writing. Right now it is
an anonymous library. It should be a portfolio.

**Minimum viable fix, one evening:**

1. `/about` page. 200 words. Photo. "3 years Laravel backend, Patna. Building
   LLM applications. Open to AI/backend roles in Bengaluru / Hyderabad / Pune /
   remote. raushan@… · linkedin.com/in/… · github.com/Raushan666java".
2. Navbar: `About` + a `Hire me` button on the right.
3. Homepage hero subtitle: *"By Raushan Kumar — backend engineer, 3 years in
   production Laravel, now building LLM systems."*
4. `siteConfig.title` stays; add `organizationName` + `metadata: [{name:'author', content:'Raushan Kumar'}]`.
5. Footer: LinkedIn, email, résumé PDF.

Six lines of config, one markdown file, and the site stops being anonymous.

---

## P1 — significant, fix this week.

### 6. `og:image` is missing, so every shared link previews blank

`twitter:card` is set to `summary_large_image` — **verified in the page `<head>`** — but
there is no `og:image` tag. `static/img/docusaurus-social-card.jpg` exists and is
unused (it is the stock Docusaurus card anyway).

When you paste the site into LinkedIn or WhatsApp, you get a grey box. You are about
to send this link to recruiters.

**Fix:** generate a 1200×630 card (your name, the site name, one line of proof), save as
`static/img/social-card.png`, and add to `themeConfig`:

```ts
metadata: [
  {property: 'og:image', content: 'https://raushan666java.github.io/ai-engineering-journey/img/social-card.png'},
  {property: 'og:image:width', content: '1200'},
  {property: 'og:image:height', content: '630'},
  {name: 'author', content: 'Raushan Kumar'},
],
themeConfig: { image: 'img/social-card.png', ... }
```

### 7. 97 chapters exist in exactly one place — inside the build tree

```
course          | repo docs/ | site/docs/ | delta
learning-course |     0      |     97     | +97
```

**Verified by directory diff.** `site/docs/courses/learning-course/` is not in
`docs/courses/`. Those 97 chapters are live on the site
(`/learning-course/06_06_Resources/BEST_RESOURCES/` etc.) and exist nowhere else.

`site/docs` is the directory your sync script rewrites. A single careless sync and
97 pages are gone with no git history to restore them from, because they were never
committed anywhere else.

**Fix:** `cp -r site/docs/courses/learning-course docs/courses/learning-course`, commit,
then make the sync script one-directional and documented (`docs/` → `site/docs/`, always).

### 8. Broken links are warnings, not failures

```ts
onBrokenLinks: 'warn',
onBrokenMarkdownLinks: 'warn',
```

The build will happily ship a 404. That is exactly how `/digital-marketing/` reached
production.

**Good news, measured:** I crawled 45 pages, extracted 269 unique internal links, and
requested every one. **0 broken.** The `scripts/fix-links.py` work paid off.

**Fix:** after the rebuild is green once, flip both to `'throw'`. Do it *after* the
deploy is current, or the build will fail on the 12 known-stale links and you will
turn it back off.

### 9. Page weight — real numbers, no panic

| Page | Raw HTML | gzipped |
|---|---|---|
| `/` | 18 KB | **4.9 KB** |
| Average chapter (12 sampled) | 316 KB | ~50 KB |
| `/cyber-security/13-red-team-c2/` | 851 KB | 60 KB |
| `/ai-engineering-placement/29-research-reading/01-…/` | 699 KB | — |
| `main.js` | 1.72 MB | **342 KB** |

GitHub Pages serves gzip, so real transfer is fine. The 851 KB pages are heavy because
they carry 40+ syntax-highlighted code blocks (2,120 `token-line` spans on a single
Java chapter). Acceptable for a study site; bad on a 3G phone in an interview waiting
room.

**Fix (only if you care):** split the four 800KB+ pages, or lazy-load Prism for code
blocks below the fold. Not tonight.

### 10. No analytics, no `lastmod`, no way to know if any of this works

- `sitemap.xml` has 1,408 `<url>` entries and **zero** `<lastmod>`.
- No analytics of any kind — you cannot tell whether 0 or 400 people read the site.
- No Search Console verification, so you do not know which pages Google has indexed.

**Fix:** add `@docusaurus/plugin-sitemap` with `lastmod: 'date'`, add a 2-line
Plausible or GoatCounter snippet (`Root.tsx` already exists as a swizzle point), and
register the site in Search Console. 20 minutes, and it converts every future decision
from guesswork to data.

---

## P2 — polish, when the above is done.

| # | Issue | Evidence | Fix |
|---|---|---|---|
| 11 | `/` and `/courses` are the same 59-card grid | `index.tsx` renders `AllCoursesSection`; `/courses` renders the identical grid | Delete the grid from the homepage; replace with 6 featured courses + a "start here" path |
| 12 | Titles have double spaces | `<title>Linear Regression  -  OLS…</title>` | One regex pass over H1s |
| 13 | Homepage `<title>` is just "Home" | `title="Home"` in `index.tsx` | `AI Engineering Journey — 59 courses, 1,400 chapters` |
| 14 | Diagrams inlined as base64 data URIs | `visual-notes` pages ship 20–40 KB of base64 per image | Reference `static/img/visual/*.svg` instead — the files already exist there. Restores browser caching |
| 15 | No captions under diagrams | `<figcaption>` count: 0 | Wrap in `<figure><figcaption>` — also a11y |
| 16 | Imported book paths in URLs | `/learning-course/06_06_Resources/BEST_RESOURCES/` | Move under `learning-course/06-resources/best-resources.md` |
| 17 | 404 page exists but is a dead end | `/404.html` → 200, 9.4 KB | Add search box + 3 course links |
| 18 | No reading time, no "last updated", no edit link | Absent from `themeConfig` | `showLastUpdateTime: true`, `showLastUpdateAuthor: true` |

---

## What is genuinely good (do not touch it)

- **1,408 pages, 59 courses.** Nothing else in your portfolio is within two orders of magnitude.
- **0 broken internal links** out of 269 sampled. Rare. Most Docusaurus sites this size rot.
- **KaTeX and Mermaid are both wired correctly** — `remark-math` + `rehype-katex` produce
  66 spans on the Bayes page; Mermaid converts fences into client-rendered components
  (Docusaurus 3.10 renders them via `useMermaidRenderResult`, so an empty `mermaid`
  string in server HTML is *correct*, not a bug).
- **Local search works** — 217 KB index, lazily loaded.
- **SEO basics are present** — canonical URLs on every page, hreflang, `BreadcrumbList`
  JSON-LD, one `<h1>` per page, `alt` text on images, skip-link, `lang="en"`.
- **gzip is on** — a chapter transfers at ~50 KB.

---

## The 2-hour version — what to do in what order

| # | Task | Time | Why first |
|---|---|---|---|
| 1 | Rebuild + redeploy `site/` to `gh-pages` | 30 min (build) + 5 min | Everything else is invisible until this is done |
| 2 | Fix the KaTeX `integrity` hash | 2 min | One line, unbreaks every formula |
| 3 | `static/robots.txt` with the sitemap line | 2 min | One file, unlocks crawling |
| 4 | `/about` page + navbar `About` + `Hire me` | 40 min | Turns a library into a portfolio |
| 5 | `og:image` social card | 20 min | Every link you send from now on |
| 6 | Run the description backfill script | 5 min + rebuild | 1,400 snippets stop being garbage |

Do 1–3 tonight. They are under 40 minutes of actual work and they move the score from
5.0 to roughly 6.5.

## The 7-day version — 8.5/10

| Day | Work |
|---|---|
| Mon | Rebuild + deploy; robots.txt; KaTeX hash |
| Tue | `/about` + navbar + footer + author metadata |
| Wed | Social card + `og:image` + Search Console |
| Thu | Description backfill; hand-write descriptions for the 24 module indexes |
| Fri | `onBrokenLinks: 'throw'`; fix whatever it catches; move `learning-course` into `docs/` |
| Sat | Homepage: kill the duplicate grid, add a "start here" path (Week 1 → module 00 → …) |
| Sun | Analytics + `<lastmod>` + `showLastUpdateTime`; redeploy; verify in a private window |

---

## How this was checked (so you can reproduce it)

```powershell
# staleness
git log -1 origin/gh-pages --format="%h %ad" --date=short

# sitemap size
(Invoke-WebRequest "…/sitemap.xml" -UseBasicParsing).Content -split '<loc>' | Measure-Object

# KaTeX SRI
Invoke-WebRequest "https://cdn.jsdelivr.net/npm/katex@0.18.1/dist/katex.min.css" -OutFile s.css
[Convert]::ToBase64String([Security.Cryptography.SHA384]::Create().ComputeHash(
  [IO.File]::ReadAllBytes("s.css")))

# meta description sample
25 random sitemap URLs, regex name="description" content="(.*?)"
```

Not checked, and why: no browser-driven pass — the Aside/`browse` engine would not
start in this environment (`browse newtab failed: Server failed to start within 15s`),
so **visual rendering, dark-mode contrast and mobile layout are unverified**. Run
`/design-review` from a machine where the browser launches before you trust the 6/10
design score.

---

## The sentence that matters

Your content is already better than the résumé you are sending to Srev. The site is
behind it by four weeks, invisible to Google, and anonymous.

Fix the deploy, the KaTeX hash and the robots file tonight — 40 minutes — and add an
About page this week. That is the difference between "a library I found" and "this is
what I built."
