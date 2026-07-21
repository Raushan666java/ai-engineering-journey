<!-- Clear Language: Keep sentences under 50 words -->
# Window Functions — ROW_NUMBER, RANK, LAG, LEAD, NTILE, Frames

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand the concept of window functions and their syntax |
| LO2 | Use ROW_NUMBER, RANK, DENSE_RANK for ordering within partitions |
| LO3 | Apply NTILE for bucketing rows into quartiles or deciles |
| LO4 | Use LAG and LEAD for accessing adjacent row values |
| LO5 | Write frame specifications with ROWS, RANGE, and GROUPS |
| LO6 | Combine window functions with aggregate functions for advanced analytics |

## Introduction

Understanding window functions is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering window functions.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding window functions is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how window functions works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind window functions
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 5.1 | Window Function Basics | OVER(), PARTITION BY, ORDER BY |
| 5.2 | Ranking Functions | ROW_NUMBER, RANK, DENSE_RANK |
| 5.3 | NTILE and Bucketing | NTILE(n), quartiles, deciles |
| 5.4 | LAG and LEAD | LAG(expr, offset), LEAD(expr, offset), FIRST_VALUE, LAST_VALUE |
| 5.5 | Frame Specifications | ROWS BETWEEN, RANGE BETWEEN, GROUPS BETWEEN |
| 5.6 | Aggregate Window Functions | SUM, AVG, COUNT, MIN, MAX with OVER() |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Window Functions] --> B[OVER Clause]
    B --> C[PARTITION BY]
    B --> D[ORDER BY]
    A --> E[Ranking]
    A --> F[Value Functions]
    A --> G[Frames]
    E --> H[ROW_NUMBER]
    E --> I[RANK / DENSE_RANK]
    E --> J[NTILE]
    F --> K[LAG / LEAD]
    F --> L[FIRST_VALUE / LAST_VALUE]
    G --> M[ROWS]
    G --> N[RANGE]
    G --> O[GROUPS]
```text

## 5.1 Window Function Basics

A window function performs a calculation across a set of rows related to the current row, without collapsing them into a single output row.

```sql
SELECT
    employee_id,
    department,
    salary,
    AVG(salary) OVER (PARTITION BY department) AS dept_avg_salary,
    salary - AVG(salary) OVER (PARTITION BY department) AS diff_from_avg
FROM employees;
```text

Every window function has an OVER() clause with three components:

1. **PARTITION BY** — divides rows into groups (optional; entire result set is one partition if omitted)
2. **ORDER BY** — defines ordering within each partition
3. **Frame specification** — defines which rows to include relative to the current row

```sql
-- Simple running total without partition
SELECT
    date,
    amount,
    SUM(amount) OVER (ORDER BY date) AS running_total
FROM transactions;

-- Partitioned running total
SELECT
    department,
    employee_id,
    salary,
    SUM(salary) OVER (PARTITION BY department ORDER BY employee_id) AS dept_running_total
FROM employees;
```text

**ORDER BY in OVER is independent** of the query-level ORDER BY:

```sql
SELECT
    product,
    sales,
    ROW_NUMBER() OVER (ORDER BY sales DESC) AS rank
FROM products
ORDER BY product;  -- query-level order does not affect window
```text

## 5.2 Ranking Functions

These functions assign a rank to each row within its partition.

**ROW_NUMBER** assigns a unique sequential integer to each row:

```sql
SELECT
    student_id,
    subject,
    score,
    ROW_NUMBER() OVER (PARTITION BY subject ORDER BY score DESC) AS position
FROM exam_scores;
```text

ROW_NUMBER is deterministic only with unique ORDER BY values. Ties get different numbers arbitrarily.

**RANK** assigns the same rank to ties, then skips positions:

```sql
SELECT
    student_id,
    subject,
    score,
    RANK() OVER (PARTITION BY subject ORDER BY score DESC) AS rank
FROM exam_scores;
-- Scores: 95, 95, 90, 85  =>  Ranks: 1, 1, 3, 4
```text

**DENSE_RANK** assigns the same rank to ties without skipping:

```sql
SELECT
    student_id,
    subject,
    score,
    DENSE_RANK() OVER (PARTITION BY subject ORDER BY score DESC) AS dense_rank
FROM exam_scores;
-- Scores: 95, 95, 90, 85  =>  Ranks: 1, 1, 2, 3
```text

**Comparison of ranking functions**:

```sql
SELECT
    score,
    ROW_NUMBER() OVER (ORDER BY score DESC) AS rn,
    RANK() OVER (ORDER BY score DESC) AS rank,
    DENSE_RANK() OVER (ORDER BY score DESC) AS dense_rank
FROM (VALUES (100), (95), (95), (90), (85)) AS scores(score);
-- score | rn | rank | dense_rank
-- 100   | 1  | 1    | 1
-- 95    | 2  | 2    | 2
-- 95    | 3  | 2    | 2
-- 90    | 4  | 4    | 3
-- 85    | 5  | 5    | 4
```text

**Practical: deduplication with ROW_NUMBER**:

```sql
WITH ranked AS (
    SELECT
        *,
        ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) AS rn
    FROM user_events
)
SELECT *
FROM ranked
WHERE rn = 1;  -- keep only the most recent event per user
```text

## 5.3 NTILE and Bucketing

NTILE(n) divides rows into n buckets as evenly as possible:

```sql
SELECT
    employee_id,
    salary,
    NTILE(4) OVER (ORDER BY salary DESC) AS quartile
FROM employees;
-- Rows 1-250: quartile 1 (top 25%)
-- Rows 251-500: quartile 2
-- Etc.
```text

**Practical: decile analysis**:

```sql
WITH ranked AS (
    SELECT
        customer_id,
        lifetime_value,
        NTILE(10) OVER (ORDER BY lifetime_value DESC) AS decile
    FROM customers
)
SELECT
    decile,
    COUNT(*) AS customers,
    AVG(lifetime_value) AS avg_ltv,
    SUM(lifetime_value) AS total_ltv,
    SUM(SUM(lifetime_value)) OVER (ORDER BY decile) AS running_total
FROM ranked
GROUP BY decile
ORDER BY decile;
```text

**NTILE with PARTITION BY**:

```sql
SELECT
    department,
    employee_id,
    salary,
    NTILE(3) OVER (PARTITION BY department ORDER BY salary DESC) AS salary_tier
FROM employees;
-- Each department's employees divided into 3 salary tiers
```text

**Even distribution note**: NTILE cannot split exactly if rows % buckets != 0. The first (rows % buckets) buckets get one extra row. For 10 rows into 4 buckets: buckets 1, 2 have 3 rows; buckets 3, 4 have 2 rows.

## 5.4 LAG and LEAD

These access values from other rows within the same partition.

**LAG** accesses a previous row:

```sql
SELECT
    date,
    closing_price,
    LAG(closing_price, 1) OVER (ORDER BY date) AS prev_day_price,
    closing_price - LAG(closing_price, 1) OVER (ORDER BY date) AS daily_change,
    (closing_price - LAG(closing_price, 1) OVER (ORDER BY date)) /
        LAG(closing_price, 1) OVER (ORDER BY date) * 100 AS pct_change
FROM stock_prices;
```text

**LEAD** accesses a following row:

```sql
SELECT
    employee_id,
    hire_date,
    LEAD(hire_date, 1) OVER (PARTITION BY department ORDER BY hire_date) AS next_hire_date,
    DATEDIFF(day, hire_date, LEAD(hire_date, 1) OVER (PARTITION BY department ORDER BY hire_date)) AS days_until_next_hire
FROM employees;
```text

**Default value** when no preceding/following row exists:

```sql
LAG(salary, 1, 0) OVER (ORDER BY hire_date)  -- 0 if no previous row
LEAD(salary, 2, salary) OVER (ORDER BY hire_date)  -- current salary if no row 2 ahead
```text

**FIRST_VALUE and LAST_VALUE**:

```sql
SELECT
    date,
    price,
    FIRST_VALUE(price) OVER (ORDER BY date) AS first_price,
    LAST_VALUE(price) OVER (
        ORDER BY date
        ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) AS last_price
FROM prices;
```text

LAST_VALUE without a frame specification defaults to `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`, which gives the current row's value. Always specify the frame for LAST_VALUE.

**NTH_VALUE** for nth row in a window:

```sql
SELECT
    product,
    monthly_sales,
    NTH_VALUE(product, 2) OVER (ORDER BY monthly_sales DESC) AS second_best,
    NTH_VALUE(monthly_sales, 3) OVER (ORDER BY monthly_sales DESC) AS third_best_sales
FROM monthly_product_sales;
```text

## 5.5 Frame Specifications

Frames define which rows are included in the window calculation.

**ROWS frame** (physical, based on row position):

```sql
-- 3-day moving average (current row + 2 preceding)
SELECT
    date,
    value,
    AVG(value) OVER (
        ORDER BY date
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS moving_avg_3
FROM time_series;

-- Centered moving average
SELECT
    date,
    value,
    AVG(value) OVER (
        ORDER BY date
        ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING
    ) AS centered_ma_5
FROM time_series;
```text

**RANGE frame** (logical, based on ORDER BY value):

```sql
-- Include all rows with the same ORDER BY value as current row
SELECT
    date,
    value,
    SUM(value) OVER (
        ORDER BY date
        RANGE BETWEEN INTERVAL '7' DAY PRECEDING AND CURRENT ROW
    ) AS trailing_7d_sum
FROM daily_sales;
```text

RANGE is meaningful for dates and numeric values where duplicates should be grouped.

**GROUPS frame** (based on groups of peers):

```sql
SELECT
    department,
    salary,
    AVG(salary) OVER (
        ORDER BY salary
        GROUPS BETWEEN 1 PRECEDING AND 1 FOLLOWING
    ) AS smoothed_avg
FROM employees;
```text

**Frame boundaries**:

| Boundary | Meaning |
|----------|---------|
| UNBOUNDED PRECEDING | From the first row in the partition |
| n PRECEDING | n rows before the current row |
| CURRENT ROW | The current row |
| n FOLLOWING | n rows after the current row |
| UNBOUNDED FOLLOWING | To the last row in the partition |

**Default frames**:

- With ORDER BY: `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`
- Without ORDER BY: all rows in partition

```sql
-- These two are equivalent when ORDER BY is present
SUM(salary) OVER (ORDER BY hire_date)
SUM(salary) OVER (ORDER BY hire_date RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)
```text

**Practical: year-to-date calculation**:

```sql
SELECT
    date,
    amount,
    SUM(amount) OVER (
        PARTITION BY EXTRACT(YEAR FROM date)
        ORDER BY date
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS ytd_total
FROM transactions;
```text

## 5.6 Aggregate Window Functions

Standard aggregate functions can be used with OVER() for window calculations.

**Running totals and moving averages**:

```sql
SELECT
    date,
    amount,
    SUM(amount) OVER (ORDER BY date) AS running_total,
    AVG(amount) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS weekly_avg,
    COUNT(*) OVER (ORDER BY date ROWS BETWEEN 30 PRECEDING AND CURRENT ROW) AS rolling_30d_count,
    MIN(amount) OVER (ORDER BY date ROWS BETWEEN 10 PRECEDING AND CURRENT ROW) AS rolling_min,
    MAX(amount) OVER (ORDER BY date ROWS BETWEEN 10 PRECEDING AND CURRENT ROW) AS rolling_max
FROM daily_metrics;
```text

**Percentage of total**:

```sql
SELECT
    department,
    salary,
    SUM(salary) OVER (PARTITION BY department) AS dept_total,
    salary / SUM(salary) OVER (PARTITION BY department) * 100 AS pct_of_dept,
    SUM(salary) OVER () AS company_total,
    salary / SUM(salary) OVER () * 100 AS pct_of_company
FROM employees;
```text

**Cumulative distribution**:

```sql
SELECT
    score,
    CUME_DIST() OVER (ORDER BY score) AS cum_dist,  -- relative rank (0 to 1)
    PERCENT_RANK() OVER (ORDER BY score) AS pct_rank  -- (rank-1)/(total-1)
FROM exam_scores;
```text

**Multiple window functions in one query**:

```sql
SELECT
    product_id,
    sale_date,
    revenue,
    SUM(revenue) OVER (PARTITION BY product_id ORDER BY sale_date) AS running_revenue,
    AVG(revenue) OVER (PARTITION BY product_id ORDER BY sale_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg_3,
    revenue - AVG(revenue) OVER (PARTITION BY product_id ORDER BY sale_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS diff_from_ma,
    RANK() OVER (PARTITION BY product_id ORDER BY revenue DESC) AS best_sale_rank,
    LAG(revenue, 1) OVER (PARTITION BY product_id ORDER BY sale_date) AS prev_revenue,
    revenue - LAG(revenue, 1) OVER (PARTITION BY product_id ORDER BY sale_date) AS revenue_change
FROM daily_sales;
```text

**Window functions in WHERE and HAVING** — use a CTE or subquery:

```sql
WITH ranked AS (
    SELECT
        *,
        ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rn
    FROM employees
)
SELECT *
FROM ranked
WHERE rn <= 3;  -- top 3 earners per department
```text

## TypeScript Parallel

```typescript
// Window function emulation in TypeScript
interface Employee {
    id: number;
    department: string;
    salary: number;
    hireDate: Date;
}

function rowNumber<T>(data: T[], partitionBy: (item: T) => any, orderBy: (item: T) => any): (T & { rn: number })[] {
    const groups: Record<string, T[]> = {};
    for (const item of data) {
        const key = JSON.stringify(partitionBy(item));
        (groups[key] ??= []).push(item);
    }
    const result: (T & { rn: number })[] = [];
    for (const group of Object.values(groups)) {
        group.sort((a, b) => {
            const va = orderBy(a);
            const vb = orderBy(b);
            return va < vb ? -1 : va > vb ? 1 : 0;
        });
        group.forEach((item, i) => {
            result.push({ ...item, rn: i + 1 });
        });
    }
    return result;
}

function lag<T>(data: T[], orderBy: (item: T) => any, offset: number = 1): (T & { lag: T | null })[] {
    const sorted = [...data].sort((a, b) => {
        const va = orderBy(a);
        const vb = orderBy(b);
        return va < vb ? -1 : va > vb ? 1 : 0;
    });
    return sorted.map((item, i) => ({
        ...item,
        lag: i >= offset ? sorted[i - offset] : null
    }));
}
```text

## Summary

- Window functions perform calculations across rows without collapsing them
- OVER() contains PARTITION BY, ORDER BY, and frame specification
- ROW_NUMBER assigns unique sequential integers; RANK and DENSE_RANK handle ties
- NTILE(n) divides rows into n approximately equal buckets
- LAG and LEAD access previous and following rows within a partition
- FIRST_VALUE, LAST_VALUE, and NTH_VALUE access specific positions in a window
- ROWS frames are physical (by row count); RANGE frames are logical (by value)
- Aggregate functions (SUM, AVG, etc.) work as window functions with OVER()
- Window functions cannot be used directly in WHERE or HAVING — use CTEs
- Default frame with ORDER BY is RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW

## Practical Takeaways

| Scenario | Use | Avoid |
|----------|-----|-------|
| Row numbering | ROW_NUMBER() | Application-level counters |
| Top-N per group | ROW_NUMBER() in CTE + WHERE rn <= N | Multiple subqueries |
| Tie handling | RANK or DENSE_RANK | ROW_NUMBER with arbitrary tie-breaking |
| Percentile buckets | NTILE(100) | Manual CASE with PERCENT_RANK |
| Previous row value | LAG(column, offset) | Self-joins with complex ON conditions |
| Moving average | AVG() OVER (ROWS BETWEEN n PRECEDING AND CURRENT ROW) | Manual cursor-based calculations |
| Year-to-date totals | SUM() OVER (PARTITION BY year ORDER BY date) | Application-level accumulation |
| Comparing to total | SUM() OVER () for grand total | Cross-join to aggregated subquery |

## Interview Q&A

<details class="tp-qa-card" data-qid="sql-s05-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: What is a window function?</summary>
  <div class="tp-qa-answer"><p>A window function performs a calculation across a set of rows related to the current row, preserving the individual rows in the output (unlike GROUP BY which collapses them). It uses an OVER() clause with optional PARTITION BY and ORDER BY. Examples: ROW_NUMBER, RANK, SUM() OVER().</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s05-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: ROW_NUMBER vs RANK vs DENSE_RANK?</summary>
  <div class="tp-qa-answer"><p>ROW_NUMBER assigns a unique sequential number within each partition (ties broken arbitrarily). RANK assigns the same number to ties, then skips the next numbers. DENSE_RANK assigns the same number to ties without skipping. Example for values 95, 95, 90: ROW_NUMBER = 1,2,3; RANK = 1,1,3; DENSE_RANK = 1,1,2.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s05-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: How does NTILE work?</summary>
  <div class="tp-qa-answer"><p>NTILE(n) divides rows into n buckets as evenly as possible. If rows are not divisible by n, the first (rows % n) buckets get one extra row. Example: 10 rows into 4 buckets gives bucket sizes 3, 3, 2, 2. Used for quartile/decile analysis and bucketing data.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s05-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: LAG vs LEAD?</summary>
  <div class="tp-qa-answer"><p>LAG accesses a row before the current row (offset positive = previous). LEAD accesses a row after the current row (offset positive = next). Both take an offset parameter (default 1) and an optional default value for when no row exists. Used for period-over-period comparisons.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s05-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: ROWS vs RANGE vs GROUPS?</summary>
  <div class="tp-qa-answer"><p>ROWS is physical: it counts actual rows. RANGE is logical: it includes all rows whose ORDER BY value is within the specified range (handles ties by including all peers). GROUPS is similar to RANGE but counts groups of ties. ROWS is most common; RANGE is used for date/time windows.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s05-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: Can you use window functions in WHERE?</summary>
  <div class="tp-qa-answer"><p>No. Window functions are evaluated after WHERE but before ORDER BY. To filter on a window function result, use a CTE or subquery: WITH ranked AS (SELECT *, ROW_NUMBER() OVER (...) AS rn FROM table) SELECT * FROM ranked WHERE rn = 1.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s05-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: What is the default frame specification?</summary>
  <div class="tp-qa-answer"><p>With ORDER BY, the default is RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW. Without ORDER BY, the default is the entire partition (equivalent to ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING). This is why LAST_VALUE often needs an explicit frame.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s05-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: How to compute a moving average?</summary>
  <div class="tp-qa-answer"><p>Use AVG() with a window frame: AVG(value) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) for 7-day moving average. For exponential moving average, use database-specific functions or calculate via LAG in a recursive CTE.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s05-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: What does FIRST_VALUE do?</summary>
  <div class="tp-qa-answer"><p>FIRST_VALUE returns the value from the first row of the window frame. Combined with ORDER BY and PARTITION BY, it can show the earliest value in a group. LAST_VALUE returns the last row, but requires a frame of ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING to work correctly.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s05-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: How to calculate percentage of total with window functions?</summary>
  <div class="tp-qa-answer"><p>Use SUM() OVER() for grand total: value / SUM(value) OVER () * 100. For percentage within a group, add PARTITION BY: value / SUM(value) OVER (PARTITION BY group) * 100. This is more efficient than a subquery or cross-join for the same calculation.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which function skips numbers after ties? a) ROW_NUMBER b) RANK c) DENSE_RANK d) all

<details class="tp-qa-card" data-qid="sql-s05-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) RANK skips numbers after ties</strong></p></div></details>

**Q2**: What does NTILE(4) create? a) 4 rows b) 4 columns c) 4 quartile buckets d) 4 ordered partitions

<details class="tp-qa-card" data-qid="sql-s05-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) 4 quartile buckets</strong></p></div></details>

**Q3**: What is the default frame with ORDER BY? a) ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW b) RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW c) ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING d) no frame

<details class="tp-qa-card" data-qid="sql-s05-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW</strong></p></div></details>

**Q4**: Which function accesses the previous row? a) LEAD b) LAG c) NTILE d) FIRST_VALUE

<details class="tp-qa-card" data-qid="sql-s05-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) LAG</strong></p></div></details>

**Q5**: Can window functions be used directly in WHERE? a) Yes b) No, must use CTE/subquery c) Only in HAVING d) Only with GROUP BY

<details class="tp-qa-card" data-qid="sql-s05-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) No, must use CTE or subquery</strong></p></div></details>

## Exercises

**Easy** — Write a query that assigns ROW_NUMBER to employees in each department ordered by hire_date.

**Easy** — Use LAG to calculate the day-over-day change in stock closing prices.

**Medium** — Write a query that finds the top 3 highest-paid employees in each department using ROW_NUMBER in a CTE.

**Medium** — Use NTILE(10) to assign deciles to customers by total purchase amount, then calculate average purchase per decile.

**Hard** — Implement a running total and 7-day moving average query for daily sales using window frames. Compare the two trends.

**Hard** — Write a query that flags sales anomalies: identify transactions where the amount is more than 2 standard deviations from the rolling 30-day average using AVG and STDDEV window functions.

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
- [ ] Have questions ready about how the company uses 02-sql-and-databases> **Next**: [06 — Set Operations →](06-set-operations.md)


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

**Q: How long does it take to master window functions?
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

The Evolution of this technology reflects decades of research and practical engineering experience.

Understanding the evolution of window functions helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding window functions at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of window functions like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply window functions concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of window functions?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply window functions in real systems?
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

When applying window functions to specific use cases, consider:
- Adapting general principles to your specific domain
- Performance optimization for your target hardware
- Cost considerations for production deployment
- Monitoring and observability in production

## Open-Source Tools

- **LangChain**: Framework for building LLM-powered applications
- **LlamaIndex**: Data framework for connecting LLMs with external data
- **Hugging Face Transformers**: State-of-the-art ML models and datasets
- **Weights & Biases**: Experiment tracking and model evaluation
- **MLflow**: Open-source platform for ML lifecycle management
- **Prometheus + Grafana**: Monitoring and observability stack

## Debugging Guide

**Common Issues**:
- Check input validation and data types
- Verify API keys and authentication
- Monitor resource usage (CPU, memory, GPU)
- Review error logs for stack traces

**Debugging Steps**:
1. Reproduce the issue with minimal input
2. Add logging at key points
3. Check external dependencies
4. Verify configuration settings
5. Test with known-good inputs

## Mock Interview Section

**Quick Fire Questions**:
1. What is the core concept of SQL & Databases?
2. When would you use this in production?
3. What are the trade-offs?
4. How does this scale?
5. What are common pitfalls?

**Follow-up Questions**:
- How would you optimize this for 10x scale?
- What monitoring would you add?
- How would you test this in production?

## Optimized Implementation

For production systems, consider:
- **Caching**: Cache frequent computations and API responses
- **Batching**: Process multiple items together for efficiency
- **Async/Await**: Use non-blocking I/O for concurrent operations
- **Connection Pooling**: Reuse database and API connections
- **Lazy Loading**: Load resources only when needed

## References

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers from NeurIPS, ICML, ICLR
- Industry blogs from Google, Meta, OpenAI, Anthropic

## Evaluation Metrics

**Model Evaluation**:
- Accuracy, Precision, Recall, F1-Score
- BLEU, ROUGE for text generation
- Latency, Throughput, Cost per inference

**System Evaluation**:
- End-to-end latency (p50, p95, p99)
- Error rate and availability
- Resource utilization (CPU, memory, GPU)

## Real-World Examples

**Industry Applications**:
- Google: Search ranking, translation, autocomplete
- Amazon: Product recommendations, Alexa, fraud detection
- Netflix: Content recommendations, personalization
- Tesla: Autonomous driving, computer vision
- OpenAI: ChatGPT, DALL-E, Codex

## Next Topic

After mastering SQL & Databases, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.