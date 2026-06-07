# DAY 21 - QUICK REFERENCE GUIDE

## Fast Lookup Reference

### ACID Properties Checklist
```
✓ Atomicity: All or nothing transaction
✓ Consistency: Valid state to valid state
✓ Isolation: No transaction interference
✓ Durability: Permanent after commit
```

### Isolation Levels (Ordered by Speed & Safety)
```
1. READ UNCOMMITTED  -> FASTEST, dirty reads OK
2. READ COMMITTED    -> Standard, no dirty reads
3. REPEATABLE READ   -> Stronger, no non-repeatable reads
4. SERIALIZABLE      -> SAFEST, sequential behavior
```

### Normalization Forms
```
1NF: Atomic values (no repeating groups)
2NF: No partial dependencies
3NF: No transitive dependencies
BCNF: Stronger 3NF
```

### Index Types & When to Use
```
B-Tree:
  ✓ Range queries (WHERE age > 30 AND age < 40)
  ✓ Sorted order (ORDER BY)
  ✓ General purpose
  ✗ Space overhead

Hash:
  ✓ Exact match (WHERE id = 123)
  ✓ Very fast (O(1))
  ✗ No range queries

Bitmap:
  ✓ Low cardinality (gender, status)
  ✓ Space efficient
  ✗ Slow for high cardinality

Fulltext:
  ✓ Text search
  ✓ Contains words
  ✗ Not for exact match
```

### Storage Engines Comparison
```
                B-Tree    LSM Tree   Hash    Heap
Write Speed:    Medium    FAST       Medium  FAST
Read Speed:     FAST      Medium     FAST    Slow
Range Query:    YES       YES        NO      NO
Space:          Medium    Compact    Medium  Large
Use For:        General   Write-opt  Cache   Scans
```

### NoSQL Database Selector
```
KEY-VALUE (Redis):
  - Caching
  - Sessions  
  - Real-time data
  - High throughput

DOCUMENT (MongoDB):
  - Flexible schema
  - Nested data
  - Rapid iteration
  - JSON-like

GRAPH (Neo4j):
  - Relationships
  - Recommendations
  - Social networks

WIDE-COLUMN (Cassandra):
  - Time-series
  - Distributed
  - High write throughput

TIME-SERIES (InfluxDB):
  - Metrics
  - Monitoring
  - Aggregations
```

### Replication Strategies
```
MASTER-SLAVE:
  Master: Writes + Reads
  Slave: Reads only
  Failover: Promote slave to master
  Lag: Acceptable

MULTI-MASTER:
  All: Writes + Reads
  Conflicts: Possible
  Resolution: Last-write-wins, vector clocks, merge
  Complexity: High

QUORUM:
  Write: W replicas
  Read: R replicas
  Consistency: W + R > N guarantees latest read
  Tuning: Lower W = faster writes, higher R = safer reads
```

### Consistency Models (Spectrum)
```
STRONG CONSISTENCY
↓ (Sequential)
Linearizability: Single writer illusion
Serializability: Sequential history
Causal Consistency: Respect causality
Session Consistency: Single client sees consistency
Eventual Consistency
↓ (Distributed)
Weak Consistency
```

### Conflict Resolution Strategies
```
LAST-WRITE-WINS:
  Logic: Take version with highest timestamp
  Pros: Simple, deterministic
  Cons: Loses writes

VECTOR CLOCKS:
  Logic: Compare event causality
  Pros: Detects concurrent writes
  Cons: Complex

MERGE:
  Logic: Combine versions
  Pros: Doesn't lose data
  Cons: May create invalid state

CRDTs:
  Logic: Mathematically mergeable
  Pros: Always consistent
  Cons: Specialized data types
```

### Query Optimization Checklist
```
□ Check EXPLAIN PLAN
□ Verify indexes on WHERE clause
□ Avoid SELECT * (specify columns)
□ Check JOIN order (smallest first)
□ Push predicates down (WHERE before JOIN)
□ Use proper JOIN type (hash > sort-merge > nested loop)
□ Cache repeated queries
□ Monitor query times
□ Denormalize if necessary
```

### Index Design Pattern
```
High Selectivity Column:
  CREATE INDEX idx_email ON users(email)
  SELECT * FROM users WHERE email = 'john@example.com'
  
Range Query:
  CREATE INDEX idx_date ON orders(created_at)
  SELECT * FROM orders WHERE created_at > '2024-01-01'
  
Multiple Columns:
  CREATE INDEX idx_country_age ON users(country, age)
  SELECT * FROM users WHERE country='USA' AND age > 30
```

### Join Optimization Decision Tree
```
Question: Table sizes?
├─ Both < 10MB → Hash join (any size)
├─ One >> other → Nested loop (small inside)
└─ Both large → Sort-merge (if sortable)

Question: Sorted already?
├─ YES → Sort-merge
└─ NO → Hash join

Question: Memory available?
├─ YES → Hash (build from smaller)
└─ NO → Sort-merge or stream (higher CPU)
```

### Partitioning Strategies
```
RANGE PARTITIONING:
  Example: created_at < 2024-01-01, 2024-01-01 to 2024-02-01
  Good for: Time-series, chronological queries
  Hot spot: Latest partition

HASH PARTITIONING:
  Example: hash(user_id) % 100
  Good for: Load balancing, even distribution
  Problem: Range queries span partitions

DIRECTORY PARTITIONING:
  Example: External service maps key to partition
  Good for: Complex logic, multi-tenant

KEY: Partition on most filtered column
```

### Compression Techniques Comparison
```
                Space    Speed    Use Case
DICTIONARY:    High     FAST     Categorical data
RUN-LENGTH:    High     FAST     Repetitive data
DELTA:         High     FAST     Sequential numbers
SNAPPY:        Medium   VERY FAST General purpose
GZIP:          Very High SLOW     Archival
```

### Transaction Isolation Anomalies
```
DIRTY READ:
  T1 writes X, T2 reads X, T1 rollbacks
  T2 read dirty data
  Prevented by: READ COMMITTED+

NON-REPEATABLE READ:
  T1 reads X=10, T2 updates X=20, T1 reads X again
  Same query, different result
  Prevented by: REPEATABLE READ+

PHANTOM READ:
  T1 selects rows where age>30, T2 inserts age=32
  T1 selects again, different result set
  Prevented by: SERIALIZABLE
```

### Lock Types
```
SHARED (Read) LOCK:
  Multiple readers OK
  Writers blocked
  Use for: SELECT

EXCLUSIVE (Write) LOCK:
  Exclusive access
  All others blocked
  Use for: INSERT/UPDATE/DELETE
```

### Deadlock Detection Pattern
```
1. Build wait-for graph (who waits for whom)
2. Check for cycles
3. If cycle found: Deadlock exists
4. Victim selection:
   - Youngest transaction (cheapest to rollback)
   - Least work done
   - Application priority
5. Abort victim, retry
```

### Write-Ahead Logging (WAL)
```
Before Update:
1. Write to log: "UPDATE users SET age=31 WHERE id=1"
2. Flush log to disk
3. Apply change in memory
4. Return success

On Crash:
1. Replay log from last checkpoint
2. Skip committed but not persisted changes
3. Redo applied changes
4. Database consistent

Benefits: Durability + Consistency
```

### CAP Theorem & NoSQL
```
         CONSISTENCY ← Perfect agreement
            /\
           /  \
          /    \
     AVAILABILITY    PARTITION TOLERANCE
        (always on)  (network split)

Choose 2:
- CP: Strong consistency, survives partitions (sacrifice availability)
  Example: PostgreSQL, Cassandra (tunable)
  
- AP: Always available, survives partitions (sacrifice consistency)
  Example: DynamoDB, Cassandra (tunable)
  
- CA: Consistent and available (no partition tolerance - impossible)
  
Most modern: Tunable (Cassandra, DynamoDB) - choose based on config
```

### Distributed System Failure Modes
```
1. Machine crash → Failover to replica
2. Network partition → Quorum decides
3. Slow network → Timeout + retry
4. Byzantine (lying) → Consensus algorithm
5. Cascading failures → Circuit breaker, backpressure
```

### Performance Metrics Targets
```
Read Latency:
  - Cache hit: < 1ms
  - SSD: 1-10ms
  - Network: 10-100ms
  - Disk: 100-1000ms

Write Latency:
  - Memory: < 1ms
  - SSD (with WAL): 5-50ms
  - Replication quorum: 50-200ms

Throughput:
  - Single machine: 10K-100K ops/sec
  - Distributed: 1M+ ops/sec

Replication Lag:
  - Target: < 1 second
  - Acceptable: < 5 seconds
```

### Interview Red Flags to Avoid
```
✗ "Use SQL for everything" (No NoSQL consideration)
✗ "No indexing needed" (Kills performance)
✗ "No backup strategy" (Disaster)
✗ "Ignore consistency" (Corrupts data)
✗ "Single machine" (No scaling)
✗ "Synchronous replication" (Slow writes)
✗ "No monitoring" (Can't debug)
✗ "Denormalize everything" (Wasted effort)
```

### Design Flow (5 mins per step)
```
1. Understand Requirements (5 min)
   - QPS? Latency? Consistency? Storage?

2. Choose Database (2 min)
   - SQL/NoSQL/Graph/Time-Series?

3. Design Schema (5 min)
   - Entities, relationships, normalization level?

4. Plan Scaling (5 min)
   - Partitioning? Replication? Sharding?

5. Handle Failures (3 min)
   - Backup? Failover? Replication lag?

6. Optimize (5 min)
   - Indexes? Caching? Query plans?

Total: ~25 minutes for complete design
```

### Code Snippet: Check Index Usage
```sql
EXPLAIN SELECT * FROM users 
WHERE country='USA' AND age > 30;

Output shows:
- Which index (or no index)
- Rows examined
- Rows filtered
- Cost estimate
```

### Code Snippet: Measure Query Time
```java
long start = System.nanoTime();
// Query execution
long end = System.nanoTime();
long durationMs = (end - start) / 1_000_000;
System.out.println("Query took: " + durationMs + "ms");
```

### Scaling Rules
```
Vertical Scaling Limits:
  - Single machine: ~10K-100K ops/sec
  - Bottleneck: CPU or I/O
  - Max effective: 2-4 machines

Horizontal Scaling Requirements:
  - Partitioning strategy
  - Replication for resilience
  - Coordination mechanism
  - Consistency model
  
Rule of Thumb:
  1M+ QPS → Definitely distributed
  100K-1M QPS → Consider distributed
  < 100K QPS → Single machine OK (with replica)
```

---

## Quick Decision Matrix

| Scenario | Choice | Why |
|----------|--------|-----|
| Caching | Redis (Key-Value) | Fast, in-memory |
| User Profiles | MongoDB (Document) | Flexible schema |
| Relationships | Neo4j (Graph) | Optimized for joins |
| Metrics | InfluxDB (Time-Series) | Time optimization |
| ACID Transactions | PostgreSQL (SQL) | Strong guarantees |
| High Write | Cassandra (Wide-Column) | Write-optimized |
| Unknown Schema | MongoDB (Document) | Flexibility |
| Complex Queries | PostgreSQL (SQL) | Join power |
| Billions of Records | Cassandra/DynamoDB | Horizontal scaling |
| Consistency Critical | PostgreSQL | ACID |
| Speed Critical | Redis | Sub-ms latency |

---

**Remember**: No silver bullet. Choose based on requirements, tradeoffs inevitable.

