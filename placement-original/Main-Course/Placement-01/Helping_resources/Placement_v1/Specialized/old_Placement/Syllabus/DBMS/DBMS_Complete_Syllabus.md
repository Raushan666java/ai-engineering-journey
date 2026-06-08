# 🗄️ Database Management Systems - Complete Syllabus
*Duration: 10-12 weeks | Focus: Theory + Practical SQL*

## Week 1-2: Database Fundamentals 🟢

### Core Concepts
**Database Basics (3 days)**
- Data vs Information vs Knowledge
- Database vs File System comparison
- DBMS advantages: data independence, integrity, security, concurrency
- Database users: DBA, designers, end users, application programmers

**DBMS Architecture (4 days)**
```
Three-Level Architecture:
┌─────────────────┐
│   External      │ ← User Views
│   Level         │
├─────────────────┤
│   Conceptual    │ ← Logical Structure
│   Level         │
├─────────────────┤
│   Internal      │ ← Physical Storage
│   Level         │
└─────────────────┘
```

- **Physical Data Independence**: Changes in storage don't affect conceptual schema
- **Logical Data Independence**: Changes in conceptual schema don't affect external views
- Database languages: DDL, DML, DCL, TCL

**Database Models Evolution**
- Hierarchical Model: Tree structure, IMS
- Network Model: Graph structure, CODASYL
- Relational Model: Tables, Edgar Codd's rules
- Object-Oriented: Objects, inheritance
- NoSQL: Document, Key-Value, Column, Graph

### Relational Model Deep Dive
**Mathematical Foundation (3 days)**
- Relation as mathematical concept
- Domain, tuple, cardinality, degree
- Relational algebra operations
- Codd's 12 rules for RDBMS

**Keys & Constraints (4 days)**
```sql
-- Primary Key Example
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT CHECK (age >= 18),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES Departments(dept_id)
);
```

**Key Types:**
- **Super Key**: Any combination that uniquely identifies
- **Candidate Key**: Minimal super key
- **Primary Key**: Chosen candidate key
- **Foreign Key**: References primary key of another table
- **Composite Key**: Multiple attributes forming key

## Week 3-4: Entity-Relationship Modeling 🟡

### ER Model Components
**Entities & Attributes (3 days)**
```
Entity Types:
- Strong Entity: Independent existence
- Weak Entity: Depends on strong entity

Attribute Types:
- Simple vs Composite (name = first_name + last_name)
- Single vs Multi-valued (phone_numbers)
- Stored vs Derived (age from birth_date)
- Key attributes (underlined in ER diagram)
```

**Relationships & Cardinalities (4 days)**
```
Relationship Types:
┌─────────┐    1:1    ┌─────────┐
│ Person  │◄─────────►│ Passport│
└─────────┘           └─────────┘

┌─────────┐    1:N    ┌─────────┐
│Department│◄─────────►│Employee │
└─────────┘           └─────────┘

┌─────────┐    M:N    ┌─────────┐
│ Student │◄─────────►│ Course  │
└─────────┘           └─────────┘
```

**Advanced ER Concepts (4 days)**
- **Specialization**: Top-down approach (Employee → Manager, Clerk)
- **Generalization**: Bottom-up approach (Car, Truck → Vehicle)
- **Aggregation**: Treating relationship as entity
- **Participation**: Total vs Partial participation

**ER to Relational Mapping (3 days)**
```sql
-- M:N relationship mapping
-- Student-Course becomes three tables:
CREATE TABLE Students (student_id, name, ...);
CREATE TABLE Courses (course_id, title, ...);
CREATE TABLE Enrollments (
    student_id INT,
    course_id INT,
    grade CHAR(2),
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);
```

## Week 5-6: SQL Mastery 🟠

### Data Definition Language (DDL)
**Schema Creation (2 days)**
```sql
-- Database and Table Creation
CREATE DATABASE university;
USE university;

CREATE TABLE Departments (
    dept_id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(50) NOT NULL UNIQUE,
    budget DECIMAL(12,2) DEFAULT 0,
    head_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Alter Table Operations
ALTER TABLE Departments 
ADD COLUMN location VARCHAR(100),
MODIFY COLUMN budget DECIMAL(15,2),
DROP COLUMN created_at;

-- Indexes for Performance
CREATE INDEX idx_dept_name ON Departments(dept_name);
CREATE UNIQUE INDEX idx_employee_email ON Employees(email);
```

### Data Manipulation Language (DML)
**CRUD Operations (3 days)**
```sql
-- INSERT variations
INSERT INTO Students VALUES (1, 'John Doe', 'john@email.com', 20, 1);
INSERT INTO Students (name, email, age) VALUES ('Jane Smith', 'jane@email.com', 19);

-- Bulk Insert
INSERT INTO Students (name, email, age, dept_id)
SELECT CONCAT(first_name, ' ', last_name), email, age, 1
FROM temp_students WHERE age >= 18;

-- UPDATE with conditions
UPDATE Students 
SET age = age + 1, 
    last_updated = NOW()
WHERE YEAR(birth_date) = 2000;

-- DELETE with safety
DELETE FROM Enrollments 
WHERE student_id IN (
    SELECT student_id FROM Students WHERE graduation_year < 2020
);
```

**Advanced SELECT Queries (4 days)**
```sql
-- Complex WHERE clauses
SELECT * FROM Students 
WHERE age BETWEEN 18 AND 25 
  AND dept_id IN (1, 2, 3)
  AND name LIKE 'A%'
  AND email IS NOT NULL;

-- Aggregate Functions
SELECT 
    dept_id,
    COUNT(*) as student_count,
    AVG(age) as avg_age,
    MIN(age) as youngest,
    MAX(age) as oldest,
    SUM(CASE WHEN gender = 'M' THEN 1 ELSE 0 END) as male_count
FROM Students 
GROUP BY dept_id
HAVING COUNT(*) > 10 AND AVG(age) < 22;

-- Window Functions (Advanced)
SELECT 
    name,
    age,
    dept_id,
    ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY age DESC) as rank_in_dept,
    LAG(age) OVER (ORDER BY age) as prev_age,
    LEAD(age) OVER (ORDER BY age) as next_age,
    NTILE(4) OVER (ORDER BY age) as quartile
FROM Students;
```

### JOIN Operations Mastery
**All JOIN Types (3 days)**
```sql
-- INNER JOIN (most common)
SELECT s.name, d.dept_name, c.course_title
FROM Students s
INNER JOIN Departments d ON s.dept_id = d.dept_id
INNER JOIN Enrollments e ON s.student_id = e.student_id
INNER JOIN Courses c ON e.course_id = c.course_id;

-- LEFT JOIN (include all from left table)
SELECT s.name, e.grade
FROM Students s
LEFT JOIN Enrollments e ON s.student_id = e.student_id;

-- RIGHT JOIN (include all from right table)
SELECT d.dept_name, COUNT(s.student_id) as student_count
FROM Students s
RIGHT JOIN Departments d ON s.dept_id = d.dept_id
GROUP BY d.dept_id, d.dept_name;

-- FULL OUTER JOIN (MySQL workaround)
SELECT * FROM Students s LEFT JOIN Departments d ON s.dept_id = d.dept_id
UNION
SELECT * FROM Students s RIGHT JOIN Departments d ON s.dept_id = d.dept_id;

-- CROSS JOIN (Cartesian product)
SELECT s.name, c.course_title
FROM Students s
CROSS JOIN Courses c
WHERE s.dept_id = 1 AND c.dept_id = 1;

-- SELF JOIN
SELECT e1.name as employee, e2.name as manager
FROM Employees e1
LEFT JOIN Employees e2 ON e1.manager_id = e2.employee_id;
```

### Subqueries & Advanced SQL
**Subquery Types (2 days)**
```sql
-- Scalar Subquery
SELECT name FROM Students 
WHERE age = (SELECT MAX(age) FROM Students);

-- Row Subquery
SELECT * FROM Students 
WHERE (dept_id, age) = (SELECT dept_id, MAX(age) FROM Students GROUP BY dept_id LIMIT 1);

-- Table Subquery
SELECT * FROM (
    SELECT name, age, 
           RANK() OVER (ORDER BY age DESC) as age_rank
    FROM Students
) ranked_students
WHERE age_rank <= 5;

-- Correlated Subquery
SELECT s1.name, s1.age
FROM Students s1
WHERE s1.age > (
    SELECT AVG(s2.age) 
    FROM Students s2 
    WHERE s2.dept_id = s1.dept_id
);

-- EXISTS vs IN
SELECT name FROM Students s
WHERE EXISTS (
    SELECT 1 FROM Enrollments e 
    WHERE e.student_id = s.student_id AND e.grade = 'A'
);
```

## Week 7-8: Database Design & Normalization 🔴

### Functional Dependencies
**Theory & Analysis (3 days)**
```
Functional Dependency Rules:
- Reflexivity: If Y ⊆ X, then X → Y
- Augmentation: If X → Y, then XZ → YZ
- Transitivity: If X → Y and Y → Z, then X → Z
- Union: If X → Y and X → Z, then X → YZ
- Decomposition: If X → YZ, then X → Y and X → Z
- Pseudotransitivity: If X → Y and WY → Z, then WX → Z
```

**Finding Candidate Keys**
```sql
-- Example table: Student(ID, Name, Course, Instructor, Room)
-- FDs: ID → Name, Course → Instructor, Course → Room, (ID, Course) → Grade

-- Step 1: Find closure of attributes
-- Step 2: Minimal sets that determine all attributes
-- Step 3: Candidate keys identification
```

### Normalization Process
**First Normal Form (1NF) (2 days)**
```sql
-- Violation: Multi-valued attributes
-- Before 1NF
CREATE TABLE Students_Bad (
    student_id INT,
    name VARCHAR(100),
    phone_numbers VARCHAR(200) -- "123-456-7890, 098-765-4321"
);

-- After 1NF
CREATE TABLE Students (
    student_id INT,
    name VARCHAR(100)
);

CREATE TABLE Student_Phones (
    student_id INT,
    phone_number VARCHAR(15),
    phone_type ENUM('mobile', 'home', 'work'),
    PRIMARY KEY (student_id, phone_number)
);
```

**Second Normal Form (2NF) (2 days)**
```sql
-- Violation: Partial dependency on composite key
-- Before 2NF
CREATE TABLE Enrollments_Bad (
    student_id INT,
    course_id INT,
    student_name VARCHAR(100), -- Depends only on student_id
    course_title VARCHAR(100), -- Depends only on course_id
    grade CHAR(2),
    PRIMARY KEY (student_id, course_id)
);

-- After 2NF
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100)
);

CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_title VARCHAR(100)
);

CREATE TABLE Enrollments (
    student_id INT,
    course_id INT,
    grade CHAR(2),
    PRIMARY KEY (student_id, course_id)
);
```

**Third Normal Form (3NF) (2 days)**
```sql
-- Violation: Transitive dependency
-- Before 3NF
CREATE TABLE Students_Bad (
    student_id INT PRIMARY KEY,
    name VARCHAR(100),
    dept_id INT,
    dept_name VARCHAR(100), -- Transitively dependent via dept_id
    dept_head VARCHAR(100)  -- Transitively dependent via dept_id
);

-- After 3NF
CREATE TABLE Departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100),
    dept_head VARCHAR(100)
);

CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)
);
```

**Boyce-Codd Normal Form (BCNF) (2 days)**
```sql
-- BCNF: Every determinant must be a candidate key
-- Example: Course(Course_ID, Instructor, Room, Time)
-- FD: (Course_ID, Instructor) → Room, Room → Instructor

-- Decomposition for BCNF:
CREATE TABLE Room_Instructor (
    room VARCHAR(20) PRIMARY KEY,
    instructor VARCHAR(100)
);

CREATE TABLE Course_Schedule (
    course_id VARCHAR(10),
    room VARCHAR(20),
    time VARCHAR(20),
    PRIMARY KEY (course_id, time),
    FOREIGN KEY (room) REFERENCES Room_Instructor(room)
);
```

**Higher Normal Forms (1 day)**
- **4NF**: Multi-valued dependencies
- **5NF**: Join dependencies
- **DKNF**: Domain-Key Normal Form

### Denormalization Strategies
**When to Denormalize (2 days)**
```sql
-- Read-heavy applications
-- Reporting and analytics
-- Performance optimization

-- Example: Denormalized order summary
CREATE TABLE Order_Summary (
    order_id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    customer_email VARCHAR(100),
    total_amount DECIMAL(10,2),
    item_count INT,
    order_date DATE,
    -- Redundant data for faster queries
    customer_city VARCHAR(50),
    customer_country VARCHAR(50)
);
```

## Week 9: Indexing & Query Optimization 🔴

### Index Types & Implementation
**B-Tree Indexes (2 days)**
```sql
-- Primary Index (Clustered)
CREATE TABLE Orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY, -- Clustered index
    customer_id INT,
    order_date DATE,
    total_amount DECIMAL(10,2)
);

-- Secondary Indexes (Non-clustered)
CREATE INDEX idx_customer_id ON Orders(customer_id);
CREATE INDEX idx_order_date ON Orders(order_date);
CREATE INDEX idx_composite ON Orders(customer_id, order_date);

-- Covering Index
CREATE INDEX idx_covering ON Orders(customer_id, order_date, total_amount);
```

**Hash Indexes (1 day)**
```sql
-- Good for equality searches, not range queries
CREATE TABLE User_Sessions (
    session_id VARCHAR(32) PRIMARY KEY,
    user_id INT,
    created_at TIMESTAMP
) ENGINE=MEMORY;

-- Hash index automatically created for PRIMARY KEY in MEMORY engine
```

**Bitmap Indexes (1 day)**
```sql
-- Efficient for low-cardinality data
-- Example: Gender, Status, Category columns
-- Not directly supported in MySQL, but concept important
```

### Query Optimization
**Execution Plans (2 days)**
```sql
-- Analyze query performance
EXPLAIN SELECT s.name, d.dept_name
FROM Students s
JOIN Departments d ON s.dept_id = d.dept_id
WHERE s.age > 20;

-- Extended analysis
EXPLAIN FORMAT=JSON SELECT ...;

-- Query optimization hints
SELECT /*+ USE_INDEX(Students, idx_age) */ name
FROM Students
WHERE age > 20;
```

**Optimization Techniques (2 days)**
```sql
-- 1. Use appropriate indexes
-- Bad: Full table scan
SELECT * FROM Orders WHERE YEAR(order_date) = 2023;

-- Good: Index scan
SELECT * FROM Orders WHERE order_date >= '2023-01-01' AND order_date < '2024-01-01';

-- 2. Avoid SELECT *
-- Bad
SELECT * FROM Orders o JOIN Customers c ON o.customer_id = c.customer_id;

-- Good
SELECT o.order_id, o.total_amount, c.customer_name
FROM Orders o JOIN Customers c ON o.customer_id = c.customer_id;

-- 3. Use LIMIT for large result sets
SELECT customer_name FROM Customers ORDER BY created_at DESC LIMIT 10;

-- 4. Optimize JOINs
-- Use smaller table as driving table
-- Ensure JOIN conditions use indexed columns
```

## Week 10: Transactions & Concurrency Control 🔴

### ACID Properties
**Atomicity (1 day)**
```sql
-- All operations succeed or all fail
START TRANSACTION;
UPDATE Accounts SET balance = balance - 1000 WHERE account_id = 1;
UPDATE Accounts SET balance = balance + 1000 WHERE account_id = 2;
-- If any operation fails, ROLLBACK occurs
COMMIT;
```

**Consistency (1 day)**
```sql
-- Database remains in valid state
-- Constraints are maintained
ALTER TABLE Accounts ADD CONSTRAINT chk_balance CHECK (balance >= 0);

-- Transaction maintains consistency
START TRANSACTION;
UPDATE Accounts SET balance = balance - 500 WHERE account_id = 1;
-- If this violates check constraint, transaction fails
UPDATE Accounts SET balance = balance + 500 WHERE account_id = 2;
COMMIT;
```

**Isolation (2 days)**
```sql
-- Isolation Levels
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED; -- Dirty reads possible
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;   -- No dirty reads
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;  -- No phantom reads
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;     -- Strictest isolation

-- Concurrency Problems:
-- 1. Dirty Read: Reading uncommitted data
-- 2. Non-repeatable Read: Same query returns different results
-- 3. Phantom Read: New rows appear between reads
```

**Durability (1 day)**
```sql
-- Committed changes persist even after system failure
-- Implemented through:
-- - Write-ahead logging (WAL)
-- - Checkpointing
-- - Recovery mechanisms
```

### Locking Mechanisms
**Lock Types (2 days)**
```sql
-- Shared Lock (S-lock): Multiple readers
SELECT * FROM Accounts WHERE account_id = 1 LOCK IN SHARE MODE;

-- Exclusive Lock (X-lock): Single writer
SELECT * FROM Accounts WHERE account_id = 1 FOR UPDATE;

-- Lock Granularity:
-- - Row-level locking (InnoDB)
-- - Table-level locking (MyISAM)
-- - Page-level locking
```

**Deadlock Handling (1 day)**
```sql
-- Deadlock Detection and Resolution
-- Transaction 1:
START TRANSACTION;
UPDATE Accounts SET balance = balance - 100 WHERE account_id = 1;
-- Wait for lock on account_id = 2
UPDATE Accounts SET balance = balance + 100 WHERE account_id = 2;
COMMIT;

-- Transaction 2 (concurrent):
START TRANSACTION;
UPDATE Accounts SET balance = balance - 50 WHERE account_id = 2;
-- Wait for lock on account_id = 1 (DEADLOCK!)
UPDATE Accounts SET balance = balance + 50 WHERE account_id = 1;
COMMIT;

-- MySQL automatically detects and resolves deadlocks
```

## Week 11-12: Advanced Topics & NoSQL 🔴

### Database Administration
**Backup & Recovery (2 days)**
```bash
# Full Backup
mysqldump -u root -p --all-databases > full_backup.sql

# Incremental Backup using Binary Logs
mysqldump -u root -p --single-transaction --flush-logs --master-data=2 database_name > backup.sql

# Point-in-time Recovery
mysql -u root -p database_name < backup.sql
mysqlbinlog --start-datetime="2023-01-01 10:00:00" --stop-datetime="2023-01-01 11:00:00" binlog.000001 | mysql -u root -p
```

**Performance Tuning (2 days)**
```sql
-- Monitor Performance
SHOW PROCESSLIST;
SHOW ENGINE INNODB STATUS;
SELECT * FROM performance_schema.events_statements_summary_by_digest ORDER BY sum_timer_wait DESC LIMIT 10;

-- Configuration Tuning
-- my.cnf settings:
-- innodb_buffer_pool_size = 70% of RAM
-- query_cache_size = 256M
-- max_connections = 500
-- slow_query_log = ON
```

**Security (1 day)**
```sql
-- User Management
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'strong_password';
GRANT SELECT, INSERT, UPDATE ON app_database.* TO 'app_user'@'localhost';

-- Role-based Access
CREATE ROLE 'app_read_role';
GRANT SELECT ON app_database.* TO 'app_read_role';
GRANT 'app_read_role' TO 'app_user'@'localhost';

-- Data Encryption
-- Enable SSL connections
-- Encrypt sensitive columns
-- Use transparent data encryption (TDE)
```

### NoSQL Databases
**Document Databases - MongoDB (2 days)**
```javascript
// MongoDB Examples
// Insert Document
db.users.insertOne({
    name: "John Doe",
    email: "john@example.com",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        zipcode: "10001"
    },
    hobbies: ["reading", "swimming"]
});

// Query Documents
db.users.find({ age: { $gte: 25 } });
db.users.find({ "address.city": "New York" });
db.users.find({ hobbies: { $in: ["reading"] } });

// Aggregation Pipeline
db.users.aggregate([
    { $match: { age: { $gte: 25 } } },
    { $group: { _id: "$address.city", count: { $sum: 1 } } },
    { $sort: { count: -1 } }
]);
```

**Key-Value Stores - Redis (1 day)**
```bash
# Redis Examples
SET user:1000 "John Doe"
GET user:1000
HSET user:1001 name "Jane Smith" email "jane@example.com" age 28
HGETALL user:1001

# Lists and Sets
LPUSH notifications "New message"
SADD user:tags "developer" "python" "database"

# Expiration
SETEX session:abc123 3600 "user_data"
```

**Column-Family - Cassandra (1 day)**
```sql
-- CQL (Cassandra Query Language)
CREATE KEYSPACE ecommerce WITH replication = {
    'class': 'SimpleStrategy',
    'replication_factor': 3
};

CREATE TABLE products (
    category text,
    product_id uuid,
    name text,
    price decimal,
    PRIMARY KEY (category, product_id)
);

INSERT INTO products (category, product_id, name, price)
VALUES ('electronics', uuid(), 'Laptop', 999.99);
```

**Graph Databases - Neo4j (1 day)**
```cypher
// Neo4j Cypher Examples
// Create Nodes
CREATE (john:Person {name: 'John Doe', age: 30})
CREATE (company:Company {name: 'Tech Corp'})

// Create Relationships
MATCH (p:Person {name: 'John Doe'}), (c:Company {name: 'Tech Corp'})
CREATE (p)-[:WORKS_FOR {since: 2020}]->(c)

// Query Patterns
MATCH (p:Person)-[:WORKS_FOR]->(c:Company)
WHERE c.name = 'Tech Corp'
RETURN p.name, p.age
```

### CAP Theorem & Distributed Databases
**CAP Theorem (1 day)**
```
Consistency + Availability + Partition Tolerance
(Can only guarantee 2 out of 3)

Examples:
- CA Systems: Traditional RDBMS (single node)
- CP Systems: MongoDB, HBase
- AP Systems: Cassandra, DynamoDB
```

**Distributed Database Concepts (1 day)**
- **Sharding**: Horizontal partitioning across nodes
- **Replication**: Master-slave, master-master
- **Consistency Models**: Strong, eventual, weak
- **Consensus Algorithms**: Raft, Paxos

## Interview Preparation & Practice

### Common Interview Questions
**Conceptual Questions**
1. Explain ACID properties with examples
2. Difference between clustered and non-clustered indexes
3. When would you denormalize a database?
4. Explain different isolation levels
5. CAP theorem and its implications

**SQL Problem Solving**
```sql
-- Find second highest salary
SELECT MAX(salary) as second_highest
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);

-- Rank employees by salary within departments
SELECT name, department, salary,
       RANK() OVER (PARTITION BY department ORDER BY salary DESC) as rank
FROM employees;

-- Find employees with no manager
SELECT e1.name
FROM employees e1
LEFT JOIN employees e2 ON e1.manager_id = e2.employee_id
WHERE e2.employee_id IS NULL;
```

**System Design Integration**
- Database choice for different use cases
- Scaling strategies: read replicas, sharding
- Caching layers and strategies
- Data consistency in distributed systems

## Resources & Tools

### Books
- "Database System Concepts" by Silberschatz
- "Fundamentals of Database Systems" by Elmasri & Navathe
- "High Performance MySQL" by Baron Schwartz

### Online Platforms
- **SQLBolt**: Interactive SQL tutorial
- **HackerRank SQL**: Practice problems
- **LeetCode Database**: Interview-style questions
- **W3Schools SQL**: Reference and examples

### Tools
- **MySQL Workbench**: GUI for MySQL
- **phpMyAdmin**: Web-based MySQL administration
- **MongoDB Compass**: GUI for MongoDB
- **Redis CLI**: Command-line interface for Redis

### Practice Datasets
- **Sakila**: Sample MySQL database (DVD rental)
- **Northwind**: Classic business database
- **Chinook**: Digital media store database
- **World**: Countries and cities database

## Success Metrics
- **SQL Proficiency**: Write complex queries with joins, subqueries, window functions
- **Design Skills**: Normalize databases to 3NF/BCNF
- **Performance**: Optimize queries using indexes and execution plans
- **Theory**: Understand ACID, CAP theorem, concurrency control
- **NoSQL**: Basic operations in MongoDB, Redis
- **Interview Ready**: Solve 50+ SQL problems, explain database concepts clearly