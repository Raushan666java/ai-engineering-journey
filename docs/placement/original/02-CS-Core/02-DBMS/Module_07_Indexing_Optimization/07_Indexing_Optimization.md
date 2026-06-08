# Module 7: Indexing & Query Optimization

## What are Indexes?

### Definition
- Data structures that improve query performance
- Create shortcuts to find data quickly
- Trade-off: Storage space vs Query speed

### How Indexes Work
- Similar to book index
- Point to actual data location
- Reduce disk I/O operations

## Types of Indexes

### 1. Primary Index
- Built on primary key
- Automatically created
- Unique and non-null

### 2. Secondary Index
- Built on non-key attributes
- Can be unique or non-unique

### 3. Clustered Index
- Data rows stored in order of index key
- One per table
- Leaf nodes contain actual data

### 4. Non-Clustered Index
- Separate structure from data
- Leaf nodes contain pointers to data
- Multiple per table allowed

### 5. Composite Index
- Built on multiple columns
- Order of columns matters

## Index Data Structures

### B-Tree Index
- Most common type
- Balanced tree structure
- Good for range queries

### Hash Index
- Fast for equality searches
- Not suitable for range queries

### Bitmap Index
- Good for low-cardinality data
- Used in data warehouses

## Creating Indexes

### Basic Index
```sql
CREATE INDEX idx_employee_name ON employees(name);
```

### Composite Index
```sql
CREATE INDEX idx_emp_dept_salary ON employees(dept_id, salary);
```

### Unique Index
```sql
CREATE UNIQUE INDEX idx_employee_email ON employees(email);
```

### Partial Index
```sql
CREATE INDEX idx_active_employees ON employees(name) 
WHERE status = 'active';
```

## Query Optimization

### Query Execution Process
1. **Parsing**: Check syntax and semantics
2. **Optimization**: Generate execution plan
3. **Execution**: Execute the plan

### Query Optimizer
- Cost-based optimization
- Considers multiple execution plans
- Chooses plan with lowest estimated cost

### Execution Plans
```sql
EXPLAIN SELECT * FROM employees WHERE dept_id = 10;
EXPLAIN ANALYZE SELECT * FROM employees WHERE salary > 50000;
```

## Optimization Techniques

### 1. Use Appropriate Indexes
```sql
-- Good: Uses index on dept_id
SELECT * FROM employees WHERE dept_id = 10;

-- Bad: Function on indexed column
SELECT * FROM employees WHERE UPPER(name) = 'JOHN';
```

### 2. Avoid SELECT *
```sql
-- Good: Select only needed columns
SELECT name, salary FROM employees;

-- Bad: Select all columns
SELECT * FROM employees;
```

### 3. Use LIMIT for Large Results
```sql
SELECT * FROM employees ORDER BY salary DESC LIMIT 10;
```

### 4. Optimize JOIN Operations
```sql
-- Good: Join on indexed columns
SELECT e.name, d.dept_name 
FROM employees e 
JOIN departments d ON e.dept_id = d.dept_id;
```

### 5. Use EXISTS vs IN
```sql
-- Often faster for large datasets
SELECT * FROM employees e 
WHERE EXISTS (SELECT 1 FROM departments d WHERE d.dept_id = e.dept_id);
```

## Query Performance Analysis

### Key Metrics
- **Execution Time**: How long query takes
- **Rows Examined**: Number of rows scanned
- **Rows Returned**: Number of rows in result
- **Index Usage**: Which indexes were used

### EXPLAIN Output Analysis
- **Type**: Join type (const, eq_ref, ref, range, index, ALL)
- **Possible_keys**: Available indexes
- **Key**: Actually used index
- **Rows**: Estimated rows examined

## Index Maintenance

### When to Create Indexes
- Frequently queried columns
- JOIN conditions
- WHERE clause conditions
- ORDER BY columns

### When NOT to Create Indexes
- Small tables
- Frequently updated columns
- Tables with high INSERT/UPDATE/DELETE activity

### Index Monitoring
```sql
-- Check index usage
SHOW INDEX FROM employees;

-- Analyze table statistics
ANALYZE TABLE employees;
```

## Advanced Optimization

### Query Rewriting
```sql
-- Instead of
SELECT * FROM orders WHERE YEAR(order_date) = 2023;

-- Use
SELECT * FROM orders WHERE order_date >= '2023-01-01' AND order_date < '2024-01-01';
```

### Partitioning
```sql
CREATE TABLE sales (
    id INT,
    sale_date DATE,
    amount DECIMAL(10,2)
) PARTITION BY RANGE (YEAR(sale_date)) (
    PARTITION p2022 VALUES LESS THAN (2023),
    PARTITION p2023 VALUES LESS THAN (2024),
    PARTITION p2024 VALUES LESS THAN (2025)
);
```

## Practical Exercises
1. Create indexes for a sample database
2. Analyze query execution plans
3. Optimize slow-running queries
4. Compare performance before/after indexing

## Performance Testing Lab
1. Create large test tables (100K+ rows)
2. Run queries without indexes
3. Add appropriate indexes
4. Measure performance improvements
5. Document findings

## Assignment
Optimize a poorly performing database:
- Identify slow queries
- Create appropriate indexes
- Rewrite inefficient queries
- Document performance improvements

## Next Module
Module 8: Transaction Management