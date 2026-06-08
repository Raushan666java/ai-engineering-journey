# Day 57 — Notes: Caching Strategies

Eviction Policies:
- **LRU**: Evicts least recently used. Best for temporal locality (recent items likely accessed again).
- **LFU**: Evicts least frequently used. Best when access patterns favor popular items.
- **ARC**: Adapts between recency and frequency. Handles diverse workloads dynamically.

Complexity:
- LRU: O(1) get/put using HashMap + DoublyLinkedList
- LFU: O(1) average using HashMap + frequency buckets (LinkedHashSet)
- ARC: O(1) operations with ghost lists for adaptation

Trade-offs:
- LRU simple and effective; can suffer from sequential scans polluting cache.
- LFU handles hot items well but slow to adapt to workload changes.
- ARC balances both but has higher overhead.

Implementation tips:
- Use ConcurrentHashMap and synchronized blocks for thread-safe production caches.
- Consider TTL (time-to-live) and refresh strategies for stale data.
- Monitor hit/miss rates and adjust capacity or policy accordingly.
