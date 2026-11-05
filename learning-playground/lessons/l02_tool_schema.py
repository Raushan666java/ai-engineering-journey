"""Lesson 2 — Reliable tool calling.

    python lessons/l02_tool_schema.py

Lesson 1 works ~70% of the time. The other 30% is malformed arguments,
wrong tool names, and missing fields. This lesson fixes that with:

  1. Pydantic models as the single source of truth for arguments
  2. Schemas GENERATED from the models (never hand-written twice)
  3. A validation layer that returns machine-readable errors to the model
  4. One automatic retry when validation fails
"""

import json
import sys
from typing import Callable

from pydantic import BaseModel, Field, ValidationError

from common import MODEL, make_client

# ---------------------------------------------------------------- 1. Schemas


class WeatherArgs(BaseModel):
    """Arguments for get_weather."""

    city: str = Field(..., description="City name, e.g. Pune")
    units: str = Field("celsius", description="celsius or fahrenheit")


class OrderArgs(BaseModel):
    """Arguments for get_order_status."""

    order_id: str = Field(..., description="Order ID like A100", min_length=3)


# ---------------------------------------------------------------- 2. Tools


def get_weather(city: str, units: str = "celsius") -> str:
    data = {"pune": (31, 88), "mumbai": (29, 84), "delhi": (38, 100)}
    temp, humid = data.get(city.strip().lower(), (None, None))
    if temp is None:
        raise ValueError(f"no data for city '{city}'")
    if units.startswith("f"):
        temp = round(temp * 9 / 5 + 32)
    return f"{city}: {temp} degrees, {humid}% humidity"


def get_order_status(order_id: str) -> str:
    data = {"A100": "shipped, arriving in 2 days", "B200": "packed, not shipped"}
    if order_id.upper() not in data:
        raise LookupError(f"order {order_id} not found")
    return data[order_id.upper()]


# ---------------------------------------------------------------- 3. Registry

TOOL_DEFS: dict[str, tuple[type[BaseModel], str, Callable]] = {
    "get_weather": (WeatherArgs, "Get current weather for a city.", get_weather),
    "get_order_status": (OrderArgs, "Look up shipping status by order ID.", get_order_status),
}


def build_tools_spec() -> list[dict]:
    """Generate OpenAI tool schemas from the Pydantic models."""
    return [
        {
            "type": "function",
            "function": {
                "name": name,
                "description": description,
                "parameters": args_model.model_json_schema(),
            },
        }
        for name, (args_model, description, _) in TOOL_DEFS.items()
    ]


def call_tool(name: str, raw_args: str) -> str:
    """Validate, execute, and ALWAYS return a string. Never raise."""
    if name not in TOOL_DEFS:
        return f"ERROR: unknown tool '{name}'. Available: {sorted(TOOL_DEFS)}"

    args_model, _, fn = TOOL_DEFS[name]

    try:
        args = json.loads(raw_args or "{}")
    except json.JSONDecodeError as e:
        return f"ERROR: arguments were not valid JSON ({e}). Send a JSON object."

    try:
        parsed = args_model(**args)
    except ValidationError as e:
        # Compact, model-readable: it can fix these on the next turn.
        problems = "; ".join(
            f"{'.'.join(str(p) for p in err['loc'])}: {err['msg']}" for err in e.errors()
        )
        return f"ERROR: invalid arguments -> {problems}"

    try:
        return fn(**parsed.model_dump())
    except Exception as e:
        return f"ERROR: {type(e).__name__}: {e}"


# ---------------------------------------------------------------- 4. Loop


def run_agent(user_message: str, max_steps: int = 6) -> str:
    client = make_client()
    tools = build_tools_spec()
    messages = [
        {"role": "system", "content": "You are a helpful assistant. Use tools when needed."},
        {"role": "user", "content": user_message},
    ]

    for step in range(1, max_steps + 1):
        resp = client.chat.completions.create(model=MODEL, messages=messages, tools=tools)
        msg = resp.choices[0].message

        if not msg.tool_calls:
            return msg.content or ""

        messages.append(msg)

        for call in msg.tool_calls:
            print(f"[tool] {call.function.name}({call.function.arguments})")
            result = call_tool(call.function.name, call.function.arguments)
            print(f"[result] {result}")
            messages.append(
                {"role": "tool", "tool_call_id": call.id, "content": result}
            )

    return f"Stopped: hit max_steps={max_steps}."


if __name__ == "__main__":
    question = " ".join(sys.argv[1:]) or "Weather in Delhi in fahrenheit, and order Z999?"
    print(f"\n[user] {question}\n")
    print(run_agent(question))

# ---------------------------------------------------------------- Exercises
# 1. Add a `search_flights(origin, destination, date)` tool. Make `date` a
#    `datetime.date` field so bad dates are rejected before your code runs.
# 2. Deliberately make the model call a tool with a missing field. Confirm the
#    error message tells it exactly what to fix.
# 3. Add a retry: if `call_tool` returns "ERROR: invalid arguments", re-ask the
#    model once with the error before executing anything else.
# 4. Log every call_tool result to runs/l02.jsonl with log_step().
