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
| 7 | Technical interview prep | 2 | Can explain RAG pipeline, ReAct loop, and MCP protocol from memory without notes |
| 8 | Salary negotiation | 1 | Written walk-away number + target range for Dubai market |
| 9 | Freelance pricing strategy | 1 | Rate card set for 3 engagement types (hourly, fixed-price, retainer) |

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

> **See the full playbook:** [08-job-search-playbook.md](08-job-search-playbook.md) — covers job sites, networking, proposals, interviews, Dubai visa process, and pipeline management in depth.

### Where to search (quick reference)

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

Create a proposal tracker (see the [job search playbook](08-job-search-playbook.md) for a complete template):

```markdown
# Proposal Tracker

| Date | Company | Role | Platform | Template | Status | Follow-up | Notes |
|------|---------|------|----------|----------|--------|-----------|-------|
| 2026-06-24 | Talent Bridge HR | AI Automation Engineer | LinkedIn | B | Applied | Day 5 | Customized for LangGraph |
```

### Exercise

Read the [full job search playbook](08-job-search-playbook.md). It covers everything from the 50-application rule to Dubai visa types to interview system design. Then spend 1 hour identifying 20 target postings and apply to 3-5.

---

## 5.7 Technical Interview Prep

The AI Agent Engineer interview typically covers: system design (RAG pipeline), agent architecture (ReAct, LangGraph), and production concerns (latency, cost, safety).

### 10 common questions with concise answers

**Q1: Walk me through the RAG pipeline from ingestion to response.**
```
Ingestion: Document → chunk (500-800 tokens) → embed (text-embedding-3-small, 1536d) → store in ChromaDB with metadata.
Query: User question → embed → ANN search (HNSW, top_k=5) → re-rank (Cohere reranker) → combine chunks + query → LLM generates answer with citations.
```

**Q2: Why cosine similarity for text embeddings?**
Cosine measures angle, ignoring magnitude. In embedding space, a document's meaning is its direction, not its length. A long and short document saying the same thing have the same direction.

**Q3: What's the difference between an agent and a chain?**
A chain is a fixed sequence of LLM calls. An agent decides which action to take next based on the current state — it can choose tool A or tool B depending on what the user asked.

**Q4: How do you prevent hallucination in RAG?**
1. Set a relevance threshold on retrieved chunks (reject low-score results)
2. Instruct the LLM: "If the context doesn't contain the answer, say 'I don't know'"
3. Add citation requirements — force the model to cite specific chunks
4. Re-rank to push irrelevant chunks below the cutoff

**Q5: LangGraph vs OpenAI Agents SDK — when to use what?**
OpenAI Agents SDK: simple tool-use, single-agent, fast setup (5 min). LangGraph: complex state machines, multi-agent coordination, human-in-the-loop, production reliability (checkpointer, crash recovery).

**Q6: How do you handle rate limiting for an AI API?**
Token bucket per user with 5 req/min burst. Sliding window for total API load. Queue overflow to Redis and process async. Return 429 with Retry-After header.

**Q7: Explain the MCP protocol.**
Model Context Protocol: 3 primitives — Tools (actions the LLM can take), Resources (data the LLM can read), Prompts (pre-built prompt templates). The LLM discovers these at connection time and uses them as needed.

**Q8: How do you estimate LLM API costs?**
Token count × per-token price. GPT-4: $30/1M input, $60/1M output. A 4-step agent chain with 4K tokens per step costs ~$0.48 per run. Add 20% for retries.

**Q9: How do you test an agent?**
1. Unit test each tool function independently
2. Integration test: feed input, check that the correct tools were called
3. E2E test: run the full agent, verify output quality with LLM-as-judge
4. Load test: measure cost and latency under concurrent requests

**Q10: What's your experience with production AI systems?**
"I run a multi-tenant ERP on Hetzner with Docker and Cloudflare Tunnel. I've ported a real estate booking module to FastAPI, deployed a public RAG API with ChromaDB, and rebuilt a visual n8n workflow as a LangGraph state machine with checkpointer persistence and human-in-the-loop."

### Exercise

Record yourself answering all 10 questions. Play it back. If you stall on any question, re-read that phase's content. Repeat until all 10 flow naturally.

---

## 5.8 Salary Negotiation

### Dubai market ranges (2026)

| Role | Junior (0-2yr) | Mid (2-5yr) | Senior (5-8yr) | Lead (8+yr) |
|------|---------------|-------------|----------------|-------------|
| AI Engineer | 8K-12K AED | 12K-18K AED | 18K-28K AED | 28K-40K AED |
| AI Agent Engineer | 10K-15K AED | 15K-22K AED | 22K-32K AED | 32K-45K AED |
| Freelance hourly | $35-50 | $50-80 | $80-120 | $120-175 |

### Your walk-away numbers

```python
# Calculate your minimum acceptable rate
current_income = 0  # Your current monthly income in USD
desired_income = 3000  # Minimum monthly target
hours_per_week = 20
weeks_per_month = 4

min_hourly = desired_income / (hours_per_week * weeks_per_month)
print(f"Minimum hourly rate: ${min_hourly:.0f}/hr")
# → $38/hr minimum

# For full-time role
current_annual = 0  # Your current annual salary in USD
desired_annual = 36000  # Minimum annual target
print(f"Minimum annual salary: ${desired_annual:,}")
# For Dubai: convert to AED (÷ 3.67)
print(f"Minimum monthly AED: {desired_annual / 12 * 3.67:.0f} AED")
```

### Negotiation scripts

**On rate:**
> "I'd love to work on this. Based on the scope you described, which involves building a custom LangGraph pipeline with MCP integration, my rate is $X/hr. If the budget is tighter, I can scope it down to a simpler architecture — what range were you targeting?"

**On salary:**
> "I'm targeting roles in the 18K-25K AED range for AI agent engineering positions, given my experience with LangGraph, MCP, and production deployment. Is that aligned with your budget for this role?"

### Exercise

Calculate your walk-away number. Write your rate card (hourly, fixed-price for a RAG demo build, monthly retainer for maintenance). Save it as a private note. Never name a number first in a negotiation.

---

## 5.9 Freelance Pricing Strategy

### Three engagement models

| Model | When to use | Your rate | Risk level |
|-------|------------|-----------|------------|
| Hourly | Discovery phase, ongoing maintenance | $50-80/hr | Low |
| Fixed-price | Well-defined scope ("build a RAG API") | $1,500-5,000 per project | Medium |
| Retainer | Monthly maintenance + improvements | $1,000-3,000/month | Low |

### Estimating fixed-price projects

```python
def estimate_fixed_price(
    hours: float,
    hourly_rate: float = 60,
    risk_buffer: float = 1.5,  # 50% buffer for unknown unknowns
    complexity_mult: float = 1.0,
) -> dict:
    base = hours * hourly_rate
    total = base * risk_buffer * complexity_mult
    return {
        "base_estimate": base,
        "risk_buffer_pct": (risk_buffer - 1) * 100,
        "total_quote": total,
    }

# RAG demo API build: ~40 hours
print(estimate_fixed_price(40, 60, 1.5, 1.2))
# → base: $2,400, buffer: 50%, total: $4,320

# LangGraph workflow: ~60 hours
print(estimate_fixed_price(60, 70, 1.5, 1.3))
# → base: $4,200, buffer: 50%, total: $8,190
```

### Upwork proposal pricing strategy

| Project type | Your bid | Competitor range | Win rate |
|-------------|----------|-----------------|----------|
| Simple API build | $1,500-2,500 | $500-5,000 | 40% |
| RAG system | $3,000-5,000 | $1,000-10,000 | 30% |
| Agent workflow | $4,000-8,000 | $2,000-15,000 | 25% |
| Consultation (hourly) | $60-80 | $30-150 | 50% |

### Street-smart pricing rules

1. **Never compete on price** — compete on specificity ("I've built this exact system for real estate")
2. **Anchor high** — your first number sets the range; say your rate confidently
3. **Discount scope, not rate** — if they can't afford $5K, offer $3K with reduced scope
4. **First client at any rate** — your first Upwork gig validates your profile; take a lower rate for the first one
5. **Raise rates every 3 months** — if you're fully booked, you're undercharging

### Exercise

Build your rate card:
- Hourly rate: $__
- Fixed-price: RAG demo $__, Agent workflow $__, Consultation $__/hr
- Monthly retainer: $__
- Minimum engagement: $__
- Walk-away minimum (below which you say no): $__

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
- [ ] Can answer all 10 interview questions from memory without notes
- [ ] Walk-away number + rate card written and saved
- [ ] 3 engagement types priced (hourly, fixed, retainer)

**Estimated time to checkpoint:** 16-20 hours over 2 weeks, plus ongoing applications.

---

## Final Words

You already run production systems on Hetzner with ChromaDB, FastAPI, LangGraph, and MCP. The gap isn't technical — it's that the output is scattered across a course repo and personal infra, not packaged as a portfolio.

These 6 phases close that gap. At the end, a recruiter opens your profile and sees: "AI Agent Engineer" → "LangGraph, RAG, FastAPI, MCP" → "Live demo at rag-demo.apexpillar.tech" → "Open-source pipeline on GitHub."

That's what converts. Not another course. Not another certification. A live, documented, production system.

Go build it.

[Back to Index](00-index.md) | [Day-by-Day Schedule](07-day-by-day-plan.md)
