# System Design — Complete University Textbook

## Course Description

System Design is the discipline of defining the architecture, components, modules, interfaces, and data for large-scale distributed systems. This course provides a rigorous, university-level treatment of the principles and practices required to design systems that operate reliably at internet scale. It bridges the gap between theoretical computer science concepts—such as the CAP theorem, consistency models, and algorithmic efficiency—and the practical engineering decisions that determine whether a system survives real-world traffic.

The curriculum is divided into four parts:

- **Part I: Foundations (Chapters 1–9)** — Scalability, caching, databases, partitioning, consistency, messaging, microservices, and coordination theory with quantitative trade-off analysis.
- **Part II: Low-Level Design (Chapters 10–12)** — SOLID principles, OOP design, Gang of Four and concurrency design patterns, UML class/sequence diagrams, and component-level design of common real-world objects.
- **Part III: Distributed Systems Deep Dive (Chapters 13–16)** — Consistent hashing, bloom filters, CDN and DNS architecture, CQRS, event sourcing, API gateways, observability, and production resiliency patterns.
- **Part IV: Real-World Case Studies (Chapters 17–22)** — Complete end-to-end design walkthroughs of WhatsApp, Netflix, Uber, Twitter, Dropbox, and classic problems (URL shortener, rate limiter, pastebin) using a structured four-phase methodology.
- **Part V: Interview Preparation (Chapter 23)** — A curated interview prep guide with company-specific question banks, estimation frameworks, and mock interview strategies.

## Prerequisites

- **Data Structures and Algorithms:** Proficiency in complexity analysis (Big O), hash maps, trees, and graph algorithms
- **Computer Networking:** Understanding of TCP/IP, HTTP, DNS, and OSI model layers
- **Operating Systems:** Familiarity with processes, threads, concurrency, and I/O models
- **Database Fundamentals:** Basic knowledge of SQL and relational database concepts

## Part I: Foundations

| #  | Chapter | Topics |
|----|---------|--------|
| 01 | [Introduction to System Design](01-introduction.md) | Scope of system design, non-functional requirements (scalability, reliability, availability, maintainability), structured four-phase design process, latency vs. throughput, cost vs. performance trade-offs, back-of-the-envelope estimation |
| 02 | [Scalability and Load Balancing](02-scalability-load-balancing.md) | Vertical vs. horizontal scaling, OSI-layer load balancers (L4 vs L7), load balancing algorithms (round-robin, least-connections, IP hash, consistent hash), reverse proxies (Nginx, HAProxy), DNS load balancing, global server load balancing (GSLB), health checks, auto-scaling strategies |
| 03 | [Caching Strategies and Patterns](03-caching.md) | Cache hierarchy (L1/L2/L3), locality of reference, caching patterns (cache-aside, read-through, write-through, write-behind), eviction policies (LRU, LFU, FIFO, MRU, ARC), cache invalidation strategies, thundering herd problem, distributed caching (Redis, Memcached), CDN caching, write skew and staleness |
| 04 | [Database Foundations: Replication and Indexing](04-database-foundations.md) | B-Tree and LSM-Tree index internals, single-leader replication, multi-leader replication, leaderless replication (Dynamo-style), sync vs. async replication, replication lag and its consequences (read-your-writes, monotonic reads, consistent prefix reads), conflict resolution strategies, version vectors, CRDTs |
| 05 | [Data Partitioning and Sharding](05-partitioning-sharding.md) | Vertical vs. horizontal partitioning, range-based sharding, hash-based sharding, directory-based sharding, consistent hashing, rebalancing challenges, hotspot mitigation, cross-shard queries, secondary indexes in sharded environments, database per service pattern |
| 06 | [CAP Theorem and Distributed Consistency](06-distributed-consistency.md) | CAP theorem formal proof, PACELC extension, strong consistency vs. eventual consistency, quorum-based systems (read/write quorums), Dynamo-style quorum, gossip protocol, conflict-free replicated data types (CRDTs), logical clocks (Lamport, vector clocks), distributed snapshots (Chandy-Lamport) |
| 07 | [Message Queues and Event-Driven Architecture](07-message-queues.md) | Synchronous vs. asynchronous communication, point-to-point vs. pub-sub models, message brokers (Kafka, RabbitMQ, AWS SQS/SNS), delivery guarantees (at-most-once, at-least-once, exactly-once), consumer groups, partitioning in Kafka, event ordering, dead-letter queues, event sourcing, change data capture (CDC), backpressure |
| 08 | [Microservices and API Design](08-microservices-apis.md) | Monolith vs. microservices decomposition, bounded contexts (DDD), API gateway pattern, REST vs. gRPC vs. GraphQL, service mesh (Istio/Linkerd), distributed transactions (2PC, SAGA pattern), orchestration vs. choreography, idempotency, service versioning, contract testing |
| 09 | [Distributed Coordination and Service Discovery](09-distributed-coordination.md) | Service registry, client-side vs. server-side discovery, ZooKeeper and Etcd internals, leader election (Paxos, Raft, Zab), distributed locks, heartbeats and failure detection (Phi-accrual), membership protocols (SWIM), distributed consensus, coordination-free systems |

## Part II: Low-Level Design

| #  | Chapter | Topics |
|----|---------|--------|
| 10 | [Low-Level Design: SOLID Principles and OOP](10-lld-solid-oop.md) | SRP, OCP, LSP, ISP, DIP with concrete examples, encapsulation and abstraction, composition over inheritance, interface segregation in practice, dependency injection, package principles (REP, CCP, CRP), coupling and cohesion metrics |
| 11 | [Low-Level Design: Design Patterns](11-lld-design-patterns.md) | Creational (Singleton, Factory, Abstract Factory, Builder, Prototype), Structural (Adapter, Decorator, Facade, Proxy, Composite), Behavioral (Observer, Strategy, Command, State, Template Method, Chain of Responsibility), concurrency patterns (Producer-Consumer, Reader-Writer, Thread Pool), anti-patterns to avoid |
| 12 | [Low-Level Design: Component and Class Design](12-lld-component-design.md) | UML class diagrams (relationships, multiplicity, composition, aggregation), sequence diagrams, activity diagrams, state machine diagrams, designing vending machine, elevator system, parking lot, chess game, library management system, log aggregator, rate limiter library |
| 13 | [Low-Level Design: Concurrency and Threading](13-lld-concurrency.md) | Thread safety, synchronization primitives (mutex, semaphore, condition variable), lock-free data structures, atomic operations, Amdahl's Law, thread pools, async/await internals, actor model (Akka), goroutines and CSP, dining philosophers problem, concurrent LRU cache implementation |

## Part III: Distributed Systems Deep Dive

| #  | Chapter | Topics |
|----|---------|--------|
| 14 | [Distributed Data Structures: Consistent Hashing and Beyond](14-distributed-data-structures.md) | Consistent hashing with virtual nodes, hash rings, rendezvous hashing (HRW), Merkle trees for anti-entropy, bloom filters (standard, counting, scalable), count-min sketch, HyperLogLog, Cuckoo filters, Bloom filter implementation for caching layer, time-series data structures |
| 15 | [CDN, DNS, and Edge Computing](15-cdn-dns-edge.md) | DNS hierarchy (root, TLD, authoritative), DNS caching and TTL, anycast routing, CDN architecture (pull vs. push zones), edge caching strategies, image optimization pipelines, CDN providers (CloudFront, Cloudflare, Akamai), origin shielding, DDoS mitigation at the edge, edge computing with Lambda@Edge / Cloudflare Workers |
| 16 | [API Gateways, CQRS, and Event Sourcing](16-api-gateways-cqrs.md) | API gateway vs. load balancer, rate limiting, authentication, request aggregation, CQRS pattern with separate read/write models, event sourcing fundamentals, event store design, event versioning, rebuilding state from events, snapshotting, event sourcing + CQRS integration, practical trade-offs and when to avoid |
| 17 | [Observability and Resiliency Patterns](17-observability-resiliency.md) | Monitoring (RED method, USE method, Four Golden Signals), distributed tracing (OpenTelemetry, Jaeger, Zipkin, W3C TraceContext), structured logging, metrics aggregation (Prometheus + Grafana), circuit breaker pattern (Hystrix/Resilience4J), bulkhead isolation, retry with exponential backoff and jitter, rate limiting internals, graceful degradation, load shedding, chaos engineering principles |

## Part IV: Real-World Case Studies

| #  | Chapter | Topics |
|----|---------|--------|
| 18 | [Case Study: URL Shortener, Rate Limiter, Pastebin](18-case-studies-classic.md) | URL shortener with key generation service, distributed rate limiting with sliding window, pastebin with content-addressable storage, four-phase design for each, capacity planning for 100M+ users, sharding strategies, caching optimizations |
| 19 | [Case Study: WhatsApp and Real-Time Messaging](19-case-study-whatsapp.md) | Messaging architecture for 2B+ users, WhatsApp's Erlang/ejabberd origins, message fan-out strategies (push vs. pull model, hybrid), last-seen and typing indicators, end-to-end encryption (Signal Protocol), group chat design, media upload and CDN, presence detection, offline message storage, serverless WebSocket management |
| 20 | [Case Study: Netflix and Video Streaming](20-case-study-netflix.md) | Netflix's migration to microservices, CDN and Open Connect Appliances, DASH adaptive bitrate streaming, personalized recommendation pipeline, Chaos Monkey and Simian Army, Hystrix circuit breaker, Zuul API gateway, content delivery pipeline (encoding, packaging), watch history and resume playback, multi-region active-active deployment |
| 21 | [Case Study: Uber and Location-Based Services](21-case-study-uber.md) | Ride-hailing architecture at global scale, geospatial indexing (QuadTree, Google S2, H3), real-time location updates with WebSocket/gRPC streams, dispatch and matching algorithms, surge pricing engine, GPS trajectory smoothing, ETA prediction with ML, historical trip data and OLAP, Kafka event backbone, sharding by city/region |
| 22 | [Case Study: Twitter and News Feed](22-case-study-twitter.md) | Timeline generation (fan-on-write vs. fan-on-read, hybrid), social graph storage (Flocks, Prana, Manhattan), tweet indexing with Earlybird, trending topics with real-time aggregation (Bloom filter + Count-min sketch), media pipeline, search architecture (Lucene partial updates), ML ranking for timeline, rate limiting at scale, disaster recovery from "fail whale" |
| 23 | [Case Study: Dropbox and File Storage](23-case-study-dropbox.md) | File synchronization architecture (delta sync, block-level sync), conflict resolution (LAN sync, version history), deduplication with content hashing, metadata store (sharded MySQL), NAS integration, streaming file download with range requests, team collaboration (Paper), client architecture (file watcher, indexing), Magic Pocket block storage |

## Part V: Interview Preparation

| #  | Chapter | Topics |
|----|---------|--------|
| 24 | [System Design Interview Preparation](24-interview-preparation.md) | Company-specific question catalogs (FAANG + top tech), structured answer framework, estimation cheat sheet, common pitfalls, system design interview rubrics, mock interview workflow, time management strategies, follow-up question handling, resources and reading list |

## Study Path

The chapters follow a progressive dependency chain. Begin with Part I (Chapters 1–9) to establish the design philosophy and infrastructure layer. Then proceed to Part II (Chapters 10–13) for low-level design skills. Part III (Chapters 14–17) builds distributed systems depth. Part IV (Chapters 18–23) synthesizes everything through applied case studies. Part V (Chapter 24) is your interview preparation capstone.

Readers with strong distributed systems background may study Parts III and IV concurrently.

## Supplementary Resources

- **Designing Data-Intensive Applications** by Martin Kleppmann — the definitive reference for distributed data systems
- **System Design Interview** (Volumes 1 & 2) by Alex Xu — practice-oriented interview preparation with worked examples
- **Design Patterns: Elements of Reusable Object-Oriented Software** by GoF — the canonical reference for design patterns
- **Clean Architecture** by Robert C. Martin — SOLID principles and software design philosophy
- **High Scalability** (highscalability.com) — curated real-world architecture breakdowns
- **Google SRE Books** — production engineering and operations best practices
- **The System Design Primer** (github.com/donnemartin/system-design-primer) — community resource for interview preparation
- **Awesome Scalability** (github.com/binhnguyennus/awesome-scalability) — curated list of scalable architecture patterns
