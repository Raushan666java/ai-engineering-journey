# Day 45 System Design: Autocomplete Service

## Overview
Design an autocomplete system that returns top-k suggestions for a given prefix with low latency.

## Components
- API: Accepts prefix and returns suggestions
- Trie Index: In-memory prefix trie with frequency counts
- Persistence: Periodic snapshots to RDBMS or rebuild from logs
- Cache: Redis for hot prefixes
- Metrics: Collect qps and hit/miss ratios

## Sequence
1. Query arrives -> check Redis cache -> if miss, query Trie in memory -> if still miss, fall back to DB
2. Update frequencies asynchronously from write logs

## Scalability
- Shard trie by prefix hash range
- Use approximate structures for memory savings (e.g., Compact DAWG)
- Use precomputed top-k at each node for fastest response

## Considerations
- For mobile, compress responses and use client-side caching
- For real-time trending, maintain separate in-memory ranking with TTL

---
*Author: Placement Preparation*