---
id: 09-multi-agent-systems
slug: /ai-agent-engineer/agentic-ai-book/09-multi-agent-systems
title: "09-multi-agent-systems"
sidebar_label: "09-multi-agent-systems"
sidebar_position: 10
---
## Chapter 9: Multi-Agent Systems

### 9.1 When You Actually Need This (And When You Don't)

**Default assumption: you don't need multi-agent.** A single well-designed agent with good tools, clear prompting, and a solid loop handles most real tasks. Multi-agent adds complexity — more moving parts, harder debugging, higher cost (every agent-to-agent handoff is more LLM calls) — and it's only worth that cost when sub-tasks genuinely need **different context, different tools, or different "personas"** that would otherwise conflict if crammed into one system prompt.

Good signal you need multi-agent: your single agent's system prompt has ballooned into "if the question is about billing, act like X; if it's about tech support, act like Y; if it's about sales, act like Z" — that's a sign the task wants to be split into specialists.

### 9.2 Core Patterns

**Supervisor / Orchestrator** — one "router" agent classifies the incoming task and delegates to the right specialist sub-agent, then (optionally) a final agent formats the combined response. This is the most common and most production-friendly pattern.

```
                    ┌─────────────┐
   user query  ──►  │  Supervisor  │
                    └──────┬──────┘
                           │ classifies & routes
              ┌────────────┼────────────┐
              ▼            ▼            ▼
        ┌──────────┐ ┌───────────┐ ┌──────────┐
        │ Billing   │ │ Technical │ │  Sales   │
        │ Agent     │ │ Agent     │ │  Agent   │
        └──────────┘ └───────────┘ └──────────┘
```

**Pipeline** — agents run in a fixed sequence, each one's output feeding the next (e.g., Researcher → Writer → Fact-Checker). Less flexible than a supervisor pattern but more predictable and cheaper — good when the workflow genuinely is always the same sequence of stages.

**Debate / Critique** — two agents check each other's work (e.g., a "generator" and a "critic" that reviews the generator's output and sends it back for revision if flawed). Useful for higher-stakes generation tasks (legal, financial) where a single pass isn't trustworthy enough.

### 9.3 Building a Supervisor in LangGraph

Since each "agent" is just a compiled subgraph, a supervisor is a parent graph that routes to subgraphs:

```python
def supervisor_router(state):
    classification = client.messages.create(
        model="claude-sonnet-4-6", max_tokens=20,
        messages=[{"role": "user", "content": f"Classify as BILLING, TECHNICAL, or SALES: {state['query']}"}]
    )
    return classification.content[0].text.strip()

parent_graph = StateGraph(SupervisorState)
parent_graph.add_node("billing_agent", billing_subgraph)
parent_graph.add_node("technical_agent", technical_subgraph)
parent_graph.add_node("sales_agent", sales_subgraph)
parent_graph.add_conditional_edges(
    "router", supervisor_router,
    {"BILLING": "billing_agent", "TECHNICAL": "technical_agent", "SALES": "sales_agent"}
)
```

Each sub-agent (`billing_subgraph`, etc.) is built exactly like the single-agent graph from Chapter 7 — own tools, own system prompt, own scope. The supervisor never sees the sub-agents' internal tool calls, only their final output, which keeps the top-level context clean.

### 9.4 Framework Landscape (Survey, Not Deep-Dive)

- **CrewAI** — role-based ("Researcher," "Writer" as named roles with backstories); fastest to prototype, less flexible for complex control flow.
- **AutoGen** (Microsoft) — conversation-driven, agents literally "chat" with each other in a group chat abstraction; good for exploratory/research-style multi-agent tasks.
- **LangGraph subgraphs** — most control, same mental model as everything you've already learned in Chapter 7, generally the better choice for production systems where you need checkpointing, human-in-the-loop, and precise control flow.

For your production use cases (ApexERP, etc.), stick with LangGraph subgraphs — the consistency with what you already know outweighs CrewAI's faster prototyping for anything you intend to actually deploy.

### 9.5 Milestone Project for This Chapter

Build a 3-agent supervisor system for ApexERP support: a router that classifies incoming queries into billing/technical/sales, a billing sub-agent (queries payment DB), a technical sub-agent (uses your Chapter 8 agentic RAG), and confirm queries get routed to the correct specialist with visibly different tool usage per branch.

---

