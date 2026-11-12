# Lesson 08 — AI for Analysts

**Goal:** use AI to work 2–3× faster **without shipping a wrong number.**
**Time:** 1 week, then use it every day.

**The rule of this module:** *AI drafts, you verify. A number you didn't check is a number you invented.*

---

## 1. Where AI genuinely helps

| Task | Good use |
|---|---|
| Business question → first-draft SQL | Fast starting point, not final answer |
| Unfamiliar schema | "Explain what this table represents" |
| SQL debugging | Paste the error + query |
| Messy data | pandas cleaning snippets |
| Hypothesis generation | "What could explain this drop?" |
| Executive summary | Turn verified findings into a one-pager |
| Documentation | Comment a complex query |

## 2. Where AI reliably fails

- **Invents columns and tables** that don't exist.
- **Gets JOIN direction wrong** and silently duplicates rows.
- **Forgets filters** like `status = 'completed'`.
- **Mishandles NULLs** and duplicates.
- **Reports confident, wrong numbers.**
- **Leaks data** if you paste customer records into a public tool.

Every one of these produces a plausible-looking result. That's what makes it dangerous.

---

## 3. The five-part prompt

Never write "write SQL for revenue." Use this structure:

```
ROLE:      You are a senior data analyst writing SQLite SQL.
SCHEMA:    <paste table definitions>
QUESTION:  <one precise business question>
RULES:     - Only use columns that exist in the schema.
           - Exclude cancelled orders unless told otherwise.
           - Use ROUND(x, 2).
OUTPUT:    SQL only, then a 3-line explanation of your assumptions.
```

The **RULES + OUTPUT** lines are what turn a generic answer into a usable draft.

### Bad vs good

**Bad:**

```
show revenue by country
```

**Good:**

```
ROLE: senior data analyst, SQLite.
SCHEMA:
  customers(customer_id, name, city, country, signup_date)
  orders(order_id, customer_id, order_date, status)
  order_items(order_id, product_id, quantity, unit_price)
  products(product_id, name, category, price)
QUESTION: What is total revenue (quantity * unit_price) per customer country,
for completed orders only?
RULES:
  - Use only the columns above.
  - Join through order_items.
  - Exclude status = 'cancelled' and 'pending'.
  - Round to 2 decimals.
OUTPUT: SQL, then list any assumptions.
```

---

## 4. The verification protocol (do all six)

### 1. Schema check

```sql
PRAGMA table_info(order_items);
```

Every column the AI used must exist. No exceptions.

### 2. Row-count sanity

If you expect 10 customers, and the query returns 47 rows, something fanned out.

### 3. Total reconciliation

The parts must equal the whole:

```sql
-- whole
SELECT SUM(quantity * unit_price) FROM order_items;

-- parts
SELECT SUM(revenue) FROM (
    SELECT product_id, SUM(quantity * unit_price) AS revenue
    FROM order_items GROUP BY product_id
);
```

If they differ, you have a JOIN or duplicate problem.

### 4. Filter check

Read the AI's `WHERE` line by line. Ask: *did it drop cancelled orders? Did it respect the date range?*

### 5. Fan-out check

Joining `orders → order_items` multiplies rows. Compare:

```sql
SELECT COUNT(*) FROM orders;
SELECT COUNT(*) FROM orders o JOIN order_items oi ON oi.order_id = o.order_id;
```

More rows is normal here — but `SUM` after the join must use the **line-level** price, not the order-level one.

### 6. Spot-check three rows

Pick 3 rows and verify by hand. If those are right, the logic is probably right. If one is wrong, stop.

---

## 5. A real example

**Question:** revenue per country, completed orders only.

AI draft:

```sql
SELECT c.country, ROUND(SUM(oi.quantity * oi.unit_price), 2) AS revenue
FROM customers c
JOIN orders o ON o.customer_id = c.customer_id
JOIN order_items oi ON oi.order_id = o.order_id
WHERE o.status = 'completed'
GROUP BY c.country
ORDER BY revenue DESC;
```

Verify:

1. Columns exist? Yes.
2. Row count? 5 countries — plausible.
3. Total = 70,325? Run the whole-table query and compare.
4. Filter applied? Yes, `status = 'completed'`.
5. Fan-out? `order_items` is line-level; sum is correct.
6. Spot-check India = 34,225 by hand.

✅ Accept.

**Expected answer:**

| country | revenue |
|---|---:|
| India | 34,225.00 |
| UAE | 18,040.00 |
| Germany | 11,180.00 |
| UK | 5,770.00 |
| Qatar | 1,110.00 |
| **Total** | **70,325.00** |

---

## 6. Data safety

- **Never paste** customer names, phone numbers, emails, ID numbers, or company-confidential data into a public AI tool.
- Use **aggregated** or **synthetic** data (like `practice.db`).
- Prefer company-approved tools (Azure OpenAI, Copilot for M365) over personal accounts.
- If you must share schema, share **column names and types**, not rows.

---

## 7. Exercises

See `exercises/08_ai_for_analysts.md`. Five business questions, each with a known correct answer. Your job is to prompt, verify, and catch at least one AI mistake.

---

## 8. How to talk about this in interviews

Don't say "I used ChatGPT."

Say:

> "I draft queries with AI, then run a reconciliation check: sum of grouped results must equal the raw total, and I spot-check three rows. On one query the model joined `orders` to `order_items` before filtering cancelled orders, which inflated revenue by 12%. The reconciliation caught it."

That answer proves **speed + judgement**. That is exactly what employers are hiring for in 2026.

---

## 9. Checklist

- [ ] I always include schema + rules + output format in the prompt
- [ ] I run `PRAGMA table_info` before trusting a column
- [ ] I reconcile totals before showing a number
- [ ] I spot-check 3 rows
- [ ] I never paste real customer data into a public tool
- [ ] I can describe one AI mistake I caught
