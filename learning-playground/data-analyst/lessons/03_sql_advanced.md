# Lesson 03 — SQL Advanced

**Goal:** write the queries that separate mid-level analysts from beginners.
**Time:** week 3.

---

## 1. Subqueries

A query inside a query.

### In WHERE

```sql
-- customers who spent more than the average customer
SELECT name FROM customers
WHERE customer_id IN (
    SELECT customer_id
    FROM orders
    WHERE status = 'completed'
);
```

### In FROM (a derived table)

```sql
SELECT ROUND(AVG(order_total), 2) AS avg_order_value
FROM (
    SELECT o.order_id, SUM(oi.quantity * oi.unit_price) AS order_total
    FROM orders o
    JOIN order_items oi ON oi.order_id = o.order_id
    WHERE o.status = 'completed'
    GROUP BY o.order_id
);
```

Result: **3,516.25**.

---

## 2. CTEs — `WITH`

A CTE is a named subquery. It makes long queries readable and testable.

```sql
WITH customer_revenue AS (
    SELECT c.customer_id, c.name,
           SUM(oi.quantity * oi.unit_price) AS revenue
    FROM customers c
    JOIN orders o       ON o.customer_id = c.customer_id
    JOIN order_items oi ON oi.order_id = o.order_id
    WHERE o.status = 'completed'
    GROUP BY c.customer_id, c.name
)
SELECT name, ROUND(revenue, 2) AS revenue
FROM customer_revenue
ORDER BY revenue DESC;
```

**Habit:** one CTE per logical step. `raw → cleaned → aggregated → final`.

You can chain several:

```sql
WITH line_items AS (
    SELECT oi.*, o.status
    FROM order_items oi
    JOIN orders o ON o.order_id = oi.order_id
),
completed AS (
    SELECT * FROM line_items WHERE status = 'completed'
)
SELECT SUM(quantity * unit_price) FROM completed;
```

---

## 3. Window functions

A window function calculates across rows **without collapsing them**. `GROUP BY` gives one row per group; a window function keeps every row and adds a column.

### ROW_NUMBER / RANK

```sql
SELECT
    c.name,
    ROUND(SUM(oi.quantity * oi.unit_price), 2) AS revenue,
    RANK() OVER (ORDER BY SUM(oi.quantity * oi.unit_price) DESC) AS rnk
FROM customers c
JOIN orders o       ON o.customer_id = c.customer_id
JOIN order_items oi ON oi.order_id = o.order_id
WHERE o.status = 'completed'
GROUP BY c.customer_id, c.name
ORDER BY rnk;
```

| Function | Ties |
|---|---|
| `ROW_NUMBER()` | 1,2,3,4 — no ties |
| `RANK()` | 1,2,2,4 — skips |
| `DENSE_RANK()` | 1,2,2,3 — no skip |

### PARTITION BY

`PARTITION BY` restarts the calculation per group.

```sql
-- rank products within each category
SELECT
    category,
    name,
    price,
    RANK() OVER (PARTITION BY category ORDER BY price DESC) AS price_rank
FROM products
ORDER BY category, price_rank;
```

### Share of total

```sql
SELECT
    category,
    ROUND(SUM(price), 2) AS category_value,
    ROUND(100.0 * SUM(price) / (SELECT SUM(price) FROM products), 2) AS pct_of_total
FROM products
GROUP BY category
ORDER BY pct_of_total DESC;
```

### Running total

```sql
WITH monthly AS (
    SELECT strftime('%Y-%m', o.order_date) AS month,
           SUM(oi.quantity * oi.unit_price) AS revenue
    FROM order_items oi
    JOIN orders o ON o.order_id = oi.order_id
    WHERE o.status = 'completed'
    GROUP BY month
)
SELECT
    month,
    ROUND(revenue, 2) AS revenue,
    ROUND(SUM(revenue) OVER (ORDER BY month), 2) AS running_total
FROM monthly
ORDER BY month;
```

| month | revenue | running_total |
|---|---:|---:|
| 2024-08 | 39,445.00 | 39,445.00 |
| 2024-09 | 30,880.00 | 70,325.00 |

### LAG / LEAD — month-over-month change

```sql
WITH monthly AS (
    SELECT strftime('%Y-%m', o.order_date) AS month,
           SUM(oi.quantity * oi.unit_price) AS revenue
    FROM order_items oi
    JOIN orders o ON o.order_id = oi.order_id
    WHERE o.status = 'completed'
    GROUP BY month
)
SELECT
    month,
    ROUND(revenue, 2) AS revenue,
    ROUND(revenue - LAG(revenue) OVER (ORDER BY month), 2) AS change,
    ROUND(100.0 * (revenue - LAG(revenue) OVER (ORDER BY month))
          / LAG(revenue) OVER (ORDER BY month), 2) AS pct_change
FROM monthly
ORDER BY month;
```

September: change **-8,565.00**, pct **-21.71%**.

---

## 4. Deduplication with ROW_NUMBER

Keep the latest row per customer:

```sql
WITH ranked AS (
    SELECT *,
           ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC) AS rn
    FROM orders
)
SELECT * FROM ranked WHERE rn = 1;
```

This is the standard "latest record per entity" pattern. Learn it — it appears in almost every analyst interview.

---

## 5. UNION vs UNION ALL

```sql
SELECT name FROM customers WHERE country = 'UAE'
UNION
SELECT name FROM customers WHERE city = 'Dubai';
```

- `UNION` removes duplicates (slower).
- `UNION ALL` keeps everything (faster; use when duplicates are impossible or wanted).

---

## 6. COALESCE — handle NULLs

```sql
SELECT
    c.name,
    COALESCE(SUM(oi.quantity * oi.unit_price), 0) AS revenue
FROM customers c
LEFT JOIN orders o       ON o.customer_id = c.customer_id
LEFT JOIN order_items oi ON oi.order_id = o.order_id
GROUP BY c.customer_id, c.name
ORDER BY revenue DESC;
```

Without `COALESCE`, Meera Iyer shows `NULL`; with it, `0`.

---

## 7. Exercises

Open `exercises/03_sql_advanced.sql`. Answers in `exercises/solutions/03_sql_advanced.sql`.

1. Rank customers by revenue.
2. Each category's % of total product value.
3. Running monthly revenue.
4. Month-over-month revenue change.
5. First order per customer (`ROW_NUMBER`).
6. Customers above average revenue.
7. Top 3 products by revenue using a CTE.
8. Latest order per customer.

---

## 8. Interview one-liners

- **Window vs GROUP BY:** GROUP BY collapses rows; a window function adds a column.
- **RANK vs DENSE_RANK:** RANK skips numbers after a tie; DENSE_RANK does not.
- **CTE vs subquery:** same result; CTEs are readable and reusable.
- **ROW_NUMBER for dedup:** partition by the entity, order by recency, keep `rn = 1`.

**Next:** `04_excel.md`
