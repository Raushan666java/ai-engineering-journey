# Part V — Applied

## Chapter 15: Capstone — Building a Production Support Agent

This chapter walks through building the **ApexERP Support Agent** end to end, combining every concept from the book into one real system. Treat this as your reference build.

### 15.1 The Spec

**Goal:** An agent that handles incoming customer support queries for an ApexERP client — triaging the query, answering from docs/knowledge base when possible, checking real order/billing data when needed, and drafting (never auto-sending) any customer-facing message for human approval.

**Explicitly out of scope (know your boundaries):** the agent never directly modifies payment records, never sends a customer communication without approval, and hands off to a human immediately for anything involving anger/escalation keywords or amounts above a threshold.

### 15.2 Architecture

```
Customer query
      │
      ▼
┌─────────────┐
│  Supervisor  │ ── classifies: BILLING / TECHNICAL / SALES / ESCALATE
└──────┬──────┘
       │
   ┌───┴────┬─────────────┬──────────────┐
   ▼         ▼             ▼              ▼
Billing   Technical      Sales        Human handoff
Agent     Agent          Agent        (escalation queue)
   │         │             │
   │         │ (agentic RAG over docs)
   │         │
   └─────────┴─────────────┘
             │
             ▼
     Draft response
             │
             ▼
   Human approval gate (interrupt_before)
             │
             ▼
      Send via Laravel API
```

### 15.3 Tools Needed

| Tool | Backing system | Used by |
|---|---|---|
| `get_order_status` | Laravel API | Billing agent |
| `get_payment_history` | Laravel API | Billing agent |
| `search_product_docs` | ChromaDB | Technical agent |
| `search_past_tickets` | ChromaDB | Technical agent |
| `get_pricing_info` | Laravel API / static docs | Sales agent |
| `draft_customer_message` | LLM call, no external effect | All agents |
| `escalate_to_human` | Writes to a queue/DB table | Supervisor |

### 15.4 Build Order (Map to Chapters)

1. **Chapter 4-5**: Build each specialist as a standalone hand-rolled ReAct loop first, test independently.
2. **Chapter 7**: Port each specialist to a LangGraph subgraph with checkpointing.
3. **Chapter 8**: Add agentic RAG (grading + retry) to the Technical agent specifically — this is the one most prone to weak retrieval on vague customer phrasing.
4. **Chapter 9**: Build the supervisor graph wiring all specialists together.
5. **Chapter 10**: Expose `get_order_status`, `get_payment_history`, `get_pricing_info` as an MCP server against your actual ApexERP Laravel backend — this makes the tools reusable beyond just this one agent (e.g., also usable from Claude Desktop for your own internal debugging).
6. **Chapter 12**: Add input validation on every tool, the `interrupt_before` human-approval gate on `send_customer_message`, and escalation keyword detection.
7. **Chapter 11**: Wire up Postgres logging for every run.
8. **Chapter 13**: Build a 20-case test set covering all three categories + escalation triggers, run it before every deploy.
9. **Chapter 14**: Deploy on your Hetzner VPS behind FastAPI, expose to n8n as an HTTP node for triggering from existing workflows (e.g., new-ticket-created webhook).

### 15.5 What "Done" Looks Like

A working system where: a real (or realistic test) support query comes in, gets correctly routed to the right specialist, retrieves accurate information (with self-correction if the first retrieval attempt is weak), drafts a response, and stops for human approval before anything reaches the customer — all logged, all testable, all deployed and callable from your existing n8n infrastructure.

**This is your portfolio piece.** Document it with an architecture diagram, a short case-study write-up (you've done this before for other projects), and be ready to walk through the design decisions — especially *why* you chose supervisor-pattern multi-agent over a single monolithic agent, and *why* the human-approval gate exists — in an interview. Interviewers for AI Automation Engineer roles care far more about *why you made these tradeoffs* than about which framework you used.

---

