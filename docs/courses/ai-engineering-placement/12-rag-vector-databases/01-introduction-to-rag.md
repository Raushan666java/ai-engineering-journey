# Introduction to RAG

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand the RAG paradigm and why it addresses LLM limitations |
| LO2 | Identify the core components of a RAG system (retriever, augmenter, generator) |
| LO3 | Compare RAG with fine-tuning and prompt engineering approaches |
| LO4 | Implement a basic retrieval-augmented generation pipeline |
| LO5 | Evaluate RAG output quality using faithfulness and relevance metrics |

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 1.1 | LLM Limitations | Knowledge cutoff, hallucination, lack of private data access |
| 1.2 | RAG Paradigm | Retrieve, Augment, Generate — grounding LLM responses |
| 1.3 | Core Components | Retriever, index, augmenter, generator |
| 1.4 | RAG vs Alternatives | Comparison with fine-tuning, prompt engineering, agents |
| 1.5 | Basic RAG Pipeline | End-to-end implementation with embeddings and vector search |
| 1.6 | Evaluation Dimensions | Faithfulness, answer relevance, context precision |

## Chapter Roadmap

```mermaid
flowchart LR
    A[User Query] --> B[Embed Query]
    B --> C[Vector Search]
    C --> D[Retrieved Chunks]
    D --> E[Augment Prompt]
    E --> F[LLM Generator]
    F --> G[Grounded Response]
    G --> H[Evaluation]
```

## Introduction

Retrieval-Augmented Generation (RAG) is the most practical technique for making LLMs useful with private, domain-specific, or up-to-date knowledge. Instead of retraining a model on new data — expensive and slow — RAG retrieves relevant documents at query time and grounds the LLM's response in that context. This chapter covers the full RAG paradigm: why it works, its core components, how it compares to fine-tuning, and how to evaluate output quality.

## Prerequisites

- Module 11 (LLMs & Prompt Engineering) — understanding of foundation models, context windows, and hallucination
- Basic Python (functions, classes, list operations)
- Familiarity with what embeddings are (helpful but introduced in Module 10)

## Theory

### 1.1 LLM Limitations

Large language models have inherent limitations that RAG addresses.

**Knowledge Cutoff**: LLMs are trained on static datasets and have no knowledge of events after their training cutoff. A model trained in 2023 cannot answer questions about events in 2025.

**Hallucination**: Without grounding, LLMs may generate plausible but incorrect information. Studies show hallucination rates of 15-40% depending on domain and task complexity.

**Private Data**: LLMs have no access to private enterprise data, user-specific information, or proprietary documents without explicit inclusion in the context window.

**Staleness**: Even if retrained periodically, LLMs cannot reflect real-time changes (stock prices, inventory, news).


## Examples

```python
from dataclasses import dataclass
from typing import List, Optional


@dataclass
class LLMLimitation:
    name: str
    description: str
    severity: str  # high, medium, low
    rag_mitigation: str


limitations = [
    LLMLimitation(
        name="Knowledge Cutoff",
        description="Model only knows up to training date",
        severity="high",
        rag_mitigation="Retrieve up-to-date documents at query time",
    ),
    LLMLimitation(
        name="Hallucination",
        description="Model generates factually incorrect information",
        severity="high",
        rag_mitigation="Ground response in retrieved evidence",
    ),
    LLMLimitation(
        name="Private Data Access",
        description="Model cannot access enterprise or personal data",
        severity="high",
        rag_mitigation="Index private documents for retrieval",
    ),
    LLMLimitation(
        name="Domain Specificity",
        description="General models lack deep domain expertise",
        severity="medium",
        rag_mitigation="Retrieve from domain-specific knowledge base",
    ),
]

for lim in limitations:
    print(f"{lim.name} ({lim.severity}): {lim.rag_mitigation}")
```

### 1.2 RAG Paradigm

Retrieval-Augmented Generation (RAG) enhances LLM outputs by retrieving relevant information from an external knowledge base before generating a response.

### The Three-Step Flow

1. **Retrieve**: Given a user query, search a knowledge base for relevant documents or chunks.
2. **Augment**: Insert the retrieved context into the LLM prompt alongside the original query.
3. **Generate**: The LLM produces a response grounded in the provided context.

```python
from typing import List, Dict, Callable
import json


def rag_pipeline(
    query: str,
    retriever: Callable,
    augmenter: Callable,
    generator: Callable,
) -> Dict:
    retrieved_chunks = retriever(query)
    augmented_prompt = augmenter(query, retrieved_chunks)
    response = generator(augmented_prompt)
    return {
        "query": query,
        "retrieved_chunks": retrieved_chunks,
        "augmented_prompt": augmented_prompt[:200],
        "response": response,
    }


def mock_retriever(query: str) -> List[str]:
    knowledge_base = {
        "python": ["Python is a high-level programming language created by Guido van Rossum."],
        "rag": ["RAG stands for Retrieval-Augmented Generation, a technique to ground LLM outputs."],
    }
    for key, chunks in knowledge_base.items():
        if key in query.lower():
            return chunks
    return ["No relevant documents found."]


def mock_augmenter(query: str, chunks: List[str]) -> str:
    context = "\n\n".join(chunks)
    return f"""Answer the question based ONLY on the provided context.

Context:
{context}

Question: {query}

Answer:"""


def mock_generator(prompt: str) -> str:
    return "Based on the context provided, here is the answer."


result = rag_pipeline("What is RAG?", mock_retriever, mock_augmenter, mock_generator)
print(json.dumps(result, indent=2))
```

### 1.3 Core Components

### 1.3.1 Retriever

The retriever finds relevant documents from the knowledge base. Common approaches include:

- **Sparse retrieval**: BM25, TF-IDF — keyword-based, fast but misses semantic matches
- **Dense retrieval**: Embedding-based vector search — captures semantic meaning
- **Hybrid retrieval**: Combines sparse and dense for best results

```python
from typing import List, Tuple


class Retriever:
    def __init__(self, documents: List[str]):
        self.documents = documents

    def retrieve(self, query: str, top_k: int = 3) -> List[Tuple[str, float]]:
        """Simple keyword-based retrieval for demonstration."""
        scores = []
        query_terms = set(query.lower().split())
        for doc in self.documents:
            doc_terms = set(doc.lower().split())
            overlap = len(query_terms & doc_terms)
            score = overlap / len(query_terms) if query_terms else 0
            scores.append((doc, score))

        scores.sort(key=lambda x: x[1], reverse=True)
        return scores[:top_k]


docs = [
    "RAG combines retrieval with generation for grounded AI responses.",
    "Vector databases store embeddings for efficient similarity search.",
    "Chunking strategies affect retrieval quality in RAG systems.",
    "Fine-tuning adapts model weights while RAG adapts model context.",
    "Embeddings convert text into numerical vectors for comparison.",
]

retriever = Retriever(docs)
results = retriever.retrieve("How does RAG work?", top_k=2)
for doc, score in results:
    print(f"Score: {score:.2f} | Doc: {doc}")
```

### 1.3.2 Index

The index is the searchable representation of the knowledge base. It consists of:
- **Document chunks**: Split documents into manageable pieces
- **Embeddings**: Numerical vector representations of each chunk
- **Metadata**: Source, date, title, author for filtering

```python
@dataclass
class IndexChunk:
    chunk_id: str
    text: str
    metadata: Dict
    embedding: Optional[List[float]] = None


class DocumentIndex:
    def __init__(self):
        self.chunks: List[IndexChunk] = []

    def add_chunk(self, text: str, metadata: Dict):
        chunk = IndexChunk(
            chunk_id=f"chunk-{len(self.chunks) + 1}",
            text=text,
            metadata=metadata,
        )
        self.chunks.append(chunk)

    def filter_by_metadata(self, key: str, value: str) -> List[IndexChunk]:
        return [c for c in self.chunks if c.metadata.get(key) == value]

    def size(self) -> int:
        return len(self.chunks)


index = DocumentIndex()
index.add_chunk("RAG fundamentals", {"source": "textbook", "chapter": 1})
index.add_chunk("Vector search techniques", {"source": "paper", "year": 2024})
print(f"Index size: {index.size()}")
print(f"Filtered: {len(index.filter_by_metadata('source', 'textbook'))} chunks")
```

### 1.3.3 Augmenter

The augmenter constructs the prompt that includes retrieved context. Key design decisions:

- **Position**: Context before or after the query (prepend vs append)
- **Formatting**: Structured context with clear separators
- **Instruction**: Explicit grounding instruction to prevent hallucination

```python
class PromptAugmenter:
    def __init__(self, instruction: str = None):
        self.instruction = instruction or """Answer the question based ONLY on the provided context. If the context does not contain enough information, say "I don't have enough information to answer.""""

    def augment(self, query: str, chunks: List[str]) -> str:
        context = self._format_chunks(chunks)
        return f"""{self.instruction}

Context:
{context}

Question: {query}

Answer:"""

    def _format_chunks(self, chunks: List[str]) -> str:
        formatted = []
        for i, chunk in enumerate(chunks, 1):
            formatted.append(f"[{i}] {chunk}")
        return "\n\n".join(formatted)


augmenter = PromptAugmenter()
query = "What is vector search?"
chunks = ["Vector search finds similar items using embedding similarity."]
print(augmenter.augment(query, chunks))
```

### 1.3.4 Generator

The generator is typically an LLM that produces the final answer. Choices include:
- **API-based**: GPT-4o, Claude, Gemini — high quality, per-token cost
- **Self-hosted**: Llama, Mistral, Qwen — lower latency, fixed cost

```python
from openai import OpenAI


class Generator:
    def __init__(self, model: str = "gpt-4o-mini", client=None):
        self.model = model
        self.client = client or OpenAI()

    def generate(self, augmented_prompt: str, temperature: float = 0) -> str:
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": augmented_prompt}],
            temperature=temperature,
        )
        return response.choices[0].message.content


# For offline/demo use without API:
class MockGenerator(Generator):
    def generate(self, augmented_prompt: str, temperature: float = 0) -> str:
        return "This is a generated response grounded in the provided context."


gen = MockGenerator()
print(gen.generate("mock prompt"))
```

### 1.4 RAG vs Alternatives

| Aspect | RAG | Fine-Tuning | Prompt Engineering |
|--------|-----|-------------|-------------------|
| Knowledge update | Real-time | Requires retraining | Manual prompt changes |
| Hallucination | Low (grounded) | Medium | High |
| Data privacy | Private data stays in index | Data used in training | Data in prompt window |
| Cost | Retrieval + generation | Training + inference | Generation only |
| Implementation | Medium | Complex | Simple |
| Flexibility | High | Low | Medium |

```python
class ApproachComparator:
    def __init__(self):
        self.approaches = {
            "RAG": {
                "knowledge_freshness": "Real-time",
                "hallucination_risk": "Low",
                "implementation_complexity": 6,
                "cost_per_query": "Medium",
                "flexibility": 9,
            },
            "Fine-Tuning": {
                "knowledge_freshness": "Static (needs retraining)",
                "hallucination_risk": "Medium",
                "implementation_complexity": 8,
                "cost_per_query": "Low",
                "flexibility": 4,
            },
            "Prompt Engineering": {
                "knowledge_freshness": "Manual updates",
                "hallucination_risk": "High",
                "implementation_complexity": 3,
                "cost_per_query": "Low",
                "flexibility": 6,
            },
        }

    def recommend(self, requirements: Dict) -> str:
        """Simple recommendation based on requirements."""
        if requirements.get("freshness") == "critical":
            return "RAG"
        if requirements.get("latency_sensitive") and not requirements.get("needs_updates"):
            return "Prompt Engineering"
        if requirements.get("deep_domain_knowledge"):
            return "Fine-Tuning"
        return "RAG"  # Default recommendation


comparator = ApproachComparator()
reqs = {"freshness": "critical", "latency_sensitive": False}
print(f"Recommended: {comparator.recommend(reqs)}")
```

### 1.5 Basic RAG Pipeline

Implementing a complete RAG pipeline from scratch.

### 1.5.1 Document Preparation

```python
import re
from typing import List


def chunk_document(text: str, chunk_size: int = 500, overlap: int = 50) -> List[str]:
    chunks = []
    start = 0
    while start < len(text):
        end = start + chunk_size
        chunk = text[start:end]
        if end < len(text):
            # Try to break at sentence boundary
            last_period = chunk.rfind(".")
            if last_period > chunk_size // 2:
                end = start + last_period + 1
                chunk = text[start:end]

        chunks.append(chunk.strip())
        start = end - overlap

    return chunks


document = """Retrieval-Augmented Generation (RAG) is a technique that combines information retrieval with text generation. RAG addresses key limitations of large language models by grounding their outputs in external knowledge. The RAG pipeline consists of three main stages: retrieval, augmentation, and generation. During retrieval, relevant documents are fetched from a knowledge base. During augmentation, those documents are inserted into the LLM prompt. During generation, the LLM produces a response informed by the retrieved context."""

chunks = chunk_document(document, chunk_size=200, overlap=30)
for i, chunk in enumerate(chunks, 1):
    print(f"Chunk {i} ({len(chunk)} chars): {chunk[:80]}...")
```

### 1.5.2 Embedding and Indexing

```python
import hashlib
from typing import List


class SimpleEmbedder:
    def __init__(self, dimension: int = 384):
        self.dimension = dimension

    def embed(self, text: str) -> List[float]:
        """Simple hash-based embedding for demonstration (not for production)."""
        hash_obj = hashlib.sha256(text.encode())
        hex_digest = hash_obj.hexdigest()
        vector = [int(hex_digest[i:i + 2], 16) / 255.0 for i in range(0, min(len(hex_digest), self.dimension * 2), 2)]
        # Pad or truncate to dimension
        while len(vector) < self.dimension:
            vector.append(0.0)
        return vector[:self.dimension]


embedded = SimpleEmbedder(384).embed("RAG pipeline")
print(f"Embedding dimension: {len(embedded)}")
print(f"First 5 values: {embedded[:5]}")
```

### 1.5.3 Complete Pipeline

```python
import numpy as np
from typing import List, Tuple


class BasicRAGPipeline:
    def __init__(self, documents: List[str]):
        self.documents = documents
        self.embeddings: List[np.ndarray] = []
        self.embedder = SimpleEmbedder(384)

        for doc in documents:
            vec = self.embedder.embed(doc)
            self.embeddings.append(np.array(vec))

    def retrieve(self, query: str, top_k: int = 2) -> List[Tuple[str, float]]:
        query_vec = np.array(self.embedder.embed(query))

        similarities = []
        for i, doc_emb in enumerate(self.embeddings):
            sim = self._cosine_similarity(query_vec, doc_emb)
            similarities.append((self.documents[i], sim))

        similarities.sort(key=lambda x: x[1], reversed=True)
        return similarities[:top_k]

    def _cosine_similarity(self, a: np.ndarray, b: np.ndarray) -> float:
        dot = float(np.dot(a, b))
        norm = float(np.linalg.norm(a) * np.linalg.norm(b))
        return dot / norm if norm > 0 else 0.0

    def answer(self, query: str, generator_fn) -> str:
        chunks = self.retrieve(query)
        context = "\n\n".join([c[0] for c in chunks])
        prompt = f"""Answer based on this context:

{context}

Question: {query}

Answer:"""
        return generator_fn(prompt)


pipeline = BasicRAGPipeline([
    "RAG grounds LLM responses in retrieved documents.",
    "Vector databases store embeddings for similarity search.",
    "Chunking strategies impact retrieval quality significantly.",
])

def mock_llm(prompt: str) -> str:
    return "Grounded answer based on the context provided."

answer = pipeline.answer("How does RAG work?", mock_llm)
print(f"Answer: {answer}")
```

### 1.6 Evaluation Dimensions

RAG output quality requires specialized metrics beyond standard LLM evaluation.

**Faithfulness**: Does the response stay true to the retrieved context? Factual consistency between response and provided chunks.

**Answer Relevance**: Does the response directly address the user's question? Irrelevant but accurate information degrades quality.

**Context Precision**: Are the retrieved chunks relevant to the query? Retrieval quality directly impacts generation quality.

**Context Recall**: Are all necessary chunks retrieved? Missing context leads to incomplete answers.

```python
class RAGEvaluator:
    def __init__(self):
        self.metrics = {}

    def evaluate_faithfulness(
        self, response: str, context_chunks: List[str]
    ) -> float:
        response_claims = set(response.lower().split("."))
        context_text = " ".join(context_chunks).lower()

        supported = 0
        total = 0
        for claim in response_claims:
            if len(claim.strip()) < 10:
                continue
            total += 1
            if claim in context_text or any(
                chunk.lower().find(claim) >= 0 for chunk in context_chunks
            ):
                supported += 1

        return supported / total if total > 0 else 1.0

    def evaluate_relevance(self, query: str, response: str) -> float:
        query_terms = set(query.lower().split())
        response_terms = set(response.lower().split())
        overlap = len(query_terms & response_terms)
        return overlap / len(query_terms) if query_terms else 0

    def evaluate_context_precision(
        self, query: str, retrieved_chunks: List[str]
    ) -> float:
        if not retrieved_chunks:
            return 0.0
        relevant = sum(
            1 for chunk in retrieved_chunks
            if any(term in chunk.lower() for term in query.lower().split())
        )
        return relevant / len(retrieved_chunks)


evaluator = RAGEvaluator()
response = "RAG stands for Retrieval-Augmented Generation. It grounds LLM outputs."
context = ["RAG stands for Retrieval-Augmented Generation."]
query = "What does RAG stand for?"

faith = evaluator.evaluate_faithfulness(response, context)
rel = evaluator.evaluate_relevance(query, response)
prec = evaluator.evaluate_context_precision(query, context)

print(f"Faithfulness: {faith:.2%}")
print(f"Relevance: {rel:.2%}")
print(f"Context Precision: {prec:.2%}")
```

### Comprehensive RAG Score

```python
def rag_score(
    response: str,
    query: str,
    context: List[str],
    weights: Dict[str, float] = None,
) -> float:
    if weights is None:
        weights = {"faithfulness": 0.4, "relevance": 0.3, "precision": 0.3}

    eval = RAGEvaluator()
    scores = {
        "faithfulness": eval.evaluate_faithfulness(response, context),
        "relevance": eval.evaluate_relevance(query, response),
        "precision": eval.evaluate_context_precision(query, context),
    }

    weighted = sum(scores[k] * weights[k] for k in weights)
    return {"scores": scores, "weighted": round(weighted, 3)}


print(rag_score(response, query, context))
```

## Visual Analogy

Think of RAG like taking an **open-book exam with your own notes**:

- **RAG** = Open-book exam — instead of memorizing everything (training the model), you bring your notes (documents) and look up answers during the test. The LLM is the student; the retrieved documents are the open textbook.
- **Embeddings** = Highlighted and labeled notes — each passage is converted to a vector (a list of numbers) that captures its meaning. "This paragraph is about Python decorators" is encoded as a vector close to other decorator-related content.
- **Vector database** = An organized notebook with tabs — instead of searching through 500 pages manually, you flip to the right tab (similarity search) and find the most relevant section instantly.
- **Retrieval** = Looking up the answer in your notes before writing it — the system finds the 3 most relevant passages and hands them to the LLM along with the question.
- **Augmentation** = Adding your notes to the exam question — "Based on these 3 passages, answer: What is a decorator?" The LLM now has context it wouldn't have otherwise.
- **Generation** = Writing your answer using the notes — the LLM synthesizes the retrieved passages into a coherent response, grounded in real evidence.

This helps because RAG solves the LLM's biggest weakness — **knowledge that's private, recent, or domain-specific** — without retraining. Just like an open-book exam rewards understanding over memorization, RAG rewards good retrieval over massive model training.

## Summary

Retrieval-Augmented Generation (RAG) addresses fundamental LLM limitations by grounding responses in external knowledge. The RAG paradigm follows a three-step pipeline: retrieve relevant documents, augment the prompt with context, and generate a grounded response. Core components include the retriever (sparse or dense), the document index (chunks + embeddings + metadata), the prompt augmenter (formatting + instruction), and the LLM generator. RAG offers advantages over fine-tuning and prompt engineering in knowledge freshness, hallucination reduction, and private data access. Evaluating RAG quality requires specialized metrics measuring faithfulness, answer relevance, and context precision.

## Practical Takeaways

| Takeaway | Description |
|----------|-------------|
| Start with simple retrieval | Keyword search (BM25) often works well before investing in embeddings |
| Ground explicitly | Include clear instructions in prompts to base answers only on provided context |
| Measure retrieval quality | Context precision and recall directly impact answer quality |
| Chunk thoughtfully | Document chunk size and overlap significantly affect retrieval accuracy |
| Evaluate faithfulness | Always check that generated answers stay true to retrieved context |

## Interview Q&A

<details class="tp-qa-card" data-qid="rag01-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What are the three main steps of a RAG pipeline and how do they interact?
  </summary>
  <div class="tp-qa-answer">
    <p>RAG follows a three-step flow: Retrieve, Augment, Generate. First, the retriever searches a knowledge base for documents or chunks relevant to the user's query using either sparse (BM25) or dense (embedding similarity) methods. Second, the augmenter inserts the retrieved context into the LLM prompt alongside a grounding instruction. Third, the generator (an LLM) produces a response strictly based on the provided context. The interaction is sequential — poor retrieval directly degrades augmentation and generation quality. This design grounds the LLM's output in external knowledge, reducing hallucination by 40-80% compared to zero-shot generation.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag01-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: How does RAG compare to fine-tuning for incorporating new knowledge into an LLM?
  </summary>
  <div class="tp-qa-answer">
    <p>RAG provides real-time knowledge updates by retrieving from an external index at query time — you can add new documents and immediately make them accessible. Fine-tuning requires collecting labeled data, retraining the model (hours to days), and redeploying. RAG also offers better data privacy since private documents remain in the index rather than being memorized in model weights. Fine-tuning is better when you need the model to learn new behavioral patterns, writing styles, or domain-specific formats that retrieval cannot inject. Many production systems combine both: RAG for factual grounding and fine-tuning for behavior alignment.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag01-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: What are the core components of a RAG system and what design decisions does each require?
  </summary>
  <div class="tp-qa-answer">
    <p>The four core components are: Retriever (sparse vs dense vs hybrid, top-k tuning), Index (chunking strategy, embedding model, metadata schema), Augmenter (context position — prepend/sandwich/append, instruction design — strict/citation/creative), and Generator (model selection — GPT-4o vs self-hosted Llama, temperature, max tokens). Each component has independently tunable parameters that affect the overall system's faithfulness, latency, and cost. The retriever is often the most impactful — improving retrieval quality from precision@5 = 0.6 to 0.9 can double the final answer accuracy.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag01-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: What LLM limitations does RAG address and which ones remain unsolved?
  </summary>
  <div class="tp-qa-answer">
    <p>RAG addresses knowledge cutoff (by retrieving up-to-date documents), hallucination (by grounding responses in retrieved evidence), private data access (by indexing proprietary documents), and domain specificity (by retrieving from domain-specific knowledge bases). Limitations that RAG does NOT solve: the generator can still misinterpret or ignore retrieved context, the retrieval itself can fail (returning irrelevant chunks), and latency increases due to the extra retrieval step. RAG also does not improve the model's reasoning capability — it only provides better information. Combining RAG with chain-of-thought prompting can partially address the reasoning gap.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag01-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How do you measure the quality of a RAG system beyond standard LLM metrics?
  </summary>
  <div class="tp-qa-answer">
    <p>RAG evaluation requires specialized metrics: Faithfulness (are claims in the response supported by retrieved context?), Answer Relevance (does the response address the query?), Context Precision (are the retrieved chunks relevant?), and Context Recall (are all necessary chunks retrieved?). These four metrics form the RAGAS framework. For retrieval specifically, measure precision@k, recall@k, MRR, and NDCG against a relevance-annotated test set. A weighted composite score (e.g., 0.3 faithfulness + 0.3 relevance + 0.2 context precision + 0.2 context recall) gives a single RAG quality score for regression tracking.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag01-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: What is the difference between sparse and dense retrieval in RAG?
  </summary>
  <div class="tp-qa-answer">
    <p>Sparse retrieval (BM25, TF-IDF) uses keyword matching with an inverted index — it excels at exact term matching, handles rare terms well, and is fast with low storage cost. Dense retrieval uses embedding models to convert text into dense vectors and performs similarity search (cosine, dot product) — it captures semantic meaning, handles synonyms, and works across vocabulary gaps. Sparse retrieval fails on queries like "automotive vehicle" when the document says "car" (vocabulary mismatch). Dense retrieval fails on queries requiring specific term presence, like finding "Python 3.12" when "programming language" is the semantic match. Hybrid retrieval combines both.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag01-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: What prompt augmentation strategies prevent the LLM from ignoring retrieved context?
  </summary>
  <div class="tp-qa-answer">
    <p>Use explicit grounding instructions like "Answer ONLY based on the provided context. If the context lacks information, say you don't know." Position the context before the query (prepend) — studies show LLMs use prepended context more effectively than appended. Use numbered chunk references [1], [2] and instruct the model to cite sources. The sandwich strategy (context, then question, then reminder to use context) reinforces the grounding instruction. For strict tasks, use citation-style augmentation:</p>
    <pre><code>def augment(self, ctx):
    context = "\n\n".join([f"[{i+1}] {c.text}" for i, c in enumerate(ctx.chunks)])
    return f"{instruction}\n\nContext:\n{context}\n\nQuestion: {ctx.query}\n\nAnswer:"</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag01-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do you choose the number of chunks to retrieve (top-k) in a RAG system?
  </summary>
  <div class="tp-qa-answer">
    <p>Top-k selection involves a trade-off: too few chunks (k=1-2) may miss critical information (low recall), while too many (k=10-15) can exceed the LLM's context window, dilute relevance, and increase cost. Start with k=5 as a default, then tune based on chunk size and task complexity. For chunk sizes of 200-500 tokens, k=3-5 typically balances recall and precision. Evaluate recall@k on a validation set to determine the minimum k that captures all relevant information. Use dynamic selection: retrieve more candidates initially (k=10) but select only the top-k by relevance score that fit within your token budget.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag01-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: What is the role of the augmenter in RAG and how does prompt engineering apply?
  </summary>
  <div class="tp-qa-answer">
    <p>The augmenter transforms retrieved chunks into a structured prompt that the LLM can consume effectively. Key prompt engineering decisions include: clear separation between context and query (using "Context:" and "Question:" labels), explicit grounding instructions ("Answer only from context"), formatting chunks with source numbers for citation, and handling edge cases like empty context or contradictory information. The augmentation prompt is often the most iterated-on component in production RAG systems — small wording changes can significantly affect faithfulness. A well-designed augmenter reduces hallucination by 30-50% compared to naive concatenation.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag01-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How does RAG help with private or enterprise data that an LLM has never seen?
  </summary>
  <div class="tp-qa-answer">
    <p>RAG allows an LLM to answer questions about private data by indexing that data into a vector database at the enterprise's infrastructure. The data never enters the LLM's training set or model weights — it is only injected into the context window at query time. This provides data privacy and access control: you can restrict which documents each user can retrieve via metadata filters. It also enables real-time updates — new internal documents, customer records, or product specs are immediately available after indexing without any model retraining. This makes RAG the standard architecture for enterprise knowledge bases, internal documentation Q&A, and customer support systems.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

<details data-qid="rag-s1-quiz1">
<summary><strong>1.</strong> What does RAG stand for?</summary>
A. Recurrent Action Gradient
B. Retrieval-Augmented Generation
C. Random Access Generator
D. Recursive Attention Gate
Answer: B
</details>

<details data-qid="rag-s1-quiz2">
<summary><strong>2.</strong> Which LLM limitation does RAG primarily address?</summary>
A. Context window size
B. Knowledge cutoff and hallucination
C. Training cost
D. Token generation speed
Answer: B
</details>

<details data-qid="rag-s1-quiz3">
<summary><strong>3.</strong> What is the correct order of operations in a RAG pipeline?</summary>
A. Generate, Retrieve, Augment
B. Augment, Retrieve, Generate
C. Retrieve, Augment, Generate
D. Generate, Augment, Retrieve
Answer: C
</details>

<details data-qid="rag-s1-quiz4">
<summary><strong>4.</strong> What distinguishes dense retrieval from sparse retrieval?</summary>
A. Dense uses keyword matching
B. Dense uses embedding-based semantic search
C. Sparse is always faster
D. Dense requires no indexing
Answer: B
</details>

<details data-qid="rag-s1-quiz5">
<summary><strong>5.</strong> Which metric measures whether a RAG response stays true to the provided context?</summary>
A. Answer relevance
B. Context precision
C. Faithfulness
D. Perplexity
Answer: C
</details>


### True/False

**T/F 1**: This topic is fundamental to AI engineering.
**Answer**: True — Understanding rag vector databases is essential for building production AI systems.

**T/F 2**: The concepts in this chapter are only used in interviews.
**Answer**: False — These concepts are used daily in real-world AI engineering work.

**T/F 3**: Time/space complexity analysis applies to rag vector databases.
**Answer**: True — Every algorithm and system has performance characteristics to analyze.

**T/F 4**: rag vector databases concepts are independent of each other.
**Answer**: False — Most concepts build on each other and are interconnected.

**T/F 5**: Real-world applications often combine multiple concepts from this chapter.
**Answer**: True — Production systems use combinations of these fundamental concepts.

### Fill in the Blank

**FIB 1**: The key concept in this chapter is ________.
**Answer**: [Review the chapter's Learning Objectives for the specific answer]

**FIB 2**: In rag vector databases, the time complexity of the basic operation is ________.
**Answer**: [Depends on the specific operation — check the Theory section]

### Scenario Questions

**Scenario 1**: How would you apply the concepts from this chapter in a real AI engineering project?

**Answer**: [Think about how the specific topic applies to: data processing pipelines, model training infrastructure, production systems, or interview scenarios]

### Output Questions

**Output 1**: What is the time complexity of the main algorithm discussed in this chapter?
**Answer**: [Check the Theory section for the specific complexity analysis]

## Exercises

1. Implement a complete RAG pipeline that retrieves from a set of 10 documents, augments the prompt, and generates answers using any LLM. Test with 5 queries and report faithfulness scores.

2. Compare sparse retrieval (keyword overlap) with dense retrieval (embedding similarity) on a dataset of 50 scientific abstracts. Measure mean reciprocal rank (MRR) for both approaches.

3. Build a RAG evaluator that computes faithfulness, answer relevance, context precision, and context recall for a given pipeline. Use it to identify which of 3 chunking strategies produces the best RAG scores.

4. Design a prompt augmentation strategy that handles multi-chunk contexts (5+ chunks). Include deduplication, relevance ranking, and token budget management.

5. Analyze a sample of 10 LLM responses with and without RAG grounding. Count hallucinated facts in each case and report the reduction rate achieved by RAG.

## Common Mistakes

1. Retrieving too many chunks (k > 10) — excessive context exceeds token limits, dilutes relevance, and increases cost; start with k=3-5
2. Not grounding the LLM prompt with explicit instructions — without "answer only from context" instructions, the LLM will hallucinate despite having relevant retrieved documents
3. Using word-level tokenization for embeddings — BPE or SentencePiece tokenization produces better semantic representations for dense retrieval
4. Ignoring chunk size and overlap — chunks too small lose context; chunks too large dilute relevance; 200-500 tokens with 50-token overlap is a strong starting point
5. Evaluating RAG with standard LLM metrics only — faithfulness and context precision are RAG-specific metrics that standard BLEU/ROUGE miss entirely

## Revision Notes

- RAG = Retrieve relevant documents, Augment the prompt with context, Generate a grounded response
- Addresses LLM limitations: knowledge cutoff, hallucination, private data access, domain specificity
- Core components: Retriever (sparse/dense/hybrid), Index (chunks + embeddings + metadata), Augmenter (prompt formatting), Generator (LLM)
- Sparse retrieval (BM25): keyword-based, fast, misses semantic matches; Dense retrieval: embedding-based, captures semantics
- RAG vs Fine-Tuning: RAG updates knowledge in real-time, better for privacy; fine-tuning better for behavior/style changes
- Key evaluation metrics: faithfulness (response matches context), answer relevance (response addresses query), context precision (retrieved chunks are relevant)
- Chunking strategies: fixed-size, sentence-based, recursive, semantic — each affects retrieval quality
- Prompt augmentation: explicit grounding instructions, numbered chunk references, context before query

## Summary

Retrieval-Augmented Generation addresses fundamental LLM limitations — knowledge cutoff, hallucination, and private data inaccessibility — by retrieving relevant external documents before generation. The RAG pipeline follows three steps: retrieve relevant chunks from a knowledge base, augment the LLM prompt with that context, and generate a grounded response. Core components include the retriever (sparse BM25, dense embedding search, or hybrid), the document index (chunks + embeddings + metadata), the prompt augmenter (formatting and grounding instructions), and the LLM generator. RAG outperforms fine-tuning and prompt engineering for knowledge freshness and hallucination reduction. Evaluating RAG requires specialized metrics: faithfulness (response-context consistency), answer relevance (query-response alignment), and context precision (retrieval quality).

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Design a RAG system that serves 10 million documents across 5 languages. How do you handle multilingual retrieval, chunking, and cross-lingual search?
2. Explain the mathematical foundation of cosine similarity vs dot product for dense retrieval and when you would choose each

#### Amazon Style
1. A RAG-powered internal search system returns irrelevant chunks for technical queries. Walk through your debugging process from retrieval to generation
2. How would you implement access control in a RAG system where different users can only retrieve documents they're authorized to see?

#### Microsoft Style
1. How do you explain the value of RAG vs simply increasing an LLM's context window to a technical stakeholder?
2. A RAG system's faithfulness score is 0.6 but answer relevance is 0.9. What does this mismatch indicate and how do you fix it?

#### NVIDIA Style
1. Your RAG pipeline embeds 10 million documents using a sentence-transformer model. How do you optimize the embedding and indexing process for GPU acceleration?
2. A real-time RAG system needs sub-100ms retrieval latency across 50 million chunks. What vector database architecture and indexing strategy do you choose?

#### AI Startup Style
1. Build a RAG Q&A system over a startup's 500-page internal wiki. What chunking strategy, embedding model, and retrieval approach do you use?
2. Your RAG system's context precision is 0.4 — retrieved chunks are mostly irrelevant. Identify the three most likely causes and your fixes for each

### Resume Tips
- List "RAG" and "Vector Search" under Technical Skills with specific tools (FAISS, Pinecone, Weaviate, ChromaDB)
- Project example: "Built RAG pipeline over 10K documents achieving faithfulness=0.92 and context precision=0.87 using BGE embeddings and hybrid retrieval"
- Mention evaluation rigor: "Implemented RAGAS evaluation framework, reducing hallucination rate from 25% to 8% through prompt augmentation optimization"

### Interview Day Checklist
- [ ] Can describe the RAG pipeline (retrieve → augment → generate) from memory
- [ ] Can explain sparse vs dense retrieval with specific pros and cons
- [ ] Can describe 3 chunking strategies and their trade-offs
- [ ] Can explain faithfulness, answer relevance, and context precision metrics
- [ ] Can outline a complete RAG evaluation framework
