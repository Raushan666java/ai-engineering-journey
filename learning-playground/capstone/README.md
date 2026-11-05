# Capstone

The one project that gets you hired. Everything else is practice; this is the artifact.

## Requirements (all five, no exceptions)

- [ ] Solves a problem you can state in one sentence
- [ ] Deployed at a public URL
- [ ] Has an evaluation suite with a pass/fail gate
- [ ] Emits traces + cost per request
- [ ] README explains every design decision **and its tradeoff**

## Structure

```
capstone/
├── README.md          ← problem, design, tradeoffs, numbers
├── src/               ← application code
├── evals/             ← eval set + rubric + runner
├── tests/             ← unit/integration tests
├── infra/             ← Dockerfile, compose, CI workflow
└── docs/
    ├── architecture.md
    └── case-study.md  ← problem → design → what broke → numbers
```

## Pick one

| Option | Stack | Why it's good |
|---|---|---|
| Support agent over your own docs | FastAPI + RAG + citations + eval | Closest to a real job |
| Document intelligence pipeline | OCR + extraction + validation | High commercial demand |
| Agent with real tool use | MCP server + 2 tools + guardrails | Differentiator in 2026 |
| RAG over a niche corpus | Hybrid search + reranking + eval | Shows retrieval depth |

**Rule:** a recruiter should understand what it does in 10 seconds and find something to argue about in 60. If it's not arguable, it's not designed.

## Definition of done

```bash
docker compose up          # works from a clean clone
pytest -q                  # green
python evals/run.py        # prints pass rate + cost + latency
curl $PUBLIC_URL/health    # 200
```
