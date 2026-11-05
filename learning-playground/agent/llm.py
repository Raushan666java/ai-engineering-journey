"""LLM adapters.

`FakeLLM` is not a toy: it lets you run the entire service, tests and evals with
zero cost and zero flakiness. Swap in `OpenAILLM` by adding a key — nothing else
changes.
"""

import json
import re

from .config import API_KEY, BASE_URL, MODEL
from .schemas import AssistantTurn, ToolCall


class BaseLLM:
    name = "base"

    def complete(self, messages: list[dict], tools: list[dict]) -> AssistantTurn:
        raise NotImplementedError


class OpenAILLM(BaseLLM):
    name = MODEL

    def __init__(self) -> None:
        from openai import OpenAI

        self.client = OpenAI(api_key=API_KEY, base_url=BASE_URL)

    def complete(self, messages: list[dict], tools: list[dict]) -> AssistantTurn:
        resp = self.client.chat.completions.create(
            model=MODEL, messages=_to_openai(messages), tools=tools, temperature=0
        )
        msg = resp.choices[0].message
        calls = [
            ToolCall(id=c.id, name=c.function.name, arguments=c.function.arguments)
            for c in (msg.tool_calls or [])
        ]
        return AssistantTurn(
            content=msg.content,
            tool_calls=calls,
            prompt_tokens=resp.usage.prompt_tokens,
            completion_tokens=resp.usage.completion_tokens,
        )


ORDER_RE = re.compile(r"\b[A-Z]\d{3}\b")
INT_RE = re.compile(r"\b\d{3,6}\b")
EMAIL_RE = re.compile(r"[\w.+-]+@[\w-]+\.[\w.]+")


class FakeLLM(BaseLLM):
    """Deterministic offline stand-in. Same interface as a real model."""

    name = "fake-llm"

    def complete(self, messages: list[dict], tools: list[dict]) -> AssistantTurn:
        tool_msgs = [m for m in messages if m["role"] == "tool"]
        if tool_msgs:
            last = tool_msgs[-1]["content"]
            if last.startswith("ERROR"):
                return AssistantTurn(
                    content=f"I couldn't complete that: {last[7:].strip()}",
                    prompt_tokens=120, completion_tokens=30,
                )
            return AssistantTurn(
                content=f"Here is what I found: {last}",
                prompt_tokens=120, completion_tokens=30,
            )

        user = next((m["content"] for m in reversed(messages) if m["role"] == "user"), "")
        low = user.lower()

        if "refund" in low:
            oid = (ORDER_RE.search(user) or ["A100"])[0]
            amount = int(INT_RE.search(user).group()) if INT_RE.search(user) else 1200
            return _call("issue_refund", {"order_id": oid, "amount": amount})

        if "order" in low:
            oid = (ORDER_RE.search(user) or ["A100"])[0]
            return _call("lookup_order", {"order_id": oid})

        if "email" in low:
            to = (EMAIL_RE.search(user) or ["ravi@company.com"])[0]
            return _call("send_email", {"to": to, "body": "Order details attached."})

        return AssistantTurn(
            content="I can help with order lookups, refunds, and internal emails.",
            prompt_tokens=80, completion_tokens=15,
        )


def _call(name: str, args: dict) -> AssistantTurn:
    return AssistantTurn(
        tool_calls=[ToolCall(id="call_1", name=name, arguments=json.dumps(args))],
        prompt_tokens=100,
        completion_tokens=20,
    )


def _to_openai(messages: list[dict]) -> list[dict]:
    out = []
    for m in messages:
        if m["role"] == "assistant" and m.get("tool_calls"):
            out.append({
                "role": "assistant",
                "content": m.get("content"),
                "tool_calls": [
                    {"id": c["id"], "type": "function",
                     "function": {"name": c["name"], "arguments": c["arguments"]}}
                    for c in m["tool_calls"]
                ],
            })
        else:
            out.append({"role": m["role"], "content": m.get("content")})
    return out


def get_llm() -> BaseLLM:
    return OpenAILLM() if API_KEY else FakeLLM()
