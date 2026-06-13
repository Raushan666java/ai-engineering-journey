# Compiler Design — GATE CS Preparation

## Overview

A compiler translates a high-level source program into an equivalent target (machine-level) program. GATE CS questions span all six phases: Lexical Analysis, Syntax Analysis, Semantic Analysis, Intermediate Code Generation, Code Optimization, and Code Generation. This chapter covers definitions, algorithms, worked examples, and GATE-style problems for every phase.

---

## 1. Lexical Analysis

### 1.1 Role of the Lexer

The **lexer** (scanner) reads the source program character by character and groups them into **tokens** — the smallest meaningful units of a language. It discards whitespace and comments.

```
Source char stream → Lexer → Token stream → Parser
```

**Key responsibilities:**
- Remove whitespace, comments, preprocessor directives
- Correlate error messages with line/column numbers
- Handle symbol table insertion for identifiers
- Macro expansion and file inclusion

### 1.2 Tokens, Lexemes, Patterns

| Term | Definition | Example |
|------|-----------|---------|
| **Token** | Abstract symbol — a `<token-class, attribute>` pair | `<id, ptr-to-symbol-table-entry>` |
| **Lexeme** | Sequence of characters that matches a pattern | `count`, `42`, `while` |
| **Pattern** | Rule describing the form of lexemes | `[a-zA-Z_][a-zA-Z0-9_]*` |

**Common token classes:**

| Token Class | Pattern | Example Lexemes |
|-------------|---------|-----------------|
| `ID` | `[a-zA-Z_][a-zA-Z0-9_]*` | `sum`, `_temp`, `x1` |
| `NUMBER` | `[0-9]+(\.[0-9]+)?` | `42`, `3.14` |
| `KEYWORD` | Reserved words | `if`, `else`, `while`, `int` |
| `OP` | Operators | `+`, `-`, `*`, `/` |
| `LPAREN`, `RPAREN` | `(`, `)` | `(`, `)` |

### 1.3 Regular Expressions to NFA

**Thompson's Construction** converts any regular expression (RE) into an equivalent NFA:

| RE | NFA Fragment |
|----|-------------|
| `ε` | `ε` |
| Symbol `a` | Start → `a` → Accept |
| `r \| s` | ε-closure branching to NFAs of r and s |
| `r s` | Concatenation: NFA of r → ε → NFA of s |
| `r*` | Kleene star: loop back with ε transitions |

**Example: RE `(a|b)*abb`**

1. Build NFA for `(a|b)*`
2. Concatenate with `abb`
3. Result: 11-state NFA (approx.)

### 1.4 NFA to DFA — Subset Construction

For every set of NFA states reachable on a given symbol, create a DFA state.

**Algorithm:**

```
States[D0] = ε-closure(start)
while there is an unmarked state T {
    mark T
    for each input symbol a {
        U = ε-closure(move(T, a))
        if U not in States, add U
        Dtran[T, a] = U
    }
}
```

**ε-closure(s):** all states reachable from s via ε-transitions.

### 1.5 DFA Minimization

Minimize a DFA by merging indistinguishable states:

**Algorithm (Hopcroft):**
1. Partition states into accepting and non-accepting groups.
2. Repeatedly split groups where states transition into different groups.
3. Continue until no further splits.

**GATE tip:** For a DFA with n states, minimization takes O(k n log n) where k = alphabet size.

### 1.6 Lex Tool Concepts

**Lex/Flex** automates lexer generation:

```
%%
[0-9]+       { return NUMBER; }
[a-zA-Z_]\w* { return ID; }
[ \t\n]+     /* skip whitespace */
.            { return yytext[0]; }
%%
```

- Longest-match rule: when multiple patterns match, pick the longest lexeme.
- Tie-breaking: if equal-length, pick the pattern listed first.

### 1.7 Transition Diagrams

A **transition diagram** for identifiers:

```
Start → [letter] → [letter or digit] → Accept
```

Formal: `{letter}({letter}|{digit})*`

### 1.8 GATE Problems — Lexical Analysis

**Problem 1:** How many tokens does the following C code produce?

```c
int main() { int a = 10; return a + 5; }
```

**Solution:** Count each keyword, identifier, operator, literal, separator:

| Lexeme | Token |
|--------|-------|
| `int` | KEYWORD |
| `main` | ID |
| `(` | LPAREN |
| `)` | RPAREN |
| `{` | LBRACE |
| `int` | KEYWORD |
| `a` | ID |
| `=` | ASSIGN |
| `10` | NUMBER |
| `;` | SEMICOLON |
| `return` | KEYWORD |
| `a` | ID |
| `+` | PLUS |
| `5` | NUMBER |
| `;` | SEMICOLON |
| `}` | RBRACE |

**Total: 16 tokens.**

---

**Problem 2 (GATE 2017):** Which of the following regular expressions is equivalent to `(a|b)*`?

A) `(a*b*)*`   B) `(a*|b*)*`   C) `(a*|b*)+`   D) All of the above

**Solution:** Both A and B generate all strings over `{a,b}`. C requires at least one character. **Answer: D** (A and B are correct; C misses ε).

---

**Problem 3 (GATE 2018):** Consider the DFA below. Minimize it.

States: `{A, B, C, D}`. Alphabet: `{0,1}`. Accepting: `{D}`.

Transitions: `δ(A,0)=B, δ(A,1)=A, δ(B,0)=C, δ(B,1)=A, δ(C,0)=D, δ(C,1)=A, δ(D,0)=D, δ(D,1)=A`

**Solution:**
1. Partition: `P0 = {A,B,C}, {D}`
2. On `0`: `A→B`, `B→C`, `C→D`. C transitions to D (different group), so split: `{A,B}, {C}, {D}`
3. On `1`: `A→A`, `B→A`. Same group. No further split.
4. **Minimized states: 3** — `{A,B}, {C}, {D}`.

---

**Problem 4 (GATE 2016):** The number of tokens in the following C statement is:

```c
printf("%d", &x + 1 ? 1 : 0);
```

**Solution:**

| Lexeme | Token |
|--------|-------|
| `printf` | ID |
| `(` | LPAREN |
| `"%d"` | STRING |
| `,` | COMMA |
| `&` | AMPERSAND |
| `x` | ID |
| `+` | PLUS |
| `1` | NUMBER |
| `?` | QUESTION |
| `1` | NUMBER |
| `:` | COLON |
| `0` | NUMBER |
| `)` | RPAREN |
| `;` | SEMICOLON |

**Answer: 14 tokens.**

---

## 2. Syntax Analysis

### 2.1 Context-Free Grammars

A **Context-Free Grammar (CFG)** is a 4-tuple `G = (V, T, P, S)` where:
- `V` = finite set of non-terminals
- `T` = finite set of terminals (tokens)
- `P` = finite set of productions `A → α`
- `S` = start symbol

**Example — Arithmetic expressions:**

```
E → E + T | T
T → T * F | F
F → (E) | id
```

**Derivation:** A sequence of replacements `S ⇒ α1 ⇒ α2 ⇒ ... ⇒ w` (string of terminals).
- **Leftmost derivation:** Replace leftmost non-terminal first.
- **Rightmost derivation:** Replace rightmost non-terminal first.

### 2.2 Parse Tree vs Syntax Tree

| Feature | Parse Tree | Syntax Tree (Abstract Syntax Tree) |
|---------|------------|--------------------------------------|
| Internal nodes | Non-terminals | Operators/constructs |
| Leaves | Terminals | Identifiers, constants |
| Detail | Full grammar | Essential structure only |
| Size | Larger | Smaller |

**Example — Expression `id + id * id`:**

Parse tree (using grammar above):
```
        E
      / | \
     E  +  T
     |    /|\
     T   T * F
     |   |   |
     F   F  id
     |   |
    id  id
```

Syntax tree:
```
      +
     / \
   id   *
       / \
     id   id
```

### 2.3 Handling Ambiguity

A grammar is **ambiguous** if there exists a string with two distinct parse trees (or two leftmost derivations).

**Problematic grammar:**
```
S → if E then S | if E then S else S | other
```

For `if E1 then if E2 then S1 else S2`, two parse trees exist.

**Solution — Disambiguating rule:** Match `else` with the nearest unmatched `if` (dangling-else problem).

**GATE note:** Inherently ambiguous languages (like `{a^n b^n c^m} ∪ {a^n b^m c^m}`) cannot have an unambiguous grammar.

### 2.4 Top-Down Parsing

#### Recursive Descent

A set of mutually recursive procedures, one per non-terminal. Backtracking may be needed. For efficient top-down parsing, we use **predictive parsers** (LL(1)).

#### LL(1) Grammar

**Definition:** A grammar where the parser can decide the production using one lookahead token.

**Conditions for LL(1):**
No left-recursion, no left-factoring issues.

Given `A → α | β`:
1. `FIRST(α) ∩ FIRST(β) = ∅`
2. If `ε ∈ FIRST(β)`, then `FOLLOW(A) ∩ FIRST(α) = ∅`

#### FIRST and FOLLOW

**FIRST(α):** Set of terminals that begin strings derived from α.

**Algorithm — FIRST:**
```
for each terminal a: FIRST[a] = {a}
for each non-terminal A: FIRST[A] = ∅
repeat until no change {
    for each production A → X1 X2 ... Xk {
        for i = 1 to k {
            add FIRST[Xi] - {ε} to FIRST[A]
            if ε ∉ FIRST[Xi], break
        }
        if all Xi contain ε, add ε to FIRST[A]
    }
}
```

**FOLLOW(A):** Set of terminals that can appear immediately to the right of A in some sentential form.

**Algorithm — FOLLOW:**
```
FOLLOW[S] = {$}
for each production A → αBβ, add FIRST(β) - {ε} to FOLLOW(B)
for each production A → αB, or A → αBβ where ε ∈ FIRST(β), add FOLLOW(A) to FOLLOW(B)
```

#### Constructing LL(1) Parse Table

For each production `A → α`:
```
for each a in FIRST(α) (excluding ε):
    Table[A, a] = A → α
if ε ∈ FIRST(α):
    for each b in FOLLOW(A):
        Table[A, b] = A → α
```

**Example grammar:**

```
E  → TE'
E' → +TE' | ε
T  → FT'
T' → *FT' | ε
F  → (E) | id
```

**FIRST sets:**
- `FIRST(F) = {(, id}`
- `FIRST(T) = {(, id}`
- `FIRST(E) = {(, id}`
- `FIRST(E') = {+, ε}`
- `FIRST(T') = {*, ε}`

**FOLLOW sets:**
- `FOLLOW(E) = {$, )}`
- `FOLLOW(E') = {$, )}`
- `FOLLOW(T) = {+, $, )}`
- `FOLLOW(T') = {+, $, )}`
- `FOLLOW(F) = {*, +, $, )}`

**LL(1) Parse Table:**

| Non-term | id | + | * | ( | ) | $ |
|----------|-----|-----|-----|-----|-----|-----|
| E | E→TE' | | | E→TE' | | |
| E' | | E'→+TE' | | | E'→ε | E'→ε |
| T | T→FT' | | | T→FT' | | |
| T' | | T'→ε | T'→*FT' | | T'→ε | T'→ε |
| F | F→id | | | F→(E) | | |

### 2.5 Bottom-Up Parsing (Shift-Reduce)

**Idea:** Start from the input string and reduce to the start symbol using productions in reverse.

**Handles:** A substring matching the RHS of a production; reducing it produces the previous sentential form.

**Key operations:**
- **Shift:** Push next input symbol onto the stack.
- **Reduce:** Pop handle from stack, push LHS non-terminal.
- **Accept:** Stack contains only S and input is empty.
- **Error:** No valid action.

#### LR Parsing — General Structure

```
Stack: s0 X1 s1 X2 s2 ... Xm sm
Input: a1 a2 ... an $
```

Driver uses `action[sm, ai]` and `goto[sm, A]` tables.

**LR item:** A production with a dot indicating position: `A → α·β`.

#### LR(0) Items and DFA

**Closure(I):**
```
while any new item can be added {
    if A → α·Bβ ∈ I, add B → ·γ for each production B → γ
}
```

**Goto(I, X):**
```
J = closure({A → αX·β | A → α·Xβ ∈ I})
```

**LR(0) DFA:** States = sets of LR(0) items; transitions via Goto.

#### SLR(1) Parser

**SLR — Simple LR:** Uses LR(0) items, but reduce actions only on FOLLOW.

**Parsing table construction:**
```
For each state i with item A → α·aβ:
    action[i, a] = shift(j) where j = goto(i, a)
For each state i with item A → α· (reduce item):
    for each b in FOLLOW(A):
        action[i, b] = reduce(A → α)
For state containing S' → S·:
    action[i, $] = accept
```

**SLR conflicts:**
- **Shift-reduce:** A state has both `A → α·aβ` and `B → γ·`
- **Reduce-reduce:** A state has two reduce items `A → α·` and `B → β·` with overlapping FOLLOW sets.

#### CLR(1) — Canonical LR

LR(1) items include a **lookahead**: `[A → α·β, a]`

The lookahead only matters for reduce items: reduce only when lookahead matches.

**More powerful than SLR** — resolves many SLR conflicts.

#### LALR(1) — Look-Ahead LR

Merge LR(1) states whose LR(0) cores are identical.

**Properties:**
- Same number of states as SLR.
- Power between SLR and CLR.
- Most practical parser generators (YACC, Bison) use LALR(1).

**Comparison:**

| Parser | States | Power | Conflicts |
|--------|--------|-------|-----------|
| LR(0) | Fewest | Lowest | Many |
| SLR(1) | Same as LR(0) | Higher | Fewer |
| LALR(1) | Same as LR(0) | Higher | Rare |
| CLR(1) | Most (10x) | Highest | Zero |

### 2.6 GATE Problems — Syntax Analysis

**Problem 1 (GATE 2017):** Which of the following is the most powerful parsing technique?

A) LL(1)   B) LR(1)   C) LALR(1)   D) SLR(1)

**Solution:** LR(1) (CLR) can parse the largest set of grammars. **Answer: B.**

Power ordering: `LL(1) < SLR(1) ≤ LALR(1) < CLR(1)`.

---

**Problem 2 (GATE 2016):** Compute FIRST and FOLLOW for the grammar:

```
S → aA | bB
A → c | ε
B → c | d
```

**Solution:**
- `FIRST(S) = {a, b}`
- `FIRST(A) = {c, ε}`
- `FIRST(B) = {c, d}`
- `FOLLOW(S) = {$}`
- `FOLLOW(A) = {$}` (only S ⇒ aA, no symbols follow A in any derivation)
- `FOLLOW(B) = {$}`

---

**Problem 3 (GATE 2015):** Consider the grammar:

```
E → E + T | T
T → T * F | F
F → id
```

Show the LR(0) items for the state after shifting `id`.

**Solution:**
- Initial item: `E' → ·E`
- After closure: `E' → ·E, E → ·E+T, E → ·T, T → ·T*F, T → ·F, F → ·id`
- After shifting `id` (reading `F`): `T → F·` (reduce item).

---

**Problem 4 (GATE 2018):** For the grammar `S → aS | bS | ε`, construct the LL(1) parse table.

**Solution:**
- `FIRST(S) = {a, b, ε}`
- `FOLLOW(S) = {$}`

| Non-term | a | b | $ |
|----------|-----|-----|-----|
| S | S→aS | S→bS | S→ε |

This grammar is LL(1) because FIRST sets for each production are disjoint.

---

**Problem 5 (GATE 2021):** How many states does the LR(0) automaton for the following grammar have?

```
S → Aa | b
A → c
```

**Solution:**
Build LR(0) items via closure:

State 0: `S' → ·S, S → ·Aa, S → ·b, A → ·c`
State 1 (goto from 0 on S): `S' → S·` (accept)
State 2 (goto from 0 on A): `S → A·a`
State 3 (goto from 0 on b): `S → b·` (reduce)
State 4 (goto from 0 on c): `A → c·` (reduce)
State 5 (goto from 2 on a): `S → Aa·` (reduce)

**Answer: 6 states.**

---

**Problem 6:** Is the following grammar LR(0)?

```
S → AA
A → aA | b
```

**Solution:**
Look at state with `A → a·A` and `A → ·aA, A → ·b`. After reading `A`, we get `A → aA·` (reduce). No shift items in the same state. Check other states — none have shift-reduce conflicts. **Yes, this is LR(0).**

---

## 3. Semantic Analysis

### 3.1 Syntax-Directed Definitions (SDD)

An **SDD** attaches semantic rules to grammar productions.

**Example — Infix to postfix:**

| Production | Semantic Rule |
|-----------|--------------|
| `E → E1 + T` | `E.code = E1.code ∥ T.code ∥ '+'` |
| `E → T` | `E.code = T.code` |
| `T → id` | `T.code = id.lexval` |

#### S-Attributed SDD

All attributes are **synthesized** — computed bottom-up from children to parent.

```
E.val = E1.val + T.val
```

These can be evaluated during LR parsing.

#### L-Attributed SDD

Attributes can be either synthesized or **inherited** (passed from parent/left sibling to right sibling). Evaluation is left-to-right depth-first.

```
D → T L { L.in = T.type }
T → int { T.type = integer }
T → float { T.type = float }
L → L1, id { L1.in = L.in; addType(id.entry, L.in) }
L → id { addType(id.entry, L.in) }
```

### 3.2 Syntax-Directed Translation Schemes

A **translation scheme** embeds program fragments (actions) within productions:

```
E → E1 + T  { print('+') }
E → T
T → id     { print(id.name) }
```

**Parsing action:** Actions execute when the parser reaches that position.

### 3.3 Type Checking

#### Static vs Dynamic Typing

| Aspect | Static | Dynamic |
|--------|--------|---------|
| When checked | Compile time | Runtime |
| Error detection | Early | At execution |
| Performance | Faster runtime | Slower (runtime checks) |
| Examples | C, Java | Python, JavaScript |

**Type expressions:** `int`, `float`, `int → int` (function), `array(10, int)`.

**Type equivalence:**
- **Structural:** Two types are the same if they have the same structure.
- **Name:** Two types are the same only if they have the same name.

#### Type Checking Rules

```
E → E1 + E2 ⇒ if E1.type = int and E2.type = int then int else error
E → E1 == E2 ⇒ if E1.type = E2.type then boolean else error
```

**Type coercion:** Implicit conversion (`int → float` in `float + int`).

### 3.4 Symbol Table Implementation

**Symbol table:** Data structure holding information about identifiers (type, scope, memory location).

**Common implementations:**
- **Linear list:** Simple, O(n) lookup.
- **Hash table:** O(1) average lookup.
- **Tree-based:** Balanced BST for O(log n) lookup.
- **Nested scoping:** Stack of hash tables; push on block entry, pop on exit.

**Operations:** `insert(name, info)`, `lookup(name)`, `delete(name)`.

**GATE tip:** Most compiler questions assume a hash-table symbol table with chaining.

### 3.5 GATE Problems — Semantic Analysis

**Problem 1 (GATE 2016):** Consider an SDD:

```
S → L = R  { S.code = L.code ∥ R.code ∥ '=' }
E → L + R  { E.var = newTemp(); E.code = L.code ∥ R.code ∥ '+' ∥ E.var }
L → id     { L.code = id.lexval }
R → id     { R.code = id.lexval }
```

Classify this SDD as S-attributed, L-attributed, or neither.

**Solution:** All attributes are synthesized (computed bottom-up from children). **Answer: S-attributed.**

---

**Problem 2 (GATE 2017):** For the grammar:

```
D → TL
T → int | float
L → L, id | id
```

Annotate with L-attributed definitions to build a symbol table.

**Solution:**
```
T → int      { T.type = integer }
T → float    { T.type = float }
D → T L      { L.in = T.type }
L → L1, id   { L1.in = L.in; addType(id.entry, L.in) }
L → id       { addType(id.entry, L.in) }
```

Here, `in` is an inherited attribute (passed left-to-right). **Answer: L-attributed.**

---

**Problem 3 (GATE 2018):** In a symbol table with chaining, what is the worst-case time for `lookup` given `n` entries and a `b`-bucket hash table?

**Solution:** Worst case — all `n` entries hash to the same bucket. Linear search within that bucket is O(n). Average case: O(n/b) ≈ O(1) if b ≈ n.

**Answer: O(n) worst case, O(1) average.**

---

**Problem 4:** Consider the type expression `int → (float → int)`. Is this a valid function type? If `f: int → float` and `g: float → int`, then what is the type of `g ∘ f`?

**Solution:** `g ∘ f` means apply `f` first (takes int, returns float), then `g` (takes float, returns int). Result: `int → int`.

---

## 4. Intermediate Code Generation

### 4.1 Three-Address Code (TAC)

**Three-address code** uses instructions of the form `x = y op z` (at most one operator, three addresses).

**Example — Expression `a + b * c`:**

```
t1 = b * c
t2 = a + t1
```

**Common TAC instructions:**

| Instruction | Meaning |
|-------------|---------|
| `x = y op z` | Binary operation |
| `x = op y` | Unary operation |
| `x = y` | Copy |
| `goto L` | Unconditional jump |
| `if x goto L` | Conditional jump |
| `if x relop y goto L` | Conditional with relop |
| `param x` / `call p, n` | Function call |
| `return x` | Return |

### 4.2 Quadruples

A **quadruple** is a 4-field record: `(op, arg1, arg2, result)`

**Example — `a = b + c * d`:**

| # | op | arg1 | arg2 | result |
|---|----|------|------|--------|
| 0 | * | c | d | t1 |
| 1 | + | b | t1 | t2 |
| 2 | = | t2 | | a |

### 4.3 Triples

A **triple** uses 3 fields: `(op, arg1, arg2)` — results are implicitly the position number.

| # | op | arg1 | arg2 |
|---|----|------|------|
| 0 | * | c | d |
| 1 | + | b | (0) |
| 2 | = | a | (1) |

**Advantage:** No temporaries.
**Disadvantage:** Reordering is hard (position references break).

### 4.4 Indirect Triples

A list of pointers to triples — makes reordering possible.

```
(0) → (0) *
(1) → (1) +
(2) → (2) =
```

### 4.5 Static Single Assignment (SSA)

Each variable is assigned exactly once. Special **φ (phi) functions** merge values at control-flow joins.

**Example — `if (x > 0) y = 1; else y = 2;`**

```
if x > 0 goto L1
goto L2
L1: y1 = 1
    goto L3
L2: y2 = 2
L3: y3 = φ(y1, y2)
```

**Benefits:** Simplifies optimization (constant propagation, dead code elimination).

### 4.6 Translation of Expressions

**Syntax-directed translation to TAC:**

| Production | Semantic Action |
|-----------|-----------------|
| `E → E1 + T` | `E.place = newTemp(); emit(E.place '=' E1.place '+' T.place)` |
| `E → T` | `E.place = T.place` |
| `T → id` | `T.place = id.entry` |

**Example:** `a + b * c`

```
1. t1 = b * c    (T → T * F, F → id b, F → id c)
2. t2 = a + t1   (E → E + T, T → F, F → id a)
```

### 4.7 Translation of Control Flow

**Conditional and loop translation:**

**`if (E) S1 else S2`:**
```
    evaluate E
    if E.true goto L1
    goto L2
L1: S1.code
    goto L3
L2: S2.code
L3: ...
```

**`while (E) S1`:**
```
L1: evaluate E
    if E.true goto L2
    goto L3
L2: S1.code
    goto L1
L3: ...
```

**`for (i=1; i<=n; i++) S1`:**
```
    i = 1
L1: if i <= n goto L2
    goto L3
L2: S1.code
    i = i + 1
    goto L1
L3: ...
```

### 4.8 Type Conversion

**Explicit vs Implicit conversion:**

```
int x;
float y = x + 3.14;   // x converted to float implicitly
```

**TAC with conversion:**
```
t1 = int_to_float(x)
t2 = t1 + 3.14
y = t2
```

### 4.9 Backpatching

**Problem:** Forward jumps (e.g., `if` to `else`) need target addresses not yet known.

**Solution:** Maintain a list of TAC instructions whose target is not yet known. When the target becomes known, "patch" (fill in) the addresses.

```
emit(if x > 0 goto _)     → store at position 5
emit(goto _)               → store at position 6
... later when target known:
patch(5, target=L1)        → instruction 5 becomes: if x > 0 goto L1
patch(6, target=L2)        → instruction 6 becomes: goto L2
```

### 4.10 GATE Problems — Intermediate Code

**Problem 1 (GATE 2016):** Generate three-address code for `-a + b * c + d`.

**Solution:**
```
t1 = uminus a
t2 = b * c
t3 = t1 + t2
t4 = t3 + d
```

---

**Problem 2 (GATE 2017):** Write the quadruple representation for `x = (a + b) * (c - d)`.

**Solution:**

| # | op | arg1 | arg2 | result |
|---|----|------|------|--------|
| 0 | + | a | b | t1 |
| 1 | - | c | d | t2 |
| 2 | * | t1 | t2 | t3 |
| 3 | = | t3 | | x |

---

**Problem 3 (GATE 2018):** Write the triple representation for `if (a > b) then x = y + 1 else x = y - 1`.

**Solution:**

| # | op | arg1 | arg2 |
|---|----|------|------|
| 0 | > | a | b |
| 1 | if_false | (0) | (6) |
| 2 | + | y | 1 |
| 3 | = | x | (2) |
| 4 | goto | (8) | |
| 5 | - | y | 1 |
| 6 | = | x | (5) |
| 7 | | | |

---

**Problem 4 (GATE 2020):** The SSA representation eliminates which of the following?

A) Common subexpression elimination   B) Dead code elimination
C) Constant propagation               D) All of the above

**Solution:** SSA simplifies all three optimizations by making def-use chains explicit. **Answer: D.**

---

**Problem 5:** Convert `for (i=0; i<10; i++) sum = sum + i` to three-address code.

**Solution:**
```
1:  i = 0
2:  if i < 10 goto 4
3:  goto 8
4:  t1 = sum + i
5:  sum = t1
6:  i = i + 1
7:  goto 2
8:  (next statement)
```

---

## 5. Code Optimization & Code Generation

### 5.1 Basic Blocks and Flow Graphs

A **basic block** is a sequence of consecutive TAC instructions with:
- Single entry point (first instruction).
- Single exit point (last instruction).
- No jumps into or out of the middle.

**Leader algorithm** to partition instructions into basic blocks:
1. First instruction is a leader.
2. Any instruction that is a jump target is a leader.
3. Any instruction following a jump is a leader.

**Flow graph:** Nodes = basic blocks. Edges = control flow between blocks.

### 5.2 Local Optimization

Optimizations within a single basic block:

| Optimization | Before | After |
|-------------|--------|-------|
| **Constant folding** | `x = 2 * 3` | `x = 6` |
| **Algebraic simplification** | `x = x + 0` | remove |
| **Copy propagation** | `a = b; c = a + d` | `c = b + d` |
| **Dead code elimination** | `x = y + 1; ... (x unused)` | remove |
| **Common subexpression elimination** | `a = b + c; d = b + c` | `a = b + c; d = a` |

### 5.3 Global Optimization

#### Loop Optimization

| Technique | Description |
|-----------|-------------|
| **Code motion** | Move loop-invariant code out of loop |
| **Strength reduction** | Replace `i * 4` with `i = i + 4` (add instead of multiply) |
| **Induction variable elimination** | Remove redundant induction variables |
| **Loop unrolling** | Replicate loop body to reduce overhead |

**Example — Code motion:**
```c
// Before
for (i = 0; i < n; i++) {
    x = y + z;  // loop-invariant
    a[i] = x * i;
}

// After
x = y + z;
for (i = 0; i < n; i++) {
    a[i] = x * i;
}
```

#### Register Allocation

**Graph coloring approach:**
1. Build an **interference graph** — nodes are variables; edges connect variables live at the same time.
2. Color the graph with K colors (K = number of registers).
3. Spill (move to memory) if K colors insufficient.

**Example — Register allocation:**

Code: `a = b + c; d = a + e; f = d * g;`

Interference: `b, c` interfere with `a, d, e, f`. `a, d` interfere with each other.

With 3 registers, possible coloring: `R1={b,c,g}, R2={a,d,f}, R3={e}`.

### 5.4 DAG Representation

A **Directed Acyclic Graph (DAG)** for a basic block has:
- Leaves = identifiers/constants.
- Internal nodes = operators.
- Edges = data dependencies.

**Example — `a = b + c; d = b + c; e = a * d`:**

```
       *
      / \
     +   +
    / \ / \
   b   c   (same b + c reused)
```

The DAG identifies common subexpressions (b + c computed once).

**Constructing a DAG:**
1. For each three-address instruction `x = y op z`:
   - Find node(s) for `y` and `z`.
   - Create/locate node for `op` with children `y`, `z`.
   - Attach `x` to the result node.

### 5.5 Code Generation from DAG

1. Traverse DAG in post-order.
2. For each node, generate code to compute value into a register.
3. Use register descriptors to track which register holds which value.
4. Use address descriptors for memory locations.

**Example — Generate code for the DAG of `a = b + c; d = a * e`:**

```
LD   R1, b       ; R1 = b
ADD  R1, c       ; R1 = b + c
ST   a, R1       ; a = R1
LD   R2, e       ; R2 = e
MUL  R1, R2      ; R1 = a * e
ST   d, R1       ; d = R1
```

### 5.6 Peephole Optimization

Examine a small window (peephole) of target instructions for redundant patterns:

| Pattern | Replacement |
|---------|-------------|
| `LD R1, x; ST x, R1` | Remove (redundant load/store) |
| `JMP L1; L1: ...` | Remove (unreachable code) |
| `ADD R1, #0` | Remove (no-op) |
| `MUL R1, #2` | Replace with `ADD R1, R1` |

### 5.7 GATE Problems — Optimization

**Problem 1 (GATE 2016):** The DAG for the code `a = b + c; b = a - d; c = b + c; d = a - d` has how many nodes (excluding leaves)?

**Solution:**
```
    + (a)        - (b,d)
   / \          / \
  b   c        a   d
```
- `a = b + c` creates `+` with children b, c.
- `b = a - d` creates `-` with children a, d.
- `c = b + c` — `+` with children b (new) and c. Since `b` has been reassigned, this is a new node.
- `d = a - d` — `-` with children a and d. Since `a` and `d` are still current, this reuses the existing `-` node.

**Answer: 3 operator nodes** (one `+` for a, one `-` for b/d, one `+` for c).

---

**Problem 2 (GATE 2017):** Identify the loop-invariant code in the following block:

```c
for (i = 0; i < 100; i++) {
    x = a * b;
    y[i] = x + i;
}
```

**Solution:** `x = a * b` is loop-invariant — `a` and `b` are not modified in the loop. Move it out:

```c
x = a * b;
for (i = 0; i < 100; i++) {
    y[i] = x + i;
}
```

---

**Problem 3 (GATE 2018):** Apply strength reduction to:

```
a[0] = 0
for i = 1 to n:
    a[i] = a[i-1] + i * 4
```

**Solution:** Replace `i * 4` with an addition. Introduce `t = 0`; increment by 4 each iteration.

```
a[0] = 0
t = 0
for i = 1 to n:
    t = t + 4
    a[i] = a[i-1] + t
```

---

**Problem 4 (GATE 2019):** How many colors are needed to register-allocate the following code?

```
x = a + b
y = x * c
z = y + x
w = z - y
```

**Solution:** 
- Live ranges: `a,b` live at start, die after first statement.
- `x` live between statement 1-3.
- `y` live between statements 2-4.
- `z` live between statements 3-4.
- `w` defined at end.
- Interference: `x` with `y`, `x` with `z`, `y` with `z`.
- Graph: triangle x-y-z needs 3 colors.

**Answer: 3 registers minimum** (assuming each variable kept in a register; `a, b, c` are free after use, so they don't add pressure).

---

**Problem 5:** Given code `a = x + y; b = x + y; c = a * b;`, compute the DAG and identify common subexpressions.

**Solution:** The DAG has:
- `+` node with children x and y — used for both `a` and `b`.
- `*` node with child `+` (twice) — result for `c`.

Common subexpression: `x + y` is computed only once. Optimized code:
```
t1 = x + y
a = t1
b = t1
c = t1 * t1
```

---

## 6. Summary and Quick Reference

### Phases of Compiler

```
Source Program
    ↓
Lexical Analysis (token stream)
    ↓
Syntax Analysis (parse tree)
    ↓
Semantic Analysis (annotated tree)
    ↓
Intermediate Code Generation (TAC)
    ↓
Code Optimization
    ↓
Code Generation (target code)
```

### Key Definitions for GATE

| Concept | Definition |
|---------|------------|
| **Token** | Terminal symbol produced by lexer |
| **Handle** | Substring matching production RHS, used in reduction |
| **LR(0) item** | Production with a dot indicating position |
| **FIRST(α)** | Set of terminals that can begin strings from α |
| **FOLLOW(A)** | Set of terminals that can follow A in a derivation |
| **S-attributed SDD** | Only synthesized attributes |
| **L-attributed SDD** | Synthesized + inherited (left-to-right) |
| **Basic block** | Linear sequence of code with one entry/exit |
| **DAG** | Directed Acyclic Graph for expressions |
| **SSA** | Each variable assigned exactly once |

### GATE Weightage Trends

| Topic | Approx Weight | Difficulty |
|-------|--------------|------------|
| Lexical Analysis (RE, DFA) | 1-2 marks | Easy |
| Parsing (LL/LR, parse tables) | 3-5 marks | Medium-Hard |
| Semantic Analysis (SDD, types) | 2-3 marks | Medium |
| Intermediate Code (TAC, quadruples) | 2-3 marks | Easy-Medium |
| Code Optimization (DAG, loops) | 2-3 marks | Medium |

### Answer Key for Practice Problems

| Problem | Answer |
|---------|--------|
| 1.1 | 16 tokens |
| 1.2 | A and B only |
| 1.3 | 3 states |
| 1.4 | 14 tokens |
| 2.1 | LR(1) |
| 2.2 | See solution |
| 2.3 | Reduce item |
| 2.4 | LL(1) parse table |
| 2.5 | 6 states |
| 2.6 | Yes |
| 3.1 | S-attributed |
| 3.2 | L-attributed |
| 3.3 | O(n) worst |
| 3.4 | int → int |
| 4.1 | t1 = -a; t2 = b*c; t3 = t1+t2; t4 = t3+d |
| 4.2 | See quadruple table |
| 4.3 | See triple table |
| 4.4 | D |
| 4.5 | See three-address code |
| 5.1 | 3 |
| 5.2 | x = a*b is loop-invariant |
| 5.3 | Use accumulator t += 4 |
| 5.4 | 3 |
| 5.5 | DAG with shared + node |

---

*This document covers the GATE CS Compiler Design syllabus. Focus on parse-table construction, FIRST/FOLLOW computation, three-address code generation, and DAG-based optimization — these are the highest-yield topics in the exam.*
