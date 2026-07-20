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
- `git@github.com:Raushan666java/ai-engineering-journey.git` — theory chapters (224 chapters, 24 modules)
- `git@github.com:Raushan666java/learning-playground.git` — practice code, interview prep, learning methods, tracker

### Next Steps
1. User to run `npx ts-node learning-methods/learning-dashboard.ts` to view stats
2. User to run `python languages/python/basic.py` to start Python practice
3. Follow ROADMAP.md week-by-week through the 24 modules using placement/ as the practice hub
4. User to set up GitHub branch protection (web UI → Settings → Branches → Add rule → main → Require PR + linear history)
