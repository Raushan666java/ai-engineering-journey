<!-- Clear Language: Keep sentences under 50 words -->
# Indexes & Performance — B-Tree, Hash, Composite, EXPLAIN ANALYZE, Query Planning

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand how indexes accelerate query performance |
| LO2 | Create and manage B-tree, Hash, and composite indexes |
| LO3 | Use EXPLAIN and EXPLAIN ANALYZE to read query plans |
| LO4 | Identify and optimize slow queries using index-only scans |
| LO5 | Understand partial, covering, and expression indexes |
| LO6 | Apply query optimization techniques and avoid common anti-patterns |

## Introduction

Understanding indexes and performance is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering indexes and performance.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding indexes and performance is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how indexes and performance works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind indexes and performance
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 7.1 | Index Fundamentals | B-tree structure, page organization, lookup complexity |
| 7.2 | Index Types | B-tree, Hash, GiST, GIN, BRIN |
| 7.3 | Composite Indexes | Column order matters, covering indexes |
| 7.4 | EXPLAIN and Query Plans | Seq Scan, Index Scan, Index Only Scan, Bitmap Scan |
| 7.5 | Partial and Expression Indexes | WHERE conditions, functional indexes |
| 7.6 | Query Optimization | Statistics, anti-patterns, vacuum, analyze |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Indexes & Performance] --> B[B-Tree]
    A --> C[Hash / GiST / GIN]
    A --> D[Composite Indexes]
    A --> E[EXPLAIN ANALYZE]
    A --> F[Optimization]
    B --> G[Equality + Range]
    B --> H[Index-Only Scan]
    D --> I[Column Order]
    D --> J[Covering Indexes]
    E --> K[Seq Scan vs Index Scan]
    E --> L[Bitmap Scan]
    F --> M[Statistics]
    F --> N[Anti-Patterns]
```text

## 7.1 Index Fundamentals

An index is a data structure that improves the speed of data retrieval operations on a database table at the cost of additional writes and storage.

**B-tree (Balanced Tree)** is the default and most common index type:

```sql
-- Create a B-tree index (default)
CREATE INDEX idx_employees_last_name ON employees(last_name);

-- The index stores (last_name, ctid) sorted by last_name
-- Lookup: O(log n) — about 3-4 page reads for 1M rows
```text

**How a B-tree lookup works**:

1. Start at root page (1 read)
2. Follow internal pages down the tree (2-3 reads)
3. Reach leaf page containing the data pointer (1 read)
4. Fetch the actual row from the heap table (1 read)

Total: ~4-6 page reads vs full table scan of thousands of pages.

```sql
-- Before index: Sequential Scan (read every row)
EXPLAIN SELECT * FROM employees WHERE last_name = 'Smith';
-- Seq Scan on employees (cost=0.00..450.00 rows=50 width=100)

-- After index: Index Scan
EXPLAIN SELECT * FROM employees WHERE last_name = 'Smith';
-- Index Scan using idx_employees_last_name (cost=0.28..8.29 rows=1 width=100)
```text

**Trade-offs of indexes**:

| Factor | Without Index | With Index |
|--------|---------------|------------|
| SELECT on key column | Full table scan | Fast O(log n) lookup |
| INSERT | Fast (write to table only) | Slower (update index + table) |
| UPDATE on key column | Fast | Slower (update index + table) |
| DELETE | Fast | Slower (remove from index + table) |
| Storage | Base table only | Additional index storage |
| VACUUM | Faster | Slower (must clean index too) |

**When to index**:

- Columns used frequently in WHERE conditions
- Columns used in JOIN conditions (foreign keys)
- Columns used in ORDER BY or GROUP BY
- Columns with high cardinality (many unique values)
- Avoid indexing low-cardinality columns (boolean, tiny status columns)

## 7.2 Index Types

**B-tree** — default, supports equality and range queries:

```sql
-- B-tree supports these operators:
-- =, <, <=, >, >=, BETWEEN, IN, IS NULL, LIKE 'prefix%'

CREATE INDEX idx_salary ON employees(salary);

-- Uses index:
SELECT * FROM employees WHERE salary BETWEEN 50000 AND 80000;
SELECT * FROM employees WHERE salary > 100000;
SELECT * FROM employees ORDER BY salary;

-- Does NOT use index:
SELECT * FROM employees WHERE UPPER(last_name) = 'SMITH';
```text

**Hash** — equality only, faster than B-tree for exact lookups:

```sql
-- Hash index (PostgreSQL)
CREATE INDEX idx_email_hash ON users USING hash(email);

-- Efficient for:
SELECT * FROM users WHERE email = 'alice@example.com';

-- Not used for:
SELECT * FROM users WHERE email LIKE '%example.com';
```text

**GiST (Generalized Search Tree)** — for full-text search, geometric data:

```sql
-- Full-text search
CREATE INDEX idx_document_body ON documents USING gist(to_tsvector('english', body));

SELECT * FROM documents
WHERE to_tsvector('english', body) @@ to_tsquery('database & performance');
```text

**GIN (Generalized Inverted Index)** — for array and jsonb containment:

```sql
-- JSONB index
CREATE INDEX idx_metadata ON products USING gin(metadata jsonb_path_ops);

SELECT * FROM products WHERE metadata @> '{"color": "red"}';

-- Array index
CREATE INDEX idx_tags ON posts USING gin(tags);

SELECT * FROM posts WHERE tags && ARRAY['postgresql', 'performance'];
```text

**BRIN (Block Range Index)** — for large tables with naturally ordered data:

```sql
-- BRIN on timestamp column in append-heavy table
CREATE INDEX idx_created_at_brin ON logs USING brin(created_at)
WITH (pages_per_range = 32);

-- Very small index (~100KB vs 1GB B-tree for 1B rows)
-- Best for columns with high correlation to physical storage order
SELECT * FROM logs WHERE created_at > '2024-06-01';
```text

**Choosing index type**:

| Use Case | Index Type |
|----------|------------|
| Primary key, unique constraint | B-tree (auto-created) |
| Foreign key | B-tree |
| Equality lookup on high-cardinality | B-tree or Hash |
| Range queries | B-tree |
| Full-text search | GiST or GIN |
| JSONB containment | GIN |
| Arrays | GIN |
| Append-only timestamp data | BRIN |
| Spatial / geometric | GiST |

## 7.3 Composite Indexes

Composite indexes cover multiple columns. Column order matters significantly.

```sql
-- Create composite index
CREATE INDEX idx_employees_dept_name ON employees(department_id, last_name);

-- Most efficient: uses both columns
SELECT * FROM employees
WHERE department_id = 5 AND last_name = 'Smith';
-- Index Scan: seeks to (5, 'Smith') directly

-- Uses only first column (still beneficial)
SELECT * FROM employees WHERE department_id = 5;
-- Index Scan: seeks to (5, ...) range scan

-- Cannot use this index
SELECT * FROM employees WHERE last_name = 'Smith';
-- Cannot use first column of index (no department_id filter)
```text

**Column order rules**:

1. **Equality conditions first** — columns compared with `=` should come before columns with range conditions
2. **High cardinality columns first** — more selective columns at the beginning
3. **Consider all queries** — optimize for the most common query patterns

```sql
-- For this query:
SELECT * FROM orders
WHERE status = 'shipped'
  AND created_at >= '2024-01-01'
  AND created_at < '2024-02-01';

-- Best index: equality first, range second
CREATE INDEX idx_orders_status_date ON orders(status, created_at);

-- Not optimal: range first restricts index usefulness
CREATE INDEX idx_orders_date_status ON orders(created_at, status);
```text

**Covering indexes** (include extra columns):

```sql
-- Include columns to enable index-only scans
CREATE INDEX idx_orders_customer_covering
ON orders(customer_id)
INCLUDE (order_date, total_amount, status);

-- Query that can use index-only scan (no heap fetch needed):
SELECT order_date, total_amount, status
FROM orders
WHERE customer_id = 42;
```text

**Multiple single-column vs composite indexes**:

```sql
-- Two single-column indexes
CREATE INDEX idx_orders_customer ON orders(customer_id);
CREATE INDEX idx_orders_status ON orders(status);

-- Query optimizer may use BitmapAnd to combine both:
SELECT * FROM orders
WHERE customer_id = 42 AND status = 'shipped';
-- BitmapAnd(Index Scan on customer, Index Scan on status)

-- Composite index is usually more efficient:
CREATE INDEX idx_orders_customer_status ON orders(customer_id, status);
-- Single index scan, no bitmap operations needed
```text

## 7.4 EXPLAIN and Query Plans

EXPLAIN shows the query plan without executing. EXPLAIN ANALYZE executes and shows actual timings.

```sql
-- Basic EXPLAIN
EXPLAIN SELECT * FROM employees WHERE department_id = 5;

-- With actual execution
EXPLAIN ANALYZE SELECT * FROM employees WHERE department_id = 5;

-- With buffers (shows cache hit/miss)
EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM employees WHERE department_id = 5;
```text

**Understanding scan types**:

```sql
-- Sequential Scan: reads entire table (worst for large tables)
Seq Scan on employees  (cost=0.00..450.00 rows=1000 width=100)
-- cost format: startup_time..total_time, estimated rows, average row width

-- Index Scan: reads index then fetches rows from heap
Index Scan using idx_employees_dept on employees  (cost=0.28..12.29 rows=50 width=100)
  Index Cond: (department_id = 5)

-- Index Only Scan: all needed columns are in index (fastest)
Index Only Scan using idx_employees_dept_name on employees  (cost=0.28..6.29 rows=50 width=100)
  Index Cond: (department_id = 5)

-- Bitmap Scan: combines multiple index scans, then fetches rows
Bitmap Heap Scan on employees  (cost=12.34..50.00 rows=200 width=100)
  Recheck Cond: ((department_id = 5) OR (last_name = 'Smith'))
  -> BitmapOr
       -> Bitmap Index Scan on idx_employees_dept  (cost=0.00..5.00 rows=100 width=0)
       -> Bitmap Index Scan on idx_employees_last_name  (cost=0.00..5.00 rows=100 width=0)
```text

**Reading plan output**:

```sql
EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON)
SELECT e.*, d.name
FROM employees e
JOIN departments d ON e.department_id = d.id
WHERE e.salary > 100000
ORDER BY e.last_name
LIMIT 10;
```text

Key metrics in EXPLAIN ANALYZE:

| Metric | Meaning |
|--------|---------|
| actual time=0.05..0.10 | Startup time and total time in ms |
| rows=10 | Actual rows returned by this node |
| loops=1 | How many times this node executed |
| Buffers: shared hit=5 | Pages read from cache |
| Buffers: shared read=2 | Pages read from disk |
| Planning Time | Time to generate the plan |
| Execution Time | Total execution time |

**Common plan patterns**:

```sql
-- Nested Loop Join: for small result sets
Nested Loop  (cost=0.28..100.50 rows=10 width=200)
  -> Index Scan on employees  (rows=10)
  -> Index Scan on departments  (rows=1)

-- Hash Join: for medium result sets
Hash Join  (cost=50.00..200.00 rows=1000 width=200)
  -> Seq Scan on employees  (rows=5000)
  -> Hash  (rows=100)
       -> Seq Scan on departments  (rows=100)

-- Merge Join: for large sorted result sets
Merge Join  (cost=100.00..500.00 rows=10000 width=200)
  -> Index Scan on employees  (rows=50000)
  -> Index Scan on departments  (rows=1000)
```text

## 7.5 Partial and Expression Indexes

**Partial indexes** include only a subset of rows:

```sql
-- Index only active orders
CREATE INDEX idx_active_orders ON orders(order_id)
WHERE status NOT IN ('cancelled', 'completed');

-- Query automatically uses this partial index
SELECT * FROM orders WHERE status = 'pending';
-- This index is much smaller than a full index on status

-- Partial unique index for soft-delete:
CREATE UNIQUE INDEX idx_active_username ON users(username)
WHERE deleted_at IS NULL;
-- Allows duplicate usernames for deleted accounts but enforces uniqueness for active ones
```text

**Expression indexes** index the result of a function or expression:

```sql
-- Case-insensitive lookup
CREATE INDEX idx_users_email_lower ON users(LOWER(email));

SELECT * FROM users WHERE LOWER(email) = 'alice@example.com';

-- Date extraction
CREATE INDEX idx_orders_year_month ON orders(EXTRACT(YEAR FROM created_at), EXTRACT(MONTH FROM created_at));

SELECT * FROM orders
WHERE EXTRACT(YEAR FROM created_at) = 2024
  AND EXTRACT(MONTH FROM created_at) = 6;
```text

**Combining partial and expression indexes**:

```sql
-- Index only active orders' total for reporting
CREATE INDEX idx_active_large_orders ON orders(total)
WHERE status = 'shipped' AND total > 1000;

-- Fast aggregation for the most common report
SELECT COUNT(*), AVG(total) FROM orders
WHERE status = 'shipped' AND total > 1000;
```text

## 7.6 Query Optimization

**Using statistics**:

```sql
-- Update table statistics for query planner
ANALYZE employees;

-- Set statistics target for a column (higher = more precise, slower analyze)
ALTER TABLE employees ALTER COLUMN salary SET STATISTICS 1000;

-- View table statistics
SELECT tablename, attname, n_distinct, most_common_vals, most_common_freqs
FROM pg_stats
WHERE tablename = 'employees';
```text

**Common anti-patterns**:

```sql
-- Anti-pattern 1: Wrapping indexed column in function
-- Bad (won't use index):
SELECT * FROM employees WHERE UPPER(last_name) = 'SMITH';
-- Good (use expression index or lowercase comparison):
SELECT * FROM employees WHERE last_name = 'Smith';

-- Anti-pattern 2: Leading wildcard in LIKE
-- Bad (won't use B-tree index):
SELECT * FROM products WHERE name LIKE '%search_term%';
-- Good (use trigram index):
CREATE EXTENSION pg_trgm;
CREATE INDEX idx_products_name_trgm ON products USING gin(name gin_trgm_ops);
SELECT * FROM products WHERE name ILIKE '%search_term%';

-- Anti-pattern 3: Implicit type conversion
-- Bad:
SELECT * FROM orders WHERE order_id = '12345';  -- string vs integer
-- Good:
SELECT * FROM orders WHERE order_id = 12345;

-- Anti-pattern 4: SELECT * in production queries
-- Bad: selects all columns, may prevent index-only scans
SELECT * FROM orders WHERE customer_id = 42;
-- Good: selects only needed columns
SELECT id, order_date, total FROM orders WHERE customer_id = 42;
```text

**Vacuum and maintenance**:

```sql
-- Recover space from updated/deleted rows
VACUUM employees;

-- Full cleanup (locks table, not for production)
VACUUM FULL employees;

-- Update statistics
ANALYZE employees;

-- Combined
VACUUM ANALYZE employees;

-- Autovacuum settings (postgresql.conf):
-- autovacuum = on
-- autovacuum_vacuum_scale_factor = 0.01  (vacuum when 1% rows changed)
```text

**Index maintenance**:

```sql
-- Check index usage
SELECT
    schemaname,
    tablename,
    indexname,
    idx_scan,
    idx_tup_read,
    idx_tup_fetch
FROM pg_stat_user_indexes
WHERE schemaname = 'public'
ORDER BY idx_scan;

-- Find unused indexes
SELECT
    indexrelid::regclass AS index_name,
    relid::regclass AS table_name,
    idx_scan
FROM pg_stat_user_indexes
WHERE idx_scan = 0;

-- Rebuild index (reduce bloat)
REINDEX INDEX idx_employees_last_name;
REINDEX TABLE employees;
```text

**Query optimization checklist**:

1. Check EXPLAIN ANALYZE for Seq Scans on large tables
2. Verify index usage for WHERE and JOIN columns
3. Ensure composite index column order matches query patterns
4. Look for functions wrapping indexed columns
5. Check for implicit type conversions
6. Verify statistics are up to date (ANALYZE)
7. Monitor index bloat (REINDEX periodically)
8. Remove unused indexes (they slow INSERT/UPDATE/DELETE)
9. Consider partial indexes for filtered queries on large tables
10. Use covering indexes for frequently accessed column combinations

## TypeScript Parallel

```typescript
// B-tree index simulation
class BTreeIndex<T> {
    private tree: Map<string, T[]> = new Map();

    constructor(
        private data: T[],
        private keyFn: (item: T) => string
    ) {
        this.buildIndex();
    }

    private buildIndex(): void {
        for (const item of this.data) {
            const key = this.keyFn(item);
            if (!this.tree.has(key)) {
                this.tree.set(key, []);
            }
            this.tree.get(key)!.push(item);
        }
    }

    lookup(key: string): T[] {
        return this.tree.get(key) || [];
    }

    rangeLookup(min: string, max: string): T[] {
        const result: T[] = [];
        for (const [key, items] of this.tree) {
            if (key >= min && key <= max) {
                result.push(...items);
            }
        }
        return result;
    }
}

// Composite index
class CompositeIndex<T> {
    private tree: Map<string, T[]> = new Map();

    constructor(
        private data: T[],
        private keyFns: ((item: T) => string)[]
    ) {
        this.buildIndex();
    }

    private buildIndex(): void {
        for (const item of this.data) {
            const key = this.keyFns.map(fn => fn(item)).join("|");
            if (!this.tree.has(key)) {
                this.tree.set(key, []);
            }
            this.tree.get(key)!.push(item);
        }
    }

    lookup(keys: string[]): T[] {
        const key = keys.join("|");
        return this.tree.get(key) || [];
    }
}
```text

## Summary

- B-tree is the default index type, supporting equality and range queries in O(log n)
- Hash indexes are optimized for equality lookups only
- GiST and GIN indexes support full-text search, JSONB, and array operations
- BRIN indexes are compact and efficient for naturally ordered append-only data
- Composite index column order should prioritize equality then high-cardinality columns
- Covering indexes with INCLUDE enable index-only scans
- EXPLAIN ANALYZE shows actual execution plans with timings and row estimates
- Seq Scan on large tables indicates a missing index
- Partial indexes reduce storage by indexing only relevant rows
- Expression indexes support function-based lookups

## Practical Takeaways

| Scenario | Use | Avoid |
|----------|-----|-------|
| Primary key | Auto-created B-tree | Manual index creation |
| Foreign key JOIN | B-tree on FK column | No index (causes nested loop on large tables) |
| Multi-column filter | Composite index with equality first | Multiple single-column indexes |
| Full-text search | GIN index with to_tsvector | LIKE '%term%' on large tables |
| JSONB query | GIN index with @> operator | Extracting and filtering in application |
| Appending timestamps | BRIN index | Large B-tree on monotonically increasing column |
| Soft-delete uniqueness | Partial unique index | Application-level uniqueness check |
| Case-insensitive search | Expression index with LOWER() | LOWER() on indexed column without expression index |
| Slow query diagnosis | EXPLAIN ANALYZE | Guessing which index to add |

## Interview Q&A

<details class="tp-qa-card" data-qid="sql-s07-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: How does a B-tree index work?</summary>
  <div class="tp-qa-answer"><p>A B-tree is a balanced tree data structure where each page contains sorted key values and pointers to child pages. Root and internal pages guide the search to the correct leaf page, which stores key-to-rowid mappings. Lookup is O(log n) — about 3-5 page reads for millions of rows. B-tree supports equality and range queries.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s07-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: Composite index column order rules?</summary>
  <div class="tp-qa-answer"><p>Put equality-condition columns first (WHERE col = value), followed by range-condition columns (WHERE col > value). Within equality columns, put higher-cardinality columns first for better selectivity. The index can be used for queries that filter on a prefix of the columns.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s07-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: Seq Scan vs Index Scan vs Index Only Scan?</summary>
  <div class="tp-qa-answer"><p>Seq Scan reads the entire table sequentially (good for small tables or when retrieving most rows). Index Scan reads the index to find matching rowids, then fetches rows from the heap (good for selective queries). Index Only Scan reads all needed data from the index without touching the heap (fastest) — requires a covering index.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s07-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: What does EXPLAIN ANALYZE show?</summary>
  <div class="tp-qa-answer"><p>EXPLAIN shows the query plan with estimated costs. EXPLAIN ANALYZE executes the query and shows actual execution time per node, actual row counts, loops, and buffer usage. The actual rows vs estimated rows comparison helps identify stale statistics. Always use EXPLAIN (ANALYZE, BUFFERS) for optimization.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s07-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: Partial index use cases?</summary>
  <div class="tp-qa-answer"><p>Partial indexes index only a subset of rows matching a WHERE condition. Use cases: (1) active records only in soft-delete tables, (2) unique constraint on active usernames, (3) indexing only high-value orders for reporting, (4) indexing only recent data in time-series tables.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s07-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: When does LIKE '%text' not use an index?</summary>
  <div class="tp-qa-answer"><p>B-tree indexes support prefix matching: LIKE 'prefix%' uses the index. Leading wildcards LIKE '%text' do not use B-tree indexes. Solution: use pg_trgm extension with GIN or GiST index for trigram matching, which enables efficient substring searches.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s07-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: What is index bloat and how to fix it?</summary>
  <div class="tp-qa-answer"><p>Index bloat occurs when updates and deletes leave empty space in index pages, increasing storage and scan time. Fix with REINDEX INDEX name or REINDEX TABLE name. In production, use REINDEX CONCURRENTLY to avoid locking. Monitor bloat using pg_stat_user_indexes.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s07-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: Hash vs B-tree index?</summary>
  <div class="tp-qa-answer"><p>Hash indexes support only equality (=) lookups. B-tree supports equality, range (<, >, BETWEEN), and prefix matching. Hash can be faster for exact lookups on high-cardinality columns. B-tree is the default for a reason: it handles more query patterns.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s07-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: What does ANALYZE do?</summary>
  <div class="tp-qa-answer"><p>ANALYZE collects statistics about table data distribution: row count, distinct values per column, most common values, histogram bounds, and correlation. The query planner uses these statistics to estimate row counts and choose optimal scan and join strategies. Run after significant data changes.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s07-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: Covering index vs composite index?</summary>
  <div class="tp-qa-answer"><p>A composite index uses all its columns for searching and ordering. A covering index uses INCLUDE to add columns that are only returned (not searched). Covering indexes enable index-only scans without adding to the B-tree's internal structure. Example: CREATE INDEX ON orders(customer_id) INCLUDE (total, status).</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What is the default index type in PostgreSQL? a) Hash b) B-tree c) GIN d) BRIN

<details class="tp-qa-card" data-qid="sql-s07-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) B-tree is the default index type</strong></p></div></details>

**Q2**: Which WHERE clause pattern does NOT use a B-tree index? a) col = 5 b) col > 100 c) col LIKE '%value' d) col BETWEEN 10 AND 20

<details class="tp-qa-card" data-qid="sql-s07-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) leading wildcard '%value' cannot use B-tree index</strong></p></div></details>

**Q3**: What enables an index-only scan? a) PRIMARY KEY b) covering index c) partial index d) expression index

<details class="tp-qa-card" data-qid="sql-s07-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) covering index with INCLUDE columns</strong></p></div></details>

**Q4**: Which keyword shows actual execution time? a) EXPLAIN b) EXPLAIN ANALYZE c) DESCRIBE d) PROFILE

<details class="tp-qa-card" data-qid="sql-s07-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) EXPLAIN ANALYZE executes and shows actual timings</strong></p></div></details>

**Q5**: When should you use BRIN index? a) primary key b) append-only timestamp c) full-text search d) JSONB

<details class="tp-qa-card" data-qid="sql-s07-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) append-only timestamp columns (naturally ordered, high correlation)</strong></p></div></details>

## Exercises

**Easy** — Create a B-tree index on the email column of a users table and verify it's used with EXPLAIN.

**Easy** — Use EXPLAIN ANALYZE to compare a sequential scan vs index scan on a table with 10,000+ rows.

**Medium** — Create a composite index on (department_id, hire_date) and test queries that filter on department, on date, and on both. Compare the query plans.

**Medium** — Design a partial unique index that enforces unique email only for active users (WHERE status = 'active').

**Hard** — Analyze a slow query from your application: run EXPLAIN (ANALYZE, BUFFERS), identify the bottleneck, create the appropriate index(es), and verify the performance improvement.

**Hard** — Implement an index maintenance routine: find unused indexes, check for bloat, and report index usage statistics using pg_stat_user_indexes and pg_stat_all_indexes.

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 02-sql-and-databases. When would you choose one approach over another?
2. Design a system that efficiently handles 02-sql-and-databases at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 02-sql-and-databases. What was your approach and what was the result?
2. How would you explain 02-sql-and-databases to a non-technical stakeholder?

#### Microsoft Style
1. How does 02-sql-and-databases integrate with enterprise systems and cloud architectures?
2. What are the security implications of 02-sql-and-databases?

#### NVIDIA Style
1. How would you optimize 02-sql-and-databases for GPU-accelerated computing?
2. What parallel processing patterns apply to 02-sql-and-databases?

#### AI Startup Style
1. How would you implement 02-sql-and-databases in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 02-sql-and-databases?

### Resume Tips
- **Technical Skills**: List 02-sql-and-databases under relevant technical skills
- **Project Description**: "Implemented 02-sql-and-databases to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 02-sql-and-databases in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 02-sql-and-databases
- [ ] Practice 3-5 problems related to 02-sql-and-databases
- [ ] Prepare 2 real-world examples of using 02-sql-and-databases
- [ ] Know the time/space complexity of common 02-sql-and-databases operations
- [ ] Have questions ready about how the company uses 02-sql-and-databases> **Next**: [08 — Database Design →](08-database-design.md)


## Difficulty Level

**Level**: Beginner
**Estimated Study Time**: 30-45 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to SQL & Databases fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master indexes and performance?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

The Evolution of this technology reflects decades of research and practical engineering experience.

Understanding the evolution of indexes and performance helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding indexes and performance at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of indexes and performance like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply indexes and performance concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of indexes and performance?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply indexes and performance in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (12 minutes)
**Day 2**: Complete exercises and practice (12 minutes)
**Day 3**: Review flashcards and take quiz (6 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying indexes and performance to specific use cases, consider:
- Adapting general principles to your specific domain
- Performance optimization for your target hardware
- Cost considerations for production deployment
- Monitoring and observability in production