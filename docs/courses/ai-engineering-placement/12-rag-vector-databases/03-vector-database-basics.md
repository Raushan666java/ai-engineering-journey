<!-- Clear Language: Keep sentences under 50 words -->
# Vector Database Basics

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand vector database architecture and key concepts |
| LO2 | Compare vector databases (Pinecone, Qdrant, Weaviate, Milvus, Chroma) |
| LO3 | Implement vector indexing with HNSW, IVF, and brute-force search |
| LO4 | Design collection schemas with metadata filtering |
| LO5 | Execute CRUD operations on vector data |
| LO6 | Scale vector search for production workloads |

## Introduction

Understanding vector database basics is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering vector database basics.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 3.1 | Vector DB Architecture | Storage, indexing, query engine, metadata store |
| 3.2 | Database Comparison | Pinecone, Qdrant, Weaviate, Milvus, Chroma |
| 3.3 | Indexing Algorithms | HNSW, IVF, Flat, DiskANN |
| 3.4 | Schema Design | Collections, vectors, metadata, payload |
| 3.5 | CRUD Operations | Insert, update, delete, query with filters |
| 3.6 | Scaling Strategies | Sharding, replication, hybrid cloud |

## Chapter Roadmap

```mermaid
flowchart TD
    A[Raw Text] --> B[Embedding Model]
    B --> C[Vector + Metadata]
    C --> D[Vector Database]
    D --> E[Index Builder]
    E --> F[HNSW Graph]
    E --> G[IVF Clusters]
    F --> H[Query Engine]
    G --> H
    H --> I[Similarity Search]
    I --> J[Ranked + Filtered Results]
```text

## 3.1 Vector Database Architecture

A vector database is purpose-built for storing and searching vector embeddings efficiently. Unlike traditional databases that search exact matches, vector databases find the nearest neighbors in high-dimensional space.

### Core Components

**Storage Layer**: Persists vectors, metadata, and indexes to disk or memory.

**Index Builder**: Constructs approximate nearest neighbor (ANN) indexes for fast search.

**Query Engine**: Accepts query vectors, runs ANN search, applies metadata filters, returns ranked results.

**Metadata Store**: Manages non-vector attributes (source, date, category) for filtering.

```python
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Any
import numpy as np
import time


@dataclass
class VectorRecord:
    id: str
    vector: List[float]
    metadata: Dict[str, Any] = field(default_factory=dict)


class VectorDatabase:
    def __init__(self, name: str, dimension: int):
        self.name = name
        self.dimension = dimension
        self.records: Dict[str, VectorRecord] = {}
        self.index = None

    def insert(self, record: VectorRecord) -> bool:
        if len(record.vector) != self.dimension:
            raise ValueError(f"Expected dimension {self.dimension}, got {len(record.vector)}")
        self.records[record.id] = record
        return True

    def delete(self, record_id: str) -> bool:
        return self.records.pop(record_id, None) is not None

    def get(self, record_id: str) -> Optional[VectorRecord]:
        return self.records.get(record_id)

    def size(self) -> int:
        return len(self.records)


db = VectorDatabase("my-collection", dimension=384)
rec = VectorRecord(id="doc-1", vector=[0.1] * 384, metadata={"source": "wikipedia"})
db.insert(rec)
print(f"Database size: {db.size()}")
print(f"Retrieved: {db.get('doc-1').metadata}")
```text

## 3.2 Database Comparison

### 3.2.1 Feature Comparison

| Feature | Pinecone | Qdrant | Weaviate | Milvus | Chroma |
|---------|----------|--------|----------|--------|--------|
| Hosting | Managed | Self/Cloud | Self/Cloud | Self/Cloud | Embedded |
| Index | HNSW | HNSW | HNSW | IVF/HNSW | HNSW |
| Filters | Metadata | Payload | GraphQL | boolean | where |
| Scalability | Auto | Manual | Manual | Manual | Single |
| Free tier | Yes | Yes | Yes | Yes | Yes |

```python
@dataclass
class VectorDBConfig:
    name: str
    hosting: str
    default_index: str
    supports_filters: bool
    max_dimension: int
    free_tier: bool


VECTOR_DBS = {
    "pinecone": VectorDBConfig("Pinecone", "managed", "HNSW", True, 20000, True),
    "qdrant": VectorDBConfig("Qdrant", "self-hosted", "HNSW", True, 65536, True),
    "weaviate": VectorDBConfig("Weaviate", "self-hosted", "HNSW", True, 65536, True),
    "milvus": VectorDBConfig("Milvus", "self-hosted", "IVF_FLAT", True, 65536, True),
    "chroma": VectorDBConfig("Chroma", "embedded", "HNSW", True, 65536, True),
}


def recommend_vector_db(
    scale: str,
    budget: str,
    requires_filters: bool = True,
) -> str:
    if scale == "small" and budget == "free":
        return "chroma"
    elif scale == "large" and budget == "paid":
        return "pinecone"
    elif scale == "large" and budget == "self-host":
        return "milvus"
    elif scale == "medium" and requires_filters:
        return "qdrant"
    else:
        return "chroma"


for scale, budget in [("small", "free"), ("large", "paid"), ("large", "self-host")]:
    rec = recommend_vector_db(scale, budget)
    print(f"Scale={scale}, Budget={budget}: {rec}")
```text

### 3.2.2 Local Vector Database (Chroma Example)

Chroma is the most developer-friendly option for prototyping.

```python

## Conceptual Chroma usage
import chromadb

## chroma_client = chromadb.Client()

## collection = chroma_client.create_collection(name="my_collection")

## collection.add(

##     documents=["Document about RAG", "Document about embeddings"],

##     metadatas=[{"source": "tutorial"}, {"source": "paper"}],

##     ids=["doc1", "doc2"]

## )

## results = collection.query(query_texts=["RAG pipeline"], n_results=2)

## print(results)

## In-memory mock for demonstration
class MockChromaCollection:
    def __init__(self, name: str):
        self.name = name
        self.documents: Dict[str, Dict] = {}

    def add(self, documents: List[str], metadatas: List[Dict], ids: List[str]):
        for doc, meta, did in zip(documents, metadatas, ids):
            self.documents[did] = {"document": doc, "metadata": meta}

    def query(self, query_texts: List[str], n_results: int = 10) -> Dict:
        # Simple keyword matching
        results = []
        for q in query_texts:
            scores = []
            for did, doc_data in self.documents.items():
                overlap = len(set(q.lower().split()) & set(doc_data["document"].lower().split()))
                scores.append((did, doc_data, overlap))
            scores.sort(key=lambda x: x[2], reverse=True)
            results.append([s[:2] for s in scores[:n_results]])

        return {"ids": [[r[0] for r in batch] for batch in results],
                "documents": [[r[1]["document"] for r in batch] for batch in results]}


chroma = MockChromaCollection("rag-docs")
chroma.add(
    documents=["RAG combines retrieval with generation", "Embeddings convert text to vectors"],
    metadatas=[{"source": "tutorial"}, {"source": "paper"}],
    ids=["doc1", "doc2"],
)
results = chroma.query(["RAG generation"])
print(f"Query results: {results}")
```text

## 3.3 Indexing Algorithms

### 3.3.1 Flat (Brute Force)

The simplest index — compares query against every vector. Guarantees exact results.

```python
class FlatIndex:
    def __init__(self):
        self.vectors: List[np.ndarray] = []
        self.ids: List[str] = []

    def add(self, vector: np.ndarray, record_id: str):
        self.vectors.append(vector)
        self.ids.append(record_id)

    def search(self, query: np.ndarray, k: int = 10) -> List[tuple]:
        similarities = []
        for vec, vid in zip(self.vectors, self.ids):
            sim = np.dot(query, vec) / (np.linalg.norm(query) * np.linalg.norm(vec) + 1e-10)
            similarities.append((vid, sim))

        similarities.sort(key=lambda x: x[1], reverse=True)
        return similarities[:k]

    def search_with_timing(self, query: np.ndarray, k: int = 10) -> Dict:
        start = time.time()
        results = self.search(query, k)
        elapsed = time.time() - start
        return {"results": results, "time_ms": round(elapsed * 1000, 2)}


flat = FlatIndex()
for i in range(100):
    flat.add(np.random.randn(384), f"doc-{i}")

result = flat.search_with_timing(np.random.randn(384), k=5)
print(f"Flat search: {result['time_ms']}ms, top ID: {result['results'][0][0]}")
```text

### 3.3.2 IVF (Inverted File Index)

IVF clusters vectors using K-means. Search only probes the nearest clusters, trading accuracy for speed.

```python
from sklearn.cluster import KMeans


class IVFIndex:
    def __init__(self, n_clusters: int = 10, n_probes: int = 3):
        self.n_clusters = n_clusters
        self.n_probes = n_probes
        self.kmeans: Optional[KMeans] = None
        self.inverted_lists: Dict[int, List[tuple]] = {}
        self.vectors: List[np.ndarray] = []
        self.ids: List[str] = []

    def add(self, vector: np.ndarray, record_id: str):
        self.vectors.append(vector)
        self.ids.append(record_id)

    def build_index(self):
        data = np.array(self.vectors)
        self.kmeans = KMeans(n_clusters=self.n_clusters, random_state=42, n_init=5)
        labels = self.kmeans.fit_predict(data)

        self.inverted_lists = {i: [] for i in range(self.n_clusters)}
        for label, vec, vid in zip(labels, self.vectors, self.ids):
            self.inverted_lists[label].append((vid, vec))

    def search(self, query: np.ndarray, k: int = 10) -> List[tuple]:
        query_distances = self.kmeans.transform([query])[0]
        nearest_clusters = np.argsort(query_distances)[:self.n_probes]

        candidates = []
        for cluster_id in nearest_clusters:
            for vid, vec in self.inverted_lists.get(cluster_id, []):
                sim = np.dot(query, vec) / (np.linalg.norm(query) * np.linalg.norm(vec) + 1e-10)
                candidates.append((vid, sim))

        candidates.sort(key=lambda x: x[1], reverse=True)
        return candidates[:k]


ivf = IVFIndex(n_clusters=5, n_probes=2)
for i in range(100):
    ivf.add(np.random.randn(384), f"doc-{i}")
ivf.build_index()

results = ivf.search(np.random.randn(384), k=5)
print(f"IVF search results: {len(results)} candidates")
```text

### 3.3.3 HNSW (Hierarchical Navigable Small World)

HNSW builds a multi-layer graph where upper layers have fewer nodes (long-range connections) and lower layers have more nodes (fine-grained connections). It offers superior speed-accuracy tradeoffs.

```python
class HNSWNode:
    def __init__(self, vector: np.ndarray, record_id: str, level: int):
        self.vector = vector
        self.record_id = record_id
        self.level = level
        self.neighbors: Dict[int, List[str]] = {}  # level -> list of neighbor IDs


class HNSWIndex:
    def __init__(self, M: int = 16, ef_construction: int = 200, ef_search: int = 50):
        self.M = M
        self.ef_construction = ef_construction
        self.ef_search = ef_search
        self.nodes: Dict[str, HNSWNode] = {}
        self.entry_point: Optional[str] = None
        self.max_level = 0

    def _random_level(self) -> int:
        level = 0
        while np.random.random() < 0.5 and level < 16:
            level += 1
        return level

    def add(self, vector: np.ndarray, record_id: str):
        level = self._random_level()
        node = HNSWNode(vector, record_id, level)
        self.nodes[record_id] = node

        if self.entry_point is None:
            self.entry_point = record_id
            self.max_level = level
            return

        # Greedy search from entry point
        curr = self.entry_point
        for lc in range(self.max_level, level, -1):
            curr = self._greedy_search(vector, curr, lc)

        for lc in range(min(level, self.max_level), -1, -1):
            nearest = self._search_layer(vector, curr, lc, self.ef_construction)
            node.neighbors[lc] = [n[0] for n in nearest[:self.M]]
            # Add reverse connections
            for nid, _ in nearest[:self.M]:
                if lc not in self.nodes[nid].neighbors:
                    self.nodes[nid].neighbors[lc] = []
                self.nodes[nid].neighbors[lc].append(record_id)

        if level > self.max_level:
            self.max_level = level
            self.entry_point = record_id

    def _greedy_search(self, query: np.ndarray, entry_id: str, level: int) -> str:
        best = entry_id
        best_dist = float(np.linalg.norm(self.nodes[best].vector - query))

        improved = True
        while improved:
            improved = False
            for neighbor_id in self.nodes[best].neighbors.get(level, []):
                dist = float(np.linalg.norm(self.nodes[neighbor_id].vector - query))
                if dist < best_dist:
                    best_dist = dist
                    best = neighbor_id
                    improved = True
        return best

    def _search_layer(self, query: np.ndarray, entry_id: str, level: int, ef: int) -> List[tuple]:
        visited = {entry_id}
        candidates = [(float(np.linalg.norm(self.nodes[entry_id].vector - query)), entry_id)]
        results = candidates.copy()

        while candidates:
            dist_c, c_id = candidates.pop(0)
            furthest_result = max(results, key=lambda x: x[0])
            if dist_c > furthest_result[0]:
                break

            for neighbor_id in self.nodes[c_id].neighbors.get(level, []):
                if neighbor_id in visited:
                    continue
                visited.add(neighbor_id)
                dist = float(np.linalg.norm(self.nodes[neighbor_id].vector - query))
                if len(results) < ef or dist < max(r[0] for r in results):
                    candidates.append((dist, neighbor_id))
                    results.append((dist, neighbor_id))
                    results.sort(key=lambda x: x[0])
                    if len(results) > ef:
                        results = results[:ef]

        return results

    def search(self, query: np.ndarray, k: int = 10) -> List[tuple]:
        if self.entry_point is None:
            return []

        curr = self.entry_point
        for lc in range(self.max_level, 0, -1):
            curr = self._greedy_search(query, curr, lc)

        results = self._search_layer(query, curr, 0, max(self.ef_search, k))
        return [(r[1], 1.0 / (1.0 + r[0])) for r in results[:k]]


hnsw = HNSWIndex(M=8, ef_construction=50, ef_search=20)
for i in range(50):
    hnsw.add(np.random.randn(384), f"doc-{i}")

results = hnsw.search(np.random.randn(384), k=5)
for rid, score in results:
    print(f"  {rid}: similarity={score:.4f}")
```text

### 3.3.4 Index Comparison

```python
class IndexBenchmark:
    def __init__(self, dimension: int, num_vectors: int):
        self.dimension = dimension
        self.num_vectors = num_vectors
        self.data = [np.random.randn(dimension) for _ in range(num_vectors)]
        self.queries = [np.random.randn(dimension) for _ in range(20)]

    def benchmark_index(self, index, index_name: str) -> Dict:
        build_start = time.time()
        for i, vec in enumerate(self.data):
            index.add(vec, f"doc-{i}")
        if hasattr(index, 'build_index'):
            index.build_index()
        build_time = time.time() - build_start

        search_times = []
        for query in self.queries:
            start = time.time()
            results = index.search(query, k=10)
            search_times.append(time.time() - start)

        return {
            "index": index_name,
            "build_time_ms": round(build_time * 1000, 2),
            "avg_search_ms": round(np.mean(search_times) * 1000, 2),
            "p95_search_ms": round(np.percentile(search_times, 95) * 1000, 2),
        }


benchmark = IndexBenchmark(dimension=128, num_vectors=1000)

## flat_result = benchmark.benchmark_index(FlatIndex(), "Flat")

## print(flat_result)
print("Benchmark ready for testing")
```text

## 3.4 Schema Design

### 3.4.1 Collection Schema

Define the structure of vectors and their associated metadata.

```python
@dataclass
class CollectionSchema:
    name: str
    dimension: int
    metric: str  # cosine, dot, euclidean
    fields: Dict[str, str]  # field_name -> data_type


class CollectionManager:
    def __init__(self):
        self.collections: Dict[str, CollectionSchema] = {}

    def create_collection(
        self,
        name: str,
        dimension: int,
        metric: str = "cosine",
        fields: Dict[str, str] = None,
    ):
        if name in self.collections:
            raise ValueError(f"Collection '{name}' already exists")

        schema = CollectionSchema(
            name=name,
            dimension=dimension,
            metric=metric,
            fields=fields or {},
        )
        self.collections[name] = schema
        return schema

    def list_collections(self) -> List[str]:
        return list(self.collections.keys())

    def get_schema(self, name: str) -> CollectionSchema:
        return self.collections.get(name)


manager = CollectionManager()
schema = manager.create_collection(
    name="documents",
    dimension=384,
    metric="cosine",
    fields={
        "title": "string",
        "source": "string",
        "date": "timestamp",
        "page_count": "integer",
        "embedding_model": "string",
    },
)
print(f"Collection '{schema.name}' created with {len(schema.fields)} metadata fields")
```text

### 3.4.2 Metadata Indexing

Metadata filtering narrows search space before similarity computation.

```python
@dataclass
class FilterCondition:
    field: str
    operator: str  # eq, neq, gt, gte, lt, lte, in, not_in
    value: Any


class MetadataFilter:
    def __init__(self, conditions: List[FilterCondition]):
        self.conditions = conditions

    def apply(self, records: List[VectorRecord]) -> List[VectorRecord]:
        results = records
        for cond in self.conditions:
            results = [r for r in results if self._check_condition(r, cond)]
        return results

    def _check_condition(self, record: VectorRecord, cond: FilterCondition) -> bool:
        val = record.metadata.get(cond.field)

        if cond.operator == "eq":
            return val == cond.value
        elif cond.operator == "neq":
            return val != cond.value
        elif cond.operator == "gt":
            return val is not None and val > cond.value
        elif cond.operator == "gte":
            return val is not None and val >= cond.value
        elif cond.operator == "lt":
            return val is not None and val < cond.value
        elif cond.operator == "lte":
            return val is not None and val <= cond.value
        elif cond.operator == "in":
            return val in cond.value
        elif cond.operator == "not_in":
            return val not in cond.value
        return True


records = [
    VectorRecord("1", [0.1]*384, {"source": "wikipedia", "year": 2023}),
    VectorRecord("2", [0.2]*384, {"source": "arxiv", "year": 2024}),
    VectorRecord("3", [0.3]*384, {"source": "wikipedia", "year": 2020}),
]

filter_obj = MetadataFilter([FilterCondition("source", "eq", "wikipedia")])
filtered = filter_obj.apply(records)
print(f"Filtered records: {[r.id for r in filtered]}")
```text

### 3.4.3 Payload Storage (Qdrant-style)

```python
@dataclass
class Payload:
    """Structured metadata attached to vectors (Qdrant terminology)."""
    data: Dict[str, Any]

    def get(self, key: str, default=None):
        return self.data.get(key, default)

    def update(self, updates: Dict):
        self.data.update(updates)


class PayloadIndex:
    """Index over specific payload fields for fast filtering."""
    def __init__(self, field_name: str, field_type: str):
        self.field_name = field_name
        self.field_type = field_type
        self.index: Dict[Any, List[str]] = {}  # value -> [record_ids]

    def add(self, record_id: str, payload: Payload):
        value = payload.get(self.field_name)
        if value is not None:
            if value not in self.index:
                self.index[value] = []
            self.index[value].append(record_id)

    def search(self, value: Any) -> List[str]:
        return self.index.get(value, [])

    def remove(self, record_id: str, payload: Payload):
        value = payload.get(self.field_name)
        if value and value in self.index:
            self.index[value] = [r for r in self.index[value] if r != record_id]


payload_idx = PayloadIndex("category", "string")
payload_idx.add("doc-1", Payload({"category": "science"}))
payload_idx.add("doc-2", Payload({"category": "technology"}))
print(f"Science docs: {payload_idx.search('science')}")
```text

## 3.5 CRUD Operations

### 3.5.1 Insert with Batching

```python
class VectorCollection:
    def __init__(self, name: str, dimension: int):
        self.name = name
        self.dimension = dimension
        self.records: Dict[str, VectorRecord] = {}
        self.index = FlatIndex()

    def insert(self, record: VectorRecord):
        if len(record.vector) != self.dimension:
            raise ValueError(f"Vector dimension mismatch")
        self.records[record.id] = record
        self.index.add(np.array(record.vector), record.id)

    def insert_batch(self, records: List[VectorRecord]):
        for r in records:
            self.insert(r)

    def upsert(self, record: VectorRecord):
        """Insert or update an existing record."""
        if record.id in self.records:
            self.delete(record.id)
        self.insert(record)

    def delete(self, record_id: str) -> bool:
        if record_id in self.records:
            del self.records[record_id]
            return True
        return False

    def update_metadata(self, record_id: str, metadata_updates: Dict):
        if record_id in self.records:
            self.records[record_id].metadata.update(metadata_updates)
            return True
        return False

    def search(self, query_vector: np.ndarray, k: int = 10, filter_cond: MetadataFilter = None) -> List[tuple]:
        candidates = self.index.search(query_vector, k * 2)  # Fetch more for filtering

        if filter_cond:
            # Filter and re-rank
            filtered = []
            for rid, score in candidates:
                record = self.records.get(rid)
                if record and filter_cond.apply([record]):
                    filtered.append((rid, score))
            return filtered[:k]
        return candidates[:k]


collection = VectorCollection("my-docs", 384)
collection.insert_batch([
    VectorRecord("doc-1", np.random.randn(384).tolist(), {"source": "web", "year": 2024}),
    VectorRecord("doc-2", np.random.randn(384).tolist(), {"source": "pdf", "year": 2023}),
])

collection.upsert(VectorRecord("doc-3", np.random.randn(384).tolist(), {"source": "web", "year": 2024}))
results = collection.search(np.random.randn(384), k=5)
print(f"Search returned {len(results)} results")
```text

### 3.5.2 Scroll / Pagination

```python
class PaginatedCollection:
    def __init__(self, collection: VectorCollection, page_size: int = 100):
        self.collection = collection
        self.page_size = page_size

    def scroll(self, offset: int = 0) -> Dict:
        keys = list(self.collection.records.keys())
        page = keys[offset:offset + self.page_size]
        return {
            "records": [self.collection.records[k] for k in page],
            "offset": offset + len(page),
            "has_more": offset + len(page) < len(keys),
        }


pc = PaginatedCollection(collection, page_size=1)
page = pc.scroll(0)
print(f"Page has {len(page['records'])} records, has_more: {page['has_more']}")
```text

### 3.5.3 Bulk Export

```python
def export_collection(
    collection: VectorCollection,
    format: str = "jsonl",
    include_vectors: bool = False,
) -> str:
    lines = []
    for rid, record in collection.records.items():
        entry = {"id": rid, "metadata": record.metadata}
        if include_vectors:
            entry["vector"] = record.vector
        lines.append(json.dumps(entry))

    return "\n".join(lines)


exported = export_collection(collection, include_vectors=False)
print(f"Exported {len(exported.splitlines())} records")
```text

## 3.6 Scaling Strategies

### 3.6.1 Sharding

Distribute vectors across multiple shards based on hash or range.

```python
class ShardedVectorDB:
    def __init__(self, num_shards: int, dimension: int):
        self.shards = [VectorCollection(f"shard-{i}", dimension) for i in range(num_shards)]

    def _get_shard(self, record_id: str) -> VectorCollection:
        shard_idx = hash(record_id) % len(self.shards)
        return self.shards[shard_idx]

    def insert(self, record: VectorRecord):
        shard = self._get_shard(record.id)
        shard.insert(record)

    def search(self, query_vector: np.ndarray, k: int = 10) -> List[tuple]:
        # Search all shards in parallel, merge results
        all_results = []
        for shard in self.shards:
            all_results.extend(shard.search(query_vector, k))

        all_results.sort(key=lambda x: x[1], reverse=True)
        return all_results[:k]

    def stats(self) -> Dict:
        return {
            "num_shards": len(self.shards),
            "total_records": sum(s.size() for s in self.shards),
            "shard_sizes": [s.size() for s in self.shards],
        }


sharded = ShardedVectorDB(num_shards=4, dimension=384)
for i in range(100):
    sharded.insert(VectorRecord(f"doc-{i}", np.random.randn(384).tolist(), {"idx": i}))

print(sharded.stats())
```text

### 3.6.2 Replication

```python
class ReplicatedVectorDB:
    def __init__(self, num_replicas: int, dimension: int):
        self.replicas = [VectorCollection(f"replica-{i}", dimension) for i in range(num_replicas)]

    def write(self, record: VectorRecord):
        for replica in self.replicas:
            replica.insert(record)

    def read(self, query_vector: np.ndarray, k: int = 10) -> List[tuple]:
        replica = np.random.choice(self.replicas)  # Random read
        return replica.search(query_vector, k)

    def consistency_check(self) -> bool:
        sizes = [r.size() for r in self.replicas]
        return len(set(sizes)) == 1


replicated = ReplicatedVectorDB(3, 384)
replicated.write(VectorRecord("doc-1", [0.1]*384, {}))
print(f"Consistent: {replicated.consistency_check()}")
```text

### 3.6.3 Hybrid Cloud Strategy

```python
class HybridVectorDB:
    def __init__(self, local: VectorDatabase, cloud: str = "pinecone"):
        self.local = local
        self.cloud = cloud
        self._cloud_enabled = True

    def search(self, query_vector: np.ndarray, k: int = 10) -> List[tuple]:
        local_results = self._search_local(query_vector, k)

        if self._cloud_enabled and len(local_results) < k:
            cloud_results = self._search_cloud(query_vector, k - len(local_results))
            local_results.extend(cloud_results)

        return local_results[:k]

    def _search_local(self, query: np.ndarray, k: int) -> List[tuple]:
        return []

    def _search_cloud(self, query: np.ndarray, k: int) -> List[tuple]:
        return [("cloud-result", 0.9)]

    def failover_to_local(self):
        self._cloud_enabled = False


hybrid = HybridVectorDB(VectorDatabase("local", 384))
print(f"Hybrid DB: local + {hybrid.cloud}")
```text

## Summary

Vector databases are specialized systems for storing and searching high-dimensional embeddings. Key databases include Pinecone (managed), Qdrant (Rust-based, self-hosted), Weaviate (GraphQL-native), Milvus (massive scale), and Chroma (embedded, developer-friendly). Indexing algorithms balance search speed and accuracy: Flat (exact), IVF (clustered, approximate), and HNSW (graph-based, state-of-the-art). Schema design involves defining vector dimensions, distance metrics, and metadata fields. Production deployments require CRUD operations with batching, metadata filtering, pagination, and scaling strategies including sharding, replication, and hybrid cloud architectures.

## Practical Takeaways

| Takeaway | Description |
|----------|-------------|
| Start with HNSW | Best all-around index for most workloads (speed + accuracy) |
| Use metadata filters | Filter before vector search when possible to reduce search space |
| Batch inserts | Insert vectors in batches of 100-1000 for optimal throughput |
| Right-size dimensions | 384-768 dimensions sufficient for most text; higher dims for precision-critical |
| Plan for scaling | Shard by record ID hash for horizontal scaling |
| Test with your data | Index performance varies by data distribution — benchmark on your dataset |

## Interview Q&A

<details class="tp-qa-card" data-qid="rag03-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: Compare HNSW vs IVF indexing — when would you choose each?
  </summary>
  <div class="tp-qa-answer">
    <p>HNSW (Hierarchical Navigable Small World) builds a multi-layer graph where upper layers have long-range connections for fast traversal and lower layers have fine-grained connections for precision. It offers the best speed-accuracy trade-off (95-99% recall at 10x speedup) but uses more memory and has slower index construction. IVF (Inverted File Index) clusters vectors with K-means and searches only the nearest clusters — it uses less memory than HNSW and supports faster construction, but at lower recall for the same search time. Choose HNSW for most production workloads where memory is available and search speed is critical. Choose IVF for very large datasets (100M+) where memory is a constraint, or for dynamic datasets requiring frequent insertions.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag03-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: How does metadata filtering work in vector databases and what are the performance implications?
  </summary>
  <div class="tp-qa-answer">
    <p>Metadata filtering narrows the search space by applying attribute constraints (e.g., source="wikipedia", year>=2023) before or during vector similarity computation. There are two strategies: pre-filtering (filter records by metadata first, then search among remaining vectors) and post-filtering (search vectors first, then filter results). Pre-filtering is faster when the filter is highly selective (removes 90%+ of records), but can miss relevant results if the filter is too restrictive. Post-filtering maintains recall but wastes computation on filtered-out results. Most vector databases support both, with pre-filtering implemented via inverted metadata indexes for efficient range and equality queries. The optimal strategy depends on filter selectivity and index type.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag03-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: How would you choose between Pinecone (managed), Qdrant (self-hosted), and Chroma (embedded)?
  </summary>
  <div class="tp-qa-answer">
    <p>Pinecone is fully managed with auto-scaling, requires zero DevOps, and is ideal for teams that want to focus on application logic rather than infrastructure — but it is the most expensive option at scale. Qdrant (self-hosted) offers full control over hardware, lower cost at scale, and is written in Rust for high performance — suitable for teams with DevOps capability handling 10M+ vectors. Chroma is embedded (runs in-process), requires no separate server, and is perfect for prototyping, local development, and small-scale applications (< 1M vectors). Choose based on team expertise and scale requirements: Chroma for dev, Pinecone for quick production, Qdrant/Milvus for cost-optimized production at scale.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag03-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: Explain the HNSW algorithm — how do the layers enable fast search?
  </summary>
  <div class="tp-qa-answer">
    <p>HNSW builds a hierarchy of navigable small-world graphs. Each node (vector) is assigned a random level L, and appears in layers 0 through L. The topmost layer has the fewest nodes and the longest edges — enabling rapid traversal to the approximate region of the query. At each subsequent layer, the search zooms in with shorter edges until reaching layer 0, which contains all nodes for fine-grained nearest neighbor identification. The entry point is always at the topmost layer. Search complexity is O(log N) across layers plus O(ef) at the bottom layer, where ef controls search time vs recall. Typical settings: M=16 (connections per node), ef_construction=200, ef_search=50.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag03-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How do you design a collection schema for a multi-tenant vector database?
  </summary>
  <div class="tp-qa-answer">
    <p>Include a tenant_id field in the metadata of every vector. Create a metadata index on tenant_id for fast filtering. Prefix the vector ID with tenant_id to guarantee uniqueness and enable tenant-scoped deletion. At query time, always apply a metadata filter for tenant_id = current_tenant to ensure data isolation. For performance, consider per-tenant collections or partitions if tenants have very different data distributions or sizes. Some databases (Qdrant, Milvus) support multi-tenancy natively with payload filtering. Storage can be optimized by co-locating smaller tenants in shared collections with tenant_id filters and isolating large tenants in dedicated collections.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag03-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: What is the difference between cosine, dot product, and Euclidean distance in vector DB configuration?
  </summary>
  <div class="tp-qa-answer">
    <p>The distance metric determines how similarity is computed during search. Cosine distance (1 - cosine_similarity) is the default for text embeddings and works with normalized vectors. Dot product measures raw vector alignment — equivalent to cosine when vectors are normalized, but favors larger magnitudes otherwise. Euclidean (L2) distance measures straight-line distance — commonly used for image embeddings or when vector magnitude carries meaning. Most vector databases require you to choose the metric at collection creation time because it affects index construction. For text embeddings normalized to unit length, all three metrics produce the same ranking (just scaled differently), so choose cosine for semantic clarity.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag03-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: How do you implement CRUD operations (update, delete) in a vector database effectively?
  </summary>
  <div class="tp-qa-answer">
    <p>Insert: batch inserts of 100-1000 vectors for optimal throughput — many databases support atomic batch operations. Update: use upsert (insert + overwrite by ID) — the database marks the old vector as deleted and inserts the new one; the index is updated lazily or in the next optimization cycle. Delete: delete by ID or by metadata filter (e.g., delete all vectors where document_id = "doc-123"). For bulk deletes, consider dropping and recreating the collection. After many mutations, the index degrades — schedule periodic optimization (hnsw: re-index nodes; ivf: re-cluster) to maintain query performance. Most managed databases handle this automatically with background optimization jobs.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag03-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How does sharding work for horizontal scaling of vector databases?
  </summary>
  <div class="tp-qa-answer">
    <p>Sharding distributes vectors across multiple physical nodes based on a shard key — typically the vector ID hash. Each shard maintains its own index and serves queries independently. When a query arrives, it is broadcast to all shards, each returns its top-k results, and a coordinator merges and re-ranks the combined results. The number of shards determines write throughput (each shard handles its own writes) and memory capacity. For optimal performance, keep each shard's index in memory. Hash-based sharding ensures even distribution but requires searching all shards for every query. Range-based sharding (by metadata) can restrict queries to fewer shards but risks data skew.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag03-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: What factors affect vector search latency and how do you optimize each?
  </summary>
  <div class="tp-qa-answer">
    <p>Key latency factors: index type (HNSW: 1-5ms for 1M vectors, Flat: 100-500ms), number of vectors (logarithmic for HNSW, linear for Flat), vector dimensionality (384d vs 3072d: 8x more computation), ef_search parameter (higher = slower but more accurate), metadata filtering (complex filters slow down search), and hardware (SSD vs RAM, CPU vs GPU). Optimize by: choosing HNSW over Flat, reducing dimensionality (384d is sufficient for most text tasks), tuning ef_search to the minimum acceptable recall, pre-filtering with metadata indexes, and using quantization (binary -> 32x speed, scalar -> 4x speed) for memory-bound workloads.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag03-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How do you migrate vector data between different vector database providers?
  </summary>
  <div class="tp-qa-answer">
    <p>Export vectors with their IDs, metadata, and payloads in a portable format like JSONL or Parquet. Most databases support bulk export/import. For cross-provider migration, write an adapter that reads from the source DB's export API and writes to the target DB's import endpoint. Key considerations: embedding models must be the same (same model, same dimensionality, same normalization) otherwise retrieved results will differ. If vectors are stored as float32, they can be directly transferred. Plan for downtime or dual-write during the cutover — write to both databases during migration, then switch reads to the new DB after verifying consistency. For large datasets (> 10M vectors), test migration on a sample first.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

<details data-qid="rag-s3-quiz1">
<summary><strong>1.</strong> Which index type offers exact (not approximate) nearest neighbor search?</summary>
A. HNSW
B. IVF
C. Flat
D. DiskANN
Answer: C
</details>

<details data-qid="rag-s3-quiz2">
<summary><strong>2.</strong> What does HNSW stand for?</summary>
A. High Node Search Walk
B. Hierarchical Navigable Small World
C. Hybrid Neural Search Window
D. Heuristic Nearest Sample Weight
Answer: B
</details>

<details data-qid="rag-s3-quiz3">
<summary><strong>3.</strong> Which vector database is best suited for embedded/local development?</summary>
A. Pinecone
B. Milvus
C. Chroma
D. Weaviate
Answer: C
</details>

<details data-qid="rag-s3-quiz4">
<summary><strong>4.</strong> How does IVF index reduce search time?</summary>
A. By using GPU acceleration
B. By clustering vectors and searching only nearest clusters
C. By compressing vectors to binary
D. By caching frequent queries
Answer: B
</details>

<details data-qid="rag-s3-quiz5">
<summary><strong>5.</strong> What is the purpose of metadata filtering in vector search?</summary>
A. To reduce embedding dimension
B. To narrow search space before similarity computation
C. To encrypt vector data
D. To compress search results
Answer: B
</details>

## Exercises


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition1. Implement a Flat index for exact nearest neighbor search on 1000 randomly generated vectors. Benchmark search time for k=10 against an HNSW implementation (simplified). Report speedup and recall.

2. Design a collection schema for a knowledge base of technical documentation. Include fields for title, author, publish date, version, tags, and reading level. Create 20 sample records with proper metadata.

3. Build a metadata filtering system that supports AND/OR conditions. Test with filters like `(source == "wikipedia" AND year >= 2023) OR (source == "arxiv")`.

4. Implement a sharded vector database with 4 shards and a write-once-read-many workload. Insert 1000 vectors and measure query latency vs a single-shard baseline.

5. Create a paginated vector search that returns results in pages of 20, supports cursor-based pagination, and applies metadata filters. Test with 200 records and verify correct pagination across a

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
- [ ] Have questions ready about how the company uses 12-rag-vector-databasesll pages.


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

**Q: How long does it take to master vector database basics?
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

The Evolution of this technology reflects decades of research and practical engineering experience.

Understanding the evolution of vector database basics helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding vector database basics at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of vector database basics like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply vector database basics concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of vector database basics?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply vector database basics in real systems?
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

When applying vector database basics to specific use cases, consider:
- Adapting general principles to your specific domain
- Performance optimization for your target hardware
- Cost considerations for production deployment
- Monitoring and observability in production

## Open-Source Tools

- **LangChain**: Framework for building LLM-powered applications
- **LlamaIndex**: Data framework for connecting LLMs with external data
- **Hugging Face Transformers**: State-of-the-art ML models and datasets
- **Weights & Biases**: Experiment tracking and model evaluation
- **MLflow**: Open-source platform for ML lifecycle management
- **Prometheus + Grafana**: Monitoring and observability stack

## Debugging Guide

**Common Issues**:
- Check input validation and data types
- Verify API keys and authentication
- Monitor resource usage (CPU, memory, GPU)
- Review error logs for stack traces

**Debugging Steps**:
1. Reproduce the issue with minimal input
2. Add logging at key points
3. Check external dependencies
4. Verify configuration settings
5. Test with known-good inputs

## Mock Interview Section

**Quick Fire Questions**:
1. What is the core concept of RAG & Vector Databases?
2. When would you use this in production?
3. What are the trade-offs?
4. How does this scale?
5. What are common pitfalls?

**Follow-up Questions**:
- How would you optimize this for 10x scale?
- What monitoring would you add?
- How would you test this in production?

## References

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers from NeurIPS, ICML, ICLR
- Industry blogs from Google, Meta, OpenAI, Anthropic

## Prompt Engineering Notes

- **Be Specific**: Clear, detailed prompts get better results
- **Provide Examples**: Few-shot learning improves consistency
- **Use Structured Output**: JSON, tables, or markdown for parsing
- **Chain of Thought**: Break complex reasoning into steps
- **Temperature Control**: Adjust creativity vs consistency

## Evaluation Metrics

**Model Evaluation**:
- Accuracy, Precision, Recall, F1-Score
- BLEU, ROUGE for text generation
- Latency, Throughput, Cost per inference

**System Evaluation**:
- End-to-end latency (p50, p95, p99)
- Error rate and availability
- Resource utilization (CPU, memory, GPU)

## Real-World Examples

**Industry Applications**:
- Google: Search ranking, translation, autocomplete
- Amazon: Product recommendations, Alexa, fraud detection
- Netflix: Content recommendations, personalization
- Tesla: Autonomous driving, computer vision
- OpenAI: ChatGPT, DALL-E, Codex

## Next Topic

After mastering RAG & Vector Databases, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.