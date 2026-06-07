# DAY 28: DISTRIBUTED SYSTEMS - QUICK REFERENCE GUIDE

**Last Updated:** December 3, 2025  
**Purpose:** Fast lookup for interviews and practice

---

## 🎯 ESSENTIAL ALGORITHMS CHEAT SHEET

### Raft Consensus

```java
// States
FOLLOWER → (timeout) → CANDIDATE → (majority votes) → LEADER

// Election
- Increment term
- Vote for self
- Request votes from peers
- Win with n/2 + 1 votes

// Replication
- Client → Leader
- Leader → Followers (AppendEntries)
- Wait for majority
- Commit to state machine

// Time: O(n) messages per operation
// Fault Tolerance: f failures in 2f+1 nodes
```

### Vector Clocks

```java
// Structure
Map<NodeId, Integer> clock;

// Rules
Local event:     clock[self]++
Send message:    clock[self]++, attach clock
Receive message: merge(max), then clock[self]++

// Comparison
VC1 < VC2: All VC1[i] ≤ VC2[i] AND some VC1[i] < VC2[i]
VC1 || VC2: Some VC1[i] > VC2[i] AND some VC1[i] < VC2[i]

// Complexity: O(n) update, O(n) compare
```

### Consistent Hashing

```java
// Hash ring: TreeMap<Long, String>
// Add server: hash(server:vnode_id) → ring
// Find server: ceiling(hash(key)) or first

// Virtual nodes: 100-200 per physical server
// Lookup: O(log V) where V = virtual nodes
// Redistribution: K/(N+1) keys on add/remove
```

### Quorum Replication

```java
// Configuration
N = total replicas
W = write quorum
R = read quorum

// Strong consistency: W + R > N
Example: N=3, W=2, R=2 (overlap guaranteed)

// High availability: W + R ≤ N
Example: N=3, W=1, R=1 (faster, eventually consistent)

// Fault tolerance
- Write: N - W failures
- Read: N - R failures
```

### Two-Phase Commit

```java
// Phase 1: Prepare
Coordinator → Participants: PREPARE
Participants → Coordinator: YES/NO

// Phase 2: Commit/Abort
If all YES:
  Coordinator → Participants: COMMIT
Else:
  Coordinator → Participants: ABORT

// Problem: Blocking if coordinator crashes
// Time: 2 × RTT
// Messages: O(n)
```

### Saga Pattern

```java
// Structure
List<SagaStep> steps;
class SagaStep {
    Supplier<Boolean> action;
    Consumer<Void> compensation;
}

// Execution
1. Execute steps sequentially
2. If failure → Compensate previous steps in reverse
3. Eventual consistency

// No locks, high availability
// Use for: Long-running transactions
```

### Gossip Protocol

```java
// Round
1. Select random peers (fanout = 2-3)
2. Send local state + version
3. Receive peer state
4. Merge (take max version)
5. Repeat every 100ms - 1s

// Convergence: O(log n) rounds
// Messages: O(n log n) total
// Use for: Cluster membership, failure detection
```

### CRDTs

```java
// G-Counter (Grow-Only)
Map<NodeId, Integer> counts;
value() = sum(counts.values())
merge(other) = max(counts[i], other.counts[i]) for all i

// PN-Counter
GCounter increments;
GCounter decrements;
value() = increments.value() - decrements.value()

// G-Set (Grow-Only Set)
Set<T> elements;
add(e) = elements.add(e)
merge(other) = elements.union(other.elements)

// Properties: Commutative, Idempotent, Associative
```

### Merkle Tree

```java
// Build
1. Hash each data item (leaf)
2. Hash pairs recursively (internal)
3. Root = hash of entire dataset

// Sync
1. Compare root hashes
2. If different, recursively compare children
3. Sync only differing subtrees

// Comparison: O(log n) vs O(n)
// Use for: Anti-entropy repair
```

### Write-Ahead Log

```java
// Write path
1. Append to log (fsync)
2. Apply to memory
3. Periodic checkpoint

// Recovery
1. Find last checkpoint
2. Replay log entries after checkpoint
3. Restore state

// Checkpoint = snapshot + LSN
// Truncate log before checkpoint
```

---

## 📊 COMPLEXITY COMPARISON TABLE

| Algorithm | Time | Space | Messages | Fault Tolerance |
|-----------|------|-------|----------|----------------|
| Raft Election | O(n) | O(log) | O(n²) | f in 2f+1 |
| Raft Replication | O(n) | O(log) | O(n) | f in 2f+1 |
| Vector Clock Update | O(n) | O(n) | - | - |
| Consistent Hash Lookup | O(log V) | O(V) | - | - |
| Quorum Write | O(W) | - | O(W) | N-W |
| Quorum Read | O(R) | - | O(R) | N-R |
| 2PC | O(n) | - | O(n) | 0 (blocking) |
| Saga | O(n) | - | O(n) | High |
| Gossip Round | O(f) | - | O(f) | High |
| CRDT Merge | O(n) | O(n) | - | High |
| Merkle Sync | O(log n) | O(n) | O(log n) | - |
| WAL Write | O(1) | O(log) | - | - |

---

## 🔧 CONFIGURATION PATTERNS

### Cassandra Consistency Levels

```java
// Write
EACH_QUORUM  // Local quorum + remote quorums
LOCAL_QUORUM // Quorum in local DC
QUORUM       // Quorum across all DCs
ONE          // Any one replica
ALL          // All replicas

// Read
LOCAL_QUORUM // Quorum in local DC
QUORUM       // Quorum across all
ONE          // Any replica (fastest, may be stale)
```

### DynamoDB Consistency

```java
// Reads
Eventually Consistent: Fast, may be stale
Strongly Consistent:   Latest, higher latency

// Writes
W=N (write to all replicas asynchronously)

// Configuration
N = 3 replicas
R = 1 (eventual) or R = majority (strong)
```

### MongoDB Replica Set

```java
// Write Concern
w: 1          // Primary only
w: "majority" // Majority ack
w: 3          // Wait for 3 replicas

// Read Preference
primary          // Only from primary
primaryPreferred // Primary first, then secondary
secondary        // Only from secondary
```

---

## 🎨 DESIGN PATTERNS

### Pattern Selection Guide

| Requirement | Pattern |
|-------------|---------|
| Strong consistency | Raft, Paxos, 2PC |
| High availability | Gossip, Leaderless, Saga |
| Partition data | Consistent Hashing |
| Conflict resolution | Vector Clocks, CRDTs |
| Durability | WAL, Quorum |
| Coordination | Leader Election, Distributed Lock |
| Eventual consistency | Gossip, Read-Repair |
| Efficient sync | Merkle Tree |
| Long transactions | Saga Pattern |
| Causality tracking | Vector Clocks, Lamport |

---

## 🚨 FAILURE SCENARIOS

### Network Partition

```
Scenario: [Node A, B] | [Node C, D, E]

CP System (Raft):
- Minority (A,B) cannot commit
- Majority (C,D,E) elects new leader
- System available on majority side

AP System (Cassandra):
- Both sides accept writes
- Conflicts resolved via LWW or version vectors
- Eventually consistent after partition heals
```

### Coordinator Failure (2PC)

```
State: Participants voted YES, waiting for decision
Coordinator crashes
Result: BLOCKED (participants hold locks)

Solution:
- Timeout and abort (lose availability)
- New coordinator election (complex)
- Use 3PC (adds complexity)
- Use Saga (no locks)
```

### Split-Brain

```
Problem: Both sides think they are the leader

Solution 1: Quorum
- Need majority for leadership
- At most one side has majority

Solution 2: Fencing Tokens
- Monotonically increasing generation number
- Reject operations from old leader

Solution 3: ZooKeeper/etcd
- External coordination service
```

---

## 💡 INTERVIEW CODE TEMPLATES

### Distributed Lock

```java
class DistributedLock {
    private Map<String, LockInfo> locks = new ConcurrentHashMap<>();
    
    public boolean tryLock(String key, String owner, long ttl) {
        LockInfo current = locks.get(key);
        if (current == null || current.isExpired()) {
            locks.put(key, new LockInfo(owner, 
                System.currentTimeMillis() + ttl));
            return true;
        }
        return false;
    }
    
    public void unlock(String key, String owner) {
        locks.compute(key, (k, v) -> 
            v != null && v.owner.equals(owner) ? null : v);
    }
}
```

### Leader Election (Simplified)

```java
class LeaderElection {
    private volatile boolean isLeader = false;
    private int nodeId;
    private List<Node> peers;
    
    public void startElection() {
        int votes = 1; // Vote for self
        for (Node peer : peers) {
            if (peer.getId() < nodeId) {
                // Higher ID nodes don't respond
                if (peer.requestVote(nodeId)) votes++;
            }
        }
        
        if (votes > peers.size() / 2) {
            becomeLeader();
        }
    }
    
    private void becomeLeader() {
        isLeader = true;
        sendHeartbeats();
    }
}
```

### Quorum Read

```java
class QuorumRead {
    public Object read(String key, int R, List<Replica> replicas) {
        // Read from R replicas in parallel
        List<CompletableFuture<Versioned<Object>>> futures = 
            replicas.stream()
                .limit(R)
                .map(r -> CompletableFuture.supplyAsync(() -> 
                    r.read(key)))
                .collect(Collectors.toList());
        
        // Wait for R responses
        List<Versioned<Object>> values = futures.stream()
            .map(CompletableFuture::join)
            .collect(Collectors.toList());
        
        // Return latest version
        return values.stream()
            .max(Comparator.comparing(Versioned::getVersion))
            .get()
            .getValue();
    }
}
```

### Vector Clock Merge

```java
class VectorClock {
    private Map<String, Integer> clock = new HashMap<>();
    
    public void merge(VectorClock other) {
        for (Map.Entry<String, Integer> entry : other.clock.entrySet()) {
            clock.merge(entry.getKey(), entry.getValue(), Math::max);
        }
    }
    
    public boolean happensBefore(VectorClock other) {
        boolean strictlyLess = false;
        Set<String> allNodes = new HashSet<>();
        allNodes.addAll(clock.keySet());
        allNodes.addAll(other.clock.keySet());
        
        for (String node : allNodes) {
            int thisTime = clock.getOrDefault(node, 0);
            int otherTime = other.clock.getOrDefault(node, 0);
            if (thisTime > otherTime) return false;
            if (thisTime < otherTime) strictlyLess = true;
        }
        return strictlyLess;
    }
}
```

### Consistent Hashing

```java
class ConsistentHash {
    private TreeMap<Long, String> ring = new TreeMap<>();
    private int virtualNodes = 150;
    
    public void addServer(String server) {
        for (int i = 0; i < virtualNodes; i++) {
            long hash = hash(server + ":" + i);
            ring.put(hash, server);
        }
    }
    
    public String getServer(String key) {
        long hash = hash(key);
        Map.Entry<Long, String> entry = ring.ceilingEntry(hash);
        return entry != null ? entry.getValue() : ring.firstEntry().getValue();
    }
    
    private long hash(String key) {
        return MurmurHash.hash64(key);
    }
}
```

---

## 📈 DECISION TREES

### Choose Consistency Level

```
START
  ↓
Is correctness critical?
  ├─ YES → Need strong consistency
  │         ↓
  │    Single datacenter?
  │      ├─ YES → Raft/Paxos (CP)
  │      └─ NO → Spanner (global consistency)
  │
  └─ NO → Can tolerate stale reads?
            ├─ YES → Eventual consistency (AP)
            │         Example: DynamoDB, Cassandra
            └─ NO → Session consistency
                      Example: MongoDB, Cosmos DB
```

### Choose Replication Strategy

```
START
  ↓
How many datacenters?
  ├─ One → Single-leader replication
  │         Example: PostgreSQL, MySQL
  │
  ├─ Multiple → Multi-leader or Leaderless
  │              ↓
  │         Can handle conflicts?
  │           ├─ YES → Multi-leader
  │           │         Example: CouchDB
  │           └─ NO → Leaderless with LWW
  │                     Example: Cassandra
  │
  └─ Many (global) → Leaderless with quorum
                       Example: DynamoDB
```

### Choose Transaction Model

```
START
  ↓
Transaction duration?
  ├─ Short (<100ms)
  │   ↓
  │ Need atomicity across services?
  │   ├─ YES → 2PC (if same DC)
  │   └─ NO → Local transactions
  │
  └─ Long (seconds/minutes)
      ↓
    Can use compensations?
      ├─ YES → Saga pattern
      └─ NO → Event sourcing + CQRS
```

---

## 🎯 COMMON INTERVIEW QUESTIONS

### Q: "Design a distributed cache"

**Key Points:**
- Partition: Consistent hashing
- Replication: Master-slave or leaderless
- Eviction: LRU per node
- Consistency: Eventual or strong (quorum)
- Failure: Read-repair, hinted handoff

**Architecture:**
```
Client → [Cache Nodes] (consistent hash)
         ↓
      Replication (N=3)
         ↓
      Backend DB
```

### Q: "How does Cassandra achieve high availability?"

**Answer:**
- Leaderless replication
- Tunable consistency (ONE to ALL)
- Quorum: W+R>N for consistency
- Gossip protocol for membership
- Hinted handoff for temporary failures
- Read-repair for consistency
- Merkle trees for anti-entropy

### Q: "Explain the trade-off between consistency and availability"

**Answer:**
- CAP theorem: Can't have both + partition tolerance
- CP: Strong consistency, may be unavailable
  - Example: etcd, ZooKeeper
  - Use when: Banking, inventory
- AP: High availability, eventual consistency
  - Example: DynamoDB, Cassandra
  - Use when: Social media, caching

### Q: "How to detect failures in distributed systems?"

**Answer:**
1. **Heartbeat:** Periodic ping, timeout = failure
2. **Phi Accrual:** Statistical failure detection
3. **Gossip:** Piggyback on gossip messages
4. **Application-level:** Health checks, metrics

**Trade-offs:**
- Fast detection → False positives
- Slow detection → Longer unavailability

### Q: "What is split-brain and how to prevent it?"

**Answer:**
**Problem:** Network partition creates two leaders

**Solutions:**
1. **Quorum:** Require majority for leadership
2. **Fencing Tokens:** Generation numbers, reject old
3. **External Coordination:** ZooKeeper, etcd
4. **STONITH:** "Shoot The Other Node In The Head"

**Example:**
```
[Leader A] | [Leader B] ← Split brain!

Solution: Quorum
- Only majority partition can have leader
- 3 nodes: [A] (1 node) | [B, C] (2 nodes)
- B elected leader (has majority)
- A cannot be leader (minority)
```

---

## 📚 MUST-KNOW REAL SYSTEMS

### DynamoDB
- **Type:** AP (tunable)
- **Replication:** Quorum (N=3, W=1-3, R=1-3)
- **Partitioning:** Consistent hashing
- **Consistency:** Eventual or strong reads
- **Conflict Resolution:** Vector clocks → LWW

### Cassandra
- **Type:** AP
- **Replication:** Leaderless, tunable
- **Partitioning:** Consistent hashing with vnodes
- **Consistency:** ONE, QUORUM, ALL
- **Anti-entropy:** Gossip, read-repair, Merkle trees

### etcd
- **Type:** CP
- **Consensus:** Raft
- **Use:** Kubernetes coordination
- **Features:** Watches, TTL, transactions
- **Guarantees:** Linearizability

### MongoDB
- **Type:** CP (default)
- **Replication:** Single-leader (primary-secondary)
- **Consistency:** Strong on primary, eventual on secondary
- **Failover:** Automatic election
- **Sharding:** Range or hash-based

### Kafka
- **Type:** CP (within partition)
- **Replication:** Leader-follower
- **Ordering:** Per partition
- **Durability:** Replicated log
- **Coordination:** ZooKeeper (old) or KRaft (new)

### ZooKeeper
- **Type:** CP
- **Consensus:** ZAB (similar to Raft)
- **Use:** Coordination, configuration
- **Guarantees:** Sequential consistency
- **Features:** Watches, ephemeral nodes

---

## ⚡ PERFORMANCE TIPS

### Reduce Latency
- Read from nearest replica
- Use caching layers
- Async replication
- Batch operations
- Connection pooling

### Increase Throughput
- Horizontal scaling (more nodes)
- Partitioning (parallel processing)
- Pipelining requests
- Compress data
- Optimize serialization

### Improve Availability
- Replication (more replicas)
- Multi-datacenter deployment
- Graceful degradation
- Circuit breakers
- Retry with backoff

### Ensure Consistency
- Quorum reads/writes
- Read-repair
- Anti-entropy processes
- Conflict resolution (CRDTs)
- Version vectors

---

## 🔍 DEBUGGING CHECKLIST

When distributed system fails:

- [ ] Check network connectivity
- [ ] Verify all nodes are running
- [ ] Check clock synchronization
- [ ] Look for split-brain
- [ ] Examine logs for errors
- [ ] Monitor resource usage (CPU, memory, disk)
- [ ] Check quorum status
- [ ] Verify replication lag
- [ ] Look for conflicts/inconsistencies
- [ ] Test failure detection
- [ ] Check configuration (N, W, R)
- [ ] Examine recent deployments/changes

---

## 📖 QUICK DEFINITIONS

- **Consensus:** Agreement among distributed nodes
- **Quorum:** Minimum votes for decision
- **Partition:** Network split isolating nodes
- **Linearizability:** Strongest consistency (atomic)
- **Eventual Consistency:** Converges given time
- **Vector Clock:** Causality tracking structure
- **Merkle Tree:** Hash tree for efficient comparison
- **CRDT:** Conflict-free replicated data type
- **WAL:** Write-ahead log for durability
- **Gossip:** Epidemic info dissemination
- **Saga:** Long-running distributed transaction
- **2PC:** Two-phase commit protocol
- **Hinted Handoff:** Temporary write storage
- **Read-Repair:** Fix during read operation
- **Anti-Entropy:** Background repair process

---

**Use this guide for:**
- Quick lookup during interviews
- Reference while coding
- Refreshing concepts
- Making design decisions

**Total patterns:** 14 comprehensive implementations  
**Total problems:** 70+ with solutions  
**Total interview Q&A:** 200+ questions

---

*Quick Reference for Day 28: Distributed Systems*  
*Part of 90-Day Placement Preparation Program*
