# Database Scaling — Replication, Sharding, and Indexing

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand database replication strategies |
| LO2 | Implement horizontal sharding for write scaling |
| LO3 | Design effective database indexes for query performance |
| LO4 | Use connection pooling to manage database connections |
| LO5 | Implement read replicas for read-heavy workloads |
| LO6 | Choose between SQL and NoSQL based on requirements |

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 5.1 | Replication | Leader-follower, multi-leader, quorum |
| 5.2 | Read Replicas | Offloading reads, lag handling |
| 5.3 | Sharding | Horizontal partitioning, shard key |
| 5.4 | Indexing | B-tree, hash, composite, covering |
| 5.5 | Connection Pooling | Managing database connections |
| 5.6 | SQL vs NoSQL | Use case selection, trade-offs |
| 5.7 | Denormalization | Read optimization strategies |
| 5.8 | Migration Strategies | Zero-downtime schema changes |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Replication] --> B[Read Replicas]
    B --> C[Sharding]
    C --> D[Indexing]
    D --> E[Connection Pooling]
    E --> F[SQL vs NoSQL]
    F --> G[Denormalization]
    G --> H[Migrations]
```

## 5.1 Replication

Replication copies data from one database to another for redundancy and read scaling.

**Leader-follower (single leader)**: One leader handles writes, followers replicate for reads.

```mermaid
flowchart TD
    L[Leader - Writes] --> F1[Follower - Reads]
    L --> F2[Follower - Reads]
    L --> F3[Follower - Reads]
    App -->|write| L
    App -->|read| F1
    App -->|read| F2
```

**Multi-leader**: Multiple leaders accept writes, replicate to each other. Complex conflict resolution.

**Quorum-based**: Write to N nodes, read from N nodes, require majority consensus.

## 5.2 Read Replicas

For read-heavy workloads, add read replicas and route SELECT queries to them.

```python
class DatabaseRouter:
    def __init__(self, master, replicas):
        self.master = master
        self.replicas = replicas
        self.replica_index = 0

    def write(self, query, params=None):
        return self.master.execute(query, params)

    def read(self, query, params=None):
        self.replica_index = (self.replica_index + 1) % len(self.replicas)
        return self.replicas[self.replica_index].execute(query, params)
```

**Replication lag**: Time between write to leader and availability on replicas. Handle with:
- Read-after-write consistency (read your writes)
- Monitor lag and pause read replicas if too far behind
- Use synchronous replication for critical data

## 5.3 Sharding

Sharding splits data across multiple databases horizontally.

```python
class ShardManager:
    def __init__(self, shards):
        self.shards = shards  # List of DB connections

    def _get_shard(self, shard_key):
        # Hash-based sharding
        shard_id = hash(shard_key) % len(self.shards)
        return self.shards[shard_id]

    def get_user(self, user_id):
        shard = self._get_shard(user_id)
        return shard.query("SELECT * FROM users WHERE id = ?", user_id)

    def create_user(self, user):
        shard = self._get_shard(user["id"])
        return shard.execute("INSERT INTO users ...", user)
```

**Shard key selection** criteria: high cardinality, even distribution, matches query patterns.

**Re-sharding**: When a shard grows too large. Options: hash ring with virtual nodes, range-based with splitting.

## 5.4 Indexing

Indexes speed up data retrieval at the cost of write performance and storage.

```sql
-- B-tree index (default)
CREATE INDEX idx_users_email ON users(email);

-- Composite index (column order matters!)
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- Partial index
CREATE INDEX idx_active_users ON users(is_active) WHERE is_active = true;

-- Covering index (includes all needed columns)
CREATE INDEX idx_order_lookup ON orders(user_id, status, total);

-- Hash index (equality lookups only)
CREATE INDEX idx_session_id ON sessions USING HASH(session_id);
```

| Index Type | Use Case | Best For |
|------------|----------|----------|
| B-tree | General purpose | Range, sort, equality |
| Hash | Exact match | Primary key lookups |
| GiST | Full-text, geospatial | Search, coordinates |
| GIN | Arrays, JSONB | Multi-value columns |
| BRIN | Large, sorted data | Time-series |

**Query analysis**:

```sql
-- Explain query plan
EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 123;

-- Find slow queries (PostgreSQL)
SELECT query, calls, total_time, mean_time
FROM pg_stat_statements
ORDER BY total_time DESC
LIMIT 10;
```

## 5.5 Connection Pooling

Creating a new database connection for each request is expensive. Connection pooling reuses connections.

```python
from psycopg2 import pool

class DatabasePool:
    def __init__(self, min_conn=2, max_conn=10):
        self.pool = pool.ThreadedConnectionPool(
            min_conn, max_conn,
            host="localhost", database="mydb",
            user="user", password="pass"
        )

    def execute(self, query, params=None):
        conn = self.pool.getconn()
        try:
            cursor = conn.cursor()
            cursor.execute(query, params)
            conn.commit()
            return cursor.fetchall()
        finally:
            self.pool.putconn(conn)
```

**Pool sizing**: Too small -> connection queue, request queuing. Too large -> database overload. Rule of thumb: `(cores * 2) + effective_spindle_count`.

## 5.6 SQL vs NoSQL

| Aspect | SQL (PostgreSQL) | NoSQL (MongoDB) |
|--------|-----------------|-----------------|
| Schema | Fixed, rigid | Flexible, dynamic |
| ACID | Full ACID | BASE (eventual consistency) |
| Queries | Complex joins, aggregations | Simple key-value lookups |
| Scaling | Vertical primarily (read replicas) | Horizontal natively (sharding) |
| Use case | Financial, reporting | IoT, sessions, content |

**When to choose SQL**: Complex relationships, ACID requirements, structured data, reporting/analytics.

**When to choose NoSQL**: Flexible schema, high write throughput, simple queries, horizontal scaling, document/JSON data.

## 5.7 Denormalization

Denormalization adds redundant data to avoid expensive joins at read time.

```sql
-- Normalized (3NF)
SELECT * FROM orders o
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
WHERE o.user_id = 123;

-- Denormalized (store product name in order_items)
CREATE TABLE order_items (
    order_id UUID,
    product_id UUID,
    product_name TEXT,  -- Denormalized
    quantity INT,
    price DECIMAL
);
```

**Trade-off**: Faster reads, slower writes, data inconsistency risk, more storage.

## 5.8 Migration Strategies

**Zero-downtime migrations** for schema changes:

```sql
-- 1. Add column as nullable
ALTER TABLE users ADD COLUMN email_verified BOOLEAN DEFAULT false;

-- 2. Backfill in batches
UPDATE users SET email_verified = true
WHERE email_verified IS NULL
AND email IS NOT NULL
LIMIT 1000;

-- 3. Add NOT NULL constraint
ALTER TABLE users ALTER COLUMN email_verified SET NOT NULL;
```

**Online schema change tools**:
- pt-online-schema-change (Percona)
- gh-ost (GitHub)
- pgroll (PostgreSQL)

---

## TypeScript Parallel

```typescript
interface ShardConfig {
  host: string;
  port: number;
  shardId: number;
}

class ShardManager {
  private shards: ShardConfig[];

  constructor(shards: ShardConfig[]) {
    this.shards = shards;
  }

  getShard(key: string): ShardConfig {
    const hash = Array.from(key).reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return this.shards[hash % this.shards.length];
  }
}
```

---

## Summary

- Leader-follower replication provides read scaling and failover capability
- Read replicas offload SELECT queries but introduce replication lag
- Sharding distributes data horizontally using hash or range-based partitioning
- Indexes (B-tree, hash, GiST, GIN) dramatically speed up queries at write cost
- Connection pooling reuses database connections to reduce overhead
- SQL databases excel at complex queries and ACID; NoSQL at flexible schemas and horizontal scaling
- Denormalization reduces join overhead but risks data inconsistency
- Zero-downtime migrations use incremental changes to avoid downtime
- Read-after-write consistency ensures users see their own writes
- Monitor slow queries and index usage for ongoing optimization

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Read-heavy workload | Add read replicas | Scaling only the primary |
| Write-heavy workload | Shard by user_id or tenant | Single database |
| Slow queries | Add covering indexes | Adding indexes without analyzing |
| Schema changes | gh-ost or pgroll for online migration | Locking tables during migration |
| Connections | Connection pooling | Creating new connection per request |
| Complex relationships | SQL database | Storing relational data in NoSQL |
| Flexible schema | NoSQL document database | ALTER TABLE every week |

## Interview Q&A

<details class="tp-qa-card" data-qid="sysdes-s05-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q1: What is database replication?</summary>
  <div class="tp-qa-answer"><p>Copying data from one database to another. Leader-follower (single leader, followers for reads), multi-leader (multiple writers, complex conflict resolution), quorum (majority consensus for consistency).</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s05-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q2: How do you handle replication lag?</summary>
  <div class="tp-qa-answer"><p>Read-after-write consistency: after write, read from leader for that user's requests. Monitor lag with tools, pause replicas if too far behind. Use synchronous replication for critical data.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s05-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q3: How do you choose a shard key?</summary>
  <div class="tp-qa-answer"><p>High cardinality (many distinct values), even distribution across shards, matches query patterns. User ID, tenant ID, and location are common. Avoid monotonically increasing keys (hot shard).</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s05-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q4: What is a composite index and how do you order columns?</summary>
  <div class="tp-qa-answer"><p>Index on multiple columns. Order matters: put high-selectivity (most unique) columns first for equality conditions, range conditions last. A composite index can be used for queries on (a), (a,b), (a,b,c) but not (b) alone.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s05-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q5: What is connection pooling?</summary>
  <div class="tp-qa-answer"><p>Reusing database connections instead of creating a new one per request. Pool maintains a set of open connections. Applications borrow and return them. Reduces connection overhead (TCP handshake, auth).</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s05-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q6: SQL vs NoSQL trade-offs?</summary>
  <div class="tp-qa-answer"><p>SQL: complex queries, ACID, structured schemas, vertical scaling. NoSQL: flexible schemas, high write throughput, native horizontal scaling, simple queries, eventual consistency.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s05-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q7: What is denormalization?</summary>
  <div class="tp-qa-answer"><p>Adding redundant data to avoid joins. Improves read performance at cost of write complexity and storage. Example: storing product_name in order_items instead of joining with products table.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s05-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q8: How do you perform zero-downtime schema migration?</summary>
  <div class="tp-qa-answer"><p>Add column as nullable, backfill in batches, add NOT NULL. Use tools like gh-ost or pgroll. For larger changes, use versioned views or expand-contract pattern (add new column, dual-write, migrate, drop old).</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s05-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q9: What is a covering index?</summary>
  <div class="tp-qa-answer"><p>An index that includes all columns needed by a query, so the database can satisfy it without accessing the table. Example: index on (user_id, status, total) for SELECT total FROM orders WHERE user_id=123 AND status='paid'.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="sysdes-s05-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q10: How do you handle database backpressure?</summary>
  <div class="tp-qa-answer"><p>Connection pooling (limit connections), query timeouts, circuit breakers (if DB is slow, fail fast), queue writes, implement backpressure throttle (reject requests when queue depth exceeds threshold).</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which replication model has a single write node?

a) Multi-leader
b) Leader-follower
c) Quorum
d) Peer-to-peer

<details class="tp-qa-card" data-qid="sysdes-s05-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Leader-follower</strong></p></div></details>

**Q2**: What index type is best for equality lookups?

a) B-tree
b) Hash
c) GiST
d) GIN

<details class="tp-qa-card" data-qid="sysdes-s05-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Hash</strong></p></div></details>

**Q3**: What does connection pooling solve?

a) Slow queries
b) Connection overhead
c) Data consistency
d) Replication lag

<details class="tp-qa-card" data-qid="sysdes-s05-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Connection overhead</strong></p></div></details>

**Q4**: Which sharding method uses a lookup table?

a) Range-based
b) Hash-based
c) Directory-based
d) List-based

<details class="tp-qa-card" data-qid="sysdes-s05-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Directory-based</strong></p></div></details>

**Q5**: What concept adds redundant data to avoid joins?

a) Normalization
b) Denormalization
c) Indexing
d) Partitioning

<details class="tp-qa-card" data-qid="sysdes-s05-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Denormalization</strong></p></div></details>

## Exercises

**Easy** — Set up PostgreSQL with one leader and one replica. Write to leader, read from replica. Measure replication lag.

**Medium** — Implement a connection pool for PostgreSQL. Configure min/max connections. Write a load test that uses the pool vs creating new connections each time. Compare performance.

**Medium** — Design a sharding strategy for a user database with 100M users. Choose a shard key, calculate number of shards, implement the router.

**Hard** — Design a database scaling solution for a social media platform: users, posts, comments, likes. Address: read replicas for feeds, sharding for posts, indexes for search, connection pooling, and denormalization for performance.

**Hard** — Implement a zero-downtime migration: add a new column to a large table, backfill it in batches, add NOT NULL constraint, and verify no downtime.

## Advanced Replication Techniques

**Synchronous vs Asynchronous replication**:

| Type | Consistency | Latency | Use Case |
|------|-------------|---------|----------|
| Sync | Strong (no data loss) | Higher write latency | Financial transactions |
| Async | Eventual | Lower write latency | Read replicas, analytics |
| Quorum | Tunable | Moderate | Distributed databases |
| Semi-sync | At least one follower ack | Moderate | HA with some consistency |

**Multi-leader replication topology**:

```mermaid
flowchart TD
    DC1[Data Center 1] -->|Async replicate| DC2[Data Center 2]
    DC2 -->|Async replicate| DC1
    DC1 --> L1[Leader 1]
    DC1 --> F1[Follower 1]
    DC2 --> L2[Leader 2]
    DC2 --> F2[Follower 2]
    App1[App - Writes to DC1] --> L1
    App2[App - Writes to DC2] --> L2
```

**Conflict resolution strategies**:
- Last-writer-wins (LWW) — use timestamp
- CRDTs (Conflict-Free Replicated Data Types)
- Custom merge logic
- Version vectors + application resolution

## Query Optimization Techniques

**Indexing strategies for common query patterns**:

```sql
-- For equality + range queries (covering index)
CREATE INDEX idx_user_status_date ON orders(user_id, status, created_at);
-- Queries covered:
-- SELECT * FROM orders WHERE user_id = 123 AND status = 'paid'
-- SELECT * FROM orders WHERE user_id = 123 AND created_at > '2024-01-01'

-- For sorting without filesort
CREATE INDEX idx_created_at ON orders(created_at DESC);
-- SELECT * FROM orders ORDER BY created_at DESC LIMIT 10

-- For JOIN performance
CREATE INDEX idx_orders_user_id ON orders(user_id);
-- SELECT * FROM orders JOIN users ON orders.user_id = users.id

-- Partial index for filtered queries
CREATE INDEX idx_active_users ON users(is_active) WHERE is_active = true;
-- SELECT * FROM users WHERE is_active = true (much smaller index)

-- Expression index (PostgreSQL)
CREATE INDEX idx_lower_email ON users(LOWER(email));
-- SELECT * FROM users WHERE LOWER(email) = 'user@example.com'
```

**Query plan analysis**:

```sql
-- Identify slow queries
SELECT query, calls, mean_time, rows, shared_blks_hit, shared_blks_read
FROM pg_stat_statements
ORDER BY mean_time DESC
LIMIT 20;

-- Analyze specific query
EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON)
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id, u.name
ORDER BY order_count DESC;
```

## Database Backup Strategies

| Strategy | RPO | RTO | Complexity |
|----------|-----|-----|------------|
| Full daily + WAL archiving | 1 hour | 4 hours | Medium |
| Continuous archiving (WAL) | Seconds | 1 hour | High |
| Snapshot replication | 1 day | 4 hours | Low |
| Multi-region sync | Minutes | Minutes | Very High |

```bash
# PostgreSQL backup automation
#!/bin/bash
DATABASE="mydb"
BACKUP_DIR="/backups/$(date +%Y%m%d)"
mkdir -p $BACKUP_DIR

# Full backup
pg_dump -h localhost -U admin --format=custom --compress=9 \
    --file="${BACKUP_DIR}/full.backup" $DATABASE

# WAL archiving (continuous)
# postgresql.conf: archive_command = 'cp %p /wal_archive/%f'

# Restore
pg_restore --dbname=mydb --clean --if-exists "${BACKUP_DIR}/full.backup"
```

---

> **Next**: [CAP and Consistency](06-cap-and-consistency.md)
