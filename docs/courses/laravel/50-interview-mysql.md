# MySQL & Database Interview Q&A

> **Previous:** [PHP Interview Q&A](./49-interview-php.md) | **Next:** [HTML Interview Q&A](./51-interview-html.md)




Ace your database interviews with this deep collection of MySQL and Laravel database-layer questions. Each answer includes runnable SQL or code examples. Covers raw SQL queries through database design, indexing, transactions, Laravel's ORM, and advanced MySQL internals.

---

## Chapter at a Glance

| Aspect | Details |
|--------|---------|
| **Scope** | MySQL & database interview questions covering SQL queries, indexing, normalization, transactions, Laravel ORM |
| **Key Concepts** | SQL queries, joins, indexing strategies, normalization, transactions, query optimization, Eloquent ORM |
| **Learning Approach** | Q&A format with practical SQL and code examples |
| **Skills Required** | SQL, MySQL, database design, Laravel Eloquent |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Core Concepts]
    B[Interview Questions]
    C[Code Examples]
    D[Best Practices]
    E[Common Pitfalls]
    A --> B
    B --> C
    C --> D
    D --> E
```

## SQL Queries

![MySQL Interview](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/50-interview-mysql.png)


### Q1: Write a query to find the second-highest salary from an `employees` table.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-the-second-highest-salary-from-an-employees-table-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-the-second-highest-salary-from-an-employees-table-handwritten.svg" alt="Handwritten: Write a query to find the second-highest salary from an `employees` table." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-the-second-highest-salary-from-an-employees-table-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-the-second-highest-salary-from-an-employees-table-diagram.svg" alt="Diagram: Write a query to find the second-highest salary from an `employees` table." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-the-second-highest-salary-from-an-employees-table-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-the-second-highest-salary-from-an-employees-table-sticky.svg" alt="Sticky Note: Write a query to find the second-highest salary from an `employees` table." width="30%">
</a>


**Answer:** Use a subquery with `OFFSET` or a self-join.

```sql
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;
```

Alternative with a subquery:

```sql
SELECT MAX(salary)
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
```

### Q2: What is the difference between `INNER JOIN` and `LEFT JOIN`?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-inner-join-and-left-join-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-inner-join-and-left-join-handwritten.svg" alt="Handwritten: What is the difference between `INNER JOIN` and `LEFT JOIN`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-inner-join-and-left-join-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-inner-join-and-left-join-diagram.svg" alt="Diagram: What is the difference between `INNER JOIN` and `LEFT JOIN`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-inner-join-and-left-join-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-inner-join-and-left-join-sticky.svg" alt="Sticky Note: What is the difference between `INNER JOIN` and `LEFT JOIN`?" width="30%">
</a>


**Answer:** `INNER JOIN` returns only rows where a match exists in both tables. `LEFT JOIN` returns all rows from the left table and matching rows from the right table; non-matching right-side columns are `NULL`.

```sql
-- Only employees who have an associated department row
SELECT e.name, d.name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id;

-- All employees, even those without a department
SELECT e.name, d.name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id;
```

### Q3: How does `GROUP BY` work? Give an example with `HAVING`.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-does-group-by-work-give-an-example-with-having-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-does-group-by-work-give-an-example-with-having-handwritten.svg" alt="Handwritten: How does `GROUP BY` work? Give an example with `HAVING`." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-does-group-by-work-give-an-example-with-having-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-does-group-by-work-give-an-example-with-having-diagram.svg" alt="Diagram: How does `GROUP BY` work? Give an example with `HAVING`." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-does-group-by-work-give-an-example-with-having-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-does-group-by-work-give-an-example-with-having-sticky.svg" alt="Sticky Note: How does `GROUP BY` work? Give an example with `HAVING`." width="30%">
</a>


**Answer:** `GROUP BY` collapses rows that share a column value into summary rows. Use `HAVING` to filter groups after aggregation (unlike `WHERE` which filters before aggregation).

```sql
SELECT dept_id, COUNT(*) AS emp_count, AVG(salary) AS avg_salary
FROM employees
GROUP BY dept_id
HAVING COUNT(*) > 5;
```

### Q4: What is the difference between `WHERE` and `HAVING`?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-where-and-having-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-where-and-having-handwritten.svg" alt="Handwritten: What is the difference between `WHERE` and `HAVING`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-where-and-having-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-where-and-having-diagram.svg" alt="Diagram: What is the difference between `WHERE` and `HAVING`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-where-and-having-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-where-and-having-sticky.svg" alt="Sticky Note: What is the difference between `WHERE` and `HAVING`?" width="30%">
</a>


**Answer:** `WHERE` filters rows **before** grouping; `HAVING` filters groups **after** aggregation. `WHERE` cannot use aggregate functions; `HAVING` can.

```sql
-- WHERE filters individual rows first
SELECT dept_id, AVG(salary) AS avg_salary
FROM employees
WHERE status = 'active'
GROUP BY dept_id
HAVING AVG(salary) > 50000;
```

### Q5: Write a correlated subquery to find employees who earn more than the average salary in their department.

**Answer:** A correlated subquery references the outer query's column and executes once per outer row.

```sql
SELECT e1.name, e1.salary, e1.dept_id
FROM employees e1
WHERE e1.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.dept_id = e1.dept_id
);
```

### Q6: What is the difference between `UNION` and `UNION ALL`?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-union-and-union-all-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-union-and-union-all-handwritten.svg" alt="Handwritten: What is the difference between `UNION` and `UNION ALL`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-union-and-union-all-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-union-and-union-all-diagram.svg" alt="Diagram: What is the difference between `UNION` and `UNION ALL`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-union-and-union-all-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-union-and-union-all-sticky.svg" alt="Sticky Note: What is the difference between `UNION` and `UNION ALL`?" width="30%">
</a>


**Answer:** `UNION` removes duplicate rows; `UNION ALL` keeps all rows including duplicates. `UNION ALL` is faster because it avoids a sort/distinct step.

```sql
SELECT name, email FROM customers
UNION ALL
SELECT name, email FROM leads;
```

### Q7: Write a query using a window function to rank employees by salary within each department.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-a-window-function-to-rank-employees-by-salary-within-each-department-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-a-window-function-to-rank-employees-by-salary-within-each-department-handwritten.svg" alt="Handwritten: Write a query using a window function to rank employees by salary within each department." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-a-window-function-to-rank-employees-by-salary-within-each-department-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-a-window-function-to-rank-employees-by-salary-within-each-department-diagram.svg" alt="Diagram: Write a query using a window function to rank employees by salary within each department." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-a-window-function-to-rank-employees-by-salary-within-each-department-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-a-window-function-to-rank-employees-by-salary-within-each-department-sticky.svg" alt="Sticky Note: Write a query using a window function to rank employees by salary within each department." width="30%">
</a>


**Answer:** `RANK()` assigns the same rank to ties and skips subsequent ranks; `DENSE_RANK()` does not skip.

```sql
SELECT name, dept_id, salary,
    RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS salary_rank
FROM employees;
```

### Q8: Use `ROW_NUMBER()` to deduplicate a table.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/use-row-number-to-deduplicate-a-table-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/use-row-number-to-deduplicate-a-table-handwritten.svg" alt="Handwritten: Use `ROW_NUMBER()` to deduplicate a table." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/use-row-number-to-deduplicate-a-table-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/use-row-number-to-deduplicate-a-table-diagram.svg" alt="Diagram: Use `ROW_NUMBER()` to deduplicate a table." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/use-row-number-to-deduplicate-a-table-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/use-row-number-to-deduplicate-a-table-sticky.svg" alt="Sticky Note: Use `ROW_NUMBER()` to deduplicate a table." width="30%">
</a>


**Answer:** Assign a row number per duplicate group and delete rows where the number is greater than 1.

```sql
WITH numbered AS (
    SELECT *,
        ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn
    FROM users
)
DELETE FROM users
WHERE id IN (SELECT id FROM numbered WHERE rn > 1);
```

### Q9: Write a query to find employees who have never placed an order.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-employees-who-have-never-placed-an-order-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-employees-who-have-never-placed-an-order-handwritten.svg" alt="Handwritten: Write a query to find employees who have never placed an order." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-employees-who-have-never-placed-an-order-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-employees-who-have-never-placed-an-order-diagram.svg" alt="Diagram: Write a query to find employees who have never placed an order." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-employees-who-have-never-placed-an-order-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-employees-who-have-never-placed-an-order-sticky.svg" alt="Sticky Note: Write a query to find employees who have never placed an order." width="30%">
</a>


**Answer:** Use `NOT EXISTS` or a `LEFT JOIN` with `NULL` check.

```sql
SELECT e.id, e.name
FROM employees e
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.employee_id = e.id
);
```

### Q10: What does `EXISTS` do and when should you prefer it over `IN`?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-does-exists-do-and-when-should-you-prefer-it-over-in-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-does-exists-do-and-when-should-you-prefer-it-over-in-handwritten.svg" alt="Handwritten: What does `EXISTS` do and when should you prefer it over `IN`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-does-exists-do-and-when-should-you-prefer-it-over-in-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-does-exists-do-and-when-should-you-prefer-it-over-in-diagram.svg" alt="Diagram: What does `EXISTS` do and when should you prefer it over `IN`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-does-exists-do-and-when-should-you-prefer-it-over-in-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-does-exists-do-and-when-should-you-prefer-it-over-in-sticky.svg" alt="Sticky Note: What does `EXISTS` do and when should you prefer it over `IN`?" width="30%">
</a>


**Answer:** `EXISTS` returns true as soon as the subquery finds a single match. It is faster than `IN` when the subquery table is large or the list is unbounded. `IN` materialises the entire subquery result first.

```sql
-- EXISTS → short-circuits on first match
SELECT * FROM departments d
WHERE EXISTS (
    SELECT 1 FROM employees e WHERE e.dept_id = d.id
);

-- IN → fetches all matching dept_id values first
SELECT * FROM departments
WHERE id IN (SELECT dept_id FROM employees);
```

### Q11: Write a query using `CASE` inside an aggregate to pivot rows into columns.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-case-inside-an-aggregate-to-pivot-rows-into-columns-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-case-inside-an-aggregate-to-pivot-rows-into-columns-handwritten.svg" alt="Handwritten: Write a query using `CASE` inside an aggregate to pivot rows into columns." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-case-inside-an-aggregate-to-pivot-rows-into-columns-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-case-inside-an-aggregate-to-pivot-rows-into-columns-diagram.svg" alt="Diagram: Write a query using `CASE` inside an aggregate to pivot rows into columns." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-case-inside-an-aggregate-to-pivot-rows-into-columns-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-case-inside-an-aggregate-to-pivot-rows-into-columns-sticky.svg" alt="Sticky Note: Write a query using `CASE` inside an aggregate to pivot rows into columns." width="30%">
</a>


**Answer:** Use `CASE` inside `SUM` or `COUNT` to create conditional aggregates.

```sql
SELECT
    YEAR(order_date) AS year,
    SUM(CASE WHEN status = 'completed' THEN amount ELSE 0 END) AS completed_revenue,
    SUM(CASE WHEN status = 'cancelled' THEN amount ELSE 0 END) AS cancelled_revenue
FROM orders
GROUP BY YEAR(order_date);
```

### Q12: Write a recursive CTE to generate a sequence of numbers from 1 to 10.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-recursive-cte-to-generate-a-sequence-of-numbers-from-1-to-10-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-recursive-cte-to-generate-a-sequence-of-numbers-from-1-to-10-handwritten.svg" alt="Handwritten: Write a recursive CTE to generate a sequence of numbers from 1 to 10." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-recursive-cte-to-generate-a-sequence-of-numbers-from-1-to-10-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-recursive-cte-to-generate-a-sequence-of-numbers-from-1-to-10-diagram.svg" alt="Diagram: Write a recursive CTE to generate a sequence of numbers from 1 to 10." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-recursive-cte-to-generate-a-sequence-of-numbers-from-1-to-10-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-recursive-cte-to-generate-a-sequence-of-numbers-from-1-to-10-sticky.svg" alt="Sticky Note: Write a recursive CTE to generate a sequence of numbers from 1 to 10." width="30%">
</a>


**Answer:** A recursive Common Table Expression references itself until the termination condition is met.

```sql
WITH RECURSIVE numbers(n) AS (
    SELECT 1
    UNION ALL
    SELECT n + 1 FROM numbers WHERE n < 10
)
SELECT n FROM numbers;
```

### Q13: Find departments whose total salary spend exceeds 100,000.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/find-departments-whose-total-salary-spend-exceeds-100-000-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/find-departments-whose-total-salary-spend-exceeds-100-000-handwritten.svg" alt="Handwritten: Find departments whose total salary spend exceeds 100,000." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/find-departments-whose-total-salary-spend-exceeds-100-000-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/find-departments-whose-total-salary-spend-exceeds-100-000-diagram.svg" alt="Diagram: Find departments whose total salary spend exceeds 100,000." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/find-departments-whose-total-salary-spend-exceeds-100-000-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/find-departments-whose-total-salary-spend-exceeds-100-000-sticky.svg" alt="Sticky Note: Find departments whose total salary spend exceeds 100,000." width="30%">
</a>


**Answer:** Use `GROUP BY` with `HAVING` and `SUM`.

```sql
SELECT d.name, SUM(e.salary) AS total_spend
FROM departments d
JOIN employees e ON e.dept_id = d.id
GROUP BY d.id, d.name
HAVING SUM(e.salary) > 100000;
```

### Q14: Write a self-join to find employees who share the same manager.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-self-join-to-find-employees-who-share-the-same-manager-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-self-join-to-find-employees-who-share-the-same-manager-handwritten.svg" alt="Handwritten: Write a self-join to find employees who share the same manager." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-self-join-to-find-employees-who-share-the-same-manager-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-self-join-to-find-employees-who-share-the-same-manager-diagram.svg" alt="Diagram: Write a self-join to find employees who share the same manager." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-self-join-to-find-employees-who-share-the-same-manager-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-self-join-to-find-employees-who-share-the-same-manager-sticky.svg" alt="Sticky Note: Write a self-join to find employees who share the same manager." width="30%">
</a>


**Answer:** A self-join joins a table to itself using different aliases.

```sql
SELECT e1.name AS employee1, e2.name AS employee2, e1.manager_id
FROM employees e1
JOIN employees e2 ON e1.manager_id = e2.manager_id
WHERE e1.id < e2.id;
```

### Q15: What is the difference between `CHAR` and `VARCHAR`?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-char-and-varchar-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-char-and-varchar-handwritten.svg" alt="Handwritten: What is the difference between `CHAR` and `VARCHAR`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-char-and-varchar-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-char-and-varchar-diagram.svg" alt="Diagram: What is the difference between `CHAR` and `VARCHAR`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-char-and-varchar-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-char-and-varchar-sticky.svg" alt="Sticky Note: What is the difference between `CHAR` and `VARCHAR`?" width="30%">
</a>


**Answer:** `CHAR(n)` is fixed-length → always stores `n` characters, padded with spaces. `VARCHAR(n)` is variable-length → stores only the actual characters plus a length prefix (1-2 bytes). Use `CHAR` for fixed-length codes (ISO country codes, yes/no flags). Use `VARCHAR` for variable text (names, emails).

### Q16: Write a query using `LATERAL JOIN` (MySQL 8.0.14+).

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-lateral-join-mysql-8-0-14-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-lateral-join-mysql-8-0-14-handwritten.svg" alt="Handwritten: Write a query using `LATERAL JOIN` (MySQL 8.0.14+)." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-lateral-join-mysql-8-0-14-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-lateral-join-mysql-8-0-14-diagram.svg" alt="Diagram: Write a query using `LATERAL JOIN` (MySQL 8.0.14+)." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-lateral-join-mysql-8-0-14-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-lateral-join-mysql-8-0-14-sticky.svg" alt="Sticky Note: Write a query using `LATERAL JOIN` (MySQL 8.0.14+)." width="30%">
</a>


**Answer:** A lateral join allows a subquery in the `FROM` clause to reference columns from preceding tables.

```sql
SELECT d.name, top_emp.name, top_emp.salary
FROM departments d
LEFT JOIN LATERAL (
    SELECT name, salary
    FROM employees
    WHERE dept_id = d.id
    ORDER BY salary DESC
    LIMIT 1
) AS top_emp ON true;
```

### Q17: Use `LEAD` and `LAG` to compare an employee's salary with the previous hire.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/use-lead-and-lag-to-compare-an-employee-s-salary-with-the-previous-hire-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/use-lead-and-lag-to-compare-an-employee-s-salary-with-the-previous-hire-handwritten.svg" alt="Handwritten: Use `LEAD` and `LAG` to compare an employee's salary with the previous hire." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/use-lead-and-lag-to-compare-an-employee-s-salary-with-the-previous-hire-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/use-lead-and-lag-to-compare-an-employee-s-salary-with-the-previous-hire-diagram.svg" alt="Diagram: Use `LEAD` and `LAG` to compare an employee's salary with the previous hire." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/use-lead-and-lag-to-compare-an-employee-s-salary-with-the-previous-hire-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/use-lead-and-lag-to-compare-an-employee-s-salary-with-the-previous-hire-sticky.svg" alt="Sticky Note: Use `LEAD` and `LAG` to compare an employee's salary with the previous hire." width="30%">
</a>


**Answer:** Window functions `LAG` and `LEAD` access adjacent rows without a self-join.

```sql
SELECT name, hire_date, salary,
    LAG(salary) OVER (ORDER BY hire_date) AS prev_salary,
    salary - LAG(salary) OVER (ORDER BY hire_date) AS diff_from_prev
FROM employees;
```

### Q18: Write a query to find the most recent order for each customer.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-the-most-recent-order-for-each-customer-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-the-most-recent-order-for-each-customer-handwritten.svg" alt="Handwritten: Write a query to find the most recent order for each customer." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-the-most-recent-order-for-each-customer-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-the-most-recent-order-for-each-customer-diagram.svg" alt="Diagram: Write a query to find the most recent order for each customer." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-the-most-recent-order-for-each-customer-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-the-most-recent-order-for-each-customer-sticky.svg" alt="Sticky Note: Write a query to find the most recent order for each customer." width="30%">
</a>


**Answer:** Use `ROW_NUMBER()` partitioned by customer and ordered by date descending.

```sql
SELECT customer_id, order_id, order_date, total
FROM (
    SELECT *,
        ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC) AS rn
    FROM orders
) ranked
WHERE rn = 1;
```

### Q19: What is the difference between `COUNT(*)`, `COUNT(column)`, and `COUNT(DISTINCT column)`?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-count-count-column-and-count-distinct-column-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-count-count-column-and-count-distinct-column-handwritten.svg" alt="Handwritten: What is the difference between `COUNT(*)`, `COUNT(column)`, and `COUNT(DISTINCT column)`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-count-count-column-and-count-distinct-column-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-count-count-column-and-count-distinct-column-diagram.svg" alt="Diagram: What is the difference between `COUNT(*)`, `COUNT(column)`, and `COUNT(DISTINCT column)`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-count-count-column-and-count-distinct-column-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-count-count-column-and-count-distinct-column-sticky.svg" alt="Sticky Note: What is the difference between `COUNT(*)`, `COUNT(column)`, and `COUNT(DISTINCT column)`?" width="30%">
</a>


**Answer:**
- `COUNT(*)` → counts all rows including those with `NULL` in every column.
- `COUNT(column)` → counts non-`NULL` values in that column.
- `COUNT(DISTINCT column)` → counts unique non-`NULL` values.

```sql
SELECT
    COUNT(*) AS total_rows,
    COUNT(email) AS non_null_emails,
    COUNT(DISTINCT email) AS unique_emails
FROM users;
```

### Q20: Write a query to find gaps in a sequence of invoice numbers.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-gaps-in-a-sequence-of-invoice-numbers-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-gaps-in-a-sequence-of-invoice-numbers-handwritten.svg" alt="Handwritten: Write a query to find gaps in a sequence of invoice numbers." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-gaps-in-a-sequence-of-invoice-numbers-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-gaps-in-a-sequence-of-invoice-numbers-diagram.svg" alt="Diagram: Write a query to find gaps in a sequence of invoice numbers." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-gaps-in-a-sequence-of-invoice-numbers-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-to-find-gaps-in-a-sequence-of-invoice-numbers-sticky.svg" alt="Sticky Note: Write a query to find gaps in a sequence of invoice numbers." width="30%">
</a>


**Answer:** Self-join on the next value to detect missing numbers.

```sql
SELECT (i1.invoice_num + 1) AS gap_start, (i2.invoice_num - 1) AS gap_end
FROM invoices i1
JOIN invoices i2 ON i2.invoice_num = (
    SELECT MIN(invoice_num) FROM invoices WHERE invoice_num > i1.invoice_num
)
WHERE i2.invoice_num > i1.invoice_num + 1;
```

### Q21: Write a query using `ROLLUP` to add subtotals and a grand total.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-rollup-to-add-subtotals-and-a-grand-total-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-rollup-to-add-subtotals-and-a-grand-total-handwritten.svg" alt="Handwritten: Write a query using `ROLLUP` to add subtotals and a grand total." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-rollup-to-add-subtotals-and-a-grand-total-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-rollup-to-add-subtotals-and-a-grand-total-diagram.svg" alt="Diagram: Write a query using `ROLLUP` to add subtotals and a grand total." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-rollup-to-add-subtotals-and-a-grand-total-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/write-a-query-using-rollup-to-add-subtotals-and-a-grand-total-sticky.svg" alt="Sticky Note: Write a query using `ROLLUP` to add subtotals and a grand total." width="30%">
</a>


**Answer:** `ROLLUP` generates hierarchical grouping levels including a grand total row.

```sql
SELECT dept_id, status, SUM(salary) AS total_salary
FROM employees
GROUP BY dept_id, status WITH ROLLUP;
```

### Q22: Use `COALESCE` to handle NULLs in a report.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/use-coalesce-to-handle-nulls-in-a-report-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/use-coalesce-to-handle-nulls-in-a-report-handwritten.svg" alt="Handwritten: Use `COALESCE` to handle NULLs in a report." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/use-coalesce-to-handle-nulls-in-a-report-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/use-coalesce-to-handle-nulls-in-a-report-diagram.svg" alt="Diagram: Use `COALESCE` to handle NULLs in a report." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/use-coalesce-to-handle-nulls-in-a-report-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/use-coalesce-to-handle-nulls-in-a-report-sticky.svg" alt="Sticky Note: Use `COALESCE` to handle NULLs in a report." width="30%">
</a>


**Answer:** `COALESCE` returns the first non-`NULL` argument.

```sql
SELECT name, COALESCE(phone, email, 'No Contact') AS contact
FROM customers;
```

---

## Database Design

### Q23: What are the normal forms? Explain 1NF, 2NF, and 3NF.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-the-normal-forms-explain-1nf-2nf-and-3nf-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-the-normal-forms-explain-1nf-2nf-and-3nf-handwritten.svg" alt="Handwritten: What are the normal forms? Explain 1NF, 2NF, and 3NF." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-the-normal-forms-explain-1nf-2nf-and-3nf-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-the-normal-forms-explain-1nf-2nf-and-3nf-diagram.svg" alt="Diagram: What are the normal forms? Explain 1NF, 2NF, and 3NF." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-the-normal-forms-explain-1nf-2nf-and-3nf-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-the-normal-forms-explain-1nf-2nf-and-3nf-sticky.svg" alt="Sticky Note: What are the normal forms? Explain 1NF, 2NF, and 3NF." width="30%">
</a>


**Answer:**
- **1NF** → Each column holds atomic (indivisible) values; no repeating groups.
- **2NF** → Satisfies 1NF and every non-key column depends on the **whole** primary key (relevant for composite keys).
- **3NF** → Satisfies 2NF and no transitive dependency exists (non-key columns depend only on the primary key, not on other non-key columns).

```sql
-- Violates 1NF: comma-separated values in a single cell
-- phones: "555-0100,555-0200"

-- 1NF compliant:
CREATE TABLE employee_phones (
    employee_id INT,
    phone VARCHAR(20),
    PRIMARY KEY (employee_id, phone)
);
```

### Q24: What is denormalization and when should you use it?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-denormalization-and-when-should-you-use-it-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-denormalization-and-when-should-you-use-it-handwritten.svg" alt="Handwritten: What is denormalization and when should you use it?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-denormalization-and-when-should-you-use-it-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-denormalization-and-when-should-you-use-it-diagram.svg" alt="Diagram: What is denormalization and when should you use it?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-denormalization-and-when-should-you-use-it-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-denormalization-and-when-should-you-use-it-sticky.svg" alt="Sticky Note: What is denormalization and when should you use it?" width="30%">
</a>


**Answer:** Denormalization intentionally introduces redundancy (duplicated data) to improve read performance by reducing joins. Use it for read-heavy workloads, reporting/marts, or when join overhead is unacceptable. The cost is write complexity and data-inconsistency risk.

```sql
-- Denormalized: store category name directly on products
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    category_name VARCHAR(50)  -- duplicated from categories table
);
```

### Q25: Explain the difference between a primary key and a unique key.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-the-difference-between-a-primary-key-and-a-unique-key-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-the-difference-between-a-primary-key-and-a-unique-key-handwritten.svg" alt="Handwritten: Explain the difference between a primary key and a unique key." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-the-difference-between-a-primary-key-and-a-unique-key-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-the-difference-between-a-primary-key-and-a-unique-key-diagram.svg" alt="Diagram: Explain the difference between a primary key and a unique key." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-the-difference-between-a-primary-key-and-a-unique-key-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-the-difference-between-a-primary-key-and-a-unique-key-sticky.svg" alt="Sticky Note: Explain the difference between a primary key and a unique key." width="30%">
</a>


**Answer:** A primary key uniquely identifies a row, cannot be `NULL`, and there can be only one per table. A unique key also enforces uniqueness but allows one `NULL` (in MySQL), and a table can have multiple unique keys.

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE,
    ssn VARCHAR(11) UNIQUE
);
```

### Q26: What is a foreign key and what referential actions exist?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-foreign-key-and-what-referential-actions-exist-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-foreign-key-and-what-referential-actions-exist-handwritten.svg" alt="Handwritten: What is a foreign key and what referential actions exist?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-foreign-key-and-what-referential-actions-exist-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-foreign-key-and-what-referential-actions-exist-diagram.svg" alt="Diagram: What is a foreign key and what referential actions exist?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-foreign-key-and-what-referential-actions-exist-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-foreign-key-and-what-referential-actions-exist-sticky.svg" alt="Sticky Note: What is a foreign key and what referential actions exist?" width="30%">
</a>


**Answer:** A foreign key enforces referential integrity by linking a column to the primary key of another table. Actions: `CASCADE` (propagate delete/update), `SET NULL`, `RESTRICT` (prevent action), `NO ACTION`.

```sql
CREATE TABLE orders (
    id INT PRIMARY KEY,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
```

### Q27: What is the difference between a logical delete and a physical delete?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-a-logical-delete-and-a-physical-delete-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-a-logical-delete-and-a-physical-delete-handwritten.svg" alt="Handwritten: What is the difference between a logical delete and a physical delete?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-a-logical-delete-and-a-physical-delete-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-a-logical-delete-and-a-physical-delete-diagram.svg" alt="Diagram: What is the difference between a logical delete and a physical delete?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-a-logical-delete-and-a-physical-delete-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-a-logical-delete-and-a-physical-delete-sticky.svg" alt="Sticky Note: What is the difference between a logical delete and a physical delete?" width="30%">
</a>


**Answer:** Logical delete sets a flag (e.g., `deleted_at TIMESTAMP NULL`) without removing the row; physical delete runs `DELETE FROM`. Logical deletes preserve history and allow recovery but require all queries to filter `WHERE deleted_at IS NULL`. Physical delete frees space permanently.

```sql
-- Logical delete
UPDATE users SET deleted_at = NOW() WHERE id = 123;

-- Physical delete
DELETE FROM users WHERE id = 123;
```

### Q28: Explain one-to-one, one-to-many, and many-to-many relationships with examples.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-one-to-one-one-to-many-and-many-to-many-relationships-with-examples-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-one-to-one-one-to-many-and-many-to-many-relationships-with-examples-handwritten.svg" alt="Handwritten: Explain one-to-one, one-to-many, and many-to-many relationships with examples." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-one-to-one-one-to-many-and-many-to-many-relationships-with-examples-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-one-to-one-one-to-many-and-many-to-many-relationships-with-examples-diagram.svg" alt="Diagram: Explain one-to-one, one-to-many, and many-to-many relationships with examples." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-one-to-one-one-to-many-and-many-to-many-relationships-with-examples-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-one-to-one-one-to-many-and-many-to-many-relationships-with-examples-sticky.svg" alt="Sticky Note: Explain one-to-one, one-to-many, and many-to-many relationships with examples." width="30%">
</a>


**Answer:**
- **One-to-one:** A user has one profile. Enforce with a unique foreign key.
- **One-to-many:** A department has many employees. The child (employees) holds the foreign key.
- **Many-to-many:** Students enroll in many courses; a course has many students. Requires a junction/pivot table.

```sql
-- One-to-one
CREATE TABLE user_profiles (
    user_id INT PRIMARY KEY,
    bio TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- One-to-many
ALTER TABLE employees ADD COLUMN dept_id INT,
    ADD FOREIGN KEY (dept_id) REFERENCES departments(id);

-- Many-to-many
CREATE TABLE course_student (
    course_id INT,
    student_id INT,
    PRIMARY KEY (course_id, student_id),
    FOREIGN KEY (course_id) REFERENCES courses(id),
    FOREIGN KEY (student_id) REFERENCES students(id)
);
```

### Q29: What is a surrogate key? When would you use it over a natural key?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-surrogate-key-when-would-you-use-it-over-a-natural-key-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-surrogate-key-when-would-you-use-it-over-a-natural-key-handwritten.svg" alt="Handwritten: What is a surrogate key? When would you use it over a natural key?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-surrogate-key-when-would-you-use-it-over-a-natural-key-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-surrogate-key-when-would-you-use-it-over-a-natural-key-diagram.svg" alt="Diagram: What is a surrogate key? When would you use it over a natural key?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-surrogate-key-when-would-you-use-it-over-a-natural-key-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-surrogate-key-when-would-you-use-it-over-a-natural-key-sticky.svg" alt="Sticky Note: What is a surrogate key? When would you use it over a natural key?" width="30%">
</a>


**Answer:** A surrogate key is an artificial identifier (usually an auto-increment integer or UUID) with no business meaning. Use it when natural keys are composite, unstable, or too wide. Surrogate keys simplify foreign-key references and insulate the schema from business-rule changes.

### Q30: How do you model an entity that can have multiple phone numbers with different types (home, work, mobile)?

**Answer:** Store phone numbers in a separate table with a type column.

```sql
CREATE TABLE phones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    type ENUM('home', 'work', 'mobile') NOT NULL,
    number VARCHAR(20) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### Q31: What is an ER diagram and what are its core components?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-an-er-diagram-and-what-are-its-core-components-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-an-er-diagram-and-what-are-its-core-components-handwritten.svg" alt="Handwritten: What is an ER diagram and what are its core components?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-an-er-diagram-and-what-are-its-core-components-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-an-er-diagram-and-what-are-its-core-components-diagram.svg" alt="Diagram: What is an ER diagram and what are its core components?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-an-er-diagram-and-what-are-its-core-components-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-an-er-diagram-and-what-are-its-core-components-sticky.svg" alt="Sticky Note: What is an ER diagram and what are its core components?" width="30%">
</a>


**Answer:** An Entity-Relationship diagram visually represents the database structure. Core components: **entities** (tables), **attributes** (columns), **relationships** (lines connecting entities), **cardinality** (1:1, 1:M, M:M), and **keys** (primary/foreign). Tools: MySQL Workbench, draw.io, dbdiagram.io.

### Q32: What is the difference between `TINYINT`, `SMALLINT`, `MEDIUMINT`, `INT`, and `BIGINT`?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-tinyint-smallint-mediumint-int-and-bigint-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-tinyint-smallint-mediumint-int-and-bigint-handwritten.svg" alt="Handwritten: What is the difference between `TINYINT`, `SMALLINT`, `MEDIUMINT`, `INT`, and `BIGINT`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-tinyint-smallint-mediumint-int-and-bigint-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-tinyint-smallint-mediumint-int-and-bigint-diagram.svg" alt="Diagram: What is the difference between `TINYINT`, `SMALLINT`, `MEDIUMINT`, `INT`, and `BIGINT`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-tinyint-smallint-mediumint-int-and-bigint-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-tinyint-smallint-mediumint-int-and-bigint-sticky.svg" alt="Sticky Note: What is the difference between `TINYINT`, `SMALLINT`, `MEDIUMINT`, `INT`, and `BIGINT`?" width="30%">
</a>


**Answer:** They differ in storage size and range: `TINYINT` (1 byte, -128-127), `SMALLINT` (2 bytes, Â±32K), `MEDIUMINT` (3 bytes, Â±8M), `INT` (4 bytes, Â±2B), `BIGINT` (8 bytes, Â±9.2E18). Choose the smallest type that safely fits your data.

### Q33: How do you model hierarchical data (e.g., categories with subcategories) in MySQL?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-model-hierarchical-data-e-g-categories-with-subcategories-in-mysql-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-model-hierarchical-data-e-g-categories-with-subcategories-in-mysql-handwritten.svg" alt="Handwritten: How do you model hierarchical data (e.g., categories with subcategories) in MySQL?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-model-hierarchical-data-e-g-categories-with-subcategories-in-mysql-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-model-hierarchical-data-e-g-categories-with-subcategories-in-mysql-diagram.svg" alt="Diagram: How do you model hierarchical data (e.g., categories with subcategories) in MySQL?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-model-hierarchical-data-e-g-categories-with-subcategories-in-mysql-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-model-hierarchical-data-e-g-categories-with-subcategories-in-mysql-sticky.svg" alt="Sticky Note: How do you model hierarchical data (e.g., categories with subcategories) in MySQL?" width="30%">
</a>


**Answer:** Use the **adjacency list** pattern (a `parent_id` column) or **nested sets** (left/right values). Adjacency list is simpler for writes; nested sets are faster for subtree reads.

```sql
-- Adjacency list (most common)
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    parent_id INT,
    FOREIGN KEY (parent_id) REFERENCES categories(id)
);

-- Query children
SELECT * FROM categories WHERE parent_id = 5;
```

### Q34: What is the difference between `DECIMAL` and `FLOAT`?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-decimal-and-float-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-decimal-and-float-handwritten.svg" alt="Handwritten: What is the difference between `DECIMAL` and `FLOAT`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-decimal-and-float-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-decimal-and-float-diagram.svg" alt="Diagram: What is the difference between `DECIMAL` and `FLOAT`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-decimal-and-float-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-decimal-and-float-sticky.svg" alt="Sticky Note: What is the difference between `DECIMAL` and `FLOAT`?" width="30%">
</a>


**Answer:** `DECIMAL` is exact → stored as a string of digits; used for money and precise calculations. `FLOAT`/`DOUBLE` are approximate → stored as binary floating-point; faster but subject to rounding errors.

```sql
CREATE TABLE transactions (
    id INT PRIMARY KEY,
    amount DECIMAL(10,2)  -- exact, 10 digits total, 2 after decimal
);
```

### Q35: Should you store images or files in the database? Why or why not?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/should-you-store-images-or-files-in-the-database-why-or-why-not-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/should-you-store-images-or-files-in-the-database-why-or-why-not-handwritten.svg" alt="Handwritten: Should you store images or files in the database? Why or why not?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/should-you-store-images-or-files-in-the-database-why-or-why-not-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/should-you-store-images-or-files-in-the-database-why-or-why-not-diagram.svg" alt="Diagram: Should you store images or files in the database? Why or why not?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/should-you-store-images-or-files-in-the-database-why-or-why-not-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/should-you-store-images-or-files-in-the-database-why-or-why-not-sticky.svg" alt="Sticky Note: Should you store images or files in the database? Why or why not?" width="30%">
</a>


**Answer:** Generally no → store files on disk or object storage (S3) and keep only the file path in the database. Reasons: database backups stay lean, streaming is faster from a CDN, and bloating the database hurts cache performance. Exceptions: very small files (avatars &lt; 64KB) where transactional consistency with metadata matters.

### Q36: What is an enum column and what are its drawbacks?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-an-enum-column-and-what-are-its-drawbacks-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-an-enum-column-and-what-are-its-drawbacks-handwritten.svg" alt="Handwritten: What is an enum column and what are its drawbacks?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-an-enum-column-and-what-are-its-drawbacks-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-an-enum-column-and-what-are-its-drawbacks-diagram.svg" alt="Diagram: What is an enum column and what are its drawbacks?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-an-enum-column-and-what-are-its-drawbacks-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-an-enum-column-and-what-are-its-drawbacks-sticky.svg" alt="Sticky Note: What is an enum column and what are its drawbacks?" width="30%">
</a>


**Answer:** `ENUM` restricts a column to a fixed set of string values stored internally as integers. Drawbacks: adding a new value requires `ALTER TABLE` (locking the table), values cannot be reused across tables, and sorting uses the internal index rather than alphabetical order.

```sql
CREATE TABLE orders (
    status ENUM('pending', 'shipped', 'delivered', 'cancelled') NOT NULL
);
```

### Q37: Explain the `ON DELETE CASCADE` behavior in foreign keys.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-the-on-delete-cascade-behavior-in-foreign-keys-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-the-on-delete-cascade-behavior-in-foreign-keys-handwritten.svg" alt="Handwritten: Explain the `ON DELETE CASCADE` behavior in foreign keys." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-the-on-delete-cascade-behavior-in-foreign-keys-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-the-on-delete-cascade-behavior-in-foreign-keys-diagram.svg" alt="Diagram: Explain the `ON DELETE CASCADE` behavior in foreign keys." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-the-on-delete-cascade-behavior-in-foreign-keys-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-the-on-delete-cascade-behavior-in-foreign-keys-sticky.svg" alt="Sticky Note: Explain the `ON DELETE CASCADE` behavior in foreign keys." width="30%">
</a>


**Answer:** When a parent row is deleted, all child rows referencing it are automatically deleted. Useful for dependent data (order → order_items) but dangerous when cascading through multiple levels → a single delete can wipe large portions of the database silently.

---

## Indexing & Performance

### Q38: How does a B-tree index work in MySQL?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-does-a-b-tree-index-work-in-mysql-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-does-a-b-tree-index-work-in-mysql-handwritten.svg" alt="Handwritten: How does a B-tree index work in MySQL?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-does-a-b-tree-index-work-in-mysql-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-does-a-b-tree-index-work-in-mysql-diagram.svg" alt="Diagram: How does a B-tree index work in MySQL?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-does-a-b-tree-index-work-in-mysql-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-does-a-b-tree-index-work-in-mysql-sticky.svg" alt="Sticky Note: How does a B-tree index work in MySQL?" width="30%">
</a>


**Answer:** A B-tree organizes data in a balanced tree structure where each node contains sorted key values and pointers to child nodes. The root branches down to leaf nodes that store pointers to actual rows. Search complexity is O(log n). InnoDB's clustered index is a B-tree where the leaves contain the actual row data (for the primary key).

### Q39: What is a composite index and what is the leftmost prefix rule?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-composite-index-and-what-is-the-leftmost-prefix-rule-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-composite-index-and-what-is-the-leftmost-prefix-rule-handwritten.svg" alt="Handwritten: What is a composite index and what is the leftmost prefix rule?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-composite-index-and-what-is-the-leftmost-prefix-rule-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-composite-index-and-what-is-the-leftmost-prefix-rule-diagram.svg" alt="Diagram: What is a composite index and what is the leftmost prefix rule?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-composite-index-and-what-is-the-leftmost-prefix-rule-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-composite-index-and-what-is-the-leftmost-prefix-rule-sticky.svg" alt="Sticky Note: What is a composite index and what is the leftmost prefix rule?" width="30%">
</a>


**Answer:** A composite index is an index on multiple columns. MySQL can use the index for queries that filter on a leftmost prefix of those columns → the **leftmost prefix rule**.

```sql
CREATE INDEX idx_name_dept_salary ON employees (name, dept_id, salary);

-- Uses the index fully
SELECT * FROM employees WHERE name = 'John' AND dept_id = 5;

-- Uses only the first column of the index
SELECT * FROM employees WHERE name = 'John';

-- Cannot use the index at all (skips the first column)
SELECT * FROM employees WHERE dept_id = 5;
```

### Q40: How do you use `EXPLAIN` to diagnose a slow query?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-explain-to-diagnose-a-slow-query-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-explain-to-diagnose-a-slow-query-handwritten.svg" alt="Handwritten: How do you use `EXPLAIN` to diagnose a slow query?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-explain-to-diagnose-a-slow-query-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-explain-to-diagnose-a-slow-query-diagram.svg" alt="Diagram: How do you use `EXPLAIN` to diagnose a slow query?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-explain-to-diagnose-a-slow-query-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-explain-to-diagnose-a-slow-query-sticky.svg" alt="Sticky Note: How do you use `EXPLAIN` to diagnose a slow query?" width="30%">
</a>


**Answer:** Prefix any query with `EXPLAIN` to see the execution plan: `type` (how joins are performed → `ALL` is a full table scan, `ref`/`range`/`const` are good), `key` (index used), `rows` (estimated rows examined), and `Extra` (e.g., `Using filesort`, `Using temporary` are red flags).

```sql
EXPLAIN SELECT * FROM orders WHERE customer_id = 42\G
```

### Q41: What causes a `Using filesort` in `EXPLAIN` and how do you fix it?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-causes-a-using-filesort-in-explain-and-how-do-you-fix-it-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-causes-a-using-filesort-in-explain-and-how-do-you-fix-it-handwritten.svg" alt="Handwritten: What causes a `Using filesort` in `EXPLAIN` and how do you fix it?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-causes-a-using-filesort-in-explain-and-how-do-you-fix-it-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-causes-a-using-filesort-in-explain-and-how-do-you-fix-it-diagram.svg" alt="Diagram: What causes a `Using filesort` in `EXPLAIN` and how do you fix it?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-causes-a-using-filesort-in-explain-and-how-do-you-fix-it-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-causes-a-using-filesort-in-explain-and-how-do-you-fix-it-sticky.svg" alt="Sticky Note: What causes a `Using filesort` in `EXPLAIN` and how do you fix it?" width="30%">
</a>


**Answer:** `Using filesort` means MySQL sorted the result set without using an index. Fix it by adding an index that matches the `ORDER BY` clause, ideally covering both `WHERE` and `ORDER BY` columns.

```sql
-- Slow: filesort
EXPLAIN SELECT * FROM orders ORDER BY created_at DESC;

-- Create an index to eliminate filesort
CREATE INDEX idx_orders_created_at ON orders (created_at);
```

### Q42: What is a covering index?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-covering-index-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-covering-index-handwritten.svg" alt="Handwritten: What is a covering index?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-covering-index-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-covering-index-diagram.svg" alt="Diagram: What is a covering index?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-covering-index-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-covering-index-sticky.svg" alt="Sticky Note: What is a covering index?" width="30%">
</a>


**Answer:** A covering index contains **all** columns needed by a query, so MySQL can satisfy the query entirely from the index without touching the table data (rows in `Extra` show `Using index`). This is significantly faster.

```sql
CREATE INDEX idx_cover ON employees (dept_id, name, salary);

-- This query reads only from the index → no table lookup
SELECT dept_id, name, salary FROM employees WHERE dept_id = 5;
```

### Q43: When would an index hurt performance?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/when-would-an-index-hurt-performance-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/when-would-an-index-hurt-performance-handwritten.svg" alt="Handwritten: When would an index hurt performance?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/when-would-an-index-hurt-performance-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/when-would-an-index-hurt-performance-diagram.svg" alt="Diagram: When would an index hurt performance?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/when-would-an-index-hurt-performance-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/when-would-an-index-hurt-performance-sticky.svg" alt="Sticky Note: When would an index hurt performance?" width="30%">
</a>


**Answer:** Indexes slow down `INSERT`, `UPDATE`, and `DELETE` because each index must be updated. An unused index wastes disk and memory (buffer pool). Tables with heavy write volume and few reads should have minimal indexes.

### Q44: What is cardinality and why does it matter for indexing?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-cardinality-and-why-does-it-matter-for-indexing-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-cardinality-and-why-does-it-matter-for-indexing-handwritten.svg" alt="Handwritten: What is cardinality and why does it matter for indexing?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-cardinality-and-why-does-it-matter-for-indexing-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-cardinality-and-why-does-it-matter-for-indexing-diagram.svg" alt="Diagram: What is cardinality and why does it matter for indexing?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-cardinality-and-why-does-it-matter-for-indexing-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-cardinality-and-why-does-it-matter-for-indexing-sticky.svg" alt="Sticky Note: What is cardinality and why does it matter for indexing?" width="30%">
</a>


**Answer:** Cardinality is the number of distinct values in a column. High cardinality columns (e.g., email addresses) benefit greatly from indexes. Low-cardinality columns (e.g., a `gender` column with M/F) rarely benefit because a range scan still matches half the rows.

### Q45: What is a full table scan and when does MySQL choose one?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-full-table-scan-and-when-does-mysql-choose-one-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-full-table-scan-and-when-does-mysql-choose-one-handwritten.svg" alt="Handwritten: What is a full table scan and when does MySQL choose one?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-full-table-scan-and-when-does-mysql-choose-one-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-full-table-scan-and-when-does-mysql-choose-one-diagram.svg" alt="Diagram: What is a full table scan and when does MySQL choose one?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-full-table-scan-and-when-does-mysql-choose-one-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-full-table-scan-and-when-does-mysql-choose-one-sticky.svg" alt="Sticky Note: What is a full table scan and when does MySQL choose one?" width="30%">
</a>


**Answer:** MySQL scans every row when no usable index exists or when the optimizer calculates that the index would still need to read most rows (e.g., retrieving 30%+ of a table). Full table scans are acceptable on small tables but catastrophic on large ones.

### Q46: How do you optimize a `LIKE '%term'` query?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-optimize-a-like-term-query-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-optimize-a-like-term-query-handwritten.svg" alt="Handwritten: How do you optimize a `LIKE '%term'` query?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-optimize-a-like-term-query-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-optimize-a-like-term-query-diagram.svg" alt="Diagram: How do you optimize a `LIKE '%term'` query?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-optimize-a-like-term-query-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-optimize-a-like-term-query-sticky.svg" alt="Sticky Note: How do you optimize a `LIKE '%term'` query?" width="30%">
</a>


**Answer:** A leading wildcard (`'%term'`) prevents B-tree index usage. Use a **full-text index** for text search instead.

```sql
-- Full table scan → cannot use B-tree index
SELECT * FROM articles WHERE body LIKE '%database%';

-- Solution: full-text index
CREATE FULLTEXT INDEX ft_articles_body ON articles (body);
SELECT * FROM articles WHERE MATCH(body) AGAINST('database' IN BOOLEAN MODE);
```

### Q47: What is a `SPATIAL` index and when do you use it?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-spatial-index-and-when-do-you-use-it-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-spatial-index-and-when-do-you-use-it-handwritten.svg" alt="Handwritten: What is a `SPATIAL` index and when do you use it?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-spatial-index-and-when-do-you-use-it-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-spatial-index-and-when-do-you-use-it-diagram.svg" alt="Diagram: What is a `SPATIAL` index and when do you use it?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-spatial-index-and-when-do-you-use-it-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-spatial-index-and-when-do-you-use-it-sticky.svg" alt="Sticky Note: What is a `SPATIAL` index and when do you use it?" width="30%">
</a>


**Answer:** A spatial index (R-tree) is used for geometric/geographic data stored in `GEOMETRY`, `POINT`, `LINESTRING`, or `POLYGON` columns. It enables efficient bounding-box and distance queries.

```sql
CREATE TABLE locations (
    id INT PRIMARY KEY,
    coords POINT NOT NULL SRID 4326,
    SPATIAL INDEX(coords)
);

-- Find places within 10 km of a point
SELECT id, ST_Distance_Sphere(coords, ST_SRID(POINT(-122.4, 37.8), 4326)) AS dist
FROM locations
WHERE ST_Distance_Sphere(coords, ST_SRID(POINT(-122.4, 37.8), 4326)) <= 10000;
```

### Q48: What is index cardinality and how do you check it?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-index-cardinality-and-how-do-you-check-it-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-index-cardinality-and-how-do-you-check-it-handwritten.svg" alt="Handwritten: What is index cardinality and how do you check it?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-index-cardinality-and-how-do-you-check-it-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-index-cardinality-and-how-do-you-check-it-diagram.svg" alt="Diagram: What is index cardinality and how do you check it?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-index-cardinality-and-how-do-you-check-it-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-index-cardinality-and-how-do-you-check-it-sticky.svg" alt="Sticky Note: What is index cardinality and how do you check it?" width="30%">
</a>


**Answer:** Cardinality is the estimated number of unique values in the index. Higher cardinality means the index is more selective. Check with `SHOW INDEX` or `SHOW INDEXES`.

```sql
SHOW INDEX FROM employees;
-- The "Cardinality" column shows estimated distinct values per index.
```

### Q49: What is the difference between `EXPLAIN` and `EXPLAIN ANALYZE` (MySQL 8.0.18+)?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-explain-and-explain-analyze-mysql-8-0-18-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-explain-and-explain-analyze-mysql-8-0-18-handwritten.svg" alt="Handwritten: What is the difference between `EXPLAIN` and `EXPLAIN ANALYZE` (MySQL 8.0.18+)?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-explain-and-explain-analyze-mysql-8-0-18-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-explain-and-explain-analyze-mysql-8-0-18-diagram.svg" alt="Diagram: What is the difference between `EXPLAIN` and `EXPLAIN ANALYZE` (MySQL 8.0.18+)?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-explain-and-explain-analyze-mysql-8-0-18-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-explain-and-explain-analyze-mysql-8-0-18-sticky.svg" alt="Sticky Note: What is the difference between `EXPLAIN` and `EXPLAIN ANALYZE` (MySQL 8.0.18+)?" width="30%">
</a>


**Answer:** `EXPLAIN` shows the estimated execution plan. `EXPLAIN ANALYZE` actually runs the query and shows actual timing and row counts for each iterator step, providing true cost rather than optimizer estimates.

```sql
EXPLAIN ANALYZE SELECT * FROM orders WHERE customer_id = 42;
-- Outputs actual execution time and row counts per operation
```

### Q50: How do you detect and fix unused indexes?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-detect-and-fix-unused-indexes-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-detect-and-fix-unused-indexes-handwritten.svg" alt="Handwritten: How do you detect and fix unused indexes?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-detect-and-fix-unused-indexes-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-detect-and-fix-unused-indexes-diagram.svg" alt="Diagram: How do you detect and fix unused indexes?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-detect-and-fix-unused-indexes-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-detect-and-fix-unused-indexes-sticky.svg" alt="Sticky Note: How do you detect and fix unused indexes?" width="30%">
</a>


**Answer:** Query `performance_schema.table_io_waits_summary_by_index_usage` to find indexes with zero reads. Drop unused indexes to speed up writes and reduce storage.

```sql
SELECT object_schema, object_name, index_name, count_read, count_write
FROM performance_schema.table_io_waits_summary_by_index_usage
WHERE index_name IS NOT NULL AND count_read = 0
ORDER BY count_write DESC;
```

### Q51: What is `MRR` (Multi-Range Read) optimization?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-mrr-multi-range-read-optimization-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-mrr-multi-range-read-optimization-handwritten.svg" alt="Handwritten: What is `MRR` (Multi-Range Read) optimization?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-mrr-multi-range-read-optimization-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-mrr-multi-range-read-optimization-diagram.svg" alt="Diagram: What is `MRR` (Multi-Range Read) optimization?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-mrr-multi-range-read-optimization-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-mrr-multi-range-read-optimization-sticky.svg" alt="Sticky Note: What is `MRR` (Multi-Range Read) optimization?" width="30%">
</a>


**Answer:** When an index scan retrieves rows in non-primary-key order, MRR sorts the row IDs by primary key before fetching rows. This converts random disk I/O into sequential I/O, dramatically reducing page reads for large range scans.

### Q52: What is `ICP` (Index Condition Pushdown)?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-icp-index-condition-pushdown-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-icp-index-condition-pushdown-handwritten.svg" alt="Handwritten: What is `ICP` (Index Condition Pushdown)?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-icp-index-condition-pushdown-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-icp-index-condition-pushdown-diagram.svg" alt="Diagram: What is `ICP` (Index Condition Pushdown)?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-icp-index-condition-pushdown-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-icp-index-condition-pushdown-sticky.svg" alt="Sticky Note: What is `ICP` (Index Condition Pushdown)?" width="30%">
</a>


**Answer:** ICP pushes parts of the `WHERE` condition that involve index columns down to the storage engine layer. The engine evaluates these conditions at the index level, avoiding full row reads for non-matching rows. MySQL enables this by default (check with `SHOW VARIABLES LIKE 'optimizer_switch'`).

---

## Transactions & Locking

### Q53: Explain ACID properties.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-acid-properties-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-acid-properties-handwritten.svg" alt="Handwritten: Explain ACID properties." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-acid-properties-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-acid-properties-diagram.svg" alt="Diagram: Explain ACID properties." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-acid-properties-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-acid-properties-sticky.svg" alt="Sticky Note: Explain ACID properties." width="30%">
</a>


**Answer:**
- **Atomicity** → A transaction either commits fully or rolls back entirely. Partial success is impossible.
- **Consistency** → A transaction brings the database from one valid state to another; all constraints, triggers, and cascades are respected.
- **Isolation** → Concurrent transactions do not interfere with each other (controlled by isolation level).
- **Durability** → Once committed, changes survive system crashes (via redo logs).

### Q54: What are the four transaction isolation levels in MySQL?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-the-four-transaction-isolation-levels-in-mysql-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-the-four-transaction-isolation-levels-in-mysql-handwritten.svg" alt="Handwritten: What are the four transaction isolation levels in MySQL?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-the-four-transaction-isolation-levels-in-mysql-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-the-four-transaction-isolation-levels-in-mysql-diagram.svg" alt="Diagram: What are the four transaction isolation levels in MySQL?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-the-four-transaction-isolation-levels-in-mysql-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-the-four-transaction-isolation-levels-in-mysql-sticky.svg" alt="Sticky Note: What are the four transaction isolation levels in MySQL?" width="30%">
</a>


**Answer:**
1. **READ UNCOMMITTED** → Dirty reads, non-repeatable reads, phantom reads all possible.
2. **READ COMMITTED** → Dirty reads prevented; non-repeatable reads and phantom reads possible.
3. **REPEATABLE READ** (InnoDB default) → Dirty reads and non-repeatable reads prevented; phantom reads prevented via gap locks.
4. **SERIALIZABLE** → All anomalies prevented; essentially every read acquires a shared lock.

```sql
SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;
```

### Q55: What is a dirty read? Give an example.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-dirty-read-give-an-example-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-dirty-read-give-an-example-handwritten.svg" alt="Handwritten: What is a dirty read? Give an example." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-dirty-read-give-an-example-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-dirty-read-give-an-example-diagram.svg" alt="Diagram: What is a dirty read? Give an example." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-dirty-read-give-an-example-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-dirty-read-give-an-example-sticky.svg" alt="Sticky Note: What is a dirty read? Give an example." width="30%">
</a>


**Answer:** A dirty read occurs when a transaction reads uncommitted changes from another transaction. If that other transaction rolls back, the first transaction has read data that never officially existed. Prevented by `READ COMMITTED` and above.

```
Transaction A: UPDATE accounts SET balance = 200 WHERE id = 1;  -- uncommitted
Transaction B: SELECT balance FROM accounts WHERE id = 1;        -- reads 200 (dirty!)
Transaction A: ROLLBACK;                                         -- balance is back to 100
```

### Q56: What is a deadlock and how does MySQL resolve it?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-deadlock-and-how-does-mysql-resolve-it-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-deadlock-and-how-does-mysql-resolve-it-handwritten.svg" alt="Handwritten: What is a deadlock and how does MySQL resolve it?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-deadlock-and-how-does-mysql-resolve-it-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-deadlock-and-how-does-mysql-resolve-it-diagram.svg" alt="Diagram: What is a deadlock and how does MySQL resolve it?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-deadlock-and-how-does-mysql-resolve-it-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-deadlock-and-how-does-mysql-resolve-it-sticky.svg" alt="Sticky Note: What is a deadlock and how does MySQL resolve it?" width="30%">
</a>


**Answer:** A deadlock occurs when two transactions each hold a lock the other needs. InnoDB detects deadlocks immediately and rolls back the **younger** transaction (the one that changed the fewest rows). The application must retry the aborted transaction.

```sql
-- Transaction A
START TRANSACTION;
UPDATE products SET stock = stock - 1 WHERE id = 1;  -- locks product 1
UPDATE products SET stock = stock - 1 WHERE id = 2;  -- waits for B's lock
-- DEADLOCK → A or B is rolled back
```

### Q57: Explain pessimistic vs. optimistic locking.

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-pessimistic-vs-optimistic-locking-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-pessimistic-vs-optimistic-locking-handwritten.svg" alt="Handwritten: Explain pessimistic vs. optimistic locking." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-pessimistic-vs-optimistic-locking-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-pessimistic-vs-optimistic-locking-diagram.svg" alt="Diagram: Explain pessimistic vs. optimistic locking." width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-pessimistic-vs-optimistic-locking-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-pessimistic-vs-optimistic-locking-sticky.svg" alt="Sticky Note: Explain pessimistic vs. optimistic locking." width="30%">
</a>


**Answer:** **Pessimistic locking** locks rows at read time (`SELECT ... FOR UPDATE`) assuming conflicts are likely. **Optimistic locking** assumes conflicts are rare and checks at write time using a version column or timestamp.

```sql
-- Pessimistic: lock the row when reading
BEGIN;
SELECT * FROM accounts WHERE id = 1 FOR UPDATE;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
COMMIT;

-- Optimistic: version-based check
UPDATE accounts
SET balance = balance - 100, version = version + 1
WHERE id = 1 AND version = 5;
-- AffectedRows = 0 means a concurrent update happened; retry.
```

### Q58: What is a gap lock in InnoDB?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-gap-lock-in-innodb-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-gap-lock-in-innodb-handwritten.svg" alt="Handwritten: What is a gap lock in InnoDB?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-gap-lock-in-innodb-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-gap-lock-in-innodb-diagram.svg" alt="Diagram: What is a gap lock in InnoDB?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-gap-lock-in-innodb-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-gap-lock-in-innodb-sticky.svg" alt="Sticky Note: What is a gap lock in InnoDB?" width="30%">
</a>


**Answer:** A gap lock locks a range of rows between existing index entries rather than the rows themselves. It prevents **phantom reads** (new rows inserted by another transaction that would match the current query). InnoDB uses gap locks at `REPEATABLE READ` isolation.

```sql
-- Locks the gap between id=10 and id=20 for potential inserts
SELECT * FROM products WHERE id BETWEEN 10 AND 20 FOR UPDATE;
-- Another transaction cannot INSERT id=15 until this transaction commits.
```

### Q59: What is `SELECT ... FOR UPDATE` and when would you use it?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-select-for-update-and-when-would-you-use-it-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-select-for-update-and-when-would-you-use-it-handwritten.svg" alt="Handwritten: What is `SELECT ... FOR UPDATE` and when would you use it?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-select-for-update-and-when-would-you-use-it-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-select-for-update-and-when-would-you-use-it-diagram.svg" alt="Diagram: What is `SELECT ... FOR UPDATE` and when would you use it?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-select-for-update-and-when-would-you-use-it-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-select-for-update-and-when-would-you-use-it-sticky.svg" alt="Sticky Note: What is `SELECT ... FOR UPDATE` and when would you use it?" width="30%">
</a>


**Answer:** `SELECT ... FOR UPDATE` locks the selected rows (and any gap ranges) exclusively. Other transactions cannot update, delete, or `SELECT ... FOR UPDATE` the same rows. Use it when you need to read a value, compute a new value, and write it back atomically.

```sql
START TRANSACTION;
-- Lock the inventory row
SELECT quantity FROM inventory WHERE product_id = 1 FOR UPDATE;
-- Compute and update
UPDATE inventory SET quantity = quantity - 1 WHERE product_id = 1;
COMMIT;
```

### Q60: What is `NOWAIT` and `SKIP LOCKED`?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-nowait-and-skip-locked-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-nowait-and-skip-locked-handwritten.svg" alt="Handwritten: What is `NOWAIT` and `SKIP LOCKED`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-nowait-and-skip-locked-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-nowait-and-skip-locked-diagram.svg" alt="Diagram: What is `NOWAIT` and `SKIP LOCKED`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-nowait-and-skip-locked-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-nowait-and-skip-locked-sticky.svg" alt="Sticky Note: What is `NOWAIT` and `SKIP LOCKED`?" width="30%">
</a>


**Answer:** MySQL 8.0+ supports these lock-wait modifiers. `NOWAIT` fails immediately if the row is locked. `SKIP LOCKED` skips locked rows entirely → useful for queue/job tables.

```sql
-- Skip rows being processed by other workers
SELECT * FROM job_queue
WHERE status = 'pending'
ORDER BY created_at
LIMIT 1
FOR UPDATE SKIP LOCKED;
```

### Q61: How do transaction logs (redo log, undo log) work?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-transaction-logs-redo-log-undo-log-work-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-transaction-logs-redo-log-undo-log-work-handwritten.svg" alt="Handwritten: How do transaction logs (redo log, undo log) work?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-transaction-logs-redo-log-undo-log-work-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-transaction-logs-redo-log-undo-log-work-diagram.svg" alt="Diagram: How do transaction logs (redo log, undo log) work?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-transaction-logs-redo-log-undo-log-work-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-transaction-logs-redo-log-undo-log-work-sticky.svg" alt="Sticky Note: How do transaction logs (redo log, undo log) work?" width="30%">
</a>


**Answer:** The **redo log** records every change for recovery → on crash, InnoDB replays the redo log to restore committed changes. The **undo log** stores old versions of changed rows for rollback and MVCC (Multi-Version Concurrency Control). The undo log enables consistent reads even while a row is being updated by another transaction.

### Q62: What is the difference between `LOCK TABLES` and row-level locking?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-lock-tables-and-row-level-locking-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-lock-tables-and-row-level-locking-handwritten.svg" alt="Handwritten: What is the difference between `LOCK TABLES` and row-level locking?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-lock-tables-and-row-level-locking-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-lock-tables-and-row-level-locking-diagram.svg" alt="Diagram: What is the difference between `LOCK TABLES` and row-level locking?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-lock-tables-and-row-level-locking-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-lock-tables-and-row-level-locking-sticky.svg" alt="Sticky Note: What is the difference between `LOCK TABLES` and row-level locking?" width="30%">
</a>


**Answer:** `LOCK TABLES` is a MySQL-level lock that blocks all other sessions from accessing the table entirely. Row-level locking (InnoDB) allows concurrent access to different rows within the same table. InnoDB row-level locks are set automatically by DML statements; `LOCK TABLES` is rarely needed in production with InnoDB.

### Q63: What is MVCC and how does it enable consistent reads without locks?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-mvcc-and-how-does-it-enable-consistent-reads-without-locks-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-mvcc-and-how-does-it-enable-consistent-reads-without-locks-handwritten.svg" alt="Handwritten: What is MVCC and how does it enable consistent reads without locks?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-mvcc-and-how-does-it-enable-consistent-reads-without-locks-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-mvcc-and-how-does-it-enable-consistent-reads-without-locks-diagram.svg" alt="Diagram: What is MVCC and how does it enable consistent reads without locks?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-mvcc-and-how-does-it-enable-consistent-reads-without-locks-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-mvcc-and-how-does-it-enable-consistent-reads-without-locks-sticky.svg" alt="Sticky Note: What is MVCC and how does it enable consistent reads without locks?" width="30%">
</a>


**Answer:** Multi-Version Concurrency Control (MVCC) maintains multiple versions of each row via the undo log. A read operation sees a snapshot of the database as of the time the transaction started (or the statement, depending on isolation level). Readers never block writers and writers never block readers.

---

## Laravel Database Layer

### Q64: What is the difference between the Laravel Query Builder and Eloquent ORM?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-the-laravel-query-builder-and-eloquent-orm-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-the-laravel-query-builder-and-eloquent-orm-handwritten.svg" alt="Handwritten: What is the difference between the Laravel Query Builder and Eloquent ORM?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-the-laravel-query-builder-and-eloquent-orm-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-the-laravel-query-builder-and-eloquent-orm-diagram.svg" alt="Diagram: What is the difference between the Laravel Query Builder and Eloquent ORM?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-the-laravel-query-builder-and-eloquent-orm-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-the-laravel-query-builder-and-eloquent-orm-sticky.svg" alt="Sticky Note: What is the difference between the Laravel Query Builder and Eloquent ORM?" width="30%">
</a>


**Answer:** The Query Builder (`DB::table()`) builds SQL directly and returns plain `stdClass` objects or arrays. Eloquent is an ORM that maps tables to Model classes, supports relationships, accessors, mutators, events, and returns collections of Model objects. Eloquent is more expressive for complex domain logic; the Query Builder is faster for simple CRUD and reporting.

```php
// Query Builder
$users = DB::table('users')->where('active', true)->get();

// Eloquent
$users = User::where('active', true)->get();
```

### Q65: How do you prevent SQL injection in Laravel?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-prevent-sql-injection-in-laravel-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-prevent-sql-injection-in-laravel-handwritten.svg" alt="Handwritten: How do you prevent SQL injection in Laravel?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-prevent-sql-injection-in-laravel-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-prevent-sql-injection-in-laravel-diagram.svg" alt="Diagram: How do you prevent SQL injection in Laravel?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-prevent-sql-injection-in-laravel-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-prevent-sql-injection-in-laravel-sticky.svg" alt="Sticky Note: How do you prevent SQL injection in Laravel?" width="30%">
</a>


**Answer:** Laravel's Query Builder and Eloquent use **PDO parameter binding** for all `where` clauses and `insert`/`update` values. Always use bindings rather than string concatenation.

```php
// Safe → parameter binding
DB::table('users')->where('email', $userInput)->get();

// DANGEROUS → raw concatenation (avoid at all costs)
DB::statement("SELECT * FROM users WHERE email = '$userInput'");
```

### Q66: What is the N+1 query problem and how do you fix it in Eloquent?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-n-1-query-problem-and-how-do-you-fix-it-in-eloquent-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-n-1-query-problem-and-how-do-you-fix-it-in-eloquent-handwritten.svg" alt="Handwritten: What is the N+1 query problem and how do you fix it in Eloquent?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-n-1-query-problem-and-how-do-you-fix-it-in-eloquent-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-n-1-query-problem-and-how-do-you-fix-it-in-eloquent-diagram.svg" alt="Diagram: What is the N+1 query problem and how do you fix it in Eloquent?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-n-1-query-problem-and-how-do-you-fix-it-in-eloquent-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-n-1-query-problem-and-how-do-you-fix-it-in-eloquent-sticky.svg" alt="Sticky Note: What is the N+1 query problem and how do you fix it in Eloquent?" width="30%">
</a>


**Answer:** The N+1 problem occurs when you fetch a parent model and then lazy-load a relationship inside a loop, generating 1 query for the parent + N queries for each child. Fix it with **eager loading** using `with()`.

```php
// N+1 → bad (1 query for posts + N queries for comments)
$posts = Post::all();
foreach ($posts as $post) {
    echo $post->comments->count(); // N extra queries
}

// Fixed → 2 total queries (1 for posts, 1 for comments)
$posts = Post::with('comments')->get();
foreach ($posts as $post) {
    echo $post->comments->count();
}
```

### Q67: What is lazy eager loading and when is it useful?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-lazy-eager-loading-and-when-is-it-useful-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-lazy-eager-loading-and-when-is-it-useful-handwritten.svg" alt="Handwritten: What is lazy eager loading and when is it useful?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-lazy-eager-loading-and-when-is-it-useful-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-lazy-eager-loading-and-when-is-it-useful-diagram.svg" alt="Diagram: What is lazy eager loading and when is it useful?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-lazy-eager-loading-and-when-is-it-useful-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-lazy-eager-loading-and-when-is-it-useful-sticky.svg" alt="Sticky Note: What is lazy eager loading and when is it useful?" width="30%">
</a>


**Answer:** `load()` eager-loads a relationship after the parent model is already retrieved. Useful when you don't know until runtime whether you'll need the related data.

```php
$post = Post::find(1);
if (auth()->user()->canSeeComments()) {
    $post->load('comments'); // Eager load on demand
}
```

### Q68: How do you write a raw query in Laravel safely?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-write-a-raw-query-in-laravel-safely-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-write-a-raw-query-in-laravel-safely-handwritten.svg" alt="Handwritten: How do you write a raw query in Laravel safely?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-write-a-raw-query-in-laravel-safely-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-write-a-raw-query-in-laravel-safely-diagram.svg" alt="Diagram: How do you write a raw query in Laravel safely?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-write-a-raw-query-in-laravel-safely-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-write-a-raw-query-in-laravel-safely-sticky.svg" alt="Sticky Note: How do you write a raw query in Laravel safely?" width="30%">
</a>


**Answer:** Use `DB::raw()` inside the Query Builder or Eloquent, always passing user values as bindings.

```php
$users = DB::table('users')
    ->select(DB::raw('YEAR(created_at) as year, COUNT(*) as total'))
    ->whereRaw('status = ?', ['active'])
    ->groupBy(DB::raw('YEAR(created_at)'))
    ->get();
```

### Q69: Explain Laravel migrations → what are `up()` and `down()`?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-laravel-migrations-what-are-up-and-down-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-laravel-migrations-what-are-up-and-down-handwritten.svg" alt="Handwritten: Explain Laravel migrations → what are `up()` and `down()`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-laravel-migrations-what-are-up-and-down-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-laravel-migrations-what-are-up-and-down-diagram.svg" alt="Diagram: Explain Laravel migrations → what are `up()` and `down()`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-laravel-migrations-what-are-up-and-down-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/explain-laravel-migrations-what-are-up-and-down-sticky.svg" alt="Sticky Note: Explain Laravel migrations → what are `up()` and `down()`?" width="30%">
</a>


**Answer:** Migrations are version control for the database schema. `up()` applies the changes; `down()` reverses them.

```php
// database/migrations/2024_01_01_000001_create_posts_table.php
public function up(): void
{
    Schema::create('posts', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->text('body');
        $table->foreignId('user_id')->constrained()->cascadeOnDelete();
        $table->timestamps();
    });
}

public function down(): void
{
    Schema::dropIfExists('posts');
}
```

### Q70: How do you seed a database with relationships in Laravel?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-seed-a-database-with-relationships-in-laravel-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-seed-a-database-with-relationships-in-laravel-handwritten.svg" alt="Handwritten: How do you seed a database with relationships in Laravel?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-seed-a-database-with-relationships-in-laravel-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-seed-a-database-with-relationships-in-laravel-diagram.svg" alt="Diagram: How do you seed a database with relationships in Laravel?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-seed-a-database-with-relationships-in-laravel-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-seed-a-database-with-relationships-in-laravel-sticky.svg" alt="Sticky Note: How do you seed a database with relationships in Laravel?" width="30%">
</a>


**Answer:** Use model factories and relationship methods in the seeder.

```php
class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory(10)
            ->has(Post::factory(5))
            ->has(Profile::factory())
            ->create();
    }
}
```

### Q71: What is the difference between `withCount` and `loadCount`?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-withcount-and-loadcount-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-withcount-and-loadcount-handwritten.svg" alt="Handwritten: What is the difference between `withCount` and `loadCount`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-withcount-and-loadcount-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-withcount-and-loadcount-diagram.svg" alt="Diagram: What is the difference between `withCount` and `loadCount`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-withcount-and-loadcount-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-withcount-and-loadcount-sticky.svg" alt="Sticky Note: What is the difference between `withCount` and `loadCount`?" width="30%">
</a>


**Answer:** `withCount()` adds the relationship count to the initial query results as an attribute. `loadCount()` loads the count after the model is already retrieved.

```php
// withCount → single query
$posts = Post::withCount('comments')->get();
echo $posts[0]->comments_count;

// loadCount → loads after retrieval
$post = Post::find(1);
$post->loadCount('comments');
echo $post->comments_count;
```

### Q72: How do you use database transactions in Laravel?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-database-transactions-in-laravel-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-database-transactions-in-laravel-handwritten.svg" alt="Handwritten: How do you use database transactions in Laravel?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-database-transactions-in-laravel-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-database-transactions-in-laravel-diagram.svg" alt="Diagram: How do you use database transactions in Laravel?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-database-transactions-in-laravel-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-database-transactions-in-laravel-sticky.svg" alt="Sticky Note: How do you use database transactions in Laravel?" width="30%">
</a>


**Answer:** Use `DB::transaction()` with a closure. If the closure throws an exception, the transaction rolls back automatically.

```php
DB::transaction(function () {
    $order = Order::create([/* ... */]);
    $order->items()->createMany($items);
    Inventory::decrementStock($productId, $quantity);
}, attempts: 3); // Retry up to 3 times on deadlock
```

### Q73: What is the difference between `chunk()` and `cursor()` for processing large datasets?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-chunk-and-cursor-for-processing-large-datasets-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-chunk-and-cursor-for-processing-large-datasets-handwritten.svg" alt="Handwritten: What is the difference between `chunk()` and `cursor()` for processing large datasets?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-chunk-and-cursor-for-processing-large-datasets-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-chunk-and-cursor-for-processing-large-datasets-diagram.svg" alt="Diagram: What is the difference between `chunk()` and `cursor()` for processing large datasets?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-chunk-and-cursor-for-processing-large-datasets-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-chunk-and-cursor-for-processing-large-datasets-sticky.svg" alt="Sticky Note: What is the difference between `chunk()` and `cursor()` for processing large datasets?" width="30%">
</a>


**Answer:** `chunk()` fetches records in batches (e.g., 100 at a time) using `LIMIT`/`OFFSET`, keeping memory bounded by batch size. `cursor()` uses a streaming cursor that yields one model at a time without loading all into memory → more memory-efficient but keeps the connection open longer.

```php
// chunk: 100 records per query
Post::chunk(100, function ($posts) {
    foreach ($posts as $post) {
        // process
    }
});

// cursor: streams one row at a time
foreach (Post::cursor() as $post) {
    // process
}
```

### Q74: How do you use scopes to DRY up query logic?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-scopes-to-dry-up-query-logic-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-scopes-to-dry-up-query-logic-handwritten.svg" alt="Handwritten: How do you use scopes to DRY up query logic?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-scopes-to-dry-up-query-logic-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-scopes-to-dry-up-query-logic-diagram.svg" alt="Diagram: How do you use scopes to DRY up query logic?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-scopes-to-dry-up-query-logic-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-scopes-to-dry-up-query-logic-sticky.svg" alt="Sticky Note: How do you use scopes to DRY up query logic?" width="30%">
</a>


**Answer:** Local scopes let you define reusable query constraints on the model.

```php
class Post extends Model
{
    public function scopePublished($query): void
    {
        $query->whereNotNull('published_at')->where('published_at', '<=', now());
    }

    public function scopeByCategory($query, $categoryId): void
    {
        $query->where('category_id', $categoryId);
    }
}

// Usage
$posts = Post::published()->byCategory(5)->get();
```

### Q75: What is the difference between `belongsTo` and `hasMany`?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-belongsto-and-hasmany-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-belongsto-and-hasmany-handwritten.svg" alt="Handwritten: What is the difference between `belongsTo` and `hasMany`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-belongsto-and-hasmany-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-belongsto-and-hasmany-diagram.svg" alt="Diagram: What is the difference between `belongsTo` and `hasMany`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-belongsto-and-hasmany-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-belongsto-and-hasmany-sticky.svg" alt="Sticky Note: What is the difference between `belongsTo` and `hasMany`?" width="30%">
</a>


**Answer:** `belongsTo` is the inverse of `hasMany`. `hasMany` goes on the parent (one-to-many side). `belongsTo` goes on the child (the table with the foreign key).

```php
class Post extends Model
{
    // posts.user_id references users.id
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

class User extends Model
{
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }
}
```

### Q76: How do you define a many-to-many relationship in Eloquent?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-define-a-many-to-many-relationship-in-eloquent-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-define-a-many-to-many-relationship-in-eloquent-handwritten.svg" alt="Handwritten: How do you define a many-to-many relationship in Eloquent?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-define-a-many-to-many-relationship-in-eloquent-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-define-a-many-to-many-relationship-in-eloquent-diagram.svg" alt="Diagram: How do you define a many-to-many relationship in Eloquent?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-define-a-many-to-many-relationship-in-eloquent-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-define-a-many-to-many-relationship-in-eloquent-sticky.svg" alt="Sticky Note: How do you define a many-to-many relationship in Eloquent?" width="30%">
</a>


**Answer:** Use `belongsToMany` on both models with the pivot table name as the second argument.

```php
class Post extends Model
{
    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class, 'post_tag')
            ->withTimestamps();
    }
}

class Tag extends Model
{
    public function posts(): BelongsToMany
    {
        return $this->belongsToMany(Post::class, 'post_tag');
    }
}
```

### Q77: What is the purpose of `$guarded` and `$fillable`?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-purpose-of-guarded-and-fillable-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-purpose-of-guarded-and-fillable-handwritten.svg" alt="Handwritten: What is the purpose of `$guarded` and `$fillable`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-purpose-of-guarded-and-fillable-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-purpose-of-guarded-and-fillable-diagram.svg" alt="Diagram: What is the purpose of `$guarded` and `$fillable`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-purpose-of-guarded-and-fillable-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-purpose-of-guarded-and-fillable-sticky.svg" alt="Sticky Note: What is the purpose of `$guarded` and `$fillable`?" width="30%">
</a>


**Answer:** They control mass assignment protection. `$fillable` lists attributes that may be mass-assigned. `$guarded` lists attributes that may **not** be mass-assigned. Use one or the other, not both.

```php
class User extends Model
{
    protected $fillable = ['name', 'email']; // Only these can be mass-assigned

    // Or invert:
    protected $guarded = ['is_admin']; // Everything except is_admin can be mass-assigned
}
```

### Q78: How do you use `updateOrCreate` and `firstOrCreate`?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-updateorcreate-and-firstorcreate-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-updateorcreate-and-firstorcreate-handwritten.svg" alt="Handwritten: How do you use `updateOrCreate` and `firstOrCreate`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-updateorcreate-and-firstorcreate-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-updateorcreate-and-firstorcreate-diagram.svg" alt="Diagram: How do you use `updateOrCreate` and `firstOrCreate`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-updateorcreate-and-firstorcreate-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-updateorcreate-and-firstorcreate-sticky.svg" alt="Sticky Note: How do you use `updateOrCreate` and `firstOrCreate`?" width="30%">
</a>


**Answer:** `firstOrCreate` finds a record by attributes or creates it. `updateOrCreate` finds a record by attributes or creates it, then updates with the second array.

```php
// Find user by email or create if not found
$user = User::firstOrCreate(
    ['email' => 'john@example.com'],
    ['name' => 'John', 'password' => bcrypt('secret')]
);

// Find by email and update name, or create if not found
$user = User::updateOrCreate(
    ['email' => 'john@example.com'],
    ['name' => 'John Updated']
);
```

### Q79: What is the purpose of the `$appends` property on an Eloquent model?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-purpose-of-the-appends-property-on-an-eloquent-model-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-purpose-of-the-appends-property-on-an-eloquent-model-handwritten.svg" alt="Handwritten: What is the purpose of the `$appends` property on an Eloquent model?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-purpose-of-the-appends-property-on-an-eloquent-model-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-purpose-of-the-appends-property-on-an-eloquent-model-diagram.svg" alt="Diagram: What is the purpose of the `$appends` property on an Eloquent model?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-purpose-of-the-appends-property-on-an-eloquent-model-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-purpose-of-the-appends-property-on-an-eloquent-model-sticky.svg" alt="Sticky Note: What is the purpose of the `$appends` property on an Eloquent model?" width="30%">
</a>


**Answer:** `$appends` adds accessor-computed attributes to the model's JSON/array serialization.

```php
class User extends Model
{
    protected $appends = ['full_name'];

    public function getFullNameAttribute(): string
    {
        return "{$this->first_name} {$this->last_name}";
    }
}

// $user->toArray() now includes 'full_name'
```

### Q80: How do you use `load` to conditionally eager-load relationships?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-load-to-conditionally-eager-load-relationships-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-load-to-conditionally-eager-load-relationships-handwritten.svg" alt="Handwritten: How do you use `load` to conditionally eager-load relationships?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-load-to-conditionally-eager-load-relationships-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-load-to-conditionally-eager-load-relationships-diagram.svg" alt="Diagram: How do you use `load` to conditionally eager-load relationships?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-load-to-conditionally-eager-load-relationships-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-load-to-conditionally-eager-load-relationships-sticky.svg" alt="Sticky Note: How do you use `load` to conditionally eager-load relationships?" width="30%">
</a>


**Answer:** Call `load()` with a conditional or an array of relationships.

```php
$users = User::all();

if (request()->has('include_posts')) {
    $users->load('posts');
}

// Multiple relationships
$post->load(['comments.user', 'tags']);
```

---

## Advanced Topics

### Q81: What is MySQL partitioning and what types exist?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-mysql-partitioning-and-what-types-exist-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-mysql-partitioning-and-what-types-exist-handwritten.svg" alt="Handwritten: What is MySQL partitioning and what types exist?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-mysql-partitioning-and-what-types-exist-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-mysql-partitioning-and-what-types-exist-diagram.svg" alt="Diagram: What is MySQL partitioning and what types exist?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-mysql-partitioning-and-what-types-exist-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-mysql-partitioning-and-what-types-exist-sticky.svg" alt="Sticky Note: What is MySQL partitioning and what types exist?" width="30%">
</a>


**Answer:** Partitioning splits a table into physical sub-tables based on a partition key while presenting a single logical table. Types: `RANGE` (by value range), `LIST` (by value list), `HASH` (by modulus), `KEY` (MySQL's internal hash). Use it for time-series data, large tables where you prune entire partitions.

```sql
CREATE TABLE orders (
    id INT NOT NULL,
    order_date DATE NOT NULL,
    total DECIMAL(10,2)
)
PARTITION BY RANGE (YEAR(order_date)) (
    PARTITION p_old VALUES LESS THAN (2023),
    PARTITION p_2023 VALUES LESS THAN (2024),
    PARTITION p_2024 VALUES LESS THAN (2025),
    PARTITION p_future VALUES LESS THAN MAXVALUE
);
```

### Q82: What is the difference between vertical and horizontal sharding?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-vertical-and-horizontal-sharding-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-vertical-and-horizontal-sharding-handwritten.svg" alt="Handwritten: What is the difference between vertical and horizontal sharding?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-vertical-and-horizontal-sharding-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-vertical-and-horizontal-sharding-diagram.svg" alt="Diagram: What is the difference between vertical and horizontal sharding?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-vertical-and-horizontal-sharding-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-vertical-and-horizontal-sharding-sticky.svg" alt="Sticky Note: What is the difference between vertical and horizontal sharding?" width="30%">
</a>


**Answer:** **Vertical sharding** splits tables across different databases → user data on one server, orders on another. **Horizontal sharding** splits rows of the same table across multiple servers (e.g., users 1-1M on server A, 1M-2M on server B). Horizontal sharding is the common meaning of "sharding" and requires a shard key to route queries.

### Q83: How does MySQL replication work (source-replica)?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-does-mysql-replication-work-source-replica-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-does-mysql-replication-work-source-replica-handwritten.svg" alt="Handwritten: How does MySQL replication work (source-replica)?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-does-mysql-replication-work-source-replica-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-does-mysql-replication-work-source-replica-diagram.svg" alt="Diagram: How does MySQL replication work (source-replica)?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-does-mysql-replication-work-source-replica-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-does-mysql-replication-work-source-replica-sticky.svg" alt="Sticky Note: How does MySQL replication work (source-replica)?" width="30%">
</a>


**Answer:** The **source** writes changes to its binary log (`binlog`). **Replicas** connect as a client, read the binlog, and apply the same changes. Three formats: `STATEMENT` (replicate SQL), `ROW` (replicate row changes → default, safest), `MIXED`. Replication can be **asynchronous** (source doesn't wait), **semi-synchronous** (source waits for one replica), or **synchronous** (Group Replication/InnoDB Cluster).

### Q84: What are JSON columns in MySQL and how do you query them?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-json-columns-in-mysql-and-how-do-you-query-them-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-json-columns-in-mysql-and-how-do-you-query-them-handwritten.svg" alt="Handwritten: What are JSON columns in MySQL and how do you query them?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-json-columns-in-mysql-and-how-do-you-query-them-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-json-columns-in-mysql-and-how-do-you-query-them-diagram.svg" alt="Diagram: What are JSON columns in MySQL and how do you query them?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-json-columns-in-mysql-and-how-do-you-query-them-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-json-columns-in-mysql-and-how-do-you-query-them-sticky.svg" alt="Sticky Note: What are JSON columns in MySQL and how do you query them?" width="30%">
</a>


**Answer:** MySQL 5.7+ has a native `JSON` data type stored in binary format (fast to parse). Use arrow operators `->` and `->>` to extract values.

```sql
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    attributes JSON
);

INSERT INTO products VALUES (1, 'Laptop', '{"ram": "16GB", "storage": "512GB SSD"}');

-- Query JSON fields
SELECT name, attributes->>'$.ram' AS ram FROM products
WHERE attributes->>'$.ram' = '16GB';

-- Or using JSON_EXTRACT
SELECT name, JSON_EXTRACT(attributes, '$.storage') AS storage FROM products;
```

### Q85: How do you set up a full-text search index in MySQL and query it?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-set-up-a-full-text-search-index-in-mysql-and-query-it-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-set-up-a-full-text-search-index-in-mysql-and-query-it-handwritten.svg" alt="Handwritten: How do you set up a full-text search index in MySQL and query it?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-set-up-a-full-text-search-index-in-mysql-and-query-it-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-set-up-a-full-text-search-index-in-mysql-and-query-it-diagram.svg" alt="Diagram: How do you set up a full-text search index in MySQL and query it?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-set-up-a-full-text-search-index-in-mysql-and-query-it-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-set-up-a-full-text-search-index-in-mysql-and-query-it-sticky.svg" alt="Sticky Note: How do you set up a full-text search index in MySQL and query it?" width="30%">
</a>


**Answer:** Create a `FULLTEXT` index on `CHAR`, `VARCHAR`, or `TEXT` columns. Query with `MATCH ... AGAINST`.

```sql
CREATE TABLE articles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    body TEXT,
    FULLTEXT INDEX ft_search (title, body)
);

-- Natural Language mode
SELECT * FROM articles
WHERE MATCH(title, body) AGAINST('database optimization' IN NATURAL LANGUAGE MODE);

-- Boolean mode (supports +required -excluded *wildcard)
SELECT * FROM articles
WHERE MATCH(title, body) AGAINST('+database -nosql' IN BOOLEAN MODE);
```

### Q86: What is the query cache in MySQL and why was it removed in 8.0?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-query-cache-in-mysql-and-why-was-it-removed-in-8-0-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-query-cache-in-mysql-and-why-was-it-removed-in-8-0-handwritten.svg" alt="Handwritten: What is the query cache in MySQL and why was it removed in 8.0?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-query-cache-in-mysql-and-why-was-it-removed-in-8-0-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-query-cache-in-mysql-and-why-was-it-removed-in-8-0-diagram.svg" alt="Diagram: What is the query cache in MySQL and why was it removed in 8.0?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-query-cache-in-mysql-and-why-was-it-removed-in-8-0-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-query-cache-in-mysql-and-why-was-it-removed-in-8-0-sticky.svg" alt="Sticky Note: What is the query cache in MySQL and why was it removed in 8.0?" width="30%">
</a>


**Answer:** The query cache stored the exact text of `SELECT` results and returned cached results for identical subsequent queries. It was removed in MySQL 8.0 because it became a scalability bottleneck → every write to a table invalidated all cached queries referencing that table, requiring a global lock. Application-level caching (Redis, Memcached) is superior.

### Q87: What is the doublewrite buffer in InnoDB?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-doublewrite-buffer-in-innodb-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-doublewrite-buffer-in-innodb-handwritten.svg" alt="Handwritten: What is the doublewrite buffer in InnoDB?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-doublewrite-buffer-in-innodb-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-doublewrite-buffer-in-innodb-diagram.svg" alt="Diagram: What is the doublewrite buffer in InnoDB?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-doublewrite-buffer-in-innodb-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-doublewrite-buffer-in-innodb-sticky.svg" alt="Sticky Note: What is the doublewrite buffer in InnoDB?" width="30%">
</a>


**Answer:** InnoDB writes pages twice: first to the **doublewrite buffer** (sequential, 2MB on disk), then to the actual data file location. This prevents **partial page writes** → if MySQL crashes while writing a 16KB page, the doublewrite buffer provides a clean copy for recovery. The alternative would be data corruption from incomplete page writes.

### Q88: What are generated columns (virtual and stored) in MySQL?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-generated-columns-virtual-and-stored-in-mysql-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-generated-columns-virtual-and-stored-in-mysql-handwritten.svg" alt="Handwritten: What are generated columns (virtual and stored) in MySQL?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-generated-columns-virtual-and-stored-in-mysql-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-generated-columns-virtual-and-stored-in-mysql-diagram.svg" alt="Diagram: What are generated columns (virtual and stored) in MySQL?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-generated-columns-virtual-and-stored-in-mysql-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-are-generated-columns-virtual-and-stored-in-mysql-sticky.svg" alt="Sticky Note: What are generated columns (virtual and stored) in MySQL?" width="30%">
</a>


**Answer:** Generated columns compute values from other columns. **Virtual** columns are computed on read (no storage). **Stored** columns are computed on write and stored on disk.

```sql
CREATE TABLE invoices (
    subtotal DECIMAL(10,2),
    tax_rate DECIMAL(4,2),
    total DECIMAL(10,2) GENERATED ALWAYS AS (subtotal * (1 + tax_rate)) STORED
);
```

### Q89: How do you use common table expressions to simplify complex queries?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-common-table-expressions-to-simplify-complex-queries-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-common-table-expressions-to-simplify-complex-queries-handwritten.svg" alt="Handwritten: How do you use common table expressions to simplify complex queries?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-common-table-expressions-to-simplify-complex-queries-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-common-table-expressions-to-simplify-complex-queries-diagram.svg" alt="Diagram: How do you use common table expressions to simplify complex queries?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-common-table-expressions-to-simplify-complex-queries-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-use-common-table-expressions-to-simplify-complex-queries-sticky.svg" alt="Sticky Note: How do you use common table expressions to simplify complex queries?" width="30%">
</a>


**Answer:** A CTE (`WITH` clause) lets you name a subquery and reference it multiple times, keeping the query readable.

```sql
WITH dept_stats AS (
    SELECT dept_id, AVG(salary) AS avg_sal, COUNT(*) AS emp_count
    FROM employees
    GROUP BY dept_id
)
SELECT d.name, ds.avg_sal, ds.emp_count
FROM departments d
JOIN dept_stats ds ON ds.dept_id = d.id
WHERE ds.avg_sal > 60000;
```

### Q90: What is the `information_schema` database used for?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-information-schema-database-used-for-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-information-schema-database-used-for-handwritten.svg" alt="Handwritten: What is the `information_schema` database used for?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-information-schema-database-used-for-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-information-schema-database-used-for-diagram.svg" alt="Diagram: What is the `information_schema` database used for?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-information-schema-database-used-for-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-information-schema-database-used-for-sticky.svg" alt="Sticky Note: What is the `information_schema` database used for?" width="30%">
</a>


**Answer:** `information_schema` provides metadata about all tables, columns, indexes, constraints, and routines. Use it for introspective queries.

```sql
-- Find all tables in a database
SELECT table_name, table_rows, engine
FROM information_schema.tables
WHERE table_schema = 'my_database';

-- Find columns with no indexes
SELECT t.table_name, c.column_name
FROM information_schema.tables t
JOIN information_schema.columns c ON c.table_schema = t.table_schema AND c.table_name = t.table_name
LEFT JOIN information_schema.statistics s ON s.table_schema = t.table_schema
    AND s.table_name = t.table_name
    AND s.column_name = c.column_name
WHERE t.table_schema = 'my_database' AND t.table_type = 'BASE TABLE'
    AND s.index_name IS NULL;
```

### Q91: What is the difference between `MyISAM` and `InnoDB`?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-myisam-and-innodb-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-myisam-and-innodb-handwritten.svg" alt="Handwritten: What is the difference between `MyISAM` and `InnoDB`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-myisam-and-innodb-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-myisam-and-innodb-diagram.svg" alt="Diagram: What is the difference between `MyISAM` and `InnoDB`?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-myisam-and-innodb-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-difference-between-myisam-and-innodb-sticky.svg" alt="Sticky Note: What is the difference between `MyISAM` and `InnoDB`?" width="30%">
</a>


**Answer:** InnoDB (default since MySQL 5.5) supports transactions, foreign keys, row-level locking, MVCC, crash recovery via redo logs, and the buffer pool. MyISAM supports only table-level locking, no transactions, no foreign keys, and uses a simpler storage format with faster full-table scans. MyISAM was removed in MySQL 8.0 and is only available in older versions.

### Q92: How do you implement soft deletes in the database layer?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-implement-soft-deletes-in-the-database-layer-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-implement-soft-deletes-in-the-database-layer-handwritten.svg" alt="Handwritten: How do you implement soft deletes in the database layer?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-implement-soft-deletes-in-the-database-layer-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-implement-soft-deletes-in-the-database-layer-diagram.svg" alt="Diagram: How do you implement soft deletes in the database layer?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-implement-soft-deletes-in-the-database-layer-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/how-do-you-implement-soft-deletes-in-the-database-layer-sticky.svg" alt="Sticky Note: How do you implement soft deletes in the database layer?" width="30%">
</a>


**Answer:** Add a `deleted_at TIMESTAMP NULL` column. All queries must filter `WHERE deleted_at IS NULL`. Views can encapsulate this logic. Laravel's `SoftDeletes` trait handles this automatically.

```sql
-- Add soft-delete column
ALTER TABLE users ADD COLUMN deleted_at TIMESTAMP NULL;

-- Create a view for active users
CREATE VIEW active_users AS
SELECT * FROM users WHERE deleted_at IS NULL;
```

### Q93: What is the adaptive hash index in InnoDB?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-adaptive-hash-index-in-innodb-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-adaptive-hash-index-in-innodb-handwritten.svg" alt="Handwritten: What is the adaptive hash index in InnoDB?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-adaptive-hash-index-in-innodb-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-adaptive-hash-index-in-innodb-diagram.svg" alt="Diagram: What is the adaptive hash index in InnoDB?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-adaptive-hash-index-in-innodb-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-the-adaptive-hash-index-in-innodb-sticky.svg" alt="Sticky Note: What is the adaptive hash index in InnoDB?" width="30%">
</a>


**Answer:** The adaptive hash index is an in-memory hash index that InnoDB builds automatically on frequently accessed index pages. It speeds up lookups by reducing B-tree traversal. It's transparent → the DBA cannot control it directly (`innodb_adaptive_hash_index` toggle) → and uses part of the buffer pool.

### Q94: What is a CTE and how is it different from a subquery?

<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-cte-and-how-is-it-different-from-a-subquery-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-cte-and-how-is-it-different-from-a-subquery-handwritten.svg" alt="Handwritten: What is a CTE and how is it different from a subquery?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-cte-and-how-is-it-different-from-a-subquery-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-cte-and-how-is-it-different-from-a-subquery-diagram.svg" alt="Diagram: What is a CTE and how is it different from a subquery?" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-cte-and-how-is-it-different-from-a-subquery-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/50-interview-mysql/what-is-a-cte-and-how-is-it-different-from-a-subquery-sticky.svg" alt="Sticky Note: What is a CTE and how is it different from a subquery?" width="30%">
</a>


**Answer:** A CTE (`WITH ... AS`) can be referenced multiple times in the same query, supports recursion, and is often more readable. A subquery is defined inline and typically referenced only once. MySQL materializes CTEs differently based on the version (MySQL 8.0 materializes them by default; 8.0.14+ merges them in some cases with `optimizer_switch` settings).

---

*End of chapter. Keep this file open as a reference during interview prep and add your own questions as you encounter them.*
---

## Concept Comparison
> **One-Sentence Takeaway:** Compare key database concepts for interview preparation.

| Concept | Purpose | Key Feature |
|---------|---------|-------------|
| SQL Queries | Retrieve and manipulate data | SELECT, JOIN, WHERE, GROUP BY, HAVING |
| Indexing | Speed up data retrieval | B-tree, hash, full-text, spatial indexes |
| Normalization | Reduce data redundancy | 1NF, 2NF, 3NF, BCNF |
| Transactions | Group operations atomically | ACID: Atomicity, Consistency, Isolation, Durability |
| Eloquent ORM | Laravel's database abstraction | Active Record with fluent query builder |

---

## Quick Reference
> **One-Sentence Takeaway:** Quick reference for MySQL interview topics.

| Topic | Key Point |
|-------|-----------|
| JOIN Types | INNER, LEFT, RIGHT, CROSS, SELF |
| Index Types | B-Tree, Hash, Full-text, Spatial, Composite |
| Normalization Forms | 1NF (atomic), 2NF (partial dependency), 3NF (transitive dependency) |
| Isolation Levels | READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE |
| EXPLAIN | Analyze query execution plan |

---

## Cross-Application Matrix

| Concept | Application Context | Trade-Off |
|---------|--------------------|-----------|
| Indexing | Query performance | Read speed vs write overhead |
| Normalization | Data integrity | Storage efficiency vs query complexity |
| Denormalization | Read performance | Query speed vs data consistency |
| Transactions | Data integrity | Consistency vs throughput |
| Replication | High availability | Data freshness vs read scaling |

---

## Chapter Quiz
> **One-Sentence Takeaway:** Test your MySQL interview knowledge.

**Q1:** Which JOIN returns only matching rows from both tables?
- A) LEFT JOIN
- B) INNER JOIN
- C) RIGHT JOIN
- D) CROSS JOIN

<details><summary>Answer&lt;/summary&gt;B) INNER JOIN&lt;/details&gt;

**Q2:** What is the third normal form (3NF)?
- A) All columns are atomic
- B) No transitive dependency on non-key attributes
- C) All columns depend on the full primary key
- D) All tables have a primary key

<details><summary>Answer&lt;/summary&gt;B) No transitive dependency on non-key attributes&lt;/details&gt;

**Q3:** Which isolation level prevents dirty reads?
- A) READ UNCOMMITTED
- B) READ COMMITTED
- C) REPEATABLE READ
- D) SERIALIZABLE

<details><summary>Answer&lt;/summary&gt;B) READ COMMITTED&lt;/details&gt;

**Q4:** What does EXPLAIN do in MySQL?
- A) Runs the query
- B) Shows the query execution plan
- C) Explains the table schema
- D) Optimizes indexes

<details><summary>Answer&lt;/summary&gt;B) Shows the query execution plan&lt;/details&gt;
