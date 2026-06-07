# Day 42 System Design: Recommendation Engine (DP Applications)

## Overview
This document maps the DP techniques explored on Day 42 (interval DP, bitmask DP, tree DP) to a practical recommendation engine architecture.

## Use Cases
- Collaborative filtering (DP for optimization of scoring)
- Session-based recommendations (state compression / bitmask to track recent items)
- Ranking reordering problems that can be modeled as interval DP

## Components
- API layer for item requests
- Feature store for item/user features
- Offline job to compute similarity and scores (map-reduce jobs, DP-based aggregations)
- Online scorer (low-latency service using cached precomputed values)
- Embedding store (vector DB) for nearest neighbor searches

## Example Flow: Session-based Next-Item Prediction
1. Client sends session events (sequence of items)
2. Service maintains bitmask/state for recently viewed items
3. DP-based score calculation on small-state space to compute best k candidates
4. Return top-k recommendations with confidence scores

## Design Considerations
- For bitmask DP, keep state space small (e.g., recent 10 items → 2^10 states)
- Use approximation or pruning for large action spaces
- Precompute DP tables offline for common patterns and serve from cache

---
*Author: Placement Preparation*