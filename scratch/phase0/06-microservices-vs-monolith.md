# Phase 0.6 — Microservices vs Modular Monolith

## Applied to ApexERP

### Current Architecture
- Monolithic Laravel backend
- n8n for workflow orchestration/external automation
- Single database (PostgreSQL)
- This is a **modular monolith with external orchestration** — a valid pattern

## Arguments FOR moving specific modules to microservices

| Module | Why it would benefit |
|--------|---------------------|
| **Media pipeline** (image/video processing) | Needs GPU access, long-running jobs, separate scaling needs |
| **Document ingestion** | Spiky traffic patterns, could use dedicated workers |
| **Public API** | Exposing query endpoints without admin surface, separate auth boundary |

## Arguments AGAINST microservices

| Concern | Why it matters for ApexERP |
|---------|---------------------------|
| **Team size** | Solo dev — refactoring across modules is faster in a monolith |
| **Transactional consistency** | Booking/payment needs ACID — distributed transactions add complexity |
| **Deployment overhead** | N services = N deploys, N monitoring dashboards, N log streams |
| **Latency** | Internal function call = 0.1ms, HTTP call = 5-50ms |

## When to actually split

1. **The module needs GPU** — media pipeline becomes separate FastAPI service
2. **You need to expose a public-facing API** — create a thin API gateway service
3. **A module's traffic grows 10x differently** than the rest — e.g., document search
4. **You hire more than 5 developers** — organizational scaling forces it

## Verdict

Keep the monolith until you hit reason #1 or #2 (GPU or public API).
Microservices solve organizational and scaling problems — not code quality problems.
