# Chapter 1: Database Management Systems — Exam Quick Revision

## Learning Objectives
- Master ER model constructs and notations for conceptual design
- Recall relational algebra operators with set-semantics intuition
- Distinguish normal forms (1NF-3NF-BCNF) with decomposition algorithms
- Interpret SQL join types and their relational algebra equivalents
- Apply ACID properties and concurrency control protocols to transaction scenarios
- Solve indexing and file organization problems for query optimization

---

## 1. ER Model Quick Reference

### Entity, Attribute, Relationship
| Construct | Notation | Example |
|-----------|----------|---------|
| Entity (strong) | Rectangle | EMPLOYEE, DEPARTMENT |
| Entity (weak) | Double rectangle | DEPENDENT |
| Attribute (simple) | Ellipse | emp_id, emp_name |
| Attribute (composite) | Ellipse with sub-ellipses | address(street, city, pincode) |
| Attribute (derived) | Dashed ellipse | age (from DOB) |
| Attribute (multivalued) | Double ellipse | phone_numbers |
| Relationship | Diamond | WORKS_FOR, MANAGES |
| Key attribute | Underlined text | emp_id (primary key) |

### Cardinality Constraints
| Notation | Meaning |
|----------|---------|
| 1:1 | One entity of A relates to at most one of B (e.g., EMPLOYEE ↔ COMPANY_CAR) |
| 1:N | One entity of A relates to many of B (e.g., DEPARTMENT has many EMPLOYEES) |
| M:N | Many of A relate to many of B (e.g., STUDENT enrolls in COURSE) |

### Participation Constraints
- **Total participation** (double line): Every entity in the set participates (e.g., every EMPLOYEE must belong to a DEPARTMENT)
- **Partial participation** (single line): Some entities may not participate

---

## 2. Relational Algebra Operators

**Basis:** Set of operators that take one or two relations as input and produce a new relation as output.

### Select (σ) — Row Selection
```
σ_condition(R) = { t | t ∈ R ∧ condition(t) }
```
Example: `σ_salary > 50000(EMPLOYEE)` — employees earning more than 50K.

### Project (π) — Column Selection
```
π_col1, col2, ..., colk(R) = { t[col1, ..., colk] | t ∈ R }
```
Example: `π_emp_name, salary(EMPLOYEE)`

### Rename (ρ) — Alias
```
ρ_new_name(R) or ρ_new_name(col1,...,coln)(R)
```

### Union (∪), Intersection (∩), Set Difference (−)
Require relations to be **union-compatible** (same number of attributes, same domains).

### Cartesian Product (×)
```
R × S = { (r, s) | r ∈ R ∧ s ∈ S }
```

### Join Operators

| Join Type | Symbol | Description |
|-----------|--------|-------------|
| Theta join | R ⋈_θ S | R × S followed by σ_θ |
| Equi join | R ⋈_{A=B} S | Theta join where θ contains only equality |
| Natural join | R ⋈ S | Equi join on **all common attributes**, duplicates removed |
| Left outer join | R ⟕ S | All tuples from R, NULLs for non-matching S |
| Right outer join | R ⟖ S | All tuples from S, NULLs for non-matching R |
| Full outer join | R ⟗ S | All tuples from both, NULLs where no match |

### Division (÷)
```
R ÷ S = { t | t ∈ π_{R−S}(R) ∧ ∀u ∈ S, (t,u) ∈ R }
```
**Exam tip:** Division answers "which X has all Y?" — used for queries like "find employees who work in all departments."

---

## 3. Normalization

### Functional Dependency (FD) Axioms (Armstrong's)
- **Reflexivity:** If Y ⊆ X, then X → Y
- **Augmentation:** If X → Y, then XZ → YZ
- **Transitivity:** If X → Y and Y → Z, then X → Z
- Decomposition: If X → YZ, then X → Y and X → Z
- Union: If X → Y and X → Z, then X → YZ

### Normal Forms — Decomposition Guide

| NF | Condition | How to Fix Violation |
|----|-----------|---------------------|
| **1NF** | Atomic domains — no multi-valued attributes | Split each non-atomic cell into separate tuple |
| **2NF** | 1NF + no partial dependency (non-prime attr fully dependent on candidate key) | Remove partial FD: decompose into tables for each partial key + dependent attrs |
| **3NF** | 2NF + no transitive dependency (non-prime attr → non-prime attr) | Decompose by the transitive FD: R1(XY), R2(XZ) when X→Y and Y→Z |
| **BCNF** | 3NF + every determinant must be a superkey | Decompose by violating FD X→Y: R1(XY), R2(R−Y) |

### Decomposition Properties
- **Lossless join:** Decomposition should be recoverable via natural join
  - Binary decomposition check: `R1 ∩ R2 → R1` or `R1 ∩ R2 → R2`
- **Dependency preservation:** All FDs should be checkable on individual decomposed relations

### Solved Numerical: Decomposition
**Given:** R(A, B, C, D) with FDs: AB → C, C → D, D → A

**Step 1 — Candidate keys:** {AB}, {BC}, {BD} (all minimal superkeys)

**Step 2 — Check 2NF:** No partial FD because each key is single-attribute? No — AB → C, C → D. Since there is no partial dependency (non-prime attrs C, D fully depend on each candidate key), it is in 2NF.

**Step 3 — Check 3NF:** C → D (D is non-prime, C is not a superkey) ⇒ transitive dependency exists. So not in 3NF.

**Step 4 — Decompose into 3NF:** R1(C, D); R2(A, B, C)

---

## 4. SQL Joins Master Table

```sql
-- INNER JOIN — only matching rows from both
SELECT * FROM R INNER JOIN S ON R.id = S.id;

-- LEFT JOIN — all rows from R, NULLs where S has no match
SELECT * FROM R LEFT JOIN S ON R.id = S.id;

-- RIGHT JOIN — all rows from S, NULLs where R has no match
SELECT * FROM R RIGHT JOIN S ON R.id = S.id;

-- FULL JOIN — all rows from both, NULLs where no match
SELECT * FROM R FULL OUTER JOIN S ON R.id = S.id;

-- CROSS JOIN — Cartesian product (R × S)
SELECT * FROM R CROSS JOIN S;

-- SELF JOIN — table joined with itself (needs alias)
SELECT A.name, B.name AS manager
FROM EMP A INNER JOIN EMP B ON A.mgr_id = B.emp_id;
```

### Relational Algebra → SQL Mapping
| SQL Clause | Relational Algebra |
|------------|-------------------|
| `WHERE` | σ (select) |
| `SELECT` (columns) | π (project) |
| `JOIN ... ON` | ⋈ (join) |
| `UNION` | ∪ |
| `INTERSECT` | ∩ |
| `EXCEPT` | − |
| `GROUP BY` + aggregate | γ (group by) |
| `HAVING` | σ on groups |

### Aggregate Functions
`COUNT`, `SUM`, `AVG`, `MAX`, `MIN` — used with `GROUP BY`

**Query order:** `SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY`

---

## 5. ACID Properties

| Property | Meaning | Enforced by |
|----------|---------|-------------|
| **Atomicity** | Transaction executes completely or not at all | Recovery manager (undo log) |
| **Consistency** | Transaction preserves database constraints | Application + DBMS |
| **Isolation** | Concurrent transactions appear to execute serially | Concurrency control (locking) |
| **Durability** | Committed changes persist despite failures | Recovery manager (redo log) |

---

## 6. Concurrency Control Protocols

### Lock-Based (2PL — Two-Phase Locking)
- **Phase 1 (Growing):** Acquire locks, no release
- **Phase 2 (Shrinking):** Release locks, no acquire
- **Strict 2PL:** All exclusive locks released only after commit — prevents cascading aborts
- **Rigorous 2PL:** All locks (shared + exclusive) released after commit

### Timestamp-Based Ordering
- Each transaction gets unique timestamp TS(T)
- **Read_TS(X):** Latest read timestamp on X
- **Write_TS(X):** Latest write timestamp on X
- **Thomas Write Rule:** Allows ignoring obsolete writes

| Operation | Condition | Action |
|-----------|-----------|--------|
| R_T(X) | TS(T) &lt; W_TS(X) | Abort T (too late to read) |
| R_T(X) | TS(T) ≥ W_TS(X) | Allow; set R_TS(X) = max(R_TS(X), TS(T)) |
| W_T(X) | TS(T) &lt; R_TS(X) | Abort T (obsolete write) |
| W_T(X) | TS(T) &lt; W_TS(X) | Ignore (Thomas rule) or abort |

### Deadlock in DB
- **Cycle in wait-for graph** ⇒ deadlock
- **Prevention:** Wait-die (older waits for younger) or Wound-wait (younger wounds older)
- **Detection:** Periodic check for cycle in wait-for graph
- **Recovery:** Choose victim (oldest/least-cost), rollback, restart

---

## 7. Transaction Isolation Levels (SQL Standard)

| Level | Dirty Read | Non-repeatable Read | Phantom Read | Lost Update |
|-------|-----------|-------------------|-------------|-------------|
| READ UNCOMMITTED | ❌ Possible | ❌ Possible | ❌ Possible | ❌ Possible |
| READ COMMITTED | ✅ Prevented | ❌ Possible | ❌ Possible | ❌ Possible |
| REPEATABLE READ | ✅ Prevented | ✅ Prevented | ❌ Possible | ❌ Possible |
| SERIALIZABLE | ✅ Prevented | ✅ Prevented | ✅ Prevented | ✅ Prevented |

**Default isolation in:** MySQL — REPEATABLE READ; PostgreSQL/Oracle — READ COMMITTED

---

## 8. Indexing

### B+ Tree Index
- **Multi-level index** — all keys in leaves; internal nodes act as routers
- **Order p** of B+ tree: max number of pointers in a node
- **Search cost:** O(log_p N) — typically 2–4 levels
- Supports range queries efficiently (linked leaves)

### Hash Index
- Direct address computation via hash function
- **O(1) for equality lookups** — but not for range queries
- **Static hashing:** overflow chaining when bucket full
- **Extendable hashing:** doubles directory size on overflow; gradual growth

### Clustered vs Non-clustered
| Aspect | Clustered | Non-clustered |
|--------|-----------|---------------|
| Data order | Physical order same as index | Logical order different from physical |
| No. per table | One (data stored at leaf) | Multiple |
| Leaf node | Contains actual data row | Contains pointer to data row |

---

## Solved MCQs

**Q1:** Consider relation R(A, B, C, D, E) with FDs: A → B, BC → D, D → E, E → A. How many candidate keys?
- (a) 1
- (b) 2
- (c) 3
- (d) 4

**Answer:** (d) 4. {A}, {BC}, {E}, {CD} are all candidate keys.

**Q2:** Two transactions: T1: R(A) W(A) R(B) W(B); T2: R(A) W(A) R(B) W(B). Which schedule is conflict serializable?
- (a) T1: R(A) W(A) | T2: R(A) W(A) | T1: R(B) W(B) | T2: R(B) W(B)
- (b) T1: R(A) W(A) R(B) W(B) | T2: R(A) W(A) R(B) W(B)

**Answer:** (a) — equivalent to serial order T1 → T2 (no conflicting RW/WR/WW between interleaved ops).

**Q3:** In a B+ tree of order 5, each node (except root) must have at least how many keys?
- (a) 2
- (b) 3
- (c) 4
- (d) 5

**Answer:** (a) 2. Ceil(p/2) − 1 = ceil(5/2) − 1 = 3 − 1 = 2 keys minimum for non-root.

---

## 9. Transaction States &amp; Log-Based Recovery

### Transaction States
```
Active → Partially Committed → Committed
Active → Failed → Aborted
```

- **Active:** Initial state — statements executing
- **Partially Committed:** After final statement executes
- **Failed:** Aborted due to error or rollback
- **Aborted:** Transaction rolled back; database restored to pre-transaction state
- **Committed:** All changes made permanent (durable)

### Log-Based Recovery
| Log Entry Type | Format | Action |
|---------------|--------|--------|
| Start | `&lt;T1 start&gt;` | Transaction began |
| Update | `&lt;T1, X, old, new&gt;` | T1 changed X from old to new |
| Commit | `&lt;T1 commit&gt;` | T1 committed — redo |
| Abort | `&lt;T1 abort&gt;` | T1 aborted — undo |

**Undo Logging:** Write old values; undo on abort
**Redo Logging:** Write new values; redo on recovery after crash
**Undo/Redo:** Both old and new written — flexible, most common

**ARIES Recovery Algorithm:**
1. **Analysis pass:** Determine dirty pages and active transactions from log
2. **Redo pass:** Reapply all changes (repeat history) from last checkpoint
3. **Undo pass:** Roll back uncommitted transactions (LSN-based)

### Checkpoint
- Periodically write dirty page table + active transaction list to disk
- Reduces recovery time — only need to scan log from last checkpoint

## 10. Lock Types in Concurrency Control

| Lock Type | Symbol | Compatible With | Description |
|-----------|--------|----------------|-------------|
| Shared (S) | S-lock | S (read-only) | Multiple transactions can read |
| Exclusive (X) | X-lock | None | Only one transaction can read/write |
| Intention Shared (IS) | IS | IS, S | Intention to lock finer granularity |
| Intention Exclusive (IX) | IX | IS, S, IX | Intention to lock finer with X |
| Shared+Intention Exclusive (SIX) | SIX | IS | S on this + IX on finer level |

### Lock Granularity Hierarchy
```
Table → Page → Row → Attribute
```
**Lock escalation:** Convert many fine locks to one coarse lock (reduces overhead)

### Two-Phase Locking (2PL) Subtypes
| Protocol | Growing | Shrinking | Cascading Aborts? |
|----------|---------|-----------|-------------------|
| Basic 2PL | Lock acquire | Lock release | ❌ Yes |
| Strict 2PL | Lock acquire | Release X-locks at commit | ✅ No |
| Rigorous 2PL | Lock acquire | Release all locks at commit | ✅ No |

---

## 11. SQL Aggregates &amp; Group By — Extended Examples

### GROUP BY with HAVING
```sql
-- Find departments with avg salary > 50000
SELECT dept_name, AVG(salary) as avg_sal, COUNT(*) as emp_count
FROM employee
WHERE salary > 30000
GROUP BY dept_name
HAVING AVG(salary) > 50000
ORDER BY avg_sal DESC;
```

### Execution Order in SQL
```
FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT
```

### Aggregate Functions with NULL Handling
- `COUNT(*)` — counts all rows including NULLs
- `COUNT(column)` — counts non-NULL values only
- `AVG`, `SUM`, `MIN`, `MAX` — ignore NULLs
- `COALESCE(column, 0)` — replaces NULL with default

## 12. Query Optimization Basics

### Heuristic Optimization Rules
1. **Project early** (reduce columns early)
2. **Select early** (reduce rows early)
3. **Perform joins before Cartesian products**
4. **Use indexed access** when available (B+ tree for range, hash for equality)
5. **Pipeline operations** (avoid materializing intermediate results)

### Join Algorithms
| Algorithm | Conditions | Complexity | Use When |
|-----------|-----------|------------|----------|
| **Nested Loop** | Any join condition | O(n×m) | Small tables |
| **Block Nested Loop** | Any join condition | O(n×m / block_size) | Medium tables |
| **Index Nested Loop** | Index on inner table | O(n × log m) | Index available |
| **Sort-Merge** | Equi-join | O(n log n + m log m) | Sorted/large tables |
| **Hash Join** | Equi-join | O(n + m) | Large unsorted tables |

---

## Summary
- **ER diagrams:** Entities (rectangles), relationships (diamonds), attributes (ellipses)
- **Relational algebra:** σ (rows), π (columns), ⋈ (join), ÷ (division — "all" queries)
- **Normalization:** 1NF (atomic) → 2NF (no partial FD) → 3NF (no transitive FD) → BCNF (every determinant is superkey)
- **ACID:** Atomicity, Consistency, Isolation, Durability
- **Concurrency:** 2PL, timestamp ordering, deadlock detection via wait-for graph
- **Isolation levels:** READ UNCOMMITTED → SERIALIZABLE (strongest)
- **Indexing:** B+ tree (log N, range), hash (O(1), equality only)
- **Recovery:** ARIES (analysis → redo → undo), checkpoints reduce scan time
- **Locks:** Shared (read), Exclusive (write), Intention locks for hierarchy
- **SQL ordering:** FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY

---

## HOT Topics (Frequently Asked in IBPS SO IT Mains)
1. Relational algebra division operator queries
2. BCNF decomposition — given FD set, find candidate keys, normalize to BCNF
3. Conflict serializability — precedence graph construction
4. B+ tree insertion/deletion with order constraints
5. ACID property scenarios — which property is violated in a given failure
6. Isolation level anomaly detection (dirty read vs non-repeatable read)
7. SQL queries with GROUP BY and HAVING on multi-table joins
8. Timestamp ordering vs 2PL — which schedule is allowed

---

## Chapter Quiz (MCQs)

<details>
<summary>Q1: Which normal form requires every determinant to be a superkey?</summary>
A1: BCNF (Boyce-Codd Normal Form). 3NF allows determinants that are not superkeys as long as the right-hand side is a prime attribute.
</details>

<details>
<summary>Q2: In a precedence graph, if there is a cycle, the schedule is:</summary>
A2: Not conflict serializable. A precedence graph must be acyclic for conflict serializability.
</details>

<details>
<summary>Q3: Which isolation level prevents dirty reads but allows non-repeatable reads?</summary>
A3: READ COMMITTED. It ensures only committed data is read, but same query in a transaction may return different results.
</details>

<details>
<summary>Q4: The relational algebra expression π_name(σ_dept='CS'(STUDENT)) is equivalent to which SQL?</summary>
A4: SELECT name FROM student WHERE dept = 'CS';
</details>

<details>
<summary>Q5: In strict 2PL, when are exclusive locks released?</summary>
A5: After commit/abort. This prevents cascading aborts because no other transaction can read uncommitted writes.
</details>
