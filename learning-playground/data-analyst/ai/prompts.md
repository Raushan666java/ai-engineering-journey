# Prompt Library — AI for Analysts

Copy, fill the `<...>` parts, use. Always verify the output.

---

## 1. Business question → SQL

```
ROLE: You are a senior data analyst writing SQLite SQL.
SCHEMA:
<paste the CREATE TABLE statements or schema.md>
QUESTION: <one precise question>
RULES:
- Use only the columns listed above.
- Exclude cancelled orders unless the question says otherwise.
- Use ROUND(value, 2) for money.
- Do not invent tables or columns.
OUTPUT:
1. The SQL query.
2. A 3-line list of assumptions you made.
3. One query that would catch a mistake in this result.
```

## 2. Fix a broken query

```
This SQLite query fails / returns a suspicious number.

QUERY:
<query>

ERROR OR SUSPICIOUS RESULT:
<error text or expected vs actual>

SCHEMA:
<schema>

Explain the likely cause, give the corrected query, and tell me how to verify
the fix with a reconciliation query.
```

## 3. Explain an unfamiliar schema

```
Here are the table definitions from a new database:
<schema>

Explain, in plain English:
- What each table represents.
- The likely grain (one row = ?) of each table.
- Which columns are keys and how tables join.
- Three questions this data could answer, and three it probably cannot.
Do not guess columns that are not listed.
```

## 4. Clean messy data with pandas

```
I have a pandas DataFrame `df` with these columns and dtypes:
<df.info() output>

Problems I see:
- <e.g. dates stored as text in mixed formats>
- <e.g. duplicate order_id>

Write pandas code that:
1. <goal 1>
2. <goal 2>
3. <goal 3>

Rules: do not mutate df in place; return a new DataFrame; print row counts
before and after each step so I can verify nothing was silently dropped.
```

## 5. Find drivers behind a change

```
Metric: <e.g. monthly revenue>
Change: <e.g. dropped 22% from August to September>
Available dimensions: <country, category, product, customer, status>
Data: <small aggregated table, no PII>

List the 5 most likely drivers, ranked by plausibility.
For each, give the exact query or cut of the data that would confirm or rule it out.
Do not claim a cause — give me tests.
```

## 6. Executive summary

```
Here are verified findings:
<bullet list with numbers>

Write a one-page executive summary with this structure:
HEADLINE: one sentence with the main number.
CONTEXT: 2 sentences.
FINDINGS: 3 bullets, each with a number.
ACTION: 1 recommendation a manager can approve.

Rules: no jargon, no methodology, no invented numbers. Only use the figures above.
```

## 7. Data quality audit

```
Schema: <schema>
Sample: <5 anonymised rows>

List every data-quality check I should run before analysing this table
(nulls, duplicates, impossible values, date ranges, orphan keys).
For each, give the SQL to run and what a failure would look like.
```

## 8. Interview practice

```
You are a UAE hiring manager interviewing a data analyst.
Ask me one SQL/business question at a time based on this schema: <schema>
After my answer, score it 1-5, point out the gap, and give a better answer.
Start with an easy question.
```
