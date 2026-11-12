# Lesson 04 — Excel for Analysts

**Goal:** build a model a manager can actually use. Gulf banks, government and family businesses still run on Excel.
**Time:** week 5 (or 3 days in the job sprint).

**Rule:** every formula below gets typed, not pasted. Excel rewards muscle memory.

---

## 1. Get the data into Excel

From `learning-playground/data-analyst`:

```powershell
python sql/export_csv.py
```

This creates `exports/`:

| File | Rows | Use |
|---|---|---|
| `customers.csv` | 11 | dimension |
| `products.csv` | 11 | dimension |
| `orders.csv` | 24 | orders |
| `order_items.csv` | 54 | line items |
| `sales.csv` | 54 | flat joined table, best for beginners |

Open `sales.csv` in Excel:

1. `Data` → `From Text/CSV`
2. Delimiter: comma
3. `Load` into a new sheet named `raw`

**Never type data into the sheet you analyse.** Keep `raw` untouched so you can re-import when the data changes.

---

## 2. Clean the data

Real exports are dirty. This one is clean on purpose, so you practise the steps without fighting bad data.

| Check | How | Fix |
|---|---|---|
| Duplicate rows | `Data` → `Remove Duplicates` | delete exact duplicates |
| Leading/trailing spaces | `=TRIM(A2)` | replace the column |
| Text that looks like a date | `Data` → `Text to Columns` | choose Date, `YMD` |
| Numbers stored as text | green triangle | `Convert to Number` |
| Blank cells | `Ctrl+G` → `Special` → `Blanks` | decide: 0 or delete |

Add a helper column for month:

```excel
=TEXT(B2, "yyyy-mm")
```

(Column B is `order_date` in `sales.csv`.)

Add a line total if it is missing:

```excel
=K2*L2
```

(`quantity * unit_price`; check your column letters against the header row.)

---

## 3. The five formulas that get you hired

### SUMIFS: revenue by category

Create a small summary block:

| H | I |
|---|---|
| Electronics | `=SUMIFS(sales!$M:$M, sales!$J:$J, H2)` |
| Furniture | `=SUMIFS(sales!$M:$M, sales!$J:$J, H3)` |
| Kitchen | `=SUMIFS(sales!$M:$M, sales!$J:$J, H4)` |
| Stationery | `=SUMIFS(sales!$M:$M, sales!$J:$J, H5)` |

`$M:$M` is `line_total`, `$J:$J` is `category`. The `$` locks the range so you can drag the formula down.

**Expected (completed orders only):**

| Category | Revenue |
|---|---:|
| Electronics | 57,840.00 |
| Furniture | 9,470.00 |
| Kitchen | 2,700.00 |
| Stationery | 315.00 |
| **Total** | **70,325.00** |

If your total is different, you included cancelled or pending orders. Add a status condition:

```excel
=SUMIFS(sales!$M:$M, sales!$J:$J, H2, sales!$C:$C, "completed")
```

### COUNTIFS: orders per country

```excel
=COUNTIFS(sales!$G:$G, "UAE", sales!$C:$C, "completed")
```

This counts **line items**, not orders. For distinct orders use a pivot table or:

```excel
=SUMPRODUCT((sales!$G$2:$G$55="UAE")*(sales!$C$2:$C$55="completed")/COUNTIFS(sales!$A$2:$A$55, sales!$A$2:$A$55))
```

That formula is advanced. Know it exists; use a pivot table in practice.

### AVERAGEIFS: average order value by country

Average order value is **per order**, not per line. Build a helper sheet first:

1. Copy `order_id` and `line_total`.
2. Pivot: rows = `order_id`, values = `Sum of line_total`.
3. Now average those totals per country.

```excel
=AVERAGEIFS(order_totals!$B:$B, order_totals!$C:$C, "UAE")
```

**Expected overall AOV: 3,516.25.**

### XLOOKUP: attach a customer name to an order

```excel
=XLOOKUP(A2, customers!$A:$A, customers!$B:$B, "not found")
```

Older Excel:

```excel
=INDEX(customers!$B:$B, MATCH(A2, customers!$A:$A, 0))
```

`XLOOKUP` is the modern default. `INDEX/MATCH` still appears in interviews, so know both.

### IF and IFERROR: flag and protect

```excel
=IF(M2>=5000, "High value", "Standard")
=IFERROR(XLOOKUP(A2, customers!$A:$A, customers!$B:$B), "missing customer")
```

`IFERROR` stops one broken lookup from painting `#N/A` across a dashboard.

---

## 4. Pivot tables

Select the `raw` table → `Insert` → `PivotTable` → new sheet.

Build these four:

| # | Rows | Columns | Values | Filter |
|---|---|---|---|---|
| 1 | `category` | — | Sum of `line_total` | `status = completed` |
| 2 | `country` | — | Sum of `line_total` | `status = completed` |
| 3 | `month` | — | Sum of `line_total` | `status = completed` |
| 4 | `product_name` | — | Sum of `line_total` | `status = completed`, top 10 by value |

Then:

- Right-click a value → `Show Values As` → `% of Grand Total`.
- `Insert` → `PivotChart` for each.
- `Analyze` → `Refresh` after any data change.

**Expected monthly trend:**

| Month | Revenue |
|---|---:|
| 2024-08 | 39,445.00 |
| 2024-09 | 30,880.00 |

September is down **8,565.00**, or **-21.71%**. You will explain this in Lesson 07.

---

## 5. The one-page dashboard

Layout, top to bottom:

```
+------------------------------------------------------+
|  SALES DASHBOARD            [Country slicer] [Month]  |
+----------------+----------------+----------------+----+
| Revenue        | Orders         | Customers      | AOV|
| 70,325         | 20             | 10             |3516|
+----------------+----------------+----------------+----+
|  Monthly revenue (line chart)                         |
+---------------------------+---------------------------+
|  Revenue by category      |  Top 5 products           |
|  (bar chart)              |  (table)                  |
+---------------------------+---------------------------+
```

Rules:

1. **Four KPI cards maximum.** More than four and nobody reads them.
2. **One trend chart, one breakdown chart.** Not six.
3. **Every number has a unit and a date range.** `70,325 AED, completed orders, Aug–Sep 2024`.
4. **No gridlines, no 3D charts, no rainbow colours.** One accent colour.
5. **Freeze the header row** and hide unused columns.

KPI formulas:

```excel
Revenue:   =SUMIFS(sales!$M:$M, sales!$C:$C, "completed")
Orders:    =SUMPRODUCT((sales!$C$2:$C$55="completed")/COUNTIFS(sales!$A$2:$A$55, sales!$A$2:$A$55, sales!$C$2:$C$55, sales!$C$2:$C$55))
Customers: =SUMPRODUCT((sales!$C$2:$C$55="completed")/COUNTIFS(sales!$D$2:$D$55, sales!$D$2:$D$55, sales!$C$2:$C$55, sales!$C$2:$C$55))
AOV:       =Revenue / Orders
```

The `SUMPRODUCT/COUNTIFS` pattern counts **distinct** values. It looks ugly and it works. Interviewers recognise it.

---

## 6. Practice (do all six)

1. Revenue by category with `SUMIFS`. Check total = 70,325.
2. Revenue by country with `SUMIFS`. Expected: India 34,225, UAE 18,040, Germany 11,180, UK 5,770, Qatar 1,110.
3. Monthly pivot. Expected: 39,445 then 30,880.
4. Customer lookup by ID with `XLOOKUP`.
5. Flag orders above 5,000 with `IF`.
6. One-page dashboard with four KPIs, one line chart, one bar chart.

**Artifact:** `projects/02_excel_model.xlsx` with three sheets: `raw`, `calc`, `dashboard`.

---

## 7. Common mistakes

| Mistake | Result | Fix |
|---|---|---|
| Analysing a filtered sheet | totals silently exclude rows | use `SUMIFS`, not filtered sums |
| Hard-coding a number in a formula | breaks when data changes | reference the cell |
| `VLOOKUP` with a column inserted | wrong column returned | `XLOOKUP` or `INDEX/MATCH` |
| Mixing line totals and order totals | AOV is 3x too low | aggregate to order level first |
| Charts with no title or units | manager cannot read it | title + unit + date range |
| Sending a 40 MB file | email rejects it | save as `.xlsx`, remove unused sheets |

---

## 8. What "done" looks like

- [ ] `exports/sales.csv` loaded into a `raw` sheet
- [ ] Revenue by category matches 57,840 / 9,470 / 2,700 / 315
- [ ] Revenue by country matches the five numbers above
- [ ] A pivot table with `% of total`
- [ ] A one-page dashboard with four KPIs
- [ ] File opens on another machine without `#REF!`

**Next:** `05_powerbi.md`. Same data, but a dashboard you can publish and refresh.
