# Phase 4 — Production Hardening

**Duration:** Weeks 9-10, ~20 hours
**Goal:** Add the production patterns your portfolio projects are missing — durable queues, structured logging, CI/CD, cost monitoring.

---

## Topic Table

| # | Subtopic | Hours | Done checkpoint |
|---|----------|-------|-----------------|
| 1 | Docker multi-stage builds | 1.5 | Write a Dockerfile meaningfully smaller than a naive single-stage one |
| 2 | Docker Compose multi-service health checks | 1.5 | Wire FastAPI + Redis + ChromaDB with correct depends_on + health checks |
| 3 | Celery/RQ for durable background jobs | 3 | Replace BackgroundTasks with a queue that survives restarts |
| 4 | Redis as job broker: retries, dead-letter | 2 | Configure automatic retry with exponential backoff |
| 5 | Structured logging (correlation IDs) | 2 | Trace a request across 2 services using a shared correlation ID |
| 6 | Basic /metrics endpoint | 2 | Expose request count + latency histogram |
| 7 | Health checks: /healthz vs /readyz | 1 | Explain the difference and why conflating them causes outages |
| 8 | Secrets management | 1.5 | Move all keys to .env, document the pattern |
| 9 | API cost monitoring | 2 | Build a token-usage logging wrapper for OpenAI/Anthropic calls |
| 10 | GitHub Actions CI | 2.5 | Write a test workflow for each project repo |
| 11 | Load testing (k6 / locust) | 2 | Run a load test against your RAG endpoint, report P50/P95/P99 |
| 12 | Monitoring + alerting (Grafana + Prometheus) | 2.5 | Deploy a Grafana dashboard showing request rate, latency, error rate |

---

## 4.1 Docker Multi-Stage Builds

### Naive single-stage

```dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0"]
```

Size: ~800MB. Includes build tools, cache files, unnecessary packages.

### Multi-stage

```dockerfile
# Stage 1: Build
FROM python:3.12-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN apt-get update && apt-get install -y --no-install-recommends gcc \
    && pip install --user -r requirements.txt \
    && apt-get clean

# Stage 2: Runtime
FROM python:3.12-slim
WORKDIR /app
COPY --from=builder /root/.local /root/.local
COPY . .
ENV PATH=/root/.local/bin:$PATH
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0"]
```

Size: ~200MB. No build tools, no pip cache, minimal surface.

### Exercise

Rebuild your RAG demo's Dockerfile as multi-stage. Measure before/after image size with `docker images`.

---

## 4.2 Docker Compose with Health Checks

```yaml
# docker-compose.yml
version: "3.9"
services:
  redis:
    image: redis:7-alpine
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 5s
      timeout: 3s
      retries: 3

  chromadb:
    image: chromadb/chroma:latest
    volumes:
      - chroma_data:/chroma/chroma_data
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/api/v1/heartbeat"]
      interval: 10s
      timeout: 5s
      retries: 5

  api:
    build: .
    depends_on:
      redis: { condition: service_healthy }
      chromadb: { condition: service_healthy }
    ports:
      - "8052:8052"
    env_file: .env

volumes:
  chroma_data:
```

### Exercise

Add health checks and `depends_on` with conditions to your existing docker-compose.yml.

---

## 4.3 Celery/RQ for Durable Background Jobs

### Why BackgroundTasks isn't enough

```python
@app.post("/upload")
async def upload(task: BackgroundTasks):
    # If server restarts during this, the job is LOST
    task.add_task(process_large_document, doc_id)
```

### RQ version

```python
from rq import Queue
from redis import Redis

redis_conn = Redis()
queue = Queue("document_ingestion", connection=redis_conn)

@app.post("/upload")
async def upload(doc_id: str):
    # Stored in Redis — survives restart
    job = queue.enqueue(process_large_document, doc_id, job_timeout=600)
    return {"status": "accepted", "job_id": job.id}

# worker.py — run separately:
# rq worker document_ingestion
if __name__ == "__main__":
    from rq.worker import Worker
    Worker([queue], connection=redis_conn).work()
```

### Exercise

Move your RAG demo's document ingestion from BackgroundTasks to RQ. Verify that killing the worker mid-job and restarting resumes processing (or at least the job doesn't silently disappear).

---

## 4.4 Redis as Job Broker: Retries + Dead-Letter

```python
from rq import Queue, Retry

queue = Queue(connection=Redis())

# Automatic retry with exponential backoff
def process_document(doc_id: str):
    result = call_large_api(doc_id)
    if not result:
        raise ValueError("Document processing failed")

job = queue.enqueue(
    process_document,
    doc_id,
    retry=Retry(max=3, interval=[10, 30, 60]),  # Wait 10s, 30s, 60s between retries
    on_failure=move_to_dead_letter_queue,
)

def move_to_dead_letter_queue(job, connection, type, value, traceback):
    dead_letter = Queue("dead_letter", connection=connection)
    dead_letter.enqueue(job.func, *job.args)
```

### Exercise

Configure automatic retry with exponential backoff for an RQ task. Then make it fail 4 times and observe it end up in the dead-letter queue.

---

## 4.5 Structured Logging with Correlation IDs

```python
import structlog
import uuid
from fastapi import Request

structlog.configure(
    processors=[
        structlog.stdlib.add_log_level,
        structlog.processors.TimeStamper(fmt="iso"),
        structlog.processors.JSONRenderer(),
    ],
    context_class=dict,
    logger_factory=structlog.PrintLoggerFactory(),
)

logger = structlog.get_logger()

@app.middleware("http")
async def add_correlation_id(request: Request, call_next):
    correlation_id = request.headers.get("X-Correlation-ID", str(uuid.uuid4()))
    request.state.correlation_id = correlation_id
    response = await call_next(request)
    response.headers["X-Correlation-ID"] = correlation_id
    return response

@app.get("/query")
async def query_endpoint(request: Request):
    logger.info("query_received", correlation_id=request.state.correlation_id, query=...)
    result = await process_query(...)
    logger.info("query_completed", correlation_id=request.state.correlation_id, duration=...)
    return result
```

### Exercise

Add `structlog` to your RAG demo. Add a correlation ID middleware. Trace a single request through at least 3 log lines with the same correlation ID.

---

## 4.6 Basic /metrics Endpoint

```python
from prometheus_client import Counter, Histogram, generate_latest
from fastapi import Response
import time

REQUEST_COUNT = Counter("rag_requests_total", "Total RAG requests", ["endpoint", "status"])
LATENCY = Histogram("rag_request_duration_seconds", "Request latency", ["endpoint"])

@app.get("/metrics")
async def metrics():
    return Response(content=generate_latest(), media_type="text/plain")

@app.post("/v1/collections/{id}/query")
async def query_with_metrics(id: str, req: QueryRequest):
    start = time.perf_counter()
    result = await run_query(id, req)
    duration = time.perf_counter() - start
    REQUEST_COUNT.labels(endpoint="query", status="200").inc()
    LATENCY.labels(endpoint="query").observe(duration)
    return result
```

### Exercise

Add a `/metrics` endpoint with at least request count and latency histogram to your RAG demo. Hit the endpoint a few times, then `curl /metrics` and verify the counts increment.

---

## 4.7 Health Checks: /healthz vs /readyz

### /healthz (liveness)

Is the process alive? If this fails, restart the container.

```python
@app.get("/healthz")
async def healthz():
    return {"status": "alive"}
```

### /readyz (readiness)

Is the service ready to accept requests? If this fails, stop routing traffic to it.

```python
@app.get("/readyz")
async def readyz():
    try:
        await redis.ping()
        await chroma_client.heartbeat()
        return {"status": "ready"}
    except Exception as e:
        return JSONResponse({"status": "not_ready", "error": str(e)}, status_code=503)
```

### Why the distinction matters

A service that's alive but not ready (e.g., ChromaDB is restarting) should **not** be killed and restarted — it should just stop receiving traffic until dependencies recover. Conflating them means a brief ChromaDB restart causes a container restart cascade.

### Exercise

Implement both endpoints in your project. Simulate a dependency failure and verify `/healthz` returns 200 while `/readyz` returns 503.

---

## 4.8 Secrets Management

### Bad pattern

```python
import os
api_key = os.environ.get("OPENAI_API_KEY")
```

What's wrong: no validation, no error message if missing, no type checking, scattered across files.

### Good pattern (pydantic-settings)

```python
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    openai_api_key: str
    anthropic_api_key: str
    chroma_persist_dir: str = "./chroma_data"
    redis_url: str = "redis://localhost:6379"
    rate_limit_per_minute: int = 10

    model_config = {"env_file": ".env", "env_file_encoding": "utf-8"}

settings = Settings()

# If OPENAI_API_KEY is missing, this errors at startup with a clear message:
# pydantic_settings.sources.SettingsError: 'openai_api_key' is a required field
```

### What to put in .env.example

```env
# Required
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
CHROMA_PERSIST_DIR=./chroma_data

# Optional (defaults shown)
REDIS_URL=redis://localhost:6379
RATE_LIMIT_PER_MINUTE=10
```

### Exercise

Move all hardcoded keys in both projects into `pydantic-settings`. Verify the app errors at startup (not at runtime) when a required key is missing.

---

## 4.9 API Cost Monitoring

```python
import time
import logging
from functools import wraps

logger = logging.getLogger(__name__)

def track_llm_cost(model: str = "gpt-4"):
    """Decorator that logs token usage and estimated cost."""
    PRICES = {
        "gpt-4": {"input": 30, "output": 60},  # Per 1M tokens
        "gpt-4o-mini": {"input": 0.15, "output": 0.60},
        "text-embedding-3-small": {"input": 0.02, "output": 0},
    }

    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            result = await func(*args, **kwargs)
            usage = getattr(result, "usage", None) or {}
            input_cost = usage.get("input_tokens", 0) * PRICES[model]["input"] / 1_000_000
            output_cost = usage.get("output_tokens", 0) * PRICES[model]["output"] / 1_000_000
            logger.info(
                f"LLM call: {model}, "
                f"in={usage.get('input_tokens', 0)}, "
                f"out={usage.get('output_tokens', 0)}, "
                f"cost=${input_cost + output_cost:.6f}"
            )
            return result
        return wrapper
    return decorator
```

### Exercise

Wrap your OpenAI/Anthropic calls in the RAG demo with this decorator. Run 5 queries. Check the logs for per-query cost. Sum them and compare against your OpenAI dashboard.

---

## 4.10 GitHub Actions CI

```yaml
# .github/workflows/test.yml
name: Test
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      redis:
        image: redis:7-alpine
        options: --health-cmd "redis-cli ping" --health-interval 5s --health-retries 5

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"
          cache: "pip"

      - name: Install dependencies
        run: pip install -r requirements.txt

      - name: Run tests
        run: pytest -v --cov=app --cov-report=term-missing
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
          DATABASE_URL: sqlite:///test.db
```

### Exercise

Write a `.github/workflows/test.yml` for your RAG demo repo. Push it. Verify the badge turns green. Then write the same for the LangGraph project repo.

---

## 4.11 Load Testing (k6 / Locust)

Before you tell a client your API handles "thousands of requests," you need to prove it.

### k6 basics

```bash
# Install k6
winget install k6  # Windows
brew install k6    # macOS

# Run a test
k6 run load_test.js
```

```javascript
// load_test.js
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 },   // Ramp up to 10 users
    { duration: '1m', target: 10 },    // Stay at 10
    { duration: '30s', target: 0 },    // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'], // 95% of requests under 2s
    http_req_failed: ['rate<0.01'],    // <1% failure rate
  },
};

export default function () {
  const res = http.post(
    'https://rag-demo.apexpillar.tech/v1/query',
    JSON.stringify({ query: 'What is RAG?', top_k: 3 }),
    { headers: { 'Content-Type': 'application/json' } },
  );

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 3s': (r) => r.timings.duration < 3000,
  });

  sleep(1); // Think time between requests
}
```

### Locust (Python alternative)

```python
# locustfile.py
from locust import HttpUser, task, between

class RAGUser(HttpUser):
    wait_time = between(1, 3)  # Simulate user think time

    @task
    def query_rag(self):
        self.client.post(
            "/v1/query",
            json={"query": "Explain embeddings", "top_k": 3},
        )

    @task(3)  # Weight: this runs 3x more often
    def health_check(self):
        self.client.get("/healthz")
```

```bash
# Run Locust (web UI at http://localhost:8089)
locust -f locustfile.py --host https://rag-demo.apexpillar.tech

# Headless mode
locust -f locustfile.py --host https://rag-demo.apexpillar.tech \
  --headless -u 20 -r 2 --run-time 2m
```

### What to measure

| Metric | What it tells you | Target |
|--------|------------------|--------|
| Requests/sec (RPS) | Throughput | Depends on infra |
| P50 latency | Typical experience | < 500ms |
| P95 latency | Slow but acceptable | < 2s |
| P99 latency | Worst case | < 5s |
| Error rate | Failures under load | < 1% |
| Memory usage | Memory leak detection | Flat or stable |

### Exercise

Run a k6 load test against your RAG demo query endpoint:
1. Start with 5 concurrent users for 1 minute
2. Ramp to 20 concurrent users for 2 minutes
3. Record P50, P95, P99 latencies
4. Identify the bottleneck (LLM API call? Vector search? Network?)
5. Document your findings in the project README

---

## 4.12 Monitoring + Alerting (Grafana + Prometheus)

You can't improve what you don't measure. Grafana + Prometheus is the industry standard for monitoring AI services.

### Prometheus setup

```python
# app/metrics.py
from prometheus_client import Counter, Histogram, generate_latest
from fastapi import Request
import time

REQUEST_COUNT = Counter(
    "http_requests_total",
    "Total HTTP requests",
    ["method", "endpoint", "status"],
)

LATENCY = Histogram(
    "http_request_duration_seconds",
    "HTTP request latency",
    ["method", "endpoint"],
)

LLM_TOKEN_COUNT = Counter(
    "llm_tokens_total",
    "Total LLM tokens used",
    ["model", "operation"],
)
```

```python
# Middleware to record metrics
@app.middleware("http")
async def metrics_middleware(request: Request, call_next):
    start = time.time()
    response = await call_next(request)
    duration = time.time() - start

    REQUEST_COUNT.labels(
        method=request.method,
        endpoint=request.url.path,
        status=response.status_code,
    ).inc()

    LATENCY.labels(
        method=request.method,
        endpoint=request.url.path,
    ).observe(duration)

    return response


@app.get("/metrics")
async def metrics():
    return Response(
        content=generate_latest(),
        media_type="text/plain",
    )
```

### docker-compose with monitoring

```yaml
# docker-compose.monitoring.yml
services:
  prometheus:
    image: prom/prometheus:latest
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
    ports:
      - "9090:9090"

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3000:3000"
    depends_on:
      - prometheus
```

```yaml
# prometheus.yml
scrape_configs:
  - job_name: "rag-demo"
    scrape_interval: 15s
    static_configs:
      - targets: ["rag-demo.apexpillar.tech:8000"]
```

### Grafana dashboard panels to create

| Panel | Query | Why |
|-------|-------|-----|
| Request rate | `rate(http_requests_total[5m])` | See traffic patterns |
| P95 latency | `histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))` | Track performance regressions |
| Error rate | `rate(http_requests_total{status=~"5.."}[5m])` | Alert on server errors |
| LLM cost | `rate(llm_tokens_total[1h]) * $price_per_token` | Watch spending |
| Active users | `rate(http_requests_total[5m]) / avg_request_rate_per_user` | Estimate concurrency |

### Alerting rules (Prometheus)

```yaml
groups:
  - name: rag-demo-alerts
    rules:
      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.05
        for: 2m
        annotations:
          summary: "Error rate above 5% for 2 minutes"

      - alert: HighLatency
        expr: histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) > 3
        for: 5m
        annotations:
          summary: "P95 latency above 3s"

      - alert: HighLLMCost
        expr: rate(llm_tokens_total[1h]) * 30 / 1_000_000 > 10
        for: 10m
        annotations:
          summary: "LLM cost exceeding $10/hour"
```

### Exercise

Deploy Prometheus + Grafana alongside your RAG demo using docker-compose. Add the `/metrics` endpoint. Create a Grafana dashboard showing request rate and P95 latency. Verify that hitting your endpoint from the browser produces visible data points within 15 seconds.

---


interface RetryConfig { maxRetries: number; baseDelay: number; maxDelay: number }
class RetryMiddleware {
  constructor(private config: RetryConfig = {maxRetries:3,baseDelay:1000,maxDelay:10000}) {}
  async execute<T>(fn: () => Promise<T>): Promise<T> {
    let lastErr: Error = new Error()
    for(let i=0;i<=this.config.maxRetries;i++) try { return await fn() } catch(e) { lastErr = e as Error
      if(i<this.config.maxRetries) await this.sleep(Math.min(this.config.baseDelay*Math.pow(2,i),this.config.maxDelay)) }
    throw lastErr
  }
  private sleep(ms: number): Promise<void> { return new Promise(r => setTimeout(r,ms)) }
}
class CircuitBreaker {
  private failures = 0; private state: "CLOSED"|"OPEN"|"HALF_OPEN" = "CLOSED"
  private lastFailureTime = 0
  constructor(private threshold: number=5, private resetTimeout: number=30000) {}
  async call<T>(fn: () => Promise<T>): Promise<T> {
    if(this.state === "OPEN") { if(Date.now()-this.lastFailureTime>this.resetTimeout) this.state="HALF_OPEN"
      else throw new Error("Circuit breaker is OPEN") }
    try { const result = await fn(); if(this.state==="HALF_OPEN") this.state="CLOSED"; this.failures=0; return result }
    catch(e) { this.failures++; this.lastFailureTime=Date.now()
      if(this.failures>=this.threshold) this.state="OPEN"
      throw e }
  }
}
class RateLimiter {
  private tokens: number; private lastRefill = Date.now()
  constructor(private capacity: number, private refillRate: number) { this.tokens = capacity }
  async acquire(): Promise<void> {
    this.refill()
    if(this.tokens <= 0) { await this.sleep((1-this.tokens/this.refillRate)*1000); this.refill() }
    this.tokens--
  }
  private refill(): void { const now=Date.now(); const elapsed=(now-this.lastRefill)/1000; this.tokens=Math.min(this.capacity,this.tokens+elapsed*this.refillRate); this.lastRefill=now }
  private sleep(ms:number): Promise<void> { return new Promise(r=>setTimeout(r,ms)) }
}
export { RetryMiddleware, CircuitBreaker, RateLimiter }
## Phase 4 Done Checkpoint

Before moving to Phase 5, you should be able to:

- [ ] Write a multi-stage Dockerfile that's measurably smaller than a single-stage one
- [ ] Wire health checks and depends_on correctly in docker-compose
- [ ] Replace FastAPI BackgroundTasks with RQ for durable jobs
- [ ] Configure retry with exponential backoff + dead-letter queue
- [ ] Trace a single request across 3 log lines with the same correlation ID
- [ ] Expose /metrics with request count and latency
- [ ] Explain the difference between /healthz and /readyz
- [ ] Load all secrets from pydantic-settings with startup validation
- [ ] Log per-query cost for every LLM call
- [ ] Both project repos have green CI badges
- [ ] Run a k6/locust load test, report P50/P95/P99
- [ ] Deploy Grafana dashboard showing request rate + P95 latency

**Estimated time to checkpoint:** 24-26 hours over 2 weeks.

[Next: Phase 5 — Portfolio + Market Positioning](06-phase5-portfolio-positioning.md)
