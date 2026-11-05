"""CLI demo. Works with zero configuration (FakeLLM).

    python -m agent.run_local "Where is order A100?"
    python -m agent.run_local --live "Refund order A100 for 4800"
"""

import sys

from .config import has_llm
from .llm import FakeLLM, get_llm
from .loop import run_agent


def main() -> None:
    args = [a for a in sys.argv[1:] if a != "--live"]
    live = "--live" in sys.argv

    if live and not has_llm():
        raise SystemExit("--live needs OPENAI_API_KEY in agent/.env (or the playground .env)")

    message = " ".join(args) or "Where is order A100?"
    llm = get_llm() if live else FakeLLM()

    print(f"\nmodel: {llm.name}   (offline)" if not live else f"\nmodel: {llm.name}   (live)")
    print(f"user: {message}\n")

    result = run_agent(message, llm=llm)

    for s in result.steps:
        mark = "allowed" if s.allowed else "BLOCKED"
        print(f"  step {s.n}: {s.tool}({s.args}) -> {mark} ({s.reason})")
        if s.result:
            print(f"           {s.result[:100]}")

    print(f"\nagent: {result.answer}")
    print(f"\n{len(result.steps)} tool calls | {result.latency_ms:.1f} ms | "
          f"tokens {result.prompt_tokens}/{result.completion_tokens} | "
          f"${result.cost_usd:.6f}")
    if result.blocked:
        print(f"blocked: {result.reason}")


if __name__ == "__main__":
    main()
