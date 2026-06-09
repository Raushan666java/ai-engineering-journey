# Chapter 3 — The Relational Model

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) define a relation schema and a relation instance; (2) distinguish among superkeys, candidate keys, primary keys, and foreign keys; (3) write relational algebra expressions for common queries; (4) express queries using tuple relational calculus; and (5) express queries using domain relational calculus.

## 3.1 Relation Schema and Instance

The relational model is built on the mathematical concept of a relation derived from set theory. Let D1, D2, Dn be a set of domains. A relation r is a subset of the Cartesian product D1 times D2 times ... times Dn. Thus, a relation is a set of n-tuples: r = { (d1, d2, dn) | d1 in D1, d2 in D2, ..., dn in Dn }.

A relation schema R denotes the name of the relation together with its set of attributes and the domain of each attribute. We write R(A1, A2, An) to indicate a relation schema named R with attributes A1 through An. For example, Student(student_id, name, major, gpa) is a relation schema.

A relation instance is a set of tuples conforming to the schema at a given moment. Relations are unordered because they are sets, and duplicates are not permitted. Each tuple in a relation is a unique combination of attribute values. The degree of a relation is the number of attributes. The cardinality of a relation is the number of tuples.

The relational model enforces the following properties. Each cell contains exactly one atomic value; the model adheres to the first normal form assumption. All tuples in a relation are distinct. The ordering of attributes is irrelevant because attributes are referenced by name. The ordering of tuples is irrelevant because relations are sets.

## 3.2 Keys in the Relational Model

A superkey is a set of attributes that uniquely identifies a tuple within a relation. Formally, for any two distinct tuples t1 and t2 in a relation instance r, there exists at least one attribute A in the superkey such that t1[A] is not equal to t2[A]. Every relation has at least one superkey, which may be the entire set of attributes.

A candidate key is a minimal superkey: no proper subset of it is a superkey. A relation may have multiple candidate keys. For example, in the relation Employee(emp_id, ssn, email, name), both emp_id and ssn are candidate keys.

The primary key is the candidate key selected by the database designer as the principal identifier. Primary key values must not be NULL, and they must be unique across all tuples.

A foreign key is a set of attributes in one relation that references the primary key of another relation. The foreign key constraint, also called referential integrity, ensures that every value of the foreign key either matches a primary key value in the referenced relation or is wholly NULL. Foreign keys model relationships across relations.

## 3.3 Relational Algebra

Relational algebra is a procedural query language consisting of a set of operations that take one or two relations as input and produce a new relation as output. The fundamental operations are described below.

The select operation, symbolized by sigma subscript condition (R), returns the set of tuples from relation R that satisfy the given condition. The condition is a Boolean expression composed of attribute comparisons using operators =, <>, less than, greater than, less-than-or-equal, and greater-than-or-equal combined with conjunction, disjunction, and negation. Select is a unary operation that filters rows. For example, sigma subscript salary greater than 50000 (Employee) returns all employees earning more than 50000.

The project operation, symbolized by pi subscript A1, A2, Ak (R), returns a relation containing only the specified attributes A1 through Ak, with duplicate tuples eliminated. Project is a unary operation that filters columns. For example, pi subscript name, salary (Employee) returns the name and salary columns of Employee.

The union operation, R union S, returns the set of all tuples belonging to either R or S or both. R and S must be union-compatible: they must have the same number of attributes, and corresponding attributes must be drawn from the same domain.

The set difference operation, R minus S, returns the set of all tuples belonging to R but not S. R and S must be union-compatible.

The intersection operation, R intersect S, returns the set of all tuples belonging to both R and S. It can be expressed as R minus (R minus S).

The Cartesian product operation, R times S, returns the set of all concatenated tuples from R and S. If R has m tuples and S has n tuples, the product yields m times n tuples. Each tuple in the result is the concatenation of one tuple from R with one tuple from S.

The join operation is a derived operation that combines the Cartesian product with a selection condition. The most common variant is the theta-join: R join subscript theta S = sigma subscript theta (R times S). The equi-join is a theta-join where the condition is an equality. The natural join, symbolized by the bowtie operator, is an equi-join over all attributes with matching names, followed by the elimination of duplicate attributes.

The division operation, R divided-by S, is used for queries of the form find all values that are associated with every value in a specified set. Division is particularly useful for universal quantification queries such as find students who have taken all required courses.

Additional operations include the rename operation, symbolized by rho, which allows naming the result of an expression, and assignment, which allows storing intermediate results.

## 3.4 Tuple Relational Calculus

Tuple relational calculus is a non-procedural query language. A query is expressed as the set of all tuples satisfying a given predicate: { t | P(t) }. The tuple variable t ranges over a relation, and P is a formula built from atomic conditions using logical connectives and quantifiers.

An atomic condition in tuple calculus has one of the following forms: t in R, where R is a relation; t[A] theta c, where theta is a comparison operator and c is a constant; or t[A] theta s[B], comparing two attributes.

Formulas are constructed using the logical connectives and (conjunction), or (disjunction), not (negation), and the quantifiers there-exists and for-all. A tuple variable is said to be free if it is not bound by a quantifier; the result of a query is the set of all free variables that satisfy the formula.

For example, the query find the names of employees earning more than 50000 is expressed as: { t[name] | t in Employee and t[salary] greater than 50000 }. The query find employees who manage at least one department is: { t | t in Employee and there-exists d in Department ( d[manager_id] = t[emp_id] ) }.

## 3.5 Domain Relational Calculus

Domain relational calculus uses domain variables that take values from attribute domains rather than tuple variables. A query has the form: { (x1, x2, xk) | P(x1, x2, xk) }, where each xi is a domain variable and P is a formula.

An atomic condition in domain calculus has the form: (x1, x2, xn) in R; or x theta y; or x theta c. Formulas are constructed with and, or, not, and quantifiers as in tuple calculus.

The domain calculus query for employee names earning more than 50000 is: { n | there-exists i ( (i, n, s) in Employee and s greater than 50000 ) }.

Both tuple and domain relational calculi are equivalent in expressive power to relational algebra; any query expressible in one formalism is expressible in the others. This equivalence is fundamental to the completeness of SQL, which is based on a combination of relational algebra and calculus concepts.

## Summary

This chapter developed the formal foundations of the relational model. We defined relation schemas and instances, examined key constraints, and presented relational algebra as a procedural query language. Tuple and domain relational calculi were introduced as declarative alternatives. These formalisms together constitute the theoretical basis for SQL, which we study in the following three chapters.

## Exercises

### Review Questions

1. What is the difference between a relation schema and a relation instance?
2. Define superkey, candidate key, and primary key. How are they related?
3. What does it mean for two relations to be union-compatible?
4. State the primary difference between procedural and non-procedural query languages.
5. What is the division operation used for in relational algebra?

### Application Problems

1. Given the relations Student(student_id, name, major) and Enrolled(student_id, course_id, grade), write relational algebra expressions for the following: (a) names of all computer science majors, (b) student IDs of students enrolled in CS 101, (c) names of students who received an A in any course, (d) student IDs of students enrolled in every course offered.
2. Write tuple relational calculus queries for each of the queries in Problem 1(a) through 1(d).
3. Given R(A, B) = { (1, a), (2, b), (3, c) } and S(B, C) = { (a, x), (a, y), (c, z) }, compute the natural join of R and S.

### Challenge Problem

Prove that the division operation R divided-by S can be expressed using only the fundamental operations of selection, projection, Cartesian product, and set difference. Provide the step-by-step derivation for a general case where R has attributes (A, B) and S has attributes (B).
