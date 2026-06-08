# DBMS Lab Setup Guide

## Required Software

### MySQL Installation
```bash
# Windows (using MySQL Installer)
Download from: https://dev.mysql.com/downloads/installer/

# Ubuntu/Linux
sudo apt update
sudo apt install mysql-server mysql-client
sudo mysql_secure_installation
```

### MongoDB Installation
```bash
# Windows
Download from: https://www.mongodb.com/try/download/community

# Ubuntu
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
sudo apt-get install -y mongodb-org
```

### Redis Installation
```bash
# Windows (using WSL or Docker)
docker run -d -p 6379:6379 redis:latest

# Ubuntu
sudo apt install redis-server
```

## Sample Database Creation

### Company Database
```sql
CREATE DATABASE company_db;
USE company_db;

CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50),
    location VARCHAR(50)
);

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100),
    salary DECIMAL(10,2),
    dept_id INT,
    hire_date DATE,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

INSERT INTO departments VALUES 
(101, 'IT', 'New York'),
(102, 'HR', 'Chicago'),
(103, 'Finance', 'Boston');

INSERT INTO employees VALUES 
(1, 'John Doe', 75000, 101, '2020-01-15'),
(2, 'Jane Smith', 65000, 102, '2019-03-20'),
(3, 'Mike Johnson', 80000, 101, '2021-06-10'),
(4, 'Sarah Wilson', 70000, 103, '2020-09-05');
```

## Practice Exercises

### Basic Queries
1. List all employees with salary > 70000
2. Find employees hired in 2020
3. Count employees by department
4. Get highest paid employee in each department

### Advanced Queries
1. Create view for employee details with department
2. Write stored procedure for salary updates
3. Implement trigger for audit logging
4. Design indexes for performance optimization