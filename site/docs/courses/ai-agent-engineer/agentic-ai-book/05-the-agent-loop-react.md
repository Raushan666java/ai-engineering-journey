---
id: 05-the-agent-loop-react
slug: /ai-agent-engineer/agentic-ai-book/05-the-agent-loop-react
title: "05-the-agent-loop-react"
sidebar_label: "05-the-agent-loop-react"
sidebar_position: 6
---
## Chapter 5: The Agent Loop (ReAct) — Hand-Built

### 5.1 Why "ReAct"

ReAct (Reason + Act) is the foundational pattern: the model alternates between **reasoning** (thinking about what to do) and **acting** (calling a tool), observing the result, and reasoning again — until it decides it has enough to answer.

### 5.2 The Loop, In Full

```python
import anthropic

client = anthropic.Anthropic()

def run_agent(user_message, tools, tool_executor, max_iterations=10):
    messages = [{"role": "user", "content": user_message}]

    for iteration in range(max_iterations):
        response = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=1024,
            tools=tools,
            messages=messages
        )

        messages.append({"role": "assistant", "content": response.content})

        # Stopping condition: no tool call means the model is done reasoning
        if response.stop_reason != "tool_use":
            final_text = "".join(b.text for b in response.content if b.type == "text")
            return final_text

        # Otherwise, execute every tool call the model requested this turn
        tool_results = []
        for block in response.content:
            if block.type == "tool_use":
                try:
                    result = tool_executor(block.name, block.input)
                except Exception as e:
                    result = {"error": str(e)}

                tool_results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": str(result)
                })

        messages.append({"role": "user", "content": tool_results})

    return "Max iterations reached without a final answer."
```

Walk through what this does, line by line, until it's fully intuitive:
1. Start with the user's message.
2. Call the model.
3. If the model didn't ask for a tool → it's done, return its text.
4. If it did ask for a tool → run it, append the result, loop back to step 2.
5. Hard-cap at `max_iterations` so a confused agent can't run forever.

This ~30-line function *is* an agent. Everything LangGraph gives you later is convenience on top of this exact shape.

### 5.3 Multi-Tool Reasoning Chains

With 3-4 tools available, the model will naturally chain calls across iterations of this loop: e.g., "check order status" → sees it's overdue → "get customer contact" → "send notification." You don't program this sequence — it emerges from the model reasoning about the goal at each iteration, given what it's learned from previous tool results.

### 5.4 Error Handling in the Loop

Two categories of failure, handled differently:

- **Tool execution errors** (API down, invalid input) — feed the error back as a `tool_result` so the model can adapt (retry with different params, try a different tool, or give up gracefully).
- **Loop-level errors** (max iterations hit, model stuck repeating the same failing call) — these need a hard circuit breaker in your orchestration code, not something you can prompt your way out of. Track repeated identical tool calls and break the loop if the same call fails 2-3 times in a row.

```python
def run_agent_with_repeat_guard(user_message, tools, tool_executor, max_iterations=10):
    messages = [{"role": "user", "content": user_message}]
    recent_calls = []

    for iteration in range(max_iterations):
        response = client.messages.create(
            model="claude-sonnet-4-6", max_tokens=1024, tools=tools, messages=messages
        )
        messages.append({"role": "assistant", "content": response.content})

        if response.stop_reason != "tool_use":
            return "".join(b.text for b in response.content if b.type == "text")

        tool_results = []
        for block in response.content:
            if block.type == "tool_use":
                call_signature = (block.name, str(block.input))
                recent_calls.append(call_signature)
                if recent_calls[-3:].count(call_signature) >= 3:
                    return "Agent stuck repeating the same call — stopping to avoid a loop."

                try:
                    result = tool_executor(block.name, block.input)
                except Exception as e:
                    result = {"error": str(e)}
                tool_results.append({"type": "tool_result", "tool_use_id": block.id, "content": str(result)})

        messages.append({"role": "user", "content": tool_results})

    return "Max iterations reached."
```

### 5.5 Milestone Project for This Chapter

Build the ApexERP-style agent: 3-4 tools (`query_order`, `calculate_days_overdue`, `send_notification`, `search_docs`), and give it the task: *"Check if order #4521 is overdue and notify the customer if so."* Watch it autonomously chain 2-3 tool calls to complete the task, entirely in your own ~150-line loop, no framework.

---

