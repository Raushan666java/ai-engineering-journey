# Module 2: Set Theory Complete Guide
## 📚 Comprehensive Set Theory for Computer Science

### 🎯 Module Overview
- **Duration**: 3 weeks (45 hours)
- **Difficulty**: Beginner to Advanced
- **Prerequisites**: Basic mathematical reasoning
- **Applications**: Database theory, formal languages, algorithm analysis

## 📋 Learning Objectives
- Master fundamental set operations and properties
- Apply set theory to computer science problems
- Understand cardinality and infinite sets
- Implement set operations in programming languages
- Solve complex set theory problems

## 🔢 Topic 1: Basic Set Concepts

### 1.1 Set Definitions and Notation
```
Definition: A set is a well-defined collection of distinct objects.

Notation:
- A = {1, 2, 3, 4, 5}
- B = {x | x is even and 0 < x < 10}
- C = {red, blue, green}

Special Sets:
- ∅ or {} = Empty set
- ℕ = Natural numbers {1, 2, 3, ...}
- ℤ = Integers {..., -2, -1, 0, 1, 2, ...}
- ℚ = Rational numbers
- ℝ = Real numbers
- U = Universal set
```

### 1.2 Set Membership and Equality
```
Membership:
- a ∈ A (a is an element of A)
- b ∉ A (b is not an element of A)

Equality:
- A = B if and only if A ⊆ B and B ⊆ A
- Two sets are equal if they contain exactly the same elements

Examples:
- {1, 2, 3} = {3, 1, 2} = {1, 1, 2, 3}
- {a, b} ≠ {a, b, c}
```

### 1.3 Subsets and Proper Subsets
```
Subset: A ⊆ B if every element of A is also in B
Proper Subset: A ⊂ B if A ⊆ B and A ≠ B

Properties:
- ∅ ⊆ A for any set A
- A ⊆ A for any set A
- If A ⊆ B and B ⊆ C, then A ⊆ C (transitivity)

Power Set: P(A) = {X | X ⊆ A}
- If |A| = n, then |P(A)| = 2^n
```

## 🔄 Topic 2: Set Operations

### 2.1 Basic Operations
```
Union: A ∪ B = {x | x ∈ A or x ∈ B}
Intersection: A ∩ B = {x | x ∈ A and x ∈ B}
Difference: A - B = {x | x ∈ A and x ∉ B}
Complement: A' = U - A = {x | x ∈ U and x ∉ A}

Examples:
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

A ∪ B = {1, 2, 3, 4, 5, 6}
A ∩ B = {3, 4}
A - B = {1, 2}
B - A = {5, 6}
```

### 2.2 Advanced Operations
```
Symmetric Difference: A ⊕ B = (A - B) ∪ (B - A)
Cartesian Product: A × B = {(a, b) | a ∈ A and b ∈ B}

Properties of Symmetric Difference:
- A ⊕ B = (A ∪ B) - (A ∩ B)
- A ⊕ A = ∅
- A ⊕ ∅ = A
- A ⊕ B = B ⊕ A (commutative)

Cartesian Product Properties:
- |A × B| = |A| × |B|
- A × B ≠ B × A (unless A = B or one is empty)
```

### 2.3 Set Laws and Properties
```
Commutative Laws:
- A ∪ B = B ∪ A
- A ∩ B = B ∩ A

Associative Laws:
- (A ∪ B) ∪ C = A ∪ (B ∪ C)
- (A ∩ B) ∩ C = A ∩ (B ∩ C)

Distributive Laws:
- A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
- A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)

De Morgan's Laws:
- (A ∪ B)' = A' ∩ B'
- (A ∩ B)' = A' ∪ B'

Identity Laws:
- A ∪ ∅ = A
- A ∩ U = A

Complement Laws:
- A ∪ A' = U
- A ∩ A' = ∅
```

## 🔢 Topic 3: Cardinality and Counting

### 3.1 Finite Set Cardinality
```
Cardinality: |A| = number of elements in set A

Inclusion-Exclusion Principle:
|A ∪ B| = |A| + |B| - |A ∩ B|

For three sets:
|A ∪ B ∪ C| = |A| + |B| + |C| - |A ∩ B| - |A ∩ C| - |B ∩ C| + |A ∩ B ∩ C|

General formula for n sets:
|⋃ᵢ₌₁ⁿ Aᵢ| = Σ|Aᵢ| - Σ|Aᵢ ∩ Aⱼ| + Σ|Aᵢ ∩ Aⱼ ∩ Aₖ| - ... + (-1)ⁿ⁺¹|A₁ ∩ A₂ ∩ ... ∩ Aₙ|
```

### 3.2 Infinite Sets and Countability
```
Countably Infinite: A set that can be put in one-to-one correspondence with ℕ
- ℕ, ℤ, ℚ are countably infinite
- ℝ is uncountably infinite (Cantor's diagonal argument)

Cantor's Theorem: For any set A, |A| < |P(A)|
- There is no largest cardinal number
- The power set always has strictly greater cardinality

Continuum Hypothesis: 2^ℵ₀ = ℵ₁
- Independent of ZFC axioms (Gödel, Cohen)
```

## 🖥️ Topic 4: Programming Implementation

### 4.1 Set Operations in Python
```python
class SetOperations:
    def __init__(self):
        self.operations_count = 0
    
    def union(self, set_a, set_b):
        """Return union of two sets"""
        self.operations_count += 1
        return set_a.union(set_b)
    
    def intersection(self, set_a, set_b):
        """Return intersection of two sets"""
        self.operations_count += 1
        return set_a.intersection(set_b)
    
    def difference(self, set_a, set_b):
        """Return difference of two sets"""
        self.operations_count += 1
        return set_a.difference(set_b)
    
    def symmetric_difference(self, set_a, set_b):
        """Return symmetric difference of two sets"""
        self.operations_count += 1
        return set_a.symmetric_difference(set_b)
    
    def cartesian_product(self, set_a, set_b):
        """Return cartesian product of two sets"""
        self.operations_count += 1
        return {(a, b) for a in set_a for b in set_b}
    
    def power_set(self, input_set):
        """Generate power set of given set"""
        from itertools import combinations
        elements = list(input_set)
        power_set = set()
        
        for r in range(len(elements) + 1):
            for combo in combinations(elements, r):
                power_set.add(frozenset(combo))
        
        return power_set
    
    def is_subset(self, set_a, set_b):
        """Check if set_a is subset of set_b"""
        return set_a.issubset(set_b)
    
    def inclusion_exclusion(self, sets):
        """Apply inclusion-exclusion principle"""
        from itertools import combinations
        n = len(sets)
        total = 0
        
        for i in range(1, n + 1):
            sign = (-1) ** (i - 1)
            for combo in combinations(sets, i):
                intersection = combo[0]
                for s in combo[1:]:
                    intersection = intersection.intersection(s)
                total += sign * len(intersection)
        
        return total

# Example usage
if __name__ == "__main__":
    ops = SetOperations()
    
    A = {1, 2, 3, 4}
    B = {3, 4, 5, 6}
    C = {4, 5, 6, 7}
    
    print(f"A ∪ B = {ops.union(A, B)}")
    print(f"A ∩ B = {ops.intersection(A, B)}")
    print(f"A - B = {ops.difference(A, B)}")
    print(f"A ⊕ B = {ops.symmetric_difference(A, B)}")
    print(f"A × B = {ops.cartesian_product(A, B)}")
    print(f"P(A) = {ops.power_set(A)}")
    print(f"|A ∪ B ∪ C| = {ops.inclusion_exclusion([A, B, C])}")
```

### 4.2 Set Theory Applications
```python
class SetApplications:
    def database_operations(self):
        """Demonstrate set operations in database context"""
        # Students in different courses
        math_students = {"Alice", "Bob", "Charlie", "David"}
        cs_students = {"Bob", "Charlie", "Eve", "Frank"}
        physics_students = {"Charlie", "David", "Eve", "Grace"}
        
        # Students taking both Math and CS
        math_and_cs = math_students.intersection(cs_students)
        print(f"Math and CS: {math_and_cs}")
        
        # Students taking at least one course
        all_students = math_students.union(cs_students).union(physics_students)
        print(f"All students: {all_students}")
        
        # Students taking only Math
        only_math = math_students - cs_students - physics_students
        print(f"Only Math: {only_math}")
    
    def formal_language_sets(self):
        """Set operations in formal language theory"""
        # Alphabet
        sigma = {'a', 'b'}
        
        # Generate strings of length n
        def strings_of_length(alphabet, n):
            if n == 0:
                return {''}
            if n == 1:
                return alphabet
            
            result = set()
            shorter = strings_of_length(alphabet, n-1)
            for string in shorter:
                for char in alphabet:
                    result.add(string + char)
            return result
        
        # Language L1: strings with even length
        L1 = set()
        for i in range(0, 6, 2):  # lengths 0, 2, 4
            L1.update(strings_of_length(sigma, i))
        
        # Language L2: strings starting with 'a'
        L2 = set()
        for i in range(1, 5):
            for string in strings_of_length(sigma, i):
                if string.startswith('a'):
                    L2.add(string)
        
        print(f"L1 (even length): {sorted(L1)}")
        print(f"L2 (starts with 'a'): {sorted(L2)}")
        print(f"L1 ∩ L2: {sorted(L1.intersection(L2))}")
        print(f"L1 ∪ L2: {sorted(L1.union(L2))}")

# Run applications
apps = SetApplications()
apps.database_operations()
apps.formal_language_sets()
```

## 📝 Practice Problems (150+ Problems)

### Basic Problems (1-50)
1. Let A = {1, 2, 3}, B = {2, 3, 4}. Find A ∪ B, A ∩ B, A - B, B - A
2. Prove that A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)
3. Find the power set of {a, b, c}
4. If |A| = 5 and |B| = 3, what are the possible values of |A ∪ B|?
5. Prove that A ⊆ B if and only if A ∩ B = A

### Intermediate Problems (51-100)
26. In a class of 100 students, 60 study Math, 50 study Physics, 40 study Chemistry, 30 study Math and Physics, 20 study Math and Chemistry, 25 study Physics and Chemistry, and 15 study all three. How many study none?
27. Prove that (A ∪ B) × C = (A × C) ∪ (B × C)
28. Show that |A × B| = |A| × |B|
29. Find all functions from {1, 2} to {a, b, c}
30. Prove that if A and B are countably infinite, then A ∪ B is countably infinite

### Advanced Problems (101-150)
76. Prove Cantor's theorem: |A| < |P(A)| for any set A
77. Show that the set of all finite subsets of ℕ is countably infinite
78. Prove that ℝ is uncountably infinite using Cantor's diagonal argument
79. Find the cardinality of the set of all functions from ℕ to {0, 1}
80. Prove that if A is uncountably infinite and B is countably infinite, then A - B is uncountably infinite

## 🧪 Programming Labs

### Lab 1: Set Operations Implementation
```python
# Implement custom set class with all operations
class CustomSet:
    def __init__(self, elements=None):
        self.elements = set(elements) if elements else set()
    
    def add(self, element):
        self.elements.add(element)
    
    def remove(self, element):
        self.elements.discard(element)
    
    def __contains__(self, element):
        return element in self.elements
    
    def __len__(self):
        return len(self.elements)
    
    def __str__(self):
        return str(self.elements)
    
    # Implement all set operations
    def union(self, other):
        return CustomSet(self.elements.union(other.elements))
    
    def intersection(self, other):
        return CustomSet(self.elements.intersection(other.elements))
    
    # Add more operations...
```

### Lab 2: Database Query Optimization
```python
# Use set theory for database query optimization
class QueryOptimizer:
    def __init__(self):
        self.tables = {}
    
    def add_table(self, name, records):
        self.tables[name] = set(records)
    
    def select_where(self, table, condition):
        return {record for record in self.tables[table] if condition(record)}
    
    def join(self, table1, table2, join_condition):
        result = set()
        for r1 in self.tables[table1]:
            for r2 in self.tables[table2]:
                if join_condition(r1, r2):
                    result.add((r1, r2))
        return result
    
    def optimize_query(self, query):
        # Apply set theory optimizations
        pass
```

### Lab 3: Formal Language Processor
```python
# Implement formal language operations using sets
class FormalLanguage:
    def __init__(self, alphabet, strings=None):
        self.alphabet = set(alphabet)
        self.strings = set(strings) if strings else set()
    
    def concatenation(self, other):
        result = set()
        for s1 in self.strings:
            for s2 in other.strings:
                result.add(s1 + s2)
        return FormalLanguage(self.alphabet.union(other.alphabet), result)
    
    def kleene_star(self, max_length=5):
        result = {''}  # Empty string
        current = self.strings.copy()
        
        for _ in range(max_length):
            new_strings = set()
            for s1 in result:
                for s2 in current:
                    new_strings.add(s1 + s2)
            result.update(new_strings)
        
        return FormalLanguage(self.alphabet, result)
    
    def is_regular(self):
        # Check if language is regular using set properties
        pass
```

## 🎯 Assessment and Evaluation

### Quiz Questions (25 questions)
1. What is the cardinality of P({1, 2, 3, 4})?
2. Prove or disprove: A - (B ∩ C) = (A - B) ∪ (A - C)
3. If A ⊆ B and B ⊆ C, what can you conclude about A and C?
4. Find |A ∪ B ∪ C| given |A| = 10, |B| = 15, |C| = 20, |A ∩ B| = 5, |A ∩ C| = 8, |B ∩ C| = 7, |A ∩ B ∩ C| = 3

### Programming Assignments
1. Implement a complete set theory library
2. Build a database query optimizer using set operations
3. Create a formal language processor
4. Develop a Venn diagram generator

### Project: Set Theory Applications
Build a comprehensive application that demonstrates set theory concepts in:
- Database management
- Compiler design
- Network security
- Data mining

## 📚 Resources and References

### Textbooks
- "Discrete Mathematics and Its Applications" by Kenneth Rosen
- "Set Theory: An Introduction to Independence Proofs" by Kenneth Kunen
- "Naive Set Theory" by Paul Halmos

### Online Resources
- [Set Theory Visualizer](https://www.geogebra.org/m/set-theory)
- [Wolfram MathWorld - Set Theory](https://mathworld.wolfram.com/SetTheory.html)
- [MIT OpenCourseWare - Set Theory](https://ocw.mit.edu)

### Programming Resources
- Python Set Documentation
- Java Collections Framework
- C++ STL Set Containers

## 🏆 Learning Outcomes
After completing this module, you will:
- Master all fundamental set theory concepts
- Apply set operations to solve complex problems
- Implement efficient set algorithms
- Use set theory in database and compiler design
- Understand infinite sets and cardinality
- Score 90%+ on set theory problems in competitive programming
- Be prepared for advanced discrete mathematics topics

**Next Module**: Functions and Relations →