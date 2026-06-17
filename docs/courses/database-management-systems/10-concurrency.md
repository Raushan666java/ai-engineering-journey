# Chapter 10: Concurrency Control

## Learning Objectives

- Understand the need for concurrency control in multi-user databases
- Implement lock-based protocols including 2PL and its variants
- Explain timestamp-based concurrency control
- Describe optimistic concurrency control
- Understand Multi-Version Concurrency Control (MVCC)
- Detect and resolve deadlocks in database systems

## Theory

![Concurrency Control Flowchart](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/database-management-systems/ch10-concurrency.png)

### 10.1 The Concurrency Problem

When multiple transactions execute simultaneously without coordination, several problems arise:

**Lost Update:** Two transactions read the same value, modify it independently, and write back. The second write overwrites the first.

```
T1: READ(X) → X=100          T2: READ(X) → X=100
T1: X = X + 50 → X=150       T2: X = X - 30 → X=70
T1: WRITE(X)                  T2: WRITE(X)
-- Final value: 70 (T1's increase is lost!)
```

**Dirty Read:** Reading uncommitted data that may later be rolled back.

```
T1: WRITE(X, 200)            -- X changed but not committed
T2: READ(X) → 200            -- T2 reads uncommitted value
T1: ROLLBACK                 -- X reverts to 100
-- T2 now has an invalid value (200 never existed)
```

**Incorrect Summary:** Reading different versions of the same data due to interleaving.

```
T1: READ(A) → 100
T1: WRITE(A, A-10) → A=90
T2: READ(A) → 90, READ(B) → 200
T1: READ(B) → 200
T1: WRITE(B, B+10) → B=210
-- T2's summary: A+B = 290 (inconsistent — A was after, B was before T1's changes)
```

Concurrency control protocols prevent these anomalies.

### 10.2 Lock-Based Protocols

A **lock** is a mechanism that prevents concurrent access to a data item. The two basic lock modes:

**Shared Lock (S):** For reading only. Multiple transactions can hold shared locks simultaneously.

**Exclusive Lock (X):** For writing. Only one transaction can hold an exclusive lock, and no shared locks can coexist.

**Lock Compatibility Matrix:**

| Request | S | X |
|---------|---|---|
| S | Yes | No |
| X | No | No |

**Lock Manager:** A component of the DBMS that maintains a lock table, grants locks, and queues lock requests that cannot be granted immediately.

### 10.3 Two-Phase Locking (2PL)

**Basic 2PL Protocol:**
1. **Growing Phase:** A transaction can acquire locks but cannot release any
2. **Shrinking Phase:** A transaction can release locks but cannot acquire any

The dividing point is when the transaction releases its first lock.

**Strict 2PL:** The transaction holds all exclusive locks until it commits or aborts (the most common variant in practice). This ensures strict schedules (write locks released only after commit/abort).

**Rigorous 2PL:** All locks (shared and exclusive) are held until commit/abort.

**Why 2PL Works:** 2PL ensures conflict serializability. By forcing all lock acquisitions before any releases, it creates a total order of transactions based on when they enter their shrinking phase.

```sql
-- Strict 2PL in action (conceptual — locking is automatic in most DBMS)
BEGIN;
-- Growing phase: locks acquired implicitly
UPDATE accounts SET balance = balance - 500 WHERE id = 1;
-- → acquires X-lock on account 1
UPDATE accounts SET balance = balance + 500 WHERE id = 2;
-- → acquires X-lock on account 2

-- Shrinking phase: cannot start until commit
COMMIT;
-- → all locks released
```

**Possible Problem with Basic 2PL — Cascading Rollbacks:**
```
T1: WRITE(A) → releases lock
T2: READ(A)  → reads T1's uncommitted write
T1: ABORT    → T2 must also abort!
```
Strict 2PL prevents this by holding write locks until commit.

### 10.4 Deadlock

A **deadlock** occurs when two or more transactions are each waiting for a lock held by the other.

```
T1: X-lock(A)                 T2: X-lock(B)
T1: requests X-lock(B)  ←    T2: requests X-lock(A)  ←
    BLOCKED (waiting for T2)      BLOCKED (waiting for T1)
```

**Deadlock Detection — Wait-for Graph:**
The DBMS maintains a directed graph where nodes are transactions and an edge Tᵢ → Tⱼ means Tᵢ is waiting for a lock held by Tⱼ. A cycle indicates deadlock.

```
T1 → T2 → T1  → deadlock!
```

On detection, the DBMS **chooses a victim** (usually the transaction with the lowest cost to abort, based on age, locks held, or work done) and aborts it, releasing its locks.

**Deadlock Prevention:**
- **Wait-Die (non-preemptive):** If older transaction waits for younger, older waits; otherwise, younger dies (aborts and retries).
- **Wound-Wait (preemptive):** If older transaction waits for younger, older wounds younger (younger aborts); otherwise, younger waits.
- **Timeout:** If a transaction waits longer than a threshold, assume deadlock and abort.

### 10.5 Lock Granularity

The **granularity** of locks affects concurrency and overhead:

- **Fine granularity (row-level):** High concurrency, high overhead (more locks to manage)
- **Coarse granularity (table-level):** Low concurrency, low overhead

Most modern DBMS use **row-level locking** by default with automatic escalation.

**Intention Locks:** Used with hierarchical locking. Before locking a row, the transaction acquires an intention lock at the table level to signal its intent.

- **IS (Intention Shared):** Wants to read some rows
- **IX (Intention Exclusive):** Wants to write some rows
- **SIX (Shared Intention Exclusive):** Reading all rows but writing some

**Lock Escalation:** When a transaction holds many row-level locks, the DBMS may escalate to a page or table lock to reduce overhead.

### 10.6 Timestamp-Based Protocols

Timestamp ordering assigns each transaction a unique timestamp (typically the system clock). The protocol ensures conflict serializability by preventing conflicting operations from executing in the "wrong" order.

**Basic Timestamp Ordering (TO):**
- Each data item X has two timestamps: `W-TS(X)` = timestamp of the last transaction that wrote X; `R-TS(X)` = timestamp of the largest timestamp that read X.
- A transaction T with timestamp TS(T) reads X:
  - If TS(T) < W-TS(X), the write is "future" — reject read, abort T
  - Otherwise, allow read, set R-TS(X) = max(R-TS(X), TS(T))
- A transaction T writes X:
  - If TS(T) < R-TS(X) or TS(T) < W-TS(X), reject write (data has been read/written by a "later" transaction)
  - Otherwise, allow write, set W-TS(X) = TS(T)

**Thomas's Write Rule:** An optimization. If TS(T) < W-TS(X), the write is outdated and can be ignored (rather than aborting) — a later write already exists.

Timestamp ordering avoids deadlocks (no waiting for locks) but can cause cascading aborts.

### 10.7 Optimistic Concurrency Control

Optimistic protocols assume conflicts are rare. They use three phases:

1. **Read Phase:** Execute transaction on a private copy of the data
2. **Validation Phase:** Check if the transaction conflicts with others
3. **Write Phase:** If validated, write changes to the database

**Validation Test (backward validation):**
For transaction T with start time S and validation time V, check against each concurrent transaction. If any concurrent transaction that committed between S and V wrote data that T read, T must abort.

Optimistic concurrency control works well for read-heavy, low-contention workloads.

### 10.8 Multi-Version Concurrency Control (MVCC)

MVCC is the most widely used concurrency control mechanism (PostgreSQL, Oracle, MySQL InnoDB, SQL Server). Instead of locking, each write creates a new **version** of the data. Readers see a snapshot of the database at a point in time.

**Key Ideas:**
- Each data item can have multiple versions
- Each version has a creation timestamp and expiration timestamp
- A transaction sees a **snapshot** of the database as of its start time
- Writers do not block readers; readers do not block writers

**MVCC Implementation Example (PostgreSQL):**

In PostgreSQL, each row has:
- `xmin`: Transaction ID that created this version
- `xmax`: Transaction ID that deleted/updated this version
- The actual data

When transaction Tx reads a row:
- It sees the row if `xmin < Tx` and `xmax > Tx` (or xmax is null/aborted)
- It does NOT see the row if `xmax` is a committed transaction ≤ Tx

```sql
-- In PostgreSQL, MVCC is transparent to users
-- But it affects behavior:
BEGIN;
SELECT amount FROM accounts WHERE id = 1;  -- Sees snapshot at BEGIN
-- Another session updates account 1
SELECT amount FROM accounts WHERE id = 1;  -- Same result (snapshot isolation!)
COMMIT;
```

**Advantages of MVCC:**
- Readers never wait
- Read-heavy workloads perform excellently
- Most common anomalies are prevented

**Challenges:**
- Storage overhead (multiple versions)
- Old versions must be cleaned up (VACUUM in PostgreSQL)
- Write skew anomalies (two transactions write to different rows with overlapping read sets)

### 10.9 Granularity of Data Access

In practice, the DBMS determines lock granularity automatically:

```sql
-- Row-level locking (default in most modern DBMS)
UPDATE products SET price = 29.99 WHERE product_id = 5;
-- Only the row with product_id=5 is locked

-- Table-level lock (explicit)
LOCK TABLE products IN EXCLUSIVE MODE;

-- Page-level locks may be used internally
```

### 10.10 Concurrency in SQL

```sql
-- Setting isolation level affects concurrency behavior
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
-- Most common. Uses row-level locks on modified data.
-- Readers use MVCC snapshots in PostgreSQL/Oracle.

SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
-- Highest isolation. Uses predicate locks or conflict detection.
-- May reject transactions with serialization errors.

SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
-- PostgreSQL: MVCC provides this naturally.
-- MySQL/InnoDB: Uses gap locks to prevent phantoms.
```

**Concurrency Monitoring:**

```sql
-- PostgreSQL: View current locks
SELECT relation::REGCLASS, locktype, mode, granted
FROM pg_locks WHERE pid = pg_backend_pid();

-- See blocking queries
SELECT
    blocked.pid AS blocked_pid,
    blocked.query AS blocked_query,
    blocker.pid AS blocker_pid,
    blocker.query AS blocker_query
FROM pg_catalog.pg_stat_activity blocked
JOIN pg_catalog.pg_locks blocked_locks ON blocked.pid = blocked_locks.pid
JOIN pg_catalog.pg_locks blocker_locks ON blocked_locks.locktype = blocker_locks.locktype
    AND blocked_locks.database IS NOT DISTINCT FROM blocker_locks.database
    AND blocked_locks.relation IS NOT DISTINCT FROM blocker_locks.relation
    AND blocked_locks.page IS NOT DISTINCT FROM blocker_locks.page
    AND blocked_locks.tuple IS NOT DISTINCT FROM blocker_locks.tuple
    AND blocked_locks.virtualxid IS NOT DISTINCT FROM blocker_locks.virtualxid
    AND blocked_locks.transactionid IS NOT DISTINCT FROM blocker_locks.transactionid
    AND blocked_locks.classid IS NOT DISTINCT FROM blocker_locks.classid
    AND blocked_locks.objid IS NOT DISTINCT FROM blocker_locks.objid
    AND blocked_locks.objsubid IS NOT DISTINCT FROM blocker_locks.objsubid
    AND blocked_locks.pid != blocker_locks.pid,
    pg_catalog.pg_stat_activity blocker
WHERE blocker.pid = blocker_locks.pid
    AND NOT blocked_locks.granted;
```

## Examples

**Example 10.1: Deadlock in Action**

```sql
-- Session 1
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;  -- Locks account 1

-- Session 2
BEGIN;
UPDATE accounts SET balance = balance - 50 WHERE id = 2;   -- Locks account 2

-- Session 1
UPDATE accounts SET balance = balance + 100 WHERE id = 2;  -- Waits for Session 2's lock

-- Session 2
UPDATE accounts SET balance = balance + 50 WHERE id = 1;   -- Waits for Session 1's lock
-- DEADLOCK!

-- The DBMS detects the cycle and aborts one transaction
-- "ERROR: deadlock detected" in one session
-- The other transaction proceeds normally
```

**Example 10.2: MVCC Behavior**

```sql
-- PostgreSQL MVCC: updates create new row versions

-- Session A:
BEGIN;
SELECT amount FROM accounts WHERE id = 1;
-- Result: 1000

-- Session B (concurrent):
UPDATE accounts SET amount = 500 WHERE id = 1;
COMMIT;

-- Session A (still in transaction):
SELECT amount FROM accounts WHERE id = 1;
-- Result: 1000 (sees the old snapshot!)
-- Session A is isolated from Session B's commit

-- Session A commits and re-reads:
COMMIT;
BEGIN;
SELECT amount FROM accounts WHERE id = 1;
-- Result: 500 (now sees the committed change)
```

## Summary

- Concurrency control prevents lost updates, dirty reads, and inconsistent summaries.
- Lock-based protocols use shared (S) and exclusive (X) locks to control access.
- 2PL ensures serializability by separating lock acquisition and release into two phases.
- Deadlock is detected via wait-for graphs and resolved by aborting a victim transaction.
- Timestamp ordering provides an alternative that avoids deadlocks.
- Optimistic concurrency control works well in low-contention environments.
- MVCC is the dominant approach — readers see snapshots and never block writers.
- Isolation levels in SQL control the degree of concurrency protection.

## Exercises

### Basic

1. Explain the "lost update" problem. Write a schedule that demonstrates it.

2. What is the difference between a shared lock and an exclusive lock? When would each be used?

3. Why does 2PL ensure serializability? Draw the growing and shrinking phases.

4. What is the difference between strict 2PL and basic 2PL?

### Intermediate

5. Draw a wait-for graph showing a deadlock between three transactions. Explain how the DBMS would detect and resolve it.

6. Explain how MVCC allows a reader and writer to proceed simultaneously without blocking. What storage overhead does it introduce?

7. For the following schedule, determine what locking protocol would allow it and whether it is serializable:
```
T1: READ(A), READ(B), SUM = A+B
T2: WRITE(A, 10), WRITE(B, 20)
```

8. Compare optimistic concurrency control with pessimistic (lock-based) concurrency control. When would you choose each?

### Advanced

9. Design a high-contention banking system. A single account ("hot account") receives thousands of deposits and withdrawals per second. Explain the concurrency challenges and propose at least three strategies to handle them (e.g., batch updates, partitioned counters, optimistic concurrency with retry).

10. In PostgreSQL's MVCC, implement an inventory management system where two concurrent sessions attempt to purchase the last item of a product:
    - Session 1 reads stock = 1
    - Session 2 reads stock = 1
    - Session 1 decrements stock to 0 and commits
    - Session 2 decrements stock to -1
    
    How does PostgreSQL's REPEATABLE READ isolation prevent this? What about READ COMMITTED? Write the SQL and explain.

11. Research "write skew" in snapshot isolation. Give a concrete example of two transactions that each check a constraint, find it satisfied, then update data such that the constraint is violated after both commit. Can SERIALIZABLE isolation prevent this?
