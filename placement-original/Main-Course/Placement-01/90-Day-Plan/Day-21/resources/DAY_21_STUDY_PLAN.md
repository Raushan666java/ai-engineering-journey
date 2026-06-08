# DAY 21 - COMPLETE 8-HOUR STUDY PLAN

## Total Time: 8 Hours (480 minutes)

---

## PHASE 1: FOUNDATIONS (90 minutes)

### Hour 1: Database Fundamentals (60 minutes)

**0:00-0:20 - ACID Properties**
- Read: ACID properties theory
- Key Points:
  * Atomicity: All or nothing (transaction succeeds or fails completely)
  * Consistency: Valid state to valid state
  * Isolation: No transaction interference
  * Durability: Data survives failures
- Code Review: Transaction class in DatabaseFundamentalsComplete.java
- Quiz Yourself: "Why are ACID properties important?" (Answer: Prevent data corruption)

**0:20-0:40 - Database Normalization**
- Study: 1NF, 2NF, 3NF, BCNF
- Examples:
  * 1NF problem: Repeating groups → Solution: Separate table
  * 2NF problem: Partial dependencies → Solution: Split by key
  * 3NF problem: Transitive dependencies → Solution: Further split
- Practice: Normalize a given table schema
- Key: Higher normalization = less redundancy but more joins

**0:40-1:00 - Database Indexing**
- Study: B-Tree, Hash, Bitmap indexes
- When to use:
  * B-Tree: Range queries (default choice)
  * Hash: Exact match lookups
  * Bitmap: Low cardinality fields
- Example: CREATE INDEX idx_email ON users(email)
- Performance: Indexes are 10-100x faster than full scans

### Half-Time Break: 5 minutes

### Hour 2: Transactions & Locks (30 minutes)

**1:05-1:25 - Isolation Levels**
- Study: READ UNCOMMITTED → SERIALIZABLE
- Tradeoffs:
  * Lower level = faster but riskier
  * Higher level = safer but slower
- Anomalies to prevent:
  * Dirty reads
  * Non-repeatable reads
  * Phantom reads
- Use: SERIALIZABLE for critical transactions, READ COMMITTED for standard

**1:25-1:35 - Deadlock Handling**
- Problem: Circular wait (T1 waits for T2, T2 waits for T1)
- Solution: 
  * Detect: Build wait-for graph, find cycles
  * Resolve: Abort one transaction, retry
- Prevention: Always acquire locks in same order

---

## PHASE 2: STORAGE & OPTIMIZATION (120 minutes)

### Hour 3: Storage Engines (60 minutes)

**2:00-2:20 - B-Trees & Buffer Pools**
- Study: Page-based storage, buffer pool management
- B-Tree structure:
  * Root → branches → leaves
  * All paths same length (balanced)
  * Great for range queries
- Buffer pool:
  * Keep hot pages in memory
  * LRU eviction when full
  * Dirty flag for flushing
- Code Review: BTreeStructure in StorageEnginesComplete.java

**2:20-2:40 - LSM Trees & Write Optimization**
- LSM Tree concept:
  * MemTable (fast writes to memory)
  * Sorted run files (L0, L1, L2...)
  * Asynchronous compaction
- Advantages: Sequential I/O (fast), good write throughput
- Disadvantages: More CPU for compaction, slower reads
- Use: Cassandra, RocksDB, LevelDB

**2:40-3:00 - Compression Techniques**
- Study: Dictionary, Run-Length, Delta encoding
- Comparison:
  * Dictionary: 50% compression for repetitive categorical data
  * Run-Length: 60%+ for repetitive values
  * Delta: Good for sequential numbers
- When to use: Dictionary most practical, others for specific data

### Break: 5 minutes

### Hour 4: Query Optimization (60 minutes)

**3:05-3:25 - Execution Plans**
- Query optimization: Finding best execution path
- EXPLAIN PLAN output:
  * Table scan vs index scan
  * Estimated rows, estimated cost
  * Execution order
- Optimization rules:
  * Use indexes on filtered columns
  * Filter before join
  * Smallest table first
- Code Review: ExecutionPlan in SQLOptimizationComplete.java

**3:25-3:45 - Index Selection Strategy**
- Factors:
  * Selectivity: Index on highly selective columns
  * Cardinality: High = better index candidate
  * Query patterns: Match index to query WHERE clause
- Decision tree:
  * High selectivity + frequently queried → Create index
  * Low selectivity + rarely queried → Skip index
  * Multiple columns → Composite index (order matters!)
- Myth: "More indexes = faster queries" (Wrong! Slow inserts)

**3:45-4:05 - Join Optimization**
- Join types:
  * Nested loop: O(n*m), slow but simple
  * Hash join: O(n+m), fast for large tables
  * Sort-merge: O(n log n + m log m), good if sorted
- Decision:
  * Small table available → Hash join (build from small)
  * Already sorted → Sort-merge
  * Memory limited → Stream nested loop
- Example: Optimizer chooses hash join for million-row tables

---

## PHASE 3: NOSQL & CONSISTENCY (120 minutes)

### Hour 5: NoSQL Databases (60 minutes)

**4:05-4:25 - Key-Value Stores**
- Use cases: Caching, sessions, leaderboards, rate limiting
- Operations: GET, SET, DEL, INCR, EXPIRE
- Tradeoff: Ultra-fast (< 1ms) but no durability guarantee
- Example: Cache user data, invalidate on update
- Code Review: KeyValueStore in NoSQLDatabasesComplete.java

**4:25-4:45 - Document Databases**
- MongoDB pattern:
  * Collections instead of tables
  * Documents instead of rows (JSON-like)
  * Flexible schema
- Advantages: Rapid development, nested data support
- Disadvantages: No ACID, no joins
- Query: db.users.find({ country: 'USA' })
- Good for: Content management, user profiles

**4:45-5:05 - Graph & Time-Series**
- Graph: Perfect for relationships (social networks, recommendations)
  * Query: Friends-of-friends efficiently
  * Traversal: BFS/DFS on graph
- Time-Series: Optimized for metrics
  * Partition by time bucket
  * Efficient aggregation (sum, avg)
  * Good compression of similar values
- Code Review: GraphDatabase, TimeSeriesDatabase in NoSQLDatabasesComplete.java

### Break: 5 minutes

### Hour 6: Data Consistency (60 minutes)

**5:05-5:25 - Replication Strategies**
- Master-Slave:
  * Writes to master
  * Slaves replicate (eventually consistent)
  * Failover: Promote slave if master fails
  * Good for: Read scaling, high availability
- Multi-Master:
  * Multiple write points
  * Conflicts possible
  * Higher complexity
- Quorum:
  * W + R > N ensures latest read
  * Tuning: Higher W = slower writes but safer
- Code Review: MasterSlaveReplication in DataConsistencyComplete.java

**5:25-5:45 - Consistency Models**
- Spectrum: Strong ← → Eventual
  * Linearizability: Single writer illusion
  * Serializability: Sequential history
  * Causal: Respects happens-before
  * Session: Per-user consistency
  * Eventual: All eventually agree
- Choice: Depends on requirements
  * Financial: Strong
  * Social media: Eventual OK
  * Analytics: Eventual

**5:45-6:05 - Conflict Resolution**
- Last-write-wins: Simple but loses writes
- Vector clocks: Detects causality
- Merge: Combines versions
- CRDTs: Mathematically mergeable
- Pattern: Choose based on data type and semantics

---

## PHASE 4: PRACTICE & INTEGRATION (90 minutes)

### Hour 7: Problem Solving (60 minutes)

**6:05-6:35 - Design Problems**
- Problem 1: Design social media database (15 min)
  * Schema: Users, Posts, Comments, Likes
  * Indexes: user_id, post_id, created_at
  * Challenge: Handle feed query efficiently
- Problem 2: Design e-commerce database (15 min)
  * Schema: Products, Orders, Inventory
  * Challenge: Real-time stock updates
- Problem 3: Design messaging system (15 min)
  * Schema: Conversations, Messages
  * Challenge: High throughput, low latency

**6:35-6:55 - Optimization Problems**
- Problem 4: Slow query - optimize it (10 min)
  * Before: SELECT * with no indexes
  * After: Add indexes, specify columns, use EXPLAIN
- Problem 5: Index strategy design (10 min)
  * Given queries, design indexes
  * Consider selectivity, frequency, cost

### Break: 5 minutes

### Hour 8: Review & Interview Prep (25 minutes)

**7:00-7:15 - Key Concepts Review**
- ACID: Atomicity, Consistency, Isolation, Durability
- Normalization: 1NF-BCNF, foreign keys
- Indexing: B-Tree (range), Hash (equality), Bitmap (low cardinality)
- Query optimization: EXPLAIN PLAN, cost estimation
- Replication: Master-slave, multi-master, quorum
- Consistency: Strong vs eventual, conflicts

**7:15-7:25 - Common Interview Questions**
1. "Explain ACID properties" → Answer: All-or-nothing, consistent, isolated, durable
2. "When to use NoSQL?" → Answer: Flexible schema, high throughput, no ACID needed
3. "How to handle millions of records?" → Answer: Partitioning, replication, caching
4. "Design a database for X" → Answer: Schema, indexes, scaling strategy
5. "Optimize this slow query" → Answer: EXPLAIN, add indexes, rewrite query

**7:25-7:30 - Next Steps & Practice**
- Run all code examples
- Compile all Java files
- Modify examples (add features, handle edge cases)
- Solve practice problems independently
- Ask why on every design decision

---

## Study Tips

### Before Each Session
```
□ Review previous hour's notes
□ Have code open in IDE
□ Compile and run examples
□ Take notes on key points
```

### During Study
```
□ Active reading (not passive)
□ Type out code (not copy-paste)
□ Write down tradeoffs
□ Reason about decisions
□ Ask "why" after every fact
```

### After Each Hour
```
□ Summarize in 3 sentences
□ List 5 key takeaways
□ Identify unclear concepts
□ Relate to real systems
□ Do a quick recap
```

### Daily Practice
```
□ Read one code file
□ Write one schema design
□ Optimize one query
□ Answer 5 interview questions
□ Discuss with someone
```

---

## Common Pitfalls to Avoid

1. **"More indexes = faster"**
   - Reality: More indexes = slower inserts/updates
   - Solution: Index selectively

2. **"Normalize to BCNF always"**
   - Reality: BCNF adds complexity and joins
   - Solution: Denormalize strategically

3. **"NoSQL is always better for scale"**
   - Reality: SQL can scale horizontally too
   - Solution: Choose by requirements, not hype

4. **"Eventual consistency is fine for everything"**
   - Reality: Can lose data, corrupt state
   - Solution: Strong consistency for critical data

5. **"Single machine is always faster"**
   - Reality: Distribution enables massive scale
   - Solution: Distributed for throughput, single for latency

---

## Integration Examples

### Example 1: Designing User Feed (Instagram-like)
```
Requirements:
- 100M users, 10 billion posts
- Feed query: top 100 posts from followers
- Target: < 200ms latency

Solution:
1. Database: Cassandra (time-series + wide-column)
2. Partition: By user_id (shard key)
3. Replication: RF=3 (3 copies)
4. Caching: Redis for hot feeds
5. Query: Denormalized feed table (posts with metadata)

Indexing:
- CREATE INDEX ON user_id (for fetch)
- CREATE INDEX ON created_at (for chronological)

Result: <200ms queries, scales to billions
```

### Example 2: Designing Transactional System (Bank)
```
Requirements:
- ACID transactions mandatory
- Strong consistency required
- 1M transactions/day

Solution:
1. Database: PostgreSQL (ACID guarantees)
2. Isolation: SERIALIZABLE (safest)
3. Replication: Master-slave + backup
4. Indexes: On transaction_id, account_id, date
5. Caching: No (data changes constantly)

Schema:
- Accounts: id, balance, updated_at
- Transactions: id, from_account, to_account, amount, status

Safety:
- WAL (write-ahead log)
- Checkpoints every 5 minutes
- Backup every hour

Result: Zero corruption, recoverable
```

### Example 3: Designing Analytics Database
```
Requirements:
- 1 billion events/day
- Complex queries (GROUP BY, JOIN)
- 10-minute query acceptable

Solution:
1. Database: Redshift or BigQuery (OLAP)
2. Storage: Columnar format (compress better)
3. Partition: By date (daily partitions)
4. Replication: Snapshots (no need for live)
5. Indexing: Clustered on frequently filtered columns

Schema:
- Events: user_id, event_type, timestamp, properties
- Fact tables for aggregations

Optimization:
- Pre-compute aggregations
- Partition elimination
- Materialized views

Result: Complex queries, 10M+ rows/sec
```

---

## Self-Test (Answer in < 2 minutes each)

1. What's the difference between ACID and eventual consistency?
2. When would you use LSM trees instead of B-trees?
3. How do you handle conflicts in multi-master replication?
4. What's the purpose of isolation levels?
5. Explain W + R > N in quorum consistency.
6. When to add a database index?
7. How do you optimize a slow query?
8. Difference between master-slave and multi-master?
9. When to use NoSQL over SQL?
10. How do you scale a database to handle 10M QPS?

Answers should be concise, specific, with examples.

---

**Expected Outcome**: After 8 hours, you should:
✓ Understand database design principles deeply
✓ Know when to use which database/storage engine
✓ Be able to optimize queries
✓ Understand consistency/replication tradeoffs
✓ Solve system design interview questions with confidence
✓ Make informed engineering decisions

**Confidence Level After Study**:
- Database design: 90%+
- Query optimization: 80%+
- NoSQL selection: 85%+
- Interview readiness: 85%+

