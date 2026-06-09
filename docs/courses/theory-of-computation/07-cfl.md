# Chapter 7: Properties of Context-Free Languages

## Learning Objectives

By the end of this chapter, you should be able to: apply the pumping lemma for CFLs to prove non-context-freeness; prove closure properties of CFLs; apply decision algorithms for CFLs (emptiness, membership, finiteness); distinguish operations under which CFLs are closed versus not closed; use the CFL pumping lemma strategically to choose the right string.

## Theory

### Pumping Lemma for Context-Free Languages

The pumping lemma for CFLs exploits the structure of parse trees in Chomsky Normal Form: a sufficiently deep tree must contain a path with repeated variables, and the subtree between repetitions can be "pumped."

**Theorem 7.1 (Pumping Lemma for CFLs)**: If $L$ is a context-free language, then there exists a constant $p \in \mathbb{N}$ (the pumping length) such that for any $w \in L$ with $|w| \geq p$, we can write $w = uvxyz$ satisfying:

1. $|vy| \geq 1$ (at least one of $v$ or $y$ is non-empty)
2. $|vxy| \leq p$ (the pumped region is bounded)
3. For all $i \geq 0$, $uv^i xy^i z \in L$

**Proof**: Let $G$ be a CFG in CNF generating $L$. The parse tree for any sufficiently long string has a path with at least $|V| + 1$ internal nodes. By the pigeonhole principle, some variable $A$ repeats on this path. Let $w = uvxyz$ where $vxy$ is derived from the upper $A$ and $y$ from the lower $A$ (with $v$ and $y$ being the parts to the left and right of the nested $A$, respectively). Replacing the upper $A$'s subtree with the lower $A$'s subtree gives $uv^2 xy^2 z$; removing the nested $A$ gives $uxz$. By induction, $uv^i xy^i z \in L$ for all $i \geq 0$. The bound $|vxy| \leq p$ holds because the distance between repeats is bounded by the number of variables times the maximum derivation length. $\square$

### Using the Pumping Lemma for CFLs

To prove $L$ is not context-free:

1. Assume $L$ is a CFL with pumping length $p$.
2. Choose $w \in L$ depending on $p$ such that $|w| \geq p$.
3. Show that for **any** decomposition $w = uvxyz$ with $|vy| \geq 1$ and $|vxy| \leq p$, there exists $i \geq 0$ with $uv^i xy^i z \notin L$.
4. Contradiction, so $L$ is not context-free.

### Closure Properties

CFLs are closed under:

| Operation | Construction |
|-----------|-------------|
| Union $L_1 \cup L_2$ | $S \to S_1 \mid S_2$ |
| Concatenation $L_1 L_2$ | $S \to S_1 S_2$ |
| Kleene star $L^*$ | $S \to S_1 S \mid \epsilon$ |
| Reversal $L^R$ | Reverse right-hand sides of productions |
| Substitution | Replace each terminal with a CFL |

CFLs are **not** closed under:

| Operation | Counterexample |
|-----------|---------------|
| Intersection $L_1 \cap L_2$ | $\{ a^n b^n c^m \} \cap \{ a^n b^m c^m \} = \{ a^n b^n c^n \}$ |
| Complement $\overline{L}$ | Follows from non-closure under intersection (De Morgan) |
| Difference | Follows from above |

**Theorem 7.2 (Closure under Regular Intersection)**: If $L$ is a CFL and $R$ is regular, then $L \cap R$ is a CFL.

**Proof**: Construct a PDA for $L$ and a DFA for $R$. Build a product machine where the PDA component operates on the stack and the DFA component tracks state. The resulting PDA has states $Q_{\text{PDA}} \times Q_{\text{DFA}}$ and transitions that synchronize on input. $\square$

### Decision Algorithms for CFLs

Several properties of CFLs are decidable (there is an algorithm to determine them):

1. **Emptiness**: Is $L(G) = \emptyset$? Mark variables that derive terminals, then check if $S$ is marked. This is equivalent to checking if there exists a terminal derivation from $S$, which is a graph reachability problem on the dependency graph of variables.

2. **Membership**: Does $G$ generate a given string $w$? The **CYK algorithm** (Cocke-Younger-Kasami) solves this in $O(n^3)$ time for a grammar in CNF, where $n = |w|$. It uses dynamic programming: fill a table $T[i][j]$ = set of variables deriving $w[i \ldots j]$.

3. **Finiteness**: Is $L(G)$ finite? After removing useless symbols, check if the grammar has a cycle $A \Rightarrow^* uAv$ with $uv \neq \epsilon$. If so, the language is infinite.

4. **Non-emptiness of complement** (for regular languages only): Not applicable — CFLs are not closed under complement, so we cannot decide equivalence either.

## Examples

### Example 1: Pumping Lemma — $L = \{ a^n b^n c^n \mid n \geq 0 \}$

Assume $L$ is a CFL with pumping length $p$. Choose $w = a^p b^p c^p \in L$.

By the pumping lemma, $w = uvxyz$ with $|vxy| \leq p$ and $|vy| \geq 1$.

Since $|vxy| \leq p$, $vxy$ can span at most two different symbols (because any substring of length $p$ in $a^p b^p c^p$ can involve at most two of $a, b, c$). There are three cases:

- If $vxy$ contains no $a$s, then pumping increases only $b$s and/or $c$s, breaking the equality $|w|_a = |w|_b = |w|_c$.
- If $vxy$ contains no $b$s, similar argument.
- If $vxy$ contains no $c$s, similar argument.

In every case, pumping changes the count of at most two symbol types, so $uv^2 xy^2 z$ has unequal counts. Contradiction. Therefore $L$ is not context-free.

### Example 2: Pumping Lemma — $L = \{ ww \mid w \in \{0, 1\}^* \}$

Assume $L$ is a CFL with pumping length $p$. Choose $w = 0^p 1^p 0^p 1^p$.

Consider $w = uvxyz$ with $|vxy| \leq p$. Since $|vxy| \leq p$, $vxy$ lies within a window of length $p$ of the string. There are five regions in $w$: $0^p$, $1^p$, $0^p$, $1^p$. The pumped portion $vxy$ can span at most two adjacent regions.

If $vxy$ lies entirely within the first half ($0^p 1^p$), then pumping increases only the first half, and $uv^2 xy^2 z$ has the form $0^{p+k} 1^{p+\ell} 0^p 1^p$ which is not $uu$ for any $u$.

Similar arguments cover all other placements. Contradiction. Therefore $L$ is not context-free.

### Example 3: CYK Algorithm

Consider grammar $S \to AB \mid BC$, $A \to BA \mid a$, $B \to CC \mid b$, $C \to AB \mid a$.

Test membership of $w = baaba$ using CYK:

Initialize table for $n = 5$:
$T[1][1] = \{B\}$ ($b$)
$T[2][1] = \{A, C\}$ ($a$)
$T[3][1] = \{A, C\}$ ($a$)
$T[4][1] = \{B\}$ ($b$)
$T[5][1] = \{A, C\}$ ($a$)

Fill for $k = 2$ to 5:
$T[1][2]$: from $B$ at 1 and $A, C$ at 2: $BA$ ($S, A$), $BC$ ($S$). So $T[1][2] = \{S, A\}$.

Continue filling... $S \in T[1][5]$ iff $w$ is generated.

### Example 4: Closure Properties

Show that $L = \{ a^n b^n c^m \mid n, m \geq 0 \}$ is a CFL.

We can write $L = L_1 \circ L_2$ where $L_1 = \{ a^n b^n \mid n \geq 0 \}$ (CFL) and $L_2 = c^*$ (regular). Since CFLs are closed under concatenation, $L$ is a CFL.

Alternatively, $L = \{ a^n b^n \} \cdot c^*$, which directly gives a grammar:
$S \to AB$, $A \to aAb \mid \epsilon$, $B \to cB \mid \epsilon$.

## Summary

- The pumping lemma for CFLs uses repeated variables in parse trees to prove non-context-freeness.
- CFLs are closed under union, concatenation, Kleene star, reversal, substitution, and intersection with regular languages.
- CFLs are not closed under intersection or complement.
- The CYK algorithm decides membership for CFLs in $O(n^3)$ time.
- Emptiness and finiteness are also decidable.
- Unlike regular languages, equivalence and ambiguity of CFLs are undecidable.

## Exercises

### Review Questions

1. Why does the CFL pumping lemma pump two parts ($v$ and $y$) while the regular version pumps one ($y$)?
2. Explain the intuition why CFLs are closed under union but not intersection.
3. What is the running time of CYK and why?
4. Why is ambiguity of CFGs undecidable?

### Application Problems

5. Prove that $L = \{ a^n b^m c^n d^m \mid n, m \geq 0 \}$ is context-free.
6. Prove that $L = \{ a^i b^j c^k \mid i < j < k \}$ is not context-free.
7. Prove that $L = \{ 0^{n^2} \mid n \geq 0 \}$ is not context-free.
8. Run CYK on $w = aabba$ using $S \to AB \mid BA$, $A \to a$, $B \to b$.

### Challenge Problem

9. Prove that CFLs are closed under the operation $\text{swap}(L) = \{ yx \mid xy \in L \}$. Show that CFLs are **not** closed under $\text{permute}(L) = \{ w \mid w \text{ is a permutation of some } x \in L \}$.
