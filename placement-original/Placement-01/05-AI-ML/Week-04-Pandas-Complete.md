# Week 4: Pandas - Data Manipulation & Analysis

## 📚 Learning Objectives
By the end of this week, you will:
- Master Pandas DataFrames and Series
- Perform data cleaning and transformation
- Handle missing data effectively
- Conduct exploratory data analysis (EDA)
- Merge, join, and group datasets

---

## Day 1-2: Pandas Fundamentals

### Series and DataFrames

```python
import pandas as pd
import numpy as np

# Creating Series
series = pd.Series([10, 20, 30, 40, 50])
print(series)

# Series with custom index
indexed_series = pd.Series([10, 20, 30], index=['a', 'b', 'c'])
print(indexed_series['b'])  # 20

# Series from dictionary
dict_series = pd.Series({'name': 'John', 'age': 30, 'city': 'NYC'})

# Creating DataFrames
data = {
    'name': ['Alice', 'Bob', 'Charlie', 'David'],
    'age': [25, 30, 35, 40],
    'city': ['NYC', 'LA', 'Chicago', 'Houston'],
    'salary': [50000, 60000, 70000, 80000]
}
df = pd.DataFrame(data)
print(df)

# From list of dictionaries
data_list = [
    {'name': 'Alice', 'age': 25},
    {'name': 'Bob', 'age': 30},
    {'name': 'Charlie', 'age': 35}
]
df2 = pd.DataFrame(data_list)

# From NumPy array
arr = np.random.randn(5, 3)
df3 = pd.DataFrame(arr, columns=['A', 'B', 'C'])
```

### Basic DataFrame Operations

```python
# View data
print(df.head())      # First 5 rows
print(df.tail(3))     # Last 3 rows
print(df.info())      # Data types and info
print(df.describe())  # Statistical summary

# DataFrame properties
print(df.shape)       # (4, 4)
print(df.columns)     # Column names
print(df.index)       # Row indices
print(df.dtypes)      # Data types

# Selecting columns
print(df['name'])                    # Single column (Series)
print(df[['name', 'age']])          # Multiple columns (DataFrame)

# Selecting rows
print(df.iloc[0])                    # First row by position
print(df.iloc[0:2])                  # First 2 rows
print(df.loc[0])                     # First row by label

# Selecting specific cells
print(df.iloc[0, 1])                # Row 0, Column 1
print(df.loc[0, 'age'])             # Row 0, 'age' column
print(df.at[0, 'age'])              # Faster single value access
```

### Filtering and Conditional Selection

```python
# Boolean filtering
high_salary = df[df['salary'] > 60000]
print(high_salary)

# Multiple conditions
filtered = df[(df['age'] > 25) & (df['salary'] < 75000)]
print(filtered)

# Using query method
result = df.query('age > 30 and salary > 70000')

# isin method
cities = df[df['city'].isin(['NYC', 'LA'])]

# String operations
df_filtered = df[df['name'].str.startswith('A')]
df_contains = df[df['name'].str.contains('li', case=False)]
```

### Adding and Removing Data

```python
# Add new column
df['bonus'] = df['salary'] * 0.1
df['total_comp'] = df['salary'] + df['bonus']

# Add column based on condition
df['senior'] = df['age'] > 30

# Add new row
new_row = pd.DataFrame([{'name': 'Eve', 'age': 28, 'city': 'Boston', 'salary': 55000}])
df = pd.concat([df, new_row], ignore_index=True)

# Drop column
df_dropped = df.drop('bonus', axis=1)
df_dropped = df.drop(columns=['bonus', 'total_comp'])

# Drop row
df_no_first = df.drop(0, axis=0)  # Drop first row
df_no_last = df.drop(df.index[-1])

# Drop duplicates
df_unique = df.drop_duplicates(subset=['name'])
```

---

## Day 3-4: Data Cleaning & Transformation

### Handling Missing Data

```python
# Create dataframe with missing values
data = {
    'A': [1, 2, np.nan, 4],
    'B': [5, np.nan, np.nan, 8],
    'C': [9, 10, 11, 12]
}
df = pd.DataFrame(data)

# Detect missing values
print(df.isnull())       # Boolean mask
print(df.isnull().sum()) # Count per column
print(df.notnull())      # Opposite

# Drop missing values
df_dropped = df.dropna()              # Drop any row with NaN
df_dropped_col = df.dropna(axis=1)    # Drop any column with NaN
df_thresh = df.dropna(thresh=2)       # Keep rows with at least 2 non-NaN

# Fill missing values
df_filled = df.fillna(0)                    # Fill with 0
df_ffill = df.fillna(method='ffill')        # Forward fill
df_bfill = df.fillna(method='bfill')        # Backward fill
df_mean = df.fillna(df.mean())              # Fill with column mean

# Interpolate
df_interp = df.interpolate()                # Linear interpolation

# Replace values
df_replaced = df.replace(np.nan, -999)
df_replaced = df.replace({1: 100, 2: 200})  # Multiple replacements
```

### Data Type Conversion

```python
# Convert data types
df = pd.DataFrame({
    'A': ['1', '2', '3'],
    'B': ['4.5', '5.5', '6.5'],
    'C': ['2020-01-01', '2020-02-01', '2020-03-01']
})

# Convert to numeric
df['A'] = pd.to_numeric(df['A'])
df['B'] = df['B'].astype(float)

# Convert to datetime
df['C'] = pd.to_datetime(df['C'])

# Convert to categorical
df['Category'] = pd.Categorical(['A', 'B', 'A', 'C'])

# Handle conversion errors
df['A'] = pd.to_numeric(df['A'], errors='coerce')  # NaN for errors
```

### String Operations

```python
df = pd.DataFrame({
    'text': ['  Hello World  ', 'PYTHON', 'data science', 'Machine Learning']
})

# Basic string methods
df['lower'] = df['text'].str.lower()
df['upper'] = df['text'].str.upper()
df['title'] = df['text'].str.title()
df['stripped'] = df['text'].str.strip()

# String methods
df['length'] = df['text'].str.len()
df['contains_python'] = df['text'].str.contains('PYTHON', case=False)
df['starts_with_h'] = df['text'].str.startswith('H', na=False)

# Replace and split
df['replaced'] = df['text'].str.replace('a', 'X')
df['split'] = df['text'].str.split()

# Extract patterns (regex)
df['first_word'] = df['text'].str.extract(r'(\w+)')
```

### Sorting and Ranking

```python
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie', 'David'],
    'age': [25, 30, 25, 40],
    'salary': [60000, 50000, 70000, 80000]
})

# Sort by single column
df_sorted = df.sort_values('age')
df_desc = df.sort_values('salary', ascending=False)

# Sort by multiple columns
df_multi_sort = df.sort_values(['age', 'salary'], ascending=[True, False])

# Sort by index
df_index_sorted = df.sort_index()

# Ranking
df['salary_rank'] = df['salary'].rank()
df['age_rank'] = df['age'].rank(method='dense')  # No gaps in ranks
```

---

## Day 5-6: Advanced Operations

### GroupBy and Aggregation

```python
# Sample sales data
sales = pd.DataFrame({
    'region': ['East', 'East', 'West', 'West', 'North', 'North'],
    'product': ['A', 'B', 'A', 'B', 'A', 'B'],
    'sales': [100, 150, 200, 175, 120, 140],
    'quantity': [10, 15, 20, 17, 12, 14]
})

# Basic groupby
grouped = sales.groupby('region')
print(grouped['sales'].sum())

# Multiple aggregations
agg_result = sales.groupby('region').agg({
    'sales': ['sum', 'mean', 'max'],
    'quantity': ['sum', 'mean']
})
print(agg_result)

# Group by multiple columns
multi_group = sales.groupby(['region', 'product'])['sales'].sum()
print(multi_group)

# Custom aggregation
def range_calc(x):
    return x.max() - x.min()

sales.groupby('region')['sales'].agg(['sum', 'mean', range_calc])

# Transform (keep original shape)
sales['sales_pct'] = sales.groupby('region')['sales'].transform(lambda x: x / x.sum())

# Filter groups
high_sales = sales.groupby('region').filter(lambda x: x['sales'].sum() > 300)
```

### Pivot Tables and Cross-tabulation

```python
# Pivot table
pivot = sales.pivot_table(
    values='sales',
    index='region',
    columns='product',
    aggfunc='sum',
    fill_value=0
)
print(pivot)

# Multiple aggregations
pivot_multi = sales.pivot_table(
    values='sales',
    index='region',
    columns='product',
    aggfunc=['sum', 'mean']
)

# Cross-tabulation
pd.crosstab(sales['region'], sales['product'], values=sales['sales'], aggfunc='sum')

# Melt (unpivot)
melted = pivot.reset_index().melt(
    id_vars='region',
    var_name='product',
    value_name='sales'
)
```

### Merging and Joining

```python
# Sample dataframes
df1 = pd.DataFrame({
    'key': ['A', 'B', 'C', 'D'],
    'value1': [1, 2, 3, 4]
})

df2 = pd.DataFrame({
    'key': ['B', 'C', 'D', 'E'],
    'value2': [5, 6, 7, 8]
})

# Inner join (intersection)
inner = pd.merge(df1, df2, on='key', how='inner')
print(inner)  # B, C, D

# Left join
left = pd.merge(df1, df2, on='key', how='left')
print(left)  # All from df1

# Right join
right = pd.merge(df1, df2, on='key', how='right')
print(right)  # All from df2

# Outer join (union)
outer = pd.merge(df1, df2, on='key', how='outer')
print(outer)  # All records

# Merge on multiple columns
df3 = pd.DataFrame({
    'key1': ['A', 'B', 'C'],
    'key2': [1, 2, 3],
    'value': [10, 20, 30]
})

df4 = pd.DataFrame({
    'key1': ['A', 'B', 'D'],
    'key2': [1, 2, 4],
    'value': [100, 200, 300]
})

merged_multi = pd.merge(df3, df4, on=['key1', 'key2'], suffixes=('_left', '_right'))

# Concatenate
concatenated = pd.concat([df1, df2], ignore_index=True)
```

### Date/Time Operations

```python
# Create date range
dates = pd.date_range('2024-01-01', periods=365, freq='D')

# DataFrame with dates
df = pd.DataFrame({
    'date': pd.date_range('2024-01-01', periods=100),
    'value': np.random.randn(100)
})

# Extract date components
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day'] = df['date'].dt.day
df['dayofweek'] = df['date'].dt.dayofweek
df['quarter'] = df['date'].dt.quarter

# String formatting
df['date_str'] = df['date'].dt.strftime('%Y-%m-%d')

# Set date as index
df.set_index('date', inplace=True)

# Resample time series
monthly = df['value'].resample('M').sum()    # Monthly sum
weekly_mean = df['value'].resample('W').mean()  # Weekly average

# Rolling window
df['rolling_mean'] = df['value'].rolling(window=7).mean()
df['rolling_std'] = df['value'].rolling(window=7).std()

# Shift (lag/lead)
df['prev_value'] = df['value'].shift(1)      # Previous day
df['next_value'] = df['value'].shift(-1)     # Next day
```

---

## Day 7: Real-World Projects

### Project 1: Customer Data Analysis

```python
import pandas as pd
import numpy as np

# Generate sample customer data
np.random.seed(42)
customers = pd.DataFrame({
    'customer_id': range(1, 1001),
    'name': [f'Customer_{i}' for i in range(1, 1001)],
    'age': np.random.randint(18, 70, 1000),
    'gender': np.random.choice(['M', 'F'], 1000),
    'city': np.random.choice(['NYC', 'LA', 'Chicago', 'Houston', 'Phoenix'], 1000),
    'signup_date': pd.date_range('2020-01-01', periods=1000, freq='8H'),
    'total_purchases': np.random.randint(0, 50, 1000),
    'total_spent': np.random.uniform(100, 10000, 1000).round(2)
})

# Analysis tasks
class CustomerAnalyzer:
    def __init__(self, data):
        self.df = data.copy()
        self.prepare_data()
    
    def prepare_data(self):
        """Clean and prepare data"""
        # Remove duplicates
        self.df.drop_duplicates(subset='customer_id', inplace=True)
        
        # Calculate metrics
        self.df['avg_purchase_value'] = self.df['total_spent'] / self.df['total_purchases']
        self.df['avg_purchase_value'].fillna(0, inplace=True)
        
        # Extract date features
        self.df['signup_year'] = self.df['signup_date'].dt.year
        self.df['signup_month'] = self.df['signup_date'].dt.month
        
        # Categorize customers
        self.df['customer_segment'] = pd.cut(
            self.df['total_spent'],
            bins=[0, 1000, 5000, 10000],
            labels=['Low', 'Medium', 'High']
        )
    
    def demographic_analysis(self):
        """Analyze demographics"""
        return {
            'age_distribution': self.df['age'].describe(),
            'gender_counts': self.df['gender'].value_counts(),
            'city_distribution': self.df['city'].value_counts(),
            'avg_age_by_gender': self.df.groupby('gender')['age'].mean()
        }
    
    def purchase_analysis(self):
        """Analyze purchase behavior"""
        return {
            'total_revenue': self.df['total_spent'].sum(),
            'avg_customer_value': self.df['total_spent'].mean(),
            'segment_revenue': self.df.groupby('customer_segment')['total_spent'].sum(),
            'top_10_customers': self.df.nlargest(10, 'total_spent')[['name', 'total_spent']]
        }
    
    def cohort_analysis(self):
        """Analyze by signup cohort"""
        cohort = self.df.groupby(['signup_year', 'signup_month']).agg({
            'customer_id': 'count',
            'total_spent': 'sum',
            'total_purchases': 'sum'
        }).rename(columns={'customer_id': 'new_customers'})
        
        return cohort
    
    def city_analysis(self):
        """City-wise analysis"""
        return self.df.groupby('city').agg({
            'customer_id': 'count',
            'total_spent': ['sum', 'mean'],
            'total_purchases': 'sum',
            'age': 'mean'
        })

# Run analysis
analyzer = CustomerAnalyzer(customers)
print("Demographics:", analyzer.demographic_analysis())
print("\nPurchase Analysis:", analyzer.purchase_analysis())
print("\nCohort Analysis:\n", analyzer.cohort_analysis())
print("\nCity Analysis:\n", analyzer.city_analysis())
```

### Project 2: Sales Data Processing Pipeline

```python
class SalesDataProcessor:
    """Complete ETL pipeline for sales data"""
    
    def __init__(self, filepath=None):
        if filepath:
            self.df = pd.read_csv(filepath)
        else:
            # Generate sample data
            self.df = self._generate_sample_data()
    
    def _generate_sample_data(self, n=5000):
        """Generate realistic sales data"""
        np.random.seed(42)
        return pd.DataFrame({
            'order_id': range(1, n + 1),
            'order_date': pd.date_range('2023-01-01', periods=n, freq='3H'),
            'customer_id': np.random.randint(1, 500, n),
            'product': np.random.choice(['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'], n),
            'category': np.random.choice(['Electronics', 'Accessories'], n),
            'quantity': np.random.randint(1, 10, n),
            'unit_price': np.random.uniform(50, 2000, n).round(2),
            'discount': np.random.choice([0, 0.05, 0.10, 0.15, 0.20], n),
            'shipping_cost': np.random.uniform(5, 50, n).round(2),
            'region': np.random.choice(['North', 'South', 'East', 'West'], n)
        })
    
    def clean_data(self):
        """Clean and validate data"""
        # Remove duplicates
        initial_count = len(self.df)
        self.df.drop_duplicates(subset='order_id', inplace=True)
        print(f"Removed {initial_count - len(self.df)} duplicates")
        
        # Handle missing values
        self.df.fillna(method='ffill', inplace=True)
        
        # Data validation
        self.df = self.df[self.df['quantity'] > 0]
        self.df = self.df[self.df['unit_price'] > 0]
        
        return self
    
    def transform_data(self):
        """Transform and create new features"""
        # Calculate totals
        self.df['subtotal'] = self.df['quantity'] * self.df['unit_price']
        self.df['discount_amount'] = self.df['subtotal'] * self.df['discount']
        self.df['total'] = self.df['subtotal'] - self.df['discount_amount'] + self.df['shipping_cost']
        
        # Extract date features
        self.df['year'] = self.df['order_date'].dt.year
        self.df['month'] = self.df['order_date'].dt.month
        self.df['day'] = self.df['order_date'].dt.day
        self.df['dayofweek'] = self.df['order_date'].dt.day_name()
        self.df['quarter'] = self.df['order_date'].dt.quarter
        
        # Categorize orders
        self.df['order_size'] = pd.cut(
            self.df['total'],
            bins=[0, 100, 500, 1000, float('inf')],
            labels=['Small', 'Medium', 'Large', 'Extra Large']
        )
        
        return self
    
    def generate_insights(self):
        """Generate business insights"""
        insights = {}
        
        # Revenue metrics
        insights['total_revenue'] = self.df['total'].sum()
        insights['avg_order_value'] = self.df['total'].mean()
        insights['total_orders'] = len(self.df)
        
        # Product performance
        insights['product_sales'] = self.df.groupby('product')['total'].sum().sort_values(ascending=False)
        
        # Regional analysis
        insights['regional_revenue'] = self.df.groupby('region')['total'].sum().sort_values(ascending=False)
        
        # Time-based trends
        insights['monthly_revenue'] = self.df.groupby(['year', 'month'])['total'].sum()
        insights['daily_trends'] = self.df.groupby('dayofweek')['total'].mean()
        
        # Customer metrics
        insights['top_customers'] = self.df.groupby('customer_id')['total'].sum().nlargest(10)
        
        return insights
    
    def export_report(self, filename='sales_report.xlsx'):
        """Export comprehensive report to Excel"""
        with pd.ExcelWriter(filename, engine='openpyxl') as writer:
            # Summary sheet
            summary = pd.DataFrame({
                'Metric': ['Total Revenue', 'Total Orders', 'Average Order Value'],
                'Value': [
                    self.df['total'].sum(),
                    len(self.df),
                    self.df['total'].mean()
                ]
            })
            summary.to_excel(writer, sheet_name='Summary', index=False)
            
            # Product analysis
            product_analysis = self.df.groupby('product').agg({
                'order_id': 'count',
                'quantity': 'sum',
                'total': 'sum'
            }).rename(columns={'order_id': 'orders'})
            product_analysis.to_excel(writer, sheet_name='Products')
            
            # Regional analysis
            regional = self.df.groupby('region').agg({
                'order_id': 'count',
                'total': ['sum', 'mean']
            })
            regional.to_excel(writer, sheet_name='Regions')
            
            # Monthly trends
            monthly = self.df.groupby(['year', 'month']).agg({
                'order_id': 'count',
                'total': 'sum'
            })
            monthly.to_excel(writer, sheet_name='Monthly Trends')
        
        print(f"Report exported to {filename}")

# Usage
processor = SalesDataProcessor()
processor.clean_data().transform_data()
insights = processor.generate_insights()

print(f"Total Revenue: ${insights['total_revenue']:,.2f}")
print(f"\nTop Products:\n{insights['product_sales']}")
print(f"\nRegional Revenue:\n{insights['regional_revenue']}")
# processor.export_report()
```

### Project 3: Data Quality Checker

```python
class DataQualityChecker:
    """Comprehensive data quality assessment"""
    
    def __init__(self, df):
        self.df = df
        self.report = {}
    
    def check_missing_values(self):
        """Check for missing values"""
        missing = self.df.isnull().sum()
        missing_pct = (missing / len(self.df)) * 100
        
        self.report['missing_values'] = pd.DataFrame({
            'missing_count': missing,
            'missing_percentage': missing_pct
        })
        return self
    
    def check_duplicates(self):
        """Check for duplicate rows"""
        duplicates = self.df.duplicated().sum()
        self.report['duplicate_rows'] = duplicates
        return self
    
    def check_data_types(self):
        """Validate data types"""
        self.report['data_types'] = self.df.dtypes
        return self
    
    def check_outliers(self, columns=None):
        """Detect outliers using IQR method"""
        if columns is None:
            columns = self.df.select_dtypes(include=[np.number]).columns
        
        outliers = {}
        for col in columns:
            Q1 = self.df[col].quantile(0.25)
            Q3 = self.df[col].quantile(0.75)
            IQR = Q3 - Q1
            
            lower_bound = Q1 - 1.5 * IQR
            upper_bound = Q3 + 1.5 * IQR
            
            outlier_count = ((self.df[col] < lower_bound) | (self.df[col] > upper_bound)).sum()
            outliers[col] = outlier_count
        
        self.report['outliers'] = pd.Series(outliers)
        return self
    
    def check_unique_values(self):
        """Count unique values per column"""
        self.report['unique_values'] = self.df.nunique()
        return self
    
    def generate_summary(self):
        """Generate complete quality report"""
        print("=" * 50)
        print("DATA QUALITY REPORT")
        print("=" * 50)
        
        print(f"\nDataset Shape: {self.df.shape}")
        print(f"\nMissing Values:\n{self.report.get('missing_values', 'Not checked')}")
        print(f"\nDuplicate Rows: {self.report.get('duplicate_rows', 'Not checked')}")
        print(f"\nOutliers:\n{self.report.get('outliers', 'Not checked')}")
        print(f"\nUnique Values:\n{self.report.get('unique_values', 'Not checked')}")
        
        return self.report

# Usage
df_test = pd.DataFrame({
    'A': [1, 2, np.nan, 4, 5, 100],
    'B': [10, 20, 30, 40, 50, 60],
    'C': ['x', 'y', 'z', 'x', 'y', 'z']
})

checker = DataQualityChecker(df_test)
checker.check_missing_values().check_duplicates().check_outliers().check_unique_values()
report = checker.generate_summary()
```

---

## 📝 Practice Exercises

1. **Data Cleaning**: Load a messy CSV, handle missing values, remove duplicates, fix data types
2. **GroupBy**: Analyze sales by region, product, and time period
3. **Merging**: Combine customer data with order data, perform left/right/outer joins
4. **Time Series**: Analyze stock prices, calculate moving averages, detect trends
5. **Pivot Tables**: Create multi-dimensional sales analysis with pivot tables

---

## 🎯 Week 4 Assessment

**Quiz Questions:**
1. Difference between `loc` and `iloc`?
2. How to handle missing data in Pandas?
3. Explain GroupBy-Split-Apply-Combine paradigm
4. What is the difference between `merge` and `concat`?
5. How to detect and handle outliers?

**Coding Challenge:**
Build a complete **E-Commerce Analytics Dashboard** that:
- Loads transaction data (CSV)
- Cleans and validates data
- Performs customer segmentation
- Analyzes product performance
- Creates time-series trends
- Exports comprehensive Excel report

**Expected Deliverables:**
- Python script with complete analysis
- Sample dataset (CSV)
- Generated Excel report
- README with insights

---

## 📚 Additional Resources

- Pandas Official Documentation: https://pandas.pydata.org/docs/
- "Python for Data Analysis" by Wes McKinney (Pandas creator)
- Kaggle Pandas Micro-Courses
- Practice: Kaggle datasets (Titanic, Housing Prices)

**Next Week**: Machine Learning Fundamentals with Scikit-learn! 🤖
