# Transaction Management

## Introduction to Transactions

A **Transaction** is a logical unit of work that must be either completed in its entirety or not done at all. It's a sequence of operations performed as a single logical unit of work.

## ACID Properties

### 1. Atomicity
- A transaction is treated as a single, indivisible unit
- Either all operations are performed or none
- If any operation fails, the entire transaction is rolled back
- Example: Bank transfer must either complete fully or not happen at all

### 2. Consistency
- A transaction brings the database from one consistent state to another
- All integrity constraints must be maintained
- Example: Total money before and after a transfer remains the same

### 3. Isolation
- Concurrent transactions should not affect each other
- Results of a transaction should be visible only after it completes
- Example: Two users updating the same account balance shouldn't interfere

### 4. Durability
- Once a transaction is committed, changes are permanent
- Changes survive system failures
- Example: Confirmed bank transfer remains even after system crash

## Transaction States

1. **Active**: Initial state; transaction is executing
2. **Partially Committed**: After final operation
3. **Failed**: Normal execution can't continue
4. **Aborted**: Transaction rolled back, database restored
5. **Committed**: Transaction completed successfully

## Transaction Control Commands

- **BEGIN TRANSACTION**: Marks the beginning of a transaction
- **COMMIT**: Saves all changes made by the transaction
- **ROLLBACK**: Undoes all changes made in the current transaction
- **SAVEPOINT**: Creates points within a transaction to which you can roll back
- **SET TRANSACTION**: Changes transaction characteristics

## Concurrency Control

Concurrency control ensures that correct results are generated for concurrent operations and that data integrity is maintained.

### Problems with Concurrent Transactions

#### 1. Lost Update Problem
- Two transactions read and update the same data
- One transaction's update is lost

#### 2. Dirty Read Problem
- Transaction reads data written by an uncommitted transaction
- If the second transaction rolls back, first transaction has invalid data

#### 3. Unrepeatable Read Problem
- Transaction reads same data twice but gets different values
- Another transaction modified data between reads

#### 4. Phantom Read Problem
- Transaction re-executes a query and gets different set of rows
- Another transaction inserted/deleted rows that match the query

## Concurrency Control Techniques

### 1. Lock-Based Protocols
- **Shared Lock (S)**: Multiple transactions can read data
- **Exclusive Lock (X)**: Only one transaction can write data
- **Lock Compatibility Matrix**:
  - S + S = Yes (compatible)
  - S + X = No (incompatible)
  - X + X = No (incompatible)

#### Types of Lock-Based Protocols
- **Two-Phase Locking (2PL)**:
  - Growing phase: acquire locks, no releases
  - Shrinking phase: release locks, no acquisitions
- **Strict 2PL**: Release all locks after commit/abort
- **Rigorous 2PL**: Only exclusive locks, released after commit/abort

### 2. Timestamp-Based Protocols
- Assign unique timestamp to each transaction
- Ensure older transactions (smaller timestamps) aren't affected by newer ones
- Read timestamp (RTS) and write timestamp (WTS) for each data item

### 3. Validation-Based Protocols (Optimistic)
- Assume transactions won't conflict
- Three phases:
  - Read phase: Read values, make local copies
  - Validation phase: Check for conflicts
  - Write phase: Make changes permanent if validation succeeds

### 4. Multiversion Concurrency Control (MVCC)
- Maintain multiple versions of data items
- Each write creates a new version
- Reads use appropriate version based on timestamp
- Used in PostgreSQL, Oracle, MySQL InnoDB

## Deadlock Handling

A **Deadlock** occurs when two or more transactions are waiting indefinitely for each other to release locks.

### Deadlock Prevention
- **Wait-Die**: Older transaction waits, younger aborts
- **Wound-Wait**: Older transaction forces younger to abort, younger waits
- **Timeout**: Abort transaction after waiting too long

### Deadlock Detection
- Construct and analyze wait-for graph
- Cycle in graph indicates deadlock
- Periodically check for cycles

### Deadlock Recovery
- Select victim transaction(s) to abort
- Rollback transactions to break deadlock
- Selection criteria: transaction age, progress, resources held

## References
1. [GeeksforGeeks - Transaction in DBMS](https://www.geeksforgeeks.org/transaction-in-dbms/)
2. [GeeksforGeeks - ACID Properties in DBMS](https://www.geeksforgeeks.org/acid-properties-in-dbms/)
3. [GeeksforGeeks - Concurrency Control in DBMS](https://www.geeksforgeeks.org/concurrency-control-in-dbms/)
4. [GeeksforGeeks - Deadlock in DBMS](https://www.geeksforgeeks.org/deadlock-in-dbms/)