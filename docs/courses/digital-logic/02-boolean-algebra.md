# Chapter 2: Boolean Algebra

## Learning Objectives

By the conclusion of this chapter, the student shall be able to:

1. State and apply the fundamental postulates and theorems of Boolean algebra
2. Simplify Boolean expressions using algebraic manipulation
3. Apply De Morgan's theorems to complement expressions
4. Derive sum-of-products (SOP) and product-of-sums (POS) forms from truth tables
5. Minimise logic functions using Karnaugh maps of two, three, and four variables
6. Apply the Quine-McCluskey algorithm for systematic function minimisation

## Theory

### 2.1 Boolean Postulates

Boolean algebra, introduced by George Boole in 1854 and adapted by Claude Shannon in 1938 for switching circuit analysis, is a mathematical system defined on a set of two elements {0, 1} with operators + (OR) and &middot; (AND), and complement (NOT).

The fundamental postulates are as follows:

| Postulate | OR Form | AND Form |
|-----------|---------|----------|
| Identity | *x* + 0 = *x* | *x* &middot; 1 = *x* |
| Commutativity | *x* + *y* = *y* + *x* | *x* &middot; *y* = *y* &middot; *x* |
| Associativity | (*x* + *y*) + *z* = *x* + (*y* + *z*) | (*x* &middot; *y*) &middot; *z* = *x* &middot; (*y* &middot; *z*) |
| Distributivity | *x* &middot; (*y* + *z*) = *x*&middot;*y* + *x*&middot;*z* | *x* + (*y* &middot; *z*) = (*x* + *y*) &middot; (*x* + *z*) |
| Complement | *x* + *x*' = 1 | *x* &middot; *x*' = 0 |

### 2.2 Fundamental Theorems

| Theorem | OR Form | AND Form |
|---------|---------|----------|
| Idempotence | *x* + *x* = *x* | *x* &middot; *x* = *x* |
| Null element | *x* + 1 = 1 | *x* &middot; 0 = 0 |
| Involution | (*x*')' = *x* | |
| Absorption | *x* + *x* &middot; *y* = *x* | *x* &middot; (*x* + *y*) = *x* |
| Adjacency | *x* &middot; *y* + *x* &middot; *y*' = *x* | (*x* + *y*) &middot; (*x* + *y*') = *x* |
| Consensus | *x* &middot; *y* + *x*' &middot; *z* + *y* &middot; *z* = *x* &middot; *y* + *x*' &middot; *z* | |

### 2.3 De Morgan's Theorems

Augustus De Morgan formulated two transformation rules of singular importance in digital logic:

**Theorem 1**: (*x* &middot; *y*)' = *x*' + *y'*

**Theorem 2**: (*x* + *y*)' = *x*' &middot; *y'*

These theorems generalise to *n* variables:

(*x*_1 &middot; *x*_2 &middot; ... &middot; *x*_n)' = *x*_1' + *x*_2' + ... + *x*_n'
(*x*_1 + *x*_2 + ... + *x*_n)' = *x*_1' &middot; *x*_2' &middot; ... &middot; *x*_n'

De Morgan's theorems are essential for converting AND-OR networks to NAND-NAND or NOR-NOR equivalents.

### 2.4 Standard Forms

#### 2.4.1 Minterms and Maxterms

A **minterm** is a product term in which every variable appears exactly once, either complemented or uncomplemented. For *n* variables, there exist 2^n distinct minterms.

A **maxterm** is a sum term in which every variable appears exactly once. For *n* variables, there exist 2^n distinct maxterms.

| *x* | *y* | *z* | Minterm | Notation |
|-----|-----|-----|----------|----------|
| 0 | 0 | 0 | *x' y' z'* | *m*_0 |
| 0 | 0 | 1 | *x' y' z* | *m*_1 |
| 0 | 1 | 0 | *x' y z'* | *m*_2 |
| 0 | 1 | 1 | *x' y z* | *m*_3 |
| 1 | 0 | 0 | *x y' z'* | *m*_4 |
| 1 | 0 | 1 | *x y' z* | *m*_5 |
| 1 | 1 | 0 | *x y z'* | *m*_6 |
| 1 | 1 | 1 | *x y z* | *m*_7 |

#### 2.4.2 Sum-of-Products (SOP)

A Boolean function expressed as the OR of minterms for which the function output is 1. Example:

*F*(*x*, *y*, *z*) = *m*_1 + *m*_3 + *m*_5 + *m*_7 = &Sigma;(1, 3, 5, 7)

#### 2.4.3 Product-of-Sums (POS)

A Boolean function expressed as the AND of maxterms for which the function output is 0. Example:

*F*(*x*, *y*, *z*) = *M*_0 &middot; *M*_2 &middot; *M*_4 &middot; *M*_6 = &Pi;(0, 2, 4, 6)

### 2.5 Karnaugh Maps

The Karnaugh map (K-map) is a graphical tool for minimising Boolean functions. It arranges truth table entries in a grid where adjacent cells differ in exactly one variable.

#### 2.5.1 Two-Variable K-Map

|  | *y* = 0 | *y* = 1 |
|--|---------|---------|
| *x* = 0 | *m*_0 | *m*_1 |
| *x* = 1 | *m*_2 | *m*_3 |

#### 2.5.2 Three-Variable K-Map

|  | *yz* = 00 | *yz* = 01 | *yz* = 11 | *yz* = 10 |
|--|-----------|-----------|-----------|-----------|
| *x* = 0 | *m*_0 | *m*_1 | *m*_3 | *m*_2 |
| *x* = 1 | *m*_4 | *m*_5 | *m*_7 | *m*_6 |

#### 2.5.3 Four-Variable K-Map

|  | *zw* = 00 | *zw* = 01 | *zw* = 11 | *zw* = 10 |
|--|-----------|-----------|-----------|-----------|
| *xy* = 00 | *m*_0 | *m*_1 | *m*_3 | *m*_2 |
| *xy* = 01 | *m*_4 | *m*_5 | *m*_7 | *m*_6 |
| *xy* = 11 | *m*_12 | *m*_13 | *m*_15 | *m*_14 |
| *xy* = 10 | *m*_8 | *m*_9 | *m*_11 | *m*_10 |

**Minimisation procedure**:

1. Enter 1s in cells corresponding to minterms where the function is true.
2. Enter Xs for don't-care conditions.
3. Group adjacent 1s (and Xs if beneficial) into rectangular groups of size 2^k.
4. Each group corresponds to a product term. Variables that change within the group are eliminated.
5. The minimal SOP is the OR of all essential prime implicants.

### 2.6 Quine-McCluskey Minimisation

The Quine-McCluskey algorithm is a tabular method for Boolean minimisation suitable for functions with many variables where K-maps become unwieldy.

**Phase 1 — Generation of prime implicants**:

1. List all minterms grouped by the number of 1s in the binary representation.
2. Compare each minterm in group *i* with each in group *i* + 1. If they differ in exactly one bit, combine them and mark the differing position with a dash.
3. Repeat until no further combinations are possible. The unchecked terms are the prime implicants.

**Phase 2 — Essential prime implicant selection**:

1. Construct a prime implicant chart with prime implicants as rows and minterms as columns.
2. Identify essential prime implicants (those covering a minterm that no other implicant covers).
3. Cover the remaining minterms using a minimal set of non-essential prime implicants.

## Examples

### Example 2.1: Algebraic Simplification

Simplify *F* = *x* &middot; *y* + *x* &middot; *z* + *y* &middot; *z*.

**Solution**: *F* = *x* &middot; *y* + *x* &middot; *z* + *y* &middot; *z* = *x* &middot; *y* + *x* &middot; *z* + *y* &middot; *z* &middot; (*x* + *x'*) = *x* &middot; *y* + *x* &middot; *z* + *x* &middot; *y* &middot; *z* + *x'* &middot; *y* &middot; *z*.

Absorb *x* &middot; *y* &middot; *z* into *x* &middot; *y*: *F* = *x* &middot; *y* + *x* &middot; *z* + *x'* &middot; *y* &middot; *z*.

Factor *z*: *F* = *x* &middot; *y* + *z* &middot; (*x* + *x'* &middot; *y*) = *x* &middot; *y* + *z* &middot; (*x* + *y*) by the absorption theorem.

Expanding: *F* = *x* &middot; *y* + *x* &middot; *z* + *y* &middot; *z*. This is the original expression — the function is a consensus form and cannot be simplified further.

### Example 2.2: K-Map Minimisation

Minimise *F*(*A*, *B*, *C*, *D*) = &Sigma;(0, 1, 2, 5, 8, 9, 10) using a 4-variable K-map.

**Solution**: Construct the K-map:

Cells with 1: 0000, 0001, 0010, 0101, 1000, 1001, 1010.

|  | CD=00 | CD=01 | CD=11 | CD=10 |
|--|-------|-------|-------|-------|
| AB=00 | 1 | 1 | 0 | 1 |
| AB=01 | 0 | 1 | 0 | 0 |
| AB=11 | 0 | 0 | 0 | 0 |
| AB=10 | 1 | 1 | 0 | 1 |

Grouping: The four corner cells (0000, 0010, 1000, 1010) form a group eliminating *B* and *D*, yielding *A'* &middot; *C'*. The pair (0001, 1001) yields *B'* &middot; *C'* &middot; *D*. The singleton (0101) yields *A'* &middot; *B* &middot; *C'* &middot; *D*.

Minimal expression: *F* = *A'* &middot; *C'* + *B'* &middot; *C'* &middot; *D* + *A'* &middot; *B* &middot; *C'* &middot; *D*

### Example 2.3: De Morgan Application

Apply De Morgan's theorem to find the complement of *F* = (*A* + *B* &middot; *C*) &middot; (*A'* + *C*).

**Solution**: *F'* = [(*A* + *B* &middot; *C*) &middot; (*A'* + *C*)]' = (*A* + *B* &middot; *C*)' + (*A'* + *C*)'.

Apply De Morgan to each term:

(*A* + *B* &middot; *C*)' = *A'* &middot; (*B* &middot; *C*)' = *A'* &middot; (*B'* + *C'*)

(*A'* + *C*)' = *A* &middot; *C'*

Therefore: *F'* = *A'* &middot; (*B'* + *C'*) + *A* &middot; *C'* = *A'* &middot; *B'* + *A'* &middot; *C'* + *A* &middot; *C'* = *A'* &middot; *B'* + *C'*.

### Example 2.4: Quine-McCluskey

Minimise *F*(*w*, *x*, *y*, *z*) = &Sigma;(0, 1, 2, 8, 9, 10, 15) using Quine-McCluskey.

**Solution**: 

Group by number of 1s:
- Group 0: 0000 (0)
- Group 1: 0001 (1), 0010 (2), 1000 (8)
- Group 2: 1001 (9), 1010 (10)
- Group 4: 1111 (15)

Combine: 0&minus;1 gives 000&minus; (0,1), 00&minus;0 (0,2), &minus;000 (0,8). 1&minus;2 gives 00&minus;1 (1,9) — wait, 0001 and 1001 differ in bit position 3: &minus;001 (1,9). 0010 and 1010: &minus;010 (2,10). 1000 and 1001: 100&minus; (8,9). 1000 and 1010: 10&minus;0 (8,10).

Combine again: No further combinations possible.

Prime implicants: 000&minus; (covering 0,1), 00&minus;0 (0,2), &minus;000 (0,8), &minus;001 (1,9), &minus;010 (2,10), 100&minus; (8,9), 10&minus;0 (8,10), and 1111 (15).

Essential prime implicants: 1111 (15), 000&minus; (covers 1 uniquely), &minus;000 (covers 8 uniquely). After covering 0,1,8,15, remaining minterms: 2,9,10. Choose 100&minus; (covers 9) and &minus;010 (covers 2,10).

Minimal expression: *w' x' y'* + *x' y'* + *w y' z'* + *w x y z*.

## Summary

- Boolean algebra, with operators AND, OR, and NOT on the set {0, 1}, is the mathematical foundation of digital logic design.
- De Morgan's theorems enable systematic transformation between AND-OR and OR-AND networks.
- Sum-of-products and product-of-sums are canonical representations of Boolean functions.
- Karnaugh maps provide a visual method for minimising functions of up to six variables.
- The Quine-McCluskey algorithm systematises minimisation for an arbitrary number of variables.

## Exercises

### Review Questions

1. State the three Boolean postulates and the five fundamental theorems.
2. What is a minterm? How many minterms exist for a function of *n* variables?
3. Distinguish between sum-of-products and product-of-sums forms.
4. When is a prime implicant described as essential?
5. Why does adjacency of cells in a K-map correspond to single-variable changes?

### Application Problems

1. Simplify using algebraic manipulation:
   a) *F* = *A* &middot; *B* + *A* &middot; *B'* + *A'* &middot; *B*
   b) *G* = (*X* + *Y*) &middot; (*X* + *Y'*) &middot; (*X'* + *Y*)
   c) *H* = *P* &middot; *Q* + *P* &middot; *R* + *Q* &middot; *R*

2. Use 3-variable K-maps to minimise:
   a) *F*(*x*,*y*,*z*) = &Sigma;(2, 3, 4, 5)
   b) *G*(*x*,*y*,*z*) = &Sigma;(0, 2, 4, 6)
   c) *H*(*x*,*y*,*z*) = &Pi;(1, 3, 5, 7)

3. Using a 4-variable K-map, minimise:
   *F*(*A*,*B*,*C*,*D*) = &Sigma;(0, 2, 4, 6, 8, 10, 12, 14). Comment on the result.

4. Apply De Morgan's theorem to:
   a) (*A* &middot; *B* + *C*)'
   b) [(*A* + *B*) &middot; (*C* + *D*)]'

5. Use Quine-McCluskey to minimise:
   *F*(*w*,*x*,*y*,*z*) = &Sigma;(0, 2, 3, 6, 7, 8, 10, 12, 13)

### Challenge Problem

Design a 4-bit prime number detector. The circuit accepts a 4-bit unsigned binary number (0&ndash;15) and outputs 1 when the input is prime. Prime numbers in this range are {2, 3, 5, 7, 11, 13}. Use a K-map to derive the minimal SOP and POS implementations. The numbers 0 and 1 are not prime. Compare the gate count of the two implementations.
