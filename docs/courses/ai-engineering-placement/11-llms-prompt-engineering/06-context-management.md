<!-- Clear Language: Keep sentences under 50 words -->
# Context Management

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand token limits, context windows, and their practical implications |
| LO2 | Implement sliding window techniques for long document processing |
| LO3 | Apply conversation summarization for multi-turn chat memory |
| LO4 | Build context compression strategies to reduce token usage |
| LO5 | Design memory systems with short-term and long-term storage |
| LO6 | Manage context across multi-turn conversations efficiently |

## Introduction

Understanding context management is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering context management.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding context management is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how context management works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind context management
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 6.1 | Token Limits | Context windows, token counting, budget allocation |
| 6.2 | Sliding Window | Chunking, overlap, windowing strategies |
| 6.3 | Conversation Summarization | Rolling summaries, compression ratios |
| 6.4 | Context Compression | Pruning, prioritization, selective retention |
| 6.5 | Memory Systems | Short-term, long-term, vector-based retrieval |
| 6.6 | Multi-Turn Management | History pruning, token budgeting, state tracking |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Incoming Context] --> B[Token Counter]
    B --> C{Within Limit?}
    C -->|Yes| D[Full Context]
    C -->|No| E{Strategy}
    E --> F[Sliding Window]
    E --> G[Summarization]
    E --> H[Compression]
    F --> I[Truncated Context]
    G --> I
    H --> I
    I --> J[LLM Processing]
    J --> K[Response]
    K --> A
```text

## 6.1 Token Limits

LLMs have maximum context windows limiting total input + output tokens.

```python
import tiktoken

MODEL_LIMITS = {
    "gpt-4o": 128000, "gpt-4o-mini": 128000,
    "gpt-4-turbo": 128000, "gpt-3.5-turbo": 16385,
    "claude-3-sonnet": 200000, "claude-3-haiku": 200000,
    "gemini-1.5-pro": 2000000,
}

def check_budget(messages, model="gpt-4o"):
    encoding = tiktoken.encoding_for_model(model)
    total = sum(len(encoding.encode(m.get("content", ""))) for m in messages)
    limit = MODEL_LIMITS.get(model, 128000)
    return {"tokens": total, "limit": limit, "remaining": limit - total, "ok": total <= limit}

messages = [{"role": "user", "content": "Hello " * 10000}]
budget = check_budget(messages)
print(f"Tokens: {budget['tokens']}, Limit: {budget['limit']}, OK: {budget['ok']}")
```text

**Token budget allocation**:

```python
def allocate_budget(system_msg, history, new_input, max_output=4096, model="gpt-4o"):
    encoding = tiktoken.encoding_for_model(model)
    limit = MODEL_LIMITS[model]
    system_tokens = len(encoding.encode(system_msg))
    new_tokens = len(encoding.encode(new_input))
    available = limit - max_output - system_tokens - new_tokens
    history_tokens = sum(len(encoding.encode(h["content"])) for h in history)

    if history_tokens <= available:
        return history

    budget_per_turn = available // max(len(history), 1)
    trimmed = []
    for h in history:
        tokens = len(encoding.encode(h["content"]))
        if tokens <= budget_per_turn:
            trimmed.append(h)
        else:
            chars = int(len(h["content"]) * (budget_per_turn / tokens))
            trimmed.append({"role": h["role"], "content": h["content"][:chars]})
    return trimmed

history = [{"role": "user", "content": "Tell me about AI"}] * 50
trimmed = allocate_budget("You are helpful.", history, "What is ML?")
print(f"Original: {len(history)}, Trimmed: {len(trimmed)}")
```text

```mermaid
flowchart TD
    A[Total Context] --> B[System Prompt]
    A --> C[Conversation History]
    A --> D[New Input]
    A --> E[Output Budget]
    C --> F{Size Check}
    F -->|Fits| G[Use All]
    F -->|Too Large| H[Trim History]
    H --> I[Budget Per Turn]
    I --> J[Truncated History]
```text

---

## 6.2 Sliding Window

Sliding window processes long documents via overlapping chunks.

```python
class SlidingWindowProcessor:
    def __init__(self, client, model="gpt-4o-mini", max_tokens=12000):
        self.client = client
        self.model = model
        self.max_tokens = max_tokens

    def chunk(self, text, chunk_size=10000, overlap=2000):
        chunks = []
        start = 0
        while start < len(text):
            end = min(start + chunk_size, len(text))
            chunks.append(text[start:end])
            start += chunk_size - overlap
        return chunks

    def process_chunk(self, chunk, instruction):
        r = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "system", "content": instruction}, {"role": "user", "content": chunk}],
            temperature=0
        )
        return r.choices[0].message.content

    def process(self, text, instruction, merge_instruction="Combine these into a coherent summary."):
        chunks = self.chunk(text)
        results = [self.process_chunk(c, instruction) for c in chunks]
        if len(results) > 1:
            combined = "\n\n".join(f"Part {i+1}: {r}" for i, r in enumerate(results))
            return self.process_chunk(combined, merge_instruction)
        return results[0]
```text

**Overlap strategies**:

```python
class OverlapStrategies:
    @staticmethod
    def sentence_overlap(text, chunk_sentences=10, overlap=3):
        import re
        sents = re.split(r'(?<=[.!?])\s+', text)
        chunks, start = [], 0
        while start < len(sents):
            end = min(start + chunk_sentences, len(sents))
            chunks.append(" ".join(sents[start:end]))
            start += chunk_sentences - overlap
        return chunks

    @staticmethod
    def paragraph_overlap(text, chunk_paras=5, overlap=1):
        paras = [p for p in text.split("\n\n") if p.strip()]
        chunks, start = [], 0
        while start < len(paras):
            end = min(start + chunk_paras, len(paras))
            chunks.append("\n\n".join(paras[start:end]))
            start += chunk_paras - overlap
        return chunks

text = "This is sentence one. " * 100
chunks = OverlapStrategies.sentence_overlap(text, 10, 3)
print(f"Generated {len(chunks)} chunks")
```text

```mermaid
flowchart TD
    A[Long Document] --> B[Chunk 1]
    A --> C[Chunk 2]
    A --> D[Chunk 3]
    B --> E[Process 1]
    C --> F[Process 2]
    D --> G[Process 3]
    E --> H[Merge]
    F --> H
    G --> H
    H --> I[Final Output]
```text

---

## 6.3 Conversation Summarization

Summarization compresses long conversation history into compact representations.

```python
class ConversationSummarizer:
    def __init__(self, client, model="gpt-4o-mini"):
        self.client = client
        self.model = model
        self.summary = None
        self.turn_count = 0

    def add_turn(self, user_msg, assistant_msg):
        self.turn_count += 1

    def summarize(self, recent_turns):
        text = "\n".join(f"{t['role']}: {t['content'][:200]}" for t in recent_turns)
        r = self.client.chat.completions.create(
            model=self.model,
            messages=[
                {"role": "system", "content": "Summarize this conversation concisely. Capture key facts, decisions, and preferences."},
                {"role": "user", "content": text}
            ],
            temperature=0
        )
        self.summary = r.choices[0].message.content
        return self.summary

    def build_context(self, history, max_turns=10):
        if len(history) <= max_turns:
            return history
        summary = self.summarize(history[:-max_turns])
        context = [{"role": "system", "content": f"Previous summary: {summary}"}]
        context.extend(history[-max_turns:])
        return context

summarizer = ConversationSummarizer(client)
history = [{"role": "user", "content": f"Msg {i}"} for i in range(50)]
ctx = summarizer.build_context(history, max_turns=5)
print(f"Context: {len(ctx)} msgs, Has summary: {'summary' in ctx[0]['content']}")
```text

**Compression ratios**:

```python
def measure_ratio(original, summary, model="gpt-4o-mini"):
    enc = tiktoken.encoding_for_model(model)
    orig_tokens = sum(len(enc.encode(m["content"])) for m in original)
    summ_tokens = len(enc.encode(summary))
    return {"original": orig_tokens, "summary": summ_tokens, "ratio": f"{summ_tokens/orig_tokens:.1%}"}

orig = [{"role": "user", "content": "Hello " * 100}] * 10
summary = "User greeted repeatedly."
print(measure_ratio(orig, summary))
```text

```mermaid
flowchart TD
    A[Full Conversation] --> B[Recent N Turns]
    A --> C[Earlier Turns]
    C --> D[Summarize]
    D --> E[Compact Summary]
    E --> F[Context: Summary + Recent]
    B --> F
    F --> G[LLM]
```text

---

## 6.4 Context Compression

Compression reduces token usage by removing redundant or low-value content.

```python
class Compressor:
    def __init__(self, client):
        self.client = client

    def prune_system(self, messages):
        seen, pruned = set(), []
        for m in messages:
            if m["role"] == "system":
                key = m["content"][:100]
                if key in seen:
                    continue
                seen.add(key)
            pruned.append(m)
        return pruned

    def truncate_long(self, messages, max_chars=1000):
        for m in messages:
            if len(m["content"]) > max_chars:
                m["content"] = m["content"][:max_chars] + "... [truncated]"
        return messages

    def remove_redundant(self, messages):
        condensed = []
        for m in messages:
            if condensed:
                sim = len(set(m["content"].split()) & set(condensed[-1]["content"].split()))
                union = len(set(m["content"].split()) | set(condensed[-1]["content"].split()))
                if union > 0 and sim / union > 0.9:
                    continue
            condensed.append(m)
        return condensed

    def compress(self, messages):
        messages = self.prune_system(messages)
        messages = self.remove_redundant(messages)
        messages = self.truncate_long(messages)
        return messages

c = Compressor(client)
msgs = [{"role": "system", "content": "Be helpful."}, {"role": "system", "content": "Be helpful."}] * 3
msgs.append({"role": "user", "content": "What is AI? " * 5000})
result = c.compress(msgs)
print(f"Before: {len(msgs)}, After: {len(result)}")
```text

```mermaid
flowchart LR
    A[Raw Context] --> B[Deduplicate System]
    B --> C[Remove Redundancy]
    C --> D[Truncate Long Items]
    D --> E[Compressed Context]
    E --> F[LLM]
```text

---

## 6.5 Memory Systems

Two-tier memory: short-term (conversation) and long-term (persistent facts).

```python
class MemorySystem:
    def __init__(self, client):
        self.short_term = []
        self.long_term = {}
        self.client = client
        self.max_short = 20

    def add(self, user_msg, assistant_msg):
        self.short_term.append({"role": "user", "content": user_msg})
        self.short_term.append({"role": "assistant", "content": assistant_msg})
        if len(self.short_term) > self.max_short:
            self._consolidate()

    def _consolidate(self):
        text = "\n".join(m["content"] for m in self.short_term[:-10])
        r = self.client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "Extract key facts about the user. Return as bullet points."},
                {"role": "user", "content": text}
            ],
            temperature=0
        )
        self.long_term["facts"] = r.choices[0].message.content
        self.short_term = self.short_term[-10:]

    def get_context(self):
        ctx = []
        if self.long_term:
            ctx.append({"role": "system", "content": f"Known facts: {self.long_term.get('facts', '')}"})
        ctx.extend(self.short_term)
        return ctx

    def store(self, key, value):
        self.long_term[key] = value

    def recall(self, key):
        return self.long_term.get(key)

mem = MemorySystem(client)
mem.add("My name is Alice", "Nice to meet you, Alice!")
mem.add("I work at Google", "Great!")
print(f"Short-term: {len(mem.short_term)} turns, Facts: {mem.long_term.get('facts', 'none')[:80]}")
```text

**Vector-based memory**:

```python
import numpy as np

class VectorMemory:
    def __init__(self):
        self.texts = []
        self.vectors = []

    def add(self, text, vector):
        self.texts.append(text)
        self.vectors.append(vector)

    def search(self, query_vec, k=3):
        scores = []
        for vec in self.vectors:
            sim = np.dot(query_vec, vec) / (np.linalg.norm(query_vec) * np.linalg.norm(vec) + 1e-10)
            scores.append(sim)
        top_k = np.argsort(scores)[-k:][::-1]
        return [(self.texts[i], scores[i]) for i in top_k]

## vmem = VectorMemory()

## vmem.add("User likes Python", np.random.randn(384))

## result = vmem.search(np.random.randn(384))
```text

```mermaid
flowchart TD
    subgraph ST[Short-Term]
        A[Recent Turns]
        B[Active Context]
    end
    subgraph LT[Long-Term]
        C[Consolidated Facts]
        D[Vector Storage]
    end
    E[New Input] --> ST
    ST -->|Full| F[Consolidate]
    F --> LT
    LT --> G[Retrieve]
    G --> ST
```text

---

## 6.6 Multi-Turn Management

Managing context across many turns requires careful token budgeting.

```python
class MultiTurnManager:
    def __init__(self, client, model="gpt-4o-mini", max_context=10000):
        self.client = client
        self.model = model
        self.max_context = max_context
        self.history = []
        self.system = "You are a helpful assistant."
        self.enc = tiktoken.encoding_for_model(model)

    def add(self, role, content):
        self.history.append({"role": role, "content": content})

    def build_context(self, new_input):
        ctx = [{"role": "system", "content": self.system}]
        available = self.max_context - len(self.enc.encode(new_input)) - 1000
        for msg in reversed(self.history):
            tokens = len(self.enc.encode(msg["content"]))
            if available - tokens < 0:
                break
            ctx.insert(1, msg)
            available -= tokens
        ctx.append({"role": "user", "content": new_input})
        return ctx

    def chat(self, user_input):
        ctx = self.build_context(user_input)
        r = self.client.chat.completions.create(model=self.model, messages=ctx, temperature=0.7)
        reply = r.choices[0].message.content
        self.add("user", user_input)
        self.add("assistant", reply)
        return reply

    def token_usage(self):
        total = sum(len(self.enc.encode(m["content"])) for m in self.history)
        return {"messages": len(self.history), "tokens": total}

## mgr = MultiTurnManager(client)

## print(mgr.chat("Hello!"))
```text

**History pruning**:

```python
def prune(history, strategy="drop_oldest", max_tokens=8000):
    enc = tiktoken.encoding_for_model("gpt-4o-mini")
    if strategy == "drop_oldest":
        pruned, total = [], 0
        for msg in reversed(history):
            t = len(enc.encode(msg["content"]))
            if total + t > max_tokens:
                break
            pruned.insert(0, msg)
            total += t
        return pruned
    elif strategy == "summarize_old":
        total = sum(len(enc.encode(m["content"])) for m in history)
        if total <= max_tokens:
            return history
        recent = history[-4:]
        old = history[:-4]
        summary = {"role": "system", "content": f"Previous: {' '.join(m['content'] for m in old)[:500]}..."}
        return [summary] + recent

history = [{"role": "user", "content": f"Msg {i}" * 50} for i in range(20)]
p = prune(history, "drop_oldest", 3000)
print(f"Before: {len(history)}, After: {len(p)}")
```text

```mermaid
flowchart TD
    A[New Input] --> B[Budget Check]
    B --> C{Fits?}
    C -->|Yes| D[Full History]
    C -->|No| E{Prune}
    E --> F[Drop Oldest]
    E --> G[Summarize]
    F --> H[Trimmed Context]
    G --> H
    H --> I[LLM]
    I --> J[Response]
    J --> K[Add to History]
```text

---

## TypeScript Parallel

TypeScript context manager with token tracking:

```typescript
import { encoding_for_model } from "tiktoken";

interface Message { role: "system" | "user" | "assistant"; content: string }

class ContextManager {
  private history: Message[] = [];

  constructor(private maxTokens = 128000, private model = "gpt-4o") {}

  countTokens(text: string): number {
    const enc = encoding_for_model(this.model as any);
    const n = enc.encode(text).length;
    enc.free();
    return n;
  }

  buildContext(newInput: string): Message[] {
    const budget = this.maxTokens - this.countTokens(newInput) - 4096;
    const ctx: Message[] = [{ role: "system", content: "You are helpful." }];
    let used = 0;
    for (const msg of [...this.history].reverse()) {
      const t = this.countTokens(msg.content);
      if (used + t > budget) break;
      ctx.splice(1, 0, msg);
      used += t;
    }
    ctx.push({ role: "user", content: newInput });
    return ctx;
  }
}
```text

---

## Summary

- Token limits determine maximum context size; different models offer 4K to 2M
- Sliding window processes long documents via overlapping chunks
- Conversation summarization compresses history for long-running chats
- Context compression removes duplicates, redundancies, truncates verbose messages
- Memory systems separate short-term (conversation) from long-term (persistent facts)
- Vector-based retrieval enables semantic memory lookups
- Multi-turn management requires careful token budgeting
- Pruning strategies: drop oldest, summarize old, drop low priority
- Chunk overlap (10-20%) ensures no information loss at boundaries
- Token counting with tiktoken enables precise context management

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Long documents | Sliding window with 10-20% overlap | Sending entire document at once |
| Long conversations | Summarize older turns periodically | Keeping every turn in context |
| Token management | Count tokens before sending | Guessing whether context fits |
| Memory | Separate short and long-term storage | Storing everything in context |
| Pruning | Keep recent, summarize older | Dropping recent context |
| Multi-turn | Budget: 10% system, 60% history, 20% input, 10% output | Ignoring output allocation |

## Interview Q&A

<details class="tp-qa-card" data-qid="llm-s06-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: What is a context window and why does it matter?</summary>
  <div class="tp-qa-answer"><p>The context window is the max tokens a model processes in one request. It limits system prompt + history + input + output. Exceeding it causes truncation or errors. Sizes range from 4K to 2M tokens depending on model.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s06-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: How does sliding window work for long documents?</summary>
  <div class="tp-qa-answer"><p>Splits text into overlapping chunks processed independently. Overlap (10-20%) ensures no information loss at boundaries. Results are merged in a final step. Common: 4000-10000 token chunks with 500-2000 overlap.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s06-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: When to use conversation summarization?</summary>
  <div class="tp-qa-answer"><p>When history exceeds available context budget. Summarize every 5-10 turns to compress older parts while preserving key facts. Best for long-running chat, customer support, and multi-turn agent interactions.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s06-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: What are context compression techniques?</summary>
  <div class="tp-qa-answer"><p>Deduplicate system messages, remove redundant exchanges, truncate verbose messages, prune old turns, summarize older segments, remove low-importance content. Each trades off information retention for token savings.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s06-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: How to design a memory system for LLM apps?</summary>
  <div class="tp-qa-answer"><p>Two-tier: short-term (last 10-20 turns), long-term (consolidated facts, user preferences). Long-term can use key-value stores or vector databases. Consolidation happens when short-term exceeds capacity.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s06-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: Recommended token budget for chat?</summary>
  <div class="tp-qa-answer"><p>System: 5-10%, History: 50-60%, Input: 10-20%, Output: 10-20%. For 128K: system ~6K, history ~70K, input ~20K, output ~12K. Adjust per use case.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s06-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: How to handle context across multiple turns efficiently?</summary>
  <div class="tp-qa-answer"><p>Track token usage per message, prune oldest when budget exceeded, summarize batches periodically, use sliding window for long inputs, deduplicate system prompts. Count tokens before sending.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s06-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: Truncation vs summarization?</summary>
  <div class="tp-qa-answer"><p>Truncation drops old messages (fast, loses all info). Summarization compresses old messages into key facts (preserves info, costs extra LLM call). Use truncation for simple, summarization for complex contexts.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s06-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: How to prevent information loss at chunk boundaries?</summary>
  <div class="tp-qa-answer"><p>Use overlapping chunks with 10-20% overlap. For sentences: include last 2-3 sentences from previous chunk. For paragraphs: include last paragraph. Ensures context continuity.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s06-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: How does vector-based memory retrieval work?</summary>
  <div class="tp-qa-answer"><p>Past interactions embedded into vectors and stored. New input embedded and used to query similar past memories. Retrieved memories added to prompt as context. Enables long-term context without keeping everything in the window.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which model has the largest context window?

a) GPT-4o (128K)
b) Claude 3 Sonnet (200K)
c) Gemini 1.5 Pro (2M)
d) GPT-3.5 (16K)

<details class="tp-qa-card" data-qid="llm-s06-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Gemini 1.5 Pro (2M)</strong></p></div></details>

**Q2**: Recommended overlap for sliding window chunking?

a) 0%
b) 1-5%
c) 10-20%
d) 50%

<details class="tp-qa-card" data-qid="llm-s06-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) 10-20%</strong></p></div></details>

**Q3**: Main trade-off of conversation summarization?

a) Faster responses
b) Extra LLM call for token savings
c) Better accuracy
d) Simpler implementation

<details class="tp-qa-card" data-qid="llm-s06-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Extra LLM call for token savings</strong></p></div></details>

**Q4**: Which library counts tokens for OpenAI models?

a) tokenizers
b) tiktoken
c) transformers
d) sentencepiece

<details class="tp-qa-card" data-qid="llm-s06-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) tiktoken</strong></p></div></details>

**Q5**: Typical output budget percentage?

a) 1-5%
b) 10-20%
c) 40-50%
d) 70-80%

<details class="tp-qa-card" data-qid="llm-s06-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) 10-20%</strong></p></div></details>

## Exercises

**Easy** — Write a function counting tokens for message lists using tiktoken.

**Easy** — Implement a sliding window chunker with 20% overlap.

**Medium** — Build ConversationSummarizer summarizing every 5 turns.

**Medium** — Create ContextManager with drop_oldest and summarize strategies.

**Hard** — Build full memory system with short-term buffer, long-term vector storage, and automatic consolidation.

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 11-llms-prompt-engineering. When would you choose one approach over another?
2. Design a system that efficiently handles 11-llms-prompt-engineering at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 11-llms-prompt-engineering. What was your approach and what was the result?
2. How would you explain 11-llms-prompt-engineering to a non-technical stakeholder?

#### Microsoft Style
1. How does 11-llms-prompt-engineering integrate with enterprise systems and cloud architectures?
2. What are the security implications of 11-llms-prompt-engineering?

#### NVIDIA Style
1. How would you optimize 11-llms-prompt-engineering for GPU-accelerated computing?
2. What parallel processing patterns apply to 11-llms-prompt-engineering?

#### AI Startup Style
1. How would you implement 11-llms-prompt-engineering in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 11-llms-prompt-engineering?

### Resume Tips
- **Technical Skills**: List 11-llms-prompt-engineering under relevant technical skills
- **Project Description**: "Implemented 11-llms-prompt-engineering to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 11-llms-prompt-engineering in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 11-llms-prompt-engineering
- [ ] Practice 3-5 problems related to 11-llms-prompt-engineering
- [ ] Prepare 2 real-world examples of using 11-llms-prompt-engineering
- [ ] Know the time/space complexity of common 11-llms-prompt-engineering operations
- [ ] Have questions ready about how the company uses 11-llms-prompt-engineering> **Next**: [07 — LLM Evaluation →](07-llm-evaluation.md)


## Difficulty Level

**Level**: Advanced
**Estimated Study Time**: 60-90 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to LLMs & Prompt Engineering fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master context management?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

Understanding the evolution of context management helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding context management at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of context management like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply context management concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of context management?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply context management in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (24 minutes)
**Day 2**: Complete exercises and practice (24 minutes)
**Day 3**: Review flashcards and take quiz (12 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying context management to specific use cases, consider:
- Adapting general principles to your specific domain
- Performance optimization for your target hardware
- Cost considerations for production deployment
- Monitoring and observability in production