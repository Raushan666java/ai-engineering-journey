# Chapter 11: Recovery System

## Learning Objectives

- Classify types of database failures and their causes
- Understand the role of the log in database recovery
- Implement log-based recovery with undo and redo
- Explain checkpointing and its purpose
- Describe the ARIES recovery algorithm
- Understand steal/no-steal and force/no-force buffer policies

## Theory

### 11.1 Types of Failures

Database systems face various failure scenarios, each requiring different recovery strategies:

**Transaction Failures:** A transaction cannot complete due to:
- Logical errors (division by zero, constraint violation, deadlock victim)
- System errors (deadlock, resource limit exceeded)

**System Failures (Soft Crashes):** The DBMS, operating system, or hardware crashes, but non-volatile storage is intact. The contents of volatile memory (buffers) are lost. This is the most common recovery scenario.

**Media Failures (Hard Crashes):** The storage device fails. Data on disk is partially or fully lost. Requires recovery from backups.

**Natural Disasters:** Fire, flood, earthquake. Requires geographically distributed backups.

**Human Error:** Accidental DROP TABLE, incorrect UPDATE without WHERE clause, or malicious data destruction.

### 11.2 Storage Hierarchy

- **Volatile Storage (RAM, CPU cache):** Fast but loses data on crash. Used for buffers and intermediate results.
- **Non-Volatile Storage (SSD, HDD):** Persistent. Used for the database itself, logs, and backups.
- **Stable Storage:** Fully replicated non-volatile storage (RAID, remote mirroring). Survives individual device failures.

### 11.3 Buffer Management Policies

Four policy combinations determine when pages are written to disk:

**Force vs. No-Force:**
- **Force:** All modifications are written to disk BEFORE the transaction commits. Simple recovery (no redo needed), but poor performance (increased I/O).
- **No-Force:** Modifications may remain in the buffer after commit. Better performance but requires redo during recovery (committed writes might not have reached disk).

**Steal vs. No-Steal:**
- **Steal:** Dirty pages (modified but uncommitted) can be written to disk before the transaction commits. Requires undo during recovery.
- **No-Steal:** Dirty pages stay in buffer until commit. No undo needed, but the buffer must be large enough.

**Common Combinations:**
| Policy | Recovery Needs | Performance |
|--------|---------------|-------------|
| Force/No-Steal | Undo only (no redo) | Poor (always flush, no early eviction) |
| No-Force/Steal | Undo AND redo (most DBMS use this) | Best performance |

Most commercial DBMS (Oracle, PostgreSQL, SQL Server) use **STEAL/NO-FORCE** with ARIES-style recovery.

### 11.4 The Write-Ahead Log (WAL)

The foundation of all modern recovery. **Write-Ahead Logging** requires:

1. Every log record is written to stable storage BEFORE the corresponding data page is written to disk
2. A transaction's COMMIT record is written to stable storage BEFORE the transaction is reported as committed

**Log Record Structure:**
```
<LSN, TransactionID, PageID, RedoInfo, UndoInfo, PrevLSN>
```

**LSN (Log Sequence Number):** Monotonically increasing number that identifies each log record. Typically the byte offset in the log file.

**PrevLSN:** Pointer to the previous log record of the same transaction, forming a linked list for each transaction.

**Types of Log Records:**

```
<T1, BEGIN>
<T1, UPDATE, Table=Accounts, Row=123, OldValue=1000, NewValue=500>
<T1, COMMIT>
<T2, BEGIN>
<T2, UPDATE, Table=Accounts, Row=456, OldValue=2000, NewValue=2500>
<T2, ABORT>
```

**Physical vs. Logical Logging:**
- **Physical:** Stores the exact bytes changed (page ID, offset, before/after image). Accurate but more data.
- **Logical:** Stores the operation (e.g., "INSERT INTO accounts VALUES (1, 500)"). Compact but complex to undo.
- **Physiological:** Hybrid — physical at page level, logical within page. Used by most systems.

### 11.5 Log-Based Recovery Algorithms

**Undo:** Revert the effects of a failed transaction by restoring old values.

**Redo:** Re-apply the effects of a committed transaction whose changes may not have reached disk.

**Recovery After System Crash:**

```
1. Analyze Phase: Read the log to determine:
   - Which transactions had committed before the crash (REDO set)
   - Which transactions were active at the time of the crash (UNDO set)
   - The location (LSN) of dirty pages in the buffer

2. Redo Phase: Reapply all changes from all transactions (both committed and uncommitted):
   - Start from the earliest LSN that could have dirty pages
   - Process log records forward, reapplying updates
   - This brings the database to the state at the time of crash

3. Undo Phase: Roll back all uncommitted transactions:
   - Process log records backward for each transaction in the UNDO set
   - Restore old values using the undo information in each log record
   - Write CLRs (Compensation Log Records) to track undo progress
```

### 11.6 Checkpointing

A checkpoint synchronizes the database state with the log. After a checkpoint, certain dirty pages are guaranteed to be on disk, reducing the amount of work needed during recovery.

**Types of Checkpoints:**

**Quiescent Checkpoint (simple, old-style):**
1. Stop accepting new transactions
2. Wait for all active transactions to complete
3. Flush all dirty pages to disk
4. Write a checkpoint record to the log
5. Resume accepting transactions

Problem: Database is unavailable during checkpointing.

**Fuzzy Checkpoint (used in modern systems):**
1. Write a BEGIN_CHECKPOINT record
2. Record the current transaction table and dirty page table
3. Flush dirty pages to disk gradually (in background)
4. Write an END_CHECKPOINT record

The database remains fully operational during fuzzy checkpoints.

**Action Consistent Checkpoint:** Checkpoint at a point where no actions are in progress (simpler but still requires coordination).

### 11.7 The ARIES Algorithm

ARIES (Algorithm for Recovery and Isolation Exploiting Semantics) is the most widely used recovery algorithm, developed at IBM. It is used by IBM DB2, Microsoft SQL Server, and influences many others.

**Three Principles of ARIES:**
1. **Write-Ahead Logging:** Log records precede data writes
2. **Repeating History During Redo:** Re-process all operations from the point of the last checkpoint
3. **Logging During Undo:** Track undo progress with Compensation Log Records (CLRs) to ensure idempotent recovery

**ARIES Data Structures:**

**Transaction Table:** Tracks the state of each active transaction:
- Transaction ID
- Status (Running, Preparing, Committed, Aborted)
- Last LSN (the LSN of the most recent log record for this transaction)

**Dirty Page Table (DPT):** Tracks pages modified in the buffer:
- Page ID
- Recovery LSN (the LSN of the first log record that caused this page to become dirty)

**ARIES Recovery Phases (in detail):**

```
Phase 1 — Analysis:
  - Start from the most recent BEGIN_CHECKPOINT record
  - Scan log forward to build:
    - Transaction table (active transactions at crash)
    - Dirty page table (pages that may not be on disk)
  - Determine the REDO LSN (the earliest LSN in the dirty page table)

Phase 2 — Redo:
  - Start from the REDO LSN
  - Scan log forward to the end
  - For each update log record:
    - If the page is dirty AND the page LSN < log LSN: redo the change
    - Otherwise: skip (page already reflects this change)
  - Write the REDO END record

Phase 3 — Undo:
  - Process backward from the end of the log
  - For each active transaction found during analysis:
    - Read log records backward
    - Restore old values using UndoInfo
    - Write a Compensation Log Record (CLR) for each undo action
    - CLRs have the format: <CLR, TransactionID, UndoNextLSN, PageID, RedoInfo>
    - UndoNextLSN points to the next record to undo
  - Continue until all active transactions are fully undone
  - Write ABORT END records
```

**Why ARIES is Idempotent:** If the system crashes again during recovery, ARIES starts over. The CLRs ensure that already-undone operations are not redone, and the redo phase correctly handles pages that were already brought to the correct state.

### 11.8 Media Recovery

For media failures (disk failure), recovery from backups is needed:

```sql
-- Full backup
pg_dump database_name > backup.sql        -- Logical backup (PostgreSQL)
pg_basebackup -D /backup/location          -- Physical backup

-- Point-in-time recovery (PostgreSQL)
-- 1. Restore from base backup
-- 2. Apply WAL archives up to the desired point
-- 3. Start the server in recovery mode
```

**Backup Strategies:**
- **Full backup:** Complete copy of the database. Slow, large, but comprehensive.
- **Incremental backup:** Only data changed since last full or incremental backup. Faster, smaller.
- **Differential backup:** Only data changed since last full backup. Middle ground.
- **Continuous archiving:** Stream transaction logs to a remote location. Used for point-in-time recovery.

### 11.9 SQL Recovery Commands

```sql
-- Explicit transaction control
BEGIN;
UPDATE accounts SET balance = balance - 500 WHERE id = 1;
SAVEPOINT before_fee;
UPDATE accounts SET fee_applied = TRUE;
-- Oops, this was a mistake
ROLLBACK TO SAVEPOINT before_fee;
-- fee_applied change is undone, balance change is preserved
UPDATE accounts SET balance = balance - 10 WHERE id = 1;  -- Fee
COMMIT;

-- System-level recovery
-- PostgreSQL: Recovery settings in postgresql.conf
-- restore_command = 'cp /mnt/wal_archive/%f %p'
-- recovery_target_time = '2026-06-09 14:30:00'

-- MySQL: Binary log replay
-- mysqlbinlog mysql-bin.000001 | mysql -u root
```

### 11.10 Recovery in Distributed Systems

Distributed transactions require the **Two-Phase Commit (2PC)** protocol:

**Phase 1 — Prepare:**
1. Coordinator sends PREPARE to all participants
2. Each participant writes prepare log record
3. Each participant responds YES (ready) or NO (abort)

**Phase 2 — Commit/Abort:**
1. If ALL responded YES: Coordinator writes COMMIT log record, sends COMMIT to all
2. If ANY responded NO: Coordinator writes ABORT log record, sends ABORT to all
3. Participants write the final log record and acknowledge

2PC ensures all participants agree on the outcome, even with failures. The **Three-Phase Commit (3PC)** protocol adds a pre-commit phase to avoid blocking under certain failure scenarios.

## Examples

**Example 11.1: Log-Based Recovery Trace**

Consider a simple database with account balances. Initial state: A=100, B=200.

Transactions:
```
T1: A = A - 50  (A = 50)
T1: B = B + 50  (B = 250)
T1: COMMIT
T2: A = A + 20  (A = 70)
--- CRASH ---
```

Log (simplified):
```
LSN 1: <T1, BEGIN>
LSN 2: <T1, UPDATE, Page=A, Old=100, New=50>
LSN 3: <T1, UPDATE, Page=B, Old=200, New=250>
LSN 4: <T1, COMMIT>
LSN 5: <T2, BEGIN>
LSN 6: <T2, UPDATE, Page=A, Old=50, New=70>
--- CRASH ---
```

Analysis Phase:
- Transaction Table: T1 committed, T2 active → UNDO set = {T2}, REDO set = {T1, T2}
- Dirty Page Table: Page A (recovery LSN = 2), Page B (recovery LSN = 3)
- REDO LSN = 2

Redo Phase (from LSN 2):
- LSN 2: Redo: A = 50 (ensure A is 50)
- LSN 3: Redo: B = 250
- LSN 4: No action (commit — no data change)
- LSN 5: No action (begin — no data change)
- LSN 6: Redo: A = 70 (even though T2 will be undone — T2's changes are redone first)

Undo Phase (backward from crash):
- LSN 6: Undo: A = 50 (restore T2's change). Write CLR: <LSN 7: CLR, T2, UndoNext=5, Page=A, Old=70, New=50>
- LSN 5: No action needed (BEGIN)
- Write <T2, ABORT>

Final state: A = 50, B = 250. Correct!

## Summary

- Database failures are classified as transaction, system, media, or catastrophic.
- The buffer management policy (STEAL/NO-FORCE) determines whether undo and redo are needed.
- Write-Ahead Logging ensures log records precede data writes to disk.
- Checkpoints reduce recovery time by establishing safe restart points.
- ARIES (Analysis → Redo → Undo) is the dominant recovery algorithm.
- Compensation Log Records make recovery idempotent.
- Two-Phase Commit coordinates distributed transactions across multiple databases.
- Regular backups and continuous WAL archiving protect against media failures.

## Exercises

### Basic

1. List three types of database failures and give an example of each.

2. Explain the Write-Ahead Logging (WAL) protocol. Why is it essential for recovery?

3. What is the purpose of a checkpoint? How does a fuzzy checkpoint differ from a quiescent checkpoint?

4. What are the three phases of ARIES recovery? What does each phase accomplish?

### Intermediate

5. Consider the following log with a crash occurring at the indicated point:
```
LSN 1: <T1, BEGIN>
LSN 2: <T1, UPDATE, X, Old=10, New=20>
LSN 3: <T2, BEGIN>
LSN 4: <T1, UPDATE, Y, Old=5, New=15>
LSN 5: <T2, UPDATE, X, Old=20, New=30>
LSN 6: <T1, COMMIT>
LSN 7: <T2, UPDATE, Z, Old=100, New=200>
--- CRASH ---
```
Determine:
a) The redo set and undo set
b) The recovery LSN
c) The order of redo operations
d) The order of undo operations

6. Explain the difference between force/no-force and steal/no-steal buffer management policies. Which combination do most commercial databases use and why?

7. What is a Compensation Log Record (CLR) in ARIES? Why are CLRs important for idempotent recovery?

### Advanced

8. Design a recovery scheme for a database that stores bank transactions. The system uses STEAL/NO-FORCE buffering. Write the log records for the following sequence:
   - T1 begins
   - T1 debits $500 from Account 1 (balance was $1000)
   - T2 begins
   - T2 credits $300 to Account 2 (balance was $500)
   - T1 commits
   - T2 debits $200 from Account 1 (balance was $500)
   - CRASH
   
   Then walk through the ARIES recovery process step by step.

9. Compare and contrast the "redo" phase of ARIES with the recovery approach that would be needed for a FORCE/NO-STEAL policy. Which approach is more efficient during normal operation? Which is faster during recovery?

10. In distributed database recovery, the Two-Phase Commit protocol can leave participants in an uncertain ("in-doubt") state. Explain this problem and describe how a participant resolves in-doubt transactions after a failure. How does Three-Phase Commit improve upon 2PC?
