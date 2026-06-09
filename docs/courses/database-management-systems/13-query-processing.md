# Chapter 13 — Query Processing and Optimization

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) describe the stages of query processing; (2) compare selection algorithms and their costs; (3) compare join algorithms and their costs; (4) describe projection and sorting algorithms; (5) estimate query execution costs; and (6) explain heuristic and cost-based query optimization.

## 13.1 Query Processing Pipeline

Query processing transforms a high-level declarative query into an efficient execution plan. The pipeline consists of several stages. Parsing and translation converts the SQL text into an internal representation, typically a parse tree, and checks for syntactic and semantic correctness. The parser verifies that all referenced relations and attributes exist and that the user has appropriate privileges. The resulting parse tree is translated into a relational algebra expression.

The query optimizer receives the relational algebra expression and produces an execution plan. The optimizer explores alternative evaluation strategies, estimates their costs, and selects the lowest-cost plan. The cost estimate considers disk I/O, CPU utilization, and network communication. The execution engine interprets the selected plan and produces the result.

## 13.2 Selection Algorithms

Several algorithms exist for evaluating selection operations. A linear scan, or table scan, reads every block of the relation and tests the selection condition. The cost is the number of blocks in the relation. Linear scan is the baseline strategy and is optimal when no index exists or when the selection retrieves a large fraction of the relation.

An index scan uses an available index to retrieve qualifying tuples directly. For a primary index on a key attribute, a single equality condition costs approximately the height of the index tree plus one block access. For a non-key attribute, the cost may be higher because the index may yield multiple pointers. A clustering index reduces the cost of retrieving multiple tuples because consecutive data blocks are likely to be contiguous on disk.

Conjunctive selection conditions can be evaluated using a composite index on multiple attributes, using one index to retrieve candidates and filtering the rest, or using bitmap intersection. Disjunctive conditions are more difficult to optimize and often require a full scan or the union of multiple index results.

## 13.3 Join Algorithms

The nested-loop join is the simplest algorithm. For each tuple in the outer relation, scan the entire inner relation, testing the join condition. The cost in block accesses is nr blocks of outer plus nr times br, where nr is the number of tuples in the outer relation and br is the number of blocks in the inner relation. If the smaller relation is the outer, the cost reduces. The block nested-loop join improves on the basic algorithm by processing outer blocks rather than outer tuples. The cost becomes br plus br times bs divided by (M minus 2), where M is the number of available buffer blocks.

The index nested-loop join uses an index on the join attribute of the inner relation. For each tuple in the outer relation, the index is probed to locate matching inner tuples. The cost includes scanning the outer relation plus, for each outer tuple, the cost of probing the index and retrieving matching inner tuples. This algorithm is effective when the inner relation has a low join-selectivity factor.

The sort-merge join sorts both relations on the join attribute and then merges them in a single pass. The cost is dominated by the sorting cost: approximately (br times log base M-1 of br) plus (bs times log base M-1 of bs). After sorting, the merge pass reads both relations sequentially, which is efficient for large relations. Sort-merge join is particularly effective when the relations are already sorted on the join attribute, such as when the result of a previous operation is already sorted.

The hash join partitions both relations into buckets using a hash function on the join attribute. During the build phase, the smaller relation is partitioned and stored in memory. During the probe phase, the larger relation is partitioned using the same hash function, and each partition is compared with the corresponding in-memory partition. The hash join is typically the fastest join algorithm when sufficient memory is available. Grace hash join handles the case where memory is insufficient by recursively partitioning.

## 13.4 Projection and Sorting

Projection eliminates specified attributes and then removes duplicate tuples. Duplicate elimination can be accomplished by sorting, by hashing, or by using an index on the projection attributes. Sorting-based projection sorts the result on all projected attributes, then scans to remove adjacent duplicates. Hashing-based projection hashes each tuple and discards duplicates during the hash collision check.

Sorting is a fundamental operation required by ORDER BY, GROUP BY, and sort-merge joins. External merge sort handles data that exceeds available memory. The algorithm has two phases. In the sorting phase, chunks of data that fit in memory are read, sorted in memory, and written back to disk as sorted runs. In the merge phase, the sorted runs are merged together. The number of passes required is log base M-1 of (br/M), where M is the number of buffer pages.

## 13.5 Cost Estimation

Query optimization relies on accurate cost estimates. The cost model typically counts disk block accesses as the dominant cost because I/O is the primary bottleneck. The optimizer needs statistical information about each relation: the number of tuples (nr), the number of blocks (br), the number of distinct values for each attribute, and the distribution of values.

The histogram is the most common representation of value distributions. An equi-width histogram divides the value range into equal intervals and records the count of tuples in each interval. An equi-depth histogram divides the value range into intervals such that each interval contains approximately the same number of tuples. Equi-depth histograms provide better accuracy for skewed distributions.

Selectivity estimation predicts the fraction of tuples that satisfy a condition. For an equality condition, the selectivity is approximately one divided by the number of distinct values. For a range condition, the selectivity is based on the histogram. For a join condition, the selectivity is one over max(n_distinct(outer), n_distinct(inner)). These estimates are used to compute the cost of each candidate plan.

## 13.6 Query Optimization

Heuristic optimization applies transformation rules to produce a better plan without exhaustive cost estimation. Typical heuristics include performing selection and projection as early as possible, combining cascading selections and projections, and identifying common sub-expressions. Heuristics are fast and often produce good plans, but they may miss optimal plans that require counterintuitive orderings.

Cost-based optimization enumerates alternative execution plans and selects the one with the lowest estimated cost. For a query with n relations joined, the number of possible join orders is the n-th Catalan number, approximately 4 to the power n divided by n to the 3/2. For n=10, this exceeds 17 million orders. Dynamic programming reduces the search space by exploiting the principle of optimality: the optimal way to join a subset of relations does not depend on how that subset is joined with the rest. The System R optimizer, developed at IBM, uses dynamic programming to explore join orders.

The optimizer considers physical operators such as index scans, different join algorithms, and pipelining. Pipelining allows the result of one operator to be consumed incrementally by the next operator without materializing the entire intermediate result.

## 13.7 Materialized Views

A materialized view is a view whose result is computed and stored physically, unlike a virtual view whose result is computed on demand. Materialized views accelerate queries by precomputing expensive joins and aggregations. The DBMS automatically rewrites queries to use materialized views when appropriate.

The cost of materialized views is the storage space they consume and the overhead of maintaining them when the base data changes. Incremental view maintenance updates the materialized view based on changes to base relations rather than recomputing the entire view. Commercial systems support various forms of incremental maintenance.

The query optimizer considers materialized views when estimating query plans. If a materialized view contains all the data needed for a query, the optimizer can redirect the query to the view, potentially reducing query execution time by orders of magnitude.

## 13.8 Parallel Query Processing

Parallel query processing exploits multiple processors and disks to reduce query execution time. Intra-query parallelism splits a single query across multiple processors. Inter-query parallelism executes multiple queries simultaneously.

Intra-query parallelism includes several forms. Intra-operation parallelism partitions the input data across processors and executes the same operation on each partition. Inter-operation parallelism, or pipelining, feeds the output of one operator as input to another operator running on a different processor. Bushy parallelism fans out intermediate results to multiple downstream operators.

Parallel database systems are classified by their hardware architecture. Shared-memory systems share all processors and memory. Shared-disk systems share disks but not memory. Shared-nothing systems partition both data and processing across independent nodes. Shared-nothing architectures scale most effectively for large-scale data processing and are the basis for most modern distributed database systems.

## Summary

Query processing translates declarative SQL into efficient execution plans. Selection and join algorithms each have distinct cost profiles that suit different data characteristics. External sorting and hashing are foundational operations. Query optimization combines heuristics and cost estimation to select among the vast space of alternative plans. Materialized views precompute expensive operations. Parallel query processing exploits multiple processors and disks.

## Exercises

### Review Questions

1. List the stages of query processing in order.
2. Under what conditions is a hash join preferable to a sort-merge join?
3. What statistical information does the query optimizer require?
4. Why is equi-depth histogram more accurate than equi-width for skewed data?
5. What is the principle of optimality and how does it apply to join optimization?

### Application Problems

1. Given relations R with 10,000 tuples and S with 5,000 tuples, each stored in 100-byte blocks. Assuming 50 buffer blocks, compute the I/O cost for (a) nested-loop join, (b) block nested-loop join, (c) sort-merge join, and (d) hash join. Assume tuples are 100 bytes each.
2. For the query SELECT * FROM R WHERE A = 5 AND B > 10, with indices on R(A) and R(B), explain how the optimizer would evaluate alternative plans. Assume R(A) has 100 distinct values and R(B) has 1,000 distinct values.
3. Construct an example query where performing selection early produces a dramatically cheaper plan. Show the cost of the optimized plan versus the unoptimized plan using relational algebra.

### Challenge Problem

Design a query optimizer for a subset of SQL that handles conjunctive queries with equi-joins. Implement a dynamic programming algorithm that finds the optimal join order for up to 6 relations. The algorithm should consider both left-deep and bushy tree plans. Demonstrate your optimizer on a set of three relations with given sizes and join selectivities.
