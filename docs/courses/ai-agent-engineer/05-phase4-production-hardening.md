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

**Estimated time to checkpoint:** 18-20 hours over 2 weeks.

[Next: Phase 5 — Portfolio + Market Positioning](06-phase5-portfolio-positioning.md)
