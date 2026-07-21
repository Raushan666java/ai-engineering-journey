# Aggregate Functions � COUNT, SUM, AVG, GROUP BY, HAVING

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Use COUNT, SUM, AVG, MIN, MAX for data summarization |
| LO2 | Group rows with GROUP BY and understand grouping behavior |
| LO3 | Filter groups with HAVING (vs WHERE for rows) |
| LO4 | Use DISTINCT with aggregate functions |
| LO5 | Handle NULLs in aggregate calculations |
| LO6 | Create summary reports with multiple aggregate columns |

## Introduction

Understanding aggregate functions is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering aggregate functions.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding aggregate functions is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how aggregate functions works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind aggregate functions
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Examples

### Basic Example

```python

## Basic aggregate functions example
def example():
    """Demonstrate aggregate functions"""
    result = "Hello, aggregate functions!"
    print(result)
    return result

example()
```text

### Expected Output

```text
Hello, aggregate functions!
```text

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 2.1 | Basic Aggregates | COUNT, SUM, AVG, MIN, MAX |
| 2.2 | GROUP BY | Grouping rows, multiple columns |
| 2.3 | HAVING | Filtering groups after aggregation |
| 2.4 | DISTINCT with Aggregates | COUNT DISTINCT, unique counts |
| 2.5 | NULL Handling | How aggregates treat NULLs |
| 2.6 | Multi-Aggregate Reports | Combining aggregates in one query |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Aggregate Functions] --> B[COUNT/SUM/AVG]
    A --> C[MIN/MAX]
    A --> D[GROUP BY]
    D --> E[HAVING filter]
    F[DISTINCT] --> G[COUNT DISTINCT]
    H[NULL behavior] -.-> A
```text

## 2.1 Basic Aggregates

`sql
SELECT COUNT(*) FROM employees;
SELECT COUNT(employee_id) FROM employees;  -- non-null count
SELECT SUM(salary) AS total_payroll FROM employees;
SELECT AVG(salary) AS average_salary FROM employees;
SELECT MIN(salary) AS lowest, MAX(salary) AS highest FROM employees;
SELECT COUNT(*), SUM(amount), AVG(amount), MIN(amount), MAX(amount) FROM orders;
`

**Python equivalent**:

`python
data = [75000, 68000, 82000, 72000]
print(f"Count: {len(data)}")
print(f"Sum: {sum(data)}")
print(f"Avg: {sum(data)/len(data):.0f}")
print(f"Min: {min(data)}, Max: {max(data)}")

## Count: 4, Sum: 297000, Avg: 74250, Min: 68000, Max: 82000

import sqlite3
conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE emp(id, name, salary, dept)")
cur.executemany("INSERT INTO emp VALUES (?,?,?,?)", [
    (1,"Alice",75000,"Eng"), (2,"Bob",68000,"Eng"),
    (3,"Charlie",82000,"Sales"), (4,"Diana",72000,"Sales"),
])
cur.execute("SELECT dept, AVG(salary), MAX(salary) FROM emp GROUP BY dept")
for row in cur.fetchall():
    print(f"{row[0]}: avg={row[1]:.0f}, max={row[2]}")

## Eng: avg=71500, max=75000

## Sales: avg=77000, max=82000
`

## 2.2 GROUP BY

GROUP BY splits rows into groups and applies aggregate functions per group.

`sql
-- Single column group
SELECT department_id, COUNT(*) AS emp_count
FROM employees
GROUP BY department_id;

-- Multiple columns
SELECT department_id, job_id, COUNT(*) AS count
FROM employees
GROUP BY department_id, job_id
ORDER BY department_id, count DESC;

-- GROUP BY with expressions
SELECT EXTRACT(YEAR FROM hire_date) AS year, COUNT(*) AS hires
FROM employees
GROUP BY EXTRACT(YEAR FROM hire_date);

-- All non-aggregate columns in SELECT must be in GROUP BY
SELECT dept_id, job_id, COUNT(*)
FROM employees
GROUP BY dept_id, job_id;
-- Error: SELECT name (not in GROUP BY or aggregate)

-- GROUP BY without aggregate � acts like DISTINCT
SELECT department_id FROM employees GROUP BY department_id;
`

## 2.3 HAVING

HAVING filters groups after aggregation (WHERE filters rows before aggregation).

`sql
-- Departments with more than 5 employees
SELECT department_id, COUNT(*) AS headcount
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 5
ORDER BY headcount DESC;

-- Departments with average salary > 80000
SELECT department_id, AVG(salary) AS avg_sal
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 80000;

-- WHERE filters rows, HAVING filters groups
SELECT department_id, AVG(salary) AS avg_sal
FROM employees
WHERE hire_date > '2020-01-01'    -- filter rows first
GROUP BY department_id
HAVING AVG(salary) > 70000;       -- then filter groups
`

**WHERE vs HAVING**:

| Clause | When Applied | Can Use Aggregates | Can Use Aliases |
|--------|-------------|-------------------|-----------------|
| WHERE | Before GROUP BY | No | No |
| HAVING | After GROUP BY | Yes | Yes (some DBs) |

`python
import pandas as pd
df = pd.DataFrame({
    "dept": ["Eng","Eng","Sales","Sales"],
    "salary": [75000, 68000, 82000, 72000]
})
result = df.groupby("dept").agg(avg_salary=("salary", "mean"), count=("salary", "count"))
result = result[result["avg_salary"] > 70000]
print(result)
`

## 2.4 DISTINCT with Aggregates

`sql
-- Count total vs distinct
SELECT COUNT(*) AS total, COUNT(DISTINCT department_id) AS unique_depts
FROM employees;

-- COUNT DISTINCT
SELECT department_id, COUNT(DISTINCT job_id) AS unique_jobs
FROM employees
GROUP BY department_id;

-- SUM DISTINCT
SELECT SUM(DISTINCT salary) FROM employees;  -- sum of unique salaries

-- Multi-column distinct count (not standard SQL)
-- COUNT(DISTINCT col1, col2) � supported in PostgreSQL, SQL Server
SELECT COUNT(DISTINCT (department_id, job_id)) FROM employees;
`

## 2.5 NULL Handling

`python
conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE scores (name, score)")
cur.executemany("INSERT INTO scores VALUES (?,?)", [
    ("Alice", 95), ("Bob", None), ("Charlie", 88), ("Diana", None)
])

## COUNT(*) includes NULL rows; COUNT(score) excludes NULLs
cur.execute("SELECT COUNT(*), COUNT(score), AVG(score) FROM scores")
print(cur.fetchone())  # (4, 2, 91.5) � NULLs ignored in AVG
`

`sql
-- NULLs in aggregates
SELECT COUNT(*) FROM scores;      -- 4 (includes all rows)
SELECT COUNT(score) FROM scores;  -- 2 (excludes NULLs)
SELECT AVG(score) FROM scores;    -- (95+88)/2 = 91.5
SELECT SUM(score) FROM scores;    -- 183 (NULLs skipped)
SELECT MIN(score) FROM scores;    -- 88

-- COALESCE for default values
SELECT AVG(COALESCE(score, 0)) FROM scores;  -- (95+0+88+0)/4 = 45.75
`

## 2.6 Multi-Aggregate Reports

`sql
-- Comprehensive department report
SELECT
    department_id,
    COUNT(*) AS employee_count,
    SUM(salary) AS total_salary,
    ROUND(AVG(salary), 2) AS avg_salary,
    MIN(salary) AS min_salary,
    MAX(salary) AS max_salary,
    ROUND(AVG(salary) - MIN(salary), 2) AS salary_spread
FROM employees
WHERE active = 1
GROUP BY department_id
HAVING COUNT(*) >= 3
ORDER BY avg_salary DESC;

-- Monthly sales summary
SELECT
    strftime('%Y-%m', order_date) AS month,
    COUNT(*) AS orders,
    SUM(amount) AS revenue,
    AVG(amount) AS avg_order,
    COUNT(DISTINCT customer_id) AS unique_customers
FROM orders
GROUP BY month
ORDER BY month;
`

## TypeScript Parallel

`	ypescript
type Employee = { name: string; dept: string; salary: number };

const employees: Employee[] = [
    { name: "Alice", dept: "Eng", salary: 75000 },
    { name: "Bob", dept: "Eng", salary: 68000 },
];

// Group by
const grouped = employees.reduce((acc, emp) => {
    if (!acc[emp.dept]) acc[emp.dept] = [];
    acc[emp.dept].push(emp.salary);
    return acc;
}, {} as Record<string, number[]>);

for (const [dept, salaries] of Object.entries(grouped)) {
    const avg = salaries.reduce((a, b) => a + b, 0) / salaries.length;
    console.log(${dept}: avg=, count=);
}
`

## Summary

- Aggregate functions summarize data: COUNT, SUM, AVG, MIN, MAX
- GROUP BY splits rows into groups; non-aggregate columns in SELECT must be in GROUP BY
- HAVING filters groups after aggregation (WHERE filters rows before)
- COUNT(*) includes all rows; COUNT(col) excludes NULLs
- AVG(col) ignores NULLs; use AVG(COALESCE(col, 0)) to include as zero
- DISTINCT with aggregates: COUNT(DISTINCT col) counts unique values
- Multiple aggregates can be combined in one SELECT
- ORDER BY works after GROUP BY � can use aggregate expressions
- GROUP BY without aggregate functions acts like DISTINCT
- Use COALESCE to handle NULL defaults in aggregate calculations

## Practical Takeaways

| Scenario | Do This | Avoid |
|----------|---------|-------|
| Count rows | COUNT(*) | COUNT(col) if NULLs exist |
| Count unique values | COUNT(DISTINCT col) | Subquery with DISTINCT |
| Filter before group | WHERE | HAVING (slower) |
| Filter after group | HAVING | WHERE (can't use aggregate) |
| Handle NULL in AVG | AVG(COALESCE(col, 0)) | AVG(col) ignoring zeros |
| Group by year | GROUP BY EXTRACT(YEAR FROM date) | Casting to string |
| Summary report | Multiple aggregates in one SELECT | Multiple queries |

## Interview Q&A

<details class="tp-qa-card" data-qid="sql-s02-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: What is the difference between WHERE and HAVING?</summary>
  <div class="tp-qa-answer"><p>WHERE filters individual rows before grouping. HAVING filters groups after aggregation. WHERE cannot use aggregate functions; HAVING can. WHERE is executed first, reducing rows for aggregation.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s02-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: How does AVG handle NULL values?</summary>
  <div class="tp-qa-answer"><p>AVG ignores NULL values � it divides by the count of non-NULL rows only. To include NULLs as zeros: AVG(COALESCE(col, 0)). The same applies to SUM, COUNT(col), MIN, MAX.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s02-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: Can you GROUP BY without an aggregate function?</summary>
  <div class="tp-qa-answer"><p>Yes, but it acts like SELECT DISTINCT � it returns unique combinations of the grouped columns. This is generally less efficient than DISTINCT. Most practical GROUP BY queries include aggregate functions.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s02-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: What is the difference between COUNT(*) and COUNT(column)?</summary>
  <div class="tp-qa-answer"><p>COUNT(*) counts all rows in the group, including rows with NULL values. COUNT(column) counts only rows where that column is NOT NULL. COUNT(DISTINCT column) counts unique non-null values.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s02-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: Can you use column aliases in GROUP BY or HAVING?</summary>
  <div class="tp-qa-answer"><p>Most databases allow column aliases in GROUP BY (PostgreSQL, MySQL, SQLite). HAVING may or may not support aliases depending on the database (PostgreSQL supports them, MySQL does not). ORDER BY always supports aliases. For portability, repeat the expression.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s02-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: How do you find duplicates with GROUP BY?</summary>
  <div class="tp-qa-answer"><p>GROUP BY the columns that should be unique, use HAVING COUNT(*) > 1: SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1. This returns all duplicate emails along with their count.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s02-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: What is execution order of a query with GROUP BY?</summary>
  <div class="tp-qa-answer"><p>FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT. This explains why aliases created in SELECT aren't available in WHERE/GROUP BY, and why HAVING can use aggregate functions.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s02-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: Can you nest aggregate functions?</summary>
  <div class="tp-qa-answer"><p>Standard SQL does not allow nested aggregates (AVG(SUM(...))). Use subqueries or CTEs instead: SELECT AVG(dept_total) FROM (SELECT SUM(salary) AS dept_total FROM emp GROUP BY dept). Some databases (PostgreSQL, SQL Server) allow window functions for intermediate aggregates.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s02-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: How do you get the top N per group?</summary>
  <div class="tp-qa-answer"><p>Use window functions: SELECT * FROM (SELECT *, ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) AS rn FROM emp) WHERE rn <= 3. Or use a LATERAL join / correlated subquery for databases without window functions.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s02-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: What is ROLLUP and CUBE?</summary>
  <div class="tp-qa-answer"><p>ROLLUP and CUBE are GROUP BY extensions that generate subtotals and grand totals. ROLLUP creates hierarchical subtotals: GROUP BY ROLLUP(year, month) gives totals per year and overall. CUBE creates all combinations: GROUP BY CUBE(a, b) gives subtotals for a, b, and overall.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which clause filters groups after aggregation? a) WHERE b) HAVING c) FILTER d) GROUP BY

<details class="tp-qa-card" data-qid="sql-s02-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) HAVING</strong></p></div></details>

**Q2**: COUNT(*) counts what? a) non-NULL rows b) all rows c) unique values d) non-NULL columns

<details class="tp-qa-card" data-qid="sql-s02-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) all rows regardless of NULLs</strong></p></div></details>

**Q3**: SELECT dept, COUNT(*) FROM emp GROUP BY dept � what's missing? a) HAVING b) nothing, it's valid c) ORDER BY d) WHERE

<details class="tp-qa-card" data-qid="sql-s02-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) nothing, valid query</strong></p></div></details>

**Q4**: Which is correct? a) WHERE AVG(sal) > 0 b) HAVING AVG(sal) > 0 c) both d) neither

<details class="tp-qa-card" data-qid="sql-s02-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) HAVING can use aggregate functions; WHERE cannot</strong></p></div></details>

**Q5**: What does AVG of (10, NULL, 20) return? a) 15 b) 10 c) 20 d) NULL

<details class="tp-qa-card" data-qid="sql-s02-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) 15 (NULL ignored; average of 10 and 20)</strong></p></div></details>

## Exercises

**Easy** � Write a query that counts the number of customers who signed up in each year.

**Easy** � Find the average price of products in each category.

**Medium** � Write a query that shows departments with more than 10 employees and average salary below 50000, ordered by headcount desc.

**Medium** � Find customers who have placed more than 5 orders, showing their name, order count, and total spent.

**Hard** � Write a query using GROUP BY ROLLUP to show sales totals by region and product category with subtotals.

**Hard** � Create a department comparison report showing: dept, employee count, total salary, avg salary, salary range, and the difference from company-wide avg.

## 2.7 Window Functions Introduction

Window functions perform calculations across a set of rows related to the current row.

`sql
-- ROW_NUMBER: sequential number within partition
SELECT
    name,
    department_id,
    salary,
    ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank_in_dept
FROM employees;

-- RANK and DENSE_RANK
SELECT
    name, salary,
    RANK() OVER (ORDER BY salary DESC) AS rank,        -- skips ties
    DENSE_RANK() OVER (ORDER BY salary DESC) AS dense  -- no skips
FROM employees;

-- Aggregate window functions
SELECT
    name, department_id, salary,
    AVG(salary) OVER (PARTITION BY department_id) AS dept_avg,
    salary - AVG(salary) OVER (PARTITION BY department_id) AS diff_from_avg,
    MAX(salary) OVER (PARTITION BY department_id) AS dept_max,
    ROUND(salary * 100.0 / SUM(salary) OVER (PARTITION BY department_id), 2) AS pct_of_dept
FROM employees;

-- Running totals and moving averages
SELECT
    order_date, amount,
    SUM(amount) OVER (ORDER BY order_date) AS running_total,
    AVG(amount) OVER (ORDER BY order_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg_3,
    SUM(amount) OVER (ORDER BY order_date ROWS UNBOUNDED PRECEDING) AS cumulative_sum
FROM orders
ORDER BY order_date;

-- FIRST_VALUE and LAST_VALUE
SELECT
    name, department_id, salary,
    FIRST_VALUE(name) OVER (PARTITION BY department_id ORDER BY salary DESC) AS top_earner,
    LAST_VALUE(name) OVER (
        PARTITION BY department_id ORDER BY salary DESC
        RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) AS lowest_earner
FROM employees;

-- LAG and LEAD for comparing with adjacent rows
SELECT
    order_date, amount,
    LAG(amount, 1) OVER (ORDER BY order_date) AS prev_order_amount,
    amount - LAG(amount, 1) OVER (ORDER BY order_date) AS change_from_prev,
    LEAD(amount, 1) OVER (ORDER BY order_date) AS next_order_amount
FROM orders
ORDER BY order_date;

-- NTILE for bucketing
SELECT
    name, salary,
    NTILE(4) OVER (ORDER BY salary DESC) AS salary_quartile
FROM employees;
`

## 2.8 GROUP BY Extensions

`sql
-- GROUPING SETS: multiple groupings in one query
SELECT
    COALESCE(department_id, -1) AS dept,
    COALESCE(job_id, -1) AS job,
    COUNT(*) AS emp_count,
    AVG(salary) AS avg_salary
FROM employees
GROUP BY GROUPING SETS (
    (department_id, job_id),
    (department_id),
    (job_id),
    ()
);

-- ROLLUP: hierarchical subtotals
SELECT
    department_id,
    job_id,
    COUNT(*) AS emp_count,
    SUM(salary) AS total_salary
FROM employees
GROUP BY ROLLUP(department_id, job_id);
-- Creates subtotals for each department and grand total

-- CUBE: all combinations of subtotals
SELECT
    EXTRACT(YEAR FROM hire_date) AS year,
    department_id,
    COUNT(*) AS hires,
    AVG(salary) AS avg_salary
FROM employees
GROUP BY CUBE(year, department_id);
-- Subtotals for year, department_id, and grand total

-- Practical monthly report with ROLLUP
SELECT
    EXTRACT(YEAR FROM order_date) AS year,
    EXTRACT(MONTH FROM order_date) AS month,
    COUNT(*) AS orders,
    SUM(amount) AS revenue,
    AVG(amount) AS avg_order
FROM orders
GROUP BY ROLLUP(year, month)
ORDER BY year, month;
`

## 2.9 Common Mistakes

`sql
-- Mistake 1: Using WHERE instead of HAVING for aggregate filters
SELECT department_id, AVG(salary) AS avg_sal
FROM employees
WHERE AVG(salary) > 70000  -- ERROR: can't use aggregate in WHERE
GROUP BY department_id;
-- Correct:
SELECT department_id, AVG(salary) AS avg_sal
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 70000;

-- Mistake 2: Missing non-aggregate columns from GROUP BY
SELECT department_id, job_id, COUNT(*)  -- job_id not in GROUP BY
FROM employees
GROUP BY department_id;
-- Error: column job_id must appear in GROUP BY or be in an aggregate

-- Mistake 3: Assuming COUNT(*) equals COUNT(column)
SELECT COUNT(*) FROM employees;  -- all rows including those with NULL dept
SELECT COUNT(department_id) FROM employees;  -- excludes NULL department_id

-- Mistake 4: Nested aggregates
SELECT AVG(SUM(salary)) FROM employees;  -- ERROR: can't nest aggregates
-- Correct with subquery:
SELECT AVG(dept_total) FROM (
    SELECT department_id, SUM(salary) AS dept_total
    FROM employees GROUP BY department_id
);

-- Mistake 5: Forgetting that AVG ignores NULLs
-- If you want NULL treated as 0:
SELECT AVG(COALESCE(score, 0)) FROM exam_results;

-- Mistake 6: FILTER clause vs WHERE
-- WHERE filters before aggregation
-- FILTER filters within aggregation (PostgreSQL 9.4+)
SELECT
    COUNT(*) AS total,
    COUNT(*) FILTER (WHERE score >= 90) AS excellent,
    COUNT(*) FILTER (WHERE score >= 70) AS passing
FROM exam_results;
`

## 2.10 Advanced Report Examples

`sql
-- Employee demographics report
SELECT
    department_id,
    COUNT(*) AS headcount,
    ROUND(AVG(salary), 2) AS avg_salary,
    ROUND(STDDEV(salary), 2) AS salary_stddev,
    MIN(salary) AS min_salary,
    MAX(salary) AS max_salary,
    MAX(salary) - MIN(salary) AS salary_range,
    PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY salary) AS median_salary,
    SUM(CASE WHEN salary > 100000 THEN 1 ELSE 0 END) AS high_earners,
    ROUND(AVG(CASE WHEN gender = 'F' THEN salary END), 2) AS avg_female_salary,
    ROUND(AVG(CASE WHEN gender = 'M' THEN salary END), 2) AS avg_male_salary
FROM employees
WHERE active = TRUE
GROUP BY department_id
HAVING COUNT(*) >= 5
ORDER BY avg_salary DESC;

-- Sales funnel analysis
SELECT
    stage,
    COUNT(*) AS prospects,
    COUNT(*) * 100.0 / MAX(COUNT(*)) OVER () AS pct_of_total,
    COUNT(*) * 100.0 / LAG(COUNT(*)) OVER (ORDER BY stage_order) AS conversion_rate
FROM sales_pipeline
GROUP BY stage, stage_order
ORDER BY stage_order;

-- Inventory turnover by category
SELECT
    category_id,
    COUNT(DISTINCT product_id) AS products,
    SUM(quantity_sold) AS total_sold,
    AVG(quantity_sold) AS avg_per_product,
    SUM(revenue) AS total_revenue,
    SUM(revenue) / NULLIF(SUM(quantity_sold), 0) AS avg_price,
    SUM(quantity_sold) * 1.0 / AVG(stock_level) AS turnover_ratio
FROM sales_data
WHERE sale_date >= DATE('now', '-1 year')
GROUP BY category_id
ORDER BY turnover_ratio DESC;
`

## 2.11 Performance Considerations

`sql
-- 1. Filter before aggregating
-- BAD: Groups all rows, then filters
SELECT department_id, AVG(salary)
FROM employees
GROUP BY department_id
HAVING department_id IN (1, 2, 3);

-- GOOD: Filters before group by
SELECT department_id, AVG(salary)
FROM employees
WHERE department_id IN (1, 2, 3)
GROUP BY department_id;

-- 2. Use indexes on GROUP BY and WHERE columns
CREATE INDEX idx_emp_dept ON employees(department_id);
CREATE INDEX idx_emp_salary ON employees(salary);

-- 3. Avoid DISTINCT in aggregate subqueries
-- BAD: Subquery computes all rows
SELECT department_id,
    (SELECT COUNT(DISTINCT employee_id) FROM projects WHERE dept_id = e.department_id)
FROM employees e;
-- BETTER: Pre-aggregate in a CTE

-- 4. Consider materialized views for heavy reports
CREATE MATERIALIZED VIEW dept_summary AS
SELECT department_id, COUNT(*), AVG(salary), SUM(salary)
FROM employees GROUP BY department_id;
`

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 02-sql-and-databases. When would you choose one approach over another?
2. Design a system that efficiently handles 02-sql-and-databases at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 02-sql-and-databases. What was your approach and what was the result?
2. How would you explain 02-sql-and-databases to a non-technical stakeholder?

#### Microsoft Style
1. How does 02-sql-and-databases integrate with enterprise systems and cloud architectures?
2. What are the security implications of 02-sql-and-databases?

#### NVIDIA Style
1. How would you optimize 02-sql-and-databases for GPU-accelerated computing?
2. What parallel processing patterns apply to 02-sql-and-databases?

#### AI Startup Style
1. How would you implement 02-sql-and-databases in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 02-sql-and-databases?

### Resume Tips
- **Technical Skills**: List 02-sql-and-databases under relevant technical skills
- **Project Description**: "Implemented 02-sql-and-databases to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 02-sql-and-databases in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 02-sql-and-databases
- [ ] Practice 3-5 problems related to 02-sql-and-databases
- [ ] Prepare 2 real-world examples of using 02-sql-and-databases
- [ ] Know the time/space complexity of common 02-sql-and-databases operations
- [ ] Have questions ready about how the company uses 02-sql-and-databases> **Next**: [03 � Joins ?](03-joins.md)


## Difficulty Level

**Level**: Beginner
**Estimated Study Time**: 30-45 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to SQL & Databases fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master aggregate functions?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

Understanding the evolution of aggregate functions helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding aggregate functions at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of aggregate functions like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply aggregate functions concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of aggregate functions?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply aggregate functions in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (12 minutes)
**Day 2**: Complete exercises and practice (12 minutes)
**Day 3**: Review flashcards and take quiz (6 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying aggregate functions to specific use cases, consider:
- Adapting general principles to your specific domain
- Performance optimization for your target hardware
- Cost considerations for production deployment
- Monitoring and observability in production