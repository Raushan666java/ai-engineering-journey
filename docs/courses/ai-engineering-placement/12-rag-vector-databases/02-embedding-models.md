# Embedding Models

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand embedding models and their role in semantic search |
| LO2 | Compare text embedding models (OpenAI, sentence-transformers, Cohere, BGE) |
| LO3 | Implement embedding generation and similarity computation pipelines |
| LO4 | Evaluate embedding quality using retrieval benchmarks (BEIR, MTEB) |
| LO5 | Apply dimensionality reduction and quantization for storage efficiency |

## Introduction

Understanding embedding models is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering embedding models.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 2.1 | Embedding Fundamentals | Tokenization, contextual encoding, vector representation |
| 2.2 | Model Comparison | OpenAI text-embedding-3, sentence-transformers, Cohere, BGE |
| 2.3 | Similarity Metrics | Cosine similarity, dot product, Euclidean distance, MIP |
| 2.4 | Dimensionality Reduction | PCA, Matryoshka embeddings, binary quantization |
| 2.5 | Embedding Evaluation | BEIR, MTEB benchmarks, retrieval precision |
| 2.6 | Production Embeddings | Caching, batching, rate limits, cost management |

## Chapter Roadmap

```mermaid
flowchart TD
    A[Text Input] --> B[Tokenization]
    B --> C[Transformer Encoder]
    C --> D[Pooling Strategy]
    D --> E[Embedding Vector]
    E --> F[Normalization]
    F --> G[Store in Vector DB]
    G --> H[Query]
    H --> I[Similarity Search]
    I --> J[Ranked Results]
```text

## 2.1 Embedding Fundamentals

Embedding models convert text into dense vector representations that capture semantic meaning. Unlike bag-of-words approaches, embedding vectors encode context, word order, and semantic relationships.

### How Embeddings Work

1. **Tokenization**: Split text into tokens (subwords or words)
2. **Encoding**: Pass tokens through a transformer to produce contextual representations
3. **Pooling**: Aggregate token representations into a single vector (CLS token, mean pooling, or weighted pooling)
4. **Normalization**: Normalize the output vector to unit length for cosine similarity

```python
from typing import List, Optional
import numpy as np


class EmbeddingModel:
    def __init__(self, dimension: int = 768, model_name: str = "base-embedder"):
        self.dimension = dimension
        self.model_name = model_name

    def encode(self, text: str) -> np.ndarray:
        text_bytes = text.encode("utf-8")
        seed = int.from_bytes(text_bytes[:8].ljust(8, b"\x00"), "big") % (2**31)
        rng = np.random.RandomState(seed)
        vec = rng.randn(self.dimension)
        for i, b in enumerate(text_bytes):
            vec[i % self.dimension] += (b - 128) / 128.0
        return vec / np.linalg.norm(vec)

    def encode_batch(self, texts: List[str]) -> np.ndarray:
        return np.array([self.encode(t) for t in texts])

    def normalize(self, vec: np.ndarray) -> np.ndarray:
        norm = np.linalg.norm(vec)
        return vec / norm if norm > 0 else vec


model = EmbeddingModel(dimension=384)
emb = model.encode("RAG with vector databases")
print(f"Embedding shape: {emb.shape}")
print(f"L2 norm: {np.linalg.norm(emb):.4f}")
```text

### Pooling Strategies

The pooling strategy determines how token-level representations are combined into a single sentence embedding.

```python

## Conceptual pooling strategies
import numpy as np


def mean_pooling(token_embeddings: np.ndarray, attention_mask: np.ndarray) -> np.ndarray:
    mask = attention_mask[:, :, np.newaxis].astype(float)
    masked = token_embeddings * mask
    summed = np.sum(masked, axis=1)
    counts = np.clip(np.sum(attention_mask, axis=1, keepdims=True), 1, None)
    return summed / counts


def cls_pooling(token_embeddings: np.ndarray) -> np.ndarray:
    return token_embeddings[:, 0, :]  # First token [CLS]


def max_pooling(token_embeddings: np.ndarray, attention_mask: np.ndarray) -> np.ndarray:
    mask = attention_mask[:, :, np.newaxis].astype(float)
    masked = token_embeddings * mask + (1 - mask) * -1e9
    return np.max(masked, axis=1)


## Simulated token embeddings: (batch=2, tokens=5, dim=4)
simulated = np.random.randn(2, 5, 4)
mask = np.ones((2, 5))
print(f"Mean pooled shape: {mean_pooling(simulated, mask).shape}")
print(f"CLS pooled shape: {cls_pooling(simulated).shape}")
```text

## 2.2 Model Comparison

### 2.2.1 OpenAI Embeddings

OpenAI's `text-embedding-3-small` and `text-embedding-3-large` offer high-quality embeddings with configurable dimensions (256-3072).

```python
from openai import OpenAI


class OpenAIEmbedder:
    def __init__(
        self,
        model: str = "text-embedding-3-small",
        dimensions: Optional[int] = None,
        client=None,
    ):
        self.model = model
        self.dimensions = dimensions
        self.client = client or OpenAI()

    def embed(self, text: str) -> List[float]:
        kwargs = {"model": self.model, "input": text}
        if self.dimensions:
            kwargs["dimensions"] = self.dimensions

        response = self.client.embeddings.create(**kwargs)
        return response.data[0].embedding

    def embed_batch(self, texts: List[str]) -> List[List[float]]:
        kwargs = {"model": self.model, "input": texts}
        if self.dimensions:
            kwargs["dimensions"] = self.dimensions

        response = self.client.embeddings.create(**kwargs)
        sorted_data = sorted(response.data, key=lambda x: x.index)
        return [item.embedding for item in sorted_data]


## Mock for demonstration
class MockOpenAIEmbedder(OpenAIEmbedder):
    def embed(self, text: str) -> List[float]:
        rng = np.random.RandomState(hash(text) % (2**31))
        vec = rng.randn(self.dimensions or 1536).tolist()
        norm = np.linalg.norm(vec)
        return [v / norm for v in vec]


embedder = MockOpenAIEmbedder(model="text-embedding-3-small", dimensions=256)
emb = embedder.embed("RAG pipeline with OpenAI embeddings")
print(f"OpenAI embedding (dim={len(emb)}): first 3 values = {emb[:3]}")
```text


## Overview

### 2.2.2 Sentence-Transformers

Open-source embedding models from Hugging Face, fine-tuned for semantic similarity.

```python
class SentenceTransformerEmbedder:
    def __init__(self, model_name: str = "all-MiniLM-L6-v2"):
        self.model_name = model_name
        self.dimension = {
            "all-MiniLM-L6-v2": 384,
            "all-mpnet-base-v2": 768,
            "BAAI/bge-small-en-v1.5": 384,
            "BAAI/bge-base-en-v1.5": 768,
        }.get(model_name, 768)

    def encode(self, text: str) -> np.ndarray:
        text_bytes = text.encode("utf-8")
        seed = int.from_bytes(text_bytes[:8].ljust(8, b"\x00"), "big") % (2**31)
        rng = np.random.RandomState(seed)
        vec = rng.randn(self.dimension)
        for i, b in enumerate(text_bytes):
            vec[i % self.dimension] += (b - 128) / 128.0
        return vec / np.linalg.norm(vec)

    def encode_batch(self, texts: List[str]) -> np.ndarray:
        return np.array([self.encode(t) for t in texts])


st = SentenceTransformerEmbedder("all-MiniLM-L6-v2")
emb = st.encode("sentence-transformers for embedding generation")
print(f"Sentence-transformers embedding dim: {st.dimension}")
```text

### 2.2.3 Cohere Embeddings

Cohere offers multilingual embed models with focused on retrieval quality.

```python
class CohereEmbedder:
    def __init__(self, model: str = "embed-english-v3.0", input_type: str = "search_document"):
        self.model = model
        self.input_type = input_type

    def embed(self, text: str) -> List[float]:
        # import cohere
        # co = cohere.Client("API_KEY")
        # response = co.embed(texts=[text], model=self.model, input_type=self.input_type)
        # return response.embeddings[0]
        rng = np.random.RandomState(hash(text) % (2**31))
        vec = rng.randn(1024).tolist()
        norm = np.linalg.norm(vec)
        return [v / norm for v in vec]

    def embed_batch(self, texts: List[str], input_type: str = None) -> List[List[float]]:
        return [self.embed(t) for t in texts]


cohere_emb = CohereEmbedder()
print(f"Cohere embedding dim: {len(cohere_emb.embed('test'))}")
```text

### 2.2.4 BGE (BAAI General Embedding)

BGE models are among the top-ranked open-source embedding models on MTEB leaderboard.

```python
class BGEEmbedder:
    def __init__(self, model_name: str = "BAAI/bge-base-en-v1.5"):
        self.model_name = model_name
        self.dimension = 768

    def encode(self, text: str, query_mode: bool = False) -> np.ndarray:
        if query_mode:
            text = f"Represent this sentence for searching relevant passages: {text}"
        rng = np.random.RandomState(hash(text) % (2**31))
        vec = rng.randn(self.dimension)
        return vec / np.linalg.norm(vec)

    def encode_queries(self, queries: List[str]) -> np.ndarray:
        return np.array([self.encode(q, query_mode=True) for q in queries])

    def encode_documents(self, documents: List[str]) -> np.ndarray:
        return np.array([self.encode(d) for d in documents])


bge = BGEEmbedder()
query_vec = bge.encode("How does RAG work?", query_mode=True)
doc_vec = bge.encode("Retrieval-Augmented Generation is a technique that combines retrieval with generation.")
sim = float(np.dot(query_vec, doc_vec))
print(f"BGE query-doc similarity: {sim:.4f}")
```text

## 2.3 Similarity Metrics

### 2.3.1 Cosine Similarity

Most common metric for embedding similarity. Computes the cosine of the angle between two vectors.

```python
def cosine_similarity(a: np.ndarray, b: np.ndarray) -> float:
    dot = float(np.dot(a, b))
    norm_a = float(np.linalg.norm(a))
    norm_b = float(np.linalg.norm(b))
    return dot / (norm_a * norm_b) if norm_a > 0 and norm_b > 0 else 0.0


def cosine_similarity_matrix(embeddings: np.ndarray, query: np.ndarray) -> np.ndarray:
    norms = np.linalg.norm(embeddings, axis=1, keepdims=True)
    normed_embs = embeddings / np.clip(norms, 1e-10, None)
    query_norm = query / np.clip(np.linalg.norm(query), 1e-10, None)
    return np.dot(normed_embs, query_norm)


embs = np.random.randn(5, 384)
embs = embs / np.linalg.norm(embs, axis=1, keepdims=True)
query = np.random.randn(384)
query = query / np.linalg.norm(query)

scores = cosine_similarity_matrix(embs, query)
print(f"Similarity scores: {scores}")
```text

### 2.3.2 Dot Product

When vectors are normalized, dot product is equivalent to cosine similarity. Unnormalized dot product favors larger magnitude vectors.

```python
def dot_product(a: np.ndarray, b: np.ndarray) -> float:
    return float(np.dot(a, b))


def max_inner_product(embeddings: np.ndarray, query: np.ndarray) -> np.ndarray:
    return np.dot(embeddings, query)


## Compare cosine vs dot on normalized vectors
a_norm = np.array([1.0, 0.0])
b_norm = np.array([0.707, 0.707])
print(f"Cosine (normalized): {cosine_similarity(a_norm, b_norm):.4f}")
print(f"Dot (normalized): {dot_product(a_norm, b_norm):.4f}")

## Unnormalized vectors
a_unnorm = np.array([5.0, 0.0])
b_unnorm = np.array([3.5, 3.5])
print(f"Cosine (unnormalized): {cosine_similarity(a_unnorm, b_unnorm):.4f}")
print(f"Dot (unnormalized): {dot_product(a_unnorm, b_unnorm):.4f}")
```text


## Overview

### 2.3.3 Euclidean Distance

Measures straight-line distance between vectors. Convert to similarity via 1/(1+distance).

```python
def euclidean_distance(a: np.ndarray, b: np.ndarray) -> float:
    return float(np.linalg.norm(a - b))


def euclidean_similarity_matrix(embeddings: np.ndarray, query: np.ndarray) -> np.ndarray:
    diffs = embeddings - query
    distances = np.linalg.norm(diffs, axis=1)
    return 1.0 / (1.0 + distances)


dists = euclidean_similarity_matrix(embs, query)
print(f"Euclidean similarities: {dists}")
```text

### 2.3.4 Similarity Metric Comparison

| Metric | Range | Normalized Inputs | Use Case |
|--------|-------|-------------------|----------|
| Cosine | [-1, 1] | Optional | Default for most text embeddings |
| Dot Product | [-inf, inf] | Required for bounded range | MIP for normalized vectors |
| Euclidean | [0, inf] | Optional | Geographic / physical proximity |

```python
class SimilarityComputer:
    def __init__(self, metric: str = "cosine"):
        self.metric = metric

    def compare(self, a: np.ndarray, b: np.ndarray) -> float:
        if self.metric == "cosine":
            return cosine_similarity(a, b)
        elif self.metric == "dot":
            return dot_product(a, b)
        elif self.metric == "euclidean":
            return 1.0 / (1.0 + euclidean_distance(a, b))
        else:
            raise ValueError(f"Unknown metric: {self.metric}")

    def compare_batch(self, embeddings: np.ndarray, query: np.ndarray) -> np.ndarray:
        if self.metric == "cosine":
            return cosine_similarity_matrix(embeddings, query)
        elif self.metric == "euclidean":
            return euclidean_similarity_matrix(embeddings, query)
        else:
            return np.array([self.compare(e, query) for e in embeddings])


for metric in ["cosine", "euclidean"]:
    comp = SimilarityComputer(metric)
    scores = comp.compare_batch(embs, query)
    print(f"{metric}: top score = {scores.max():.4f}")
```text

## 2.4 Dimensionality Reduction

### 2.4.1 Matryoshka Embeddings

Models like `text-embedding-3-small` support Matryoshka Representation Learning — the first N dimensions form a valid, searchable embedding at any depth.

```python
class MatryoshkaEmbedder:
    def __init__(self, base_dimension: int = 3072):
        self.base_dim = base_dimension

    def embed_at_dimension(self, text: str, target_dim: int) -> List[float]:
        full_emb = self._get_full_embedding(text)
        return full_emb[:target_dim]

    def _get_full_embedding(self, text: str) -> List[float]:
        rng = np.random.RandomState(hash(text) % (2**31))
        vec = rng.randn(self.base_dim).tolist()
        norm = np.linalg.norm(vec)
        return [v / norm for v in vec]

    def compare_dimensions(self, text: str, dims: List[int]) -> Dict[int, int]:
        results = {}
        full = np.array(self._get_full_embedding(text))
        for d in dims:
            truncated = full[:d]
            results[d] = len(truncated)
        return results


matryoshka = MatryoshkaEmbedder()
for dim in [256, 512, 1024, 2048]:
    emb = matryoshka.embed_at_dimension("Efficient embedding storage", dim)
    print(f"Dim {dim}: length = {len(emb)}")
```text

### 2.4.2 PCA Dimensionality Reduction

Principal Component Analysis reduces embedding dimension while preserving variance.

```python
from typing import Tuple


class PCAEmbeddingReducer:
    def __init__(self, n_components: int = 256):
        self.n_components = n_components
        self.components: Optional[np.ndarray] = None
        self.mean: Optional[np.ndarray] = None

    def fit(self, embeddings: np.ndarray):
        self.mean = np.mean(embeddings, axis=0)
        centered = embeddings - self.mean
        cov = np.cov(centered.T)
        eigenvalues, eigenvectors = np.linalg.eigh(cov)
        idx = np.argsort(eigenvalues)[::-1]
        self.components = eigenvectors[:, idx[:self.n_components]]

    def transform(self, embeddings: np.ndarray) -> np.ndarray:
        if self.components is None:
            raise ValueError("Model not fitted")
        centered = embeddings - self.mean
        return np.dot(centered, self.components)

    def fit_transform(self, embeddings: np.ndarray) -> np.ndarray:
        self.fit(embeddings)
        return self.transform(embeddings)


pca = PCAEmbeddingReducer(n_components=128)
original = np.random.randn(100, 768)
reduced = pca.fit_transform(original)
print(f"Original: {original.shape}, Reduced: {reduced.shape}")
```text

### 2.4.3 Binary Quantization

Convert float32 embeddings to binary (1-bit) for 32x storage reduction.

```python
def binary_quantize(embeddings: np.ndarray) -> np.ndarray:
    return (embeddings > 0).astype(np.int8)


def binary_similarity(binary_emb: np.ndarray, binary_query: np.ndarray) -> float:
    xor_sum = np.sum(binary_emb ^ binary_query)
    return 1.0 - xor_sum / binary_emb.shape[-1]


embeddings = np.random.randn(10, 384)
binary = binary_quantize(embeddings)
query_binary = binary_quantize(np.random.randn(384))

for i in range(3):
    sim = binary_similarity(binary[i], query_binary)
    print(f"Binary similarity {i}: {sim:.4f}")

print(f"Original size: {embeddings.nbytes} bytes")
print(f"Binary size: {binary.nbytes} bytes")
```text

### 2.4.4 Scalar Quantization (int8)

Convert float32 to int8 for 4x storage reduction.

```python
def scalar_quantize(
    embeddings: np.ndarray,
    bounds: Tuple[float, float] = None,
) -> Tuple[np.ndarray, np.ndarray]:
    if bounds is None:
        min_val = np.min(embeddings)
        max_val = np.max(embeddings)
    else:
        min_val, max_val = bounds

    scale = 127.0 / max(abs(min_val), abs(max_val))
    quantized = np.clip(np.round(embeddings * scale), -128, 127).astype(np.int8)
    return quantized, np.array([min_val, max_val, scale])


def scalar_dequantize(quantized: np.ndarray, params: np.ndarray) -> np.ndarray:
    _, _, scale = params
    return quantized.astype(np.float32) / scale


float_embs = np.random.randn(100, 384).astype(np.float32)
quantized, params = scalar_quantize(float_embs)
dequantized = scalar_dequantize(quantized, params)

mse = np.mean((float_embs - dequantized) ** 2)
print(f"Quantization MSE: {mse:.6f}")
print(f"Float32 size: {float_embs.nbytes} bytes")
print(f"Int8 size: {quantized.nbytes} bytes")
```text

## 2.5 Embedding Evaluation

### 2.5.1 BEIR Benchmark

BEIR (Benchmarking Information Retrieval) evaluates embedding models across 18+ datasets.

```python
@dataclass
class BEIRDataset:
    name: str
    num_queries: int
    num_docs: int
    domain: str


BEIR_DATASETS = [
    BEIRDataset("TREC-COVID", 50, 171332, "biomedical"),
    BEIRDataset("NFCorpus", 324, 3633, "medical"),
    BEIRDataset("FiQA", 648, 57638, "finance"),
    BEIRDataset("ArguAna", 1406, 8674, "argumentation"),
    BEIRDataset("SciDocs", 1000, 25657, "scientific"),
    BEIRDataset("Quora", 5000, 522931, "general"),
]


class BEIREvaluator:
    def __init__(self, embedder):
        self.embedder = embedder

    def evaluate_ndcg(
        self,
        queries: List[str],
        documents: List[str],
        relevant_pairs: Dict[str, List[int]],
    ) -> float:
        # Simplified NDCG@10 computation
        query_embs = self.embedder.encode_batch(queries)
        doc_embs = self.embedder.encode_batch(documents)
        scores = np.dot(query_embs, doc_embs.T)

        total_ndcg = 0.0
        for i, query_id in enumerate(relevant_pairs.keys()):
            ranking = np.argsort(scores[i])[::-1]
            relevant = set(relevant_pairs[query_id])
            dcg = 0.0
            idcg = 0.0
            for k in range(min(10, len(ranking))):
                if ranking[k] in relevant:
                    dcg += 1.0 / np.log2(k + 2)
                if k < len(relevant):
                    idcg += 1.0 / np.log2(k + 2)
            total_ndcg += dcg / idcg if idcg > 0 else 0

        return total_ndcg / len(relevant_pairs) if relevant_pairs else 0


evaluator = BEIREvaluator(SentenceTransformerEmbedder())
print("BEIR evaluator ready for benchmarking")
```text

### 2.5.2 MTEB (Massive Text Embedding Benchmark)

MTEB evaluates across 8 tasks including classification, clustering, pair classification, reranking, retrieval, STS, summarization, and bitext mining.

```python
class MTEBTask:
    def __init__(self, name: str, task_type: str, metric: str):
        self.name = name
        self.task_type = task_type
        self.metric = metric


MTEB_TASKS = [
    MTEBTask("AmazonCounterfactualClassification", "classification", "accuracy"),
    MTEBTask("Banking77Classification", "classification", "accuracy"),
    MTEBTask("SprintDuplicateQuestions", "pair_classification", "ap"),
    MTEBTask("AskUbuntuDupQuestions", "reranking", "map"),
    MTEBTask("ArguAna", "retrieval", "ndcg_at_10"),
    MTEBTask("STSBenchmark", "sts", "spearman"),
    MTEBTask("SummEval", "summarization", "spearman"),
]


def select_embedding_model(task_type: str, budget: str = "medium") -> str:
    recommendations = {
        "classification": {"low": "all-MiniLM-L6-v2", "medium": "bge-base-en-v1.5", "high": "text-embedding-3-large"},
        "retrieval": {"low": "bge-small-en-v1.5", "medium": "bge-base-en-v1.5", "high": "text-embedding-3-large"},
        "reranking": {"low": "ms-marco-MiniLM-L-6-v2", "medium": "bge-reranker-base", "high": "cohere-rerank-v3"},
        "sts": {"low": "all-MiniLM-L6-v2", "medium": "all-mpnet-base-v2", "high": "text-embedding-3-large"},
    }
    return recommendations.get(task_type, {}).get(budget, "all-MiniLM-L6-v2")


for task in MTEB_TASKS[:3]:
    model = select_embedding_model(task.task_type, "medium")
    print(f"{task.name} ({task.task_type}): {model}")
```text

### 2.5.3 Retrieval Quality Metrics

```python
def mean_reciprocal_rank(
    query_results: List[List[int]],
    relevant: List[Set[int]],
    k: int = 10,
) -> float:
    rr_sum = 0.0
    for results, rel_set in zip(query_results, relevant):
        for rank, doc_id in enumerate(results[:k], 1):
            if doc_id in rel_set:
                rr_sum += 1.0 / rank
                break
    return rr_sum / len(query_results) if query_results else 0


def recall_at_k(
    query_results: List[List[int]],
    relevant: List[Set[int]],
    k: int = 10,
) -> float:
    recall_sum = 0.0
    for results, rel_set in zip(query_results, relevant):
        if not rel_set:
            continue
        retrieved = set(results[:k])
        recall_sum += len(retrieved & rel_set) / len(rel_set)
    return recall_sum / len(query_results) if query_results else 0


def precision_at_k(
    query_results: List[List[int]],
    relevant: List[Set[int]],
    k: int = 10,
) -> float:
    prec_sum = 0.0
    for results, rel_set in zip(query_results, relevant):
        retrieved = set(results[:k])
        if not retrieved:
            continue
        prec_sum += len(retrieved & rel_set) / k
    return prec_sum / len(query_results) if query_results else 0


## Example evaluation
results = [[3, 5, 1, 7, 2], [1, 4, 2, 8, 3]]
rel_sets = [{1, 2, 3}, {1, 4}]
print(f"MRR@10: {mean_reciprocal_rank(results, rel_sets):.4f}")
print(f"Recall@5: {recall_at_k(results, rel_sets, 5):.4f}")
print(f"Precision@5: {precision_at_k(results, rel_sets, 5):.4f}")
```text

## 2.6 Production Embeddings

### 2.6.1 Embedding Caching

Avoid redundant API calls for identical or similar text.

```python
import hashlib
from typing import Dict, Optional


class EmbeddingCache:
    def __init__(self, max_size: int = 10000):
        self.cache: Dict[str, List[float]] = {}
        self.max_size = max_size

    def _key(self, text: str, model: str) -> str:
        return hashlib.sha256(f"{model}:{text}".encode()).hexdigest()

    def get(self, text: str, model: str) -> Optional[List[float]]:
        return self.cache.get(self._key(text, model))

    def set(self, text: str, embedding: List[float], model: str):
        key = self._key(text, model)
        if len(self.cache) >= self.max_size:
            self.cache.pop(next(iter(self.cache)))
        self.cache[key] = embedding

    def stats(self) -> Dict:
        return {"size": len(self.cache), "max_size": self.max_size}


cache = EmbeddingCache(max_size=5000)
cache.set("RAG pipeline", [0.1, 0.2, 0.3], "text-embedding-3-small")
cached = cache.get("RAG pipeline", "text-embedding-3-small")
print(f"Cached embedding: {cached[:3]}... (len={len(cached)})")
```text

### 2.6.2 Batching with Rate Limits

```python
import time
from typing import List, Callable
from dataclasses import dataclass


@dataclass
class RateLimitConfig:
    requests_per_minute: int
    tokens_per_minute: int


class RateLimitedEmbedder:
    def __init__(self, embed_fn: Callable, config: RateLimitConfig):
        self.embed_fn = embed_fn
        self.config = config
        self.request_count = 0
        self.token_count = 0
        self.window_start = time.time()

    def embed_batch(self, texts: List[str]) -> List[List[float]]:
        results = []
        for text in texts:
            self._wait_if_needed(len(text))
            results.append(self.embed_fn(text))
        return results

    def _wait_if_needed(self, estimated_tokens: int):
        now = time.time()
        elapsed = now - self.window_start

        if elapsed >= 60:
            self.request_count = 0
            self.token_count = 0
            self.window_start = now
            return

        self.request_count += 1
        self.token_count += estimated_tokens

        if self.request_count >= self.config.requests_per_minute or self.token_count >= self.config.tokens_per_minute:
            sleep_time = 60 - elapsed + 1
            time.sleep(sleep_time)
            self.request_count = 0
            self.token_count = 0
            self.window_start = time.time()


config = RateLimitConfig(requests_per_minute=100, tokens_per_minute=100000)
print(f"Rate limited embedder ready: {config}")
```text

### 2.6.3 Cost Management

```python
@dataclass
class EmbeddingCost:
    model: str
    price_per_1k_tokens: float
    dimension: int


EMBEDDING_COSTS = {
    "text-embedding-3-small": EmbeddingCost("text-embedding-3-small", 0.00002, 1536),
    "text-embedding-3-large": EmbeddingCost("text-embedding-3-large", 0.00013, 3072),
    "cohere-embed-english-v3.0": EmbeddingCost("cohere-embed-english-v3.0", 0.00010, 1024),
}


def estimate_embedding_cost(
    num_documents: int,
    avg_tokens_per_doc: int,
    model: str = "text-embedding-3-small",
) -> Dict:
    cost_info = EMBEDDING_COSTS.get(model)
    if not cost_info:
        return {"error": "Unknown model"}

    total_tokens = num_documents * avg_tokens_per_doc
    total_cost = (total_tokens / 1000) * cost_info.price_per_1k_tokens

    return {
        "model": model,
        "num_documents": num_documents,
        "avg_tokens_per_doc": avg_tokens_per_doc,
        "total_tokens": total_tokens,
        "estimated_cost": round(total_cost, 6),
        "dimension": cost_info.dimension,
    }


print(estimate_embedding_cost(100000, 256, "text-embedding-3-small"))
print(estimate_embedding_cost(100000, 256, "text-embedding-3-large"))
```text

## Summary

Embedding models convert text into dense vector representations that capture semantic meaning, enabling similarity search in RAG pipelines. Key embedding models include OpenAI's text-embedding-3 series (API-based, configurable dimensions), sentence-transformers (open-source, locally runnable), Cohere (multilingual, retrieval-focused), and BGE (top-ranked on MTEB). Similarity metrics — cosine, dot product, and Euclidean distance — determin similarity between embeddings. Storage optimization techniques like Matryoshka embeddings, PCA, binary quantization, and scalar quantization reduce memory footprint while maintaining search quality. The BEIR and MTEB benchmarks provide standardized evaluation across retrieval and other embedding tasks. Production deployments require caching, rate-limit management, and cost tracking.

## Practical Takeaways

| Takeaway | Description |
|----------|-------------|
| Match model to task | Use small models (384d) for high-throughput, large models (3072d) for precision-critical |
| Normalize embeddings | Always normalize to unit length for consistent cosine similarity |
| Use Matryoshka output | Store full embeddings, truncate at query time for flexibility |
| Quantize for scale | Binary quantization reduces storage 32x with minimal accuracy loss |
| Cache aggressively | Embedding caching reduces API costs for repeated content |
| Benchmark your data | MTEB leaderboard scores don't always translate to your specific domain |

## Interview Q&A

<details class="tp-qa-card" data-qid="rag02-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What is the difference between a bi-encoder and a cross-encoder for embeddings?
  </summary>
  <div class="tp-qa-answer">
    <p>A bi-encoder independently encodes the query and document into separate vectors, then compares them with a similarity metric (cosine, dot product). It is fast and scalable because document embeddings can be pre-computed and indexed. A cross-encoder processes the query and document together in a single forward pass, producing a relevance score directly. It is more accurate because it captures query-document interactions but is computationally expensive (cannot pre-compute). In RAG systems, bi-encoders are used for first-pass retrieval (retrieving top-50 from millions) while cross-encoders are used for reranking the top-50 candidates for final precision.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag02-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: How do Matryoshka embeddings enable flexible storage-accuracy trade-offs?
  </summary>
  <div class="tp-qa-answer">
    <p>Matryoshka Representation Learning trains embeddings so that the first N dimensions at any depth form a valid, searchable sub-embedding. For OpenAI's text-embedding-3 models, you can specify dimensions=256, 512, 1024, or 2048 on the same model. Store the full vector (3072 dimensions) in the database but truncate at query time — use 256d for fast approximate search, then score with 2048d for high precision. This enables a single index to serve different accuracy/latency tiers. Storage-accuracy trade-off: 256d uses 8x less memory than 2048d with only 2-5% recall degradation on most benchmarks.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag02-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: Compare cosine similarity, dot product, and Euclidean distance for embedding search.
  </summary>
  <div class="tp-qa-answer">
    <p>Cosine similarity measures the angle between vectors — it is the default for most text embeddings because it is invariant to vector magnitude and works when vectors are normalized. Dot product is equivalent to cosine when vectors are unit-normalized but favors larger magnitudes otherwise — use it with normalized embeddings for maximum inner product search. Euclidean distance measures straight-line distance — it works well for geospatial data but is less common for text embeddings. For normalized embeddings, all three produce identical rankings (monotonically related). Most vector databases default to cosine similarity for text use cases.</p>
    <pre><code># For normalized vectors, all three give equivalent rankings
cosine = np.dot(a, b)  # When ||a|| = ||b|| = 1
euclidean = 1 / (1 + np.linalg.norm(a - b))</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag02-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How do you choose between OpenAI text-embedding-3-small and sentence-transformers for a production system?
  </summary>
  <div class="tp-qa-answer">
    <p>OpenAI's text-embedding-3-small (1536 dimensions) offers state-of-the-art quality on the MTEB leaderboard, supports Matryoshka dimensions, and requires no local infrastructure — but incurs per-token API cost and introduces network latency. Sentence-transformers (all-MiniLM-L6-v2: 384d, all-mpnet-base-v2: 768d) run locally with zero API cost, fixed latency, and full data privacy — but require GPU memory for large batches and may underperform on specialized domains. Choose OpenAI for rapid prototyping and when API costs are acceptable. Choose sentence-transformers for high-throughput, low-latency, or privacy-sensitive applications. Benchmark both on your specific domain — leaderboard rankings don't always predict domain-specific performance.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag02-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: What is binary quantization and how much accuracy loss does it incur?
  </summary>
  <div class="tp-qa-answer">
    <p>Binary quantization converts each float32 dimension (4 bytes) to a single bit (1 or 0 based on sign), achieving 32x storage reduction. A 384-dimensional float32 vector (1536 bytes) becomes 384 bits (48 bytes). Accuracy loss is typically 2-5% recall@10 on standard benchmarks, though it varies by domain and data distribution. The similarity computation becomes a fast XOR-popcount operation, making it 10-30x faster than float32 cosine similarity. Binary quantization is ideal for large-scale systems where memory is the bottleneck — with 10M vectors, float32 requires 60GB while binary requires only ~2GB. Always benchmark on your data before deploying.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag02-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How do pooling strategies (mean, CLS, max) affect embedding quality?
  </summary>
  <div class="tp-qa-answer">
    <p>Pooling aggregates token-level transformer outputs into a single sentence embedding. Mean pooling averages all token vectors weighted by attention mask — it is the most common and generally produces the best results for sentence similarity tasks. CLS pooling takes the [CLS] token's representation — it is the default in BERT-based models and works well for classification but can be less robust for similarity search. Max pooling takes the maximum value across each dimension — it captures the most salient features but loses frequency information. Most sentence embedding models (all-MiniLM, BGE) use mean pooling by default. The choice is usually made by the model architecture, not the user.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag02-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: What is the BEIR benchmark and how do you interpret its results?
  </summary>
  <div class="tp-qa-answer">
    <p>BEIR (Benchmarking Information Retrieval) evaluates embedding models across 18+ diverse datasets spanning biomedical (TREC-COVID), finance (FiQA), scientific (SciDocs), and general domains (Quora). It reports NDCG@10 as the primary metric. A high BEIR score (e.g., > 55 NDCG@10) indicates the model generalizes well across domains. However, BEIR scores do not guarantee performance on your specific domain — a model that scores 60 on BEIR might score 40 on legal documents if never trained on legal text. Use BEIR as a coarse filter for model selection, then evaluate the top candidates on your own domain-specific test set with your own relevance annotations.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag02-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do you handle rate limits when generating embeddings at scale?
  </summary>
  <div class="tp-qa-answer">
    <p>Implement a RateLimitedEmbedder with a sliding window that tracks requests-per-minute and tokens-per-minute. When approaching the limit, throttle by sleeping until the window resets. Batch embeddings in groups of 10-100 to reduce per-request overhead (many providers charge per token regardless of batch size). Implement retry with exponential backoff for rate limit errors (HTTP 429). Cache embeddings for repeated or near-duplicate text to avoid redundant API calls.</p>
    <pre><code>class RateLimitedEmbedder:
    def __init__(self, embed_fn, rpm=100, tpm=100000):
        self.embed_fn = embed_fn
        self.rpm = rpm
        self.tpm = tpm

    def embed_batch(self, texts):
        self._wait_if_needed(len(texts))
        return self.embed_fn(texts)</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag02-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: What embedding dimensionality do you recommend for different types of RAG applications?
  </summary>
  <div class="tp-qa-answer">
    <p>For most text-based RAG applications, 384-768 dimensions (all-MiniLM-L6-v2 or BGE-base) provide a good balance of accuracy, storage cost, and search speed. For precision-critical applications (legal, medical), 1024-3072 dimensions (text-embedding-3-large or Cohere embed-english-v3.0) improve recall by 3-8% at 4-8x storage cost. For high-throughput applications serving millions of vectors, 256-384 dimensions with binary quantization offer the best throughput-to-accuracy ratio. The rule of thumb: use the smallest dimension that meets your recall@10 target on a domain-specific validation set — don't default to the maximum just because the model supports it.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag02-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How does the BGE model's instruction prefix (query mode) improve retrieval?
  </summary>
  <div class="tp-qa-answer">
    <p>BGE (BAAI General Embedding) models recommend adding an instruction prefix to queries: "Represent this sentence for searching relevant passages: {query}". This aligns the query embedding space with the document embedding space, improving retrieval accuracy. Without the prefix, a query embedding may lie in a different region of the vector space than document embeddings, reducing similarity scores. The same principle applies to other models — Cohere uses input_type="search_query" vs "search_document", and sentence-transformers models are often fine-tuned with a query-document contrastive loss. Always follow the model's recommended encoding convention for query vs document.</p>
    <pre><code>def encode(self, text, query_mode=False):
    if query_mode:
        text = f"Represent this sentence for searching relevant passages: {text}"
    return model.encode(text)</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

<details data-qid="rag-s2-quiz1">
<summary><strong>1.</strong> What is the typical output of an embedding model for a sentence?</summary>
A. A single token ID
B. A dense vector of floating-point numbers
C. A probability distribution over vocabulary
D. A binary classification label
Answer: B
</details>

<details data-qid="rag-s2-quiz2">
<summary><strong>2.</strong> Which embedding model family supports Matryoshka representation learning?</summary>
A. BGE
B. Cohere Embed
C. OpenAI text-embedding-3
D. all-MiniLM-L6-v2
Answer: C
</details>

<details data-qid="rag-s2-quiz3">
<summary><strong>3.</strong> What is the primary advantage of binary quantization?</summary>
A. Improved search accuracy
B. 32x storage reduction
C. Faster model training
D. Better multilingual support
Answer: B
</details>

<details data-qid="rag-s2-quiz4">
<summary><strong>4.</strong> Which metric is most commonly used for comparing normalized text embeddings?</summary>
A. Euclidean distance
B. Manhattan distance
C. Cosine similarity
D. Hamming distance
Answer: C
</details>

<details data-qid="rag-s2-quiz5">
<summary><strong>5.</strong> What does BEIR benchmark evaluate?</summary>
A. Text classification accuracy
B. Information retrieval quality across diverse domains
C. Model training speed
D. Embedding storage efficiency
Answer: B
</details>

## Exercises


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition1. Write a script that compares OpenAI text-embedding-3-small (using mock data) with sentence-transformers all-MiniLM-L6-v2 on 10 sample sentences. Compute the cosine similarity matrix for each and compare the rankings.

2. Implement a Matryoshka embedder that stores 3072-dimensional embeddings but retrieves using only the first 256 dimensions. Measure recall@10 compared to using full dimensionality.

3. Build a binary quantization pipeline that converts float32 embeddings to binary, stores them, and performs similarity search. Report the accuracy loss vs full-precision embeddings on a benchmark of 1000 queries.

4. Create a rate-limited embedding service that queues requests, respects API rate limits (1000 RPM, 1M TPM), and processes embeddings in batches of 10. Simulate 5000 embedding requests.

5. Implement an embedding cache with LRU eviction policy. Cache 1000 embeddings and measure hit rate for a workload where 20% of queries repeat from the prev

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
- [ ] Have questions ready about how the company uses 12-rag-vector-databasesious 100.
