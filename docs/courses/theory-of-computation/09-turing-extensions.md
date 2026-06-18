# Chapter 9: Turing Machine Extensions and the Church-Turing Thesis

## Learning Objectives

- Distinguish between recursively enumerable and recursive languages.
- Describe the universal Turing machine and its significance.
- Explain the Church-Turing thesis and its implications.
- Understand the encoding of Turing machines as strings.
- Recognize the limits of TM-based computation.
- Understand the concept of oracles and relativized computation.

## Theory

![Turing Machine Extensions Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/09-turing-extensions.png)

### 9.1 Recursively Enumerable vs Recursive Languages

A language L is **recursively enumerable (RE)** if there exists a Turing machine M such that L(M) = L. This means M halts in the accept state for every w âˆˆ L, and for w âˆ‰ L, M either halts in reject or **loops forever**.

A language L is **recursive** (or **decidable**) if there exists a Turing machine M that **halts on all inputs** and L(M) = L. Such a machine is called a **decider**.

**Relationship:**
- Every recursive language is RE (a decider is a special case of a recognizer).
- There exist RE languages that are NOT recursive (Chapter 10: the halting problem).

**Intuition:** Recognizing a language only requires positive answers to be correct. Deciding requires both positive and negative answers to be correct.

### 9.2 Complement of RE Languages

For a language L:
- If L is recursive, then LÌ… is also recursive (swap accept and reject states in the decider).
- If L is RE, LÌ… may or may not be RE.
- A language is **co-RE** if its complement is RE.
- L is recursive **iff** L is both RE and co-RE.

**Theorem:** L is recursive iff L is RE and co-RE.

**Proof:** If L is recursive, then L is RE and LÌ… is recursive (hence RE), so L is RE and co-RE. Conversely, if L is RE via Mâ‚ and LÌ… is RE via Mâ‚‚, construct a decider M that simulates Mâ‚ and Mâ‚‚ in parallel. One must eventually accept. If Mâ‚ accepts, M accepts; if Mâ‚‚ accepts, M rejects.

### 9.3 Encoding Turing Machines

To talk about TMs as inputs to other TMs, we need to encode them as strings. Turing machines can be encoded in a standard format:

Let TM M be described as (Q, Î£, Î“, Î´, qâ‚€, q_accept, q_reject). We encode:
1. Encode states as strings in {q}* (e.g., q = qâ‚€, qq = qâ‚, etc.).
2. Encode tape symbols similarly.
3. Encode transitions as tuples: (state, symbol, new_state, new_symbol, direction).
4. Concatenate all parts with separators.

The encoded TM is denoted âŸ¨MâŸ©. This encoding allows a TM to examine other TMs as data â€” a crucial capability.

### 9.4 The Universal Turing Machine

A **universal Turing machine (UTM)** is a TM U that takes as input âŸ¨M, wâŸ© (the encoding of a TM M and an input string w) and simulates M on w. U accepts if M accepts w, rejects if M rejects w, and loops if M loops on w.

**Construction of UTM:**
U uses a *multitape* architecture (simulatable on a single tape):

1. **Tape 1:** Stores the description of M (âŸ¨MâŸ©).
2. **Tape 2:** Simulates M's tape (copies w, then simulates read/write).
3. **Tape 3:** Stores M's current state.

**Simulation algorithm:**
1. Initialize Tape 2 with w, Tape 3 with qâ‚€.
2. Repeat:
   a. Read symbol under M's head on Tape 2.
   b. Search Tape 1 for a transition matching current state and symbol.
   c. If found: update state on Tape 3, write symbol on Tape 2, move head.
   d. If M is in q_accept â†’ accept. If in q_reject â†’ reject.
   e. If no matching transition â†’ reject.

**Significance:** The UTM is the theoretical basis for stored-program computers. A single machine can simulate any other machine by reading its program. This is exactly what happens when you run a program on your computer.

### 9.5 The Church-Turing Thesis

**Church-Turing Thesis:** Everything that is intuitively computable can be computed by a Turing machine.

This is not a theorem (it cannot be proved) but a **thesis** â€” a claim about the nature of computation that is universally accepted because:
- Every proposed model of computation (Î»-calculus, general recursive functions, Post systems, RAM machines, cellular automata) has been shown equivalent to Turing machines.
- No one has found a computation that humans would call "effective" but that cannot be simulated by a TM.
- The thesis has held for 90+ years despite intensive investigation.

**Variants:**
- **Physical Church-Turing thesis:** Any physically realizable computing device can be simulated by a Turing machine (with implications for quantum computing).
- **Extended Church-Turing thesis:** Probabilistic TMs can simulate any physically realizable computation with at most polynomial slowdown (challenged by quantum computing).

### 9.6 Oracle Turing Machines and Relativization

An **oracle Turing machine** is a TM with an additional "oracle tape" and a special query state. When the machine enters the query state, the oracle (an external device) answers whether a string belongs to some fixed language A.

**Notation:** Má´¬ denotes a Turing machine with oracle A.

Oracle machines allow us to:
- **Classify problems relative to oracles.** For example, Pá´¬ and NPá´¬ are classes relativized to A.
- **Prove relativization results.** There exist oracles A and B such that Pá´¬ = NPá´¬ and Pá´® â‰  NPá´®. This shows that any proof resolving P vs NP must be "non-relativizing" â€” it cannot work for all possible oracles.

### 9.7 The Arithmetic Hierarchy

Languages definable by alternating quantifiers over recursive predicates form the **arithmetic hierarchy**:
- Î£â‚: Languages of the form { x | âˆƒy R(x,y) } where R is recursive (these are exactly RE).
- Î â‚: Languages of the form { x | âˆ€y R(x,y) } (these are co-RE).
- Î£â‚‚: Languages of the form { x | âˆƒyâ‚ âˆ€yâ‚‚ R(x,yâ‚,yâ‚‚) }.
- Î â‚‚: Languages of the form { x | âˆ€yâ‚ âˆƒyâ‚‚ R(x,yâ‚,yâ‚‚) }.
- etc.

This hierarchy is strict: Î£â‚™ âŠ‚ Î£_{n+1} and Î â‚™ âŠ‚ Î _{n+1} for all n.

## Examples

### Example 9.1: RE but Not Recursive â€” The Halting Problem (Preview)

HALT_TM = { âŸ¨M, wâŸ© | M halts on input w }.

- HALT_TM is RE: A UTM can simulate M on w; if M halts (accepts or rejects), the UTM accepts. This shows HALT_TM âˆˆ RE.
- HALT_TM is not recursive: A diagonalization argument (Chapter 10) shows no decider can correctly determine whether arbitrary M halts on w.

### Example 9.2: A Language That Is Neither RE Nor co-RE

Consider L = { âŸ¨Mâ‚, Mâ‚‚âŸ© | L(Mâ‚) = L(Mâ‚‚) } (equivalence of TMs).
- This language is not RE and not co-RE.
- Intuitively: there's no way to check if two TMs accept the same language because either one might loop on some input.

### Example 9.3: Many-One Reductions

To show a language A is not recursive, we can reduce a known non-recursive language (like HALT_TM) to A. If A were recursive, then HALT_TM would be recursive too â€” contradiction.

For language EMPTY_TM = { âŸ¨MâŸ© | L(M) = âˆ… }:
- We can reduce HALT_TM to EMPTY_TM.
- Given âŸ¨M, wâŸ©, construct M': on input x, M' simulates M on w; if M accepts w, M' accepts x; otherwise M' loops.
- Then: if M halts on w, L(M') = Î£* â‰  âˆ…. If M doesn't halt on w, L(M') = âˆ….
- So âŸ¨M, wâŸ© âˆˆ HALT_TM iff âŸ¨M'âŸ© âˆ‰ EMPTY_TM. A decider for EMPTY_TM would give a decider for HALT_TM â€” impossible.

### Example 9.4: UTMs as Stored-Program Computers

The UTM architecture mirrors modern computers:
- âŸ¨MâŸ© is the **program** (stored in memory).
- w is the **input data**.
- The UTM is the **CPU** that fetches, decodes, and executes instructions.

This is why the UTM is considered the theoretical foundation of general-purpose computing.

### Example 9.5: Relativization

Define Pá´¬ = languages decidable in polynomial time by a TM with oracle A.
Let SAT be the language of satisfiable Boolean formulas.

- If we could decide SAT in polynomial time, then P^SAT = NP^SAT (since an oracle for SAT, the hardest NP problem, would collapse NP into P relative to SAT).
- However, there also exist oracles B where this doesn't hold.
- This "relativization barrier" explains why standard diagonalization techniques cannot resolve P vs NP.

## Summary

- Recursive languages are decidable (TM always halts); RE languages are recognizable (TM may loop).
- L is recursive iff L is both RE and co-RE.
- TMs can be encoded as strings âŸ¨MâŸ©, allowing them to be inputs to other TMs.
- The universal TM simulates any TM on any input â€” the stored-program concept.
- The Church-Turing thesis claims TMs capture all effective computation.
- Oracle TMs relativize computation and create complexity class hierarchies.
- The arithmetic hierarchy classifies languages by quantifier alternation depth.

## Exercises

### Basic

1. Explain why every recursive language is RE but not vice versa.
2. Describe how a UTM simulates another TM. Why is the UTM's ability to read âŸ¨MâŸ© important?
3. State the Church-Turing thesis in your own words.
4. Show that if L is recursive, then LÌ… is recursive.
5. Give an example of a language in RE âˆ© co-RE that is not obviously recursive.

### Intermediate

6. Prove: If a language L is RE, then L is recursive iff LÌ… is also RE.
7. Show that the language { âŸ¨MâŸ© | M accepts Îµ } is RE but not recursive (reduce from the halting problem).
8. Describe how to construct a UTM with 4 states and 6 symbols (or argue why this is the minimum).
9. Prove that the arithmetic hierarchy is strict: Î£â‚™ â‰  Î£_{n+1} for all n â‰¥ 1.
10. Explain the relevance of the Church-Turing thesis to quantum computing.

### Advanced

11. Prove that the language of descriptions of TMs that accept at least one string (NONEMPTY_TM) is RE but not recursive.
12. Construct an encoding scheme for TMs and prove that the set of all TM descriptions is countable.
13. Prove that there are uncountably many languages but only countably many TMs â€” conclude that most languages are not RE.
14. Show relativization: find oracles A and B such that Pá´¬ = NPá´¬ and Pá´® â‰  NPá´®.
15. Prove that the universal language U = { âŸ¨M, wâŸ© | M accepts w } is RE but not recursive.
