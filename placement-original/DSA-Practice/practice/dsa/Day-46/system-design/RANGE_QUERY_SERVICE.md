# Day 46 System Design: Range Query Service

## Overview
Design a service that provides range sum and range min/max queries over large datasets, suitable for analytics or time-series systems.

## Components
- API for range queries
- Storage: time-series DB or segmented store
- In-memory index: segment tree or Fenwick tree for hot partitions
- Background updater: apply batched updates to indexes

## Sequence
1. Client requests range sum for [l, r] → check hot-index → if present, return computed result
2. If not cached, compute from storage with indexing and cache the result
3. For range updates, write-through to storage and update in-memory index asynchronously

## Considerations
- Sharded indexes per time window
- Use write buffering and eventual consistency for high throughput
- Monitor memory usage for in-memory indexes and use eviction policies

---
*Author: Placement Preparation*