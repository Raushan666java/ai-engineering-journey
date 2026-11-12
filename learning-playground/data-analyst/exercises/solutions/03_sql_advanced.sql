-- Solutions 03 — SQL Advanced

-- 1.
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

-- 2.
SELECT
    category,
    ROUND(SUM(price), 2) AS category_value,
    ROUND(100.0 * SUM(price) / (SELECT SUM(price) FROM products), 2) AS pct_of_total
FROM products
GROUP BY category
ORDER BY pct_of_total DESC;

-- 3.
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

-- 4.
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

-- 5.
WITH ranked AS (
    SELECT customer_id, order_date,
           ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date) AS rn
    FROM orders
)
SELECT c.name, r.order_date AS first_order
FROM ranked r
JOIN customers c ON c.customer_id = r.customer_id
WHERE r.rn = 1
ORDER BY c.customer_id;

-- 6.
WITH rev AS (
    SELECT c.customer_id, c.name,
           SUM(oi.quantity * oi.unit_price) AS revenue
    FROM customers c
    JOIN orders o       ON o.customer_id = c.customer_id
    JOIN order_items oi ON oi.order_id = o.order_id
    WHERE o.status = 'completed'
    GROUP BY c.customer_id, c.name
)
SELECT name, ROUND(revenue, 2) AS revenue
FROM rev
WHERE revenue > (SELECT AVG(revenue) FROM rev)
ORDER BY revenue DESC;

-- 7.
WITH product_revenue AS (
    SELECT p.product_id, p.name,
           SUM(oi.quantity * oi.unit_price) AS revenue
    FROM order_items oi
    JOIN orders o   ON o.order_id = oi.order_id
    JOIN products p ON p.product_id = oi.product_id
    WHERE o.status = 'completed'
    GROUP BY p.product_id, p.name
)
SELECT name, ROUND(revenue, 2) AS revenue
FROM product_revenue
ORDER BY revenue DESC
LIMIT 3;

-- 8.
WITH ranked AS (
    SELECT customer_id, order_date,
           ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC) AS rn
    FROM orders
)
SELECT c.name, r.order_date AS latest_order_date
FROM ranked r
JOIN customers c ON c.customer_id = r.customer_id
WHERE r.rn = 1
ORDER BY c.customer_id;
