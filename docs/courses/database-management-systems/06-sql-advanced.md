# Chapter 6: Advanced SQL

## Learning Objectives

- Write GROUP BY queries with aggregate functions
- Filter groups using HAVING
- Use window functions for analytical queries (ROW_NUMBER, RANK, LEAD, LAG)
- Write Common Table Expressions (CTEs) and recursive CTEs
- Create and manage views for abstraction and security
- Understand B-tree and hash indexes and when to create them
- Apply aggregate functions: COUNT, SUM, AVG, MIN, MAX

## Theory

![Advanced SQL, Normalization and Higher Normal Forms](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/database-management-systems/ch03-advanced-sql-normalization.png)

### 6.1 Aggregate Functions

Aggregate functions compute a single result from a set of input rows. They ignore NULL values unless explicitly stated.

**Core Aggregates:**

```sql
-- COUNT: Number of rows
SELECT COUNT(*) FROM employees;                    -- Total rows (including NULLs)
SELECT COUNT(department_id) FROM employees;        -- Non-null dept_id count
SELECT COUNT(DISTINCT department_id) FROM employees;  -- Unique departments

-- SUM: Total of numeric column
SELECT SUM(salary) FROM employees;
SELECT SUM(quantity * unit_price) AS total_revenue FROM order_items;

-- AVG: Average of numeric column
SELECT AVG(salary) FROM employees WHERE department_id = 10;

-- MIN / MAX: Minimum and maximum values
SELECT MIN(price), MAX(price), AVG(price) FROM products;
SELECT MIN(enrollment_date), MAX(enrollment_date) FROM students;
```

**Aggregates with FILTER (PostgreSQL):**

```sql
SELECT
    department_id,
    COUNT(*) AS total,
    COUNT(*) FILTER (WHERE salary > 100000) AS high_earners,
    AVG(salary) FILTER (WHERE salary > 50000) AS avg_high_salary
FROM employees
GROUP BY department_id;
```

### 6.2 GROUP BY and HAVING

GROUP BY divides rows into groups; aggregate functions operate within each group.

```sql
-- Basic GROUP BY
SELECT department_id, COUNT(*) AS employee_count, AVG(salary) AS avg_salary
FROM employees
GROUP BY department_id;

-- GROUP BY with JOIN
SELECT d.department_name, COUNT(e.emp_id) AS headcount
FROM departments d
LEFT JOIN employees e ON d.department_id = e.department_id
GROUP BY d.department_name
ORDER BY headcount DESC;

-- Multiple columns in GROUP BY
SELECT department_id, job_title, COUNT(*) AS count
FROM employees
GROUP BY department_id, job_title;

-- GROUP BY with expression
SELECT EXTRACT(YEAR FROM order_date) AS year, COUNT(*) AS orders
FROM orders
GROUP BY EXTRACT(YEAR FROM order_date)
ORDER BY year;
```

**HAVING:** Filters groups after aggregation (WHERE filters rows before aggregation).

```sql
-- Departments with average salary > 80000
SELECT department_id, AVG(salary) AS avg_salary
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 80000;

-- Products categories with more than 5 products
SELECT category_id, COUNT(*) AS product_count
FROM products
WHERE is_active = TRUE
GROUP BY category_id
HAVING COUNT(*) > 5;

-- Customers with total spending > $1000 in 2026
SELECT customer_id, SUM(total_amount) AS total_spent
FROM orders
WHERE status = 'completed'
  AND order_date >= '2026-01-01'
  AND order_date < '2027-01-01'
GROUP BY customer_id
HAVING SUM(total_amount) > 1000;
```

**SQL Execution Order in Memory:**
1. FROM / JOIN
2. WHERE
3. GROUP BY
4. HAVING
5. SELECT (including aggregates)
6. ORDER BY
7. LIMIT / OFFSET

### 6.3 Window Functions

Window functions perform calculations across a set of rows related to the current row, without collapsing rows like GROUP BY.

**Syntax:** `function() OVER (PARTITION BY col ORDER BY col frame_clause)`

**Partitioning:** Divides the result set into groups (partitions). The window function operates within each partition. Without PARTITION BY, the entire result set is one partition.

**Ordering:** Defines the order of rows within each partition for functions like ROW_NUMBER.

**Frame Clause:** Defines the subset of rows within the partition (ROWS BETWEEN ... AND ...).

**Ranking Functions:**

```sql
SELECT
    employee_id,
    department_id,
    salary,
    ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS row_num,
    RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank,
    DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS dense_rank,
    NTILE(4) OVER (ORDER BY salary DESC) AS quartile
FROM employees;
```

ROW_NUMBER: Unique sequential number. RANK: Same rank for ties, skips numbers. DENSE_RANK: Same rank for ties, no skipping. NTILE: Divides into N equal buckets.

**Aggregate Window Functions:**

```sql
SELECT
    order_date,
    total_amount,
    SUM(total_amount) OVER (ORDER BY order_date) AS running_total,
    AVG(total_amount) OVER (ORDER BY order_date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS moving_avg_7day,
    total_amount - AVG(total_amount) OVER () AS deviation_from_overall_avg
FROM orders
WHERE customer_id = 1;
```

**Value Window Functions (LEAD and LAG):**

```sql
-- Compare each employee's salary to their department's previous employee (by hire date)
SELECT
    name,
    department_id,
    salary,
    hire_date,
    LAG(salary) OVER (PARTITION BY department_id ORDER BY hire_date) AS prev_salary,
    LEAD(salary) OVER (PARTITION BY department_id ORDER BY hire_date) AS next_salary,
    salary - LAG(salary) OVER (PARTITION BY department_id ORDER BY hire_date) AS salary_change
FROM employees;

-- FIRST_VALUE and LAST_VALUE
SELECT
    date,
    close_price,
    FIRST_VALUE(close_price) OVER (ORDER BY date) AS first_price_of_period,
    LAST_VALUE(close_price) OVER (ORDER BY date RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS last_price
FROM stock_prices
WHERE symbol = 'AAPL';
```

### 6.4 Common Table Expressions (CTEs)

CTEs (WITH clauses) create temporary named result sets within a query. They improve readability and enable recursive queries.

```sql
-- Basic CTE
WITH high_earners AS (
    SELECT employee_id, name, salary
    FROM employees
    WHERE salary > 100000
)
SELECT d.department_name, COUNT(he.employee_id) AS count
FROM high_earners he
JOIN departments d ON he.department_id = d.department_id
GROUP BY d.department_name;

-- Multiple CTEs
WITH
sales_2025 AS (
    SELECT customer_id, SUM(total) AS total_2025
    FROM orders WHERE EXTRACT(YEAR FROM order_date) = 2025
    GROUP BY customer_id
),
sales_2026 AS (
    SELECT customer_id, SUM(total) AS total_2026
    FROM orders WHERE EXTRACT(YEAR FROM order_date) = 2026
    GROUP BY customer_id
)
SELECT
    COALESCE(s25.customer_id, s26.customer_id) AS customer_id,
    COALESCE(s25.total_2025, 0) AS sales_2025,
    COALESCE(s26.total_2026, 0) AS sales_2026,
    COALESCE(s26.total_2026, 0) - COALESCE(s25.total_2025, 0) AS growth
FROM sales_2025 s25
FULL OUTER JOIN sales_2026 s26 ON s25.customer_id = s26.customer_id;
```

**Recursive CTE:**

Recursive CTEs reference themselves. Common uses: tree traversal, hierarchy expansion, date generation.

```sql
-- Generate a sequence of numbers
WITH RECURSIVE numbers(n) AS (
    SELECT 1                               -- Anchor member
    UNION ALL
    SELECT n + 1 FROM numbers WHERE n < 10  -- Recursive member
)
SELECT n FROM numbers;

-- Organizational chart (employee hierarchy)
WITH RECURSIVE org_chart AS (
    -- Anchor: top-level managers (no manager)
    SELECT employee_id, name, manager_id, 0 AS level, name::TEXT AS path
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive: employees reporting to those above
    SELECT e.employee_id, e.name, e.manager_id, oc.level + 1,
           oc.path || ' -> ' || e.name
    FROM employees e
    JOIN org_chart oc ON e.manager_id = oc.employee_id
)
SELECT * FROM org_chart ORDER BY level, name;

-- Find all subcategories of a given category
WITH RECURSIVE category_tree AS (
    SELECT category_id, category_name, parent_category_id, 0 AS depth
    FROM categories
    WHERE category_id = 1  -- Start with 'Electronics'

    UNION ALL

    SELECT c.category_id, c.category_name, c.parent_category_id, ct.depth + 1
    FROM categories c
    JOIN category_tree ct ON c.parent_category_id = ct.category_id
)
SELECT * FROM category_tree;
```

### 6.5 Views

A view is a virtual table defined by a query. It does not store data itself â€” it is a stored query.

```sql
-- Create a view
CREATE VIEW active_customers AS
SELECT customer_id, first_name, last_name, email
FROM customers
WHERE status = 'active'
  AND last_purchase_date > CURRENT_DATE - INTERVAL '1 year';

-- Use a view like a table
SELECT * FROM active_customers ORDER BY last_name;

-- Create a materialized view (stores data physically, refreshed periodically)
CREATE MATERIALIZED VIEW monthly_sales_summary AS
SELECT
    EXTRACT(YEAR FROM order_date) AS year,
    EXTRACT(MONTH FROM order_date) AS month,
    COUNT(*) AS orders,
    SUM(total_amount) AS revenue
FROM orders
WHERE status = 'completed'
GROUP BY EXTRACT(YEAR FROM order_date), EXTRACT(MONTH FROM order_date)
WITH DATA;

-- Refresh materialized view
REFRESH MATERIALIZED VIEW monthly_sales_summary;

-- Updateable views (simple views can support INSERT/UPDATE/DELETE)
CREATE VIEW engineering_employees AS
SELECT emp_id, name, salary
FROM employees
WHERE department_id = 3;

-- Insert through a view
INSERT INTO engineering_employees (emp_id, name, salary)
VALUES (101, 'New Engineer', 85000);

-- Drop a view
DROP VIEW IF EXISTS old_view;
DROP MATERIALIZED VIEW IF EXISTS old_materialized_view;
```

### 6.6 Indexes

Indexes accelerate data retrieval at the cost of slower writes and storage space.

```sql
-- B-tree index (default, good for equality and range queries)
CREATE INDEX idx_employees_last_name ON employees(last_name);
CREATE INDEX idx_orders_customer_date ON orders(customer_id, order_date);

-- Unique index (automatically created for PRIMARY KEY and UNIQUE columns)
CREATE UNIQUE INDEX idx_products_sku ON products(sku);

-- Partial index (index only a subset of rows)
CREATE INDEX idx_active_products ON products(product_id)
WHERE is_active = TRUE;

-- Expression index (index based on expression result)
CREATE INDEX idx_lower_email ON customers(LOWER(email));

-- Hash index (equality queries only, smaller than B-tree)
CREATE INDEX idx_hash_customer_id ON customers USING HASH(customer_id);

-- Composite index (multi-column, column order matters)
CREATE INDEX idx_name_dept ON employees(last_name, first_name, department_id);

-- Drop index
DROP INDEX IF EXISTS idx_old_index;
```

**Index Guidelines:**
- Index columns used in WHERE, JOIN, ORDER BY frequently
- Index foreign key columns
- Don't over-index write-heavy tables
- Composite index column order: put high-selectivity columns first
- NULL values in unique indexes: In PostgreSQL, multiple NULLs are allowed

### 6.7 Querying the Information Schema

```sql
-- List all tables in the current database
SELECT table_name, table_type
FROM information_schema.tables
WHERE table_schema = 'public';

-- List columns of a table
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'employees';

-- List indexes
SELECT indexname, indexdef
FROM pg_indexes
WHERE tablename = 'employees';
```

## Examples

**Example 6.1: Employee Analytics with Window Functions**

```sql
-- Schema: employees(emp_id, name, dept_id, salary, hire_date)

-- For each department, show employee salaries with:
-- - Rank within department
-- - Difference from department average
-- - Running total ordered by hire date

SELECT
    d.department_name,
    e.name,
    e.salary,
    RANK() OVER (PARTITION BY e.dept_id ORDER BY e.salary DESC) AS salary_rank,
    e.salary - AVG(e.salary) OVER (PARTITION BY e.dept_id) AS diff_from_dept_avg,
    SUM(e.salary) OVER (PARTITION BY e.dept_id ORDER BY e.hire_date
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS dept_running_total
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
ORDER BY d.department_name, salary_rank;
```

**Example 6.2: Sales Pipeline CTE**

```sql
-- Find the sales pipeline: from first contact to closed deal
-- Schema: leads(lead_id, customer_name, contacted_date, status, converted_to_deal_id)
--         deals(deal_id, lead_id, value, stage, closed_date)

WITH sales_pipeline AS (
    SELECT
        l.lead_id,
        l.customer_name,
        l.contacted_date AS first_contact,
        d.deal_id,
        d.value,
        d.closed_date,
        d.closed_date - l.contacted_date AS days_to_close,
        CASE
            WHEN d.value >= 10000 THEN 'High Value'
            WHEN d.value >= 5000 THEN 'Medium Value'
            ELSE 'Standard'
        END AS deal_tier
    FROM leads l
    LEFT JOIN deals d ON l.converted_to_deal_id = d.deal_id
    WHERE d.stage = 'closed_won'
),
tier_stats AS (
    SELECT
        deal_tier,
        COUNT(*) AS deals,
        AVG(days_to_close)::INT AS avg_days,
        SUM(value) AS total_revenue
    FROM sales_pipeline
    GROUP BY deal_tier
)
SELECT * FROM tier_stats
ORDER BY total_revenue DESC;
```

**Example 6.3: Pivoting with Crosstab**

```sql
-- Cross-tabulation: sales by month and product category
-- Using PostgreSQL tablefunc extension (crosstab)

-- First, create the base data
CREATE EXTENSION IF NOT EXISTS tablefunc;

SELECT *
FROM crosstab(
    'SELECT
        category_name,
        EXTRACT(MONTH FROM order_date) AS month,
        SUM(oi.quantity * oi.unit_price) AS revenue
    FROM categories c
    JOIN products p ON c.category_id = p.category_id
    JOIN order_items oi ON p.product_id = oi.product_id
    JOIN orders o ON oi.order_id = o.order_id
    WHERE EXTRACT(YEAR FROM order_date) = 2026
    GROUP BY category_name, EXTRACT(MONTH FROM order_date)
    ORDER BY category_name, month',
    'SELECT generate_series(1, 12)'
) AS pivot(
    category TEXT,
    jan NUMERIC, feb NUMERIC, mar NUMERIC, apr NUMERIC,
    may NUMERIC, jun NUMERIC, jul NUMERIC, aug NUMERIC,
    sep NUMERIC, oct NUMERIC, nov NUMERIC, dec NUMERIC
);
```

## ðŸ’¡ Pro Tips

1. **SQL execution order is not the same as writing order** â€” the mental model is FROM â†’ JOIN â†’ WHERE â†’ GROUP BY â†’ HAVING â†’ SELECT â†’ ORDER BY â†’ LIMIT. Write with this in mind.
2. **Window functions replace 80% of what you'd use a self-join or subquery for** â€” they are faster, more readable, and can compute running totals, moving averages, and rankings in a single pass.
3. **Recursive CTEs are the most underused SQL feature** â€” they elegantly solve tree traversal, date generation, and graph walking problems that are painful in procedural code.
4. **Materialized views are not free** â€” they use disk space and require explicit refresh. Use them for expensive aggregations queried frequently; stick with regular views for simple abstractions.
5. **Index column order matters** â€” put high-selectivity columns first in composite indexes. An index on (status, created_at) is useless for `WHERE created_at > '2026-01-01'` alone.

## One-Sentence Takeaways

- **6.1:** Aggregate functions (COUNT, SUM, AVG, MIN, MAX) compute single summary values from sets of rows, ignoring NULLs by default.
- **6.2:** GROUP BY partitions rows into groups for aggregation; HAVING filters groups after aggregation, unlike WHERE which filters before.
- **6.3:** Window functions perform row-wise calculations across partitions without collapsing rows, enabling running totals, rankings, and moving averages.
- **6.4:** CTEs (WITH clauses) create temporary named result sets that improve readability and enable recursive querying.
- **6.5:** Views are virtual tables defined by stored queries; materialized views physically store results for faster reads at the cost of staleness.
- **6.6:** Indexes (B-tree, Hash, Partial, Expression, Composite) accelerate data retrieval but add write overhead.
- **6.7:** The information schema provides metadata about database objects â€” tables, columns, indexes, and constraints.

## Concept Comparison Table

| Feature | GROUP BY | Window Functions | CTE | View |
|---------|----------|-----------------|-----|------|
| **Collapses rows?** | Yes â€” one row per group | No â€” preserves all rows | No â€” temporary named result | No â€” stored query definition |
| **Use case** | Summary reports | Rankings, running totals | Complex/recursive queries | Query abstraction & security |
| **Can be recursive?** | No | No | Yes (WITH RECURSIVE) | No |
| **Stores data?** | No (execution-time only) | No (execution-time only) | No (session lifetime) | Regular: No. Materialized: Yes |
| **Supports WHERE pushdown?** | Before GROUP BY | Yes | Yes | Depends |

| Index Type | Best For | Characteristics |
|-----------|---------|-----------------|
| **B-tree (default)** | Equality + range queries | Balanced tree, O(log n) lookup |
| **Hash** | Equality queries only | Smaller, faster for =, useless for > or ORDER BY |
| **Partial** | Queries on a subset of rows | Smaller index, faster for filtered queries |
| **Expression** | Queries using functions | `WHERE LOWER(email) = 'x'` |
| **Composite** | Multi-column WHERE/JOIN | Column order matters (high-selectivity first) |

## Quick Reference

| Aggregate | What It Does | NULL Handling |
|-----------|-------------|---------------|
| COUNT(*) | Counts all rows | Counts NULLs |
| COUNT(col) | Counts non-null values in column | Ignores NULLs |
| SUM(col) | Sum of values | Ignores NULLs |
| AVG(col) | Average of values | Ignores NULLs |
| MIN(col) | Minimum value | Ignores NULLs |
| MAX(col) | Maximum value | Ignores NULLs |

| Window Function | Purpose |
|----------------|---------|
| ROW_NUMBER() | Unique sequential number per partition |
| RANK() | Rank with ties, skips numbers |
| DENSE_RANK() | Rank with ties, no skipping |
| NTILE(n) | Divides into n equal buckets |
| LAG(col, n) | Value from n rows before current |
| LEAD(col, n) | Value from n rows after current |
| FIRST_VALUE(col) | First value in window frame |
| LAST_VALUE(col) | Last value in window frame |

## Cross-Application Matrix

| Feature | Applied In | Why It Matters |
|---------|-----------|----------------|
| **GROUP BY + HAVING** | Sales dashboards, analytics | Department averages, customer segments, trend reports |
| **Window Functions** | Financial reporting, leaderboards | Running balances, rank employees by performance, YoY comparisons |
| **Recursive CTEs** | Org charts, bill of materials | Employee hierarchies, product assembly structures, category trees |
| **Materialized Views** | Data warehouses, BI tools | Pre-computed monthly summaries refreshed nightly |
| **Partial Indexes** | Active records, soft-delete tables | Index only active users (WHERE is_active = TRUE) |
| **Composite Indexes** | Multi-column filtering | Speed up queries filtering on (status, date) or (customer_id, order_date) |

## Chapter Quiz

1. What is the SQL execution order?
   a) SELECT â†’ FROM â†’ WHERE â†’ GROUP BY â†’ HAVING â†’ ORDER BY
   b) FROM â†’ WHERE â†’ GROUP BY â†’ HAVING â†’ SELECT â†’ ORDER BY
   c) FROM â†’ SELECT â†’ WHERE â†’ GROUP BY â†’ ORDER BY
   d) SELECT â†’ GROUP BY â†’ WHERE â†’ HAVING â†’ ORDER BY

2. The difference between WHERE and HAVING is:
   a) WHERE filters rows; HAVING filters groups
   b) WHERE filters groups; HAVING filters rows
   c) They are interchangeable
   d) HAVING can only be used without GROUP BY

3. Which window function skips numbers for ties?
   a) ROW_NUMBER
   b) RANK
   c) DENSE_RANK
   d) NTILE

4. A recursive CTE must include:
   a) An anchor member and a recursive member separated by UNION ALL
   b) A materialized view
   c) A window function
   d) A HAVING clause

5. What is the main advantage of a materialized view over a regular view?
   a) It is always up to date
   b) It stores results physically for faster reads
   c) It supports INSERT/UPDATE/DELETE
   d) It requires no storage space

6. A partial index is most useful when:
   a) All rows are queried equally
   b) Only a subset of rows is frequently queried
   c) The table has no WHERE clauses
   d) You need to index all columns

7. What does `LEAD(salary, 1) OVER (ORDER BY hire_date)` return?
   a) The salary from the previous employee
   b) The salary from the next employee
   c) The average salary
   d) The maximum salary

8. HAVING is executed:
   a) Before GROUP BY
   b) After GROUP BY, before SELECT
   c) After ORDER BY
   d) Before WHERE

**Answers:** 1-b, 2-a, 3-b, 4-a, 5-b, 6-b, 7-b, 8-b

## Summary

- Aggregate functions (COUNT, SUM, AVG, MIN, MAX) compute single values from row sets.
- GROUP BY partitions rows; HAVING filters groups after aggregation.
- Window functions perform per-row calculations across partitions without collapsing rows.
- CTEs (WITH clauses) simplify complex queries and enable recursion.
- Views provide abstraction, security, and query simplification.
- Materialized views store query results for faster access at the cost of staleness.
- Indexes speed up data access but add write overhead and storage cost.

## Exercises

### Basic

1. Write a query that counts the number of employees in each department and shows the average salary.

2. Explain the difference between WHERE and HAVING. Provide an example of each using the same table.

3. Write a CTE that calculates the total sales per customer, then selects customers with total sales > $500.

4. Create a view named `recent_orders` that shows all orders from the last 30 days.

### Intermediate

5. Using ROW_NUMBER, write a query to find the top 3 highest-paid employees in each department.

6. Write a recursive CTE that generates dates from January 1, 2026 to December 31, 2026.

7. Find employees whose salary is above their department's average salary. Write this using: a) a correlated subquery, b) a window function.

8. Create an index on `orders(customer_id, order_date)` and explain which queries this index would benefit.

### Advanced

9. Write a query that uses LAG to compute the day-over-day percentage change in stock price. Schema: `prices(symbol, date, close_price)`. Return symbol, date, price, and pct_change columns.

10. Using a recursive CTE, find the management chain (all ancestors) for a given employee. Schema: `employees(emp_id, name, manager_id)`. Starting from a specific employee_id, show the full chain up to the CEO.

11. Compare the performance of a regular view vs. a materialized view for a sales reporting query that aggregates millions of rows. Under what circumstances would you use each?

12. Write a query using PARTITION BY that calculates for each product:
    - Its price rank within its category
    - The difference between its price and the category average
    - The running total of prices ordered by product_name within the category
