# Module 2: Boolean Algebra and Logic Simplification Complete Guide
## 🧮 Mathematical Foundation of Digital Logic

### 🎯 Module Overview
- **Duration**: 2 weeks (30 hours)
- **Difficulty**: Intermediate
- **Prerequisites**: Number systems, basic algebra
- **Applications**: Logic circuit design, optimization, digital systems

## 📋 Learning Objectives
- Master Boolean algebra laws and theorems
- Simplify Boolean expressions using algebraic methods
- Apply Karnaugh maps for logic minimization
- Understand don't care conditions
- Design optimized logic circuits
- Implement Quine-McCluskey algorithm

## 🔤 Topic 1: Boolean Algebra Fundamentals

### 1.1 Boolean Variables and Operations
```
Boolean Variable: Can take only two values (0 or 1, FALSE or TRUE)

Basic Operations:
1. AND Operation (·, ∧, &)
   A · B = A AND B
   0 · 0 = 0    1 · 0 = 0
   0 · 1 = 0    1 · 1 = 1

2. OR Operation (+, ∨, |)
   A + B = A OR B
   0 + 0 = 0    1 + 0 = 1
   0 + 1 = 1    1 + 1 = 1

3. NOT Operation (', ¯, ~, !)
   A' = NOT A
   0' = 1
   1' = 0

Truth Tables:
A | B | A·B | A+B | A'
--|---|-----|-----|---
0 | 0 |  0  |  0  | 1
0 | 1 |  0  |  1  | 1
1 | 0 |  0  |  1  | 0
1 | 1 |  1  |  1  | 0
```

### 1.2 Boolean Expressions
```
Literal: A variable or its complement (A, A', B, B')
Product Term: AND of literals (A·B', A'·B·C)
Sum Term: OR of literals (A+B', A'+B+C)

Standard Forms:
1. Sum of Products (SOP): OR of product terms
   F = A·B + A'·B' + A·B'·C

2. Product of Sums (POS): AND of sum terms
   F = (A+B)·(A'+B')·(A+B'+C)

Canonical Forms:
1. Canonical SOP (Minterm): Each product term contains all variables
   F = A'·B'·C + A·B'·C' + A·B·C

2. Canonical POS (Maxterm): Each sum term contains all variables
   F = (A+B+C)·(A'+B+C')·(A'+B'+C')
```

### 1.3 Minterms and Maxterms
```
For n variables, there are 2^n minterms and 2^n maxterms

3-Variable Example (A, B, C):
Minterm | Binary | Decimal | Expression
   m₀   |  000   |    0    |  A'·B'·C'
   m₁   |  001   |    1    |  A'·B'·C
   m₂   |  010   |    2    |  A'·B·C'
   m₃   |  011   |    3    |  A'·B·C
   m₄   |  100   |    4    |  A·B'·C'
   m₅   |  101   |    5    |  A·B'·C
   m₆   |  110   |    6    |  A·B·C'
   m₇   |  111   |    7    |  A·B·C

Maxterm | Binary | Decimal | Expression
   M₀   |  000   |    0    |  A+B+C
   M₁   |  001   |    1    |  A+B+C'
   M₂   |  010   |    2    |  A+B'+C
   M₃   |  011   |    3    |  A+B'+C'
   M₄   |  100   |    4    |  A'+B+C
   M₅   |  101   |    5    |  A'+B+C'
   M₆   |  110   |    6    |  A'+B'+C
   M₇   |  111   |    7    |  A'+B'+C'

Relationship: mᵢ = (Mᵢ)'
```

## 📐 Topic 2: Boolean Laws and Theorems

### 2.1 Basic Laws
```
Identity Laws:
A + 0 = A
A · 1 = A

Null Laws:
A + 1 = 1
A · 0 = 0

Idempotent Laws:
A + A = A
A · A = A

Complement Laws:
A + A' = 1
A · A' = 0

Involution Law:
(A')' = A
```

### 2.2 Commutative, Associative, and Distributive Laws
```
Commutative Laws:
A + B = B + A
A · B = B · A

Associative Laws:
(A + B) + C = A + (B + C)
(A · B) · C = A · (B · C)

Distributive Laws:
A · (B + C) = A · B + A · C
A + (B · C) = (A + B) · (A + C)

Note: Second distributive law is unique to Boolean algebra
```

### 2.3 De Morgan's Laws
```
De Morgan's Laws:
(A + B)' = A' · B'
(A · B)' = A' + B'

Extended De Morgan's Laws:
(A + B + C + ...)' = A' · B' · C' · ...
(A · B · C · ...)' = A' + B' + C' + ...

Applications:
- Converting AND to OR gates
- Converting OR to AND gates
- NAND and NOR gate implementations
```

### 2.4 Additional Theorems
```
Absorption Laws:
A + A · B = A
A · (A + B) = A

Consensus Theorem:
A · B + A' · C + B · C = A · B + A' · C
(A + B) · (A' + C) · (B + C) = (A + B) · (A' + C)

Simplification Theorems:
A + A' · B = A + B
A · (A' + B) = A · B

Transposition Theorem:
A · B + A' · C = (A + C) · (A' + B)
```

## 🔧 Topic 3: Boolean Expression Simplification

### 3.1 Algebraic Simplification
```
Method: Apply Boolean laws systematically

Example 1: Simplify F = A·B + A·B' + A'·B
F = A·B + A·B' + A'·B
F = A·(B + B') + A'·B    [Distributive law]
F = A·1 + A'·B           [Complement law]
F = A + A'·B             [Identity law]
F = A + B                [Simplification theorem]

Example 2: Simplify F = (A + B)·(A + B')·(A' + B)
F = (A + B)·(A + B')·(A' + B)
F = (A + B·B')·(A' + B)  [Distributive law]
F = (A + 0)·(A' + B)     [Complement law]
F = A·(A' + B)           [Identity law]
F = A·A' + A·B           [Distributive law]
F = 0 + A·B              [Complement law]
F = A·B                  [Identity law]

Example 3: Simplify F = A'·B·C + A·B'·C + A·B·C' + A·B·C
F = A'·B·C + A·B'·C + A·B·C' + A·B·C
F = A'·B·C + A·B'·C + A·B·(C' + C)  [Distributive law]
F = A'·B·C + A·B'·C + A·B·1         [Complement law]
F = A'·B·C + A·B'·C + A·B           [Identity law]
F = B·C·(A' + A) + A·B              [Distributive law]
F = B·C·1 + A·B                     [Complement law]
F = B·C + A·B                       [Identity law]
F = B·(C + A)                       [Distributive law]
```

### 3.2 Truth Table Method
```
Steps:
1. Create truth table for the function
2. Identify rows where F = 1 (minterms)
3. Write canonical SOP form
4. Simplify using Boolean algebra

Example: F(A,B,C) with F = 1 for rows 1, 3, 5, 7

A | B | C | F
--|---|---|---
0 | 0 | 0 | 0
0 | 0 | 1 | 1  ← m₁
0 | 1 | 0 | 0
0 | 1 | 1 | 1  ← m₃
1 | 0 | 0 | 0
1 | 0 | 1 | 1  ← m₅
1 | 1 | 0 | 0
1 | 1 | 1 | 1  ← m₇

Canonical SOP: F = m₁ + m₃ + m₅ + m₇
F = A'·B'·C + A'·B·C + A·B'·C + A·B·C
F = C·(A'·B' + A'·B + A·B' + A·B)
F = C·(A'·(B' + B) + A·(B' + B))
F = C·(A'·1 + A·1)
F = C·(A' + A)
F = C·1
F = C
```

## 🗺️ Topic 4: Karnaugh Maps (K-Maps)

### 4.1 K-Map Fundamentals
```
Karnaugh Map: Graphical method for Boolean simplification
- Adjacent cells differ by only one variable
- Uses Gray code ordering
- Simplifies by grouping adjacent 1's

2-Variable K-Map:
     B
   0   1
A 0 m₀ m₁
  1 m₂ m₃

3-Variable K-Map:
      BC
    00 01 11 10
A 0  m₀ m₁ m₃ m₂
  1  m₄ m₅ m₇ m₆

4-Variable K-Map:
       CD
     00 01 11 10
AB 00 m₀ m₁ m₃ m₂
   01 m₄ m₅ m₇ m₆
   11 m₁₂m₁₃m₁₅m₁₄
   10 m₈ m₉ m₁₁m₁₀

Note: Gray code ensures adjacency
```

### 4.2 K-Map Grouping Rules
```
Grouping Rules:
1. Group size must be power of 2 (1, 2, 4, 8, 16)
2. Groups should be as large as possible
3. Minimize number of groups
4. Groups can overlap
5. Groups can wrap around edges
6. Each 1 must be covered by at least one group

Group Sizes and Variable Elimination:
- Group of 1: No variables eliminated
- Group of 2: 1 variable eliminated
- Group of 4: 2 variables eliminated
- Group of 8: 3 variables eliminated
- Group of 16: 4 variables eliminated

Example: 3-Variable K-Map
      BC
    00 01 11 10
A 0  1  0  1  1   ← Group of 4 (eliminates A and C)
  1  0  0  1  1   ← Group of 2 (eliminates A)

Groups:
- Group 1: m₀, m₂, m₆, m₄ → B'
- Group 2: m₃, m₇ → B·C

Simplified: F = B' + B·C = B' + C (using absorption)
```

### 4.3 K-Map Examples

#### Example 1: 3-Variable Function
```
F(A,B,C) = Σm(0,2,4,5,6)

K-Map:
      BC
    00 01 11 10
A 0  1  0  0  1   
  1  1  1  0  1   

Groups:
- Group 1: m₀, m₂, m₄, m₆ (size 4) → B'
- Group 2: m₄, m₅ (size 2) → A·B'

Wait, m₄ is covered twice. Let's regroup:
- Group 1: m₀, m₂ (size 2) → A'·C'
- Group 2: m₄, m₅, m₆ (size 2+1, not valid)

Correct grouping:
- Group 1: m₀, m₂, m₄, m₆ (size 4) → B'
- Group 2: m₄, m₅ (size 2) → A·B'

Since m₄ is in both groups, we can use just Group 1:
F = B'

Verification: F = B' covers all required minterms
```

#### Example 2: 4-Variable Function
```
F(A,B,C,D) = Σm(0,1,2,5,8,9,10)

K-Map:
       CD
     00 01 11 10
AB 00  1  1  0  1   
   01  0  1  0  0   
   11  0  0  0  0   
   10  1  1  0  1   

Groups:
- Group 1: m₀, m₁, m₈, m₉ (size 4) → B'·D'
- Group 2: m₀, m₂, m₈, m₁₀ (size 4) → C'·D'
- Group 3: m₁, m₅ (size 2) → B'·C·D

But m₀, m₁, m₈ are covered by multiple groups.
Optimal grouping:
- Group 1: m₀, m₁, m₈, m₉ (size 4) → B'·D'
- Group 2: m₂, m₁₀ (size 2) → A'·B·C'·D' + A·B'·C'·D'

Actually, let's be more systematic:
- Group 1: m₀, m₂, m₈, m₁₀ (size 4) → C'·D'
- Group 2: m₁, m₅ (size 2) → B'·C·D

F = C'·D' + B'·C·D
```

### 4.4 Don't Care Conditions
```
Don't Care (X or d): Output can be either 0 or 1
- Use X = 1 if it helps create larger groups
- Use X = 0 if it doesn't help

Example: F(A,B,C) = Σm(1,3,7) + Σd(0,2,5)

K-Map with don't cares:
      BC
    00 01 11 10
A 0  X  1  1  X   
  1  0  X  1  0   

Treating X's optimally:
- Set m₀ = 1, m₂ = 1, m₅ = 0 for better grouping

      BC
    00 01 11 10
A 0  1  1  1  1   ← Group of 4
  1  0  0  1  0   

Groups:
- Group 1: m₀, m₁, m₂, m₃ (size 4) → A'

F = A'

This is much simpler than without don't cares!
```

## 🔍 Topic 5: Quine-McCluskey Method

### 5.1 Tabular Minimization Method
```
Systematic method for large number of variables
Steps:
1. List all minterms in binary
2. Group by number of 1's
3. Compare adjacent groups for single bit difference
4. Create prime implicant table
5. Find essential prime implicants
6. Select minimum set of prime implicants

Example: F(A,B,C,D) = Σm(0,1,2,5,6,7,8,9,10,14)

Step 1: List minterms
Group 0 (0 ones): 0000 (0)
Group 1 (1 one):  0001 (1), 0010 (2), 1000 (8)
Group 2 (2 ones): 0101 (5), 0110 (6), 1001 (9), 1010 (10)
Group 3 (3 ones): 0111 (7), 1110 (14)

Step 2: First combination
Group 0-1: 000- (0,1), 00-0 (0,2), -000 (0,8)
Group 1-2: 0-01 (1,5), 0-10 (2,6), 100- (8,9), 10-0 (8,10)
Group 2-3: 011- (6,7), -110 (6,14), 1-10 (10,14)

Step 3: Second combination
Group 0-1 to 1-2: 0--0 (0,1,2,6) - Not valid (different positions)
Continue systematically...

This method guarantees minimum solution but is tedious for manual calculation.
```

### 5.2 Prime Implicant Table
```
Prime Implicant: Cannot be combined with any other implicant
Essential Prime Implicant: Covers at least one minterm not covered by others

Example Prime Implicant Table:
Minterms:     0  1  2  5  6  7  8  9 10 14
PI₁: A'B'     ×  ×  ×
PI₂: B'D'     ×     ×        ×     ×
PI₃: AB'D'              ×     ×
PI₄: A'BC     ×     ×  ×
PI₅: ACD                    ×        ×

Essential PIs:
- PI₁ is essential (only covers minterm 1)
- PI₅ is essential (only covers minterm 14)

Minimum cover: Select minimum set of PIs to cover all minterms
```

## 💻 Programming Implementation

### Boolean Expression Simplifier
```python
class BooleanSimplifier:
    def __init__(self):
        self.variables = []
        self.minterms = []
        self.dont_cares = []
    
    def set_function(self, variables, minterms, dont_cares=None):
        """Set the Boolean function to simplify"""
        self.variables = variables
        self.minterms = minterms
        self.dont_cares = dont_cares or []
    
    def generate_truth_table(self):
        """Generate truth table for the function"""
        n = len(self.variables)
        table = []
        
        for i in range(2**n):
            row = []
            binary = format(i, f'0{n}b')
            
            for bit in binary:
                row.append(int(bit))
            
            if i in self.minterms:
                row.append(1)
            elif i in self.dont_cares:
                row.append('X')
            else:
                row.append(0)
            
            table.append(row)
        
        return table
    
    def print_truth_table(self):
        """Print formatted truth table"""
        table = self.generate_truth_table()
        
        # Header
        header = " | ".join(self.variables) + " | F"
        print(header)
        print("-" * len(header))
        
        # Rows
        for i, row in enumerate(table):
            row_str = " | ".join(str(x) for x in row[:-1]) + f" | {row[-1]}"
            print(row_str)
    
    def to_canonical_sop(self):
        """Convert to canonical Sum of Products form"""
        terms = []
        
        for minterm in self.minterms:
            n = len(self.variables)
            binary = format(minterm, f'0{n}b')
            term = []
            
            for i, bit in enumerate(binary):
                if bit == '1':
                    term.append(self.variables[i])
                else:
                    term.append(f"{self.variables[i]}'")
            
            terms.append("·".join(term))
        
        return " + ".join(terms)
    
    def to_canonical_pos(self):
        """Convert to canonical Product of Sums form"""
        maxterms = []
        n = len(self.variables)
        
        for i in range(2**n):
            if i not in self.minterms and i not in self.dont_cares:
                binary = format(i, f'0{n}b')
                term = []
                
                for j, bit in enumerate(binary):
                    if bit == '0':
                        term.append(self.variables[j])
                    else:
                        term.append(f"{self.variables[j]}'")
                
                maxterms.append("(" + "+".join(term) + ")")
        
        return "·".join(maxterms)

class KMapSimplifier:
    def __init__(self, variables):
        self.variables = variables
        self.n = len(variables)
        self.kmap = {}
    
    def set_minterms(self, minterms, dont_cares=None):
        """Set minterms and don't cares for K-map"""
        dont_cares = dont_cares or []
        
        # Initialize K-map
        for i in range(2**self.n):
            if i in minterms:
                self.kmap[i] = 1
            elif i in dont_cares:
                self.kmap[i] = 'X'
            else:
                self.kmap[i] = 0
    
    def print_kmap_2var(self):
        """Print 2-variable K-map"""
        if self.n != 2:
            return
        
        print(f"     {self.variables[1]}")
        print("   0   1")
        print(f"{self.variables[0]} 0 {self.kmap[0]:^3} {self.kmap[1]:^3}")
        print(f"  1 {self.kmap[2]:^3} {self.kmap[3]:^3}")
    
    def print_kmap_3var(self):
        """Print 3-variable K-map"""
        if self.n != 3:
            return
        
        print(f"      {self.variables[1]}{self.variables[2]}")
        print("    00 01 11 10")
        print(f"{self.variables[0]} 0 {self.kmap[0]:^2} {self.kmap[1]:^2} {self.kmap[3]:^2} {self.kmap[2]:^2}")
        print(f"  1 {self.kmap[4]:^2} {self.kmap[5]:^2} {self.kmap[7]:^2} {self.kmap[6]:^2}")
    
    def print_kmap_4var(self):
        """Print 4-variable K-map"""
        if self.n != 4:
            return
        
        print(f"       {self.variables[2]}{self.variables[3]}")
        print("     00 01 11 10")
        print(f"{self.variables[0]}{self.variables[1]} 00 {self.kmap[0]:^2} {self.kmap[1]:^2} {self.kmap[3]:^2} {self.kmap[2]:^2}")
        print(f"   01 {self.kmap[4]:^2} {self.kmap[5]:^2} {self.kmap[7]:^2} {self.kmap[6]:^2}")
        print(f"   11 {self.kmap[12]:^2} {self.kmap[13]:^2} {self.kmap[15]:^2} {self.kmap[14]:^2}")
        print(f"   10 {self.kmap[8]:^2} {self.kmap[9]:^2} {self.kmap[11]:^2} {self.kmap[10]:^2}")
    
    def find_groups(self):
        """Find optimal groups in K-map (simplified version)"""
        # This is a simplified implementation
        # Full implementation would require complex grouping algorithms
        groups = []
        ones = [i for i, v in self.kmap.items() if v == 1 or v == 'X']
        
        # Find groups of size 4, 2, 1
        # This is a basic implementation - real algorithm is more complex
        return groups

# Example usage
simplifier = BooleanSimplifier()
simplifier.set_function(['A', 'B', 'C'], [1, 3, 5, 7], [0, 2])

print("Truth Table:")
simplifier.print_truth_table()

print(f"\nCanonical SOP: {simplifier.to_canonical_sop()}")
print(f"Canonical POS: {simplifier.to_canonical_pos()}")

# K-map example
kmap = KMapSimplifier(['A', 'B', 'C'])
kmap.set_minterms([1, 3, 5, 7], [0, 2])
print("\nK-Map:")
kmap.print_kmap_3var()
```

### Boolean Expression Evaluator
```python
class BooleanEvaluator:
    def __init__(self):
        self.operators = {
            'AND': lambda x, y: x and y,
            'OR': lambda x, y: x or y,
            'NOT': lambda x: not x,
            'NAND': lambda x, y: not (x and y),
            'NOR': lambda x, y: not (x or y),
            'XOR': lambda x, y: x != y,
            'XNOR': lambda x, y: x == y
        }
    
    def evaluate_expression(self, expression, variables):
        """Evaluate Boolean expression with given variable values"""
        # Simple expression evaluator
        # Replace variables with their values
        expr = expression
        
        for var, value in variables.items():
            expr = expr.replace(var, str(value))
        
        # Replace Boolean operators
        expr = expr.replace('·', ' and ')
        expr = expr.replace('+', ' or ')
        expr = expr.replace("'", ' not ')
        
        try:
            return eval(expr)
        except:
            return None
    
    def verify_equivalence(self, expr1, expr2, variables):
        """Verify if two Boolean expressions are equivalent"""
        var_names = list(variables.keys())
        n = len(var_names)
        
        for i in range(2**n):
            # Generate all possible combinations
            values = {}
            binary = format(i, f'0{n}b')
            
            for j, var in enumerate(var_names):
                values[var] = int(binary[j])
            
            result1 = self.evaluate_expression(expr1, values)
            result2 = self.evaluate_expression(expr2, values)
            
            if result1 != result2:
                return False, values
        
        return True, None
    
    def generate_truth_table_from_expression(self, expression, variables):
        """Generate truth table from Boolean expression"""
        var_names = list(variables.keys())
        n = len(var_names)
        table = []
        
        for i in range(2**n):
            row = []
            values = {}
            binary = format(i, f'0{n}b')
            
            for j, var in enumerate(var_names):
                bit_value = int(binary[j])
                row.append(bit_value)
                values[var] = bit_value
            
            result = self.evaluate_expression(expression, values)
            row.append(int(result) if result is not None else 'E')
            table.append(row)
        
        return table

# Example usage
evaluator = BooleanEvaluator()

# Test expression evaluation
variables = {'A': 1, 'B': 0, 'C': 1}
expression = "A·B + A'·C"
result = evaluator.evaluate_expression(expression, variables)
print(f"Expression: {expression}")
print(f"Variables: {variables}")
print(f"Result: {result}")

# Test equivalence
expr1 = "A·B + A·B'"
expr2 = "A"
variables = {'A': 0, 'B': 0}  # Just to define variable names
equivalent, counterexample = evaluator.verify_equivalence(expr1, expr2, variables)
print(f"\nExpressions '{expr1}' and '{expr2}' are equivalent: {equivalent}")
if not equivalent:
    print(f"Counterexample: {counterexample}")
```

## 🧪 Laboratory Experiments

### Lab 1: Boolean Algebra Verification
```
Objective: Verify Boolean algebra laws using logic gates

Equipment:
- AND, OR, NOT gates
- Breadboard and connecting wires
- LED indicators
- Logic switches
- Multimeter

Procedure:
1. Build circuits for basic laws
2. Test with all input combinations
3. Verify truth tables
4. Document results

Experiments:
a) Identity Laws: A + 0 = A, A · 1 = A
b) Complement Laws: A + A' = 1, A · A' = 0
c) De Morgan's Laws: (A + B)' = A' · B'
d) Distributive Law: A · (B + C) = A · B + A · C

Circuit for De Morgan's Law:
Input: A, B
Circuit 1: (A + B)' using OR gate + NOT gate
Circuit 2: A' · B' using NOT gates + AND gate
Compare outputs for all input combinations
```

### Lab 2: Logic Function Implementation
```
Objective: Implement Boolean functions using basic gates

Equipment:
- Logic gates (AND, OR, NOT)
- Truth table worksheets
- Circuit simulation software
- Oscilloscope

Procedure:
1. Given Boolean function F = A·B + A'·C + B·C
2. Create truth table
3. Implement using gates
4. Test and verify
5. Simplify and re-implement

Truth Table for F = A·B + A'·C + B·C:
A | B | C | A·B | A'·C | B·C | F
--|---|---|-----|------|-----|---
0 | 0 | 0 |  0  |  0   |  0  | 0
0 | 0 | 1 |  0  |  1   |  0  | 1
0 | 1 | 0 |  0  |  0   |  0  | 0
0 | 1 | 1 |  0  |  1   |  1  | 1
1 | 0 | 0 |  0  |  0   |  0  | 0
1 | 0 | 1 |  0  |  0   |  0  | 0
1 | 1 | 0 |  1  |  0   |  1  | 1
1 | 1 | 1 |  1  |  0   |  1  | 1

Simplified: F = A·B + A'·C + B·C = A·B + A'·C (consensus theorem)
```

### Lab 3: K-Map Implementation
```
Objective: Design circuits using K-map simplification

Equipment:
- K-map worksheets
- Logic gates
- Breadboard
- Function generator
- Logic analyzer

Procedure:
1. Given function: F(A,B,C,D) = Σm(0,1,2,5,6,7,8,9,10,14)
2. Plot on 4-variable K-map
3. Find optimal groups
4. Write simplified expression
5. Implement circuit
6. Verify with logic analyzer

K-Map Solution:
Groups identified:
- Group 1: m₀,m₁,m₈,m₉ → B'D'
- Group 2: m₂,m₆,m₁₀,m₁₄ → C'D'
- Group 3: m₅,m₇ → A'BC

Simplified: F = B'D' + C'D' + A'BC
```

### Lab 4: Don't Care Optimization
```
Objective: Utilize don't care conditions for optimization

Equipment:
- Logic design software
- Comparison circuits
- Performance measurement tools

Procedure:
1. Design function with don't cares
2. Compare optimized vs non-optimized
3. Measure gate count and propagation delay
4. Analyze cost-performance trade-offs

Example Function:
F(A,B,C) = Σm(1,3,7) + Σd(0,2,5)

Without don't cares: F = A'B'C + A'BC + ABC
With don't cares: F = C (much simpler!)

Gate count comparison:
- Without optimization: 6 gates
- With optimization: 0 gates (direct connection)
```

## 📝 Practice Problems (100+ Problems)

### Basic Boolean Algebra (1-25)
1. Simplify: A + A·B
2. Prove: A + A'·B = A + B
3. Apply De Morgan's law to: (A + B + C)'
4. Simplify: A·B + A·B' + A'·B
5. Verify: (A·B)' = A' + B'

### Algebraic Simplification (26-50)
26. Simplify: A·B·C + A·B·C' + A·B'·C + A·B'·C'
27. Reduce: (A + B)·(A + B')·(A' + B)
28. Simplify: A·B + A'·C + B·C
29. Minimize: A'·B'·C' + A'·B·C + A·B'·C' + A·B·C
30. Simplify: (A + B + C)·(A + B + C')·(A + B' + C)

### K-Map Problems (51-75)
51. Use K-map to simplify: F(A,B,C) = Σm(0,2,4,5,6)
52. Minimize: F(A,B,C,D) = Σm(0,1,2,5,8,9,10)
53. Simplify with don't cares: F = Σm(1,3,7) + Σd(0,2,5)
54. Find POS form using K-map: F(A,B,C) = Σm(1,2,3,5)
55. Optimize: F(A,B,C,D) = Σm(0,1,4,5,6,7,8,9,12,13,14,15)

### Advanced Problems (76-100)
76. Design function with minimum gates for F = Σm(0,1,2,4,5,6,8,10,11,14,15)
77. Compare SOP and POS implementations for given function
78. Find all prime implicants for F(A,B,C,D) = Σm(0,2,3,5,7,8,10,11,13,15)
79. Implement using only NAND gates: F = A·B + C·D
80. Design self-dual Boolean function

## 🎯 Assessment and Evaluation

### Quiz Questions (25 questions)
1. State De Morgan's laws and give examples
2. What is the difference between minterm and maxterm?
3. How do you identify essential prime implicants?
4. When are don't care conditions useful?
5. What is the consensus theorem?

### Programming Assignments
1. Build Boolean expression simplifier
2. Implement K-map solver
3. Create truth table generator
4. Design logic circuit optimizer

### Design Projects
1. Traffic light controller using Boolean logic
2. BCD to 7-segment decoder optimization
3. Arithmetic logic unit (ALU) design
4. Error detection circuit using Boolean algebra

## 📚 Resources and References

### Textbooks
- "Digital Design" by Morris Mano & Michael Ciletti
- "Switching and Finite Automata Theory" by Zvi Kohavi
- "Logic and Computer Design Fundamentals" by Morris Mano

### Online Resources
- [Boolean Algebra Calculator](https://www.boolean-algebra.com/)
- [K-Map Solver](https://www.32x8.com/var3_kmap.html)
- [Logic Circuit Simulator](https://www.falstad.com/circuit/)

### Software Tools
- Logisim: Logic circuit design and simulation
- Quartus Prime: FPGA design with Boolean optimization
- MATLAB Logic Analyzer: Boolean function analysis
- Online K-map solvers and Boolean calculators

## 🏆 Learning Outcomes
After completing this module, you will:
- Master Boolean algebra laws and theorems
- Simplify complex Boolean expressions efficiently
- Use K-maps for logic minimization
- Apply don't care conditions for optimization
- Design minimal logic circuits
- Understand advanced simplification techniques
- Score 95%+ on Boolean algebra problems

**Next Module**: Logic Gates and Families →