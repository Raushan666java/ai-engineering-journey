"""Shared helpers for all lessons: client, model, JSONL tracing."""

import json
import os
from datetime import datetime, timezone
from pathlib import Path

from dotenv import load_dotenv
from openai import OpenAI

ROOT = Path(__file__).resolve().parent.parent
load_dotenv(ROOT / ".env")

MODEL = os.getenv("MODEL") or "gpt-4o-mini"
RUNS = ROOT / "runs"
RUNS.mkdir(exist_ok=True)

# Rough USD per 1M tokens. Update if you switch providers.
PRICES = {
    "gpt-4o-mini": (0.15, 0.60),
    "gpt-4o": (2.50, 10.00),
    "llama3.1": (0.0, 0.0),
}


def make_client() -> OpenAI:
    key = os.getenv("OPENAI_API_KEY")
    base = os.getenv("OPENAI_BASE_URL") or None
    if not key:
        raise SystemExit(
            "OPENAI_API_KEY is not set.\n"
            "  1. Copy .env.example to .env\n"
            "  2. Paste your key\n"
            "  3. Re-run"
        )
    return OpenAI(api_key=key, base_url=base)


def estimate_cost(model: str, prompt_tokens: int, completion_tokens: int) -> float:
    pin, pout = PRICES.get(model, (0.0, 0.0))
    return (prompt_tokens * pin + completion_tokens * pout) / 1_000_000


def log_step(record: dict, run_name: str = "run") -> None:
    """Append one JSON line per step. This is the seed of observability."""
    record = {"ts": datetime.now(timezone.utc).isoformat(), **record}
    path = RUNS / f"{run_name}.jsonl"
    with path.open("a", encoding="utf-8") as f:
        f.write(json.dumps(record, ensure_ascii=False, default=str) + "\n")


def short(text: str, limit: int = 120) -> str:
    text = (text or "").replace("\n", " ")
    return text if len(text) <= limit else text[: limit - 3] + "..."
