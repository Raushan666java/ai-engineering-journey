"""Build practice.db with sample data for the Data Analyst track.

Run from anywhere:
    python sql/seed.py

Tables: customers, products, orders, order_items
"""

from __future__ import annotations

import sqlite3
from pathlib import Path

DB_PATH = Path(__file__).with_name("practice.db")

SCHEMA = """
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
    customer_id   INTEGER PRIMARY KEY,
    name          TEXT    NOT NULL,
    city          TEXT    NOT NULL,
    country       TEXT    NOT NULL,
    signup_date   TEXT    NOT NULL
);

CREATE TABLE products (
    product_id    INTEGER PRIMARY KEY,
    name          TEXT    NOT NULL,
    category      TEXT    NOT NULL,
    price         REAL    NOT NULL
);

CREATE TABLE orders (
    order_id      INTEGER PRIMARY KEY,
    customer_id   INTEGER NOT NULL REFERENCES customers(customer_id),
    order_date    TEXT    NOT NULL,
    status        TEXT    NOT NULL CHECK (status IN ('completed', 'pending', 'cancelled'))
);

CREATE TABLE order_items (
    order_id      INTEGER NOT NULL REFERENCES orders(order_id),
    product_id    INTEGER NOT NULL REFERENCES products(product_id),
    quantity      INTEGER NOT NULL,
    unit_price    REAL    NOT NULL,
    PRIMARY KEY (order_id, product_id)
);
"""

CUSTOMERS = [
    (1, "Aarav Sharma", "Mumbai", "India", "2024-01-15"),
    (2, "Fatima Al Mansoori", "Dubai", "UAE", "2024-02-20"),
    (3, "Rohan Mehta", "Pune", "India", "2024-03-05"),
    (4, "Sara Khan", "Sharjah", "UAE", "2024-03-22"),
    (5, "John Smith", "London", "UK", "2024-04-10"),
    (6, "Priya Nair", "Kochi", "India", "2024-05-01"),
    (7, "Omar Hassan", "Abu Dhabi", "UAE", "2024-05-18"),
    (8, "Lena Fischer", "Berlin", "Germany", "2024-06-02"),
    (9, "Vikram Singh", "Delhi", "India", "2024-06-25"),
    (10, "Aisha Rahman", "Doha", "Qatar", "2024-07-14"),
    (11, "Meera Iyer", "Kochi", "India", "2024-08-01"),
]

PRODUCTS = [
    (1, "Laptop Pro 15", "Electronics", 4500.00),
    (2, "Wireless Mouse", "Electronics", 120.00),
    (3, "Office Chair", "Furniture", 850.00),
    (4, "Standing Desk", "Furniture", 1500.00),
    (5, "Coffee Maker", "Kitchen", 300.00),
    (6, "Noise-Cancelling Headphones", "Electronics", 1200.00),
    (7, "Notebook Pack", "Stationery", 45.00),
    (8, "Desk Lamp", "Furniture", 180.00),
    (9, "Water Bottle", "Kitchen", 60.00),
    (10, 'Monitor 27"', "Electronics", 1400.00),
    (11, "Unused Gadget", "Electronics", 999.00),
]

ORDERS = [
    (1001, 1, "2024-08-01", "completed"),
    (1002, 2, "2024-08-03", "completed"),
    (1003, 1, "2024-08-05", "cancelled"),
    (1004, 3, "2024-08-07", "completed"),
    (1005, 4, "2024-08-10", "completed"),
    (1006, 5, "2024-08-12", "completed"),
    (1007, 2, "2024-08-15", "pending"),
    (1008, 6, "2024-08-18", "completed"),
    (1009, 7, "2024-08-20", "completed"),
    (1010, 8, "2024-08-22", "completed"),
    (1011, 3, "2024-08-25", "completed"),
    (1012, 9, "2024-08-28", "completed"),
    (1013, 10, "2024-09-01", "completed"),
    (1014, 1, "2024-09-03", "completed"),
    (1015, 4, "2024-09-05", "cancelled"),
    (1016, 5, "2024-09-08", "completed"),
    (1017, 6, "2024-09-10", "completed"),
    (1018, 7, "2024-09-12", "pending"),
    (1019, 8, "2024-09-15", "completed"),
    (1020, 9, "2024-09-18", "completed"),
    (1021, 2, "2024-09-20", "completed"),
    (1022, 10, "2024-09-22", "completed"),
    (1023, 1, "2024-09-25", "completed"),
    (1024, 3, "2024-09-28", "completed"),
]

ORDER_ITEMS = [
    (1001, 1, 1, 4500.00), (1001, 2, 1, 120.00),
    (1002, 1, 1, 4500.00), (1002, 6, 1, 1200.00),
    (1003, 3, 1, 850.00),
    (1004, 4, 1, 1500.00), (1004, 8, 2, 180.00),
    (1005, 1, 1, 4500.00), (1005, 10, 1, 1400.00), (1005, 2, 1, 120.00),
    (1006, 5, 1, 300.00), (1006, 9, 2, 60.00),
    (1007, 6, 1, 1200.00),
    (1008, 1, 1, 4500.00),
    (1009, 10, 1, 1400.00), (1009, 2, 1, 120.00),
    (1010, 1, 1, 4500.00), (1010, 3, 1, 850.00), (1010, 5, 1, 300.00),
    (1011, 2, 2, 120.00), (1011, 7, 3, 45.00), (1011, 9, 3, 60.00),
    (1012, 1, 1, 4500.00), (1012, 4, 1, 1500.00), (1012, 10, 1, 1400.00), (1012, 6, 1, 1200.00),
    (1013, 5, 2, 300.00), (1013, 9, 2, 60.00),
    (1014, 3, 1, 850.00), (1014, 8, 1, 180.00), (1014, 7, 2, 45.00),
    (1015, 10, 1, 1400.00),
    (1016, 1, 1, 4500.00), (1016, 3, 1, 850.00),
    (1017, 5, 1, 300.00), (1017, 10, 1, 1400.00),
    (1018, 6, 1, 1200.00), (1018, 2, 2, 120.00),
    (1019, 1, 1, 4500.00), (1019, 3, 1, 850.00), (1019, 8, 1, 180.00),
    (1020, 4, 1, 1500.00), (1020, 10, 1, 1400.00),
    (1021, 1, 1, 4500.00), (1021, 5, 1, 300.00),
    (1022, 2, 1, 120.00), (1022, 7, 2, 45.00), (1022, 9, 3, 60.00),
    (1023, 3, 1, 850.00), (1023, 5, 1, 300.00), (1023, 2, 1, 120.00),
    (1024, 1, 1, 4500.00), (1024, 6, 1, 1200.00), (1024, 10, 1, 1400.00),
]


def main() -> None:
    if DB_PATH.exists():
        DB_PATH.unlink()

    with sqlite3.connect(DB_PATH) as conn:
        conn.executescript(SCHEMA)
        conn.executemany("INSERT INTO customers VALUES (?, ?, ?, ?, ?)", CUSTOMERS)
        conn.executemany("INSERT INTO products VALUES (?, ?, ?, ?)", PRODUCTS)
        conn.executemany("INSERT INTO orders VALUES (?, ?, ?, ?)", ORDERS)
        conn.executemany("INSERT INTO order_items VALUES (?, ?, ?, ?)", ORDER_ITEMS)

    print(f"Created {DB_PATH}")
    print(f"  customers:   {len(CUSTOMERS)} rows")
    print(f"  products:    {len(PRODUCTS)} rows")
    print(f"  orders:      {len(ORDERS)} rows")
    print(f"  order_items: {len(ORDER_ITEMS)} rows")
    print("\nNext: python sql/shell.py")


if __name__ == "__main__":
    main()
