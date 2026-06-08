# Day 56 — Distributed Consensus (Raft)

Objective
- Implement a deterministic, testable Raft consensus simulation demonstrating leader election and log replication.

Deliverables
- code/: `RaftDemo.java` (deterministic Raft node simulation, clear interfaces, comments)
- tests/: `TestDay56.java` (JUnit 5 tests for leader election and basic replication)
- notes/: `NOTES.md` (protocol overview, complexities, failure modes)
- system-design/: `ARCHITECTURE.md` (when and how to use Raft, trade-offs)
- assets/: `raft_diagram.svg` (visualizing election and replication flows)

Quality targets: deterministic tests (injected randomness/time control), production-quality explanations, and clear complexity analysis.
