# ⚖️ CAP Theorem - Complete Deep Dive

## What is CAP Theorem?

### Definition
In a distributed system, you can only guarantee 2 out of 3:
- **C**onsistency: All nodes see the same data at the same time
- **A**vailability: Every request receives a response (success or failure)
- **P**artition Tolerance: System continues despite network failures

### The Trade-off
```
Network Partition Occurs:
Node 1 ←✗→ Node 2

Choice 1: Maintain Consistency (CP)
- Reject requests until partition heals
- Result: Unavailable but consistent

Choice 2: Maintain Availability (AP)
- Accept requests on both nodes
- Result: Available but inconsistent
```

---

## Consistency (C)

### Strong Consistency
```
Timeline:
T0: Node 1: balance=$100, Node 2: balance=$100
T1: Write to Node 1: balance=$50
T2: Node 1 replicates to Node 2
T3: Node 1: balance=$50, Node 2: balance=$50
T4: Read from any node: balance=$50 ✅

Guarantee: Reads always return latest write
```

### Eventual Consistency
```
Timeline:
T0: Node 1: balance=$100, Node 2: balance=$100
T1: Write to Node 1: balance=$50
T2: Read from Node 2: balance=$100 ❌ (stale)
T3: Replication completes
T4: Read from Node 2: balance=$50 ✅

Guarantee: Eventually consistent (seconds to minutes)
```

### Real-World Examples

#### Banking (Strong Consistency Required)
```python
# Transfer $100 from Account A to Account B
def transfer(from_account, to_account, amount):
    # Must be atomic and consistent
    with transaction():
        balance_a = read(from_account)
        if balance_a < amount:
            raise InsufficientFunds
        
        write(from_account, balance_a - amount)
        write(to_account, read(to_account) + amount)
    
    # Both accounts updated or neither
    # No intermediate state visible

Database: PostgreSQL (CP system)
```

#### Social Media (Eventual Consistency Acceptable)
```python
# Like a post
def like_post(user_id, post_id):
    # Write to nearest datacenter
    write_local(f"like:{post_id}:{user_id}", timestamp)
    
    # Replicate asynchronously
    replicate_async(other_datacenters)
    
    # User sees like immediately
    # Other users see it within seconds

Database: Cassandra (AP system)
```

---

## Availability (A)

### High Availability
```
Definition: System responds to every request

Measurement:
99.9% (Three Nines)   = 8.76 hours downtime/year
99.99% (Four Nines)   = 52.56 minutes downtime/year
99.999% (Five Nines)  = 5.26 minutes downtime/year

Techniques:
1. Redundancy (multiple nodes)
2. Load balancing
3. Automatic failover
4. Health checks
```

### Availability vs Consistency Trade-off
```
Scenario: Network partition between datacenters

CP System (e.g., MongoDB):
- Minority partition becomes unavailable
- Majority partition remains available
- Consistency maintained

AP System (e.g., Cassandra):
- Both partitions remain available
- Accept writes on both sides
- Resolve conflicts later
```

---

## Partition Tolerance (P)

### What is a Network Partition?
```
Normal Operation:
Client → Load Balancer → [Node 1 ↔ Node 2 ↔ Node 3]

Network Partition:
Client → Load Balancer → [Node 1 ↔ Node 2] ✗ [Node 3]
                          Group A              Group B

Causes:
- Network cable cut
- Switch failure
- Firewall misconfiguration
- Geographic issues (undersea cable)
```

### Why P is Non-Negotiable
```
In distributed systems, network failures WILL happen

Options:
1. CP: Sacrifice availability during partition
2. AP: Sacrifice consistency during partition
3. CA: Not possible in distributed systems
   (Can only exist in single-node systems)
```

---

## CAP Categories

### CP Systems (Consistency + Partition Tolerance)

#### MongoDB
```javascript
// Write with majority acknowledgment
db.users.insertOne(
  { name: "John", balance: 100 },
  { writeConcern: { w: "majority" } }
)

// Behavior during partition:
// - Minority nodes reject writes (unavailable)
// - Majority nodes accept writes (available)
// - Consistency maintained

Use Cases:
- Financial transactions
- Inventory management
- Booking systems
```

#### HBase
```java
// Strong consistency by design
Put put = new Put(Bytes.toBytes("row1"));
put.addColumn(Bytes.toBytes("cf"), Bytes.toBytes("col"), 
              Bytes.toBytes("value"));
table.put(put);

// All reads see latest write
// Unavailable during partition

Use Cases:
- Real-time analytics
- Time-series data
- Log aggregation
```

### AP Systems (Availability + Partition Tolerance)

#### Cassandra
```cql
-- Write to any node (always available)
INSERT INTO users (id, name, balance) 
VALUES (1, 'John', 100);

-- Read with eventual consistency
SELECT * FROM users WHERE id = 1;

-- Behavior during partition:
-- - All nodes accept reads/writes
-- - Conflicts resolved by timestamp (last-write-wins)
-- - Eventually consistent

Use Cases:
- Social media feeds
- Product catalogs
- User profiles
```

#### DynamoDB
```python
# Write with eventual consistency
table.put_item(Item={'id': '123', 'name': 'John'})

# Read options:
# 1. Eventually consistent (default, faster)
response = table.get_item(Key={'id': '123'})

# 2. Strongly consistent (slower, more expensive)
response = table.get_item(
    Key={'id': '123'},
    ConsistentRead=True
)

Use Cases:
- Gaming leaderboards
- IoT data
- Session storage
```

### CA Systems (Consistency + Availability)

#### Single-Node Databases
```
Examples: SQLite, Single PostgreSQL instance

Characteristics:
- No network partitions (single node)
- Strong consistency
- High availability (within single node)

Limitations:
- Cannot scale horizontally
- Single point of failure
- Limited by single machine resources

Use Cases:
- Mobile apps (local database)
- Embedded systems
- Development/testing
```

---

## Consistency Models

### Linearizability (Strongest)
```
Timeline:
T1: Write(x=1) starts
T2: Write(x=1) completes
T3: Read(x) → must return 1 (not 0)

Guarantee: Operations appear instantaneous
Example: Zookeeper, etcd
```

### Sequential Consistency
```
Timeline:
Process 1: Write(x=1), Write(x=2)
Process 2: Read(x) → 1, Read(x) → 2 ✅
Process 2: Read(x) → 2, Read(x) → 1 ❌

Guarantee: Operations in program order
Example: Some distributed databases
```

### Causal Consistency
```
Timeline:
User A: Post message (M1)
User B: Reply to M1 (M2)
User C: Sees M2 → Must see M1 first

Guarantee: Cause-effect relationships preserved
Example: Facebook comments
```

### Eventual Consistency (Weakest)
```
Timeline:
T0: Write(x=1) to Node 1
T1: Read from Node 2 → 0 (stale)
T2: Read from Node 2 → 0 (still stale)
T3: Replication completes
T4: Read from Node 2 → 1 (consistent)

Guarantee: Eventually consistent (no time bound)
Example: DNS, Cassandra
```

---

## Real-World Scenarios

### Scenario 1: E-commerce Inventory
```
Problem: 1 item left, 2 users try to buy simultaneously

CP Approach (Strong Consistency):
User 1: Check inventory → 1 item → Reserve → Success
User 2: Check inventory → 0 items → Fail
Result: No overselling ✅

AP Approach (Eventual Consistency):
User 1: Check inventory → 1 item → Reserve → Success
User 2: Check inventory → 1 item → Reserve → Success
Result: Overselling ❌ (need compensation)

Solution: Use CP system for inventory
Database: PostgreSQL with row-level locking
```

### Scenario 2: Social Media Likes
```
Problem: 1M users like a post simultaneously

CP Approach:
- Serialize all writes (slow)
- Accurate count always
- Poor user experience (delays)

AP Approach:
- Accept all writes immediately
- Count may be temporarily inaccurate
- Great user experience
- Eventually accurate

Solution: Use AP system for likes
Database: Cassandra with counters
```

### Scenario 3: Ride-Sharing Driver Location
```
Problem: Update driver location every 4 seconds

Requirements:
- High write throughput (1M drivers)
- Eventual consistency acceptable
- Availability critical

Solution: AP system
Database: DynamoDB
Consistency: Eventual (location updates within 1 second)
```

---

## Conflict Resolution

### Last-Write-Wins (LWW)
```python
# Conflict scenario
Node 1 (T1): Write(x=1, timestamp=100)
Node 2 (T2): Write(x=2, timestamp=101)

# Resolution: Keep latest timestamp
Result: x=2

Pros: Simple, deterministic
Cons: Data loss (x=1 discarded)

Use case: User profile updates
```

### Vector Clocks
```python
# Track causality
Node 1: Write(x=1, version=[1,0,0])
Node 2: Write(x=2, version=[0,1,0])

# Concurrent writes detected
# Application resolves conflict

Pros: Detects conflicts accurately
Cons: Complex implementation

Use case: Collaborative editing
```

### CRDTs (Conflict-Free Replicated Data Types)
```python
# Counter CRDT
class GCounter:
    def __init__(self):
        self.counts = {}  # node_id → count
    
    def increment(self, node_id):
        self.counts[node_id] = self.counts.get(node_id, 0) + 1
    
    def value(self):
        return sum(self.counts.values())
    
    def merge(self, other):
        for node_id, count in other.counts.items():
            self.counts[node_id] = max(
                self.counts.get(node_id, 0),
                count
            )

# No conflicts possible (commutative, associative)

Use case: Distributed counters, collaborative apps
```

---

## Choosing the Right System

### Decision Tree
```
Does your application require ACID transactions?
├─ YES → Use CP system (PostgreSQL, MySQL)
└─ NO → Continue

Can you tolerate eventual consistency?
├─ YES → Use AP system (Cassandra, DynamoDB)
└─ NO → Use CP system

Do you need global distribution?
├─ YES → Use AP system (better availability)
└─ NO → CP system acceptable

Is availability more important than consistency?
├─ YES → Use AP system
└─ NO → Use CP system
```

### Use Case Matrix
```
Use Case                  System Type    Database
────────────────────────────────────────────────────
Banking transactions      CP             PostgreSQL
E-commerce inventory      CP             MySQL
User authentication       CP             PostgreSQL
Social media feeds        AP             Cassandra
Product catalog           AP             MongoDB
Session storage           AP             Redis
Analytics data            AP             Cassandra
Real-time messaging       AP             Cassandra
Booking systems           CP             PostgreSQL
Gaming leaderboards       AP             Redis
```

---

## Summary

### Key Takeaways
1. **CAP is a trade-off**: Cannot have all three in distributed systems
2. **P is mandatory**: Network partitions will happen
3. **Choose CP or AP**: Based on business requirements
4. **Consistency models**: Range from strong to eventual
5. **Conflict resolution**: Plan for it in AP systems

### Decision Framework
```
Question 1: Can you tolerate stale data?
- NO → CP system
- YES → Continue

Question 2: Is 100% availability critical?
- YES → AP system
- NO → CP system

Question 3: Do you need ACID transactions?
- YES → CP system
- NO → AP system acceptable
```

---

**Next**: [05_Load_Balancing_Complete.md](./05_Load_Balancing_Complete.md)
