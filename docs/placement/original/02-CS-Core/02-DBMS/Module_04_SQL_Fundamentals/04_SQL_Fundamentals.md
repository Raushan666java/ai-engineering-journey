# Module 4: SQL Fundamentals

## What is SQL?
Structured Query Language - standard language for relational databases

## SQL Categories

### 1. DDL (Data Definition Language)
- CREATE, ALTER, DROP, TRUNCATE
- Defines database structure

### 2. DML (Data Manipulation Language)
- INSERT, UPDATE, DELETE, SELECT
- Manipulates data

### 3. DCL (Data Control Language)
- GRANT, REVOKE
- Controls access permissions

### 4. TCL (Transaction Control Language)
- COMMIT, ROLLBACK, SAVEPOINT
- Manages transactions

## Basic SQL Commands

### CREATE DATABASE
```sql
CREATE DATABASE company_db;
USE company_db;
```

### CREATE TABLE
```sql
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    salary DECIMAL(10,2),
    dept_id INT,
    hire_date DATE
);
```

### INSERT DATA
```sql
INSERT INTO employees VALUES 
(1, 'John Doe', 50000.00, 101, '2023-01-15'),
(2, 'Jane Smith', 60000.00, 102, '2023-02-20');
```

### SELECT DATA
```sql
-- Basic SELECT
SELECT * FROM employees;
SELECT name, salary FROM employees;

-- WHERE clause
SELECT * FROM employees WHERE salary > 55000;

-- ORDER BY
SELECT * FROM employees ORDER BY salary DESC;

-- LIMIT
SELECT * FROM employees LIMIT 5;
```

### UPDATE DATA
```sql
UPDATE employees 
SET salary = 55000 
WHERE emp_id = 1;
```

### DELETE DATA
```sql
DELETE FROM employees WHERE emp_id = 2;
```

## Data Types

### Numeric Types
- INT, BIGINT, DECIMAL, FLOAT, DOUBLE

### String Types
- VARCHAR(n), CHAR(n), TEXT

### Date/Time Types
- DATE, TIME, DATETIME, TIMESTAMP

### Boolean Type
- BOOLEAN (TRUE/FALSE)

## Constraints
```sql
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) CHECK (price > 0),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
```

## Built-in Functions

### String Functions
- CONCAT(), LENGTH(), UPPER(), LOWER(), SUBSTRING()

### Numeric Functions
- ABS(), ROUND(), CEIL(), FLOOR(), MOD()

### Date Functions
- NOW(), CURDATE(), YEAR(), MONTH(), DAY()

### Aggregate Functions
- COUNT(), SUM(), AVG(), MAX(), MIN()

## Practical Exercises
1. Create a database for a school management system
2. Insert sample data for students, courses, and enrollments
3. Write queries to:
   - Find all students in a specific course
   - Calculate average grade for each course
   - List students with highest grades

## Lab Assignment
Build a complete employee management database with:
- Employees table
- Departments table
- Projects table
- Employee-Project assignments

## Next Module
Module 5: Advanced SQL