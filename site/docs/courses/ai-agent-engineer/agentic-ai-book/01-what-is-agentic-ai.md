---
id: 01-what-is-agentic-ai
slug: /ai-agent-engineer/agentic-ai-book/01-what-is-agentic-ai
title: "Part I — Foundations"
sidebar_label: "Part I — Foundations"
sidebar_position: 2
---
# Part I — Foundations

## Chapter 1: What Is Agentic AI, Really

### 1.1 The One-Sentence Definition

An **agent** is a system where a language model doesn't just produce text — it decides what to *do*, does it using tools, looks at what happened, and decides what to do next, in a loop, until a goal is reached or it gives up.

That's the whole concept. Everything else in this book — LangGraph, MCP, multi-agent orchestration — is infrastructure built around that one loop.

### 1.2 Why This Matters Now

For years, "using an LLM" meant: send a prompt, get text back, done. That's a **function**: `f(prompt) -> text`. It's stateless, single-shot, and the model has no way to affect the world beyond the words it outputs.

An agent turns the LLM into the **decision-making core of a program that can act**. The model doesn't write code that gets run later — it decides, turn by turn, "call this function with these arguments," and your program executes that call immediately and feeds the result back.

This is the shift from "LLM as autocomplete" to "LLM as the reasoning engine of a piece of software."

### 1.3 The Four Components

Every agentic system, no matter how fancy the framework, is built from four pieces:

**1. The Model (the brain)**
Does the reasoning: "given what I know and what I can do, what's the next best action?" This is Claude, GPT-4, Llama, etc. — whatever LLM you're calling.

**2. Tools (the hands)**
Functions the model can invoke: search the web, query a database, call an API, run code, send an email. The model doesn't execute these itself — it *requests* them, and your code runs them.

**3. Memory (the context)**
What the agent remembers:
- **Working memory** — the current conversation/task history, held in the context window
- **Long-term memory** — persisted knowledge across sessions (a vector DB like your ChromaDB setup, or a plain database)

**4. Control Flow / Orchestration (the loop)**
The logic that decides: after the model responds, do we call a tool? Do we ask the model again? Do we stop? This is what frameworks like LangGraph formalize as a "graph," but at its core it's just a loop with an if-statement.

### 1.4 A Spectrum, Not a Binary

"Agentic" isn't on/off — it's a spectrum of autonomy:

```
Fixed pipeline          Tool-augmented        ReAct loop           Planning agent        Multi-agent system
(your n8n flows,        single-turn            (multi-turn           (writes its own       (agents delegate
 hardcoded steps)       (one tool call,        reasoning + tool      multi-step plan       to other agents,
                        then answer)           calls, several        before acting)        each with its own
                                                rounds)                                     tools/context)

  Low autonomy  ────────────────────────────────────────────────────────────────►  High autonomy
  High predictability                                                              Low predictability
  Low cost per task                                                                High cost per task
```

**The engineering decision you make on every project: how far right on this spectrum do you actually need to go?**

A huge number of "agent" projects fail not because the model is bad, but because someone built a 5-agent multi-agent system for a task that a single well-designed tool-augmented call would have handled better, cheaper, and more predictably. Default to the *least* autonomous design that solves the problem. Add autonomy only when the task genuinely has unpredictable branching that a fixed pipeline can't handle.

### 1.5 Your Existing Work, Reframed

You already have the ingredients:

| Piece you have | Agentic AI equivalent |
|---|---|
| n8n workflows | Fixed pipeline — the *lowest* autonomy rung |
| FastAPI + ChromaDB RAG server | Long-term memory + one retrieval "tool" |
| MCP exploration | The protocol for exposing tools to agents |
| Laravel APIs (ApexERP, etc.) | The actual "world" an agent could act on |

What you're missing is the **loop** — the part where the model itself decides, dynamically, which tool to call and when, rather than you hardcoding the sequence in n8n. That's what the rest of this book builds, step by step.

### 1.6 Common Failure Modes (Know These Before You Build)

- **Infinite loops** — the agent keeps calling tools without ever deciding it's done. Always cap iterations.
- **Hallucinated tool calls** — the model invents a tool that doesn't exist, or passes malformed arguments. Validate everything before executing.
- **Context bloat** — every tool result gets appended to history; a long-running agent's context window fills up with old data, degrading reasoning quality and burning tokens.
- **Cost explosion** — each loop iteration is a full LLM call. A 10-step agent task can cost 10x a single chat response.
- **Silent wrong actions** — an agent confidently takes the wrong action (e.g., emails the wrong customer) because nothing forced a check. This is why guardrails (Chapter 12) aren't optional for anything touching real systems.

---

