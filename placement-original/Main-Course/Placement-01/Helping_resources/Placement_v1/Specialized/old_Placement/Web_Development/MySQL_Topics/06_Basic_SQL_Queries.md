# Basic SQL Queries in MySQL

## SELECT Statement Basics

The `SELECT` statement is used to retrieve data from one or more tables.

### Basic Syntax
```sql
SELECT column1, column2, ...
FROM table_name;
```

### Selecting All Columns
```sql
SELECT * FROM employees;
```

### Selecting Specific Columns
```sql
SELECT first_name, last_name, email FROM employees;
```

### Column Aliases
```sql
SELECT 
    first_name AS fname,
    last_name AS lname,
    hire_date AS "Date Hired"
FROM employees;
```

### Expressions in SELECT
```sql
SELECT 
    product_name,
    price,
    quantity,
    price * quantity AS total_value
FROM products;
```

### Concatenating Columns
```sql
SELECT 
    CONCAT(first_name, ' ', last_name) AS full_name,
    email
FROM employees;
```

### Distinct Values
```sql
SELECT DISTINCT department_id FROM employees;

-- Multiple columns
SELECT DISTINCT city, state FROM addresses;
```

## WHERE Clause and Filtering Data

The `WHERE` clause is used to filter records based on specific conditions.

### Basic Comparison Operators
```sql
-- Equal to
SELECT * FROM employees WHERE department_id = 3;

-- Not equal to
SELECT * FROM employees WHERE department_id != 3;
-- or
SELECT * FROM employees WHERE department_id <> 3;

-- Greater than
SELECT * FROM products WHERE price > 100;

-- Less than
SELECT * FROM products WHERE price < 50;

-- Greater than or equal to
SELECT * FROM products WHERE price >= 100;

-- Less than or equal to
SELECT * FROM products WHERE price <= 50;
```

### Logical Operators

#### AND
```sql
SELECT * FROM employees 
WHERE department_id = 3 AND salary > 50000;
```

#### OR
```sql
SELECT * FROM employees 
WHERE department_id = 3 OR department_id = 4;
```

#### NOT
```sql
SELECT * FROM employees 
WHERE NOT department_id = 3;
```

### BETWEEN Operator
```sql
SELECT * FROM products 
WHERE price BETWEEN 50 AND 100;

-- With dates
SELECT * FROM orders 
WHERE order_date BETWEEN '2023-01-01' AND '2023-12-31';
```

### IN Operator
```sql
SELECT * FROM employees 
WHERE department_id IN (3, 4, 7);

-- With subquery
SELECT * FROM employees 
WHERE department_id IN (SELECT department_id FROM departments WHERE location = 'New York');
```

### LIKE Operator
```sql
-- Names starting with 'J'
SELECT * FROM employees 
WHERE first_name LIKE 'J%';

-- Names ending with 'son'
SELECT * FROM employees 
WHERE last_name LIKE '%son';

-- Names containing 'an'
SELECT * FROM employees 
WHERE first_name LIKE '%an%';

-- Names with exactly 5 characters
SELECT * FROM employees 
WHERE first_name LIKE '_____';

-- Names with second character 'a'
SELECT * FROM employees 
WHERE first_name LIKE '_a%';
```

### IS NULL / IS NOT NULL
```sql
-- Employees without a phone number
SELECT * FROM employees 
WHERE phone IS NULL;

-- Employees with a phone number
SELECT * FROM employees 
WHERE phone IS NOT NULL;
```

## ORDER BY Clause

The `ORDER BY` clause is used to sort the result set.

### Basic Sorting
```sql
-- Ascending order (default)
SELECT * FROM employees 
ORDER BY last_name;

-- Descending order
SELECT * FROM employees 
ORDER BY salary DESC;
```

### Multiple Columns
```sql
SELECT * FROM employees 
ORDER BY department_id, salary DESC;
```

### Sorting by Column Position
```sql
SELECT first_name, last_name, hire_date FROM employees 
ORDER BY 3; -- Sort by the third column (hire_date)
```

### Sorting by Expression
```sql
SELECT first_name, last_name, salary FROM employees 
ORDER BY salary * 0.1 DESC; -- Sort by 10% of salary
```

### Sorting with NULL Values
```sql
-- NULLs first (in MySQL)
SELECT * FROM employees 
ORDER BY phone IS NULL DESC, phone;

-- NULLs last
SELECT * FROM employees 
ORDER BY phone IS NULL, phone;
```

## LIMIT Clause

The `LIMIT` clause is used to restrict the number of rows returned.

### Basic Limit
```sql
-- Return first 10 employees
SELECT * FROM employees 
LIMIT 10;
```

### Offset and Limit (for pagination)
```sql
-- Skip first 10 rows, return next 10
SELECT * FROM employees 
LIMIT 10, 10;
-- or
SELECT * FROM employees 
LIMIT 10 OFFSET 10;
```

### Combining with ORDER BY
```sql
-- Get top 5 highest paid employees
SELECT * FROM employees 
ORDER BY salary DESC 
LIMIT 5;
```

## DISTINCT Keyword

The `DISTINCT` keyword is used to return only distinct (unique) values.

```sql
-- Unique departments
SELECT DISTINCT department_id FROM employees;

-- Unique combinations
SELECT DISTINCT city, state FROM addresses;
```

### DISTINCT with COUNT
```sql
-- Count unique departments
SELECT COUNT(DISTINCT department_id) FROM employees;
```

## NULL Values Handling

### Filtering NULL Values
```sql
-- Find employees without a manager
SELECT * FROM employees 
WHERE manager_id IS NULL;

-- Find employees with a manager
SELECT * FROM employees 
WHERE manager_id IS NOT NULL;
```

### IFNULL Function
```sql
-- Replace NULL with a default value
SELECT 
    first_name,
    last_name,
    IFNULL(phone, 'No Phone') AS contact_number
FROM employees;
```

### COALESCE Function
```sql
-- Return the first non-NULL value
SELECT 
    first_name,
    last_name,
    COALESCE(mobile_phone, office_phone, 'No Contact') AS contact_number
FROM employees;
```

### NULLIF Function
```sql
-- Return NULL if two expressions are equal
SELECT NULLIF(10, 10); -- Returns NULL
SELECT NULLIF(10, 20); -- Returns 10
```

## Aliases for Tables and Columns

### Column Aliases
```sql
SELECT 
    first_name AS "First Name",
    last_name AS "Last Name",
    hire_date AS "Hire Date"
FROM employees;
```

### Table Aliases
```sql
SELECT e.first_name, e.last_name, d.department_name
FROM employees e, departments d
WHERE e.department_id = d.department_id;
```

### Aliases in Joins
```sql
SELECT e.first_name, e.last_name, d.department_name
FROM employees AS e
JOIN departments AS d ON e.department_id = d.department_id;
```

## Best Practices for Basic SQL Queries

1. **Be specific with column selection**: Avoid `SELECT *` in production code.
2. **Use meaningful aliases**: Make query results more readable.
3. **Filter data efficiently**: Use appropriate WHERE conditions.
4. **Consider performance**: Add indexes for columns used in WHERE and JOIN clauses.
5. **Use LIMIT for large result sets**: Especially for user-facing queries.
6. **Handle NULL values appropriately**: Use IS NULL/IS NOT NULL instead of = NULL.
7. **Format SQL for readability**: Use consistent indentation and line breaks.
8. **Comment complex queries**: Explain the purpose and logic of the query.