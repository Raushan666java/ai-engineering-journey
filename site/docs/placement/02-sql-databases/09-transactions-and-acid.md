---
slug: /02-sql-databases/transactions-and-acid
title: "Transactions And Acid"
sidebar_label: "Transactions And Acid"
sidebar_position: 9
---

# Transactions & ACID — BEGIN, COMMIT, ROLLBACK, Isolation Levels, Locks

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand ACID properties and why they matter |
| LO2 | Use BEGIN, COMMIT, and ROLLBACK to manage transactions |
| LO3 | Implement savepoints for partial rollback |
| LO4 | Understand isolation levels and their trade-offs |
| LO5 | Identify and resolve deadlocks and lock contention |
| LO6 | Use explicit locking and advisory locks when needed |

## Introduction

Data is the fuel of AI. SQL and database design skills let you query, transform, and store the data that powers machine learning models. This module covers everything from basic queries to advanced indexing and optimization.




## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding transactions and acid is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how transactions and acid works in practice.



## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 9.1 | ACID Properties | Atomicity, Consistency, Isolation, Durability |
| 9.2 | Transaction Control | BEGIN, COMMIT, ROLLBACK, SAVEPOINT |
| 9.3 | Isolation Levels | Read Uncommitted, Read Committed, Repeatable Read, Serializable |
| 9.4 | Phenomena | Dirty reads, non-repeatable reads, phantom reads, serialization anomalies |
| 9.5 | Locking | Row-level, table-level, deadlock detection, advisory locks |
| 9.6 | Practical Transaction Patterns | Retry logic, optimistic locking, distributed transactions |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Transactions] --> B[ACID]
    A --> C[Control]
    A --> D[Isolation Levels]
    A --> E[Locking]
    A --> F[Patterns]
    B --> G[Atomicity / Consistency]
    B --> H[Isolation / Durability]
    C --> I[BEGIN / COMMIT / ROLLBACK]
    D --> J[Read Committed]
    D --> K[Repeatable Read]
    D --> L[Serializable]
    E --> M[Row / Table Locks]
    E --> N[Deadlocks]
    F --> O[Retry / Optimistic Locking]
```

## 9.1 ACID Properties

ACID guarantees that database transactions are processed reliably.

**Atomicity** — All or nothing. A transaction either completes fully or has no effect.

```sql
-- Atomic transfer: both operations succeed or both fail
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
-- If power fails after first UPDATE, ROLLBACK occurs automatically
```

**Consistency** — Transactions preserve database invariants (constraints, rules).

```sql
-- CHECK constraint ensures consistency
CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    balance DECIMAL(10, 2) CHECK (balance >= 0)
);

BEGIN;
UPDATE accounts SET balance = balance - 200 WHERE id = 1;  -- OK
UPDATE accounts SET balance = balance + 200 WHERE id = 2;  -- OK
COMMIT;

-- If balance would go negative, CHECK constraint violation causes ROLLBACK
```

**Isolation** — Concurrent transactions don't interfere with each other.

```sql
-- Transaction A
BEGIN;
UPDATE products SET stock = stock - 1 WHERE id = 10;
-- Transaction B cannot see the decremented stock until A commits
COMMIT;
```

**Durability** — Committed changes survive system failures.

```sql
-- After COMMIT returns successfully, data is written to WAL (Write-Ahead Log)
-- Even if the server crashes immediately after, data is recovered on restart
BEGIN;
INSERT INTO audit_log (event) VALUES ('payment_processed');
COMMIT;  -- Now durable even if power fails
```

## 9.2 Transaction Control

**Basic transaction flow**:

```sql
BEGIN;                           -- Start transaction
INSERT INTO orders (customer_id, total) VALUES (1, 150.00);
INSERT INTO order_items (order_id, product_id, quantity) VALUES (currval('orders_id_seq'), 42, 3);
COMMIT;                          -- Make changes permanent

-- Or on error:
BEGIN;
INSERT INTO orders (customer_id, total) VALUES (1, 200.00);
-- Something goes wrong
ROLLBACK;                        -- Undo all changes
```

**Savepoints** allow partial rollback:

```sql
BEGIN;
INSERT INTO audit_log (event) VALUES ('batch_start');

SAVEPOINT sp1;
INSERT INTO orders (customer_id, total) VALUES (1, 100.00);
-- Oh no, this order is wrong
ROLLBACK TO SAVEPOINT sp1;       -- Undo just the bad insert

-- Continue with correct data
INSERT INTO orders (customer_id, total) VALUES (2, 150.00);
RELEASE SAVEPOINT sp1;           -- Release the savepoint

COMMIT;                          -- Only the correct order is committed
```

**Auto-commit mode** (default in most clients):

```sql
-- In psql, each statement auto-commits:
INSERT INTO log (message) VALUES ('this commits immediately');

-- Disable auto-commit:
\set AUTOCOMMIT off
-- Or use \begin and \end in psql
```

**Transaction state after error**:

```sql
BEGIN;
INSERT INTO accounts (name, balance) VALUES ('Alice', 100);
INSERT INTO accounts (name, balance) VALUES ('Bob', 'invalid');  -- ERROR
-- Transaction is now ABORTED. Must ROLLBACK or COMMIT (which rolls back).
ROLLBACK;
```

## 9.3 Isolation Levels

PostgreSQL supports four isolation levels defined by SQL standard.

```sql
-- Set isolation level for a transaction
BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;
-- ... queries ...
COMMIT;

-- Set default for session
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
```

**Read Uncommitted** — In PostgreSQL, behaves like Read Committed.

```sql
-- PostgreSQL doesn't allow dirty reads even at READ UNCOMMITTED
BEGIN TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
SELECT * FROM accounts;  -- Still sees only committed data
COMMIT;
```

**Read Committed** (default) — Each query sees only committed data.

```sql
-- Transaction A
BEGIN;
UPDATE accounts SET balance = balance + 100 WHERE id = 1;

-- Transaction B (concurrent)
BEGIN TRANSACTION ISOLATION LEVEL READ COMMITTED;
SELECT balance FROM accounts WHERE id = 1;  -- Sees OLD balance (100 before update)
-- After A commits:
SELECT balance FROM accounts WHERE id = 1;  -- Sees NEW balance (200)
COMMIT;
```

**Repeatable Read** — Transaction sees a consistent snapshot from the first query.

```sql
-- Transaction A
BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SELECT balance FROM accounts WHERE id = 1;  -- Returns 100

-- Transaction B (concurrent)
UPDATE accounts SET balance = 200 WHERE id = 1; COMMIT;

-- Transaction A (still running)
SELECT balance FROM accounts WHERE id = 1;  -- Still returns 100 (snapshot)
COMMIT;
-- After commit, A sees new value on next transaction
```

**Serializable** — Highest isolation; transactions execute as if serial.

```sql
-- Transaction A
BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;
SELECT SUM(balance) FROM accounts WHERE id IN (1, 2);  -- 300

-- Transaction B runs concurrently and modifies accounts

-- Transaction A tries to update
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
COMMIT;
-- May get: ERROR: could not serialize access due to read/write dependencies
-- Application must retry
```

**Choosing isolation levels**:

| Level | Dirty Read | Non-Repeatable Read | Phantom Read | Serialization Anomaly |
|-------|-----------|---------------------|--------------|----------------------|
| Read Uncommitted | Possible (not in PG) | Possible | Possible | Possible |
| Read Committed | Not possible | Possible | Possible | Possible |
| Repeatable Read | Not possible | Not possible | Not possible (PG) | Possible |
| Serializable | Not possible | Not possible | Not possible | Not possible |

## 9.4 Phenomena

**Dirty read** — Reading uncommitted data from another transaction. Prevented by all isolation levels in PostgreSQL.

```sql
-- Transaction A
BEGIN;
UPDATE employees SET salary = 100000 WHERE id = 1;

-- Transaction B (even at READ UNCOMMITTED in PG)
SELECT salary FROM employees WHERE id = 1;  -- Sees 50000 (committed value, not 100000)
```

**Non-repeatable read** — Same query returns different values within a transaction because another transaction committed changes.

```sql
-- Transaction A (READ COMMITTED)
BEGIN;
SELECT status FROM orders WHERE id = 10;  -- 'pending'

-- Transaction B
UPDATE orders SET status = 'shipped' WHERE id = 10; COMMIT;

-- Transaction A
SELECT status FROM orders WHERE id = 10;  -- 'shipped' (different from first read!)
```

**Phantom read** — A query returns different sets of rows because another transaction inserted/deleted rows.

```sql
-- Transaction A (REPEATABLE READ in most databases)
BEGIN;
SELECT COUNT(*) FROM orders WHERE total > 100;  -- 5

-- Transaction B
INSERT INTO orders (customer_id, total) VALUES (3, 200); COMMIT;

-- Transaction A
SELECT COUNT(*) FROM orders WHERE total > 100;
-- In REPEATABLE READ: still 5 (prevents phantoms in PostgreSQL)
-- In READ COMMITTED: 6 (phantom row appears)
```

**Serialization anomaly** — Two concurrent serializable transactions produce a result that would be impossible in any serial execution.

```sql
-- Classic example: user 1 says "user 2 has 100 followers"
-- User 2 simultaneously says "user 1 has 50 followers"
-- With SERIALIZABLE, PostgreSQL detects this conflict and aborts one
```

## 9.5 Locking

**Row-level locks**:

```sql
-- FOR UPDATE: prevents other transactions from modifying or locking the row
BEGIN;
SELECT * FROM accounts WHERE id = 1 FOR UPDATE;
-- Now update balance safely
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
COMMIT;

-- FOR NO KEY UPDATE: weaker than FOR UPDATE (allows concurrent key updates)
SELECT * FROM accounts WHERE id = 1 FOR NO KEY UPDATE;

-- FOR SHARE: allows reads but prevents updates (shared lock)
SELECT * FROM orders WHERE id = 10 FOR SHARE;

-- FOR KEY SHARE: prevents key deletion but allows other modifications
SELECT * FROM orders WHERE id = 10 FOR KEY SHARE;
```

**Lock conflicts**:

| Lock Mode | FOR UPDATE | FOR NO KEY UPDATE | FOR SHARE | FOR KEY SHARE |
|-----------|-----------|-------------------|-----------|---------------|
| FOR UPDATE | Conflict | Conflict | Conflict | Conflict |
| FOR NO KEY UPDATE | Conflict | Conflict | Conflict | No conflict |
| FOR SHARE | Conflict | Conflict | No conflict | No conflict |
| FOR KEY SHARE | Conflict | No conflict | No conflict | No conflict |

**Table-level locks**:

```sql
-- Block all other operations
LOCK TABLE accounts IN ACCESS EXCLUSIVE MODE;

-- Block writes but allow reads
LOCK TABLE accounts IN SHARE MODE;

-- Allow concurrent reads but block schema changes
LOCK TABLE accounts IN ACCESS SHARE MODE;
```

**Deadlock detection**:

```sql
-- Session A
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;

-- Session B
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 2;

-- Session A now tries to update id 2
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
-- WAIT

-- Session B now tries to update id 1
UPDATE accounts SET balance = balance + 100 WHERE id = 1;
-- DEADLOCK! PostgreSQL detects and aborts one transaction
-- ERROR: deadlock detected
-- Rollback and retry
```

**Advisory locks** (application-level locks):

```sql
-- Session-level advisory lock
SELECT pg_advisory_lock(12345);

-- Do work that needs mutual exclusion
UPDATE critical_resource SET status = 'processing';

-- Release
SELECT pg_advisory_unlock(12345);

-- Transaction-level advisory lock (auto-released on commit)
SELECT pg_advisory_xact_lock(12345);
```

## 9.6 Practical Transaction Patterns

**Optimistic locking** (no locks, retry on conflict):

```sql
-- Add version column to table
ALTER TABLE accounts ADD COLUMN version INTEGER DEFAULT 1;

-- Application code:
BEGIN;
SELECT balance, version FROM accounts WHERE id = 1;
-- balance = 100, version = 1
-- Application computes new balance = 150

UPDATE accounts
SET balance = 150, version = version + 1
WHERE id = 1 AND version = 1;
-- If 0 rows updated, another transaction modified it. Retry.
COMMIT;
```

**Retry logic for serialization failures**:

```python
import psycopg2
from psycopg2 import errors

MAX_RETRIES = 3

def transfer_funds(conn, from_id, to_id, amount):
    for attempt in range(MAX_RETRIES):
        try:
            with conn.cursor() as cur:
                cur.execute("BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE")
                cur.execute("SELECT balance FROM accounts WHERE id = %s", (from_id,))
                balance = cur.fetchone()[0]
                if balance < amount:
                    raise ValueError("Insufficient funds")
                cur.execute("UPDATE accounts SET balance = balance - %s WHERE id = %s",
                          (amount, from_id))
                cur.execute("UPDATE accounts SET balance = balance + %s WHERE id = %s",
                          (amount, to_id))
                conn.commit()
                return
        except errors.SerializationFailure:
            conn.rollback()
            if attempt == MAX_RETRIES - 1:
                raise
            # Exponential backoff
            import time
            time.sleep(0.1 * (2 ** attempt))
```

**Pessimistic locking** (FOR UPDATE):

```sql
-- Select rows for update, preventing concurrent modifications
BEGIN;
SELECT * FROM inventory
WHERE product_id = 42
FOR UPDATE;  -- Lock the inventory row

-- Check and update
UPDATE inventory SET quantity = quantity - 5 WHERE product_id = 42;
COMMIT;  -- Locks released
```

**Two-phase commit** for distributed transactions:

```sql
-- Phase 1: Prepare
PREPARE TRANSACTION 'txn_123';

-- Phase 2: Commit (or ROLLBACK PREPARED)
COMMIT PREPARED 'txn_123';
```

## TypeScript Parallel

```typescript
interface Transaction {
    id: string;
    queries: string[];
    state: "active" | "committed" | "rolled_back";
    snapshot: Map<string, any>;
}

class SimpleTransactionManager {
    private transactions: Map<string, Transaction> = new Map();

    begin(): string {
        const id = crypto.randomUUID();
        this.transactions.set(id, {
            id,
            queries: [],
            state: "active",
            snapshot: new Map()
        });
        return id;
    }

    commit(txnId: string): void {
        const txn = this.transactions.get(txnId);
        if (!txn || txn.state !== "active") throw new Error("Invalid transaction");
        txn.state = "committed";
        // Apply changes to database
        console.log(`Transaction ${txnId} committed`);
    }

    rollback(txnId: string): void {
        const txn = this.transactions.get(txnId);
        if (!txn || txn.state !== "active") throw new Error("Invalid transaction");
        txn.state = "rolled_back";
        // Discard changes
        console.log(`Transaction ${txnId} rolled back`);
    }

    // Deadlock detection (simplified)
    detectDeadlock(): string[] {
        // Cycle detection in lock-wait graph
        return [];
    }
}
```

## Summary

- ACID: Atomicity (all or nothing), Consistency (invariants preserved), Isolation (concurrent independence), Durability (survives crashes)
- BEGIN starts a transaction; COMMIT makes changes permanent; ROLLBACK undoes them
- SAVEPOINT enables partial rollback within a transaction
- Read Committed (default) sees only committed data; each query sees latest committed version
- Repeatable Read uses snapshot isolation; same query returns same results
- Serializable is strictest; detects and aborts serialization anomalies
- Dirty reads, non-repeatable reads, phantom reads are concurrency phenomena
- FOR UPDATE locks rows exclusively; FOR SHARE allows concurrent reads
- Deadlocks occur when transactions wait for each other's locks
- Optimistic locking uses version columns; pessimistic locking uses row locks

## Practical Takeaways

| Scenario | Use | Avoid |
|----------|-----|-------|
| Financial transfer | Serializable with retry logic | Read Committed (inconsistent reads) |
| Inventory management | SELECT FOR UPDATE then UPDATE | UPDATE without lock (lost updates) |
| Audit logging | Separate transaction or autonomous | Including in main transaction (delay) |
| Batch processing | Savepoints for partial rollback | Single large transaction (lock duration) |
| High-read dashboard | Read Committed or snapshot replication | Serializable (reduced concurrency) |
| Report generation | Repeatable Read (consistent snapshot) | READ COMMITTED (changing data) |
| Optimistic updates | Version column + retry | Long-held row locks |
| Cross-database ops | Two-phase commit or saga pattern | Distributed transactions without preparation |

## Interview Q&A

<details class="tp-qa-card" data-qid="sql-s09-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: What does ACID stand for?</summary>
  <div class="tp-qa-answer"><p>Atomicity: transaction completes fully or not at all. Consistency: data remains valid per constraints. Isolation: concurrent transactions don't interfere. Durability: committed data survives failures. These guarantees ensure reliable transaction processing in relational databases.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s09-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: Read Committed vs Repeatable Read?</summary>
  <div class="tp-qa-answer"><p>Read Committed shows the latest committed data for each query (may see changes from other transactions). Repeatable Read shows a consistent snapshot from the first query; subsequent queries see the same data. Repeatable Read prevents non-repeatable reads but uses more storage for snapshots.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s09-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: What is a dirty read?</summary>
  <div class="tp-qa-answer"><p>A dirty read occurs when one transaction reads uncommitted changes from another transaction. If the other transaction rolls back, the first transaction has read invalid data. PostgreSQL prevents dirty reads at all isolation levels, even READ UNCOMMITTED.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s09-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: How does PostgreSQL handle deadlocks?</summary>
  <div class="tp-qa-answer"><p>PostgreSQL automatically detects deadlocks by checking wait-for graphs during lock acquisition. When a deadlock is found, it aborts one of the transactions (usually the one that detected it) with a deadlock detected error. The application should retry the aborted transaction.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s09-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: What does FOR UPDATE do?</summary>
  <div class="tp-qa-answer"><p>FOR UPDATE locks selected rows exclusively, preventing other transactions from modifying or locking them until the current transaction completes. It's used for pessimistic locking: "SELECT ... FOR UPDATE" followed by UPDATE ensures no other transaction changes the rows in between.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s09-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: Savepoint purpose?</summary>
  <div class="tp-qa-answer"><p>SAVEPOINT creates a named point within a transaction. ROLLBACK TO SAVEPOINT undoes changes after that point without aborting the entire transaction. RELEASE SAVEPOINT removes the savepoint. Useful for batch processing where some items may fail without discarding the entire batch.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s09-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: Serializable isolation level benefits?</summary>
  <div class="tp-qa-answer"><p>Serializable guarantees that concurrent transactions produce the same result as if they ran one after another. It prevents all phenomena (dirty reads, non-repeatable reads, phantoms, serialization anomalies). Trade-off: lower concurrency and possible serialization failures requiring retries.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s09-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: Optimistic vs pessimistic locking?</summary>
  <div class="tp-qa-answer"><p>Optimistic locking uses a version column; updates check if the version changed (optimistic). If so, retry. Best for low-contention scenarios. Pessimistic locks rows with FOR UPDATE (pessimistic). Best for high-contention or when conflicts are expensive. Optimistic is more scalable but requires retry logic.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s09-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: What is a phantom read?</summary>
  <div class="tp-qa-answer"><p>A phantom read occurs when a query returns different sets of rows within a transaction because another transaction inserted or deleted rows matching the WHERE condition. PostgreSQL's Repeatable Read prevents phantoms using snapshot isolation. In databases without snapshot isolation, only Serializable prevents phantoms.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="sql-s09-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: How does WAL ensure durability?</summary>
<div class="tp-qa-answer"><p>Write-Ahead Log (WAL) records changes before they are applied to data files. On COMMIT, the WAL record is flushed to disk (fsync). If the server crashes,.
on restart PostgreSQL replays WAL to restore committed transactions. This ensures durability without requiring data files to be flushed on every commit.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which command starts a transaction? a) START b) BEGIN c) INIT d) OPEN

<details class="tp-qa-card" data-qid="sql-s09-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) BEGIN starts a new transaction</strong></p></div></details>

**Q2**: Which isolation level prevents all anomalies? a) Read Committed b) Repeatable Read c) Serializable d) Read Uncommitted

<details class="tp-qa-card" data-qid="sql-s09-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Serializable prevents all anomalies</strong></p></div></details>

**Q3**: What does ROLLBACK TO SAVEPOINT do? a) ends transaction b) partially undoes c) creates checkpoint d) commits changes

<details class="tp-qa-card" data-qid="sql-s09-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) partially undoes changes to a savepoint without aborting the transaction</strong></p></div></details>

**Q4**: Which lock prevents all concurrent modifications? a) FOR SHARE b) FOR UPDATE c) FOR KEY SHARE d) ACCESS SHARE

<details class="tp-qa-card" data-qid="sql-s09-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) FOR UPDATE prevents other transactions from modifying the locked rows</strong></p></div></details>

**Q5**: What happens on deadlock detection? a) both continue b) one aborts c) deadlock ignored d) database restarts

<details class="tp-qa-card" data-qid="sql-s09-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) PostgreSQL aborts one transaction with a deadlock detected error</strong></p></div></details>

## Exercises

**Easy** — Write a transaction that transfers money between two accounts with proper COMMIT and error handling.

**Easy** — Use SAVEPOINT to insert multiple orders in a batch, rolling back only the failed ones.

**Medium** — Demonstrate the difference between READ COMMITTED and REPEATABLE READ isolation levels using two concurrent sessions in psql.

**Medium** — Implement optimistic locking for a product inventory system using a version column.

**Hard** — Write a retry wrapper (in Python or TypeScript) for SERIALIZABLE transactions that handles serialization failures with exponential backoff.

**Hard** — Create a deadlock scenario intentionally and resolve it by fixing lock ordering. Document both the problematic and fixed versions.

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
