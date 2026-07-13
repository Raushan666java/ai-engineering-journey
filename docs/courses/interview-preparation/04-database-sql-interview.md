# Chapter 4: Database and SQL Interview

## Learning Objectives

- Master 60+ SQL query problems ranging from basic to advanced
- Understand JOINs, subqueries, window functions, CTEs, and aggregate functions
- Learn optimization techniques including indexing, query plan analysis, and rewriting
- Design normalized and denormalized schemas with practical scenarios
- Implement TypeScript database access patterns with connection pooling and query building
- Prepare for SQL rounds in TCS, Infosys, Wipro, and government technical interviews

## Key Concepts

### SQL Execution Order

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/sql-execution-order-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/sql-execution-order-handwritten.svg" alt="Handwritten: SQL Execution Order" width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/sql-execution-order-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/sql-execution-order-diagram.svg" alt="Diagram: SQL Execution Order" width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/sql-execution-order-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/sql-execution-order-sticky.svg" alt="Sticky Note: SQL Execution Order" width="30%">
</a>


Understanding the logical order of SQL statement execution is critical for writing correct queries:

```sql
SELECT                          -- 5. Choose columns
FROM                            -- 1. Tables
  JOIN                          -- 2. Join tables
WHERE                           -- 3. Filter rows
GROUP BY                        -- 4. Group rows
HAVING                          -- 6. Filter groups
ORDER BY                        -- 7. Sort results
LIMIT / OFFSET                  -- 8. Paginate
```

### Sample Tables Used Across Problems

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/sample-tables-used-across-problems-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/sample-tables-used-across-problems-handwritten.svg" alt="Handwritten: Sample Tables Used Across Problems" width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/sample-tables-used-across-problems-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/sample-tables-used-across-problems-diagram.svg" alt="Diagram: Sample Tables Used Across Problems" width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/sample-tables-used-across-problems-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/sample-tables-used-across-problems-sticky.svg" alt="Sticky Note: Sample Tables Used Across Problems" width="30%">
</a>


```sql
-- Employees Database
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100),
    location VARCHAR(100)
);

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100),
    salary DECIMAL(10,2),
    dept_id INT,
    manager_id INT,
    hire_date DATE,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id),
    FOREIGN KEY (manager_id) REFERENCES employees(emp_id)
);

CREATE TABLE projects (
    project_id INT PRIMARY KEY,
    project_name VARCHAR(100),
    budget DECIMAL(12,2),
    start_date DATE,
    end_date DATE
);

CREATE TABLE employee_projects (
    emp_id INT,
    project_id INT,
    hours_worked DECIMAL(8,2),
    role VARCHAR(50),
    PRIMARY KEY (emp_id, project_id),
    FOREIGN KEY (emp_id) REFERENCES employees(emp_id),
    FOREIGN KEY (project_id) REFERENCES projects(project_id)
);
```

---

## Section 1: Basic SELECT and Filtering (10 Problems)

### Q1: Retrieve all employees earning more than 50000.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/retrieve-all-employees-earning-more-than-50000-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/retrieve-all-employees-earning-more-than-50000-handwritten.svg" alt="Handwritten: Retrieve all employees earning more than 50000." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/retrieve-all-employees-earning-more-than-50000-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/retrieve-all-employees-earning-more-than-50000-diagram.svg" alt="Diagram: Retrieve all employees earning more than 50000." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/retrieve-all-employees-earning-more-than-50000-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/retrieve-all-employees-earning-more-than-50000-sticky.svg" alt="Sticky Note: Retrieve all employees earning more than 50000." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT emp_id, emp_name, salary
FROM employees
WHERE salary > 50000
ORDER BY salary DESC;
```
</details>

### Q2: Find employees hired in 2023.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-hired-in-2023-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-hired-in-2023-handwritten.svg" alt="Handwritten: Find employees hired in 2023." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-hired-in-2023-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-hired-in-2023-diagram.svg" alt="Diagram: Find employees hired in 2023." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-hired-in-2023-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-hired-in-2023-sticky.svg" alt="Sticky Note: Find employees hired in 2023." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT emp_id, emp_name, hire_date
FROM employees
WHERE YEAR(hire_date) = 2023;

-- Alternative for MySQL
SELECT emp_id, emp_name, hire_date
FROM employees
WHERE hire_date BETWEEN '2023-01-01' AND '2023-12-31';
```
</details>

### Q3: List departments without employees (using NOT EXISTS).

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/list-departments-without-employees-using-not-exists-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/list-departments-without-employees-using-not-exists-handwritten.svg" alt="Handwritten: List departments without employees (using NOT EXISTS)." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/list-departments-without-employees-using-not-exists-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/list-departments-without-employees-using-not-exists-diagram.svg" alt="Diagram: List departments without employees (using NOT EXISTS)." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/list-departments-without-employees-using-not-exists-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/list-departments-without-employees-using-not-exists-sticky.svg" alt="Sticky Note: List departments without employees (using NOT EXISTS)." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT d.dept_id, d.dept_name
FROM departments d
WHERE NOT EXISTS (
    SELECT 1 FROM employees e WHERE e.dept_id = d.dept_id
);

-- Alternative with LEFT JOIN
SELECT d.dept_id, d.dept_name
FROM departments d
LEFT JOIN employees e ON d.dept_id = e.dept_id
WHERE e.emp_id IS NULL;
```
</details>

### Q4: Find employees whose names start with 'S' and end with 'n'.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-whose-names-start-with-s-and-end-with-n-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-whose-names-start-with-s-and-end-with-n-handwritten.svg" alt="Handwritten: Find employees whose names start with 'S' and end with 'n'." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-whose-names-start-with-s-and-end-with-n-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-whose-names-start-with-s-and-end-with-n-diagram.svg" alt="Diagram: Find employees whose names start with 'S' and end with 'n'." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-whose-names-start-with-s-and-end-with-n-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-whose-names-start-with-s-and-end-with-n-sticky.svg" alt="Sticky Note: Find employees whose names start with 'S' and end with 'n'." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT emp_name
FROM employees
WHERE emp_name LIKE 'S%n';
```
</details>

### Q5: Show top 5 highest paid employees.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/show-top-5-highest-paid-employees-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/show-top-5-highest-paid-employees-handwritten.svg" alt="Handwritten: Show top 5 highest paid employees." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/show-top-5-highest-paid-employees-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/show-top-5-highest-paid-employees-diagram.svg" alt="Diagram: Show top 5 highest paid employees." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/show-top-5-highest-paid-employees-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/show-top-5-highest-paid-employees-sticky.svg" alt="Sticky Note: Show top 5 highest paid employees." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT emp_name, salary
FROM employees
ORDER BY salary DESC
LIMIT 5;
```
</details>

### Q6: Find the oldest employee in each department.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-oldest-employee-in-each-department-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-oldest-employee-in-each-department-handwritten.svg" alt="Handwritten: Find the oldest employee in each department." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-oldest-employee-in-each-department-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-oldest-employee-in-each-department-diagram.svg" alt="Diagram: Find the oldest employee in each department." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-oldest-employee-in-each-department-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-oldest-employee-in-each-department-sticky.svg" alt="Sticky Note: Find the oldest employee in each department." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT e.dept_id, e.emp_name, e.hire_date
FROM employees e
WHERE e.hire_date = (
    SELECT MIN(hire_date)
    FROM employees
    WHERE dept_id = e.dept_id
);
```
</details>

### Q7: Count employees per department, showing only departments with more than 5 employees.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/count-employees-per-department-showing-only-departments-with-more-than-5-employees-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/count-employees-per-department-showing-only-departments-with-more-than-5-employees-handwritten.svg" alt="Handwritten: Count employees per department, showing only departments with more than 5 employees." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/count-employees-per-department-showing-only-departments-with-more-than-5-employees-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/count-employees-per-department-showing-only-departments-with-more-than-5-employees-diagram.svg" alt="Diagram: Count employees per department, showing only departments with more than 5 employees." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/count-employees-per-department-showing-only-departments-with-more-than-5-employees-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/count-employees-per-department-showing-only-departments-with-more-than-5-employees-sticky.svg" alt="Sticky Note: Count employees per department, showing only departments with more than 5 employees." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT d.dept_name, COUNT(e.emp_id) as emp_count
FROM departments d
LEFT JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_id, d.dept_name
HAVING COUNT(e.emp_id) > 5
ORDER BY emp_count DESC;
```
</details>

### Q8: Find employees who have no manager assigned.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-have-no-manager-assigned-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-have-no-manager-assigned-handwritten.svg" alt="Handwritten: Find employees who have no manager assigned." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-have-no-manager-assigned-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-have-no-manager-assigned-diagram.svg" alt="Diagram: Find employees who have no manager assigned." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-have-no-manager-assigned-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-have-no-manager-assigned-sticky.svg" alt="Sticky Note: Find employees who have no manager assigned." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT emp_id, emp_name
FROM employees
WHERE manager_id IS NULL;
```
</details>

### Q9: Calculate salary statistics per department.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-salary-statistics-per-department-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-salary-statistics-per-department-handwritten.svg" alt="Handwritten: Calculate salary statistics per department." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-salary-statistics-per-department-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-salary-statistics-per-department-diagram.svg" alt="Diagram: Calculate salary statistics per department." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-salary-statistics-per-department-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-salary-statistics-per-department-sticky.svg" alt="Sticky Note: Calculate salary statistics per department." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT 
    d.dept_name,
    COUNT(*) as emp_count,
    ROUND(AVG(e.salary), 2) as avg_salary,
    ROUND(MAX(e.salary), 2) as max_salary,
    ROUND(MIN(e.salary), 2) as min_salary,
    ROUND(SUM(e.salary), 2) as total_salary
FROM departments d
JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_id, d.dept_name;
```
</details>

### Q10: Find employees whose salary is within 10% of the department average.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-whose-salary-is-within-10-of-the-department-average-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-whose-salary-is-within-10-of-the-department-average-handwritten.svg" alt="Handwritten: Find employees whose salary is within 10% of the department average." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-whose-salary-is-within-10-of-the-department-average-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-whose-salary-is-within-10-of-the-department-average-diagram.svg" alt="Diagram: Find employees whose salary is within 10% of the department average." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-whose-salary-is-within-10-of-the-department-average-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-whose-salary-is-within-10-of-the-department-average-sticky.svg" alt="Sticky Note: Find employees whose salary is within 10% of the department average." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
WITH dept_avg AS (
    SELECT dept_id, AVG(salary) as avg_salary
    FROM employees
    GROUP BY dept_id
)
SELECT e.emp_name, e.salary, da.avg_salary
FROM employees e
JOIN dept_avg da ON e.dept_id = da.dept_id
WHERE e.salary BETWEEN da.avg_salary * 0.9 AND da.avg_salary * 1.1;
```
</details>

---

## Section 2: JOIN Operations (10 Problems)

### Q11: List employees with their department names (INNER JOIN).

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/list-employees-with-their-department-names-inner-join-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/list-employees-with-their-department-names-inner-join-handwritten.svg" alt="Handwritten: List employees with their department names (INNER JOIN)." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/list-employees-with-their-department-names-inner-join-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/list-employees-with-their-department-names-inner-join-diagram.svg" alt="Diagram: List employees with their department names (INNER JOIN)." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/list-employees-with-their-department-names-inner-join-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/list-employees-with-their-department-names-inner-join-sticky.svg" alt="Sticky Note: List employees with their department names (INNER JOIN)." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT e.emp_id, e.emp_name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.dept_id;
```
</details>

### Q12: Show all employees including those in departments that don't exist (LEFT JOIN).

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/show-all-employees-including-those-in-departments-that-don-t-exist-left-join-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/show-all-employees-including-those-in-departments-that-don-t-exist-left-join-handwritten.svg" alt="Handwritten: Show all employees including those in departments that don't exist (LEFT JOIN)." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/show-all-employees-including-those-in-departments-that-don-t-exist-left-join-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/show-all-employees-including-those-in-departments-that-don-t-exist-left-join-diagram.svg" alt="Diagram: Show all employees including those in departments that don't exist (LEFT JOIN)." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/show-all-employees-including-those-in-departments-that-don-t-exist-left-join-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/show-all-employees-including-those-in-departments-that-don-t-exist-left-join-sticky.svg" alt="Sticky Note: Show all employees including those in departments that don't exist (LEFT JOIN)." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT e.emp_name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id;
```
</details>

### Q13: Find employees who work on projects with budgets over 100000.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-work-on-projects-with-budgets-over-100000-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-work-on-projects-with-budgets-over-100000-handwritten.svg" alt="Handwritten: Find employees who work on projects with budgets over 100000." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-work-on-projects-with-budgets-over-100000-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-work-on-projects-with-budgets-over-100000-diagram.svg" alt="Diagram: Find employees who work on projects with budgets over 100000." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-work-on-projects-with-budgets-over-100000-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-work-on-projects-with-budgets-over-100000-sticky.svg" alt="Sticky Note: Find employees who work on projects with budgets over 100000." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT DISTINCT e.emp_name, p.project_name, p.budget
FROM employees e
JOIN employee_projects ep ON e.emp_id = ep.emp_id
JOIN projects p ON ep.project_id = p.project_id
WHERE p.budget > 100000;
```
</details>

### Q14: Self-join: Find employees and their managers' names.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/self-join-find-employees-and-their-managers-names-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/self-join-find-employees-and-their-managers-names-handwritten.svg" alt="Handwritten: Self-join: Find employees and their managers' names." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/self-join-find-employees-and-their-managers-names-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/self-join-find-employees-and-their-managers-names-diagram.svg" alt="Diagram: Self-join: Find employees and their managers' names." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/self-join-find-employees-and-their-managers-names-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/self-join-find-employees-and-their-managers-names-sticky.svg" alt="Sticky Note: Self-join: Find employees and their managers' names." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT 
    e.emp_name as employee,
    m.emp_name as manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.emp_id;
```
</details>

### Q15: Find employees who work on MORE THAN one project.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-work-on-more-than-one-project-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-work-on-more-than-one-project-handwritten.svg" alt="Handwritten: Find employees who work on MORE THAN one project." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-work-on-more-than-one-project-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-work-on-more-than-one-project-diagram.svg" alt="Diagram: Find employees who work on MORE THAN one project." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-work-on-more-than-one-project-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-work-on-more-than-one-project-sticky.svg" alt="Sticky Note: Find employees who work on MORE THAN one project." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT e.emp_name, COUNT(ep.project_id) as project_count
FROM employees e
JOIN employee_projects ep ON e.emp_id = ep.emp_id
GROUP BY e.emp_id, e.emp_name
HAVING COUNT(ep.project_id) > 1;
```
</details>

### Q16: Cross join to generate all possible employee-project combinations.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cross-join-to-generate-all-possible-employee-project-combinations-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cross-join-to-generate-all-possible-employee-project-combinations-handwritten.svg" alt="Handwritten: Cross join to generate all possible employee-project combinations." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cross-join-to-generate-all-possible-employee-project-combinations-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cross-join-to-generate-all-possible-employee-project-combinations-diagram.svg" alt="Diagram: Cross join to generate all possible employee-project combinations." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cross-join-to-generate-all-possible-employee-project-combinations-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cross-join-to-generate-all-possible-employee-project-combinations-sticky.svg" alt="Sticky Note: Cross join to generate all possible employee-project combinations." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT e.emp_name, p.project_name
FROM employees e
CROSS JOIN projects p;
```
</details>

### Q17: Find departments that have NO projects assigned.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-departments-that-have-no-projects-assigned-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-departments-that-have-no-projects-assigned-handwritten.svg" alt="Handwritten: Find departments that have NO projects assigned." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-departments-that-have-no-projects-assigned-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-departments-that-have-no-projects-assigned-diagram.svg" alt="Diagram: Find departments that have NO projects assigned." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-departments-that-have-no-projects-assigned-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-departments-that-have-no-projects-assigned-sticky.svg" alt="Sticky Note: Find departments that have NO projects assigned." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT d.dept_name
FROM departments d
LEFT JOIN employee_projects ep ON d.dept_id = ep.emp_id -- using dept relation
WHERE ep.project_id IS NULL;
```
</details>

### Q18: Complex JOIN: Find employees who earn more than their managers.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/complex-join-find-employees-who-earn-more-than-their-managers-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/complex-join-find-employees-who-earn-more-than-their-managers-handwritten.svg" alt="Handwritten: Complex JOIN: Find employees who earn more than their managers." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/complex-join-find-employees-who-earn-more-than-their-managers-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/complex-join-find-employees-who-earn-more-than-their-managers-diagram.svg" alt="Diagram: Complex JOIN: Find employees who earn more than their managers." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/complex-join-find-employees-who-earn-more-than-their-managers-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/complex-join-find-employees-who-earn-more-than-their-managers-sticky.svg" alt="Sticky Note: Complex JOIN: Find employees who earn more than their managers." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT e.emp_name as employee, e.salary as emp_salary,
       m.emp_name as manager, m.salary as mgr_salary
FROM employees e
JOIN employees m ON e.manager_id = m.emp_id
WHERE e.salary > m.salary;
```
</details>

### Q19: Find employees assigned to ALL projects in the company (Division operation).

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-assigned-to-all-projects-in-the-company-division-operation-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-assigned-to-all-projects-in-the-company-division-operation-handwritten.svg" alt="Handwritten: Find employees assigned to ALL projects in the company (Division operation)." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-assigned-to-all-projects-in-the-company-division-operation-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-assigned-to-all-projects-in-the-company-division-operation-diagram.svg" alt="Diagram: Find employees assigned to ALL projects in the company (Division operation)." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-assigned-to-all-projects-in-the-company-division-operation-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-assigned-to-all-projects-in-the-company-division-operation-sticky.svg" alt="Sticky Note: Find employees assigned to ALL projects in the company (Division operation)." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT e.emp_name
FROM employees e
WHERE NOT EXISTS (
    SELECT p.project_id
    FROM projects p
    WHERE NOT EXISTS (
        SELECT 1
        FROM employee_projects ep
        WHERE ep.emp_id = e.emp_id
        AND ep.project_id = p.project_id
    )
);
```
</details>

### Q20: Find projects with NO employee assigned.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-projects-with-no-employee-assigned-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-projects-with-no-employee-assigned-handwritten.svg" alt="Handwritten: Find projects with NO employee assigned." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-projects-with-no-employee-assigned-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-projects-with-no-employee-assigned-diagram.svg" alt="Diagram: Find projects with NO employee assigned." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-projects-with-no-employee-assigned-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-projects-with-no-employee-assigned-sticky.svg" alt="Sticky Note: Find projects with NO employee assigned." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT p.project_name
FROM projects p
LEFT JOIN employee_projects ep ON p.project_id = ep.project_id
WHERE ep.emp_id IS NULL;
```
</details>

---

## Section 3: Aggregate Functions and GROUP BY (8 Problems)

### Q21: Find the department with the highest average salary.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-department-with-the-highest-average-salary-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-department-with-the-highest-average-salary-handwritten.svg" alt="Handwritten: Find the department with the highest average salary." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-department-with-the-highest-average-salary-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-department-with-the-highest-average-salary-diagram.svg" alt="Diagram: Find the department with the highest average salary." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-department-with-the-highest-average-salary-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-department-with-the-highest-average-salary-sticky.svg" alt="Sticky Note: Find the department with the highest average salary." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT d.dept_name, ROUND(AVG(e.salary), 2) as avg_salary
FROM departments d
JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_id, d.dept_name
ORDER BY avg_salary DESC
LIMIT 1;
```
</details>

### Q22: Calculate the total hours worked per employee across all projects.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-the-total-hours-worked-per-employee-across-all-projects-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-the-total-hours-worked-per-employee-across-all-projects-handwritten.svg" alt="Handwritten: Calculate the total hours worked per employee across all projects." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-the-total-hours-worked-per-employee-across-all-projects-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-the-total-hours-worked-per-employee-across-all-projects-diagram.svg" alt="Diagram: Calculate the total hours worked per employee across all projects." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-the-total-hours-worked-per-employee-across-all-projects-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-the-total-hours-worked-per-employee-across-all-projects-sticky.svg" alt="Sticky Note: Calculate the total hours worked per employee across all projects." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT e.emp_name, COALESCE(SUM(ep.hours_worked), 0) as total_hours
FROM employees e
LEFT JOIN employee_projects ep ON e.emp_id = ep.emp_id
GROUP BY e.emp_id, e.emp_name
ORDER BY total_hours DESC;
```
</details>

### Q23: Find the second highest salary without using LIMIT/OFFSET.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-second-highest-salary-without-using-limit-offset-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-second-highest-salary-without-using-limit-offset-handwritten.svg" alt="Handwritten: Find the second highest salary without using LIMIT/OFFSET." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-second-highest-salary-without-using-limit-offset-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-second-highest-salary-without-using-limit-offset-diagram.svg" alt="Diagram: Find the second highest salary without using LIMIT/OFFSET." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-second-highest-salary-without-using-limit-offset-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-second-highest-salary-without-using-limit-offset-sticky.svg" alt="Sticky Note: Find the second highest salary without using LIMIT/OFFSET." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT MAX(salary) as second_highest
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);

-- Alternative using window function
SELECT DISTINCT salary
FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rnk
    FROM employees
) ranked
WHERE rnk = 2;
```
</details>

### Q24: Count employees hired in each year.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/count-employees-hired-in-each-year-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/count-employees-hired-in-each-year-handwritten.svg" alt="Handwritten: Count employees hired in each year." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/count-employees-hired-in-each-year-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/count-employees-hired-in-each-year-diagram.svg" alt="Diagram: Count employees hired in each year." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/count-employees-hired-in-each-year-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/count-employees-hired-in-each-year-sticky.svg" alt="Sticky Note: Count employees hired in each year." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT 
    YEAR(hire_date) as hire_year,
    COUNT(*) as emp_count
FROM employees
GROUP BY YEAR(hire_date)
ORDER BY hire_year;
```
</details>

### Q25: Find the month with the highest number of hires.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-month-with-the-highest-number-of-hires-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-month-with-the-highest-number-of-hires-handwritten.svg" alt="Handwritten: Find the month with the highest number of hires." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-month-with-the-highest-number-of-hires-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-month-with-the-highest-number-of-hires-diagram.svg" alt="Diagram: Find the month with the highest number of hires." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-month-with-the-highest-number-of-hires-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-month-with-the-highest-number-of-hires-sticky.svg" alt="Sticky Note: Find the month with the highest number of hires." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT 
    MONTHNAME(hire_date) as hire_month,
    COUNT(*) as hire_count
FROM employees
GROUP BY MONTH(hire_date), MONTHNAME(hire_date)
ORDER BY hire_count DESC
LIMIT 1;
```
</details>

### Q26: Calculate the cumulative salary expense by department.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-the-cumulative-salary-expense-by-department-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-the-cumulative-salary-expense-by-department-handwritten.svg" alt="Handwritten: Calculate the cumulative salary expense by department." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-the-cumulative-salary-expense-by-department-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-the-cumulative-salary-expense-by-department-diagram.svg" alt="Diagram: Calculate the cumulative salary expense by department." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-the-cumulative-salary-expense-by-department-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-the-cumulative-salary-expense-by-department-sticky.svg" alt="Sticky Note: Calculate the cumulative salary expense by department." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT 
    d.dept_name,
    COUNT(e.emp_id) as employee_count,
    SUM(e.salary) as total_salary_expense,
    ROUND(SUM(e.salary) / (SELECT SUM(salary) FROM employees) * 100, 2) as expense_pct
FROM departments d
JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_id, d.dept_name
ORDER BY total_salary_expense DESC;
```
</details>

### Q27: Find employees whose salary is above the average for their department.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-whose-salary-is-above-the-average-for-their-department-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-whose-salary-is-above-the-average-for-their-department-handwritten.svg" alt="Handwritten: Find employees whose salary is above the average for their department." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-whose-salary-is-above-the-average-for-their-department-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-whose-salary-is-above-the-average-for-their-department-diagram.svg" alt="Diagram: Find employees whose salary is above the average for their department." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-whose-salary-is-above-the-average-for-their-department-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-whose-salary-is-above-the-average-for-their-department-sticky.svg" alt="Sticky Note: Find employees whose salary is above the average for their department." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT e.emp_name, e.salary, d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
WHERE e.salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE dept_id = e.dept_id
);
```
</details>

### Q28: Minimum, maximum, and range of salaries across the company.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/minimum-maximum-and-range-of-salaries-across-the-company-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/minimum-maximum-and-range-of-salaries-across-the-company-handwritten.svg" alt="Handwritten: Minimum, maximum, and range of salaries across the company." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/minimum-maximum-and-range-of-salaries-across-the-company-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/minimum-maximum-and-range-of-salaries-across-the-company-diagram.svg" alt="Diagram: Minimum, maximum, and range of salaries across the company." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/minimum-maximum-and-range-of-salaries-across-the-company-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/minimum-maximum-and-range-of-salaries-across-the-company-sticky.svg" alt="Sticky Note: Minimum, maximum, and range of salaries across the company." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT 
    ROUND(MIN(salary), 2) as min_salary,
    ROUND(MAX(salary), 2) as max_salary,
    ROUND(AVG(salary), 2) as avg_salary,
    ROUND(STDDEV(salary), 2) as salary_stddev,
    ROUND(MAX(salary) - MIN(salary), 2) as salary_range
FROM employees;
```
</details>

---

## Section 4: Subqueries (8 Problems)

### Q29: Find employees who earn more than the average salary of the IT department.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-earn-more-than-the-average-salary-of-the-it-department-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-earn-more-than-the-average-salary-of-the-it-department-handwritten.svg" alt="Handwritten: Find employees who earn more than the average salary of the IT department." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-earn-more-than-the-average-salary-of-the-it-department-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-earn-more-than-the-average-salary-of-the-it-department-diagram.svg" alt="Diagram: Find employees who earn more than the average salary of the IT department." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-earn-more-than-the-average-salary-of-the-it-department-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-earn-more-than-the-average-salary-of-the-it-department-sticky.svg" alt="Sticky Note: Find employees who earn more than the average salary of the IT department." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT emp_name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees e
    JOIN departments d ON e.dept_id = d.dept_id
    WHERE d.dept_name = 'IT'
);
```
</details>

### Q30: Find the department with the most employees (correlated subquery).

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-department-with-the-most-employees-correlated-subquery-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-department-with-the-most-employees-correlated-subquery-handwritten.svg" alt="Handwritten: Find the department with the most employees (correlated subquery)." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-department-with-the-most-employees-correlated-subquery-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-department-with-the-most-employees-correlated-subquery-diagram.svg" alt="Diagram: Find the department with the most employees (correlated subquery)." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-department-with-the-most-employees-correlated-subquery-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-department-with-the-most-employees-correlated-subquery-sticky.svg" alt="Sticky Note: Find the department with the most employees (correlated subquery)." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT dept_name
FROM departments d
WHERE (
    SELECT COUNT(*)
    FROM employees e
    WHERE e.dept_id = d.dept_id
) = (
    SELECT MAX(emp_count)
    FROM (
        SELECT COUNT(*) as emp_count
        FROM employees
        GROUP BY dept_id
    ) counts
);
```
</details>

### Q31: Find employees who do NOT work on any project.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-do-not-work-on-any-project-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-do-not-work-on-any-project-handwritten.svg" alt="Handwritten: Find employees who do NOT work on any project." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-do-not-work-on-any-project-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-do-not-work-on-any-project-diagram.svg" alt="Diagram: Find employees who do NOT work on any project." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-do-not-work-on-any-project-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-do-not-work-on-any-project-sticky.svg" alt="Sticky Note: Find employees who do NOT work on any project." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT emp_id, emp_name
FROM employees e
WHERE NOT EXISTS (
    SELECT 1
    FROM employee_projects ep
    WHERE ep.emp_id = e.emp_id
);
```
</details>

### Q32: Find projects where the total hours worked exceed the average total hours.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-projects-where-the-total-hours-worked-exceed-the-average-total-hours-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-projects-where-the-total-hours-worked-exceed-the-average-total-hours-handwritten.svg" alt="Handwritten: Find projects where the total hours worked exceed the average total hours." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-projects-where-the-total-hours-worked-exceed-the-average-total-hours-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-projects-where-the-total-hours-worked-exceed-the-average-total-hours-diagram.svg" alt="Diagram: Find projects where the total hours worked exceed the average total hours." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-projects-where-the-total-hours-worked-exceed-the-average-total-hours-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-projects-where-the-total-hours-worked-exceed-the-average-total-hours-sticky.svg" alt="Sticky Note: Find projects where the total hours worked exceed the average total hours." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
WITH project_hours AS (
    SELECT 
        project_id,
        SUM(hours_worked) as total_hours
    FROM employee_projects
    GROUP BY project_id
)
SELECT p.project_name, ph.total_hours
FROM projects p
JOIN project_hours ph ON p.project_id = ph.project_id
WHERE ph.total_hours > (
    SELECT AVG(total_hours) FROM project_hours
);
```
</details>

### Q33: Find the third highest salary using a subquery.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-third-highest-salary-using-a-subquery-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-third-highest-salary-using-a-subquery-handwritten.svg" alt="Handwritten: Find the third highest salary using a subquery." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-third-highest-salary-using-a-subquery-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-third-highest-salary-using-a-subquery-diagram.svg" alt="Diagram: Find the third highest salary using a subquery." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-third-highest-salary-using-a-subquery-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-third-highest-salary-using-a-subquery-sticky.svg" alt="Sticky Note: Find the third highest salary using a subquery." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT DISTINCT salary
FROM employees e1
WHERE 3 = (
    SELECT COUNT(DISTINCT salary)
    FROM employees e2
    WHERE e2.salary >= e1.salary
);
```
</details>

### Q34: Update salaries: give 10% raise to employees in departments with average salary below 50000.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/update-salaries-give-10-raise-to-employees-in-departments-with-average-salary-below-50000-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/update-salaries-give-10-raise-to-employees-in-departments-with-average-salary-below-50000-handwritten.svg" alt="Handwritten: Update salaries: give 10% raise to employees in departments with average salary below 50000." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/update-salaries-give-10-raise-to-employees-in-departments-with-average-salary-below-50000-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/update-salaries-give-10-raise-to-employees-in-departments-with-average-salary-below-50000-diagram.svg" alt="Diagram: Update salaries: give 10% raise to employees in departments with average salary below 50000." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/update-salaries-give-10-raise-to-employees-in-departments-with-average-salary-below-50000-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/update-salaries-give-10-raise-to-employees-in-departments-with-average-salary-below-50000-sticky.svg" alt="Sticky Note: Update salaries: give 10% raise to employees in departments with average salary below 50000." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
UPDATE employees e
SET e.salary = e.salary * 1.1
WHERE e.dept_id IN (
    SELECT dept_id
    FROM employees
    GROUP BY dept_id
    HAVING AVG(salary) < 50000
);
```
</details>

### Q35: Delete employees who haven't worked on any project in the last year.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/delete-employees-who-haven-t-worked-on-any-project-in-the-last-year-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/delete-employees-who-haven-t-worked-on-any-project-in-the-last-year-handwritten.svg" alt="Handwritten: Delete employees who haven't worked on any project in the last year." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/delete-employees-who-haven-t-worked-on-any-project-in-the-last-year-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/delete-employees-who-haven-t-worked-on-any-project-in-the-last-year-diagram.svg" alt="Diagram: Delete employees who haven't worked on any project in the last year." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/delete-employees-who-haven-t-worked-on-any-project-in-the-last-year-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/delete-employees-who-haven-t-worked-on-any-project-in-the-last-year-sticky.svg" alt="Sticky Note: Delete employees who haven't worked on any project in the last year." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
DELETE FROM employees
WHERE emp_id NOT IN (
    SELECT DISTINCT emp_id
    FROM employee_projects ep
    JOIN projects p ON ep.project_id = p.project_id
    WHERE p.end_date >= DATE_SUB(CURRENT_DATE, INTERVAL 1 YEAR)
);
```
</details>

### Q36: Find employees who earn more than ALL employees in the Sales department.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-earn-more-than-all-employees-in-the-sales-department-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-earn-more-than-all-employees-in-the-sales-department-handwritten.svg" alt="Handwritten: Find employees who earn more than ALL employees in the Sales department." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-earn-more-than-all-employees-in-the-sales-department-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-earn-more-than-all-employees-in-the-sales-department-diagram.svg" alt="Diagram: Find employees who earn more than ALL employees in the Sales department." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-earn-more-than-all-employees-in-the-sales-department-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-employees-who-earn-more-than-all-employees-in-the-sales-department-sticky.svg" alt="Sticky Note: Find employees who earn more than ALL employees in the Sales department." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT emp_name, salary
FROM employees
WHERE salary > ALL (
    SELECT e.salary
    FROM employees e
    JOIN departments d ON e.dept_id = d.dept_id
    WHERE d.dept_name = 'Sales'
    AND e.salary IS NOT NULL
);
```
</details>

---

## Section 5: Window Functions (10 Problems)

### Q37: Rank employees by salary within each department.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/rank-employees-by-salary-within-each-department-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/rank-employees-by-salary-within-each-department-handwritten.svg" alt="Handwritten: Rank employees by salary within each department." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/rank-employees-by-salary-within-each-department-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/rank-employees-by-salary-within-each-department-diagram.svg" alt="Diagram: Rank employees by salary within each department." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/rank-employees-by-salary-within-each-department-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/rank-employees-by-salary-within-each-department-sticky.svg" alt="Sticky Note: Rank employees by salary within each department." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT 
    emp_name,
    dept_id,
    salary,
    RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) as salary_rank,
    DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) as dense_salary_rank,
    ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY salary DESC) as row_num
FROM employees;
```
</details>

### Q38: Running total of salary expense ordered by hire date.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/running-total-of-salary-expense-ordered-by-hire-date-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/running-total-of-salary-expense-ordered-by-hire-date-handwritten.svg" alt="Handwritten: Running total of salary expense ordered by hire date." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/running-total-of-salary-expense-ordered-by-hire-date-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/running-total-of-salary-expense-ordered-by-hire-date-diagram.svg" alt="Diagram: Running total of salary expense ordered by hire date." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/running-total-of-salary-expense-ordered-by-hire-date-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/running-total-of-salary-expense-ordered-by-hire-date-sticky.svg" alt="Sticky Note: Running total of salary expense ordered by hire date." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT 
    emp_name,
    hire_date,
    salary,
    SUM(salary) OVER (ORDER BY hire_date) as running_total,
    SUM(salary) OVER (ORDER BY hire_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) as running_total_explicit
FROM employees
ORDER BY hire_date;
```
</details>

### Q39: Calculate the salary difference from the previous employee (ordered by salary).

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-the-salary-difference-from-the-previous-employee-ordered-by-salary-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-the-salary-difference-from-the-previous-employee-ordered-by-salary-handwritten.svg" alt="Handwritten: Calculate the salary difference from the previous employee (ordered by salary)." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-the-salary-difference-from-the-previous-employee-ordered-by-salary-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-the-salary-difference-from-the-previous-employee-ordered-by-salary-diagram.svg" alt="Diagram: Calculate the salary difference from the previous employee (ordered by salary)." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-the-salary-difference-from-the-previous-employee-ordered-by-salary-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/calculate-the-salary-difference-from-the-previous-employee-ordered-by-salary-sticky.svg" alt="Sticky Note: Calculate the salary difference from the previous employee (ordered by salary)." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT 
    emp_name,
    salary,
    LAG(salary, 1, 0) OVER (ORDER BY salary) as prev_salary,
    salary - LAG(salary, 1, 0) OVER (ORDER BY salary) as diff_from_prev,
    LEAD(salary, 1, 0) OVER (ORDER BY salary) as next_salary,
    LEAD(salary, 1, 0) OVER (ORDER BY salary) - salary as diff_to_next
FROM employees;
```
</details>

### Q40: First and last employees hired per department.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/first-and-last-employees-hired-per-department-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/first-and-last-employees-hired-per-department-handwritten.svg" alt="Handwritten: First and last employees hired per department." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/first-and-last-employees-hired-per-department-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/first-and-last-employees-hired-per-department-diagram.svg" alt="Diagram: First and last employees hired per department." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/first-and-last-employees-hired-per-department-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/first-and-last-employees-hired-per-department-sticky.svg" alt="Sticky Note: First and last employees hired per department." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT DISTINCT
    dept_id,
    FIRST_VALUE(emp_name) OVER (PARTITION BY dept_id ORDER BY hire_date) as first_hired,
    LAST_VALUE(emp_name) OVER (
        PARTITION BY dept_id 
        ORDER BY hire_date
        ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) as last_hired
FROM employees;
```
</details>

### Q41: Moving average of salary over 3 employees (ordered by hire date).

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/moving-average-of-salary-over-3-employees-ordered-by-hire-date-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/moving-average-of-salary-over-3-employees-ordered-by-hire-date-handwritten.svg" alt="Handwritten: Moving average of salary over 3 employees (ordered by hire date)." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/moving-average-of-salary-over-3-employees-ordered-by-hire-date-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/moving-average-of-salary-over-3-employees-ordered-by-hire-date-diagram.svg" alt="Diagram: Moving average of salary over 3 employees (ordered by hire date)." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/moving-average-of-salary-over-3-employees-ordered-by-hire-date-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/moving-average-of-salary-over-3-employees-ordered-by-hire-date-sticky.svg" alt="Sticky Note: Moving average of salary over 3 employees (ordered by hire date)." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT 
    emp_name,
    hire_date,
    salary,
    ROUND(AVG(salary) OVER (
        ORDER BY hire_date 
        ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING
    ), 2) as moving_avg_3
FROM employees;
```
</details>

### Q42: Find the top 3 highest-paid employees per department.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-top-3-highest-paid-employees-per-department-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-top-3-highest-paid-employees-per-department-handwritten.svg" alt="Handwritten: Find the top 3 highest-paid employees per department." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-top-3-highest-paid-employees-per-department-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-top-3-highest-paid-employees-per-department-diagram.svg" alt="Diagram: Find the top 3 highest-paid employees per department." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-top-3-highest-paid-employees-per-department-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/find-the-top-3-highest-paid-employees-per-department-sticky.svg" alt="Sticky Note: Find the top 3 highest-paid employees per department." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
WITH ranked_employees AS (
    SELECT 
        emp_name,
        dept_id,
        salary,
        DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) as rnk
    FROM employees
)
SELECT emp_name, dept_id, salary
FROM ranked_employees
WHERE rnk <= 3;
```
</details>

### Q43: Cumulative distribution of salaries.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cumulative-distribution-of-salaries-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cumulative-distribution-of-salaries-handwritten.svg" alt="Handwritten: Cumulative distribution of salaries." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cumulative-distribution-of-salaries-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cumulative-distribution-of-salaries-diagram.svg" alt="Diagram: Cumulative distribution of salaries." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cumulative-distribution-of-salaries-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cumulative-distribution-of-salaries-sticky.svg" alt="Sticky Note: Cumulative distribution of salaries." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT 
    emp_name,
    salary,
    ROUND(CUME_DIST() OVER (ORDER BY salary), 4) as cum_dist,
    ROUND(PERCENT_RANK() OVER (ORDER BY salary), 4) as pct_rank,
    NTILE(4) OVER (ORDER BY salary) as salary_quartile
FROM employees
ORDER BY salary;
```
</details>

### Q44: For each employee, show the total hours worked and the percentage of total project hours.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/for-each-employee-show-the-total-hours-worked-and-the-percentage-of-total-project-hours-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/for-each-employee-show-the-total-hours-worked-and-the-percentage-of-total-project-hours-handwritten.svg" alt="Handwritten: For each employee, show the total hours worked and the percentage of total project hours." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/for-each-employee-show-the-total-hours-worked-and-the-percentage-of-total-project-hours-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/for-each-employee-show-the-total-hours-worked-and-the-percentage-of-total-project-hours-diagram.svg" alt="Diagram: For each employee, show the total hours worked and the percentage of total project hours." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/for-each-employee-show-the-total-hours-worked-and-the-percentage-of-total-project-hours-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/for-each-employee-show-the-total-hours-worked-and-the-percentage-of-total-project-hours-sticky.svg" alt="Sticky Note: For each employee, show the total hours worked and the percentage of total project hours." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT 
    e.emp_name,
    SUM(ep.hours_worked) as total_hours,
    ROUND(
        SUM(ep.hours_worked) * 100.0 / SUM(SUM(ep.hours_worked)) OVER (), 
        2
    ) as pct_of_total
FROM employees e
JOIN employee_projects ep ON e.emp_id = ep.emp_id
GROUP BY e.emp_id, e.emp_name
ORDER BY total_hours DESC;
```
</details>

### Q45: Compare each employee's salary with the department average using window functions.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/compare-each-employee-s-salary-with-the-department-average-using-window-functions-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/compare-each-employee-s-salary-with-the-department-average-using-window-functions-handwritten.svg" alt="Handwritten: Compare each employee's salary with the department average using window functions." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/compare-each-employee-s-salary-with-the-department-average-using-window-functions-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/compare-each-employee-s-salary-with-the-department-average-using-window-functions-diagram.svg" alt="Diagram: Compare each employee's salary with the department average using window functions." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/compare-each-employee-s-salary-with-the-department-average-using-window-functions-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/compare-each-employee-s-salary-with-the-department-average-using-window-functions-sticky.svg" alt="Sticky Note: Compare each employee's salary with the department average using window functions." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT 
    emp_name,
    dept_id,
    salary,
    ROUND(AVG(salary) OVER (PARTITION BY dept_id), 2) as dept_avg_salary,
    ROUND(salary - AVG(salary) OVER (PARTITION BY dept_id), 2) as diff_from_avg,
    CASE 
        WHEN salary > AVG(salary) OVER (PARTITION BY dept_id) THEN 'Above Average'
        WHEN salary < AVG(salary) OVER (PARTITION BY dept_id) THEN 'Below Average'
        ELSE 'At Average'
    END as performance_category
FROM employees;
```
</details>

### Q46: Show the salary gap between consecutive employees in ranking.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/show-the-salary-gap-between-consecutive-employees-in-ranking-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/show-the-salary-gap-between-consecutive-employees-in-ranking-handwritten.svg" alt="Handwritten: Show the salary gap between consecutive employees in ranking." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/show-the-salary-gap-between-consecutive-employees-in-ranking-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/show-the-salary-gap-between-consecutive-employees-in-ranking-diagram.svg" alt="Diagram: Show the salary gap between consecutive employees in ranking." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/show-the-salary-gap-between-consecutive-employees-in-ranking-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/show-the-salary-gap-between-consecutive-employees-in-ranking-sticky.svg" alt="Sticky Note: Show the salary gap between consecutive employees in ranking." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
SELECT 
    emp_name,
    salary,
    RANK() OVER (ORDER BY salary DESC) as rnk,
    COALESCE(
        salary - LEAD(salary) OVER (ORDER BY salary DESC), 
        0
    ) as gap_to_next
FROM employees
ORDER BY salary DESC;
```
</details>

---

## Section 6: Common Table Expressions (CTE) (6 Problems)

### Q47: Recursive CTE — Generate employee hierarchy (org chart).

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/recursive-cte-generate-employee-hierarchy-org-chart-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/recursive-cte-generate-employee-hierarchy-org-chart-handwritten.svg" alt="Handwritten: Recursive CTE — Generate employee hierarchy (org chart)." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/recursive-cte-generate-employee-hierarchy-org-chart-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/recursive-cte-generate-employee-hierarchy-org-chart-diagram.svg" alt="Diagram: Recursive CTE — Generate employee hierarchy (org chart)." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/recursive-cte-generate-employee-hierarchy-org-chart-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/recursive-cte-generate-employee-hierarchy-org-chart-sticky.svg" alt="Sticky Note: Recursive CTE — Generate employee hierarchy (org chart)." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
WITH RECURSIVE emp_hierarchy AS (
    -- Anchor: Top-level managers
    SELECT 
        emp_id, 
        emp_name, 
        manager_id, 
        0 as level,
        CAST(emp_name AS CHAR(500)) as path
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- Recursive: Direct reports
    SELECT 
        e.emp_id, 
        e.emp_name, 
        e.manager_id,
        eh.level + 1,
        CONCAT(eh.path, ' → ', e.emp_name)
    FROM employees e
    JOIN emp_hierarchy eh ON e.manager_id = eh.emp_id
)
SELECT emp_id, emp_name, level, path
FROM emp_hierarchy
ORDER BY path;
```
</details>

### Q48: Recursive CTE — Generate date series for reporting.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/recursive-cte-generate-date-series-for-reporting-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/recursive-cte-generate-date-series-for-reporting-handwritten.svg" alt="Handwritten: Recursive CTE — Generate date series for reporting." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/recursive-cte-generate-date-series-for-reporting-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/recursive-cte-generate-date-series-for-reporting-diagram.svg" alt="Diagram: Recursive CTE — Generate date series for reporting." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/recursive-cte-generate-date-series-for-reporting-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/recursive-cte-generate-date-series-for-reporting-sticky.svg" alt="Sticky Note: Recursive CTE — Generate date series for reporting." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
WITH RECURSIVE dates AS (
    SELECT '2024-01-01' as dt
    UNION ALL
    SELECT DATE_ADD(dt, INTERVAL 1 DAY)
    FROM dates
    WHERE dt < '2024-12-31'
)
SELECT dt, DAYNAME(dt) as day_name
FROM dates
WHERE DAYOFWEEK(dt) IN (1, 7); -- Weekends only
```
</details>

### Q49: CTE — Find employee projects with budget utilization.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cte-find-employee-projects-with-budget-utilization-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cte-find-employee-projects-with-budget-utilization-handwritten.svg" alt="Handwritten: CTE — Find employee projects with budget utilization." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cte-find-employee-projects-with-budget-utilization-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cte-find-employee-projects-with-budget-utilization-diagram.svg" alt="Diagram: CTE — Find employee projects with budget utilization." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cte-find-employee-projects-with-budget-utilization-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cte-find-employee-projects-with-budget-utilization-sticky.svg" alt="Sticky Note: CTE — Find employee projects with budget utilization." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
WITH employee_hours AS (
    SELECT 
        ep.emp_id,
        ep.project_id,
        SUM(ep.hours_worked) as total_hours
    FROM employee_projects ep
    GROUP BY ep.emp_id, ep.project_id
),
project_totals AS (
    SELECT 
        p.project_id,
        p.project_name,
        p.budget,
        SUM(eh.total_hours) as project_hours,
        COUNT(DISTINCT eh.emp_id) as assigned_employees
    FROM projects p
    LEFT JOIN employee_hours eh ON p.project_id = eh.project_id
    GROUP BY p.project_id, p.project_name, p.budget
)
SELECT 
    project_name,
    budget,
    project_hours,
    assigned_employees,
    ROUND(project_hours * 100.0 / NULLIF(project_hours, 0), 2) as utilization_pct
FROM project_totals
ORDER BY budget DESC;
```
</details>

### Q50: CTE — Complex filtering: Projects with all senior employees.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cte-complex-filtering-projects-with-all-senior-employees-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cte-complex-filtering-projects-with-all-senior-employees-handwritten.svg" alt="Handwritten: CTE — Complex filtering: Projects with all senior employees." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cte-complex-filtering-projects-with-all-senior-employees-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cte-complex-filtering-projects-with-all-senior-employees-diagram.svg" alt="Diagram: CTE — Complex filtering: Projects with all senior employees." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cte-complex-filtering-projects-with-all-senior-employees-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cte-complex-filtering-projects-with-all-senior-employees-sticky.svg" alt="Sticky Note: CTE — Complex filtering: Projects with all senior employees." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
WITH senior_employees AS (
    SELECT emp_id, emp_name
    FROM employees
    WHERE salary > 80000
),
project_seniors AS (
    SELECT 
        ep.project_id,
        COUNT(DISTINCT ep.emp_id) as total_emp,
        COUNT(DISTINCT se.emp_id) as senior_emp
    FROM employee_projects ep
    LEFT JOIN senior_employees se ON ep.emp_id = se.emp_id
    GROUP BY ep.project_id
)
SELECT p.project_name, ps.total_emp, ps.senior_emp
FROM projects p
JOIN project_seniors ps ON p.project_id = ps.project_id
WHERE ps.total_emp = ps.senior_emp;
```
</details>

### Q51: CTE — Department salary statistics with global comparison.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cte-department-salary-statistics-with-global-comparison-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cte-department-salary-statistics-with-global-comparison-handwritten.svg" alt="Handwritten: CTE — Department salary statistics with global comparison." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cte-department-salary-statistics-with-global-comparison-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cte-department-salary-statistics-with-global-comparison-diagram.svg" alt="Diagram: CTE — Department salary statistics with global comparison." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cte-department-salary-statistics-with-global-comparison-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/cte-department-salary-statistics-with-global-comparison-sticky.svg" alt="Sticky Note: CTE — Department salary statistics with global comparison." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
WITH dept_stats AS (
    SELECT 
        d.dept_name,
        COUNT(e.emp_id) as emp_count,
        ROUND(AVG(e.salary), 2) as avg_salary,
        ROUND(MAX(e.salary), 2) as max_salary,
        ROUND(MIN(e.salary), 2) as min_salary
    FROM departments d
    JOIN employees e ON d.dept_id = e.dept_id
    GROUP BY d.dept_id, d.dept_name
),
global_stats AS (
    SELECT 
        ROUND(AVG(salary), 2) as company_avg,
        ROUND(STDDEV(salary), 2) as company_stddev
    FROM employees
)
SELECT 
    ds.*,
    gs.company_avg,
    ROUND((ds.avg_salary - gs.company_avg) / NULLIF(gs.company_stddev, 0), 2) as z_score
FROM dept_stats ds
CROSS JOIN global_stats gs
ORDER BY z_score DESC;
```
</details>

### Q52: Multiple CTEs — Full management chain analysis.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/multiple-ctes-full-management-chain-analysis-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/multiple-ctes-full-management-chain-analysis-handwritten.svg" alt="Handwritten: Multiple CTEs — Full management chain analysis." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/multiple-ctes-full-management-chain-analysis-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/multiple-ctes-full-management-chain-analysis-diagram.svg" alt="Diagram: Multiple CTEs — Full management chain analysis." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/multiple-ctes-full-management-chain-analysis-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/multiple-ctes-full-management-chain-analysis-sticky.svg" alt="Sticky Note: Multiple CTEs — Full management chain analysis." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
WITH RECURSIVE mgmt_chain AS (
    SELECT 
        emp_id, 
        emp_name, 
        manager_id,
        1 as chain_length
    FROM employees
    WHERE manager_id IS NOT NULL
    
    UNION ALL
    
    SELECT 
        e.emp_id,
        e.emp_name,
        e.manager_id,
        mc.chain_length + 1
    FROM employees e
    JOIN mgmt_chain mc ON e.manager_id = mc.emp_id
),
chain_stats AS (
    SELECT 
        manager_id as top_manager,
        COUNT(*) as total_reports,
        MAX(chain_length) as max_depth
    FROM mgmt_chain
    GROUP BY manager_id
)
SELECT 
    e.emp_name as manager_name,
    cs.total_reports,
    cs.max_depth
FROM chain_stats cs
JOIN employees e ON cs.top_manager = e.emp_id
ORDER BY cs.total_reports DESC;
```
</details>

---

## Section 7: Optimization and Indexing (6 Problems)

### Q53: Create indexes for common query patterns.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/create-indexes-for-common-query-patterns-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/create-indexes-for-common-query-patterns-handwritten.svg" alt="Handwritten: Create indexes for common query patterns." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/create-indexes-for-common-query-patterns-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/create-indexes-for-common-query-patterns-diagram.svg" alt="Diagram: Create indexes for common query patterns." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/create-indexes-for-common-query-patterns-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/create-indexes-for-common-query-patterns-sticky.svg" alt="Sticky Note: Create indexes for common query patterns." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
-- For WHERE clauses on salary range queries
CREATE INDEX idx_employees_salary ON employees(salary);

-- For JOIN on dept_id (foreign key)
CREATE INDEX idx_employees_dept_id ON employees(dept_id);

-- For composite conditions
CREATE INDEX idx_employees_dept_salary ON employees(dept_id, salary);

-- For text search (prefix matching)
CREATE INDEX idx_employees_name ON employees(emp_name);

-- For date range filtering
CREATE INDEX idx_employees_hire_date ON employees(hire_date);

-- Covering index (includes all needed columns)
CREATE INDEX idx_emp_dept_cover ON employees(dept_id, emp_name, salary) INCLUDE (hire_date);
```
</details>

### Q54: Analyze a slow query and propose optimizations.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/analyze-a-slow-query-and-propose-optimizations-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/analyze-a-slow-query-and-propose-optimizations-handwritten.svg" alt="Handwritten: Analyze a slow query and propose optimizations." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/analyze-a-slow-query-and-propose-optimizations-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/analyze-a-slow-query-and-propose-optimizations-diagram.svg" alt="Diagram: Analyze a slow query and propose optimizations." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/analyze-a-slow-query-and-propose-optimizations-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/analyze-a-slow-query-and-propose-optimizations-sticky.svg" alt="Sticky Note: Analyze a slow query and propose optimizations." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
-- Slow query
SELECT e.emp_name, d.dept_name, p.project_name, ep.hours_worked
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
JOIN employee_projects ep ON e.emp_id = ep.emp_id
JOIN projects p ON ep.project_id = p.project_id
WHERE d.location = 'Mumbai'
  AND ep.hours_worked > 100
ORDER BY ep.hours_worked DESC;
```

**Optimizations:**
1. **Indexes needed:**
```sql
CREATE INDEX idx_dept_location ON departments(location);
CREATE INDEX idx_ep_hours ON employee_projects(emp_id, project_id, hours_worked);
CREATE INDEX idx_emp_dept ON employees(dept_id) INCLUDE (emp_name);
```

2. **Rewrite with EXISTS for early filtering:**
```sql
SELECT e.emp_name, d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
WHERE d.location = 'Mumbai'
  AND EXISTS (
    SELECT 1 FROM employee_projects ep
    WHERE ep.emp_id = e.emp_id AND ep.hours_worked > 100
  );
```

3. **Query plan analysis:** Use `EXPLAIN ANALYZE` to identify full table scans, buffer misses, and join order issues.
</details>

### Q55: Detect and remove duplicate rows.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/detect-and-remove-duplicate-rows-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/detect-and-remove-duplicate-rows-handwritten.svg" alt="Handwritten: Detect and remove duplicate rows." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/detect-and-remove-duplicate-rows-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/detect-and-remove-duplicate-rows-diagram.svg" alt="Diagram: Detect and remove duplicate rows." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/detect-and-remove-duplicate-rows-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/detect-and-remove-duplicate-rows-sticky.svg" alt="Sticky Note: Detect and remove duplicate rows." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
-- Find duplicates
SELECT emp_name, dept_id, COUNT(*)
FROM employees
GROUP BY emp_name, dept_id
HAVING COUNT(*) > 1;

-- Delete duplicates keeping the one with lowest emp_id
DELETE e1 FROM employees e1
INNER JOIN employees e2 
WHERE e1.emp_name = e2.emp_name 
  AND e1.dept_id = e2.dept_id
  AND e1.emp_id > e2.emp_id;

-- Using CTE and ROW_NUMBER
WITH duplicates AS (
    SELECT *,
        ROW_NUMBER() OVER (
            PARTITION BY emp_name, dept_id 
            ORDER BY emp_id
        ) as rn
    FROM employees
)
DELETE FROM employees
WHERE emp_id IN (
    SELECT emp_id FROM duplicates WHERE rn > 1
);
```
</details>

### Q56: Query performance comparison: JOIN vs IN vs EXISTS.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/query-performance-comparison-join-vs-in-vs-exists-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/query-performance-comparison-join-vs-in-vs-exists-handwritten.svg" alt="Handwritten: Query performance comparison: JOIN vs IN vs EXISTS." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/query-performance-comparison-join-vs-in-vs-exists-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/query-performance-comparison-join-vs-in-vs-exists-diagram.svg" alt="Diagram: Query performance comparison: JOIN vs IN vs EXISTS." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/query-performance-comparison-join-vs-in-vs-exists-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/query-performance-comparison-join-vs-in-vs-exists-sticky.svg" alt="Sticky Note: Query performance comparison: JOIN vs IN vs EXISTS." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
-- JOIN
SELECT DISTINCT e.emp_name
FROM employees e
JOIN employee_projects ep ON e.emp_id = ep.emp_id
WHERE ep.hours_worked > 50;

-- IN
SELECT emp_name
FROM employees
WHERE emp_id IN (
    SELECT emp_id FROM employee_projects WHERE hours_worked > 50
);

-- EXISTS (usually fastest for large datasets)
SELECT e.emp_name
FROM employees e
WHERE EXISTS (
    SELECT 1 FROM employee_projects ep
    WHERE ep.emp_id = e.emp_id AND ep.hours_worked > 50
);
```

**Performance rule of thumb:**
- `EXISTS` is best when the subquery is large and only checking existence
- `IN` is fine for small, static lists
- `JOIN` with `DISTINCT` may be slower due to dedup but offers more flexibility
</details>

### Q57: Partition table for better query performance.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/partition-table-for-better-query-performance-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/partition-table-for-better-query-performance-handwritten.svg" alt="Handwritten: Partition table for better query performance." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/partition-table-for-better-query-performance-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/partition-table-for-better-query-performance-diagram.svg" alt="Diagram: Partition table for better query performance." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/partition-table-for-better-query-performance-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/partition-table-for-better-query-performance-sticky.svg" alt="Sticky Note: Partition table for better query performance." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
-- Range partitioning by hire date
CREATE TABLE employees_partitioned (
    emp_id INT,
    emp_name VARCHAR(100),
    salary DECIMAL(10,2),
    dept_id INT,
    hire_date DATE
)
PARTITION BY RANGE (YEAR(hire_date)) (
    PARTITION p_old VALUES LESS THAN (2020),
    PARTITION p_2020 VALUES LESS THAN (2021),
    PARTITION p_2021 VALUES LESS THAN (2022),
    PARTITION p_2022 VALUES LESS THAN (2023),
    PARTITION p_2023 VALUES LESS THAN (2024),
    PARTITION p_future VALUES LESS THAN MAXVALUE
);

-- Query that benefits from partition pruning
SELECT COUNT(*), YEAR(hire_date)
FROM employees_partitioned
WHERE hire_date BETWEEN '2022-01-01' AND '2023-12-31'
GROUP BY YEAR(hire_date);
```

**When to partition:**
- Tables larger than 1TB
- Queries frequently filter on a partition key (dates, regions)
- Old data needs archival (drop partition is instant)
- Maintenance operations (rebuild per partition)
</details>

### Q58: Use EXPLAIN to understand query execution.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/use-explain-to-understand-query-execution-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/use-explain-to-understand-query-execution-handwritten.svg" alt="Handwritten: Use EXPLAIN to understand query execution." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/use-explain-to-understand-query-execution-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/use-explain-to-understand-query-execution-diagram.svg" alt="Diagram: Use EXPLAIN to understand query execution." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/use-explain-to-understand-query-execution-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/use-explain-to-understand-query-execution-sticky.svg" alt="Sticky Note: Use EXPLAIN to understand query execution." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
EXPLAIN ANALYZE
SELECT e.emp_name, d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
WHERE e.salary > 100000;

-- Look for:
-- 1. Seq Scan → Full table scan (needs index)
-- 2. Nested Loop → For small result sets
-- 3. Hash Join → For moderate results
-- 4. Merge Join → For sorted data
-- 5. Index Only Scan → Ideal (all data in index)

-- Common issues in EXPLAIN output:
-- "Rows Removed by Filter" → Index needed
-- "Sort Method: external merge" → Memory pressure
-- "Parallel Seq Scan" → Could benefit from partitioning
```
</details>

---

## Section 8: TypeScript Database Patterns (6 Problems)

### Q59: Database connection pool with TypeScript.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/database-connection-pool-with-typescript-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/database-connection-pool-with-typescript-handwritten.svg" alt="Handwritten: Database connection pool with TypeScript." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/database-connection-pool-with-typescript-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/database-connection-pool-with-typescript-diagram.svg" alt="Diagram: Database connection pool with TypeScript." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/database-connection-pool-with-typescript-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/database-connection-pool-with-typescript-sticky.svg" alt="Sticky Note: Database connection pool with TypeScript." width="30%">
</a>


<details>
<summary>Click to reveal TypeScript</summary>

```typescript
import { createPool, Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';

interface DatabaseConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  poolSize: number;
}

class DatabasePool {
  private pool: Pool;
  private static instance: DatabasePool;

  private constructor(config: DatabaseConfig) {
    this.pool = createPool({
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.password,
      database: config.database,
      connectionLimit: config.poolSize,
      waitForConnections: true,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0
    });
  }

  static getInstance(config?: DatabaseConfig): DatabasePool {
    if (!DatabasePool.instance) {
      if (!config) throw new Error('Config required for initialization');
      DatabasePool.instance = new DatabasePool(config);
    }
    return DatabasePool.instance;
  }

  async query<T extends RowDataPacket[]>(sql: string, params?: any[]): Promise<T> {
    const [rows] = await this.pool.execute<T>(sql, params);
    return rows;
  }

  async execute(sql: string, params?: any[]): Promise<ResultSetHeader> {
    const [result] = await this.pool.execute<ResultSetHeader>(sql, params);
    return result;
  }

  async transaction<T>(callback: (conn: any) => Promise<T>): Promise<T> {
    const connection = await this.pool.getConnection();
    try {
      await connection.beginTransaction();
      const result = await callback(connection);
      await connection.commit();
      return result;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }
}

// Usage
const db = DatabasePool.getInstance({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'company_db',
  poolSize: 10
});
```
</details>

### Q60: TypeORM Repository pattern for cleaner data access.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/typeorm-repository-pattern-for-cleaner-data-access-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/typeorm-repository-pattern-for-cleaner-data-access-handwritten.svg" alt="Handwritten: TypeORM Repository pattern for cleaner data access." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/typeorm-repository-pattern-for-cleaner-data-access-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/typeorm-repository-pattern-for-cleaner-data-access-diagram.svg" alt="Diagram: TypeORM Repository pattern for cleaner data access." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/typeorm-repository-pattern-for-cleaner-data-access-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/typeorm-repository-pattern-for-cleaner-data-access-sticky.svg" alt="Sticky Note: TypeORM Repository pattern for cleaner data access." width="30%">
</a>


<details>
<summary>Click to reveal TypeScript</summary>

```typescript
interface Employee {
  empId: number;
  empName: string;
  salary: number;
  deptId: number;
  hireDate: Date;
}

interface Department {
  deptId: number;
  deptName: string;
  location: string;
}

class EmployeeRepository {
  constructor(private db: DatabasePool) {}

  async findByDepartment(deptName: string): Promise<Employee[]> {
    const sql = `
      SELECT e.*
      FROM employees e
      JOIN departments d ON e.dept_id = d.dept_id
      WHERE d.dept_name = ?
      ORDER BY e.salary DESC
    `;
    return this.db.query<Employee[]>(sql, [deptName]);
  }

  async findHighEarners(threshold: number, limit: number): Promise<Employee[]> {
    const sql = `
      SELECT emp_id, emp_name, salary, dept_id
      FROM employees
      WHERE salary > ?
      ORDER BY salary DESC
      LIMIT ?
    `;
    return this.db.query<Employee[]>(sql, [threshold, limit]);
  }

  async getDepartmentSalaryStats(): Promise<any[]> {
    const sql = `
      SELECT 
        d.dept_name,
        COUNT(e.emp_id) as employee_count,
        AVG(e.salary) as avg_salary,
        MAX(e.salary) as max_salary,
        MIN(e.salary) as min_salary
      FROM departments d
      LEFT JOIN employees e ON d.dept_id = e.dept_id
      GROUP BY d.dept_id, d.dept_name
      HAVING COUNT(e.emp_id) > 0
      ORDER BY avg_salary DESC
    `;
    return this.db.query(sql);
  }

  async updateSalary(empId: number, newSalary: number): Promise<boolean> {
    const result = await this.db.execute(
      'UPDATE employees SET salary = ? WHERE emp_id = ?',
      [newSalary, empId]
    );
    return result.affectedRows > 0;
  }

  async bulkInsert(employees: Partial<Employee>[]): Promise<number> {
    // Use transaction for bulk operations
    return this.db.transaction(async (conn) => {
      let inserted = 0;
      for (const emp of employees) {
        await conn.execute(
          'INSERT INTO employees (emp_name, salary, dept_id, hire_date) VALUES (?, ?, ?, ?)',
          [emp.empName, emp.salary, emp.deptId, emp.hireDate]
        );
        inserted++;
      }
      return inserted;
    });
  }
}
```
</details>

### Q61: Query builder pattern with pagination and filtering.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/query-builder-pattern-with-pagination-and-filtering-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/query-builder-pattern-with-pagination-and-filtering-handwritten.svg" alt="Handwritten: Query builder pattern with pagination and filtering." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/query-builder-pattern-with-pagination-and-filtering-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/query-builder-pattern-with-pagination-and-filtering-diagram.svg" alt="Diagram: Query builder pattern with pagination and filtering." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/query-builder-pattern-with-pagination-and-filtering-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/query-builder-pattern-with-pagination-and-filtering-sticky.svg" alt="Sticky Note: Query builder pattern with pagination and filtering." width="30%">
</a>


<details>
<summary>Click to reveal TypeScript</summary>

```typescript
interface QueryFilter {
  field: string;
  operator: '=' | '>' | '<' | '>=' | '<=' | '!=' | 'LIKE' | 'IN';
  value: any;
}

interface QueryOptions {
  filters?: QueryFilter[];
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
  page?: number;
  pageSize?: number;
  selectColumns?: string[];
}

class QueryBuilder {
  private sql: string = '';
  private params: any[] = [];
  private table: string = '';

  from(table: string): this {
    this.table = table;
    this.sql = `SELECT * FROM ${table}`;
    return this;
  }

  select(columns: string[]): this {
    this.sql = `SELECT ${columns.join(', ')} FROM ${this.table}`;
    return this;
  }

  where(filters: QueryFilter[]): this {
    if (filters.length === 0) return this;
    
    const conditions = filters.map(f => {
      if (f.operator === 'IN') {
        const placeholders = (f.value as any[]).map(() => '?').join(', ');
        this.params.push(...(f.value as any[]));
        return `${f.field} IN (${placeholders})`;
      }
      this.params.push(f.value);
      return `${f.field} ${f.operator} ?`;
    });
    
    this.sql += ` WHERE ${conditions.join(' AND ')}`;
    return this;
  }

  orderBy(sortBy: string, sortOrder: 'ASC' | 'DESC' = 'ASC'): this {
    this.sql += ` ORDER BY ${sortBy} ${sortOrder}`;
    return this;
  }

  paginate(page: number = 1, pageSize: number = 10): this {
    const offset = (page - 1) * pageSize;
    this.sql += ` LIMIT ? OFFSET ?`;
    this.params.push(pageSize, offset);
    return this;
  }

  build(): { sql: string; params: any[] } {
    return { sql: this.sql, params: this.params };
  }
}

// Usage
async function searchEmployees(options: QueryOptions) {
  const query = new QueryBuilder()
    .select(['emp_id', 'emp_name', 'salary', 'dept_id'])
    .from('employees')
    .where(options.filters || [])
    .orderBy(options.sortBy || 'emp_id', options.sortOrder || 'ASC')
    .paginate(options.page || 1, options.pageSize || 10);

  const { sql, params } = query.build();
  return db.query(sql, params);
}
```
</details>

### Q62: Normalization vs Denormalization — Practical scenario.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/normalization-vs-denormalization-practical-scenario-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/normalization-vs-denormalization-practical-scenario-handwritten.svg" alt="Handwritten: Normalization vs Denormalization — Practical scenario." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/normalization-vs-denormalization-practical-scenario-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/normalization-vs-denormalization-practical-scenario-diagram.svg" alt="Diagram: Normalization vs Denormalization — Practical scenario." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/normalization-vs-denormalization-practical-scenario-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/normalization-vs-denormalization-practical-scenario-sticky.svg" alt="Sticky Note: Normalization vs Denormalization — Practical scenario." width="30%">
</a>


<details>
<summary>Click to reveal TypeScript</summary>

```typescript
// Normalized Schema (3NF)
// Pros: No redundancy, consistent updates, smaller storage
// Cons: Multiple JOINs for read, slower complex queries

interface Order3NF {
  orderId: number;
  customerId: number;
  orderDate: Date;
  totalAmount: number;   // Computed or write-time calculated
}

interface OrderItem3NF {
  orderItemId: number;
  orderId: number;
  productId: number;
  quantity: number;
  unitPrice: number;
}

interface Product3NF {
  productId: number;
  productName: string;
  currentPrice: number;
  category: string;
}

// Denormalized Schema (for analytics/reporting)
// Pros: Fast reads, no JOINs needed
// Cons: Data redundancy, update anomalies, more storage

interface OrderDenormalized {
  orderId: number;
  customerName: string;
  customerEmail: string;
  customerAddress: string;
  productName: string;
  category: string;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
  orderDate: Date;
  orderTotal: number;
}

// Hybrid approach: Normalized for OLTP + Denormalized for analytics
class OrderService {
  async getOrderSummary(orderId: number) {
    // Normalized for fast writes
    const order = await this.db.query(`
      SELECT o.*, c.name, c.email
      FROM orders o
      JOIN customers c ON o.customer_id = c.customer_id
      WHERE o.order_id = ?
    `, [orderId]);

    // Denormalized for analytics
    const denormalizedData = {
      orderId: order.orderId,
      customerName: order.name,
      customerEmail: order.email,
      products: await this.db.query(`
        SELECT p.product_name, oi.quantity, oi.unit_price
        FROM order_items oi
        JOIN products p ON oi.product_id = p.product_id
        WHERE oi.order_id = ?
      `, [orderId])
    };

    return denormalizedData;
  }
}
```

**Decision guide:**
| Scenario | Choose |
|----------|--------|
| OLTP (many writes) | Normalized |
| Reporting/BI (many reads) | Denormalized |
| Mixed workload | Normalized + materialized views |
| Real-time dashboards | Denormalized + periodic sync |
| Microservices (each owns data) | Per-service schemas, DB per service |
</details>

### Q63: Pagination strategies for large datasets.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/pagination-strategies-for-large-datasets-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/pagination-strategies-for-large-datasets-handwritten.svg" alt="Handwritten: Pagination strategies for large datasets." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/pagination-strategies-for-large-datasets-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/pagination-strategies-for-large-datasets-diagram.svg" alt="Diagram: Pagination strategies for large datasets." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/pagination-strategies-for-large-datasets-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/pagination-strategies-for-large-datasets-sticky.svg" alt="Sticky Note: Pagination strategies for large datasets." width="30%">
</a>


<details>
<summary>Click to reveal TypeScript</summary>

```typescript
// Method 1: OFFSET/LIMIT (traditional)
// Problem: OFFSET is expensive for deep pages
async function getEmployeesPage(page: number, pageSize: number) {
  const offset = (page - 1) * pageSize;
  const sql = `
    SELECT emp_id, emp_name, salary
    FROM employees
    ORDER BY emp_id
    LIMIT ? OFFSET ?
  `;
  return db.query(sql, [pageSize, offset]);
}

// Method 2: Keyset pagination (cursor-based) — FAST for deep pages
async function getEmployeesCursor(lastId: number | null, pageSize: number) {
  const sql = `
    SELECT emp_id, emp_name, salary
    FROM employees
    WHERE emp_id > ?
    ORDER BY emp_id
    LIMIT ?
  `;
  const result = await db.query(sql, [lastId || 0, pageSize]);
  const nextCursor = result.length > 0 ? result[result.length - 1].emp_id : null;
  return { data: result, nextCursor };
}

// Method 3: Seek method with composite index
async function getEmployeesSeek(
  lastSalary: number | null,
  lastName: string | null,
  pageSize: number
) {
  // Uses composite index (salary, emp_name)
  const sql = `
    SELECT emp_id, emp_name, salary
    FROM employees
    WHERE (salary, emp_name) > (?, ?)
    ORDER BY salary DESC, emp_name
    LIMIT ?
  `;
  const result = await db.query(sql, [
    lastSalary || 999999999,
    lastName || '',
    pageSize
  ]);
  return result;
}
```
</details>

### Q64: Implementing full-text search.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/implementing-full-text-search-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/implementing-full-text-search-handwritten.svg" alt="Handwritten: Implementing full-text search." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/implementing-full-text-search-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/implementing-full-text-search-diagram.svg" alt="Diagram: Implementing full-text search." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/implementing-full-text-search-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/implementing-full-text-search-sticky.svg" alt="Sticky Note: Implementing full-text search." width="30%">
</a>


<details>
<summary>Click to reveal TypeScript</summary>

```typescript
// MySQL full-text search setup
// ALTER TABLE employees ADD FULLTEXT INDEX ft_emp_name (emp_name);

interface SearchResult {
  empId: number;
  empName: string;
  relevance: number;
}

class FullTextSearch {
  async searchEmployees(query: string, limit: number = 10): Promise<SearchResult[]> {
    const sql = `
      SELECT 
        emp_id,
        emp_name,
        MATCH(emp_name) AGAINST(? IN NATURAL LANGUAGE MODE) as relevance
      FROM employees
      WHERE MATCH(emp_name) AGAINST(? IN NATURAL LANGUAGE MODE)
      ORDER BY relevance DESC
      LIMIT ?
    `;
    return db.query(sql, [query, query, limit]);
  }

  async searchWithBooleanMode(query: string): Promise<SearchResult[]> {
    // Boolean mode supports: +word (must), -word (must not), * (wildcard)
    const sql = `
      SELECT 
        emp_id,
        emp_name,
        MATCH(emp_name) AGAINST(? IN BOOLEAN MODE) as relevance
      FROM employees
      WHERE MATCH(emp_name) AGAINST(? IN BOOLEAN MODE)
      HAVING relevance > 0
      ORDER BY relevance DESC
    `;
    return db.query(sql, [query, query]);
  }

  // Alternative with pg_trgm (PostgreSQL)
  async searchTrigram(query: string): Promise<SearchResult[]> {
    const sql = `
      SELECT emp_id, emp_name,
        similarity(emp_name, $1) as relevance
      FROM employees
      WHERE emp_name % $1
      ORDER BY relevance DESC
      LIMIT 10
    `;
    return db.query(sql, [query]);
  }
}
```
</details>

---

## Section 9: Advanced SQL Scenarios (6 Problems)

### Q65: Gaps and Islands — Find employees whose IDs have gaps.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/gaps-and-islands-find-employees-whose-ids-have-gaps-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/gaps-and-islands-find-employees-whose-ids-have-gaps-handwritten.svg" alt="Handwritten: Gaps and Islands — Find employees whose IDs have gaps." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/gaps-and-islands-find-employees-whose-ids-have-gaps-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/gaps-and-islands-find-employees-whose-ids-have-gaps-diagram.svg" alt="Diagram: Gaps and Islands — Find employees whose IDs have gaps." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/gaps-and-islands-find-employees-whose-ids-have-gaps-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/gaps-and-islands-find-employees-whose-ids-have-gaps-sticky.svg" alt="Sticky Note: Gaps and Islands — Find employees whose IDs have gaps." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
-- Find missing employee IDs (gaps)
WITH all_ids AS (
    SELECT MIN(emp_id) as min_id, MAX(emp_id) as max_id
    FROM employees
),
numbers AS (
    SELECT min_id as n FROM all_ids
    UNION ALL
    SELECT n + 1 FROM numbers, all_ids
    WHERE n < max_id
)
SELECT n as missing_id
FROM numbers
WHERE n NOT IN (SELECT emp_id FROM employees)
OPTION (MAXRECURSION 10000);

-- Find contiguous ranges (islands) of employee IDs
WITH ordered AS (
    SELECT 
        emp_id,
        emp_id - ROW_NUMBER() OVER (ORDER BY emp_id) as grp
    FROM employees
)
SELECT 
    MIN(emp_id) as range_start,
    MAX(emp_id) as range_end,
    COUNT(*) as emp_count
FROM ordered
GROUP BY grp
HAVING COUNT(*) > 1;
```
</details>

### Q66: Pivot data — Convert rows to columns.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/pivot-data-convert-rows-to-columns-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/pivot-data-convert-rows-to-columns-handwritten.svg" alt="Handwritten: Pivot data — Convert rows to columns." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/pivot-data-convert-rows-to-columns-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/pivot-data-convert-rows-to-columns-diagram.svg" alt="Diagram: Pivot data — Convert rows to columns." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/pivot-data-convert-rows-to-columns-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/pivot-data-convert-rows-to-columns-sticky.svg" alt="Sticky Note: Pivot data — Convert rows to columns." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
-- Pivot: Employee count per department (rows) per year (columns)
SELECT 
    d.dept_name,
    SUM(CASE WHEN YEAR(e.hire_date) = 2021 THEN 1 ELSE 0 END) as hired_2021,
    SUM(CASE WHEN YEAR(e.hire_date) = 2022 THEN 1 ELSE 0 END) as hired_2022,
    SUM(CASE WHEN YEAR(e.hire_date) = 2023 THEN 1 ELSE 0 END) as hired_2023,
    COUNT(*) as total_hired
FROM departments d
JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_id, d.dept_name;

-- Dynamic pivot using GROUP_CONCAT (MySQL)
SET @sql = NULL;
SELECT GROUP_CONCAT(DISTINCT
    CONCAT('SUM(CASE WHEN project_id = ', project_id, 
           ' THEN hours_worked ELSE 0 END) AS "', project_name, '"')
) INTO @sql
FROM projects;

SET @sql = CONCAT('SELECT e.emp_name, ', @sql, ' 
                   FROM employees e
                   LEFT JOIN employee_projects ep ON e.emp_id = ep.emp_id
                   GROUP BY e.emp_id, e.emp_name');
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
```
</details>

### Q67: Running totals and moving calculations.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/running-totals-and-moving-calculations-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/running-totals-and-moving-calculations-handwritten.svg" alt="Handwritten: Running totals and moving calculations." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/running-totals-and-moving-calculations-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/running-totals-and-moving-calculations-diagram.svg" alt="Diagram: Running totals and moving calculations." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/running-totals-and-moving-calculations-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/running-totals-and-moving-calculations-sticky.svg" alt="Sticky Note: Running totals and moving calculations." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
-- Running total of projects budget by start date
SELECT 
    project_name,
    start_date,
    budget,
    SUM(budget) OVER (ORDER BY start_date) as running_budget,
    AVG(budget) OVER (ORDER BY start_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as moving_avg_3,
    budget - AVG(budget) OVER (ORDER BY start_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as diff_from_moving_avg
FROM projects
ORDER BY start_date;

-- Year-over-year comparison
SELECT 
    YEAR(hire_date) as year,
    COUNT(*) as hires,
    LAG(COUNT(*)) OVER (ORDER BY YEAR(hire_date)) as prev_year_hires,
    ROUND(
        (COUNT(*) - LAG(COUNT(*)) OVER (ORDER BY YEAR(hire_date))) 
        * 100.0 / LAG(COUNT(*)) OVER (ORDER BY YEAR(hire_date)), 
        2
    ) as yoy_change_pct
FROM employees
GROUP BY YEAR(hire_date)
ORDER BY year;
```
</details>

### Q68: Update with complex subquery logic.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/update-with-complex-subquery-logic-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/update-with-complex-subquery-logic-handwritten.svg" alt="Handwritten: Update with complex subquery logic." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/update-with-complex-subquery-logic-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/update-with-complex-subquery-logic-diagram.svg" alt="Diagram: Update with complex subquery logic." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/update-with-complex-subquery-logic-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/update-with-complex-subquery-logic-sticky.svg" alt="Sticky Note: Update with complex subquery logic." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
-- Update employees: set performance bonus as percentage of salary
-- Bonus = 10% if above dept avg, 5% if at dept avg, 0% if below

WITH dept_avg AS (
    SELECT dept_id, AVG(salary) as avg_salary
    FROM employees
    GROUP BY dept_id
)
UPDATE employees e
JOIN dept_avg da ON e.dept_id = da.dept_id
SET e.salary = CASE
    WHEN e.salary > da.avg_salary THEN e.salary * 1.10
    WHEN e.salary = da.avg_salary THEN e.salary * 1.05
    ELSE e.salary
END;

-- Update with MERGE (upsert) pattern
INSERT INTO employee_projects (emp_id, project_id, hours_worked, role)
VALUES (101, 5, 120, 'Developer')
ON DUPLICATE KEY UPDATE
    hours_worked = VALUES(hours_worked),
    role = VALUES(role);
```
</details>

### Q69: Complex reporting query with multiple window functions.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/complex-reporting-query-with-multiple-window-functions-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/complex-reporting-query-with-multiple-window-functions-handwritten.svg" alt="Handwritten: Complex reporting query with multiple window functions." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/complex-reporting-query-with-multiple-window-functions-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/complex-reporting-query-with-multiple-window-functions-diagram.svg" alt="Diagram: Complex reporting query with multiple window functions." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/complex-reporting-query-with-multiple-window-functions-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/complex-reporting-query-with-multiple-window-functions-sticky.svg" alt="Sticky Note: Complex reporting query with multiple window functions." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
-- Department-wise employee ranking with cumulative metrics
WITH employee_metrics AS (
    SELECT 
        d.dept_name,
        e.emp_name,
        e.salary,
        COUNT(ep.project_id) as project_count,
        COALESCE(SUM(ep.hours_worked), 0) as total_hours,
        RANK() OVER (PARTITION BY d.dept_id ORDER BY e.salary DESC) as salary_rank,
        RANK() OVER (PARTITION BY d.dept_id ORDER BY SUM(ep.hours_worked) DESC) as effort_rank
    FROM employees e
    JOIN departments d ON e.dept_id = d.dept_id
    LEFT JOIN employee_projects ep ON e.emp_id = ep.emp_id
    GROUP BY d.dept_id, d.dept_name, e.emp_id, e.emp_name, e.salary
)
SELECT 
    dept_name,
    emp_name,
    salary,
    total_hours,
    salary_rank,
    effort_rank,
    CASE 
        WHEN salary_rank <= 3 AND effort_rank <= 3 THEN 'Star Performer'
        WHEN salary_rank <= 3 THEN 'High Paid'
        WHEN effort_rank <= 3 THEN 'High Effort'
        ELSE 'Regular'
    END as employee_category
FROM employee_metrics
ORDER BY dept_name, salary_rank;
```
</details>

### Q70: Database deadlock diagnosis and prevention.

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/database-deadlock-diagnosis-and-prevention-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/database-deadlock-diagnosis-and-prevention-handwritten.svg" alt="Handwritten: Database deadlock diagnosis and prevention." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/database-deadlock-diagnosis-and-prevention-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/database-deadlock-diagnosis-and-prevention-diagram.svg" alt="Diagram: Database deadlock diagnosis and prevention." width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/database-deadlock-diagnosis-and-prevention-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/database-deadlock-diagnosis-and-prevention-sticky.svg" alt="Sticky Note: Database deadlock diagnosis and prevention." width="30%">
</a>


<details>
<summary>Click to reveal SQL</summary>

```sql
-- Diagnose current locks (MySQL)
SHOW ENGINE INNODB STATUS;

-- Find blocked transactions
SELECT 
    r.trx_id as blocking_trx_id,
    r.trx_mysql_thread_id as blocking_thread,
    b.trx_id as blocked_trx_id,
    b.trx_mysql_thread_id as blocked_thread,
    l.lock_table,
    l.lock_type,
    l.lock_mode
FROM performance_schema.data_locks l
JOIN information_schema.innodb_trx r ON l.lock_trx_id = r.trx_id
JOIN information_schema.innodb_trx b ON b.trx_id = l.lock_trx_id
WHERE b.trx_state = 'LOCK WAIT'
  AND r.trx_state != 'LOCK WAIT';

-- Prevention strategies in code
async function transferFunds(fromAccount: number, toAccount: number, amount: number) {
  // Always lock resources in the same order (by account ID)
  const [first, second] = fromAccount < toAccount 
    ? [fromAccount, toAccount] 
    : [toAccount, fromAccount];

  return db.transaction(async (conn) => {
    // Lock first account
    await conn.execute('SELECT * FROM accounts WHERE id = ? FOR UPDATE', [first]);
    // Lock second account
    await conn.execute('SELECT * FROM accounts WHERE id = ? FOR UPDATE', [second]);
    
    await conn.execute('UPDATE accounts SET balance = balance - ? WHERE id = ?', [amount, fromAccount]);
    await conn.execute('UPDATE accounts SET balance = balance + ? WHERE id = ?', [amount, toAccount]);
  });
}
```
</details>

---

## Quick Reference Tables

### SQL Keyword Reference

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/sql-keyword-reference-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/sql-keyword-reference-handwritten.svg" alt="Handwritten: SQL Keyword Reference" width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/sql-keyword-reference-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/sql-keyword-reference-diagram.svg" alt="Diagram: SQL Keyword Reference" width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/sql-keyword-reference-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/sql-keyword-reference-sticky.svg" alt="Sticky Note: SQL Keyword Reference" width="30%">
</a>


| Keyword | Purpose | Example |
|---------|---------|---------|
| SELECT | Choose columns | `SELECT emp_name, salary` |
| FROM | Specify tables | `FROM employees` |
| WHERE | Filter rows | `WHERE salary > 50000` |
| JOIN | Combine tables | `JOIN departments USING(dept_id)` |
| GROUP BY | Aggregate groups | `GROUP BY dept_id` |
| HAVING | Filter groups | `HAVING COUNT(*) > 5` |
| ORDER BY | Sort results | `ORDER BY salary DESC` |
| LIMIT/OFFSET | Paginate | `LIMIT 10 OFFSET 20` |
| DISTINCT | Unique values | `SELECT DISTINCT dept_id` |
| UNION | Combine queries | `SELECT ... UNION SELECT ...` |
| EXISTS | Check existence | `WHERE EXISTS (SELECT ...)` |
| IN | List membership | `WHERE dept_id IN (1,2,3)` |
| BETWEEN | Range check | `WHERE salary BETWEEN 30000 AND 50000` |
| LIKE | Pattern matching | `WHERE name LIKE 'S%'` |
| CASE | Conditional values | `CASE WHEN ... THEN ... END` |
| COALESCE | Default for NULL | `COALESCE(salary, 0)` |
| OVER | Window function | `ROW_NUMBER() OVER (PARTITION BY dept_id)` |
| CTE | Common Table Expression | `WITH cte AS (SELECT ...)` |

### Window Functions Summary

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/window-functions-summary-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/window-functions-summary-handwritten.svg" alt="Handwritten: Window Functions Summary" width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/window-functions-summary-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/window-functions-summary-diagram.svg" alt="Diagram: Window Functions Summary" width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/window-functions-summary-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/window-functions-summary-sticky.svg" alt="Sticky Note: Window Functions Summary" width="30%">
</a>


| Function | Purpose | Example |
|----------|---------|---------|
| ROW_NUMBER() | Sequential number per partition | `ROW_NUMBER() OVER (ORDER BY salary)` |
| RANK() | Rank with gaps | `RANK() OVER (ORDER BY salary)` |
| DENSE_RANK() | Rank without gaps | `DENSE_RANK() OVER (ORDER BY salary)` |
| NTILE(n) | Divide into n buckets | `NTILE(4) OVER (ORDER BY salary)` |
| LAG(col, n) | Previous row value | `LAG(salary, 1) OVER (ORDER BY hire_date)` |
| LEAD(col, n) | Next row value | `LEAD(salary, 1) OVER (ORDER BY hire_date)` |
| FIRST_VALUE(col) | First value in window | `FIRST_VALUE(salary) OVER (...)` |
| LAST_VALUE(col) | Last value in window | `LAST_VALUE(salary) OVER (...)` |
| SUM/AVG/COUNT over | Aggregation over window | `SUM(salary) OVER (PARTITION BY dept_id)` |
| CUME_DIST() | Cumulative distribution | `CUME_DIST() OVER (ORDER BY salary)` |
| PERCENT_RANK() | Percentage rank | `PERCENT_RANK() OVER (ORDER BY salary)` |

### Index Types and Use Cases

<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/index-types-and-use-cases-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/index-types-and-use-cases-handwritten.svg" alt="Handwritten: Index Types and Use Cases" width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/index-types-and-use-cases-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/index-types-and-use-cases-diagram.svg" alt="Diagram: Index Types and Use Cases" width="30%">
</a>
<a href="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/index-types-and-use-cases-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/interview-preparation/04-database-sql-interview/index-types-and-use-cases-sticky.svg" alt="Sticky Note: Index Types and Use Cases" width="30%">
</a>


| Index Type | Use Case | Example |
|------------|----------|---------|
| B-Tree | General purpose, range queries | `CREATE INDEX idx_salary ON emp(salary)` |
| Hash | Equality lookups only | `CREATE INDEX USING HASH ON emp(id)` |
| Composite | Multi-column queries | `CREATE INDEX idx_dept_salary ON emp(dept, salary)` |
| Full-Text | Text search | `CREATE FULLTEXT INDEX ON articles(content)` |
| Spatial | Geographic queries | `SPATIAL INDEX(location)` |
| Unique | Enforce uniqueness | `UNIQUE INDEX idx_email(email)` |
| Covering | All columns in index | Include columns to avoid table access |
| Partial | Filtered index | `CREATE INDEX idx_active ON emp(salary) WHERE status='active'` |

---

## Summary

This chapter covered 70 SQL and database problems:

| Category | Problems | Key Techniques |
|----------|----------|---------------|
| Basic SELECT (10) | Q1-Q10 | WHERE, LIKE, LIMIT, GROUP BY, HAVING |
| JOINs (10) | Q11-Q20 | INNER, LEFT, SELF, CROSS, Division |
| Aggregates (8) | Q21-Q28 | AVG, SUM, COUNT, STDDEV, GROUP BY |
| Subqueries (8) | Q29-Q36 | Correlated, NOT EXISTS, ALL, ANY |
| Window Functions (10) | Q37-Q46 | RANK, LAG, LEAD, NTILE, Running Total |
| CTEs (6) | Q47-Q52 | Recursive CTE, Multiple CTEs |
| Optimization (6) | Q53-Q58 | Indexing, EXPLAIN, Partitioning |
| TypeScript Patterns (6) | Q59-Q64 | Pool, Repository, Query Builder, Pagination |
| Advanced SQL (6) | Q65-Q70 | Gaps/Islands, Pivot, Deadlock Prevention |

## Practical Takeaways

1. **Know the order of execution:** SQL is evaluated in this order: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT.

2. **Master window functions:** They appear in 60% of advanced SQL interview questions. Practice RANK, LAG, LEAD, and running totals.

3. **Index strategy matters:** Create indexes for WHERE columns, JOIN columns, and ORDER BY columns. Use composite indexes for multi-column queries.

4. **⭐ Must Know:** All JOIN types, GROUP BY with HAVING, correlated subqueries, window functions (RANK, LAG), recursive CTEs.

5. **For government exams:** Focus on basic SELECT, JOINs, GROUP BY, subqueries, and normalization concepts. Window functions are less common.

6. **Practice with real data:** Set up a MySQL/PostgreSQL instance with the sample schema from this chapter and run all queries.

7. **Optimization mindset:** Always think: "Could this query be faster with an index? Could I reduce the number of JOINs?"

8. **Common mistakes in interviews:** Forgetting NULL handling (use COALESCE), wrong JOIN type, missing GROUP BY with aggregates, ORDER BY without LIMIT.
