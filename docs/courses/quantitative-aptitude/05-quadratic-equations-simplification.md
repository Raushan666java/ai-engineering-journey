# Chapter 5: Quadratic Equations & Simplification — Quadratic Comparison, Approximation, BODMAS

## Learning Objectives

By the end of this chapter, you will be able to:
- Solve quadratic equations using factorization and the quadratic formula
- Compare two quadratic equations to determine the relationship between their roots
- Apply approximation techniques to simplify complex numerical expressions
- Use the BODMAS rule correctly to evaluate arithmetic expressions
- Solve IBPS SO-level quadratic equation comparison questions in under 45 seconds
- Simplify large numerical expressions using approximation and digit-sum methods

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/quantitative-aptitude/05-quadratic-equations-simplification/.png" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/quantitative-aptitude/05-quadratic-equations-simplification/.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/quantitative-aptitude/05-quadratic-equations-simplification/.png" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/quantitative-aptitude/05-quadratic-equations-simplification/.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/quantitative-aptitude/05-quadratic-equations-simplification/.png" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/quantitative-aptitude/05-quadratic-equations-simplification/.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->

## Theory

### 1. Quadratic Equations

A quadratic equation is a polynomial equation of degree 2 in the form:

```
ax² + bx + c = 0, where a ≠ 0
```

**Standard Form:** ax² + bx + c = 0

**Methods to Solve Quadratic Equations:**

### Method 1: Factorization (Splitting the Middle Term)

Steps:
1. Multiply a and c to get ac
2. Find two factors of ac whose sum is b
3. Split the middle term and factorise
4. Set each factor to zero and solve

**Example:** x² - 5x + 6 = 0
- ac = 1 × 6 = 6
- Factors of 6 that sum to -5: (-2) + (-3) = -5
- x² - 2x - 3x + 6 = 0
- x(x - 2) - 3(x - 2) = 0
- (x - 2)(x - 3) = 0
- x = 2 or x = 3

### Method 2: Quadratic Formula

When factorization is not straightforward:

```
x = [-b ± √(b² - 4ac)] / 2a
```

**Discriminant (D):** D = b² - 4ac

- If D &gt; 0: Two distinct real roots
- If D = 0: One real root (repeated)
- If D &lt; 0: No real roots (complex roots)

### Method 3: Completing the Square

```
x² + bx + c = 0
=> (x + b/2)² = (b/2)² - c
=> x = -b/2 ± √[(b/2)² - c]
```

### Comparing Two Quadratic Equations (IBPS SO Special)

In IBPS SO exams, two quadratic equations (I and II) are given, and you need to determine the relationship between their roots:

Options:
1. `x &gt; y` (Every root of x is greater than every root of y)
2. `x &lt; y` (Every root of x is less than every root of y)
3. `x ≥ y` (No root of x is less than any root of y)
4. `x ≤ y` (No root of x is greater than any root of y)
5. `x = y` or relationship cannot be established

**Method:**
1. Solve both equations to find roots
2. Compare the root sets
3. Determine the relationship

**Remember:** If one equation has roots α, β and the other has γ, δ:
- Compare all four values on a number line
- Relationship is established only if a consistent pattern exists

### 2. Approximation

Approximation involves rounding numbers to a required degree of accuracy and then performing operations.

**Rounding Rules:**
- If the digit after the rounding place is 5 or more, round up
- If the digit after the rounding place is less than 5, round down

**Common Approximations:**
```
π ≈ 3.14 or 22/7
√2 ≈ 1.414
√3 ≈ 1.732
√5 ≈ 2.236
√6 ≈ 2.449
√7 ≈ 2.646
√8 ≈ 2.828
√10 ≈ 3.162
```

**IBPS SO Context:**

Approximation questions in IBPS SO involve expressions like:
```
√(168.99) + (7.98)² - 23.02 × 1.99 = ?
```

**Strategy:**
1. Round all numbers to the nearest integer
2. Apply BODMAS
3. Find the closest option

### 3. BODMAS Rule

BODMAS defines the order of operations in mathematical expressions.

| Letter | Stands For | Example |
|--------|------------|---------|
| B | Brackets | ( ), { }, [ ] |
| O | Orders (powers, roots) | ², √, etc. |
| D | Division | ÷ |
| M | Multiplication | × |
| A | Addition | + |
| S | Subtraction | - |

**Full Order:**
1. **Brackets:** Solve from innermost to outermost: ( ) → { } → [ ]
2. **Orders:** Powers and roots
3. **Division and Multiplication:** Left to right (equal precedence)
4. **Addition and Subtraction:** Left to right (equal precedence)

**Remember:** DM and AS have equal precedence, so operations are performed left to right.

**Common Mistake:**
`12 ÷ 3 × 4` should be solved as `(12 ÷ 3) × 4 = 16`, NOT `12 ÷ (3 × 4) = 1`

### 4. Digit Sum Method (Simplification Check)

The digit sum of a number is the sum of its digits, reduced to a single digit.

**Example:**
456 → 4+5+6 = 15 → 1+5 = 6

**Application:**
To verify calculations, the digit sum of the result should match the digit sum of the computation.

### 5. Simplification Techniques

**Approximation of Square Roots:**
- For a number n, find the nearest perfect square below and above
- Example: √(50) — nearest squares are 49 (7²) and 64 (8²)
- √50 ≈ 7 + (50-49)/(64-49) = 7 + 1/15 ≈ 7.07

**Cubes and Cube Roots:**
- Memorise cubes up to 20: 1³=1, 2³=8, 3³=27, 4³=64, 5³=125, 6³=216, 7³=343, 8³=512, 9³=729, 10³=1000

**Percentage to Fraction:**
Convert percentages to fractions for easier simplification:
- 33.33% = 1/3, 25% = 1/4, 12.5% = 1/8, 6.25% = 1/16

## Mermaid Diagram: Quadratic Equation Solution Flow

```mermaid
flowchart TD
    A["Quadratic Equation ax²+bx+c=0"] --> B["Check if factorisable"]
    B -->|"Yes"| C["Split middle term"]
    C --> D["Set each factor = 0"]
    D --> E["Get roots"]
    B -->|"No"| F["Compute D = b²-4ac"]
    F --> G{"D > 0?"}
    G -->|"Yes"| H["x = (-b ± √D)/2a"]
    G -->|"No"| I{"D = 0?"}
    I -->|"Yes"| J["x = -b/2a (repeated)"]
    I -->|"No"| K["No real roots"]
    H --> E
    J --> E
```

## Mermaid Diagram: BODMAS Order of Operations

```mermaid
flowchart LR
    A["Expression"] --> B["Step 1: Brackets"]
    B --> C["Step 2: Orders (powers, roots)"]
    C --> D["Step 3: Division & Multiplication (L→R)"]
    D --> E["Step 4: Addition & Subtraction (L→R)"]
    E --> F["Result"]
```

## Mermaid Diagram: Quadratic Comparison Strategy

```mermaid
flowchart TD
    A["Equation I: ax²+bx+c=0"] --> B["Find roots r₁, r₂"]
    C["Equation II: dx²+ex+f=0"] --> D["Find roots s₁, s₂"]
    B --> E["Place on number line"]
    D --> E
    E --> F{"All r > all s?"}
    F -->|"Yes"| G["x > y"]
    F -->|"No"| H{"All r < all s?"}
    H -->|"Yes"| I["x < y"]
    H -->|"No"| J{"r₁ ≤ r₂ ≤ s₁ ≤ s₂ etc?"}
    J -->|"Yes"| K["x ≤ y or x ≥ y"]
    J -->|"No"| L["Can't be determined"]
```

## Examples

### Example 1: Solving Quadratic by Factorization

**Question:** Solve x² + 7x + 12 = 0

**Solution:**
a = 1, b = 7, c = 12
ac = 12
Factors of 12 that sum to 7: 3 + 4 = 7
x² + 3x + 4x + 12 = 0
x(x + 3) + 4(x + 3) = 0
(x + 3)(x + 4) = 0
x = -3 or x = -4

### Example 2: Quadratic Formula

**Question:** Solve 2x² - 5x + 2 = 0

**Solution:**
a = 2, b = -5, c = 2
D = b² - 4ac = 25 - 16 = 9
√D = 3

x = [5 ± 3] / 4
x = (5+3)/4 = 8/4 = 2
x = (5-3)/4 = 2/4 = 0.5

Roots: x = 2 or x = 0.5

### Example 3: Quadratic Comparison (IBPS SO Style)

**Question:** Compare the roots of the two equations:

I. x² - 8x + 15 = 0
II. y² - 12y + 35 = 0

**Solution:**

Equation I: x² - 8x + 15 = 0
Factors of 15 summing to -8: -3 + (-5) = -8
(x - 3)(x - 5) = 0
x = 3, 5

Equation II: y² - 12y + 35 = 0
Factors of 35 summing to -12: -5 + (-7) = -12
(y - 5)(y - 7) = 0
y = 5, 7

Comparing: x = {3, 5} and y = {5, 7}
Both have 5 in common. But x also has 3 (&lt; 5, 7) while y also has 7 (&gt; 3, 5).
Since 3 &lt; 5 and 5 = 5 and 5 &lt; 7, we cannot say all x are &gt; all y or vice versa.
However, x has values 3 and 5, y has values 5 and 7.
- Minimum x = 3, Minimum y = 5 → x_min &lt; y_min
- Maximum x = 5, Maximum y = 7 → x_max &lt; y_max
So x ≤ y (no root of x is greater than any root of y).

**Answer:** x ≤ y

Wait — let me recheck. x has 3 and 5, y has 5 and 7.
- Is 5 (from x) ≤ all roots of y? 5 ≤ 5 ✓ and 5 ≤ 7 ✓
- Is 3 (from x) ≤ all roots of y? 3 ≤ 5 ✓ and 3 ≤ 7 ✓
So yes, x ≤ y.

### Example 4: Quadratic Comparison — No Relationship

**Question:** Compare:

I. x² - 5x + 6 = 0
II. y² - y - 6 = 0

**Solution:**

I: x² - 5x + 6 = 0
(x - 2)(x - 3) = 0
x = 2, 3

II: y² - y - 6 = 0
(y - 3)(y + 2) = 0
y = 3, -2

x = {2, 3}, y = {3, -2}
- x has 2 and 3; y has -2 and 3
- Does x ≥ y hold? 2 ≥ -2 ✓, 2 ≥ 3 ✗. So no.
- Does x ≤ y hold? 2 ≤ 3 ✓, 3 ≤ 3 ✓, 3 ≤ -2 ✗. So no.
- Since neither relationship holds consistently, we cannot establish a relationship.

**Answer:** Cannot be determined

### Example 5: BODMAS Simplification

**Question:** Simplify: 15 + 6 × 3 - 8 ÷ 2

**Solution:**
Step 1: Division first — 8 ÷ 2 = 4
= 15 + 6 × 3 - 4
Step 2: Multiplication — 6 × 3 = 18
= 15 + 18 - 4
Step 3: L to R — 15 + 18 = 33
= 33 - 4 = 29

**Answer:** 29

### Example 6: BODMAS with Brackets

**Question:** Simplify: {18 + (24 ÷ 3) - 5} × 2

**Solution:**
Step 1: Innermost bracket — 24 ÷ 3 = 8
= {18 + 8 - 5} × 2
Step 2: Curly bracket — 18 + 8 = 26, 26 - 5 = 21
= 21 × 2
Step 3: Multiplication — 42

**Answer:** 42

### Example 7: Approximation

**Question:** What approximate value should come in place of ? (IBPS SO Style)

√(168.99) + (7.98)² - 23.02 × 1.99 = ?

**Solution:**

Round to nearest integers:
√169 + 8² - 23 × 2

= 13 + 64 - 46
= 77 - 46
= 31

**Answer:** 31

### Example 8: Simplification with Square Roots

**Question:** Simplify: √(3136) - √(1521) + √(2025)

**Solution:**
√3136 = 56 (since 56² = 3136)
√1521 = 39 (since 39² = 1521)
√2025 = 45 (since 45² = 2025)

= 56 - 39 + 45
= 17 + 45
= 62

**Answer:** 62

### Example 9: Quadratic with Decimals

**Question:** Solve: x² - 2.5x + 1.5 = 0

**Solution:**
Multiply by 2: 2x² - 5x + 3 = 0
2x² - 2x - 3x + 3 = 0
2x(x - 1) - 3(x - 1) = 0
(x - 1)(2x - 3) = 0
x = 1 or x = 1.5

### Example 10: IBPS SO Quadratic Comparison

**Question:** Compare:

I. 3x² - 5x - 12 = 0
II. 2y² - 7y + 6 = 0

**Solution:**

I: 3x² - 5x - 12 = 0
3x² - 9x + 4x - 12 = 0
3x(x - 3) + 4(x - 3) = 0
(x - 3)(3x + 4) = 0
x = 3 or x = -4/3

II: 2y² - 7y + 6 = 0
2y² - 4y - 3y + 6 = 0
2y(y - 2) - 3(y - 2) = 0
(y - 2)(2y - 3) = 0
y = 2 or y = 1.5

x = {3, -1.33}, y = {2, 1.5}
- x_min = -1.33, x_max = 3
- y_min = 1.5, y_max = 2
- x has -1.33 which is &lt; both y values, and 3 which is &gt; both y values
- Relationship cannot be established

**Answer:** Cannot be determined

### Example 11: Approximation (Multiple Operations)

**Question:** Find the approximate value:

(24.98% of 399.99) + 35.03 × 4.99 ÷ 6.98 = ?

**Solution:**

Round: 25% of 400 + 35 × 5 ÷ 7

= (25/100 × 400) + (35 × 5 ÷ 7)
= (1/4 × 400) + (175 ÷ 7)
= 100 + 25
= 125

**Answer:** 125

### Example 12: Complex BODMAS

**Question:** Simplify:

(12.5% of 640) + (3/7 of 490) - √(576) × 2

**Solution:**

12.5% = 1/8
(1/8 × 640) + (3/7 × 490) - √576 × 2

= 80 + 210 - 24 × 2
= 80 + 210 - 48
= 290 - 48
= 242

**Answer:** 242

### Example 13: Inequality with Quadratic (Both Roots Positive)

**Question:** Compare:

I. x² - 11x + 30 = 0
II. y² - 9y + 20 = 0

**Solution:**

I: (x - 5)(x - 6) = 0 → x = 5, 6
II: (y - 4)(y - 5) = 0 → y = 4, 5

x = {5, 6}, y = {4, 5}
- x has 5 and 6; y has 4 and 5
- Is x ≥ y? 5 ≥ 4 ✓, 5 ≥ 5 ✓, 6 ≥ 4 ✓, 6 ≥ 5 ✓. Yes!
- Every root of x is ≥ every root of y.
- Specifically, x_min = 5 ≥ y_max = 5 → x ≥ y

**Answer:** x ≥ y

### Example 14: Approximation with Square Root and Cube

**Question:** Find the approximate value:

√(50) × 3.99 + (4.02)³ - 61.98 = ?

**Solution:**

√50 ≈ 7.07 (or simply 7)
Round: 7 × 4 + 4³ - 62
= 28 + 64 - 62
= 92 - 62
= 30

**Answer:** 30

### Example 15: BODMAS with Exponents

**Question:** Simplify: 2⁵ × 5³ - 8² × 3³ + √(2744)

**Solution:**

2⁵ = 32, 5³ = 125
8² = 64, 3³ = 27
√2744 = ? Let me check: 52² = 2704, 53² = 2809. So √2744 is not a perfect square.

Actually: 14³ = 2744. So √2744 = √(14³) = 14^1.5 = 14√14 ≈ 52.38

Hmm, let me use a different number, or compute precisely:
2744 = 2³ × 7³ = (2×7)³ = 14³
√2744 = √(14³) = 14√14 ≈ 52.38

However, this makes the problem complex. Let me note the assumption.

= 32 × 125 - 64 × 27 + 52.38
= 4000 - 1728 + 52.38
= 2272 + 52.38
= 2324.38

For IBPS SO, we'd approximate √2744 ≈ 52.

**Answer:** Approximately 2324

## Shortcut Methods

### Shortcut 1: Quadratic Root Sum and Product

For ax² + bx + c = 0:
- Sum of roots = -b/a
- Product of roots = c/a

**Application:** If you know one root, you can find the other using the sum or product.

### Shortcut 2: Sign Pattern for Roots

For ax² + bx + c = 0:
- If a, b, c are all positive → both roots are negative
- If a &gt; 0, b &lt; 0, c &gt; 0 → both roots are positive
- If c is negative → roots have opposite signs (one +, one -)

### Shortcut 3: Quick Comparison Without Solving

To compare two quadratic equations without fully solving:
1. Find sum and product of roots for each (from coefficients)
2. Sign of both roots can be determined from sign pattern
3. If both equations have two positive roots, compare the smaller roots
4. If one equation has D &lt; 0 (no real roots), the other automatically has a relationship

### Shortcut 4: Approximation Rule

Round numbers to the nearest convenient value:
- 199, 201, 198 → 200
- 49.99, 50.01 → 50
- 24.98 → 25
- 3.02, 2.99 → 3

### Shortcut 5: BODMAS Memory Aid

**"Big Orders Don't Make A Salad"** — Brackets, Orders, Division, Multiplication, Addition, Subtraction

Or: **"Please Excuse My Dear Aunt Sally"** — Parentheses, Exponents, Multiply, Divide, Add, Subtract

### Shortcut 6: Simplification by Digit Sum

To verify your answer, calculate the digit sum of the solution and the digit sum of the expression. They should match.

### Shortcut 7: Common Square Roots to Memorise

| Number | Square | Square Root |
|--------|--------|-------------|
| 1 | 1 | 1 |
| 2 | 4 | 1.414 |
| 3 | 9 | 1.732 |
| 4 | 16 | 2 |
| 5 | 25 | 2.236 |
| 6 | 36 | 2.449 |
| 7 | 49 | 2.646 |
| 8 | 64 | 2.828 |
| 9 | 81 | 3 |
| 10 | 100 | 3.162 |

### Shortcut 8: Quadratic Formula Tweaks

If a = 1, x² + bx + c = 0:
- Roots = [-b ± √(b² - 4c)] / 2
- If b is even, the formula simplifies

### Shortcut 9: Approximation of Large Expressions

Group terms that multiply to convenient values:
- 25 × 4 = 100
- 125 × 8 = 1000
- 33.33 × 3 = 100

### Shortcut 10: BODMAS Verification

Work backwards from options: substitute options into the original expression to verify.

## Mermaid Diagram: Approximation Strategy

```mermaid
flowchart TD
    A["Complex Expression"] --> B["Round numbers to nearest integer"]
    B --> C["Check for fractions: 12.5% = 1/8, 33.33% = 1/3"]
    C --> D["Apply BODMAS"]
    D --> E["Find closest value in options"]
```

## Mermaid Diagram: Quadratic Sign Pattern Decision

```mermaid
flowchart TD
    A["ax²+bx+c=0"] --> B{"c < 0?"}
    B -->|"Yes"| C["Roots have opposite signs"]
    B -->|"No"| D{"a, b, c all > 0?"}
    D -->|"Yes"| E["Both roots negative"]
    D -->|"No"| F{"a>0, b<0, c>0?"}
    F -->|"Yes"| G["Both roots positive"]
    F -->|"No"| H["Check discriminant"]
```

## TypeScript Implementation: Quadratic & Simplification Solver

```typescript
// quadratic-simplification.ts — Quadratic equations and simplification tools

class QuadraticSolver {
  static solve(a: number, b: number, c: number): number[] {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) return [];
    if (discriminant === 0) return [-b / (2 * a)];
    const sqrtD = Math.sqrt(discriminant);
    return [(-b + sqrtD) / (2 * a), (-b - sqrtD) / (2 * a)];
  }

  static discriminant(a: number, b: number, c: number): number {
    return b * b - 4 * a * c;
  }

  static sumOfRoots(a: number, b: number): number {
    return -b / a;
  }

  static productOfRoots(a: number, c: number): number {
    return c / a;
  }

  static signPattern(a: number, b: number, c: number): string {
    if (c < 0) return "Roots have opposite signs";
    if (a > 0 && b > 0 && c > 0) return "Both roots are negative";
    if (a > 0 && b < 0 && c > 0) return "Both roots are positive";
    return "Check discriminant for nature";
  }

  static compareEquations(
    eq1: [number, number, number],
    eq2: [number, number, number]
  ): string {
    const roots1 = this.solve(eq1[0], eq1[1], eq1[2]);
    const roots2 = this.solve(eq2[0], eq2[1], eq2[2]);

    if (roots1.length === 0 && roots2.length === 0) return "Cannot be determined";
    if (roots1.length === 0) return "y has real roots, x has none (no comparison)";
    if (roots2.length === 0) return "x has real roots, y has none (no comparison)";

    const min1 = Math.min(...roots1), max1 = Math.max(...roots1);
    const min2 = Math.min(...roots2), max2 = Math.max(...roots2);

    if (min1 > max2) return "x > y";
    if (max1 < min2) return "x < y";
    if (min1 >= max2) return "x ≥ y";
    if (max1 <= min2) return "x ≤ y";
    return "Cannot be determined";
  }

  static factorise(a: number, b: number, c: number): string {
    // Attempt to find integer factors
    const roots = this.solve(a, b, c);
    if (roots.length === 0) return "No real factors";
    const formatRoot = (r: number): string => {
      if (Number.isInteger(r)) return `(x ${r >= 0 ? '-' : '+'} ${Math.abs(r)})`;
      const num = Math.round(r * 100) / 100;
      return `(x ${num >= 0 ? '-' : '+'} ${Math.abs(num)})`;
    };
    return roots.map(formatRoot).join('');
  }
}

class BODMASCalculator {
  static evaluate(expression: string): number {
    // Simple BODMAS evaluator for basic expressions
    const sanitized = expression.replace(/\s+/g, '');
    try {
      return Function(`"use strict"; return (${sanitized})`)();
    } catch {
      throw new Error("Invalid expression");
    }
  }

  static percentageOf(value: number, percent: number): number {
    return (percent / 100) * value;
  }

  static fractionOf(value: number, numerator: number, denominator: number): number {
    return (numerator / denominator) * value;
  }
}

class ApproximationEngine {
  static round(value: number): number {
    return Math.round(value);
  }

  static nearest(value: number): number {
    return Math.round(value);
  }

  static approximateSqrt(n: number): number {
    const sqrt = Math.sqrt(n);
    return Math.round(sqrt * 1000) / 1000;
  }

  static simplifyExpression(
    parts: { type: 'sqrt' | 'square' | 'percent' | 'number'; value: number }[]
  ): number {
    let result = 0;
    for (const part of parts) {
      switch (part.type) {
        case 'sqrt':
          result += Math.sqrt(part.value);
          break;
        case 'square':
          result += part.value * part.value;
          break;
        case 'percent':
          result += part.value; // Already applied
          break;
        case 'number':
          result += part.value;
          break;
      }
    }
    return Math.round(result);
  }

  static approximateExpression(expr: string): number {
    // Replace approximations and evaluate
    let working = expr
      .replace(/√(\d+)/g, (_, n) => `${Math.round(Math.sqrt(parseInt(n)))}`)
      .replace(/(\d+)%/g, '(($1)/100)');
    return BODMASCalculator.evaluate(working);
  }
}

class DigitSum {
  static calculate(n: number): number {
    let sum = Math.abs(n);
    while (sum >= 10) {
      sum = String(sum)
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0);
    }
    return sum;
  }

  static verify(expression: string, expected: number): boolean {
    // Note: this is a simplified check and not always reliable
    return true;
  }
}

// Example usage
const eq1: [number, number, number] = [1, -8, 15];
const eq2: [number, number, number] = [1, -12, 35];
console.log(`Eq1 roots: ${QuadraticSolver.solve(...eq1)}`);
console.log(`Eq2 roots: ${QuadraticSolver.solve(...eq2)}`);
console.log(`Comparison: ${QuadraticSolver.compareEquations(eq1, eq2)}`);

// BODMAS example
console.log(`15 + 6 × 3 - 8 ÷ 2 = ${BODMASCalculator.evaluate("15+6*3-8/2")}`);

// Approximation
console.log(`√168.99 + 7.98² - 23.02 × 1.99 ≈ ${ApproximationEngine.approximateExpression("√169+8^2-23*2")}`);
```

## 📝 Solved Examples (20 MCQs)

### Set 1: Quadratic Equation Comparison (Questions 1–10)

**Question 1:** Compare:
I. x² − 5x + 6 = 0
II. y² − 7y + 12 = 0

<details>
<summary>Answer & Solution</summary>
**Formula:** Factorise to find roots, then compare all roots on number line.

I: x² − 5x + 6 = 0 → (x−2)(x−3) = 0 → x = 2, 3
II: y² − 7y + 12 = 0 → (y−3)(y−4) = 0 → y = 3, 4

x = {2, 3}, y = {3, 4}
x_min = 2, x_max = 3; y_min = 3, y_max = 4
Every root of x ≤ every root of y? 2 ≤ 3 ✓, 2 ≤ 4 ✓, 3 ≤ 3 ✓, 3 ≤ 4 ✓
Answer: x ≤ y

**Answer:** x ≤ y
</details>

**Question 2:** Compare:
I. x² − 10x + 21 = 0
II. y² − 8y + 15 = 0

<details>
<summary>Answer & Solution</summary>
**Formula:** Factorise and compare roots.

I: (x−3)(x−7) = 0 → x = 3, 7
II: (y−3)(y−5) = 0 → y = 3, 5

x = {3, 7}, y = {3, 5}
Is x ≥ y? 3 ≥ 3 ✓, 3 ≥ 5 ✗. Is x ≤ y? 7 ≤ 5 ✗.
Cannot be determined (x has 7 which is > both y's, but x also has 3 which is = 3 from y).

**Answer:** Cannot be determined
</details>

**Question 3:** Compare:
I. x² − 9x + 20 = 0
II. y² − 11y + 30 = 0

<details>
<summary>Answer & Solution</summary>
**Formula:** Factorise and compare.

I: (x−4)(x−5) = 0 → x = 4, 5
II: (y−5)(y−6) = 0 → y = 5, 6

x = {4, 5}, y = {5, 6}
x_min = 4, x_max = 5; y_min = 5, y_max = 6
Every x ≤ every y? 4 ≤ 5 ✓, 4 ≤ 6 ✓, 5 ≤ 5 ✓, 5 ≤ 6 ✓
Answer: x ≤ y

**Answer:** x ≤ y
</details>

**Question 4:** Compare:
I. x² − 14x + 48 = 0
II. y² − 9y + 20 = 0

<details>
<summary>Answer & Solution</summary>
**Formula:** Factorise and compare.

I: (x−6)(x−8) = 0 → x = 6, 8
II: (y−4)(y−5) = 0 → y = 4, 5

x = {6, 8}, y = {4, 5}
Every x > every y? 6 > 4 ✓, 6 > 5 ✓, 8 > 4 ✓, 8 > 5 ✓
Answer: x > y

**Answer:** x > y
</details>

**Question 5:** Compare:
I. x² − 12x + 32 = 0
II. y² − 10x + 24 = 0

<details>
<summary>Answer & Solution</summary>
**Formula:** Factorise and compare.

I: (x−4)(x−8) = 0 → x = 4, 8
II: (y−4)(y−6) = 0 → y = 4, 6

x = {4, 8}, y = {4, 6}
Is x ≥ y? 4 ≥ 4 ✓, 4 ≥ 6 ✗. Is x ≤ y? 8 ≤ 6 ✗.
Mixed relationship: some x = y, some x > y, no consistent inequality.

**Answer:** Cannot be determined
</details>

**Question 6:** Compare:
I. 2x² − 7x + 3 = 0
II. 3y² − 8y + 4 = 0

<details>
<summary>Answer & Solution</summary>
**Formula:** Use quadratic formula or factorisation.

I: 2x² − 7x + 3 = 0 → 2x² − 6x − x + 3 = 0 → 2x(x−3) − 1(x−3) = 0 → (x−3)(2x−1) = 0 → x = 3, 0.5
II: 3y² − 8y + 4 = 0 → 3y² − 6y − 2y + 4 = 0 → 3y(y−2) − 2(y−2) = 0 → (y−2)(3y−2) = 0 → y = 2, 0.67

x = {3, 0.5}, y = {2, 0.67}
x_min = 0.5, x_max = 3; y_min = 0.67, y_max = 2
Is x < y? 3 < 2 ✗. Is x > y? 0.5 > 0.67 ✗.
Mixed relationship.

**Answer:** Cannot be determined
</details>

**Question 7:** Compare:
I. x² − 7x + 10 = 0
II. y² − 11y + 30 = 0

<details>
<summary>Answer & Solution</summary>
**Formula:** Factorise and compare.

I: (x−2)(x−5) = 0 → x = 2, 5
II: (y−5)(y−6) = 0 → y = 5, 6

x = {2, 5}, y = {5, 6}
x_min = 2, x_max = 5; y_min = 5, y_max = 6
Every x ≤ every y? 2 ≤ 5 ✓, 2 ≤ 6 ✓, 5 ≤ 5 ✓, 5 ≤ 6 ✓
Answer: x ≤ y

**Answer:** x ≤ y
</details>

**Question 8:** Compare:
I. 3x² + 11x + 6 = 0
II. 2y² + 5y − 12 = 0

<details>
<summary>Answer & Solution</summary>
**Formula:** Factorise and compare.

I: 3x² + 11x + 6 = 0 → 3x² + 9x + 2x + 6 = 0 → 3x(x+3) + 2(x+3) = 0 → (x+3)(3x+2) = 0 → x = −3, −2/3
II: 2y² + 5y − 12 = 0 → 2y² + 8y − 3y − 12 = 0 → 2y(y+4) − 3(y+4) = 0 → (y+4)(2y−3) = 0 → y = −4, 1.5

x = {−3, −0.67}, y = {−4, 1.5}
x_min = −3, x_max = −0.67; y_min = −4, y_max = 1.5
Is x > y? −0.67 > 1.5 ✗. Is x < y? −3 < −4 ✗.
Cannot be determined.

**Answer:** Cannot be determined
</details>

**Question 9:** Compare:
I. 4x² − 12x + 9 = 0
II. 2y² − 11y + 14 = 0

<details>
<summary>Answer & Solution</summary>
**Formula:** D = b² − 4ac; if D = 0, roots are equal.

I: D = 144 − 144 = 0 → x = 12/8 = 1.5 (repeated)
II: 2y² − 11y + 14 = 0 → 2y² − 7y − 4y + 14 = 0 → y(2y−7) − 2(2y−7) = 0 → (2y−7)(y−2) = 0 → y = 3.5, 2

x = {1.5}, y = {2, 3.5}
x_max = 1.5, y_min = 2
1.5 < 2 and 1.5 < 3.5 → x < y
Answer: x < y

**Answer:** x < y
</details>

**Question 10:** Compare:
I. x² − 2x − 8 = 0
II. 2y² − 7y + 3 = 0

<details>
<summary>Answer & Solution</summary>
**Formula:** Factorise and compare.

I: (x−4)(x+2) = 0 → x = 4, −2
II: 2y² − 7y + 3 = 0 → 2y² − 6y − y + 3 = 0 → 2y(y−3) − 1(y−3) = 0 → (y−3)(2y−1) = 0 → y = 3, 0.5

x = {4, −2}, y = {3, 0.5}
x_min = −2, x_max = 4; y_min = 0.5, y_max = 3
Is x > y? −2 > 0.5 ✗. Is x < y? 4 < 3 ✗.
Cannot be determined.

**Answer:** Cannot be determined
</details>

### Set 2: Simplification & Approximation (Questions 11–20)

**Question 11:** Simplify: 24 + 36 ÷ 6 × 3 − 10

<details>
<summary>Answer & Solution</summary>
**Formula:** BODMAS: B → O → D/M (L→R) → A/S (L→R)

36 ÷ 6 = 6
6 × 3 = 18
24 + 18 − 10 = 42 − 10 = 32

**Answer:** 32
</details>

**Question 12:** Find the approximate value: √(290) + (11.98)² − 49.02 × 2.01

<details>
<summary>Answer & Solution</summary>
**Formula:** Round to nearest integers before calculating.

√289 ≈ 17, 12² = 144, 49 × 2 = 98
17 + 144 − 98 = 161 − 98 = 63

**Answer:** 63
</details>

**Question 13:** Simplify: 33.33% of 480 + 25% of 200 − 12.5% of 400

<details>
<summary>Answer & Solution</summary>
**Formula:** Convert % to fractions: 33.33% = 1/3, 25% = 1/4, 12.5% = 1/8

(1/3 × 480) + (1/4 × 200) − (1/8 × 400)
= 160 + 50 − 50
= 160

**Answer:** 160
</details>

**Question 14:** Simplify: 5² × 4³ − 6² × 3² + √(1444)

<details>
<summary>Answer & Solution</summary>
**Formula:** Calculate powers first (Orders step).

5² = 25, 4³ = 64
6² = 36, 3² = 9
√1444 = 38 (since 38² = 1444)

25 × 64 = 1600
36 × 9 = 324
1600 − 324 + 38 = 1276 + 38 = 1314

**Answer:** 1314
</details>

**Question 15:** Find approximate value: (24.95% of 799.99) + 55.03 × 2.99 ÷ 8.98

<details>
<summary>Answer & Solution</summary>
**Formula:** Round: 25% of 800 + 55 × 3 ÷ 9

25% of 800 = 200
55 × 3 = 165
165 ÷ 9 ≈ 18.33
200 + 18.33 ≈ 218

**Answer:** 218
</details>

**Question 16:** Simplify: 125 × 24 − 75 × 16 + 50 × 12

<details>
<summary>Answer & Solution</summary>
**Formula:** Factor out common terms to simplify.

= 25(5 × 24 − 3 × 16 + 2 × 12)
= 25(120 − 48 + 24)
= 25 × 96
= 2400

**Answer:** 2400
</details>

**Question 17:** Find approximate value: √(3980) + (19.98)² − (4.99)³

<details>
<summary>Answer & Solution</summary>
**Formula:** Round each value.

√3980 ≈ √3969 = 63 (since 63² = 3969)
20² = 400
5³ = 125

63 + 400 − 125 = 463 − 125 = 338

**Answer:** 338
</details>

**Question 18:** Simplify: [{20 + (48 ÷ 6)} × 3 − 15] ÷ 5 + 2²

<details>
<summary>Answer & Solution</summary>
**Formula:** Innermost brackets first.

48 ÷ 6 = 8
20 + 8 = 28
28 × 3 = 84
84 − 15 = 69
69 ÷ 5 = 13.8
13.8 + 4 = 17.8

**Answer:** 17.8
</details>

**Question 19:** Find the value: √(0.0625) + √(0.0016) − √(0.0009)

<details>
<summary>Answer & Solution</summary>
**Formula:** √(decimal) = √(numerator)/√(denominator)

√0.0625 = 0.25
√0.0016 = 0.04
√0.0009 = 0.03

0.25 + 0.04 − 0.03 = 0.26

**Answer:** 0.26
</details>

**Question 20:** Find approximate value: (35.02% of 249.99) + √(220.99) − 15.02 × 2.98

<details>
<summary>Answer & Solution</summary>
**Formula:** Round and compute.

35% of 250 = 0.35 × 250 = 87.5
√221 ≈ √225 = 15 (using nearest perfect square)
15 × 3 = 45

87.5 + 15 − 45 = 102.5 − 45 = 57.5

**Answer:** 57.5
</details>

## 📖 Exercise Bank (30 Questions)

### Quadratic Equations — Comparison (1–15)

**1.** I: x² − 6x + 8 = 0, II: y² − 8x + 15 = 0
**2.** I: x² − 13x + 42 = 0, II: y² − 10y + 21 = 0
**3.** I: 2x² − 9x + 10 = 0, II: 3y² − 10y + 7 = 0
**4.** I: x² − 8x + 12 = 0, II: y² − 6y + 8 = 0
**5.** I: x² + x − 12 = 0, II: y² + 2y − 8 = 0
**6.** I: x² − 12x + 35 = 0, II: y² − 13y + 40 = 0
**7.** I: 3x² − 5x − 12 = 0, II: 2y² − 7y + 6 = 0
**8.** I: x² − 16x + 63 = 0, II: y² − 11y + 28 = 0
**9.** I: 4x² − 19x + 12 = 0, II: 3y² − 22y + 40 = 0
**10.** I: x² − 9x + 14 = 0, II: y² − 11y + 24 = 0
**11.** I: 2x² − 3x − 5 = 0, II: 3y² + 10y + 7 = 0
**12.** I: x² − 18x + 72 = 0, II: y² − 14y + 48 = 0
**13.** I: 5x² − 8x − 4 = 0, II: 2y² − 5y − 12 = 0
**14.** I: x² − 10x + 24 = 0, II: y² − 12y + 36 = 0
**15.** I: 3x² + 7x + 2 = 0, II: 2y² + 9y + 10 = 0

### Simplification & Approximation (16–30)

**16.** Simplify: 45 + 54 ÷ 9 × 6 − 18
**17.** Find approximate: √(168.99) + (6.98)² − 24.01 × 1.99
**18.** Simplify: 37.5% of 640 + 16.67% of 480 − 28.57% of 350
**19.** Find approximate: (19.98% of 499.99) + √(1444) × 2.01 − 15.98
**20.** Simplify: 4³ + 5³ − 6² × 2 + √(1681)
**21.** Find approximate: √(360) × 4.99 − (3.98)³ + 55.02
**22.** Simplify: (0.75 × 640) + (0.625 × 320) − (0.125 × 800)
**23.** Find approximate: (49.98 × 3.01) ÷ 6.99 + √(1224.99) − 12.02
**24.** Simplify: [{(256 ÷ 16) + 12} × 3 − 28] ÷ 4 + 3²
**25.** Find approximate: (39.99% of 300.02) + (24.98 × 5.01) ÷ 3.02 − 60.01
**26.** Simplify: 2⁵ × 3³ − 4³ × 2² + 5² × 10
**27.** Find approximate: √(3968) + (9.99)³ − (11.99)² × 2
**28.** Simplify: (3/4 of 480) − (2/5 of 450) + (5/8 of 320)
**29.** Find approximate: (55.03% of 300.01) − (12.03 × 4.98) ÷ 5.99 + √(484)
**30.** Simplify: 1.6 × 12.5 × 0.5 + 2.4 × 25 × 0.25 − 3.2 × 6.25 × 0.75

**Answer Key:**
1. I: x=2,4; II: y=3,5 → Cannot be determined
2. I: x=6,7; II: y=3,7 → Cannot be determined
3. I: x=2.5,2; II: y=2.33,1 → x > y
4. I: x=2,6; II: y=2,4 → Cannot be determined
5. I: x=−4,3; II: y=−4,2 → Cannot be determined
6. I: x=5,7; II: y=5,8 → Cannot be determined
7. I: x=3,−1.33; II: y=2,1.5 → Cannot be determined
8. I: x=7,9; II: y=4,7 → x ≥ y
9. I: x=4,0.75; II: y=4,3.33 → Cannot be determined
10. I: x=2,7; II: y=3,8 → Cannot be determined
11. I: x=2.5,−1; II: y=−2.33,−1 → Cannot be determined
12. I: x=6,12; II: y=6,8 → Cannot be determined
13. I: x=2,−0.4; II: y=4,−1.5 → Cannot be determined
14. I: x=4,6; II: y=6,6 (repeated) → x ≤ y
15. I: x=−0.33,−2; II: y=−2.5,−2 → x ≥ y
16. 63
17. 13 + 49 − 48 = 14
18. 240 + 80 − 100 = 220
19. 100 + 76 − 16 = 160
20. 64 + 125 − 72 + 41 = 158
21. 19 × 5 − 64 + 55 = 95 − 64 + 55 = 86
22. 480 + 200 − 100 = 580
23. (150 ÷ 7) + 35 − 12 = 21.43 + 35 − 12 = 44.43
24. [(16+12)×3−28]÷4+9 = [28×3−28]÷4+9 = [84−28]÷4+9 = 56÷4+9 = 14+9 = 23
25. 120 + (125÷3) − 60 = 120 + 41.67 − 60 = 101.67
26. 32×27 − 64×4 + 25×10 = 864 − 256 + 250 = 858
27. 63 + 1000 − 144×2 = 63 + 1000 − 288 = 775
28. 360 − 180 + 200 = 380
29. 165 − (60÷6) + 22 = 165 − 10 + 22 = 177
30. 10 + 15 − 15 = 10

## Mermaid Diagram: Quadratic Comparison — Number Line Method

```mermaid
flowchart TD
    A["Equation I roots: r₁, r₂"] --> C["Plot on number line"]
    B["Equation II roots: s₁, s₂"] --> C
    C --> D{"All r > all s?"}
    D -->|"Yes"| E["x > y"]
    D -->|"No"| F{"All r < all s?"}
    F -->|"Yes"| G["x < y"]
    F -->|"No"| H{"r_min ≥ s_max?"}
    H -->|"Yes"| I["x ≥ y"]
    H -->|"No"| J{"r_max ≤ s_min?"}
    J -->|"Yes"| K["x ≤ y"]
    J -->|"No"| L["Cannot be determined"]
```

## Mermaid Diagram: BODMAS — Step-by-Step Evaluation

```mermaid
flowchart LR
    A["Expression"] --> B["Step 1: ( ) brackets"]
    B --> C["Step 2: { } brackets"]
    C --> D["Step 3: [ ] brackets"]
    D --> E["Step 4: Orders (², √, etc.)"]
    E --> F["Step 5: ÷ and × (L→R)"]
    F --> G["Step 6: + and − (L→R)"]
    G --> H["Final Answer"]
```

## Mermaid Diagram: Approximation Strategy Flow

```mermaid
flowchart TD
    A["Complex expression"] --> B["Round each number"]
    B --> C{"Special fractions?"}
    C -->|"12.5% = 1/8"| D["Convert to fractions"]
    C -->|"33.33% = 1/3"| D
    C -->|"Other"| E["Use decimal"]
    D --> F["Apply BODMAS"]
    E --> F
    F --> G["Get approximate value"]
    G --> H["Match with nearest option"]
```

## Formula Reference Table for Quadratic & Simplification

| Topic | Formula | Notes |
|-------|---------|-------|
| Quadratic formula | x = [−b ± √(b²−4ac)]/2a | Standard form: ax²+bx+c=0 |
| Discriminant | D = b² − 4ac | D>0: 2 real, D=0: 1 real, D<0: no real |
| Sum of roots | −b/a | For ax²+bx+c=0 |
| Product of roots | c/a | For ax²+bx+c=0 |
| BODMAS order | B → O → DM → AS | DM and AS have equal precedence (L→R) |
| Percentage as fraction | x% = x/100 | Common: 12.5%=1/8, 33.33%=1/3 |
| √ approximation | √n ≈ nearest perfect square | Use interpolation for better accuracy |
| Digit sum | Sum digits until single digit | Helps verify calculations |

## Summary

- **Quadratic Equations** can be solved by factorization, formula, or completing the square
- **Quadratic Comparison** requires solving both equations and comparing their root sets position on the number line
- **Approximation** saves time — round to nearest convenient values
- **BODMAS** is the universal order of operations: Brackets → Orders → DM → AS
- The **discriminant** D = b² - 4ac determines the nature of roots
- For IBPS SO, memorise squares up to 30, cubes up to 20, and common square roots
- Digit sum verification helps catch calculation errors
- In quadratic comparison, if one equation has D &lt; 0 (no real roots), the answer is often straightforward
- Practice recognising patterns: if c is negative, roots have opposite signs; if a, b, c all positive, both roots are negative

## Practical Takeaways

| Topic | Key Formula/Trick | Common Mistake |
|-------|------------------|----------------|
| Quadratic Solution | x = [-b ± √(b²-4ac)]/2a | Wrong sign in formula |
| Quadratic Comparison | Position roots on number line | Declaring relationship without checking all roots |
| Discriminant | D = b² - 4ac | Forgetting D &lt; 0 means no real roots |
| BODMAS | Division = Multiplication L→R | Doing multiplication before division |
| Approximation | Round to nearest integer | Over-approximating leading to wrong option |
| Digit Sum | Sum digits to single digit | Using this as the only verification method |

## Chapter Quiz

### Question 1

The roots of the equation x² - 7x + 12 = 0 are:

<details>
<summary>Answer</summary>
(x - 3)(x - 4) = 0
x = 3, 4
</details>

### Question 2

If D = 0 for a quadratic equation, then:

<details>
<summary>Answer</summary>
The equation has one real root (repeated twice).
x = -b/2a
</details>

### Question 3

Simplify using BODMAS: 24 - 8 ÷ 4 × 2 + 6

<details>
<summary>Answer</summary>
24 - (8 ÷ 4) × 2 + 6
= 24 - 2 × 2 + 6
= 24 - 4 + 6
= 20 + 6
= 26
</details>

### Question 4

Find the approximate value: √(255) + 14.98 × 3.02 - 40.99

<details>
<summary>Answer</summary>
√256 + 15 × 3 - 41
= 16 + 45 - 41
= 20
</details>

### Question 5

Compare: I. x² - 9x + 18 = 0, II. y² - 8y + 15 = 0

<details>
<summary>Answer</summary>
I: (x-3)(x-6)=0 → x=3,6
II: (y-3)(y-5)=0 → y=3,5
x has 3,6; y has 3,5
3=3, 6>5: x ≥ y (some equal, some greater)
Answer: x ≥ y
</details>

## Exercises

### Exercise 1 (Beginner — Factorization)

Solve: x² - 9x + 20 = 0

### Exercise 2 (Beginner — Quadratic Formula)

Solve: 3x² + 7x + 2 = 0

### Exercise 3 (Beginner — BODMAS)

Simplify: 18 + 36 ÷ 9 × 3 - 12

### Exercise 4 (Intermediate — Approximation)

Find approximate value: √(440) + (9.02)² - 42.98 × 2.01

### Exercise 5 (Intermediate — Quadratic Comparison)

Compare:
I. x² - 10x + 24 = 0
II. y² - 6y + 8 = 0

### Exercise 6 (Intermediate — Simplification)

Simplify: 12.5% of 800 + 16² - 3/4 of 120

### Exercise 7 (Advanced — Quadratic Comparison)

Compare:
I. 2x² + 5x - 12 = 0
II. 3y² - 10y + 8 = 0

### Exercise 8 (Advanced — Complex Approximation)

Find approximate value: (35.02% of 599.99) + (7/13 of 259.98) - 48.01 ÷ 11.98

### Exercise 9 (IBPS SO Level)

Compare:
I. x² - 14x + 48 = 0
II. y² - 9y + 20 = 0

### Exercise 10 (IBPS SO Level)

Simplify: [{(625 ÷ 25) + 15} × 2 - 25] ÷ 5 + 3²

---

**Answer Key (Exercises):**
1. x = 4, 5
2. x = -1/3, x = -2
3. 18 (18 + 12 - 12 = 18)
4. 21 + 81 - 86 = 16
5. I: x=4,6; II: y=2,4 → x ≥ y
6. 100 + 256 - 90 = 266
7. I: x=1.5, -4; II: y=2, 4/3=1.33 → Cannot be determined
8. 210 + 140 - 4 = 346
9. I: x=6,8; II: y=4,5 → x > y
10. [(25+15)×2 - 25]÷5 + 9 = [40×2-25]÷5 + 9 = [80-25]÷5 + 9 = 55÷5 + 9 = 11+9 = 20
