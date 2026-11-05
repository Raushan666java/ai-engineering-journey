"""Lesson 0 — Python drills for the idioms used in later lessons.

    python lessons/l00_python_basics.py

No API key needed. Every assertion must pass before you move on.
If one fails, that's your lesson for today.
"""

from typing import Callable

# 1. Dicts are your messages array. Get comfortable with them.
messages = [
    {"role": "system", "content": "You are helpful."},
    {"role": "user", "content": "Hi"},
]
assert messages[-1]["role"] == "user"


# 2. Comprehensions build tool schemas and message lists.
names = ["get_weather", "get_order"]
specs = [{"name": n, "type": "function"} for n in names]
assert specs[1]["name"] == "get_order"


# 3. Exceptions -> data. This is the core agent safety pattern.
def safe_call(fn: Callable[[], str]) -> str:
    try:
        return fn()
    except Exception as e:
        return f"ERROR: {type(e).__name__}: {e}"


def boom():
    raise ValueError("bad input")


assert safe_call(boom).startswith("ERROR: ValueError")


# 4. Type hints: read them, they are documentation.
def count_tokens_approx(text: str) -> int:
    return max(1, len(text) // 4)


assert count_tokens_approx("hello world") == 2


# 5. JSON round-trip: what the model sends you.
import json

raw = '{"city": "Pune"}'
assert json.loads(raw)["city"] == "Pune"


# 6. Guard against malformed JSON (models produce it).
def parse_args(raw: str) -> dict:
    try:
        return json.loads(raw) if raw else {}
    except json.JSONDecodeError:
        return {}


assert parse_args("{oops") == {}
assert parse_args("") == {}


print("All drills passed. You are ready for Lesson 1.")

# ---------------------------------------------------------------- Your turn
# 7.  Write `truncate(text, n)` that cuts to n chars and adds "..." only if cut.
# 8.  Write `chunked(items, size)` that yields lists of `size` items.
# 9.  Write `retry(fn, times=3)` as a decorator that retries on Exception.
# 10. Rewrite `safe_call` to also return the time taken in milliseconds.
