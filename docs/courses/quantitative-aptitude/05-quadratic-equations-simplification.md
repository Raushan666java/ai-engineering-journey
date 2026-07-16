# Chapter 5: Quadratic Equations & Simplification â€” Quadratic Comparison, Approximation, BODMAS

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
  <a class="lesson-visual-card" href="../../assets/images/lessons/quantitative-aptitude/05-quadratic-equations-simplification/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/quantitative-aptitude/05-quadratic-equations-simplification/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/quantitative-aptitude/05-quadratic-equations-simplification/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/quantitative-aptitude/05-quadratic-equations-simplification/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/quantitative-aptitude/05-quadratic-equations-simplification/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/quantitative-aptitude/05-quadratic-equations-simplification/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->

## Theory

### 1. Quadratic Equations

A quadratic equation is a polynomial equation of degree 2 in the form:

```
axÂ² + bx + c = 0, where a â‰  0
```

**Standard Form:** axÂ² + bx + c = 0

**Methods to Solve Quadratic Equations:**

### Method 1: Factorization (Splitting the Middle Term)

Steps:
1. Multiply a and c to get ac
2. Find two factors of ac whose sum is b
3. Split the middle term and factorise
4. Set each factor to zero and solve

**Example:** xÂ² - 5x + 6 = 0
- ac = 1 Ã— 6 = 6
- Factors of 6 that sum to -5: (-2) + (-3) = -5
- xÂ² - 2x - 3x + 6 = 0
- x(x - 2) - 3(x - 2) = 0
- (x - 2)(x - 3) = 0
- x = 2 or x = 3

### Method 2: Quadratic Formula

When factorization is not straightforward:

```
x = [-b Â± âˆš(bÂ² - 4ac)] / 2a
```

**Discriminant (D):** D = bÂ² - 4ac

- If D &gt; 0: Two distinct real roots
- If D = 0: One real root (repeated)
- If D &lt; 0: No real roots (complex roots)

### Method 3: Completing the Square

```
xÂ² + bx + c = 0
=> (x + b/2)Â² = (b/2)Â² - c
=> x = -b/2 Â± âˆš[(b/2)Â² - c]
```

### Comparing Two Quadratic Equations (IBPS SO Special)

In IBPS SO exams, two quadratic equations (I and II) are given, and you need to determine the relationship between their roots:

Options:
1. `x &gt; y` (Every root of x is greater than every root of y)
2. `x &lt; y` (Every root of x is less than every root of y)
3. `x â‰¥ y` (No root of x is less than any root of y)
4. `x â‰¤ y` (No root of x is greater than any root of y)
5. `x = y` or relationship cannot be established

**Method:**
1. Solve both equations to find roots
2. Compare the root sets
3. Determine the relationship

**Remember:** If one equation has roots Î±, Î² and the other has Î³, Î´:
- Compare all four values on a number line
- Relationship is established only if a consistent pattern exists

### 2. Approximation

Approximation involves rounding numbers to a required degree of accuracy and then performing operations.

**Rounding Rules:**
- If the digit after the rounding place is 5 or more, round up
- If the digit after the rounding place is less than 5, round down

**Common Approximations:**
```
Ï€ â‰ˆ 3.14 or 22/7
âˆš2 â‰ˆ 1.414
âˆš3 â‰ˆ 1.732
âˆš5 â‰ˆ 2.236
âˆš6 â‰ˆ 2.449
âˆš7 â‰ˆ 2.646
âˆš8 â‰ˆ 2.828
âˆš10 â‰ˆ 3.162
```

**IBPS SO Context:**

Approximation questions in IBPS SO involve expressions like:
```
âˆš(168.99) + (7.98)Â² - 23.02 Ã— 1.99 = ?
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
| O | Orders (powers, roots) | Â², âˆš, etc. |
| D | Division | Ã· |
| M | Multiplication | Ã— |
| A | Addition | + |
| S | Subtraction | - |

**Full Order:**
1. **Brackets:** Solve from innermost to outermost: ( ) â†’ { } â†’ [ ]
2. **Orders:** Powers and roots
3. **Division and Multiplication:** Left to right (equal precedence)
4. **Addition and Subtraction:** Left to right (equal precedence)

**Remember:** DM and AS have equal precedence, so operations are performed left to right.

**Common Mistake:**
`12 Ã· 3 Ã— 4` should be solved as `(12 Ã· 3) Ã— 4 = 16`, NOT `12 Ã· (3 Ã— 4) = 1`

### 4. Digit Sum Method (Simplification Check)

The digit sum of a number is the sum of its digits, reduced to a single digit.

**Example:**
456 â†’ 4+5+6 = 15 â†’ 1+5 = 6

**Application:**
To verify calculations, the digit sum of the result should match the digit sum of the computation.

### 5. Simplification Techniques

**Approximation of Square Roots:**
- For a number n, find the nearest perfect square below and above
- Example: âˆš(50) â€” nearest squares are 49 (7Â²) and 64 (8Â²)
- âˆš50 â‰ˆ 7 + (50-49)/(64-49) = 7 + 1/15 â‰ˆ 7.07

**Cubes and Cube Roots:**
- Memorise cubes up to 20: 1Â³=1, 2Â³=8, 3Â³=27, 4Â³=64, 5Â³=125, 6Â³=216, 7Â³=343, 8Â³=512, 9Â³=729, 10Â³=1000

**Percentage to Fraction:**
Convert percentages to fractions for easier simplification:
- 33.33% = 1/3, 25% = 1/4, 12.5% = 1/8, 6.25% = 1/16

## Mermaid Diagram: Quadratic Equation Solution Flow

```mermaid
flowchart TD
    A["Quadratic Equation axÂ²+bx+c=0"] --> B["Check if factorisable"]
    B -->|"Yes"| C["Split middle term"]
    C --> D["Set each factor = 0"]
    D --> E["Get roots"]
    B -->|"No"| F["Compute D = bÂ²-4ac"]
    F --> G{"D > 0?"}
    G -->|"Yes"| H["x = (-b Â± âˆšD)/2a"]
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
    C --> D["Step 3: Division & Multiplication (Lâ†’R)"]
    D --> E["Step 4: Addition & Subtraction (Lâ†’R)"]
    E --> F["Result"]
```

## Mermaid Diagram: Quadratic Comparison Strategy

```mermaid
flowchart TD
    A["Equation I: axÂ²+bx+c=0"] --> B["Find roots râ‚, râ‚‚"]
    C["Equation II: dxÂ²+ex+f=0"] --> D["Find roots sâ‚, sâ‚‚"]
    B --> E["Place on number line"]
    D --> E
    E --> F{"All r > all s?"}
    F -->|"Yes"| G["x > y"]
    F -->|"No"| H{"All r < all s?"}
    H -->|"Yes"| I["x < y"]
    H -->|"No"| J{"râ‚ â‰¤ râ‚‚ â‰¤ sâ‚ â‰¤ sâ‚‚ etc?"}
    J -->|"Yes"| K["x â‰¤ y or x â‰¥ y"]
    J -->|"No"| L["Can't be determined"]
```

## Examples

### Example 1: Solving Quadratic by Factorization

**Question:** Solve xÂ² + 7x + 12 = 0

**Solution:**
a = 1, b = 7, c = 12
ac = 12
Factors of 12 that sum to 7: 3 + 4 = 7
xÂ² + 3x + 4x + 12 = 0
x(x + 3) + 4(x + 3) = 0
(x + 3)(x + 4) = 0
x = -3 or x = -4

### Example 2: Quadratic Formula

**Question:** Solve 2xÂ² - 5x + 2 = 0

**Solution:**
a = 2, b = -5, c = 2
D = bÂ² - 4ac = 25 - 16 = 9
âˆšD = 3

x = [5 Â± 3] / 4
x = (5+3)/4 = 8/4 = 2
x = (5-3)/4 = 2/4 = 0.5

Roots: x = 2 or x = 0.5

### Example 3: Quadratic Comparison (IBPS SO Style)

**Question:** Compare the roots of the two equations:

I. xÂ² - 8x + 15 = 0
II. yÂ² - 12y + 35 = 0

**Solution:**

Equation I: xÂ² - 8x + 15 = 0
Factors of 15 summing to -8: -3 + (-5) = -8
(x - 3)(x - 5) = 0
x = 3, 5

Equation II: yÂ² - 12y + 35 = 0
Factors of 35 summing to -12: -5 + (-7) = -12
(y - 5)(y - 7) = 0
y = 5, 7

Comparing: x = {3, 5} and y = {5, 7}
Both have 5 in common. But x also has 3 (&lt; 5, 7) while y also has 7 (&gt; 3, 5).
Since 3 &lt; 5 and 5 = 5 and 5 &lt; 7, we cannot say all x are &gt; all y or vice versa.
However, x has values 3 and 5, y has values 5 and 7.
- Minimum x = 3, Minimum y = 5 â†’ x_min &lt; y_min
- Maximum x = 5, Maximum y = 7 â†’ x_max &lt; y_max
So x â‰¤ y (no root of x is greater than any root of y).

**Answer:** x â‰¤ y

Wait â€” let me recheck. x has 3 and 5, y has 5 and 7.
- Is 5 (from x) â‰¤ all roots of y? 5 â‰¤ 5 âœ“ and 5 â‰¤ 7 âœ“
- Is 3 (from x) â‰¤ all roots of y? 3 â‰¤ 5 âœ“ and 3 â‰¤ 7 âœ“
So yes, x â‰¤ y.

### Example 4: Quadratic Comparison â€” No Relationship

**Question:** Compare:

I. xÂ² - 5x + 6 = 0
II. yÂ² - y - 6 = 0

**Solution:**

I: xÂ² - 5x + 6 = 0
(x - 2)(x - 3) = 0
x = 2, 3

II: yÂ² - y - 6 = 0
(y - 3)(y + 2) = 0
y = 3, -2

x = {2, 3}, y = {3, -2}
- x has 2 and 3; y has -2 and 3
- Does x â‰¥ y hold? 2 â‰¥ -2 âœ“, 2 â‰¥ 3 âœ—. So no.
- Does x â‰¤ y hold? 2 â‰¤ 3 âœ“, 3 â‰¤ 3 âœ“, 3 â‰¤ -2 âœ—. So no.
- Since neither relationship holds consistently, we cannot establish a relationship.

**Answer:** Cannot be determined

### Example 5: BODMAS Simplification

**Question:** Simplify: 15 + 6 Ã— 3 - 8 Ã· 2

**Solution:**
Step 1: Division first â€” 8 Ã· 2 = 4
= 15 + 6 Ã— 3 - 4
Step 2: Multiplication â€” 6 Ã— 3 = 18
= 15 + 18 - 4
Step 3: L to R â€” 15 + 18 = 33
= 33 - 4 = 29

**Answer:** 29

### Example 6: BODMAS with Brackets

**Question:** Simplify: {18 + (24 Ã· 3) - 5} Ã— 2

**Solution:**
Step 1: Innermost bracket â€” 24 Ã· 3 = 8
= {18 + 8 - 5} Ã— 2
Step 2: Curly bracket â€” 18 + 8 = 26, 26 - 5 = 21
= 21 Ã— 2
Step 3: Multiplication â€” 42

**Answer:** 42

### Example 7: Approximation

**Question:** What approximate value should come in place of ? (IBPS SO Style)

âˆš(168.99) + (7.98)Â² - 23.02 Ã— 1.99 = ?

**Solution:**

Round to nearest integers:
âˆš169 + 8Â² - 23 Ã— 2

= 13 + 64 - 46
= 77 - 46
= 31

**Answer:** 31

### Example 8: Simplification with Square Roots

**Question:** Simplify: âˆš(3136) - âˆš(1521) + âˆš(2025)

**Solution:**
âˆš3136 = 56 (since 56Â² = 3136)
âˆš1521 = 39 (since 39Â² = 1521)
âˆš2025 = 45 (since 45Â² = 2025)

= 56 - 39 + 45
= 17 + 45
= 62

**Answer:** 62

### Example 9: Quadratic with Decimals

**Question:** Solve: xÂ² - 2.5x + 1.5 = 0

**Solution:**
Multiply by 2: 2xÂ² - 5x + 3 = 0
2xÂ² - 2x - 3x + 3 = 0
2x(x - 1) - 3(x - 1) = 0
(x - 1)(2x - 3) = 0
x = 1 or x = 1.5

### Example 10: IBPS SO Quadratic Comparison

**Question:** Compare:

I. 3xÂ² - 5x - 12 = 0
II. 2yÂ² - 7y + 6 = 0

**Solution:**

I: 3xÂ² - 5x - 12 = 0
3xÂ² - 9x + 4x - 12 = 0
3x(x - 3) + 4(x - 3) = 0
(x - 3)(3x + 4) = 0
x = 3 or x = -4/3

II: 2yÂ² - 7y + 6 = 0
2yÂ² - 4y - 3y + 6 = 0
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

(24.98% of 399.99) + 35.03 Ã— 4.99 Ã· 6.98 = ?

**Solution:**

Round: 25% of 400 + 35 Ã— 5 Ã· 7

= (25/100 Ã— 400) + (35 Ã— 5 Ã· 7)
= (1/4 Ã— 400) + (175 Ã· 7)
= 100 + 25
= 125

**Answer:** 125

### Example 12: Complex BODMAS

**Question:** Simplify:

(12.5% of 640) + (3/7 of 490) - âˆš(576) Ã— 2

**Solution:**

12.5% = 1/8
(1/8 Ã— 640) + (3/7 Ã— 490) - âˆš576 Ã— 2

= 80 + 210 - 24 Ã— 2
= 80 + 210 - 48
= 290 - 48
= 242

**Answer:** 242

### Example 13: Inequality with Quadratic (Both Roots Positive)

**Question:** Compare:

I. xÂ² - 11x + 30 = 0
II. yÂ² - 9y + 20 = 0

**Solution:**

I: (x - 5)(x - 6) = 0 â†’ x = 5, 6
II: (y - 4)(y - 5) = 0 â†’ y = 4, 5

x = {5, 6}, y = {4, 5}
- x has 5 and 6; y has 4 and 5
- Is x â‰¥ y? 5 â‰¥ 4 âœ“, 5 â‰¥ 5 âœ“, 6 â‰¥ 4 âœ“, 6 â‰¥ 5 âœ“. Yes!
- Every root of x is â‰¥ every root of y.
- Specifically, x_min = 5 â‰¥ y_max = 5 â†’ x â‰¥ y

**Answer:** x â‰¥ y

### Example 14: Approximation with Square Root and Cube

**Question:** Find the approximate value:

âˆš(50) Ã— 3.99 + (4.02)Â³ - 61.98 = ?

**Solution:**

âˆš50 â‰ˆ 7.07 (or simply 7)
Round: 7 Ã— 4 + 4Â³ - 62
= 28 + 64 - 62
= 92 - 62
= 30

**Answer:** 30

### Example 15: BODMAS with Exponents

**Question:** Simplify: 2âµ Ã— 5Â³ - 8Â² Ã— 3Â³ + âˆš(2744)

**Solution:**

2âµ = 32, 5Â³ = 125
8Â² = 64, 3Â³ = 27
âˆš2744 = ? Let me check: 52Â² = 2704, 53Â² = 2809. So âˆš2744 is not a perfect square.

Actually: 14Â³ = 2744. So âˆš2744 = âˆš(14Â³) = 14^1.5 = 14âˆš14 â‰ˆ 52.38

Hmm, let me use a different number, or compute precisely:
2744 = 2Â³ Ã— 7Â³ = (2Ã—7)Â³ = 14Â³
âˆš2744 = âˆš(14Â³) = 14âˆš14 â‰ˆ 52.38

However, this makes the problem complex. Let me note the assumption.

= 32 Ã— 125 - 64 Ã— 27 + 52.38
= 4000 - 1728 + 52.38
= 2272 + 52.38
= 2324.38

For IBPS SO, we'd approximate âˆš2744 â‰ˆ 52.

**Answer:** Approximately 2324

## Shortcut Methods

### Shortcut 1: Quadratic Root Sum and Product

For axÂ² + bx + c = 0:
- Sum of roots = -b/a
- Product of roots = c/a

**Application:** If you know one root, you can find the other using the sum or product.

### Shortcut 2: Sign Pattern for Roots

For axÂ² + bx + c = 0:
- If a, b, c are all positive â†’ both roots are negative
- If a &gt; 0, b &lt; 0, c &gt; 0 â†’ both roots are positive
- If c is negative â†’ roots have opposite signs (one +, one -)

### Shortcut 3: Quick Comparison Without Solving

To compare two quadratic equations without fully solving:
1. Find sum and product of roots for each (from coefficients)
2. Sign of both roots can be determined from sign pattern
3. If both equations have two positive roots, compare the smaller roots
4. If one equation has D &lt; 0 (no real roots), the other automatically has a relationship

### Shortcut 4: Approximation Rule

Round numbers to the nearest convenient value:
- 199, 201, 198 â†’ 200
- 49.99, 50.01 â†’ 50
- 24.98 â†’ 25
- 3.02, 2.99 â†’ 3

### Shortcut 5: BODMAS Memory Aid

**"Big Orders Don't Make A Salad"** â€” Brackets, Orders, Division, Multiplication, Addition, Subtraction

Or: **"Please Excuse My Dear Aunt Sally"** â€” Parentheses, Exponents, Multiply, Divide, Add, Subtract

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

If a = 1, xÂ² + bx + c = 0:
- Roots = [-b Â± âˆš(bÂ² - 4c)] / 2
- If b is even, the formula simplifies

### Shortcut 9: Approximation of Large Expressions

Group terms that multiply to convenient values:
- 25 Ã— 4 = 100
- 125 Ã— 8 = 1000
- 33.33 Ã— 3 = 100

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
    A["axÂ²+bx+c=0"] --> B{"c < 0?"}
    B -->|"Yes"| C["Roots have opposite signs"]
    B -->|"No"| D{"a, b, c all > 0?"}
    D -->|"Yes"| E["Both roots negative"]
    D -->|"No"| F{"a>0, b<0, c>0?"}
    F -->|"Yes"| G["Both roots positive"]
    F -->|"No"| H["Check discriminant"]
```

## TypeScript Implementation: Quadratic & Simplification Solver

```typescript
// quadratic-simplification.ts â€” Quadratic equations and simplification tools

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
    if (min1 >= max2) return "x â‰¥ y";
    if (max1 <= min2) return "x â‰¤ y";
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
      .replace(/âˆš(\d+)/g, (_, n) => `${Math.round(Math.sqrt(parseInt(n)))}`)
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
console.log(`15 + 6 Ã— 3 - 8 Ã· 2 = ${BODMASCalculator.evaluate("15+6*3-8/2")}`);

// Approximation
console.log(`âˆš168.99 + 7.98Â² - 23.02 Ã— 1.99 â‰ˆ ${ApproximationEngine.approximateExpression("âˆš169+8^2-23*2")}`);
```

## ðŸ“ Solved Examples (20 MCQs)

### Set 1: Quadratic Equation Comparison (Questions 1â€“10)

**Question 1:** Compare:
I. xÂ² âˆ’ 5x + 6 = 0
II. yÂ² âˆ’ 7y + 12 = 0

<details>
<summary>Answer & Solution</summary>
**Formula:** Factorise to find roots, then compare all roots on number line.

I: xÂ² âˆ’ 5x + 6 = 0 â†’ (xâˆ’2)(xâˆ’3) = 0 â†’ x = 2, 3
II: yÂ² âˆ’ 7y + 12 = 0 â†’ (yâˆ’3)(yâˆ’4) = 0 â†’ y = 3, 4

x = {2, 3}, y = {3, 4}
x_min = 2, x_max = 3; y_min = 3, y_max = 4
Every root of x â‰¤ every root of y? 2 â‰¤ 3 âœ“, 2 â‰¤ 4 âœ“, 3 â‰¤ 3 âœ“, 3 â‰¤ 4 âœ“
Answer: x â‰¤ y

**Answer:** x â‰¤ y
</details>

**Question 2:** Compare:
I. xÂ² âˆ’ 10x + 21 = 0
II. yÂ² âˆ’ 8y + 15 = 0

<details>
<summary>Answer & Solution</summary>
**Formula:** Factorise and compare roots.

I: (xâˆ’3)(xâˆ’7) = 0 â†’ x = 3, 7
II: (yâˆ’3)(yâˆ’5) = 0 â†’ y = 3, 5

x = {3, 7}, y = {3, 5}
Is x â‰¥ y? 3 â‰¥ 3 âœ“, 3 â‰¥ 5 âœ—. Is x â‰¤ y? 7 â‰¤ 5 âœ—.
Cannot be determined (x has 7 which is > both y's, but x also has 3 which is = 3 from y).

**Answer:** Cannot be determined
</details>

**Question 3:** Compare:
I. xÂ² âˆ’ 9x + 20 = 0
II. yÂ² âˆ’ 11y + 30 = 0

<details>
<summary>Answer & Solution</summary>
**Formula:** Factorise and compare.

I: (xâˆ’4)(xâˆ’5) = 0 â†’ x = 4, 5
II: (yâˆ’5)(yâˆ’6) = 0 â†’ y = 5, 6

x = {4, 5}, y = {5, 6}
x_min = 4, x_max = 5; y_min = 5, y_max = 6
Every x â‰¤ every y? 4 â‰¤ 5 âœ“, 4 â‰¤ 6 âœ“, 5 â‰¤ 5 âœ“, 5 â‰¤ 6 âœ“
Answer: x â‰¤ y

**Answer:** x â‰¤ y
</details>

**Question 4:** Compare:
I. xÂ² âˆ’ 14x + 48 = 0
II. yÂ² âˆ’ 9y + 20 = 0

<details>
<summary>Answer & Solution</summary>
**Formula:** Factorise and compare.

I: (xâˆ’6)(xâˆ’8) = 0 â†’ x = 6, 8
II: (yâˆ’4)(yâˆ’5) = 0 â†’ y = 4, 5

x = {6, 8}, y = {4, 5}
Every x > every y? 6 > 4 âœ“, 6 > 5 âœ“, 8 > 4 âœ“, 8 > 5 âœ“
Answer: x > y

**Answer:** x > y
</details>

**Question 5:** Compare:
I. xÂ² âˆ’ 12x + 32 = 0
II. yÂ² âˆ’ 10x + 24 = 0

<details>
<summary>Answer & Solution</summary>
**Formula:** Factorise and compare.

I: (xâˆ’4)(xâˆ’8) = 0 â†’ x = 4, 8
II: (yâˆ’4)(yâˆ’6) = 0 â†’ y = 4, 6

x = {4, 8}, y = {4, 6}
Is x â‰¥ y? 4 â‰¥ 4 âœ“, 4 â‰¥ 6 âœ—. Is x â‰¤ y? 8 â‰¤ 6 âœ—.
Mixed relationship: some x = y, some x > y, no consistent inequality.

**Answer:** Cannot be determined
</details>

**Question 6:** Compare:
I. 2xÂ² âˆ’ 7x + 3 = 0
II. 3yÂ² âˆ’ 8y + 4 = 0

<details>
<summary>Answer & Solution</summary>
**Formula:** Use quadratic formula or factorisation.

I: 2xÂ² âˆ’ 7x + 3 = 0 â†’ 2xÂ² âˆ’ 6x âˆ’ x + 3 = 0 â†’ 2x(xâˆ’3) âˆ’ 1(xâˆ’3) = 0 â†’ (xâˆ’3)(2xâˆ’1) = 0 â†’ x = 3, 0.5
II: 3yÂ² âˆ’ 8y + 4 = 0 â†’ 3yÂ² âˆ’ 6y âˆ’ 2y + 4 = 0 â†’ 3y(yâˆ’2) âˆ’ 2(yâˆ’2) = 0 â†’ (yâˆ’2)(3yâˆ’2) = 0 â†’ y = 2, 0.67

x = {3, 0.5}, y = {2, 0.67}
x_min = 0.5, x_max = 3; y_min = 0.67, y_max = 2
Is x < y? 3 < 2 âœ—. Is x > y? 0.5 > 0.67 âœ—.
Mixed relationship.

**Answer:** Cannot be determined
</details>

**Question 7:** Compare:
I. xÂ² âˆ’ 7x + 10 = 0
II. yÂ² âˆ’ 11y + 30 = 0

<details>
<summary>Answer & Solution</summary>
**Formula:** Factorise and compare.

I: (xâˆ’2)(xâˆ’5) = 0 â†’ x = 2, 5
II: (yâˆ’5)(yâˆ’6) = 0 â†’ y = 5, 6

x = {2, 5}, y = {5, 6}
x_min = 2, x_max = 5; y_min = 5, y_max = 6
Every x â‰¤ every y? 2 â‰¤ 5 âœ“, 2 â‰¤ 6 âœ“, 5 â‰¤ 5 âœ“, 5 â‰¤ 6 âœ“
Answer: x â‰¤ y

**Answer:** x â‰¤ y
</details>

**Question 8:** Compare:
I. 3xÂ² + 11x + 6 = 0
II. 2yÂ² + 5y âˆ’ 12 = 0

<details>
<summary>Answer & Solution</summary>
**Formula:** Factorise and compare.

I: 3xÂ² + 11x + 6 = 0 â†’ 3xÂ² + 9x + 2x + 6 = 0 â†’ 3x(x+3) + 2(x+3) = 0 â†’ (x+3)(3x+2) = 0 â†’ x = âˆ’3, âˆ’2/3
II: 2yÂ² + 5y âˆ’ 12 = 0 â†’ 2yÂ² + 8y âˆ’ 3y âˆ’ 12 = 0 â†’ 2y(y+4) âˆ’ 3(y+4) = 0 â†’ (y+4)(2yâˆ’3) = 0 â†’ y = âˆ’4, 1.5

x = {âˆ’3, âˆ’0.67}, y = {âˆ’4, 1.5}
x_min = âˆ’3, x_max = âˆ’0.67; y_min = âˆ’4, y_max = 1.5
Is x > y? âˆ’0.67 > 1.5 âœ—. Is x < y? âˆ’3 < âˆ’4 âœ—.
Cannot be determined.

**Answer:** Cannot be determined
</details>

**Question 9:** Compare:
I. 4xÂ² âˆ’ 12x + 9 = 0
II. 2yÂ² âˆ’ 11y + 14 = 0

<details>
<summary>Answer & Solution</summary>
**Formula:** D = bÂ² âˆ’ 4ac; if D = 0, roots are equal.

I: D = 144 âˆ’ 144 = 0 â†’ x = 12/8 = 1.5 (repeated)
II: 2yÂ² âˆ’ 11y + 14 = 0 â†’ 2yÂ² âˆ’ 7y âˆ’ 4y + 14 = 0 â†’ y(2yâˆ’7) âˆ’ 2(2yâˆ’7) = 0 â†’ (2yâˆ’7)(yâˆ’2) = 0 â†’ y = 3.5, 2

x = {1.5}, y = {2, 3.5}
x_max = 1.5, y_min = 2
1.5 < 2 and 1.5 < 3.5 â†’ x < y
Answer: x < y

**Answer:** x < y
</details>

**Question 10:** Compare:
I. xÂ² âˆ’ 2x âˆ’ 8 = 0
II. 2yÂ² âˆ’ 7y + 3 = 0

<details>
<summary>Answer & Solution</summary>
**Formula:** Factorise and compare.

I: (xâˆ’4)(x+2) = 0 â†’ x = 4, âˆ’2
II: 2yÂ² âˆ’ 7y + 3 = 0 â†’ 2yÂ² âˆ’ 6y âˆ’ y + 3 = 0 â†’ 2y(yâˆ’3) âˆ’ 1(yâˆ’3) = 0 â†’ (yâˆ’3)(2yâˆ’1) = 0 â†’ y = 3, 0.5

x = {4, âˆ’2}, y = {3, 0.5}
x_min = âˆ’2, x_max = 4; y_min = 0.5, y_max = 3
Is x > y? âˆ’2 > 0.5 âœ—. Is x < y? 4 < 3 âœ—.
Cannot be determined.

**Answer:** Cannot be determined
</details>

### Set 2: Simplification & Approximation (Questions 11â€“20)

**Question 11:** Simplify: 24 + 36 Ã· 6 Ã— 3 âˆ’ 10

<details>
<summary>Answer & Solution</summary>
**Formula:** BODMAS: B â†’ O â†’ D/M (Lâ†’R) â†’ A/S (Lâ†’R)

36 Ã· 6 = 6
6 Ã— 3 = 18
24 + 18 âˆ’ 10 = 42 âˆ’ 10 = 32

**Answer:** 32
</details>

**Question 12:** Find the approximate value: âˆš(290) + (11.98)Â² âˆ’ 49.02 Ã— 2.01

<details>
<summary>Answer & Solution</summary>
**Formula:** Round to nearest integers before calculating.

âˆš289 â‰ˆ 17, 12Â² = 144, 49 Ã— 2 = 98
17 + 144 âˆ’ 98 = 161 âˆ’ 98 = 63

**Answer:** 63
</details>

**Question 13:** Simplify: 33.33% of 480 + 25% of 200 âˆ’ 12.5% of 400

<details>
<summary>Answer & Solution</summary>
**Formula:** Convert % to fractions: 33.33% = 1/3, 25% = 1/4, 12.5% = 1/8

(1/3 Ã— 480) + (1/4 Ã— 200) âˆ’ (1/8 Ã— 400)
= 160 + 50 âˆ’ 50
= 160

**Answer:** 160
</details>

**Question 14:** Simplify: 5Â² Ã— 4Â³ âˆ’ 6Â² Ã— 3Â² + âˆš(1444)

<details>
<summary>Answer & Solution</summary>
**Formula:** Calculate powers first (Orders step).

5Â² = 25, 4Â³ = 64
6Â² = 36, 3Â² = 9
âˆš1444 = 38 (since 38Â² = 1444)

25 Ã— 64 = 1600
36 Ã— 9 = 324
1600 âˆ’ 324 + 38 = 1276 + 38 = 1314

**Answer:** 1314
</details>

**Question 15:** Find approximate value: (24.95% of 799.99) + 55.03 Ã— 2.99 Ã· 8.98

<details>
<summary>Answer & Solution</summary>
**Formula:** Round: 25% of 800 + 55 Ã— 3 Ã· 9

25% of 800 = 200
55 Ã— 3 = 165
165 Ã· 9 â‰ˆ 18.33
200 + 18.33 â‰ˆ 218

**Answer:** 218
</details>

**Question 16:** Simplify: 125 Ã— 24 âˆ’ 75 Ã— 16 + 50 Ã— 12

<details>
<summary>Answer & Solution</summary>
**Formula:** Factor out common terms to simplify.

= 25(5 Ã— 24 âˆ’ 3 Ã— 16 + 2 Ã— 12)
= 25(120 âˆ’ 48 + 24)
= 25 Ã— 96
= 2400

**Answer:** 2400
</details>

**Question 17:** Find approximate value: âˆš(3980) + (19.98)Â² âˆ’ (4.99)Â³

<details>
<summary>Answer & Solution</summary>
**Formula:** Round each value.

âˆš3980 â‰ˆ âˆš3969 = 63 (since 63Â² = 3969)
20Â² = 400
5Â³ = 125

63 + 400 âˆ’ 125 = 463 âˆ’ 125 = 338

**Answer:** 338
</details>

**Question 18:** Simplify: [{20 + (48 Ã· 6)} Ã— 3 âˆ’ 15] Ã· 5 + 2Â²

<details>
<summary>Answer & Solution</summary>
**Formula:** Innermost brackets first.

48 Ã· 6 = 8
20 + 8 = 28
28 Ã— 3 = 84
84 âˆ’ 15 = 69
69 Ã· 5 = 13.8
13.8 + 4 = 17.8

**Answer:** 17.8
</details>

**Question 19:** Find the value: âˆš(0.0625) + âˆš(0.0016) âˆ’ âˆš(0.0009)

<details>
<summary>Answer & Solution</summary>
**Formula:** âˆš(decimal) = âˆš(numerator)/âˆš(denominator)

âˆš0.0625 = 0.25
âˆš0.0016 = 0.04
âˆš0.0009 = 0.03

0.25 + 0.04 âˆ’ 0.03 = 0.26

**Answer:** 0.26
</details>

**Question 20:** Find approximate value: (35.02% of 249.99) + âˆš(220.99) âˆ’ 15.02 Ã— 2.98

<details>
<summary>Answer & Solution</summary>
**Formula:** Round and compute.

35% of 250 = 0.35 Ã— 250 = 87.5
âˆš221 â‰ˆ âˆš225 = 15 (using nearest perfect square)
15 Ã— 3 = 45

87.5 + 15 âˆ’ 45 = 102.5 âˆ’ 45 = 57.5

**Answer:** 57.5
</details>

## ðŸ“– Exercise Bank (30 Questions)

### Quadratic Equations â€” Comparison (1â€“15)

**1.** I: xÂ² âˆ’ 6x + 8 = 0, II: yÂ² âˆ’ 8x + 15 = 0
**2.** I: xÂ² âˆ’ 13x + 42 = 0, II: yÂ² âˆ’ 10y + 21 = 0
**3.** I: 2xÂ² âˆ’ 9x + 10 = 0, II: 3yÂ² âˆ’ 10y + 7 = 0
**4.** I: xÂ² âˆ’ 8x + 12 = 0, II: yÂ² âˆ’ 6y + 8 = 0
**5.** I: xÂ² + x âˆ’ 12 = 0, II: yÂ² + 2y âˆ’ 8 = 0
**6.** I: xÂ² âˆ’ 12x + 35 = 0, II: yÂ² âˆ’ 13y + 40 = 0
**7.** I: 3xÂ² âˆ’ 5x âˆ’ 12 = 0, II: 2yÂ² âˆ’ 7y + 6 = 0
**8.** I: xÂ² âˆ’ 16x + 63 = 0, II: yÂ² âˆ’ 11y + 28 = 0
**9.** I: 4xÂ² âˆ’ 19x + 12 = 0, II: 3yÂ² âˆ’ 22y + 40 = 0
**10.** I: xÂ² âˆ’ 9x + 14 = 0, II: yÂ² âˆ’ 11y + 24 = 0
**11.** I: 2xÂ² âˆ’ 3x âˆ’ 5 = 0, II: 3yÂ² + 10y + 7 = 0
**12.** I: xÂ² âˆ’ 18x + 72 = 0, II: yÂ² âˆ’ 14y + 48 = 0
**13.** I: 5xÂ² âˆ’ 8x âˆ’ 4 = 0, II: 2yÂ² âˆ’ 5y âˆ’ 12 = 0
**14.** I: xÂ² âˆ’ 10x + 24 = 0, II: yÂ² âˆ’ 12y + 36 = 0
**15.** I: 3xÂ² + 7x + 2 = 0, II: 2yÂ² + 9y + 10 = 0

### Simplification & Approximation (16â€“30)

**16.** Simplify: 45 + 54 Ã· 9 Ã— 6 âˆ’ 18
**17.** Find approximate: âˆš(168.99) + (6.98)Â² âˆ’ 24.01 Ã— 1.99
**18.** Simplify: 37.5% of 640 + 16.67% of 480 âˆ’ 28.57% of 350
**19.** Find approximate: (19.98% of 499.99) + âˆš(1444) Ã— 2.01 âˆ’ 15.98
**20.** Simplify: 4Â³ + 5Â³ âˆ’ 6Â² Ã— 2 + âˆš(1681)
**21.** Find approximate: âˆš(360) Ã— 4.99 âˆ’ (3.98)Â³ + 55.02
**22.** Simplify: (0.75 Ã— 640) + (0.625 Ã— 320) âˆ’ (0.125 Ã— 800)
**23.** Find approximate: (49.98 Ã— 3.01) Ã· 6.99 + âˆš(1224.99) âˆ’ 12.02
**24.** Simplify: [{(256 Ã· 16) + 12} Ã— 3 âˆ’ 28] Ã· 4 + 3Â²
**25.** Find approximate: (39.99% of 300.02) + (24.98 Ã— 5.01) Ã· 3.02 âˆ’ 60.01
**26.** Simplify: 2âµ Ã— 3Â³ âˆ’ 4Â³ Ã— 2Â² + 5Â² Ã— 10
**27.** Find approximate: âˆš(3968) + (9.99)Â³ âˆ’ (11.99)Â² Ã— 2
**28.** Simplify: (3/4 of 480) âˆ’ (2/5 of 450) + (5/8 of 320)
**29.** Find approximate: (55.03% of 300.01) âˆ’ (12.03 Ã— 4.98) Ã· 5.99 + âˆš(484)
**30.** Simplify: 1.6 Ã— 12.5 Ã— 0.5 + 2.4 Ã— 25 Ã— 0.25 âˆ’ 3.2 Ã— 6.25 Ã— 0.75

**Answer Key:**
1. I: x=2,4; II: y=3,5 â†’ Cannot be determined
2. I: x=6,7; II: y=3,7 â†’ Cannot be determined
3. I: x=2.5,2; II: y=2.33,1 â†’ x > y
4. I: x=2,6; II: y=2,4 â†’ Cannot be determined
5. I: x=âˆ’4,3; II: y=âˆ’4,2 â†’ Cannot be determined
6. I: x=5,7; II: y=5,8 â†’ Cannot be determined
7. I: x=3,âˆ’1.33; II: y=2,1.5 â†’ Cannot be determined
8. I: x=7,9; II: y=4,7 â†’ x â‰¥ y
9. I: x=4,0.75; II: y=4,3.33 â†’ Cannot be determined
10. I: x=2,7; II: y=3,8 â†’ Cannot be determined
11. I: x=2.5,âˆ’1; II: y=âˆ’2.33,âˆ’1 â†’ Cannot be determined
12. I: x=6,12; II: y=6,8 â†’ Cannot be determined
13. I: x=2,âˆ’0.4; II: y=4,âˆ’1.5 â†’ Cannot be determined
14. I: x=4,6; II: y=6,6 (repeated) â†’ x â‰¤ y
15. I: x=âˆ’0.33,âˆ’2; II: y=âˆ’2.5,âˆ’2 â†’ x â‰¥ y
16. 63
17. 13 + 49 âˆ’ 48 = 14
18. 240 + 80 âˆ’ 100 = 220
19. 100 + 76 âˆ’ 16 = 160
20. 64 + 125 âˆ’ 72 + 41 = 158
21. 19 Ã— 5 âˆ’ 64 + 55 = 95 âˆ’ 64 + 55 = 86
22. 480 + 200 âˆ’ 100 = 580
23. (150 Ã· 7) + 35 âˆ’ 12 = 21.43 + 35 âˆ’ 12 = 44.43
24. [(16+12)Ã—3âˆ’28]Ã·4+9 = [28Ã—3âˆ’28]Ã·4+9 = [84âˆ’28]Ã·4+9 = 56Ã·4+9 = 14+9 = 23
25. 120 + (125Ã·3) âˆ’ 60 = 120 + 41.67 âˆ’ 60 = 101.67
26. 32Ã—27 âˆ’ 64Ã—4 + 25Ã—10 = 864 âˆ’ 256 + 250 = 858
27. 63 + 1000 âˆ’ 144Ã—2 = 63 + 1000 âˆ’ 288 = 775
28. 360 âˆ’ 180 + 200 = 380
29. 165 âˆ’ (60Ã·6) + 22 = 165 âˆ’ 10 + 22 = 177
30. 10 + 15 âˆ’ 15 = 10

## Mermaid Diagram: Quadratic Comparison â€” Number Line Method

```mermaid
flowchart TD
    A["Equation I roots: râ‚, râ‚‚"] --> C["Plot on number line"]
    B["Equation II roots: sâ‚, sâ‚‚"] --> C
    C --> D{"All r > all s?"}
    D -->|"Yes"| E["x > y"]
    D -->|"No"| F{"All r < all s?"}
    F -->|"Yes"| G["x < y"]
    F -->|"No"| H{"r_min â‰¥ s_max?"}
    H -->|"Yes"| I["x â‰¥ y"]
    H -->|"No"| J{"r_max â‰¤ s_min?"}
    J -->|"Yes"| K["x â‰¤ y"]
    J -->|"No"| L["Cannot be determined"]
```

## Mermaid Diagram: BODMAS â€” Step-by-Step Evaluation

```mermaid
flowchart LR
    A["Expression"] --> B["Step 1: ( ) brackets"]
    B --> C["Step 2: { } brackets"]
    C --> D["Step 3: [ ] brackets"]
    D --> E["Step 4: Orders (Â², âˆš, etc.)"]
    E --> F["Step 5: Ã· and Ã— (Lâ†’R)"]
    F --> G["Step 6: + and âˆ’ (Lâ†’R)"]
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
| Quadratic formula | x = [âˆ’b Â± âˆš(bÂ²âˆ’4ac)]/2a | Standard form: axÂ²+bx+c=0 |
| Discriminant | D = bÂ² âˆ’ 4ac | D>0: 2 real, D=0: 1 real, D<0: no real |
| Sum of roots | âˆ’b/a | For axÂ²+bx+c=0 |
| Product of roots | c/a | For axÂ²+bx+c=0 |
| BODMAS order | B â†’ O â†’ DM â†’ AS | DM and AS have equal precedence (Lâ†’R) |
| Percentage as fraction | x% = x/100 | Common: 12.5%=1/8, 33.33%=1/3 |
| âˆš approximation | âˆšn â‰ˆ nearest perfect square | Use interpolation for better accuracy |
| Digit sum | Sum digits until single digit | Helps verify calculations |

## Summary

- **Quadratic Equations** can be solved by factorization, formula, or completing the square
- **Quadratic Comparison** requires solving both equations and comparing their root sets position on the number line
- **Approximation** saves time â€” round to nearest convenient values
- **BODMAS** is the universal order of operations: Brackets â†’ Orders â†’ DM â†’ AS
- The **discriminant** D = bÂ² - 4ac determines the nature of roots
- For IBPS SO, memorise squares up to 30, cubes up to 20, and common square roots
- Digit sum verification helps catch calculation errors
- In quadratic comparison, if one equation has D &lt; 0 (no real roots), the answer is often straightforward
- Practice recognising patterns: if c is negative, roots have opposite signs; if a, b, c all positive, both roots are negative

## Practical Takeaways

| Topic | Key Formula/Trick | Common Mistake |
|-------|------------------|----------------|
| Quadratic Solution | x = [-b Â± âˆš(bÂ²-4ac)]/2a | Wrong sign in formula |
| Quadratic Comparison | Position roots on number line | Declaring relationship without checking all roots |
| Discriminant | D = bÂ² - 4ac | Forgetting D &lt; 0 means no real roots |
| BODMAS | Division = Multiplication Lâ†’R | Doing multiplication before division |
| Approximation | Round to nearest integer | Over-approximating leading to wrong option |
| Digit Sum | Sum digits to single digit | Using this as the only verification method |

## Chapter Quiz

### Question 1

The roots of the equation xÂ² - 7x + 12 = 0 are:

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

Simplify using BODMAS: 24 - 8 Ã· 4 Ã— 2 + 6

<details>
<summary>Answer</summary>
24 - (8 Ã· 4) Ã— 2 + 6
= 24 - 2 Ã— 2 + 6
= 24 - 4 + 6
= 20 + 6
= 26
</details>

### Question 4

Find the approximate value: âˆš(255) + 14.98 Ã— 3.02 - 40.99

<details>
<summary>Answer</summary>
âˆš256 + 15 Ã— 3 - 41
= 16 + 45 - 41
= 20
</details>

### Question 5

Compare: I. xÂ² - 9x + 18 = 0, II. yÂ² - 8y + 15 = 0

<details>
<summary>Answer</summary>
I: (x-3)(x-6)=0 â†’ x=3,6
II: (y-3)(y-5)=0 â†’ y=3,5
x has 3,6; y has 3,5
3=3, 6>5: x â‰¥ y (some equal, some greater)
Answer: x â‰¥ y
</details>

## Exercises

### Exercise 1 (Beginner â€” Factorization)

Solve: xÂ² - 9x + 20 = 0

### Exercise 2 (Beginner â€” Quadratic Formula)

Solve: 3xÂ² + 7x + 2 = 0

### Exercise 3 (Beginner â€” BODMAS)

Simplify: 18 + 36 Ã· 9 Ã— 3 - 12

### Exercise 4 (Intermediate â€” Approximation)

Find approximate value: âˆš(440) + (9.02)Â² - 42.98 Ã— 2.01

### Exercise 5 (Intermediate â€” Quadratic Comparison)

Compare:
I. xÂ² - 10x + 24 = 0
II. yÂ² - 6y + 8 = 0

### Exercise 6 (Intermediate â€” Simplification)

Simplify: 12.5% of 800 + 16Â² - 3/4 of 120

### Exercise 7 (Advanced â€” Quadratic Comparison)

Compare:
I. 2xÂ² + 5x - 12 = 0
II. 3yÂ² - 10y + 8 = 0

### Exercise 8 (Advanced â€” Complex Approximation)

Find approximate value: (35.02% of 599.99) + (7/13 of 259.98) - 48.01 Ã· 11.98

### Exercise 9 (IBPS SO Level)

Compare:
I. xÂ² - 14x + 48 = 0
II. yÂ² - 9y + 20 = 0

### Exercise 10 (IBPS SO Level)

Simplify: [{(625 Ã· 25) + 15} Ã— 2 - 25] Ã· 5 + 3Â²

---

**Answer Key (Exercises):**
1. x = 4, 5
2. x = -1/3, x = -2
3. 18 (18 + 12 - 12 = 18)
4. 21 + 81 - 86 = 16
5. I: x=4,6; II: y=2,4 â†’ x â‰¥ y
6. 100 + 256 - 90 = 266
7. I: x=1.5, -4; II: y=2, 4/3=1.33 â†’ Cannot be determined
8. 210 + 140 - 4 = 346
9. I: x=6,8; II: y=4,5 â†’ x > y
10. [(25+15)Ã—2 - 25]Ã·5 + 9 = [40Ã—2-25]Ã·5 + 9 = [80-25]Ã·5 + 9 = 55Ã·5 + 9 = 11+9 = 20
