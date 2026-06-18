# Chapter 24: System Design Interview Preparation

---

## Learning Objectives

- Master the structured six-phase answer framework for any system design interview question
- Internalize estimation heuristics for traffic, storage, bandwidth, and query-per-second calculations
- Catalog company-specific question patterns for FAANG and top-tier tech companies
- Understand the evaluation rubric at each engineering level (E3/E4 to E6+)
- Recognize common pitfalls and develop strategies to avoid them
- Practice time-boxed mock interview workflow with specific phase durations

---

## Theory / Case Study

![System Design Interview Mindmap](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/24-interview-preparation.png)

### Phase 1: The Interview Format

A system design interview typically lasts 45-60 minutes. The format varies by company but generally follows one of four archetypes:

**Product Design (most common)**: "Design YouTube." The interviewer wants to see how you approach a familiar consumer product, making reasonable assumptions about scale, and prioritizing features based on user needs. These questions test your ability to decompose a known product into its architectural components.

**Estimation-Focused**: "Design a URL shortener." These questions are heavy on data modeling and traffic estimation. The interviewer wants to verify your ability to compute storage requirements, bandwidth needs, and caching strategies from first principles.

**Infrastructure Design**: "Design a distributed key-value store." These questions test your knowledge of distributed systems fundamentals: consistent hashing, replication, quorum protocols, conflict resolution, and failure handling.

**Low-Level Design (LLD)**: "Design a parking lot system." These questions focus on object-oriented design, class hierarchies, design patterns, and clean API contracts. They are more common at Uber, Amazon (certain teams), and for senior+ roles at smaller companies.

The interviewer is evaluating four dimensions simultaneously:
1. **Structured thinking**: Can you follow a systematic approach rather than jumping to random details?
2. **Depth**: When you dive into a component, can you reason about trade-offs at multiple levels?
3. **Breadth**: Do you know the relevant technologies (caching, databases, load balancers, CDNs, queues)?
4. **Communication**: Can you explain complex ideas clearly, use whiteboard diagrams effectively, and incorporate feedback?

### Phase 2: The Structured Answer Framework

The most reliable approach to any system design question follows six phases. The time allocations are guidelines â€” adjust based on the question's emphasis and the interviewer's signals.

**Phase 1: Requirements Clarification (1-2 minutes)**

Never start designing before clarifying requirements. Ask questions to establish scope:

Functional requirements:
- "What are the core features? What is v1 vs v2?"
- "Who are the users? Consumers? Content creators? Admins?"
- "What are the primary actions users take?"

Non-functional requirements:
- "What scale are we designing for? DAU? Total users?"
- "Is this a read-heavy or write-heavy system?"
- "What are the latency requirements? P99? P95?"
- "What consistency model do we need? Strong? Eventual?"
- "Are there availability constraints? 99.9%? 99.99%?"

Example for "Design YouTube":
- Users: 500M DAU watching videos, 5M content creators uploading
- Actions: Watch video (read), upload video (write), search, comment
- Scale: 500M DAU, each watching 5 videos/day = 2.5B views/day
- Latency: Video start under 2 seconds, search under 500ms
- Consistency: Eventual for views/likes, strong for video metadata
- Availability: 99.99% uptime on playback

**Phase 2: Estimation (2-3 minutes)**

Estimation demonstrates your ability to reason about scale. Compute the key numbers:

Traffic estimation:
```
DAU = 500M
Daily views = DAU * views_per_user = 500M * 5 = 2.5B
Writes: uploads per day = 5M * 1 = 5M
Reads: video views per second = 2.5B / 86400 â‰ˆ 29,000 QPS
Peak QPS: 3-5x average â‰ˆ 100,000 QPS
```

Storage estimation:
```
Average video size: 50MB (compressed, various resolutions)
Daily new video storage: 5M * 50MB = 250TB/day
Yearly storage: 250TB * 365 â‰ˆ 91PB/year
Total storage (5 years): ~455PB
Metadata per video: 1KB
Total metadata: 5 years * 5M * 365 * 1KB â‰ˆ 9TB
```

Bandwidth estimation:
```
Upload bandwidth: 5M videos/day * 50MB / 86400s â‰ˆ 2.9 GB/s
Download bandwidth: 29,000 QPS * 50MB = 1.45 TB/s
CDN bandwidth: 95% of download served by CDN â‰ˆ 1.38 TB/s
Origin bandwidth: remaining 5% â‰ˆ 72.5 GB/s
```

Memory estimation:
```
Cache for hot videos (80% of traffic from 20% of videos):
    Hot videos = 2.5B * 0.2 = 500M cached videos
    At 50MB each: 500M * 50MB = 25PB â†’ not feasible
    Cache only metadata/popular= 100M * 10KB = 1TB
```

Memory lookup cheat sheet:
| Component | Latency |
|-----------|---------|
| L1 cache reference | 0.5 ns |
| L2 cache reference | 7 ns |
| RAM access | 100 ns |
| SSD random read | 0.1 ms |
| Disk seek | 10 ms |
| Network packet (intra-DC) | 0.5 ms |
| Sequential disk read (1MB) | 1 GB/s |

Scale cheat sheet:
| Metric | Value |
|--------|-------|
| 1 byte | 8 bits |
| 1 KB | 1,024 bytes |
| 1 MB | ~1,000 KB |
| 1 GB | ~1,000 MB |
| 1 TB | ~1,000 GB |
| 1 PB | ~1,000 TB |
| 1 EB | ~1,000 PB |

**Phase 3: High-Level Design (5-8 minutes)**

Draw the box diagram. Identify the major components and their interactions. Use a consistent set of building blocks:

```
Client â†’ CDN â†’ Load Balancer â†’ Web Servers â†’ Application Services â†’ Data Stores
```

For "Design YouTube":
```
Client (browser/mobile app) â†’ CDN (video content) â†’ Load Balancer â†’ API Gateway
  â†’ User Service â†’ Video Service â†’ Upload Service â†’ Transcoder â†’ Metadata DB
  â†’ Search Service (Elasticsearch) â†’ Recommendation Service â†’ Analytics Pipeline
  â†’ Blob Storage (videos) â†’ CDN Origin
```

At this phase, you are sketching boxes and drawing arrows. Do not descend into implementation details yet. Your goal is to demonstrate that you know what components exist and how they connect. Label each box with the technology you would use (PostgreSQL, Redis, Kafka, Elasticsearch, S3) and justify each choice briefly.

**Phase 4: Data Model (3-5 minutes)**

Design the core schema or data structures. For relational databases:

```sql
CREATE TABLE users (
    user_id BIGINT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(255),
    created_at TIMESTAMP
);

CREATE TABLE videos (
    video_id BIGINT PRIMARY KEY,
    user_id BIGINT REFERENCES users,
    title VARCHAR(500),
    description TEXT,
    s3_key VARCHAR(500),
    duration_seconds INT,
    size_bytes BIGINT,
    format VARCHAR(20),
    created_at TIMESTAMP,
    view_count BIGINT DEFAULT 0
);

CREATE TABLE video_encodings (
    id BIGINT PRIMARY KEY,
    video_id BIGINT REFERENCES videos,
    resolution VARCHAR(10),
    s3_key VARCHAR(500),
    bitrate INT
);
```

For key-value stores, describe the schema:
```
User: user_id â†’ {name, email, created_at}
Video: video_id â†’ {user_id, title, description, s3_key, duration, ...}
Timeline: user_id â†’ sorted_set(video_id, timestamp)  -- in Redis
Upload queue: list(video_id)  -- in Kafka
```

Explain why you chose the data model you did, including indexing strategy and partitioning approach.

**Phase 5: Deep Dive (15-20 minutes)**

This is the most important phase. Pick 2-3 components from your high-level design and go deep. The interviewer will guide you toward areas they want to explore. Common deep dive topics:

**Bottleneck analysis**: Identify the weakest link and propose optimizations.
- "The database will be the bottleneck at 100K QPS. Let's add read replicas and cache frequent queries in Redis."
- "The video transcoder takes 5 minutes per video. Let's use a queue with 100 worker nodes and transcoding priority (shorter videos first)."
- "CDN cache misses cause origin load spikes. Let's pre-warm the CDN for trending videos."

**Caching strategy**:
```
Multi-tier caching for YouTube:
  L1: Browser cache (video segments, API responses) â€” TTL 5 minutes
  L2: CDN cache (video content, thumbnails) â€” 95% hit rate
  L3: Application cache (Redis â€” video metadata, user sessions) â€” 99% hit rate
  L4: Database replica cache (MySQL query cache if needed)
```

**Replication and consistency**:
- "The metadata database uses async replication: writes to master, reads from replicas. This gives us low-latency reads but possible stale reads. If we need read-after-write consistency for video metadata, we route the user to the master for N seconds after their last write."
- "Video views are eventually consistent. We batch write view counts to Redis every 5 seconds, then flush to MySQL every minute. Temporary view count inaccuracies are acceptable."

**Fault tolerance and availability**:
- "The system spans 3 availability zones. Load balancers route to healthy instances."
- "Kafka with replication factor 3 ensures queued jobs survive broker failures."
- "Database master failover: automated via consensus (Raft/Paxos) or semi-automated (Orchestrator for MySQL)."

**Phase 6: Trade-offs and Alternatives (5-10 minutes)**

Demonstrate depth by discussing what you chose NOT to do and why:

- "I chose PostgreSQL over Cassandra because our data model is relational and consistent reads matter for video metadata. If we needed higher write throughput at the cost of consistency, Cassandra would be better."
- "I chose synchronous replication for the payment system (strong consistency required) but async for video views (performance over precision)."
- "I chose a monolithic API gateway for simplicity. If the team grows to 50 engineers, they should migrate to a microservice gateway like Envoy for independent deployments."
- "I chose pull-based CDN cache invalidation. Push-based would be faster but requires CDN vendor support and adds complexity."

This phase is your opportunity to show that you understand engineering as a series of trade-offs, not absolute right answers.

### Phase 3: Company-Specific Question Catalogs

**Google**

Google interviewers favor questions that test algorithmic thinking and scalability. Their questions often have a search or data processing angle:

- Design YouTube (most common â€” video streaming, upload, search, recommendations)
- Design Google Docs (real-time collaboration, OT/CRDT, conflict resolution, operational transformation)
- Design Google Maps (geospatial indexing, route optimization, real-time traffic, ETA)
- Design a Web Crawler (distributed crawling, politeness policy, deduplication, prioritization)
- Design Gmail (email storage, search, attachment handling, spam detection)
- Design Search Autocomplete (trie data structure, top-K queries, personalization, real-time updates)
- Design a Distributed Queue (Kafka-like: partitioning, replication, consumer groups, exactly-once semantics)
- Design a Distributed Key-Value Store (Paxos/Raft, consistent hashing, hinted handoff, read repair)

Google emphasizes estimation and data structures. They may ask you to compute the QPS for a specific operation and then design the data structure to support it. Practice trie, Bloom filter, consistent hashing, and quorum protocols.

**Facebook/Meta**

Meta interviewers focus on social graph traversal, real-time communication, and news feed algorithms:

- Design News Feed (the original system design interview question â€” ranking, storage, fan-out, personalization)
- Design Messenger/Chat (WebSocket, presence detection, message ordering, delivery guarantees, encryption)
- Design Nearby Friends (geospatial indexing, WebSocket push, battery optimization, privacy controls)
- Design Facebook Live (streaming protocol, latency optimization, transcoding, interactive features)
- Design Graph Search (social graph traversal, inverted index, access control, natural language queries)
- Design Photo Storage (thumbnails, CDN, face recognition, EXIF metadata, deduplication)

Meta questions often have a strong data modeling component. Expect to design the schema for the social graph, the photo album, or the messaging system. Practice adjacency list vs adjacency matrix for graphs.

**Amazon**

Amazon's leadership principle "Bias for Action" means they want to see you make decisions quickly. Amazon's "bar raiser" interviewers often ask ambiguous questions to test your ability to scope and prioritize:

- Design Shopping Cart (session management, persistence, price changes, inventory reservation, concurrency)
- Design Product Catalog (hierarchical categories, faceted search, variants, pricing, inventory across sellers)
- Design Recommendation Engine (collaborative filtering, content-based, matrix factorization, real-time personalization, cold start)
- Design Fulfillment Center (warehouse layout optimization, inventory placement, picking routes, shipping optimization)
- Design Product Search (inverted index, faceted navigation, spelling correction, ML ranking)

Amazon interviewers care deeply about failure modes. For every component, be ready to answer "What happens when this fails?" They also expect detailed understanding of consistency models â€” Amazon's Dynamo paper (eventual consistency, vector clocks) is required reading.

**Netflix/Spotify**

These companies focus on media streaming, recommendation, and encoding pipelines:

- Design Video Streaming (adaptive bitrate, CDN selection, buffering strategy, DRM, edge servers)
- Design Music Recommendation (collaborative filtering, audio features, playlists, real-time personalization, A/B testing)
- Design Audio Encoding Pipeline (parallel encoding, codec selection, metadata extraction, CDN distribution)

Netflix questions often probe CDN and caching architecture. Understand Open Connect (Netflix's CDN appliance), adaptive bitrate algorithms (BOLA, MPC), and the encoding ladder (resolution Ã— bitrate combinations).

**Uber**

Uber questions focus on real-time systems, geospatial data, and marketplace dynamics:

- Design Ride Matching (geospatial index, bipartite matching, real-time streaming, surge pricing)
- Design ETA Prediction (ML features, map matching, real-time traffic, Kalman filtering)
- Design Surge Pricing (demand-supply curves, real-time pricing, geographic granularity, fairness)
- Design Geospatial Indexing (S2, H3, QuadTree, GeoHash â€” compare and contrast)

**LLD-Focused Questions**

Some companies (especially for mid-level roles) focus on low-level design:

- Parking Lot System (class hierarchy for spots, vehicles, ticketing, payment)
- Vending Machine (state machine for inventory, coins, product selection, change)
- Elevator System (request scheduling algorithm, door safety, peak time handling, fault tolerance)
- Chess Game (piece hierarchy, move validation, check/checkmate detection, game state, AI integration)
- Logger Library (thread-safe log writing, multiple sinks, log levels, rotation, async I/O)
- Distributed Cache Library (LRU/LFU eviction, sharding, replication, serialization)
- Rate Limiter Library (token bucket, sliding window, distributed counters, per-user limits)

For LLD questions, draw a class diagram with relationships (inheritance, composition, dependency). Use design patterns appropriately: Strategy (for pricing algorithms), Observer (for event-driven updates), Factory (for creating domain objects), Singleton (for loggers â€” with thread safety considerations).

### Phase 4: Common Pitfalls

**Jumping to Solution Without Requirements Clarification**

The most common mistake. You hear "design YouTube" and immediately start drawing video upload and transcoding. You miss that the interviewer wanted to focus on search, not upload. Always spend 1-2 minutes clarifying scope. This signals structured thinking.

**Ignoring Data Modeling**

Many candidates jump straight to the infrastructure diagram (load balancers, CDNs, databases) without defining what the data looks like. You cannot size a database without knowing the schema. Always spend 3-5 minutes on data modeling. The schema reveals the access patterns, which determines the indexing strategy.

**Forgetting Read vs Write Trade-offs**

A system optimized for writes (append-only log) looks very different from one optimized for reads (denormalized cache). Always explicitly state whether your design favors reads or writes, and justify the choice based on the requirements. If the system has both heavy reads and heavy writes, explain how you balance them (e.g., write-behind cache, read replicas, CQRS pattern).

**Not Addressing Fault Tolerance**

Every component in your diagram will fail. If you do not explicitly describe how your system handles failure, the interviewer will assume you have not thought about it. For each tier:
- "If the primary database fails, the replica is promoted automatically."
- "If a cache node fails, traffic is redirected to remaining nodes. The cache hit rate degrades temporarily but the system stays up."
- "If a message broker fails, producers buffer messages locally until the broker recovers."

**Missing Caching Opportunities**

Caching is the single most effective optimization in system design. If you do not mention caching, you are missing an easy signal. Identify the hot paths and apply caching:
- "Video metadata is cached in Redis with a 5-minute TTL."
- "Thumbnails are cached at the CDN edge."
- "Frequent search queries are cached: results for the top 10,000 queries are precomputed and refreshed every hour."
- "User sessions are cached in Memcached with session ID as key."

**Designing Single Points of Failure**

Common SPOFs to avoid:
- A single database master (use master-replica or multi-master)
- A single load balancer (use DNS round-robin + multiple LB instances)
- A single cache cluster (use consistent hashing with replication)
- A single message queue broker (use Kafka with replication)
- A single CDN provider (have a fallback CDN or direct origin serving)

**Over-Engineering**

Not every system needs Paxos, CRDTs, and a custom distributed file system. Match complexity to scale. A URL shortener with 1M users does not need a multi-region deployment. The interviewer is testing your judgment as much as your knowledge.

**Neglecting the Estimation Phase**

Skipping the estimation and jumping to architecture is a red flag. The estimation shows you can reason quantitatively about trade-offs. Even a rough calculation demonstrates that you consider cost, capacity, and performance as design constraints.

### Phase 5: The Evaluation Rubric

FAANG companies evaluate system design against level-specific criteria. Understanding the rubric helps you calibrate your answer:

**E3/E4 (Entry-level / Early Career)**
- Can design a small system with guidance
- Identifies basic components (load balancer, database, cache)
- Handles single-data-center deployment
- Understands basic trade-offs (SQL vs NoSQL)
- The bar: "With prompting, can produce a reasonable high-level design for a system serving 1-10M users."

**E5 (Senior Engineer)**
- Independently designs a medium-complexity system
- Handles multiple data centers / replication
- Identifies bottlenecks and proposes solutions
- Understands consistency models and their trade-offs
- The bar: "Can design a complete system serving 100M+ users with minimal guidance, covering most edge cases."

**E6 (Staff Engineer)**
- Drives ambiguous, large-scale design from inception
- Handles global-scale systems (500M+ users, multi-region)
- Makes appropriate technology choices with justification
- Identifies failure modes and designs for resilience
- The bar: "Can take a vague problem statement and produce a production-quality architecture that handles all major failure modes and scales to billions of users."

**E7+ (Principal / Distinguished)**
- Designs systems that span multiple organizations
- Defines technical strategy that affects the company
- Mentors through architectural decisions
- Evaluates multi-year trade-offs (build vs buy, platform vs product)
- The bar: "Produces architecture that influences the company's technical direction and unblocks other teams."

### Phase 6: Mock Interview Workflow

Practice with a timer. The following schedule simulates a real interview:

```
0:00 - 0:05    Requirements clarification
               - Establish scope, users, features
               - Define non-functional constraints
               
0:05 - 0:08    Estimation
               - QPS, storage, bandwidth
               - Write down key numbers
               
0:08 - 0:15    High-level design
               - Box diagram on whiteboard
               - Label each box, draw connections
               
0:15 - 0:30    Deep dive (pick 2-3 areas)
               - Data model and schema
               - Caching strategy
               - Replication and consistency
               - Bottleneck analysis
               
0:30 - 0:35    Trade-offs and alternatives
               - What else could work
               - Why you chose this path
               
0:35 - 0:40    Wrap / Follow-up questions
               - "How would you handle a regional outage?"
               - "How to reduce P99 latency by 50%?"
               - "How to make this eventually consistent?"
```

---

## Summary

- The six-phase framework (Requirements â†’ Estimation â†’ HLD â†’ Data Model â†’ Deep Dive â†’ Trade-offs) provides a reliable structure for any system design interview question.
- Estimation demonstrates quantitative reasoning: compute QPS, storage, bandwidth, and memory requirements to justify architectural choices.
- The evaluation rubric differs by level: E3/E4 needs guided small-system design, E5 independently designs medium systems, E6 drives large-scale ambiguous design, E7+ defines multi-org technical strategy.
- Common pitfalls include skipping requirements clarification, ignoring data modeling, forgetting fault tolerance, designing SPOFs, and over-engineering beyond the problem's scale.
- Company-specific question patterns exist: Google tests algorithmic thinking (search, key-value stores), Meta tests social graph and real-time, Amazon tests failure modes and decisions under ambiguity.
- LLD questions require class diagrams, design patterns, and clean API contracts rather than distributed systems infrastructure.
- Mock interviews should be strictly time-boxed: 5min requirements, 3min estimation, 7min HLD, 15min deep dive, 5min trade-offs, 5min wrap.
- Internalize the latency numbers cheat sheet, storage scale cheat sheet, and QPS estimation patterns for rapid mental calculation during interviews.

---

## Exercises

### Review Questions

1. Describe the six-phase framework for system design interviews. For each phase, give the time allocation and the key deliverable.

2. For "Design a URL shortener," perform the estimation phase: compute the daily write volume (100M new URLs/day), storage for 10 years of URLs (1KB per entry), read-to-write ratio (100:1), and bandwidth. Show your work.

3. What is the difference between the E5 and E6 evaluation rubric in system design? Give a specific example of an expectation that increases from E5 to E6.

4. List five common pitfalls in system design interviews. For each, describe a strategy to avoid it.

5. Compare the question patterns at Google, Meta, Amazon, and Uber. What aspect of system design does each company emphasize most heavily?

### Application Problems

1. **Question Classification**: Given the following ten interview questions, classify each as Product Design, Estimation-Focused, Infrastructure Design, or LLD:
   (a) Design WhatsApp
   (b) Design a distributed rate limiter
   (c) Design a hotel booking system
   (d) Design a distributed logger
   (e) Design TikTok's "For You" feed
   (f) Design a CDN
   (g) Design an ATM
   (h) Design a web crawler for 1 billion pages
   (i) Design an online multiplayer tic-tac-toe game
   (j) Design a recommendation system for Amazon

   For each question, list the three most important clarifying questions you would ask in the requirements phase.

2. **Estimation Drill**: For "Design a ride-sharing service like Uber":
   - Estimate DAU (assume 50M monthly active riders, daily active = 40% of MAU)
   - Estimate QPS for ride requests during peak hour (assume 10% of DAU request a ride during the peak hour, each user making 1 request)
   - Estimate storage for trip history (500M trips/day, 2KB per trip record, 5-year retention)
   - Estimate bandwidth for real-time location updates (all active drivers send GPS every 4 seconds, 10M active drivers)

   Show each calculation step. Then state whether this system is read-heavy or write-heavy.

3. **Trade-off Analysis**: Choose any one of these design decisions and write a 200-word analysis of the trade-offs for the system specified:

   (a) SQL vs NoSQL for the URL shortener's core mapping table
   (b) Single master vs multi-master replication for a video metadata store
   (c) Push (fan-on-write) vs pull (fan-on-read) for a social media timeline with 5 million users and a celebrity user with 3 million followers
   (d) S3-style blob storage vs HDFS for video file storage in a YouTube-like system

### Challenge Problem

**Design Amazon's Shopping Cart (Full Mock Interview)**

You have 45 minutes. Design the shopping cart system for Amazon.com. Do not read the solution in advance â€” treat this as a live mock interview. Use a timer if possible and switch phases strictly.

Requirements:
- 300M active users
- 50M active sessions at peak (holiday season)
- Cart persists for 30 days even if the user logs out
- Users can add items from multiple sellers in one cart
- Inventory must be reserved when the user proceeds to checkout, not when they add to cart
- Cart must work reliably on mobile with intermittent connectivity
- Price may change between adding to cart and checkout

For your final answer, produce:
1. A list of clarifying questions you would ask
2. Your estimation: QPS, storage, bandwidth for the cart service
3. High-level architecture diagram (component boxes and connections)
4. Data model: schema for cart items, cart sessions, and inventory reservation
5. Deep dive on handling the 30-day cart persistence + intermittent connectivity scenario
6. Trade-offs: What alternatives did you consider and why did you reject them?
7. Failure analysis: What happens if the cart database is unreachable? If inventory service is slow? If a user's session crosses data centers?

**Evaluation Checklist (Self-Grade)**

| Criterion | Pass | Partial | Fail |
|-----------|------|---------|------|
| Requirements clarified before designing | | | |
| Estimation performed with realistic numbers | | | |
| High-level design has all major components | | | |
| Data model is shown (schema or key-value design) | | | |
| At least 2 components explored in depth | | | |
| Caching strategy identified | | | |
| Failure modes discussed | | | |
| Trade-offs and alternatives presented | | | |
| Completed within 45-minute timebox | | | |
| Communicated clearly with diagram annotations | | | |

If you scored "Pass" on at least 7 of 10 criteria, you are ready for E5-level interviews. For E6, aim for 9/10 with deeper reasoning on failure modes and trade-offs.

### Resources for Further Study

**Books (ranked by difficulty)**
- â˜…â˜†â˜†: "System Design Interview â€” An Insider's Guide" (Alex Xu) â€” Best for beginners, covers 15 common questions step by step
- â˜…â˜…â˜†: "Designing Data-Intensive Applications" (Martin Kleppmann) â€” Required reading for distributed systems fundamentals
- â˜…â˜…â˜…: "The Art of Scalability" (Abbott & Fisher) â€” Comprehensive but dense, covers organizational and process scalability
- â˜…â˜…â˜†: "Building Microservices" (Sam Newman) â€” Practical guidance on service boundaries, communication patterns, and deployment
- â˜…â˜…â˜…: "Distributed Systems" (van Steen & Tanenbaum) â€” Academic textbook covering theory behind replication, consensus, and consistency

**YouTube Channels**
- Gaurav Sen (System Design) â€” Best format: clear diagrams, real system examples, multiple perspectives per topic
- Tech Dummies (Design YouTube, Netflix, Uber) â€” Deep dives with whiteboard diagrams, good for visual learners
- Hello Interview (asynchronous mock interviews) â€” Recorded mock interviews with real-time feedback
- System Design Interview (codeKarle) â€” Clean, well-structured walkthroughs of common questions

**Mock Interview Platforms**
- Pramp â€” Free peer-to-peer mock interviews with structured feedback forms
- interviewing.io â€” Anonymous technical interviews with engineers from FAANG companies
- DesignGurus â€” Mock interviews specifically for system design with expert reviewers

**Cheat Sheet to Memorize**

```
Latency Numbers (drill until automatic):
   L1: 0.5ns    L2: 7ns    RAM: 100ns
   SSD: 0.1ms   Disk: 10ms  Network: 0.5ms

Scale Units:
   10^6 = million (MB)    10^9 = billion (GB)
   10^12 = trillion (TB)  10^15 = quadrillion (PB)

QPS Examples for Reference:
   Twitter: 6K tweets/s          Facebook: 200K statuses/s
   YouTube: 30K video views/s    WhatsApp: 40K messages/s

Caching Hierarchy:
   L1: Browser       L2: CDN        L3: App (Redis)    L4: DB

Database Scaling Progression:
   Single â†’ Read replicas â†’ Sharding â†’ Vitess/Citus â†’ NewSQL

Consistency Spectrum (strongest to weakest):
   Linearizability â†’ Sequential â†’ Causal â†’ Eventual
```
