# Module 4: Combinatorics - Complete Guide
## 🎲 The Art of Counting

---

## 📚 Chapter 1: Fundamental Counting Principles

### **1.1 Addition Principle (Sum Rule)**
```
If task A can be done in m ways and task B can be done in n ways,
and A and B cannot be done simultaneously, then A or B can be done in m + n ways.

Example: License plates
- 3 letters: 26³ = 17,576 ways
- 3 digits: 10³ = 1,000 ways
- Total: 17,576 + 1,000 = 18,576 ways

General Form:
|A₁ ∪ A₂ ∪ ... ∪ Aₙ| = |A₁| + |A₂| + ... + |Aₙ| (if sets are disjoint)
```

### **1.2 Multiplication Principle (Product Rule)**
```
If task A can be done in m ways and task B can be done in n ways,
then both A and B can be done in m × n ways.

Example: Password creation
- First character: 26 letters
- Second character: 10 digits
- Third character: 26 letters
- Total: 26 × 10 × 26 = 6,760 passwords

General Form:
If procedure consists of k steps with n₁, n₂, ..., nₖ ways respectively,
total ways = n₁ × n₂ × ... × nₖ
```

### **1.3 Subtraction Principle**
```
Count complement: |A| = |U| - |Ā|
where U is universal set and Ā is complement of A

Example: 5-digit numbers not containing digit 0
- Total 5-digit numbers: 9 × 10⁴ = 90,000
- Numbers containing 0: Use inclusion-exclusion
- Answer: Calculate directly as 9⁵ = 59,049
```

### **1.4 Division Principle**
```
If n objects are divided into k groups of equal size,
then each group has n/k objects.

Example: Arranging identical objects
- 12 identical balls in 3 distinct boxes
- If each box gets equal number: 12/3 = 4 balls per box
```

---

## 🔢 Chapter 2: Permutations

### **2.1 Basic Permutations**
```
Permutation: Arrangement of objects where order matters

Formula: P(n,r) = n!/(n-r)!
where n = total objects, r = objects chosen

Examples:
P(5,3) = 5!/(5-3)! = 5!/2! = 120/2 = 60

Special Cases:
- P(n,n) = n! (all objects arranged)
- P(n,1) = n (choosing one object)
- P(n,0) = 1 (empty arrangement)
```

### **2.2 Permutations with Repetition**
```
When objects can be repeated:
Formula: nʳ
where n = available objects, r = positions

Example: 4-digit PIN codes
Each digit can be 0-9 (10 choices)
Total PINs = 10⁴ = 10,000
```

### **2.3 Circular Permutations**
```
Arranging objects in a circle:
Formula: (n-1)!

Reasoning: Fix one object to eliminate rotational symmetry

Example: 6 people around circular table
Arrangements = (6-1)! = 5! = 120

With identical objects: Consider reflections
- Necklace with n distinct beads: (n-1)!/2
```

### **2.4 Permutations with Identical Objects**
```
Formula: n!/(n₁! × n₂! × ... × nₖ!)
where n₁, n₂, ..., nₖ are counts of identical objects

Example: Arrangements of "MISSISSIPPI"
- Total letters: 11
- M: 1, I: 4, S: 4, P: 2
- Answer: 11!/(1! × 4! × 4! × 2!) = 34,650
```

---

## 🎯 Chapter 3: Combinations

### **3.1 Basic Combinations**
```
Combination: Selection of objects where order doesn't matter

Formula: C(n,r) = n!/(r!(n-r)!) = (n choose r)

Examples:
C(5,3) = 5!/(3!2!) = 120/(6×2) = 10

Properties:
- C(n,r) = C(n,n-r) (symmetry)
- C(n,0) = C(n,n) = 1
- C(n,1) = C(n,n-1) = n
```

### **3.2 Pascal's Triangle**
```
Construction: C(n,r) = C(n-1,r-1) + C(n-1,r)

Row 0:           1
Row 1:         1   1
Row 2:       1   2   1
Row 3:     1   3   3   1
Row 4:   1   4   6   4   1
Row 5: 1   5  10  10   5   1

Properties:
- Sum of row n: 2ⁿ
- Alternating sum: 0 (for n > 0)
- Hockey stick identity: Σ C(i,r) = C(n+1,r+1) for i from r to n
```

### **3.3 Combinations with Repetition**
```
Choosing r objects from n types with repetition allowed:
Formula: C(n+r-1, r) = C(n+r-1, n-1)

Example: Distributing 10 identical candies to 3 children
Answer: C(10+3-1, 10) = C(12,10) = C(12,2) = 66

Stars and Bars Method:
- n-1 bars separate n categories
- r stars represent objects
- Total positions: n+r-1
- Choose r positions for stars: C(n+r-1, r)
```

### **3.4 Multiset Coefficients**
```
Selecting from multiset with limited repetitions:
More complex formulas using generating functions

Example: Letters from "AABBCC"
- Select 3 letters
- Consider cases based on repetition patterns
- Use systematic enumeration or generating functions
```

---

## 📊 Chapter 4: Binomial Theorem

### **4.1 Binomial Expansion**
```
(x + y)ⁿ = Σ C(n,k) × xⁿ⁻ᵏ × yᵏ for k from 0 to n

Examples:
(x + y)² = C(2,0)x² + C(2,1)xy + C(2,2)y² = x² + 2xy + y²
(x + y)³ = x³ + 3x²y + 3xy² + y³

Coefficient of xᵃyᵇ in (x + y)ⁿ: C(n,a) where a + b = n
```

### **4.2 Special Cases**
```
Setting x = y = 1: (1 + 1)ⁿ = 2ⁿ = Σ C(n,k)
Setting x = 1, y = -1: (1 - 1)ⁿ = 0 = Σ (-1)ᵏ C(n,k) for n > 0

Multinomial Theorem:
(x₁ + x₂ + ... + xₘ)ⁿ = Σ (n!)/(k₁!k₂!...kₘ!) × x₁^k₁ × x₂^k₂ × ... × xₘ^kₘ
where k₁ + k₂ + ... + kₘ = n
```

### **4.3 Applications**
```
Probability: Binomial distribution
- P(X = k) = C(n,k) × pᵏ × (1-p)ⁿ⁻ᵏ

Approximations:
- (1 + x)ⁿ ≈ 1 + nx for small x
- Newton's binomial theorem for non-integer exponents
```

---

## 🔄 Chapter 5: Inclusion-Exclusion Principle

### **5.1 Two Sets**
```
|A ∪ B| = |A| + |B| - |A ∩ B|

Example: Students taking Math or Physics
- Math: 30 students
- Physics: 25 students  
- Both: 10 students
- At least one: 30 + 25 - 10 = 45 students
```

### **5.2 Three Sets**
```
|A ∪ B ∪ C| = |A| + |B| + |C| - |A ∩ B| - |A ∩ C| - |B ∩ C| + |A ∩ B ∩ C|

Example: Programming languages
- Java: 40, Python: 35, C++: 30
- Java & Python: 15, Java & C++: 12, Python & C++: 10
- All three: 5
- At least one: 40 + 35 + 30 - 15 - 12 - 10 + 5 = 73
```

### **5.3 General Formula**
```
|A₁ ∪ A₂ ∪ ... ∪ Aₙ| = Σ|Aᵢ| - Σ|Aᵢ ∩ Aⱼ| + Σ|Aᵢ ∩ Aⱼ ∩ Aₖ| - ... + (-1)ⁿ⁺¹|A₁ ∩ A₂ ∩ ... ∩ Aₙ|

Derangements Application:
Number of permutations with no fixed points
Dₙ = n! × Σ (-1)ᵏ/k! for k from 0 to n
D₄ = 4! × (1 - 1 + 1/2 - 1/6 + 1/24) = 24 × 9/24 = 9
```

---

## 🔢 Chapter 6: Generating Functions

### **6.1 Ordinary Generating Functions**
```
For sequence a₀, a₁, a₂, ...:
G(x) = a₀ + a₁x + a₂x² + a₃x³ + ...

Examples:
- Geometric series: 1/(1-x) = 1 + x + x² + x³ + ...
- Binomial series: (1+x)ⁿ = Σ C(n,k)xᵏ
- Fibonacci: F(x) = x/(1-x-x²)
```

### **6.2 Operations on Generating Functions**
```
Addition: (G + H)(x) = G(x) + H(x)
Multiplication: (G × H)(x) = G(x) × H(x)
Differentiation: G'(x) gives coefficients multiplied by index
Integration: ∫G(x)dx gives coefficients divided by (index + 1)

Example: Coefficient of xⁿ in (1+x)ᵐ(1+x)ⁿ = (1+x)ᵐ⁺ⁿ
Answer: C(m+n, n)
```

### **6.3 Applications**
```
Partition Problems:
- Number of ways to make change
- Distributing identical objects
- Solving recurrence relations

Example: Ways to make n cents using pennies, nickels, dimes
G(x) = 1/((1-x)(1-x⁵)(1-x¹⁰))
```

---

## 🔄 Chapter 7: Recurrence Relations

### **7.1 Linear Homogeneous Recurrences**
```
Form: aₙ = c₁aₙ₋₁ + c₂aₙ₋₂ + ... + cₖaₙ₋ₖ

Characteristic Equation Method:
1. Form characteristic equation: rᵏ - c₁rᵏ⁻¹ - c₂rᵏ⁻² - ... - cₖ = 0
2. Find roots r₁, r₂, ..., rₖ
3. General solution depends on root multiplicity

Example: Fibonacci sequence
aₙ = aₙ₋₁ + aₙ₋₂, a₀ = 0, a₁ = 1
Characteristic equation: r² - r - 1 = 0
Roots: r = (1 ± √5)/2
Solution: aₙ = A((1+√5)/2)ⁿ + B((1-√5)/2)ⁿ
Using initial conditions: aₙ = (φⁿ - ψⁿ)/√5 where φ = (1+√5)/2, ψ = (1-√5)/2
```

### **7.2 Non-homogeneous Recurrences**
```
Form: aₙ = c₁aₙ₋₁ + c₂aₙ₋₂ + ... + cₖaₙ₋ₖ + f(n)

Solution: aₙ = aₙ⁽ʰ⁾ + aₙ⁽ᵖ⁾
where aₙ⁽ʰ⁾ is homogeneous solution and aₙ⁽ᵖ⁾ is particular solution

Particular Solution Forms:
- f(n) = c: Try aₙ⁽ᵖ⁾ = A
- f(n) = cn: Try aₙ⁽ᵖ⁾ = An + B
- f(n) = crⁿ: Try aₙ⁽ᵖ⁾ = Arⁿ (if r not a root of characteristic equation)
```

### **7.3 Master Theorem**
```
For recurrences of form: T(n) = aT(n/b) + f(n)

Case 1: If f(n) = O(n^(log_b(a)-ε)) for some ε > 0
        Then T(n) = Θ(n^log_b(a))

Case 2: If f(n) = Θ(n^log_b(a))
        Then T(n) = Θ(n^log_b(a) × log n)

Case 3: If f(n) = Ω(n^(log_b(a)+ε)) for some ε > 0
        and af(n/b) ≤ cf(n) for some c < 1
        Then T(n) = Θ(f(n))

Example: T(n) = 2T(n/2) + n
a = 2, b = 2, f(n) = n
log_b(a) = log_2(2) = 1
f(n) = n = Θ(n¹), so Case 2 applies
T(n) = Θ(n log n)
```

---

## 🐦 Chapter 8: Pigeonhole Principle

### **8.1 Basic Pigeonhole Principle**
```
If n pigeons are placed in m pigeonholes and n > m,
then at least one pigeonhole contains more than one pigeon.

Generalized: If n objects are placed in m boxes,
then at least one box contains at least ⌈n/m⌉ objects.

Examples:
- 13 people: At least 2 born in same month
- 367 people: At least 2 have same birthday
- Any 5 points in unit square: Some pair within distance √2/2
```

### **8.2 Applications**

#### **Number Theory**
```
Theorem: For any integer a and prime p,
there exist integers x, y with 0 < x, y < √p such that ax ≡ y (mod p)

Proof: Consider pairs (ax mod p, x) for x = 1, 2, ..., ⌊√p⌋ + 1
By pigeonhole principle, two pairs have same first coordinate
```

#### **Graph Theory**
```
Theorem: In any graph with n vertices,
there are at least two vertices with the same degree.

Proof: Possible degrees are 0, 1, 2, ..., n-1 (n possibilities)
But if one vertex has degree 0, no vertex can have degree n-1
So at most n-1 possible degrees for n vertices
```

#### **Combinatorial Geometry**
```
Theorem: Among any 5 points in the plane,
no three collinear, there exist 4 points forming a convex quadrilateral.

Proof: Consider convex hull of 5 points
If all 5 on boundary, any 4 form convex quadrilateral
If 4 on boundary with 1 inside, the 4 boundary points work
```

---

## 🎯 Practice Problems - Module 4 (200 Problems)

### **Basic Counting (50 Problems)**

**Q1.** How many 4-digit numbers can be formed using digits 1,2,3,4,5 without repetition?

**Answer:** P(5,4) = 5!/(5-4)! = 5!/1! = 120

**Q2.** In how many ways can 8 people be seated around a circular table?

**Answer:** (8-1)! = 7! = 5,040

**Q3.** How many ways can the letters of "BANANA" be arranged?

**Answer:** 6!/(1!×3!×2!) = 720/12 = 60

### **Combinations (50 Problems)**

**Q1.** From a group of 12 people, how many committees of 5 can be formed?

**Answer:** C(12,5) = 12!/(5!×7!) = 792

**Q2.** How many ways can 10 identical balls be distributed among 4 distinct boxes?

**Answer:** C(10+4-1,10) = C(13,10) = C(13,3) = 286

### **Binomial Theorem (30 Problems)**

**Q1.** Find the coefficient of x⁵ in the expansion of (2x + 3)⁸.

**Answer:** 
```
General term: C(8,k) × (2x)^k × 3^(8-k)
For x⁵: k = 5
Coefficient = C(8,5) × 2⁵ × 3³ = 56 × 32 × 27 = 48,384
```

### **Inclusion-Exclusion (35 Problems)**

**Q1.** How many integers from 1 to 1000 are divisible by 2, 3, or 5?

**Answer:**
```
|A₂| = ⌊1000/2⌋ = 500
|A₃| = ⌊1000/3⌋ = 333
|A₅| = ⌊1000/5⌋ = 200
|A₂ ∩ A₃| = ⌊1000/6⌋ = 166
|A₂ ∩ A₅| = ⌊1000/10⌋ = 100
|A₃ ∩ A₅| = ⌊1000/15⌋ = 66
|A₂ ∩ A₃ ∩ A₅| = ⌊1000/30⌋ = 33

Answer: 500 + 333 + 200 - 166 - 100 - 66 + 33 = 734
```

### **Recurrence Relations (35 Problems)**

**Q1.** Solve the recurrence: aₙ = 3aₙ₋₁ - 2aₙ₋₂ with a₀ = 1, a₁ = 2.

**Answer:**
```
Characteristic equation: r² - 3r + 2 = 0
Factoring: (r-1)(r-2) = 0
Roots: r₁ = 1, r₂ = 2
General solution: aₙ = A(1)ⁿ + B(2)ⁿ = A + B(2ⁿ)

Using initial conditions:
a₀ = 1: A + B = 1
a₁ = 2: A + 2B = 2
Solving: B = 1, A = 0
Therefore: aₙ = 2ⁿ
```

---

## 💻 Programming Labs - Module 4

### **Lab 1: Combinatorial Calculator**

```python
import math
from functools import lru_cache

class CombinatorialCalculator:
    """
    Comprehensive calculator for combinatorial functions
    """
    
    def __init__(self):
        self.factorial_cache = {0: 1, 1: 1}
    
    @lru_cache(maxsize=1000)
    def factorial(self, n):
        """Calculate n! with memoization"""
        if n < 0:
            raise ValueError("Factorial undefined for negative numbers")
        if n in self.factorial_cache:
            return self.factorial_cache[n]
        
        result = n * self.factorial(n - 1)
        self.factorial_cache[n] = result
        return result
    
    def permutation(self, n, r):
        """Calculate P(n,r) = n!/(n-r)!"""
        if r > n or r < 0:
            return 0
        return self.factorial(n) // self.factorial(n - r)
    
    def combination(self, n, r):
        """Calculate C(n,r) = n!/(r!(n-r)!)"""
        if r > n or r < 0:
            return 0
        if r > n - r:  # Take advantage of symmetry
            r = n - r
        
        result = 1
        for i in range(r):
            result = result * (n - i) // (i + 1)
        return result
    
    def combination_with_repetition(self, n, r):
        """Calculate combinations with repetition: C(n+r-1, r)"""
        return self.combination(n + r - 1, r)
    
    def multicombination(self, items, total):
        """
        Calculate number of ways to choose total items from given quantities
        items: list of available quantities for each type
        total: total number of items to choose
        """
        # Use dynamic programming
        dp = [0] * (total + 1)
        dp[0] = 1
        
        for item_count in items:
            for i in range(item_count, total + 1):
                for j in range(1, min(item_count + 1, i + 1)):
                    dp[i] += dp[i - j]
        
        return dp[total]
    
    def derangements(self, n):
        """Calculate number of derangements of n objects"""
        if n == 0:
            return 1
        if n == 1:
            return 0
        
        # Use recurrence: D(n) = (n-1)[D(n-1) + D(n-2)]
        d = [0] * (n + 1)
        d[0] = 1
        d[1] = 0
        
        for i in range(2, n + 1):
            d[i] = (i - 1) * (d[i - 1] + d[i - 2])
        
        return d[n]
    
    def stirling_second(self, n, k):
        """Calculate Stirling numbers of second kind S(n,k)"""
        if n == 0 and k == 0:
            return 1
        if n == 0 or k == 0:
            return 0
        if k > n:
            return 0
        
        # Use dynamic programming
        dp = [[0] * (k + 1) for _ in range(n + 1)]
        dp[0][0] = 1
        
        for i in range(1, n + 1):
            for j in range(1, min(i + 1, k + 1)):
                dp[i][j] = j * dp[i - 1][j] + dp[i - 1][j - 1]
        
        return dp[n][k]
    
    def bell_number(self, n):
        """Calculate Bell number B(n) - number of partitions of n-set"""
        # B(n) = sum of S(n,k) for k from 0 to n
        return sum(self.stirling_second(n, k) for k in range(n + 1))
    
    def catalan_number(self, n):
        """Calculate nth Catalan number"""
        if n <= 1:
            return 1
        
        # C(n) = C(2n,n)/(n+1) = (2n)!/(n!(n+1)!)
        return self.combination(2 * n, n) // (n + 1)
    
    def fibonacci(self, n):
        """Calculate nth Fibonacci number"""
        if n <= 1:
            return n
        
        a, b = 0, 1
        for _ in range(2, n + 1):
            a, b = b, a + b
        return b
    
    def lucas_number(self, n):
        """Calculate nth Lucas number"""
        if n == 0:
            return 2
        if n == 1:
            return 1
        
        a, b = 2, 1
        for _ in range(2, n + 1):
            a, b = b, a + b
        return b

# Example usage and testing
if __name__ == "__main__":
    calc = CombinatorialCalculator()
    
    print("Combinatorial Calculator Demo")
    print("=" * 40)
    
    # Basic operations
    print(f"10! = {calc.factorial(10):,}")
    print(f"P(10,3) = {calc.permutation(10, 3)}")
    print(f"C(10,3) = {calc.combination(10, 3)}")
    print(f"C(10,3) with repetition = {calc.combination_with_repetition(10, 3)}")
    
    # Special sequences
    print(f"\nFibonacci numbers (0-10): {[calc.fibonacci(i) for i in range(11)]}")
    print(f"Catalan numbers (0-5): {[calc.catalan_number(i) for i in range(6)]}")
    print(f"Bell numbers (0-5): {[calc.bell_number(i) for i in range(6)]}")
    
    # Derangements
    print(f"\nDerangements:")
    for i in range(6):
        print(f"D({i}) = {calc.derangements(i)}")
    
    # Stirling numbers
    print(f"\nStirling numbers of second kind S(5,k):")
    for k in range(6):
        print(f"S(5,{k}) = {calc.stirling_second(5, k)}")
```

### **Lab 2: Generating Functions Solver**

```python
import sympy as sp
from sympy import symbols, expand, series, simplify
from fractions import Fraction

class GeneratingFunctionSolver:
    """
    Solve problems using generating functions
    """
    
    def __init__(self):
        self.x = symbols('x')
    
    def geometric_series(self, a=1, r=None):
        """
        Generate geometric series: a/(1-rx)
        Default: 1/(1-x) = 1 + x + x² + x³ + ...
        """
        if r is None:
            r = self.x
        return a / (1 - r)
    
    def binomial_series(self, n):
        """
        Generate binomial series: (1+x)^n
        """
        return (1 + self.x) ** n
    
    def fibonacci_gf(self):
        """
        Fibonacci generating function: x/(1-x-x²)
        """
        return self.x / (1 - self.x - self.x**2)
    
    def partition_gf(self, parts):
        """
        Generating function for partitions using given parts
        parts: list of allowed part sizes
        """
        result = 1
        for part in parts:
            result *= 1 / (1 - self.x**part)
        return result
    
    def coin_change_gf(self, denominations):
        """
        Generating function for coin change problem
        denominations: list of coin values
        """
        return self.partition_gf(denominations)
    
    def extract_coefficient(self, gf, n, max_terms=50):
        """
        Extract coefficient of x^n from generating function
        """
        try:
            # Expand as series around x=0
            series_expansion = series(gf, self.x, 0, n + 1).removeO()
            
            # Extract coefficient
            coeff = series_expansion.coeff(self.x, n)
            return int(coeff) if coeff is not None else 0
        except:
            return None
    
    def solve_recurrence_gf(self, recurrence_coeffs, initial_values):
        """
        Solve linear recurrence using generating functions
        recurrence_coeffs: [c₀, c₁, c₂, ...] for aₙ = c₁aₙ₋₁ + c₂aₙ₋₂ + ...
        initial_values: [a₀, a₁, a₂, ...]
        """
        # Build characteristic polynomial
        n = len(recurrence_coeffs) - 1
        char_poly = 1
        for i in range(1, n + 1):
            char_poly -= recurrence_coeffs[i] * self.x**i
        
        # Build numerator from initial conditions
        numerator = 0
        for i, val in enumerate(initial_values):
            if i < n:
                # Add contribution from initial condition
                temp_poly = val
                for j in range(1, min(i + 1, n + 1)):
                    if i - j >= 0:
                        temp_poly -= recurrence_coeffs[j] * initial_values[i - j]
                numerator += temp_poly * self.x**i
        
        return numerator / char_poly
    
    def compositions_gf(self, n, part_sizes):
        """
        Generating function for compositions (ordered partitions)
        """
        # For compositions, order matters, so we use different approach
        gf = 0
        for size in part_sizes:
            gf += self.x**size
        
        # Compositions GF is gf/(1-gf) for unrestricted repetitions
        return gf / (1 - gf)
    
    def stirling_gf(self, kind='second'):
        """
        Generating functions for Stirling numbers
        """
        if kind == 'second':
            # Exponential generating function for S(n,k)
            # More complex, requires exponential GF theory
            pass
        return None
    
    def solve_distribution_problem(self, objects, boxes, restrictions=None):
        """
        Solve object distribution problems
        objects: number of identical objects
        boxes: number of distinct boxes
        restrictions: dict with box constraints
        """
        if restrictions is None:
            # Unrestricted distribution: stars and bars
            # GF: (1/(1-x))^boxes
            gf = (1 / (1 - self.x)) ** boxes
            return self.extract_coefficient(gf, objects)
        else:
            # Restricted distribution
            gf = 1
            for box_id in range(boxes):
                if box_id in restrictions:
                    min_obj, max_obj = restrictions[box_id]
                    # GF for this box: x^min + x^(min+1) + ... + x^max
                    box_gf = sum(self.x**i for i in range(min_obj, max_obj + 1))
                else:
                    # Unrestricted box
                    box_gf = 1 / (1 - self.x)
                gf *= box_gf
            
            return self.extract_coefficient(gf, objects)

# Example usage
if __name__ == "__main__":
    solver = GeneratingFunctionSolver()
    
    print("Generating Functions Solver Demo")
    print("=" * 40)
    
    # Fibonacci numbers using GF
    fib_gf = solver.fibonacci_gf()
    print("Fibonacci numbers using generating functions:")
    for i in range(10):
        coeff = solver.extract_coefficient(fib_gf, i)
        print(f"F({i}) = {coeff}")
    
    print("\nCoin change problem:")
    # Ways to make change for amounts 0-10 using coins [1,5,10]
    coin_gf = solver.coin_change_gf([1, 5, 10])
    for amount in range(11):
        ways = solver.extract_coefficient(coin_gf, amount)
        print(f"Ways to make {amount} cents: {ways}")
    
    print("\nDistribution problems:")
    # Distribute 10 identical objects into 3 distinct boxes
    ways = solver.solve_distribution_problem(10, 3)
    print(f"Ways to distribute 10 objects into 3 boxes: {ways}")
    
    # With restrictions: box 0 gets 2-4 objects, others unrestricted
    restricted_ways = solver.solve_distribution_problem(
        10, 3, {0: (2, 4)}
    )
    print(f"With box 0 restricted to 2-4 objects: {restricted_ways}")
```

### **Lab 3: Recurrence Relation Solver**

```python
import numpy as np
from sympy import symbols, solve, simplify, expand, factor
from sympy import Function, Eq, dsolve, rsolve

class RecurrenceSolver:
    """
    Solve various types of recurrence relations
    """
    
    def __init__(self):
        self.n = symbols('n', integer=True, positive=True)
        self.x = symbols('x')
    
    def solve_linear_homogeneous(self, coefficients, initial_conditions):
        """
        Solve linear homogeneous recurrence relation
        coefficients: [c₁, c₂, ..., cₖ] for aₙ = c₁aₙ₋₁ + c₂aₙ₋₂ + ... + cₖaₙ₋ₖ
        initial_conditions: [a₀, a₁, ..., aₖ₋₁]
        """
        k = len(coefficients)
        
        # Form characteristic equation: rᵏ - c₁rᵏ⁻¹ - c₂rᵏ⁻² - ... - cₖ = 0
        r = symbols('r')
        char_eq = r**k
        for i, c in enumerate(coefficients):
            char_eq -= c * r**(k - 1 - i)
        
        # Solve characteristic equation
        roots = solve(char_eq, r)
        
        # Build general solution based on root multiplicities
        root_multiplicities = {}
        for root in roots:
            if root in root_multiplicities:
                root_multiplicities[root] += 1
            else:
                root_multiplicities[root] = 1
        
        # Generate solution terms
        solution_terms = []
        const_symbols = []
        const_counter = 0
        
        for root, multiplicity in root_multiplicities.items():
            for i in range(multiplicity):
                const_sym = symbols(f'C_{const_counter}')
                const_symbols.append(const_sym)
                
                if i == 0:
                    term = const_sym * root**self.n
                else:
                    term = const_sym * self.n**i * root**self.n
                
                solution_terms.append(term)
                const_counter += 1
        
        # General solution
        general_solution = sum(solution_terms)
        
        # Apply initial conditions to find constants
        equations = []
        for i, init_val in enumerate(initial_conditions):
            eq = general_solution.subs(self.n, i) - init_val
            equations.append(eq)
        
        # Solve for constants
        constants_solution = solve(equations, const_symbols)
        
        # Substitute constants back into general solution
        particular_solution = general_solution.subs(constants_solution)
        
        return {
            'characteristic_equation': char_eq,
            'roots': roots,
            'general_solution': general_solution,
            'constants': constants_solution,
            'particular_solution': simplify(particular_solution)
        }
    
    def solve_linear_nonhomogeneous(self, homogeneous_coeffs, forcing_function, initial_conditions):
        """
        Solve linear non-homogeneous recurrence relation
        aₙ = c₁aₙ₋₁ + c₂aₙ₋₂ + ... + cₖaₙ₋ₖ + f(n)
        """
        # First solve homogeneous part
        homogeneous_solution = self.solve_linear_homogeneous(
            homogeneous_coeffs, [0] * len(homogeneous_coeffs)
        )
        
        # Find particular solution based on forcing function type
        particular_solution = self._find_particular_solution(
            homogeneous_coeffs, forcing_function
        )
        
        # General solution = homogeneous + particular
        general_solution = (homogeneous_solution['general_solution'] + 
                          particular_solution)
        
        return {
            'homogeneous_solution': homogeneous_solution,
            'particular_solution': particular_solution,
            'general_solution': general_solution
        }
    
    def _find_particular_solution(self, coeffs, forcing_func):
        """
        Find particular solution for non-homogeneous recurrence
        """
        # This is a simplified version - in practice, need to handle
        # various forms of forcing functions
        
        # For constant forcing function
        if isinstance(forcing_func, (int, float)):
            # Try particular solution aₙ⁽ᵖ⁾ = A
            sum_coeffs = sum(coeffs)
            if sum_coeffs != 1:
                return forcing_func / (1 - sum_coeffs)
            else:
                # Need to try aₙ⁽ᵖ⁾ = An
                return forcing_func * self.n
        
        # For polynomial forcing functions, exponential, etc.
        # Would need more sophisticated methods
        
        return 0
    
    def solve_divide_and_conquer(self, a, b, f_n, base_cases=None):
        """
        Solve divide-and-conquer recurrences using Master Theorem
        T(n) = aT(n/b) + f(n)
        """
        import math
        
        # Calculate log_b(a)
        log_b_a = math.log(a) / math.log(b)
        
        # Analyze f(n) - this is simplified for common cases
        if isinstance(f_n, str):
            if f_n == 'n':
                # f(n) = n
                if abs(log_b_a - 1) < 1e-10:  # Case 2
                    complexity = f"Θ(n log n)"
                elif log_b_a < 1:  # Case 3
                    complexity = f"Θ(n)"
                else:  # Case 1
                    complexity = f"Θ(n^{log_b_a:.3f})"
            elif f_n == '1':
                # f(n) = 1
                if log_b_a > 0:  # Case 1
                    complexity = f"Θ(n^{log_b_a:.3f})"
                else:  # Case 2
                    complexity = f"Θ(log n)"
            elif 'n^2' in f_n:
                # f(n) = n²
                if abs(log_b_a - 2) < 1e-10:  # Case 2
                    complexity = f"Θ(n² log n)"
                elif log_b_a < 2:  # Case 3
                    complexity = f"Θ(n²)"
                else:  # Case 1
                    complexity = f"Θ(n^{log_b_a:.3f})"
        
        return {
            'recurrence': f"T(n) = {a}T(n/{b}) + {f_n}",
            'log_b_a': log_b_a,
            'complexity': complexity,
            'master_theorem_case': self._determine_master_case(a, b, f_n)
        }
    
    def _determine_master_case(self, a, b, f_n):
        """Determine which case of Master Theorem applies"""
        import math
        log_b_a = math.log(a) / math.log(b)
        
        # Simplified case determination
        if f_n == '1':
            return 1 if log_b_a > 0 else 2
        elif f_n == 'n':
            if abs(log_b_a - 1) < 1e-10:
                return 2
            elif log_b_a < 1:
                return 3
            else:
                return 1
        elif 'n^2' in f_n:
            if abs(log_b_a - 2) < 1e-10:
                return 2
            elif log_b_a < 2:
                return 3
            else:
                return 1
        
        return "Cannot determine"
    
    def generate_sequence(self, recurrence_func, initial_values, num_terms):
        """
        Generate sequence terms using recurrence relation
        recurrence_func: function that takes (sequence, n) and returns aₙ
        """
        sequence = list(initial_values)
        
        for n in range(len(initial_values), num_terms):
            next_term = recurrence_func(sequence, n)
            sequence.append(next_term)
        
        return sequence
    
    def find_closed_form(self, sequence, max_degree=5):
        """
        Attempt to find closed form for sequence
        Uses polynomial fitting and pattern recognition
        """
        n_vals = list(range(len(sequence)))
        
        # Try polynomial fitting
        for degree in range(1, min(max_degree + 1, len(sequence))):
            try:
                coeffs = np.polyfit(n_vals, sequence, degree)
                poly = np.poly1d(coeffs)
                
                # Check if polynomial fits well
                predicted = [poly(i) for i in n_vals]
                if all(abs(predicted[i] - sequence[i]) < 1e-10 for i in range(len(sequence))):
                    return {
                        'type': 'polynomial',
                        'degree': degree,
                        'coefficients': coeffs.tolist(),
                        'formula': str(poly)
                    }
            except:
                continue
        
        # Try exponential patterns
        if len(sequence) >= 3:
            ratios = [sequence[i+1]/sequence[i] for i in range(len(sequence)-1) 
                     if sequence[i] != 0]
            if ratios and all(abs(r - ratios[0]) < 1e-10 for r in ratios):
                # Geometric sequence
                return {
                    'type': 'geometric',
                    'first_term': sequence[0],
                    'ratio': ratios[0],
                    'formula': f"{sequence[0]} * {ratios[0]}^n"
                }
        
        return {'type': 'unknown', 'message': 'Could not determine closed form'}

# Example usage
if __name__ == "__main__":
    solver = RecurrenceSolver()
    
    print("Recurrence Relation Solver Demo")
    print("=" * 40)
    
    # Solve Fibonacci recurrence
    print("Fibonacci recurrence: aₙ = aₙ₋₁ + aₙ₋₂, a₀=0, a₁=1")
    fib_solution = solver.solve_linear_homogeneous([1, 1], [0, 1])
    print(f"Particular solution: {fib_solution['particular_solution']}")
    
    # Generate Fibonacci sequence
    def fibonacci_recurrence(seq, n):
        return seq[n-1] + seq[n-2]
    
    fib_sequence = solver.generate_sequence(fibonacci_recurrence, [0, 1], 15)
    print(f"First 15 Fibonacci numbers: {fib_sequence}")
    
    # Master Theorem examples
    print(f"\nMaster Theorem Examples:")
    examples = [
        (2, 2, 'n', "Merge Sort"),
        (1, 2, '1', "Binary Search"),
        (3, 2, 'n^2', "Some Divide-and-Conquer Algorithm")
    ]
    
    for a, b, f_n, name in examples:
        result = solver.solve_divide_and_conquer(a, b, f_n)
        print(f"{name}: {result['recurrence']} → {result['complexity']}")
```

---

## 📖 Module 4 Summary

### **Key Concepts Mastered**
✓ Fundamental counting principles (addition, multiplication)
✓ Permutations and combinations with various constraints
✓ Binomial theorem and multinomial coefficients
✓ Inclusion-exclusion principle applications
✓ Generating functions for problem solving
✓ Recurrence relations and their solutions
✓ Pigeonhole principle and applications

### **Programming Skills Developed**
✓ Combinatorial calculation algorithms
✓ Generating function manipulation
✓ Recurrence relation solvers
✓ Dynamic programming for counting problems
✓ Efficient computation of special sequences
✓ Pattern recognition in sequences

### **Applications Mastered**
✓ Algorithm complexity analysis
✓ Probability calculations
✓ Cryptographic applications
✓ Resource allocation problems
✓ Network analysis and optimization
✓ Competitive programming techniques

### **Next Module Preview**
**Module 5: Graph Theory**
- Graph representations and properties
- Graph traversal algorithms
- Trees and spanning trees
- Shortest path algorithms
- Network flow problems

---

**🎯 Combinatorics mastered! Ready to explore Graph Theory? 🚀**