"""Phase 0 — the honest backtester.

    python trading/backtest.py
    python trading/backtest.py path/to/nifty.csv     # your own daily data

The only purpose of this file is to tell you the truth about a strategy
BEFORE any money or any LLM touches it.

Design rules that make it honest:
  1. A decision at bar i uses only bars[0:i].      (no lookahead)
  2. Trades execute at the NEXT bar's open.        (no same-bar fill)
  3. Costs are charged on every trade.             (no fantasy returns)
  4. A random strategy is included as a control.   (sanity check)
"""

import math
import random
import statistics
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from data import Bar, load_csv, synthetic  # noqa: E402

# Per-side cost in basis points: brokerage + STT + exchange + stamp + slippage.
DEFAULT_COST_BPS = 9.0
INITIAL_CAPITAL = 100_000.0


# ---------------------------------------------------------------- strategies
# Signature: (bars, i) -> target position 0 or 1. Only bars[0:i] may be read.

def buy_hold(bars: list[Bar], i: int) -> int:
    return 1


def sma_cross(bars: list[Bar], i: int, fast: int = 20, slow: int = 50) -> int:
    if i < slow:
        return 0
    closes = [b.close for b in bars[i - slow:i]]
    fast_ma = sum(closes[-fast:]) / fast
    slow_ma = sum(closes) / slow
    return 1 if fast_ma > slow_ma else 0


def random_signal(bars: list[Bar], i: int, every: int = 10) -> int:
    """Deterministic pseudo-random control. Should return ~market minus costs.

    Seeded per decision, not parity-based: `(k * odd) % 2` is just `k % 2`, and
    any threshold on the top bit of a linear congruential step can alternate.
    A control with a pattern is not a control.
    """
    return 1 if random.Random(i // every).random() < 0.5 else 0


# ---------------------------------------------------------------- engine

def run(bars: list[Bar], strategy, cost_bps: float = DEFAULT_COST_BPS) -> dict:
    cash = INITIAL_CAPITAL
    shares = 0.0
    values: list[float] = []
    trades = 0
    costs_paid = 0.0

    for i, bar in enumerate(bars):
        target = strategy(bars, i) if i > 0 else 0
        price = bar.open

        if target == 1 and shares == 0:
            cost = cash * cost_bps / 10_000
            shares = (cash - cost) / price
            costs_paid += cost
            cash = 0.0
            trades += 1
        elif target == 0 and shares > 0:
            proceeds = shares * price
            cost = proceeds * cost_bps / 10_000
            cash = proceeds - cost
            costs_paid += cost
            shares = 0.0
            trades += 1

        values.append(cash + shares * bar.close)

    if shares > 0:  # mark open position at the last close
        cash = shares * bars[-1].close

    rets = [
        values[i] / values[i - 1] - 1
        for i in range(1, len(values))
        if values[i - 1] > 0
    ]

    peak, max_dd = values[0], 0.0
    for v in values:
        peak = max(peak, v)
        max_dd = max(max_dd, (peak - v) / peak)

    years = max(1e-9, len(values) / 252)
    total = values[-1] / INITIAL_CAPITAL - 1
    cagr = (values[-1] / INITIAL_CAPITAL) ** (1 / years) - 1
    sharpe = (statistics.mean(rets) / statistics.stdev(rets) * math.sqrt(252)) if len(rets) > 1 and statistics.stdev(rets) else 0.0

    return {
        "final": round(values[-1], 2),
        "total_return": round(total * 100, 2),
        "cagr": round(cagr * 100, 2),
        "max_dd": round(max_dd * 100, 2),
        "sharpe": round(sharpe, 2),
        "trades": trades,
        "costs": round(costs_paid, 2),
    }


def print_row(name: str, r: dict) -> None:
    print(f"{name:<22}{r['total_return']:>9.1f}%{r['cagr']:>8.1f}%"
          f"{r['max_dd']:>8.1f}%{r['sharpe']:>7.2f}{r['trades']:>7}{r['costs']:>10.0f}")


# ---------------------------------------------------------------- walk-forward

def walk_forward(bars: list[Bar], folds: int = 3) -> None:
    """Pick parameters on the train slice, judge on the unseen test slice."""
    size = len(bars) // folds
    print(f"\nwalk-forward ({folds} folds, params chosen in-sample, judged out-of-sample)")
    print(f"{'fold':<8}{'chosen':<16}{'test return':>12}{'test cagr':>11}{'test dd':>9}")

    for f in range(1, folds):
        train = bars[(f - 1) * size:f * size]
        test = bars[f * size:(f + 1) * size]
        best = None
        for fast, slow in [(10, 30), (20, 50), (50, 100)]:
            r = run(train, lambda b, i, fa=fast, sl=slow: sma_cross(b, i, fa, sl))
            if best is None or r["cagr"] > best[0]:
                best = (r["cagr"], fast, slow)

        _, fast, slow = best
        r = run(test, lambda b, i: sma_cross(b, i, fast, slow))
        print(f"{f:<8}{f'{fast}/{slow}':<16}{r['total_return']:>11.1f}%"
              f"{r['cagr']:>10.1f}%{r['max_dd']:>8.1f}%")


# ---------------------------------------------------------------- main

if __name__ == "__main__":
    if len(sys.argv) > 1:
        bars = load_csv(Path(sys.argv[1]))
        source = Path(sys.argv[1]).name
    else:
        bars = synthetic()
        source = "SYNTHETIC (not real market data)"

    print(f"\nData: {source} | {len(bars)} bars | {bars[0].date} -> {bars[-1].date}")
    print(f"Costs: {DEFAULT_COST_BPS} bps per side\n")

    print(f"{'strategy':<22}{'return':>10}{'cagr':>9}{'maxDD':>9}{'sharpe':>7}{'trades':>7}{'costs':>10}")
    print("-" * 74)
    print_row("buy & hold", run(bars, buy_hold))
    print_row("sma 20/50", run(bars, lambda b, i: sma_cross(b, i, 20, 50)))
    print_row("sma 50/100", run(bars, lambda b, i: sma_cross(b, i, 50, 100)))
    print_row("random (control)", run(bars, random_signal))

    print("-" * 74)
    print("\nsame strategies with ZERO costs (to see what costs actually take):")
    print(f"{'strategy':<22}{'return':>10}{'cagr':>9}{'maxDD':>9}{'sharpe':>7}{'trades':>7}{'costs':>10}")
    print("-" * 74)
    print_row("random (0 costs)", run(bars, random_signal, cost_bps=0))
    print_row("sma 20/50 (0 costs)", run(bars, lambda b, i: sma_cross(b, i, 20, 50), cost_bps=0))

    walk_forward(bars)

    print("\nRead this before believing any number above:")
    print("  - Synthetic data proves the ENGINE works. It says nothing about markets.")
    print("  - A strategy that beats buy & hold here has not been tested on reality.")
    print("  - The random control is your lie detector: if a 'strategy' performs")
    print("    like random, it IS random, and you are paying costs for the privilege.")
