# 🧠 STAGE 3A — AI Core Concepts

> **Level:** Beginner → Intermediate | **Duration:** 1–2 Weeks

---

## 📋 Topics
1. What Is AI, ML, DL, NLP?
2. How LLMs Work
3. Tokens & Tokenization
4. Embeddings — The Heart of AI
5. Vector Similarity
6. Transformers Architecture
7. Context Windows & Limitations
8. Hallucination & Grounding
9. Fine-Tuning vs Prompting
10. Key AI Terminology

---

## 1. AI, ML, DL, NLP — What's the Difference?

```
AI (Artificial Intelligence)
├── ML (Machine Learning)        → Learns from data
│   ├── Supervised               → Labeled data
│   ├── Unsupervised             → Unlabeled data
│   └── Reinforcement            → Trial & error
│
├── DL (Deep Learning)           → Neural networks
│   ├── CNNs                     → Images
│   ├── RNNs                     → Sequences
│   └── Transformers             → Language (GPT, BERT) ← YOU ARE HERE
│
└── NLP (Natural Language)       → Text understanding
    ├── Text Classification
    ├── Named Entity Recognition
    ├── Summarization
    ├── Translation
    └── Question Answering
```

### For You (Full Stack Developer)
You don't need to train models. You need to **use** them effectively:
- Call APIs (OpenAI, HuggingFace)
- Design prompts
- Build RAG systems
- Create AI agents

---

## 2. How LLMs Work (Simplified)

### Large Language Models = Pattern Completion Machines

```
Input:  "The capital of India is"
Output: "New Delhi"

How? It learned from BILLIONS of text documents.
It predicts the NEXT most likely word.
```

### LLM Architecture
```
Text Input → Tokenizer → Embeddings → Transformer Layers → Output Token → Detokenizer → Text
```

### Key Insight
LLMs don't "understand" — they predict. But they're so good at predicting that it feels like understanding.

---

## 3. Tokens & Tokenization

### What Are Tokens?
Tokens are chunks of text. Not exactly words.

```
"Hello world!"      → ["Hello", " world", "!"]         → 3 tokens
"Tokenization"      → ["Token", "ization"]              → 2 tokens
"I love programming" → ["I", " love", " programming"]   → 3 tokens
"你好"               → ["你", "好"]                      → 2 tokens
```

### Why Tokens Matter
```
Model context window = 128,000 tokens (GPT-4)
1 token ≈ 0.75 words (English)
128K tokens ≈ 96,000 words ≈ ~300 pages

Cost = per token (both input + output)
GPT-4: ~$30 per 1M input tokens
```

### Token Counting (Python)
```python
import tiktoken

encoder = tiktoken.encoding_for_model("gpt-4")
tokens = encoder.encode("Hello, how are you?")
print(f"Token count: {len(tokens)}")
# Token count: 6
```

---

## 4. Embeddings — The Heart of AI

### What Are Embeddings?
Embeddings convert text into numbers (vectors) that capture meaning.

```
"king"   → [0.2, 0.8, 0.1, 0.9, ...]   (1536 dimensions)
"queen"  → [0.3, 0.7, 0.2, 0.8, ...]
"apple"  → [0.9, 0.1, 0.8, 0.2, ...]

"king" is CLOSE to "queen" in vector space
"king" is FAR from "apple"
```

### Why Embeddings Matter
They enable:
- **Semantic search** — Find similar meaning, not exact words
- **RAG** — Retrieve relevant context for AI
- **Classification** — Group similar content
- **Recommendations** — Find similar items

### Creating Embeddings
```python
from openai import OpenAI
client = OpenAI()

response = client.embeddings.create(
    input="Laravel is a PHP framework",
    model="text-embedding-3-small"
)

vector = response.data[0].embedding
print(f"Dimensions: {len(vector)}")  # 1536
print(f"First 5 values: {vector[:5]}")
```

---

## 5. Vector Similarity

### Cosine Similarity
Measures how similar two vectors are (0 = different, 1 = identical).

```python
import numpy as np

def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# "king" vs "queen" → ~0.85 (very similar)
# "king" vs "banana" → ~0.15 (very different)
```

### Use Case: Semantic Search
```
User asks: "How to scale a web app?"

Traditional search: Looks for exact words "scale" "web" "app"
Semantic search:    Finds documents about "horizontal scaling",
                    "load balancing", "microservices" etc.
```

---

## 6. Transformers Architecture

### What Is a Transformer?
The neural network architecture behind GPT, BERT, Claude, etc.

```
Key Innovation: ATTENTION mechanism
"The cat sat on the mat because IT was tired"
                                    ↑
                              "IT" refers to "cat"
                    (Attention helps the model understand this)
```

### Types of Transformers

| Type | Models | Best For |
|------|--------|----------|
| **Encoder-only** | BERT, RoBERTa | Classification, NER |
| **Decoder-only** | GPT-4, Claude, Llama | Text generation |
| **Encoder-Decoder** | T5, BART | Translation, summarization |

---

## 7. Context Window

```
Context window = How much text the model can "see" at once

GPT-3.5:    4,096 tokens    (~3,000 words)
GPT-4:      128,000 tokens  (~96,000 words)
Claude 3:   200,000 tokens  (~150,000 words)
Gemini:     1,000,000 tokens (~750,000 words)
```

### Why It Matters
```
Small context window: Can only see a few pages
Large context window: Can see entire books

For RAG: You RETRIEVE relevant chunks and put them IN the context window
```

---

## 8. Hallucination & Grounding

### What Is Hallucination?
When AI generates false information that sounds real.

```
Q: "Who wrote the Python framework Django?"
A: "Django was created by John Smith in 2001" ← HALLUCINATION
   (Actually created by Adrian Holovaty & Simon Willison in 2005)
```

### How to Prevent
1. **RAG** — Give the AI real data to reference
2. **System prompts** — "Only answer based on provided context"
3. **Temperature = 0** — Less creative, more factual
4. **Source citation** — Ask AI to cite its sources

---

## 9. Fine-Tuning vs Prompting

| Approach | When to Use | Cost | Effort |
|----------|-------------|------|--------|
| **Prompting** | General tasks | Low | Low |
| **Few-shot** | Task-specific with examples | Low | Low |
| **RAG** | Company knowledge | Medium | Medium |
| **Fine-tuning** | Specialized behavior | High | High |

### Decision Flow
```
Can prompting solve it? → YES → Use prompting
                         ↓ NO
Need specific knowledge? → YES → Use RAG
                          ↓ NO
Need specialized behavior? → YES → Fine-tune
```

---

## 10. Key Terminology

| Term | Meaning |
|------|---------|
| **Token** | Chunk of text (word piece) |
| **Embedding** | Vector representation of text |
| **Vector** | Array of numbers representing meaning |
| **Context window** | Max input size |
| **Temperature** | Creativity control (0=factual, 1=creative) |
| **Top-p** | Probability threshold for word selection |
| **RAG** | Retrieval Augmented Generation |
| **Fine-tuning** | Training model on custom data |
| **Prompt** | Instructions given to the model |
| **Inference** | Using a trained model to generate output |
| **Hallucination** | Generating false information |
| **Grounding** | Anchoring AI to real data |
| **RLHF** | Reinforcement Learning from Human Feedback |
| **Agent** | AI that can use tools and take actions |
| **Chain** | Sequence of AI operations |
| **Guardrails** | Safety constraints on AI output |

---

## 🎯 Practice Tasks
- [ ] Count tokens for various text inputs
- [ ] Generate embeddings using OpenAI API
- [ ] Calculate cosine similarity between texts
- [ ] Experiment with temperature settings
- [ ] Build a simple semantic search

---

*Next: [Tokens, Embeddings & Transformers Deep Dive →](./02_TOKENS_EMBEDDINGS_TRANSFORMERS.md)*
