# Creating and Managing Tables in MySQL

## CREATE TABLE Statement

The `CREATE TABLE` statement is used to create a new table in a database.

### Basic Syntax
```sql
CREATE TABLE table_name (
    column1 datatype constraints,
    column2 datatype constraints,
    ...
    table_constraints
);
```

### Example
```sql
CREATE TABLE employees (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15),
    hire_date DATE NOT NULL,
    salary DECIMAL(10, 2),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);
```

## Data Types and Attributes

### Numeric Data Types
- **INT**: Integer (-2,147,483,648 to 2,147,483,647)
- **TINYINT**: Small integer (-128 to 127)
- **SMALLINT**: Small integer (-32,768 to 32,767)
- **MEDIUMINT**: Medium-sized integer (-8,388,608 to 8,388,607)
- **BIGINT**: Large integer (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
- **DECIMAL(M,D)**: Fixed-point number with M digits total and D digits after decimal
- **FLOAT**: Single-precision floating-point number
- **DOUBLE**: Double-precision floating-point number

### String Data Types
- **CHAR(N)**: Fixed-length string (1 to 255 characters)
- **VARCHAR(N)**: Variable-length string (1 to 65,535 characters)
- **TEXT**: String with a maximum length of 65,535 characters
- **ENUM**: String object with a value chosen from a list of permitted values
- **SET**: String object that can have zero or more values from a predefined list

### Date and Time Data Types
- **DATE**: Date in 'YYYY-MM-DD' format
- **TIME**: Time in 'HH:MM:SS' format
- **DATETIME**: Date and time in 'YYYY-MM-DD HH:MM:SS' format
- **TIMESTAMP**: Timestamp stored as the number of seconds since the Unix epoch
- **YEAR**: Year in 2-digit or 4-digit format

### Column Attributes
- **NOT NULL**: Column cannot have NULL values
- **DEFAULT value**: Sets a default value for the column
- **AUTO_INCREMENT**: Automatically generates a unique number
- **UNIQUE**: All values in the column must be unique
- **PRIMARY KEY**: Uniquely identifies each record in the table
- **FOREIGN KEY**: References a column in another table
- **CHECK**: Ensures values meet a specific condition
- **COMMENT**: Adds a comment to the column

### Example with Attributes
```sql
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'Unique product identifier',
    product_name VARCHAR(100) NOT NULL UNIQUE,
    price DECIMAL(10, 2) NOT NULL CHECK (price > 0),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    category ENUM('Electronics', 'Clothing', 'Food', 'Books') DEFAULT 'Electronics',
    in_stock TINYINT(1) DEFAULT 1
);
```

## Temporary Tables

Temporary tables exist only for the duration of a session or connection.

```sql
CREATE TEMPORARY TABLE temp_results (
    id INT,
    result VARCHAR(100)
);
```

## ALTER TABLE Statement

The `ALTER TABLE` statement is used to add, delete, or modify columns in an existing table.

### Adding a Column
```sql
ALTER TABLE employees
ADD email VARCHAR(100);
```

### Adding Multiple Columns
```sql
ALTER TABLE employees
ADD phone VARCHAR(15),
ADD address VARCHAR(255);
```

### Modifying a Column
```sql
ALTER TABLE employees
MODIFY email VARCHAR(150) NOT NULL;
```

### Changing Column Name and Type
```sql
ALTER TABLE employees
CHANGE phone contact_number VARCHAR(20);
```

### Dropping a Column
```sql
ALTER TABLE employees
DROP COLUMN address;
```

### Adding a Primary Key
```sql
ALTER TABLE employees
ADD PRIMARY KEY (employee_id);
```

### Adding a Foreign Key
```sql
ALTER TABLE employees
ADD CONSTRAINT fk_department
FOREIGN KEY (department_id) REFERENCES departments(department_id);
```

### Dropping a Foreign Key
```sql
ALTER TABLE employees
DROP FOREIGN KEY fk_department;
```

### Adding an Index
```sql
ALTER TABLE employees
ADD INDEX idx_last_name (last_name);
```

### Renaming a Table
```sql
ALTER TABLE employees
RENAME TO staff;
```

## DROP TABLE Statement

The `DROP TABLE` statement is used to delete an existing table.

```sql
-- Drop a table
DROP TABLE employees;

-- Drop only if it exists
DROP TABLE IF EXISTS employees;

-- Drop multiple tables
DROP TABLE employees, departments, salaries;
```

## TRUNCATE TABLE Statement

The `TRUNCATE TABLE` statement is used to delete all data from a table without deleting the table structure.

```sql
TRUNCATE TABLE employees;
```

Differences between `TRUNCATE` and `DELETE`:
- `TRUNCATE` is faster for large tables
- `TRUNCATE` resets AUTO_INCREMENT counters
- `TRUNCATE` cannot be rolled back (in most cases)
- `TRUNCATE` doesn't trigger DELETE triggers

## Table Maintenance

### Check Table
Checks a table for errors.

```sql
CHECK TABLE employees;
```

### Analyze Table
Updates index statistics for better query optimization.

```sql
ANALYZE TABLE employees;
```

### Optimize Table
Defragments a table to reduce storage space and improve performance.

```sql
OPTIMIZE TABLE employees;
```

### Repair Table
Repairs a possibly corrupted table.

```sql
REPAIR TABLE employees;
```

## Table Information

### Show Tables
Lists all tables in the current database.

```sql
SHOW TABLES;
```

### Describe Table
Shows the structure of a table.

```sql
DESCRIBE employees;
-- or
DESC employees;
-- or
SHOW COLUMNS FROM employees;
```

### Show Create Table
Shows the CREATE TABLE statement that created the table.

```sql
SHOW CREATE TABLE employees;
```

### Table Status
Shows information about the table.

```sql
SHOW TABLE STATUS LIKE 'employees';
```

## Best Practices for Creating and Managing Tables

1. **Use appropriate data types** to optimize storage and performance.
2. **Add constraints** to ensure data integrity.
3. **Use meaningful names** for tables and columns.
4. **Document your schema** with comments.
5. **Consider normalization** to reduce redundancy.
6. **Use indexes** for columns frequently used in WHERE clauses.
7. **Be cautious with ALTER TABLE** on large tables as it can be time-consuming.
8. **Back up before major changes** to prevent data loss.