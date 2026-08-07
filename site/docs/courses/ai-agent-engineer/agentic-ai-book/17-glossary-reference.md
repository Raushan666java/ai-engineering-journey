---
id: 17-glossary-reference
slug: /ai-agent-engineer/agentic-ai-book/17-glossary-reference
title: "17-glossary-reference"
sidebar_label: "17-glossary-reference"
sidebar_position: 18
---
## Chapter 17: Glossary & Reference

**Agent** — A system where an LLM decides actions (tool calls) in a loop based on observed results, rather than producing a single one-shot response.

**Agentic RAG** — Retrieval-augmented generation where the decision to retrieve, what to retrieve, and whether retrieval was sufficient are all dynamic decisions made by the model, not a fixed pipeline step.

**Checkpointing** — Persisting an agent's state (usually via LangGraph) so a run can be paused and resumed, surviving restarts.

**Context window** — The total text (system prompt + conversation + tool results) the model sees on a given call; the entire "world" the model knows about at that moment.

**Conditional edge** (LangGraph) — A branch in the state graph, deciding which node runs next based on the current state.

**Guardrail** — Any validation, rate limit, or approval gate that prevents an agent from taking an unsafe or incorrect action, independent of what the model "decided."

**Human-in-the-loop** — A deliberate pause point where a human must approve an agent's proposed action before it executes, typically for irreversible actions.

**LLM-as-judge** — Using a separate LLM call to score/evaluate another LLM's (or agent's) output against defined criteria, used in evaluation pipelines.

**MCP (Model Context Protocol)** — A standard protocol for exposing tools/resources ("MCP servers") so any compatible AI client can discover and use them without custom per-client integration.

**Multi-agent system** — An architecture where multiple distinct agents (each with their own tools/context/prompt) collaborate, typically via a supervisor/router or fixed pipeline pattern.

**Prompt injection** — An attack where instructions hidden in untrusted content (a webpage, document, email) the agent reads are crafted to hijack its behavior.

**ReAct (Reason + Act)** — The foundational agent pattern: alternating between reasoning about what to do and acting via tool calls, observing results, repeating until done.

**State graph** (LangGraph) — A graph of nodes (functions) and edges (control flow) that a shared state object flows through, replacing a hand-rolled loop with an explicit, composable structure.

**Subgraph** — A compiled LangGraph graph used as a single node inside a larger parent graph; the mechanism for building multi-agent systems in LangGraph.

**Tool** — A function the model can request be called (via a structured `tool_use` output); the model never executes it directly — your code does, then feeds the result back.

**Tool calling / function calling** — The API mechanism by which a model, instead of (or alongside) producing text, outputs a structured request to invoke a named function with specific arguments.

**Trajectory evaluation** — Checking whether an agent took the *correct sequence of actions* to reach an answer, as distinct from checking only the final answer's correctness.

**Working memory** — The current task's in-progress context (messages + tool results) held in the context window for the duration of a single run.

---

## Closing Note

Everything in this book collapses to one idea, restated once more so it never gets lost under framework names: **an agent is an LLM making decisions in a loop, using tools, checked by guardrails, and measured by evaluation.** LangGraph, MCP, multi-agent patterns — all of it is infrastructure in service of that one loop, built more carefully as the stakes go up. Build the hand-rolled loop first (Chapter 5) before trusting any framework's abstraction of it — everything else in this book will make more sense once that loop is intuition, not theory.

Good luck with the ApexERP capstone — it's a genuinely strong, differentiated portfolio piece for where you're positioning yourself in the market.

