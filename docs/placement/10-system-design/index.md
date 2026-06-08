# System Design — Bada Soch, Bada Banao

System design senior role aur FAANG interviews mein make-or-break hota hai. Ye section tujhe fundamentals se lekar advanced distributed systems tak le jayega. Master content `placement-original/Main-Course/Placement-01/10-System-design/` mein hai.

Placement-original mein:
- `placement-original/Main-Course/Placement-01/10-System-design/syllabus.md` — Poora 10-week breakdown (1464 lines of pure gold)
- `placement-original/Main-Course/Placement-01/10-System-design/INTERVIEW_PREPARATION_GUIDE.md` — FAANG interview framework, practice questions, pro tips
- `placement-original/Main-Course/Placement-01/10-System-design/Case-Studies/url-shortener-complete.md` — TinyURL/bitly ka full HLD + LLD
- `placement-original/Main-Course/Placement-01/10-System-design/Case-Studies/social-media-platform-complete.md` — Twitter-like platform ka end-to-end design

## Course Structure

From `placement-original/Main-Course/Placement-01/10-System-design/syllabus.md`:

| Week | Topic | Key Highlights |
|------|-------|---------------|
| 1 | Foundations | CAP theorem, consistency models, scalability metrics, network fundamentals |
| 2 | Core Building Blocks | SQL/NoSQL, caching strategies (LRU, LFU, TTL), load balancing, reverse proxy |
| 3 | API Design & Messaging | REST, GraphQL, gRPC, Kafka, RabbitMQ, event sourcing, saga pattern, CQRS |
| 4 | Advanced Patterns | Microservices, circuit breaker, service mesh, observability (Prometheus, Grafana, ELK) |
| 5 | Data Storage & Processing | S3, CDN, Elasticsearch, MapReduce, Spark, Kafka Streams |
| 6 | Distributed Systems | Consensus (Paxos/Raft), distributed transactions, consistent hashing, gossip protocol |
| 7 | Reliability & Monitoring | SLA/SLO/SLI, chaos engineering, incident response, distributed tracing |
| 8 | Security & Infrastructure | OAuth 2.0, JWT, rate limiting, DDoS protection, secrets management |
| 9 | Advanced Patterns | CQRS, event sourcing, bucket 4-rate limiting, bloom filters, Merkle trees |
| 10 | Interview Mastery | Mock interviews, whiteboarding, 40+ case studies, FAANG-specific prep |

Har week ka detailed breakdown syllabus mein hai — Week 1 se Week 10 tak har topic, hands-on lab, aur exercise ke saath.

---

## Week 1 — Foundations (12 hrs)

**Day 1-2: Introduction & Core Principles**
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

---

## Week 2 — Core Building Blocks (12 hrs)

**Databases & Storage**
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

**Load Balancing & Proxies**
- Layer 4 (Transport) vs Layer 7 (Application)
- Algorithms: Round Robin, Least Connections, IP Hash, Geo-based
- Tools: Nginx, HAProxy, AWS ELB/ALB
- Reverse Proxy: SSL termination, rate limiting, API Gateway pattern

Lab: Implement Consistent Hashing in Python + LRU Cache implementation

---

## Week 3 — API Design & Messaging (12 hrs)

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

---

## Week 4 — Advanced Patterns & Practices (12 hrs)

**Microservices Architecture**
- Monolith → Microservices migration (Netflix journey)
- Service boundaries, Domain-Driven Design
- Service mesh: Istio, Linkerd
- Circuit Breaker (Hystrix, Resilience4j), Bulkhead Pattern, Retry & Timeout

**Security & Authentication**
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

---

## Week 5 — Storage & Data Processing (12 hrs)

**File Storage & CDN**
- S3 Architecture: Durability (11 nines), storage classes (hot/cold/archive), multipart upload, pre-signed URLs
- CDN: CloudFront, Cloudflare, Akamai — edge locations, cache control, invalidation
- Block Storage (EBS) vs File Storage (NFS) vs Object Storage (S3)

**Search & Indexing**
- Elasticsearch: Inverted index, TF-IDF, BM25, shards & replicas, Query DSL
- Fuzzy matching, auto-complete, faceted search, geo-spatial search

**Big Data Processing**
- Batch: MapReduce, Hadoop, Spark, ETL pipelines
- Stream: Kafka Streams, Apache Flink, windowing, stateful processing
- Data Warehouses: Redshift, BigQuery, Snowflake

---

## Week 6-7 — Real-World Case Studies (24 hrs)

Har case study follows same structure:
1. Problem Statement & Constraints
2. Functional + Non-Functional Requirements
3. Capacity Estimation (traffic, storage, bandwidth)
4. API Design (REST endpoints)
5. Database Schema
6. High-Level Architecture Diagram
7. Deep Dive into Critical Components
8. Bottlenecks & Solutions
9. Trade-offs & Alternatives
10. Interview Questions

### Case Study: URL Shortener (TinyURL)

**Requirements**: 100M URLs/month, 10:1 read-to-write, <50ms redirect, 99.99% availability

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

Poore case studies ke saath `placement-original/Main-Course/Placement-01/10-System-design/Case-Studies/` folder mein code, schema, aur architecture diagrams hain.

---

## Scalability

### Horizontal vs Vertical Scaling

```
Vertical:   Bigger machine → limits exist
Horizontal: More machines → infinite scaling
```

### Load Balancing

- Round Robin, Weighted, Least Connections
- Tools: Nginx, HAProxy, AWS ELB

### Caching

- **Redis**: In-memory cache, data structures, pub/sub
- **Memcached**: Simple key-value cache
- **CDN**: CloudFront, Cloudflare for static assets

```bash
# Redis example
redis-cli SET user:123 '{"name":"Raushan"}'
redis-cli GET user:123
```

---

## Database Design

### Sharding

```
Horizontal sharding: Users 1-1000 → Shard 1, 1001-2000 → Shard 2
Vertical sharding: User data → One DB, Posts → Another DB
```

### Replication

- **Master-Slave**: Read replicas
- **Multi-Master**: Write to any node
- **Quorum**: Consensus-based replication

### CAP Theorem

```
Consistency → Availability → Partition Tolerance
(Choose 2 of 3)
CP: Banking systems
AP: Social media
CA: Single-node systems
```

---

## Microservices

### Communication

- **Synchronous**: REST, gRPC
- **Asynchronous**: Message Queues (RabbitMQ, Kafka)

### API Gateway

```yaml
Gateway:
  routes:
    /users/* → User Service
    /orders/* → Order Service
    /payments/* → Payment Service
```

### Circuit Breaker

Failures ko cascade hone se bachata hai:

```
CLOSED → OPEN (failure threshold crossed) → HALF_OPEN (test) → CLOSED
```

---

## Case Studies

### WhatsApp (1B+ Users)

From `placement-original/Main-Course/Placement-01/10-System-design/Case-Studies/`:

- **Chat**: Custom XMPP → own protocol
- **Storage**: Messages on device, not server
- **Real-time**: Persistent TCP connection
- **Scaling**: Erlang (soft real-time, massive concurrency)
- **Group chat**: Fanout approach, delivery receipts

### Instagram

- **Feed**: Redis sorted sets, fanout-on-write for small users, fanout-on-load for large
- **Photos**: S3 for storage, CDN for delivery
- **Stories**: Ephemeral storage, pre-loading
- **Ranking**: ML-based feed ranking algorithm

### Uber

- **Matching**: Geospatial indexing (QuadTrees, H3), real-time driver location via WebSockets
- **Ride flow**: State machine (requesting → accepted → in-progress → completed)
- **Pricing**: Surge pricing algorithm, supply-demand curves
- **ETA**: Real-time traffic data, ML-based prediction

### Netflix

- **Content delivery**: Open Connect CDN (custom CDN at ISP edges)
- **Microservices**: 500+ services, each independently deployable
- **Resilience**: Chaos Monkey, Hystrix circuit breaker, Chaos Engineering
- **Recommendations**: Personalized ML models, A/B testing at scale

### YouTube

- **Upload pipeline**: Video transcoding (multiple resolutions), adaptive bitrate streaming (HLS/DASH)
- **CDN**: Google's global edge network, pre-fetching popular content
- **Recommendations**: Deep neural networks, user history, watch time optimization

### Google Search

- **Crawling**: Distributed web crawler, politeness policies, freshness
- **Indexing**: Inverted index at petabyte scale, MapReduce for index building
- **Ranking**: PageRank algorithm, 200+ ranking signals, BERT for query understanding

---

## AI System Design

From main curriculum Phase 8:

### RAG Pipeline (Retrieval Augmented Generation)

```ascii
User Query → Embedding → Vector Search (Pinecone/Weaviate)
    → Retrieve relevant chunks → LLM → Response
```

### Agent Systems

- **Orchestrator Agent**: Routes tasks
- **Specialist Agents**: Code, research, data
- **Memory**: Conversation history, vector store
- **Tools**: API calls, database queries, code execution

### Model Serving

- **Batch**: Offline predictions
- **Real-time**: REST/gRPC endpoints
- **Streaming**: WebSockets for live

---

## Design Patterns

### Creational

| Pattern | Use Case |
|---------|----------|
| **Singleton** | Database connection, Cache instance |
| **Factory** | Creating objects without exposing logic |
| **Builder** | Complex object construction |

### Structural

| Pattern | Use Case |
|---------|----------|
| **Adapter** | Integrate incompatible interfaces |
| **Decorator** | Add behavior dynamically |
| **Facade** | Simplified interface to complex system |

### Behavioral

| Pattern | Use Case |
|---------|----------|
| **Observer** | Event handling, notifications |
| **Strategy** | Interchangeable algorithms |
| **Command** | Request queuing, undo operations |

### SOLID Principles

```
S — Single Responsibility: Ek class ka ek kaam
O — Open/Closed: Extension ke liye open, modification ke liye closed
L — Liskov Substitution: Child class parent ki jagah le sakti hai
I — Interface Segregation: Chhote, focused interfaces
D — Dependency Inversion: High-level modules depend on abstractions
```

---

## Interview Preparation

From `placement-original/Main-Course/Placement-01/10-System-design/INTERVIEW_PREPARATION_GUIDE.md`:

### Interview Format (45-60 min)

| Phase | Time | What to Do |
|-------|------|------------|
| Clarification | 5-10 min | Ask questions, define scope, functional + non-functional requirements |
| High-Level Design | 10-15 min | Draw architecture diagram, components, data flow |
| Deep Dive | 15-20 min | Discuss critical components in detail (feed generation, sharding, caching) |
| Scaling & Trade-offs | 10-15 min | Bottlenecks, scale solutions, pros/cons of decisions |
| Q&A | 5 min | Answer interviewer questions |

### The PEDALS Framework

```
P — Problem Understanding: Clarify requirements, don't assume
E — Estimation: Calculate capacity, storage, bandwidth
D — Design High-Level: Create overall architecture
A — API Design: Define key interfaces and contracts
L — Low-Level Design: Deep dive into critical components
S — Scale & Trade-offs: Discuss how to scale and trade-off decisions
```

### Framework for Any Design Problem

```
1. REQUIREMENTS → Functional + Non-functional (scale, latency, availability)
2. ESTIMATIONS → Traffic, storage, bandwidth
3. DATA MODEL → Entities, relationships
4. HIGH-LEVEL DESIGN → Components, diagram
5. DEEP DIVE → Key components in detail
6. BOTTLENECKS → Trade-offs, improvements
```

### Back-of-Envelope Calculations

```
DAU = 100M
Daily writes = 100M × 10 posts = 1B posts
Storage per post = 1KB
Daily storage = 1TB
5 year storage = 1TB × 365 × 5 = 1.8PB
```

### Common Interview Questions

#### Easy (Entry Level)
1. **Design URL Shortener (TinyURL)** — Hash collisions, base62, expiration, analytics
2. **Design Pastebin** — Text storage, syntax highlighting, rate limiting
3. **Design Parking Lot System** — Slot management, entry/exit tracking, payment

#### Medium (Mid-Senior)
4. **Design Twitter** — Fanout (push vs pull), hot user problem, timeline caching
5. **Design Instagram** — Image storage (S3 + CDN), feed ranking, stories
6. **Design Uber** — Geo-spatial indexing (QuadTrees, H3), real-time WebSockets, surge pricing
7. **Design WhatsApp** — Message storage, delivery guarantees, offline messages, E2E encryption

#### Hard (Senior+)
8. **Design YouTube** — Video transcoding pipeline, adaptive bitrate streaming, CDN strategy
9. **Design Netflix** — Multi-bitrate encoding, Open Connect CDN, recommendation engine
10. **Design Google Search** — Distributed crawling, inverted index, PageRank, query optimization

### Interview Tips — Do's & Don'ts

#### ✅ Do's:
- Out loud soch — har decision explain kar
- Start simple, phir iterate — pehle basic diagram bana, then components add kar
- Trade-offs discuss kar — koi perfect solution nahi hota
- Concrete numbers use kar — DAU, QPS, storage estimates de
- Multiple approaches compare kar (push vs pull, SQL vs NoSQL)
- Interviewer ke hints ko catch kar — woh tujhe direction de raha hai
- Design for failure — SPOF, redundancy, disaster recovery soch

#### ❌ Don'ts:
- Seedha solution mat jump kar — requirements pehle clear kar
- Requirements assume mat kar (especially non-functional ones)
- Defensive mat ho — suggestions accept kar
- Buzzwords mat pel without understanding
- Over-engineer mat kar initially — simple, then iterate
- Estimation skip mat kar — FAANG interviewers check this

### 4-Week Interview Prep Plan

| Week | Focus | Key Actions |
|------|-------|-------------|
| 1 | Foundations | CAP theorem, capacity estimation, study 3-5 case studies |
| 2 | Core Concepts | Databases deep dive, caching strategies, load balancing, message queues |
| 3 | Practice | Solve 10+ system design problems, draw diagrams, 3-5 mock interviews |
| 4 | Polish | Whiteboarding practice, time yourself (45 min), review weak areas |

Mock interviews ke liye use kar: LeetCode System Design, Pramp, Interviewing.io, Exponent.

### What Interviewers Look For

| Level | Expectation |
|-------|-------------|
| Hire | Clear communication, structured approach, good trade-off analysis, handles scale, asks great questions |
| Maybe | Basic design works, some gaps, limited scale discussion, needs prompting |
| No Hire | Can't design basic system, poor communication, no scale consideration, doesn't ask questions |

---

## AI System Design Interview Questions

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
