# Day 43 System Design: High-Throughput Evaluation Pipeline for DP Contest Scoring

## Purpose
Design a service to evaluate and score large numbers of DP submissions (useful for contest platforms or automated grading systems).

## Components
- Ingestion: Accept code submissions (zip or single file)
- Sandbox Executor: Run code in containers (time and memory-limited)
- Scoring Service: Execute test cases, compute score and time penalty
- Storage: Store submission metadata and artifacts
- UI: Dashboard for reviewing results and leaderboards

## Important Constraints
- Security: sandbox execution, no network access
- Scalability: scale executors horizontally for peak contest times
- Reliability: deterministic execution for reproducible scoring

## Sequence
1. User submits solution → queued to executor
2. Executor runs tests in isolated container → outputs results
3. Scoring service aggregates and stores results
4. Dashboard displays pass/fail and runtime stats

---
*Author: Placement Preparation*