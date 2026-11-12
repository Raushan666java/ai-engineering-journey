# Data Analyst Track — SQL · Excel · Power BI · Python · Storytelling

A run-it-don't-read-it course for getting a **Data Analyst job in Dubai/UAE**.

**Rule of this folder:** if you didn't run the query, you didn't learn it.

---

## 1. The target

| Item | Target |
|---|---|
| Role | Data Analyst / Reporting Analyst / BI Analyst |
| Market | Dubai, UAE (backup: Abu Dhabi, Riyadh, Doha) |
| Realistic first offer | AED 8,000–12,000/month |
| After 2–3 years | AED 14,000–20,000/month |
| Portfolio | 3 pieces: SQL analysis, Excel model, Power BI dashboard |
| Backup role | Application Support Engineer (same SQL + Excel base, plus ticketing and Linux) |

The AED 10,000–14,000 band in job ads is real, but it targets 2+ years of experience. An honest ladder:

| Your position | What you can ask for |
|---|---|
| No experience, strong portfolio | AED 7,000–9,000 |
| 1 year, or 4+ serious projects | AED 9,000–12,000 |
| 2–3 years, Power BI + SQL + Python | AED 12,000–16,000 |

Do not price yourself at zero. Do not claim 3 years you do not have — UAE employers verify, and a rescinded offer costs more than a lower start.

---

## 2. The six skills (in order)

| # | Skill | Why it matters | Time |
|---|---|---|---|
| 1 | **SQL** | The #1 interview filter. Everything else is secondary. | 4 weeks |
| 2 | **Excel** | Still the default in Gulf banks and government. | 1 week |
| 3 | **Power BI** | Most-requested dashboard tool in UAE job ads. | 3 weeks |
| 4 | **Python + pandas** | Cleaning, automation, and your bridge to AI. | 2 weeks |
| 5 | **Statistics + storytelling** | Turns numbers into decisions — what separates analysts from query writers. | 2 weeks |
| 6 | **AI-assisted analysis** | Speed with verified numbers — the 2026 baseline expectation. | 1 week, then daily |

**Do not skip SQL.** 80% of the interview is SQL plus "explain this dashboard."

---

## 3. The 4-week job sprint

This is the plan if you need income soon. Six to eight hours a day. The 12-week version is section 4.

### Week 1 — SQL, until it is boring

| Day | Work | Artifact |
|---|---|---|
| 1 | `01_sql_basics.md` + all exercises | `exercises/01_sql_basics.sql` |
| 2 | `02_sql_joins.md` + all exercises | `exercises/02_sql_joins.sql` |
| 3 | `03_sql_advanced.md` (CTEs, windows) | `exercises/03_sql_advanced.sql` |
| 4 | Rebuild all three from memory | blank file, no reference |
| 5 | `projects/01_sales_analysis.sql` — 10 business questions | query file + `01_findings.md` |
| 6 | `08_ai_for_analysts.md`, then 20 LeetCode-SQL easy/medium | notes |
| 7 | Mock interview: explain every query out loud | recording or notes |

Exit test: write a 3-table JOIN with GROUP BY and HAVING from memory, in under 5 minutes.

### Week 2 — Excel + Power BI

| Day | Work | Artifact |
|---|---|---|
| 8 | `04_excel.md` sections 1–4 | `projects/02_excel_model.xlsx` |
| 9 | Dashboard + pivot tables | same file, `dashboard` sheet |
| 10 | `05_powerbi.md` sections 1–5 (model + DAX) | `.pbix` with 4 correct KPI cards |
| 11 | Visuals, slicer, layout | dashboard v2 + PDF export |
| 12 | `03_findings.md` — 5 insights with numbers | findings page |
| 13 | Redo the dashboard from a blank file | second `.pbix` |
| 14 | Screenshots, cleanup, portfolio page | `portfolio/` images |

Exit test: your four KPI cards read 70,325 / 20 / 10 / 3,516.25 without you touching a filter.

### Week 3 — Python + statistics

| Day | Work | Artifact |
|---|---|---|
| 15 | `06_pandas.md` sections 1–5 | notebook scratch |
| 16 | `06_pandas.md` sections 6–8 | `projects/04_pandas_analysis.py` runs clean |
| 17 | Rebuild the script without looking | second script |
| 18 | `07_statistics.md` sections 1–4 | stats notes |
| 19 | Sections 5–9, A/B test and CI practice | notes |
| 20 | `projects/06_exec_summary.md` | one-pager |
| 21 | Mock: "walk me through this analysis" | 3-minute pitch |

Exit test: you can explain median vs mean, and why the Qatar AOV is untrustworthy, without notes.

### Week 4 — Applications

| Day | Work | Output |
|---|---|---|
| 22 | CV, one page, projects with numbers | `cv/` PDF |
| 23 | LinkedIn: headline, about, 3 project posts | profile live |
| 24 | GitHub: README at repo root, clean folder, screenshots | public link |
| 25 | Apply to 15 roles | tracker sheet |
| 26 | Apply to 15 more + 5 recruiters on LinkedIn | 30 total |
| 27 | Follow-ups, interview prep (10 likely questions) | answers written |
| 28 | Apply to 10 more, review what got replies | 40 total |

**40 applications minimum.** The response rate for a candidate with no UAE experience is roughly 1 in 15 to 1 in 30. Forty is not a lot; it is the minimum sample.

---

## 4. The 12-week plan (if you have more time)

| Week | Focus | Artifact |
|---|---|---|
| 1 | SQL basics: SELECT, WHERE, ORDER BY, LIMIT | `exercises/01_sql_basics.sql` |
| 2 | SQL aggregation: GROUP BY, HAVING, JOINs | `exercises/02_sql_joins.sql` |
| 3 | SQL advanced: CTEs, subqueries, window functions | `exercises/03_sql_advanced.sql` |
| 4 | SQL project: answer 10 business questions | `projects/01_sales_analysis.sql` |
| 5 | Excel: formulas, pivots, lookups, cleaning | `projects/02_excel_model.xlsx` |
| 6 | Power BI: data model, DAX basics | `projects/03_powerbi_sales.pbix` (v1) |
| 7 | Power BI: charts, slicers, layout | dashboard v2 |
| 8 | Power BI: story + 5 insights | `projects/03_findings.md` |
| 9 | Python: pandas cleaning + analysis | `projects/04_pandas_analysis.py` |
| 10 | Statistics: distributions, A/B tests, correlation | `projects/05_stats_notes.md` |
| 11 | Storytelling: one-page executive summary | `projects/06_exec_summary.md` |
| 12 | Portfolio + CV + applications | CV, LinkedIn, 40 applications |

**AI layer:** run `lessons/08_ai_for_analysts.md` in week 2, then use the verification protocol on every query after that. It is not an optional extra — it is how the work is done now.

---

## 5. Setup

Everything here uses **Python's built-in SQLite** — no server, no install.

```powershell
cd learning-playground/data-analyst
python sql/seed.py          # creates sql/practice.db
pip install -r requirements.txt
```

Open a query shell:

```powershell
python sql/shell.py
```

Then run:

```sql
SELECT * FROM customers LIMIT 5;
```

Or open `sql/practice.db` in **DB Browser for SQLite** (free) if you prefer a GUI.

Export the CSVs for Excel and Power BI:

```powershell
python sql/export_csv.py
```

That writes five files into `exports/` (git-ignored, regenerate any time):

| File | Rows | Use |
|---|---|---|
| `customers.csv` | 11 | dimension |
| `products.csv` | 11 | dimension |
| `orders.csv` | 24 | orders |
| `order_items.csv` | 54 | line items |
| `sales.csv` | 54 | flattened join, for Excel |

Run the pandas analysis:

```powershell
python projects/04_pandas_analysis.py
```

For Power BI: install **Power BI Desktop** (free, Windows only).

Python packages: `pandas`, `openpyxl`, `matplotlib`, `jupyterlab` — all in `requirements.txt`.

---

## 6. Folder map

```
data-analyst/
├── README.md               ← you are here
├── requirements.txt        ← pandas, openpyxl, matplotlib, jupyterlab
├── sql/
│   ├── seed.py             ← builds practice.db (11 customers, 11 products, 24 orders)
│   ├── shell.py            ← tiny interactive SQL shell
│   ├── export_csv.py       ← writes exports/*.csv for Excel and Power BI
│   ├── practice.db         ← generated, git-ignored
│   └── schema.md           ← table definitions
├── lessons/
│   ├── 01_sql_basics.md
│   ├── 02_sql_joins.md
│   ├── 03_sql_advanced.md
│   ├── 04_excel.md
│   ├── 05_powerbi.md
│   ├── 06_pandas.md
│   ├── 07_statistics.md
│   └── 08_ai_for_analysts.md
├── ai/
│   └── prompts.md          ← reusable prompt templates
├── exercises/              ← your answers (solutions/ has the answer keys)
├── projects/               ← portfolio pieces (these get you hired)
├── exports/                ← generated CSVs, git-ignored
└── notes/                  ← one file per week
```

---

## 7. The verified dataset

Every lesson uses the same numbers, so you can check yourself. Completed orders only:

| Metric | Value |
|---|---:|
| Revenue | 70,325.00 |
| Completed orders | 20 |
| Customers who bought | 10 |
| Average order value | 3,516.25 |
| August revenue | 39,445.00 |
| September revenue | 30,880.00 (-8,565.00, -21.71%) |
| Cancelled value | 2,250.00 |
| Pending value | 2,640.00 |

Top markets: India 34,225 · UAE 18,040 · Germany 11,180 · UK 5,770 · Qatar 1,110.

Top categories: Electronics 57,840 · Furniture 9,470 · Kitchen 2,700 · Stationery 315.

Two deliberate gaps to practise anti-joins: `Meera Iyer` has no orders, `Unused Gadget` has never sold.

If a lesson number disagrees with this table, the lesson is wrong. Say so.

---

## 8. Getting hired in Dubai

### Where the jobs are

| Channel | Notes |
|---|---|
| LinkedIn | The main channel. Filter "UAE", "Data Analyst", last 7 days. Apply within 48 hours of posting. |
| Bayt.com | Largest Gulf-specific board. Many agencies post here. |
| Naukrigulf / GulfTalent | Strong for India-to-Gulf moves. |
| Indeed UAE | Volume, more junior roles. |
| Company career pages | Banks and retail groups often skip boards. |

### Who hires analysts

Banks (Emirates NBD, FAB, Mashreq), telecom (e&, du), retail (Majid Al Futtaim, Landmark, Noon), logistics (Aramex, DP World), airlines (Emirates Group), consulting (Deloitte, EY, PwC, KPMG), fintech (Tabby, Careem, Network International).

### Three UAE-specific facts

1. **Visa sponsorship is normal.** For roles above roughly AED 8,000 the employer sponsors you. Some ads say "own visa" or "visit visa" — those are usually lowball offers. You can apply anyway; just know what you are walking into.
2. **A recruiter screen is a phone call about your CV, not your skills.** They will ask current location, notice period, salary expectation. Have one sentence ready: *"I'm in India, available immediately, targeting AED 9,000–11,000."*
3. **"Do you have UAE experience?"** is the standard filter. The honest answer: *"No, but here is a dashboard built on Gulf retail data, and here is my SQL work."* Then send the link. The portfolio is what makes the answer survivable.

### CV rules

- **One page.** Two pages for under 5 years of experience gets skimmed.
- **Projects above education.** With no work history, the portfolio section is your experience.
- **Numbers in every bullet.** "Built a Power BI dashboard" is nothing. "Built a 4-KPI sales dashboard on 54 line items; reduced monthly reporting to one refresh" is something.
- **Tools named exactly as the ad names them.** If the ad says "Power BI, SQL, Advanced Excel," use those words.
- **No photo, no date of birth, no marital status.** Not expected, and it dates the CV.

### Interview questions you will actually get

1. Difference between INNER and LEFT JOIN, with an example.
2. Write a query for second-highest salary / top N per group.
3. `WHERE` vs `HAVING`.
4. `VLOOKUP` vs `INDEX/MATCH` vs `XLOOKUP`.
5. Calculated column vs measure in Power BI.
6. What does `CALCULATE` do?
7. Explain a dashboard you built and one decision it changed.
8. How do you check a number before sending it to a manager?
9. Revenue dropped 20% — how do you investigate?
10. How do you use AI in your work, and how do you verify its output?

Question 10 is now standard. Answer: "AI drafts, I verify" — then list the checks.

---

## 9. The five rules

1. **One artifact per week.** A query file, a dashboard, a notebook. No artifact = the week didn't happen.
2. **Type every query yourself.** Copy-paste teaches nothing.
3. **30-minute rule.** Stuck for 30 minutes → write the exact error, try the dumbest fix, move on.
4. **Explain it out loud.** If you can't explain a JOIN to a friend in 60 seconds, you don't know it.
5. **Business question first, query second.** Interviews test "what does this mean," not "can you write SQL."

---

## 10. What "job-ready" looks like

- [ ] Write a 3-table JOIN with GROUP BY from memory
- [ ] Explain INNER vs LEFT JOIN with a real example
- [ ] One Power BI dashboard with a clear story, exported as PDF
- [ ] One Excel model a manager could actually use
- [ ] One pandas script that runs top to bottom and reproduces every number
- [ ] Turn a dataset into 5 business recommendations with numbers
- [ ] A one-page executive summary that passes the read-it-back test
- [ ] CV says "Data Analyst", one page, links 3 projects
- [ ] 40 applications sent, tracked in a sheet
