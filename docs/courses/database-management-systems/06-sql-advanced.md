# Chapter 6 — Advanced SQL

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) apply aggregate functions with GROUP BY and HAVING; (2) use window functions for analytical queries; (3) write common table expressions and recursive CTEs; and (4) perform pivot and unpivot transformations.

## 6.1 Aggregate Functions

SQL provides five built-in aggregate functions. COUNT returns the number of tuples. SUM returns the sum of numeric values. AVG returns the arithmetic mean. MIN returns the minimum value. MAX returns the maximum value. All aggregate functions except COUNT(*) ignore NULL values. The DISTINCT keyword can be applied within an aggregate: COUNT(DISTINCT major) returns the number of distinct majors.

SELECT COUNT(*) AS total_students,
       AVG(gpa) AS average_gpa,
       MAX(gpa) AS highest_gpa
FROM Student;

## 6.2 Group By and Having

The GROUP BY clause partitions the result set into groups based on one or more attributes. Aggregate functions are then applied to each group independently. The SELECT clause may contain only grouping attributes and aggregate functions; all non-aggregated, non-grouping attributes are invalid in standard SQL.

SELECT major, AVG(gpa) AS avg_gpa, COUNT(*) AS num_students
FROM Student
GROUP BY major;

The HAVING clause filters groups after aggregation, analogous to how the WHERE clause filters tuples before aggregation. WHERE conditions apply to individual rows; HAVING conditions apply to groups.

SELECT major, AVG(gpa) AS avg_gpa
FROM Student
GROUP BY major
HAVING AVG(gpa) greater than 3.5;

The evaluation order of a query with grouping is: FROM then WHERE then GROUP BY then HAVING then SELECT then ORDER BY.

## 6.3 Window Functions

Window functions perform calculations across a set of rows related to the current row without collapsing them into a single output row. Each row retains its identity, and the window function returns a value computed over a window defined by the OVER clause.

The OVER clause specifies the window partitioning, ordering, and frame. PARTITION BY divides the rows into groups. ORDER BY determines the order within each partition. The frame specification defines which rows relative to the current row are included in the window.

The ROW_NUMBER function assigns a sequential integer to each row within a partition, starting at one:

SELECT name, salary, department_id,
       ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank_in_dept
FROM Employee;

The RANK function assigns the same rank to tied rows and leaves gaps in the sequence. DENSE_RANK assigns the same rank to tied rows but does not leave gaps. NTILE(n) divides the rows into n approximately equal buckets.

The LEAD function accesses the next row in the partition; the LAG function accesses the previous row. These functions are used for time-series analysis and delta calculations:

SELECT date, revenue,
       LAG(revenue, 1) OVER (ORDER BY date) AS prev_day_revenue,
       revenue - LAG(revenue, 1) OVER (ORDER BY date) AS daily_change
FROM DailySales;

Window frame clauses like ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW define the extent of the window for moving calculations such as running totals and moving averages.

## 6.4 Common Table Expressions

A common table expression (CTE) is a temporary named result set defined within a query using the WITH clause. CTEs improve readability by breaking complex queries into modular steps and can be referenced multiple times within the same query.

WITH HighEarners AS (
    SELECT name, salary FROM Employee WHERE salary greater than 100000
)
SELECT dept_id, COUNT(*) AS num_high_earners
FROM Employee
WHERE name IN (SELECT name FROM HighEarners)
GROUP BY dept_id;

CTEs are particularly valuable when the same subquery must appear in multiple places within a query, as the CTE name can be referenced repeatedly.

## 6.5 Recursive CTEs

A recursive CTE is a CTE that references itself, enabling the expression of recursive queries such as hierarchical tree traversal. The recursive CTE consists of two parts separated by UNION ALL. The anchor member is a non-recursive SELECT that produces the initial result set. The recursive member references the CTE name and is evaluated repeatedly until it produces no new rows.

WITH RECURSIVE Subordinates AS (
    -- Anchor member: start with the given manager
    SELECT emp_id, name, manager_id, 1 AS level
    FROM Employee
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive member: find direct reports of those already found
    SELECT E.emp_id, E.name, E.manager_id, S.level + 1
    FROM Employee E
    INNER JOIN Subordinates S ON E.manager_id = S.emp_id
)
SELECT * FROM Subordinates;

Recursive CTEs are crucial for queries involving bill-of-materials structures, organizational charts, network graphs, and any data with recursive hierarchical relationships.

## 6.6 Pivot and Unpivot

The PIVOT operation rotates rows into columns, transforming values from a column into multiple columns in the output. This operation is useful for creating cross-tabulation reports. While PIVOT syntax is not universally standardized, most DBMS platforms provide some mechanism.

In databases that support it:

SELECT *
FROM (SELECT year, quarter, revenue FROM Sales)
PIVOT (
    SUM(revenue)
    FOR quarter IN ('Q1' AS Q1, 'Q2' AS Q2, 'Q3' AS Q3, 'Q4' AS Q4)
) AS p;

The UNPIVOT operation is the inverse, rotating columns into rows. Alternative approaches using CASE expressions with GROUP BY can achieve the same effect in databases without native PIVOT support.

## Summary

This chapter covered the advanced SQL features that transform the language from a simple query tool into a powerful analytical platform. Aggregate functions with grouping enable summarization. Window functions support ranking, time-series analysis, and moving calculations without collapsing rows. CTEs and recursive CTEs modularize queries and enable hierarchical traversal. Pivot operations restructure data for reporting.

## Exercises

### Review Questions

1. What is the difference between WHERE and HAVING?
2. When is it necessary to use GROUP BY?
3. How does RANK differ from DENSE_RANK?
4. What is the purpose of the RECURSIVE keyword in a CTE?
5. In a window function, what does the PARTITION BY clause do?

### Application Problems

1. Given Sales(store_id, product_id, quantity, sale_date): Write a query that returns the total quantity sold per store per product. Then write a query that shows the running total of sales for each store ordered by date.
2. Given Employee(emp_id, name, salary, dept_id): Write a query using a window function that returns the top three highest-paid employees in each department.
3. Using a recursive CTE, generate all ancestors of a given node in a table Categories(category_id, name, parent_category_id).
4. Write a query that pivots quarterly sales data: Sales(product_id, year, quarter, revenue). The result should have one row per product with columns for each quarter's revenue.

### Challenge Problem

Design a query that computes the median salary per department without using any built-in median function. You may use window functions and CTEs. Then extend the solution to handle departments with an even number of employees correctly, returning the average of the two middle values.
