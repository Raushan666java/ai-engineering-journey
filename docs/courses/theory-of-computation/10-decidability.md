# Chapter 10: Decidability

## Learning Objectives

By the end of this chapter, you should be able to: distinguish decidable from undecidable problems; prove the undecidability of the Halting Problem by diagonalization; use reductions to prove undecidability of other problems; state and apply Rice's theorem; understand the Post Correspondence Problem and its undecidability; identify decidable and undecidable problems about automata and grammars.

## Theory

### Decidable Problems

A problem is **decidable** if there exists an algorithm (Turing machine) that always halts with the correct answer. We have seen decidable problems:

- $A_{\text{DFA}} = \{ \langle D, w \rangle \mid D \text{ is a DFA accepting } w \}$: simulate $D$ on $w$.
- $A_{\text{NFA}} = \{ \langle N, w \rangle \mid N \text{ is an NFA accepting } w \}$: convert to DFA, then simulate.
- $A_{\text{REX}} = \{ \langle R, w \rangle \mid R \text{ is a regex matching } w \}$: convert to NFA, then to DFA.
- $E_{\text{DFA}} = \{ \langle D \rangle \mid L(D) = \emptyset \}$: check if any accepting state is reachable.
- $EQ_{\text{DFA}} = \{ \langle D_1, D_2 \rangle \mid L(D_1) = L(D_2) \}$: construct $L(D_1) \triangle L(D_2)$ and test emptiness.
- $A_{\text{CFG}} = \{ \langle G, w \rangle \mid G \text{ is a CFG generating } w \}$: the CYK algorithm decides this in $O(n^3)$.
- $E_{\text{CFG}} = \{ \langle G \rangle \mid L(G) = \emptyset \}$: check reachability of terminal-deriving variables.

### The Halting Problem

The **halting problem** is: given a TM $M$ and input $w$, does $M$ halt on $w$? Formally:

$$\text{HALT}_{\text{TM}} = \{ \langle M, w \rangle \mid M \text{ is a TM and } M \text{ halts on input } w \}$$

**Theorem 10.1**: $\text{HALT}_{\text{TM}}$ is undecidable.

**Proof**: By reduction from $A_{\text{TM}}$. Assume, for contradiction, that $\text{HALT}_{\text{TM}}$ is decidable, with decider $H$. Construct a decider for $A_{\text{TM}}$:

Given $\langle M, w \rangle$, run $H(\langle M, w \rangle)$. If $H$ says "no" ($M$ does not halt on $w$), reject (since $M$ cannot accept $w$). If $H$ says "yes" ($M$ halts), simulate $M$ on $w$ and return the result.

But $A_{\text{TM}}$ is undecidable (proved below), so we have a contradiction. Thus $\text{HALT}_{\text{TM}}$ is undecidable. $\square$

### The Acceptance Problem for TMs

$$A_{\text{TM}} = \{ \langle M, w \rangle \mid M \text{ is a TM that accepts } w \}$$

**Theorem 10.2**: $A_{\text{TM}}$ is undecidable.

**Proof (diagonalization)**: Assume $A_{\text{TM}}$ is decidable with decider $H$. That is:

$$H(\langle M, w \rangle) = \begin{cases} \text{accept} & \text{if } M \text{ accepts } w \\ \text{reject} & \text{if } M \text{ does not accept } w \end{cases}$$

Construct a new TM $D$: on input $\langle M \rangle$, run $H$ on $\langle M, \langle M \rangle \rangle$ and output the opposite (reject if $H$ accepts, accept if $H$ rejects).

Now consider $D$ on input $\langle D \rangle$:
- If $D$ accepts $\langle D \rangle$, then $H(\langle D, \langle D \rangle \rangle)$ accepts, meaning $D$ accepts $\langle D \rangle$ — contradiction.
- If $D$ rejects $\langle D \rangle$, then $H(\langle D, \langle D \rangle \rangle)$ rejects, meaning $D$ does not accept $\langle D \rangle$ — contradiction.

Thus $H$ cannot exist, and $A_{\text{TM}}$ is undecidable. $\square$

### Reductions

A **reduction** from problem $A$ to problem $B$ is a computable function $f$ such that:

$$w \in A \iff f(w) \in B$$

If such a reduction exists, we write $A \leq_m B$ ($A$ is **many-one reducible** to $B$). If $B$ is decidable, then $A$ is decidable. Contrapositively, if $A$ is undecidable, then $B$ is undecidable.

### Rice's Theorem

**Theorem 10.3 (Rice)**: Any nontrivial property of the language of a TM is undecidable. Formally, let $P$ be a set of RE languages (a "property") such that $P$ is nontrivial ($P \neq \emptyset$ and $P \neq \text{all RE}$). Then:

$$L_P = \{ \langle M \rangle \mid L(M) \in P \}$$

is undecidable.

**Proof**: Assume $\emptyset \notin P$ (otherwise use the complement property). Let $L \in P$ be a nonempty RE language with TM $M_L$. Given $\langle M, w \rangle$, construct $M_{M,w}$:

On input $x$:
1. Simulate $M$ on $w$. If $M$ rejects $w$, reject.
2. If $M$ accepts $w$, then simulate $M_L$ on $x$.

Then $L(M_{M,w}) = \emptyset$ if $M$ does not accept $w$, and $L(M_{M,w}) = L(M_L) \in P$ if $M$ accepts $w$. Thus a decider for $L_P$ would decide $A_{\text{TM}}$, a contradiction. $\square$

Rice's theorem shows that essentially any nontrivial question about a TM's behavior — Does it accept any strings? Does it accept infinitely many? Does it accept $0^*$? — is undecidable.

### Undecidable Problems About Grammars

- **Emptiness for CFGs** is decidable ($E_{\text{CFG}}$).
- **Ambiguity of CFGs** is undecidable.
- **Equivalence of CFGs** is undecidable: $EQ_{\text{CFG}} = \{ \langle G_1, G_2 \rangle \mid L(G_1) = L(G_2) \}$ is undecidable.
- **Universality for CFGs** ($L(G) = \Sigma^*$) is undecidable.

### Post Correspondence Problem

The **Post Correspondence Problem (PCP)**: Given a collection of dominoes (ordered pairs of strings), can we arrange them (with repetitions allowed) such that the concatenated top equals the concatenated bottom?

**Instance**: $K = \{ (t_1, b_1), \ldots, (t_k, b_k) \}$ where $t_i, b_i \in \Sigma^*$.
**Question**: Does there exist a sequence $i_1, \ldots, i_n$ such that $t_{i_1} \cdots t_{i_n} = b_{i_1} \cdots b_{i_n}$?

**Theorem 10.4**: PCP is undecidable.

**Proof sketch**: Reduce from $A_{\text{TM}}$ by encoding TM computations as domino sequences. Each step of a TM becomes a set of dominoes; a match corresponds to a valid accepting computation. The undecidability of PCP is then used to prove undecidability of other problems about grammars and automata. $\square$

### Decidable vs. Undecidable — A Summary

| Problem | Decidable? |
|---------|-----------|
| $A_{\text{DFA}}$ | Yes |
| $A_{\text{CFG}}$ | Yes |
| $E_{\text{CFG}}$ | Yes |
| $EQ_{\text{DFA}}$ | Yes |
| $A_{\text{TM}}$ | **No** |
| $\text{HALT}_{\text{TM}}$ | **No** |
| $EQ_{\text{TM}}$ | **No** |
| $E_{\text{TM}}$ | **No** |
| PCP | **No** |
| CFG ambiguity | **No** |
| CFG equivalence | **No** |

## Examples

### Example 1: Reduction — Emptiness of TMs

Show $E_{\text{TM}} = \{ \langle M \rangle \mid L(M) = \emptyset \}$ is undecidable.

Reduce $A_{\text{TM}}$ to $E_{\text{TM}}$: given $\langle M, w \rangle$, construct $M'$ that on input $x$:
1. If $x \neq w$, reject.
2. If $x = w$, simulate $M$ on $w$ and output what $M$ outputs.

Then $L(M') = \emptyset$ iff $M$ does NOT accept $w$ (since $M'$ only accepts $w$ if $M$ accepts $w$). So $\langle M' \rangle \in E_{\text{TM}}$ iff $\langle M, w \rangle \notin A_{\text{TM}}$. If $E_{\text{TM}}$ were decidable, we could decide $A_{\text{TM}}$.

### Example 2: Rice's Theorem Application

Consider the property "contains the empty string." This is nontrivial (some RE languages contain $\epsilon$, some don't). By Rice's theorem, the language $\{ \langle M \rangle \mid \epsilon \in L(M) \}$ is undecidable.

### Example 3: PCP Instance

Dominoes: $\{ (1, 111), (10111, 10), (10, 0) \}$. Can we find a match?

Try: $(1, 111)$, $(10, 0)$:
Top: $1 + 10 = 110$
Bottom: $111 + 0 = 1110$
Not equal.

Try: $(10111, 10)$, $(10, 0)$:
Top: $10111 + 10 = 1011110$
Bottom: $10 + 0 = 100$
Not equal.

A more systematic search is needed, but the undecidability result means no algorithm always works.

## Summary

- $A_{\text{TM}}$ is undecidable via diagonalization.
- $\text{HALT}_{\text{TM}}$ is undecidable via reduction from $A_{\text{TM}}$.
- Reductions show new undecidable problems from known ones.
- Rice's theorem shows any nontrivial language property of TMs is undecidable.
- PCP is undecidable and serves as a source for other undecidability proofs.
- Many problems about CFGs (ambiguity, equivalence, universality) are undecidable.
- Problems about DFAs and PDAs are generally decidable.

## Exercises

### Review Questions

1. Explain the diagonalization argument for $A_{\text{TM}}$ in your own words.
2. Why does Rice's theorem not apply to properties of a TM's syntactic structure (e.g., "has at least 10 states")?
3. What makes PCP useful for proving other problems undecidable?
4. Can a problem be undecidable but still be recognizable? Give an example.

### Application Problems

5. Prove that $E_{\text{TM}}$ (emptiness of TM languages) is undecidable by reduction from $A_{\text{TM}}$.
6. Prove that $REGULAR_{\text{TM}} = \{ \langle M \rangle \mid L(M) \text{ is regular} \}$ is undecidable using Rice's theorem.
7. Show that $\text{HALT}_{\text{TM}}$ reduces to $A_{\text{TM}}$ and vice versa.
8. Prove that $EQ_{\text{TM}} = \{ \langle M_1, M_2 \rangle \mid L(M_1) = L(M_2) \}$ is undecidable.

### Challenge Problem

9. A **linear bounded automaton** (LBA) is a TM whose tape is limited to the length of the input. Surprisingly, $A_{\text{LBA}}$ (whether a given LBA accepts a given input) is decidable, even though $A_{\text{TM}}$ is not. Explain why the diagonalization argument fails for LBAs. Then prove that $E_{\text{LBA}}$ (whether an LBA's language is empty) is undecidable by reduction from $A_{\text{TM}}$.
