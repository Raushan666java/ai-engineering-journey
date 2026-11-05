"""Indicators computed only from bars[0:i]. No lookahead, ever.

Every function takes an index and reads strictly before it. That is the whole
contract, and `tests/test_trading_agent.py` checks it by truncating the data.

The output of `snapshot()` is what an analyst (rule-based or LLM) is allowed to
see. Keep it small: a model given 5 years of raw candles will hallucinate a
pattern, and you will pay for the privilege.
"""

from data import Bar


def _mean(xs: list[float]) -> float:
    return sum(xs) / len(xs) if xs else 0.0


def sma(closes: list[float], n: int) -> float | None:
    return _mean(closes[-n:]) if len(closes) >= n else None


def rsi(closes: list[float], n: int = 14) -> float | None:
    """Wilder's RSI. 50 = balanced, >70 stretched, <30 washed out."""
    if len(closes) < n + 1:
        return None
    gains, losses = 0.0, 0.0
    for i in range(len(closes) - n, len(closes)):
        change = closes[i] - closes[i - 1]
        gains += max(change, 0.0)
        losses += max(-change, 0.0)
    if losses == 0:
        return 100.0
    rs = (gains / n) / (losses / n)
    return 100.0 - 100.0 / (1.0 + rs)


def atr(bars: list[Bar], n: int = 14) -> float | None:
    """Average true range in price units, then expressed as % of close."""
    if len(bars) < n + 1:
        return None
    ranges = []
    for i in range(len(bars) - n, len(bars)):
        prev_close = bars[i - 1].close
        ranges.append(max(
            bars[i].high - bars[i].low,
            abs(bars[i].high - prev_close),
            abs(bars[i].low - prev_close),
        ))
    return _mean(ranges)


def realized_vol(closes: list[float], n: int = 20) -> float | None:
    """Annualised stdev of daily returns, as a fraction (0.22 = 22% a year)."""
    if len(closes) < n + 1:
        return None
    rets = [closes[i] / closes[i - 1] - 1 for i in range(len(closes) - n + 1, len(closes))]
    if len(rets) < 2:
        return None
    m = _mean(rets)
    var = sum((r - m) ** 2 for r in rets) / (len(rets) - 1)
    return (var ** 0.5) * (252 ** 0.5)


def momentum(closes: list[float], n: int = 20) -> float | None:
    if len(closes) <= n:
        return None
    return closes[-1] / closes[-1 - n] - 1


def snapshot(bars: list[Bar], i: int) -> dict | None:
    """What the analyst sees at bar `i`, using bars[:i] only.

    Returns None until there is enough history — in which case the system holds
    cash. Not knowing is a position.
    """
    history = bars[:i]
    if len(history) < 60:
        return None

    closes = [b.close for b in history]
    close = closes[-1]
    s20, s50, s200 = sma(closes, 20), sma(closes, 50), sma(closes, 200)
    vol20 = realized_vol(closes, 20)
    vol60 = realized_vol(closes, 60)
    atr14 = atr(history, 14)

    def pct(x: float | None) -> float | None:
        return None if x is None else round(x * 100, 2)

    return {
        "date": history[-1].date,
        "close": round(close, 2),
        "sma20": None if s20 is None else round(s20, 2),
        "sma50": None if s50 is None else round(s50, 2),
        "sma200": None if s200 is None else round(s200, 2),
        "above_sma50": s50 is not None and close > s50,
        "sma20_above_sma50": (s20 is not None and s50 is not None and s20 > s50),
        "rsi14": None if (r := rsi(closes)) is None else round(r, 2),
        "momentum20_pct": pct(momentum(closes, 20)),
        "vol20_annual_pct": pct(vol20),
        "vol_ratio_20_60": None if not vol20 or not vol60 else round(vol20 / vol60, 2),
        "atr14_pct": None if not atr14 else round(atr14 / close * 100, 2),
        "drawdown60_pct": round((close / max(closes[-60:]) - 1) * 100, 2),
    }
