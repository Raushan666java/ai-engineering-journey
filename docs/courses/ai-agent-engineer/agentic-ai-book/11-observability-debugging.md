# Part IV — Production

## Chapter 11: Observability & Debugging Agents

### 11.1 Why This Is Harder Than Debugging Normal Code

A traditional bug: you can step through deterministic code and know exactly why line 47 produced the wrong output. An agent bug: the model made a *reasoning decision* that led to a wrong tool call — the "why" lives inside a non-deterministic model's output, not in code you wrote. You can't set a breakpoint inside an LLM's reasoning.

The fix isn't debugging harder — it's **logging everything so you can reconstruct what happened after the fact.**

### 11.2 What to Log, At Minimum

For every agent run, persist:
- The full input (user query, initial state)
- Every LLM call: exact prompt sent, exact response received, token counts, latency
- Every tool call: tool name, arguments, result, success/failure, latency
- The final output
- A run ID / trace ID tying it all together

```python
import json, time, uuid

def logged_tool_executor(name, input_data, trace_id):
    start = time.time()
    try:
        result = execute_tool(name, input_data)
        status = "success"
    except Exception as e:
        result = {"error": str(e)}
        status = "error"

    log_entry = {
        "trace_id": trace_id,
        "type": "tool_call",
        "tool": name,
        "input": input_data,
        "output": result,
        "status": status,
        "latency_ms": (time.time() - start) * 1000,
        "timestamp": time.time()
    }
    persist_log(log_entry)  # write to Postgres, or even just a JSONL file initially
    return result
```

### 11.3 Tools for This

- **LangSmith** (LangChain's tracing product) — plugs directly into LangGraph, gives you a visual trace of every node, tool call, and LLM call per run with minimal setup. Good starting point.
- **Roll-your-own** — a `agent_logs` table in Postgres (you already run this kind of infra) is entirely sufficient for a single-team production system, and gives you full control to build custom dashboards (e.g., "which tool fails most often," "average iterations per task type").

### 11.4 The Debugging Workflow in Practice

When an agent produces a wrong result: pull the full trace by `trace_id`, read through the sequence of LLM reasoning + tool calls in order, and find the exact turn where it went wrong — usually one of: (a) a bad tool description caused a wrong tool choice, (b) a tool returned malformed/misleading data the model reasonably-but-wrongly trusted, or (c) the system prompt didn't cover this edge case. The fix is almost always a prompt or tool-description change, not a "logic bug" in the traditional sense.

---

