# Chapter 3: Top-Down Parsing

**← Previous:** [Chapter 2: Lexical Analysis](02-lexical.md) | **Next:** [Chapter 4: Bottom-Up Parsing](04-parsing-bottomup.md)

## Learning Objectives

After completing this chapter, students will be able to: define context-free grammars and use them to describe programming-language syntax; construct derivations and parse trees; eliminate ambiguity, left recursion, and common prefixes from grammars; compute FIRST and FOLLOW sets using the full iterative algorithm; construct LL(1) parsing tables; implement recursive-descent parsers with proper error reporting; and implement a complete LL(1) parser generator in TypeScript.

### Chapter at a Glance

| Section | Description |
|---------|-------------|
| Context-Free Grammars | Formal definition and role in syntax specification |
| Derivations and Parse Trees | Leftmost and rightmost derivations, parse tree construction |
| Ambiguity | Multiple parse trees and resolution strategies |
| Left Recursion Elimination | Transforming grammars for predictive parsing |
| Left Factoring | Removing common prefixes from productions |
| FIRST and FOLLOW Sets | Iterative algorithm for computing lookahead information |
| LL(1) Parsing Tables | Table-driven predictive parsing with error reporting |
| Recursive-Descent Parsing | Procedure-based implementation with backtracking |
| Error Recovery in LL Parsing | Handling syntax errors gracefully |

### Chapter Roadmap

```mermaid
flowchart LR
    A[Grammar G] --> B[Eliminate Left Recursion]
    B --> C[Left Factor]
    C --> D[Compute FIRST & FOLLOW]
    D --> E{LL(1) Valid?}
    E -->|Yes| F[Build Parsing Table]
    E -->|No| B
    F --> G[Recursive Descent / Table-Driven Parser]
    G --> H[Parse Tree / Error]
    style A fill:#e1f5fe
    style H fill:#c8e6c9
```

## Theory

### Context-Free Grammars

A **context-free grammar** (CFG) is a four-tuple `G = (V, T, P, S)`, where:

- `V` is a finite set of **nonterminal** symbols
- `T` is a finite set of **terminal** symbols disjoint from V
- `P` is a finite set of **productions** `A → α` where `A ∈ V` and `α ∈ (V ∪ T)*`
- `S ∈ V` is the **start symbol**

The language `L(G)` is the set of all strings of terminals derivable from the start symbol by repeatedly replacing nonterminals with the right-hand side of a production.

**Example**: A grammar for arithmetic expressions with standard precedence:

```
expr   → expr + term | term
term   → term * factor | factor
factor → ( expr ) | id
```

This grammar has `V = {expr, term, factor}`, `T = {id, +, *, (, )}`, and `S = expr`.

> **One-Sentence Takeaway:** A CFG is to syntax what regular expressions are to lexemes — the formal notation for describing hierarchical structure.

### Derivations and Parse Trees

A **derivation** is a sequence of replacement steps transforming the start symbol into a terminal string. A **leftmost derivation** replaces the leftmost nonterminal at each step; a **rightmost derivation** replaces the rightmost nonterminal at each step.

For grammar `E → E + T | T, T → id`, leftmost derivation of `id + id`:

```
E ⇒ E + T ⇒ T + T ⇒ id + T ⇒ id + id
```

A **parse tree** is a graphical representation of a derivation. Interior nodes are labeled with nonterminals, leaves with terminals (or ε). The children of an interior node correspond to the right-hand side of a production.

**Parse tree vs. Abstract Syntax Tree (AST)**:

```mermaid
graph TD
    subgraph "Parse Tree"
        E1["E"] --> E2["E"]
        E1 --> plus1["+"]
        E1 --> T1["T"]
        E2 --> T2["T"]
        T2 --> id1["id"]
        T1 --> id2["id"]
    end
    subgraph "AST"
        plus2["+"] --> id3["id"]
        plus2 --> id4["id"]
    end
```

The parse tree records every derivation step (including intermediate nonterminals), while the AST omits syntactic sugar like parentheses and grouping nonterminals, keeping only the essential structure.

### Ambiguity

A grammar is **ambiguous** if there exists a terminal string that has more than one distinct parse tree (equivalently, more than one leftmost or rightmost derivation). Ambiguity is undesirable because it leads to multiple possible interpretations of a program.

Consider the grammar:

```
string → string + string | id
```

The string `id + id + id` has two leftmost derivations:

```
1. string ⇒ string + string ⇒ id + string ⇒ id + string + string ⇒ id + id + string ⇒ id + id + id
2. string ⇒ string + string ⇒ string + string + string ⇒ id + string + string ⇒ id + id + string ⇒ id + id + id
```

These correspond to left-associative and right-associative grouping. Ambiguity is resolved by imposing associativity and precedence rules, either in the grammar or in the parser implementation.

**The dangling-else ambiguity** is the classic case:

```
stmt → if expr then stmt | if expr then stmt else stmt | other
```

For input `if e1 then if e2 then s1 else s2`, two parse trees exist: the `else` can attach to either `if`. Most languages resolve this by associating `else` with the nearest unmatched `if`.

### Left Recursion Elimination

A grammar is **left-recursive** if a nonterminal `A` derives a string beginning with `A`. **Immediate left recursion**, where `A → Aα | β`, is eliminated by rewriting as:

```
A  → βA'
A' → αA' | ε
```

For multiple alternatives `A → Aα₁ | Aα₂ | ... | Aαₙ | β₁ | β₂ | ... | βₘ`, the transformation is:

```
A  → β₁A' | β₂A' | ... | βₘA'
A' → α₁A' | α₂A' | ... | αₙA' | ε
```

**Indirect left recursion** (e.g., `A ⇒ B ⇒ Aα`) is eliminated by ordering nonterminals and substituting productions until all left recursion is immediate, then eliminating it.

**Algorithm for indirect left recursion elimination:**

```
Algorithm: EliminateIndirectLeftRecursion
Input: Grammar G with nonterminals A₁, A₂, ..., Aₙ
Output: Grammar with no left recursion

for i = 1 to n:
    for j = 1 to i-1:
        Replace each Aᵢ → Aⱼγ with Aᵢ → δ₁γ | δ₂γ | ... | δₖγ
            where Aⱼ → δ₁ | δ₂ | ... | δₖ are all productions for Aⱼ
    Eliminate immediate left recursion for Aᵢ
```

**Example**: Eliminate left recursion from the expression grammar:

```
Original:   E → E + T | T
            T → T * F | F
            F → (E) | id

Transformed:
            E  → TE'
            E' → +TE' | ε
            T  → FT'
            T' → *FT' | ε
            F  → (E) | id
```

### Left Factoring

When two or more productions for the same nonterminal share a common prefix, predictive parsing cannot choose among them without lookahead. **Left factoring** delays the choice by extracting the common prefix:

```
A → αβ₁ | αβ₂    becomes    A → αA'   A' → β₁ | β₂
```

**Algorithm:**

```
Algorithm: LeftFactor
Input: Nonterminal A with productions A → αβ₁ | αβ₂ | ... | αβₙ | γ
    where γ represents alternatives without the common prefix α
Output: Factored productions

Let α be the longest common prefix of two or more alternatives
If no common prefix exists, return unchanged
Replace A → αβ₁ | αβ₂ | ... | αβₙ | γ with:
    A → αA' | γ
    A' → β₁ | β₂ | ... | βₙ
```

**Example**: Left factor the grammar `S → iEtS | iEtSeS | a`:

```
S  → iEtSS' | a
S' → eS | ε
```

Here, the common prefix is `iEtS`. After factoring, the parser shifts past `iEtS`, then uses the lookahead to decide between the two branches of `S'`.

### FIRST and FOLLOW Sets

The **FIRST** set of a string `α`, denoted `FIRST(α)`, is the set of terminals that can begin strings derivable from `α`. If `α ⇒* ε`, then `ε ∈ FIRST(α)`.

The **FOLLOW** set of a nonterminal `A`, denoted `FOLLOW(A)`, is the set of terminals that can appear immediately to the right of `A` in some sentential form.

**Algorithm for FIRST:**

```
Algorithm: ComputeFIRST
Input: Grammar G
Output: FIRST(X) for all symbols X

for each terminal a: FIRST(a) = {a}
for each nonterminal A: FIRST(A) = {}
ε_in_current_pass = true

while ε_in_current_pass:
    ε_in_current_pass = false
    for each production A → X₁X₂...Xₖ:
        k = 0
        all_derive_ε = true
        while all_derive_ε and k < length:
            k++
            add (FIRST(Xₖ) \ {ε}) to FIRST(A)
            if ε ∉ FIRST(Xₖ): all_derive_ε = false
        if all_derive_ε: add ε to FIRST(A)
```

**Algorithm for FOLLOW:**

```
Algorithm: ComputeFOLLOW
Input: Grammar G
Output: FOLLOW(A) for all nonterminals A

FOLLOW(S) = {$}  // $ is end-of-input marker
for each nonterminal A ≠ S: FOLLOW(A) = {}

while any FOLLOW set changes:
    for each production A → αBβ:
        // Rule 2: add FIRST(β) \ {ε} to FOLLOW(B)
        add (FIRST(β) \ {ε}) to FOLLOW(B)
        // Rule 3: if ε ∈ FIRST(β), add FOLLOW(A) to FOLLOW(B)
        if ε ∈ FIRST(β):
            add FOLLOW(A) to FOLLOW(B)
    for each production A → αB:
        // Rule 3 (no β): add FOLLOW(A) to FOLLOW(B)
        add FOLLOW(A) to FOLLOW(B)
```

**Example**: Compute FIRST and FOLLOW for the transformed expression grammar:

| Symbol | FIRST | FOLLOW |
|--------|-------|--------|
| E | {(, id} | {$, )} |
| E' | {+, ε} | {$, )} |
| T | {(, id} | {+, $, )} |
| T' | {*, ε} | {+, $, )} |
| F | {(, id} | {*, +, $, )} |

### LL(1) Parsing Tables

An **LL(1) parser** reads input left-to-right, produces a leftmost derivation, and uses one token of lookahead. A grammar is **LL(1)** if for every pair of productions `A → α | β`:

1. `FIRST(α) ∩ FIRST(β) = ∅`
2. At most one of `α` and `β` can derive `ε`
3. If `β ⇒* ε`, then `FIRST(α) ∩ FOLLOW(A) = ∅` (and vice versa)

**Parsing table construction:**

```
Algorithm: BuildLL1Table
Input: Grammar G with FIRST and FOLLOW computed
Output: Parsing table M[A, a] — production to apply

Initialize M[A, a] = error for all A, a
for each production A → α:
    for each terminal a in FIRST(α) \ {ε}:
        M[A, a] = A → α
    if ε ∈ FIRST(α):
        for each terminal b in FOLLOW(A):
            M[A, b] = A → α
```

The **LL(1) parsing algorithm** uses a stack initialized with `[$, S]` (end marker, start symbol) and the input buffer `w$`:

```
stack = [$, S]
input = w$
while stack is not empty:
    let X = top(stack)
    let a = current input token
    if X == a:
        pop(X); advance input
    elif X is a terminal: error
    elif M[X, a] == error: error
    elif M[X, a] == X → Y₁Y₂...Yₙ:
        pop(X)
        push Yₙ...Y₂Y₁ (reverse order)
```

### Complete LL(1) Parser Generator in TypeScript

```typescript
type Symbol = string;
type Production = { lhs: Symbol; rhs: Symbol[] };
type Grammar = { nonterminals: Set<Symbol>; terminals: Set<Symbol>; start: Symbol; productions: Production[] };

class LL1ParserGenerator {
    grammar: Grammar;
    first: Map<Symbol, Set<Symbol>> = new Map();
    follow: Map<Symbol, Set<Symbol>> = new Map();
    table: Map<string, Production> = new Map();
    private epsilon = "ε";

    constructor(productions: Production[], start: Symbol) {
        this.grammar = this.normalize(productions, start);
    }

    private normalize(prods: Production[], start: Symbol): Grammar {
        const nonterminals = new Set<Symbol>();
        const terminals = new Set<Symbol>();
        for (const p of prods) {
            nonterminals.add(p.lhs);
            for (const s of p.rhs) {
                if (s !== this.epsilon && !s.startsWith("<")) terminals.add(s);
                else if (s.startsWith("<")) nonterminals.add(s);
            }
        }
        return { nonterminals, terminals, start, productions: prods };
    }

    computeFIRST(): void {
        for (const t of this.grammar.terminals) this.first.set(t, new Set([t]));
        for (const n of this.grammar.nonterminals) this.first.set(n, new Set());
        let changed = true;
        while (changed) {
            changed = false;
            for (const prod of this.grammar.productions) {
                const lhs = prod.lhs;
                const before = this.first.get(lhs)!.size;
                let allEpsilon = true;
                for (const sym of prod.rhs) {
                    if (sym === this.epsilon) break; // A → ε, add ε
                    const symFirst = this.first.get(sym) ?? new Set([sym]);
                    for (const f of symFirst) {
                        if (f !== this.epsilon) this.first.get(lhs)!.add(f);
                    }
                    if (!symFirst.has(this.epsilon)) { allEpsilon = false; break; }
                }
                if (allEpsilon || prod.rhs.length === 0) {
                    this.first.get(lhs)!.add(this.epsilon);
                }
                if (this.first.get(lhs)!.size !== before) changed = true;
            }
        }
    }

    computeFOLLOW(): void {
        for (const n of this.grammar.nonterminals) this.follow.set(n, new Set());
        this.follow.get(this.grammar.start)!.add("$");
        let changed = true;
        while (changed) {
            changed = false;
            for (const prod of this.grammar.productions) {
                const lhs = prod.lhs;
                for (let i = 0; i < prod.rhs.length; i++) {
                    const B = prod.rhs[i];
                    if (!this.grammar.nonterminals.has(B)) continue;
                    const before = this.follow.get(B)!.size;
                    const β = prod.rhs.slice(i + 1);
                    let allEpsilon = true;
                    for (const sym of β) {
                        const symFirst = this.first.get(sym) ?? new Set([sym]);
                        for (const f of symFirst) {
                            if (f !== this.epsilon) this.follow.get(B)!.add(f);
                        }
                        if (!symFirst.has(this.epsilon)) { allEpsilon = false; break; }
                    }
                    if (allEpsilon) {
                        for (const f of this.follow.get(lhs)!) this.follow.get(B)!.add(f);
                    }
                    if (this.follow.get(B)!.size !== before) changed = true;
                }
            }
        }
    }

    buildTable(): void {
        this.table.clear();
        for (const prod of this.grammar.productions) {
            const rhsFirst = this.firstForRHS(prod.rhs);
            for (const a of rhsFirst) {
                if (a !== this.epsilon) {
                    const key = `${prod.lhs},${a}`;
                    this.table.set(key, prod);
                }
            }
            if (rhsFirst.has(this.epsilon)) {
                for (const b of this.follow.get(prod.lhs)!) {
                    const key = `${prod.lhs},${b}`;
                    this.table.set(key, prod);
                }
            }
        }
    }

    private firstForRHS(rhs: Symbol[]): Set<Symbol> {
        const result = new Set<Symbol>();
        let allEpsilon = true;
        for (const sym of rhs) {
            if (sym === this.epsilon) break;
            const symFirst = this.first.get(sym) ?? new Set([sym]);
            for (const f of symFirst) {
                if (f !== this.epsilon) result.add(f);
            }
            if (!symFirst.has(this.epsilon)) { allEpsilon = false; break; }
        }
        if (allEpsilon && (rhs.length === 0 || rhs[rhs.length - 1] === this.epsilon)) {
            result.add(this.epsilon);
        }
        return result;
    }

    parse(input: Symbol[]): boolean {
        const stack: Symbol[] = ["$", this.grammar.start];
        let ip = 0;
        while (stack.length > 0) {
            const X = stack.pop()!;
            const a = ip < input.length ? input[ip] : "$";
            if (X === a) {
                ip++;
            } else if (this.grammar.terminals.has(X)) {
                console.error(`Error: unexpected terminal ${X} at position ${ip}`);
                return false;
            } else {
                const key = `${X},${a}`;
                const prod = this.table.get(key);
                if (!prod) {
                    console.error(`Error at ${X} on ${a}: no table entry (line ${this.getLine(a, ip)})`);
                    // Error recovery: skip input tokens until a synchronizing token
                    while (ip < input.length && !this.follow.get(X)!.has(input[ip])) ip++;
                    if (ip >= input.length) return false;
                    continue;
                }
                for (let i = prod.rhs.length - 1; i >= 0; i--) {
                    if (prod.rhs[i] !== this.epsilon) stack.push(prod.rhs[i]);
                }
            }
        }
        return true;
    }

    private getLine(a: Symbol, pos: number): number {
        return pos + 1; // simplified
    }
}

// === Demo: Expression Grammar ===
const prods: Production[] = [
    { lhs: "E", rhs: ["T", "E'"] },
    { lhs: "E'", rhs: ["+", "T", "E'"] },
    { lhs: "E'", rhs: ["ε"] },
    { lhs: "T", rhs: ["F", "T'"] },
    { lhs: "T'", rhs: ["*", "F", "T'"] },
    { lhs: "T'", rhs: ["ε"] },
    { lhs: "F", rhs: ["(", "E", ")"] },
    { lhs: "F", rhs: ["id"] },
];

const parser = new LL1ParserGenerator(prods, "E");
parser.computeFIRST();
parser.computeFOLLOW();
parser.buildTable();

console.log("FIRST sets:");
for (const [sym, set] of parser.first) {
    if (parser.grammar.nonterminals.has(sym))
        console.log(`  FIRST(${sym}) = {${[...set].join(", ")}}`);
}

console.log("\nFOLLOW sets:");
for (const [sym, set] of parser.follow) {
    console.log(`  FOLLOW(${sym}) = {${[...set].join(", ")}}`);
}

// Parse id + id * id
console.log("\nParsing: id + id * id");
const result = parser.parse(["id", "+", "id", "*", "id"]);
console.log(`Result: ${result ? "ACCEPT" : "REJECT"}`);

// Parse with error
console.log("\nParsing: id + * id (expect error)");
const result2 = parser.parse(["id", "+", "*", "id"]);
console.log(`Result: ${result2 ? "ACCEPT" : "REJECT"}`);
```

### Recursive-Descent Parsing with Backtracking

Recursive-descent parsing implements each nonterminal as a procedure. For LL(1) grammars, no backtracking is needed. For non-LL(1) grammars, backtracking can be added:

```typescript
class RecursiveDescentParser {
    private input: string[];
    private pos = 0;
    private savedPos = 0;

    constructor(input: string[]) { this.input = input; }

    private peek(): string { return this.pos < this.input.length ? this.input[this.pos] : "$"; }
    private consume(expected?: string): boolean {
        if (expected && this.peek() !== expected) return false;
        this.pos++;
        return true;
    }
    private save() { this.savedPos = this.pos; }
    private restore() { this.pos = this.savedPos; }

    parse(): boolean {
        return this.expr() && this.peek() === "$";
    }

    private expr(): boolean {
        this.save();
        if (this.term() && this.exprTail()) return true;
        this.restore();
        return false;
    }

    private exprTail(): boolean {
        if (this.peek() === "+") {
            this.consume("+");
            return this.term() && this.exprTail();
        }
        return true; // ε
    }

    private term(): boolean {
        this.save();
        if (this.factor() && this.termTail()) return true;
        this.restore();
        return false;
    }

    private termTail(): boolean {
        if (this.peek() === "*") {
            this.consume("*");
            return this.factor() && this.termTail();
        }
        return true; // ε
    }

    private factor(): boolean {
        if (this.peek() === "(") {
            this.consume("(");
            const r = this.expr();
            return r && this.consume(")");
        }
        if (this.peek() === "id") {
            this.consume("id");
            return true;
        }
        return false;
    }
}

const rdp = new RecursiveDescentParser(["id", "+", "id", "*", "id"]);
console.log("RD Parse:", rdp.parse()); // true
```

### Error Recovery in LL Parsing

LL(1) parsers use **panic-mode recovery**: on encountering an error (blank table entry), the parser discards input tokens until it finds a token in FOLLOW(A) (the set of synchronizing tokens for the current nonterminal), then pops the stack and continues. This prevents cascading errors while still reporting the mistake clearly.

**Synchronizing token sets**: For each nonterminal `A`, the synchronizing set is `FOLLOW(A)`. Additional tokens like semicolons, end-keywords, and closing braces are also good synchronizers because they terminate statements.

## Practical Takeaways

1. **LL(1) parsing is sufficient for most programming languages**: Expressions, statements, and declarations can all be handled with LL(1) techniques. The need for bottom-up parsing is rare in practice.
2. **Recursive descent is the most intuitive parsing technique**: Each nonterminal maps to exactly one function — the implementation mirrors the grammar directly.
3. **Always eliminate left recursion first**: Left-recursive grammars cause infinite loops in top-down parsers. The transformation is mechanical and should be done before any other analysis.
4. **Compute FIRST and FOLLOW carefully**: Errors in these sets propagate to the parsing table and produce mysterious failures. Verify with known examples.
5. **Error reporting matters**: A good error message includes the line number, the unexpected token, and the expected tokens. Never just say "syntax error."

## Summary

Top-down parsing constructs a derivation from the root (start symbol) toward the leaves (input). LL(1) grammars enable deterministic parsing using a predictive parsing table. Eliminating left recursion and left factoring is essential for converting practical grammars into LL(1) form. Recursive-descent parsing provides a straightforward implementation strategy when the grammar meets LL(1) conditions. The FIRST and FOLLOW sets are fundamental to table construction and error recovery.

## Chapter Quiz

1. Which condition must hold for a grammar to be LL(1)?
   - A) It must be left-recursive
   - B) FIRST sets of alternative productions for the same nonterminal must be disjoint
   - C) It must use at least 3 tokens of lookahead
   - D) All nonterminals must derive ε

2. What is the purpose of left factoring?
   - A) To eliminate ε-productions from the grammar
   - B) To delay the parsing decision until sufficient lookahead is available
   - C) To convert the grammar to Chomsky normal form
   - D) To reduce the number of nonterminals

3. In the LL(1) parsing table, ε at position `M[E', )]` means:
   - A) The parser should emit an error
   - B) The parser should apply the production E' → ε when ) is the lookahead
   - C) The parser should skip the ) token
   - D) ε is added to FOLLOW(E')

4. What is the time complexity of the iterative FIRST computation?
   - A) O(n) where n is the number of terminals
   - B) O(p × n) where p is the number of productions
   - C) O(2ⁿ)
   - D) O(n log n)

5. In recursive-descent parsing, what does each nonterminal correspond to?
   - A) A parsing table entry
   - B) A procedure or function in the implementation
   - C) A regular expression
   - D) A token category

<details>
<summary>Answers</summary>
1. B, 2. B, 3. B, 4. B, 5. B
</details>

## Exercises

### Review Questions

1. Define leftmost and rightmost derivations. Give an example of each.
2. What does it mean for a grammar to be ambiguous? How can ambiguity be resolved?
3. Describe the conditions that a grammar must satisfy to be LL(1).
4. Explain the role of FIRST and FOLLOW sets in constructing an LL(1) parser.
5. What is the difference between a parse tree and an abstract syntax tree?

### Application Problems

1. Eliminate left recursion from the following grammar: `A → Aa | Ab | c | d`.
2. Left factor the grammar: `S → iEtS | iEtSeS | a`. What is the purpose of left factoring?
3. Compute FIRST and FOLLOW for all nonterminals in the grammar:
   `S → aBDh  B → cC  C → bC | ε  D → EF  E → g | ε  F → f | ε`
4. Construct the LL(1) parsing table for the expression grammar and parse `id + id * id`.
5. Using the TypeScript `LL1ParserGenerator` class, add the nonterminal `L` for a list of IDs separated by commas and verify the table has no conflicts.

### Challenge Problem

1. Implement a recursive-descent parser in TypeScript for a grammar that recognizes simple assignment statements:
   ```
   assign → id = expr
   expr   → term { (+|-) term }
   term   → factor { (*|/) factor }
   factor → id | number | ( expr )
   ```
   The parser should report syntax errors with meaningful messages and show the parse tree structure as a parenthesized expression. Test it on valid and invalid inputs. Extend the `LL1ParserGenerator` to output the actual parse tree as a structured JSON object during parsing.
</details>
