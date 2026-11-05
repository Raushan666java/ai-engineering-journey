# Trading System — the machine, end to end

A production-shaped automated trading agent: data, features, analyst, conviction,
risk, paper broker, walk-forward report, tests.

**Not a money printer.** The engineering is achievable; the profitability is not
guaranteed. This system exists to *prove or disprove* an edge before real money
touches it — and to keep you alive when the answer is "no edge".

> Base rate for retail traders is roughly 9 in 10 losing money (SEBI studies of
> F&O traders). Any honest system must be built assuming you are in that 9 until
> the numbers say otherwise.

**Read [`ANALYSIS.md`](ANALYSIS.md) for the full audit**: 8 bugs found and
fixed, 10 open issues, multi-seed statistics, and the evidence that the current
analyst has no measurable edge.

---

## 1. What is built

| Layer | File | Status |
|---|---|---|
| Data | `data.py` | ✅ CSV loader + reproducible synthetic generator |
| Features | `features.py` | ✅ SMA, RSI, ATR, momentum, realised vol, drawdown — `bars[:i]` only |
| Backtest | `backtest.py` | ✅ lookahead-safe, cost-aware, random control |
| Analyst | `analyst.py` | ✅ `FakeAnalyst` (offline debate) + `LLMAnalyst` (JSON, cache, budget) |
| Conviction | `strategy.py` | ✅ opinion → target weight, long-only |
| Risk | `risk.py` | ✅ position cap, daily loss, drawdown kill switch, weight clamp |
| Execution | `engine.py` | ✅ one loop: decide → clamp → trade at open → costs → ledger |
| Paper broker | `run_paper.py` | ✅ Phase 1 machinery test |
| Agent runner | `run_agent_paper.py` | ✅ full chain, offline by default |
| Walk-forward | `walkforward.py` | ✅ agent vs buy & hold vs SMA vs random, per fold |
| Audit | `ANALYSIS.md` | ✅ bugs, evidence, open risks |
| Live execution | — | ❌ not built, and deliberately so |

---

## 2. Architecture

```
                 daily OHLCV bars
                        |
                 features.py  (bars[:i] only)
                        |
             +----------+-----------+
             |                      |
      rule baseline           analyst.py
      (SMA, cheap,            FakeAnalyst offline / LLMAnalyst live
       deterministic)         -> Opinion(direction, confidence, thesis, risks)
             |                      |
             +----------+-----------+
                        |
                 strategy.conviction()      opinion -> weight 0..0.9
                        |
                 ===================
                 |   RISK MANAGER  |        not promptable, no model input
                 ===================       cap, daily loss, kill switch
                        |
                  engine.simulate()
                        |
                  paper broker + ledger
                        |
            report / walk-forward / metrics
```

Two hard boundaries:

1. **The analyst cannot size a position.** It emits a direction and a confidence;
   `strategy.conviction()` maps that to a weight; `RiskManager` clamps the weight.
   There is no code path from model text to a quantity.
2. **The analyst cannot stop the kill switch.** When drawdown crosses the limit,
   `engine` flattens and stays in cash, whatever the analyst thinks.

---

## 3. Commands

```powershell
cd learning-playground

python trading/backtest.py                  # Phase 0: is the engine honest?
python trading/run_paper.py                 # Phase 1: broker + risk machinery
python trading/run_agent_paper.py           # Phase 3: the full agent, offline
python trading/walkforward.py               # 4 folds: agent vs baselines
python trading/run_agent_paper.py --live    # real model (needs a key, costs money)
python trading/run_agent_paper.py data/nifty.csv --every 5
python -m pytest tests/test_trading_agent.py -q
```

CSV format:

```
date,open,high,low,close,volume
2024-01-01,21500.5,21620.0,21480.2,21590.7,120000
```

---

## 4. Measured results (synthetic data, seed 11)

`python trading/run_agent_paper.py` — 1,500 bars, rebalance every 5 bars:

```
TRADING AGENT | 2019-01-01 -> 2024-09-30 | 1500 bars | SYNTHETIC
analyst fake-debate  decisions 32  actionable 10  calls 32  cache hits 0  fallbacks 0  cost $0.000000
opinions {'neutral': 5, 'bearish': 17, 'bullish': 10}

start 100,000  ->  final 86,327.83  (-13.67%)
max drawdown 15.26%   fills 16   costs 655.80
halted days 1278   blocked orders 0
kill switch: TRIGGERED - kill switch: drawdown 15.2% >= 15%
```

`python trading/walkforward.py` — 4 folds × 375 bars:

```
fold  period               agent   buy&hold   sma20/50   random   maxDD  fills  agent$
1     2019-01..2020-06    -13.7%      -1.8%       2.5%     1.2%   15.3%     16  0.0000*
2     2020-06..2021-11    -12.6%     -12.8%      -4.1%   -12.3%   15.8%     11  0.0000*
3     2021-11..2023-04     24.4%      64.5%      44.8%    13.4%    7.4%     48  0.0000
4     2023-04..2024-09    -14.1%     -13.8%     -15.7%    -8.9%   15.2%     10  0.0000*

mean                        -4.0%       9.0%       6.9%    -1.7%
worst fold                 -14.1%     -13.8%     -15.7%   -12.3%
folds > 0                      1          1          2        2

agent vs random: -2.3 pts per fold (NOT distinguishable from noise)
```

**Read that table honestly: the agent lost to buy & hold, and is statistically
indistinguishable from random.** That is the correct output at this stage. The
analyst is a rule-based stand-in running on synthetic data — it proves the
plumbing works, not that a strategy exists. Three of four folds ended via the
kill switch, which is the risk layer doing its job on a bad signal.

If you cannot say "here is the number my agent must beat, and here is the
evidence it beats it", you have a hobby with a dashboard.

---

## 5. The analyst contract

Both analysts return the same frozen dataclass:

```python
Opinion(direction="bullish", confidence=0.79,
        thesis="bull 3.5 vs bear 0.5; price above the 50-day average",
        risks=("volatility expanding (1.8x)",),
        invalidation="close back under the 50-day average",
        source="fake")
```

`FakeAnalyst` runs a deterministic bull-case vs bear-case debate over the
snapshot: trend, momentum, RSI, volatility expansion. Free, offline, repeatable.
It is the reference implementation and the test fixture.

`LLMAnalyst` replaces the debaters with a real model and keeps the contract:

| Control | Behaviour | Why |
|---|---|---|
| JSON mode | `response_format={"type":"json_object"}`, temperature 0 | Parseable or nothing |
| Strict schema | direction ∈ {bullish, bearish, neutral}, confidence ∈ [0,1], thesis ≥ 10 chars | A "buy" with no reason is not auditable |
| Cache | key = `sha256(model + snapshot)` | Re-running a backtest costs $0 |
| Budget | `max_calls`, `max_cost_usd` per session | A loop bug cannot drain the card |
| Fallback | invalid output → neutral, confidence 0 → no trade | Fail closed, never fail open |
| Source tag | `llm` / `cache` / `fallback` / `budget` | You can audit what actually happened |

Config (`trading/.env` or the playground `.env`):

```dotenv
OPENAI_API_KEY=sk-...
MODEL=gpt-4o-mini
TRADING_MIN_CONFIDENCE=0.60
```

Live cost for this run would be ~20 calls per 1,500 bars (one per rebalance
decision), not one per bar — the snapshot changes slowly and the cache absorbs
repeats.

---

## 6. Risk policy (hard-coded, not promptable)

- max 90% of equity in one position
- −3% in a day → stop for the day (`daily_loss_action`: `flatten` de-risks,
  `hold` blocks new entries only — the choice moved a fold by 9 points on
  synthetic data, so it is explicit, not hidden)
- −15% from peak → kill switch, flatten, manual reset required
- 1 trade/day on daily bars
- 2% drift threshold — no rebalancing for noise
- long-only; bearish means "hold cash"
- confidence below 0.60 → no position at all

The analyst is not consulted about any of these.

---

## 7. Phase gates

| Phase | What | Exit gate | Status |
|---|---|---|---|
| 0 | Backtest engine | Random ≈ market − costs | ✅ |
| 1 | Paper machinery | 60 days, kill switch verified | ✅ mechanism |
| 2 | Rule baseline on **real** data | Beats buy & hold OOS, after costs | ⬜ |
| 3 | Analyst layer | Improves on the rule baseline OOS | ✅ built, ❌ no edge shown |
| 4 | Tiny live (₹5–10k, no leverage) | 3 months forward, small size | ⬜ blocked on phase 2 |
| 5 | Scale | 12 profitable months without leverage | ⬜ |

Phase 3 is "built", not "proven". Those are different words and the difference is
your entire risk.

---

## 8. Why no live broker yet

Wiring Zerodha/Upstox now would produce losses faster, not learning faster. The
missing input is **real data and forward time**, not execution code.

Also, operationally in India: SEBI algo-trading rules apply, broker APIs may need
approval and static IPs, and above thresholds algos must be registered. Check
your broker's current policy before automating anything.

---

## 9. What "done" looks like

- [x] Lookahead-safe backtester with a random control
- [x] Kill switch that fires, flattens, and stops trading
- [x] Costs on every trade
- [x] Analyst → conviction → risk → broker, with the model unable to size
- [x] Offline deterministic mode for tests
- [x] LLM cache, budget, strict schema, fail-closed fallback
- [x] Walk-forward report vs baselines
- [x] 25 tests for the agent chain (78 in the playground)
- [ ] Real NSE daily bars loaded and evaluated
- [ ] 60+ forward paper days with a complete ledger
- [ ] A written note: "my edge is X, and here is the evidence"

If you cannot write the last line, do not attach money to this.
