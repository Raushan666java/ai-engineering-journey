# Schema — practice.db

Four tables. This is a small e-commerce database.

## customers

| Column | Type | Notes |
|---|---|---|
| customer_id | INTEGER | primary key |
| name | TEXT | full name |
| city | TEXT | |
| country | TEXT | India, UAE, UK, Germany, Qatar |
| signup_date | TEXT | `YYYY-MM-DD` |

11 rows. `Meera Iyer` (id 11) never ordered — deliberate, for anti-join practice.

## products

| Column | Type | Notes |
|---|---|---|
| product_id | INTEGER | primary key |
| name | TEXT | |
| category | TEXT | Electronics, Furniture, Kitchen, Stationery |
| price | REAL | list price |

11 rows. `Unused Gadget` (id 11) has never sold — deliberate, for anti-join practice.

## orders

| Column | Type | Notes |
|---|---|---|
| order_id | INTEGER | primary key |
| customer_id | INTEGER | → customers.customer_id |
| order_date | TEXT | `YYYY-MM-DD` |
| status | TEXT | `completed`, `pending`, `cancelled` |

24 rows: 20 completed, 2 pending, 2 cancelled.

## order_items

One row per product in an order.

| Column | Type | Notes |
|---|---|---|
| order_id | INTEGER | → orders.order_id |
| product_id | INTEGER | → products.product_id |
| quantity | INTEGER | units bought |
| unit_price | REAL | price at purchase time |

Composite primary key: `(order_id, product_id)`. 54 rows.

**Revenue for a line** = `quantity * unit_price`.

---

## Relationship

```
customers 1 ──── many orders
orders    1 ──── many order_items
products  1 ──── many order_items
```

`orders` and `products` connect through `order_items` (a many-to-many link table).
