<!-- Clear Language: Keep sentences under 50 words -->
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

## Introduction

Data is the fuel of AI. SQL and database design skills let you query, transform, and store the data that powers machine learning models. This module covers everything from basic queries to advanced indexing and optimization.




## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding sql basics is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how sql basics works in practice.



## Examples

### Basic Example

```python

## Basic sql basics example
def example():
    """Demonstrate sql basics"""
    result = "Hello, sql basics!"
    print(result)
    return result

example()
```text

### Expected Output

```text
Hello, sql basics!
```text

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

```mermaid
flowchart LR
    A[SELECT] --> B[FROM table]
    B --> C[WHERE conditions]
    C --> D[ORDER BY]
    D --> E[LIMIT/OFFSET]
    F[DML] --> G[INSERT]
    F --> H[UPDATE]
    F --> I[DELETE]
```text

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

## ('Alice', 75000) ('Charlie', 82000)
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

## Alice: 95, Charlie: 92
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

## Alice: a@test.com

## Bob: No email
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

## Visual Analogy

Think of a SQL database like a **library card catalog system**:

- **Tables** = Bookshelves — each shelf holds a specific category (employees, products, orders).
- **Rows** = Individual books on the shelf — each row is one record, like a single employee or product.
- **Columns** = Book attributes — title, author, year, genre. Each column stores one type of information about every book.
- **SELECT** = Asking the librarian "show me all books by Author X" — you specify what you want to see.
- **WHERE** = Filtering criteria — "only books published after 2020" narrows down the results.
- **INSERT** = Adding a new book to the shelf.
- **UPDATE** = Editing a book's record card (changing the author's address).
- **DELETE** = Removing a book from the shelf entirely.

This helps because databases are fundamentally organized storage, just like a library. The card catalog (indexes) helps you find books quickly without scanning every shelf, and SQL is the language you use to talk to the librarian.

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


### True/False

**T/F 1**: This topic is fundamental to AI engineering.
**Answer**: True — Understanding sql and databases is essential for building production AI systems.

**T/F 2**: The concepts in this chapter are only used in interviews.
**Answer**: False — These concepts are used daily in real-world AI engineering work.

**T/F 3**: Time/space complexity analysis applies to sql and databases.
**Answer**: True — Every algorithm and system has performance characteristics to analyze.

**T/F 4**: sql and databases concepts are independent of each other.
**Answer**: False — Most concepts build on each other and are interconnected.

**T/F 5**: Real-world applications often combine multiple concepts from this chapter.
**Answer**: True — Production systems use combinations of these fundamental concepts.

### Fill in the Blank

**FIB 1**: The key concept in this chapter is ________.
**Answer**: [Review the chapter's Learning Objectives for the specific answer]

**FIB 2**: In sql and databases, the time complexity of the basic operation is ________.
**Answer**: [Depends on the specific operation — check the Theory section]

### Scenario Questions

**Scenario 1**: How would you apply the concepts from this chapter in a real AI engineering project?

**Answer**: [Think about how the specific topic applies to: data processing pipelines, model training infrastructure, production systems, or interview scenarios]

### Output Questions

**Output 1**: What is the time complexity of the main algorithm discussed in this chapter?
**Answer**: [Check the Theory section for the specific complexity analysis]

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
- [ ] Have questions ready about how the company uses 02-sql-and-databases> **Next**: [02 -- Aggregate Functions ?](02-aggregate-functions.md)


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

**Q: How long does it take to master sql basics?
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

Understanding the evolution of sql basics helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

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

For AI engineering, understanding sql basics at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of sql basics like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply sql basics concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of sql basics?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply sql basics in real systems?
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
