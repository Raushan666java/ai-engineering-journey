# Day 44 System Design: Automated Assessment Evaluation Pipeline

## Purpose
Describe a system to run and grade DP assessments automatically with reproducible results.

## Components
- Submission Runner: Sandbox container to run code
- Test Case Manager: Stores test inputs/expected outputs with metadata
- Scoring Engine: Executes tests, aggregates results, computes time penalties and ranks
- Feedback Generator: Generates per-problem feedback (edge cases failed, runtime)

## Features
- Deterministic execution with resource limits
- Ability to upload new test cases and label difficulty
- Leaderboard and performance analytics

## Data Flow
1. Assessment begins → candidate submits solutions → Submission Runner executes test suite
2. Scoring Engine records pass/fail/time and stores results
3. Feedback is generated with failed test details and suggestions

---
*Author: Placement Preparation*