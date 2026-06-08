# 🏭 STAGE 4C — Production RAG Systems

> **Level:** Advanced | **Duration:** 1 Week

---

## 1. Production RAG Architecture

```
Document Pipeline:
  PDF/HTML/DB → Loader → Chunker → Embedder → Vector DB

Query Pipeline:
  User Query → Embedder → Vector Search → Re-ranker → LLM → Answer
```

---

## 2. Advanced Chunking

```python
from langchain.text_splitter import RecursiveCharacterTextSplitter

# For code
code_splitter = RecursiveCharacterTextSplitter.from_language(
    language="python", chunk_size=1000, chunk_overlap=100
)

# For markdown
md_splitter = RecursiveCharacterTextSplitter.from_language(
    language="markdown", chunk_size=1000, chunk_overlap=200
)

# Semantic chunking (based on meaning breaks)
from langchain_experimental.text_splitter import SemanticChunker
from langchain_openai import OpenAIEmbeddings

semantic_splitter = SemanticChunker(
    OpenAIEmbeddings(),
    breakpoint_threshold_type="percentile"
)
```

---

## 3. Hybrid Search (Vector + Keyword)

```python
from langchain.retrievers import EnsembleRetriever
from langchain_community.retrievers import BM25Retriever

# Keyword retriever
bm25_retriever = BM25Retriever.from_documents(docs)
bm25_retriever.k = 5

# Vector retriever
vector_retriever = vectorstore.as_retriever(search_kwargs={"k": 5})

# Combine (hybrid)
hybrid_retriever = EnsembleRetriever(
    retrievers=[bm25_retriever, vector_retriever],
    weights=[0.3, 0.7]  # 30% keyword, 70% semantic
)

results = hybrid_retriever.invoke("How to deploy Laravel?")
```

---

## 4. Re-ranking (Improve Relevance)

```python
from langchain.retrievers import ContextualCompressionRetriever
from langchain_cohere import CohereRerank

# Step 1: Retrieve many candidates
# Step 2: Re-rank to find truly relevant ones

reranker = CohereRerank(model="rerank-english-v3.0", top_n=3)
compression_retriever = ContextualCompressionRetriever(
    base_compressor=reranker,
    base_retriever=vectorstore.as_retriever(search_kwargs={"k": 20}),
)
```

---

## 5. Conversational RAG (Chat History)

```python
from langchain.chains import ConversationalRetrievalChain
from langchain.memory import ConversationBufferMemory

memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True,
    output_key="answer"
)

qa_chain = ConversationalRetrievalChain.from_llm(
    llm=ChatOpenAI(model="gpt-4o-mini"),
    retriever=vectorstore.as_retriever(),
    memory=memory,
    return_source_documents=True,
)

# Multi-turn conversation
result1 = qa_chain.invoke({"question": "What is our return policy?"})
result2 = qa_chain.invoke({"question": "What about for electronics?"})
# ^ AI remembers previous context
```

---

## 6. RAG Evaluation Metrics

| Metric | Measures | Range |
|--------|----------|-------|
| **Relevance** | Are retrieved docs relevant? | 0-1 |
| **Faithfulness** | Is answer based on context? | 0-1 |
| **Answer quality** | Is answer helpful? | 0-1 |
| **Latency** | Response time | ms |

```python
# Using RAGAS for evaluation
from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevancy, context_precision

scores = evaluate(
    dataset=test_dataset,
    metrics=[faithfulness, answer_relevancy, context_precision],
)
```

---

## 🎯 Practice Tasks
- [ ] Build hybrid search (BM25 + vector)
- [ ] Implement conversational RAG with memory
- [ ] Add re-ranking to improve results
- [ ] Evaluate RAG pipeline with RAGAS
- [ ] Build multi-document RAG system

---

*Next: [Fine-Tuning →](./04_FINE_TUNING.md)*
