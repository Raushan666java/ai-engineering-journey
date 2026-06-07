# Day 47 System Design: Search Service (Kth and Range Queries)

## Overview
Design a search service that supports queries such as K-th smallest in range, median-of-two arrays, and search-in-rotated arrays.

## Components
- Query API: accept range and k/target
- Indexes: segment tree / order-statistic trees for K-th in range
- Offline preprocessing: sort and build persistent segment tree
- Feasibility functions for binary search on answer

## Scaling
- Partition data by keys and use distributed order-statistic structures
- Use approximate quantile algorithms for very large datasets

---
*Author: Placement Preparation*