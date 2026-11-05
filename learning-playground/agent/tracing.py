"""Tracing + runtime metrics. Stdlib only, no observability vendor required."""

import json
import math
import threading
import time
from contextlib import contextmanager
from datetime import datetime, timezone

from .config import MODEL, RUNS

_lock = threading.Lock()


def log_step(record: dict, run_name: str = "agent") -> None:
    record = {"ts": datetime.now(timezone.utc).isoformat(), **record}
    with _lock:
        with (RUNS / f"{run_name}.jsonl").open("a", encoding="utf-8") as f:
            f.write(json.dumps(record, ensure_ascii=False, default=str) + "\n")


@contextmanager
def trace(name: str, **fields):
    started = time.perf_counter()
    span = {"span": name, **fields}
    try:
        yield span
    finally:
        span["ms"] = round((time.perf_counter() - started) * 1000, 2)
        log_step(span, "trace")


class Metrics:
    """In-process counters. Swap for Prometheus if you ever need real scale."""

    def __init__(self, model: str = MODEL) -> None:
        self.model = model
        self.requests = 0
        self.blocked = 0
        self.errors = 0
        self.steps = 0
        self.cost_usd = 0.0
        self.latencies: list[float] = []
        self._lock = threading.Lock()

    def record(self, *, latency_ms: float, cost_usd: float, steps: int,
               blocked: bool, error: bool = False) -> None:
        with self._lock:
            self.requests += 1
            self.blocked += int(blocked)
            self.errors += int(error)
            self.steps += steps
            self.cost_usd += cost_usd
            self.latencies.append(latency_ms)

    def snapshot(self) -> dict:
        with self._lock:
            lat = sorted(self.latencies)
            p50 = lat[len(lat) // 2] if lat else 0.0
            # Nearest-rank percentile: index ceil(0.95*n)-1, clamped to the last sample.
            p95 = lat[min(len(lat) - 1, max(0, math.ceil(0.95 * len(lat)) - 1))] if lat else 0.0
            return {
                "model": self.model,
                "requests": self.requests,
                "blocked": self.blocked,
                "errors": self.errors,
                "avg_steps": round(self.steps / self.requests, 2) if self.requests else 0,
                "cost_usd_total": round(self.cost_usd, 6),
                "cost_usd_per_request": round(self.cost_usd / self.requests, 6) if self.requests else 0,
                "latency_p50_ms": round(p50, 1),
                "latency_p95_ms": round(p95, 1),
            }
