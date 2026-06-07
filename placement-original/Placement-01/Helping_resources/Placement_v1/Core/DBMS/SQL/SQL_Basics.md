# SQL Basics

## Introduction to SQL

**SQL (Structured Query Language)** is a standard language for storing, manipulating, and retrieving data in relational database management systems. SQL is used to communicate with a database.

## SQL Commands Categories

### 1. Data Definition Language (DDL)
Commands that define the database structure:
- **CREATE**: Creates database objects (tables, views, etc.)
- **ALTER**: Modifies database objects
- **DROP**: Deletes database objects
- **TRUNCATE**: Removes all records from a table
- **RENAME**: Renames database objects

### 2. Data Manipulation Language (DML)
Commands that manipulate data:
- **SELECT**: Retrieves data from database
- **INSERT**: Adds new records
- **UPDATE**: Modifies existing records
- **DELETE**: Removes records

### 3. Data Control Language (DCL)
Commands that control access to data:
- **GRANT**: Gives privileges to users
- **REVOKE**: Takes away privileges

### 4. Transaction Control Language (TCL)
Commands that control transactions:
- **COMMIT**: Saves changes
- **ROLLBACK**: Undoes changes
- **SAVEPOINT**: Creates points to roll back to
- **SET TRANSACTION**: Sets transaction properties

## Basic SQL Syntax

### Creating a Database
```sql
CREATE DATABASE database_name;
```

### Creating a Table
```sql
CREATE TABLE table_name (
    column1 datatype constraints,
    column2 datatype constraints,
    ...
);
```

### Common Data Types
- **Numeric**: INT, FLOAT, DECIMAL
- **String**: VARCHAR, CHAR, TEXT
- **Date/Time**: DATE, TIME, DATETIME, TIMESTAMP
- **Boolean**: BOOLEAN
- **Binary**: BLOB, BINARY

### Constraints
- **NOT NULL**: Column cannot have NULL value
- **UNIQUE**: All values in column must be unique
- **PRIMARY KEY**: Uniquely identifies each record
- **FOREIGN KEY**: Links to primary key in another table
- **CHECK**: Ensures values meet specific condition
- **DEFAULT**: Sets default value for column

## Basic SQL Operations

### SELECT Statement
```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition
GROUP BY column
HAVING condition
ORDER BY column ASC/DESC
LIMIT number;
```

### INSERT Statement
```sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);
```

### UPDATE Statement
```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

### DELETE Statement
```sql
DELETE FROM table_name
WHERE condition;
```

## SQL Clauses

### WHERE Clause
Filters records based on a condition:
```sql
SELECT * FROM employees WHERE salary > 50000;
```

#### Operators in WHERE Clause
- **=, <>, <, >, <=, >=**: Comparison operators
- **BETWEEN**: Between a range
- **LIKE**: Pattern matching with wildcards
- **IN**: Matches values in a list
- **AND, OR, NOT**: Logical operators

### GROUP BY Clause
Groups rows with same values:
```sql
SELECT department, COUNT(*) 
FROM employees 
GROUP BY department;
```

### HAVING Clause
Filters groups based on a condition:
```sql
SELECT department, AVG(salary) 
FROM employees 
GROUP BY department 
HAVING AVG(salary) > 50000;
```

### ORDER BY Clause
Sorts the result set:
```sql
SELECT * FROM employees 
ORDER BY last_name ASC, first_name DESC;
```

## SQL Joins

Joins combine rows from two or more tables based on a related column.

### INNER JOIN
Returns records with matching values in both tables:
```sql
SELECT orders.order_id, customers.customer_name
FROM orders
INNER JOIN customers ON orders.customer_id = customers.customer_id;
```

### LEFT JOIN (LEFT OUTER JOIN)
Returns all records from left table and matched records from right:
```sql
SELECT customers.customer_name, orders.order_id
FROM customers
LEFT JOIN orders ON customers.customer_id = orders.customer_id;
```

### RIGHT JOIN (RIGHT OUTER JOIN)
Returns all records from right table and matched records from left:
```sql
SELECT orders.order_id, customers.customer_name
FROM orders
RIGHT JOIN customers ON orders.customer_id = customers.customer_id;
```

### FULL JOIN (FULL OUTER JOIN)
Returns all records when there's a match in either table:
```sql
SELECT customers.customer_name, orders.order_id
FROM customers
FULL JOIN orders ON customers.customer_id = orders.customer_id;
```

### SELF JOIN
Joins a table to itself:
```sql
SELECT e1.name AS employee, e2.name AS manager
FROM employees e1
JOIN employees e2 ON e1.manager_id = e2.employee_id;
```

## SQL Functions

### Aggregate Functions
- **COUNT()**: Returns number of rows
- **SUM()**: Returns sum of values
- **AVG()**: Returns average of values
- **MIN()**: Returns minimum value
- **MAX()**: Returns maximum value

```sql
SELECT COUNT(*), SUM(salary), AVG(salary), MIN(salary), MAX(salary)
FROM employees;
```

### String Functions
- **CONCAT()**: Joins strings
- **SUBSTRING()**: Extracts part of string
- **LENGTH()**: Returns string length
- **UPPER()**: Converts to uppercase
- **LOWER()**: Converts to lowercase

### Date Functions
- **NOW()**: Current date and time
- **CURDATE()**: Current date
- **YEAR()**: Extracts year from date
- **MONTH()**: Extracts month from date
- **DAY()**: Extracts day from date

## SQL Subqueries

A subquery is a query nested inside another query:

```sql
SELECT employee_name
FROM employees
WHERE department_id IN (
    SELECT department_id
    FROM departments
    WHERE location = 'New York'
);
```

### Types of Subqueries
- **Single-row**: Returns one row
- **Multi-row**: Returns multiple rows
- **Correlated**: References columns from outer query

## SQL Views

A view is a virtual table based on the result of a SELECT query:

```sql
CREATE VIEW employee_details AS
SELECT e.employee_id, e.name, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id;
```

## SQL Indexes

Indexes improve query performance:

```sql
CREATE INDEX idx_employee_name
ON employees (last_name, first_name);
```

## References
1. [GeeksforGeeks - SQL Tutorial](https://www.geeksforgeeks.org/sql-tutorial/)
2. [GeeksforGeeks - SQL Commands](https://www.geeksforgeeks.org/sql-ddl-dml-dcl-tcl-commands/)
3. [GeeksforGeeks - SQL Joins](https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/)
4. [GeeksforGeeks - SQL Functions](https://www.geeksforgeeks.org/aggregate-functions-in-sql/)