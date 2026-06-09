# Chapter 9 — Transactions

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) define a transaction and enumerate the ACID properties; (2) describe the states through which a transaction passes; (3) classify schedules as serial or non-serial; (4) determine whether a schedule is conflict-serializable or view-serializable; (5) construct precedence graphs; and (6) distinguish among recoverable, cascadeless, and strict schedules.

## 9.1 Transaction Definition

A transaction is a logical unit of work that comprises one or more database operations, typically a combination of read and write operations. A transaction transforms the database from one consistent state to another, preserving all stated integrity constraints. In SQL, a transaction begins implicitly with the first executable SQL statement and terminates with an explicit COMMIT or ROLLBACK statement.

Transactions serve as the fundamental unit of atomicity and recovery in a database system. When a transaction commits, its effects are guaranteed to survive subsequent failures. When a transaction rolls back, any changes it made are undone, and the database returns to the state it was in before the transaction began.

## 9.2 ACID Properties

The ACID acronym captures four essential properties of database transactions.

Atomicity requires that a transaction be executed in its entirety or not at all. If a transaction is interrupted by a failure before completion, any partial effects must be undone. The DBMS recovery subsystem ensures atomicity through undo logging.

Consistency requires that a transaction preserve the consistency of the database. If the database is consistent before the transaction begins, it must be consistent after the transaction completes. Consistency is the responsibility of the application programmer, who must ensure that all integrity constraints are satisfied. The DBMS enforces certain classes of constraints, such as primary key and foreign key constraints, but the application is responsible for business-rule consistency.

Isolation requires that the execution of one transaction be isolated from the effects of concurrent transactions. Even though transactions execute concurrently, the final result must be the same as if the transactions executed serially in some order. The DBMS concurrency control subsystem provides isolation.

Durability requires that the effects of a committed transaction persist across failures. Once the DBMS confirms a commit, the changes are guaranteed to be present in the database even if the system crashes immediately afterward. The recovery subsystem ensures durability through redo logging.

## 9.3 Transaction States

A transaction progresses through a series of states during its lifetime. The active state is the initial state; the transaction remains in this state while executing its read and write operations. The partially committed state occurs after the final statement has been executed but before the commit has been confirmed. The committed state is reached when the transaction has completed successfully and all effects are durable. The failed state is entered when the transaction cannot proceed due to logical errors, system failures, or abort commands. The aborted state follows the rollback of a failed transaction, at which point the transaction may be restarted or terminated.

The transition diagram is: active to partially committed, partially committed to committed; active to failed, failed to aborted.

## 9.4 Schedules

A schedule is a sequence of operations from one or more transactions that preserves the order of operations within each individual transaction. A schedule of n transactions T1, T2, Tn is a permutation of the operations of the transactions such that for each transaction Ti, the operations of Ti appear in the order specified by Ti.

A serial schedule is a schedule in which the operations of each transaction are executed consecutively without interleaving. For n transactions, there are n factorial possible serial schedules, each potentially producing a different result.

A non-serial schedule interleaves operations from multiple transactions. The goal of concurrency control is to ensure that non-serial schedules are correct, meaning that they are equivalent to some serial schedule.

## 9.5 Serializability

Conflict serializability is the most widely used correctness criterion. Two operations conflict if they belong to different transactions, access the same data item, and at least one is a write. A schedule is conflict-serializable if it can be transformed into a serial schedule through a sequence of swaps of non-conflicting adjacent operations.

A precedence graph, also called a serialization graph, is used to test conflict serializability. For a schedule S, construct a directed graph where each transaction Ti is a node. Add an edge Ti rarr Tj if there exists a conflicting pair (operation of Ti) followed by (conflicting operation of Tj) where the operations access the same data item and one is a write. The schedule is conflict-serializable if and only if the precedence graph is acyclic.

View serializability is a weaker correctness criterion. Two schedules S and S-prime are view-equivalent if: for each data item, the initial read in S produces the same value as the initial read in S-prime; for each read operation, the transaction that performed the write that produced the value read is the same in both schedules; and the final write operations on each data item are performed by the same transaction in both schedules. A schedule is view-serializable if it is view-equivalent to some serial schedule.

All conflict-serializable schedules are view-serializable, but the converse is not true. View serializability is computationally expensive to test; the problem is NP-complete, so practical systems use conflict serializability.

## 9.6 Recoverability

A schedule is recoverable if no transaction Tj commits before a transaction Ti that wrote a data item that Tj read. In other words, if Tj reads a value written by Ti, Tj must commit after Ti commits. This prevents situations where Tj commits, Ti subsequently aborts, and Tj has read data that no longer exists.

A schedule is cascadeless if for every pair of transactions Ti and Tj such that Tj reads a data item previously written by Ti, the commit operation of Ti appears before the read operation of Tj. Cascadeless schedules avoid cascading rollbacks, where the abort of one transaction forces the abort of other transactions that read its uncommitted data.

A schedule is strict if transactions can neither read nor write a data item until the transaction that last wrote it has committed. The strictest recoverability condition simplifies recovery because in-place updates can be undone using before-images.

## 9.7 Transaction Isolation Levels

The SQL standard defines four transaction isolation levels that balance consistency guarantees against concurrency performance. Each isolation level prevents certain phenomena while permitting others. The three phenomena are dirty read, non-repeatable read, and phantom read.

A dirty read occurs when a transaction reads data written by a concurrent uncommitted transaction. If the concurrent transaction subsequently aborts, the first transaction has read data that never existed in the committed state.

A non-repeatable read occurs when a transaction reads a data item twice and obtains different values because another transaction committed an update between the two reads.

A phantom read occurs when a transaction executes the same query twice and obtains different sets of tuples because another transaction committed an insert or delete between the two executions.

The isolation levels are as follows. Read uncommitted permits dirty reads, non-repeatable reads, and phantom reads. It provides the highest concurrency but the weakest consistency. Read committed prevents dirty reads but permits non-repeatable and phantom reads. It is the default isolation level in many commercial databases. Repeatable read prevents dirty and non-repeatable reads but permits phantom reads. Serializable prevents all three phenomena and guarantees that concurrent executions produce the same result as some serial execution.

Higher isolation levels provide stronger consistency guarantees at the cost of reduced concurrency. The implementation mechanisms include locking, multiversion concurrency control, and predicate locking. The appropriate isolation level depends on the application's tolerance for inconsistency and its performance requirements.

## Summary

This chapter established the theoretical foundation for transaction processing. The ACID properties define the correctness guarantees that transactions provide. Serializability provides a precise criterion for determining whether a concurrent execution produces correct results. Precedence graphs offer a practical test for conflict serializability. Recoverability conditions ensure that transaction failures do not leave the database in an inconsistent state. Transaction isolation levels allow applications to balance consistency guarantees against concurrency performance.

## Exercises

### Review Questions

1. Why is atomicity important in database systems?
2. Distinguish between the partially committed and committed states.
3. What is a schedule, and why are schedules studied?
4. How is conflict serializability different from view serializability?
5. What is a cascading rollback, and how does a cascadeless schedule prevent it?

### Application Problems

1. Consider the following schedule: R1(A), W1(A), R2(A), W2(A), R1(B), W1(B), R2(B), W2(B), Commit1, Commit2. Construct the precedence graph and determine if the schedule is conflict-serializable.
2. Given transactions T1: R(A), W(A), R(B), W(B) and T2: R(A), W(A), R(B), W(B). Construct two distinct interleavings: one that is conflict-serializable and one that is not. Explain why.
3. A schedule S is given: R1(A), R2(A), W1(A), R1(B), W2(A), W1(B), Commit2, Commit1. Is S conflict-serializable? Is it recoverable? Is it cascadeless?

### Challenge Problem

Design a schedule of three transactions that is view-serializable but not conflict-serializable. Prove that the schedule is view-serializable by identifying the serial schedule to which it is view-equivalent. Then demonstrate that the precedence graph contains a cycle, confirming that it is not conflict-serializable. Explain the practical implications of this distinction for DBMS implementation.
