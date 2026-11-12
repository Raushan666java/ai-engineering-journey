# Lesson 02 — SQL Joins

**Goal:** combine tables correctly. This is where most candidates fail interviews.
**Time:** week 2.

---

## 1. Why joins exist

Our data is split into four tables so nothing is duplicated. But business questions need **more than one table**:

> "Which customer spent the most?"

That needs `customers` + `orders` + `order_items`. Joins put them back together.

---

## 2. Keys

| Table | Primary key | Foreign key |
|---|---|---|
| customers | `customer_id` | — |
| products | `product_id` | — |
| orders | `order_id` | `customer_id` |
| order_items | (`order_id`, `product_id`) | `order_id`, `product_id` |

A **primary key** uniquely identifies a row. A **foreign key** points to a primary key in another table.

---

## 3. INNER JOIN — only matching rows

```sql
SELECT o.order_id, o.order_date, c.name, c.city
FROM orders o
JOIN customers c ON c.customer_id = o.customer_id
ORDER BY o.order_id
LIMIT 5;
```

`JOIN` alone means `INNER JOIN`: rows with no match on either side are dropped.

**Interview question:** "What happens to a customer with no orders?"
→ They disappear from an INNER JOIN.

---

## 4. Three-table join

`orders → order_items → products` is the classic chain.

```sql
SELECT
    o.order_id,
    p.name AS product,
    oi.quantity,
    oi.unit_price,
    oi.quantity * oi.unit_price AS line_total
FROM orders o
JOIN order_items oi ON oi.order_id = o.order_id
JOIN products p     ON p.product_id = oi.product_id
WHERE o.status = 'completed'
ORDER BY o.order_id
LIMIT 10;
```

Read it as: start from orders, attach each line item, then attach the product name.

---

## 5. LEFT JOIN — keep all left rows

```sql
SELECT c.name, o.order_id
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.customer_id
ORDER BY c.customer_id;
```

Customers without orders get `NULL` in the `order_id` column. Nothing is dropped.

### The anti-join pattern

"Find rows with no match" — extremely common:

```sql
-- customers who never ordered
SELECT c.name
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.customer_id
WHERE o.order_id IS NULL;
```

Result: **Meera Iyer**.

```sql
-- products never sold
SELECT p.name
FROM products p
LEFT JOIN order_items oi ON oi.product_id = p.product_id
WHERE oi.order_id IS NULL;
```

Result: **Unused Gadget**.

**Trap:** `WHERE o.order_id = NULL` returns nothing. Always use `IS NULL`.

---

## 6. Join + aggregate (the real work)

Revenue per customer:

```sql
SELECT c.name, ROUND(SUM(oi.quantity * oi.unit_price), 2) AS revenue
FROM customers c
JOIN orders o       ON o.customer_id = c.customer_id
JOIN order_items oi ON oi.order_id = o.order_id
WHERE o.status = 'completed'
GROUP BY c.customer_id, c.name
ORDER BY revenue DESC;
```

Revenue per category:

```sql
SELECT p.category, ROUND(SUM(oi.quantity * oi.unit_price), 2) AS revenue
FROM order_items oi
JOIN orders o   ON o.order_id = oi.order_id
JOIN products p ON p.product_id = oi.product_id
WHERE o.status = 'completed'
GROUP BY p.category
ORDER BY revenue DESC;
```

### Expected results (completed orders only)

| Customer | Revenue |
|---|---:|
| Vikram Singh | 11,500.00 |
| Lena Fischer | 11,180.00 |
| Fatima Al Mansoori | 10,500.00 |
| Rohan Mehta | 9,515.00 |
| Aarav Sharma | 7,010.00 |

| Category | Revenue |
|---|---:|
| Electronics | 57,840.00 |
| Furniture | 9,470.00 |
| Kitchen | 2,700.00 |
| Stationery | 315.00 |

Total check: **70,325.00**.

---

## 7. The fan-out trap (most common bug)

`orders` has **24 rows**. Joined to `order_items` it has **54 rows** — one row per line item. That is correct.

But this is wrong:

```sql
-- WRONG: sums the product list price once per line item
SELECT SUM(p.price)
FROM orders o
JOIN order_items oi ON oi.order_id = o.order_id
JOIN products p     ON p.product_id = oi.product_id;
```

Correct: sum the **line** price.

```sql
SELECT SUM(oi.quantity * oi.unit_price)
FROM order_items oi;
```

**Rule:** after a join, aggregate at the grain of the **lowest** table (here, `order_items`).

### Two checks that catch fan-out

```sql
-- row counts
SELECT COUNT(*) FROM orders;                              -- 24
SELECT COUNT(*) FROM orders o JOIN order_items oi ON oi.order_id = o.order_id;  -- 54

-- reconciliation: parts must equal the whole
SELECT ROUND(SUM(oi.quantity * oi.unit_price), 2) AS whole
FROM order_items oi JOIN orders o ON o.order_id = oi.order_id
WHERE o.status = 'completed';
```

---

## 8. Join types cheat sheet

| Type | Keeps |
|---|---|
| `INNER JOIN` | only matches |
| `LEFT JOIN` | all left + matches |
| `RIGHT JOIN` | all right + matches (rare; rewrite as LEFT) |
| `FULL OUTER JOIN` | everything |

Use `INNER` by default. Use `LEFT` when the question says "all customers", "all products", "who never...".

---

## 9. Exercises

Open `exercises/02_sql_joins.sql`. Answers in `exercises/solutions/02_sql_joins.sql`.

1. Every order with the customer name and city.
2. Revenue per customer, highest first.
3. Revenue per category, completed only.
4. Customers who never ordered.
5. Products never sold.
6. Top 5 customers by revenue.
7. Revenue by country, completed only.
8. Total revenue, completed only — must equal 70,325.00.

---

## 10. Common mistakes

| Mistake | Result |
|---|---|
| Forgetting the join condition | Cartesian product (every row × every row) |
| Using `WHERE col = NULL` | Always empty |
| Aggregating after a fan-out with the wrong column | Double-counted revenue |
| Filtering the right table in `WHERE` after a `LEFT JOIN` | Turns it back into an INNER JOIN |
| Joining on the wrong key | Plausible but wrong numbers |

**Next:** `03_sql_advanced.md`
