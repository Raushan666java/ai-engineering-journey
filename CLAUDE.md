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
- Deploy process: `site/` → `node ./node_modules/@docusaurus/core/bin/docusaurus.mjs build` with `NODE_OPTIONS=--max-old-space-size=8192` → push `site/build/*` to `gh-pages` (use a worktree: `git worktree add <tmp> gh-pages`, clear, copy, commit, push; pages re-serves in ~2 min).
- Build memory: the page-generation phase needs ~6GB live heap; on a RAM-loaded machine (few GB free) use heap `5632`+ → crashes, so stay at `8192` and add `--no-minify` (skips terser; cuts ~1GB). Build takes 15-25 min under paging. After copying into the worktree, NEVER `Remove-Item -Force` the worktree root glob — it deletes the hidden `.git` file; clear with `-Exclude .git`.
- `site/docs/courses/ai-engineering-placement/` is the synced placement tree (sync via `C:\Users\hiii\AppData\Local\Temp\opencode\sync-site.ps1`; verify via `verify-site.ps1`). The old legacy tree `site/docs/placement/` was deleted — placement routes are `/ai-engineering-placement/...` only.
- `gh` CLI is NOT authenticated — workflow file edits can't be pushed (needs `workflow` OAuth scope), and Actions logs can't be fetched.

### Next Steps
1. User to run `npx ts-node learning-methods/learning-dashboard.ts` to view stats
2. User to run `python languages/python/basic.py` to start Python practice
3. Follow ROADMAP.md week-by-week through the 24 modules using placement/ as the practice hub
4. User to set up GitHub branch protection (web UI → Settings → Branches → Add rule → main → Require PR + linear history)
