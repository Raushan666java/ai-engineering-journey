# Advanced SQL Queries in MySQL

## Aggregate Functions

Aggregate functions perform calculations on a set of values and return a single value.

### COUNT()
Counts the number of rows or non-NULL values.

```sql
-- Count all rows
SELECT COUNT(*) FROM employees;

-- Count non-NULL values in a column
SELECT COUNT(phone) FROM employees;

-- Count distinct values
SELECT COUNT(DISTINCT department_id) FROM employees;
```

### SUM()
Calculates the sum of numeric values.

```sql
-- Sum of all salaries
SELECT SUM(salary) FROM employees;

-- Sum by department
SELECT department_id, SUM(salary) AS total_salary
FROM employees
GROUP BY department_id;
```

### AVG()
Calculates the average of numeric values.

```sql
-- Average salary
SELECT AVG(salary) FROM employees;

-- Average salary by department
SELECT department_id, AVG(salary) AS avg_salary
FROM employees
GROUP BY department_id;
```

### MIN() and MAX()
Find the minimum and maximum values.

```sql
-- Minimum and maximum salary
SELECT MIN(salary) AS lowest_salary, MAX(salary) AS highest_salary
FROM employees;

-- Earliest and latest hire date
SELECT MIN(hire_date) AS first_hire, MAX(hire_date) AS latest_hire
FROM employees;
```

### Other Aggregate Functions
- `STD()`, `STDDEV()`: Standard deviation
- `VARIANCE()`: Variance
- `GROUP_CONCAT()`: Concatenates values from multiple rows

```sql
-- Concatenate employee names by department
SELECT department_id, GROUP_CONCAT(first_name SEPARATOR ', ') AS employees
FROM employees
GROUP BY department_id;
```

## GROUP BY Clause

Groups rows that have the same values into summary rows.

```sql
-- Count employees by department
SELECT department_id, COUNT(*) AS employee_count
FROM employees
GROUP BY department_id;

-- Multiple grouping columns
SELECT department_id, job_title, COUNT(*) AS employee_count
FROM employees
GROUP BY department_id, job_title;

-- With ordering
SELECT department_id, COUNT(*) AS employee_count
FROM employees
GROUP BY department_id
ORDER BY employee_count DESC;
```

### GROUP BY with Expressions
```sql
-- Group by year of hire date
SELECT YEAR(hire_date) AS hire_year, COUNT(*) AS hires
FROM employees
GROUP BY YEAR(hire_date);

-- Group by salary range
SELECT 
    CASE 
        WHEN salary < 30000 THEN 'Low'
        WHEN salary BETWEEN 30000 AND 70000 THEN 'Medium'
        ELSE 'High'
    END AS salary_range,
    COUNT(*) AS employee_count
FROM employees
GROUP BY salary_range;
```

## HAVING Clause

Filters groups based on aggregate conditions (similar to WHERE but for grouped data).

```sql
-- Departments with more than 5 employees
SELECT department_id, COUNT(*) AS employee_count
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 5;

-- Departments with average salary over 50000
SELECT department_id, AVG(salary) AS avg_salary
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 50000;

-- Combining WHERE and HAVING
SELECT department_id, COUNT(*) AS employee_count
FROM employees
WHERE hire_date > '2020-01-01'
GROUP BY department_id
HAVING COUNT(*) > 3;
```

## Subqueries

A subquery is a query nested inside another query.

### Subqueries in WHERE Clause
```sql
-- Employees in the Sales department
SELECT employee_id, first_name, last_name
FROM employees
WHERE department_id = (
    SELECT department_id 
    FROM departments 
    WHERE department_name = 'Sales'
);

-- Employees with salary above average
SELECT employee_id, first_name, last_name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary) 
    FROM employees
);
```

### Subqueries with IN, NOT IN, ANY, ALL
```sql
-- Employees in Sales or Marketing departments
SELECT employee_id, first_name, last_name
FROM employees
WHERE department_id IN (
    SELECT department_id 
    FROM departments 
    WHERE department_name IN ('Sales', 'Marketing')
);

-- Employees not assigned to any project
SELECT employee_id, first_name, last_name
FROM employees
WHERE employee_id NOT IN (
    SELECT employee_id 
    FROM project_assignments
);

-- Employees with salary greater than ANY/ALL manager
SELECT employee_id, first_name, last_name, salary
FROM employees
WHERE salary > ANY (
    SELECT salary 
    FROM employees 
    WHERE job_title = 'Manager'
);
```

### Correlated Subqueries
Subqueries that reference columns from the outer query.

```sql
-- Employees with salary above their department average
SELECT e.employee_id, e.first_name, e.last_name, e.salary, e.department_id
FROM employees e
WHERE e.salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE department_id = e.department_id
);
```

### Subqueries in SELECT Clause
```sql
-- Employee details with department name
SELECT 
    e.employee_id, 
    e.first_name, 
    e.last_name,
    (SELECT department_name FROM departments d WHERE d.department_id = e.department_id) AS department
FROM employees e;
```

### Subqueries in FROM Clause (Derived Tables)
```sql
-- Department statistics
SELECT 
    d.department_name,
    dept_stats.employee_count,
    dept_stats.avg_salary
FROM departments d
JOIN (
    SELECT 
        department_id, 
        COUNT(*) AS employee_count,
        AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department_id
) AS dept_stats ON d.department_id = dept_stats.department_id;
```

## Derived Tables

A derived table is a subquery in the FROM clause that acts as a temporary table.

```sql
-- Employees with salary rank within their department
SELECT 
    e.employee_id,
    e.first_name,
    e.last_name,
    e.department_id,
    e.salary,
    ranked.rank
FROM employees e
JOIN (
    SELECT 
        employee_id,
        DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank
    FROM employees
) AS ranked ON e.employee_id = ranked.employee_id
WHERE ranked.rank <= 3;
```

## Common Table Expressions (CTEs)

CTEs provide a way to write auxiliary statements for use in a larger query.

### Basic CTE
```sql
WITH employee_counts AS (
    SELECT department_id, COUNT(*) AS employee_count
    FROM employees
    GROUP BY department_id
)
SELECT 
    d.department_name,
    COALESCE(ec.employee_count, 0) AS employee_count
FROM departments d
LEFT JOIN employee_counts ec ON d.department_id = ec.department_id;
```

### Multiple CTEs
```sql
WITH 
dept_counts AS (
    SELECT department_id, COUNT(*) AS employee_count
    FROM employees
    GROUP BY department_id
),
dept_salaries AS (
    SELECT department_id, SUM(salary) AS total_salary
    FROM employees
    GROUP BY department_id
)
SELECT 
    d.department_name,
    dc.employee_count,
    ds.total_salary,
    ds.total_salary / dc.employee_count AS avg_salary
FROM departments d
JOIN dept_counts dc ON d.department_id = dc.department_id
JOIN dept_salaries ds ON d.department_id = ds.department_id;
```

### Recursive CTEs
```sql
-- Employee hierarchy
WITH RECURSIVE employee_hierarchy AS (
    -- Base case: top-level employees (no manager)
    SELECT 
        employee_id, 
        first_name, 
        last_name, 
        manager_id, 
        0 AS level
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- Recursive case: employees with managers
    SELECT 
        e.employee_id, 
        e.first_name, 
        e.last_name, 
        e.manager_id, 
        eh.level + 1
    FROM employees e
    JOIN employee_hierarchy eh ON e.manager_id = eh.employee_id
)
SELECT 
    employee_id,
    CONCAT(REPEAT('    ', level), first_name, ' ', last_name) AS employee_name,
    level
FROM employee_hierarchy
ORDER BY level, first_name;
```

## Window Functions

Window functions perform calculations across a set of rows related to the current row.

### ROW_NUMBER(), RANK(), DENSE_RANK()
```sql
-- Assign row numbers to employees by department
SELECT 
    employee_id,
    first_name,
    last_name,
    department_id,
    salary,
    ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS row_num,
    RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank_num,
    DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS dense_rank_num
FROM employees;
```

### NTILE()
```sql
-- Divide employees into 4 salary quartiles
SELECT 
    employee_id,
    first_name,
    last_name,
    salary,
    NTILE(4) OVER (ORDER BY salary) AS quartile
FROM employees;
```

### Aggregate Window Functions
```sql
-- Running total of salary
SELECT 
    employee_id,
    first_name,
    last_name,
    salary,
    SUM(salary) OVER (ORDER BY employee_id) AS running_total,
    AVG(salary) OVER (PARTITION BY department_id) AS dept_avg
FROM employees;
```

### Window Frame Specification
```sql
-- Moving average of last 3 salaries
SELECT 
    employee_id,
    first_name,
    last_name,
    hire_date,
    salary,
    AVG(salary) OVER (
        ORDER BY hire_date 
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS moving_avg_salary
FROM employees;
```

### LEAD() and LAG()
```sql
-- Compare salary with next and previous employee
SELECT 
    employee_id,
    first_name,
    last_name,
    salary,
    LAG(salary) OVER (ORDER BY employee_id) AS prev_salary,
    LEAD(salary) OVER (ORDER BY employee_id) AS next_salary
FROM employees;
```

### FIRST_VALUE() and LAST_VALUE()
```sql
-- First and last salary in each department
SELECT 
    employee_id,
    first_name,
    last_name,
    department_id,
    salary,
    FIRST_VALUE(salary) OVER (
        PARTITION BY department_id 
        ORDER BY salary 
        RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) AS lowest_salary,
    LAST_VALUE(salary) OVER (
        PARTITION BY department_id 
        ORDER BY salary 
        RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) AS highest_salary
FROM employees;
```