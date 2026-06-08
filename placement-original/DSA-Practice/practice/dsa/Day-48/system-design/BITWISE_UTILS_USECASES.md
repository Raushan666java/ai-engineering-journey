# Day 48 System Design: Bitwise Utilities & Use Cases

## Overview
This note documents practical systems where bitwise operations are useful: compression, hashing, Bloom filters, and permission bitmasks.

## Use Cases
- Permission systems using bit flags for fast checks
- Bloom filters and probabilistic data structures requiring hashing and bit arrays
- Compact serialization and status bit packing for network protocols
- Hardware interfacing and low-level performance-critical code

## Design Considerations
- Choose appropriate integer width (32 vs 64 bit) and handle sign/overflow
- Use atomic bit operations for concurrent updates (e.g., AtomicLong with CAS)
- For memory efficient bit arrays, use specialized libraries or compressed bitsets

---
*Author: Placement Preparation*