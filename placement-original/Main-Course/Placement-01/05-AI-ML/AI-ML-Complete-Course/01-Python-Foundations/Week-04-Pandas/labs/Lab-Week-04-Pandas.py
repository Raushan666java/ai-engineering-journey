"""
Lab: Pandas Data Analysis
Week 4 - Hands-on Practice
Time: 2-3 hours
"""

print("=== Pandas Data Analysis Lab ===\n")

# Exercise 1: DataFrames
print("Exercise 1: DataFrames")

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Create sample DataFrame
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    'Age': [25, 30, 35, 28, 32],
    'City': ['New York', 'London', 'Tokyo', 'Paris', 'Sydney'],
    'Salary': [50000, 60000, 70000, 55000, 65000]
}

df = pd.DataFrame(data)
print("Sample DataFrame:")
print(df)
print(f"Shape: {df.shape}")
print(f"Columns: {df.columns.tolist()}")

print("\n" + "="*50 + "\n")

# Exercise 2: Data Cleaning
print("Exercise 2: Data Cleaning")

# Create messy data
messy_data = {
    'Name': ['Alice', 'Bob', None, 'Diana', 'Eve', 'Bob'],
    'Age': [25, 30, 35, None, 32, 30],
    'Score': [85.5, 90.0, 78.5, 92.0, 88.0, 90.0]
}

messy_df = pd.DataFrame(messy_data)
print("Messy DataFrame:")
print(messy_df)

# Clean data
cleaned_df = messy_df.dropna()
print("\nAfter removing NaN:")
print(cleaned_df)

# Remove duplicates
unique_df = cleaned_df.drop_duplicates()
print("\nAfter removing duplicates:")
print(unique_df)

print("\n" + "="*50 + "\n")

# Exercise 3: Grouping
print("Exercise 3: Grouping")

# Create sales data
sales_data = {
    'Product': ['A', 'B', 'A', 'C', 'B', 'A', 'C'],
    'Region': ['North', 'South', 'North', 'East', 'South', 'East', 'North'],
    'Sales': [100, 150, 120, 200, 180, 110, 160],
    'Quantity': [10, 15, 12, 20, 18, 11, 16]
}

sales_df = pd.DataFrame(sales_data)
print("Sales DataFrame:")
print(sales_df)

# Group by Product
product_groups = sales_df.groupby('Product').agg({
    'Sales': ['sum', 'mean'],
    'Quantity': 'sum'
})
print("\nGrouped by Product:")
print(product_groups)

print("\n" + "="*50 + "\n")

# Exercise 4: Merging
print("Exercise 4: Merging")

# Create two DataFrames to merge
df1 = pd.DataFrame({
    'ID': [1, 2, 3, 4],
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'Department': ['IT', 'HR', 'Finance', 'IT']
})

df2 = pd.DataFrame({
    'ID': [1, 2, 3, 5],
    'Salary': [50000, 60000, 70000, 55000],
    'Bonus': [5000, 6000, 7000, 5500]
})

print("DataFrame 1:")
print(df1)
print("\nDataFrame 2:")
print(df2)

# Inner merge
inner_merged = pd.merge(df1, df2, on='ID', how='inner')
print("\nInner merge:")
print(inner_merged)

# Outer merge
outer_merged = pd.merge(df1, df2, on='ID', how='outer')
print("\nOuter merge:")
print(outer_merged)

print("\n" + "="*50 + "\n")

# Bonus Exercise: Data Analysis
print("Bonus: Complete Data Analysis")

# Create comprehensive dataset
np.random.seed(42)
analysis_data = {
    'Date': pd.date_range('2024-01-01', periods=100),
    'Product': np.random.choice(['A', 'B', 'C'], 100),
    'Sales': np.random.normal(1000, 200, 100),
    'Customers': np.random.poisson(50, 100)
}

analysis_df = pd.DataFrame(analysis_data)
analysis_df['Month'] = analysis_df['Date'].dt.month

print("Analysis DataFrame (first 10 rows):")
print(analysis_df.head(10))

# Monthly analysis
monthly_stats = analysis_df.groupby('Month').agg({
    'Sales': ['sum', 'mean', 'std'],
    'Customers': 'sum'
}).round(2)

print("\nMonthly Statistics:")
print(monthly_stats)

print("\n" + "="*50 + "\n")
print("=== Lab Complete! ===")
print("You practiced:")
print("- DataFrames creation and manipulation")
print("- Data cleaning techniques")
print("- Grouping and aggregation")
print("- Merging DataFrames")