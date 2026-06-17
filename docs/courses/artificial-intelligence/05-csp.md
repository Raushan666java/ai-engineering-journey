# Chapter 5: Constraint Satisfaction Problems

---

## Learning Objectives

- Define a Constraint Satisfaction Problem (CSP) in terms of variables, domains, and constraints.
- Formalize real-world problems (e.g., scheduling, map coloring) as CSPs.
- Apply backtracking search for solving CSPs.
- Utilize constraint propagation techniques like Arc Consistency (AC-3).
- Implement heuristics such as Minimum Remaining Values (MRV) and Least Constraining Value (LCV) to accelerate search.

---

## Theory

![CSP Advanced Topics](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/artificial-intelligence/ch05-csp.png)

### Formal Definition of CSP
A Constraint Satisfaction Problem (CSP) consists of:
- **X**: A set of variables $\{X_1, X_2, ..., X_n\}$.
- **D**: A set of domains $\{D_1, D_2, ..., D_n\}$, one for each variable.
- **C**: A set of constraints that specify allowable combinations of values.

A **state** is defined by an assignment of values to some or all variables. An **assignment** is **consistent** if it does not violate any constraints. A **complete assignment** is one in which every variable is assigned. A **solution** is a consistent and complete assignment.

### Backtracking Search
Backtracking is a depth-first search specifically for CSPs. It chooses one variable at a time and attempts to assign a value. If a constraint is violated, it "backtracks" to the previous variable and tries a different value.

### Constraint Propagation
Instead of just searching, agents can use constraints to reduce the search space:
- **Node Consistency**: Every value in a variable's domain satisfies the variable's unary constraints.
- **Arc Consistency (AC-3)**: For every value in domain $D_i$, there exists some value in $D_j$ that satisfies the binary constraint between $X_i$ and $X_j$.
- **Path Consistency**: Extends arc consistency to triplets of variables.

### Search Heuristics
- **Minimum Remaining Values (MRV)**: Choose the variable with the fewest "legal" values left.
- **Degree Heuristic**: Choose the variable involved in the largest number of constraints on other unassigned variables.
- **Least Constraining Value (LCV)**: Given a variable, choose the value that rules out the fewest choices for neighboring variables.

---

## Examples

### Example 1: Map Coloring
Color the regions of a map (e.g., Australia) such that no two adjacent regions have the same color.
- **Variables**: WA, NT, Q, NSW, V, SA, T (Territories).
- **Domains**: {Red, Green, Blue}.
- **Constraints**: $WA \neq NT$, $WA \neq SA$, $NT \neq SA$, etc.
- **Code snippet (Python Backtracking Logic)**:
```python
def is_consistent(var, value, assignment, constraints):
    for neighbor in constraints[var]:
        if neighbor in assignment and assignment[neighbor] == value:
            return False
    return True

def backtrack(assignment, vars, domains, constraints):
    if len(assignment) == len(vars): return assignment
    var = [v for v in vars if v not in assignment][0]
    for value in domains[var]:
        if is_consistent(var, value, assignment, constraints):
            assignment[var] = value
            result = backtrack(assignment, vars, domains, constraints)
            if result: return result
            del assignment[var]
    return None
```
- **What it demonstrates**: The basic depth-first nature of CSP solvers.

### Example 2: The AC-3 Algorithm
Applying arc consistency to a small problem.
- **Setup**: $X$ has domain $\{1, 2\}$, $Y$ has domain $\{1, 2\}$, and constraint $X < Y$.
- **Process**:
  1. Check arc $(X, Y)$. For $X=1$, $Y=2$ works. For $X=2$, no $Y$ works. Remove 2 from $D_X$.
  2. Check arc $(Y, X)$. For $Y=1$, no $X$ works (since $D_X$ is now $\{1\}$). Remove 1 from $D_Y$.
- **Result**: $D_X = \{1\}, D_Y = \{2\}$. The solution is found by propagation alone.
- **What it demonstrates**: How constraints prune domains before search even begins.

---

## Summary

- CSPs are a special class of search problems where states are defined by variable assignments.
- Backtracking search is the foundational algorithm for CSPs.
- MRV and LCV heuristics can significantly improve backtracking performance.
- Constraint propagation (like AC-3) reduces the domain of variables by enforcing local consistency.
- Many real-world problems, from Sudoku to circuit layout, are modeled as CSPs.
- Intelligent backtracking (looking back) and forward checking (looking ahead) are key optimizations.

---

## Exercises

### Review Questions
1. How does a CSP differ from a general state-space search problem?
2. Explain the "Minimum Remaining Values" heuristic.
3. What is the difference between a hard constraint and a soft constraint?
4. Describe the termination condition for the AC-3 algorithm.

### Application Problems
1. Formalize the N-Queens problem as a CSP (define X, D, and C).
2. Trace the execution of AC-3 on a simple Sudoku 3x3 sub-grid.
3. Why is the Least Constraining Value heuristic used for value selection rather than variable selection?

### Challenge Problem
1. Some CSPs can be represented as **Constraint Graphs**. If the constraint graph is a tree, the CSP can be solved in $O(n d^2)$ time. Explain the algorithm used to solve tree-structured CSPs and why it is more efficient than general backtracking.
