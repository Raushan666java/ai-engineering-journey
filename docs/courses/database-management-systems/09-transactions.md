# Chapter 9: Transactions

## Learning Objectives

- Define a transaction and explain its necessity for data integrity
- Master the ACID properties: Atomicity, Consistency, Isolation, Durability
- Understand transaction states and the transaction lifecycle
- Classify schedules and determine serializability
- Use conflict serializability and view serializability
- Understand the role of the transaction manager and recovery manager

## Theory

![ACID, Transactions, Concurrency Control and Crash Recovery](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/database-management-systems/ch04-transactions-concurrency-recovery.png)

### 9.1 What Is a Transaction?

A **transaction** is a logical unit of work that accesses and possibly modifies the database. It is a sequence of operations (reads and writes) that forms a single logical unit.

Transactions address failures and concurrent access. Without transactions, a system crash in the middle of a multi-step operation can leave the database in an inconsistent state, and concurrent operations can interfere with each other in unexpected ways.

**Example:** A bank transfer

```
BEGIN TRANSACTION;
    SELECT balance INTO @bal FROM accounts WHERE account_id = 'A100';
    IF @bal >= 500 THEN
        UPDATE accounts SET balance = balance - 500 WHERE account_id = 'A100';
        UPDATE accounts SET balance = balance + 500 WHERE account_id = 'B200';
    END IF;
COMMIT;
```

This transfer must happen atomically — either both account updates happen or neither does.

### 9.2 ACID Properties

**Atomicity:** A transaction executes completely or not at all. If the system crashes after debiting A100 but before crediting B200, the DBMS must undo the debit (rollback).

**Consistency:** A transaction brings the database from one valid state to another valid state. All integrity constraints must be satisfied at the end of the transaction. The DBMS does not guarantee that intermediate states are consistent — that would be impractical.

**Isolation:** Concurrent transactions should not interfere with each other. Each transaction should execute as if it were the only transaction in the system. The DBMS achieves this through concurrency control (Chapter 10).

**Durability:** Once a transaction commits, its changes persist even if the system crashes immediately after. Committed data must be recoverable from non-volatile storage.

### 9.3 Transaction States

A transaction goes through defined states in its lifecycle:

```
                ┌──────────┐
                │  ACTIVE  │
                └────┬─────┘
                     │
           ┌─────────┴──────────┐
           │                    │
           ▼                    ▼
     ┌──────────┐         ┌──────────┐
     │PARTIALLY │         │  FAILED  │
     │ COMMITTED│         └────┬─────┘
     └────┬─────┘              │
          │                    │
          ▼                    ▼
     ┌──────────┐         ┌──────────┐
     │ COMMITTED│         │  ABORTED │
     └──────────┘         └──────────┘
```

- **ACTIVE:** Initial state. The transaction is executing.
- **PARTIALLY COMMITTED:** After the final statement executes. The transaction has completed its operations but changes may still be in memory (buffer).
- **COMMITTED:** All changes are safely written to permanent storage. The transaction cannot be undone.
- **FAILED:** The transaction cannot continue due to an error or crash.
- **ABORTED:** The transaction has been rolled back to undo any changes made.

### 9.4 Schedules

A **schedule** is a sequence of operations from one or more transactions, ordered by time. For example, with two transactions T1 and T2:

```
T1: READ(A), WRITE(A), READ(B), WRITE(B)
T2: READ(A), WRITE(A), READ(B), WRITE(B)
```

**Serial schedule:** Transactions execute one after another. Simple but limits concurrency.

```
Schedule S1 (serial):
T1: READ(A), WRITE(A), READ(B), WRITE(B)
T2:                              READ(A), WRITE(A), READ(B), WRITE(B)
```

**Interleaved schedule (concurrent):** Operations from different transactions can be interleaved. This improves throughput but risks inconsistency.

```
Schedule S2 (interleaved — could be problematic):
T1: READ(A), WRITE(A)
T2:             READ(A), WRITE(A), READ(B), WRITE(B)
T1:                           READ(B), WRITE(B)
```

**Complete schedule:** Contains commit or abort for every transaction.

### 9.5 Serializability

A schedule is **serializable** if it is equivalent to some serial schedule. Two schedules are **equivalent** if they produce the same result when executed.

Serializability is the criterion for correctness in concurrent execution. If a schedule is serializable, we can be confident that it maintains database consistency.

**Conflict Serializability:**

Two operations **conflict** if:
1. They belong to different transactions
2. They access the same data item
3. At least one is a write

**Conflict pairs:**
- READ(A) and WRITE(A): READ-WRITE conflict
- WRITE(A) and READ(A): WRITE-READ conflict
- WRITE(A) and WRITE(A): WRITE-WRITE conflict

Two schedules are **conflict-equivalent** if they order all conflicting operations in the same way.

A schedule is **conflict-serializable** if it is conflict-equivalent to a serial schedule.

**Testing with Precedence Graph:**
1. Create a directed graph where each transaction is a node
2. For each conflict between operations in Tᵢ and Tⱼ, add an edge Tᵢ → Tⱼ
3. If the graph has a cycle, the schedule is NOT conflict-serializable
4. If the graph is acyclic, it IS conflict-serializable

**Example:**
```
T1: READ(A), WRITE(A), READ(B), WRITE(B)
T2:           WRITE(A)                    , WRITE(B)
```

Conflicts:
- T1 WRITE(A) conflicts with T2 WRITE(A) → edge T1 → T2 (T1 writes A before T2)
- T1 READ(A) conflicts with T2 WRITE(A) → edge T1 → T2

Precedence graph: T1 → T2 (no cycle) → Conflict-serializable.

**View Serializability:**

A schedule is **view-serializable** if:
1. For each read of a data item, the transaction that wrote it is the same as in some serial schedule
2. The final write of each item is the same as in some serial schedule

View serializability is broader than conflict serializability: every conflict-serializable schedule is view-serializable, but not vice versa.

**Blind writes** (WRITE without READ) can create view-serializable schedules that are not conflict-serializable.

### 9.6 Recoverable and Cascadeless Schedules

**Recoverable schedule:** If a transaction Tⱼ reads data written by Tᵢ, then Tᵢ's commit must appear before Tⱼ's commit. This ensures Tⱼ can be rolled back if Tᵢ aborts.

**Cascadeless schedule:** A transaction only reads data written by transactions that have already committed. This prevents cascading rollbacks.

**Cascading rollback:** If T₁ writes A, then T₂ reads A and writes B, then T₃ reads B, and T₁ aborts — all three must be rolled back. This is expensive and undesirable.

### 9.7 SQL Transaction Control

```sql
-- Start a transaction
BEGIN TRANSACTION;
-- or
BEGIN;
-- or
START TRANSACTION;

-- Savepoint (sub-transaction)
BEGIN;
INSERT INTO log VALUES ('Step 1');
SAVEPOINT sp1;
INSERT INTO log VALUES ('Step 2 that might fail');
ROLLBACK TO SAVEPOINT sp1;  -- Undo step 2, keep step 1
INSERT INTO log VALUES ('Step 3');
COMMIT;

-- Set isolation level (Chapter 10 detail)
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

-- Complete transaction
COMMIT;
-- or abort
ROLLBACK;

-- Auto-commit mode (default in most DBMS)
-- Each statement is its own transaction
-- Turn off:
SET autocommit = OFF;
```

### 9.8 Isolation Levels in SQL

SQL standard defines four isolation levels that trade consistency for performance:

| Isolation Level | Dirty Read | Non-repeatable Read | Phantom Read |
|----------------|------------|-------------------|--------------|
| READ UNCOMMITTED | Possible | Possible | Possible |
| READ COMMITTED | Prevented | Possible | Possible |
| REPEATABLE READ | Prevented | Prevented | Possible |
| SERIALIZABLE | Prevented | Prevented | Prevented |

**Dirty Read:** Reading uncommitted data from another transaction. If that transaction aborts, the read is invalid.

**Non-repeatable Read:** Same query returns different results within a transaction because another transaction modified and committed data.

**Phantom Read:** Same query returns different rows because another transaction inserted or deleted data matching the WHERE clause.

```sql
-- Set isolation level for a transaction
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
BEGIN;
SELECT balance FROM accounts WHERE id = 1;  -- First read
-- ... other transaction might modify balance here ...
SELECT balance FROM accounts WHERE id = 1;  -- Could differ!
COMMIT;

-- Serializable (most strict, slowest)
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
BEGIN;
SELECT * FROM orders WHERE status = 'pending';
-- ... no other transaction can modify pending orders ...
SELECT * FROM orders WHERE status = 'pending';  -- Guaranteed same
COMMIT;
```

### 9.9 Transactions in Practice

**Optimistic vs. Pessimistic Approaches:**
- **Pessimistic:** Assume conflicts will happen. Lock data preemptively.
- **Optimistic:** Assume conflicts are rare. Check for conflicts at commit time.

**Retry Logic:** Applications should be prepared to retry transactions that fail due to serialization errors:

```python
# Pseudo-code for application-level retry
max_retries = 3
for attempt in range(max_retries):
    try:
        db.execute("BEGIN")
        db.execute("UPDATE accounts SET balance = balance - 500 WHERE id = 1")
        db.execute("UPDATE accounts SET balance = balance + 500 WHERE id = 2")
        db.execute("COMMIT")
        break
    except SerializationError:
        db.execute("ROLLBACK")
        if attempt == max_retries - 1:
            raise
        # Exponential backoff
        time.sleep(0.1 * (2 ** attempt))
```

## Examples

**Example 9.1: Testing Serializability**

Schedule S:
```
T1: READ(A), WRITE(A)
T2:           READ(A), WRITE(A), READ(B), WRITE(B)
T3:                     READ(B)
```

Identify conflicts:
1. T1 WRITE(A) with T2 READ(A): T1 → T2 (T1 writes before T2 reads)
2. T2 WRITE(A) with T1 READ(A): T1 → T2 (T1 reads A, then T2 writes A — wait, T1 READ(A) comes before T2 WRITE(A), so T1 → T2)
3. T2 WRITE(B) with T3 READ(B): T2 → T3 (T2 writes B before T3 reads B)

Edges: T1 → T2, T2 → T3
No cycle → Conflict-serializable.

**Example 9.2: Non-Serializable Schedule**

```
T1: READ(A), WRITE(B)
T2: READ(B), WRITE(A)
```

Conflicts:
- T1 WRITE(B) conflicts with T2 READ(B): T1 → T2
- T2 WRITE(A) conflicts with T1 READ(A): T2 → T1

Edges: T1 → T2 and T2 → T1 (CYCLE!). This schedule is NOT conflict-serializable.

## Summary

- A transaction is a logical unit of work with ACID properties.
- Atomicity ensures all-or-nothing execution. Consistency preserves database validity. Isolation prevents interference. Durability ensures committed changes persist.
- Transactions go through states: Active → Partially Committed → Committed (or Failed → Aborted).
- Schedules order operations from concurrent transactions.
- Conflict serializability is checked via precedence graphs (acyclic = serializable).
- Recoverable and cascadeless schedules prevent cascading rollbacks.
- SQL provides four isolation levels: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE.

## Exercises

### Basic

1. Define ACID. Explain each property with a banking example.

2. What is the difference between COMMIT and ROLLBACK? When would each be used?

3. List the four SQL isolation levels and the anomaly each prevents (or allows).

4. Draw the precedence graph and determine serializability for:
```
T1: READ(A), WRITE(A), READ(B)
T2: WRITE(A), READ(B), WRITE(B)
```

### Intermediate

5. Given the schedule:
```
T1: WRITE(A), READ(B)
T2: READ(A), WRITE(B)
T3: WRITE(B), READ(A), READ(B)
```
Draw the precedence graph and determine if the schedule is conflict-serializable.

6. Explain the difference between conflict serializability and view serializability. Provide a schedule that is view-serializable but not conflict-serializable.

7. What is a cascading rollback? Why is it undesirable? Design a schedule where a cascading rollback occurs.

8. Write a SQL transaction that transfers money between two bank accounts. Include error handling (rollback on insufficient funds).

### Advanced

9. For the following schedule, determine:
   a) Is it conflict-serializable?
   b) Is it recoverable?
   c) Is it cascadeless?
   
   Justify each answer.
```
T1: READ(A), WRITE(A)
T2:           READ(A), WRITE(A)
T3:                    READ(A), WRITE(A)
```

10. Implement a booking system transaction for a flight reservation that:
    - Checks seat availability
    - Reserves the seat (decrements available count)
    - Creates a booking record
    - Creates a payment record
    - All or nothing
    
    Include isolation level selection and explain your choice.

11. Research the concept of "snapshot isolation" (used in PostgreSQL and Oracle). How does it differ from the four standard SQL isolation levels? What anomaly does it prevent? What anomaly (write skew) can still occur?
