# Day 55 — System Design: Indexing, B-Tree vs LSM

Tradeoffs
- B-Tree/B+Tree: excellent for read-heavy workloads and range queries; consistent read latencies.
- LSM Tree: write-optimized, better for high ingest rates, but requires compaction and can increase read amplification.

Persistence & Crash Recovery
- Implement write-ahead logs (WAL) to ensure recoverability.
- Use checkpointing and background compaction/merging.

Sharding & Distribution
- Use consistent hashing or range partitioning based on index keys; range partitioning works well for ordered key spaces.
- Consider global secondary indexes and their maintenance cost in distributed systems.
