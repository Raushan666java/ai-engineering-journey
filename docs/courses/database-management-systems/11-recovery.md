# Chapter 11 — Recovery

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) classify the types of failures that can affect a database; (2) describe the storage hierarchy and its implications for recovery; (3) explain log-based recovery using UNDO, REDO, and UNDO/REDO logging; (4) describe the role of checkpoints; (5) explain the ARIES recovery algorithm; and (6) describe backup and restore strategies.

## 11.1 Failure Classification

Database failures are classified into several categories. Transaction failures occur when a transaction cannot complete due to logical errors, such as division by zero or constraint violations, or system-induced aborts, such as deadlock resolution. System failures, also called soft crashes, occur when the database system stops functioning but the storage media remain intact. Power outages, operating system crashes, and DBMS software errors cause system failures. The contents of main memory are lost, but data on disk persists. Media failures, or hard crashes, occur when physical storage media are damaged. Disk head crashes, controller failures, and accidental data deletion are media failures. Natural disasters and physical site destruction constitute catastrophic failures. Recovery mechanisms must address each failure type appropriately.

## 11.2 Storage Hierarchy

The storage hierarchy in a database system spans three levels. Volatile storage, such as main memory and CPU cache, loses all contents when the system loses power. Access is extremely fast, but data is not persistent. Non-volatile storage, primarily magnetic disks and solid-state drives, retains data across power failures. Access is slower than main memory by several orders of magnitude. Stable storage is a theoretical construct in which data cannot be lost, approximated in practice by redundant RAID configurations and replication.

The fundamental observation underlying recovery is that data must be on non-volatile storage to survive system failures. However, operations on non-volatile storage are orders of magnitude slower than operations on volatile storage. The DBMS therefore maintains a buffer pool in main memory. Data items are read from disk into the buffer pool before being accessed. Modified data items are written back to disk periodically. If a system failure occurs before modified data reaches disk, the database may be in an inconsistent state. Recovery algorithms manage this tension between performance and durability.

## 11.3 Log-Based Recovery

The log is a sequential record of all modifications to the database. Every log record describes a single write operation and contains the transaction identifier, the data item identifier, the old value (before-image), and the new value (after-image). Additional log records mark transaction start and commit or abort.

The write-ahead logging (WAL) protocol requires that log records be written to stable storage before the corresponding data modifications are written to disk. Specifically, the before-image of a modification must be written to the log before the data page is written to disk, and the commit log record must be written before the transaction is considered committed. WAL ensures that both UNDO and REDO information are available in the log when needed.

UNDO logging writes only before-images. During recovery, any transaction that did not commit is undone by restoring before-images. The undo operation is idempotent: applying the same before-image multiple times produces the same result. UNDO logging alone does not guarantee durability; if a committed transaction's data has not been written to disk before a crash, the update is lost.

REDO logging writes only after-images. During recovery, any transaction that committed is redone by applying after-images. REDO logging alone does not guarantee atomicity; if an uncommitted transaction wrote data to disk before crashing, REDO cannot undo it.

UNDO/REDO logging writes both before-images and after-images, providing comprehensive recovery. During recovery, uncommitted transactions are undone using before-images, and committed transactions whose data did not reach disk are redone using after-images. UNDO/REDO logging requires the buffer manager to implement either steal (allowing uncommitted data to be written to disk) and no-force (allowing committed data to remain in the buffer pool), which are precisely the policies that most DBMS implementations use for performance.

## 11.4 Checkpoints

A checkpoint is a synchronization point between the buffer pool and the log. During a checkpoint, the DBMS flushes all modified buffer pages to disk and writes a checkpoint record to the log. Checkpoints bound the amount of log that must be processed during recovery. Without checkpoints, recovery would require scanning the entire log from the beginning. Checkpoints also ensure that all data modifications up to a certain point are on stable storage, which means that the corresponding log records can be truncated or archived.

Fuzzy checkpointing allows the system to continue processing transactions during the checkpoint operation. The checkpoint record identifies all active transactions and dirty buffer pages, but pages are written to disk asynchronously. After all dirty pages have been written, a checkpoint-end record is written to the log. Fuzzy checkpoints minimize disruption to normal processing.

## 11.5 ARIES

ARIES (Algorithm for Recovery and Isolation Exploiting Semantics) is the most widely used recovery algorithm in commercial database systems. It employs three passes during recovery. The analysis pass scans the log forward from the last checkpoint to determine the set of dirty pages and the set of active transactions at the time of the crash. The redo pass scans forward from the earliest dirty page identified during analysis and reapplies all logged updates, regardless of whether the originating transactions committed. The undo pass scans backward from the end of the log and undoes the updates of all transactions that were active at the time of the crash.

ARIES uses a data structure called the dirty page table (DPT) to track which buffer pages contain modifications that have not yet been written to disk. Each entry records the page ID and the log sequence number (LSN) of the first log record that dirtied the page. The transaction table records the state and last LSN of each active transaction. The page LSN is stored on each data page and records the LSN of the most recent log record for an update to that page.

The key principles of ARIES are write-ahead logging, repeating history during redo, and logging logical operations during undo. Repeating history ensures that after the redo pass, the state of the database reflects exactly the state at the time of the crash. Logging UNDO as a logical operation allows compensation log records to be themselves recoverable.

## 11.6 Shadow Paging

Shadow paging is an alternative recovery technique that does not require a log. The database is organized into fixed-size pages. A page table maps logical page numbers to physical disk addresses. When a transaction modifies a page, a new copy of that page is written to a new disk location, and the page table is updated to point to the new copy. The old page remains unchanged and is referred to as the shadow.

At transaction commit, the current page table becomes the active page table, and shadow pages are reclaimed. If a crash occurs before commit, the page table is discarded, and the system reverts to the shadow pages. Shadow paging eliminates the need for UNDO logging but requires a separate mechanism for REDO and may cause significant write overhead due to page-copy operations.

## 11.7 Backup and Restore Strategies

A backup is a copy of the database at a point in time. Full backups contain the entire database. Incremental backups contain only data that has changed since the last full backup. Differential backups contain only data that has changed since the most recent full backup.

The recovery point objective (RPO) is the maximum acceptable data loss measured in time. The recovery time objective (RTO) is the maximum acceptable time to restore service. These objectives guide the backup strategy. A typical strategy involves weekly full backups, daily differential backups, and continuous log archiving. High-availability systems may employ mirroring, replication, or standby databases to achieve RPOs of seconds and RTOs of minutes.

## 11.8 Buffer Management Policies

The buffer manager's replacement policy and write policy significantly affect recovery. The replacement policy determines which buffer page to evict when space is needed. Common policies include LRU (least recently used), CLOCK (an approximation of LRU), and DB2's sequential prefetch-aware policy. The choice of replacement policy affects the number of buffer misses and thus overall performance.

The steal policy determines whether a buffer manager can write uncommitted data to disk. A steal policy improves performance by allowing the buffer manager to evict dirty pages belonging to ongoing transactions. A no-steal policy simplifies recovery because uncommitted data is never on disk, but it may degrade performance severely because the buffer pool must hold all uncommitted data.

The force policy determines whether all pages modified by a transaction must be written to disk before the transaction commits. A force policy ensures durability without REDO logging but increases commit latency. A no-force policy allows committed data to remain in the buffer pool, improving response times but requiring REDO logging.

Most commercial systems implement steal and no-force policies because they provide the best overall performance. This combination also requires the most complex recovery algorithm, ARIES, which can handle uncommitted data on disk (undo needed) and committed data not on disk (redo needed).

## Summary

This chapter examined the recovery subsystem of a DBMS. After classifying failures, we described the storage hierarchy and the role of the log. UNDO, REDO, and UNDO/REDO logging strategies were presented, each with different trade-offs for performance and recovery capability. Checkpoints bound the amount of log that must be processed during recovery. The ARIES algorithm, the industry standard, was described in detail with its three-pass recovery procedure. Shadow paging offers a log-free alternative. Backup strategies must balance RPO, RTO, and storage costs. Buffer management policies, particularly the steal and force choices, determine the complexity of the required recovery mechanism.

## Exercises

### Review Questions

1. How does a system failure differ from a media failure?
2. What is the write-ahead logging protocol and why is it necessary?
3. What is the purpose of a checkpoint?
4. What are the three passes of ARIES and what does each accomplish?
5. Distinguish between incremental and differential backups.

### Application Problems

1. Given the following sequence of operations: T1: write(X, old=10, new=20); T2: write(Y, old=5, new=15); T1: commit; T2: write(Z, old=30, new=40); system crash. Assuming UNDO/REDO logging, trace the recovery process. Which transactions are redone? Which are undone?
2. Explain why the no-steal, force buffer management policy simplifies recovery but degrades performance.
3. Design a backup schedule for a financial database that requires a maximum data loss of 15 minutes and a maximum recovery time of 4 hours. Justify your choices.

### Challenge Problem

Implement a simplified version of the ARIES analysis pass in pseudocode or a programming language. The input should include the checkpoint record, the log records, and the dirty page table from the last checkpoint. The output should be the reconstructed dirty page table and transaction table at the time of the crash. Explain how your algorithm handles the case where a transaction is in the active state during the checkpoint but commits before the crash.
