---
id: 04-tool-calling
slug: /ai-agent-engineer/agentic-ai-book/04-tool-calling
title: "Part II — Building Blocks"
sidebar_label: "Part II — Building Blocks"
sidebar_position: 5
---
# Part II — Building Blocks

## Chapter 4: Tool Calling From First Principles

### 4.1 The Anatomy of a Tool Call

Every tool-calling API (Anthropic, OpenAI, etc.) follows the same basic shape:

**Step 1 — You define tools as JSON schemas** and pass them alongside the messages:

```python
tools = [
    {
        "name": "get_weather",
        "description": "Get current weather for a city. Use this when the user asks about weather, temperature, or whether to carry an umbrella.",
        "input_schema": {
            "type": "object",
            "properties": {
                "city": {"type": "string", "description": "City name, e.g. 'Patna'"}
            },
            "required": ["city"]
        }
    }
]
```

**Step 2 — You send a message and get back either text OR a tool_use block:**

```python
import anthropic

client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    tools=tools,
    messages=[{"role": "user", "content": "Should I carry an umbrella in Patna today?"}]
)

# response.content is a list of blocks. Could be text, could be tool_use, could be both.
for block in response.content:
    print(block.type)  # "text" or "tool_use"
```

**Step 3 — If it's a tool_use block, YOU execute the function:**

```python
if response.stop_reason == "tool_use":
    tool_call = next(b for b in response.content if b.type == "tool_use")
    tool_name = tool_call.name          # "get_weather"
    tool_input = tool_call.input        # {"city": "Patna"}
    tool_id = tool_call.id

    # This is YOUR code. The API never runs this — you decide what happens.
    if tool_name == "get_weather":
        result = actually_call_weather_api(tool_input["city"])
```

**Step 4 — You send the result back to the model in a follow-up message:**

```python
follow_up = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    tools=tools,
    messages=[
        {"role": "user", "content": "Should I carry an umbrella in Patna today?"},
        {"role": "assistant", "content": response.content},  # the tool_use block
        {"role": "user", "content": [
            {
                "type": "tool_result",
                "tool_use_id": tool_id,
                "content": str(result)
            }
        ]}
    ]
)

print(follow_up.content[0].text)  # the model's final natural-language answer
```

That's it. That's the entire mechanism. Every framework — LangChain, LangGraph, CrewAI — is a wrapper around exactly this four-step exchange, repeated in a loop.

### 4.2 Multiple Tools, Model Chooses

Add more tools to the `tools` list, and the model picks which one(s) to call based on the descriptions. It can even request multiple tool calls in a single turn if the task needs it (e.g., "check the weather AND check my calendar").

```python
tools = [
    {"name": "get_weather", "description": "...", "input_schema": {...}},
    {"name": "get_calendar_events", "description": "Get the user's events for a given date.", "input_schema": {...}},
    {"name": "calculate", "description": "Evaluate a math expression. Use for any arithmetic instead of computing yourself.", "input_schema": {...}},
]
```

### 4.3 Parameter Validation — Don't Trust the Model Blindly

The model can and will occasionally produce malformed or nonsensical tool inputs (wrong types, missing required fields, out-of-range values). Always validate before executing:

```python
def execute_tool(name, input_data):
    if name == "get_order_status":
        order_id = input_data.get("order_id")
        if not order_id or not str(order_id).isdigit():
            return {"error": "Invalid order_id — must be a numeric string."}
        return query_order_status(order_id)
```

Feeding a clear error back (rather than crashing) lets the model self-correct on the next turn — this is a core agentic reliability pattern, not an edge case.

### 4.4 Milestone Project for This Chapter

Build a single-tool weather+advice agent exactly as shown above, but print out every raw API response so you can literally watch the tool_use block appear, get executed, and get fed back. Do this before moving to Chapter 5 — seeing the raw JSON exchange is what makes the loop concept concrete instead of abstract.

---

