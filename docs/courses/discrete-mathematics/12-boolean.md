# Chapter 12: Boolean Algebra

> **Previous:** [Chapter 11: Algebraic Structures](./11-algebra.md) | **Next:** [Chapter 13: Probability](./13-probability.md)

## Learning Objectives

After completing this chapter, you will be able to:

- Define Boolean algebra and identify its axioms and properties
- Simplify Boolean expressions using identities and laws
- Apply De Morgan's laws to transform expressions
- Convert between Boolean functions and truth tables
- Represent Boolean functions using sum-of-products and product-of-sums
- Design and analyze logic gate circuits
- Minimize Boolean expressions using Karnaugh maps and the Quine-McCluskey algorithm
- Understand the relationship between Boolean algebra and digital logic

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Boolean Algebra | Operations on $\{0,1\}$: $+$, $\cdot$, $'$ | Every Boolean algebra satisfies the same axioms |
| Basic Identities | Idempotent, absorption, complement, involution | Simplifying expressions before building circuits saves hardware |
| De Morgan's Laws | $(x+y)' = x'y'$, $(xy)' = x' + y'$ | NAND/NOR are universal gates ? any circuit can use only NAND |
| Boolean Functions | Truth table $\rightarrow$ expression | Express as sum of minterms or product of maxterms |
| Logic Gates | AND, OR, NOT, NAND, NOR, XOR, XNOR | Universal gates (NAND, NOR) implement any function |
| Duality | Replace $+$ with $\cdot$ and $0$ with $1$ | Every theorem has a dual; proving one proves both |
| Minterms & Maxterms | Product terms (AND) and sum terms (OR) | SOP selects rows where $f=1$; POS selects rows where $f=0$ |
| Karnaugh Maps | Visual minimization for up to 4 variables | Adjacent cells differ by one literal for simplification |
| Quine-McCluskey | Algorithmic minimization for any number of variables | Finds all prime implicants then selects essential ones |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Boolean Algebra] --> B[Axioms]
    B --> C[Closure]
    B --> D[Identity]
    B --> E[Complement]
    B --> F[Associative]
    B --> G[Distributive]
    A --> H[Identities]
    H --> I[Idempotent]
    H --> J[De Morgan]
    H --> K[Absorption]
    A --> L[Boolean Functions]
    L --> M[Truth Tables]
    L --> N[SOP / POS]
    L --> O[Minterms / Maxterms]
    A --> P[Logic Gates]
    A --> Q[Minimization]
    Q --> R[Karnaugh Maps]
    Q --> S[Quine-McCluskey]
```

## Theory

### 12.1 Definition

<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-1-definition-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-1-definition-handwritten.svg" alt="Handwritten: 12.1 Definition" width="30%">
</a>
<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-1-definition-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-1-definition-diagram.svg" alt="Diagram: 12.1 Definition" width="30%">
</a>
<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-1-definition-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-1-definition-sticky.svg" alt="Sticky Note: 12.1 Definition" width="30%">
</a>


A **Boolean algebra** is a set $B$ with two binary operations $+$ (OR), $\cdot$ (AND), and a unary operation $'$ (complement/NOT), satisfying:

1. **Closure:** $a + b \in B$, $a \cdot b \in B$, $a' \in B$.
2. **Identity:** $a + 0 = a$, $a \cdot 1 = a$.
3. **Complements:** $a + a' = 1$, $a \cdot a' = 0$.
4. **Associativity:** $(a + b) + c = a + (b + c)$, $(a \cdot b) \cdot c = a \cdot (b \cdot c)$.
5. **Commutativity:** $a + b = b + a$, $a \cdot b = b \cdot a$.
6. **Distributivity:** $a + (b \cdot c) = (a + b) \cdot (a + c)$ and $a \cdot (b + c) = (a \cdot b) + (a \cdot c)$.

The standard Boolean algebra is $B = \{0, 1\}$ with these operations.

> **One-Sentence Takeaway:** Boolean algebra is an algebraic structure on $\{0,1\}$ with AND, OR, and NOT ? every identity follows from the six axiom groups.

### 12.2 Basic Identities

<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-2-basic-identities-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-2-basic-identities-handwritten.svg" alt="Handwritten: 12.2 Basic Identities" width="30%">
</a>
<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-2-basic-identities-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-2-basic-identities-diagram.svg" alt="Diagram: 12.2 Basic Identities" width="30%">
</a>
<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-2-basic-identities-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-2-basic-identities-sticky.svg" alt="Sticky Note: 12.2 Basic Identities" width="30%">
</a>


**Theorem 12.1 (Idempotent laws).**
- $x + x = x$
- $x \cdot x = x$

**Theorem 12.2 (Domination laws).**
- $x + 1 = 1$
- $x \cdot 0 = 0$

**Theorem 12.3 (Absorption laws).**
- $x + (x \cdot y) = x$
- $x \cdot (x + y) = x$

**Theorem 12.4 (Involution law).** $(x')' = x$.

**Theorem 12.5 (De Morgan's laws).**
- $(x + y)' = x' \cdot y'$
- $(x \cdot y)' = x' + y'$

> **One-Sentence Takeaway:** Absorption eliminates redundancy ($x + xy = x$); De Morgan converts AND to OR and vice versa by complementing all variables.

### 12.3 Duality

<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-3-duality-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-3-duality-handwritten.svg" alt="Handwritten: 12.3 Duality" width="30%">
</a>
<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-3-duality-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-3-duality-diagram.svg" alt="Diagram: 12.3 Duality" width="30%">
</a>
<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-3-duality-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-3-duality-sticky.svg" alt="Sticky Note: 12.3 Duality" width="30%">
</a>


The **dual** of a Boolean expression replaces $+$ with $\cdot$, $\cdot$ with $+$, $0$ with $1$, and $1$ with $0$. The dual of every Boolean identity is also an identity.

**Example:** Dual of $x + (y \cdot z)$ is $x \cdot (y + z)$.
Dual of $x + 0 = x$ is $x \cdot 1 = x$.

> **One-Sentence Takeaway:** Duality halves the work ? every proven identity gives its dual for free.

### 12.4 Boolean Functions

<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-4-boolean-functions-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-4-boolean-functions-handwritten.svg" alt="Handwritten: 12.4 Boolean Functions" width="30%">
</a>
<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-4-boolean-functions-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-4-boolean-functions-diagram.svg" alt="Diagram: 12.4 Boolean Functions" width="30%">
</a>
<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-4-boolean-functions-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-4-boolean-functions-sticky.svg" alt="Sticky Note: 12.4 Boolean Functions" width="30%">
</a>


An $n$-variable Boolean function is a function $f: \{0,1\}^n \rightarrow \{0,1\}$. It can be represented by:

- A **truth table** listing all $2^n$ input combinations and the output.
- A **Boolean expression** using $+$, $\cdot$, and $'$.
- A **Karnaugh map** for visual simplification.

**Theorem 12.6 (Number of Boolean functions).** There are $2^{2^n}$ distinct $n$-variable Boolean functions.

**Minterm:** A product (AND) term where each variable appears once, either complemented or uncomplemented. For $n$ variables, there are $2^n$ minterms.

**Maxterm:** A sum (OR) term where each variable appears once, either complemented or uncomplemented.

**Sum-of-products (SOP):** OR of minterms where $f = 1$.

**Product-of-sums (POS):** AND of maxterms where $f = 0$.

```typescript
type TruthTable = { inputs: number[][]; output: number[] };

function evaluateBooleanExpr(
  inputs: number[],
  sop: string[][], // array of minterm groups (each is an array of literals)
): number {
  let result = 0; // OR over all product terms
  for (const term of sop) {
    let product = 1;
    for (let i = 0; i < term.length; i++) {
      if (term[i] === "1") product *= inputs[i];
      else if (term[i] === "0") product *= 1 - inputs[i];
      // "X" means don't care
    }
    result = result || product;
  }
  return result;
}
```

> **One-Sentence Takeaway:** Any Boolean function can be expressed as either a sum of minterms (SOP) or a product of maxterms (POS); these are canonical forms.

### 12.5 Logic Gates

<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-5-logic-gates-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-5-logic-gates-handwritten.svg" alt="Handwritten: 12.5 Logic Gates" width="30%">
</a>
<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-5-logic-gates-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-5-logic-gates-diagram.svg" alt="Diagram: 12.5 Logic Gates" width="30%">
</a>
<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-5-logic-gates-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-5-logic-gates-sticky.svg" alt="Sticky Note: 12.5 Logic Gates" width="30%">
</a>


**AND gate (2-input):** Output is 1 iff both inputs are 1. Symbol: $\cdot$.

**OR gate (2-input):** Output is 1 iff at least one input is 1. Symbol: $+$.

**NOT gate (inverter):** Output is the complement of the input. Symbol: $'$.

**NAND gate:** NOT(AND). Output is 0 iff both inputs are 1. Universal gate.

**NOR gate:** NOT(OR). Output is 1 iff both inputs are 0. Universal gate.

**XOR gate:** Output is 1 iff inputs differ.

**XNOR gate:** Output is 1 iff inputs are equal.

```typescript
type Bit = 0 | 1;

function AND(a: Bit, b: Bit): Bit { return (a && b) ? 1 : 0; }
function OR(a: Bit, b: Bit): Bit { return (a || b) ? 1 : 0; }
function NOT(a: Bit): Bit { return a ? 0 : 1; }
function NAND(a: Bit, b: Bit): Bit { return NOT(AND(a, b)); }
function NOR(a: Bit, b: Bit): Bit { return NOT(OR(a, b)); }
function XOR(a: Bit, b: Bit): Bit { return a !== b ? 1 : 0; }
function XNOR(a: Bit, b: Bit): Bit { return a === b ? 1 : 0; }

// Half adder
function halfAdder(a: Bit, b: Bit): { sum: Bit; carry: Bit } {
  return { sum: XOR(a, b), carry: AND(a, b) };
}

// Full adder
function fullAdder(a: Bit, b: Bit, carryIn: Bit): { sum: Bit; carryOut: Bit } {
  const s1 = XOR(a, b);
  const sum = XOR(s1, carryIn);
  const carryOut = OR(AND(a, b), AND(s1, carryIn));
  return { sum, carryOut };
}
```

> **One-Sentence Takeaway:** NAND and NOR are universal ? any Boolean function can be implemented entirely with NAND gates or entirely with NOR gates.

### 12.6 Minimization with Karnaugh Maps

<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-6-minimization-with-karnaugh-maps-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-6-minimization-with-karnaugh-maps-handwritten.svg" alt="Handwritten: 12.6 Minimization with Karnaugh Maps" width="30%">
</a>
<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-6-minimization-with-karnaugh-maps-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-6-minimization-with-karnaugh-maps-diagram.svg" alt="Diagram: 12.6 Minimization with Karnaugh Maps" width="30%">
</a>
<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-6-minimization-with-karnaugh-maps-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-6-minimization-with-karnaugh-maps-sticky.svg" alt="Sticky Note: 12.6 Minimization with Karnaugh Maps" width="30%">
</a>


**Karnaugh map (K-map):** A graphical method for minimizing Boolean expressions with up to 4-6 variables.

**Rules for K-map minimization:**
1. Adjacent cells differ by exactly one variable.
2. Group adjacent 1s in rectangles of size $2^k$ (1, 2, 4, 8, ...).
3. Groups must be rectangular, not diagonal.
4. Use the largest possible groups.
5. Groups may wrap around edges.
6. Each group corresponds to an implicant where the changing variable is eliminated.

**Example (2-variable K-map):** $f(x,y) = xy + x'y$
```
      y=0  y=1
x=0  | 0 | 1 |
x=1  | 0 | 1 |
```
Groups: column $y=1$ ? $y$.

> **One-Sentence Takeaway:** K-maps minimize Boolean expressions by grouping adjacent 1s into the largest power-of-2 rectangles, eliminating variables that change within the group.

### 12.7 Quine-McCluskey Algorithm

<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-7-quine-mccluskey-algorithm-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-7-quine-mccluskey-algorithm-handwritten.svg" alt="Handwritten: 12.7 Quine-McCluskey Algorithm" width="30%">
</a>
<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-7-quine-mccluskey-algorithm-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-7-quine-mccluskey-algorithm-diagram.svg" alt="Diagram: 12.7 Quine-McCluskey Algorithm" width="30%">
</a>
<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-7-quine-mccluskey-algorithm-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-7-quine-mccluskey-algorithm-sticky.svg" alt="Sticky Note: 12.7 Quine-McCluskey Algorithm" width="30%">
</a>


An algorithmic (tabular) method for minimizing Boolean functions with any number of variables.

**Steps:**
1. List all minterms where $f = 1$ (don't cares included).
2. Group minterms by the number of 1s in their binary representation.
3. Combine pairs differing by exactly one bit ? the differing bit becomes "don't care" ($-$).
4. Repeat until no further combination is possible.
5. The remaining terms are **prime implicants**.
6. Use a prime implicant chart to select the minimal set covering all minterms.

```typescript
function countOnes(n: number, bits: number): number {
  let count = 0;
  for (let i = 0; i < bits; i++) {
    if ((n >> i) & 1) count++;
  }
  return count;
}

function differsByOneBit(a: number, b: number): number | null {
  const diff = a ^ b;
  if (diff === 0) return null;
  // Check if diff is a power of 2 (exactly one bit differs)
  return (diff & (diff - 1)) === 0 ? diff : null;
}

function quineMcCluskey(minterms: number[], variables: number): number[][] {
  const terms: { value: number; mask: number; combined: boolean }[] =
    minterms.map(m => ({ value: m, mask: 0, combined: false }));
  // Implementation continues with pairing and chart covering
  return [];
}
```

> **One-Sentence Takeaway:** Quine-McCluskey algorithmically finds all prime implicants and selects the minimum cover ? it is the computational version of K-map minimization.

### 12.8 Don't Care Conditions

<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-8-don-t-care-conditions-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-8-don-t-care-conditions-handwritten.svg" alt="Handwritten: 12.8 Don't Care Conditions" width="30%">
</a>
<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-8-don-t-care-conditions-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-8-don-t-care-conditions-diagram.svg" alt="Diagram: 12.8 Don't Care Conditions" width="30%">
</a>
<a href="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-8-don-t-care-conditions-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/discrete-mathematics/12-boolean/12-8-don-t-care-conditions-sticky.svg" alt="Sticky Note: 12.8 Don't Care Conditions" width="30%">
</a>


**Don't care conditions** are input combinations that cannot occur or whose output value is irrelevant. They can be treated as either 0 or 1 to simplify the expression.

In K-maps, don't cares are marked as "X" and included in a group only if they help form a larger group.

**Theorem 12.7 (Don't care optimization).** If a don't care condition appears in a prime implicant that covers only also-covered or don't-care minterms, it does not need to be covered separately.

> **One-Sentence Takeaway:** Don't cares are wildcards ? use them to create larger K-map groups but never force them to be covered.

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|----------------|----------|
| SOP | OR of AND terms | Sum of minterms where $f=1$ | Canonical form for PLA implementation |
| POS | AND of OR terms | Product of maxterms where $f=0$ | May be simpler for functions with many 1s |
| Minterm | Product term including every variable | $2^n$ possible per function | Truth table row selector |
| Maxterm | Sum term including every variable | Converse of minterm | Truth table complement selector |
| K-map | Visual minimization (up to 4-6 vars) | Adjacency = differs by one literal | Hand minimization for small functions |
| Quine-McCluskey | Algorithmic minimization | Tabular, any variable count | Automated circuit synthesis |

## Quick Reference

| Boolean Law | AND Form | OR Form |
|------------|----------|---------|
| Identity | $x \cdot 1 = x$ | $x + 0 = x$ |
| Domination | $x \cdot 0 = 0$ | $x + 1 = 1$ |
| Idempotent | $x \cdot x = x$ | $x + x = x$ |
| Complement | $x \cdot x' = 0$ | $x + x' = 1$ |
| Absorption | $x \cdot (x + y) = x$ | $x + (x \cdot y) = x$ |
| De Morgan | $(x \cdot y)' = x' + y'$ | $(x + y)' = x' \cdot y'$ |
| Involution | $(x')' = x$ | $(x')' = x$ |

## Cross-Application Matrix

| Concept | Computer Engineering | Cryptography | AI/ML | Software Engineering |
|---------|---------------------|--------------|-------|---------------------|
| Boolean Functions | ALU design, control units | S-box optimization | Decision trees, rule learning | Conditional logic optimization |
| De Morgan's Laws | Gate-level optimization | ? | ? | Refactoring conditionals |
| K-maps | CPU register minimization | ? | ? | ? |
| Quine-McCluskey | VLSI synthesis | Boolean function representation | Feature selection | ? |
| Logic Gates | Full adder, multiplexer | AES circuit | Neural network threshold gates | Bitwise operations |
| Don't Cares | State machine optimization | ? | Missing data handling | Default cases in switch |

## Chapter Quiz

1. De Morgan's law $(x + y)'$ equals:
   - A) $x' + y'$
   - B) $x' \cdot y'$
   - C) $x \cdot y$
   - D) $x + y'$
   <details><summary>Answer&lt;/summary&gt;**B)** $(x + y)' = x' \cdot y'$.</details>

2. How many Boolean functions exist for 3 variables?
   - A) 8
   - B) 64
   - C) 256
   - D) 512
   <details><summary>Answer&lt;/summary&gt;**C)** $2^{2^3} = 2^8 = 256$ distinct Boolean functions for 3 variables.</details>

3. The absorption law $x + (x \cdot y)$ simplifies to:
   - A) $x$
   - B) $y$
   - C) $x + y$
   - D) $xy$
   <details><summary>Answer&lt;/summary&gt;**A)** $x + (x \cdot y) = x$ by the absorption law.</details>

4. Which gate is NOT universal (cannot implement any Boolean function by itself)?
   - A) NAND
   - B) NOR
   - C) AND
   - D) None of the above
   <details><summary>Answer&lt;/summary&gt;**C)** AND alone cannot implement NOT, so it is not universal. NAND and NOR are universal.</details>

5. A K-map groups cells that differ by:
   - A) Exactly one variable
   - B) Different output values
   - C) No variables
   - D) Two or more variables
   <details><summary>Answer&lt;/summary&gt;**A)** Adjacent cells in a K-map differ by exactly one variable, enabling simplification.</details>

## Examples

**Example 12.1** (Boolean identity proof). Prove $x + x'y = x + y$.

*Proof.* $x + x'y = (x + x')(x + y) = 1 \cdot (x + y) = x + y$. $\square$

**Example 12.2** (De Morgan extended). Simplify $(x + y + z)'$:
$(x + y + z)' = x' \cdot y' \cdot z'$.

**Example 12.3** (Truth table to SOP). $f(x,y,z) = 1$ for inputs 001, 010, 111.
SOP: $f = x'y'z + x'yz' + xyz$.

**Example 12.4** (Half adder circuit). Sum $= A \oplus B$, Carry $= AB$.

| A | B | Sum | Carry |
|---|---|-----|-------|
| 0 | 0 |  0  |   0   |
| 0 | 1 |  1  |   0   |
| 1 | 0 |  1  |   0   |
| 1 | 1 |  0  |   1   |

```typescript
function halfAdderCircuit(a: Bit, b: Bit) {
  const sum = XOR(a, b);
  const carry = AND(a, b);
  return { sum, carry };
}
```

**Example 12.5** (K-map minimization). $f(x,y,z) = \sum m(0,2,4,5,6)$.
K-map:
```
     yz
     00  01  11  10
x=0 | 1 | 0 | 0 | 1 |
x=1 | 1 | 1 | 0 | 1 |
```
Groups: $z'$ (columns 00 and 10) and $y$ (bottom row for 01, but larger group: $z'$ covers 4 cells). Minimal: $f = z' + xy'$.

**Example 12.6** (NAND as universal gate). Implement NOT using NAND: $x' = x \text{ NAND } x$. Implement AND: $xy = (x \text{ NAND } y)'$.

**Example 12.7** (Don't care optimization). $f(w,x,y,z) = \sum m(0,2,5,7,8,10) + d(13,15)$. The don't cares at 13 and 15 (binary 1101, 1111) can group with 5 (0101) and 7 (0111) to form $x'z$, eliminating $w$ and $y$.

**Example 12.8** (Boolean function count for 2 variables). There are $2^{2^2} = 16$ possible 2-variable Boolean functions, including AND, OR, XOR, NAND, NOR, XNOR, implication, etc.

**Example 12.9** (Duality). Dual of $x + yz = (x + y)(x + z)$ is $x(y + z) = xy + xz$.

**Example 12.10** (Full adder in gates).

```typescript
function fullAdderGates(a: Bit, b: Bit, cin: Bit): { sum: Bit; cout: Bit } {
  const aXORb = XOR(a, b);
  const sum = XOR(aXORb, cin);
  const cout = OR(AND(a, b), AND(aXORb, cin));
  return { sum, cout };
}
```

## TypeScript Implementations

```typescript
type Bit = 0 | 1;

// --- Gate Library ---
const AND = (a: Bit, b: Bit): Bit => (a && b) as Bit;
const OR = (a: Bit, b: Bit): Bit => (a || b) as Bit;
const NOT = (a: Bit): Bit => (1 - a) as Bit;
const NAND = (a: Bit, b: Bit): Bit => NOT(AND(a, b));
const NOR = (a: Bit, b: Bit): Bit => NOT(OR(a, b));
const XOR = (a: Bit, b: Bit): Bit => (a !== b ? 1 : 0) as Bit;
const XNOR = (a: Bit, b: Bit): Bit => (a === b ? 1 : 0) as Bit;

console.log('AND(1,0):', AND(1, 0)); // 0
console.log('XOR(1,0):', XOR(1, 0)); // 1

// --- Boolean Expression Simplifier (using identities) ---
function simplifyExpr(expr: string): string {
  // Apply basic Boolean identities iteratively
  let s = expr;
  const rules: [RegExp, string][] = [
    [/A \+ A/g, 'A'], [/A \* A/g, 'A'],
    [/A \+ 0/g, 'A'], [/A \* 1/g, 'A'],
    [/A \* 0/g, '0'], [/A \+ 1/g, '1'],
    [/A \+ A'/g, '1'], [/A \* A'/g, '0'],
    [/A''/g, 'A'],
  ];
  for (let i = 0; i < 10; i++) for (const [pattern, repl] of rules) s = s.replace(pattern, repl);
  return s;
}
console.log('Simplify A+A:', simplifyExpr('A + A')); // A

// --- SOP / POS Converter ---
function sopFromTruthTable(vars: number, truthTable: number[]): string {
  const terms: string[] = [];
  for (let i = 0; i < truthTable.length; i++) {
    if (truthTable[i] === 1) {
      const term: string[] = [];
      for (let j = 0; j < vars; j++) {
        const bit = (i >> (vars - 1 - j)) & 1;
        term.push(bit ? `x${j+1}` : `x${j+1}'`);
      }
      terms.push(term.join(''));
    }
  }
  return terms.join(' + ') || '0';
}
// XOR truth table: x1 ? x2
const xorTT = [0, 1, 1, 0];
console.log('XOR SOP:', sopFromTruthTable(2, xorTT)); // x1'x2 + x1x2'

// --- Logic Circuit Simulator ---
function halfAdder(a: Bit, b: Bit): { sum: Bit; carry: Bit } {
  return { sum: XOR(a, b), carry: AND(a, b) };
}
function fullAdder(a: Bit, b: Bit, cin: Bit): { sum: Bit; cout: Bit } {
  const ha1 = halfAdder(a, b);
  const ha2 = halfAdder(ha1.sum, cin);
  return { sum: ha2.sum, cout: OR(ha1.carry, ha2.carry) };
}
console.log('Half adder (1,1):', halfAdder(1, 1)); // {sum:0, carry:1}
console.log('Full adder (1,1,0):', fullAdder(1, 1, 0)); // {sum:0, cout:1}

// --- 4-bit Ripple Carry Adder ---
function rippleCarry4(a: Bit[], b: Bit[]): { sum: Bit[]; cout: Bit } {
  let carry: Bit = 0;
  const sum: Bit[] = [];
  for (let i = 3; i >= 0; i--) {
    const fa = fullAdder(a[i], b[i], carry);
    sum.unshift(fa.sum);
    carry = fa.cout;
  }
  return { sum, cout: carry };
}
const A: Bit[] = [1, 0, 1, 0]; // 10
const B: Bit[] = [0, 1, 1, 0]; // 6
console.log('4-bit add 1010+0110:', rippleCarry4(A, B)); // {sum:[1,0,0,0], cout:0} = 8

// --- Minterm/Maxterm Counter ---
function mintermCount(n: number): number { return 1 << n; }
console.log('Minterms for 3 vars:', mintermCount(3)); // 8
```

```
// --- Boolean Expression Evaluator ---
function evalExpr(expr: string, vars: Record<string, boolean>): boolean {
  const tokens = expr.match(/[A-Za-z]+|[??????]|[()]/g) ?? [];
  const prec: Record<string, number> = { '?': 4, '?': 3, '?': 2, '?': 1, '?': 1, '?': 1 };
  const output: string[] = [], ops: string[] = [];
  for (const t of tokens) {
    if (t in vars) output.push(t);
    else if (t === '(') ops.push(t);
    else if (t === ')') { while (ops.length && ops[ops.length-1] !== '(') output.push(ops.pop()!); ops.pop(); }
    else { while (ops.length && ops[ops.length-1] !== '(' && (prec[ops[ops.length-1]] ?? 0) >= (prec[t] ?? 0)) output.push(ops.pop()!); ops.push(t); }
  }
  while (ops.length) output.push(ops.pop()!);
  const stack: boolean[] = [];
  for (const t of output) {
    if (t in vars) stack.push(vars[t]);
    else if (t === '?') stack.push(!stack.pop()!);
    else { const b = stack.pop()!, a = stack.pop()!;
      if (t === '?') stack.push(a && b);
      else if (t === '?') stack.push(a || b);
      else if (t === '?') stack.push(!a || b);
      else if (t === '?') stack.push(a === b);
      else if (t === '?') stack.push(a !== b);
    }
  }
  return stack[0];
}
console.log('(p ? q) ? r:', evalExpr('(p ? q) ? r', {p:true, q:true, r:false}));

// --- DNF/CNF Converter (from truth table) ---
function truthTableToForm(t: boolean[][], form: 'dnf' | 'cnf'): string {
  const vars = ['p', 'q', 'r'];
  if (form === 'dnf')
    return t.filter(r => r[r.length-1]).map(r =>
      r.slice(0,-1).map((v, i) => (v ? '' : '?') + vars[i]).join('?')).join(' ? ');
  return t.filter(r => !r[r.length-1]).map(r =>
    r.slice(0,-1).map((v, i) => (v ? '?' : '') + vars[i]).join('?')).join(' ? ');
}
// p ? q truth table
const xorTTbl: boolean[][] = [[1,1,0],[1,0,1],[0,1,1],[0,0,0]];
console.log('\nXOR DNF:', truthTableToForm(xorTTbl, 'dnf'));
console.log('XOR CNF:', truthTableToForm(xorTTbl, 'cnf'));

// --- Satisfiability Checker (naive, 3 vars) ---
function isSatisfiable(expr: (v: boolean[]) => boolean, vars: number): boolean {
  for (let i = 0; i < (1 << vars); i++) {
    const vals: boolean[] = [];
    for (let j = vars - 1; j >= 0; j--) vals.push(Boolean(i & (1 << j)));
    if (expr(vals)) return true;
  }
  return false;
}
const unsat = (v: boolean[]) => v[0] && !v[0];
console.log('\np ? ?p satisfiable:', isSatisfiable(unsat, 1));

// --- Boolean Function Minimization (Quine-McCluskey helper) ---
function binaryRep(n: number, bits: number): string {
  return n.toString(2).padStart(bits, '0');
}
function combineTerms(a: string, b: string): string | null {
  let diff = -1;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) { if (diff !== -1) return null; diff = i; }
  if (diff === -1) return null;
  return a.slice(0, diff) + '-' + a.slice(diff + 1);
}
const minterms = [0, 1, 2, 5, 7]; // for 3 vars
const bits = 3;
console.log('\nMinterms:', minterms.map(m => binaryRep(m, bits)).join(', '));
// First-level combination
const combined = new Set<string>();
for (let i = 0; i < minterms.length; i++)
  for (let j = i + 1; j < minterms.length; j++) {
    const c = combineTerms(binaryRep(minterms[i], bits), binaryRep(minterms[j], bits));
    if (c) combined.add(c);
  }
console.log('Combined (1st pass):', [...combined].join(', '));

// --- XOR/XNOR Gate Simulation ---
function xorGate(a: boolean, b: boolean): boolean { return a !== b; }
function xnorGate(a: boolean, b: boolean): boolean { return a === b; }
function halfAdder(a: boolean, b: boolean): { sum: boolean; carry: boolean } {
  return { sum: xorGate(a, b), carry: a && b };
}
const ha = halfAdder(true, true);
console.log('\nHalf adder (1+1): sum=', ha.sum, 'carry=', ha.carry);
```


// boolean
// sets-graphs-probability implementation

interface Task { id: string; name: string; status: string; data: unknown }
class Processor {
  private tasks: Task[] = []
  private maxConcurrency: number
  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }
  async add(task: Omit&lt;Task, "status"&gt;): Promise&lt;void&gt; {
    this.tasks.push({ ...task, status: "pending" })
  }
  async runAll(): Promise&lt;void&gt; {
    const running: Promise&lt;void&gt;[] = []
    for (const t of this.tasks) {
      if (running.length >= this.maxConcurrency) { await Promise.race(running) }
      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })
      running.push(p)
    }
    await Promise.all(running)
  }
  private async execute(t: Task): Promise&lt;void&gt; {
    t.status = "running"
    await new Promise(r => setTimeout(r, 10))
    t.status = "done"
  }
  getResults(): Task[] { return this.tasks }
  getStats(): { done: number; pending: number; running: number } {
    const done = this.tasks.filter(t => t.status === "done").length
    const pending = this.tasks.filter(t => t.status === "pending").length
    const running = this.tasks.filter(t => t.status === "running").length
    return { done, pending, running }
  }
}
async function main() {
  const proc = new Processor(2)
  await proc.add({ id: '1', name: 'boolean', data: { topic: 'sets-graphs-probability' } })
  await proc.runAll()
  console.log('Stats:', proc.getStats())
}
main().catch(console.error)
export { Processor, Task }

// boolean - additional TS implementations

interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }
class Cache {
  private store: Map&lt;string, CacheEntry&gt; = new Map()
  constructor(private defaultTTL: number = 60000) {}
  set(key: string, value: unknown, ttl?: number): void {
    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })
  }
  get(key: string): unknown | undefined {
    const entry = this.store.get(key)
    if (!entry) return undefined
    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }
    return entry.value
  }
  delete(key: string): boolean { return this.store.delete(key) }
  clear(): void { this.store.clear() }
  size(): number { return this.store.size }
  keys(): string[] { return Array.from(this.store.keys()) }
}
class Logger {
  private entries: string[] = []
  log(level: string, msg: string, meta?: Record&lt;string, unknown&gt;): void {
    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })
    this.entries.push(entry)
    console.log(entry)
  }
  info(msg: string, meta?: Record&lt;string, unknown&gt;): void { this.log("info", msg, meta) }
  warn(msg: string, meta?: Record&lt;string, unknown&gt;): void { this.log("warn", msg, meta) }
  error(msg: string, meta?: Record&lt;string, unknown&gt;): void { this.log("error", msg, meta) }
  getLogs(): string[] { return [...this.entries] }
  clear(): void { this.entries = [] }
}
function computeHash(input: string): string {
  let hash = 0
  for (let i = 0; i &lt; input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }
  return Math.abs(hash).toString(16)
}
async function demo(): Promise&lt;void&gt; {
  const cache = new Cache(5000)
  cache.set('key1', 'discrete-math demo')
  const log = new Logger()
  log.info('Cache demo started', { course: 'discrete-mathematics', chapter: 'boolean' })
  const v = cache.get("key1")
  console.log('Cached:', v)
  console.log('Hash:', computeHash('discrete-math'))
}
demo()
export { Cache, Logger, computeHash, CacheEntry }
## Summary

- Boolean algebra is the algebraic foundation of digital logic, operating on $\{0,1\}$.
- Key identities: idempotent, domination, absorption, involution, De Morgan.
- Duality: swapping $+$ and $\cdot$, $0$ and $1$, yields a valid dual identity.
- Boolean functions are represented by truth tables, SOP, or POS expressions.
- Logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR) implement Boolean operations.
- NAND and NOR are universal; any function can be built from just NAND gates.
- Minimization reduces circuit complexity via K-maps or Quine-McCluskey.

## Practical Takeaways

1. **Simplify before building** ? a minimized expression means fewer gates, less power, and less cost.
2. **NAND is universal** ? any circuit can be implemented using only NAND gates.
3. **Don't cares are your friend** ? use them to form larger K-map groups.
4. **De Morgan transforms circuit types** ? use it to convert AND-OR to NAND-NAND or OR-AND to NOR-NOR.
5. **K-maps work up to 4 variables** ? for more, use Quine-McCluskey algorithmically.

### 12.6 Boolean Function Implementations in TypeScript

```typescript
type BooleanFunc = (inputs: boolean[]) => boolean;

function evaluateSOP(
  minterms: number[][],
  inputs: boolean[]
): boolean {
  return minterms.some(term =>
    term.every((lit, i) => lit === 1 ? inputs[i] : !inputs[i])
  );
}

function evaluatePOS(
  maxterms: number[][],
  inputs: boolean[]
): boolean {
  return maxterms.every(term =>
    term.some((lit, i) => lit === 1 ? inputs[i] : !inputs[i])
  );
}

function truthTable(func: BooleanFunc, n: number): boolean[][] {
  const table: boolean[][] = [];
  for (let i = 0; i < (1 << n); i++) {
    const inputs: boolean[] = [];
    for (let j = n - 1; j >= 0; j--) {
      inputs.push(Boolean((i >> j) & 1));
    }
    table.push([...inputs, func(inputs)]);
  }
  return table;
}

// XOR: a ? b = a'b + ab'
const xor: BooleanFunc = ([a, b]) => (a !== b);
const xorTable = truthTable(xor, 2);
console.table(xorTable); // 00?0, 01?1, 10?1, 11?0
```

### 12.7 K-Map Minimization Algorithm

**Karnaugh maps** provide a visual method for minimizing Boolean expressions with up to 6 variables.

```typescript
function kmap2var(minterms: number[]): string {
  const grid = [
    [minterms.includes(0), minterms.includes(1)],
    [minterms.includes(2), minterms.includes(3)]
  ];
  const terms: string[] = [];

  // Check for whole row/column coverage
  if (grid[0][0] && grid[0][1]) terms.push("a'");
  if (grid[1][0] && grid[1][1]) terms.push("a");
  if (grid[0][0] && grid[1][0]) terms.push("b'");
  if (grid[0][1] && grid[1][1]) terms.push("b");

  // Single cells not covered
  const vars = ["a", "b"];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if (grid[i][j] && !terms.some(t => t.includes(vars[0]) || t.includes(vars[1]))) {
        terms.push(`${i === 0 ? "a'" : "a"}${j === 0 ? "b'" : "b"}`);
      }
    }
  }
  return terms.join(" + ") || "0";
}

// Example: f(a,b) = Sm(0,1,3) = a'b' + a'b + ab = a' + b
console.log(kmap2var([0, 1, 3])); // a' + b
```

**4-variable K-map grouping rules:**
- Groups must be rectangular and contain $2^k$ cells.
- Groups wrap around edges and corners.
- Each group corresponds to an implicant where variables are constant.
- Choose the minimum number of largest possible groups.

```mermaid
flowchart TD
    subgraph "K-map for f=Sm(0,1,3,4,7,8,12,15)"
        A["ab\cd 00 01 11 10"]
        A --> B["00: 1 1 0 1"]
        A --> C["01: 0 0 1 0"]
        A --> D["11: 1 0 1 0"]
        A --> E["10: 1 0 0 0"]
    end
```

### 12.8 Quine-McCluskey Algorithm

The **Quine-McCluskey** algorithm systematically minimizes Boolean functions with any number of variables.

```typescript
function quineMcCluskey(minterms: number[], n: number): string[] {
  // Step 1: Group minterms by number of 1s
  const groups: Map<number, number[]> = new Map();
  for (const m of minterms) {
    const ones = m.toString(2).padStart(n, '0').split('1').length - 1;
    if (!groups.has(ones)) groups.set(ones, []);
    groups.get(ones)!.push(m);
  }

  // Step 2: Combine adjacent groups
  const combined = new Set<number>();
  const primes: string[] = [];
  const groupKeys = [...groups.keys()].sort();

  for (let i = 0; i < groupKeys.length - 1; i++) {
    const g1 = groups.get(groupKeys[i])!;
    const g2 = groups.get(groupKeys[i + 1])!;
    for (const a of g1) {
      for (const b of g2) {
        const diff = a ^ b;
        if ((diff & (diff - 1)) === 0) { // power of 2
          combined.add(a);
          combined.add(b);
          const merged = a & (b ^ diff);
          const bitStr = merged.toString(2).padStart(n, '0');
          const dashPos = Math.log2(diff);
          const term = bitStr.split('').map((c, idx) =>
            idx === n - 1 - dashPos ? '-' : c
          ).join('');
          if (!primes.includes(term)) primes.push(term);
        }
      }
    }
  }

  return primes;
}

// Minimize f(a,b,c) = Sm(0,2,5,7)
const primes = quineMcCluskey([0, 2, 5, 7], 3);
console.log(primes);
```

### 12.9 Logic Gate Implementation

**Universal gates** (NAND, NOR) can implement any Boolean function.

```typescript
function nand(a: boolean, b: boolean): boolean { return !(a && b); }
function nor(a: boolean, b: boolean): boolean { return !(a || b); }

// NOT using NAND
function notNAND(a: boolean): boolean { return nand(a, a); }

// AND using NAND
function andNAND(a: boolean, b: boolean): boolean {
  const y = nand(a, b);
  return nand(y, y);
}

// OR using NAND
function orNAND(a: boolean, b: boolean): boolean {
  return nand(nand(a, a), nand(b, b));
}

// XOR using NAND gates (4 NAND gates)
function xorNAND(a: boolean, b: boolean): boolean {
  const w1 = nand(a, b);
  const w2 = nand(a, w1);
  const w3 = nand(b, w1);
  return nand(w2, w3);
}

console.log(xorNAND(true, false)); // true
console.log(xorNAND(false, true)); // true
console.log(xorNAND(true, true));  // false
```

### 12.10 Boolean Algebra in Circuit Design

**Example 12.6** (Full adder implementation). A full adder sums three bits ($A, B, C_\text{in}$) producing sum $S$ and carry $C_\text{out}$.

$$S = A \oplus B \oplus C_\text{in}$$
$$C_\text{out} = AB + AC_\text{in} + BC_\text{in}$$

```typescript
function fullAdder(A: boolean, B: boolean, Cin: boolean): { S: boolean; Cout: boolean } {
  return {
    S: A !== B !== Cin,
    Cout: (A && B) || (A && Cin) || (B && Cin)
  };
}

function fourBitAdder(A: boolean[], B: boolean[]): { S: boolean[]; Cout: boolean } {
  const S: boolean[] = [];
  let Cin = false;
  for (let i = 3; i >= 0; i--) {
    const result = fullAdder(A[i], B[i], Cin);
    S[i] = result.S;
    Cin = result.Cout;
  }
  return { S, Cout: Cin };
}

// 5 + 3 = 8: 0101 + 0011 = 1000
const A = [false, true, false, true]; // 0101
const B = [false, false, true, true]; // 0011
console.log(fourBitAdder(A, B)); // S=[1,0,0,0], Cout=false
```

**Proof 12.3 (De Morgan's laws in Boolean algebra).** $\overline{x + y} = \overline{x} \cdot \overline{y}$.

*Proof by truth table.* For all $(x, y) \in \{0, 1\}^2$, both sides produce the same output: $x+y$ is 1 except when $x=y=0$; complement gives 1 only when $x=y=0$, same as $\overline{x} \cdot \overline{y}$.

## Additional Exercises

16. Simplify $f(a,b,c) = a'bc + ab'c + abc' + abc$ using a K-map.

17. Show that NOR is also a universal gate by expressing NOT, AND, and OR using only NOR gates.

18. Design a 4-to-1 multiplexer using only NAND gates.

19. Write a TypeScript function `booleanFunctionToSOP` that converts any truth table (array of input/output pairs) to SOP form.

20. Prove that the dual of any Boolean algebra identity is also an identity.

## Exercises

### Review Questions

1. State De Morgan's laws for Boolean algebra.
2. What is the dual of $x \cdot (y + z')$?
3. How many Boolean functions exist for 4 variables?
4. What is the difference between SOP and POS?
5. List three Boolean algebra identities.

### Application Problems

6. Simplify $f(x,y) = x'y + xy + xy'$ using Boolean identities.

7. Use a K-map to minimize $f(w,x,y,z) = \sum m(0,1,3,4,7,8,12,15)$.

8. Implement XOR using only NAND gates.

9. Write the SOP expression for $f(a,b,c) = 1$ when the binary input represents an odd number.

10. Convert the expression $(x + y')(y + z')$ to SOP form.

11. Implement a 2-to-1 multiplexer using logic gates: $f = s' \cdot A + s \cdot B$.

12. Use Quine-McCluskey to minimize $f(w,x,y,z) = \sum m(0,2,4,6,8,10,12,14)$.

### Challenge Problem

13. Prove that every Boolean function can be expressed using only NAND gates.

14. Show that the set $\{\text{AND}, \text{NOT}\}$ is universal but the set $\{\text{AND}, \text{OR}\}$ is not.

15. Design a 4-bit ripple-carry adder using full adders. Write the TypeScript implementation and compute the gate count.
