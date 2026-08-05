---
slug: /00-foundations/database-internals
title: "Database Internals"
sidebar_label: "Database Internals"
sidebar_position: 3
---

# Database Internals for AI Engineers

## Learning Objectives

After this chapter you will be able to choose between B-tree and LSM-tree storage engines for different AI workloads, design indexes that accelerate feature lookups,.
explain how MVCC enables snapshot isolation for ML training data, reason about replication strategies for high-availability model metadata stores, and understand.
the distributed consensus algorithms powering modern data infrastructure.

## Introduction

Computer science fundamentals are the bedrock of every AI system. Understanding networks, operating systems, databases, and architecture helps you build reliable, scalable AI services. This module covers what interviewers expect you to know cold.



## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

### B-tree vs LSM-tree

B-trees and LSM-trees are the two dominant storage engine families. B-trees organize data in fixed-size pages with a branching factor proportional to page size. They excel at point reads and small range scans. Write amplification for random inserts is high — each page write causes a full page rewrite.

LSM-trees buffer writes in memory (memtable), flush to immutable sorted SSTables, and merge them in background compaction. Writes are sequential and fast. Reads must check memtable and multiple SSTable levels, though bloom filters reduce unnecessary lookups.

```mermaid
graph TB
    subgraph "B-tree"
        Root["Root Page [10, 20, 30]"]
        L1["Page [1,5,8]"]
        L2["Page [12,15,18]"]
        L3["Page [22,25,28]"]
        Root --> L1
        Root --> L2
        Root --> L3
    end
    subgraph "LSM-tree"
        M["Memtable {k1:v1, k3:v3}"]
        L0["SSTable L0 k4-v4, k2-v2"]
        L1["SSTable L1 k1-v1, k2-v2, k3-v3"]
        M --> L0
        L0 --> L1
    end
```

Cassandra and RocksDB use LSM-trees. PostgreSQL and MySQL InnoDB use B-trees. For vector databases, IVF (inverted file index) and HNSW (hierarchical navigable small world) are the dominant index structures.

### Indexing

Primary indexes determine physical row order (clustered) or point to row location (non-clustered). Secondary indexes store the primary key as a pointer. Covering indexes include all columns needed by a query, eliminating the table lookup entirely. Composite indexes follow the leftmost prefix rule. High-cardinality columns make the best index candidates.

### Query Planning

The planner estimates costs for each strategy. Sequential scans read all pages — optimal above 10% row access. Index scans traverse the B-tree to find a start position,.
then walk leaf pages. Index-only scans are fastest when the index covers all needed columns. Bitmap scans combine multiple indexes with bitwise operations.

Join strategies include nested loop (for small outer tables), hash join (for equi-joins on unsorted data), and merge join (for pre-sorted inputs). The planner selects based on row estimates and available indexes.

### Transactions and ACID

Atomicity ensures all-or-nothing execution via write-ahead logging. Consistency preserves database invariants. Isolation prevents concurrent transaction interference. Durability guarantees committed data survives crashes.

Isolation levels ranked from weakest to strongest:
- Read Uncommitted: dirty reads allowed
- Read Committed: only committed data visible
- Repeatable Read: same read returns same result within a transaction
- Serializable: transactions execute as if serial

Each level prevents different anomalies: dirty read, non-repeatable read, phantom read, serialization anomaly.

### MVCC

Multi-version concurrency control gives each transaction a snapshot of the database at its start time. Every row version carries a creation timestamp and deletion timestamp. A transaction sees rows created before its snapshot and not yet deleted.

Garbage collection (vacuum in PostgreSQL, compaction in MySQL) removes old versions no longer visible to any active transaction. Long-running transactions delay garbage collection and cause table bloat.

### Replication

Synchronous replication waits for confirmation from replicas before acknowledging the client. Ensures zero data loss but adds latency. Asynchronous replication is faster but risks losing recent writes on leader failure.

Leader-follower (primary-replica) has one write node. Multi-leader allows writes at multiple nodes with conflict resolution. Quorum reads/writes in Dynamo-style systems provide tunable consistency.

### Sharding

Hash-based sharding distributes rows uniformly but makes range scans impossible. Range-based sharding supports efficient range queries but can create hotspots. Consistent hashing minimizes data movement during resharding.

### Distributed Consensus

Paxos and Raft solve the consensus problem: getting multiple nodes to agree on a value despite failures.

```mermaid
sequenceDiagram
    participant C as Client
    participant L as Leader
    participant F1 as Follower 1
    participant F2 as Follower 2
    C->>L: Propose value
    L->>F1: AppendEntries
    L->>F2: AppendEntries
    F1-->>L: ACK
    F2-->>L: ACK
    L->>C: Committed (majority)
```

Raft's leader election: nodes start as followers, become candidates on timeout, request votes, become leader with majority. Log replication: leader appends entries, replicates to followers, commits when majority acknowledges.


### LSM Compaction Strategies

LSM-trees compact SSTables in the background to maintain read performance. Strategies include:

- Size-tiered compaction (Cassandra): compact SSTables of similar size. Simple but can create read amplification spikes
- Leveled compaction (RocksDB, LevelDB): split into levels (L0, L1, L2...) where each level is 10x larger than the previous. Compaction merges SSTables from Li to Li+1. Provides predictable read amplification (one SSTable per level)
- Time-window compaction: for time-series data, compact SSTables within time windows. Old data never compacted

Read amplification = number of SSTables checked per query. Leveled compaction gives 3-5x, size-tiered can reach 30x under heavy writes.

### Vector Database Index Structures

Vector databases index high-dimensional embeddings for approximate nearest neighbor (ANN) search:

- IVF (Inverted File Index): cluster centroids via k-means, assign vectors to nearest centroid. Search checks only the closest N centroids. Configurable accuracy-speed tradeoff (nprobe parameter)
- HNSW (Hierarchical Navigable Small World): multi-layer graph where upper layers have fewer nodes (long-range connections). Search starts at top layer, descends to bottom. Best recall-speed tradeoff in practice
- Product Quantization (PQ): compress vectors into sub-vector codebooks. 4x-16x memory reduction at modest accuracy loss

### Transactions in Distributed Databases

Distributed transactions use two-phase commit (2PC): coordinator asks all participants to prepare, then commits. If any participant fails prepare, all abort. 2PC is synchronous and blocks on coordinator failure.

The CALM theorem states that a distributed computation is logically monotonic if and only if it is eventually consistent without coordination. Bloom language and CRDTs exploit this for coordination-free eventual consistency.

### Eventual Consistency and CRDTs

Conflict-free Replicated Data Types (CRDTs) allow concurrent writes that merge deterministically. Examples include:

- Grow-only counter (G-Counter): each node increments its own value. Merge = max
- Last-writer-wins register (LWW-Register): timestamp-based conflict resolution
- OR-Set (observed-remove set): element addition wins over concurrent removal

CRDTs power collaborative features (Google Docs, Figma) and are used in distributed databases like Riak.

### Data Versioning for ML

Feature stores and data versioning tools (DVC, LakeFS) use MVCC-like mechanisms. When a training run starts, it pins a snapshot of features. Subsequent pipeline runs see a consistent view even as new data is ingested.

LakeFS uses a Git-like model on top of object storage: branches, commits, merges. Each commit is a metadata pointer to the underlying data. Zero-copy branching means branching a 10TB dataset takes seconds.

## Relevance to AI

Feature stores require low-latency point lookups (B-tree) and range scans for training data exports. Vector databases use inverted file indexes (IVF) or HNSW graphs for approximate nearest neighbor search. Data versioning systems (DVC, LakeFS) use MVCC-like snapshot isolation. Lakehouse architectures combine database transaction semantics with data lake scalability.

## Examples

### B-Tree Index

```typescript
class BTreeNode {
    keys: number[] = []
    children: BTreeNode[] = []
    leaf: boolean = true

    constructor(leaf: boolean = true) {
        this.leaf = leaf
    }
}

class BTreeIndex {
    private root: BTreeNode = new BTreeNode()
    private order: number

    constructor(order: number = 4) {
        this.order = order
    }

    insert(key: number): void {
        const root = this.root
        if (root.keys.length === this.order - 1) {
            const newRoot = new BTreeNode(false)
            newRoot.children.push(root)
            this.splitChild(newRoot, 0)
            this.root = newRoot
        }
        this.insertNonFull(this.root, key)
    }

    private insertNonFull(node: BTreeNode, key: number): void {
        let i = node.keys.length - 1
        if (node.leaf) {
            node.keys.push(0)
            while (i >= 0 && key < node.keys[i]) {
                node.keys[i + 1] = node.keys[i]
                i--
            }
            node.keys[i + 1] = key
        } else {
            while (i >= 0 && key < node.keys[i]) {
                i--
            }
            i++
            if (node.children[i].keys.length === this.order - 1) {
                this.splitChild(node, i)
                if (key > node.keys[i]) {
                    i++
                }
            }
            this.insertNonFull(node.children[i], key)
        }
    }

    private splitChild(parent: BTreeNode, index: number): void {
        const child = parent.children[index]
        const newChild = new BTreeNode(child.leaf)
        const mid = Math.floor((this.order - 1) / 2)
        const midKey = child.keys[mid]
        newChild.keys = child.keys.splice(mid + 1)
        child.keys = child.keys.splice(0, mid)
        if (!child.leaf) {
            newChild.children = child.children.splice(mid + 1)
        }
        parent.keys.splice(index, 0, midKey)
        parent.children.splice(index + 1, 0, newChild)
    }

    search(key: number): boolean {
        return this.searchNode(this.root, key)
    }

    private searchNode(node: BTreeNode, key: number): boolean {
        let i = 0
        while (i < node.keys.length && key > node.keys[i]) {
            i++
        }
        if (i < node.keys.length && key === node.keys[i]) {
            return true
        }
        if (node.leaf) return false
        return this.searchNode(node.children[i], key)
    }
}
```

### Query Planner

```typescript
interface TableStats {
    rowCount: number
    pageCount: number
    indexPages: Map<string, number>
    columnCardinality: Map<string, number>
}

class QueryPlanner {
    private stats: TableStats

    constructor(stats: TableStats) {
        this.stats = stats
    }

    planSeqScan(): number {
        return this.stats.pageCount * 0.1
    }

    planIndexScan(filterCardinality: number): number {
        const selectivity = filterCardinality / this.stats.rowCount
        const indexPages = this.stats.indexPages.get("primary") || 0
        return indexPages * 0.05 + this.stats.pageCount * selectivity
    }

    choosePlan(filterColumn: string, filterValue: string): string {
        const cardinality = this.stats.columnCardinality.get(filterColumn) || this.stats.rowCount
        const selectivity = 1 / cardinality
        const seqCost = this.planSeqScan()
        const idxCost = this.planIndexScan(cardinality)

        if (idxCost < seqCost) {
            return INDEX SCAN using  (cost:  vs seq: )
        }
        return SEQUENTIAL SCAN (cost:  vs index: )
    }
}
```

### MVCC Transaction Manager

```typescript
interface RowVersion {
    key: string
    value: string
    createTxId: number
    deleteTxId: number | null
}

class MVCCTransactionManager {
    private versions: RowVersion[] = []
    private nextTxId: number = 1

    beginTransaction(): number {
        return this.nextTxId++
    }

    write(txId: number, key: string, value: string): void {
        this.versions.push({
            key,
            value,
            createTxId: txId,
            deleteTxId: null,
        })
    }

    delete(txId: number, key: string): void {
        this.versions.push({
            key,
            value: "",
            createTxId: txId,
            deleteTxId: txId,
        })
    }

    read(txId: number, key: string): string | null {
        const visible = this.versions.filter(
            (v) => v.key === key && v.createTxId <= txId && (v.deleteTxId === null || v.deleteTxId > txId)
        )
        if (visible.length === 0) return null
        return visible[visible.length - 1].value
    }

    vacuum(): number {
        const before = this.versions.length
        this.versions = this.versions.filter((v) => v.deleteTxId === null)
        return before - this.versions.length
    }
}
```

### Raft Consensus Simulation

```typescript
type RaftState = "follower" | "candidate" | "leader"

class RaftNode {
    id: number
    state: RaftState = "follower"
    currentTerm: number = 0
    votedFor: number | null = null
    log: string[] = []
    commitIndex: number = -1
    peers: RaftNode[] = []

    constructor(id: number) {
        this.id = id
    }

    setPeers(peers: RaftNode[]): void {
        this.peers = peers
    }

    startElection(): void {
        this.state = "candidate"
        this.currentTerm++
        this.votedFor = this.id
        let votes = 1
        for (const peer of this.peers) {
            if (peer.requestVote(this.currentTerm, this.id)) {
                votes++
            }
        }
        if (votes > this.peers.length / 2) {
            this.state = "leader"
        }
    }

    requestVote(term: number, candidateId: number): boolean {
        if (term < this.currentTerm) return false
        if (this.votedFor === null || this.votedFor === candidateId) {
            this.currentTerm = term
            this.votedFor = candidateId
            return true
        }
        return false
    }

    appendEntries(term: number, entries: string[]): boolean {
        if (term < this.currentTerm) return false
        this.currentTerm = term
        this.log.push(...entries)
        return true
    }

    replicate(entry: string): boolean {
        if (this.state !== "leader") return false
        let acks = 1
        for (const peer of this.peers) {
            if (peer.appendEntries(this.currentTerm, [entry])) {
                acks++
            }
        }
        if (acks > this.peers.length / 2) {
            this.log.push(entry)
            this.commitIndex = this.log.length - 1
            return true
        }
        return false
    }
}
```

### Isolation Level Anomalies

Each isolation level prevents a subset of anomalies:

- Dirty read: reading uncommitted data from another transaction. Prevented by Read Committed and above
- Non-repeatable read: same row read twice returns different values (row updated by concurrent transaction). Prevented by Repeatable Read and above
- Phantom read: same query returns different rows (rows inserted by concurrent transaction). Requires Serializable for prevention
- Serialization anomaly: result of concurrent execution differs from any serial execution. Only Serializable prevents this

PostgreSQL default is Read Committed. Oracle and SQL Server default to Read Committed. MySQL InnoDB defaults to Repeatable Read.

### Serialization Anomaly Example

Write-skew: two transactions read overlapping data, write different values, and neither observes a conflict. T1 reads A and B, writes A=0. T2 reads A and.
B, writes B=0. If constraint is A+B>0, each transaction individually sees the constraint satisfied, but after both commit A+B=0 violates it. Serializable isolation prevents this via predicate locking or.
SSI (serializable snapshot isolation).

### Replication Topologies

- Single leader: one node accepts writes, replicates to followers. Simple but leader is a single point of failure
- Multi-leader: multiple nodes accept writes, replicate to each other. Requires conflict resolution. Used in geo-distributed deployments (CouchDB, MySQL Group Replication)
- Leaderless (Dynamo-style): any node accepts writes. Read repair and hinted handoff ensure eventual consistency

### CAP Theorem Tradeoffs

Consistency (every read returns the latest write), Availability (every request receives a response), Partition tolerance (system continues despite network failures). Choose two:

- CP systems (HBase, MongoDB default): prefer consistency over availability during partitions
- AP systems (Cassandra, DynamoDB): prefer availability, accept eventual consistency
- CA systems: cannot exist in practice since partitions are inevitable in distributed systems

### Practical Sharding Strategies

```typescript
class HashShardRouter {
    private shards: Map<number, { host: string; port: number }> = new Map()

    addShard(shardId: number, host: string, port: number): void {
        this.shards.set(shardId, { host, port })
    }

    getShardForKey(key: string): { host: string; port: number } {
        const hash = key.split("").reduce((acc, c) => acc * 31 + c.charCodeAt(0), 0)
        const shardId = Math.abs(hash) % this.shards.size
        return this.shards.get(shardId)!
    }
}

class ConsistentHashRing {
    private ring: Map<number, { host: string; port: number }> = new Map()
    private virtualNodes: number = 100

    addNode(host: string, port: number): void {
        for (let i = 0; i < this.virtualNodes; i++) {
            const hash = this.hash(`${host}:${port}:${i}`)
            this.ring.set(hash, { host, port })
        }
    }

    getNode(key: string): { host: string; port: number } {
        const hash = this.hash(key)
        const keys = Array.from(this.ring.keys()).sort((a, b) => a - b)
        const target = keys.find((k) => k >= hash) || keys[0]
        return this.ring.get(target)!
    }

    private hash(key: string): number {
        return Math.abs(key.split("").reduce((acc, c) => acc * 31 + c.charCodeAt(0), 0))
    }

    removeNode(host: string, port: number): void {
        for (let i = 0; i < this.virtualNodes; i++) {
            const hash = this.hash(`${host}:${port}:${i}`)
            this.ring.delete(hash)
        }
    }
}
```

## Summary

Database internals knowledge is essential for building scalable AI infrastructure. B-trees power transactional databases with fast point queries. LSM-trees power write-heavy workloads including many vector databases. MVCC gives every transaction a consistent snapshot — crucial for reproducible ML training. Raft enables reliable consensus for distributed metadata stores.

## Practical Takeaways

- B-tree databases (PostgreSQL) for feature stores requiring consistent point lookups
- LSM-tree databases (Cassandra, RocksDB) for high-volume write workloads like event logging
- Set isolation level to REPEATABLE READ for ML training data snapshots
- Monitor vacuum/compaction in MVCC databases under heavy write workloads
- Use consistent hashing for resharding feature stores without full rebalance
- Consider FoundationDB or etcd (powered by Raft) for critical consensus needs
- Index selectivity (cardinality/rowCount below 10%) determines whether an index helps

## Chapter Quiz

1. What is the main advantage of LSM-trees over B-trees?
   - A) Faster point reads
   - B) Sequential writes with lower write amplification
   - C) Support for transactions
   - D) Better range scan performance
   // correct: B

2. A covering index is one that:
   - A) Indexes all columns in the table
   - B) Includes all columns needed by the query, avoiding table access
   - C) Uses hash-based lookup
   - D) Covers only primary key columns
   // correct: B

3. In MVCC, a snapshot isolation transaction sees:
   - A) All changes from committed transactions
   - B) Data as of the transaction's start time
   - C) The latest version of each row
   - D) Only its own changes
   // correct: B

4. Raft commits an entry when:
   - A) The leader stores it
   - B) A majority of nodes acknowledge it
   - C) All nodes acknowledge it
   - D) The client confirms receipt
   // correct: B

5. What isolation level prevents phantom reads?
   - A) Read Committed
   - B) Repeatable Read
   - C) Serializable
   - D) Read Uncommitted
   // correct: C

## Exercises

1. Implement a bloom filter for LSM-tree SSTable lookups and measure the false positive rate.
2. Extend the BTreeIndex to support range scan (return all keys between low and high).
3. Build a cost-based query planner that chooses between hash join and nested loop join given table sizes and sort status.
4. Simulate a Raft cluster of 5 nodes with a random network partition and verify availability and consistency.

## Common Mistakes

1. Choosing the wrong index type (B-tree vs hash vs LSM) for the query pattern
2. Not understanding transaction isolation levels and their impact on concurrency
3. Ignoring write amplification in LSM-trees for write-heavy AI workloads
4. Over-normalizing schema for AI feature stores that need fast reads
5. Not considering replication lag in distributed vector databases

## Revision Notes

- **B-Tree vs LSM-Tree**: B-tree for reads, LSM-tree for writes; both used in vector databases
- **ACID Properties**: Atomicity, Consistency, Isolation, Durability — foundation of reliable transactions
- **CAP Theorem**: Consistency, Availability, Partition tolerance — choose two; most AI systems choose AP
- **Indexing**: B-tree, hash, LSM-tree — choose based on read/write ratio and query patterns
- **Query Planning**: Cost-based optimization chooses between join algorithms and scan orders
- **Replication**: Leader-follower for reads, multi-leader for writes, Raft/Paxos for consensus
- **Vector Database Internals**: HNSW, IVF, PQ — approximate nearest neighbor search structures
