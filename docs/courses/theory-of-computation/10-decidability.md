# Chapter 10: Decidability

## Learning Objectives

- Distinguish between decidable and undecidable problems.
- Prove the undecidability of the halting problem via diagonalization.
- Identify decidable problems about regular and context-free languages.
- Apply the reduction technique to prove undecidability.
- Understand the relationship between undecidability and non-RE languages.
- Recognize common patterns in undecidability proofs.

## Theory

![Decidability Flowchart](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/theory-of-computation/10-decidability.png)

### 10.1 Decidable vs Undecidable Problems

A problem (language) is **decidable** if there exists an algorithm (Turing machine that always halts) that correctly answers yes/no for every instance. Otherwise, it is **undecidable**.

**Decidable problems** — the golden age of automata theory:
- All problems about DFAs (membership, emptiness, finiteness, equivalence) are decidable.
- All problems about CFGs (membership, emptiness) are decidable.
- Many problems about TMs (membership in specific cases) are decidable.

**Undecidable problems** — the frontier:
- The halting problem for Turing machines.
- The equivalence problem for CFGs.
- Hilbert's tenth problem (solving Diophantine equations).
- The Post correspondence problem.
- Many problems about TMs: emptiness, equivalence, totality.

### 10.2 The Halting Problem

**HALT_TM = { ⟨M, w⟩ | M is a TM and M halts on input w }**

**Theorem:** HALT_TM is undecidable.

**Proof (by diagonalization, due to Turing 1936):**

Assume for contradiction that HALT_TM is decidable. Then there exists a decider H that:
- H(⟨M, w⟩) = accept if M halts on w.
- H(⟨M, w⟩) = reject if M loops on w.

Construct a new TM D:
1. D takes as input ⟨M⟩ (a TM description).
2. D runs H(⟨M, ⟨M⟩⟩).
3. If H accepts (meaning M halts on its own description), D **loops forever**.
4. If H rejects (meaning M loops on its own description), D **halts** (accepts).

Now ask: what does D do on input ⟨D⟩?
- If D halts on ⟨D⟩, then H(⟨D, ⟨D⟩⟩) = accept. But then D would loop (by construction). Contradiction.
- If D loops on ⟨D⟩, then H(⟨D, ⟨D⟩⟩) = reject. But then D would halt. Contradiction.

Thus H cannot exist. HALT_TM is undecidable.

**Intuition:** The halting problem asks a TM to predict its own behavior — a task that leads to paradox, much like the self-referential "This statement is false."

### 10.3 The Diagonalization Language

Define A_TM = { ⟨M, w⟩ | M accepts w }.

**Theorem:** A_TM is undecidable (but RE).

**Proof:** Similar diagonalization. Assume decider H for A_TM. Construct D:
- D(⟨M⟩): Run H(⟨M, ⟨M⟩⟩). If H accepts, D rejects; if H rejects, D accepts.
- Question: does D accept ⟨D⟩?
  - If D accepts ⟨D⟩, then H(⟨D, ⟨D⟩⟩) = accept, so D should reject. Contradiction.
  - If D rejects ⟨D⟩, then H(⟨D, ⟨D⟩⟩) = reject, so D should accept. Contradiction.
- Therefore H cannot exist.

### 10.4 Reductions

A **reduction** is a way to convert one problem to another so that a solution to the second can be used to solve the first.

If A reduces to B (written A ≤ B), then:
- If B is decidable, then A is decidable.
- If A is undecidable, then B is undecidable.

**Mapping reduction (many-one reduction):** A ≤_m B if there is a computable function f such that w ∈ A iff f(w) ∈ B.

To prove B is undecidable using a reduction:
1. Choose a known undecidable problem A (e.g., A_TM or HALT_TM).
2. Show A ≤_m B by constructing a computable function f mapping instances of A to instances of B.
3. Conclude B is undecidable.

### 10.5 Decidable Problems About Regular Languages

All of the following are decidable (proved in Chapter 4):

1. **DFA acceptance:** Given DFA M and string w, does M accept w? (O(|w|) by simulation.)
2. **NFA acceptance:** Given NFA M and string w, does M accept w? (Convert to DFA or simulate directly.)
3. **RE acceptance:** Given regex r and string w, does r generate w? (Convert to DFA.)
4. **DFA emptiness:** Given DFA M, is L(M) = ∅? (Check reachability of accepting states.)
5. **DFA equivalence:** Given DFAs M₁ and M₂, is L(M₁) = L(M₂)? (Minimize and check isomorphism.)
6. **DFA finiteness:** Is L(M) finite? (Check for cycles that can reach an accept state.)

### 10.6 Decidable Problems About CFLs

1. **CFG membership:** Given CFG G and string w, does G generate w? (CYK algorithm, O(n³).)
2. **CFG emptiness:** Given CFG G, is L(G) = ∅? (Check if S generates a terminal string.)
3. **CFG finiteness:** Is L(G) finite? (Check for cycles in the variable dependency graph.)

**Undecidable for CFLs:**
1. **CFG equivalence:** Given two CFGs G₁ and G₂, is L(G₁) = L(G₂)?
2. **CFG ambiguity:** Is G ambiguous?
3. **CFG inclusion:** Is L(G₁) ⊆ L(G₂)?
4. **CFG universality:** Does G generate Σ*?

### 10.7 Undecidable Problems About TMs

Once we have one undecidable problem (A_TM), we can prove many others undecidable by reduction:

| Problem | Description | Status |
|---------|-------------|--------|
| A_TM | Does TM M accept w? | Undecidable, RE |
| HALT_TM | Does TM M halt on w? | Undecidable, RE |
| EMPTY_TM | Is L(M) = ∅? | Undecidable, not RE |
| EQ_TM | Do M₁ and M₂ accept the same language? | Undecidable, not RE |
| REGULAR_TM | Is L(M) regular? | Undecidable, not RE |
| FINITE_TM | Is L(M) finite? | Undecidable, not RE |
| TOTAL_TM | Does M halt on all inputs? | Undecidable, not RE |

### 10.8 Rice's Theorem

Rice's theorem is a powerful generalization: any non-trivial property of the language of a TM is undecidable.

**Rice's Theorem:** Let P be a set of RE languages (a "property"). If P is non-trivial (not empty and not all RE languages), then the language { ⟨M⟩ | L(M) ∈ P } is undecidable.

**Examples of undecidable properties:**
- Does M accept at least one string? (L(M) ≠ ∅)
- Does M accept exactly 42 strings? (|L(M)| = 42)
- Does M accept all strings? (L(M) = Σ*)
- Is L(M) regular?
- Is L(M) context-free?

**Examples of decidable properties (trivial or syntactic):**
- Does M have exactly 10 states? (Syntactic, not about the language.)
- Is L(M) = ∅ where M is a DFA? (Not about TMs — Rice's theorem applies to TMs only.)

## Examples

### Example 10.1: Reducing HALT_TM to EMPTY_TM

Show that EMPTY_TM = { ⟨M⟩ | L(M) = ∅ } is undecidable.

**Reduction:** Given ⟨M, w⟩ (an instance of HALT_TM), construct M_w:
- M_w(x): Simulate M on w. If M halts (accepts or rejects), accept x.
- Note: If M halts on w, M_w accepts ALL inputs. L(M_w) = Σ* ≠ ∅.
- If M loops on w, M_w never finishes simulating, so M_w never accepts anything. L(M_w) = ∅.

Thus: M halts on w ⟹ L(M_w) ≠ ∅. M loops on w ⟹ L(M_w) = ∅.
Therefore, HALT_TM ≤_m EMPTY_TM.

If EMPTY_TM were decidable, we could decide HALT_TM — contradiction. So EMPTY_TM is undecidable.

### Example 10.2: Reducing A_TM to REGULAR_TM

Show REGULAR_TM = { ⟨M⟩ | L(M) is regular } is undecidable.

**Reduction:** Given ⟨M, w⟩, construct M':
- M'(x): Simulate M on w. If M accepts w, then accept x if x ∈ {0ⁿ1ⁿ | n ≥ 0}. If M rejects w, reject x.
- If M doesn't accept w (rejects or loops), M' never accepts anything. L(M') = ∅ (regular).
- If M accepts w, then M' accepts {0ⁿ1ⁿ | n ≥ 0} (non-regular).

Thus: ⟨M, w⟩ ∈ A_TM ⟹ L(M') is non-regular. ⟨M, w⟩ ∉ A_TM ⟹ L(M') is regular (empty).

A decider for REGULAR_TM would decide A_TM — contradiction.

### Example 10.3: Applying Rice's Theorem

Property: Does L(M) contain the string "hello"?

This is non-trivial:
- Some TMs accept "hello" (e.g., a TM that accepts only "hello").
- Some TMs don't (e.g., a TM that rejects everything).

By Rice's theorem, { ⟨M⟩ | "hello" ∈ L(M) } is undecidable.

### Example 10.4: Decidable Problems — DFA Emptiness

**Algorithm** for EMPTY_DFA = { ⟨M⟩ | M is a DFA and L(M) = ∅ }:
1. Mark the start state.
2. Repeat: mark any state reachable from a marked state.
3. If no accepting state is marked, accept (L(M) = ∅). Otherwise reject.
This is essentially graph reachability, runtime O(|Q| + |E|).

### Example 10.5: Decidable Problems — CFG Membership

**Algorithm** for A_CFG = { ⟨G, w⟩ | G generates w }:
1. Convert G to CNF.
2. Run the CYK algorithm on G and w.
3. If S ∈ T[1,n], accept. Otherwise reject.
Runtime O(n³) where n = |w|.

## Summary

- The halting problem (does TM M halt on w?) is undecidable — proved via diagonalization.
- A_TM (does TM M accept w?) is undecidable but RE.
- Reductions show new problems are undecidable by relating them to known undecidable problems.
- All problems about DFAs (membership, emptiness, equivalence) are decidable.
- CFG membership (CYK) and emptiness are decidable; CFG equivalence is undecidable.
- Rice's theorem: any non-trivial semantic property of TMs is undecidable.
- Diagonalization is the core technique for establishing undecidability.

## Exercises

### Basic

1. Explain in your own words why the halting problem is undecidable.
2. Show that the acceptance problem for DFAs (A_DFA) is decidable.
3. Show that the emptiness problem for CFGs is decidable.
4. Reduce HALT_TM to A_TM (show A_TM is at least as hard as HALT_TM).
5. Apply Rice's theorem to prove that { ⟨M⟩ | L(M) is finite } is undecidable.

### Intermediate

6. Prove that the language of TMs that accept at least 3 strings is undecidable using (a) a direct reduction from A_TM and (b) Rice's theorem.
7. Show that A_TM is RE by constructing a recognizer.
8. Show that the complement of A_TM is not RE (by showing A_TM is not recursive).
9. Reduce A_TM to the problem of whether a TM accepts all even-length strings.
10. Prove that the undecidability of HALT_TM implies the undecidability of A_TM and vice versa.

### Advanced

11. Prove Rice's theorem in full generality.
12. Show that the language { ⟨M⟩ | M is a TM that never writes a blank symbol on its tape } is decidable. Why doesn't Rice's theorem apply?
13. Prove that EQ_TM = { ⟨M₁, M₂⟩ | L(M₁) = L(M₂) } is neither RE nor co-RE.
14. Consider the language S = { ⟨M⟩ | M accepts all palindromes }. Is it decidable? Prove your answer.
15. Prove that there is no algorithm that, given a TM M, determines whether M halts on all inputs of even length.
