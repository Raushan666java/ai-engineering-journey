---
slug: /ai-engineering-placement/05-tracing-and-monitoring
title: "05 Tracing And Monitoring"
sidebar_label: "05 Tracing And Monitoring"
sidebar_position: 170
---
<!-- Clear Language: Keep sentences under 50 words -->
﻿# Tracing & Monitoring

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Implement distributed tracing for LLM applications |
| LO2 | Monitor latency, throughput, and cost metrics |
| LO3 | Build dashboards for real-time observability |
| LO4 | Set up performance baselines and anomaly detection |

## Introduction

You cannot improve what you cannot measure. Evaluation metrics, LLM-as-judge, and observability tools help you monitor and improve AI systems in production. This module covers the full evaluation stack.




## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding tracing and monitoring is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how tracing and monitoring works in practice.



## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 5.1 | Distributed Tracing | Spans, traces, parent-child relationships |
| 5.2 | Latency Monitoring | P50/P95/P99, bottleneck identification |
| 5.3 | Throughput & Cost | RPS, token tracking, cost per request |
| 5.4 | Dashboards | Real-time visualization, filtering |
| 5.5 | Anomaly Detection | Baselines, thresholds, outlier detection |

## Chapter Roadmap

```mermaid
flowchart LR
    subgraph Tracing
        S1[Span: LLM Call]
        S2[Span: Retrieval]
        S3[Span: Tool]
    end
    subgraph Metrics
        L[Latency]
        T[Throughput]
        C[Cost]
    end
    subgraph Monitoring
        D[Dashboard]
        A[Alerts]
        An[Anomalies]
    end
    S1 & S2 & S3 --> L
    L & T & C --> D --> A & An
```text

## 5.1 Distributed Tracing

### 5.1.1 Trace Context

```python
from dataclasses import dataclass
from typing import List, Dict, Optional, Any
import time
import uuid


@dataclass
class Span:
    name: str
    span_id: str
    parent_id: Optional[str] = None
    trace_id: str = ""
    start_time: float = 0.0
    end_time: float = 0.0
    attributes: Dict = None
    status: str = "ok"

    def duration_ms(self) -> float:
        if self.end_time > 0:
            return round((self.end_time - self.start_time) * 1000, 2)
        return 0.0


class Tracer:
    def __init__(self, service_name: str = "ai-app"):
        self.service = service_name
        self.spans: List[Span] = []
        self.current_trace_id: Optional[str] = None

    def start_trace(self) -> str:
        self.current_trace_id = str(uuid.uuid4())[:8]
        return self.current_trace_id

    def start_span(self, name: str, parent_id: str = None,
                    attributes: Dict = None) -> Span:
        span = Span(
            name=name,
            span_id=str(uuid.uuid4())[:8],
            parent_id=parent_id,
            trace_id=self.current_trace_id or "",
            start_time=time.time(),
            attributes=attributes or {},
        )
        self.spans.append(span)
        return span

    def end_span(self, span: Span, status: str = "ok"):
        span.end_time = time.time()
        span.status = status

    def get_trace_tree(self, trace_id: str) -> List[Span]:
        return [s for s in self.spans if s.trace_id == trace_id]

    def trace_summary(self, trace_id: str) -> Dict:
        spans = self.get_trace_tree(trace_id)
        if not spans:
            return {}

        root = next((s for s in spans if s.parent_id is None), spans[0])
        total_duration = root.duration_ms()

        return {
            "trace_id": trace_id,
            "total_spans": len(spans),
            "total_duration_ms": total_duration,
            "slowest_span": max(spans, key=lambda s: s.duration_ms()).name,
            "error_count": sum(1 for s in spans if s.status != "ok"),
        }


tracer = Tracer("agent-service")
trace_id = tracer.start_trace()
root = tracer.start_span("process_query")
retrieval = tracer.start_span("retrieval", root.span_id)
time.sleep(0.01)
tracer.end_span(retrieval)
llm = tracer.start_span("llm_call", root.span_id)
time.sleep(0.02)
tracer.end_span(llm)
tracer.end_span(root)
print(f"Trace summary: {tracer.trace_summary(trace_id)}")
```text

### 5.1.2 Distributed Context Propagation

```python
class ContextPropagator:
    def __init__(self):
        self.headers: Dict[str, str] = {}

    def inject(self, trace_id: str, span_id: str) -> Dict[str, str]:
        self.headers = {
            "x-trace-id": trace_id,
            "x-span-id": span_id,
        }
        return self.headers

    def extract(self, headers: Dict[str, str]) -> Dict:
        return {
            "trace_id": headers.get("x-trace-id", ""),
            "parent_span_id": headers.get("x-span-id", ""),
        }

    def propagate(self, headers: Dict[str, str], tracer: Tracer) -> Span:
        ctx = self.extract(headers)
        tracer.current_trace_id = ctx["trace_id"]
        span = tracer.start_span("propagated", ctx.get("parent_span_id"))
        return span


propagator = ContextPropagator()
headers = propagator.inject("trace-001", "span-001")
print(f"Injected headers: {headers}")
ctx = propagator.extract(headers)
print(f"Extracted context: {ctx}")
```text

## 5.2 Latency Monitoring

### 5.2.1 Latency Tracker

```python
class LatencyTracker:
    def __init__(self, window_size: int = 100):
        self.window = window_size
        self.latencies: List[float] = []
        self.buckets: Dict[str, List[float]] = {}

    def record(self, name: str, latency_ms: float):
        self.latencies.append(latency_ms)
        if len(self.latencies) > self.window * 10:
            self.latencies = self.latencies[-self.window:]

        if name not in self.buckets:
            self.buckets[name] = []
        self.buckets[name].append(latency_ms)

    def percentile(self, p: float, data: List[float] = None) -> float:
        values = sorted(data or self.latencies)
        if not values:
            return 0.0
        idx = max(0, min(len(values) - 1, int(len(values) * p / 100)))
        return round(values[idx], 2)

    def report(self) -> Dict:
        if not self.latencies:
            return {}

        return {
            "p50_ms": self.percentile(50),
            "p95_ms": self.percentile(95),
            "p99_ms": self.percentile(99),
            "mean_ms": round(np.mean(self.latencies), 2),
            "min_ms": round(np.min(self.latencies), 2),
            "max_ms": round(np.max(self.latencies), 2),
            "count": len(self.latencies),
        }

    def bucket_report(self) -> Dict:
        return {
            name: {
                "p50": round(np.median(v), 2) if v else 0,
                "p95": self.percentile(95, v) if v else 0,
                "count": len(v),
            }
            for name, v in self.buckets.items()
        }


lt = LatencyTracker()
for i in range(200):
    lt.record("llm_call", np.random.exponential(200))
    lt.record("retrieval", np.random.exponential(50))
print(f"Latency report: {lt.report()}")
```text

### 5.2.2 Bottleneck Detection

```python
class BottleneckDetector:
    def detect(self, spans: List[Span]) -> Dict:
        if not spans:
            return {}

        root = next((s for s in spans if s.parent_id is None), spans[0])
        children = [s for s in spans if s.parent_id == root.span_id]

        total = root.duration_ms()
        bottlenecks = []

        for child in children:
            pct = child.duration_ms() / total * 100
            bottlenecks.append({
                "span": child.name,
                "duration_ms": child.duration_ms(),
                "pct_of_total": round(pct, 1),
                "is_bottleneck": pct > 40,
            })

        return {
            "total_duration_ms": total,
            "bottlenecks": bottlenecks,
            "has_bottleneck": any(b["is_bottleneck"] for b in bottlenecks),
        }


detector = BottleneckDetector()
spans = [
    Span("root", "r1", None, "t1", 0, 200),
    Span("llm_call", "s1", "r1", "t1", 10, 180),
    Span("retrieval", "s2", "r1", "t1", 5, 25),
]
print(f"Bottlenecks: {detector.detect(spans)}")
```text

## 5.3 Throughput & Cost

### 5.3.1 Throughput Calculator

```python
class ThroughputTracker:
    def __init__(self):
        self.requests: List[float] = []
        self.tokens_input: List[int] = []
        self.tokens_output: List[int] = []
        self.costs: List[float] = []

    def record_request(self, input_tokens: int, output_tokens: int,
                        cost: float):
        self.requests.append(time.time())
        self.tokens_input.append(input_tokens)
        self.tokens_output.append(output_tokens)
        self.costs.append(cost)

    def rps(self, window_seconds: int = 60) -> float:
        now = time.time()
        recent = [t for t in self.requests if now - t < window_seconds]
        return len(recent) / window_seconds if window_seconds > 0 else 0

    def rpm(self) -> float:
        return self.rps(60) * 60

    def token_usage(self) -> Dict:
        return {
            "total_input_tokens": sum(self.tokens_input),
            "total_output_tokens": sum(self.tokens_output),
            "avg_input": round(np.mean(self.tokens_input), 1) if self.tokens_input else 0,
            "avg_output": round(np.mean(self.tokens_output), 1) if self.tokens_output else 0,
        }

    def cost_report(self) -> Dict:
        return {
            "total_cost": round(sum(self.costs), 4),
            "avg_cost_per_request": round(np.mean(self.costs), 6) if self.costs else 0,
            "estimated_daily_cost": round(np.mean(self.costs) * len(self.requests) * 24, 2) if self.costs else 0,
        }

    def report(self) -> Dict:
        return {
            "rps": round(self.rps(), 2),
            "rpm": round(self.rpm(), 2),
            "total_requests": len(self.requests),
            "tokens": self.token_usage(),
            "costs": self.cost_report(),
        }


tt = ThroughputTracker()
for _ in range(50):
    tt.record_request(200, 50, 0.002)
print(f"Throughput report: {tt.report()}")
```text

### 5.3.2 Cost Per Component

```python
class CostTracker:
    def __init__(self):
        self.components: Dict[str, List[float]] = {}

    def record(self, component: str, cost: float):
        if component not in self.components:
            self.components[component] = []
        self.components[component].append(cost)

    def report(self) -> Dict:
        total = sum(sum(v) for v in self.components.values())
        breakdown = {}

        for component, costs in self.components.items():
            breakdown[component] = {
                "total": round(sum(costs), 4),
                "pct": round(sum(costs) / total * 100, 1) if total > 0 else 0,
                "avg": round(np.mean(costs), 6),
                "count": len(costs),
            }

        return {
            "total_cost": round(total, 4),
            "breakdown": breakdown,
            "primary_cost_driver": max(breakdown, key=lambda k: breakdown[k]["total"]) if breakdown else "",
        }


ct = CostTracker()
ct.record("llm", 0.005)
ct.record("llm", 0.003)
ct.record("embedding", 0.0005)
ct.record("search", 0.0001)
print(f"Cost report: {ct.report()}")
```text

## 5.4 Dashboards

### 5.4.1 Dashboard Builder

```python
class DashboardPanel:
    def __init__(self, name: str, metric: str, chart_type: str = "line"):
        self.name = name
        self.metric = metric
        self.chart_type = chart_type
        self.data: List[Dict] = []

    def add_data_point(self, timestamp: float, value: float, tags: Dict = None):
        self.data.append({"ts": timestamp, "value": value, "tags": tags or {}})

    def summary(self) -> Dict:
        values = [d["value"] for d in self.data]
        if not values:
            return {}
        return {
            "name": self.name,
            "metric": self.metric,
            "mean": round(np.mean(values), 2),
            "min": round(np.min(values), 2),
            "max": round(np.max(values), 2),
            "last": values[-1] if values else None,
        }


class Dashboard:
    def __init__(self, name: str, refresh_interval: int = 30):
        self.name = name
        self.refresh = refresh_interval
        self.panels: List[DashboardPanel] = []

    def add_panel(self, panel: DashboardPanel):
        self.panels.append(panel)

    def render(self) -> Dict:
        return {
            "dashboard": self.name,
            "refresh_seconds": self.refresh,
            "panels": [p.summary() for p in self.panels],
            "generated_at": time.time(),
        }


panel = DashboardPanel("LLM Latency", "latency_ms")
for i in range(60):
    panel.add_data_point(time.time(), np.random.exponential(200))
db = Dashboard("Production Overview", 30)
db.add_panel(panel)
print(f"Dashboard: {db.render()}")
```text

### 5.4.2 Alert Rules

```python
class AlertRule:
    def __init__(self, name: str, metric: str, condition: str,
                 threshold: float, window: int = 5):
        self.name = name
        self.metric = metric
        self.condition = condition
        self.threshold = threshold
        self.window = window
        self.violations: List[float] = []

    def check(self, value: float) -> bool:
        violated = False
        if self.condition == ">" and value > self.threshold:
            violated = True
        elif self.condition == "<" and value < self.threshold:
            violated = True
        elif self.condition == ">=" and value >= self.threshold:
            violated = True
        elif self.condition == "<=" and value <= self.threshold:
            violated = True

        if violated:
            self.violations.append(value)
            if len(self.violations) > self.window * 10:
                self.violations = self.violations[-self.window:]
        return violated

    def alert(self) -> Optional[str]:
        if len(self.violations) >= self.window:
            recent = self.violations[-self.window:]
            avg = np.mean(recent)
            return f"ALERT: {self.name} - avg {avg:.2f} over {self.window} checks (threshold: {self.threshold})"
        return None


rule = AlertRule("High Latency", "p95_latency", ">", 2000, window=3)
for lat in [1500, 1800, 2500, 2800, 3100]:
    if rule.check(lat):
        alert_msg = rule.alert()
        if alert_msg:
            print(alert_msg)
```text

## 5.5 Anomaly Detection

### 5.5.1 Baseline Manager

```python
class BaselineManager:
    def __init__(self, window: int = 100):
        self.window = window
        self.baselines: Dict[str, Dict] = {}
        self.current_values: Dict[str, List[float]] = {}

    def update(self, metric: str, value: float):
        if metric not in self.current_values:
            self.current_values[metric] = []
        self.current_values[metric].append(value)

        if len(self.current_values[metric]) >= self.window:
            values = self.current_values[metric]
            self.baselines[metric] = {
                "mean": np.mean(values),
                "std": np.std(values),
                "p50": np.percentile(values, 50),
                "p95": np.percentile(values, 95),
                "p99": np.percentile(values, 99),
                "sample_size": len(values),
            }
            self.current_values[metric] = []

    def is_anomaly(self, metric: str, value: float,
                    std_threshold: float = 3.0) -> Dict:
        baseline = self.baselines.get(metric)
        if not baseline:
            return {"is_anomaly": False, "reason": "No baseline yet"}

        z_score = abs(value - baseline["mean"]) / max(baseline["std"], 0.001)
        is_anomaly = z_score > std_threshold

        return {
            "is_anomaly": is_anomaly,
            "value": value,
            "baseline_mean": round(baseline["mean"], 2),
            "z_score": round(z_score, 2),
            "threshold": std_threshold,
            "reason": f"{'Anomaly' if is_anomaly else 'Normal'}: z={z_score:.1f} vs threshold={std_threshold}",
        }


bm = BaselineManager(window=20)
for i in range(30):
    bm.update("latency", np.random.normal(200, 50))
print(f"Baseline: {bm.baselines.get('latency', {})}")
print(f"Anomaly check on 500ms: {bm.is_anomaly('latency', 500)}")
```text

### 5.5.2 Statistical Anomaly Detection

```python
class StatisticalAnomalyDetector:
    def __init__(self):
        self.history: Dict[str, List[float]] = {}

    def iqr_detection(self, metric: str, value: float) -> Dict:
        if metric not in self.history or len(self.history[metric]) < 10:
            return {"is_anomaly": False, "reason": "Insufficient data"}

        values = self.history[metric]
        q1 = np.percentile(values, 25)
        q3 = np.percentile(values, 75)
        iqr = q3 - q1
        lower = q1 - 1.5 * iqr
        upper = q3 + 1.5 * iqr

        is_anomaly = value < lower or value > upper
        return {
            "is_anomaly": is_anomaly,
            "method": "iqr",
            "value": value,
            "q1": round(q1, 2),
            "q3": round(q3, 2),
            "iqr": round(iqr, 2),
            "bounds": (round(lower, 2), round(upper, 2)),
        }

    def moving_average_detection(self, metric: str, value: float,
                                  window: int = 5, threshold: float = 2.0) -> Dict:
        if metric not in self.history or len(self.history[metric]) < window:
            return {"is_anomaly": False, "reason": "Insufficient data"}

        recent = self.history[metric][-window:]
        mean = np.mean(recent)
        std = np.std(recent)

        z = abs(value - mean) / max(std, 0.001)
        return {
            "is_anomaly": z > threshold,
            "method": "moving_average",
            "value": value,
            "window_mean": round(mean, 2),
            "z_score": round(z, 2),
        }


sad = StatisticalAnomalyDetector()
for i in range(20):
    metric = "latency"
    if metric not in sad.history:
        sad.history[metric] = []
    sad.history[metric].append(np.random.normal(200, 30))
print(f"IQR detection: {sad.iqr_detection('latency', 500)}")
```text

## Summary

Tracing captures the full execution path of an LLM request through spans (individual operations) organized in a trace tree. Key latency metrics are P50 (median),.
P95 (typical worst case), and P99 (extreme outliers). Throughput tracks requests per second/minute, and cost tracking breaks down spending by component (LLM,.
embeddings, search). Dashboards aggregate these metrics into real-time views with alert rules triggered by threshold violations. Anomaly detection uses baselines (mean/std over a window),.
IQR (interquartile range), or moving average Z-scores to flag unusual behavior. A robust monitoring stack catches P99 latency spikes, cost surges,.
throughput drops, and anomalous token usage patterns before they impact users.

## Practical Takeaways

| Takeaway | Description |
|----------|-------------|
| Always trace requests | Traces are essential for debugging production issues |
| Monitor P95 and P99 | Mean latency hides outliers |
| Track cost per component | Identifies expensive operations |
| Set up baselines | Learn normal behavior before detecting anomalies |
| Use IQR for anomaly detection | Simple, interpretable, no distribution assumptions |
| Alert on sustained violations | Single spikes are noise; sustained = real problem |

## Interview Q&A

<details class="tp-qa-card" data-qid="ev05-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What is distributed tracing and how does it apply to LLM applications?
  </summary>
  <div class="tp-qa-answer">
<p>Distributed tracing follows a single request across all components in a distributed system. In an LLM application, a single user request might go through: API gateway → orchestrator.
→ vector database → LLM provider → output validator → response. Each step is captured as a span with timing, status,.
and metadata, linked together by a shared trace ID. This allows developers to identify bottlenecks — for example, if P95 latency is high,.
tracing reveals whether the bottleneck is in vector search (slow embedding), LLM inference (large model), or post-processing (regex/parsing). Modern tracing follows the OpenTelemetry standard for.
interoperability across platforms.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ev05-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: What is the difference between P50, P95, and P99 latency, and which should you monitor?
  </summary>
  <div class="tp-qa-answer">
<p>P50 (median) is the latency below which 50% of requests fall — it represents typical performance. P95 is the latency below which 95% of requests fall — it represents the typical worst case. P99 is the latency below which 99%.
of requests fall — it captures extreme outliers. You should monitor.
all three because they tell different stories: a low P50 with high P99 indicates that most requests are fast but a small fraction are very slow (possibly due to cache misses or.
large inputs). For LLM applications, P95 is the most commonly used SLA metric because it captures the worst-case experience for the majority of users while ignoring the rarest outliers.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ev05-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: How do you implement cost tracking per LLM request in a tracing system?
  </summary>
  <div class="tp-qa-answer">
<p>Cost tracking at the individual request level requires: (1) Capturing token counts (prompt tokens, completion tokens) from the LLM provider's response. (2) Applying the provider's pricing formula — e.g.,.
GPT-4 costs $10/1M input tokens and $30/1M output tokens. (3) Calculating cost per request: cost = (prompt_tokens — input_price + completion_tokens — output_price) / 1,000,000. (4) Aggregating costs across spans to get total request cost (including embedding costs,.
vector search costs). (5) Tagging costs with tenant_id, model_name, and endpoint for per-tenant billing. Store cost per trace in the observability system and.
create dashboards for cost trends over time.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ev05-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How do you detect anomalies in LLM latency using statistical methods?
  </summary>
  <div class="tp-qa-answer">
<p>Anomaly detection methods for latency: (1) Moving average Z-score — compute rolling mean and standard deviation over a window (e.g., 10 minutes),.
flag any data point where |z-score| > 3. (2) IQR method — flag values below Q1 - 1.5—IQR or above Q3 + 1.5—IQR. (3) Seasonal decomposition — separate trend,.
seasonal, and residual components, flag anomalous residuals. (4) Dynamic thresholding — set thresholds automatically from recent history (e.g., threshold = rolling mean + 3—rolling std). For.
LLM applications, anomalies might indicate degraded LLM provider performance, network issues, or unusually long inputs. Always combine multiple detectors and require sustained anomalies (e.g.,.
3 consecutive minutes above threshold) before alerting.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ev05-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: What metrics should you include on an LLM application monitoring dashboard?
  </summary>
  <div class="tp-qa-answer">
<p>A comprehensive LLM monitoring dashboard should include: (1) Latency panel — line chart showing P50, P95, P99 over time. (2) Throughput panel — requests per minute/second with breakdown by endpoint. (3) Cost panel — cost per hour/day with breakdown by model and.
tenant. (4) Error rate panel — percentage of failed requests by error type (timeout, rate limit, invalid response). (5) Token usage panel — total tokens per minute,.
average tokens per request. (6) Model distribution — pie chart of requests per model version. (7) Top slow queries — table of longest-running requests. (8) Quality score trend — if using LLM-as-Judge,.
overlay quality scores on the same timeline.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ev05-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How do you propagate trace context across synchronous and asynchronous LLM calls?
  </summary>
  <div class="tp-qa-answer">
<p>Trace context propagation uses the W3C Trace Context standard with traceparent headers. For synchronous calls, the trace ID and parent span ID are passed via HTTP headers: <code>traceparent: 00-{trace_id}-{parent_span_id}-01</code>. The receiving service extracts these headers and.
creates a child span. For asynchronous calls (message queues, background jobs), the trace context is serialized into the message payload and.
extracted when the message is processed. In-process context propagation uses AsyncLocalStorage (Node.js) or contextvars (Python), which automatically carries the current span across async boundaries. The key requirement: every component in the system must understand.
and propagate trace context.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ev05-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: How do you set up a baseline for anomaly detection in a new LLM application?
  </summary>
  <div class="tp-qa-answer">
<p>Setting a baseline: (1) Run the system with representative traffic for at least 1-2 weeks to capture normal behavior across different times of day and.
days of the week. (2) Calculate daily and weekly patterns — many LLM apps have higher traffic during business hours. (3) For.
each metric (latency, throughput, error rate), compute: rolling mean, standard deviation, and typical min/max ranges. (4) Identify any known events during the baseline period (deployments,.
traffic spikes) and exclude them from baseline calculations. (5) Store the baseline as configuration that anomaly detectors reference. Recalculate baselines periodically (monthly) or.
when significant system changes occur.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ev05-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: What are the common bottlenecks in LLM inference pipelines and how do you identify them?
  </summary>
  <div class="tp-qa-answer">
<p>Common bottlenecks: (1) Token generation — the LLM itself, especially for long outputs with autoregressive decoding. Mitigation: use smaller models for.
simple tasks, implement speculative decoding, or use batching. (2) Embedding generation — for RAG systems, embedding the query takes 50-200ms. Mitigation: cache embeddings for.
frequent queries. (3) Vector search — approximate nearest neighbor search can take 10-100ms. Mitigation: tune HNSW parameters (ef_search, M). (4) Network latency — calls to external LLM APIs. Mitigation: colocate with provider region,.
use connection pooling. (5) Post-processing — regex parsing or validation. Tracing with span-level timing identifies which stage consumes the most time as a proportion of total request duration.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ev05-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: How do you monitor throughput and set capacity planning for LLM APIs?
  </summary>
  <div class="tp-qa-answer">
<p>Throughput monitoring tracks requests per second/minute (RPS/RPM) with breakdowns by endpoint, model, and tenant. For capacity planning: (1) Track the peak-to-average ratio — if peak is 5— average,.
you need 5— headroom. (2) Monitor LLM provider rate limits — track usage vs. limits for each model tier. (3) Measure tokens-per-second generation rate — this varies by model size and.
hardware. (4) Set utilization alerts — warn when average RPS exceeds 70% of maximum capacity. (5) Model queue depth — monitor.
how many requests are waiting for LLM inference slots. Use these metrics to scale horizontally: add more API instances, increase rate limit tiers,.
or distribute load across multiple providers.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ev05-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How do you implement a trace tree and identify the critical path in an LLM request?
  </summary>
  <div class="tp-qa-answer">
    <pre><code>interface Span { name: string; startTime: number; duration: number; children: Span[]; }
function findCriticalPath(root: Span): Span[] {
  const path: Span[] = [root];
  let current = root;
  while (current.children.length > 0) {
    const slowest = current.children.reduce((a, b) =>
      a.duration > b.duration ? a : b
    );
    path.push(slowest);
    current = slowest;
  }
  return path;
}</pre></code>
<p>The critical path is the longest sequence of dependent spans that determines the minimum request duration. To find it, traverse the trace tree from the root,.
always following the child span with the longest duration. This identifies the bottleneck in the pipeline. For an LLM request, the critical path might be: root (1200ms) → LLM call (800ms) → token generation (750ms). This tells you that optimizing.
token generation will have the biggest impact on overall latency. The critical path also reveals parallelizable work — spans that are not on the critical path (e.g.,.
logging, analytics) can be moved to background tasks without affecting response time.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

<details data-qid="eval-s5-quiz1">
<summary><strong>1.</strong> What does a span represent in distributed tracing?</summary>
A. A complete request
B. A single operation within a trace
C. An error message
D. A log entry
Answer: B
</details>

<details data-qid="eval-s5-quiz2">
<summary><strong>2.</strong> What does P99 latency mean?</summary>
A. 99% of requests are slower than this
B. 99% of requests are faster than this
C. The average latency
D. The minimum latency
Answer: B
</details>

<details data-qid="eval-s5-quiz3">
<summary><strong>3.</strong> What is a bottleneck in tracing?</summary>
A. A span that takes the most time
B. A span with errors
C. The root span
D. The fastest span
Answer: A
</details>

<details data-qid="eval-s5-quiz4">
<summary><strong>4.</strong> How does IQR detect anomalies?</summary>
A. By comparing to a fixed threshold
B. By flagging values outside 1.5—IQR from quartiles
C. By using neural networks
D. By checking error rates
Answer: B
</details>

<details data-qid="eval-s5-quiz5">
<summary><strong>5.</strong> Why alert on sustained violations rather than single spikes?</summary>
A. Single spikes are always normal
B. Sustained violations indicate a real problem, not noise
C. Alerts are expensive
D. Systems can't detect single spikes
Answer: B
</details>

## Exercises


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition1. Implement a tracer that creates a trace tree with 3-5 spans (agent → retrieve → llm → format → output). Record timing and report total duration.

2. Build a latency tracker that records P50, P95, P99 from 1000 simulated requests (mean=200ms, std=50ms). Identify the slowest 1% of requests.

3. Create a throughput and cost tracker. Simulate 1 hour of traffic at 10 RPM with avg cost $0.002/req. Report RPS, RPM, total cost, and estimated daily cost.

4. Build a dashboard with 3 panels: latency (P95 line chart), throughput (RPM gauge), and cost (per-component breakdown). Simulate 1 hour of data.

5. Implement an anomaly detector using both IQR and moving average Z-score methods. Test with a dataset containing 3 anomalous values and evaluate detection

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 15-ai-evaluation-observability. When would you choose one approach over another?
2. Design a system that efficiently handles 15-ai-evaluation-observability at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 15-ai-evaluation-observability. What was your approach and what was the result?
2. How would you explain 15-ai-evaluation-observability to a non-technical stakeholder?

#### Microsoft Style
1. How does 15-ai-evaluation-observability integrate with enterprise systems and cloud architectures?
2. What are the security implications of 15-ai-evaluation-observability?

#### NVIDIA Style
1. How would you optimize 15-ai-evaluation-observability for GPU-accelerated computing?
2. What parallel processing patterns apply to 15-ai-evaluation-observability?

#### AI Startup Style
1. How would you implement 15-ai-evaluation-observability in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 15-ai-evaluation-observability?

### Resume Tips
- **Technical Skills**: List 15-ai-evaluation-observability under relevant technical skills
- **Project Description**: "Implemented 15-ai-evaluation-observability to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 15-ai-evaluation-observability in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 15-ai-evaluation-observability
- [ ] Practice 3-5 problems related to 15-ai-evaluation-observability
- [ ] Prepare 2 real-world examples of using 15-ai-evaluation-observability
- [ ] Know the time/space complexity of common 15-ai-evaluation-observability operations
- [ ] Have questions ready about how the company uses 15-ai-evaluation-observabilityaccuracy.


## Difficulty Level

**Level**: Intermediate
**Estimated Study Time**: 30-45 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to AI Evaluation & Observability fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master tracing and monitoring?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

The Evolution of this technology reflects decades of research and practical engineering experience.

Understanding the evolution of tracing and monitoring helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding tracing and monitoring at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of tracing and monitoring like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply tracing and monitoring concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of tracing and monitoring?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply tracing and monitoring in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (12 minutes)
**Day 2**: Complete exercises and practice (12 minutes)
**Day 3**: Review flashcards and take quiz (6 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying this topic to production, consider:
- Fine-tuning with LoRA or Adapters for domain adaptation
- Adapting general principles to your specific use cases
- Performance optimization for target hardware
- Cost considerations for deployment


## Open-Source Tools

- **LangChain**: Framework for building LLM-powered applications
- **LlamaIndex**: Data framework for connecting LLMs with external data
- **Hugging Face Transformers**: State-of-the-art ML models and datasets
- **Weights & Biases**: Experiment tracking and model evaluation
- **MLflow**: Open-source platform for ML lifecycle management
- **Prometheus + Grafana**: Monitoring and observability stack

## Debugging Guide

**Common Issues**:
- Check input validation and data types
- Verify API keys and authentication
- Monitor resource usage (CPU, memory, GPU)
- Review error logs for stack traces

**Debugging Steps**:
1. Reproduce the issue with minimal input
2. Add logging at key points
3. Check external dependencies
4. Verify configuration settings
5. Test with known-good inputs

## Mock Interview Section

**Quick Fire Questions**:
1. What is the core concept of AI Evaluation & Observability?
2. When would you use this in production?
3. What are the trade-offs?
4. How does this scale?
5. What are common pitfalls?

**Follow-up Questions**:
- How would you optimize this for 10x scale?
- What monitoring would you add?
- How would you test this in production?

## References

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers from NeurIPS, ICML, ICLR
- Industry blogs from Google, Meta, OpenAI, Anthropic

## Evaluation Metrics

**Model Evaluation**:
- Accuracy, Precision, Recall, F1-Score
- BLEU, ROUGE for text generation
- Latency, Throughput, Cost per inference

**System Evaluation**:
- End-to-end latency (p50, p95, p99)
- Error rate and availability
- Resource utilization (CPU, memory, GPU)

## Real-World Examples

**Industry Applications**:
- Google: Search ranking, translation, autocomplete
- Amazon: Product recommendations, Alexa, fraud detection
- Netflix: Content recommendations, personalization
- Tesla: Autonomous driving, computer vision
- OpenAI: ChatGPT, DALL-E, Codex

## Next Topic

After mastering AI Evaluation & Observability, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.

## Limitations

Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique.
