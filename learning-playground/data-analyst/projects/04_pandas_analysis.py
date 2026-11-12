"""End-to-end pandas analysis of practice.db.

Run from the data-analyst folder:
    python projects/04_pandas_analysis.py

Pipeline: load -> join -> clean -> aggregate -> save.
Every printed number is checked against the SQL/Excel/Power BI results.
"""

from __future__ import annotations

import sqlite3
from pathlib import Path

import pandas as pd

ROOT = Path(__file__).resolve().parent.parent
DB = ROOT / "sql" / "practice.db"
OUT = ROOT / "projects" / "sales_clean.csv"

pd.set_option("display.width", 100)
pd.set_option("display.float_format", lambda v: f"{v:,.2f}")


def load() -> dict[str, pd.DataFrame]:
    """Read the four tables out of SQLite."""
    with sqlite3.connect(DB) as conn:
        tables = {
            name: pd.read_sql_query(f"SELECT * FROM {name}", conn)
            for name in ("customers", "products", "orders", "order_items")
        }
    return tables


def build_sales(tables: dict[str, pd.DataFrame]) -> pd.DataFrame:
    """Join the star schema into one flat, typed dataframe."""
    # Both dimension tables have a `name` column. Rename before joining,
    # otherwise pandas silently produces name_x / name_y.
    products = tables["products"].rename(columns={"name": "product_name"})
    customers = tables["customers"].rename(columns={"name": "customer_name"})

    line = tables["order_items"].merge(
        tables["orders"], on="order_id", how="inner", validate="many_to_one"
    )
    line = line.merge(products, on="product_id", how="inner", validate="many_to_one")
    line = line.merge(customers, on="customer_id", how="inner", validate="many_to_one")

    line["order_date"] = pd.to_datetime(line["order_date"])
    line["month"] = line["order_date"].dt.to_period("M").astype(str)
    line["line_total"] = line["quantity"] * line["unit_price"]

    order = [
        "order_id",
        "order_date",
        "month",
        "status",
        "customer_id",
        "customer_name",
        "city",
        "country",
        "product_id",
        "product_name",
        "category",
        "quantity",
        "unit_price",
        "line_total",
    ]
    return line[order].sort_values(["order_date", "order_id"]).reset_index(drop=True)


def check_quality(sales: pd.DataFrame) -> None:
    """The checks you should run before trusting any number."""
    print("\n=== Data quality ===")
    print(f"rows               : {len(sales)}")
    print(f"nulls per column   : {int(sales.isna().sum().sum())} total")
    print(f"duplicate order+item: {int(sales.duplicated(['order_id', 'product_id']).sum())}")
    print(f"negative quantities: {int((sales['quantity'] <= 0).sum())}")
    print(f"date range         : {sales['order_date'].min():%Y-%m-%d} -> {sales['order_date'].max():%Y-%m-%d}")


def analyse(sales: pd.DataFrame) -> None:
    done = sales[sales["status"] == "completed"].copy()

    print("\n=== Overall (completed orders only) ===")
    revenue = done["line_total"].sum()
    orders = done["order_id"].nunique()
    customers = done["customer_id"].nunique()
    print(f"revenue   : {revenue:,.2f}")
    print(f"orders    : {orders}")
    print(f"customers : {customers}")
    print(f"AOV       : {revenue / orders:,.2f}")

    print("\n=== Revenue by month ===")
    monthly = done.groupby("month", as_index=False)["line_total"].sum()
    monthly["change"] = monthly["line_total"].diff()
    monthly["pct_change"] = monthly["line_total"].pct_change() * 100
    print(monthly.to_string(index=False))

    print("\n=== Revenue by category ===")
    by_cat = (
        done.groupby("category")["line_total"]
        .sum()
        .sort_values(ascending=False)
        .reset_index()
    )
    by_cat["share_%"] = by_cat["line_total"] / by_cat["line_total"].sum() * 100
    print(by_cat.to_string(index=False))

    print("\n=== Revenue by country ===")
    by_country = (
        done.groupby("country")
        .agg(revenue=("line_total", "sum"), orders=("order_id", "nunique"))
        .sort_values("revenue", ascending=False)
        .reset_index()
    )
    by_country["aov"] = by_country["revenue"] / by_country["orders"]
    print(by_country.to_string(index=False))

    print("\n=== Top 5 customers ===")
    by_customer = (
        done.groupby(["customer_id", "customer_name"])
        .agg(revenue=("line_total", "sum"), orders=("order_id", "nunique"))
        .sort_values("revenue", ascending=False)
        .head(5)
        .reset_index()
    )
    print(by_customer.to_string(index=False))

    print("\n=== Top 5 products ===")
    by_product = (
        done.groupby("product_name")
        .agg(revenue=("line_total", "sum"), units=("quantity", "sum"))
        .sort_values("revenue", ascending=False)
        .head(5)
        .reset_index()
    )
    print(by_product.to_string(index=False))

    print("\n=== Concentration ===")
    ranked = by_customer_revenue(done).reset_index(name="revenue")
    total = ranked["revenue"].sum()
    print(f"top customer share : {ranked.iloc[0]['revenue'] / total * 100:.2f}%")
    for n in (3, 5):
        share = ranked.head(n)["revenue"].sum() / total * 100
        print(f"top {n} share       : {share:.2f}%")
    cum = ranked["revenue"].cumsum() / total * 100
    reach80 = int((cum < 80).sum()) + 1
    print(f"customers to reach 80%: {reach80} of {len(ranked)}")


def by_customer_revenue(done: pd.DataFrame) -> pd.Series:
    return (
        done.groupby("customer_name")["line_total"]
        .sum()
        .sort_values(ascending=False)
    )


def anti_joins(tables: dict[str, pd.DataFrame]) -> None:
    """Who never bought, and what never sold. Textbook LEFT JOIN + IS NULL."""
    print("\n=== Gaps (anti-joins) ===")

    customers = tables["customers"]
    orders = tables["orders"]
    bought = orders["customer_id"].unique()
    silent = customers[~customers["customer_id"].isin(bought)]["name"].tolist()

    products = tables["products"]
    items = tables["order_items"]
    sold = items["product_id"].unique()
    dead = products[~products["product_id"].isin(sold)]["name"].tolist()

    print(f"customers with no orders : {', '.join(silent) or 'none'}")
    print(f"products never sold      : {', '.join(dead) or 'none'}")


def lost_revenue(sales: pd.DataFrame) -> None:
    print("\n=== Not yet revenue ===")
    status = sales.groupby("status")["line_total"].sum().sort_values(ascending=False)
    for name, value in status.items():
        print(f"{name:<10}: {value:,.2f}")


def save(sales: pd.DataFrame) -> None:
    OUT.parent.mkdir(parents=True, exist_ok=True)
    sales.to_csv(OUT, index=False)
    print(f"\nSaved {len(sales)} rows -> {OUT.relative_to(ROOT)}")


def main() -> None:
    tables = load()
    sales = build_sales(tables)
    check_quality(sales)
    analyse(sales)
    anti_joins(tables)
    lost_revenue(sales)
    save(sales)


if __name__ == "__main__":
    main()
