# Chapter 3: The Relational Model

## Learning Objectives

- Define relations, tuples, attributes, and domains formally
- Classify keys: superkey, candidate key, primary key, foreign key
- Explain and enforce integrity constraints: domain, entity, referential
- Express queries using relational algebra operations
- Understand the closure property of relational algebra
- Apply selection, projection, join, set operations, and division

## Theory

### 3.1 Introduction to the Relational Model

The relational model was proposed by E.F. Codd in 1970 in his seminal paper "A Relational Model of Data for Large Shared Data Banks." It revolutionized database management by providing a mathematically rigorous framework for data organization and manipulation.

The model is built on set theory and first-order predicate logic. Its elegance comes from representing all data as simple relations (tables) and providing a small set of powerful operations for querying and manipulating that data.

### 3.2 Basic Structure

**Relation:** A relation is a table with columns and rows. More formally, a relation is a subset of the Cartesian product of one or more domains.

**Tuple:** A tuple is a row in a relation. Each tuple represents a relationship among a set of values.

**Attribute:** An attribute is a column in a relation. Each attribute has a name and belongs to a domain.

**Domain:** A domain is a set of permitted values for an attribute. Domains are data types with constraints. Example: The domain of `student_age` might be integers in the range 16–120.

**Degree (Arity):** The number of attributes in a relation. A relation of degree 3 has three columns.

**Cardinality:** The number of tuples in a relation. A relation with cardinality 100 has 100 rows.

**Relation Schema vs. Relation Instance:**
- **Schema:** The logical definition — name of the relation plus its attribute names and domains. Example: `STUDENT(student_id: INTEGER, name: VARCHAR(100), major: VARCHAR(50))`
- **Instance:** The actual data at a given point in time — a set of tuples conforming to the schema

**Properties of Relations:**
- Each relation has a unique name within the database schema
- Every cell contains exactly one atomic value (the relational model requires 1NF)
- Each attribute has a unique name
- The order of attributes is insignificant
- The order of tuples is insignificant (a relation is a set)
- No duplicate tuples are allowed (every relation has a key)

### 3.3 Keys

Keys are crucial for uniquely identifying tuples and establishing relationships between relations.

**Superkey:** A set of one or more attributes that uniquely identifies a tuple within a relation. Example: In STUDENT, both `{student_id}` and `{student_id, name}` are superkeys.

**Candidate Key:** A minimal superkey — a superkey such that no proper subset is a superkey. Example: If both `{student_id}` and `{email}` uniquely identify students and are minimal, both are candidate keys.

**Primary Key:** One candidate key chosen by the database designer as the principal identifier. Other candidate keys become **alternate keys**.

**Foreign Key:** An attribute (or set of attributes) in one relation that references the primary key of another relation. Foreign keys establish relationships between relations.

**Example:**
```
STUDENT(student_id, name, email, dept_id)
                             ^^^^^^^^
                             Foreign key referencing DEPARTMENT

DEPARTMENT(dept_id, dept_name, location)
           ^^^^^^^
           Primary key
```

### 3.4 Integrity Constraints

Integrity constraints ensure the correctness and consistency of data.

**Domain Constraints:** Each attribute value must be from its declared domain. Example: `age` must be an integer; `gender` must be 'M', 'F', or 'O'.

**Entity Integrity:** No attribute that is part of the primary key can be null. This ensures every tuple is uniquely identifiable.

**Referential Integrity:** A foreign key value must either match a primary key value in the referenced relation or be null. This prevents orphan records.

**Semantic Integrity (Business Rules):** Additional constraints specified by the application domain. Examples: "An employee's salary cannot exceed their manager's salary." "A student's GPA must be between 0.0 and 4.0."

### 3.5 Relational Algebra

Relational algebra is a procedural query language — it describes *how* to compute a result by applying operations to relations. Every operation takes one or two relations as input and produces a new relation as output (the **closure property**).

The operations are divided into:

**Basic Operations:** Selection, Projection, Union, Set Difference, Cartesian Product, Rename

**Derived Operations:** Join (several types), Intersection, Division

### 3.6 Basic Relational Algebra Operations

**SELECT (σ):** Selects tuples that satisfy a given predicate.

Syntax: `σ<predicate>(R)`

Example: Find all students with GPA > 3.5:
`σ<GPA > 3.5>(STUDENT)`

Selection is commutative: `σ<cond1>(σ<cond2>(R)) = σ<cond2>(σ<cond1>(R))`

**PROJECT (π):** Selects specific attributes (columns) from a relation.

Syntax: `π<attribute_list>(R)`

Example: Get names and majors of all students:
`π<name, major>(STUDENT)`

Projection removes duplicate tuples automatically.

**UNION (∪):** Returns all tuples that appear in either relation. Both relations must be **union-compatible** (same number of attributes, corresponding attributes from the same domain).

Syntax: `R ∪ S`

Example: Get all employees who are either managers or engineers:
`π<emp_id>(MANAGER) ∪ π<emp_id>(ENGINEER)`

**SET DIFFERENCE (−):** Returns all tuples that appear in the first relation but not the second.

Syntax: `R − S`

Example: Get employees who are not managers:
`π<emp_id>(EMPLOYEE) − π<emp_id>(MANAGER)`

**CARTESIAN PRODUCT (×):** Combines every tuple of R with every tuple of S.

Syntax: `R × S`

If R has n tuples and S has m tuples, R × S has n × m tuples. Each output tuple combines all attributes of R with all attributes of S.

**RENAME (ρ):** Renames a relation or its attributes.

Syntax: `ρ<new_name>(R)` or `ρ<new_name(attr1, ..., attrN)>(R)`

### 3.7 Derived Operations

**INTERSECTION (∩):** Returns tuples appearing in both relations.

Syntax: `R ∩ S = R − (R − S)`

Example: Find employees who are both managers and engineers.
`π<emp_id>(MANAGER) ∩ π<emp_id>(ENGINEER)`

**THETA JOIN (⋈θ):** A Cartesian product followed by a selection.

Syntax: `R ⋈<condition> S = σ<condition>(R × S)`

**EQUIJOIN:** A theta join where the condition is equality of specific attributes. The result includes both join attributes.

**NATURAL JOIN (⋈):** An equijoin on all attributes with the same name, with duplicate join attributes removed.

Example: `STUDENT ⋈ DEPARTMENT` joins on `dept_id` (present in both). The result has `dept_id` only once.

**LEFT OUTER JOIN (⟕):** Like join, but preserves all tuples from the left relation. Missing right-side values become NULL.

**RIGHT OUTER JOIN (⟖):** Preserves all tuples from the right relation.

**FULL OUTER JOIN (⟗):** Preserves tuples from both relations.

**DIVISION (÷):** Returns tuples from R that are associated with *every* tuple of S. Used for "all queries" (e.g., "Find students who take all courses").

Syntax: R ÷ S, where S's attribute set is a subset of R's attribute set.

### 3.8 Relational Algebra Example: University Database

Given the schema:
```
STUDENT(sid, name, major, gpa)
COURSE(cid, title, credits)
ENROLLED(sid, cid, semester, grade)
```

**Query 1:** Find names of students with GPA > 3.0.
```
π<name>(σ<gpa > 3.0>(STUDENT))
```

**Query 2:** Find student IDs of students enrolled in 'CS101'.
```
π<sid>(σ<cid = 'CS101'>(ENROLLED))
```

**Query 3:** Find names of students enrolled in 'CS101'.
```
π<name>(σ<cid = 'CS101'>(ENROLLED) ⋈ STUDENT)
```

**Query 4:** Find student IDs of students not enrolled in any course.
```
π<sid>(STUDENT) − π<sid>(ENROLLED)
```

**Query 5:** Find student IDs of students enrolled in *all* courses.
```
π<sid, cid>(ENROLLED) ÷ π<cid>(COURSE)
```

**Query 6:** Find courses taken by student with ID 123.
```
π<cid>(σ<sid = 123>(ENROLLED))
```

### 3.9 Relational Calculus

**Tuple Relational Calculus:** A non-procedural query language. Queries specify *what* to retrieve, not *how*.

Syntax: `{ t | CONDITION(t) }` — the set of all tuples t satisfying the condition.

Example: Find students with GPA > 3.5:
`{ t | t ∈ STUDENT ∧ t.gpa > 3.5 }`

Example: Find names of students in courses taught by 'Dr. Smith':
`{ s.name | s ∈ STUDENT ∧ ∃ e ∈ ENROLLED (e.sid = s.sid ∧ ∃ c ∈ COURSE (c.cid = e.cid ∧ c.instructor = 'Dr. Smith')) }`

**Domain Relational Calculus:** Uses domain variables instead of tuple variables.

Syntax: `{ <a1, ..., an> | CONDITION(a1, ..., an) }`

### 3.10 Relational Algebra Equivalences

Understanding equivalences is crucial for query optimization:

- **Cascading Selection:** `σ<cond1>(σ<cond2>(R)) = σ<cond1 ∧ cond2>(R)`
- **Commuting Selection and Projection:** If condition only involves attributes in A: `π<A>(σ<cond>(R)) = σ<cond>(π<A>(R))`
- **Pushing Selection through Join:** `σ<cond>(R ⋈ S) = σ<cond>(R) ⋈ S` if cond involves only R attributes
- **Commuting Projection with Cartesian Product:** `π<A ∪ B>(R × S) = π<A>(R) × π<B>(S)` if A from R, B from S

## Examples

**Example 3.1: Complete University Query in Relational Algebra**

Schema: `STUDENT(sid, sname, major)` and `ENROLLED(sid, course)`

Find "names of students enrolled in 'DBMS' or 'OS'":

Step 1: Get sids taking DBMS or OS
`σ<course = 'DBMS' ∨ course = 'OS'>(ENROLLED)`

Step 2: Join with STUDENT to get names
`π<sname>(STUDENT ⋈ σ<course = 'DBMS' ∨ course = 'OS'>(ENROLLED))`

**Example 3.2: Division in Action**

Schema: `PRODUCT(pid, pname)`, `SALE(sid, pid)`, `STORE(sid, sname)`

Query: "Find stores that sell ALL products."

Step 1: Get all product IDs: `π<pid>(PRODUCT)`
Step 2: Divide SALE by all products: `π<sid, pid>(SALE) ÷ π<pid>(PRODUCT)`
Step 3: Join with STORE for names: `π<sname>(STORE ⋈ (π<sid, pid>(SALE) ÷ π<pid>(PRODUCT)))`

## Summary

- A relation is a set of tuples; every attribute has a domain; every tuple is unique.
- Keys (superkey, candidate, primary, foreign) provide identity and relationships.
- Integrity constraints (domain, entity, referential) maintain data correctness.
- Relational algebra is a procedural query language with operations: selection (σ), projection (π), union (∪), difference (−), product (×), join (⋈), and division (÷).
- Each operation takes relations as input and produces a new relation (closure).
- Relational calculus provides a declarative alternative.

## Exercises

### Basic

1. Define the following terms: relation, tuple, attribute, domain, degree, cardinality.

2. Given the relation `EMPLOYEE(emp_id, name, department, salary)`:
   a) What is the degree of this relation?
   b) If there are 50 employees, what is the cardinality?
   c) Write the relational algebra expression to find names of employees in the 'Sales' department.
   d) Write the expression to find the department of employee with ID 101.

3. What is the difference between a superkey and a candidate key? Give an example of each.

4. Explain why entity integrity requires that primary key attributes cannot be null.

### Intermediate

5. Given:
   `STUDENT(sid, sname)` with tuples (1, 'Alice'), (2, 'Bob'), (3, 'Charlie')
   `TAKES(sid, course)` with tuples (1, 'DBMS'), (1, 'OS'), (2, 'DBMS'), (3, 'OS')
   
   Compute the result of:
   a) `π<sname>(σ<sid = 1>(STUDENT))`
   b) `π<sid>(TAKES) − π<sid>(σ<course = 'OS'>(TAKES))`
   c) `STUDENT ⋈ TAKES`

6. Write relational algebra for: "Find employee IDs of employees who work on ALL projects." Schema: `WORKS_ON(emp_id, proj_id)`, `PROJECT(proj_id, name)`.

7. Convert the SQL query `SELECT sname FROM Student WHERE major = 'CS' AND sid IN (SELECT sid FROM Enrolled WHERE grade = 'A')` into relational algebra.

### Advanced

8. Prove the equivalence: `σ<cond>(R ⋈ S) = σ<cond>(R) ⋈ S` when cond involves only attributes of R.

9. Given the relational algebra expression `π<course>(σ<grade = 'F'>(ENROLLED))`, explain what it returns. Write the equivalent SQL query and a real-world scenario where this query would be useful.

10. For the division operation R ÷ S:
    a) Explain the condition under which R ÷ S is defined (attribute compatibility)
    b) Show that division can be expressed using basic operations: `R ÷ S = π<R_attrs - S_attrs>(R) − π<R_attrs - S_attrs>((π<R_attrs - S_attrs>(R) × S) − R)`
    c) Trace this expression with R = {(1,a), (1,b), (2,a), (2,b), (3,a)} and S = {(a), (b)}
