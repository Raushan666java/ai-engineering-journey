# Module 8: Transaction Management

## What is a Transaction?

### Definition
- A unit of work performed against a database
- Collection of operations that form a single logical unit
- Either all operations succeed or all fail

### Example Transaction
```sql
BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
COMMIT;
```

## ACID Properties

### 1. Atomicity
- All operations in transaction succeed or all fail
- No partial transactions
- "All or Nothing" principle

### 2. Consistency
- Database remains in valid state
- All constraints maintained
- Business rules preserved

### 3. Isolation
- Concurrent transactions don't interfere
- Each transaction sees consistent view
- Multiple isolation levels available

### 4. Durability
- Committed changes are permanent
- Survive system failures
- Changes written to persistent storage

## Transaction States

### 1. Active
- Transaction is executing
- Operations being performed

### 2. Partially Committed
- Final operation executed
- Not yet committed

### 3. Committed
- Transaction completed successfully
- Changes made permanent

### 4. Failed
- Transaction cannot proceed
- Must be aborted

### 5. Aborted
- Transaction rolled back
- Database restored to previous state

## Transaction Control Commands

### BEGIN/START TRANSACTION
```sql
BEGIN TRANSACTION;
-- or
START TRANSACTION;
```

### COMMIT
```sql
COMMIT;
-- Makes changes permanent
```

### ROLLBACK
```sql
ROLLBACK;
-- Undoes all changes in transaction
```

### SAVEPOINT
```sql
SAVEPOINT sp1;
-- Operations here
ROLLBACK TO sp1;
-- Partial rollback to savepoint
```

## Isolation Levels

### 1. Read Uncommitted
- Lowest isolation level
- Allows dirty reads
- Best performance, worst consistency

### 2. Read Committed
- Prevents dirty reads
- Allows non-repeatable reads
- Default in many systems

### 3. Repeatable Read
- Prevents dirty and non-repeatable reads
- Allows phantom reads
- Good balance of consistency and performance

### 4. Serializable
- Highest isolation level
- Prevents all read phenomena
- Best consistency, worst performance

```sql
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
```

## Concurrency Problems

### 1. Dirty Read
- Reading uncommitted changes
- Transaction A reads data modified by Transaction B (not committed)

### 2. Non-Repeatable Read
- Same query returns different results
- Data modified by another transaction between reads

### 3. Phantom Read
- New rows appear between reads
- Another transaction inserts matching rows

### 4. Lost Update
- Two transactions update same data
- One update overwrites the other

## Locking Mechanisms

### Lock Types

#### 1. Shared Lock (S-Lock)
- Multiple transactions can read
- No transaction can write
- Compatible with other shared locks

#### 2. Exclusive Lock (X-Lock)
- Only one transaction can access
- No other locks allowed
- Used for write operations

### Lock Granularity

#### 1. Database Level
- Entire database locked
- Rarely used

#### 2. Table Level
- Entire table locked
- Simple but low concurrency

#### 3. Row Level
- Individual rows locked
- High concurrency, more overhead

#### 4. Column Level
- Individual columns locked
- Highest granularity

### Deadlock
- Two or more transactions waiting for each other
- System must detect and resolve
- Usually by aborting one transaction

```sql
-- Transaction 1
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;

-- Transaction 2 (concurrent)
BEGIN;
UPDATE accounts SET balance = balance - 50 WHERE id = 2;
UPDATE accounts SET balance = balance + 50 WHERE id = 1;
COMMIT;
```

## Recovery Management

### Log-Based Recovery
- Write-Ahead Logging (WAL)
- All changes logged before writing to database
- Used for recovery after failures

### Checkpoint
- Point where all changes are written to disk
- Reduces recovery time
- System creates checkpoints periodically

### Recovery Types

#### 1. Immediate Update
- Changes written to database immediately
- Undo log needed for rollback

#### 2. Deferred Update
- Changes written only at commit
- Redo log needed for recovery

## Practical Examples

### Bank Transfer Transaction
```sql
DELIMITER //
CREATE PROCEDURE TransferMoney(
    IN from_account INT,
    IN to_account INT,
    IN amount DECIMAL(10,2)
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;
    
    START TRANSACTION;
    
    UPDATE accounts 
    SET balance = balance - amount 
    WHERE account_id = from_account AND balance >= amount;
    
    IF ROW_COUNT() = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Insufficient funds';
    END IF;
    
    UPDATE accounts 
    SET balance = balance + amount 
    WHERE account_id = to_account;
    
    COMMIT;
END //
DELIMITER ;
```

### Inventory Management
```sql
BEGIN TRANSACTION;

-- Check stock
SELECT quantity FROM inventory WHERE product_id = 123 FOR UPDATE;

-- Update inventory
UPDATE inventory 
SET quantity = quantity - 5 
WHERE product_id = 123 AND quantity >= 5;

-- Create order
INSERT INTO orders (customer_id, product_id, quantity) 
VALUES (456, 123, 5);

COMMIT;
```

## Practical Exercises
1. Implement a banking system with proper transactions
2. Test different isolation levels
3. Create scenarios that demonstrate concurrency problems
4. Implement deadlock detection and resolution

## Lab Assignment
Build a multi-user booking system:
- Handle concurrent seat reservations
- Implement proper locking
- Test transaction isolation
- Handle deadlock scenarios

## Next Module
Module 9: Concurrency Control