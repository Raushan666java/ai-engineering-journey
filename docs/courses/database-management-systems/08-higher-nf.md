# Chapter 8: Higher Normal Forms and Denormalization

## Learning Objectives

- Define multi-valued dependencies and fourth normal form (4NF)
- Define join dependencies and fifth normal form (5NF)
- Understand the Domain-Key Normal Form (DKNF) as the ultimate normal form
- Recognize when to denormalize for performance
- Apply practical trade-offs between normalization and performance

## Theory

### 8.1 Beyond BCNF

BCNF eliminates redundancy from functional dependencies, but other types of dependencies can still cause redundancy:

- **Multi-valued dependencies (MVDs)** — cause independent attributes to repeat
- **Join dependencies (JDs)** — cause information to be split/rejoined in specific patterns

Higher normal forms address these: 4NF handles MVDs, 5NF handles JDs, and DKNF is the theoretical endpoint of normalization.

### 8.2 Multi-Valued Dependencies

A **multi-valued dependency (MVD)** X →→ Y holds if, given a value for X, the set of Y values is independent of all other attributes.

Formally: In relation R, X →→ Y if for any two tuples t1 and t2 with t1[X] = t2[X], there exists a tuple t3 such that: t3[X] = t1[X], t3[Y] = t1[Y], t3[Z] = t2[Z] (where Z = R − (X ∪ Y)).

**Example:** Consider a relation for university clubs:

```
CLUB_MEMBER(club, student_name, activity)
```

A club has many members and many activities. These facts are independent.

| club | student_name | activity |
|------|-------------|----------|
| Chess | Alice | Tournament |
| Chess | Alice | Practice |
| Chess | Bob | Tournament |
| Chess | Bob | Practice |

This table has 4 rows for just 2 students and 2 activities. This is **redundancy** caused by the MVD `club →→ student_name` and `club →→ activity`.

The MVD says: For a given club, the set of members and the set of activities are independent. Every member participates in every activity.

**Trivial MVDs:** An MVD X →→ Y is trivial if Y ⊆ X or X ∪ Y = R (all attributes).

**FDs vs. MVDs:**
- Every FD is also an MVD: If X → Y, then X →→ Y
- But not vice versa: MVDs indicate independence, not determination

### 8.3 Fourth Normal Form (4NF)

A relation is in 4NF if:
1. It is in BCNF
2. For every non-trivial MVD X →→ Y, X is a **superkey**

**Fixing the Club_Member example:** The MVD `club →→ student_name` has left side "club" which is NOT a superkey. Decompose by the MVD:

```sql
-- Decompose into two tables, eliminating the MVD
CREATE TABLE club_member (
    club VARCHAR(50),
    student_name VARCHAR(100),
    PRIMARY KEY (club, student_name)
);

CREATE TABLE club_activity (
    club VARCHAR(50),
    activity VARCHAR(100),
    PRIMARY KEY (club, activity)
);

-- Now adding a third activity only adds 1 row to club_activity
-- The cross product of members × activities is no longer materialized
```

**Another Example:** Employee skills and languages

```
EMP_SKILL_LANG(emp_id, skill, language)
```

FDs: `emp_id →→ skill`, `emp_id →→ language` (MVDs)

This is not in 4NF unless emp_id is a superkey. Decompose:

```sql
CREATE TABLE emp_skill (emp_id INTEGER, skill VARCHAR(50), PRIMARY KEY (emp_id, skill));
CREATE TABLE emp_language (emp_id INTEGER, language VARCHAR(50), PRIMARY KEY (emp_id, language));
```

**4NF Decomposition Algorithm:**
1. Find a violating MVD X →→ Y (X not a superkey)
2. Decompose R into R1 = (X ∪ Y) and R2 = (R − Y)
3. Continue until all relations are in 4NF

### 8.5 Join Dependencies and Fifth Normal Form (5NF)

A **join dependency (JD)** specifies that a relation can be losslessly decomposed into a set of projections and then reconstructed via joins.

JD notation: `⋈{R₁, R₂, ..., Rₙ}` — the relation is losslessly joinable over these projections.

**Example:** Consider a relation tracking agents, companies, and products:

```
AGENT_PRODUCT(agent_name, company, product)
```

Suppose the rule is: "An agent sells for a company AND the agent sells the company's products." This creates a 3-way constraint.

| agent_name | company | product |
|------------|---------|---------|
| Alice | Acme | Widget |
| Alice | Acme | Gizmo |
| Alice | Beta | Widget |
| Bob | Acme | Widget |

This relation has a join dependency: `⋈{AGENT_PRODUCT(agent_name, company), AGENT_PRODUCT(company, product), AGENT_PRODUCT(agent_name, product)}`

The relation is a 3-way join of its three binary projections. This JD means the relation cannot be decomposed into fewer than 3 tables without losing information.

**Fifth Normal Form (5NF) / Projection-Join Normal Form (PJNF):**

A relation is in 5NF if for every non-trivial join dependency `⋈{R₁, ..., Rₙ}`, every Rᵢ is a superkey.

If a relation is in 5NF, it cannot be decomposed further without losing information — it is in "ultimate normal form" with respect to projections and joins.

**Practical note:** 5NF is rare in practice. Most designs that reach 4NF are effectively in 5NF. The AGENT_PRODUCT example above must be decomposed into three tables:

```sql
CREATE TABLE agent_company (
    agent_name VARCHAR(50),
    company VARCHAR(50),
    PRIMARY KEY (agent_name, company)
);

CREATE TABLE company_product (
    company VARCHAR(50),
    product VARCHAR(50),
    PRIMARY KEY (company, product)
);

CREATE TABLE agent_product (
    agent_name VARCHAR(50),
    product VARCHAR(50),
    PRIMARY KEY (agent_name, product)
);

-- The original data is recovered via:
-- SELECT * FROM agent_company
-- NATURAL JOIN company_product
-- NATURAL JOIN agent_product;
```

### 8.6 Domain-Key Normal Form (DKNF)

**Domain-Key Normal Form** (Ronald Fagin, 1981) is the theoretical ultimate normal form.

A relation is in DKNF if every constraint is a logical consequence of:
- **Domain constraints:** Attribute values are from specified domains
- **Key constraints:** Every relation has a key

If a database is in DKNF, all constraints are enforced automatically by the domain and key mechanisms of the DBMS. No additional CHECK constraints, assertions, or triggers are needed.

In practice, DKNF is rarely achievable because:
- Business rules are often too complex to express purely as domain and key constraints
- The decomposition required may be impractical

### 8.7 Denormalization

**Denormalization** is the intentional introduction of redundancy into a normalized database to improve query performance. It is the opposite of normalization.

**When to denormalize:**
- **Read-heavy workloads:** When reads vastly outnumber writes
- **Reporting queries:** Complex aggregations across many joined tables
- **Pre-joined data:** Materialized views that pre-compute joins
- **Caching summary data:** Storing computed aggregates (e.g., order total alongside line items)

**Denormalization Techniques:**

**1. Pre-joining:** Storing frequently joined data in one table.

```sql
-- Normalized (3NF)
SELECT c.name, o.order_date FROM customers c JOIN orders o ON c.id = o.customer_id;

-- Denormalized: Add customer_name to orders table
CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    customer_name VARCHAR(100),  -- Denormalized!
    order_date DATE
);
-- Now: SELECT name, order_date FROM orders (no join needed)
```

**2. Pre-calculated aggregates:**

```sql
-- Denormalized order_summary for fast reporting
CREATE TABLE order_summary (
    order_id INTEGER PRIMARY KEY,
    item_count INTEGER,       -- Denormalized: COUNT of line items
    total_amount DECIMAL(12,2) -- Denormalized: SUM of line item totals
);
```

**3. Derived tables and materialized views:**

```sql
-- PostgreSQL materialized view (automatically maintained denormalization)
CREATE MATERIALIZED VIEW customer_monthly_sales AS
SELECT c.customer_id, c.name,
       EXTRACT(YEAR FROM o.order_date) AS year,
       EXTRACT(MONTH FROM o.order_date) AS month,
       SUM(oi.quantity * oi.price) AS total
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
GROUP BY c.customer_id, c.name, EXTRACT(YEAR FROM o.order_date), EXTRACT(MONTH FROM o.order_date);
```

**4. Storing derived values with triggers:**

```sql
-- Maintain denormalized product_review_count
CREATE TABLE product (
    product_id INTEGER PRIMARY KEY,
    product_name VARCHAR(200),
    review_count INTEGER DEFAULT 0,  -- Denormalized
    avg_rating DECIMAL(3,2)           -- Denormalized
);

-- Trigger to keep review_count updated
CREATE FUNCTION update_product_stats() RETURNS TRIGGER AS $$
BEGIN
    UPDATE product
    SET review_count = (SELECT COUNT(*) FROM review WHERE product_id = NEW.product_id),
        avg_rating = (SELECT ROUND(AVG(rating), 2) FROM review WHERE product_id = NEW.product_id)
    WHERE product_id = NEW.product_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

**5. Array or JSON columns:**

```sql
-- Store related data in a JSON column instead of a separate table
CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    items JSONB,  -- Denormalized: order items stored as JSON
    total DECIMAL(12,2)
);

-- Sample data: items = '[{"product": "Widget", "qty": 2, "price": 9.99}]'
```

### 8.8 Risks of Denormalization

- **Update anomalies return:** Data must be updated in multiple places
- **Increased storage:** Redundant data consumes disk space
- **Application complexity:** Code must maintain redundant data correctly
- **Inconsistency risk:** If updates are not synchronized, data becomes inconsistent
- **Less flexible:** Denormalized schemas are harder to adapt to new requirements

**Best Practice:** Start with a fully normalized design. Denormalize only when:
1. Performance measurements show a clear need
2. The performance gain is significant (typically 10x or more for affected queries)
3. You have mechanisms to maintain consistency (triggers, application logic, materialized view refresh)

## Examples

**Example 8.1: Full 4NF Decomposition**

Given: `DOCTOR_INFO(doctor_id, patient, specialty)`

Suppose a doctor can have multiple specialties and treat multiple patients, and these are independent (any doctor can apply any of their specialties to any patient).

MVDs: `doctor_id →→ patient`, `doctor_id →→ specialty`

Candidate key: (doctor_id, patient, specialty) — all three columns

This is in BCNF (the only key is the full set of attributes, so no non-trivial FDs exist). But it violates 4NF because of the MVDs.

Decomposition:

```sql
-- 4NF decomposition
CREATE TABLE doctor_patient (
    doctor_id INTEGER,
    patient VARCHAR(100),
    PRIMARY KEY (doctor_id, patient)
);

CREATE TABLE doctor_specialty (
    doctor_id INTEGER,
    specialty VARCHAR(100),
    PRIMARY KEY (doctor_id, specialty)
);
```

**Example 8.2: Practical Denormalization — E-Commerce**

```sql
-- Fully normalized schema (BCNF)
-- To display an order, we need 5 JOINs

-- Denormalized: add summary columns to orders
CREATE TABLE orders_denormalized (
    order_id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    customer_name VARCHAR(200),       -- denormalized from customers
    customer_email VARCHAR(255),       -- denormalized from customers
    order_date TIMESTAMP,
    status VARCHAR(20),
    item_count INTEGER,                -- denormalized aggregate
    total_amount DECIMAL(12,2),        -- denormalized aggregate
    last_modified TIMESTAMP
);

-- Maintain with application logic or triggers
INSERT INTO orders_denormalized (
    order_id, customer_id, customer_name, customer_email,
    order_date, status, item_count, total_amount
)
SELECT
    o.order_id, o.customer_id, c.name, c.email,
    o.order_date, o.status,
    COUNT(oi.*), COALESCE(SUM(oi.quantity * oi.price), 0)
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
LEFT JOIN order_items oi ON o.order_id = oi.order_id
GROUP BY o.order_id, c.name, c.email, o.order_date, o.status;
```

## Summary

- Multi-valued dependencies (MVDs) model independent multi-valued attributes.
- 4NF eliminates redundancy from MVDs by requiring every MVD left side to be a superkey.
- Join dependencies (JDs) model lossless decomposition across multiple projections.
- 5NF is the "ultimate normal form" for projections — no further lossless decomposition is possible.
- DKNF is the theoretical ideal where all constraints follow from domain and key constraints.
- Denormalization re-introduces redundancy for performance, but adds complexity and risk.
- Always measure before denormalizing; start normalized and optimize based on evidence.

## Exercises

### Basic

1. What is a multi-valued dependency? How does it differ from a functional dependency?

2. Given `PERSON(name, degree, hobby)` where a person can have multiple degrees and multiple hobbies independently, identify the MVDs and explain why this table violates 4NF.

3. Describe a scenario where 4NF decomposition would eliminate redundancy but the table was already in BCNF.

4. What is denormalization? Name two situations where denormalization is appropriate.

### Intermediate

5. Given `CAR(vin, color, feature)` where a car has one color but multiple features, and `vin → color` is an FD and `vin →→ feature` is an MVD:
   a) What normal form is this in?
   b) Decompose to 4NF.
   c) Write the CREATE TABLE statements.

6. Explain the difference between 4NF and 5NF. Give an example of a relation that is in 4NF but not in 5NF.

7. For the `AGENT_PRODUCT` relation in Section 8.5, explain why the 3-table decomposition is necessary and what anomaly would occur with a 2-table decomposition.

8. A social media database has a table `FRIENDS(user_id, friend_id, interest, group)`:
   - Users have friends (MVD on user →→ friend)
   - Users have interests (MVD on user →→ interest)
   - Users belong to groups (MVD on user →→ group)
   - These are all independent
   
   Normalize to 4NF. How many tables result?

### Advanced

9. Consider a university database with the rule: "A student can take a course only if the course is offered by the student's department." The relation `ENROLLMENT(student_id, dept_id, course_id)` has constraints:
   - `student_id → dept_id` (students belong to one department)
   - `course_id → dept_id` (courses belong to one department)
   
   Is this in BCNF? 4NF? 5NF? Decompose if necessary.

10. For a STREAMING service:
    - A user can have multiple subscriptions
    - A user can watch on multiple devices
    - A device can be used by multiple users
    - A subscription covers multiple devices
    
    Design a normalized schema. Then design a denormalized version suitable for a dashboard that shows "active users today" with sub-second response time. What trade-offs does each design make?

11. Research and explain: Why is DKNF considered the "ultimate" normal form but rarely achieved in practice? Provide an example of a business constraint that cannot be expressed as domain/key constraints alone.
