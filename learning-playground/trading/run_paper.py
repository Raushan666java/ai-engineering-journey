"""Paper broker + end-to-end daily loop.

    python trading/run_paper.py

No real money, no broker API, no LLM. Just the machinery:
    signal -> risk check -> order at next open -> costs -> ledger -> report

Run this for 60+ trading days before wiring any model to it. If the machinery
is wrong, a smarter model only loses money faster.
"""

import sys
from dataclasses import dataclass, field
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from backtest import sma_cross  # noqa: E402
from data import Bar, synthetic  # noqa: E402
from risk import RiskConfig, RiskManager  # noqa: E402

INITIAL_CAPITAL = 100_000.0


@dataclass
class Fill:
    day: str
    side: str
    qty: int
    price: float
    cost: float


@dataclass
class PaperBroker:
    cash: float
    cost_bps: float = 9.0
    qty: int = 0
    fills: list[Fill] = field(default_factory=list)
    costs_paid: float = 0.0

    def equity(self, price: float) -> float:
        return self.cash + self.qty * price

    def rebalance(self, day: str, price: float, target_qty: int) -> Fill | None:
        delta = target_qty - self.qty
        if delta == 0 or price <= 0:
            return None

        if delta > 0:
            rate = self.cost_bps / 10_000
            affordable = int(self.cash / (price * (1 + rate)))
            delta = min(delta, affordable)
            if delta <= 0:
                return None
            cost = delta * price * rate
            self.cash -= delta * price + cost
        else:
            qty = -delta
            rate = self.cost_bps / 10_000
            cost = qty * price * rate
            self.cash += qty * price - cost
            delta = -qty

        self.qty += delta
        self.costs_paid += cost
        fill = Fill(day, "BUY" if delta > 0 else "SELL", abs(delta), price, round(cost, 2))
        self.fills.append(fill)
        return fill


def run(bars: list[Bar], every: int = 5) -> dict:
    broker = PaperBroker(INITIAL_CAPITAL)
    risk = RiskManager(RiskConfig())

    curve: list[float] = []
    halted_days = 0
    blocked_orders = 0
    target_qty = 0

    for i, bar in enumerate(bars):
        equity = broker.equity(bar.open)
        risk.start_day(bar.date, equity)
        alive = risk.update(equity)

        # Decide only on rebalance days, using data up to yesterday.
        if i > 0 and i % every == 0 and alive:
            signal = sma_cross(bars, i, fast=20, slow=50)
            target_qty = risk.size(equity, bar.open) if signal == 1 else 0

            # Ignore drift smaller than 2% of equity: rebalancing noise is
            # how small accounts bleed to costs. Flattening is never skipped.
            if target_qty and abs(target_qty - broker.qty) * bar.open < 0.02 * equity:
                target_qty = broker.qty

        # Kill switch liquidates. A daily pause de-risks or holds, per config.
        if risk.killed:
            target_qty = 0
        elif not risk.can_trade():
            target_qty = 0 if risk.cfg.daily_loss_action == "flatten" else broker.qty

        fill = broker.rebalance(bar.date, bar.open, target_qty)
        if fill:
            risk.record_trade()
        elif target_qty != broker.qty and alive:
            blocked_orders += 1

        if not alive:
            halted_days += 1

        curve.append(broker.equity(bar.close))

    final = curve[-1]
    peak, max_dd = curve[0], 0.0
    for v in curve:
        peak = max(peak, v)
        max_dd = max(max_dd, (peak - v) / peak)

    return {
        "final": round(final, 2),
        "return_pct": round((final / INITIAL_CAPITAL - 1) * 100, 2),
        "max_dd_pct": round(max_dd * 100, 2),
        "fills": len(broker.fills),
        "costs": round(broker.costs_paid, 2),
        "halted_days": halted_days,
        "blocked_orders": blocked_orders,
        "killed": risk.killed,
        "kill_reason": risk.reason,
        "fills_log": broker.fills,
    }


if __name__ == "__main__":
    bars = synthetic(days=600, seed=11)
    result = run(bars)

    print(f"\nPAPER TRADING | {bars[0].date} -> {bars[-1].date} | {len(bars)} days")
    print(f"start {INITIAL_CAPITAL:,.0f}  ->  final {result['final']:,.2f}"
          f"  ({result['return_pct']:+.2f}%)")
    print(f"max drawdown {result['max_dd_pct']:.2f}%   fills {result['fills']}"
          f"   costs {result['costs']:,.2f}")
    print(f"halted days {result['halted_days']}   blocked orders {result['blocked_orders']}")
    print(f"kill switch: {'TRIGGERED - ' + result['kill_reason'] if result['killed'] else 'never fired'}")

    print("\nfirst 8 fills:")
    for f in result["fills_log"][:8]:
        print(f"  {f.day}  {f.side:<4} {f.qty:>6} @ {f.price:>8.2f}  cost {f.cost:>7.2f}")
    if len(result["fills_log"]) > 8:
        print(f"  ... {len(result['fills_log']) - 8} more")

    print("\nThis is a MACHINERY test, not a strategy test.")
    print("Next: feed it real daily bars, then run 60 days forward on paper.")
