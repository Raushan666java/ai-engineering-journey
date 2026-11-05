# Learning Playground — AI / Agent Engineering

A working lab for the [AI Agent Engineer curriculum](../site/docs/courses/ai-agent-engineer/00-index.md).
Everything here runs locally. No frameworks until Lesson 4.

**Rule of this folder:** if you didn't run it, you didn't learn it.

---

## 1. Pick your starting level

Run the assessment:

```powershell
cd learning-playground
python level_check.py
```

It asks 12 questions, scores you, and prints the exact level to start at.
You can also score yourself against the table below.

| Level | Name | You can already... | Start at |
|---|---|---|---|
| **L0** | Zero | Nothing. Maybe you've written a script once. | Phase 1 of the syllabus + `lessons/l00_python_basics.py` |
| **L1** | Coder | Write functions in one language, use Git, understand HTTP | Phase 1 |
| **L2** | Backend dev | Ship APIs, use a DB, Docker, deploy something | Phase 2 (skip most of Phase 1) |
| **L3** | LLM user | Call an LLM API, write prompts, understand tokens/embeddings | Phase 3, Lesson 1 |
| **L4** | Agent builder | Have built a tool-calling loop and a RAG pipeline | Phase 4 + the advanced chapters |
| **L5** | Production agent engineer | Run agents in production with evals and observability | Advanced chapters + capstone only |

**Most people overestimate themselves by one level.** If you can't produce the checkpoint artifact for a level in under 60 minutes, you're not at that level yet. That's fine — the point is to find the truth fast.

### Level checkpoints (be honest)

| Level | Checkpoint — do it, don't describe it |
|---|---|
| L0 → L1 | Write a script that reads a CSV, filters rows, writes a new CSV. No tutorial. |
| L1 → L2 | Build a 3-endpoint FastAPI app with a Pydantic model and one pytest test. |
| L2 → L3 | Call an LLM API, stream the response, count tokens, store the reply in SQLite. |
| L3 → L4 | Build a tool-calling loop **without a framework** (Lesson 1 in this folder). |
| L4 → L5 | Add evaluation + tracing + cost tracking to that loop and deploy it. |

---

## 2. First-time setup

### Windows (PowerShell)

```powershell
cd learning-playground
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env
# open .env and paste your API key
```

### Linux / macOS

```bash
cd learning-playground
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
```

### Get an API key

Any OpenAI-compatible provider works. Cheapest path for learning:

- **OpenAI** — `gpt-4o-mini` is enough for every lesson here.
- **Groq** — fast and free tier, OpenAI-compatible.
- **Ollama** — fully local, free. Set `OPENAI_BASE_URL=http://localhost:11434/v1` and model `llama3.1`.

Put it in `.env` — never in code, never in Git.

### Optional: run the backing services

```bash
docker compose up -d      # Redis (memory/cache) + Qdrant (vectors)
```

You don't need these until Lesson 5. Skip if Docker isn't installed.

---

## 3. Verify the playground works

```bash
python -m pytest -q          # should pass (offline tests only)
python lessons/l01_agent_loop.py "What's the weather in Pune and Mumbai?"
```

If you see two tool calls and a combined answer, your environment is correct.

---

## 4. The learning path, mapped to the syllabus

Your course has 6 phases. The playground is the *doing* half of it.

| Playground level | Syllabus phase | Book chapters | Playground file |
|---|---|---|---|
| L0–L1 | Phase 1 — Python + FastAPI | 02 | `l00_python_basics.py` |
| L2 | Phase 0 — Backend gap-fill | — | (do in your Laravel/PHP work) |
| L3 | Phase 2 — LLM + RAG theory | 02, 03, 08 | `l03_llm_calls.py` |
| L4 | Phase 3 — Agents, LangGraph, MCP | 04, 05, 06, 07, 09, 10 | `l01_agent_loop.py` → `l02_tool_schema.py` |
| L4+ | Phase 4 — Production hardening | 11, 12, 13, 14 | `l04_eval.py`, `l05_observability.py` |
| L5 | Phase 5 — Portfolio + positioning | 15, 16, 17 | `capstone/` |

**Do not read the book chapter before doing the matching lesson.** Read it *after*, to fill the gaps you felt. That inversion is the whole method.

### Weekly rhythm (12 h/week)

| Day | Time | What |
|---|---|---|
| Mon–Thu | 2 h | One lesson: read the playground file, run it, break it, fix it |
| Fri | 2 h | Exercise in `exercises/` — no tutorial |
| Sat | 2 h | Ship: commit, write 5 lines in `PROGRESS.md` about what broke |
| Sun | 0–2 h | Read the matching book chapter, now that you've built it |

---

## 5. The five rules

1. **One artifact per week.** A commit, a log, a benchmark. If there's no artifact, the week didn't happen.
2. **No tutorial without a modification.** Change something in every example before moving on.
3. **30-minute rule.** Stuck for 30 minutes → write down the exact error, try the dumbest fix, move on. Don't research for two hours.
4. **No frameworks until Lesson 4.** LangGraph before the raw loop produces people who can't debug.
5. **Benchmark or it didn't happen.** Tokens, latency, cost, accuracy. Numbers, not adjectives.

---

## 6. Folder map

```
learning-playground/
├── README.md               ← you are here
├── level_check.py          ← run this first
├── requirements.txt
├── .env.example
├── docker-compose.yml      ← Redis + Qdrant (from Lesson 5)
├── PROGRESS.md             ← your tracker; fill it weekly
├── lessons/
│   ├── common.py               ← shared client + JSON logging
│   ├── l00_python_basics.py
│   ├── l01_agent_loop.py       ← raw agent loop, no framework
│   ├── l02_tool_schema.py      ← reliable tool calling
│   ├── l03_llm_calls.py        ← streaming, tokens, cost
│   ├── l04_eval.py             ← evals + gate
│   ├── l05_rag.py              ← BM25 + citations
│   └── l06_guardrails.py       ← attack suite, code-enforced policy
├── agent/                  ← END-TO-END service: loop, tools, policy, traces,
│                              evals, FastAPI, Docker, 19 tests (see agent/README.md)
├── trading/                ← trading machinery: data, backtest, risk, paper broker
├── exercises/              ← your work goes here (never in lessons/)
├── tests/                  ← offline tests, no API key
├── capstone/               ← the one project that gets you hired
├── reference/              ← external repos/docs, timeboxed to 10 min
├── notes/                  ← one file per week
└── runs/                   ← trace output (git-ignored, local only)
```

---

## 7. What "done" looks like

You are L5 and job-ready when all five exist and are public:

- [ ] A deployed agent API with a public URL
- [ ] An evaluation suite with a pass/fail gate in CI
- [ ] Traces you can read for any failed request, with cost per request
- [ ] A README per project that explains every design decision and its tradeoff
- [ ] One case study: *problem → design → what broke → numbers*

Anything less is a tutorial portfolio. Hiring managers can tell the difference in about 90 seconds.
