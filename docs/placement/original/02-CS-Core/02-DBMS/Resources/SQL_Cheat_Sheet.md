# SQL Quick Reference Cheat Sheet

## DDL (Data Definition Language)

### CREATE
```sql
CREATE DATABASE company_db;
CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    salary DECIMAL(10,2),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(id)
);
```

### ALTER
```sql
ALTER TABLE employees ADD COLUMN email VARCHAR(100);
ALTER TABLE employees MODIFY COLUMN salary DECIMAL(12,2);
ALTER TABLE employees DROP COLUMN email;
```

### DROP
```sql
DROP TABLE employees;
DROP DATABASE company_db;
```

## DML (Data Manipulation Language)

### INSERT
```sql
INSERT INTO employees (name, salary, dept_id) VALUES ('John', 50000, 1);
INSERT INTO employees VALUES (1, 'Jane', 60000, 2);
```

### SELECT
```sql
SELECT * FROM employees;
SELECT name, salary FROM employees WHERE salary > 50000;
SELECT COUNT(*) FROM employees GROUP BY dept_id;
```

### UPDATE
```sql
UPDATE employees SET salary = 55000 WHERE id = 1;
UPDATE employees SET salary = salary * 1.1 WHERE dept_id = 1;
```

### DELETE
```sql
DELETE FROM employees WHERE id = 1;
DELETE FROM employees WHERE salary < 30000;
```

## Joins
```sql
-- INNER JOIN
SELECT e.name, d.dept_name FROM employees e INNER JOIN departments d ON e.dept_id = d.id;

-- LEFT JOIN
SELECT e.name, d.dept_name FROM employees e LEFT JOIN departments d ON e.dept_id = d.id;

-- RIGHT JOIN
SELECT e.name, d.dept_name FROM employees e RIGHT JOIN departments d ON e.dept_id = d.id;
```

## Aggregate Functions
```sql
SELECT COUNT(*) FROM employees;
SELECT AVG(salary) FROM employees;
SELECT MAX(salary), MIN(salary) FROM employees;
SELECT SUM(salary) FROM employees;
```

## String Functions
```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;
SELECT UPPER(name) FROM employees;
SELECT LENGTH(name) FROM employees;
SELECT SUBSTRING(name, 1, 3) FROM employees;
```

## Date Functions
```sql
SELECT NOW();
SELECT CURDATE();
SELECT YEAR(hire_date) FROM employees;
SELECT DATEDIFF(NOW(), hire_date) FROM employees;
```

## Window Functions
```sql
SELECT name, salary, ROW_NUMBER() OVER (ORDER BY salary DESC) as rank FROM employees;
SELECT name, salary, RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) FROM employees;
```

## Common Constraints
```sql
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) CHECK (price > 0),
    category_id INT,
    UNIQUE(name),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
```