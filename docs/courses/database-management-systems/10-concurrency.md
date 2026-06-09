# Chapter 10 — Concurrency Control

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) describe lock-based concurrency control protocols including two-phase locking; (2) detect and resolve deadlock; (3) explain the timestamp-based ordering protocol; (4) describe the optimistic concurrency control protocol; and (5) explain multiversion concurrency control.

## 10.1 Lock-Based Protocols

A lock is a mechanism that prevents concurrent transactions from interfering with each other. The two fundamental lock modes are shared and exclusive. A shared lock, denoted S, grants read-only access to a data item. Multiple transactions may hold shared locks on the same data item simultaneously. An exclusive lock, denoted X, grants both read and write access. Only one transaction may hold an exclusive lock on a given data item at any time, and no shared locks may coexist.

Each transaction must request a lock in the appropriate mode before accessing a data item. After finishing the operation, the transaction releases the lock. The lock manager is a subsystem that maintains a lock table, grants lock requests, and detects conflicts. When a transaction requests a lock that conflicts with an existing lock held by another transaction, the requesting transaction is blocked until the conflicting lock is released.

Two-phase locking (2PL) is a protocol that ensures conflict serializability. Under 2PL, every transaction is divided into two phases. In the growing phase, the transaction may acquire locks but may not release any. In the shrinking phase, the transaction may release locks but may not acquire any. The point at which the transaction holds its maximum lock set is called the lock point.

Strict two-phase locking is a variant in which all exclusive locks are held until the transaction commits or aborts. This ensures that no other transaction can read or write uncommitted data, which simplifies recovery. Strict 2PL is the most commonly used protocol in commercial database systems.

Rigorous two-phase locking requires that all locks, both shared and exclusive, be held until commit or abort. This ensures that the order in which transactions commit is consistent with the serialization order, which simplifies both recovery and concurrency control.

## 10.2 Deadlock

Deadlock occurs when two or more transactions are each waiting for a lock held by another transaction in the set, forming a cycle of waiting. For example, transaction T1 holds a lock on item A and requests a lock on item B, while transaction T2 holds a lock on item B and requests a lock on item A.

Two principal strategies address deadlock. Deadlock prevention ensures that the system never enters a deadlock state. One prevention method grants all locks to a transaction at once, before execution begins. Another method preempts locks using transaction priorities: if an older transaction requests a lock held by a younger transaction, the younger transaction is aborted (wait-die scheme), or if an older transaction requests a lock held by a younger transaction, the older transaction waits (wound-wait scheme). In the wait-die scheme, if an older transaction requests a lock held by a younger one, the older waits; if a younger requests a lock held by an older, the younger is aborted. In the wound-wait scheme, if an older requests a lock held by a younger, the younger is preempted; if a younger requests a lock held by an older, the younger waits.

Deadlock detection allows deadlock to occur but detects and breaks it. The system maintains a wait-for graph whose nodes are transactions. An edge from Ti to Tj indicates that Ti is waiting for a lock held by Tj. A cycle in the wait-for graph indicates deadlock. When deadlock is detected, the DBMS selects a victim transaction to abort, releasing its locks. The choice of victim is typically based on the low-cost, not-youngest heuristic: abort the transaction with the fewest locks, fewest updates, or shortest remaining execution time.

## 10.3 Timestamp-Based Protocol

The timestamp-based concurrency control protocol assigns each transaction a unique timestamp when it begins, typically the system clock value or an incrementing counter. Each data item Q stores two timestamps: W-timestamp(Q), the timestamp of the most recent transaction that successfully executed write(Q), and R-timestamp(Q), the timestamp of the most recent transaction that successfully executed read(Q).

When a transaction Ti issues read(Q), the protocol compares the timestamp of Ti with W-timestamp(Q). If TS(Ti) less than W-timestamp(Q), the read is rejected and Ti is rolled back. Otherwise, the read is executed, and R-timestamp(Q) is set to max(R-timestamp(Q), TS(Ti)).

When Ti issues write(Q), the protocol checks both R-timestamp(Q) and W-timestamp(Q). If TS(Ti) less than R-timestamp(Q), the write is rejected because a younger transaction has already read the value that Ti would overwrite. If TS(Ti) less than W-timestamp(Q), the write is rejected because a younger transaction has already written Q. Otherwise, the write is executed.

The timestamp protocol ensures conflict serializability. The serialization order is the order of the timestamps. However, the protocol may cause cascading rollbacks because transactions may read data written by aborted transactions. Thomas's write rule provides an optimization: if TS(Ti) less than W-timestamp(Q), the write is ignored rather than rejected, because a younger write has already superseded it.

## 10.4 Validation-Based Protocol (Optimistic)

The validation, or optimistic, protocol assumes that conflicts are rare and allows transactions to proceed without locks. The execution is divided into three phases. In the read phase, the transaction reads data items into local workspace and performs all writes in the workspace without updating the actual database. In the validation phase, the system checks whether the transaction's updates conflict with other concurrent transactions. In the write phase, if validation succeeds, the updates are applied to the database.

The validation test uses timestamps assigned at the beginning of the validation phase. The system checks that for each pair of concurrent transactions, the write sets do not intersect, ensuring that no conflicts exist. The optimistic protocol is efficient when conflicts are rare but degrades significantly when conflicts are frequent.

## 10.5 Multiversion Concurrency Control

Multiversion concurrency control (MVCC) maintains multiple versions of each data item. When a transaction writes a data item, the DBMS creates a new version rather than overwriting the existing one. Readers can access older versions without being blocked by writers, and writers are not blocked by readers.

Each version is tagged with the timestamp of the transaction that created it. A read operation on a data item returns the version with the highest timestamp less than or equal to the reading transaction's timestamp. This guarantees that every read sees a consistent snapshot of the database as of the transaction's start time.

MVCC is the dominant concurrency control mechanism in modern database systems, including Oracle, PostgreSQL, MySQL (InnoDB), and Microsoft SQL Server. The primary advantage is that read operations never block write operations, and write operations never block read operations. The principal disadvantage is the storage overhead for maintaining multiple versions and the need for periodic garbage collection to reclaim space from old versions.

Snapshot isolation is a common MVCC-based isolation level. It guarantees that all reads in a transaction see a consistent snapshot of the database as of the start of the transaction. However, snapshot isolation does not guarantee serializability; the write-skew anomaly can occur.

## 10.6 Granularity of Locks

The granularity of a lock determines the size of the data item being locked. The spectrum includes database-level locks, table-level locks, page-level locks, tuple-level locks, and attribute-level locks. Coarse granularity reduces lock management overhead but increases the probability of conflicts. Fine granularity allows more concurrency but increases lock management cost.

Multiple granularity locking uses a hierarchy of lock granularities. To lock a node in the hierarchy, a transaction must first acquire an intention lock on its ancestors. Intention locks indicate that the transaction intends to acquire a finer-granularity lock at a lower level. The intention shared (IS) lock indicates that a shared lock will be acquired on a descendant. The intention exclusive (IX) lock indicates that an exclusive lock will be acquired on a descendant. The shared intention exclusive (SIX) lock indicates that the transaction holds a shared lock on the node and intends to acquire exclusive locks on some descendants.

The multiple granularity protocol allows transactions to lock at the appropriate granularity for their operation. A transaction scanning the entire relation locks the table, avoiding per-tuple lock overhead. A transaction accessing a single tuple locks only that tuple, allowing other transactions to access other tuples concurrently. The protocol is used by many commercial database systems.

## 10.7 Concurrency Control in Practice

Modern database systems employ combinations of the techniques described in this chapter. Oracle uses MVCC with snapshot isolation, providing read-consistent views without read locks. PostgreSQL uses MVCC with a variant of snapshot isolation and supports serializable isolation through serializable snapshot isolation (SSI), which detects serialization anomalies using a conflict graph. MySQL's InnoDB engine uses MVCC with next-key locking to prevent phantom reads. Microsoft SQL Server supports multiple isolation levels, using locking for the lower levels and an optimistic concurrency control variant for snapshot isolation.

The trend in modern systems is toward MVCC with snapshot isolation as the default. This provides good concurrency for typical transactional workloads. Serializable isolation is available for applications that require the strongest guarantees, though it imposes higher overhead.

## Summary

This chapter surveyed the principal concurrency control mechanisms. Lock-based protocols, particularly strict two-phase locking, are the most widely deployed. Deadlock must be managed through prevention or detection. Timestamp protocols offer an alternative without locks. Optimistic protocols suit low-conflict environments. Multiversion concurrency control, the dominant modern approach, provides excellent read performance at the cost of storage overhead. Multiple granularity locking allows appropriate lock-size selection. Commercial systems implement hybrid approaches that combine these techniques.

## Exercises

### Review Questions

1. What is the difference between shared and exclusive locks?
2. Why does strict two-phase locking simplify recovery?
3. Contrast deadlock prevention with deadlock detection.
4. Under what conditions does the timestamp protocol reject a write operation?
5. How does MVCC allow reads and writes to proceed without blocking each other?

### Application Problems

1. Consider two transactions T1: R(A), W(A), R(B), W(B) and T2: R(A), W(A), R(B), W(B). Show a schedule using strict two-phase locking that avoids deadlock. Show another schedule using two-phase locking that results in deadlock.
2. Using the timestamp protocol, determine whether each of the following operations is accepted or rejected given the current timestamps. Current state: W-timestamp(A)=10, R-timestamp(A)=15, W-timestamp(B)=8, R-timestamp(B)=12. Transaction T6 (timestamp=6) issues write(A). Transaction T14 (timestamp=14) issues read(B). Transaction T9 (timestamp=9) issues write(B).
3. Explain why snapshot isolation can produce the write-skew anomaly. Construct a concrete example with two concurrent transactions.

### Challenge Problem

Implement a simulation of the strict two-phase locking protocol with deadlock detection in pseudocode or a programming language of your choice. The simulation should accept as input a set of transactions with their read and write sets, execute them using a lock manager that detects deadlocks via wait-for graph cycles, and output a conflict-serializable schedule. Handle the case where deadlock requires victim selection.
