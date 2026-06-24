# Phase 5 — Portfolio + Market Positioning

**Duration:** Weeks 11-12, ~15 hours + ongoing applications
**Goal:** Package your projects into something a recruiter understands in 60 seconds. Rewrite profiles. Start applying.

---

## Topic Table

| # | Subtopic | Hours | Done checkpoint |
|---|----------|-------|-----------------|
| 1 | README structure that gets read | 1.5 | Both project READMEs follow a consistent structure a recruiter can skim in 60 seconds |
| 2 | Demo video (90 seconds) | 1 | 90-second video exists for each project |
| 3 | Upwork profile rewrite | 1.5 | Profile explicitly lists LangGraph, CrewAI, FastAPI, n8n, ChromaDB, pgvector |
| 4 | LinkedIn rewrite | 1 | Headline leads with "AI Automation Engineer" |
| 5 | Case-study post | 2 | One published write-up on LinkedIn or dev.to |
| 6 | Dubai job search + applications | Ongoing, 1hr/week | 3-5 applications/week sustained for 4 weeks |

---

## 5.1 README Structure That Gets Read

### The 60-second skim

A recruiter or technical lead opens your README. They spend **60 seconds** deciding whether to read more or move on. Your README must communicate everything in those 60 seconds.

### Structure (applies to both projects)

```markdown
# Project Name
> One-line description: what it does, who it's for.

## Demo
[Link to live demo](https://rag-demo.apexpillar.tech)
![Demo Screenshot](demo.png)

## Architecture
![Architecture Diagram](architecture.png)

## Quick Start
```
curl -X POST https://rag-demo.apexpillar.tech/v1/collections \
  -H "Authorization: Bearer $API_KEY" \
  -d '{"name": "quick-test"}'
```

## Key Design Decisions

| Decision | Choice | Why |
|----------|--------|-----|
| Vector DB | ChromaDB | Simplest setup, good for medium-scale RAG |
| Embedding model | text-embedding-3-small | Best cost/quality tradeoff |
| Chunk size | 500-800 tokens | Standard range, prevents context loss |

## Tradeoffs Considered
- ChromaDB vs Qdrant vs pgvector → (honest comparison)
- Chunking strategies → (your rationale)
- Rate limiting approach → (token bucket vs sliding window)

## Stack
Python, FastAPI, ChromaDB, Redis, OpenAI, Docker, Cloudflare Tunnel

## Related
- [System Design Doc](link-to-interview-artifact)
- [n8n vs LangGraph Comparison](link-to-comparison-doc)
```

### Exercise

Rewrite both project READMEs using this structure. Time someone reading them — if they can't understand the project in 60 seconds, rewrite.

---

## 5.2 Demo Video (90 Seconds)

### Structure

| Time | Content |
|------|---------|
| 0-10s | Show the result first (answer from RAG query, or finished video) |
| 10-30s | Show the request (curl command or upload) |
| 30-60s | Show what happens internally (architecture diagram overlaid) |
| 60-80s | Show the response with cited sources |
| 80-90s | Call to action (link to repo, try it yourself) |

### Tools

- Screen recording: OBS Studio (free) or your phone's screen recording
- Simple edit: trim front/back, add text overlays in CapCut or DaVinci Resolve
- Host: YouTube (unlisted) or GitHub release page

### What NOT to do

- Don't show code scrolling (nobody reads code in a video)
- Don't explain architecture for 45 seconds before showing the result
- Don't make it longer than 2 minutes

### Exercise

Record one 90-second video for the RAG demo. If it's longer than 2 minutes, re-record. If it starts with architecture instead of the result, re-record. Do the same for the LangGraph project (show a pipeline run that produces output).

---

## 5.3 Upwork Profile Rewrite

Content already drafted in `docs/profile/upwork-raw.md`. Key requirements:

### Tags/Skills (must-explicitly-list order)

1. LangGraph
2. CrewAI
3. FastAPI
4. ChromaDB
5. RAG / Vector Database
6. MCP / Model Context Protocol
7. n8n
8. WhatsApp Business API
9. Python
10. OpenAI API / Anthropic API
11. Docker / Cloudflare
12. PostgreSQL / Redis

### Overview structure

1. **Who you are** (1 sentence): "I build production agent systems — LangGraph orchestrators, RAG pipelines, MCP servers."
2. **What you've built** (2-3 sentences): ChromaDB server, LangGraph pipeline, production ERP with WhatsApp AI.
3. **Your background** (1 sentence): "Started as full-stack developer, went all-in on AI engineering in 2025."
4. **Your stack** (comma-separated list matching the tags above)
5. **Availability statement**

### Exercise

Copy the draft from `docs/profile/upwork-raw.md` into your actual Upwork profile. Verify every skill tag is present and ordered correctly.

---

## 5.4 LinkedIn Rewrite

Content already drafted in `docs/profile/linkedin-rewrite.md`.

### Headline (must fit in 220 characters)

```
AI Agent Engineer | LangGraph · RAG · FastAPI · MCP · Production Agentics
```

Alternatively:

```
Building Production Agent Systems | LangGraph, FastAPI, ChromaDB, MCP | Open to Dubai/Remote
```

### About section structure

1. Current identity: "I build production agent systems."
2. What that means: "LangGraph state machines, RAG pipelines, MCP servers."
3. Proof: "Live projects: ChromaDB RAG demo, LangGraph content pipeline, WhatsApp AI ERP in production."
4. Target: "Open to AI Automation Engineer / Agent Developer roles in Dubai or remote from July 2026."
5. Stack list: same ordering as Upwork

### Featured section

Add both project repos and the RAG demo link as Featured items.

### Exercise

Update your actual LinkedIn profile. Ask someone who doesn't know your work to read it and tell you what you do. If they don't say "AI Agent Engineer" within 5 seconds, rewrite.

---

## 5.5 Case-Study Post

### Structure

```
Title: How I Built a Production RAG API in 2 Weeks (and Why ChromaDB Won)

1. The problem: "I needed a long-term memory system for LLM agents..."
2. The architecture: (1-2 sentence description + diagram)
3. Key decisions:
   - ChromaDB over Qdrant/pgvector (honest tradeoff)
   - 500-800 token chunks with 50 overlap (why)
   - Token bucket rate limiting (why for AI endpoints)
4. Results: "Live on Hetzner, serving queries at ~2s with cited sources."
5. Lessons learned: "The hardest part was chunking, not vector search."
6. Link to the project and live demo
```

### Exercise

Publish one case-study post on LinkedIn (native post, not a link to a blog). Spend 30 minutes on it. Include at least one concrete design decision with your rationale.

---

## 5.6 Dubai Job Search + Applications

### Where to search

| Platform | Best for | Search terms |
|----------|----------|-------------|
| LinkedIn | Direct hire, companies | "AI Automation Engineer", "AI Agent", "LangGraph", "RAG" |
| Indeed UAE | Recruiter postings | Filter by Remote, Posted < 7 days |
| Bayt.com | Middle East focused | "AI Engineer" + Remote |
| Wellfound | Startup roles | "AI Engineer", filter by Remote |

### Application rhythm

- **Week 1:** Identify 20 target postings. Customize your proposal template for each. Apply to 5.
- **Week 2:** Apply to 5 more. Follow up on Week 1 applications.
- **Week 3:** Apply to 5 more. If response rate is < 20%, revise profile.
- **Week 4:** Apply to 5 more. By now you should have data on what's working.

### Response tracking

Create `docs/profile/proposal-tracker.md`:

```markdown
# Proposal Tracker

| Date | Company | Role | Link | Template | Response | Notes |
|------|---------|------|------|----------|----------|-------|
| 2026-06-24 | Talent Bridge HR | AI Automation Engineer | [link] | B | Interview scheduled | Asked about LangGraph experience |
| 2026-06-25 | ... | ... | ... | ... | ... | ... |
```

### Exercise

Spend 1 hour identifying 20 target postings. Apply to 3-5 of them using your proposal templates. Log everything in the tracker.

---

## Phase 5 Done Checkpoint

Before declaring yourself ready to apply:

- [ ] Both project READMEs pass the 60-second test
- [ ] 90-second demo video exists for each project
- [ ] Upwork profile updated with correct tags and overview
- [ ] LinkedIn headline, about, and featured section updated
- [ ] One case-study post published
- [ ] 20 target postings identified
- [ ] Proposal tracker started
- [ ] 3-5 applications sent

**Estimated time to checkpoint:** 12-15 hours over 2 weeks, plus ongoing applications.

---

## Final Words

You already run production systems on Hetzner with ChromaDB, FastAPI, LangGraph, and MCP. The gap isn't technical — it's that the output is scattered across a course repo and personal infra, not packaged as a portfolio.

These 6 phases close that gap. At the end, a recruiter opens your profile and sees: "AI Agent Engineer" → "LangGraph, RAG, FastAPI, MCP" → "Live demo at rag-demo.apexpillar.tech" → "Open-source pipeline on GitHub."

That's what converts. Not another course. Not another certification. A live, documented, production system.

Go build it.

[Back to Index](00-index.md) | [Day-by-Day Schedule](07-day-by-day-plan.md)
