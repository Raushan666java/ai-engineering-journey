"""The analyst layer: rules today, an LLM tomorrow, the same interface.

    analyst = get_analyst(live=False)     # deterministic, free, offline
    opinion = analyst.analyze(snapshot)

An opinion is *not* an order. It is a direction, a confidence and reasons. A
separate, non-negotiable risk layer turns it into a position size (risk.py) —
and can refuse. A model that could size positions is a model that can empty the
account, and no prompt is strong enough to prevent that.

Three things this file refuses to do:
  1. Trade on unparseable output. Bad JSON -> neutral, confidence 0 -> no trade.
  2. Pay twice for the same question. Cache key = hash(snapshot + model).
  3. Run without a budget. Max calls and max cost per session, enforced in code.

TradingAgents-style debate is emulated by FakeAnalyst (bull case vs bear case,
then an arbiter). LLMAnalyst replaces the debaters with a real model and keeps
the exact same contract, so every test still runs offline.
"""

import json
import os
from dataclasses import dataclass, field
from hashlib import sha256
from pathlib import Path

from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parent
RUNS = ROOT.parent / "runs"
RUNS.mkdir(exist_ok=True)
CACHE_PATH = RUNS / "analyst_cache.jsonl"

load_dotenv(ROOT / ".env")
load_dotenv(ROOT.parent / ".env")

MODEL = os.getenv("MODEL") or "gpt-4o-mini"
API_KEY = os.getenv("OPENAI_API_KEY")
BASE_URL = os.getenv("OPENAI_BASE_URL") or None

MIN_CONFIDENCE = float(os.getenv("TRADING_MIN_CONFIDENCE", "0.60"))
PRICE_IN, PRICE_OUT = 0.15, 0.60          # USD per 1M tokens, gpt-4o-mini

# Bump this whenever SYSTEM or the output schema changes. The cache key includes
# it, so old opinions cannot be replayed under new instructions.
PROMPT_VERSION = "v1"

# Per-session guard rails. A loop bug must hit a wall before your card does.
MAX_CALLS = int(os.getenv("TRADING_MAX_CALLS", "500"))
MAX_COST_USD = float(os.getenv("TRADING_MAX_COST_USD", "2.00"))

DIRECTIONS = ("bullish", "bearish", "neutral")


# ---------------------------------------------------------------- the contract

@dataclass(frozen=True)
class Opinion:
    direction: str
    confidence: float
    thesis: str
    risks: tuple[str, ...] = ()
    invalidation: str = ""
    source: str = "unknown"

    def __post_init__(self) -> None:
        if self.direction not in DIRECTIONS:
            raise ValueError(f"direction must be one of {DIRECTIONS}, got {self.direction!r}")
        if not 0.0 <= self.confidence <= 1.0:
            raise ValueError(f"confidence must be within 0..1, got {self.confidence}")

    @property
    def is_actionable(self) -> bool:
        return self.direction == "bullish" and self.confidence >= MIN_CONFIDENCE


NEUTRAL = Opinion("neutral", 0.0, "no view", source="none")


def parse_opinion(payload: dict, source: str) -> Opinion:
    """Strict parse. Raises ValueError -- the caller decides what a bad answer means."""
    if not isinstance(payload, dict):
        raise ValueError("payload is not an object")

    direction = str(payload.get("direction", "")).strip().lower()
    if direction not in DIRECTIONS:
        raise ValueError(f"bad direction: {direction!r}")

    try:
        confidence = float(payload.get("confidence"))
    except (TypeError, ValueError):
        raise ValueError(f"bad confidence: {payload.get('confidence')!r}") from None

    thesis = str(payload.get("thesis", "")).strip()
    if len(thesis) < 10:
        raise ValueError("thesis too short to audit")

    risks = payload.get("risks") or []
    if not isinstance(risks, list):
        raise ValueError("risks must be a list")

    return Opinion(
        direction=direction,
        confidence=confidence,
        thesis=thesis[:400],
        risks=tuple(str(r)[:200] for r in risks[:5]),
        invalidation=str(payload.get("invalidation", ""))[:300],
        source=source,
    )


# ---------------------------------------------------------------- base

@dataclass
class Budget:
    max_calls: int = MAX_CALLS
    max_cost_usd: float = MAX_COST_USD

    spent: float = 0.0
    calls: int = 0

    def can_spend(self) -> tuple[bool, str]:
        if self.calls >= self.max_calls:
            return False, f"call budget exhausted ({self.calls}/{self.max_calls})"
        if self.spent >= self.max_cost_usd:
            return False, f"cost budget exhausted (${self.spent:.4f}/${self.max_cost_usd:.2f})"
        return True, "ok"


class BaseAnalyst:
    """Interface + accounting. Every analyst must expose these numbers."""

    name = "base"

    def __init__(self) -> None:
        self.calls = 0
        self.cache_hits = 0
        self.fallbacks = 0
        self.cost_usd = 0.0
        self.budget = Budget()

    def analyze(self, snap: dict) -> Opinion:  # pragma: no cover - interface
        raise NotImplementedError

    def stats(self) -> dict:
        return {
            "analyst": self.name,
            "calls": self.calls,
            "cache_hits": self.cache_hits,
            "fallbacks": self.fallbacks,
            "cost_usd": round(self.cost_usd, 6),
        }


# ---------------------------------------------------------------- offline

class FakeAnalyst(BaseAnalyst):
    """A deterministic bull/bear debate. No key, no network, no cost.

    This is not a strategy and it is not a stand-in for intelligence. It is a
    *contract test*: it proves the plumbing works (features -> opinion ->
    conviction -> risk -> broker) before you pay a model to produce opinions.
    """

    name = "fake-debate"

    def analyze(self, snap: dict) -> Opinion:
        self.calls += 1

        bull, bear = 0.0, 0.0
        bull_why: list[str] = []
        bear_why: list[str] = []

        if snap.get("above_sma50"):
            bull += 1.0
            bull_why.append("price above the 50-day average")
        else:
            bear += 1.0
            bear_why.append("price below the 50-day average")

        if snap.get("sma20_above_sma50"):
            bull += 1.0
            bull_why.append("short average above long average")
        else:
            bear += 1.0
            bear_why.append("short average below long average")

        mom = snap.get("momentum20_pct")
        if mom is not None:
            if mom > 2:
                bull += 1.0
                bull_why.append(f"20-day momentum {mom:+.1f}%")
            elif mom < -2:
                bear += 1.0
                bear_why.append(f"20-day momentum {mom:+.1f}%")

        r = snap.get("rsi14")
        if r is not None:
            if r < 35:
                bear += 1.0
                bear_why.append(f"RSI {r:.0f} shows persistent selling")
            elif r > 75:
                bear += 0.5
                bear_why.append(f"RSI {r:.0f} is stretched")
            elif 50 <= r <= 70:
                bull += 0.5
                bull_why.append(f"RSI {r:.0f} confirms strength")

        vol_ratio = snap.get("vol_ratio_20_60")
        if vol_ratio is not None and vol_ratio > 1.5:
            bear += 0.5
            bear_why.append(f"volatility expanding ({vol_ratio:.1f}x)")

        edge = bull - bear
        if abs(edge) < 0.75:
            return Opinion(
                "neutral", round(0.5 - abs(edge) / 4, 2),
                f"bull {bull:.1f} vs bear {bear:.1f}: no side has an edge",
                tuple(bear_why[:2]), "edge widens past 0.75", source="fake",
            )

        direction = "bullish" if edge > 0 else "bearish"
        confidence = min(0.95, 0.55 + 0.12 * abs(edge))
        winning = bull_why if edge > 0 else bear_why
        losing = bear_why if edge > 0 else bull_why

        return Opinion(
            direction=direction,
            confidence=round(confidence, 2),
            thesis=f"bull {bull:.1f} vs bear {bear:.1f}; " + "; ".join(winning[:3]),
            risks=tuple(losing[:2]) or ("evidence is thin",),
            invalidation=("close back under the 50-day average" if edge > 0
                          else "close back above the 50-day average"),
            source="fake",
        )


# ---------------------------------------------------------------- live

SYSTEM = (
    "You are a cautious technical analyst. You see only the snapshot provided. "
    "Reply with JSON only, no prose, with exactly these keys: "
    '{"direction": "bullish|bearish|neutral", "confidence": 0.0-1.0, '
    '"thesis": "<=300 chars citing the numbers", '
    '"risks": ["<=200 chars", "..."], "invalidation": "what would prove you wrong"}. '
    "Long-only system: bearish means do not hold. If evidence conflicts, say neutral "
    "with low confidence. Never invent prices that are not in the snapshot."
)


class LLMAnalyst(BaseAnalyst):
    """Real model, JSON-mode, cached, budgeted, validated.

    The cache is keyed by the snapshot itself: the same snapshot on the same day
    never costs twice, and a re-run of a backtest is free.
    """

    name = MODEL

    def __init__(self, cache_path: Path = CACHE_PATH, api_key: str | None = None) -> None:
        super().__init__()
        key = api_key or API_KEY
        if not key:
            raise RuntimeError("LLMAnalyst needs OPENAI_API_KEY (use FakeAnalyst offline)")
        from openai import OpenAI

        self.client = OpenAI(api_key=key, base_url=BASE_URL)
        self.cache_path = cache_path
        self._cache = self._load_cache()

    # -- cache -------------------------------------------------------
    def _load_cache(self) -> dict[str, dict]:
        if not self.cache_path.exists():
            return {}
        cache: dict[str, dict] = {}
        for line in self.cache_path.read_text(encoding="utf-8").splitlines():
            if not line.strip():
                continue
            try:
                row = json.loads(line)
                cache[row["key"]] = row["opinion"]
            except (json.JSONDecodeError, KeyError):
                continue                      # a torn line must not kill the run
        return cache

    def _key(self, snap: dict) -> str:
        blob = json.dumps({"v": PROMPT_VERSION, "model": MODEL, "snap": snap}, sort_keys=True)
        return sha256(blob.encode()).hexdigest()

    def _store(self, key: str, payload: dict) -> None:
        self._cache[key] = payload
        with self.cache_path.open("a", encoding="utf-8") as f:
            f.write(json.dumps({"key": key, "opinion": payload}) + "\n")

    # -- main --------------------------------------------------------
    def analyze(self, snap: dict) -> Opinion:
        key = self._key(snap)
        cached = self._cache.get(key)
        if cached is not None:
            try:
                opinion = parse_opinion(cached, source="cache")
                self.cache_hits += 1
                return opinion
            except ValueError:
                # A torn or stale row must not kill the run: forget it and ask.
                self._cache.pop(key, None)

        ok, why = self.budget.can_spend()
        if not ok:
            self.fallbacks += 1
            return Opinion("neutral", 0.0, f"analysis skipped: {why}", source="budget")

        try:
            self.calls += 1
            self.budget.calls = self.calls
            payload = self._ask(snap)
            opinion = parse_opinion(payload, source="llm")
        except Exception as e:                # bad JSON, refused schema, network
            self.fallbacks += 1
            return Opinion("neutral", 0.0, f"analysis unavailable: {type(e).__name__}: {e}",
                           source="fallback")

        self._store(key, payload)
        return opinion

    def _ask(self, snap: dict) -> dict:
        resp = self.client.chat.completions.create(
            model=MODEL,
            temperature=0,
            response_format={"type": "json_object"},
            messages=[
                {"role": "system", "content": SYSTEM},
                {"role": "user", "content": json.dumps(snap, sort_keys=True)},
            ],
        )
        usage = getattr(resp, "usage", None)
        pt = getattr(usage, "prompt_tokens", 0) or 0
        ct = getattr(usage, "completion_tokens", 0) or 0
        self.cost_usd += (pt * PRICE_IN + ct * PRICE_OUT) / 1_000_000
        self.budget.spent = self.cost_usd

        text = resp.choices[0].message.content or ""
        try:
            return json.loads(text)
        except json.JSONDecodeError:
            raise ValueError(f"model did not return JSON: {text[:120]!r}") from None


def get_analyst(live: bool = False) -> BaseAnalyst:
    return LLMAnalyst() if live else FakeAnalyst()
