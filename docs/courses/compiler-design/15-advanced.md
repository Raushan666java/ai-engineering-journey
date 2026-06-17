# Chapter 15: Advanced Topics in Compilation

## Learning Objectives

After completing this chapter, students will be able to: explain the architecture of just-in-time compilers including HotSpot and V8; describe interprocedural analysis and optimization; outline profile-guided optimization workflows; represent programs in static single assignment (SSA) form; and understand the principles of auto-parallelization.

## Theory

![Advanced Compilation Topics — JIT, IPA, PGO, SSA, Auto-Parallelization](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/compiler-design/ch-15-advanced.png)

### Just-In-Time Compilation

Just-in-time (JIT) compilation translates intermediate code into native machine code at runtime, combining the portability of an interpreted IR with execution speeds approaching those of ahead-of-time compiled code. The JIT compiler operates during program execution, compiling only those methods or code regions that are frequently executed.

**Oracle HotSpot JVM**: HotSpot identifies **hot methods** and **hot loops** through profiling. Methods initially execute in the interpreter. When a method's invocation count exceeds a threshold, HotSpot compiles it with C1 (client compiler), a lightweight compiler that performs basic optimizations. If the method continues to be heavily used, it is recompiled with C2 (server compiler), which applies aggressive optimizations such as inlining, loop unrolling, and intrinsic substitution. The system also supports **tiered compilation**, where code moves through multiple optimization levels as its hotness increases.

HotSpot's **deoptimization** mechanism allows the compiler to make optimistic assumptions (for example, that a method has only one receiver type). If those assumptions are violated at runtime, the execution rolls back to an interpreter frame with correct state, enabling the compiler to speculate aggressively without correctness risk.

**Google V8 (JavaScript)**: V8 compiles JavaScript through multiple tiers. The initial tier, Sparkplug, provides fast compilation with minimal optimization. The second tier, TurboFan, performs extensive optimization including type specialization based on observed value types. V8 employs **hidden classes** (maps) and **inline caching** to optimize property access dynamically. When a function is called repeatedly with objects of the same hidden class, the compiled code assumes that type, with a guard check and a fallback to a more general path.

### Interprocedural Analysis (IPA) and Optimization (IPO)

Interprocedural analysis extends compiler reasoning across function boundaries. While intraprocedural analysis considers each function in isolation, IPA propagates information about side effects, aliasing, and call graphs across the entire program.

Key IPA techniques include:

**Call-graph construction**: building a directed graph where nodes are functions and edges represent call sites. For languages supporting function pointers or virtual dispatch, call-graph construction uses **class hierarchy analysis** (CHA), **rapid type analysis** (RTA), or **variable type analysis** (VTA) to overapproximate the set of possible callees.

**Inlining**: replacing a call site with a copy of the callee's body. Inlining eliminates call overhead, exposes the callee's code to surrounding optimizations, and can enable constant propagation across the call boundary. The compiler selects inlining candidates based on heuristics involving function size, call frequency, and depth.

**Constant propagation across calls**: when a function is always called with a constant argument, the compiler may specialize a clone of the function with that constant embedded.

**Mod/ref analysis**: determines which global variables or memory locations a function may modify or reference, enabling optimizations such as code motion across call sites.

### Profile-Guided Optimization

Profile-guided optimization (PGO) uses runtime profiling data to guide compiler decisions. The workflow proceeds in three phases:

**Instrumentation phase**: the compiler inserts counters into the program at edges, basic blocks, and call sites. An instrumented executable is built.

**Training phase**: the instrumented program executes on representative inputs. Counters record execution frequencies, branch probabilities, and cache-miss information.

**Optimization phase**: the compiler reads the profile data and recompiles the program. Profiles guide decisions such as: which branches to predict as taken, which functions to inline, which basic blocks to lay out contiguously, and which loop unrolling factors to apply.

PGO can produce performance improvements of 10–30% beyond static optimization alone.

### Static Single Assignment (SSA) Form

Static single assignment form is an intermediate representation in which each variable is assigned exactly once, and each use of a variable is dominated by its definition. SSA form simplifies and improves the precision of many data-flow analyses.

SSA is constructed by inserting **φ-functions** (phi-functions) at control-flow merge points where multiple definitions of a variable converge. A φ-function has the form `x = φ(x₁, x₂, ..., xₙ)`, where the arguments correspond to incoming edges. The semantics are that x receives the value of the argument corresponding to the edge taken at runtime.

The **dominance frontier** governs φ-insertion: a φ-function for variable v is placed at the entry of every block B where v is defined in multiple predecessors or where B is in the dominance frontier of a block defining v.

Optimizations enabled or improved by SSA form include:

- **Global value numbering**: two expressions may be proven equivalent more directly because each variable has a unique definition point.
- **Dead-code elimination**: if a variable has no uses other than as a φ-function argument, the defining instruction may be removed.
- **Constant propagation**: the lattice-based algorithm (Chapter 12) becomes simpler and more precise because φ-functions serve as the only merge points.

SSA form is also essential for **sparse conditional constant propagation** (SCCP), which simultaneously propagates constants and detects dead code in a single pass.

### Auto-Parallelization

Auto-parallelization transforms sequential code into parallel code automatically, targeting multi-core processors or vector units. The compiler must verify that the transformation preserves program semantics.

The core analysis determines which loop iterations are **independent**. Two iterations of a loop are independent if no value produced in one iteration is consumed or overwritten in another. This is determined by computing **loop-carried dependencies**: a dependence from iteration i to iteration j exists if statement S₂ in iteration j uses a value defined by statement S₁ in iteration i.

Polytope models provide a mathematical framework for dependence analysis of affine loop nests (loops with bounds and indices expressible as linear functions). The model represents each iteration as a point in an integer polyhedron and uses linear programming to determine whether dependences exist.

When dependences prevent full parallelization, the compiler may apply transformations to remove or reduce them: privatization (giving each thread a private copy of a variable), reduction recognition (recognizing that a sum across iterations is associative and may be accumulated in parallel), and loop distribution (separating dependent and independent computations).

## Example

### Example 15.1: SSA Form Construction

Original code:
```
x = 1;
if (cond) {
    x = 2;
}
y = x + 1;
```

SSA form:
```
x₁ = 1;
if (cond) {
    x₂ = 2;
}
x₃ = φ(x₁, x₂);
y₁ = x₃ + 1;
```

The φ-function selects x₁ if the true branch was not taken, x₂ otherwise.

## Summary

JIT compilation balances startup speed with peak performance by tiered compilation and adaptive optimization. Interprocedural analysis extends reasoning across functions. PGO profiles real execution to guide optimization decisions. SSA form provides a clean compiler IR that simplifies classic optimizations. Auto-parallelization exploits multi-core and SIMD hardware through careful dependence analysis.

## Exercises

### Review Questions

1. Describe the three tiers of compilation in the HotSpot JVM. What triggers promotion between tiers?
2. What is deoptimization, and why is it essential for speculative just-in-time compilation?
3. Explain the purpose of φ-functions in SSA form and how dominance frontiers determine their placement.
4. What is profile-guided optimization, and what performance improvements can it typically provide over static optimization alone?

### Application Problems

1. Convert the following code into SSA form, inserting φ-functions where necessary:
   ```c
   int f(int n) {
       int x = 0;
       int i = 0;
       while (i < n) {
           x = x + i;
           i = i + 1;
       }
       return x;
   }
   ```
2. For the call graph with edges: main → A, main → B, A → C, A → D, B → D, D → E. Which functions would be strong inlining candidates if all call counts are equal and functions are sized A:100, B:20, C:30, D:60, E:10 instructions? Justify your choices assuming a 200-instruction inlining budget.
3. Given the loop:
   ```c
   for (i = 1; i < N; i++) {
       a[i] = a[i-1] + b[i];
   }
   ```
   Identify the loop-carried dependence. Can this loop be parallelized? If not, what transformation would be required?
4. Profile-guided optimization uses runtime data. Compare the advantages of PGO with the additional build complexity. How might profile data from one training input mislead optimization for other inputs?

### Challenge Problem

1. Implement an SSA construction pass in your chosen language. Your implementation must: (a) compute the dominance tree for a flow graph; (b) compute dominance frontiers; (c) insert φ-functions at appropriate merge points; (d) rename variables so that each definition has a unique SSA name. Demonstrate your pass on a program containing at least three basic blocks, a loop, and a conditional branch. Show the original three-address code and the resulting SSA form, verifying that each variable is assigned exactly once.
