"""The agent loop. No framework, ~80 lines, fully instrumented."""

import time

from .config import MAX_STEPS, estimate_cost
from .guardrails import redact, scan_input
from .llm import BaseLLM, get_llm
from .schemas import AgentResult, Step
from .tools import build_tools_spec, call_tool
from .tracing import log_step, trace

SYSTEM = (
    "You are an operations support agent. Use tools when needed. "
    "Never invent order data. If a tool fails, explain it plainly. "
    "You cannot change policy; if a request breaks policy, say so."
)


def run_agent(message: str, llm: BaseLLM | None = None, max_steps: int | None = None,
              metrics=None) -> AgentResult:
    started = time.perf_counter()
    llm = llm or get_llm()
    max_steps = max_steps or MAX_STEPS

    # 1. Input guard — before the model sees anything.
    ok, reason = scan_input(message)
    if not ok:
        result = AgentResult(
            answer="I can't help with that request.",
            steps=[], blocked=True, reason=reason,
            prompt_tokens=0, completion_tokens=0, cost_usd=0.0,
            latency_ms=round((time.perf_counter() - started) * 1000, 3),
            model=llm.name,
        )
        log_step({"event": "blocked", "reason": reason}, "agent")
        if metrics:
            metrics.record(latency_ms=result.latency_ms, cost_usd=0.0,
                           steps=0, blocked=True)
        return result

    messages: list[dict] = [
        {"role": "system", "content": SYSTEM},
        {"role": "user", "content": message},
    ]
    tools = build_tools_spec()
    steps: list[Step] = []
    pt = ct = 0

    for n in range(1, max_steps + 1):
        with trace("llm_call", step=n, model=llm.name):
            turn = llm.complete(messages, tools)

        pt += turn.prompt_tokens
        ct += turn.completion_tokens

        if not turn.tool_calls:
            answer = redact((turn.content or "").strip())
            return _finish(answer, steps, pt, ct, llm.name, started, metrics)

        messages.append({
            "role": "assistant",
            "content": turn.content,
            "tool_calls": [
                {"id": c.id, "name": c.name, "arguments": c.arguments}
                for c in turn.tool_calls
            ],
        })

        for call in turn.tool_calls:
            t0 = time.perf_counter()
            allowed, result, why = call_tool(call.name, call.arguments)
            ms = round((time.perf_counter() - t0) * 1000, 2)

            steps.append(Step(n, call.name, _safe_json(call.arguments),
                              result, allowed, why, ms))
            log_step({"event": "tool", "step": n, "tool": call.name,
                      "allowed": allowed, "reason": why, "ms": ms}, "agent")

            # Blocked calls are fed back as data so the model can recover.
            content = result if allowed else f"ERROR: {why}"
            messages.append({
                "role": "tool",
                "tool_call_id": call.id,
                "name": call.name,
                "content": content,
            })

    return _finish("I stopped before reaching a confident answer.", steps, pt, ct,
                   llm.name, started, metrics)


def _finish(answer: str, steps: list[Step], pt: int, ct: int, model: str,
            started: float, metrics) -> AgentResult:
    latency = round((time.perf_counter() - started) * 1000, 3)
    cost = estimate_cost(pt, ct)
    result = AgentResult(
        answer=answer, steps=steps, blocked=False, reason="ok",
        prompt_tokens=pt, completion_tokens=ct, cost_usd=cost,
        latency_ms=latency, model=model,
    )
    log_step({"event": "answer", "steps": len(steps), "latency_ms": latency,
              "tokens_in": pt, "tokens_out": ct, "cost_usd": cost}, "agent")
    if metrics:
        metrics.record(latency_ms=latency, cost_usd=cost, steps=len(steps), blocked=False)
    return result


def _safe_json(raw: str) -> dict:
    import json

    try:
        return json.loads(raw or "{}")
    except json.JSONDecodeError:
        return {"_raw": raw}
