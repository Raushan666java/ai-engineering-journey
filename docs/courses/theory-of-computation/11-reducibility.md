# Chapter 11: Reducibility and Advanced Undecidability

## Learning Objectives

- Define and apply mapping reductions (many-one reductions).
- Apply Rice's theorem to prove undecidability.
- Define and apply Turing reductions.
- Understand the Post Correspondence Problem and its undecidability.
- Prove undecidability of problems from formal language theory.
- Understand the concept of completeness within RE.
- Recognize the limitations of automated verification.

## Theory

![Reducibility Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/11-reducibility.png)

### 11.1 Mapping Reductions (Many-One Reductions)

A **mapping reduction** from language A to language B (written A â‰¤_m B) is a computable function f: Î£* â†’ Î£* such that w âˆˆ A iff f(w) âˆˆ B.

**Key properties:**
- If A â‰¤_m B and B is decidable, then A is decidable.
- If A â‰¤_m B and A is undecidable, then B is undecidable.
- If A â‰¤_m B and B is RE, then A is RE.
- If A â‰¤_m B and A is not RE, then B is not RE.

**Completeness:** A language A is **RE-complete** (or m-complete for RE) if:
1. A âˆˆ RE.
2. For every language B âˆˆ RE, B â‰¤_m A.

A_TM is the canonical RE-complete language.

### 11.2 Rice's Theorem in Depth

**Rice's Theorem (formal):** Let P be a set of RE languages such that:
- P â‰  âˆ… (some RE languages have property P).
- P â‰  { all RE languages } (some RE languages lack property P).

Then L_P = { âŸ¨MâŸ© | L(M) âˆˆ P } is undecidable.

**Proof sketch:** Assume P doesn't contain the empty language (if it does, we can work with the complement). Let Lâˆ… be a TM with empty language. Since P is non-trivial, there exists some TM M_P with L(M_P) âˆˆ P. Given âŸ¨M, wâŸ© (instance of A_TM), construct M':
- M'(x): Simulate M on w. If M accepts w, simulate M_P on x and accept if M_P accepts.
- Then: if M accepts w, L(M') = L(M_P) âˆˆ P. If M doesn't accept w, L(M') = Lâˆ… âˆ‰ P.
- Thus A_TM â‰¤_m L_P, so L_P is undecidable.

**Rice's theorem for properties of TMs themselves:** Some properties of TMs are syntactic (about the machine structure) rather than semantic (about the language). These can be decidable:
- Does M have exactly 5 states? **Decidable** (count the states in âŸ¨MâŸ©).
- Does M ever move left on blank input? **Decidable** (simulate on blank input up to some bound).
- Does M accept at least one string? **Undecidable** (semantic property of the language).

### 11.3 Turing Reductions

A **Turing reduction** from A to B (written A â‰¤_T B) means there is an oracle TM that decides A given an oracle for B. This is more general than mapping reductions:
- Mapping reductions are a special case of Turing reductions.
- Turing reductions allow multiple oracle queries and can use the results arbitrarily.
- If A â‰¤_T B and B is decidable, then A is decidable.

**Example:** The complement of A_TM (co-A_TM) is Turing-reducible to A_TM:
- To decide if M doesn't accept w, query the oracle for A_TM with âŸ¨M, wâŸ©. If it says no, then M doesn't accept w.
- However, co-A_TM is NOT mapping-reducible to A_TM (it would require A_TM to be recursive).

### 11.4 The Post Correspondence Problem (PCP)

**PCP Instance:** A collection of dominoes, each with a top string and bottom string:
[ tâ‚/bâ‚ ], [ tâ‚‚/bâ‚‚ ], â€¦, [ tâ‚–/bâ‚– ]

**Question:** Can we arrange a sequence of dominoes (allowing repetition) such that the concatenation of top strings equals the concatenation of bottom strings?

**Formally:** Does there exist a sequence iâ‚, iâ‚‚, â€¦, iâ‚™ (n â‰¥ 1) such that t_{iâ‚}t_{iâ‚‚}â€¦t_{iâ‚™} = b_{iâ‚}b_{iâ‚‚}â€¦b_{iâ‚™}?

**Theorem:** PCP is undecidable.

**Proof strategy:** Reduce A_TM to PCP. Given âŸ¨M, wâŸ©, construct a set of dominoes that simulate the computation of M on w. A solution to the PCP instance exists iff M accepts w. The construction:
1. Encode the start configuration of M on w as the initial partial match.
2. Add dominoes for each possible TM transition.
3. Add "copy" dominoes to propagate unchanged portions of the configuration.
4. Add "cleanup" dominoes to handle the accepting state.

The undecidability of PCP is significant because PCP is a purely combinatorial problem â€” no TMs involved â€” showing that undecidability is not limited to questions about programs.

### 11.5 Undecidable Problems in Formal Language Theory

Using PCP and other reductions, we can prove undecidability of:

1. **Ambiguity of CFGs:** Given a CFG G, is G ambiguous?
   - Reduce from PCP: given dominoes, construct a CFG that generates each top and bottom concatenation. The grammar is ambiguous iff there is a PCP solution.

2. **Emptiness of intersection of CFGs:** Given CFGs Gâ‚ and Gâ‚‚, is L(Gâ‚) âˆ© L(Gâ‚‚) = âˆ…?
   - Also reducible from PCP.

3. **Equivalence of CFGs:** Given CFGs Gâ‚ and Gâ‚‚, is L(Gâ‚) = L(Gâ‚‚)?
   - Undecidable; follows from universality.

4. **Universality of CFGs:** Does a CFG generate Î£*?
   - Undecidable; reduce from ambiguity or PCP.

5. **Context-free equivalence of TMs:** Is L(M) context-free?
   - Undecidable by Rice's theorem.

### 11.6 Complete Problems for RE

A problem is **RE-complete** if it is in RE and every RE problem reduces to it.

**A_TM** is RE-complete (by definition of RE â€” each RE language corresponds to a TM).

**HALT_TM** is RE-complete: HALT_TM âˆˆ RE and A_TM â‰¤_m HALT_TM (given âŸ¨M,wâŸ©, output âŸ¨M,wâŸ© â€” if M accepts w, M certainly halts on w; if M doesn't accept, either M halts rejecting or loops, and we want halting in the HALT_TM case. Actually, the mapping is: given âŸ¨M,wâŸ©, construct M' that halts iff M accepts. More precisely: A_TM â‰¤_m HALT_TM by mapping âŸ¨M,wâŸ© to âŸ¨M', wâŸ© where M' simulates M and halts when M accepts, loops when M rejects.)

**PCP** is also RE-complete: PCP is RE (we can nondeterministically try sequences) and A_TM â‰¤_m PCP.

### 11.7 The Busy Beaver Problem

The **busy beaver function** BB(n) = maximum number of steps a halting n-state TM (over {0,1} with blank symbol) can run before halting, starting on a blank tape.

**Key results:**
- BB(n) is not computable (otherwise we could solve the halting problem).
- BB(1) = 1, BB(2) = 6, BB(3) = 21, BB(4) = 107, BB(5) â‰¥ 47,176,870, BB(6) is astronomically large.

The busy beaver problem is an elegant example of a non-computable function â€” one that grows faster than any computable function.

## Examples

### Example 11.1: Mapping Reduction from A_TM to HALT_TM

Define f(âŸ¨M, wâŸ©) = âŸ¨M', wâŸ© where M' is:
- M'(x): Run M on x. If M accepts, halt (accept). If M rejects, enter an infinite loop.

Then:
- âŸ¨M, wâŸ© âˆˆ A_TM âŸ¹ M accepts w âŸ¹ M' halts on w âŸ¹ âŸ¨M', wâŸ© âˆˆ HALT_TM.
- âŸ¨M, wâŸ© âˆ‰ A_TM âŸ¹ M rejects or loops on w âŸ¹ M' loops (if M loops) or M' loops (if M rejects) âŸ¹ âŸ¨M', wâŸ© âˆ‰ HALT_TM.

Thus A_TM â‰¤_m HALT_TM.

### Example 11.2: PCP Instance

Consider dominoes: [ab/a], [b/ba], [a/ab], [Îµ/a].

Can we find a match? Try: [ab/a][b/ba] = top: abb, bottom: aba. Not matching.

Try: [ab/a][b/ba][a/ab] = top: abba, bottom: abaab. No.

This demonstrates that finding solutions is nontrivial â€” and the problem is undecidable in general.

### Example 11.3: Valid Mapping Reduction Proof

Show that EMPTY_TM = { âŸ¨MâŸ© | L(M) = âˆ… } is not RE.

**Proof:** Reduce A_TM's complement to EMPTY_TM. Given âŸ¨M, wâŸ©, construct M':
- M'(x): Simulate M on w. If M accepts w, accept x.

Then:
- If M accepts w, L(M') = Î£* â‰  âˆ….
- If M doesn't accept w (rejects or loops), L(M') = âˆ….

So: âŸ¨M, wâŸ© âˆ‰ A_TM iff âŸ¨M'âŸ© âˆˆ EMPTY_TM.

Since co-A_TM is not RE, and EMPTY_TM is RE (we can simulate a TM and check if it accepts any string), this shows that the reduction goes the right way to prove EMPTY_TM is not RE.

Wait â€” actually we need co-A_TM â‰¤_m EMPTY_TM. Since co-A_TM is not RE, this would show EMPTY_TM is not RE either. But EMPTY_TM is known to be not RE (we can prove this).

### Example 11.4: Rice's Theorem â€” Is L(M) Infinite?

Property P = { L | L is infinite }. P is non-trivial:
- Some RE languages are infinite (e.g., Î£*).
- Some are not (e.g., âˆ…).

By Rice's theorem, INFINITE_TM = { âŸ¨MâŸ© | L(M) is infinite } is undecidable.

### Example 11.5: Mapping Reduction for CFG Ambiguity

Given PCP instance with dominoes (tâ‚,bâ‚), â€¦, (tâ‚–,bâ‚–), construct CFG:
- S â†’ T | B
- T â†’ tâ‚T | tâ‚Tâ‚ | tâ‚‚T | tâ‚‚Tâ‚‚ | â€¦ | tâ‚–T | tâ‚–Tâ‚–
- B â†’ bâ‚B | bâ‚Bâ‚ | bâ‚‚B | bâ‚‚Bâ‚‚ | â€¦ | bâ‚–B | bâ‚–Bâ‚–
Where Táµ¢ and Báµ¢ are "marker" variables.

The idea: T generates sequences of top strings; B generates sequences of bottom strings. The grammar is ambiguous for some string iff the same sequence of dominoes (indices) can generate it from both T and B â€” i.e., there's a PCP solution.

## Summary

- Mapping reductions are computable functions that preserve language membership.
- If A â‰¤_m B and B is decidable, then A is decidable (contrapositive for undecidability).
- Rice's theorem: any non-trivial semantic property of TMs is undecidable.
- The Post Correspondence Problem is a combinatorial undecidable problem.
- Turing reductions (oracle access) are more general than mapping reductions.
- A_TM is RE-complete; many other problems are RE-complete via reductions.
- Undecidability of CFG problems (ambiguity, equivalence) follows from PCP reductions.

## Exercises

### Basic

1. Show that A_TM â‰¤_m HALT_TM (the halting problem).
2. Apply Rice's theorem to show that { âŸ¨MâŸ© | M accepts exactly one string } is undecidable.
3. Define what it means for a function to be a mapping reduction.
4. Show that if A â‰¤_m B and B is RE, then A is RE.
5. Construct a simple PCP instance with 2 dominoes and find a solution, or prove none exists.

### Intermediate

6. Prove formally that EMPTY_TM = { âŸ¨MâŸ© | L(M) = âˆ… } is undecidable using a reduction from A_TM.
7. Show that INFINITE_TM is undecidable using Rice's theorem, then via a direct reduction.
8. Show that PCP is RE by describing a recognizer.
9. Prove that the language { âŸ¨MâŸ© | L(M) is regular } is undecidable using Rice's theorem.
10. Show that CFG universality (does G generate Î£*?) is undecidable.

### Advanced

11. Prove that PCP is undecidable by reducing A_TM to PCP.
12. Show that the equivalence problem for CFGs is undecidable by reducing PCP to it.
13. Prove that there is an oracle relative to which P = NP, and another relative to which P â‰  NP. Why does this show that diagonalization cannot resolve P vs NP?
14. Show that the problem of whether a TM ever writes a non-blank symbol on its tape is undecidable but NOT covered by Rice's theorem (it's not a property of the language).
15. Prove that the Busy Beaver function BB(n) is not computable. (Hint: if it were, we could solve the halting problem by running a TM for BB(n) steps and checking if it halted.)
