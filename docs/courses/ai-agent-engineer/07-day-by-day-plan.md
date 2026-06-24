# Day-by-Day Plan: 12 Weeks

## How to use this plan

Each day has a **topic**, an **action** (what to do), and a **done condition** (how to know you're done). If a day takes longer, stretch it — the buffer weeks absorb overruns.

---

## Week 1 — Phase 0: Backend Gap-Fill

| Day | Topic | Action | Done Condition |
|-----|-------|--------|----------------|
| 1 | Redis as cache vs queue | Read 0.1, run both examples locally | Can explain when to use SETEX vs RQ |
| 2 | Redis pub/sub + OpenAPI | Read 0.2–0.3, build pub/sub demo | Working publisher + subscriber in Python |
| 3 | JWT refresh rotation | Read 0.4, diagram the lifecycle | Can draw access/refresh flow from memory |
| 4 | Rate limiting + API versioning | Read 0.5, read API versioning section | Can explain token bucket vs sliding window |
| 5 | Microservices vs monolith | Read 0.6, write your ApexERP analysis | 1-page comparison written |
| 6 | Idempotency keys + WebSocket basics | Read 0.7, read WebSocket section, build echo server | Working idempotency check + WebSocket echo |
| 7 | Phase 0 checkpoint review | Run all exercises, check all boxes | All checklist items verified |

---

## Week 2 — Phase 1: Python + FastAPI (Part 1)

| Day | Topic | Action | Done Condition |
|-----|-------|--------|----------------|
| 1 | Type hints + dataclasses vs Pydantic | Read 1.1–1.2, annotate 10 functions | Can write `list[dict[str,int]]` without checking |
| 2 | Context managers + comprehensions | Read 1.3–1.4, write custom DB context mgr | Working context manager, 1-liner comprehensions |
| 3 | Decorators | Read 1.5, write `@retry(times=3)` | Decorator works on any function |
| 4 | FastAPI params + validation | Read 1.6, build CRUD endpoint | 4 endpoints with correct param types |
| 5 | FastAPI DI + middleware | Read 1.7–1.8, wire `get_current_user` | 3 endpoints with DI chain |
| 6 | Background tasks + Pydantic v2 | Read 1.9–1.10, add model-level validator | Validator rejects invalid data |
| 7 | Pydantic settings + review | Read 1.11, move config to pydantic-settings | `.env` loads into typed config |

---

## Week 3 — Phase 1: Python + FastAPI (Part 2)

| Day | Topic | Action | Done Condition |
|-----|-------|--------|----------------|
| 1 | AsyncIO fundamentals | Read 1.12, compare event loop to Node.js | Can explain `await` in JS terms |
| 2 | asyncio.gather + httpx | Read 1.13–1.14, rewrite 3 calls as concurrent | Measurable speedup |
| 3 | Async pitfalls + pytest intro | Read 1.15, read pytest section, write first test | `pytest` passes for 1 endpoint |
| 4 | FastAPI test fixtures | Read pytest section, write 3 tests with DI | Tests pass with mocked DB |
| 5 | Alembic migrations | Read Alembic section, init migrations | First migration created and applied |
| 6 | Booking module port — schema + models | Write SQLAlchemy models + Pydantic schemas | Models match Laravel schema |
| 7 | Booking module port — endpoints | Wire CRUD endpoints | All endpoints respond correctly |

---

## Week 4 — Phase 2: LLM + RAG (Part 1)

| Day | Topic | Action | Done Condition |
|-----|-------|--------|----------------|
| 1 | Tokens + BPE tokenization | Read 2.1, estimate 5 paragraphs | Within 20% without tool |
| 2 | Context windows + embeddings | Read 2.2–2.3, run embedding comparison | Can explain cosine similarity concretely |
| 3 | Embedding dimensionality | Read 2.4, test 2 models side by side | Can pick correct model for a use case |
| 4 | Prompt engineering | Read 2.5, write zero-shot + few-shot + CoT | Few-shot beats zero-shot measurably |
| 5 | Function calling | Read 2.6, write tool schema for both APIs | Hand-written schema works |
| 6 | Vector search math + HNSW | Read 2.7–2.8, understand cosine vs dot product | Can explain HNSW speed/accuracy tradeoff |
| 7 | RAG architecture | Read 2.9, draw full pipeline from memory | Every arrow labeled, no gaps |

---

## Week 5 — Phase 2: LLM + RAG (Part 2)

| Day | Topic | Action | Done Condition |
|-----|-------|--------|----------------|
| 1 | Chunking strategies | Read 2.10, test 3 strategies on your data | Can explain a real fixed-size failure mode |
| 2 | Re-ranking + vector DB comparison | Read 2.11–2.12, write comparison table | Honest 1-paragraph comparison written |
| 3 | Hallucination + fine-tuning intro | Read 2.13, read fine-tuning section | Understands LoRA vs full fine-tune |
| 4 | Guardrails + model eval | Read guardrails + model eval sections | Can name 2 guardrail approaches |
| 5 | RAG demo — ingestion pipeline | Build chunk + embed + store pipeline | Documents ingested and searchable |
| 6 | RAG demo — query endpoint | Build retrieve + re-rank + generate | Returns cited answers |
| 7 | RAG demo — deploy + review | Deploy to VPS, test edge cases | Public URL returning answers |

---

## Week 6 — Phase 3: Agents (Part 1)

| Day | Topic | Action | Done Condition |
|-----|-------|--------|----------------|
| 1 | ReAct pattern | Read 3.1, write minimal ReAct loop | Loop handles tool calls correctly |
| 2 | Tool calling deep-dive | Read 3.2, write nested param schema | Schema works with real API call |
| 3 | LangGraph StateGraph | Read 3.3, build 3-node graph | Runs end to end without errors |
| 4 | Conditional edges | Read 3.4, add routing condition | Routes to correct branch |
| 5 | Checkpointer + persistence | Read 3.5, kill and resume a graph | Resumes from last checkpoint |
| 6 | Human-in-the-loop | Read 3.6, add interrupt to a node | Graph pauses and resumes safely |
| 7 | CrewAI agents + tasks | Read 3.7, build researcher + writer crew | Crew produces coherent output |

---

## Week 7 — Phase 3: Agents (Part 2)

| Day | Topic | Action | Done Condition |
|-----|-------|--------|----------------|
| 1 | CrewAI processes + tools | Read 3.7 deeper, add custom tools | Crew uses real APIs as tools |
| 2 | MCP protocol spec | Read 3.8, map your existing server to spec | Can name all 3 primitives |
| 3 | MCP client | Read 3.9, write client to your server | Client calls a tool and gets result |
| 4 | OpenAI Agents SDK | Read 3.14, build agent with SDK | Agent runs with built-in tools |
| 5 | Agent memory patterns | Read 3.10, add short-term + long-term memory | Agent recalls past conversation |
| 6 | Multi-agent orchestration | Read 3.11, sketch CRM assistant | 3 agents, justified pattern choice |
| 7 | Agent evaluation + cost | Read 3.12–3.13, evaluate your agent | 2 test cases pass, cost calculated |

---

## Week 8 — Phase 3: Agents (Part 3, Buffer)

| Day | Topic | Action | Done Condition |
|-----|-------|--------|----------------|
| 1 | Advanced MCP server | Read 3.15, add resources + prompts | Server exposes all 3 primitives |
| 2 | n8n vs LangGraph deep dive | Read comparison table, port 1 n8n flow | Both produce same output |
| 3 | Purvanchal orchestration — design | Design state graph for existing n8n flow | Graph diagram matches flow |
| 4 | Purvanchal — build Part 1 | Implement main nodes + edges | Core path executes |
| 5 | Purvanchal — build Part 2 | Add conditional routing + persistence | Full pipeline runs end to end |
| 6 | Purvanchal — test + refine | Add error handling, edge cases | Passes 5 test scenarios |
| 7 | Buffer / catch-up | Finish any incomplete exercises | All Phase 3 checkboxes verified |

---

## Week 9 — Phase 4: Production Hardening (Part 1)

| Day | Topic | Action | Done Condition |
|-----|-------|--------|----------------|
| 1 | Docker multi-stage | Read 4.1, rebuild RAG demo Dockerfile | Image size measured, < 300MB |
| 2 | Docker Compose health checks | Read 4.2, add health checks | `docker ps` shows healthy for all |
| 3 | Celery/RQ | Read 4.3, replace BackgroundTasks | Jobs survive restart |
| 4 | Redis retries + dead-letter | Read 4.4, configure retry with backoff | Failed jobs land in DLQ |
| 5 | Structured logging | Read 4.5, add correlation IDs | Request traceable across services |
| 6 | Metrics + health checks | Read 4.6–4.7, expose /metrics and /healthz | Prometheus can scrape metrics |
| 7 | Secrets management | Read 4.8, move all keys to .env | Startup fails if var is missing |

---

## Week 10 — Phase 4: Production Hardening (Part 2)

| Day | Topic | Action | Done Condition |
|-----|-------|--------|----------------|
| 1 | API cost monitoring | Read 4.9, add token-usage wrapper | Every LLM call logged with cost |
| 2 | Load testing | Read 4.11, run k6/locust on RAG endpoint | Knows RPS limit of current deployment |
| 3 | Monitoring + alerting | Read 4.12, set up Grafana dashboard | Dashboard shows key metrics |
| 4 | GitHub Actions CI | Read 4.10, write test workflow | Green badge on both repos |
| 5 | Full stack review | Run all 10 exercises | All Phase 4 checkboxes verified |
| 6 | Buffer / catch-up | Finish incomplete exercises | All items checked |
| 7 | Buffer / catch-up | Deploy hardened versions | Both projects running with all hardening |

---

## Week 11 — Phase 5: Portfolio (Part 1)

| Day | Topic | Action | Done Condition |
|-----|-------|--------|----------------|
| 1 | README structure | Read 5.1, rewrite RAG demo README | Passes 60-second test |
| 2 | README for LangGraph project | Read 5.1, rewrite Purvanchal README | Both READMEs consistent |
| 3 | Demo video (RAG) | Read 5.2, record 90-second video | Video exists, watchable |
| 4 | Demo video (Purvanchal) | Read 5.2, record 90-second video | Both videos done |
| 5 | Upwork profile | Read 5.3, rewrite profile | LangGraph, CrewAI, FastAPI listed |
| 6 | LinkedIn rewrite | Read 5.4, update headline + about | Headline: "AI Agent Engineer" |
| 7 | Case-study post | Read 5.5, write + publish on dev.to | 1 published post |

---

## Week 12 — Phase 5: Portfolio (Part 2) + Interview Prep

| Day | Topic | Action | Done Condition |
|-----|-------|--------|----------------|
| 1 | Technical interview prep | Read 5.7, run through 10 mock Q&A | Can explain RAG pipeline from memory |
| 2 | Salary negotiation + pricing | Read 5.8–5.9, set your rates | Written rate card + minimum acceptable |
| 3 | Dubai job search | Read 5.6, identify 20 target postings | List of companies + roles |
| 4 | Applications batch 1 | Send 5 applications with tailored proposals | 5 sent, tracker updated |
| 5 | Proposal refinement | Review response rates, refine template | Template updated |
| 6 | Applications batch 2 | Send 5 more applications | 10 total sent |
| 7 | Final review + ongoing plan | Check all Phase 5 boxes, schedule ongoing time | Recurring 1hr/week on calendar |

---

## Buffer Weeks

Weeks 8 and 10 have built-in buffer days. If you finish early, use the extra days for:

- Polish the READMEs further
- Add more test coverage
- Record a longer architecture walkthrough video
- Publish a second case-study post
- Start applications early

---

## Quick Reference: Time Commitment

| Phase | Weeks | Hours | Key Deliverable |
|-------|-------|-------|-----------------|
| 0 | 1 | 12-15 | Redis/pub/sub + JWT + idempotency demos |
| 1 | 2 | 30 | Booking module ported to FastAPI + tested |
| 2 | 2 | 25 | Public RAG demo API with cited answers |
| 3 | 3 | 35 | Purvanchal rebuilt in LangGraph |
| 4 | 2 | 20 | Both projects hardened + CI/CD |
| 5 | 2 | 15 + ongoing | Profiles rewritten, applications started |
| **Total** | **12** | **~140** | **Everything above** |

[Back to Index](00-index.md)
