# Chapter 9 — AI System Design & Architecture

**Duration:** 2 weeks, ~25 hours
**Goal:** Architect production AI systems — RAG pipelines, agent infrastructures, and cost-optimized serving stacks. Make design decisions you can defend in a system-design interview.

---

## Topic Table

| # | Subtopic | Hours | Done checkpoint |
|---|----------|-------|-----------------|
| 1 | RAG system architecture patterns | 2 | Can sketch naive RAG, agentic RAG, and multi-hop RAG from memory |
| 2 | Caching strategies for AI | 2.5 | Design a 3-tier cache (prompt cache, semantic cache, KV cache) with hit-rate targets |
| 3 | Cost architecture & optimization | 2 | Build a per-request cost model and identify the top-3 cost drivers in a RAG pipeline |
| 4 | Model tiering & routing | 2 | Design a router that sends simple queries to cheap models, complex ones to expensive models |
| 5 | Latency budgets & profiling | 2 | Profile a RAG request end-to-end and identify the bottleneck |
| 6 | Scalability patterns | 2.5 | Design horizontal scaling for a RAG API with connection pooling and read replicas |
| 7 | Multi-region deployment | 2 | Design a multi-region vector DB topology with active-active vs active-passive tradeoffs |
| 8 | Agent infrastructure architecture | 2.5 | Design the infra for a multi-agent system: message bus, state store, tool registry, gateway |
| 9 | Async processing pipelines | 2 | Design an ingestion pipeline that handles 10K docs/day with chunking, embedding, indexing |
| 10 | Data flow & backpressure | 1.5 | Design a rate-limited ingestion pipeline with backpressure signaling |
| 11 | API gateway patterns for AI | 2 | Design an AI gateway with rate limiting, auth, cost tracking, and model routing |
| 12 | System design interview prep | 2 | Mock-design "Design a RAG system for a customer support chatbot" in 45 minutes |

---

## 9.1 RAG System Architecture Patterns

### Pattern 1 — Naive RAG (Basic)

<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/pattern-1-naive-rag-basic-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/pattern-1-naive-rag-basic-handwritten.svg" alt="Handwritten: Pattern 1 — Naive RAG (Basic)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/pattern-1-naive-rag-basic-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/pattern-1-naive-rag-basic-diagram.svg" alt="Diagram: Pattern 1 — Naive RAG (Basic)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/pattern-1-naive-rag-basic-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/pattern-1-naive-rag-basic-sticky.svg" alt="Sticky Note: Pattern 1 — Naive RAG (Basic)" width="30%">
</a>


```
User Query ? Embed ? Vector Search ? Top-K Chunks ? LLM ? Response
```

Simple, but every query pays the full cost. No query rewriting, no re-ranking, no context refinement.

```python
# Naive RAG — one-shot retrieval + generation
from openai import OpenAI
import chromadb

client = OpenAI()
chroma = chromadb.HttpClient(host="localhost", port=8000)
collection = chroma.get_collection("docs")

def naive_rag(query: str) -> str:
    # Embed query
    response = client.embeddings.create(
        input=query,
        model="text-embedding-3-small"
    )
    query_vector = response.data[0].embedding

    # Retrieve
    results = collection.query(
        query_embeddings=[query_vector],
        n_results=5
    )
    context = "\n\n".join(results["documents"][0])

    # Generate
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Answer using the context provided."},
            {"role": "user", "content": f"Context:\n{context}\n\nQuery: {query}"}
        ]
    )
    return completion.choices[0].message.content
```

**When to use:** Prototypes, internal tools, low QPS (< 10 req/min).

### Pattern 2 — Agentic RAG (Advanced)

<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/pattern-2-agentic-rag-advanced-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/pattern-2-agentic-rag-advanced-handwritten.svg" alt="Handwritten: Pattern 2 — Agentic RAG (Advanced)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/pattern-2-agentic-rag-advanced-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/pattern-2-agentic-rag-advanced-diagram.svg" alt="Diagram: Pattern 2 — Agentic RAG (Advanced)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/pattern-2-agentic-rag-advanced-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/pattern-2-agentic-rag-advanced-sticky.svg" alt="Sticky Note: Pattern 2 — Agentic RAG (Advanced)" width="30%">
</a>


```
User Query ? Query Rewriter ? Multi-Query Expansion ? 
    Parallel Vector Searches ? Re-Ranker ? 
    Context Builder ? LLM ? Response Validation ? 
    Hallucination Check ? Response
```

Each step is a lightweight LLM call or a deterministic function. More latency, dramatically better quality.

```python
# Agentic RAG with query rewriting + re-ranking + validation
from typing import Literal
from pydantic import BaseModel
from openai import OpenAI
import json

client = OpenAI()

class QueryRewrites(BaseModel):
    queries: list[str]
    reasoning: str

class ValidationResult(BaseModel):
    is_hallucinated: bool
    hallucinated_claims: list[str]
    supported_claims: list[str]

def rewrite_query(original: str) -> list[str]:
    """Generate multiple search queries from one user query."""
    completion = client.beta.chat.completions.parse(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Generate 3 search queries that explore different aspects of the user's question."},
            {"role": "user", "content": original}
        ],
        response_format=QueryRewrites
    )
    result = completion.choices[0].message.parsed
    return result.queries

def cross_encoder_rerank(query: str, documents: list[str], top_k: int = 5) -> list[tuple[str, float]]:
    """Score each (query, doc) pair with a cross-encoder model."""
    pairs = [[query, doc[:500]] for doc in documents]
    # Using a local cross-encoder model (Cohere or sentence-transformers)
    # scores = cross_encoder.predict(pairs)
    # Placeholder for local re-ranker
    scored = [(doc, 0.95 - i * 0.05) for i, doc in enumerate(documents)]
    scored.sort(key=lambda x: x[1], reverse=True)
    return scored[:top_k]

def validate_response(query: str, context: str, response: str) -> ValidationResult:
    """Check if the response hallucinates claims not in context."""
    completion = client.beta.chat.completions.parse(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Compare the response against the context. Identify any claims in the response that are not supported by the context."},
            {"role": "user", "content": f"Query: {query}\n\nContext: {context}\n\nResponse: {response}"}
        ],
        response_format=ValidationResult
    )
    return completion.choices[0].message.parsed

def agentic_rag(query: str) -> str:
    """Full agentic RAG pipeline with quality checks."""
    # Step 1: Query rewriting
    queries = rewrite_query(query)

    # Step 2: Parallel retrieval
    all_docs = []
    for q in queries:
        q_v = client.embeddings.create(input=q, model="text-embedding-3-small").data[0].embedding
        results = chroma_collection.query(query_embeddings=[q_v], n_results=5)
        all_docs.extend(results["documents"][0])

    # Step 3: Re-rank
    reranked = cross_encoder_rerank(query, all_docs, top_k=5)
    context = "\n\n".join([doc for doc, score in reranked])

    # Step 4: Generate
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Answer using only the context. Cite sources inline as [1], [2], etc."},
            {"role": "user", "content": f"Context:\n{context}\n\nQuery: {query}"}
        ]
    ).choices[0].message.content

    # Step 5: Validate
    validation = validate_response(query, context, response)
    if validation.is_hallucinated:
        return response + "\n\n?? Note: Some claims could not be verified against the provided context."

    return response
```

### Pattern 3 — Multi-Hop RAG

<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/pattern-3-multi-hop-rag-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/pattern-3-multi-hop-rag-handwritten.svg" alt="Handwritten: Pattern 3 — Multi-Hop RAG" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/pattern-3-multi-hop-rag-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/pattern-3-multi-hop-rag-diagram.svg" alt="Diagram: Pattern 3 — Multi-Hop RAG" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/pattern-3-multi-hop-rag-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/pattern-3-multi-hop-rag-sticky.svg" alt="Sticky Note: Pattern 3 — Multi-Hop RAG" width="30%">
</a>


For questions that require synthesizing information from multiple documents where no single chunk contains the answer.

```
Query ? Extract entities ? Find related chunks ? 
    First-hop retrieval ? Extract new entities ? 
    Second-hop retrieval ? Cross-document synthesis ? 
    LLM ? Response
```

```python
def multi_hop_rag(query: str) -> str:
    """Two-hop RAG for questions requiring cross-document synthesis."""
    # Hop 1: Find initial documents
    q_v = client.embeddings.create(input=query, model="text-embedding-3-small").data[0].embedding
    hop1 = chroma_collection.query(query_embeddings=[q_v], n_results=5)

    # Extract entities from Hop 1 results
    entity_extraction = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Extract key entities (names, dates, concepts, IDs) from the retrieved documents that might help find more relevant information."},
            {"role": "user", "content": "\n\n".join(hop1["documents"][0])}
        ]
    )
    entities = entity_extraction.choices[0].message.content

    # Hop 2: Search using entities
    e_v = client.embeddings.create(input=entities, model="text-embedding-3-small").data[0].embedding
    hop2 = chroma_collection.query(query_embeddings=[e_v], n_results=5)

    # Merge contexts
    combined = list(set(hop1["documents"][0] + hop2["documents"][0]))
    context = "\n\n".join(combined)

    return client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Synthesize information from multiple documents to answer the query comprehensively."},
            {"role": "user", "content": f"Context:\n{context}\n\nQuery: {query}"}
        ]
    ).choices[0].message.content
```

---

## 9.2 Caching Strategies for AI

### Three Layers of AI Cache

<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/three-layers-of-ai-cache-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/three-layers-of-ai-cache-handwritten.svg" alt="Handwritten: Three Layers of AI Cache" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/three-layers-of-ai-cache-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/three-layers-of-ai-cache-diagram.svg" alt="Diagram: Three Layers of AI Cache" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/three-layers-of-ai-cache-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/three-layers-of-ai-cache-sticky.svg" alt="Sticky Note: Three Layers of AI Cache" width="30%">
</a>


```
+----------------------------+
¦  L1: Prompt Cache (in-memory) ¦ ? Exact query match, TTL seconds
+----------------------------¦
¦  L2: Semantic Cache (vector) ¦ ? Similar query match, cosine > 0.95
+----------------------------¦
¦  L3: KV Cache (model-level)  ¦ ? Reused across turns in same session
+----------------------------+
```

### L1: Prompt Cache (Exact Match)

<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/l1-prompt-cache-exact-match-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/l1-prompt-cache-exact-match-handwritten.svg" alt="Handwritten: L1: Prompt Cache (Exact Match)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/l1-prompt-cache-exact-match-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/l1-prompt-cache-exact-match-diagram.svg" alt="Diagram: L1: Prompt Cache (Exact Match)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/l1-prompt-cache-exact-match-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/l1-prompt-cache-exact-match-sticky.svg" alt="Sticky Note: L1: Prompt Cache (Exact Match)" width="30%">
</a>


```python
import hashlib
import json
import time
from collections import OrderedDict

class PromptCache:
    """Simple TTL-based LRU cache for exact query matches."""

    def __init__(self, capacity: int = 1000, ttl_seconds: int = 300):
        self.cache: OrderedDict[str, dict] = OrderedDict()
        self.capacity = capacity
        self.ttl = ttl_seconds

    def _make_key(self, query: str, model: str, system_prompt: str) -> str:
        raw = f"{query}||{model}||{system_prompt}"
        return hashlib.sha256(raw.encode()).hexdigest()

    def get(self, query: str, model: str, system_prompt: str) -> str | None:
        key = self._make_key(query, model, system_prompt)
        if key in self.cache:
            entry = self.cache[key]
            if time.time() - entry["timestamp"] < self.ttl:
                self.cache.move_to_end(key)
                return entry["response"]
            del self.cache[key]
        return None

    def set(self, query: str, model: str, system_prompt: str, response: str):
        key = self._make_key(query, model, system_prompt)
        if len(self.cache) >= self.capacity:
            self.cache.popitem(last=False)
        self.cache[key] = {"response": response, "timestamp": time.time()}

# Usage
prompt_cache = PromptCache(capacity=5000, ttl_seconds=600)

def cached_completion(query: str, system_prompt: str = "You are a helpful assistant.") -> str:
    cached = prompt_cache.get(query, "gpt-4o-mini", system_prompt)
    if cached:
        return cached

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": query}
        ]
    ).choices[0].message.content

    prompt_cache.set(query, "gpt-4o-mini", system_prompt, response)
    return response
```

### L2: Semantic Cache (Similarity Match)

<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/l2-semantic-cache-similarity-match-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/l2-semantic-cache-similarity-match-handwritten.svg" alt="Handwritten: L2: Semantic Cache (Similarity Match)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/l2-semantic-cache-similarity-match-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/l2-semantic-cache-similarity-match-diagram.svg" alt="Diagram: L2: Semantic Cache (Similarity Match)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/l2-semantic-cache-similarity-match-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/l2-semantic-cache-similarity-match-sticky.svg" alt="Sticky Note: L2: Semantic Cache (Similarity Match)" width="30%">
</a>


```python
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

class SemanticCache:
    """Cache that returns a hit when a new query is semantically similar to a cached one."""

    def __init__(self, similarity_threshold: float = 0.95, max_entries: int = 500):
        self.entries: list[dict] = []
        self.threshold = similarity_threshold
        self.max_entries = max_entries

    def get(self, query_vector: list[float]) -> str | None:
        if not self.entries:
            return None

        vectors = np.array([e["vector"] for e in self.entries])
        query_vec = np.array(query_vector).reshape(1, -1)
        similarities = cosine_similarity(query_vec, vectors)[0]
        best_idx = np.argmax(similarities)

        if similarities[best_idx] >= self.threshold:
            return self.entries[best_idx]["response"]
        return None

    def set(self, query_vector: list[float], query: str, response: str):
        if len(self.entries) >= self.max_entries:
            self.entries.pop(0)
        self.entries.append({
            "query": query,
            "vector": query_vector,
            "response": response,
            "timestamp": time.time()
        })

# Usage
semantic_cache = SemanticCache(similarity_threshold=0.92)

def semantic_cached_rag(query: str) -> str:
    q_vec = client.embeddings.create(
        input=query, model="text-embedding-3-small"
    ).data[0].embedding

    cached = semantic_cache.get(q_vec)
    if cached:
        return cached

    response = naive_rag(query)
    semantic_cache.set(q_vec, query, response)
    return response
```

---

## 9.3 Cost Architecture & Optimization

### Per-Request Cost Model

<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/per-request-cost-model-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/per-request-cost-model-handwritten.svg" alt="Handwritten: Per-Request Cost Model" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/per-request-cost-model-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/per-request-cost-model-diagram.svg" alt="Diagram: Per-Request Cost Model" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/per-request-cost-model-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/per-request-cost-model-sticky.svg" alt="Sticky Note: Per-Request Cost Model" width="30%">
</a>


```python
from dataclasses import dataclass

@dataclass
class RequestCost:
    embedding_model: str
    embedding_tokens: int
    embedding_cost: float
    llm_model: str
    prompt_tokens: int
    completion_tokens: int
    llm_cost: float
    vector_search_time_ms: float
    total_cost: float
    total_latency_ms: float

# Pricing (per 1M tokens, USD)
PRICING = {
    "text-embedding-3-small": {"input": 0.02},
    "text-embedding-3-large": {"input": 0.13},
    "gpt-4o-mini": {"input": 0.15, "output": 0.60},
    "gpt-4o": {"input": 2.50, "output": 10.00},
    "claude-3-haiku": {"input": 0.25, "output": 1.25},
    "claude-3-sonnet": {"input": 3.00, "output": 15.00},
}

def estimate_request_cost(
    query: str,
    context_chunks: int,
    chunk_size: int,
    embedding_model: str = "text-embedding-3-small",
    llm_model: str = "gpt-4o-mini",
    expected_output_tokens: int = 300,
) -> RequestCost:
    query_tokens = len(query) // 4  # Rough estimate
    context_tokens = context_chunks * chunk_size
    prompt_tokens = query_tokens + context_tokens + 50  # System prompt overhead

    embed_cost = (query_tokens / 1_000_000) * PRICING[embedding_model]["input"]
    llm_input_cost = (prompt_tokens / 1_000_000) * PRICING[llm_model]["input"]
    llm_output_cost = (expected_output_tokens / 1_000_000) * PRICING[llm_model]["output"]

    return RequestCost(
        embedding_model=embedding_model,
        embedding_tokens=query_tokens,
        embedding_cost=round(embed_cost, 6),
        llm_model=llm_model,
        prompt_tokens=prompt_tokens,
        completion_tokens=expected_output_tokens,
        llm_cost=round(llm_input_cost + llm_output_cost, 6),
        vector_search_time_ms=50.0,
        total_cost=round(embed_cost + llm_input_cost + llm_output_cost, 6),
        total_latency_ms=800.0,
    )

# Usage
cost = estimate_request_cost(
    query="What are the lease terms for commercial properties in Dubai Marina?",
    context_chunks=5,
    chunk_size=800,
    llm_model="gpt-4o-mini"
)
print(f"Embedding cost: ${cost.embedding_cost}")
print(f"LLM cost: ${cost.llm_cost}")
print(f"Total cost: ${cost.total_cost}")
print(f"Estimated daily cost (10K req): ${cost.total_cost * 10000:.2f}")
```

### Cost Optimization Strategies

<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/cost-optimization-strategies-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/cost-optimization-strategies-handwritten.svg" alt="Handwritten: Cost Optimization Strategies" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/cost-optimization-strategies-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/cost-optimization-strategies-diagram.svg" alt="Diagram: Cost Optimization Strategies" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/cost-optimization-strategies-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/cost-optimization-strategies-sticky.svg" alt="Sticky Note: Cost Optimization Strategies" width="30%">
</a>


| Strategy | Savings | Tradeoff |
|----------|---------|----------|
| Model tiering (simple queries ? cheap model) | 40-70% | Complex queries may degrade if misrouted |
| Prompt caching (exact match) | 30-50% hit rate on repeated queries | Extra memory, cache invalidation |
| Semantic caching (similar match) | 15-30% additional hit rate | Compute for similarity search, lower precision |
| KV cache reuse across turns | 50-80% latency reduction per turn | State management complexity |
| Prompt compression | 20-40% token reduction | Potential quality loss on compressed prompts |
| Batch processing | 50% cost reduction | Postponed responses, not real-time |

### Model Tiering Router

<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/model-tiering-router-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/model-tiering-router-handwritten.svg" alt="Handwritten: Model Tiering Router" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/model-tiering-router-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/model-tiering-router-diagram.svg" alt="Diagram: Model Tiering Router" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/model-tiering-router-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/model-tiering-router-sticky.svg" alt="Sticky Note: Model Tiering Router" width="30%">
</a>


```python
from pydantic import BaseModel
from typing import Literal

class RouteDecision(BaseModel):
    model: Literal["gpt-4o-mini", "gpt-4o", "claude-3-haiku", "claude-3-sonnet"]
    reasoning: str
    estimated_difficulty: Literal["simple", "medium", "complex"]

def route_query_to_model(query: str) -> RouteDecision:
    """Route simple queries to cheap models, complex to expensive."""
    completion = client.beta.chat.completions.parse(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Classify the user query by complexity:\n"
             "- simple: factual, single-sentence, can be answered directly\n"
             "- medium: requires reasoning or multiple steps\n"
             "- complex: requires deep reasoning, code generation, or creative work"},
            {"role": "user", "content": query}
        ],
        response_format=RouteDecision
    )
    return completion.choices[0].message.parsed

# Router implementation
def query_with_routing(query: str) -> str:
    decision = route_query_to_model(query)

    model_map = {
        "simple": "gpt-4o-mini",
        "medium": "gpt-4o-mini",
        "complex": "gpt-4o",
    }
    selected = model_map[decision.estimated_difficulty]

    return client.chat.completions.create(
        model=selected,
        messages=[{"role": "user", "content": query}]
    ).choices[0].message.content
```

---

## 9.4 Latency Budgets & Profiling

### End-to-End Latency Breakdown (RAG)

<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/end-to-end-latency-breakdown-rag-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/end-to-end-latency-breakdown-rag-handwritten.svg" alt="Handwritten: End-to-End Latency Breakdown (RAG)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/end-to-end-latency-breakdown-rag-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/end-to-end-latency-breakdown-rag-diagram.svg" alt="Diagram: End-to-End Latency Breakdown (RAG)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/end-to-end-latency-breakdown-rag-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/end-to-end-latency-breakdown-rag-sticky.svg" alt="Sticky Note: End-to-End Latency Breakdown (RAG)" width="30%">
</a>


```python
import time

def profile_rag(query: str) -> dict:
    latencies = {}

    t0 = time.time()
    q_vec = client.embeddings.create(
        input=query, model="text-embedding-3-small"
    ).data[0].embedding
    latencies["embedding"] = time.time() - t0

    t0 = time.time()
    results = chroma_collection.query(
        query_embeddings=[q_vec], n_results=5
    )
    latencies["vector_search"] = time.time() - t0

    t0 = time.time()
    context = "\n\n".join(results["documents"][0])
    latencies["context_building"] = time.time() - t0

    t0 = time.time()
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Answer using context."},
            {"role": "user", "content": f"Context:\n{context}\n\nQuery: {query}"}
        ],
        max_tokens=500
    )
    latencies["llm_generation"] = time.time() - t0
    latencies["total"] = sum(latencies.values())

    return {
        "latencies_ms": {k: round(v * 1000, 2) for k, v in latencies.items()},
        "prompt_tokens": response.usage.prompt_tokens,
        "completion_tokens": response.usage.completion_tokens,
    }

# Profile result
result = profile_rag("What are the best practices for RAG chunking?")
print(json.dumps(result, indent=2))
# {
#   "latencies_ms": {
#     "embedding": 150.23,
#     "vector_search": 45.12,
#     "context_building": 0.34,
#     "llm_generation": 1200.56,
#     "total": 1396.25
#   },
#   "prompt_tokens": 4120,
#   "completion_tokens": 234
# }
```

### Latency Budget Allocation

<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/latency-budget-allocation-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/latency-budget-allocation-handwritten.svg" alt="Handwritten: Latency Budget Allocation" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/latency-budget-allocation-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/latency-budget-allocation-diagram.svg" alt="Diagram: Latency Budget Allocation" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/latency-budget-allocation-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/latency-budget-allocation-sticky.svg" alt="Sticky Note: Latency Budget Allocation" width="30%">
</a>


| Component | Target (P95) | Optimization lever |
|-----------|-------------|-------------------|
| Embedding | < 200ms | Choose smaller model, cache embeddings |
| Vector search | < 100ms | HNSW index tuning, reduce search scope |
| Context building | < 10ms | Pre-formatted templates |
| LLM generation | < 2000ms | Model tiering, prompt compression, streaming |
| **Total** | **< 2500ms** | **Balance all levers** |

---

## 9.5 Scalability Patterns

### Horizontal Scaling for RAG API

<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/horizontal-scaling-for-rag-api-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/horizontal-scaling-for-rag-api-handwritten.svg" alt="Handwritten: Horizontal Scaling for RAG API" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/horizontal-scaling-for-rag-api-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/horizontal-scaling-for-rag-api-diagram.svg" alt="Diagram: Horizontal Scaling for RAG API" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/horizontal-scaling-for-rag-api-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/horizontal-scaling-for-rag-api-sticky.svg" alt="Sticky Note: Horizontal Scaling for RAG API" width="30%">
</a>


```python
# Connection pooling with async database
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy.pool import NullPool

# Pool sizing formula: connections = (CPUs * 2) + effective_spindle_count
DATABASE_URL = "postgresql+asyncpg://user:pass@host:5432/ragdb"
engine = create_async_engine(
    DATABASE_URL,
    pool_size=20,        # Base connections per worker
    max_overflow=10,     # Additional connections under load
    pool_pre_ping=True,  # Verify connections before use
    pool_recycle=3600,   # Recycle every hour
)

# FastAPI with connection pool
from contextlib import asynccontextmanager
from fastapi import FastAPI

@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    await engine.dispose()

app = FastAPI(lifespan=lifespan)

async def get_db() -> AsyncSession:
    async with SessionLocal() as session:
        yield session
```

### Read Replicas for Vector Search

<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/read-replicas-for-vector-search-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/read-replicas-for-vector-search-handwritten.svg" alt="Handwritten: Read Replicas for Vector Search" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/read-replicas-for-vector-search-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/read-replicas-for-vector-search-diagram.svg" alt="Diagram: Read Replicas for Vector Search" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/read-replicas-for-vector-search-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/read-replicas-for-vector-search-sticky.svg" alt="Sticky Note: Read Replicas for Vector Search" width="30%">
</a>


```python
# Separate read and write paths for scaling
READ_REPLICA_URL = "postgresql+asyncpg://user:pass@replica:5432/ragdb"
WRITE_PRIMARY_URL = "postgresql+asyncpg://user:pass@primary:5432/ragdb"

read_engine = create_async_engine(READ_REPLICA_URL, pool_size=30)
write_engine = create_async_engine(WRITE_PRIMARY_URL, pool_size=5)

async def search_documents(query_vector: list[float], top_k: int = 10):
    """Reads from replica for vector search."""
    async with AsyncSession(read_engine) as session:
        # pgvector ANN search
        result = await session.execute(
            text("""
                SELECT id, content, embedding <-> :query AS distance
                FROM document_chunks
                ORDER BY embedding <-> :query
                LIMIT :top_k
            """),
            {"query": str(query_vector), "top_k": top_k}
        )
        return result.fetchall()

async def insert_document(content: str, embedding: list[float]):
    """Writes to primary for consistency."""
    async with AsyncSession(write_engine) as session:
        session.add(DocumentChunk(content=content, embedding=embedding))
        await session.commit()
```

---

## 9.6 Multi-Region Deployment

### Vector DB Topology Options

<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/vector-db-topology-options-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/vector-db-topology-options-handwritten.svg" alt="Handwritten: Vector DB Topology Options" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/vector-db-topology-options-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/vector-db-topology-options-diagram.svg" alt="Diagram: Vector DB Topology Options" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/vector-db-topology-options-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/vector-db-topology-options-sticky.svg" alt="Sticky Note: Vector DB Topology Options" width="30%">
</a>


| Pattern | Description | Best For |
|---------|-------------|----------|
| Active-Passive | One primary region writes, replicas in other regions read | Cost-sensitive, read-heavy workloads |
| Active-Active (CRDT) | Each region writes, conflict resolution via CRDTs | Low-latency writes everywhere |
| Active-Active (sharded) | Data partitioned by region (e.g., EU data in EU cluster) | Data residency requirements |
| Global secondary index | One primary write region, multiple read replicas | Most common, reasonable latency |

### Cross-Region Vector Search

<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/cross-region-vector-search-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/cross-region-vector-search-handwritten.svg" alt="Handwritten: Cross-Region Vector Search" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/cross-region-vector-search-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/cross-region-vector-search-diagram.svg" alt="Diagram: Cross-Region Vector Search" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/cross-region-vector-search-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/cross-region-vector-search-sticky.svg" alt="Sticky Note: Cross-Region Vector Search" width="30%">
</a>


```python
import asyncio
from typing import NamedTuple

class RegionResult(NamedTuple):
    region: str
    documents: list[str]
    latency_ms: float

async def search_region(
    region_url: str,
    query_vector: list[float],
    top_k: int,
    timeout_ms: int = 2000,
) -> RegionResult:
    """Query a single region's vector DB with timeout."""
    t0 = time.time()
    try:
        async with httpx.AsyncClient(timeout=timeout_ms / 1000) as client:
            resp = await client.post(
                f"{region_url}/search",
                json={"vector": query_vector, "top_k": top_k}
            )
            data = resp.json()
            return RegionResult(
                region=region_url,
                documents=data["documents"],
                latency_ms=(time.time() - t0) * 1000
            )
    except Exception as e:
        return RegionResult(region=region_url, documents=[], latency_ms=(time.time() - t0) * 1000)

async def multi_region_search(
    query_vector: list[float],
    regions: list[str],
    top_k_per_region: int = 5,
    merge_top_k: int = 10,
) -> list[str]:
    """Search all regions in parallel, merge results."""
    tasks = [search_region(r, query_vector, top_k_per_region) for r in regions]
    results = await asyncio.gather(*tasks)

    # Log per-region latency
    for r in results:
        print(f"Region {r.region}: {r.latency_ms:.0f}ms, {len(r.documents)} docs")

    # Merge and deduplicate
    seen = set()
    merged = []
    for r in sorted(results, key=lambda x: x.latency_ms):
        for doc in r.documents:
            doc_id = hash(doc[:100])
            if doc_id not in seen:
                seen.add(doc_id)
                merged.append(doc)

    return merged[:merge_top_k]
```

---

## 9.7 Agent Infrastructure Architecture

### Multi-Agent System Architecture

<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/multi-agent-system-architecture-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/multi-agent-system-architecture-handwritten.svg" alt="Handwritten: Multi-Agent System Architecture" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/multi-agent-system-architecture-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/multi-agent-system-architecture-diagram.svg" alt="Diagram: Multi-Agent System Architecture" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/multi-agent-system-architecture-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/multi-agent-system-architecture-sticky.svg" alt="Sticky Note: Multi-Agent System Architecture" width="30%">
</a>


```
                         +-------------+
                         ¦ API Gateway  ¦
                         ¦ (rate limit, ¦
                         ¦  auth, route)¦
                         +-------------+
                                ¦
                    +-----------------------+
                    ¦    Agent Supervisor    ¦
                    ¦  (orchestration layer) ¦
                    +-----------------------+
                                ¦
         +----------------------+----------------------+
         ¦                      ¦                      ¦
    +---------+          +-----------+          +----------+
    ¦ Agent A ¦          ¦  Agent B  ¦          ¦  Agent C  ¦
    ¦(search) ¦          ¦ (analyze) ¦          ¦ (respond) ¦
    +---------+          +-----------+          +----------+
         ¦                     ¦                      ¦
         +---------------------+----------------------+
                               ¦
                    +---------------------+
                    ¦     Message Bus      ¦
                    ¦  (Redis / RabbitMQ)  ¦
                    +---------------------¦
                    ¦    State Store       ¦
                    ¦  (Postgres / Redis)  ¦
                    +---------------------¦
                    ¦    Tool Registry     ¦
                    ¦  (MCP server list)   ¦
                    +---------------------+
```

### Tool Registry

<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/tool-registry-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/tool-registry-handwritten.svg" alt="Handwritten: Tool Registry" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/tool-registry-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/tool-registry-diagram.svg" alt="Diagram: Tool Registry" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/tool-registry-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/tool-registry-sticky.svg" alt="Sticky Note: Tool Registry" width="30%">
</a>


```python
from pydantic import BaseModel
from typing import Any, Callable
import json

class ToolDefinition(BaseModel):
    name: str
    description: str
    parameters: dict
    handler: str  # Module path to the handler function
    timeout_seconds: int = 30
    cost_per_call: float = 0.0
    rate_limit_per_minute: int = 60

class ToolRegistry:
    """Central registry for all tools available to agents."""

    def __init__(self):
        self._tools: dict[str, dict] = {}

    def register(self, tool: ToolDefinition):
        self._tools[tool.name] = tool.model_dump()

    def get_schemas(self) -> list[dict]:
        return [
            {"type": "function", "function": {
                "name": t["name"],
                "description": t["description"],
                "parameters": t["parameters"]
            }}
            for t in self._tools.values()
        ]

    def get_tool(self, name: str) -> dict | None:
        return self._tools.get(name)

# Usage
registry = ToolRegistry()

registry.register(ToolDefinition(
    name="search_web",
    description="Search the web for current information",
    parameters={
        "type": "object",
        "properties": {
            "query": {"type": "string", "description": "Search query"}
        },
        "required": ["query"]
    },
    handler="tools.web_search",
    rate_limit_per_minute=30,
    cost_per_call=0.001,
))

registry.register(ToolDefinition(
    name="query_vector_db",
    description="Search the vector database for relevant documents",
    parameters={
        "type": "object",
        "properties": {
            "query": {"type": "string"},
            "top_k": {"type": "integer", "default": 5}
        },
        "required": ["query"]
    },
    handler="tools.vector_search",
    rate_limit_per_minute=120,
    cost_per_call=0.0005,
))
```

---

## 9.8 Async Processing Pipelines

### Document Ingestion Pipeline

<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/document-ingestion-pipeline-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/document-ingestion-pipeline-handwritten.svg" alt="Handwritten: Document Ingestion Pipeline" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/document-ingestion-pipeline-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/document-ingestion-pipeline-diagram.svg" alt="Diagram: Document Ingestion Pipeline" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/document-ingestion-pipeline-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/document-ingestion-pipeline-sticky.svg" alt="Sticky Note: Document Ingestion Pipeline" width="30%">
</a>


```python
import asyncio
from dataclasses import dataclass
from enum import Enum

class ProcessingStatus(Enum):
    PENDING = "pending"
    CHUNKING = "chunking"
    EMBEDDING = "embedding"
    INDEXING = "indexing"
    COMPLETED = "completed"
    FAILED = "failed"

@dataclass
class Document:
    id: str
    content: str
    metadata: dict
    status: ProcessingStatus = ProcessingStatus.PENDING

class IngestionPipeline:
    """
    Handles 10K+ docs/day with parallel chunking, embedding, and indexing.
    Uses asyncio queues for backpressure.
    """

    def __init__(
        self,
        chunk_size: int = 800,
        chunk_overlap: int = 150,
        max_concurrent_embeddings: int = 5,
        batch_size: int = 20,
    ):
        self.chunk_size = chunk_size
        self.chunk_overlap = chunk_overlap
        self.semaphore = asyncio.Semaphore(max_concurrent_embeddings)
        self.batch_size = batch_size

    def chunk_document(self, content: str) -> list[str]:
        """Split document into overlapping chunks."""
        chunks = []
        start = 0
        while start < len(content):
            end = start + self.chunk_size
            if end < len(content):
                # Try to break at paragraph or sentence boundary
                end = max(
                    content.rfind("\n\n", start, end),
                    content.rfind(". ", start, end),
                    content.rfind(" ", start, end),
                    start + self.chunk_size // 2
                )
                end = end + 1 if end > start else start + self.chunk_size
            chunks.append(content[start:end])
            start = end - self.chunk_overlap
        return chunks

    async def embed_chunk(self, chunk: str) -> list[float]:
        """Embed a single chunk with concurrency control."""
        async with self.semaphore:
            result = await asyncio.to_thread(
                lambda: client.embeddings.create(
                    input=chunk,
                    model="text-embedding-3-small"
                ).data[0].embedding
            )
            return result

    async def embed_batch(self, chunks: list[str]) -> list[list[float]]:
        """Embed chunks in parallel batches."""
        tasks = [self.embed_chunk(c) for c in chunks]
        return await asyncio.gather(*tasks)

    async def process_document(self, doc: Document) -> int:
        """Process a single document end-to-end."""
        try:
            doc.status = ProcessingStatus.CHUNKING
            chunks = self.chunk_document(doc.content)

            doc.status = ProcessingStatus.EMBEDDING
            # Process in batches for rate limiting
            all_embeddings = []
            for i in range(0, len(chunks), self.batch_size):
                batch = chunks[i:i + self.batch_size]
                embeddings = await self.embed_batch(batch)
                all_embeddings.extend(embeddings)

            doc.status = ProcessingStatus.INDEXING
            # Store in vector DB (batch insert)
            for chunk, embedding in zip(chunks, all_embeddings):
                chroma_collection.add(
                    documents=[chunk],
                    embeddings=[embedding],
                    metadatas=[{"doc_id": doc.id, **doc.metadata}]
                )

            doc.status = ProcessingStatus.COMPLETED
            return len(chunks)

        except Exception as e:
            doc.status = ProcessingStatus.FAILED
            print(f"Failed to process {doc.id}: {e}")
            return 0

# Usage
async def process_documents(docs: list[Document]):
    pipeline = IngestionPipeline(max_concurrent_embeddings=10)
    tasks = [pipeline.process_document(doc) for doc in docs]
    results = await asyncio.gather(*tasks)
    print(f"Processed {sum(results)} chunks from {len(docs)} documents")
```

---

## 9.9 API Gateway Patterns for AI

### AI Gateway Design

<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/ai-gateway-design-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/ai-gateway-design-handwritten.svg" alt="Handwritten: AI Gateway Design" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/ai-gateway-design-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/ai-gateway-design-diagram.svg" alt="Diagram: AI Gateway Design" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/ai-gateway-design-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/ai-gateway-design-sticky.svg" alt="Sticky Note: AI Gateway Design" width="30%">
</a>


```python
from fastapi import FastAPI, Request, HTTPException
from pydantic import BaseModel
import time
import hashlib

app = FastAPI(title="AI Gateway")

class GatewayConfig(BaseModel):
    rate_limit_per_minute: int = 60
    max_tokens_per_request: int = 4000
    max_requests_per_day_per_user: int = 1000
    cost_alert_threshold_daily: float = 10.0

class LLMRequest(BaseModel):
    model: str
    messages: list[dict]
    max_tokens: int = 1024
    temperature: float = 0.7

class LLMResponse(BaseModel):
    content: str
    model: str
    usage: dict
    cached: bool = False

class AIGateway:
    def __init__(self, config: GatewayConfig):
        self.config = config
        self.cache = PromptCache()
        self.cost_tracker = CostTracker()

    async def route_request(
        self, request: LLMRequest, user_id: str
    ) -> LLMResponse:
        # 1. Authentication
        if not self.authenticate(user_id):
            raise HTTPException(status_code=403, detail="Unauthorized")

        # 2. Rate limiting
        if self.is_rate_limited(user_id):
            raise HTTPException(status_code=429, detail="Rate limit exceeded")

        # 3. Content filtering (input guard)
        if self.contains_blocked_content(request.messages):
            raise HTTPException(status_code=400, detail="Content policy violation")

        # 4. Model routing
        model = self.route_model(request.model, request.messages)

        # 5. Cache check
        cache_key = self.cache_key(request)
        cached = self.cache.get(cache_key)
        if cached:
            return LLMResponse(
                content=cached["response"],
                model=model,
                usage={"prompt_tokens": 0, "completion_tokens": 0},
                cached=True
            )

        # 6. Execute
        t0 = time.time()
        client = self.get_client(model)
        response = client.chat.completions.create(
            model=model,
            messages=request.messages,
            max_tokens=min(request.max_tokens, self.config.max_tokens_per_request)
        )

        # 7. Cache response
        self.cache.set(cache_key, response.choices[0].message.content)

        # 8. Track cost
        self.cost_tracker.record(
            user_id=user_id,
            model=model,
            prompt_tokens=response.usage.prompt_tokens,
            completion_tokens=response.usage.completion_tokens,
            latency_ms=(time.time() - t0) * 1000
        )

        return LLMResponse(
            content=response.choices[0].message.content,
            model=model,
            usage={
                "prompt_tokens": response.usage.prompt_tokens,
                "completion_tokens": response.usage.completion_tokens
            }
        )
```

---

## 9.10 System Design Interview Prep

### Mock Interview: "Design a RAG System for Customer Support"

<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/mock-interview-design-a-rag-system-for-customer-support-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/mock-interview-design-a-rag-system-for-customer-support-handwritten.svg" alt="Handwritten: Mock Interview: "Design a RAG System for Customer Support"" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/mock-interview-design-a-rag-system-for-customer-support-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/mock-interview-design-a-rag-system-for-customer-support-diagram.svg" alt="Diagram: Mock Interview: "Design a RAG System for Customer Support"" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/mock-interview-design-a-rag-system-for-customer-support-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/09-ai-system-design/mock-interview-design-a-rag-system-for-customer-support-sticky.svg" alt="Sticky Note: Mock Interview: "Design a RAG System for Customer Support"" width="30%">
</a>


**45-minute structure:**

| Time | Section | What to cover |
|------|---------|---------------|
| 0-5 min | Requirements | Functional: query historical tickets, suggest solutions, escalate. Non-functional: &lt; 3s latency, 99.9% uptime, handle 1000 QPS peak |
| 5-10 min | Data model | Ticket schema, chunk storage, embedding index, metadata filters |
| 10-20 min | Architecture | Ingestion pipeline, retrieval pipeline, generation pipeline, caching layers |
| 20-30 min | Component design | Chunking strategy, embedding model choice, vector DB selection, re-ranking |
| 30-40 min | Scaling | Read replicas, connection pooling, multi-region for disaster recovery |
| 40-45 min | Tradeoffs | Cost vs latency, cache invalidation strategy, model tiering |

**Key design decisions to defend:**

1. **Chunking:** "I chose semantic chunking over fixed-size because customer tickets have variable-length context that fixed boundaries would break."

2. **Vector DB:** "I chose pgvector over a dedicated vector DB because we already use Postgres for ticket storage. Eliminating ChromaDB reduces operational complexity."

3. **Caching:** "Three-tier cache: exact match (Redis, 5-min TTL), semantic similarity (embedding comparison, 0.95 threshold), and KV cache for streaming sessions."

4. **Scaling:** "Read replicas for vector search, primary for writes. Connection pooling with 20 base + 10 overflow per worker."

---


interface SanitizeResult { cleaned: string; removed: string[]; warnings: string[] }
class InputSanitizer {
  stripHTML(input: string): string { return input.replace(/<[^>]*>/g, "") }
  escapeSQL(input: string): string { return input.replace(/'/g,"''").replace(/--/g,"").replace(/;/g,"") }
  sanitize(input: string): SanitizeResult {
    const removed: string[] = []; const warnings: string[] = []
    let cleaned = input
    if(/<script/i.test(cleaned)) { removed.push("script tags"); cleaned = cleaned.replace(/<script[\s\S]*?<\/script>/gi,"") }
    if(/['"];/.test(cleaned)) { warnings.push("Possible SQL injection"); cleaned = this.escapeSQL(cleaned) }
    if(input!==cleaned) warnings.push("Content was modified")
    return {cleaned,removed,warnings}
  }
}
class PIIDetector {
  private patterns: [RegExp,string][] = [
    [/\b\d{3}-\d{2}-\d{4}\b/g, "SSN"],[/(?:\d{4}-){3}\d{4}\b/g, "CreditCard"],[/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, "Email"]
  ]
  detect(text: string): Array&lt;{type:string;value:string;position:number}&gt; {
    const found: Array&lt;{type:string;value:string;position:number}&gt; = []
    for(const [pattern,type] of this.patterns) {
      let match: RegExpExecArray|null
      while((match = pattern.exec(text)) !== null) { found.push({type,value:match[0],position:match.index}) }
    }
    return found
  }
  redact(text: string): string { let result = text
    for(const [pattern] of this.patterns) result = result.replace(pattern,"[REDACTED]")
    return result
  }
}
class PromptInjectionGuard {
  private dangerousPatterns = [/ignore.*previous/i,/forget.*instruction/i,/system.*prompt/i,/new.*role/i,/you are now/i]
  check(input: string): { safe: boolean; flags: string[] } {
    const flags: string[] = []
    for(const p of this.dangerousPatterns) if(p.test(input)) flags.push(`Pattern: ${p.source}`)
    return {safe:flags.length===0,flags}
  }
}
export { InputSanitizer, PIIDetector, PromptInjectionGuard }
## Exercises

1. **Cost model:** Build a spreadsheet or Python script that estimates daily cost for a RAG system at 10K, 100K, and 1M queries/day. Identify the top-3 cost drivers.

2. **Cache hit-rate analysis:** Instrument your RAG API to log cache hits and misses. Run for 24 hours and report hit rates for prompt cache vs semantic cache.

3. **Multi-region prototype:** Deploy your RAG API to 2 regions (e.g., US and EU). Build a multi-region search that queries both and merges results.

4. **System design mock:** Set a 45-minute timer and design "a multi-agent customer support system" on paper or a whiteboard. Record your design decisions.

5. **Latency budget:** Profile your RAG API end-to-end. Set a 3-second P99 latency budget and optimize each component to meet it.
