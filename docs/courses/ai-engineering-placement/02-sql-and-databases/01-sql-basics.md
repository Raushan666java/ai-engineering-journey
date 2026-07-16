# SQL Basics � SELECT, WHERE, ORDER BY, DML

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Query data with SELECT and filter rows with WHERE |
| LO2 | Sort results with ORDER BY and limit with LIMIT/OFFSET |
| LO3 | Insert new rows with INSERT and update data with UPDATE |
| LO4 | Delete rows with DELETE and understand TRUNCATE |
| LO5 | Use WHERE operators: =, <, IN, BETWEEN, LIKE, IS NULL |
| LO6 | Combine conditions with AND, OR, NOT and precedence |

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 1.1 | SELECT Queries | SELECT, FROM, *, column aliases |
| 1.2 | WHERE Clauses | comparison, IN, BETWEEN, LIKE |
| 1.3 | Sorting & Limiting | ORDER BY, ASC/DESC, LIMIT, OFFSET |
| 1.4 | NULL Handling | IS NULL, IS NOT NULL, COALESCE |
| 1.5 | DML � INSERT | INSERT INTO, multi-row, DEFAULT |
| 1.6 | DML � UPDATE & DELETE | UPDATE SET, DELETE, TRUNCATE |

## Chapter Roadmap

`mermaid
flowchart LR
    A[SELECT] --> B[FROM table]
    B --> C[WHERE conditions]
    C --> D[ORDER BY]
    D --> E[LIMIT/OFFSET]
    F[DML] --> G[INSERT]
    F --> H[UPDATE]
    F --> I[DELETE]
`

## 1.1 SELECT Queries

SELECT retrieves rows from a table.

`sql
SELECT * FROM employees;
SELECT first_name, last_name, salary FROM employees;
SELECT first_name AS "First Name", salary * 12 AS annual FROM employees;
SELECT DISTINCT department_id FROM employees;
`

**Python simulation**:

`python
import sqlite3
conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE emp (id, name, salary, dept)")
cur.executemany("INSERT INTO emp VALUES (?,?,?,?)", [
    (1, "Alice", 75000, "Eng"), (2, "Bob", 68000, "Eng"),
    (3, "Charlie", 82000, "Sales"),
])
cur.execute("SELECT name, salary FROM emp WHERE salary > 70000")
for row in cur.fetchall():
    print(row)
# ('Alice', 75000) ('Charlie', 82000)
`

## 1.2 WHERE Clauses

`sql
SELECT * FROM products WHERE price > 100;
SELECT * FROM products WHERE price = 49.99;
SELECT * FROM products WHERE price <> 0;
SELECT * FROM employees WHERE dept_id IN (3, 5, 7);
SELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31';
SELECT * FROM customers WHERE email LIKE '%@gmail.com';
SELECT * FROM employees WHERE name LIKE '%son%';
SELECT * FROM products WHERE sku LIKE 'A___';
SELECT * FROM employees WHERE dept_id = 3 AND salary > 70000;
SELECT * FROM products WHERE category = 'Electronics' OR category = 'Books';
SELECT * FROM orders WHERE NOT status = 'Cancelled';
SELECT * FROM employees WHERE (dept_id = 3 OR dept_id = 5) AND salary > 60000;
`

## 1.3 Sorting & Limiting

`sql
SELECT name, price FROM products ORDER BY price;
SELECT name, price FROM products ORDER BY price DESC;
SELECT last_name, first_name FROM employees ORDER BY salary DESC, last_name;
SELECT * FROM products ORDER BY price DESC LIMIT 10;
SELECT * FROM products ORDER BY price DESC LIMIT 10 OFFSET 20;
`

**Python example**:

`python
conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE scores (name, score)")
cur.executemany("INSERT INTO scores VALUES (?,?)", [("Alice",95),("Bob",87),("Charlie",92)])
cur.execute("SELECT name, score FROM scores ORDER BY score DESC LIMIT 2")
for r in cur.fetchall():
    print(f"{r[0]}: {r[1]}")
# Alice: 95, Charlie: 92
`

## 1.4 NULL Handling

`sql
SELECT * FROM employees WHERE manager_id IS NULL;
SELECT * FROM customers WHERE email IS NOT NULL;
SELECT name, COALESCE(phone, email, 'No contact') AS contact FROM customers;
SELECT * FROM products WHERE price < 100;  -- excludes NULL prices
`

**Python**:

`python
conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE users (id, name, email)")
cur.execute("INSERT INTO users VALUES (1, 'Alice', 'a@test.com')")
cur.execute("INSERT INTO users VALUES (2, 'Bob', NULL)")
cur.execute("SELECT name, COALESCE(email, 'No email') FROM users")
for r in cur.fetchall():
    print(f"{r[0]}: {r[1]}")
# Alice: a@test.com
# Bob: No email
`

## 1.5 INSERT

`sql
INSERT INTO employees (first_name, last_name, salary, dept_id)
VALUES ('Eve', 'Wilson', 65000, 3);

INSERT INTO departments (name, location) VALUES
    ('Engineering', 'Building A'),
    ('Sales', 'Building B');

INSERT INTO high_value_customers (id, name, total)
SELECT id, name, total_spent FROM customers WHERE total_spent > 10000;

INSERT INTO users (id, name) VALUES (1, 'Alice')
ON CONFLICT(id) DO UPDATE SET name = EXCLUDED.name;
`

## 1.6 UPDATE & DELETE

`sql
UPDATE employees SET salary = 80000 WHERE employee_id = 5;
UPDATE products SET price = price * 1.1 WHERE category = 'Electronics';
DELETE FROM employees WHERE employee_id = 10;
DELETE FROM logs;          -- slow for large tables
TRUNCATE TABLE temp_data;  -- fast, DDL, non-recoverable
`

**Python**:

`python
conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE emp(id, name, salary)")
cur.executemany("INSERT INTO emp VALUES (?,?,?)", [(1,"Alice",50000),(2,"Bob",60000)])
cur.execute("UPDATE emp SET salary = 55000 WHERE id = 1")
conn.commit()
print(f"Updated: {cur.rowcount} rows")
cur.execute("DELETE FROM emp WHERE salary < 55000")
print(f"Deleted: {cur.rowcount} rows")
`

## TypeScript Parallel

`	ypescript
import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function query() {
    const db = await open({ filename: ":memory:", driver: sqlite3.Database });
    await db.exec("CREATE TABLE emp (id, name, salary)");
    await db.run("INSERT INTO emp VALUES (1, 'Alice', 75000)");
    const rows = await db.all("SELECT name, salary FROM emp WHERE salary > 70000");
    console.log(rows);
    await db.close();
}
`

## Summary

- SELECT retrieves data; WHERE filters rows
- AND has higher precedence than OR � use parentheses
- ORDER BY sorts results; ASC default, DESC for descending
- LIMIT restricts rows; OFFSET for pagination
- NULL is not equal to anything � use IS NULL
- INSERT adds rows; multi-row VALUES is faster
- UPDATE modifies rows; always include WHERE
- DELETE is DML (can rollback); TRUNCATE is DDL (cannot)
- COALESCE returns first non-null value
- LIKE uses % (any) and _ (one char) wildcards

## Practical Takeaways

| Scenario | Do This | Avoid |
|----------|---------|-------|
| All columns | List column names | SELECT * |
| String search | column LIKE '%pattern%' | column = '%pattern%' |
| NULL check | column IS NULL | column = NULL |
| Pagination | LIMIT 10 OFFSET 20 | Fetching all rows |
| Update caution | Always include WHERE | UPDATE without WHERE |
| Multi-row insert | Single INSERT multiple VALUES | Multiple single INSERTs |

## Interview Q&A

<details class="tp-qa-card" data-qid="sql-s01-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: Order of SQL query execution?</summary>
  <div class="tp-qa-answer"><p>FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT. Explains why aliases can't be used in WHERE.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s01-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: DELETE vs TRUNCATE?</summary>
  <div class="tp-qa-answer"><p>DELETE: DML, rollback, triggers, slower, WHERE clause. TRUNCATE: DDL, no rollback, no triggers, fast, resets auto-increment.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s01-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: NULL behavior in SQL?</summary>
  <div class="tp-qa-answer"><p>NULL means unknown. NULL = NULL yields NULL (not True). Use IS NULL/IS NOT NULL. Arithmetic with NULL yields NULL. Aggregates ignore NULL (except COUNT(*)).</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s01-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: LIKE '%test%' matches?</summary>
  <div class="tp-qa-answer"><p>% matches any sequence; _ matches one char. %test% matches any string containing test. test% matches strings starting with test.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s01-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: CHAR vs VARCHAR?</summary>
  <div class="tp-qa-answer"><p>CHAR(n): fixed-length, padded with spaces. VARCHAR(n): variable-length up to n. CHAR faster for fixed codes; VARCHAR space-efficient for variable text.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s01-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: Pagination in SQL?</summary>
  <div class="tp-qa-answer"><p>LIMIT 20 OFFSET 40 for page 3 (20 items/page). Keyset pagination (WHERE id > last_id) is more efficient for large datasets than OFFSET.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s01-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: What does COALESCE do?</summary>
  <div class="tp-qa-answer"><p>Returns first non-null value: COALESCE(NULL, NULL, 'default') returns 'default'. Useful for NULL handling and providing defaults.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s01-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: Rename columns in output?</summary>
  <div class="tp-qa-answer"><p>Use AS aliases: SELECT first_name AS "First Name". Aliases work in ORDER BY but not WHERE (execution order).</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s01-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: IN vs EXISTS?</summary>
  <div class="tp-qa-answer"><p>IN checks value in list/subquery. EXISTS checks if subquery returns rows. EXISTS can short-circuit and handles NULLs better, often faster.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s01-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: Insert and get generated ID?</summary>
  <div class="tp-qa-answer"><p>PostgreSQL: INSERT ... RETURNING id. MySQL: LAST_INSERT_ID(). SQLite: last_insert_rowid(). Python: cur.lastrowid.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which clause filters rows before grouping? a) HAVING b) WHERE c) FILTER d) GROUP BY

<details class="tp-qa-card" data-qid="sql-s01-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) WHERE</strong></p></div></details>

**Q2**: LIKE 'A_' matches? a) starts with A b) A + 1 char c) A + 0+ chars d) any A

<details class="tp-qa-card" data-qid="sql-s01-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) A followed by exactly 1 character</strong></p></div></details>

**Q3**: Check for NULL? a) = NULL b) IS NULL c) == NULL d) EQUALS NULL

<details class="tp-qa-card" data-qid="sql-s01-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) IS NULL</strong></p></div></details>

**Q4**: True about TRUNCATE? a) Can rollback b) Fires triggers c) DDL d) WHERE clause

<details class="tp-qa-card" data-qid="sql-s01-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) DDL statement</strong></p></div></details>

**Q5**: SELECT 5 + NULL returns? a) 5 b) NULL c) 0 d) Error

<details class="tp-qa-card" data-qid="sql-s01-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) NULL</strong></p></div></details>

## Exercises

**Easy** � Query all customers from 2024 orders sorted by date descending.
**Easy** � Insert 3 new products into a products table.
**Medium** � Find employees with salary 50k-100k in Engineering or Sales, ordered by salary desc.
**Medium** � Give 10% bonus to dept 5 employees. Delete employees hired before 2000.
**Hard** � Paginate products table (25/page, page 4, by price).
**Hard** � Convert Python list comprehension to SQL: [o for o in orders if o.status=='pending' and o.amount>100][:20]

## 1.7 Data Definition Language (DDL)

DDL creates and modifies database structure.

`sql
-- CREATE TABLE
CREATE TABLE employees (
    employee_id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    hire_date DATE NOT NULL DEFAULT CURRENT_DATE,
    salary DECIMAL(10,2) CHECK (salary > 0),
    department_id INTEGER,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- ALTER TABLE
ALTER TABLE employees ADD COLUMN phone VARCHAR(20);
ALTER TABLE employees RENAME COLUMN phone TO contact_number;
ALTER TABLE employees DROP COLUMN contact_number;  -- SQLite: not supported
ALTER TABLE employees RENAME TO staff;

-- DROP TABLE
DROP TABLE IF EXISTS temp_data;

-- CREATE INDEX
CREATE INDEX idx_employees_dept ON employees(department_id);
CREATE UNIQUE INDEX idx_employees_email ON employees(email);
CREATE INDEX idx_employees_name ON employees(last_name, first_name);

-- CREATE VIEW
CREATE VIEW high_earners AS
SELECT first_name, last_name, salary, department_id
FROM employees
WHERE salary > 80000;
`

## 1.8 Constraints

`sql
-- NOT NULL: column must have a value
CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL
);

-- UNIQUE: all values in column must be different
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE
);

-- PRIMARY KEY: NOT NULL + UNIQUE (one per table)
CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id INTEGER NOT NULL,
    order_date DATE DEFAULT CURRENT_DATE
);

-- FOREIGN KEY: references primary key in another table
CREATE TABLE order_items (
    item_id INTEGER PRIMARY KEY,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
        ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
        ON DELETE RESTRICT
);

-- CHECK: validates data before insert/update
CREATE TABLE accounts (
    id INTEGER PRIMARY KEY,
    balance DECIMAL(10,2) CHECK (balance >= 0),
    account_type VARCHAR(20) CHECK (account_type IN ('savings', 'checking', 'credit'))
);

-- DEFAULT: provides default value
CREATE TABLE logs (
    id INTEGER PRIMARY KEY,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    severity INTEGER DEFAULT 1
);
`

## 1.9 Working with Indexes

Indexes speed up data retrieval at the cost of slower writes.

`sql
-- When to use indexes:
-- 1. Columns used frequently in WHERE clauses
-- 2. Columns used in JOIN conditions
-- 3. Columns used in ORDER BY
-- 4. Columns with high cardinality (many unique values)

-- Creating indexes
CREATE INDEX idx_orders_customer ON orders(customer_id);
CREATE INDEX idx_orders_date ON orders(order_date);

-- Composite indexes (column order matters!)
CREATE INDEX idx_orders_customer_date ON orders(customer_id, order_date);
-- This index helps: WHERE customer_id = ? AND order_date BETWEEN ? AND ?
-- This index does NOT help: WHERE order_date BETWEEN ? AND ?

-- Index analysis (PostgreSQL)
-- EXPLAIN ANALYZE SELECT * FROM employees WHERE department_id = 5;

-- Partial indexes
CREATE INDEX idx_active_employees ON employees(employee_id)
WHERE status = 'active';

-- Covering indexes (include all needed columns)
CREATE INDEX idx_employee_names ON employees(last_name, first_name)
INCLUDE (email, department_id);

-- View existing indexes
-- PostgreSQL: SELECT * FROM pg_indexes WHERE tablename = 'employees';
-- SQLite: .indexes employees
-- MySQL: SHOW INDEX FROM employees;
`

## 1.10 Transactions

Transactions ensure data consistency with ACID properties.

`sql
-- Basic transaction
BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;  -- or ROLLBACK;

-- Savepoints for partial rollback
BEGIN;
INSERT INTO logs (message) VALUES ('Step 1');
SAVEPOINT sp1;
INSERT INTO logs (message) VALUES ('Step 2');
ROLLBACK TO sp1;  -- undo Step 2, keep Step 1
COMMIT;

-- Transaction isolation levels (PostgreSQL)
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

-- ACID properties:
-- Atomicity: all or nothing
-- Consistency: data remains valid
-- Isolation: concurrent transactions don't interfere
-- Durability: committed changes persist
`

`python
import sqlite3

conn = sqlite3.connect("example.db")
try:
    with conn:  # auto-commit/rollback
        conn.execute("UPDATE accounts SET balance = balance - 100 WHERE id = 1")
        conn.execute("UPDATE accounts SET balance = balance + 100 WHERE id = 2")
except sqlite3.Error as e:
    print(f"Transaction failed: {e}")
`

## 1.11 Common Pitfalls

`sql
-- Pitfall 1: SELECT * in production
SELECT * FROM employees;  -- BAD: returns all columns, order-dependent
SELECT id, name, email FROM employees;  -- GOOD: explicit columns

-- Pitfall 2: Missing WHERE in UPDATE/DELETE
UPDATE employees SET salary = 50000;  -- updates ALL rows!
DELETE FROM employees;  -- deletes ALL rows!

-- Pitfall 3: NULL comparisons
SELECT * FROM employees WHERE salary = NULL;  -- WRONG: returns nothing
SELECT * FROM employees WHERE salary IS NULL;  -- CORRECT

-- Pitfall 4: String comparisons with trailing spaces
SELECT * FROM users WHERE name = 'Alice';  -- may not match 'Alice '

-- Pitfall 5: Implicit type conversion
SELECT * FROM orders WHERE order_date = '2024-01-01';
-- Better: WHERE order_date = DATE '2024-01-01'

-- Pitfall 6: Not understanding execution order
SELECT id, salary * 1.1 AS new_salary
FROM employees
-- WHERE new_salary > 80000  -- WRONG: alias not yet available
HAVING new_salary > 80000  -- OK in some DBs (not standard)
ORDER BY new_salary;  -- OK: ORDER BY can use alias

-- Pitfall 7: Forgetting to COMMIT transactions
BEGIN;
UPDATE inventory SET quantity = quantity - 1 WHERE product_id = 10;
-- Missing COMMIT: other sessions see old data
`

## 1.12 Real-World Query Examples

`sql
-- Customer order summary
SELECT
    c.customer_id,
    c.name,
    COUNT(o.order_id) AS total_orders,
    COALESCE(SUM(o.total_amount), 0) AS total_spent,
    MAX(o.order_date) AS last_order_date,
    CASE
        WHEN COUNT(o.order_id) = 0 THEN 'New'
        WHEN MAX(o.order_date) >= DATE('now', '-90 days') THEN 'Active'
        ELSE 'Inactive'
    END AS customer_status
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id
ORDER BY total_spent DESC;

-- Product inventory report
SELECT
    p.product_id,
    p.name,
    p.category,
    p.price,
    COALESCE(i.quantity, 0) AS stock,
    CASE
        WHEN COALESCE(i.quantity, 0) = 0 THEN 'Out of Stock'
        WHEN COALESCE(i.quantity, 0) < 10 THEN 'Low Stock'
        ELSE 'In Stock'
    END AS stock_status
FROM products p
LEFT JOIN inventory i ON p.product_id = i.product_id
ORDER BY stock_status, p.name;

-- Paginated search with total count
SELECT *
FROM (
    SELECT *, COUNT(*) OVER() AS total_count
    FROM products
    WHERE name LIKE '%search%'
) AS search_results
ORDER BY price
LIMIT 20 OFFSET 40;
-- Returns items 41-60 along with total count
`

---

> **Next**: [02 -- Aggregate Functions ?](02-aggregate-functions.md)
