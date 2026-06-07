# Phase 5 — AI Agents

**Duration:** 2 Weeks (Sep 2026)
**Daily:** 5 hours | **Goal:** Production AI agents

---

## Why Agents > Simple RAG?

```
Simple RAG:
User → Retrieve → Generate → Answer
                                   
Agent:
User → Observe → Think → Act → Observe → Think → Act → Answer
        │         │       │        │
        ▼         ▼       ▼        ▼
    Question   "Need   Query   "Result hai,
    aaya      DB?"    DB      ab email bhej"
```

### Agent vs RAG

| Feature | RAG | Agent |
|---------|-----|-------|
| Complexity | Low | Medium-High |
| Tools | None (just retrieval) | Multiple tools |
| Decision Making | None | LLM decides what to do |
| Error Recovery | Manual | Automatic (retry, fallback) |
| Multi-step | No | Yes |
| State Management | Stateless | Stateful |
| Token Cost | Low | Higher |
| When to Use | Simple Q&A | Complex workflows |

---

## Agent Loop

```
Observe: User message + current state + memory
    │
    ▼
Think: "Mujhe kya karna chahiye?"
    │   → Database query karna hai?
    │   → Email bhejna hai?
    │   → Report generate karni hai?
    ▼
Act: Execute the chosen action (tool call)
    │
    ▼
Observe: Tool result
    │
    ▼
Think: "Kya answer ready hai?"
    │   → Yes → Return to user
    │   → No → Next action
    ▼
[Loop until done]
```

---

## Agent Types

### 1. ReAct (Reason + Act)

```
Most popular pattern.
LLM thinks step-by-step, then acts.

Thought: I need to find Q4 sales
Action: query_database("SELECT SUM(revenue) FROM sales WHERE quarter='Q4'")
Observation: $1.2M
Thought: Got the number. Now I should present it.
Final Answer: Q4 2024 mein $1.2M revenue hua
```

### 2. Plan-and-Execute

```
Pehle poora plan banao, phir execute karo.

Plan:
1. query_database → get Q4 sales
2. get_report_template → format the data
3. send_email → send to raushan@apexpillar.com

Execution: Step by step, with error handling
```

### 3. Reflection

```
Agent apne actions ko reflect karta hai.

Action: Query failed (invalid SQL)
Reflection: "Galat SQL generate hui. Schema check karna chahiye tha."
Next Action: get_schema → generate correct SQL → retry
```

### 4. Tool-Using Agent

```
Agent ke paas tools hain:
→ Calculator
→ Database
→ Email
→ Calendar
→ Web Search

LLM decides which tool to use based on user request.
```

---

## Production Concerns

| Concern | Solution |
|---------|----------|
| Token Costs | Limit iterations, use cheaper models for simple tasks |
| Error Recovery | Retry logic, fallback responses, human escalation |
| Infinite Loops | max_iterations, early stopping |
| Hallucination | Tool output grounding, fact-checking |
| Latency | Streaming responses, async execution |
| Security | Input validation, tool permissions, audit logs |
| Human Oversight | Human-in-the-loop for critical actions |

---

## 2-Week Plan

| Week | Focus | Topics |
|------|-------|--------|
| 01 | Memory Systems | Short/long-term memory, VectorStoreMemory, custom memory |
| 02 | Production Agents | Tools, AgentExecutor, HITL, tracing, LangGraph advanced |

---

## Prerequisites

- Phase 4 RAG complete
- LangChain comfortable hai
- FastAPI experience
- Basic async Python

---

## Completion Criteria

- [ ] Agent loop concept clear hai
- [ ] Memory systems implement kiye (4 types)
- [ ] Custom memory class banaya
- [ ] Production agent with tools deployed
- [ ] Human-in-the-loop working
- [ ] LangSmith tracing active
- [ ] LangGraph advanced setup
- [ ] **ApexERP Agent project live hai**

---

## Weeks

- [Week 1 — Memory Systems](week-01/index.md)
- [Week 2 — Production Agents](week-02/index.md)
- [Project — ApexERP AI Agent](projects/apexerp-agent.md)
