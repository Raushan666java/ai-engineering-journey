# Week 1 — Advanced RAG Techniques

**Goal:** Naive RAG ko advanced techniques mein upgrade karo
**Output:** All techniques implemented with LangChain

---

## Day 1 — Query Transformation

### Problem
```
User Query: "Sales decline kyun hua?"

Direct retrieval:
→ Documents matching "sales decline" milenge
→ Par context incomplete ho sakta hai

Solution: Query ko transform karo before retrieval
```

### MultiQuery

```python
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_core.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field
from typing import List

class MultiQueryOutput(BaseModel):
    queries: List[str] = Field(description="Alternative versions of the original query")

class MultiQueryGenerator:
    """
    Ek query ki 5 different versions banata hai.
    Har version thoda different angle se approach karta hai.
    """
    def __init__(self, llm: ChatOpenAI):
        self.llm = llm.with_structured_output(MultiQueryOutput)
        self.prompt = """
        You are an AI assistant. Generate 5 different versions of the user's question.
        Each version should approach the same information need from a different angle.
        Use synonyms, restructure, and vary specificity.

        Original question: {query}

        Return 5 alternative versions.
        """

    def generate(self, query: str) -> List[str]:
        result = self.llm.invoke(
            self.prompt.format(query=query)
        )
        return result.queries

# Usage
generator = MultiQueryGenerator(ChatOpenAI(model="gpt-4o"))
queries = generator.generate("Q4 2024 mein sales decline kyun hua?")
# Returns:
# 1. "Q4 2024 sales decline reasons"
# 2. "What caused the drop in Q4 2024 sales?"
# 3. "Factors behind decreased Q4 2024 revenue"
# 4. "Analyze Q4 2024 sales performance issues"
# 5. "Why did revenue fall in Q4 2024?"

# Retrieve for each query, deduplicate results
vectorstore = Chroma(...)
all_docs = []
for q in queries:
    docs = vectorstore.similarity_search(q, k=5)
    all_docs.extend(docs)

# Deduplicate by content hash
seen = set()
unique_docs = []
for doc in all_docs:
    h = hash(doc.page_content[:200])
    if h not in seen:
        seen.add(h)
        unique_docs.append(doc)
```

### StepBack Prompting

```python
class StepBackQuery:
    """
    Specific query ko general mein convert karo.
    Phle broader context lo, phir specific answer.
    """
    def __init__(self, llm: ChatOpenAI):
        self.llm = llm

    def step_back(self, query: str) -> str:
        prompt = f"""
        Original question: {query}

        Transform this specific question into a broader, more general question
        that would help answer the original one.

        Example:
        Original: "Why did Q4 sales drop 15%?"
        Step-back: "What factors affect quarterly sales performance at ApexERP?"

        Step-back question:
        """
        return self.llm.invoke(prompt)

    def answer(self, query: str) -> str:
        stepback_q = self.step_back(query)
        context = vectorstore.similarity_search(stepback_q, k=10)
        specific_context = vectorstore.similarity_search(query, k=5)

        final_prompt = f"""
        Context (general): {context}
        Context (specific): {specific_context}

        Question: {query}
        """
        return self.llm.invoke(final_prompt)
```

### HyDE — Hypothetical Document Embeddings

```python
class HyDE:
    """
    Query se ek hypothetical document generate karo.
    Phir us document ki embedding se search karo.

    Intuition:
    → Query: "Q4 sales report"
    → LLM generates: "Q4 2024 sales were $1.2M with 15% decline..."
    → Embed this hypothetical doc → search
    → Matches actual Q4 sales documents better
    """
    def __init__(self, llm: ChatOpenAI, vectorstore):
        self.llm = llm
        self.vectorstore = vectorstore

    def generate_hypothetical_doc(self, query: str) -> str:
        prompt = f"""
        Write a hypothetical document that would contain the answer to:
        {query}

        Make it realistic, detailed, and factual in style.
        The document should be 2-3 paragraphs.
        """
        return self.llm.invoke(prompt)

    def search(self, query: str, k: int = 10) -> List[Document]:
        hyde_doc = self.generate_hypothetical_doc(query)
        # Search using the hypothetical doc's embedding
        results = self.vectorstore.similarity_search(hyde_doc, k=k)
        return results

# Usage
hyde = HyDE(llm, vectorstore)
results = hyde.search("ApexERP Q4 revenue breakdown")
```

---

## Day 2 — RAPTOR (Recursive Abstractive Processing for Tree-Organized Retrieval)

### Concept
```
Documents ko cluster karo → Summarize → Phir se cluster → Phir se summarize
Hierarchical tree ban jata hai.

Retrieval time:
→ Query aayi → Tree ke top level se search start karo
→ Relevant clusters mein dive karo
→ Best granularity ka context milta hai
```

```python
import numpy as np
from typing import List, Dict, Any
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain.schema import Document
import umap
from sklearn.cluster import KMeans

class RAPTOR:
    """
    Hierarchical document summarization + retrieval.

    How it works:
    1. Documents ko chunks mein split karo
    2. Chunks ko cluster karo (based on embeddings)
    3. Har cluster ka summary banao
    4. Summaries ko phir se cluster karo
    5. Repeat until ek top-level summary bache
    6. Retrieval: top se start karo, relevant clusters mein dive karo
    """
    def __init__(
        self,
        documents: List[Document],
        llm: ChatOpenAI,
        embedder: OpenAIEmbeddings,
        max_depth: int = 3,
        cluster_threshold: float = 0.5
    ):
        self.llm = llm
        self.embedder = embedder
        self.max_depth = max_depth
        self.cluster_threshold = cluster_threshold
        self.tree = self._build_tree(documents)

    def _cluster_documents(self, docs: List[Document]) -> List[List[Document]]:
        if len(docs) <= 1:
            return [docs]

        # Get embeddings
        texts = [d.page_content for d in docs]
        embeddings = self.embedder.embed_documents(texts)
        embeddings_np = np.array(embeddings)

        # Reduce dimensionality for clustering
        reducer = umap.UMAP(n_components=min(5, len(docs) - 1))
        reduced = reducer.fit_transform(embeddings_np)

        # Determine number of clusters
        n_clusters = min(5, len(docs))
        if n_clusters < 2:
            return [docs]

        kmeans = KMeans(n_clusters=n_clusters, random_state=42)
        labels = kmeans.fit_predict(reduced)

        clusters = {}
        for doc, label in zip(docs, labels):
            if label not in clusters:
                clusters[label] = []
            clusters[label].append(doc)

        return list(clusters.values())

    def _summarize_cluster(self, docs: List[Document]) -> Document:
        texts = "\n\n".join([d.page_content for d in docs])
        prompt = f"""
        Summarize the following documents into a concise, information-dense summary.
        Preserve all key facts, figures, and relationships.

        Documents:
        {texts}

        Summary:
        """
        summary = self.llm.invoke(prompt)
        return Document(
            page_content=summary,
            metadata={"source_docs": len(docs), "type": "summary"}
        )

    def _build_tree(self, docs: List[Document], depth: int = 0) -> Dict:
        if depth >= self.max_depth or len(docs) <= 1:
            return {"documents": docs, "depth": depth}

        clusters = self._cluster_documents(docs)
        summaries = [self._summarize_cluster(c) for c in clusters]

        return {
            "summaries": summaries,
            "children": [self._build_tree(c, depth + 1) for c in clusters],
            "depth": depth
        }

    def retrieve(self, query: str, k: int = 5) -> List[Document]:
        query_emb = self.embedder.embed_query(query)
        results = []

        def _traverse(node: Dict, depth: int):
            if "documents" in node:
                results.extend(node["documents"])
                return

            # Check summaries first
            summaries = node.get("summaries", [])
            if summaries:
                summary_embs = self.embedder.embed_documents(
                    [s.page_content for s in summaries]
                )
                similarities = [
                    np.dot(query_emb, se) /
                    (np.linalg.norm(query_emb) * np.linalg.norm(se))
                    for se in summary_embs
                ]

                for idx, sim in enumerate(similarities):
                    if sim > self.cluster_threshold:
                        _traverse(node["children"][idx], depth + 1)

        _traverse(self.tree, 0)

        # Sort by relevance and return top k
        if results:
            result_embs = self.embedder.embed_documents(
                [r.page_content for r in results]
            )
            similarities = [
                np.dot(query_emb, re) /
                (np.linalg.norm(query_emb) * np.linalg.norm(re))
                for re in result_embs
            ]
            ranked = sorted(
                zip(results, similarities),
                key=lambda x: x[1],
                reverse=True
            )
            return [r for r, _ in ranked[:k]]

        return results[:k]

# Usage
documents = [
    Document("Q4 sales analysis ..."),
    Document("Customer churn report ..."),
    Document("Revenue breakdown ..."),
    # ... more docs
]

raptor = RAPTOR(documents, llm, embedder)
results = raptor.retrieve("Q4 2024 performance review")
```

---

## Day 3 — Self-RAG

### Concept
```
Self-RAG = LLM khud decide karta hai:
1. Kya retrieve karna hai?
2. Kya retrieved docs relevant hain?
3. Kya generation factual hai?
4. Kya refine karna hai?

Reflection tokens use karta hai:
- Retrieve: {Retrieve}, {NoRetrieve}
- Relevance: {Relevant}, {Irrelevant}
- Hallucination: {Supported}, {NotSupported}
- Utility: {Useful}, {NotUseful}
```

```python
from typing import List, Optional
from langchain_openai import ChatOpenAI
from langchain.schema import Document

class SelfRAG:
    """
    Self-RAG: LLM apne retrieval aur generation ko reflect karta hai.

    Flow:
    Query → Should I retrieve? → If yes, retrieve → Are docs relevant?
    → Yes → Generate → Is it factual? → Refine if needed
    """
    def __init__(self, llm: ChatOpenAI, vectorstore):
        self.llm = llm
        self.vectorstore = vectorstore

    def _should_retrieve(self, query: str) -> bool:
        prompt = f"""
        Question: {query}

        Does this question require retrieving external information to answer accurately?
        Respond with only "Retrieve" or "NoRetrieve".

        Examples:
        "What is the capital of France?" → Retrieve
        "Write a poem about AI" → NoRetrieve
        "What were ApexERP Q4 sales?" → Retrieve
        """
        response = self.llm.invoke(prompt)
        return "Retrieve" in response

    def _check_relevance(self, query: str, doc: Document) -> bool:
        prompt = f"""
        Question: {query}

        Document excerpt: {doc.page_content[:500]}

        Is this document relevant to answering the question?
        Respond with only "Relevant" or "Irrelevant".
        """
        response = self.llm.invoke(prompt)
        return "Relevant" in response

    def _generate_with_reflection(self, query: str, docs: List[Document]) -> str:
        context = "\n\n".join([d.page_content for d in docs])
        prompt = f"""
        Context: {context}

        Question: {query}

        Generate an answer based on the context.
        After each statement, mark it as:
        [Supported] — fully supported by context
        [NotSupported] — not found in context (guess)

        Answer:
        """
        response = self.llm.invoke(prompt)

        # Check if answer needs refinement
        if "[NotSupported]" in response:
            refine_prompt = f"""
            Original answer contained unsupported claims.
            Remove or qualify unsupported statements.

            Unsafe answer: {response}

            Revised answer (only supported info):
            """
            response = self.llm.invoke(refine_prompt)

        return response

    def invoke(self, query: str) -> str:
        # Step 1: Should we retrieve?
        if not self._should_retrieve(query):
            return self.llm.invoke(query)

        # Step 2: Retrieve
        docs = self.vectorstore.similarity_search(query, k=10)

        # Step 3: Filter relevant docs
        relevant_docs = [d for d in docs if self._check_relevance(query, d)]

        if not relevant_docs:
            return "I don't have enough relevant information to answer this."

        # Step 4: Generate with reflection
        return self._generate_with_reflection(query, relevant_docs)

# Usage
self_rag = SelfRAG(ChatOpenAI(model="gpt-4o"), vectorstore)
answer = self_rag.invoke("ApexERP Q4 mein kitna revenue hua?")
```

---

## Day 4 — Re-ranking with CrossEncoder

### Problem
```
Vector search returns 50 results.
Top 10 mein bhi irrelevant ho sakte hain.
LLM context window mein sab fit nahi hote.

Solution:
→ Vector search 50 results lao
→ CrossEncoder se re-rank karo (slow but accurate)
→ Top 5 LLM ko do
```

```python
from sentence_transformers import CrossEncoder
from typing import List
from langchain.schema import Document

class ReRanker:
    """
    CrossEncoder re-ranker.
    BiEncoder (vector search) → fast, approximates similarity
    CrossEncoder → slow, calculates exact relevance

    CrossEncoder query aur doc ko SATH mein process karta hai
    → zyada accurate hai
    """
    def __init__(self, model_name: str = "cross-encoder/ms-marco-MiniLM-L-6-v2"):
        self.model = CrossEncoder(model_name)

    def rerank(
        self,
        query: str,
        documents: List[Document],
        top_k: int = 5
    ) -> List[Document]:
        pairs = [[query, doc.page_content] for doc in documents]
        scores = self.model.predict(pairs)

        scored_docs = list(zip(documents, scores))
        ranked = sorted(scored_docs, key=lambda x: x[1], reverse=True)

        return [doc for doc, score in ranked[:top_k]]

# Full pipeline
class RAGWithReRanking:
    def __init__(self, vectorstore, llm):
        self.vectorstore = vectorstore
        self.llm = llm
        self.reranker = ReRanker()

    def query(self, q: str) -> str:
        # Step 1: Retrieve many
        initial_docs = self.vectorstore.similarity_search(q, k=20)

        # Step 2: Re-rank
        best_docs = self.reranker.rerank(q, initial_docs, top_k=5)

        # Step 3: Generate
        context = "\n\n".join([d.page_content for d in best_docs])
        prompt = f"Context: {context}\n\nQuestion: {q}"
        return self.llm.invoke(prompt)

# Usage
pipeline = RAGWithReRanking(vectorstore, llm)
answer = pipeline.query("ApexERP mein customer retention kaise improve karein?")
```

---

## Day 5 — Hybrid Search (Dense + Sparse)

### Concept
```
Dense Search (Vector)         Sparse Search (BM25)
─────────────────              ─────────────────
"sales decline Q4"             "sales decline Q4"
→ Finds semantic matches       → Finds exact keyword matches
→ "revenue drop December"      → Documents with these exact words
→ "Q4 financial performance"   → Works well for technical terms

Hybrid = Best of both worlds
```

```python
from langchain_community.retrievers import BM25Retriever
from langchain.retrievers import EnsembleRetriever
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain.schema import Document

# Sparse retriever (BM25)
documents = [
    Document("Q4 2024 revenue: $1.2M. Decline of 15% from Q3."),
    Document("Customer churn rate: 8.5% in Q4 2024."),
    Document("New feature: AI-powered inventory forecasting launched Q4 2024."),
    # ... more docs
]

bm25_retriever = BM25Retriever.from_documents(documents)
bm25_retriever.k = 10  # top 10 from BM25

# Dense retriever (Vector)
vectorstore = Chroma.from_documents(
    documents,
    OpenAIEmbeddings()
)
dense_retriever = vectorstore.as_retriever(search_kwargs={"k": 10})

# Ensemble = Hybrid
ensemble_retriever = EnsembleRetriever(
    retrievers=[bm25_retriever, dense_retriever],
    weights=[0.3, 0.7]  # BM25 ko 30%, Dense ko 70% weight
)

# Usage
results = ensemble_retriever.invoke("Q4 sales decline reasons")
# Returns: BM25 se exact matches + Dense se semantic matches
# Deduplicated and combined

# Alternative: Direct hybrid with Qdrant
from qdrant_client import QdrantClient
from qdrant_client.models import VectorParams, Distance

client = QdrantClient(":memory:")
client.create_collection(
    collection_name="hybrid_demo",
    vectors_config=VectorParams(size=1536, distance=Distance.COSINE),
    # Qdrant supports dense + sparse in same collection
)
```

---

## Day 6 — Contextual Compression

### Problem
```
Retrieved document 500 words ka hai.
Answer ke liye sirf 50 words relevant hain.
LLM ko 500 words feed karna = token waste + noise.

Solution: Extract relevant parts only.
```

```python
from langchain.retrievers import ContextualCompressionRetriever
from langchain.retrievers.document_compressors import LLMChainExtractor
from langchain_openai import ChatOpenAI

class ContextCompressor:
    """
    Har retrieved document se sirf relevant parts extract karo.
    """
    def __init__(self, vectorstore):
        llm = ChatOpenAI(model="gpt-4o", temperature=0)

        compressor = LLMChainExtractor.from_llm(llm)
        self.compressed_retriever = ContextualCompressionRetriever(
            base_compressor=compressor,
            base_retriever=vectorstore.as_retriever(search_kwargs={"k": 10})
        )

    def retrieve(self, query: str) -> List[Document]:
        return self.compressed_retriever.invoke(query)

# Usage
compressor = ContextCompressor(vectorstore)
compressed_docs = compressor.retrieve("ApexERP Q4 performance")
# Har doc chhota ho jayega — sirf relevant parts
```

---

## Day 7 — Review + Integration

### Complete RAG Pipeline

```python
from typing import List, Optional
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain.schema import Document
from sentence_transformers import CrossEncoder
import numpy as np

class AdvancedRAGPipeline:
    """
    Sab techniques ek saath — full production-ready RAG.
    """
    def __init__(
        self,
        vectorstore_path: str,
        openai_api_key: str,
        model: str = "gpt-4o"
    ):
        self.llm = ChatOpenAI(model=model, api_key=openai_api_key)
        self.embeddings = OpenAIEmbeddings(api_key=openai_api_key)
        self.vectorstore = Chroma(
            persist_directory=vectorstore_path,
            embedding_function=self.embeddings
        )
        self.reranker = CrossEncoder("cross-encoder/ms-marco-MiniLM-L-6-v2")

    def _multi_query(self, query: str, n: int = 3) -> List[str]:
        prompt = f"Generate {n} alternative versions of: {query}"
        response = self.llm.invoke(prompt)
        queries = [q.strip() for q in response.split("\n") if q.strip()]
        return [query] + queries[:n]

    def _hybrid_search(self, query: str, k: int = 20) -> List[Document]:
        # Dense search
        dense_docs = self.vectorstore.similarity_search(query, k=k)

        # Combine all approaches
        all_docs = list(dense_docs)

        # Deduplicate
        seen = set()
        unique = []
        for doc in all_docs:
            h = hash(doc.page_content[:200])
            if h not in seen:
                seen.add(h)
                unique.append(doc)
        return unique

    def _rerank(self, query: str, docs: List[Document], top_k: int = 5) -> List[Document]:
        pairs = [[query, d.page_content] for d in docs]
        scores = self.reranker.predict(pairs)
        ranked = sorted(zip(docs, scores), key=lambda x: x[1], reverse=True)
        return [d for d, s in ranked[:top_k]]

    def query(self, question: str) -> str:
        # Step 1: Query transformation
        queries = self._multi_query(question)

        # Step 2: Hybrid search for each query
        all_docs = []
        for q in queries:
            docs = self._hybrid_search(q)
            all_docs.extend(docs)

        # Step 3: Deduplicate
        seen = set()
        unique_docs = []
        for doc in all_docs:
            h = hash(doc.page_content[:200])
            if h not in seen:
                seen.add(h)
                unique_docs.append(doc)

        # Step 4: Re-rank
        top_docs = self._rerank(question, unique_docs, top_k=5)

        # Step 5: Generate
        context = "\n\n---\n\n".join(d.page_content for d in top_docs)
        prompt = f"""
        You are an AI assistant for ApexERP. Answer based on the context.

        Context:
        {context}

        Question: {question}

        If the context doesn't contain enough information, say so.
        """
        return self.llm.invoke(prompt)

# Usage
pipeline = AdvancedRAGPipeline(
    vectorstore_path="./data/apexerp_docs",
    openai_api_key="sk-..."
)
answer = pipeline.query("Q4 2024 mein sabse zyada kya problem thi?")
```

### Techniques Comparison

| Technique | When to Use | Cost Impact |
|-----------|-------------|-------------|
| MultiQuery | Broad/ambiguous queries | More API calls = higher cost |
| StepBack | Specific technical questions | +1 LLM call per query |
| HyDE | Short queries (2-3 words) | +1 LLM call per query |
| RAPTOR | Large document collections | High initial cost, fast retrieval |
| Self-RAG | When hallucination is critical | 2-4x LLM calls |
| Re-ranking | Always in production | ~$0.01 per 1000 docs |
| Hybrid Search | Always in production | Marginal (BM25 is free) |
| Compression | Token costs are high | +1 LLM call per doc |

---

## Summary

```
Week 1 khatam:

✅ Query Transformation — MultiQuery, StepBack, HyDE
✅ RAPTOR — hierarchical retrieval ka concept + code
✅ Self-RAG — LLM khud decide karta hai retrieve karna hai ya nahi
✅ Re-ranking — CrossEncoder se quality boost
✅ Hybrid Search — Dense + Sparse ka combo
✅ Contextual Compression — Token waste kam karo
✅ Complete pipeline — sab techniques integrated

Next week: Vector DBs in production, caching, evaluation
```
