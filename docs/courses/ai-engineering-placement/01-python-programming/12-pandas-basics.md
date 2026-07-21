# Pandas Basics � Series, DataFrame, Indexing, GroupBy, Merge

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Create and manipulate Series and DataFrames |
| LO2 | Use index-based and label-based selection (loc, iloc) |
| LO3 | Filter, transform, and clean data with pandas |
| LO4 | Group data with GroupBy and aggregate results |
| LO5 | Merge, join, and concatenate DataFrames |
| LO6 | Handle missing data with dropna, fillna, interpolate |

## Introduction

Understanding pandas basics is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering pandas basics.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding pandas basics is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how pandas basics works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind pandas basics
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Examples

### Basic Example

```python

## Basic pandas basics example
def example():
    """Demonstrate pandas basics"""
    result = "Hello, pandas basics!"
    print(result)
    return result

example()
```text

### Expected Output

```text
Hello, pandas basics!
```text

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 12.1 | Series & DataFrame | Creation, dtype, index |
| 12.2 | Indexing | loc, iloc, boolean filtering |
| 12.3 | Data Cleaning | isnull, dropna, fillna, duplicates |
| 12.4 | Transformations | apply, map, assign, pipe |
| 12.5 | GroupBy | split-apply-combine, agg, transform |
| 12.6 | Merge & Concat | join, merge, concat, keys |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Pandas] --> B[Series]
    A --> C[DataFrame]
    C --> D[Indexing: loc/iloc]
    C --> E[Cleaning: dropna/fillna]
    C --> F[Transform: apply/map]
    C --> G[GroupBy]
    C --> H[Merge/Join/Concat]
```text

## 12.1 Series & DataFrame

`python
import pandas as pd
import numpy as np

## Series � 1D labeled array
s = pd.Series([10, 20, 30, 40], index=["a", "b", "c", "d"])
print(s)

## a    10

## b    20

## c    30

## d    40

## dtype: int64

print(s["b"])   # 20
print(s.values)  # [10 20 30 40]
print(s.index)   # Index(['a', 'b', 'c', 'd'], dtype='object')

## DataFrame � 2D table
df = pd.DataFrame({
    "name": ["Alice", "Bob", "Charlie"],
    "age": [25, 30, 35],
    "salary": [70000, 80000, 90000]
})
print(df)
print(df.shape)     # (3, 3)
print(df.columns)   # Index(['name', 'age', 'salary'])
print(df.dtypes)    # column types
print(df.describe())  # summary statistics
`

## 12.2 Indexing

`python

## Column access
print(df["name"])       # Series
print(df[["name", "salary"]])  # DataFrame

## Row access � iloc (integer) vs loc (label)
print(df.iloc[0])       # first row
print(df.iloc[1:3])     # rows 1-2
print(df.iloc[:, 0:2])  # all rows, first 2 cols

print(df.loc[0])        # first row by index label
print(df.loc[0:2, "name"])  # rows 0-2, name column

## Boolean filtering
print(df[df["age"] > 28])
print(df[(df["age"] > 25) & (df["salary"] > 75000)])
print(df.query("age > 28 and salary > 75000"))  # alternative

## Setting index
df_indexed = df.set_index("name")
print(df_indexed.loc["Bob"])

## Reset index
df_reset = df_indexed.reset_index()
`

## 12.3 Data Cleaning

`python
df = pd.DataFrame({
    "A": [1, 2, np.nan, 4],
    "B": [5, np.nan, np.nan, 8],
    "C": ["x", "y", "z", None]
})

## Detecting missing
print(df.isnull())
print(df.isnull().sum())  # count NaN per column

## Drop missing
print(df.dropna())              # drop rows with any NaN
print(df.dropna(axis=1))        # drop columns with any NaN
print(df.dropna(thresh=2))      # keep rows with at least 2 non-NaN

## Fill missing
print(df.fillna(0))                          # fill with 0
print(df.fillna({"A": df["A"].mean(), "B": 0}))  # per column
print(df.ffill())    # forward fill
print(df.bfill())    # backward fill

## Interpolate
s = pd.Series([1, np.nan, np.nan, 4])
print(s.interpolate())  # [1, 2, 3, 4]

## Duplicates
df = pd.DataFrame({"x": [1, 1, 2, 2, 3], "y": [10, 10, 20, 30, 40]})
print(df.duplicated())         # True for duplicate rows
print(df.drop_duplicates())    # remove duplicates
print(df.drop_duplicates(subset=["x"]))  # keep first of each x
`

## 12.4 Transformations

`python
df = pd.DataFrame({
    "name": ["Alice", "Bob", "Charlie"],
    "age": [25, 30, 35],
    "salary": [70000, 80000, 90000]
})

## apply � apply function to axis
df["age_squared"] = df["age"].apply(lambda x: x ** 2)
df["salary_category"] = df["salary"].apply(
    lambda s: "High" if s > 80000 else "Medium" if s > 70000 else "Low"
)

## map � replace values (Series only)
df["name_upper"] = df["name"].map(str.upper)

## assign � add multiple columns
df = df.assign(
    bonus=lambda d: d["salary"] * 0.1,
    total=lambda d: d["salary"] + d["bonus"]
)

## pipe � chain operations
def add_tenure(df, years=1):
    df["tenure"] = years
    return df

result = df.pipe(add_tenure, years=3)
`

## 12.5 GroupBy

`python
df = pd.DataFrame({
    "dept": ["Eng", "Eng", "Sales", "Sales"],
    "name": ["Alice", "Bob", "Charlie", "Diana"],
    "salary": [75000, 68000, 82000, 72000]
})

## Single aggregation
print(df.groupby("dept")["salary"].mean())

## dept

## Eng      71500

## Sales    77000

## Multiple aggregations
print(df.groupby("dept")["salary"].agg(["count", "mean", "std", "min", "max"]))

## Different agg per column
print(df.groupby("dept").agg({
    "salary": ["mean", "std"],
    "name": "count"
}))

## transform � same shape as original
df["salary_rank"] = df.groupby("dept")["salary"].transform(
    lambda x: x.rank()
)

## filter groups
print(df.groupby("dept").filter(lambda g: g["salary"].mean() > 72000))

## Custom aggregation
def salary_range(x):
    return x.max() - x.min()

print(df.groupby("dept")["salary"].agg(salary_range))
`

## 12.6 Merge & Concat

`python
df1 = pd.DataFrame({"id": [1, 2, 3], "name": ["Alice", "Bob", "Charlie"]})
df2 = pd.DataFrame({"id": [1, 2, 4], "score": [95, 87, 92]})

## Merge (like SQL JOIN)
print(pd.merge(df1, df2, on="id", how="inner"))
print(pd.merge(df1, df2, on="id", how="left"))
print(pd.merge(df1, df2, on="id", how="outer"))

## Merge on different column names
pd.merge(df1, df2, left_on="id", right_on="user_id")

## Concatenation
df_a = pd.DataFrame({"x": [1, 2]})
df_b = pd.DataFrame({"x": [3, 4]})
print(pd.concat([df_a, df_b]))  # row-wise
print(pd.concat([df_a, df_b], axis=1))  # column-wise

## With keys
print(pd.concat([df_a, df_b], keys=["A", "B"]))

## Join on index
df1.set_index("id").join(df2.set_index("id"), how="left")
`

## TypeScript Parallel

`	ypescript
// TypeScript: use Danfo.js or similar
// npm install danfojs-node
import { DataFrame } from "danfojs-node";

const df = new DataFrame({
    name: ["Alice", "Bob"],
    age: [25, 30],
    salary: [70000, 80000]
});

console.log(df.mean());
`

## Summary

- Series = 1D labeled array; DataFrame = 2D table with columns
- Use loc for label-based indexing, iloc for integer position
- Boolean filtering with df[df.col > value] for clean row selection
- GroupBy: split into groups, apply function, combine results
- Merge: combine DataFrames by key (SQL-like joins)
- apply() for row/column-wise operations; map() for Series value mapping
- Missing data: dropna(), fillna(), interpolate()
- Duplicates: duplicated(), drop_duplicates()
- concat: stack DataFrames vertically (axis=0) or horizontally (axis=1)
- pipe for chaining multiple transformations

## Practical Takeaways

| Scenario | Use | Avoid |
|----------|-----|-------|
| Select rows by label | df.loc[row, col] | Chained indexing df[df[]][col] |
| Filter rows | df[df.col > val] | Iterating with for loop |
| Missing values | df.fillna(0) or df.dropna() | Ignoring NaN |
| Group summary | df.groupby(col).agg(...) | Multiple separate queries |
| Combine tables | pd.merge(df1, df2, on=key) | Nested loops |
| Apply function | df.col.apply(func) | List comprehension |
| Chain operations | df.pipe(f).pipe(g) | Multiple intermediate vars |

## Interview Q&A

<details class="tp-qa-card" data-qid="p02-s12-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: loc vs iloc?</summary>
  <div class="tp-qa-answer"><p>loc uses label-based indexing (index values, column names). iloc uses integer position (0-based). loc[0] selects row with index label 0; iloc[0] selects first row regardless of label. loc is inclusive of endpoints; iloc is exclusive.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s12-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: How does pandas handle missing data?</summary>
  <div class="tp-qa-answer"><p>Uses np.nan (float) for missing values. isnull() detects NaN. dropna() removes NaN rows/cols. fillna(value) fills with specified value. ffill() propagates last valid observation. interpolate() fills with interpolated values. Can use pd.NA for nullable integer/string types.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s12-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: Difference between apply and map?</summary>
  <div class="tp-qa-answer"><p>apply works on DataFrame (axis=0/1) or Series, passing entire row/column or each value. map only works on Series, replacing values based on a dict or function. transform(f) on GroupBy gives same-size result. applymap works element-wise on DataFrame (legacy).</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s12-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: How does GroupBy work?</summary>
  <div class="tp-qa-answer"><p>Split: group rows by key(s). Apply: aggregate, transform, or filter each group. Combine: merge results into output. Standard pattern: df.groupby('col')['val'].agg(...). Supports multiple aggregations, custom functions, and hierarchical indexing.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s12-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: Merge vs Join vs Concat?</summary>
  <div class="tp-qa-answer"><p>merge: SQL-style joins on columns/indices. join: convenience method for index-based joins. concat: stack DataFrames along axis (0 for rows, 1 for columns). Merge is most flexible; concat is simplest for appending.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s12-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: What is a MultiIndex?</summary>
  <div class="tp-qa-answer"><p>Hierarchical index with multiple levels. Created by groupby with multiple keys, set_index with multiple columns, or pd.MultiIndex. Access with df.loc[('level1', 'level2')]. Slice with xs() or cross-section. Essential for high-dimensional data.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s12-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: How do you handle categorical data?</summary>
  <div class="tp-qa-answer"><p>Convert to category dtype: df['col'] = df['col'].astype('category'). Benefits: memory efficiency, ordered categories, faster groupby. Use cat.codes for integer encoding, pd.get_dummies() for one-hot encoding, cat.categories for category list.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s12-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: What is the difference between inplace=True and reassign?</summary>
  <div class="tp-qa-answer"><p>inplace=True modifies the DataFrame in-place (returns None). Reassignment df = df.drop(...) creates a new DataFrame. Inplace is slightly more memory-efficient but often discouraged because it doesn't allow method chaining. Most pandas methods default to inplace=False.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s12-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: How do you read/write different file formats?</summary>
  <div class="tp-qa-answer"><p>pd.read_csv('file.csv'), pd.read_excel('file.xlsx'), pd.read_json('file.json'), pd.read_sql('query', conn), pd.read_parquet('file.parquet'). Write: df.to_csv(), df.to_excel(), df.to_json(), df.to_parquet(). Each has format-specific parameters.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s12-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: How to handle large DataFrames?</summary>
  <div class="tp-qa-answer"><p>Use dtypes efficiently (category for strings, int8/float32). Read in chunks with chunksize. Use pd.read_csv(..., usecols=[...]) to select columns. Use PyArrow or Parquet format. For > RAM, use Dask or Vaex for out-of-core processing.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which accessor uses integer positions? a) loc b) iloc c) at d) iat

<details class="tp-qa-card" data-qid="p02-s12-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) iloc</strong></p></div></details>

**Q2**: What method removes rows with missing values? a) fillna b) dropna c) isnull d) bfill

<details class="tp-qa-card" data-qid="p02-s12-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) dropna</strong></p></div></details>

**Q3**: What is the correct GroupBy syntax for mean of salary column? a) df.groupby('dept').mean('salary') b) df.groupby('dept')['salary'].mean() c) df.mean('salary').groupby('dept') d) df.groupby('dept').agg(mean='salary')

<details class="tp-qa-card" data-qid="p02-s12-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) df.groupby('dept')['salary'].mean()</strong></p></div></details>

**Q4**: Which method stacks DataFrames vertically? a) merge b) join c) concat(axis=0) d) concat(axis=1)

<details class="tp-qa-card" data-qid="p02-s12-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) concat(axis=0)</strong></p></div></details>

**Q5**: What is the first argument of pd.merge? a) on b) left c) how d) right

<details class="tp-qa-card" data-qid="p02-s12-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) left (first DataFrame), technically we need (left, right, ...)</strong></p></div></details>

## Exercises

**Easy** � Load a CSV file into DataFrame, print first 5 rows and summary statistics.
**Easy** � Filter DataFrame to show rows where a column value is in a specific list.
**Medium** � Group a sales DataFrame by region and month, compute total and average sales.
**Medium** � Merge customer and order DataFrames, find customers with no orders.
**Hard** � Clean a messy DataFrame: handle missing values, remove duplicates, standardize column names, convert date strings to datetime.
**Hard** � Implement a pipeline that reads raw data, cleans it, creates features via groupby transforms, and saves the processed result.

## 12.7 Time Series Basics

`python
import pandas as pd
import numpy as np

## Creating datetime ranges
dates = pd.date_range("2024-01-01", periods=10, freq="D")
print(dates)

## DatetimeIndex(['2024-01-01', '2024-01-02', ..., '2024-01-10'])

## Time series DataFrame
ts_df = pd.DataFrame({
    "value": np.random.randn(10)
}, index=dates)
print(ts_df)

## Resampling
hourly = pd.date_range("2024-01-01", periods=24 * 7, freq="H")
df_hourly = pd.DataFrame({
    "value": np.random.randn(len(hourly))
}, index=hourly)

daily_mean = df_hourly.resample("D").mean()
weekly_max = df_hourly.resample("W").max()

## Shifting and lagging
df_hourly["lag_1"] = df_hourly["value"].shift(1)
df_hourly["diff_1"] = df_hourly["value"].diff()
df_hourly["pct_change"] = df_hourly["value"].pct_change()

## Rolling windows
df_hourly["rolling_mean_3"] = df_hourly["value"].rolling(window=3).mean()
df_hourly["rolling_std_6"] = df_hourly["value"].rolling(window=6).std()
df_hourly["expanding_mean"] = df_hourly["value"].expanding().mean()

## Date-based filtering
january_data = ts_df[ts_df.index.month == 1]
weekday_data = ts_df[ts_df.index.dayofweek < 5]

## Time zone handling
ts_utc = pd.Timestamp("2024-01-01 12:00", tz="UTC")
ts_ny = ts_utc.tz_convert("America/New_York")
print(ts_ny)  # 2024-01-01 07:00:00-05:00
`

## 12.8 File I/O Operations

`python

## CSV
df.to_csv("output.csv", index=False)
df_csv = pd.read_csv("output.csv")

## Excel (requires openpyxl or xlrd)

## df.to_excel("output.xlsx", sheet_name="Sheet1", index=False)

## df_excel = pd.read_excel("output.xlsx", sheet_name="Sheet1")

## JSON
df.to_json("output.json", orient="records", indent=2)
df_json = pd.read_json("output.json", orient="records")

## Parquet (efficient columnar format)

## df.to_parquet("output.parquet")

## df_pq = pd.read_parquet("output.parquet")

## SQL databases
from sqlalchemy import create_engine
engine = create_engine("sqlite:///database.db")
df.to_sql("employees", engine, if_exists="replace", index=False)
df_sql = pd.read_sql("SELECT * FROM employees WHERE age > 30", engine)

## Reading with options
df_large = pd.read_csv("large.csv", chunksize=10000)  # iterator
df_cols = pd.read_csv("data.csv", usecols=["name", "age", "salary"])
df_dtypes = pd.read_csv("data.csv", dtype={"age": "int8", "salary": "float32"})
`

## 12.9 Advanced Indexing Techniques

`python

## MultiIndex (hierarchical index)
arrays = [["A", "A", "B", "B"], [1, 2, 1, 2]]
index = pd.MultiIndex.from_arrays(arrays, names=["group", "sub"])
df_multi = pd.DataFrame({"value": [10, 20, 30, 40]}, index=index)
print(df_multi)

##              value

## group sub

## A     1        10

##       2        20

## B     1        30

##       2        40

## Selection with MultiIndex
print(df_multi.loc["A"])            # all rows for group A
print(df_multi.loc[("A", 1)])       # specific sub-group
print(df_multi.xs(1, level="sub"))  # cross-section

## Stack and unstack
df_wide = df_multi.unstack()  # convert index to columns
df_long = df_wide.stack()     # convert columns back to index

## pivot_table for summary
df_sales = pd.DataFrame({
    "date": ["2024-01", "2024-01", "2024-02", "2024-02"],
    "product": ["A", "B", "A", "B"],
    "revenue": [100, 200, 150, 250]
})
pivot = df_sales.pivot_table(
    values="revenue", index="date", columns="product",
    aggfunc="sum", fill_value=0
)
print(pivot)

## product     A    B

## date

## 2024-01   100  200

## 2024-02   150  250

## Melt (unpivot)
df_melted = pd.melt(
    pivot.reset_index(),
    id_vars=["date"],
    value_vars=["A", "B"],
    var_name="product",
    value_name="revenue"
)
`

## 12.10 String Operations

`python
df = pd.DataFrame({
    "name": [" Alice ", "BOB", "charlie", "DAVID   "],
    "email": ["alice@test.com", "bob@test", "charlie@", None],
    "phone": ["123-456-7890", "098-765-4321", "555-1234", None]
})

## String accessor .str
df["name_clean"] = df["name"].str.strip().str.title()
df["name_upper"] = df["name"].str.strip().str.upper()
df["name_len"] = df["name"].str.strip().str.len()

## String filtering
gmail = df[df["email"].str.contains("gmail", na=False)]
has_at = df[df["email"].str.contains("@", na=False)]

## String extraction
df["area_code"] = df["phone"].str.extract(r"(\d{3})-")
df["domain"] = df["email"].str.extract(r"@(\w+\.\w+)", expand=False)

## Replace and split
df["name_normalized"] = df["name"].str.replace(r"\s+", " ", regex=True)
email_parts = df["email"].str.split("@", expand=True)
df["username"] = email_parts[0]
df["domain"] = email_parts[1]

## Categorical data
df["category"] = pd.Categorical(
    ["low", "medium", "high", "low", "high"],
    categories=["low", "medium", "high"],
    ordered=True
)
print(df["category"].cat.codes)  # integer encoding
`

## 12.11 Common Pitfalls

`python

## Pitfall 1: Chained indexing
df = pd.DataFrame({"A": [1, 2, 3], "B": [4, 5, 6]})

## BAD: df[df["A"] > 1]["B"] = 99  # SettingWithCopyWarning

## GOOD: df.loc[df["A"] > 1, "B"] = 99

## Pitfall 2: Assuming inplace modifies the original
df2 = df.drop("A", axis=1)  # returns new DataFrame

## df.drop("A", axis=1, inplace=True)  # modifies original

## Pitfall 3: NaN comparison
s = pd.Series([1, np.nan, 3])

## BAD: s[s == np.nan]  # returns empty!

## GOOD: s[s.isna()]

## GOOD: s[s.notna()]

## Pitfall 4: Setting with copy warning
df = pd.DataFrame({"A": [1, 2], "B": [3, 4]})
subset = df[df["A"] > 0]  # could be view or copy

## subset["C"] = 99  # SettingWithCopyWarning

## Use .copy() explicitly: subset = df[df["A"] > 0].copy()

## Pitfall 5: Forgetting to specify index in merge
pd.merge(df1, df2)  # merges on common columns by default

## Always specify on= parameter explicitly

## Pitfall 6: Type coercion
s = pd.Series(["1", "2", "three"])

## s.astype(int)  # ValueError: invalid literal for int()

## Use pd.to_numeric(s, errors="coerce") for safe conversion
`

## 12.12 Performance Tips

`python

## 1. Use vectorized operations over apply
df = pd.DataFrame({"x": np.random.randn(10000)})

## Slow: df["y"] = df["x"].apply(lambda v: v ** 2)

## Fast: df["y"] = df["x"] ** 2

## 2. Use category dtype for strings with few unique values
df["city"] = pd.Categorical(df["city"])  # saves memory

## 3. Filter early, transform late

## BAD: df.assign(...).query(...)

## GOOD: df.query(...).assign(...)

## 4. Use .values or .to_numpy() for NumPy operations
arr = df["column"].to_numpy()  # numpy array, faster than Series

## 5. Specify column types on read
df = pd.read_csv("data.csv", dtype={"id": "int32", "value": "float32"})

## 6. Use in-place ops when possible
df.sort_values("col", inplace=True)  # avoids copy

## 7. Index for faster lookups
df.set_index("id", inplace=True)

## df.loc[42] is O(1) vs df[df.id == 42] is O(n)
`

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

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 01-python-programming. When would you choose one approach over another?
2. Design a system that efficiently handles 01-python-programming at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 01-python-programming. What was your approach and what was the result?
2. How would you explain 01-python-programming to a non-technical stakeholder?

#### Microsoft Style
1. How does 01-python-programming integrate with enterprise systems and cloud architectures?
2. What are the security implications of 01-python-programming?

#### NVIDIA Style
1. How would you optimize 01-python-programming for GPU-accelerated computing?
2. What parallel processing patterns apply to 01-python-programming?

#### AI Startup Style
1. How would you implement 01-python-programming in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 01-python-programming?

### Resume Tips
- **Technical Skills**: List 01-python-programming under relevant technical skills
- **Project Description**: "Implemented 01-python-programming to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 01-python-programming in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 01-python-programming
- [ ] Practice 3-5 problems related to 01-python-programming
- [ ] Prepare 2 real-world examples of using 01-python-programming
- [ ] Know the time/space complexity of common 01-python-programming operations
- [ ] Have questions ready about how the company uses 01-python-programming> **Next**: [13 � Pandas Advanced ?](13-pandas-advanced.md)


## Difficulty Level

**Level**: Beginner
**Estimated Study Time**: 30-45 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to Python Programming fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master pandas basics?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

Understanding the evolution of pandas basics helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding pandas basics at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of pandas basics like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply pandas basics concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of pandas basics?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply pandas basics in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (12 minutes)
**Day 2**: Complete exercises and practice (12 minutes)
**Day 3**: Review flashcards and take quiz (6 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying pandas basics to specific use cases, consider:
- Adapting general principles to your specific domain
- Performance optimization for your target hardware
- Cost considerations for production deployment
- Monitoring and observability in production