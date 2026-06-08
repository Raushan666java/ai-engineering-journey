# 💾 Database Design - Complete Deep Dive

## Table of Contents
1. [SQL vs NoSQL](#sql-vs-nosql)
2. [Database Normalization](#database-normalization)
3. [Indexing Strategies](#indexing-strategies)
4. [Sharding & Partitioning](#sharding--partitioning)
5. [Replication](#replication)
6. [ACID vs BASE](#acid-vs-base)
7. [Query Optimization](#query-optimization)

---

## SQL vs NoSQL

### When to Use SQL
```
Use Cases:
✅ Complex queries with JOINs
✅ ACID transactions required
✅ Structured data with relationships
✅ Financial systems, banking
✅ E-commerce orders
✅ Inventory management

Examples: PostgreSQL, MySQL, Oracle
```

### When to Use NoSQL
```
Use Cases:
✅ Massive scale (billions of records)
✅ Flexible schema
✅ High write throughput
✅ Real-time analytics
✅ Social media feeds
✅ IoT sensor data

Types:
- Document: MongoDB, CouchDB
- Key-Value: Redis, DynamoDB
- Column-Family: Cassandra, HBase
- Graph: Neo4j, ArangoDB
```

### Comparison
```
Feature          SQL              NoSQL
─────────────────────────────────────────────
Schema           Fixed            Flexible
Scaling          Vertical         Horizontal
Transactions     ACID             BASE
Joins            Efficient        Avoid/Denormalize
Consistency      Strong           Eventual
Query Language   SQL              Varies
Best For         Complex queries  High throughput
```

---

## Database Normalization

### 1NF (First Normal Form)
```sql
-- Violation: Multiple values in one column
CREATE TABLE orders (
    order_id INT,
    customer_name VARCHAR(100),
    products VARCHAR(500)  -- "Laptop, Mouse, Keyboard"
);

-- Fixed: Atomic values
CREATE TABLE orders (
    order_id INT,
    customer_name VARCHAR(100)
);

CREATE TABLE order_items (
    order_id INT,
    product_name VARCHAR(100)
);
```

### 2NF (Second Normal Form)
```sql
-- Violation: Partial dependency
CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    product_name VARCHAR(100),  -- Depends only on product_id
    quantity INT,
    PRIMARY KEY (order_id, product_id)
);

-- Fixed: Remove partial dependencies
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100)
);

CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id)
);
```

### 3NF (Third Normal Form)
```sql
-- Violation: Transitive dependency
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100),
    dept_id INT,
    dept_name VARCHAR(100)  -- Depends on dept_id, not emp_id
);

-- Fixed: Remove transitive dependencies
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100)
);

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);
```

### Denormalization (When to Break Rules)
```sql
-- Normalized (3 JOINs required)
SELECT o.order_id, c.name, p.name, oi.quantity
FROM orders o
JOIN customers c ON o.customer_id = c.id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.id;
-- Query time: 500ms

-- Denormalized (no JOINs)
CREATE TABLE order_details (
    order_id INT,
    customer_name VARCHAR(100),  -- Duplicated
    product_name VARCHAR(100),   -- Duplicated
    quantity INT
);

SELECT * FROM order_details WHERE order_id = 123;
-- Query time: 5ms

Trade-off: 100x faster reads, but data duplication
```

---

## Indexing Strategies

### B-Tree Index (Default)
```sql
CREATE INDEX idx_email ON users(email);

-- How it works:
        [M]
       /   \
    [A-L]  [N-Z]
    /  \    /  \
  [A-F][G-L][N-S][T-Z]

-- Query: SELECT * FROM users WHERE email = 'john@example.com'
-- Steps: Root → N-Z → N-S → Find 'john@example.com'
-- Time: O(log N) = 3 steps for 1M records

-- Without index: O(N) = 1M steps
```

### Composite Index
```sql
CREATE INDEX idx_name_age ON users(last_name, first_name, age);

-- Efficient queries:
SELECT * FROM users WHERE last_name = 'Smith';  ✅
SELECT * FROM users WHERE last_name = 'Smith' AND first_name = 'John';  ✅
SELECT * FROM users WHERE last_name = 'Smith' AND age = 30;  ✅

-- Inefficient queries:
SELECT * FROM users WHERE first_name = 'John';  ❌ (skips first column)
SELECT * FROM users WHERE age = 30;  ❌ (skips first two columns)

Rule: Index used left-to-right only
```

### Covering Index
```sql
-- Query needs: id, email, created_at
CREATE INDEX idx_covering ON users(email, created_at, id);

SELECT id, email, created_at 
FROM users 
WHERE email = 'john@example.com';

-- Index contains all needed columns
-- No table lookup required (index-only scan)
-- Performance: 10x faster
```

### Partial Index
```sql
-- Only index active users (90% of queries)
CREATE INDEX idx_active_users ON users(email) 
WHERE status = 'active';

-- Index size: 10% of full index
-- Query speed: Same as full index
-- Storage saved: 90%
```

### Index Maintenance Cost
```
Operation    Without Index    With Index
────────────────────────────────────────
SELECT       Slow (scan)      Fast (seek)
INSERT       Fast             Slower (update index)
UPDATE       Fast             Slower (update index)
DELETE       Fast             Slower (update index)

Rule: Add indexes for read-heavy tables, avoid for write-heavy
```

---

## Sharding & Partitioning

### Horizontal Partitioning (Sharding)
```sql
-- Single table: 1 billion users
users (user_id, name, email, created_at)

-- Shard by user_id range
Shard 1: user_id 0-249M
Shard 2: user_id 250M-499M
Shard 3: user_id 500M-749M
Shard 4: user_id 750M-999M

-- Query routing
def get_shard(user_id):
    return user_id // 250_000_000

-- Benefits:
- Each shard: 250M records (manageable)
- Parallel queries (4x throughput)
- Independent scaling
```

### Sharding Strategies

#### 1. Range-Based Sharding
```python
def get_shard(user_id):
    if user_id < 1000000:
        return "shard_1"
    elif user_id < 2000000:
        return "shard_2"
    else:
        return "shard_3"

# Pros: Simple, range queries efficient
# Cons: Uneven distribution (hotspots)
```

#### 2. Hash-Based Sharding
```python
def get_shard(user_id):
    return hash(user_id) % num_shards

# Pros: Even distribution
# Cons: Range queries require all shards
```

#### 3. Geographic Sharding
```python
def get_shard(user_id):
    user_country = get_user_country(user_id)
    return f"shard_{user_country}"

# Shard US: US users
# Shard EU: European users
# Shard ASIA: Asian users

# Pros: Low latency, data locality
# Cons: Uneven distribution
```

### Vertical Partitioning
```sql
-- Single table with many columns
users (id, name, email, bio, profile_pic, settings, preferences, ...)

-- Split into hot and cold data
users_hot (id, name, email)  -- Accessed frequently
users_cold (id, bio, profile_pic, settings)  -- Accessed rarely

-- Benefits:
- Smaller hot table (fits in memory)
- Faster queries on hot data
- Separate scaling strategies
```

---

## Replication

### Master-Slave Replication
```
Architecture:
Master (writes) → Slave 1 (reads)
                → Slave 2 (reads)
                → Slave 3 (reads)

Write flow:
Client → Master → Replicate to Slaves

Read flow:
Client → Load Balancer → [Slave 1, Slave 2, Slave 3]

Benefits:
- Read scaling (3x capacity)
- High availability (slaves can promote)
- Backup (slaves have full copy)

Challenges:
- Replication lag (eventual consistency)
- Master bottleneck (all writes)
```

### Replication Lag
```
Time    Master          Slave 1         Slave 2
0ms     balance=$100    balance=$100    balance=$100
10ms    balance=$50     balance=$100    balance=$100  ← Lag
50ms    balance=$50     balance=$50     balance=$100  ← Lag
100ms   balance=$50     balance=$50     balance=$50   ✅

Solutions:
1. Read from master (strong consistency)
2. Read-your-writes (session affinity)
3. Accept eventual consistency
```

### Multi-Master Replication
```
Architecture:
Master 1 ↔ Master 2 ↔ Master 3

Benefits:
- Write scaling
- No single point of failure
- Geographic distribution

Challenges:
- Conflict resolution
- Complex setup
- Consistency issues

Conflict Example:
Time    Master 1 (US)       Master 2 (EU)
0ms     balance=$100        balance=$100
10ms    withdraw $50        withdraw $30
20ms    balance=$50         balance=$70

Resolution strategies:
- Last-write-wins (timestamp)
- Application-level resolution
- CRDT (Conflict-free Replicated Data Types)
```

---

## ACID vs BASE

### ACID (SQL Databases)
```
Atomicity: All or nothing
Example:
BEGIN TRANSACTION;
  UPDATE accounts SET balance = balance - 100 WHERE id = 1;
  UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
-- Both updates succeed or both fail

Consistency: Valid state always
Example:
CHECK (balance >= 0)  -- Constraint enforced

Isolation: Concurrent transactions don't interfere
Example:
Transaction 1: Read balance=$100
Transaction 2: Read balance=$100
Transaction 1: Write balance=$50
Transaction 2: Write balance=$80  -- Conflict detected

Durability: Committed data persists
Example:
COMMIT;  -- Data written to disk, survives crashes
```

### BASE (NoSQL Databases)
```
Basically Available: System responds (maybe stale data)
Soft state: State may change without input (replication)
Eventual consistency: Eventually consistent

Example - DynamoDB:
Time    Node 1          Node 2          Node 3
0ms     balance=$100    balance=$100    balance=$100
10ms    balance=$50     balance=$100    balance=$100
50ms    balance=$50     balance=$50     balance=$100
100ms   balance=$50     balance=$50     balance=$50

Trade-off: High availability > Strong consistency
```

---

## Query Optimization

### EXPLAIN ANALYZE
```sql
EXPLAIN ANALYZE
SELECT * FROM orders WHERE customer_id = 123;

-- Output:
Seq Scan on orders  (cost=0.00..1000.00 rows=1 width=100)
  Filter: (customer_id = 123)
  Planning time: 0.5ms
  Execution time: 500ms

-- Problem: Sequential scan (reads all rows)

-- Add index:
CREATE INDEX idx_customer ON orders(customer_id);

-- New output:
Index Scan using idx_customer on orders  (cost=0.00..8.00 rows=1)
  Index Cond: (customer_id = 123)
  Execution time: 5ms

-- Result: 100x faster
```

### Query Patterns

#### N+1 Query Problem
```python
# Bad: N+1 queries
users = db.query("SELECT * FROM users LIMIT 10")  # 1 query
for user in users:
    posts = db.query(f"SELECT * FROM posts WHERE user_id = {user.id}")  # N queries
# Total: 11 queries

# Good: 2 queries with JOIN
results = db.query("""
    SELECT u.*, p.*
    FROM users u
    LEFT JOIN posts p ON u.id = p.user_id
    LIMIT 10
""")
# Total: 1 query
```

#### Pagination
```sql
-- Bad: OFFSET (slow for large offsets)
SELECT * FROM posts 
ORDER BY created_at DESC 
LIMIT 10 OFFSET 1000000;
-- Reads 1,000,010 rows, returns 10

-- Good: Cursor-based (keyset pagination)
SELECT * FROM posts 
WHERE created_at < '2024-01-01 00:00:00'
ORDER BY created_at DESC 
LIMIT 10;
-- Reads 10 rows, returns 10
```

#### Batch Operations
```sql
-- Bad: Individual inserts
INSERT INTO users (name) VALUES ('User1');
INSERT INTO users (name) VALUES ('User2');
-- 1000 inserts = 1000 transactions

-- Good: Batch insert
INSERT INTO users (name) VALUES 
('User1'), ('User2'), ..., ('User1000');
-- 1000 inserts = 1 transaction
-- Performance: 100x faster
```

---

## Summary

### Database Selection Guide
```
Requirement              Database Choice
────────────────────────────────────────────
Complex queries          PostgreSQL
High write throughput    Cassandra
Real-time analytics      ClickHouse
Caching                  Redis
Document storage         MongoDB
Graph relationships      Neo4j
Time-series data         InfluxDB
Full-text search         Elasticsearch
```

### Optimization Checklist
- [ ] Add indexes on WHERE/JOIN columns
- [ ] Use composite indexes for multi-column queries
- [ ] Implement connection pooling
- [ ] Use read replicas for read-heavy workloads
- [ ] Shard database for horizontal scaling
- [ ] Cache frequent queries
- [ ] Optimize N+1 queries
- [ ] Use batch operations
- [ ] Monitor slow queries
- [ ] Regular VACUUM/ANALYZE (PostgreSQL)

---

**Next**: [04_API_Design_Complete.md](./04_API_Design_Complete.md)
