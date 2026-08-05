---
slug: /01-python/pandas-advanced
title: "Pandas Advanced"
sidebar_label: "Pandas Advanced"
sidebar_position: 13
---

# Pandas Advanced — Pivot Tables, Multi-Index, Window Functions, Performance

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Create and reshape pivot tables and cross-tabulations |
| LO2 | Work with MultiIndex DataFrames for hierarchical data |
| LO3 | Apply window functions: rolling, expanding, and ewm |
| LO4 | Use vectorized string operations with .str accessor |
| LO5 | Optimize DataFrame performance with categoricals and eval/query |
| LO6 | Handle time series data with resample, shift, and date ranges |

## Introduction

Python is the lingua franca of AI engineering. Mastering its syntax, data structures, and libraries is non-negotiable for building ML pipelines, APIs, and automation scripts. This module covers everything from basics to advanced concurrency.




## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding pandas advanced is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how pandas advanced works in practice.



## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 13.1 | Pivot Tables | pivot, pivot_table, crosstab, margins |
| 13.2 | MultiIndex | set_index, swaplevel, xs, stack/unstack |
| 13.3 | Window Functions | rolling, expanding, ewm, shift |
| 13.4 | String Operations | .str accessor, regex, extract, replace |
| 13.5 | Performance | eval, query, categoricals, numba integration |
| 13.6 | Time Series | resample, date_range, to_datetime, tz handling |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Advanced Pandas] --> B[Pivot Tables]
    A --> C[MultiIndex]
    A --> D[Window Functions]
    A --> E[String Ops]
    A --> F[Performance]
    A --> G[Time Series]
    B --> H[pivot_table / crosstab]
    C --> I[stack / unstack / xs]
    D --> J[rolling / expanding / ewm]
    E --> K[.str / regex]
    F --> L[eval / query / categorical]
    G --> M[resample / date_range]
```

## 13.1 Pivot Tables

Pivot tables summarize data by grouping and aggregating across multiple dimensions.

```python
import pandas as pd
import numpy as np

## Sample sales data
df = pd.DataFrame({
    "date": pd.date_range("2024-01-01", periods=12, freq="ME"),
    "product": ["A", "B", "A", "B", "A", "B", "A", "B", "A", "B", "A", "B"],
    "region": ["North", "North", "South", "South", "North", "North",
               "South", "South", "East", "East", "West", "West"],
    "sales": np.random.randint(100, 500, 12),
    "quantity": np.random.randint(5, 50, 12)
})

## Simple pivot
pivot = df.pivot_table(
    values="sales",
    index="product",
    columns="region",
    aggfunc="sum",
    margins=True,
    margins_name="Total"
)
print(pivot)
```

**pivot_table parameters**:

```python

## Multiple values and aggregations
pivot = df.pivot_table(
    values=["sales", "quantity"],
    index="product",
    columns="region",
    aggfunc={"sales": "sum", "quantity": "mean"},
    fill_value=0
)

## Custom aggregation function
pivot = df.pivot_table(
    values="sales",
    index="product",
    columns="region",
    aggfunc=lambda x: x.max() - x.min()
)
```

**crosstab** computes a frequency table of two or more factors:

```python

## Simple frequency table
ct = pd.crosstab(df["product"], df["region"])
print(ct)

## With margins and normalization
ct = pd.crosstab(
    df["product"], df["region"],
    values=df["sales"],
    aggfunc="sum",
    margins=True,
    normalize="index"  # normalize by row
)
```

**Melting** converts wide to long format (reverse of pivot):

```python
wide_df = pd.DataFrame({
    "id": [1, 2, 3],
    "Q1": [100, 200, 150],
    "Q2": [110, 190, 160],
    "Q3": [120, 180, 170],
    "Q4": [130, 170, 180]
})

long_df = wide_df.melt(
    id_vars=["id"],
    value_vars=["Q1", "Q2", "Q3", "Q4"],
    var_name="quarter",
    value_name="revenue"
)
print(long_df)
```

## 13.2 MultiIndex

MultiIndex allows hierarchical indexing for complex data.

```python
arrays = [["A", "A", "B", "B"], [2023, 2024, 2023, 2024]]
index = pd.MultiIndex.from_arrays(arrays, names=["product", "year"])

df = pd.DataFrame({
    "sales": [100, 120, 150, 140],
    "profit": [20, 25, 30, 28]
}, index=index)

print(df)

##               sales  profit

## product year

## A       2023    100      20

##         2024    120      25

## B       2023    150      30

##         2024    140      28
```

**Selecting from MultiIndex**:

```python

## Select all rows for product A
print(df.loc["A"])

## Select specific cross-section
print(df.loc[("A", 2024)])

## xs() for cross-sectional selection
print(df.xs(key="A", level="product"))
print(df.xs(key=2024, level="year"))
```

**swaplevel and reorder_levels**:

```python

## Swap index levels
swapped = df.swaplevel()
print(swapped)

## Reorder levels
reordered = df.reorder_levels(["year", "product"])
```

**stack and unstack** convert between wide and long formats:

```python

## unstack: innermost index level → columns
unstacked = df.unstack()
print(unstacked)

##         sales         profit

## year    2023  2024    2023  2024

## product

## A        100   120      20    25

## B        150   140      30    28

## stack: columns → innermost index level
restacked = unstacked.stack()
print(restacked)
```

**set_index and reset_index**:

```python

## Move columns to index
df_indexed = df.reset_index().set_index(["product", "year"])

## Flatten MultiIndex
flattened = df_indexed.reset_index()
```

**MultiIndex columns**:

```python
cols = pd.MultiIndex.from_tuples([
    ("Sales", "Q1"), ("Sales", "Q2"),
    ("Profit", "Q1"), ("Profit", "Q2")
])
df_multi_cols = pd.DataFrame(
    np.random.randint(100, 200, (3, 4)),
    columns=cols
)
print(df_multi_cols["Sales"]["Q1"])
```

## 13.3 Window Functions

Window functions operate on a sliding or expanding window of rows.

**Rolling window**:

```python

## 3-day rolling mean
series = pd.Series(np.random.randn(10))
rolling_mean = series.rolling(window=3).mean()

## Rolling with min_periods
rolling = series.rolling(window=5, min_periods=2).mean()

## Multiple aggregations
stats = series.rolling(3).agg(["mean", "std", "min", "max"])
```

**Expanding window** (uses all data from start):

```python

## Cumulative statistics
expanding_mean = series.expanding().mean()
expanding_std = series.expanding().std()

## Expanding with min_periods
expanding = series.expanding(min_periods=2).sum()
```

**Exponentially weighted moving average (ewm)**:

```python
ewm_mean = series.ewm(span=3, adjust=False).mean()
ewm_std = series.ewm(span=3).std()
```

**shift and diff** for lag/lead computations:

```python
df = pd.DataFrame({"value": [1, 3, 6, 10, 15]})
df["lag_1"] = df["value"].shift(1)        # previous row
df["lead_1"] = df["value"].shift(-1)       # next row
df["diff_1"] = df["value"].diff(1)         # period-over-period change
df["pct_change"] = df["value"].pct_change()  # fractional change
```

**Applying custom functions** over windows:

```python
def custom_window(x):
    return x.max() - x.min() if len(x) > 0 else np.nan

result = series.rolling(3).apply(custom_window, raw=False)
```

## 13.4 String Operations

The .str accessor provides vectorized string operations.

```python
s = pd.Series(["Hello World", "  python  ", "DATA SCIENCE", None])

## Basic transformations
print(s.str.lower())        # all lowercase
print(s.str.upper())        # all uppercase
print(s.str.strip())        # remove whitespace
print(s.str.len())          # string length
print(s.str.contains("python"))  # boolean mask
```

**Splitting and replacing**:

```python
emails = pd.Series(["alice@example.com", "bob@test.org", "charlie@co.uk"])

## Split by delimiter
parts = emails.str.split("@", expand=True)
parts.columns = ["user", "domain"]

## Replace
cleaned = emails.str.replace("@", " [at] ", regex=False)

## Replace with regex
masked = emails.str.replace(r"(?<=.).(?=.*@)", "*", regex=True)
```

**Extracting with regex**:

```python
text = pd.Series([
    "Order #12345: $99.99",
    "Order #67890: $149.50",
    "Order #11111: $200.00"
])

## Extract with named groups
extracted = text.str.extract(
    r"Order #(?P<order_id>\d+):\s\$(?P<amount>[\d.]+)"
)

## Extract all matches
dates = pd.Series(["2024-01-15", "2024-02-20", "2024-03-25"])
parts = dates.str.extractall(r"(?P<year>\d{4})-(?P<month>\d{2})-(?P<day>\d{2})")
```

**Checking string patterns**:

```python

## Startswith / endswith
mask = s.str.startswith("H")
mask = s.str.endswith(".com")

## Count occurrences
counts = s.str.count("a")

## Find position
positions = s.str.find("World")

## Pad, center, slice
padded = s.str.pad(width=20, side="both", fillchar="-")
centered = s.str.center(20, "-")
sliced = s.str.slice(0, 5)
```

## 13.5 Performance

Large DataFrames benefit from optimization techniques.

**eval and query** use numexpr for fast evaluation:

```python
n = 1_000_000
df = pd.DataFrame({
    "A": np.random.randn(n),
    "B": np.random.randn(n),
    "C": np.random.randn(n)
})

## query — efficient boolean indexing
result = df.query("A > 0 and B < 0 and C > -1")

## eval — compute expressions without temporary arrays
df["D"] = df.eval("A + B * 2 - C / 3")

## Multi-line eval
df.eval("""
    E = A + B
    F = E * C
""", inplace=True)
```

**Categorical data** reduces memory for repeated strings:

```python

## Convert object column to categorical
df["category"] = pd.Categorical(
    np.random.choice(["low", "medium", "high", "critical"], n)
)

## Memory comparison
print(df["category"].memory_usage(deep=True))

## vs
identical_df = pd.DataFrame({
    "category": np.random.choice(["low", "medium", "high", "critical"], n)
})
print(identical_df["category"].memory_usage(deep=True))
```

**numba integration** for custom vectorized functions:

```python
import numba

@numba.jit(nopython=True)
def numba_sum(arr):
    total = 0.0
    for x in arr:
        total += x
    return total

## Apply with engine='numba'
result = df["A"].rolling(100).apply(
    lambda x: numba_sum(x.values),
    engine="numba",
    raw=True
)
```

**Other performance tips**:

```python

## Use inplace=False (default) chain operations
df = (df
    .query("A > 0")
    .assign(D=lambda x: x.A + x.B)
    .groupby("category")
    .agg({"A": "mean", "D": "sum"})
)

## Specify dtypes at read time
df = pd.read_csv("large.csv", dtype={"id": "int32", "value": "float32"})

## Use usecols to load only needed columns
df = pd.read_csv("large.csv", usecols=["id", "value", "date"])

## Use chunksize for large files
chunks = []
for chunk in pd.read_csv("large.csv", chunksize=10000):
    filtered = chunk.query("value > 0")
    chunks.append(filtered)
result = pd.concat(chunks)
```

## 13.6 Time Series

Pandas excels at time series data manipulation.

**Date ranges and frequencies**:

```python

## Create date ranges
dates = pd.date_range(
    start="2024-01-01",
    end="2024-12-31",
    freq="D"  # daily
)

## Business days
b_dates = pd.bdate_range(start="2024-01-01", end="2024-12-31")

## Custom frequencies
hourly = pd.date_range("2024-01-01", periods=24, freq="h")
every_6h = pd.date_range("2024-01-01", periods=4, freq="6h")
```

**to_datetime and parsing**:

```python

## Parse string columns to datetime
df = pd.DataFrame({"date_str": ["2024-01-15", "2024-02-20", "invalid"]})
df["date"] = pd.to_datetime(df["date_str"], errors="coerce")

## Custom format
df["date"] = pd.to_datetime(
    df["date_str"],
    format="%Y-%m-%d",
    errors="coerce"
)

## Infer datetime format
df["date"] = pd.to_datetime(df["date_str"], infer_datetime_format=True)
```

**resample** changes the frequency of time series:

```python

## Create minute-level data
idx = pd.date_range("2024-01-01", periods=1440, freq="min")
ts = pd.Series(np.random.randn(1440), index=idx)

## Downsample to hourly
hourly_mean = ts.resample("h").mean()
hourly_ohlc = ts.resample("h").agg(["mean", "std", "min", "max"])

## Upsample with interpolation
daily = pd.Series([100, 150, 130], index=pd.date_range("2024-01-01", periods=3, freq="D"))
hourly = daily.resample("h").interpolate(method="linear")
```

**Time zone handling**:

```python

## Localize naive timestamps
ts_utc = ts.tz_localize("UTC")

## Convert timezone
ts_est = ts_utc.tz_convert("US/Eastern")
ts_pst = ts_utc.tz_convert("US/Pacific")
```

**Window functions on time series**:

```python

## Rolling with time-based window
ts.rolling("1h").mean()        # 1-hour rolling mean
ts.rolling("30min").std()      # 30-minute rolling std
ts.rolling("2h", min_periods=10).max()
```

## TypeScript Parallel

```typescript
// Pivot table equivalent in TypeScript
interface Sale {
    product: string;
    region: string;
    sales: number;
    quantity: number;
}

function pivotTable(
    data: Sale[],
    values: keyof Sale,
    index: keyof Sale,
    columns: keyof Sale,
    aggFn: (vals: number[]) => number
): Record<string, Record<string, number>> {
    const groups: Record<string, Record<string, number[]>> = {};
    for (const row of data) {
        const idx = String(row[index]);
        const col = String(row[columns]);
        (groups[idx] ??= {})[col] ??= [];
        groups[idx][col].push(Number(row[values]));
    }
    const result: Record<string, Record<string, number>> = {};
    for (const [idx, colGroups] of Object.entries(groups)) {
        result[idx] = {};
        for (const [col, vals] of Object.entries(colGroups)) {
            result[idx][col] = aggFn(vals);
        }
    }
    return result;
}

// Window function equivalent
function rollingMean(values: number[], window: number): (number | null)[] {
    return values.map((_, i) => {
        if (i < window - 1) return null;
        const slice = values.slice(i - window + 1, i + 1);
        return slice.reduce((a, b) => a + b, 0) / window;
    });
}

// String operations (vectorized)
function strContains(series: (string | null)[], pattern: string): boolean[] {
    return series.map(s => s !== null && s.includes(pattern));
}
```

## Summary

- pivot_table reshapes DataFrames by grouping index/columns and aggregating values
- crosstab computes frequency tables; melt converts wide to long format
- MultiIndex enables hierarchical row/column indexing for complex data
- xs, swaplevel, stack/unstack navigate and reshape MultiIndex DataFrames
- Rolling, expanding, and ewm provide sliding window calculations
- shift, diff, and pct_change compute lag/lead and period-over-period changes
- The .str accessor provides vectorized string operations with regex support
- eval and query use numexpr for fast expression evaluation on large DataFrames
- Categorical dtype reduces memory usage for columns with repeated string values
- resample changes time series frequency with various aggregation methods

## Practical Takeaways

| Scenario | Use | Avoid |
|----------|-----|-------|
| Summary table across dimensions | pivot_table with margins | Manual groupby and unstack |
| Hierarchical data | MultiIndex | Flattened with redundant columns |
| Moving average | rolling().mean() | Manual loops over windows |
| Cumulative statistics | expanding() | Repeated full-data cumsum calls |
| Text cleaning | .str.replace / .str.extract | apply() with Python string methods |
| Large DataFrame filtering | query() with numexpr | Boolean indexing on full copy |
| Repeated string column | Categorical dtype | object dtype |
| Time series resampling | resample().agg() | Manual reindexing loops |
| Custom rolling functions | .apply() with raw=True | Python-level loops |

## Interview Q&A

<details class="tp-qa-card" data-qid="p02-s13-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: Difference between pivot and pivot_table?</summary>
  <div class="tp-qa-answer"><p>pivot() requires unique index/column combinations and cannot aggregate. pivot_table() handles duplicates by applying an aggregation function (default: mean). pivot() is syntactic sugar for unstack(), while pivot_table() is a full-featured groupby + reshape operation with margins, fill_value, and multiple aggfuncs.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s13-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: How to select from a MultiIndex DataFrame?</summary>
  <div class="tp-qa-answer"><p>Use .loc with tuples: df.loc[("A", 2024)]. Use .xs() for cross-sections: df.xs(key="A", level="product"). Use query() for complex conditions. Use swaplevel() followed by .loc to select by different level order. For columns MultiIndex, chain column access: df["Sales"]["Q1"].</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s13-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: What does stack() do?</summary>
  <div class="tp-qa-answer"><p>stack() pivots columns into the innermost row index level, converting wide format to long format. unstack() does the reverse, pivoting the innermost index level to columns. Together they enable efficient reshaping between representational forms.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s13-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: Rolling vs expanding windows?</summary>
<div class="tp-qa-answer"><p>Rolling windows have a fixed size and slide over the data, dropping old observations. Expanding windows grow over time, using all data from the start. Rolling is used for.
moving averages and short-term trends. Expanding is used for cumulative statistics like running mean or standard deviation.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s13-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: How does eval improve performance?</summary>
<div class="tp-qa-answer"><p>eval() uses the numexpr library to evaluate expressions without creating intermediate arrays. It operates on contiguous memory blocks, leverages multiple CPU cores via multithreading,.
and reduces memory bandwidth. For expressions like "A + B * C - D", eval can be 2-5x faster than Pandas' standard evaluation.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s13-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: When to use Categorical dtype?</summary>
<div class="tp-qa-answer"><p>Use Categorical when a column has a limited number of unique string values relative to the total row count (e.g.,.
gender, country code, status). It stores an integer codes array plus a mapping, reducing memory by 5-10x for highly repeated strings. Also enables ordered categories for.
sorting and groupby operations.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s13-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: How does resample work?</summary>
<div class="tp-qa-answer"><p>resample() groups time series data by a new frequency (e.g., 'h' for hourly, 'D' for daily, 'W' for weekly, 'ME' for.
month-end). It requires a DatetimeIndex. After resampling, apply aggregation (mean, sum, ohlc), interpolation, or forward/backward fill. Use .asfreq() to see NaN for.
missing periods.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s13-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: melt vs pivot?</summary>
<div class="tp-qa-answer"><p>melt() converts wide format to long (unpivot), turning multiple columns into rows. pivot() converts long to wide. melt is useful when data is in spreadsheet format with columns representing variable values. pivot is useful for.
creating summary tables. Use melt + pivot for round-trip reshaping.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s13-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: How to handle missing time series data?</summary>
<div class="tp-qa-answer"><p>Use fillna() with method='ffill' (forward fill), method='bfill' (backward fill), or interpolate(). For resampling, use .asfreq() to introduce missing periods then fill. Use .reindex() with a complete date range to ensure all periods exist. For.
irregular time series, consider using interpolation methods like linear or spline.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s13-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: Query vs boolean indexing performance?</summary>
<div class="tp-qa-answer"><p>query() uses numexpr for fast evaluation, especially beneficial for large DataFrames (100k+ rows) with multiple conditions. Boolean indexing (df[(df.A > 0) & (df.B < 0)]) creates intermediate boolean arrays,.
increasing memory and time. For small DataFrames, the difference is negligible. query() also supports Python-style variable references with @.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What does pivot_table do with duplicate index/column pairs? a) raises an error b) drops duplicates c) applies an aggregation function d) returns NaN

<details class="tp-qa-card" data-qid="p02-s13-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) applies an aggregation function (default mean)</strong></p></div></details>

**Q2**: Which method converts the innermost index level to columns? a) stack() b) unstack() c) pivot() d) melt()

<details class="tp-qa-card" data-qid="p02-s13-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) unstack()</strong></p></div></details>

**Q3**: What is the window size effect of expanding()? a) fixed b) grows over time c) shrinks d) variable

<details class="tp-qa-card" data-qid="p02-s13-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) grows over time, using all data from the start</strong></p></div></details>

**Q4**: Which Pandas feature uses numexpr under the hood? a) str accessor b) pivot_table c) eval/query d) merge

<details class="tp-qa-card" data-qid="p02-s13-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) eval/query use numexpr for fast expression evaluation</strong></p></div></details>

**Q5**: resample('W') aggregates data by what frequency? a) daily b) weekly c) monthly d) yearly

<details class="tp-qa-card" data-qid="p02-s13-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) weekly</strong></p></div></details>

## Exercises

**Easy** — Create a pivot table showing average sales per product per region from a sales DataFrame with at least 20 rows.

**Easy** — Use melt() to convert a wide DataFrame with quarterly columns (Q1-Q4) to long format.

**Medium** — Create a MultiIndex DataFrame for stock prices (ticker, date) and compute a 5-day rolling mean for each ticker.

**Medium** — Use .str.extract() to parse phone numbers in the format (123) 456-7890 from a text column into area code, prefix, and line number columns.

**Hard** — Load a large CSV (1M+ rows) using chunksize and process it in chunks, filtering rows and writing results to a new file without loading the entire dataset into memory.

**Hard** — Simulate a trading strategy: generate minute-level price data for a week, compute 30-minute and 2-hour rolling means, and generate buy/sell signals when the short MA crosses the long MA.

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design
