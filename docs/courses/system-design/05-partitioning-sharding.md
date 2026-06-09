# Chapter 5: Data Partitioning and Sharding

---

## Learning Objectives

- Distinguish between Vertical and Horizontal partitioning (Sharding)
- Explain the mechanics of Range-based and Hash-based partitioning
- Analyze the problem of "Hotspots" and uneven data distribution
- Evaluate strategies for Rebalancing shards when adding or removing nodes

---

## Theory

### The Necessity of Partitioning
Replication (Chapter 4) scales reads, but it doesn't scale writes because every write must be processed by the leader (or all nodes). To scale writes and handle datasets larger than a single machine's disk, we must use **Partitioning** (also called Sharding). This involves breaking the large dataset into smaller chunks (partitions) and distributing them across multiple nodes.

### Types of Partitioning
1. **Vertical Partitioning:** Breaking a table into columns. For example, storing a user's name and email in one database, and their large "bio" and "profile picture" in another. This is often used to optimize I/O.
2. **Horizontal Partitioning (Sharding):** Breaking a table into rows. Different rows are stored in different partitions.

### Partitioning Strategies
- **Range-based Partitioning:** Data is split based on a range of values (e.g., User IDs 1-1000 in Shard 1, 1001-2000 in Shard 2). This allows for efficient range queries but can lead to **Hotspots** if certain ranges (like recent dates) are accessed more frequently.
- **Hash-based Partitioning:** A hash function is applied to the partition key (e.g., `hash(user_id) % number_of_shards`). This ensures a uniform distribution of data and avoids hotspots. However, range queries become impossible without scanning all shards.
- **Consistent Hashing:** A more advanced form of hashing that minimizes the amount of data moved when a shard is added or removed.

---

## Examples

### Example 1: Sharding by User ID
In a social media app, we might shard our `posts` table by `user_id`.
- Shard 1: Users with `hash(id) % 4 == 0`
- Shard 2: Users with `hash(id) % 4 == 1`
...and so on.
This ensures that all posts for a single user are in the same shard, making the query `SELECT * FROM posts WHERE user_id = 123` very efficient (it only hits one database).

### Example 2: The "Celebrity" Hotspot
Imagine we shard a message system by `recipient_id`. If a celebrity with 100M fans receives a message, and millions of people try to read it at once, the single shard containing that celebrity's data will be overwhelmed, even if the other 99 shards are idle. This is a "Hotspot." Solutions include adding a random suffix to the partition key for extremely popular items to spread the load.

---

## Summary

- Partitioning allows a system to scale writes and storage capacity horizontally.
- Vertical partitioning splits by columns; Horizontal partitioning (sharding) splits by rows.
- Range partitioning is good for range queries but prone to hotspots.
- Hash partitioning provides uniform distribution but makes range queries expensive.
- Choosing the right **Partition Key** is the most important decision in sharding.
- Rebalancing shards is a complex, high-risk operation that should be minimized using Consistent Hashing.

---

## Exercises

### Review Questions
1. Why does replication alone not scale write-heavy systems?
2. What is a "Partition Key"? Give an example of a good and bad partition key for an e-commerce order table.
3. Explain how "Consistent Hashing" differs from simple "Modulus Hashing."
4. What is the "Scatter-Gather" problem in sharding?

### Application Problems
1. **Key Selection:** You are sharding a "Search Engine Index." You can shard by `document_id` or by `term` (word). Discuss the trade-offs of each approach for a query like "system design."
2. **Rebalancing:** You have 3 shards and 300GB of data. You add a 4th shard. In a simple `hash(key) % N` setup, what percentage of your data needs to be moved? How does this change with Consistent Hashing?
3. **Hotspot Mitigation:** A date-sharded system (one shard per day) experiences 10x more traffic on the "current day" shard than on older shards. Propose a way to redistribute this load.

### Challenge Problem
**Global Sharding:** You are designing a global payment system. You need to store transactions for users in the US, EU, and Asia. You want low latency for local users and compliance with data residency laws (EU data must stay in the EU). Propose a sharding strategy that accounts for:
1. Geographic location (Data Residency)
2. Uniform load distribution (Avoiding hotspots)
3. Cross-region reporting (e.g., "Total global revenue today")
Explain which partition keys you would use and how queries would be routed.
