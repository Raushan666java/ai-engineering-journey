# Exercise 08 — AI for Analysts

Five business questions. For each:

1. Write a five-part prompt (role, schema, question, rules, output).
2. Ask an AI for the SQL.
3. Run the **six-step verification protocol** from `lessons/08_ai_for_analysts.md`.
4. Write the final SQL in `exercises/08_ai_for_analysts.sql`.
5. Note in a comment: did the AI draft need fixing? What was wrong?

Known correct answers are at the bottom. Do not peek until you've verified.

---

## Q1. Total revenue

What is total revenue (`quantity * unit_price`) across **completed** orders only?

## Q2. Revenue by country

Revenue per customer country, completed orders only, highest first.

## Q3. Top products

Top 3 products by revenue, completed orders only.

## Q4. Average order value

What is the average order value (per order, not per line item), completed orders only?

## Q5. Monthly trend

Revenue per month, completed orders only.

---

## Meta-task

After finishing, write 5 lines in `notes/week-ai.md`:

- Which prompt worked best?
- What did the AI get wrong (if anything)?
- Which verification check caught it?
- What would you change next time?
- Time saved vs writing it yourself?

---

## Answer key (verify only)

| Question | Answer |
|---|---|
| Q1 | **70,325.00** |
| Q2 | India 34,225.00 · UAE 18,040.00 · Germany 11,180.00 · UK 5,770.00 · Qatar 1,110.00 |
| Q3 | Laptop Pro 15 45,000.00 · Monitor 27" 8,400.00 · Standing Desk 4,500.00 |
| Q4 | **3,516.25** |
| Q5 | 2024-08 **39,445.00** · 2024-09 **30,880.00** |

**If your number differs, do not "fix" the answer.** Find out why: wrong filter, fan-out, or a join that dropped rows.
