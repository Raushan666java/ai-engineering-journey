---
id: 12-parent-child-multi-vector
slug: /ai-engineering-placement/12-rag-vector-databases/12-parent-child-multi-vector
title: "Parent-Child & Multi-Vector Retrieval"
sidebar_label: "Parent-Child & Multi-Vector Retrieval"
sidebar_position: 163
---
<!-- Clear Language: Keep sentences under 50 words -->
# Parent-Child & Multi-Vector Retrieval

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand the small-to-big retrieval pattern — embed small, retrieve small, return large parent chunks |
| LO2 | Implement sentence window retrieval with dynamic context expansion around matched sentences |
| LO3 | Design multi-vector representations with separate embeddings for summaries, chunks, questions, and passages |
| LO4 | Build hierarchical indices with coarse-to-fine document → chunk search |
| LO5 | Implement parent-child ID mapping, metadata-based filtering, and recursive retrieval in vector databases |

## Introduction

Standard RAG retrieves a single chunk per embedding. But what if the best retrieval unit is smaller than the best context unit for the LLM? Parent-child and multi-vector retrieval solve this mismatch. You embed small, precise chunks for accurate retrieval, then return larger parent chunks that give the LLM full context. This chapter covers five advanced retrieval architectures: small-to-big, sentence window, multi-vector representation, hierarchical indices, and their implementation patterns.

## Prerequisites

- Basic RAG pipeline understanding (Module 12, Chapter 1)
- Vector database fundamentals (Module 12, Chapter 3)
- Chunking strategies (Module 12, Chapter 4)
- Python programming with data classes and type hints

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

- **Parent Chunk**: Large document segment (500–2000 tokens) returned to the LLM as context.
- **Child Chunk**: Small document segment (50–200 tokens) embedded for precise retrieval.
- **Small-to-Big**: Pattern where child chunks are embedded and searched, but parent chunks are returned.
- **Sentence Window**: Retrieve a single sentence, then expand to include N sentences before and after.
- **Multi-Vector**: Multiple embedding vectors per document (summary, questions, passages) for different retrieval strategies.
- **Hierarchical Index**: Two-level index: document-level coarse search → chunk-level fine search.
- **Parent-Child ID Mapping**: Metadata linking each child chunk to its parent for recursive lookup.
- **Recursive Retrieval**: Iterative search that refines queries based on intermediate results.

## Theory

Parent-child and multi-vector retrieval address a fundamental tension in RAG: small chunks improve retrieval precision, but large chunks improve generation quality. The solution is to decouple the retrieval unit from the context unit. Embed small for semantic precision. Return large for contextual completeness. This chapter covers the architecture, mathematics, and implementation of these patterns.

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 11.1 | Small-to-Big Retrieval | Embed small chunks, map to large parents, return parent context |
| 11.2 | Sentence Window Retrieval | Expand matched sentences with before/after context slices |
| 11.3 | Multi-Vector Representation | Separate embeddings per document for summary, questions, passages |
| 11.4 | Hierarchical Indices | Document-level coarse filter → chunk-level semantic search |
| 11.5 | Implementation Patterns | ID mapping, metadata filtering, recursive retrieval in vector DB |
| 11.6 | Evaluation | Compare parent-child vs flat chunking on precision and recall |

## Chapter Roadmap

```mermaid
flowchart TD
    A[Raw Documents] --> B[Chunk into Parent-Child Pairs]
    B --> C1[Parent Chunk: Large Context]
    B --> C2[Child Chunk: Small Embed]
    C2 --> D[Embed Child]
    D --> E[Vector Index: Child-Level]
    E --> F[Query → Embed → Search Children]
    F --> G[Match Child Chunks]
    G --> H[Lookup Parent ID]
    H --> I[Return Parent Context]
    I --> J[LLM Generation]

    K[Multi-Vector Option] --> L[Summary Embedding]
    K --> M[Question Embedding]
    K --> N[Passage Embedding]
    L --> E
    M --> E
    N --> E
```

```text

## 11.1 Small-to-Big Retrieval

Small-to-big retrieval embeds tiny chunks for high-precision matching, then maps each tiny chunk to a larger parent that provides full context to the LLM.

### 11.1.1 The Core Insight

A chunk of 50 tokens has a focused semantic signal. A query about "attention mechanism" matches a 50-token chunk about attention far better than a 500-token chunk that also discusses embeddings, transformers, and training. But the LLM needs those 500 tokens to understand the full context. Small-to-big gives you both.

```
```python
from typing import List, Optional, Dict, Tuple
from dataclasses import dataclass, field
import numpy as np
import hashlib
import json

@dataclass
class TextChunk:
    """Represents a single chunk of text in the retrieval system."""
    text: str
    chunk_id: str
    parent_id: Optional[str] = None
    metadata: Dict = field(default_factory=dict)
    embedding: Optional[np.ndarray] = None

@dataclass
class ParentChildPair:
    """A parent chunk with its associated child chunks."""
    parent: TextChunk
    children: List[TextChunk] = field(default_factory=list)

class SmallToBigChunker:
    """Splits documents into parent-child chunk pairs.

    Parents are large (500-2000 tokens) for context.
    Children are small (50-200 tokens) for precise retrieval.
    """

    def __init__(
        self,
        parent_size: int = 1000,
        parent_overlap: int = 100,
        child_size: int = 150,
        child_overlap: int = 20,
    ):
        self.parent_size = parent_size
        self.parent_overlap = parent_overlap
        self.child_size = child_size
        self.child_overlap = child_overlap

    def chunk(self, text: str, doc_id: str) -> List[ParentChildPair]:
        """Create parent-child pairs from a document."""
        parent_chunks = self._split_text(text, self.parent_size, self.parent_overlap)
        pairs = []

        for p_idx, parent_text in enumerate(parent_chunks):
            parent_id = f"{doc_id}_parent_{p_idx}"
            parent = TextChunk(
                text=parent_text,
                chunk_id=parent_id,
                metadata={"doc_id": doc_id, "type": "parent", "index": p_idx},
            )

            child_texts = self._split_text(parent_text, self.child_size, self.child_overlap)
            children = []

            for c_idx, child_text in enumerate(child_texts):
                child = TextChunk(
                    text=child_text,
                    chunk_id=f"{parent_id}_child_{c_idx}",
                    parent_id=parent_id,
                    metadata={
                        "doc_id": doc_id,
                        "type": "child",
                        "parent_index": p_idx,
                        "child_index": c_idx,
                        "parent_size": len(parent_text),
                    },
                )
                children.append(child)

            pairs.append(ParentChildPair(parent=parent, children=children))

        return pairs

    def _split_text(self, text: str, size: int, overlap: int) -> List[str]:
        """Split text into overlapping chunks of target size."""
        if len(text) <= size:
            return [text]

        chunks = []
        start = 0
        while start < len(text):
            end = min(start + size, len(text))
            if end < len(text):
                # Try to break at a sentence boundary
                search_start = max(start, end - 50)
                search_region = text[search_start:end]
                last_period = search_region.rfind(".")
                if last_period > 0:
                    end = search_start + last_period + 1

            chunks.append(text[start:end])
            start = end - overlap
            if start < 0:
                start = 0

        return chunks

    def get_all_children(self, pairs: List[ParentChildPair]) -> List[TextChunk]:
        """Extract all child chunks for embedding and indexing."""
        return [child for pair in pairs for child in pair.children]

    def get_all_parents(self, pairs: List[ParentChildPair]) -> List[TextChunk]:
        """Extract all parent chunks."""
        return [pair.parent for pair in pairs]

# Demo
chunker = SmallToBigChunker(parent_size=500, child_size=100)
sample_text = "RAG combines retrieval and generation. " * 30
pairs = chunker.chunk(sample_text, "doc001")
print(f"Parent-child pairs: {len(pairs)}")
print(f"Total children: {len(chunker.get_all_children(pairs))}")
for pair in pairs[:1]:
    print(f"  Parent: {len(pair.parent.text)} chars, {len(pair.children)} children")
```

```

### 11.1.2 Embedding Only Children

We embed only the child chunks for search. Parents are stored separately and retrieved by ID lookup.

```
```python
class MockEmbedder:
    """Simulates an embedding model for demonstration."""

    def __init__(self, dim: int = 384):
        self.dim = dim

    def embed(self, text: str) -> np.ndarray:
        # Deterministic pseudo-embedding based on text hash
        hash_val = int(hashlib.md5(text.encode()).hexdigest()[:8], 16)
        rng = np.random.RandomState(hash_val)
        emb = rng.randn(self.dim)
        return emb / np.linalg.norm(emb)

    def embed_batch(self, texts: List[str]) -> np.ndarray:
        return np.array([self.embed(t) for t in texts])

class ChildIndex:
    """Vector index that stores only child chunk embeddings."""

    def __init__(self, embedder: MockEmbedder):
        self.embedder = embedder
        self.children: List[TextChunk] = []
        self.embeddings: Optional[np.ndarray] = None
        self.parent_lookup: Dict[str, TextChunk] = {}

    def add_children(self, children: List[TextChunk]):
        """Index child chunks."""
        self.children.extend(children)
        texts = [c.text for c in children]
        embs = self.embedder.embed_batch(texts)

        if self.embeddings is None:
            self.embeddings = embs
        else:
            self.embeddings = np.vstack([self.embeddings, embs])

    def add_parents(self, parents: List[TextChunk]):
        """Store parent chunks for lookup by ID."""
        for p in parents:
            self.parent_lookup[p.chunk_id] = p

    def search(self, query: str, top_k: int = 5) -> List[Tuple[TextChunk, float]]:
        """Search over children and return matched child chunks."""
        query_emb = self.embedder.embed(query)

        if self.embeddings is None or len(self.children) == 0:
            return []

        scores = np.dot(self.embeddings, query_emb)
        top_indices = np.argsort(scores)[::-1][:top_k]

        results = []
        for idx in top_indices:
            results.append((self.children[idx], float(scores[idx])))

        return results

    def get_parent(self, child: TextChunk) -> Optional[TextChunk]:
        """Look up the parent chunk for a given child."""
        if child.parent_id and child.parent_id in self.parent_lookup:
            return self.parent_lookup[child.parent_id]
        return None

# Demo flow
embedder = MockEmbedder(dim=384)
index = ChildIndex(embedder)

all_children = chunker.get_all_children(pairs)
all_parents = chunker.get_all_parents(pairs)
index.add_children(all_children)
index.add_parents(all_parents)

results = index.search("retrieval and generation", top_k=3)
print("\nChild search results:")
for child, score in results:
    parent = index.get_parent(child)
    print(f"  Child ({score:.4f}): {child.text[:60]}...")
    if parent:
        print(f"  -> Parent: {parent.text[:80]}...")
```

```text

### 11.1.3 Small-to-Big Retrieval Pipeline

Complete end-to-end pipeline that searches children and returns parent context.

```
```python
class SmallToBigPipeline:
    """End-to-end small-to-big RAG pipeline."""

    def __init__(self, child_index: ChildIndex, parent_size_hint: str = "full"):
        self.index = child_index
        self.parent_size_hint = parent_size_hint

    def retrieve(self, query: str, top_k: int = 5) -> List[Dict]:
        """Retrieve parent chunks by searching child embeddings."""
        child_results = self.index.search(query, top_k=top_k)

        seen_parents = {}
        parent_results = []

        for child, score in child_results:
            parent = self.index.get_parent(child)
            if parent and parent.chunk_id not in seen_parents:
                seen_parents[parent.chunk_id] = True
                parent_results.append({
                    "parent_chunk": parent,
                    "matched_child": child,
                    "score": score,
                    "child_text": child.text,
                    "parent_text": parent.text,
                })

        return parent_results

    def format_context(self, results: List[Dict]) -> str:
        """Format retrieved parent chunks into a context string for the LLM."""
        contexts = []
        for i, r in enumerate(results, 1):
            contexts.append(
                f"[Context {i}]\n{r['parent_text']}\n"
                f"[Source: {r['parent_chunk'].metadata.get('doc_id', 'unknown')}]"
            )
        return "\n\n".join(contexts)

    def query(self, query: str, top_k: int = 5) -> Dict:
        """Full query: retrieve parent context and prepare for generation."""
        results = self.retrieve(query, top_k=top_k)
        context = self.format_context(results)

        return {
            "query": query,
            "context": context,
            "num_parents": len(results),
            "parent_ids": [r["parent_chunk"].chunk_id for r in results],
        }

pipeline = SmallToBigPipeline(index)
response = pipeline.query("What is RAG retrieval?", top_k=3)
print(f"\nPipeline query: {response['query']}")
print(f"Parents retrieved: {response['num_parents']}")
print(f"Context preview: {response['context'][:200]}...")
```

```

## 11.2 Sentence Window Retrieval

Sentence window retrieval embeds individual sentences for maximum precision, then expands the window around the matched sentence to provide context.

### 11.2.1 Window Expansion Mechanism

Instead of arbitrary chunk boundaries, we use natural sentence boundaries. When a sentence matches a query, we return N sentences before and after it.

```
```python
import re

class SentenceWindowChunker:
    """Splits text into sentences with window-based context expansion."""

    def __init__(self, window_size: int = 3):
        """
        Args:
            window_size: Number of sentences before and after the matched sentence.
                         Total window = 2 * window_size + 1 sentences.
        """
        self.window_size = window_size

    def extract_sentences(self, text: str) -> List[str]:
        """Split text into individual sentences."""
        # Split on sentence-ending punctuation followed by space or newline
        raw = re.split(r'(?<=[.!?])\s+', text)
        sentences = [s.strip() for s in raw if s.strip()]
        return sentences

    def build_sentence_index(self, text: str, doc_id: str) -> Tuple[List[TextChunk], List[Dict]]:
        """Create one embedding unit per sentence, storing full sentence list separately."""
        sentences = self.extract_sentences(text)
        chunks = []

        for idx, sent in enumerate(sentences):
            chunk = TextChunk(
                text=sent,
                chunk_id=f"{doc_id}_sent_{idx}",
                metadata={
                    "doc_id": doc_id,
                    "sentence_index": idx,
                    "total_sentences": len(sentences),
                    "type": "sentence",
                },
            )
            chunks.append(chunk)

        return chunks, sentences

    def get_window(
        self,
        sentences: List[str],
        match_index: int,
        window_size: Optional[int] = None,
    ) -> str:
        """Get a window of sentences around the matched index."""
        size = window_size or self.window_size
        start = max(0, match_index - size)
        end = min(len(sentences), match_index + size + 1)

        window_sentences = sentences[start:end]
        return " ".join(window_sentences)

    def get_windows_for_chunks(
        self,
        chunks: List[TextChunk],
        sentences: List[str],
    ) -> Dict[str, str]:
        """Pre-compute windows for all sentence chunks."""
        windows = {}
        for chunk in chunks:
            idx = chunk.metadata["sentence_index"]
            windows[chunk.chunk_id] = self.get_window(sentences, idx)
        return windows

class SentenceWindowRetriever:
    """Retrieves sentences and expands to window context."""

    def __init__(
        self,
        window_chunker: SentenceWindowChunker,
        embedder: MockEmbedder,
        default_window: int = 3,
    ):
        self.chunker = window_chunker
        self.embedder = embedder
        self.default_window = default_window
        self.sentence_index: List[TextChunk] = []
        self.sentence_store: Dict[str, List[str]] = {}
        self.sentence_embeddings: Optional[np.ndarray] = None
        self.window_cache: Dict[str, str] = {}

    def add_document(self, text: str, doc_id: str):
        """Index a document with sentence window support."""
        chunks, sentences = self.chunker.build_sentence_index(text, doc_id)
        self.sentence_index.extend(chunks)
        self.sentence_store[doc_id] = sentences

        # Pre-compute windows
        for c in chunks:
            idx = c.metadata["sentence_index"]
            window = self.chunker.get_window(sentences, idx, self.default_window)
            self.window_cache[c.chunk_id] = window

        # Update embeddings
        texts = [c.text for c in chunks]
        embs = self.embedder.embed_batch(texts)
        if self.sentence_embeddings is None:
            self.sentence_embeddings = embs
        else:
            self.sentence_embeddings = np.vstack([self.sentence_embeddings, embs])

    def search(
        self,
        query: str,
        top_k: int = 5,
        window_size: Optional[int] = None,
    ) -> List[Dict]:
        """Search sentences and return window-expanded context."""
        query_emb = self.embedder.embed(query)

        if self.sentence_embeddings is None:
            return []

        scores = np.dot(self.sentence_embeddings, query_emb)
        top_indices = np.argsort(scores)[::-1][:top_k]

        results = []
        for idx in top_indices:
            chunk = self.sentence_index[idx]
            window = self.window_cache.get(chunk.chunk_id, chunk.text)

            # Dynamic window expansion if requested
            if window_size is not None and window_size != self.default_window:
                doc_id = chunk.metadata["doc_id"]
                sent_idx = chunk.metadata["sentence_index"]
                sentences = self.sentence_store.get(doc_id, [])
                if sentences:
                    window = self.chunker.get_window(sentences, sent_idx, window_size)

            results.append({
                "sentence": chunk.text,
                "window": window,
                "score": float(scores[idx]),
                "sentence_index": chunk.metadata["sentence_index"],
                "doc_id": chunk.metadata["doc_id"],
                "chunk_id": chunk.chunk_id,
            })

        return results

# Demo
window_chunker = SentenceWindowChunker(window_size=2)
doc_text = (
    "RAG stands for Retrieval-Augmented Generation. "
    "It combines a retriever with a generator. "
    "The retriever finds relevant documents. "
    "The generator produces answers using those documents. "
    "This improves factual accuracy. "
    "It also reduces hallucination. "
    "RAG is widely used in QA systems. "
    "Many companies deploy RAG in production. "
    "The architecture is modular and extensible. "
    "You can swap components independently."
)

retriever = SentenceWindowRetriever(window_chunker, embedder)
retriever.add_document(doc_text, "doc-rag")

results = retriever.search("How does RAG reduce hallucination?", top_k=2)
print("\nSentence Window Retrieval Results:")
for r in results:
    print(f"  Score: {r['score']:.4f}")
    print(f"  Matched: \"{r['sentence']}\"")
    print(f"  Window ({r['sentence_index']}): \"{r['window'][:120]}...\"")
    print()
```

```text

### 11.2.2 Dynamic Window Sizing

Different queries need different window sizes. We can vary the window per query based on confidence.

```
```python
class AdaptiveWindowRetriever:
    """Adjusts window size based on query specificity and result confidence."""

    def __init__(self, base_retriever: SentenceWindowRetriever):
        self.base = base_retriever

    def estimate_query_breadth(self, query: str) -> float:
        """Estimate how broad the query is (0=narrow, 1=broad).

        Narrow queries need small windows. Broad queries need large windows.
        """
        num_words = len(query.split())
        has_question_words = any(w in query.lower() for w in ["what", "why", "how", "explain"])

        # Short question-word queries are broad
        if num_words < 5 and has_question_words:
            return 0.7
        # Longer specific queries are narrow
        elif num_words > 8:
            return 0.3
        return 0.5

    def search(self, query: str, top_k: int = 5) -> List[Dict]:
        breadth = self.estimate_query_breadth(query)
        window_size = max(1, int(breadth * 5))  # Map 0-1 to 1-5 sentences

        return self.base.search(query, top_k=top_k, window_size=window_size)

adaptive = AdaptiveWindowRetriever(retriever)
broad_results = adaptive.search("Explain RAG architecture")
narrow_results = adaptive.search("What is the retriever component?")

print(f"Broad query window size: {adaptive.estimate_query_breadth('Explain RAG architecture') * 5:.0f}")
print(f"Narrow query window size: {adaptive.estimate_query_breadth('What is the retriever component?') * 5:.0f}")
```

```

## 11.3 Multi-Vector Representation

Multi-vector representation creates multiple embedding vectors per document, each capturing a different aspect. This enables diverse retrieval strategies for the same content.

### 11.3.1 Why Multiple Vectors?

A single embedding must compress the entire document into one vector. This loses nuance. Multi-vector solves this by creating specialized embeddings:

- **Summary embedding**: Captures the document's main topic
- **Question embedding**: Anticipates likely questions the document answers
- **Passage embedding**: Captures specific factual content
- **Keyword embedding**: Captures key terminology

```
```python
class MultiVectorDocument:
    """A document with multiple embedding representations."""

    def __init__(
        self,
        doc_id: str,
        full_text: str,
        summary: Optional[str] = None,
        questions: Optional[List[str]] = None,
        passages: Optional[List[str]] = None,
        keywords: Optional[List[str]] = None,
    ):
        self.doc_id = doc_id
        self.full_text = full_text
        self.summary = summary or self._generate_summary(full_text)
        self.questions = questions or self._generate_questions(full_text)
        self.passages = passages or self._split_passages(full_text)
        self.keywords = keywords or self._extract_keywords(full_text)

    def _generate_summary(self, text: str) -> str:
        """Simplified summary: first 200 chars as a proxy."""
        return text[:200] + ("..." if len(text) > 200 else "")

    def _generate_questions(self, text: str) -> List[str]:
        """Extract or generate likely questions from key sentences."""
        sentences = re.split(r'(?<=[.!?])\s+', text)
        questions = []
        for sent in sentences[:5]:
            words = sent.split()
            # Create a pseudo-question from the sentence
            if len(words) > 5:
                question = f"What is {' '.join(words[:3])}?"
                questions.append(question)
        return questions

    def _split_passages(self, text: str) -> List[str]:
        """Split text into passages for dense embedding."""
        chunk_size = 300
        passages = []
        for i in range(0, len(text), chunk_size):
            passages.append(text[i:i + chunk_size])
        return passages

    def _extract_keywords(self, text: str) -> List[str]:
        """Extract capitalized terms and long words as keywords."""
        words = set(text.split())
        keywords = {
            w for w in words
            if len(w) > 6 or (w[0].isupper() and len(w) > 3)
        }
        return list(keywords)[:20]

class MultiVectorIndex:
    """Index that stores and searches across multiple vector representations."""

    def __init__(self, embedder: MockEmbedder):
        self.embedder = embedder
        self.docs: Dict[str, MultiVectorDocument] = {}

        # Separate embedding stores for each representation type
        self.summary_embeddings: Dict[str, np.ndarray] = {}
        self.question_embeddings: Dict[str, List[np.ndarray]] = {}
        self.passage_embeddings: Dict[str, List[np.ndarray]] = {}
        self.keyword_embeddings: Dict[str, List[np.ndarray]] = {}

        # Metadata for score normalization
        self.vector_stats: Dict[str, Dict] = {}

    def add_document(self, doc: MultiVectorDocument):
        """Index all representations of a document."""
        self.docs[doc.doc_id] = doc

        # Embed summary
        self.summary_embeddings[doc.doc_id] = self.embedder.embed(doc.summary)

        # Embed questions
        if doc.questions:
            self.question_embeddings[doc.doc_id] = [
                self.embedder.embed(q) for q in doc.questions
            ]

        # Embed passages
        if doc.passages:
            self.passage_embeddings[doc.doc_id] = [
                self.embedder.embed(p) for p in doc.passages
            ]

        # Embed keywords
        if doc.keywords:
            self.keyword_embeddings[doc.doc_id] = [
                self.embedder.embed(k) for k in doc.keywords
            ]

    def search_summary(self, query: str, top_k: int = 5) -> List[Tuple[str, float]]:
        """Search using summary embeddings."""
        query_emb = self.embedder.embed(query)
        scores = []
        for doc_id, emb in self.summary_embeddings.items():
            score = float(np.dot(emb, query_emb))
            scores.append((doc_id, score))

        scores.sort(key=lambda x: x[1], reverse=True)
        return scores[:top_k]

    def search_passages(self, query: str, top_k: int = 5) -> List[Tuple[str, float, str]]:
        """Search using passage embeddings, returns matched passage text."""
        query_emb = self.embedder.embed(query)
        results = []

        for doc_id, emb_list in self.passage_embeddings.items():
            for p_idx, emb in enumerate(emb_list):
                score = float(np.dot(emb, query_emb))
                passage_text = self.docs[doc_id].passages[p_idx]
                results.append((doc_id, score, passage_text))

        results.sort(key=lambda x: x[1], reverse=True)
        return results[:top_k]

    def search_multi_vector(
        self,
        query: str,
        weights: Optional[Dict[str, float]] = None,
        top_k: int = 5,
    ) -> List[Dict]:
        """Search across all representations with configurable weights."""
        if weights is None:
            weights = {
                "summary": 0.25,
                "question": 0.35,
                "passage": 0.25,
                "keyword": 0.15,
            }

        query_emb = self.embedder.embed(query)
        combined_scores: Dict[str, float] = {}

        for doc_id in self.docs:
            score = 0.0

            # Summary similarity
            if "summary" in weights and doc_id in self.summary_embeddings:
                sim = float(np.dot(self.summary_embeddings[doc_id], query_emb))
                score += sim * weights["summary"]

            # Question similarity (max over all questions)
            if "question" in weights and doc_id in self.question_embeddings:
                max_q_sim = max(
                    float(np.dot(q_emb, query_emb))
                    for q_emb in self.question_embeddings[doc_id]
                ) if self.question_embeddings[doc_id] else 0
                score += max_q_sim * weights["question"]

            # Passage similarity (max over all passages)
            if "passage" in weights and doc_id in self.passage_embeddings:
                max_p_sim = max(
                    float(np.dot(p_emb, query_emb))
                    for p_emb in self.passage_embeddings[doc_id]
                ) if self.passage_embeddings[doc_id] else 0
                score += max_p_sim * weights["passage"]

            # Keyword similarity (average over all keywords)
            if "keyword" in weights and doc_id in self.keyword_embeddings:
                kw_sims = [
                    float(np.dot(k_emb, query_emb))
                    for k_emb in self.keyword_embeddings[doc_id]
                ] if self.keyword_embeddings[doc_id] else [0]
                score += np.mean(kw_sims) * weights["keyword"]

            combined_scores[doc_id] = score

        sorted_docs = sorted(combined_scores.items(), key=lambda x: x[1], reverse=True)
        return [
            {
                "doc_id": doc_id,
                "score": score,
                "summary": self.docs[doc_id].summary[:100],
            }
            for doc_id, score in sorted_docs[:top_k]
        ]

# Demo
docs_data = [
    "Retrieval-Augmented Generation (RAG) combines pretrained language models with external knowledge retrieval. The retriever searches a corpus for relevant documents. The generator produces answers conditioned on both the query and retrieved documents. This approach dramatically improves factual accuracy.",
    "Vector databases store embeddings for similarity search. Popular options include Pinecone, Weaviate, Qdrant, and Chroma. They support Approximate Nearest Neighbor search for fast retrieval at scale. Metadata filtering allows hybrid search combining vector and keyword approaches.",
    "Attention mechanisms allow transformers to focus on relevant parts of the input. Self-attention computes relationships between all positions in a sequence. Multi-head attention runs multiple attention operations in parallel. This is the foundation of modern LLMs.",
]

multi_index = MultiVectorIndex(embedder)
for i, text in enumerate(docs_data):
    doc = MultiVectorDocument(doc_id=f"doc-{i}", full_text=text)
    multi_index.add_document(doc)
    print(f"Added doc-{i}: {len(doc.questions)} questions, {len(doc.passages)} passages, {len(doc.keywords)} keywords")

results = multi_index.search_multi_vector(
    "How do I store embeddings for fast search?",
    weights={"summary": 0.2, "question": 0.4, "passage": 0.3, "keyword": 0.1},
    top_k=3,
)
print("\nMulti-vector search results:")
for r in results:
    print(f"  {r['doc_id']}: score={r['score']:.4f}, summary={r['summary'][:80]}...")
```

```text

### 11.3.2 Query-Document Matching with Questions

One powerful multi-vector strategy: embed anticipated questions alongside documents. This bridges the vocabulary gap between how users ask and how documents are written.

```
```python
class QuestionAugmentedRetrieval:
    """Uses generated questions to improve query-document matching."""

    def __init__(self, multi_index: MultiVectorIndex):
        self.index = multi_index

    def search(self, query: str, top_k: int = 5) -> List[Dict]:
        """Boost search with question-answer matching."""
        # Search all vectors, but weight question matches heavily
        results = self.index.search_multi_vector(
            query,
            weights={"summary": 0.15, "question": 0.50, "passage": 0.25, "keyword": 0.10},
            top_k=top_k,
        )
        return results

qa_retrieval = QuestionAugmentedRetrieval(multi_index)
qa_results = qa_retrieval.search("What is RAG?")
print(f"\nQuestion-augmented retrieval top doc: {qa_results[0]['doc_id']}")
```

```

## 11.4 Hierarchical Indices

Hierarchical indices create a two-level search: coarse document-level search first, then fine chunk-level search within matched documents.

### 11.4.1 Two-Level Index Architecture

Document-level vectors capture overall topic. Chunk-level vectors capture specific content. Search proceeds top-down: find relevant documents, then drill into their chunks.

```
```python
@dataclass
class Document:
    """Top-level document in the hierarchy."""
    doc_id: str
    title: str
    abstract: str
    full_text: str
    embedding: Optional[np.ndarray] = None

class HierarchicalIndex:
    """Two-level index: documents at level 1, chunks at level 2."""

    def __init__(self, embedder: MockEmbedder):
        self.embedder = embedder
        self.documents: Dict[str, Document] = {}
        self.doc_embeddings: Dict[str, np.ndarray] = {}

        # Level 2: chunks organized by parent document
        self.chunk_indices: Dict[str, ChildIndex] = {}

    def add_document(self, doc: Document, chunk_size: int = 300):
        """Add a document and its chunk-level index."""
        self.documents[doc.doc_id] = doc
        self.doc_embeddings[doc.doc_id] = self.embedder.embed(f"{doc.title} {doc.abstract}")

        # Build chunk-level index for this document
        chunk_index = ChildIndex(self.embedder)
        chunks = []
        for i in range(0, len(doc.full_text), chunk_size):
            chunk_text = doc.full_text[i:i + chunk_size]
            chunk = TextChunk(
                text=chunk_text,
                chunk_id=f"{doc.doc_id}_chunk_{i // chunk_size}",
                metadata={
                    "doc_id": doc.doc_id,
                    "chunk_start": i,
                    "chunk_end": i + len(chunk_text),
                },
            )
            chunks.append(chunk)

        chunk_index.add_children(chunks)
        self.chunk_indices[doc.doc_id] = chunk_index

    def coarse_search(self, query: str, top_k_docs: int = 3) -> List[Tuple[Document, float]]:
        """Level 1: Search document-level embeddings."""
        query_emb = self.embedder.embed(query)
        scores = []

        for doc_id, doc_emb in self.doc_embeddings.items():
            score = float(np.dot(doc_emb, query_emb))
            scores.append((self.documents[doc_id], score))

        scores.sort(key=lambda x: x[1], reverse=True)
        return scores[:top_k_docs]

    def fine_search(
        self,
        query: str,
        doc_ids: Optional[List[str]] = None,
        top_k_per_doc: int = 3,
    ) -> List[Dict]:
        """Level 2: Search chunks within selected documents."""
        if doc_ids is None:
            doc_ids = [doc.doc_id for doc, _ in self.coarse_search(query)]

        results = []
        for doc_id in doc_ids:
            if doc_id in self.chunk_indices:
                child_results = self.chunk_indices[doc_id].search(query, top_k=top_k_per_doc)
                for child, score in child_results:
                    results.append({
                        "doc_id": doc_id,
                        "chunk_id": child.chunk_id,
                        "text": child.text,
                        "score": score,
                        "level": "fine",
                    })

        results.sort(key=lambda x: x["score"], reverse=True)
        return results

    def hierarchical_search(
        self,
        query: str,
        top_k_docs: int = 3,
        top_k_chunks: int = 5,
    ) -> List[Dict]:
        """Coarse-to-fine search: find docs, then find chunks."""
        coarse_results = self.coarse_search(query, top_k_docs=top_k_docs)
        selected_doc_ids = [doc.doc_id for doc, _ in coarse_results]

        fine_results = self.fine_search(
            query,
            doc_ids=selected_doc_ids,
            top_k_per_doc=max(2, top_k_chunks // len(selected_doc_ids)),
        )

        return fine_results[:top_k_chunks]

# Build hierarchical index
hier_index = HierarchicalIndex(embedder)

docs_data = [
    ("RAG Systems", "RAG combines retrieval and generation for accurate QA."),
    ("Vector Databases", "Vector DBs store and search embeddings efficiently."),
    ("Transformer Architecture", "Transformers use attention for sequence processing."),
]

for i, (title, abstract) in enumerate(docs_data):
    full = f"{title}. {abstract}. " + (f"Detailed content about {title}. " * 20)
    doc = Document(doc_id=f"h-{i}", title=title, abstract=abstract, full_text=full)
    hier_index.add_document(doc)

coarse = hier_index.coarse_search("storage for embeddings", top_k_docs=2)
print("\nCoarse search (document level):")
for doc, score in coarse:
    print(f"  {doc.doc_id}: {doc.title} (score={score:.4f})")

fine = hier_index.hierarchical_search("storage for embeddings", top_k_docs=2, top_k_chunks=4)
print("\nFine search (chunk level within selected docs):")
for r in fine:
    print(f"  {r['doc_id']}/{r['chunk_id']}: score={r['score']:.4f}")
```

```text

### 11.4.2 Recursive Retrieval with Feedback

Hierarchical retrieval can be recursive: use coarse results to refine the query, then search again at the chunk level.

```
```python
class RecursiveHierarchicalRetriever:
    """Performs multi-step retrieval with query refinement between steps."""

    def __init__(self, hier_index: HierarchicalIndex, max_depth: int = 3):
        self.index = hier_index
        self.max_depth = max_depth

    def search(self, query: str, top_k: int = 5) -> List[Dict]:
        """Recursive search with query expansion at each level."""
        current_query = query
        all_results = []
        seen_chunk_ids = set()

        for depth in range(self.max_depth):
            results = self.index.hierarchical_search(
                current_query,
                top_k_docs=max(3, 5 - depth),
                top_k_chunks=max(top_k, top_k * (depth + 1)),
            )

            # Add only new results
            new_count = 0
            for r in results:
                if r["chunk_id"] not in seen_chunk_ids:
                    seen_chunk_ids.add(r["chunk_id"])
                    all_results.append(r)
                    new_count += 1

            # Expand query with terms from new results
            if new_count < 2:
                break

            expansion_terms = []
            for r in results[:3]:
                words = r["text"].split()[:5]
                expansion_terms.extend(w for w in words if len(w) > 5)

            if expansion_terms:
                current_query = f"{current_query} {' '.join(set(expansion_terms))}"

        all_results.sort(key=lambda x: x["score"], reverse=True)
        return all_results[:top_k]

recursive = RecursiveHierarchicalRetriever(hier_index)
results = recursive.search("How do databases search embeddings?", top_k=3)
print(f"\nRecursive retrieval: {len(results)} results")
for r in results:
    print(f"  {r['doc_id']}: score={r['score']:.4f}")
```

```

## 11.5 Implementation Patterns

This section covers practical patterns for implementing parent-child and multi-vector retrieval in production vector databases.

### 11.5.1 Parent-Child ID Mapping in Vector DB

Vector databases like Pinecone, Qdrant, and Weaviate support metadata. We store the parent_id as metadata on each child vector.

```
```python
class VectorDBClient:
    """Simulates a vector database with metadata support."""

    def __init__(self, embedder: MockEmbedder):
        self.embedder = embedder
        self.vectors: Dict[str, np.ndarray] = {}
        self.metadata: Dict[str, Dict] = {}

    def upsert(self, chunk_id: str, embedding: np.ndarray, metadata: Dict):
        """Insert or update a vector with metadata."""
        self.vectors[chunk_id] = embedding
        self.metadata[chunk_id] = metadata

    def search(
        self,
        query_emb: np.ndarray,
        top_k: int = 10,
        filter_criteria: Optional[Dict] = None,
    ) -> List[Dict]:
        """Search vectors with optional metadata filtering."""
        scores = []
        for chunk_id, emb in self.vectors.items():
            meta = self.metadata.get(chunk_id, {})

            # Apply metadata filter
            if filter_criteria:
                skip = False
                for key, value in filter_criteria.items():
                    if meta.get(key) != value:
                        skip = True
                        break
                if skip:
                    continue

            score = float(np.dot(emb, query_emb))
            scores.append({
                "chunk_id": chunk_id,
                "score": score,
                "metadata": meta,
            })

        scores.sort(key=lambda x: x["score"], reverse=True)
        return scores[:top_k]

    def get_metadata(self, chunk_id: str) -> Optional[Dict]:
        """Retrieve metadata for a specific chunk."""
        return self.metadata.get(chunk_id)

class ParentChildDB:
    """Production-style parent-child retrieval using vector DB metadata."""

    def __init__(self, vector_db: VectorDBClient, embedder: MockEmbedder):
        self.db = vector_db
        self.embedder = embedder

    def index_parent_child(
        self,
        parent_id: str,
        parent_text: str,
        children: List[TextChunk],
    ):
        """Index a parent-child group into the vector DB."""
        # Store parent metadata (not embedded)
        parent_meta = {
            "type": "parent",
            "text": parent_text,
            "child_ids": [c.chunk_id for c in children],
        }
        self.db.upsert(parent_id, np.zeros(self.embedder.dim), parent_meta)

        # Store children with embeddings and parent reference
        for child in children:
            child_meta = {
                "type": "child",
                "text": child.text,
                "parent_id": parent_id,
                "doc_id": child.metadata.get("doc_id"),
            }
            emb = self.embedder.embed(child.text)
            self.db.upsert(child.chunk_id, emb, child_meta)

    def retrieve_with_parent(
        self,
        query: str,
        top_k: int = 5,
    ) -> List[Dict]:
        """Search children, return parent context."""
        query_emb = self.embedder.embed(query)

        # Search only child vectors
        child_results = self.db.search(
            query_emb,
            top_k=top_k * 3,
            filter_criteria={"type": "child"},
        )

        # Deduplicate by parent and collect parent text
        seen_parents = {}
        results = []

        for r in child_results:
            parent_id = r["metadata"].get("parent_id")
            if parent_id and parent_id not in seen_parents:
                seen_parents[parent_id] = True

                parent_meta = self.db.get_metadata(parent_id)
                parent_text = parent_meta.get("text", "") if parent_meta else ""

                results.append({
                    "parent_id": parent_id,
                    "parent_text": parent_text,
                    "matched_child": r["metadata"]["text"],
                    "child_id": r["chunk_id"],
                    "score": r["score"],
                })

                if len(results) >= top_k:
                    break

        return results

# Demo the production pattern
vector_db = VectorDBClient(embedder)
pc_db = ParentChildDB(vector_db, embedder)

# Index a document
for p_idx, pair in enumerate(pairs):
    pc_db.index_parent_child(
        parent_id=pair.parent.chunk_id,
        parent_text=pair.parent.text,
        children=pair.children,
    )

prod_results = pc_db.retrieve_with_parent("retrieval generation", top_k=3)
print(f"\nProduction parent-child retrieval: {len(prod_results)} unique parents")
for r in prod_results:
    print(f"  Parent {r['parent_id']}: {len(r['parent_text'])} chars (score={r['score']:.4f})")
```

```text

### 11.5.2 Metadata Filtering Strategies

Metadata filters narrow search scope before vector comparison. Common filters include document type, date range, and content category.

```
```python
class MetadataFilterBuilder:
    """Builds metadata filters for vector DB queries."""

    @staticmethod
    def doc_type_filter(doc_type: str) -> Dict:
        return {"doc_type": doc_type}

    @staticmethod
    def date_range_filter(start_date: str, end_date: str) -> Dict:
        return {"date": {"$gte": start_date, "$lte": end_date}}

    @staticmethod
    def category_filter(categories: List[str]) -> Dict:
        return {"category": {"$in": categories}}

    @staticmethod
    def composite_filter(filters: List[Dict], logic: str = "AND") -> Dict:
        return {f"${logic}": filters}

    @staticmethod
    def parent_only_filter() -> Dict:
        return {"type": "parent"}

    @staticmethod
    def child_only_filter() -> Dict:
        return {"type": "child"}

    @staticmethod
    def parent_id_filter(parent_id: str) -> Dict:
        return {"parent_id": parent_id}

# Example usage
filter_builder = MetadataFilterBuilder()
complex_filter = filter_builder.composite_filter([
    filter_builder.child_only_filter(),
    filter_builder.category_filter(["research", "technical"]),
])
print(f"Complex filter: {complex_filter}")
```

```

### 11.5.3 Recursive Retrieval with Multi-Vector Feedback

Combine recursive retrieval with multi-vector representations for the most flexible system.

```
```python
class RecursiveMultiVectorRetriever:
    """Recursive retrieval using multiple vector representations."""

    def __init__(
        self,
        multi_index: MultiVectorIndex,
        max_iterations: int = 3,
        convergence_threshold: int = 2,
    ):
        self.multi_index = multi_index
        self.max_iterations = max_iterations
        self.convergence_threshold = convergence_threshold

    def search(self, query: str, top_k: int = 5) -> Dict:
        """Iterative search with feedback from previous results."""
        iteration_history = []
        current_query = query
        seen_docs = set()

        for iteration in range(self.max_iterations):
            # Search with current query
            results = self.multi_index.search_multi_vector(
                current_query,
                top_k=top_k,
            )

            new_docs = [r for r in results if r["doc_id"] not in seen_docs]
            for r in new_docs:
                seen_docs.add(r["doc_id"])

            iteration_history.append({
                "iteration": iteration,
                "query": current_query,
                "num_new_results": len(new_docs),
                "results": results,
            })

            # Check convergence
            if len(new_docs) < self.convergence_threshold:
                break

            # Refine query using the summary of the top new result
            if new_docs:
                top_new = new_docs[0]
                doc = self.multi_index.docs.get(top_new["doc_id"])
                if doc:
                    # Extract key terms from the document
                    key_phrases = doc.summary.split()[:10]
                    refinement = " ".join(
                        w for w in key_phrases
                        if w.lower() not in current_query.lower()
                    )
                    if refinement:
                        current_query = f"{current_query} {refinement}"

        # Merge all unique results across iterations
        merged = {}
        for hist in iteration_history:
            for r in hist["results"]:
                if r["doc_id"] not in merged:
                    merged[r["doc_id"]] = r

        return {
            "final_results": sorted(merged.values(), key=lambda x: x["score"], reverse=True)[:top_k],
            "iterations": len(iteration_history),
            "history": iteration_history,
        }

recursive_mv = RecursiveMultiVectorRetriever(multi_index)
recursive_results = recursive_mv.search("embedding storage", top_k=3)
print(f"\nRecursive multi-vector search: {recursive_results['iterations']} iterations")
for r in recursive_results["final_results"]:
    print(f"  {r['doc_id']}: score={r['score']:.4f}")
```

```text

### 11.5.4 Chunking Strategy Comparison

Compare different parent-child configurations to select optimal sizes.

```
```python
class ParentChildBenchmark:
    """Compare retrieval quality across different parent-child configurations."""

    def __init__(self, embedder: MockEmbedder, queries: List[str], corpus: List[str]):
        self.embedder = embedder
        self.queries = queries
        self.corpus = corpus

    def evaluate_config(
        self,
        parent_size: int,
        child_size: int,
        top_k: int = 5,
    ) -> Dict:
        """Evaluate a specific parent-child configuration."""
        chunker = SmallToBigChunker(parent_size=parent_size, child_size=child_size)
        db = ParentChildDB(VectorDBClient(self.embedder), self.embedder)

        for doc_idx, doc_text in enumerate(self.corpus):
            pairs = chunker.chunk(doc_text, f"doc-{doc_idx}")
            for pair in pairs:
                db.index_parent_child(
                    parent_id=pair.parent.chunk_id,
                    parent_text=pair.parent.text,
                    children=pair.children,
                )

        total_parents = 0
        for query in self.queries:
            results = db.retrieve_with_parent(query, top_k=top_k)
            total_parents += len(results)

        avg_parents = total_parents / len(self.queries)

        return {
            "parent_size": parent_size,
            "child_size": child_size,
            "child_to_parent_ratio": parent_size / max(child_size, 1),
            "avg_parents_retrieved": round(avg_parents, 2),
        }

benchmark = ParentChildBenchmark(
    embedder=embedder,
    queries=["RAG retrieval", "vector search", "attention mechanism"],
    corpus=[t * 20 for t in docs_data],
)

configs = [(1000, 100), (500, 100), (500, 200), (300, 50)]
print("\nParent-Child Configuration Comparison:")
for parent_size, child_size in configs:
    result = benchmark.evaluate_config(parent_size, child_size)
    print(f"  Parent={result['parent_size']}, Child={result['child_size']}: "
          f"ratio={result['child_to_parent_ratio']}x, "
          f"avg_parents={result['avg_parents_retrieved']}")
```

## Summary

Parent-child and multi-vector retrieval solve the embedding resolution problem. Small-to-big embeds child chunks for precise matching but returns parent chunks for full context. Sentence window retrieval expands matched sentences with surrounding context using natural boundaries. Multi-vector representation creates specialized embeddings (summary, questions, passages, keywords) per document, enabling diverse retrieval strategies. Hierarchical indices provide coarse-to-fine search: document-level filtering first, then chunk-level precision. Implementation patterns leverage vector DB metadata for parent-child ID mapping, metadata filtering for scope control, and recursive retrieval for iterative refinement. These patterns typically improve recall@5 by 15-30% over flat chunking while maintaining the same generation quality.

## Practical Takeaways

| Takeaway | Description |
|----------|-------------|
| Decouple retrieval from context | Embed small (50-200 tokens), return large (500-2000 tokens) |
| Use sentence windows for precision | Match sentences, expand with N before and after for context |
| Generate questions for documents | Question embeddings bridge the vocabulary gap between users and documents |
| Build hierarchical indices for scale | Document-level coarse filter first, then chunk-level search |
| Leverage metadata in vector DB | Store parent_id, doc_type, category as metadata for filtering |
| Benchmark parent-child ratios | Test 5:1 to 10:1 parent-to-child token ratios for your domain |

## Interview Q&A

<details class="tp-qa-card" data-qid="rag11-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What is the small-to-big retrieval pattern and why is it more effective than flat chunking?
  </summary>
  <div class="tp-qa-answer">
<p>Small-to-big retrieval addresses the fundamental tension between retrieval precision and generation context. In flat chunking, you choose a single chunk size — small chunks (50-100 tokens) give precise retrieval but lack context for the LLM to generate good answers, while large chunks (500-1000 tokens) have full context but dilute the embedding signal, making retrieval less precise. Small-to-big solves this by decoupling the retrieval unit from the context unit: you embed small child chunks (50-200 tokens) for high-precision semantic matching, then return their parent chunks (500-2000 tokens) to the LLM. The parent chunk contains the child's content plus surrounding context. This improves retrieval precision by 15-30% while maintaining generation quality because the LLM still receives full context. Implementation requires storing parent_id in child chunk metadata and a lookup table mapping child IDs to parent texts.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag11-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: How does sentence window retrieval work and when should you use it over small-to-big?
  </summary>
  <div class="tp-qa-answer">
<p>Sentence window retrieval embeds individual sentences, then retrieves with window expansion: when a sentence matches the query, you return N sentences before and after it (the default window is typically 2-5 sentences on each side). The window expansion uses natural sentence boundaries rather than arbitrary character cutoffs, making the context more coherent. Use sentence window retrieval when your content has strong sentence-level semantics — conversational data, news articles, and research papers benefit most. Use small-to-big when your content has larger thematic blocks — technical documentation, legal contracts, and book chapters. Sentence window retrieval excels at precise fact lookup ("What is the boiling point of water?") while small-to-big excels at broader understanding ("Explain the water cycle").</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag11-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: What is multi-vector representation and how does it improve retrieval?
  </summary>
  <div class="tp-qa-answer">
<p>Multi-vector representation creates multiple embedding vectors per document, each optimized for a different retrieval strategy. Common representations include: summary embedding (captures main topic for broad queries), question embeddings (anticipated questions the document answers — bridges the user-document vocabulary gap), passage embeddings (specific factual content for precise matches), and keyword embeddings (key terminology for exact matches). During search, a weighted combination of similarities across all representations produces the final score. This improves retrieval by 10-20% over single-vector approaches because different queries match different representations — a how-to query matches a question embedding, a definition query matches the summary, and a specific fact query matches a passage. The weights are tunable per query type or learned from user feedback.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag11-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: Explain hierarchical indices and the coarse-to-fine search pattern.
  </summary>
  <div class="tp-qa-answer">
<p>Hierarchical indices implement a two-level retrieval architecture. Level 1 is a document-level index where each document has a single embedding (typically from its title and abstract or summary). Level 2 contains chunk-level indices organized by parent document. The coarse-to-fine search pattern first searches the document-level index to find the top-K relevant documents (coarse filter), then searches only within those documents' chunk indices to find the most relevant passages (fine filter). This is significantly more efficient than searching all chunks directly because the document-level index is 10-100x smaller than the chunk-level index. The architecture also enables document-level filtering (by date, category, source) before any vector search, reducing the search space further. This pattern is essential for corpora with 100K+ documents where flat chunk search would be too slow.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag11-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How do you implement parent-child ID mapping in a production vector database?
  </summary>
  <div class="tp-qa-answer">
<p>Production implementation stores parent_id as metadata on each child vector entry. In Pinecone, you add it to the metadata dict: `{"type": "child", "parent_id": "parent-001", "doc_id": "doc-001"}`. The parent text is stored separately — either as a metadata field on a parent-type vector or in an external key-value store (Redis, DynamoDB). During retrieval: (1) search child vectors with a metadata filter `{"type": "child"}`, (2) extract parent_id from each result, (3) deduplicate by parent_id, (4) look up parent text by parent_id. This gives you unique parent contexts even when multiple child chunks match the query. The child-to-parent ratio is typically 5:1 to 10:1 in token count. Storage cost increases because you store both child embeddings (for search) and parent texts (for context), but this is negligible compared to the retrieval quality improvement.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag11-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How does recursive retrieval work with parent-child structures?
  </summary>
  <div class="tp-qa-answer">
<p>Recursive retrieval performs multiple search iterations, using results from each iteration to refine the query for the next. In parent-child structures, the first iteration searches child embeddings with the original query. The top parent texts are examined to extract new key terms, which expand the query. The expanded query is used for a second search, potentially retrieving different parent contexts. This continues until convergence (few new results) or a max iteration limit (typically 3). Recursive retrieval improves recall for complex queries by 20-40% because the initial query might miss relevant terms that appear only in the retrieved documents. For example, searching "machine learning frameworks" retrieves documents mentioning "PyTorch" and "TensorFlow", and the expanded query "PyTorch TensorFlow machine learning frameworks" retrieves comparison documents that the original query missed.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag11-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: What are the trade-offs of multi-vector vs single-vector retrieval?
  </summary>
  <div class="tp-qa-answer">
<p>Multi-vector retrieval stores 3-5x more embedding vectors per document (summary, questions, passages, keywords), increasing storage cost and ingestion latency. Search latency also increases because you compute similarity against all representations and combine scores. However, multi-vector improves retrieval recall by 10-20% and is more robust to query phrasing variations — a poorly phrased query might miss a passage embedding but match a question embedding. Single-vector is simpler, cheaper, and faster, making it suitable for small corpora (under 10K documents) or latency-sensitive applications. Multi-vector is worth the extra cost for large corpora (100K+ documents), high-stakes retrieval (medical, legal), and applications where users phrase queries unpredictably. A practical middle ground: use single-vector for the first pass and multi-vector reranking for top candidates.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag11-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do you choose the optimal parent and child chunk sizes?
  </summary>
  <div class="tp-qa-answer">
<p>Parent size should match the LLM's context window and the typical answer complexity. For most applications, 500-1500 tokens per parent works well — large enough for the LLM to understand the full context, small enough to exclude irrelevant content. Child size should optimize retrieval precision: 50-200 tokens. The child-to-parent ratio should be 5:1 to 10:1. For example, 1000-token parents with 100-token children gives a 10:1 ratio. To find optimal sizes for your domain, run a benchmark: test 3-5 parent sizes × 3-5 child sizes on a representative query set, measuring retrieval precision (recall@k) and generation quality (faithfulness, completeness). The optimal sizes depend on content type — technical documentation needs larger parents (1000-1500 tokens) while conversational content works with smaller parents (300-500 tokens).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag11-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: How do you generate effective question embeddings for documents?
  </summary>
  <div class="tp-qa-answer">
<p>Question embeddings anticipate the queries users will ask and embed those alongside the document. Generation approaches: (1) LLM-based: prompt an LLM with the document text and ask "What questions does this document answer?" — generate 3-10 questions per document. (2) Template-based: extract key entities and slot them into templates like "What is [entity]?" or "How does [entity] work?" (3) Historical: use past user queries that led to this document being clicked as question embeddings. The generated questions are embedded using the same embedding model as queries. During search, the query embedding is compared against both passage embeddings and question embeddings — a match on either boosts the document's score. The question weight in the multi-vector combination is typically 0.3-0.5 because question matching is the most robust against query phrasing variations.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag11-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How do you evaluate parent-child retrieval vs standard retrieval?
  </summary>
  <div class="tp-qa-answer">
<p>Evaluate on three dimensions: retrieval precision, generation quality, and latency. For retrieval precision, use recall@k (does the parent appear in top-k results?) and precision@k (are the retrieved parents relevant?). Compare parent-child against flat chunking at equivalent chunk sizes — for example, compare 1000-token flat chunks against 1000-token parents with 100-token children. For generation quality, measure answer faithfulness (are all claims supported by the retrieved context?) and completeness (does the answer cover all information the query asks for?). Parent-child typically matches or exceeds flat chunking on faithfulness while improving recall by 15-30%. For latency, parent-child adds a metadata lookup step (parent resolution) but this is sub-millisecond. The main latency difference is that child embedding dimension is the same as flat chunking, so search time is comparable.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

<details data-qid="rag-s11-quiz1">
<summary><strong>1.</strong> What problem does small-to-big retrieval solve?</summary>
A. Embedding model token limits
B. The mismatch between retrieval precision and generation context size
C. Document storage costs
D. LLM hallucination
Answer: B
</details>

<details data-qid="rag-s11-quiz2">
<summary><strong>2.</strong> In sentence window retrieval, what does the "window" refer to?</summary>
A. The size of the embedding model
B. The number of sentences before and after the matched sentence
C. The time window for query caching
D. The character count of the matched sentence
Answer: B
</details>

<details data-qid="rag-s11-quiz3">
<summary><strong>3.</strong> What is the purpose of question embeddings in multi-vector retrieval?</summary>
A. To reduce the number of documents to search
B. To bridge the vocabulary gap between user queries and document language
C. To compress document storage
D. To replace passage embeddings entirely
Answer: B
</details>

<details data-qid="rag-s11-quiz4">
<summary><strong>4.</strong> In a hierarchical index, what happens during the coarse search phase?</summary>
A. All chunk embeddings are searched exhaustively
B. Document-level embeddings are searched to find relevant documents
C. Metadata is scanned without embeddings
D. The query is decomposed into sub-queries
Answer: B
</details>

<details data-qid="rag-s11-quiz5">
<summary><strong>5.</strong> How is parent-child ID mapping typically implemented in vector databases?</summary>
A. By storing parent_id as a metadata field on child vector entries
B. By concatenating parent and child text before embedding
C. By using separate databases for parents and children
D. By encoding parent_id into the embedding vector itself
Answer: A
</details>

## Exercises

1. Implement a small-to-big retrieval system using 500-token parents and 100-token children. Index 5 Wikipedia articles. Compare recall@5 against flat 500-token chunks on 20 test queries. Report precision improvement.

2. Build a sentence window retriever with adaptive window sizing. Use query length and question words to predict window size (1-5 sentences). Test on 30 queries and measure whether adaptive windows outperform fixed-size windows.

3. Create a multi-vector index that stores summary, question, passage, and keyword embeddings per document. Implement weighted search with tunable weights. Demonstrate that different query types (definition, how-to, factual) benefit from different weight configurations.

4. Implement a hierarchical index for a corpus of 20 documents. Build document-level embeddings from titles/abstracts and chunk-level embeddings from full text. Search 10 queries with coarse-to-fine and compare latency and precision vs flat chunk search.

5. Design a recursive retrieval system that uses results from each iteration to expand the query. Compare recall@10 with 1, 2, and 3 iterations on 20 complex queries. Measure the diminishing returns per additional iteration.

## Revision Notes

- - Core principle: Decouple retrieval granularity from generation context
- - Implementation pattern: Parent-child ID mapping via vector DB metadata
- - Small-to-big: Embed children (50-200t), return parents (500-2000t)
- - Sentence window: Match sentences, expand with N surrounding sentences
- - Multi-vector: Summary + questions + passages + keywords per document
- - Hierarchical: Coarse document search → fine chunk search
- - Recursive: Iterative refinement using retrieved content
- - Ratio guide: 5:1 to 10:1 parent-to-child token ratio
- - Benchmark: Test 3-5 size combinations on your domain

## Placement Section

### Top 10 Interview Questions

#### Google Style

1. **Explain the core idea of Parent-Child & Multi-Vector Retrieval in under 60 seconds, then give a real-world analogy.** — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?

2. **Design a minimal, well-typed function that demonstrates Parent-Child & Multi-Vector Retrieval.** — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?

3. **What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review.

#### Amazon Style

4. **Describe a production bug caused by misunderstanding Parent-Child & Multi-Vector Retrieval. How did you diagnose and fix it?** — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added.

5. **How would you scale a system that relies on Parent-Child & Multi-Vector Retrieval from 10 users to 10 million?** — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?

#### Microsoft Style

6. **Compare Parent-Child & Multi-Vector Retrieval with the closest alternative approach. When would you choose each?** — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?

7. **Walk through how you would test a component that depends on Parent-Child & Multi-Vector Retrieval.** — Unit, integration, property-based tests; mocking boundaries; golden files for outputs.

#### NVIDIA Style

8. **How does Parent-Child & Multi-Vector Retrieval behave differently at scale — memory, throughput, or precision-wise?** — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?

9. **How would you make an implementation of Parent-Child & Multi-Vector Retrieval run faster on GPU hardware?** — Batch operations, vectorization, avoiding Python loops, reducing data movement.

#### AI Startup Style

10. **Write the smallest possible implementation of Parent-Child & Multi-Vector Retrieval that is production-quality.** — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?

### Resume Tips

- Name Parent-Child & Multi-Vector Retrieval explicitly in your skills section, paired with a measurable achievement ("Reduced X by 40% using Parent-Child & Multi-Vector Retrieval").
- Add a bullet describing a project that applies Parent-Child & Multi-Vector Retrieval to real data, with numbers.
- Mention the tools and libraries you used alongside Parent-Child & Multi-Vector Retrieval (linters, test frameworks, profiling tools).
- Keep resume bullets under 15 words and start each with an action verb.

### Interview Day Checklist

- Rehearse a 60-second explanation of Parent-Child & Multi-Vector Retrieval and one real-world analogy.
- Prepare one STAR story about debugging a Parent-Child & Multi-Vector Retrieval-related production issue.
- Review complexity and edge cases for the classic Parent-Child & Multi-Vector Retrieval interview problem.
- Have questions ready: how does the team apply Parent-Child & Multi-Vector Retrieval in production today?
- Test your environment (Python, editor, internet) 15 minutes before the interview.

## True/False

1. **True or False:** Parent-Child & Multi-Vector Retrieval builds directly on the fundamentals covered in the earlier chapters of this module. — **True.** Every advanced topic in this module assumes the core concepts from the previous chapters.
2. **True or False:** You should write at least one code example for Parent-Child & Multi-Vector Retrieval before moving to the next chapter. — **True.** Active recall with hands-on code beats passive reading for retention.
3. **True or False:** The complexity analysis for Parent-Child & Multi-Vector Retrieval is the same regardless of input size. — **False.** Complexity grows with input size; always state best, average, and worst case.
4. **True or False:** Edge cases (empty input, invalid input, boundary values) matter for Parent-Child & Multi-Vector Retrieval in production. — **True.** Most production bugs come from unhandled edge cases.
5. **True or False:** You should memorize the Parent-Child & Multi-Vector Retrieval chapter content once and never review it again. — **False.** Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall.

## Fill in the Blank

1. The chapter that covers Parent-Child & Multi-Vector Retrieval is Chapter ___ of this module. — Answer: check the module's table of contents.
2. The time complexity of the standard approach to Parent-Child & Multi-Vector Retrieval is ___. — Answer: review the theory section and state big-O notation.
3. The main edge case to handle when implementing Parent-Child & Multi-Vector Retrieval is ___. — Answer: empty or invalid input handling, as discussed in the chapter.
4. The tools commonly used to debug Parent-Child & Multi-Vector Retrieval issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter.
5. The related topic that connects to Parent-Child & Multi-Vector Retrieval in the next chapter is ___. — Answer: see the Next Topic section.

## Scenario Questions

1. **Scenario:** A teammate ships a change involving Parent-Child & Multi-Vector Retrieval that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist.

2. **Scenario:** Your implementation of Parent-Child & Multi-Vector Retrieval is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes.

3. **Scenario:** A new hire asks you to explain Parent-Child & Multi-Vector Retrieval in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo.

4. **Scenario:** Your team's codebase has three different patterns for Parent-Child & Multi-Vector Retrieval and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it.

## Output Questions

1. **What is the output of the simplest correct implementation of Parent-Child & Multi-Vector Retrieval on an empty input?** — Trace through the code: it should return the documented default (None, 0, empty collection) without raising.
2. **What is the output when the input is at the boundary value?** — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples.
3. **What does the implementation return when given invalid input types?** — With type hints and validation, it raises a clear error; without, it may fail silently.
4. **What is the output for the sample input given in the chapter's Examples section?** — Re-run the chapter's example code and compare against the documented output.
5. **What is the time complexity output when you profile the implementation at 10x input size?** — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear).

## Difficulty Level

| Level | Time | What It Takes |
|-------|------|---------------|
| Beginner | 1-2 sessions | Read theory, run the chapter examples, solve the Easy exercises |
| Intermediate | 3-5 sessions | Complete Medium exercises, explain Parent-Child & Multi-Vector Retrieval to someone else |
| Advanced | 1+ week | Solve Hard exercises, optimize for real datasets, answer interview follow-ups |

## Tips & Tricks

- Always write a one-line example of Parent-Child & Multi-Vector Retrieval from memory before opening the chapter — active recall first.
- Use the chapter's Revision Notes as a checklist: you have mastered Parent-Child & Multi-Vector Retrieval when you can explain each bullet.
- Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus.
- For interviews, practice explaining Parent-Child & Multi-Vector Retrieval twice: once with a technical audience, once with a non-technical audience.
- Keep a personal examples file where you collect your own Parent-Child & Multi-Vector Retrieval snippets; interviewers love original examples.

## Memory Tricks

- **Acronym**: build a mnemonic from the 5 key concepts of Parent-Child & Multi-Vector Retrieval listed in the Chapter at a Glance table.
- **Story**: link Parent-Child & Multi-Vector Retrieval to a familiar story — the analogy in the Visual Analogy section is designed to stick.
- **Number anchor**: remember the complexity of Parent-Child & Multi-Vector Retrieval by connecting it to a known algorithm of the same class.
- **Color code**: highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing.
- **Teach-back**: explain Parent-Child & Multi-Vector Retrieval to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory.

## Further Reading

- Official documentation for the primary tool or library used in this chapter
- The chapter referenced in Related Topics for the next-level treatment of Parent-Child & Multi-Vector Retrieval
- The classic textbook chapter on Parent-Child & Multi-Vector Retrieval (check the Research References below)
- Two blog posts from engineers who debugged real Parent-Child & Multi-Vector Retrieval problems in production
- The repository of the open-source project that implements Parent-Child & Multi-Vector Retrieval

## Related Topics

- The previous chapter in this module (see table of contents) — foundational for Parent-Child & Multi-Vector Retrieval
- The next chapter (see Next Topic below) — builds on Parent-Child & Multi-Vector Retrieval
- The system design chapters in Module 07 — how Parent-Child & Multi-Vector Retrieval fits into production architectures
- The interview preparation module — how Parent-Child & Multi-Vector Retrieval is asked in screening rounds
- The capstone project — where Parent-Child & Multi-Vector Retrieval is applied end-to-end

## FAQs

1. **Do I need to memorize all of Parent-Child & Multi-Vector Retrieval, or understand the big picture?** — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth.
2. **What if I get stuck on an exercise?** — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day.
3. **How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation.
4. **Is Parent-Child & Multi-Vector Retrieval asked in interviews?** — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies.
5. **What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days.

## Important Notes

- Parent-Child & Multi-Vector Retrieval is a core requirement for the rest of this module — do not skip the examples.
- Always analyze complexity (time and space) when working with Parent-Child & Multi-Vector Retrieval.
- Production correctness means handling edge cases, not just the happy path.
- Interview answers should start with the definition, then the example, then the trade-offs.
- Revisit this chapter after finishing the module; the context from later chapters deepens understanding.

## Historical Context

- Parent-Child & Multi-Vector Retrieval emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews.
- The tools used for Parent-Child & Multi-Vector Retrieval today evolved from simpler versions; the chapter covers the modern, recommended approach.
- Interviewers value knowing one historical fact about Parent-Child & Multi-Vector Retrieval — it shows genuine interest, not just cramming.
- The library/tooling ecosystem around Parent-Child & Multi-Vector Retrieval changes quickly; focus on fundamentals that remain stable.

## Security Considerations

- Never trust external input: validate and sanitize data before processing Parent-Child & Multi-Vector Retrieval.
- Avoid `eval()` and dynamic code execution on untrusted strings.
- Log errors without leaking sensitive data (keys, PII, internal paths).
- For API contexts, add rate limiting and input size limits.
- Review the chapter's code examples for injection or overflow risks before using them verbatim.

## ML Intuition

- Parent-Child & Multi-Vector Retrieval appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation.
- Understanding Parent-Child & Multi-Vector Retrieval helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs.
- In production ML, the Parent-Child & Multi-Vector Retrieval concepts from this chapter map directly to NumPy/PyTorch operations on tensors.
- When optimizing ML systems, Parent-Child & Multi-Vector Retrieval skills let you profile and fix the data path, not just the training loop.
- Interview follow-up: how would you apply Parent-Child & Multi-Vector Retrieval to a dataset of 10 million records? — Batching and vectorization.

## Analogies

- **Parent-Child & Multi-Vector Retrieval is like a recipe**: the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice.
- **Complexity is like a delivery route**: a linear route visits each stop once; a nested route revisits stops, and you feel it at scale.
- **Edge cases are like weather**: the happy path is a sunny day; production is the storm — build for the storm.
- **The chapter roadmap is a journey map**: each section is a checkpoint; skipping one means getting lost later in the module.

## Capstone Project Link

- [Module Capstone: End-to-End Project](https://github.com/Raushan666java/ai-engineering-journey) — this chapter contributes the Parent-Child & Multi-Vector Retrieval skills used in the module's capstone project. Complete the exercises here before starting the capstone.

## Flashcards

<details class="tp-qa-card" data-qid="12ragvectordatabases-12parentchildmultivector-flash1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What is the core concept of Parent-Child & Multi-Vector Retrieval in one sentence?
  </summary>
  <div class="tp-qa-answer">
    <p>Review the first paragraph of the Theory section and condense it to one sentence.</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="12ragvectordatabases-12parentchildmultivector-flash2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What is the most common mistake engineers make with
  </summary>
  <div class="tp-qa-answer">
    <p>Check the Common Mistakes section of this chapter.</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="12ragvectordatabases-12parentchildmultivector-flash3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What is the time and space complexity of the standard Parent-Child & Multi-Vector Retrieval approach?
  </summary>
  <div class="tp-qa-answer">
    <p>Refer to the theory and complexity analysis in this chapter.</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="12ragvectordatabases-12parentchildmultivector-flash4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    When is Parent-Child & Multi-Vector Retrieval NOT the right choice?
  </summary>
  <div class="tp-qa-answer">
    <p>Check the Limitations section of this chapter.</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="12ragvectordatabases-12parentchildmultivector-flash5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    How is Parent-Child & Multi-Vector Retrieval applied in a real production system?
  </summary>
  <div class="tp-qa-answer">
    <p>Check the Real-World Examples section of this chapter.</p>
  </div>
</details>

## Research References

- Official documentation of the primary library for Parent-Child & Multi-Vector Retrieval (linked in Further Reading)
- The classic paper or textbook chapter introducing Parent-Child & Multi-Vector Retrieval (see References below)
- The standard library reference for Parent-Child & Multi-Vector Retrieval-related functions
- Engineering blog posts from companies running Parent-Child & Multi-Vector Retrieval in production at scale
- PEPs and RFCs where applicable (Python and networking standards)

## Open-Source Tools

- The primary library used in this chapter (see the code examples)
- Python standard library modules used in the examples (check the imports)
- Testing: pytest for unit tests of Parent-Child & Multi-Vector Retrieval code
- Linting and formatting: ruff + black
- Profiling: cProfile or py-spy for performance work on Parent-Child & Multi-Vector Retrieval

## Debugging Guide

- Start with `print()` or a debugger to inspect intermediate values in Parent-Child & Multi-Vector Retrieval code.
- Reproduce the failure with the smallest possible input before changing code.
- Check the common failure modes listed in Common Mistakes — most bugs are listed there.
- For performance problems, profile before optimizing: measure, then fix.
- When stuck, re-read the chapter's Examples and compare line by line with your code.
- Use `pdb` or your IDE's debugger to step through the Parent-Child & Multi-Vector Retrieval example code.

## Mock Interview Section

**Round 1 — Screening (15 min)**
- Explain Parent-Child & Multi-Vector Retrieval in 60 seconds.
- Write a minimal working example of Parent-Child & Multi-Vector Retrieval.
- What is the complexity of your example?

**Round 2 — Coding (45 min)**
- Solve the Medium exercise from this chapter under time pressure.
- State your assumptions, then implement with type hints.
- Test with edge cases: empty input, boundary values, invalid input.

**Round 3 — Behavioral + System (30 min)**
- Tell me about a time you debugged a Parent-Child & Multi-Vector Retrieval problem in a project.
- How would you design a system where Parent-Child & Multi-Vector Retrieval is used at scale?
- What metrics would you monitor?

**Evaluation rubric**: correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%).

## Optimized Implementation

`python
from typing import Any, Optional

def demonstrate_topic(input_data: list[Any]) -> Optional[float]:
    """Runnable scaffold for Parent-Child & Multi-Vector Retrieval.

    Replace the body with the optimized implementation from the chapter,
    keeping type hints, docstring, and edge-case handling.
    """
    if not input_data:
        return None
    # Step 1: validate input types
    # Step 2: apply the core Parent-Child & Multi-Vector Retrieval logic from the Examples section
    # Step 3: return the result with the documented default
    return 0.0
`

- Keeps the function signature stable so tests written against it stay valid.
- Handles the empty-input contract explicitly.
- Add unit tests for the edge cases before implementing the logic (test-first).

## Evaluation Metrics

| Skill | Test | Target |
|-------|------|--------|
| Concept recall | Explain Parent-Child & Multi-Vector Retrieval without notes | 60-second explanation |
| Code fluency | Write the chapter example from memory | No syntax errors |
| Edge cases | Handle empty/invalid input in exercises | All cases pass |
| Complexity | State time/space for the standard approach | Correct big-O |
| Interview readiness | Answer 5 Interview Q&A questions out loud | Fluent, structured answers |
| Retention | Chapter quiz score after 3 days | 80%+ |

## Real-World Examples

- **Startup**: a small team uses Parent-Child & Multi-Vector Retrieval daily in their data pipeline — the chapter's examples mirror their code.
- **E-commerce**: Parent-Child & Multi-Vector Retrieval patterns appear in order processing, inventory checks, and recommendation feeds.
- **Fintech**: Parent-Child & Multi-Vector Retrieval principles apply to transaction validation and fraud detection flows.
- **ML platform**: Parent-Child & Multi-Vector Retrieval shows up in feature engineering and model-serving infrastructure.
- **Interview insight**: recruiters look for engineers who can connect Parent-Child & Multi-Vector Retrieval to the business outcome, not just the code.

## Next Topic

[Knowledge Graph RAG](13-knowledge-graph-rag.md)

## Limitations

- Parent-Child & Multi-Vector Retrieval, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory).
- The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling.
- Performance of Parent-Child & Multi-Vector Retrieval depends on input size and distribution — always benchmark for your own data.
- This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone.
