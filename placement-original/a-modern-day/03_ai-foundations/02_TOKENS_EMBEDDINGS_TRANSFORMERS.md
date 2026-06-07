# 🔢 STAGE 3B — Tokens, Embeddings & Transformers Deep Dive

> **Level:** Intermediate | **Duration:** 1 Week

---

## 1. Tokenization In Practice

### BPE (Byte Pair Encoding) — Used by GPT
```python
import tiktoken

enc = tiktoken.encoding_for_model("gpt-4")

text = "Laravel is a great PHP framework for building SaaS"
tokens = enc.encode(text)
print(f"Text: {text}")
print(f"Tokens: {tokens}")
print(f"Count: {len(tokens)}")

# Decode back
for t in tokens:
    print(f"  {t} → '{enc.decode([t])}'")
```

### Cost Estimation
```python
def estimate_cost(text, model="gpt-4"):
    enc = tiktoken.encoding_for_model(model)
    tokens = len(enc.encode(text))
    
    prices = {
        "gpt-4": {"input": 30, "output": 60},  # per 1M tokens
        "gpt-4o-mini": {"input": 0.15, "output": 0.6},
    }
    
    input_cost = (tokens / 1_000_000) * prices[model]["input"]
    return {"tokens": tokens, "estimated_cost_usd": round(input_cost, 6)}
```

---

## 2. Embeddings In Depth

### Creating & Storing Embeddings
```python
from openai import OpenAI
import numpy as np

client = OpenAI()

def get_embedding(text, model="text-embedding-3-small"):
    response = client.embeddings.create(input=text, model=model)
    return response.data[0].embedding

# Embed multiple documents
documents = [
    "Laravel is a PHP web framework",
    "Docker containers package applications",
    "React builds user interfaces",
    "Redis is an in-memory database",
    "Python is great for AI development",
]

embeddings = [get_embedding(doc) for doc in documents]
```

### Semantic Search Implementation
```python
def search(query, documents, embeddings, top_k=3):
    query_embedding = get_embedding(query)
    
    similarities = []
    for i, doc_emb in enumerate(embeddings):
        sim = np.dot(query_embedding, doc_emb) / (
            np.linalg.norm(query_embedding) * np.linalg.norm(doc_emb)
        )
        similarities.append((i, sim))
    
    similarities.sort(key=lambda x: x[1], reverse=True)
    
    results = []
    for idx, score in similarities[:top_k]:
        results.append({
            "document": documents[idx],
            "score": round(score, 4)
        })
    return results

# Usage
results = search("web development framework", documents, embeddings)
# Returns: Laravel (top match), React (second)
```

---

## 3. Embedding Models Comparison

| Model | Dimensions | Speed | Quality | Cost |
|-------|-----------|-------|---------|------|
| text-embedding-3-small | 1536 | Fast | Good | Cheap |
| text-embedding-3-large | 3072 | Medium | Best | Medium |
| sentence-transformers | 768 | Fast | Good | Free |
| Cohere embed | 1024 | Fast | Good | Cheap |

### HuggingFace (Free, Local)
```python
from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')
embeddings = model.encode(["Hello world", "Hi there"])
similarity = np.dot(embeddings[0], embeddings[1])
```

---

## 4. Transformer Architecture (Visual)

```
Input: "I love programming"

Step 1: Tokenize
["I", "love", "programming"]

Step 2: Embed
[[0.1, 0.2, ...], [0.5, 0.3, ...], [0.8, 0.1, ...]]

Step 3: Add Position Info
(So model knows word ORDER matters)

Step 4: Self-Attention
Each word "looks at" every other word
"I" pays attention to "love" and "programming"
"love" especially attends to "I" (subject) and "programming" (object)

Step 5: Feed Forward
Process through neural network layers

Step 6: Output
Predict next token or classify
```

### Why Attention Is Revolutionary
```
Before (RNN): Processed words one at a time → SLOW, forgets long sequences
After (Transformer): Processes ALL words simultaneously → FAST, handles long text
```

---

## 🎯 Practice Tasks
- [ ] Tokenize text and count tokens
- [ ] Build semantic search with embeddings
- [ ] Compare embedding models (OpenAI vs HuggingFace)
- [ ] Estimate API costs for your use case
- [ ] Visualize embeddings with dimensionality reduction

---

*Next: [RAG Fundamentals →](./03_RAG_FUNDAMENTALS.md)*
