# Interview Prep

> AI Engineer interview ke liye complete preparation guide. Python coding se lekar system design, behavioral se lekar take-home project tak — sab kuch.

---

## Common AI Engineer Interview Topics

```
1. Python Coding (Medium LeetCode)
2. LangChain/RAG (Architecture + Implementation)
3. System Design (AI-focused)
4. LLM Knowledge (concepts, internals)
5. Behavioral (startup fit, transition story)
6. Take-home Project
7. Mock Interview Practice
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

# Q4: Contains Duplicate
def contains_duplicate(nums: list[int]) -> bool:
    return len(nums) != len(set(nums))

# Q5: Valid Anagram
def is_anagram(s: str, t: str) -> bool:
    return sorted(s) == sorted(t)

# Q6: Palindrome Number
def is_palindrome(x: int) -> bool:
    if x < 0:
        return False
    return str(x) == str(x)[::-1]
```

### Medium LeetCode (Must-Know)

```python
# Q7: Longest Substring Without Repeating Characters
def length_of_longest_substring(s: str) -> int:
    char_set = set()
    left = max_len = 0
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_len = max(max_len, right - left + 1)
    return max_len

# Q8: Group Anagrams
def group_anagrams(strs: list[str]) -> list[list[str]]:
    groups = {}
    for s in strs:
        key = tuple(sorted(s))
        groups.setdefault(key, []).append(s)
    return list(groups.values())

# Q9: Top K Frequent Elements
def top_k_frequent(nums: list[int], k: int) -> list[int]:
    from collections import Counter
    count = Counter(nums)
    return [num for num, _ in count.most_common(k)]

# Q10: Product of Array Except Self
def product_except_self(nums: list[int]) -> list[int]:
    n = len(nums)
    result = [1] * n
    left = right = 1
    for i in range(n):
        result[i] = left
        left *= nums[i]
    for i in range(n - 1, -1, -1):
        result[i] *= right
        right *= nums[i]
    return result
```

### AI-Specific Coding Problems

```python
# Q11: Cosine Similarity (common for embeddings)
def cosine_similarity(a: list[float], b: list[float]) -> float:
    dot_product = sum(x * y for x, y in zip(a, b))
    norm_a = sum(x ** 2 for x in a) ** 0.5
    norm_b = sum(y ** 2 for y in b) ** 0.5
    return dot_product / (norm_a * norm_b)

# Q12: Levenshtein Distance (fuzzy matching)
def levenshtein_distance(s1: str, s2: str) -> int:
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i - 1] == s2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(dp[i - 1][j],    # delete
                                   dp[i][j - 1],    # insert
                                   dp[i - 1][j - 1]) # replace
    return dp[m][n]

# Q13: Simple Tokenizer
def simple_tokenize(text: str, vocab: set) -> list[str]:
    tokens = []
    i = 0
    while i < len(text):
        for j in range(len(text), i, -1):
            if text[i:j] in vocab:
                tokens.append(text[i:j])
                i = j
                break
        else:
            tokens.append(text[i])
            i += 1
    return tokens

# Q14: Moving Average (for streaming data)
class MovingAverage:
    def __init__(self, size: int):
        self.size = size
        self.window = []

    def next(self, val: int) -> float:
        self.window.append(val)
        if len(self.window) > self.size:
            self.window.pop(0)
        return sum(self.window) / len(self.window)

# Q15: LRU Cache (common in system design)
from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.cache = OrderedDict()
        self.capacity = capacity

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)
```

### Python-Specific Questions

```python
# Q: List comprehension
squares = [x**2 for x in range(10)]

# Q: Decorators
from functools import lru_cache

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

# Q: args and kwargs
def flexible_function(*args, **kwargs):
    for arg in args:
        print(arg)
    for key, value in kwargs.items():
        print(f"{key}: {value}")

# Q: Dataclasses
from dataclasses import dataclass

@dataclass
class Config:
    model: str = "gpt-4o"
    temperature: float = 0.7
    max_tokens: int = 1024
```

### Mock Interview Script — Python Coding Round

```
Interviewer: "Write a function that finds the longest substring without repeating characters."

You (think out loud):
  "Let me think about this. We need to find a window of characters
   where all are unique. Sliding window approach makes sense here.
   I'll use two pointers and a set to track characters in current window.

   Edge cases: empty string returns 0, single char returns 1,
   all unique returns full length."

[Write code — see Q7 above]

You (explain):
  "The left pointer moves forward when we find a duplicate,
   removing characters from our set. The right pointer expands
   the window. We track max_len as we go.
   
   Time: O(n) — each character visited at most twice.
   Space: O(min(m, n)) — set size limited by character set."

Interviewer: "How would you test this?"
You:
  "Test cases:
   1. 'abcabcbb' → 3
   2. 'bbbbb' → 1
   3. 'pwwkew' → 3
   4. '' → 0
   5. 'a' → 1
   6. 'au' → 2"
```

---

## 2. LangChain / LangGraph Deep Dive Q&A

### Core Concepts (20+ Questions)

```
Q1: What is LangChain and when should you use it?

A: LangChain is a framework for building LLM-powered applications.
Use it when you need:
   → Multi-step LLM workflows (chains, agents)
   → RAG systems with multiple data sources
   → Tool use and API integration
   → Memory and state management

Don't use it for: simple single LLM calls (httpx + prompt is enough)
```

```
Q2: Difference between chain and agent?

A: Chain = fixed sequence. A to B to C to D.
   Agent = LLM decides next action based on observation.

   Chain: prompt → LLM → parser → output
   Agent: LLM + tools + loop → LLM decides next action

   Use chains when the flow is predictable.
   Use agents when you need flexibility.
```

```
Q3: What is LCEL (LangChain Expression Language)?

A: LCEL is a declarative way to compose chains using the pipe operator.
   Benefits:
   → Automatic streaming support
   → Built-in tracing (LangSmith)
   → Easy parallel execution (RunnableParallel)
   → Simple branching (RunnableBranch)
   → Async support by default
```

```
Q4: Explain RunnablePassthrough and RunnableParallel.

A: RunnablePassthrough — passes input unchanged (for data flow)
   RunnableParallel — executes multiple runnables in parallel

   Example:
   chain = RunnableParallel(
       context = retriever,
       question = RunnablePassthrough()
   ) | prompt | model | StrOutputParser()
```

```
Q5: How does LangGraph differ from LangChain?

A: LangGraph extends LangChain for agent workflows:
   → StateGraph — define nodes + edges + state
   → Cycles — agents loop back to think again
   → Conditional edges — LLM decides next step
   → Shared state — all nodes read/write same state
   LangChain is linear; LangGraph is graph-based with cycles.
```

```
Q6: What is a StateGraph in LangGraph?

A: StateGraph defines the agent's execution flow:
   → Nodes: functions the agent can execute
   → Edges: transitions between nodes
   → State: shared data all nodes can access
   → Conditional edges: routing based on state

   Basic structure:
   workflow = StateGraph(AgentState)
   workflow.add_node("think", think_node)
   workflow.add_node("act", act_node)
   workflow.add_conditional_edges("think", router, {...})
   workflow.set_entry_point("think")
   app = workflow.compile()
```

```
Q7: How do you handle memory in LangChain?

A: Multiple memory types:
   → ConversationBufferMemory — stores all messages
   → ConversationSummaryMemory — summarizes older messages
   → VectorStoreRetrieverMemory — RAG over conversation history
   → ConversationTokenBufferMemory — drops oldest at token limit
   → PostgresChatMessageHistory — persistent memory

   For production: use persistent memory (Redis, Postgres)
```

```
Q8: What chunking strategies do you use for different docs?

A: Depends on document type:
   → Code files: RecursiveCharacterTextSplitter
   → Markdown: MarkdownHeaderTextSplitter (preserves structure)
   → PDFs: Semantic chunking (paragraph/section based)
   → Long docs: Hierarchical (summary + chunks)
   → HTML: HTMLHeaderTextSplitter

   General rules:
   → chunk_size: 500-1500 depending on content density
   → chunk_overlap: 100-200 (10-20% of chunk size)
   → separators: ["\n\n", "\n", ".", "!", "?", " ", ""]
```

```
Q9: How does hybrid search work?

A: Combines two approaches:
   → Dense (vector similarity): captures semantic meaning
     Example: "car" matches "vehicle"
   → Sparse (BM25/keyword): captures exact keyword matches
     Example: "Python 3.12" matches exact version

   Results merged with RRF (Reciprocal Rank Fusion):
   score = 1/(60 + rank_dense) + 1/(60 + rank_sparse)
```

```
Q10: Why re-ranking and how does it work?

A: Bi-encoder (embedding) is fast but less accurate.
   Cross-encoder is accurate but slow (compares query-doc pair).

   Strategy: retrieve 50 docs with bi-encoder, re-rank top 20
   with cross-encoder.

   Benefits: 5-15% accuracy improvement, minimal latency cost.
```

```
Q11: How do you handle tool calling with LLMs?

A: Modern approach (OpenAI/Claude tool calling):
   → Define tools with schemas (name, description, parameters)
   → LLM returns function_call with arguments
   → Execute the function
   → Feed result back to LLM

   @tool
   def get_weather(location: str) -> str:
       """Get weather for a location"""
       return weather_api.get(location)
```

```
Q12: What is a RunnableBranch?

A: Routes to different chains based on condition:
   chain = RunnableBranch(
       (lambda x: len(x) > 1000, long_handler),
       (lambda x: len(x) > 100, medium_handler),
       short_handler  # default
   )
```

```
Q13: How do you handle errors in LangChain agents?

A: Multiple strategies:
   → handle_parsing_errors=True — catch parse errors
   → max_iterations — prevent infinite loops
   → max_execution_time — timeout protection
   → RetryWithErrorOutputParser — retry on parse errors
   → Fallback chains — if one fails, try another

   AgentExecutor(
       agent=agent,
       tools=tools,
       handle_parsing_errors=True,
       max_iterations=5,
       max_execution_time=30
   )
```

```
Q14: What is LangSmith and why use it?

A: LangSmith is LLM application observability platform:
   → Trace every LLM call, tool use, chain execution
   → Debug latency, token usage, errors
   → Evaluate RAG quality with built-in metrics
   → A/B test different prompts and models
   → Monitor production performance

   Essential for production RAG systems.
```

```
Q15: How do you implement fallback models in LangChain?

A: Use Runnable.with_fallbacks():
   primary = ChatOpenAI(model="gpt-4o")
   fallback = ChatOpenAI(model="gpt-4o-mini")

   chain = primary.with_fallbacks([fallback])

   Also useful for rate limiting:
   chain = primary.with_retry().with_fallbacks([fallback])
```

```
Q16: Explain RAG fusion / multi-query retrieval.

A: Instead of one query, generate multiple variations:
   queries = llm.generate(f"Generate 5 versions of: {question}")
   results = [retriever.invoke(q) for q in queries]
   # Merge and deduplicate results

   Improves recall by 10-20%.
```

```
Q17: How do you do streaming with LangChain?

A: LCEL supports streaming natively:
   for chunk in chain.stream({"question": "Hello"}):
       print(chunk, end="")

   For agents:
   for event in agent_executor.stream({"input": "Hello"}):
       if "output" in event:
           print(event["output"])
```

```
Q18: What is a tool decorator vs BaseTool class?

A: @tool decorator — quick, function-based:
   @tool
   def my_tool(arg: str) -> str:
       """Tool description"""
       return result

   BaseTool class — full control:
   class MyTool(BaseTool):
       name: str = "my_tool"
       description: str = "..."

       def _run(self, arg: str) -> str:
           return result

       async def _arun(self, arg: str) -> str:
           return result
```

```
Q19: How to handle structured output from LLM?

A: Two approaches:
   1. Output parsers:
      parser = PydanticOutputParser(pydantic_object=MyModel)
      chain = prompt | model | parser

   2. Tool calling / function calling:
      llm.with_structured_output(MyModel)

   Second approach is more reliable (native function calling).
```

```
Q20: How do you test LangChain applications?

A: Multiple layers:
   → Unit tests: test individual tools and chains
   → Integration tests: test RAG pipeline end-to-end
   → Evaluation tests: RAGAS for RAG quality

   Example:
   def test_rag_accuracy():
       questions = ["What is X?", "How does Y work?"]
       answers = ["X is ...", "Y works by ..."]
       for q, a in zip(questions, answers):
           result = rag_chain.invoke(q)
           assert a in result["answer"]
```

### Mock Interview Script — LangChain/RAG Round

```
Interviewer: "How would you build a RAG system for a legal document search?"

You:
  "Let me think about this systematically.

  1. Document Processing:
     Legal documents have complex structure — sections, clauses,
     amendments. I would use semantic chunking rather than
     naive character splitting to preserve legal boundaries.

  2. Chunking Strategy:
     → MarkdownHeaderTextSplitter to preserve section hierarchy
     → chunk_size: 500 tokens (legal text is dense)
     → chunk_overlap: 50 tokens
     → Preserve metadata: document_id, section, clause_number

  3. Embedding:
     → text-embedding-3-small for general queries
     → Consider fine-tuned legal embedding if available

  4. Retrieval:
     → Hybrid search (dense + sparse) — legal terms need exact match
     → Metadata filtering: date range, document type, jurisdiction
     → Re-ranking with cross-encoder for precision

  5. Generation:
     → Strict prompt: 'Only answer based on provided context'
     → Temperature: 0 (legal needs factual accuracy)
     → Citation required: 'As per Section X of Document Y...'

  6. Evaluation:
     → RAGAS: faithfulness (critical for legal)
     → Human review of edge cases
     → A/B test different chunking strategies

  Interviewer: "What about latency?"
  You:
     "For legal research, 3-5 seconds is acceptable if quality is high.
     Key optimizations:
     → Embedding cache for common queries
     → Response cache for identical queries
     → Async processing for document ingestion
     → If <3s needed: use smaller model (GPT-4o-mini) + re-ranker"
```

### Coding Questions (LangChain)

```python
# Q1: Write a basic RAG query function
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

# Q2: LangGraph StateGraph for agent
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

# Q3: RAG with hybrid search
def hybrid_search(query, vector_store, bm25_index, k=10):
    # Dense search
    dense_results = vector_store.similarity_search(query, k=k)

    # Sparse search
    sparse_results = bm25_index.search(query, k=k)

    # RRF merge
    all_docs = {}
    for rank, doc in enumerate(dense_results):
        all_docs[doc.id] = {"doc": doc, "score": 1 / (60 + rank)}
    for rank, doc in enumerate(sparse_results):
        if doc.id in all_docs:
            all_docs[doc.id]["score"] += 1 / (60 + rank)
        else:
            all_docs[doc.id] = {"doc": doc, "score": 1 / (60 + rank)}

    # Sort by score
    sorted_docs = sorted(
        all_docs.values(),
        key=lambda x: x["score"],
        reverse=True
    )
    return [d["doc"] for d in sorted_docs[:k]]
```

---

## 3. System Design Interview Prep (AI Focus)

### Design a Production RAG System

```
Problem: Design a RAG system for a company with 100K+ documents.

Requirements:
  → Support PDF, DOCX, MD, TXT, HTML formats
  → Less than 3s query latency
  → 95%+ retrieval accuracy
  → Handle concurrent users (100+)
  → Cost-effective (no premium vector DB if avoidable)

Architecture Flow:

Document Upload → Processing Pipeline → Vector DB (Qdrant)
                     |                        |
                     ↓                        ↓
                Chunking                  BM25 Index
                (Recursive)               (Sparse)
                                                |
                +----------+                    |
                | Re-ranker| ←──────────────────┘
                |(CrossEnc)|
                +----------+
                     |
                     ↓
                +----------+    +------------+
                |   LLM    | →  | Response   |
                |(GPT-4o)  |    | + Sources  |
                +----------+    +------------+

Key Design Decisions:

1. Document Processing:
   → Async ingestion with message queue (Redis/RabbitMQ)
   → Parse → Clean → Chunk → Embed → Store
   → Webhook notification when processing complete

2. Chunking Strategy:
   → Default: RecursiveCharacterTextSplitter (1000/200)
   → Code: Language-specific splitter
   → Markdown: MarkdownHeaderTextSplitter
   → Enable semantic chunking (merge related small chunks)

3. Vector DB Choice:
   → Self-hosted Qdrant (cheapest for 100K docs)
   → Pros: Free, fast, hybrid search built-in
   → Cons: Requires maintenance
   → Alternative: Pinecone (managed, more expensive)

4. Search Strategy:
   → Hybrid search (dense + sparse) with RRF
   → Retrieve 50, re-rank top 5 with cross-encoder
   → Cache frequent queries (Redis, TTL: 1 hour)

5. Caching Layers:
   → Embedding cache (avoid re-embedding same queries)
   → Response cache (identical queries)
   → In-flight request deduplication

6. Monitoring:
   → Latency per stage (embed, search, rerank, generate)
   → RAGAS metrics (faithfulness, relevancy, precision)
   → Cost tracking (tokens per query)
   → User feedback (thumbs up/down)

7. Scaling:
   → Horizontal scaling of API servers
   → Read replicas for vector DB
   → Sharding if more than 1M documents

8. Error Handling:
   → LLM timeout → fallback to smaller model
   → Vector DB down → use BM25 only (degraded mode)
   → Document parse failure → queue for manual review
```

### Design a Multi-Agent System

```
Problem: Design a multi-agent system for ERP automation.

Requirements:
  → Handle inventory, orders, support, analytics
  → Agent communication via message passing
  → Human-in-the-loop for critical decisions
  → Error recovery and fallback

Architecture:

                  Orchestrator Agent
    ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐
    │Inventory │ │  Order   │ │ Support  │ │Analytics│
    │  Agent   │ │  Agent   │ │  Agent   │ │ Agent  │
    └──────────┘ └──────────┘ └──────────┘ └────────┘
           │           │           │           │
           └───────────┴───────────┴───────────┘
                       │
                  Message Queue
                  (Redis Pub/Sub)

Key Design Decisions:

1. Agent Separation:
   → Each domain has its own agent
   → Agents share: tools, memory, LLM
   → Agents isolate: state, triggers, fallbacks

2. Communication:
   → Queue-based (Redis Pub/Sub / RabbitMQ)
   → Event-driven: Order placed → Inventory check → Ship
   → Each event carries: agent_id, action, data, timestamp

3. Memory Architecture:
   → Short-term: conversation history (last 10 turns)
   → Long-term: VectorStoreRetrieverMemory
   → Shared: cross-agent context (customer info, order state)

4. State Management:
   → Each conversation has a state machine
   → States: initial, gathering_info, processing,
     human_review, completed, failed
   → State persisted in PostgreSQL

5. Human-in-the-Loop:
   → Critical actions (refund > 10K, cancel order) → pause
   → Send notification to human supervisor
   → Wait for approval/rejection
   → Resume agent workflow

6. Error Recovery:
   → LLM failure → retry with fallback model
   → Tool timeout → retry with exponential backoff
   → Agent stuck → timeout → notify human
   → Data inconsistency → reconcile from source of truth

7. LangGraph Implementation:
   → StateGraph with 4+ agent nodes
   → Shared state across all agents
   → Conditional routing based on intent
   → Sub-graphs for complex workflows
```

### Design an LLM API Proxy Service

```
Problem: Design a proxy service for multiple LLM providers
with cost control, rate limiting, and monitoring.

Requirements:
  → Support OpenAI, Anthropic, local LLMs
  → Rate limiting per user/key
  → Cost tracking with budget caps
  → Circuit breaker for failing providers
  → Request queuing and batching

Architecture:

Client → API Gateway (FastAPI) → Router Service
                                   |
                      ┌────────────┼────────────┐
                      ↓            ↓            ↓
                  OpenAI      Anthropic      Local
                  Adapter     Adapter        Adapter

Key Components:

1. API Gateway (FastAPI):
   → Authentication (API key validation)
   → Rate limiting (token bucket per key)
   → Request validation
   → Response streaming
   → Usage logging

2. Router Service:
   → Provider selection (based on model, latency, cost)
   → Load balancing across multiple keys
   → Circuit breaker (stop hitting failing provider)
   → Fallback chain (primary → secondary → tertiary)

3. Rate Limiter:
   → Token bucket algorithm
   → Per-user: RPM, TPM limits
   → Global: total API spend cap
   → Queue requests when rate limited

4. Cost Controller:
   → Track tokens per user per day
   → Budget alerts at 50%, 80%, 100%
   → Auto-block at budget limit
   → Cost allocation (project, team, feature)

5. Circuit Breaker:
   → States: CLOSED (normal) → OPEN (failing) → HALF_OPEN (testing)
   → Open after N consecutive failures
   → Half-open after timeout, test with one request

6. Caching:
   → Response cache for identical requests
   → Embedding cache
   → Cache invalidation on TTL

Pseudo-code:

class LLMProxy:
    def __init__(self):
        self.providers = {
            "openai": OpenAIProvider(),
            "anthropic": AnthropicProvider()
        }
        self.circuit_breakers = {
            name: CircuitBreaker() for name in self.providers
        }
        self.rate_limiter = RateLimiter()
        self.cost_tracker = CostTracker()

    async def chat_completion(self, request):
        await self.rate_limiter.acquire(request.user_id)
        await self.cost_tracker.check_budget(request.user_id)

        for provider_name in ["openai", "anthropic"]:
            if self.circuit_breakers[provider_name].is_open():
                continue
            try:
                response = await self.providers[provider_name].chat(
                    request.model, request.messages
                )
                self.circuit_breakers[provider_name].record_success()
                await self.cost_tracker.record_usage(
                    request.user_id, response.usage
                )
                return response
            except Exception:
                self.circuit_breakers[provider_name].record_failure()
                continue

        raise AllProvidersFailed("No provider available")
```

### Design an AI-Powered Automation Pipeline

```
Problem: Design a system that automates business workflows
using AI — document processing, data extraction, email automation.

Requirements:
  → Process various document types (invoices, contracts, emails)
  → Extract structured data from unstructured content
  → Trigger actions based on extracted data
  → Handle exceptions with human review
  → Scale to 10K+ documents/day

Architecture:

Input (Email/Upload) → Classifier (LLM) → Extractor (LLM)
                                             ↓
                                       Validator
                                    (rules + LLM)
                                             ↓
                                    Action Router
                              (update DB, send email, etc.)

Key Design Decisions:
  1. Document classification: LLM-based (more flexible than regex)
  2. Data extraction: Structured output (Pydantic models)
  3. Validation: Rule-based + LLM confidence scoring
  4. Exception handling: Low confidence → human review queue
  5. Scalability: Async processing with message queue
  6. Monitoring: Per-step metrics, cost tracking
```

### Mock Interview Script — System Design Round

```
Interviewer: "Design a customer support chatbot for an e-commerce company."

You:
  "Let me clarify the requirements:
  → Scale: How many conversations per day? (Assume 10K)
  → Languages supported? (Assume English + Hindi)
  → Integration with existing systems? (Orders, inventory, returns)
  → What level of automation? (Aim for 80% automated)

  Architecture:

  User → Chat UI → API Gateway → Intent Classifier
                                     |
                     ┌───────────────┼───────────────┐
                     ↓               ↓               ↓
                Order Agent    Return Agent     Human Handoff
                     ↓               ↓
                Order System    Return System

  1. Intent Classification:
     → Few-shot classification with GPT-4o-mini
     → Fallback: keyword-based if LLM is down
     → Confidence threshold: <0.7 → human handoff

  2. RAG for Knowledge Base:
     → Index all product catalog, return policy, FAQ
     → Hybrid search for relevant answers
     → Re-ranking for precision

  3. Action Agents:
     → Order status: query order DB
     → Return initiation: create return label
     → Cancellation: check eligibility, process

  4. Human Handoff:
     → When: intent unclear, negative sentiment, escalations
     → Context summary passed to human agent
     → Agent can resume AI conversation

  Questions I would ask:
  → What's the current CSAT score?
  → What's the average handle time?
  → What are top 3 customer issues?
  → Is there an existing knowledge base?"
```

---

## 4. LLM Fundamentals Q&A

### Tokenization & Embeddings

```
Q: What is tokenization in LLMs?

A: Tokenization breaks text into tokens (subwords/words).
   "Hello World" → ["Hello", "World"] or ["Hel", "lo", "World"]

   Key concepts:
   → Vocabulary size: 50K-200K tokens
   → BPE (Byte-Pair Encoding): most common algorithm
   → Special tokens: [CLS], [SEP], [PAD], [EOS]
   → Each token maps to an integer ID

   Why it matters:
   → Context window = N tokens, not words
   → Different tokenizers = different token counts
   → Cost is per token, so tokenization affects pricing
```

```
Q: How do embeddings work?

A: Embeddings convert text to vector (list of floats).
   Similar texts → similar vectors (high cosine similarity).

   Details:
   → Dimension: 768 (small), 1536 (text-embedding-3-small), 3072 (large)
   → Trained on: next sentence prediction, contrastive learning
   → Models: text-embedding-3-small, ada-002, BGE, Instructor

   Use cases:
   → Semantic search
   → Clustering
   → Classification
   → Recommendation
```

### Attention & Transformers

```
Q: Explain the Transformer architecture in simple terms.

A: Transformer = Encoder + Decoder with attention.

   Key components:
   1. Self-Attention: Each word looks at all other words
   2. Multi-Head Attention: 8-32 parallel attention computations
   3. Feed-Forward: MLP after attention
   4. Positional Encoding: Tells model word order
   5. Layer Normalization: Stabilizes training

   Why it works:
   → Parallel processing (vs RNNs which are sequential)
   → Long-range dependencies (any word can attend to any word)
   → Scalable (more data + compute = better results)
```

```
Q: What is the attention mechanism?

A: Attention computes weighted sum of values based on query-key similarity.

   Formula: Attention(Q,K,V) = softmax(Q * K^T / sqrt(d)) * V

   Steps:
   1. Q * K^T: similarity matrix between all pairs
   2. /sqrt(d): scale to prevent softmax saturation
   3. softmax: normalize to probabilities
   4. * V: weighted sum of values

   Intuition:
   Q = "What am I looking for?"
   K = "What do I contain?"
   V = "What information should I pass?"
```

```
Q: What is the difference between GPT and BERT architecture?

A: GPT (Decoder-only):
   → Auto-regressive (left to right)
   → Predicts next token
   → Used for generation
   → Size: 1.5B (GPT-2) to 1.8T (GPT-4)

   BERT (Encoder-only):
   → Bidirectional (looks both ways)
   → Masked language modeling
   → Used for understanding
   → Size: 110M (base) to 340M (large)

   Modern LLMs are decoder-only (GPT, Claude, Llama, Gemini)
```

### LLM Training & Fine-tuning

```
Q: What are the stages of LLM training?

A: Three stages:
   1. Pre-training:
      → Train on massive text (internet, books)
      → Objective: predict next token
      → Cost: $10M-$100M+
      → Result: base model (general language understanding)

   2. Supervised Fine-Tuning (SFT):
      → Train on instruction-response pairs
      → Teaches model to follow instructions
      → Cost: $1K-$10K
      → Result: instruction-following model

   3. RLHF (Reinforcement Learning from Human Feedback):
      → Human preferences → reward model → PPO training
      → Aligns model with human values
      → Cost: $10K-$100K
      → Result: helpful, harmless assistant
```

```
Q: What is fine-tuning and when to use it?

A: Fine-tuning: further training a pre-trained model on specific data.

   Use fine-tuning when:
   → Specific output format/style needed
   → Reduce latency (smaller fine-tuned model > larger prompted model)
   → Domain-specific knowledge (legal, medical)
   → Consistent behavior needed

   DON'T use fine-tuning for:
   → Adding new facts (RAG is better)
   → Simple behavior changes (prompt engineering is enough)
   → Dynamic/updating data
```

```
Q: RAG vs Fine-tuning — when to use what?

A: RAG:
   → Dynamic data (documents change frequently)
   → Many topics (can't fine-tune for everything)
   → External knowledge sources
   → When you need citations

   Fine-tuning:
   → Specific output format (JSON, structured)
   → Consistent style/tone
   → Reduce latency/length
   → When you have 1000+ examples

   Best: Combine both. Fine-tune for behavior, RAG for knowledge.
```

### Inference & Optimization

```
Q: What is temperature, top-p, top-k?

A: Parameters controlling LLM output randomness:

   Temperature (0-2):
   → Low (0-0.3): deterministic, picks highest probability tokens
   → High (0.7-1.5): creative, explores less likely tokens
   → 0: always picks the most likely token (greedy)

   Top-p (nucleus sampling):
   → Sample from smallest set of tokens whose probability > p
   → p=0.9: only tokens that make up 90% of probability mass

   Top-k:
   → Sample from top k tokens only
   → k=50: only consider 50 most likely tokens

   Common settings:
   → RAG/QA: temperature=0, top_p=0.9
   → Creative: temperature=0.8, top_p=0.95
```

```
Q: What is context window and why does it matter?

A: Context window = max tokens LLM can process at once.

   Current models:
   → GPT-4o: 128K tokens
   → Claude 3.5: 200K tokens
   → Gemini 1.5: 1M tokens
   → Llama 3: 8K-128K (version dependent)

   Trade-offs:
   → Larger context = more expensive (O(n^2) attention cost)
   → Larger context = slower
   → Quality degrades in middle (lost in the middle phenomenon)
   → Solution: RAG over stuffing everything in context
```

```
Q: What is quantization and why use it?

A: Quantization reduces model precision (32-bit to 8-bit/4-bit).

   Benefits:
   → 4x smaller model (32GB → 8GB)
   → Faster inference
   → Can run on consumer hardware

   Types:
   → GPTQ: post-training quantization
   → GGUF/GGML: for CPU inference (llama.cpp)
   → AWQ: activation-aware quantization
   → BitsAndBytes: 4-bit/8-bit loading in transformers

   Quality impact:
   → 8-bit: minimal quality loss (~0.5%)
   → 4-bit: noticeable but acceptable for many tasks
   → 2-bit: significant quality loss
```

```
Q: What is the "lost in the middle" phenomenon?

A: LLMs perform worse on information in the middle of context.

   Findings (Liu et al. 2023):
   → Best performance: info at start or end of context
   → Worst performance: info in middle
   → Up to 50% accuracy drop for middle positions

   Mitigation:
   → Put most important info at start/end
   → Use RAG instead of long context
   → Re-rank retrieved docs (most relevant first)
```

### Prompt Engineering

```
Q: What is chain-of-thought prompting?

A: Ask LLM to think step by step before answering.

   Zero-shot: "Let's think step by step."
   Few-shot: Provide examples of step-by-step reasoning.

   Why it works:
   → Decomposes complex problems
   → Makes reasoning visible
   → Helps with math, logic, multi-step tasks

   Example:
   Q: "If a bat and ball cost 110, and bat costs 100 more,
       how much is the ball?"
   A: "Let's think step by step:
      1. Bat + Ball = 110
      2. Bat = Ball + 100
      3. (Ball + 100) + Ball = 110
      4. 2 * Ball + 100 = 110
      5. 2 * Ball = 10
      6. Ball = 5"
```

```
Q: What is few-shot vs zero-shot prompting?

A: Zero-shot: No examples, just instruction.
   "Translate to Hindi: Hello, how are you?"

   Few-shot: Provide 2-5 examples before the actual query.
   "English: Hello → Hindi: Namaste
    English: Good morning → Hindi: Suprabhat
    English: How are you? → Hindi: ???"

   Tips:
   → 3-5 examples is usually enough
   → Examples should be diverse
   → Match the format you want in output
```

### RAG Evaluation

```
Q: How to measure RAG quality?

A: RAGAS metrics:
   → Faithfulness: Is answer grounded in provided context?
     (checks hallucination)
   → Answer Relevancy: Does answer address the question?
   → Context Precision: Are retrieved chunks relevant?
   → Context Recall: Are all relevant chunks retrieved?
   → Answer Correctness: Is the answer factually correct?

   Additional metrics:
   → Latency (p50/p95/p99)
   → Token usage per query
   → User satisfaction (thumbs up/down)
   → Retrieval precision@k
```

```
Q: How to reduce hallucination in RAG?

A: Multi-layered approach:
   1. Better Retrieval:
      → High precision search (re-rank top results)
      → Hybrid search for better recall
      → Metadata filtering (date, category, source)

   2. Prompt Engineering:
      → "Only answer based on provided context"
      → "If unsure, say 'I don't know'"
      → "Cite source for each claim"

   3. Self-RAG:
      → LLM checks its own output against context
      → Asks: "Is this supported by the context?"
      → If not, regenerate or abstain

   4. Post-processing:
      → Verify citations exist in context
      → Check for contradiction between claims and context

   5. Lower temperature (0 to 0.2)
```

---

## 5. Behavioral Questions (STAR Method)

### STAR Framework

```
S — Situation: Set the context
T — Task: What needed to be done
A — Action: What YOU specifically did
R — Result: Quantified outcome

Rule: Each story should be 60-90 seconds.
Focus on YOUR actions, not team's.
Always quantify results.
```

### STAR Story 1: Technical Challenge — RAG Accuracy

```
S: Building Document AI RAG system.
   Users complained answers were irrelevant or wrong.
T: Improve RAG accuracy from 70% to 90%+.
A: • Added hybrid search (dense + BM25) with RRF merging
   • Implemented cross-encoder re-ranking
   • Optimized chunking strategy (semantic boundaries)
   • Added metadata filtering (date, category)
   • A/B tested 5 different chunking strategies
R: • Retrieval accuracy improved to 95%
   • User satisfaction up by 40%
   • System handles 100+ documents with <2s latency
```

### STAR Story 2: Career Transition

```
S: As a Laravel developer, saw AI transforming software.
   Wanted to transition but had zero AI experience.
T: Become job-ready AI Engineer in 3 months.
A: • Built 3 production AI projects (RAG, agents, automation)
   • Learned Python, LangChain, vector DBs, LLM APIs
   • Contributed to open source AI tools
   • Documented journey through blog posts
   • Spent 4+ hours daily on learning + building
R: • Successfully transitioned to AI Engineering
   • Built production system with 95% accuracy
   • Can now build systems that were impossible before
```

### STAR Story 3: Production Outage

```
S: Production API was timing out due to LLM latency.
   Users couldn't access the system for 2 hours.
T: Resolve outage and prevent recurrence.
A: • Identified root cause: single LLM provider bottleneck
   • Implemented circuit breaker pattern
   • Added fallback provider (OpenAI → Anthropic)
   • Added request queuing with priority levels
   • Set up monitoring alerts for latency spikes
R: • Failure rate dropped from 15% to 2%
   • System now handles provider failures gracefully
   • Response time reduced by 40%
```

### STAR Story 4: Unclear Requirements

```
S: Client wanted an AI chatbot but didn't know specifics.
   No clear requirements, just "build something smart."
T: Define project scope and deliver working solution.
A: • Built quick MVP in 3 days (basic Q&A bot)
   • Demo to client, got feedback on what they actually wanted
   • Iterated: added document upload, then multi-agent flows
   • Set up weekly demos to validate direction
R: • Delivered full system in 4 weeks vs estimated 8
   • Client got exactly what they needed (not what they asked)
   • Led to 2 more projects from same client
```

### STAR Story 5: Conflict Resolution

```
S: Team disagreed on tech stack for AI project.
   Some wanted OpenAI-only, others wanted open-source.
T: Resolve disagreement and get team aligned.
A: • Researched cost, latency, quality differences
   • Proposed hybrid: OpenAI for complex, open-source for simple
   • Built prototype comparing both approaches
   • Presented data-driven recommendation
R: • Team agreed on hybrid approach unanimously
   • 30% cost savings vs OpenAI-only
   • No compromise on quality
```

### STAR Story 6: Learning New Technology

```
S: Needed to implement multi-agent system but
   had never used LangGraph before.
T: Production-ready multi-agent system in 2 weeks.
A: • Spent 2 days on LangGraph docs and tutorials
   • Built small proof-of-concept agent first
   • Gradually added complexity (tool use, memory, fallbacks)
   • Asked for code review from LangGraph community
R: • System deployed on time
   • Now teaching LangGraph to other team members
   • Open sourced the pattern for community
```

### STAR Story 7: Cost Optimization

```
S: LLM API costs were $500/month and growing.
   Needed to reduce without affecting quality.
T: Reduce API costs by 50%.
A: • Analyzed token usage patterns by feature
   • Implemented semantic caching for frequent queries
   • Switched to GPT-4o-mini for simple tasks (80% of traffic)
   • Added request batching and response streaming
R: • Costs dropped to $200/month (60% reduction)
   • No degradation in user satisfaction
   • Same approach applied to other projects
```

### Mock Interview Script — Behavioral Round

```
Interviewer: "Tell me about yourself."

You:
  "Sure. I started as a Laravel developer building production
  SaaS applications for 3+ years. During this time, I built
  strong foundations in API design, database architecture,
  and system deployment.

  About 3 months ago, I saw how AI was transforming software
  and decided to transition. I built 3 production AI projects:
  a RAG system with 95% accuracy, a multi-agent ERP automation,
  and an AI music generation pipeline.

  Now I specialize in building LangChain/LangGraph applications,
  RAG systems, and AI automation. I'm looking for a role where
  I can combine my production engineering experience with AI skills.

Interviewer: "Why do you want to work here?"
You:
  "I've been following [Company]'s work on [specific project].
  What impressed me most was [specific detail — shows research].

  My Document AI project tackles similar challenges —
  document understanding and intelligent retrieval. I think
  my experience building production RAG systems aligns well
  with what you're building.

  Also, I'm excited about the team's approach to [value].
  I want to work where I can learn from experienced engineers
  while contributing my production expertise."
```

### Common Behavioral Questions — Quick Answers

```
Q: What's your biggest weakness?
A: "I sometimes over-engineer solutions. I'm learning to
    start with simple implementations and iterate rather
    than building the perfect system upfront."

Q: Where do you see yourself in 5 years?
A: "I want to be a senior AI Engineer leading technical
    decisions on AI architecture. Eventually, I'd like to
    architect systems that impact millions of users."

Q: How do you handle criticism?
A: "I welcome it. Code reviews and feedback are how we grow.
    In my last project, a senior engineer suggested better
    chunking strategy — I implemented it and accuracy improved
    by 15%. I make it a point to learn from every review."

Q: Tell me about a time you failed.
A: "I built an agent without proper timeout handling.
    It got stuck in an infinite loop and cost $50 in API calls.
    Since then, I always add max_iterations, timeouts, and
    circuit breakers. Now it's standard in all my projects."

Q: Why should we hire you?
A: "Three reasons:
    1. I build production systems — not just demos
    2. I bring backend engineering discipline (testing,
       error handling, monitoring) to AI projects
    3. I'm hungry to learn and grow. My transition from
       Laravel to AI in 3 months shows my learning ability"
```

---

## 6. Take-Home Projects Strategy

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
  → Don't spend more than 4-6 hours
  → If stuck, document your approach and move on
  → Submit working code over perfect code
```

### Common Take-Home Projects

```
1. Build a RAG system (most common)
   → Take documents, build Q&A
   → Focus on chunking strategy and retrieval quality
   → Show evaluation (RAGAS metrics)

2. Build an agent with tools
   → Calculator + search + database query
   → Focus on error handling and tool selection
   → Show fallback behavior

3. Build an API endpoint
   → Create an AI-powered API
   → Focus on clean architecture, error handling, docs
   → Show streaming responses

4. Data pipeline
   → Process raw data, transform, store
   → Focus on error handling, logging, performance
   → Show monitoring approach
```

### Take-Home Project Checklist

```
Before submitting:
  [ ] Code runs without errors
  [ ] Type hints everywhere
  [ ] Docstrings on all functions
  [ ] Tests pass (at least 80% coverage)
  [ ] Docker file works
  [ ] Docker compose works (if multi-service)
  [ ] README is comprehensive
  [ ] requirements.txt / pyproject.toml present
  [ ] .env.example included
  [ ] Git history is clean
  [ ] No hardcoded secrets

README must include:
  1. Project description (what and why)
  2. Setup instructions (clone, install, run)
  3. Architecture decisions (why this approach)
  4. Key features
  5. API documentation
  6. What you would improve with more time
```

### Mock Interview Script — Take-Home Review

```
Interviewer: "Walk me through your take-home project."

You:
  "I built a RAG system for legal document Q&A.
  Let me walk through the architecture:

  1. Document Processing Pipeline:
     → PDF parser (PyMuPDF) extracts text with page numbers
     → RecursiveCharacterTextSplitter (chunk_size=500, overlap=50)
     → Each chunk preserves metadata (page, section)
     → Embeddings stored in Qdrant with payload

  2. Query Pipeline:
     → Hybrid search (dense + BM25) with RRF
     → Re-rank top 10 with cross-encoder
     → LLM generates answer with citations
     → Temperature=0 for factual accuracy

  3. Key Design Decisions:
     → Why Qdrant? Self-hosted, free, hybrid search built-in
     → Why 500 chunk size? Legal text is dense, smaller chunks
       capture specific clauses better
     → Why re-ranking? Legal needs high precision

  4. What I'd improve:
     → Add user feedback collection
     → Implement multi-query retrieval
     → Add A/B testing framework for chunking strategies
     → Set up monitoring with LangSmith

Interviewer: "What was the hardest part?"
You:
  "The chunking strategy. Legal documents have nested sections.
  Naive splitting would break clause boundaries. I solved this
  by using MarkdownHeaderTextSplitter after converting PDF to
  markdown, preserving the document hierarchy."
```

---

## 7. Post-Interview Follow-Up Strategy

### Within 24 Hours — Thank You Email

```
Template:

Subject: Thank You — AI Engineer Interview

Hi [Interviewer Name],

Thank you for your time today. I really enjoyed learning
about [Company]'s work on [specific topic discussed].

Our conversation about [specific topic, e.g., RAG system scaling]
was particularly insightful. Your approach to [something they said]
gave me some ideas about [related thought].

I'm even more excited about the possibility of contributing
to [Company]. If there are any additional questions or
information needed, please let me know.

Looking forward to hearing about next steps.

Best,
Raushan
```

### After Each Round — Quick Notes

```
Right after interview, write down:
  1. Questions you answered well
  2. Questions you struggled with
  3. Topics you need to review
  4. Key takeaways about the company
  5. Score your performance (1-5)

This helps you:
  → Prepare better for next round
  → Track your improvement
  → Remember details for follow-up
```

### If You Get Rejected

```
Polite follow-up:

Subject: Follow-up on AI Engineer Application

Hi [Name],

Thank you for the update. I appreciate the opportunity
to interview and learn about [Company].

If possible, I'd be grateful for any feedback on my
interview — areas I could improve or skills I should
strengthen.

I really admire [Company]'s work and would love to be
considered for future opportunities that match my skills.

Best,
Raushan

Then: Keep building. Apply to next company.
The right role is out there.
```

### Follow-Up Timeline

```
Day 0: Interview
Day 1: Thank you email
Day 5: If no response, gentle follow-up
  "Just checking in on the status of my application.
   Happy to provide any additional information."

Day 10: If still no response, send one more:
  "I wanted to follow up one more time. I understand
   you're busy. If the role has been filled, I'd
   appreciate a quick update."

Day 14: Move on. Keep applying.
```

---

## 8. Questions to Ask the Interviewer

### For the Hiring Manager

```
About the Role:
  → What does success look like for this role in the first 90 days?
  → What's the biggest challenge the team is facing right now?
  → How is this role measured? What are the key metrics?
  → What would I own vs collaborate on?

About the Team:
  → How big is the AI/ML team?
  → What's the team's technical background?
  → How do engineers collaborate with product/design?

About Growth:
  → What does career progression look like for this role?
  → Are there opportunities to learn and attend conferences?
  → Is there a learning/training budget?
```

### For the Technical Lead

```
About Technology:
  → What's the current AI tech stack?
  → How do you handle LLM API costs and rate limits?
  → What's your approach to RAG vs fine-tuning?
  → How do you evaluate AI system quality in production?

About Architecture:
  → How do you handle model versioning and A/B testing?
  → What's your monitoring and observability setup?
  → How do you manage prompt versions?
  → What's your approach to AI system security?

About Engineering Culture:
  → How often do you do code reviews?
  → What's the testing culture?
  → How do you handle technical debt?
```

### For the Team Member

```
  → What do you enjoy most about working here?
  → What's something you'd change about the team?
  → How would you describe the work-life balance?
  → What's the onboarding process like?
  → What's the most interesting project you've worked on?
```

---

## 9. Resources for Interview Prep

### Practice Platforms

```
- LeetCode: Python medium problems (Neetcode 150)
- System Design: ByteByteGo, System Design Interview (Alex Xu)
- LangChain: Official docs + LangChain Academy
- RAG: Pinecone's RAG guide, LangChain RAG docs
- Behavioral: Prepare 5 stories using STAR method
- Mock Interviews: Pramp, Interviewing.io
```

### YouTube Channels

```
- Neetcode: DSA practice
- ByteByteGo: System design
- TechWithTim: Python general
- AI Engineering: Sam Witteveen, AI Makerspace
- LangChain: LangChain official channel
```

### Books

```
- Designing Data-Intensive Applications (DDIA)
- Machine Learning Engineering (Andriy Burkov)
- System Design Interview (Alex Xu) Vol 1 + 2
- Building LLM Applications (O'Reilly)
- Hands-On Machine Learning (Gerón)
```

### Quick Links

```
- System Design Primer: github.com/donnemartin/system-design-primer
- Neetcode.io: neetcode.io
- LangChain Docs: python.langchain.com
- RAGAS: docs.ragas.io
- Interview Warmup: grow.google/certificates/interview-warmup
- LangChain Academy: academy.langchain.com
- LangGraph Docs: langchain-ai.github.io/langgraph
```
