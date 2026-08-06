## Chapter 6: Memory — Short-Term, Long-Term, and Working Memory

### 6.1 Three Kinds of Memory, Three Different Jobs

| Type | What it is | Where it lives | Example |
|---|---|---|---|
| **Working memory** | The current task's context — messages + tool results in this run | The `messages` list in RAM, sent every API call | The loop from Chapter 5 |
| **Short-term / session memory** | Conversation history across multiple user turns in one session | DB row keyed by session ID, reloaded each request | A chat session that remembers earlier in the conversation |
| **Long-term memory** | Knowledge that persists across sessions, potentially across users | Vector DB (your ChromaDB), relational DB, or a summary store | "Remembers" facts, documents, past resolutions |

### 6.2 Working Memory Management — The Real Production Problem

The `messages` list in the loop from Chapter 5 grows every iteration. For a long-running agent (many tool calls, or a long conversation), this causes two problems: cost (you resend the whole history every call) and quality degradation (too much irrelevant old context confuses the model).

**Mitigations:**
- **Summarization** — periodically replace older messages with an LLM-generated summary.
- **Sliding window** — keep only the last N turns in full, drop or summarize the rest.
- **Selective retention** — keep tool *results* that are still relevant to the current goal, drop ones that are resolved (e.g., once an order status has been checked and acted on, you don't need to keep re-sending the raw JSON in every future turn).

```python
def trim_history(messages, max_messages=20):
    if len(messages) <= max_messages:
        return messages
    # Keep the original user request + the most recent N turns
    return [messages[0]] + messages[-(max_messages - 1):]
```

### 6.3 Long-Term Memory — Where Your ChromaDB Work Plugs In

Long-term memory is usually implemented as **retrieval**: instead of stuffing everything into the context window, you store knowledge externally (vector DB for semantic search, relational DB for structured facts) and *retrieve* only what's relevant to the current task, injecting it into working memory just for this turn.

This is exactly your existing FastAPI + ChromaDB memory server — it already **is** a long-term memory system. What Chapter 8 (Agentic RAG) adds is making the *retrieval itself* a decision the agent makes dynamically, rather than a step that always runs.

### 6.4 Memory as a Tool

The cleanest way to give an agent long-term memory is to expose it as tools, same as any other capability:

```python
tools = [
    {"name": "remember", "description": "Store a fact for later recall across sessions.", "input_schema": {...}},
    {"name": "recall", "description": "Search stored memories relevant to the current topic.", "input_schema": {...}},
]
```

This lets the *model* decide when something is worth remembering and when it needs to look something up — rather than you hardcoding "always retrieve" or "always save," which is often wasteful or wrong.

### 6.5 Milestone Project for This Chapter

Add `remember` / `recall` tools to your Chapter 5 agent, backed by your existing ChromaDB server. Give it a multi-session task (e.g., across two separate runs of the script) and confirm it can recall a fact stored in a previous run — this is your first working long-term-memory agent.

---

*(Continued in Part III — Frameworks)*

