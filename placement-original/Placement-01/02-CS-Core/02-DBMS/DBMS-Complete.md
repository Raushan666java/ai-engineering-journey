# 🗄️ Database Management Systems (DBMS)

## 📋 8-Week DBMS Mastery Plan

### Week 1-2: Database Fundamentals & ER Modeling

#### 📖 Core Concepts
1. **Database Introduction**
   - What is a database and DBMS?
   - Advantages of DBMS over file systems
   - Types of databases (Relational, NoSQL, etc.)
   - Database users and administrators

2. **Entity-Relationship (ER) Model**
   - Entities, attributes, and relationships
   - Types of attributes (simple, composite, derived)
   - Relationship types and cardinality
   - Weak entities and identifying relationships

3. **ER Diagram Construction**
   - Symbols and notation
   - Converting requirements to ER diagrams
   - Enhanced ER features (inheritance, aggregation)

#### 💡 Practical Exercises
- Design ER diagrams for various scenarios:
  - University management system
  - Library management system
  - Hospital management system
  - E-commerce platform

#### 📝 Interview Questions
1. Explain the difference between entity and attribute
2. What are the types of relationships in DBMS?
3. How do you handle many-to-many relationships?
4. What is a weak entity? Give examples
5. Explain cardinality and participation constraints

### Week 3-4: Relational Model & SQL

#### 📖 Core Concepts
1. **Relational Model**
   - Tables, rows, columns, and domains
   - Keys (primary, foreign, candidate, super)
   - Relational algebra operations
   - Integrity constraints

2. **SQL Basics**
   - DDL (Data Definition Language)
   - DML (Data Manipulation Language)
   - DCL (Data Control Language)
   - TCL (Transaction Control Language)

3. **Advanced SQL**
   - Joins (inner, outer, cross, self)
   - Subqueries and correlated queries
   - Aggregate functions and GROUP BY
   - Window functions

#### 💡 Hands-on Practice
```sql
-- Sample Database Schema
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    age INT,
    department_id INT
);

CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100),
    credits INT,
    department_id INT
);

CREATE TABLE Enrollments (
    student_id INT,
    course_id INT,
    grade CHAR(2),
    enrollment_date DATE,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);
```

#### 🔬 Practice Problems
1. Find students enrolled in more than 3 courses
2. Calculate average grade for each course
3. Find courses with no enrollments
4. List top 5 students by GPA
5. Find students who took all courses in their department

### Week 5-6: Normalization & Schema Design

#### 📖 Core Concepts
1. **Functional Dependencies**
   - Definition and examples
   - Types of dependencies
   - Closure of attribute sets
   - Minimal cover

2. **Normalization Process**
   - 1NF (First Normal Form)
   - 2NF (Second Normal Form)
   - 3NF (Third Normal Form)
   - BCNF (Boyce-Codd Normal Form)

3. **Advanced Normal Forms**
   - 4NF (Fourth Normal Form)
   - 5NF (Fifth Normal Form)
   - When to denormalize

#### 💡 Normalization Example
```
Original Table: Student_Course
(StudentID, StudentName, CourseID, CourseName, Grade, Instructor)

Issues:
- Insertion anomaly: Can't add course without student
- Deletion anomaly: Lose course info when last student drops
- Update anomaly: Must update instructor name in multiple places

Solution: Normalize to 3NF
Students(StudentID, StudentName)
Courses(CourseID, CourseName, Instructor)
Enrollments(StudentID, CourseID, Grade)
```

#### 📝 Interview Questions
1. What is normalization and why is it important?
2. Explain different normal forms with examples
3. What are functional dependencies?
4. When would you denormalize a database?
5. What is the difference between 3NF and BCNF?

### Week 7-8: Transactions & Concurrency Control

#### 📖 Core Concepts
1. **Transaction Management**
   - ACID properties
   - Transaction states
   - BEGIN, COMMIT, ROLLBACK
   - Savepoints

2. **Concurrency Control**
   - Problems with concurrent execution
   - Locking mechanisms
   - Deadlock detection and prevention
   - Isolation levels

3. **Recovery Systems**
   - Log-based recovery
   - Checkpoint techniques
   - Shadow paging
   - Backup and restore

#### 💡 ACID Properties Example
```sql
-- Atomicity: All or nothing
BEGIN TRANSACTION;
UPDATE Account SET balance = balance - 100 WHERE account_id = 1;
UPDATE Account SET balance = balance + 100 WHERE account_id = 2;
COMMIT; -- Both updates succeed or both fail

-- Consistency: Valid state transitions
-- Isolation: Concurrent transactions don't interfere
-- Durability: Committed changes persist
```

## 🎯 Complete DBMS Interview Preparation

### Core Topics Checklist
- [ ] ER Model and ER Diagrams
- [ ] Relational Model and Relational Algebra
- [ ] SQL Queries (Basic to Advanced)
- [ ] Normalization (1NF to BCNF)
- [ ] Indexing and B-Trees
- [ ] Transaction Management and ACID
- [ ] Concurrency Control and Locking
- [ ] Recovery and Backup
- [ ] Query Optimization
- [ ] NoSQL Databases (Overview)

### SQL Practice Problems (50 Total)

#### Easy (20 problems)
1. Select all records from a table
2. Filter records with WHERE clause
3. Sort records using ORDER BY
4. Use LIMIT/TOP for pagination
5. Count total records
6. Find maximum/minimum values
7. Group records by a column
8. Filter groups with HAVING
9. Join two tables
10. Use aliases for columns and tables
[... continue with 10 more easy problems]

#### Medium (20 problems)
1. Subquery to find second highest salary
2. Self-join to find manager-employee relationships
3. Window functions for ranking
4. Complex aggregations with multiple GROUP BY
5. Correlated subqueries
[... continue with 15 more medium problems]

#### Hard (10 problems)
1. Recursive CTE for hierarchical data
2. Dynamic pivot tables
3. Complex analytical queries
4. Performance optimization scenarios
5. Transaction isolation scenarios
[... continue with 5 more hard problems]

## 📊 Progress Tracking

### Weekly Goals
```markdown
# Week [X] Progress

## Concepts Learned ✅
- [ ] Concept 1
- [ ] Concept 2
- [ ] Concept 3

## SQL Problems Solved
- Easy: ___/20
- Medium: ___/20
- Hard: ___/10

## Database Design Projects
- [ ] Project 1: University DB
- [ ] Project 2: E-commerce DB
- [ ] Project 3: Banking System

## Mock Interview Questions
- Attempted: ___
- Correctly Answered: ___
- Need Review: ___
```

## 🏆 Practical Projects

### Project 1: University Management System
- Design complete ER diagram
- Normalize to 3NF
- Implement in SQL
- Write 20 complex queries

### Project 2: E-commerce Database
- Product catalog with categories
- User accounts and orders
- Shopping cart functionality
- Inventory management

### Project 3: Banking System
- Account management
- Transaction processing
- Loan tracking
- Interest calculations

## 🔍 Advanced Topics (Optional)

### NoSQL Databases
- Document databases (MongoDB)
- Key-value stores (Redis)
- Column-family (Cassandra)
- Graph databases (Neo4j)

### Big Data Technologies
- Hadoop ecosystem
- Spark for data processing
- Data warehousing concepts
- ETL processes

## 📚 Resources

### Books
- "Database System Concepts" by Silberschatz
- "Fundamentals of Database Systems" by Elmasri & Navathe
- "SQL in 10 Minutes" by Ben Forta

### Online Platforms
- SQLBolt (interactive SQL tutorial)
- HackerRank SQL challenges
- LeetCode database problems
- W3Schools SQL reference

### Practice Databases
- MySQL Sakila sample database
- PostgreSQL sample databases
- Microsoft Northwind database

---

**Remember**: DBMS is crucial for backend development roles. Focus on both theoretical concepts and practical SQL skills!
