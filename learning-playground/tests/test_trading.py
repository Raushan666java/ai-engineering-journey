"""Trading engine tests. Offline, deterministic."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "trading"))

from backtest import buy_hold, run, sma_cross  # noqa: E402
from data import synthetic  # noqa: E402
from risk import RiskConfig, RiskManager  # noqa: E402
from run_paper import PaperBroker  # noqa: E402


def test_synthetic_data_is_reproducible():
    a = synthetic(days=50, seed=3)
    b = synthetic(days=50, seed=3)
    assert [x.close for x in a] == [x.close for x in b]
    assert len(a) == 50


def test_buy_and_hold_never_sells():
    bars = synthetic(days=200, seed=5)
    result = run(bars, buy_hold)
    assert result["trades"] == 1          # one entry, never exits


def test_costs_reduce_returns():
    bars = synthetic(days=300, seed=9)
    with_costs = run(bars, buy_hold, cost_bps=9)
    without = run(bars, buy_hold, cost_bps=0)
    assert with_costs["final"] < without["final"]


def test_strategy_cannot_use_future_bars():
    bars = synthetic(days=120, seed=4)
    # sma at index 10 must be identical no matter what comes after index 10.
    a = sma_cross(bars, 60, 20, 50)
    truncated = bars[:61]
    b = sma_cross(truncated, 60, 20, 50)
    assert a == b


def test_position_size_respects_cap():
    risk = RiskManager(RiskConfig(max_position_pct=0.5))
    qty = risk.size(equity=10_000, price=100)
    assert qty == 50


def test_drawdown_triggers_kill_switch():
    risk = RiskManager(RiskConfig(max_drawdown_pct=0.10))
    risk.update(100_000)
    assert risk.killed is False
    risk.update(89_000)
    assert risk.killed is True
    assert risk.can_trade() is False


def test_daily_loss_halts_the_day_but_not_forever():
    risk = RiskManager(RiskConfig(max_daily_loss_pct=0.03, max_drawdown_pct=0.50))
    risk.start_day("2024-01-01", 100_000)
    assert risk.update(96_000) is False     # -4% day
    risk.start_day("2024-01-02", 96_000)
    assert risk.update(96_000) is True      # new day, allowed again


def test_broker_charges_costs_and_tracks_cash():
    broker = PaperBroker(cash=10_000, cost_bps=10)
    fill = broker.rebalance("2024-01-01", price=100, target_qty=50)
    assert fill is not None and broker.qty == 50
    assert broker.cash < 10_000 - 50 * 100   # paid price + cost
    assert broker.costs_paid > 0


def test_broker_cannot_spend_more_than_cash():
    broker = PaperBroker(cash=1_000, cost_bps=10)
    broker.rebalance("2024-01-01", price=100, target_qty=100)
    assert broker.cash >= 0
    assert broker.qty <= 9                   # 10 shares minus cost buffer


def test_selling_always_allowed_when_flattening():
    broker = PaperBroker(cash=10_000, cost_bps=10)
    broker.rebalance("2024-01-01", price=100, target_qty=50)
    broker.rebalance("2024-01-02", price=100, target_qty=0)
    assert broker.qty == 0
