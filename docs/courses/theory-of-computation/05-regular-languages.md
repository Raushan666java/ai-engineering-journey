# Chapter 5: Properties of Regular Languages

> **Previous:** [Regular Expressions](./04-regex.md) | **Next:** [Context-Free Grammars](./06-cfg.md)



## Learning Objectives

- State and apply the pumping lemma for regular languages.
- Prove that specific languages are not regular using the pumping lemma.
- Understand and prove closure properties of regular languages.
- State and apply the Myhill-Nerode theorem.
- Minimize a DFA using the table-filling algorithm.
- Distinguish between regular and non-regular languages.


## Chapter at a Glance
| Topic | Key Insight | Practical Takeaway |
|-------|------------|-------------------|
| Pumping Lemma | Long strings have pumpable substring | Proves languages are not regular |
| Closure Properties | Regular langs closed under ∪, ∩, ¬, etc. | Build complex languages from simple |
| Myhill-Nerode | Characterizes regularity via equivalence | Finds minimal DFA uniquely |
| DFA Minimization | Table-filling merges equivalent states | Most efficient language recognizer |
| Decision Properties | Membership, emptiness, equivalence decidable | Algorithms exist for regular langs |




## Chapter Roadmap
```mermaid
flowchart LR
    A[Pumping Lemma] --> B[Non-Regular Proofs]
    B --> C[Closure Properties]
    C --> D[Myhill-Nerode]
    D --> E[DFA Minimization]
    E --> F[Decision Properties]
```

## Theory

![Properties of Regular Languages Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/04-regular-languages.png)

### 4.1 The Pumping Lemma for Regular Languages

The pumping lemma is a powerful tool for proving that certain languages are **not regular**. It captures a fundamental property: any sufficiently long string in a regular language can be "pumped" â€” a middle section can be repeated any number of times â€” and the resulting string remains in the language.

**Pumping Lemma (for Regular Languages):**

If L is a regular language, then there exists an integer **p â‰¥ 1** (the pumping length) such that every string s âˆˆ L with |s| â‰¥ p can be written as s = xyz satisfying:

1. xyâ±z âˆˆ L for all i â‰¥ 0.
2. |y| â‰¥ 1 (y is non-empty).
3. |xy| â‰¤ p (the pumpable portion occurs within the first p symbols).

**Proof sketch:** If L is regular, there exists a DFA M with, say, p states that recognizes L. Consider a string s of length â‰¥ p. When M processes s, it visits p+1 states (including the start). By the pigeonhole principle, some state is repeated. The loop between the first and second occurrence of this state is y. Since |xy| â‰¤ p and |y| â‰¥ 1, the loop occurs within the first p symbols.

### 4.2 Using the Pumping Lemma to Prove Non-Regularity

To prove L is not regular:
1. Assume L is regular (for contradiction).
2. Let p be the pumping length.
3. Choose s âˆˆ L with |s| â‰¥ p (strategically chosen).
4. Show that for **every** decomposition s = xyz with |y| â‰¥ 1 and |xy| â‰¤ p, there exists some i â‰¥ 0 such that xyâ±z âˆ‰ L.
5. This contradicts the pumping lemma, so L is not regular.

### 4.3 Closure Properties of Regular Languages

The class of regular languages is closed under the following operations. If Lâ‚ and Lâ‚‚ are regular:

| Operation | Definition | Construction |
|-----------|------------|-------------|
| Union | Lâ‚ âˆª Lâ‚‚ | NFA with Îµ from new start to both DFAs |
| Intersection | Lâ‚ âˆ© Lâ‚‚ | Product DFA: (qâ‚,qâ‚‚) with Fâ‚ Ã— Fâ‚‚ as accept |
| Complement | LÌ… = Î£* âˆ’ L | Swap accepting and non-accepting states |
| Concatenation | Lâ‚Lâ‚‚ | NFA with Îµ from Lâ‚'s accept to Lâ‚‚'s start |
| Kleene star | L* | NFA with Îµ-loop |
| Reversal | LÊ€ = { wÊ€ | w âˆˆ L } | Reverse transitions, swap start/accept |
| Homomorphism | h(L) = { h(w) | w âˆˆ L } | Replace each symbol via h |
| Inverse homomorphism | hâ»Â¹(L) | Straightforward DFA construction |
| Difference | Lâ‚ âˆ’ Lâ‚‚ | Lâ‚ âˆ© LÌ…â‚‚ |
| Symmetric difference | Lâ‚ âŠ• Lâ‚‚ | (Lâ‚ âˆª Lâ‚‚) âˆ’ (Lâ‚ âˆ© Lâ‚‚) |

**Key insight:** Closure under complement and intersection follow from DFA properties. For complement, simply flip accepting and non-accepting states in the DFA. For intersection, build a product DFA where state (qáµ¢, pâ±¼) transitions to (Î´â‚(qáµ¢,a), Î´â‚‚(pâ±¼,a)) and accepts iff both coordinates are accepting.

### 4.4 Myhill-Nerode Theorem

The Myhill-Nerode theorem characterizes the regular languages in terms of an equivalence relation on strings and provides a method to find the minimal DFA.

Define an equivalence relation â‰¡â‚— on strings over Î£:
x â‰¡â‚— y iff for all z âˆˆ Î£*, xz âˆˆ L â‡” yz âˆˆ L

Two strings are equivalent if they have the same "future" with respect to L â€” appending any suffix z to both either keeps both in L or both out of L.

**Myhill-Nerode Theorem:**
The following three statements are equivalent:
1. L is regular.
2. L is the union of some equivalence classes of a right-invariant equivalence relation of finite index.
3. The relation â‰¡â‚— has finitely many equivalence classes.

When L is regular, the number of equivalence classes of â‰¡â‚— equals the number of states in the **minimal** DFA for L.

**Practical use:** To prove L is not regular, show that â‰¡â‚— has infinitely many classes by finding an infinite set of pairwise inequivalent strings.

### 4.5 DFA Minimization

The **table-filling algorithm** (also called the Moore or Hopcroft-Ullman algorithm) minimizes a DFA by identifying indistinguishable states.

**Algorithm:**
1. Remove any unreachable states (states not reachable from the start state).
2. Mark pairs (p, q) where p âˆˆ F and q âˆ‰ F as distinguishable.
3. For each unmarked pair (p, q) and each symbol a âˆˆ Î£:
   - If (Î´(p, a), Î´(q, a)) is marked, then mark (p, q).
4. Repeat Step 3 until no more pairs are marked.
5. Remaining unmarked pairs are indistinguishable and can be merged.

**Why minimize?** The minimal DFA is guaranteed to be unique up to renaming. It provides the most efficient implementation of a regular language recognizer.

### 4.6 Decision Properties of Regular Languages

These problems are decidable for regular languages:

| Problem | Description | Algorithm |
|---------|-------------|-----------|
| Membership | Given DFA M and string w, does M accept w? | Simulate M on w |
| Emptiness | Is L(M) = âˆ…? | Check if any accept state is reachable |
| Finiteness | Is L(M) finite? | Check for cycles that can reach accept |
| Equivalence | Do Mâ‚ and Mâ‚‚ recognize the same language? | Minimize both and check isomorphism |
| Inclusion | Is L(Mâ‚) âŠ† L(Mâ‚‚)? | Check L(Mâ‚) âˆ© L(Mâ‚‚)Ì… = âˆ… |

## Examples

### Example 4.1: Pumping Lemma â€” Prove L = {0â¿1â¿ | n â‰¥ 0} is Not Regular

**Proof:** Assume L is regular. Let p be the pumping length. Choose s = 0áµ–1áµ–. Since |s| â‰¥ p, s = xyz with |y| â‰¥ 1 and |xy| â‰¤ p.

Since |xy| â‰¤ p, y consists only of 0s (the first p characters are all 0). Let y = 0áµ where k â‰¥ 1.

Now pump: xyÂ²z = 0áµ–âºáµ1áµ–. This string has more 0s than 1s, so it is not in L. Contradiction. Therefore, L is not regular.

### Example 4.2: Pumping Lemma â€” Prove L = { w âˆˆ {a,b}* | w = wÊ€ (palindromes) } is Not Regular

**Proof:** Assume L is regular with pumping length p. Choose s = aáµ– b aáµ– âˆˆ L. Since |xy| â‰¤ p, y contains only a's from the first block. So y = aáµ for some k â‰¥ 1. Then xyÂ²z = aáµ–âºáµ b aáµ–. This is not a palindrome (the first half has more a's than the second half). Contradiction.

### Example 4.3: Proving Closure Under Intersection

Given DFA Mâ‚ = (Qâ‚, Î£, Î´â‚, qâ‚, Fâ‚) for Lâ‚ and Mâ‚‚ = (Qâ‚‚, Î£, Î´â‚‚, qâ‚‚, Fâ‚‚) for Lâ‚‚:

Construct M = (Q, Î£, Î´, qâ‚€, F) for Lâ‚ âˆ© Lâ‚‚:
- Q = Qâ‚ Ã— Qâ‚‚ (Cartesian product)
- Î´((p, q), a) = (Î´â‚(p, a), Î´â‚‚(q, a))
- qâ‚€ = (qâ‚, qâ‚‚)
- F = Fâ‚ Ã— Fâ‚‚

A string w is accepted by M iff Î´Ì‚â‚(qâ‚, w) âˆˆ Fâ‚ and Î´Ì‚â‚‚(qâ‚‚, w) âˆˆ Fâ‚‚, meaning w âˆˆ Lâ‚ âˆ© Lâ‚‚.

### Example 4.4: Myhill-Nerode for L = {0â¿1â¿ | n â‰¥ 0}

Consider strings 0â± and 0Ê² with i â‰  j. Let z = 1â±. Then 0â±Â·1â± = 0â±1â± âˆˆ L, but 0Ê²Â·1â± = 0Ê²1â± âˆ‰ L (since j â‰  i). Therefore, 0â± and 0Ê² are distinguishable for all i â‰  j. This gives infinitely many equivalence classes, proving L is not regular by Myhill-Nerode.

### Example 4.5: DFA Minimization

Consider a DFA over {a,b} with:
- States: A (start, accept), B, C, D (accept), E
- Î´: A-aâ†’B, A-bâ†’C; B-aâ†’A, B-bâ†’D; C-aâ†’E, C-bâ†’D; D-aâ†’E, D-bâ†’C; E-aâ†’E, E-bâ†’E

**Step 1:** Remove unreachable states â€” all reachable from A.

**Step 2:** Initial marking: accept (A, D) vs non-accept (B, C, E). Mark: (A,B), (A,C), (A,E), (D,B), (D,C), (D,E).

**Step 3:** Iterate. Consider (B,C): Î´(B,a)=A, Î´(C,a)=E â€” (A,E) is unmarked, so don't mark yet. Î´(B,b)=D, Î´(C,b)=D â€” same. So (B,C) stays unmarked.

Continue until stable. Unmarked pairs indicate equivalent states.

### Example 4.6: Decision Procedure for Emptiness

To check if L(M) = âˆ… for DFA M with states Q, start qâ‚€, accept F:
- Run graph reachability algorithm (DFS/BFS) from qâ‚€.
- If any accept state is reachable, L(M) â‰  âˆ….
- Otherwise, L(M) = âˆ….



## TypeScript Closure Demonstrations

```typescript
// Product construction for intersection closure
type DFAConfig = {
  Q: string[];
  sigma: string[];
  delta: (q: string, a: string) => string;
  q0: string;
  F: string[];
};

function intersectDFA(A: DFAConfig, B: DFAConfig): DFAConfig {
  const Q: string[] = [];
  for (const qa of A.Q) {
    for (const qb of B.Q) {
      Q.push(`(${qa},${qb})`);
    }
  }
  const sigma = A.sigma.filter(s => B.sigma.includes(s));
  const delta = (q: string, a: string) => {
    const [qa, qb] = q.slice(1, -1).split(',');
    return `(${A.delta(qa, a)},${B.delta(qb, a)})`;
  };
  const q0 = `(${A.q0},${B.q0})`;
  const F = A.F.flatMap(fa => B.F.map(fb => `(${fa},${fb})`));
  return { Q, sigma, delta, q0, F };
}

// Complement: swap accepting and non-accepting states
function complementDFA(M: DFAConfig): DFAConfig {
  const acceptSet = new Set(M.F);
  return {
    ...M,
    F: M.Q.filter(q => !acceptSet.has(q))
  };
}
```

## Myhill-Nerode Step-by-Step

To find the minimal DFA using the Myhill-Nerode approach:

1. Define the equivalence relation ≡_L: x ≡_L y iff for all suffixes z, xz ∈ L ⇔ yz ∈ L.
2. Start with the empty string ε. Find all distinct equivalence classes by checking distinguishability.
3. Each equivalence class becomes a state in the minimal DFA.
4. The transition from class [x] on symbol a goes to class [xa].

```mermaid
graph TD
    subgraph "Myhill-Nerode Construction"
        A[Start: ε class] -->|a| B["Class [a]"]
        A -->|b| C["Class [b]"]
        B -->|a| D["Class [aa]"]
        B -->|b| E["Class [ab]"]
    end
```

The number of equivalence classes equals the number of states in the minimal DFA. This is the most direct characterization: a language is regular precisely when its strings partition into finitely many future-behavior classes.

## DFA Minimization with Table-Filling

The table-filling algorithm systematically finds indistinguishable states:

```mermaid
graph TD
    subgraph "Table-Filling Algorithm"
        T1["Initialize| Mark (p,q) if p∈F, q∉F"] --> T2["Iterate| Mark (p,q) if ∃a∈Σ,<br/>(δ(p,a),δ(q,a)) is marked"]
        T2 --> T3["Repeat until stable| Unmarked pairs → equivalent"]
        T3 --> T4["Merge| Collapse each equivalence class<br/>into one state"]
    end
```

The algorithm runs in O(|Q|²|Σ|) time. After minimization, the DFA is unique up to state renaming — the canonical representation of the regular language.

## The Pumping Lemma in Game Form

View the pumping lemma as an adversarial game:

1. You claim L is regular.
2. The opponent picks pumping length p.
3. You pick s ∈ L with |s| ≥ p.
4. The opponent picks a decomposition s = xyz with |xy| ≤ p and |y| ≥ 1.
5. You pick i ≥ 0.
6. If xyⁱz ∉ L, you win (L is not regular). Otherwise, the opponent wins.

To prove non-regularity, you need a strategy that beats every possible decomposition — this is why the universal quantifier "for every decomposition" is the key challenge.

## Practical Takeaways

1. **The pumping lemma is a non-regularity tool.** It gives a necessary condition for regularity, so violating it proves non-regularity. But some non-regular languages can still be "pumped" — use Myhill-Nerode for certainty.

2. **Closure properties are construction recipes.** When building a language processor, use union, intersection, and complement to compose complex recognizers from simple ones. Product construction is the key implementation technique.

3. **DFA minimization saves resources.** A minimized DFA requires the fewest possible states and transitions. In embedded systems or high-throughput pattern matching, this directly reduces memory and power consumption.

4. **Decision algorithms exist for regular languages.** Questions like "does this DFA accept any string?" or "are these two DFAs equivalent?" have efficient algorithms — a rare luxury not shared by more powerful models.

## Concept Comparison Table
| Property | Regular? | Construction |
|----------|----------|-------------|
| Union | Yes | ε-NFA from new start |
| Intersection | Yes | Product DFA |
| Complement | Yes | Flip accept/reject |
| Concatenation | Yes | ε-chain NFAs |
| Kleene star | Yes | ε-loop NFA |
| Reversal | Yes | Reverse transitions |

## Quick Reference
| Tool | Purpose |
|------|---------|
| Pumping lemma | Prove non-regularity |
| Myhill-Nerode | Characterize/maximally classify |
| Table-filling | Minimize DFA |
| Product construction | Intersection/union closure |
| State elimination | DFA → regex |

## Cross-Application Matrix
| Domain | Application |
|--------|------------|
| Compiler theory | Lexer optimization via DFA minimization |
| Formal verification | Model checking regular properties |
| Text processing | Efficient regex matching |
| Network security | Aho-Corasick multi-pattern search |
| Bioinformatics | DNA sequence pattern search |

## Chapter Quiz

**Q1.** The pumping lemma shows a language is:
- A) Regular
- B) Not regular ✓
- C) Context-free
- D) Decidable

<details>
<summary>Answer</summary>
**B)** The pumping lemma gives a necessary condition for regularity; violating it proves non-regularity.
</details>

**Q2.** Regular languages are closed under:
- A) Intersection ✓
- B) All set operations
- C) Every operation
- D) Only union

<details>
<summary>Answer</summary>
**A)** Regular languages are closed under union, intersection, complement, concatenation, and Kleene star.
</details>

**Q3.** Myhill-Nerode theorem states L is regular iff ≡_L has:
- A) Zero classes
- B) Finite index ✓
- C) One class
- D) Infinite index

<details>
<summary>Answer</summary>
**B)** Finite-index right-invariant equivalence relation — number of classes = minimal DFA states.
</details>

**Q4.** DFA minimization merges:
- A) All states
- B) Indistinguishable states ✓
- C) Reachable states
- D) Accepting states

<details>
<summary>Answer</summary>
**B)** States that behave identically on all suffixes are merged.
</details>

**
## Practical Takeaways

1. **The pumping lemma is a negative tool.** Use it to prove that a language is NOT regular, never to prove regularity. The lemma gives a necessary condition, not a sufficient one — some non-regular languages satisfy it.

2. **Closure properties simplify proofs.** Instead of directly applying the pumping lemma to a complex language, try to prove non-regularity by reduction: if L were regular, then applying a closure property (intersection with a regular language, homomorphism) would produce a known non-regular language.

3. **DFA minimization guarantees optimality.** The table-filling algorithm produces the unique minimal DFA for any regular language. This is the gold standard: minimal DFAs are canonical representations — two regular expressions are equivalent iff their minimized DFAs are isomorphic.

4. **Decidability means automation.** Membership, emptiness, finiteness, and equivalence are all decidable for regular languages. This enables automated tools like regex testers, lexer generators, and pattern matchers that can reason about regular languages without human intervention.

## Summary

- The pumping lemma provides a necessary condition for regularity used to prove non-regularity.
- Regular languages are closed under union, intersection, complement, concatenation, star, reversal, homomorphism, and more.
- The Myhill-Nerode theorem characterizes regular languages via finite-index right-invariant equivalence relations.
- The table-filling algorithm produces the minimal (unique) DFA for any regular language.
- Membership, emptiness, finiteness, and equivalence are decidable for regular languages.
- Product construction is the key technique for closure under intersection and difference.

## Exercises

### Basic

1. Prove that L = { aâ¿bâ¿ | n â‰¥ 0 } is not regular using the pumping lemma.
2. Prove that L = { w âˆˆ {a,b}* | w has an equal number of a's and b's } is not regular.
3. Minimize the DFA from Example 1.2 (exactly two 1s) using the table-filling algorithm.
4. Show that regular languages are closed under reversal by construction.
5. For DFA with 3 states, how many distinct equivalence relations (potential minimized DFAs) could there be?

### Intermediate

6. Prove that L = { 0â¿ | n is a perfect square } is not regular.
7. Prove that L = { w âˆˆ {0,1}* | |w|â‚€ = |w|â‚ } is not regular using both the pumping lemma and Myhill-Nerode.
8. Given a DFA M with n states, prove that L(M) is infinite iff there exists a string w with |w| between n and 2n-1 such that w âˆˆ L(M).
9. Construct product DFAs for the union and intersection of the languages from Examples 1.1 and 1.2.
10. Show that the regular languages are closed under the operation shuffle(Lâ‚, Lâ‚‚) = { wâ‚vâ‚wâ‚‚vâ‚‚â€¦wâ‚™vâ‚™ | wâ‚â€¦wâ‚™ âˆˆ Lâ‚, vâ‚â€¦vâ‚™ âˆˆ Lâ‚‚ }.

### Advanced

11. Prove the Myhill-Nerode theorem: L is regular iff â‰¡â‚— has finite index.
12. Design an algorithm to check whether two regular expressions denote the same language. What is its complexity?
13. Let Lâ‚ = { aâ¿báµ | n â‰  m } and Lâ‚‚ = { aâ¿bÂ²â¿ | n â‰¥ 0 }. Prove Lâ‚ is regular (construct a DFA) and Lâ‚‚ is not regular.
14. Prove that the language L = { aâ¿ | n is prime } is not regular using the pumping lemma. (Hint: use properties of prime numbers â€” if y = aáµ, then xyâ±á¨Â¹z has length p + (i-1)k. Choose i appropriately to get a composite number.)
15. Implement the table-filling algorithm for a DFA with up to 100 states. Show that the algorithm runs in O(|Q|Â² |Î£|) time.

## Further Reading

- **Hopcroft, John E., Motwani, Rajeev, and Ullman, Jeffrey D.** *Introduction to Automata Theory, Languages, and Computation* (3rd ed.). Chapter 4 covers properties of regular languages including pumping lemma, closure properties, and minimization.
- **Nerode, Anil.** "Linear Automaton Transformations." Proceedings of the American Mathematical Society, 1958. The original paper introducing the Myhill-Nerode theorem.
- **Brzozowski, Janusz A.** "Canonical Regular Expressions and Minimal State Machines." 2015. A modern treatment of DFA minimization and canonical representations.

