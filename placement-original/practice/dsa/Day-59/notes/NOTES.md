# Day 59 — Notes: Consistent Hashing & Load Balancing

## Consistent Hashing

**Key Concepts:**
- Hash ring: Circular space where both nodes and keys are hashed
- Virtual nodes: Each physical node creates multiple virtual nodes for better distribution
- Minimal rebalancing: Only K/N keys move when adding/removing nodes

**Complexity:**
- Add/Remove node: O(V log N) where V = virtual nodes per physical node
- Lookup: O(log N) using TreeMap
- Space: O(N × V) where N = physical nodes

**Virtual Nodes Trade-off:**
- More virtual nodes = better distribution but higher memory
- Recommended: 100-200 virtual nodes per physical node
- Example: 10 physical nodes × 150 virtual = 1500 entries in TreeMap

**Hash Functions:**
- MD5/SHA1: Good distribution, cryptographic overhead acceptable
- MurmurHash: Faster, non-cryptographic, excellent distribution
- Avoid: Simple modulo (terrible rebalancing)

## Load Balancing Strategies

**1. Round Robin**
- Pros: Simple, fair distribution, O(1)
- Cons: Ignores server capacity and load
- Use: Homogeneous servers with similar requests

**2. Weighted Round Robin**
- Pros: Respects server capacity, still simple
- Cons: Static weights, doesn't adapt to actual load
- Use: Known capacity differences (CPU, memory)

**3. Least Connections**
- Pros: Adapts to actual load, good for long-lived connections
- Cons: O(N) lookup, state tracking required
- Use: WebSocket, database connections, streaming

**4. Random**
- Pros: Stateless, simple, good enough distribution
- Cons: No fairness guarantees short-term
- Use: Large scale where statistical distribution works

**5. IP Hash**
- Pros: Session affinity, cache-friendly
- Cons: Uneven distribution if traffic patterns skewed
- Use: Sticky sessions, local caching required

**6. Consistent Hash**
- Pros: Minimal rebalancing, cache-friendly, scalable
- Cons: More complex, requires good hash function
- Use: Distributed caching (Memcached, Redis Cluster), CDN routing

## Comparison Matrix

| Strategy | Complexity | Rebalancing | State | Use Case |
|----------|-----------|-------------|-------|----------|
| Round Robin | O(1) | N/A | Minimal | Simple HTTP |
| Weighted RR | O(1) | N/A | Minimal | Different capacities |
| Least Conn | O(N) | N/A | Per-server | Long connections |
| Random | O(1) | N/A | None | Large scale |
| IP Hash | O(1) | All on change | None | Sticky sessions |
| Consistent Hash | O(log N) | K/N keys | Hash ring | Distributed cache |

## Production Considerations

**Health Checks:**
- Remove unhealthy nodes from rotation
- Exponential backoff for health check retries
- Separate health check thread pool

**Metrics:**
- Track request distribution per server
- Monitor connection counts and latency
- Alert on skewed distribution (>20% deviation)

**Dynamic Reweighting:**
- Adjust weights based on CPU/memory utilization
- Implement feedback loop with metrics
- Use exponential moving average for smoothing
