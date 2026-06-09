# Chapter 4 — SQL Basics

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) create, alter, and drop database tables using DDL statements; (2) insert, update, and delete data using DML statements; (3) write SELECT queries with filtering, sorting, and duplicate elimination; (4) handle NULL values correctly; and (5) define and enforce integrity constraints.

## 4.1 Data Definition Language

The CREATE TABLE statement defines a new relation schema. The syntax specifies the relation name, its attributes, their domains, and constraints. The general form is:

CREATE TABLE relation_name (
    attribute_name domain constraints,
    ...
    table-level constraints
);

Common SQL domains include INTEGER, SMALLINT, NUMERIC(p, s), FLOAT, CHAR(n), VARCHAR(n), DATE, TIME, TIMESTAMP, and BOOLEAN. For example:

CREATE TABLE Student (
    student_id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    major VARCHAR(50),
    gpa NUMERIC(3, 2) DEFAULT 0.00,
    email VARCHAR(100) UNIQUE
);

The ALTER TABLE statement modifies an existing table schema without requiring a full rebuild. Common uses include adding, dropping, or modifying columns and constraints. For example:

ALTER TABLE Student ADD COLUMN date_of_birth DATE;
ALTER TABLE Student DROP COLUMN date_of_birth;
ALTER TABLE Student ALTER COLUMN major SET NOT NULL;

The DROP TABLE statement removes a table and its data permanently. Use with extreme caution. The optional IF EXISTS clause prevents errors if the table does not exist:

DROP TABLE IF EXISTS Student;

## 4.2 Data Manipulation Language

The INSERT statement adds new tuples to a relation. The values must conform to the attribute domains and constraints:

INSERT INTO Student (student_id, name, major, gpa, email)
VALUES (1001, 'Alice Zhang', 'Computer Science', 3.8, 'alice@univ.edu');

Omitting the column list requires values for all attributes in schema order. Omitting attributes that have DEFAULT values or allow NULL causes those attributes to receive the default or NULL.

The UPDATE statement modifies existing tuples. The SET clause specifies new values; the WHERE clause identifies which tuples to update. Without a WHERE clause, all tuples are updated:

UPDATE Student SET gpa = 4.0 WHERE student_id = 1001;

The DELETE statement removes tuples from a relation. Without a WHERE clause, all tuples are deleted but the table structure remains:

DELETE FROM Student WHERE major = 'Undeclared';

## 4.3 Basic SELECT Queries

The SELECT statement retrieves data from the database. Its fundamental structure is:

SELECT attributes_or_expressions
FROM relation_names
WHERE condition
ORDER BY attribute [ASC | DESC];

The SELECT clause specifies the columns to appear in the result. Using asterisk denotes all columns. Expressions, including arithmetic and function calls, are permitted.

The FROM clause names the relations involved in the query. Multiple relations in the FROM clause produce a Cartesian product, which is typically filtered by join conditions in the WHERE clause.

The WHERE clause filters tuples by a Boolean condition. Conditions may use comparison operators (=, less than, greater than, less-than-or-equal, greater-than-or-equal, not-equal), logical operators (AND, OR, NOT), and pattern matching via LIKE.

The ORDER BY clause sorts the result. Multiple sort keys are specified from most significant to least significant. Ascending order (ASC) is the default.

The DISTINCT keyword eliminates duplicate tuples from the result. Without DISTINCT, SELECT retains duplicates because SQL is based on a multiset semantics.

## 4.4 NULL Handling

NULL represents the absence of a value and is distinct from zero, the empty string, and the blank. Comparisons involving NULL using standard operators result in UNKNOWN, a third truth value in SQL's three-valued logic. The WHERE clause retains only tuples for which the condition evaluates to TRUE.

To test for NULL, use IS NULL or IS NOT NULL. Arithmetic expressions involving NULL propagate to NULL. Aggregate functions typically ignore NULL values, though COUNT(*) counts all tuples.

## 4.5 Constraints

Constraints enforce the integrity of the database. The PRIMARY KEY constraint specifies the attribute or attribute combination that uniquely identifies each tuple. Primary key attributes implicitly have both NOT NULL and UNIQUE constraints.

The FOREIGN KEY constraint, also called referential integrity, ensures that values in one relation reference valid primary key values in another. The syntax includes the referenced relation and optional referential actions for ON DELETE and ON UPDATE, which may be CASCADE, SET NULL, SET DEFAULT, or RESTRICT.

The UNIQUE constraint ensures that all values in an attribute or attribute combination are distinct. Unlike PRIMARY KEY, UNIQUE allows multiple NULL values.

The CHECK constraint specifies a Boolean condition that must be satisfied by every tuple. For example, CHECK (gpa greater than or equal to 0.0 AND gpa less than or equal to 4.0).

The NOT NULL constraint forbids NULL values in the specified attribute.

The DEFAULT clause specifies a value to use when no explicit value is provided during insertion.

## Summary

This chapter covered the essential SQL statements for defining database schemas and manipulating data. We examined DDL statements for creating, altering, and dropping tables, DML statements for inserting, updating, and deleting data, and the SELECT statement for queries. The treatment of NULL values in SQL's three-valued logic was explained. Finally, we surveyed the constraint system that maintains data integrity.

## Exercises

### Review Questions

1. What is the difference between CHAR(n) and VARCHAR(n)?
2. What value does a NUMERIC(5,2) column accept and how is it stored?
3. Explain the result of a SELECT query that returns NULL in one of its columns.
4. When does a PRIMARY KEY differ from a UNIQUE constraint?
5. What is the effect of ON DELETE CASCADE in a foreign key definition?

### Application Problems

1. Write CREATE TABLE statements for the following schema. Department(dept_id, dept_name, budget, building). Employee(emp_id, name, job_title, salary, dept_id referencing Department). Include all appropriate constraints.
2. Write INSERT statements to populate the Department table with three departments and the Employee table with five employees.
3. Write a SELECT query that returns the names and salaries of all employees in the Engineering department, sorted by salary in descending order. Eliminate any duplicate names.
4. Write an UPDATE statement that gives a 10 percent salary increase to all employees with a salary below 40000.
5. Write a DELETE statement that removes all departments with a budget below 10000. Handle the foreign key constraint appropriately.

### Challenge Problem

Design a complete SQL schema for an online bookstore. Include tables for Book (with ISBN as primary key, title, author, price, stock quantity), Customer (customer_id, name, email, address), and Order (order_id, customer_id, order_date, total_amount). The order must reference a customer. Include OrderItem (order_id, ISBN, quantity, line_price). Define all primary keys, foreign keys with appropriate referential actions, CHECK constraints on price and quantity, and NOT NULL constraints. Explain your choice of referential actions for each foreign key.
