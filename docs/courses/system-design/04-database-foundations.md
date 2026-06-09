# Chapter 4: Database Foundations: Replication and Indexing

---

## Learning Objectives

- Explain the internal structure of B-Tree and LSM-Tree indexes
- Contrast Single-Leader, Multi-Leader, and Leaderless replication topologies
- Identify the trade-offs between Synchronous and Asynchronous replication
- Describe the phenomenon of Replication Lag and its impact on user experience

---

## Theory

### The Role of Indexing
Indexes are auxiliary data structures that improve the speed of data retrieval operations at the cost of slower writes and increased storage.
- **B-Trees:** The standard for most relational databases. They store data in sorted pages and allow for $O(\log n)$ search, insertion, and deletion. They are optimized for read-heavy workloads.
- **LSM-Trees (Log-Structured Merge-Trees):** Used by NoSQL databases like Cassandra. They turn random writes into sequential writes by buffering them in memory (MemTable) and flushing them to disk (SSTables). They are optimized for write-heavy workloads.

### Data Replication
Replication involves keeping a copy of the same data on multiple machines connected via a network.
- **Single-Leader Replication:** One node (leader) handles all writes. Followers replicate the data and serve reads. This is the simplest to manage.
- **Multi-Leader Replication:** Multiple nodes can accept writes. This is useful for multi-datacenter setups but introduces complex conflict resolution (e.g., two people updating the same profile at the same time).
- **Leaderless Replication:** No node is "special." Clients send writes to several nodes, and reads query several nodes to ensure they get the latest version (Quorum consistency).

### Replication Timing
- **Synchronous:** The leader waits for followers to confirm they received the write before telling the client "success." This ensures zero data loss but increases latency and can block writes if a follower is down.
- **Asynchronous:** The leader confirms success immediately and sends data to followers in the background. This is very fast but risks data loss if the leader crashes before the followers get the update.

---

## Examples

### Example 1: B-Tree Indexing in PostgreSQL
When you create a table `users` and add an index on `email`:
```sql
CREATE INDEX idx_user_email ON users(email);
```
The database builds a balanced tree where each node contains email ranges. A query `SELECT * FROM users WHERE email = 'alice@example.com'` no longer scans 1 million rows; it traverses 3-4 nodes of the B-Tree to find the exact location of Alice's data.

### Example 2: Read-Your-Own-Writes Consistency
Imagine Alice updates her profile (sent to Leader). She immediately refreshes the page, but her request goes to a Follower that hasn't received the update yet (Asynchronous replication lag). Alice sees her old profile and thinks her update failed. To fix this, we can route a user's reads to the Leader for 30 seconds after they perform a write, ensuring they always see their own changes.

---

## Summary

- Indexes are essential for read performance but carry a write and storage overhead.
- B-Trees are for reads; LSM-Trees are for writes.
- Replication provides fault tolerance and allows systems to scale read traffic horizontally.
- Single-leader is the most common replication topology due to its simplicity in conflict resolution.
- Asynchronous replication is preferred for performance but requires handling "stale reads" due to replication lag.

---

## Exercises

### Review Questions
1. Why does an index slow down `INSERT` operations?
2. Compare the search complexity of a B-Tree vs. a full table scan.
3. What is the main advantage of leaderless replication in a globally distributed system?
4. Define "Quorum" in the context of leaderless replication.

### Application Problems
1. **Index Selection:** You are designing a system for storing high-frequency stock market trades (millions per second). Would you use a database based on B-Trees or LSM-Trees? Justify your choice.
2. **Replication Strategy:** You have two data centers, one in New York and one in London. Users in both cities need low-latency writes. Which replication topology (Single vs. Multi-Leader) would you choose?
3. **Consistency vs. Latency:** Your stakeholder demands "Zero Data Loss." Explain the impact of this requirement on the replication timing (Sync vs. Async) and the system's write availability.

### Challenge Problem
**The Split-Brain Scenario:** In a Multi-Leader setup, a network partition cuts the connection between Data Center A and Data Center B. Both leaders continue to accept writes for the same row. When the network is restored, the values are different. Propose three different strategies for resolving this conflict (e.g., LWW, Version Vectors, etc.) and explain the "data loss" risks of each.
