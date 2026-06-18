# Chapter 7: Normalization

## Learning Objectives

- Identify and eliminate data redundancy and anomalies
- Define functional dependencies and compute attribute closures
- Find candidate keys from functional dependencies
- Decompose relations to 1NF, 2NF, 3NF, and BCNF
- Understand lossless join decomposition and dependency preservation
- Determine when normalization has gone far enough

## Theory

![Normalization Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/database-management-systems/ch07-normalization.png)

### 7.1 The Problem: Anomalies in Unnormalized Data

Consider a poorly designed table for a university database:

```
STUDENT_COURSE(student_id, student_name, course_id, course_name, instructor, grade, instructor_office)
```

This single table stores all information about students, courses, instructors, and grades. It suffers from:

**Insertion Anomaly:** We cannot add a new course (CS102, "Data Structures") unless a student enrolls in it. The primary key is (student_id, course_id), so we would need a student_id, which we don't have for a new course.

**Update Anomaly:** If "Dr. Smith" (instructor for "DBMS") moves to office "Room 201," we must update every row where Dr. Smith teaches. If there are 50 students in DBMS, we must update 50 rows. A missed update creates inconsistency.

**Deletion Anomaly:** If the last student drops "DBMS" and we delete their enrollment row, we lose the information that "DBMS" is taught by "Dr. Smith" in "Room 101."

**Redundancy:** The instructor name and office are repeated for every student in each course. This wastes space and causes the update anomaly.

**Normalization** is a systematic process of decomposing tables to eliminate these anomalies while preserving all information.

### 7.2 Functional Dependencies

A **functional dependency** (FD) is a constraint between two sets of attributes. We write X â†’ Y (read "X determines Y") meaning that if two tuples have the same value for X, they must have the same value for Y.

Formally: A functional dependency X â†’ Y holds in relation R if, for any two tuples t1 and t2 in R:
`t1[X] = t2[X] â‡’ t1[Y] = t2[Y]`

**Example:** In STUDENT(student_id, name, address, major):
- `student_id â†’ name` (each student ID has exactly one name)
- `student_id â†’ address` (each student ID has exactly one address)
- `student_id â†’ major` (each student ID has exactly one major)
- But `major â†’ student_id` does NOT hold (multiple students can have the same major)

**Trivial Functional Dependencies:** An FD is trivial if the right side is a subset of the left side.
- `student_id â†’ student_id` (trivial â€” always true)
- `student_id, name â†’ student_id` (trivial)
- `student_id â†’ name` (non-trivial)

**Closure of a Set of FDs:** The set of all FDs logically implied by a given set F, denoted Fâº.

**Armstrong's Axioms (sound and complete):**
1. **Reflexivity:** If Y âŠ† X, then X â†’ Y
2. **Augmentation:** If X â†’ Y, then XZ â†’ YZ
3. **Transitivity:** If X â†’ Y and Y â†’ Z, then X â†’ Z

**Additional Rules (derived from Armstrong's axioms):**
4. **Union:** If X â†’ Y and X â†’ Z, then X â†’ YZ
5. **Decomposition:** If X â†’ YZ, then X â†’ Y and X â†’ Z
6. **Pseudo-transitivity:** If X â†’ Y and YZ â†’ W, then XZ â†’ W

### 7.3 Attribute Closure

The **closure** of a set of attributes X under a set of FDs F (denoted Xâº) is the set of all attributes that are functionally determined by X.

**Algorithm to compute Xâº:**
1. Start with closure = X
2. For each FD Y â†’ Z in F:
   - If Y âŠ† closure, add Z to closure
3. Repeat step 2 until closure stops changing

**Example:** Given R(A, B, C, D, E) and FDs: {A â†’ BC, CD â†’ E, B â†’ D, E â†’ A}

Compute Aâº:
- Start: closure = {A}
- A â†’ BC: A âŠ† {A}, add B, C. closure = {A, B, C}
- B â†’ D: B âŠ† {A, B, C}, add D. closure = {A, B, C, D}
- CD â†’ E: C, D âŠ† {A, B, C, D}, add E. closure = {A, B, C, D, E}
- Aâº = {A, B, C, D, E}

Compute Bâº:
- Start: closure = {B}
- B â†’ D: B âŠ† {B}, add D. closure = {B, D}
- No more FDs apply. Bâº = {B, D}

**Using attribute closure to find candidate keys:**
A set of attributes X is a **superkey** if Xâº contains all attributes of R.
A **candidate key** is a minimal superkey â€” no proper subset is a superkey.

For the example above, A is a candidate key since Aâº = ABCDE. Also, Eâº = EABCD, so E is also a candidate key.

### 7.4 First Normal Form (1NF)

A relation is in 1NF if every attribute value is atomic (indivisible). No repeating groups or arrays.

**Problem (not in 1NF):**

```
STUDENT(id, name, courses)
1 | Alice | {CS101, CS102, CS201}
2 | Bob   | {CS101}
```

**Fix:** Extract repeating groups into a separate table.

```sql
-- 1NF version
STUDENT(id, name)
ENROLLMENT(id, course_code)

-- Or flatten the original table:
STUDENT_COURSE(id, name, course_code)
1 | Alice | CS101
1 | Alice | CS102
1 | Alice | CS201
2 | Bob   | CS101
```

Note: The flattened version has redundancy (Alice's name repeats) but is in 1NF. Higher normal forms address this redundancy.

### 7.5 Second Normal Form (2NF)

A relation is in 2NF if:
1. It is in 1NF
2. Every non-key attribute is **fully functionally dependent** on the entire primary key (no partial dependencies)

**Partial dependency:** A non-key attribute depends on only part of a composite primary key.

**Example:** Consider R(student_id, course_id, student_name, grade, course_name)

Primary key: (student_id, course_id)

FDs: `student_id â†’ student_name` (partial dependency â€” depends on part of PK)
`course_id â†’ course_name` (partial dependency)
`student_id, course_id â†’ grade` (full dependency)

This is not in 2NF because student_name depends only on student_id (part of PK).

**Fix:** Decompose into:

R1(student_id, student_name) â€” PK: student_id
R2(course_id, course_name) â€” PK: course_id
R3(student_id, course_id, grade) â€” PK: (student_id, course_id)

### 7.6 Third Normal Form (3NF)

A relation is in 3NF if:
1. It is in 2NF
2. No non-key attribute is **transitively dependent** on the primary key (no transitive dependencies)

**Transitive dependency:** X â†’ Y and Y â†’ Z, where Y is not a candidate key. So X â†’ Z is transitive.

**Example:** R(employee_id, department_id, department_location)

PK: employee_id
FDs: `employee_id â†’ department_id, department_location`
`department_id â†’ department_location` (transitive: employee_id â†’ department_id â†’ department_location)

This is not in 3NF because department_location depends on department_id, which is not a candidate key.

**Fix:** Decompose into:

R1(employee_id, department_id) â€” PK: employee_id
R2(department_id, department_location) â€” PK: department_id

### 7.7 Boyce-Codd Normal Form (BCNF)

BCNF is a stronger version of 3NF. A relation is in BCNF if:
1. It is in 3NF
2. For every non-trivial FD X â†’ Y, X must be a **superkey**

BCNF eliminates all redundancy based on functional dependencies. Some relations in 3NF are not in BCNF.

**Example:** R(student_id, course_id, instructor_name)

FDs: `course_id â†’ instructor_name` (each course has one instructor)
`student_id, course_id â†’ instructor_name` (superkey â€” trivial)
But `course_id â†’ instructor_name` has a left side that is NOT a superkey.

This is in 3NF (instructor_name depends on part of the key in a trivial way through the superkey) but NOT in BCNF.

**Fix:** Decompose into:

R1(student_id, course_id) â€” PK: (student_id, course_id)
R2(course_id, instructor_name) â€” PK: course_id

### 7.8 Lossless Join Decomposition

A decomposition of R into R1 and R2 is **lossless** (or non-additive) if joining R1 and R2 always produces the original R.

**Test:** The decomposition R(A, B, C) into R1(A, B) and R2(B, C) is lossless if B â†’ A or B â†’ C (the common attribute is a candidate key in at least one of the decomposed relations).

**Lossy decomposition example:**
R(employee_id, department, manager)
Decompose to: R1(employee_id, department), R2(department, manager)

If B â†’ manager is not a functional dependency (a department could have multiple managers), the join produces *more* rows than the original â€” this is a **lossy** decomposition.

### 7.9 Dependency Preservation

A decomposition is **dependency-preserving** if all original FDs can be checked on the decomposed relations without joining them.

**Example:** R(A, B, C) with FDs: {A â†’ B, B â†’ C}

Decomposition into R1(A, B) and R2(A, C) is:
- Lossless? Yes (A is common, A â†’ B in R1)
- Not dependency-preserving: B â†’ C cannot be checked without joining

A better decomposition: R1(A, B) and R2(B, C)
- Lossless? Yes (B is common, B â†’ C in R2)
- Dependency-preserving: Yes

### 7.10 Normalization Algorithm (3NF)

**Algorithm for 3NF synthesis (dependency-preserving, lossless):**

1. Find a minimal cover G for F
2. For each left-hand side X in G, create a relation schema with attributes {X âˆª {Aâ‚, Aâ‚‚, ... Aâ‚™}} where X â†’ Aâ‚, X â†’ Aâ‚‚, ... are all FDs with X as left-hand side
3. If none of the created relations contains a candidate key of R, add one relation containing a candidate key
4. Eliminate redundant relations (subsets of others)

**Algorithm for BCNF decomposition:**

1. If R is in BCNF, stop
2. Find a violating FD X â†’ Y in R (X is not a superkey)
3. Decompose R into R1 = (X âˆª Y) and R2 = (R - Y)
4. Recursively check R1 and R2 for BCNF violations

BCNF may not preserve all FDs. In practice, we often stop at 3NF (which guarantees dependency preservation) and accept BCNF only when possible.

## Examples

**Example 7.1: Full Normalization Walkthrough**

Schema: `ORDER_DETAIL(order_id, order_date, customer_id, customer_name, product_id, product_name, quantity, price)`

**Step 1: Identify FDs**
- `order_id â†’ order_date, customer_id, customer_name`
- `customer_id â†’ customer_name`
- `product_id â†’ product_name`
- `order_id, product_id â†’ quantity, price`

**Step 2: Find candidate key**
- The only candidate key is (order_id, product_id)

**Step 3: Check 1NF**
- All values are atomic. Passes 1NF.

**Step 4: Check 2NF (partial dependencies)**
- `order_id â†’ order_date` violates 2NF (depends on part of PK)
- `order_id â†’ customer_id, customer_name` violates 2NF
- `product_id â†’ product_name` violates 2NF

**Decompose to 2NF:**

```sql
-- R1: ORDER
CREATE TABLE order_header (
    order_id INTEGER PRIMARY KEY,
    order_date DATE NOT NULL,
    customer_id INTEGER NOT NULL,
    customer_name VARCHAR(100) NOT NULL
);

-- R2: PRODUCT
CREATE TABLE product (
    product_id INTEGER PRIMARY KEY,
    product_name VARCHAR(200) NOT NULL
);

-- R3: ORDER_LINE
CREATE TABLE order_line (
    order_id INTEGER,
    product_id INTEGER,
    quantity INTEGER NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (order_id, product_id)
);
```

**Step 5: Check 3NF (transitive dependencies)**
- In R1 (order_header): `customer_id â†’ customer_name`. Since customer_id is not a candidate key, this transitive dependency violates 3NF.

**Decompose to 3NF:**

```sql
-- R1: ORDER (now without customer_name)
CREATE TABLE order_header (
    order_id INTEGER PRIMARY KEY,
    order_date DATE NOT NULL,
    customer_id INTEGER NOT NULL
);

-- R1b: CUSTOMER (new)
CREATE TABLE customer (
    customer_id INTEGER PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL
);

-- R2: PRODUCT (unchanged)
CREATE TABLE product (
    product_id INTEGER PRIMARY KEY,
    product_name VARCHAR(200) NOT NULL
);

-- R3: ORDER_LINE (unchanged)
CREATE TABLE order_line (
    order_id INTEGER,
    product_id INTEGER,
    quantity INTEGER NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (order_id, product_id)
);
```

**Step 6: Check BCNF**
- All remaining FDs have left side as superkey.
- `product_id â†’ product_name` in PRODUCT: product_id IS the key. OK.
- `order_id â†’ customer_id, order_date` in order_header: order_id IS the key. OK.
- This schema is in BCNF.

**Example 7.2: BCNF Violation and Resolution**

R(teacher_id, student_id, subject) with FDs:
- `student_id, subject â†’ teacher_id` (each student has one teacher per subject)
- `teacher_id â†’ subject` (each teacher teaches only one subject)

Candidate key: (student_id, subject)

Is this in BCNF? `teacher_id â†’ subject` violates BCNF because teacher_id is not a superkey.

Decompose:
R1(teacher_id, subject) â€” PK: teacher_id
R2(teacher_id, student_id) â€” PK: (teacher_id, student_id)

Now BCNF is satisfied, but `student_id, subject â†’ teacher_id` is lost (cannot be checked without a join).

## ðŸ’¡ Pro Tips

1. **Normalization is a design tool, not a religion** â€” in practice, denormalization (intentional redundancy) is sometimes needed for performance. Always normalize first, then denormalize with purpose.
2. **Master attribute closure** â€” computing Xâº is the single most useful skill for finding keys, checking normalization, and understanding FDs.
3. **BCNF is ideal but 3NF is often enough** â€” BCNF may lose dependency preservation. The 3NF synthesis algorithm guarantees both lossless join AND dependency preservation.
4. **Insert/update/delete anomalies are your canary** â€” if you find yourself updating the same value in multiple rows, that is a normalization red flag.
5. **Start with a universal relation** â€” listing all attributes in one big table, then identifying FDs and normalizing, is a systematic way to discover the right schema.

## One-Sentence Takeaways

- **7.1:** Unnormalized tables suffer from insertion, update, and deletion anomalies caused by data redundancy.
- **7.2:** Functional dependencies (X â†’ Y) are constraints that one set of attributes uniquely determines another.
- **7.3:** Attribute closure (Xâº) finds all attributes determined by X and is the key tool for finding candidate keys.
- **7.4:** 1NF requires atomic (indivisible) attribute values and no repeating groups.
- **7.5:** 2NF eliminates partial dependencies â€” non-key attributes must depend on the entire composite key.
- **7.6:** 3NF eliminates transitive dependencies â€” non-key attributes must not depend on other non-key attributes.
- **7.7:** BCNF requires every FD's left-hand side to be a superkey â€” stronger than 3NF but may lose dependency preservation.
- **7.8:** Lossless decomposition guarantees that joining the decomposed tables recovers the original data.
- **7.9:** Dependency preservation means all original FDs can be enforced without joining decomposed tables.
- **7.10:** The 3NF synthesis algorithm creates a lossless, dependency-preserving decomposition from a minimal cover of FDs.

## Concept Comparison Table

| Normal Form | Requirement | Problem It Solves |
|------------|-------------|-------------------|
| **1NF** | Atomic values, no repeating groups | Non-atomic data, arrays |
| **2NF** | 1NF + no partial dependencies on composite PK | Redundancy from depending on part of a composite key |
| **3NF** | 2NF + no transitive dependencies on non-key attributes | Redundancy from depending on another non-key attribute |
| **BCNF** | 3NF + every FD left side is a superkey | Remaining redundancy from non-key determinants |

| Decomposition Property | Meaning | How to Test |
|----------------------|---------|------------|
| **Lossless Join** | Joining decomposed tables yields original | Common attribute is a key in at least one component |
| **Dependency Preservation** | All original FDs enforceable on components | Each FD's attributes appear together in at least one component |

## Quick Reference

| Armstrong's Axiom | Rule | Example |
|-------------------|------|---------|
| **Reflexivity** | If Y âŠ† X, then X â†’ Y | `{A, B} â†’ A` |
| **Augmentation** | If X â†’ Y, then XZ â†’ YZ | If A â†’ B, then AC â†’ BC |
| **Transitivity** | If X â†’ Y and Y â†’ Z, then X â†’ Z | If A â†’ B and B â†’ C, then A â†’ C |
| **Union** | If X â†’ Y and X â†’ Z, then X â†’ YZ | If A â†’ B and A â†’ C, then A â†’ BC |
| **Decomposition** | If X â†’ YZ, then X â†’ Y and X â†’ Z | If A â†’ BC, then A â†’ B and A â†’ C |
| **Pseudo-transitivity** | If X â†’ Y and YZ â†’ W, then XZ â†’ W | If A â†’ B and BC â†’ D, then AC â†’ D |

| Normal Form Check | SQL Equivalent |
|------------------|----------------|
| Not in 1NF | Table has array/composite columns or repeating groups |
| 1NF but not 2NF | Composite PK with non-key attribute depending on part of it |
| 2NF but not 3NF | Non-key attribute determined by another non-key attribute |
| 3NF but not BCNF | Non-superkey determinant exists |

## Cross-Application Matrix

| Normalization Concept | Applied In | Why It Matters |
|----------------------|-----------|----------------|
| **1NF** | All relational databases | Foundation â€” without it you cannot use relational operations |
| **2NF** | Junction tables (M:N) | Prevents storing course info in enrollment rows |
| **3NF** | Customer data | Prevents storing customer address in every order row |
| **BCNF** | Complex academic databases | Eliminates redundancy from non-key determinants like instructorâ†’course |
| **Lossless Decomposition** | All schema migrations | Ensures you don't lose data when restructuring |
| **Dependency Preservation** | High-integrity systems | Ensures constraints can be enforced without complex join triggers |
| **Attribute Closure** | Key discovery, query optimization | Finding all candidate keys systematically |

## Chapter Quiz

1. An update anomaly occurs when:
   a) A query returns incorrect results
   b) The same fact stored in multiple rows must be updated in all of them
   c) A transaction fails to commit
   d) An index becomes corrupted

2. A functional dependency X â†’ Y means:
   a) Every value of X maps to multiple values of Y
   b) If two tuples have the same X, they must have the same Y
   c) X is the primary key
   d) Y determines X

3. A relation is in 2NF if:
   a) It is in 1NF and has no composite keys
   b) It is in 1NF and has no partial dependencies
   c) It is in 1NF and has no transitive dependencies
   d) Every attribute is atomic

4. Which normal form requires every FD left side to be a superkey?
   a) 1NF
   b) 2NF
   c) 3NF
   d) BCNF

5. A lossless decomposition means:
   a) No data is lost during a system crash
   b) Joining the decomposed tables yields the original relation
   c) All FDs are preserved
   d) The decomposition has minimal tables

6. Armstrong's transitivity rule states:
   a) If X â†’ Y and Y â†’ Z, then X â†’ Z
   b) If X â†’ Y, then XZ â†’ YZ
   c) If Y âŠ† X, then X â†’ Y
   d) If X â†’ Y and X â†’ Z, then X â†’ YZ

7. The attribute closure of a candidate key:
   a) Contains only the key attributes
   b) Contains all attributes of the relation
   c) Is always empty
   d) Contains only non-key attributes

8. In practice, why might you stop at 3NF instead of BCNF?
   a) BCNF is harder to implement in SQL
   b) BCNF may lose dependency preservation
   c) 3NF always has better performance
   d) 3NF requires fewer tables

**Answers:** 1-b, 2-b, 3-b, 4-d, 5-b, 6-a, 7-b, 8-b

## Summary

- Functional dependencies are fundamental constraints expressing that X determines Y.
- Armstrong's axioms allow derivation of implied FDs.
- Normalization reduces redundancy through successive decomposition.
- 1NF eliminates non-atomic values and repeating groups.
- 2NF eliminates partial dependencies on composite keys.
- 3NF eliminates transitive dependencies on non-key attributes.
- BCNF requires every FD left side to be a superkey.
- Decompositions should be lossless (recoverable via join) and dependency-preserving.
- In practice, we often target BCNF but accept 3NF when BCNF would lose dependencies.

## Exercises

### Basic

1. Given R(A, B, C, D) with FDs {A â†’ B, B â†’ C, C â†’ D}:
   a) Find Aâº, Bâº, Câº
   b) What are the candidate keys?

2. Define insertion, deletion, and update anomalies. Give a real-world example of each.

3. What is the difference between partial dependency and transitive dependency?

4. Explain why the relation R(student_id, course_id, instructor, instructor_office) with FDs {student_id, course_id â†’ instructor, instructor â†’ instructor_office} violates BCNF.

### Intermediate

5. Given the schema and FDs:
```
ORDER(order_id, customer_name, product_name, quantity, order_date)
FDs: order_id â†’ customer_name, order_date
     order_id, product_name â†’ quantity
```
a) Find the candidate key.
b) Identify partial dependencies.
c) Decompose to 2NF.
d) Check if the decomposition is in 3NF.

6. For the relation R(A, B, C, D, E) with FDs {AB â†’ C, C â†’ D, D â†’ E}:
   a) Find all candidate keys.
   b) Is the relation in 2NF? Justify.
   c) Decompose to 3NF.

7. What is a lossless decomposition? Give an example of a lossless and a lossy decomposition.

### Advanced

8. Consider R(student_id, course_id, semester, grade, instructor, instructor_rating) with:
```
FDs: student_id, course_id, semester â†’ grade
     course_id â†’ instructor
     instructor â†’ instructor_rating
```
a) Find candidate keys.
b) Normalize to BCNF.
c) Which FDs are lost in the BCNF decomposition?
d) Would you accept 3NF instead? Why?

9. Given: R(P, Q, R, S, T) with FDs {PQ â†’ R, PR â†’ S, Q â†’ T}:
   a) Find the minimal cover
   b) Find candidate keys
   c) Decompose to 3NF using the synthesis algorithm
   d) Check if the result is also in BCNF

10. Prove using Armstrong's axioms: If X â†’ Y and YZ â†’ W, then XZ â†’ W (pseudo-transitivity).

11. Design a database for a MOVIE RENTAL store. Start with a universal relation containing all attributes (movie title, genre, director, actor, customer name, rental date, return date, price). Identify FDs and normalize to 3NF. Write the final CREATE TABLE statements.
