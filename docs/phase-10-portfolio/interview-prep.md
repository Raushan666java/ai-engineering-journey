# Interview Prep

---

## Common AI Engineer Interview Topics

```
1. Python Coding (Medium LeetCode)
2. LangChain/RAG (Architecture)
3. System Design (AI-focused)
4. LLM Knowledge (concepts)
5. Behavioral (startup fit)
6. Take-home Project
```

---

## 1. Python Coding Questions

### Easy-Medium LeetCode

```python
# Q1: Valid Parentheses
def is_valid(s: str) -> bool:
    stack = []
    pairs = {")": "(", "]": "[", "}": "{"}
    for char in s:
        if char in pairs:
            if not stack or stack.pop() != pairs[char]:
                return False
        else:
            stack.append(char)
    return len(stack) == 0

# Q2: Two Sum
def two_sum(nums: list[int], target: int) -> list[int]:
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Q3: Merge Intervals
def merge(intervals: list[list[int]]) -> list[list[int]]:
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    for start, end in intervals[1:]:
        if start <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], end)
        else:
            merged.append([start, end])
    return merged
```

### Python-Specific Questions

```python
# Q: List comprehension
squares = [x**2 for x in range(10)]

# Q: Decorators
@lru_cache
def expensive_function(n):
    return n * 2

# Q: Generators
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# Q: Context manager
with open("file.txt", "r") as f:
    content = f.read()

# Q: async/await
async def fetch_data(url):
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        return response.json()
```

---

## 2. LangChain / RAG Questions

```
Q: Difference between chain and agent?

A: Chain = fixed sequence. prompt -> LLM -> parser -> output
   Agent = LLM decides which tool to use next.
   Agent: LLM + tools + loop -> LLM decides next action

Q: How do you handle chunking for different docs?

A: Depends on document type:
   - Code files: RecursiveCharacterTextSplitter
   - Markdown: MarkdownHeaderTextSplitter
   - PDFs: Semantic chunking (paragraph/section based)
   - Long docs: Hierarchical (summary + chunks)

Q: How does hybrid search work?

A: Combines dense (vector similarity) + sparse (BM25 keyword)
   Results merged with reciprocal rank fusion (RRF):
   score = 1/(k + rank_dense) + 1/(k + rank_sparse)

Q: Why re-ranking?

A: Bi-encoder (embedding) is fast but less accurate.
   Cross-encoder is accurate but slow.
   Strategy: retrieve 50 docs with bi-encoder, then
   re-rank top 20 with cross-encoder.

Q: How to measure RAG quality?

A: RAGAS metrics:
   - Faithfulness (hallucination check)
   - Answer relevancy
   - Context precision/recall
   - Answer correctness

Q: How to reduce hallucination?

A: - Better retrieval (high precision)
   - Self-RAG (LLM checks its own output)
   - Grounding in source citations
   - Lower temperature
   - Prompt engineering ("If unsure, say you don't know")
```

### Coding Questions

```python
# Q: Write a basic RAG query function
async def rag_query(question: str, top_k: int = 5):
    # 1. Embed
    q_emb = embedder.embed_query(question)

    # 2. Retrieve
    docs = vector_store.similarity_search(q_emb, k=top_k)

    # 3. Build context
    context = "\n\n".join(d.page_content for d in docs)

    # 4. Generate
    prompt = f"Answer based on context:\n{context}\n\nQ: {question}"
    response = llm.invoke(prompt)

    return {
        "answer": response,
        "sources": [d.metadata["source"] for d in docs]
    }

# Q: Create a custom LangChain tool
from langchain.tools import tool

@tool
def calculate_invoice_tax(amount: float, tax_rate: float = 0.18) -> dict:
    """Calculate tax on an invoice amount"""
    tax = amount * tax_rate
    total = amount + tax
    return {
        "amount": amount,
        "tax": round(tax, 2),
        "total": round(total, 2)
    }

# Q: LangGraph StateGraph for agent
from langgraph.graph import StateGraph, END

def create_agent():
    workflow = StateGraph(AgentState)

    workflow.add_node("think", think_node)
    workflow.add_node("act", act_node)
    workflow.add_node("observe", observe_node)

    workflow.add_conditional_edges(
        "think",
        decide_next_action,
        {"act": "act", "end": END}
    )
    workflow.add_edge("act", "observe")
    workflow.add_edge("observe", "think")

    workflow.set_entry_point("think")
    return workflow.compile()
```

---

## 3. System Design Questions (AI Focus)

```
Q: Design a RAG system for a business with 100K documents.

Key points to cover:
  - Ingestion pipeline (processing, chunking, indexing)
  - Vector DB choice (Qdrant for self-hosted, cost effective)
  - Hybrid search (dense + sparse for better recall)
  - Caching strategy (embedding cache, response cache)
  - Re-ranking for accuracy
  - Monitoring (RAGAS metrics, latency, cost)
  - Scaling (sharding vector DB, read replicas)

Q: Design a multi-agent system for an ERP.

Key points:
  - Agent separation (inventory, orders, support, analytics)
  - Communication (queue-based between agents)
  - Memory architecture (short-term + long-term)
  - Error recovery (fallback providers, retry logic)
  - Human-in-the-loop for critical decisions

Q: Design an LLM API proxy service with cost control.

Key points:
  - Multiple provider support (OpenAI, Anthropic, local)
  - Rate limiting (per-user, per-key, global)
  - Circuit breaker for failing providers
  - Cost tracking with daily budget
  - Request queuing and batching
  - Fallback strategy
```

---

## 4. LLM Knowledge Questions

```
Q: What is temperature in LLMs?

A: Controls randomness of output.
   Low temp (0-0.3): deterministic, factual
   High temp (0.7-1.0): creative, varied
   Use low for RAG, high for creative writing

Q: What is the difference between GPT-4o and GPT-4o-mini?

A: Mini is smaller, faster, cheaper.
   GPT-4o: best quality, higher cost, slower
   GPT-4o-mini: good quality, low cost, fast
   Strategy: use mini for simple tasks, full for complex

Q: What is context window?

A: Max tokens LLM can process at once.
   - GPT-4o: 128K tokens
   - Claude 3.5: 200K tokens
   - Gemini: 1M tokens (in some versions)
   Trade-off: larger context = slower + more expensive

Q: What is RAG vs fine-tuning?

A: RAG: add context to prompt at inference time
   Fine-tuning: train model on specific data
   RAG for: dynamic data, many topics, frequent updates
   Fine-tuning for: specific style/format, reducing latency

Q: What are embeddings?

A: Vector representation of text (768 or 1536 dimensions)
   Similar texts have similar vectors (high cosine similarity)
   Used for: search, clustering, classification
```

---

## 5. Behavioral Questions

### For Indian Startups / Remote Roles

```
Q: Tell me about yourself.

A: "I started as a Laravel developer building SaaS platforms
    for 3+ years. Recently, I transitioned into AI Engineering.
    I now build production RAG systems, multi-agent architectures,
    and AI automation pipelines. My latest project is Document AI,
    a RAG system serving 100+ documents with hybrid search and
    re-ranking. I'm looking for a role where I can combine my
    production engineering experience with AI skills."

Q: Why AI Engineering?

A: "I saw AI transforming how software is built.
    As a Laravel developer, I understood business requirements
    but wanted to add AI capabilities. I spent 3 months learning
    and building production AI systems. Now I can build things
    that were impossible before - like an agent that understands
    business context and makes decisions."

Q: How do you handle a project with unclear requirements?

A: "1. Ask questions to understand the core problem
    2. Build a quick prototype (MVP in 2-3 days)
    3. Get feedback from stakeholders
    4. Iterate based on real usage
    Example: In Document AI, I started with basic RAG,
    then added hybrid search when users complained about
    retrieval quality."

Q: Tell me about a technical challenge you solved.

A: "In my multi-agent system, agents were timing out
    because LLM calls were slow. I implemented:
    1. Timeout with circuit breaker pattern
    2. Fallback provider switching
    3. Request queuing with priority
    4. Async processing with asyncio
    Failure rate dropped from 15% to 2%."

Q: How do you stay updated in AI?

A: "I follow: Lilian Weng's blog, Simon Willison's blog,
    r/LocalLLaMA, AI Engineering Discord, The Batch newsletter.
    I also build projects weekly - best way to learn."
```

### Salary Negotiation

```
Rules:
  1. Never give first number. Say "I'm flexible based on role"
  2. Research market rate before interview
  3. Have a BATNA (Best Alternative to Negotiated Agreement)
  4. Mention your production experience (justifies premium)

Script:
  "Based on my 3+ years of production engineering experience
  combined with my AI skills, I'm looking for [range].
  I'm open to discussing based on the role responsibilities
  and growth opportunities."
```

---

## 6. Take-Home Projects

### How to Approach

```
1. READ THE INSTRUCTIONS CAREFULLY (most people don't)
2. Set up project structure (not a single script)
3. Write clean, typed code
4. Add tests (unit + integration)
5. Dockerize it
6. Write README with:
   - Setup instructions
   - Architecture decisions
   - What you would improve

Time management:
  - Don't spend more than 4-6 hours
  - If stuck, document your approach and move on
  - Submit working code over perfect code
```

### Common Take-Home Projects

```
1. Build a RAG system (most common)
   - Take documents, build Q&A
   - Focus on chunking strategy and retrieval quality

2. Build an agent with tools
   - Calculator + search + database query
   - Focus on error handling and tool selection

3. Build an API endpoint
   - Create an AI-powered API
   - Focus on clean architecture, error handling, docs

4. Data pipeline
   - Process raw data, transform, store
   - Focus on error handling, logging, performance
```

---

## 7. Mock Interview Questions with Answers

### Q1: "How would you design a system that answers questions from a company's internal documents?"

```python
"""
Answer:
1. Ingestion pipeline:
   - Parse documents (PDF, Word, Markdown)
   - Smart chunking (recursive splitter)
   - Generate embeddings
   - Store in Qdrant vector DB

2. Query pipeline:
   - Embed user question
   - Hybrid search (dense + sparse)
   - Re-rank top 20 results
   - Build context from top 5
   - Generate answer with source citations

3. Caching:
   - Embedding cache (Redis)
   - Response cache for common queries

4. Monitoring:
   - RAGAS evaluation
   - Latency tracking
   - Cost tracking
   - User feedback collection
"""
```

### Q2: "How do you handle rate limiting for LLM APIs?"

```python
"""
Answer:
1. Token bucket algorithm per API key
2. Queue requests when rate limited
3. Exponential backoff with jitter
4. Multiple API keys with rotation
5. Circuit breaker after N failures
6. Fallback to cheaper/slower provider
7. Monitor rate limit headroom

Pseudo-code:

class RateLimiter:
    def __init__(self, rpm=500):
        self.tokens = rpm
        self.last_refill = time.time()

    async def acquire(self):
        while self.tokens <= 0:
            await asyncio.sleep(0.1)
            self.refill()
        self.tokens -= 1

    def refill(self):
        elapsed = time.time() - self.last_refill
        self.tokens = min(self.max_tokens,
                         self.tokens + elapsed * self.rate)
"""
```

### Q3: "You have a production RAG system returning bad answers. How do you debug?"

```
Answer:
1. Check retrieval quality:
   - Are relevant chunks being returned?
   - Check embedding similarity scores
   - Compare with expected results

2. Check LLM response:
   - Is the LLM following instructions?
   - Check prompt template
   - Test with different temperatures

3. Common issues:
   - Bad chunking (splitting relevant content)
   - Wrong embedding model for domain
   - Too few chunks retrieved
   - Prompt ambiguity
   - Context window overflow

4. Fixes:
   - Adjust chunk size/overlap
   - Try different embedding model
   - Increase top_k
   - Improve prompt
   - Add re-ranking
```

---

## 8. Resources for Interview Prep

### Practice Platforms

```
- LeetCode: Python medium problems (Neetcode 150)
- System Design: ByteByteGo, System Design Interview (Alex Xu)
- LangChain: Official docs + LangChain Academy
- RAG: Pinecone's RAG guide, LangChain RAG docs
- Behavioral: Prepare 5 stories using STAR method
```

### YouTube Channels

```
- Neetcode: DSA practice
- ByteByteGo: System design
- TechWithTim: Python general
- AI Engineering: Sam Witteveen, AI Makerspace
```

### Books

```
- Designing Data-Intensive Applications (DDIA)
- Machine Learning Engineering (Andriy Burkov)
- System Design Interview (Alex Xu) Vol 1 + 2
```

### Quick Links

```
- System Design Primer: github.com/donnemartin/system-design-primer
- Neetcode.io: neetcode.io
- LangChain Docs: python.langchain.com
- RAGAS: docs.ragas.io
- Interview Warmup: grow.google/certificates/interview-warmup
```
