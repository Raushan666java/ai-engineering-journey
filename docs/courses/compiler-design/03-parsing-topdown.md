# Chapter 3: Top-Down Parsing

## Learning Objectives

After completing this chapter, students will be able to: define context-free grammars and use them to describe programming-language syntax; construct derivations and parse trees; eliminate ambiguity, left recursion, and common prefixes from grammars; compute FIRST and FOLLOW sets; implement recursive-descent parsers; and construct LL(1) parsing tables.

## Theory

### Context-Free Grammars

A context-free grammar (CFG) is a four-tuple G = (V, T, P, S), where V is a finite set of nonterminal symbols, T is a finite set of terminal symbols disjoint from V, P is a finite set of productions A → α where A ∈ V and α ∈ (V ∪ T)*, and S ∈ V is the start symbol. The language L(G) is the set of all strings of terminals derivable from the start symbol by repeatedly replacing nonterminals with the right-hand side of a production.

Context-free grammars are more powerful than regular expressions and are the canonical formalism for describing the syntactic structure of programming languages. A grammar for arithmetic expressions might include:

```
expr   → expr + term | term
term   → term * factor | factor
factor → ( expr ) | id
```

### Derivations and Parse Trees

A derivation is a sequence of replacement steps that transforms the start symbol into a terminal string. A **leftmost derivation** replaces the leftmost nonterminal at each step; a **rightmost derivation** replaces the rightmost nonterminal at each step.

A parse tree is a graphical representation of a derivation in which each interior node is labeled with a nonterminal, each leaf with a terminal or ε, and the children of an interior node correspond to the right-hand side of a production. The yield of a parse tree is the concatenation of its leaf symbols, which forms the derived terminal string.

### Ambiguity

A grammar is **ambiguous** if there exists a terminal string that has more than one distinct parse tree (equivalently, more than one leftmost or rightmost derivation). Ambiguity is undesirable because it leads to multiple possible interpretations of a program. Consider the grammar:

```
string → string + string | id
```

The string `id + id + id` has two leftmost derivations, corresponding to left-associative and right-associative grouping. Ambiguity in programming-language constructs is typically resolved by imposing associativity and precedence rules either in the grammar or in the parser implementation.

### Left Recursion Elimination

A grammar is **left-recursive** if a nonterminal A derives a string beginning with A. Immediate left recursion, where A → Aα | β, is eliminated by rewriting as:

```
A  → βA'
A' → αA' | ε
```

For indirect left recursion, where A ⇒* Aα through multiple steps, the grammar may be transformed by ordering nonterminals and substituting productions until all left recursion is immediate, then eliminating it.

### Left Factoring

When two or more productions for the same nonterminal share a common prefix, predictive parsing cannot choose among them without lookahead. **Left factoring** delays the choice by extracting the common prefix:

```
A → αβ₁ | αβ₂    becomes    A → αA'   A' → β₁ | β₂
```

### FIRST and FOLLOW Sets

The FIRST set of a string α, denoted FIRST(α), is the set of terminals that can begin strings derivable from α. If α ⇒* ε, then ε ∈ FIRST(α). Computation rules for FIRST:

1. If X is a terminal, FIRST(X) = {X}.
2. If X → Y₁Y₂...Yₖ, add each a ∈ FIRST(Yᵢ) not including ε, then if all Y₁ through Yₖ can derive ε, add ε.
3. If X → ε, add ε.

The FOLLOW set of a nonterminal A, denoted FOLLOW(A), is the set of terminals that can appear immediately to the right of A in some sentential form. Computation rules:

1. $ ∈ FOLLOW(S) where S is the start symbol.
2. If A → αBβ, add FIRST(β) \ {ε} to FOLLOW(B).
3. If A → αB or A → αBβ where ε ∈ FIRST(β), add FOLLOW(A) to FOLLOW(B).

### LL(1) Parsing

An LL(1) parser reads input left-to-right, produces a leftmost derivation, and uses one token of lookahead. A grammar is LL(1) if for every pair of productions A → α | β, the following conditions hold:

1. FIRST(α) ∩ FIRST(β) = ∅.
2. At most one of α and β can derive ε.
3. If β ⇒* ε, then FIRST(α) ∩ FOLLOW(A) = ∅ (and vice versa).

The LL(1) parsing table is a two-dimensional array M[A, a] where A is a nonterminal and a is a terminal. Entry M[A, a] contains the production to use when the top of the stack is A and the current input symbol is a.

### Recursive-Descent Parsing

Recursive-descent parsing implements each nonterminal as a procedure that examines the input and calls other procedures for subexpressions. A recursive-descent parser for LL(1) grammars can be written manually by using FIRST and FOLLOW information to decide which production to apply. Backtracking is avoided by ensuring the grammar is LL(1).

## Example

### Example 3.1: LL(1) Parsing Table Construction

Consider the grammar:

```
E  → TE'
E' → +TE' | ε
T  → FT'
T' → *FT' | ε
F  → (E) | id
```

Compute FIRST(E) = {(, id}, FIRST(E') = {+, ε}, FIRST(T) = {(, id}, FIRST(T') = {*, ε}, FIRST(F) = {(, id}.

Compute FOLLOW(E) = {$, )}, FOLLOW(E') = {$, )}, FOLLOW(T) = {+, $, )}, FOLLOW(T') = {+, $, )}, FOLLOW(F) = {*, +, $, )}.

Construct table M. For production E → TE', fill M[E, (] and M[E, id]. For E' → +TE', fill M[E', +]. For E' → ε, fill M[E', $] and M[E', )].

The table has no conflicts, confirming the grammar is LL(1). Given input `id + id * id $`, the parser proceeds through a sequence of stack configurations until the stack is empty.

## Summary

Top-down parsing constructs a leftmost derivation guided by the current input token. LL(1) grammars enable deterministic parsing using a predictive parsing table. Eliminating left recursion and left factoring is essential for converting many practical grammars into LL(1) form. Recursive-descent parsing provides a straightforward implementation strategy when the grammar meets the LL(1) conditions.

## Exercises

### Review Questions

1. Define leftmost and rightmost derivations. Give an example of each.
2. What does it mean for a grammar to be ambiguous? How can ambiguity be resolved?
3. Describe the conditions that a grammar must satisfy to be LL(1).
4. Explain the role of FIRST and FOLLOW sets in constructing an LL(1) parser.

### Application Problems

1. Eliminate left recursion from the following grammar: `A → Aa | Ab | c | d`.
2. Left factor the grammar: `S → iEtS | iEtSeS | a`. What is the purpose of left factoring?
3. Compute FIRST and FOLLOW for all nonterminals in the grammar:
   `S → aBDh  B → cC  C → bC | ε  D → EF  E → g | ε  F → f | ε`
4. Construct the LL(1) parsing table for the expression grammar above and parse `id + id * id`.

### Challenge Problem

1. Implement a recursive-descent parser in your chosen language for a grammar that recognizes simple assignment statements:
   ```
   assign → id = expr
   expr   → term { (+|-) term }
   term   → factor { (*|/) factor }
   factor → id | number | ( expr )
   ```
   The parser should report syntax errors with meaningful messages and show the parse tree structure as a parenthesized expression. Test it on valid and invalid inputs.
