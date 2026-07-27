---
id: 08-database-design
slug: /ai-engineering-placement/02-sql-and-databases/08-database-design
title: "Database Design — Normalization, ERD, Keys, Constraints, Schema Design"
sidebar_label: "Database Design — Normalization, ERD, Keys, Constraints, Schema Design"
sidebar_position: 30
---
<!-- Clear Language: Keep sentences under 50 words -->
# Database Design — Normalization, ERD, Keys, Constraints, Schema Design

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Design relational database schemas using Entity-Relationship Diagrams |
| LO2 | Apply normalization up to BCNF and understand denormalization trade-offs |
| LO3 | Define primary, foreign, unique, and composite keys |
| LO4 | Implement table constraints: CHECK, DEFAULT, NOT NULL, EXCLUDE |
| LO5 | Design schemas for different application patterns |
| LO6 | Understand indexing strategies and their impact on schema design |

## Introduction

Data is the fuel of AI. SQL and database design skills let you query, transform, and store the data that powers machine learning models. This module covers everything from basic queries to advanced indexing and optimization.




## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding database design is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how database design works in practice.



## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 8.1 | Entity-Relationship Diagrams | Entities, attributes, relationships, cardinality |
| 8.2 | Normalization | 1NF, 2NF, 3NF, BCNF, denormalization |
| 8.3 | Keys and Constraints | Primary, foreign, unique, composite, CHECK, EXCLUDE |
| 8.4 | Schema Design Patterns | Star schema, snowflake, EAV, polymorphic |
| 8.5 | Design for Performance | Partitioning, sharding, materialized views |
| 8.6 | Schema Evolution | Migrations, versioning, backward compatibility |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Database Design] --> B[ERD]
    A --> C[Normalization]
    A --> D[Keys & Constraints]
    A --> E[Design Patterns]
    A --> F[Performance]
    A --> G[Schema Evolution]
    B --> H[Entities & Relationships]
    C --> I[1NF -> 2NF -> 3NF -> BCNF]
    C --> J[Denormalization]
    D --> K[Primary / Foreign / Unique]
    E --> L[Star / Snowflake / EAV]
    F --> M[Partitioning / Sharding]
    G --> N[Migrations / Versioning]
```text

## 8.1 Entity-Relationship Diagrams

ERDs visually represent database structure: entities (tables), attributes (columns), and relationships (foreign keys).

**Components of an ERD**:

| Symbol | Meaning | Example |
|--------|---------|---------|
| Rectangle | Entity (table) | Customer, Order |
| Ellipse | Attribute (column) | name, email |
| Diamond | Relationship | Places, Contains |
| Line | Connection | Between entities |
| Crow's foot | Many side | Many orders per customer |

**Cardinality notations**:

```text
Customer ────< Places >──── Order
  1              N
One customer places many orders.

Order ────< Contains >──── Product
  1              N
One order contains many products.
```text

**Converting ERD to SQL**:

```sql
-- One-to-many: Customer to Orders
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER NOT NULL REFERENCES customers(id),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10, 2) NOT NULL
);

-- Many-to-many: Students to Courses
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL
);

CREATE TABLE enrollments (
    student_id INTEGER REFERENCES students(id),
    course_id INTEGER REFERENCES courses(id),
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    grade CHAR(2),
    PRIMARY KEY (student_id, course_id)
);

-- One-to-one: User to Profile
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE profiles (
    id INTEGER PRIMARY KEY REFERENCES users(id),
    bio TEXT,
    avatar_url VARCHAR(500)
);
```text

**Weak entities** (depend on a parent entity):

```sql
-- Invoice Line Items depend on Invoice
CREATE TABLE invoice_items (
    invoice_id INTEGER REFERENCES invoices(id),
    line_number INTEGER,
    product_name VARCHAR(200) NOT NULL,
    quantity INTEGER NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (invoice_id, line_number)
);
```text

## 8.2 Normalization

Normalization reduces data redundancy and prevents anomalies.

**First Normal Form (1NF)**:

- Each column contains atomic (indivisible) values
- Each row is unique
- No repeating groups

```sql
-- Violates 1NF: multiple phone numbers in one column
CREATE TABLE bad_customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    phone_numbers VARCHAR(500)  -- "555-0100,555-0200,555-0300"
);

-- 1NF compliant: separate rows
CREATE TABLE customer_phones (
    customer_id INTEGER REFERENCES customers(id),
    phone VARCHAR(20),
    phone_type VARCHAR(10),
    PRIMARY KEY (customer_id, phone)
);
```text

**Second Normal Form (2NF)**:

- Must be in 1NF
- All non-key columns must depend on the entire primary key (no partial dependency)

```sql
-- Violates 2NF: course_name depends only on course_id, not on (student_id, course_id)
CREATE TABLE bad_enrollments (
    student_id INTEGER,
    course_id INTEGER,
    course_name VARCHAR(200),  -- partial dependency
    grade CHAR(2),
    PRIMARY KEY (student_id, course_id)
);

-- 2NF compliant: separate courses table
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL
);

CREATE TABLE enrollments (
    student_id INTEGER,
    course_id INTEGER REFERENCES courses(id),
    grade CHAR(2),
    PRIMARY KEY (student_id, course_id)
);
```text

**Third Normal Form (3NF)**:

- Must be in 2NF
- No transitive dependencies (non-key column depends on another non-key column)

```sql
-- Violates 3NF: instructor_department depends on instructor_id, not on course_id
CREATE TABLE bad_courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200),
    instructor_id INTEGER,
    instructor_name VARCHAR(100),
    instructor_department VARCHAR(100)  -- transitive dependency
);

-- 3NF compliant: separate instructors table
CREATE TABLE instructors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(100)
);

CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200),
    instructor_id INTEGER REFERENCES instructors(id)
);
```text

**Boyce-Codd Normal Form (BCNF)**:

- Every determinant must be a candidate key
- Stricter than 3NF

```sql
-- Violates BCNF: {student_id, subject} -> professor, but professor -> subject
CREATE TABLE bad_assignments (
    student_id INTEGER,
    subject VARCHAR(100),
    professor VARCHAR(100),
    PRIMARY KEY (student_id, subject)
);
-- professor Smith teaches only Math, but this repeats for each student

-- BCNF compliant:
CREATE TABLE professors (
    name VARCHAR(100) PRIMARY KEY,
    subject VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE enrollments (
    student_id INTEGER,
    professor_name VARCHAR(100) REFERENCES professors(name),
    PRIMARY KEY (student_id, professor_name)
);
```text

**Denormalization trade-offs**:

| Factor | Normalized | Denormalized |
|--------|------------|--------------|
| Storage | Less (no redundancy) | More (duplicated data) |
| INSERT/UPDATE | Fast (one place to update) | Slow (multiple places) |
| SELECT with JOIN | Slower (needs JOINs) | Faster (all in one table) |
| Data consistency | High (single source of truth) | Risk of inconsistency |
| Query complexity | Complex queries with JOINs | Simple queries |

When to denormalize: read-heavy workloads, reporting/analytics, caching computed values.

## 8.3 Keys and Constraints

**Primary keys** uniquely identify each row:

```sql
-- Single column
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    sku VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(200) NOT NULL
);

-- Composite primary key
CREATE TABLE order_items (
    order_id INTEGER REFERENCES orders(id),
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER NOT NULL,
    PRIMARY KEY (order_id, product_id)
);

-- Natural key (meaningful data as PK)
CREATE TABLE countries (
    iso_code CHAR(2) PRIMARY KEY,  -- 'US', 'GB', 'IN'
    name VARCHAR(100) NOT NULL
);
```text

**Foreign keys** enforce referential integrity:

```sql
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER NOT NULL
        REFERENCES customers(id)
        ON DELETE CASCADE,        -- delete orders when customer deleted
        -- ON DELETE SET NULL,    -- set customer_id to NULL
        -- ON DELETE RESTRICT,   -- prevent deletion if orders exist
        -- ON DELETE SET DEFAULT, -- set to default value
    total DECIMAL(10, 2)
);
```text

**Unique constraints** prevent duplicate values:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    -- Composite unique
    UNIQUE (first_name, last_name)
);
```text

**CHECK constraints** enforce data validity:

```sql
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER CHECK (age >= 18 AND age <= 120),
    salary DECIMAL(10, 2) CHECK (salary > 0),
    status VARCHAR(20) CHECK (status IN ('active', 'inactive', 'terminated')),
    hire_date DATE CHECK (hire_date <= CURRENT_DATE),
    -- Named constraint
    CONSTRAINT valid_termination CHECK (
        status != 'terminated' OR termination_date IS NOT NULL
    )
);
```text

**EXCLUDE constraints** (PostgreSQL):

```sql
-- Prevent overlapping date ranges
CREATE TABLE room_bookings (
    room_id INTEGER REFERENCES rooms(id),
    guest_name VARCHAR(100),
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    EXCLUDE USING gist (
        room_id WITH =,
        daterange(check_in, check_out) WITH &&
    )
);
```text

**DEFAULT values**:

```sql
CREATE TABLE logs (
    id SERIAL PRIMARY KEY,
    message TEXT NOT NULL,
    severity VARCHAR(10) DEFAULT 'info',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(100) DEFAULT CURRENT_USER,
    processed BOOLEAN DEFAULT FALSE
);
```text

## 8.4 Schema Design Patterns

**Star schema** for data warehousing:

```sql
-- Dimension tables (denormalized)
CREATE TABLE dim_customer (
    customer_sk SERIAL PRIMARY KEY,
    customer_id INTEGER,
    name VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(50),
    country VARCHAR(50),
    effective_date DATE,
    end_date DATE
);

CREATE TABLE dim_product (
    product_sk SERIAL PRIMARY KEY,
    product_id INTEGER,
    name VARCHAR(200),
    category VARCHAR(100),
    price DECIMAL(10, 2)
);

CREATE TABLE dim_date (
    date_sk INTEGER PRIMARY KEY,
    date DATE,
    year INTEGER,
    quarter INTEGER,
    month INTEGER,
    week INTEGER,
    day_of_week INTEGER
);

-- Fact table
CREATE TABLE fact_sales (
    customer_sk INTEGER REFERENCES dim_customer(customer_sk),
    product_sk INTEGER REFERENCES dim_product(product_sk),
    date_sk INTEGER REFERENCES dim_date(date_sk),
    quantity INTEGER NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    discount DECIMAL(5, 2) DEFAULT 0,
    total_amount DECIMAL(12, 2) GENERATED ALWAYS AS (quantity * unit_price * (1 - discount)) STORED
);
```text

**Entity-Attribute-Value (EAV)** for highly variable attributes:

```sql
CREATE TABLE entities (
    id SERIAL PRIMARY KEY,
    entity_type VARCHAR(50) NOT NULL
);

CREATE TABLE attributes (
    id SERIAL PRIMARY KEY,
    entity_id INTEGER REFERENCES entities(id),
    attribute_name VARCHAR(100) NOT NULL,
    attribute_value TEXT,
    data_type VARCHAR(20) CHECK (data_type IN ('string', 'integer', 'float', 'date', 'boolean'))
);

-- Querying EAV (requires pivot)
SELECT
    e.id,
    MAX(CASE WHEN a.attribute_name = 'color' THEN a.attribute_value END) AS color,
    MAX(CASE WHEN a.attribute_name = 'weight' THEN a.attribute_value END) AS weight,
    MAX(CASE WHEN a.attribute_name = 'material' THEN a.attribute_value END) AS material
FROM entities e
JOIN attributes a ON a.entity_id = e.id
WHERE e.entity_type = 'product'
GROUP BY e.id;
```text

**Polymorphic associations**:

```sql
-- Bad: nullable foreign keys for each possible parent
CREATE TABLE bad_comments (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    post_id INTEGER REFERENCES posts(id),      -- NULL if comment on photo
    photo_id INTEGER REFERENCES photos(id),    -- NULL if comment on post
    video_id INTEGER REFERENCES videos(id)     -- NULL if comment on post/photo
);

-- Better: single polymorphic reference
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    parent_type VARCHAR(20) NOT NULL CHECK (parent_type IN ('post', 'photo', 'video')),
    parent_id INTEGER NOT NULL,
    UNIQUE (parent_type, parent_id)  -- only one comment per parent
);
```text

**Soft delete pattern**:

```sql
CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT,
    deleted_at TIMESTAMP,
    deleted_by INTEGER REFERENCES users(id),
    UNIQUE (title, deleted_at)  -- allow reusing title for non-deleted records
);

-- Query only active records
SELECT * FROM documents WHERE deleted_at IS NULL;

-- Partial unique index for active records
CREATE UNIQUE INDEX idx_active_document_title ON documents(title) WHERE deleted_at IS NULL;
```text

## 8.5 Design for Performance

**Table partitioning** (PostgreSQL):

```sql
-- Range partitioning by date
CREATE TABLE orders (
    id SERIAL,
    customer_id INTEGER,
    order_date DATE NOT NULL,
    total DECIMAL(10, 2)
) PARTITION BY RANGE (order_date);

CREATE TABLE orders_2024_q1 PARTITION OF orders
    FOR VALUES FROM ('2024-01-01') TO ('2024-04-01');
CREATE TABLE orders_2024_q2 PARTITION OF orders
    FOR VALUES FROM ('2024-04-01') TO ('2024-07-01');
CREATE TABLE orders_2024_q3 PARTITION OF orders
    FOR VALUES FROM ('2024-07-01') TO ('2024-10-01');

-- List partitioning
CREATE TABLE customers
    PARTITION BY LIST (region);
CREATE TABLE customers_na PARTITION OF customers
    FOR VALUES IN ('US', 'CA', 'MX');
CREATE TABLE customers_eu PARTITION OF customers
    FOR VALUES IN ('GB', 'DE', 'FR', 'IT');

-- Hash partitioning
CREATE TABLE sessions
    PARTITION BY HASH (session_id);
CREATE TABLE sessions_0 PARTITION OF sessions
    FOR VALUES WITH (MODULUS 4, REMAINDER 0);
```text

**Sharding** distributes data across databases:

```sql
-- Application-level sharding: choose database based on shard key
-- Shard key: customer_id % 4 = database number

-- Each shard has same schema but different data
-- Shard 0: customer_id % 4 == 0
-- Shard 1: customer_id % 4 == 1
-- etc.
```text

**Materialized views** for pre-computed data:

```sql
CREATE MATERIALIZED VIEW monthly_sales_summary AS
SELECT
    DATE_TRUNC('month', order_date) AS month,
    product_id,
    SUM(quantity) AS total_quantity,
    SUM(total) AS total_revenue,
    COUNT(*) AS order_count
FROM orders o
JOIN order_items oi ON o.id = oi.order_id
GROUP BY DATE_TRUNC('month', order_date), product_id
WITH DATA;

-- Refresh periodically
REFRESH MATERIALIZED VIEW monthly_sales_summary;

-- Concurrent refresh (no lock, requires unique index)
CREATE UNIQUE INDEX idx_mv_monthly ON monthly_sales_summary(month, product_id);
REFRESH MATERIALIZED VIEW CONCURRENTLY monthly_sales_summary;
```text

## 8.6 Schema Evolution

**Migration-based schema changes**:

```sql
-- 001_create_users.sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 002_add_user_profile.sql
ALTER TABLE users ADD COLUMN name VARCHAR(200);
ALTER TABLE users ADD COLUMN avatar_url VARCHAR(500);

-- 003_add_user_status.sql
ALTER TABLE users ADD COLUMN status VARCHAR(20)
    DEFAULT 'active'
    CHECK (status IN ('active', 'suspended', 'deleted'));

-- 004_create_orders.sql
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    total DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'pending'
);
```text

**Backward-compatible changes**:

```sql
-- Safe: add nullable column
ALTER TABLE users ADD COLUMN phone VARCHAR(20);

-- Safe: add column with default (lock on large tables)
ALTER TABLE users ADD COLUMN newsletter BOOLEAN DEFAULT TRUE;

-- Safe: create new index (concurrent)
CREATE INDEX CONCURRENTLY idx_users_email ON users(email);

-- Risky: rename column (breaks queries)
-- ALTER TABLE users RENAME COLUMN email TO email_address;

-- Risky: change column type (may fail)
-- ALTER TABLE users ALTER COLUMN status TYPE VARCHAR(50);

-- Safe approach: add new column, migrate data, drop old
ALTER TABLE users ADD COLUMN email_address VARCHAR(255);
UPDATE users SET email_address = email WHERE email_address IS NULL;
-- Then update application to use email_address
-- Finally: ALTER TABLE users DROP COLUMN email;
```text

**Versioning strategies**:

```sql
-- Type 1: Overwrite (lose history)
UPDATE users SET email = 'new@email.com' WHERE id = 1;

-- Type 2: Add new row (keep history)
INSERT INTO user_emails (user_id, email, effective_date)
VALUES (1, 'new@email.com', CURRENT_DATE);

-- Type 3: Separate history table
CREATE TABLE user_history (
    id INTEGER,
    email VARCHAR(255),
    name VARCHAR(200),
    valid_from TIMESTAMP NOT NULL,
    valid_to TIMESTAMP,
    PRIMARY KEY (id, valid_from)
);
```text

## TypeScript Parallel

```typescript
// Simple ORM with schema validation
interface ColumnDef {
    name: string;
    type: "string" | "number" | "boolean" | "date";
    required?: boolean;
    unique?: boolean;
    default?: any;
    references?: { table: string; column: string };
}

interface TableSchema {
    name: string;
    columns: ColumnDef[];
    primaryKey: string | string[];
}

class SchemaBuilder {
    private tables: Map<string, TableSchema> = new Map();

    createTable(name: string, columns: ColumnDef[], primaryKey: string | string[]): this {
        this.tables.set(name, { name, columns, primaryKey });
        return this;
    }

    generateCreateSQL(): string[] {
        const statements: string[] = [];
        for (const [name, schema] of this.tables) {
            const cols = schema.columns.map(col => {
                let sql = `    ${col.name} ${this.mapType(col.type)}`;
                if (col.required) sql += " NOT NULL";
                if (col.unique) sql += " UNIQUE";
                if (col.default !== undefined) sql += ` DEFAULT ${JSON.stringify(col.default)}`;
                if (col.references) sql += ` REFERENCES ${col.references.table}(${col.references.column})`;
                return sql;
            }).join(",\n");

            const pk = Array.isArray(schema.primaryKey)
                ? `    PRIMARY KEY (${schema.primaryKey.join(", ")})`
                : `    PRIMARY KEY (${schema.primaryKey})`;

            statements.push(`CREATE TABLE ${name} (\n${cols},\n${pk}\n);`);
        }
        return statements;
    }

    private mapType(type: string): string {
        const map: Record<string, string> = {
            string: "VARCHAR(255)",
            number: "INTEGER",
            boolean: "BOOLEAN",
            date: "TIMESTAMP"
        };
        return map[type] || "TEXT";
    }
}
```text

## Summary

- ERDs model entities (tables), attributes (columns), and relationships (foreign keys)
- Normalization: 1NF (atomic values), 2NF (no partial dependencies), 3NF (no transitive dependencies), BCNF
- Primary keys uniquely identify rows; foreign keys enforce referential integrity
- CHECK constraints validate data; EXCLUDE prevents overlaps
- Star schema uses denormalized dimensions and a central fact table for analytics
- EAV pattern handles variable attributes but complicates querying
- Partitioning splits tables for manageability; sharding splits across databases
- Materialized views pre-compute expensive aggregations
- Schema changes should be backward-compatible and use migrations
- Soft deletes preserve data while hiding it from queries

## Practical Takeaways

| Scenario | Use | Avoid |
|----------|-----|-------|
| Core application data | Fully normalized (3NF) | Denormalized from the start |
| Reporting / analytics | Star schema with materialized views | Normalized OLTP schema |
| Configurable products | EAV pattern | Fixed columns per variant |
| Time-series data | Partitioning by time range | Single giant table |
| Multi-tenant app | Row-level security or sharding | Shared-everything with no isolation |
| Soft deletes | deleted_at + partial index | Hard deletes with CASCADE |
| Lookup tables | Natural keys (ISO codes) | Surrogate keys |
| User-facing search | Full-text search index | LIKE '%term%' on large text |

## Interview Q&A

<details class="tp-qa-card" data-qid="sql-s08-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: What is normalization and why use it?</summary>
  <div class="tp-qa-answer"><p>Normalization organizes data to reduce redundancy and prevent update anomalies. 1NF eliminates repeating groups. 2NF removes partial dependencies. 3NF removes transitive dependencies. BCNF ensures every determinant is a candidate key. Benefits: less storage, consistent data, easier maintenance.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s08-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: When to denormalize?</summary>
  <div class="tp-qa-answer"><p>Denormalize when: (1) read throughput is critical and JOINs are expensive, (2) pre-computing aggregations for dashboards, (3) caching derived values like order totals, (4) designing star schemas for data warehousing. Trade-off: faster reads at the cost of write complexity and data redundancy.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s08-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: Surrogate vs natural keys?</summary>
  <div class="tp-qa-answer"><p>Surrogate keys (SERIAL, UUID) are artificial, immutable, and independent of business data. Natural keys (SSN, email, ISO code) have business meaning. Surrogate keys are preferred: they never change, are efficiently indexed, and avoid cascading updates. Use natural keys only for stable, small lookup tables.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s08-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: Difference between partitioning and sharding?</summary>
  <div class="tp-qa-answer"><p>Partitioning splits a table within the same database. Queries can still access all partitions transparently. Sharding splits data across different database servers. Each shard is independent. Partitioning improves manageability and scan performance. Sharding improves scalability beyond a single server.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s08-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: What is a materialized view?</summary>
  <div class="tp-qa-answer"><p>A materialized view stores the result of a query as a physical table. Unlike regular views (virtual, re-evaluated each time), materialized views persist data and must be refreshed periodically. Used for pre-computing expensive aggregations, improving report query performance by 10-100x.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s08-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: Star schema vs snowflake schema?</summary>
  <div class="tp-qa-answer"><p>Star schema has denormalized dimension tables (all attributes in one table per dimension). Snowflake schema normalizes dimensions into multiple related tables. Star is simpler for queries (fewer JOINs). Snowflake saves storage and enforces consistency. Star is generally preferred for analytics.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s08-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: How to handle schema migrations safely?</summary>
  <div class="tp-qa-answer"><p>Use numbered migration files (001, 002...). Always add backward-compatible changes first (nullable columns, new tables). Never rename or remove columns without a deprecation period. Use CREATE INDEX CONCURRENTLY to avoid locks. Test migrations on a staging database. Have a rollback plan.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s08-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: Polymorphic associations anti-pattern?</summary>
  <div class="tp-qa-answer"><p>Polymorphic associations (parent_type + parent_id) violate referential integrity because foreign keys cannot reference multiple tables. Solutions: separate join tables per parent type, or use a shared super-table with inheritance. Polymorphic is acceptable for lightweight cases like comments and likes.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s08-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: What is an EXCLUDE constraint?</summary>
  <div class="tp-qa-answer"><p>EXCLUDE prevents rows that would violate a condition based on operators. Most common use: preventing overlapping date ranges with GiST indexes (daterange &&). Can also prevent spatial overlaps (circle &&), or equality conflicts beyond simple unique constraints.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s08-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: How to choose between EAV and JSONB?</summary>
  <div class="tp-qa-answer"><p>EAV is useful when attributes need their own metadata (data types, validation rules, history). JSONB is better for simple variable attributes with GIN indexing. JSONB supports containment queries (@>) and has better performance. EAV is more normalized but requires complex pivoting for queries.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which normal form removes transitive dependencies? a) 1NF b) 2NF c) 3NF d) BCNF

<details class="tp-qa-card" data-qid="sql-s08-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) 3NF removes transitive dependencies</strong></p></div></details>

**Q2**: What does ON DELETE CASCADE do? a) prevents deletion b) deletes related rows c) sets FK to NULL d) ignores deletion

<details class="tp-qa-card" data-qid="sql-s08-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) deletes related rows when parent is deleted</strong></p></div></details>

**Q3**: Which schema pattern is best for data warehousing? a) EAV b) Star schema c) Polymorphic d) Single table

<details class="tp-qa-card" data-qid="sql-s08-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Star schema with denormalized dimensions and fact table</strong></p></div></details>

**Q4**: What partitioning type distributes rows across a fixed number of partitions by a hash function? a) Range b) List c) Hash d) Composite

<details class="tp-qa-card" data-qid="sql-s08-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Hash partitioning</strong></p></div></details>

**Q5**: Which is NOT a safe schema migration? a) add nullable column b) add column with default c) rename column d) CREATE INDEX CONCURRENTLY

<details class="tp-qa-card" data-qid="sql-s08-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) renaming a column breaks existing queries</strong></p></div></details>

## Exercises

**Easy** — Design an ERD for a library system: books, members, loans. Convert to SQL with proper keys and constraints.

**Easy** — Normalize a denormalized table with repeating columns (phone1, phone2, phone3) to 3NF.

**Medium** — Design a star schema for an e-commerce analytics database with sales, products, customers, and time dimensions.

**Medium** — Implement soft delete with a partial unique index that prevents duplicate active usernames but allows duplicates for deleted accounts.

**Hard** — Write a migration plan for splitting a monolith users table into users, profiles, and settings tables with backward compatibility.

**Hard** — Design a multi-tenant schema with row-level security. Support tenant isolation with shared tables (using tenant_id column) and demonstrate queries with automatic RLS filtering.

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 02-sql-and-databases. When would you choose one approach over another?
2. Design a system that efficiently handles 02-sql-and-databases at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 02-sql-and-databases. What was your approach and what was the result?
2. How would you explain 02-sql-and-databases to a non-technical stakeholder?

#### Microsoft Style
1. How does 02-sql-and-databases integrate with enterprise systems and cloud architectures?
2. What are the security implications of 02-sql-and-databases?

#### NVIDIA Style
1. How would you optimize 02-sql-and-databases for GPU-accelerated computing?
2. What parallel processing patterns apply to 02-sql-and-databases?

#### AI Startup Style
1. How would you implement 02-sql-and-databases in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 02-sql-and-databases?

### Resume Tips
- **Technical Skills**: List 02-sql-and-databases under relevant technical skills
- **Project Description**: "Implemented 02-sql-and-databases to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 02-sql-and-databases in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 02-sql-and-databases
- [ ] Practice 3-5 problems related to 02-sql-and-databases
- [ ] Prepare 2 real-world examples of using 02-sql-and-databases
- [ ] Know the time/space complexity of common 02-sql-and-databases operations
- [ ] Have questions ready about how the company uses 02-sql-and-databases> **Next**: [09 — Transactions & ACID →](09-transactions-and-acid.md)


## Difficulty Level

**Level**: Beginner
**Estimated Study Time**: 30-45 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to SQL & Databases fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master database design?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

Understanding the evolution of database design helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding database design at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of database design like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply database design concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of database design?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply database design in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (12 minutes)
**Day 2**: Complete exercises and practice (12 minutes)
**Day 3**: Review flashcards and take quiz (6 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying this topic to production, consider:
- Fine-tuning with LoRA or Adapters for domain adaptation
- Adapting general principles to your specific use cases
- Performance optimization for target hardware
- Cost considerations for deployment


## Open-Source Tools

- **LangChain**: Framework for building LLM-powered applications
- **LlamaIndex**: Data framework for connecting LLMs with external data
- **Hugging Face Transformers**: State-of-the-art ML models and datasets
- **Weights & Biases**: Experiment tracking and model evaluation
- **MLflow**: Open-source platform for ML lifecycle management
- **Prometheus + Grafana**: Monitoring and observability stack

## Debugging Guide

**Common Issues**:
- Check input validation and data types
- Verify API keys and authentication
- Monitor resource usage (CPU, memory, GPU)
- Review error logs for stack traces

**Debugging Steps**:
1. Reproduce the issue with minimal input
2. Add logging at key points
3. Check external dependencies
4. Verify configuration settings
5. Test with known-good inputs

## Mock Interview Section

**Quick Fire Questions**:
1. What is the core concept of SQL & Databases?
2. When would you use this in production?
3. What are the trade-offs?
4. How does this scale?
5. What are common pitfalls?

**Follow-up Questions**:
- How would you optimize this for 10x scale?
- What monitoring would you add?
- How would you test this in production?

## Optimized Implementation

For production systems, consider:
- **Caching**: Cache frequent computations and API responses
- **Batching**: Process multiple items together for efficiency
- **Async/Await**: Use non-blocking I/O for concurrent operations
- **Connection Pooling**: Reuse database and API connections
- **Lazy Loading**: Load resources only when needed

## References

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers from NeurIPS, ICML, ICLR
- Industry blogs from Google, Meta, OpenAI, Anthropic

## Evaluation Metrics

**Model Evaluation**:
- Accuracy, Precision, Recall, F1-Score
- BLEU, ROUGE for text generation
- Latency, Throughput, Cost per inference

**System Evaluation**:
- End-to-end latency (p50, p95, p99)
- Error rate and availability
- Resource utilization (CPU, memory, GPU)

## Real-World Examples

**Industry Applications**:
- Google: Search ranking, translation, autocomplete
- Amazon: Product recommendations, Alexa, fraud detection
- Netflix: Content recommendations, personalization
- Tesla: Autonomous driving, computer vision
- OpenAI: ChatGPT, DALL-E, Codex

## Next Topic

After mastering SQL & Databases, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.