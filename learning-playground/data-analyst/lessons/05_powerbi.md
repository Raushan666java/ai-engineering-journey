# Lesson 05 — Power BI

**Goal:** build one dashboard you can show in an interview. Power BI is the most-requested dashboard tool in UAE job ads.
**Time:** week 6 (or 4 days in the job sprint).

**Rule:** the dashboard answers a question. It is not a pile of charts.

---

## 1. Install and open

1. Download **Power BI Desktop** from Microsoft (free, Windows only — you are on Windows, so fine).
2. Install with default options.
3. Open it. You get a blank report with three panes: **Visualizations**, **Data**, **Fields**.

If your machine is locked down (some office laptops), say so in an interview and show a Power BI file you built at home. Nobody expects you to install software on their laptop during an interview.

---

## 2. Connect the data

You need the CSVs from Lesson 04:

```powershell
python sql/export_csv.py
```

In Power BI Desktop:

1. `Home` → `Get Data` → `Text/CSV`
2. Load **four files**, one at a time:
   - `exports/orders.csv`
   - `exports/order_items.csv`
   - `exports/customers.csv`
   - `exports/products.csv`
3. Click `Transform Data` (not `Load`) on the last one, check the types, then `Close & Apply`.

**Import the four table files, not `sales.csv`.** `sales.csv` is already joined and flattened. It is fine for Excel. In Power BI it hides the model, and the model is what interviewers ask about.

Set these data types in `Power Query`:

| Table | Column | Type |
|---|---|---|
| orders | `order_date` | Date |
| orders | `status` | Text |
| order_items | `quantity` | Whole Number |
| order_items | `unit_price` | Decimal Number |
| products | `price` | Decimal Number |

Wrong types are the #1 cause of broken visuals. Date stored as text breaks every time axis.

---

## 3. Build the star schema

Model view (the left-side icon that looks like connected tables):

```
                 customers
                     │ 1
                     │
                     │ *
                  orders
                     │ 1
                     │
                     │ *
products 1 ─────── * order_items
```

Drag to create these three relationships:

| From | To | Cardinality | Direction |
|---|---|---|---|
| `order_items[order_id]` | `orders[order_id]` | many-to-one | single |
| `order_items[product_id]` | `products[product_id]` | many-to-one | single |
| `orders[customer_id]` | `customers[customer_id]` | many-to-one | single |

Then hide the join keys from the report view (`right-click column` → `Hide in report view`) so users cannot slice by raw IDs by accident.

**Why this matters:** `order_items` is the **fact** table (one row per line sold). `orders`, `customers`, `products` are **dimensions** (one row per entity). This shape is called a star schema. Interviewers ask "what is a star schema" in almost every Power BI screen.

Why not one big flat table? Because one order with three products would repeat the customer's name three times, and any average you compute over customer attributes becomes wrong. The star schema keeps facts and descriptions separate.

---

## 4. Two calculated columns

Calculated columns live in the table and are computed once at refresh.

**In `orders`:**

```dax
Month =
FORMAT ( orders[order_date], "yyyy-mm" )
```

**In `order_items`:**

```dax
Line Total =
order_items[quantity] * order_items[unit_price]
```

Now create a dedicated date table only if you need time intelligence (`TOTALYTD`, `SAMEPERIODLASTYEAR`). With two months of data it adds nothing. Skip it in v1, and say that in an interview — "I skipped a date table because the dataset covers two months; with 12+ months I would add one." That answer is stronger than a fake date table.

---

## 5. Measures — the part that gets you hired

A **measure** is calculated at query time and respects every filter on the page. A **calculated column** is fixed at refresh. Revenue must be a measure.

Create these in a new table: `Modeling` → `New Measure`.

```dax
Revenue =
SUMX ( order_items, order_items[quantity] * order_items[unit_price] )
```

`SUMX` iterates row by row. `SUM ( order_items[line_total] )` gives the same answer and is fine — know both, and know why `SUMX` exists (it can compute on the fly without a helper column).

```dax
Revenue Completed =
CALCULATE ( [Revenue], orders[status] = "completed" )
```

`CALCULATE` changes the filter context. It is the single most important function in DAX. If you learn one thing from this lesson, learn this line.

```dax
Orders Completed =
CALCULATE ( DISTINCTCOUNT ( orders[order_id] ), orders[status] = "completed" )

Customers =
CALCULATE ( DISTINCTCOUNT ( orders[customer_id] ), orders[status] = "completed" )

AOV =
DIVIDE ( [Revenue Completed], [Orders Completed] )
```

`DIVIDE` returns blank instead of `#DIV/0!`. Always use `DIVIDE`, never `/`.

```dax
Revenue Previous Month =
CALCULATE ( [Revenue Completed], DATEADD ( orders[order_date], -1, MONTH ) )

MoM % =
DIVIDE ( [Revenue Completed] - [Revenue Previous Month], [Revenue Previous Month] )
```

`DATEADD` needs a proper date column with contiguous dates. It works here, but with only two months the previous-month value is blank for August. That is correct behavior, not a bug.

**Verify before you build any visual.** Drop four Card visuals on the canvas with `Revenue Completed`, `Orders Completed`, `Customers`, `AOV`. They must read:

| Measure | Expected |
|---|---:|
| Revenue Completed | 70,325.00 |
| Orders Completed | 20 |
| Customers | 10 |
| AOV | 3,516.25 |

If `Revenue` (without the completed filter) reads **75,215.00**, you are including cancelled and pending orders. Cancelled value is 2,250 and pending is 2,640 — the difference is exactly 4,890.

If `Orders Completed` reads 54, you counted line items instead of orders. Use `DISTINCTCOUNT`, and count on the `orders` table, not `order_items`.

---

## 6. The visuals

Build exactly five. More than that and the page becomes noise.

### 1. Revenue by month (line chart)

- Axis: `orders[Month]`
- Values: `[Revenue Completed]`
- Turn on data labels, turn off the legend.

Expected: **39,445** in `2024-08`, **30,880** in `2024-09`.

### 2. Revenue by category (bar chart, horizontal)

- Axis: `products[category]`
- Values: `[Revenue Completed]`
- Sort descending.

Expected: Electronics **57,840**, Furniture **9,470**, Kitchen **2,700**, Stationery **315**.

Horizontal bars beat vertical columns when labels are words. Use them.

### 3. Top 5 customers (table)

- Columns: `customers[name]`, `[Revenue Completed]`, `[Orders Completed]`
- Visual level filter: `Top N` = 5, by `[Revenue Completed]`

Expected top 5:

| Customer | Revenue |
|---|---:|
| Vikram Singh | 11,500.00 |
| Lena Fischer | 11,180.00 |
| Fatima Al Mansoori | 10,500.00 |
| Rohan Mehta | 9,515.00 |
| Aarav Sharma | 7,010.00 |

### 4. Country slicer

- Field: `customers[country]`
- Style: dropdown (`Format` → `Slicer settings` → `Style` → `Dropdown`)

A dropdown saves space. Tiles look nice in a demo and waste half the page.

### 5. Month-over-month card

- Card: `[MoM %]`
- Format as percentage, one decimal.
- Add a subtitle text box: `September vs August, completed orders`.

Expected: **-21.7%**.

---

## 7. Layout rules

```
+-----------------------------------------------------------+
|  SALES PERFORMANCE  ·  Aug–Sep 2024  ·  completed orders   |
+----------------+----------------+----------------+----------+
| Revenue        | Orders         | Customers      | MoM %    |
| 70,325         | 20             | 10             | -21.7%   |
+----------------+----------------+----------------+----------+
|  Monthly revenue (line)                    [Country ▾]    |
+--------------------------------+--------------------------+
|  Revenue by category (bar)     |  Top 5 customers (table) |
+--------------------------------+--------------------------+
```

Non-negotiables:

1. **Title states the period and the filter.** `Aug–Sep 2024, completed orders`. A number without a date range is a rumour.
2. **Four KPI cards maximum.**
3. **One accent colour.** Grey bars, one highlighted series. Rainbow charts signal an amateur.
4. **No 3D, no shadows, no gradient fills.**
5. **Every visual has a title.** `Sum of line_total by category` is what Power BI gives you by default. Rename it to `Revenue by category (AED)`.
6. **Empty space is fine.** Cramming eight visuals into one page makes all eight unreadable.

Align visuals with `Format` → `Align` → `Align top`, and distribute evenly. Misaligned edges are the first thing a design-aware interviewer notices.

---

## 8. Save and prove it works

Save as `projects/03_powerbi_sales.pbix`.

Test it like a reviewer would:

- [ ] Clear all filters → revenue returns to 70,325
- [ ] Select `UAE` in the country slicer → revenue becomes 18,040, orders 4
- [ ] Select `Germany` → revenue 11,180, orders 2
- [ ] Deselect → back to 70,325
- [ ] `Home` → `Refresh` → numbers stay identical
- [ ] Reopen the file → no broken visuals, no `#REF!`

Country check values: India 34,225 (10 orders), UAE 18,040 (4), Germany 11,180 (2), UK 5,770 (2), Qatar 1,110 (2). Total 20 orders.

Then export screenshots (`File` → `Export` → `Export to PDF`, or `Win+Shift+S`). Screenshots go in your portfolio and your CV. The `.pbix` is the proof you built it.

**Publishing warning:** `Publish` to the Power BI Service needs a **work or school** Microsoft account. A personal `@gmail.com` or `@outlook.com` account will be rejected. Do not promise a live link in an interview. Promise screenshots and a file you can open on their machine. If an interviewer insists on a live link, that is a company-tenant question, not a skills question.

---

## 9. Practice (do all six)

1. Build the four KPI cards and make them match the table in section 5.
2. Build the monthly line chart and confirm 39,445 / 30,880.
3. Build the category bar chart, sorted descending.
4. Build the Top 5 customers table with a Top N filter.
5. Add the country slicer and verify all five countries.
6. Write `projects/03_findings.md` with 5 insights and the numbers behind each.

**Deliberate extension — do this once:** duplicate the report page, import the flat `sales.csv` instead, and build the same revenue card from it. Compare file size and refresh time. Then write one sentence in your notes explaining why you chose the star schema. That sentence is an interview answer.

---

## 10. Common mistakes

| Mistake | Result | Fix |
|---|---|---|
| Forgot the `status` filter | revenue 75,215 instead of 70,325 | `CALCULATE` with `status = "completed"` |
| `COUNT` instead of `DISTINCTCOUNT` | 54 orders instead of 20 | count distinct `order_id` on `orders` |
| `order_date` imported as text | line chart shows one bar per day alphabetically | set type to Date in Power Query |
| Using `/` for division | `#DIV/0!` when a filter returns nothing | `DIVIDE ( a, b )` |
| Filter direction set to both | double counting, slow model | single direction, dimensions → fact |
| Bi-directional on every relationship | wrong totals, no error message | only where a specific need exists |
| 12 visuals on one page | nobody reads it | 4 cards + 2 charts + 1 table |
| Sum on `order_items[quantity]` for "orders" | units sold, not orders | `DISTINCTCOUNT ( orders[order_id] )` |

---

## 11. What "done" looks like

- [ ] Four CSV tables imported with correct data types
- [ ] Star schema with three single-direction relationships
- [ ] `Revenue Completed` = 70,325.00
- [ ] `AOV` = 3,516.25
- [ ] Country slicer changes all visuals correctly
- [ ] Five visuals, one accent colour, every title renamed
- [ ] `projects/03_findings.md` with 5 numbered insights
- [ ] PDF export saved for the portfolio

**Next:** `06_pandas.md` — the same analysis in Python, so you can automate it.
