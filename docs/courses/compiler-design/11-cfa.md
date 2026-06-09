# Chapter 11: Control Flow Analysis

## Learning Objectives

After completing this chapter, students will be able to: identify basic blocks from intermediate-code sequences; construct flow graphs; compute dominators in a flow graph; build depth-first spanning trees and classify edges; identify natural loops and their pre-headers; and determine whether a flow graph is reducible.

## Theory

### Basic Blocks Revisited

A basic block is a maximal sequence of consecutive instructions with a single entry point (its first instruction) and a single exit point (its last instruction). Control enters at the top and leaves only at the bottom. There is no branching or halting in between. Partitioning into basic blocks identifies leaders: (1) the first instruction of the program is a leader; (2) any instruction that is a jump target is a leader; (3) any instruction that immediately follows a jump or conditional jump is a leader. Each leader together with all instructions up to but not including the next leader constitutes a basic block.

For control-flow analysis, basic blocks become atomic nodes, reducing the size and complexity of the graph over which analyses operate.

### Flow Graphs

A flow graph G = (N, E, entry) has basic blocks as nodes N and directed edges E representing control flow. An edge B → C exists if control can pass from B's last instruction to C's first instruction. The entry block contains the first instruction of the program and has no predecessors. The exit block has no successors. A well-formed flow graph has every block reachable from entry; unreachable blocks are dead code.

Flow graphs are the fundamental data structure for data-flow analysis, loop detection, and many code optimizations.

### Dominators

Block d **dominates** block n (d dom n) if every directed path from entry to n passes through d. Domination is reflexive, transitive, and antisymmetric. The **immediate dominator** of n, idom(n), is the unique d ≠ n such that d dom n and every other dominator of n dominates d. The immediate-dominator relation forms the **dominator tree**, rooted at the entry block.

Dominators have important properties: the entry block dominates all blocks; dominators of a block form a total order (if a and b both dominate c, either a dominates b or b dominates a). Dominators are computed by the **Lengauer-Tarjan algorithm** in near-linear time using depth-first search, semi-dominators, and path compression. An iterative algorithm using data-flow equations also works but is slower.

### Depth-First Spanning Tree

Depth-first search of the flow graph produces a **depth-first spanning tree** (DFST), assigning each node a depth-first number (dfn). Edges are classified as: **tree edges** (to an unvisited node, part of the DFST), **back edges** (to an ancestor, indicating a cycle), **forward edges** (to a descendant, not a child), and **cross edges** (between unrelated branches).

Back edges satisfy dfn(target) ≤ dfn(source). This inequality provides a simple algorithmic test for back edges.

### Loops in Flow Graphs

A **natural loop** is defined by a back edge m → n and consists of n plus all nodes that can reach m without passing through n. The node n is the **loop header**. Essential properties: the header dominates all nodes in the loop; there is a single entry point; there is at least one path back to the header.

To construct a natural loop, collect all nodes that can reach the back-edge tail m while avoiding the header n, then add n to the set. The union is the loop body. Natural loops may be nested: a loop L₁ is nested inside L₂ if the header of L₁ belongs to L₂. The nesting relationship forms a tree.

A **pre-header** is an empty block inserted before the loop header. All incoming edges from outside the loop are redirected to the pre-header, which has a single edge to the header. Pre-headers simplify loop optimizations by providing a single point for code hoisting.

### Reducible Flow Graphs

A flow graph is **reducible** if it can be collapsed to a single node by repeatedly applying: T1 (remove a self-loop) and T2 (if a node has a unique predecessor, merge it into that predecessor). Equivalently, a reducible graph contains no cycle with two entry points. Structured programs (using only if-then-else, while, and for) always produce reducible flow graphs. Irreducible graphs arise from unrestricted gotos and can be transformed using **node splitting**, which duplicates code at the cost of increased program size.

### Applications

Dominators determine the safety of code motion: an expression may be moved to a block that dominates all uses. Natural-loop detection enables loop optimizations. Reducibility ensures fast convergence of iterative data-flow analysis because the depth of the loop-nesting tree bounds the number of iterations.

## Example

### Example 11.1: Dominator and Loop Detection

Flow graph edges: entry → B1, B1 → B2, B2 → B3, B2 → B4, B3 → B2, B4 → exit.

Dominators: entry dom all; B1 dom all except entry; B2 dom B2, B3, B4, exit; B3 dom only B3; B4 dom only B4. idom(B1) = entry, idom(B2) = B1, idom(B3) = B2, idom(B4) = B2, idom(exit) = B2.

Back edge: B3 → B2 (B2 dominates B3). Natural loop: header B2, body {B3}. Well-structured loop with single entry point.

## Summary

Control-flow analysis transforms instruction sequences into graphs. Dominators establish block hierarchy and enable safe code motion. Depth-first search identifies back edges for loop detection. Natural loops have a single header and are amenable to optimization. Reducibility ensures convergence properties for iterative algorithms.

## Exercises

### Review Questions

1. What distinguishes a basic block leader? How are blocks identified?
2. Define the dominator relationship and immediate dominator.
3. What is a back edge in a DFST, and how is it related to natural loops?
4. Define reducible flow graphs. Why is reducibility beneficial?
5. What is a loop pre-header and what optimizations does it enable?

### Application Problems

1. For edges entry→B1, B1→B2, B1→B3, B2→B4, B3→B4, B4→B5, B4→B6, B5→B7, B6→B7, B7→B1, B7→exit: compute dominators, draw the dominator tree, and identify natural loops.
2. Perform DFS on the flow graph from Problem 1. Assign dfn and classify each edge.
3. Convert this C code into a flow graph:
   ```c
   int x = 0;
   for (int i = 0; i < n; i++) {
       if (a[i] > 0) x += a[i];
       else x -= a[i];
   }
   return x;
   ```
4. Determine reducibility of entry→A, A→B, A→C, B→D, C→D, D→C, D→exit. If irreducible, apply node splitting.

### Challenge Problem

1. Implement CFA: take TAC, partition into basic blocks, build the flow graph, compute dominators using the iterative algorithm, and detect natural loops. Test on code with two nested loops and conditionals. Print the dominator tree and loop-nesting structure.
