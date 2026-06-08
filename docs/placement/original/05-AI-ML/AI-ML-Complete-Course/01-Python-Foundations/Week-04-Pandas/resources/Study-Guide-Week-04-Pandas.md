# Week 4 Study Guide: Pandas Data Analysis

## Overview
Complete study guide for Pandas concepts and applications.

## Learning Objectives
- [ ] Understand DataFrames
- [ ] Master Data Cleaning
- [ ] Apply Grouping
- [ ] Practice Merging

## Key Concepts

### 1. DataFrames
**Definition:** Two-dimensional labeled data structure
**Applications:** Data analysis, manipulation, storage
**Best Practices:** Efficient indexing, memory optimization

```python
import pandas as pd

# Create DataFrame
df = pd.DataFrame({
    'Name': ['Alice', 'Bob'],
    'Age': [25, 30]
})

# Basic operations
print(df.head())
print(df.info())
print(df.describe())
```

### 2. Data Cleaning
**Overview:** Process of fixing or removing incorrect data
**Methods:** Handle missing values, remove duplicates
**Common Issues:** Inconsistent formats, outliers

```python
# Handle missing values
df_clean = df.dropna()  # Remove NaN
df_filled = df.fillna(0)  # Fill with value

# Remove duplicates
df_unique = df.drop_duplicates()
```

### 3. Grouping
**Theory:** Split-apply-combine operations
**Practice:** Group by columns, apply functions
**Examples:** Aggregations, transformations

```python
# Group by operations
grouped = df.groupby('Category')
result = grouped.agg({
    'Sales': ['sum', 'mean'],
    'Quantity': 'count'
})
```

### 4. Merging
**Advanced Topics:** Join operations between DataFrames
**Integration:** Combine multiple data sources
**Future Trends:** Efficient large-scale merging

```python
# Merge DataFrames
merged = pd.merge(df1, df2, on='key', how='inner')
```

## Code Examples

### Basic Implementation
```python
import pandas as pd
import numpy as np

# Load data
df = pd.read_csv('data.csv')

# Basic analysis
print(f"Shape: {df.shape}")
print(f"Columns: {df.columns.tolist()}")
print(df.dtypes)
```

### Advanced Implementation
```python
class DataAnalyzer:
    def __init__(self, data):
        self.data = data
    
    def clean(self):
        return self.data.dropna()
    
    def analyze(self):
        return self.data.describe()
```

## Practice Problems

### Easy (1-2 hours)
1. Load CSV file into DataFrame
2. Basic data exploration
3. Simple filtering operations

### Medium (3-4 hours)
1. Data cleaning pipeline
2. Multi-level grouping
3. Complex merge operations

### Hard (5-6 hours)
1. Large dataset optimization
2. Advanced aggregations
3. Performance tuning

## Study Tips

### Preparation
- [ ] Install pandas and dependencies
- [ ] Download sample datasets
- [ ] Set up Jupyter notebook

### Practice
- [ ] Work through examples
- [ ] Complete lab exercises
- [ ] Build mini-projects

### Assessment
- [ ] Review key concepts
- [ ] Practice coding problems
- [ ] Time yourself on exercises

## Resources

### Documentation
- [Pandas Official Docs](https://pandas.pydata.org/docs/)
- [10 Minutes to Pandas](https://pandas.pydata.org/docs/user_guide/10min.html)
- [Pandas Cookbook](https://pandas.pydata.org/docs/user_guide/cookbook.html)

### Tools
- Jupyter Notebook
- Google Colab
- VS Code with Python extension

## Quick Reference

### Essential Functions
```python
# Data loading
pd.read_csv('file.csv')
pd.read_excel('file.xlsx')

# Data exploration
df.head()
df.info()
df.describe()

# Data cleaning
df.dropna()
df.fillna(value)
df.drop_duplicates()

# Grouping
df.groupby('column').agg({'col': 'sum'})

# Merging
pd.merge(df1, df2, on='key')
```

### Important Methods
- **Selection**: `df['col']`, `df.loc[]`, `df.iloc[]`
- **Filtering**: `df[df['col'] > value]`
- **Sorting**: `df.sort_values('col')`
- **Aggregation**: `df.sum()`, `df.mean()`, `df.count()`

## Common Patterns

### Data Loading Pattern
```python
def load_and_validate(filepath):
    df = pd.read_csv(filepath)
    print(f"Loaded {len(df)} rows")
    print(f"Columns: {df.columns.tolist()}")
    return df
```

### Cleaning Pattern
```python
def clean_data(df):
    # Remove missing values
    df = df.dropna()
    
    # Remove duplicates
    df = df.drop_duplicates()
    
    # Validate data types
    df['date'] = pd.to_datetime(df['date'])
    
    return df
```

### Analysis Pattern
```python
def analyze_sales(df):
    # Group by month
    monthly = df.groupby(df['date'].dt.month).agg({
        'sales': ['sum', 'mean'],
        'quantity': 'sum'
    })
    
    return monthly
```

## Assessment Preparation

### What to Expect
- DataFrame creation and manipulation
- Data cleaning operations
- Grouping and aggregation
- Merge operations
- Performance considerations

### Key Topics to Review
1. **DataFrame Basics**: Creation, indexing, selection
2. **Data Cleaning**: Missing values, duplicates, validation
3. **Grouping**: GroupBy operations, aggregations
4. **Merging**: Join types, merge strategies
5. **Performance**: Memory usage, optimization techniques

### Practice Schedule
- **Day 1**: DataFrame basics and operations
- **Day 2**: Data cleaning techniques
- **Day 3**: Grouping and aggregation
- **Day 4**: Merging and joins
- **Day 5**: Comprehensive review and practice