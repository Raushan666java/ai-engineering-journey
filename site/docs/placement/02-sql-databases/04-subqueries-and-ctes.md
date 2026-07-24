---
slug: /02-sql-databases/subqueries-and-ctes
title: "Subqueries And Ctes"
sidebar_label: "Subqueries And Ctes"
sidebar_position: 4
---

# Subqueries & CTEs � Correlated, WITH, Recursive

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Write scalar and row subqueries in SELECT and WHERE |
| LO2 | Use correlated subqueries for row-by-row comparisons |
| LO3 | Simplify queries with Common Table Expressions (CTEs) |
| LO4 | Write recursive CTEs for hierarchical data |
| LO5 | Understand performance implications of subqueries vs joins |
| LO6 | Use EXISTS, NOT EXISTS, ANY, ALL with subqueries |

## Introduction

Data is the fuel of AI. SQL and database design skills let you query, transform, and store the data that powers machine learning models. This module covers everything from basic queries to advanced indexing and optimization.




## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding subqueries and ctes is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how subqueries and ctes works in practice.



## Examples

### Basic Example

```python

## Basic subqueries and ctes example
def example():
    """Demonstrate subqueries and ctes"""
    result = "Hello, subqueries and ctes!"
    print(result)
    return result

example()
```text

### Expected Output

```text
Hello, subqueries and ctes!
```text

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 4.1 | Scalar Subqueries | Single value in SELECT/WHERE |
| 4.2 | Row & Table Subqueries | FROM clause subqueries, derived tables |
| 4.3 | Correlated Subqueries | References outer query, per-row execution |
| 4.4 | EXISTS / ANY / ALL | Boolean subqueries for existence/comparison |
| 4.5 | CTEs with WITH | Named subqueries, readability |
| 4.6 | Recursive CTEs | WITH RECURSIVE for trees, graphs |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Subqueries] --> B[Scalar: single value]
    A --> C[Row/Table: FROM clause]
    A --> D[Correlated: per-row]
    A --> E[EXISTS / ANY / ALL]
    F[CTEs] --> G[WITH ... AS]
    F --> H[Recursive CTEs]
    F --> I[Multiple CTEs]
```text

## 4.1 Scalar Subqueries

Return a single value, used in SELECT or WHERE.

`sql
-- In SELECT � employee salary vs average
SELECT name, salary,
    (SELECT AVG(salary) FROM employees) AS company_avg,
    salary - (SELECT AVG(salary) FROM employees) AS diff_from_avg
FROM employees;

-- In WHERE � find employees earning above average
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- In WHERE � find products priced above category average
SELECT name, price, category_id
FROM products p
WHERE price > (SELECT AVG(price) FROM products WHERE category_id = p.category_id);
`

**Python simulation**:

`python
import sqlite3
conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE emp(id, name, salary, dept_id)")
cur.executemany("INSERT INTO emp VALUES (?,?,?,?)", [
    (1, "Alice", 75000, 1), (2, "Bob", 68000, 1),
    (3, "Charlie", 82000, 2), (4, "Diana", 72000, 2),
])

## Employees earning above their department average
cur.execute("""
    SELECT e.name, e.salary, e.dept_id
    FROM emp e
    WHERE e.salary > (SELECT AVG(salary) FROM emp WHERE dept_id = e.dept_id)
""")
for row in cur.fetchall():
    print(f"{row[0]}: {row[1]} > dept avg")

## Alice: 75000 > Eng avg (71500)

## Charlie: 82000 > Sales avg (77000)
`

## 4.2 Row & Table Subqueries

`sql
-- FROM clause subquery (derived table)
SELECT dept_stats.dept_id, dept_stats.avg_sal
FROM (
    SELECT dept_id, AVG(salary) AS avg_sal
    FROM employees
    GROUP BY dept_id
) AS dept_stats
WHERE dept_stats.avg_sal > 70000;

-- Row comparison
SELECT name, salary
FROM employees
WHERE (department_id, salary) = (
    SELECT department_id, MAX(salary)
    FROM employees
    GROUP BY department_id
    LIMIT 1
);

-- IN with subquery
SELECT name FROM employees
WHERE department_id IN (
    SELECT id FROM departments WHERE location = 'New York'
);
`

## 4.3 Correlated Subqueries

A correlated subquery references columns from the outer query and executes once per outer row.

`sql
-- Find each employee's rank within their department
SELECT e.name, e.salary, e.department_id,
    (SELECT COUNT(*) + 1 FROM employees
     WHERE department_id = e.department_id
       AND salary > e.salary) AS rank_in_dept
FROM employees e;

-- Find the most recent order for each customer
SELECT c.name, o.order_date, o.amount
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_date = (
    SELECT MAX(order_date) FROM orders
    WHERE customer_id = c.customer_id
);

-- Find products with above-average price in their category
SELECT p.product_id, p.name, p.price, p.category_id
FROM products p
WHERE p.price > (
    SELECT AVG(price) FROM products
    WHERE category_id = p.category_id
);
`

## 4.4 EXISTS / ANY / ALL

`sql
-- EXISTS: true if subquery returns any rows
SELECT name FROM customers c
WHERE EXISTS (
    SELECT 1 FROM orders o
    WHERE o.customer_id = c.customer_id AND o.amount > 1000
);

-- NOT EXISTS: customers with no orders
SELECT name FROM customers c
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id
);

-- ANY: true if comparison is true for any subquery value
SELECT name, salary
FROM employees
WHERE salary > ANY (
    SELECT salary FROM employees WHERE department_id = 3
);

-- ALL: true if comparison is true for ALL subquery values
SELECT name, salary
FROM employees
WHERE salary > ALL (
    SELECT AVG(salary) FROM employees GROUP BY department_id
);

-- Equivalent to MAX/MIN
WHERE salary > ANY (...)  -- same as salary > MIN(...)
WHERE salary > ALL (...)  -- same as salary > MAX(...)
`

## 4.5 CTEs with WITH

CTEs (Common Table Expressions) name a subquery for reuse.

`python
import sqlite3
conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE emp(id, name, salary, dept)")
cur.executemany("INSERT INTO emp VALUES (?,?,?,?)", [
    (1,"Alice",75000,"Eng"), (2,"Bob",68000,"Eng"),
    (3,"Charlie",82000,"Sales"), (4,"Diana",72000,"Sales"),
])

cur.execute("""
    WITH dept_avg AS (
        SELECT dept, AVG(salary) AS avg_sal
        FROM emp GROUP BY dept
    )
    SELECT e.name, e.salary, d.avg_sal
    FROM emp e
    JOIN dept_avg d ON e.dept = d.dept
    WHERE e.salary > d.avg_sal
""")
for row in cur.fetchall():
    print(f"{row[0]}:  > dept avg ")
`

`sql
-- Multiple CTEs
WITH
dept_stats AS (
    SELECT department_id, AVG(salary) AS avg_sal FROM employees GROUP BY department_id
),
high_performers AS (
    SELECT e.* FROM employees e
    JOIN dept_stats d ON e.department_id = d.department_id
    WHERE e.salary > d.avg_sal * 1.2
)
SELECT * FROM high_performers ORDER BY salary DESC;

-- CTE in INSERT/UPDATE/DELETE
WITH deleted AS (
    DELETE FROM orders WHERE order_date < '2020-01-01' RETURNING *
)
SELECT COUNT(*) AS archived FROM deleted;
`

## 4.6 Recursive CTEs

Recursive CTEs reference themselves to traverse hierarchical or graph data.

`sql
-- Organization chart: employee -> manager chain
WITH RECURSIVE org_chain AS (
    -- Anchor: top-level employees
    SELECT id, name, manager_id, 1 AS level
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive: employees reporting to those above
    SELECT e.id, e.name, e.manager_id, oc.level + 1
    FROM employees e
    JOIN org_chain oc ON e.manager_id = oc.id
)
SELECT * FROM org_chain ORDER BY level, name;

-- Fibonacci sequence
WITH RECURSIVE fib(n, a, b) AS (
    SELECT 1, 0, 1
    UNION ALL
    SELECT n + 1, b, a + b
    FROM fib
    WHERE n < 10
)
SELECT n, a AS fibonacci FROM fib;

-- Date series
WITH RECURSIVE dates(d) AS (
    SELECT DATE('2024-01-01')
    UNION ALL
    SELECT DATE(d, '+1 day')
    FROM dates
    WHERE d < '2024-01-10'
)
SELECT * FROM dates;
`

## TypeScript Parallel

`	ypescript
// TypeScript: subquery-like patterns with arrays
const employees = [
    { name: "Alice", salary: 75000, dept: "Eng" },
    { name: "Bob", salary: 68000, dept: "Eng" },
];

// Correlated subquery equivalent
const deptAvgs = employees.reduce((acc, e) => {
    acc[e.dept] = (acc[e.dept] || 0) + e.salary;
    return acc;
}, {} as Record<string, number>);

const aboveAvg = employees.filter(e =>
    e.salary > deptAvgs[e.dept] / employees.filter(x => x.dept === e.dept).length
);
`

## Summary

- Scalar subqueries return one value; table subqueries return multiple rows/columns
- Correlated subqueries reference outer query and run per outer row (potential performance issue)
- EXISTS checks for existence (short-circuits); IN compares against a list
- ANY/ALL compare against any/all values from subquery
- CTEs (WITH) name subqueries for readability and reuse
- Recursive CTEs traverse hierarchies: anchor + UNION ALL + recursive member
- CTEs can be used in INSERT/UPDATE/DELETE (with RETURNING)
- Subqueries in FROM require an alias (derived table)
- Typically rewrite correlated subqueries as JOINs for performance
- Recursive CTEs have MAXRECURSION limit (default 100 in SQL Server, 1000 in PostgreSQL)

## Practical Takeaways

| Scenario | Use | Avoid |
|----------|-----|-------|
| Single aggregate per row | Scalar subquery in SELECT | Multiple separate queries |
| Complex derived data | CTE (WITH) | Nested subqueries |
| Hierarchical tree | Recursive CTE | Application-level recursion |
| Existence check | EXISTS | IN with large subquery |
| Find missing rows | NOT EXISTS | NOT IN (if subquery has NULLs) |
| Per-group comparison | Correlated subquery | Multiple queries + app logic |

## Interview Q&A

<details class="tp-qa-card" data-qid="sql-s04-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: Correlated vs non-correlated subquery?</summary>
  <div class="tp-qa-answer"><p>Non-correlated: independent of outer query, executed once. Correlated: references outer columns, executed once per outer row. Correlated can be slower but more powerful for per-row calculations.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s04-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: EXISTS vs IN?</summary>
  <div class="tp-qa-answer"><p>EXISTS short-circuits (stops on first match), handles NULLs correctly (returns true/false without NULL complications). IN lists all values first, treats NULL as unknown. EXISTS often faster for large subqueries. NOT EXISTS is safer than NOT IN when NULLs exist.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s04-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: What is a CTE and when to use it?</summary>
  <div class="tp-qa-answer"><p>CTE (Common Table Expression) is a named temporary result set with WITH clause. Use for: complex queries needing multiple references, recursive queries, breaking down complex logic, alternatives to views for one-time use.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s04-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: How does a recursive CTE work?</summary>
  <div class="tp-qa-answer"><p>Two parts: anchor member (initial query, no self-reference) and recursive member (references the CTE name). UNION ALL combines them. The recursive member uses the previous iteration's results. Stops when the recursive step returns no rows.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s04-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: Can subqueries be used in UPDATE/DELETE?</summary>
  <div class="tp-qa-answer"><p>Yes. UPDATE ... SET col = (subquery) WHERE ... or DELETE FROM ... WHERE col IN (subquery). CTEs also work with UPDATE/DELETE/INSERT, especially with RETURNING clause in PostgreSQL.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s04-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: Performance: subquery vs join?</summary>
  <div class="tp-qa-answer"><p>Joins are generally faster because the optimizer can use various join strategies. Subqueries (especially correlated) can be slower as they execute per row. However, EXISTS with a subquery can be faster than a DISTINCT join. Modern optimizers often rewrite subqueries to joins automatically.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s04-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: What is a lateral join/subquery?</summary>
  <div class="tp-qa-answer"><p>LATERAL allows a subquery in FROM to reference columns from preceding FROM items. Like a correlated subquery but in the FROM clause. Powerful for top-N-per-group, complex calculations. Supported in PostgreSQL, Oracle, MySQL 8+.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s04-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: How do you handle NULL in subqueries?</summary>
<div class="tp-qa-answer"><p>IN with NULL in subquery: if any NULL exists, IN evaluates to unknown for non-matching rows (handled as false in WHERE). NOT IN with NULL: if NULL exists,.
ALL rows are excluded (returns empty). Use NOT EXISTS instead of NOT IN for safety with NULLs.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s04-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: What are derived tables?</summary>
  <div class="tp-qa-answer"><p>A derived table is a subquery in the FROM clause: SELECT * FROM (SELECT ... ) AS alias. Must have an alias. Can be nested. Less reusable than CTEs but useful for intermediate calculations in simple queries.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s04-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: Difference between ANY and ALL?</summary>
  <div class="tp-qa-answer"><p>ANY: true if condition holds for at least one subquery value (like OR). ALL: true if condition holds for all subquery values (like AND). salary > ANY(SELECT ... ) is same as salary > MIN(...). salary > ALL(...) is same as salary > MAX(...).</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Correlated subquery references? a) outer query b) itself c) nothing d) another DB

<details class="tp-qa-card" data-qid="sql-s04-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) references columns from the outer query</strong></p></div></details>

**Q2**: Which clause defines a CTE? a) WITH b) CTE c) USING d) DEFINE

<details class="tp-qa-card" data-qid="sql-s04-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) WITH</strong></p></div></details>

**Q3**: Recursive CTE uses which operator? a) UNION b) UNION ALL c) JOIN d) INTERSECT

<details class="tp-qa-card" data-qid="sql-s04-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) UNION ALL</strong></p></div></details>

**Q4**: What's wrong with NOT IN (SELECT ...)? a) slow b) NULL issue c) syntax error d) nothing

<details class="tp-qa-card" data-qid="sql-s04-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) if subquery returns NULL, NOT IN returns empty</strong></p></div></details>

**Q5**: ALL with WHERE x > ALL(SELECT y FROM t) is like? a) x > MIN(y) b) x > MAX(y) c) x > AVG(y) d) x > COUNT(y)

<details class="tp-qa-card" data-qid="sql-s04-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) x > MAX(y) � greater than all is greater than the maximum</strong></p></div></details>

## Exercises

**Easy** � Write a subquery in SELECT showing each employee's salary vs department average.
**Easy** � Use EXISTS to find customers who placed at least one order.
**Medium** � Rewrite a multi-table join as a CTE with two named subqueries.
**Medium** � Write a correlated subquery that finds products priced above their category average.
**Hard** � Use a recursive CTE to generate a date series for every day in 2024.
**Hard** � Write a recursive CTE to traverse a category hierarchy and compute total products at each level.

## 4.7 LATERAL Joins

LATERAL allows subqueries in FROM to reference columns from preceding tables.

`sql
-- For each department, get the top 3 highest-paid employees
SELECT d.department_name, top_emp.name, top_emp.salary
FROM departments d
CROSS JOIN LATERAL (
    SELECT name, salary
    FROM employees
    WHERE department_id = d.department_id
    ORDER BY salary DESC
    LIMIT 3
) top_emp;

-- Without LATERAL (more complex):
SELECT d.department_name, e.name, e.salary
FROM departments d
JOIN employees e ON d.department_id = e.department_id
WHERE e.employee_id IN (
    SELECT e2.employee_id
    FROM employees e2
    WHERE e2.department_id = d.department_id
    ORDER BY e2.salary DESC
    LIMIT 3
);

-- LATERAL with functions
SELECT
    u.user_id,
    u.name,
    recent_orders.*
FROM users u
LEFT JOIN LATERAL (
    SELECT order_id, order_date, amount
    FROM orders
    WHERE customer_id = u.user_id
    ORDER BY order_date DESC
    LIMIT 5
) recent_orders ON true;

-- Using LATERAL for complex calculations
SELECT
    p.product_id,
    p.name,
    stats.avg_price,
    stats.total_sold
FROM products p
LEFT JOIN LATERAL (
    SELECT
        AVG(oi.unit_price) AS avg_price,
        SUM(oi.quantity) AS total_sold
    FROM order_items oi
    WHERE oi.product_id = p.product_id
) stats ON true;
`

## 4.8 Multiple CTEs and CTE Modifications

`sql
-- Multiple CTEs working together
WITH
sales_summary AS (
    SELECT
        customer_id,
        COUNT(*) AS total_orders,
        SUM(amount) AS total_spent,
        AVG(amount) AS avg_order_value
    FROM orders
    WHERE order_date >= DATE('now', '-1 year')
    GROUP BY customer_id
),
customer_ranking AS (
    SELECT
        c.customer_id,
        c.name,
        c.email,
        COALESCE(s.total_orders, 0) AS total_orders,
        COALESCE(s.total_spent, 0) AS total_spent,
        NTILE(4) OVER (ORDER BY s.total_spent DESC NULLS LAST) AS spending_quartile
    FROM customers c
    LEFT JOIN sales_summary s ON c.customer_id = s.customer_id
)
SELECT *
FROM customer_ranking
WHERE spending_quartile = 1  -- top 25%
ORDER BY total_spent DESC;

-- CTE with INSERT
WITH new_customer AS (
    INSERT INTO customers (name, email, signup_date)
    VALUES ('New User', 'new@example.com', CURRENT_DATE)
    RETURNING customer_id
)
INSERT INTO loyalty_program (customer_id, points, tier)
SELECT customer_id, 100, 'Bronze'
FROM new_customer;

-- CTE with UPDATE
WITH dept_avg AS (
    SELECT department_id, AVG(salary) AS avg_sal
    FROM employees GROUP BY department_id
)
UPDATE employees e
SET salary = salary * 1.1
FROM dept_avg d
WHERE e.department_id = d.department_id
  AND e.salary < d.avg_sal;

-- CTE with DELETE (archive old records)
WITH old_orders AS (
    DELETE FROM orders
    WHERE order_date < DATE('now', '-3 years')
    RETURNING *
)
INSERT INTO orders_archive
SELECT * FROM old_orders;
`

## 4.9 Performance: Subqueries vs CTEs vs Joins

`sql
-- Scenario 1: Correlated subquery
SELECT e.name, e.salary,
    (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id) AS dept_avg
FROM employees e;
-- Pro: Simple, self-contained
-- Con: Runs per outer row (can be slow on large tables)

-- Scenario 2: CTE equivalent
WITH dept_avg AS (
    SELECT department_id, AVG(salary) AS avg_sal
    FROM employees
    GROUP BY department_id
)
SELECT e.name, e.salary, d.avg_sal
FROM employees e
LEFT JOIN dept_avg d ON e.department_id = d.department_id;
-- Pro: Department average computed once
-- Con: Slightly more verbose

-- Scenario 3: Window function (most efficient for this case)
SELECT name, salary,
    AVG(salary) OVER (PARTITION BY department_id) AS dept_avg
FROM employees;
-- Pro: Single pass over data
-- Con: Window functions not available everywhere

-- Performance guidelines:
-- 1. Use JOIN for straightforward row combining
-- 2. Use CTE for complex queries needing reuse
-- 3. Use EXISTS over IN for large subqueries
-- 4. Use window functions over correlated subqueries
-- 5. Avoid subqueries in SELECT for large tables
-- 6. LATERAL joins can replace some correlated subqueries efficiently
`

## 4.10 Recursive CTE Advanced Examples

`sql
-- Generate a calendar year
WITH RECURSIVE calendar(date) AS (
    SELECT DATE('2024-01-01')
    UNION ALL
    SELECT DATE(date, '+1 day')
    FROM calendar
    WHERE date < '2024-12-31'
)
SELECT
    date,
    CAST(strftime('%w', date) AS INTEGER) AS day_of_week,
    CASE CAST(strftime('%w', date) AS INTEGER)
        WHEN 0 THEN 'Sunday'
        WHEN 1 THEN 'Monday'
        WHEN 2 THEN 'Tuesday'
        WHEN 3 THEN 'Wednesday'
        WHEN 4 THEN 'Thursday'
        WHEN 5 THEN 'Friday'
        WHEN 6 THEN 'Saturday'
    END AS day_name,
    strftime('%m', date) AS month,
    strftime('%Y', date) AS year
FROM calendar
WHERE CAST(strftime('%w', date) AS INTEGER) NOT IN (0, 6);  -- exclude weekends

-- Tree traversal with path
WITH RECURSIVE org_chart AS (
    -- Anchor: top-level
    SELECT
        employee_id,
        name,
        manager_id,
        name AS path,
        1 AS level
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive: children
    SELECT
        e.employee_id,
        e.name,
        e.manager_id,
        oc.path || ' -> ' || e.name,
        oc.level + 1
    FROM employees e
    JOIN org_chart oc ON e.manager_id = oc.employee_id
)
SELECT employee_id, name, level, path
FROM org_chart
ORDER BY path;

-- Bill of Materials (BOM) explosion
WITH RECURSIVE bom AS (
    -- Anchor: top-level product
    SELECT
        part_id,
        part_name,
        quantity,
        1 AS level,
        CAST(quantity AS REAL) AS total_quantity
    FROM parts
    WHERE part_id = 1  -- root product

    UNION ALL

    SELECT
        p.part_id,
        p.part_name,
        p.quantity,
        bom.level + 1,
        bom.total_quantity * p.quantity
    FROM parts p
    JOIN bom ON p.parent_part_id = bom.part_id
)
SELECT * FROM bom ORDER BY level, part_name;

-- Graph traversal (social network connections)
WITH RECURSIVE connections AS (
    -- Anchor: start user
    SELECT user_id, 0 AS degrees, CAST(user_id AS TEXT) AS path
    FROM users WHERE user_id = 1

    UNION ALL

    SELECT
        f.friend_id,
        c.degrees + 1,
        c.path || ',' || f.friend_id
    FROM connections c
    JOIN friendships f ON c.user_id = f.user_id
    WHERE c.degrees < 3  -- limit to 3 degrees
      AND ',' || c.path || ',' NOT LIKE '%,' || f.friend_id || ',%'  -- avoid cycles
)
SELECT DISTINCT user_id, degrees, path
FROM connections
WHERE user_id != 1
ORDER BY degrees, user_id;
`

## 4.11 Common Pitfalls

`sql
-- Pitfall 1: NOT IN with NULLs
SELECT name FROM customers
WHERE customer_id NOT IN (
    SELECT customer_id FROM orders  -- if ANY customer_id is NULL, returns empty!
);
-- Fix: Use NOT EXISTS
SELECT name FROM customers c
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id
);

-- Pitfall 2: Infinite recursive CTE
WITH RECURSIVE infinite AS (
    SELECT 1 AS n
    UNION ALL
    SELECT n + 1 FROM infinite  -- no termination condition!
)
SELECT * FROM infinite;
-- Fix: Add WHERE n < 1000 or use MAXRECURSION hint

-- Pitfall 3: Correlated subquery performance
-- Can be very slow on large tables without proper indexes
-- Add indexes on the correlation columns

-- Pitfall 4: Ambiguous column names in CTE
WITH t AS (
    SELECT id, name FROM table1
    UNION ALL
    SELECT id, name FROM table2
)
SELECT id FROM t;  -- OK
-- But if column names differ:
WITH t AS (
    SELECT id AS user_id FROM users
)
SELECT user_id FROM t;  -- use the alias

-- Pitfall 5: CTE materialization
-- Some databases materialize CTE results (PostgreSQL < 12)
-- May be worse than subquery repeated inline
-- Check with EXPLAIN ANALYZE

-- Pitfall 6: Scalar subquery returns multiple rows
SELECT name, salary,
    (SELECT salary FROM employees WHERE department_id = e.department_id)  -- ERROR if multiple
FROM employees e;
-- Fix: Use aggregate or ensure single-row subquery
`

## 4.12 Real-World CTE Applications

`sql
-- Session segmentation analysis (web analytics)
WITH session_data AS (
    SELECT
        user_id,
        session_start,
        session_end,
        duration_seconds,
        page_views,
        CASE
            WHEN page_views = 1 THEN 'Bounce'
            WHEN duration_seconds > 300 THEN 'Engaged'
            ELSE 'Casual'
        END AS session_type
    FROM sessions
    WHERE session_start >= DATE('now', '-30 days')
),
segment_summary AS (
    SELECT
        session_type,
        COUNT(*) AS sessions,
        COUNT(DISTINCT user_id) AS unique_users,
        AVG(duration_seconds) AS avg_duration,
        AVG(page_views) AS avg_page_views,
        SUM(CASE WHEN conversions > 0 THEN 1 ELSE 0 END) AS with_conversion
    FROM session_data
    GROUP BY session_type
)
SELECT
    session_type,
    sessions,
    unique_users,
    ROUND(100.0 * sessions / SUM(sessions) OVER(), 1) AS pct_of_total,
    ROUND(avg_duration, 0) AS avg_duration_secs,
    ROUND(avg_page_views, 1) AS avg_pages,
    ROUND(100.0 * with_conversion / sessions, 2) AS conversion_rate
FROM segment_summary
ORDER BY sessions DESC;

-- Recursive: find all subordinates of a manager
WITH RECURSIVE team_hierarchy AS (
    SELECT employee_id, name, 1 AS depth
    FROM employees
    WHERE manager_id = 42  -- target manager

    UNION ALL

    SELECT e.employee_id, e.name, th.depth + 1
    FROM employees e
    JOIN team_hierarchy th ON e.manager_id = th.employee_id
)
SELECT * FROM team_hierarchy ORDER BY depth, name;

-- Moving average with CTE
WITH daily_revenue AS (
    SELECT
        order_date,
        SUM(amount) AS revenue
    FROM orders
    WHERE order_date >= DATE('now', '-60 days')
    GROUP BY order_date
),
revenue_with_ma AS (
    SELECT
        order_date,
        revenue,
        AVG(revenue) OVER (
            ORDER BY order_date
            ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
        ) AS moving_avg_7d,
        revenue - AVG(revenue) OVER (
            ORDER BY order_date
            ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
        ) AS deviation
    FROM daily_revenue
)
SELECT * FROM revenue_with_ma
WHERE moving_avg_7d IS NOT NULL
ORDER BY order_date;
`

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
- [ ] Have questions ready about how the company uses 02-sql-and-databases> **Next**: [05 � Window Functions ?](05-window-functions.md)


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

**Q: How long does it take to master subqueries and ctes?
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

Understanding the evolution of subqueries and ctes helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

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

For AI engineering, understanding subqueries and ctes at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of subqueries and ctes like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply subqueries and ctes concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of subqueries and ctes?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply subqueries and ctes in real systems?
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

When applying this topic to production, consider:
- Fine-tuning with LoRA or Adapters for domain adaptation
- Adapting general principles to your specific use cases
- Performance optimization for target hardware
- Cost considerations for deployment


## Open-Source Tools

- **LangChain**: Framework for building LLM-powered applications
- **LlamaIndex**: Data framework for connecting LLMs with external data
- **Hugging Face Transformers**: State-of-the-art ML models and datasets
- **Weights & Biases**: Experiment tracking and model evaluation
- **MLflow**: Open-source platform for ML lifecycle management
- **Prometheus + Grafana**: Monitoring and observability stack

## Debugging Guide

**Common Issues**:
- Check input validation and data types
- Verify API keys and authentication
- Monitor resource usage (CPU, memory, GPU)
- Review error logs for stack traces

**Debugging Steps**:
1. Reproduce the issue with minimal input
2. Add logging at key points
3. Check external dependencies
4. Verify configuration settings
5. Test with known-good inputs

## Mock Interview Section

**Quick Fire Questions**:
1. What is the core concept of SQL & Databases?
2. When would you use this in production?
3. What are the trade-offs?
4. How does this scale?
5. What are common pitfalls?

**Follow-up Questions**:
- How would you optimize this for 10x scale?
- What monitoring would you add?
- How would you test this in production?

## Optimized Implementation

For production systems, consider:
- **Caching**: Cache frequent computations and API responses
- **Batching**: Process multiple items together for efficiency
- **Async/Await**: Use non-blocking I/O for concurrent operations
- **Connection Pooling**: Reuse database and API connections
- **Lazy Loading**: Load resources only when needed

## References

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers from NeurIPS, ICML, ICLR
- Industry blogs from Google, Meta, OpenAI, Anthropic

## Evaluation Metrics

**Model Evaluation**:
- Accuracy, Precision, Recall, F1-Score
- BLEU, ROUGE for text generation
- Latency, Throughput, Cost per inference

**System Evaluation**:
- End-to-end latency (p50, p95, p99)
- Error rate and availability
- Resource utilization (CPU, memory, GPU)

## Real-World Examples

**Industry Applications**:
- Google: Search ranking, translation, autocomplete
- Amazon: Product recommendations, Alexa, fraud detection
- Netflix: Content recommendations, personalization
- Tesla: Autonomous driving, computer vision
- OpenAI: ChatGPT, DALL-E, Codex

## Next Topic

After mastering SQL & Databases, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.

## Limitations

Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique.
