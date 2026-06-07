# Day 46 Notes: Segment Tree & Fenwick Tree

## Overview
Day 46 covers range-query data structures: Segment Trees (with lazy propagation) and Fenwick Trees (Binary Indexed Tree), their trade-offs, and advanced applications.

## Key Points
- Fenwick Tree: compact, easy to implement, supports prefix sums in O(log n)
- Segment Tree: supports range updates and queries, extendable with lazy propagation
- Coordinate compression for sparse or large index ranges
- 2D Fenwick and Segment Trees for grid problems

## Test Strategy
- Test both point update/range query and range update/range query scenarios
- Validate lazy propagation correctness with overlapping updates
- Stress tests with random updates and queries against brute-force reference

## Files
- `code/SegmentTreeFenwickTree.java`
- `tests/TestDay46.java`

---
*Author: Placement Preparation*