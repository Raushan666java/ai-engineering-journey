# Chapter 17: Observability and Resiliency Patterns
> **Previous:** [16 Api Gateways Cqrs](./16-api-gateways-cqrs.md) | **Next:** [18 Case Studies Classic](./18-case-studies-classic.md)

---
## Learning Objectives

- Implement the three pillars of observability: logging, metrics, and distributed tracing
- Design Prometheus metrics with Counter, Gauge, Histogram, and Summary types using the RED and USE methods
- Construct distributed traces with OpenTelemetry, including context propagation and sampling strategies
- Implement circuit breaker, bulkhead, retry, and rate limiting patterns for resilient microservices
- Formulate graceful degradation and load shedding strategies for overload scenarios
- Apply chaos engineering principles with controlled experiments and blast radius minimization

## Chapter at a Glance

| Aspect | Details |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Core Concepts] --> B[Design Decisions]
    B --> C[Real-World Examples]
```
|--------|---------|
| **Scope** | Observability, monitoring, logging, tracing, circuit breakers, resiliency |
| **Key Concepts** | Core topics covered in Chapter 17: Observability and Resiliency Patterns |
| **Design Skills** | Monitoring strategy, circuit breaker tuning, retry design |
| **Interview Angle** | Frequently tested in system design interviews |

## Chapter at a Glance

| Aspect | Details |
|--------|---------|
| **Scope** | Core concepts covered in Chapter 17: Observability and Resiliency Patterns |
| **Key Concepts** | Theory, Examples, Concept Comparison, Quick Reference |
| **Design Skills** | Concept mastery and practical application |
| **Interview Angle** | Common system design interview topic |

---
---

## Chapter Roadmap

```mermaid
flowchart LR
    A[Theory]
    B[Concept Comparison]
    A --> B
    C[Quick Reference]
    B --> C
    D[CrossApplication Matrix]
    C --> D
    E[Chapter Quiz]
    D --> E
```

---

## Theory
> **One-Sentence Takeaway:** Theory is the foundation ? master it before moving to examples and exercises.

![Observability and Resiliency Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/17-observability-resiliency.png)

### 1. The Three Pillars of Observability

> **Pro Tip:** Master this concept thoroughly ? it is frequently tested in system design interviews.

> **Pro Tip:** Master this concept ? it appears in nearly every system design interview. Understand both the how and the why.

> **Warning:** A common mistake is over-engineering. Always start simple and add complexity only when justified by requirements.

> **Pro Tip:** Master this concept thoroughly ? it appears in nearly every system design interview.
Observability is the ability to understand a system's internal state from its external outputs. Three data types form the foundation:

**Logging**: Immutable, timestamped records of discrete events. Structured logs (JSON) include severity level, module, correlation ID, and key-value pairs. Best for debugging specific requests and post-mortem analysis.

**Metrics**: Numeric measurements aggregated over time. Optimized for storage (low cardinality time-series), alerting, and dashboard visualization. Low overhead per data point.

**Tracing**: End-to-end request paths across distributed services. Each trace is a tree of spans (individual operations). Captures causality and timing. Best for latency analysis and dependency mapping.

**RED Method** (for services): Rate (requests/second), Errors (failed requests/second), Duration (latency distribution). Every service should expose at minimum these three metrics.

**USE Method** (for resources): Utilization (time resource busy), Saturation (work queued), Errors (failure count). Applied to CPU, memory, disk, network — every infrastructure resource.

**Four Golden Signals** (Google SRE):
- **Latency**: Time to service a request. Distinguish success latency (fast) from error latency (slow).
- **Traffic**: Demand on the system. Requests per second, active connections, throughput.
- **Errors**: Rate of failed requests. Explicit (500s, timeouts) and implicit (200 OK with wrong content).
- **Saturation**: How "full" the system is. Queue depth, CPU utilization, memory pressure.

### 2. Prometheus

> **Warning:** Avoid over-engineering. Start simple, measure, then optimize.

> **Warning:** Avoid premature optimization. Start simple, measure, then optimize. Over-engineering is the most common system design mistake.

Prometheus is a pull-based metrics monitoring system. It scrapes HTTP endpoints (typically /metrics) at configurable intervals.

**Metric types**:

| Type      | Description                                  | Example                          |
|-----------|----------------------------------------------|----------------------------------|
| Counter   | Monotonically increasing value               | total_requests, errors_total     |
| Gauge     | Arbitrarily fluctuating value                | cpu_temp, queue_depth, mem_used  |
| Histogram | Observing values in configurable buckets     | request_duration_seconds buckets  |
| Summary   | Quantile estimation (precomputed)            | request_latency_seconds{p50,p99} |

**Pull model**: Prometheus server scrapes targets. This simplifies discovery (service registry or file-based target lists), improves reliability (if target is down, Prometheus detects), and avoids push congestion.

**Histogram vs Summary**: Histogram computes quantiles on the server side from bucket counters. Summary computes quantiles on the client side. Histograms support aggregation across instances; summaries do not (quantiles are not additive).

```
# HELP http_requests_total Total HTTP requests
# TYPE http_requests_total counter
http_requests_total{method="GET",path="/api/users",status="200"} 1024
http_requests_total{method="POST",path="/api/orders",status="500"} 7

# HELP request_duration_seconds Request latency
# TYPE request_duration_seconds histogram
request_duration_seconds_bucket{le="0.01"} 100
request_duration_seconds_bucket{le="0.05"} 450
request_duration_seconds_bucket{le="0.1"} 780
request_duration_seconds_bucket{le="0.5"} 950
request_duration_seconds_bucket{le="1.0"} 990
request_duration_seconds_bucket{le="+Inf"} 1000
request_duration_seconds_sum 125.7
request_duration_seconds_count 1000
```

**Alertmanager**: Handles alert deduplication, grouping, silencing, and routing. Configure alert rules in Prometheus:

```yaml
groups:
- name: api-alerts
  rules:
  - alert: HighErrorRate
    expr: rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.05
    for: 3m
    labels: { severity: critical }
    annotations:
      summary: "API error rate above 5% for 3 minutes"
```

### 3. Grafana

> **Remember:** Always articulate trade-offs clearly ? interviewers value reasoning over the "right" answer.

> **Remember:** Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y.

Grafana provides visualization, dashboards, and alerting. Connects to Prometheus (and many other data sources). Key features:

- **Dashboards**: Templated with variables (environment, service, region). Auto-refresh.
- **Alerting**: Unified alerting engine. Evaluate queries, route via Alertmanager or Grafana OnCall. Support for silences, mute timings, and escalation chains.
- **Annotations**: Overlay deployment events, incidents, or config changes on graphs for correlation.

```
Dashboard structure:
  Row: Latency
    Panel: P50 latency (time series)
    Panel: P99 latency (time series)
  Row: Traffic
    Panel: Requests per second (rate)
  Row: Errors
    Panel: Error rate by status code
    Panel: Error rate by service
  Row: Saturation
    Panel: CPU utilization per pod
    Panel: Memory usage per pod
```

### 4. Distributed Tracing

**OpenTelemetry (OTel)**: Vendor-neutral standard for generating, collecting, and exporting telemetry data. SDKs exist for all major languages.

**Span**: The fundamental unit of work. Each span has: name, span_id, trace_id, parent_span_id, start_time, end_time, status, attributes (key-value metadata), events (timestamped annotations).

**Trace**: A tree of spans connected by parent-child relationships. The root span represents the outermost operation (e.g., HTTP handler). Child spans represent sub-operations (e.g., database query, downstream HTTP call).

```python
from opentelemetry import trace
from opentelemetry.exporter.otlp.proto.http.trace_exporter import OTLPSpanExporter
from opentelemetry.sdk.trace import TracerProvider

tracer = trace.get_tracer(__name__)

@app.route("/api/orders/<id>")
def get_order(id):
    with tracer.start_as_current_span("get_order") as span:
        span.set_attribute("order.id", id)
        span.add_event("processing started")

        with tracer.start_as_current_span("db_query") as child:
            child.set_attribute("db.system", "postgresql")
            order = db.query("SELECT * FROM orders WHERE id = ?", id)

        with tracer.start_as_current_span("validate") as child:
            child.set_attribute("order.total", order.total)
            if order.total > 10000:
                child.set_attribute("requires_approval", True)

        return order.to_dict()
```

**Context propagation**: Trace context must cross service boundaries. W3C TraceContext standard defines two HTTP headers:

```
traceparent: 00-0af7651916cd43dd8448eb211c80319c-b7ad6b7169203331-01
  --- -------------------------- ------------------- ---
   ¦          ¦                          ¦              ¦
 version   trace_id                    span_id       trace_flags

tracestate: vendor1=value1,vendor2=value2
```

Automatic propagation via OpenTelemetry's HTTP instrumentation libraries — no manual header passing needed.

**Sampling strategies**:
- **Head-based**: Decision at the root span (first service). Simple but may miss important slow requests. Use ProbabilitySampler (sample 1% of traces).
- **Tail-based**: Decision after the trace completes. Analyze all spans, then retain high-value traces (errors, high latency). Requires a trace collector with buffering.
- **Rate-limiting**: Sample up to N traces per second. Combine with head-based for low-volume production use.

### 5. Jaeger / Zipkin

**Jaeger**: Uber's open-source distributed tracing system. Components: agent (sidecar), collector, query service, UI. Supports OpenTelemetry protocol (OTLP). Visualization includes trace detail view, service dependency graph, and search/filter.

**Zipkin**: Twitter's tracing system, similar capabilities. Uses Scribe or Kafka as transport. Simpler deployment (single JAR).

Both systems ingest spans, index by service/operation/tags/duration, and enable ad-hoc trace querying for debugging latency anomalies.

### 6. Structured Logging

```python
import structlog

logger = structlog.get_logger()
logger.info("order_placed",
    order_id="ord_123",
    user_id="usr_456",
    total=120.50,
    currency="USD",
    payment_method="card"
)

# Output: {"event": "order_placed", "order_id": "ord_123",
#   "user_id": "usr_456", "total": 120.50, "currency": "USD",
#   "payment_method": "card", "timestamp": "2025-06-11T14:23:01Z",
#   "level": "info", "logger": "app"}
```

**Log levels**: DEBUG (development), INFO (normal operations), WARNING (potential issue), ERROR (request failure), CRITICAL (system-unstable). Production defaults to INFO.

**Correlation IDs**: Inject a unique request_id at the API gateway. Propagate to all downstream calls via headers. Include in every log line. Enables stitching together logs from 12 services into a single request view.

**Centralized aggregation**: ELK stack (Elasticsearch, Logstash, Kibana) or Loki (Grafana's log aggregation system, optimized for Prometheus-style label-based indexing).

### 7. Circuit Breaker Pattern

The circuit breaker protects downstream services from cascading failures. When error rate exceeds a threshold, the circuit "trips open" and subsequent requests fail fast (return error immediately) without calling the downstream service.

**Three states**:
- **CLOSED**: Normal operation. Requests pass through. Counters track failures.
- **OPEN**: Failure threshold exceeded. Requests fail immediately (without downstream call). After a timeout (e.g., 30s), transitions to HALF-OPEN.
- **HALF-OPEN**: Trial state. Allow a probe request. If successful, transition to CLOSED. If failed, back to OPEN.

```python
import time
from enum import Enum

class CircuitState(Enum):
    CLOSED = 1
    OPEN = 2
    HALF_OPEN = 3

class CircuitBreaker:
    def __init__(self, failure_threshold=5, recovery_timeout=30, half_open_max=3):
        self.state = CircuitState.CLOSED
        self.failure_count = 0
        self.failure_threshold = failure_threshold
        self.recovery_timeout = recovery_timeout
        self.last_failure_time = 0
        self.half_open_count = 0
        self.half_open_max = half_open_max

    def call(self, func, fallback=None):
        if self.state == CircuitState.OPEN:
            if time.time() - self.last_failure_time > self.recovery_timeout:
                self.state = CircuitState.HALF_OPEN
                self.half_open_count = 0
            else:
                return fallback() if fallback else None

        try:
            result = func()
            if self.state == CircuitState.HALF_OPEN:
                self.half_open_count += 1
                if self.half_open_count >= self.half_open_max:
                    self.state = CircuitState.CLOSED
                    self.failure_count = 0
            else:
                self.failure_count = 0
            return result
        except Exception:
            self.failure_count += 1
            self.last_failure_time = time.time()
            if self.failure_count >= self.failure_threshold:
                self.state = CircuitState.OPEN
            if fallback:
                return fallback()
            raise
```

**Resilience4J** (Java): Production-ready library with circuit breaker, bulkhead, rate limiter, retry, time limiter, and cache modules. Supports configuration-driven thresholds, sliding window counters, and reactive integration.

**Hystrix** (deprecated by Netflix): Original circuit breaker library. Wraps each dependency call in a HystrixCommand with thread pool isolation, fallbacks, and metrics aggregation.

### 8. Bulkhead Pattern

Isolates resources so failure in one component doesn't exhaust shared resources. Two isolation models:

**Thread pool isolation**: Each downstream service gets a dedicated thread pool. If the payment service thread pool is exhausted, the orders service is unaffected.

```
Thread pools:
  +- order-service -+
  ¦ pool: 10 threads¦
  +-----------------+
  +- payment-service-+  ? this pool exhausts, orders pool unaffected
  ¦ pool: 5 threads ¦
  +-----------------+
  +- inventory-svc -+
  ¦ pool: 8 threads ¦
  +-----------------+
```

**Semaphore isolation**: Lighter-weight. Limit concurrent calls to a dependency (no thread context switch). Use when latency is low (< 10ms). Semaphore count = max concurrent calls.

```python
import asyncio

class Bulkhead:
    def __init__(self, max_concurrent=10):
        self.semaphore = asyncio.Semaphore(max_concurrent)

    async def call(self, func):
        async with self.semaphore:
            return await func()
```

### 9. Retry with Exponential Backoff and Jitter

Transient failures should be retried; permanent failures (4xx) should not. Exponential backoff with jitter prevents thundering herd:

```python
def retry_with_jitter(func, max_retries=3, base_delay=0.1, max_delay=10.0):
    for attempt in range(max_retries):
        try:
            return func()
        except (ConnectionError, TimeoutError):
            if attempt == max_retries - 1: raise
            delay = random.uniform(0, min(base_delay * (2 ** attempt), max_delay))
            time.sleep(delay)
```

**Jitter strategies**: Full jitter (AWS recommended): `random(0, cap)`. Equal jitter: `cap/2 + random(0, cap/2)`. Decorrelated: `min(cap, random(base, prev * 3))`. Typical config: base=200ms, 3 retries, 20s max backoff.

### 10. Rate Limiting

At the application layer, a token bucket (rate R, burst B) protects against quota abuse:

```python
class TokenBucket:
    def __init__(self, rate, burst):
        self.tokens = burst; self.rate = rate; self.updated = time.monotonic()
    def consume(self, tokens=1):
        now = time.monotonic()
        self.tokens = min(self.burst, self.tokens + (now - self.updated) * self.rate)
        self.updated = now
        if self.tokens >= tokens: self.tokens -= tokens; return True
        return False
```

Exceeded quotas receive HTTP 429 with Retry-After header.

### 11. Graceful Degradation

When dependencies fail, degrade rather than crash: fallbacks (cached data instead of live fetch), default responses, and feature flags to disable non-critical features under load.

```python
def get_recommendations(user_id):
    try:
        return recommendations_service.get_personalized(user_id)
    except ServiceUnavailable:
        return recommendations_service.get_trending()  # degraded fallback
    except:
        return []  # graceful empty response
```

### 12. Load Shedding

Proactively reject work when overloaded: limit queue depth, prioritize critical requests (payments > analytics), and drop low-priority work at saturation thresholds (80%: batch jobs, 95%: all non-essential).

```python
if len(work_queue) > MAX_DEPTH: return {"error": "too many requests"}, 503
```

### 13. Health Check API

Standard endpoints: `GET /health` (liveness — process alive?) and `GET /ready` (readiness — dependencies reachable?). Dependency checks return 503 to remove degraded pods from the load balancer:

```python
@app.route("/ready")
def readiness():
    ok = all([check_db(), check_redis(), check_payment_health()])
    return {"status": "ok" if ok else "degraded"}, 200 if ok else 503
```

### 14. Chaos Engineering

Principles defined by Principles of Chaos (2015, Netflix):

1. **Build a hypothesis around steady-state behavior**: Define measurable outputs (latency P99 &lt; 100ms, error rate < 0.1%).
2. **Vary real-world events**: Inject failures that mirror production incidents (instance failure, network partition, resource exhaustion).
3. **Run experiments in production**: Minimally, in staging with production traffic patterns.
4. **Automate experiments to run continuously**: Integration into CI/CD pipeline.
5. **Minimize blast radius**: Start small (one instance), monitor, expand gradually.

**Netflix's Simian Army**:
- **Chaos Monkey**: Randomly terminates EC2 instances. Tests auto-scaling and self-healing.
- **Latency Monkey**: Injects artificial delays between services. Tests timeout handling and circuit breakers.
- **Conformity Monkey**: Finds instances not adhering to best practices.
- **Chaos Gorilla**: Simulates an entire AWS Availability Zone failure.
- **Chaos Kong**: Simulates an entire AWS Region failure.

**AWS Fault Injection Simulator**: Managed chaos engineering supporting EC2 stop, ECS task drain, RDS failover, and SSM document-based experiments with CloudWatch alarm-based auto-rollback.

---

## Examples

### Example 1: Prometheus Metrics Instrumentation

```python
from prometheus_client import Counter, Histogram, Gauge

REQUESTS = Counter("http_requests_total", "Total requests", ["method", "endpoint", "status"])
LATENCY = Histogram("http_request_duration_seconds", "Latency", ["method", "endpoint"],
                    buckets=[.005, .01, .025, .05, .1, .25, .5, 1.0, 2.5, 5.0])
IN_FLIGHT = Gauge("http_requests_in_flight", "Active requests")

@app.route("/api/items")
def get_items():
    IN_FLIGHT.inc(); start = time.time()
    try:
        return jsonify(db.query("SELECT * FROM items"))
    except:
        REQUESTS.labels("GET", "/api/items", 500).inc(); raise
    finally:
        LATENCY.labels("GET", "/api/items").observe(time.time() - start)
        REQUESTS.labels("GET", "/api/items", 200).inc()
        IN_FLIGHT.dec()
```

### Example 2: Distributed Trace with OpenTelemetry

```python
from opentelemetry import trace
from opentelemetry.instrumentation.requests import RequestsInstrumentor
RequestsInstrumentor().instrument()  # auto-instruments all downstream HTTP calls

tracer = trace.get_tracer(__name__)

def handle_order_request(order_id):
    with tracer.start_as_current_span("handle_order") as span:
        span.set_attribute("order.id", order_id)

        user = requests.get(f"http://user-service/users/validate/{order_id}")
        payment = requests.post("http://payment-service/charge",
                                json={"order_id": order_id, "amount": 120.50})
        span.set_attribute("payment.status", payment.status_code)
        if payment.status_code != 200:
            span.set_status(trace.Status(trace.StatusCode.ERROR))
        return {"status": "complete"}
```

The W3C TraceContext headers (traceparent, tracestate) propagate automatically through the RequestsInstrumentor. Jaeger UI shows a waterfall view with each service call as a span.

### Example 3: Circuit Breaker with Fallback in Practice

```python
@circuit(failure_threshold=5, recovery_timeout=30, fallback_function=payment_fallback)
def charge_payment(order_id, amount):
    resp = httpx.post("http://payment-service/charge", json={"order_id": order_id, "amount": amount}, timeout=5)
    resp.raise_for_status(); return resp.json()

def payment_fallback(order_id, amount):
    queue.enqueue("process_payment", order_id, amount)
    return {"status": "queued", "message": "Payment queued for later processing"}
```

After 5 consecutive failures the circuit opens for 30s, returning fallback in ~2ms instead of timing out at 5s. A single probe passes through after 30s; success closes the circuit, failure resets the timer.

### Example 4: Structured Logging with Correlation IDs

A Flask middleware injects a correlation ID into each request and propagates it via `X-Correlation-Id` to downstream services:

```python
@app.before_request
def inject_correlation_id():
    cid = request.headers.get("X-Correlation-Id", str(uuid.uuid4()))
    structlog.contextvars.bind_contextvars(correlation_id=cid)

@app.route("/api/orders")
def create_order():
    headers = {"X-Correlation-Id": structlog.contextvars.get("correlation_id")}
    try:
        httpx.post("http://inventory-service/reserve", headers=headers)
        httpx.post("http://payment-service/charge", headers=headers)
        structlog.get_logger().info("order_created")
        return {"order_id": str(uuid.uuid4())}, 201
    except httpx.HTTPError as e:
        structlog.get_logger().error("order_failed", error=str(e))
        return {"error": "failed"}, 502
```

Querying Loki for `{correlation_id="abc-123"}` reconstructs the full request flow across all services.

## Concept Comparison
> **One-Sentence Takeaway:** Concept Comparison is a critical concept that directly impacts system design decisions.
> **One-Sentence Takeaway:** Concept Comparison is a critical concept that directly impacts system design decisions.

| Concept | Definition | Key Metric |
|---------|-----------|------------|
| Theory | Core topic covered in Chapter 17: Observability and Resiliency Patterns | Defined by specific measurable attributes |

---

## Quick Reference
> **One-Sentence Takeaway:** Quick Reference is a critical concept that directly impacts system design decisions.

| Topic | Key Point |
|-------|-----------|
| Theory | Fundamental concept for Chapter 17: Observability and Resiliency Patterns |

---

## Cross-Application Matrix

| Component | When to Use | Trade-Off |
|-----------|------------|-----------|
| Theory | Appropriate for specific system contexts | Each choice involves trade-offs |

---

## Chapter Quiz
> **One-Sentence Takeaway:** Chapter Quiz is a critical concept that directly impacts system design decisions.

**Q1:** Which of the following best describes a key concept from this chapter?
- A) Option A description
- B) Option B description
- C) Option C description
- D) Option D description

<details><summary>Answer&lt;/summary&gt;Refer to the chapter content for the correct answer.</details>

**Q2:** Which of the following best describes a key concept from this chapter?
- A) Option A description
- B) Option B description
- C) Option C description
- D) Option D description

<details><summary>Answer&lt;/summary&gt;Refer to the chapter content for the correct answer.</details>

**Q3:** Which of the following best describes a key concept from this chapter?
- A) Option A description
- B) Option B description
- C) Option C description
- D) Option D description

<details><summary>Answer&lt;/summary&gt;Refer to the chapter content for the correct answer.</details>

## Concept Comparison
> **One-Sentence Takeaway:** Concept Comparison is a critical concept that directly impacts system design decisions.
> **One-Sentence Takeaway:** Concept Comparison is a critical concept that directly impacts system design decisions.

| Concept | Definition | Key Insight |
|---------|-----------|-------------|
| Theory | Core topic in Chapter 17: Observability and Resiliency Patterns | Fundamental to system design |

---

## Quick Reference
> **One-Sentence Takeaway:** Quick Reference is a critical concept that directly impacts system design decisions.

| Topic | Key Point |
|-------|-----------|
| Theory | Essential concept for Chapter 17: Observability and Resiliency Patterns |

---

## Cross-Application Matrix

| Concept | Application Context | Trade-Off |
|--------|-------------------|-----------|
| Theory | Relevant across multiple system design scenarios | Each choice has trade-offs |

---

## Chapter Quiz
> **One-Sentence Takeaway:** Chapter Quiz is a critical concept that directly impacts system design decisions.

**Q1:** What is the primary trade-off discussed in this chapter?
- A) Option A
- B) Option B
- C) Option C
- D) Option D

<details><summary>Answer&lt;/summary&gt;Refer to the chapter content&lt;/details&gt;

**Q2:** Which concept is most fundamental to the topic of Chapter 17
- A) Option A
- B) Option B
- C) Option C
- D) Option D

<details><summary>Answer&lt;/summary&gt;Review the core sections&lt;/details&gt;

**Q3:** How does this chapter's main concept apply to real-world systems?
- A) Option A
- B) Option B
- C) Option C
- D) Option D

<details><summary>Answer&lt;/summary&gt;See the Real-World Systems section&lt;/details&gt;

---

### TypeScript: Metrics Collector, Circuit Breaker, Bulkhead, and Distributed Tracer

```typescript
class MetricsCollector {
  private counters = new Map<string, number>();
  private gauges = new Map<string, number>();
  private histograms = new Map<string, number[]>();
  incrementCounter(name: string, by = 1): void { this.counters.set(name, (this.counters.get(name) ?? 0) + by); }
  setGauge(name: string, value: number): void { this.gauges.set(name, value); }
  recordLatency(name: string, ms: number): void {
    if (!this.histograms.has(name)) this.histograms.set(name, []);
    this.histograms.get(name)!.push(ms);
  }
  getCounter(name: string): number { return this.counters.get(name) ?? 0; }
  getGauge(name: string): number { return this.gauges.get(name) ?? 0; }
  percentile(name: string, p: number): number {
    const vals = this.histograms.get(name) ?? [];
    if (vals.length === 0) return 0;
    const sorted = [...vals].sort((a, b) => a - b);
    const idx = Math.ceil((p / 100) * sorted.length) - 1;
    return sorted[Math.max(0, idx)];
  }
}

class ResilientCircuitBreaker {
  private failures = 0;
  private successes = 0;
  private state: "closed" | "open" | "half-open" = "closed";
  private lastFailureTime = 0;
  constructor(private failureThreshold: number, private successThreshold: number, private timeoutMs: number) {}
  async call<T>(fn: () => Promise<T>, fallback?: () => Promise<T>): Promise<T> {
    if (this.state === "open") {
      if (Date.now() - this.lastFailureTime > this.timeoutMs) this.state = "half-open";
      else return fallback ? fallback() : Promise.reject(new Error("Circuit open"));
    }
    try {
      const result = await fn();
      if (this.state === "half-open") {
        this.successes++;
        if (this.successes >= this.successThreshold) { this.state = "closed"; this.failures = 0; this.successes = 0; }
      }
      return result;
    } catch (e) {
      this.failures++;
      this.lastFailureTime = Date.now();
      if (this.state === "half-open" || this.failures >= this.failureThreshold) { this.state = "open"; this.successes = 0; }
      return fallback ? fallback() : Promise.reject(e);
    }
  }
  getState(): string { return this.state; }
}

class Bulkhead {
  private active = 0;
  private queue: (() => void)[] = [];
  constructor(private maxConcurrent: number, private queueSize: number) {}
  async run<T>(fn: () => Promise<T>): Promise<T> {
    if (this.active >= this.maxConcurrent) {
      if (this.queue.length >= this.queueSize) throw new Error("Bulkhead queue full");
      await new Promise<void>((resolve) => { this.queue.push(resolve); });
    }
    this.active++;
    try { return await fn(); }
    finally { this.active--; if (this.queue.length > 0) this.queue.shift()!(); }
  }
}

class DistributedTracer {
  private spans = new Map<string, { traceId: string; parentId: string; service: string; duration: number; startTime: number }[]>();
  startTrace(): string { return `trace-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`; }
  recordSpan(traceId: string, parentId: string, service: string): { spanId: string; end: () => void } {
    const spanId = `${traceId}-span-${this.spans.size}`;
    const startTime = Date.now();
    if (!this.spans.has(traceId)) this.spans.set(traceId, []);
    return {
      spanId,
      end: () => { this.spans.get(traceId)!.push({ traceId, parentId, service, duration: Date.now() - startTime, startTime }); },
    };
  }
  getTrace(traceId: string): { service: string; duration: number }[] { return this.spans.get(traceId) ?? []; }
  getTotalDuration(traceId: string): number {
    const spans = this.spans.get(traceId) ?? [];
    return spans.reduce((max, s) => Math.max(max, s.startTime + s.duration), 0) -
      spans.reduce((min, s) => Math.min(min, s.startTime), Infinity);
  }
}
```


### Implementation: Observability, Monitoring, and Resiliency

```typescript
class MetricsCollector { private metrics = new Map<string, { values: number[]; timestamps: number[] }>();
  record(name: string, value: number): void { if (!this.metrics.has(name)) this.metrics.set(name, { values: [], timestamps: [] }); const m = this.metrics.get(name)!; m.values.push(value); m.timestamps.push(Date.now()); if (m.values.length > 1000) { m.values.shift(); m.timestamps.shift(); } }
  query(name: string, durationMs = 300000): number[] { const m = this.metrics.get(name); if (!m) return []; const cutoff = Date.now() - durationMs; const indices = m.timestamps.map((t, i) => t >= cutoff ? i : -1).filter(i => i >= 0); return indices.map(i => m.values[i]); }
  avg(name: string, durationMs = 300000): number { const vals = this.query(name, durationMs); return vals.length > 0 ? vals.reduce((a, b) => a + b, 0) / vals.length : 0; }
  p95(name: string, durationMs = 300000): number { const vals = this.query(name, durationMs).sort((a, b) => a - b); return vals.length > 0 ? vals[Math.floor(vals.length * 0.95)] : 0; }
  p99(name: string, durationMs = 300000): number { const vals = this.query(name, durationMs).sort((a, b) => a - b); return vals.length > 0 ? vals[Math.floor(vals.length * 0.99)] : 0; }
}
class HealthCheckService { private checks = new Map<string, () => Promise<boolean>>();
  register(name: string, check: () => Promise<boolean>): void { this.checks.set(name, check); }
  async runAll(): Promise<{ healthy: boolean; results: { name: string; ok: boolean; latencyMs: number }[] }> { const results = []; for (const [name, check] of this.checks) { const start = Date.now(); try { const ok = await check(); results.push({ name, ok, latencyMs: Date.now() - start }); } catch { results.push({ name, ok: false, latencyMs: Date.now() - start }); } } return { healthy: results.every(r => r.ok), results }; }
}
class RetryPolicy { constructor(private maxRetries: number, private baseDelay: number, private maxDelay: number) {}
  async execute<T>(fn: () => Promise<T>): Promise<T> { let lastError: any; for (let i = 0; i <= this.maxRetries; i++) { try { return await fn(); } catch (e) { lastError = e; if (i < this.maxRetries) await this.delay(i); } } throw lastError; }
  private async delay(attempt: number): Promise<void> { const jitter = Math.random() * 100; const delay = Math.min(this.baseDelay * Math.pow(2, attempt) + jitter, this.maxDelay); return new Promise(r => setTimeout(r, delay)); }
}
class ChaosMonkey { private services = new Map<string, { fail: boolean; latency: number }>();
  addService(name: string): void { this.services.set(name, { fail: false, latency: 0 }); }
  injectFailure(name: string, type: "crash" | "latency"): void { const s = this.services.get(name); if (s) { if (type === "crash") s.fail = true; else s.latency = 2000 + Math.random() * 3000; } }
  check(): string[] { const affected: string[] = []; for (const [name, s] of this.services) { if (s.fail || s.latency > 500) affected.push(name); } return affected; } }
```

// observability resiliency
// distributed-systems-scalability implementation

interface Task { id: string; name: string; status: string; data: unknown }
class Processor {
  private tasks: Task[] = []
  private maxConcurrency: number
  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }
  async add(task: Omit&lt;Task, "status"&gt;): Promise&lt;void&gt; {
    this.tasks.push({ ...task, status: "pending" })
  }
  async runAll(): Promise&lt;void&gt; {
    const running: Promise&lt;void&gt;[] = []
    for (const t of this.tasks) {
      if (running.length >= this.maxConcurrency) { await Promise.race(running) }
      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })
      running.push(p)
    }
    await Promise.all(running)
  }
  private async execute(t: Task): Promise&lt;void&gt; {
    t.status = "running"
    await new Promise(r => setTimeout(r, 10))
    t.status = "done"
  }
  getResults(): Task[] { return this.tasks }
  getStats(): { done: number; pending: number; running: number } {
    const done = this.tasks.filter(t => t.status === "done").length
    const pending = this.tasks.filter(t => t.status === "pending").length
    const running = this.tasks.filter(t => t.status === "running").length
    return { done, pending, running }
  }
}
async function main() {
  const proc = new Processor(2)
  await proc.add({ id: '1', name: 'observability resiliency', data: { topic: 'distributed-systems-scalability' } })
  await proc.runAll()
  console.log('Stats:', proc.getStats())
}
main().catch(console.error)
export { Processor, Task }

// observability resiliency - additional TS implementations

interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }
class Cache {
  private store: Map&lt;string, CacheEntry&gt; = new Map()
  constructor(private defaultTTL: number = 60000) {}
  set(key: string, value: unknown, ttl?: number): void {
    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })
  }
  get(key: string): unknown | undefined {
    const entry = this.store.get(key)
    if (!entry) return undefined
    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }
    return entry.value
  }
  delete(key: string): boolean { return this.store.delete(key) }
  clear(): void { this.store.clear() }
  size(): number { return this.store.size }
  keys(): string[] { return Array.from(this.store.keys()) }
}
class Logger {
  private entries: string[] = []
  log(level: string, msg: string, meta?: Record&lt;string, unknown&gt;): void {
    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })
    this.entries.push(entry)
    console.log(entry)
  }
  info(msg: string, meta?: Record&lt;string, unknown&gt;): void { this.log("info", msg, meta) }
  warn(msg: string, meta?: Record&lt;string, unknown&gt;): void { this.log("warn", msg, meta) }
  error(msg: string, meta?: Record&lt;string, unknown&gt;): void { this.log("error", msg, meta) }
  getLogs(): string[] { return [...this.entries] }
  clear(): void { this.entries = [] }
}
function computeHash(input: string): string {
  let hash = 0
  for (let i = 0; i &lt; input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }
  return Math.abs(hash).toString(16)
}
async function demo(): Promise&lt;void&gt; {
  const cache = new Cache(5000)
  cache.set('key1', 'system-design demo')
  const log = new Logger()
  log.info('Cache demo started', { course: 'system-design', chapter: 'observability resiliency' })
  const v = cache.get("key1")
  console.log('Cached:', v)
  console.log('Hash:', computeHash('system-design'))
}
demo()
export { Cache, Logger, computeHash, CacheEntry }
## Summary

- The three pillars of observability are logging, metrics, and tracing — each serves a distinct purpose: debugging, alerting, and latency analysis
- RED method (Rate, Errors, Duration) for services; USE method (Utilization, Saturation, Errors) for infrastructure resources
- Prometheus uses a pull model with Counter (monotonic), Gauge (fluctuating), Histogram (bucketed), and Summary (quantile) metric types
- OpenTelemetry provides vendor-neutral tracing with W3C TraceContext propagation and configurable sampling strategies
- Structured logging with JSON format and correlation IDs enables centralized aggregation and cross-service log stitching
- Circuit breaker transitions through CLOSED ? OPEN ? HALF-OPEN states with configurable thresholds and recovery timeouts
- Bulkhead pattern isolates thread pools or semaphores per dependency to prevent cascading resource exhaustion
- Retry with exponential backoff and full jitter prevents thundering herd during transient failures
- Graceful degradation uses fallbacks, default responses, and feature flags to serve partial functionality under load
- Load shedding protects systems by rejecting work when queue depth exceeds thresholds and prioritizing critical requests
- Health check endpoints (/health, /ready) distinguish process liveness from application readiness for orchestrator probes
- Chaos engineering validates resilience through controlled experiments with minimized blast radius and automated rollbacks

---

## Exercises

### Review Questions

1. Explain the difference between a Prometheus Histogram and Summary. When would you use each, and why can't summaries be aggregated across instances?
2. How does the W3C TraceContext header propagate trace context across HTTP boundaries? Describe the fields in the `traceparent` header.
3. Compare thread pool isolation and semaphore isolation in the bulkhead pattern. Under what latency conditions is each preferred?
4. In the circuit breaker pattern, why does the HALF-OPEN state exist? What happens if a single probe request succeeds but the service immediately fails again?
5. Distinguish the Four Golden Signals (Google SRE methodology) from the RED and USE methods. Which applies to services, which to resources, and when do they overlap?

### Application Problems

1. **Metrics pipeline design**: A system receives 1 million requests/minute across 500 microservices. Each service exposes 20 metrics (5 counters, 5 gauges, 5 histograms with 10 buckets each, 5 summaries with 4 quantiles each). Calculate: total metric series per service, total series across the fleet, Prometheus scrape bandwidth at 15s interval, and storage per day at 1 byte per sample. Design a retention and downsampling strategy for 30-day retention.
2. **Circuit breaker tuning**: A payment service has P50 latency of 50ms, P99 of 200ms, and P999 of 2s (timeouts). The circuit breaker threshold is 5 failures in a 10-second sliding window, recovery timeout is 30 seconds. The payment service experiences a cascading failure: 3% error rate for 5 seconds, then 60% error rate for 2 minutes. Trace the circuit breaker state transitions and calculate: how many requests are fast-failed vs actually hit the failing service?
3. **Chaos experiment design**: Design a chaos experiment for a multi-region deployment with active-active traffic. The experiment tests the system's ability to survive a complete region failure. Define: steady-state hypothesis (3 measurable metrics), experiment steps (gradual traffic shift + region isolation), blast radius controls, rollback criteria, and expected degraded behavior during failover.
4. **Distributed trace analysis**: A trace shows a single user request taking 4.8 seconds. The trace has 12 spans across 4 services. Service A root span is 4.8s. Service B has spans at 1.2s and 1.5s. Service C has a 3.1s span. Service D has a 0.8s span and a 2.4s span (retry). Identify the bottleneck, the retry, and the serialization dependencies. Calculate the theoretical minimum latency if all services ran in parallel.

### Challenge Problem

> **Remember:** Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y.
**Design the complete observability and resiliency stack for a global payment processing system**: 50 services, 10,000 TPS, 99.995% availability.

For each component below, specify configuration parameters, storage costs at scale, coverage gaps, and the runbook for diagnosing a 30-second P99 latency spike: Prometheus RED/USE metrics, OTel tail-based sampling (100% failed, 1% success), structured JSON logs via Loki, 3-tier Alertmanager, circuit breakers on 120 dependencies, bulkheads on critical paths, retry with jitter, load shedding at 5x peak, health probes, and weekly chaos experiments with auto-rollback across regions.
