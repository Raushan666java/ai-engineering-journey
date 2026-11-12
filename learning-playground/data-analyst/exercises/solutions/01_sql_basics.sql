-- Solutions 01 — SQL Basics
-- Try the exercise first. Only read this after.

-- 1.
SELECT * FROM products;

-- 2.
SELECT name, price FROM products;

-- 3.
SELECT DISTINCT category FROM products;

-- 4.
SELECT * FROM customers WHERE country = 'UAE';

-- 5.
SELECT name, price FROM products WHERE price > 1000 ORDER BY price DESC;

-- 6.
SELECT name, price FROM products ORDER BY price ASC LIMIT 5;

-- 7.
SELECT COUNT(*) AS customer_count FROM customers;

-- 8.
SELECT COUNT(*) AS completed_orders FROM orders WHERE status = 'completed';

-- 9.
SELECT AVG(price) AS avg_price FROM products;

-- 10.
SELECT category, COUNT(*) AS product_count
FROM products
GROUP BY category
ORDER BY product_count DESC;

-- 11.
SELECT product_id, SUM(quantity) AS total_quantity
FROM order_items
GROUP BY product_id
ORDER BY product_id;

-- 12.
SELECT product_id, SUM(quantity * unit_price) AS revenue
FROM order_items
GROUP BY product_id
HAVING SUM(quantity * unit_price) > 5000
ORDER BY revenue DESC;

-- 13.
SELECT
    name,
    CASE
        WHEN price >= 3000 THEN 'Premium'
        WHEN price >= 500  THEN 'Mid'
        ELSE 'Budget'
    END AS tier
FROM products
ORDER BY price DESC;

-- 14.
SELECT strftime('%Y-%m', order_date) AS month, COUNT(*) AS orders
FROM orders
GROUP BY month
ORDER BY month;

-- 15.
SELECT country, COUNT(*) AS customer_count
FROM customers
GROUP BY country
HAVING COUNT(*) > 1
ORDER BY customer_count DESC;
