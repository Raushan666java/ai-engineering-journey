# Chapter 12: Indexing

> **Prev:** [Chapter 11: Recovery System](11-recovery.md) | **Next:** [Chapter 13: Query Processing](13-query-processing.md)

## Learning Objectives

- Explain the purpose of indexes in query acceleration
- Describe B+ tree structure, operations, and performance characteristics
- Implement hash indexes and understand their use cases
- Design composite indexes based on query patterns
- Understand bitmap indexes for low-cardinality columns
- Choose appropriate index types based on workload

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| **Purpose of Indexes** | Accelerate lookups at the cost of writes + storage | Index only columns used in WHERE, JOIN, and ORDER BY |
| **B+ Tree** | Balanced, disk-optimized, all leaves at same depth | Default choice for range queries and most workloads |
| **Hash Index** | O(1) equality lookups, no range support | Use for primary-key lookups only |
| **Composite Indexes** | Leftmost prefix rule determines usability | Order columns by selectivity (highest first) |
| **Bitmap Indexes** | Compact bitwise representation per value | Ideal for low-cardinality columns in data warehouses |
| **Index Selection** | Match index type to query pattern | Monitor slow queries, add indexes iteratively |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Query Arrives] --> B{Full Scan?}
    B -->|Yes| C[Sequential Read]
    B -->|No - Use Index| D{Index Type}
    D -->|B+ Tree| E[Range / Equality]
    D -->|Hash| F[Equality Only]
    D -->|Bitmap| G[Boolean Combos]
    D -->|Composite| H[Multi-Column]
    E & F & G & H --> I[Page Lookup]
    I --> J[Return Results]
```

## Theory

![Indexing, Query Processing and Join Algorithms](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/database-management-systems/ch05-indexing-query.png)

### 12.1 Why Indexes?

Without indexes, finding data requires a **full table scan** â€” reading every row in the table sequentially. For a table with 10 million rows, a full scan can take minutes. An index reduces this to milliseconds by providing a direct path to the data.

**Concept:** An index is a data structure organized for fast search. For each search key value, the index stores the physical location (row ID, page ID) where the corresponding data is stored.

**Trade-off:** Indexes speed up reads but slow down writes (INSERT, UPDATE, DELETE) because the index must be maintained. They also consume storage.

> **One-Sentence Takeaway:** Indexes transform full table scans (minutes) into direct lookups (milliseconds) at the cost of slower writes and extra storage.

### 12.2 B+ Tree Indexes

The B+ tree is the most common index structure in relational databases. It is a balanced multi-way search tree optimized for disk-based storage.

**B+ Tree Structure:**

```
                    [50, 90]
                   /    |    \
           [20, 35]   [60, 75]   [100, 120]
          /   |   \    /  |  \    /   |    \
        [10] [25][40] [55][65][80] [95] [110][130]
         |    |    |    |   |   |    |     |    |
        Data Data Data Data Data Data Data Data Data
```

**Key properties:**
- All keys reside in the **leaf nodes**
- Internal nodes contain **routing keys** (directory) to guide searches
- Leaf nodes are linked together in a **linked list** for efficient range scans
- Every leaf path has the same depth (the tree is perfectly balanced)
- Each node typically holds hundreds of keys (node size â‰ˆ disk page size, 4â€“16 KB)

**Operations:**

**Search (equality):** Start at root. At each internal node, find the smallest key â‰¥ search key. Follow the corresponding pointer. Repeat until reaching a leaf node, then linearly scan the leaf for the exact key.

```
Search for 65 in the tree above:
Root: 65 is between 50 and 90 â†’ follow middle pointer
Level 2: 65 is > 60 and < 75 â†’ follow middle pointer
Leaf: Scan [55, 65, 80] â†’ found 65 at position 2
```

**Range scan (e.g., WHERE key BETWEEN 60 AND 100):**
1. Search for 60 (the lower bound) to reach the correct leaf
2. Follow leaf pointers forward until exceeding 100
3. Collect all qualifying records

**Insertion:**
1. Search to find the correct leaf node
2. If the leaf has room: insert the key in sorted order
3. If the leaf is full: **split** into two leaves, distribute keys evenly, promote the middle key to the parent
4. Splits may propagate upward; if the root splits, the tree grows by one level

**Deletion:**
1. Search to find the key in the leaf
2. Remove the key
3. If the leaf is too empty (< 50% full typically): try to **redistribute** from a sibling, or **merge** with a sibling
4. Merges may propagate upward; if the root has only one child, the tree shrinks by one level

**Performance:**
- Search: O(log n) I/O operations (typically 2â€“4 for real databases)
- Insert: O(log n) â€” read path + write modified nodes
- Delete: O(log n)
- Range scan: O(log n + k) where k is the number of results

**Fan-out:** A B+ tree with a fan-out (node capacity) of 500 can store:
- 500Â² = 250,000 keys at depth 2
- 500Â³ = 125,000,000 keys at depth 3
- 500â´ = 62,500,000,000 keys at depth 4

This is why large databases can be searched with 3â€“4 I/O operations.

> **One-Sentence Takeaway:** The B+ tree's high fanout (hundreds of keys per node) keeps depth to 3-4 levels, making it possible to search billions of rows with just a handful of disk I/Os.

### 12.3 Clustered vs. Unclustered Indexes

**Clustered Index:** The table data is physically ordered and stored according to the index key. There can be only one clustered index per table. The leaf nodes of a clustered index contain the actual data rows.

- Fast for range queries (data is physically adjacent)
- Slower for inserts at non-sequential locations (may require page splits and reorganization)
- Example: Primary key index in MySQL InnoDB

**Unclustered Index (Secondary Index):** The index is separate from the data. Leaf nodes contain pointers (row IDs) to the data rows, which are stored independently.

- Multiple unclustered indexes per table possible
- Each index lookup requires: index search + data page access (could be 2 I/Os instead of 1)
- If the query needs many rows, the DBMS may still do a full table scan

```sql
-- PostgreSQL: Indexes are unclustered by default
CREATE INDEX idx_orders_customer ON orders(customer_id);

-- Cluster command (one-time physical reorganization)
CLUSTER orders USING idx_orders_customer;
```

> **One-Sentence Takeaway:** Clustered indexes physically sort data (one per table, ideal for range queries); unclustered indexes store pointers to data (many per table, each lookup costs an extra I/O).

### 12.4 Hash Indexes

Hash indexes use a hash function to map keys to buckets. They excel at **equality lookups** but cannot support range queries.

**Structure:**
- A hash function maps each key to a bucket number
- Each bucket is a chain of records (or a fixed-size overflow area)

**Operations:**
- **Search (equality):** Hash the key â†’ find the bucket â†’ scan for the exact match â†’ O(1) average
- **Insert:** Hash the key â†’ place in the bucket â†’ O(1) average
- **Range query:** Not supported (hash destroys ordering)

**Types:**
- **Static Hashing:** Fixed number of buckets. As data grows, chains become long.
- **Extendable Hashing:** Uses a directory that doubles as needed. Handles growth smoothly.
- **Linear Hashing:** Gradual reorganization without a directory.

```sql
-- PostgreSQL: Hash index (useful for equality only)
CREATE INDEX idx_hash_employee_id ON employees USING HASH(employee_id);

-- Query that benefits:
SELECT * FROM employees WHERE employee_id = 1001;  -- Fast!

-- Query that cannot use hash index:
SELECT * FROM employees WHERE employee_id > 1000;  -- Must scan!
```

> **One-Sentence Takeaway:** Hash indexes deliver O(1) equality lookups but cannot support range queries — reserve them for primary-key or unique-ID lookups.

### 12.5 Composite (Multi-Column) Indexes

A composite index on (A, B, C) creates a B+ tree ordered first by A, then by B, then by C.

**The Column Order Matters!**

```sql
CREATE INDEX idx_composite ON orders(customer_id, order_date, status);
```

**Queries that benefit:**
```sql
-- Full match: Excellent
SELECT * FROM orders WHERE customer_id = 5 AND order_date = '2026-01-15' AND status = 'shipped';

-- Prefix match: Excellent (uses customer_id and order_date)
SELECT * FROM orders WHERE customer_id = 5 AND order_date > '2026-01-01';

-- Partial prefix: Good (uses customer_id only)
SELECT * FROM orders WHERE customer_id = 5;

-- Skipped first column: Poor (cannot use the index effectively)
SELECT * FROM orders WHERE order_date = '2026-01-15';
```

**The "Best" Column Order Rule:**
1. Put equality columns first: `WHERE col1 = 5 AND col2 > 10` â†’ index on (col1, col2)
2. Put high-selectivity columns first (columns that filter out more rows)
3. Example: In a `gender` (2 values) and `salary` (many values) composite index, put `salary` first

**Index-Only Scan (Covering Index):** If all columns needed by a query are in the index, the DBMS can return results from the index alone without accessing the table:

```sql
CREATE INDEX idx_covering ON employees(last_name, first_name, salary);

-- This query reads ONLY the index (no table access):
SELECT last_name, first_name, salary FROM employees
WHERE last_name LIKE 'S%';
```

> **One-Sentence Takeaway:** Composite indexes serve multi-column queries via the leftmost prefix rule — place equality columns before range columns and highest-selectivity first.

> **💡 Pro Tip:** A covering index that includes all columns a query needs eliminates table access entirely (index-only scan) — check `pg_stat_user_indexes` for index usage stats.

### 12.6 Bitmap Indexes

Bitmap indexes use a bit array (bitmap) for each distinct value of a column. They are efficient for **low-cardinality** columns (few distinct values but many rows) and **data warehousing** workloads.

**Example:** A `gender` column with values M and F in a table of 10 million rows.

```
Gender = M bitmap:  1011010010...  (1M bits = ~125KB)
Gender = F bitmap:  0100101101...  (1M bits = ~125KB)

Row 1: M â†’ M bit = 1, F bit = 0
Row 2: F â†’ M bit = 0, F bit = 1
```

**Bitmap Operations:**
```sql
-- Find male employees in department 10
-- M_bitmap AND Dept10_bitmap â†’ result bitmap
-- Fast bitwise operations on compressed bitmaps
```

**PostgreSQL:**
```sql
-- PostgreSQL can use bitmap scan plans automatically
-- No explicit BITMAP index type, but it generates bitmap scans from B-tree indexes
EXPLAIN SELECT * FROM employees WHERE gender = 'M' AND department_id = 10;
-- Output may show: BitmapAnd (BitmapOr) of multiple B-tree indexes
```

**Advantages:** Space-efficient for low cardinality. Supports fast AND, OR, NOT, COUNT operations.

**Disadvantages:** Poor for high-cardinality columns. Updates can be expensive (bitmaps may need rebuilding).

> **One-Sentence Takeaway:** Bitmap indexes enable fast bitwise AND/OR operations on low-cardinality columns, making them ideal for data warehouse queries that combine multiple dimension filters.

### 12.7 Index Selection

**When to Create an Index:**
- Columns frequently used in WHERE, JOIN, ORDER BY, or GROUP BY
- Foreign key columns
- Columns with high selectivity (many distinct values)
- Large tables where full scans are prohibitively slow
- Queries that return a small percentage of rows (typically < 5%)

**When NOT to Create an Index:**
- Small tables (full scan is fast enough)
- Columns rarely used in queries
- Columns frequently updated (index maintenance cost)
- Columns with very low selectivity (e.g., boolean column)
- Tables with heavy write workloads

```sql
-- Example: Creating indexes based on query patterns
-- Common query: find orders by customer and date
CREATE INDEX idx_orders_customer_date ON orders(customer_id, order_date);

-- Common query: look up products by category
CREATE INDEX idx_products_category ON products(category_id);

-- Common query: search employees by name
CREATE INDEX idx_employees_name ON employees(last_name, first_name);

-- Monitor index usage (PostgreSQL)
SELECT schemaname, tablename, indexname, idx_scan, idx_tup_read
FROM pg_stat_user_indexes
ORDER BY idx_scan;
```

> **One-Sentence Takeaway:** Index selection balances read speed against write cost — index columns in WHERE/JOIN/ORDER BY that have high selectivity and skip small tables or low-selectivity columns.

### 12.8 Index-Organized Tables (IOT)

Some databases (Oracle, MySQL InnoDB) store the table as a clustered index. The data is the index, and the index is the data:

```sql
-- MySQL InnoDB automatically creates a clustered index on the PRIMARY KEY
CREATE TABLE employees (
    emp_id INTEGER PRIMARY KEY,  -- This IS the clustered index
    name VARCHAR(100),
    department_id INTEGER
);
-- Secondary indexes on name or department_id contain pointers to the primary key
```

> **One-Sentence Takeaway:** In index-organized tables (clustered indexes), the data IS the index — secondary indexes store primary key pointers, adding an extra lookup step.

### 12.9 Partial and Functional Indexes

**Partial Index:** Indexes only a subset of rows.

```sql
CREATE INDEX idx_active_orders ON orders(order_id)
WHERE status NOT IN ('completed', 'cancelled');

-- This index is small and only benefits queries about active orders
SELECT * FROM orders WHERE status = 'pending';  -- Uses the partial index
```

**Functional Index (Expression Index):** Indexes the result of an expression.

```sql
CREATE INDEX idx_lower_email ON customers(LOWER(email));

-- Query that benefits:
SELECT * FROM customers WHERE LOWER(email) = 'user@example.com';

-- PostgreSQL functional index on JSON column
CREATE INDEX idx_order_total ON orders(((items->>'total')::DECIMAL));
```

> **One-Sentence Takeaway:** Partial indexes reduce storage and maintenance by indexing only relevant rows (WHERE clause), while functional indexes accelerate queries that transform column values (LOWER, JSON extraction).

## Examples

**Example 12.1: B+ Tree Insertion Trace**

Insert keys 10, 20, 30, 40, 50 into a B+ tree with leaf capacity = 3 and internal capacity = 3.

```
Step 1: Insert 10 â†’ [10]
Step 2: Insert 20 â†’ [10, 20]
Step 3: Insert 30 â†’ [10, 20, 30]   (leaf full)
Step 4: Insert 40 â†’ split!          New leaves: [10, 20] and [30, 40]
                                     Parent root: [30]
Step 5: Insert 50 â†’ [30]           Search: 50 > 30, go to right leaf
                  /     \           Right leaf: [30, 40, 50] â†’ full â†’ split
                [10,20] [30,40,50]  New leaves: [30, 40] and [50]
                                     Promote 50 to root: [30, 50]
```

```
Final tree:
          [30, 50]
         /    |    \
    [10,20] [30,40] [50]
```

**Example 12.2: Index Selection for an E-Commerce App**

```sql
-- Table with 1M+ orders
CREATE TABLE orders (
    order_id BIGINT PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    order_date TIMESTAMP NOT NULL,
    status VARCHAR(20),
    total_amount DECIMAL(12,2),
    shipping_zip VARCHAR(10)
);

-- Query pattern 1: Customer's recent orders
-- Index: (customer_id, order_date DESC)
CREATE INDEX idx_orders_customer_date ON orders(customer_id, order_date DESC);

-- Query pattern 2: Orders by status for fulfillment
-- Partial index for efficiency
CREATE INDEX idx_orders_pending ON orders(order_date, order_id)
WHERE status IN ('pending', 'processing');

-- Query pattern 3: Admin search by zip code
CREATE INDEX idx_orders_zip ON orders(shipping_zip);

-- Query pattern 4: Reporting â€” daily totals
-- Consider a materialized view instead of indexes for aggregates
```

**Example 12.3: Analyzing Index Performance**

```sql
-- Before index: Full table scan
EXPLAIN ANALYZE SELECT * FROM orders WHERE customer_id = 42;
-- Seq Scan on orders (cost=0.00..17340.00 rows=1 width=120)
-- Actual time: 85.324..85.326 rows=5 loops=1

-- After index:
CREATE INDEX idx_orders_customer ON orders(customer_id);
EXPLAIN ANALYZE SELECT * FROM orders WHERE customer_id = 42;
-- Index Scan using idx_orders_customer on orders (cost=0.43..8.45 rows=5 width=120)
-- Actual time: 0.035..0.058 rows=5 loops=1
-- Improvement: 85ms â†’ 0.05ms (1700x faster)
```

## ðŸ’¡ Pro Tips

1. **Index the WHERE clause columns first** â€” columns in `WHERE`, `JOIN`, and `ORDER BY` are the highest priority for indexing.
2. **Composite index column order matters enormously** â€” put high-selectivity columns first. An index on `(status, created_at)` helps `WHERE status = 'active'` but NOT `WHERE created_at > '2026-01-01'`.
3. **Don't over-index write-heavy tables** â€” every index adds overhead to INSERT, UPDATE, and DELETE operations. Measure, then index.
4. **Clustered indexes are not always better** â€” a table can have only one physical order. Consider heap tables with non-clustered indexes for write-heavy workloads.
5. **Use partial indexes for active/passive data patterns** â€” if most queries touch only `WHERE is_active = TRUE`, indexing only active rows saves space and improves performance.

## One-Sentence Takeaways

- **12.1:** Indexes are auxiliary data structures that speed up data retrieval at the cost of slower writes and additional storage.
- **12.2:** B+ trees are the dominant index structure, offering balanced O(log n) search, insert, and delete with excellent range-query performance.
- **12.3:** Clustered indexes determine the physical order of data on disk (one per table); unclustered indexes store pointers to data locations.
- **12.4:** Hash indexes provide O(1) equality lookups but cannot support range queries or ORDER BY.
- **12.5:** Composite (multi-column) indexes require careful column ordering â€” high-selectivity columns first.
- **12.6:** Bitmap indexes are ideal for low-cardinality columns in data warehouse environments.
- **12.7:** Partial and functional indexes optimize specific query patterns such as filtered queries or function-based lookups.
- **12.8:** Index selection should be driven by actual query patterns and performance measurements, not intuition.

## Concept Comparison Table

| Index Type | Lookup Complexity | Supports Range? | Best For |
|-----------|------------------|-----------------|----------|
| **B+ Tree** | O(log n) | Yes | General-purpose, range queries, ORDER BY |
| **Hash** | O(1) average | No | Equality lookups only |
| **Bitmap** | Variable | Yes | Low-cardinality columns, data warehouses |
| **Partial** | Depends | Depends | Subset-of-rows queries |
| **Functional (Expression)** | Depends | Depends | Queries with function wrapping (LOWER, etc.) |
| **Composite** | O(log n) | Depends on column order | Multi-column WHERE conditions |

| Index Feature | Clustered | Unclustered (Secondary) |
|-------------|-----------|------------------------|
| **Physical order** | Matches index order | Independent of data order |
| **Count per table** | One | Many (up to hundreds) |
| **Range scan** | Very fast (sequential I/O) | Slower (random I/O per row) |
| **Inserts** | Can cause page splits (expensive) | Less overhead |
| **Covering query** | Always (data is the leaf) | Only if index includes all needed columns |

## Quick Reference

| Property | B+ Tree | Hash Index | Bitmap Index |
|---------|---------|-----------|-------------|
| **Equality search** | O(log n) | O(1) | Fast for low-cardinality |
| **Range search** | O(log n + k) | Not supported | Fast |
| **ORDER BY** | Fast (index order) | Not supported | Not typically |
| **Supports multiple columns** | Yes (composite) | No (single key) | Yes (bitwise operations) |
| **Space** | Moderate | Small | Moderate (low cardinality) |
| **Concurrent writes** | Excellent (B-link trees) | Moderate | Poor |

## Cross-Application Matrix

| Index Strategy | Applied In | Why It Matters |
|--------------|-----------|----------------|
| **B+ Tree on FK columns** | All multi-table queries | Accelerates JOIN operations |
| **Composite Index (status, date)** | Reporting dashboards | Fast filtering by status then date range |
| **Partial Index (WHERE active=TRUE)** | User management systems | Only index active users for login queries |
| **Expression Index (LOWER(email))** | Authentication systems | Case-insensitive email login lookups |
| **Hash Index** | Lookup tables, cache keys | Fastest option for simple key-value lookups |
| **Bitmap Index** | Data warehouse fact tables | Efficient queries on dimension foreign keys |
| **Covering Index** | High-read OLTP | Avoids accessing the table entirely |

## Chapter Quiz

1. The search complexity of a B+ tree is:
   a) O(1)
   b) O(log n)
   c) O(n)
   d) O(n log n)

2. Which index type does NOT support range queries?
   a) B+ Tree
   b) Hash
   c) Bitmap
   d) Composite B+ Tree

3. A clustered index means:
   a) Multiple indexes are stored together
   b) The table data is physically ordered by the index key
   c) The index stores a pointer to the data
   d) The index covers all columns

4. How many clustered indexes can a table have?
   a) Zero or one
   b) Up to two
   c) As many as needed
   d) At least one

5. The most important factor when designing a composite index is:
   a) Index name
   b) Column order (high-selectivity first)
   c) Number of columns (at least 3)
   d) Data type of the first column

6. A partial index is useful when:
   a) Queries frequently filter on a subset of rows
   b) The table is very small
   c) Every column needs an index
   d) The database is read-only

7. Which type of index is most space-efficient for low-cardinality columns?
   a) B+ Tree
   b) Hash
   c) Bitmap
   d) Functional

8. A covering index is one that:
   a) Covers all tables in the database
   b) Contains all columns needed by a query, eliminating table access
   c) Is clustered
   d) Includes every column

**Answers:** 1-b, 2-b, 3-b, 4-a, 5-b, 6-a, 7-c, 8-b

## Summary

- B+ trees are the dominant index structure, providing O(log n) search, insert, and delete.
- Clustered indexes store data in index order; unclustered indexes store pointers to data.
- Hash indexes provide O(1) equality lookups but cannot support range queries.
- Composite index column order determines which queries benefit.
- Bitmap indexes excel at low-cardinality columns in data warehouse environments.
- Partial and functional indexes optimize specific query patterns.
- Index selection should be driven by actual query patterns and performance measurements.

## Exercises

### Basic

1. Explain the difference between a clustered and unclustered index. What are the trade-offs?

2. Why can B+ tree indexes support range queries (e.g., WHERE id BETWEEN 10 AND 100) but hash indexes cannot?

3. Given an INDEX on (state, city), which of the following queries can use the index effectively?
   a) `WHERE state = 'CA' AND city = 'Los Angeles'`
   b) `WHERE city = 'Los Angeles'`
   c) `WHERE state = 'CA'`
   d) `WHERE state = 'CA' AND population > 100000`

4. What is a covering index? How does it improve query performance?

### Intermediate

5. Insert keys 5, 15, 25, 35, 45, 55 into a B+ tree with leaf capacity = 2 and internal capacity = 2. Show the tree after each insertion.

6. For the composite index (department_id, hire_date, salary):
   - Which queries can use all three columns efficiently?
   - Which queries can use only two columns?
   - Which queries cannot use the index effectively?
   
   Explain the "column order matters" principle with concrete examples.

7. You have a table `employees(emp_id, name, department, salary, hire_date)`. The most common query is:
   ```sql
   SELECT name, salary FROM employees
   WHERE department = 'Engineering' AND hire_date > '2025-01-01'
   ORDER BY salary DESC;
   ```
   Design an optimal index strategy. Justify your choice.

8. What is a bitmap index scan? In PostgreSQL, why might the optimizer choose a bitmap scan over an index scan?

### Advanced

9. Design an index strategy for a logging table that receives 10,000 INSERTs per second:
   - Queries: "Find all errors in the last hour," "Count warnings per day for the last month"
   - Constraints: Minimal impact on write throughput
   - Consider: Partial indexes, time-based partitioning, B-tree vs. BRIN indexes

10. For a product catalog with categories (âˆ¼100 distinct values), prices (continuously varying), and active status (boolean):
    - Write queries that filter by category, price range, and status
    - Design composite indexes for each query pattern
    - Explain why you might also use partial indexes

11. Given the B-tree variation factor: a typical B+ tree internal node might hold 500 keys (assuming 8-byte key + 8-byte pointer = 16 bytes, 8KB page). Calculate how many levels are needed for:
    - 1 million records
    - 1 billion records
    - 1 trillion records
    What does this tell you about the scalability of B+ trees?
