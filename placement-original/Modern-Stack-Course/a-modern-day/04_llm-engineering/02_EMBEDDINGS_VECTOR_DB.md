# 📊 STAGE 4B — Embeddings & Vector Databases

> **Level:** Intermediate → Advanced | **Duration:** 1 Week

---

## 1. Vector Database Comparison

| Database | Type | Best For | Pricing |
|----------|------|----------|---------|
| **FAISS** | Local library | Development, small data | Free |
| **Pinecone** | Cloud managed | Production, scalable | Freemium |
| **Weaviate** | Self-hosted/Cloud | Complex queries | Free/Cloud |
| **ChromaDB** | Local/Embedded | Prototyping | Free |
| **Qdrant** | Self-hosted | High performance | Free |
| **pgvector** | PostgreSQL extension | Existing PG users | Free |

---

## 2. FAISS (Facebook AI Similarity Search)

```python
import faiss
import numpy as np
from openai import OpenAI

client = OpenAI()

def embed(texts):
    response = client.embeddings.create(
        input=texts, model="text-embedding-3-small"
    )
    return np.array([d.embedding for d in response.data], dtype='float32')

# Create index
documents = [
    "Laravel provides elegant syntax for web development",
    "Docker containers package applications with dependencies",
    "React is a JavaScript library for building UIs",
    "Redis is an in-memory data structure store",
    "FastAPI is a modern Python web framework",
]

embeddings = embed(documents)
dimension = embeddings.shape[1]  # 1536

# Build FAISS index
index = faiss.IndexFlatIP(dimension)  # Inner Product (cosine sim for normalized vectors)
faiss.normalize_L2(embeddings)         # Normalize for cosine similarity
index.add(embeddings)

# Search
query = embed(["web framework for building APIs"])
faiss.normalize_L2(query)
distances, indices = index.search(query, k=3)

for i, idx in enumerate(indices[0]):
    print(f"  {distances[0][i]:.4f} | {documents[idx]}")
```

### Save/Load FAISS Index
```python
faiss.write_index(index, "my_index.faiss")
index = faiss.read_index("my_index.faiss")
```

---

## 3. Pinecone (Production Cloud)

```python
from pinecone import Pinecone

pc = Pinecone(api_key="YOUR_KEY")

# Create index
pc.create_index(
    name="my-knowledge",
    dimension=1536,
    metric="cosine",
    spec={"serverless": {"cloud": "aws", "region": "us-east-1"}}
)

index = pc.Index("my-knowledge")

# Upsert vectors
index.upsert(vectors=[
    {"id": "doc1", "values": embedding1, "metadata": {"source": "policy.pdf", "page": 1}},
    {"id": "doc2", "values": embedding2, "metadata": {"source": "policy.pdf", "page": 2}},
])

# Query
results = index.query(vector=query_embedding, top_k=5, include_metadata=True)
for match in results["matches"]:
    print(f"Score: {match['score']:.4f} | {match['metadata']['source']}")
```

---

## 4. ChromaDB (Simple & Local)

```python
import chromadb

client = chromadb.PersistentClient(path="./chroma_db")

collection = client.get_or_create_collection(
    name="documents",
    metadata={"hnsw:space": "cosine"}
)

# Add documents (auto-embeds if embedding function set)
collection.add(
    documents=["Laravel is PHP", "React is JavaScript"],
    ids=["doc1", "doc2"],
    metadatas=[{"type": "backend"}, {"type": "frontend"}]
)

# Query
results = collection.query(query_texts=["web framework"], n_results=2)
print(results["documents"])
```

---

## 5. pgvector (PostgreSQL Extension)

```sql
-- Install extension
CREATE EXTENSION vector;

-- Create table
CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    content TEXT,
    embedding vector(1536),
    metadata JSONB
);

-- Insert
INSERT INTO documents (content, embedding, metadata)
VALUES ('Laravel is a PHP framework', '[0.1, 0.2, ...]', '{"source": "docs"}');

-- Similarity search (cosine distance)
SELECT content, 1 - (embedding <=> $1) AS similarity
FROM documents
ORDER BY embedding <=> $1
LIMIT 5;
```

### Laravel + pgvector
```php
// Using pgvector with Laravel
DB::select("
    SELECT content, 1 - (embedding <=> ?) AS similarity
    FROM documents
    ORDER BY embedding <=> ?
    LIMIT 5
", [$queryEmbedding, $queryEmbedding]);
```

---

## 6. Choosing the Right Vector DB

```
Prototyping → ChromaDB or FAISS
Small production → pgvector (if already using PostgreSQL)
Large scale → Pinecone or Qdrant
Self-hosted → Weaviate or Qdrant
Multi-tenant SaaS → Pinecone (namespaces) or Qdrant (collections)
```

---

## 🎯 Practice Tasks
- [ ] Build FAISS index with 100+ documents
- [ ] Set up ChromaDB for local development
- [ ] Implement Pinecone for production use
- [ ] Add pgvector to existing PostgreSQL
- [ ] Build a complete search pipeline

---

*Next: [RAG Systems — Production →](./03_RAG_SYSTEMS.md)*
