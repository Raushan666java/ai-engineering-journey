## Chapter 13: Evaluation — How to Know Your Agent Actually Works

### 13.1 Why "It Worked When I Tried It" Isn't Enough

Non-determinism (Chapter 2.3) means an agent that worked correctly on your test run might behave differently on the next one, or after you tweak a prompt. Without systematic evaluation, every prompt change is a guess about whether you made things better or worse.

### 13.2 Build a Task Test Set

Collect (or write) 20-50 realistic tasks the agent should handle, each with a way to check success:

```python
test_cases = [
    {
        "input": "Check if order 4521 is overdue and notify the customer if so",
        "expected_tool_calls": ["get_order_status", "calculate_days_overdue"],
        "success_criteria": lambda output: "overdue" in output.lower() or "on time" in output.lower()
    },
    {
        "input": "What's your refund policy?",
        "expected_tool_calls": ["search_product_docs"],
        "success_criteria": lambda output: len(output) > 20  # or an LLM-judge check
    },
]
```

### 13.3 Two Levels of Evaluation

- **Trajectory evaluation** — did the agent take the *right sequence of actions* (called the correct tools, in a sensible order)? This catches "right answer, wrong/wasteful process" bugs (e.g., an agent that gets the correct final answer but only after 8 unnecessary tool calls, silently burning cost every time it runs in production).
- **Outcome evaluation** — was the *final answer* correct/acceptable? Simple checks (string matching, structured output validation) where possible; for open-ended text, use an **LLM-as-judge** — a separate model call that scores the output against criteria.

```python
def llm_judge(output, criteria):
    judge_response = client.messages.create(
        model="claude-sonnet-4-6", max_tokens=10,
        messages=[{"role": "user", "content":
            f"Output: {output}\n\nCriteria: {criteria}\n\nDoes the output satisfy the criteria? Answer YES or NO only."}]
    )
    return "YES" in judge_response.content[0].text
```

### 13.4 Run the Test Set on Every Meaningful Change

Any time you change the system prompt, a tool description, or swap frameworks, rerun the full test set and compare pass rates before/after. This is the agentic equivalent of a unit test suite — treat it with the same seriousness, even though the underlying checks are fuzzier than traditional assertions.

### 13.5 Milestone Project for This Chapter

Write a 15-20 case test set for your ApexERP support agent (mix of billing, technical, sales queries), with trajectory checks (right tools called) and an LLM-judge outcome check. Run it, note the pass rate, then deliberately worsen one tool description and rerun — confirm the test set catches the regression.

---

