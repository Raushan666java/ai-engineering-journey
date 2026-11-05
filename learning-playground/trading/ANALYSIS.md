# Trading folder — full analysis

Date: 2026-11-03. Scope: every file in `trading/`, all four runnable scripts,
the test suite, and the statistical behaviour of the results.

Method: read the code, ran it, tried to break it, then re-ran after fixing.
Every number below is reproducible with the command shown above it.

**Verdict in one line: the machinery is sound and honest; the strategy has no
demonstrated edge and is statistically indistinguishable from random. That is
the correct state for this phase, and it is the reason not to attach money yet.**

---

## 1. Inventory

| File | Lines | Role |
|---|---|---|
| `data.py` | 63 | CSV loader + reproducible synthetic bars |
| `features.py` | 96 | SMA/RSI/ATR/momentum/vol/drawdown, `bars[:i]` only |
| `backtest.py` | 171 | Phase 0 engine, costs, random control, walk-forward |
| `risk.py` | 105 | Position cap, daily loss, kill switch, weight clamp |
| `engine.py` | 110 | Single execution loop used by the agent + walk-forward |
| `analyst.py` | 330 | `FakeAnalyst` + `LLMAnalyst` (JSON, cache, budget) |
| `strategy.py` | 25 | Opinion → target weight |
| `run_paper.py` | 150 | Phase 1 broker/risk machinery test |
| `run_agent_paper.py` | 135 | Full chain, offline by default |
| `walkforward.py` | 160 | Agent vs baselines, per fold |
| `tests/test_trading_agent.py` | 340 | 35 tests |

`python -m pytest tests -q` → **89 passed** (35 trading-agent, 10 trading, 19 agent service, 25 lesson/other).

---

## 2. What I verified as correct

| Property | How it was checked | Result |
|---|---|---|
| No lookahead in features | `snapshot(bars, i) == snapshot(bars[:i], i)` | ✅ identical |
| No same-bar fills | decision at `i` uses `bars[:i]`, fill at `bars[i].open` | ✅ by construction + test |
| Determinism | same seed, same code → same final equity | ✅ |
| Model cannot size positions | `Opinion` → `conviction()` → `RiskManager` clamp | ✅ no path from text to qty |
| Model cannot override risk | engine liquidates on `risk.killed`, ignores the analyst | ✅ |
| Fail closed on bad JSON | invalid output → neutral, confidence 0 → weight 0 | ✅ + test |
| Costs charged both sides | broker deducts before/after notional | ✅ |
| Cache prevents double spend | second call on same snapshot → `source="cache"` | ✅ + test |
| Kill switch stops new entries | `halted_days > 0`, `killed=True`, `end_qty=0` | ✅ |

---

## 3. Bugs found and fixed

All eight were fixed in this pass, each with a regression test.

### 3.1 [High] The "random" control was an on/off clock

```python
return 1 if ((i // every) * 2654435761 % 2) == 0 else 0
```

`2654435761` is odd, so `k * odd` has the same parity as `k`. The control
alternated every period:

```
before: [0.85, 0.0, 0.85, 0.0, 0.85, 0.0, ...]   # 100% flips
after : [0.0, 0.85, 0.0, 0.0, 0.85, 0.85, ...]   # ~50% flips
```

A control with a pattern aligned to the rebalance schedule can accidentally
flatter or punish a strategy. Replaced with `random.Random(k).random() < 0.5`
in both `backtest.random_signal` and `walkforward.random_decider`.

### 3.2 [High] `max_trades_per_day` was never enforced

`grep` showed `can_trade()` had **zero callers**. The documented "max 1
trade/day" was decoration. Now `engine.simulate` and `run_paper.run` check
`risk.can_trade()` and hold the position when the cap or a pause applies.
(On daily bars it cannot bind today — one bar, one decision — but it now binds
the moment you move to intraday.)

### 3.3 [High] `RiskConfig.cost_bps` was dead

The engine used its own `cost_bps=9.0` default. Setting
`RiskConfig(cost_bps=50)` changed nothing:

```
before: 9 bps -> 152.41 costs | 50 bps -> 152.41 costs   (identical)
after : 9 bps -> 310.73 costs | 50 bps -> 1,726.83 costs
```

### 3.4 [High] The daily loss limit could not see an overnight gap

`start_day()` reset the baseline to **today's open**, so a −5% gap opened at
−5% and the day measured 0% loss:

```
before: day 2 opens 95,000 (-5% overnight) -> update() returned True
after : day 2 opens 95,000 (-5% overnight) -> update() returned False
```

The baseline is now the previous mark (yesterday's close). Drawdown always
caught the gap; the daily rule now does too.

### 3.5 [Medium] "Stop for the day" silently meant "liquidate everything"

`if not alive: target_qty = 0` conflated a daily pause with the kill switch, and
forced a sale on the pause day. Semantics are now explicit:

```python
RiskConfig(daily_loss_action="flatten")   # default: de-risk at the next open
RiskConfig(daily_loss_action="hold")      # block new entries, keep position
```

The numbers show why this matters — same strategy, kill switch disabled,
1,500 bars:

| Mode | Return | Fills | Costs |
|---|---|---|---|
| `flatten` (rule 20/50) | +4.32% | 95 | 7,686 |
| `hold` (rule 20/50) | +21.29% | 17 | 118 |
| `flatten` (agent) | −5.70% | 151 | 5,560 |
| `hold` (agent) | −10.66% | 126 | 3,693 |

Flattening on a daily pause, then re-entering on the 5-bar schedule, is a
whipsaw machine: **65x the costs** for the rule strategy. A re-entry cooldown is
the right next step; do not tune the default on this sample.

### 3.6 [Medium] Cache key ignored the prompt

Key was `sha256(model + snapshot)`. Editing `SYSTEM` served opinions produced
under the old instructions. Now `PROMPT_VERSION` is part of the key — bump it
when the prompt or schema changes.

### 3.7 [Medium] A corrupt cache row crashed the run

`parse_opinion(self._cache[key])` sat outside any `try`. One torn line killed a
live session. Now a bad row is dropped and re-requested (`test_corrupt_cache_row_is_ignored_and_replaced`).

### 3.8 [Low] Budget defaults too small for a long backtest

200 calls / $1.00 would silently exhaust a 5-year run and turn the rest into
"neutral". Defaults are now 500 calls / $2.00, overridable with
`TRADING_MAX_CALLS` / `TRADING_MAX_COST_USD`.

---

## 4. Statistical reality

### 4.1 Multi-seed dispersion (10 seeds × 750 bars, agent vs baselines)

```
agent      mean  -1.3%   median  -5.6%   sd 12.1   min -16.1%   max +17.6%
buy&hold   mean +11.0%   median  +9.0%   sd 16.6   min -11.9%   max +37.6%
random     mean  +2.0%   median  +1.5%   sd 14.4   min -15.7%   max +23.9%

agent beats buy&hold : 3/10 seeds
agent beats random   : 4/10 seeds
correlation(agent, buy&hold) = 0.32
```

A single seed is a coin flip. Any claim based on one run of this system is noise.

### 4.2 Does the analyst's bullish call predict anything?

568 actionable calls across 10 seeds, forward 5-bar return after each:

```
hit rate when taken     : 48.9%
base rate, any window   : 47.7%
mean forward return taken       : -0.08%
mean forward return unconditional: -0.31%
```

With n=568 the standard error is ≈ 2.1 points, so +1.2 points is **not**
significant. The analyst is not adding measurable information. That is exactly
what a rule-based stand-in should show — the point is that the harness can now
prove it.

### 4.3 Kill switch: what the insurance costs

Same 10 seeds, agent with 15% drawdown kill vs kill disabled:

```
kill @15% : mean  -1.3%   worst -16.1%
no kill   : mean  -5.2%   worst -21.1%
insurance "premium": +3.9 pts mean, +5.0 pts at the worst seed
```

Here the kill switch *made* money by cutting losing regimes. That is not a
general law — in a whipsaw market it costs you. It is a survival rule, not an
alpha source.

### 4.4 Cost drag

```
kill on  (default)     : 0.48% of starting capital over 5.7 years
kill off, flatten mode : 7.69%
kill off, hold mode    : 0.12%
```

### 4.5 What the live model would cost

```
252 decisions per 5 years @ every=5
$0.000117 per call (gpt-4o-mini, ~510 tokens)
cold cache: $0.03       warm cache: $0.00
```

Cost is not the constraint. **Contamination and latency are** — a model trained
through 2025 "knows" 2024, so only forward paper trading is clean.

---

## 5. Current results (after fixes)

`python trading/run_agent_paper.py`:

```
analyst fake-debate  decisions 32  actionable 10  cost $0.000000
opinions {'neutral': 5, 'bearish': 17, 'bullish': 10}
start 100,000 -> final 86,327.83 (-13.67%)
max drawdown 15.26%  fills 16  costs 655.80  halted 1278
kill switch: TRIGGERED - drawdown 15.2% >= 15%
```

`python trading/walkforward.py`:

```
fold  period               agent   buy&hold   sma20/50   random
1     2019-01..2020-06    -13.7%      -1.8%       2.5%     1.2%
2     2020-06..2021-11    -12.6%     -12.8%      -4.1%   -12.3%
3     2021-11..2023-04     24.4%      64.5%      44.8%    13.4%
4     2023-04..2024-09    -14.1%     -13.8%     -15.7%    -8.9%
mean                        -4.0%       9.0%       6.9%    -1.7%
worst fold                 -14.1%     -13.8%     -15.7%   -12.3%
```

`python trading/backtest.py` (Phase 0, whole sample):

```
buy & hold    -59.8%   sma 20/50  -44.1%
sma 50/100    +27.0%   random     -49.2%  (costs 5,083)
```

The kill switch fired in 3 of 4 folds and in the full run. The system spends
most of its life in cash on this data, which is the risk layer protecting a bad
signal from compounding.

---

## 6. Not fixed — highest value next

| # | Issue | Severity | Why it matters |
|---|---|---|---|
| 1 | `load_csv` has no corporate-action / split adjustment | **High** | A 1:10 split looks like a −90% crash; every indicator breaks on real NSE data |
| 2 | Fold warmup discards the first 60 bars of every fold | Medium | ~16% of each fold can never trade; fold stats are noisier than they need to be |
| 3 | "Walk-forward" does no parameter fitting | Medium | Correct name: fold-wise OOS. Mean of independent 100k runs ≠ compounded return |
| 4 | No volatility targeting | Medium | A fixed weight means position risk varies 2–3x across regimes |
| 5 | No per-position stop | Medium | One 90% position can gap; only the portfolio kill switch reacts |
| 6 | Kill switch needs a process restart to reset | Medium | Deliberate, but there is no operator runbook or alert |
| 7 | No persistence: ledger is in memory + stdout | Medium | Cannot reconcile or resume after a crash |
| 8 | No T+1 settlement, circuit limits, delivery margin | Medium | Paper fills assume instant cash and infinite liquidity |
| 9 | LLM calls have no retry/backoff | Low | One 429 becomes a neutral day |
| 10 | Single instrument, no benchmark index, synthetic data | **High** | The whole edge question is unanswered until this changes |

---

## 7. Bottom line

What is proven:

- The execution path is **honest**: no lookahead, costs on both sides, next-open fills.
- The risk layer **works**: it clamps the model, halts on drawdown, and cannot be prompted around.
- The analyst contract **works**: structured output, cache, budget, fail-closed.
- The harness can **prove a negative**: 568 calls, hit rate 48.9% vs 47.7% base — no edge.

What is not proven:

- Any edge, on any real market.
- That an LLM analyst beats a 20/50 SMA. On this data, it does not.

The next action is not "improve the prompt". It is: **load real NSE daily bars,
adjust for splits, and re-run the same report.** Until then, every number here
is a test of the machine, not of the market.
