# Chapter 17: Observability and Resiliency Patterns

---
## Learning Objectives

- Implement the three pillars of observability: logging, metrics, and distributed tracing
- Design Prometheus metrics with Counter, Gauge, Histogram, and Summary types using the RED and USE methods
- Construct distributed traces with OpenTelemetry, including context propagation and sampling strategies
- Implement circuit breaker, bulkhead, retry, and rate limiting patterns for resilient microservices
- Formulate graceful degradation and load shedding strategies for overload scenarios
- Apply chaos engineering principles with controlled experiments and blast radius minimization

---

## Theory

![Observability and Resiliency Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/17-observability-resiliency.png)

### 1. The Three Pillars of Observability

Observability is the ability to understand a system's internal state from its external outputs. Three data types form the foundation:

**Logging**: Immutable, timestamped records of discrete events. Structured logs (JSON) include severity level, module, correlation ID, and key-value pairs. Best for debugging specific requests and post-mortem analysis.

**Metrics**: Numeric measurements aggregated over time. Optimized for storage (low cardinality time-series), alerting, and dashboard visualization. Low overhead per data point.

**Tracing**: End-to-end request paths across distributed services. Each trace is a tree of spans (individual operations). Captures causality and timing. Best for latency analysis and dependency mapping.

**RED Method** (for services): Rate (requests/second), Errors (failed requests/second), Duration (latency distribution). Every service should expose at minimum these three metrics.

**USE Method** (for resources): Utilization (time resource busy), Saturation (work queued), Errors (failure count). Applied to CPU, memory, disk, network â€” every infrastructure resource.

**Four Golden Signals** (Google SRE):
- **Latency**: Time to service a request. Distinguish success latency (fast) from error latency (slow).
- **Traffic**: Demand on the system. Requests per second, active connections, throughput.
- **Errors**: Rate of failed requests. Explicit (500s, timeouts) and implicit (200 OK with wrong content).
- **Saturation**: How "full" the system is. Queue depth, CPU utilization, memory pressure.

### 2. Prometheus

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
  â”€â”¬â”€ â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ â”€â”¬â”€
   â”‚          â”‚                          â”‚              â”‚
 version   trace_id                    span_id       trace_flags

tracestate: vendor1=value1,vendor2=value2
```

Automatic propagation via OpenTelemetry's HTTP instrumentation libraries â€” no manual header passing needed.

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
  â”Œâ”€ order-service â”€â”
  â”‚ pool: 10 threadsâ”‚
  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
  â”Œâ”€ payment-serviceâ”€â”  â† this pool exhausts, orders pool unaffected
  â”‚ pool: 5 threads â”‚
  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
  â”Œâ”€ inventory-svc â”€â”
  â”‚ pool: 8 threads â”‚
  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
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

Standard endpoints: `GET /health` (liveness â€” process alive?) and `GET /ready` (readiness â€” dependencies reachable?). Dependency checks return 503 to remove degraded pods from the load balancer:

```python
@app.route("/ready")
def readiness():
    ok = all([check_db(), check_redis(), check_payment_health()])
    return {"status": "ok" if ok else "degraded"}, 200 if ok else 503
```

### 14. Chaos Engineering

Principles defined by Principles of Chaos (2015, Netflix):

1. **Build a hypothesis around steady-state behavior**: Define measurable outputs (latency P99 < 100ms, error rate < 0.1%).
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

---

## Summary

- The three pillars of observability are logging, metrics, and tracing â€” each serves a distinct purpose: debugging, alerting, and latency analysis
- RED method (Rate, Errors, Duration) for services; USE method (Utilization, Saturation, Errors) for infrastructure resources
- Prometheus uses a pull model with Counter (monotonic), Gauge (fluctuating), Histogram (bucketed), and Summary (quantile) metric types
- OpenTelemetry provides vendor-neutral tracing with W3C TraceContext propagation and configurable sampling strategies
- Structured logging with JSON format and correlation IDs enables centralized aggregation and cross-service log stitching
- Circuit breaker transitions through CLOSED â†’ OPEN â†’ HALF-OPEN states with configurable thresholds and recovery timeouts
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

**Design the complete observability and resiliency stack for a global payment processing system**: 50 services, 10,000 TPS, 99.995% availability.

For each component below, specify configuration parameters, storage costs at scale, coverage gaps, and the runbook for diagnosing a 30-second P99 latency spike: Prometheus RED/USE metrics, OTel tail-based sampling (100% failed, 1% success), structured JSON logs via Loki, 3-tier Alertmanager, circuit breakers on 120 dependencies, bulkheads on critical paths, retry with jitter, load shedding at 5x peak, health probes, and weekly chaos experiments with auto-rollback across regions.
