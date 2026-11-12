# Lesson 06 — Python + pandas

**Goal:** do the whole SQL + Excel job in 40 lines of Python, repeatably. This is your bridge from analyst to data engineer and to AI work.
**Time:** week 9 (or 5 days in the job sprint).

**Rule:** a notebook that only works if you run cells in order is not an analysis. The deliverable is a script that runs top to bottom.

---

## 1. Setup

```powershell
cd learning-playground/data-analyst
pip install -r requirements.txt
```

That installs `pandas`, `openpyxl`, `matplotlib`, `jupyterlab`.

Two ways to work:

| Tool | Use it for |
|---|---|
| `python script.py` | the deliverable, and anything you will run again |
| `jupyter lab` | exploring, plotting, trying three approaches quickly |

Learn both. Interviews and jobs use notebooks to explore and scripts to ship. People who only use notebooks ship nothing.

Check the install:

```python
import pandas as pd
print(pd.__version__)
```

Expect `2.x`. If you see `1.x`, upgrade — several APIs below changed.

---

## 2. Load the data

Two sources, same data.

```python
import sqlite3
import pandas as pd
from pathlib import Path

ROOT = Path.cwd()          # run from learning-playground/data-analyst
DB = ROOT / "sql" / "practice.db"

with sqlite3.connect(DB) as conn:
    orders = pd.read_sql_query("SELECT * FROM orders", conn)
    items = pd.read_sql_query("SELECT * FROM order_items", conn)
    products = pd.read_sql_query("SELECT * FROM products", conn)
    customers = pd.read_sql_query("SELECT * FROM customers", conn)
```

`read_sql_query` runs real SQL and returns a DataFrame. You can push the heavy work into SQL and use pandas for the rest. That combination is what most analyst jobs actually look like.

The CSV alternative:

```python
sales_flat = pd.read_csv("exports/sales.csv", parse_dates=["order_date"])
```

`parse_dates` matters. Without it, `order_date` is text, and every date operation silently fails.

**First thing after every load — look at it:**

```python
orders.head()
orders.info()
orders.shape
orders["status"].value_counts()
```

`info()` tells you rows, dtypes, and nulls in one screen. `value_counts()` on a category column catches typos (`Completed` vs `completed`) before they ruin an aggregate.

---

## 3. Select, filter, derive

```python
# column
orders["status"]

# rows by position
orders.iloc[0:5]

# rows by label/condition
orders.loc[orders["status"] == "completed", ["order_id", "order_date"]]

# combine conditions: & is and, | is or. Parentheses are mandatory.
completed_aug = orders[
    (orders["status"] == "completed") & (orders["order_date"] >= "2024-08-15")
]

# set membership
orders[orders["status"].isin(["pending", "cancelled"])]

# new column
items["line_total"] = items["quantity"] * items["unit_price"]
```

`&` and `|` bind tighter than `==` in Python, so `a == 1 & b == 2` is wrong and raises a confusing error. Always parenthesise each condition.

Dates:

```python
orders["order_date"] = pd.to_datetime(orders["order_date"])
orders["month"] = orders["order_date"].dt.to_period("M").astype(str)
```

`to_period("M")` gives `2024-08`. `.dt.month` would give `8`, which sorts and labels badly. Use the period.

---

## 4. Clean like you mean it

```python
df.isna().sum()                       # nulls per column
df.duplicated().sum()                 # exact duplicate rows
df.duplicated(["order_id", "product_id"]).sum()   # duplicate keys
df["status"].str.strip().str.lower()  # whitespace and case
df["unit_price"].astype(float)        # text -> number
df["city"].str.replace("Dubai ", "Dubai", regex=False)
```

Fill or drop, and say why:

```python
df = df.dropna(subset=["customer_id"])      # can't attribute revenue without a customer
df["discount"] = df["discount"].fillna(0)   # missing discount means no discount
```

The rule: **never fill silently.** If you fill a missing price with 0, revenue drops and nobody knows why. Write a comment on every `fillna`.

---

## 5. Join — and the trap that will bite you

The star schema, rebuilt:

```python
line = (
    items
    .merge(orders,    on="order_id",    how="inner", validate="many_to_one")
    .merge(products,  on="product_id",  how="inner", validate="many_to_one")
    .merge(customers, on="customer_id", how="inner", validate="many_to_one")
)
```

Two things here are doing real work:

**`validate="many_to_one"`** raises an error if the right side is not unique. Without it, a duplicated dimension row silently multiplies your revenue. This one argument has saved more analysts than any dashboard.

**The `name` collision.** `products.name` and `customers.name` both exist. Merge both as-is and pandas quietly renames them to `name_x` and `name_y` — no error, no warning, just wrong column names downstream.

Fix it by renaming before the merge:

```python
products  = products.rename(columns={"name": "product_name"})
customers = customers.rename(columns={"name": "customer_name"})
```

Then check the result:

```python
line.shape          # (54, 14) — 54 line items, no row multiplication
line.isna().sum()   # all zeros
```

If `shape[0]` is bigger than 54, a join fanned out. Stop and fix before computing anything.

Left joins keep unmatched rows — that is how you find gaps:

```python
no_orders = customers.merge(orders, on="customer_id", how="left", indicator=True)
no_orders = no_orders[no_orders["_merge"] == "left_only"]
```

Result: `Meera Iyer`. The same pattern on products returns `Unused Gadget`.

---

## 6. Aggregate

```python
done = line[line["status"] == "completed"]

revenue = done["line_total"].sum()          # 70325.00
orders_count = done["order_id"].nunique()   # 20
aov = revenue / orders_count                # 3516.25
```

`nunique()` is the pandas `DISTINCTCOUNT`. `count()` would return line items and give you 54.

Group and aggregate:

```python
by_category = (
    done.groupby("category")["line_total"]
    .sum()
    .sort_values(ascending=False)
    .reset_index()
)
```

| category | line_total |
|---|---:|
| Electronics | 57,840.00 |
| Furniture | 9,470.00 |
| Kitchen | 2,700.00 |
| Stationery | 315.00 |

Several metrics at once, with named output columns:

```python
by_country = (
    done.groupby("country")
    .agg(revenue=("line_total", "sum"), orders=("order_id", "nunique"))
    .sort_values("revenue", ascending=False)
    .reset_index()
)
by_country["aov"] = by_country["revenue"] / by_country["orders"]
```

| country | revenue | orders | aov |
|---|---:|---:|---:|
| India | 34,225.00 | 10 | 3,422.50 |
| UAE | 18,040.00 | 4 | 4,510.00 |
| Germany | 11,180.00 | 2 | 5,590.00 |
| UK | 5,770.00 | 2 | 2,885.00 |
| Qatar | 1,110.00 | 2 | 555.00 |

Note Qatar's AOV of 555. It is technically correct and practically meaningless — two orders. Small groups produce volatile averages. Say so before someone makes a decision on it.

Monthly trend with change:

```python
monthly = done.groupby("month", as_index=False)["line_total"].sum()
monthly["change"] = monthly["line_total"].diff()
monthly["pct_change"] = monthly["line_total"].pct_change() * 100
```

| month | line_total | change | pct_change |
|---|---:|---:|---:|
| 2024-08 | 39,445.00 | NaN | NaN |
| 2024-09 | 30,880.00 | -8,565.00 | -21.71 |

The `NaN` in the first row is correct. Any other value means you filled it and invented a comparison.

---

## 7. `pivot_table` — the Excel pivot, in code

```python
pivot = pd.pivot_table(
    done,
    index="category",
    columns="month",
    values="line_total",
    aggfunc="sum",
    fill_value=0,
    margins=True,
    margins_name="Total",
)
```

This is the same object you built in Lesson 04, except it is reproducible, versionable, and runs in a second on a million rows.

Use `pivot_table` when you need a cross-tab for a report. Use `groupby` when you need data to feed a chart or another step. `groupby` is the default; `pivot_table` is for the final display.

---

## 8. Save the result

```python
line.to_csv("projects/sales_clean.csv", index=False)
by_category.to_excel("projects/category_revenue.xlsx", index=False)
```

`index=False` unless you want the row numbers. Nine times out of ten you do not.

To write back to SQLite:

```python
with sqlite3.connect(DB) as conn:
    by_category.to_sql("category_summary", conn, if_exists="replace", index=False)
```

That write-back is the pattern behind every scheduled report. Raw tables in, cleaned table out, dashboard reads the clean table.

---

## 9. The project

`projects/04_pandas_analysis.py` is the worked version. Read it, then rebuild it yourself in a blank file without looking. That is the exercise.

Run it:

```powershell
python projects/04_pandas_analysis.py
```

Expected output, line by line:

```
=== Data quality ===
rows               : 54
nulls per column   : 0 total
duplicate order+item: 0
negative quantities: 0
date range         : 2024-08-01 -> 2024-09-28

=== Overall (completed orders only) ===
revenue   : 70,325.00
orders    : 20
customers : 10
AOV       : 3,516.25

=== Revenue by month ===
2024-08   39,445.00
2024-09   30,880.00   change -8,565.00   -21.71%

=== Concentration ===
top customer share : 16.35%
top 3 share        : 47.18%
top 5 share        : 70.68%
customers to reach 80%: 7 of 10
```

If your `revenue` is **75,215.00**, you did not filter `status == "completed"`. If `orders` is 54, you counted rows instead of distinct orders.

The script also reports the two anti-join gaps and the value sitting in each status bucket:

| status | value |
|---|---:|
| completed | 70,325.00 |
| pending | 2,640.00 |
| cancelled | 2,250.00 |

Those last two are the difference between "we made 70k" and "we booked 75k and lost 2.6k to cancellations and 2.4k still open." A manager needs both.

---

## 10. Notebook version (optional, 20 minutes)

If you prefer `jupyter lab`, the notebook is the same code with cells. Three rules:

1. **Restart kernel and run all** before you present it. A notebook that only works in your click order is a broken notebook.
2. **No cell longer than one screen.** Long cells hide errors.
3. **Markdown cell above every number** saying what it answers.

Save as `projects/04_pandas_analysis.ipynb` and commit both files. The script proves you can ship. The notebook proves you can communicate.

---

## 11. Common mistakes

| Mistake | Result | Fix |
|---|---|---|
| Computing revenue on `order_items` with no status filter | 75,215 instead of 70,325 | filter `orders` to `completed` first |
| `count()` instead of `nunique()` for orders | 54 orders | `nunique()` on `order_id` |
| Merging without `validate=` | duplicated dimension row multiplies revenue | `validate="many_to_one"` |
| Both dimensions have `name` | `name_x`, `name_y` and broken code | rename before merge |
| `order_date` left as text | `dt` accessor fails, sorting is alphabetical | `pd.to_datetime` |
| `fillna(0)` on price or quantity | revenue quietly wrong | fix or drop the rows, comment why |
| `inplace=True` chained on a slice | `SettingWithCopyWarning`, no effect | assign: `df = df.dropna(...)` |
| `.iterrows()` to compute a column | 1000x slower, unreadable | vectorise: `df["a"] * df["b"]` |
| Notebook run out of order | numbers that cannot be reproduced | restart and run all |
| `to_csv` without `index=False` | stray unnamed column on re-import | `index=False` |

---

## 12. What "done" looks like

- [ ] `python projects/04_pandas_analysis.py` runs top to bottom with no errors
- [ ] Revenue 70,325.00, orders 20, customers 10, AOV 3,516.25
- [ ] Category and country tables match the numbers above
- [ ] Monthly change is -8,565.00 / -21.71%
- [ ] You can explain `validate="many_to_one"` in one sentence
- [ ] `projects/sales_clean.csv` written with 54 rows
- [ ] You rewrote the script once without looking

**Next:** `07_statistics.md` — the numbers are correct; now make them mean something.
