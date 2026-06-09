# Chapter 14: Advanced Complexity Topics

## Learning Objectives

- Define and understand the classes L and NL in depth.
- Understand the polynomial hierarchy and its relationship to P and NP.
- Analyze the relationship between co-NP and NP.
- Understand Boolean circuit complexity.
- Recognize the importance of circuit lower bounds.
- Understand the concept of natural proofs and barriers.
- Explore interactive proofs and the class IP.

## Theory

### 14.1 Log-Space Reductions and Completeness

A **log-space reduction** (A ≤_L B) is a reduction computable in O(log n) space (on a TM with read-only input and write-only output).

**Properties:**
- ≤_L is transitive.
- If A ≤_L B and B ∈ L, then A ∈ L.
- NL-completeness is defined using ≤_L reductions (not ≤_P).

**PATH** is NL-complete under log-space reductions.

### 14.2 The Polynomial Hierarchy (PH)

The polynomial hierarchy extends the concepts of P, NP, and co-NP using **oracle machines** with alternating quantifiers.

**Definition by oracle machines:**
- Σ₀ = Π₀ = Δ₀ = P
- Σ₁ = NP
- Π₁ = co-NP
- For i ≥ 1: Σ_{i+1} = NP^{Σ_i} (NP with oracle for Σ_i)
- Π_{i+1} = co-Σ_{i+1}
- Δ_{i+1} = P^{Σ_i}

**Definition by quantifiers:**
- Σᵢ: problems of the form { x | ∃y₁ ∀y₂ ∃y₃ … Qᵢyᵢ R(x, y₁, …, yᵢ) }
  where Qᵢ = ∃ if i is odd, ∀ if i is even.
- Πᵢ: same but starting with ∀.
- Each yⱼ has length polynomial in |x|.
- R is a polynomial-time computable predicate.

**Properties:**
- PH = ∪_{i ≥ 0} Σ_i = ∪_{i ≥ 0} Π_i
- If Σ_i = Π_i for any i, then PH collapses to Σ_i.
- If P = NP, then PH collapses to P.
- If PH collapses, it's considered evidence against the equality.

**Problems in higher levels:**
- MIN-CIRCUIT (is a given Boolean circuit minimal?) ∈ Σ₂.
- SAT ∈ Σ₁ = NP.
- UNSAT ∈ Π₁ = co-NP.

### 14.3 co-NP

**co-NP** = { L | L̅ ∈ NP }.

A problem is in co-NP if "no" instances have short proofs (certificates for rejection).

**Example: TAUTOLOGY** = { φ | φ is true for all assignments } ∈ co-NP.
- A "no" instance has a certificate: a satisfying assignment for ¬φ.
- But a "yes" instance (a tautology) has no obvious short proof.

**Relationship:**
- NP ≠ co-NP is believed but not proven.
- If NP ≠ co-NP, then P ≠ NP.
- For the complement of an NP-complete problem, we don't expect short proofs.

### 14.4 Circuit Complexity

A **Boolean circuit** is a directed acyclic graph (DAG) where:
- Leaves = input variables (x₁, …, xₙ).
- Internal nodes = logic gates (AND, OR, NOT).
- One root = output.

**Circuit parameters:**
- **Size:** Number of gates (analogous to time).
- **Depth:** Length of longest path from input to output (analogous to parallel time).

**P/poly:** Languages decidable by polynomial-size Boolean circuits (non-uniform model).
- P ⊆ P/poly (any polynomial-time TM can be simulated by polynomial-size circuits).
- There exist undecidable languages in P/poly (since circuits can encode arbitrary finite information).
- **Karp-Lipton theorem:** If NP ⊆ P/poly, then PH collapses to Σ₂.

**Circuit lower bounds:**
Proving that certain functions require large circuits is notoriously difficult.
- NEXP ⊂ P/poly is known (there exist problems requiring exponential-size circuits).
- But we cannot prove that SAT requires super-polynomial circuits (this would imply P ≠ NP).
- **Natural proofs barrier** (Razborov-Rudich): any circuit lower bound proof that is "natural" would also prove that certain cryptographic primitives don't exist, suggesting that standard proof techniques are insufficient.

**NC (Nick's Class):** Problems solvable by circuits with polynomial size and polylogarithmic depth.
- NC ⊆ P (NC represents efficient parallel computation).
- P-complete problems (like CIRCUIT-VALUE) are those not believed to be in NC.

### 14.5 Interactive Proofs (IP)

An **interactive proof system** consists of a prover (P, unbounded computational power) and a verifier (V, probabilistic polynomial time). V exchanges messages with P and decides whether to accept the input.

**Class IP:** Languages with interactive proof systems.

**Important results:**
- **IP = PSPACE** (Shamir's theorem, 1990). This is a landmark result showing that interactive proofs are enormously powerful — equivalent to polynomial space.
- co-NP ⊆ IP (since co-NP ⊆ PSPACE = IP). This means tautologies have interactive proofs.
- **Graph Non-Isomorphism** ∈ IP (actually in AM, a related class).

**Significance:** Interactive proofs show that a computationally bounded verifier can be convinced of the truth of statements far beyond what they could verify deterministically — if interaction and randomization are allowed.

### 14.6 Probabilistic Complexity (BPP)

**BPP** (Bounded-error Probabilistic Polynomial time): Languages decidable by a probabilistic TM with error probability ≤ 1/3 on every input.

**Important facts:**
- P ⊆ BPP ⊆ PSPACE.
- It's believed that BPP = P (derandomization).
- **Adleman's theorem:** BPP ⊆ P/poly (every BPP language has polynomial-size circuits).
- **Sipser-Gács theorem:** BPP ⊆ Σ₂ ∩ Π₂ (BPP is in the second level of the polynomial hierarchy).

### 14.7 Probabilistically Checkable Proofs (PCP)

**PCP theorem** (Arora, Lund, Motwani, Sudan, Szegedy, 1992):

NP = PCP(log n, 1)

**Interpretation:** Every NP problem has a proof that can be verified by reading only a constant number of bits of the proof, using O(log n) random bits.

**Impact:**
- Revolutionized the study of approximation algorithms.
- Shows that for many NP-hard optimization problems, finding approximate solutions within certain ratios is also NP-hard.
- Used to prove hardness of approximation for MAX-3SAT, MAX-CUT, etc.

### 14.8 The Landscape of Complexity Classes

```
EXPSPACE
    ↑
   PSPACE  = IP
    ↑
   PH (Polynomial Hierarchy)
  /  \
 Σ₂   Π₂
  \  /
   NP    co-NP
  /  \
  NP∩co-NP
   |
   P
  / \
  NC  BPP
 /
L
```

Note: Many containments are not known to be strict.

## Examples

### Example 14.1: MIN-CIRCUIT is in Σ₂

MIN-CIRCUIT = { ⟨C⟩ | C is a Boolean circuit with no smaller equivalent circuit }.

To check if C ∈ MIN-CIRCUIT: For every smaller circuit C' (∀), there exists an input x such that C(x) ≠ C'(x). This is ∀∃ = Π₂ formulation.

Or: There exists no smaller equivalent circuit. Actually the logical formulation:
- C is minimal iff ∀C' (|C'| < |C|) ⇒ ∃x (C(x) ≠ C'(x)).
- This is ∀C' ∃x (|C'| < |C| ⇒ C(x) ≠ C'(x)) — a ∀∃ pattern = Π₂.
- Equivalent: the complement (∃C') is in Σ₂.

### Example 14.2: Graph Non-Isomorphism ∈ IP

Given graphs G₁ and G₂, the prover wants to convince the verifier they are not isomorphic.

**Protocol:**
1. Verifier: picks random permutation π, computes H = π(G_b) where b ∈ {1,2} is random.
2. Verifier sends H to prover.
3. Prover: responds with b', claiming H came from G_{b'}.
4. Verifier: accepts if b = b'.

If G₁ ≅ G₂: the prover cannot know b (H could come from either graph), so the prover succeeds with probability ≤ 1/2.
If G₁ ≇ G₂: the prover can determine b (H came from exactly one graph), so the prover always succeeds.

### Example 14.3: BPP = P Under Derandomization Assumptions

If there exist functions with exponential circuit complexity (true under plausible assumptions), then any BPP algorithm can be **derandomized**: replace random bits with the output of a pseudorandom generator that uses only O(log n) truly random bits. This is the core of the hypothesis that BPP = P.

### Example 14.4: PCP and Hardness of Approximation

For MAX-3SAT (find an assignment satisfying the maximum number of clauses):
- The PCP theorem implies: for some ε > 0, it's NP-hard to distinguish satisfiable 3CNF formulas from those where at most (1−ε) fraction of clauses are satisfiable.
- This means approximating MAX-3SAT within a factor of (1−ε) is NP-hard.

### Example 14.5: The Natural Proofs Barrier

Razborov and Rudich showed that any "natural" proof that P ≠ NP (a proof that uses a combinatorial property of Boolean functions that is both constructive and large) would imply that certain cryptographic pseudorandom generators don't exist. Since most experts believe such generators do exist, natural proofs cannot work.

This explains why progress on circuit lower bounds has been slow — the tools that would traditionally work are blocked by this barrier.

## Summary

- Log-space reductions define completeness for L and NL.
- The polynomial hierarchy (PH) extends NP with alternating quantifiers.
- co-NP contains complement languages of NP; believed to be distinct from NP.
- Circuit complexity studies the size/depth of Boolean circuits needed for computation.
- P/poly contains all languages decidable by polynomial-size circuits (may include undecidable problems).
- Interactive proofs (IP) equal PSPACE — a profound result.
- The PCP theorem revolutionized approximation algorithms.
- Major barriers (relativization, natural proofs, algebrization) explain why P vs NP is so difficult.

## Exercises

### Basic

1. Show that if P = NP, then PH collapses to P.
2. Explain why TAUTOLOGY is in co-NP.
3. What does it mean for a problem to be co-NP-complete?
4. Describe the difference between Σ₂ and Π₂ in the polynomial hierarchy.
5. Show that NC ⊆ P.

### Intermediate

6. Prove that Graph Isomorphism is in NP ∩ co-AM (or at least in NP).
7. Show that if NP ⊆ P/poly, then PH collapses to Σ₂ (Karp-Lipton theorem sketch).
8. Explain the PCP theorem and its significance for approximation algorithms.
9. Show that BPP ⊆ P/poly (Adleman's theorem).
10. Prove that IP ⊆ PSPACE by describing a polynomial-space algorithm for an arbitrary interactive proof system.

### Advanced

11. Prove Shamir's theorem: IP = PSPACE.
12. Show that the Graph Non-Isomorphism protocol is sound and complete.
13. Explain the natural proofs barrier and its implications for circuit complexity.
14. Prove that co-NP ⊆ IP by showing a protocol for UNSAT.
15. Show that PH ⊆ PSPACE (the polynomial hierarchy is contained in polynomial space).
