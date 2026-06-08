# Module 9: Concurrency Control

## Concurrency Control Overview

### Purpose
- Manage simultaneous database access
- Maintain data consistency
- Maximize system throughput
- Ensure transaction isolation

### Challenges
- Multiple users accessing same data
- Read-write conflicts
- Write-write conflicts
- Maintaining ACID properties

## Lock-Based Protocols

### Two-Phase Locking (2PL)

#### Basic 2PL
- **Growing Phase**: Acquire locks, cannot release
- **Shrinking Phase**: Release locks, cannot acquire
- Ensures serializability

#### Conservative 2PL
- Acquire all locks before execution
- Prevents deadlocks
- May reduce concurrency

#### Strict 2PL
- Hold exclusive locks until commit/abort
- Prevents cascading rollbacks
- Most commonly used

#### Rigorous 2PL
- Hold all locks until commit/abort
- Simplifies recovery
- Reduces concurrency

### Lock Compatibility Matrix
```
        S    X
    S   ✓    ✗
    X   ✗    ✗
```

### Multiple Granularity Locking
- Intention locks on higher levels
- IS (Intention Shared)
- IX (Intention Exclusive)
- SIX (Shared + Intention Exclusive)

## Timestamp-Based Protocols

### Basic Timestamp Ordering
- Each transaction gets unique timestamp
- Older transactions have priority
- Read/Write timestamps for data items

### Rules
- If TS(Ti) < W-timestamp(Q), reject read
- If TS(Ti) < R-timestamp(Q), reject write
- Otherwise, allow operation

### Thomas' Write Rule
- Ignore outdated writes
- Improves concurrency
- May not be recoverable

## Validation-Based Protocols

### Optimistic Concurrency Control
- Assume conflicts are rare
- Three phases: Read, Validation, Write
- Validate before committing

### Validation Rules
1. All writes of Ti complete before Tj starts reading
2. Writes of Ti don't conflict with reads of Tj
3. Reads and writes of Ti complete before Tj starts

## Multiversion Concurrency Control (MVCC)

### Concept
- Keep multiple versions of data
- Readers don't block writers
- Writers don't block readers
- Used in PostgreSQL, Oracle

### Implementation
```sql
-- Each row has version information
CREATE TABLE accounts (
    id INT,
    balance DECIMAL(10,2),
    version_start TIMESTAMP,
    version_end TIMESTAMP
);
```

### Snapshot Isolation
- Each transaction sees consistent snapshot
- Prevents most anomalies
- May allow write skew

## Deadlock Handling

### Deadlock Prevention
- Order resources consistently
- Timeout mechanisms
- Conservative protocols

### Deadlock Detection
- Wait-for graph
- Cycle detection algorithms
- Periodic checking

### Deadlock Resolution
- Victim selection criteria:
  - Transaction age
  - Number of locks held
  - Work done so far

```sql
-- Deadlock detection query (MySQL)
SELECT 
    r.trx_id waiting_trx_id,
    r.trx_mysql_thread_id waiting_thread,
    r.trx_query waiting_query,
    b.trx_id blocking_trx_id,
    b.trx_mysql_thread_id blocking_thread,
    b.trx_query blocking_query
FROM information_schema.innodb_lock_waits w
INNER JOIN information_schema.innodb_trx b ON b.trx_id = w.blocking_trx_id
INNER JOIN information_schema.innodb_trx r ON r.trx_id = w.requesting_trx_id;
```

## Advanced Concurrency Techniques

### Lock Escalation
- Convert many small locks to fewer large locks
- Reduces lock overhead
- May reduce concurrency

### Lock Timeout
```sql
SET innodb_lock_wait_timeout = 50;
```

### Advisory Locks
```sql
-- Application-level locking
SELECT GET_LOCK('my_lock', 10);
SELECT RELEASE_LOCK('my_lock');
```

## Performance Considerations

### Lock Contention
- Hot spots in data
- Long-running transactions
- Inappropriate isolation levels

### Monitoring Tools
```sql
-- Check lock waits (MySQL)
SHOW ENGINE INNODB STATUS;

-- Lock information
SELECT * FROM performance_schema.data_locks;
SELECT * FROM performance_schema.data_lock_waits;
```

### Optimization Strategies
1. **Minimize transaction time**
2. **Access data in consistent order**
3. **Use appropriate isolation levels**
4. **Partition hot data**
5. **Consider read replicas**

## Practical Implementation

### Connection Pooling
```python
import mysql.connector.pooling

config = {
    'user': 'username',
    'password': 'password',
    'host': 'localhost',
    'database': 'testdb',
    'pool_name': 'mypool',
    'pool_size': 10
}

pool = mysql.connector.pooling.MySQLConnectionPool(**config)

def execute_transaction():
    conn = pool.get_connection()
    try:
        conn.start_transaction()
        cursor = conn.cursor()
        
        # Transaction operations
        cursor.execute("UPDATE accounts SET balance = balance - 100 WHERE id = 1")
        cursor.execute("UPDATE accounts SET balance = balance + 100 WHERE id = 2")
        
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise e
    finally:
        cursor.close()
        conn.close()
```

### Retry Logic for Deadlocks
```python
import time
import random

def execute_with_retry(func, max_retries=3):
    for attempt in range(max_retries):
        try:
            return func()
        except DeadlockError:
            if attempt == max_retries - 1:
                raise
            time.sleep(random.uniform(0.1, 0.5))
```

## Practical Exercises
1. Implement different locking protocols
2. Create deadlock scenarios and resolution
3. Test MVCC behavior
4. Measure concurrency performance

## Lab Assignment
Build a high-concurrency system:
- Online ticket booking
- Handle thousands of concurrent users
- Implement proper concurrency control
- Monitor and optimize performance

## Case Study: E-commerce Inventory
Design concurrency control for:
- Product inventory updates
- Order processing
- Payment handling
- Stock reservation

## Next Module
Module 10: Database Administration