## Chapter 2: How LLMs Actually Work (Just Enough to Build Agents)

You don't need to understand transformer internals to build agents, but you need to understand these specific mechanics or you'll fight the framework instead of using it.

### 2.1 The Model Only Sees Text (Structured Text)

Every LLM API call — including tool calls — is fundamentally text in, text out. "Tool calling" is not a special mode where the model directly executes code. It's a convention: the API asks the model to produce output in a very specific structured format (JSON describing a function name + arguments), and *your code* is what actually runs it.

This matters because it demystifies the whole system: the model has been trained to recognize "here's a list of tools I could use" in the system prompt, and to output a structured `tool_use` block instead of prose when it decides a tool is the right next step. Nothing more mystical than that.

### 2.2 The Context Window Is the Entire World

At any point in an agent loop, the model knows *only* what's in its context window: the system prompt, the conversation so far, and all tool results fed back in. It has no memory outside this — every single loop iteration, you're re-sending the entire history.

This has two big engineering implications:
1. **Cost scales with history length** — a 20-turn agent loop resends the first 19 turns every single time (that's how the chat/completion API works — it's stateless per call). This is the primary cost driver in production agents.
2. **Long agent runs need context management** — summarizing or pruning old tool results, or the context window fills up and quality degrades.

### 2.3 Determinism vs. Non-Determinism

LLMs are (mostly) non-deterministic — same input can give different outputs across calls, especially at higher "temperature" settings. For agents, this means:
- The exact same task might take a different path (different tool call order) on different runs.
- You cannot rely on 100% reproducible behavior — this is *why* evaluation (Chapter 13) and guardrails (Chapter 12) matter so much more for agents than for traditional software.
- For anything requiring strict determinism (e.g., financial calculations), don't ask the model to compute — give it a `calculator` tool and let deterministic code do the math.

### 2.4 What "Reasoning" Actually Means Here

When people say an agent "reasons," they mean: the model generates intermediate text (sometimes hidden, sometimes shown) that walks through its thinking before committing to an action. This is why prompting agents well (Chapter 3) matters so much — you're not just asking for an answer, you're shaping *how the model thinks through the decision*.

---

