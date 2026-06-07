# Week 1: Advanced RAG

**Duration:** September 1-7, 2026 | **Hours:** 35

---

## Day 1: Hybrid Search

```python
from langchain.retrievers import BM25Retriever, EnsembleRetriever

# Keyword search (BM25)
bm25_retriever = BM25Retriever.from_documents(docs)
bm25_retriever.k = 3

# Vector search
vector_retriever = vectorstore.as_retriever()

# Combine
ensemble = EnsembleRetriever(
    retrievers=[bm25_retriever, vector_retriever],
    weights=[0.3, 0.7]
)
```

## Day 2: Re-ranking

```python
from langchain.retrievers import ContextualCompressionRetriever
from langchain.retrievers.document_compressors import CohereRerank

compressor = CohereRerank()
compression_retriever = ContextualCompressionRetriever(
    base_compressor=compressor,
    base_retriever=vector_retriever
)
```

## Day 3-4: RAG Evaluation (RAGAS)

```python
from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevancy

result = evaluate(
    dataset=eval_dataset,
    metrics=[faithfulness, answer_relevancy]
)
print(result)
```

## Day 5-6: Advanced Techniques

- **HyDE:** Generate hypothetical document for better search
- **Multi-Query:** Generate multiple queries from one question
- **Parent Document:** Retrieve small chunks, return full parent

## Apply to Project 1

Upgrade Document AI Assistant with:
- Hybrid search
- Re-ranking
- Evaluation metrics
