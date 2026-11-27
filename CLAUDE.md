## Goal
- Maintain and improve software engineering course materials at `docs/courses/`
- Build `learning-playground` repo into a complete placement preparation system

## Constraints & Preferences
- TypeScript only, no Python (for course chapters)
- Minimum 400+ lines per chapter
- Format: Learning Objectives, Theory, Examples, Summary, Practical Takeaways, Chapter Quiz (5 MCQ), Exercises
- Mermaid diagrams for architecture and process flows

## Anchored Summary

### Objective
Turn the learning-playground repo into a complete, self-contained placement preparation system covering all 24 modules with practice code, interview Q&A, learning methods, and progress tracking

### Important Details
- Placement course at `C:\xampp\htdocs\ai-engineering-journey\docs\courses\ai-engineering-placement\` has 24 modules (00–23), 224 chapters of theory
- Module 22 (Advanced AI Agents): 10 lessons created, each 400+ lines
- Module 23 (Trending AI/ML Platforms): 4 lessons created (2,038 total lines) — DeepSeek, Gemini, Mistral, Together/Groq, OpenClaw, Hermes, Paperclip, Dify, CrewAI, AutoGen, Claude Code, Codex CLI, n8n, Activepieces, Vercel AI SDK, Hugging Face, Ollama, vLLM, Unsloth
- learning-playground repo (`C:\xampp\htdocs\learning-playground`) is the practice companion repo

### learning-playground layout
| Area | Path | Contents |
|------|------|----------|
| Placement Hub | `placement/` | 24 modules × (README.md + practice/ + interview/) |
| Learning Methods | `learning-methods/` | 13 tools (OODA, active recall, SM-2, Pomodoro 2.0, SQ3R, Feynman, 3-pass DSA, spiral, deep work log, sprint planner, energy scheduler, dashboard) |
| Tracker | `tracker/` | Daily log template, progress tracker (224 ch checkboxes), weekly review, stats.ps1 |
| Journals | `journals/` | Daily journal entries |
| Languages | `languages/python/basic.py` | Python starter |
| Docs | `ROADMAP.md`, `STRUCTURE.md` | 18-week plan, full module cross-reference |

### Visual gallery (diagram-design skill) — COMPLETE
- Every module 00–33 has `visual/` (one HTML + one SVG diagram each) + a `visual/visual-notes.md` revision page, synced to `site/`.
- Generated with `C:\Users\hiii\AppData\Local\Temp\opencode\gen_diagrams.py` (brand tokens: ink `#1a1b23`, ink-soft `#4a4b52`, accent `#4446e8`, tint `#eef0ff`, line `#d0d2e6`, muted `#6a6b78`, faint `#9a9ba6`; fonts Inter + JetBrains Mono). Re-run to regenerate all 34; all pass `diagram-design/scripts/self_check.py`.
- Site sync: `prep-visual-site-all.ps1` (copies visual/ + creates site visual-notes.md) then `sync-site.ps1` (writes frontmatter), verify with `verify-visual-site.ps1`.

### Completed
- Module 23: 4 lessons covering frontier LLM providers, agent platforms, dev toolkits, model ecosystem
- `placement/` hub: 24 module folders, each with README.md + practice/ + interview/
  - interview/ files: ML Q&A (10), LLM Q&A (10), system design framework
  - practice/ files: mock-dsa.py, linear-regression.py, basic-rag.py, crud-api.py, patterns.py, ml-from-scratch.py
  - placement/index.md — navigation hub with progress grid
- `learning-methods/`: 13 files implementing all Learning How to Learn methods
- `tracker/`: daily log, progress tracker (224 chapters), weekly review, stats PowerShell script
- ROADMAP.md (18-week plan) + STRUCTURE.md (full module mapping)
- README.md updated with placement hub workflow + 24-module table
- All commits pushed to both repos (ai-engineering-journey + learning-playground)

### Repos
- `git@github.com:Raushan666java/ai-engineering-journey.git` — theory chapters (224 chapters, 24 modules) + Docusaurus site under `site/`
- `git@github.com:Raushan666java/learning-playground.git` — practice code, interview prep, learning methods, tracker

### Site Deployment (Docusaurus at `site/`)
- GitHub Pages serves the `gh-pages` branch; the live site is NOT updated by the Actions workflow (it flakily OOMs, exit 134, on the 7GB runner).
- Deploy: `node scripts/build-content-api.mjs --write`, then `node ./node_modules/@docusaurus/core/bin/docusaurus.mjs build --no-minify` with `NODE_OPTIONS=--max-old-space-size=8192`, then **`node scripts/trim-search-index.mjs`** (the raw index is 285 MB and GitHub rejects it: "exceeds 100 MB"), then `powershell -File scripts/deploy-gh-pages.ps1` (chunked pushes; re-run it after a failed chunk — it resets to `origin/gh-pages` first).
- Build memory: the page-generation phase needs ~6GB live heap; if two heavy builds run at once the process dies with a native crash (exit `-1073741819` or an rspack `hstr` panic), not an OOM message. Run one at a time. Build takes 15-25 min under paging. Never `Remove-Item -Force` the worktree root glob — it deletes the hidden `.git` file; clear with `-Exclude .git`.
- `site/docs/courses/ai-engineering-placement/` is the synced placement tree (sync via `C:\Users\hiii\AppData\Local\Temp\opencode\sync-site.ps1`; verify via `verify-site.ps1`). The site copy carries its own frontmatter on top of the `docs/` copy — prepending it blindly duplicates the block, and the build then renders the second `description:` as a paragraph.
- `gh` CLI is NOT authenticated — workflow file edits can't be pushed (needs `workflow` OAuth scope), and Actions logs can't be fetched.

### Android study app (`C:\xampp\htdocs\study_apps`)
- Expo/React Native reader for the same corpus, no backend, no accounts: BYO API key stored on device, all state in AsyncStorage. Tabs: Today, Library, Jobs, Review, Progress.
- Gates before any release: `npx tsc --noEmit`, `npm run check:parser`, `npm run check:highlight`, `npm run check:memory`, `npm run check:backup`, `npm run check:reminders`, `npm run check:exercises`, `npm run check:parse` (all 1,282 chapters), then `powershell -File scripts/build-apk.ps1` and `npm run check:apk`.
- Rendering contract: `src/md-parse.ts` parses markdown **and** raw HTML (`src/html.ts` turns the 13,464 `<details>` question-bank cards into `qa` blocks); `src/highlight.ts` + `src/CodeBlock.tsx` colour code; `src/md.tsx` draws blocks; `app/chapter/[id].tsx` is the study screen. A corpus change that prints tags or swallows code is a parser bug, not a CSS bug.
- Version bumps go in BOTH `app.json` and `android/app/build.gradle` — `android/` is gitignored and wiped by `expo prebuild`.
- The app reads content from the Pages URL (`/content`), rebuilt by `node scripts/build-content-api.mjs --write` in `site/`; a content fix only reaches the phone after a `gh-pages` deploy. Cached chapter bodies now expire on their own: the manifest's `generated` stamp is stored under `content:cache-stamp:v1`, and a new stamp drops the chapter cache on the next successful manifest fetch. Clearing by hand (Progress → storage) is only needed if the manifest itself is stale.
- Habit loop around the memory model (1.5.0): `src/reminders.ts` (`reminderPlan`/`describePlan`, pure, takes `now`) + `src/notify.ts` (permission, channel, schedule) + `src/useReminders.ts` (one shared `queued` signature at module scope — three screens call the hook, and independent refs would thrash the queue). A chapter lands on its due day; anything already overdue lands on the first day with a usable slot, never every day. `src/backup.ts` is the backup contract (no RN imports, so `scripts/test-backup.mjs` runs it): strict on app/version, lenient per record, merge keeps the better evidence and sums nothing, prefs and the API key are never in the file, and the job pipeline is.
- Reminders need `POST_NOTIFICATIONS` + `RECEIVE_BOOT_COMPLETED`, which come from the `expo-notifications` AndroidManifest; `app.json` lists the plugin too. New Expo native modules autolink at Gradle configure time, so adding one does not need `expo prebuild` — but a config-plugin-only change does.
- Memory model (`src/memory.ts`): `retention = 0.9^(days/stability)`, first revision always tomorrow, `again` cuts stability to 35% and returns in a day, `good` doubles. `revise()`/`scheduleAfterTest()` are pure and take `now`, so `scripts/test-memory.mjs` runs a year in a millisecond. Retention is the progress number (Today strip, Progress → Memory, readiness `Retention` gate) and it can fall — that is the feature. A quiz only starts the clock when every keyed question is checked (`saveQuiz(..., complete)`); the 1,030 chapters without a quiz use the heading-based recall check (`recallPrompts`).

### Next Steps
1. User to run `npx ts-node learning-methods/learning-dashboard.ts` to view stats
2. User to run `python languages/python/basic.py` to start Python practice
3. Follow ROADMAP.md week-by-week through the 24 modules using placement/ as the practice hub
4. User to set up GitHub branch protection (web UI → Settings → Branches → Add rule → main → Require PR + linear history)
