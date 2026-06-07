# Week 6: Distributed Systems - Complete Content

> **Master distributed consensus, CAP theorem, consistency patterns, and distributed transactions**

## 📚 Week Overview

**Duration**: 7 days  
**Difficulty**: Advanced  
**Prerequisites**: Weeks 1-5 completed

### Learning Objectives

By the end of this week, you will:
- ✅ Understand CAP theorem deeply
- ✅ Master distributed consensus (Raft, Paxos)
- ✅ Implement consistency patterns
- ✅ Handle distributed transactions
- ✅ Build distributed locks
- ✅ Master clock synchronization
- ✅ Implement conflict resolution

---

## 🎯 Day 1: CAP Theorem Deep Dive

### 1.1 Understanding CAP Theorem

```
CAP Theorem: Choose 2 of 3

C - Consistency: All nodes see same data at same time
A - Availability: System always responds to requests
P - Partition Tolerance: System works despite network failures

Real-World Trade-offs:
┌─────────────────────────────────────────┐
│  CA Systems (No Partition Tolerance)    │
│  - Traditional RDBMS (single node)      │
│  - Not realistic in distributed systems │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  CP Systems (Consistency + Partition)   │
│  - MongoDB, HBase, Redis Cluster        │
│  - Sacrifice: Availability during split │
│  - Use: Financial, Critical data        │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  AP Systems (Availability + Partition)  │
│  - Cassandra, DynamoDB, Riak           │
│  - Sacrifice: Temporary inconsistency   │
│  - Use: Social media, Analytics         │
└─────────────────────────────────────────┘
```

### 1.2 Consistency Models

```python
from enum import Enum
from typing import Dict, Any
import asyncio
import time

class ConsistencyLevel(Enum):
    STRONG = "strong"  # Read always returns latest write
    EVENTUAL = "eventual"  # Read returns latest eventually
    CAUSAL = "causal"  # Causally related operations ordered
    READ_YOUR_WRITES = "read_your_writes"  # Session consistency

class DistributedStore:
    """Distributed key-value store with different consistency levels"""
    
    def __init__(self, num_replicas: int = 3):
        self.replicas = [{"data": {}} for _ in range(num_replicas)]
        self.version_vectors = [0] * num_replicas
    
    async def write(
        self,
        key: str,
        value: Any,
        consistency: ConsistencyLevel = ConsistencyLevel.EVENTUAL
    ) -> bool:
        """Write with specified consistency"""
        
        if consistency == ConsistencyLevel.STRONG:
            # Write to ALL replicas synchronously
            tasks = []
            for i, replica in enumerate(self.replicas):
                tasks.append(self._write_to_replica(i, key, value))
            
            results = await asyncio.gather(*tasks)
            success = all(results)
            
            if success:
                print(f"✅ STRONG: Wrote '{key}' to ALL {len(self.replicas)} replicas")
            return success
        
        elif consistency == ConsistencyLevel.EVENTUAL:
            # Write to one replica, async propagate
            await self._write_to_replica(0, key, value)
            print(f"✅ EVENTUAL: Wrote '{key}' to primary, propagating...")
            
            # Async replication
            asyncio.create_task(self._replicate_async(key, value))
            return True
    
    async def read(
        self,
        key: str,
        consistency: ConsistencyLevel = ConsistencyLevel.EVENTUAL
    ) -> Any:
        """Read with specified consistency"""
        
        if consistency == ConsistencyLevel.STRONG:
            # Read from quorum (majority)
            quorum_size = len(self.replicas) // 2 + 1
            values = []
            
            for i in range(quorum_size):
                value = self.replicas[i]["data"].get(key)
                values.append((value, self.version_vectors[i]))
            
            # Return latest version
            latest = max(values, key=lambda x: x[1])
            print(f"🔍 STRONG: Read '{key}' from quorum")
            return latest[0]
        
        elif consistency == ConsistencyLevel.EVENTUAL:
            # Read from any replica
            value = self.replicas[0]["data"].get(key)
            print(f"🔍 EVENTUAL: Read '{key}' from primary")
            return value
    
    async def _write_to_replica(self, replica_id: int, key: str, value: Any):
        """Write to specific replica"""
        await asyncio.sleep(0.01)  # Simulate network latency
        self.replicas[replica_id]["data"][key] = value
        self.version_vectors[replica_id] += 1
        return True
    
    async def _replicate_async(self, key: str, value: Any):
        """Async replication to other replicas"""
        await asyncio.sleep(0.1)  # Simulate replication delay
        for i in range(1, len(self.replicas)):
            await self._write_to_replica(i, key, value)
        print(f"   ✅ Replicated '{key}' to all replicas")

# Demo: Consistency trade-offs
async def demo_consistency():
    store = DistributedStore(num_replicas=3)
    
    print("=== STRONG Consistency ===")
    await store.write("user:1", {"name": "Alice"}, ConsistencyLevel.STRONG)
    await asyncio.sleep(0.1)
    value = await store.read("user:1", ConsistencyLevel.STRONG)
    print(f"   Value: {value}\n")
    
    print("=== EVENTUAL Consistency ===")
    await store.write("user:2", {"name": "Bob"}, ConsistencyLevel.EVENTUAL)
    
    # Immediate read (might not see latest)
    value = await store.read("user:2", ConsistencyLevel.EVENTUAL)
    print(f"   Immediate read: {value}")
    
    # Wait for replication
    await asyncio.sleep(0.2)
    value = await store.read("user:2", ConsistencyLevel.EVENTUAL)
    print(f"   After replication: {value}")

# asyncio.run(demo_consistency())
```

---

## 🎯 Day 2: Distributed Consensus (Raft Algorithm)

### 2.1 Raft Consensus

```python
from enum import Enum
from dataclasses import dataclass
from typing import List, Optional
import random

class NodeState(Enum):
    FOLLOWER = "follower"
    CANDIDATE = "candidate"
    LEADER = "leader"

@dataclass
class LogEntry:
    term: int
    command: str
    index: int

class RaftNode:
    """Simplified Raft consensus node"""
    
    def __init__(self, node_id: int, cluster_size: int):
        self.node_id = node_id
        self.cluster_size = cluster_size
        self.state = NodeState.FOLLOWER
        
        # Persistent state
        self.current_term = 0
        self.voted_for: Optional[int] = None
        self.log: List[LogEntry] = []
        
        # Volatile state
        self.commit_index = 0
        self.last_applied = 0
        
        # Leader state
        self.next_index: Dict[int, int] = {}
        self.match_index: Dict[int, int] = {}
        
        # Election
        self.votes_received = 0
        self.election_timeout = random.uniform(150, 300)  # ms
        self.heartbeat_interval = 50  # ms
    
    async def request_vote(self, term: int, candidate_id: int, 
                          last_log_index: int, last_log_term: int) -> bool:
        """Handle RequestVote RPC"""
        # If term is old, reject
        if term < self.current_term:
            return False
        
        # Update term if newer
        if term > self.current_term:
            self.current_term = term
            self.voted_for = None
            self.state = NodeState.FOLLOWER
        
        # Vote logic
        if self.voted_for is None or self.voted_for == candidate_id:
            # Check log is up-to-date
            my_last_log_term = self.log[-1].term if self.log else 0
            my_last_log_index = len(self.log) - 1
            
            log_ok = (last_log_term > my_last_log_term or
                     (last_log_term == my_last_log_term and 
                      last_log_index >= my_last_log_index))
            
            if log_ok:
                self.voted_for = candidate_id
                print(f"   Node {self.node_id} voted for Node {candidate_id}")
                return True
        
        return False
    
    async def start_election(self):
        """Start leader election"""
        self.state = NodeState.CANDIDATE
        self.current_term += 1
        self.voted_for = self.node_id
        self.votes_received = 1  # Vote for self
        
        print(f"\n🗳️  Node {self.node_id} starting election (term {self.current_term})")
        
        # Request votes from other nodes (simulated)
        # In real implementation, send RequestVote RPC to all nodes
        votes_needed = (self.cluster_size // 2) + 1
        
        if self.votes_received >= votes_needed:
            await self.become_leader()
    
    async def become_leader(self):
        """Transition to leader"""
        self.state = NodeState.LEADER
        print(f"👑 Node {self.node_id} became LEADER (term {self.current_term})")
        
        # Initialize leader state
        for node_id in range(self.cluster_size):
            if node_id != self.node_id:
                self.next_index[node_id] = len(self.log)
                self.match_index[node_id] = 0
    
    async def append_entries(self, term: int, leader_id: int,
                           prev_log_index: int, prev_log_term: int,
                           entries: List[LogEntry], leader_commit: int) -> bool:
        """Handle AppendEntries RPC"""
        # Heartbeat or log replication
        
        if term < self.current_term:
            return False
        
        # Update term and become follower
        if term > self.current_term:
            self.current_term = term
            self.state = NodeState.FOLLOWER
            self.voted_for = None
        
        # Check log consistency
        if prev_log_index >= 0:
            if (prev_log_index >= len(self.log) or
                self.log[prev_log_index].term != prev_log_term):
                return False
        
        # Append new entries
        if entries:
            self.log.extend(entries)
            print(f"   Node {self.node_id} appended {len(entries)} entries")
        
        # Update commit index
        if leader_commit > self.commit_index:
            self.commit_index = min(leader_commit, len(self.log) - 1)
        
        return True
    
    async def replicate_log(self, command: str):
        """Leader replicates log entry"""
        if self.state != NodeState.LEADER:
            return False
        
        # Add to local log
        entry = LogEntry(
            term=self.current_term,
            command=command,
            index=len(self.log)
        )
        self.log.append(entry)
        print(f"📝 Leader {self.node_id} added entry: {command}")
        
        # Replicate to followers (simulated)
        # In real: Send AppendEntries RPC to all followers
        # When majority confirm, commit entry
        
        return True

# Demo: Raft consensus
async def demo_raft():
    cluster_size = 5
    nodes = [RaftNode(i, cluster_size) for i in range(cluster_size)]
    
    # Node 2 starts election
    await nodes[2].start_election()
    
    # Simulate votes
    for i in [0, 1, 3]:
        granted = await nodes[i].request_vote(
            term=nodes[2].current_term,
            candidate_id=2,
            last_log_index=-1,
            last_log_term=0
        )
        if granted:
            nodes[2].votes_received += 1
    
    # Check if won election
    if nodes[2].votes_received >= (cluster_size // 2) + 1:
        await nodes[2].become_leader()
    
    # Leader replicates log
    await nodes[2].replicate_log("SET x = 5")
    await nodes[2].replicate_log("SET y = 10")

# asyncio.run(demo_raft())
```

---

## 🎯 Day 3: Distributed Locks

### 3.1 Distributed Lock Implementation

```python
import uuid
from typing import Optional
import time

class DistributedLock:
    """Distributed lock using Redis-like approach"""
    
    def __init__(self, resource_name: str, ttl_seconds: int = 10):
        self.resource_name = resource_name
        self.ttl_seconds = ttl_seconds
        self.lock_id: Optional[str] = None
        self.locks: Dict[str, tuple] = {}  # resource -> (owner_id, expiry)
    
    async def acquire(self, timeout: float = 5.0) -> bool:
        """Acquire distributed lock"""
        start_time = time.time()
        self.lock_id = str(uuid.uuid4())
        
        while time.time() - start_time < timeout:
            # Try to acquire lock
            current_time = time.time()
            
            # Check if lock exists and not expired
            if self.resource_name in self.locks:
                owner_id, expiry = self.locks[self.resource_name]
                if current_time < expiry:
                    # Lock held by someone else
                    await asyncio.sleep(0.1)
                    continue
            
            # Acquire lock
            expiry = current_time + self.ttl_seconds
            self.locks[self.resource_name] = (self.lock_id, expiry)
            print(f"🔒 Acquired lock on '{self.resource_name}' (ID: {self.lock_id[:8]})")
            return True
        
        print(f"❌ Failed to acquire lock on '{self.resource_name}'")
        return False
    
    async def release(self) -> bool:
        """Release distributed lock"""
        if self.resource_name not in self.locks:
            return False
        
        owner_id, expiry = self.locks[self.resource_name]
        
        # Only owner can release
        if owner_id == self.lock_id:
            del self.locks[self.resource_name]
            print(f"🔓 Released lock on '{self.resource_name}'")
            return True
        
        return False
    
    async def extend(self, additional_seconds: int = 10) -> bool:
        """Extend lock TTL"""
        if self.resource_name not in self.locks:
            return False
        
        owner_id, expiry = self.locks[self.resource_name]
        
        if owner_id == self.lock_id:
            new_expiry = expiry + additional_seconds
            self.locks[self.resource_name] = (owner_id, new_expiry)
            print(f"⏰ Extended lock on '{self.resource_name}'")
            return True
        
        return False

# Example: Bank transfer with distributed lock
class BankAccount:
    def __init__(self, account_id: str, balance: float):
        self.account_id = account_id
        self.balance = balance
        self.lock = DistributedLock(f"account:{account_id}")
    
    async def transfer(self, to_account: 'BankAccount', amount: float) -> bool:
        """Transfer money with distributed locking"""
        # Acquire locks in order to prevent deadlock
        accounts = sorted([self, to_account], key=lambda a: a.account_id)
        
        # Acquire first lock
        if not await accounts[0].lock.acquire():
            return False
        
        try:
            # Acquire second lock
            if not await accounts[1].lock.acquire():
                await accounts[0].lock.release()
                return False
            
            try:
                # Perform transfer
                if self.balance >= amount:
                    self.balance -= amount
                    to_account.balance += amount
                    print(f"💸 Transferred ${amount} from {self.account_id} to {to_account.account_id}")
                    await asyncio.sleep(0.5)  # Simulate processing
                    return True
                else:
                    print(f"❌ Insufficient funds in {self.account_id}")
                    return False
            
            finally:
                await accounts[1].lock.release()
        finally:
            await accounts[0].lock.release()

# Demo: Concurrent transfers
async def demo_distributed_locks():
    alice = BankAccount("alice", 1000.0)
    bob = BankAccount("bob", 500.0)
    
    # Concurrent transfers
    results = await asyncio.gather(
        alice.transfer(bob, 100.0),
        bob.transfer(alice, 50.0),
        return_exceptions=True
    )
    
    print(f"\n💰 Final balances:")
    print(f"   Alice: ${alice.balance}")
    print(f"   Bob: ${bob.balance}")

# asyncio.run(demo_distributed_locks())
```

---

## 🎯 Day 4: Vector Clocks & Conflict Resolution

### 4.1 Vector Clocks

```python
from typing import Dict

class VectorClock:
    """Vector clock for distributed systems"""
    
    def __init__(self, node_id: str, num_nodes: int):
        self.node_id = node_id
        self.clock: Dict[str, int] = {f"node-{i}": 0 for i in range(num_nodes)}
    
    def increment(self):
        """Increment own clock"""
        self.clock[self.node_id] += 1
    
    def update(self, other_clock: Dict[str, int]):
        """Merge with received clock"""
        for node_id, timestamp in other_clock.items():
            self.clock[node_id] = max(self.clock[node_id], timestamp)
        self.increment()  # Increment own after merge
    
    def happens_before(self, other_clock: Dict[str, int]) -> bool:
        """Check if this event happened before other"""
        less_or_equal = all(self.clock[k] <= other_clock.get(k, 0) 
                           for k in self.clock.keys())
        strictly_less = any(self.clock[k] < other_clock.get(k, 0) 
                           for k in self.clock.keys())
        return less_or_equal and strictly_less
    
    def concurrent_with(self, other_clock: Dict[str, int]) -> bool:
        """Check if events are concurrent (conflict)"""
        return (not self.happens_before(other_clock) and 
                not self.happens_before_reverse(other_clock))
    
    def happens_before_reverse(self, other_clock: Dict[str, int]) -> bool:
        """Check if other happened before this"""
        less_or_equal = all(other_clock.get(k, 0) <= self.clock[k] 
                           for k in self.clock.keys())
        strictly_less = any(other_clock.get(k, 0) < self.clock[k] 
                           for k in self.clock.keys())
        return less_or_equal and strictly_less

# Example: Detecting conflicts
def demo_vector_clocks():
    # Two nodes
    node_a = VectorClock("node-0", 2)
    node_b = VectorClock("node-1", 2)
    
    print("=== Event Sequence ===")
    
    # Node A: Write X
    node_a.increment()
    print(f"A writes X: {node_a.clock}")
    
    # Node B: Write Y (concurrent with A)
    node_b.increment()
    print(f"B writes Y: {node_b.clock}")
    
    # Check if concurrent
    if node_a.concurrent_with(node_b.clock):
        print("⚠️  Conflict detected! Events are concurrent")
    
    # Node A receives B's clock
    clock_b_copy = node_b.clock.copy()
    node_a.update(clock_b_copy)
    print(f"A receives B's update: {node_a.clock}")
    
    # Node A writes Z
    node_a.increment()
    print(f"A writes Z: {node_a.clock}")
    
    # Check ordering
    if node_b.happens_before(node_a.clock):
        print("✅ B's write happened before A's latest write")

# demo_vector_clocks())
```

---

## 🎯 Days 5-7: Advanced Topics (Summary)

### Day 5: Quorum Consensus
- Read/Write quorums
- Sloppy quorums
- Hinted handoff

### Day 6: Two-Phase Commit (2PC)
- Coordinator-participant model
- Prepare and commit phases
- Handling failures

### Day 7: Gossip Protocols
- Membership detection
- Information dissemination
- Failure detection

---

## 📊 Week 6 Complete

### Key Concepts Mastered
✅ CAP theorem trade-offs  
✅ Consistency models  
✅ Raft consensus algorithm  
✅ Distributed locks  
✅ Vector clocks  
✅ Conflict resolution  

**Continue to Week 7**: [Reliability & Monitoring →](../Week-07-Reliability-Monitoring/week-07-complete-content.md)