# Production RAG Systems

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Design production-ready RAG architectures with reliability and scalability |
| LO2 | Implement API endpoints, authentication, and rate limiting |
| LO3 | Build monitoring, logging, and observability systems |
| LO4 | Design fallback strategies for retrieval failures |
| LO5 | Implement data refresh pipelines for knowledge base updates |
| LO6 | Optimize for cost, latency, and throughput at scale |

## Introduction

Understanding production rag systems is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering production rag systems.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 9.1 | Production Architecture | Microservices, async pipelines, deployment patterns |
| 9.2 | API Design | REST endpoints, authentication, rate limiting |
| 9.3 | Monitoring & Logging | Metrics, traces, alerts, dashboards |
| 9.4 | Fallback Strategies | Degradation modes, circuit breakers, graceful handling |
| 9.5 | Data Refresh | Incremental indexing, scheduled updates, consistency |
| 9.6 | Cost & Scale | Caching, auto-scaling, cost allocation |

## Chapter Roadmap

```mermaid
flowchart TD
    subgraph Edge
        A[Client] --> B[API Gateway]
        B --> C[Auth]
        C --> D[Rate Limiter]
    end
    subgraph Services
        D --> E[RAG Service]
        E --> F[Retriever]
        E --> G[Generator]
        F --> H[Vector DB]
        G --> I[LLM API]
    end
    subgraph Observability
        F --> J[Logs]
        G --> J
        E --> K[Metrics]
        E --> L[Traces]
    end
    subgraph Storage
        M[(Knowledge Base)] --> N[Indexer]
        N --> H
    end
```text

## 9.1 Production Architecture

### 9.1.1 Service-Oriented Architecture

```python
from dataclasses import dataclass
from typing import Dict, Any
import asyncio
import time


@dataclass
class ServiceConfig:
    name: str
    host: str
    port: int
    replicas: int
    timeout_ms: int


class MicroserviceRAG:
    def __init__(self, configs: Dict[str, ServiceConfig]):
        self.configs = configs
        self.services = {}

    def health_check(self) -> Dict[str, bool]:
        status = {}
        for name, config in self.configs.items():
            status[name] = True  # Simulated health check
        return status

    def get_service_url(self, name: str) -> str:
        config = self.configs.get(name)
        if not config:
            raise ValueError(f"Service {name} not found")
        return f"http://{config.host}:{config.port}"


configs = {
    "retriever": ServiceConfig("retriever", "localhost", 8001, 3, 200),
    "generator": ServiceConfig("generator", "localhost", 8002, 2, 5000),
    "indexer": ServiceConfig("indexer", "localhost", 8003, 1, 30000),
}
ms = MicroserviceRAG(configs)
print(f"Health: {ms.health_check()}")
```text

### 9.1.2 Async Pipeline

```python
class AsyncRAGPipeline:
    def __init__(self, retriever, generator):
        self.retriever = retriever
        self.generator = generator

    async def query_async(self, query: str) -> str:
        chunks = await self._retrieve_async(query)
        prompt = self._build_prompt(query, chunks)
        response = await self._generate_async(prompt)
        return response

    async def _retrieve_async(self, query: str) -> list:
        await asyncio.sleep(0.1)
        return [{"text": f"Result for {query}"}]

    async def _generate_async(self, prompt: str) -> str:
        await asyncio.sleep(0.3)
        return f"Generated response"

    def _build_prompt(self, query: str, chunks: list) -> str:
        context = "\n\n".join([c["text"] for c in chunks])
        return f"Context: {context}\n\nQuestion: {query}\n\nAnswer:"


async def test():
    pipeline = AsyncRAGPipeline(None, None)
    start = time.time()
    result = await pipeline.query_async("What is RAG?")
    elapsed = (time.time() - start) * 1000
    print(f"Async query: {result} ({elapsed:.0f}ms)")

asyncio.run(test())
```text

### 9.1.3 Deployment Patterns

```python
class DeploymentManager:
    def __init__(self):
        self.strategies = {
            "single": "All components on one server",
            "microservices": "Independent services with API gateway",
            "serverless": "AWS Lambda / Cloud Functions per component",
            "hybrid": "Vector DB managed, LLM serverless, app containerized",
        }

    def recommend(self, scale: str, budget: str, latency_sla: str) -> str:
        if scale == "small" and budget == "low":
            return "single"
        elif scale == "large" and latency_sla == "strict":
            return "microservices"
        elif budget == "variable":
            return "serverless"
        else:
            return "hybrid"

    def deployment_plan(self, strategy: str) -> list:
        plans = {
            "single": ["Provision 1 server (32GB RAM, 8CPU)", "Install Docker Compose", "Deploy all services"],
            "microservices": ["Set up Kubernetes cluster", "Deploy retriever service (3 pods)", "Deploy generator service (2 pods)", "Set up API gateway", "Configure autoscaling"],
            "serverless": ["Package retriever as Lambda", "Package generator as Cloud Function", "Use managed vector DB", "Set up API Gateway"],
        }
        return plans.get(strategy, [])


dm = DeploymentManager()
strategy = dm.recommend("large", "medium", "strict")
print(f"Recommended: {strategy}")
print(dm.deployment_plan(strategy))
```text

## 9.2 API Design

### 9.2.1 REST API

```python
from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel, Field
from typing import List, Optional
import uvicorn


class QueryRequest(BaseModel):
    query: str = Field(..., min_length=1, max_length=2000)
    conversation_id: Optional[str] = None
    top_k: int = Field(default=5, ge=1, le=20)
    temperature: float = Field(default=0.0, ge=0, le=2)


class QueryResponse(BaseModel):
    answer: str
    sources: List[str]
    confidence: float
    latency_ms: float


class SourceResponse(BaseModel):
    chunk_id: str
    text: str
    score: float
    metadata: Dict


## app = FastAPI(title="RAG API")
#
## @app.post("/query", response_model=QueryResponse)
## async def query_endpoint(request: QueryRequest):
##     try:
##         start = time.time()
##         result = rag_pipeline.query(request.query, request.top_k)
##         elapsed = (time.time() - start) * 1000
##         return QueryResponse(
##             answer=result["response"],
##             sources=[s["text"] for s in result["sources"]],
##             confidence=result.get("confidence", 0.95),
##             latency_ms=round(elapsed, 2),
##         )
##     except Exception as e:
##         raise HTTPException(status_code=500, detail=str(e))


print("FastAPI RAG endpoint design ready")
```text


## Overview
### 9.2.2 Authentication

```python
import hashlib
import hmac
from datetime import datetime
from typing import Optional


class APIKeyAuth:
    def __init__(self):
        self.api_keys = {}  # key -> permissions
        self.rate_limits = {}  # key -> request_count_window

    def add_key(self, key: str, permissions: List[str], rate_limit: int = 100):
        self.api_keys[key] = {"permissions": permissions, "rate_limit": rate_limit}
        self.rate_limits[key] = []

    def validate(self, key: str, required_permission: str = None) -> bool:
        if key not in self.api_keys:
            return False
        if required_permission and required_permission not in self.api_keys[key]["permissions"]:
            return False

        now = time.time()
        window = 60  # 1 minute window
        self.rate_limits[key] = [t for t in self.rate_limits.get(key, []) if now - t < window]

        rate_limit = self.api_keys[key]["rate_limit"]
        if len(self.rate_limits[key]) >= rate_limit:
            return False

        self.rate_limits[key].append(now)
        return True


class JWTAuth:
    def __init__(self, secret: str):
        self.secret = secret

    def create_token(self, user_id: str, permissions: List[str]) -> str:
        payload = f"{user_id}:{','.join(permissions)}:{datetime.now().timestamp() + 3600}"
        signature = hmac.new(self.secret.encode(), payload.encode(), hashlib.sha256).hexdigest()
        return f"{payload}:{signature}"

    def validate_token(self, token: str) -> Optional[Dict]:
        parts = token.split(":")
        if len(parts) < 3:
            return None
        payload = ":".join(parts[:-1])
        signature = parts[-1]

        expected = hmac.new(self.secret.encode(), payload.encode(), hashlib.sha256).hexdigest()
        if not hmac.compare_digest(signature, expected):
            return None

        timestamp = float(parts[2])
        if datetime.now().timestamp() > timestamp:
            return None

        return {"user_id": parts[0], "permissions": parts[1].split(",")}


auth = JWTAuth("my-secret-key")
token = auth.create_token("user-1", ["rag:query", "rag:sources"])
print(f"JWT token: {token[:50]}...")
print(f"Validated: {auth.validate_token(token)}")
```text

### 9.2.3 Rate Limiting

```python
import time
from collections import defaultdict
from threading import Lock


class SlidingWindowRateLimiter:
    def __init__(self, default_limit: int = 60, window_seconds: int = 60):
        self.default_limit = default_limit
        self.window = window_seconds
        self.requests: Dict[str, List[float]] = defaultdict(list)
        self.lock = Lock()

    def check(self, key: str, limit: int = None) -> bool:
        limit = limit or self.default_limit
        now = time.time()

        with self.lock:
            self.requests[key] = [t for t in self.requests[key] if now - t < self.window]
            if len(self.requests[key]) >= limit:
                return False
            self.requests[key].append(now)
            return True

    def remaining(self, key: str, limit: int = None) -> int:
        limit = limit or self.default_limit
        now = time.time()
        with self.lock:
            self.requests[key] = [t for t in self.requests[key] if now - t < self.window]
            return limit - len(self.requests[key])


limiter = SlidingWindowRateLimiter(default_limit=5, window_seconds=60)
for i in range(7):
    allowed = limiter.check("user-1")
    print(f"Request {i+1}: {'allowed' if allowed else 'blocked'}")
```text

## 9.3 Monitoring & Logging

### 9.3.1 Structured Logging

```python
import json
import uuid
from datetime import datetime


class StructuredLogger:
    def __init__(self, service_name: str):
        self.service = service_name

    def log_query(self, query: str, user_id: str, chunks: int, latency_ms: float):
        entry = {
            "event": "query",
            "service": self.service,
            "query": query[:200],
            "user_id": user_id,
            "num_chunks": chunks,
            "latency_ms": round(latency_ms, 2),
            "timestamp": datetime.now().isoformat(),
            "request_id": str(uuid.uuid4()),
        }
        print(json.dumps(entry))

    def log_error(self, error: str, context: str, request_id: str):
        entry = {
            "event": "error",
            "service": self.service,
            "error": error,
            "context": context[:500],
            "request_id": request_id,
            "timestamp": datetime.now().isoformat(),
        }
        print(json.dumps(entry))

    def log_metric(self, name: str, value: float, tags: Dict = None):
        entry = {
            "event": "metric",
            "service": self.service,
            "metric": name,
            "value": value,
            "tags": tags or {},
            "timestamp": datetime.now().isoformat(),
        }
        print(json.dumps(entry))


logger = StructuredLogger("rag-service")
logger.log_query("What is RAG?", "user-1", 5, 450.2)
logger.log_error("Vector DB timeout", "Connection pool exhausted", "req-123")
```text

### 9.3.2 Metrics Collection

```python
from collections import Counter
import statistics


class MetricsCollector:
    def __init__(self):
        self.counters: Dict[str, Counter] = defaultdict(Counter)
        self.timings: Dict[str, List[float]] = defaultdict(list)
        self.gauges: Dict[str, float] = {}

    def increment(self, metric: str, tags: Dict = None):
        tag_str = str(tags) if tags else "default"
        self.counters[metric][tag_str] += 1

    def record_timing(self, metric: str, value_ms: float):
        self.timings[metric].append(value_ms)

    def set_gauge(self, metric: str, value: float):
        self.gauges[metric] = value

    def snapshot(self) -> Dict:
        return {
            "counters": {
                metric: dict(tags) for metric, tags in self.counters.items()
            },
            "timings": {
                metric: {
                    "avg": round(statistics.mean(values), 2),
                    "p50": round(sorted(values)[len(values) // 2], 2),
                    "p95": round(sorted(values)[int(len(values) * 0.95)], 2),
                    "p99": round(sorted(values)[int(len(values) * 0.99)], 2),
                    "count": len(values),
                }
                for metric, values in self.timings.items()
            },
            "gauges": self.gauges,
        }


metrics = MetricsCollector()
metrics.increment("queries_total", {"endpoint": "/query"})
metrics.record_timing("retrieval_latency", 150.5)
metrics.record_timing("retrieval_latency", 200.3)
metrics.set_gauge("vector_db_size", 10000)
print(json.dumps(metrics.snapshot(), indent=2, default=str))
```text

### 9.3.3 Alerting Rules

```python
@dataclass
class AlertRule:
    metric: str
    operator: str
    threshold: float
    duration_seconds: int
    severity: str


class AlertManager:
    def __init__(self):
        self.rules: List[AlertRule] = []
        self.alert_history: List[Dict] = []
        self.metric_buffer: Dict[str, List[tuple]] = defaultdict(list)

    def add_rule(self, rule: AlertRule):
        self.rules.append(rule)

    def feed_metric(self, name: str, value: float, timestamp: float = None):
        ts = timestamp or time.time()
        self.metric_buffer[name].append((ts, value))

    def check_alerts(self) -> List[Dict]:
        alerts = []
        now = time.time()
        for rule in self.rules:
            recent = [
                v for t, v in self.metric_buffer[rule.metric]
                if now - t < rule.duration_seconds
            ]
            if not recent:
                continue

            trigger = False
            if rule.operator == "gt" and statistics.mean(recent) > rule.threshold:
                trigger = True
            elif rule.operator == "lt" and statistics.mean(recent) < rule.threshold:
                trigger = True

            if trigger:
                alert = {
                    "rule": rule.metric,
                    "value": round(statistics.mean(recent), 2),
                    "threshold": rule.threshold,
                    "severity": rule.severity,
                    "timestamp": datetime.now().isoformat(),
                }
                alerts.append(alert)
                self.alert_history.append(alert)

        return alerts


alert_mgr = AlertManager()
alert_mgr.add_rule(AlertRule("retrieval_p95_latency", "gt", 500, 300, "warning"))
alert_mgr.feed_metric("retrieval_p95_latency", 600)
print(f"Alerts: {alert_mgr.check_alerts()}")
```text

## 9.4 Fallback Strategies

### 9.4.1 Circuit Breaker

```python
class CircuitBreaker:
    def __init__(self, failure_threshold: int = 5, recovery_timeout: float = 30.0):
        self.failure_threshold = failure_threshold
        self.recovery_timeout = recovery_timeout
        self.failure_count = 0
        self.last_failure_time = 0
        self.state = "closed"  # closed, open, half-open

    def call(self, fn, *args, **kwargs):
        if self.state == "open":
            if time.time() - self.last_failure_time > self.recovery_timeout:
                self.state = "half-open"
            else:
                raise Exception("Circuit breaker is OPEN")

        try:
            result = fn(*args, **kwargs)
            if self.state == "half-open":
                self.state = "closed"
                self.failure_count = 0
            return result
        except Exception as e:
            self.failure_count += 1
            self.last_failure_time = time.time()
            if self.failure_count >= self.failure_threshold:
                self.state = "open"
            raise e


def unreliable_llm_call(prompt: str) -> str:
    if time.time() % 3 < 1:
        raise Exception("LLM timeout")
    return "Response"


cb = CircuitBreaker(failure_threshold=3, recovery_timeout=10)
for i in range(10):
    try:
        result = cb.call(unreliable_llm_call, "test")
    except Exception as e:
        print(f"Attempt {i+1}: {e}")
```text

### 9.4.2 Fallback Chain

```python
class FallbackChain:
    def __init__(self, strategies: list):
        self.strategies = strategies

    def execute(self, query: str) -> tuple:
        errors = []
        for name, strategy_fn in self.strategies:
            try:
                result = strategy_fn(query)
                return result, name
            except Exception as e:
                errors.append(f"{name}: {e}")
                continue
        return None, errors

    @staticmethod
    def default_retriever(query: str) -> list:
        return [{"text": f"Default result for {query}"}]

    @staticmethod
    def degraded_retriever(query: str) -> list:
        return [{"text": "Unable to retrieve specific results. Using general knowledge."}]


fallback = FallbackChain([
    ("primary_vector_db", lambda q: (_ for _ in ()).throw(Exception("DB timeout"))),
    ("backup_vector_db", lambda q: (_ for _ in ()).throw(Exception("Backup also down"))),
    ("keyword_search", lambda q: [{"text": f"Keyword match: {q}"}]),
])
result, method = fallback.execute("What is RAG?")
print(f"Fallback method: {method}, result: {result}")
```text

### 9.4.3 Graceful Degradation

```python
class DegradationManager:
    def __init__(self):
        self.service_health: Dict[str, bool] = {}
        self.degradation_level = 0  # 0=full, 1=reduced, 2=minimal

    def mark_unhealthy(self, service: str):
        self.service_health[service] = False
        self._recalculate_level()

    def mark_healthy(self, service: str):
        self.service_health[service] = True
        self._recalculate_level()

    def _recalculate_level(self):
        unhealthy = sum(1 for h in self.service_health.values() if not h)
        total = len(self.service_health)
        if total == 0:
            self.degradation_level = 0
        elif unhealthy / total > 0.5:
            self.degradation_level = 2
        elif unhealthy > 0:
            self.degradation_level = 1
        else:
            self.degradation_level = 0

    def get_response_config(self) -> Dict:
        if self.degradation_level == 0:
            return {"top_k": 5, "use_generator": True, "include_sources": True}
        elif self.degradation_level == 1:
            return {"top_k": 3, "use_generator": True, "include_sources": False}
        else:
            return {"top_k": 1, "use_generator": False, "include_sources": False}


deg = DegradationManager()
deg.mark_unhealthy("generator")
print(f"Degradation level: {deg.degradation_level}")
print(f"Response config: {deg.get_response_config()}")
```text

## 9.5 Data Refresh

### 9.5.1 Incremental Indexing

```python
class IncrementalIndexer:
    def __init__(self, vector_store):
        self.vector_store = vector_store
        self.last_indexed = 0

    def index_new_documents(self, documents: List[Document]) -> Dict:
        indexed = 0
        errors = 0
        for doc in documents:
            try:
                chunks = chunk_document(doc.text)
                for chunk_text in chunks:
                    vector = mock_embedder(chunk_text).tolist()
                    self.vector_store.insert(
                        id=f"{doc.id}-{hash(chunk_text[:50])}",
                        vector=vector,
                        metadata={"source": doc.id, "text": chunk_text},
                    )
                    indexed += 1
            except Exception:
                errors += 1

        self.last_indexed = time.time()
        return {"indexed": indexed, "errors": errors, "timestamp": self.last_indexed}

    def sync_status(self) -> Dict:
        return {
            "last_indexed": datetime.fromtimestamp(self.last_indexed).isoformat() if self.last_indexed else "never",
            "num_documents": self.vector_store.size(),
        }


indexer = IncrementalIndexer(VectorStore())
stats = indexer.index_new_documents([Document(id="new-doc", text="New RAG research")])
print(f"Indexing stats: {stats}")
```text

### 9.5.2 Scheduled Refresh

```python
import schedule
import time as time_module


class RefreshScheduler:
    def __init__(self, indexer: IncrementalIndexer, data_source):
        self.indexer = indexer
        self.data_source = data_source
        self.schedule_jobs = []

    def add_hourly_refresh(self):
        def job():
            new_docs = self.data_source.get_updates_since(self.indexer.last_indexed)
            if new_docs:
                stats = self.indexer.index_new_documents(new_docs)
                print(f"Hourly refresh: {stats}")
        schedule.every(1).hours.do(job)
        self.schedule_jobs.append("hourly")

    def add_daily_full_refresh(self):
        def job():
            all_docs = self.data_source.get_all()
            stats = self.indexer.index_new_documents(all_docs)
            print(f"Daily full refresh: {stats}")
        schedule.every().day.at("02:00").do(job)
        self.schedule_jobs.append("daily_full")

    def run_pending(self):
        schedule.run_pending()


class MockDataSource:
    def get_updates_since(self, timestamp: float) -> List[Document]:
        return [Document(id="updated-doc", text="Updated content")]

    def get_all(self) -> List[Document]:
        return [Document(id="doc-1", text="Full content")]


scheduler = RefreshScheduler(IncrementalIndexer(VectorStore()), MockDataSource())
scheduler.add_hourly_refresh()
scheduler.add_daily_full_refresh()
print(f"Refresh schedule: {scheduler.schedule_jobs}")
```text

### 9.5.3 Consistency Management

```python
class ConsistencyManager:
    def __init__(self, vector_store, source_db):
        self.vector_store = vector_store
        self.source_db = source_db

    def verify_consistency(self, sample_size: int = 100) -> Dict:
        mismatches = 0
        checked = 0

        for doc_id in self.source_db.get_all_doc_ids()[:sample_size]:
            source_text = self.source_db.get_text(doc_id)
            stored_chunk = self.vector_store.get(doc_id)
            checked += 1

            if stored_chunk and stored_chunk.metadata.get("text") != source_text:
                mismatches += 1

        return {
            "checked": checked,
            "mismatches": mismatches,
            "consistent_pct": round((1 - mismatches / checked) * 100, 2) if checked > 0 else 100,
        }

    def repair_inconsistencies(self):
        report = self.verify_consistency()
        if report["mismatches"] > 0:
            print(f"Repairing {report['mismatches']} inconsistent documents")
        return report


cm = ConsistencyManager(VectorStore(), None)
print("Consistency manager ready")
```text

## 9.6 Cost & Scale

### 9.6.1 Multi-Layer Caching

```python
class ProductionCache:
    def __init__(self):
        self.l1_cache = {}  # In-memory, fast, small
        self.l2_cache = {}  # Redis-like, larger
        self.l1_max_size = 1000
        self.l2_max_size = 10000
        self.hit_counts = {"l1": 0, "l2": 0, "miss": 0}

    def get(self, key: str) -> Optional[str]:
        if key in self.l1_cache:
            self.hit_counts["l1"] += 1
            return self.l1_cache[key]
        if key in self.l2_cache:
            self.hit_counts["l2"] += 1
            self.l1_cache[key] = self.l2_cache[key]
            return self.l2_cache[key]
        self.hit_counts["miss"] += 1
        return None

    def set(self, key: str, value: str):
        if len(self.l1_cache) >= self.l1_max_size:
            evict_key = next(iter(self.l1_cache))
            self.l2_cache[evict_key] = self.l1_cache.pop(evict_key)
        self.l1_cache[key] = value
        if len(self.l2_cache) >= self.l2_max_size:
            self.l2_cache.pop(next(iter(self.l2_cache)))

    def stats(self) -> Dict:
        total = sum(self.hit_counts.values())
        return {
            "l1_hits": self.hit_counts["l1"],
            "l2_hits": self.hit_counts["l2"],
            "misses": self.hit_counts["miss"],
            "hit_rate": round((self.hit_counts["l1"] + self.hit_counts["l2"]) / total * 100, 2) if total > 0 else 0,
        }


pcache = ProductionCache()
for i in range(100):
    pcache.set(f"key-{i}", f"value-{i}")
pcache.get("key-1")
pcache.get("key-2")
print(f"Cache stats: {pcache.stats()}")
```text

### 9.6.2 Auto-Scaling

```python
class AutoScaler:
    def __init__(self, min_replicas: int = 2, max_replicas: int = 10):
        self.min_replicas = min_replicas
        self.max_replicas = max_replicas
        self.current_replicas = min_replicas
        self.cpu_threshold = 70.0
        self.qps_threshold = 100

    def scale(self, current_cpu: float, current_qps: int) -> Dict:
        action = "none"
        if current_cpu > self.cpu_threshold or current_qps > self.qps_threshold:
            if self.current_replicas < self.max_replicas:
                self.current_replicas += 1
                action = "scale_up"
        elif current_cpu < self.cpu_threshold * 0.5 and current_qps < self.qps_threshold * 0.5:
            if self.current_replicas > self.min_replicas:
                self.current_replicas -= 1
                action = "scale_down"

        return {
            "current_replicas": self.current_replicas,
            "action": action,
            "cpu": current_cpu,
            "qps": current_qps,
        }


scaler = AutoScaler(min_replicas=2, max_replicas=10)
print(scaler.scale(cpu=85.0, qps=150))
print(scaler.scale(cpu=30.0, qps=40))
```text

### 9.6.3 Cost Allocation

```python
class CostAllocator:
    def __init__(self):
        self.costs: Dict[str, float] = defaultdict(float)
        self.request_log: List[Dict] = []

    def record_request(self, query: str, user_id: str, tokens_in: int, tokens_out: int, model: str):
        pricing = PRICING.get(model, ModelPricing(model, 0.15, 0.60))
        cost = (tokens_in / 1000) * pricing.input_price_per_1k + (tokens_out / 1000) * pricing.output_price_per_1k

        entry = {
            "user_id": user_id,
            "query_length": len(query),
            "tokens_in": tokens_in,
            "tokens_out": tokens_out,
            "model": model,
            "cost": round(cost, 6),
            "timestamp": datetime.now().isoformat(),
        }
        self.request_log.append(entry)
        self.costs[user_id] += cost

    def user_spend(self, user_id: str) -> float:
        return round(self.costs.get(user_id, 0), 4)

    def top_users(self, n: int = 10) -> List[Dict]:
        sorted_users = sorted(self.costs.items(), key=lambda x: x[1], reverse=True)
        return [
            {"user_id": uid, "cost": round(cost, 4)}
            for uid, cost in sorted_users[:n]
        ]


allocator = CostAllocator()
allocator.record_request("What is RAG?", "user-1", 1500, 200, "gpt-4o-mini")
allocator.record_request("Explain transformers", "user-1", 2000, 500, "gpt-4o")
print(f"User-1 spend: ${allocator.user_spend('user-1')}")
print(f"Top users: {allocator.top_users()}")
```text

## Summary

Production RAG systems require robust architecture with service-oriented design, comprehensive monitoring, fault tolerance, and scale management. Key considerations include: async pipelines for non-blocking query processing, API authentication with JWT and rate limiting, structured logging and metrics collection for observability, circuit breakers and fallback chains for resilience, incremental indexing with scheduled refreshes for data freshness, and multi-layer caching with auto-scaling for cost-effective scaling.

## Practical Takeaways

| Takeaway | Description |
|----------|-------------|
| Monitor everything | Log every query, track latency p95, set alerts on degradation |
| Plan for failure | Circuit breakers, fallback chains, and graceful degradation are essential |
| Cache aggressively | Two-level cache (memory + Redis) can reduce costs by 40-60% |
| Index incrementally | Batch + incremental indexing with consistency verification |
| Allocate costs | Track spend per user/feature for chargeback and optimization |
| Scale horizontally | Auto-scale based on CPU and QPS, keep stateless services |

## Interview Q&A

<details data-qid="rag09-q1">
<summary><strong>1.</strong> How do you decide between synchronous and asynchronous RAG pipelines in production?</summary>
The choice depends on latency requirements and workload predictability. Synchronous pipelines work well for real-time chat applications where users expect sub-second responses — the request flows directly through retrieval, generation, and response. Asynchronous pipelines suit batch processing jobs like document summarization or report generation where throughput matters more than latency. In practice, production systems often use a hybrid: synchronous for interactive queries with a timeout fallback, and an async queue (e.g., RabbitMQ, Redis Streams) for heavy or parallel workloads. The async path also simplifies retry logic and backpressure handling when the LLM or vector DB is under load.
</details>

<details data-qid="rag09-q2">
<summary><strong>2.</strong> What metrics do you monitor in a production RAG system, and why?</summary>
Key metrics fall into three categories: retrieval quality, generation quality, and operational health. For retrieval, track recall@k, mean reciprocal rank, and latency p50/p99 of vector searches. For generation, monitor faithfulness (whether the response stays grounded in retrieved context), relevance, and hallucination rate via LLM-as-judge evaluations. On the ops side, track QPS, error rates, memory usage, and embedding cache hit ratios. A sudden drop in recall or a spike in generation latency often signals a data drift or infrastructure issue that needs immediate investigation.
</details>

<details data-qid="rag09-q3">
<summary><strong>3.</strong> How do you handle real-time updates to your knowledge base without rebuilding indexes?</summary>
Most production systems use a two-tier strategy: incremental indexing for new documents and periodic full re-indexing for consistency. When a document is added or updated, the system computes its embedding and upserts it into the vector index (e.g., using the `upsert` endpoint in Pinecone or the `merge` operation in Qdrant). A metadata field like `last_updated` helps the retriever filter stale documents. For deletions, a tombstone list combined with a nightly compaction job removes orphaned vectors. This approach keeps the index fresh within seconds while avoiding costly full rebuilds.
</details>

<details data-qid="rag09-q4">
<summary><strong>4.</strong> Explain the circuit breaker pattern in the context of RAG production systems.</summary>
A circuit breaker prevents cascading failures when a downstream dependency — such as the embedding service, vector DB, or LLM provider — becomes unhealthy. The system tracks failures (e.g., 5xx errors or timeouts) within a sliding window. Once the error threshold is crossed, the breaker trips to OPEN state, causing all subsequent calls to fail fast with a fallback response (e.g., a static answer or a cache hit) instead of waiting for a timeout. After a cooldown period, the breaker transitions to HALF-OPEN, allowing a probe request to test recovery. This pattern is essential for maintaining availability during provider outages or network partitions.
</details>

<details data-qid="rag09-q5">
<summary><strong>5.</strong> How do you implement caching strategies to reduce latency and cost in RAG?</summary>
Caching can be applied at multiple layers: embedding cache, retrieved document cache, and LLM response cache. An embedding cache stores computed embeddings keyed by document hash, avoiding redundant API calls to the embedding model. A document cache (e.g., Redis) stores the top-k retrieved chunks keyed by query hash, so identical or near-identical queries skip retrieval entirely. An LLM response cache stores full prompt-response pairs, typically with a TTL and semantic similarity matching (e.g., cosine similarity > 0.95). The most impactful strategy is usually embedding caching because it reduces both latency and embedding API costs without affecting generation quality.
</details>

<details data-qid="rag09-q6">
<summary><strong>6.</strong> How do you implement canary deployments for a RAG system?</summary>
A canary deployment routes a small percentage of production traffic (e.g., 5%) to a new model version or retrieval pipeline while the rest uses the stable version. The canary must be evaluated on both quality metrics (faithfulness, relevance via LLM-as-judge) and operational metrics (latency p99, error rate, cost per query). If the canary performs within acceptable thresholds for a observation period (typically 1-24 hours based on traffic volume), traffic is gradually increased to 25%, 50%, then 100%. This approach catches regressions before they affect all users — for example, a new embedding model that accidentally reduces recall on technical queries would be caught during the 5% phase and rolled back without a full outage.
</details>

<details data-qid="rag09-q7">
<summary><strong>7.</strong> What strategies exist for handling LLM provider rate limits in production?</summary>
Rate limit handling requires a multi-layered approach. First, implement client-side throttling with a token bucket algorithm that stays within the provider's published limits. Second, add a retry queue with exponential backoff and jitter — if a 429 response is received, the request is retried after `base_delay * 2^attempt + random_jitter` milliseconds. Third, use a circuit breaker to fail fast when the provider is consistently returning errors. Fourth, implement a fallback chain: if the primary provider (e.g., GPT-4) is rate-limited, downgrade to a secondary provider (e.g., GPT-3.5 or a self-hosted model) with a different quota pool. Finally, monitor rate limit headroom and alert when usage exceeds 80% of the quota.
</details>

<details data-qid="rag09-q8">
<summary><strong>8.</strong> How do you ensure data privacy and compliance in production RAG deployments?</summary>
Data privacy in RAG systems requires controls at every pipeline stage. At ingestion, documents should be classified for sensitivity (PII, confidential, public) and stored with access control labels. The vector index must enforce tenant isolation — either through separate indexes per tenant or through metadata-based filtering that restricts results to the authenticated user's scope. The LLM provider agreement must include a data processing addendum (DPA) that guarantees no training on customer data. For highly sensitive data, deploy a self-hosted LLM (e.g., Llama 3 via vLLM) so documents never leave the VPC. Audit logging should record every retrieval and generation event for compliance review, and a data retention policy must define how long query logs and cached responses are kept.
</details>

<details data-qid="rag09-q9">
<summary><strong>9.</strong> Describe how you would set up CI/CD for a RAG pipeline with continuous evaluation.</summary>
A RAG CI/CD pipeline integrates both code changes and data changes. On every push, a build step runs unit tests for the retriever and generator components, then deploys a preview environment with a snapshot of the evaluation dataset. The pipeline runs a benchmark suite: recall@k against a golden query set, faithfulness scores from an LLM judge, and latency benchmarks. If all quality gates pass (e.g., recall > 0.85, faithfulness > 0.9, p99 latency < 500ms), the changes are promoted to staging. A shadow deployment in production runs the new pipeline in parallel with the old one, comparing outputs without serving them to users. After 24 hours of shadow evaluation, a final human review approves or rejects the rollout. This process catches both code bugs and data drift before they reach end users.
</details>

<details data-qid="rag09-q10">
<summary><strong>10.</strong> What are the most common failure modes in production RAG systems and how do you mitigate them?</summary>
The most common failures are hallucination from missing context, retrieval of irrelevant chunks, and LLM rejection due to safety filters. For missing context, implement a fallback response like "I don't have enough information to answer that" rather than letting the LLM guess. For irrelevant retrieval, add a relevance threshold filter that discards chunks below a cosine similarity of 0.7, paired with a query rewriting step that reformulates ambiguous queries. For safety filter rejections, log the rejection reason and return a user-friendly message while tracking the trigger patterns to improve the prompt or safety configuration. Additional mitigations include monotonic retries for transient failures, load shedding under high traffic, and automated rollback triggers that activate when any quality metric drops below its baseline for two consecutive evaluation windows.
</details>

## Chapter Quiz

<details data-qid="rag-s9-quiz1">
<summary><strong>1.</strong> What pattern prevents cascading failures when a downstream service is unhealthy?</summary>
A. Load balancer
B. Circuit breaker
C. Connection pool
D. Thread pool
Answer: B
</details>

<details data-qid="rag-s9-quiz2">
<summary><strong>2.</strong> What is the purpose of rate limiting in a production RAG API?</summary>
A. To reduce model accuracy
B. To protect against abuse and ensure fair usage
C. To cache responses
D. To batch requests
Answer: B
</details>

<details data-qid="rag-s9-quiz3">
<summary><strong>3.</strong> Which metric is most important for monitoring user-facing RAG latency?</summary>
A. p50 latency
B. p95 latency
C. Mean latency
D. Minimum latency
Answer: B
</details>

<details data-qid="rag-s9-quiz4">
<summary><strong>4.</strong> What is the first level of caching in a production RAG system?</summary>
A. Disk cache
B. L1 in-memory cache
C. Redis cache
D. CDN cache
Answer: B
</details>

<details data-qid="rag-s9-quiz5">
<summary><strong>5.</strong> Why use incremental indexing instead of full re-indexing?</summary>
A. It produces higher quality embeddings
B. It reduces computational cost and index freshness lag
C. It eliminates the need for chunking
D. It supports more data types
Answer: B
</details>

## Exercises


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition1. Design a production RAG system architecture with 4 services (retrieval, generation, indexing, monitoring). Draw the data flow and describe each component's scaling strategy.

2. Implement a FastAPI-based RAG endpoint with JWT authentication, rate limiting (100 req/min/user), and structured logging. Test with 3 concurrent users.

3. Build a circuit breaker for LLM API calls with failure threshold=5, recovery timeout=30s. Simulate intermittent failures and demonstrate circuit opening/closing.

4. Create a multi-level caching system (L1 memory, L2 Redis) for a RAG pipeline. Measure hit rates and latency improvement with and without cache on 1000 queries.

5. Implement a cost allocation tracker that logs every API call, attributes cost to users/features, and generates a daily report of top spenders and to

## Revision Notes

- Key concept 1: Core principle of 12-rag-vector-databases
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 12-rag-vector-databases. When would you choose one approach over another?
2. Design a system that efficiently handles 12-rag-vector-databases at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 12-rag-vector-databases. What was your approach and what was the result?
2. How would you explain 12-rag-vector-databases to a non-technical stakeholder?

#### Microsoft Style
1. How does 12-rag-vector-databases integrate with enterprise systems and cloud architectures?
2. What are the security implications of 12-rag-vector-databases?

#### NVIDIA Style
1. How would you optimize 12-rag-vector-databases for GPU-accelerated computing?
2. What parallel processing patterns apply to 12-rag-vector-databases?

#### AI Startup Style
1. How would you implement 12-rag-vector-databases in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 12-rag-vector-databases?

### Resume Tips
- **Technical Skills**: List 12-rag-vector-databases under relevant technical skills
- **Project Description**: "Implemented 12-rag-vector-databases to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 12-rag-vector-databases in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 12-rag-vector-databases
- [ ] Practice 3-5 problems related to 12-rag-vector-databases
- [ ] Prepare 2 real-world examples of using 12-rag-vector-databases
- [ ] Know the time/space complexity of common 12-rag-vector-databases operations
- [ ] Have questions ready about how the company uses 12-rag-vector-databasestal cost.
