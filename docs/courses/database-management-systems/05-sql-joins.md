# Chapter 5 — SQL Joins and Subqueries

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) distinguish among the various join types and apply them correctly; (2) use set operations to combine query results; and (3) write subqueries, including correlated subqueries, and use the EXISTS, IN, ANY, and ALL operators.

## 5.1 Inner Join

The INNER JOIN returns only the tuples from the Cartesian product of two relations that satisfy the join condition. Tuples that have no matching tuple in the other relation are excluded. The syntax is:

SELECT columns FROM table1 INNER JOIN table2 ON condition;

An INNER JOIN is equivalent to writing the join condition in the WHERE clause with a comma-separated FROM clause. The ON clause specifies the join predicate. For example, retrieving the names of employees and their department names:

SELECT Employee.name, Department.dept_name
FROM Employee
INNER JOIN Department ON Employee.dept_id = Department.dept_id;

A tuple in Employee whose dept_id does not match any Department.dept_id is omitted from the result.

The inner join is the most frequently used join type and serves as the foundation for combining related data across normalized tables.

## 5.2 Outer Joins

An OUTER JOIN preserves tuples that lack matching tuples in the other relation by filling missing attributes with NULL.

The LEFT OUTER JOIN, also called LEFT JOIN, preserves all tuples from the left relation. If a tuple in the left relation has no matching tuple in the right relation, the attributes from the right relation are filled with NULL. For example:

SELECT Employee.name, Department.dept_name
FROM Employee
LEFT OUTER JOIN Department ON Employee.dept_id = Department.dept_id;

This query includes all employees, even those not assigned to any department.

The RIGHT OUTER JOIN, or RIGHT JOIN, preserves all tuples from the right relation. The FULL OUTER JOIN preserves all tuples from both relations, filling mismatched attributes with NULL on both sides. FULL OUTER JOIN is the symmetric union of LEFT and RIGHT joins.

## 5.3 Cross Join and Self Join

A CROSS JOIN produces the Cartesian product of two relations, pairing every tuple from the first relation with every tuple from the second. A CROSS JOIN is equivalent to a comma-separated FROM clause without a WHERE condition. Cross joins produce large result sets and are rarely used without filtering.

SELECT * FROM Employee CROSS JOIN Department;

A SELF JOIN joins a relation to itself. Because a relation cannot appear twice in the FROM clause under the same name, table aliases are mandatory. A common use case is finding hierarchical relationships, such as employees and their managers stored in the same table:

SELECT E1.name AS Employee, E2.name AS Manager
FROM Employee E1
INNER JOIN Employee E2 ON E1.manager_id = E2.emp_id;

## 5.4 Natural Join

A NATURAL JOIN automatically joins two relations on all columns with matching names. It is equivalent to an equi-join on the common attributes, with duplicate columns eliminated. Because its behavior depends on schema structure and changes automatically when column names change, natural joins are considered fragile and are generally avoided in production systems. The explicit USING clause is a safer alternative:

SELECT * FROM Employee JOIN Department USING (dept_id);

## 5.5 Set Operations

SQL's set operations correspond directly to relational algebra operations. UNION combines the results of two queries and eliminates duplicates. UNION ALL retains duplicates and is typically faster. INTERSECT returns tuples present in both result sets. EXCEPT (or MINUS in some implementations) returns tuples present in the first result but not the second. All set operations require union-compatibility: the same number of columns with compatible data types.

SELECT student_id FROM Enrolled WHERE course_id = 'CS101'
UNION
SELECT student_id FROM Enrolled WHERE course_id = 'CS201';

## 5.6 Subqueries

A subquery is a SELECT query nested inside another query. Subqueries may appear in the WHERE clause, the FROM clause, or the SELECT clause.

A nested subquery is evaluated once per execution of the outer query. It is independent of the outer query. For example, finding employees whose salary exceeds the average salary:

SELECT name FROM Employee
WHERE salary greater than (SELECT AVG(salary) FROM Employee);

A correlated subquery references attributes from the outer query and is evaluated once for each tuple in the outer result. For example, finding departments whose employees all earn above 50000:

SELECT dept_name FROM Department D
WHERE NOT EXISTS (
    SELECT 1 FROM Employee E
    WHERE E.dept_id = D.dept_id AND E.salary less-or-equal 50000
);

The EXISTS operator returns TRUE if the subquery produces any tuples. The NOT EXISTS operator returns TRUE if the subquery produces zero tuples. EXISTS is typically used with correlated subqueries.

The IN operator tests whether a value belongs to a set of values returned by a subquery. NOT IN is the negation.

SELECT name FROM Employee
WHERE dept_id IN (SELECT dept_id FROM Department WHERE budget greater than 100000);

The ANY and ALL operators compare a value with the results of a subquery using a comparison operator. The ANY operator returns TRUE if the comparison is true for at least one value in the subquery result. The ALL operator returns TRUE if the comparison is true for every value.

SELECT name FROM Employee
WHERE salary greater than ALL (SELECT salary FROM Employee WHERE job_title = 'Intern');

Subqueries in the FROM clause are called derived tables or inline views. They must be assigned an alias. Subqueries in the SELECT clause produce scalar values and must return exactly one row.

## Summary

This chapter explored the mechanisms for combining data across relations. We examined inner and outer joins, cross joins, self joins, and natural joins, each with appropriate use cases. Set operations provide SQL equivalents to the relational algebra union, intersection, and difference operators. Subqueries, including both nested and correlated forms, complement join-based querying and enable queries that would be cumbersome or impossible with joins alone.

## Exercises

### Review Questions

1. What is the essential difference between an INNER JOIN and a LEFT OUTER JOIN?
2. When would you use a SELF JOIN?
3. What restriction does UNION impose on the two queries it combines?
4. How does a correlated subquery differ from a nested subquery in execution?
5. What is the difference between IN and EXISTS?

### Application Problems

Given the relations: Student(sid, name, major), Course(cid, title, credits), Enrolled(sid, cid, grade). Write SQL queries for each of the following.

1. Find the names of all students enrolled in a course titled "Database Systems."
2. For each student, list the student's name and the total number of courses in which he or she is enrolled. Include students who are enrolled in zero courses.
3. Find the names of students who are enrolled in every course offered by the Computer Science department.
4. List course titles that have at least one student with a grade of A.
5. Find the names of students who have not enrolled in any course.

### Challenge Problem

Consider a corporate database with Employee(emp_id, name, salary, manager_id) where manager_id references emp_id. Write a single SQL query using a recursive approach (without a CTE) that finds all subordinates of a given manager, to any depth. Then explain why this query cannot be expressed correctly without recursion in standard SQL. (Hint: the number of levels is unknown.)
