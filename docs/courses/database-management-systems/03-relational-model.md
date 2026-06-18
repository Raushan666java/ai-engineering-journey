# Chapter 3: The Relational Model

## Learning Objectives

- Define relations, tuples, attributes, and domains formally
- Classify keys: superkey, candidate key, primary key, foreign key
- Explain and enforce integrity constraints: domain, entity, referential
- Express queries using relational algebra operations
- Understand the closure property of relational algebra
- Apply selection, projection, join, set operations, and division

## Theory

![Relational Model Mindmap](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/database-management-systems/ch03-relational-model.png)

### 3.1 Introduction to the Relational Model

The relational model was proposed by E.F. Codd in 1970 in his seminal paper "A Relational Model of Data for Large Shared Data Banks." It revolutionized database management by providing a mathematically rigorous framework for data organization and manipulation.

The model is built on set theory and first-order predicate logic. Its elegance comes from representing all data as simple relations (tables) and providing a small set of powerful operations for querying and manipulating that data.

### 3.2 Basic Structure

**Relation:** A relation is a table with columns and rows. More formally, a relation is a subset of the Cartesian product of one or more domains.

**Tuple:** A tuple is a row in a relation. Each tuple represents a relationship among a set of values.

**Attribute:** An attribute is a column in a relation. Each attribute has a name and belongs to a domain.

**Domain:** A domain is a set of permitted values for an attribute. Domains are data types with constraints. Example: The domain of `student_age` might be integers in the range 16â€“120.

**Degree (Arity):** The number of attributes in a relation. A relation of degree 3 has three columns.

**Cardinality:** The number of tuples in a relation. A relation with cardinality 100 has 100 rows.

**Relation Schema vs. Relation Instance:**
- **Schema:** The logical definition â€” name of the relation plus its attribute names and domains. Example: `STUDENT(student_id: INTEGER, name: VARCHAR(100), major: VARCHAR(50))`
- **Instance:** The actual data at a given point in time â€” a set of tuples conforming to the schema

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

**Candidate Key:** A minimal superkey â€” a superkey such that no proper subset is a superkey. Example: If both `{student_id}` and `{email}` uniquely identify students and are minimal, both are candidate keys.

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

Relational algebra is a procedural query language â€” it describes *how* to compute a result by applying operations to relations. Every operation takes one or two relations as input and produces a new relation as output (the **closure property**).

The operations are divided into:

**Basic Operations:** Selection, Projection, Union, Set Difference, Cartesian Product, Rename

**Derived Operations:** Join (several types), Intersection, Division

### 3.6 Basic Relational Algebra Operations

**SELECT (Ïƒ):** Selects tuples that satisfy a given predicate.

Syntax: `Ïƒ<predicate>(R)`

Example: Find all students with GPA > 3.5:
`Ïƒ<GPA > 3.5>(STUDENT)`

Selection is commutative: `Ïƒ<cond1>(Ïƒ<cond2>(R)) = Ïƒ<cond2>(Ïƒ<cond1>(R))`

**PROJECT (Ï€):** Selects specific attributes (columns) from a relation.

Syntax: `Ï€<attribute_list>(R)`

Example: Get names and majors of all students:
`Ï€<name, major>(STUDENT)`

Projection removes duplicate tuples automatically.

**UNION (âˆª):** Returns all tuples that appear in either relation. Both relations must be **union-compatible** (same number of attributes, corresponding attributes from the same domain).

Syntax: `R âˆª S`

Example: Get all employees who are either managers or engineers:
`Ï€<emp_id>(MANAGER) âˆª Ï€<emp_id>(ENGINEER)`

**SET DIFFERENCE (âˆ’):** Returns all tuples that appear in the first relation but not the second.

Syntax: `R âˆ’ S`

Example: Get employees who are not managers:
`Ï€<emp_id>(EMPLOYEE) âˆ’ Ï€<emp_id>(MANAGER)`

**CARTESIAN PRODUCT (Ã—):** Combines every tuple of R with every tuple of S.

Syntax: `R Ã— S`

If R has n tuples and S has m tuples, R Ã— S has n Ã— m tuples. Each output tuple combines all attributes of R with all attributes of S.

**RENAME (Ï):** Renames a relation or its attributes.

Syntax: `Ï<new_name>(R)` or `Ï<new_name(attr1, ..., attrN)>(R)`

### 3.7 Derived Operations

**INTERSECTION (âˆ©):** Returns tuples appearing in both relations.

Syntax: `R âˆ© S = R âˆ’ (R âˆ’ S)`

Example: Find employees who are both managers and engineers.
`Ï€<emp_id>(MANAGER) âˆ© Ï€<emp_id>(ENGINEER)`

**THETA JOIN (â‹ˆÎ¸):** A Cartesian product followed by a selection.

Syntax: `R â‹ˆ<condition> S = Ïƒ<condition>(R Ã— S)`

**EQUIJOIN:** A theta join where the condition is equality of specific attributes. The result includes both join attributes.

**NATURAL JOIN (â‹ˆ):** An equijoin on all attributes with the same name, with duplicate join attributes removed.

Example: `STUDENT â‹ˆ DEPARTMENT` joins on `dept_id` (present in both). The result has `dept_id` only once.

**LEFT OUTER JOIN (âŸ•):** Like join, but preserves all tuples from the left relation. Missing right-side values become NULL.

**RIGHT OUTER JOIN (âŸ–):** Preserves all tuples from the right relation.

**FULL OUTER JOIN (âŸ—):** Preserves tuples from both relations.

**DIVISION (Ã·):** Returns tuples from R that are associated with *every* tuple of S. Used for "all queries" (e.g., "Find students who take all courses").

Syntax: R Ã· S, where S's attribute set is a subset of R's attribute set.

### 3.8 Relational Algebra Example: University Database

Given the schema:
```
STUDENT(sid, name, major, gpa)
COURSE(cid, title, credits)
ENROLLED(sid, cid, semester, grade)
```

**Query 1:** Find names of students with GPA > 3.0.
```
Ï€<name>(Ïƒ<gpa > 3.0>(STUDENT))
```

**Query 2:** Find student IDs of students enrolled in 'CS101'.
```
Ï€<sid>(Ïƒ<cid = 'CS101'>(ENROLLED))
```

**Query 3:** Find names of students enrolled in 'CS101'.
```
Ï€<name>(Ïƒ<cid = 'CS101'>(ENROLLED) â‹ˆ STUDENT)
```

**Query 4:** Find student IDs of students not enrolled in any course.
```
Ï€<sid>(STUDENT) âˆ’ Ï€<sid>(ENROLLED)
```

**Query 5:** Find student IDs of students enrolled in *all* courses.
```
Ï€<sid, cid>(ENROLLED) Ã· Ï€<cid>(COURSE)
```

**Query 6:** Find courses taken by student with ID 123.
```
Ï€<cid>(Ïƒ<sid = 123>(ENROLLED))
```

### 3.9 Relational Calculus

**Tuple Relational Calculus:** A non-procedural query language. Queries specify *what* to retrieve, not *how*.

Syntax: `{ t | CONDITION(t) }` â€” the set of all tuples t satisfying the condition.

Example: Find students with GPA > 3.5:
`{ t | t âˆˆ STUDENT âˆ§ t.gpa > 3.5 }`

Example: Find names of students in courses taught by 'Dr. Smith':
`{ s.name | s âˆˆ STUDENT âˆ§ âˆƒ e âˆˆ ENROLLED (e.sid = s.sid âˆ§ âˆƒ c âˆˆ COURSE (c.cid = e.cid âˆ§ c.instructor = 'Dr. Smith')) }`

**Domain Relational Calculus:** Uses domain variables instead of tuple variables.

Syntax: `{ <a1, ..., an> | CONDITION(a1, ..., an) }`

### 3.10 Relational Algebra Equivalences

Understanding equivalences is crucial for query optimization:

- **Cascading Selection:** `Ïƒ<cond1>(Ïƒ<cond2>(R)) = Ïƒ<cond1 âˆ§ cond2>(R)`
- **Commuting Selection and Projection:** If condition only involves attributes in A: `Ï€<A>(Ïƒ<cond>(R)) = Ïƒ<cond>(Ï€<A>(R))`
- **Pushing Selection through Join:** `Ïƒ<cond>(R â‹ˆ S) = Ïƒ<cond>(R) â‹ˆ S` if cond involves only R attributes
- **Commuting Projection with Cartesian Product:** `Ï€<A âˆª B>(R Ã— S) = Ï€<A>(R) Ã— Ï€<B>(S)` if A from R, B from S

## Examples

**Example 3.1: Complete University Query in Relational Algebra**

Schema: `STUDENT(sid, sname, major)` and `ENROLLED(sid, course)`

Find "names of students enrolled in 'DBMS' or 'OS'":

Step 1: Get sids taking DBMS or OS
`Ïƒ<course = 'DBMS' âˆ¨ course = 'OS'>(ENROLLED)`

Step 2: Join with STUDENT to get names
`Ï€<sname>(STUDENT â‹ˆ Ïƒ<course = 'DBMS' âˆ¨ course = 'OS'>(ENROLLED))`

**Example 3.2: Division in Action**

Schema: `PRODUCT(pid, pname)`, `SALE(sid, pid)`, `STORE(sid, sname)`

Query: "Find stores that sell ALL products."

Step 1: Get all product IDs: `Ï€<pid>(PRODUCT)`
Step 2: Divide SALE by all products: `Ï€<sid, pid>(SALE) Ã· Ï€<pid>(PRODUCT)`
Step 3: Join with STORE for names: `Ï€<sname>(STORE â‹ˆ (Ï€<sid, pid>(SALE) Ã· Ï€<pid>(PRODUCT)))`

## ðŸ’¡ Pro Tips

1. **Master relational algebra first** â€” it is the theoretical foundation of SQL query optimization. Every SQL query is a relational algebra expression under the hood.
2. **Division is the trickiest operation** â€” it answers "all" queries ("students who take ALL courses"). Practice it with simple examples to build intuition.
3. **Keys are not just constraints â€” they are query design tools** â€” understanding which columns are keys tells you where to join and what results to expect.
4. **The closure property is why you can nest queries** â€” because every algebra operation produces a relation, you can compose them arbitrarily.
5. **Learn the equivalence rules** â€” they are what the query optimizer uses to transform your slow query into a fast one.

## One-Sentence Takeaways

- **3.1:** The relational model, proposed by E.F. Codd in 1970, provides a mathematically rigorous framework for data organization using set theory and predicate logic.
- **3.2:** A relation is a set of tuples (rows) with attributes (columns) drawn from domains (data types), with properties including atomic values, unique tuples, and unordered rows/columns.
- **3.3:** Keys â€” superkey, candidate, primary, foreign â€” provide unique identification and establish relationships between relations.
- **3.4:** Integrity constraints â€” domain, entity, referential, and semantic â€” ensure data correctness and consistency.
- **3.5:** Relational algebra is a procedural language where every operation takes relations as input and produces a new relation (closure property).
- **3.6:** Basic operations include selection (Ïƒ), projection (Ï€), union (âˆª), set difference (âˆ’), Cartesian product (Ã—), and rename (Ï).
- **3.7:** Derived operations â€” join types, intersection, and division â€” provide powerful querying capabilities built from basic operations.
- **3.8:** Algebraic equivalence rules (pushing selection through join, commuting projection with product) are the foundation of query optimization.
- **3.9:** Relational calculus takes a declarative approach â€” specifying WHAT to retrieve, not HOW.

## Concept Comparison Table

| Operation | Symbol | What It Does | Example |
|-----------|--------|-------------|---------|
| **Selection** | Ïƒ | Filters rows by condition | Ïƒ<gpa > 3.5>(STUDENT) |
| **Projection** | Ï€ | Selects columns | Ï€<name, major>(STUDENT) |
| **Union** | âˆª | Combines rows from two relations | R âˆª S |
| **Set Difference** | âˆ’ | Rows in first but not second | R âˆ’ S |
| **Cartesian Product** | Ã— | Every row of R paired with every row of S | R Ã— S |
| **Rename** | Ï | Changes relation or attribute name | Ï<new_name>(R) |
| **Intersection** | âˆ© | Rows in both relations | R âˆ© S |
| **Theta Join** | â‹ˆÎ¸ | Product + selection | Ïƒ<cond>(R Ã— S) |
| **Natural Join** | â‹ˆ | Equijoin on common attributes, deduplicated | R â‹ˆ S |
| **Division** | Ã· | Rows in R associated with ALL rows in S | R Ã· S |

## Quick Reference

| Key Type | Definition | SQL Equivalent |
|---------|-----------|----------------|
| **Superkey** | Set of attributes that uniquely identifies a tuple | Any set containing a UNIQUE column |
| **Candidate Key** | Minimal superkey | Each UNIQUE or PRIMARY KEY candidate |
| **Primary Key** | Chosen candidate key | PRIMARY KEY constraint |
| **Foreign Key** | References primary key of another relation | FOREIGN KEY (col) REFERENCES other(col) |
| **Alternate Key** | Candidate keys not chosen as primary | UNIQUE constraint |

| Integrity Constraint | Rule | SQL Enforcement |
|---------------------|------|-----------------|
| Domain | Value must be from declared type | Data type + CHECK |
| Entity | Primary key cannot be null | NOT NULL on PK |
| Referential | Foreign key must match PK or be null | FOREIGN KEY + REFERENCES |
| Semantic | Business rules | CHECK constraints |

## Cross-Application Matrix

| Relational Algebra Concept | Applied In | Why It Matters |
|---------------------------|-----------|----------------|
| **Selection + Projection** | Every SQL SELECT with WHERE | Filters rows and columns â€” the most common operations |
| **Natural Join** | Multi-table queries | Combines related data from normalized tables |
| **Division** | "All" queries in any domain | Students taking all courses, stores selling all products |
| **Set Difference** | Anti-joins, missing records | Customers without orders, products never sold |
| **Cartesian Product** | Cross joins, date range generation | Generating all combinations of independent sets |
| **Closure Property** | Nested queries, CTEs, subqueries | Enables composable, modular query design |

## Chapter Quiz

1. Which of the following is NOT a property of a relation?
   a) Each cell contains an atomic value
   b) The order of tuples matters
   c) Each attribute has a unique name
   d) No duplicate tuples are allowed

2. A candidate key is:
   a) A set of attributes that uniquely identifies a tuple
   b) A minimal superkey
   c) The same as a primary key
   d) A foreign key reference

3. Which operation returns only tuples that appear in both relations?
   a) Union
   b) Set difference
   c) Intersection
   d) Cartesian product

4. Relational algebra is:
   a) A declarative query language
   b) A procedural query language
   c) A data definition language
   d) A programming language

5. The closure property of relational algebra means:
   a) Every operation returns a single value
   b) Every operation produces a relation as output
   c) Operations cannot be combined
   d) Results are always closed to modification

6. Division (Ã·) is used for:
   a) Finding rows in R that match all rows in S
   b) Splitting a relation into two parts
   c) Dividing attribute values
   d) Removing duplicate tuples

7. Which join preserves all tuples from the left relation?
   a) INNER JOIN
   b) LEFT OUTER JOIN
   c) RIGHT OUTER JOIN
   d) FULL OUTER JOIN

8. The natural join differs from an equijoin because:
   a) It only uses inequality conditions
   b) It joins on all common attributes and removes duplicate columns
   c) It includes non-matching rows
   d) It produces a Cartesian product first

**Answers:** 1-b, 2-b, 3-c, 4-b, 5-b, 6-a, 7-b, 8-b

## Summary

- A relation is a set of tuples; every attribute has a domain; every tuple is unique.
- Keys (superkey, candidate, primary, foreign) provide identity and relationships.
- Integrity constraints (domain, entity, referential) maintain data correctness.
- Relational algebra is a procedural query language with operations: selection (Ïƒ), projection (Ï€), union (âˆª), difference (âˆ’), product (Ã—), join (â‹ˆ), and division (Ã·).
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
   a) `Ï€<sname>(Ïƒ<sid = 1>(STUDENT))`
   b) `Ï€<sid>(TAKES) âˆ’ Ï€<sid>(Ïƒ<course = 'OS'>(TAKES))`
   c) `STUDENT â‹ˆ TAKES`

6. Write relational algebra for: "Find employee IDs of employees who work on ALL projects." Schema: `WORKS_ON(emp_id, proj_id)`, `PROJECT(proj_id, name)`.

7. Convert the SQL query `SELECT sname FROM Student WHERE major = 'CS' AND sid IN (SELECT sid FROM Enrolled WHERE grade = 'A')` into relational algebra.

### Advanced

8. Prove the equivalence: `Ïƒ<cond>(R â‹ˆ S) = Ïƒ<cond>(R) â‹ˆ S` when cond involves only attributes of R.

9. Given the relational algebra expression `Ï€<course>(Ïƒ<grade = 'F'>(ENROLLED))`, explain what it returns. Write the equivalent SQL query and a real-world scenario where this query would be useful.

10. For the division operation R Ã· S:
    a) Explain the condition under which R Ã· S is defined (attribute compatibility)
    b) Show that division can be expressed using basic operations: `R Ã· S = Ï€<R_attrs - S_attrs>(R) âˆ’ Ï€<R_attrs - S_attrs>((Ï€<R_attrs - S_attrs>(R) Ã— S) âˆ’ R)`
    c) Trace this expression with R = {(1,a), (1,b), (2,a), (2,b), (3,a)} and S = {(a), (b)}
