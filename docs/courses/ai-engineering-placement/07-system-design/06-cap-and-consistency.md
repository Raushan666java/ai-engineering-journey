# CAP Theorem and Consistency Models

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand CAP theorem: Consistency, Availability, Partition Tolerance |
| LO2 | Differentiate between CP, AP, and CA tradeoffs |
| LO3 | Implement strong consistency with consensus algorithms |
| LO4 | Apply eventual consistency for high availability |
| LO5 | Use quorum-based approaches for tunable consistency |
| LO6 | Choose the right consistency model for different use cases |

## Introduction

Understanding cap and consistency is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering cap and consistency.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 6.1 | CAP Theorem | Consistency, Availability, Partition Tolerance |
| 6.2 | CP Systems | Strong consistency, sacrifice availability |
| 6.3 | AP Systems | High availability, eventual consistency |
| 6.4 | PACELC | Extension of CAP for normal operation |
| 6.5 | Consistency Models | Strong, causal, eventual, read-your-writes |
| 6.6 | Quorum | W + R > N for strong consistency |
| 6.7 | Consensus Algorithms | Paxos, Raft, Zab |
| 6.8 | Vector Clocks | Detecting conflicts in distributed systems |

## Chapter Roadmap

```mermaid
flowchart LR
    A[CAP Theorem] --> B[CP Systems]
    A --> C[AP Systems]
    B --> D[PACELC]
    C --> D
    D --> E[Consistency Models]
    E --> F[Quorum]
    F --> G[Consensus]
    G --> H[Vector Clocks]
```text

## 6.1 CAP Theorem

A distributed system can provide only two of three guarantees:

**Consistency**: Every read receives the most recent write or an error.
**Availability**: Every request receives a response (not necessarily latest data).
**Partition Tolerance**: System continues despite network failures.

```mermaid
flowchart TD
    CAP[CAP Theorem] --> C[Consistency<br/>Same data everywhere]
    CAP --> A[Availability<br/>Every request gets response]
    CAP --> P[Partition Tolerance<br/>Works despite network split]
    C <--> CP[CP: MongoDB, HBase]
    A <--> AP[AP: Cassandra, DynamoDB]
    C <--> CA[CA: Single-node DB]
```text

**Key insight**: In a distributed system, partitions are inevitable. You must choose between CP or AP.

## 6.2 CP Systems

Choose Consistency over Availability during a partition.

**Examples**: MongoDB (default), HBase, Zookeeper, etcd.

```python
## CP system behavior
class CPStorage:
    def write(self, key, value):
        # Require all replicas to acknowledge
        acks = 0
        for replica in self.replicas:
            if replica.write(key, value):
                acks += 1
        # During partition, write fails if some replicas unreachable
        if acks < len(self.replicas):
            raise WriteFailedError("Not enough replicas acknowledged")
        return True

    def read(self, key):
        # Read from primary, always returns latest
        return self.primary.read(key)
```text

**When to use**: Financial transactions, inventory management, any system where stale data causes problems.

## 6.3 AP Systems

Choose Availability over Consistency during a partition.

**Examples**: Cassandra, DynamoDB, Riak, CouchDB.

```python
## AP system behavior
class APStorage:
    def write(self, key, value):
        # Accept write even if some replicas unreachable
        for replica in self.replicas:
            try:
                replica.write_async(key, value)
            except:
                pass  # Accept partial success
        return True

    def read(self, key):
        # Read from any available replica
        for replica in self.replicas:
            try:
                return replica.read(key)
            except:
                continue
        return None  # All replicas down
```text

**When to use**: Social media feeds, product catalog, user sessions, content delivery.

## 6.4 PACELC

Extends CAP: during Partition (P), choose between Availability (A) and Consistency (C). Else (E), choose between Latency (L) and Consistency (C).

```mermaid
flowchart LR
    System --> Partition[Partition?]
    Partition -->|Yes| ChoosePC[CP: Consistency]
    Partition -->|Yes| ChoosePA[AP: Availability]
    Partition -->|No| ChooseLC[Latency: Eventually Consistent]
    Partition -->|No| ChooseCC[Consistency: Strongly Consistent]
```text

**Examples**:
- DynamoDB: AP + EL (eventual consistency by default)
- MongoDB: CP + EC (strong consistency during partition, allows weaker for latency)

## 6.5 Consistency Models

| Model | Description | Example |
|-------|-------------|---------|
| Strong | Every read sees latest write | Single-node DB |
| Sequential | Operations happen in program order | Distributed locks |
| Causal | Related events seen in order | Social media comments |
| Eventual | All replicas converge eventually | DNS, CDN |
| Read-your-writes | User sees their own writes | User profiles |
| Monotonic | Reads never go back in time | Session data |

```python
## Read-your-writes consistency
class SessionStore:
    def write_session(self, user_id, data):
        self.primary.write(user_id, data)
        self.last_write[user_id] = time.time()

    def read_session(self, user_id):
        # Always read user's own writes from primary
        if self.last_write.get(user_id):
            return self.primary.read(user_id)
        # Other reads can use replicas
        return self.replica.read(user_id)
```text

## 6.6 Quorum

Quorum-based replication uses W (write quorum), R (read quorum), N (total replicas).

**Rule for strong consistency**: W + R > N

```python
class QuorumStorage:
    def __init__(self, replicas, W=3, R=3, N=5):
        self.replicas = replicas
        self.W = W  # Write quorum
        self.R = R  # Read quorum
        self.N = N  # Total replicas

    def write(self, key, value, timestamp):
        successes = 0
        for replica in self.replicas:
            if replica.write(key, value, timestamp):
                successes += 1
        return successes >= self.W

    def read(self, key):
        # Read from R replicas, return highest timestamp
        results = []
        for replica in self.replicas[:self.R]:
            data = replica.read(key)
            if data:
                results.append(data)
        if len(results) < self.R:
            return None
        return max(results, key=lambda x: x["timestamp"])
```text

## 6.7 Consensus Algorithms

Algorithms that achieve agreement on a value in a distributed system.

**Raft**: Leader-based consensus with log replication.

```mermaid
sequenceDiagram
    Client->>Leader: Propose value
    Leader->>Follower: AppendEntries
    Follower->>Leader: Ack
    Leader->>Follower: Commit
    Follower->>Leader: Ack
    Leader->>Client: Committed
```text

**Paxos**: Classic consensus (complex, hard to implement). Used in Google Chubby, Spanner.

**Zab**: Zookeeper Atomic Broadcast, similar to Paxos.

**Practical use**: etcd (Raft), Consul (Raft), Zookeeper (Zab).

## 6.8 Vector Clocks

Track causality between events in distributed systems.

```python
class VectorClock:
    def __init__(self, node_id):
        self.node_id = node_id
        self.clock = {}

    def tick(self):
        self.clock[self.node_id] = self.clock.get(self.node_id, 0) + 1

    def merge(self, other):
        for node, ts in other.clock.items():
            self.clock[node] = max(self.clock.get(node, 0), ts)

    def compare(self, other):
        # Returns: -1 (before), 0 (concurrent), 1 (after)
        all_leq = all(self.clock.get(k, 0) <= v for k, v in other.clock.items())
        all_geq = all(self.clock.get(k, 0) >= v for k, v in other.clock.items())
        less = any(self.clock.get(k, 0) < v for k, v in other.clock.items())
        greater = any(self.clock.get(k, 0) > v for k, v in other.clock.items())
        if all_leq and not greater: return -1
        if all_geq and not less: return 1
        return 0  # Concurrent
```text

---

## TypeScript Parallel

```typescript
type ConsistencyLevel = "strong" | "eventual" | "causal" | "read-your-writes";

interface StorageConfig {
  consistency: ConsistencyLevel;
  writeQuorum: number;
  readQuorum: number;
  totalReplicas: number;
}

class ConfigurableStorage {
  private config: StorageConfig;

  constructor(config: StorageConfig) {
    this.config = config;
  }

  getConsistencyGuarantee(): string {
    const { writeQuorum: W, readQuorum: R, totalReplicas: N } = this.config;
    const isStrong = W + R > N;
    return isStrong ? "Strong consistency (W + R > N)" : "Eventual consistency";
  }
}
```text

---

## Summary

- CAP theorem states distributed systems choose two of three: Consistency, Availability, Partition Tolerance
- During network partitions, you must choose between CP (consistency) or AP (availability)
- PACELC extends CAP with latency vs consistency during normal operation
- Consistency models range from strong (linearizable) to eventual (converges over time)
- Quorum (W + R > N) provides tunable consistency with configurable read/write weights
- Consensus algorithms (Raft, Paxos, Zab) achieve agreement in distributed systems
- Vector clocks detect and resolve concurrent updates in eventually consistent systems
- Strong consistency ensures every read sees the latest write but reduces availability
- Eventual consistency enables high availability and low latency at the cost of staleness
- Choose consistency model based on business requirements, not technical purity

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Financial transactions | Strong consistency (CP) | Eventual consistency |
| Social media feed | Eventual consistency (AP) | Strong consistency (slow) |
| User sessions | Read-your-writes | Eventual consistency |
| Shopping cart | Causal consistency | Strong consistency (overkill) |
| DNS/CDN | Eventual consistency | Strong consistency (unnecessary) |
| Distributed locks | Strong consistency (etcd/Raft) | AP system for locks |
| Analytics | Eventual consistency | Strong consistency (unnecessary) |

## Interview Q&A

<details class="tp-qa-card" data-qid="sysdes-s06-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q1: Explain CAP theorem.</summary>
  <div class="tp-qa-answer"><p>CAP: Consistency (all nodes see same data), Availability (every request gets a response), Partition Tolerance (system works despite network failures). You can only have two of three. Since partitions are inevitable in distributed systems, you choose between CP and AP.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s06-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q2: What is the difference between CP and AP systems?</summary>
  <div class="tp-qa-answer"><p>CP systems (MongoDB, HBase) sacrifice availability to ensure consistency during partitions — they reject writes until partition resolves. AP systems (Cassandra, DynamoDB) sacrifice consistency — they accept writes and reconcile conflicts later.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s06-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q3: What is the PACELC theorem?</summary>
  <div class="tp-qa-answer"><p>Extension of CAP: during Partition, choose A or C. Else (normal operation), choose L (latency) or C (consistency). Explains why DynamoDB uses eventual consistency (low latency) normally but AP consistency during partitions.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s06-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q4: How does quorum guarantee strong consistency?</summary>
  <div class="tp-qa-answer"><p>With N replicas, write quorum W, read quorum R. If W + R > N, every read will see at least one replica with the latest write. Example: N=5, W=3, R=3, intersection guarantees at least one overlapping replica.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s06-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q5: What is eventual consistency?</summary>
  <div class="tp-qa-answer"><p>Given enough time, all replicas will converge to the same value. No guarantees on when. Used by DNS, CDN, Amazon DynamoDB. Provides high availability and low latency.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s06-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q6: How does the Raft consensus algorithm work?</summary>
  <div class="tp-qa-answer"><p>Leader election: nodes vote for a leader. Log replication: leader appends entries, replicates to followers, commits once majority acknowledge. Safety: leader never overwrites its log, only commits entries from current term.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s06-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q7: What are vector clocks used for?</summary>
  <div class="tp-qa-answer"><p>Tracking causality in distributed systems. Each node maintains a counter for every node it knows about. When events happen concurrently, vector clocks detect the conflict and trigger conflict resolution.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s06-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q8: When would you choose strong vs eventual consistency?</summary>
  <div class="tp-qa-answer"><p>Strong: financial systems, inventory, distributed locks, leader election. Eventual: social media, product catalog, DNS, recommendations, analytics. Trade-off: stronger consistency = lower performance and availability.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s06-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q9: How does DynamoDB handle conflicts?</summary>
  <div class="tp-qa-answer"><p>Last-writer-wins (LWW) using timestamps by default. Uses vector clocks in multi-master mode. On read, conflicting versions are returned and application must resolve or DynamoDB uses LWW.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s06-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q10: What is read-your-writes consistency?</summary>
  <div class="tp-qa-answer"><p>After a user writes, they always see their own write. Other users may see stale data. Implemented by reading from the leader (or versioned cache) for the writing user's requests, replicas for others.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which two properties does CAP theorem force a choice between during partitions?

a) C and A
b) C and P
c) A and P
d) L and C

<details class="tp-qa-card" data-qid="sysdes-s06-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) C and A (Consistency vs Availability during Partition)</strong></p></div></details>

**Q2**: Which consistency model ensures the latest write is always visible?

a) Eventual
b) Strong
c) Causal
d) Read-your-writes

<details class="tp-qa-card" data-qid="sysdes-s06-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Strong</strong></p></div></details>

**Q3**: What quorum condition ensures strong consistency?

a) W + R > N
b) W + R = N
c) W > N/2
d) R > N/2

<details class="tp-qa-card" data-qid="sysdes-s06-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) W + R > N</strong></p></div></details>

**Q4**: Which algorithm is Raft based on?

a) Paxos
b) Two-phase commit
c) Leader election + log replication
d) Gossip protocol

<details class="tp-qa-card" data-qid="sysdes-s06-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Leader election + log replication</strong></p></div></details>

**Q5**: Which system is typically AP?

a) PostgreSQL
b) MongoDB
c) Cassandra
d) etcd

<details class="tp-qa-card" data-qid="sysdes-s06-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Cassandra (AP system)</strong></p></div></details>

## Exercises

**Easy** — Classify these systems as CP or AP: MySQL, Redis, Zookeeper, DynamoDB, DNS. Explain your reasoning.

**Medium** — Design a distributed counter with N=5 replicas. Calculate W and R for strong consistency. Explain what happens during a partition.

**Medium** — Implement a read-your-writes consistent cache: after user updates profile, subsequent reads from that user return updated data while others may see cached version.

**Hard** — Design a global distributed database for a banking system. Address: CAP tradeoffs, consistency model, replication, quorum configuration, conflict resolution, and partition handling.

**Hard** — Implement a simplified Raft consensus: leader election (nodes vote), log replication (leader proposes, followers acknowledge), and commit once majority agrees. Handle leader failure and election.

## Consistency in Practice — Real Systems

| System | CAP Classification | Consistency Model | Use Case |
|--------|-------------------|-------------------|----------|
| PostgreSQL | CA (single-node) | Strong (ACID) | Relational data, transactions |
| MongoDB | CP (default) / AP (configurable) | Strong (primary reads) / Eventual | Document store |
| Cassandra | AP | Eventual / Tunable | Time-series, IoT |
| DynamoDB | AP | Eventual / Strong (optional) | Key-value, sessions |
| Redis | CP (cluster) | Strong (single node) | Caching, real-time |
| Zookeeper | CP | Linearizable | Coordination, locks |
| etcd | CP | Linearizable | Kubernetes, config |
| Spanner | CP (externally consistent) | Strong (TrueTime) | Global SQL |

## Conflict Resolution Strategies

**Last Writer Wins (LWW)**:

```python
class LWWRegister:
    def __init__(self):
        self.value = None
        self.timestamp = 0

    def set(self, value, timestamp):
        if timestamp > self.timestamp:
            self.value = value
            self.timestamp = timestamp

    def merge(self, other):
        if other.timestamp > self.timestamp:
            self.value = other.value
            self.timestamp = other.timestamp
```text

**CRDTs (Conflict-Free Replicated Data Types)**:

```python
class GrowOnlySet:
    """G-Set: elements can only be added, never removed."""
    def __init__(self):
        self.elements = set()

    def add(self, element):
        self.elements.add(element)

    def merge(self, other):
        self.elements |= other.elements

class PNCounter:
    """PN-Counter: increment and decrement using separate counters."""
    def __init__(self):
        self.positives = {}
        self.negatives = {}

    def increment(self, node_id):
        self.positives[node_id] = self.positives.get(node_id, 0) + 1

    def decrement(self, node_id):
        self.negatives[node_id] = self.negatives.get(node_id, 0) + 1

    def value(self):
        return sum(self.positives.values()) - sum(self.negatives.values())

    def merge(self, other):
        for node, count in other.positives.items():
            self.positives[node] = max(self.positives.get(node, 0), count)
        for node, count in other.negatives.items():
            self.negatives[node] = max(self.negatives.get(node, 0), count)
```text

## Transaction Isolation Levels

| Level | Dirty Read | Non-repeatable Read | Phantom Read | Performance |
|-------|-----------|---------------------|--------------|-------------|
| Read Uncommitted | Possible | Possible | Possible | Highest |
| Read Committed | Prevented | Possible | Possible | High |
| Repeatable Read | Prevented | Prevented | Possible | Medium |
| Serializable | Prevented | Prevented | Prevented | Lowest |

```python
class TransactionManager:
    def __init__(self, db):
        self.db = db

    async def execute_with_isolation(self, queries, isolation_level="SERIALIZABLE"):
        async with self.db.transaction():
            await self.db.execute(f"SET TRANSACTION ISOLATION LEVEL {isolation_level}")
            for query in queries:
                await self.db.execute(query["sql"], query.get("params", []))
```text

## Distributed Database Comparison

| Feature | CockroachDB | YugabyteDB | TiDB | Amazon Aurora |
|---------|-------------|------------|------|---------------|
| Consistency | Strong (Ser) | Strong (Ser) | Strong (SI) | Strong (RC) |
| SQL support | PostgreSQL compatible | PostgreSQL compatible | MySQL compatible | MySQL/PostgreSQL |
| Replication | Raft consensus | Raft consensus | Raft consensus | Quorum |
| Sharding | Auto (range) | Auto (hash) | Auto (range) | Manual |
| Geographic | Multi-region | Multi-region | Multi-region | Multi-AZ |
| Use case | Global OLTP | Global OLTP | HTAP | Cloud OLTP |

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- Key concept 1: Core principle of 07-system-design
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 07-system-design. When would you choose one approach over another?
2. Design a system that efficiently handles 07-system-design at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 07-system-design. What was your approach and what was the result?
2. How would you explain 07-system-design to a non-technical stakeholder?

#### Microsoft Style
1. How does 07-system-design integrate with enterprise systems and cloud architectures?
2. What are the security implications of 07-system-design?

#### NVIDIA Style
1. How would you optimize 07-system-design for GPU-accelerated computing?
2. What parallel processing patterns apply to 07-system-design?

#### AI Startup Style
1. How would you implement 07-system-design in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 07-system-design?

### Resume Tips
- **Technical Skills**: List 07-system-design under relevant technical skills
- **Project Description**: "Implemented 07-system-design to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 07-system-design in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 07-system-design
- [ ] Practice 3-5 problems related to 07-system-design
- [ ] Prepare 2 real-world examples of using 07-system-design
- [ ] Know the time/space complexity of common 07-system-design operations
- [ ] Have questions ready about how the company uses 07-system-design> **Next**: [API Design Patterns](07-api-design-patterns.md)
