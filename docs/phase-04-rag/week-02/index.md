# Week 2 — Vector DBs in Production

**Goal:** Vector databases ko production mein deploy karne ka gyaan
**Output:** Cloud vector DB, caching, evaluation system

---

## Day 1 — Beyond Chroma: Vector DB Options

### Why Not Chroma in Production?

```
Chroma = Great for prototyping
Par production mein issues:
❌ Concurrency issues (multiple users)
❌ No built-in replication
❌ Limited filtering capabilities
❌ No cloud managed service
❌ Memory-heavy

Production-ready options:
✅ Pinecone   — Fully managed, serverless, expensive
✅ Qdrant     — Self-host or cloud, fast, good filters
✅ Weaviate   — Graph + vector, good for complex queries
✅ Milvus     — Enterprise-grade, distributed
```

### Comparison Table

| Feature | Pinecone | Qdrant | Weaviate | Milvus |
|---------|----------|--------|----------|--------|
| Setup | Serverless (easiest) | Docker/Cloud | Docker/Cloud | Kubernetes |
| Pricing | $0.10/million vectors | Free tier (1GB) | Free tier (1GB) | Free tier |
| Filters | Basic | Advanced | Advanced | Basic |
| Hybrid Search | No (only dense) | Yes | Yes | No |
| Speed | Fast | Fastest | Medium | Fast |
| Self-host | No | Yes | Yes | Yes |
| SDK Quality | Excellent | Excellent | Good | Good |

### Qdrant Setup

```python
# pip install qdrant-client

from qdrant_client import QdrantClient
from qdrant_client.models import (
    VectorParams, Distance, PointStruct,
    Filter, FieldCondition, MatchValue, Range
)
import numpy as np

# Local
client = QdrantClient(":memory:")

# Docker
# client = QdrantClient(host="localhost", port=6333)

# Cloud
# client = QdrantClient(
#     url="https://xxxx.aws.cloud.qdrant.io",
#     api_key="your-api-key"
# )

# Create collection
client.create_collection(
    collection_name="apexerp_docs",
    vectors_config=VectorParams(
        size=1536,          # OpenAI embedding size
        distance=Distance.COSINE
    )
)

# Insert vectors
vectors = np.random.rand(100, 1536).tolist()  # Your embeddings
payloads = [
    {"title": "Q4 Sales Report", "department": "Finance", "date": "2024-12-31"},
    # ... more documents
]

points = [
    PointStruct(id=i, vector=v, payload=p)
    for i, (v, p) in enumerate(zip(vectors, payloads))
]
client.upsert(
    collection_name="apexerp_docs",
    points=points
)
```

### Pinecone Setup

```python
# pip install pinecone-client

import pinecone

pinecone.init(api_key="your-api-key", environment="us-west1-aws")

# Create index
if "apexerp" not in pinecone.list_indexes():
    pinecone.create_index(
        name="apexerp",
        dimension=1536,
        metric="cosine",
        spec=ServerlessSpec(
            cloud="aws",
            region="us-west-2"
        )
    )

index = pinecone.Index("apexerp")

# Insert
index.upsert(
    vectors=[
        ("id1", [0.1, 0.2, ...], {"title": "Q4 Sales"}),
        ("id2", [0.3, 0.4, ...], {"title": "Customer Churn"}),
    ]
)

# Query
results = index.query(
    vector=[0.1, 0.2, ...],
    top_k=10,
    include_metadata=True,
    filter={"department": {"$eq": "Finance"}}
)
```

---

## Day 2 — Index Types

### Why Index Types Matter

```
Without index:
→ Query aayi → saare vectors compare karo (brute force)
→ 1 million vectors = 1 million comparisons → SLOW

With index:
→ Hierarchical structure ban jata hai
→ Relevant clusters mein hi search hota hai
→ 100x faster
```

### IVF (Inverted File Index)

```python
"""
IVF ka concept:
1. Vectors ko clusters mein divide karo (k-means)
2. Query aayi → nearest cluster dhundo
3. Sirf us cluster mein search karo

Trade-off:
- nprobe = number of clusters to search
- Higher nprobe = better recall but slower
- Typical: nprobe = 10-100
"""

# Faiss IVF example
import faiss
import numpy as np

dimension = 1536
n_centroids = 100  # 100 clusters

quantizer = faiss.IndexFlatL2(dimension)
index = faiss.IndexIVFFlat(quantizer, dimension, n_centroids)

# Train (clustering)
index.train(vectors_np)  # your vectors
index.add(vectors_np)

# Search
index.nprobe = 10  # search 10 nearest clusters
distances, indices = index.search(query_vector, k=10)
```

### HNSW (Hierarchical Navigable Small World)

```python
"""
HNSW ka concept:
Multi-layer graph structure:
Layer 3: few nodes (long-range connections)
Layer 2: more nodes
Layer 1: all nodes (short-range connections)

Search: top layer se start karo → greedily traverse down
Fastest index type for in-memory search.

Parameters:
- M: connections per node (16-64). Higher = more accurate but more memory
- ef_construction: build quality (100-500). Higher = better but slower build
- ef_search: search quality. Higher = better recall
"""
from qdrant_client.models import HnswConfigDiff

client.create_collection(
    collection_name="apexerp_docs",
    vectors_config=VectorParams(size=1536, distance=Distance.COSINE),
    hnsw_config=HnswConfigDiff(
        m=16,               # 16 connections per node
        ef_construct=200,   # good build quality
        full_scan_threshold=10000  # full scan for small collections
    )
)

# Search time parameter
search_result = client.search(
    collection_name="apexerp_docs",
    query_vector=[...],
    limit=10,
    search_params={"hnsw_ef": 128}  # ef_search = 128
)
```

### Scalar Quantization (SQ)

```python
"""
Idea: float32 (4 bytes) → int8 (1 byte)
75% memory savings!

Instead of storing:
[0.1234, 0.5678, 0.9012, ...]  # 4 bytes each

Store:
[12, 56, 90, ...]  # 1 byte each

Trade-off: Slight accuracy loss (1-2%)
"""

# Qdrant quantization
from qdrant_client.models import ScalarQuantization, QuantizationType

client.create_collection(
    collection_name="apexerp_docs",
    vectors_config=VectorParams(size=1536, distance=Distance.COSINE),
    quantization_config=ScalarQuantization(
        type=QuantizationType.INT8,
        always_ram=True  # Keep quantized vectors in RAM
    )
)
```

### Product Quantization (PQ)

```python
"""
Advanced technique:
1. Vector ko sub-vectors mein tod do
2. Har sub-vector ko compress karo
3. Codebook ban jata hai

Example:
1536-d vector → 24 sub-vectors of 64-d each
Har sub-vector → 8-bit code
Total: 24 bytes instead of 1536*4 = 6144 bytes
Compression: 256x

Use when: RAM is limited, accuracy can be sacrificed slightly
"""
```

---

## Day 3 — Filtering

### Metadata Filtering

```python
"""
Vectors ke saath metadata store hota hai.
Filtering = sirf relevant metadata wale vectors search karo.

Types:
1. Pre-filter: Phir filter karo, phir search karo
   → Accurate but slow for large filtered sets
2. Post-filter: Phir search karo, phir filter karo
   → Fast but might return fewer results
"""

from qdrant_client.models import Filter, FieldCondition, MatchValue, Range

# Pre-filtering (Qdrant native)
filter_condition = Filter(
    must=[
        FieldCondition(
            key="department",
            match=MatchValue(value="Finance")
        ),
        FieldCondition(
            key="date",
            range=Range(gte="2024-01-01", lte="2024-12-31")
        ),
        FieldCondition(
            key="document_type",
            match=MatchValue(value="report")
        )
    ]
)

results = client.search(
    collection_name="apexerp_docs",
    query_vector=[...],
    limit=10,
    query_filter=filter_condition
)

# Pinecone filtering
results = index.query(
    vector=[...],
    top_k=10,
    filter={
        "department": {"$eq": "Finance"},
        "date": {"$gte": "2024-01-01", "$lte": "2024-12-31"}
    }
)
```

### Pre-filter vs Post-filter Performance

```python
import time
from typing import List, Dict

class FilterBenchmark:
    """
    Measure performance difference between pre and post filtering.
    """
    def __init__(self, client, collection: str):
        self.client = client
        self.collection = collection

    def pre_filter_search(
        self, vector: List[float], filter_cond: Filter, k: int = 10
    ) -> List:
        start = time.perf_counter()
        results = self.client.search(
            collection_name=self.collection,
            query_vector=vector,
            limit=k,
            query_filter=filter_cond
        )
        elapsed = time.perf_counter() - start
        return results, elapsed

    def post_filter_search(
        self, vector: List[float], filter_cond: dict, k: int = 100
    ) -> List:
        """Search more, then filter in Python"""
        start = time.perf_counter()
        results = self.client.search(
            collection_name=self.collection,
            query_vector=vector,
            limit=k  # get more results
        )
        # Post-filter in Python
        filtered = [
            r for r in results
            if r.payload.get("department") == "Finance"
        ]
        elapsed = time.perf_counter() - start
        return filtered[:10], elapsed

"""
Rule of thumb:
→ Filter removes >50% data → Pre-filter better
→ Filter removes <10% data → Post-filter faster
→ Filter is on indexed field → Pre-filter
→ Filter is on non-indexed field → Post-filter
"""
```

---

## Day 4 — Caching

### Why Cache?

```
Production mein same queries baar baar aati hain:
→ "Q4 sales kya the?" (bees logo ne pucha)
→ "Customer churn rate?" (daily report)

Without cache → har baar vector search + LLM call = slow + expensive
With cache → pehle result store karo, direct return karo
```

### Embedding Cache

```python
import redis
import hashlib
import json
from typing import List, Optional

class EmbeddingCache:
    """
    Embeddings ko Redis mein cache karo.
    Same text ka embedding baar baar generate nahi karna.
    """

    def __init__(self, redis_url: str = "redis://localhost:6379"):
        self.redis = redis.from_url(redis_url)
        self.ttl = 86400  # 24 hours

    def _key(self, text: str) -> str:
        return f"embedding:{hashlib.md5(text.encode()).hexdigest()}"

    def get(self, text: str) -> Optional[List[float]]:
        data = self.redis.get(self._key(text))
        if data:
            return json.loads(data)
        return None

    def set(self, text: str, embedding: List[float]):
        self.redis.setex(
            self._key(text),
            self.ttl,
            json.dumps(embedding)
        )

    def get_or_compute(self, text: str, compute_fn) -> List[float]:
        cached = self.get(text)
        if cached:
            return cached
        embedding = compute_fn(text)
        self.set(text, embedding)
        return embedding

# Usage with LangChain
from langchain.embeddings import OpenAIEmbeddings

embeddings = OpenAIEmbeddings()
cache = EmbeddingCache()

def cached_embed(text: str) -> List[float]:
    return cache.get_or_compute(text, embeddings.embed_query)

# Now har bar same text ka embedding compute nahi hoga
```

### Semantic Cache

```python
import numpy as np
from datetime import datetime, timedelta
from typing import Optional

class SemanticCacheEntry:
    """
    Ek cache entry:
    - query: original query
    - response: cached response
    - embedding: query ka embedding (similarity check ke liye)
    - timestamp: kab store hua
    """
    def __init__(self, query: str, response: str, embedding: List[float]):
        self.query = query
        self.response = response
        self.embedding = np.array(embedding)
        self.timestamp = datetime.now()

class SemanticCache:
    """
    Similar queries ko same response do.

    How:
    1. Query aayi → embedding nikaalo
    2. Cache mein similar query dhundo (>0.95 similarity)
    3. Mila → cached response return karo
    4. Nahi mila → normal RAG, phir cache mein store karo
    """

    def __init__(self, similarity_threshold: float = 0.95, ttl_hours: int = 24):
        self.cache: List[SemanticCacheEntry] = []
        self.threshold = similarity_threshold
        self.ttl = timedelta(hours=ttl_hours)

    def _cosine_similarity(self, a: np.ndarray, b: np.ndarray) -> float:
        return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

    def get(self, query_embedding: List[float]) -> Optional[str]:
        query_emb = np.array(query_embedding)
        now = datetime.now()

        for entry in self.cache:
            # Remove expired entries
            if now - entry.timestamp > self.ttl:
                continue

            similarity = self._cosine_similarity(query_emb, entry.embedding)
            if similarity >= self.threshold:
                return entry.response
        return None

    def set(self, query: str, response: str, embedding: List[float]):
        # Remove oldest entry if cache is too large
        if len(self.cache) >= 1000:
            self.cache.pop(0)

        self.cache.append(SemanticCacheEntry(query, response, embedding))

# Full pipeline with cache
class RAGWithCache:
    def __init__(self, rag_pipeline, embeddings, semantic_cache):
        self.rag = rag_pipeline
        self.embeddings = embeddings
        self.cache = semantic_cache

    def query(self, question: str) -> str:
        query_emb = self.embeddings.embed_query(question)

        # Check cache first
        cached = self.cache.get(query_emb)
        if cached:
            return cached

        # Normal RAG
        response = self.rag.query(question)

        # Cache the result
        self.cache.set(question, response, query_emb)
        return response
```

---

## Day 5 — Evaluation with RAGAS

### Why Evaluate?

```
"It's working" ka kya matlab?

Aapke RAG system mein:
→ Documents relevant hain? (context precision)
→ Saare relevant documents aa rahe hain? (context recall)
→ LLM hallucinate toh nahi kar raha? (faithfulness)
→ Answer relevant hai? (answer relevancy)

RAGAS = framework jo yeh metrics calculate karta hai
```

```python
# pip install ragas

from ragas import evaluate
from ragas.metrics import (
    faithfulness,
    answer_relevancy,
    context_precision,
    context_recall,
    context_entity_recall
)
from datasets import Dataset

class RAGASEvaluator:
    """
    RAGAS se apne RAG system ko evaluate karo.
    """
    def __init__(self, llm):
        self.llm = llm

    def prepare_dataset(
        self,
        questions: List[str],
        answers: List[str],
        contexts: List[List[str]],
        ground_truths: List[str]
    ) -> Dataset:
        return Dataset.from_dict({
            "question": questions,
            "answer": answers,
            "contexts": contexts,
            "ground_truth": ground_truths,
        })

    def evaluate_all(self, dataset: Dataset) -> dict:
        result = evaluate(
            dataset,
            metrics=[
                faithfulness,       # Answer context se supported hai?
                answer_relevancy,   # Answer question se related hai?
                context_precision,  # Retrieved docs me se kitne relevant hain?
                context_recall,     # Saare relevant docs retrieve hue?
                context_entity_recall  # Entities capture hui?
            ],
            llm=self.llm
        )
        return result

# Usage
evaluator = RAGASEvaluator(llm)

# Test cases
test_data = {
    "questions": [
        "Q4 2024 mein sales decline kyun hua?",
        "Customer churn rate kya hai?",
        "ApexERP ke total revenue kitna hai?"
    ],
    "answers": [
        "Q4 mein sales 15% decline hua customer churn ki wajah se...",
        "Customer churn rate 8.5% hai...",
        "ApexERP ka total revenue $5.2M hai..."
    ],
    "contexts": [
        ["Q4 sales report: $1.2M revenue, 15% decline"],
        ["Customer churn analysis: 8.5% churn rate"],
        ["Annual report 2024: $5.2M total revenue"]
    ],
    "ground_truths": [
        "Q4 2024 sales decline 15% hua customer churn aur market saturation ki wajah se",
        "Customer churn rate 8.5% hai Q4 2024 mein",
        "ApexERP ka 2024 total revenue $5.2M hai"
    ]
}

dataset = evaluator.prepare_dataset(**test_data)
results = evaluator.evaluate_all(dataset)

print(f"Faithfulness: {results['faithfulness']:.3f}")
print(f"Answer Relevancy: {results['answer_relevancy']:.3f}")
print(f"Context Precision: {results['context_precision']:.3f}")
print(f"Context Recall: {results['context_recall']:.3f}")

"""
Target scores:
- Faithfulness: > 0.90
- Answer Relevancy: > 0.85
- Context Precision: > 0.80
- Context Recall: > 0.75
"""
```

### Custom Evaluation

```python
class RetrievalQualityMonitor:
    """
    Production mein retrieval quality track karo.
    """
    def __init__(self):
        self.logs = []

    def log_retrieval(
        self,
        query: str,
        retrieved_docs: List[Document],
        user_feedback: Optional[int] = None
    ):
        self.logs.append({
            "query": query,
            "n_docs": len(retrieved_docs),
            "avg_length": sum(len(d.page_content) for d in retrieved_docs) / len(retrieved_docs),
            "user_feedback": user_feedback,
            "timestamp": datetime.now().isoformat()
        })

    def summary(self) -> dict:
        if not self.logs:
            return {"error": "No data"}
        feedbacks = [l["user_feedback"] for l in self.logs if l["user_feedback"]]
        return {
            "total_queries": len(self.logs),
            "avg_docs_retrieved": np.mean([l["n_docs"] for l in self.logs]),
            "feedback_avg": np.mean(feedbacks) if feedbacks else None,
            "feedback_count": len(feedbacks)
        }
```

---

## Day 6 — Monitoring

### Tracing Retrieval Quality

```python
from langchain.callbacks import LangChainTracer
from langchain.callbacks.base import BaseCallbackHandler
import json
import logging

class RetrievalLogger(BaseCallbackHandler):
    """
    Har retrieval operation ko log karo.
    LangSmith + custom logging.
    """
    def __init__(self, log_file: str = "retrieval_logs.jsonl"):
        self.log_file = log_file
        logging.basicConfig(level=logging.INFO)

    def on_retriever_start(self, serialized, query: str, **kwargs):
        self._current_query = query
        self._start_time = time.time()

    def on_retriever_end(self, documents, **kwargs):
        elapsed = time.time() - self._start_time
        log_entry = {
            "query": self._current_query,
            "n_results": len(documents),
            "elapsed_ms": elapsed * 1000,
            "avg_score": np.mean([d.metadata.get("score", 0) for d in documents]) if documents else 0,
            "timestamp": datetime.now().isoformat()
        }

        with open(self.log_file, "a") as f:
            f.write(json.dumps(log_entry) + "\n")

        # Alert if slow or empty
        if elapsed > 2.0:
            logging.warning(f"Slow retrieval: {elapsed:.2f}s for '{self._current_query}'")
        if len(documents) == 0:
            logging.warning(f"Empty results for '{self._current_query}'")

# Dashboard query
def query_dashboard(period: str = "24h"):
    """
    Retrieval metrics for dashboard.
    """
    logs = []
    with open("retrieval_logs.jsonl") as f:
        for line in f:
            logs.append(json.loads(line))

    df = pd.DataFrame(logs)
    return {
        "total_queries": len(df),
        "avg_latency_ms": df["elapsed_ms"].mean(),
        "p95_latency_ms": df["elapsed_ms"].quantile(0.95),
        "zero_results_pct": (df["n_results"] == 0).mean() * 100,
        "queries_per_hour": len(df) / 24
    }
```

### Production Health Checklist

```yaml
# monitoring_config.yaml
alerts:
  - metric: retrieval_latency_p95
    threshold: 2000  # ms
    action: notify_slack

  - metric: zero_results_rate
    threshold: 0.05  # 5%
    action: page_engineer

  - metric: avg_score
    threshold: 0.7
    action: log_warning

logging:
  retrievals: true
  generations: true
  user_feedback: true
  slow_queries_threshold_ms: 500
```

---

## Day 7 — Production Checklist

### Deployment Checklist

```
☐ Vector DB:
  ☐ Production instance running (Qdrant/Pinecone)
  ☐ Index type selected (HNSW recommended)
  ☐ Quantization configured (SQ or PQ)
  ☐ Backup strategy in place
  ☐ Monitoring set up

☐ Embeddings:
  ☐ Embedding cache implemented
  ☐ Batch processing for large inserts
  ☐ Rate limiting for embedding API

☐ Retrieval:
  ☐ Hybrid search configured
  ☐ Re-ranker integrated
  ☐ Metadata filtering working
  ☐ Multi-tenant isolation (if needed)

☐ Caching:
  ☐ Embedding cache (Redis)
  ☐ Semantic cache for similar queries
  ☐ Response cache for identical queries
  ☐ Cache invalidation strategy

☐ Evaluation:
  ☐ RAGAS metrics configured
  ☐ Test dataset created
  ☐ Baseline scores established
  ☐ Automated evaluation pipeline

☐ Monitoring:
  ☐ Retrieval latency tracking
  ☐ Zero-result alerts
  ☐ User feedback collection
  ☐ Cost tracking (tokens/API calls)
  ☐ LangSmith tracing active

☐ API:
  ☐ FastAPI endpoint
  ☐ Request validation (Pydantic)
  ☐ Error handling
  ☐ Rate limiting
  ☐ Authentication
  ☐ API documentation

☐ Deployment:
  ☐ Docker container
  ☐ Docker Compose or K8s
  ☐ CI/CD pipeline
  ☐ Health checks
  ☐ Scaling configuration
  ☐ Environment variables
  ☐ Secrets management
```

### Production RAG API Template

```python
from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Optional
import time
import logging

app = FastAPI(title="ApexERP RAG API")

class QueryRequest(BaseModel):
    question: str
    top_k: int = 5
    filter: Optional[dict] = None

class QueryResponse(BaseModel):
    answer: str
    sources: List[str]
    latency_ms: float

class HealthResponse(BaseModel):
    status: str
    vector_db: str
    n_documents: int

@app.on_event("startup")
async def startup():
    """Initialize RAG pipeline on startup."""
    app.state.pipeline = AdvancedRAGPipeline(...)
    app.state.monitor = RetrievalQualityMonitor()

@app.get("/health", response_model=HealthResponse)
async def health():
    return HealthResponse(
        status="healthy",
        vector_db="Qdrant",
        n_documents=app.state.pipeline.vectorstore.count()
    )

@app.post("/query", response_model=QueryResponse)
async def query(request: QueryRequest):
    start = time.perf_counter()

    try:
        answer = app.state.pipeline.query(
            request.question,
            top_k=request.top_k,
            filter=request.filter
        )
    except Exception as e:
        logging.error(f"Query failed: {e}")
        raise HTTPException(status_code=500, detail=str(e))

    elapsed = (time.perf_counter() - start) * 1000

    app.state.monitor.log_retrieval(
        request.question,
        answer["sources"],
        user_feedback=None
    )

    return QueryResponse(
        answer=answer["text"],
        sources=[s.metadata.get("title", "") for s in answer["sources"]],
        latency_ms=elapsed
    )
```

---

## Summary

```
Week 2 khatam:

✅ Vector DB options — Pinecone, Qdrant, Weaviate, Milvus
✅ Index types — IVF, HNSW, SQ, PQ
✅ Filtering — Pre-filter vs post-filter
✅ Caching — Embedding cache + semantic cache
✅ Evaluation — RAGAS metrics
✅ Monitoring — Retrieval logging + alerts
✅ Production checklist — Sab ready hai deploy ke liye
✅ FastAPI template — Production RAG API

Ab tu production-grade RAG systems bana sakta hai!
```
