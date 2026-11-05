"""Lesson 3 — Streaming, tokens, and cost.

    python lessons/l03_llm_calls.py "Explain what an agent loop is in 3 bullets"

Two things every AI engineer must be able to state about their system:
  * time to first token (TTFT) — what users feel
  * cost per request — what your boss feels
"""

import sys
import time

from common import MODEL, estimate_cost, make_client


def stream_chat(user_message: str) -> None:
    client = make_client()

    started = time.perf_counter()
    ttft = None
    chunks: list[str] = []
    usage = None

    stream = client.chat.completions.create(
        model=MODEL,
        messages=[
            {"role": "system", "content": "Be concise. Use bullet points."},
            {"role": "user", "content": user_message},
        ],
        stream=True,
        stream_options={"include_usage": True},  # some providers reject this
    )

    for chunk in stream:
        if chunk.choices and chunk.choices[0].delta.content:
            if ttft is None:
                ttft = time.perf_counter() - started
            text = chunk.choices[0].delta.content
            chunks.append(text)
            print(text, end="", flush=True)
        if getattr(chunk, "usage", None):
            usage = chunk.usage

    total = time.perf_counter() - started
    print("\n")

    print(f"TTFT:      {ttft:.2f}s" if ttft else "TTFT: n/a")
    print(f"Total:     {total:.2f}s")
    print(f"Chars:     {sum(len(c) for c in chunks)}")

    if usage:
        cost = estimate_cost(MODEL, usage.prompt_tokens, usage.completion_tokens)
        print(f"Tokens:    {usage.prompt_tokens} in / {usage.completion_tokens} out")
        print(f"Cost:      ${cost:.6f}")
    else:
        print("Tokens:    provider did not return usage (stream_options unsupported?)")


if __name__ == "__main__":
    q = " ".join(sys.argv[1:]) or "Explain an agent loop in 3 bullets."
    stream_chat(q)

# ---------------------------------------------------------------- Exercises
# 1. Run the same prompt 5 times at temperature=1. Record TTFT each time.
# 2. Print the same output as a JSON object {text, ttft, total, tokens, cost}.
#    That object is what your future /metrics endpoint will return.
# 3. Add a `max_tokens=100` run and compare cost.
