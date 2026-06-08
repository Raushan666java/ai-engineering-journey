# Day 19: Greedy Algorithms - Complete Guide

## Overview
**Day 19 Focus:** Greedy algorithms, interval scheduling, activity selection, Huffman coding, coin change greedy, job sequencing, fractional knapsack
**Practice:** 10 Greedy problems
**Project:** Greedy library and visualizer

---

## Table of Contents
- What is Greedy?
- Greedy Patterns
- Classic Problems
- LeetCode Problems
- Interview Tips
- Study Plan & Project

---

## What is Greedy?
A greedy algorithm makes locally optimal choices with the hope that the final solution will be globally optimal. It’s used when the greedy choice property and optimal substructure hold.

## Key Greedy Patterns
1. **Interval Scheduling/Activity Selection** - Sort by end-time
2. **Fractional Knapsack** - Greedy by value/weight ratio
3. **Huffman Coding** - Greedy with priority queues to generate optimal prefix codes
4. **Job Sequencing with Deadlines** - Greedy by deadlines and profit
5. **Coin Change (Greedy)** - Works for canonical coin systems (e.g., US coins) but not in general
6. **Minimum Number of Platforms / Merge Intervals** - Sort by start/end time

---

## Classic Problems
- Activity Selection (LC variant)
- Interval Scheduling / Merge Intervals
- Fractional Knapsack
- Job Sequencing with Deadlines
- Huffman Coding (conceptual, more classic than LC)
- Minimum Number of Arrows to Burst Balloons
- Minimum Number of Platforms

---

## LeetCode Problems (10)
**Easy:** LC 455 (Assign Cookies), LC 435 (Non-Overlapping Intervals)
**Medium:** LC 435, LC 452 (Minimum Number of Arrows), LC 406 (Queue Reconstruction by Height), LC 767 (Reorganize String)
**Hard:** LC 659 (Split Array into Consecutive Subsequences) (overlaps with greedy + hashmap)

---

## Interview Tips
- Sort by appropriate key (end-time, start-time, ratio)
- Always validate greedy correctness or provide counterexample
- Be ready to explain why greedy choice is optimal or why not

---

## Project: Greedy Library & Visualizer
- `GreedyLibrary.java`: Implement core greedy problems
- `GreedyVisualizer.java`: Step-by-step decisions and outcomes
- Benchmark greedy vs optimal (where feasible)

---

## Study Plan (9 hours)
- Morning: Greedy fundamentals, activity selection, interval scheduling
- Afternoon: Fractional knapsack, Huffman concept, job sequencing
- Evening: Implementation, tests, visualizer, interview pattern review

**Next:** I'll implement `GreedyBasics.java` with examples and tests, plus sample visualizer.