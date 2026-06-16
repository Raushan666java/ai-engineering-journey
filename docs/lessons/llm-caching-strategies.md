# Production LLM Caching Strategies

> Every millisecond of latency costs money. Every cache miss costs both latency and tokens. Get the strategy right and your p95 drops 10x without degrading quality.

## Learning Objectives

- Distinguish between semantic caching, prompt caching, and KV-cache reuse — and know when each applies
- Implement a semantic cache using embeddings + vector similarity with configurable distance thresholds
- Design a multi-tier cache hierarchy (L1 memory → L2 Redis → L3 disk) with TTL and eviction policies
- Compute cost-latency tradeoffs and estimate break-even points for cache investment
- Handle cache invalidation for non-deterministic LLM outputs and user-specific contexts

## Concept Overview

LLM inference is expensive in two currencies: **time** and **tokens**. A single 70B model call at 2K output tokens costs roughly $0.002 in compute and takes 500-3000 ms depending on load. For any application serving thousands of requests, caching is not an optimization — it is a prerequisite for viability.

Three fundamentally different caching mechanisms exist, and confusing them is the most common mistake:

**Prompt caching** operates at the API layer. Services like Anthropic's prompt caching and OpenAI's context caching let you prefix repeated system prompts or large context blocks with a cache-breakpoint marker. The API provider stores the processed prefix KV state and reuses it when the same prefix appears in subsequent calls. This is transparent to your code — you just add a header or parameter — and typically gives 50-80% first-token latency reduction on long contexts. The catch: the cache has a TTL (usually 5-10 minutes of inactivity) and only matches on exact token-by-token prefix equality.

**Semantic caching** operates at the application layer. Instead of matching exact strings, you embed the incoming query into a vector and search for similar previous queries in a vector store. If a close match exists above a similarity threshold, you return the cached response directly — no LLM call at all. This is far more powerful than exact-match caching because real users rarely ask the same question verbatim. The tradeoff is complexity: you need an embedding model, a vector index, a similarity threshold tuned per use case, and a cache-invalidation strategy for non-deterministic outputs.

**KV-cache reuse** operates at the inference engine layer. Systems like vLLM and SGLang implement paged attention with automatic prefix caching: if two requests share a common prefix (same system prompt, same document context), the attention key-value pairs for that prefix are computed once and shared across requests. This is invisible to the user and handled entirely by the inference server, but it only helps when requests share token-identical prefixes.

A production system should use all three in a layered architecture. Prompt caching handles the warm-start case for long, repeated prefixes. Semantic caching eliminates redundant LLM calls for semantically similar questions. KV-cache reuse optimizes the inference engine's internal memory for in-flight requests sharing context.

## Deep Dive

### The Cache Hierarchy

Consider a customer-support RAG chatbot. Every request begins with a 2K-token system prompt, retrieves ~3K tokens of context, and generates a 500-token answer. Without caching, each request costs ~5.5K tokens of input processing plus 500 tokens of generation.

**Layer 1: API-level prompt caching.** The system prompt and RAG instruction template are identical across every request. By marking them with a cache-breakpoint, the provider stores the precomputed KV state for those 2K tokens. Subsequent requests skip recomputation for the prefix, cutting input-processing time by roughly half — from ~3 seconds to ~1.5 seconds for first-token latency.

**Layer 2: Semantic cache.** When a user asks "What's your refund policy?" and another asks "How do I get my money back?", the semantic cache recognizes a 98% cosine similarity and returns the cached response. The second user gets an answer in ~50 ms (the time for one embedding lookup + vector search) instead of ~4 seconds (full LLM generation). Cache hit rates for FAQ-heavy workloads typically reach 30-60%.

**Layer 3: Inference-level KV-cache reuse.** When two requests arrive in close succession with overlapping retrieved documents, the inference engine's RadixAttention tree shares the KV entries for the overlapping chunks. This doesn't reduce latency for the first user, but it improves throughput — the engine can batch more requests into the same GPU memory.

### Cost-Latency Break-Even

A semantic cache introduces its own costs: embedding model inference (~5 ms per query), vector index lookup (~2 ms for HNSW with 100K entries), and the storage cost for cached response vectors. The break-even point is:

```
cache_overhead = t_embed + t_search
cache_savings = p_hit * (t_llm - cache_overhead)

net_gain_per_request = p_hit * t_llm - t_embed - t_search
```

For a typical setup with t_embed = 5 ms, t_search = 2 ms, t_llm = 3000 ms, and p_hit = 0.4:
- net_gain = 0.4 * 3000 - 5 - 2 = 1193 ms saved per request on average
- The cache pays for itself after roughly 3 misses per hit (the overhead of embedding + searching one request is 7 ms; the saving on one hit is 3000 ms)

The more expensive the LLM call, the lower the break-even hit rate. For cheap small-model calls (50 ms, $0.0001), only very high hit rates (>30%) justify the cache. For expensive large-model calls (3000 ms, $0.01), even a 5% hit rate can be worth it.

### Cache Invalidation

LLM outputs are non-deterministic by nature. A cached response may become stale because:
- The underlying data changed (prices, policies, inventory)
- The model was updated or swapped
- The user expects different outputs for the same query in different contexts

Three invalidation strategies in order of sophistication:

**TTL-based:** Every cached entry expires after a fixed time window (5 minutes for volatile data, 24 hours for static FAQs). Simple and safe but wasteful — valid entries get evicted too early.

**Write-through update:** When the source data changes, explicitly invalidate all cached entries that reference that data. Requires maintaining a mapping from cache keys to source document IDs. More complex but preserves cache utility during stable periods.

**Confidence-weighted eviction:** Each cached entry stores a confidence score alongside the response. When the cache returns a hit, it also returns the confidence. The application can re-query the LLM if confidence is below a threshold, then update the cache with the new response. This graceful degradation is ideal for production but adds complexity to the cache interface.

## Code Example

```python
import hashlib
import time
import json
from dataclasses import dataclass
from typing import Optional
import numpy as np

# ---------------------------------------------------------------------------
# Embedding client stub — replace with your provider's SDK
# ---------------------------------------------------------------------------
class EmbeddingClient:
    def embed(self, text: str) -> list[float]:
        """Return a 384-dim embedding vector. Stub for demonstration."""
        np.random.seed(hash(text) % (2**31))
        return np.random.randn(384).tolist()

# ---------------------------------------------------------------------------
# Simple vector store using cosine similarity
# ---------------------------------------------------------------------------
@dataclass
class CacheEntry:
    query: str
    response: str
    embedding: list[float]
    timestamp: float
    ttl_seconds: float = 300.0

    def is_expired(self) -> bool:
        return (time.time() - self.timestamp) > self.ttl_seconds

class SemanticCache:
    def __init__(self, embedder: EmbeddingClient, threshold: float = 0.92):
        self.embedder = embedder
        self.threshold = threshold
        self.entries: list[CacheEntry] = []
        self.hits = 0
        self.misses = 0

    def search(self, query: str) -> Optional[str]:
        q_vec = np.array(self.embedder.embed(query))
        best_score = -1.0
        best_idx = -1

        for i, entry in enumerate(self.entries):
            if entry.is_expired():
                continue
            e_vec = np.array(entry.embedding)
            score = np.dot(q_vec, e_vec) / (
                np.linalg.norm(q_vec) * np.linalg.norm(e_vec)
            )
            if score > best_score:
                best_score = score
                best_idx = i

        if best_score >= self.threshold:
            self.hits += 1
            return self.entries[best_idx].response

        self.misses += 1
        return None

    def store(self, query: str, response: str, ttl: float = 300.0):
        embedding = self.embedder.embed(query)
        self.entries.append(CacheEntry(
            query=query,
            response=response,
            embedding=embedding,
            timestamp=time.time(),
            ttl_seconds=ttl,
        ))

        # Simple LRU-style eviction when cache grows too large
        if len(self.entries) > 10_000:
            self.entries.sort(key=lambda e: e.timestamp)
            self.entries = self.entries[-5_000:]

    def stats(self) -> dict:
        total = self.hits + self.misses
        return {
            "hits": self.hits,
            "misses": self.misses,
            "hit_rate": round(self.hits / total, 3) if total else 0.0,
            "size": len(self.entries),
        }

# ---------------------------------------------------------------------------
# Multi-tier cache coordinator
# ---------------------------------------------------------------------------
class TieredCache:
    """L1: in-process dict (fast, small). L2: semantic cache (medium).
    L3: pass-through to LLM (slow, expensive)."""

    def __init__(self, embedder: EmbeddingClient, semantic_threshold: float = 0.92):
        self.l1: dict[str, str] = {}     # exact-match, in-process
        self.l2 = SemanticCache(embedder, threshold=semantic_threshold)

    def get(self, query: str) -> Optional[str]:
        # L1: exact match
        key = hashlib.sha256(query.encode()).hexdigest()
        cached = self.l1.get(key)
        if cached:
            return cached

        # L2: semantic match
        cached = self.l2.search(query)
        if cached:
            self.l1[key] = cached  # warm L1
            return cached

        return None

    def set(self, query: str, response: str, ttl: float = 300.0):
        key = hashlib.sha256(query.encode()).hexdigest()
        self.l1[key] = response
        self.l2.store(query, response, ttl=ttl)

# ---------------------------------------------------------------------------
# Demo
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    embedder = EmbeddingClient()
    cache = TieredCache(embedder, semantic_threshold=0.85)

    # Simulate a sequence of user queries
    queries = [
        "What is your return policy?",
        "How do I return an item?",
        "Return policy for electronics?",
        "What's your return window?",
        "Can you explain the return process?",
    ]

    # First pass: all miss, populate cache
    for q in queries:
        result = cache.get(q)
        if result:
            print(f"[HIT]  {q[:40]:40s} -> {result[:60]}")
        else:
            fake_llm = f"Our return policy allows returns within 30 days of purchase."
            cache.set(q, fake_llm)
            print(f"[MISS] {q[:40]:40s} -> (cached)")

    print(f"\nCache stats: {cache.l2.stats()}")

    # Second pass: semantic hits
    similar = ["Tell me about returns", "How can I send something back?"]
    for q in similar:
        result = cache.get(q)
        status = "HIT" if result else "MISS"
        print(f"[{status}] {q[:40]:40s}")
```

This implementation demonstrates the core concepts but strips production concerns: concurrent access (use `asyncio.Lock`), persistent storage (back with Redis), and embedding model batching (queue multiple embed requests).

## Key Takeaways

- Three distinct caching mechanisms exist — prompt caching (API-level), semantic caching (application-level), and KV-cache reuse (engine-level) — and a production system should use all three
- Semantic caching delivers the most dramatic latency reduction (50 ms vs 3000 ms on hit) but requires careful threshold tuning: too low returns wrong answers, too high wastes cache opportunity
- The cost-latency break-even point favors caching for expensive model calls and long contexts; cheap small-model calls rarely justify the infrastructure
- Cache invalidation is the hard part: TTL-based eviction is simplest, write-through invalidation is most accurate, and confidence-weighted eviction offers the best production compromise
- L1 exact-match caching is trivial to implement and catches the 10-20% of traffic that repeats verbatim — always include it as the first line of defense

## Exercises

1. **Conceptual:** Given a chat application with 100K daily requests, average LLM latency of 2 seconds, and embedding latency of 10 ms, what hit rate is required for the semantic cache to break even? Assume vector search takes 3 ms and cache storage costs are negligible.

2. **Implementation:** Extend the `TieredCache` class to support TTL-based invalidation with separate TTLs for L1 (short) and L2 (long). Add a method to manually invalidate entries by a content tag (e.g., `invalidate_by_tag("pricing_update")`).

3. **Research:** Compare the cache hit rates for three different embedding models on a dataset of 10K customer support queries: a small model (all-MiniLM-L6-v2, 384-dim), a medium model (BGE-base-en-v1.5, 768-dim), and a large model (OpenAI text-embedding-3-large, 3072-dim). What threshold does each require to maintain 95% precision?

## Next Steps

- Study **vLLM's automatic prefix caching** in Phase 17, lesson 04 (vLLM Serving Internals) for a deep dive into engine-level KV-cache reuse
- Explore **prompt caching API headers** in Phase 11, lesson 15 (Prompt Caching & Context Caching)
- Build a production-grade semantic cache with Redis and Qdrant in Phase 19 capstone lesson 08 (Production RAG Chatbot)
