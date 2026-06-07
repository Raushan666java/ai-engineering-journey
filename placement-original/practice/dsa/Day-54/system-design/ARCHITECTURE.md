# Day 54 — System Notes: Designing Concurrent Systems

Trade-offs
- Latency vs throughput: thread pool sizing is essential; use bounded queues and backpressure where needed.
- Fail-fast vs resilient: decide whether failures should propagate or be isolated per task.
- Observability: instrument queues, latencies, and thread pool metrics.

Recommended patterns
- Thread pools + bounded queues for predictable resource usage.
- Actor / message-driven designs for decoupling and easier reasoning about state.
- Structured concurrency and cancellation propagation for clean shutdowns.

Testing
- Use deterministic constructs: controlled thread counts, CountDownLatch, and fixed-size workloads for stable unit tests.
