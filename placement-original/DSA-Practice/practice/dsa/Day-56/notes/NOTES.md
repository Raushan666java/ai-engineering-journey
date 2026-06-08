# Day 56 — Notes: Raft Overview

Summary:
- Raft is a consensus algorithm for managing a replicated log across a cluster.
- Key components: leader election, log replication, safety, membership changes.

Complexity & guarantees:
- Liveness depends on leader election timeouts and reliable communication.
- Safety: logs only committed when replicated to a majority.

Testing tips:
- Use deterministic clocks and injected randomness for reproducible tests.
- Simulate partitions and message loss to test failure modes.
