# Week 2 — AI System Design

**Dates:** Aug 25–31, 2026
**Daily:** 5 hours
**Goal:** AI-specific systems design karna seekho — RAG, agents, model serving

---

## Day 1 — RAG System Design

### Architecture Overview

```
                        ┌──────────────────┐
                        │   Data Sources    │
                        │  (PDF, Web, DB)   │
                        └────────┬─────────┘
                                 │
                    ┌────────────▼────────────┐
                    │     Ingestion Pipeline   │
                    │  ┌──────┐ ┌──────┐      │
                    │  │Chunk │ │Embed │      │
                    │  │      │ │      │      │
                    │  └──────┘ └──────┘      │
                    │         │               │
                    │    ┌────▼────┐          │
                    │    │  Index  │          │
                    └────────┬───────────────┘
                             │
                    ┌────────▼────────┐
                    │   Vector DB     │
                    │   (Qdrant)      │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │   Query Pipeline │
                    │ Query → Embed → │
                    │ Search → Rerank │
                    │ → LLM → Response│
                    └─────────────────┘
```

### Ingestion Pipeline Design

```python
"""
Production RAG Ingestion Pipeline
"""

from dataclasses import dataclass
from typing import List
import hashlib
from datetime import datetime

@dataclass
class Document:
    id: str
    content: str
    metadata: dict
    source: str

class IngestionPipeline:
    def __init__(self, chunker, embedder, vector_store):
        self.chunker = chunker
        self.embedder = embedder
        self.vector_store = vector_store

    async def process_document(self, doc: Document) -> dict:
        # 1. Dedup check
        doc_hash = hashlib.sha256(doc.content.encode()).hexdigest()
        existing = await self.vector_store.get_by_hash(doc_hash)
        if existing:
            return {"status": "skipped", "reason": "duplicate"}

        # 2. Chunking
        chunks = self.chunker.split(doc.content)
        chunk_metas = []
        for i, chunk in enumerate(chunks):
            chunk_metas.append({
                "doc_id": doc.id,
                "chunk_index": i,
                "source": doc.source,
                "hash": hashlib.sha256(chunk.encode()).hexdigest()
            })

        # 3. Embedding in batches
        batch_size = 32
        all_embeddings = []
        for i in range(0, len(chunks), batch_size):
            batch = chunks[i:i+batch_size]
            embeddings = await self.embedder.embed_batch(batch)
            all_embeddings.extend(embeddings)

        # 4. Store in vector DB
        point_ids = await self.vector_store.upsert(
            vectors=all_embeddings,
            payloads=[{"text": c, **m}
                      for c, m in zip(chunks, chunk_metas)]
        )

        return {
            "status": "indexed",
            "doc_id": doc.id,
            "chunks": len(chunks),
            "point_ids": point_ids
        }
```

### Scaling Challenges

```
Challenge 1: Ingestion Speed
  Problem: 10,000 documents, each 100 pages
  Solution:
    → Parallel processing (asyncio + multiprocessing)
    → Batch embedding (GPU inference)
    → Incremental indexing (only new/changed docs)

Challenge 2: Vector DB Indexing
  Problem: 10M+ vectors → search slow
  Solution:
    → HNSW index (fast but memory heavy)
    → IVF index (memory efficient but slower)
    → Quantization (reduce vector size)
    → Sharding across multiple nodes

Challenge 3: Query Latency
  Problem: User waits 5s for each query
  Solution:
    → Embedding cache (same query → skip embedding)
    → Response cache (same question → skip LLM)
    → Streaming response
    → Speculative execution (pre-fetch related docs)

Challenge 4: Consistency
  Problem: New document indexed → not showing in search
  Solution:
    → Read-after-write consistency for same user
    → Eventual consistency for others
    → Index refresh interval: 5 min
```

### Caching Strategies for RAG

```python
# Multi-level caching
class RAGCache:
    def __init__(self, redis_client):
        self.redis = redis_client

    async def get_embedding_cache(self, text: str) -> List[float] | None:
        key = f"emb:{hash(text)}"
        data = await self.redis.get(key)
        if data:
            return json.loads(data)
        return None

    async def set_embedding_cache(self, text: str, embedding: List[float]):
        key = f"emb:{hash(text)}"
        await self.redis.setex(key, 86400, json.dumps(embedding))

    async def get_query_cache(self, query: str) -> str | None:
        key = f"rag:{hash(query)}"
        data = await self.redis.get(key)
        return data  # TTL: 1 hour

    async def set_query_cache(self, query: str, response: str):
        key = f"rag:{hash(query)}"
        await self.redis.setex(key, 3600, response)
```

### Day 1 Exercise

```
Document AI for 10K users — vector DB capacity plan:

Current: 1000 documents = 100K chunks = 100K vectors

Scale to:
  - 10K users
  - 50K documents
  - 5M vectors
  - Peak QPS: 100

Questions:
1. Vector DB size calculate karo (each vector: 768 dims = ~3KB)
2. RAM estimate karo for HNSW index
3. Sharding strategy
4. Cache hit ratio target (%)
5. Cost estimate (Qdrant cloud vs self-hosted)
```

---

## Day 2 — Agent System Design

### Agent Architecture

```python
"""
Multi-Agent System Architecture
"""

from typing import List, Dict, Any
import asyncio
from datetime import datetime

class AgentSystem:
    """
    Core orchestration for multiple AI agents
    """

    def __init__(self, llm, tools: List, memory_store):
        self.llm = llm
        self.tools = {t.name: t for t in tools}
        self.memory = memory_store
        self.task_queue = asyncio.Queue()
        self.active_agents: Dict[str, AgentInstance] = {}

    async def execute_agent(self, task: Dict) -> Dict:
        agent_id = f"agent_{datetime.now().timestamp()}"

        # 1. Tool planning
        plan = await self.llm.plan(
            task=task,
            available_tools=list(self.tools.keys())
        )

        # 2. Tool execution loop
        results = []
        for step in plan["steps"]:
            tool = self.tools.get(step["tool"])
            if not tool:
                continue

            # Execute tool with timeout
            try:
                result = await asyncio.wait_for(
                    tool.execute(**step["params"]),
                    timeout=30.0
                )
            except asyncio.TimeoutError:
                result = {"error": "Tool timeout"}
                # Error recovery strategy
                await self._handle_error(agent_id, step, result)
                result = await self._retry_with_fallback(step)

            results.append(result)

            # Update memory
            await self.memory.add(
                agent_id=agent_id,
                step=step["tool"],
                result=result
            )

        # 3. Final response generation
        response = await self.llm.synthesize(
            task=task,
            results=results
        )
        return {
            "agent_id": agent_id,
            "response": response,
            "steps": len(results),
            "duration_s": datetime.now().timestamp() - task["timestamp"]
        }

    async def _handle_error(self, agent_id: str, step: Dict, error: Dict):
        """Error recovery — retry, fallback, or fail"""
        await self.memory.add(
            agent_id=agent_id,
            type="error",
            step=step["tool"],
            error=error
        )

    async def _retry_with_fallback(self, step: Dict) -> Dict:
        """Try alternative tool or simplified approach"""
        # Example: if search fails, try cache
        # If LLM fails, try smaller model
        pass
```

### Memory Management

```
Agent Memory Types:
┌──────────────────────────────────────────────┐
│              Agent Memory                     │
├────────────────┬─────────────────────────────┤
│ Short-term     │ Conversation history        │
│ (LLM Context)  │ Last N messages             │
│                │ Sliding window              │
├────────────────┼─────────────────────────────┤
│ Long-term      │ PostgreSQL database         │
│ (DB)           │ Past interactions            │
│                │ User preferences             │
├────────────────┼─────────────────────────────┤
│ Episodic       │ Vector memory (Mem0)        │
│ (Vector)       │ Relevant past experiences   │
│                │ Task outcomes               │
├────────────────┼─────────────────────────────┤
│ Working        │ In-memory dict              │
│ (Current run)  │ Current task state          │
│                │ Intermediate results        │
└────────────────┴─────────────────────────────┘
```

### Scaling Agents

```
Problem: 100 users × 3 agents each = 300 concurrent agents

Solution:

1. Agent Pool
   ┌─────────────────────┐
   │   Agent Pool (max   │
   │   50 concurrent)    │
   ├─────────────────────┤
   │ Queue overflow →    │
   │ n8n workflow trigger│
   └─────────────────────┘

2. Rate Limiting per Agent
   → Each agent: max 5 tool calls per minute
   → Each user: max 3 concurrent agents
   → Global: max 50 concurrent agents

3. LLM Provider Rotation
   → 3 API keys rotating
   → Fallback provider (OpenAI → Anthropic → local)
   → Request queuing when all providers rate limited

4. Memory Isolation
   → Per-user namespace in vector DB
   → Per-agent session isolation
   → Memory TTL: 24h for short-term, 30d for long-term
```

### Day 2 Exercise

```
ApexERP Multi-Agent scaling design:

Current: 5 agents, 10 users
Scale: 50 agents, 500 users

Design:
1. Agent queue strategy
2. Memory isolation (tenant-level)
3. Rate limiting per tenant
4. Error recovery (what happens when OpenAI goes down?)
5. Cost per agent per month estimate
```

---

## Day 3 — Model Serving

### GPU vs CPU Inference

```
                    CPU                    GPU
              ┌──────────────┐     ┌──────────────┐
Latency       │  100-500ms   │     │   20-100ms   │
Throughput    │    10-50     │     │  100-1000+   │
              │  req/sec     │     │  req/sec     │
Cost          │     $        │     │    $$$       │
Memory        │   Shared     │     │  Dedicated   │
Model Size    │  <7B params  │     │  Any size    │

Use CPU when:
  → Small models (<3B params)
  → Batch inference not needed
  → Low throughput (<10 req/sec)
  → Cost sensitive

Use GPU when:
  → Large models (7B+ params)
  → High throughput needed
  → Batch inference
  → Low latency critical
```

### Batching Strategies

```python
"""
Smart batching for model inference
"""

class BatchProcessor:
    def __init__(self, model, max_batch_size=32, max_wait_ms=100):
        self.model = model
        self.max_batch_size = max_batch_size
        self.max_wait_ms = max_wait_ms
        self.queue = []
        self.queue_lock = asyncio.Lock()

    async def process(self, item: dict) -> dict:
        """Add item to batch, wait for result"""
        event = asyncio.Event()
        result_holder = {}

        async with self.queue_lock:
            self.queue.append((item, event, result_holder))
            if len(self.queue) >= self.max_batch_size:
                # Batch is full, process immediately
                asyncio.create_task(self._flush())

        # Wait for batch to be processed
        await event.wait()
        return result_holder["result"]

    async def _flush(self):
        """Process pending batch"""
        async with self.queue_lock:
            batch = self.queue[:self.max_batch_size]
            self.queue = self.queue[self.max_batch_size:]

        items = [b[0] for b in batch]

        # Batch inference
        results = self.model.batch_predict(items)

        for (_, event, holder), result in zip(batch, results):
            holder["result"] = result
            event.set()

    async def _scheduler(self):
        """Flush periodically (every max_wait_ms)"""
        while True:
            await asyncio.sleep(self.max_wait_ms / 1000)
            if self.queue:
                await self._flush()
```

### Quantization

```
Quantization = model weights ko smaller precision mein convert karna

FP32 → FP16 → INT8 → INT4

| Precision | Size Reduction | Speed | Quality Loss |
|-----------|---------------|-------|--------------|
| FP32      | 1x (baseline) | 1x    | None         |
| FP16      | 2x smaller    | 1.5x  | Negligible   |
| INT8      | 4x smaller    | 2x    | Minimal      |
| INT4      | 8x smaller    | 3x    | Some loss    |

Examples:
  Mistral 7B FP32 → 28 GB VRAM
  Mistral 7B INT8 → 7 GB VRAM
  Mistral 7B INT4 → 3.5 GB VRAM

Tools: llama.cpp (GGUF), ONNX Runtime, TensorRT
```

### ONNX Runtime

```python
"""
ONNX — cross-platform model serving
"""

import onnxruntime as ort

class ONNXModel:
    def __init__(self, model_path: str):
        # CPU EP
        if ort.get_device() == "CPU":
            self.session = ort.InferenceSession(
                model_path,
                providers=["CPUExecutionProvider"]
            )
        # GPU EP
        else:
            self.session = ort.InferenceSession(
                model_path,
                providers=["CUDAExecutionProvider"]
            )

    def predict(self, input_data: dict) -> dict:
        inputs = {
            k: v.numpy() if hasattr(v, 'numpy') else v
            for k, v in input_data.items()
        }
        outputs = self.session.run(None, inputs)
        return {"embeddings": outputs[0]}

# Convert models to ONNX:
# transformers.onnx → export HuggingFace models
# torch.onnx.export → export PyTorch models
```

### Day 3 Exercise

```
Your Document AI needs model serving for embeddings.

Current setup:
  - BAAI/bge-small-en-v1.5 (384 dims, ~33M params)
  - Running on CPU
  - 100 requests/day

Scale to:
  - 10K requests/day
  - Peak: 50 concurrent
  - <200ms latency

Questions:
1. GPU shift karna chahiye?
2. Batch size kya rakhoge?
3. Quantization lagaaoge (INT8)?
4. ONNX export karna?
5. Cost comparison (CPU vs GPU)?
```

---

## Day 4 — LLM API Architecture

### Architecture Design

```python
"""
Production LLM API Architecture
"""

from openai import AsyncOpenAI, APIError, RateLimitError
import asyncio
from typing import List, Optional
import time

class LLMProvider:
    """Base class for LLM providers"""

    def __init__(self, api_key: str, model: str, rpm: int = 500):
        self.client = AsyncOpenAI(api_key=api_key)
        self.model = model
        self.rpm = rpm  # requests per minute
        self.request_times = []

    async def complete(self, messages: List[dict]) -> str:
        # Rate limit check
        await self._wait_for_capacity()

        for attempt in range(3):
            try:
                response = await self.client.chat.completions.create(
                    model=self.model,
                    messages=messages,
                    timeout=30
                )
                self.request_times.append(time.time())
                return response.choices[0].message.content

            except RateLimitError:
                wait = 2 ** attempt + 1
                print(f"Rate limited. Waiting {wait}s...")
                await asyncio.sleep(wait)

            except APIError as e:
                if attempt == 2:
                    raise
                await asyncio.sleep(1)

        raise Exception("Max retries exceeded")

    async def _wait_for_capacity(self):
        now = time.time()
        self.request_times = [
            t for t in self.request_times
            if t > now - 60
        ]
        while len(self.request_times) >= self.rpm:
            await asyncio.sleep(1)
            self.request_times = [
                t for t in self.request_times
                if t > time.time() - 60
            ]


class LLMRouter:
    """
    Routes requests across multiple providers
    with fallback strategy
    """

    def __init__(self):
        self.providers = {
            "primary": LLMProvider(
                api_key="sk-openai-...",
                model="gpt-4o-mini",
                rpm=500
            ),
            "fallback": LLMProvider(
                api_key="anthropic-key",
                model="claude-3-haiku",
                rpm=1000
            ),
            "cheap": LLMProvider(
                api_key="sk-openai-...",
                model="gpt-4o-mini",
                rpm=500
            )
        }
        self.circuit_breaker = {}
        self.total_calls = 0
        self.failed_calls = 0

    async def route(self, messages: List[dict],
                    preferred: str = "primary") -> dict:
        """Route request with fallback"""

        providers = [preferred, "fallback", "cheap"]

        for provider_name in providers:
            provider = self.providers.get(provider_name)
            if not provider:
                continue

            # Check circuit breaker
            if self._is_circuit_open(provider_name):
                print(f"Circuit open for {provider_name}, skipping")
                continue

            try:
                self.total_calls += 1
                response = await provider.complete(messages)
                return {
                    "response": response,
                    "provider": provider_name,
                    "model": provider.model
                }

            except Exception as e:
                self.failed_calls += 1
                self._record_failure(provider_name)
                print(f"{provider_name} failed: {e}")
                continue

        return {"error": "All providers failed"}

    def _is_circuit_open(self, provider: str) -> bool:
        failures = self.circuit_breaker.get(provider, [])
        failures = [f for f in failures if f > time.time() - 300]
        return len(failures) > 5

    def _record_failure(self, provider: str):
        if provider not in self.circuit_breaker:
            self.circuit_breaker[provider] = []
        self.circuit_breaker[provider].append(time.time())
```

### Cost Management

```python
"""
LLM Cost Tracking and Budget Management
"""

class CostTracker:
    def __init__(self, daily_budget: float = 50.0):
        self.daily_budget = daily_budget
        self.daily_spend = 0.0
        self.reset_time = time.time() + 86400

        # Model costs (per 1M tokens)
        self.model_costs = {
            "gpt-4o": {"input": 2.50, "output": 10.00},
            "gpt-4o-mini": {"input": 0.15, "output": 0.60},
            "claude-3-haiku": {"input": 0.25, "output": 1.25},
            "claude-3-sonnet": {"input": 3.00, "output": 15.00},
        }

    def estimate_cost(self, model: str,
                      input_tokens: int,
                      output_tokens: int) -> float:
        costs = self.model_costs.get(model, {"input": 0, "output": 0})
        input_cost = (input_tokens / 1_000_000) * costs["input"]
        output_cost = (output_tokens / 1_000_000) * costs["output"]
        return input_cost + output_cost

    def can_afford(self, cost: float) -> bool:
        self._reset_daily_if_needed()
        return self.daily_spend + cost <= self.daily_budget

    def spend(self, cost: float):
        self.daily_spend += cost

    def _reset_daily_if_needed(self):
        if time.time() > self.reset_time:
            self.daily_spend = 0.0
            self.reset_time = time.time() + 86400
```

### Day 4 Exercise

```
ApexERP AI assistant design:

Users: 100 businesses × 50 employees = 5000 users
Each user: ~20 queries/day
Total: 100K queries/day

Average LLM usage:
  - Input: 500 tokens
  - Output: 200 tokens
  - Model: GPT-4o-mini ($0.15/$0.60 per 1M)

Questions:
1. Daily cost estimate?
2. Monthly cost?
3. Cache strategy to reduce cost (aim for 30% cache hit)?
4. Fallback provider strategy?
5. Daily budget kya rakhoge?
```

---

## Day 5 — Data Pipeline Design

### AI Data Pipeline

```
Source Systems → Ingestion → Processing → Storage → Consumption
```

```python
class DataPipeline:
    """
    End-to-end data pipeline for AI training/inference
    """

    def __init__(self, source, processor, sink):
        self.source = source
        self.processor = processor
        self.sink = sink
        self.queue = asyncio.Queue(maxsize=1000)

    async def ingest(self):
        """Continuously ingest from source"""
        async for record in self.source.stream():
            await self.queue.put(record)
            # Backpressure: queue full → source slows down

    async def process_batch(self, batch_size=64):
        """Process records in batches"""
        while True:
            batch = []
            for _ in range(batch_size):
                try:
                    record = await asyncio.wait_for(
                        self.queue.get(), timeout=1.0
                    )
                    batch.append(record)
                except asyncio.TimeoutError:
                    break

            if not batch:
                await asyncio.sleep(0.1)
                continue

            # Parallel processing
            results = await asyncio.gather(
                *[self.processor.process(r) for r in batch]
            )

            # Store results
            await self.sink.store(results)

    async def run(self):
        """Run pipeline with N workers"""
        ingest_task = asyncio.create_task(self.ingest())
        workers = [
            asyncio.create_task(self.process_batch())
            for _ in range(5)  # 5 parallel workers
        ]
        await asyncio.gather(ingest_task, *workers)
```

### Pipeline Patterns for AI

```
Batch Pipeline (for training data):
  Source → Validate → Transform → Aggregate → Store
  Example: Collecting chat logs for fine-tuning

Streaming Pipeline (for inference):
  Source → Filter → Enrich → Route → Store
  Example: Real-time agent execution traces

Lambda Architecture (batch + streaming):
  Batch Layer: Historical data processing
  Speed Layer: Real-time processing
  Serving Layer: Combined results

Kappa Architecture (streaming only):
  Everything is a stream
  No batch layer
  Replay from beginning for re-processing
```

### Day 5 Exercise

```
Purvanchal Flow Studio data pipeline:

Input: Lyrics text
Steps:
  1. ACE-Step music generation (2-5 min)
  2. YuE vocal generation (5-10 min)
  3. FFmpeg mix (1 min)
  4. Thumbnail generation (30 sec)
  5. YouTube/Instagram publish

Design a pipeline:
  1. Which pattern (batch/streaming/lambda)?
  2. How to handle long-running steps?
  3. Error recovery on step 2 failure?
  4. Queue types for each step?
  5. Scaling: 1 video → 100 videos/day?
```

---

## Day 6 — Case Study: Document Q&A for 10K Users

### Requirements

```
Goal: Design a document Q&A system (like Document AI)
Users: 10,000 daily active
Documents: 100,000 total, 1M+ pages
Queries: 50,000 per day (peak: 100 QPS)
Latency: <3 seconds (including LLM response)
Budget: $200/month
```

### Architecture

```
                                  ┌──────────────┐
User ──→ FastAPI ──→ Rate Limiter ──→ LLM Router
      ↑               │                │
      │          ┌────▼────┐     ┌─────▼──────┐
      │          │  Redis  │     │  Provider 1 │
      │          │  Cache  │     │  (GPT-4o)  │
      │          └────┬────┘     └─────┬──────┘
      │               │                │
      │     ┌─────────▼─────────┐     ┌▼──────────┐
      └─────┤  Vector DB Search  │     │ Provider 2│
            │  (Qdrant 2 nodes)  │     │ (Claude)  │
            └─────────┬─────────┘     └───────────┘
                      │
               ┌──────▼──────┐
               │  PostgreSQL  │
               │ (Chat history)│
               └─────────────┘
```

### Cost Breakdown

```
Category          | Monthly Cost
──────────────────┼─────────────
Vector DB (2 nodes)| $80 (self-hosted Hetzner)
PostgreSQL        | $15 (Hetzner)
Redis             | $20 (Hetzner)
LLM API (GPT-4o)  | $120
Total             | $235

Optimization:
  → Embedding cache: -$20 (30% fewer embedding calls)
  → Response cache: -$30 (25% fewer LLM calls)
  → GPT-4o-mini for simple queries: -$30
  → Batch processing: -$10
Optimized Total: $145
```

### Scaling Plan

```
Phase 1 (1-100 users): Single server + SQLite + ChromaDB
Phase 2 (100-1000 users): FastAPI + PostgreSQL + Qdrant single
Phase 3 (1000-10000 users): Load balancer + Qdrant cluster + Redis cluster
Phase 4 (10K+): Kubernetes + auto-scaling + CDN for docs
```

### Day 6 Exercise

```
Complete the design with:
1. Database schema (tables needed)
2. API endpoints
3. Caching strategy
4. Rate limiting rules
5. Monitoring metrics
6. Deployment diagram
```

---

## Day 7 — Case Study: Multi-Agent ERP System

### Requirements

```
Goal: Design ApexERP multi-agent system
Business: 100 SMBs in Bihar/UP
Features:
  - Inventory management agent
  - Order processing agent
  - Customer support agent
  - Sales analytics agent
  - WhatsApp integration agent
Users: 500 concurrent (5 per business)
```

### Architecture

```
                        ┌─────────────┐
WhatsApp User ──→       │  API Gateway│
               │        └──────┬──────┘
               │               │
          ┌────▼───────────────▼───────┐
          │     Agent Orchestrator     │
          │     (LangGraph StateGraph)  │
          └────┬──────┬──────┬────────┘
               │      │      │
     ┌─────────▼┐ ┌──▼───┐ ┌▼─────────┐
     │Inventory │ │Order │ │Customer  │
     │ Agent    │ │Agent │ │Support   │
     └──────────┘ └──────┘ └──────────┘
          │           │          │
          └───────────┼──────────┘
                      │
               ┌──────▼──────┐
               │  PostgreSQL  │
               │  (ERP Data)  │
               └──────┬──────┘
                      │
               ┌──────▼──────┐
               │  Vector DB  │
               │ (Knowledge) │
               └─────────────┘
```

### Communication Pattern

```
Agent → Agent Communication:

1. Direct (within same process)
   → Function call
   → Fast: 1-5ms
   → Tight coupling

2. Queue-based (between services)
   → Redis/RabbitMQ
   → Medium: 10-100ms
   → Loose coupling

3. LLM-mediated (via another LLM call)
   → Agent sends request, other agent processes
   → Slow: 1-5s
   → Most flexible

ApexERP uses:
  - Direct for simple tool calls
  - Queue for long-running tasks
  - LLM-mediated for complex multi-step workflows
```

### Error Recovery Design

```
Error Scenarios and Recovery:

1. LLM Provider Down
   → Switch to fallback provider
   → Queue requests for retry
   → Notify admin

2. Vector DB Unreachable
   → Use BM25 keyword search fallback
   → Return "system busy" if both fail

3. WhatsApp API Rate Limited
   → Queue messages
   → Exponential backoff
   → Batch send when window resets

4. Agent Timeout (30s)
   → Kill agent process
   → Notify orchestrator
   → Retry with simpler approach
   → Escalate to human if 2 retries fail

5. Data Consistency Error
   → Log error + timestamp
   → Compensation transaction
   → Manual review queue
```

### Day 7 Exercise

```
Final design: Combine everything

Design a complete system:
"A multi-tenant AI ERP serving 1000 businesses in India"

Include:
1. System architecture diagram
2. Database schema
3. Agent architecture
4. Queue strategy
5. Caching strategy
6. Cost estimation
7. Scaling plan (Phase 1 → Phase 3)
8. Error recovery plan
9. Monitoring strategy
10. Security considerations
```

---

## Week 2 Checklist

- [ ] RAG system design ready (ingestion + query pipeline)
- [ ] Agent architecture designed with error recovery
- [ ] Model serving comparison (GPU vs CPU, quantization)
- [ ] LLM API architecture with rate limiting + fallbacks
- [ ] Data pipeline design
- [ ] Document Q&A for 10K users designed
- [ ] Multi-agent ERP system designed
- [ ] All designs documented in GitHub
