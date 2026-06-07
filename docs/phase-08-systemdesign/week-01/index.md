# Week 1 — System Design Basics

**Dates:** Aug 18–24, 2026
**Daily:** 5 hours
**Goal:** Core system design concepts samajh lo — jo AI systems mein lagenge

---

## Day 1 — Load Balancers, Caching, CDN

### Load Balancers

Load balancer ka kaam hai: incoming requests ko multiple servers mein distribute karna.

```
                        ┌─────────┐
User ──→  Load        ──→  Server 1
          Balancer    ──→  Server 2
                     ──→  Server 3
```

**Types of Load Balancers:**

| Type | Layer | Example | Use Case |
|------|-------|---------|----------|
| **Hardware** | L4/L7 | F5, Citrix ADC | Enterprise, on-prem |
| **Software** | L4/L7 | Nginx, HAProxy | Cloud native, self-hosted |
| **Cloud** | L4/L7 | AWS ALB/ELB, GCP LB | Serverless, managed |

**Algorithms:**

```python
# Round Robin — simple, sequential
servers = ["server1", "server2", "server3"]
current = 0

def get_server():
    global current
    server = servers[current % len(servers)]
    current += 1
    return server

# Least Connections — active connections dekho
# Nginx config
# upstream backend {
#     least_conn;
#     server server1:8000;
#     server server2:8000;
# }

# IP Hash — same user always same server (session persistence)
# upstream backend {
#     ip_hash;
#     server server1:8000;
#     server server2:8000;
# }
```

**AI Relevance:**
- LLM API calls ko multiple providers mein distribute karo
- Rate limits avoid karne ke liye multiple API keys rotate karo
- GPU servers ke beech requests balance karo

### Caching

Caching = frequently accessed data ko fast storage mein rakhna.

```
Cache Hierarchy (fastest to slowest):
  L1/L2 CPU Cache → RAM → Redis → SSD → Network → Database
```

**Types of Caching:**

```python
# In-Memory Cache (Python dict / lru_cache)
from functools import lru_cache

@lru_cache(maxsize=100)
def get_embedding(text: str):
    # Expensive embedding call
    return embedding_model.encode(text)

# Redis Cache
import redis
r = redis.Redis(host='localhost', port=6379)

def get_embeddings_cached(text: str):
    cache_key = f"emb:{hash(text)}"
    cached = r.get(cache_key)
    if cached:
        return json.loads(cached)
    embedding = get_embedding(text)
    r.setex(cache_key, 3600, json.dumps(embedding))  # 1hr TTL
    return embedding

# CDN (Content Delivery Network)
# Cloudflare, AWS CloudFront — static assets, images, JS
# AI mein: model files, tokenizer files, large documents
```

**Cache Invalidation Patterns:**

| Pattern | How | When to Use |
|---------|-----|-------------|
| **TTL** | Auto-expire after time | Embeddings, API responses |
| **Write-Through** | Write to cache + DB simultaneously | User sessions |
| **Write-Behind** | Write to cache first, async write to DB | High-write scenarios |
| **Cache-Aside** | App checks cache first, miss → load from DB | General purpose |
| **CDN Purge** | API call to clear CDN cache | Static content update |

### Day 1 Exercise

```
Laravel scaling se example socho:
- Tumhari Laravel app mein caching kahan use karte ho?
- Config cache? Route cache? View cache?
- Redis se kya cache karte ho?

Write down 3 places where you can add caching in your AI apps:
1. Embedding cache (same text repeat embedding mat karo)
2. LLM response cache (same question repeat mat pucho)
3. Vector search cache (similar queries ke results cache karo)
```

---

## Day 2 — SQL vs NoSQL, Read Replicas, Sharding

### SQL vs NoSQL

```
SQL ka Power:
  ✅ ACID transactions
  ✅ Joins, complex queries
  ✅ Schema enforcement
  ✅ Mature tooling
  
  ❌ Vertical scaling mostly
  ❌ Schema changes painful
  ❌ Joins slow at scale

NoSQL ka Power:
  ✅ Horizontal scaling
  ✅ Flexible schema
  ✅ Fast key-value lookups
  ✅ Great for specific use cases

  ❌ No/Flexible ACID
  ❌ Limited query capability
  ❌ Consistency issues
```

**AI mein kab kya use kare:**

| Use Case | Best Choice | Why |
|----------|-------------|-----|
| User accounts, auth | PostgreSQL | ACID, transactions |
| Chat history | PostgreSQL / MongoDB | Flexible schema (NoSQL ok) |
| Conversation sessions | Redis | Fast access, TTL |
| Document metadata | PostgreSQL | Structured data |
| Vector embeddings | Qdrant / Pinecone | Specialized for vectors |
| LLM call logs | ClickHouse / Elastic | Time-series, search |
| Agent run traces | PostgreSQL / SQLite | Structured + embedded |

### Read Replicas

```
                    ┌─ Read Replica 1
Primary DB ──Writer──┼─ Read Replica 2
                    └─ Read Replica 3

Primary: writes handle karega
Replicas: reads handle karenge
```

```python
# SQLAlchemy with read replicas
from sqlalchemy import create_engine

read_engine = create_engine("postgresql://user:pass@replica:5432/db")
write_engine = create_engine("postgresql://user:pass@primary:5432/db")

# AI mein use case:
# Read replicas for RAG document metadata queries
# Write to primary for user interactions
# Analytics queries on replica to not slow down main DB
```

### Sharding & Partitioning

```
Sharding = data ko multiple databases mein baantna
  User 1-1000 → DB 1
  User 1001-2000 → DB 2
  User 2001-3000 → DB 3

Partitioning = ek database ke ander data baantna
  Table partitioned by date
  2024-01 data → partition_01
  2024-02 data → partition_02
```

**Sharding Key Selection:**

| Key | Example | Pros | Cons |
|-----|---------|------|------|
| **User ID** | `user_id % 10` | Even distribution | Need mapping |
| **Geographic** | `region = 'east'` | Data locality | Skewed loads |
| **Hash** | `hash(key) % N` | Even distribution | Hard to re-shard |
| **Range** | `A-M` → DB1, `N-Z` → DB2 | Simple | Hot spots |

### Day 2 Exercise

```
ApexERP ke liye DB design socho:
- Users table → PostgreSQL (ACID chahiye)
- Chat messages → ?
- Agent logs → ?
- Document embeddings → Vector DB ya PostgreSQL?
- Conversation summaries → ?

Har choice ke liye reason likho.
```

---

## Day 3 — Message Queues

### Kyun Chahiye?

```
Direct call (synchronous):
  User → FastAPI → LLM API → Wait 5s → Response
  → User ko 5s wait karna pada ❌

Queue approach (asynchronous):
  User → FastAPI → Queue → Worker processes → LLM API
  → User ko immediate "processing" response ✅
  → Worker background mein kaam karta hai ✅
  → Scale kar sakte hain ✅
```

### Message Queue Options

```python
# RabbitMQ — mature, feature-rich
# Use for: complex routing, task queues
# pip install pika

import pika

connection = pika.BlockingConnection(
    pika.ConnectionParameters('localhost'))
channel = connection.channel()
channel.queue_declare(queue='ai_tasks')

channel.basic_publish(
    exchange='',
    routing_key='ai_tasks',
    body='Process document: invoice_123.pdf'
)

# Redis Pub/Sub — lightweight
# Use for: simple pub/sub, real-time updates
import redis
r = redis.Redis()

# Publisher
r.publish('agent_events', 'Agent 1: task completed')

# Subscriber
pubsub = r.pubsub()
pubsub.subscribe('agent_events')
for message in pubsub.listen():
    print(message)

# Kafka — high throughput, persistent
# Use for: event streaming, logging, analytics
# pip install kafka-python

from kafka import KafkaProducer
producer = KafkaProducer(bootstrap_servers='localhost:9092')
producer.send('llm_calls', b'{"model":"gpt-4","tokens":150}')
```

**AI mein Queue Use Cases:**

| Use Case | Queue Type | Why |
|----------|------------|-----|
| Document processing pipeline | RabbitMQ | Each doc needs multiple steps (OCR → chunk → embed → index) |
| LLM call batching | RabbitMQ | Batch multiple LLM calls to save cost |
| Agent task execution | Redis Pub/Sub | Real-time agent status updates |
| Log aggregation | Kafka | High volume, need persistence |
| n8n workflow triggers | Redis | Fast webhook triggers |

### Day 3 Exercise

```
Purvanchal Flow Studio mein queue kaise use hoga:
1. User uploads lyrics → Queue mein daalo
2. Worker 1: Music generate karo (ACE-Step)
3. Worker 2: Vocals generate karo (YuE)
4. Worker 3: FFmpeg mix karo
5. Worker 4: Thumbnail generate karo
6. Worker 5: YouTube publish karo

Har step ek queue message trigger karta hai.
Failure pe retry logic.
```

---

## Day 4 — CAP Theorem & Consistency Models

### CAP Theorem

```
Theorem: Ek distributed system mein teen mein se do hi possible hain:

C — Consistency (har node same data dikhaye)
A — Availability (har request ko response mile)
P — Partition Tolerance (network failure pe bhi system chale)

             CP                    AP
        ┌──────────┐         ┌──────────┐
        │ Banking  │         │  Social  │
        │          │         │  Media   │
        │ Consistency+│      │ Avail    │
        │ Partition│         │ +        │
        │          │         │ Partition│
        └──────────┘         └──────────┘

        CA (real mein rare)
        ┌──────────┐
        │ Single   │
        │ site DB  │
        └──────────┘
```

**AI mein CAP decisions:**

```
Vector DBs: Usually AP
  → Eventual consistency accept karte hain
  → Availability important (user wait nahi kar sakta)
  → Index rebuild async hota hai

LLM APIs: They guarantee availability (AP)
  → Consistency? LLM khud non-deterministic hai
  → Chinta mat karo

Session state: CP
  → User session consistent hona chahiye
  → Redis/Tigris use karo
  → Partition tolerance ke liye replication

Chat history: CP preferred
  → Messages order consistent
  → Could use AP with version vectors
```

### Consistency Models

```python
# Strong Consistency
# Read ke baad latest write dikhe
# Trade-off: slow, less available
# Use: transactions, payments

# Eventual Consistency
# Read ke baad thoda purana data dikh sakta hai
# Eventually same ho jayega
# Use: social media feeds, search indexes

# Read-Your-Writes Consistency
# Tumne jo likha, tumhe turant dikhe
# Doosron ko thodi der lag sakti
# Use: user profile updates

# Monotonic Reads
# Ek baar jo data dekha, future mein uska purana version nahi dikhna chahiye
# Use: timeline, news feed
```

### Day 4 Exercise

```
ApexERP ke har module ke liye CAP decision:

1. Order Management → CP (transactions matter)
2. Chat System → AP (speed > consistency)
3. Inventory → CP (stock count accurate)
4. Agent run logs → AP (just logging)
5. User sessions → CP (consistency)
6. Document vector store → AP (eventual consistency fine)
```

---

## Day 5 — Microservices vs Monolith & Rate Limiting

### Monolith vs Microservices

```
Monolith:
  ┌─────────────────────────┐
  │  FastAPI App            │
  │  ├─ RAG Module          │
  │  ├─ Agent Module        │
  │  ├─ Auth                │
  │  └─ API                 │
  └─────────────────────────┘

  ✅ Simple, easy to develop
  ✅ Single deploy
  ✅ Easy testing
  ❌ Everything fails together
  ❌ Can't scale parts independently

Microservices:
  ┌─────────┐  ┌─────────┐  ┌─────────┐
  │ RAG API │  │ Agent   │  │ Auth    │
  │ Service │  │ Service │  │ Service │
  └────┬────┘  └────┬────┘  └────┬────┘
       └────────────┼────────────┘
                    │
              ┌─────┴──────┐
              │ API Gateway │
              └────────────┘

  ✅ Scale individual parts
  ✅ Independent teams
  ✅ Different tech stacks
  ❌ Complex networking
  ❌ Debugging hard
  ❌ Data consistency issues
```

**AI Engineer ka approach:**

```
Start with monolith (FastAPI):
  → 1-2 AI features
  → Single project
  → Quick to ship

Gradually split:
  → RAG service alag (high CPU/memory)
  → Agent service alag (high LLM usage)
  → Background workers alag
  → Vector DB alag service
```

### Rate Limiting

```
Kyun chahiye:
- LLM API rate limits na mare
- Server overload na ho
- Cost control
- Fair usage sab users ke liye
```

**Algorithms:**

```python
# Token Bucket
class TokenBucket:
    def __init__(self, rate: int, capacity: int):
        self.rate = rate  # tokens per second
        self.capacity = capacity  # max tokens
        self.tokens = capacity
        self.last_refill = time.time()

    def allow_request(self) -> bool:
        now = time.time()
        elapsed = now - self.last_refill
        self.tokens = min(
            self.capacity,
            self.tokens + elapsed * self.rate
        )
        self.last_refill = now

        if self.tokens >= 1:
            self.tokens -= 1
            return True
        return False

# Usage: LLM API calls
openai_limiter = TokenBucket(rate=10, capacity=20)
# 10 requests/sec, burst upto 20

# Sliding Window (popular, used by most APIs)
class SlidingWindow:
    def __init__(self, window_size: int, max_requests: int):
        self.window_size = window_size  # seconds
        self.max_requests = max_requests
        self.requests = []

    def allow_request(self) -> bool:
        now = time.time()
        # Purane requests hatao
        self.requests = [
            t for t in self.requests
            if t > now - self.window_size
        ]
        if len(self.requests) < self.max_requests:
            self.requests.append(now)
            return True
        return False

# Real-world example: OpenAI rate limits
from openai import RateLimitError
import time

def call_with_retry(client, **kwargs):
    max_retries = 3
    for attempt in range(max_retries):
        try:
            return client.chat.completions.create(**kwargs)
        except RateLimitError:
            wait = 2 ** attempt  # exponential backoff
            print(f"Rate limited. Waiting {wait}s...")
            time.sleep(wait)
    raise Exception("Max retries exceeded")
```

**Rate Limiting Strategy for AI Apps:**

```
Strategy:
1. Per-user rate limit (10 req/min per user)
2. Global rate limit (100 req/min total)
3. LLM provider rate limit (OpenAI: 500 RPM)
4. Queue for overflow

Implementation:
  Redis + sliding window
  FastAPI middleware

Example:
  - Document AI: 10 req/min free, 100 req/min paid
  - ApexERP: 1 req/sec per tenant
  - Flow Studio: 5 concurrent generation tasks
```

### Day 5 Exercise

```
Document AI ke liye rate limiting design karo:

Users: 1000 daily active
Peak: 50 concurrent
OpenAI limit: 500 RPM
Cost budget: $50/day

Questions:
1. Per-user rate limit kya rakhoge?
2. Global rate limit kya rakhoge?
3. Queue ya direct call?
4. Burst allow karoge?
```

---

## Day 6 — Real-World Examples from Laravel/Scaling

### What You Already Know

```
Tumne Laravel mein yeh kiya hai:

✅ Database read replicas (MySQL master-slave)
✅ Redis caching (config, session, cache)
✅ Queue jobs (Horizon + Redis)
✅ Load balancing (multiple app servers)
✅ Nginx reverse proxy
✅ CDN (Cloudflare)
✅ Database indexing

Ab AI engineering mein same concepts apply hote hain
— bas implementation different hai.
```

### Comparison Table

| Concept | Laravel | AI Engineering |
|---------|---------|----------------|
| **Queue** | Horizon + Redis Jobs | Celery + RabbitMQ / LangGraph |
| **Cache** | Redis (config, route, view) | Redis (LLM responses, embeddings) |
| **DB Replicas** | MySQL read replicas | PostgreSQL replicas for chat history |
| **CDN** | Cloudflare for assets | Cloudflare for documents, model files |
| **Rate Limiting** | `throttle` middleware | Token bucket for LLM APIs |
| **Background Jobs** | Queue worker | Celery, n8n, LangGraph background |
| **Scheduling** | Laravel Scheduler | cron, Celery Beat, APScheduler |
| **Middleware** | HTTP middleware | FastAPI middleware, chain middlewares |

### Laravel Pattern → AI Pattern Mapping

```python
# Laravel Queue Job
# ProcessPodcast::dispatch($podcast)
# php artisan queue:work

# Python equivalent with Celery
from celery import Celery

app = Celery('ai_tasks', broker='redis://localhost:6379')

@app.task
def process_document(document_id: int):
    doc = get_document(document_id)
    chunks = split_document(doc)
    embeddings = generate_embeddings(chunks)
    store_embeddings(embeddings)
    return {"status": "done", "chunks": len(chunks)}

# Call it
process_document.delay(123)

# Laravel Cache::remember
# AI equivalent with Redis caching
def get_llm_response_cached(prompt: str) -> str:
    cache_key = f"llm:{hash(prompt)}"
    cached = redis.get(cache_key)
    if cached:
        return cached
    response = llm.invoke(prompt)
    redis.setex(cache_key, 3600, response)
    return response
```

### Day 6 Exercise

```
Apne Laravel experience se 3 system design patterns identify karo
jo AI systems mein bhi apply hote hain:

1. Pattern: _____________
   Laravel use: _________
   AI equivalent: _______

2. Pattern: _____________
   Laravel use: _________
   AI equivalent: _______

3. Pattern: _____________
   Laravel use: _________
   AI equivalent: _______
```

---

## Day 7 — REST + Revision

### Full Week Revision

Har topic ka 1-line summary:

```
Load Balancers → Requests distribute karna, round-robin/least_conn
Caching → Redis/CDN, TTL set karo, cache invalidation patterns yaad rakho
SQL vs NoSQL → ACID vs Flexible, use-case decide karta hai
Read Replicas → Writes primary, reads replicas
Sharding → Data horizontally split karo
Message Queues → Async processing, RabbitMQ/Kafka/Redis
CAP Theorem → CP ya AP, teeno nahi ho sakte
Microservices → Start monolith, split when needed
Rate Limiting → Token bucket, sliding window, Redis
```

### Final Mini-Project

```
Design a system (diagram + explanation) for:

"Real-time chat support system with 5000 concurrent users"

Include:
1. Load balancing strategy
2. Database choice + sharding
3. Message queue (for AI responses)
4. Caching strategy
5. Rate limiting plan
6. CAP theorem decision

Use a whiteboard / draw.io / excalidraw
```

---

## Resources

- **System Design Primer** — [github.com/donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer)
- **High Scalability Blog** — Real-world system design case studies
- **Designing Data-Intensive Applications (book)** — Bible of system design
- **ByteByteGo YouTube** — Visual system design explanations
- **Grokking the System Design Interview** — Interview focused
- **Alex Xu (ByteByteGo)** — System Design Interview volumes
