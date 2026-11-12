"""Export practice.db tables to CSV for Excel, Power BI and pandas.

Run from learning-playground/data-analyst:

    python sql/export_csv.py

Writes to exports/:
    customers.csv
    products.csv
    orders.csv
    order_items.csv
    sales.csv        <- one flat table, already joined, best for beginners
"""

from __future__ import annotations

import csv
import sqlite3
from pathlib import Path

ROOT = Path(__file__).resolve().parent
DB_PATH = ROOT / "practice.db"
OUT_DIR = ROOT.parent / "exports"

TABLES = {
    "customers": "SELECT * FROM customers ORDER BY customer_id",
    "products": "SELECT * FROM products ORDER BY product_id",
    "orders": "SELECT * FROM orders ORDER BY order_id",
    "order_items": "SELECT * FROM order_items ORDER BY order_id, product_id",
}

SALES_SQL = """
SELECT
    o.order_id,
    o.order_date,
    o.status,
    c.customer_id,
    c.name   AS customer_name,
    c.city,
    c.country,
    p.product_id,
    p.name   AS product_name,
    p.category,
    oi.quantity,
    oi.unit_price,
    ROUND(oi.quantity * oi.unit_price, 2) AS line_total
FROM orders o
JOIN customers c   ON c.customer_id = o.customer_id
JOIN order_items oi ON oi.order_id = o.order_id
JOIN products p    ON p.product_id = oi.product_id
ORDER BY o.order_id, p.product_id
"""


def write_csv(name: str, sql: str, conn: sqlite3.Connection) -> int:
    cur = conn.execute(sql)
    headers = [d[0] for d in cur.description]
    rows = cur.fetchall()
    path = OUT_DIR / f"{name}.csv"
    with path.open("w", newline="", encoding="utf-8") as fh:
        writer = csv.writer(fh)
        writer.writerow(headers)
        writer.writerows(rows)
    print(f"  {path.name:<18} {len(rows):>4} rows, {len(headers)} columns")
    return len(rows)


def main() -> None:
    if not DB_PATH.exists():
        raise SystemExit("practice.db not found. Run: python sql/seed.py")

    OUT_DIR.mkdir(exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    print(f"Exporting {DB_PATH} -> {OUT_DIR}")
    for name, sql in TABLES.items():
        write_csv(name, sql, conn)
    write_csv("sales", SALES_SQL, conn)
    conn.close()
    print("\nOpen exports/ in Excel, Power BI or pandas.")


if __name__ == "__main__":
    main()
