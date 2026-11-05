"""Walk-forward report: is the agent better than the boring alternatives?

    python trading/walkforward.py
    python trading/walkforward.py data/nifty.csv --folds 4

Method:
  * Split the history into consecutive folds.
  * Run each strategy on each fold with fresh state (fresh broker, fresh risk,
    fresh analyst). A kill switch in fold 2 must not hide fold 3's behaviour.
  * Compare against buy & hold, a 20/50 SMA rule, and a random control.

What this does NOT do: fit parameters on a train slice. The analyst has no
trainable parameters, and an LLM cannot be "fitted" without contamination.
Forward paper trading is the only clean test for a model. This report answers a
narrower question -- does the plumbing behave sanely across regimes?

Read the random control first. If the agent cannot beat random by a wide margin,
you have built an expensive random number generator.
"""

import random
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from analyst import FakeAnalyst, LLMAnalyst  # noqa: E402
from backtest import sma_cross  # noqa: E402
from data import Bar, load_csv, synthetic  # noqa: E402
from engine import simulate  # noqa: E402
from features import snapshot  # noqa: E402
from run_agent_paper import make_decider  # noqa: E402
from strategy import conviction  # noqa: E402

EVERY = 5


def analyst_decider(bars: list[Bar], analyst):
    log: list = []
    return make_decider(bars, analyst, log)


def rule_decider(bars: list[Bar], weight: float):
    return lambda i: weight if sma_cross(bars, i, 20, 50) == 1 else 0.0


def random_decider(weight: float = 0.85, seed: int = 7):
    """Deterministic pseudo-random control: same trades on every machine.

    Seeded per decision, not parity-based -- `(k * odd) % 2` is just `k % 2`,
    which silently becomes an on/off clock aligned to the rebalance schedule.
    """
    cache: dict[int, bool] = {}

    def decide(i: int) -> float:
        k = i // EVERY
        if k not in cache:
            cache[k] = random.Random(seed * 1_000_003 + k).random() < 0.5
        return weight if cache[k] else 0.0

    return decide


def split(bars: list[Bar], folds: int) -> list[list[Bar]]:
    size = len(bars) // folds
    return [bars[k * size:(k + 1) * size] for k in range(folds)]


def main() -> None:
    argv = sys.argv[1:]
    live = "--live" in argv
    folds = 4
    if "--folds" in argv:
        folds = int(argv[argv.index("--folds") + 1])

    paths = []
    skip = False
    for a in argv:
        if skip:
            skip = False
            continue
        if a == "--folds":
            skip = True
            continue
        if not a.startswith("--"):
            paths.append(a)

    if paths:
        bars = load_csv(Path(paths[0]))
        source = Path(paths[0]).name
    else:
        bars = synthetic(days=1500, seed=11)
        source = "SYNTHETIC (not real market data)"

    windows = split(bars, folds)
    analyst_name = "llm" if live else "fake-debate"
    rows: list[dict] = []

    for n, chunk in enumerate(windows, start=1):
        analyst = LLMAnalyst() if live else FakeAnalyst()
        agent = simulate(chunk, analyst_decider(chunk, analyst), every=EVERY)
        bh = simulate(chunk, lambda i: 1.0, every=EVERY)
        sma = simulate(chunk, rule_decider(chunk, 0.85), every=EVERY)
        rnd = simulate(chunk, random_decider(), every=EVERY)

        rows.append({
            "fold": n,
            "period": f"{chunk[0].date[:7]}..{chunk[-1].date[:7]}",
            "agent": agent.return_pct,
            "buy_hold": bh.return_pct,
            "sma": sma.return_pct,
            "random": rnd.return_pct,
            "agent_dd": agent.max_dd_pct,
            "killed": agent.killed,
            "cost": analyst.stats()["cost_usd"],
            "fills": agent.fills,
        })

    print(f"\nWALK-FORWARD | {folds} folds | {len(bars)} bars | {source}")
    print(f"agent = {analyst_name} analyst -> conviction -> risk -> paper broker | "
          f"costs 9 bps/side | rebalance every {EVERY} bars\n")
    print(f"{'fold':<6}{'period':<20}{'agent':>9}{'buy&hold':>11}{'sma20/50':>11}"
          f"{'random':>9}{'maxDD':>8}{'fills':>7}{'agent$':>9}")
    print("-" * 90)
    for r in rows:
        kill = "*" if r["killed"] else " "
        print(f"{r['fold']:<6}{r['period']:<20}{r['agent']:>8.1f}%{r['buy_hold']:>10.1f}%"
              f"{r['sma']:>10.1f}%{r['random']:>8.1f}%{r['agent_dd']:>7.1f}%"
              f"{r['fills']:>7}{r['cost']:>9.4f}{kill}")
    print("-" * 90)

    def mean(key: str) -> float:
        return sum(r[key] for r in rows) / len(rows)

    def worst(key: str) -> float:
        return min(r[key] for r in rows)

    def positive(key: str) -> int:
        return sum(1 for r in rows if r[key] > 0)

    print(f"{'mean':<26}{mean('agent'):>8.1f}%{mean('buy_hold'):>10.1f}%"
          f"{mean('sma'):>10.1f}%{mean('random'):>8.1f}%")
    print(f"{'worst fold':<26}{worst('agent'):>8.1f}%{worst('buy_hold'):>10.1f}%"
          f"{worst('sma'):>10.1f}%{worst('random'):>8.1f}%")
    print(f"{'folds > 0':<26}{positive('agent'):>8}{positive('buy_hold'):>10}"
          f"{positive('sma'):>10}{positive('random'):>8}")

    delta = mean("agent") - mean("random")
    print(f"\nagent vs random: {delta:+.1f} pts per fold "
          f"({'meaningful' if abs(delta) > 5 else 'NOT distinguishable from noise'})")
    print("'*' = kill switch fired inside that fold (risk did its job, strategy did not)")
    print("\nSynthetic data proves plumbing. It does not prove edge.")
    print("Next: real NSE daily bars, then 60 forward paper days. No exceptions.")


if __name__ == "__main__":
    main()
