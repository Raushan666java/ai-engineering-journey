# Hashing - Complete Guide

## Overview
Hashing is a fundamental technique in computer science that maps data of arbitrary size to fixed-size values called hash codes or hash values. It's widely used for efficient data retrieval, duplicate detection, and various algorithmic optimizations.

## Difficulty Breakdown

### Easy Level (6 problems)
1. **Two Sum (1)** - Find two numbers that add up to target
2. **Contains Duplicate (217)** - Check if array has duplicates
3. **Single Number (136)** - Find number that appears once
4. **Intersection of Two Arrays (349)** - Find common elements
5. **Happy Number (202)** - Detect cycle in number sequence
6. **Isomorphic Strings (205)** - Check if strings are isomorphic

### Medium Level (4 problems)
7. **Group Anagrams (49)** - Group strings by anagram
8. **Valid Anagram (242)** - Check if two strings are anagrams
9. **Top K Frequent Elements (347)** - Find k most frequent elements
10. **Subarray Sum Equals K (560)** - Count subarrays with sum K

### Hard Level (4 problems)
11. **Longest Consecutive Sequence (128)** - Find longest consecutive sequence
12. **Minimum Window Substring (76)** - Find minimum window containing all characters
13. **Substring with Concatenation of All Words (30)** - Find substrings containing all words
14. **LRU Cache (146)** - Implement LRU cache with hash map and doubly linked list

## Key Concepts

### Hash Functions
- **Properties**: Deterministic, uniform distribution, avalanche effect
- **Common Functions**: Division method, multiplication method, universal hashing
- **Collision Resolution**: Separate chaining, open addressing

### Hash Tables
- **Operations**: Insert, Delete, Search - Average O(1) time
- **Load Factor**: Ratio of elements to table size
- **Rehashing**: When load factor exceeds threshold

### Applications
- **Database Indexing**: Fast lookups
- **Caching**: LRU, LFU implementations
- **Duplicate Detection**: Bloom filters, checksums
- **Cryptography**: Password hashing, digital signatures

## Time Complexity Analysis
- **Average Case**: O(1) for insert, delete, search
- **Worst Case**: O(n) when all keys hash to same bucket
- **Space Complexity**: O(n) for storing elements

## Common Patterns
1. **Frequency Counting**: Use hash map to count occurrences
2. **Two Sum Pattern**: Store complement values
3. **Grouping**: Group elements by hash values
4. **Cycle Detection**: Floyd's algorithm with hash set
5. **Memoization**: Cache results using hash map

## Interview Tips
- Always consider hash collisions in worst case
- Choose appropriate data structure (HashMap, HashSet, etc.)
- Handle edge cases: empty inputs, single elements
- Understand trade-offs between time and space
- Consider alternatives when hash tables aren't optimal