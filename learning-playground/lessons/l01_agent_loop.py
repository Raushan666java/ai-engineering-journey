"""Lesson 1 — The raw agent loop. No framework.

    python lessons/l01_agent_loop.py "What's the weather in Pune and Mumbai?"

What to notice:
  1. `messages` is the ENTIRE memory. The model is stateless.
  2. We append the assistant's tool-call message BEFORE the results.
  3. Tool errors are returned as data, not raised.
  4. `max_steps` is the only thing preventing an infinite loop.
"""

import json
import sys

from common import MODEL, estimate_cost, log_step, make_client

# ---- The tools: plain functions. The model never runs these. ----


def get_weather(city: str) -> str:
    fake = {"pune": "31C, humid", "mumbai": "29C, rain", "delhi": "38C, dry"}
    return fake.get(city.strip().lower(), f"No weather data for {city}")


def get_order_status(order_id: str) -> str:
    fake = {"A100": "shipped, arriving in 2 days", "B200": "packed, not shipped"}
    return fake.get(order_id.upper(), f"Order {order_id} not found")


# ---- What the model reads ----


TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get current weather for a city.",
            "parameters": {
                "type": "object",
                "properties": {"city": {"type": "string", "description": "City name"}},
                "required": ["city"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "get_order_status",
            "description": "Look up the shipping status of an order by its ID.",
            "parameters": {
                "type": "object",
                "properties": {"order_id": {"type": "string", "description": "Order ID, e.g. A100"}},
                "required": ["order_id"],
            },
        },
    },
]

# ---- What YOUR code executes (never trust the model's name string) ----

REGISTRY = {"get_weather": get_weather, "get_order_status": get_order_status}


def run_agent(user_message: str, max_steps: int = 6) -> str:
    client = make_client()
    messages = [
        {"role": "system", "content": "You are a helpful assistant. Use tools when needed."},
        {"role": "user", "content": user_message},
    ]
    total_in = total_out = 0

    for step in range(1, max_steps + 1):
        resp = client.chat.completions.create(
            model=MODEL,
            messages=messages,
            tools=TOOLS,
        )
        total_in += resp.usage.prompt_tokens
        total_out += resp.usage.completion_tokens

        msg = resp.choices[0].message
        log_step(
            {"step": step, "tool_calls": [c.function.name for c in (msg.tool_calls or [])],
             "finish_reason": resp.choices[0].finish_reason},
            "l01",
        )

        # No tool calls -> final answer
        if not msg.tool_calls:
            print(f"\n[agent] done in {step} step(s) | tokens in/out: {total_in}/{total_out}"
                  f" | ~${estimate_cost(MODEL, total_in, total_out):.6f}")
            return msg.content or ""

        # REQUIRED: the assistant message must be in history before its tool results
        messages.append(msg)

        for call in msg.tool_calls:
            name = call.function.name
            try:
                args = json.loads(call.function.arguments or "{}")
            except json.JSONDecodeError:
                args = {}

            print(f"[tool] {name}({args})")

            fn = REGISTRY.get(name)
            if fn is None:
                result = f"ERROR: unknown tool '{name}'"
            else:
                try:
                    result = fn(**args)
                except Exception as e:  # errors are data, not crashes
                    result = f"ERROR: {type(e).__name__}: {e}"

            print(f"[result] {result}")
            log_step({"step": step, "tool": name, "args": args, "result": str(result)}, "l01")

            messages.append({
                "role": "tool",
                "tool_call_id": call.id,
                "content": str(result),
            })

    return f"Stopped: hit max_steps={max_steps} without a final answer."


if __name__ == "__main__":
    question = " ".join(sys.argv[1:]) or "What's the weather in Pune and the status of order A100?"
    print(f"\n[user] {question}")
    print("\n" + run_agent(question) + "\n")
