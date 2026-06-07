# Day 41 Notes: String Dynamic Programming

## Overview
This day focused on advanced string dynamic programming techniques and practical implementations.

## Key Algorithms Implemented
- Longest Common Subsequence (LCS) variants
- Edit Distance (Levenshtein)
- Palindromic Partitioning
- Advanced string DP (StringDP.java)

## Implementation Notes
- Use memoization to reduce time from exponential to polynomial
- When working with palindromic checks, precompute palindrome tables to achieve O(1) checks
- For edit distance, prefer iterative DP for space optimization

## Test Strategy
- Unit tests exercise typical, edge-case, and random inputs
- Use JUnit 5 for deterministic assertions
- Example command: `mvn -Dtest=dsa.day41.tests.TestDay41 test`

## System Design / Applications
- Text editors: diff/patch utilities
- Bioinformatics: sequence alignment
- Search engines: fuzzy matching

## Files to check
- `code/StringDP.java` — main implementations
- `tests/TestDay41.java` — test cases
- `system-design/DOCUMENT_SIMILARITY_SYSTEM_DESIGN.md` — application design

---
*Author: Placement Preparation*
