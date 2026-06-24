# Chapter 1: Introduction to System Design
> **Previous:** None | **Next:** [02 Scalability Load Balancing](./02-scalability-load-balancing.md)

## Chapter at a Glance

| Aspect | Details |
|--------|---------|
| **Scope** | Foundational concepts, NFRs, design process, capacity estimation |
| **Key Concepts** | Scalability, reliability, availability, performance, trade-offs |
| **Design Process** | 4-phase: Requirements, Estimation, HLD, Deep Dive |
| **Estimation Tools** | QPS, storage, bandwidth, memory formulas |
| **Mindset** | Trade-off recognition, order-of-magnitude thinking |
| **Real-World Examples** | Google Search, Facebook, WhatsApp |

---
---

## Learning Objectives

- Distinguish system design from software architecture and algorithm design
- Define and evaluate ten non-functional requirements with appropriate metrics
- Apply the four-phase design process to any large-scale system problem
- Perform back-of-the-envelope capacity estimations using standard formulas
- Analyze trade-offs including latency vs throughput, consistency vs availability, and read vs write optimization
- Model real-world systems (Google Search, Facebook, WhatsApp) through a system-design lens

## Chapter at a Glance

| Aspect | Details |
|--------|---------|
| **Scope** | Foundational concepts, NFRs, design process, capacity estimation |
| **Key Concepts** | Scalability, reliability, availability, performance, trade-offs |
| **Design Process** | 4-phase: Requirements, Estimation, HLD, Deep Dive |
| **Estimation Tools** | QPS, storage, bandwidth, memory formulas |
| **Mindset** | Trade-off recognition, order-of-magnitude thinking |
| **Real-World Examples** | Google Search, Facebook, WhatsApp |

---

## Chapter Roadmap

```mermaid
flowchart LR
    A[Theory]
    B[Concept Comparison]
    A --> B
    C[Quick Reference]
    B --> C
    D[CrossApplication Matrix]
    C --> D
    E[Chapter Quiz]
    D --> E
```

---

## Theory
> **One-Sentence Takeaway:** Theory is the foundation — master it before moving to examples and exercises.

![System Design Fundamentals Mindmap](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/01-introduction.png)

### What Is System Design?

> **Pro Tip:** Master this concept thoroughly — it is frequently tested in system design interviews.

> **Pro Tip:** Master this concept — it appears in nearly every system design interview. Understand both the how and the why.

System design is the discipline of defining the architecture, components, modules, interfaces, and data flow of a large-scale distributed system to satisfy specified functional and non-functional requirements. It sits at the intersection of three distinct but overlapping fields.

**System Design vs Software Architecture.** Software architecture concerns the high-level structure of a single software system: the decomposition into modules, the relationships among them, and the guiding design principles. System design extends this to encompass multiple cooperating services, network topology, data distribution, fault tolerance, and operational concerns at planetary scale. Architecture asks "how should this service be organized?" System design asks "how should a thousand services work together to serve a billion users?"

**System Design vs Algorithm Design.** Algorithm design focuses on computational efficiency: time complexity, space complexity, and correctness proofs for a single procedure operating on a bounded input set. System design focuses on engineering efficiency: throughput, latency, availability, and cost at internet scale. An O(n log n) sort is irrelevant if the machine runs out of memory; a hash map is useless if no single machine can hold the data. System designers routinely sacrifice algorithmic purity for practical scalability.

**The Fundamental Constraint.** Every system operates under finite resources: CPU, RAM, disk, network bandwidth, and money. System design is the art of making the right compromises among these constraints to deliver the required functionality at the required scale.

---

### Non-Functional Requirements

> **Warning:** Avoid over-engineering. Start simple, measure, then optimize.

> **Warning:** Avoid premature optimization. Start simple, measure, then optimize. Over-engineering is the most common system design mistake.

Functional requirements describe *what* the system does. Non-functional requirements (NFRs) describe *how well* it does it. In system design interviews and real-world architecture, NFRs drive every decision.

#### Scalability

Scalability is the ability of a system to handle growing amounts of work by adding resources. There are two dimensions:

- **Horizontal scaling (scale out):** Add more machines. Preferred for most internet systems because commodity hardware is cheap and the capacity ceiling is effectively unlimited.
- **Vertical scaling (scale up):** Add more power to a single machine (CPU, RAM, SSD). Simple but bounded by the hardware ceiling of the largest available machine.

Three axes of scalability:

| Axis | Definition | Example |
|------|------------|---------|
| Load scaling | Handle more requests per second | 1000 QPS to 10M QPS |
| Data scaling | Store and query more data | 1 GB to 100 PB |
| Geographic scaling | Serve users across regions | US-only to global |

A system is **linearly scalable** if doubling resources doubles capacity. Most real systems are sub-linear due to coordination overhead.

#### Reliability

Reliability is the probability that a system performs its intended function without failure for a specified period under stated conditions. It is quantified by **Mean Time Between Failures (MTBF)**.

Key concepts:

- **Fault tolerance:** The ability to continue operating despite failures in some components. Achieved through redundancy (N+1, 2N, 3x replication), graceful degradation, and circuit breakers.
- **Redundancy:** Duplicating critical components to eliminate single points of failure. Active-passive (hot standby) or active-active (all replicas serve traffic).
- **Failover:** Automatic detection of a failed component and transfer of its workload to a healthy replica. Requires health checking, leader election (e.g., Raft, Paxos), and careful handling of split-brain scenarios.

```
A = MTBF / (MTBF + MTTR)
```

where MTTR is Mean Time To Repair (restore service after failure).

#### Availability

Availability is the proportion of time a system is operational and accessible. Measured in **nines**:

| Uptime % | Downtime/year | Downtime/month | Downtime/week |
|----------|---------------|----------------|---------------|
| 90% ("one nine") | 36.5 days | 73 hours | 16.8 hours |
| 99% ("two nines") | 3.65 days | 7.2 hours | 1.68 hours |
| 99.9% ("three nines") | 8.76 hours | 43.2 minutes | 10.1 minutes |
| 99.99% ("four nines") | 52.6 minutes | 4.3 minutes | 1.0 minute |
| 99.999% ("five nines") | 5.26 minutes | 25.9 seconds | 6.05 seconds |
| 99.9999% ("six nines") | 31.5 seconds | 2.59 seconds | 0.605 seconds |

**Service Level Agreement (SLA)** is a legal contract between provider and customer specifying promised availability. **Service Level Objective (SLO)** is an internal target (e.g., 99.95% p99 latency under 200ms). **Service Level Indicator (SLI)** is the actual measured metric (e.g., request success rate over a 30-day rolling window).

```
If SLA = 99.9%, you can serve errors for 8.76 hours/year before penalties apply.
SLO is typically stricter than SLA to give a safety buffer.
```

#### Maintainability

Maintainability is the ease with which a system can be modified, tested, and operated. Three facets:

- **Operability:** How easily an operator can monitor, diagnose, and fix problems. Driven by observability (logs, metrics, traces), runbooks, and automation.
- **Simplicity:** Reducing complexity by removing accidental complexity (unnecessary abstractions, deep inheritance, over-engineering). Every unnecessary component doubles the maintenance burden.
- **Evolvability (extensibility):** How easily the system can adapt to new requirements. Driven by loose coupling, well-defined APIs, feature flags, and backward compatibility.

#### Performance

Performance is defined by two primary metrics:

- **Latency:** The time taken to process a single request. Measured at various percentiles: p50 (median), p95, p99, p99.9. Tail latency (p99.9) is critical in distributed systems because a single slow request can hold up many others (head-of-line blocking).
- **Throughput:** The number of requests processed per unit time (QPS, TPS, RPS). Often inversely related to latency up to a saturation point.
- **Response time:** Latency plus network overhead, queuing delay, and processing time.

```
L = L_network + L_queue + L_service

Throughput = (1 - p_error) / L_avg  (where L_avg is average latency)
```

Little's Law relates these for stable systems:

```
L = ÃŽÂ» * W
```

where L = average number of requests in system, ÃŽÂ» = arrival rate, W = average time per request.

#### Security

Security encompasses confidentiality (unauthorized access prevention), integrity (unauthorized modification prevention), and availability (protection against DoS). Design considerations include authentication, authorization (RBAC, ACLs), encryption in transit (TLS) and at rest, input validation, rate limiting, and DDoS mitigation.

#
> **Warning:** Avoid designing for five-nines availability if you only need two-nines. Each "nine" adds ~10x infrastructure cost.

Cost efficiency measures the operational expense per unit of useful work (e.g., cost per request, cost per GB stored, cost per user). This trades against all other NFRs: five-nines availability costs more than two-nines; higher throughput requires more servers; stronger consistency increases coordination overhead. A cost-unbounded design is not a design Ã¢â‚¬â€ it is a wishlist.

---

### The Four-Phase Design Process

> **Remember:** Always articulate trade-offs clearly — interviewers value reasoning over the "right" answer.

> **Remember:** Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y.

Industry-standard approach to system design problems:

#### Phase 1: Requirements Gathering

> **Pro Tip:** In system design interviews, spend 3-5 minutes clarifying requirements first. Most candidates fail by jumping to architecture too early.
Collect and clarify functional and non-functional requirements. Ask clarifying questions:

- What are the core features? (e.g., "shorten a URL", "redirect to long URL")
- How many users? DAU, MAU?
- What is the expected QPS?
- What is the data volume? Per-day, per-year?
- What are the latency requirements?
- Is this read-heavy or write-heavy?

**Traps to avoid:** Solving the wrong problem (over-engineering for a scale that will never materialize), skipping this phase entirely (designing without constraints), or accepting vague requirements (building a "fast, scalable system" is meaningless without numbers).

#### Phase 2: Back-of-the-Envelope Estimation

Rough capacity calculations to constrain the design before committing to architecture. Key formulas:

```
QPS = Daily Active Users Ãƒâ€” Actions Per User / 86,400

Storage = Data per item Ãƒâ€” Items per day Ãƒâ€” Retention days Ãƒâ€” Replication factor

Bandwidth = Bits per request Ãƒâ€” QPS

Memory needed = Hot data ratio Ãƒâ€” Total data size
```

**Prefix conventions:**

| Prefix | Power | Bytes |
|--------|-------|-------|
| KB | 10^3 | 1,000 |
| MB | 10^6 | 10^6 |
| GB | 10^9 | 10^9 |
| TB | 10^12 | 10^12 |
| PB | 10^15 | 10^15 |

**Rule of thumb:** A single server can handle ~10K-50K QPS for simple lookups. MySQL can handle ~1K writes/sec per node. A 1 Gbps NIC transfers ~125 MB/s. An SSD reads ~500 MB/s.

#### Phase 3: High-Level Design (HLD)

Produce a component diagram showing the major building blocks:

- **Client tier:** Mobile, web, IoT
- **Load balancer:** Distributes traffic
- **Web/API tier:** Stateless application servers
- **Cache tier:** In-memory data store (Redis, Memcached)
- **Database tier:** Persistent storage (SQL or NoSQL)
- **Message queue:** Async processing (Kafka, RabbitMQ)
- **CDN:** Static asset delivery

```
Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â
Ã¢â€â€š   Clients   Ã¢â€â€š
Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ
       Ã¢â€â€š
Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€“Â¼Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â
Ã¢â€â€š Load        Ã¢â€â€š
Ã¢â€â€š Balancer    Ã¢â€â€š
Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ
       Ã¢â€â€š
Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€“Â¼Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â   Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â   Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â
Ã¢â€â€š App Server  Ã¢â€â€šÃ¢â€â‚¬Ã¢â€â‚¬Ã¢â€“ÂºÃ¢â€â€š  Cache   Ã¢â€â€š   Ã¢â€â€š  CDN      Ã¢â€â€š
Ã¢â€â€š (stateless) Ã¢â€â€š   Ã¢â€â€š (Redis)  Ã¢â€â€š   Ã¢â€â€š (CloudFl) Ã¢â€â€š
Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ
       Ã¢â€â€š
Ã¢â€Å’Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€“Â¼Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Â
Ã¢â€â€š  Database   Ã¢â€â€š
Ã¢â€â€š (Primary)   Ã¢â€â€š
Ã¢â€â€š             Ã¢â€â€š
Ã¢â€â€š  Replica(s) Ã¢â€â€š
Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€Ëœ
```

#### Phase 4: Detailed Deep Dive

Select one or two components and analyze them in depth. Identify bottlenecks and propose solutions:

- Database schema design (normalization vs denormalization)
- Indexing strategy (covering indexes, composite indexes)
- Cache placement (what to cache, TTL policy)
- Sharding strategy (key ranges, hash-based, directory-based)
- Replication topology (single-leader vs leaderless)
- Consistency model (strong vs eventual, read-your-writes)
- Failure scenarios (what happens when X goes down)

---

### Trade-Offs

Every design decision is a trade-off. Recognizing and articulating trade-offs is the core skill.

**Latency vs Throughput.** These are often in tension: batching requests improves throughput but increases latency for individual requests. A video processing pipeline may batch frames for compression efficiency (higher throughput, higher latency); a real-time chat system cannot.

**Cost vs Performance.** More servers = better performance + higher cost. An S3-based static site costs pennies and serves globally; a CockroachDB cluster costs thousands per month. Design for the *minimum viable performance* that meets the SLO.

**Consistency vs Availability.** The CAP theorem (Brewer, 2000): a distributed system can guarantee at most two of Consistency, Availability, and Partition Tolerance. In practice: partitions are inevitable (network failures), so you choose between CP and AP. Banking systems choose CP (wait for consistency); social feeds choose AP (serve stale data).

**Read Optimization vs Write Optimization.** Read-heavy systems (content delivery, social feeds) use caches, denormalization, read replicas, CDNs. Write-heavy systems (logging, time series, event ingestion) use append-only storage, LSM-trees, batch writes, message queues. Most systems fall into one camp; hybrid systems need careful isolation.

---

### Capacity Estimation Examples

> **Remember:** QPS, storage, and bandwidth estimates should be within 2x of actual values. Off by 10x means a modeling problem.
**Twitter-Scale QPS.** Assume 500M DAU, each user posts 0.5 tweets/day and reads 200 tweets/day.

```
Write QPS = 500M Ãƒâ€” 0.5 / 86,400 Ã¢â€°Ë† 2,894 QPS
Peak write QPS = 2,894 Ãƒâ€” 3 (peak factor) Ã¢â€°Ë† 8,682 QPS
Read QPS = 500M Ãƒâ€” 200 / 86,400 Ã¢â€°Ë† 1,157,407 QPS
Peak read QPS Ã¢â€°Ë† 3.5M QPS
```

A read:write ratio of ~400:1 justifies heavy caching and read replicas.

**YouTube Storage.** Assume 500 hours of video uploaded per minute, average bitrate 5 Mbps.

```
Storage per hour = 5 Ãƒâ€” 10^6 bps Ãƒâ€” 3,600 s / 8 = 2.25 GB/hour
Per minute: 500 hours Ãƒâ€” 2.25 GB = 1,125 GB/minute
Per day: 1,125 GB Ãƒâ€” 60 Ãƒâ€” 24 Ã¢â€°Ë† 1.62 PB/day
Per year: 1.62 PB Ãƒâ€” 365 Ã¢â€°Ë† 591 PB/year
```

With 3x replication: ~1.77 exabytes/year.

**URL Shortener Storage** (tinyurl.com style). Assume 100M new URLs/day, average length 500 bytes.

```
Daily storage = 100M Ãƒâ€” 500 bytes = 50 GB/day
Yearly storage = 50 GB Ãƒâ€” 365 Ã¢â€°Ë† 18.25 TB/year
10-year storage = ~182.5 TB
```

This fits on a handful of SSDs. The bottleneck is not storage Ã¢â‚¬â€ it is write QPS and availability.

---

### Real-World Systems

**Google Search.** The defining challenge is indexing the web (tens of billions of pages) and returning relevant results in under 200ms. Design constraints: extreme read throughput, sub-second latency, global distribution. Architecture: web crawling pipeline (distributed crawlers), inverted index (sharded across thousands of machines), query serving (MapReduce for indexing, distributed serving for queries). NFR priority: performance > reliability > maintainability > cost. Google accepts massive infrastructure cost to deliver sub-100ms search.

**Facebook (Meta).** The defining challenge is the social graph: billions of users, each with complex relationships (friends, pages, groups, events). Design constraints: extremely high read QPS, globally distributed, writes triggered by user action. Architecture: TAO (graph cache layer over MySQL), Presto (interactive analytics), Cassandra (inbox search), Haystack (photo storage). NFR priority: availability > performance > scalability > maintainability. Facebook uses eventual consistency extensively Ã¢â‚¬â€ seeing a slightly stale Like count is acceptable.

**WhatsApp.** The defining challenge is reliable message delivery with end-to-end encryption for 2B+ users. Design constraints: must work with intermittent connectivity, low latency for delivery, zero message loss. Architecture: Custom Erlang-based server (ejabberd fork), persistence on a per-user basis (not per-message), highly optimized for mobile battery and bandwidth. NFR priority: reliability > availability > performance > efficiency. WhatsApp famously served 900M users with only ~50 engineers.

---

## Examples

### Example 1: Designing a Distributed URL Shortener

**Requirements:** Shorten URLs, redirect to original URL, track click analytics, handle 100M URLs/day.

**Phase 1 Ã¢â‚¬â€ Requirements:** 100M new URLs/day, read:write ratio ~100:1 (each URL clicked ~100 times), analytics per-URL, 5-year data retention.

**Phase 2 Ã¢â‚¬â€ Estimation:**
- Write QPS: 100M / 86,400 Ã¢â€°Ë† 1,157 QPS (peak ~3,500)
- Read QPS: 1,157 Ãƒâ€” 100 Ã¢â€°Ë† 115,700 QPS (peak ~350,000)
- Storage: 100M Ãƒâ€” 500 bytes/day = 50 GB/day Ã¢â€ â€™ ~91 TB in 5 years

**Phase 3 Ã¢â‚¬â€ HLD:**
- Stateless API servers (auto-scaled)
- Redis cache for hot URLs (LRU eviction, TTL 1 hour)
- Base-62 encoding for short IDs (7 chars = 62^7 Ã¢â€°Ë† 3.5T combinations)
- Database: NoSQL (Cassandra or DynamoDB) for write scalability

**Phase 4 Ã¢â‚¬â€ Deep Dive:**
- Encoding choice: Base-62 (a-z, A-Z, 0-9) vs Base-64 (adds + and /, less user-friendly)
- Key generation: Snowflake-style ID Ã¢â€ â€™ encode to base-62. Avoids DB lookup for ID allocation
- Cache strategy: Cache-aside. On write miss: query DB, populate cache, return redirect
- Redirection: 301 (permanent) for most clients to reduce load; 307 (temporary) for analytics tracking

### Example 2: Estimating Capacity for a Photo-Sharing App

Instagram-scale: 500M DAU, each user uploads ~2 photos/day, average photo 2 MB, each photo viewed ~50 times.

```
Write QPS = 500M Ãƒâ€” 2 / 86,400 Ã¢â€°Ë† 11,574 QPS
Storage/day = 500M Ãƒâ€” 2 photos Ãƒâ€” 2 MB = 2 PB/day
Storage/year Ã¢â€°Ë† 730 PB
Read QPS = 11,574 Ãƒâ€” 50 Ã¢â€°Ë† 578,700 QPS
CDN bandwidth = 578,700 Ãƒâ€” 2 MB = 1,157,400 MB/s Ã¢â€°Ë† 1.15 TB/s
```

Key insight: CDN cost dominates. Solution: encode photos to multiple resolutions, cache the most-requested 80% on CDN, serve originals only on explicit demand.

## Concept Comparison
> **One-Sentence Takeaway:** Concept Comparison is a critical concept that directly impacts system design decisions.
> **One-Sentence Takeaway:** Concept Comparison is a critical concept that directly impacts system design decisions.

| Concept | Definition | Metric | Trade-Off |
|---------|-----------|--------|-----------|
| Scalability | Ability to handle growth | QPS, data volume | Horizontal vs vertical |
| Reliability | Probability of no failure | MTBF, MTTR | Redundancy vs failure risk |
| Availability | Proportion of time operational | Uptime % (nines) | Cost per nine |
| Performance | Speed and capacity | Latency, throughput | Latency vs throughput |
| Maintainability | Ease of change | Operability, simplicity | Complexity vs flexibility |

## Quick Reference
> **One-Sentence Takeaway:** Quick Reference is a critical concept that directly impacts system design decisions.

| Formula | Expression |
|---------|-----------|
| Availability | A = MTBF / (MTBF + MTTR) |
| QPS | DAU * Actions / 86,400 |
| Storage | Items/day * size * retention * replication |
| Bandwidth | Bits/request * QPS |
| Little's Law | L = lambda * W |

## Cross-Application Matrix

| System | Primary NFR | Key Trade-Off | Architecture Highlight |
|--------|------------|---------------|----------------------|
| Google Search | Performance | Cost for sub-100ms latency | Inverted index + MapReduce |
| Facebook | Availability | Staleness for availability | TAO graph cache over MySQL |
| WhatsApp | Reliability | Zero message loss | Erlang custom server |

## Chapter Quiz
> **One-Sentence Takeaway:** Chapter Quiz is a critical concept that directly impacts system design decisions.

**Q1:** What is the minimum availability for less than 1 hour downtime/year?
- A) 99%
- B) 99.9%
- C) 99.99%
- D) 99.999%

<details><summary>Answer</summary>C) 99.99% (52.6 minutes/year)</details>

**Q2:** Which phase comes after back-of-the-envelope estimation?
- A) Requirements gathering
- B) High-level design
- C) Detailed deep dive
- D) Deployment

<details><summary>Answer</summary>B) High-level design (Phase 3)</details>

**Q3:** MTBF=720h, MTTR=4h. What is availability?
- A) 99.0%
- B) 99.45%
- C) 99.94%
- D) 99.99%

<details><summary>Answer</summary>B) 720/724 = 99.45%</details>

**Q4:** What does Little's Law state?
- A) Throughput equals capacity
- B) Concurrency = arrival rate * latency
- C) Latency is always under 100ms
- D) Storage grows linearly

<details><summary>Answer</summary>B) L = lambda * W</details>

**Q5:** Why is tail latency critical in distributed systems?
- A) It determines median user experience
- B) A single slow request causes head-of-line blocking
- C) It is cheaper to optimize
- D) SLAs only measure tail latency

<details><summary>Answer</summary>B) Head-of-line blocking in fan-out requests</details>

## Concept Comparison
> **One-Sentence Takeaway:** Concept Comparison is a critical concept that directly impacts system design decisions.
> **One-Sentence Takeaway:** Concept Comparison is a critical concept that directly impacts system design decisions.

| Concept | Definition | Key Insight |
|---------|-----------|-------------|
| Theory | Core topic in Chapter 1: Introduction to System Design | Fundamental to system design |
| Concept Comparison | Core topic in Chapter 1: Introduction to System Design | Fundamental to system design |

---

## Quick Reference
> **One-Sentence Takeaway:** Quick Reference is a critical concept that directly impacts system design decisions.

| Topic | Key Point |
|-------|-----------|
| Theory | Essential concept for Chapter 1: Introduction to System Design |

---

## Cross-Application Matrix

| Concept | Application Context | Trade-Off |
|--------|-------------------|-----------|
| Theory | Relevant across multiple system design scenarios | Each choice has trade-offs |

---

## Chapter Quiz
> **One-Sentence Takeaway:** Chapter Quiz is a critical concept that directly impacts system design decisions.

**Q1:** What is the primary trade-off discussed in this chapter?
- A) Option A
- B) Option B
- C) Option C
- D) Option D

<details><summary>Answer</summary>Refer to the chapter content</details>

**Q2:** Which concept is most fundamental to the topic of Chapter 1
- A) Option A
- B) Option B
- C) Option C
- D) Option D

<details><summary>Answer</summary>Review the core sections</details>

**Q3:** How does this chapter's main concept apply to real-world systems?
- A) Option A
- B) Option B
- C) Option C
- D) Option D

<details><summary>Answer</summary>See the Real-World Systems section</details>

---

## Code Examples

### CAP Theorem Simulator

The following TypeScript class models the fundamental trade-off between Consistency, Availability, and Partition Tolerance. Given any two chosen properties, the simulator returns the resulting system classification (CP, AP, or CA) along with real-world database examples.

```typescript
/**
 * CAPTheoremSimulator — models the trade-off between Consistency,
 * Availability, and Partition Tolerance in distributed systems.
 *
 * Usage:
 *   const cap = new CapTheoremSimulator();
 *   cap.pick('partitionTolerance', 'consistency', true);
 *   // → "CP system (e.g., ZooKeeper, HBase, Google Spanner). Sacrifices
 *   //    availability during partitions to guarantee consistency."
 */
type CapProperty = 'consistency' | 'availability' | 'partitionTolerance';
type CapSystem = 'CP' | 'AP' | 'CA';

class CapTheoremSimulator {
  private examples: Record<CapSystem, string[]> = {
    CP: ['ZooKeeper', 'HBase', 'Google Spanner'],
    AP: ['Cassandra', 'DynamoDB', 'Riak'],
    CA: ['PostgreSQL (single-site)', 'MySQL (single-site)'],
  };

  private definitions: Record<CapSystem, string> = {
    CP: 'Sacrifices availability during partitions to guarantee consistency.',
    AP: 'Sacrifices consistency during partitions to guarantee availability.',
    CA: 'No partition tolerance — relies on a reliable network; entire system fails on split.',
  };

  pick(a: CapProperty, b: CapProperty, partitionHappens: boolean): string {
    const hasP =
      a === 'partitionTolerance' || b === 'partitionTolerance';
    const hasC = a === 'consistency' || b === 'consistency';

    if (!hasP && partitionHappens) {
      return 'CA system with partition → system becomes unavailable (no partition tolerance).';
    }

    const system: CapSystem = hasP ? (hasC ? 'CP' : 'AP') : 'CA';
    const dbExamples = this.examples[system].join(', ');
    return `**${system}** system (e.g., ${dbExamples}). ${this.definitions[system]}`;
  }
}
```

### Latency vs Throughput Bounds (Little's Law)

This calculator applies Little's Law (`L = λ × W`) to reason about the relationship between latency, concurrency, and throughput in distributed systems. It also includes tail-latency assessment and connection-pool sizing.

```typescript
/**
 * LatencyThroughputCalculator — models the relationship between
 * latency (L), throughput (λ), and concurrency (W) via Little's Law.
 */
class LatencyThroughputCalculator {
  constructor(
    public readonly latencyMs: number,
    public readonly concurrency: number
  ) {}

  /** L = λ × W  →  λ = W / L (converted from ms to seconds) */
  maxThroughputQps(): number {
    return this.concurrency / (this.latencyMs / 1000);
  }

  /** W = λ × L — required concurrency to hit a target QPS */
  requiredConcurrency(targetQps: number): number {
    return targetQps * (this.latencyMs / 1000);
  }

  /** Assess tail-latency severity via the p99 / p50 ratio */
  assessTailLatency(p99: number, p50: number): string {
    const ratio = p99 / p50;
    if (ratio > 10) {
      return 'Critical tail — investigate GC pauses, queue buildup, or straggler tasks.';
    }
    if (ratio > 5) {
      return 'High tail — check hot partitions or consider hedged requests.';
    }
    if (ratio > 3) {
      return 'Moderate tail — request coalescing or caching may help.';
    }
    return 'Healthy — tail latency is well-contained.';
  }

  /** Estimate optimal DB connection-pool size with 20 % headroom */
  optimalPoolSize(targetLatencyMs: number, expectedQps: number): number {
    return Math.ceil(expectedQps * (targetLatencyMs / 1000) * 1.2);
  }
}

// ── Example ──────────────────────────────────────────────────────
const calc = new LatencyThroughputCalculator(50, 500);
console.log(`Max throughput:         ${calc.maxThroughputQps()} qps`);
console.log(`Required concurrency:   ${calc.requiredConcurrency(10000)}`);
console.log(`Tail-latency verdict:   ${calc.assessTailLatency(2000, 50)}`);
console.log(`Optimal pool size:      ${calc.optimalPoolSize(50, 10000)}`);
```

### CAP Theorem Trade-off Visualization

```mermaid
flowchart TD
    subgraph CAP_Theorem
        direction LR
        C[Consistency<br/>Every read returns latest write]
        A[Availability<br/>Every request gets a non-error response]
        P[Partition Tolerance<br/>System continues despite network splits]
    end

    subgraph Trade_offs
        CP[CP<br/>Consistency + Partition Tolerance]
        AP[AP<br/>Availability + Partition Tolerance]
        CA[CA<br/>Consistency + Availability]
    end

    C --> CP
    P --> CP
    A --> AP
    P --> AP
    C --> CA
    A --> CA

    CP -.-> DB1["ZooKeeper, HBase<br/>Spanner"]
    AP -.-> DB2["Cassandra, DynamoDB<br/>Riak"]
    CA -.-> DB3["Single-site RDBMS<br/>PostgreSQL, MySQL"]
```

## Summary

- System design is distinct from software architecture (system-wide concerns) and algorithm design (computational efficiency at bounded scales).
- The ten non-functional requirements are scalability, reliability, availability, maintainability, performance, security, and cost efficiency. Each has specific metrics.
- The four-phase design process is: requirements gathering, back-of-the-envelope estimation, high-level design, and detailed deep dive.
- Back-of-the-envelope estimation uses simple formulas for QPS, storage, bandwidth, and memory. The goal is order-of-magnitude correctness, not precision.
- Every design decision is a trade-off; the correct choice depends on the system's primary NFRs, not on abstract "best practices."
- SLA, SLO, and SLI form a three-tier commitment cascade: legal contract, internal target, actual measurement.
- Real systems like Google Search, Facebook, and WhatsApp optimize for radically different NFR profiles despite serving similar scale.
- Little's Law (L = ÃŽÂ»W) relates throughput, concurrency, and latency in stable-state systems.

---

## Exercises

### Review Questions (4-5)

1. Explain the difference between MTBF and MTTR and how they relate to availability. Write the formula.

2. A system serves 99.9% availability in its SLA but measures 99.95% as its SLO. Why is the SLO stricter than the SLA?

3. What is tail latency and why does it matter more in distributed systems than in single-machine systems?

4. List the four phases of the system design process and describe the output of each.

5. How does system design differ from algorithm design in terms of constraints and objectives?

### Application Problems (3-4)

1. A notification service sends 10M push notifications per day. Each notification payload is 4 KB. Compute daily bandwidth, and estimate the number of servers needed if each server handles 1,000 push operations per second.

2. A video platform with 10M DAU streams 30 minutes of video per user per day at 10 Mbps. Compute daily data transfer, CDN cost (assume $0.02/GB), and suggest two optimizations.

3. A search engine needs to return results in under 200ms. The index lookup takes 50ms, query parsing 10ms, ranking 120ms, and network RTT 40ms. Explain the bottleneck and suggest a mitigation.

4. Design a simplified rate-limiter for a public API. List the NFRs you would use, estimate QPS for 100M daily requests, and choose between a token-bucket and leaky-bucket algorithm with justification.

### Challenge Problem (1)

You are tasked with designing the backend for a real-time collaborative document editor (similar to Google Docs) that supports 10K concurrent editors on a single document and 10M daily active users overall. The system must support conflict resolution, real-time sync (sub-500ms propagation), version history (30-day retention), and offline editing.

1. Perform a back-of-the-envelope estimation for storage, bandwidth, and QPS.
2. Identify the primary non-functional requirements and rank them by priority.
3. Propose a high-level architecture with load balancers, app servers, database, cache, and any specialized components (e.g., WebSocket gateway, CRDT server).
4. Explain your conflict resolution strategy. Justify why you chose CRDTs (or OT) and describe a specific CRDT (or OT algorithm) that fits the use case.
5. Analyze the bottleneck: what component will fail first at 10x scale and how would you redesign for it?
