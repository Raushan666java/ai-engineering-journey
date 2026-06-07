# Day 58 — Rate Limiting Algorithms

Objective
- Implement production-grade rate limiting algorithms: Token Bucket, Leaky Bucket, Fixed Window, Sliding Window Log, and Sliding Window Counter.
- Analyze trade-offs, time/space complexity, and burst handling characteristics.

Deliverables
- code/: `RateLimiters.java` (5 rate limiting algorithms with detailed implementations and comments)
- tests/: `TestDay58.java` (JUnit 5 tests validating rate limiting behavior, burst handling, and edge cases)
- notes/: `NOTES.md` (algorithm trade-offs, complexity analysis, distributed rate limiting patterns)
- system-design/: `ARCHITECTURE.md` (distributed rate limiting, Redis-based implementations, API gateway patterns)
- assets/: `rate_limiting_diagram.svg` (visualizing token bucket and sliding window flows)

Quality targets: thread-safe implementations, accurate time-based logic, comprehensive tests with time mocking, production-ready explanations suitable for system design interviews.
