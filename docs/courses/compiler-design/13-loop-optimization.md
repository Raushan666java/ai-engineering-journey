# Chapter 13: Loop Optimization

## Learning Objectives

After completing this chapter, students will be able to: perform loop-invariant code motion; eliminate induction variables; apply strength reduction to loop computations; implement loop unrolling; transform programs with loop fusion and fission; reorder nested loops via loop interchange; and recognize opportunities for vectorization.

## Theory

### The Importance of Loop Optimization

Loops are the primary source of runtime execution in most programs. A small fraction of the code (often less than 10%) accounts for more than 90% of execution time, and that fraction is typically composed of loops. Consequently, loop optimizations yield disproportionate performance improvements compared to optimizations applied to the rest of the program.

### Loop-Invariant Code Motion

An expression within a loop is **loop-invariant** if its value does not change from one iteration to the next. Loop-invariant code motion moves such expressions to the loop's pre-header, ensuring they are evaluated once rather than every iteration.

To identify loop-invariant expressions, the compiler checks for each instruction: (1) all operands are either constants, are defined outside the loop, or have definitions that are loop-invariant and reach only one location; (2) if the expression is an assignment, the assigned variable is not used elsewhere in the loop before being redefined.

Safety conditions for code motion: (a) the instruction must dominate all loop exits; (b) the instruction must be the only definition of its result that reaches uses inside the loop; (c) moving the instruction must not introduce new exceptions or change termination behavior.

### Induction Variable Elimination

An **induction variable** is a variable in a loop whose value changes by a fixed amount on each iteration. The classic case is the loop counter `i` that increments by 1 each iteration. A **derived induction variable** is a variable whose value is a linear function of a basic induction variable, such as `t = 4 * i`.

Induction variable elimination replaces derived induction variables with simpler expressions or removes them entirely when they are used only as array indices. After strength reduction, the derived variable may be updated by an addition rather than recomputed from the basic induction variable.

### Strength Reduction

Strength reduction replaces an expensive operation within a loop with a cheaper one. The canonical example concerns array-element address computation. Consider:

```
for i = 1 to n
    a[i] = b[i] * c[i]
```

The address of `a[i]` is computed as `base_a + i * 4` (for 4-byte elements). The multiplication `i * 4` is replaced by an addition: maintain a running pointer `p` initialized to `base_a` and incremented by 4 each iteration.

Strength reduction generalizes to any expression of the form `c1 * i + c2` where `i` is an induction variable. The multiplication is replaced by an addition in the loop's increment section.

### Loop Unrolling

Loop unrolling replicates the loop body multiple times and adjusts the loop control accordingly, reducing the overhead of loop control and increasing the opportunity for instruction-level parallelism. For a loop with N iterations and an unroll factor of K, the unrolled loop executes N/K iterations, each performing K copies of the original body.

Unrolling improves performance by: (1) reducing branch instructions, (2) increasing basic-block size for better instruction scheduling, (3) exposing more operations for software pipelining. The unroll factor is limited by register pressure and code-size constraints.

### Loop Fusion and Fission

**Loop fusion** (jamming) combines two adjacent loops that iterate over the same range into a single loop. Fusion improves cache locality by processing related computations at the same time and reduces loop overhead. Fusion is legal when no data dependencies are violated — that is, when statements in the first loop do not depend on results from the second loop and vice versa.

**Loop fission** (distribution) splits a single loop into multiple loops, each handling a subset of the loop body. Fission may enable other optimizations such as vectorization when the individual loops have simpler memory-access patterns. It also reduces register pressure and can improve cache behavior when the split loops access disjoint data regions.

### Loop Interchange

Loop interchange swaps the nesting order of loops in a perfect nest. Consider a doubly nested loop where the inner loop accesses memory sequentially in the column direction of a matrix stored in row-major order. The access pattern is stride-N, which is cache-inefficient. Swapping the loops makes the inner-loop access sequential (stride-1), significantly improving cache performance.

### Vectorization

Vectorization transforms a loop to use SIMD (Single Instruction, Multiple Data) instructions that operate on multiple data elements simultaneously. The compiler must verify that the loop iterations are independent (no loop-carried dependencies). Techniques include:

- **Loop distribution**: separate independent statements from dependent ones so that at least the independent portion can be vectorized.
- **Scalar expansion**: replace scalar temporary variables with vector temporaries to eliminate false dependencies.
- **Recurrence handling**: recognize certain reducible recurrences (summation, dot product) that can be vectorized.

## Example

### Example 13.1: Strength Reduction for Array Indexing

Original:
```c
for (i = 0; i < n; i++) {
    a[i] = b[i] + 1;
}
```

After strength reduction:
```
p_a = &a[0]; p_b = &b[0];
for (i = 0; i < n; i++) {
    *p_a = *p_b + 1;
    p_a += 4; p_b += 4;
}
```

The multiplications in the original array indexing are replaced by pointer additions.

## Summary

Loop optimizations target the most-executed regions of a program. Loop-invariant code motion moves unchanging computations outside loops. Induction-variable analysis and strength reduction replace expensive multiplications with additions. Loop unrolling, fusion, fission, and interchange restructure loops to improve memory access patterns and expose parallelism. Vectorization exploits SIMD hardware for further speedups.

## Exercises

### Review Questions

1. What conditions must an expression satisfy to be considered loop-invariant?
2. Define a basic induction variable and a derived induction variable. Give an example of each.
3. What is strength reduction, and how does it apply to array-indexing expressions?
4. Explain the difference between loop fusion and loop fission. When would each be applied?

### Application Problems

1. Identify loop-invariant expressions in the following code and show the result of code motion:
   ```c
   for (i = 0; i < n; i++) {
       x = y * z;
       a[i] = b[i] + c[i] * x;
   }
   ```
2. Perform strength reduction on the derived induction variable `t = 4 * i + offset` in a loop where i increments by 1. Show the transformed code.
3. Unroll the following loop by a factor of 4:
   ```c
   for (i = 0; i < 12; i++) {
       a[i] = a[i] * 2;
   }
   ```
4. Determine whether loop interchange is beneficial for the following nested loop accessing a matrix stored in row-major order:
   ```c
   for (j = 0; j < N; j++)
       for (i = 0; i < N; i++)
           a[i][j] = b[i][j] + 1;
   ```
   Explain your reasoning.

### Challenge Problem

1. Implement a loop-optimization pass in your chosen language that reads three-address code containing a single loop, performs loop-invariant code motion and strength reduction, and outputs the optimized code. Your pass must include a natural-loop detector and an induction-variable analyzer. Test your optimizer on a loop that computes the dot product of two arrays: accumulate the sum of `a[i] * b[i]` over i from 0 to n-1. Show the before and after three-address code.
