# System Design — Complete University Textbook

## Course Description

System Design is the discipline of defining the architecture, components, modules, interfaces, and data for large-scale distributed systems. This course provides a rigorous, university-level treatment of the principles and practices required to design systems that operate reliably at internet scale. It bridges the gap between theoretical computer science concepts—such as the CAP theorem, consistency models, and algorithmic efficiency—and the practical engineering decisions that determine whether a system survives real-world traffic.

Students will progress through a carefully sequenced curriculum covering scalability foundations, data infrastructure (caching, databases, partitioning, replication), distributed systems theory (consistency, coordination), and architectural patterns (microservices, message queues, API design). Each chapter integrates formal definitions, quantitative trade-off analysis, and architectural decision frameworks. The final chapter synthesises all concepts through two complete case studies, demonstrating how to apply the four-phase design methodology to realistic problems such as URL shorteners and rate limiters.

## Prerequisites

- **Data Structures and Algorithms:** Proficiency in complexity analysis (Big O), hash maps, trees, and graph algorithms
- **Computer Networking:** Understanding of TCP/IP, HTTP, DNS, and OSI model layers
- **Operating Systems:** Familiarity with processes, threads, concurrency, and I/O models
- **Database Fundamentals:** Basic knowledge of SQL and relational database concepts

## Study Path

The chapters follow a progressive dependency chain. Begin with Chapter 1 to establish the design philosophy and non-functional requirements framework. Chapters 2–5 build the core infrastructure layer: scaling, caching, databases, and partitioning. Chapters 6–9 introduce distributed systems theory and architecture, covering consistency guarantees, message-passing, service decomposition, and coordination. Chapter 10 integrates all prior material through applied case studies. Readers with a strong networking background may study Chapters 6 and 7 concurrently.

## Chapter Listing

| #  | Chapter | Topics |
|----|---------|--------|
| 01 | [Introduction to System Design](01-introduction.md) | System design scope, non-functional requirements, four-phase approach, latency vs. throughput, cost vs. performance |
| 02 | [Scalability and Load Balancing](02-scalability-load-balancing.md) | Vertical vs. horizontal scaling, OSI-layer load balancers, round-robin and least-connections, reverse proxies |
| 03 | [Caching Strategies and Patterns](03-caching.md) | Cache hierarchy, locality of reference, cache-aside and read-through patterns, LRU/LFU eviction, cache invalidation, thundering herd |
| 04 | [Database Foundations: Replication and Indexing](04-database-foundations.md) | B-Tree and LSM-Tree indexes, single-leader and multi-leader replication, sync vs. async replication, replication lag |
| 05 | [Data Partitioning and Sharding](05-partitioning-sharding.md) | Vertical vs. horizontal partitioning, range-based and hash-based sharding, hotspot mitigation, dynamic rebalancing |
| 06 | [CAP Theorem and Distributed Consistency](06-distributed-consistency.md) | CAP theorem proof, strong and eventual consistency, PACELC extension, quorum reads and writes |
| 07 | [Message Queues and Event-Driven Architecture](07-message-queues.md) | Sync vs. async communication, pub-sub and point-to-point, delivery guarantees, load leveling, fault tolerance |
| 08 | [Microservices and API Design](08-microservices-apis.md) | Monolith vs. microservices, API gateway pattern, REST and gRPC, Saga pattern, distributed transactions |
| 09 | [Distributed Coordination and Service Discovery](09-distributed-coordination.md) | Service registry, client-side vs. server-side discovery, ZooKeeper and Etcd, heartbeats and failure detection |
| 10 | [Case Studies: Designing Large-Scale Applications](10-case-studies.md) | URL shortener architecture, rate limiter design, four-phase synthesis, technology trade-off evaluation |

## Supplementary Resources

- **Designing Data-Intensive Applications** by Martin Kleppmann — the definitive reference for distributed data systems
- **System Design Interview** by Alex Xu — practice-oriented interview preparation with worked examples
- **High Scalability** (highscalability.com) — curated real-world architecture breakdowns of major internet services
- **Google SRE Books** (Site Reliability Engineering, The SRE Workbook) — production engineering and operations best practices
