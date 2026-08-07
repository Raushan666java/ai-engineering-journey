---
id: 03-prompting-for-agents
slug: /ai-agent-engineer/agentic-ai-book/03-prompting-for-agents
title: "03-prompting-for-agents"
sidebar_label: "03-prompting-for-agents"
sidebar_position: 4
---
## Chapter 3: Prompting for Agents vs. Prompting for Chat

### 3.1 The System Prompt Is Now an Operating Manual

In a chat app, your system prompt sets tone and persona. In an agent, the system prompt is closer to **onboarding documentation for a new employee**: what tools exist, when to use each one, what NOT to do, how to handle errors, and when to ask for human help instead of guessing.

A weak agent system prompt:
```
You are a helpful assistant with access to tools. Use them when needed.
```

A production-grade agent system prompt has:
- **Role and scope** — what this agent is for, and explicitly what it is *not* for
- **Tool usage rules** — "Always check order status before offering a refund. Never call `send_email` more than once per conversation without explicit confirmation."
- **Failure handling** — "If a tool call fails twice, stop and report the error instead of retrying indefinitely."
- **Escalation criteria** — "If the customer is angry or the issue involves more than ₹5000, hand off to a human."
- **Output format constraints** — especially important when the agent's final answer feeds into another system (JSON schema, etc.)

### 3.2 Describing Tools Well Is Half the Battle

The model decides *when* to call a tool almost entirely based on the tool's name and description. Vague tool descriptions cause two failure modes: the model never calls a tool it should, or it calls the wrong tool.

Bad:
```json
{"name": "get_data", "description": "Gets data"}
```

Good:
```json
{
  "name": "get_order_status",
  "description": "Look up the current status (pending, shipped, delivered, cancelled) and expected delivery date for a customer order, given the order ID. Use this whenever a customer asks 'where is my order' or asks about delivery timing. Do not use this for payment or refund questions — use get_payment_status instead."
}
```

Notice: the description tells the model *when* to use it and *when not to* (disambiguating from a similar tool). This single habit fixes the majority of "wrong tool called" bugs in practice.

### 3.3 Few-Shot Examples for Agent Behavior

Just like chat prompting, showing 1-2 examples of a full tool-call sequence (user message → tool call → tool result → next tool call → final answer) dramatically improves reliability, especially for multi-step tasks. This is more important for agents than for plain chat because the "shape" of correct multi-step behavior is harder to specify in prose alone.

### 3.4 Prompting for Self-Correction

A key agentic pattern: instead of assuming the first tool result is correct/sufficient, explicitly instruct the model to evaluate it:

```
After retrieving search results, check whether they actually answer the
user's question. If not, rewrite your search query and try again
(maximum 3 attempts) before telling the user you couldn't find an answer.
```

This single instruction is the seed of "agentic RAG" (Chapter 8) — the difference between naive retrieve-then-generate and a system that notices bad retrieval and fixes it.

---

*(Continued in Part II — Building Blocks)*

