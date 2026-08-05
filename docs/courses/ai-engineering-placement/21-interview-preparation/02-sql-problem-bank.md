<!-- Clear Language: Keep sentences under 50 words -->
# SQL Problem Bank

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Write medium-to-hard SQL queries using joins, subqueries, and CTEs |
| LO2 | Master window functions for ranking, running totals, and moving averages |
| LO3 | Optimize SQL queries with proper indexing and execution plan analysis |
| LO4 | Solve data modeling and schema design problems |
| LO5 | Handle common SQL interview questions: gaps and islands, duplicate detection, hierarchical queries |
| LO6 | Write performant Python + SQL integration code for data pipelines |

## Introduction

Interviews test both technical skill and communication. DSA patterns, system design, behavioral questions, and mock interviews prepare you for the full interview loop. This module is your final prep before offers.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding sql problem bank is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how sql problem bank works in practice.

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 2.1 | Joins Deep Dive | INNER, LEFT, RIGHT, FULL, CROSS, SELF, ANTI, SEMI |
| 2.2 | Subqueries & CTEs | Correlated vs uncorrelated, recursive CTEs, common table expressions |
| 2.3 | Window Functions | ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, NTILE |
| 2.4 | Aggregate Patterns | Running totals, moving averages, pivot tables |
| 2.5 | Gaps & Islands | Identifying ranges of consecutive values |
| 2.6 | Hierarchical Queries | Recursive CTEs for tree structures, adjacency lists |
| 2.7 | Performance Optimization | Indexing strategies, EXPLAIN plans, query rewriting |
| 2.8 | Python + SQL Integration | Parameterized queries, connection pooling, ORM patterns |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Joins] --> B[Subqueries & CTEs]
    B --> C[Window Functions]
    C --> D[Aggregate Patterns]
    D --> E[Gaps & Islands]
    E --> F[Hierarchical Queries]
    F --> G[Performance Optimization]
    G --> H[Python + SQL Integration]
```

## 2.1 Joins Deep Dive

SQL joins combine rows from two or more tables based on related columns. Beyond basic joins, master these patterns:

**Types of joins**: INNER JOIN returns matching rows from both tables. LEFT JOIN returns all rows from the left table and matching rows from the right. RIGHT JOIN is the opposite. FULL OUTER JOIN returns all rows from both tables. CROSS JOIN produces a Cartesian product.

**Anti-join pattern**: Find records in one table that have no match in another table. Use NOT EXISTS or LEFT JOIN + IS NULL.

**Semi-join pattern**: Return rows from the first table where at least one match exists in the second table. Use EXISTS or IN.

```sql
-- Sample schema
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    department_id INTEGER,
    salary DECIMAL(10,2)
);

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    employee_id INTEGER REFERENCES employees(id)
);

-- Anti-join: employees without projects
SELECT e.*
FROM employees e
LEFT JOIN projects p ON e.id = p.employee_id
WHERE p.id IS NULL;

-- Equivalent with NOT EXISTS
SELECT e.*
FROM employees e
WHERE NOT EXISTS (
    SELECT 1 FROM projects p WHERE p.employee_id = e.id
);

-- Semi-join: employees with projects (using EXISTS)
SELECT e.*
FROM employees e
WHERE EXISTS (
    SELECT 1 FROM projects p WHERE p.employee_id = e.id
);

-- Self-join: employees earning more than their manager
SELECT e.name AS employee, e.salary, m.name AS manager, m.salary AS manager_salary
FROM employees e
JOIN employees m ON e.manager_id = m.id
WHERE e.salary > m.salary;
```

**Performance note**: INNER JOIN is typically the fastest. LEFT JOIN with IS NULL can be slower than NOT EXISTS on some databases. Use EXISTS for semi-joins rather than IN with subqueries.

---

## 2.2 Subqueries & CTEs

Subqueries are queries nested inside other queries. CTEs (Common Table Expressions) are named subqueries that make complex queries more readable.

**Correlated subquery**: References columns from the outer query and runs once per row of the outer result.

**Uncorrelated subquery**: Independent of the outer query and runs once.

**Recursive CTE**: A CTE that references itself, used for hierarchical data.

```sql
-- Correlated subquery: employees earning above department average
SELECT e.name, e.salary, e.department_id
FROM employees e
WHERE e.salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE department_id = e.department_id
);

-- Uncorrelated subquery: departments with no employees
SELECT d.name
FROM departments d
WHERE d.id NOT IN (
    SELECT DISTINCT department_id FROM employees WHERE department_id IS NOT NULL
);

-- CTE for department salary statistics
WITH dept_stats AS (
    SELECT
        department_id,
        AVG(salary) AS avg_salary,
        MAX(salary) AS max_salary,
        MIN(salary) AS min_salary,
        COUNT(*) AS employee_count
    FROM employees
    GROUP BY department_id
)
SELECT d.name, ds.*
FROM departments d
JOIN dept_stats ds ON d.id = ds.department_id
ORDER BY ds.avg_salary DESC;

-- Recursive CTE: employee hierarchy (org chart)
WITH RECURSIVE org_chart AS (
    -- Base case: top-level managers
    SELECT id, name, manager_id, 1 AS level, ARRAY[name] AS path
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive step: reports
    SELECT e.id, e.name, e.manager_id, oc.level + 1, oc.path || e.name
    FROM employees e
    JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT * FROM org_chart ORDER BY level, name;
```

**CTEs are materialized differently across databases**: PostgreSQL materializes CTEs by default (which can hurt performance), while SQL Server inlines them. Use CTEs for readability; consider subqueries for simple cases where CTEs might cause performance issues.

---

## 2.3 Window Functions

Window functions perform calculations across a set of rows related to the current row, without collapsing rows like GROUP BY.

**Ranking functions**: ROW_NUMBER, RANK, DENSE_RANK, NTILE.

**Value functions**: LAG, LEAD, FIRST_VALUE, LAST_VALUE.

**Aggregate window functions**: SUM, AVG, COUNT, MIN, MAX with OVER clause.

```sql
-- ROW_NUMBER: unique rank, no ties
SELECT
    name,
    salary,
    department_id,
    ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank
FROM employees;

-- RANK vs DENSE_RANK: ties
-- RANK skips numbers after ties (1, 1, 3), DENSE_RANK does not (1, 1, 2)
SELECT
    name,
    salary,
    RANK() OVER (ORDER BY salary DESC) AS rank,
    DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank
FROM employees;

-- LAG/LEAD: compare with previous/next row
SELECT
    name,
    salary,
    LAG(salary) OVER (ORDER BY salary) AS prev_salary,
    salary - LAG(salary) OVER (ORDER BY salary) AS salary_diff,
    LEAD(salary) OVER (ORDER BY salary) AS next_salary
FROM employees;

-- Moving average (3-month)
SELECT
    month,
    revenue,
    AVG(revenue) OVER (ORDER BY month ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg_3m
FROM monthly_revenue;

-- Running total
SELECT
    date,
    amount,
    SUM(amount) OVER (ORDER BY date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total
FROM transactions;

-- NTILE: quartiles
SELECT
    name,
    salary,
    NTILE(4) OVER (ORDER BY salary DESC) AS quartile
FROM employees;
```

**Common interview problems**: Find the Nth highest salary (using DENSE_RANK or OFFSET/FETCH), year-over-year growth, top N per group, consecutive date streaks.

---

## 2.4 Aggregate Patterns

Beyond basic GROUP BY, these patterns appear frequently in interviews:

**Pivot / Crosstab**: Convert rows to columns. Use conditional aggregation or the PIVOT function (SQL Server) / crosstab (PostgreSQL).

**Rollup / Cube**: Multi-level aggregation for reporting. GROUP BY ROLLUP produces subtotals and grand totals. GROUP BY CUBE produces all combinations.

**FILTER clause (PostgreSQL)**: Conditional aggregation without CASE expressions.

```sql
-- Pivot by conditional aggregation
SELECT
    department_id,
    COUNT(*) FILTER (WHERE salary >= 100000) AS high_earners,
    COUNT(*) FILTER (WHERE salary BETWEEN 50000 AND 99999) AS mid_earners,
    COUNT(*) FILTER (WHERE salary < 50000) AS low_earners
FROM employees
GROUP BY department_id;

-- ROLLUP: department subtotals + grand total
SELECT
    COALESCE(d.name, 'All Departments') AS department,
    COUNT(*) AS employee_count,
    SUM(e.salary) AS total_salary
FROM employees e
JOIN departments d ON e.department_id = d.id
GROUP BY ROLLUP (d.name)
ORDER BY d.name NULLS LAST;

-- CUBE: all aggregation combinations
SELECT
    COALESCE(department, 'All') AS department,
    COALESCE(level, 'All') AS level,
    COUNT(*) AS count
FROM employees
GROUP BY CUBE (department, level);

-- Running total (temporal aggregation)
SELECT
    order_date,
    amount,
    SUM(amount) OVER (ORDER BY order_date) AS cumulative_revenue,
    SUM(amount) OVER (ORDER BY order_date ROWS BETWEEN 3 PRECEDING AND CURRENT ROW) AS rolling_4_period
FROM orders;
```

**Performance tip**: Use filtered aggregates (PostgreSQL FILTER or CASE inside SUM) instead of multiple subqueries for conditional counting.

---

## 2.5 Gaps & Islands

The Gaps and Islands problem identifies ranges of consecutive data. Islands are groups of consecutive values; gaps are the missing values between islands.

**Classic problem**: Find consecutive date ranges for a user's login streak.

```sql
-- Island detection: consecutive login streaks
WITH login_dates AS (
    SELECT DISTINCT user_id, login_date::DATE AS login_date
    FROM logins
),
numbered AS (
    SELECT
        user_id,
        login_date,
        login_date - ROW_NUMBER() OVER (
            PARTITION BY user_id ORDER BY login_date
        )::INTEGER AS grp
    FROM login_dates
)
SELECT
    user_id,
    MIN(login_date) AS streak_start,
    MAX(login_date) AS streak_end,
    COUNT(*) AS streak_length
FROM numbered
GROUP BY user_id, grp
HAVING COUNT(*) >= 5  -- streaks of 5 or more days
ORDER BY user_id, streak_start;

-- Gap detection: find missing IDs in a sequence
WITH all_ids AS (
    SELECT generate_series(1, (SELECT MAX(id) FROM orders)) AS id
)
SELECT a.id AS missing_id
FROM all_ids a
LEFT JOIN orders o ON a.id = o.id
WHERE o.id IS NULL;

-- Another approach: LEAD to find gaps between consecutive rows
SELECT
    current_id,
    next_id,
    next_id - current_id - 1 AS gap_size
FROM (
    SELECT
        id AS current_id,
        LEAD(id) OVER (ORDER BY id) AS next_id
    FROM orders
) sub
WHERE next_id - current_id > 1;
```

**Common variants**: Sessionization (grouping user activity into sessions by time threshold), stock price gap analysis, attendance tracking.

---

## 2.6 Hierarchical Queries

Hierarchical data is common in organizational charts, category trees, and bill of materials. SQL handles it with recursive CTEs (or CONNECT BY in Oracle).

**Adjacency list model**: Each row stores a parent_id reference. This is the most common approach.

**Nested set model**: Each node stores left/right values for efficient subtree queries. Less common but useful for read-heavy workloads.

**Materialized path**: Stores the full path as a string (e.g., "1/4/7/"). Simpler than nested sets but less flexible.

```sql
-- Build category tree with recursion
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    parent_id INTEGER REFERENCES categories(id)
);

WITH RECURSIVE category_tree AS (
    -- Base: root categories
    SELECT id, name, parent_id, 0 AS depth, name::TEXT AS path
    FROM categories
    WHERE parent_id IS NULL

    UNION ALL

    -- Recursive: children
    SELECT c.id, c.name, c.parent_id, ct.depth + 1,
           ct.path || ' > ' || c.name
    FROM categories c
    JOIN category_tree ct ON c.parent_id = ct.id
)
SELECT * FROM category_tree ORDER BY path;

-- Find all descendants of a specific category
WITH RECURSIVE descendants AS (
    SELECT id, name, parent_id
    FROM categories
    WHERE id = 5  -- starting category

    UNION ALL

    SELECT c.id, c.name, c.parent_id
    FROM categories c
    JOIN descendants d ON c.parent_id = d.id
)
SELECT * FROM descendants;

-- Find all ancestors (breadcrumb trail)
WITH RECURSIVE ancestors AS (
    SELECT id, name, parent_id, 0 AS depth
    FROM categories
    WHERE id = 15

    UNION ALL

    SELECT c.id, c.name, c.parent_id, a.depth + 1
    FROM categories c
    JOIN ancestors a ON c.id = a.parent_id
)
SELECT * FROM ancestors ORDER BY depth DESC;
```

**Performance considerations**: Recursive CTEs can be slow for deep hierarchies. Set MAXDEPTH to prevent infinite recursion. Consider materializing the path column for read-heavy workloads.

---

## 2.7 Performance Optimization

Query performance is a critical interview topic. Know these optimization strategies:

**Indexing**: B-tree indexes for equality and range queries. Covering indexes (INCLUDE columns) to avoid table lookups. Partial indexes for WHERE clause conditions. Composite indexes column order matters — put high-selectivity columns first.

**EXPLAIN plan**: Read execution plans to identify sequential scans, nested loops vs hash joins vs merge joins, and sort operations.

**Query rewriting**: Replace correlated subqueries with joins or window functions. Break complex queries into CTEs or temp tables. Use EXISTS instead of DISTINCT for semi-joins.

```sql
-- Create efficient indexes
CREATE INDEX idx_employees_department_id ON employees(department_id);
CREATE INDEX idx_employees_salary ON employees(salary DESC);
CREATE INDEX idx_orders_customer_date ON orders(customer_id, order_date);
CREATE INDEX idx_orders_active ON orders(status) WHERE status = 'PENDING';
CREATE INDEX idx_employees_covering ON employees(department_id) INCLUDE (name, salary);

-- Compare execution plans
EXPLAIN ANALYZE
SELECT e.name, e.salary
FROM employees e
WHERE e.department_id = 3 AND e.salary > 100000;

-- Bad: correlated subquery (runs for every row)
SELECT e.name, (
    SELECT COUNT(*) FROM orders WHERE employee_id = e.id
) AS order_count
FROM employees e;

-- Good: subquery with GROUP BY (runs once)
SELECT e.name, COALESCE(o.order_count, 0) AS order_count
FROM employees e
LEFT JOIN (
    SELECT employee_id, COUNT(*) AS order_count
    FROM orders
    GROUP BY employee_id
) o ON e.id = o.employee_id;

-- Bad: DISTINCT to remove duplicates from join
SELECT DISTINCT e.name
FROM employees e
JOIN orders o ON e.id = o.employee_id;

-- Good: EXISTS for semi-join
SELECT e.name
FROM employees e
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.employee_id = e.id
);

-- Pagination: keyset pagination vs OFFSET
-- Bad (OFFSET — scans all skipped rows)
SELECT * FROM employees ORDER BY id OFFSET 10000 LIMIT 20;

-- Good (keyset — uses index seek)
SELECT * FROM employees
WHERE id > 10000
ORDER BY id
LIMIT 20;
```

**Common anti-patterns**: SELECT * in production, functions on indexed columns in WHERE (`WHERE YEAR(date) = 2024` instead of `WHERE date >= '2024-01-01' AND date < '2025-01-01'`), missing indexes on foreign keys, implicit type conversion.

---

## 2.8 Python + SQL Integration

Connecting Python to SQL databases efficiently is critical for backend engineers.

```python
import sqlite3
import psycopg2
from psycopg2 import pool
from contextlib import contextmanager
from typing import Any, Generator

## Connection pool (PostgreSQL)
class DatabasePool:
    def __init__(self, min_conn: int = 2, max_conn: int = 10, **kwargs):
        self.pool = pool.ThreadedConnectionPool(min_conn, max_conn, **kwargs)

    @contextmanager
    def get_conn(self) -> Generator:
        conn = self.pool.getconn()
        try:
            yield conn
            conn.commit()
        except Exception:
            conn.rollback()
            raise
        finally:
            self.pool.putconn(conn)

    def close(self) -> None:
        self.pool.closeall()

## Parameterized query (safe from SQL injection)
def get_employees_by_department(db: DatabasePool, dept_id: int) -> list[dict[str, Any]]:
    with db.get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute(
                "SELECT id, name, salary FROM employees WHERE department_id = %s",
                (dept_id,)
            )
            columns = [desc[0] for desc in cur.description]
            return [dict(zip(columns, row)) for row in cur.fetchall()]

## Batch insert with executemany
def bulk_insert_employees(db: DatabasePool, employees: list[dict[str, Any]]) -> None:
    with db.get_conn() as conn:
        with conn.cursor() as cur:
            psycopg2.extras.execute_values(
                cur,
                "INSERT INTO employees (name, department_id, salary) VALUES %s",
                [(e["name"], e["dept_id"], e["salary"]) for e in employees],
                template="(%s, %s, %s)"
            )

## SQLAlchemy ORM equivalent
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import sessionmaker, declarative_base, relationship

Base = declarative_base()

class Department(Base):
    __tablename__ = "departments"
    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    employees = relationship("Employee", back_populates="department")

class Employee(Base):
    __tablename__ = "employees"
    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    salary = Column(Float)
    department_id = Column(Integer, ForeignKey("departments.id"))
    department = relationship("Department", back_populates="employees")

## Usage
engine = create_engine("postgresql://user:pass@localhost/db")
Session = sessionmaker(bind=engine)

def get_high_earners(session, threshold: float = 100000):
    return (
        session.query(Employee)
        .filter(Employee.salary > threshold)
        .all()
    )
```

**Connection pooling is essential** for production applications. Without pooling, each request creates a new connection (expensive). SQLAlchemy's `create_engine` includes built-in pooling.

**Always use parameterized queries** — never concatenate user input into SQL strings. Raw string interpolation is the most common SQL injection vector.

---

## Summary

- Know all join types: INNER, LEFT, RIGHT, FULL, CROSS, SELF, ANTI (NOT EXISTS), SEMI (EXISTS)
- CTEs improve readability; recursive CTEs handle hierarchical and graph-like data
- Window functions enable ranking, running totals, moving averages, and inter-row comparisons without GROUP BY collapse
- Gaps and Islands pattern: subtract ROW_NUMBER from the value/date to form groups
- Hierarchical queries use recursive CTEs with a base case and recursive step
- Index strategy: B-tree for equality/range, partial for filtered queries, covering to avoid table lookups
- Python integration requires connection pooling, parameterized queries, and ORM awareness

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Find unmatched records | `NOT EXISTS` or `LEFT JOIN + IS NULL` | `NOT IN` with subquery (NULL issue) |
| Top-N per group | Window function `ROW_NUMBER() OVER (PARTITION BY ...)` | Correlated subquery |
| Consecutive ranges | ROW_NUMBER subtraction technique | Self-joins |
| Tree structure | Recursive CTE | Multiple queries in application code |
| Slow query | `EXPLAIN ANALYZE` + add indexes | Adding more hardware blindly |
| Python DB access | Connection pool + parameterized queries | Opening/closing connections per request |
| Pagination | Keyset pagination (`WHERE id > last_seen`) | Large OFFSET values |

## Interview Q&A

<details class="tp-qa-card" data-qid="ip-s02-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What is the difference between WHERE and HAVING?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>WHERE</strong> filters rows <strong>before</strong> grouping and aggregation. It cannot reference aggregate functions.</p>
    <p><strong>HAVING</strong> filters groups <strong>after</strong> aggregation. It can reference aggregate functions like COUNT, SUM, AVG.</p>
    <pre><code>-- WHERE filters individual rows before grouping
SELECT department_id, AVG(salary) AS avg_salary
FROM employees
WHERE salary &gt; 50000  -- excludes low salaries before averaging
GROUP BY department_id
HAVING AVG(salary) &gt; 80000;  -- filters departments after averaging</code></pre>
    <p>Execution order: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY. Use WHERE for row-level filters and HAVING for group-level filters.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s02-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: Explain the difference between clustered and non-clustered indexes.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Clustered index</strong> determines the physical order of data in the table. There can be only one per table. Data is stored in the leaf level of the index. In PostgreSQL, it's specified with <code>CLUSTER</code>; the primary key often acts as the clustered index.</p>
    <p><strong>Non-clustered index</strong> is a separate structure containing the indexed columns and a pointer to the actual data row (clustered index key or row ID). A table can have multiple non-clustered indexes.</p>
    <p><strong>Performance implications</strong>:</p>
    <ul>
      <li>Clustered indexes are fastest for range queries on the indexed column</li>
      <li>Non-clustered indexes can be covering indexes (INCLUDE columns) to avoid table lookups</li>
      <li>Inserts on a clustered index with sequential keys (autoincrement) are efficient; random keys cause page splits</li>
      <li>PostgreSQL uses heap tables with separate indexes; MySQL InnoDB uses the primary key as clustered</li>
    </ul>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s02-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: Write a query to find duplicate emails in a users table.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Approach 1 — GROUP BY + HAVING</strong>:</p>
    <pre><code>SELECT email, COUNT(*) AS count
FROM users
GROUP BY email
HAVING COUNT(*) &gt; 1;</code></pre>
    <p><strong>Approach 2 — Window function to identify duplicates</strong>:</p>
    <pre><code>SELECT id, email
FROM (
    SELECT id, email,
           ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn
    FROM users
) sub
WHERE rn &gt; 1;</code></pre>
    <p><strong>To delete duplicates, keeping the first occurrence</strong>:</p>
    <pre><code>DELETE FROM users
WHERE id NOT IN (
    SELECT MIN(id)
    FROM users
    GROUP BY email
);</code></pre>
    <p>Or using a CTE with window function:</p>
    <pre><code>WITH duplicates AS (
    SELECT id,
           ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn
    FROM users
)
DELETE FROM users
WHERE id IN (SELECT id FROM duplicates WHERE rn &gt; 1);</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s02-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: What are window functions and give a practical example?
  </summary>
  <div class="tp-qa-answer">
    <p>Window functions perform calculations across a set of rows related to the current row while preserving individual row detail. Unlike GROUP BY, they don't collapse rows.</p>
    <p><strong>Practical example: Department salary ranking</strong>:</p>
    <pre><code>SELECT
    name,
    department_id,
    salary,
    RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS dept_rank,
    AVG(salary) OVER (PARTITION BY department_id) AS dept_avg,
    salary - AVG(salary) OVER (PARTITION BY department_id) AS vs_avg,
    LAG(salary) OVER (PARTITION BY department_id ORDER BY salary) AS prev_salary
FROM employees;</code></pre>
    <p><strong>PARTITION BY</strong> defines the group of rows. <strong>ORDER BY</strong> defines the ordering within each partition. <strong>ROWS/RANGE</strong> defines the frame bounds within the partition.</p>
    <p>Common use cases: running totals, moving averages, year-over-year comparisons, top N per group, deduplication.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s02-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How do you find the Nth highest salary without using LIMIT/OFFSET?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Approach 1 — Correlated subquery</strong>:</p>
    <pre><code>SELECT DISTINCT salary
FROM employees e
WHERE N = (
    SELECT COUNT(DISTINCT salary)
    FROM employees
    WHERE salary &gt;= e.salary
);</code></pre>
    <p><strong>Approach 2 — Window function (most readable)</strong>:</p>
    <pre><code>SELECT DISTINCT salary
FROM (
    SELECT salary,
           DENSE_RANK() OVER (ORDER BY salary DESC) AS dr
    FROM employees
) sub
WHERE dr = N;</code></pre>
    <p><strong>Approach 3 — Self-join with HAVING</strong>:</p>
    <pre><code>SELECT e.salary
FROM employees e
JOIN employees e2 ON e.salary &lt;= e2.salary
GROUP BY e.salary
HAVING COUNT(DISTINCT e2.salary) = N;</code></pre>
    <p>DENSE_RANK handles ties correctly (doesn't skip numbers). Use RANK if you want ties to be counted (e.g., two employees at #3 means the next rank is #5).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s02-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: Explain the concept of "Gaps and Islands" with an example.
  </summary>
  <div class="tp-qa-answer">
    <p>The Gaps and Islands problem identifies consecutive ranges (islands) and missing values (gaps) in a sequence.</p>
    <p><strong>Example: Find consecutive days a user logged in</strong>:</p>
    <pre><code>WITH daily_logins AS (
    SELECT DISTINCT user_id, login_date::DATE AS login_date
    FROM logins
    WHERE user_id = 42
),
numbered AS (
    SELECT
        login_date,
        login_date - ROW_NUMBER() OVER (ORDER BY login_date)::INTEGER AS grp
    FROM daily_logins
)
SELECT
    MIN(login_date) AS streak_start,
    MAX(login_date) AS streak_end,
    COUNT(*) AS streak_days
FROM numbered
GROUP BY grp
ORDER BY streak_start;</code></pre>
    <p><strong>How it works</strong>: ROW_NUMBER assigns consecutive integers to each date. Subtracting the row number from the date creates a constant value for consecutive dates. Non-consecutive dates get different group values, splitting them into separate islands.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s02-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: What is the difference between INNER JOIN and LEFT JOIN?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>INNER JOIN</strong> returns only rows where there's a match in both tables. Non-matching rows from either table are excluded.</p>
    <p><strong>LEFT JOIN</strong> (or LEFT OUTER JOIN) returns all rows from the left table, plus matching rows from the right table. If there's no match, right table columns are NULL.</p>
    <pre><code>-- INNER JOIN: only employees with departments
SELECT e.name, d.name AS department
FROM employees e
INNER JOIN departments d ON e.department_id = d.id;

-- LEFT JOIN: all employees, even those without departments
SELECT e.name, COALESCE(d.name, 'Unassigned') AS department
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id;</code></pre>
    <p><strong>Result sets</strong>: INNER JOIN can produce fewer rows than LEFT JOIN because it discards non-matching records. If every employee has a valid department_id, both queries return the same rows.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s02-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do recursive CTEs work? Give a real-world use case.
  </summary>
  <div class="tp-qa-answer">
    <p>A recursive CTE has two parts — the <strong>anchor member</strong> (base case) and the <strong>recursive member</strong> that references the CTE by name. The recursion stops when the recursive member returns no rows.</p>
    <p><strong>Use case: Organizational chart</strong>:</p>
    <pre><code>WITH RECURSIVE org_tree AS (
    -- Anchor: CEO (no manager)
    SELECT id, name, manager_id, 0 AS depth, name::TEXT AS path
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive: direct reports
    SELECT e.id, e.name, e.manager_id,
           ot.depth + 1,
           ot.path || ' → ' || e.name
    FROM employees e
    JOIN org_tree ot ON e.manager_id = ot.id
)
SELECT * FROM org_tree ORDER BY path;</code></pre>
    <p>Other use cases: Bill of materials (product components), comment threads, category trees, graph traversal. Set <code>MAXRECURSION</code> to prevent infinite loops.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s02-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: What is a covering index and when would you use one?
  </summary>
  <div class="tp-qa-answer">
    <p>A covering index (or index with included columns) contains all columns needed by a query, eliminating the need to read the actual table row. The query can be satisfied entirely from the index.</p>
    <pre><code>-- Without covering index: index lookup + table access
CREATE INDEX idx_emp_dept ON employees(department_id);
-- Query must read table for name and salary

-- With covering index: index-only scan
CREATE INDEX idx_emp_dept_covering ON employees(department_id) INCLUDE (name, salary);
-- Query can be satisfied from index alone:
SELECT name, salary FROM employees WHERE department_id = 3;</code></pre>
    <p><strong>When to use</strong>: For frequently-run queries that access a small subset of columns. The tradeoff is larger index storage and slower writes. PostgreSQL supports INCLUDE columns; SQL Server has INCLUDE; MySQL uses composite indexes.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s02-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: Write a query to calculate year-over-year growth.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Using LAG to get the previous year's value</strong>:</p>
    <pre><code>WITH yearly_revenue AS (
    SELECT
        EXTRACT(YEAR FROM order_date) AS year,
        SUM(amount) AS revenue
    FROM orders
    GROUP BY EXTRACT(YEAR FROM order_date)
)
SELECT
    year,
    revenue,
    LAG(revenue) OVER (ORDER BY year) AS prev_year_revenue,
    ROUND(
        (revenue - LAG(revenue) OVER (ORDER BY year))
        / NULLIF(LAG(revenue) OVER (ORDER BY year), 0) * 100,
        2
    ) AS yoy_growth_percent
FROM yearly_revenue
ORDER BY year;</code></pre>
    <p><strong>NULLIF</strong> prevents division by zero. For monthly comparisons to the same month last year:</p>
    <pre><code>SELECT
    EXTRACT(YEAR FROM order_date) AS year,
    EXTRACT(MONTH FROM order_date) AS month,
    SUM(amount) AS revenue,
    LAG(SUM(amount)) OVER (
        PARTITION BY EXTRACT(MONTH FROM order_date)
        ORDER BY EXTRACT(YEAR FROM order_date)
    ) AS prev_year_same_month
FROM orders
GROUP BY year, month
ORDER BY year, month;</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s02-q11">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q11: Explain ACID properties in databases.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Atomicity</strong>: A transaction is all-or-nothing. If any part fails, the entire transaction rolls back. Implemented via write-ahead logging (WAL) — changes are logged before being applied.</p>
    <p><strong>Consistency</strong>: A transaction brings the database from one valid state to another, preserving all defined rules (constraints, cascades, triggers).</p>
    <p><strong>Isolation</strong>: Concurrent transactions don't interfere with each other. SQL defines four isolation levels:</p>
    <ul>
      <li><strong>READ UNCOMMITTED</strong>: Dirty reads allowed</li>
      <li><strong>READ COMMITTED</strong>: Only committed data (prevents dirty reads) — default in PostgreSQL and SQL Server</li>
      <li><strong>REPEATABLE READ</strong>: Same row read twice gives same result</li>
      <li><strong>SERIALIZABLE</strong>: Complete isolation — transactions execute as if sequentially</li>
    </ul>
    <p><strong>Durability</strong>: Once committed, changes persist even after system failure. Achieved through WAL, which is replayed on crash recovery.</p>
    <p>PostgreSQL uses snapshot isolation (MVCC) for READ COMMITTED and REPEATABLE READ, providing strong consistency without blocking reads.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s02-q12">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q12: What is the difference between UNION and UNION ALL?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>UNION</strong> combines results from multiple SELECT queries and removes duplicate rows. It performs a sort/distinct operation, which can be expensive for large datasets.</p>
    <p><strong>UNION ALL</strong> combines results without removing duplicates. It's faster because it doesn't sort or deduplicate.</p>
    <pre><code>-- UNION: unique names across both tables
SELECT name FROM current_employees
UNION
SELECT name FROM former_employees;

-- UNION ALL: all names, including duplicates
SELECT name FROM current_employees
UNION ALL
SELECT name FROM former_employees;</code></pre>
    <p><strong>When to use each</strong>:</p>
    <ul>
      <li>Use UNION when you need distinct results and can tolerate the performance cost</li>
      <li>Use UNION ALL when you know the results are already disjoint or duplicates don't matter</li>
      <li>In pagination or large datasets, prefer UNION ALL + application-level dedup if possible</li>
    </ul>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s02-q13">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q13: How would you design a database for a URL shortening service?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Core schema</strong>:</p>
    <pre><code>CREATE TABLE urls (
    id BIGSERIAL PRIMARY KEY,
    short_code VARCHAR(10) UNIQUE NOT NULL,
    original_url TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    expires_at TIMESTAMP,
    user_id INTEGER REFERENCES users(id),
    is_active BOOLEAN DEFAULT TRUE
);

CREATE INDEX idx_short_code ON urls(short_code);
CREATE INDEX idx_user_id ON urls(user_id);
CREATE INDEX idx_created_at ON urls(created_at DESC);

CREATE TABLE url_clicks (
    id BIGSERIAL PRIMARY KEY,
    url_id INTEGER REFERENCES urls(id) ON DELETE CASCADE,
    clicked_at TIMESTAMP DEFAULT NOW(),
    ip_address INET,
    user_agent TEXT,
    referrer TEXT,
    country VARCHAR(2)
);

CREATE INDEX idx_url_id_clicked ON url_clicks(url_id, clicked_at);
-- Partition by month for click data
-- CREATE TABLE url_clicks_2024_01 (...) INHERITS (url_clicks);</code></pre>
    <p><strong>Key design decisions</strong>:</p>
    <ul>
      <li><strong>short_code</strong>: Base62 encoding of the auto-increment ID or random string to prevent enumeration</li>
      <li><strong>Indexing</strong>: short_code lookup is the hot path — must be indexed</li>
      <li><strong>Clicks table</strong>: High-volume write — consider partitioning by time, archiving old data</li>
      <li><strong>Cache</strong>: Use Redis to cache URL lookups — TTL of 24 hours for active URLs</li>
      <li><strong>Rate limiting</strong>: Enforce per-IP creation limits to prevent abuse</li>
    </ul>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s02-q14">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q14: Explain database normalization up to 3NF with examples.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>1NF (First Normal Form)</strong>: Each column contains atomic values. No repeating groups or arrays.</p>
    <pre><code>-- Violates 1NF: phone numbers stored as comma-separated
CREATE TABLE users (
    id INT,
    name VARCHAR(100),
    phones VARCHAR(200)  -- "555-0100,555-0200"
);

-- 1NF compliant: separate row per phone
CREATE TABLE user_phones (
    user_id INT,
    phone VARCHAR(20)
);</code></pre>
    <p><strong>2NF (Second Normal Form)</strong>: Must be in 1NF, and every non-key column must depend on the entire primary key (relevant for composite keys).</p>
    <pre><code>-- Violates 2NF: course_name depends only on course_id, not on student_id
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    course_name VARCHAR(100),  -- functionally dependent on course_id only
    PRIMARY KEY (student_id, course_id)
);

-- 2NF compliant: separate courses table
CREATE TABLE courses (course_id INT PRIMARY KEY, course_name VARCHAR(100));</code></pre>
    <p><strong>3NF (Third Normal Form)</strong>: Must be in 2NF, and no transitive dependencies (non-key column depending on another non-key column).</p>
    <pre><code>-- Violates 3NF: department_location depends on department_id, not employee_id
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(100),
    department_id INT,
    department_location VARCHAR(100)
);

-- 3NF compliant: department_location lives in departments table
CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(100),
    department_location VARCHAR(100)
);</code></pre>
    <p><strong>When to denormalize</strong>: For read-heavy workloads where joins are expensive (OLAP, reporting), consider denormalization with appropriate synchronization logic.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s02-q15">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q15: What are materialized views and when should you use them?
  </summary>
  <div class="tp-qa-answer">
    <p>A materialized view stores the query result as a physical table, updated periodically via REFRESH. Unlike regular views (virtual queries that run each time), materialized views provide snapshot data for fast reads.</p>
    <pre><code>-- Create materialized view for dashboard
CREATE MATERIALIZED VIEW daily_sales_summary AS
SELECT
    order_date::DATE AS date,
    COUNT(*) AS order_count,
    SUM(amount) AS total_revenue,
    AVG(amount) AS avg_order_value
FROM orders
WHERE status = 'COMPLETED'
GROUP BY order_date::DATE
ORDER BY order_date::DATE;

-- Refresh (takes an exclusive lock by default)
REFRESH MATERIALIZED VIEW daily_sales_summary;

-- Concurrent refresh (PostgreSQL 9.4+, requires unique index)
CREATE UNIQUE INDEX idx_dss_date ON daily_sales_summary(date);
REFRESH MATERIALIZED VIEW CONCURRENTLY daily_sales_summary;</code></pre>
    <p><strong>When to use</strong>:</p>
    <ul>
      <li>Expensive aggregation queries that run frequently (dashboards, reports)</li>
      <li>Data that doesn't change often or doesn't need real-time accuracy</li>
      <li>Complex queries involving multiple joins and aggregations</li>
    </ul>
    <p><strong>When NOT to use</strong>:</p>
    <ul>
      <li>Data changes rapidly (real-time systems)</li>
      <li>Storage is a constraint (materialized views duplicate data)</li>
      <li>The query is simple and fast already</li>
    </ul>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which SQL join returns all rows from the left table and matching rows from the right table?

a) INNER JOIN
b) LEFT JOIN
c) RIGHT JOIN
d) CROSS JOIN

<details class="tp-qa-card" data-qid="ip-s02-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) LEFT JOIN</strong></p><p>LEFT JOIN (or LEFT OUTER JOIN) preserves all rows from the left table, filling unmatched right-table columns with NULL.</p></div></details>

**Q2**: What does `ROW_NUMBER()` OVER (PARTITION BY dept_id ORDER BY salary DESC)` assign to the highest-paid employee in each department?

a) NULL
b) 0
c) 1
d) The total number of employees in the department

<details class="tp-qa-card" data-qid="ip-s02-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) 1</strong></p><p>ROW_NUMBER restarts at 1 for each partition. With ORDER BY salary DESC, the highest salary gets 1.</p></div></details>

**Q3**: Which clause filters groups after aggregation?

a) WHERE
b) HAVING
c) FILTER
d) ORDER BY

<details class="tp-qa-card" data-qid="ip-s02-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) HAVING</strong></p><p>HAVING filters groups created by GROUP BY using aggregate function results. WHERE filters rows before grouping.</p></div></details>

**Q4**: What is the main advantage of keyset pagination over OFFSET-based pagination?

a) Simpler SQL syntax
b) Works without an ORDER BY clause
c) Constant performance regardless of page number
d) Returns random rows

<details class="tp-qa-card" data-qid="ip-s02-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Constant performance regardless of page number</strong></p><p>OFFSET must skip all previous rows, making deep pages slow. Keyset pagination uses WHERE id > last_seen, leveraging the index for constant-time lookups.</p></div></details>

**Q5**: Which isolation level prevents dirty reads?

a) READ UNCOMMITTED
b) READ COMMITTED
c) SERIALIZABLE
d) Both b and c

<details class="tp-qa-card" data-qid="ip-s02-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: d) Both b and c</strong></p><p>READ COMMITTED (the default in PostgreSQL and SQL Server) prevents dirty reads, as does SERIALIZABLE. READ UNCOMMITTED allows dirty reads.</p></div></details>

## Exercises

**Easy** — Write a query to find the top 3 highest-paid employees in each department using a window function. Include ties if salaries are equal.

**Easy** — Given a table `sessions(user_id, login_time, logout_time)`, find all users who were logged in at exactly midnight (00:00:00) on any day.

**Medium** — Implement the "Gaps and Islands" solution for a table with `date` and `value` columns. Find all consecutive date ranges where the value was above a threshold.

**Medium** — Design a database schema for a task management system (like Trello). Include boards, lists, cards, labels, comments, and assignments. Write the 3 most important queries.

**Hard** — Write a recursive CTE to traverse a directed acyclic graph (DAG) and find all possible paths between two nodes. Include a cycle detection mechanism. Schema: `edges(from_node, to_node)`.

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

1. **Explain the core idea of SQL Problem Bank in under 60 seconds, then give a real-world analogy.** â€” Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?

2. **Design a minimal, well-typed function that demonstrates SQL Problem Bank.** â€” Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?

3. **What are the common pitfalls when engineers first learn ** â€” List 3-4, then explain how you would prevent each in a code review.

#### Amazon Style

4. **Describe a production bug caused by misunderstanding SQL Problem Bank. How did you diagnose and fix it?** â€” STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added.

5. **How would you scale a system that relies on SQL Problem Bank from 10 users to 10 million?** â€” Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?

#### Microsoft Style

6. **Compare SQL Problem Bank with the closest alternative approach. When would you choose each?** â€” Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?

7. **Walk through how you would test a component that depends on SQL Problem Bank.** â€” Unit, integration, property-based tests; mocking boundaries; golden files for outputs.

#### NVIDIA Style

8. **How does SQL Problem Bank behave differently at scale â€” memory, throughput, or precision-wise?** â€” Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?

9. **How would you make an implementation of SQL Problem Bank run faster on GPU hardware?** â€” Batch operations, vectorization, avoiding Python loops, reducing data movement.

#### AI Startup Style

10. **Write the smallest possible implementation of SQL Problem Bank that is production-quality.** â€” Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?

### Resume Tips

- Name SQL Problem Bank explicitly in your skills section, paired with a measurable achievement ("Reduced X by 40% using SQL Problem Bank").
- Add a bullet describing a project that applies SQL Problem Bank to real data, with numbers.
- Mention the tools and libraries you used alongside SQL Problem Bank (linters, test frameworks, profiling tools).
- Keep resume bullets under 15 words and start each with an action verb.

### Interview Day Checklist

- Rehearse a 60-second explanation of SQL Problem Bank and one real-world analogy.
- Prepare one STAR story about debugging a SQL Problem Bank-related production issue.
- Review complexity and edge cases for the classic SQL Problem Bank interview problem.
- Have questions ready: how does the team apply SQL Problem Bank in production today?
- Test your environment (Python, editor, internet) 15 minutes before the interview.

## True/False

1. **True or False:** SQL Problem Bank builds directly on the fundamentals covered in the earlier chapters of this module. â€” **True.** Every advanced topic in this module assumes the core concepts from the previous chapters.
2. **True or False:** You should write at least one code example for SQL Problem Bank before moving to the next chapter. â€” **True.** Active recall with hands-on code beats passive reading for retention.
3. **True or False:** The complexity analysis for SQL Problem Bank is the same regardless of input size. â€” **False.** Complexity grows with input size; always state best, average, and worst case.
4. **True or False:** Edge cases (empty input, invalid input, boundary values) matter for SQL Problem Bank in production. â€” **True.** Most production bugs come from unhandled edge cases.
5. **True or False:** You should memorize the SQL Problem Bank chapter content once and never review it again. â€” **False.** Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall.

## Fill in the Blank

1. The chapter that covers SQL Problem Bank is Chapter ___ of this module. â€” Answer: check the module's table of contents.
2. The time complexity of the standard approach to SQL Problem Bank is ___. â€” Answer: review the theory section and state big-O notation.
3. The main edge case to handle when implementing SQL Problem Bank is ___. â€” Answer: empty or invalid input handling, as discussed in the chapter.
4. The tools commonly used to debug SQL Problem Bank issues are ___ and ___. â€” Answer: refer to the Debugging Guide section of this chapter.
5. The related topic that connects to SQL Problem Bank in the next chapter is ___. â€” Answer: see the Next Topic section.

## Scenario Questions

1. **Scenario:** A teammate ships a change involving SQL Problem Bank that breaks production at 3 AM. â€” Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist.

2. **Scenario:** Your implementation of SQL Problem Bank is correct but too slow for the required latency. â€” Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes.

3. **Scenario:** A new hire asks you to explain SQL Problem Bank in five minutes before a customer demo. â€” Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo.

4. **Scenario:** Your team's codebase has three different patterns for SQL Problem Bank and you must standardize. â€” Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it.

## Output Questions

1. **What is the output of the simplest correct implementation of SQL Problem Bank on an empty input?** â€” Trace through the code: it should return the documented default (None, 0, empty collection) without raising.
2. **What is the output when the input is at the boundary value?** â€” Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples.
3. **What does the implementation return when given invalid input types?** â€” With type hints and validation, it raises a clear error; without, it may fail silently.
4. **What is the output for the sample input given in the chapter's Examples section?** â€” Re-run the chapter's example code and compare against the documented output.
5. **What is the time complexity output when you profile the implementation at 10x input size?** â€” Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear).

## Difficulty Level

| Level | Time | What It Takes |
|-------|------|---------------|
| Beginner | 1-2 sessions | Read theory, run the chapter examples, solve the Easy exercises |
| Intermediate | 3-5 sessions | Complete Medium exercises, explain SQL Problem Bank to someone else |
| Advanced | 1+ week | Solve Hard exercises, optimize for real datasets, answer interview follow-ups |

## Tips & Tricks

- Always write a one-line example of SQL Problem Bank from memory before opening the chapter â€” active recall first.
- Use the chapter's Revision Notes as a checklist: you have mastered SQL Problem Bank when you can explain each bullet.
- Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus.
- For interviews, practice explaining SQL Problem Bank twice: once with a technical audience, once with a non-technical audience.
- Keep a personal examples file where you collect your own SQL Problem Bank snippets; interviewers love original examples.

## Memory Tricks

- **Acronym**: build a mnemonic from the 5 key concepts of SQL Problem Bank listed in the Chapter at a Glance table.
- **Story**: link SQL Problem Bank to a familiar story â€” the analogy in the Visual Analogy section is designed to stick.
- **Number anchor**: remember the complexity of SQL Problem Bank by connecting it to a known algorithm of the same class.
- **Color code**: highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing.
- **Teach-back**: explain SQL Problem Bank to an imaginary junior engineer for 2 minutes â€” gaps in your explanation are gaps in memory.

## Further Reading

- Official documentation for the primary tool or library used in this chapter
- The chapter referenced in Related Topics for the next-level treatment of SQL Problem Bank
- The classic textbook chapter on SQL Problem Bank (check the Research References below)
- Two blog posts from engineers who debugged real SQL Problem Bank problems in production
- The repository of the open-source project that implements SQL Problem Bank

## Related Topics

- The previous chapter in this module (see table of contents) â€” foundational for SQL Problem Bank
- The next chapter (see Next Topic below) â€” builds on SQL Problem Bank
- The system design chapters in Module 07 â€” how SQL Problem Bank fits into production architectures
- The interview preparation module â€” how SQL Problem Bank is asked in screening rounds
- The capstone project â€” where SQL Problem Bank is applied end-to-end

## FAQs

1. **Do I need to memorize all of SQL Problem Bank, or understand the big picture?** â€” Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth.
2. **What if I get stuck on an exercise?** â€” Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day.
3. **How much time should I spend on ** â€” Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation.
4. **Is SQL Problem Bank asked in interviews?** â€” Yes â€” the Interview Q&A and Placement Section list the exact question styles used by top companies.
5. **What's the fastest way to master ** â€” Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days.

## Important Notes

- SQL Problem Bank is a core requirement for the rest of this module â€” do not skip the examples.
- Always analyze complexity (time and space) when working with SQL Problem Bank.
- Production correctness means handling edge cases, not just the happy path.
- Interview answers should start with the definition, then the example, then the trade-offs.
- Revisit this chapter after finishing the module; the context from later chapters deepens understanding.

## Historical Context

- SQL Problem Bank emerged as a standard practice because early systems failed without it â€” understanding why helps you explain it in interviews.
- The tools used for SQL Problem Bank today evolved from simpler versions; the chapter covers the modern, recommended approach.
- Interviewers value knowing one historical fact about SQL Problem Bank â€” it shows genuine interest, not just cramming.
- The library/tooling ecosystem around SQL Problem Bank changes quickly; focus on fundamentals that remain stable.

## Security Considerations

- Never trust external input: validate and sanitize data before processing SQL Problem Bank.
- Avoid `eval()` and dynamic code execution on untrusted strings.
- Log errors without leaking sensitive data (keys, PII, internal paths).
- For API contexts, add rate limiting and input size limits.
- Review the chapter's code examples for injection or overflow risks before using them verbatim.

## ML Intuition

- SQL Problem Bank appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation.
- Understanding SQL Problem Bank helps you debug why a model misbehaves â€” most ML bugs are data bugs, not model bugs.
- In production ML, the SQL Problem Bank concepts from this chapter map directly to NumPy/PyTorch operations on tensors.
- When optimizing ML systems, SQL Problem Bank skills let you profile and fix the data path, not just the training loop.
- Interview follow-up: how would you apply SQL Problem Bank to a dataset of 10 million records? â€” Batching and vectorization.

## Analogies

- **SQL Problem Bank is like a recipe**: the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice.
- **Complexity is like a delivery route**: a linear route visits each stop once; a nested route revisits stops, and you feel it at scale.
- **Edge cases are like weather**: the happy path is a sunny day; production is the storm â€” build for the storm.
- **The chapter roadmap is a journey map**: each section is a checkpoint; skipping one means getting lost later in the module.

## Capstone Project Link

- [Module Capstone: End-to-End Project](https://github.com/Raushan666java/ai-engineering-journey) â€” this chapter contributes the SQL Problem Bank skills used in the module's capstone project. Complete the exercises here before starting the capstone.

## Flashcards

<details class="tp-qa-card" data-qid="21interviewpreparation-02sqlproblembank-flash1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Which SQL join returns all rows from the left table and matching rows from the right table?
  </summary>
  <div class="tp-qa-answer">
    <p>b) LEFT JOIN</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="21interviewpreparation-02sqlproblembank-flash2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What does ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY salary DESC) assign to the highest-paid employee in each department?
  </summary>
  <div class="tp-qa-answer">
    <p>c) 1</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="21interviewpreparation-02sqlproblembank-flash3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Which clause filters groups after aggregation?
  </summary>
  <div class="tp-qa-answer">
    <p>b) HAVING</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="21interviewpreparation-02sqlproblembank-flash4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What is the main advantage of keyset pagination over OFFSET-based pagination?
  </summary>
  <div class="tp-qa-answer">
    <p>c) Constant performance regardless of page number</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="21interviewpreparation-02sqlproblembank-flash5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Which isolation level prevents dirty reads?
  </summary>
  <div class="tp-qa-answer">
    <p>d) Both b and c</p>
  </div>
</details>

## Research References

- Official documentation of the primary library for SQL Problem Bank (linked in Further Reading)
- The classic paper or textbook chapter introducing SQL Problem Bank (see References below)
- The standard library reference for SQL Problem Bank-related functions
- Engineering blog posts from companies running SQL Problem Bank in production at scale
- PEPs and RFCs where applicable (Python and networking standards)

## Open-Source Tools

- The primary library used in this chapter (see the code examples)
- Python standard library modules used in the examples (check the imports)
- Testing: pytest for unit tests of SQL Problem Bank code
- Linting and formatting: ruff + black
- Profiling: cProfile or py-spy for performance work on SQL Problem Bank

## Debugging Guide

- Start with `print()` or a debugger to inspect intermediate values in SQL Problem Bank code.
- Reproduce the failure with the smallest possible input before changing code.
- Check the common failure modes listed in Common Mistakes â€” most bugs are listed there.
- For performance problems, profile before optimizing: measure, then fix.
- When stuck, re-read the chapter's Examples and compare line by line with your code.
- Use `pdb` or your IDE's debugger to step through the SQL Problem Bank example code.

## Mock Interview Section

**Round 1 â€” Screening (15 min)**
- Explain SQL Problem Bank in 60 seconds.
- Write a minimal working example of SQL Problem Bank.
- What is the complexity of your example?

**Round 2 â€” Coding (45 min)**
- Solve the Medium exercise from this chapter under time pressure.
- State your assumptions, then implement with type hints.
- Test with edge cases: empty input, boundary values, invalid input.

**Round 3 â€” Behavioral + System (30 min)**
- Tell me about a time you debugged a SQL Problem Bank problem in a project.
- How would you design a system where SQL Problem Bank is used at scale?
- What metrics would you monitor?

**Evaluation rubric**: correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%).

## Optimized Implementation

`python
from typing import Any, Optional

def demonstrate_topic(input_data: list[Any]) -> Optional[float]:
    """Runnable scaffold for SQL Problem Bank.

    Replace the body with the optimized implementation from the chapter,
    keeping type hints, docstring, and edge-case handling.
    """
    if not input_data:
        return None
    # Step 1: validate input types
    # Step 2: apply the core SQL Problem Bank logic from the Examples section
    # Step 3: return the result with the documented default
    return 0.0
`

- Keeps the function signature stable so tests written against it stay valid.
- Handles the empty-input contract explicitly.
- Add unit tests for the edge cases before implementing the logic (test-first).

## Evaluation Metrics

| Skill | Test | Target |
|-------|------|--------|
| Concept recall | Explain SQL Problem Bank without notes | 60-second explanation |
| Code fluency | Write the chapter example from memory | No syntax errors |
| Edge cases | Handle empty/invalid input in exercises | All cases pass |
| Complexity | State time/space for the standard approach | Correct big-O |
| Interview readiness | Answer 5 Interview Q&A questions out loud | Fluent, structured answers |
| Retention | Chapter quiz score after 3 days | 80%+ |

## Real-World Examples

- **Startup**: a small team uses SQL Problem Bank daily in their data pipeline â€” the chapter's examples mirror their code.
- **E-commerce**: SQL Problem Bank patterns appear in order processing, inventory checks, and recommendation feeds.
- **Fintech**: SQL Problem Bank principles apply to transaction validation and fraud detection flows.
- **ML platform**: SQL Problem Bank shows up in feature engineering and model-serving infrastructure.
- **Interview insight**: recruiters look for engineers who can connect SQL Problem Bank to the business outcome, not just the code.

## Next Topic

[Backend Coding Interview](03-backend-coding-interview.md)

## Limitations

- SQL Problem Bank, like any technique, is not a silver bullet â€” it has specific cases where it fits best (covered in the theory).
- The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling.
- Performance of SQL Problem Bank depends on input size and distribution â€” always benchmark for your own data.
- This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone.
