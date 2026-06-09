# Chapter 4: Properties of Regular Languages

## Learning Objectives

By the end of this chapter, you should be able to: apply the pumping lemma to prove languages are not regular; prove closure properties of regular languages under various operations; construct automata for transformed languages; state and apply the Myhill-Nerode theorem to characterize regular languages; find the minimal DFA for a given language.

## Theory

### The Pumping Lemma for Regular Languages

The pumping lemma is a fundamental tool for proving that a language is **not** regular. It exploits the finite memory of DFAs: any sufficiently long string must cause a state repetition, and the substring between repetitions can be "pumped" (repeated arbitrarily) while still being accepted.

**Theorem 4.1 (Pumping Lemma)**: If $L$ is a regular language, then there exists a constant $p \in \mathbb{N}$ (the **pumping length**) such that for every string $w \in L$ with $|w| \geq p$, we can write $w = xyz$ satisfying:

1. $|y| \geq 1$ (y is non-empty)
2. $|xy| \leq p$ (the pumped portion is within the first p symbols)
3. For all $i \geq 0$, $xy^i z \in L$ (pumping)

**Proof**: Let $L$ be regular, so there exists a DFA $M = (Q, \Sigma, \delta, q_0, F)$ with $L(M) = L$. Let $p = |Q|$. Consider $w = a_1 a_2 \cdots a_n$ with $n \geq p$. Consider the sequence of states visited: $r_0 = q_0$, $r_1 = \delta(q_0, a_1)$, $r_2 = \delta(r_1, a_2)$, $\ldots$, $r_n$. By the pigeonhole principle, among $r_0, r_1, \ldots, r_p$ there must be two equal states $r_j = r_k$ with $j < k$. Let $x = a_1 \cdots a_j$, $y = a_{j+1} \cdots a_k$, $z = a_{k+1} \cdots a_n$. Then $\hat{\delta}(q_0, xy^i z) = \hat{\delta}(r_j, y^i z) = \hat{\delta}(r_k, z) = \hat{\delta}(r_j, z) = r_n \in F$, so $xy^i z \in L$ for all $i$. $\square$

### Using the Pumping Lemma

To prove $L$ is not regular by contradiction:

1. Assume $L$ is regular with pumping length $p$.
2. Choose $w \in L$ strategically (as a function of $p$) such that $|w| \geq p$.
3. Show that for **any** decomposition $w = xyz$ satisfying $|y| \geq 1$ and $|xy| \leq p$, there exists $i \geq 0$ such that $xy^i z \notin L$.
4. Contradiction, so $L$ is not regular.

### Closure Properties

Regular languages are closed under the following operations:

| Operation | Construction |
|-----------|-------------|
| Union $L_1 \cup L_2$ | NFA with $\epsilon$ to both |
| Intersection $L_1 \cap L_2$ | Product construction on DFAs |
| Complement $\overline{L}$ | Flip accepting/non-accepting in DFA |
| Concatenation $L_1 L_2$ | NFA concatenation |
| Kleene star $L^*$ | NFA star construction |
| Reversal $L^R$ | Reverse DFA edges, swap start/accept |
| Homomorphism $h(L)$ | Replace each symbol with $h(a)$ |
| Inverse homomorphism $h^{-1}(L)$ | DFA with modified transitions |
| Difference $L_1 \setminus L_2$ | $L_1 \cap \overline{L_2}$ |
| Suffix, Prefix, Substring | Construct appropriate DFAs |

**Theorem 4.2 (Closure under Homomorphism)**: Let $h : \Sigma^* \to \Gamma^*$ be a homomorphism (a substitution where each symbol maps to a string). If $L \subseteq \Sigma^*$ is regular, then $h(L)$ is regular.

**Proof**: Take a regular expression $R$ for $L$ and replace each symbol $a$ in $R$ with $h(a)$. The resulting expression denotes $h(L)$. $\square$

**Theorem 4.3 (Closure under Inverse Homomorphism)**: If $L \subseteq \Gamma^*$ is regular, then $h^{-1}(L) = \{ w \in \Sigma^* \mid h(w) \in L \}$ is regular.

**Proof**: Given a DFA $M$ for $L$, construct DFA $M'$ where $\delta'(q, a) = \hat{\delta}(q, h(a))$ — process the entire string $h(a)$ in one step. $\square$

### Myhill-Nerode Theorem

The Myhill-Nerode theorem provides a necessary and sufficient condition for regularity in terms of an equivalence relation on strings.

Define the **Nerode equivalence** relation $\equiv_L$ on $\Sigma^*$ by:

$$x \equiv_L y \text{ iff for all } z \in \Sigma^*, xz \in L \iff yz \in L$$

The relation $\equiv_L$ is a right-invariant equivalence relation (if $x \equiv_L y$ then $xa \equiv_L ya$ for all $a$). The index of $\equiv_L$ is the number of equivalence classes.

**Theorem 4.4 (Myhill-Nerode)**: The following are equivalent:

1. $L$ is regular.
2. The relation $\equiv_L$ has finite index.
3. The right-invariant equivalence relation induced by a DFA for $L$ has finite index.

**Proof sketch**: $(1 \Rightarrow 2)$: If $L$ is recognized by DFA $M = (Q, \Sigma, \delta, q_0, F)$, define $x \equiv_M y$ iff $\hat{\delta}(q_0, x) = \hat{\delta}(q_0, y)$. This relation refines $\equiv_L$ (if $x \equiv_M y$ then $x \equiv_L y$). Since $\equiv_M$ has at most $|Q|$ classes, $\equiv_L$ has finite index.

$(2 \Rightarrow 1)$: If $\equiv_L$ has finite index, construct a DFA whose states are the equivalence classes: $Q = \{[x] \mid x \in \Sigma^*\}$, $\delta([x], a) = [xa]$, $q_0 = [\epsilon]$, $F = \{[x] \mid x \in L\}$. This DFA recognizes $L$. $\square$

The Myhill-Nerode theorem provides a method to find the minimal DFA: the states correspond exactly to the equivalence classes of $\equiv_L$, so the minimal DFA is unique up to isomorphism.

## Examples

### Example 1: Pumping Lemma — $L = \{0^n 1^n \mid n \geq 0\}$

Assume $L$ is regular with pumping length $p$. Choose $w = 0^p 1^p \in L$.

By the pumping lemma, $w = xyz$ with $|xy| \leq p$ and $|y| \geq 1$. Since $|xy| \leq p$, $xy$ consists entirely of 0s. So $y = 0^k$ for some $k \geq 1$.

Now pump: $xy^2 z = 0^{p+k} 1^p$. Since $k \geq 1$, this string has more 0s than 1s and is not in $L$. Contradiction. Therefore $L$ is not regular.

### Example 2: Pumping Lemma — $L = \{ ww \mid w \in \{0, 1\}^* \}$

Assume $L$ is regular with pumping length $p$. Choose $w = 0^p 1 0^p 1$. Note $w \in L$ with $u = 0^p 1$.

By pumping, $w = xyz$ with $|xy| \leq p$ and $|y| \geq 1$. Since $|xy| \leq p$, $y$ is within the first $p$ symbols, which are all 0s. So $y = 0^k$ for $k \geq 1$.

Then $xy^2 z = 0^{p+k} 1 0^p 1$. For this to be in $L$, it must equal $uu$ for some $u$. The first half would be $0^{p+k} 1$ and the second half $0^p 1$, which are not equal. Contradiction.

### Example 3: Myhill-Nerode

Consider $L = \{ w \in \{0, 1\}^* \mid w \text{ has an even number of 0s} \}$.

Define equivalence classes: $[\epsilon] = \{ w \mid \#_0(w) \text{ is even} \}$ and $[0] = \{ w \mid \#_0(w) \text{ is odd} \}$.

Check: are these two classes sufficient? For any $x, y$ in the same class, $xz \in L$ iff $yz \in L$ for any $z$: the parity of zeros in $xz$ depends on parity in $x$ and parity in $z$, so if $x, y$ have same parity, the results align. So $\equiv_L$ has index 2, and $L$ is regular. The minimal DFA has exactly 2 states.

## Summary

- The pumping lemma proves non-regularity by exploiting the finite state bound.
- Regular languages are closed under union, intersection, complement, concatenation, star, reversal, homomorphism, and inverse homomorphism.
- Closure proofs construct new automata from existing ones.
- The Myhill-Nerode theorem characterizes regularity via equivalence relation index.
- Minimal DFAs are unique and correspond to Nerode equivalence classes.

## Exercises

### Review Questions

1. Why does the pumping lemma require $|xy| \leq p$?
2. Can a non-regular language satisfy the pumping lemma? Explain.
3. State three closure properties of regular languages and sketch their proofs.
4. Explain the relationship between the Nerode relation and DFA states.

### Application Problems

5. Prove that $L = \{ a^n b^m \mid n > m \}$ is not regular.
6. Prove that $L = \{ w \in \{0, 1\}^* \mid \#_0(w) = \#_1(w) \}$ is not regular.
7. Show that regular languages are closed under the operation $\text{half}(L) = \{ x \mid xy \in L \text{ and } |x| = |y| \}$.
8. Use Myhill-Nerode to find the minimal DFA for $L = \{ w \in \{a, b\}^* \mid w \text{ contains } "aa" \}$.

### Challenge Problem

9. Show that the language $L = \{ 0^{n^2} \mid n \geq 0 \}$ is not regular using the pumping lemma. (Hint: for large $n$, the gaps between consecutive squares grow larger than $p$.)
