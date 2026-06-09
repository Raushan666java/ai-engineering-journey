# Chapter 12: Boolean Algebra

## Learning Objectives

After completing this chapter, you will be able to:

- Define Boolean algebras and identify their axioms
- Represent Boolean functions using truth tables and expressions
- Simplify Boolean expressions using Boolean identities
- Minimize circuits using Karnaugh maps
- Design logic circuits from Boolean expressions
- Recognize duality in Boolean algebra

## Theory

### 12.1 Definition

A **Boolean algebra** is a set $B$ with two binary operations $+$ (OR, denoted $\lor$) and $\cdot$ (AND, denoted $\land$), a unary operation $'$ (complement, NOT, denoted $\neg$), and elements $0$ and $1$ satisfying:

| Axiom | Name |
|-------|------|
| $x + 0 = x$, $x \cdot 1 = x$ | Identity |
| $x + x' = 1$, $x \cdot x' = 0$ | Complement |
| $x + y = y + x$, $x \cdot y = y \cdot x$ | Commutative |
| $x + (y + z) = (x + y) + z$, $x \cdot (y \cdot z) = (x \cdot y) \cdot z$ | Associative |
| $x \cdot (y + z) = (x \cdot y) + (x \cdot z)$, $x + (y \cdot z) = (x + y) \cdot (x + z)$ | Distributive |

The simplest Boolean algebra is $B = \{0, 1\}$ with the usual logical operations.

### 12.2 Duality

The **dual** of a Boolean expression replaces $+ \leftrightarrow \cdot$ and $0 \leftrightarrow 1$. Every valid identity remains valid when dualized.

### 12.3 Boolean Identities

For all $x, y, z \in B$:

| Identity | OR form | AND form |
|----------|---------|----------|
| Idempotent | $x + x = x$ | $x \cdot x = x$ |
| Domination | $x + 1 = 1$ | $x \cdot 0 = 0$ |
| Absorption | $x + (x \cdot y) = x$ | $x \cdot (x + y) = x$ |
| De Morgan | $(x + y)' = x' \cdot y'$ | $(x \cdot y)' = x' + y'$ |
| Double complement | $(x')' = x$ | |

### 12.4 Boolean Functions

A **Boolean function** of $n$ variables maps $\{0,1\}^n \rightarrow \{0,1\}$. It can be expressed as:

- **Sum of products (SOP):** OR of AND terms (minterms).
- **Product of sums (POS):** AND of OR terms (maxterms).
- **Canonical SOP:** each minterm includes all variables.

Any Boolean function can be represented by a truth table, a Boolean expression, or a logic circuit.

### 12.5 Logic Gates

| Gate | Symbol | Expression |
|------|--------|------------|
| AND | $\bullet$ | $x \cdot y$ |
| OR | $+$ | $x + y$ |
| NOT | $\circ$ | $x'$ |
| NAND | $\overline{\bullet}$ | $(x \cdot y)'$ |
| NOR | $\overline{+}$ | $(x + y)'$ |
| XOR | $\oplus$ | $x \oplus y = x'y + xy'$ |

**Theorem 12.1 (Functional completeness).** NAND alone (or NOR alone) is functionally complete: every Boolean function can be expressed using only NAND gates.

### 12.6 Circuit Minimization

**Karnaugh maps (K-maps)** provide a visual method for minimizing SOP expressions.

For $n$ variables, a K-map is a $2^n$ cell grid where adjacent cells differ in exactly one variable. Group adjacent 1s in rectangles of size $2^k$ to form prime implicants.

**Minimization procedure:**
1. Fill K-map from truth table.
2. Identify all maximal rectangles of 1s (power-of-2 sizes).
3. Select a minimal cover of all 1s.
4. Write the simplified SOP expression.

**Theorem 12.2 (Quine-McCluskey).** The Quine-McCluskey algorithm is a tabular method for Boolean minimization that guarantees finding all prime implicants and a minimal expression. It is more systematic than K-maps for 5+ variables.

### 12.7 Don't Care Conditions

Some input combinations may never occur. These are **don't cares** ($d$ or $X$), which can be assigned 0 or 1 to simplify the circuit without affecting correctness.

### 12.8 Digital Circuit Design

Design procedure:
1. Specify the problem with a truth table.
2. Derive the Boolean expression or K-map.
3. Minimize.
4. Draw the logic circuit.

## Examples

**Example 12.1** (Boolean identities simplification). Simplify $F = x'y'z + x'yz + xy'z$.

*Solution.* Factor $x'z(y' + y) + xy'z = x'z(1) + xy'z = x'z + xy'z = z(x' + xy') = z(x' + y')$ (by absorption). So $F = z(x' + y')$.

**Example 12.2** (K-map for 3 variables). Minimize $F(x,y,z) = \sum(0,2,4,5,6)$.

*Solution.* K-map ($yz$ columns, $x$ rows):
```
         yz
x       00 01 11 10
0        1  0  0  1
1        1  1  0  1
```
Groups: $z'$ covers $(0,2,4,6)$ — all cells where $z=0$. $xy'$ covers $(4,5)$. Minimal: $F = z' + xy'$.

**Example 12.3** (K-map for 4 variables). Minimize $F(w,x,y,z) = \sum(0,1,2,4,5,6,8,9,12,13)$.

*Solution.* After grouping: $F = y' + w'z'$.

**Example 12.4** (Logic circuit). Design a circuit for a majority function: output 1 if at least 2 of 3 inputs are 1.

*Solution.* Truth table: $F = xyz + xyz' + xy'z + x'yz$. Minimize (K-map): $F = xy + xz + yz$. Draw: three AND gates feeding one OR gate.

**Example 12.5** (Functional completeness). Show that NAND alone can implement NOT, AND, and OR.

*Solution.*
- NOT: $x' = (x \cdot x)' = \text{NAND}(x, x)$.
- AND: $x \cdot y = ((x \cdot y)')' = (\text{NAND}(x, y))' = \text{NAND}(\text{NAND}(x,y), \text{NAND}(x,y))$.
- OR: $x + y = (x' \cdot y')' = \text{NAND}(x', y')$ using NAND-based NOT.

**Example 12.6** (Don't cares). Design a BCD-to-7-segment decoder for one segment using don't cares (assume inputs 1010-1111 never occur).

*Solution.* For segment $a$ of a 7-segment display, the K-map with don't cares allows larger groups, yielding a simpler expression than without.

## Summary

- Boolean algebra is the mathematics of digital logic.
- De Morgan's laws and absorption are key simplification tools.
- K-maps offer visual minimization for up to 4-6 variables.
- NAND (and NOR) gates are functionally complete.
- Digital circuits are designed via truth table $\rightarrow$ Boolean expression $\rightarrow$ minimization $\rightarrow$ gate implementation.

## Exercises

### Review Questions

1. State the absorption law in both forms.
2. What does it mean for NAND to be functionally complete?
3. How many cells in a 5-variable K-map?
4. What is the dual of $x + (y \cdot z')$?
5. When are don't care conditions useful?

### Application Problems

6. Simplify $F(x,y,z) = xy + x'y + xyz + x'y'z$ using Boolean identities.

7. Use a K-map to minimize $F(x,y,z) = \sum(1,3,5,6,7)$. Write the minimal SOP.

8. Use a K-map to minimize $F(w,x,y,z) = \sum(0,2,3,5,7,8,10,11,13,15)$.

9. Design a 2-bit comparator circuit that outputs 1 when $A > B$ (each input is a 2-bit number).

10. Prove that NOR alone is functionally complete.

### Challenge Problem

11. Design a **full adder** circuit using minimal gates. A full adder takes three bits $A, B, C_{in}$ and produces sum $S$ and carry-out $C_{out}$. Derive the minimized Boolean expressions using K-maps and draw the circuit.
