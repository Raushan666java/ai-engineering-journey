"""Configuration. One place, env-driven, no secrets in code."""

import os
from pathlib import Path

from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parent
load_dotenv(ROOT / ".env")
load_dotenv(ROOT.parent / ".env")

MODEL = os.getenv("MODEL") or "gpt-4o-mini"
API_KEY = os.getenv("OPENAI_API_KEY")
BASE_URL = os.getenv("OPENAI_BASE_URL") or None
MAX_STEPS = int(os.getenv("AGENT_MAX_STEPS", "6"))
MAX_REFUND = int(os.getenv("AGENT_MAX_REFUND", "5000"))
ALLOWED_EMAIL_DOMAINS = tuple(
    d.strip() for d in os.getenv("AGENT_ALLOWED_DOMAINS", "@company.com").split(",") if d.strip()
)

RUNS = ROOT / "runs"
RUNS.mkdir(exist_ok=True)

# USD per 1M tokens, rough.
PRICES = {
    "gpt-4o-mini": (0.15, 0.60),
    "gpt-4o": (2.50, 10.00),
}


def has_llm() -> bool:
    return bool(API_KEY)


def estimate_cost(prompt_tokens: int, completion_tokens: int) -> float:
    pin, pout = PRICES.get(MODEL, (0.0, 0.0))
    return (prompt_tokens * pin + completion_tokens * pout) / 1_000_000
