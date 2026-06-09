# Phase 4 — Advanced RAG

**Duration:** 2 Weeks (Aug 2026)
**Goal:** Production-ready RAG systems

---

## Naive RAG ki Problems

```
Tu Phase 3 mein basic RAG kiya:
  Document → Chunk → Embed → Store → Retrieve → Generate

Par production mein yeh problems aati hain:

❌ Lost in the Middle
   → LLM context ke beech wale documents ignore karta hai
   → Sirf first and last chunks matter karte hain

❌ Chunk Boundary Issues
   → Related information alag chunks mein split ho jaati hai
   → LLM ko incomplete context milta hai

❌ Fixed Chunk Size
   → Small chunks → missing context
   → Large chunks → irrelevant info + token waste

❌ Single Retrieval
   → Ek hi query, ek hi retrieval method
   → Different information needs different approaches

❌ No Quality Control
   → Garbage in = garbage out
   → Retrieved documents relevant hain ya nahi, pata nahi
```

---

## Advanced Techniques

### 1. Query Transformation
```
Original Query: "Q4 sales kya the?"

→ MultiQuery: 5 different versions of same query
→ StepBack:  "What happened in Q4 overall?"
→ HyDE:      "A typical Q4 sales report looks like..."
```

### 2. RAPTOR
```
Documents → Chunks → Cluster → Summarize → Retrieve
                    ↑________________________|
      Hierarchical summarization for better context
```

### 3. Self-RAG
```
Retrieve → Check Relevance → Generate → Check Hallucination → Refine
             ^                                   ^
        "Is this relevant?"           "Is this factual?"
```

### 4. Re-ranking
```
Retrieve 50 docs → Re-rank top 10 → Generate
Better than direct top-10 retrieval
```

### 5. Hybrid Search
```
Dense (vector)  +  Sparse (BM25/keyword)
Semantic match     Exact keyword match
```

---

## Production Concerns

| Concern | Solution |
|---------|----------|
| Latency | Embedding cache, vector DB indexing |
| Quality | Re-ranking, RAGAS evaluation |
| Cost | Document compression, selective retrieval |
| Monitoring | LangSmith tracing, retrieval logging |
| Hallucination | Self-RAG, fact-checking, grounding |

---

## 2-Week Sprint

| Week | Focus | Topics |
|------|-------|--------|
| 01 | Advanced Techniques | HyDE, RAPTOR, Self-RAG, re-ranking, hybrid search |
| 02 | Vector DBs in Production | Pinecone/Qdrant, indexing, caching, RAGAS, deployment |

---

## Prerequisites

- Phase 3 LangChain complete karo
- Basic RAG pipeline likh chuka hai
- Embeddings aur VectorStore samajh mein hai
- FastAPI / Python backend experience

---

## Completion Criteria

- [ ] Naive RAG ki problems samajh gaye
- [ ] Query Transformation implement kar liya
- [ ] RAPTOR ka basic version bana liya
- [ ] Self-RAG implement kar liya
- [ ] CrossEncoder re-ranker integrate kiya
- [ ] Hybrid search (dense + sparse) kaam kar raha hai
- [ ] Vector DB (Qdrant/Pinecone) setup kiya
- [ ] RAGAS se retrieval quality measure kiya
- [ ] Production RAG API deployed hai
- [ ] **ApexERP RAG project GitHub pe live hai**

---

## Weeks

- [Week 1 — Advanced Techniques](week-01/index.md)
- [Week 2 — Vector DBs in Production](week-02/index.md)
- [Project — ApexERP RAG System](projects/apexerp-rag.md)
