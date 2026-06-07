# Project: Sales Analytics Dashboard

**Duration:** Week 4  
**Skills:** DataFrames, Data Cleaning, Grouping, Merging  
**Time:** 8-12 hours

## Project Overview

Build comprehensive sales analytics system demonstrating mastery of Pandas operations.

## Learning Objectives

- Apply DataFrames in real scenarios
- Implement Data Cleaning techniques
- Master Grouping concepts
- Practice Merging skills

## Requirements

### Core Features
1. **DataFrames Implementation**
   - Load multiple data sources
   - Handle different file formats
   - Data type optimization

2. **Data Cleaning Integration**
   - Missing value handling
   - Duplicate removal
   - Data validation

3. **Grouping Application**
   - Multi-level grouping
   - Custom aggregations
   - Pivot table creation

4. **Merging Enhancement**
   - Complex join operations
   - Data relationship mapping
   - Merge validation

### Technical Specs

```
project-week-04-pandas/
├── src/
│   ├── main.py
│   ├── data_loader.py
│   ├── cleaner.py
│   └── analyzer.py
├── data/
│   ├── sales.csv
│   ├── products.csv
│   └── customers.csv
├── tests/
├── docs/
└── requirements.txt
```

### Implementation

```python
# main.py
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

class SalesAnalytics:
    def __init__(self):
        self.sales_data = None
        self.products_data = None
        self.customers_data = None
    
    def load_data(self):
        """Load all data sources"""
        self.sales_data = pd.read_csv('data/sales.csv')
        self.products_data = pd.read_csv('data/products.csv')
        self.customers_data = pd.read_csv('data/customers.csv')
    
    def clean_data(self):
        """Clean and preprocess data"""
        # Handle missing values
        self.sales_data = self.sales_data.dropna()
        
        # Remove duplicates
        self.sales_data = self.sales_data.drop_duplicates()
        
        # Data type conversion
        self.sales_data['Date'] = pd.to_datetime(self.sales_data['Date'])
    
    def analyze(self):
        """Perform comprehensive analysis"""
        # Merge datasets
        merged_data = pd.merge(self.sales_data, self.products_data, on='ProductID')
        merged_data = pd.merge(merged_data, self.customers_data, on='CustomerID')
        
        # Group analysis
        monthly_sales = merged_data.groupby(merged_data['Date'].dt.month).agg({
            'Sales': ['sum', 'mean'],
            'Quantity': 'sum'
        })
        
        return monthly_sales
    
    def generate_report(self):
        """Generate comprehensive report"""
        analysis_results = self.analyze()
        
        # Create visualizations
        plt.figure(figsize=(12, 8))
        analysis_results['Sales']['sum'].plot(kind='bar')
        plt.title('Monthly Sales Summary')
        plt.xlabel('Month')
        plt.ylabel('Total Sales')
        plt.savefig('monthly_sales.png')
        
        return analysis_results

if __name__ == "__main__":
    analytics = SalesAnalytics()
    analytics.load_data()
    analytics.clean_data()
    results = analytics.generate_report()
    print("Analysis complete!")
```

## Sample Data Structure

### sales.csv
```csv
SaleID,ProductID,CustomerID,Date,Quantity,Sales
1,101,1001,2024-01-15,2,100.00
2,102,1002,2024-01-16,1,75.50
```

### products.csv
```csv
ProductID,ProductName,Category,Price
101,Laptop,Electronics,500.00
102,Mouse,Electronics,25.00
```

### customers.csv
```csv
CustomerID,CustomerName,City,Region
1001,Alice Johnson,New York,North
1002,Bob Smith,Los Angeles,West
```

## Deliverables

1. Complete source code with modular design
2. Sample datasets for testing
3. Comprehensive analysis report
4. Data visualizations
5. Technical documentation

## Expected Output

```
Sales Analytics Dashboard
========================
Data loaded: 1000 sales records
Data cleaned: 950 valid records
Analysis complete:

Monthly Sales Summary:
Month 1: $45,230 (avg: $452.30)
Month 2: $52,180 (avg: $521.80)
Month 3: $48,950 (avg: $489.50)

Top Products:
1. Laptop: $25,000
2. Smartphone: $18,500
3. Tablet: $12,300

Regional Performance:
North: $35,000 (38%)
South: $28,000 (31%)
East: $18,000 (20%)
West: $10,000 (11%)

Visualizations saved:
- monthly_sales.png
- product_performance.png
- regional_analysis.png
```

## Grading (100 points)

- Implementation: 40%
- Code Quality: 25%
- Analysis: 20%
- Documentation: 15%

## Timeline

- Day 1-2: Data loading and cleaning
- Day 3-4: Analysis implementation
- Day 5-6: Visualization and reporting
- Day 7: Documentation and testing

## Extension Ideas

1. **Interactive Dashboard**: Use Streamlit or Dash
2. **Advanced Analytics**: Statistical analysis and forecasting
3. **Database Integration**: Connect to SQL databases
4. **Real-time Updates**: Live data processing