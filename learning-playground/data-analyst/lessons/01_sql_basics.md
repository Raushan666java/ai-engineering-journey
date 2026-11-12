# Lesson 01 — SQL Basics

**Goal:** read any table, filter rows, sort, and summarise with aggregates.
**Time:** 4–6 hours across week 1.
**Rule:** type every query yourself. No copy-paste.

---

## 1. Setup (2 minutes)

```powershell
cd learning-playground/data-analyst
python sql/seed.py
python sql/shell.py
```

You should see `sql> `. Everything below runs there.

Check:

```sql
SELECT * FROM customers;
```

You get 11 rows. `*` means "all columns."

---

## 2. The mental model

SQL reads like English, and the clauses run in a **fixed order** — not the order you write them:

```
FROM      → which table
WHERE     → which rows
GROUP BY  → which groups
HAVING    → which groups survive
SELECT    → which columns
ORDER BY  → how to sort
LIMIT     → how many
```

This order is why you can't use a `SELECT` alias inside `WHERE` — `WHERE` runs before `SELECT`.

---

## 3. SELECT: choose columns

```sql
-- all columns (fine for exploring, bad in production)
SELECT * FROM products;

-- specific columns
SELECT name, category, price FROM products;

-- rename with an alias
SELECT name AS product_name, price AS list_price FROM products;
```

**Why aliases matter:** `SELECT quantity * unit_price AS line_total` makes the output readable and lets you reuse it later.

---

## 4. DISTINCT: unique values

```sql
SELECT DISTINCT category FROM products;
```

Answers "what categories exist?" — a real first question on any new dataset.

```sql
SELECT DISTINCT country FROM customers;
```

---

## 5. WHERE: filter rows

```sql
-- one condition
SELECT * FROM products WHERE category = 'Electronics';

-- numbers
SELECT * FROM products WHERE price > 1000;

-- text search (case-insensitive in SQLite for ASCII)
SELECT * FROM customers WHERE city LIKE 'Dub%';

-- list of values
SELECT * FROM customers WHERE country IN ('UAE', 'Qatar');

-- range
SELECT * FROM products WHERE price BETWEEN 100 AND 1000;

-- combine conditions
SELECT * FROM products
WHERE category = 'Electronics' AND price < 2000;

SELECT * FROM products
WHERE category = 'Furniture' OR price < 100;
```

### Comparison operators

| Operator | Meaning |
|---|---|
| `=` | equal |
| `<>` or `!=` | not equal |
| `>` `<` `>=` `<=` | comparison |
| `BETWEEN a AND b` | inclusive range |
| `IN (...)` | matches any in list |
| `LIKE 'A%'` | starts with A |
| `LIKE '%A%'` | contains A |
| `IS NULL` | missing value |

### NULL is not zero

```sql
-- wrong: never matches NULL
SELECT * FROM customers WHERE city = NULL;

-- right
SELECT * FROM customers WHERE city IS NULL;
```

Our data has no NULLs, but interviews love this question.

---

## 6. ORDER BY and LIMIT

```sql
-- most expensive first
SELECT name, price FROM products ORDER BY price DESC;

-- cheapest 3
SELECT name, price FROM products ORDER BY price ASC LIMIT 3;

-- two keys: category A→Z, then price high→low
SELECT name, category, price
FROM products
ORDER BY category ASC, price DESC;
```

`LIMIT` without `ORDER BY` is meaningless — "top 3" needs a definition of top.

---

## 7. Aggregates: summarise a column

```sql
SELECT COUNT(*) FROM orders;                 -- 24
SELECT COUNT(*) FROM orders WHERE status = 'cancelled';  -- 2

SELECT SUM(price) FROM products;             -- total list value
SELECT AVG(price) FROM products;
SELECT MIN(price), MAX(price) FROM products;
```

`COUNT(*)` counts rows. `COUNT(column)` counts non-NULL values in that column — a subtle difference interviewers test.

---

## 8. GROUP BY: one row per group

This is the most important concept in the lesson.

```sql
-- how many products per category?
SELECT category, COUNT(*) AS product_count
FROM products
GROUP BY category;

-- average price per category
SELECT category, AVG(price) AS avg_price
FROM products
GROUP BY category
ORDER BY avg_price DESC;

-- orders per status
SELECT status, COUNT(*) AS orders
FROM orders
GROUP BY status;
```

**Rule:** every column in `SELECT` must either be in `GROUP BY` or wrapped in an aggregate (`SUM`, `COUNT`, `AVG`...). Otherwise the result is undefined.

### Revenue from order_items

```sql
SELECT
    product_id,
    SUM(quantity * unit_price) AS revenue
FROM order_items
GROUP BY product_id
ORDER BY revenue DESC;
```

This is the query behind "which product makes the most money."

---

## 9. HAVING: filter groups

`WHERE` filters **rows** before grouping. `HAVING` filters **groups** after.

```sql
-- categories with more than 2 products
SELECT category, COUNT(*) AS product_count
FROM products
GROUP BY category
HAVING COUNT(*) > 2;

-- products with revenue over 5000
SELECT
    product_id,
    SUM(quantity * unit_price) AS revenue
FROM order_items
GROUP BY product_id
HAVING SUM(quantity * unit_price) > 5000
ORDER BY revenue DESC;
```

**Interview trap:** `WHERE` cannot see aggregates. `WHERE SUM(x) > 5` fails; `HAVING SUM(x) > 5` works.

---

## 10. CASE WHEN: if/else in SQL

```sql
SELECT
    name,
    price,
    CASE
        WHEN price >= 3000 THEN 'Premium'
        WHEN price >= 500  THEN 'Mid'
        ELSE 'Budget'
    END AS tier
FROM products
ORDER BY price DESC;
```

This is how you build segments, flags, and buckets — very common in analyst work.

---

## 11. Dates in SQLite

Dates are stored as `TEXT` in `YYYY-MM-DD`, which sorts correctly.

```sql
-- orders in August 2024
SELECT * FROM orders
WHERE order_date >= '2024-08-01'
  AND order_date <  '2024-09-01';

-- month label
SELECT
    strftime('%Y-%m', order_date) AS month,
    COUNT(*) AS orders
FROM orders
GROUP BY month
ORDER BY month;
```

In PostgreSQL/MySQL the date functions differ, but the logic is identical.

---

## 12. Common mistakes

| Mistake | Fix |
|---|---|
| `WHERE city = NULL` | `WHERE city IS NULL` |
| `SELECT category, name, COUNT(*)` with `GROUP BY category` | Every non-aggregated column must be in `GROUP BY` |
| Filtering aggregates in `WHERE` | Use `HAVING` |
| `LIMIT 3` with no `ORDER BY` | Add `ORDER BY` first |
| Using `*` in a final deliverable | List the columns you mean |

---

## 13. Your week-1 checklist

- [ ] Run `seed.py` and open the shell
- [ ] Write all 15 exercises in `exercises/01_sql_basics.sql`
- [ ] Check answers in `exercises/solutions/01_sql_basics.sql` **only after trying**
- [ ] Explain `WHERE` vs `HAVING` out loud in 30 seconds
- [ ] Explain `COUNT(*)` vs `COUNT(column)` out loud
- [ ] Commit your exercise file

**Next:** `02_sql_joins.md` — combining tables.
