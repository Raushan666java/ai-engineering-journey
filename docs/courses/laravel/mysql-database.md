# MySQL & Database Design

---

## Learning Objectives

- Explain the relational model: tables, rows, columns, keys, and relationships
- Write complete SQL queries using SELECT, JOIN, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT, subqueries, and UNION
- Create and modify database schemas with DDL statements including constraints and indexes
- Manipulate data with INSERT, UPDATE, DELETE, and transactional controls
- Analyze and optimize query performance using EXPLAIN and indexing strategies
- Normalize a database through 1NF, 2NF, and 3NF and recognize when denormalization is warranted
- Implement database design patterns idiomatic to Laravel: polymorphic tables, pivot tables, JSON columns, enums
- Understand migration concepts: schema versioning, up/down methods, and seeding
- Apply performance best practices: connection pooling, read replicas, query caching

## Chapter at a Glance

| Aspect | Details |
|--------|---------|
| **Scope** | MySQL & database design: relational model, SQL queries, normalization, indexing, Laravel integration |
| **Key Concepts** | Relational model, SQL DDL/DML, JOINs, normalization, indexing, transactions, Laravel migrations |
| **Learning Approach** | Theory, SQL examples, Laravel migration patterns |
| **Skills Required** | Basic programming, SQL fundamentals |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Theory & Concepts]
    B[Data Models]
    C[Agent Implementation]
    D[Integration Patterns]
    E[Best Practices]
    A --> B
    B --> C
    C --> D
    D --> E
```

## Chapter at a Glance

| Aspect | Details |
|--------|---------|
| **Scope** | MySQL & database design: relational model, SQL queries, normalization, indexing, Laravel integration |
| **Key Concepts** | Relational model, SQL DDL/DML, JOINs, normalization, indexing, transactions, Laravel migrations |
| **Learning Approach** | Theory, SQL examples, Laravel migration patterns |
| **Skills Required** | Basic programming, SQL fundamentals |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Theory & Concepts]
    B[Data Models]
    C[Agent Implementation]
    D[Integration Patterns]
    E[Best Practices]
    A --> B
    B --> C
    C --> D
    D --> E
```

## Chapter at a Glance

| Aspect | Details |
|--------|---------|
| **Scope** | MySQL & database design: relational model, SQL queries, normalization, indexing, Laravel integration |
| **Key Concepts** | Relational model, SQL DDL/DML, JOINs, normalization, indexing, transactions, Laravel migrations |
| **Learning Approach** | Theory, SQL examples, Laravel migration patterns |
| **Skills Required** | Basic programming, SQL fundamentals |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Theory & Concepts]
    B[Data Models]
    C[Agent Implementation]
    D[Integration Patterns]
    E[Best Practices]
    A --> B
    B --> C
    C --> D
    D --> E
```

## Chapter at a Glance

| Aspect | Details |
|--------|---------|
| **Scope** | MySQL & database design: relational model, SQL queries, normalization, indexing, Laravel integration |
| **Key Concepts** | Relational model, SQL DDL/DML, JOINs, normalization, indexing, transactions, Laravel migrations |
| **Learning Approach** | Theory, SQL examples, Laravel migration patterns |
| **Skills Required** | Basic programming, SQL fundamentals |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Theory & Concepts]
    B[Data Models]
    C[Agent Implementation]
    D[Integration Patterns]
    E[Best Practices]
    A --> B
    B --> C
    C --> D
    D --> E
```

---

## Theory
> **One-Sentence Takeaway:** Theory is the foundation → master it before moving to examples and exercises.
> **One-Sentence Takeaway:** Theory is the foundation → master it before moving to examples and exercises.
> **One-Sentence Takeaway:** Theory is the foundation → master it before moving to examples and exercises.
> **One-Sentence Takeaway:** Theory is the foundation → master it before moving to examples and exercises.

![MySQL Database](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/mysql-database.png)


### 1 Relational Database Fundamentals

A relational database organizes data into **tables** (relations) composed of **rows** (records/tuples) and **columns** (fields/attributes). Each table represents an entity type Ã¢â‚¬â€ `users`, `orders`, `products` Ã¢â‚¬â€ and each row represents a single instance of that entity.

#### 1.1 Tables, Rows, and Columns

A table is defined by its schema: the set of column names and their data types. A row is a single entry that conforms to that schema.

```sql
CREATE TABLE users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    age INT UNSIGNED NULL DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

Each column has a **data type** that constrains the kind of data it can hold:

| Category    | Types                                    | Use Case              |
|-------------|------------------------------------------|-----------------------|
| Numeric     | `TINYINT`, `INT`, `BIGINT`, `DECIMAL`    | Counts, IDs, money    |
| String      | `CHAR`, `VARCHAR`, `TEXT`, `ENUM`        | Names, descriptions   |
| Date/Time   | `DATE`, `TIME`, `DATETIME`, `TIMESTAMP`  | Timelines, logs       |
| Binary      | `BLOB`, `BINARY`                         | Files, hashes         |
| JSON        | `JSON`                                   | Flexible structured   |

```sql
INSERT INTO users (name, email, password, age)
VALUES ('Alice Johnson', 'alice@example.com', '$2y$10$...hashed...', 28);

SELECT id, name, email, age FROM users WHERE age > 18;
```

#### 1.2 Primary Keys

Every table should have a **primary key** Ã¢â‚¬â€ a column (or set of columns) that uniquely identifies each row. Primary keys enforce entity integrity and are indexed automatically.

```sql
CREATE TABLE countries (
    code CHAR(2) PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE posts (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL
);

CREATE TABLE course_student (
    course_id BIGINT UNSIGNED NOT NULL,
    student_id BIGINT UNSIGNED NOT NULL,
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (course_id, student_id)
);
```

Laravel conventions expect an `id` column of type `BIGINT UNSIGNED AUTO_INCREMENT` as the primary key. This is what `$table->id()` creates in a migration.

#### 1.3 Foreign Keys

A **foreign key** links rows across tables, enforcing **referential integrity**. A value in the child table must exist in the parent table's primary key (or be NULL).

```sql
CREATE TABLE authors (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE books (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author_id BIGINT UNSIGNED NOT NULL,
    published_year YEAR NOT NULL,
    CONSTRAINT fk_books_author
        FOREIGN KEY (author_id) REFERENCES authors(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
```

The `ON DELETE` and `ON UPDATE` clauses define referential actions:

| Clause         | Behavior                                                |
|----------------|---------------------------------------------------------|
| `CASCADE`      | Propagate change to child rows                          |
| `SET NULL`     | Set child FK to NULL                                    |
| `RESTRICT`     | Prevent deletion/update if children exist               |
| `NO ACTION`    | Same as RESTRICT in MySQL                               |
| `SET DEFAULT`  | Set child FK to its default (not supported by InnoDB)   |

Laravel's migration builder generates the same constraints:

```php
$table->foreignId('author_id')->constrained()->cascadeOnDelete();
```

#### 1.4 Relationships

The relational model defines three fundamental relationship types:

**One-to-One (1:1):** A row in table A relates to exactly one row in table B and vice versa.

```sql
CREATE TABLE users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE profiles (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL UNIQUE,
    bio TEXT NULL,
    avatar_url VARCHAR(500) NULL,
    CONSTRAINT fk_profiles_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
);
```

The `UNIQUE` constraint on `user_id` guarantees the one-to-one cardinality.

**One-to-Many (1:N):** A row in table A relates to many rows in table B. This is the most common relationship.

```sql
CREATE TABLE categories (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE products (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    category_id BIGINT UNSIGNED NOT NULL,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    CONSTRAINT fk_products_category
        FOREIGN KEY (category_id) REFERENCES categories(id)
        ON DELETE CASCADE
);

SELECT c.name AS category, p.name AS product, p.price
FROM categories c
JOIN products p ON p.category_id = c.id
ORDER BY c.name, p.name;
```

**Many-to-Many (N:N):** A row in table A relates to many rows in table B and vice versa. This requires a **pivot (junction) table**.

```sql
CREATE TABLE students (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE courses (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);

CREATE TABLE course_student (
    course_id BIGINT UNSIGNED NOT NULL,
    student_id BIGINT UNSIGNED NOT NULL,
    grade DECIMAL(5, 2) NULL,
    PRIMARY KEY (course_id, student_id),
    CONSTRAINT fk_cs_course
        FOREIGN KEY (course_id) REFERENCES courses(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_cs_student
        FOREIGN KEY (student_id) REFERENCES students(id)
        ON DELETE CASCADE
);

SELECT s.name AS student, c.title AS course, cs.grade
FROM students s
JOIN course_student cs ON cs.student_id = s.id
JOIN courses c ON c.id = cs.course_id
ORDER BY c.title, s.name;
```

In Laravel, many-to-many relationships use `belongsToMany` and convention expects the pivot table name to be singular table names in alphabetical order separated by underscore: `course_student`.

---

### 2 SQL Queries

SQL (Structured Query Language) is the language for interacting with relational databases. Every query in this section is complete and executable against MySQL 8.x.

#### 2.1 SELECT and WHERE

The `SELECT` statement retrieves rows from a table. The `WHERE` clause filters rows before grouping and ordering.

```sql
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    department VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    hire_date DATE NOT NULL,
    active TINYINT(1) NOT NULL DEFAULT 1
);

INSERT INTO employees (first_name, last_name, email, department, salary, hire_date, active) VALUES
('John', 'Smith', 'john.smith@company.com', 'Engineering', 95000.00, '2020-03-15', 1),
('Jane', 'Doe', 'jane.doe@company.com', 'Engineering', 110000.00, '2019-07-01', 1),
('Bob', 'Johnson', 'bob.johnson@company.com', 'Marketing', 72000.00, '2021-01-20', 1),
('Alice', 'Williams', 'alice.williams@company.com', 'Marketing', 78000.00, '2020-11-10', 0),
('Charlie', 'Brown', 'charlie.brown@company.com', 'Sales', 65000.00, '2022-06-05', 1),
('Diana', 'Prince', 'diana.prince@company.com', 'Engineering', 130000.00, '2018-04-22', 1),
('Edward', 'Norton', 'edward.norton@company.com', 'Sales', 68000.00, '2021-09-13', 1),
('Fiona', 'Apple', 'fiona.apple@company.com', 'Marketing', 82000.00, '2019-12-01', 1),
('George', 'Lucas', 'george.lucas@company.com', 'Engineering', 105000.00, '2020-08-17', 0),
('Hannah', 'Montana', 'hannah.montana@company.com', 'Sales', 71000.00, '2022-02-28', 1);

SELECT first_name, last_name, email FROM employees;

SELECT first_name, last_name, salary
FROM employees
WHERE salary > 80000;

SELECT first_name, last_name, department, salary
FROM employees
WHERE department = 'Engineering' AND salary >= 100000;

SELECT first_name, last_name, department
FROM employees
WHERE department = 'Sales' OR department = 'Marketing';

SELECT first_name, last_name, department
FROM employees
WHERE department IN ('Engineering', 'Sales');

SELECT first_name, last_name, salary
FROM employees
WHERE salary BETWEEN 70000 AND 100000;

SELECT first_name, last_name, email
FROM employees
WHERE email LIKE '%.company.com';

SELECT first_name, last_name
FROM employees
WHERE first_name LIKE 'J%';

SELECT first_name, last_name
FROM employees
WHERE email IS NOT NULL;

SELECT DISTINCT department FROM employees;

SELECT first_name AS 'First Name', last_name AS 'Last Name', salary * 1.1 AS 'Raise Amount'
FROM employees;
```

#### 2.2 ORDER BY and LIMIT

`ORDER BY` sorts the result set. `LIMIT` restricts the number of rows returned.

```sql
SELECT first_name, last_name, salary
FROM employees
ORDER BY salary;

SELECT first_name, last_name, salary
FROM employees
ORDER BY salary DESC;

SELECT department, last_name, first_name
FROM employees
ORDER BY department ASC, last_name ASC;

SELECT first_name, last_name, salary
FROM employees
ORDER BY salary DESC
LIMIT 3;

SELECT first_name, last_name, salary
FROM employees
ORDER BY salary DESC
LIMIT 3 OFFSET 3;

SELECT first_name, last_name, salary
FROM employees
ORDER BY salary DESC
LIMIT 3, 3;
```

#### 2.3 JOINs

JOINs combine rows from two or more tables based on related columns.

```sql
CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    budget DECIMAL(12, 2) NOT NULL
);

INSERT INTO departments (name, budget) VALUES
('Engineering', 5000000.00),
('Marketing', 2000000.00),
('Sales', 1500000.00),
('HR', 800000.00),
('Finance', 1200000.00);

ALTER TABLE employees ADD COLUMN department_id INT NULL;
UPDATE employees SET department_id = 1 WHERE department = 'Engineering';
UPDATE employees SET department_id = 2 WHERE department = 'Marketing';
UPDATE employees SET department_id = 3 WHERE department = 'Sales';

INSERT INTO employees (first_name, last_name, email, department, salary, hire_date, active, department_id)
VALUES ('Orphan', 'Record', 'orphan@company.com', 'None', 50000.00, '2023-01-01', 1, NULL);
```

**INNER JOIN:** Returns rows where the join condition matches in both tables.

```sql
SELECT e.first_name, e.last_name, d.name AS department, d.budget
FROM employees e
INNER JOIN departments d ON e.department_id = d.id
ORDER BY e.last_name;

SELECT e.first_name, e.last_name, d.name AS department, e.salary
FROM employees e
INNER JOIN departments d ON e.department_id = d.id
WHERE d.budget > 1000000 AND e.salary > 75000
ORDER BY e.salary DESC;
```

**LEFT JOIN:** Returns all rows from the left table, even when there is no match in the right table.

```sql
SELECT e.first_name, e.last_name, d.name AS department
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id;

SELECT e.first_name, e.last_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id
WHERE d.id IS NULL;
```

**RIGHT JOIN:** Returns all rows from the right table, even when there is no match in the left table.

```sql
SELECT e.first_name, e.last_name, d.name AS department
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.id;

SELECT d.name AS department
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.id
WHERE e.id IS NULL;
```

**CROSS JOIN:** Cartesian product Ã¢â‚¬â€ every row from table A paired with every row from table B.

```sql
SELECT e.first_name, e.last_name, d.name AS department
FROM employees e
CROSS JOIN departments d
WHERE e.department_id IS NULL;

CREATE TABLE job_levels (level TINYINT PRIMARY KEY);
INSERT INTO job_levels VALUES (1), (2), (3), (4), (5);

SELECT d.name AS department, l.level AS job_level
FROM departments d
CROSS JOIN job_levels l
ORDER BY d.name, l.level;
```

**Self-JOIN:** A table joined to itself using aliases.

```sql
ALTER TABLE employees ADD COLUMN manager_id INT NULL;
UPDATE employees SET manager_id = 5 WHERE id IN (1, 3);
UPDATE employees SET manager_id = 6 WHERE id IN (4, 8);
UPDATE employees SET manager_id = 4 WHERE id IN (7, 10);

SELECT
    e.first_name AS employee_first,
    e.last_name AS employee_last,
    m.first_name AS manager_first,
    m.last_name AS manager_last
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id
ORDER BY m.last_name, e.last_name;

SELECT
    e.first_name AS employee,
    e.salary AS employee_salary,
    m.first_name AS manager,
    m.salary AS manager_salary
FROM employees e
INNER JOIN employees m ON e.manager_id = m.id
WHERE e.salary > m.salary;
```

#### 2.4 GROUP BY and HAVING

`GROUP BY` groups rows that share a value in one or more columns, typically for aggregation. `HAVING` filters groups after aggregation.

```sql
SELECT
    COUNT(*) AS total_employees,
    AVG(salary) AS average_salary,
    MAX(salary) AS highest_salary,
    MIN(salary) AS lowest_salary,
    SUM(salary) AS total_payroll
FROM employees;

SELECT
    department,
    COUNT(*) AS employee_count,
    AVG(salary) AS avg_salary,
    SUM(salary) AS total_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC;

SELECT
    department,
    active,
    COUNT(*) AS count,
    AVG(salary) AS avg_salary
FROM employees
GROUP BY department, active
ORDER BY department, active DESC;

SELECT
    department,
    COUNT(*) AS employee_count,
    AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING employee_count >= 3
ORDER BY avg_salary DESC;

SELECT
    department,
    AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 80000;

SELECT
    YEAR(hire_date) AS hire_year,
    COUNT(*) AS hired_count
FROM employees
GROUP BY YEAR(hire_date)
ORDER BY hire_year;
```

#### 2.5 Aggregate Functions

```sql
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'pending'
);

INSERT INTO orders (customer_id, order_date, total, status) VALUES
(1, '2024-01-15', 150.00, 'completed'),
(2, '2024-01-16', 250.00, 'completed'),
(1, '2024-02-01', 89.99, 'completed'),
(3, '2024-02-10', 500.00, 'refunded'),
(1, '2024-03-05', 200.00, 'pending'),
(2, '2024-03-10', 175.50, 'completed'),
(3, '2024-03-15', 320.00, 'pending'),
(4, '2024-03-20', 99.99, 'completed');

CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id)
);

INSERT INTO order_items (order_id, product_name, quantity, unit_price) VALUES
(1, 'Widget A', 2, 50.00),
(1, 'Widget B', 1, 50.00),
(2, 'Gadget X', 1, 250.00),
(3, 'Widget A', 1, 50.00),
(3, 'Gadget X', 1, 39.99),
(4, 'Premium Widget', 1, 500.00),
(5, 'Widget B', 4, 50.00),
(6, 'Gadget X', 1, 175.50),
(7, 'Premium Widget', 1, 320.00),
(8, 'Widget A', 2, 49.995);

SELECT
    o.id AS order_id,
    GROUP_CONCAT(DISTINCT oi.product_name ORDER BY oi.product_name SEPARATOR ', ') AS products,
    COUNT(oi.id) AS item_count
FROM orders o
JOIN order_items oi ON oi.order_id = o.id
GROUP BY o.id;

SELECT
    DATE_FORMAT(order_date, '%Y-%m') AS month,
    COUNT(*) AS order_count,
    COUNT(DISTINCT customer_id) AS unique_customers,
    SUM(total) AS revenue,
    AVG(total) AS avg_order_value,
    MAX(total) AS largest_order,
    MIN(total) AS smallest_order,
    STDDEV(total) AS revenue_volatility
FROM orders
WHERE status = 'completed'
GROUP BY DATE_FORMAT(order_date, '%Y-%m')
ORDER BY month;
```

#### 2.6 Subqueries

A subquery is a query nested inside another query. Subqueries can appear in SELECT, FROM, WHERE, HAVING, and JOIN clauses.

```sql
SELECT first_name, last_name, salary
FROM employees
WHERE department_id IN (
    SELECT id FROM departments WHERE budget > 2000000
);

SELECT first_name, last_name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary) FROM employees
);

SELECT
    first_name,
    last_name,
    salary,
    department,
    ROUND(salary / (SELECT AVG(salary) FROM employees e2 WHERE e2.department = e1.department), 2) AS salary_ratio_to_dept_avg
FROM employees e1;

SELECT
    dept_stats.department,
    dept_stats.employee_count,
    dept_stats.avg_salary
FROM (
    SELECT
        department,
        COUNT(*) AS employee_count,
        AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department
) AS dept_stats
WHERE dept_stats.employee_count > 2;

SELECT e.first_name, e.last_name, e.department, e.salary
FROM employees e
WHERE e.salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE department = e.department
)
ORDER BY e.department, e.salary DESC;

SELECT d.name
FROM departments d
WHERE EXISTS (
    SELECT 1
    FROM employees e
    WHERE e.department_id = d.id AND e.active = 1
);

SELECT d.name
FROM departments d
WHERE NOT EXISTS (
    SELECT 1
    FROM employees e
    WHERE e.department_id = d.id
);
```

#### 2.7 UNION and UNION ALL

`UNION` combines result sets from multiple SELECT statements, removing duplicates. `UNION ALL` keeps duplicates and is faster.

```sql
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);

INSERT INTO contacts (first_name, last_name, email) VALUES
('Irene', 'Adler', 'irene.adler@external.com'),
('John', 'Smith', 'john.smith@company.com'),
('Jack', 'Sparrow', 'jack.sparrow@external.com');

SELECT first_name, last_name, email FROM employees
UNION
SELECT first_name, last_name, email FROM contacts
ORDER BY last_name, first_name;

SELECT first_name, last_name, email FROM employees
UNION ALL
SELECT first_name, last_name, email FROM contacts
ORDER BY last_name, first_name;

SELECT first_name, last_name, email, 'employee' AS source FROM employees
UNION
SELECT first_name, last_name, email, 'contact' AS source FROM contacts
ORDER BY source, last_name;

SELECT first_name, last_name, email, salary, 'employee' AS type FROM employees
UNION
SELECT first_name, last_name, email, NULL AS salary, 'contact' AS type FROM contacts
ORDER BY type, last_name;
```

---

### 3 Data Definition Language (DDL)

DDL statements define and modify database structures: tables, indexes, and constraints.

#### 3.1 CREATE TABLE

```sql
CREATE TABLE IF NOT EXISTS articles (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    author_id BIGINT UNSIGNED NOT NULL,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    body LONGTEXT NULL,
    view_count INT UNSIGNED NOT NULL DEFAULT 0,
    status ENUM('draft', 'published', 'archived') NOT NULL DEFAULT 'draft',
    metadata JSON NULL,
    published_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE INDEX idx_articles_slug (slug),
    CONSTRAINT fk_articles_author
        FOREIGN KEY (author_id) REFERENCES users(id)
        ON DELETE CASCADE,
    CONSTRAINT chk_articles_view_count
        CHECK (view_count >= 0)
)
ENGINE = InnoDB
DEFAULT CHARSET = utf8mb4
COLLATE = utf8mb4_unicode_ci
COMMENT = 'Main content table for the blog';
```

| Option     | Description                                                  |
|-----------|--------------------------------------------------------------|
| `ENGINE`  | Storage engine (`InnoDB` for transactions, FK support)       |
| `CHARSET` | Character set (`utf8mb4` for full Unicode including emoji)   |
| `COLLATE` | Sort/compare rules (`utf8mb4_unicode_ci` for UCA collation)  |
| `COMMENT` | Documentation string for the table                           |

#### 3.2 Data Types in Detail

```sql
CREATE TABLE numeric_examples (
    a TINYINT,
    b SMALLINT,
    c MEDIUMINT,
    d INT,
    e BIGINT,
    f DECIMAL(10, 2),
    g FLOAT(7, 4),
    h DOUBLE(15, 8),
    i BIT(8)
);

CREATE TABLE string_examples (
    a CHAR(10),
    b VARCHAR(255),
    c TINYTEXT,
    d TEXT,
    e MEDIUMTEXT,
    f LONGTEXT,
    g BINARY(32),
    h VARBINARY(255),
    i BLOB,
    j ENUM('small', 'medium', 'large')
);

CREATE TABLE temporal_examples (
    a DATE,
    b TIME(3),
    c DATETIME(6),
    d TIMESTAMP,
    e YEAR
);

CREATE TABLE json_examples (
    id INT AUTO_INCREMENT PRIMARY KEY,
    attributes JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Choosing the Right Type:**

| Scenario                        | Recommended Type              |
|---------------------------------|-------------------------------|
| Primary key for most tables     | `BIGINT UNSIGNED AUTO_INCREMENT` |
| Monetary values                 | `DECIMAL(10, 2)` or `DECIMAL(12, 4)` |
| Short strings (codes, statuses) | `CHAR(2)` or `ENUM(...)`      |
| Variable text (titles, names)   | `VARCHAR(255)`                |
| Long-form content               | `TEXT` or `MEDIUMTEXT`        |
| Flexible structure              | `JSON` (validated natively)   |
| File hashes                     | `BINARY(32)` for SHA-256      |
| Created/updated timestamps      | `TIMESTAMP` with DEFAULT      |

#### 3.3 ALTER TABLE

```sql
ALTER TABLE employees ADD COLUMN phone VARCHAR(20) NULL AFTER email;
ALTER TABLE employees MODIFY COLUMN phone VARCHAR(30) NULL;
ALTER TABLE employees RENAME COLUMN phone TO phone_number;
ALTER TABLE employees CHANGE phone_number mobile_phone VARCHAR(20) NULL;
ALTER TABLE employees DROP COLUMN mobile_phone;

ALTER TABLE books
ADD CONSTRAINT fk_books_author
FOREIGN KEY (author_id) REFERENCES authors(id)
ON DELETE CASCADE;

ALTER TABLE books DROP FOREIGN KEY fk_books_author;
ALTER TABLE employees ADD INDEX idx_last_name (last_name);
ALTER TABLE employees ADD UNIQUE INDEX idx_email_unique (email);
ALTER TABLE employees DROP INDEX idx_last_name;
ALTER TABLE old_table_name RENAME TO new_table_name;
ALTER TABLE employees ALTER COLUMN active SET DEFAULT 1;
ALTER TABLE employees ALTER COLUMN active DROP DEFAULT;
```

#### 3.4 DROP and TRUNCATE

```sql
DROP TABLE IF EXISTS temporary_data;
DROP TABLE IF EXISTS table_a, table_b, table_c;
DROP DATABASE IF EXISTS old_database;
TRUNCATE TABLE session_logs;
```

#### 3.5 Constraints

Constraints enforce data integrity at the database level.

```sql
CREATE TABLE constraint_demo (
    id INT AUTO_INCREMENT,
    PRIMARY KEY (id),
    product_name VARCHAR(255) NOT NULL,
    sku VARCHAR(50) UNIQUE,
    stock_qty INT NOT NULL DEFAULT 0,
    price DECIMAL(10, 2) NOT NULL,
    CONSTRAINT chk_price_positive CHECK (price > 0),
    CONSTRAINT chk_stock_range CHECK (stock_qty >= 0 AND stock_qty <= 100000)
);

INSERT INTO constraint_demo (product_name, sku, stock_qty, price) VALUES
('Widget', 'WID-001', 100, 9.99);
```

The next two inserts will fail:

```sql
INSERT INTO constraint_demo (product_name, sku, stock_qty, price)
VALUES (NULL, 'WID-002', 50, 5.00);
-- ERROR: product_name cannot be NULL

INSERT INTO constraint_demo (product_name, sku, stock_qty, price)
VALUES ('Widget Duplicate', 'WID-001', 10, 8.00);
-- ERROR: sku 'WID-001' already exists

INSERT INTO constraint_demo (product_name, sku, stock_qty, price)
VALUES ('Bad Product', 'WID-003', 100, -5.00);
-- ERROR: CHECK constraint chk_price_positive
```

#### 3.6 Indexes

Indexes are data structures that speed up data retrieval at the cost of write performance and storage.

```sql
CREATE INDEX idx_employees_last_name ON employees (last_name);
CREATE UNIQUE INDEX idx_employees_email ON employees (email);
CREATE INDEX idx_employees_dept_name ON employees (department_id, last_name);
CREATE INDEX idx_employees_email_prefix ON employees (email(10));

CREATE TABLE documents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    FULLTEXT INDEX ft_documents_body (title, body)
);

CREATE TABLE locations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    coordinates POINT NOT NULL SRID 4326,
    SPATIAL INDEX sp_locations_coords (coordinates)
);

DROP INDEX idx_employees_last_name ON employees;
```

**When to Index:**

| Index                                      | When to Use                                           |
|--------------------------------------------|-------------------------------------------------------|
| Single-column B-tree                       | Column used frequently in WHERE, JOIN, ORDER BY       |
| Composite B-tree (column order matters)    | Queries filter on multiple columns together           |
| UNIQUE                                     | Column that must have distinct values                 |
| FULLTEXT                                   | Natural language text search                          |
| SPATIAL                                    | Geographic/geometry queries                           |
| PREFIX                                     | Long VARCHAR columns where only first N chars differ  |

---

### 4 Data Manipulation Language (DML)

DML statements modify the data within tables.

#### 4.1 INSERT

```sql
INSERT INTO employees
VALUES (NULL, 'Test', 'User', 'test@company.com', 'Engineering', 60000.00, '2024-01-01', 1, NULL);

INSERT INTO employees (first_name, last_name, email, department, salary, hire_date, active)
VALUES ('Kevin', 'Hart', 'kevin.hart@company.com', 'Sales', 74000.00, '2024-01-15', 1);

INSERT INTO employees (first_name, last_name, email, department, salary, hire_date, active)
VALUES
    ('Laura', 'Croft', 'laura.croft@company.com', 'Engineering', 115000.00, '2024-02-01', 1),
    ('Peter', 'Parker', 'peter.parker@company.com', 'Marketing', 76000.00, '2024-02-15', 1),
    ('Bruce', 'Wayne', 'bruce.wayne@company.com', 'Finance', 140000.00, '2024-03-01', 1);

INSERT INTO employees (id, first_name, last_name, email, department, salary, hire_date, active)
VALUES (1, 'John', 'Smith', 'john.smith@company.com', 'Engineering', 97500.00, '2020-03-15', 1)
ON DUPLICATE KEY UPDATE
    salary = VALUES(salary),
    updated_at = CURRENT_TIMESTAMP;

CREATE TABLE employees_backup LIKE employees;
INSERT INTO employees_backup SELECT * FROM employees;

INSERT IGNORE INTO employees (first_name, last_name, email, department, salary, hire_date, active)
VALUES ('Test', 'User', 'john.smith@company.com', 'Engineering', 50000.00, '2024-06-01', 1);
```

#### 4.2 UPDATE

```sql
UPDATE employees
SET salary = 100000.00
WHERE id = 1;

UPDATE employees
SET
    salary = salary * 1.10,
    active = 1
WHERE department = 'Engineering';

UPDATE employees e
JOIN departments d ON e.department_id = d.id
SET e.salary = e.salary * 1.15
WHERE d.name = 'Engineering' AND e.salary < 100000;

UPDATE employees
SET salary = (
    SELECT AVG(salary) FROM employees WHERE department = 'Engineering'
)
WHERE id = 11;

UPDATE employees
SET active = 0
WHERE department = 'Sales'
ORDER BY hire_date ASC
LIMIT 1;
```

#### 4.3 DELETE

```sql
DELETE FROM employees WHERE id = 99;
DELETE FROM employees;

DELETE e
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id
WHERE d.id IS NULL;

DELETE FROM employees
WHERE active = 0
ORDER BY hire_date ASC
LIMIT 5;

TRUNCATE TABLE employees;
```

#### 4.4 Transactions

Transactions group DML operations into a single atomic unit that either fully commits or fully rolls back.

```sql
START TRANSACTION;

UPDATE accounts SET balance = balance - 500.00 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 500.00 WHERE account_id = 2;

COMMIT;
-- ROLLBACK;

START TRANSACTION;

INSERT INTO orders (customer_id, order_date, total, status)
VALUES (1, CURDATE(), 299.99, 'pending');
SET @order_id = LAST_INSERT_ID();

UPDATE products SET stock_qty = stock_qty - 1 WHERE id = 42;

INSERT INTO payments (order_id, amount, method, status)
VALUES (@order_id, 299.99, 'credit_card', 'completed');

COMMIT;
-- ROLLBACK;

START TRANSACTION;

INSERT INTO audit_log (action, table_name) VALUES ('started_batch', 'employees');
SAVEPOINT before_employee_update;

UPDATE employees SET salary = salary * 1.2 WHERE department = 'Engineering';

ROLLBACK TO SAVEPOINT before_employee_update;

INSERT INTO audit_log (action, table_name) VALUES ('rollback_employee_update', 'employees');
COMMIT;
```

**Transaction isolation levels:**

```sql
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
```

---

### 5 Indexing Deep Dive

#### 5.1 B-Tree Index Structure

MySQL's default index type is the **B+ Tree** (a balanced tree variant).

A B+ Tree index is a multi-level data structure where:
- **Leaf nodes** contain the actual data pointers (or primary key values for InnoDB secondary indexes)
- **Non-leaf (internal) nodes** contain separator values that guide traversal
- **All leaf nodes** are at the same depth, guaranteeing consistent lookup performance

```
Root (internal node, ~100 entries)
  [10, 20, 30, 40, ...]

Internal nodes (~1000 entries each)
  [10-19]  [20-29]  [30-39]  ...

Leaf nodes (data or PK pointers)
  [10->row, 11->row, ...]  [20->row, 21->row, ...]
```

**Index access methods:**

| Access Method         | Description                       | When Used                          |
|-----------------------|-----------------------------------|------------------------------------|
| Unique lookup         | Exact match on unique index       | `WHERE id = 42`                    |
| Range scan            | Values within a range             | `WHERE age BETWEEN 20 AND 30`      |
| Index full scan       | Read entire index in order        | `ORDER BY indexed_col`             |
| Index-only scan       | Query satisfied from index alone  | `SELECT indexed_col FROM table`    |
| Full table scan       | Read every row                    | No usable index / large portion    |

#### 5.2 Composite Indexes

```sql
CREATE INDEX idx_dept_name_hire ON employees (department_id, last_name, hire_date);

-- Queries that BENEFIT from this index:
SELECT * FROM employees WHERE department_id = 1;
SELECT * FROM employees WHERE department_id = 1 AND last_name = 'Smith';
SELECT * FROM employees WHERE department_id = 1 AND last_name = 'Smith' AND hire_date > '2020-01-01';

-- Queries that benefit PARTIALLY:
SELECT * FROM employees WHERE department_id = 1 AND hire_date > '2020-01-01';

-- Queries that CANNOT use this index efficiently:
SELECT * FROM employees WHERE last_name = 'Smith';
SELECT * FROM employees WHERE department_id = 1 AND last_name > 'S' AND hire_date = '2020-01-01';
```

**The Leftmost Prefix Rule:** A composite index on `(col_a, col_b, col_c)` supports queries on `col_a`, `col_a, col_b`, and `col_a, col_b, col_c`. It does NOT support queries starting with `col_b` or `col_c` alone.

#### 5.3 EXPLAIN Query Analysis

```sql
EXPLAIN SELECT * FROM employees WHERE id = 1;

EXPLAIN SELECT e.first_name, e.last_name, d.name AS department
FROM employees e
INNER JOIN departments d ON e.department_id = d.id
WHERE e.salary > 80000
ORDER BY e.last_name;

EXPLAIN ANALYZE
SELECT e.department_id, COUNT(*) AS emp_count, AVG(e.salary) AS avg_salary
FROM employees e
WHERE e.active = 1
GROUP BY e.department_id
HAVING emp_count > 2;
```

**EXPLAIN output columns decoded:**

| Column          | Meaning                                                     |
|-----------------|-------------------------------------------------------------|
| `id`            | Query step number (higher = earlier execution)              |
| `select_type`   | SIMPLE, PRIMARY, SUBQUERY, DERIVED, UNION, etc.             |
| `table`         | Table alias                                                 |
| `type`          | Access method (const > ref > range > index > ALL)           |
| `possible_keys` | Indexes MySQL considered                                    |
| `key`           | Index actually used                                         |
| `key_len`       | Bytes used from the index                                   |
| `ref`           | Columns or constants used for key lookup                    |
| `rows`          | Estimated rows examined                                     |
| `Extra`         | Using index, Using where, Using filesort, etc.              |

**Access method types ranked by performance:**

```
const  >  eq_ref  >  ref  >  range  >  index  >  ALL
(best)                                                  (worst)
```

- **const**: Primary key or unique index lookup
- **eq_ref**: JOIN using unique index
- **ref**: Non-unique index lookup
- **range**: Index range scan
- **index**: Full index scan
- **ALL**: Full table scan (worst case)

```sql
EXPLAIN FORMAT=JSON
SELECT e.id, e.first_name, e.last_name, d.name
FROM employees e
STRAIGHT_JOIN departments d ON d.id = e.department_id
WHERE e.salary BETWEEN 70000 AND 100000
  AND e.active = 1
ORDER BY e.last_name
LIMIT 10;
```

#### 5.4 Index Performance

```sql
DELIMITER $$
CREATE PROCEDURE populate_performance_test(IN num_rows INT)
BEGIN
    DECLARE i INT DEFAULT 0;
    WHILE i < num_rows DO
        INSERT INTO performance_test (uuid_col, int_col, varchar_col)
        VALUES (UUID(), FLOOR(RAND() * 100000), CONCAT('Record-', i, '-', MD5(RAND())));
        SET i = i + 1;
    END WHILE;
END$$
DELIMITER ;
```

**Index performance trade-offs:**

| Factor               | With Index                    | Without Index               |
|----------------------|-------------------------------|-----------------------------|
| SELECT by indexed col| O(log n) Ã¢â‚¬â€ fast               | O(n) Ã¢â‚¬â€ full table scan      |
| INSERT               | Slower (must update index)    | Faster                      |
| UPDATE indexed col   | Slower (must update index)    | Faster                      |
| DELETE               | Slower (must update index)    | Faster                      |
| Storage              | Additional disk space         | No extra space              |
| Memory               | Index pages in buffer pool    | No cache overhead           |

#### 5.5 Index Hints

```sql
SELECT * FROM employees
FORCE INDEX (idx_employees_last_name)
WHERE last_name = 'Smith';

SELECT * FROM employees
USE INDEX (idx_employees_last_name)
WHERE last_name = 'Smith';

SELECT * FROM employees
IGNORE INDEX (idx_employees_last_name)
WHERE last_name = 'Smith';

SELECT e.first_name, d.name
FROM employees e
STRAIGHT_JOIN departments d ON e.department_id = d.id;
```

---

### 6 Normalization

Normalization is the process of organizing data to reduce redundancy and improve integrity. Edgar F. Codd introduced the concept in 1970.

#### 6.1 First Normal Form (1NF)

A table is in 1NF if:
1. Each column contains atomic (indivisible) values
2. Each column contains values of the same type
3. Each row is uniquely identifiable (primary key exists)
4. Columns have unique names

**Violation:**

```sql
CREATE TABLE contacts_1nf_violation (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    phones VARCHAR(500)
);

INSERT INTO contacts_1nf_violation VALUES
(1, 'Alice', '555-0101,555-0102'),
(2, 'Bob', '555-0201');
```

**1NF Compliant:**

```sql
CREATE TABLE contacts_1nf (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE contact_phones_1nf (
    contact_id INT NOT NULL,
    phone VARCHAR(20) NOT NULL,
    phone_type VARCHAR(20) NOT NULL DEFAULT 'mobile',
    PRIMARY KEY (contact_id, phone),
    FOREIGN KEY (contact_id) REFERENCES contacts_1nf(id) ON DELETE CASCADE
);

INSERT INTO contacts_1nf VALUES (1, 'Alice'), (2, 'Bob');
INSERT INTO contact_phones_1nf VALUES
(1, '555-0101', 'home'),
(1, '555-0102', 'mobile'),
(2, '555-0201', 'mobile');
```

#### 6.2 Second Normal Form (2NF)

A table is in 2NF if:
1. It is in 1NF
2. Every non-key column is fully functionally dependent on the **entire** primary key (no partial dependencies)

**Violation:**

```sql
CREATE TABLE enrollment_2nf_violation (
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    student_name VARCHAR(255) NOT NULL,
    course_name VARCHAR(255) NOT NULL,
    grade DECIMAL(5, 2) NULL,
    PRIMARY KEY (student_id, course_id)
);
```

**2NF Compliant:**

```sql
CREATE TABLE students_2nf (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE courses_2nf (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE enrollments_2nf (
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    grade DECIMAL(5, 2) NULL,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students_2nf(id),
    FOREIGN KEY (course_id) REFERENCES courses_2nf(id)
);
```

#### 6.3 Third Normal Form (3NF)

A table is in 3NF if:
1. It is in 2NF
2. Every non-key column is **non-transitively** dependent on the primary key (no transitive dependencies)

**Violation:**

```sql
CREATE TABLE employees_3nf_violation (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    department_id INT NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    department_location VARCHAR(255) NOT NULL
);
```

**3NF Compliant:**

```sql
CREATE TABLE employees_3nf (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES departments_3nf(id)
);

CREATE TABLE departments_3nf (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL
);
```

#### 6.4 Complete Normalization Example

**Unnormalized Form:**

```sql
CREATE TABLE sales_orders_raw (
    order_id INT,
    customer_name VARCHAR(255),
    customer_email VARCHAR(255),
    product_list VARCHAR(1000),
    product_qtys VARCHAR(100),
    product_prices VARCHAR(100),
    order_total DECIMAL(10, 2),
    order_date DATE
);
```

**1NF Ã¢â‚¬â€ Atomic columns, unique rows:**

```sql
CREATE TABLE order_items_1nf (
    order_id INT,
    customer_name VARCHAR(255),
    customer_email VARCHAR(255),
    product_name VARCHAR(255),
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    order_date DATE,
    PRIMARY KEY (order_id, product_name)
);
```

**2NF Ã¢â‚¬â€ Separate customer and product data:**

```sql
CREATE TABLE customers_2nf (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE orders_2nf (
    id INT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers_2nf(id)
);

CREATE TABLE order_items_2nf (
    order_id INT NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (order_id, product_name),
    FOREIGN KEY (order_id) REFERENCES orders_2nf(id)
);
```

**3NF Ã¢â‚¬â€ Products in their own table:**

```sql
CREATE TABLE customers (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    current_price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE orders (
    id INT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

CREATE TABLE order_items (
    id INT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id)
);
```

#### 6.5 When to Denormalize

```sql
CREATE TABLE product_summary (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    total_sold INT NOT NULL DEFAULT 0,
    total_revenue DECIMAL(12, 2) NOT NULL DEFAULT 0.00,
    avg_rating DECIMAL(3, 2) NULL,
    last_ordered_at TIMESTAMP NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE order_reporting (
    order_id INT NOT NULL,
    order_date DATE NOT NULL,
    customer_id INT NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    customer_segment VARCHAR(50) NOT NULL,
    product_id INT NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    product_category VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    line_total DECIMAL(12, 2) NOT NULL,
    order_total DECIMAL(12, 2) NOT NULL,
    INDEX idx_reporting_date (order_date),
    INDEX idx_reporting_customer (customer_id),
    INDEX idx_reporting_category (product_category)
);

INSERT INTO order_reporting
SELECT
    o.id, o.order_date, c.id, c.name, c.email, c.segment,
    p.id, p.name, p.category, oi.quantity, oi.unit_price,
    (oi.quantity * oi.unit_price) AS line_total,
    o.total
FROM orders o
JOIN customers c ON c.id = o.customer_id
JOIN order_items oi ON oi.order_id = o.id
JOIN products p ON p.id = oi.product_id
WHERE o.order_date > COALESCE(
    (SELECT MAX(order_date) FROM order_reporting),
    '1970-01-01'
);
```

**When to Denormalize:**

| Reason                    | Example                                         |
|---------------------------|-------------------------------------------------|
| Query performance         | Dashboard pre-aggregations                      |
| Reduce JOINs              | Reporting tables with flattened data            |
| Geographic/regional data  | Separate read replicas with adjusted schemas    |
| Time-series analytics     | Append-only aggregated rollups                  |
| Full-text search          | Denormalized search index tables                |

---

### 7 Transactions & Locking

#### 7.1 ACID Properties

MySQL's InnoDB storage engine guarantees ACID compliance:
- **Atomicity**: A transaction is all-or-nothing
- **Consistency**: Transactions preserve all constraints
- **Isolation**: Concurrent transactions appear to execute serially
- **Durability**: Committed changes persist after crash

```sql
START TRANSACTION;

INSERT INTO orders (customer_id, order_date, total, status)
VALUES (1, CURDATE(), 150.00, 'pending');

UPDATE products SET stock_qty = stock_qty - 1 WHERE id = 200;

INSERT INTO order_items (order_id, product_name, quantity, unit_price)
VALUES (LAST_INSERT_ID(), 'Widget', 1, 150.00);

ROLLBACK;
```

#### 7.2 Pessimistic Locking

```sql
START TRANSACTION;
SELECT * FROM products WHERE id = 42 FOR UPDATE;
UPDATE products SET stock_qty = stock_qty - 1 WHERE id = 42;
COMMIT;

START TRANSACTION;
SELECT * FROM products WHERE id = 42 LOCK IN SHARE MODE;
COMMIT;

START TRANSACTION;
SELECT id, stock_qty, price FROM products WHERE id IN (12, 25, 37) FOR UPDATE;
UPDATE products SET stock_qty = stock_qty - 2 WHERE id = 12;
UPDATE products SET stock_qty = stock_qty - 1 WHERE id = 25;
UPDATE products SET stock_qty = stock_qty - 5 WHERE id = 37;
INSERT INTO orders (customer_id, order_date, total, status)
VALUES (1, CURDATE(), 319.97, 'confirmed');
COMMIT;
```

| Clause               | Effect                                               |
|----------------------|------------------------------------------------------|
| `FOR UPDATE`         | Exclusive lock                                       |
| `LOCK IN SHARE MODE` | Shared lock                                          |
| `NOWAIT`             | Return immediately if lock cannot be acquired        |
| `SKIP LOCKED`        | Skip rows that are locked                            |

```sql
START TRANSACTION;
SELECT * FROM products WHERE id = 42 FOR UPDATE NOWAIT;

START TRANSACTION;
SELECT * FROM job_queue WHERE status = 'pending'
ORDER BY priority DESC, created_at ASC
LIMIT 1
FOR UPDATE SKIP LOCKED;
```

#### 7.3 Optimistic Locking

```sql
CREATE TABLE articles_optimistic (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    version INT NOT NULL DEFAULT 1
);

INSERT INTO articles_optimistic (title, body) VALUES
('My First Article', 'Content goes here...');

-- Session 1: reads and updates
SELECT id, title, body, version FROM articles_optimistic WHERE id = 1;
-- version=1

UPDATE articles_optimistic
SET title = 'Updated Title', body = 'Updated content...', version = version + 1
WHERE id = 1 AND version = 1;
-- Affected rows: 1 (success)

-- Session 2: tries to update stale version
UPDATE articles_optimistic
SET title = 'Another Update', body = 'Another version...', version = version + 1
WHERE id = 1 AND version = 1;
-- Affected rows: 0 (conflict detected!)
```

In Laravel, implementing optimistic locking:

```php
$affected = Article::where('id', $id)
    ->where('version', $originalVersion)
    ->update(['title' => $newTitle, 'version' => $originalVersion + 1]);

if ($affected === 0) {
    throw new \App\Exceptions\OptimisticLockException('Article was modified by another user.');
}
```

#### 7.4 Deadlocks

```sql
-- Transaction A (Session 1)
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;

-- Transaction B (Session 2)
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 2;

-- Transaction A now tries
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Transaction B now tries
UPDATE accounts SET balance = balance + 100 WHERE id = 1;
-- DEADLOCK! InnoDB detects and rolls back one transaction
```

**Preventing deadlocks Ã¢â‚¬â€ always lock resources in the same order:**

```sql
-- Both transactions lock accounts in ascending order
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
```

**Monitoring deadlocks:**

```sql
SHOW ENGINE INNODB STATUS;
SET GLOBAL innodb_print_all_deadlocks = 1;
```

---

### 8 Database Design Patterns for Laravel

#### 8.1 Polymorphic Tables

Polymorphic relationships allow a table to belong to multiple other tables through a single association.

```sql
CREATE TABLE comments (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    commentable_type VARCHAR(255) NOT NULL,
    commentable_id BIGINT UNSIGNED NOT NULL,
    user_id BIGINT UNSIGNED NOT NULL,
    body TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_commentable (commentable_type, commentable_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

SELECT * FROM comments
WHERE commentable_type = 'App\\Models\\Post'
  AND commentable_id = 42;

SELECT * FROM comments
WHERE commentable_type = 'App\\Models\\Video'
  AND commentable_id = 7;
```

**Optimized polymorphic table with integer types:**

```sql
CREATE TABLE comment_types (
    id TINYINT UNSIGNED PRIMARY KEY,
    type_name VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO comment_types VALUES (1, 'post'), (2, 'video'), (3, 'product');

CREATE TABLE comments_optimized (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    commentable_type TINYINT UNSIGNED NOT NULL,
    commentable_id BIGINT UNSIGNED NOT NULL,
    user_id BIGINT UNSIGNED NOT NULL,
    body TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_commentable (commentable_type, commentable_id),
    FOREIGN KEY (commentable_type) REFERENCES comment_types(id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

Laravel Eloquent handles this natively:

```php
class Comment extends Model
{
    public function commentable(): MorphTo
    {
        return $this->morphTo();
    }
}

class Post extends Model
{
    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}
```

#### 8.2 Pivot Tables

```sql
CREATE TABLE roles (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO roles (name) VALUES ('admin'), ('editor'), ('subscriber');

CREATE TABLE role_user (
    role_id BIGINT UNSIGNED NOT NULL,
    user_id BIGINT UNSIGNED NOT NULL,
    assigned_by BIGINT UNSIGNED NULL,
    expires_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (role_id, user_id),
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (assigned_by) REFERENCES users(id) ON DELETE SET NULL
);

SELECT r.name, ru.expires_at
FROM roles r
JOIN role_user ru ON ru.role_id = r.id
WHERE ru.user_id = 1
  AND (ru.expires_at IS NULL OR ru.expires_at > NOW());

SELECT u.name, u.email
FROM users u
JOIN role_user ru ON ru.user_id = u.id
JOIN roles r ON r.id = ru.role_id
WHERE r.name = 'admin';
```

In Laravel:

```php
class User extends Model
{
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class)
            ->withPivot('assigned_by', 'expires_at')
            ->withTimestamps();
    }
}

$user->roles()->attach($roleId, [
    'assigned_by' => auth()->id(),
    'expires_at' => now()->addYear(),
]);
```

#### 8.3 JSON Columns

```sql
CREATE TABLE products_json (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    attributes JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_attr_brand ((CAST(attributes->>'$.brand' AS CHAR(100))))
);

INSERT INTO products_json (name, attributes) VALUES
('Super Widget', JSON_OBJECT(
    'brand', 'Acme',
    'color', 'red',
    'weight_kg', 1.5,
    'dimensions', JSON_OBJECT('width', 10, 'height', 5, 'depth', 3),
    'tags', JSON_ARRAY('featured', 'new', 'sale')
)),
('Mega Gadget', JSON_OBJECT(
    'brand', 'Globex',
    'color', 'blue',
    'power_watts', 100,
    'wireless', true,
    'tags', JSON_ARRAY('premium', 'limited')
));

SELECT id, name,
    attributes->>'$.brand' AS brand,
    attributes->>'$.color' AS color,
    attributes->>'$.weight_kg' AS weight_kg
FROM products_json
WHERE attributes->>'$.brand' = 'Acme';

SELECT id, name
FROM products_json
WHERE JSON_CONTAINS(attributes->'$.tags', '"featured"');

SELECT p.id, p.name, tags.tag_value
FROM products_json p,
JSON_TABLE(p.attributes->'$.tags', '$[*]' COLUMNS (tag_value VARCHAR(50) PATH '$')) AS tags;

UPDATE products_json
SET attributes = JSON_SET(attributes, '$.price', 19.99)
WHERE id = 1;

UPDATE products_json
SET attributes = JSON_ARRAY_APPEND(attributes, '$.tags', 'discounted')
WHERE id = 1;
```

**When to use JSON columns:**

| Use Case                            | Example                                    |
|-------------------------------------|--------------------------------------------|
| Flexible/evolving attributes        | Product specs, user preferences            |
| External API payloads               | Storing webhook payloads, API responses    |
| Configuration/settings              | Feature flags, user settings               |
| Nested data with rare queries       | Audit trails, metadata                     |
| MVP / prototype (iterate fast)      | Before normalizing stable schema           |

**When to avoid JSON columns:**

- The data needs to be queried frequently
- You need referential integrity
- The JSON structure is stable and known in advance
- The values need atomic constraints

#### 8.4 Enums vs Lookup Tables

**MySQL ENUM approach:**

```sql
CREATE TABLE orders_enum (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Lookup table approach:**

```sql
CREATE TABLE order_statuses (
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(30) NOT NULL UNIQUE,
    display_name VARCHAR(50) NOT NULL,
    sort_order TINYINT UNSIGNED NOT NULL DEFAULT 0,
    is_terminal TINYINT(1) NOT NULL DEFAULT 0
);

INSERT INTO order_statuses (code, display_name, sort_order, is_terminal) VALUES
('pending', 'Pending', 1, 0),
('processing', 'Processing', 2, 0),
('shipped', 'Shipped', 3, 0),
('delivered', 'Delivered', 4, 1),
('cancelled', 'Cancelled', 5, 1);

CREATE TABLE orders_lookup (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    status_id TINYINT UNSIGNED NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (status_id) REFERENCES order_statuses(id)
);

SELECT o.id, s.display_name AS status
FROM orders_lookup o
JOIN order_statuses s ON s.id = o.status_id;

SELECT code, display_name FROM order_statuses ORDER BY sort_order;
```

**Comparison:**

| Criteria           | ENUM                              | Lookup Table                       |
|--------------------|-----------------------------------|------------------------------------|
| Storage            | 1-2 bytes (compact)               | 4 bytes (INT FK) + table storage   |
| Validation         | Built-in                          | FK constraint                      |
| Alter values       | `ALTER TABLE ... MODIFY COLUMN`   | Simple INSERT                      |
| Reuse values       | No                                | Yes                                |
| Queryable list     | No                                | Yes                                |
| Additional columns | No                                | Yes (display_name, sort_order)     |
| Migration-friendly | Moderate                          | Simple                             |

**Recommendation:** Use lookup tables when values need to be displayed, ordered, or reused. Use ENUM only for truly fixed sets.

#### 8.5 Laravel Migration Counterpart

```php
Schema::create('products', function (Blueprint $table) {
    $table->id();
    $table->string('name', 255);
    $table->string('slug')->unique();
    $table->text('description')->nullable();
    $table->decimal('price', 10, 2);
    $table->unsignedSmallInteger('stock_qty')->default(0);
    $table->foreignId('category_id')->constrained()->cascadeOnDelete();
    $table->json('attributes')->nullable();
    $table->string('status')->default('draft');
    $table->softDeletes();
    $table->timestamps();
    $table->index('status');
    $table->index(['category_id', 'status']);
});
```

This migration creates the following MySQL DDL:

```sql
CREATE TABLE products (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    description TEXT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_qty SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    category_id BIGINT UNSIGNED NOT NULL,
    attributes JSON NULL,
    status VARCHAR(255) NOT NULL DEFAULT 'draft',
    deleted_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE INDEX products_slug_unique (slug),
    INDEX products_status_index (status),
    INDEX products_category_id_status_index (category_id, status),
    CONSTRAINT products_category_id_foreign
        FOREIGN KEY (category_id) REFERENCES categories(id)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

---

### 9 Migration Concepts

#### 9.1 Schema Versioning

The `migrations` table tracks which migrations have run:

```sql
CREATE TABLE migrations (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    migration VARCHAR(255) NOT NULL,
    batch INT NOT NULL
);
```

**Corresponding SQL for a Laravel migration:**

```sql
-- Migration: 2024_01_01_000000_create_users_table (up)
CREATE TABLE IF NOT EXISTS users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    email_verified_at TIMESTAMP NULL,
    password VARCHAR(255) NOT NULL,
    remember_token VARCHAR(100) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Migration: 2024_01_01_000000_create_users_table (down)
DROP TABLE IF EXISTS users;
```

#### 9.2 Up and Down Methods

Every migration must be reversible.

```sql
-- up:
ALTER TABLE posts ADD COLUMN excerpt VARCHAR(500) NULL AFTER title;
CREATE INDEX idx_posts_excerpt ON posts (excerpt);

-- down:
DROP INDEX idx_posts_excerpt ON posts;
ALTER TABLE posts DROP COLUMN excerpt;
```

**Complex migration with data migration:**

```sql
-- Step 1: Add new column (up)
ALTER TABLE users ADD COLUMN full_name VARCHAR(255) NULL;

-- Step 1 reverse (down)
ALTER TABLE users DROP COLUMN full_name;

-- Step 2: Populate from existing columns (separate migration)
-- up:
UPDATE users SET full_name = CONCAT(first_name, ' ', last_name) WHERE full_name IS NULL;
ALTER TABLE users MODIFY COLUMN full_name VARCHAR(255) NOT NULL;

-- down:
ALTER TABLE users MODIFY COLUMN full_name VARCHAR(255) NULL;
```

In Laravel:

```php
// Migration 1
Schema::table('users', function (Blueprint $table) {
    $table->string('full_name')->nullable()->after('email');
});

// Migration 2
class PopulateUserFullNames extends Migration
{
    public function up(): void
    {
        DB::statement('UPDATE users SET full_name = CONCAT(first_name, " ", last_name) WHERE full_name IS NULL');
        Schema::table('users', function (Blueprint $table) {
            $table->string('full_name')->nullable(false)->change();
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('full_name')->nullable()->change();
        });
    }
}
```

#### 9.3 Seeding

```sql
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE order_items;
TRUNCATE TABLE orders;
TRUNCATE TABLE products;
TRUNCATE TABLE categories;
TRUNCATE TABLE users;
SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO users (name, email, password, created_at, updated_at) VALUES
('Admin User', 'admin@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NOW(), NOW()),
('Test User', 'test@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NOW(), NOW()),
('Jane Doe', 'jane@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NOW(), NOW());

INSERT INTO categories (id, name, slug, created_at, updated_at) VALUES
(1, 'Electronics', 'electronics', NOW(), NOW()),
(2, 'Clothing', 'clothing', NOW(), NOW()),
(3, 'Books', 'books', NOW(), NOW()),
(4, 'Home & Garden', 'home-garden', NOW(), NOW());

INSERT INTO products (name, slug, description, price, stock_qty, category_id, created_at, updated_at) VALUES
('Wireless Headphones', 'wireless-headphones', 'Bluetooth 5.3 over-ear headphones with noise cancellation.', 89.99, 50, 1, NOW(), NOW()),
('USB-C Hub', 'usb-c-hub', '7-in-1 USB-C hub with HDMI, USB-A, SD card reader.', 34.99, 120, 1, NOW(), NOW()),
('Cotton T-Shirt', 'cotton-t-shirt', 'Premium 100% organic cotton t-shirt.', 24.99, 200, 2, NOW(), NOW()),
('Denim Jacket', 'denim-jacket', 'Classic denim jacket with a modern fit.', 79.99, 35, 2, NOW(), NOW()),
('Laravel: Up & Running', 'laravel-up-running', 'Comprehensive guide to Laravel development.', 44.99, 10, 3, NOW(), NOW()),
('Design Patterns in PHP', 'design-patterns-php', 'Learn modern PHP design patterns.', 39.99, 15, 3, NOW(), NOW()),
('Indoor Herb Garden Kit', 'indoor-herb-garden', 'Complete kit with pots, soil, and seeds.', 29.99, 60, 4, NOW(), NOW());

INSERT INTO orders (customer_id, order_date, total, status, created_at, updated_at) VALUES
(1, '2024-06-01', 124.98, 'delivered', NOW(), NOW()),
(2, '2024-06-05', 44.99, 'shipped', NOW(), NOW()),
(1, '2024-06-10', 29.99, 'processing', NOW(), NOW()),
(3, '2024-06-12', 104.98, 'pending', NOW(), NOW());

INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES
(1, 1, 1, 89.99),
(1, 2, 1, 34.99),
(2, 5, 1, 44.99),
(3, 7, 1, 29.99),
(4, 3, 2, 24.99),
(4, 4, 1, 79.99);
```

---

### 10 Performance Optimization

#### 10.1 Query Optimization

```sql
-- Bad vs Good: SELECT only needed columns
SELECT * FROM employees WHERE department_id = 1;
SELECT id, first_name, last_name FROM employees WHERE department_id = 1;

-- Bad vs Good: leading wildcard prevents index usage
SELECT * FROM employees WHERE last_name LIKE '%smith%';
SELECT * FROM employees WHERE last_name LIKE 'smith%';

-- Bad vs Good: function on indexed column
SELECT * FROM orders WHERE YEAR(order_date) = 2024;
SELECT * FROM orders WHERE order_date >= '2024-01-01' AND order_date < '2025-01-01';

-- Bad vs Good: OR across different indexed columns
SELECT * FROM employees WHERE first_name = 'John' OR last_name = 'Smith';
SELECT * FROM employees WHERE first_name = 'John'
UNION
SELECT * FROM employees WHERE last_name = 'Smith';

-- Bad vs Good: paginating deep into tables
SELECT * FROM users ORDER BY id LIMIT 100000, 20;
SELECT * FROM users WHERE id > 100000 ORDER BY id LIMIT 20;

-- Bad vs Good: correlated subquery vs derived table
SELECT e.first_name, e.last_name,
    (SELECT COUNT(*) FROM orders WHERE customer_id = e.id) AS order_count
FROM employees e;

SELECT e.first_name, e.last_name, COALESCE(o.order_count, 0) AS order_count
FROM employees e
LEFT JOIN (
    SELECT customer_id, COUNT(*) AS order_count
    FROM orders
    GROUP BY customer_id
) o ON o.customer_id = e.id;
```

#### 10.2 Connection Pooling

```sql
-- MySQL configuration (my.cnf / my.ini)
-- [mysqld]
-- max_connections = 500
-- thread_cache_size = 256
-- wait_timeout = 300
-- interactive_timeout = 300

SHOW STATUS LIKE 'Threads_connected';
SHOW STATUS LIKE 'Threads_running';
SHOW STATUS LIKE 'Max_used_connections';

SELECT
    id, user, host, db, command, time, state, INFO
FROM information_schema.PROCESSLIST
ORDER BY time DESC;

KILL CONNECTION 12345;
```

Laravel's database configuration for read/write connections:

```php
'connections' => [
    'mysql' => [
        'driver' => 'mysql',
        'read' => [
            'host' => ['192.168.1.1'],
        ],
        'write' => [
            'host' => ['192.168.1.2'],
        ],
        'database' => env('DB_DATABASE', 'forge'),
        'username' => env('DB_USERNAME', 'forge'),
        'password' => env('DB_PASSWORD', ''),
        'charset' => 'utf8mb4',
        'collation' => 'utf8mb4_unicode_ci',
        'options' => [
            PDO::ATTR_EMULATE_PREPARES => false,
            PDO::ATTR_PERSISTENT => true,
        ],
    ],
],
```

#### 10.3 Read Replicas

```sql
-- On the replica server, configure replication
-- CHANGE REPLICATION SOURCE TO
--     SOURCE_HOST = 'primary.example.com',
--     SOURCE_USER = 'replica_user',
--     SOURCE_PASSWORD = 'secure_password',
--     SOURCE_LOG_FILE = 'mysql-bin.000042',
--     SOURCE_LOG_POS = 123456789;
-- START REPLICA;

SHOW REPLICA STATUS\G

-- Monitor replication lag
SELECT TIMESTAMPDIFF(SECOND,
    (SELECT MAX(created_at) FROM orders),
    NOW()
) AS replication_lag_estimate;
```

#### 10.4 Query Caching

MySQL 8.0 removed the query cache. Use InnoDB buffer pool and application-level caching.

```sql
-- [mysqld]
-- innodb_buffer_pool_size = 4G
-- innodb_buffer_pool_instances = 4

SHOW STATUS LIKE 'Innodb_buffer_pool_read%';

-- Cache hit ratio
SELECT
    (1 - (
        SELECT VARIABLE_VALUE FROM performance_schema.global_status
        WHERE VARIABLE_NAME = 'Innodb_buffer_pool_reads'
    ) / (
        SELECT VARIABLE_VALUE FROM performance_schema.global_status
        WHERE VARIABLE_NAME = 'Innodb_buffer_pool_read_requests'
    )) * 100 AS buffer_pool_hit_rate;
```

In Laravel:

```php
$products = Cache::remember('products.expensive', 600, function () {
    return DB::table('products')
        ->where('price', '>', 100)
        ->orderBy('price')
        ->get();
});
```

#### 10.5 Slow Query Log

```sql
-- [mysqld]
-- slow_query_log = 1
-- slow_query_log_file = /var/log/mysql/mysql-slow.log
-- long_query_time = 2
-- log_queries_not_using_indexes = 1

-- Query the slow log via performance_schema
SELECT
    query,
    exec_count,
    avg_timer_wait / 1000000000000 AS avg_seconds,
    sum_timer_wait / 1000000000000 AS total_seconds,
    rows_examined_avg,
    rows_sent_avg
FROM performance_schema.events_statements_summary_by_digest
WHERE avg_timer_wait / 1000000000000 > 1
ORDER BY avg_timer_wait DESC
LIMIT 20;
```

#### 10.6 Table Partitioning

```sql
CREATE TABLE orders_partitioned (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    customer_id INT UNSIGNED NOT NULL,
    order_date DATE NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    PRIMARY KEY (id, order_date)
)
PARTITION BY RANGE (YEAR(order_date)) (
    PARTITION p_2022 VALUES LESS THAN (2023),
    PARTITION p_2023 VALUES LESS THAN (2024),
    PARTITION p_2024 VALUES LESS THAN (2025),
    PARTITION p_future VALUES LESS THAN MAXVALUE
);

CREATE TABLE logs_by_region (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    log_data TEXT NOT NULL,
    region_code CHAR(2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id, region_code)
)
PARTITION BY LIST (region_code) (
    PARTITION p_north_america VALUES IN ('US', 'CA', 'MX'),
    PARTITION p_europe VALUES IN ('UK', 'DE', 'FR', 'IT', 'ES'),
    PARTITION p_asia VALUES IN ('JP', 'CN', 'KR', 'IN'),
    PARTITION p_other VALUES IN ('AU', 'BR', 'ZA')
);

SELECT COUNT(*) FROM orders_partitioned PARTITION (p_2024);

ALTER TABLE orders_partitioned
    REORGANIZE PARTITION p_future INTO (
        PARTITION p_2025 VALUES LESS THAN (2026),
        PARTITION p_future VALUES LESS THAN MAXVALUE
    );

ALTER TABLE orders_partitioned DROP PARTITION p_2022;
```

#### 10.7 Performance Monitoring

```sql
-- Check index usage
SELECT
    object_schema AS database_name,
    object_name AS table_name,
    index_name,
    count_fetch AS reads,
    count_insert AS writes
FROM performance_schema.table_io_waits_summary_by_index_usage
WHERE index_name != 'PRIMARY'
  AND count_fetch < count_insert
ORDER BY count_fetch ASC;

-- Check table sizes
SELECT
    table_name,
    ROUND(((data_length + index_length) / 1024 / 1024), 2) AS size_mb,
    table_rows
FROM information_schema.TABLES
WHERE table_schema = 'laravel_app'
ORDER BY size_mb DESC;

-- Check current running queries
SELECT
    id, user, host, db, command, time, state,
    REPLACE(REPLACE(REPLACE(info, '\n', ' '), '\r', ' '), '\t', ' ') AS info
FROM information_schema.PROCESSLIST
WHERE command != 'Sleep'
ORDER BY time DESC;

-- Check InnoDB status for locks
SHOW ENGINE INNODB STATUS\G

-- Check table fragmentation
SELECT
    table_name,
    ROUND(data_free / 1024 / 1024, 2) AS fragmentation_mb
FROM information_schema.TABLES
WHERE table_schema = 'laravel_app'
ORDER BY data_free DESC;

-- Optimize fragmented tables
OPTIMIZE TABLE employees;
```

---

---

## Concept Comparison
> **One-Sentence Takeaway:** Compare key MySQL concepts for database design.

| Concept | Purpose | Key Feature |
|---------|---------|-------------|
| Relational Model | Organize data into related tables | Tables, rows, columns, keys, relationships |
| SQL DDL | Define database structure | CREATE, ALTER, DROP, TRUNCATE |
| SQL DML | Manipulate data | SELECT, INSERT, UPDATE, DELETE |
| JOINs | Combine data from multiple tables | INNER, LEFT, RIGHT, CROSS |
| Normalization | Reduce data redundancy | 1NF, 2NF, 3NF, BCNF |

---


> **Pro Tip:** Use EXPLAIN on every query before adding it to production. An index scan beats a full table scan every time.

## Quick Reference
> **One-Sentence Takeaway:** Quick reference for MySQL and database design.

| Topic | Key Point |
|-------|-----------|
| Keys | Primary key, foreign key, unique key, composite key |
| Constraints | NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK |
| JOIN Types | INNER, LEFT, RIGHT, CROSS, SELF |
| Index Types | B-Tree, Hash, Full-text, Spatial |
| Normal Forms | 1NF (atomic), 2NF (partial dep), 3NF (transitive dep) |
| Laravel Migrations | Schema builder, up/down, foreign keys, indexes |

---


> **Remember:** SELECT * is an anti-pattern in production. Always specify the exact columns you need.

## Cross-Application Matrix

| Concept | Application Context | Trade-Off |
|---------|--------------------|-----------|
| Normalization | Data integrity | Storage vs query complexity |
| Denormalization | Read performance | Speed vs consistency |
| Indexing | Query speed | Read vs write performance |
| Laravel Migrations | Schema versioning | Control vs overhead |
| Laravel Eloquent | ORM abstraction | Productivity vs raw SQL control |

---


> **Warning:** Be careful with UPDATE or DELETE without WHERE in transactions. Always test on a staging database first.

## Chapter Quiz
> **One-Sentence Takeaway:** Test your MySQL and database design knowledge.

**Q1:** What is the primary key?
- A) A key for sorting
- B) A column that uniquely identifies each row
- C) An index on a table
- D) A foreign reference

<details><summary>Answer&lt;/summary&gt;B) A column that uniquely identifies each row&lt;/details&gt;

**Q2:** What does 2NF require beyond 1NF?
- A) All columns are atomic
- B) No partial dependency on composite keys
- C) No transitive dependencies
- D) All tables have a primary key

<details><summary>Answer&lt;/summary&gt;B) No partial dependency on composite keys&lt;/details&gt;

**Q3:** What is an index used for?
- A) Store additional data
- B) Speed up data retrieval
- C) Enforce foreign keys
- D) Create backups

<details><summary>Answer&lt;/summary&gt;B) Speed up data retrieval&lt;/details&gt;

**Q4:** What is the main trade-off with indexes?
- A) Faster reads, slower writes
- B) Faster writes, slower reads
- C) More storage, faster everything
- D) Less storage, slower everything

<details><summary>Answer&lt;/summary&gt;A) Faster reads, slower writes&lt;/details&gt;

---

## Concept Comparison
> **One-Sentence Takeaway:** Compare key MySQL concepts for database design.

| Concept | Purpose | Key Feature |
|---------|---------|-------------|
| Relational Model | Organize data into related tables | Tables, rows, columns, keys, relationships |
| SQL DDL | Define database structure | CREATE, ALTER, DROP, TRUNCATE |
| SQL DML | Manipulate data | SELECT, INSERT, UPDATE, DELETE |
| JOINs | Combine data from multiple tables | INNER, LEFT, RIGHT, CROSS |
| Normalization | Reduce data redundancy | 1NF, 2NF, 3NF, BCNF |

---

## Quick Reference
> **One-Sentence Takeaway:** Quick reference for MySQL and database design.

| Topic | Key Point |
|-------|-----------|
| Keys | Primary key, foreign key, unique key, composite key |
| Constraints | NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK |
| JOIN Types | INNER, LEFT, RIGHT, CROSS, SELF |
| Index Types | B-Tree, Hash, Full-text, Spatial |
| Normal Forms | 1NF (atomic), 2NF (partial dep), 3NF (transitive dep) |
| Laravel Migrations | Schema builder, up/down, foreign keys, indexes |

---

## Cross-Application Matrix

| Concept | Application Context | Trade-Off |
|---------|--------------------|-----------|
| Normalization | Data integrity | Storage vs query complexity |
| Denormalization | Read performance | Speed vs consistency |
| Indexing | Query speed | Read vs write performance |
| Laravel Migrations | Schema versioning | Control vs overhead |
| Laravel Eloquent | ORM abstraction | Productivity vs raw SQL control |

---

## Chapter Quiz
> **One-Sentence Takeaway:** Test your MySQL and database design knowledge.

**Q1:** What is the primary key?
- A) A key for sorting
- B) A column that uniquely identifies each row
- C) An index on a table
- D) A foreign reference

<details><summary>Answer&lt;/summary&gt;B) A column that uniquely identifies each row&lt;/details&gt;

**Q2:** What does 2NF require beyond 1NF?
- A) All columns are atomic
- B) No partial dependency on composite keys
- C) No transitive dependencies
- D) All tables have a primary key

<details><summary>Answer&lt;/summary&gt;B) No partial dependency on composite keys&lt;/details&gt;

**Q3:** What is an index used for?
- A) Store additional data
- B) Speed up data retrieval
- C) Enforce foreign keys
- D) Create backups

<details><summary>Answer&lt;/summary&gt;B) Speed up data retrieval&lt;/details&gt;

**Q4:** What is the main trade-off with indexes?
- A) Faster reads, slower writes
- B) Faster writes, slower reads
- C) More storage, faster everything
- D) Less storage, slower everything

<details><summary>Answer&lt;/summary&gt;A) Faster reads, slower writes&lt;/details&gt;

---

## Concept Comparison
> **One-Sentence Takeaway:** Compare key MySQL concepts for database design.

| Concept | Purpose | Key Feature |
|---------|---------|-------------|
| Relational Model | Organize data into related tables | Tables, rows, columns, keys, relationships |
| SQL DDL | Define database structure | CREATE, ALTER, DROP, TRUNCATE |
| SQL DML | Manipulate data | SELECT, INSERT, UPDATE, DELETE |
| JOINs | Combine data from multiple tables | INNER, LEFT, RIGHT, CROSS |
| Normalization | Reduce data redundancy | 1NF, 2NF, 3NF, BCNF |

---

## Quick Reference
> **One-Sentence Takeaway:** Quick reference for MySQL and database design.

| Topic | Key Point |
|-------|-----------|
| Keys | Primary key, foreign key, unique key, composite key |
| Constraints | NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK |
| JOIN Types | INNER, LEFT, RIGHT, CROSS, SELF |
| Index Types | B-Tree, Hash, Full-text, Spatial |
| Normal Forms | 1NF (atomic), 2NF (partial dep), 3NF (transitive dep) |
| Laravel Migrations | Schema builder, up/down, foreign keys, indexes |

---

## Cross-Application Matrix

| Concept | Application Context | Trade-Off |
|---------|--------------------|-----------|
| Normalization | Data integrity | Storage vs query complexity |
| Denormalization | Read performance | Speed vs consistency |
| Indexing | Query speed | Read vs write performance |
| Laravel Migrations | Schema versioning | Control vs overhead |
| Laravel Eloquent | ORM abstraction | Productivity vs raw SQL control |

---

## Chapter Quiz
> **One-Sentence Takeaway:** Test your MySQL and database design knowledge.

**Q1:** What is the primary key?
- A) A key for sorting
- B) A column that uniquely identifies each row
- C) An index on a table
- D) A foreign reference

<details><summary>Answer&lt;/summary&gt;B) A column that uniquely identifies each row&lt;/details&gt;

**Q2:** What does 2NF require beyond 1NF?
- A) All columns are atomic
- B) No partial dependency on composite keys
- C) No transitive dependencies
- D) All tables have a primary key

<details><summary>Answer&lt;/summary&gt;B) No partial dependency on composite keys&lt;/details&gt;

**Q3:** What is an index used for?
- A) Store additional data
- B) Speed up data retrieval
- C) Enforce foreign keys
- D) Create backups

<details><summary>Answer&lt;/summary&gt;B) Speed up data retrieval&lt;/details&gt;

**Q4:** What is the main trade-off with indexes?
- A) Faster reads, slower writes
- B) Faster writes, slower reads
- C) More storage, faster everything
- D) Less storage, slower everything

<details><summary>Answer&lt;/summary&gt;A) Faster reads, slower writes&lt;/details&gt;

---

## Concept Comparison
> **One-Sentence Takeaway:** Compare key MySQL concepts for database design.

| Concept | Purpose | Key Feature |
|---------|---------|-------------|
| Relational Model | Organize data into related tables | Tables, rows, columns, keys, relationships |
| SQL DDL | Define database structure | CREATE, ALTER, DROP, TRUNCATE |
| SQL DML | Manipulate data | SELECT, INSERT, UPDATE, DELETE |
| JOINs | Combine data from multiple tables | INNER, LEFT, RIGHT, CROSS |
| Normalization | Reduce data redundancy | 1NF, 2NF, 3NF, BCNF |

---

## Quick Reference
> **One-Sentence Takeaway:** Quick reference for MySQL and database design.

| Topic | Key Point |
|-------|-----------|
| Keys | Primary key, foreign key, unique key, composite key |
| Constraints | NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK |
| JOIN Types | INNER, LEFT, RIGHT, CROSS, SELF |
| Index Types | B-Tree, Hash, Full-text, Spatial |
| Normal Forms | 1NF (atomic), 2NF (partial dep), 3NF (transitive dep) |
| Laravel Migrations | Schema builder, up/down, foreign keys, indexes |

---

## Cross-Application Matrix

| Concept | Application Context | Trade-Off |
|---------|--------------------|-----------|
| Normalization | Data integrity | Storage vs query complexity |
| Denormalization | Read performance | Speed vs consistency |
| Indexing | Query speed | Read vs write performance |
| Laravel Migrations | Schema versioning | Control vs overhead |
| Laravel Eloquent | ORM abstraction | Productivity vs raw SQL control |

---

## Chapter Quiz
> **One-Sentence Takeaway:** Test your MySQL and database design knowledge.

**Q1:** What is the primary key?
- A) A key for sorting
- B) A column that uniquely identifies each row
- C) An index on a table
- D) A foreign reference

<details><summary>Answer&lt;/summary&gt;B) A column that uniquely identifies each row&lt;/details&gt;

**Q2:** What does 2NF require beyond 1NF?
- A) All columns are atomic
- B) No partial dependency on composite keys
- C) No transitive dependencies
- D) All tables have a primary key

<details><summary>Answer&lt;/summary&gt;B) No partial dependency on composite keys&lt;/details&gt;

**Q3:** What is an index used for?
- A) Store additional data
- B) Speed up data retrieval
- C) Enforce foreign keys
- D) Create backups

<details><summary>Answer&lt;/summary&gt;B) Speed up data retrieval&lt;/details&gt;

**Q4:** What is the main trade-off with indexes?
- A) Faster reads, slower writes
- B) Faster writes, slower reads
- C) More storage, faster everything
- D) Less storage, slower everything

<details><summary>Answer&lt;/summary&gt;A) Faster reads, slower writes&lt;/details&gt;

## Summary

This chapter covered the theoretical and practical foundations of MySQL and database design as they apply to modern Laravel development. You learned that the relational model organizes data into tables with rows and columns, linked through primary and foreign keys. SQL provides DDL for structure, DML for data manipulation, DQL for queries, and transactional controls for consistency.

The chapter's deep dive into SQL queries covered every major clause: SELECT with filtering via WHERE, joining tables with INNER, LEFT, RIGHT, and CROSS JOINs, grouping with GROUP BY and HAVING, sorting with ORDER BY, pagination with LIMIT, subqueries, and UNION. Every query was presented as complete, runnable SQL.

Indexing was presented as the highest-leverage performance tool: B-tree indexes accelerate lookups, composite indexes obey the leftmost prefix rule, and EXPLAIN is the definitive query analysis tool. Normalization through 1NF, 2NF, and 3NF eliminates redundancy, while denormalization remains a legitimate strategy for read-heavy workloads.

Transactions and locking explained InnoDB's ACID guarantees, the trade-offs between pessimistic and optimistic locking, and deadlock prevention. Laravel-specific design patterns Ã¢â‚¬â€ polymorphic tables, pivot tables, JSON columns, and lookup tables Ã¢â‚¬â€ connect theory to framework conventions.

Performance optimization encompasses query design, connection pooling, read replicas, caching, partitioning, and monitoring through the performance_schema and slow query log. Understanding the SQL that Laravel's Schema Builder generates underneath helps you make informed migration and optimization decisions.

---

## Exercises

### Review Questions

1. What is the difference between a primary key and a unique index? When would you use each?

2. Explain the three relationship types in a relational database and give a real-world example of each.

3. What does the `ON DELETE CASCADE` clause do? What are the alternatives?

4. Describe the difference between INNER JOIN, LEFT JOIN, and RIGHT JOIN.

5. What is the leftmost prefix rule for composite indexes?

6. What does `EXPLAIN` tell you about a query?

7. List the three normal forms and the anomaly each prevents.

8. What is the difference between `DELETE`, `TRUNCATE`, and `DROP`?

9. Explain the difference between pessimistic and optimistic locking.

10. What is a pivot table and when do you need one?

11. What are the advantages of a lookup table over a MySQL ENUM?

12. How do you detect and prevent deadlocks in MySQL?

13. What is the purpose of a migration system?

14. What does `innodb_buffer_pool_size` control?

15. When would you use JSON columns instead of normalizing?

### Application Problems

**Problem 1:** Design a schema for a library management system:
- Books have title, ISBN (unique), publication year, and belong to one or more authors
- Authors have name, birth year, nationality
- Members have name, email (unique), membership date
- Loans track which member borrowed which book, borrow date, due date
- A book can be borrowed by only one member at a time

Write the complete SQL DDL with primary keys, foreign keys, indexes, and constraints.

<details>
<summary>Solution&lt;/summary&gt;

```sql
CREATE TABLE authors (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    birth_year YEAR NULL,
    nationality VARCHAR(100) NULL
);

CREATE TABLE books (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    isbn VARCHAR(13) NOT NULL UNIQUE,
    publication_year YEAR NOT NULL,
    total_copies INT UNSIGNED NOT NULL DEFAULT 1,
    available_copies INT UNSIGNED NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_copies CHECK (available_copies <= total_copies)
);

CREATE TABLE book_author (
    book_id INT UNSIGNED NOT NULL,
    author_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (book_id, author_id),
    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE,
    FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE CASCADE
);

CREATE TABLE members (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    membership_date DATE NOT NULL DEFAULT (CURRENT_DATE),
    active TINYINT(1) NOT NULL DEFAULT 1
);

CREATE TABLE loans (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    book_id INT UNSIGNED NOT NULL,
    member_id INT UNSIGNED NOT NULL,
    borrow_date DATE NOT NULL DEFAULT (CURRENT_DATE),
    due_date DATE NOT NULL,
    returned_date DATE NULL,
    status ENUM('active', 'returned', 'overdue') NOT NULL DEFAULT 'active',
    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE RESTRICT,
    FOREIGN KEY (member_id) REFERENCES members(id) ON DELETE RESTRICT,
    INDEX idx_loans_status (status),
    INDEX idx_loans_due (due_date),
    CONSTRAINT chk_dates CHECK (returned_date IS NULL OR returned_date >= borrow_date)
);
```
</details>

**Problem 2:** Write queries for the library schema:
a) Find all books currently borrowed by member with email "john@example.com"
b) Count books per author, sorted highest to lowest
c) Find overdue books
d) List members who have never borrowed a book
e) Show the most borrowed books

<details>
<summary>Solution&lt;/summary&gt;

```sql
-- a)
SELECT b.title, b.isbn, l.borrow_date, l.due_date
FROM loans l
JOIN books b ON b.id = l.book_id
JOIN members m ON m.id = l.member_id
WHERE m.email = 'john@example.com'
  AND l.status = 'active';

-- b)
SELECT a.name, COUNT(ba.book_id) AS book_count
FROM authors a
JOIN book_author ba ON ba.author_id = a.id
GROUP BY a.id, a.name
ORDER BY book_count DESC;

-- c)
SELECT b.title, m.name AS member_name, l.borrow_date, l.due_date,
    DATEDIFF(CURRENT_DATE, l.due_date) AS days_overdue
FROM loans l
JOIN books b ON b.id = l.book_id
JOIN members m ON m.id = l.member_id
WHERE l.status IN ('active', 'overdue')
  AND l.due_date < CURRENT_DATE
ORDER BY days_overdue DESC;

-- d)
SELECT m.name, m.email, m.membership_date
FROM members m
LEFT JOIN loans l ON l.member_id = m.id
WHERE l.id IS NULL;

-- e)
SELECT b.title, COUNT(l.id) AS borrow_count
FROM books b
JOIN loans l ON l.book_id = b.id
GROUP BY b.id, b.title
ORDER BY borrow_count DESC
LIMIT 10;
```
</details>

**Problem 3:** Optimize a slow query. The employees table has 500,000 rows. An index exists on `(department_id)` and separately on `(last_name)`. The query:

```sql
SELECT * FROM employees WHERE department_id = 3 AND salary > 70000 ORDER BY last_name;
```

Design a better index and explain why it improves performance.

<details>
<summary>Solution&lt;/summary&gt;

A composite index on `(department_id, salary, last_name)`:

```sql
CREATE INDEX idx_dept_salary_name ON employees (department_id, salary, last_name);
```

How this helps:
- MySQL finds rows where `department_id = 3` and `salary > 70000` via index range scan
- The index is sorted by `last_name` within each salary group Ã¢â‚¬â€ no filesort needed
- If only `id`, `department_id`, `salary`, and `last_name` are needed, an index-only scan satisfies the query

Before: type=ref on `(department_id)`, 10000+ rows examined, `Using where; Using filesort`
After: type=range on `(department_id, salary)`, ~500 rows examined, `Using index condition`
</details>

**Problem 4:** Write a transactional checkout flow with proper locking.

<details>
<summary>Solution&lt;/summary&gt;

```sql
START TRANSACTION;

SELECT id, stock_qty, price
FROM products
WHERE id IN (101, 102, 103)
FOR UPDATE;

SELECT IF(
    (SELECT stock_qty FROM products WHERE id = 101) >= 2
    AND (SELECT stock_qty FROM products WHERE id = 102) >= 1,
    'sufficient', 'insufficient'
) AS stock_status;

UPDATE products SET stock_qty = stock_qty - 2 WHERE id = 101;
UPDATE products SET stock_qty = stock_qty - 1 WHERE id = 102;

INSERT INTO orders (customer_id, order_date, total, status)
VALUES (42, CURDATE(), 214.97, 'pending');
SET @order_id = LAST_INSERT_ID();

INSERT INTO order_items (order_id, product_id, quantity, unit_price)
SELECT @order_id, id, CASE id WHEN 101 THEN 2 ELSE 1 END, price
FROM products WHERE id IN (101, 102);

INSERT INTO payments (order_id, amount, method, status, transaction_id)
VALUES (@order_id, 214.97, 'credit_card', 'completed', 'txn_abc123xyz');

UPDATE orders SET status = 'confirmed' WHERE id = @order_id;

COMMIT;
```
</details>

### Challenge Problems

**Problem 1: EAV (Entity-Attribute-Value) Implementation**

Design a schema for dynamic product attributes where different categories have different attribute sets. Implement the EAV pattern, then write a query that pivots the EAV data into a traditional row-per-product result.

<details>
<summary>Solution&lt;/summary&gt;

```sql
CREATE TABLE eav_categories (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO eav_categories (name) VALUES ('Electronics'), ('Clothing'), ('Books');

CREATE TABLE eav_attributes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    category_id INT UNSIGNED NOT NULL,
    attribute_name VARCHAR(100) NOT NULL,
    data_type ENUM('string', 'integer', 'decimal', 'boolean') NOT NULL DEFAULT 'string',
    is_required TINYINT(1) NOT NULL DEFAULT 0,
    sort_order TINYINT UNSIGNED NOT NULL DEFAULT 0,
    FOREIGN KEY (category_id) REFERENCES eav_categories(id) ON DELETE CASCADE,
    UNIQUE KEY (category_id, attribute_name)
);

INSERT INTO eav_attributes (category_id, attribute_name, data_type, is_required, sort_order) VALUES
(1, 'Brand', 'string', 1, 1),
(1, 'Wattage', 'integer', 0, 2),
(1, 'Color', 'string', 0, 3),
(2, 'Size', 'string', 1, 1),
(2, 'Material', 'string', 1, 2),
(2, 'Gender', 'string', 0, 3),
(3, 'Pages', 'integer', 1, 1),
(3, 'ISBN', 'string', 1, 2),
(3, 'Publisher', 'string', 0, 3);

CREATE TABLE eav_products (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id INT UNSIGNED NOT NULL,
    base_price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES eav_categories(id)
);

INSERT INTO eav_products (name, category_id, base_price) VALUES
('Bluetooth Speaker', 1, 49.99),
('Cotton T-Shirt', 2, 19.99),
('PHP Handbook', 3, 34.99);

CREATE TABLE eav_values (
    product_id INT UNSIGNED NOT NULL,
    attribute_id INT UNSIGNED NOT NULL,
    value_text VARCHAR(500) NULL,
    value_int INT NULL,
    value_decimal DECIMAL(12, 4) NULL,
    value_bool TINYINT(1) NULL,
    PRIMARY KEY (product_id, attribute_id),
    FOREIGN KEY (product_id) REFERENCES eav_products(id) ON DELETE CASCADE,
    FOREIGN KEY (attribute_id) REFERENCES eav_attributes(id) ON DELETE CASCADE
);

INSERT INTO eav_values (product_id, attribute_id, value_text, value_int, value_decimal, value_bool) VALUES
(1, 1, 'SoundMax', NULL, NULL, NULL),
(1, 2, NULL, 20, NULL, NULL),
(1, 3, 'Black', NULL, NULL, NULL),
(2, 4, 'L', NULL, NULL, NULL),
(2, 5, 'Cotton', NULL, NULL, NULL),
(2, 6, 'Unisex', NULL, NULL, NULL),
(3, 7, NULL, 450, NULL, NULL),
(3, 8, '978-3-16-148410-0', NULL, NULL, NULL),
(3, 9, 'Tech Press', NULL, NULL, NULL);

SELECT
    p.id,
    p.name,
    c.name AS category,
    MAX(CASE WHEN a.attribute_name = 'Brand' THEN COALESCE(v.value_text, v.value_int, v.value_decimal, v.value_bool) END) AS brand,
    MAX(CASE WHEN a.attribute_name = 'Wattage' THEN v.value_int END) AS wattage,
    MAX(CASE WHEN a.attribute_name = 'Color' THEN v.value_text END) AS color,
    MAX(CASE WHEN a.attribute_name = 'Size' THEN v.value_text END) AS size,
    MAX(CASE WHEN a.attribute_name = 'Material' THEN v.value_text END) AS material,
    MAX(CASE WHEN a.attribute_name = 'Pages' THEN v.value_int END) AS pages,
    MAX(CASE WHEN a.attribute_name = 'ISBN' THEN v.value_text END) AS isbn,
    MAX(CASE WHEN a.attribute_name = 'Publisher' THEN v.value_text END) AS publisher
FROM eav_products p
JOIN eav_categories c ON c.id = p.category_id
LEFT JOIN eav_values v ON v.product_id = p.id
LEFT JOIN eav_attributes a ON a.id = v.attribute_id
GROUP BY p.id, p.name, c.name;
```
</details>

**Problem 2: Hierarchical Category Tree**

Design a schema for an infinite-depth category tree using both adjacency list and nested set models. Support queries for descendants, ancestors, and immediate children.

<details>
<summary>Solution&lt;/summary&gt;

```sql
CREATE TABLE categories (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    parent_id INT UNSIGNED NULL,
    name VARCHAR(100) NOT NULL,
    lft INT UNSIGNED NULL,
    rgt INT UNSIGNED NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (parent_id) REFERENCES categories(id) ON DELETE CASCADE,
    INDEX idx_parent (parent_id)
);

INSERT INTO categories (id, parent_id, name) VALUES
(1, NULL, 'Electronics'),
(2, 1, 'Audio'),
(3, 1, 'Computers'),
(4, 2, 'Headphones'),
(5, 2, 'Speakers'),
(6, 4, 'Wireless Headphones'),
(7, 4, 'Wired Headphones'),
(8, 3, 'Laptops'),
(9, 3, 'Desktops'),
(10, 8, 'Gaming Laptops');

-- Adjacency: immediate children
SELECT id, name FROM categories WHERE parent_id = 4;

-- Adjacency: all descendants (recursive CTE, MySQL 8.0+)
WITH RECURSIVE cat_tree AS (
    SELECT id, name, parent_id, 0 AS depth
    FROM categories WHERE id = 4
    UNION ALL
    SELECT c.id, c.name, c.parent_id, ct.depth + 1
    FROM categories c
    JOIN cat_tree ct ON ct.id = c.parent_id
)
SELECT id, name, depth FROM cat_tree WHERE depth > 0 ORDER BY depth, name;

-- Adjacency: all ancestors
WITH RECURSIVE cat_ancestors AS (
    SELECT id, name, parent_id, 0 AS depth
    FROM categories WHERE id = 6
    UNION ALL
    SELECT c.id, c.name, c.parent_id, ca.depth + 1
    FROM categories c
    JOIN cat_ancestors ca ON ca.parent_id = c.id
)
SELECT id, name, depth FROM cat_ancestors ORDER BY depth DESC;

-- Set nested set values
UPDATE categories SET lft = 1, rgt = 20 WHERE id = 1;
UPDATE categories SET lft = 2, rgt = 13 WHERE id = 2;
UPDATE categories SET lft = 3, rgt = 8 WHERE id = 4;
UPDATE categories SET lft = 4, rgt = 5 WHERE id = 6;
UPDATE categories SET lft = 6, rgt = 7 WHERE id = 7;
UPDATE categories SET lft = 9, rgt = 12 WHERE id = 5;
UPDATE categories SET lft = 14, rgt = 19 WHERE id = 3;
UPDATE categories SET lft = 15, rgt = 18 WHERE id = 8;
UPDATE categories SET lft = 16, rgt = 17 WHERE id = 10;
UPDATE categories SET lft = 19, rgt = 20 WHERE id = 9;

-- Nested set: all descendants (no recursion)
SELECT c2.id, c2.name
FROM categories c1
JOIN categories c2 ON c2.lft > c1.lft AND c2.rgt < c1.rgt
WHERE c1.id = 4;

-- Nested set: all ancestors
SELECT c2.id, c2.name
FROM categories c1
JOIN categories c2 ON c1.lft > c2.lft AND c1.rgt < c2.rgt
WHERE c1.id = 6;
```
</details>

**Problem 3: Concurrent Inventory Reservation**

You have 10 units of Product X. Two customers try to buy 8 units each simultaneously. Ensure only one succeeds. Demonstrate with pessimistic and optimistic locking.

<details>
<summary>Solution&lt;/summary&gt;

```sql
CREATE TABLE inventory (
    product_id INT PRIMARY KEY,
    stock_qty INT UNSIGNED NOT NULL,
    reserved_qty INT UNSIGNED NOT NULL DEFAULT 0,
    version INT NOT NULL DEFAULT 1,
    CONSTRAINT chk_stock CHECK (stock_qty >= reserved_qty)
);

INSERT INTO inventory (product_id, stock_qty, reserved_qty) VALUES (1, 10, 0);

-- Pessimistic locking (FOR UPDATE)
START TRANSACTION;
SELECT stock_qty, reserved_qty FROM inventory WHERE product_id = 1 FOR UPDATE;
UPDATE inventory SET reserved_qty = reserved_qty + 8 WHERE product_id = 1;
COMMIT;

-- Second session blocks until first commits, then sees reserved_qty=8
-- and (10 - 8) = 2 < 8 Ã¢â€ â€™ fails

-- Optimistic locking (version column)
START TRANSACTION;
SELECT stock_qty, reserved_qty, version FROM inventory WHERE product_id = 1;
UPDATE inventory
SET reserved_qty = reserved_qty + 8, version = version + 1
WHERE product_id = 1 AND version = 1;
-- If affected_rows == 0 Ã¢â€ â€™ conflict, retry
COMMIT;

-- Atomic UPDATE with inline check
UPDATE inventory
SET reserved_qty = reserved_qty + 8
WHERE product_id = 1
  AND (stock_qty - reserved_qty) >= 8;
```
</details>

**Problem 4: Time-Series Rollup with Partitioning**

Design a system for storing and querying temperature sensor readings (10,000 sensors, one reading per minute). Create a partitioned table by month, write hourly average queries, and archive old partitions.

<details>
<summary>Solution&lt;/summary&gt;

```sql
CREATE TABLE sensor_readings (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    sensor_id INT UNSIGNED NOT NULL,
    temperature DECIMAL(5, 2) NOT NULL,
    humidity DECIMAL(5, 2) NULL,
    recorded_at DATETIME NOT NULL,
    PRIMARY KEY (id, recorded_at),
    INDEX idx_sensor_time (sensor_id, recorded_at)
)
PARTITION BY RANGE (TO_DAYS(recorded_at)) (
    PARTITION p_2024_q1 VALUES LESS THAN (TO_DAYS('2024-04-01')),
    PARTITION p_2024_q2 VALUES LESS THAN (TO_DAYS('2024-07-01')),
    PARTITION p_2024_q3 VALUES LESS THAN (TO_DAYS('2024-10-01')),
    PARTITION p_2024_q4 VALUES LESS THAN (TO_DAYS('2025-01-01')),
    PARTITION p_future VALUES LESS THAN MAXVALUE
);

-- Hourly rollup
SELECT
    sensor_id,
    DATE(recorded_at) AS reading_date,
    HOUR(recorded_at) AS reading_hour,
    COUNT(*) AS reading_count,
    ROUND(AVG(temperature), 2) AS avg_temp,
    ROUND(MAX(temperature), 2) AS max_temp,
    ROUND(MIN(temperature), 2) AS min_temp,
    ROUND(AVG(humidity), 2) AS avg_humidity
FROM sensor_readings
WHERE sensor_id = 1
  AND recorded_at >= '2024-06-01'
  AND recorded_at < '2024-06-02'
GROUP BY sensor_id, DATE(recorded_at), HOUR(recorded_at)
ORDER BY reading_hour;

-- Verify partition pruning
EXPLAIN SELECT *
FROM sensor_readings
WHERE recorded_at >= '2024-06-01'
  AND recorded_at < '2024-07-01';

-- Drop old partition (instant)
ALTER TABLE sensor_readings DROP PARTITION p_2024_q1;
```
</details>