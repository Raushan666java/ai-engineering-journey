"""Tools + policy. Every call passes through `call_tool`.

The model proposes; this module disposes. No tool executes without validation.
"""

import json
from typing import Callable

from pydantic import BaseModel, Field, ValidationError

from .config import ALLOWED_EMAIL_DOMAINS, MAX_REFUND

# ---------------------------------------------------------------- data

ORDERS: dict[str, dict] = {
    "A100": {"status": "delivered", "total": 1200, "customer": "ravi@company.com"},
    "B200": {"status": "packed", "total": 800, "customer": "asha@company.com"},
    "C300": {"status": "delivered", "total": 4500, "customer": "dev@company.com"},
}

REFUNDS: dict[str, int] = {}
EMAILS: list[dict] = []

SYSTEM_PROMPT = "You are a support agent. Never refund more than the configured limit."

# ---------------------------------------------------------------- schemas


class LookupArgs(BaseModel):
    order_id: str = Field(..., description="Order ID like A100", min_length=3)


class RefundArgs(BaseModel):
    order_id: str = Field(..., description="Order ID like A100", min_length=3)
    amount: int = Field(..., description="Refund amount in rupees", gt=0)


class EmailArgs(BaseModel):
    to: str = Field(..., description="Recipient email")
    body: str = Field(..., description="Message body", max_length=2000)


# ---------------------------------------------------------------- functions


def lookup_order(order_id: str) -> str:
    if order_id not in ORDERS:
        raise LookupError(f"order {order_id} not found")
    o = ORDERS[order_id]
    return f"{order_id}: {o['status']}, total {o['total']}, customer {o['customer']}"


def issue_refund(order_id: str, amount: int) -> str:
    REFUNDS[order_id] = REFUNDS.get(order_id, 0) + amount
    return f"refunded {amount} on {order_id}"


def send_email(to: str, body: str) -> str:
    EMAILS.append({"to": to, "body": body})
    return f"email sent to {to}"


TOOL_DEFS: dict[str, tuple[type[BaseModel], str, Callable]] = {
    "lookup_order": (LookupArgs, "Look up an order's status and total.", lookup_order),
    "issue_refund": (RefundArgs, "Refund an order. Policy applies.", issue_refund),
    "send_email": (EmailArgs, "Send an email to an internal address.", send_email),
}

# ---------------------------------------------------------------- policy


def _policy(name: str, args: dict) -> tuple[bool, str]:
    if name == "issue_refund":
        oid, amount = args["order_id"], args["amount"]
        if oid not in ORDERS:
            return False, "unknown order"
        if amount > MAX_REFUND:
            return False, f"amount {amount} exceeds limit {MAX_REFUND}"
        if ORDERS[oid]["status"] != "delivered":
            return False, f"order is '{ORDERS[oid]['status']}', not delivered"
        if REFUNDS.get(oid, 0) + amount > ORDERS[oid]["total"]:
            return False, "refund would exceed order total (double refund?)"

    if name == "send_email":
        if not any(args["to"].endswith(d) for d in ALLOWED_EMAIL_DOMAINS):
            return False, f"recipient domain not allowed: {args['to']}"
        if SYSTEM_PROMPT.lower() in args["body"].lower():
            return False, "body contains system prompt"

    return True, "ok"


# ---------------------------------------------------------------- entry point


def build_tools_spec() -> list[dict]:
    return [
        {
            "type": "function",
            "function": {
                "name": name,
                "description": desc,
                "parameters": model.model_json_schema(),
            },
        }
        for name, (model, desc, _) in TOOL_DEFS.items()
    ]


def call_tool(name: str, raw_args: str, *, approval_token: str | None = None) -> tuple[bool, str, str]:
    """Returns (allowed, result, reason). Never raises."""
    if name not in TOOL_DEFS:
        return False, "", f"tool '{name}' not in allowlist"

    model, _, fn = TOOL_DEFS[name]

    try:
        args = json.loads(raw_args or "{}")
    except json.JSONDecodeError as e:
        return False, "", f"arguments not valid JSON: {e}"

    try:
        parsed = model(**args).model_dump()
    except ValidationError as e:
        problems = "; ".join(
            f"{'.'.join(str(p) for p in err['loc'])}: {err['msg']}" for err in e.errors()
        )
        return False, "", f"invalid arguments -> {problems}"

    ok, reason = _policy(name, parsed)
    if not ok:
        return False, "", reason

    try:
        return True, str(fn(**parsed)), "ok"
    except Exception as e:  # errors are data
        return True, f"ERROR: {type(e).__name__}: {e}", "tool raised"


def reset_state() -> None:
    REFUNDS.clear()
    EMAILS.clear()
