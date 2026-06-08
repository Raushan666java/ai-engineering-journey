# DAY 24 - QUICK REFERENCE GUIDE

## 🔥 SYSTEM DESIGN PATTERNS

### Rate Limiting
```
Token Bucket: Allows bursts
Leaky Bucket: Smooths traffic
Sliding Window: Most accurate
Fixed Window: Simple
```

### Circuit Breaker
```
States: CLOSED → OPEN → HALF_OPEN
Prevents cascading failures
Fail fast, save resources
```

### Bulkhead
```
Isolate resources
Separate thread pools
Prevent total failure
```

---

## 🔥 SCALABILITY PATTERNS

### Caching
```
Cache-Aside: Lazy loading
Write-Through: Sync write
Write-Behind: Async write
```

### Sharding
```
Hash: Even distribution
Range: Easy to add shards
Geo: Low latency
```

### Load Balancing
```
Round Robin: Simple rotation
Least Connections: Adaptive
Weighted: Capacity-based
Consistent Hashing: Minimal redistribution
```

---

## 🔥 DISTRIBUTED SYSTEMS

### Consensus
```
2PC: Strong consistency, blocking
Paxos: Proven, complex
Raft: Easier, leader-based
```

### Replication
```
Master-Slave: Read scaling
Master-Master: Write scaling
Quorum: W + R > N
```

### Consistency
```
Strong: Immediate
Eventual: Converges
Causal: Preserves order
```

---

## 🔥 MICROSERVICES

### Patterns
```
Service Discovery: Find services
Saga: Distributed transactions
CQRS: Separate read/write
Event Sourcing: Store events
```

### Resilience
```
Retry: Transient failures
Timeout: Fail fast
Circuit Breaker: Cascading prevention
Bulkhead: Isolation
```

---

## 🔥 REAL-WORLD DESIGNS

### URL Shortener
```
ID: Base62 encoding
Cache: Redis
DB: SQL/NoSQL
Redirect: 301/302
```

### Twitter Feed
```
Fan-out on Write: Push
Fan-out on Read: Pull
Hybrid: Best of both
Storage: Cassandra + Redis
```

### Uber Matching
```
Index: QuadTree/Geohash
Communication: WebSocket
Matching: Distance + rating
```

### Netflix Streaming
```
Transcode: Multiple qualities
CDN: Edge distribution
Adaptive: HLS/DASH
```

### WhatsApp
```
Delivery: WebSocket
Queue: Offline support
Storage: Cassandra + S3
Encryption: E2E
```

---

## 🔥 CAP THEOREM

```
C = Consistency
A = Availability
P = Partition Tolerance

Choose 2:
- CP: HBase, MongoDB
- AP: Cassandra, DynamoDB
- CA: Not distributed
```

---

## 🔥 SCALING STRATEGIES

```
Vertical: Bigger machine
Horizontal: More machines ✓
Functional: By feature
Data: Shard/partition
```

---

## 🔥 DESIGN PRINCIPLES

```
1. Design for failure
2. Scale horizontally
3. Cache aggressively
4. Decouple components
5. Monitor everything
```

---

## 🔥 INTERVIEW FRAMEWORK

```
1. Requirements (Functional + Non-functional)
2. Estimates (Traffic, storage)
3. API Design
4. Data Model
5. High-Level Design
6. Deep Dive
7. Trade-offs
```

---

## 🔥 PERFORMANCE METRICS

```
Latency: p50, p95, p99
Throughput: RPS, QPS, TPS
Availability: 99.9%, 99.99%
```

---

## 🔥 KEY FORMULAS

```
Sharding: shard = hash(key) % N
Consistent Hashing: hash(key) -> ring
Quorum: W + R > N
Availability: uptime / total_time
```

---

## 🔥 COMMON PATTERNS

```
Read-Heavy: Cache + Replicas
Write-Heavy: Sharding + Queues
Real-Time: WebSocket + Redis
Analytics: Stream + Batch
```

---

## 🔥 DATABASE CHOICES

```
SQL: ACID, relations
NoSQL: Scale, flexible schema
Graph: Relationships
Time-Series: Metrics, logs
```

---

## 🔥 MESSAGE QUEUES

```
Kafka: High throughput, logs
RabbitMQ: Routing, reliability
SQS: Managed, simple
```

---

## 🔥 QUICK WINS

```
✓ Add caching layer
✓ Use CDN for static content
✓ Implement connection pooling
✓ Add read replicas
✓ Compress data
✓ Use async processing
✓ Batch operations
✓ Index database queries
```

---

## 🔥 RED METRICS

```
Rate: Requests per second
Errors: Error rate
Duration: Response time
```

---

## 🔥 AVAILABILITY MATH

```
99.9%   = 8.76 hours/year downtime
99.99%  = 52.56 minutes/year downtime
99.999% = 5.26 minutes/year downtime
```
