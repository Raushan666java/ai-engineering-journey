"""Price data: CSV loader + synthetic generator (offline demo)."""

import csv
import math
import random
from dataclasses import dataclass
from datetime import date, timedelta
from pathlib import Path


@dataclass
class Bar:
    date: str
    open: float
    high: float
    low: float
    close: float
    volume: int = 0


def load_csv(path: Path) -> list[Bar]:
    """Expects columns: date,open,high,low,close[,volume]."""
    bars: list[Bar] = []
    with path.open(encoding="utf-8", newline="") as f:
        for row in csv.DictReader(f):
            bars.append(
                Bar(
                    date=row.get("date") or row.get("Date", ""),
                    open=float(row.get("open") or row.get("Open")),
                    high=float(row.get("high") or row.get("High")),
                    low=float(row.get("low") or row.get("Low")),
                    close=float(row.get("close") or row.get("Close")),
                    volume=int(float(row.get("volume") or row.get("Volume") or 0)),
                )
            )
    return bars


def synthetic(days: int = 1500, start: float = 100.0, seed: int = 7) -> list[Bar]:
    """Geometric brownian motion with two regimes. Reproducible, no network."""
    rng = random.Random(seed)
    price = start
    bars: list[Bar] = []
    day = date(2019, 1, 1)

    for i in range(days):
        # regime: bull for long stretches, bear for short sharp ones
        drift = 0.0006 if (i // 250) % 3 != 2 else -0.0012
        vol = 0.013 if (i // 250) % 3 != 2 else 0.025

        open_ = price
        ret = rng.gauss(drift, vol)
        close = max(1.0, open_ * (1 + ret))
        high = max(open_, close) * (1 + abs(rng.gauss(0, 0.004)))
        low = min(open_, close) * (1 - abs(rng.gauss(0, 0.004)))
        bars.append(Bar(day.isoformat(), round(open_, 2), round(high, 2),
                        round(low, 2), round(close, 2), rng.randint(100_000, 900_000)))
        price = close
        day += timedelta(days=1)
        while day.weekday() >= 5:          # skip weekends
            day += timedelta(days=1)

    return bars
