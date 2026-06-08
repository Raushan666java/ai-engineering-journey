# Day 50 System Design: Constraint Solver & Backtracking

## Overview
This document maps backtracking techniques to a production constraint-solver service (scheduling, resource allocation, puzzle solving).

## Components
- Problem API: define variables, constraints, objective
- Solver: backtracking + heuristics (MRV, LCV), optional CSP libraries
- Async job runner for heavy problems
- Result store and explanation generator for debugging

## Techniques
- Use heuristics (minimum remaining values, least constraining value) to prune search early
- Support time-bound execution with best-effort solutions
- Cache partial solutions for repeated subproblems

---
*Author: Placement Preparation*