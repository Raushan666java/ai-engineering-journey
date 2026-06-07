# SQL Practice Problems

## Database Setup

Use the following schema for practice problems:

```sql
-- Create tables
CREATE TABLE Employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(20),
    hire_date DATE,
    job_id VARCHAR(10),
    salary DECIMAL(10, 2),
    commission_pct DECIMAL(4, 2),
    manager_id INT,
    department_id INT
);

CREATE TABLE Departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50),
    manager_id INT,
    location_id INT
);

CREATE TABLE Locations (
    location_id INT PRIMARY KEY,
    street_address VARCHAR(100),
    postal_code VARCHAR(20),
    city VARCHAR(50),
    state_province VARCHAR(50),
    country_id CHAR(2)
);

CREATE TABLE Jobs (
    job_id VARCHAR(10) PRIMARY KEY,
    job_title VARCHAR(50),
    min_salary DECIMAL(10, 2),
    max_salary DECIMAL(10, 2)
);

CREATE TABLE JobHistory (
    employee_id INT,
    start_date DATE,
    end_date DATE,
    job_id VARCHAR(10),
    department_id INT,
    PRIMARY KEY (employee_id, start_date)
);
```

## Basic SQL Problems

### Problem 1: Select all employees with salary greater than average
```sql
SELECT employee_id, first_name, last_name, salary
FROM Employees
WHERE salary > (SELECT AVG(salary) FROM Employees);
```

### Problem 2: Find the second highest salary
```sql
SELECT MAX(salary) AS second_highest_salary
FROM Employees
WHERE salary < (SELECT MAX(salary) FROM Employees);
```

### Problem 3: List employees with their department names
```sql
SELECT e.employee_id, e.first_name, e.last_name, d.department_name
FROM Employees e
JOIN Departments d ON e.department_id = d.department_id;
```

### Problem 4: Count employees in each department
```sql
SELECT d.department_name, COUNT(e.employee_id) AS employee_count
FROM Departments d
LEFT JOIN Employees e ON d.department_id = e.department_id
GROUP BY d.department_name
ORDER BY employee_count DESC;
```

### Problem 5: Find employees who earn more than their managers
```sql
SELECT e.first_name, e.last_name, e.salary
FROM Employees e
JOIN Employees m ON e.manager_id = m.employee_id
WHERE e.salary > m.salary;
```

## Intermediate SQL Problems

### Problem 6: List departments with no employees
```sql
SELECT d.department_id, d.department_name
FROM Departments d
LEFT JOIN Employees e ON d.department_id = e.department_id
WHERE e.employee_id IS NULL;
```

### Problem 7: Find employees who have switched jobs
```sql
SELECT e.employee_id, e.first_name, e.last_name, COUNT(jh.job_id) AS job_count
FROM Employees e
JOIN JobHistory jh ON e.employee_id = jh.employee_id
GROUP BY e.employee_id, e.first_name, e.last_name
HAVING COUNT(jh.job_id) > 1;
```

### Problem 8: Calculate average salary by department and job title
```sql
SELECT d.department_name, j.job_title, AVG(e.salary) AS avg_salary
FROM Employees e
JOIN Departments d ON e.department_id = d.department_id
JOIN Jobs j ON e.job_id = j.job_id
GROUP BY d.department_name, j.job_title
ORDER BY d.department_name, avg_salary DESC;
```

### Problem 9: Find employees who have been with the company for more than 5 years
```sql
SELECT employee_id, first_name, last_name, hire_date,
       DATEDIFF(YEAR, hire_date, GETDATE()) AS years_of_service
FROM Employees
WHERE DATEDIFF(YEAR, hire_date, GETDATE()) > 5;
```

### Problem 10: List employees with their department and location
```sql
SELECT e.employee_id, e.first_name, e.last_name, 
       d.department_name, l.city, l.country_id
FROM Employees e
JOIN Departments d ON e.department_id = d.department_id
JOIN Locations l ON d.location_id = l.location_id;
```

## Advanced SQL Problems

### Problem 11: Find departments with highest average salary
```sql
WITH DeptAvgSalary AS (
    SELECT d.department_id, d.department_name, AVG(e.salary) AS avg_salary
    FROM Departments d
    JOIN Employees e ON d.department_id = e.department_id
    GROUP BY d.department_id, d.department_name
)
SELECT department_id, department_name, avg_salary
FROM DeptAvgSalary
WHERE avg_salary = (SELECT MAX(avg_salary) FROM DeptAvgSalary);
```

### Problem 12: Calculate running total of salary by hire date
```sql
SELECT employee_id, first_name, last_name, hire_date, salary,
       SUM(salary) OVER (ORDER BY hire_date) AS running_total
FROM Employees;
```

### Problem 13: Rank employees by salary within each department
```sql
SELECT employee_id, first_name, last_name, department_id, salary,
       RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS salary_rank
FROM Employees;
```

### Problem 14: Find employees who earn more than average in their department
```sql
SELECT e.employee_id, e.first_name, e.last_name, e.department_id, e.salary
FROM Employees e
JOIN (
    SELECT department_id, AVG(salary) AS avg_salary
    FROM Employees
    GROUP BY department_id
) d ON e.department_id = d.department_id
WHERE e.salary > d.avg_salary;
```

### Problem 15: List employees with their job history
```sql
SELECT e.employee_id, e.first_name, e.last_name, 
       jh.start_date, jh.end_date, j.job_title
FROM Employees e
LEFT JOIN JobHistory jh ON e.employee_id = jh.employee_id
LEFT JOIN Jobs j ON jh.job_id = j.job_id
ORDER BY e.employee_id, jh.start_date;
```

## Complex SQL Problems

### Problem 16: Find employees who have worked in all departments
```sql
SELECT e.employee_id, e.first_name, e.last_name
FROM Employees e
WHERE (
    SELECT COUNT(DISTINCT department_id) 
    FROM Departments
) = (
    SELECT COUNT(DISTINCT department_id)
    FROM JobHistory
    WHERE employee_id = e.employee_id
);
```

### Problem 17: Calculate median salary
```sql
-- For SQL Server
WITH SalaryRank AS (
    SELECT salary,
           ROW_NUMBER() OVER (ORDER BY salary) AS row_num,
           COUNT(*) OVER () AS total_count
    FROM Employees
)
SELECT AVG(salary) AS median_salary
FROM SalaryRank
WHERE row_num BETWEEN total_count/2.0 AND total_count/2.0 + 1;
```

### Problem 18: Pivot table showing count of employees by department and job title
```sql
-- For SQL Server
SELECT *
FROM (
    SELECT d.department_name, j.job_title
    FROM Employees e
    JOIN Departments d ON e.department_id = d.department_id
    JOIN Jobs j ON e.job_id = j.job_id
) AS SourceTable
PIVOT (
    COUNT(job_title)
    FOR job_title IN ([Manager], [Analyst], [Developer], [HR], [Accountant])
) AS PivotTable;
```

### Problem 19: Find departments where all employees earn more than company average
```sql
SELECT d.department_id, d.department_name
FROM Departments d
WHERE NOT EXISTS (
    SELECT 1
    FROM Employees e
    WHERE e.department_id = d.department_id
    AND e.salary <= (SELECT AVG(salary) FROM Employees)
);
```

### Problem 20: Calculate employee turnover rate by department
```sql
WITH DepartmentCounts AS (
    SELECT department_id, COUNT(*) AS current_count
    FROM Employees
    GROUP BY department_id
),
TurnoverCounts AS (
    SELECT department_id, COUNT(*) AS turnover_count
    FROM JobHistory
    WHERE end_date IS NOT NULL
    GROUP BY department_id
)
SELECT d.department_name, 
       COALESCE(t.turnover_count, 0) AS turnover_count,
       COALESCE(dc.current_count, 0) AS current_count,
       CASE 
           WHEN COALESCE(dc.current_count, 0) = 0 THEN 0
           ELSE CAST(COALESCE(t.turnover_count, 0) AS FLOAT) / COALESCE(dc.current_count, 1)
       END AS turnover_rate
FROM Departments d
LEFT JOIN DepartmentCounts dc ON d.department_id = dc.department_id
LEFT JOIN TurnoverCounts t ON d.department_id = t.department_id;
```

## References
1. [GeeksforGeeks - SQL Practice Questions](https://www.geeksforgeeks.org/sql-interview-questions/)
2. [GeeksforGeeks - Advanced SQL Queries](https://www.geeksforgeeks.org/advanced-sql-queries-in-dbms/)
3. [GeeksforGeeks - SQL Window Functions](https://www.geeksforgeeks.org/window-functions-in-sql/)