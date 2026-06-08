# Module 5: Advanced SQL

## Joins

### INNER JOIN
```sql
SELECT e.name, d.dept_name 
FROM employees e 
INNER JOIN departments d ON e.dept_id = d.dept_id;
```

### LEFT JOIN
```sql
SELECT e.name, d.dept_name 
FROM employees e 
LEFT JOIN departments d ON e.dept_id = d.dept_id;
```

### RIGHT JOIN
```sql
SELECT e.name, d.dept_name 
FROM employees e 
RIGHT JOIN departments d ON e.dept_id = d.dept_id;
```

### FULL OUTER JOIN
```sql
SELECT e.name, d.dept_name 
FROM employees e 
FULL OUTER JOIN departments d ON e.dept_id = d.dept_id;
```

### SELF JOIN
```sql
SELECT e1.name AS employee, e2.name AS manager
FROM employees e1
JOIN employees e2 ON e1.manager_id = e2.emp_id;
```

## Subqueries

### Single Row Subquery
```sql
SELECT name FROM employees 
WHERE salary = (SELECT MAX(salary) FROM employees);
```

### Multiple Row Subquery
```sql
SELECT name FROM employees 
WHERE dept_id IN (SELECT dept_id FROM departments WHERE location = 'New York');
```

### Correlated Subquery
```sql
SELECT name, salary FROM employees e1
WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e1.dept_id = e2.dept_id);
```

## GROUP BY and HAVING
```sql
SELECT dept_id, COUNT(*) as emp_count, AVG(salary) as avg_salary
FROM employees 
GROUP BY dept_id
HAVING COUNT(*) > 5;
```

## Window Functions

### ROW_NUMBER()
```sql
SELECT name, salary, 
       ROW_NUMBER() OVER (ORDER BY salary DESC) as rank
FROM employees;
```

### RANK() and DENSE_RANK()
```sql
SELECT name, salary,
       RANK() OVER (ORDER BY salary DESC) as rank,
       DENSE_RANK() OVER (ORDER BY salary DESC) as dense_rank
FROM employees;
```

### PARTITION BY
```sql
SELECT name, dept_id, salary,
       ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY salary DESC) as dept_rank
FROM employees;
```

## Common Table Expressions (CTE)
```sql
WITH high_earners AS (
    SELECT * FROM employees WHERE salary > 70000
)
SELECT dept_id, COUNT(*) 
FROM high_earners 
GROUP BY dept_id;
```

## Recursive CTE
```sql
WITH RECURSIVE employee_hierarchy AS (
    SELECT emp_id, name, manager_id, 1 as level
    FROM employees WHERE manager_id IS NULL
    
    UNION ALL
    
    SELECT e.emp_id, e.name, e.manager_id, eh.level + 1
    FROM employees e
    JOIN employee_hierarchy eh ON e.manager_id = eh.emp_id
)
SELECT * FROM employee_hierarchy;
```

## Views
```sql
CREATE VIEW high_salary_employees AS
SELECT name, salary, dept_id 
FROM employees 
WHERE salary > 60000;

SELECT * FROM high_salary_employees;
```

## Stored Procedures
```sql
DELIMITER //
CREATE PROCEDURE GetEmployeesByDept(IN dept_id INT)
BEGIN
    SELECT * FROM employees WHERE dept_id = dept_id;
END //
DELIMITER ;

CALL GetEmployeesByDept(101);
```

## Functions
```sql
DELIMITER //
CREATE FUNCTION CalculateBonus(salary DECIMAL(10,2)) 
RETURNS DECIMAL(10,2)
READS SQL DATA
BEGIN
    RETURN salary * 0.10;
END //
DELIMITER ;

SELECT name, salary, CalculateBonus(salary) as bonus FROM employees;
```

## Triggers
```sql
CREATE TRIGGER salary_audit 
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
    IF NEW.salary != OLD.salary THEN
        INSERT INTO salary_changes (emp_id, old_salary, new_salary, change_date)
        VALUES (NEW.emp_id, OLD.salary, NEW.salary, NOW());
    END IF;
END;
```

## Practical Exercises
1. Write complex joins for a multi-table query
2. Create views for frequently used queries
3. Implement stored procedures for common operations
4. Use window functions for ranking and analytics

## Advanced Assignment
Build a complete reporting system with:
- Complex analytical queries
- Stored procedures for data processing
- Views for different user roles
- Triggers for audit trails

## Next Module
Module 6: Database Design & Normalization