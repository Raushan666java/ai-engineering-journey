# Hybrid Search and Reranking

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand hybrid search architecture combining sparse and dense retrieval |
| LO2 | Implement score normalization and fusion strategies (RRF, weighted, rank-based) |
| LO3 | Design reranking systems using cross-encoders and LLM-based scorers |
| LO4 | Apply ColBERT-style late interaction for efficient reranking |
| LO5 | Optimize hybrid search for production latency and accuracy trade-offs |

## Introduction

Understanding hybrid search and reranking is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering hybrid search and reranking.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding hybrid search and reranking is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how hybrid search and reranking works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind hybrid search and reranking
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 10.1 | Hybrid Search | Combining sparse and dense signals for robust retrieval |
| 10.2 | Score Normalization | Min-max, z-score, quantile normalization across systems |
| 10.3 | Fusion Strategies | RRF, weighted linear, Borda count, rank-based |
| 10.4 | Cross-Encoder Reranking | Bi-encoder first pass, cross-encoder refinement |
| 10.5 | LLM-Based Reranking | Pointwise, pairwise, listwise approaches |
| 10.6 | Production Optimization | Caching, pruning, latency budgets |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Query] --> B[Sparse Retriever]
    A --> C[Dense Retriever]
    B --> D[Score Normalizer]
    C --> D
    D --> E[Fusion Engine]
    E --> F[Top-K Candidates]
    F --> G[Reranker]
    G --> H[Final Ranking]
```text

## 10.1 Hybrid Search

Hybrid search combines keyword-based (sparse) and semantic (dense) retrieval to overcome each method's limitations.

### Why Hybrid?

**Sparse** excels at exact term matching, rare terms, and domains with specific vocabulary.
**Dense** excels at semantic matching, synonyms, and conceptual queries.
**Hybrid** captures both term-precision and semantic-recall.

```python
from typing import List, Dict, Tuple, Callable
import numpy as np
from collections import defaultdict
import json


class HybridSearch:
    def __init__(self, sparse_retriever, dense_retriever, fusion_strategy="rrf"):
        self.sparse = sparse_retriever
        self.dense = dense_retriever
        self.fusion_strategy = fusion_strategy

    def search(self, query: str, top_k: int = 10) -> List[Dict]:
        sparse_results = self.sparse.search(query, top_k * 2)
        dense_results = self.dense.search(query, top_k * 2)

        if self.fusion_strategy == "rrf":
            return self._rrf_fuse(sparse_results, dense_results, top_k)
        elif self.fusion_strategy == "weighted":
            return self._weighted_fuse(sparse_results, dense_results, top_k)
        elif self.fusion_strategy == "rank":
            return self._rank_fuse(sparse_results, dense_results, top_k)
        return sparse_results[:top_k]

    def _rrf_fuse(self, sparse, dense, top_k: int, k_constant: int = 60) -> List[Dict]:
        scores = defaultdict(float)
        for rank, doc in enumerate(sparse, 1):
            scores[doc["id"]] += 1.0 / (k_constant + rank)
        for rank, doc in enumerate(dense, 1):
            scores[doc["id"]] += 1.0 / (k_constant + rank)

        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)
        return [{"id": doc_id, "score": score, "method": "rrf"} for doc_id, score in sorted_docs[:top_k]]

    def _weighted_fuse(self, sparse, dense, top_k: int, w_sparse: float = 0.3, w_dense: float = 0.7) -> List[Dict]:
        sparse_scores = self._normalize_minmax({d["id"]: d["score"] for d in sparse})
        dense_scores = self._normalize_minmax({d["id"]: d["score"] for d in dense})

        combined = defaultdict(float)
        for doc_id in set(list(sparse_scores.keys()) + list(dense_scores.keys())):
            combined[doc_id] = sparse_scores.get(doc_id, 0) * w_sparse + dense_scores.get(doc_id, 0) * w_dense

        sorted_docs = sorted(combined.items(), key=lambda x: x[1], reverse=True)
        return [{"id": doc_id, "score": score, "method": "weighted"} for doc_id, score in sorted_docs[:top_k]]

    def _rank_fuse(self, sparse, dense, top_k: int) -> List[Dict]:
        scores = defaultdict(int)
        for rank, doc in enumerate(sparse, 1):
            scores[doc["id"]] += len(sparse) - rank
        for rank, doc in enumerate(dense, 1):
            scores[doc["id"]] += len(dense) - rank

        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)
        return [{"id": doc_id, "score": score, "method": "rank"} for doc_id, score in sorted_docs[:top_k]]

    def _normalize_minmax(self, scores: Dict[str, float]) -> Dict[str, float]:
        if not scores:
            return {}
        min_s = min(scores.values())
        max_s = max(scores.values())
        range_s = max_s - min_s if max_s > min_s else 1.0
        return {k: (v - min_s) / range_s for k, v in scores.items()}


class MockSparseRetriever:
    def search(self, query: str, top_k: int) -> List[Dict]:
        return [{"id": f"sparse-{i}", "score": 1.0 - i * 0.1, "text": f"Sparse result {i}"} for i in range(top_k)]


class MockDenseRetriever:
    def search(self, query: str, top_k: int) -> List[Dict]:
        return [{"id": f"dense-{i}", "score": 0.95 - i * 0.05, "text": f"Dense result {i}"} for i in range(top_k)]


hybrid = HybridSearch(MockSparseRetriever(), MockDenseRetriever(), "rrf")
results = hybrid.search("What is RAG?", top_k=5)
for r in results:
    print(f"  {r['id']}: score={r['score']:.4f}")
```text

## 10.2 Score Normalization

Different retrieval systems produce scores in different ranges. Normalization enables fair comparison.

### 10.2.1 Min-Max Normalization

```python
def minmax_normalize(scores: Dict[str, float]) -> Dict[str, float]:
    if not scores:
        return {}
    min_s = min(scores.values())
    max_s = max(scores.values())
    range_s = max_s - min_s if max_s > min_s else 1.0
    return {k: (v - min_s) / range_s for k, v in scores.items()}


sparse_scores = {"doc1": 12.5, "doc2": 8.3, "doc3": 5.1}
dense_scores = {"doc1": 0.92, "doc4": 0.87, "doc5": 0.85}

print(f"Normalized sparse: {minmax_normalize(sparse_scores)}")
print(f"Normalized dense: {minmax_normalize(dense_scores)}")
```text

### 10.2.2 Z-Score Normalization

```python
def zscore_normalize(scores: Dict[str, float]) -> Dict[str, float]:
    if len(scores) < 2:
        return minmax_normalize(scores)
    values = list(scores.values())
    mean = np.mean(values)
    std = np.std(values)
    if std == 0:
        return {k: 0.5 for k in scores}
    return {k: (v - mean) / std for k, v in scores.items()}


scores = {"doc1": 0.9, "doc2": 0.7, "doc3": 0.5, "doc4": 0.3, "doc5": 0.1}
print(f"Z-score normalized: {zscore_normalize(scores)}")
```text

### 10.2.3 Quantile Normalization

```python
def quantile_normalize(scores: Dict[str, float]) -> Dict[str, float]:
    items = sorted(scores.items(), key=lambda x: x[1])
    n = len(items)
    for rank, (key, _) in enumerate(items, 1):
        scores[key] = rank / n
    return scores


print(f"Quantile normalized: {quantile_normalize(scores)}")
```text

### 10.2.4 Normalizer Pipeline

```python
class ScoreNormalizer:
    def __init__(self, method: str = "minmax"):
        self.method = method

    def normalize(self, scores: Dict[str, float]) -> Dict[str, float]:
        if self.method == "minmax":
            return minmax_normalize(scores)
        elif self.method == "zscore":
            return zscore_normalize(scores)
        elif self.method == "quantile":
            return quantile_normalize(scores)
        elif self.method == "softmax":
            return self._softmax_normalize(scores)
        return scores

    def _softmax_normalize(self, scores: Dict[str, float], temperature: float = 1.0) -> Dict[str, float]:
        if not scores:
            return {}
        values = np.array(list(scores.values())) / temperature
        exp = np.exp(values - np.max(values))
        softmax = exp / exp.sum()
        return dict(zip(scores.keys(), softmax))

    def normalize_systems(self, systems_scores: List[Dict[str, float]]) -> List[Dict[str, float]]:
        return [self.normalize(s) for s in systems_scores]


normalizer = ScoreNormalizer("softmax")
print(normalizer.normalize(scores))
```text

## 10.3 Fusion Strategies

### 10.3.1 RRF Variants

```python
class RRFFusion:
    def __init__(self, k_constant: int = 60):
        self.k = k_constant

    def fuse(self, rankings: List[List[Dict]]) -> List[Dict]:
        scores = defaultdict(float)
        for system_ranking in rankings:
            for rank, doc in enumerate(system_ranking, 1):
                scores[doc["id"]] += 1.0 / (self.k + rank)

        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)
        return [{"id": doc_id, "score": score} for doc_id, score in sorted_docs]

    def fuse_with_weights(self, rankings: List[Tuple[List[Dict], float]]) -> List[Dict]:
        scores = defaultdict(float)
        for system_ranking, weight in rankings:
            for rank, doc in enumerate(system_ranking, 1):
                scores[doc["id"]] += weight / (self.k + rank)

        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)
        return [{"id": doc_id, "score": score} for doc_id, score in sorted_docs]


rrf = RRFFusion(k=60)
sparse_ranking = [{"id": "a"}, {"id": "b"}, {"id": "c"}]
dense_ranking = [{"id": "b"}, {"id": "d"}, {"id": "a"}]
results = rrf.fuse([sparse_ranking, dense_ranking])
for r in results:
    print(f"RRF: {r['id']} -> {r['score']:.4f}")
```text

### 10.3.2 Borda Count

```python
class BordaCountFusion:
    def fuse(self, rankings: List[List[Dict]]) -> List[Dict]:
        scores = defaultdict(int)
        n = len(rankings[0]) if rankings else 0

        for ranking in rankings:
            for rank, doc in enumerate(ranking, 1):
                scores[doc["id"]] += n - rank

        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)
        return [{"id": doc_id, "score": score / (n * len(rankings))} for doc_id, score in sorted_docs]


borda = BordaCountFusion()
results = borda.fuse([sparse_ranking, dense_ranking])
for r in results:
    print(f"Borda: {r['id']} -> {r['score']:.4f}")
```text

### 10.3.3 Reciprocal Rank with Decay

```python
class DecayedRRFusion:
    def __init__(self, k: int = 60, decay_factor: float = 0.95):
        self.k = k
        self.decay = decay_factor

    def fuse(self, rankings: List[List[Dict]]) -> List[Dict]:
        scores = defaultdict(float)
        for system_idx, ranking in enumerate(rankings):
            weight = self.decay ** system_idx
            for rank, doc in enumerate(ranking, 1):
                scores[doc["id"]] += weight / (self.k + rank)

        sorted_docs = sorted(scores.items(), key=lambda x: x[1], reverse=True)
        return [{"id": doc_id, "score": score} for doc_id, score in sorted_docs]


drrf = DecayedRRFusion(decay_factor=0.9)
results = drrf.fuse([sparse_ranking, dense_ranking, [{"id": "c"}, {"id": "e"}]])
print(f"Decayed RRF: {[r['id'] for r in results]}")
```text

### 10.3.4 Ensemble Ranking

```python
class EnsembleRanker:
    def __init__(self):
        self.fusion_methods = {
            "rrf": RRFFusion(),
            "borda": BordaCountFusion(),
            "weighted_rrf": RRFFusion(),
        }

    def fuse_all(self, rankings: List[List[Dict]], weights: List[float] = None) -> Dict[str, List[Dict]]:
        results = {}
        results["rrf"] = self.fusion_methods["rrf"].fuse(rankings)
        results["borda"] = self.fusion_methods["borda"].fuse(rankings)

        if weights:
            weighted_rankings = list(zip(rankings, weights))
            results["weighted_rrf"] = self.fusion_methods["weighted_rrf"].fuse_with_weights(weighted_rankings)

        return results

    def fused_score(self, results: Dict[str, List[Dict]], doc_id: str) -> float:
        score = 0.0
        for method, ranking in results.items():
            for rank, doc in enumerate(ranking, 1):
                if doc["id"] == doc_id:
                    score += 1.0 / rank
        return score


ensemble = EnsembleRanker()
results = ensemble.fuse_all([sparse_ranking, dense_ranking], weights=[0.3, 0.7])
for method, ranking in results.items():
    print(f"{method}: {[r['id'] for r in ranking[:3]]}")
```text

## 10.4 Cross-Encoder Reranking

Cross-encoders process query and document together for accurate relevance scoring.

### 10.4.1 Bi-Encoder First Pass

```python
class BiEncoder:
    def encode_query(self, query: str) -> np.ndarray:
        return mock_embedder(query)

    def encode_doc(self, doc: str) -> np.ndarray:
        return mock_embedder(doc)

    def score(self, query_emb: np.ndarray, doc_emb: np.ndarray) -> float:
        return float(np.dot(query_emb, doc_emb))


class CrossEncoder:
    def score(self, query: str, document: str) -> float:
        combined = f"{query} [SEP] {document}"
        emb = mock_embedder(combined)
        return float(emb[0])
```text

### 10.4.2 Two-Stage Reranker

```python
class TwoStageReranker:
    def __init__(self, bi_encoder: BiEncoder, cross_encoder: CrossEncoder, top_k_stage1: int = 50):
        self.bi = bi_encoder
        self.cross = cross_encoder
        self.top_k_stage1 = top_k_stage1

    def rerank(self, query: str, documents: List[Dict]) -> List[Dict]:
        query_emb = self.bi.encode_query(query)

        stage1_scores = []
        for doc in documents:
            doc_emb = self.bi.encode_doc(doc["text"])
            score = self.bi.score(query_emb, doc_emb)
            stage1_scores.append((doc, score))

        stage1_scores.sort(key=lambda x: x[1], reverse=True)
        candidates = [doc for doc, _ in stage1_scores[:self.top_k_stage1]]

        stage2_scores = []
        for doc in candidates:
            score = self.cross.score(query, doc["text"])
            stage2_scores.append({**doc, "score": score})

        stage2_scores.sort(key=lambda x: x["score"], reverse=True)
        return stage2_scores


bi_enc = BiEncoder()
cross_enc = CrossEncoder()
reranker = TwoStageReranker(bi_enc, cross_enc, top_k_stage1=3)

docs = [{"id": "1", "text": "RAG combines retrieval with generation"}, {"id": "2", "text": "Embeddings are vector representations"}, {"id": "3", "text": "BM25 is a keyword search algorithm"}]
results = reranker.rerank("retrieval methods", docs)
for r in results:
    print(f"Doc {r['id']}: score={r.get('score', 0):.4f}")
```text

### 10.4.3 ColBERT-Style Late Interaction

```python
class ColBERTReranker:
    def __init__(self):
        self.dimension = 128

    def encode(self, text: str) -> np.ndarray:
        num_tokens = max(3, len(text) // 5)
        rng = np.random.RandomState(hash(text) % (2**31))
        return rng.randn(num_tokens, self.dimension)

    def score(self, query_tokens: np.ndarray, doc_tokens: np.ndarray) -> float:
        sim_matrix = np.dot(query_tokens, doc_tokens.T)
        max_scores = np.max(sim_matrix, axis=1)
        return float(np.mean(max_scores))

    def rerank(self, query: str, documents: List[Dict]) -> List[Dict]:
        query_embs = self.encode(query)
        scored = []

        for doc in documents:
            doc_embs = self.encode(doc["text"])
            sim = self.score(query_embs, doc_embs)
            scored.append({**doc, "score": sim})

        scored.sort(key=lambda x: x["score"], reverse=True)
        return scored


colbert = ColBERTReranker()
results = colbert.rerank("retrieval methods", docs)
for r in results:
    print(f"ColBERT Doc {r['id']}: score={r['score']:.4f}")
```text

## 10.5 LLM-Based Reranking

### 10.5.1 Pointwise Scoring

```python
class PointwiseLLMReranker:
    def __init__(self, llm_fn):
        self.llm = llm_fn

    def score(self, query: str, document: str) -> int:
        prompt = f"""Rate the relevance of this document to the query on a scale of 0-10.

Query: {query}
Document: {document}

Relevance score (0-10):"""
        response = self.llm(prompt)
        try:
            return int(response.strip())
        except ValueError:
            return 5

    def rerank(self, query: str, documents: List[Dict]) -> List[Dict]:
        for doc in documents:
            doc["score"] = self.score(query, doc["text"])
        documents.sort(key=lambda x: x["score"], reverse=True)
        return documents


def mock_llm(prompt: str) -> str:
    if "retrieval" in prompt.lower() and "RAG" in prompt:
        return "9"
    return "5"


pointwise = PointwiseLLMReranker(mock_llm)
results = pointwise.rerank("retrieval methods", docs)
for r in results:
    print(f"Pointwise Doc {r['id']}: score={r['score']}")
```text

### 10.5.2 Pairwise Comparison

```python
class PairwiseLLMReranker:
    def __init__(self, llm_fn):
        self.llm = llm_fn

    def compare(self, query: str, doc_a: str, doc_b: str) -> int:
        prompt = f"""Which document is MORE relevant to the query?

Query: {query}

Document A: {doc_a}
Document B: {doc_b}

Respond with only "A" or "B"."""
        response = self.llm(prompt).strip().upper()
        if response == "A":
            return 1  # A wins
        elif response == "B":
            return -1  # B wins
        return 0  # Tie

    def rerank(self, query: str, documents: List[Dict]) -> List[Dict]:
        from functools import cmp_to_key

        def cmp_fn(a, b):
            return -self.compare(query, a["text"], b["text"])

        sorted_docs = sorted(documents, key=cmp_to_key(cmp_fn))
        for i, doc in enumerate(sorted_docs):
            doc["score"] = len(sorted_docs) - i
        return sorted_docs


def mock_pairwise_llm(prompt: str) -> str:
    return "A"


pairwise = PairwiseLLMReranker(mock_pairwise_llm)
results = pairwise.rerank("retrieval methods", docs)
for r in results:
    print(f"Pairwise Doc {r['id']}: score={r.get('score', 0)}")
```text

### 10.5.3 Listwise Reranking

```python
class ListwiseLLMReranker:
    def __init__(self, llm_fn, max_docs: int = 10):
        self.llm = llm_fn
        self.max_docs = max_docs

    def rerank(self, query: str, documents: List[Dict]) -> List[Dict]:
        candidates = documents[:self.max_docs]
        doc_texts = "\n\n".join([f"[{i+1}] {d['text']}" for i, d in enumerate(candidates)])

        prompt = f"""Reorder the following documents by relevance to the query.
Output only the ordered document numbers as a comma-separated list.

Query: {query}

Documents:
{doc_texts}

Ordered document numbers:"""
        response = self.llm(prompt)
        indices = self._parse_indices(response)

        reranked = []
        for i, idx in enumerate(indices):
            if 0 <= idx - 1 < len(candidates):
                d = dict(candidates[idx - 1])
                d["score"] = len(candidates) - i
                reranked.append(d)

        return reranked

    def _parse_indices(self, response: str) -> List[int]:
        indices = []
        for part in response.replace(",", " ").split():
            try:
                indices.append(int(part.strip()))
            except ValueError:
                continue
        return indices


def mock_listwise_llm(prompt: str) -> str:
    return "3, 1, 2"


listwise = ListwiseLLMReranker(mock_listwise_llm, max_docs=10)
results = listwise.rerank("retrieval methods", docs)
for r in results:
    print(f"Listwise Doc: score={r.get('score', 0)}")
```text

### 10.5.4 Reranking Cascade

```python
class CascadeReranker:
    def __init__(self, stages: List[Tuple[str, Callable, int]]):
        self.stages = stages

    def rerank(self, query: str, documents: List[Dict]) -> List[Dict]:
        current = documents

        for name, reranker_fn, keep_k in self.stages:
            reranked = reranker_fn(query, current)
            current = reranked[:keep_k]

        return current


cascade = CascadeReranker([
    ("bi_encoder", lambda q, docs: sorted(docs, key=lambda d: bi_enc.score(bi_enc.encode_query(q), bi_enc.encode_doc(d["text"])), reverse=True), 20),
    ("cross_encoder", lambda q, docs: [{**d, "score": cross_enc.score(q, d["text"])} for d in sorted(docs, key=lambda d: cross_enc.score(q, d["text"]), reverse=True)], 5),
])
print("Cascade reranker configured with 2 stages")
```text

## 10.6 Production Optimization

### 10.6.1 Caching for Reranking

```python
class RerankerCache:
    def __init__(self, max_size: int = 1000):
        self.cache = {}
        self.max_size = max_size

    def get_key(self, query: str, doc_id: str) -> str:
        return f"{query[:100]}:{doc_id}"

    def get(self, query: str, doc_id: str) -> Optional[float]:
        return self.cache.get(self.get_key(query, doc_id))

    def set(self, query: str, doc_id: str, score: float):
        key = self.get_key(query, doc_id)
        if len(self.cache) >= self.max_size:
            self.cache.pop(next(iter(self.cache)))
        self.cache[key] = score

    def hit_rate(self) -> float:
        return 0.0  # Track externally


class CachedReranker:
    def __init__(self, base_reranker, cache: RerankerCache):
        self.base = base_reranker
        self.cache = cache

    def rerank(self, query: str, documents: List[Dict]) -> List[Dict]:
        for doc in documents:
            cached = self.cache.get(query, doc["id"])
            if cached is not None:
                doc["score"] = cached
            else:
                # Reranker would compute score here
                score = self.base.score(query, doc["text"]) if hasattr(self.base, 'score') else 0.5
                self.cache.set(query, doc["id"], score)
                doc["score"] = score

        documents.sort(key=lambda x: x["score"], reverse=True)
        return documents


print("Cached reranker ready")
```text

### 10.6.2 Candidate Pruning

```python
class CandidatePruner:
    def __init__(self, max_candidates: int = 100, min_score: float = 0.1):
        self.max_candidates = max_candidates
        self.min_score = min_score

    def prune(self, candidates: List[Dict]) -> List[Dict]:
        filtered = [c for c in candidates if c.get("score", 0) >= self.min_score]
        filtered.sort(key=lambda x: x.get("score", 0), reverse=True)
        return filtered[:self.max_candidates]

    def adaptive_prune(self, candidates: List[Dict], target_recall: float = 0.95) -> List[Dict]:
        scores = sorted([c.get("score", 0) for c in candidates], reverse=True)
        if not scores:
            return []
        cutoff = int(len(scores) * target_recall)
        threshold = scores[cutoff - 1] if cutoff > 0 else scores[0]
        return [c for c in candidates if c.get("score", 0) >= threshold]


pruner = CandidatePruner(max_candidates=50, min_score=0.2)
docs = [{"id": str(i), "score": i * 0.1} for i in range(10)]
pruned = pruner.prune(docs)
print(f"Pruned {len(docs)} -> {len(pruned)} candidates")
```text

### 10.6.3 Latency Budget Optimization

```python
class LatencyBudgetAllocator:
    def __init__(self, total_budget_ms: int = 500):
        self.total = total_budget_ms

    def allocate(self, num_candidates: int) -> Dict[str, float]:
        stage1_budget = self.total * 0.2  # 20% for first pass
        stage2_budget = self.total * 0.6  # 60% for cross-encoder
        stage3_budget = self.total * 0.2  # 20% for LLM

        return {
            "stage1_retrieval": stage1_budget,
            "stage2_cross_encoder": stage2_budget,
            "stage3_llm_rerank": stage3_budget,
            "per_document_stage2": stage2_budget / max(num_candidates, 1),
            "per_document_stage3": stage3_budget / max(min(num_candidates, 5), 1),
        }


budget = LatencyBudgetAllocator(1000)
allocation = budget.allocate(50)
print(f"Per-doc cross-encoder budget: {allocation['per_document_stage2']:.1f}ms")
```text

## 10.7 Evaluation

```python
class HybridRerankingEvaluation:
    def __init__(self, queries: List[str], ground_truth: Dict[str, List[str]]):
        self.queries = queries
        self.ground_truth = ground_truth

    def evaluate(self, search_fn, name: str) -> Dict:
        mrrs = []
        precisions_at_5 = []
        recalls_at_5 = []

        for query in self.queries:
            results = search_fn(query, top_k=10)
            relevant = self.ground_truth.get(query, [])

            retrieved_ids = [r["id"] for r in results]
            retrieved_set = set(retrieved_ids)
            rel_set = set(relevant)

            mrr = self._reciprocal_rank(retrieved_ids, rel_set)
            precision_5 = len(retrieved_set[:5] & rel_set) / 5
            recall_5 = len(retrieved_set & rel_set) / len(rel_set) if rel_set else 0

            mrrs.append(mrr)
            precisions_at_5.append(precision_5)
            recalls_at_5.append(recall_5)

        return {
            "system": name,
            "mrr": round(np.mean(mrrs), 4),
            "precision@5": round(np.mean(precisions_at_5), 4),
            "recall@5": round(np.mean(recalls_at_5), 4),
        }

    def _reciprocal_rank(self, retrieved: list, relevant: set) -> float:
        for rank, doc in enumerate(retrieved, 1):
            if doc in relevant:
                return 1.0 / rank
        return 0.0


def hybrid_search_fn(query: str, top_k: int) -> list:
    return hybrid.search(query, top_k)


eval_obj = HybridRerankingEvaluation(
    queries=["What is RAG?", "How does retrieval work?"],
    ground_truth={
        "What is RAG?": ["doc1", "doc2"],
        "How does retrieval work?": ["doc3"],
    },
)
print("Hybrid + reranking evaluation ready")
```text

## Summary

Hybrid search and reranking form the backbone of production-grade retrieval systems. Hybrid search combines sparse (BM25) and dense (embedding) signals through score normalization (min-max, z-score, quantile) and fusion strategies (RRF, weighted, Borda count, rank-based). Reranking refines top candidates using cross-encoders for accurate query-document scoring, ColBERT-style late interaction for efficient token-level matching, and LLM-based approaches (pointwise, pairwise, listwise). Production optimization includes caching reranker scores, pruning low-scoring candidates, and allocating latency budgets across stages. The combination of hybrid retrieval and cross-encoder reranking typically yields 10-20% improvement in NDCG and MRR over single-method approaches.

## Practical Takeaways

| Takeaway | Description |
|----------|-------------|
| Hybrid always beats single | RRF fusion of sparse + dense outperforms either method alone |
| Rerank with purpose | Cross-encoders for accuracy, LLMs for complex relevance judgments |
| Normalize scores first | Different retrievers produce incomparable scores — normalize before fusion |
| Cache reranker scores | Reranking the same query-doc pair is wasteful without caching |
| Budget your latency | 20% retrieval, 60% cross-encoder, 20% LLM rerank is a reasonable split |
| Use cascade architecture | Cheap first pass, expensive refinement — maximize accuracy per ms |

## Interview Q&A

<details data-qid="rag10-q1">
<summary><strong>1.</strong> What is hybrid search and why is it important in modern RAG systems?</summary>
Hybrid search combines two complementary retrieval strategies: keyword-based (sparse) search and semantic (dense) vector search. Keyword search excels at exact phrase matching, handling rare terms, and retrieving results based on lexical overlap — for example, finding a specific product code "MB-203X" that a vector search might miss. Dense vector search captures semantic meaning and handles synonyms well, so a query like "cheap laptops" retrieves documents mentioning "affordable notebooks." Hybrid search merges both result sets using techniques like reciprocal rank fusion (RRF) or weighted scoring, producing robust results that outperform either method alone, especially in domains with technical jargon or mixed-length queries.
</details>

<details data-qid="rag10-q2">
<summary><strong>2.</strong> Explain reciprocal rank fusion (RRF) and how it combines hybrid search results.</summary>
RRF is a simple yet effective algorithm that merges ranked lists from multiple retrieval systems into a single unified ranking. Each document gets a score equal to the sum of `1 / (k + rank)` across all result sets, where `k` is a constant (typically 60) that prevents a single high rank from dominating. For example, if a document ranks 1st in keyword search and 5th in vector search with k=60, its RRF score is `1/61 + 1/65 ≈ 0.0318`. The final ranking sorts documents by their total RRF score descending. RRF requires no training, is robust to score distribution differences between systems, and works well even when one retrieval method significantly outperforms the other on a given query.
</details>

<details data-qid="rag10-q3">
<summary><strong>3.</strong> What is the difference between bi-encoders and cross-encoders for reranking?</summary>
Bi-encoders independently encode the query and each document into fixed vectors, then compute similarity with a dot product or cosine distance. This allows pre-computing document embeddings offline, making bi-encoders extremely fast at retrieval time — they can search millions of documents in milliseconds using Approximate Nearest Neighbor (ANN) indexes. Cross-encoders jointly encode the query-document pair through a transformer, producing a single relevance score. They are much slower (O(n) forward passes for n documents) but significantly more accurate because the model can attend to interactions between query and document tokens. In production, cross-encoders are typically used as a second-stage reranker over the top 20–100 candidates retrieved by a bi-encoder, trading recall for precision.
</details>

<details data-qid="rag10-q4">
<summary><strong>4.</strong> How do you implement a two-stage retrieval pipeline with reranking?</summary>
A two-stage pipeline separates the retrieval and reranking concerns. Stage 1 uses a fast bi-encoder (dense or sparse) to retrieve a broad candidate set — typically top-100 or top-200 documents — from the full corpus. Stage 2 applies a more expensive but accurate cross-encoder model to rerank these candidates. The cross-encoder scores each query-document pair and returns a refined top-k (e.g., top-5). Implementation-wise, you might use Cohere's `embed-english-v3.0` as the bi-encoder and a fine-tuned `cross-encoder/ms-marco-MiniLM-L-6-v2` as the reranker. This architecture keeps sub-200ms total latency while improving nDCG@10 by 10–20% compared to bi-encoder-only retrieval, especially on ambiguous or multi-faceted queries.
</details>

<details data-qid="rag10-q5">
<summary><strong>5.</strong> What is ColBERT and how does it improve over traditional bi-encoders?</summary>
ColBERT (Contextualized Late Interaction over BERT) is a retrieval model that combines the efficiency of bi-encoders with the interaction richness of cross-encoders. It encodes the query and document independently into sets of token-level embeddings. At scoring time, it uses a MaxSim operation: for each query token embedding, it finds the maximum cosine similarity against any document token embedding, then sums these maxima to produce a relevance score. This late interaction allows ColBERT to model fine-grained term matching — such as "bank" matching "river bank" vs "savings bank" — without the quadratic cost of full cross-encoder interaction. ColBERTv2 achieves BM25-level latency with near-cross-encoder accuracy, making it a popular choice for production reranking tiers.
</details>

<details data-qid="rag10-q6">
<summary><strong>6.</strong> When would you choose sparse retrieval (BM25) over dense retrieval as your primary method?</summary>
Sparse retrieval is preferable in domains where exact term matching is critical, such as legal document search, medical coding, or product catalog lookup with SKU codes. BM25 naturally handles rare terms, out-of-vocabulary words, and multi-word phrases without any training data. It also performs well on short queries and when the document vocabulary has low overlap with the training distribution of dense models. Additionally, BM25 indexes are cheap to build and update, requiring no GPU or embedding API calls. In many production systems, BM25 serves as the primary retriever for exact-match use cases while a dense model runs in parallel or as a fallback for semantic queries.
</details>

<details data-qid="rag10-q7">
<summary><strong>7.</strong> How do you evaluate the quality of a hybrid search system?</summary>
Evaluation of hybrid search combines both retrieval and downstream task metrics. For retrieval standalone, use precision@k, recall@k, mean average precision (MAP), and nDCG@k comparing against a human-annotated relevance judgment set. For downstream quality, measure end-to-end RAG metrics like answer faithfulness, answer relevance, and context precision using frameworks like RAGAS or TruLens. A critical A/B test compares the hybrid system against each individual method: measure whether hybrid improves recall@20 (typically 5–15% lift) and whether the reranker further improves precision@5. Always include latency and cost benchmarks, since cross-encoder reranking adds 50–200ms per query and increases compute cost proportionally.
</details>

<details data-qid="rag10-q8">
<summary><strong>8.</strong> Explain query rewriting and how it interacts with hybrid search.</summary>
Query rewriting transforms a user's raw query into one or more variants that are more likely to match relevant documents. Common strategies include expansion (adding synonyms or related terms), decomposition (splitting compound queries), and spelling correction. In a hybrid search setting, rewritten queries are sent to both the sparse and dense retrieval paths. For example, the query "fast cheap laptop for coding" might be rewritten to "(fast OR powerful OR high-performance) cheap (laptop OR notebook) for (coding OR programming OR development)" for the BM25 path, while the dense path gets the original and rewritten forms as separate embedding lookups. The results are merged via RRF, which helps compensate for the vocabulary mismatch between how users phrase queries and how documents are written.
</details>

<details data-qid="rag10-q9">
<summary><strong>9.</strong> How do you handle the trade-off between retrieval latency and accuracy in hybrid systems?</summary>
The trade-off is managed through a tiered architecture. Tier 1 uses lightweight sparse retrieval (BM25 over an inverted index) with sub-10ms latency. Tier 2 adds dense vector retrieval using an ANN index (HNSW or IVF) with 20–50ms latency. Tier 3 applies a cross-encoder reranker over the top 50 candidates at 100–200ms. The system can dynamically decide which tiers to invoke based on query complexity: simple lookups skip to tier 1 only, ambiguous queries go through all three tiers, and the system assigns a confidence score to decide whether reranking adds value. A timeout budget (e.g., 500ms total) prevents any single tier from blocking the response. This cascading approach delivers sub-100ms responses for 70% of queries while reserving full accuracy for the hard cases.
</details>

<details data-qid="rag10-q10">
<summary><strong>10.</strong> Describe a real-world architecture for a production hybrid search system.</summary>
A typical architecture begins with an API gateway that receives user queries and routes them to a query processing service. This service performs query rewriting, then fans out to two retrieval backends: an Elasticsearch cluster for BM25 sparse search and a Pinecone/Qdrant cluster for dense vector search. Both backends return their top-100 results, which are merged by a fusion service running RRF. The top-30 fused results are sent to a cross-encoder reranker (deployed on GPU instances with ONNX Runtime or TensorRT for low latency). The final top-5 results, along with the reranker scores and retrieved chunks, are passed to the LLM for answer generation. All services are containerized and orchestrated via Kubernetes with horizontal pod autoscaling based on QPS, and each tier has its own circuit breaker and cache layer.
</details>

## Chapter Quiz

<details data-qid="rag-s10-quiz1">
<summary><strong>1.</strong> What is the primary advantage of hybrid search over single-method search?</summary>
A. Lower latency
B. Robustness — captures both exact match and semantic similarity
C. Lower storage cost
D. Simpler implementation
Answer: B
</details>

<details data-qid="rag-s10-quiz2">
<summary><strong>2.</strong> How does Reciprocal Rank Fusion (RRF) combine rankings?</summary>
A. By averaging scores
B. By summing reciprocal ranks with a constant
C. By counting wins in pairwise comparisons
D. By multiplying probabilities
Answer: B
</details>

<details data-qid="rag-s10-quiz3">
<summary><strong>3.</strong> What distinguishes a cross-encoder from a bi-encoder for reranking?</summary>
A. Cross-encoder is faster
B. Cross-encoder uses bidirectional attention between query and document
C. Cross-encoder processes documents independently
D. Cross-encoder doesn't need training
Answer: B
</details>

<details data-qid="rag-s10-quiz4">
<summary><strong>4.</strong> In ColBERT-style late interaction, how is the relevance score computed?</summary>
A. Cosine similarity of sentence embeddings
B. Sum of max similarities between query tokens and document tokens
C. Classification through a linear layer
D. Weighted sum of sparse and dense scores
Answer: B
</details>

<details data-qid="rag-s10-quiz5">
<summary><strong>5.</strong> What is the purpose of candidate pruning before reranking?</summary>
A. To improve embedding quality
B. To reduce reranking cost by eliminating low-scoring documents
C. To add more candidates
D. To change the fusion strategy
Answer: B
</details>

## Exercises


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition1. Implement a hybrid search system combining BM25 and cosine similarity-based dense retrieval. Test on 30 queries and compare precision@10 against each individual method.

2. Build a score normalization module that supports min-max, z-score, and quantile normalization. Demonstrate that normalization is necessary for fair fusion when sparse scores [0, 30] and dense scores [0.5, 0.95] have different scales.

3. Implement a two-stage reranker (bi-encoder first pass with 50 candidates, cross-encoder second pass with 10 final results). Benchmark latency and NDCG@10 against a single-stage cross-encoder.

4. Create a ColBERT-style late interaction reranker and compare its accuracy vs a full cross-encoder on the same candidate set. Report speedup and accuracy difference.

5. Design a cascade reranker with 3 stages: bi-encoder (100 -> 20), cross-encoder (20 -> 5), LLM pairwise (5 -> final ranking). Evaluate MRR@10 and total latency on 10 test

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design

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
- [ ] Have questions ready about how the company uses 12-rag-vector-databases queries.


## Difficulty Level

**Level**: Advanced
**Estimated Study Time**: 45-60 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to RAG & Vector Databases fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master hybrid search and reranking?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

Understanding the evolution of hybrid search and reranking helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding hybrid search and reranking at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of hybrid search and reranking like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply hybrid search and reranking concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of hybrid search and reranking?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply hybrid search and reranking in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (18 minutes)
**Day 2**: Complete exercises and practice (18 minutes)
**Day 3**: Review flashcards and take quiz (9 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying hybrid search and reranking to specific use cases, consider:
- Adapting general principles to your specific domain
- Performance optimization for your target hardware
- Cost considerations for production deployment
- Monitoring and observability in production