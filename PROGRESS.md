# Progress Log — AI Engineering Journey

## Session 2026-10-14: Generator-Artifact Sweep + Site Deploy

Triggered by uncommitted WIP (`scripts/desplice_title.py`, `scripts/quality_sample.py`) that
measured a defect the structural quality score scored at 9.9/10 and never flagged.

### Phase A — De-splicing (206 chapters)
- [x] Removed **2,156** generator-spliced chapter titles across **206** chapters
- [x] Found and fixed two broken rules that dropped their head noun:
      "an implementation of X run faster" → "an this technique run faster";
      "a system that relies on X" → "a systems using this technique"
- [x] Added a grammar regression gate (delta-based, so pre-existing phrasing is not flagged)
- [x] Made `--apply` two-phase: every file rewritten and validated before anything is written

### Phase B — Integrity sweep (2,397 files)
- [x] `scripts/integrity_audit.py`: broken links, broken images, nav coverage, site drift
- [x] Fixed 2 broken skill links in `ai-engineering-from-scratch/README.md` (`.claude/skills/` → `skills/`)
- [x] Result: **0 broken images, 0 site drift**, 1 upstream dangling ref reported not fixed
- [x] Reported `BACKERS.md` (referenced by vendored upstream `SPONSORS.md`) rather than
      inventing a backers list for another maintainer's sponsorship program

### Phase C — Mojibake repair (35 chapters)
- [x] Found **5,643** damaged sequences; UTF-8 had been round-tripped through cp1252
- [x] Repaired the **2 provable** sequences: `×` (1,174) and em-dash (652) = **3,053** replacements
- [x] Left bare U+FFFD alone — it is an em-dash in some files and a lost superscript digit in
      others, and a wrong guess would silently corrupt a worked exam answer
- [x] `MOJIBAKE_AUDIT.md` records the remaining **3,584** occurrences with context per sequence
- [x] Verified 30/30 files: diff contains exactly and only the intended replacements

### Phase D — Site sync + deploy
- [x] Discovered `site/docs/` was **stale**: 1,303 of 1,307 pages carried an older body
- [x] Wrote `scripts/sync_site.py` (splice body only; preserve Docusaurus frontmatter byte-for-byte)
- [x] Built Docusaurus with heap 8192 + `--no-minify`; pushed `site/build/` to `gh-pages`

### Phase E — Proportionate site-wide math fix
- [x] `scripts/math_audit.py`: found the real cause behind the KaTeX warnings
- [x] Root cause: `remark-math` + `rehype-katex` are enabled, so every `$...$` span is
      KaTeX. Currency like `$0.10-$0.50` opened a maths span at the first `$` and closed it
      at the second, and KaTeX rendered the price range as broken maths
- [x] Escaped **2,044** currency `$` across **312** files; only `$` before a digit is escaped,
      so real expressions (`$x^2 + y$`) are untouched
- [x] 214 lines mixing a price with a genuine expression (`O($b^d$)`, `$10^{16}$`) listed for
      manual review instead of being rewritten blind

### Two sync scripts — pick deliberately
| Script | Scope | Frontmatter |
|--------|-------|-------------|
| `scripts/sync-site.ps1` | `ai-engineering-placement` only | **regenerates** it (title from H1, sequential `sidebar_position`), strips BOM |
| `scripts/sync_site.py` | **all** courses | **preserves** it byte-for-byte, hash-compares, idempotent |

Both are live. Running the `.ps1` after the `.py` will renumber `sidebar_position`; running the
`.py` after the `.ps1` leaves the renumbered values alone. Neither was changed in this session.

### Known repo-hygiene issue (pre-existing, not introduced here)
- `core.autocrlf=true` is set globally while `.gitattributes` mandates `eol=lf`. The 9 GATE
  chapters that are committed with CRLF therefore show as permanently modified. Clearing the
  global setting, or re-committing those 9 files with LF, resolves it.

---

## Session 2026-07-07: Deepening Sweep

### Phase A — Branding Fix
- [x] Standardized site_name to "AI Engineering Journey — Raushan Kumar"
- [x] Updated README.md with accurate course catalog (34 courses, 550+ chapters)
- [x] Added Government Exams (21 subjects), AI Agent Engineer to curriculum
- [x] Updated badges (chapters: 550+, courses: 34, lines: 85K+)
- [x] Added AI Automation Engineer + Government IT Officer specialization tracks

### Phase B — Stub Audit
- [x] Scanned all 732 markdown files in `docs/`
- [x] Fixed 4 thin index/contact pages
- [x] Generated STUB_AUDIT.md — **zero stubs remaining**
- [x] Site clean: no TODO/Coming Soon/placeholder content anywhere

### Phase C — Deepening Sweep (GFG/TutorialsPoint Style)
- [x] **Data Structures (18 ch)** — Deepened all 18 chapters with TypeScript, MCQs, diagrams. Total added: +2,707 lines. 3 under-target chapters boosted (+239, +186, +146)
- [x] **Operating Systems (18 ch)** — Deepened all 18 chapters (ch01-09: +2,380, ch10-18: +1,513 = +3,893 total). Added TypeScript simulators (CFS, RAID, journaling FS, DMA vs interrupt, nested page walk, etc.)
- [x] **DBMS (19 ch)** — Deepened all 19 chapters with TypeScript, Mermaid, MCQs, exercises. Total added: +4,414 lines
- [x] **Java Interview (8 sub-chapters)** — Deepened 59-interview-databases (a-d) and 60-interview-microservices (a-d). Total added: +2,107 lines. Added 18 new Q&As, 8 TypeScript simulators, 8 Mermaid diagrams, 40+ MCQs
- [x] **C Programming (18 ch)** — Skipped (all chapters already 1,709-3,238 lines, 4-8x over minimum)

### Phase D — Build Verification
- [x] `mkdocs build` — Clean build, only expected warning about external project not in nav

### Status: COMPLETE
All targeted courses deepened with GFG/TutorialsPoint-quality content. Total lines added this session: **~13,121 lines** across 63 files.
