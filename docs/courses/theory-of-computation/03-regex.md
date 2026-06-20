# Chapter 3: Regular Expressions

> **Previous:** [Nondeterministic Finite Automata](./02-nfa.md) | **Next:** [Properties of Regular Languages](./04-regular-languages.md)



## Learning Objectives

- Define regular expressions and the languages they denote.
- Describe the three basic operators: union, concatenation, and Kleene star.
- Understand operator precedence in regular expressions.
- State the algebraic laws for regular expressions.
- Convert between regular expressions and finite automata.
- Apply Arden's lemma to solve regular expression equations.
- Understand the limitations of regular expressions.


## Chapter at a Glance
| Topic | Key Insight | Practical Takeaway |
|-------|------------|-------------------|
| Regex Definition | Algebraic notation for patterns | Foundation for text processing |
| Three Operators | Union, concatenation, Kleene star | Build complex patterns from simple |
| Operator Precedence | Star > concat > union | Prevents ambiguity in patterns |
| RE ↔ FA | Every RE has equivalent automaton | Lexer generators use this equivalence |
| Arden's Lemma | Solves X = AX ∪ B | Converts DFA to RE systematically |




## Chapter Roadmap
```mermaid
flowchart LR
    A[Regex Definition] --> B[Three Operators]
    B --> C[Algebraic Laws]
    C --> D[RE to FA]
    D --> E[FA to RE]
    E --> F[Arden Lemma]
```

## Theory

![Regular Expressions Mindmap](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/03-regex.png)

### 3.1 What is a Regular Expression?

A **regular expression** is a algebraic notation for describing a pattern â€” a set of strings. Regular expressions are used extensively in text processing, lexical analysis, and input validation.

A regular expression **r** denotes a language **L(r)**, which is a set of strings over some alphabet Î£.

### 3.2 Formal Definition

**Basis:**
- Îµ is a regular expression denoting L(Îµ) = {Îµ} (the set containing the empty string).
- âˆ… is a regular expression denoting L(âˆ…) = âˆ… (the empty language).
- For each a âˆˆ Î£, a is a regular expression denoting L(a) = {a}.

**Inductive Step:**
Let r and s be regular expressions denoting languages L(r) and L(s). Then:

1. **(r + s)** or **(r | s)**: union/alternation â€” L(r + s) = L(r) âˆª L(s).
2. **(r Â· s)** or **(rs)**: concatenation â€” L(rs) = L(r)L(s) = { xy | x âˆˆ L(r), y âˆˆ L(s) }.
3. **(r\*)**: Kleene star â€” L(r*) = âˆª_{i â‰¥ 0} L(r)â± where L(r)â° = {Îµ} and L(r)â±âºÂ¹ = L(r)â±L(r).
4. **(r)**: parentheses for grouping â€” L((r)) = L(r).

Additional derived operators:
- **râº** = rr* (one or more repetitions).
- **r?** = r + Îµ (optional).
- **.** (in some notations) = any single symbol.

### 3.3 Operator Precedence

When interpreting regular expressions without explicit parentheses, the order is:
1. **Kleene star** (*) â€” highest precedence (binds tightest).
2. **Concatenation** (Â·).
3. **Union** (+ or |) â€” lowest precedence.

So `ab*c` means `a(b*)c`, not `(ab)*c` or `ab(*c)`.

### 3.4 Algebraic Laws of Regular Expressions

Regular expressions satisfy algebraic laws that can be used to simplify and manipulate them.

| Law | Expression |
|-----|-----------|
| Associativity of union | (r + s) + t = r + (s + t) |
| Commutativity of union | r + s = s + r |
| Identity for union | r + âˆ… = r = âˆ… + r |
| Annihilator for concat | âˆ…r = râˆ… = âˆ… |
| Identity for concat | Îµr = rÎµ = r |
| Associativity of concat | (rs)t = r(st) |
| Distributive (left) | r(s + t) = rs + rt |
| Distributive (right) | (s + t)r = sr + tr |
| Idempotence of union | r + r = r |
| Kleene star | âˆ…* = Îµ |
| Kleene star | Îµ* = Îµ |
| Kleene star | (r*)* = r* |
| Kleene star | r* = Îµ + rr* |
| Kleene star | r* = (Îµ + r)* |
| Kleene star | r* = (r*)* |
| r**r* | r*r* = r* |

### 3.5 Equivalence of Regular Expressions and Finite Automata

**Theorem:** A language is regular if and only if it can be described by a regular expression.

This theorem has two directions:

**Direction 1 (RE â†’ FA):** Every regular expression can be converted to an NFA-Îµ.

The conversion follows the structural induction of the regular expression definition. Each subexpression is converted to an NFA-Îµ with:
- Exactly one start state (no incoming transitions).
- Exactly one accepting state (no outgoing transitions).

**Basis conversions:**
- For Îµ: start state connected to accept state via Îµ-transition.
- For âˆ…: start state (non-accepting) with no outgoing transitions.
- For a âˆˆ Î£: start --a--> accept.

**Inductive conversions (using modular construction):**
Let Nâ‚ and Nâ‚‚ be the NFAs for r and s with start states sâ‚, sâ‚‚ and accept states aâ‚, aâ‚‚.

- **Union** (r + s): New start sâ‚€ --Îµ--> sâ‚ and sâ‚€ --Îµ--> sâ‚‚; aâ‚ --Îµ--> new accept aâ‚€ and aâ‚‚ --Îµ--> aâ‚€.
- **Concatenation** (rs): aâ‚ (of Nâ‚) --Îµ--> sâ‚‚ (of Nâ‚‚); aâ‚ becomes non-accepting; aâ‚‚ is the accept state.
- **Star** (r*): New start sâ‚€ --Îµ--> new accept aâ‚€ (for Îµ); sâ‚€ --Îµ--> sâ‚; aâ‚ --Îµ--> sâ‚ (for loop) and aâ‚ --Îµ--> aâ‚€.

**Direction 2 (FA â†’ RE):** Every DFA can be converted to a regular expression using one of:
- **State elimination method:** Remove states one by one, updating transitions with regular expressions.
- **Arden's lemma** (see Section 3.6): Solve a system of linear equations over languages.

### 3.6 Arden's Lemma

Arden's lemma is a key tool for converting DFA to regular expressions by solving equations.

**Lemma:** For languages A, B âŠ† Î£* with Îµ âˆ‰ A (unless B = âˆ… or A = âˆ…), the equation X = AX âˆª B has the unique solution X = A*B.

**Proof intuition:** Unrolling the equation gives X = B âˆª AB âˆª AÂ²B âˆª ... = A*B. The condition Îµ âˆ‰ A ensures uniqueness.

To convert a DFA to a regular expression:
1. For each state qáµ¢, write the equation: Láµ¢ = âˆª_{a âˆˆ Î£} a Â· Lâ±¼ (where Î´(qáµ¢, a) = qâ±¼) âˆª (if qáµ¢ âˆˆ F then Îµ).
2. Solve the system of equations using substitution and Arden's lemma.
3. The language recognized is the solution for Lâ‚€ (start state).

## Examples

### Example 3.1: Building Regular Expressions for Common Languages

| Language Description | Regular Expression |
|---------------------|-------------------|
| Strings containing "ab" | (a+b)* ab (a+b)* |
| Strings starting with 'a' | a(a+b)* |
| Strings ending with 'b' | (a+b)* b |
| Strings with even number of 'a's | (b* a b* a b*)* |
| Strings with no consecutive 0s | (1* 011*)* (Îµ + 0) |
| Binary strings divisible by 2 | (0+1)* 0 |
| Strings of alternating 0s and 1s | (01)* + (10)* + 0(10)* + 1(01)* |

### Example 3.2: Convert Regular Expression to NFA-Îµ

Convert r = a(a+b)* b to an NFA-Îµ.

**Step 1:** Parse: concatenation of a, (a+b)*, and b.

**Step 2:** Build NFA for "a": qâ‚€ --a--> qâ‚.

**Step 3:** Build NFA for "a+b": qâ‚‚ --a--> qâ‚ƒ, qâ‚‚ --b--> qâ‚ƒ.

**Step 4:** Build NFA for "(a+b)*": New start qâ‚„ --Îµ--> qâ‚… (accept for Îµ); qâ‚„ --Îµ--> qâ‚‚; qâ‚ƒ --Îµ--> qâ‚‚; qâ‚ƒ --Îµ--> qâ‚….

Simplified representation (text):
```
qâ‚€ --a--> qâ‚ --Îµ--> qâ‚„ --Îµ--> qâ‚‚ --a--> qâ‚ƒ --Îµ--> qâ‚‚
                              qâ‚‚ --b--> qâ‚ƒ      qâ‚ƒ --Îµ--> qâ‚…
qâ‚… --Îµ--> qâ‚†
qâ‚† --b--> qâ‚‡ (accept)
```

This can be simplified further during construction.

### Example 3.3: Convert DFA to Regular Expression (State Elimination)

Given DFA for strings with an even number of 0s over {0,1}:
- qâ‚€ (start, accept): on 0 â†’ qâ‚, on 1 â†’ qâ‚€
- qâ‚: on 0 â†’ qâ‚€, on 1 â†’ qâ‚

**Step 1:** Add a new start s with Îµ â†’ qâ‚€ and new accept a with Îµ from qâ‚€.

**Step 2:** Eliminate qâ‚:
- qâ‚€ â†’ qâ‚ â†’ qâ‚€: path qâ‚€ --0--> qâ‚ --0--> qâ‚€ adds label 00
- qâ‚ â†’ qâ‚: loop 1
- So new transition qâ‚€ --0Â·(1)*Â·0--> qâ‚€
- Plus existing qâ‚€ --1--> qâ‚€

**Step 3:** Result: qâ‚€ has loop (1 + 0Â·1*Â·0)*. Remove qâ‚€ connecting s to a: (1 + 01*0)*.

The language is L = { w | w has an even number of 0s } = (1 + 01*0)*.

### Example 3.4: Using Arden's Lemma

Solve for the language of the DFA with:
- Lâ‚€ = 0Â·Lâ‚ + 1Â·Lâ‚‚ + Îµ (accepting)
- Lâ‚ = 1Â·Lâ‚€
- Lâ‚‚ = 0Â·Lâ‚

Where Lâ‚€, Lâ‚, Lâ‚‚ are the languages accepted from states qâ‚€, qâ‚, qâ‚‚ respectively.

**Step 1:** From Lâ‚: Lâ‚ = 1Â·Lâ‚€

**Step 2:** From Lâ‚‚: Lâ‚‚ = 0Â·Lâ‚ = 0Â·1Â·Lâ‚€

**Step 3:** Substitute into Lâ‚€:
Lâ‚€ = 0Â·(1Â·Lâ‚€) + 1Â·(0Â·1Â·Lâ‚€) + Îµ = (01 + 101)Â·Lâ‚€ + Îµ

**Step 4:** Apply Arden's lemma (X = AX + B â†’ X = A*B):
Lâ‚€ = (01 + 101)*Â·Îµ = (01 + 101)*



## Concept Comparison Table
| Operator | Notation | Example | Language |
|----------|----------|---------|----------|
| Union | + or | | a+b | {a, b} |
| Concatenation | · or juxtaposition | ab | {ab} |
| Kleene star | * | a* | {ε, a, aa, ...} |
| One or more | ⁺ | a⁺ | {a, aa, aaa, ...} |
| Optional | ? | a? | {ε, a} |

## Quick Reference
| Rule | Law |
|------|-----|
| Identity (union) | r + ∅ = r |
| Identity (concat) | εr = rε = r |
| Annihilator | ∅r = r∅ = ∅ |
| Distributive | r(s+t) = rs + rt |
| Star | (r*)* = r* |
| Star | ε* = ε |

## Cross-Application Matrix
| Area | Regex Usage |
|------|------------|
| Text editors | Search/replace patterns |
| Compilers | Lexer token specification |
| Data validation | Email, phone, SSN format check |
| Network security | Signature patterns in IDS |
| Database | SQL LIKE, REGEXP operators |

## Chapter Quiz

**Q1.** What does the Kleene star operator do?
- A) Matches exactly one repetition
- B) Matches zero or more repetitions ✓
- C) Matches zero or one repetition
- D) Matches one or more repetitions

<details>
<summary>Answer</summary>
**B)** r* = {ε} ∪ {r} ∪ {rr} ∪ ... — zero or more repetitions.
</details>

**Q2.** In ab*c, the star applies to:
- A) ab
- B) b ✓
- C) bc
- D) Entire expression

<details>
<summary>Answer</summary>
**B)** Star has highest precedence: ab*c = a(b*)c.
</details>

**Q3.** What language does (0+1)* 0 denote?
- A) All binary strings
- B) Binary strings ending with 0 ✓
- C) Binary strings starting with 0
- D) Binary strings with only 0s

<details>
<summary>Answer</summary>
**B)** (0+1)* generates any binary string, then 0 forces it to end with 0.
</details>

**Q4.** Arden's lemma solves X = AX ∪ B with solution:
- A) X = BA*
- B) X = A*B ✓
- C) X = B*A
- D) X = (AB)*

<details>
<summary>Answer</summary>
**B)** X = A*B is the unique solution when ε ∉ A.
</details>

**Q5.** Can regular expressions describe { aⁿbⁿ | n ≥ 0 }?
- A) Yes, with star operator
- B) No, it's not regular ✓
- C) Yes, using concatenation
- D) Only with backreferences

<details>
<summary>Answer</summary>
**B)** { aⁿbⁿ } is not regular — no regex can match balanced pairs without counting.
</details>

## Summary

- Regular expressions describe languages algebraically using union (+), concatenation, and Kleene star (*).
- Regular expressions and finite automata are equivalent: each can be converted to the other.
- Arden's lemma solves language equations of the form X = AX âˆª B.
- The state elimination method converts DFA to regular expression by removing states.
- Algebraic laws allow algebraic manipulation and simplification of regular expressions.
- Three basic operations correspond to modular NFA constructions (union, concatenation, star).

## Exercises

### Basic

1. Write regular expressions for: (a) strings ending with "00", (b) strings starting with "a" and ending with "b", (c) strings of length exactly 4.
2. Describe in English the languages denoted by: (a) a* b*, (b) (a+b)* aa (a+b)*, (c) (00+11)*.
3. Convert r = (0+1)* 0 (0+1) to an NFA-Îµ using the modular construction.
4. Show that (Îµ + a)* = a* using algebraic laws.
5. Simplify the regular expression: a* + a*b + a*bb.

### Intermediate

6. Convert the DFA from Example 1.2 (exactly two 1s) to a regular expression using state elimination.
7. Prove (r + s)* = r* (s r*)* using algebraic laws or set equality.
8. Convert r = (a + b)* a (a + b)* b (a + b)* to an NFA-Îµ, then to a DFA via subset construction.
9. Using Arden's lemma, solve for the language of a DFA for strings over {0,1} where every 0 is followed immediately by a 1.
10. Find a regular expression for the language L = { w âˆˆ {0,1}* | w has no two consecutive 0s and no two consecutive 1s }.

### Advanced

11. Prove that the set of regular languages is closed under complement using DFA-to-regular-expression conversion.
12. Derive a regular expression for binary strings that represent numbers divisible by 3 (from Example 1.3).
13. Prove that the language { 0â¿1â¿ | n â‰¥ 0 } is not regular (cannot be described by a regular expression).
14. Show that every regular expression can be converted to an equivalent Îµ-free NFA (no Îµ-transitions) with at most 2|r| states, where |r| is the length of the expression.
15. Implement (in pseudocode) the Thompson construction: given a parse tree of a regular expression, produce an NFA-Îµ. Your algorithm should handle union, concatenation, and Kleene star.
