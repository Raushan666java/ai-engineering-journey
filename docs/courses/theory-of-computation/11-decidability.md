# Chapter 11: Decidability

> **Previous:** [Turing Machine Extensions](./10-turing-extensions.md) | **Next:** [Reducibility](./12-reducibility.md)



## Learning Objectives

- Distinguish between decidable and undecidable problems.
- Prove the undecidability of the halting problem via diagonalization.
- Identify decidable problems about regular and context-free languages.
- Apply the reduction technique to prove undecidability.
- Understand the relationship between undecidability and non-RE languages.
- Recognize common patterns in undecidability proofs.


## Chapter at a Glance
| Topic | Key Insight | Practical Takeaway |
|-------|------------|-------------------|
| Halting Problem | No algorithm decides if TM halts | Fundamental limit of computation |
| Diagonalization | Self-reference leads to contradiction | Core technique for undecidability |
| Reductions | Convert problem A to problem B | Prove undecidability systematically |
| Rice's Theorem | Non-trivial semantic properties undecidable | Generalizes many undecidability proofs |
| Decidable Problems | DFA/CFG membership, emptiness | Algorithms exist for these |




## Chapter Roadmap
```mermaid
flowchart LR
    A[Decidable vs Undecidable] --> B[Halting Problem]
    B --> C[Diagonalization]
    C --> D[Reductions]
    D --> E[Decidable Problems]
    E --> F[Rice Theorem]
```

## Theory

![Decidability Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/10-decidability.png)

### 10.1 Decidable vs Undecidable Problems

A problem (language) is **decidable** if there exists an algorithm (Turing machine that always halts) that correctly answers yes/no for every instance. Otherwise, it is **undecidable**.

**Decidable problems** â€” the golden age of automata theory:
- All problems about DFAs (membership, emptiness, finiteness, equivalence) are decidable.
- All problems about CFGs (membership, emptiness) are decidable.
- Many problems about TMs (membership in specific cases) are decidable.

**Undecidable problems** â€” the frontier:
- The halting problem for Turing machines.
- The equivalence problem for CFGs.
- Hilbert's tenth problem (solving Diophantine equations).
- The Post correspondence problem.
- Many problems about TMs: emptiness, equivalence, totality.

### 10.2 The Halting Problem

**HALT_TM = { âŸ¨M, wâŸ© | M is a TM and M halts on input w }**

**Theorem:** HALT_TM is undecidable.

**Proof (by diagonalization, due to Turing 1936):**

Assume for contradiction that HALT_TM is decidable. Then there exists a decider H that:
- H(âŸ¨M, wâŸ©) = accept if M halts on w.
- H(âŸ¨M, wâŸ©) = reject if M loops on w.

Construct a new TM D:
1. D takes as input âŸ¨MâŸ© (a TM description).
2. D runs H(âŸ¨M, âŸ¨MâŸ©âŸ©).
3. If H accepts (meaning M halts on its own description), D **loops forever**.
4. If H rejects (meaning M loops on its own description), D **halts** (accepts).

Now ask: what does D do on input âŸ¨DâŸ©?
- If D halts on âŸ¨DâŸ©, then H(âŸ¨D, âŸ¨DâŸ©âŸ©) = accept. But then D would loop (by construction). Contradiction.
- If D loops on âŸ¨DâŸ©, then H(âŸ¨D, âŸ¨DâŸ©âŸ©) = reject. But then D would halt. Contradiction.

Thus H cannot exist. HALT_TM is undecidable.

**Intuition:** The halting problem asks a TM to predict its own behavior â€” a task that leads to paradox, much like the self-referential "This statement is false."

### 10.3 The Diagonalization Language

Define A_TM = { âŸ¨M, wâŸ© | M accepts w }.

**Theorem:** A_TM is undecidable (but RE).

**Proof:** Similar diagonalization. Assume decider H for A_TM. Construct D:
- D(âŸ¨MâŸ©): Run H(âŸ¨M, âŸ¨MâŸ©âŸ©). If H accepts, D rejects; if H rejects, D accepts.
- Question: does D accept âŸ¨DâŸ©?
  - If D accepts âŸ¨DâŸ©, then H(âŸ¨D, âŸ¨DâŸ©âŸ©) = accept, so D should reject. Contradiction.
  - If D rejects âŸ¨DâŸ©, then H(âŸ¨D, âŸ¨DâŸ©âŸ©) = reject, so D should accept. Contradiction.
- Therefore H cannot exist.

### 10.4 Reductions

A **reduction** is a way to convert one problem to another so that a solution to the second can be used to solve the first.

If A reduces to B (written A â‰¤ B), then:
- If B is decidable, then A is decidable.
- If A is undecidable, then B is undecidable.

**Mapping reduction (many-one reduction):** A â‰¤_m B if there is a computable function f such that w âˆˆ A iff f(w) âˆˆ B.

To prove B is undecidable using a reduction:
1. Choose a known undecidable problem A (e.g., A_TM or HALT_TM).
2. Show A â‰¤_m B by constructing a computable function f mapping instances of A to instances of B.
3. Conclude B is undecidable.

### 10.5 Decidable Problems About Regular Languages

All of the following are decidable (proved in Chapter 4):

1. **DFA acceptance:** Given DFA M and string w, does M accept w? (O(|w|) by simulation.)
2. **NFA acceptance:** Given NFA M and string w, does M accept w? (Convert to DFA or simulate directly.)
3. **RE acceptance:** Given regex r and string w, does r generate w? (Convert to DFA.)
4. **DFA emptiness:** Given DFA M, is L(M) = âˆ…? (Check reachability of accepting states.)
5. **DFA equivalence:** Given DFAs Mâ‚ and Mâ‚‚, is L(Mâ‚) = L(Mâ‚‚)? (Minimize and check isomorphism.)
6. **DFA finiteness:** Is L(M) finite? (Check for cycles that can reach an accept state.)

### 10.6 Decidable Problems About CFLs

1. **CFG membership:** Given CFG G and string w, does G generate w? (CYK algorithm, O(nÂ³).)
2. **CFG emptiness:** Given CFG G, is L(G) = âˆ…? (Check if S generates a terminal string.)
3. **CFG finiteness:** Is L(G) finite? (Check for cycles in the variable dependency graph.)

**Undecidable for CFLs:**
1. **CFG equivalence:** Given two CFGs Gâ‚ and Gâ‚‚, is L(Gâ‚) = L(Gâ‚‚)?
2. **CFG ambiguity:** Is G ambiguous?
3. **CFG inclusion:** Is L(Gâ‚) âŠ† L(Gâ‚‚)?
4. **CFG universality:** Does G generate Î£*?

### 10.7 Undecidable Problems About TMs

Once we have one undecidable problem (A_TM), we can prove many others undecidable by reduction:

| Problem | Description | Status |
|---------|-------------|--------|
| A_TM | Does TM M accept w? | Undecidable, RE |
| HALT_TM | Does TM M halt on w? | Undecidable, RE |
| EMPTY_TM | Is L(M) = âˆ…? | Undecidable, not RE |
| EQ_TM | Do Mâ‚ and Mâ‚‚ accept the same language? | Undecidable, not RE |
| REGULAR_TM | Is L(M) regular? | Undecidable, not RE |
| FINITE_TM | Is L(M) finite? | Undecidable, not RE |
| TOTAL_TM | Does M halt on all inputs? | Undecidable, not RE |

### 10.8 Rice's Theorem

Rice's theorem is a powerful generalization: any non-trivial property of the language of a TM is undecidable.

**Rice's Theorem:** Let P be a set of RE languages (a "property"). If P is non-trivial (not empty and not all RE languages), then the language { âŸ¨MâŸ© | L(M) âˆˆ P } is undecidable.

**Examples of undecidable properties:**
- Does M accept at least one string? (L(M) â‰  âˆ…)
- Does M accept exactly 42 strings? (|L(M)| = 42)
- Does M accept all strings? (L(M) = Î£*)
- Is L(M) regular?
- Is L(M) context-free?

**Examples of decidable properties (trivial or syntactic):**
- Does M have exactly 10 states? (Syntactic, not about the language.)
- Is L(M) = âˆ… where M is a DFA? (Not about TMs â€” Rice's theorem applies to TMs only.)

## Examples

### Example 10.1: Reducing HALT_TM to EMPTY_TM

Show that EMPTY_TM = { âŸ¨MâŸ© | L(M) = âˆ… } is undecidable.

**Reduction:** Given âŸ¨M, wâŸ© (an instance of HALT_TM), construct M_w:
- M_w(x): Simulate M on w. If M halts (accepts or rejects), accept x.
- Note: If M halts on w, M_w accepts ALL inputs. L(M_w) = Î£* â‰  âˆ….
- If M loops on w, M_w never finishes simulating, so M_w never accepts anything. L(M_w) = âˆ….

Thus: M halts on w âŸ¹ L(M_w) â‰  âˆ…. M loops on w âŸ¹ L(M_w) = âˆ….
Therefore, HALT_TM â‰¤_m EMPTY_TM.

If EMPTY_TM were decidable, we could decide HALT_TM â€” contradiction. So EMPTY_TM is undecidable.

### Example 10.2: Reducing A_TM to REGULAR_TM

Show REGULAR_TM = { âŸ¨MâŸ© | L(M) is regular } is undecidable.

**Reduction:** Given âŸ¨M, wâŸ©, construct M':
- M'(x): Simulate M on w. If M accepts w, then accept x if x âˆˆ {0â¿1â¿ | n â‰¥ 0}. If M rejects w, reject x.
- If M doesn't accept w (rejects or loops), M' never accepts anything. L(M') = âˆ… (regular).
- If M accepts w, then M' accepts {0â¿1â¿ | n â‰¥ 0} (non-regular).

Thus: âŸ¨M, wâŸ© âˆˆ A_TM âŸ¹ L(M') is non-regular. âŸ¨M, wâŸ© âˆ‰ A_TM âŸ¹ L(M') is regular (empty).

A decider for REGULAR_TM would decide A_TM â€” contradiction.

### Example 10.3: Applying Rice's Theorem

Property: Does L(M) contain the string "hello"?

This is non-trivial:
- Some TMs accept "hello" (e.g., a TM that accepts only "hello").
- Some TMs don't (e.g., a TM that rejects everything).

By Rice's theorem, { âŸ¨MâŸ© | "hello" âˆˆ L(M) } is undecidable.

### Example 10.4: Decidable Problems â€” DFA Emptiness

**Algorithm** for EMPTY_DFA = { âŸ¨MâŸ© | M is a DFA and L(M) = âˆ… }:
1. Mark the start state.
2. Repeat: mark any state reachable from a marked state.
3. If no accepting state is marked, accept (L(M) = âˆ…). Otherwise reject.
This is essentially graph reachability, runtime O(|Q| + |E|).

### Example 10.5: Decidable Problems â€” CFG Membership

**Algorithm** for A_CFG = { âŸ¨G, wâŸ© | G generates w }:
1. Convert G to CNF.
2. Run the CYK algorithm on G and w.
3. If S âˆˆ T[1,n], accept. Otherwise reject.
Runtime O(nÂ³) where n = |w|.



## Concept Comparison Table
| Problem | Status | Class |
|---------|--------|-------|
| DFA membership | Decidable | P |
| CFG membership | Decidable | P (O(n³)) |
| DFA equivalence | Decidable | P |
| CFG equivalence | Undecidable | — |
| Halting problem | Undecidable | RE |

## Quick Reference
| Technique | Purpose |
|-----------|---------|
| Diagonalization | Direct undecidability proof |
| Mapping reduction | Translate problem A to B |
| Rice's theorem | General undecidability for TM properties |
| CYK algorithm | Decidable CFG membership |

## Cross-Application Matrix
| Domain | Decidability Concept |
|--------|---------------------|
| Software engineering | Limits of automated verification |
| Programming languages | Type system decidability |
| Automated reasoning | Theorem proving limits |
| Compilers | Optimization correctness |
| AI | Problem-solving limitations |

## Chapter Quiz

**Q1.** The halting problem asks if a TM:
- A) Accepts its input
- B) Halts on its input ✓
- C) Has finitely many states
- D) Is deterministic

<details>
<summary>Answer</summary>
**B)** HALT_TM = { ⟨M, w⟩ | M halts on w }. Proven undecidable by Turing in 1936.
</details>

**Q2.** Diagonalization proves undecidability by:
- A) Counting states
- B) Self-reference paradox ✓
- C) Reducing to a known problem
- D) Using Rice's theorem

<details>
<summary>Answer</summary>
**B)** Diagonalization creates a self-referential contradiction — "what does D do on input ⟨D⟩?"
</details>

**Q3.** Which is decidable?
- A) CFG equivalence
- B) DFA membership ✓
- C) TM emptiness
- D) TM equivalence

<details>
<summary>Answer</summary>
**B)** DFA membership is decidable — simply simulate the DFA on the input string.
</details>

**Q4.** Rice's theorem applies to:
- A) Syntactic properties of TMs
- B) Non-trivial semantic properties ✓
- C) Properties of DFAs
- D) Properties of CFGs

<details>
<summary>Answer</summary>
**B)** Any non-trivial property of the language of a TM is undecidable.
</details>

**Q5.** A reduction shows:
- A) Problem A is easier than B
- B) If B is decidable, A is decidable ✓
- C) Both problems are the same
- D) Neither problem is decidable

<details>
<summary>Answer</summary>
**B)** A ≤_m B means a solution to B yields a solution to A (or undecidability of A transfers to B).
</details>

## Practical Takeaways

1. **Undecidability is not hypothetical.** Problems like program equivalence, whether a program will crash, or whether two pieces of code do the same thing are all undecidable in general. Software engineers work with conservative approximations and restricted cases.

2. **Diagonalization is a general proof technique.** The same technique used to prove the halting problem undecidable also proves that the real numbers are uncountable, that there are more languages than TMs, and that the halting problem for other models is undecidable.

3. **Decidable vs undecidable is a spectrum.** Many problems are decidable for restricted models (DFA emptiness, CFG parsing) but undecidable in general. When facing a hard analysis problem, restrict the input model until the problem becomes decidable.

4. **Reductions transfer undecidability.** To prove a new problem undecidable, show it can solve a known undecidable problem. This is the standard toolkit: halting → acceptance → emptiness → equivalence → all non-trivial TM properties.

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
5. Apply Rice's theorem to prove that { âŸ¨MâŸ© | L(M) is finite } is undecidable.

### Intermediate

6. Prove that the language of TMs that accept at least 3 strings is undecidable using (a) a direct reduction from A_TM and (b) Rice's theorem.
7. Show that A_TM is RE by constructing a recognizer.
8. Show that the complement of A_TM is not RE (by showing A_TM is not recursive).
9. Reduce A_TM to the problem of whether a TM accepts all even-length strings.
10. Prove that the undecidability of HALT_TM implies the undecidability of A_TM and vice versa.

### Advanced

11. Prove Rice's theorem in full generality.
12. Show that the language { âŸ¨MâŸ© | M is a TM that never writes a blank symbol on its tape } is decidable. Why doesn't Rice's theorem apply?
13. Prove that EQ_TM = { âŸ¨Mâ‚, Mâ‚‚âŸ© | L(Mâ‚) = L(Mâ‚‚) } is neither RE nor co-RE.
14. Consider the language S = { âŸ¨MâŸ© | M accepts all palindromes }. Is it decidable? Prove your answer.
15. Prove that there is no algorithm that, given a TM M, determines whether M halts on all inputs of even length.

## Further Reading

- **Sipser, Michael.** *Introduction to the Theory of Computation* (3rd ed.). Chapter 4 covers decidability with detailed proofs of the halting problem and other undecidable languages.
- **Hopcroft, John E., Motwani, Rajeev, and Ullman, Jeffrey D.** *Introduction to Automata Theory, Languages, and Computation* (3rd ed.). Chapter 9 provides an in-depth treatment of undecidability and Rice's theorem.
- **Davis, Martin.** *The Undecidable: Basic Papers on Undecidable Propositions, Unsolvable Problems and Computable Functions*. A collection of original papers by Godel, Church, Turing, and Post.
- **Arora, Sanjeev and Barak, Boaz.** *Computational Complexity: A Modern Approach*. Chapter 2 covers diagonalization and the time hierarchy theorems.


## TypeScript Diagonalization Example

```typescript
// Simulating Cantor's diagonalization to show undecidability
// Instead of TM descriptions, we use simple string functions

type StringFunction = (s: string) => boolean;

// Enumerate all possible string functions (analogous to all TMs)
function enumerateFunctions(): StringFunction[] {
  // In reality this is impossible for all functions,
  // but we can show the concept with a limited set
  const functions: StringFunction[] = [
    (s: string) => s.length > 2,
    (s: string) => s.startsWith("a"),
    (s: string) => s === s.split("").reverse().join(""),
    (s: string) => /^\d+$/.test(s),
  ];
  return functions;
}

// Enumerate all possible strings
function enumerateStrings(): string[] {
  const alphabet = "ab";
  const strings: string[] = [];
  for (let len = 1; len <= 3; len++) {
    for (let i = 0; i < Math.pow(alphabet.length, len); i++) {
      let s = "";
      let n = i;
      for (let j = 0; j < len; j++) {
        s = alphabet[n % alphabet.length] + s;
        n = Math.floor(n / alphabet.length);
      }
      strings.push(s);
    }
  }
  return strings;
}

// Diagonal function that differs from every enumerated function
function diagonalFunction(s: string): boolean {
  const funcs = enumerateFunctions();
  const strings = enumerateStrings();
  const idx = strings.indexOf(s);
  if (idx >= 0 && idx < funcs.length) {
    // Flip the result - guarantees difference
    return !funcs[idx](s);
  }
  return false;
}

// Proof: diagonalFunction differs from every function in the enumeration
// For function f_i at index i, diagonalFunction(strings[i]) != f_i(strings[i])
// This is the same technique used to prove the halting problem undecidable
```

