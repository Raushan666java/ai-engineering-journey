# Chapter 5: SQL Joins and Subqueries

> **Previous:** [Chapter 4: SQL Basics](./04-sql-basics.md) | **Next:** [Chapter 6: Advanced SQL](./06-sql-advanced.md)

## Learning Objectives

- Write INNER, LEFT, RIGHT, and FULL OUTER joins to combine tables
- Understand CROSS JOIN and SELF JOIN use cases
- Differentiate implicit (theta-style) vs explicit (ANSI) join syntax
- Write subqueries in WHERE, FROM, and SELECT clauses
- Use EXISTS, NOT EXISTS, IN, NOT IN, ANY, ALL operators
- Understand correlated subqueries and their performance implications
- Rewrite subqueries as joins and vice versa

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| **INNER JOIN** | Returns only matched rows — the most common join | Use explicit ANSI JOIN syntax over theta-style |
| **OUTER JOINs** | LEFT, RIGHT, FULL preserve unmatched rows with NULLs | LEFT JOIN / IS NULL is the standard anti-join pattern |
| **SELF JOIN** | Join a table to itself using aliases | Ideal for hierarchies, pairs, and consecutive records |
| **Subqueries** | Nested SELECT in WHERE, FROM, or SELECT clause | EXISTS short-circuits and handles NULLs better than IN |
| **Correlated Subqueries** | Re-execute per outer row — powerful but expensive | Rewrite as window functions or JOINs when possible |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Join Concepts] --> B[INNER JOIN]
    B --> C[OUTER JOINs]
    C --> D[SELF & CROSS JOIN]
    D --> E[Subqueries in WHERE]
    E --> F[EXISTS & Correlated]
    F --> G[ANY/ALL & Anti-joins]
    G --> H[Performance Comparison]
```

## Theory

> **One-Sentence Takeaway:** Joins are the heart of relational querying — mastering INNER, OUTER, SELF, and subqueries lets you combine any data across normalized tables.

![SQL Joins and Subqueries Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/database-management-systems/ch05-sql-joins.png)

### 5.1 Introduction to Joins

Relational databases store data in normalized tables. To answer meaningful questions, we almost always need to combine data from multiple tables. A **join** combines rows from two or more tables based on a related column.

Joins are the heart of relational querying. Understanding them deeply is essential for writing correct and efficient SQL.

### 5.2 Inner Join (INNER JOIN)

An inner join returns only rows where there is a match in both tables. It is the most common join type.

**Concept:** For each row in table A, look for matching rows in table B based on the join condition. Include the pair only if a match is found.

```sql
-- ANSI SQL-92 syntax (preferred)
SELECT s.name, c.course_name, e.grade
FROM students s
INNER JOIN enrollments e ON s.student_id = e.student_id
INNER JOIN courses c ON e.course_id = c.course_id;

-- Implicit (theta-style) syntax
SELECT s.name, c.course_name, e.grade
FROM students s, enrollments e, courses c
WHERE s.student_id = e.student_id AND e.course_id = c.course_id;
```

**Venn Diagram Logic:** INNER JOIN = intersection of two tables on the join condition.

**Join Condition Operators:**
- **Equi-join:** Most common â€” uses equality (`=`)
- **Non-equi join:** Uses inequality operators (`<`, `>`, `<=`, `>=`, `<>`)

### 5.3 Outer Joins

Outer joins preserve rows that have no match in the other table, filling missing columns with NULL.

**LEFT OUTER JOIN:** Returns all rows from the left table, with matching rows from the right table (or NULLs when no match).

```sql
-- All customers, with their orders (customers with no orders still appear)
SELECT c.name, o.order_id, o.order_date
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id;

-- Result:
-- Alice    1001  2026-01-15
-- Bob      NULL  NULL          -- Bob has no orders
-- Charlie  1002  2026-02-01
```

**RIGHT OUTER JOIN:** Returns all rows from the right table, with matching rows from the left table (or NULLs when no match).

```sql
-- Same as above but with tables reversed
SELECT c.name, o.order_id
FROM orders o
RIGHT JOIN customers c ON c.customer_id = o.customer_id;
```

**FULL OUTER JOIN:** Returns all rows from both tables. NULLs appear where no match exists on either side.

```sql
-- All employees and all departments, matched where applicable
SELECT e.name, d.department_name
FROM employees e
FULL OUTER JOIN departments d ON e.department_id = d.department_id;

-- Result:
-- Alice    Engineering
-- Bob      Engineering    -- Both have dept match
-- NULL     Human Resources -- No employee in HR
-- Charlie  NULL           -- Charlie unassigned
```

### 5.4 Special Joins

**CROSS JOIN:** Produces the Cartesian product of two tables â€” every row of A paired with every row of B.

```sql
-- Generate all possible combinations of sizes and colors
SELECT s.size_name, c.color_name
FROM sizes s
CROSS JOIN colors c;

-- Equivalent to implicit join without WHERE
SELECT s.size_name, c.color_name
FROM sizes s, colors c;

-- Practical use: generating date ranges
SELECT d::DATE AS date
FROM generate_series('2026-01-01'::DATE, '2026-12-31'::DATE, '1 day') d
CROSS JOIN (SELECT DISTINCT store_id FROM sales) stores;
```

**SELF JOIN:** Joining a table to itself. Useful for hierarchical data (employees and managers, categories and subcategories).

```sql
-- Employee hierarchy: find each employee and their manager's name
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;

-- Find pairs of employees in the same department
SELECT a.name AS employee1, b.name AS employee2, a.department_id
FROM employees a
INNER JOIN employees b ON a.department_id = b.department_id
WHERE a.employee_id < b.employee_id;  -- Avoid duplicates and self-pairs

-- Find consecutive seat numbers
SELECT a.seat_id AS seat1, b.seat_id AS seat2
FROM cinema_seats a
INNER JOIN cinema_seats b ON b.seat_id = a.seat_id + 1
WHERE a.is_available AND b.is_available;
```

### 5.5 Subqueries

A subquery is a SELECT statement nested inside another SQL statement. Subqueries can appear in SELECT, FROM, WHERE, HAVING, and even in DML statements.

**Subquery in WHERE clause:**

```sql
-- Find products that cost more than average
SELECT product_name, price
FROM products
WHERE price > (SELECT AVG(price) FROM products);

-- Find customers who have placed orders
SELECT name, email
FROM customers
WHERE customer_id IN (SELECT DISTINCT customer_id FROM orders);

-- Find customers who have NOT placed orders
SELECT name, email
FROM customers
WHERE customer_id NOT IN (SELECT DISTINCT customer_id FROM orders);
```

**Subquery in SELECT clause (scalar subquery):**

```sql
-- Show each product's price and how it compares to the average
SELECT
    product_name,
    price,
    (SELECT AVG(price) FROM products) AS avg_price,
    price - (SELECT AVG(price) FROM products) AS price_difference
FROM products;
```

**Subquery in FROM clause (derived table):**

```sql
-- Find the top 3 departments by average salary
SELECT department_name, avg_salary
FROM (
    SELECT d.department_name, AVG(e.salary) AS avg_salary
    FROM departments d
    JOIN employees e ON d.department_id = e.department_id
    GROUP BY d.department_name
) dept_avg
ORDER BY avg_salary DESC
LIMIT 3;
```

### 5.6 EXISTS and NOT EXISTS

EXISTS checks whether a subquery returns any rows. It returns TRUE if the subquery has at least one result row.

```sql
-- Customers who have placed at least one order
SELECT c.name
FROM customers c
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id
);

-- Customers who have NEVER placed an order
SELECT c.name
FROM customers c
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id
);

-- Products that have never been ordered
SELECT p.product_name
FROM products p
WHERE NOT EXISTS (
    SELECT 1 FROM order_items oi WHERE oi.product_id = p.product_id
);
```

**EXISTS vs. IN:**
- EXISTS can be more efficient because it short-circuits on the first match
- EXISTS handles NULL values correctly; IN with NULL in subquery results can behave unexpectedly
- IN is often clearer for simple, non-correlated conditions

### 5.7 Correlated Subqueries

A correlated subquery references columns from the outer query and is re-executed for each row of the outer query. These can be expensive.

```sql
-- Find employees who earn more than the average in their department
SELECT e.employee_id, e.name, e.salary, e.department_id
FROM employees e
WHERE e.salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE department_id = e.department_id  -- Reference to outer
)
ORDER BY e.department_id;

-- Find products with above-average sales in their category
SELECT p.product_name, p.category_id, p.price
FROM products p
WHERE p.price > (
    SELECT AVG(p2.price)
    FROM products p2
    WHERE p2.category_id = p.category_id
);
```

### 5.8 ANY and ALL Operators

```sql
-- ANY: True if condition is true for ANY subquery row
-- Find products priced higher than ANY product in category 2
SELECT product_name, price
FROM products
WHERE price > ANY (
    SELECT price FROM products WHERE category_id = 2
);

-- Equivalent to: price > MIN(price) of category 2

-- ALL: True if condition is true for ALL subquery rows
-- Find products priced higher than ALL products in category 2
SELECT product_name, price
FROM products
WHERE price > ALL (
    SELECT price FROM products WHERE category_id = 2
);

-- Equivalent to: price > MAX(price) of category 2

-- Find employees who earn more than ALL employees in department 5
SELECT name, salary
FROM employees
WHERE salary > ALL (
    SELECT salary FROM employees WHERE department_id = 5
);
```

### 5.9 Semi-Joins and Anti-Joins

These are not explicit SQL syntax but logical operations.

**Semi-join:** Returns rows from the left table that have at least one match in the right table (like EXISTS or IN).

**Anti-join:** Returns rows from the left table that have NO match in the right table (like NOT EXISTS or NOT IN).

### 5.10 Join Performance Considerations

- **Join order matters** to the optimizer, but modern optimizers usually find the best plan.
- **Indexes on join columns** dramatically improve join performance.
- **Smaller table first** (as inner table) is generally better for hash joins.
- **Subqueries can often be rewritten as joins** (especially IN â†’ EXISTS or INNER JOIN).
- **Correlated subqueries** can sometimes be rewritten as window functions or joins.

```sql
-- Subquery approach (often slower)
SELECT name FROM customers
WHERE customer_id IN (SELECT customer_id FROM orders WHERE total > 1000);

-- Join approach (often faster, deduplication needed)
SELECT DISTINCT c.name
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
WHERE o.total > 1000;
```

**NOT IN vs. NOT EXISTS vs. LEFT JOIN / NULL:**
```sql
-- Three ways to find customers without orders:

-- Method 1: NOT IN (watch out for NULLs!)
SELECT name FROM customers
WHERE customer_id NOT IN (SELECT customer_id FROM orders WHERE customer_id IS NOT NULL);

-- Method 2: NOT EXISTS (safe with NULLs, often efficient)
SELECT name FROM customers c
WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id);

-- Method 3: LEFT JOIN + NULL check
SELECT c.name
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;
```

## Examples

> **One-Sentence Takeaway:** Practicing multi-table JOINs — from employee-department analysis to customer spending reports — solidifies the ability to write correct, efficient queries for real reporting needs.

**Example 5.1: Employee Department Analysis**

```sql
-- Schema
-- employees(emp_id, name, salary, dept_id, manager_id)
-- departments(dept_id, dept_name, location)

-- All employees with their department names
SELECT e.name, e.salary, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.dept_id;

-- Full list: all departments, even empty ones
SELECT d.dept_name, COUNT(e.emp_id) AS employee_count
FROM departments d
LEFT JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_name
ORDER BY employee_count DESC;

-- Employees with salary above their department average
SELECT e.name, e.salary, d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
WHERE e.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.dept_id = e.dept_id
);
```

**Example 5.2: Multi-Table Reporting**

```sql
-- Find the top 5 customers by total spending
SELECT c.customer_id, c.first_name || ' ' || c.last_name AS name,
       SUM(oi.quantity * oi.unit_price) AS total_spent
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
WHERE o.status != 'cancelled'
GROUP BY c.customer_id, c.first_name, c.last_name
ORDER BY total_spent DESC
LIMIT 5;

-- Products that have never been sold
SELECT p.product_id, p.product_name
FROM products p
LEFT JOIN order_items oi ON p.product_id = oi.product_id
WHERE oi.product_id IS NULL;

-- The same with NOT EXISTS
SELECT p.product_id, p.product_name
FROM products p
WHERE NOT EXISTS (
    SELECT 1 FROM order_items oi WHERE oi.product_id = p.product_id
);
```

> **Warning:** NOT IN with NULLs in the subquery returns zero rows — use NOT EXISTS or LEFT JOIN / IS NULL for safe anti-joins.
>
> **Remember:** Test your joins on small data first — an incorrect join condition can produce a Cartesian product with millions of rows that is extremely hard to debug.

## ðŸ’¡ Pro Tips

1. **Prefer explicit ANSI JOIN syntax** (`INNER JOIN ... ON`) over implicit theta-style (`FROM a, b WHERE a.x = b.x`) â€” it separates join conditions from filter conditions and is far more readable.
2. **LEFT JOIN / IS NULL is the standard anti-join pattern** â€” but NOT EXISTS is often more efficient and handles NULLs correctly.
3. **SELF JOINs solve more problems than you expect** â€” employee hierarchies, product pairs, consecutive seat bookings, and date range comparisons all use SELF JOIN.
4. **Correlated subqueries can often be rewritten as window functions** â€” which execute once instead of once per outer row.
5. **Test your joins on small data first** â€” an incorrect join condition can produce a Cartesian product (millions of rows) that is hard to debug.

## One-Sentence Takeaways

- **5.1:** Joins combine rows from multiple tables based on related columns â€” they are the heart of relational querying.
- **5.2:** INNER JOIN returns only matched rows; it is the most common and efficient join type.
- **5.3:** OUTER JOINs (LEFT, RIGHT, FULL) preserve unmatched rows, filling missing values with NULL.
- **5.4:** CROSS JOIN produces a Cartesian product; SELF JOIN joins a table to itself for hierarchical or pairwise queries.
- **5.5:** Subqueries can appear in SELECT, FROM, WHERE, and HAVING clauses for powerful nested queries.
- **5.6:** EXISTS short-circuits on the first match and handles NULLs correctly, often outperforming IN.
- **5.7:** Correlated subqueries reference the outer query and re-execute per row â€” powerful but potentially expensive.
- **5.8:** ANY and ALL compare a value against a subquery result set with intuitive semantics.
- **5.10:** Join order, indexes, and subquery-vs-join rewrites significantly impact query performance.

## Concept Comparison Table

| Join Type | Rows Returned | Use Case |
|-----------|--------------|----------|
| **INNER JOIN** | Only matched rows | Most common â€” orders with customer details |
| **LEFT JOIN** | All left rows + matched right rows | All customers, with or without orders |
| **RIGHT JOIN** | All right rows + matched left rows | Rare â€” usually rewritten as LEFT JOIN |
| **FULL JOIN** | All rows from both sides | All employees and all departments, matched if possible |
| **CROSS JOIN** | Cartesian product (every Ã— every) | Generating date ranges or attribute combinations |
| **SELF JOIN** | Depends on join condition | Hierarchies, consecutive records, pairs |

| Pattern | Purpose | Example |
|---------|---------|---------|
| **IN + Subquery** | Simple membership test | `WHERE id IN (SELECT ...)` |
| **EXISTS** | Existence test, NULL-safe | `WHERE EXISTS (SELECT 1 ...)` |
| **NOT IN** | Anti-join (watch for NULLs) | `WHERE id NOT IN (...)` |
| **NOT EXISTS** | Anti-join, NULL-safe | `WHERE NOT EXISTS (SELECT 1 ...)` |
| **LEFT JOIN / NULL** | Anti-join (three-table safe) | `LEFT JOIN t2 ... WHERE t2.id IS NULL` |
| **ANY** | Comparison against any value | `WHERE price > ANY (SELECT ...)` |
| **ALL** | Comparison against all values | `WHERE price > ALL (SELECT ...)` |

## Quick Reference

| Join Pattern | SQL | Behavior |
|-------------|-----|----------|
| Inner Equi-join | `A INNER JOIN B ON A.id = B.id` | Matches rows where ids are equal |
| Left Outer | `A LEFT JOIN B ON A.id = B.id` | Keeps all A rows; NULLs for unmatched B |
| Right Outer | `A RIGHT JOIN B ON A.id = B.id` | Keeps all B rows; NULLs for unmatched A |
| Full Outer | `A FULL JOIN B ON A.id = B.id` | Keeps all rows from both |
| Cross | `A CROSS JOIN B` | N_A Ã— N_B rows |
| Self | `A a JOIN A b ON a.parent = b.id` | Table joined to itself with aliases |
| Semi-join (logical) | `WHERE EXISTS (SELECT ...)` | Rows from A with at least one match in B |
| Anti-join (logical) | `WHERE NOT EXISTS (SELECT ...)` | Rows from A with no match in B |

## Cross-Application Matrix

| Join Technique | Applied In | Why It Matters |
|--------------|-----------|----------------|
| **INNER JOIN** | Every multi-table query | The default way to combine related data |
| **LEFT JOIN / NULL** | Data quality checks | Finding orphan records, incomplete data |
| **SELF JOIN** | Org charts, product recommendations | Employee reporting structure, "customers who bought X also bought Y" |
| **CROSS JOIN** | Calendar tables, size/color combos | Generating complete reference grids |
| **EXISTS vs IN** | Any subquery | EXISTS short-circuits; IN materializes the full subquery |
| **Correlated Subquery** | Per-row comparisons | "Above average in their department" â€” row-by-row context |
| **FULL OUTER JOIN** | Data reconciliation | Comparing two time periods, finding records in either set |

## Chapter Quiz

1. Which join returns only rows where there is a match in both tables?
   a) LEFT JOIN
   b) RIGHT JOIN
   c) INNER JOIN
   d) FULL OUTER JOIN

2. A LEFT JOIN returns:
   a) Only matched rows
   b) All rows from the right table
   c) All rows from the left table, with NULLs for unmatched right rows
   d) All rows from both tables

3. Which of the following is the safest anti-join pattern (handles NULLs correctly)?
   a) NOT IN
   b) NOT EXISTS
   c) LEFT JOIN / IS NULL requires special handling
   d) FULL OUTER JOIN

4. A correlated subquery is:
   a) A subquery that is executed once for the entire query
   b) A subquery that references columns from the outer query and re-executes per row
   c) A subquery that returns multiple columns
   d) A subquery that cannot be rewritten as a JOIN

5. What does `WHERE price > ALL (SELECT price FROM products WHERE category_id = 2)` return?
   a) Products priced higher than any product in category 2
   b) Products priced higher than the average in category 2
   c) Products priced higher than ALL products in category 2
   d) Products that are in category 2

6. A SELF JOIN is used to:
   a) Join a table to another table with the same name
   b) Join a table to itself using table aliases
   c) Create a copy of a table
   d) Join on the primary key only

7. The main performance concern with correlated subqueries is:
   a) They cannot use indexes
   b) They re-execute for each row of the outer query
   c) They always return NULL
   d) They only work with small tables

8. Which is correct about NOT IN with NULLs?
   a) NOT IN handles NULLs the same as NOT EXISTS
   b) NOT IN can produce unexpected results if the subquery contains NULL
   c) NOT IN is always more efficient
   d) NOT IN cannot be used in WHERE clauses

**Answers:** 1-c, 2-c, 3-b, 4-b, 5-c, 6-b, 7-b, 8-b

## Summary

- INNER JOIN returns only matched rows; OUTER JOINs preserve unmatched rows with NULLs.
- SELF JOIN joins a table to itself for hierarchical or pair-wise queries.
- Subqueries can appear in SELECT, FROM, WHERE, and HAVING clauses.
- EXISTS is often more efficient than IN for correlated subqueries.
- ANY and ALL compare a value against a subquery result set.
- LEFT JOIN / IS NULL is a common pattern for anti-joins (find unmatched rows).
- Correlated subqueries execute per outer row and can be performance bottlenecks.

## Exercises

### Basic

1. Given `employees(emp_id, name, dept_id)` and `departments(dept_id, dept_name)`, write a query to list each employee with their department name.

2. Write a CROSS JOIN query that generates all combinations of `colors` (Red, Green, Blue) and `sizes` (S, M, L, XL).

3. What is the difference between INNER JOIN and LEFT JOIN? Provide an example where they return different results.

4. Write a query using a subquery to find employees who earn more than the average salary of all employees.

### Intermediate

5. Using SELF JOIN, write a query on `employees(emp_id, name, manager_id)` that shows each employee alongside their manager's name.

6. Convert this subquery to a JOIN:
```sql
SELECT name FROM products
WHERE category_id IN (
    SELECT category_id FROM categories WHERE is_active = TRUE
);
```

7. Write a query that finds orders containing products from more than 3 different categories. Use JOINs and GROUP BY.

8. Given `students(student_id, name)`, `courses(course_id, name)`, `enrollments(student_id, course_id, grade)`, write a query to find students who are enrolled in EVERY course. Use NOT EXISTS.

### Advanced

9. Write a query to find "product pairs" that are frequently bought together (appear in the same order). Use a SELF JOIN on `order_items`. Avoid showing the pair twice (A-B vs B-A).

10. For a `stock_prices(symbol, date, close_price)` table, write a query using a correlated subquery to find days where a stock's closing price was the highest it had ever been up to that date (all-time high).

11. Consider the performance implications of:
```sql
-- Query A
SELECT * FROM orders WHERE customer_id IN (
    SELECT customer_id FROM customers WHERE registration_date < '2025-01-01'
);

-- Query B
SELECT o.*
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
WHERE c.registration_date < '2025-01-01';
```
When would Query A be faster? When would Query B be faster? Assume appropriate indexes exist.

12. Using FULL OUTER JOIN, write a query that shows all employees and all projects, indicating which employees are assigned to which projects. Schema: `employees(emp_id, name)`, `projects(proj_id, name)`, `assignments(emp_id, proj_id, hours)`.
