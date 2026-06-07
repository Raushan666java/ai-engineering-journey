# System Design — Bada Soch, Bada Banao

System design senior role aur FAANG interviews mein make-or-break hota hai. Ye section tujhe fundamentals se lekar advanced distributed systems tak le jayega. Master content `Placement/Placement-01/10-System-design/` mein hai.

## Course Structure

From `Placement/Placement-01/10-System-design/syllabus.md`:

| Week | Topic | Folder |
|------|-------|--------|
| 1 | Foundations | `Week-01-Foundations/` |
| 2 | Core Building Blocks | `Week-02-Core-Building-Blocks/` |
| 3 | API Design & Microservices | `Week-03-API-Design-Microservices/` |
| 4 | Scalability & Performance | `Week-04-Scalability-Performance/` |
| 5 | Data Storage & Processing | `Week-05-Data-Storage-Processing/` |
| 6 | Distributed Systems | `Week-06-Distributed-Systems/` |
| 7 | Reliability & Monitoring | `Week-07-Reliability-Monitoring/` |
| 8 | Security & Infrastructure | `Week-08-Security-Infrastructure/` |
| 9 | Advanced Patterns | `Week-09-Advanced-Patterns/` |
| 10 | Interview Mastery | `Week-10-Interview-Mastery/` |

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

## Case Studies

### WhatsApp (1B+ Users)

From `Placement/Placement-01/10-System-design/Case-Studies/`:

- **Chat**: Custom XMPP -> own protocol
- **Storage**: Messages on device, not server
- **Real-time**: Persistent TCP connection
- **Scaling**: Erlang (soft real-time, massive concurrency)

### Instagram

- **Feed**: Redis sorted sets
- **Photos**: S3 for storage, CDN for delivery
- **Timeline**: Fanout-on-write for small users, fanout-on-load for large

### Uber

- **Matching**: Geospatial indexing (QuadTrees, H3)
- **Ride flow**: State machine (requesting → accepted → in-progress → completed)
- **Pricing**: Surge pricing algorithm

### Netflix

- **Content delivery**: Open Connect CDN
- **Microservices**: 500+ services
- **Resilience**: Chaos Monkey, Hystrix circuit breaker

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

## Interview Preparation

From `Placement/Placement-01/10-System-design/INTERVIEW_PREPARATION_GUIDE.md`:

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

## Checklist

- [ ] Scalability concepts (horizontal/vertical, caching, CDN) samjhe
- [ ] CAP theorem + sharding + replication clear hai
- [ ] Microservices patterns (API Gateway, Circuit Breaker) padh liye
- [ ] WhatsApp/Instagram/Uber/Netflix case studies practice ki
- [ ] AI system design (RAG, agents, model serving) samjha
- [ ] Design patterns (Singleton, Factory, Observer, Strategy) implement kiye
- [ ] SOLID principles code mein apply kiya
- [ ] System design interview framework roj practice mein hai
- [ ] 10-week system design course structure follow kiya
