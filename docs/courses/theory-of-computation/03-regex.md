# Chapter 3: Regular Expressions

## Learning Objectives

- Define regular expressions and the languages they denote.
- Describe the three basic operators: union, concatenation, and Kleene star.
- Understand operator precedence in regular expressions.
- State the algebraic laws for regular expressions.
- Convert between regular expressions and finite automata.
- Apply Arden's lemma to solve regular expression equations.
- Understand the limitations of regular expressions.

## Theory

![Regular Expressions Mindmap](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/theory-of-computation/03-regex.png)

### 3.1 What is a Regular Expression?

A **regular expression** is a algebraic notation for describing a pattern — a set of strings. Regular expressions are used extensively in text processing, lexical analysis, and input validation.

A regular expression **r** denotes a language **L(r)**, which is a set of strings over some alphabet Σ.

### 3.2 Formal Definition

**Basis:**
- ε is a regular expression denoting L(ε) = {ε} (the set containing the empty string).
- ∅ is a regular expression denoting L(∅) = ∅ (the empty language).
- For each a ∈ Σ, a is a regular expression denoting L(a) = {a}.

**Inductive Step:**
Let r and s be regular expressions denoting languages L(r) and L(s). Then:

1. **(r + s)** or **(r | s)**: union/alternation — L(r + s) = L(r) ∪ L(s).
2. **(r · s)** or **(rs)**: concatenation — L(rs) = L(r)L(s) = { xy | x ∈ L(r), y ∈ L(s) }.
3. **(r\*)**: Kleene star — L(r*) = ∪_{i ≥ 0} L(r)ⁱ where L(r)⁰ = {ε} and L(r)ⁱ⁺¹ = L(r)ⁱL(r).
4. **(r)**: parentheses for grouping — L((r)) = L(r).

Additional derived operators:
- **r⁺** = rr* (one or more repetitions).
- **r?** = r + ε (optional).
- **.** (in some notations) = any single symbol.

### 3.3 Operator Precedence

When interpreting regular expressions without explicit parentheses, the order is:
1. **Kleene star** (*) — highest precedence (binds tightest).
2. **Concatenation** (·).
3. **Union** (+ or |) — lowest precedence.

So `ab*c` means `a(b*)c`, not `(ab)*c` or `ab(*c)`.

### 3.4 Algebraic Laws of Regular Expressions

Regular expressions satisfy algebraic laws that can be used to simplify and manipulate them.

| Law | Expression |
|-----|-----------|
| Associativity of union | (r + s) + t = r + (s + t) |
| Commutativity of union | r + s = s + r |
| Identity for union | r + ∅ = r = ∅ + r |
| Annihilator for concat | ∅r = r∅ = ∅ |
| Identity for concat | εr = rε = r |
| Associativity of concat | (rs)t = r(st) |
| Distributive (left) | r(s + t) = rs + rt |
| Distributive (right) | (s + t)r = sr + tr |
| Idempotence of union | r + r = r |
| Kleene star | ∅* = ε |
| Kleene star | ε* = ε |
| Kleene star | (r*)* = r* |
| Kleene star | r* = ε + rr* |
| Kleene star | r* = (ε + r)* |
| Kleene star | r* = (r*)* |
| r**r* | r*r* = r* |

### 3.5 Equivalence of Regular Expressions and Finite Automata

**Theorem:** A language is regular if and only if it can be described by a regular expression.

This theorem has two directions:

**Direction 1 (RE → FA):** Every regular expression can be converted to an NFA-ε.

The conversion follows the structural induction of the regular expression definition. Each subexpression is converted to an NFA-ε with:
- Exactly one start state (no incoming transitions).
- Exactly one accepting state (no outgoing transitions).

**Basis conversions:**
- For ε: start state connected to accept state via ε-transition.
- For ∅: start state (non-accepting) with no outgoing transitions.
- For a ∈ Σ: start --a--> accept.

**Inductive conversions (using modular construction):**
Let N₁ and N₂ be the NFAs for r and s with start states s₁, s₂ and accept states a₁, a₂.

- **Union** (r + s): New start s₀ --ε--> s₁ and s₀ --ε--> s₂; a₁ --ε--> new accept a₀ and a₂ --ε--> a₀.
- **Concatenation** (rs): a₁ (of N₁) --ε--> s₂ (of N₂); a₁ becomes non-accepting; a₂ is the accept state.
- **Star** (r*): New start s₀ --ε--> new accept a₀ (for ε); s₀ --ε--> s₁; a₁ --ε--> s₁ (for loop) and a₁ --ε--> a₀.

**Direction 2 (FA → RE):** Every DFA can be converted to a regular expression using one of:
- **State elimination method:** Remove states one by one, updating transitions with regular expressions.
- **Arden's lemma** (see Section 3.6): Solve a system of linear equations over languages.

### 3.6 Arden's Lemma

Arden's lemma is a key tool for converting DFA to regular expressions by solving equations.

**Lemma:** For languages A, B ⊆ Σ* with ε ∉ A (unless B = ∅ or A = ∅), the equation X = AX ∪ B has the unique solution X = A*B.

**Proof intuition:** Unrolling the equation gives X = B ∪ AB ∪ A²B ∪ ... = A*B. The condition ε ∉ A ensures uniqueness.

To convert a DFA to a regular expression:
1. For each state qᵢ, write the equation: Lᵢ = ∪_{a ∈ Σ} a · Lⱼ (where δ(qᵢ, a) = qⱼ) ∪ (if qᵢ ∈ F then ε).
2. Solve the system of equations using substitution and Arden's lemma.
3. The language recognized is the solution for L₀ (start state).

## Examples

### Example 3.1: Building Regular Expressions for Common Languages

| Language Description | Regular Expression |
|---------------------|-------------------|
| Strings containing "ab" | (a+b)* ab (a+b)* |
| Strings starting with 'a' | a(a+b)* |
| Strings ending with 'b' | (a+b)* b |
| Strings with even number of 'a's | (b* a b* a b*)* |
| Strings with no consecutive 0s | (1* 011*)* (ε + 0) |
| Binary strings divisible by 2 | (0+1)* 0 |
| Strings of alternating 0s and 1s | (01)* + (10)* + 0(10)* + 1(01)* |

### Example 3.2: Convert Regular Expression to NFA-ε

Convert r = a(a+b)* b to an NFA-ε.

**Step 1:** Parse: concatenation of a, (a+b)*, and b.

**Step 2:** Build NFA for "a": q₀ --a--> q₁.

**Step 3:** Build NFA for "a+b": q₂ --a--> q₃, q₂ --b--> q₃.

**Step 4:** Build NFA for "(a+b)*": New start q₄ --ε--> q₅ (accept for ε); q₄ --ε--> q₂; q₃ --ε--> q₂; q₃ --ε--> q₅.

Simplified representation (text):
```
q₀ --a--> q₁ --ε--> q₄ --ε--> q₂ --a--> q₃ --ε--> q₂
                              q₂ --b--> q₃      q₃ --ε--> q₅
q₅ --ε--> q₆
q₆ --b--> q₇ (accept)
```

This can be simplified further during construction.

### Example 3.3: Convert DFA to Regular Expression (State Elimination)

Given DFA for strings with an even number of 0s over {0,1}:
- q₀ (start, accept): on 0 → q₁, on 1 → q₀
- q₁: on 0 → q₀, on 1 → q₁

**Step 1:** Add a new start s with ε → q₀ and new accept a with ε from q₀.

**Step 2:** Eliminate q₁:
- q₀ → q₁ → q₀: path q₀ --0--> q₁ --0--> q₀ adds label 00
- q₁ → q₁: loop 1
- So new transition q₀ --0·(1)*·0--> q₀
- Plus existing q₀ --1--> q₀

**Step 3:** Result: q₀ has loop (1 + 0·1*·0)*. Remove q₀ connecting s to a: (1 + 01*0)*.

The language is L = { w | w has an even number of 0s } = (1 + 01*0)*.

### Example 3.4: Using Arden's Lemma

Solve for the language of the DFA with:
- L₀ = 0·L₁ + 1·L₂ + ε (accepting)
- L₁ = 1·L₀
- L₂ = 0·L₁

Where L₀, L₁, L₂ are the languages accepted from states q₀, q₁, q₂ respectively.

**Step 1:** From L₁: L₁ = 1·L₀

**Step 2:** From L₂: L₂ = 0·L₁ = 0·1·L₀

**Step 3:** Substitute into L₀:
L₀ = 0·(1·L₀) + 1·(0·1·L₀) + ε = (01 + 101)·L₀ + ε

**Step 4:** Apply Arden's lemma (X = AX + B → X = A*B):
L₀ = (01 + 101)*·ε = (01 + 101)*

## Summary

- Regular expressions describe languages algebraically using union (+), concatenation, and Kleene star (*).
- Regular expressions and finite automata are equivalent: each can be converted to the other.
- Arden's lemma solves language equations of the form X = AX ∪ B.
- The state elimination method converts DFA to regular expression by removing states.
- Algebraic laws allow algebraic manipulation and simplification of regular expressions.
- Three basic operations correspond to modular NFA constructions (union, concatenation, star).

## Exercises

### Basic

1. Write regular expressions for: (a) strings ending with "00", (b) strings starting with "a" and ending with "b", (c) strings of length exactly 4.
2. Describe in English the languages denoted by: (a) a* b*, (b) (a+b)* aa (a+b)*, (c) (00+11)*.
3. Convert r = (0+1)* 0 (0+1) to an NFA-ε using the modular construction.
4. Show that (ε + a)* = a* using algebraic laws.
5. Simplify the regular expression: a* + a*b + a*bb.

### Intermediate

6. Convert the DFA from Example 1.2 (exactly two 1s) to a regular expression using state elimination.
7. Prove (r + s)* = r* (s r*)* using algebraic laws or set equality.
8. Convert r = (a + b)* a (a + b)* b (a + b)* to an NFA-ε, then to a DFA via subset construction.
9. Using Arden's lemma, solve for the language of a DFA for strings over {0,1} where every 0 is followed immediately by a 1.
10. Find a regular expression for the language L = { w ∈ {0,1}* | w has no two consecutive 0s and no two consecutive 1s }.

### Advanced

11. Prove that the set of regular languages is closed under complement using DFA-to-regular-expression conversion.
12. Derive a regular expression for binary strings that represent numbers divisible by 3 (from Example 1.3).
13. Prove that the language { 0ⁿ1ⁿ | n ≥ 0 } is not regular (cannot be described by a regular expression).
14. Show that every regular expression can be converted to an equivalent ε-free NFA (no ε-transitions) with at most 2|r| states, where |r| is the length of the expression.
15. Implement (in pseudocode) the Thompson construction: given a parse tree of a regular expression, produce an NFA-ε. Your algorithm should handle union, concatenation, and Kleene star.
