<div class="module-hero">
  <div class="module-hero-icon">🏛️</div>
  <div class="module-hero-body">
    <h1>System Design — Bada Soch, Bada Banao</h1>
    <p>System design senior role aur FAANG interviews mein make-or-break hota hai. Ye section tujhe fundamentals se lekar advanced distributed systems tak le jayega.</p>
    <div class="module-hero-meta">
      <span class="tag tag-hot">Complete Course</span>
      <span class="tag tag-star">FAANG Interview</span>
      <span class="tag tag-method">Advanced</span>
    </div>
  </div>
</div>

## Learning Roadmap

<div class="roadmap-path">
  <div class="roadmap-step" data-step="1"><strong>Foundations</strong><span>CAP theorem, scalability metrics, network fundamentals</span></div>
  <div class="roadmap-step" data-step="2"><strong>Core Building Blocks</strong><span>SQL/NoSQL, caching, load balancing, reverse proxy</span></div>
  <div class="roadmap-step" data-step="3"><strong>API Design &amp; Messaging</strong><span>REST, GraphQL, gRPC, Kafka, RabbitMQ</span></div>
  <div class="roadmap-step" data-step="4"><strong>Advanced Patterns</strong><span>Microservices, circuit breaker, observability</span></div>
  <div class="roadmap-step" data-step="5"><strong>Storage &amp; Processing</strong><span>S3, CDN, Elasticsearch, MapReduce, Spark</span></div>
  <div class="roadmap-step" data-step="6"><strong>Case Studies</strong><span>URL shortener, Twitter, Instagram, Uber, WhatsApp</span></div>
  <div class="roadmap-step" data-step="7"><strong>Interview Prep</strong><span>PEDALS framework, mock interviews, FAANG prep</span></div>
</div>

<div class="tip-banner">
  <span class="tip-badge">💡 System Design Study Tip</span>
  <strong>Theory + Practice dono chahiye:</strong> Pehle concept samajh (YouTube + books), phir whiteboard pe draw kar. Har system design problem ko 3 baar practice kar — pehle bina dekhe, phir notes ke saath, phir time limit mein. Mock interviews ke liye Pramp ya Interviewing.io use kar. Aur haan, <strong>Hinglish mein sochne mein koi shame nahi</strong> — jab tak concepts clear hain, language matter nahi karti!
</div>

## Course Structure

<table class="table-dash">
  <thead><tr><th>Chapter</th><th>Topic</th><th>Key Highlights</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Foundations</td><td>CAP theorem, consistency models, scalability metrics, network fundamentals</td></tr>
    <tr><td>2</td><td>Core Building Blocks</td><td>SQL/NoSQL, caching strategies (LRU, LFU, TTL), load balancing, reverse proxy</td></tr>
    <tr><td>3</td><td>API Design &amp; Messaging</td><td>REST, GraphQL, gRPC, Kafka, RabbitMQ, event sourcing, saga pattern, CQRS</td></tr>
    <tr><td>4</td><td>Advanced Patterns</td><td>Microservices, circuit breaker, service mesh, observability (Prometheus, Grafana, ELK)</td></tr>
    <tr><td>5</td><td>Data Storage &amp; Processing</td><td>S3, CDN, Elasticsearch, MapReduce, Spark, Kafka Streams</td></tr>
    <tr><td>6</td><td>Distributed Systems</td><td>Consensus (Paxos/Raft), distributed transactions, consistent hashing, gossip protocol</td></tr>
    <tr><td>7</td><td>Reliability &amp; Monitoring</td><td>SLA/SLO/SLI, chaos engineering, incident response, distributed tracing</td></tr>
    <tr><td>8</td><td>Security &amp; Infrastructure</td><td>OAuth 2.0, JWT, rate limiting, DDoS protection, secrets management</td></tr>
    <tr><td>9</td><td>Advanced Patterns</td><td>CQRS, event sourcing, bucket 4-rate limiting, bloom filters, Merkle trees</td></tr>
    <tr><td>10</td><td>Interview Mastery</td><td>Mock interviews, whiteboarding, 40+ case studies, FAANG-specific prep</td></tr>
  </tbody>
</table>

Detailed breakdown syllabus mein hai — har chapter ka topic, hands-on lab, aur exercise ke saath.

---

<div class="phase-section">
  <div class="phase-header"><span>📐 Foundations &amp; Core Building Blocks</span></div>
  <div class="phase-body">

### Chapter 1 — Foundations

**Core Principles**
- High-Level Design (HLD) vs Low-Level Design (LLD)
- RADIO Framework (Requirements, Architecture, Design, Identify, Optimize)
- Functional vs Non-Functional Requirements

**Scalability Fundamentals**
- Horizontal vs Vertical Scaling — kab kya use karein
- Metrics: QPS, Latency, Throughput, Availability (The Nines — 99.9% vs 99.99% vs 99.999%)
- Back-of-Envelope Calculations: DAU, storage, bandwidth, cache estimates
- Reliability: MTBF, MTTR, SPOF elimination

**Distributed Systems Basics**
- CAP Theorem — CP (Banking) vs AP (Social Media) trade-offs
- Consistency Models: Strong, Eventual, Causal, Read-Your-Writes
- Network Fundamentals: TCP vs UDP, HTTP/2 vs HTTP/3, WebSockets, Long Polling vs SSE
- Latency Numbers Every Programmer Should Know

Lab: Twitter-like system ke liye capacity estimation (200M DAU, 50 tweets/day)

### Latency Numbers Every Programmer Should Know

Ye table yaad rakh — interview mein jab tu storage ya latency justify karega, tab kaam aayega:

| Operation | Latency | Comparison |
|---|---|---|
| L1 cache reference | 0.5 ns | 1 sec = 2B L1 refs |
| Branch mispredict | 5 ns | |
| L2 cache reference | 7 ns | 14x L1 |
| Mutex lock/unlock | 25 ns | |
| Main memory reference | 100 ns | 200x L1 |
| Compress 1KB with Zippy | 3,000 ns (3 µs) | |
| Send 2K bytes over 1 Gbps network | 44 ns | |
| SSD random read | 16,000 ns (16 µs) | 160x memory |
| Read 1MB sequentially from SSD | 49,000 ns (49 µs) | ~3K MB/s |
| Read 1MB sequentially from disk | 825,000 ns (825 µs) | ~1.2 GB/s |
| Round trip within same datacenter | 500,000 ns (500 µs) | |
| Round trip CA → Netherlands | 150,000,000 ns (150 ms) | |

**Mnemonic**: L1 = 0.5ns (light), memory = 100ns (100x slower), SSD = 16µs (160x memory), disk = 825µs (50x SSD), cross-Atlantic = 150ms (200x disk).

### Consistency Models — Real World Examples

**Strong Consistency**: Har read latest write reflect kare. Google Spanner — TrueTime API use karta hai (GPS + atomic clocks) for external consistency. Banking systems, inventory management.

**Eventual Consistency**: Given enough time, all replicas converge. DynamoDB (default), DNS (TTL propagation). Update ho gaya, but read ko purana data mil sakta hai for some time.

**Causal Consistency**: Related operations ka order preserve karo. LinkedIn — user post pe comment, comment should appear after post. Agar cause-effect hai, toh order guarantee chahiye.

**Read-Your-Writes**: Write ke baad, wahi user apna write dekh sake. Facebook — tu comment kare, toh refresh pe immediately dikhe. But friend ko thodi der baad dikhe (eventual).

**Consistency in FAANG**:
- Google Spanner: External consistency (TrueTime + Paxos)
- Amazon DynamoDB: Eventually consistent by default, optional strong
- Facebook TAO: Eventually consistent (async replication)
- LinkedIn: Read-after-write for profiles, eventual for feed

### Back-of-Envelope Calculations — 3 Real Examples

**Example 1: Twitter** (200M DAU, 400M tweets/day)
```
DAU = 200M
Tweets per day = 400M
Writes/sec average = 400M / 86,400 ≈ 4,600
Peak writes/sec = 4,600 × 2 = ~9,200
Reads (timeline views) = 1B/day ≈ 11,500 reads/sec
Storage per tweet = ~1KB (text + metadata + media URLs)
Daily storage = 400M × 1KB = 400GB
5 year storage = 400GB × 365 × 5 ≈ 730TB
Bandwidth (writes) = 400GB / 86,400 ≈ 4.6 MB/s
Bandwidth (reads) = 1B × 1KB / 86,400 ≈ 11.5 MB/s
```

**Example 2: YouTube** (2B MAU, 500 hrs video uploaded/min)
```
MAU = 2B
DAU ≈ 500M
Video uploads/min = 500 hrs
Video uploads/sec = 500 × 60 / 3,600 ≈ 8.3 hrs/sec
Storage per min video = 50MB (compressed 1080p)
Daily storage = 500 hrs × 60 min × 50MB ≈ 1.5PB/day
Bandwidth (streaming) = 1B hrs watched/day
  = 1B × 60 min × 50MB / 86,400 ≈ 35 TB/s
CDN saves the day — edge servers cache popular content
Cache hit ratio ≈ 95% → origin bandwidth drops to ~1.75 TB/s
```

**Example 3: Instagram** (1B MAU, 100M photos/day)
```
MAU = 1B
DAU ≈ 500M
Photos uploaded/day = 100M
Average photo size = 2MB (compressed)
Daily storage = 100M × 2MB = 200TB
Yearly storage = 200TB × 365 ≈ 73PB
Reads/day = 500M users × 300 photos viewed ≈ 150B photo views/day
Reads/sec = 150B / 86,400 ≈ 1.7M reads/sec
Bandwidth (reads) = 1.7M × 2MB ≈ 3.4 TB/s
CDN required — cache at edge, pre-fetch popular content
Metadata reads = 500M × 200 feed items × 500B ≈ 50TB/day
Redis cache for metadata: ~5TB RAM needed (80% cache hit → reduce DB reads 5x)
```

### HLD vs LLD — Detailed Comparison

| Aspect | High-Level Design (HLD) | Low-Level Design (LLD) |
|---|---|---|
| **Focus** | System architecture, components, data flow | Individual component internals, algorithms, code |
| **Audience** | Interviewer (senior role) | Engineering team, implementers |
| **Abstraction** | Boxes and arrows — black boxes | White-box — classes, methods, data structures |
| **Diagram** | 5-10 boxes with arrows, data flow | Class diagrams, sequence diagrams, ERDs |
| **Examples** | "We'll use microservices with Kafka" | "PostService class uses Repository pattern" |
| **Metrics** | QPS, latency, availability, storage | Time complexity, memory, thread-safety |
| **Tools** | Draw.io, Excalidraw, whiteboard | UML, code, pseudocode |
| **Interview** | System Design round (45-60 min) | LLD round / Coding round |
| **FAANG focus** | Amazon, Google, Meta — architecture | Some companies ask OOP design (e.g., Parking Lot) |

### Chapter 2 — Core Building Blocks

**Databases &amp; Storage**
- SQL: ACID, normalization (1NF-3NF-BCNF), indexing (B-Tree, B+ Tree, Hash Index)
- NoSQL: Document (MongoDB), Key-Value (Redis), Column-Family (Cassandra), Graph (Neo4j)
- BASE vs ACID — kab kya select karein
- Sharding: Range-based, Hash-based, Directory-based, Consistent Hashing
- Replication: Master-Slave, Multi-Master, Synchronous vs Asynchronous

**Caching Strategies**
- Cache-Aside, Write-Through, Write-Behind, Read-Through
- Eviction: LRU, LFU, FIFO, TTL
- Distributed Caching: Redis (data structures, pub/sub, cluster, sentinel), Memcached
- Cache Stampede Problem aur solutions

**Load Balancing &amp; Proxies**
- Layer 4 (Transport) vs Layer 7 (Application)
- Algorithms: Round Robin, Least Connections, IP Hash, Geo-based
- Tools: Nginx, HAProxy, AWS ELB/ALB
- Reverse Proxy: SSL termination, rate limiting, API Gateway pattern

Lab: Implement Consistent Hashing in Python + LRU Cache implementation

### Database Indexing Deep Dive

Indexing ke bina DB = library bina catalog ke. B+Tree is the king.

**B+Tree Structure**:
```
             [50, 80]
           /    |     \
     [10,30]  [60,70]  [90,100]
     /  |  \    /  |  \   /  |  \
   [1,5][20] [40][55][65][75][85][95]
```
- Internal nodes: keys only (pointers to children)
- Leaf nodes: keys + pointers to actual data (linked list)
- Fanout (branching factor) = usually ~100-200
- Height ≈ log_fanout(N) → for 1B records, height ≈ 4-5
- Range queries super fast (linked leaf nodes)

**Index Types**:
- **Primary Index**: Clustered (data sorted by key) — InnoDB
- **Secondary Index**: Non-clustered (points to primary key)
- **Composite Index**: (col1, col2) — leftmost prefix rule
- **Covering Index**: All columns needed by query are in index (no table access)
- **Full-Text Index**: Inverted index for text search

**When Indexing Fails**:
- Low cardinality columns (boolean, gender) — doesn't filter enough
- `LIKE '%pattern'` — can't use B+Tree (needs full scan)
- Too many indexes — write overhead (each index updated on INSERT)
- Non-selective queries — optimizer may still full-scan

### SQL vs NoSQL — Decision Framework

| Factor | SQL (PostgreSQL, MySQL) | NoSQL (MongoDB, Cassandra, Redis) |
|---|---|---|
| **Schema** | Fixed, predefined | Flexible, dynamic |
| **ACID** | Full ACID support | BASE (eventual consistency) |
| **Scaling** | Vertical (sharding is complex) | Horizontal (built-in) |
| **Joins** | Native support | Embedding or app-level joins |
| **Use when** | Complex queries, strict consistency | High throughput, flexible schema, scale |

**Decision Tree**:
```
Need ACID transactions? → SQL
Complex joins/reporting? → SQL
Fixed schema? → SQL

High write throughput? → NoSQL (Cassandra)
Flexible schema? → NoSQL (MongoDB)
Caching/sessions? → NoSQL (Redis)
Graph data? → NoSQL (Neo4j)
Time-series? → NoSQL (InfluxDB)
```

### Redis Data Structures Deep Dive

Redis is not just key-value — 11+ data structures with atomic operations.

**String** (caching, counters, distributed locks):
```bash
SET user:123 '{"name":"Raushan"}' EX 3600
INCR page_view:homepage
SETNX lock:resource "1"  # distributed lock
GETSET key "new_value"   # atomic get + set
```

**List** (message queue, timeline, latest items):
```bash
LPUSH user:123:notifications "new_follower"
BRPOP queue 0   # blocking pop (like Kafka lite)
LLEN user:123:notifications
LRANGE user:123:notifications 0 9  # latest 10
```

**Set** (unique items, tags, followers):
```bash
SADD post:456:tags "system-design" "redis"
SISMEMBER user:123:followers user:456  # is following?
SINTER user:123:followers user:456:followers  # mutual friends
SPOP lottery_pool 1  # random pick
```

**Sorted Set** (leaderboard, timeline, rate limiting):
```bash
ZADD leaderboard:global 1500 "user:123"
ZINCRBY leaderboard:global 10 "user:123"
ZREVRANGE leaderboard:global 0 9 WITHSCORES  # top 10
ZRANK leaderboard:global "user:123"  # rank of user
ZREMRANGEBYSCORE cache:timeline 0 1000  # TTL-based eviction
```

**Hash** (object storage, session, profile):
```bash
HSET user:123 name "Raushan" age 25 city "Patna"
HGETALL user:123
HINCRBY user:123:wallet balance 500
```

**Bitmap** (analytics, bloom filter lite):
```bash
SETBIT user:123:signins 100 1  # day 100 signed in
BITCOUNT user:123:signins  # total sign-ins
BITOP AND result user:123:signins user:456:signins  # common days
```

**HyperLogLog** (unique count estimation, 12KB per key, 0.81% error):
```bash
PFADD page_view:unique "user:123" "user:456"
PFCOUNT page_view:unique  # ~2 (approximate unique count)
PFMERGE result page_view:today page_view:yesterday
```

### CDN Deep Dive

**Origin Pull vs Origin Push**:

| Aspect | Pull | Push |
|---|---|---|
| **How** | Edge requests origin on cache miss | Proactively upload to CDN |
| **When** | On-demand, automatic | CI/CD pipeline, manual |
| **TTL** | Set via Cache-Control headers | Explicit invalidation |
| **Use** | General web content, APIs | Static assets, media files |

**Cache Control**:
```
Cache-Control: public, max-age=31536000, immutable  # versioned assets
Cache-Control: private, max-age=300                  # user-specific
Cache-Control: no-cache, no-store                    # dynamic content
```

**Invalidation Strategies**:
- Versioned URLs: `/static/js/app.v2.js` → no invalidation needed
- Cache tags: CloudFront — invalidate by tag, not path
- Purge API: Full or path-based purge
- TTL expiry: Let it expire naturally

**Private Content**:
- Signed URLs (CloudFront signed URLs, Cloudflare signed tokens)
- Origin access identity (OAI) — S3 bucket only accessible via CDN
- Geo-restriction: Whitelist/blacklist countries

### Load Balancer Comparison

| Tool | Layer | Protocol | Features | Use Case |
|---|---|---|---|---|
| **Nginx** | L7 | HTTP/HTTPS, TCP, UDP | Reverse proxy, SSL termination, caching, rate limiting, WebSocket | Web apps, API gateway, static files |
| **HAProxy** | L4/L7 | TCP, HTTP | Ultra low latency, ACLs, health checks, stickiness, advanced metrics | High-performance TCP, WebSockets, Redis |
| **AWS ALB** | L7 | HTTP/HTTPS, gRPC, WebSocket | Path-based routing, host-based, WAF integration, auto scaling | AWS-native apps, ECS/EKS, Lambda |
| **GCP LB** | L4/L7 | HTTP/HTTPS, TCP/SSL | Global anycast, CDN integration, Cloud Armor, traffic splitting | Global apps, GKE, serverless |

**Algorithm Selection**:
- Round Robin: Equal load, simple
- Least Connections: Unequal request durations
- IP Hash: Session persistence (stateful apps)
- Consistent Hashing: Cache affinity

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>🔌 API Design, Messaging &amp; Advanced Patterns</span></div>
  <div class="phase-body">

### Chapter 3 — API Design &amp; Messaging

**API Design**
- RESTful principles: HTTP methods, status codes, versioning, pagination, HATEOAS
- GraphQL: Schema, queries/mutations/subscriptions, DataLoader (N+1 problem)
- gRPC: Protocol Buffers, HTTP/2, 4 types of streaming

**Message Queues**
- Kafka: Brokers, topics, partitions, consumer groups, offset management, Kafka Streams
- RabbitMQ: Exchanges (Direct, Fanout, Topic, Headers), dead letter queues, durability
- Amazon SQS: Standard vs FIFO, SNS + SQS pattern
- Delivery guarantees: At-least-once, At-most-once, Exactly-once

**Event-Driven Architecture**
- Event Sourcing: Event store as source of truth, temporal queries, replay
- CQRS: Command Query Responsibility Segregation
- Saga Pattern: Choreography-based vs Orchestration-based, compensating transactions

Lab: Build notification system with message queues + event streaming pipeline with Kafka

### REST API Design Best Practices

**URL Naming**:
```
GET    /api/v1/users                    # List users
POST   /api/v1/users                    # Create user
GET    /api/v1/users/{id}               # Get user
PUT    /api/v1/users/{id}               # Replace user
PATCH  /api/v1/users/{id}               # Partial update
DELETE /api/v1/users/{id}               # Delete user
GET    /api/v1/users/{id}/posts         # User's posts (sub-resource)
```

**Pagination**:
```
GET /api/v1/users?page=2&per_page=20          # Page-based
GET /api/v1/users?cursor=abc123&limit=20      # Cursor-based (recommended)
Response: { "data": [...], "next_cursor": "xyz789", "prev_cursor": "abc123" }
```

**Filtering & Sorting**:
```
GET /api/v1/users?role=admin&status=active    # Filtering
GET /api/v1/users?sort=-created_at,+name      # Sort ( - = desc, + = asc )
GET /api/v1/users?fields=id,name,email        # Field selection (sparse fields)
```

**Idempotency**:
```
POST /api/v1/payments
Idempotency-Key: uuid-1234                    # Same key → same result (safe retry)
PUT, DELETE are naturally idempotent
```

**HATEOAS** (Hypermedia as Engine of App State):
```json
{
  "id": 123,
  "name": "Raushan",
  "_links": {
    "self": { "href": "/api/v1/users/123" },
    "posts": { "href": "/api/v1/users/123/posts" },
    "friends": { "href": "/api/v1/users/123/friends" }
  }
}
```

### gRPC Streaming Types with Server Code

gRPC 4 types of streaming — HTTP/2 ke upar Protocol Buffers.

**Unary** (request → response, like REST):
```protobuf
rpc GetUser(GetUserRequest) returns (User);
```

**Server-Streaming** (one request, multiple responses):
```protobuf
rpc ListPosts(ListPostsRequest) returns (stream Post);
```
```python
# Server
async def ListPosts(self, request, context):
    for post in db.get_posts(request.user_id):
        yield Post(id=post.id, content=post.content)
```

**Client-Streaming** (multiple requests, one response):
```protobuf
rpc UploadPhotos(stream Photo) returns (UploadStatus);
```
```python
# Server
async def UploadPhotos(self, request_iterator, context):
    count = 0
    async for photo in request_iterator:
        await storage.save(photo)
        count += 1
    return UploadStatus(count=count)
```

**Bidirectional Streaming** (both directions stream):
```protobuf
rpc Chat(stream ChatMessage) returns (stream ChatMessage);
```
```python
# Server
async def Chat(self, request_iterator, context):
    async for msg in request_iterator:
        # Process incoming, send to other subscribers
        await broadcast(msg)
        yield ChatMessage(from_user=msg.to_user, text="received")
```

### Kafka Producer/Consumer Examples

**Python Producer**:
```python
from kafka import KafkaProducer
import json

producer = KafkaProducer(
    bootstrap_servers=['localhost:9092'],
    value_serializer=lambda v: json.dumps(v).encode('utf-8'),
    acks='all',           # Wait for all replicas
    retries=3,
    linger_ms=10          # Batch small messages
)

producer.send('user-events', {
    'user_id': 123,
    'event': 'page_view',
    'timestamp': 1234567890
})
producer.flush()
```

**Python Consumer with Consumer Groups**:
```python
from kafka import KafkaConsumer
import json

consumer = KafkaConsumer(
    'user-events',
    bootstrap_servers=['localhost:9092'],
    group_id='analytics-service',    # Partition assignment
    auto_offset_reset='earliest',    # Start from beginning if no offset
    enable_auto_commit=False,        # Manual commit for exactly-once
    value_deserializer=lambda v: json.loads(v.decode('utf-8'))
)

for msg in consumer:
    event = msg.value
    print(f"Partition: {msg.partition}, Offset: {msg.offset}")
    process_event(event)
    consumer.commit()  # Commit offset after processing
```

**Java Producer**:
```java
Properties props = new Properties();
props.put("bootstrap.servers", "localhost:9092");
props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");
props.put("acks", "all");
KafkaProducer<String, String> producer = new KafkaProducer<>(props);
producer.send(new ProducerRecord<>("user-events", "user123", jsonData));
producer.close();
```

### RabbitMQ Exchange Types

**Direct Exchange** (routing key exact match):
```
Exchange: order_events
  Queue: payment_queue → routing_key: "payment.completed"
  Queue: email_queue   → routing_key: "order.confirmed"
Producer sends with routing_key="payment.completed" → goes to payment_queue
```

**Fanout Exchange** (broadcast to all queues):
```
Exchange: system_alerts
  Queue: email_notifications
  Queue: sms_notifications
  Queue: webhook_queue
Any message → all 3 queues get it
```

**Topic Exchange** (pattern-based routing):
```
Exchange: logs
  Queue: error_logs  → routing_pattern: "*.error.*"
  Queue: auth_logs   → routing_pattern: "auth.#"
  # = one word, * = zero or more words
Message "auth.login.error" → matches both error_logs and auth_logs
```

**Headers Exchange** (match by header attributes):
```
Exchange: routing_by_header
  Queue: vip_queue → headers: { "tier": "vip", "x-match": "all" }
  Queue: promo_queue → headers: { "campaign": "summer", "x-match": "any" }
```

### Event Sourcing — Banking Example

Event Sourcing mein state nahi, events store karte hain. Current balance = sum of all events.

```python
# Events (stored in event store — append-only log)
events = [
    {"type": "ACCOUNT_CREATED", "account_id": "ACC123", "owner": "Raushan", "ts": 1},
    {"type": "DEPOSIT", "account_id": "ACC123", "amount": 10000, "ts": 2},
    {"type": "WITHDRAWAL", "account_id": "ACC123", "amount": 2000, "ts": 3},
    {"type": "TRANSFER_OUT", "account_id": "ACC123", "amount": 3000, "to": "ACC456", "ts": 4},
]

# Rebuild state by replaying events
def get_balance(account_id):
    balance = 0
    for event in get_events(account_id):
        if event["type"] == "DEPOSIT":
            balance += event["amount"]
        elif event["type"] == "WITHDRAWAL":
            balance -= event["amount"]
        elif event["type"] == "TRANSFER_OUT":
            balance -= event["amount"]
        elif event["type"] == "TRANSFER_IN":
            balance += event["amount"]
    return balance  # 10000 - 2000 - 3000 = 5000

# Benefits: Full audit trail, temporal queries (balance at any point in time)
# Event store = Kafka (immutable log) or EventStoreDB, PostgreSQL
```

### CQRS — Separate Read/Write Models

Command Query Responsibility Segregation — read aur write ke alag models.

```python
# Write Model (Commands — change state)
class WriteAccount:
    def deposit(self, account_id, amount):
        event_store.append({"type": "DEPOSIT", "account_id": account_id, "amount": amount})

    def withdraw(self, account_id, amount):
        event_store.append({"type": "WITHDRAWAL", "account_id": account_id, "amount": amount})

# Read Model (Queries — denormalized for fast reads)
class ReadAccount:
    def get_balance(self, account_id):
        return cache.get(f"balance:{account_id}")

    def get_transactions(self, account_id, page=1):
        return read_db.query("SELECT * FROM transactions WHERE account_id=? ORDER BY ts DESC LIMIT 20 OFFSET ?", account_id, (page-1)*20)

# Projection — sync write to read (eventually consistent)
# Event → Consumer → Update read DB + cache
```

**When to use CQRS**:
- Read vs write workload asymmetric (99% reads, 1% writes)
- Different data shapes for read vs write
- Need to optimize both independently
- Team separation (CQRS teams)

### Saga Pattern — Choreography Example

Distributed transaction without 2PC. Each service publishes event on success, compensating event on failure.

**Choreography-based Saga** (each service publishes events):
```
Order Service:     Create Order → publish ORDER_CREATED
Inventory Service: Consume ORDER_CREATED → Reserve Inventory → publish INVENTORY_RESERVED
Payment Service:   Consume INVENTORY_RESERVED → Process Payment → publish PAYMENT_PROCESSED
Shipping Service:  Consume PAYMENT_PROCESSED → Ship Order → publish ORDER_SHIPPED

On Failure:
Payment fails → publish PAYMENT_FAILED → Inventory Service compensates (release stock)
```

```python
# Order Service
def create_order(order):
    db.save(order)
    event_bus.publish("ORDER_CREATED", order)

# Inventory Service
@event_handler("ORDER_CREATED")
def handle_order_created(event):
    try:
        inventory.reserve(event.items)
        event_bus.publish("INVENTORY_RESERVED", event)
    except Exception:
        event_bus.publish("INVENTORY_FAILED", event)  # Compensating

# Compensation handler
@event_handler("PAYMENT_FAILED")
def handle_payment_failed(event):
    inventory.release(event.items)  # Undo reservation
```

**Orchestration-based**: Central orchestrator (like Camunda, Temporal) tells each service what to do and handles rollback. Better for complex workflows.

### Chapter 4 — Advanced Patterns &amp; Practices

**Microservices Architecture**
- Monolith → Microservices migration (Netflix journey)
- Service boundaries, Domain-Driven Design
- Service mesh: Istio, Linkerd
- Circuit Breaker (Hystrix, Resilience4j), Bulkhead Pattern, Retry &amp; Timeout

**Security &amp; Authentication**
- Auth methods: Session-based, JWT, OAuth 2.0 + OpenID Connect, MFA
- Authorization: RBAC, ABAC, ACL
- OWASP Top 10, SQL injection prevention, XSS/CSRF protection
- Secrets management: HashiCorp Vault, AWS Secrets Manager

**Observability**
- The Four Golden Signals: Latency, Traffic, Errors, Saturation
- Metrics: Prometheus + Grafana, RED (Rate/Errors/Duration), USE (Utilization/Saturation/Errors)
- Distributed Tracing: Jaeger, Zipkin
- Centralized Logging: ELK Stack (Elasticsearch, Logstash, Kibana), Splunk
- Alerting strategies, incident response, post-mortem analysis

Lab: Spring Boot circuit breaker implementation + Prometheus/Grafana monitoring dashboard

### Microservices Challenges Table

| Challenge | Description | Mitigation |
|---|---|---|
| **Network Latency** | Inter-service calls add 1-10ms | Async communication, bulkhead, caching |
| **Data Consistency** | No ACID across services | Saga pattern, eventual consistency, idempotency |
| **Testing** | End-to-end testing is complex | Contract testing, consumer-driven contracts, testcontainers |
| **Deployment** | 500+ services to coordinate | CI/CD pipelines, blue-green, canary, feature flags |
| **Monitoring** | Root cause in distributed calls | Distributed tracing (Jaeger), centralized logging |
| **Service Discovery** | How does A find B? | DNS, Consul, Eureka, Kubernetes DNS |
| **Serialization** | Different languages/protocols | Protobuf, Avro, schema registry |
| **Security** | Auth across service boundaries | JWT propagation, OAuth 2.0, mTLS, service mesh |

### Service Mesh — Istio Deep Dive

Istio sidecar proxy (Envoy) har service ke saath deploy hota hai — traffic intercept karta hai bina code change ke.

```
┌─────────────────────────────────┐
│          Service A               │
│  ┌──────────┐  ┌─────────────┐  │
│  │ Container │  │ Envoy Proxy │  │
│  │ (App)     │◄─┤ (Sidecar)   │  │
│  └──────────┘  └──────┬──────┘  │
└───────────────────────┼─────────┘
                        │ mTLS + HTTP/2
┌───────────────────────┼─────────┐
│          Service B    │         │
│  ┌──────────┐  ┌──────┴──────┐  │
│  │ Container │  │ Envoy Proxy │  │
│  │ (App)     │◄─┤ (Sidecar)   │  │
│  └──────────┘  └─────────────┘  │
└─────────────────────────────────┘
```

**Key Features**:
- **Traffic Management**: Canary, blue-green, circuit breaking, retries, timeouts
- **Security**: mTLS between all services, authorization policies
- **Observability**: Metrics, traces, access logs — automatic
- **Resilience**: Circuit breaking, outlier detection, fault injection

```yaml
# Istio VirtualService — traffic splitting for canary
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: recommendation
spec:
  hosts:
  - recommendation
  http:
  - match:
    - headers:
        canary: "true"
    route:
    - destination:
        host: recommendation
        subset: v2
      weight: 100
  - route:
    - destination:
        host: recommendation
        subset: v1
      weight: 90
    - destination:
        host: recommendation
        subset: v2
      weight: 10
```

### Circuit Breaker — State Machine with Python

```
                    ┌──────────┐
        success ───►│  CLOSED  │◄─── half-open success
                    └─────┬────┘
                          │ failure > threshold
                          ▼
                    ┌──────────┐
                    │   OPEN   │
                    └─────┬────┘
                          │ timeout expires
                          ▼
                    ┌──────────┐
                    │ HALF_OPEN│─── failure ──► OPEN
                    └──────────┘
```

```python
import time
from enum import Enum

class CircuitState(Enum):
    CLOSED = "CLOSED"
    OPEN = "OPEN"
    HALF_OPEN = "HALF_OPEN"

class CircuitBreaker:
    def __init__(self, failure_threshold=5, recovery_timeout=30):
        self.state = CircuitState.CLOSED
        self.failure_count = 0
        self.failure_threshold = failure_threshold
        self.recovery_timeout = recovery_timeout
        self.last_failure_time = None

    def call(self, func, fallback=None):
        if self.state == CircuitState.OPEN:
            if time.time() - self.last_failure_time >= self.recovery_timeout:
                self.state = CircuitState.HALF_OPEN
            else:
                return fallback() if fallback else None

        try:
            result = func()
            if self.state == CircuitState.HALF_OPEN:
                self.state = CircuitState.CLOSED
                self.failure_count = 0
            return result
        except Exception as e:
            self.failure_count += 1
            self.last_failure_time = time.time()
            if self.failure_count >= self.failure_threshold:
                self.state = CircuitState.OPEN
            raise e

# Usage
cb = CircuitBreaker(failure_threshold=3, recovery_timeout=10)
def fetch_data():
    return requests.get("http://api.example.com/data", timeout=1)

for _ in range(10):
    try:
        result = cb.call(fetch_data, fallback=lambda: "cached_data")
        print(result)
    except:
        print("failed")
```

### Rate Limiting — 3 Implementations

**1. Token Bucket**:
```python
import time

class TokenBucket:
    def __init__(self, rate=10, burst=20):
        self.rate = rate          # tokens per second
        self.burst = burst        # max tokens
        self.tokens = burst
        self.last_refill = time.time()

    def allow(self):
        now = time.time()
        refill = (now - self.last_refill) * self.rate
        self.tokens = min(self.burst, self.tokens + refill)
        self.last_refill = now

        if self.tokens >= 1:
            self.tokens -= 1
            return True
        return False

# 10 req/sec, burst 20
bucket = TokenBucket(rate=10, burst=20)
if bucket.allow():
    process_request()
```

**2. Sliding Window Log** (precise, more memory):
```python
from collections import deque

class SlidingWindow:
    def __init__(self, limit=100, window_sec=1):
        self.limit = limit
        self.window = window_sec
        self.requests = deque()

    def allow(self):
        now = time.time()
        while self.requests and self.requests[0] < now - self.window:
            self.requests.popleft()
        if len(self.requests) < self.limit:
            self.requests.append(now)
            return True
        return False
```

**3. Distributed Rate Limiting with Redis**:
```python
import redis

r = redis.Redis(host='localhost', port=6379, decode_responses=True)

def rate_limit(user_id, limit=100, window=60):
    key = f"ratelimit:{user_id}:{int(time.time() / window)}"
    count = r.incr(key)
    if count == 1:
        r.expire(key, window)
    return count <= limit

# Usage: 100 requests per 60s window per user
if rate_limit("user:123", limit=100, window=60):
    process_request()
else:
    return 429 Too Many Requests
```

### API Gateway — Features with Code

```python
from fastapi import FastAPI, Request, HTTPException
import httpx, redis, time

app = FastAPI()
r = redis.Redis(host='localhost', port=6379, decode_responses=True)

# 1. Rate Limiting
@app.middleware("http")
async def rate_limit(request: Request, call_next):
    client_ip = request.client.host
    key = f"ratelimit:{client_ip}:{int(time.time() / 60)}"
    count = r.incr(key)
    if count == 1:
        r.expire(key, 60)
    if count > 100:
        raise HTTPException(status_code=429, detail="Rate limit exceeded")
    return await call_next(request)

# 2. Authentication (JWT verification)
@app.middleware("http")
async def auth_middleware(request: Request, call_next):
    if request.url.path.startswith("/public"):
        return await call_next(request)
    token = request.headers.get("Authorization")
    if not token or not verify_jwt(token):
        raise HTTPException(status_code=401)
    return await call_next(request)

# 3. Request Transformation / Routing
@app.api_route("/{path:path}", methods=["GET", "POST", "PUT", "DELETE"])
async def gateway(path: str, request: Request):
    # Route mapping
    routes = {
        "users": "http://user-service:8001",
        "orders": "http://order-service:8002",
        "payments": "http://payment-service:8003"
    }
    service = path.split("/")[0]
    if service not in routes:
        raise HTTPException(status_code=404)

    body = await request.body()
    async with httpx.AsyncClient() as client:
        resp = await client.request(
            method=request.method,
            url=f"{routes[service]}/{path}",
            headers=dict(request.headers),
            content=body
        )
    return resp.json()

# 4. Caching
@app.get("/api/products/{product_id}")
async def get_product(product_id: str):
    cached = r.get(f"product:{product_id}")
    if cached:
        return {"data": cached, "source": "cache"}
    # Forward to backend
    return {"data": await fetch_product(product_id), "source": "origin"}
```

### Observability — OpenTelemetry, RED vs USE

**OpenTelemetry Standard**: Vendor-neutral API for metrics, traces, logs. Three pillars:

```
OTEL Collector → Jaeger (traces) + Prometheus (metrics) + Loki/Elasticsearch (logs)
```

**Instrumentation**:
```python
from opentelemetry import trace
from opentelemetry.instrumentation.requests import RequestsInstrumentor

tracer = trace.get_tracer(__name__)
RequestsInstrumentor().instrument()

with tracer.start_as_current_span("process_payment") as span:
    span.set_attribute("payment_id", "pay_123")
    span.set_attribute("amount", 5000)
    # Your payment logic
    make_payment()
```

**RED Method** (for services — microservices focused):
- **Rate**: Requests per second
- **Errors**: Failed requests (5xx, 4xx rate)
- **Duration**: Latency percentiles (p50, p95, p99)

**USE Method** (for resources — infrastructure focused):
- **Utilization**: How busy is the resource? (CPU 80%, memory 70%)
- **Saturation**: How much extra work is queued? (load avg, disk queue)
- **Errors**: Error count (disk errors, network drops)

**The Four Golden Signals** (Google SRE):
1. Latency — Time to serve request
2. Traffic — Demand on system (QPS)
3. Errors — Rate of failed requests
4. Saturation — How "full" the system is

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>💾 Storage &amp; Data Processing</span></div>
  <div class="phase-body">

**File Storage &amp; CDN**
- S3 Architecture: Durability (11 nines), storage classes (hot/cold/archive), multipart upload, pre-signed URLs
- CDN: CloudFront, Cloudflare, Akamai — edge locations, cache control, invalidation
- Block Storage (EBS) vs File Storage (NFS) vs Object Storage (S3)

**Search &amp; Indexing**
- Elasticsearch: Inverted index, TF-IDF, BM25, shards &amp; replicas, Query DSL
- Fuzzy matching, auto-complete, faceted search, geo-spatial search

**Big Data Processing**
- Batch: MapReduce, Hadoop, Spark, ETL pipelines
- Stream: Kafka Streams, Apache Flink, windowing, stateful processing
- Data Warehouses: Redshift, BigQuery, Snowflake

### S3 Deep Dive

**Bucket Policy Example** (JSON):
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::public-assets/*",
      "Condition": {
        "IpAddress": {
          "aws:SourceIp": "203.0.113.0/24"
        }
      }
    },
    {
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:DeleteObject",
      "Resource": "arn:aws:s3:::public-assets/*"
    }
  ]
}
```

**Pre-signed URLs with Python boto3**:
```python
import boto3
from botocore.config import Config

s3 = boto3.client('s3',
    config=Config(signature_version='s3v4'),
    region_name='us-east-1'
)

# Generate pre-signed URL (valid for 1 hour)
url = s3.generate_presigned_url(
    ClientMethod='put_object',
    Params={
        'Bucket': 'user-uploads',
        'Key': 'photos/user123/profile.jpg',
        'ContentType': 'image/jpeg'
    },
    ExpiresIn=3600
)
print(f"Upload URL: {url}")

# Generate pre-signed URL for download
download_url = s3.generate_presigned_url(
    ClientMethod='get_object',
    Params={'Bucket': 'user-uploads', 'Key': 'photos/user123/profile.jpg'},
    ExpiresIn=3600
)
```

**Storage Classes**:
- S3 Standard: Frequently accessed, 99.99% availability
- S3 Intelligent-Tiering: Auto cost optimization
- S3 Standard-IA: Infrequent access, lower cost
- S3 One Zone-IA: Non-critical, lower durability
- S3 Glacier: Archive (retrieval minutes to hours)
- S3 Glacier Deep Archive: Lowest cost (retrieval 12+ hrs)

**Multipart Upload** (files > 100MB):
```python
s3.create_multipart_upload(Bucket='bucket', Key='large_file.zip')
# Upload parts in parallel
s3.upload_part(...)
s3.complete_multipart_upload(...)
```

### Elasticsearch — Index Mapping & Query DSL

**Index Mapping**:
```json
PUT /products
{
  "mappings": {
    "properties": {
      "name": { "type": "text", "analyzer": "standard" },
      "description": { "type": "text", "analyzer": "english" },
      "price": { "type": "float" },
      "category": { "type": "keyword" },
      "tags": { "type": "keyword" },
      "created_at": { "type": "date" },
      "location": { "type": "geo_point" },
      "seller": {
        "properties": {
          "id": { "type": "keyword" },
          "rating": { "type": "float" }
        }
      }
    }
  },
  "settings": {
    "number_of_shards": 3,
    "number_of_replicas": 2
  }
}
```

**Query DSL Examples**:
```json
# Full-text search
GET /products/_search
{
  "query": {
    "match": {
      "name": "wireless headphones"
    }
  },
  "size": 20,
  "from": 0
}

# Bool query (combine multiple conditions)
GET /products/_search
{
  "query": {
    "bool": {
      "must": [
        { "match": { "category": "electronics" } }
      ],
      "filter": [
        { "range": { "price": { "gte": 100, "lte": 500 } } },
        { "term": { "tags": "premium" } }
      ],
      "should": [
        { "match": { "name": "bluetooth" } }
      ]
    }
  }
}

# Aggregation (analytics)
GET /orders/_search
{
  "size": 0,
  "aggs": {
    "by_category": {
      "terms": { "field": "category" },
      "aggs": {
        "avg_price": { "avg": { "field": "price" } },
        "total_revenue": { "sum": { "field": "amount" } }
      }
    },
    "sales_over_time": {
      "date_histogram": {
        "field": "created_at",
        "calendar_interval": "day"
      }
    }
  }
}
```

### Spark Architecture

```
Driver Program
  │
  ├── SparkContext
  │     ├── DAG Scheduler (builds execution plan)
  │     ├── Task Scheduler (assigns tasks to executors)
  │     └── Scheduler Backend (talks to cluster manager)
  │
  └── Cluster Manager
        ├── Executor 1 ── Cache ── Tasks
        ├── Executor 2 ── Cache ── Tasks
        └── Executor N ── Cache ── Tasks
```

**RDD (Resilient Distributed Dataset)**: Immutable, partitioned collection. Can be rebuilt from lineage.
**DataFrame**: Distributed row collection with schema (like DB table). Optimized via Catalyst optimizer.

**Transformations vs Actions**:
```python
# Transformations are lazy — build DAG
df = spark.read.parquet("s3://data/events")          # Read
filtered = df.filter(df.event_type == "purchase")     # Transformation
grouped = filtered.groupBy("user_id").count()          # Transformation
enriched = grouped.join(users_df, "user_id")           # Transformation

# Actions trigger execution
enriched.show()                                        # Action
enriched.write.parquet("s3://output/")                 # Action
result = enriched.collect()                            # Action
```

**When to use**:
- Large-scale ETL (100+ GB)
- ML training (preprocessing at scale)
- Batch processing — not for real-time

### Stream Processing — Kafka Streams vs Flink

| Aspect | Kafka Streams | Apache Flink |
|---|---|---|
| **Deployment** | Library (embed in app) | Cluster (standalone) |
| **State** | Local state stores (RocksDB) | Managed state backends |
| **Exactly-once** | transactional producer | Checkpointing |
| **Windowing** | Tumbling, hopping, session | Tumbling, sliding, session, global |
| **Event time** | Supported | Native (very strong) |
| **Latency** | Real-time (ms) | Real-time (ms) |
| **Use case** | Simple stream processing, joins | Complex event processing, ML |

**Kafka Streams Example**:
```java
// Word count (stateful stream processing)
KStream<String, String> text = builder.stream("text-input");
KTable<String, Long> wordCounts = text
    .flatMapValues(line -> Arrays.asList(line.toLowerCase().split("\\W+")))
    .groupBy((key, word) -> word)
    .count(Materialized.as("counts-store"));
wordCounts.toStream().to("word-count-output", Produced.with(Serdes.String(), Serdes.Long()));
```

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>🏗️ Real-World Case Studies</span></div>
  <div class="phase-body">

Har case study follows same structure:
1. Problem Statement &amp; Constraints
2. Functional + Non-Functional Requirements
3. Capacity Estimation (traffic, storage, bandwidth)
4. API Design (REST endpoints)
5. Database Schema
6. High-Level Architecture Diagram
7. Deep Dive into Critical Components
8. Bottlenecks &amp; Solutions
9. Trade-offs &amp; Alternatives
10. Interview Questions

### Case Study: URL Shortener (TinyURL)

**Requirements**: 100M URLs/month, 10:1 read-to-write, &lt;50ms redirect, 99.99% availability

**Capacity**:
```
Writes: 100M/month ≈ 40 URLs/sec
Reads:  400 redirects/sec (peak 800)
Storage: 50 GB/month, ~3 TB in 5 years
```

**API**:
```
POST /api/v1/shorten → { "short_url": "https://tinyurl.com/abc123" }
GET  /api/v1/{short_code} → Redirect 301
GET  /api/v1/analytics/{short_code} → { "clicks": 1234 }
```

**Schema**: `urls(id, original_url, short_code, user_id, created_at, expires_at, clicks)` + `analytics` table

**Deep Dive**: Base62 encoding for short codes, cache hot URLs in Redis, async analytics via Kafka, consistent hashing for DB sharding.

Poore case studies ke saath `Case-Studies/` folder mein code, schema, aur architecture diagrams hain.

  </div>
</div>

## Complete Case Studies — Deep Dive

### Case Study: Twitter (🐦)

**Requirements**:
- 200M DAU, 400M tweets/day, 1B timeline views/day
- Timeline generation: user's home feed
- Latency: &lt;200ms for timeline load
- Availability: 99.9%

**Capacity Estimation**:
```
Tweets/day = 400M
Writes/sec avg = 400M / 86,400 ≈ 4,600
Peak writes/sec = 9,200
Timeline views/day = 1B ≈ 11,500 reads/sec
Storage/day = 400M × 1KB ≈ 400GB
5yr storage ≈ 730TB
```

**Feed Generation — Push (Fanout) vs Pull**:

| Approach | How | Pros | Cons |
|---|---|---|---|
| **Push (Fanout-on-write)** | Tweet write → pre-compute all followers' timelines | Fast reads (O(1)) | Write amplification for celebs (100M followers) |
| **Pull (Fanout-on-load)** | User loads → fetch tweets from who they follow | Simple writes | Slow reads (O(N)) |
| **Hybrid** | Push for normal users (&lt;10K followers), Pull for celebs | Best of both | Complex logic |

Twitter uses **hybrid fanout**. Normal user tweets → push to all followers' timelines (Redis sorted sets). Celebrity tweets → pull on demand.

**Timeline Caching**:
```
User timeline → Redis Sorted Set (score = tweet timestamp)
Key: timeline:{user_id}
ZADD timeline:123 tweet_id timestamp
ZREVRANGE timeline:123 0 199 WITHSCORES  # latest 200 tweets
TTL = 7 days → after that, regenerate from DB
```

**Deep Dive: Hot User Problem**:
Celebrity tweet (Elon, 100M followers) → normal push would write 100M timeline entries. Instead:
1. Celebrity tweet goes to special "celebrity_tweets" Redis set
2. When user loads timeline, merge: regular_tweets (cached) + celebrity_tweets (on-demand)
3. Celebrity tweets TTL = 24 hours (they're hot for a day)

**Twitter Analytics**:
- Async processing via Kafka
- Tweet impressions, likes, retweets, replies
- Aggregation in time-series DB (MetricsDB)
- 15-minute delay acceptable for analytics

### Case Study: WhatsApp (💬)

**Requirements**:
- 1B+ users, 65B messages/day
- End-to-end encryption, delivery guarantees
- Low latency (&lt;100ms for delivery)
- Offline message handling

**End-to-End Encryption (Signal Protocol)**:
```
1. Each user has: Identity Key Pair (long-term) + Signed Pre-Key (medium-term)
2. Session established via X3DH key agreement
3. Messages encrypted with AES-256 + HMAC-SHA256
4. Perfect Forward Secrecy via ephemeral keys
5. Double Ratchet Algorithm for continuous key rotation
```

**Message Delivery Guarantees** (store-and-forward):
```
Sender → WhatsApp Server → Receiver

1. Message stored on server (encrypted — server can't read)
2. Sent to receiver (persistent TCP connection)
3. Receiver acks → server deletes message
4. If offline: store for 30 days, deliver when online
5. Delivery receipts: sent → delivered → read (blue ticks)
```

**Group Chat Architecture**:
- **Small groups (&lt;256)**: Sender fanout — sender sends to all members
- **Large groups**: Server fanout — sender sends once, server fans out
- Group metadata: key-value store (Cassandra)
- Group media: relayed via server (avoid IP leak)

**Offline Message Handling**:
```
User goes offline:
1. Messages queued in user's message queue
2. Encrypted payload stored in Cassandra (TTL = 30 days)
3. When user comes online (persistent TCP reconnect)
4. Server replays queued messages
5. User acks each message → server deletes from queue
```

**Media Upload/Storage**:
- Images/videos encrypted on device → upload to S3/CDN
- Thumbnails generated server-side (blurhash)
- Media TTL: 30 days then auto-delete
- CDN for fast delivery

### Case Study: Uber (🚗)

**Requirements**:
- 100M+ users, 15M+ trips/day
- Real-time driver location tracking
- Ride matching in &lt;1 second
- 75+ countries

**Geospatial Indexing**:

Uber uses H3 (hexagonal hierarchical geospatial indexing) — hexagons of varying resolution:

```
Resolution 0: ~4,250,000 km² (Earth surface)
Resolution 7: ~5 km² (neighborhood)
Resolution 10: ~0.015 km² (street level)
Resolution 15: ~0.0000009 km² (perfect for ride matching)

Driver location → H3 cell at resolution 10
Rider location → surrounding 7 hexagons → find drivers
Previously used QuadTrees, migrated to H3 for better accuracy
```

**Driver Matching Algorithm**:
```
1. Rider requests ride → rider's H3 cell
2. Query drivers in rider's hex + 7 surrounding hexes
3. Filter: available drivers only
4. Score each driver: distance (2km), ETA, rating, direction
5. Assign highest-scored driver
6. If no driver found: expand to next ring (19 hexes)
```

**Surge Pricing Mechanism**:
```
surge_multiplier = f(demand / supply, time_of_day, events)

For each geo-region:
  demand = ride_requests_in_last_5min
  supply = available_drivers_in_last_5min
  ratio = demand / supply
  if ratio > 1.5: surge = 1.2x
  if ratio > 2.0: surge = 1.5x
  if ratio > 3.0: surge = 2.0x+
  Decay factor: surge drops by 0.1x every 5 min when ratio normalizes
```

**Real-time Location Tracking (WebSockets)**:
```
Driver app → WebSocket → Location Service → Kafka → Consumers
  ↓
Driver location updates (every 4 seconds)
  ↓
Redis GeoSet (GEOADD driver_locations driver_id lat lng)
  ↓
Publish to rider's WebSocket (via Redis Pub/Sub)
```

**Ride State Machine**:
```
REQUESTED → ACCEPTED → ARRIVED → IN_PROGRESS → COMPLETED
                   ↓          ↓
              CANCELLED    CANCELLED
```

### Case Study: YouTube (🎥)

**Requirements**:
- 2B MAU, 500 hrs video uploaded/min
- 1B hrs watched/day
- Support 144p to 4K, adaptive bitrate
- 99.99% availability

**Video Upload Pipeline**:
```
Upload → Upload Service → Raw Video Storage (GCS)
  ↓
Transcoding Pipeline (DAG of operations)
  ├── Audio track extraction
  ├── Video decoding
  ├── Resolution scaling (4K → 1080p → 720p → 480p → 360p)
  ├── Bitrate encoding (high, medium, low)
  └── Packaging (HLS segments, DASH segments)
  ↓
CDN Distribution → User plays video
```

**Transcoding DAG**:
```
Raw Video
    │
    ├─► Audio Transcoder → AAC 128kbps → Audio segments
    │
    └─► Video Transcoder
          ├─► 4K  (2160p @ 40 Mbps)
          ├─► 1080p (1920x1080 @ 8 Mbps)
          ├─► 720p  (1280x720 @ 3 Mbps)
          ├─► 480p  (854x480 @ 1.5 Mbps)
          └─► 360p  (640x360 @ 0.5 Mbps)
                │
                ▼
         Segmenter (HLS/DASH)
          ├─► video_1080p_001.ts
          ├─► video_1080p_002.ts
          └─► manifest.m3u8 / manifest.mpd
```

**Adaptive Bitrate (HLS / DASH)**:
```
Client monitors: available bandwidth + buffer health
Bandwidth high → 1080p
Bandwidth medium → 720p
Bandwidth low → 480p
Buffering → drop to 360p

Client switches seamlessly between bitrate variants
manifest.m3u8 lists all available bitrates
```

**CDN + Open Connect**:
- YouTube uses Google's global CDN (500+ edge locations)
- **Open Connect**: Partner ISPs host Google caching appliances
- Popular videos pre-fetched to edge (predictive caching)
- Long-tail videos served from origin
- Cache hit ratio: &gt;95% for popular content

**Recommendation System**:
```
1. Collaborative filtering: users who watched X also watched Y
2. Content-based: similar videos (title, description, tags)
3. Deep neural networks: watch history → embeddings → candidate generation → ranking
4. Two-tower model: query tower (user) x candidate tower (video)
5. Reinforcement learning: optimize for watch time, not clicks
```

### Case Study: Netflix (🎬)

**Requirements**:
- 230M+ subscribers, 1B+ hrs watched/week
- Support 1000+ device types
- 15% of global internet traffic
- 99.99% availability across regions

**Open Connect CDN**:
```
Netflix doesn't use CloudFront — they built their own CDN!

Open Connect Appliance: Custom server deployed at ISP points-of-presence
- 100+ TB SSD cache per appliance
- 100 Gbps network interface
- Hosts popular content (80% of traffic from 20% of catalog)
- Pre-populated during off-peak hours (TCP fill)
- ISP saves bandwidth costs (traffic stays within their network)
```

**Microservices Architecture (500+ services)**:
```
Netflix API Gateway (Zuul) → 500+ microservices:
  ├── User Service
  ├── Search Service
  ├── Recommendation Service
  ├── Playback Service
  ├── Billing Service
  ├── Encoding Service
  ├── Content Management
  └── And 492 more...

Each service: independent deploy, own DB, own tech stack
Communication: REST/gRPC internal, async via Kafka
```

**Chaos Engineering**:
```
Chaos Monkey: Randomly kills production instances (during business hours!)
  - Ensures services handle failures gracefully
  - No single points of failure

Chaos Kong: Simulates AWS region failure
  - Tests cross-region failover
  - Proves multi-region resilience

Litmus: Automates chaos experiments
  - Continuous validation of resilience
```

**Recommendation Engine**:
```
Personalization Pipeline:
1. Online: Real-time recommendations (cached results)
2. Nearline: Recompute every 2 hours (user behavior changes)
3. Offline: Daily training of ML models

Algorithms:
- Matrix factorization (SVD, ALS)
- Restricted Boltzmann Machines
- Autoencoders for embeddings
- A/B testing: every change is an experiment
- 80% of watch time comes from recommendations
```

**Encoding Pipeline (Context-Aware)**:
```
Per-shot encoding: Analyze each scene → optimal encoding parameters
- Action scene: higher bitrate (motion)
- Static scene: lower bitrate (saves bandwidth)
- Dark scene: higher bitrate (avoid compression artifacts)

Result: 20% bandwidth savings at same quality
```

### Case Study: Google Search (🔍)

**Requirements**:
- Index trillions of web pages
- Return results in &lt;200ms
- Handle 100K+ queries/sec
- Freshness (crawl new pages within minutes)

**Crawling — Distributed, Politeness, Freshness**:
```
Google crawler (Googlebot): 10,000+ machines crawling in parallel

Politeness policy:
  - Don't hit same server too fast
  - Respect robots.txt
  - Adaptive crawl rate (slow for slow servers)

Freshness:
  - News sites: crawl every few minutes
  - Popular pages: re-crawl daily
  - Long-tail: re-crawl weekly/monthly
  - Priority queue: URLs sorted by importance
```

**Indexing — Inverted Index at Petabyte Scale**:
```
Document → Tokenization → Inverted Index

Word: "system"
  ├─► doc1: position 5, 23
  ├─► doc42: position 7
  └─► doc100: position 15, 67, 89

Built using MapReduce:
  Map: (doc_id, content) → (word, doc_id + position)
  Reduce: (word, [(doc1,5), (doc1,23), (doc42,7)...]) → Inverted index entry
```

**PageRank Algorithm**:
```
PR(A) = (1-d) + d × Σ PR(T) / C(T)

Where:
  PR(A) = PageRank of page A
  d = damping factor (0.85)
  T = pages linking to A
  C(T) = outbound links from T

Intuition: Page is important if many important pages link to it
Power iteration: 50-100 iterations on web graph (50B+ pages)

Precomputed offline (not on query path)
Stored as: (url_id, pagerank_score) in Bigtable
```

**Query Processing**:
```
User Query: "best system design books"
  ↓
1. Spell-check (if needed) → "best system design books" (no change)
2. Query expansion: synonyms, related terms
3. Auto-complete (prefix matching on trie of popular queries)
4. Document retrieval: inverted index lookup
5. Ranking:
   a. TF-IDF / BM25 (text relevance)
   b. PageRank (page authority)
   c. 200+ ranking signals (freshness, location, user context)
   d. Machine-learned ranking (RankBrain)
6. BERT: Understands context (previously: keyword matching)
   "Bank" → financial institution or river bank? BERT disambiguates
7. Result: top 10 results in &lt;200ms
```

**BERT for Search (Neural Matching)**:
```
Before BERT: keyword matching (exact terms)
After BERT: semantic matching (understand intent)

"Can you get medicine for someone pharmacy?"
Before: focused on "medicine" and "pharmacy" keywords
After: understands "get medicine for someone" → prescription refill

Impact: 10% improvement in query understanding, 15+ language support
```

</div>
</div>

## Scalability

<div class="phase-section">
  <div class="phase-header"><span>📈 Horizontal vs Vertical Scaling</span><span class="tag tag-method">Core</span></div>
  <div class="phase-body">

```
Vertical:   Bigger machine → limits exist
Horizontal: More machines → infinite scaling
```

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>⚖️ Load Balancing</span><span class="tag tag-method">Network</span></div>
  <div class="phase-body">

- Round Robin, Weighted, Least Connections
- Tools: Nginx, HAProxy, AWS ELB

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>⚡ Caching</span><span class="tag tag-star">Performance</span></div>
  <div class="phase-body">

- **Redis**: In-memory cache, data structures, pub/sub
- **Memcached**: Simple key-value cache
- **CDN**: CloudFront, Cloudflare for static assets

```bash
# Redis example
redis-cli SET user:123 '{"name":"Raushan"}'
redis-cli GET user:123
```

  </div>
</div>

## Database Design

<div class="phase-section">
  <div class="phase-header"><span>🔀 Sharding</span><span class="tag tag-method">Scale</span></div>
  <div class="phase-body">

```
Horizontal sharding: Users 1-1000 → Shard 1, 1001-2000 → Shard 2
Vertical sharding: User data → One DB, Posts → Another DB
```

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>🔄 Replication</span><span class="tag tag-method">HA</span></div>
  <div class="phase-body">

- **Master-Slave**: Read replicas
- **Multi-Master**: Write to any node
- **Quorum**: Consensus-based replication

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>🧩 CAP Theorem</span><span class="tag tag-hot">Fundamental</span></div>
  <div class="phase-body">

```
Consistency → Availability → Partition Tolerance
(Choose 2 of 3)
CP: Banking systems
AP: Social media
CA: Single-node systems
```

  </div>
</div>

## Microservices

<div class="phase-section">
  <div class="phase-header"><span>📡 Communication</span><span class="tag tag-method">Pattern</span></div>
  <div class="phase-body">

- **Synchronous**: REST, gRPC
- **Asynchronous**: Message Queues (RabbitMQ, Kafka)

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>🚪 API Gateway</span><span class="tag tag-method">Entry</span></div>
  <div class="phase-body">

```yaml
Gateway:
  routes:
    /users/* → User Service
    /orders/* → Order Service
    /payments/* → Payment Service
```

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>🛡️ Circuit Breaker</span><span class="tag tag-method">Resilience</span></div>
  <div class="phase-body">

Failures ko cascade hone se bachata hai:

```
CLOSED → OPEN (failure threshold crossed) → HALF_OPEN (test) → CLOSED
```

  </div>
</div>

## Case Studies

<div class="topic-grid">
  <div class="topic-card">
    <h4>WhatsApp (1B+ Users)</h4>
    <p>Chat: Custom XMPP → own protocol. Storage: Messages on device, not server. Real-time: Persistent TCP connection. Scaling: Erlang (soft real-time, massive concurrency). Group chat: Fanout approach, delivery receipts.</p>
    <div class="topic-meta">Real-time Messaging</div>
  </div>
  <div class="topic-card">
    <h4>Instagram</h4>
    <p>Feed: Redis sorted sets, fanout-on-write for small users, fanout-on-load for large. Photos: S3 for storage, CDN for delivery. Stories: Ephemeral storage, pre-loading. Ranking: ML-based feed ranking algorithm.</p>
    <div class="topic-meta">Social Media</div>
  </div>
  <div class="topic-card">
    <h4>Uber</h4>
    <p>Matching: Geospatial indexing (QuadTrees, H3), real-time driver location via WebSockets. Ride flow: State machine. Pricing: Surge pricing algorithm. ETA: Real-time traffic data, ML-based prediction.</p>
    <div class="topic-meta">Real-time Logistics</div>
  </div>
  <div class="topic-card">
    <h4>Netflix</h4>
    <p>Content delivery: Open Connect CDN (custom CDN at ISP edges). Microservices: 500+ services, each independently deployable. Resilience: Chaos Monkey, Hystrix circuit breaker. Recommendations: Personalized ML models.</p>
    <div class="topic-meta">Streaming</div>
  </div>
  <div class="topic-card">
    <h4>YouTube</h4>
    <p>Upload pipeline: Video transcoding (multiple resolutions), adaptive bitrate streaming (HLS/DASH). CDN: Google's global edge network, pre-fetching popular content. Recommendations: Deep neural networks.</p>
    <div class="topic-meta">Video Platform</div>
  </div>
  <div class="topic-card">
    <h4>Google Search</h4>
    <p>Crawling: Distributed web crawler, politeness policies, freshness. Indexing: Inverted index at petabyte scale, MapReduce for index building. Ranking: PageRank algorithm, 200+ ranking signals, BERT for query understanding.</p>
    <div class="topic-meta">Search Engine</div>
  </div>
</div>

## AI System Design

From main curriculum Phase 8:

<div class="phase-section">
  <div class="phase-header"><span>🔍 RAG Pipeline (Retrieval Augmented Generation)</span><span class="tag tag-star">Trending</span></div>
  <div class="phase-body">

```ascii
User Query → Embedding → Vector Search (Pinecone/Weaviate)
    → Retrieve relevant chunks → LLM → Response
```

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>🤖 Agent Systems</span><span class="tag tag-hot">AI</span></div>
  <div class="phase-body">

- **Orchestrator Agent**: Routes tasks
- **Specialist Agents**: Code, research, data
- **Memory**: Conversation history, vector store
- **Tools**: API calls, database queries, code execution

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>🚀 Model Serving</span><span class="tag tag-method">MLOps</span></div>
  <div class="phase-body">

- **Batch**: Offline predictions
- **Real-time**: REST/gRPC endpoints
- **Streaming**: WebSockets for live

  </div>
</div>

### RAG Pipeline — Detailed Design

RAG (Retrieval Augmented Generation) = LLM + external knowledge. Critical for interview.

**Architecture**:
```
User Query
    │
    ├─► Query Processing
    │     ├── Rewrite/expand query (HyDE: Hypothetical Document Embeddings)
    │     └── Query translation (multi-lingual, multi-turn)
    │
    ├─► Retrieval
    │     ├── Dense retrieval (embedding search — cosine similarity)
    │     ├── Sparse retrieval (BM25, TF-IDF — keyword matching)
    │     └── Hybrid search (combine dense + sparse, RRF fusion)
    │
    ├─► Reranking (cross-encoder)
    │     └── Reorder top-K results by relevance score
    │
    └─► Generation
          └── LLM + retrieved context → grounded answer
```

**Chunking Strategies**:
| Strategy | How | Best For |
|---|---|---|
| **Fixed-size** | N tokens per chunk, overlap | Simple documents |
| **Recursive** | Split by separators (\n\n → \n → .) | Markdown, code |
| **Semantic** | Embedding similarity breaks | Long-form content |
| **Agentic** | LLM decides chunk boundaries | Complex documents |

**Embedding Selection**:
| Model | Dimensions | Max Tokens | Best For |
|---|---|---|---|
| text-embedding-3-small | 512/1536 | 8191 | General purpose, cost-effective |
| text-embedding-3-large | 256/1024/3072 | 8191 | High accuracy needed |
| BGE (bge-large-en-v1.5) | 1024 | 512 | Open source, strong perf |
| Cohere Embed v3 | 1024/4096 | 512 | Multi-lingual |

**Vector DB Comparison**:
| Feature | Pinecone | Weaviate | Qdrant |
|---|---|---|---|
| **Hosting** | Fully managed | Self-hosted / Cloud | Self-hosted / Cloud |
| **Persistence** | Serverless | Disk-based | Memory + mmap |
| **Hybrid search** | ✅ | ✅ | ✅ |
| **Filtering** | Metadata filter | Rich filter + geo | Payload filter |
| **Speed (p95)** | ~10ms | ~5ms | ~3ms |
| **Pricing** | Expensive | Moderate | Cheapest |
| **Use case** | Production RAG | Semantic search | High QPS RAG |

**Hybrid Search (RRF — Reciprocal Rank Fusion)**:
```python
def reciprocal_rank_fusion(dense_results, sparse_results, k=60):
    scores = {}
    for rank, doc_id in enumerate(dense_results):
        scores[doc_id] = scores.get(doc_id, 0) + 1 / (k + rank)
    for rank, doc_id in enumerate(sparse_results):
        scores[doc_id] = scores.get(doc_id, 0) + 1 / (k + rank)
    return sorted(scores, key=scores.get, reverse=True)
```

### Model Serving Architecture

**Batch vs Real-time**:
| Aspect | Batch | Real-time |
|---|---|---|
| **Latency** | Minutes to hours | &lt;100ms |
| **Throughput** | Very high (100K+ req/hr) | Moderate (100-1000 req/s) |
| **GPU utilization** | High (batching) | Lower (idle between peaks) |
| **Cost** | Lower per prediction | Higher per prediction |
| **Use case** | Nightly recommendations, reporting | Chatbots, real-time classification |

**GPU Utilization Optimization**:
```python
# Dynamic batching — wait for more requests or timeout
from concurrent.futures import ThreadPoolExecutor
import asyncio

class DynamicBatcher:
    def __init__(self, model_fn, max_batch=32, max_wait_ms=10):
        self.model_fn = model_fn
        self.max_batch = max_batch
        self.max_wait = max_wait_ms / 1000
        self.queue = asyncio.Queue()

    async def predict(self, input_data):
        event = asyncio.Event()
        self.queue.put((input_data, event))
        await event.wait()
        return event.result

    async def worker(self):
        while True:
            # Wait for first request
            first_input, first_event = await self.queue.get()
            batch = [first_input]
            events = [first_event]
            # Wait for more (up to max_batch or timeout)
            try:
                while len(batch) < self.max_batch:
                    input_data, event = await asyncio.wait_for(
                        self.queue.get(), timeout=self.max_wait)
                    batch.append(input_data)
                    events.append(event)
            except asyncio.TimeoutError:
                pass
            # Execute batch inference
            results = self.model_fn(batch)
            for event, result in zip(events, results):
                event.result = result
                event.set()
```

**Autoscaling Strategies**:
- **CPU-based**: Scale up when GPU utilization &gt; 70%
- **Request-based**: Scale based on queue depth
- **Schedule-based**: Predict peaks (morning/evening for chat apps)
- **Predictive**: ML predicts traffic → pre-scale

### ML Pipeline Design

**Full ML Pipeline**:
```
Data Ingestion → Feature Engineering → Training → Evaluation → Deployment → Monitoring
      │                  │                  │           │            │            │
  Kafka/Spark      Feature Store      Training Pipeline   A/B        Model       Drift
  (Streaming)      (Feast,           (Kubeflow,        Testing     Registry    Detection
                   Tecton)           SageMaker)       (Shadow)    (MLflow)
```

**Feature Store** (Feast / Tecton):
- **Online store**: Redis, DynamoDB (low-latency serving)
- **Offline store**: S3, BigQuery (training data)
- **Feature serving**: REST/gRPC API, consistent hashing
- **Point-in-time correct**: Joins features at correct timestamp

```python
# Feature definition (Feast)
entity = Entity(name="user_id", value_type=ValueType.INT64)

feature_view = FeatureView(
    name="user_features",
    entities=["user_id"],
    ttl=timedelta(days=7),
    features=[
        Feature(name="total_orders", dtype=ValueType.INT64),
        Feature(name="avg_order_value", dtype=ValueType.FLOAT),
        Feature(name="days_since_last_order", dtype=ValueType.INT64),
    ],
    online=True,
    source=BigQuerySource(table_ref="project.dataset.orders")
)
```

**Model Registry** (MLflow):
```python
import mlflow

with mlflow.start_run():
    mlflow.log_param("model_type", "xgboost")
    mlflow.log_param("max_depth", 6)
    mlflow.log_metric("accuracy", 0.94)
    mlflow.log_metric("f1_score", 0.91)
    mlflow.sklearn.log_model(model, "model", registered_model_name="fraud_detection")

# Stage transitions: None → Staging → Production → Archived
# Deploy via: model_version = "2" → transition to "Production"
```

**A/B Testing Architecture**:
```
User → Router (50% A, 50% B)
  ├─► Model A (current) → Track metrics
  └─► Model B (candidate) → Track metrics
       ↓
Compare: CTR, conversion, latency, error rate
Statistically significant? → Promote B or keep A
```

**Monitoring — Drift Detection**:
- **Data drift**: Input distribution changes (Kolmogorov-Smirnov test)
- **Model drift**: Prediction distribution changes (PSI — Population Stability Index)
- **Concept drift**: Relationship X→Y changes (retrain needed)
- **Alert**: When drift exceeds threshold

### Recommendation System Design

**Types of Recommendation**:
1. **Collaborative Filtering**: Users who liked X also liked Y
2. **Content-Based**: Similar items based on features
3. **Hybrid**: Combine both approaches

**Collaborative Filtering** (Matrix Factorization):
```python
# User-Item interaction matrix (R)
# R ≈ P × Q^T where P = user factors, Q = item factors

# SVD (Singular Value Decomposition)
from sklearn.decomposition import TruncatedSVD

svd = TruncatedSVD(n_components=50)  # 50 latent factors
user_factors = svd.fit_transform(user_item_matrix)
item_factors = svd.components_.T

# Predict: dot(user_factors[u], item_factors[i]) → rating for user u on item i
```

**Content-Based Filtering** (TF-IDF + Cosine Similarity):
```python
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

tfidf = TfidfVectorizer(stop_words='english')
item_vectors = tfidf.fit_transform(item_descriptions)

def recommend_similar(item_id, top_n=10):
    similarities = cosine_similarity(item_vectors[item_id], item_vectors)
    return similarities[0].argsort()[-top_n:][::-1]
```

**Cold Start Problem**:
```
New user: No interaction history
Solutions:
1. Popular items (global top-N)
2. Demographic-based (age, location, language)
3. Onboarding survey (pick interests, genres)
4. Contextual bandits (explore → exploit)

New item: No user interactions
Solutions:
1. Content-based (item metadata)
2. Random exploration (show to small user set)
3. Cluster-based (assign to nearest item cluster)
```

**Real-time vs Batch Recommendations**:
- **Batch**: Daily offline computation → Redis cache → serve
- **Real-time**: Feature updates → model inference → immediate results
- **Nearline**: Every 15 min (good trade-off)

**Architecture** (Netflix-style):
```
User Activity (clicks, views, watch time)
    ↓
Kafka → Stream Processor → Feature Store
    ↓                              ↓
Offline: Spark ML (daily)     Online: ML Service (real-time)
    ↓                              ↓
Candidate Generation → Ranking → Filtering → Personalization
    ↓                    ↓           ↓
 2,000 items          100 items   10 items → API
```

## Design Patterns

<div class="phase-section">
  <div class="phase-header"><span>🏗️ Creational</span><span class="tag tag-method">Creation</span></div>
  <div class="phase-body">

<table class="table-dash">
  <thead><tr><th>Pattern</th><th>Use Case</th></tr></thead>
  <tbody>
    <tr><td><strong>Singleton</strong></td><td>Database connection, Cache instance</td></tr>
    <tr><td><strong>Factory</strong></td><td>Creating objects without exposing logic</td></tr>
    <tr><td><strong>Builder</strong></td><td>Complex object construction</td></tr>
  </tbody>
</table>

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>🔗 Structural</span><span class="tag tag-method">Structure</span></div>
  <div class="phase-body">

<table class="table-dash">
  <thead><tr><th>Pattern</th><th>Use Case</th></tr></thead>
  <tbody>
    <tr><td><strong>Adapter</strong></td><td>Integrate incompatible interfaces</td></tr>
    <tr><td><strong>Decorator</strong></td><td>Add behavior dynamically</td></tr>
    <tr><td><strong>Facade</strong></td><td>Simplified interface to complex system</td></tr>
  </tbody>
</table>

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>⚡ Behavioral</span><span class="tag tag-method">Behavior</span></div>
  <div class="phase-body">

<table class="table-dash">
  <thead><tr><th>Pattern</th><th>Use Case</th></tr></thead>
  <tbody>
    <tr><td><strong>Observer</strong></td><td>Event handling, notifications</td></tr>
    <tr><td><strong>Strategy</strong></td><td>Interchangeable algorithms</td></tr>
    <tr><td><strong>Command</strong></td><td>Request queuing, undo operations</td></tr>
  </tbody>
</table>

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>🧱 SOLID Principles</span><span class="tag tag-star">Essential</span></div>
  <div class="phase-body">

```
S — Single Responsibility: Ek class ka ek kaam
O — Open/Closed: Extension ke liye open, modification ke liye closed
L — Liskov Substitution: Child class parent ki jagah le sakti hai
I — Interface Segregation: Chhote, focused interfaces
D — Dependency Inversion: High-level modules depend on abstractions
```

  </div>
</div>

## Interview Preparation

<div class="phase-section">
  <div class="phase-header"><span>🎯 Interview Format (45-60 min)</span><span class="tag tag-hot">FAANG</span></div>
  <div class="phase-body">

<table class="table-dash">
  <thead><tr><th>Phase</th><th>Time</th><th>What to Do</th></tr></thead>
  <tbody>
    <tr><td>Clarification</td><td>5-10 min</td><td>Ask questions, define scope, functional + non-functional requirements</td></tr>
    <tr><td>High-Level Design</td><td>10-15 min</td><td>Draw architecture diagram, components, data flow</td></tr>
    <tr><td>Deep Dive</td><td>15-20 min</td><td>Discuss critical components in detail (feed generation, sharding, caching)</td></tr>
    <tr><td>Scaling &amp; Trade-offs</td><td>10-15 min</td><td>Bottlenecks, scale solutions, pros/cons of decisions</td></tr>
    <tr><td>Q&amp;A</td><td>5 min</td><td>Answer interviewer questions</td></tr>
  </tbody>
</table>

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>📋 The PEDALS Framework</span><span class="tag tag-method">Structured</span></div>
  <div class="phase-body">

```
P — Problem Understanding: Clarify requirements, don't assume
E — Estimation: Calculate capacity, storage, bandwidth
D — Design High-Level: Create overall architecture
A — API Design: Define key interfaces and contracts
L — Low-Level Design: Deep dive into critical components
S — Scale & Trade-offs: Discuss how to scale and trade-off decisions
```

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>📐 Framework for Any Design Problem</span><span class="tag tag-method">Template</span></div>
  <div class="phase-body">

```
1. REQUIREMENTS → Functional + Non-functional (scale, latency, availability)
2. ESTIMATIONS → Traffic, storage, bandwidth
3. DATA MODEL → Entities, relationships
4. HIGH-LEVEL DESIGN → Components, diagram
5. DEEP DIVE → Key components in detail
6. BOTTLENECKS → Trade-offs, improvements
```

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>🧮 Back-of-Envelope Calculations</span><span class="tag tag-hot">Must Know</span></div>
  <div class="phase-body">

```
DAU = 100M
Daily writes = 100M × 10 posts = 1B posts
Storage per post = 1KB
Daily storage = 1TB
5 year storage = 1TB × 365 × 5 = 1.8PB
```

  </div>
</div>

### Common Interview Questions

<div class="phase-section">
  <div class="phase-header"><span>🟢 Easy (Entry Level)</span><span class="tag tag-method">Start</span></div>
  <div class="phase-body">

1. **Design URL Shortener (TinyURL)** — Hash collisions, base62, expiration, analytics
2. **Design Pastebin** — Text storage, syntax highlighting, rate limiting
3. **Design Parking Lot System** — Slot management, entry/exit tracking, payment

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>🟡 Medium (Mid-Senior)</span><span class="tag tag-hot">Practice</span></div>
  <div class="phase-body">

4. **Design Twitter** — Fanout (push vs pull), hot user problem, timeline caching
5. **Design Instagram** — Image storage (S3 + CDN), feed ranking, stories
6. **Design Uber** — Geo-spatial indexing (QuadTrees, H3), real-time WebSockets, surge pricing
7. **Design WhatsApp** — Message storage, delivery guarantees, offline messages, E2E encryption

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>🔴 Hard (Senior+)</span><span class="tag tag-star">Advanced</span></div>
  <div class="phase-body">

8. **Design YouTube** — Video transcoding pipeline, adaptive bitrate streaming, CDN strategy
9. **Design Netflix** — Multi-bitrate encoding, Open Connect CDN, recommendation engine
10. **Design Google Search** — Distributed crawling, inverted index, PageRank, query optimization

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>📋 More System Design Questions (15)</span><span class="tag tag-hot">Practice</span></div>
  <div class="phase-body">

11. **Design Amazon (E-Commerce Platform)**
    - Key features: Product catalog, cart, checkout, order history, recommendations
    - Scale: 200M+ products, 300M+ active users, 1M+ orders/day
    - Focus: Product search (Elasticsearch), cart persistence, inventory management, payment flow
    - Deep dive: Product page caching, distributed cart (Redis), idempotent checkout, async order processing

12. **Design Dropbox (Cloud File Storage)**
    - Key features: Upload/download, sync across devices, file sharing, version history
    - Scale: 500M+ users, 1B+ files uploaded/day
    - Focus: Delta sync (rsync algorithm), block storage, deduplication, conflict resolution
    - Deep dive: Chunking large files, LAN sync, cryptographic hash for dedup, differential sync

13. **Design Zoom (Video Conferencing)**
    - Key features: Video/audio calls, screen sharing, chat, recording, breakout rooms
    - Scale: 300M+ daily meeting participants, 10M+ concurrent meetings
    - Focus: WebRTC (media servers), selective forwarding unit (SFU), adaptive bitrate
    - Deep dive: SFU vs MCU, simulcast, echo cancellation, WebRTC signaling (SDP), recording pipeline

14. **Design Slack (Team Chat)**
    - Key features: Channels (public/private), DMs, message search, file sharing, threads
    - Scale: 10M+ DAU, 1B+ messages/day
    - Focus: Real-time messaging (WebSocket), message indexing (Elasticsearch), thread model
    - Deep dive: Channel membership (Redis sets), unread counts, message search indexing, file upload/CDN

15. **Design Tinder (Matching App)**
    - Key features: Swipe left/right, match notification, chat after match, discovery feed
    - Scale: 50M+ users, 1B+ swipes/day
    - Focus: Geospatial queries, like/ dislike storage, matching algorithm, real-time notifications
    - Deep dive: Redis Geo for nearby users, daily swipe limit, Kafka for async matching, push notifications

16. **Design Reddit (Social Forum/News Aggregator)**
    - Key features: Subreddits, posts, comments, voting (upvote/downvote), hot/trending
    - Scale: 400M+ monthly users, 100M+ posts/month
    - Focus: Voting aggregation, trending algorithm, comment tree, subreddit isolation
    - Deep dive: Vote counting (asynchronous + periodic flush), Hot algorithm (time decay), comment threading (nested set / materialized path), content moderation pipeline

17. **Design Rate Limiter (API Gateway)**
    - Key features: Configurable limits per user/IP/endpoint, burst handling, global + per-region
    - Scale: 1M+ requests/second, 100K+ rate limit rules
    - Focus: Distributed counters, sliding window, Redis cluster, atomic operations
    - Deep dive: Token bucket vs sliding window, Redis sorted sets for precise counting, distributed consistency, race condition handling via Lua scripts

18. **Design Web Crawler**
    - Key features: URL frontier, politeness policy, deduplication, freshness, priority crawling
    - Scale: 10B+ pages, 1M+ pages crawled/hour
    - Focus: Distributed crawling, URL normalization, Bloom filter for dedup, politeness delay per domain
    - Deep dive: Frontier prioritization (PageRank-based), robots.txt caching, politeness queues (per-domain), content extraction, URL canonicalization

19. **Design Notification System**
    - Key features: Push (mobile/web), email, SMS, in-app, templating, preference management
    - Scale: 10M+ notifications/second, 100+ types of notifications
    - Focus: Multi-channel delivery, deduplication, retry with backoff, rate limiting per user
    - Deep dive: Template rendering engine, channel priority, delivery guarantees, device token management, WebSocket + SSE for real-time delivery

20. **Design Chat System (Messenger)**
    - Key features: 1-on-1 chat, group chat, message sync across devices, delivery receipts, typing indicators
    - Scale: 1B+ users, 100B+ messages/day
    - Focus: Persistent connections (WebSocket), message ordering, offline storage, multi-device sync
    - Deep dive: Message ID generation (Snowflake), ordering via timestamp + sequence_no, group chat fanout, message retention policy, media upload pipeline

21. **Design Ticketmaster (Event Booking)**
    - Key features: Event discovery, seat selection, reservation, payment, ticket transfer
    - Scale: 100M+ events/year, 500K+ concurrent users for popular events
    - Focus: Concurrency control (seat locking), reservation timeout, payment 2PC, anti-bot
    - Deep dive: Seat lock (Redis with TTL), optimistic concurrency (version field), queue-it pattern for high demand, waiting room architecture, bot detection via rate limiting + CAPTCHA

22. **Design Yelp (Location-Based Business Reviews)**
    - Key features: Business search, reviews/photos, location-based queries, ratings, check-ins
    - Scale: 100M+ monthly users, 200M+ reviews, 50M+ businesses
    - Focus: Geospatial search, review ranking, relevance vs distance trade-off, multi-modal search
    - Deep dive: Geo-queries (Elasticsearch geo_shape, S2 cells), review freshness + helpfulness ranking, category-based filtering, photos/CDN, edge search for popular areas

23. **Design Google Maps**
    - Key features: Map rendering, turn-by-turn navigation, traffic data, place search, route optimization, Street View
    - Scale: 1B+ users, 25M+ POIs, 99% of world mapped
    - Focus: Map tiles rendering, routing algorithm (A* + contraction hierarchies), real-time traffic aggregation, geocoding
    - Deep dive: Tile generation pipeline, A* with heuristics vs Dijkstra, traffic data from anonymous phone GPS, ETA prediction via ML, offline maps (vector tiles)

24. **Design Code Deployment System (CI/CD Pipeline)**
    - Key features: Build triggers, artifact storage, deployment strategies (blue-green, canary, rolling), rollback, approval gates
    - Scale: 10K+ deploys/day, 1000+ microservices, 100+ environments
    - Focus: Build isolation, artifact versioning, deployment orchestration, health check integration
    - Deep dive: Build queue (Kafka + worker pool), artifact storage (S3 + checksum), canary analysis (metrics comparison), automatic rollback on error threshold, feature flags for gradual rollout

25. **Design Distributed Cache (Redis Cluster)**
    - Key features: Auto-sharding, replication, failover, eviction policies, cross-region replication
    - Scale: 10TB+ cache, 1M+ QPS, &lt;1ms latency
    - Focus: Consistent hashing with virtual nodes, gossip protocol for cluster state, hash slots (Redis Cluster 16384 slots), sentinel for high availability
    - Deep dive: Data partitioning (hash slot → node mapping), replication (master → replica asynchronous), failover (cluster nodes vote), resharding (migrate slots between nodes), write loss during failover (trade-off analysis)

  </div>
</div>

### Interview Tips — Do's &amp; Don'ts

<div class="topic-grid">
  <div class="topic-card">
    <h4>✅ Do's</h4>
    <p>Out loud soch — har decision explain kar. Start simple, phir iterate — pehle basic diagram bana, then components add kar. Trade-offs discuss kar — koi perfect solution nahi hota. Concrete numbers use kar — DAU, QPS, storage estimates de. Multiple approaches compare kar (push vs pull, SQL vs NoSQL). Interviewer ke hints ko catch kar — woh tujhe direction de raha hai. Design for failure — SPOF, redundancy, disaster recovery soch.</p>
  </div>
  <div class="topic-card">
    <h4>❌ Don'ts</h4>
    <p>Seedha solution mat jump kar — requirements pehle clear kar. Requirements assume mat kar (especially non-functional ones). Defensive mat ho — suggestions accept kar. Buzzwords mat pel without understanding. Over-engineer mat kar initially — simple, then iterate. Estimation skip mat kar — FAANG interviewers check this.</p>
  </div>
</div>

### Interview Prep Plan

<table class="table-dash">
  <thead><tr><th>Phase</th><th>Focus</th><th>Key Actions</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Foundations</td><td>CAP theorem, capacity estimation, study 3-5 case studies</td></tr>
    <tr><td>2</td><td>Core Concepts</td><td>Databases deep dive, caching strategies, load balancing, message queues</td></tr>
    <tr><td>3</td><td>Practice</td><td>Solve 10+ system design problems, draw diagrams, mock interviews</td></tr>
    <tr><td>4</td><td>Polish</td><td>Whiteboarding practice, review weak areas</td></tr>
  </tbody>
</table>

Mock interviews ke liye use kar: LeetCode System Design, Pramp, Interviewing.io, Exponent.

### What Interviewers Look For

<table class="table-dash">
  <thead><tr><th>Level</th><th>Expectation</th></tr></thead>
  <tbody>
    <tr><td><strong>Hire</strong></td><td>Clear communication, structured approach, good trade-off analysis, handles scale, asks great questions</td></tr>
    <tr><td><strong>Maybe</strong></td><td>Basic design works, some gaps, limited scale discussion, needs prompting</td></tr>
    <tr><td><strong>No Hire</strong></td><td>Can't design basic system, poor communication, no scale consideration, doesn't ask questions</td></tr>
  </tbody>
</table>

---

## 🏛️ Big Tech Architecture Patterns — FAANG-Level System Design

<div class="tip-banner">
  <span class="tip-badge">🔥 WHY THIS MATTERS</span>
  FAANG interviews mein tu system design round mein <strong>ye patterns demonstrate kare</strong> ki tu real-world distributed systems samajhta hai. Senior role ke liye ye mandatory hai.
</div>

### Core Distributed Patterns

<div class="ds-grid">
  <div class="ds-card">
    <h4>🔀 CQRS</h4>
    <p>Command Query Responsibility Segregation — read aur write models alag. Amazon, eBay use karte hain for high write throughput.</p>
    <div class="ds-meta">Amazon · eBay</div>
  </div>
  <div class="ds-card">
    <h4>📋 Event Sourcing</h4>
    <p>State nahi, events store karo. Full audit trail, temporal queries. Kafka-based systems, banking, Git.</p>
    <div class="ds-meta">Kafka · EventStore</div>
  </div>
  <div class="ds-card">
    <h4>🛡️ Saga Pattern</h4>
    <p>Distributed transactions without 2PC. Choreography vs Orchestration. Each step has compensating action on failure.</p>
    <div class="ds-meta">Uber · Netflix</div>
  </div>
  <div class="ds-card">
    <h4>🔌 Circuit Breaker</h4>
    <p>Fail fast, degrade gracefully. Three states: Closed → Open → Half-Open. Prevent cascading failures.</p>
    <div class="ds-meta">Netflix Hystrix · Resilience4j</div>
  </div>
  <div class="ds-card">
    <h4>🔄 Bulkhead Pattern</h4>
    <p>Resources isolate karo — ek component fail ho toh doosra unaffected. Thread pools, connection pools per service.</p>
    <div class="ds-meta">Ship analogy</div>
  </div>
  <div class="ds-card">
    <h4>🔁 Retry + Backoff</h4>
    <p>Exponential backoff with jitter. Transient failures handle karo. Don't retry immediately — amplify mat karo.</p>
    <div class="ds-meta">AWS SDKs</div>
  </div>
  <div class="ds-card">
    <h4>🌊 Eventual Consistency</h4>
    <p>Strong consistency chodni padti hai scale ke liye. DynamoDB, Cassandra, DNS — eventually consistent hote hain.</p>
    <div class="ds-meta">DynamoDB · Cassandra</div>
  </div>
  <div class="ds-card">
    <h4>⚖️ Rate Limiting</h4>
    <p>Token bucket, sliding window, leaky bucket. API abuse prevention, fair usage. Distributed counters via Redis.</p>
    <div class="ds-meta">Stripe · GitHub</div>
  </div>
</div>

### Distributed ID Generation

Unique IDs banana distributed systems mein tricky hai — auto-increment kaam nahi karta.

**Snowflake (Twitter)**:
```
64-bit ID structure:
 0 | 41-bit timestamp | 10-bit worker | 12-bit sequence
─┴─────────────────────┴───────────────┴───────────────
```
- 41 bits: millisecond precision (~69 years)
- 10 bits: worker ID (1024 machines)
- 12 bits: sequence per ms (4096 IDs/ms)
- Total: ~4M IDs/sec per datacenter

```python
def snowflake_id(worker_id, datacenter_id, sequence=0):
    timestamp = int(time.time() * 1000) - EPOCH
    return (timestamp << 22) | (datacenter_id << 17) | (worker_id << 12) | sequence
```

**UUID v4**: 128-bit random — 122 random bits + 6 version bits. 5.3×10³⁶ unique values. No coordination needed. Problem: not sortable, not sequential, 36-char string.

**UUID v7**: Time-ordered. First 48 bits = Unix timestamp (ms). Sortable! Great for DB primary keys.

**KSUID**: 27-char base62. Timestamp + random payload. Sortable, URL-safe. Shorter than UUID.

**Comparison**:
| ID | Size | Sortable | Coordination | Use Case |
|---|---|---|---|---|
| Snowflake | 64-bit | ✅ (time-sorted) | Requires worker ID | Internal systems |
| UUID v4 | 128-bit | ❌ | None | Decentralized, global |
| UUID v7 | 128-bit | ✅ | None | Modern apps, DB PK |
| KSUID | 27 chars | ✅ | None | URL-safe IDs |

### Distributed Locking

Distributed systems mein mutex ki zaroorat (cron jobs, resource contention).

**Redis Redlock**:
```python
import redis
import uuid

class Redlock:
    def __init__(self, redis_nodes):
        self.redis_nodes = redis_nodes
        self.quorum = len(redis_nodes) // 2 + 1

    def acquire(self, lock_name, ttl_ms=10000):
        lock_key = f"lock:{lock_name}"
        lock_value = str(uuid.uuid4())

        acquired = 0
        for r in self.redis_nodes:
            if r.set(lock_key, lock_value, nx=True, px=ttl_ms):
                acquired += 1

        if acquired >= self.quorum:
            return lock_value  # Lock acquired
        else:
            # Rollback — release partial locks
            for r in self.redis_nodes:
                r.delete(lock_key)
            return None

    def release(self, lock_name, lock_value):
        # Lua script — atomic check-and-delete
        script = """
        if redis.call("get", KEYS[1]) == ARGV[1] then
            return redis.call("del", KEYS[1])
        end
        return 0
        """
        for r in self.redis_nodes:
            r.eval(script, 1, f"lock:{lock_name}", lock_value)
```

**ZooKeeper Locks**: Sequential ephemeral znodes. Create node → get sequence → lowest sequence = lock holder. Watch next node for release.

**Problems with Redlock**: Not safe under clock drift. Martin Kleppmann (DDIA author) critiques it. Use ZooKeeper or etcd for strict correctness.

### Bloom Filter

Space-efficient probabilistic data structure — "Is this item in the set?"

**How it works**:
```
1. Create bit array of size M (e.g., 1MB = 8M bits)
2. Use K hash functions (e.g., murmur3, xxhash, fnv)
3. Add element: hash(element) % M → set all K positions to 1
4. Check: hash(element) % M → if any position is 0 → NOT in set
5. False positives possible (all K bits set by chance)
6. False negatives: impossible
```

**Example**:
```
Bit array: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] (M=10, K=3)
Add "hello" → hash positions 2, 5, 7 → [0,0,1,0,0,1,0,1,0,0]
Add "world" → hash positions 1, 5, 8 → [0,1,1,0,0,1,0,1,1,0]
Check "foo" → hash positions 0, 3, 6 → all 0 → NOT in set ✅
Check "bar" → hash positions 2, 5, 8 → all 1 → maybe in set (false positive risk)
```

**Python implementation**:
```python
import mmh3

class BloomFilter:
    def __init__(self, size=1000000, hash_count=7):
        self.bit_array = [0] * size
        self.size = size
        self.hash_count = hash_count

    def add(self, item):
        for seed in range(self.hash_count):
            idx = mmh3.hash(item, seed) % self.size
            self.bit_array[idx] = 1

    def contains(self, item):
        for seed in range(self.hash_count):
            idx = mmh3.hash(item, seed) % self.size
            if self.bit_array[idx] == 0:
                return False
        return True
```

**Use Cases**:
- **Medium**: Cache dedup — bloom filter ke through hi DB query bhejo
- **Cassandra**: Bloom filter per SSTable — skip irrelevant files
- **Bitcoin SPV**: Lightweight wallet — verify transaction without full blockchain
- **Spam detection**: Check if email domain is known spammer
- **HBase**: Block cache optimization

### Merkle Tree (Hash Tree)

Leaf nodes = data blocks, internal nodes = hash of children. Root = fingerprint of entire dataset.

```
           Root = H(H01 + H23)
          /                  \
    H01 = H(H0 + H1)     H23 = H(H2 + H3)
      /      \            /      \
   H0       H1         H2       H3
   │        │          │        │
 Data0    Data1     Data2    Data3
```

**Use Cases**:

**1. Cassandra Anti-Entropy**:
- Each node maintains Merkle tree of its data per range
- Compare root hashes with peer nodes
- If root differs → recursively descend to find differing leaf
- Only sync the differing data (not entire dataset)
- Configurable tree depth (trade-off: accuracy vs compute)

**2. Git**: Git objects form a Merkle DAG. Each commit = Merkle node. Commit hash = root of entire repo state.

**3. Blockchain**: Bitcoin blocks. Each block = Merkle root of transactions. Verify transaction without full block.

**4. Certificate Transparency**: Merkle tree of all issued certificates. Browser can verify certificate inclusion proof.

**Interview tip**: Mention Merkle tree for "how to detect inconsistencies in distributed data" or "how does Cassandra repair".

### Geohashing

Encode lat/lng into short string. "9q8yyk8p" = San Francisco.

**How it works**:
```
Latitude range [-90, 90], Longitude range [-180, 180]
Recursively divide — 0 for left half, 1 for right half
Interleave bits (even = longitude, odd = latitude)
Base32 encode → shorter string
```

**Geohash lengths and precision**:
| Length | Width (km) | Height (km) |
|---|---|---|
| 1 | 5,000 | 5,000 |
| 2 | 1,250 | 625 |
| 3 | 156 | 156 |
| 4 | 39 | 19.5 |
| 5 | 4.9 | 4.9 |
| 6 | 1.2 | 0.61 |
| 7 | 0.15 | 0.15 |

**Prefix property**: `9q8yy` is a larger area containing `9q8yyk8p`. Nearby places share prefix.

**Uber's H3** (replaced Geohash): Hexagonal grid — no distortion, consistent neighbor relationships. 16 resolutions (0-15). Better for geospatial queries and aggregations.

**Use Cases**:
- **Uber**: Match riders to nearby drivers
- **Foursquare**: Nearby venues
- **Redis Geo**: Uses geohash internally (GEOADD, GEORADIUS)
- **Elasticsearch**: geo-queries on geohash-prefixed cells

### Big Tech Scale Patterns

<div class="table-dash">
<table>
  <tr><th>Pattern</th><th>Amazon</th><th>Google</th><th>Meta</th><th>Netflix</th><th>Uber</th></tr>
  <tr>
    <td><strong>Database</strong></td>
    <td>DynamoDB (NoSQL)</td>
    <td>Spanner (Global SQL)</td>
    <td>TAO (Graph)</td>
    <td>EVCache (Redis)</td>
    <td>Schemaless (MySQL)</td>
  </tr>
  <tr>
    <td><strong>Messaging</strong></td>
    <td>SQS/SNS</td>
    <td>Pub/Sub</td>
    <td>Thrift + Scribe</td>
    <td>Kafka</td>
    <td>Ringpop + Kafka</td>
  </tr>
  <tr>
    <td><strong>Service Mesh</strong></td>
    <td>AWS App Mesh</td>
    <td>Istio (internal)</td>
    <td>Internal</td>
    <td>Envoy + Zuul</td>
    <td>TChannel</td>
  </tr>
  <tr>
    <td><strong>Container Orchestration</strong></td>
    <td>ECS/EKS</td>
    <td>Borg (internal)</td>
    <td>Twine (internal)</td>
    <td>Titus (internal)</td>
    <td>Peloton (internal)</td>
  </tr>
  <tr>
    <td><strong>Observability</strong></td>
    <td>CloudWatch + X-Ray</td>
    <td>Monarch + Dapper</td>
    <td>Scuba + ODS</td>
    <td>Atlas + Spinnaker</td>
    <td>Jaeger + M3</td>
  </tr>
  <tr>
    <td><strong>CI/CD</strong></td>
    <td>CodePipeline</td>
    <td>Jenkins-based</td>
    <td>Phabricator + Sandcastle</td>
    <td>Spinnaker + Nebula</td>
    <td>Buildkite + Deployator</td>
  </tr>
</table>
</div>

<div class="tip-banner">
  <span class="tip-badge">💡 INTERVIEW TIP</span>
  Jab tu koi system design kare, toh mention karo <strong>"Amazon ka DynamoDB eventually consistent hai, lekin Google ka Spanner externally consistent hai — different trade-offs for different use cases"</strong>. Ye dikhata hai ki tu real-world systems jaanta hai.
</div>

---

Naye zamane mein AI system design bhi poochte hain:

1. **Design RAG Pipeline** — Chunking strategy, embedding model selection, vector DB (Pinecone/Weaviate), hybrid search (dense + sparse)
2. **Design Model Serving Platform** — Batch vs real-time, GPU utilization, autoscaling, model versioning, A/B testing
3. **Design Agent System** — Orchestrator + specialist agents, tool use, memory management, rate limiting, cost tracking
4. **Design Recommendation System** — Collaborative filtering vs content-based, real-time vs batch, cold start problem, AB testing

---

## Checklist

- [ ] Scalability concepts (horizontal/vertical, caching, CDN) samjhe
- [ ] CAP theorem + sharding + replication clear hai
- [ ] Saare topics padh liye (syllabus se)
- [ ] URL shortener, Twitter, Instagram, Uber, WhatsApp case studies practice ki
- [ ] YouTube, Netflix, Google Search advanced case studies analysis ki
- [ ] REST/GraphQL/gRPC API design patterns aate hain
- [ ] Kafka/RabbitMQ message queue concepts clear hain
- [ ] Event sourcing, CQRS, saga pattern padh liya
- [ ] Microservices patterns (circuit breaker, service mesh, bulkhead) implement kiye
- [ ] Observability (Prometheus, Grafana, ELK, Jaeger) setup kiya
- [ ] AI system design (RAG, agents, model serving, recommendation) samjha
- [ ] Design patterns (Singleton, Factory, Observer, Strategy) implement kiye
- [ ] SOLID principles code mein apply kiya
- [ ] System design interview framework (PEDALS/RADIO) roj practice mein hai
- [ ] Back-of-envelope calculations (DAU, QPS, storage, bandwidth) practice ki
- [ ] System design interview framework practice ki

---

## 📂 Original Deep Content

Original System Design course — 61+ files covering all topics:

- [System Design Course Index](../original/10-System-design/)
- Load Balancing, Caching, Database Design, Microservices, Case Studies

---

## System Design Interview Checklist

Har interview phase mein ye cover karna:

**Phase 1: Requirements Clarification**
- [ ] Functional requirements: exactly kya build karna hai?
- [ ] Non-functional: scale (DAU, QPS), latency (p99), availability (99.9%+)
- [ ] Constraints: budget, team size, timeline
- [ ] Ask clarifying questions — don't assume!

**Phase 2: Capacity Estimation**
- [ ] DAU → QPS (average + peak)
- [ ] Storage per entity → total storage (1 year, 5 year)
- [ ] Bandwidth (ingress/egress)
- [ ] Cache size estimate (working set)

**Phase 3: Data Model**
- [ ] Entities defined with attributes
- [ ] Relationships (1:1, 1:N, M:N)
- [ ] SQL vs NoSQL decision
- [ ] Schema design (normalization trade-offs)
- [ ] Indexing strategy

**Phase 4: High-Level Design**
- [ ] Architecture diagram drawn
- [ ] Components labeled (client, LB, API gateway, services, DB, cache, CDN)
- [ ] Data flow arrows (read path, write path)
- [ ] Major protocol decisions (REST vs gRPC, sync vs async)

**Phase 5: Deep Dive on Critical Components**
- [ ] Database: sharding key, replication, read replicas
- [ ] Caching: what to cache, eviction policy, cache consistency
- [ ] Messaging: which queue, guarantees, retry/dead letter
- [ ] Microservices: service boundaries, communication pattern
- [ ] Resilience: circuit breaker, bulkhead, rate limiting

**Phase 6: Scaling & Trade-offs**
- [ ] Bottlenecks identified (DB, network, CPU, memory)
- [ ] Scale solutions proposed (sharding, caching, CDN, async)
- [ ] Trade-offs discussed (consistency vs availability, cost vs performance)
- [ ] Alternative approaches compared (push vs pull, SQL vs NoSQL)
- [ ] Failure scenarios addressed (SPOF, degradation)

## Common Mistakes in System Design Interviews

| Mistake | Why It Hurts | Fix |
|---|---|---|
| **Skipping requirements** | Design doesn't match problem | Spend 5-10 min clarifying |
| **No capacity estimation** | Can't prove you handle scale | Always estimate traffic + storage |
| **Single solution focus** | Shows narrow thinking | Compare 2-3 approaches |
| **Ignoring failure** | Design isn't realistic | Discuss SPOF, retry, circuit breaker |
| **Too detailed too early** | Wastes time on wrong area | Start high-level, then deep dive |
| **No numbers** | Vague, unconvincing | Use concrete metrics (QPS, latency, storage) |
| **Silence while thinking** | Interviewer doesn't know your process | Think out loud |
| **Being defensive** | Rejects guidance | Accept hints, evolve design |
| **Over-engineering** | Complex solution for simple problem | Start simple, iterate |
| **Skipping trade-offs** | Looks like you don't see alternatives | Always discuss pros/cons |
| **Buzzwords without depth** | "We'll use microservices" but can't explain why | Justify every choice |
| **No design for scale** | Works for 100 users, fails at 1M | Discuss sharding, caching, CDN |

## Resources

**Books** (Must Read):
- **Designing Data-Intensive Applications** (Martin Kleppmann) — The Bible. Covers distributed systems, storage, consistency, replication, partition. Interview questions ka 80% yahi se aata hai.
- **System Design Interview — An Insider's Guide** (Alex Xu) — Step-by-step case studies, FAANG-specific prep. 2-book series.
- **System Design Interview — Vol 2** (Alex Xu) — More case studies (Uber, Zoom, Dropbox, etc.)

**YouTube Channels**:
- **Gaurav Sen** (System Design) — Best Hindi/English channel for concepts. Covers everything.
- **codeKarle** — FAANG-specific system design, Hindi mein.
- **ByteByteGo** (Alex Xu) — Animated explanations, short and clear.
- **Jordan has no life** — System design interviews with real FAANG engineers.

**Online Courses**:
- **MIT 6.824: Distributed Systems** (free on YouTube) — Legendary course. Lectures by Robert Morris. Covers Raft, GFS, MapReduce, Spanner.
- **Grokking the System Design Interview** (DesignGurus) — Structured case studies.
- **System Design Course** (InterviewReady) — Udit Agarwal — Detailed architecture deep dives.

**Practice Platforms**:
- **LeetCode System Design** — Curated problems with discussions
- **Pramp** — Free mock interviews with peers
- **Interviewing.io** — Anonymous mock interviews with FAANG engineers
- **Exponent** — System design practice with feedback

**Blogs & Newsletters**:
- **High Scalability** — Real-world architecture breakdowns
- **The System Design Newsletter** — Weekly deep dives
- **Engineering Blogs**: Netflix TechBlog, Uber Engineering, Meta Engineering, Google AI Blog

---

## Notes

<div id="page-notes"></div>
