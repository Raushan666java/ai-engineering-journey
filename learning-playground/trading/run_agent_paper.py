"""Phase 3 — the trading agent, end to end. Machinery only, no promises.

    python trading/run_agent_paper.py                 # offline, deterministic
    python trading/run_agent_paper.py data/nifty.csv   # your daily bars
    python trading/run_agent_paper.py --live           # real model, costs money

    bars -> features -> analyst opinion -> conviction -> RISK -> paper broker
                                                            |
                                                     ledger + metrics

What you are looking at: an agent that reads a snapshot, forms a view with
reasons, and is then overruled whenever the risk layer says so. The model never
sees the account balance, never chooses a quantity, and never touches the broker.

If this run is profitable, that means nothing yet. Synthetic data proves the
plumbing. Real edges require real data, real costs and months of forward paper
results -- phase 4 and beyond.
"""

import sys
from collections import Counter
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from analyst import FakeAnalyst, LLMAnalyst, Opinion  # noqa: E402
from data import Bar, load_csv, synthetic  # noqa: E402
from engine import simulate  # noqa: E402
from features import snapshot  # noqa: E402
from risk import RiskConfig  # noqa: E402
from strategy import conviction  # noqa: E402


def make_decider(bars: list[Bar], analyst, log: list[tuple[int, dict, Opinion, float]]):
    """Closure over bars: index in, weight out. Only bars[:i] are readable."""

    def decide(i: int) -> float:
        snap = snapshot(bars, i)
        if snap is None:
            return 0.0
        opinion = analyst.analyze(snap)
        weight = conviction(opinion)
        log.append((i, snap, opinion, weight))
        return weight

    return decide


def run(bars: list[Bar], analyst, *, every: int = 5, risk_cfg: RiskConfig | None = None) -> dict:
    decisions: list[tuple[int, dict, Opinion, float]] = []
    decider = make_decider(bars, analyst, decisions)
    result = simulate(bars, decider, every=every, risk_cfg=risk_cfg)

    directions = Counter(o.direction for _, _, o, _ in decisions)
    actionable = sum(1 for *_, w in decisions if w > 0)

    return {
        **result.as_dict(),
        "analyst": analyst.stats(),
        "decisions": len(decisions),
        "actionable": actionable,
        "directions": dict(directions),
        "log": decisions,
        "bars": bars,
    }


def main() -> None:
    argv = sys.argv[1:]
    live = "--live" in argv
    every = 5
    if "--every" in argv:
        every = int(argv[argv.index("--every") + 1])

    paths: list[str] = []
    skip = False
    for a in argv:
        if skip:
            skip = False
            continue
        if a == "--every":
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

    try:
        analyst = LLMAnalyst() if live else FakeAnalyst()
    except RuntimeError as e:
        raise SystemExit(f"{e}\nRun without --live for the offline demo.")
    result = run(bars, analyst, every=every)
    a = result["analyst"]

    print(f"\nTRADING AGENT | {bars[0].date} -> {bars[-1].date} | {len(bars)} bars | {source}")
    print(f"analyst {a['analyst']:<14} decisions {result['decisions']:<4} "
          f"actionable {result['actionable']:<4} calls {a['calls']} "
          f"cache hits {a['cache_hits']} fallbacks {a['fallbacks']} "
          f"cost ${a['cost_usd']:.6f}")
    print(f"opinions {result['directions']}")

    print(f"\nstart 100,000  ->  final {result['final']:,.2f}  ({result['return_pct']:+.2f}%)")
    print(f"max drawdown {result['max_dd_pct']:.2f}%   fills {result['fills']}   "
          f"costs {result['costs']:,.2f}")
    print(f"halted days {result['halted_days']}   blocked orders {result['blocked_orders']}")
    print(f"kill switch: {'TRIGGERED - ' + result['kill_reason'] if result['killed'] else 'never fired'}")

    shown = [d for d in result["log"] if d[3] > 0][:6]
    if shown:
        print("\nfirst actionable decisions:")
        for i, snap, opinion, weight in shown:
            print(f"  {snap['date']}  {opinion.direction:<8} {opinion.confidence:.2f} "
                  f"-> weight {weight:.2f}  {opinion.thesis[:64]}")

    print("\nThe analyst produced opinions. The risk layer produced the position.")
    print("Neither of them proved an edge. Only forward paper results can.")


if __name__ == "__main__":
    main()
