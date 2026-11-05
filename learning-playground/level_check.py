"""Level assessment. Offline — no API key needed.

Run:  python level_check.py
"""

QUESTIONS = [
    # (level, topic, prompt, options, answer_index)
    (1, "Python", "What does this print?\n\n    x = [1, 2, 3]\n    y = x\n    y.append(4)\n    print(x)",
     ["[1, 2, 3]", "[1, 2, 3, 4]", "Error"], 1),
    (1, "Python", "Which is a list comprehension?",
     ["for i in range(3): out.append(i)", "out = [i for i in range(3)]", "out = map(range(3))"], 1),
    (2, "Python", "What is the main benefit of `async def` in FastAPI?",
     ["Faster CPU math", "It frees the event loop while waiting on IO",
      "It runs code in parallel threads"], 1),
    (2, "Backend", "You call an LLM API and it takes 8 seconds. Which is true?",
     ["The endpoint is broken", "A sync endpoint blocks a worker for 8s under load",
      "The model is too large"], 1),
    (2, "Testing", "What does a Pydantic model give you at the API boundary?",
     ["Speed", "Validated, typed input/output with clear errors", "Caching"], 1),
    (3, "LLM", "What is a token?",
     ["A byte", "A sub-word chunk the model reads and bills for", "A word"], 1),
    (3, "LLM", "What does temperature = 0 mostly do?",
     ["Makes it faster", "Makes output nearly deterministic", "Reduces cost"], 1),
    (3, "LLM", "Why does sending the same question twice cost twice?",
     ["The model remembers and re-reads history", "Each call is stateless and re-processes the full prompt",
      "Rate limiting"], 1),
    (4, "Agents", "Who remembers the conversation between two LLM calls?",
     ["The model", "Your code — you resend the messages array", "The API provider"], 1),
    (4, "Agents", "A tool raises an exception mid-run. Best practice?",
     ["Crash and retry the whole agent", "Return the error as a tool result so the model can recover",
      "Silently return empty string"], 1),
    (5, "Production", "What is an eval gate in CI?",
     ["A firewall", "A pass/fail threshold on quality metrics that blocks a deploy", "A unit test for syntax"], 1),
    (5, "Production", "An agent loops forever in production. What was missing?",
     ["A bigger context window", "A max-step limit and a stop condition", "More tools"], 1),
]

LEVELS = {
    0: ("L0 - Zero", "Start at Phase 1 (Python) + lessons/l00_python_basics.py"),
    1: ("L1 - Coder", "Start at Phase 1, move fast - you can skip the syntax chapters"),
    2: ("L2 - Backend dev", "Skip to Phase 2. Your Laravel/PHP experience covers Phase 0-1"),
    3: ("L3 - LLM user", "Start Phase 3, Lesson 1 (l01_agent_loop.py)"),
    4: ("L4 - Agent builder", "Start Phase 4 + the advanced chapters (09-14)"),
    5: ("L5 - Production agent engineer", "Capstone + case studies only. Ship and apply."),
}


def ask(q, idx, total):
    level, topic, prompt, options, _ = q
    print(f"\n[{idx}/{total}] ({topic})\n{prompt}\n")
    for i, opt in enumerate(options, 1):
        print(f"   {i}. {opt}")
    while True:
        raw = input("\nYour answer: ").strip()
        if raw.isdigit() and 1 <= int(raw) <= len(options):
            return int(raw) - 1
        print("   Enter a number from the list.")


def main():
    print("=" * 60)
    print(" AI / AGENT ENGINEERING — LEVEL CHECK")
    print(" 12 questions. Answer honestly; guessing up wastes months.")
    print("=" * 60)

    correct_by_level = {}
    for i, q in enumerate(QUESTIONS, 1):
        level = q[0]
        picked = ask(q, i, len(QUESTIONS))
        ok = picked == q[4]
        correct_by_level.setdefault(level, []).append(ok)

    print("\n" + "=" * 60)
    print(" RESULTS")
    print("=" * 60)

    passed = 0
    for level in sorted(correct_by_level):
        results = correct_by_level[level]
        score = sum(results)
        total = len(results)
        mark = "PASS" if score == total else ("PARTIAL" if score else "MISS")
        print(f"  L{level}: {score}/{total}  [{mark}]")
        if score == total:
            passed = level

    # If you failed a lower level, you start there regardless of higher scores.
    for level in sorted(correct_by_level):
        if sum(correct_by_level[level]) < len(correct_by_level[level]):
            if level < passed:
                passed = level - 1 if level > 0 else 0
                break

    name, action = LEVELS[passed]
    print("\n  Your starting level: " + name)
    print("  " + action)
    print("\n  Next: read README.md section 2, then run")
    print("        python lessons/l01_agent_loop.py \"What's the weather in Pune?\"")
    print("=" * 60)


if __name__ == "__main__":
    main()
