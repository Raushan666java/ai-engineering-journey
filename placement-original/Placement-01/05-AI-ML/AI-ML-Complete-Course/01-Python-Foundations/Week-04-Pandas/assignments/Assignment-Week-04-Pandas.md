# Assignment: Pandas Data Analysis

**Due:** End of Week 4  
**Points:** 100  
**Time:** 4-5 hours

## Problem 1: DataFrames Implementation (25 points)

Create a sales analysis system using DataFrames.

**Requirements:**
- Load CSV data into DataFrame
- Perform basic data exploration
- Handle different data types
- Create summary statistics

```python
import pandas as pd

def analyze_sales_data():
    # Load data
    df = pd.read_csv('sales_data.csv')
    
    # Basic info
    print(df.info())
    print(df.describe())
    
    # Your analysis here
    pass
```

## Problem 2: Data Cleaning Analysis (25 points)

Clean and preprocess a messy dataset.

**Requirements:**
- Handle missing values appropriately
- Remove or fix duplicates
- Standardize data formats
- Validate data quality

## Problem 3: Grouping Application (25 points)

Perform advanced grouping operations on business data.

**Requirements:**
- Group by multiple columns
- Apply various aggregation functions
- Create pivot tables
- Generate insights from grouped data

## Problem 4: Merging Project (25 points)

Combine multiple datasets using different merge strategies.

**Requirements:**
- Inner, outer, left, right joins
- Handle merge conflicts
- Validate merge results
- Create comprehensive analysis

## Submission
Submit as `lastname_firstname_week_04_pandas.py` with documentation.

## Grading
- Correctness: 40%
- Code Quality: 30%
- Analysis: 20%
- Documentation: 10%