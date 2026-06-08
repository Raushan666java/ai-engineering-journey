# DAY 21 - DATABASE & STORAGE SYSTEMS COMPLETE GUIDE

## Learning Objectives
By the end of Day 21, you will master:
- Database fundamentals (ACID, transactions, normalization)
- Storage engine internals (B-Trees, LSM Trees, compression)
- NoSQL database design (Key-Value, Document, Graph, Time-Series)
- Data consistency and replication (Master-Slave, Multi-Master, Quorum)
- SQL query optimization and execution planning

---

## Module 1: DATABASE FUNDAMENTALS

### 1.1 ACID Properties

**Atomicity (All or Nothing)**
```
Transaction: Transfer $100 from Account A to Account B
- Debit A: A = A - 100
- Credit B: B = B + 100

If Step 2 fails, entire transaction rolls back.
If Step 1 fails, transaction never started.
Result: A and B are always consistent.
```

**Consistency (Valid State)**
```
Constraint: A.balance + B.balance = 1000 (total)

Initial: A=500, B=500 (consistent)
After transaction: A=400, B=600 (consistent)

Database prevents: A=400, B=500 (violates constraint)
```

**Isolation (No Interference)**
```
Transaction 1: Update A to 1000
Transaction 2: Read A

Isolation Levels:
- READ UNCOMMITTED: T2 reads A=1000 (dirty read)
- READ COMMITTED: T2 waits or reads A=500
- REPEATABLE READ: T2 sees T1's changes only after T1 commits
- SERIALIZABLE: T2 cannot run until T1 completes
```

**Durability (Permanent Storage)**
```
After COMMIT:
- Data written to disk
- Survives crash/power loss
- Uses write-ahead logging (WAL)
```

### 1.2 Database Normalization

**1NF: Atomic Values**
```
UNNORMALIZED:
| Student | Courses        |
|---------|----------------|
| John    | Math, Science  |

1NF (Atomic):
| Student | Course   |
|---------|----------|
| John    | Math     |
| John    | Science  |
```

**2NF: No Partial Dependencies**
```
UNNORMALIZED:
| StudentID | CourseID | StudentName | CourseName |
(StudentName depends only on StudentID, not CourseID)

2NF (Split):
Students: | StudentID | StudentName |
Enrollments: | StudentID | CourseID |
```

**3NF: No Transitive Dependencies**
```
UNNORMALIZED:
| StudentID | DepartmentID | DepartmentName |
(DepartmentName depends on DepartmentID, not StudentID)

3NF (Split):
Students: | StudentID | DepartmentID |
Departments: | DepartmentID | DepartmentName |
```

### 1.3 Database Indexing

**B-Tree Index (Balanced)**
```
Root
  |
Branches - Supports range queries
  |
Leaves - Contains data/pointers

Query: WHERE age BETWEEN 25 AND 35
- Find 25 in B-Tree
- Traverse to 35
- Returns all records in range
```

**Hash Index (Fast Equality)**
```
Hash Function: id % bucket_count
Query: WHERE id = 123
- Hash(123) = bucket_5
- Direct lookup (O(1))
- Cannot handle range queries
```

**Bitmap Index (Low Cardinality)**
```
Column: Gender (M, F)
Bitmap for M: 10101010
Bitmap for F: 01010101

Query: WHERE gender = 'M'
- Return positions with 1
- Very fast for low cardinality
```

### 1.4 Query Optimization

**Execution Plan**
```
Query: SELECT * FROM users WHERE age > 30 AND country = 'USA'

Plan 1 (Bad):
- Full table scan (100M rows)
- Filter age > 30
- Filter country = 'USA'

Plan 2 (Good):
- Index on (country, age)
- Range lookup: country='USA' AND age > 30
- Much fewer rows scanned
```

**Cost Estimation**
```
Cost = (Pages read) + (CPU operations) + (Network transfer)

Full Scan: Read all 10,000 pages = High cost
Index: Read 100 pages = Low cost
```

### 1.5 Isolation Levels

```
Level 1: READ UNCOMMITTED
- Dirty reads allowed
- Fastest, least safe
- Risk: Read uncommitted changes

Level 2: READ COMMITTED
- Dirty reads prevented
- Non-repeatable reads possible
- Moderate safety

Level 3: REPEATABLE READ
- Non-repeatable reads prevented
- Phantom reads possible
- High safety

Level 4: SERIALIZABLE
- All phenomena prevented
- Slowest, most safe
- Treats concurrent transactions as sequential
```

### 1.6 Write-Ahead Logging (WAL)

```
Transaction: Insert row 1, Insert row 2

Process:
1. Write to LOG: "Insert row 1"
2. Write to LOG: "Insert row 2"
3. Flush log to disk
4. Apply changes to database
5. Mark transaction committed in log

On Crash:
- Replay log from last checkpoint
- Recover uncommitted transactions
- Ensure durability
```

### 1.7 Deadlock Handling

```
Situation:
Transaction 1: Lock Row A, then Lock Row B
Transaction 2: Lock Row B, then Lock Row A
Result: DEADLOCK (circular wait)

Detection:
- Build wait-for graph
- If cycle detected, abort one transaction
- Victim selection: Youngest/cheapest transaction

Prevention:
- Always acquire locks in same order
- Use timeout
- Use lock manager
```

### 1.8 Query Caching

```
Query: SELECT COUNT(*) FROM users WHERE country = 'USA'
Result: 50,000,000

Cache:
- Store result with TTL (time-to-live)
- If same query within TTL: return cached
- If table updates: invalidate cache

Tradeoff:
- Pros: Extremely fast for repeated queries
- Cons: Stale data
```

### 1.9 Database Partitioning

**Range Partitioning**
```
Table: orders (1 billion rows)

Partition 1: created_at < 2024-01-01
Partition 2: 2024-01-01 <= created_at < 2024-02-01
Partition 3: created_at >= 2024-02-01

Benefits:
- Smaller partitions faster to query
- Parallel processing
- Easier maintenance
```

**Hash Partitioning**
```
Partition = hash(user_id) % 100

User 1: hash=1, partition 1
User 2: hash=102, partition 2
User 3: hash=203, partition 3

Benefits:
- Evenly distributed
- Load balanced
```

---

## Module 2: STORAGE ENGINES

### 2.1 Buffer Pool Management

```
Physical Memory (Buffer Pool):
+--------+--------+--------+--------+
| Page 1 | Page 2 | Page 3 | Page 4 |
+--------+--------+--------+--------+

Disk (Storage):
[===== Millions of Pages ===== ]

Process:
1. Request data from page 1000
2. Check if page in buffer
3. If not, load from disk
4. If buffer full, evict LRU page
5. Return data from buffer
```

### 2.2 B-Tree Structure

```
         [10, 20, 30]
        /     |      \
    [1-9] [11-19] [21-29] [31+]

Insertion of 25:
1. Find leaf [21-29]
2. Insert: [21-25-29]
3. If overflow: split node
4. Promote middle to parent

Properties:
- Balanced: All leaves at same depth
- Range queries efficient
- Used in most databases
```

### 2.3 LSM Trees (Log-Structured Merge)

```
Write Flow:
MemTable (in-memory) -> Sorted Run File 1 -> Level 1
-> Compacted to Level 2 -> ... -> Level N (oldest)

Advantages:
- Fast writes: Sequential I/O
- Compaction amortizes cost
- No random I/O during write

Disadvantages:
- Slower reads: Check multiple levels
- Compaction CPU overhead
```

### 2.4 Compression Techniques

**Dictionary Compression**
```
Value: "USA", "USA", "UK", "USA"
Dictionary: USA=1, UK=2
Compressed: 1, 1, 2, 1

Saves: 50% space in example
```

**Run-Length Encoding**
```
Values: AAABBAAA
Encoded: 3A2B3A

Saves: 62% space
Inefficient for random data
```

**Delta Encoding**
```
Timestamps: 1000, 1010, 1020, 1035
First: 1000
Deltas: 10, 10, 15

Saves: Space on repetitive values
```

### 2.5 Column-Oriented Storage

```
Row-oriented (Traditional):
Row1: John, 30, USA
Row2: Jane, 25, UK
Row3: Bob, 35, USA

Query: SELECT age FROM users WHERE country='USA'
Problem: Must read entire rows

Column-oriented:
Names: John, Jane, Bob
Ages: 30, 25, 35
Countries: USA, UK, USA

Query: SELECT age WHERE country='USA'
Benefit: Read only two columns
Great for analytics, OLAP
```

### 2.6 Bloom Filter

```
Element: "user:123"
Hash Functions: h1, h2, h3, h4

Bit Array: [0, 1, 0, 1, 0, 1, 0]

Insert "user:123":
- h1(key) = position 1 -> set 1
- h2(key) = position 3 -> set 1
- h3(key) = position 5 -> set 1
- h4(key) = position 6 -> set 1

Lookup "user:123":
- Check positions: all 1 -> MAYBE exists

Lookup "user:456":
- Check positions: one 0 -> DEFINITELY not exists

False Positives: Possible (all 1s by chance)
False Negatives: Impossible
Space: Very efficient
```

---

## Module 3: NoSQL DATABASES

### 3.1 Key-Value Stores (Redis)

```
Store: key -> value

Operations:
SET key1 value1
GET key1 -> "value1"
DEL key1
INCR counter
EXPIRE key1 3600 (TTL)

Use Cases:
- Caching
- Session storage
- Leaderboards
- Rate limiting
```

### 3.2 Document Databases (MongoDB)

```
Collection: users
Document: {
  _id: ObjectId(),
  name: "John",
  email: "john@example.com",
  preferences: {
    theme: "dark",
    notifications: true
  }
}

Query:
db.users.find({ name: "John" })
db.users.update({ _id: 123 }, { $set: { theme: "light" } })

Benefits:
- Flexible schema
- Nested documents
- Indexing support
```

### 3.3 Graph Databases (Neo4j)

```
Nodes: (User)-[:FOLLOWS]->(User)
       (User)-[:LIKES]->(Post)

Query: Friends of friends
MATCH (u1:User)-[:FOLLOWS]->(u2:User)-[:FOLLOWS]->(u3:User)
WHERE u1.id = 123

Use Cases:
- Social networks
- Recommendation engines
- Knowledge graphs
```

### 3.4 Wide-Column Stores (Cassandra)

```
Row Key: user_123
Column Families: profile, preferences, activity

user_123 -> profile:name="John",
            profile:email="john@example.com"
            preferences:theme="dark"

Partitioned by row key
Columns can be added dynamically
High write throughput
```

### 3.5 Time-Series Databases

```
Metric: cpu_usage
Data: [(timestamp, value), ...]
       [(1000, 50%), (1001, 55%), (1002, 60%)]

Queries:
- Range: Last hour
- Aggregate: Average, max, min
- Resample: Group by minute

Optimizations:
- Compress old data
- Partition by time
- Downsampling
```

---

## Module 4: DATA CONSISTENCY

### 4.1 Master-Slave Replication

```
Master (writes)
  |
  |-- Replication log
  |
Slave 1 (reads)
Slave 2 (reads)

Write: Insert row 123
1. Write to master
2. Log to replication stream
3. Slaves read and apply log
4. Slaves update their copy

Failover:
- Master fails
- Promote slave to master
- Update write endpoint
```

### 4.2 Multi-Master Replication

```
Master A <--> Master B
Both accept writes

Write to A: SET key1 value1
Write to B: SET key1 value2

Conflict:
- Last-write-wins: Use timestamp
- Vector clocks: Track causality
- Application logic: Custom resolution
```

### 4.3 Vector Clocks

```
Process A: [1, 0, 0]
Process B: [0, 1, 0]
Process C: [0, 0, 1]

Process A sends message:
New clock: [2, 0, 0]

B receives from A and updates:
New clock: [2, 1, 0]

C receives from B and updates:
New clock: [2, 1, 1]

Property: Can determine causality
Event 1 -> Event 2 if clock 1 < clock 2 (componentwise)
```

### 4.4 Quorum Consistency

```
N = 3 replicas

Strong Consistency:
Write quorum (W=2): Write to 2+ replicas
Read quorum (R=2): Read from 2+ replicas
Guarantee: Always read latest write

Weak Consistency:
W=1: Write to 1 replica
R=1: Read from 1 replica
Risk: Read may miss recent write
```

### 4.5 Conflict Resolution

**Last-Write-Wins**
```
Write 1: key=value1, timestamp=1000
Write 2: key=value2, timestamp=1001

Result: value2 (latest timestamp)
Risk: Loses write 1
```

**Custom Resolution**
```
Version 1: {items: [A, B]}
Version 2: {items: [A, C]}

Merge: {items: [A, B, C]} (union)
Or: Notify user to resolve manually
```

---

## Module 5: SQL OPTIMIZATION

### 5.1 Execution Plans

```
Query: SELECT * FROM users WHERE country='USA' AND age > 30

Plan 1 (Full Scan):
1. Read all 100M rows
2. Filter country='USA' (50M rows)
3. Filter age > 30 (25M rows)
Cost: Very high

Plan 2 (Index):
1. Index on (country, age)
2. Lookup 'USA' and > 30 directly
3. Return 25M rows
Cost: Low

EXPLAIN PLAN shows chosen plan
```

### 5.2 Index Selection

```
Query Pattern: WHERE name = 'John' AND age > 30

Option 1: Index on (name, age)
- Hash first (name)
- B-Tree second (age)
- Efficient

Option 2: Separate indexes on name and age
- Use name index to find "John"
- Then check age > 30
- Less efficient
```

### 5.3 Join Optimization

**Nested Loop Join**
```
FOR each row in Table A:
  FOR each row in Table B:
    Check join condition
    
Cost: O(n * m)
Slow for large tables
```

**Hash Join**
```
1. Build hash table from Table B
2. FOR each row in Table A:
   - Hash join key
   - Lookup in hash table
   
Cost: O(n + m)
Fast for large tables
```

**Sort-Merge Join**
```
1. Sort both tables by join key
2. Iterate through both, matching on join key
   
Cost: O(n log n + m log m)
Good if tables already sorted
```

### 5.4 Subquery Optimization

**Original (Slow)**
```
SELECT * FROM orders o
WHERE o.user_id IN (
  SELECT id FROM users WHERE country='USA'
)

Problem: Subquery evaluated for each row
```

**Optimized (Fast - Push Down)**
```
SELECT * FROM orders o
JOIN users u ON o.user_id = u.id
WHERE u.country = 'USA'

Benefit: Join is evaluated once
```

---

## Interview Tips & Patterns

### 1. When to use which database?
- **Relational**: Structured data, ACID requirements, complex queries
- **Key-Value**: Caching, sessions, fast lookups
- **Document**: Flexible schema, nested data
- **Graph**: Relationships, recommendations
- **Time-Series**: Metrics, logs, monitoring

### 2. Scaling strategies:
- **Vertical**: Add more CPU/RAM (limited)
- **Horizontal**: Add more machines (replication/sharding)
- **Read scaling**: Replicate for reads
- **Write scaling**: Partition/shard data

### 3. Consistency tradeoffs:
- **Strong**: Always consistent, lower availability
- **Eventual**: Higher availability, temporary inconsistency
- Choose based on use case

### 4. Common mistakes:
- Missing indexes
- No query optimization
- Wrong data structure
- Not considering scale
- Ignoring replication lag

### 5. Design checklist:
- [] Identify requirements (throughput, latency, consistency)
- [] Choose appropriate database
- [] Design schema/model
- [] Plan for scale (partitioning, replication)
- [] Plan for failures (backup, recovery, failover)
- [] Optimize queries/indexes
- [] Monitor and measure

---

## Key Formulas & Calculations

**Quorum Consistency**: W + R > N (ensures read latest)

**B-Tree Complexity**: O(log n) for search/insert/delete

**Hash Index Complexity**: O(1) for equality, N/A for range

**Database Cost**: (Pages read) + (CPU) + (Memory) + (Network)

**Compression Ratio**: Compressed size / Original size

**Replication Lag**: Master write → Slave apply (should be < 1s)

---

## Resources for Further Learning

1. Database textbooks (DDIA, Designing Data-Intensive Applications)
2. SQL/NoSQL documentation
3. Open source databases (PostgreSQL, MySQL, MongoDB)
4. Blog posts on consistency, replication, optimization
5. Real production systems (AWS, Google Cloud, Azure)

---

## Practice Summary

**40+ Practice Problems Cover:**
- Social media database design
- E-commerce schema
- Messaging systems
- Time-series metrics
- Search indexing
- Query optimization
- Index strategy
- NoSQL database design
- Replication patterns
- Consistency handling

**All problems include:**
- Clear requirements
- Solution explanation
- Implementation examples
- Complexity analysis
- Real-world tradeoffs
- Best practices

---

**MASTERY ACHIEVED**: Day 21 complete. You now understand database systems comprehensively.
