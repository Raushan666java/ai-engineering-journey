# Chapter 13: Query Processing and Optimization

## Learning Objectives

- Trace the lifecycle of a SQL query from text to result
- Explain how query parsing and validation works
- Understand query optimization and cost-based estimation
- Compare join algorithms: nested loop, hash join, merge join
- Describe pipelining and materialization in query execution
- Read and interpret query execution plans (EXPLAIN)

## Theory

### 13.1 Query Processing Overview

When a user submits a SQL query, the DBMS transforms it through several stages:

```
SQL Query Text
    ↓
[Parser] — Checks syntax, produces parse tree
    ↓
[Preprocessor] — Validates tables and columns, resolves views
    ↓
[Query Optimizer] — Generates alternative plans, estimates costs
    ↓
[Execution Engine] — Executes the chosen plan
    ↓
Result
```

### 13.2 Parsing and Preprocessing

**Parsing:** The SQL text is tokenized into keywords, identifiers, operators, and literals. The parser builds a **parse tree** (or abstract syntax tree) representing the query structure.

```sql
SELECT e.name, d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
WHERE e.salary > 50000;
```

Parse tree (conceptual):
```
QUERY
├── SELECT
│   ├── e.name
│   └── d.dept_name
├── FROM
│   ├── employees AS e
│   └── departments AS d
├── JOIN condition: e.dept_id = d.dept_id
└── WHERE: e.salary > 50000
```

**Preprocessing (Semantic Analysis):**
- Validates that tables (`employees`, `departments`) exist
- Validates that columns (`name`, `dept_name`, `salary`, `dept_id`) exist in those tables
- Resolves view references to their underlying queries
- Verifies data type compatibility in comparisons and joins

### 13.3 Query Optimization

The optimizer transforms the parse tree into an efficient **execution plan**. This is the most complex and important part of query processing.

**Relational Algebra Equivalences (used for rewriting):**

```sql
-- Original query
SELECT * FROM employees WHERE salary > 50000 AND department = 'Engineering'

-- Equivalent forms:
-- 1. σ_salary>50000(σ_dept='Eng'(employees))
-- 2. σ_dept='Eng'(σ_salary>50000(employees))
-- 3. σ_salary>50000 AND dept='Eng'(employees)
```

The optimizer applies transformations:

- **Selection pushing:** Move selections closer to the tables they filter
- **Join reordering:** Consider different join orders
- **Projection pushing:** Reduce column width early
- **View inlining:** Expand views into their base queries

**Cost-Based Optimization:**

The optimizer generates multiple alternative plans and estimates costs:

```sql
-- Different access methods for: SELECT * FROM employees WHERE id = 100

-- Plan A: Sequential scan
-- Cost: N pages (read all pages)

-- Plan B: Index scan on PRIMARY KEY
-- Cost: 3-4 B+ tree levels + 1 page read
```

**Cost Estimation Formula:**
```
Total Cost = CPU Cost + I/O Cost
I/O Cost = Number of disk pages read × Cost per page
CPU Cost = Number of tuples processed × Cost per tuple
```

The optimizer uses **statistics** from the system catalog:

```sql
-- PostgreSQL: View table statistics
SELECT relname, reltuples, relpages FROM pg_class WHERE relname = 'employees';

-- Column statistics
SELECT attname, n_distinct, most_common_vals, most_common_freqs
FROM pg_stats WHERE tablename = 'employees';
```

**Cardinality Estimation:** The optimizer estimates the number of rows at each stage:

- Equality filter: Estimate = total_rows / n_distinct
- Range filter: Estimate ≈ total_rows / 3 (heuristic)
- AND of two conditions: Estimate = rows_after_first × selectivity_of_second
- Join: Estimate ≈ rows_left × rows_right / max(n_distinct(join_column))

### 13.4 Join Algorithms

Join operations are the most performance-critical part of query processing. Three main algorithms:

**1. Nested Loop Join:**

```python
# For each row in outer table, scan inner table for matches
for each row_r in R:
    for each row_s in S:
        if row_r.join_attr == row_s.join_attr:
            output(row_r, row_s)
```

- Cost (no indexes): M × N (M = pages of R, N = pages of S)
- Cost (with index on inner): M + M × index_lookup_cost
- Best when: Small outer table, inner table joined via index
- Used for: Small-to-medium tables, or when one side is small

**2. Hash Join:**

```python
# Phase 1: Build a hash table on the smaller table
# Phase 2: Probe the hash table with the larger table
build_table = smaller_table(R, S)
for each row in build_table:
    hash[hash_func(row.join_attr)] = row

for each row in probe_table:
    matches = hash[hash_func(row.join_attr)]
    for each match in matches:
        if row.join_attr == match.join_attr:
            output(row, match)
```

- Cost: 3 × (pages(R) + pages(S)) approximately
- Best when: No useful indexes, equi-joins, one table is much smaller
- Used for: Large tables, data warehouse queries

**3. Merge Join (Sort-Merge Join):**

```python
# Phase 1: Sort both tables on the join attribute
# Phase 2: Merge the sorted lists
sort(R, join_attr)
sort(S, join_attr)

i, j = 0, 0
while i < len(R) and j < len(S):
    if R[i].join_attr == S[j].join_attr:
        output(R[i], S[j])
        # Handle duplicates
        if next(R) also matches: output all combinations
        i += 1; j += 1
    elif R[i].join_attr < S[j].join_attr:
        i += 1
    else:
        j += 1
```

- Cost: O(M log M + N log N + M + N) for sorting + merge
- Best when: Data is already sorted (e.g., via index), or large equi-joins
- Used for: Large tables when sorting is already needed for ORDER BY

### 13.5 Other Operations

**Aggregation:**

Two approaches:
- **Sort-based:** Sort by GROUP BY columns, then scan and aggregate adjacent rows
- **Hash-based:** Build a hash table keyed by group-by columns, compute aggregates per bucket

**Duplicate Elimination (DISTINCT):**
- Sort and remove adjacent duplicates, or
- Hash and track seen values

**Sorting (ORDER BY):**
- If an index provides the desired order, use it
- Otherwise, sort in memory (if fits) or use external merge sort

### 13.6 Pipelining vs. Materialization

**Pipelining:** Results flow upward through the query plan tree without intermediate storage. Each operator processes one row at a time and passes it to the parent operator.

```
Index Scan → Nested Loop → Projection → Output
               ↑
           Index Scan
```
Result: First row appears quickly (low latency).

**Materialization:** Intermediate results are fully computed and stored in temporary tables.

```
Hash Join
   (build hash table from small table first)
   ↓
Materialized build side
```

Result: Better for algorithms needing random access (hash joins, sort operations).

### 13.7 Reading Execution Plans

```sql
-- PostgreSQL: View query plan without executing
EXPLAIN SELECT * FROM employees WHERE salary > 100000;

-- Output:
-- Seq Scan on employees  (cost=0.00..17340.00 rows=500 width=120)
--   Filter: (salary > 100000)

-- With actual execution statistics
EXPLAIN ANALYZE SELECT e.name, d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
WHERE e.salary > 100000;

-- Output might show:
-- Hash Join  (cost=350.00..4200.00 rows=450 width=80)
--   Hash Cond: (e.dept_id = d.dept_id)
--   -> Seq Scan on employees e  (cost=0.00..3400.00 rows=500 width=40)
--        Filter: (salary > 100000)
--   -> Hash  (cost=30.00..30.00 rows=100 width=44)
--        -> Seq Scan on departments d  (cost=0.00..30.00 rows=100 width=44)
```

**Reading Plans — Key Terms:**
- **cost:** Arbitrary units (lower is better). Format: startup_cost..total_cost
- **rows:** Estimated number of output rows
- **width:** Average output row width in bytes
- **actual time:** With EXPLAIN ANALYZE, real execution time
- **loops:** How many times the node executed

**Common Plan Nodes:**
| Node Type | Meaning |
|-----------|---------|
| Seq Scan | Full table scan |
| Index Scan | B+ tree index lookup |
| Index Only Scan | All needed data in index |
| Bitmap Scan | Bitmap of matching pages |
| Nested Loop | For each outer row, probe inner |
| Hash Join | Build hash on one side, probe with other |
| Merge Join | Sort both sides, then merge |
| Sort | External sort |
| Aggregate | GROUP BY or other aggregation |
| Limit | Stop after N rows |

### 13.8 Query Plan Selection Example

```sql
SELECT o.order_id, c.name
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
WHERE c.state = 'CA'
  AND o.order_date >= '2026-01-01';
```

**Possible Plans:**

Plan A: Scan customers (state='CA'), join with orders via index
```
Index Scan on customers (state='CA') → Nested Loop → Output
                                            ↑
                                     Index Scan on orders(customer_id, order_date)
```
Good if: Many customers in state='CA' ← Actually, if only 2% of customers are in CA, this is excellent.

Plan B: Scan orders (date), join with customers via index
```
Index Scan on orders (date >= '2026-01-01') → Nested Loop → Output
                                                    ↑
                                            Index Scan on customers(customer_id)
```
Good if: Few orders in 2026.

Plan C: Hash join
```
Seq Scan on customers (state='CA') → Hash Join → Output
                                          ↑
                                Seq Scan on orders (date >= '2026-01-01')
```
Good if: Both tables are large and moderate portions are filtered.

The optimizer estimates which plan has the lowest total cost.

### 13.9 Optimization Hints

Most DBMS allow hints to override the optimizer:

```sql
-- PostgreSQL (via extension):
SET pg_hint_plan.enable_hint = ON;
SELECT /*+ SeqScan(employees) */ * FROM employees;

-- Oracle:
SELECT /*+ FULL(employees) */ * FROM employees;
SELECT /*+ INDEX(employees idx_salary) */ * FROM employees WHERE salary > 50000;

-- MySQL:
SELECT STRAIGHT_JOIN e.* FROM employees e JOIN departments d ON e.dept_id = d.dept_id;
```

**When to hint:** Rarely. Modern optimizers make good choices for 95%+ of queries. Hints should only be used when:
- The optimizer consistently chooses a bad plan
- The statistics are out of date
- The query has unusual characteristics

## Examples

**Example 13.1: EXPLAIN Analysis**

```sql
-- Create a sample table and analyze a query
CREATE TABLE large_orders AS
SELECT generate_series(1, 1000000) AS order_id,
       (random() * 10000)::INT AS customer_id,
       NOW() - (random() * 365 * '1 day'::INTERVAL) AS order_date;

CREATE INDEX idx_customer ON large_orders(customer_id);

-- Query 1: Single row lookup
EXPLAIN ANALYZE SELECT * FROM large_orders WHERE order_id = 500000;
-- Output: Index Scan using large_orders_pkey (cost=0.42..8.44 rows=1 width=20)
--         Actual time: 0.043..0.044 rows=1 loops=1

-- Query 2: Range lookup
EXPLAIN ANALYZE SELECT * FROM large_orders WHERE order_id BETWEEN 500000 AND 501000;
-- Output: Index Scan using large_orders_pkey (cost=0.42..35.50 rows=1000 width=20)
--         Actual time: 0.052..0.350 rows=1001 loops=1

-- Query 3: Large range (may choose full scan vs. index)
EXPLAIN ANALYZE SELECT * FROM large_orders WHERE order_id < 500000;
-- Might switch to Seq Scan if optimizer decides it covers too many rows

-- Query 4: No useful index (date function)
EXPLAIN ANALYZE SELECT * FROM large_orders
WHERE order_date > NOW() - INTERVAL '7 days';
-- Seq Scan (unless we create an index on order_date)
```

**Example 13.2: Join Strategy Comparison**

```sql
-- Table sizes: employees (10K rows), departments (100 rows)

-- Join with small result set
EXPLAIN ANALYZE
SELECT e.name, d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
WHERE e.emp_id = 42;
-- Likely: Nested Loop — Index Scan on employees, then Index Scan on departments

-- Join selecting many employees
EXPLAIN ANALYZE
SELECT e.name, d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
WHERE e.salary > 30000;
-- Likely: Hash Join — because many employees will match

-- Join with no filtering
EXPLAIN ANALYZE
SELECT * FROM employees e
JOIN departments d ON e.dept_id = d.dept_id;
-- Likely: Nested Loop or Hash Join depending on data sizes and indexes
```

## Summary

- SQL queries go through: parsing → preprocessing → optimization → execution.
- The optimizer uses statistics to estimate costs and select the best plan.
- Join algorithms: Nested Loop (small result sets), Hash Join (large, no indexes), Merge Join (sorted data).
- Pipelining streams results without intermediate storage; materialization stores intermediate results.
- EXPLAIN shows the query plan; EXPLAIN ANALYZE includes actual execution statistics.
- The optimizer's statistics must be kept up to date (ANALYZE / VACUUM).

## Exercises

### Basic

1. List the main stages of query processing from SQL text to result.

2. What information does the optimizer use to estimate query costs?

3. Describe three join algorithms and when each is most appropriate.

4. Execute and interpret: `EXPLAIN SELECT * FROM employees WHERE department_id = 5;`

### Intermediate

5. Given the query `SELECT * FROM orders WHERE customer_id = 42 AND order_date > '2026-01-01'` and an index on (customer_id, order_date), explain why the optimizer can use the index efficiently. What if the index were (order_date, customer_id)?

6. For a table with 1 million rows and an equality filter on a column with 10,000 distinct values, estimate the number of result rows. Would the optimizer prefer an index scan or a full table scan? How does the answer change if the column has only 2 distinct values?

7. Create a table and populate it with at least 100,000 rows. Use EXPLAIN ANALYZE to compare:
   - A query with an index on the filtered column
   - Same query without the index
   Document the difference in execution time and cost estimates.

8. What is the difference between pipelining and materialization in query execution? Give an example of an operator that requires materialization.

### Advanced

9. Analyze the following query plan and identify potential problems:
```
Sort (cost=25000.00..25500.00 rows=200000 width=40)
  Sort Key: o.order_date
  -> Hash Join (cost=5000.00..15000.00 rows=200000 width=40)
       Hash Cond: (o.customer_id = c.customer_id)
       -> Seq Scan on orders o (cost=0.00..8000.00 rows=500000 width=28)
       -> Hash (cost=1000.00..1000.00 rows=50000 width=16)
            -> Seq Scan on customers c (cost=0.00..1000.00 rows=50000 width=16)
```
What indexes would you recommend? Why is the sort needed?

10. Design a query optimization experiment:
    - Create a table `sales(product_id INT, sale_date DATE, amount DECIMAL)` with 5M rows
    - Write a complex query with GROUP BY, JOIN to a products table, and ORDER BY
    - Create appropriate indexes
    - Compare execution plans with and without indexes
    - Which plan has the lowest cost? Is it the fastest?

11. Some databases support "adaptive" join methods (e.g., Adaptive Join in SQL Server). How do adaptive joins work? When would they choose a different join algorithm mid-execution?
