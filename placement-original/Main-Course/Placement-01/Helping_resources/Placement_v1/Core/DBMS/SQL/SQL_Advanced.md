# Advanced SQL

## Stored Procedures

A **Stored Procedure** is a prepared SQL code that can be saved and reused. It can accept parameters, perform operations, and return results.

### Creating a Stored Procedure
```sql
CREATE PROCEDURE GetEmployeesByDepartment
    @DepartmentID INT
AS
BEGIN
    SELECT * FROM Employees
    WHERE DepartmentID = @DepartmentID
END;
```

### Executing a Stored Procedure
```sql
EXEC GetEmployeesByDepartment @DepartmentID = 5;
```

### Benefits of Stored Procedures
- Reduced network traffic
- Better security (can grant execute permission without table access)
- Code reusability
- Improved performance (precompiled)
- Modular programming

## Triggers

A **Trigger** is a special type of stored procedure that automatically executes when an event occurs in the database server.

### Types of Triggers
- **DML Triggers**: Execute on INSERT, UPDATE, DELETE operations
- **DDL Triggers**: Execute on CREATE, ALTER, DROP operations
- **Logon Triggers**: Execute when user logs on

### Creating a Trigger
```sql
CREATE TRIGGER update_audit
ON employees
AFTER UPDATE
AS
BEGIN
    INSERT INTO employee_audit (employee_id, changed_by, change_date)
    SELECT i.employee_id, SYSTEM_USER, GETDATE()
    FROM inserted i
END;
```

### Trigger Tables
- **inserted**: Contains copies of affected rows during INSERT and UPDATE
- **deleted**: Contains copies of affected rows during DELETE and UPDATE

## Common Table Expressions (CTE)

A **Common Table Expression (CTE)** provides a temporary named result set that can be referenced within a SELECT, INSERT, UPDATE, or DELETE statement.

### Basic CTE Syntax
```sql
WITH EmployeeCTE AS (
    SELECT employee_id, first_name, last_name, manager_id
    FROM employees
    WHERE department_id = 10
)
SELECT e.first_name AS employee, m.first_name AS manager
FROM EmployeeCTE e
LEFT JOIN EmployeeCTE m ON e.manager_id = m.employee_id;
```

### Recursive CTE
```sql
WITH OrgCTE AS (
    -- Anchor member
    SELECT employee_id, first_name, manager_id, 1 AS level
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- Recursive member
    SELECT e.employee_id, e.first_name, e.manager_id, o.level + 1
    FROM employees e
    JOIN OrgCTE o ON e.manager_id = o.employee_id
)
SELECT * FROM OrgCTE;
```

## Window Functions

**Window Functions** perform calculations across a set of table rows related to the current row.

### Basic Window Function Syntax
```sql
SELECT employee_id, first_name, salary,
       AVG(salary) OVER (PARTITION BY department_id) AS dept_avg_salary
FROM employees;
```

### Common Window Functions
- **ROW_NUMBER()**: Assigns unique number to each row
- **RANK()**: Assigns rank with gaps for ties
- **DENSE_RANK()**: Assigns rank without gaps for ties
- **NTILE(n)**: Divides rows into n groups
- **LEAD()**: Accesses data from subsequent row
- **LAG()**: Accesses data from previous row

```sql
SELECT employee_id, first_name, salary,
       ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num,
       RANK() OVER (ORDER BY salary DESC) AS rank_num,
       DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank_num
FROM employees;
```

## Pivot and Unpivot

**PIVOT** transforms rows into columns, while **UNPIVOT** transforms columns into rows.

### Pivot Example
```sql
SELECT *
FROM (
    SELECT product_category, quarter, sales_amount
    FROM sales
) AS SourceTable
PIVOT (
    SUM(sales_amount)
    FOR quarter IN ([Q1], [Q2], [Q3], [Q4])
) AS PivotTable;
```

### Unpivot Example
```sql
SELECT product_category, quarter, sales_amount
FROM (
    SELECT product_category, Q1, Q2, Q3, Q4
    FROM quarterly_sales
) AS SourceTable
UNPIVOT (
    sales_amount FOR quarter IN (Q1, Q2, Q3, Q4)
) AS UnpivotTable;
```

## Materialized Views

A **Materialized View** is a database object that contains the results of a query. Unlike regular views, materialized views are physically stored and periodically refreshed.

### Creating a Materialized View (Oracle)
```sql
CREATE MATERIALIZED VIEW sales_summary
REFRESH COMPLETE ON DEMAND
AS
SELECT product_id, SUM(quantity) AS total_quantity, SUM(amount) AS total_amount
FROM sales
GROUP BY product_id;
```

### Refreshing a Materialized View
```sql
EXEC DBMS_MVIEW.REFRESH('sales_summary', 'C');
```

## JSON Functions

Modern SQL databases support JSON data type and operations.

### JSON Functions in PostgreSQL
```sql
-- Extract value from JSON
SELECT info->>'name' AS customer_name
FROM customers;

-- Create JSON object
SELECT json_build_object('name', first_name, 'email', email)
FROM employees;

-- Check if key exists
SELECT info ? 'address' AS has_address
FROM customers;
```

## Full-Text Search

**Full-Text Search** allows efficient searching of text data in databases.

### Creating Full-Text Index (SQL Server)
```sql
CREATE FULLTEXT INDEX ON articles(content)
KEY INDEX PK_articles;
```

### Full-Text Search Query
```sql
SELECT title, content
FROM articles
WHERE CONTAINS(content, 'database AND security');
```

## Temporal Tables

**Temporal Tables** (also called system-versioned tables) keep track of data changes over time.

### Creating a Temporal Table (SQL Server)
```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2),
    valid_from DATETIME2 GENERATED ALWAYS AS ROW START,
    valid_to DATETIME2 GENERATED ALWAYS AS ROW END,
    PERIOD FOR SYSTEM_TIME (valid_from, valid_to)
)
WITH (SYSTEM_VERSIONING = ON);
```

### Querying Historical Data
```sql
-- Current data
SELECT * FROM employees;

-- Data as of a specific point in time
SELECT * FROM employees
FOR SYSTEM_TIME AS OF '2022-01-01';

-- Data changes between two points in time
SELECT * FROM employees
FOR SYSTEM_TIME BETWEEN '2022-01-01' AND '2022-06-30';
```

## References
1. [GeeksforGeeks - Stored Procedures in SQL](https://www.geeksforgeeks.org/stored-procedures-in-sql/)
2. [GeeksforGeeks - Triggers in SQL](https://www.geeksforgeeks.org/sql-trigger-student-database/)
3. [GeeksforGeeks - Common Table Expressions (CTE)](https://www.geeksforgeeks.org/cte-in-sql/)
4. [GeeksforGeeks - Window Functions in SQL](https://www.geeksforgeeks.org/window-functions-in-sql/)