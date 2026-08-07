---
id: 16-case-studies-failure-patterns
slug: /ai-agent-engineer/agentic-ai-book/16-case-studies-failure-patterns
title: "16-case-studies-failure-patterns"
sidebar_label: "16-case-studies-failure-patterns"
sidebar_position: 17
---
## Chapter 16: Case Studies & Failure Patterns

Real patterns you will hit — recognizing them quickly saves days of confused debugging.

### 16.1 "The Agent Keeps Calling the Same Tool"

**Symptom:** Loop calls `search_product_docs` five times with slightly different queries, never converging on an answer.
**Usual cause:** The tool's results are genuinely not answering the question (a real knowledge gap), but nothing tells the agent it's okay to give up.
**Fix:** Explicit instruction: "If after 3 search attempts you still don't have enough information, tell the user you don't have an answer rather than continuing to search." Add the repeat-call guard from Chapter 5.4 as a hard backstop.

### 16.2 "The Agent Called the Wrong Tool"

**Symptom:** User asks about a refund; agent calls `get_order_status` instead of `get_payment_history`.
**Usual cause:** Overlapping/vague tool descriptions.
**Fix:** Tighten descriptions with explicit disambiguation ("use X for Y, NOT for Z — use W for Z instead"), per Chapter 3.2. Add a few-shot example showing the correct choice for an ambiguous-sounding query.

### 16.3 "Works in Testing, Breaks in Production"

**Usual cause:** Your test queries were cleaner/more well-formed than real user input. Real customers type vague, typo-ridden, multi-intent messages your test set never covered.
**Fix:** Once live, continuously sample real production transcripts into your evaluation test set (Chapter 13) — this is not a one-time build step, it's an ongoing process.

### 16.4 "Costs Are Way Higher Than Expected"

**Usual cause:** No iteration cap was hit in testing (short/easy test queries), but real queries trigger much longer chains, or context isn't being trimmed and grows unboundedly across a long conversation.
**Fix:** Log token usage per run (Chapter 11.2) from day one so cost anomalies are visible immediately, not discovered on a monthly bill.

### 16.5 "The Multi-Agent System Is Slower and Worse Than a Single Agent Was"

**Usual cause:** Task didn't actually need multi-agent — the overhead of routing + handoffs added latency and cost without adding correctness, because a single agent with well-scoped tools could have handled the branching just fine via its own reasoning.
**Fix:** Revisit Chapter 9.1 — this is the single most common over-engineering mistake in agentic systems. Default back to one agent unless you have a concrete reason (genuinely conflicting personas/contexts) that a single system prompt can't express.

### 16.6 "Agent Did Something It Shouldn't Have"

**Usual cause:** Missing guardrail — no validation layer, no human-approval gate on an irreversible action, or a prompt-injection vector via untrusted retrieved content.
**Fix:** This is a Chapter 12 gap. Treat this category of failure as a stop-ship issue, not a "we'll fix it later" — the entire point of guardrails is to catch exactly this before it reaches production.

---

