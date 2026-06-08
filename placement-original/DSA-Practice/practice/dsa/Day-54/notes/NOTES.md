# Day 54 — Notes: Concurrency & Parallelism

Key takeaways:
- Prefer high-level constructs (Executors, BlockingQueue, CompletableFuture) for clearer code and simpler shutdown semantics.
- Use atomic types for simple counters; use locks when complex invariants exist.
- For throughput-sensitive flows, consider lock-free data structures and algorithms.
- Deterministic tests: avoid timing-based assertions; use latches, join, and deterministic workloads.

Pitfalls:
- Deadlocks: order locks consistently or use tryLock with timeouts.
- Starvation: be careful with unfair locks and thread pools with unbounded queues.

Practice:
- Convert a blocking queue pipeline into a reactive flow using CompletableFutures.
- Measure oversubscription: CPU-bound tasks should not use more threads than cores unless blocking is expected.
