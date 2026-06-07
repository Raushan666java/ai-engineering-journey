# Week 2: Vector Databases

**Duration:** September 8-14, 2026 | **Hours:** 35

---

## Day 1-2: Qdrant

```bash
docker run -p 6333:6333 qdrant/qdrant
```

```python
from langchain_qdrant import Qdrant

vectorstore = Qdrant.from_documents(
    documents=chunks,
    embedding=embeddings,
    location=":memory:",  # or ":memory:"
    collection_name="my_docs",
)

# With filters
results = vectorstore.similarity_search(
    "Return policy",
    filter={"source": "policy.pdf"}
)
```

## Day 3-4: pgvector

```sql
CREATE EXTENSION vector;

CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    content TEXT,
    metadata JSONB,
    embedding VECTOR(384)
);
```

```python
# Python
from pgvector.psycopg2 import register_vector

cur.execute(
    "SELECT content FROM documents ORDER BY embedding <=> %s LIMIT 5",
    (query_embedding,)
)
```

## Day 5-6: Migration + Production

- Migrate ChromaDB → Qdrant
- Compare performance
- Document your learnings
