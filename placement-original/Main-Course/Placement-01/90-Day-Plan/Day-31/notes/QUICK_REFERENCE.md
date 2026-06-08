# DAY 31: QUICK REFERENCE GUIDE
## Distributed Systems Patterns Cheat Sheet

---

## 🔒 DISTRIBUTED LOCKING

### RedLock Algorithm
```java
// 1. Try acquire on N instances (N=5 recommended)
// 2. Acquire if: majority acquired AND time < TTL
// 3. Release all if quorum failed

class RedLock {
    boolean acquire(String resource, Duration ttl) {
        int quorum = instances.size() / 2 + 1;
        String token = UUID.randomUUID().toString();
        Instant start = Instant.now();
        
        int acquired = 0;
        for (LockInstance instance : instances) {
            if (instance.tryLock(resource, token, ttl)) {
                acquired++;
            }
        }
        
        Duration elapsed = Duration.between(start, Instant.now());
        return acquired >= quorum && elapsed.compareTo(ttl) < 0;
    }
}
```

**Parameters:**
- N = 5 instances (odd number)
- Quorum = N/2 + 1 = 3
- TTL = 5-30 seconds
- Timeout = 50-200ms per instance

**Use When:** Coordinating distributed jobs, preventing duplicate work

---

## 👑 LEADER ELECTION

### Bully Algorithm
```java
// Highest ID wins
class BullyElection {
    void startElection() {
        state = CANDIDATE;
        currentTerm++;
        votesReceived = 1; // Vote for self
        
        // Send to higher IDs
        for (Node node : cluster) {
            if (node.id > myId) {
                node.requestVote(currentTerm, myId);
            }
        }
        
        if (votesReceived >= majority) {
            becomeLeader();
        }
    }
}
```

**States:** FOLLOWER → CANDIDATE → LEADER

**Messages:**
- ELECTION: Request to higher IDs
- OK: Response from candidate
- COORDINATOR: Leader announcement

**Use When:** Single coordinator needed (Kafka controller, MongoDB primary)

---

## ⚖️ CONSENSUS ALGORITHMS

### Raft Consensus
```java
// Leader-based consensus
class Raft {
    // 1. LEADER ELECTION
    void startElection() {
        state = CANDIDATE;
        currentTerm++;
        votedFor = myId;
        resetElectionTimeout(); // 150-300ms random
        
        for (Node node : cluster) {
            node.requestVote(currentTerm, myId, lastLogIndex, lastLogTerm);
        }
    }
    
    // 2. LOG REPLICATION
    void appendEntries() {
        LogEntry entry = new LogEntry(currentTerm, command);
        log.add(entry);
        
        // Replicate to followers
        for (Node follower : followers) {
            follower.appendEntries(entries, commitIndex);
        }
        
        // Commit when majority replicated
        if (replicatedCount >= majority) {
            commitIndex++;
            applyToStateMachine(entry);
        }
    }
}
```

**RPCs:**
1. RequestVote: Election
2. AppendEntries: Replication + Heartbeat

**Timeouts:**
- Election: 150-300ms (randomized)
- Heartbeat: 50ms

**Use When:** Strong consistency needed (etcd, Consul)

---

### Two-Phase Commit (2PC)
```java
// Atomic distributed transactions
class TwoPhaseCommit {
    Decision execute() {
        // PHASE 1: PREPARE
        List<Vote> votes = participants.stream()
            .map(p -> p.prepare())
            .collect(Collectors.toList());
        
        boolean allYes = votes.stream().allMatch(v -> v == YES);
        
        // PHASE 2: COMMIT/ABORT
        if (allYes) {
            participants.forEach(p -> p.commit());
            return COMMIT;
        } else {
            participants.forEach(p -> p.abort());
            return ABORT;
        }
    }
}
```

**Phases:**
1. PREPARE: Can you commit?
2. COMMIT/ABORT: Decision

**Problem:** Blocking if coordinator fails

**Use When:** ACID transactions across databases (XA transactions)

---

## 🔄 CONSISTENT HASHING

### Basic Implementation
```java
class ConsistentHash {
    TreeMap<Integer, String> ring = new TreeMap<>();
    int VIRTUAL_NODES = 150;
    
    void addNode(String node) {
        for (int i = 0; i < VIRTUAL_NODES; i++) {
            int hash = hash(node + "#" + i);
            ring.put(hash, node);
        }
    }
    
    String getNode(String key) {
        int hash = hash(key);
        Map.Entry<Integer, String> entry = ring.ceilingEntry(hash);
        return (entry != null) ? entry.getValue() : ring.firstEntry().getValue();
    }
}
```

**Key Points:**
- Ring: [0, 2³²)
- Virtual Nodes: 150-256 per physical node
- Lookup: O(log N) with TreeMap
- Movement: K/N keys on add/remove

**Use When:** Distributing cache keys, database sharding

---

## 🕰️ VECTOR CLOCKS

### Causality Tracking
```java
class VectorClock {
    Map<String, Integer> clocks = new HashMap<>();
    
    void increment(String nodeId) {
        clocks.merge(nodeId, 1, Integer::sum);
    }
    
    void merge(VectorClock other) {
        for (Map.Entry<String, Integer> e : other.clocks.entrySet()) {
            clocks.merge(e.getKey(), e.getValue(), Math::max);
        }
    }
    
    boolean happenedBefore(VectorClock other) {
        boolean anyLess = false;
        for (String node : clocks.keySet()) {
            int mine = clocks.get(node);
            int theirs = other.clocks.getOrDefault(node, 0);
            if (mine > theirs) return false;
            if (mine < theirs) anyLess = true;
        }
        return anyLess;
    }
}
```

**Operations:**
- Local event: `increment(myId)`
- Send: Include clock in message
- Receive: `merge(msgClock)` then `increment(myId)`

**Comparisons:**
- A → B: A happened before B
- A || B: Concurrent (need conflict resolution)

**Use When:** Detecting conflicts (Dynamo, Riak)

---

## 📊 QUORUM REPLICATION

### Formula: W + R > N
```java
class QuorumReplication {
    int N = 5;  // Total replicas
    int W = 3;  // Write quorum
    int R = 3;  // Read quorum
    
    boolean write(String key, String value) {
        AtomicLong version = new AtomicLong(versionCounter.incrementAndGet());
        
        List<CompletableFuture<Boolean>> futures = replicas.stream()
            .map(r -> CompletableFuture.supplyAsync(() -> r.write(key, value, version)))
            .collect(Collectors.toList());
        
        int successCount = 0;
        for (CompletableFuture<Boolean> f : futures) {
            if (f.get(1, TimeUnit.SECONDS)) successCount++;
        }
        
        return successCount >= W;
    }
}
```

**Configurations:**

| N | W | R | Use Case |
|---|---|---|----------|
| 5 | 3 | 3 | Strong consistency |
| 5 | 2 | 4 | Read-heavy |
| 5 | 4 | 2 | Write-heavy |

**Guarantees:**
- W+R>N → Consistent reads
- Fault Tolerance: N-W write failures, N-R read failures

**Use When:** Tunable consistency (Cassandra, DynamoDB)

---

## 💬 GOSSIP PROTOCOL

### Epidemic Dissemination
```java
class Gossip {
    Map<String, Integer> data = new ConcurrentHashMap<>();
    
    void startGossip() {
        scheduler.scheduleAtFixedRate(() -> {
            Node peer = selectRandomPeer();
            Map<String, Integer> updates = new HashMap<>();
            
            // Send my updates
            for (Map.Entry<String, Integer> e : data.entrySet()) {
                int peerVersion = peer.getVersion(e.getKey());
                if (e.getValue() > peerVersion) {
                    updates.put(e.getKey(), e.getValue());
                }
            }
            peer.receiveGossip(updates);
            
            // Pull peer updates
            for (Map.Entry<String, Integer> e : peer.data.entrySet()) {
                if (e.getValue() > data.getOrDefault(e.getKey(), 0)) {
                    data.put(e.getKey(), e.getValue());
                }
            }
        }, 0, 100, TimeUnit.MILLISECONDS);
    }
}
```

**Properties:**
- Convergence: O(log N) rounds
- Message overhead: O(1) per node per round
- Fault tolerant: No single point of failure

**Use When:** Cluster membership (Cassandra), failure detection (Consul)

---

## 🔀 CRDTs

### G-Counter (Grow-Only)
```java
class GCounter {
    String replicaId;
    Map<String, Integer> counts = new HashMap<>();
    
    void increment() {
        counts.merge(replicaId, 1, Integer::sum);
    }
    
    int value() {
        return counts.values().stream().mapToInt(Integer::intValue).sum();
    }
    
    void merge(GCounter other) {
        for (Map.Entry<String, Integer> e : other.counts.entrySet()) {
            counts.merge(e.getKey(), e.getValue(), Math::max);
        }
    }
}
```

### PN-Counter (Can Increment/Decrement)
```java
class PNCounter {
    GCounter positive = new GCounter(replicaId);
    GCounter negative = new GCounter(replicaId);
    
    void increment() { positive.increment(); }
    void decrement() { negative.increment(); }
    int value() { return positive.value() - negative.value(); }
}
```

### LWW-Element-Set (Last-Write-Wins)
```java
class LWWSet<T> {
    Map<T, Long> addSet = new HashMap<>();
    Map<T, Long> removeSet = new HashMap<>();
    
    void add(T element) {
        addSet.put(element, System.currentTimeMillis());
    }
    
    void remove(T element) {
        removeSet.put(element, System.currentTimeMillis());
    }
    
    boolean contains(T element) {
        long addTime = addSet.getOrDefault(element, 0L);
        long removeTime = removeSet.getOrDefault(element, 0L);
        return addTime > removeTime;
    }
}
```

**Use When:** Automatic conflict resolution (Riak, Redis, Figma)

---

## 📐 COMPLEXITY CHEAT SHEET

| Operation | Time | Space | Notes |
|-----------|------|-------|-------|
| **RedLock** |
| Acquire | O(N) | O(K) | N=instances, K=locks |
| Release | O(N) | - | |
| **Bully Election** |
| Election | O(N²) | O(N) | Worst case |
| **Consistent Hash** |
| Lookup | O(log N) | O(N×V) | V=vnodes |
| Add/Remove | O(V log N) | - | |
| **Vector Clock** |
| Increment | O(1) | O(N) | N=nodes |
| Merge | O(N) | - | |
| Compare | O(N) | - | |
| **Raft** |
| Election | O(N) | O(L) | L=log size |
| Append | O(N) | - | Broadcast |
| **Quorum** |
| Write | O(W) | O(N×S) | W=quorum, S=data |
| Read | O(R) | - | R=quorum |
| **Gossip** |
| Converge | O(log N) rounds | O(S) | S=state |
| **CRDT** |
| Merge | O(S) | O(S) | S=state size |

---

## 🎯 DECISION GUIDE

### When to Use What?

**Need Strong Consistency?**
- ✅ Raft/Paxos consensus
- ✅ Quorum with W+R>N
- ✅ Two-Phase Commit (if < 100ms latency OK)
- ❌ Gossip (eventual only)
- ❌ Async replication

**Need High Availability?**
- ✅ Gossip protocol
- ✅ CRDTs
- ✅ Async replication
- ✅ AP system (Cassandra)
- ❌ Synchronous consensus
- ❌ 2PC (blocks on failure)

**Need Partition Tolerance?**
- ✅ Quorum replication
- ✅ Gossip
- ✅ CRDTs
- ✅ Consistent hashing
- ❌ 2PC

**Distributing Data?**
- ✅ Consistent hashing (cache, KV store)
- ✅ Range partitioning (time-series)
- ✅ Hash partitioning (uniform distribution)

**Coordinating Work?**
- ✅ Leader election (single coordinator)
- ✅ Distributed lock (mutual exclusion)
- ✅ Consensus (multiple decisions)

**Detecting Conflicts?**
- ✅ Vector clocks (general causality)
- ✅ Version numbers (single writer)
- ✅ Lamport timestamps (total order)

**Resolving Conflicts?**
- ✅ CRDTs (automatic)
- ✅ Last-write-wins (simple, loses data)
- ✅ Application logic (custom)
- ✅ Ask user (collaborative apps)

---

## 🚨 COMMON PITFALLS

### 1. Clock Skew
**Problem:** Nodes have different times
```java
// ❌ BAD: Using wall clock for ordering
long timestamp = System.currentTimeMillis();

// ✅ GOOD: Use logical clocks
VectorClock clock = new VectorClock();
clock.increment(myNodeId);
```

### 2. Split Brain
**Problem:** Multiple leaders exist
```java
// ❌ BAD: Simple leader flag
boolean isLeader = true;

// ✅ GOOD: Quorum-based leadership
boolean isLeader = votesReceived >= (clusterSize / 2 + 1);
```

### 3. Lost Updates
**Problem:** Concurrent writes overwrite
```java
// ❌ BAD: Direct write
data.put(key, newValue);

// ✅ GOOD: Version-based update
if (currentVersion == expectedVersion) {
    data.put(key, new VersionedValue(newValue, expectedVersion + 1));
}
```

### 4. Unbounded State Growth
**Problem:** CRDTs/Vector clocks grow forever
```java
// ✅ SOLUTION: Garbage collection
void removeOldTombstones() {
    long cutoff = System.currentTimeMillis() - RETENTION_PERIOD;
    removeSet.entrySet().removeIf(e -> e.getValue() < cutoff);
}
```

### 5. Network Timeouts
**Problem:** Indefinite blocking
```java
// ❌ BAD: No timeout
future.get();

// ✅ GOOD: Always timeout
future.get(1, TimeUnit.SECONDS);
```

---

## 🎓 INTERVIEW SHORTCUTS

### CAP Theorem (2 minutes)
"Can only guarantee 2 of: Consistency, Availability, Partition tolerance. Since partitions happen, choice is CP (strong consistency) or AP (eventual consistency). Banks choose CP, social media chooses AP."

### Consensus (3 minutes)
"Raft: Leader-based, easier to understand. Leader elected with majority votes, replicates log to followers, commits when majority replicated. Used in etcd, Consul."

### Consistent Hashing (2 minutes)
"Hash nodes and keys to ring [0, 2³²). Key goes to next node clockwise. When node added/removed, only K/N keys move vs all keys in traditional hashing. Virtual nodes (150-256 per physical) ensure even distribution."

### CRDTs (2 minutes)
"Data structures that automatically resolve conflicts. Replicas merge without coordination. G-Counter for increment-only, PN-Counter for +/-, LWW-Set for sets. Used in Riak, Redis."

### Vector Clocks (2 minutes)
"Track causality: each node has counter, increment on local event, merge (take max) on receive. Can determine if A→B (happened-before) or A||B (concurrent). Used for conflict detection."

---

## 📝 CODE TEMPLATES

### Template: Distributed Lock
```java
class DistributedLock {
    boolean acquire(String resource, Duration ttl);
    void release(String resource, String token);
}
```

### Template: Consensus
```java
class Consensus {
    void proposeValue(Object value);
    Object getChosenValue();
    void handleMessage(Message msg);
}
```

### Template: Replication
```java
class Replication {
    boolean write(String key, Object value, int quorum);
    Object read(String key, int quorum);
}
```

### Template: CRDT
```java
class CRDT<T> {
    void update(T value);
    T query();
    void merge(CRDT<T> other);
}
```

---

## 🔍 DEBUGGING CHECKLIST

- [ ] Check clock skew (use NTP)
- [ ] Verify quorum sizes (W+R>N)
- [ ] Monitor replication lag
- [ ] Test network partitions
- [ ] Validate timeout configurations
- [ ] Check for split-brain
- [ ] Verify fencing tokens used
- [ ] Monitor resource cleanup (locks, tombstones)
- [ ] Check idempotency of operations
- [ ] Validate retry logic with backoff

---

## 🏆 PRODUCTION CHECKLIST

- [ ] Consensus: Use proven algorithm (Raft/Paxos)
- [ ] Clocks: Never trust wall clocks for ordering
- [ ] Timeouts: Always set on network operations
- [ ] Retries: Exponential backoff + jitter
- [ ] Idempotency: Design operations to be idempotent
- [ ] Monitoring: Track replication lag, leader changes
- [ ] Testing: Chaos engineering, partition testing
- [ ] Documentation: Document consistency guarantees
- [ ] Alerting: Alert on split-brain, replication issues
- [ ] Capacity: Plan for 2x expected load

---

*Quick Reference Guide - Day 31*
*Print this for interviews and daily reference*
