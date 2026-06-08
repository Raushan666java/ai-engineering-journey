# Day 46 — Notes

- Bitmask DP uses O(n * 2^n) time and memory; useful for TSP with n <= 20 (practical limit smaller due to time/memory).
- Convex Hull Trick can be implemented with a deque for monotonic slopes and x queries, or Li Chao Tree for general queries.
- CHT correctness: must ensure slopes and queries satisfy monotonic conditions for deque approach.
