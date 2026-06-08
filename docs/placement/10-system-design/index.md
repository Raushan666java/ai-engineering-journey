<div class="module-hero">
  <div class="module-hero-icon">🏛️</div>
  <div class="module-hero-body">
    <h1>System Design — Bada Soch, Bada Banao</h1>
    <p>System design senior role aur FAANG interviews mein make-or-break hota hai. Ye section tujhe fundamentals se lekar advanced distributed systems tak le jayega.</p>
    <div class="module-hero-meta">
      <span class="tag tag-hot">10-Week Course</span>
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
  <thead><tr><th>Week</th><th>Topic</th><th>Key Highlights</th></tr></thead>
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

Har week ka detailed breakdown syllabus mein hai — Week 1 se Week 10 tak har topic, hands-on lab, aur exercise ke saath.

---

<div class="phase-section">
  <div class="phase-header"><span>📐 Weeks 1-2: Foundations &amp; Core Building Blocks</span><span class="tag tag-hot">24 hrs</span></div>
  <div class="phase-body">

### Week 1 — Foundations (12 hrs)

**Day 1-2: Introduction &amp; Core Principles**
- High-Level Design (HLD) vs Low-Level Design (LLD)
- RADIO Framework (Requirements, Architecture, Design, Identify, Optimize)
- Functional vs Non-Functional Requirements

**Day 3-4: Scalability Fundamentals**
- Horizontal vs Vertical Scaling — kab kya use karein
- Metrics: QPS, Latency, Throughput, Availability (The Nines — 99.9% vs 99.99% vs 99.999%)
- Back-of-Envelope Calculations: DAU, storage, bandwidth, cache estimates
- Reliability: MTBF, MTTR, SPOF elimination

**Day 5-6: Distributed Systems Basics**
- CAP Theorem — CP (Banking) vs AP (Social Media) trade-offs
- Consistency Models: Strong, Eventual, Causal, Read-Your-Writes
- Network Fundamentals: TCP vs UDP, HTTP/2 vs HTTP/3, WebSockets, Long Polling vs SSE
- Latency Numbers Every Programmer Should Know

Lab: Twitter-like system ke liye capacity estimation (200M DAU, 50 tweets/day)

### Week 2 — Core Building Blocks (12 hrs)

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

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>🔌 Weeks 3-4: API Design, Messaging &amp; Advanced Patterns</span><span class="tag tag-hot">24 hrs</span></div>
  <div class="phase-body">

### Week 3 — API Design &amp; Messaging (12 hrs)

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

### Week 4 — Advanced Patterns &amp; Practices (12 hrs)

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

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>💾 Week 5: Storage &amp; Data Processing</span><span class="tag tag-hot">12 hrs</span></div>
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

  </div>
</div>

<div class="phase-section">
  <div class="phase-header"><span>🏗️ Weeks 6-7: Real-World Case Studies</span><span class="tag tag-hot">24 hrs</span></div>
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

### 4-Week Interview Prep Plan

<table class="table-dash">
  <thead><tr><th>Week</th><th>Focus</th><th>Key Actions</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Foundations</td><td>CAP theorem, capacity estimation, study 3-5 case studies</td></tr>
    <tr><td>2</td><td>Core Concepts</td><td>Databases deep dive, caching strategies, load balancing, message queues</td></tr>
    <tr><td>3</td><td>Practice</td><td>Solve 10+ system design problems, draw diagrams, 3-5 mock interviews</td></tr>
    <tr><td>4</td><td>Polish</td><td>Whiteboarding practice, time yourself (45 min), review weak areas</td></tr>
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
- [ ] Week 1-5 ke saare topics padh liye (syllabus se)
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
- [ ] 4-week interview prep plan follow kiya
- [ ] 10-week system design course structure follow kiya

---

## 📂 Original Deep Content

Original System Design course — 61+ files covering 10 weeks:

- [System Design Course Index](../original/10-System-design/)
- Load Balancing, Caching, Database Design, Microservices, Case Studies

---

## Notes

<div id="page-notes"></div>
