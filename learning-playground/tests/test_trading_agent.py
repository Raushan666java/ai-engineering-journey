"""Tests for the analyst -> conviction -> risk -> broker chain. Offline."""

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "trading"))

import analyst as analyst_module  # noqa: E402
from analyst import FakeAnalyst, LLMAnalyst, Opinion, parse_opinion  # noqa: E402
from backtest import random_signal  # noqa: E402
from data import Bar, synthetic  # noqa: E402
from engine import simulate  # noqa: E402
from features import snapshot  # noqa: E402
from risk import RiskConfig, RiskManager  # noqa: E402
from run_agent_paper import run  # noqa: E402
from strategy import conviction  # noqa: E402
from walkforward import random_decider, split  # noqa: E402

BARS = synthetic(days=400, seed=21)


def good_payload(**over) -> dict:
    base = {
        "direction": "bullish",
        "confidence": 0.8,
        "thesis": "price above the 50-day average with positive momentum",
        "risks": ["volatility expanding"],
        "invalidation": "close below the 50-day average",
    }
    base.update(over)
    return base


# ---------------------------------------------------------------- features

def test_snapshot_returns_none_until_enough_history():
    assert snapshot(BARS, 10) is None
    assert snapshot(BARS, 60) is not None


def test_snapshot_cannot_read_future_bars():
    i = 200
    truncated = BARS[:i]
    assert snapshot(BARS, i) == snapshot(truncated, i)


def test_snapshot_has_the_expected_shape():
    snap = snapshot(BARS, 200)
    for key in ("date", "close", "rsi14", "momentum20_pct", "atr14_pct", "drawdown60_pct"):
        assert key in snap


# ---------------------------------------------------------------- opinion schema

def test_parse_opinion_accepts_a_valid_payload():
    o = parse_opinion(good_payload(), source="test")
    assert o.direction == "bullish" and o.confidence == 0.8 and o.source == "test"


def test_parse_opinion_rejects_unknown_direction():
    try:
        parse_opinion(good_payload(direction="moon"), source="test")
    except ValueError as e:
        assert "direction" in str(e)
    else:
        raise AssertionError("expected ValueError")


def test_parse_opinion_rejects_confidence_out_of_range():
    try:
        parse_opinion(good_payload(confidence=4.2), source="test")
    except ValueError:
        pass
    else:
        raise AssertionError("expected ValueError")


def test_parse_opinion_rejects_a_thesis_that_cannot_be_audited():
    try:
        parse_opinion(good_payload(thesis="up"), source="test")
    except ValueError:
        pass
    else:
        raise AssertionError("expected ValueError")


def test_opinion_is_actionable_only_above_the_confidence_floor():
    assert Opinion("bullish", 0.99, "reasoned thesis", source="t").is_actionable
    assert not Opinion("bullish", 0.10, "reasoned thesis", source="t").is_actionable
    assert not Opinion("bearish", 0.99, "reasoned thesis", source="t").is_actionable


# ---------------------------------------------------------------- offline analyst

def test_fake_analyst_is_deterministic():
    snap = snapshot(BARS, 250)
    assert FakeAnalyst().analyze(snap) == FakeAnalyst().analyze(snap)


def test_fake_analyst_produces_some_actionable_views():
    analyst = FakeAnalyst()
    opinions = [analyst.analyze(snapshot(BARS, i)) for i in range(80, 320, 10)]
    assert any(o.is_actionable for o in opinions)
    assert all(o.direction in ("bullish", "bearish", "neutral") for o in opinions)


# ---------------------------------------------------------------- conviction

def test_conviction_is_zero_below_threshold_and_capped_above():
    assert conviction(Opinion("bullish", 0.30, "weak case here", source="t")) == 0.0
    assert conviction(Opinion("neutral", 0.99, "no view at all", source="t")) == 0.0
    strong = conviction(Opinion("bullish", 0.99, "strong case here", source="t"))
    assert 0.0 < strong <= 0.90


def test_risk_clamps_any_weight_the_analyst_can_produce():
    risk = RiskManager(RiskConfig(max_position_pct=0.5))
    assert risk.size_for_weight(10_000, 100, 0.9) == 50     # 0.9 clamped to 0.5
    assert risk.size_for_weight(10_000, 100, 0.0) == 0
    assert risk.size_for_weight(10_000, 0, 0.5) == 0


# ---------------------------------------------------------------- cache + budget

class StubLLM(LLMAnalyst):
    """No network. Exercises the real cache, budget and parse path."""

    def __init__(self, payload: dict, **kw) -> None:
        super().__init__(api_key="test-key", **kw)
        self.payload = payload
        self.network_calls = 0

    def _ask(self, snap: dict) -> dict:
        self.network_calls += 1
        return self.payload


def test_llm_analyst_pays_once_per_snapshot(tmp_path):
    cache = tmp_path / "cache.jsonl"
    snap = snapshot(BARS, 200)
    analyst = StubLLM(good_payload(), cache_path=cache)

    first = analyst.analyze(snap)
    second = analyst.analyze(snap)

    assert first.source == "llm" and second.source == "cache"
    assert analyst.network_calls == 1
    assert analyst.cache_hits == 1
    assert len(cache.read_text(encoding="utf-8").splitlines()) == 1


def test_llm_cache_survives_a_restart(tmp_path):
    cache = tmp_path / "cache.jsonl"
    snap = snapshot(BARS, 210)
    StubLLM(good_payload(), cache_path=cache).analyze(snap)

    restarted = StubLLM(good_payload(), cache_path=cache)
    opinion = restarted.analyze(snap)

    assert opinion.source == "cache"
    assert restarted.network_calls == 0


def test_invalid_model_output_becomes_neutral_and_never_trades(tmp_path):
    analyst = StubLLM({"direction": "moon", "confidence": "high"}, cache_path=tmp_path / "c.jsonl")
    opinion = analyst.analyze(snapshot(BARS, 200))

    assert opinion.direction == "neutral"
    assert opinion.confidence == 0.0
    assert opinion.source == "fallback"
    assert conviction(opinion) == 0.0
    assert analyst.fallbacks == 1


def test_llm_failure_is_not_cached(tmp_path):
    cache = tmp_path / "c.jsonl"
    analyst = StubLLM({"nonsense": True}, cache_path=cache)
    analyst.analyze(snapshot(BARS, 200))
    assert not cache.exists() or cache.read_text(encoding="utf-8").strip() == ""


def test_budget_stops_calls_before_they_happen(tmp_path):
    analyst = StubLLM(good_payload(), cache_path=tmp_path / "c.jsonl")
    analyst.budget.max_calls = 0

    opinion = analyst.analyze(snapshot(BARS, 200))

    assert opinion.source == "budget"
    assert opinion.confidence == 0.0
    assert analyst.network_calls == 0


def test_cost_budget_stops_calls(tmp_path):
    analyst = StubLLM(good_payload(), cache_path=tmp_path / "c.jsonl")
    analyst.budget.max_cost_usd = 0.0

    assert analyst.analyze(snapshot(BARS, 200)).source == "budget"


# ---------------------------------------------------------------- engine

def test_engine_is_deterministic():
    a = simulate(BARS, lambda i: 0.85, every=5)
    b = simulate(BARS, lambda i: 0.85, every=5)
    assert a.final == b.final and a.fills == b.fills


def test_kill_switch_stops_new_entries():
    result = simulate(BARS, lambda i: 0.90, every=5,
                      risk_cfg=RiskConfig(max_drawdown_pct=0.02))
    assert result.killed
    assert result.kill_reason.startswith("kill switch")
    assert result.halted_days > 0


def test_engine_never_asks_for_more_than_cash():
    result = simulate(BARS, lambda i: 1.0, every=5)
    assert result.final > 0
    assert all(v > 0 for v in result.curve)


def test_zero_weight_never_trades():
    result = simulate(BARS, lambda i: 0.0, every=5)
    assert result.fills == 0
    assert result.final == 100_000.0


# ---------------------------------------------------------------- end to end

def test_agent_run_is_reproducible():
    a = run(BARS, FakeAnalyst(), every=5)
    b = run(BARS, FakeAnalyst(), every=5)
    assert a["final"] == b["final"]
    assert a["analyst"]["cost_usd"] == 0.0


def test_agent_only_decides_after_warmup():
    result = run(BARS, FakeAnalyst(), every=5)
    first_index = result["log"][0][0]
    assert first_index >= 60


def test_walkforward_folds_are_contiguous_and_complete():
    windows = split(BARS, 4)
    assert sum(len(w) for w in windows) == (len(BARS) // 4) * 4
    for prev, nxt in zip(windows, windows[1:]):
        assert prev[-1].date < nxt[0].date


# ---------------------------------------------------------------- risk correctness

def test_daily_loss_counts_an_overnight_gap():
    risk = RiskManager(RiskConfig(max_daily_loss_pct=0.03, max_drawdown_pct=0.99))
    risk.start_day("2024-01-01", 100_000)
    assert risk.update(100_000) is True

    risk.start_day("2024-01-02", 95_000)       # opened 5% down
    assert risk.update(95_000) is False
    assert risk.killed is False
    assert "daily loss" in risk.paused_reason


def test_daily_pause_blocks_trading_without_killing():
    risk = RiskManager(RiskConfig(max_daily_loss_pct=0.03, max_drawdown_pct=0.99))
    risk.start_day("2024-01-01", 100_000)
    risk.update(100_000)
    risk.start_day("2024-01-02", 96_000)
    risk.update(96_000)

    assert risk.can_trade() is False
    assert risk.killed is False
    assert not risk.killed


def test_a_new_day_clears_the_daily_pause():
    risk = RiskManager(RiskConfig(max_daily_loss_pct=0.03, max_drawdown_pct=0.99))
    risk.start_day("2024-01-01", 100_000)
    risk.update(100_000)
    risk.start_day("2024-01-02", 96_000)
    risk.update(96_000)

    risk.start_day("2024-01-03", 96_000)
    assert risk.update(96_000) is True
    assert risk.can_trade() is True


def _gap_on_the_last_day() -> list[Bar]:
    bars = [Bar(f"2024-01-{d:02d}", 100, 100, 100, 100) for d in range(1, 10)]
    bars.append(Bar("2024-01-10", 90, 90, 90, 90))   # -10% overnight gap, last bar
    return bars


def test_paused_day_flattens_by_default():
    result = simulate(_gap_on_the_last_day(), lambda i: 0.9, every=1,
                      risk_cfg=RiskConfig(max_daily_loss_pct=0.05, max_drawdown_pct=0.90))

    assert result.killed is False
    assert result.halted_days == 1
    assert result.end_qty == 0                 # de-risked on the loss day


def test_paused_day_can_hold_instead_of_flattening():
    result = simulate(_gap_on_the_last_day(), lambda i: 0.9, every=1,
                      risk_cfg=RiskConfig(max_daily_loss_pct=0.05, max_drawdown_pct=0.90,
                                          daily_loss_action="hold"))

    assert result.killed is False
    assert result.halted_days == 1
    assert result.end_qty > 0                  # kept the position, blocked entries


def test_kill_switch_still_liquidates():
    result = simulate(BARS, lambda i: 0.9, every=5,
                      risk_cfg=RiskConfig(max_drawdown_pct=0.02))
    assert result.killed is True
    assert result.end_qty == 0


def test_cost_bps_from_risk_config_is_used_by_the_engine():
    cheap = simulate(BARS, lambda i: 0.9, every=5, risk_cfg=RiskConfig(cost_bps=9))
    dear = simulate(BARS, lambda i: 0.9, every=5, risk_cfg=RiskConfig(cost_bps=45))
    assert dear.costs > cheap.costs * 4


# ---------------------------------------------------------------- controls + cache

def test_random_control_is_not_an_on_off_clock():
    seq = [random_signal(BARS, i) for i in range(0, 600, 10)]
    flips = sum(1 for a, b in zip(seq, seq[1:]) if a != b)
    assert 0 < sum(seq) < len(seq)
    assert flips < 0.8 * (len(seq) - 1)


def test_random_decider_is_not_an_on_off_clock():
    seq = [random_decider()(i) for i in range(0, 600, 5)]
    flips = sum(1 for a, b in zip(seq, seq[1:]) if a != b)
    assert 0 < sum(1 for x in seq if x) < len(seq)
    assert flips < 0.8 * (len(seq) - 1)


def test_cache_key_changes_when_the_prompt_version_changes(tmp_path, monkeypatch):
    analyst = StubLLM(good_payload(), cache_path=tmp_path / "c.jsonl")
    snap = snapshot(BARS, 200)

    before = analyst._key(snap)
    monkeypatch.setattr(analyst_module, "PROMPT_VERSION", "v2")
    assert analyst._key(snap) != before


def test_corrupt_cache_row_is_ignored_and_replaced(tmp_path):
    cache = tmp_path / "c.jsonl"
    snap = snapshot(BARS, 200)
    first = StubLLM(good_payload(), cache_path=cache)

    cache.write_text(
        json.dumps({"key": first._key(snap), "opinion": {"direction": "moon"}}) + "\n",
        encoding="utf-8",
    )

    fresh = StubLLM(good_payload(), cache_path=cache)
    opinion = fresh.analyze(snap)

    assert opinion.source == "llm"
    assert fresh.network_calls == 1
