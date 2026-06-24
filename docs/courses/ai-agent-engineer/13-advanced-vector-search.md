# Chapter 13 — Advanced Vector Search & RAG

**Duration:** 2 weeks, ~22 hours
**Goal:** Master advanced retrieval — hybrid search, multi-vector retrieval, re-ranking architectures, and production-scale vector database tuning. Move beyond basic cosine similarity.

---

## Topic Table

| # | Subtopic | Hours | Done checkpoint |
|---|----------|-------|-----------------|
| 1 | Hybrid search (dense + sparse + BM25) | 2.5 | Implement a hybrid search that combines 3 retrieval methods with RRF |
| 2 | Multi-vector retrieval (ColBERT, late interaction) | 2 | Explain why multi-vector beats single-vector for fine-grained relevance |
| 3 | Advanced retrieval strategies (HyDE, query rewriting, multi-query) | 2 | Implement query expansion that improves recall by 15% on your eval set |
| 4 | Re-ranking deep-dive | 2.5 | Deploy a cross-encoder re-ranker and measure NDCG improvement |
| 5 | HNSW index tuning | 2 | Tune HNSW parameters (M, efConstruction, efSearch) for your dataset |
| 6 | Metadata filtering & hybrid queries | 2 | Build a filtered search that combines vector distance with metadata constraints |
| 7 | Vector quantization (PQ, scalar quantization) | 2 | Implement quantization to reduce memory by 75% with minimal accuracy loss |
| 8 | Multi-modal RAG (text + image + tables) | 2 | Design a RAG pipeline that searches across text, images, and structured data |
| 9 | Graph RAG (knowledge graphs + vector search) | 2 | Combine vector similarity with knowledge graph traversal |
| 10 | Streaming ingestion & real-time updates | 1.5 | Build a real-time ingestion pipeline that indexes documents within 5 seconds |
| 11 | Vector DB comparison & migration strategies | 1.5 | Compare ChromaDB, Qdrant, pgvector, Pinecone for your use case |

---

## 13.1 Hybrid Search

### BM25 + Dense Vector + Sparse Vector

```python
import math
from collections import Counter
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer

class BM25:
    """Okapi BM25 implementation for sparse retrieval."""

    def __init__(self, k1: float = 1.5, b: float = 0.75):
        self.k1 = k1
        self.b = b
        self.documents: list[str] = []
        self.doc_lengths: list[int] = []
        self.avg_doc_length: float = 0
        self.idf: dict[str, float] = {}
        self.doc_freq: dict[str, int] = {}
        self.total_docs: int = 0

    def fit(self, documents: list[str]):
        self.documents = documents
        self.doc_lengths = [len(doc.split()) for doc in documents]
        self.avg_doc_length = np.mean(self.doc_lengths)
        self.total_docs = len(documents)

        # Term frequency across documents
        for doc in documents:
            terms = set(doc.lower().split())
            for term in terms:
                self.doc_freq[term] = self.doc_freq.get(term, 0) + 1

        # IDF calculation
        for term, doc_count in self.doc_freq.items():
            self.idf[term] = math.log(1 + (self.total_docs - doc_count + 0.5) / (doc_count + 0.5))

    def score(self, query: str, doc_index: int) -> float:
        """Calculate BM25 score for a query-document pair."""
        query_terms = query.lower().split()
        doc = self.documents[doc_index]
        doc_terms = doc.lower().split()
        doc_length = self.doc_lengths[doc_index]

        score = 0.0
        term_counts = Counter(doc_terms)

        for term in set(query_terms):
            if term in self.idf:
                tf = term_counts.get(term, 0)
                idf = self.idf[term]
                numerator = tf * (self.k1 + 1)
                denominator = tf + self.k1 * (1 - self.b + self.b * doc_length / self.avg_doc_length)
                score += idf * (numerator / denominator)

        return score

    def search(self, query: str, top_k: int = 10) -> list[tuple[int, float]]:
        scores = [(i, self.score(query, i)) for i in range(len(self.documents))]
        scores.sort(key=lambda x: x[1], reverse=True)
        return scores[:top_k]

# Hybrid search with Reciprocal Rank Fusion
class HybridSearch:
    """Combine BM25 + dense vector + sparse vector with RRF."""

    def __init__(
        self,
        dense_weight: float = 1.0,
        sparse_weight: float = 1.0,
        bm25_weight: float = 1.0,
        rrf_k: int = 60,
    ):
        self.dense_weight = dense_weight
        self.sparse_weight = sparse_weight
        self.bm25_weight = bm25_weight
        self.rrf_k = rrf_k
        self.bm25 = BM25()
        self.bm25_fitted = False

    def fit_bm25(self, documents: list[str]):
        self.bm25.fit(documents)
        self.bm25_fitted = True

    def rrf_score(self, rank: int) -> float:
        return 1.0 / (self.rrf_k + rank)

    def search(
        self,
        query: str,
        query_dense: list[float],
        query_sparse: dict[str, float] | None = None,
        top_k: int = 10,
    ) -> list[tuple[str, float, dict]]:
        """Hybrid search combining all methods."""
        all_scores: dict[int, float] = {}

        # Dense vector search
        dense_results = chroma_collection.query(
            query_embeddings=[query_dense],
            n_results=top_k * 2
        )
        for i in range(len(dense_results["ids"][0])):
            doc_id = dense_results["ids"][0][i]
            all_scores[doc_id] = all_scores.get(doc_id, 0) + self.rrf_score(i) * self.dense_weight

        # Sparse vector search (if available)
        if query_sparse:
            sparse_results = chroma_collection.query(
                query_embeddings=[list(query_sparse.values())],
                n_results=top_k * 2
            )
            for i in range(len(sparse_results["ids"][0])):
                doc_id = sparse_results["ids"][0][i]
                all_scores[doc_id] = all_scores.get(doc_id, 0) + self.rrf_score(i) * self.sparse_weight

        # BM25 search
        if self.bm25_fitted:
            bm25_results = self.bm25.search(query, top_k=top_k * 2)
            for doc_idx, score in bm25_results:
                all_scores[str(doc_idx)] = all_scores.get(str(doc_idx), 0) + self.rrf_score(doc_idx) * self.bm25_weight

        # Sort combined scores
        ranked = sorted(all_scores.items(), key=lambda x: x[1], reverse=True)[:top_k]

        # Fetch content for top results
        results = []
        for doc_id, score in ranked:
            results.append((
                doc_id,
                score / (self.dense_weight + self.sparse_weight + self.bm25_weight),  # Normalized score
                {"method": "hybrid", "bm25_used": self.bm25_fitted}
            ))

        return results

# Usage
def hybrid_search_demo(query: str):
    # Dense embedding
    dense_vec = client.embeddings.create(input=query, model="text-embedding-3-small").data[0].embedding

    # Sparse embedding (using SPLADE or similar — simplified example)
    sparse_vec = {"term1": 0.8, "term2": 0.5}  # Placeholder

    # BM25 fits on document collection
    bm25_docs = ["Lease terms in Dubai Marina", "Annual rent payment options", "Ejari registration process"]

    hybrid = HybridSearch()
    hybrid.fit_bm25(bm25_docs)
    return hybrid.search(query, dense_vec, sparse_vec, top_k=5)
```

---

## 13.2 Multi-Vector Retrieval

### ColBERT-Style Late Interaction

```python
import numpy as np
from typing import NamedTuple

class MultiVectorResult(NamedTuple):
    doc_id: str
    score: float
    token_matches: list[tuple[str, str, float]]  # (query_token, doc_token, similarity)

class ColBERTRetriever:
    """
    Multi-vector retrieval using late interaction (ColBERT-style).
    Each document is represented as a bag of token-level embeddings,
    not a single pooled vector.
    """

    def __init__(self):
        self.doc_embeddings: dict[str, list[tuple[str, list[float]]]] = {}

    def index_document(self, doc_id: str, tokens: list[str], embeddings: list[list[float]]):
        """Store per-token embeddings for a document."""
        self.doc_embeddings[doc_id] = list(zip(tokens, embeddings))

    def search(self, query_tokens: list[str], query_embeddings: list[list[float]], top_k: int = 5) -> list[MultiVectorResult]:
        """MaxSim late interaction scoring."""
        results = []

        for doc_id, doc_vectors in self.doc_embeddings.items():
            doc_embs = np.array([dv[1] for dv in doc_vectors])
            query_embs = np.array(query_embeddings)

            # MaxSim: for each query token, find max cosine similarity with any doc token
            query_norm = query_embs / np.linalg.norm(query_embs, axis=1, keepdims=True)
            doc_norm = doc_embs / np.linalg.norm(doc_embs, axis=1, keepdims=True)

            similarities = np.dot(query_norm, doc_norm.T)  # (n_query_tokens, n_doc_tokens)
            max_scores = similarities.max(axis=1)  # Best match per query token
            total_score = max_scores.sum()

            # Find best matches for interpretability
            token_matches = []
            for qi, q_token in enumerate(query_tokens):
                best_di = similarities[qi].argmax()
                token_matches.append((q_token, doc_vectors[best_di][0], float(similarities[qi][best_di])))

            results.append(MultiVectorResult(doc_id, float(total_score), token_matches))

        results.sort(key=lambda x: x.score, reverse=True)
        return results[:top_k]

# Usage
retriever = ColBERTRetriever()

# Index a document with per-token embeddings
tokens = ["lease", "terms", "dubai", "12", "months"]
embeddings = [client.embeddings.create(input=t, model="text-embedding-3-small").data[0].embedding for t in tokens]
retriever.index_document("doc1", tokens, embeddings)

query_tokens = ["what", "lease", "term", "dubai"]
query_embs = [client.embeddings.create(input=t, model="text-embedding-3-small").data[0].embedding for t in query_tokens]

results = retriever.search(query_tokens, query_embs)
for r in results:
    print(f"Doc {r.doc_id}: score={r.score:.4f}")
    for qt, dt, sim in r.token_matches[:3]:
        print(f"  '{qt}' ↔ '{dt}': {sim:.3f}")
```

---

## 13.3 Advanced Retrieval Strategies

### HyDE (Hypothetical Document Embedding)

```python
class HyDERetriever:
    """
    HyDE: Generate a hypothetical document that answers the query,
    then embed that document and search. Bridges the query-document gap.
    """

    def generate_hypothetical(self, query: str) -> str:
        """Generate a document that would ideally answer this query."""
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "Write a short passage that answers the user's question in a factual, document-like style."},
                {"role": "user", "content": query}
            ],
            max_tokens=200
        )
        return response.choices[0].message.content

    def search(self, query: str, top_k: int = 5) -> list[str]:
        """Search using HyDE: query → hypothetical doc → embed → search."""
        hypothetical = self.generate_hypothetical(query)
        hyde_embedding = client.embeddings.create(
            input=hypothetical,
            model="text-embedding-3-large"  # Using larger model for HyDE
        ).data[0].embedding

        results = chroma_collection.query(
            query_embeddings=[hyde_embedding],
            n_results=top_k
        )
        return results["documents"][0]

# Query expansion
def expand_query(query: str, n_queries: int = 3) -> list[str]:
    """Generate multiple query variations to improve recall."""
    response = client.beta.chat.completions.parse(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": f"Generate {n_queries} distinct search queries that explore different aspects of the user's question."},
            {"role": "user", "content": query}
        ],
        response_format=type("Queries", (BaseModel,), {"queries": list[str]})
    )
    return [query] + response.choices[0].message.parsed.queries

def multi_query_search(query: str, top_k: int = 5) -> list[str]:
    """Search with multiple query variations and merge results."""
    queries = expand_query(query)

    all_docs = []
    seen = set()

    for q in queries:
        q_vec = client.embeddings.create(input=q, model="text-embedding-3-small").data[0].embedding
        results = chroma_collection.query(query_embeddings=[q_vec], n_results=top_k)

        for doc in results["documents"][0]:
            doc_hash = hash(doc[:100])
            if doc_hash not in seen:
                seen.add(doc_hash)
                all_docs.append(doc)

    return all_docs[:top_k]
```

---

## 13.4 Re-Ranking Deep-Dive

### Cross-Encoder Re-Ranker

```python
from sentence_transformers import CrossEncoder

class ReRanker:
    """
    Cross-encoder re-ranker: scores each (query, document) pair directly.
    More accurate than bi-encoder (cosine similarity) but slower.
    """

    def __init__(self, model_name: str = "cross-encoder/ms-marco-MiniLM-L-6-v2"):
        self.model = CrossEncoder(model_name, max_length=512)
        self.model_name = model_name

    def rerank(self, query: str, documents: list[str], top_k: int = 5) -> list[tuple[str, float]]:
        """Score and re-rank documents."""
        pairs = [[query, doc[:500]] for doc in documents]
        scores = self.model.predict(pairs)

        scored = list(zip(documents, scores))
        scored.sort(key=lambda x: x[1], reverse=True)

        return scored[:top_k]

# LLM-based re-ranker (when you can't run a local model)
class LLMReranker:
    """Use an LLM to re-rank by scoring relevance directly."""

    def rerank(self, query: str, documents: list[str], top_k: int = 5) -> list[tuple[str, float]]:
        """Ask LLM to score each document's relevance to the query."""
        scored = []
        for doc in documents[:10]:  # Only re-rank top-10 (LLM is expensive)
            response = client.beta.chat.completions.parse(
                model="gpt-4o-mini",
                messages=[
                    {"role": "system", "content": "Score the relevance of the document to the query from 0.0 (irrelevant) to 1.0 (perfect match)."},
                    {"role": "user", "content": f"Query: {query}\n\nDocument: {doc[:500]}"}
                ],
                response_format=type("Relevance", (BaseModel,), {"score": float, "reasoning": str})
            )
            result = response.choices[0].message.parsed
            scored.append((doc, result.score))

        scored.sort(key=lambda x: x[1], reverse=True)
        return scored[:top_k]

# Evaluation: NDCG@K
import math

def ndcg_at_k(retrieved: list[str], relevant: set[str], k: int = 10) -> float:
    """Normalized Discounted Cumulative Gain @ K."""
    dcg = 0.0
    for i, doc in enumerate(retrieved[:k]):
        if doc in relevant:
            dcg += 1 / math.log2(i + 2)  # 2-based log (i+2 because 0-indexed)

    # Ideal DCG (all relevant at top)
    ideal_relevant = min(k, len(relevant))
    idcg = sum(1 / math.log2(i + 2) for i in range(ideal_relevant))

    return dcg / idcg if idcg > 0 else 0.0

# Example: compare retrieval with and without re-ranking
def compare_retrieval_methods(query: str, relevant_docs: set[str]) -> dict:
    """Compare vanilla vector search vs re-ranked search."""
    q_vec = client.embeddings.create(input=query, model="text-embedding-3-small").data[0].embedding
    raw_results = chroma_collection.query(query_embeddings=[q_vec], n_results=20)
    raw_docs = raw_results["documents"][0]

    # Without re-ranking
    ndcg_raw = ndcg_at_k(raw_docs[:10], relevant_docs)

    # With re-ranking
    reranker = ReRanker()
    reranked = reranker.rerank(query, raw_docs, top_k=10)
    reranked_docs = [d for d, s in reranked]
    ndcg_reranked = ndcg_at_k(reranked_docs, relevant_docs)

    return {
        "ndcg_raw": round(ndcg_raw, 4),
        "ndcg_reranked": round(ndcg_reranked, 4),
        "improvement": f"{(ndcg_reranked - ndcg_raw) / ndcg_raw * 100:.1f}%" if ndcg_raw > 0 else "N/A"
    }
```

---

## 13.5 HNSW Index Tuning

```python
class HNSWTuner:
    """
    Tune HNSW index parameters for your specific dataset and latency requirements.
    """

    def __init__(self):
        self.results: list[dict] = []

    def test_config(
        self,
        M: int,
        ef_construction: int,
        ef_search: int,
        queries: list[str],
        ground_truth: dict[str, list[str]],
    ) -> dict:
        """Test a specific HNSW configuration and return metrics."""
        # Create index with these parameters
        # In ChromaDB: collection.modify() doesn't expose HNSW params directly
        # In Qdrant: you can set them at collection creation
        # In pgvector: SET hnsw.ef_search = value;
        # This is a simulation for learning purposes

        latencies = []
        recall_at_10 = []

        for query in queries:
            t0 = time.time()
            q_vec = client.embeddings.create(input=query, model="text-embedding-3-small").data[0].embedding
            results = chroma_collection.query(query_embeddings=[q_vec], n_results=10)
            latency = (time.time() - t0) * 1000
            latencies.append(latency)

            # Check recall
            relevant = set(ground_truth.get(query, []))
            retrieved = set(results["ids"][0])
            if relevant:
                recall_at_10.append(len(retrieved & relevant) / len(relevant))

        return {
            "config": {"M": M, "ef_construction": ef_construction, "ef_search": ef_search},
            "avg_latency_ms": round(np.mean(latencies), 1),
            "p95_latency_ms": round(np.percentile(latencies, 95), 1),
            "avg_recall": round(np.mean(recall_at_10), 4) if recall_at_10 else 0,
            "latency_overhead": round(np.mean(latencies) / 50, 2),  # Compared to flat baseline
        }

    def tuner_guide(self) -> dict:
        """Return guidance on HNSW parameter tuning."""
        return {
            "M (neighbors per node)": {
                "range": "8-64",
                "default": 16,
                "higher": "Better recall, more memory, slower indexing",
                "lower": "Less memory, faster indexing, lower recall",
                "memory_formula": "M * 4 bytes per edge * num_elements",
                "recommendation": "16-32 for most datasets under 1M vectors; 32-48 for > 1M"
            },
            "ef_construction (build-time search width)": {
                "range": "100-500",
                "default": 200,
                "higher": "Higher recall at build time, slower index build",
                "lower": "Faster build, potentially lower quality",
                "recommendation": "200-400 — diminishing returns above 400"
            },
            "ef_search (query-time search width)": {
                "range": "1-2000 (but typically 50-500)",
                "default": 50,
                "higher": "Higher recall at query time, slower queries",
                "lower": "Faster queries, lower recall",
                "recommendation": "Start at ef_search = top_k * 10, tune from there"
            },
            "tuning_workflow": [
                "1. Set ef_construction = 200, M = 16 (conservative start)",
                "2. Build index, measure recall on validation set",
                "3. If recall < 0.95, increase M (16 → 24 → 32)",
                "4. If latency > target, decrease ef_search (500 → 200 → 100)",
                "5. If recall still low and M is already 48, increase ef_construction to 400",
                "6. Final check: measure P95 latency and recall on holdout set"
            ],
            "performance_tradeoffs": {
                "flat_search": {"latency_ms": 500, "recall": 1.0, "memory": "Lowest"},
                "hnsw_m16_ef100": {"latency_ms": 20, "recall": 0.95, "memory": "Low"},
                "hnsw_m32_ef200": {"latency_ms": 50, "recall": 0.98, "memory": "Medium"},
                "hnsw_m48_ef500": {"latency_ms": 120, "recall": 0.995, "memory": "High"},
            }
        }

tuner = HNSWTuner()
print(json.dumps(tuner.tuner_guide(), indent=2))
```

---

## 13.6 Metadata Filtering & Hybrid Queries

```python
class FilteredSearch:
    """Vector search with metadata filters and hybrid queries."""

    def search(
        self,
        query_vector: list[float],
        filters: dict | None = None,
        top_k: int = 10,
    ) -> list[dict]:
        """Search with metadata filters (pre-filtering)."""
        # Build ChromaDB filter expression
        where_filter = None
        if filters:
            conditions = []
            for key, value in filters.items():
                if isinstance(value, dict):
                    conditions.append({key: value})  # e.g., {"price": {"$gte": 20000}}
                elif isinstance(value, list):
                    conditions.append({key: {"$in": value}})
                else:
                    conditions.append({key: {"$eq": value}})

            where_filter = {"$and": conditions} if len(conditions) > 1 else conditions[0]

        results = chroma_collection.query(
            query_embeddings=[query_vector],
            n_results=top_k,
            where=where_filter,
        )

        return [
            {
                "id": results["ids"][0][i],
                "content": results["documents"][0][i],
                "metadata": results["metadatas"][0][i] if results["metadatas"] else {},
                "distance": results["distances"][0][i] if results["distances"] else 0,
            }
            for i in range(len(results["ids"][0]))
        ]

# Complex filter examples
FILTER_EXAMPLES = {
    "exact_match": {"city": "Dubai"},
    "range": {"price": {"$gte": 20000, "$lte": 50000}},
    "in_list": {"property_type": {"$in": ["apartment", "villa"]}},
    "composite": {
        "$and": [
            {"city": {"$eq": "Dubai"}},
            {"price": {"$lte": 50000}},
            {"bedrooms": {"$gte": 2}},
        ]
    },
    "with_null_check": {
        "$or": [
            {"available_from": {"$eq": None}},
            {"available_from": {"$lte": "2026-07-01"}},
        ]
    },
}

# Usage
searcher = FilteredSearch()
query = "apartment in Dubai under 50000 AED"
q_vec = client.embeddings.create(input=query, model="text-embedding-3-small").data[0].embedding

results = searcher.search(q_vec, filters={
    "property_type": {"$in": ["apartment"]},
    "price": {"$lte": 50000},
}, top_k=5)

for r in results:
    meta = r["metadata"]
    print(f"{meta.get('title', '?')} — {meta.get('price', '?')} AED — distance: {r['distance']:.4f}")
```

---

## 13.7 Vector Quantization

```python
import numpy as np
from typing import NamedTuple

class QuantizedVector(NamedTuple):
    codes: np.ndarray       # Compressed representation
    centroids: np.ndarray   # Codebook
    original_dims: int
    n_subvectors: int

class ProductQuantizer:
    """
    Product Quantization (PQ): split vectors into subvectors,
    quantize each subvector independently. Reduces memory by 75-95%.
    """

    def __init__(self, n_subvectors: int = 8, n_centroids: int = 256):
        self.M = n_subvectors  # Number of subvectors
        self.K = n_centroids   # Centroids per subvector (256 = 8 bits)
        self.codebooks: list[np.ndarray] = []
        self.D: int = 0  # Original dimensionality

    def fit(self, vectors: np.ndarray):
        """Learn codebook from training vectors."""
        self.D = vectors.shape[1]
        assert self.D % self.M == 0, f"D={self.D} must be divisible by M={self.M}"

        sub_dim = self.D // self.M
        self.codebooks = []

        for m in range(self.M):
            subvectors = vectors[:, m * sub_dim:(m + 1) * sub_dim]
            # K-means clustering (simplified — use sklearn in production)
            centroids = subvectors[:self.K]  # Initialize with first K vectors
            for _ in range(20):  # Simple k-means iterations
                distances = np.linalg.norm(subvectors[:, None, :] - centroids[None, :, :], axis=2)
                assignments = distances.argmin(axis=1)
                for k in range(self.K):
                    mask = assignments == k
                    if mask.any():
                        centroids[k] = subvectors[mask].mean(axis=0)
            self.codebooks.append(centroids)

    def encode(self, vectors: np.ndarray) -> np.ndarray:
        """Encode vectors to compact codes."""
        sub_dim = self.D // self.M
        codes = np.zeros((vectors.shape[0], self.M), dtype=np.uint8)

        for m in range(self.M):
            subvectors = vectors[:, m * sub_dim:(m + 1) * sub_dim]
            distances = np.linalg.norm(subvectors[:, None, :] - self.codebooks[m][None, :, :], axis=2)
            codes[:, m] = distances.argmin(axis=1)

        return codes

    def memory_savings(self, n_vectors: int) -> dict:
        """Calculate memory savings."""
        original_bytes = n_vectors * self.D * 4  # float32
        quantized_bytes = n_vectors * self.M  # uint8
        codebook_bytes = sum(cb.nbytes for cb in self.codebooks)

        return {
            "original_mb": round(original_bytes / 1e6, 2),
            "quantized_mb": round((quantized_bytes + codebook_bytes) / 1e6, 2),
            "compression_ratio": f"{original_bytes / (quantized_bytes + codebook_bytes):.1f}x",
            "savings_pct": f"{(1 - (quantized_bytes + codebook_bytes) / original_bytes) * 100:.0f}%"
        }

# Scalar Quantization (SQ)
class ScalarQuantizer:
    """Convert float32 vectors to uint8 with min-max scaling. 4x memory reduction."""

    def __init__(self):
        self.mins: np.ndarray | None = None
        self.maxs: np.ndarray | None = None

    def fit(self, vectors: np.ndarray):
        self.mins = vectors.min(axis=0)
        self.maxs = vectors.max(axis=0)

    def encode(self, vectors: np.ndarray) -> np.ndarray:
        scaled = (vectors - self.mins) / (self.maxs - self.mins + 1e-10)
        return (scaled * 255).astype(np.uint8)

    def decode(self, codes: np.ndarray) -> np.ndarray:
        scaled = codes.astype(np.float32) / 255.0
        return scaled * (self.maxs - self.mins) + self.mins

# Usage
dimension = 1536
vectors = np.random.randn(1000, dimension).astype(np.float32)

pq = ProductQuantizer(n_subvectors=16, n_centroids=256)
pq.fit(vectors)
print(f"Memory: {json.dumps(pq.memory_savings(vectors.shape[0]))}")

sq = ScalarQuantizer()
sq.fit(vectors)
compressed = sq.encode(vectors[:5])
restored = sq.decode(compressed)
mse = np.mean((vectors[:5] - restored) ** 2)
print(f"SQ MSE: {mse:.6f}")
```

---

## 13.8 Multi-Modal RAG

```python
from PIL import Image
import base64
from io import BytesIO

class MultiModalRAG:
    """
    RAG pipeline that searches across text and images.
    Uses CLIP-style embeddings for cross-modal retrieval.
    """

    def __init__(self):
        self.text_collection = chroma_client.get_or_create_collection("text_docs")
        self.image_collection = chroma_client.get_or_create_collection("image_embeddings")

    def embed_image(self, image_path: str) -> list[float]:
        """Embed image using vision-language model."""
        with open(image_path, "rb") as f:
            image_b64 = base64.b64encode(f.read()).decode()

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "user", "content": [
                    {"type": "text", "text": "Describe this image in detail for search indexing."},
                    {"type": "image_url", "image_url": {"url": f"data:image/png;base64,{image_b64}"}}
                ]}
            ],
            max_tokens=100
        )
        description = response.choices[0].message.content

        # Embed the description
        embedding = client.embeddings.create(
            input=description,
            model="text-embedding-3-small"
        ).data[0].embedding

        return embedding, description

    def search(
        self,
        query: str,
        search_images: bool = True,
        search_text: bool = True,
        top_k: int = 5,
    ) -> list[dict]:
        """Search across text and image collections."""
        q_vec = client.embeddings.create(input=query, model="text-embedding-3-small").data[0].embedding
        results = []

        if search_text:
            text_results = self.text_collection.query(
                query_embeddings=[q_vec],
                n_results=top_k
            )
            for i in range(len(text_results["ids"][0])):
                results.append({
                    "type": "text",
                    "content": text_results["documents"][0][i],
                    "metadata": text_results["metadatas"][0][i] if text_results["metadatas"] else {},
                    "score": 1 - text_results["distances"][0][i] if text_results["distances"] else 0,
                })

        if search_images:
            image_results = self.image_collection.query(
                query_embeddings=[q_vec],
                n_results=top_k
            )
            for i in range(len(image_results["ids"][0])):
                results.append({
                    "type": "image",
                    "content": image_results["documents"][0][i],
                    "metadata": image_results["metadatas"][0][i] if image_results["metadatas"] else {},
                    "score": 1 - image_results["distances"][0][i] if image_results["distances"] else 0,
                })

        results.sort(key=lambda x: x["score"], reverse=True)
        return results[:top_k]

# Multi-modal generation
def generate_with_images(query: str, text_context: str, image_paths: list[str]) -> str:
    """Generate response with both text context and image references."""
    image_contents = []
    for path in image_paths:
        with open(path, "rb") as f:
            image_b64 = base64.b64encode(f.read()).decode()
            image_contents.append({
                "type": "image_url",
                "image_url": {"url": f"data:image/png;base64,{image_b64}"}
            })

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Answer using the provided text context and images."},
            {"role": "user", "content": [
                {"type": "text", "text": f"Context:\n{text_context}\n\nQuery: {query}"},
                *image_contents
            ]}
        ]
    )
    return response.choices[0].message.content
```

---

## 13.9 Graph RAG

```python
class GraphRAG:
    """
    Combine knowledge graph traversal with vector search.
    Find entities via vector search, then traverse relationships.
    """

    def __init__(self):
        self.graph: dict[str, dict] = {}  # entity_id -> {properties, relationships}

    def add_entity(self, entity_id: str, properties: dict, relationships: list[tuple[str, str, str]]):
        """Add entity with typed relationships: (target_id, relation_type, label)."""
        self.graph[entity_id] = {
            "properties": properties,
            "relationships": relationships,
        }

    def vector_search_entities(self, query: str, top_k: int = 5) -> list[str]:
        """Find entities via vector search on their text representation."""
        q_vec = client.embeddings.create(input=query, model="text-embedding-3-small").data[0].embedding

        entity_texts = []
        entity_ids = []
        for eid, data in self.graph.items():
            entity_texts.append(" ".join(str(v) for v in data["properties"].values()))
            entity_ids.append(eid)

        # Simple embedding-based search
        entity_embeddings = []
        for text in entity_texts:
            emb = client.embeddings.create(input=text, model="text-embedding-3-small").data[0].embedding
            entity_embeddings.append(emb)

        similarities = cosine_similarity([q_vec], entity_embeddings)[0]
        top_indices = np.argsort(similarities)[-top_k:][::-1]

        return [entity_ids[i] for i in top_indices]

    def traverse(self, start_entities: list[str], max_depth: int = 2) -> dict:
        """BFS traversal from starting entities."""
        visited: dict[str, int] = {eid: 0 for eid in start_entities}
        queue = [(eid, 0) for eid in start_entities]
        relations = []

        while queue:
            current, depth = queue.pop(0)
            if depth >= max_depth:
                continue

            if current not in self.graph:
                continue

            for target, rel_type, label in self.graph[current]["relationships"]:
                relations.append({
                    "from": current,
                    "to": target,
                    "type": rel_type,
                    "label": label
                })
                if target not in visited:
                    visited[target] = depth + 1
                    queue.append((target, depth + 1))

        return {
            "entities": {eid: self.graph.get(eid, {}).get("properties", {}) for eid in visited},
            "relationships": relations,
        }

    def hybrid_search(self, query: str, top_k: int = 5) -> dict:
        """Vector search entities → traverse → return enriched results."""
        seed_entities = self.vector_search_entities(query, top_k=3)
        graph_context = self.traverse(seed_entities, max_depth=2)

        # Build enriched context for LLM
        context_parts = ["Related entities found:", ""]
        for eid, props in graph_context["entities"].items():
            context_parts.append(f"- {props.get('name', eid)}: {props.get('description', '')}")

        context_parts.append("")
        context_parts.append("Relationships:")
        for rel in graph_context["relationships"][:10]:
            context_parts.append(f"- {rel['from']} --[{rel['type']}]--> {rel['to']}")

        return {
            "graph_context": "\n".join(context_parts),
            "entities": graph_context["entities"],
            "relationships": graph_context["relationships"],
        }
```

---

## 13.10 Streaming Ingestion & Real-Time Updates

```python
import asyncio
from datetime import datetime

class StreamingIngestion:
    """
    Real-time document ingestion with < 5 second index latency.
    Uses async processing with batch embedding.
    """

    def __init__(self, batch_size: int = 10, flush_interval_seconds: int = 2):
        self.batch_size = batch_size
        self.flush_interval = flush_interval_seconds
        self.buffer: list[dict] = []
        self.last_flush = datetime.now()
        self.total_indexed = 0

    async def ingest(self, document: dict):
        """Add document to buffer for batch indexing."""
        self.buffer.append(document)

        if len(self.buffer) >= self.batch_size:
            await self.flush()
        elif (datetime.now() - self.last_flush).seconds >= self.flush_interval:
            await self.flush()

    async def flush(self):
        """Embed and index all buffered documents."""
        if not self.buffer:
            return

        texts = [d["content"] for d in self.buffer]
        embeddings_list = await self._embed_batch(texts)

        for doc, embedding in zip(self.buffer, embeddings_list):
            chroma_collection.add(
                documents=[doc["content"]],
                embeddings=[embedding],
                metadatas=[{
                    **doc.get("metadata", {}),
                    "indexed_at": datetime.now().isoformat(),
                    "source": doc.get("source", "stream"),
                }]
            )

        self.total_indexed += len(self.buffer)
        self.buffer = []
        self.last_flush = datetime.now()

    async def _embed_batch(self, texts: list[str]) -> list[list[float]]:
        """Batch embed texts asynchronously."""
        loop = asyncio.get_event_loop()
        response = await loop.run_in_executor(
            None,
            lambda: client.embeddings.create(
                input=texts,
                model="text-embedding-3-small"
            )
        )
        return [d.embedding for d in response.data]

    async def delete_document(self, doc_id: str):
        """Remove a document from the index by ID."""
        chroma_collection.delete(where={"doc_id": doc_id})

    async def update_document(self, doc_id: str, new_content: str, metadata: dict | None = None):
        """Update a document in-place (delete + re-index)."""
        await self.delete_document(doc_id)
        await self.ingest({
            "content": new_content,
            "metadata": {"doc_id": doc_id, **(metadata or {})},
            "source": "update"
        })

    def get_stats(self) -> dict:
        return {
            "total_indexed": self.total_indexed,
            "buffer_size": len(self.buffer),
            "last_flush": self.last_flush.isoformat(),
        }

# Usage
async def run_ingestion():
    ingestor = StreamingIngestion(batch_size=5, flush_interval_seconds=3)

    # Simulate real-time document stream
    for i in range(20):
        await ingestor.ingest({
            "content": f"Document {i}: Lease terms in Dubai...",
            "metadata": {"doc_id": f"doc_{i}", "source": "webhook"},
            "source": "webhook"
        })
        await asyncio.sleep(0.5)

    # Force flush remaining
    await ingestor.flush()
    print(f"Indexed: {ingestor.get_stats()}")
```

---

## 13.11 Vector DB Comparison

| Feature | ChromaDB | Qdrant | pgvector | Pinecone |
|---------|----------|--------|----------|----------|
| **Setup** | pip install, run locally | Docker container | Postgres extension | SaaS, API key |
| **Persistence** | Embedded (single process) | Server + disk | Postgres tables | Serverless pods |
| **Scaling** | Single node | Horizontal sharding | Postgres scaling | Auto-scaling |
| **HNSW params** | Limited control | Full control | `SET hnsw.ef_search` | Managed |
| **Filtering** | Basic where clauses | Rich filters + payload | SQL WHERE | Metadata filters |
| **Hybrid search** | Not natively | `should` + `must` queries | BM25 via tsvector | Not natively |
| **Quantization** | Not built-in | Scalar + Product PQ | IVFFlat only | Built-in |
| **Multi-tenancy** | Per-collection | Payload filtering | Row-level security | Namespaces |
| **Client libraries** | Python, JS | Python, Rust, Go, JS | SQL (any Postgres client) | Python, JS, Go, Java |
| **Best for** | Dev/ prototyping, small-medium | Production, large scale | You already use Postgres | Managed, zero ops |

### Migration Strategy

```python
class VectorDBMigrator:
    """Migrate vectors between different vector databases."""

    def __init__(self):
        self.batch_size = 100

    def export_from_chromadb(self, collection_name: str) -> list[dict]:
        """Export all vectors from ChromaDB."""
        collection = chroma_client.get_collection(collection_name)
        count = collection.count()

        all_data = []
        offset = 0
        while offset < count:
            results = collection.get(limit=self.batch_size, offset=offset)
            for i in range(len(results["ids"])):
                all_data.append({
                    "id": results["ids"][i],
                    "embedding": results["embeddings"][i],
                    "document": results["documents"][i],
                    "metadata": results["metadatas"][i] if results["metadatas"] else {},
                })
            offset += self.batch_size

        return all_data

    def import_to_qdrant(self, data: list[dict], collection_name: str):
        """Import into Qdrant."""
        from qdrant_client import QdrantClient
        from qdrant_client.models import PointStruct, VectorParams, Distance

        client = QdrantClient(host="localhost", port=6333)

        # Recreate collection
        client.recreate_collection(
            collection_name=collection_name,
            vectors_config=VectorParams(
                size=len(data[0]["embedding"]),
                distance=Distance.COSINE,
            ),
        )

        # Batch upload
        for i in range(0, len(data), self.batch_size):
            batch = data[i:i + self.batch_size]
            points = [
                PointStruct(
                    id=hash(item["id"]) % (2**63),
                    vector=item["embedding"],
                    payload={"text": item["document"], **item["metadata"]}
                )
                for item in batch
            ]
            client.upsert(collection_name=collection_name, points=points)

        return len(data)

    def verify_migration(self, chroma_collection: str, qdrant_collection: str, n_queries: int = 10) -> dict:
        """Verify migration by comparing search results."""
        from qdrant_client import QdrantClient

        qdrant = QdrantClient(host="localhost", port=6333)
        chroma_coll = chroma_client.get_collection(chroma_collection)

        matches = 0
        test_queries = ["test", "lease terms", "Dubai", "apartment", "rent"]

        for query in test_queries:
            q_vec = client.embeddings.create(input=query, model="text-embedding-3-small").data[0].embedding

            # ChromaDB results
            chroma_result = chroma_coll.query(query_embeddings=[q_vec], n_results=5)
            chroma_ids = set(chroma_result["ids"][0])

            # Qdrant results
            qdrant_result = qdrant.search(
                collection_name=qdrant_collection,
                query_vector=q_vec,
                limit=5
            )
            qdrant_ids = set(str(r.id) for r in qdrant_result)

            overlap = len(chroma_ids & qdrant_ids)
            matches += overlap

        return {
            "test_queries": len(test_queries),
            "total_overlap": matches,
            "avg_overlap_per_query": round(matches / len(test_queries), 1),
            "max_possible": len(test_queries) * 5,
        }
```

---

## Exercises

1. **Hybrid search**: Implement hybrid search (BM25 + dense vector + RRF) on your RAG pipeline. Measure recall@10 improvement over pure vector search.

2. **HNSW tuning**: Create a test dataset of 10K vectors. Tune HNSW parameters (M, ef_construction, ef_search) to minimize latency while maintaining >0.95 recall.

3. **Re-ranker deployment**: Add a cross-encoder re-ranker to your RAG pipeline. Measure NDCG@10 improvement and the latency cost.

4. **Multi-modal search**: Add image search to your RAG pipeline. Index 20+ images and test with text queries that should match image content.

5. **Vector DB migration**: Export your ChromaDB vectors, import into Qdrant (or pgvector), and verify migration accuracy with 10 test queries.
