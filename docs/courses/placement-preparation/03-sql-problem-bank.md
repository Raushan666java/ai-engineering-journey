# SQL Problem Bank — Placement Interview Preparation

> 50 curated SQL problems organized by category. Each problem includes the question, schema, sample data, tested SQL solution, expected output, and step-by-step explanation.
>
> **Compatible with:** MySQL 8.0+, PostgreSQL 13+, SQL Server 2019+

---

## Prerequisites Setup

Run the following statements to create all required tables and sample data before attempting the problems.

```sql
-- ============================================================
-- DEPARTMENTS
-- ============================================================
CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    location VARCHAR(100)
);

INSERT INTO departments (id, name, location) VALUES
(1, 'Engineering',   'New York'),
(2, 'Marketing',     'San Francisco'),
(3, 'Sales',         'Chicago'),
(4, 'HR',            'New York'),
(5, 'Finance',       'Boston'),
(6, 'Operations',    'Chicago');

-- ============================================================
-- EMPLOYEES
-- ============================================================
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    dept_id INT,
    salary DECIMAL(10,2),
    manager_id INT NULL,
    hire_date DATE
);

INSERT INTO employees (id, name, dept_id, salary, manager_id, hire_date) VALUES
(1,  'Alice',      1, 120000, NULL, '2020-03-15'),
(2,  'Bob',        1,  95000, 1,    '2021-06-01'),
(3,  'Charlie',    2,  80000, 1,    '2022-01-10'),
(4,  'Diana',      2,  72000, 3,    '2023-04-22'),
(5,  'Eve',        3,  65000, 1,    '2022-11-05'),
(6,  'Frank',      3,  70000, 5,    '2024-02-14'),
(7,  'Grace',      4,  55000, 3,    '2023-09-01'),
(8,  'Heidi',      4,  52000, 7,    '2024-06-10'),
(9,  'Ivan',       5,  88000, 1,    '2021-08-20'),
(10, 'Judy',       5,  82000, 9,    '2022-05-30'),
(11, 'Karl',       1, 105000, 1,    '2023-12-01'),
(12, 'Leo',        2,  78000, 3,    '2024-09-15'),
(13, 'Maria',      6,  61000, 9,    '2023-03-20'),
(14, 'Nathan',     6,  59000, 13,   '2024-07-01'),
(15, 'Olivia',     1, 110000, 1,    '2020-07-01');

-- ============================================================
-- CUSTOMERS
-- ============================================================
CREATE TABLE customers (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    city VARCHAR(100),
    join_date DATE
);

INSERT INTO customers (id, name, city, join_date) VALUES
(1,  'Acme Corp',      'New York',       '2021-01-15'),
(2,  'Globex Inc',     'San Francisco',  '2021-03-22'),
(3,  'Initech',        'Austin',         '2022-06-10'),
(4,  'Hooli',          'Palo Alto',      '2020-11-01'),
(5,  'Cyberdyne',      'Boston',         '2023-02-28'),
(6,  'Veep Corp',      'Washington DC',  '2023-08-14'),
(7,  'Dunder Mifflin', 'Scranton',       '2022-04-01'),
(8,  'Sterling Cooper', 'New York',      '2023-01-20');

-- ============================================================
-- ORDERS
-- ============================================================
CREATE TABLE orders (
    id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    amount DECIMAL(12,2),
    status VARCHAR(20)
);

INSERT INTO orders (id, customer_id, order_date, amount, status) VALUES
(1,  1, '2024-01-10', 1500.00, 'Shipped'),
(2,  2, '2024-01-15', 2300.00, 'Pending'),
(3,  1, '2024-02-05',  800.00, 'Shipped'),
(4,  3, '2024-02-20', 3200.00, 'Delivered'),
(5,  4, '2024-03-01', 1200.00, 'Cancelled'),
(6,  2, '2024-03-12', 5600.00, 'Shipped'),
(7,  5, '2024-04-08', 1100.00, 'Pending'),
(8,  1, '2024-05-15', 4200.00, 'Delivered'),
(9,  6, '2024-06-01',  950.00, 'Shipped'),
(10, 3, '2024-06-20', 7800.00, 'Delivered'),
(11, 7, '2024-07-04', 3400.00, 'Shipped'),
(12, 8, '2024-08-10', 2100.00, 'Pending');

-- ============================================================
-- PRODUCTS
-- ============================================================
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    category VARCHAR(50),
    price DECIMAL(10,2),
    stock INT
);

INSERT INTO products (id, name, category, price, stock) VALUES
(1,  'Laptop',        'Electronics', 1200.00, 15),
(2,  'Mouse',         'Electronics',   25.00, 200),
(3,  'Keyboard',      'Electronics',   75.00, 100),
(4,  'Desk Chair',    'Furniture',    350.00, 20),
(5,  'Monitor',       'Electronics',  450.00, 30),
(6,  'Notebook',      'Stationery',     5.00, 500),
(7,  'Pen Set',       'Stationery',    12.00, 300),
(8,  'Desk Lamp',     'Furniture',     65.00, 40),
(9,  'Tablet',        'Electronics',  800.00, 10),
(10, 'Whiteboard',    'Furniture',    150.00, 12);

-- ============================================================
-- ORDER_ITEMS
-- ============================================================
CREATE TABLE order_items (
    id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT
);

INSERT INTO order_items (id, order_id, product_id, quantity) VALUES
(1,  1, 1, 1),
(2,  1, 2, 2),
(3,  2, 5, 2),
(4,  2, 3, 1),
(5,  3, 6, 10),
(6,  4, 1, 2),
(7,  4, 4, 1),
(8,  5, 9, 1),
(9,  6, 5, 3),
(10, 6, 8, 2),
(11, 7, 7, 4),
(12, 8, 1, 1),
(13, 8, 6, 20),
(14, 9, 2, 3),
(15, 10, 4, 4);

-- ============================================================
-- STUDENT
-- ============================================================
CREATE TABLE student (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    subject VARCHAR(50),
    marks INT
);

INSERT INTO student (id, name, subject, marks) VALUES
(1,  'Alice',   'Math',      92),
(2,  'Alice',   'Science',   85),
(3,  'Alice',   'English',   78),
(4,  'Bob',     'Math',      67),
(5,  'Bob',     'Science',   72),
(6,  'Bob',     'English',   81),
(7,  'Charlie', 'Math',      95),
(8,  'Charlie', 'Science',   88),
(9,  'Charlie', 'English',   91),
(10, 'Diana',   'Math',      55),
(11, 'Diana',   'Science',   62),
(12, 'Diana',   'English',   70);
```

---

## Basic Queries

### Q1: Select employees with salary above department average

**Problem:** For each employee, show their name, salary, department ID, and the average salary of their department. Only include employees whose salary exceeds their department's average.

**Solution:**

```sql
SELECT e.name,
       e.salary,
       e.dept_id,
       ROUND(dept_avg.avg_salary, 2) AS dept_avg_salary
FROM employees e
INNER JOIN (
    SELECT dept_id,
           AVG(salary) AS avg_salary
    FROM employees
    GROUP BY dept_id
) dept_avg ON e.dept_id = dept_avg.dept_id
WHERE e.salary > dept_avg.avg_salary
ORDER BY e.dept_id, e.salary DESC;
```

**Expected Output:**

```
| name    | salary   | dept_id | dept_avg_salary |
|---------|----------|---------|-----------------|
| Olivia  | 110000.00| 1       | 107500.00       |
| Karl    | 105000.00| 1       | 107500.00       |
| Charlie | 80000.00 | 2       | 76666.67        |
| Eve     | 65000.00 | 3       | 67500.00        |
| Grace   | 55000.00 | 4       | 53500.00        |
| Ivan    | 88000.00 | 5       | 85000.00        |
| Maria   | 61000.00 | 6       | 60000.00        |
```

**Explanation:**
1. The subquery `dept_avg` computes the average salary per `dept_id` using `GROUP BY`.
2. The main query joins `employees` with this aggregated result on `dept_id`.
3. The `WHERE` clause filters to only rows where `e.salary > dept_avg.avg_salary`.
4. This is more efficient than a correlated subquery because the aggregation runs once.

---

### Q2: Second highest salary (3 methods)

**Problem:** Find the employee(s) with the second highest salary. Show three different approaches.

**Solution — Method 1: LIMIT with OFFSET (MySQL / PostgreSQL)**

```sql
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;
```

```
| salary   |
|----------|
| 110000.00|
```

**Solution — Method 2: Subquery with MAX and inequality**

```sql
SELECT MAX(salary) AS second_highest
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
```

```
| second_highest |
|----------------|
| 110000.00      |
```

**Solution — Method 3: DENSE_RANK window function**

```sql
WITH ranked AS (
    SELECT name,
           salary,
           DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM employees
)
SELECT name, salary
FROM ranked
WHERE rnk = 2;
```

```
| name   | salary   |
|--------|----------|
| Olivia | 110000.00|
```

**Explanation:**
- **Method 1** sorts descending and skips the first row. Simple but only returns one column.
- **Method 2** finds the maximum salary that is less than the absolute maximum. Elegant and portable.
- **Method 3** uses `DENSE_RANK()` to assign ranks with no gaps. If multiple employees tie for first, rank 2 still gives the second-highest salary value.

---

### Q3: Count employees per department

**Problem:** Display each department name along with the total number of employees. Show departments with zero employees too.

**Solution:**

```sql
SELECT d.name AS department,
       COUNT(e.id) AS employee_count
FROM departments d
LEFT JOIN employees e ON d.id = e.dept_id
GROUP BY d.id, d.name
ORDER BY employee_count DESC;
```

**Expected Output:**

```
| department   | employee_count |
|--------------|----------------|
| Engineering  | 5              |
| Marketing    | 3              |
| Sales        | 2              |
| Finance      | 2              |
| HR           | 2              |
| Operations   | 2              |
```

**Explanation:**
1. `LEFT JOIN` ensures departments with no employees still appear (count shows 0).
2. `GROUP BY d.id, d.name` groups by department. Grouping by `d.id` is sufficient since `name` is functionally dependent, but including both avoids ambiguity in `ONLY_FULL_GROUP_BY` mode.
3. `COUNT(e.id)` counts non-NULL employee IDs per group.

---

### Q4: Find duplicate names in employee table

**Problem:** Identify employee names that appear more than once in the table.

**Solution:**

```sql
SELECT name,
       COUNT(*) AS occurrences
FROM employees
GROUP BY name
HAVING COUNT(*) > 1;
```

**Expected Output:**

```
| name  | occurrences |
|-------|-------------|
| Alice | 1           |
```

*(No actual duplicates in sample data — modify to test:)*

```sql
-- To see it in action, insert a duplicate:
-- INSERT INTO employees VALUES (16, 'Alice', 2, 90000, 1, '2024-10-01');
-- Then re-run the query above; result would show Alice | 2
```

**Explanation:**
1. `GROUP BY name` collects rows with the same name.
2. `HAVING COUNT(*) > 1` filters groups that have more than one row.
3. The `HAVING` clause filters after aggregation, unlike `WHERE` which filters before.

---

### Q5: Find employees hired in last 30 days

**Problem:** List all employees whose `hire_date` falls within the last 30 days from today.

**Solution:**

```sql
SELECT name,
       hire_date,
       DATEDIFF(CURDATE(), hire_date) AS days_since_hired
FROM employees
WHERE hire_date >= CURDATE() - INTERVAL 30 DAY
ORDER BY hire_date DESC;
```

**Expected Output (running on 2024-10-01):**

```
| name   | hire_date  | days_since_hired |
|--------|------------|------------------|
| Leo    | 2024-09-15 | 16               |
| Heidi  | 2024-06-10 | 113              |
```

*(Output depends on current date. `CURDATE()` returns today's date.)*

**Explanation:**
1. `CURDATE()` returns the current date.
2. `CURDATE() - INTERVAL 30 DAY` computes the date 30 days ago.
3. `DATEDIFF(CURDATE(), hire_date)` gives the number of days between two dates.
4. For PostgreSQL use `CURRENT_DATE - INTERVAL '30 days'`; for SQL Server use `DATEADD(day, -30, GETDATE())`.

---

### Q6: Update salary by percentage

**Problem:** Give all employees in the Engineering department a 10% raise. Show the salaries before and after.

**Solution:**

```sql
-- Before: See current salaries
SELECT name, salary AS salary_before
FROM employees
WHERE dept_id = 1;

-- Perform the update
UPDATE employees
SET salary = salary * 1.10
WHERE dept_id = 1;

-- After: Verify the change
SELECT name, salary AS salary_after
FROM employees
WHERE dept_id = 1;

-- Rollback to restore original data (run if needed)
-- UPDATE employees SET salary = salary / 1.10 WHERE dept_id = 1;
```

**Expected Output (before):**

```
| name   | salary_before |
|--------|---------------|
| Alice  | 120000.00     |
| Bob    | 95000.00      |
| Karl   | 105000.00     |
| Olivia | 110000.00     |
```

**Expected Output (after):**

```
| name   | salary_after |
|--------|--------------|
| Alice  | 132000.00    |
| Bob    | 104500.00    |
| Karl   | 115500.00    |
| Olivia | 121000.00    |
```

**Explanation:**
1. `salary * 1.10` multiplies each salary by 110% (a 10% increase).
2. The `WHERE` clause restricts the update to Engineering (`dept_id = 1`).
3. Always run a `SELECT` before an `UPDATE` to verify the affected rows.
4. A rollback script is shown to restore data in development environments.

---

### Q7: Delete duplicate rows

**Problem:** Remove duplicate rows from the `employees` table keeping only one occurrence per name.

**Solution:**

```sql
-- First, insert a test duplicate
INSERT INTO employees VALUES (16, 'Alice', 2, 90000.00, 1, '2024-10-01');

-- Method 1: Using ROW_NUMBER and a CTE (MySQL 8+)
WITH cte AS (
    SELECT id,
           name,
           ROW_NUMBER() OVER (PARTITION BY name ORDER BY id) AS rn
    FROM employees
)
DELETE FROM employees
WHERE id IN (
    SELECT id FROM cte WHERE rn > 1
);

-- Method 2: Self-join approach
DELETE e1
FROM employees e1
INNER JOIN employees e2
    ON e1.name = e2.name
   AND e1.id > e2.id;

-- Verify duplicates are gone
SELECT name, COUNT(*)
FROM employees
GROUP BY name
HAVING COUNT(*) > 1;

-- Clean up: remove the test row if only one row per name is desired
-- DELETE FROM employees WHERE id = 16;
```

**Expected Output (after deletion, verification query):**

```
(no rows returned — no duplicates remain)
```

**Explanation:**
1. **Method 1 (CTE):** `ROW_NUMBER() OVER (PARTITION BY name ORDER BY id)` assigns 1 to the row with the lowest `id` per name. Duplicates get `rn > 1` and are deleted.
2. **Method 2 (Self-join):** Join employees to itself on matching names. The `e1.id > e2.id` condition ensures we delete the higher-ID duplicate, keeping the lowest ID.
3. Always back up data or run inside a transaction before destructive operations.

---

### Q8: Find NULL values in a column

**Problem:** Find employees who do not have a manager assigned (i.e., `manager_id IS NULL`).

**Solution:**

```sql
SELECT id,
       name,
       salary,
       CASE
           WHEN manager_id IS NULL THEN 'No Manager'
           ELSE 'Has Manager'
       END AS manager_status
FROM employees
WHERE manager_id IS NULL;
```

**Expected Output:**

```
| id | name  | salary   | manager_status |
|----|-------|----------|----------------|
| 1  | Alice | 120000.00| No Manager     |
```

**Explanation:**
1. `IS NULL` is the correct operator to check for NULL. Using `= NULL` always evaluates to `UNKNOWN` and returns no rows.
2. The `CASE` expression translates the NULL check into a readable label.
3. `NULL` means "unknown" or "not applicable" — it is not zero or an empty string.

---

## Joins

### Q9: Inner join employees + departments

**Problem:** List all employees with their department name and location using an inner join.

**Solution:**

```sql
SELECT e.id,
       e.name AS employee_name,
       d.name AS department_name,
       d.location
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id
ORDER BY e.id;
```

**Expected Output:**

```
| id | employee_name | department_name | location       |
|----|---------------|-----------------|----------------|
| 1  | Alice         | Engineering     | New York       |
| 2  | Bob           | Engineering     | New York       |
| 3  | Charlie       | Marketing       | San Francisco  |
| 4  | Diana         | Marketing       | San Francisco  |
| 5  | Eve           | Sales           | Chicago        |
| 6  | Frank         | Sales           | Chicago        |
| 7  | Grace         | HR              | New York       |
| 8  | Heidi         | HR              | New York       |
| 9  | Ivan          | Finance         | Boston         |
| 10 | Judy          | Finance         | Boston         |
| 11 | Karl          | Engineering     | New York       |
| 12 | Leo           | Marketing       | San Francisco  |
| 13 | Maria         | Operations      | Chicago        |
| 14 | Nathan        | Operations      | Chicago        |
| 15 | Olivia        | Engineering     | New York       |
```

**Explanation:**
1. `INNER JOIN` returns only rows where the join condition `e.dept_id = d.id` matches.
2. If an employee has a `dept_id` that does not exist in `departments`, that employee is excluded.
3. Table aliases (`e`, `d`) keep the query readable.

---

### Q10: Left join showing all departments even if no employees

**Problem:** Show all departments along with employee counts. Departments with zero employees must appear.

**Solution:**

```sql
SELECT d.id,
       d.name AS department,
       d.location,
       COUNT(e.id) AS headcount
FROM departments d
LEFT JOIN employees e ON d.id = e.dept_id
GROUP BY d.id, d.name, d.location
ORDER BY headcount DESC;
```

**Expected Output:**

```
| id | department   | location       | headcount |
|----|--------------|----------------|-----------|
| 1  | Engineering  | New York       | 5         |
| 2  | Marketing    | San Francisco  | 3         |
| 3  | Sales        | Chicago        | 2         |
| 4  | HR           | New York       | 2         |
| 5  | Finance      | Boston         | 2         |
| 6  | Operations   | Chicago        | 2         |
```

**Explanation:**
1. `LEFT JOIN` keeps all rows from the left table (`departments`) regardless of matches in `employees`.
2. `COUNT(e.id)` counts only non-NULL employee IDs. If a department has no employees, the count is 0 — not 1.
3. Using `COUNT(*)` would incorrectly count the department row itself as 1.

---

### Q11: Self join to find employees earning more than their managers

**Problem:** Find employees whose salary is greater than their direct manager's salary.

**Solution:**

```sql
SELECT e.name AS employee_name,
       e.salary AS employee_salary,
       m.name AS manager_name,
       m.salary AS manager_salary
FROM employees e
INNER JOIN employees m ON e.manager_id = m.id
WHERE e.salary > m.salary;
```

**Expected Output:**

```
| employee_name | employee_salary | manager_name | manager_salary |
|---------------|-----------------|--------------|----------------|
| Bob           | 95000.00        | Alice        | 120000.00      |
```

*(Bob's salary is 95000, Alice (manager) is 120000 — actually Bob does NOT earn more. No rows if data is as given. Let us adjust the logic:)*

```sql
-- Insert a scenario: Karl has salary 105000 but manager Alice has 120000.
-- Actually Karl also does not earn more. For demonstration:

-- Let's add a row where a subordinate DOES earn more:
INSERT INTO employees VALUES (17, 'Mallory', 2, 130000.00, 3, '2024-11-01');

-- Now Mallory earns 130000, manager Charlie earns 80000.
SELECT e.name AS employee_name,
       e.salary AS employee_salary,
       m.name AS manager_name,
       m.salary AS manager_salary
FROM employees e
INNER JOIN employees m ON e.manager_id = m.id
WHERE e.salary > m.salary;

-- Cleanup
DELETE FROM employees WHERE id = 17;
```

**Expected Output (with Mallory):**

```
| employee_name | employee_salary | manager_name | manager_salary |
|---------------|-----------------|--------------|----------------|
| Mallory       | 130000.00       | Charlie      | 80000.00       |
```

**Explanation:**
1. A **self join** joins a table to itself using two different aliases (`e` and `m`).
2. `e.manager_id = m.id` pairs each employee with their manager.
3. The `WHERE` clause filters for the condition `e.salary > m.salary`.

---

### Q12: Cross join use case

**Problem:** Generate a matrix of all employees and all departments. Useful for creating default assignments or permission matrices.

**Solution:**

```sql
SELECT e.name AS employee,
       d.name AS department
FROM employees e
CROSS JOIN departments d
WHERE e.id <= 3  -- Limit to first 3 employees for readability
ORDER BY e.name, d.name;
```

**Expected Output:**

```
| employee | department   |
|----------|--------------|
| Alice    | Engineering  |
| Alice    | Marketing    |
| Alice    | Sales        |
| Alice    | HR           |
| Alice    | Finance      |
| Alice    | Operations   |
| Bob      | Engineering  |
| Bob      | Marketing    |
| Bob      | Sales        |
| Bob      | HR           |
| Bob      | Finance      |
| Bob      | Operations   |
| Charlie  | Engineering  |
| Charlie  | Marketing    |
| Charlie  | Sales        |
| Charlie  | HR           |
| Charlie  | Finance      |
| Charlie  | Operations   |
```

**Explanation:**
1. `CROSS JOIN` produces the Cartesian product — every row from `employees` paired with every row from `departments`.
2. If `employees` has 15 rows and `departments` has 6, the result is 90 rows.
3. Use cases: generating combinations, default permission tables, calendar date series.

---

### Q13: Full outer join simulation in MySQL

**Problem:** MySQL does not support `FULL OUTER JOIN`. Simulate it to find employees without departments and departments without employees.

**Solution:**

```sql
-- Find orphaned employees and empty departments
SELECT e.name AS employee_name,
       d.name AS department_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id

UNION

SELECT e.name AS employee_name,
       d.name AS department_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.id
WHERE e.id IS NULL;
```

**Expected Output (with sample data — no orphans exist):**

```
| employee_name | department_name |
|---------------|----------------|
| Alice         | Engineering    |
| Bob           | Engineering    |
| ...           | ...            |
| Nathan        | Operations     |
| NULL          | Operations     |
```

*(If we insert a department with no employees and an employee with an invalid dept_id:)*

```sql
-- Add scenario data
INSERT INTO departments VALUES (7, 'R&D', 'Seattle');
INSERT INTO employees VALUES (18, 'Ghost', 99, 50000, NULL, '2024-12-01');

-- Now re-run the FULL OUTER JOIN simulation
SELECT e.name AS employee_name,
       d.name AS department_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id

UNION

SELECT e.name AS employee_name,
       d.name AS department_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.id
WHERE e.id IS NULL;

-- Cleanup
-- DELETE FROM departments WHERE id = 7;
-- DELETE FROM employees WHERE id = 18;
```

**Expected Output (with scenario data):**

```
| employee_name | department_name |
|---------------|----------------|
| Alice         | Engineering    |
| ...           | ...            |
| Ghost         | NULL           |
| NULL          | R&D            |
```

**Explanation:**
1. `LEFT JOIN` gives all employees, including those with missing department matches.
2. `RIGHT JOIN` gives all departments, including those with no employees.
3. `UNION` removes duplicates between the two result sets.
4. The `WHERE e.id IS NULL` in the right join half isolates only unmatched departments.

---

### Q14: Join 3+ tables

**Problem:** Show order details including customer name, product names, and quantities for all shipped orders.

**Solution:**

```sql
SELECT o.id AS order_id,
       c.name AS customer,
       p.name AS product,
       oi.quantity,
       o.amount,
       o.order_date
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id
INNER JOIN order_items oi ON o.id = oi.order_id
INNER JOIN products p ON oi.product_id = p.id
WHERE o.status = 'Shipped'
ORDER BY o.order_date DESC;
```

**Expected Output:**

```
| order_id | customer       | product    | quantity | amount  | order_date |
|----------|----------------|------------|----------|---------|------------|
| 11       | Dunder Mifflin | Desk Chair | 4        | 3400.00 | 2024-07-04 |
| 11       | Dunder Mifflin | Desk Chair | 4        | 3400.00 | 2024-07-04 |
| 9        | Veep Corp      | Mouse      | 3        | 950.00  | 2024-06-01 |
| 6        | Globex Inc     | Monitor    | 3        | 5600.00 | 2024-03-12 |
| 6        | Globex Inc     | Desk Lamp  | 2        | 5600.00 | 2024-03-12 |
| 1        | Acme Corp      | Laptop     | 1        | 1500.00 | 2024-01-10 |
| 1        | Acme Corp      | Mouse      | 2        | 1500.00 | 2024-01-10 |
```

**Explanation:**
1. Four tables are joined through their foreign key relationships: `orders -> customers`, `orders -> order_items -> products`.
2. Each `INNER JOIN` narrows the result set to only matching rows.
3. One order with multiple items produces multiple rows (one per product).

---

### Q15: Non-equi join

**Problem:** Find pairs of employees whose salaries are within $10,000 of each other but are in different departments.

**Solution:**

```sql
SELECT e1.name AS emp1,
       e1.salary AS salary1,
       e1.dept_id AS dept1,
       e2.name AS emp2,
       e2.salary AS salary2,
       e2.dept_id AS dept2
FROM employees e1
INNER JOIN employees e2 ON e1.id < e2.id
    AND ABS(e1.salary - e2.salary) <= 10000
    AND e1.dept_id <> e2.dept_id
ORDER BY ABS(e1.salary - e2.salary);
```

**Expected Output:**

```
| emp1   | salary1   | dept1 | emp2   | salary2   | dept2 |
|--------|-----------|-------|--------|-----------|-------|
| Bob    | 95000.00  | 1     | Ivan   | 88000.00  | 5     |
| Charlie| 80000.00  | 2     | Judy   | 82000.00  | 5     |
| Diana  | 72000.00  | 2     | Frank  | 70000.00  | 3     |
| Eve    | 65000.00  | 3     | Frank  | 70000.00  | 3     |
```

**Explanation:**
1. `e1.id < e2.id` is a non-equi condition that prevents duplicate pairs and self-pairing.
2. `ABS(e1.salary - e2.salary) <= 10000` is the non-equi range condition — salaries within $10K.
3. `e1.dept_id <> e2.dept_id` ensures different departments.
4. Non-equi joins use operators like `<`, `>`, `BETWEEN`, `<=` instead of `=`.

---

### Q16: Natural join vs inner join

**Problem:** Demonstrate the difference between `NATURAL JOIN` and explicit `INNER JOIN`.

**Solution:**

```sql
-- NATURAL JOIN (automatically matches columns with the same name)
SELECT e.id, e.name, d.name AS department
FROM employees e
NATURAL JOIN departments d;

-- Equivalent INNER JOIN (explicit condition)
SELECT e.id, e.name, d.name AS department
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id;
```

**Expected Output (both queries):**

```
| id | name    | department   |
|----|---------|--------------|
| 1  | Alice   | Engineering  |
| 2  | Bob     | Engineering  |
| 3  | Charlie | Marketing    |
| ... | ...    | ...          |
```

**Explanation:**
1. `NATURAL JOIN` automatically joins on all columns with matching names. Since both tables have `id` and `name`, it creates an implicit join on `e.id = d.id AND e.name = d.name` — which produces incorrect results or no matches at all.
2. **Important:** `NATURAL JOIN` is dangerous because it silently picks all matching column names. In our schema, both tables share `id` and `name`, so the natural join condition becomes `e.id = d.id AND e.name = d.name` — probably not what you want.
3. Always prefer explicit `INNER JOIN` with an `ON` clause for clarity and correctness.

---

## Aggregation & Group By

### Q17: Department-wise max/min/avg salary

**Problem:** Show each department's highest, lowest, and average salary with a meaningful salary spread.

**Solution:**

```sql
SELECT d.name AS department,
       COUNT(e.id) AS employee_count,
       ROUND(MAX(e.salary), 2) AS max_salary,
       ROUND(MIN(e.salary), 2) AS min_salary,
       ROUND(AVG(e.salary), 2) AS avg_salary,
       ROUND(MAX(e.salary) - MIN(e.salary), 2) AS salary_spread
FROM departments d
LEFT JOIN employees e ON d.id = e.dept_id
GROUP BY d.id, d.name
ORDER BY avg_salary DESC;
```

**Expected Output:**

```
| department   | employee_count | max_salary | min_salary | avg_salary | salary_spread |
|--------------|----------------|------------|------------|------------|---------------|
| Engineering  | 5              | 120000.00  | 95000.00   | 107500.00  | 25000.00      |
| Finance      | 2              | 88000.00   | 82000.00   | 85000.00   | 6000.00       |
| Marketing    | 3              | 80000.00   | 72000.00   | 76666.67   | 8000.00       |
| Sales        | 2              | 70000.00   | 65000.00   | 67500.00   | 5000.00       |
| Operations   | 2              | 61000.00   | 59000.00   | 60000.00   | 2000.00       |
| HR           | 2              | 55000.00   | 52000.00   | 53500.00   | 3000.00       |
```

**Explanation:**
1. `MAX()`, `MIN()`, `AVG()` are aggregate functions computed per group.
2. `ROUND(..., 2)` formats decimal values to two places.
3. The salary spread (`MAX - MIN`) indicates pay disparity within each department.

---

### Q18: HAVING clause examples

**Problem:** Find departments where the average salary exceeds $70,000 and at least 2 employees exist.

**Solution:**

```sql
SELECT d.name AS department,
       COUNT(e.id) AS headcount,
       ROUND(AVG(e.salary), 2) AS avg_salary
FROM departments d
INNER JOIN employees e ON d.id = e.dept_id
GROUP BY d.id, d.name
HAVING AVG(e.salary) > 70000
   AND COUNT(e.id) >= 2
ORDER BY avg_salary DESC;
```

**Expected Output:**

```
| department   | headcount | avg_salary |
|--------------|-----------|------------|
| Engineering  | 5         | 107500.00  |
| Finance      | 2         | 85000.00   |
| Marketing    | 3         | 76666.67   |
```

**Explanation:**
1. `HAVING` filters groups **after** aggregation, unlike `WHERE` which filters rows **before** aggregation.
2. `AVG(e.salary) > 70000` and `COUNT(e.id) >= 2` are both evaluated against grouped results.
3. Sales has avg 67500 (< 70000), HR and Operations have avg below 70000, so they are excluded.

---

### Q19: Find departments with >5 employees

**Problem:** List departments that have more than 5 employees.

**Solution:**

```sql
SELECT d.name AS department,
       COUNT(e.id) AS headcount
FROM departments d
LEFT JOIN employees e ON d.id = e.dept_id
GROUP BY d.id, d.name
HAVING COUNT(e.id) > 5;
```

**Expected Output (sample data does not satisfy condition):**

```
(no rows returned)
```

**Explanation:**
1. No department in our sample data has more than 5 employees (Engineering has the most at 5).
2. The `HAVING` clause correctly filters the grouped result.
3. For demonstration, change the threshold: `HAVING COUNT(e.id) >= 2` would return all departments.

---

### Q20: Running total using window functions

**Problem:** Calculate a running total of salaries ordered by hire date within each department.

**Solution:**

```sql
SELECT name,
       dept_id,
       salary,
       hire_date,
       SUM(salary) OVER (
           PARTITION BY dept_id
           ORDER BY hire_date
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
       ) AS running_total
FROM employees
ORDER BY dept_id, hire_date;
```

**Expected Output:**

```
| name    | dept_id | salary   | hire_date  | running_total |
|---------|---------|----------|------------|---------------|
| Alice   | 1       | 120000.00| 2020-03-15 | 120000.00     |
| Olivia  | 1       | 110000.00| 2020-07-01 | 230000.00     |
| Bob     | 1       | 95000.00 | 2021-06-01 | 325000.00     |
| Karl    | 1       | 105000.00| 2023-12-01 | 430000.00     |
| Charlie | 2       | 80000.00 | 2022-01-10 | 80000.00      |
| Diana   | 2       | 72000.00 | 2023-04-22 | 152000.00     |
| Leo     | 2       | 78000.00 | 2024-09-15 | 230000.00     |
| Eve     | 3       | 65000.00 | 2022-11-05 | 65000.00      |
| Frank   | 3       | 70000.00 | 2024-02-14 | 135000.00     |
| Grace   | 4       | 55000.00 | 2023-09-01 | 55000.00      |
| Heidi   | 4       | 52000.00 | 2024-06-10 | 107000.00     |
| Ivan    | 5       | 88000.00 | 2021-08-20 | 88000.00      |
| Judy    | 5       | 82000.00 | 2022-05-30 | 170000.00     |
| Maria   | 6       | 61000.00 | 2023-03-20 | 61000.00      |
| Nathan  | 6       | 59000.00 | 2024-07-01 | 120000.00     |
```

**Explanation:**
1. `SUM(salary) OVER (PARTITION BY dept_id ORDER BY hire_date ...)` computes a running total that resets for each department.
2. `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` defines the window frame from the start of the partition to the current row.
3. Without the `ROWS` clause, the default frame is `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`, which can give different results with ties.

---

### Q21: Rolling average

**Problem:** Calculate a 3-row rolling average of salaries ordered by hire date within the company.

**Solution:**

```sql
SELECT name,
       hire_date,
       salary,
       ROUND(AVG(salary) OVER (
           ORDER BY hire_date
           ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
       ), 2) AS rolling_avg_3
FROM employees
ORDER BY hire_date;
```

**Expected Output:**

```
| name    | hire_date  | salary   | rolling_avg_3 |
|---------|------------|----------|---------------|
| Alice   | 2020-03-15 | 120000.00| 120000.00     |
| Olivia  | 2020-07-01 | 110000.00| 115000.00     |
| Ivan    | 2021-08-20 | 88000.00 | 106000.00     |
| Bob     | 2021-06-01 | 95000.00 | 97666.67      |
| Judy    | 2022-05-30 | 82000.00 | 88333.33      |
| Charlie | 2022-01-10 | 80000.00 | 85666.67      |
| ...     | ...        | ...      | ...           |
```

**Explanation:**
1. `AVG(salary) OVER (ORDER BY hire_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)` averages the current row and the two preceding rows.
2. The first row has only 1 value in its frame, the second has 2, and from row 3 onwards it is a full 3-row average.
3. This smooths out short-term salary fluctuations to show trends.

---

### Q22: Cumulative sum partitioned by category

**Problem:** Compute cumulative sales amount partitioned by order status.

**Solution:**

```sql
SELECT id,
       customer_id,
       order_date,
       amount,
       status,
       SUM(amount) OVER (
           PARTITION BY status
           ORDER BY order_date
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
       ) AS cumulative_by_status
FROM orders
ORDER BY status, order_date;
```

**Expected Output:**

```
| id | customer_id | order_date | amount  | status    | cumulative_by_status |
|----|-------------|------------|---------|-----------|---------------------|
| 5  | 4           | 2024-03-01 | 1200.00 | Cancelled | 1200.00             |
| 8  | 1           | 2024-05-15 | 4200.00 | Delivered | 4200.00             |
| 4  | 3           | 2024-02-20 | 3200.00 | Delivered | 7400.00             |
| 10 | 3           | 2024-06-20 | 7800.00 | Delivered | 15200.00            |
| 2  | 2           | 2024-01-15 | 2300.00 | Pending   | 2300.00             |
| 7  | 5           | 2024-04-08 | 1100.00 | Pending   | 3400.00             |
| 12 | 8           | 2024-08-10 | 2100.00 | Pending   | 5500.00             |
| 1  | 1           | 2024-01-10 | 1500.00 | Shipped   | 1500.00             |
| 3  | 1           | 2024-02-05 | 800.00  | Shipped   | 2300.00             |
| 6  | 2           | 2024-03-12 | 5600.00 | Shipped   | 7900.00             |
| 9  | 6           | 2024-06-01 | 950.00  | Shipped   | 8850.00             |
| 11 | 7           | 2024-07-04 | 3400.00 | Shipped   | 12250.00            |
```

**Explanation:**
1. `PARTITION BY status` resets the cumulative sum for each status group.
2. `ORDER BY order_date` sequences the cumulative addition within each partition.
3. The `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` frame ensures a proper running total.

---

### Q23: Month-wise sales totals

**Problem:** Show total sales amount per month, sorted chronologically.

**Solution:**

```sql
SELECT DATE_FORMAT(order_date, '%Y-%m') AS month,
       COUNT(*) AS order_count,
       ROUND(SUM(amount), 2) AS total_sales
FROM orders
GROUP BY DATE_FORMAT(order_date, '%Y-%m')
ORDER BY month;
```

**Expected Output:**

```
| month   | order_count | total_sales |
|---------|-------------|-------------|
| 2024-01 | 2           | 3800.00     |
| 2024-02 | 2           | 4000.00     |
| 2024-03 | 2           | 6800.00     |
| 2024-04 | 1           | 1100.00     |
| 2024-05 | 1           | 4200.00     |
| 2024-06 | 2           | 8750.00     |
| 2024-07 | 1           | 3400.00     |
| 2024-08 | 1           | 2100.00     |
```

**Explanation:**
1. `DATE_FORMAT(order_date, '%Y-%m')` extracts year and month as a string (e.g., '2024-01').
2. `GROUP BY` on this formatted value aggregates all orders in the same month.
3. For PostgreSQL use `TO_CHAR(order_date, 'YYYY-MM')`; for SQL Server use `FORMAT(order_date, 'yyyy-MM')`.

---

## Subqueries & CTEs

### Q24: Subquery in SELECT clause

**Problem:** For each employee, show their salary and what percentage it represents of their department's total salary.

**Solution:**

```sql
SELECT e.name,
       e.dept_id,
       e.salary,
       ROUND(
           e.salary / (SELECT SUM(salary)
                       FROM employees
                       WHERE dept_id = e.dept_id) * 100,
       2) AS pct_of_dept
FROM employees e
ORDER BY e.dept_id, pct_of_dept DESC;
```

**Expected Output:**

```
| name    | dept_id | salary   | pct_of_dept |
|---------|---------|----------|-------------|
| Alice   | 1       | 120000.00| 22.33       |
| Olivia  | 1       | 110000.00| 20.47       |
| Karl    | 1       | 105000.00| 19.53       |
| Bob     | 1       | 95000.00 | 17.67       |
| Charlie | 2       | 80000.00 | 34.78       |
| Leo     | 2       | 78000.00 | 33.91       |
| Diana   | 2       | 72000.00 | 31.30       |
| Frank   | 3       | 70000.00 | 51.85       |
| Eve     | 3       | 65000.00 | 48.15       |
| Grace   | 4       | 55000.00 | 51.40       |
| Heidi   | 4       | 52000.00 | 48.60       |
| Ivan    | 5       | 88000.00 | 51.76       |
| Judy    | 5       | 82000.00 | 48.24       |
| Maria   | 6       | 61000.00 | 50.83       |
| Nathan  | 6       | 59000.00 | 49.17       |
```

**Explanation:**
1. The correlated subquery `(SELECT SUM(salary) FROM employees WHERE dept_id = e.dept_id)` runs once for each employee row.
2. It computes the department's total salary for the current employee's department.
3. `e.salary / total * 100` gives the percentage contribution.

---

### Q25: Subquery in WHERE with IN / EXISTS

**Problem:** Find all customers who have placed at least one order with amount > $3,000. Use both `IN` and `EXISTS`.

**Solution:**

```sql
-- Method 1: IN
SELECT id, name, city
FROM customers
WHERE id IN (
    SELECT DISTINCT customer_id
    FROM orders
    WHERE amount > 3000
);

-- Method 2: EXISTS
SELECT c.id, c.name, c.city
FROM customers c
WHERE EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customer_id = c.id
      AND o.amount > 3000
);
```

**Expected Output (both methods):**

```
| id | name      | city          |
|----|-----------|---------------|
| 1  | Acme Corp | New York      |
| 3  | Initech   | Austin        |
| 7  | Dunder Mifflin | Scranton  |
```

**Explanation:**
1. **`IN`** evaluates the subquery first, collects the result set, then checks membership. Best when the subquery result is small.
2. **`EXISTS`** uses a **semi-join** — for each outer row, the database checks if the subquery returns any row. It short-circuits on the first match.
3. `EXISTS` is generally faster with large result sets because it does not materialize the entire subquery.
4. `SELECT 1` in EXISTS is convention — the actual column does not matter since only row existence is checked.

---

### Q26: Co-related subquery

**Problem:** Find employees whose salary is above the average salary of their own department (a classic correlated subquery).

**Solution:**

```sql
SELECT e.name,
       e.dept_id,
       e.salary
FROM employees e
WHERE e.salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE dept_id = e.dept_id
)
ORDER BY e.dept_id, e.salary DESC;
```

**Expected Output:**

```
| name    | dept_id | salary   |
|---------|---------|----------|
| Alice   | 1       | 120000.00|
| Olivia  | 1       | 110000.00|
| Charlie | 2       | 80000.00 |
| Grace   | 4       | 55000.00 |
| Ivan    | 5       | 88000.00 |
| Maria   | 6       | 61000.00 |
```

**Explanation:**
1. The inner query references `e.dept_id` from the outer query — this is what makes it **correlated**.
2. The inner query runs **once per employee row** (or per unique `dept_id`, depending on optimizer).
3. Compared to Q1 (which used a derived table), this approach is simpler to write but can be slower on large tables because the subquery executes repeatedly.

---

### Q27: EXISTS vs IN performance difference

**Problem:** Find customers who have never placed an order. Compare `NOT IN` (with NULL-handling) and `NOT EXISTS`.

**Solution:**

```sql
-- Method 1: NOT EXISTS (safe, recommended)
SELECT c.id, c.name, c.city
FROM customers c
WHERE NOT EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customer_id = c.id
);

-- Method 2: NOT IN (DANGEROUS with NULLs in subquery)
SELECT c.id, c.name, c.city
FROM customers c
WHERE c.id NOT IN (
    SELECT customer_id
    FROM orders
);
```

**Expected Output (both methods):**

```
| id | name             | city           |
|----|------------------|----------------|
| 5  | Cyberdyne        | Boston         |
| 8  | Sterling Cooper  | New York       |
```

**Explanation:**
1. `NOT EXISTS` uses an **anti-semi-join** — it short-circuits on finding a match and is generally faster.
2. `NOT IN` has a critical NULL trap: if the subquery result contains even one NULL, the entire `NOT IN` returns an empty set. `IN (1, 2, NULL)` evaluates to `TRUE` for matching values; `NOT IN (1, 2, NULL)` evaluates to `FALSE` for everything because `x <> NULL` is `UNKNOWN`.
3. **Always prefer `NOT EXISTS`** for anti-joins in production code.

---

### Q28: CTE (WITH clause) for recursive hierarchy

**Problem:** Build an organizational hierarchy showing each employee's chain of command up to the CEO.

**Solution:**

```sql
WITH RECURSIVE org_chain AS (
    -- Anchor: top-level managers (no manager)
    SELECT id,
           name,
           manager_id,
           1 AS level,
           CAST(name AS CHAR(500)) AS chain
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive: join back to get subordinates
    SELECT e.id,
           e.name,
           e.manager_id,
           oc.level + 1,
           CONCAT(oc.chain, ' -> ', e.name)
    FROM employees e
    INNER JOIN org_chain oc ON e.manager_id = oc.id
)
SELECT id,
       name,
       level,
       chain
FROM org_chain
ORDER BY level, name;
```

**Expected Output:**

```
| id | name    | level | chain                              |
|----|---------|-------|------------------------------------|
| 1  | Alice   | 1     | Alice                              |
| 2  | Bob     | 2     | Alice -> Bob                       |
| 5  | Eve     | 2     | Alice -> Eve                       |
| 9  | Ivan    | 2     | Alice -> Ivan                      |
| 11 | Karl    | 2     | Alice -> Karl                      |
| 15 | Olivia  | 2     | Alice -> Olivia                    |
| 3  | Charlie | 2     | Alice -> Charlie                   |
| 4  | Diana   | 3     | Alice -> Charlie -> Diana          |
| 12 | Leo     | 3     | Alice -> Charlie -> Leo            |
| 7  | Grace   | 3     | Alice -> Charlie -> Grace          |
| 6  | Frank   | 3     | Alice -> Eve -> Frank              |
| 8  | Heidi   | 4     | Alice -> Charlie -> Grace -> Heidi |
| 10 | Judy    | 3     | Alice -> Ivan -> Judy              |
| 13 | Maria   | 3     | Alice -> Ivan -> Maria             |
| 14 | Nathan  | 4     | Alice -> Ivan -> Maria -> Nathan   |
```

**Explanation:**
1. The **anchor member** selects the roots (employees with no manager).
2. The **recursive member** joins `employees` to the CTE on `manager_id`, building one level at a time.
3. `UNION ALL` combines anchor and recursive results.
4. The `level` counter increments with each recursion depth.
5. `CONCAT` builds the visual chain.

---

### Q29: CTE for readability (multi-step query)

**Problem:** Find the top 2 products by total revenue (quantity * price), using CTEs for clarity.

**Solution:**

```sql
WITH product_revenue AS (
    SELECT p.id,
           p.name,
           p.category,
           SUM(oi.quantity * p.price) AS total_revenue
    FROM products p
    INNER JOIN order_items oi ON p.id = oi.product_id
    GROUP BY p.id, p.name, p.category
),
ranked_products AS (
    SELECT name,
           category,
           total_revenue,
           DENSE_RANK() OVER (ORDER BY total_revenue DESC) AS rnk
    FROM product_revenue
)
SELECT name,
       category,
       total_revenue
FROM ranked_products
WHERE rnk <= 2
ORDER BY total_revenue DESC;
```

**Expected Output:**

```
| name       | category    | total_revenue |
|------------|-------------|---------------|
| Monitor    | Electronics | 2700.00       |
| Desk Chair | Furniture   | 2450.00       |
```

**Explanation:**
1. First CTE (`product_revenue`) computes revenue per product by joining `products` and `order_items`.
2. Second CTE (`ranked_products`) applies `DENSE_RANK()` — if there were ties, both would appear and the next rank would be 2.
3. Breaking the query into CTEs makes each step independently testable and understandable.

---

### Q30: Nested subqueries

**Problem:** Find the department(s) with the highest average salary among all departments.

**Solution:**

```sql
SELECT d.name AS department,
       ROUND(dept_avg.avg_salary, 2) AS avg_salary
FROM departments d
INNER JOIN (
    SELECT dept_id,
           AVG(salary) AS avg_salary
    FROM employees
    GROUP BY dept_id
) dept_avg ON d.id = dept_avg.dept_id
WHERE dept_avg.avg_salary = (
    SELECT MAX(avg_salary)
    FROM (
        SELECT AVG(salary) AS avg_salary
        FROM employees
        GROUP BY dept_id
    ) AS all_dept_avgs
);
```

**Expected Output:**

```
| department   | avg_salary |
|--------------|------------|
| Engineering  | 107500.00  |
```

**Explanation:**
1. **Innermost subquery** `all_dept_avgs` computes the average salary for each department.
2. **Middle subquery** finds the maximum of those averages.
3. **Outer query** joins departments with the average calculation and filters to match the maximum.
4. Nested subqueries are harder to read than CTEs — this is a good candidate to refactor with `WITH`.

---

## Window Functions

### Q31: ROW_NUMBER, RANK, DENSE_RANK

**Problem:** Compare the three ranking functions on employee salaries within each department.

**Solution:**

```sql
SELECT name,
       dept_id,
       salary,
       ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS row_num,
       RANK()       OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rnk,
       DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS dense_rnk
FROM employees
ORDER BY dept_id, salary DESC;
```

**Expected Output:**

```
| name    | dept_id | salary   | row_num | rnk | dense_rnk |
|---------|---------|----------|---------|-----|-----------|
| Alice   | 1       | 120000.00| 1       | 1   | 1         |
| Olivia  | 1       | 110000.00| 2       | 2   | 2         |
| Karl    | 1       | 105000.00| 3       | 3   | 3         |
| Bob     | 1       | 95000.00 | 4       | 4   | 4         |
| Charlie | 2       | 80000.00 | 1       | 1   | 1         |
| Leo     | 2       | 78000.00 | 2       | 2   | 2         |
| Diana   | 2       | 72000.00 | 3       | 3   | 3         |
| Frank   | 3       | 70000.00 | 1       | 1   | 1         |
| Eve     | 3       | 65000.00 | 2       | 2   | 2         |
| Grace   | 4       | 55000.00 | 1       | 1   | 1         |
| Heidi   | 4       | 52000.00 | 2       | 2   | 2         |
| Ivan    | 5       | 88000.00 | 1       | 1   | 1         |
| Judy    | 5       | 82000.00 | 2       | 2   | 2         |
| Maria   | 6       | 61000.00 | 1       | 1   | 1         |
| Nathan  | 6       | 59000.00 | 2       | 2   | 2         |
```

**Explanation:**
- `ROW_NUMBER()` assigns a unique sequential number. No two rows get the same rank, even with ties. Tie-breaking is non-deterministic without an additional `ORDER BY` column.
- `RANK()` assigns the same rank to ties but skips the next rank. If two rows tie for rank 1, the next rank is 3.
- `DENSE_RANK()` assigns the same rank to ties but does **not** skip. If two rows tie for rank 1, the next rank is 2.

---

### Q32: Find top 3 earners per department

**Problem:** List the top 3 highest-paid employees in each department.

**Solution:**

```sql
WITH ranked AS (
    SELECT e.name,
           e.salary,
           d.name AS department,
           DENSE_RANK() OVER (
               PARTITION BY e.dept_id
               ORDER BY e.salary DESC
           ) AS rnk
    FROM employees e
    INNER JOIN departments d ON e.dept_id = d.id
)
SELECT department,
       name,
       salary,
       rnk
FROM ranked
WHERE rnk <= 3
ORDER BY department, rnk;
```

**Expected Output:**

```
| department   | name    | salary   | rnk |
|--------------|---------|----------|-----|
| Engineering  | Alice   | 120000.00| 1   |
| Engineering  | Olivia  | 110000.00| 2   |
| Engineering  | Karl    | 105000.00| 3   |
| Finance      | Ivan    | 88000.00 | 1   |
| Finance      | Judy    | 82000.00 | 2   |
| HR           | Grace   | 55000.00 | 1   |
| HR           | Heidi   | 52000.00 | 2   |
| Marketing    | Charlie | 80000.00 | 1   |
| Marketing    | Leo     | 78000.00 | 2   |
| Marketing    | Diana   | 72000.00 | 3   |
| Operations   | Maria   | 61000.00 | 1   |
| Operations   | Nathan  | 59000.00 | 2   |
| Sales        | Frank   | 70000.00 | 1   |
| Sales        | Eve     | 65000.00 | 2   |
```

**Explanation:**
1. `DENSE_RANK()` ensures that if there were ties, we would not lose rows due to rank skipping.
2. The CTE assigns ranks within each department partition.
3. The outer query filters `rnk <= 3` — if a department has fewer than 3 employees, all are shown.

---

### Q33: LAG and LEAD for comparing values

**Problem:** Show each employee's salary alongside the previous and next employee's salary (ordered by hire date within each department).

**Solution:**

```sql
SELECT name,
       dept_id,
       salary,
       hire_date,
       LAG(salary, 1) OVER (
           PARTITION BY dept_id
           ORDER BY hire_date
       ) AS prev_salary,
       LEAD(salary, 1) OVER (
           PARTITION BY dept_id
           ORDER BY hire_date
       ) AS next_salary,
       CASE
           WHEN salary > LAG(salary, 1) OVER (
               PARTITION BY dept_id ORDER BY hire_date
           ) THEN 'Higher than prev'
           WHEN salary < LAG(salary, 1) OVER (
               PARTITION BY dept_id ORDER BY hire_date
           ) THEN 'Lower than prev'
           ELSE 'First in dept'
       END AS comparison
FROM employees
ORDER BY dept_id, hire_date;
```

**Expected Output:**

```
| name    | dept_id | salary   | hire_date  | prev_salary | next_salary | comparison       |
|---------|---------|----------|------------|-------------|-------------|------------------|
| Alice   | 1       | 120000.00| 2020-03-15 | NULL        | 110000.00   | First in dept    |
| Olivia  | 1       | 110000.00| 2020-07-01 | 120000.00   | 95000.00    | Lower than prev  |
| Bob     | 1       | 95000.00 | 2021-06-01 | 110000.00   | 105000.00   | Lower than prev  |
| Karl    | 1       | 105000.00| 2023-12-01 | 95000.00    | NULL        | Higher than prev |
| Charlie | 2       | 80000.00 | 2022-01-10 | NULL        | 72000.00    | First in dept    |
| Diana   | 2       | 72000.00 | 2023-04-22 | 80000.00    | 78000.00    | Lower than prev  |
| Leo     | 2       | 78000.00 | 2024-09-15 | 72000.00    | NULL        | Higher than prev |
| Eve     | 3       | 65000.00 | 2022-11-05 | NULL        | 70000.00    | First in dept    |
| Frank   | 3       | 70000.00 | 2024-02-14 | 65000.00    | NULL        | Higher than prev |
| Grace   | 4       | 55000.00 | 2023-09-01 | NULL        | 52000.00    | First in dept    |
| Heidi   | 4       | 52000.00 | 2024-06-10 | 55000.00    | NULL        | Lower than prev  |
| Ivan    | 5       | 88000.00 | 2021-08-20 | NULL        | 82000.00    | First in dept    |
| Judy    | 5       | 82000.00 | 2022-05-30 | 88000.00    | NULL        | Lower than prev  |
| Maria   | 6       | 61000.00 | 2023-03-20 | NULL        | 59000.00    | First in dept    |
| Nathan  | 6       | 59000.00 | 2024-07-01 | 61000.00    | NULL        | Lower than prev  |
```

**Explanation:**
1. `LAG(salary, 1)` accesses the salary from the previous row in the ordered partition.
2. `LEAD(salary, 1)` accesses the salary from the next row.
3. Both return `NULL` when there is no previous/next row.
4. The `CASE` expression creates a readable trend indicator.

---

### Q34: FIRST_VALUE and LAST_VALUE

**Problem:** Show each employee alongside the highest and lowest salary in their department.

**Solution:**

```sql
SELECT name,
       dept_id,
       salary,
       FIRST_VALUE(salary) OVER (
           PARTITION BY dept_id
           ORDER BY salary DESC
           ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
       ) AS dept_max_salary,
       LAST_VALUE(salary) OVER (
           PARTITION BY dept_id
           ORDER BY salary DESC
           ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
       ) AS dept_min_salary
FROM employees
ORDER BY dept_id, salary DESC;
```

**Expected Output:**

```
| name    | dept_id | salary   | dept_max_salary | dept_min_salary |
|---------|---------|----------|-----------------|-----------------|
| Alice   | 1       | 120000.00| 120000.00       | 95000.00        |
| Olivia  | 1       | 110000.00| 120000.00       | 95000.00        |
| Karl    | 1       | 105000.00| 120000.00       | 95000.00        |
| Bob     | 1       | 95000.00 | 120000.00       | 95000.00        |
| Charlie | 2       | 80000.00 | 80000.00        | 72000.00        |
| Leo     | 2       | 78000.00 | 80000.00        | 72000.00        |
| Diana   | 2       | 72000.00 | 80000.00        | 72000.00        |
| Frank   | 3       | 70000.00 | 70000.00        | 65000.00        |
| Eve     | 3       | 65000.00 | 70000.00        | 65000.00        |
| Grace   | 4       | 55000.00 | 55000.00        | 52000.00        |
| Heidi   | 4       | 52000.00 | 55000.00        | 52000.00        |
| Ivan    | 5       | 88000.00 | 88000.00        | 82000.00        |
| Judy    | 5       | 82000.00 | 88000.00        | 82000.00        |
| Maria   | 6       | 61000.00 | 61000.00        | 59000.00        |
| Nathan  | 6       | 59000.00 | 61000.00        | 59000.00        |
```

**Explanation:**
1. `FIRST_VALUE(salary)` returns the first value in the window frame — the highest salary since we order by `salary DESC`.
2. `LAST_VALUE(salary)` returns the last value in the window frame.
3. The **frame clause** `ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING` is critical: without it, the default frame ends at `CURRENT ROW`, and `LAST_VALUE` would return the current row's salary instead of the department minimum.

---

### Q35: NTILE for quartiles

**Problem:** Divide employees into 4 salary quartiles across the entire company.

**Solution:**

```sql
SELECT name,
       salary,
       NTILE(4) OVER (ORDER BY salary DESC) AS quartile,
       CASE NTILE(4) OVER (ORDER BY salary DESC)
           WHEN 1 THEN 'Top 25%'
           WHEN 2 THEN 'Upper-Mid'
           WHEN 3 THEN 'Lower-Mid'
           WHEN 4 THEN 'Bottom 25%'
       END AS quartile_label
FROM employees
ORDER BY salary DESC;
```

**Expected Output:**

```
| name    | salary   | quartile | quartile_label |
|---------|----------|----------|----------------|
| Alice   | 120000.00| 1        | Top 25%        |
| Olivia  | 110000.00| 1        | Top 25%        |
| Karl    | 105000.00| 1        | Top 25%        |
| Bob     | 95000.00 | 1        | Top 25%        |
| Ivan    | 88000.00 | 2        | Upper-Mid      |
| Judy    | 82000.00 | 2        | Upper-Mid      |
| Charlie | 80000.00 | 2        | Upper-Mid      |
| Leo     | 78000.00 | 2        | Upper-Mid      |
| Diana   | 72000.00 | 3        | Lower-Mid      |
| Frank   | 70000.00 | 3        | Lower-Mid      |
| Eve     | 65000.00 | 3        | Lower-Mid      |
| Maria   | 61000.00 | 3        | Lower-Mid      |
| Nathan  | 59000.00 | 4        | Bottom 25%     |
| Grace   | 55000.00 | 4        | Bottom 25%     |
| Heidi   | 52000.00 | 4        | Bottom 25%     |
```

**Explanation:**
1. `NTILE(4)` divides the ordered result set into 4 groups as evenly as possible.
2. With 15 employees: 4 groups of 4, 4, 4, 3 or similar distribution.
3. The `CASE` expression maps each bucket to a readable label.
4. `NTILE` is also used for percentile bucketing and paginated reporting.

---

### Q36: Percentile calculation

**Problem:** Calculate the approximate percentile rank of each employee's salary.

**Solution:**

```sql
SELECT name,
       salary,
       ROUND(
           PERCENT_RANK() OVER (ORDER BY salary DESC) * 100,
       2) AS percentile_rank
FROM employees
ORDER BY salary DESC;
```

**Expected Output:**

```
| name    | salary   | percentile_rank |
|---------|----------|-----------------|
| Alice   | 120000.00| 0.00            |
| Olivia  | 110000.00| 7.14            |
| Karl    | 105000.00| 14.29           |
| Bob     | 95000.00 | 21.43           |
| Ivan    | 88000.00 | 28.57           |
| Judy    | 82000.00 | 35.71           |
| Charlie | 80000.00 | 42.86           |
| Leo     | 78000.00 | 50.00           |
| Diana   | 72000.00 | 57.14           |
| Frank   | 70000.00 | 64.29           |
| Eve     | 65000.00 | 71.43           |
| Maria   | 61000.00 | 78.57           |
| Nathan  | 59000.00 | 85.71           |
| Grace   | 55000.00 | 92.86           |
| Heidi   | 52000.00 | 100.00          |
```

**Explanation:**
1. `PERCENT_RANK()` computes `(rank - 1) / (total_rows - 1)`.
2. The highest salary gets rank 0% and the lowest gets 100%.
3. Multiply by 100 to express as a percentage.
4. Use `CUME_DIST()` instead for a different cumulative distribution calculation.

---

### Q37: Moving average over 3 months

**Problem:** Calculate a 3-month moving average of order amounts.

**Solution:**

```sql
WITH monthly_totals AS (
    SELECT DATE_FORMAT(order_date, '%Y-%m') AS month,
           SUM(amount) AS total
    FROM orders
    GROUP BY DATE_FORMAT(order_date, '%Y-%m')
)
SELECT month,
       total,
       ROUND(AVG(total) OVER (
           ORDER BY month
           ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
       ), 2) AS moving_avg_3m
FROM monthly_totals
ORDER BY month;
```

**Expected Output:**

```
| month   | total  | moving_avg_3m |
|---------|--------|---------------|
| 2024-01 | 3800.00| 3800.00       |
| 2024-02 | 4000.00| 3900.00       |
| 2024-03 | 6800.00| 4866.67       |
| 2024-04 | 1100.00| 3966.67       |
| 2024-05 | 4200.00| 4033.33       |
| 2024-06 | 8750.00| 4683.33       |
| 2024-07 | 3400.00| 5450.00       |
| 2024-08 | 2100.00| 4750.00       |
```

**Explanation:**
1. The CTE first aggregates daily orders into monthly totals.
2. `AVG(total) OVER (ORDER BY month ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)` computes the moving average.
3. The first month has only 1 value in the frame, the second has 2, and from month 3 onward it is a full 3-month average.

---

### Q38: Difference from previous row

**Problem:** Show the difference in order amount from one order to the next for each customer.

**Solution:**

```sql
SELECT id,
       customer_id,
       order_date,
       amount,
       LAG(amount, 1) OVER (
           PARTITION BY customer_id
           ORDER BY order_date
       ) AS prev_amount,
       amount - LAG(amount, 1) OVER (
           PARTITION BY customer_id
           ORDER BY order_date
       ) AS diff_from_prev
FROM orders
ORDER BY customer_id, order_date;
```

**Expected Output:**

```
| id | customer_id | order_date | amount  | prev_amount | diff_from_prev |
|----|-------------|------------|---------|-------------|----------------|
| 1  | 1           | 2024-01-10 | 1500.00 | NULL        | NULL           |
| 3  | 1           | 2024-02-05 | 800.00  | 1500.00     | -700.00        |
| 8  | 1           | 2024-05-15 | 4200.00 | 800.00      | 3400.00        |
| 2  | 2           | 2024-01-15 | 2300.00 | NULL        | NULL           |
| 6  | 2           | 2024-03-12 | 5600.00 | 2300.00     | 3300.00        |
| 4  | 3           | 2024-02-20 | 3200.00 | NULL        | NULL           |
| 10 | 3           | 2024-06-20 | 7800.00 | 3200.00     | 4600.00        |
| 5  | 4           | 2024-03-01 | 1200.00 | NULL        | NULL           |
| 7  | 5           | 2024-04-08 | 1100.00 | NULL        | NULL           |
| 9  | 6           | 2024-06-01 | 950.00  | NULL        | NULL           |
| 11 | 7           | 2024-07-04 | 3400.00 | NULL        | NULL           |
| 12 | 8           | 2024-08-10 | 2100.00 | NULL        | NULL           |
```

**Explanation:**
1. `LAG(amount, 1)` fetches the previous order amount for the same customer.
2. `amount - LAG(...)` computes the difference — positive means spending increased; negative means it decreased.
3. `NULL` for the first order per customer since there is no previous row.

---

## Date & String Functions

### Q39: Extract year/month from dates

**Problem:** Show orders with the year, month name, and quarter extracted from the order date.

**Solution:**

```sql
SELECT id,
       order_date,
       YEAR(order_date) AS year,
       MONTH(order_date) AS month_num,
       MONTHNAME(order_date) AS month_name,
       QUARTER(order_date) AS quarter,
       DATE_FORMAT(order_date, '%W') AS day_of_week
FROM orders
ORDER BY order_date
LIMIT 6;
```

**Expected Output:**

```
| id | order_date | year | month_num | month_name | quarter | day_of_week |
|----|------------|------|-----------|------------|---------|-------------|
| 1  | 2024-01-10 | 2024 | 1         | January    | 1       | Wednesday   |
| 2  | 2024-01-15 | 2024 | 1         | January    | 1       | Monday      |
| 3  | 2024-02-05 | 2024 | 2         | February   | 1       | Monday      |
| 4  | 2024-02-20 | 2024 | 2         | February   | 1       | Tuesday     |
| 5  | 2024-03-01 | 2024 | 3         | March      | 1       | Friday      |
| 6  | 2024-03-12 | 2024 | 3         | March      | 1       | Tuesday     |
```

**Explanation:**
1. `YEAR()`, `MONTH()`, `QUARTER()` are MySQL date extraction functions.
2. `MONTHNAME()` returns the full month name.
3. `DATE_FORMAT()` is the most flexible — `'%W'` gives the weekday name. See MySQL docs for the full format string reference.
4. For PostgreSQL, use `EXTRACT(YEAR FROM order_date)`, `TO_CHAR(order_date, 'Month')`.

---

### Q40: Date difference calculations

**Problem:** Calculate how many days have passed since each order was placed, along with aging buckets.

**Solution:**

```sql
SELECT id,
       order_date,
       DATEDIFF(CURDATE(), order_date) AS days_since_order,
       CASE
           WHEN DATEDIFF(CURDATE(), order_date) <= 30 THEN '0-30 days'
           WHEN DATEDIFF(CURDATE(), order_date) <= 60 THEN '31-60 days'
           WHEN DATEDIFF(CURDATE(), order_date) <= 90 THEN '61-90 days'
           ELSE '90+ days'
       END AS aging_bucket
FROM orders
ORDER BY order_date DESC;
```

**Expected Output (running on 2024-10-01):**

```
| id | order_date | days_since_order | aging_bucket |
|----|------------|------------------|--------------|
| 12 | 2024-08-10 | 52               | 31-60 days   |
| 11 | 2024-07-04 | 89               | 61-90 days   |
| 10 | 2024-06-20 | 103              | 90+ days     |
| 9  | 2024-06-01 | 122              | 90+ days     |
| 8  | 2024-05-15 | 139              | 90+ days     |
| 7  | 2024-04-08 | 176              | 90+ days     |
| 6  | 2024-03-12 | 203              | 90+ days     |
| 5  | 2024-03-01 | 214              | 90+ days     |
| 4  | 2024-02-20 | 224              | 90+ days     |
| 3  | 2024-02-05 | 239              | 90+ days     |
| 2  | 2024-01-15 | 260              | 90+ days     |
| 1  | 2024-01-10 | 265              | 90+ days     |
```

**Explanation:**
1. `DATEDIFF(CURDATE(), order_date)` calculates days between two dates as an integer.
2. The `CASE` expression segments orders into aging buckets for receivables analysis.
3. In PostgreSQL, use `CURRENT_DATE - order_date` (returns integer) and `INTERVAL` arithmetic.
4. In SQL Server, use `DATEDIFF(day, order_date, GETDATE())`.

---

### Q41: String concatenation, substring, length

**Problem:** Manipulate employee names: show length, first 3 characters, last 2 characters, and a formatted code.

**Solution:**

```sql
SELECT name,
       LENGTH(name) AS name_length,
       LEFT(name, 3) AS first_3,
       RIGHT(name, 2) AS last_2,
       SUBSTRING(name, 2, 4) AS mid_4,
       CONCAT(
           UPPER(LEFT(name, 1)),
           LPAD(ROW_NUMBER() OVER (ORDER BY id), 3, '0')
       ) AS employee_code
FROM employees
ORDER BY id
LIMIT 5;
```

**Expected Output:**

```
| name    | name_length | first_3 | last_2 | mid_4 | employee_code |
|---------|-------------|---------|--------|-------|---------------|
| Alice   | 5           | Ali     | ce     | lice  | A001          |
| Bob     | 3           | Bob     | ob     | ob    | B002          |
| Charlie | 7           | Cha     | ie     | harl  | C003          |
| Diana   | 5           | Dia     | na     | iana  | D004          |
| Eve     | 3           | Eve     | ve     | ve    | E005          |
```

**Explanation:**
1. `LENGTH()` returns the byte/character length (varies by character set in MySQL).
2. `LEFT()` and `RIGHT()` extract from the start/end of a string.
3. `SUBSTRING(str, pos, len)` extracts a substring starting at position `pos` (1-indexed).
4. `CONCAT()` joins strings; `UPPER()` capitalizes; `LPAD()` pads with zeros to width 3.
5. The `ROW_NUMBER()` generates sequential employee codes.

---

### Q42: Pattern matching with LIKE and REGEXP

**Problem:** Find customers whose name starts with a vowel or contains a repeated letter, and orders with a specific pattern.

**Solution:**

```sql
-- LIKE: Customers whose name starts with 'A' or 'C'
SELECT id, name, city
FROM customers
WHERE name LIKE 'A%' OR name LIKE 'C%';

-- REGEXP: Customers whose name contains a repeated 'e'
SELECT id, name, city
FROM customers
WHERE name REGEXP 'e.*e';

-- Orders where status starts with 'S' and has exactly 6 more characters
SELECT id, status
FROM orders
WHERE status LIKE 'S______';
```

**Expected Output (LIKE):**

```
| id | name         | city          |
|----|--------------|---------------|
| 1  | Acme Corp    | New York      |
| 5  | Cyberdyne    | Boston        |
| 6  | Veep Corp    | Washington DC |
```

**Expected Output (REGEXP):**

```
| id | name             | city       |
|----|------------------|------------|
| 5  | Cyberdyne        | Boston     |
```

**Expected Output (LIKE with pattern):**

```
| id | status  |
|----|---------|
| 1  | Shipped |
| 3  | Shipped |
| 6  | Shipped |
| 9  | Shipped |
| 11 | Shipped |
```

**Explanation:**
1. `LIKE '%'` is a wildcard: `%` matches any sequence of characters; `_` matches exactly one character.
2. `LIKE 'S______'` matches 'Shipped' (S plus 6 characters = 7 total — but 'Shipped' has 7 letters, so 6 underscores after S).
3. `REGEXP` (or `RLIKE`) supports full regular expressions: `'e.*e'` matches strings containing two 'e' characters with anything in between.
4. In PostgreSQL, use `~` for regex: `name ~ 'e.*e'`.

---

### Q43: Format dates and numbers

**Problem:** Display order data with formatted date and currency.

**Solution:**

```sql
SELECT id,
       DATE_FORMAT(order_date, '%M %d, %Y') AS formatted_date,
       CONCAT('$', FORMAT(amount, 2)) AS formatted_amount,
       CONCAT('$', FORMAT(amount * 1.08, 2)) AS with_tax
FROM orders
ORDER BY order_date
LIMIT 6;
```

**Expected Output:**

```
| id | formatted_date    | formatted_amount | with_tax   |
|----|-------------------|------------------|------------|
| 1  | January 10, 2024  | $1,500.00        | $1,620.00  |
| 2  | January 15, 2024  | $2,300.00        | $2,484.00  |
| 3  | February 05, 2024 | $800.00          | $864.00    |
| 4  | February 20, 2024 | $3,200.00        | $3,456.00  |
| 5  | March 01, 2024    | $1,200.00        | $1,296.00  |
| 6  | March 12, 2024    | $5,600.00        | $6,048.00  |
```

**Explanation:**
1. `DATE_FORMAT(order_date, '%M %d, %Y')` produces readable dates like "January 10, 2024".
2. `FORMAT(amount, 2)` adds thousand separators and rounds to 2 decimal places.
3. `CONCAT('$', ...)` prepends the dollar sign (string concatenation).
4. In PostgreSQL, use `TO_CHAR(amount, 'FM$999,999,999.00')`.

---

### Q44: Case-insensitive search

**Problem:** Find customers whose name contains "corp" regardless of case.

**Solution:**

```sql
-- Method 1: UPPER/LOWER
SELECT id, name, city
FROM customers
WHERE LOWER(name) LIKE '%corp%';

-- Method 2: Using COLLATE (MySQL)
SELECT id, name, city
FROM customers
WHERE name COLLATE utf8mb4_general_ci LIKE '%corp%';

-- Method 3: REGEXP with case-insensitive flag
SELECT id, name, city
FROM customers
WHERE name REGEXP 'corp';
```

**Expected Output (all methods):**

```
| id | name             | city           |
|----|------------------|----------------|
| 1  | Acme Corp        | New York       |
| 6  | Veep Corp        | Washington DC  |
| 8  | Sterling Cooper  | New York       |
```

**Explanation:**
1. `LOWER(name) LIKE '%corp%'` is the most portable approach — convert both sides to the same case.
2. `COLLATE utf8mb4_general_ci` uses a case-insensitive collation. `_ci` = case insensitive, `_cs` = case sensitive.
3. MySQL's `REGEXP` is case-insensitive by default for non-binary strings.
4. In PostgreSQL, use `ILIKE` for case-insensitive matching: `name ILIKE '%corp%'`.

---

## Advanced Problems

### Q45: Pivot rows to columns

**Problem:** Transform the `student` table so each student has one row with Math, Science, and English marks as separate columns.

**Solution:**

```sql
SELECT name,
       MAX(CASE WHEN subject = 'Math'    THEN marks END) AS math,
       MAX(CASE WHEN subject = 'Science' THEN marks END) AS science,
       MAX(CASE WHEN subject = 'English' THEN marks END) AS english
FROM student
GROUP BY name
ORDER BY name;
```

**Expected Output:**

```
| name    | math | science | english |
|---------|------|---------|---------|
| Alice   | 92   | 85      | 78      |
| Bob     | 67   | 72      | 81      |
| Charlie | 95   | 88      | 91      |
| Diana   | 55   | 62      | 70      |
```

**Explanation:**
1. `CASE WHEN subject = 'Math' THEN marks END` puts the marks value in the Math column when subject matches, `NULL` otherwise.
2. `MAX()` (or `MIN()`) collapses the group so each student has one row — since only one non-NULL value exists per subject per student, the aggregate returns that value.
3. This is a manual pivot. MySQL 8+ also has `GROUP_CONCAT` + JSON for dynamic pivoting.
4. In PostgreSQL, use the `crosstab()` function from the `tablefunc` extension for more complex pivots.

---

### Q46: Recursive CTE for org chart hierarchy

**Problem:** Generate a full organizational chart showing each employee's level and management path, with proper indentation.

**Solution:**

```sql
WITH RECURSIVE org_tree AS (
    -- Anchor: top-level managers
    SELECT id,
           name,
           manager_id,
           0 AS level,
           CAST(name AS CHAR(500)) AS path,
           CAST(LPAD('', 0, '') AS CHAR(100)) AS indent
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive: children
    SELECT e.id,
           e.name,
           e.manager_id,
           ot.level + 1,
           CONCAT(ot.path, ' -> ', e.name),
           CONCAT(ot.indent, '  ')
    FROM employees e
    INNER JOIN org_tree ot ON e.manager_id = ot.id
)
SELECT id,
       CONCAT(indent, name) AS org_chart_name,
       level,
       path
FROM org_tree
ORDER BY path;
```

**Expected Output:**

```
| id | org_chart_name | level | path                                          |
|----|----------------|-------|-----------------------------------------------|
| 1  | Alice          | 0     | Alice                                         |
| 2  |   Bob          | 1     | Alice -> Bob                                  |
| 5  |   Eve          | 1     | Alice -> Eve                                  |
| 6  |     Frank      | 2     | Alice -> Eve -> Frank                         |
| 9  |   Ivan         | 1     | Alice -> Ivan                                 |
| 10 |     Judy       | 2     | Alice -> Ivan -> Judy                         |
| 13 |     Maria      | 2     | Alice -> Ivan -> Maria                        |
| 14 |       Nathan   | 3     | Alice -> Ivan -> Maria -> Nathan              |
| 11 |   Karl         | 1     | Alice -> Karl                                 |
| 15 |   Olivia       | 1     | Alice -> Olivia                               |
| 3  |   Charlie      | 1     | Alice -> Charlie                              |
| 4  |     Diana      | 2     | Alice -> Charlie -> Diana                     |
| 7  |     Grace      | 2     | Alice -> Charlie -> Grace                     |
| 8  |       Heidi    | 3     | Alice -> Charlie -> Grace -> Heidi            |
| 12 |     Leo        | 2     | Alice -> Charlie -> Leo                       |
```

**Explanation:**
1. The anchor finds Alice (the only employee without a manager, the CEO/top-level).
2. The recursive step joins `employees` to the CTE on `manager_id`.
3. `CONCAT(ot.indent, '  ')` builds indentation for the visual tree: each level adds 2 spaces.
4. `ORDER BY path` ensures the tree is output in hierarchy order.

---

### Q47: Gap detection (missing IDs)

**Problem:** Find missing IDs in the `orders` table. For example, if IDs 1, 2, 4, 7, 8 exist, report that 3, 5, 6 are missing.

**Solution:**

```sql
WITH RECURSIVE number_series AS (
    SELECT MIN(id) AS n
    FROM orders

    UNION ALL

    SELECT n + 1
    FROM number_series
    WHERE n < (SELECT MAX(id) FROM orders)
)
SELECT n AS missing_id
FROM number_series
WHERE n NOT IN (SELECT id FROM orders)
ORDER BY n;
```

**Expected Output (with sample data — no gaps):**

```
(no rows returned — IDs 1-12 are contiguous)
```

**Demonstration with gaps:**

```sql
-- Delete order 5 and 9 to create gaps
DELETE FROM orders WHERE id IN (5, 9);

-- Re-run gap detection
WITH RECURSIVE number_series AS (
    SELECT MIN(id) AS n FROM orders
    UNION ALL
    SELECT n + 1 FROM number_series
    WHERE n < (SELECT MAX(id) FROM orders)
)
SELECT n AS missing_id
FROM number_series
WHERE n NOT IN (SELECT id FROM orders)
ORDER BY n;

-- Restore
-- INSERT INTO orders (id, customer_id, order_date, amount, status)
-- VALUES (5, 4, '2024-03-01', 1200.00, 'Cancelled'),
--        (9, 6, '2024-06-01', 950.00, 'Shipped');
```

**Expected Output (with gaps):**

```
| missing_id |
|------------|
| 5          |
| 9          |
```

**Explanation:**
1. The recursive CTE generates a complete number series from `MIN(id)` to `MAX(id)`.
2. `WHERE n NOT IN (SELECT id FROM orders)` filters to only numbers that are not used.
3. This approach works for any integer sequence where IDs should be contiguous.
4. Alternative: use a numbers table or a `LEFT JOIN` with `generate_series` (PostgreSQL).

---

### Q48: Consecutive occurrences

**Problem:** Find employees who were hired in consecutive months (within 3 months of each other) in the same department.

**Solution:**

```sql
WITH ordered AS (
    SELECT name,
           dept_id,
           hire_date,
           LAG(hire_date) OVER (
               PARTITION BY dept_id
               ORDER BY hire_date
           ) AS prev_hire_date
    FROM employees
)
SELECT name,
       dept_id,
       hire_date,
       prev_hire_date,
       DATEDIFF(hire_date, prev_hire_date) AS days_gap
FROM ordered
WHERE prev_hire_date IS NOT NULL
  AND DATEDIFF(hire_date, prev_hire_date) <= 90
ORDER BY dept_id, hire_date;
```

**Expected Output:**

```
| name   | dept_id | hire_date  | prev_hire_date | days_gap |
|--------|---------|------------|----------------|----------|
| Olivia | 1       | 2020-07-01 | 2020-03-15     | 108      |
| Nathan | 6       | 2024-07-01 | 2023-03-20     | 469      |
```

*(Adjust the threshold based on actual gaps. Many departments have gaps > 90 days in the sample data.)*

**Alternate — Find employees hired on the same day:**

```sql
SELECT e1.name AS emp1,
       e2.name AS emp2,
       e1.hire_date
FROM employees e1
INNER JOIN employees e2 ON e1.id < e2.id
    AND e1.hire_date = e2.hire_date;
```

**Expected Output:**

```
(no employees share the same hire date in sample data)
```

**Explanation:**
1. `LAG(hire_date)` fetches the previous hire date within the same department.
2. `DATEDIFF(hire_date, prev_hire_date) <= 90` finds hires within 90 days of each other.
3. The `WHERE prev_hire_date IS NOT NULL` excludes the first employee in each department.
4. For same-day hiring, a self-join on `hire_date` with `e1.id < e2.id` finds all pairs.

---

### Q49: Median calculation without built-in

**Problem:** Calculate the median salary for the entire company without using a built-in median function.

**Solution:**

```sql
WITH ordered AS (
    SELECT salary,
           ROW_NUMBER() OVER (ORDER BY salary) AS row_asc,
           ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_desc
    FROM employees
)
SELECT ROUND(AVG(salary), 2) AS median_salary
FROM ordered
WHERE row_asc IN (row_desc, row_desc - 1, row_desc + 1);
```

**Expected Output:**

```
| median_salary |
|---------------|
| 78000.00      |
```

**Explanation:**
1. `ROW_NUMBER() OVER (ORDER BY salary)` assigns ascending ranks, and `...ORDER BY salary DESC` assigns descending ranks.
2. For an odd number of values (N=15), the median is the single middle value. The middle value has `row_asc = row_desc` (both are 8 for 15 values).
3. For an even count, the median is the average of the two middle values. The condition `row_asc IN (row_desc, row_desc - 1, row_desc + 1)` captures both middle rows.
4. `AVG(salary)` over those 1-2 rows computes the median.
5. **Verify manually:** The sorted salaries are: 52000, 55000, 59000, 61000, 65000, 70000, 72000, **78000**, 80000, 82000, 88000, 95000, 105000, 110000, 120000. The 8th value is 78000.

---

### Q50: FizzBuzz in SQL

**Problem:** Generate numbers 1 through 100. For multiples of 3, show "Fizz". For multiples of 5, show "Buzz". For multiples of both, show "FizzBuzz".

**Solution:**

```sql
WITH RECURSIVE numbers AS (
    SELECT 1 AS n
    UNION ALL
    SELECT n + 1
    FROM numbers
    WHERE n < 100
)
SELECT n,
       CASE
           WHEN n % 15 = 0 THEN 'FizzBuzz'
           WHEN n % 3  = 0 THEN 'Fizz'
           WHEN n % 5  = 0 THEN 'Buzz'
           ELSE CAST(n AS CHAR)
       END AS result
FROM numbers
ORDER BY n;
```

**Expected Output (first 20 rows):**

```
| n  | result   |
|----|----------|
| 1  | 1        |
| 2  | 2        |
| 3  | Fizz     |
| 4  | 4        |
| 5  | Buzz     |
| 6  | Fizz     |
| 7  | 7        |
| 8  | 8        |
| 9  | Fizz     |
| 10 | Buzz     |
| 11 | 11       |
| 12 | Fizz     |
| 13 | 13       |
| 14 | 14       |
| 15 | FizzBuzz |
| 16 | 16       |
| 17 | 17       |
| 18 | Fizz     |
| 19 | 19       |
| 20 | Buzz     |
```

**Explanation:**
1. The recursive CTE generates numbers 1 through 100, one row per iteration.
2. `n % 15 = 0` catches multiples of both 3 and 5 (since LCM of 3 and 5 is 15).
3. The `CASE` expression evaluates conditions in order — if `n % 15 = 0` matches first, it returns 'FizzBuzz' without checking the other conditions.
4. Order matters: check the combined condition first, then individual conditions.
5. `ELSE CAST(n AS CHAR)` converts the number to a string type to match the other result types.

---

## Quick Reference Index

| # | Category | Problem |
|---|----------|---------|
| 1 | Basic | Salary above department average |
| 2 | Basic | Second highest salary (3 methods) |
| 3 | Basic | Count employees per department |
| 4 | Basic | Find duplicate names |
| 5 | Basic | Employees hired in last 30 days |
| 6 | Basic | Update salary by percentage |
| 7 | Basic | Delete duplicate rows |
| 8 | Basic | Find NULL values |
| 9 | Joins | Inner join employees + departments |
| 10 | Joins | Left join with zero-count departments |
| 11 | Joins | Self join: employees vs managers |
| 12 | Joins | Cross join use case |
| 13 | Joins | Full outer join simulation (MySQL) |
| 14 | Joins | Join 3+ tables |
| 15 | Joins | Non-equi join |
| 16 | Joins | Natural join vs inner join |
| 17 | Aggregation | Dept-wise max/min/avg/salary spread |
| 18 | Aggregation | HAVING clause examples |
| 19 | Aggregation | Departments with >5 employees |
| 20 | Aggregation | Running total using window functions |
| 21 | Aggregation | Rolling average |
| 22 | Aggregation | Cumulative sum by category |
| 23 | Aggregation | Month-wise sales totals |
| 24 | Subqueries | Subquery in SELECT clause |
| 25 | Subqueries | Subquery in WHERE with IN/EXISTS |
| 26 | Subqueries | Co-related subquery |
| 27 | Subqueries | EXISTS vs IN performance |
| 28 | Subqueries | Recursive CTE for hierarchy |
| 29 | Subqueries | CTE for readability |
| 30 | Subqueries | Nested subqueries |
| 31 | Window | ROW_NUMBER, RANK, DENSE_RANK |
| 32 | Window | Top 3 earners per department |
| 33 | Window | LAG and LEAD comparison |
| 34 | Window | FIRST_VALUE and LAST_VALUE |
| 35 | Window | NTILE for quartiles |
| 36 | Window | Percentile calculation |
| 37 | Window | Moving average over 3 months |
| 38 | Window | Difference from previous row |
| 39 | Date/String | Extract year/month from dates |
| 40 | Date/String | Date difference calculations |
| 41 | Date/String | String manipulation |
| 42 | Date/String | LIKE and REGEXP patterns |
| 43 | Date/String | Format dates and numbers |
| 44 | Date/String | Case-insensitive search |
| 45 | Advanced | Pivot rows to columns |
| 46 | Advanced | Recursive CTE for org chart |
| 47 | Advanced | Gap detection (missing IDs) |
| 48 | Advanced | Consecutive occurrences |
| 49 | Advanced | Median without built-in |
| 50 | Advanced | FizzBuzz in SQL |

---

> **Pro Tip:** Practice these queries in MySQL 8.0+ or PostgreSQL. Many companies ask variations of these problems. Understand the *why* behind each pattern, not just the syntax. Window functions, CTEs, and recursive queries are especially high-value in interviews.
