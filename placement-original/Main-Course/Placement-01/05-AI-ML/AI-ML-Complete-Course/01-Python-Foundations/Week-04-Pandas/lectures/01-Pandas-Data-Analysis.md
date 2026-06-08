# Week 4: Pandas Data Analysis

## Learning Objectives
- Master DataFrames
- Understand Data Cleaning
- Apply Grouping
- Practice Merging

## 1. DataFrames

### Introduction
DataFrames fundamentals and core concepts.

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Basic example
data = {'Name': ['Alice', 'Bob', 'Charlie'], 'Age': [25, 30, 35]}
df = pd.DataFrame(data)
print(df)
```

### Key Concepts
- Creating DataFrames from various sources
- Indexing and selecting data
- Data types and conversion

## 2. Data Cleaning

### Overview
Data cleaning methods and applications.

```python
# Handle missing values
df_clean = df.dropna()
df_filled = df.fillna(0)

# Remove duplicates
df_unique = df.drop_duplicates()
```

## 3. Grouping

### Practical Applications
- Group by operations
- Aggregation functions
- Split-apply-combine pattern

```python
# Group by example
grouped = df.groupby('Category').mean()
```

## 4. Merging

### Hands-on Practice
Complete exercises and projects to master merging operations.

```python
# Merge DataFrames
merged = pd.merge(df1, df2, on='key')
```

## Summary
This week covered:
- DataFrames
- Data Cleaning
- Grouping
- Merging