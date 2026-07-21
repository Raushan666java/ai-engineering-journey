# Scalability Fundamentals — Vertical, Horizontal, and Beyond

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand the difference between vertical and horizontal scaling |
| LO2 | Design stateless applications for horizontal scalability |
| LO3 | Implement database sharding and read replicas |
| LO4 | Use load balancers to distribute traffic across servers |
| LO5 | Apply caching strategies for performance improvement |
| LO6 | Measure and analyze system scalability metrics |

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 1.1 | Vertical vs Horizontal Scaling | Scale up vs scale out tradeoffs |
| 1.2 | Stateless Design | Separating state from compute |
| 1.3 | Load Balancing | Algorithms, health checks, session persistence |
| 1.4 | Database Scaling | Sharding, replication, read replicas |
| 1.5 | Caching Fundamentals | CDN, Redis, in-memory caches |
| 1.6 | Asynchronous Processing | Queues, event-driven architecture |
| 1.7 | Performance Metrics | Latency, throughput, p99, SLA/SLO |
| 1.8 | Capacity Planning | Estimating traffic, provisioning |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Scaling Types] --> B[Stateless Design]
    B --> C[Load Balancing]
    C --> D[DB Scaling]
    D --> E[Caching]
    E --> F[Async Processing]
    F --> G[Metrics]
    G --> H[Capacity Planning]
```

## Introduction

Every AI system eventually faces the question: how do we handle 10x more users, 100x more data, or 1000x more inference requests? Scalability fundamentals answer that question by providing frameworks for stateless design, load balancing, database scaling, and caching. These concepts are essential for system design interviews and for building ML infrastructure that actually works at production scale.

## Prerequisites

- Basic understanding of client-server architecture
- Familiarity with databases (SQL queries, tables)
- Experience with at least one backend framework
- Reference: Module 05 (FastAPI Backend) for API concepts

## Theory

### 1.1 Vertical vs Horizontal Scaling

**Vertical scaling (scale up)**: Add more power to a single machine — more CPU, RAM, faster disks. Simple but has a hard limit (max server specs) and creates a single point of failure.

**Horizontal scaling (scale out)**: Add more machines to distribute the load. Virtually unlimited, provides fault tolerance, but requires stateless application design and introduces complexity.


## Examples

```mermaid
flowchart LR
    subgraph Vertical["Vertical Scaling"]
        V1[Single Server] --> V2[More CPU]
        V1 --> V3[More RAM]
        V1 --> V4[Faster Disk]
    end
    subgraph Horizontal["Horizontal Scaling"]
        H1[LB] --> H2[Server 1]
        H1 --> H3[Server 2]
        H1 --> H4[Server N]
    end
```

| Aspect | Vertical | Horizontal |
|--------|----------|------------|
| Cost | Linear | Sub-linear (commodity hardware) |
| Downtime | Required during upgrade | None (rolling) |
| Fault tolerance | Low (single point) | High (redundancy) |
| Complexity | Low | High |
| Max capacity | Server limit | Unlimited |

### 1.2 Stateless Design

For horizontal scaling, applications must be stateless — any instance can handle any request.

**Stateful**: Session data stored locally on the server -> requests must be sticky (same server).
**Stateless**: Session data in external store (Redis, DB) -> any server can handle any request.

```python
# Stateful approach (sticky sessions)
session_data["user"] = user_info  # stored locally

# Stateless approach
redis.set(f"session:{session_id}", user_info)  # external store
```

**Externalizing state**:
- Session data -> Redis/Memcached
- File uploads -> S3/object store
- Job processing -> Message queue
- Database -> Managed service

### 1.3 Load Balancing

Distributes incoming traffic across multiple servers.

**Algorithms**:

| Algorithm | Behavior | Use Case |
|-----------|----------|----------|
| Round Robin | Sequentially distributes | Equal capacity servers |
| Least Connections | Sends to server with fewest connections | Variable-length requests |
| IP Hash | Routes based on client IP | Session persistence |
| Weighted | Based on server capacity | Heterogeneous servers |
| Random | Random selection | Simple distribution |

```python
class LoadBalancer:
    def __init__(self, servers):
        self.servers = servers
        self.index = 0

    def round_robin(self):
        server = self.servers[self.index]
        self.index = (self.index + 1) % len(self.servers)
        return server
```

**Health checks**: Active (periodic pings) and passive (monitoring traffic errors).

**Types**: Hardware (F5), Software (HAProxy, Nginx), Cloud (ALB, GCP LB).

### 1.4 Database Scaling

**Read replicas**: Primary handles writes; replicas handle reads. Improves read throughput.

```python
class DatabaseRouter:
    def __init__(self, primary, replicas):
        self.primary = primary
        self.replicas = replicas

    def write(self, query):
        return self.primary.execute(query)

    def read(self, query):
        import random
        replica = random.choice(self.replicas)
        return replica.execute(query)
```

**Sharding**: Splitting data across multiple databases based on a shard key.

| Strategy | Description | Pros | Cons |
|----------|-------------|------|------|
| Range-based | Shard by value range | Simple | Hot spots |
| Hash-based | Hash of shard key | Even distribution | Re-sharding hard |
| Directory-based | Lookup table | Flexible | Single point |

### 1.5 Caching Fundamentals

**Cache types**:

| Cache | Location | Speed | Size | Use Case |
|-------|----------|-------|------|----------|
| CDN | Edge | Fastest | Large | Static assets |
| Redis/Memcached | Memory | Very fast | GB | Session, API responses |
| In-memory (local) | App server | Fastest | MB | Hot data |
| Database query cache | DB | Fast | GB | Query results |

**Cache strategies**:

| Strategy | Description | Read | Write |
|----------|-------------|------|-------|
| Cache Aside | App checks cache first, then DB | Cache miss -> read DB -> update cache | Write DB, invalidate cache |
| Read Through | Cache reads DB on miss | Same | Write DB, cache invalidates |
| Write Through | Cache updates on every write | Cache always fresh | Write DB + cache together |
| Write Behind | Async write to DB | Cache always fresh | Write cache, async DB |

```python
def get_user(user_id):
    # Cache Aside pattern
    user = redis.get(f"user:{user_id}")
    if user:
        return user
    user = db.query("SELECT * FROM users WHERE id = ?", user_id)
    redis.set(f"user:{user_id}", user, ttl=3600)
    return user
```

### 1.6 Asynchronous Processing

Decouple request handling from heavy processing using queues.

```mermaid
flowchart LR
    A[API Server] -->|enqueue| B[Queue/Redis/SQS]
    B --> C[Worker 1]
    B --> D[Worker 2]
    B --> E[Worker N]
```

```python
# Producer
def handle_request(request):
    task = {"type": "process", "data": request.data}
    queue.enqueue(task)
    return {"status": "accepted"}

# Consumer (Worker)
def process_tasks():
    while True:
        task = queue.dequeue()
        if task:
            process(task["data"])
```

**Benefits**: Improved responsiveness, decoupled components, burst handling, graceful degradation.

### 1.7 Performance Metrics

| Metric | Description | Good Target |
|--------|-------------|-------------|
| Latency | Time to serve a request | < 200ms p95 |
| Throughput | Requests per second | 1000+ RPS per server |
| p99 latency | Worst 1% latency | < 500ms |
| Error rate | Failed requests / total | < 0.1% |
| Availability | Uptime percentage | 99.9%+ |

**SLA/SLO/SLI**:
- SLI: Actual measured metric
- SLO: Target value for SLI
- SLA: Contractual agreement with consequences

### 1.8 Capacity Planning

**Steps**:
1. Estimate current traffic (RPS, bandwidth)
2. Project growth (monthly 20%? annual 2x?)
3. Calculate required capacity
4. Add headroom (2-3x for spikes)
5. Load test to validate

```python
def estimate_servers(rps, rps_per_server, headroom=2.5):
    required = rps / rps_per_server
    return int(required * headroom) + 1

# Example: 10000 RPS, each server handles 500 RPS
servers = estimate_servers(10000, 500)
print(f"Need {servers} servers")  # 51
```

---

## TypeScript Parallel

```typescript
interface ServerMetrics {
  cpu: number;
  memory: number;
  requestRate: number;
  errorRate: number;
}

interface ScalingDecision {
  action: "scale-up" | "scale-out" | "scale-in";
  reason: string;
  targetCount: number;
}

function evaluateScaling(metrics: ServerMetrics, currentServers: number, maxRps: number): ScalingDecision {
  const utilization = metrics.requestRate / (currentServers * maxRps);
  if (utilization > 0.8) {
    return {
      action: "scale-out",
      reason: `CPU at ${metrics.cpu}%, RPS at ${utilization * 100}%`,
      targetCount: currentServers + 1,
    };
  }
  if (utilization < 0.3 && currentServers > 2) {
    return {
      action: "scale-in",
      reason: "Underutilized",
      targetCount: currentServers - 1,
    };
  }
  return { action: "scale-up", reason: "Within limits", targetCount: currentServers };
}
```

---

## Summary

- Vertical scaling adds power to a single machine; horizontal scaling adds more machines
- Stateless applications enable horizontal scaling by externalizing state to Redis, DB, or object stores
- Load balancers distribute traffic using round-robin, least connections, or hash-based algorithms
- Database read replicas improve read throughput; sharding distributes data across multiple databases
- Caching strategies (Cache Aside, Read/Write Through, Write Behind) reduce database load
- Asynchronous processing with queues decouples components and improves responsiveness
- Key metrics: latency, throughput, p99, error rate, availability
- Capacity planning requires estimating traffic, projecting growth, and adding headroom
- Auto-scaling combines metrics monitoring with dynamic resource provisioning
- Always design for failure: assume components will fail and build redundancy

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Growing traffic | Add more servers horizontally | Vertical scaling only |
| State management | Externalize to Redis/DB | Sticky sessions on servers |
| Database load | Add read replicas | Scaling primary only |
| Slow responses | Implement caching | Throwing more hardware |
| Heavy processing | Async queues | Synchronous processing |
| Capacity | Plan for 2-3x headroom | Exact capacity only |
| Monitoring | Track p99 latency | Only average metrics |

## Interview Q&A

<details class="tp-qa-card" data-qid="sysdes-s01-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q1: What is the difference between vertical and horizontal scaling?</summary>
  <div class="tp-qa-answer"><p>Vertical scaling (scale up) adds more resources to a single server — more CPU, RAM, disk. It's simple but has a hard limit and creates a single point of failure. Horizontal scaling (scale out) adds more servers to distribute load. It's virtually unlimited, provides fault tolerance, but requires stateless application design.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s01-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q2: How do you make an application stateless?</summary>
  <div class="tp-qa-answer"><p>Externalize all state: session data to Redis, file uploads to S3, job queues to message brokers, databases to managed services. No local state on application servers.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s01-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q3: Compare load balancing algorithms.</summary>
  <div class="tp-qa-answer"><p>Round Robin: sequential, simple. Least Connections: to server with fewest active connections. IP Hash: consistent routing per client. Weighted: based on server capacity. Random: simple uniform distribution.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s01-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q4: Explain database sharding.</summary>
  <div class="tp-qa-answer"><p>Sharding splits data across multiple databases based on a shard key. Range-based (by value range), hash-based (hash of key), or directory-based (lookup table). Improves write throughput but complicates queries and re-sharding.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s01-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q5: What is cache aside strategy?</summary>
  <div class="tp-qa-answer"><p>App checks cache first. On miss, reads from DB, stores in cache, returns. On write, updates DB and invalidates/updates cache. Most common caching pattern.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s01-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q6: Why use async processing?</summary>
  <div class="tp-qa-answer"><p>Decouples request handling from heavy processing. Improves responsiveness, handles traffic bursts, enables retries, and allows independent scaling of consumers.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s01-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q7: What is p99 latency and why does it matter?</summary>
  <div class="tp-qa-answer"><p>p99 is the latency below which 99% of requests fall. It reveals the worst-case experience for users. Averages hide bad outliers. p99 > 500ms often means usability issues.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s01-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q8: How do you do capacity planning?</summary>
  <div class="tp-qa-answer"><p>Estimate current traffic, project growth rate, calculate required resources, add 2-3x headroom for spikes, load test to validate, and continuously monitor and adjust.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s01-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q9: SLA vs SLO vs SLI?</summary>
  <div class="tp-qa-answer"><p>SLI: actual measured metric (e.g., uptime 99.95%). SLO: target value (e.g., 99.9% uptime). SLA: contract with consequences for missing SLO.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s01-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q10: Design a rate limiter for a scalable API.</summary>
  <div class="tp-qa-answer"><p>Use sliding window counter in Redis. Each request increments a counter for the user ID in the current time window. If counter exceeds limit (e.g., 100 req/min), reject with 429. Redis atomic operations ensure accuracy.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which scaling approach adds more machines?

a) Vertical
b) Horizontal
c) Diagonal
d) Linear

<details class="tp-qa-card" data-qid="sysdes-s01-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Horizontal</strong></p></div></details>

**Q2**: What makes horizontal scaling possible?

a) Sticky sessions
b) Stateless design
c) More RAM
d) Faster CPU

<details class="tp-qa-card" data-qid="sysdes-s01-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Stateless design</strong></p></div></details>

**Q3**: Which caching strategy updates cache on every write?

a) Cache Aside
b) Read Through
c) Write Through
d) Write Behind

<details class="tp-qa-card" data-qid="sysdes-s01-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Write Through</strong></p></div></details>

**Q4**: What metric represents the worst 1% of requests?

a) Average
b) Median
c) p99
d) p50

<details class="tp-qa-card" data-qid="sysdes-s01-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) p99</strong></p></div></details>

**Q5**: What splits data across multiple databases?

a) Replication
b) Sharding
c) Caching
d) Indexing

<details class="tp-qa-card" data-qid="sysdes-s01-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Sharding</strong></p></div></details>

## Exercises

**Easy** — Design a stateless authentication system that uses JWT tokens stored in Redis. Explain how it handles server restarts.

**Medium** — Design a load-balanced web application with 3 servers, a PostgreSQL read replica, and Redis cache. Draw the architecture diagram.

**Medium** — Given a system with 5000 RPS, each server handling 200 RPS, calculate how many servers are needed. Add 3x headroom.

**Hard** — Design a Twitter-like system that handles 100M DAU. Address vertical vs horizontal scaling, database sharding, caching, and async processing.

**Hard** — Implement a cache aside pattern with circuit breaker. If Redis is down, fall back to database directly and log the failure.

## Auto-Scaling Strategies

**Reactive scaling** — respond to metrics:

```python
class AutoScaler:
    def __init__(self, min_instances=2, max_instances=20):
        self.min_instances = min_instances
        self.max_instances = max_instances
        self.current = min_instances

    def evaluate(self, cpu_usage: float, memory_usage: float, rps: float):
        # Scale out if CPU > 70% or RPS per instance > threshold
        rps_per_instance = rps / max(self.current, 1)
        if cpu_usage > 70 or rps_per_instance > 500:
            self.current = min(self.current * 2, self.max_instances)
        elif cpu_usage < 30 and rps_per_instance < 100:
            self.current = max(self.current // 2, self.min_instances)
        return self.current

scaler = AutoScaler()
```

**Predictive scaling** — use historical patterns to pre-provision:

```python
def predict_capacity(traffic_history: list[int]) -> int:
    # Simple moving average prediction
    window = traffic_history[-10:]
    predicted_rps = sum(window) / len(window)
    # Add 30% headroom
    return int(predicted_rps * 1.3 / 500) + 1
```

## Distributed System Patterns

| Pattern | Description | Use Case |
|---------|-------------|----------|
| Leader Election | One node coordinates, others standby | Consensus, job scheduling |
| Gossip Protocol | Nodes share state with random peers | Service discovery, failure detection |
| Consistent Hashing | Distribute keys with minimal reshuffling | Caching, sharding |
| Two-Phase Commit | Coordinator ensures all-or-nothing | Distributed transactions |
| Quorum | Majority consensus for decisions | Strong consistency |

## Real-World Scalability Examples

| Company | Scale | Strategy |
|---------|-------|----------|
| Netflix | 200M+ users, 100K+ RPS | Microservices, CDN, async processing, chaos engineering |
| Uber | 25M+ trips/day | Domain-oriented microservices, CQRS, sharded databases |
| WhatsApp | 2B+ users, 100B+ msgs/day | Erlang/OTP, single-digit engineers per million users |
| Twitter | 500M+ tweets/day | Event-driven, caching, timeline fanout |
| Amazon | Millions of orders/day | Cell-based architecture, read replicas, eventual consistency |

## Database Connection Pool Sizing

```python
def calculate_pool_size(
    max_connections: int,
    concurrent_requests: int,
    avg_query_time_ms: float,
    target_queue_ms: float
) -> int:
    """Calculate optimal database connection pool size."""
    # Little's Law: L = λ * W
    # L = average concurrent connections
    arrival_rate = concurrent_requests / 1000  # per ms
    service_time = avg_query_time_ms
    # Target: queue wait time < target_queue_ms
    optimal = int(arrival_rate * (service_time + target_queue_ms))
    return min(optimal, max_connections)

# Example: 500 concurrent requests, 50ms avg query, 10ms target queue
pool = calculate_pool_size(100, 500, 50, 10)  # ~30 connections
```

---

## Common Mistakes

1. Scaling vertically only — vertical scaling hits hardware limits and creates a single point of failure; always plan for horizontal scaling
2. Using sticky sessions instead of externalizing state — sessions tied to a specific server prevent horizontal scaling and create failure points
3. Only monitoring average latency — averages hide bad outliers; p99 and p999 latencies reveal the true user experience
4. Skipping cache invalidation strategy — caching without a clear invalidation plan (TTL, write-through, event-driven) leads to stale data bugs
5. Ignoring connection pool sizing — too few connections create bottlenecks; too many exhaust database resources; Little's Law calculates the right size

## Revision Notes

- Vertical scaling = scale up (more power per machine); horizontal scaling = scale out (more machines)
- Stateless applications enable horizontal scaling by externalizing all state to Redis, DB, or object stores
- Load balancer algorithms: round-robin, least connections, IP hash, weighted by capacity
- Database read replicas improve read throughput; sharding distributes writes across databases
- Cache strategies: Cache Aside (most common), Read Through, Write Through, Write Behind
- Key metrics: latency, throughput, p99, error rate, availability (99.9%+)
- SLI = measured metric, SLO = target value, SLA = contractual agreement with consequences
- Capacity planning: estimate traffic, project growth, add 2-3x headroom, load test to validate

## Summary

Scalability fundamentals provide the framework for handling growing AI system demands. Vertical scaling adds power to a single machine while horizontal scaling adds more machines — the latter requires stateless application design with externalized state. Load balancers distribute traffic using various algorithms with health checks ensuring availability. Database scaling uses read replicas for read throughput and sharding for write distribution. Caching at multiple layers (CDN, Redis, in-memory) reduces database load. Asynchronous processing with queues decouples components and improves responsiveness. Capacity planning requires estimating traffic, projecting growth, and adding headroom validated through load testing.

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Design a URL shortener service that handles 100 million URLs per day. How do you handle scaling, caching, and database partitioning?
2. Explain the CAP theorem and how it applies to your choice of database for a scalable AI system

#### Amazon Style
1. Your ML inference service experiences 10x traffic spikes during certain hours. Design an auto-scaling architecture that minimizes cost while maintaining p99 < 500ms
2. Describe a time when you identified a scalability bottleneck and the engineering decisions you made to resolve it

#### Microsoft Style
1. How would you design a real-time collaboration feature for an AI writing assistant that scales to millions of concurrent users?
2. A monolithic application needs to be decomposed for horizontal scaling. Walk through your approach to identifying service boundaries

#### NVIDIA Style
1. Design a distributed GPU cluster for training large language models. How do you handle model parallelism, data loading, and fault tolerance across nodes?
2. An AI inference service runs on 50 GPU servers. How do you implement load balancing that accounts for variable GPU utilization and batch sizes?

#### AI Startup Style
1. You need to scale a RAG-based Q&A system from 100 to 100,000 daily queries. What are the three most critical scalability bottlenecks and how do you address each?
2. Your startup's API costs are growing faster than revenue. How do you optimize the architecture to reduce infrastructure costs while maintaining performance?

### Resume Tips
- List "System Design" and "Scalability" under Technical Skills with specific technologies (Redis, load balancers, sharding)
- Project example: "Designed horizontally scalable ML inference system handling 50K RPS with Redis caching, load balancing, and auto-scaling"
- Quantify scalability achievements: "Reduced p99 latency from 2s to 200ms by implementing CDN caching and database read replicas"

### Interview Day Checklist
- [ ] Can design a scalable architecture for a given system in under 20 minutes
- [ ] Can explain the trade-offs between vertical and horizontal scaling with specific examples
- [ ] Can describe at least 3 load balancing algorithms and when to use each
- [ ] Can calculate connection pool size using Little's Law
- [ ] Can explain cache invalidation strategies and when to use each

> **Next**: [Microservices Architecture](02-microservices-architecture.md)
