# Chapter 9: Extended TM Models and the Church-Turing Thesis

## Learning Objectives

By the end of this chapter, you should be able to: describe extended TM models (multi-dimensional, random-access, offline); understand unrestricted grammars and their equivalence to TMs; distinguish recursive from recursively enumerable languages; understand primitive recursive and partial recursive functions; articulate the Church-Turing thesis and its implications; describe alternative models of computation and their equivalence.

## Theory

### Extended Turing Machine Models

Several extensions to the basic TM have been proposed, and all turn out to be equivalent in power:

**Multi-dimensional TM**: The tape extends in two or more dimensions. The head can move up, down, left, or right. This can be simulated on a standard TM by flattening the grid using a pairing function (like the Cantor pairing function $\pi(x, y) = \frac{(x+y)(x+y+1)}{2} + y$).

**Random-Access TM**: The TM has an additional "address tape" on which it can write an address; a special instruction loads the symbol at that position on the work tape. This allows constant-time random access rather than sequential scanning. Despite the speed advantage, it is no more powerful computationally: a standard TM can simulate random access by scanning to the required position.

**Offline TM**: The input is on a separate read-only tape, and the work tape is the only rewritable tape. This model is used in complexity theory to isolate space complexity (the input tape does not count toward space usage).

**Oblivious TM**: A TM whose head movement depends only on time (step number), not on input. Every TM can be converted to an oblivious TM.

### Unrestricted Grammars

An **unrestricted grammar** is a 4-tuple $G = (V, \Sigma, R, S)$ where productions are of the form $\alpha \to \beta$ with $\alpha, \beta \in (V \cup \Sigma)^*$ and $\alpha$ contains at least one variable. Unlike CFGs, the left-hand side can be a string, not just a single variable. This allows productions to depend on context:

$$\alpha A \beta \to \alpha \gamma \beta$$

**Theorem 9.1**: Unrestricted grammars generate exactly the recursively enumerable languages.

**Proof sketch**: Given a TM $M$, construct an unrestricted grammar that simulates $M$'s computation in reverse: starting from an accepting configuration, the grammar generates all initial configurations (inputs) that $M$ accepts. Conversely, given an unrestricted grammar, a nondeterministic TM can enumerate derivations and accept those that yield the input string. $\square$

### Recursive and Recursively Enumerable Languages

**Definition**: A language $L$ is:

- **recursive** (decidable) if there exists a TM that decides $L$ (halts on all inputs).
- **recursively enumerable** (RE, recognizable) if there exists a TM that recognizes $L$ (accepts all strings in $L$ and may loop on strings not in $L$).

**Theorem 9.2**: $L$ is recursive iff both $L$ and $\overline{L}$ are RE.

**Proof**: ($\Rightarrow$) If $L$ is recursive, a decider for $L$ also recognizes $L$, and by flipping accept/reject, recognizes $\overline{L}$.

($\Leftarrow$) If both $L$ and $\overline{L}$ are RE, let $M_1$ recognize $L$ and $M_2$ recognize $\overline{L}$. Simulate $M_1$ and $M_2$ in parallel (using a 2-tape TM, alternating steps). Exactly one will eventually accept. If $M_1$ accepts, accept; if $M_2$ accepts, reject. This TM always halts and decides $L$. $\square$

### Primitive Recursive Functions

The class of **primitive recursive functions** is defined inductively from basic functions using composition and primitive recursion:

**Basic functions**:
1. Zero: $Z(x) = 0$
2. Successor: $S(x) = x + 1$
3. Projection: $P_i^n(x_1, \ldots, x_n) = x_i$

**Building operations**:
1. **Composition**: $f(g_1(\vec{x}), \ldots, g_k(\vec{x}))$
2. **Primitive recursion**: $f(0, \vec{x}) = g(\vec{x})$, $f(n+1, \vec{x}) = h(f(n, \vec{x}), n, \vec{x})$

All primitive recursive functions are total (defined for all inputs). Examples include addition, multiplication, exponentiation, factorial, and the Ackermann function's early levels.

However, not all computable functions are primitive recursive. The **Ackermann function**:

$$A(0, n) = n + 1$$
$$A(m, 0) = A(m-1, 1)$$
$$A(m, n) = A(m-1, A(m, n-1))$$

grows faster than any primitive recursive function and is computable but not primitive recursive.

### Partial Recursive Functions and the Church-Turing Thesis

Adding the **minimization** operator ($\mu$-operator) to primitive recursive functions gives the class of **partial recursive functions**:

$$\mu y [g(\vec{x}, y) = 0] = \text{the least } y \text{ such that } g(\vec{x}, y) = 0, \text{ if such } y \text{ exists}$$

This operator introduces partiality: if no such $y$ exists, the function is undefined.

**Theorem 9.3**: The class of partial recursive functions equals the class of functions computable by a Turing machine.

**Church-Turing Thesis**: The intuitive notion of "effectively computable" coincides with the formal notion of Turing machine computability.

This is a thesis, not a theorem — it cannot be proved formally because "effective computability" is intuitive. However, overwhelming evidence supports it:
- All proposed formalizations of computability are equivalent: TMs, $\lambda$-calculus, partial recursive functions, Post systems, Markov algorithms, counter machines, cellular automata.
- No counterexample has ever been found.
- Every intuitively computable function has been shown to be TM-computable.

## Examples

### Example 1: Recursive vs. RE

$L_1 = \{ \langle M, w \rangle \mid M \text{ is a DFA that accepts } w \}$ is recursive (we can simulate $M$ on $w$; the simulation always halts).

$L_2 = \{ \langle M, w \rangle \mid M \text{ is a TM that accepts } w \}$ is RE but not recursive (this is the $A_{\text{TM}}$ problem — Chapter 10 proves undecidability).

$L_3 = \{ \langle M \rangle \mid M \text{ is a TM that halts on all inputs} \}$ is not even RE. (Proved via reduction from $\overline{A_{\text{TM}}}$.)

### Example 2: Primitive Recursive Functions

Define addition: $\text{add}(0, y) = P_1^1(y) = y$; $\text{add}(n+1, y) = S(P_1^3(\text{add}(n, y), n, y)) = \text{add}(n, y) + 1$.

Define multiplication: $\text{mult}(0, y) = Z(y) = 0$; $\text{mult}(n+1, y) = \text{add}(P_1^3(\text{mult}(n, y), n, y), y) = \text{mult}(n, y) + y$.

### Example 3: The Ackermann Function

Compute $A(1, 2)$:
$A(1, 2) = A(0, A(1, 1))$
$A(1, 1) = A(0, A(1, 0))$
$A(1, 0) = A(0, 1) = 2$
$A(1, 1) = A(0, 2) = 3$
$A(1, 2) = A(0, 3) = 4$

$A(2, 2) = A(1, A(2, 1)) = A(1, A(1, A(2, 0))) = A(1, A(1, A(1, 1))) = A(1, A(1, 3)) = A(1, 5) = 7$

$A(3, 3)$ is already $2^{2^{2^2}} - 3 = 65533$, and $A(4, 3)$ is astronomically large.

## Summary

- Extended TM models (multi-dimensional, random-access, offline) are equivalent to the standard TM.
- Unrestricted grammars generate exactly the RE languages.
- Recursive languages are those for which both $L$ and $\overline{L}$ are RE.
- Primitive recursive functions are total and built from basic functions by composition and primitive recursion.
- Partial recursive functions add the $\mu$-operator and equal TM-computable functions.
- The Church-Turing thesis asserts that TMs capture all effective computation.
- Alternative models ($\lambda$-calculus, Post systems, cellular automata) confirm the thesis.

## Exercises

### Review Questions

1. What distinguishes an unrestricted grammar from a context-free grammar?
2. Explain the difference between a recursive language and a recursively enumerable language.
3. Why is the Church-Turing thesis a thesis rather than a theorem?
4. What operation distinguishes partial recursive from primitive recursive functions?

### Application Problems

5. Show that the class of RE languages is closed under union and intersection but not complement.
6. Define the factorial function $n!$ using primitive recursion.
7. Prove that if $L$ is recursive, then $\overline{L}$ is recursive.
8. Show that a TM with a 2-dimensional tape can be simulated by a standard TM.

### Challenge Problem

9. Prove that there exists a function that is not primitive recursive but is computable by a TM. (Hint: diagonalize over all primitive recursive functions, or study the Ackermann function's growth rate.)
