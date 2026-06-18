# Chapter 1: Introduction to System Design

---

## Learning Objectives

- Distinguish system design from software architecture and algorithm design
- Define and evaluate ten non-functional requirements with appropriate metrics
- Apply the four-phase design process to any large-scale system problem
- Perform back-of-the-envelope capacity estimations using standard formulas
- Analyze trade-offs including latency vs throughput, consistency vs availability, and read vs write optimization
- Model real-world systems (Google Search, Facebook, WhatsApp) through a system-design lens

---

## Theory

![System Design Fundamentals Mindmap](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/01-introduction.png)

### What Is System Design?

System design is the discipline of defining the architecture, components, modules, interfaces, and data flow of a large-scale distributed system to satisfy specified functional and non-functional requirements. It sits at the intersection of three distinct but overlapping fields.

**System Design vs Software Architecture.** Software architecture concerns the high-level structure of a single software system: the decomposition into modules, the relationships among them, and the guiding design principles. System design extends this to encompass multiple cooperating services, network topology, data distribution, fault tolerance, and operational concerns at planetary scale. Architecture asks "how should this service be organized?" System design asks "how should a thousand services work together to serve a billion users?"

**System Design vs Algorithm Design.** Algorithm design focuses on computational efficiency: time complexity, space complexity, and correctness proofs for a single procedure operating on a bounded input set. System design focuses on engineering efficiency: throughput, latency, availability, and cost at internet scale. An O(n log n) sort is irrelevant if the machine runs out of memory; a hash map is useless if no single machine can hold the data. System designers routinely sacrifice algorithmic purity for practical scalability.

**The Fundamental Constraint.** Every system operates under finite resources: CPU, RAM, disk, network bandwidth, and money. System design is the art of making the right compromises among these constraints to deliver the required functionality at the required scale.

---

### Non-Functional Requirements

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
L = Î» * W
```

where L = average number of requests in system, Î» = arrival rate, W = average time per request.

#### Security

Security encompasses confidentiality (unauthorized access prevention), integrity (unauthorized modification prevention), and availability (protection against DoS). Design considerations include authentication, authorization (RBAC, ACLs), encryption in transit (TLS) and at rest, input validation, rate limiting, and DDoS mitigation.

#### Cost Efficiency

Cost efficiency measures the operational expense per unit of useful work (e.g., cost per request, cost per GB stored, cost per user). This trades against all other NFRs: five-nines availability costs more than two-nines; higher throughput requires more servers; stronger consistency increases coordination overhead. A cost-unbounded design is not a design â€” it is a wishlist.

---

### The Four-Phase Design Process

Industry-standard approach to system design problems:

#### Phase 1: Requirements Gathering

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
QPS = Daily Active Users Ã— Actions Per User / 86,400

Storage = Data per item Ã— Items per day Ã— Retention days Ã— Replication factor

Bandwidth = Bits per request Ã— QPS

Memory needed = Hot data ratio Ã— Total data size
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
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚   Clients   â”‚
â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”˜
       â”‚
â”Œâ”€â”€â”€â”€â”€â”€â–¼â”€â”€â”€â”€â”€â”€â”
â”‚ Load        â”‚
â”‚ Balancer    â”‚
â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”˜
       â”‚
â”Œâ”€â”€â”€â”€â”€â”€â–¼â”€â”€â”€â”€â”€â”€â”   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ App Server  â”‚â”€â”€â–ºâ”‚  Cache   â”‚   â”‚  CDN      â”‚
â”‚ (stateless) â”‚   â”‚ (Redis)  â”‚   â”‚ (CloudFl) â”‚
â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”˜   â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜   â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
       â”‚
â”Œâ”€â”€â”€â”€â”€â”€â–¼â”€â”€â”€â”€â”€â”€â”
â”‚  Database   â”‚
â”‚ (Primary)   â”‚
â”‚             â”‚
â”‚  Replica(s) â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
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

**Twitter-Scale QPS.** Assume 500M DAU, each user posts 0.5 tweets/day and reads 200 tweets/day.

```
Write QPS = 500M Ã— 0.5 / 86,400 â‰ˆ 2,894 QPS
Peak write QPS = 2,894 Ã— 3 (peak factor) â‰ˆ 8,682 QPS
Read QPS = 500M Ã— 200 / 86,400 â‰ˆ 1,157,407 QPS
Peak read QPS â‰ˆ 3.5M QPS
```

A read:write ratio of ~400:1 justifies heavy caching and read replicas.

**YouTube Storage.** Assume 500 hours of video uploaded per minute, average bitrate 5 Mbps.

```
Storage per hour = 5 Ã— 10^6 bps Ã— 3,600 s / 8 = 2.25 GB/hour
Per minute: 500 hours Ã— 2.25 GB = 1,125 GB/minute
Per day: 1,125 GB Ã— 60 Ã— 24 â‰ˆ 1.62 PB/day
Per year: 1.62 PB Ã— 365 â‰ˆ 591 PB/year
```

With 3x replication: ~1.77 exabytes/year.

**URL Shortener Storage** (tinyurl.com style). Assume 100M new URLs/day, average length 500 bytes.

```
Daily storage = 100M Ã— 500 bytes = 50 GB/day
Yearly storage = 50 GB Ã— 365 â‰ˆ 18.25 TB/year
10-year storage = ~182.5 TB
```

This fits on a handful of SSDs. The bottleneck is not storage â€” it is write QPS and availability.

---

### Real-World Systems

**Google Search.** The defining challenge is indexing the web (tens of billions of pages) and returning relevant results in under 200ms. Design constraints: extreme read throughput, sub-second latency, global distribution. Architecture: web crawling pipeline (distributed crawlers), inverted index (sharded across thousands of machines), query serving (MapReduce for indexing, distributed serving for queries). NFR priority: performance > reliability > maintainability > cost. Google accepts massive infrastructure cost to deliver sub-100ms search.

**Facebook (Meta).** The defining challenge is the social graph: billions of users, each with complex relationships (friends, pages, groups, events). Design constraints: extremely high read QPS, globally distributed, writes triggered by user action. Architecture: TAO (graph cache layer over MySQL), Presto (interactive analytics), Cassandra (inbox search), Haystack (photo storage). NFR priority: availability > performance > scalability > maintainability. Facebook uses eventual consistency extensively â€” seeing a slightly stale Like count is acceptable.

**WhatsApp.** The defining challenge is reliable message delivery with end-to-end encryption for 2B+ users. Design constraints: must work with intermittent connectivity, low latency for delivery, zero message loss. Architecture: Custom Erlang-based server (ejabberd fork), persistence on a per-user basis (not per-message), highly optimized for mobile battery and bandwidth. NFR priority: reliability > availability > performance > efficiency. WhatsApp famously served 900M users with only ~50 engineers.

---

## Examples

### Example 1: Designing a Distributed URL Shortener

**Requirements:** Shorten URLs, redirect to original URL, track click analytics, handle 100M URLs/day.

**Phase 1 â€” Requirements:** 100M new URLs/day, read:write ratio ~100:1 (each URL clicked ~100 times), analytics per-URL, 5-year data retention.

**Phase 2 â€” Estimation:**
- Write QPS: 100M / 86,400 â‰ˆ 1,157 QPS (peak ~3,500)
- Read QPS: 1,157 Ã— 100 â‰ˆ 115,700 QPS (peak ~350,000)
- Storage: 100M Ã— 500 bytes/day = 50 GB/day â†’ ~91 TB in 5 years

**Phase 3 â€” HLD:**
- Stateless API servers (auto-scaled)
- Redis cache for hot URLs (LRU eviction, TTL 1 hour)
- Base-62 encoding for short IDs (7 chars = 62^7 â‰ˆ 3.5T combinations)
- Database: NoSQL (Cassandra or DynamoDB) for write scalability

**Phase 4 â€” Deep Dive:**
- Encoding choice: Base-62 (a-z, A-Z, 0-9) vs Base-64 (adds + and /, less user-friendly)
- Key generation: Snowflake-style ID â†’ encode to base-62. Avoids DB lookup for ID allocation
- Cache strategy: Cache-aside. On write miss: query DB, populate cache, return redirect
- Redirection: 301 (permanent) for most clients to reduce load; 307 (temporary) for analytics tracking

### Example 2: Estimating Capacity for a Photo-Sharing App

Instagram-scale: 500M DAU, each user uploads ~2 photos/day, average photo 2 MB, each photo viewed ~50 times.

```
Write QPS = 500M Ã— 2 / 86,400 â‰ˆ 11,574 QPS
Storage/day = 500M Ã— 2 photos Ã— 2 MB = 2 PB/day
Storage/year â‰ˆ 730 PB
Read QPS = 11,574 Ã— 50 â‰ˆ 578,700 QPS
CDN bandwidth = 578,700 Ã— 2 MB = 1,157,400 MB/s â‰ˆ 1.15 TB/s
```

Key insight: CDN cost dominates. Solution: encode photos to multiple resolutions, cache the most-requested 80% on CDN, serve originals only on explicit demand.

---

## Summary

- System design is distinct from software architecture (system-wide concerns) and algorithm design (computational efficiency at bounded scales).
- The ten non-functional requirements are scalability, reliability, availability, maintainability, performance, security, and cost efficiency. Each has specific metrics.
- The four-phase design process is: requirements gathering, back-of-the-envelope estimation, high-level design, and detailed deep dive.
- Back-of-the-envelope estimation uses simple formulas for QPS, storage, bandwidth, and memory. The goal is order-of-magnitude correctness, not precision.
- Every design decision is a trade-off; the correct choice depends on the system's primary NFRs, not on abstract "best practices."
- SLA, SLO, and SLI form a three-tier commitment cascade: legal contract, internal target, actual measurement.
- Real systems like Google Search, Facebook, and WhatsApp optimize for radically different NFR profiles despite serving similar scale.
- Little's Law (L = Î»W) relates throughput, concurrency, and latency in stable-state systems.

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
