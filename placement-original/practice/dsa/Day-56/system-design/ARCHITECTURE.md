# Day 56 — System Design: When to use Consensus (Raft)

Use cases
- Distributed key-value stores, leader-coordinated metadata services, and configuration management.

Trade-offs
- Simpler alternatives exist (e.g., primary-replica) but lack strong safety under leader failover.
- Raft prioritizes understandability and correctness over raw performance.

Operational notes
- Monitor leader election frequency, commit latency, and follower lag.
- Use persistent storage and WAL for production implementations to ensure durability.
