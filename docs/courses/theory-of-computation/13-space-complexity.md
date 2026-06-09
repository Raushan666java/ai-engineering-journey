# Chapter 13: Space Complexity

## Learning Objectives

By the end of this chapter, you should be able to: define space complexity and the classes $PSPACE$, $NPSPACE$, $L$, $NL$; prove Savitch's theorem and use it to relate $PSPACE$ and $NPSPACE$; prove PSPACE-completeness of TQBF; prove NL-completeness of PATH; understand the relationship between time and space complexity classes.

## Theory

### Space Complexity

Let $M$ be a deterministic TM that halts on all inputs. The **space complexity** of $M$ is the function $f : \mathbb{N} \to \mathbb{N}$ where $f(n)$ is the maximum number of tape cells $M$ uses on any input of length $n$. For offline TMs, the input tape is not counted (it is read-only).

**Definition**: $SPACE(f(n)) = \{ L \mid L \text{ is decided by an } O(f(n)) \text{ space TM} \}$.
$NSPACE(f(n)) = \{ L \mid L \text{ is decided by an } O(f(n)) \text{ space NTM} \}$.

### The Classes L and NL

$L = SPACE(\log n)$ — problems solvable with logarithmic space.
$NL = NSPACE(\log n)$ — problems solvable with logarithmic space on an NTM.

Logarithmic space is interesting because it is sublinear: the TM cannot store the entire input; it must process the input as a stream or use the read-only input efficiently.

**Example problems in $L$**:
- Connectivity in undirected graphs (the result that this is in $L$ is nontrivial — **Reingold's theorem**, 2005)
- Determining if a string is in a regular language
- Arithmetic with fixed-size numbers

**Example problem in $NL$**:
- PATH (also called ST-CONN): given directed graph $G$ and vertices $s, t$, is there a path from $s$ to $t$?

### NL-Completeness

**Definition**: $L$ is **NL-complete** if:
1. $L \in NL$
2. For every $A \in NL$, $A \leq_L L$ (log-space reducible)

**Theorem 13.1**: PATH is NL-complete.

**Proof**: PATH is in $NL$: nondeterministically guess the next vertex on the path from $s$ to $t$, maintaining only the current vertex in memory. If we reach $t$ within $n$ steps, accept.

To show completeness, let $L \in NL$ be recognized by NTM $N$ using $O(\log n)$ space. The configuration graph of $N$ on input $w$ has vertices = configurations, edges = possible transitions. $N$ accepts $w$ iff there is a path from the start configuration to an accepting configuration in this graph. The reduction writes this configuration graph (polynomial size, but the important part is that it can be produced by a log-space transducer). $\square$

### The Classes PSPACE and NPSPACE

$PSPACE = \bigcup_{k \geq 0} SPACE(n^k)$
$NPSPACE = \bigcup_{k \geq 0} NSPACE(n^k)$

### Savitch's Theorem

**Theorem 13.2 (Savitch)**: For any function $f(n) \geq \log n$,

$$NSPACE(f(n)) \subseteq SPACE(f(n)^2)$$

**Proof**: Let $N$ be an NTM with space bound $f(n)$. Define a reachability predicate $CANREACH(c_1, c_2, t)$ which is true iff there is a path of length at most $t$ from configuration $c_1$ to $c_2$ in $N$'s configuration graph.

$CANREACH(c_1, c_2, t)$ is computed recursively:
- If $t = 1$: check if $c_1 = c_2$ or $c_1 \vdash c_2$ in one step.
- If $t > 1$: for each configuration $c_m$:
  Compute $CANREACH(c_1, c_m, t/2)$ and $CANREACH(c_m, c_2, t/2)$.
  If both true, return true.

The recursion depth is $\log(2^{O(f(n))}) = O(f(n))$. Each recursive call requires $O(f(n))$ space to store the current configuration, giving total space $O(f(n)^2)$. $\square$

**Corollary**: $PSPACE = NPSPACE$. Unlike time, nondeterminism does not increase the power of polynomial space.

### PSPACE-Completeness

**Definition**: $L$ is **PSPACE-complete** if:
1. $L \in PSPACE$
2. For every $A \in PSPACE$, $A \leq_p L$

**Theorem 13.3**: TQBF (True Quantified Boolean Formulas) is PSPACE-complete.

**Proof sketch**: TQBF is the problem of determining whether a fully quantified Boolean formula $\phi = Q_1 x_1 Q_2 x_2 \cdots Q_n x_n \, \psi(x_1, \ldots, x_n)$ is true, where each $Q_i$ is $\exists$ or $\forall$.

Membership in $PSPACE$: recursively evaluate the formula. For $\exists x_i \phi$, return true if $\phi[x_i = 0] \lor \phi[x_i = 1]$. For $\forall x_i \phi$, return true if $\phi[x_i = 0] \land \phi[x_i = 1]$. The recursion depth is $n$, and each level stores one bit, so $O(n)$ space suffices.

Completeness: Given any $L \in PSPACE$ recognized by TM $M$ using $n^k$ space, reduce $w$ to a QBF $\phi$ that is true iff $M$ accepts $w$. The construction extends the Cook-Levin tableau approach with alternating quantifiers. For each time step $t$, we introduce variables for the configuration at time $t$. The formula $\exists c_0 \exists c_f \forall t_1 \cdots$ expresses that there exists a computation path from the start to an accepting configuration. The alternation of quantifiers encodes the nondeterministic choices (existential) and their verification (universal). $\square$

### Relationship Between Classes

$$L \subseteq NL \subseteq P \subseteq NP \subseteq PSPACE \subseteq EXP$$

Known strict containments:
- $L \neq PSPACE$ (by space hierarchy theorem)
- $P \neq EXP$ (by time hierarchy theorem)
- $NL \neq PSPACE$ (by space hierarchy theorem)

Open questions:
- $L \stackrel{?}{=} NL$
- $P \stackrel{?}{=} PSPACE$ (probably not, but unknown)
- $NP \stackrel{?}{=} PSPACE$

### The Space Hierarchy Theorem

**Theorem 13.4**: For any space-constructible $f(n) \geq \log n$, there exists a language decidable in $O(f(n))$ space but not in $o(f(n))$ space.

**Proof**: Diagonalization. Construct a TM $D$ that, on input $\langle M \rangle$, simulates $M$ on $\langle M \rangle$ using $f(n)$ space while counting. If $M$ uses less than $f(n)$ space and halts, $D$ outputs the opposite. By the usual diagonalization argument, $L(D)$ separates $SPACE(f(n))$ from $SPACE(o(f(n)))$. $\square$

## Examples

### Example 1: PATH is in NL

For a directed graph $G$ with $n$ vertices, a log-space nondeterministic algorithm for PATH:

```
current = s
for i = 1 to n:
    if current == t: accept
    nondeterministically choose next vertex v
    if (current, v) is not an edge: reject
    current = v
reject
```

Only $O(\log n)$ bits are needed to store `current` and `i`.

### Example 2: TQBF

Evaluate $\phi = \exists x \, \forall y \, (x \lor y)$. 

For $x = 0$: $\forall y \, (0 \lor y) = \forall y \, y = (0 \land 1) = 0$ (false).
For $x = 1$: $\forall y \, (1 \lor y) = \forall y \, 1 = 1$ (true).

So there exists $x = 1$ making the formula true. $\phi$ is true.

### Example 3: Savitch's Theorem

Apply to PATH. The standard deterministic algorithm for PATH (BFS/DFS) uses $O(n)$ space. But Savitch's theorem gives a $O(\log^2 n)$ space algorithm!

The $CANREACH(s, t, n)$ recursion divides the path length in half each time, requiring $O(\log n)$ recursive calls, each storing a vertex name of $O(\log n)$ bits. Total: $O(\log^2 n)$ space.

## Summary

- $L = SPACE(\log n)$, $NL = NSPACE(\log n)$
- PATH is NL-complete
- $PSPACE = NPSPACE$ by Savitch's theorem ($NSPACE(f) \subseteq SPACE(f^2)$)
- TQBF is PSPACE-complete
- $L \subseteq NL \subseteq P \subseteq NP \subseteq PSPACE \subseteq EXP$
- Space hierarchy theorem proves strict containments
- Many games (GO, generalized chess, Othello with $n \times n$ boards) are PSPACE-complete

## Exercises

### Review Questions

1. Why is logarithmic space interesting even though it is sublinear?
2. Explain Savitch's theorem in your own words. Why is the time bound exponential even though the space bound is $O(f^2)$?
3. What distinguishes PSPACE-complete from NP-complete problems?
4. Why does the configuration graph of an $f(n)$-space NTM have $2^{O(f(n))}$ vertices?

### Application Problems

5. Show that the language $\{ 0^n 1^n \mid n \geq 0 \}$ is in $L$ (log-space decidable).
6. Prove that $NL \subseteq P$ by showing a polynomial-time algorithm for PATH.
7. Show that TQBF is in PSPACE by giving a recursive evaluation algorithm.
8. Prove that if $PSPACE = NP$, then $NP = coNP$. (Hint: PSPACE is closed under complement.)

### Challenge Problem

9. The **geography game** (a two-player game on a directed graph where players alternately move a token along edges, and vertices cannot be revisited) is PSPACE-complete. Show that GEOGRAPHY is in PSPACE by describing a recursive algorithm using polynomial space.
