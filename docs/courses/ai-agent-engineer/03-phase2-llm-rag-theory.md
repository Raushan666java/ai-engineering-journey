# Phase 2 — LLM Fundamentals + RAG Theory

**Duration:** Weeks 4-5, ~25 hours
**Goal:** Understand embeddings, vector search, chunking strategies, and RAG architecture well enough to defend every design decision in a technical interview. Build a public RAG demo API.

---


<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/hero.svg" alt="Chapter Banner: Phase 2 — LLM Fundamentals + RAG Theory" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/handwritten-notes.svg" alt="Handwritten Notes: Phase 2 — LLM Fundamentals + RAG Theory" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/sticky-notes.svg" alt="Sticky Notes: Phase 2 — LLM Fundamentals + RAG Theory" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/visual-explanation.svg" alt="Visual Explanation: Phase 2 — LLM Fundamentals + RAG Theory" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/architecture.svg" alt="Architecture: Phase 2 — LLM Fundamentals + RAG Theory" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/workflow.svg" alt="Workflow: Phase 2 — LLM Fundamentals + RAG Theory" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/mindmap.svg" alt="Mind Map: Phase 2 — LLM Fundamentals + RAG Theory" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/comparison.svg" alt="Comparison: Phase 2 — LLM Fundamentals + RAG Theory" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/cheatsheet.svg" alt="Cheat Sheet: Phase 2 — LLM Fundamentals + RAG Theory" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/interview-quiz.svg" alt="Quiz Card: Phase 2 — LLM Fundamentals + RAG Theory" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/ai-agent-engineer/03-phase2-llm-rag-theory/social-card.svg" alt="Social Card: Phase 2 — LLM Fundamentals + RAG Theory" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->

## Topic Table

| # | Subtopic | Hours | Done checkpoint |
|---|----------|-------|-----------------|
| 1 | Tokens and tokenization (BPE) | 1 | Estimate token count of a paragraph within 20% without a tool |
| 2 | Context window mechanics | 1 | Explain why multi-turn chat resends the whole history every call |
| 3 | Embeddings — what a vector represents | 2 | Explain cosine similarity in one concrete sentence |
| 4 | Embedding dimensionality (cost/quality tradeoff) | 1 | Name 2 OpenAI embedding models, their dimensions, pick the right one |
| 5 | Prompt engineering: zero-shot, few-shot, CoT | 2.5 | Write a few-shot prompt that improves output vs zero-shot |
| 6 | Structured output / function calling | 2 | Write a tool-call schema by hand for both OpenAI and Anthropic |
| 7 | Vector search math | 2 | Explain why cosine wins for text embeddings |
| 8 | ANN indexes: HNSW vs exact search | 2 | Explain speed/accuracy tradeoff HNSW makes |
| 9 | RAG architecture end-to-end | 2 | Draw the full pipeline from memory with every arrow labeled |
| 10 | Chunking strategies | 2.5 | Explain a real failure mode of naive fixed-size chunking |
| 11 | Retrieval ranking + re-ranking | 2 | Explain why a re-rancer improves results even with a good retriever |
| 12 | Vector DB comparison (ChromaDB/Qdrant/pgvector) | 2.5 | Write a 1-paragraph honest comparison citing real tradeoffs |
| 13 | Hallucination in RAG | 1.5 | Explain 2 RAG-specific hallucination causes |
| 14 | Fine-tuning: LoRA, QLoRA, when to use | 2 | Explain when fine-tuning beats RAG and vice versa |
| 15 | Model evaluation + comparison (GPT vs Claude vs local) | 2 | Run an eval harness comparing 2 models on the same test set |
| 16 | Guardrails / content moderation | 1.5 | Add input + output guardrails to your RAG endpoint |

---

## 2.1 Tokens and Tokenization

LLMs don't see characters or words. They see **tokens** — subword units produced by a tokenizer.

### BPE (Byte-Pair Encoding)

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/bpe-byte-pair-encoding-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/bpe-byte-pair-encoding-handwritten.svg" alt="Handwritten: BPE (Byte-Pair Encoding)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/bpe-byte-pair-encoding-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/bpe-byte-pair-encoding-diagram.svg" alt="Diagram: BPE (Byte-Pair Encoding)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/bpe-byte-pair-encoding-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/bpe-byte-pair-encoding-sticky.svg" alt="Sticky Note: BPE (Byte-Pair Encoding)" width="30%">
</a>


```python
import tiktoken

encoder = tiktoken.encoding_for_model("gpt-4")
tokens = encoder.encode("The cat sat on the mat.")
print(len(tokens))  # ~6 tokens
print(tokens)       # [976, 9059, 11739, 402, 279, 21491, 13]

# Decode back
text = encoder.decode(tokens)
print(text)  # "The cat sat on the mat."
```

### Why token count matters for cost

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/why-token-count-matters-for-cost-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/why-token-count-matters-for-cost-handwritten.svg" alt="Handwritten: Why token count matters for cost" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/why-token-count-matters-for-cost-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/why-token-count-matters-for-cost-diagram.svg" alt="Diagram: Why token count matters for cost" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/why-token-count-matters-for-cost-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/why-token-count-matters-for-cost-sticky.svg" alt="Sticky Note: Why token count matters for cost" width="30%">
</a>


`tiktoken` lets you estimate cost before making an API call:

```python
def estimate_cost(prompt: str, model: str = "gpt-4") -> float:
    encoder = tiktoken.encoding_for_model(model)
    tokens = encoder.encode(prompt)
    # GPT-4: $30/1M input tokens
    return len(tokens) * 30 / 1_000_000
```

### Exercise

Take 5 paragraphs from your own writing. Use `tiktoken` to count tokens. Try to estimate before running — see how close you get. Then check: how many tokens does a 500-word article produce? (Answer: ~650-700 tokens, gpt-4)

---

## 2.2 Context Window Mechanics

**Key insight:** Every LLM call sends the entire conversation history. There is no hidden "memory."

```python
# Each API call sends ALL of this:
messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "What is RAG?"},
    {"role": "assistant", "content": "RAG is Retrieval-Augmented Generation..."},
    {"role": "user", "content": "Give me a code example"},
    # Next call appends here, but sends everything above too
]

import tiktoken
total_tokens = sum(len(tiktoken.encoding_for_model("gpt-4").encode(m["content"])) for m in messages)
```

**Practical implication:** At ~100 conversation turns, you hit context limits. This is why:
- Long conversations need summarization (condense history every N turns)
- Agent pipelines that chain multiple calls must track growing token costs
- A vector memory store (your ChromaDB server) lets agents retrieve relevant history instead of re-sending everything

### Exercise

Write a script that simulates 10 conversation turns, counting tokens for each turn. Print total tokens sent per call. This visualizes why "conversation history" gets expensive fast.

---

## 2.3 Embeddings — What a Vector Actually Represents

An embedding is a **semantic compression** — a list of N floats (usually 1536 or 768) that represents the "meaning" of a piece of text. Similar texts have similar vectors.

```python
from openai import OpenAI

client = OpenAI()

texts = [
    "The cat sat on the mat",
    "A dog played in the park",
    "The stock market crashed today",
]

responses = client.embeddings.create(
    model="text-embedding-3-small",
    input=texts,
)

for text, embedding in zip(texts, responses.data):
    print(f"{text[:30]:30s} ? vector of {len(embedding.embedding)} floats")
```

### Cosine Similarity

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/cosine-similarity-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/cosine-similarity-handwritten.svg" alt="Handwritten: Cosine Similarity" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/cosine-similarity-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/cosine-similarity-diagram.svg" alt="Diagram: Cosine Similarity" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/cosine-similarity-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/cosine-similarity-sticky.svg" alt="Sticky Note: Cosine Similarity" width="30%">
</a>


```python
import numpy as np

def cosine_similarity(a: list[float], b: list[float]) -> float:
    a, b = np.array(a), np.array(b)
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# Text 0 ("cat on mat") and Text 1 ("dog in park") should be more similar
# than Text 0 and Text 2 ("stock market")
sim_0_1 = cosine_similarity(embeddings[0], embeddings[1])
sim_0_2 = cosine_similarity(embeddings[0], embeddings[2])
print(f"cat-dog similarity: {sim_0_1:.3f}")
print(f"cat-market similarity: {sim_0_2:.3f}")
```

### Exercise

Write a 20-line script: embed 3 sentences (2 similar, 1 unrelated), print cosine similarities, confirm the math matches intuition. This is the foundation exercise — skip nothing in it.

---

## 2.4 Embedding Dimensionality Tradeoff

| Model | Dimensions | Cost/1M tokens | Use case |
|-------|-----------|----------------|----------|
| `text-embedding-3-small` | 1536 | $0.02 | Default — best cost/quality balance |
| `text-embedding-3-large` | 3072 | $0.13 | High-accuracy retrieval, semantic search |
| `text-embedding-3-small` (dimensions=256) | 256 | $0.02 | Cost-sensitive, good-enough accuracy |

```python
# Reduce dimensions via the API (saves storage, slight quality loss)
response = client.embeddings.create(
    model="text-embedding-3-small",
    input="Hello world",
    dimensions=256,
)
```

**Rule of thumb:** Start with `text-embedding-3-small` at full 1536 dimensions. Reduce dimensions only if benchmarked accuracy on your specific data stays above threshold at 256.

### Exercise

Embed the same 3 sentences at 1536, 512, and 256 dimensions. Compare cosine similarity outputs — how much does ranking change?

---

## 2.5 Prompt Engineering

### Zero-shot

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/zero-shot-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/zero-shot-handwritten.svg" alt="Handwritten: Zero-shot" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/zero-shot-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/zero-shot-diagram.svg" alt="Diagram: Zero-shot" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/zero-shot-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/zero-shot-sticky.svg" alt="Sticky Note: Zero-shot" width="30%">
</a>

```python
prompt = "Translate to French: Hello, how are you?"
```

### Few-shot

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/few-shot-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/few-shot-handwritten.svg" alt="Handwritten: Few-shot" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/few-shot-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/few-shot-diagram.svg" alt="Diagram: Few-shot" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/few-shot-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/few-shot-sticky.svg" alt="Sticky Note: Few-shot" width="30%">
</a>

```python
prompt = """Translate English to French:

English: Hello, how are you?
French: Bonjour, comment allez-vous?

English: What time is it?
French: Quelle heure est-il?

English: Where is the train station?
French:"""
```

### Chain-of-Thought

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/chain-of-thought-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/chain-of-thought-handwritten.svg" alt="Handwritten: Chain-of-Thought" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/chain-of-thought-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/chain-of-thought-diagram.svg" alt="Diagram: Chain-of-Thought" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/chain-of-thought-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/chain-of-thought-sticky.svg" alt="Sticky Note: Chain-of-Thought" width="30%">
</a>

```python
prompt = """Solve this problem step by step.

A customer bought a gym membership for ?12,000/year. 
They used it for 4 months. What's the prorated refund?

Step 1: Monthly cost = 12000 / 12 = ?1000 per month
Step 2: Months unused = 12 - 4 = 8 months
Step 3: Refund = 1000 * 8 = ?8000

A customer bought a gym membership for ?18,000/year.
They used it for 7 months. What's the prorated refund?"""
```

### Exercise

Take one real prompt from your existing memory server (or a simple Q&A prompt). Write a zero-shot version. Write a few-shot version with 3 examples. Run both. Compare output format consistency and accuracy. Write down the diff.

---

## 2.6 Structured Output / Function Calling

```python
# OpenAI format
tools = [
    {
        "type": "function",
        "function": {
            "name": "create_booking",
            "description": "Create a booking from a lead",
            "parameters": {
                "type": "object",
                "properties": {
                    "lead_id": {"type": "integer", "description": "Lead identifier"},
                    "amount": {"type": "number", "description": "Booking amount"},
                    "payment_method": {
                        "type": "string",
                        "enum": ["upi", "cash", "card", "cheque"]
                    },
                },
                "required": ["lead_id", "amount", "payment_method"],
            },
        }
    }
]

response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Create booking for lead 42, amount 5000 via UPI"}],
    tools=tools,
    tool_choice="auto",
)
```

```python
# Anthropic format
tool_spec = {
    "name": "create_booking",
    "description": "Create a booking from a lead",
    "input_schema": {
        "type": "object",
        "properties": {
            "lead_id": {"type": "integer"},
            "amount": {"type": "number"},
            "payment_method": {"type": "string", "enum": ["upi", "cash", "card", "cheque"]},
        },
        "required": ["lead_id", "amount", "payment_method"],
    },
}
```

### Exercise

Write the same tool schema (a RAG query tool with `query: str`, `top_k: int`, `collection: str`) in both OpenAI and Anthropic formats by hand. Note the structural differences.

---

## 2.7 Vector Search Math

### Cosine Similarity

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/cosine-similarity-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/cosine-similarity-handwritten.svg" alt="Handwritten: Cosine Similarity" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/cosine-similarity-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/cosine-similarity-diagram.svg" alt="Diagram: Cosine Similarity" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/cosine-similarity-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/cosine-similarity-sticky.svg" alt="Sticky Note: Cosine Similarity" width="30%">
</a>


```
cosine(A, B) = (A · B) / (|A| * |B|)
```

Range: -1 (opposite) to 1 (identical). For text embeddings, most values are between 0 and 1.

### Dot Product

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/dot-product-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/dot-product-handwritten.svg" alt="Handwritten: Dot Product" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/dot-product-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/dot-product-diagram.svg" alt="Diagram: Dot Product" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/dot-product-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/dot-product-sticky.svg" alt="Sticky Note: Dot Product" width="30%">
</a>


Without normalization, dot product varies with magnitude. Two identical meanings expressed at different lengths (e.g., "hello" vs "hello, how are you today sir") would have different dot products but similar cosine similarity.

### Euclidean Distance

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/euclidean-distance-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/euclidean-distance-handwritten.svg" alt="Handwritten: Euclidean Distance" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/euclidean-distance-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/euclidean-distance-diagram.svg" alt="Diagram: Euclidean Distance" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/euclidean-distance-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/euclidean-distance-sticky.svg" alt="Sticky Note: Euclidean Distance" width="30%">
</a>


```
euclidean(A, B) = sqrt(sum((A_i - B_i)^2))
```

Range: 0 to inf. For normalized vectors, this is monotonic with cosine.

### Why cosine wins for text

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/why-cosine-wins-for-text-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/why-cosine-wins-for-text-handwritten.svg" alt="Handwritten: Why cosine wins for text" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/why-cosine-wins-for-text-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/why-cosine-wins-for-text-diagram.svg" alt="Diagram: Why cosine wins for text" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/why-cosine-wins-for-text-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/why-cosine-wins-for-text-sticky.svg" alt="Sticky Note: Why cosine wins for text" width="30%">
</a>


Text embedding models are trained to normalize embeddings. Cosine similarity is equivalent to dot product on normalized vectors. It's the default because it's unaffected by text length — a short query semantically similar to a long document still scores high.

### Exercise

Take 2 similar and 2 dissimilar sentence pairs. Compute all 3 metrics (cosine, dot product, Euclidean). Note that ranking is identical for all 3 on normalized vectors — confirm this empirically.

---

## 2.8 ANN Indexes: HNSW

**Exact search:** Compare query vector against every stored vector. Correct, but O(N) — takes 1 second for 1M vectors.

**HNSW (Hierarchical Navigable Small World):** Builds a multi-layer graph. Search starts at the top layer (fewest nodes), navigates neighbors, descends to denser layers. O(log N) — takes ~5ms for 1M vectors.

### The tradeoff

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/the-tradeoff-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/the-tradeoff-handwritten.svg" alt="Handwritten: The tradeoff" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/the-tradeoff-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/the-tradeoff-diagram.svg" alt="Diagram: The tradeoff" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/the-tradeoff-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/the-tradeoff-sticky.svg" alt="Sticky Note: The tradeoff" width="30%">
</a>


| Property | Exact (Flat) | HNSW |
|----------|-------------|------|
| Search speed | O(N) | O(log N) |
| Recall | 100% | 95-99.9% (configurable) |
| Index build time | None | Slow (graph construction) |
| Memory | Vector + ID | Vector + ID + graph edges (2-3x) |
| Dynamic inserts | Trivial | Requires rebuilding (or incremental HNSW) |

### ChromaDB default

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/chromadb-default-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/chromadb-default-handwritten.svg" alt="Handwritten: ChromaDB default" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/chromadb-default-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/chromadb-default-diagram.svg" alt="Diagram: ChromaDB default" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/chromadb-default-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/chromadb-default-sticky.svg" alt="Sticky Note: ChromaDB default" width="30%">
</a>


ChromaDB uses HNSW by default. `ef_search` and `ef_construction` parameters tune the speed/recall tradeoff.

```python
import chromadb

client = chromadb.PersistentClient(path="./chroma_data")
collection = client.create_collection(
    name="my_docs",
    metadata={"hnsw:space": "cosine", "hnsw:ef_construction": 200, "hnsw:ef_search": 50},
)
```

### Exercise

Insert 1000 vectors. Search with `ef_search=10`, `ef_search=50`, `ef_search=200`. Measure recall (compared to exact) and latency for each. This is the data you cite when someone asks "why HNSW?"

---

## 2.9 RAG Architecture End-to-End

```
                    INGESTION PIPELINE
                    +--------------+
                    ¦   Document   ¦
                    ¦   (PDF/TXT)  ¦
                    +--------------+
                           ?
                    +--------------+
                    ¦   Chunking   ¦   500-800 tokens, 50-100 overlap
                    +--------------+
                           ?
                    +--------------+
                    ¦   Embedding  ¦   text-embedding-3-small ? 1536-dim vector
                    +--------------+
                           ?
                    +--------------+
                    ¦  Vector DB   ¦   ChromaDB stores vector + text + metadata
                    ¦  (ChromaDB)  ¦
                    +--------------+

                    QUERY PIPELINE
                    +--------------+
                    ¦   User query  ¦   "What is the membership fee?"
                    +--------------+
                           ?
                    +--------------+
                    ¦   Embedding  ¦   Same model as ingestion
                    +--------------+
                           ?
                    +--------------+
                    ¦  Similarity  ¦   Cosine search ? top_k chunks
                    ¦   Search     ¦
                    +--------------+
                           ?
                    +--------------+
                    ¦ Build context ¦   Retrieved chunks concatenated
                    +--------------+
                           ?
                    +--------------+
                    ¦   LLM call   ¦   Prompt + context + question ? answer
                    +--------------+
                           ?
                    +--------------+
                    ¦  Return to   ¦   Answer + cited chunks + scores
                    ¦   User       ¦
                    +--------------+
```

### Exercise

Draw this pipeline from memory without looking at the diagram. Every arrow needs a label. Every box needs a data type (vector, string, list). This is the single most important diagram in modern AI engineering — it's asked in almost every interview.

---

## 2.10 Chunking Strategies

### Fixed-size (naive)

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/fixed-size-naive-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/fixed-size-naive-handwritten.svg" alt="Handwritten: Fixed-size (naive)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/fixed-size-naive-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/fixed-size-naive-diagram.svg" alt="Diagram: Fixed-size (naive)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/fixed-size-naive-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/fixed-size-naive-sticky.svg" alt="Sticky Note: Fixed-size (naive)" width="30%">
</a>


```python
def fixed_chunks(text: str, chunk_size: int = 500, overlap: int = 50) -> list[str]:
    chunks = []
    start = 0
    while start < len(text):
        end = start + chunk_size
        chunks.append(text[start:end])
        start = end - overlap
    return chunks
```

**Failure mode:** Cuts mid-sentence, mid-table, mid-code-block. The chunk might say "The price is ?" and the next chunk continues "12,000 per year" — retrieval gets the first chunk and misses the price.

### Recursive character splitting (better)

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/recursive-character-splitting-better-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/recursive-character-splitting-better-handwritten.svg" alt="Handwritten: Recursive character splitting (better)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/recursive-character-splitting-better-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/recursive-character-splitting-better-diagram.svg" alt="Diagram: Recursive character splitting (better)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/recursive-character-splitting-better-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/recursive-character-splitting-better-sticky.svg" alt="Sticky Note: Recursive character splitting (better)" width="30%">
</a>


```python
# LangChain's recursive splitter — split on paragraphs first, then sentences, then characters
from langchain_text_splitters import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50,
    separators=["\n\n", "\n", ".", "!", "?", ",", " ", ""],
)
chunks = splitter.split_text(long_text)
```

### Semantic chunking (best for RAG)

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/semantic-chunking-best-for-rag-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/semantic-chunking-best-for-rag-handwritten.svg" alt="Handwritten: Semantic chunking (best for RAG)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/semantic-chunking-best-for-rag-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/semantic-chunking-best-for-rag-diagram.svg" alt="Diagram: Semantic chunking (best for RAG)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/semantic-chunking-best-for-rag-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/semantic-chunking-best-for-rag-sticky.svg" alt="Sticky Note: Semantic chunking (best for RAG)" width="30%">
</a>


```python
def semantic_chunks(sentences: list[str], threshold: float = 0.3) -> list[list[str]]:
    """Group sentences into chunks where adjacent sentences are semantically similar."""
    chunks = [[sentences[0]]]
    for i in range(1, len(sentences)):
        sim = cosine_similarity(
            embed(sentences[i-1]),
            embed(sentences[i]),
        )
        if sim >= threshold:
            chunks[-1].append(sentences[i])
        else:
            chunks.append([sentences[i]])
    return [" ".join(c) for c in chunks]
```

### Exercise

Take a real PDF (a Terms of Service document, or the Indian Constitution preamble). Chunk it 3 ways: fixed-size no overlap, fixed-size with overlap, recursive. Manually inspect where each one cuts badly. Note the worst failure for each method.

---

## 2.11 Retrieval Ranking + Re-ranking

### First-pass retrieval

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/first-pass-retrieval-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/first-pass-retrieval-handwritten.svg" alt="Handwritten: First-pass retrieval" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/first-pass-retrieval-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/first-pass-retrieval-diagram.svg" alt="Diagram: First-pass retrieval" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/first-pass-retrieval-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/first-pass-retrieval-sticky.svg" alt="Sticky Note: First-pass retrieval" width="30%">
</a>


Top-k from vector search. Fast but imperfect — similar-looking chunks may be semantically wrong.

### Second-pass re-ranking

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/second-pass-re-ranking-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/second-pass-re-ranking-handwritten.svg" alt="Handwritten: Second-pass re-ranking" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/second-pass-re-ranking-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/second-pass-re-ranking-diagram.svg" alt="Diagram: Second-pass re-ranking" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/second-pass-re-ranking-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/second-pass-re-ranking-sticky.svg" alt="Sticky Note: Second-pass re-ranking" width="30%">
</a>


A cross-encoder model (e.g., Cohere Rerank, BGE-reranker) scores each retrieved chunk against the user's query explicitly. Slower (O(k) per query) but significantly more accurate.

```python
# Without re-ranker: retrieve top-5 from vector search
# Without re-ranker: retrieve top-20 from vector search, then re-rank to top-5

import cohere
co = cohere.Client(api_key="...")
results = co.rerank(
    model="rerank-english-v3.0",
    query="What is the membership fee?",
    documents=top_20_chunks,  # 20 from first-pass
    top_n=5,
)
```

**Why this works:** Vector search compares dense embeddings (semantic). Re-ranking uses cross-attention between query and document — more accurate but too expensive to do on 1M documents.

### Exercise

Run 5 queries through: vector-only top-5 ? LLM answer. Then vector top-20 ? re-rank to top-5 ? LLM answer. Compare answer quality. If you don't have a re-ranker API, just note which chunks the re-ranker would promote/demote based on manual inspection.

---

## 2.12 Vector DB Comparison

### ChromaDB

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/chromadb-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/chromadb-handwritten.svg" alt="Handwritten: ChromaDB" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/chromadb-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/chromadb-diagram.svg" alt="Diagram: ChromaDB" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/chromadb-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/chromadb-sticky.svg" alt="Sticky Note: ChromaDB" width="30%">
</a>


| Pro | Con |
|-----|-----|
| Simplest setup (`pip install chromadb`) | No built-in hybrid search (keyword + vector) |
| Persistent by default | Scales to ~10M vectors before performance degrades |
| HNSW index built-in | No RBAC, no multi-tenancy built-in |
| No external infra needed (embedding DB) | |

**Best for:** Personal projects, demos, small-to-medium RAG (your use case exactly).

### Qdrant

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/qdrant-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/qdrant-handwritten.svg" alt="Handwritten: Qdrant" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/qdrant-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/qdrant-diagram.svg" alt="Diagram: Qdrant" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/qdrant-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/qdrant-sticky.svg" alt="Sticky Note: Qdrant" width="30%">
</a>


| Pro | Con |
|-----|-----|
| Built-in hybrid search (BM25 + vector) | Requires running a server |
| Payload filtering, geo search | More configuration than ChromaDB |
| Faster at scale (1M+ vectors) | |

**Best for:** Production RAG with filtering requirements.

### pgvector

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/pgvector-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/pgvector-handwritten.svg" alt="Handwritten: pgvector" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/pgvector-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/pgvector-diagram.svg" alt="Diagram: pgvector" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/pgvector-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/pgvector-sticky.svg" alt="Sticky Note: pgvector" width="30%">
</a>


| Pro | Con |
|-----|-----|
| No separate infra (runs in Postgres) | Indexing is slower than dedicated DBs |
| Transactional + vector in one DB | Only exact search or IVF (no HNSW built-in) |
| SQL interface for hybrid queries | |

**Best for:** When you already run Postgres and have moderate vector needs.

### Your choice

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/your-choice-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/your-choice-handwritten.svg" alt="Handwritten: Your choice" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/your-choice-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/your-choice-diagram.svg" alt="Diagram: Your choice" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/your-choice-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/your-choice-sticky.svg" alt="Sticky Note: Your choice" width="30%">
</a>


For the RAG demo: ChromaDB is correct. You can spin it up with `pip install chromadb` and a `PersistentClient`. Later, if the demo takes off, Qdrant or pgvector are natural upgrades.

### Exercise

Read all three "When to use" pages. Write a 1-paragraph honest comparison. This paragraph goes in your RAG demo README and is a direct interview talking point.

---

## 2.13 Hallucination in RAG

### RAG-specific hallucination causes

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/rag-specific-hallucination-causes-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/rag-specific-hallucination-causes-handwritten.svg" alt="Handwritten: RAG-specific hallucination causes" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/rag-specific-hallucination-causes-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/rag-specific-hallucination-causes-diagram.svg" alt="Diagram: RAG-specific hallucination causes" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/rag-specific-hallucination-causes-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/rag-specific-hallucination-causes-sticky.svg" alt="Sticky Note: RAG-specific hallucination causes" width="30%">
</a>


1. **Stale chunks:** Retrieved chunks are outdated. The user asks "What's the price?" and the chunk says "?10,000" but the current price is "?15,000."

2. **Irrelevant-but-similar chunks:** Vector search returns chunks that *look* semantically close but don't actually answer the question. The LLM includes them in context and fabricates an answer rather than saying "I don't know."

3. **Context overflow:** Retrieved chunks exceed context window. The LLM ignores relevant chunks at the end of the context.

### Mitigations

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/mitigations-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/mitigations-handwritten.svg" alt="Handwritten: Mitigations" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/mitigations-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/mitigations-diagram.svg" alt="Diagram: Mitigations" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/mitigations-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/mitigations-sticky.svg" alt="Sticky Note: Mitigations" width="30%">
</a>


```python
# Mitigation 1: Add a "no answer" refusal to the system prompt
SYSTEM_PROMPT = """You are a helpful assistant. Use the provided context to answer.
If the context does not contain the answer, say "I don't have enough information to answer this question."
Do not make up information."""

# Mitigation 2: Show similarity scores in the UI so users can judge reliability
# Mitigation 3: Use a re-ranker to filter out low-confidence chunks
# Mitigation 4: Set a minimum similarity threshold (don't retrieve chunks below 0.7)
```

### Exercise

Take a query that retrieves chunks but none of them answer the question. Run it with and without the "I don't know" system prompt instruction. Compare the outputs. Document what happens when you don't include the refusal instruction.

---

## Phase 2 Project: Public RAG Memory API

### Architecture

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/architecture-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/architecture-handwritten.svg" alt="Handwritten: Architecture" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/architecture-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/architecture-diagram.svg" alt="Diagram: Architecture" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/architecture-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/architecture-sticky.svg" alt="Sticky Note: Architecture" width="30%">
</a>


```
Client --? FastAPI --? ChromaDB
               ¦
               +--? Redis (rate limiting)
               ¦
               +--? OpenAI (embeddings + generation)
```

### Endpoint spec

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/endpoint-spec-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/endpoint-spec-handwritten.svg" alt="Handwritten: Endpoint spec" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/endpoint-spec-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/endpoint-spec-diagram.svg" alt="Diagram: Endpoint spec" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/endpoint-spec-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/endpoint-spec-sticky.svg" alt="Sticky Note: Endpoint spec" width="30%">
</a>


```
POST   /v1/collections                    Create a named collection
GET    /v1/collections                    List collections
DELETE /v1/collections/{id}               Delete a collection

POST   /v1/collections/{id}/documents     Upload doc ? chunk ? embed ? store
GET    /v1/collections/{id}/documents     List documents
DELETE /v1/collections/{id}/documents/{doc_id}

POST   /v1/collections/{id}/query         RAG query: answer + cited chunks + scores

POST   /v1/auth/token                     Issue scoped API key
GET    /healthz                           Liveness probe
```

### Week-by-week build

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/week-by-week-build-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/week-by-week-build-handwritten.svg" alt="Handwritten: Week-by-week build" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/week-by-week-build-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/week-by-week-build-diagram.svg" alt="Diagram: Week-by-week build" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/week-by-week-build-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/week-by-week-build-sticky.svg" alt="Sticky Note: Week-by-week build" width="30%">
</a>


**Week 1 — Core API**
- Days 1-2: Pydantic schemas for all endpoints
- Day 3: Document ingestion (chunk ? embed ? store)
- Day 4: Query endpoint (embed ? search ? augment ? generate)
- Day 5: Multi-tenancy + API key auth

**Week 2 — Hardening + deployment**
- Day 1: Rate limiting with `slowapi`
- Day 2: Docker + docker-compose
- Day 3: Deploy to Hetzner behind Cloudflare Tunnel
- Day 4: README with architecture diagram + curl examples
- Day 5: 2-minute demo video

### README documentation requirements

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/readme-documentation-requirements-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/readme-documentation-requirements-handwritten.svg" alt="Handwritten: README documentation requirements" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/readme-documentation-requirements-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/readme-documentation-requirements-diagram.svg" alt="Diagram: README documentation requirements" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/readme-documentation-requirements-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/readme-documentation-requirements-sticky.svg" alt="Sticky Note: README documentation requirements" width="30%">
</a>


- Architecture diagram (the one from section 2.9, rendered)
- Chunking strategy rationale (why 500-800 tokens, why 50 overlap)
- Embedding model choice (why `text-embedding-3-small` vs large)
- Vector DB choice (your honest comparison from section 2.12)
- Rate limiting and cost-control approach
- `curl` example for every endpoint

### Server skeleton

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/server-skeleton-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/server-skeleton-handwritten.svg" alt="Handwritten: Server skeleton" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/server-skeleton-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/server-skeleton-diagram.svg" alt="Diagram: Server skeleton" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/server-skeleton-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/server-skeleton-sticky.svg" alt="Sticky Note: Server skeleton" width="30%">
</a>


```python
# app/main.py
from fastapi import FastAPI
from app.config import settings
from app.routers import collections, documents, query, auth

app = FastAPI(title="RAG Demo API", version="1.0.0")

app.include_router(auth.router, prefix="/v1/auth")
app.include_router(collections.router, prefix="/v1/collections")
app.include_router(documents.router, prefix="/v1/collections/{id}/documents")
app.include_router(query.router, prefix="/v1/collections")

@app.get("/healthz")
async def healthz():
    return {"status": "ok"}
```

---

## 2.14 Fine-Tuning: LoRA, QLoRA, When to Use

Fine-tuning adapts a pretrained model to your specific task. RAG and fine-tuning are complementary, not replacements.

### RAG vs Fine-Tuning

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/rag-vs-fine-tuning-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/rag-vs-fine-tuning-handwritten.svg" alt="Handwritten: RAG vs Fine-Tuning" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/rag-vs-fine-tuning-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/rag-vs-fine-tuning-diagram.svg" alt="Diagram: RAG vs Fine-Tuning" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/rag-vs-fine-tuning-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/rag-vs-fine-tuning-sticky.svg" alt="Sticky Note: RAG vs Fine-Tuning" width="30%">
</a>


| RAG | Fine-Tuning |
|-----|-------------|
| Adds knowledge at query time | Bakes knowledge into weights |
| Cheaper per query (no training cost) | Expensive upfront (training cost) |
| Easy to update (swap documents) | Requires retraining to update |
| Good for: factual Q&A, customer docs | Good for: style, tone, output format |
| No model weights change | Model weights change |

### LoRA (Low-Rank Adaptation)

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/lora-low-rank-adaptation-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/lora-low-rank-adaptation-handwritten.svg" alt="Handwritten: LoRA (Low-Rank Adaptation)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/lora-low-rank-adaptation-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/lora-low-rank-adaptation-diagram.svg" alt="Diagram: LoRA (Low-Rank Adaptation)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/lora-low-rank-adaptation-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/lora-low-rank-adaptation-sticky.svg" alt="Sticky Note: LoRA (Low-Rank Adaptation)" width="30%">
</a>


Instead of updating all weights, LoRA inserts small trainable matrices:

```
Full fine-tune:  ?W with shape (d, k) ? 7B parameters updated
LoRA:           BA with shapes (d, r) × (r, k) ? 0.1% parameters updated
```

```python
from transformers import AutoModelForCausalLM, LoraConfig, TrainingArguments
from peft import get_peft_model

model = AutoModelForCausalLM.from_pretrained("mistralai/Mistral-7B-v0.1")

lora_config = LoraConfig(
    r=8,              # rank — higher = more capacity, more memory
    lora_alpha=32,    # scaling factor
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM",
)

model = get_peft_model(model, lora_config)
print(f"Trainable params: {model.num_parameters(only_trainable=True):,}")
# ~4.2M params instead of 7B
```

### QLoRA (Quantized LoRA)

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/qlora-quantized-lora-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/qlora-quantized-lora-handwritten.svg" alt="Handwritten: QLoRA (Quantized LoRA)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/qlora-quantized-lora-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/qlora-quantized-lora-diagram.svg" alt="Diagram: QLoRA (Quantized LoRA)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/qlora-quantized-lora-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/qlora-quantized-lora-sticky.svg" alt="Sticky Note: QLoRA (Quantized LoRA)" width="30%">
</a>


QLoRA quantizes the base model to 4-bit, then applies LoRA on top. Fits a 7B model in ~8GB VRAM.

```python
from transformers import BitsAndBytesConfig

quant_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype="float16",
)

model = AutoModelForCausalLM.from_pretrained(
    "mistralai/Mistral-7B-v0.1",
    quantization_config=quant_config,
)
# Then apply LoRA on top
```

### When to fine-tune (and when not to)

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/when-to-fine-tune-and-when-not-to-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/when-to-fine-tune-and-when-not-to-handwritten.svg" alt="Handwritten: When to fine-tune (and when not to)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/when-to-fine-tune-and-when-not-to-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/when-to-fine-tune-and-when-not-to-diagram.svg" alt="Diagram: When to fine-tune (and when not to)" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/when-to-fine-tune-and-when-not-to-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/when-to-fine-tune-and-when-not-to-sticky.svg" alt="Sticky Note: When to fine-tune (and when not to)" width="30%">
</a>


**Fine-tune for:**
- Output format (always respond in JSON)
- Tone/style (technical docs, customer support voice)
- Domain vocabulary (medical, legal, financial terms)
- Reducing latency by making smaller models as good as larger ones for your task

**Don't fine-tune for:**
- Adding factual knowledge (use RAG)
- One-off tasks (use prompting)
- Rapidly changing information (RAG is cheaper to update)

### Exercise

Your RAG demo doesn't need fine-tuning — RAG is the right solution for your use case. But as an exercise: download a small model (Mistral-7B), apply LoRA config, and print trainable parameter count. Then argue in writing why RAG beats fine-tuning for a document Q&A system.

---

## 2.15 Model Evaluation + Comparison

When you have multiple models (GPT-4, Claude, local LLM), you need a systematic way to compare them.

### Building an eval harness

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/building-an-eval-harness-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/building-an-eval-harness-handwritten.svg" alt="Handwritten: Building an eval harness" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/building-an-eval-harness-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/building-an-eval-harness-diagram.svg" alt="Diagram: Building an eval harness" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/building-an-eval-harness-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/building-an-eval-harness-sticky.svg" alt="Sticky Note: Building an eval harness" width="30%">
</a>


```python
import json
from openai import OpenAI
from anthropic import Anthropic

openai_client = OpenAI()
anthropic_client = Anthropic()

test_cases = [
    {"question": "What is RAG?", "expected_topics": ["retrieval", "generation", "knowledge base"]},
    {"question": "Explain cosine similarity", "expected_topics": ["vector", "angle", "0 to 1"]},
]

def evaluate_model(model: str, provider: str, test_cases: list) -> dict:
    results = []
    for tc in test_cases:
        if provider == "openai":
            response = openai_client.chat.completions.create(
                model=model,
                messages=[{"role": "user", "content": tc["question"]}],
            )
            answer = response.choices[0].message.content
        elif provider == "anthropic":
            response = anthropic_client.messages.create(
                model=model,
                max_tokens=500,
                messages=[{"role": "user", "content": tc["question"]}],
            )
            answer = response.content[0].text

        score = sum(1 for t in tc["expected_topics"] if t.lower() in answer.lower())
        results.append({
            "question": tc["question"],
            "score": score / len(tc["expected_topics"]),
            "answer_snippet": answer[:200],
        })

    avg_score = sum(r["score"] for r in results) / len(results)
    return {"model": model, "avg_score": avg_score, "results": results}

# Run comparison
gpt_score = evaluate_model("gpt-4", "openai", test_cases)
claude_score = evaluate_model("claude-sonnet-4-20250514", "anthropic", test_cases)

print(f"GPT-4: {gpt_score['avg_score']:.2%}")
print(f"Claude: {claude_score['avg_score']:.2%}")
```

### What to measure

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/what-to-measure-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/what-to-measure-handwritten.svg" alt="Handwritten: What to measure" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/what-to-measure-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/what-to-measure-diagram.svg" alt="Diagram: What to measure" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/what-to-measure-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/what-to-measure-sticky.svg" alt="Sticky Note: What to measure" width="30%">
</a>


| Metric | What it captures | How to measure |
|--------|-----------------|----------------|
| Factual accuracy | Does the answer contain expected facts? | Keyword overlap, LLM-as-judge |
| Hallucination rate | Does the answer fabricate? | Human review, external fact check |
| Latency (TTFT) | How fast does it start responding? | `time` the first token |
| Cost per query | $ per 1K queries | Token count × pricing |
| Instruction following | Does it obey format constraints? | Regex/JSON parse success rate |

### Exercise

Build an eval harness with 5 test cases. Run the same prompt through GPT-4 and Claude. Score each on a 1-5 rubric. Write a paragraph comparing them for your RAG use case. Which wins and why?

---

## 2.16 Guardrails / Content Moderation

Agents that talk to users need guardrails — both input (what users can ask) and output (what the model can say).

### Input guardrails: detect harmful queries

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/input-guardrails-detect-harmful-queries-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/input-guardrails-detect-harmful-queries-handwritten.svg" alt="Handwritten: Input guardrails: detect harmful queries" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/input-guardrails-detect-harmful-queries-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/input-guardrails-detect-harmful-queries-diagram.svg" alt="Diagram: Input guardrails: detect harmful queries" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/input-guardrails-detect-harmful-queries-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/input-guardrails-detect-harmful-queries-sticky.svg" alt="Sticky Note: Input guardrails: detect harmful queries" width="30%">
</a>


```python
import re

HARMLESS_THRESHOLD = 0.7

# Simple keyword-based pre-filter
BLOCKED_PATTERNS = [
    r"ignore.*instructions",
    r"forget.*previous",
    r"system.*prompt.*reveal",
    r"generate.*harmful.*content",
]

def input_guardrail(user_input: str) -> tuple[bool, str]:
    """Returns (blocked, reason)"""
    for pattern in BLOCKED_PATTERNS:
        if re.search(pattern, user_input.lower()):
            return True, "Prompt injection attempt detected"
    return False, ""
```

### Output guardrails: validate model responses

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/output-guardrails-validate-model-responses-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/output-guardrails-validate-model-responses-handwritten.svg" alt="Handwritten: Output guardrails: validate model responses" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/output-guardrails-validate-model-responses-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/output-guardrails-validate-model-responses-diagram.svg" alt="Diagram: Output guardrails: validate model responses" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/output-guardrails-validate-model-responses-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/output-guardrails-validate-model-responses-sticky.svg" alt="Sticky Note: Output guardrails: validate model responses" width="30%">
</a>


```python
# Block personal information in responses
PII_PATTERNS = [
    r"\b\d{3}-\d{2}-\d{4}\b",           # SSN
    r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b",  # Email
    r"\b(?:\+?1[-.]?)?\(?[2-9]\d{2}\)?[-.]?\d{3}[-.]?\d{4}\b",  # Phone
]

def output_guardrail(response: str) -> tuple[bool, str]:
    for pattern in PII_PATTERNS:
        if re.search(pattern, response):
            return True, "Response contains PII"
    return False, ""
```

### Integrating guardrails into your RAG pipeline

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/integrating-guardrails-into-your-rag-pipeline-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/integrating-guardrails-into-your-rag-pipeline-handwritten.svg" alt="Handwritten: Integrating guardrails into your RAG pipeline" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/integrating-guardrails-into-your-rag-pipeline-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/integrating-guardrails-into-your-rag-pipeline-diagram.svg" alt="Diagram: Integrating guardrails into your RAG pipeline" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/integrating-guardrails-into-your-rag-pipeline-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/integrating-guardrails-into-your-rag-pipeline-sticky.svg" alt="Sticky Note: Integrating guardrails into your RAG pipeline" width="30%">
</a>


```python
@app.post("/v1/query")
async def query_with_guardrails(request: QueryRequest):
    # Input guardrail
    blocked, reason = input_guardrail(request.query)
    if blocked:
        raise HTTPException(status_code=400, detail=reason)

    # Normal RAG pipeline
    result = rag_pipeline(request.query)

    # Output guardrail
    blocked, reason = output_guardrail(result["answer"])
    if blocked:
        result["answer"] = "I can't provide that information."

    return result
```

### Using dedicated guardrail libraries

<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/using-dedicated-guardrail-libraries-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/using-dedicated-guardrail-libraries-handwritten.svg" alt="Handwritten: Using dedicated guardrail libraries" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/using-dedicated-guardrail-libraries-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/using-dedicated-guardrail-libraries-diagram.svg" alt="Diagram: Using dedicated guardrail libraries" width="30%">
</a>
<a href="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/using-dedicated-guardrail-libraries-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/ai-agent-engineer/03-phase2-llm-rag-theory/using-dedicated-guardrail-libraries-sticky.svg" alt="Sticky Note: Using dedicated guardrail libraries" width="30%">
</a>


```bash
pip install guardrails-ai
```

```python
from guardrails import Guard
from guardrails.validators import TwoWords, LowerCase

guard = Guard().use_many(
    TwoWords(),    # Response must be exactly 2 words
    LowerCase(),   # Response must be lowercase
)

response = guard.validate("hello world")
print(response.validation_passed)  # True

response = guard.validate("Hello World!")
print(response.validation_passed)  # False
```

### Exercise

Add input + output guardrails to your RAG demo query endpoint. Test with a prompt injection attempt. Test that the model doesn't return email addresses. Verify the guardrails block the right things and pass normal queries.

---


interface Tool { name: string; description: string; execute: (args:Record&lt;string,unknown&gt;) => Promise&lt;string&gt; }
interface Message { role: "system"|"user"|"assistant"; content: string }
interface AgentConfig { model: string; maxTokens: number; temperature: number }
class Agent {
  private messages: Message[] = []; private tools: Map&lt;string,Tool&gt; = new Map()
  constructor(private config: AgentConfig) {}
  addTool(t: Tool): void { this.tools.set(t.name, t) }
  async think(input: string): Promise&lt;string&gt; {
    this.messages.push({role:"user",content:input})
    const response = await this.llmCall(this.messages)
    const parsed = this.parseResponse(response)
    if(parsed.toolCall) { const result = await this.tools.get(parsed.toolCall.name)!.execute(parsed.toolCall.args)
      this.messages.push({role:"assistant",content:`Tool ${parsed.toolCall.name}: ${result}`}); return this.think("") }
    this.messages.push({role:"assistant",content:parsed.text})
    return parsed.text
  }
  private parseResponse(r: string): {toolCall?:{name:string,args:Record&lt;string,unknown&gt;};text:string} {
    const match = r.match(/<tool:(\w+)>([\s\S]*?)&lt;\/tool&gt;/)
    if(match) try { return {toolCall:{name:match[1],args:JSON.parse(match[2])},text:""} } catch { return {text:r} }
    return {text:r}
  }
  private async llmCall(msgs: Message[]): Promise&lt;string&gt; {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method:"POST", headers:{"Content-Type":"application/json","Authorization":`Bearer ${process.env.OPENAI_API_KEY}`},
      body:JSON.stringify({model:this.config.model,messages:msgs,max_tokens:this.config.maxTokens,temperature:this.config.temperature})
    })
    const data = await res.json()
    return data.choices[0].message.content
  }
}
class Planner {
  plan(goal: string): string[] { return goal.split(". ").map(s => s.trim()).filter(Boolean) }
}
export { Agent, AgentConfig, Tool, Message, Planner }
## Phase 2 Done Checkpoint

Before moving to Phase 3, you should be able to:

- [ ] Estimate token count of any paragraph within 20% without a tool
- [ ] Draw the full RAG pipeline from memory (ingestion + query)
- [ ] Write a few-shot prompt that measurably improves output over zero-shot
- [ ] Write a tool schema in both OpenAI and Anthropic formats by hand
- [ ] Explain why cosine similarity wins for text embeddings in one sentence
- [ ] Explain a real failure mode of fixed-size chunking
- [ ] Write a 1-paragraph comparison of ChromaDB vs Qdrant vs pgvector
- [ ] Defend every architectural choice in your RAG demo README
- [ ] Public RAG demo API deployed and returning cited answers
- [ ] Can explain when fine-tuning beats RAG and vice versa
- [ ] Run an eval harness comparing 2 models on the same test set
- [ ] Input + output guardrails added and verified on your RAG endpoint

**Estimated time to checkpoint:** 28-32 hours over 2 weeks.

[Next: Phase 3 — AI Agents: LangGraph, CrewAI, MCP](04-phase3-agents-langgraph-mcp.md)
