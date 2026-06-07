# Day 55 — Notes: Indexing & B-Tree

Overview:
- B-Tree is a balanced tree optimized for systems where reads/writes happen in blocks (disk pages).
- A node contains multiple keys and children; min degree t controls branching factor.
- B+ Tree variation stores records in leaves and links leaves with a linked list for efficient range scans.

When to use:
- Use B-Tree/B+ Tree for OLTP database indexes and filesystems (ext4 uses B-tree variants).
- Use LSM-tree (Log-Structured Merge) for write-heavy workloads (RocksDB, Cassandra).

Design tips:
- Pick branching factor to match page size to minimize disk I/O.
- Consider write amplification, compaction strategies, and background merging for LSM.

Complexity:
- Search, Insert (amortized) = O(log N)
