# Introduction to Database Management Systems

## Database Basics

A **Database** is a collection of related data organized in a way that data can be easily accessed, managed and updated. A **Database Management System (DBMS)** is software designed to store, retrieve, define and manage data in a database.

## Purpose of DBMS
- Data redundancy and inconsistency control
- Data access restriction
- Persistent storage for program objects
- Multiple user interfaces
- Complex relationships representation
- Integrity constraints enforcement
- Backup and recovery mechanisms

## DBMS Architecture

### 1. Three-Level Architecture
- **External Level (View Level)**: How users see the data
- **Conceptual Level (Logical Level)**: Community view of the database
- **Internal Level (Physical Level)**: Physical storage structures

### 2. Data Independence
- **Logical Data Independence**: Ability to modify conceptual schema without changing external schemas
- **Physical Data Independence**: Ability to modify physical schema without changing logical schema

## Data Models

### 1. Hierarchical Model
- Tree-like structure with parent-child relationships
- Each child has only one parent
- Example: IBM's IMS

### 2. Network Model
- Allows many-to-many relationships
- Records connected via "sets"
- Example: IDMS

### 3. Relational Model
- Data organized in tables (relations)
- Each table has rows (tuples) and columns (attributes)
- Based on relational algebra
- Example: MySQL, Oracle, SQL Server

### 4. Object-Oriented Model
- Data stored as objects
- Supports inheritance, encapsulation
- Example: ObjectDB

### 5. NoSQL Models
- **Document-based**: MongoDB, CouchDB
- **Key-value**: Redis, DynamoDB
- **Column-family**: Cassandra, HBase
- **Graph-based**: Neo4j, OrientDB

## Database Languages

### 1. Data Definition Language (DDL)
- CREATE: Create database objects
- ALTER: Modify structure
- DROP: Delete objects
- TRUNCATE: Remove all records
- RENAME: Rename objects

### 2. Data Manipulation Language (DML)
- SELECT: Retrieve data
- INSERT: Add new records
- UPDATE: Modify existing records
- DELETE: Remove records

### 3. Data Control Language (DCL)
- GRANT: Give privileges
- REVOKE: Remove privileges

### 4. Transaction Control Language (TCL)
- COMMIT: Save transactions
- ROLLBACK: Undo transactions
- SAVEPOINT: Create points to rollback
- SET TRANSACTION: Specify transaction characteristics

## DBMS vs File System

| Feature | File System | DBMS |
|---------|------------|------|
| Data Redundancy | High | Controlled |
| Data Consistency | Not guaranteed | Maintained |
| Data Sharing | Limited | Extensive |
| Data Security | Limited | Comprehensive |
| Data Independence | No | Yes |
| Backup & Recovery | Manual | Automated |
| Concurrency Control | No | Yes |

## References
1. [GeeksforGeeks - Introduction of DBMS](https://www.geeksforgeeks.org/introduction-of-dbms-database-management-system-set-1/)
2. [GeeksforGeeks - DBMS Architecture](https://www.geeksforgeeks.org/dbms-architecture-2-level-3-level/)
3. [GeeksforGeeks - Types of Data Models](https://www.geeksforgeeks.org/types-of-data-models-in-dbms/)