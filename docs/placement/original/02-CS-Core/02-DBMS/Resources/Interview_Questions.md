# DBMS Interview Questions

## Basic Level

### 1. What is a Database?
**Answer:** Organized collection of structured information stored electronically in a computer system, managed by a DBMS.

### 2. Difference between DBMS and RDBMS?
**DBMS:** Manages any database
**RDBMS:** Manages relational databases with tables, rows, columns

### 3. What is SQL?
**Answer:** Structured Query Language - standard language for managing relational databases.

### 4. Types of SQL Commands?
- **DDL:** CREATE, ALTER, DROP
- **DML:** INSERT, UPDATE, DELETE, SELECT
- **DCL:** GRANT, REVOKE
- **TCL:** COMMIT, ROLLBACK

### 5. What is Primary Key?
**Answer:** Unique identifier for each record in a table. Cannot be NULL.

## Intermediate Level

### 6. Explain Normalization
**Answer:** Process of organizing data to reduce redundancy and improve data integrity through 1NF, 2NF, 3NF forms.

### 7. What is a Foreign Key?
**Answer:** Field that references primary key of another table, maintaining referential integrity.

### 8. Types of Joins?
- **INNER JOIN:** Returns matching records
- **LEFT JOIN:** All records from left table
- **RIGHT JOIN:** All records from right table
- **FULL OUTER JOIN:** All records from both tables

### 9. What is Indexing?
**Answer:** Database optimization technique using data structures to improve query performance.

### 10. ACID Properties?
- **Atomicity:** All or nothing
- **Consistency:** Valid state always
- **Isolation:** Concurrent execution
- **Durability:** Permanent storage

## Advanced Level

### 11. Explain Transaction Isolation Levels
- **Read Uncommitted:** Allows dirty reads
- **Read Committed:** Prevents dirty reads
- **Repeatable Read:** Prevents non-repeatable reads
- **Serializable:** Highest isolation level

### 12. What is Deadlock?
**Answer:** Situation where two or more transactions wait for each other indefinitely.

### 13. Difference between Clustered and Non-clustered Index?
**Clustered:** Data stored in order of index key
**Non-clustered:** Separate structure pointing to data

### 14. What is Database Sharding?
**Answer:** Horizontal partitioning technique distributing data across multiple databases.

### 15. CAP Theorem?
**Answer:** Consistency, Availability, Partition tolerance - can only guarantee two of three.

## Practical Questions

### 16. Write query to find second highest salary
```sql
SELECT MAX(salary) FROM employees 
WHERE salary < (SELECT MAX(salary) FROM employees);
```

### 17. Find duplicate records
```sql
SELECT name, COUNT(*) FROM employees 
GROUP BY name HAVING COUNT(*) > 1;
```

### 18. Delete duplicate records keeping one
```sql
DELETE e1 FROM employees e1, employees e2 
WHERE e1.id > e2.id AND e1.name = e2.name;
```

## NoSQL Questions

### 19. Types of NoSQL Databases?
- **Document:** MongoDB
- **Key-Value:** Redis
- **Column-family:** Cassandra
- **Graph:** Neo4j

### 20. When to use NoSQL over SQL?
- Big data requirements
- Horizontal scaling needs
- Flexible schema requirements
- Real-time applications