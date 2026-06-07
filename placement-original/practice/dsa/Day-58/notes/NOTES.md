# Day 58 — Notes: Rate Limiting Algorithms

Algorithm Comparison:

**Token Bucket**
- Pros: Allows controlled bursts, smooth rate limiting, memory-efficient O(1)
- Cons: Can allow large bursts if bucket fills during idle period
- Use case: APIs that can handle occasional traffic spikes (e.g., AWS API Gateway)

**Leaky Bucket**
- Pros: Smooth fixed-rate output, queues excess requests
- Cons: Can cause delays, queue management overhead
- Use case: Smoothing bursty input to backend systems with fixed capacity

**Fixed Window Counter**
- Pros: Simple, memory-efficient O(1), easy to implement
- Cons: Allows 2x burst at window boundaries (boundary problem)
- Use case: Simple rate limiting where boundary bursts are acceptable

**Sliding Window Log**
- Pros: Most accurate, no boundary issues
- Cons: Memory-intensive O(N), requires storing all timestamps
- Use case: Low-traffic scenarios requiring precise limits

**Sliding Window Counter**
- Pros: Balance of accuracy and efficiency, O(1) memory
- Cons: Approximation (not perfectly accurate)
- Use case: High-traffic production systems (used by Cloudflare, Kong)

Complexity Analysis:
- Token Bucket: Time O(1), Space O(1)
- Leaky Bucket: Time O(1), Space O(capacity)
- Fixed Window: Time O(1), Space O(1)
- Sliding Log: Time O(N), Space O(N)
- Sliding Counter: Time O(1), Space O(1)

Implementation Tips:
- Use atomic operations or locks for thread safety
- Inject time provider for deterministic testing
- Consider clock skew in distributed systems
- Monitor rate limit hit rates and adjust limits dynamically
