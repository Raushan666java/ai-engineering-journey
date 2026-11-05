"""Execution engine shared by the paper runner and the walk-forward report.

One loop, three rules:
  1. Decide at bar i using bars[:i] only, then trade at bar i's open.
  2. Size comes from the risk manager, never from the analyst.
  3. Costs are charged on both sides, and a halted system may still flatten.

The engine knows nothing about LLMs, indicators or opinions. It takes a
`decide(i) -> target weight` callable. That is what makes it testable, and what
lets you swap FakeAnalyst for a real model without touching execution.
"""

from dataclasses import dataclass, field
from typing import Callable

from data import Bar
from risk import RiskConfig, RiskManager
from run_paper import PaperBroker

INITIAL_CAPITAL = 100_000.0


@dataclass
class SimResult:
    final: float
    return_pct: float
    max_dd_pct: float
    fills: int
    costs: float
    halted_days: int
    blocked_orders: int
    killed: bool
    kill_reason: str
    days: int
    end_qty: int = 0
    curve: list[float] = field(default_factory=list)

    def as_dict(self) -> dict:
        return {k: v for k, v in self.__dict__.items() if k != "curve"}


def simulate(
    bars: list[Bar],
    decide: Callable[[int], float],
    *,
    every: int = 5,
    initial: float = INITIAL_CAPITAL,
    cost_bps: float | None = None,
    risk_cfg: RiskConfig | None = None,
    drift_threshold: float = 0.02,
) -> SimResult:
    risk_cfg = risk_cfg or RiskConfig()
    if cost_bps is None:
        cost_bps = risk_cfg.cost_bps
    broker = PaperBroker(initial, cost_bps=cost_bps)
    risk = RiskManager(risk_cfg)

    curve: list[float] = []
    halted_days = 0
    blocked_orders = 0
    target_weight = 0.0

    for i, bar in enumerate(bars):
        equity = broker.equity(bar.open)
        risk.start_day(bar.date, equity)
        alive = risk.update(equity)

        if alive and i > 0 and i % every == 0:
            target_weight = max(0.0, min(1.0, float(decide(i))))

        target_qty = risk.size_for_weight(equity, bar.open, target_weight)

        if risk.killed:
            target_qty = 0                      # liquidate, permanently
        elif not risk.can_trade():
            # Paused for the day (or trade cap hit). De-risk or hold, per config.
            target_qty = 0 if risk_cfg.daily_loss_action == "flatten" else broker.qty

        # Do not churn for rounding-sized drift. Flattening is never skipped.
        if target_qty and broker.qty:
            drift = abs(target_qty - broker.qty) * bar.open
            if drift < drift_threshold * equity:
                target_qty = broker.qty

        fill = broker.rebalance(bar.date, bar.open, target_qty)
        if fill:
            risk.record_trade()
        elif target_qty != broker.qty and alive:
            blocked_orders += 1

        if not alive:
            halted_days += 1

        curve.append(broker.equity(bar.close))

    peak, max_dd = curve[0], 0.0
    for v in curve:
        peak = max(peak, v)
        max_dd = max(max_dd, (peak - v) / peak)

    return SimResult(
        final=round(curve[-1], 2),
        return_pct=round((curve[-1] / initial - 1) * 100, 2),
        max_dd_pct=round(max_dd * 100, 2),
        fills=len(broker.fills),
        costs=round(broker.costs_paid, 2),
        halted_days=halted_days,
        blocked_orders=blocked_orders,
        killed=risk.killed,
        kill_reason=risk.reason,
        days=len(bars),
        end_qty=broker.qty,
        curve=curve,
    )
