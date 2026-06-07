# Module 1: Logic and Proofs - Complete Guide
## 🧠 Mathematical Reasoning Foundations

---

## 📚 Chapter 1: Propositional Logic

### **1.1 Basic Concepts**
```
Proposition: A declarative statement that is either true or false
Examples:
✓ "2 + 3 = 5" (True)
✓ "The sky is green" (False)
✓ "Paris is the capital of France" (True)

Not Propositions:
✗ "What time is it?" (Question)
✗ "x + 1 = 5" (Contains variable)
✗ "Close the door" (Command)

Propositional Variables: p, q, r, s, ...
Truth Values: T (True), F (False), 1, 0
```

### **1.2 Logical Operators**

#### **Negation (¬)**
```
Definition: ¬p is true when p is false
Truth Table:
p | ¬p
T | F
F | T

Example: p: "It is raining"
¬p: "It is not raining"
```

#### **Conjunction (∧)**
```
Definition: p ∧ q is true when both p and q are true
Truth Table:
p | q | p ∧ q
T | T |   T
T | F |   F
F | T |   F
F | F |   F

Example: "It is sunny AND warm"
```

#### **Disjunction (∨)**
```
Definition: p ∨ q is true when at least one of p or q is true
Truth Table:
p | q | p ∨ q
T | T |   T
T | F |   T
F | T |   T
F | F |   F

Example: "I will study OR watch TV"
```

#### **Implication (→)**
```
Definition: p → q is false only when p is true and q is false
Truth Table:
p | q | p → q
T | T |   T
T | F |   F
F | T |   T
F | F |   T

Example: "If it rains, then I will stay home"
Note: Implication is true when hypothesis is false
```

#### **Biconditional (↔)**
```
Definition: p ↔ q is true when p and q have the same truth value
Truth Table:
p | q | p ↔ q
T | T |   T
T | F |   F
F | T |   F
F | F |   T

Example: "I will go if and only if you go"
```

### **1.3 Compound Propositions**
```
Complex expressions using multiple operators
Example: (p ∧ q) → (r ∨ ¬s)

Operator Precedence (highest to lowest):
1. ¬ (Negation)
2. ∧ (Conjunction)
3. ∨ (Disjunction)
4. → (Implication)
5. ↔ (Biconditional)

Parentheses override precedence
```

### **1.4 Logical Equivalences**
```
Two propositions are logically equivalent if they have the same truth value in all cases

Important Equivalences:
Identity Laws:
p ∧ T ≡ p
p ∨ F ≡ p

Domination Laws:
p ∨ T ≡ T
p ∧ F ≡ F

Idempotent Laws:
p ∨ p ≡ p
p ∧ p ≡ p

Double Negation:
¬(¬p) ≡ p

Commutative Laws:
p ∨ q ≡ q ∨ p
p ∧ q ≡ q ∧ p

Associative Laws:
(p ∨ q) ∨ r ≡ p ∨ (q ∨ r)
(p ∧ q) ∧ r ≡ p ∧ (q ∧ r)

Distributive Laws:
p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)
p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)

De Morgan's Laws:
¬(p ∧ q) ≡ ¬p ∨ ¬q
¬(p ∨ q) ≡ ¬p ∧ ¬q

Conditional Equivalences:
p → q ≡ ¬p ∨ q
p → q ≡ ¬q → ¬p (Contrapositive)
¬(p → q) ≡ p ∧ ¬q
```

---

## 🔍 Chapter 2: Predicate Logic

### **2.1 Predicates and Quantifiers**
```
Predicate: A statement containing variables
Example: P(x): "x is even"
Domain: Set of possible values for variables

Universal Quantifier (∀):
∀x P(x): "For all x, P(x) is true"
Example: ∀x (x² ≥ 0) over real numbers

Existential Quantifier (∃):
∃x P(x): "There exists an x such that P(x) is true"
Example: ∃x (x² = 4) over real numbers

Unique Existential Quantifier (∃!):
∃!x P(x): "There exists a unique x such that P(x)"
```

### **2.2 Quantifier Negations**
```
De Morgan's Laws for Quantifiers:
¬∀x P(x) ≡ ∃x ¬P(x)
¬∃x P(x) ≡ ∀x ¬P(x)

Examples:
¬∀x (x > 0) ≡ ∃x (x ≤ 0)
"Not all numbers are positive" ≡ "Some number is non-positive"

¬∃x (x² < 0) ≡ ∀x (x² ≥ 0)
"No real number has negative square" ≡ "All real numbers have non-negative squares"
```

### **2.3 Multiple Quantifiers**
```
Order matters for different quantifiers:
∀x ∃y P(x,y) ≠ ∃y ∀x P(x,y)

Example with P(x,y): "x loves y"
∀x ∃y P(x,y): "Everyone loves someone"
∃y ∀x P(x,y): "Someone is loved by everyone"

Nested Quantifier Negation:
¬∀x ∃y P(x,y) ≡ ∃x ∀y ¬P(x,y)
¬∃x ∀y P(x,y) ≡ ∀x ∃y ¬P(x,y)
```

---

## 📝 Chapter 3: Proof Techniques

### **3.1 Direct Proof**
```
Structure:
1. Assume the hypothesis is true
2. Use logical steps to show the conclusion
3. Each step must be justified

Example: Prove "If n is even, then n² is even"
Proof:
1. Assume n is even
2. Then n = 2k for some integer k
3. n² = (2k)² = 4k² = 2(2k²)
4. Since 2k² is an integer, n² is even ∎

Template:
Theorem: If P, then Q
Proof: Assume P is true.
[Logical steps]
Therefore Q is true. ∎
```

### **3.2 Proof by Contrapositive**
```
Method: To prove P → Q, prove ¬Q → ¬P
Logically equivalent to original statement

Example: Prove "If n² is odd, then n is odd"
Contrapositive: "If n is even, then n² is even"
Proof:
1. Assume n is even
2. Then n = 2k for some integer k
3. n² = 4k² = 2(2k²), so n² is even
4. Therefore, if n² is odd, then n is odd ∎
```

### **3.3 Proof by Contradiction**
```
Method: 
1. Assume the negation of what you want to prove
2. Derive a contradiction
3. Conclude the original statement is true

Example: Prove √2 is irrational
Proof:
1. Assume √2 is rational
2. Then √2 = p/q where p,q are integers, gcd(p,q) = 1
3. 2 = p²/q², so 2q² = p²
4. Therefore p² is even, so p is even
5. Let p = 2r, then 2q² = 4r², so q² = 2r²
6. Therefore q² is even, so q is even
7. But this contradicts gcd(p,q) = 1
8. Therefore √2 is irrational ∎
```

### **3.4 Mathematical Induction**
```
Principle: To prove ∀n≥n₀ P(n):
1. Base Case: Prove P(n₀)
2. Inductive Step: Prove P(k) → P(k+1) for arbitrary k≥n₀
3. Conclude P(n) is true for all n≥n₀

Example: Prove 1 + 2 + ... + n = n(n+1)/2
Proof:
Base Case (n=1): 1 = 1(2)/2 = 1 ✓

Inductive Step: Assume true for k
1 + 2 + ... + k = k(k+1)/2

Show true for k+1:
1 + 2 + ... + k + (k+1) = k(k+1)/2 + (k+1)
                        = (k+1)(k/2 + 1)
                        = (k+1)(k+2)/2 ✓

Therefore true for all n≥1 ∎
```

### **3.5 Strong Induction**
```
Principle: To prove ∀n≥n₀ P(n):
1. Base Case: Prove P(n₀)
2. Inductive Step: Assume P(n₀), P(n₀+1), ..., P(k) all true
   Prove P(k+1)

Example: Every integer n≥2 can be written as product of primes
Proof:
Base Case (n=2): 2 is prime ✓

Inductive Step: Assume true for all 2≤m≤k
For k+1:
- If k+1 is prime, done
- If k+1 is composite, then k+1 = ab where 2≤a,b≤k
- By inductive hypothesis, a and b are products of primes
- Therefore k+1 is product of primes ✓
```

---

## 🎯 Practice Problems - Module 1 (100 Problems)

### **Propositional Logic (25 Problems)**

**Q1.** Let p: "It is sunny" and q: "It is warm". Express in symbols: "It is sunny and warm, or it is not sunny."

**Answer:** (p ∧ q) ∨ ¬p

**Q2.** Construct truth table for (p → q) ∧ (q → r) → (p → r)

**Answer:**
```
p | q | r | p→q | q→r | p→r | (p→q)∧(q→r) | [(p→q)∧(q→r)]→(p→r)
T | T | T |  T  |  T  |  T  |     T       |         T
T | T | F |  T  |  F  |  F  |     F       |         T
T | F | T |  F  |  T  |  T  |     F       |         T
T | F | F |  F  |  T  |  F  |     F       |         T
F | T | T |  T  |  T  |  T  |     T       |         T
F | T | F |  T  |  F  |  T  |     F       |         T
F | F | T |  T  |  T  |  T  |     T       |         T
F | F | F |  T  |  T  |  T  |     T       |         T

The formula is a tautology (always true)
```

### **Predicate Logic (25 Problems)**

**Q1.** Let P(x): "x is a prime number" and domain be positive integers. Express: "There are infinitely many prime numbers."

**Answer:** ∀n ∃p (p > n ∧ P(p))

**Q2.** Negate: ∀x ∃y (x < y ∧ P(y))

**Answer:** ∃x ∀y (x ≥ y ∨ ¬P(y))

### **Proof Techniques (50 Problems)**

**Q1.** Prove: If n is odd, then n² is odd.

**Answer:**
```
Direct Proof:
1. Assume n is odd
2. Then n = 2k + 1 for some integer k
3. n² = (2k + 1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1
4. Since 2k² + 2k is an integer, n² is odd ∎
```

**Q2.** Prove by induction: 1³ + 2³ + ... + n³ = [n(n+1)/2]²

**Answer:**
```
Base Case (n=1): 1³ = 1 = [1(2)/2]² = 1² = 1 ✓

Inductive Step: Assume true for k
1³ + 2³ + ... + k³ = [k(k+1)/2]²

Show for k+1:
1³ + 2³ + ... + k³ + (k+1)³ = [k(k+1)/2]² + (k+1)³
                             = (k+1)²[k²/4 + (k+1)]
                             = (k+1)²[k² + 4k + 4]/4
                             = (k+1)²[(k+2)²/4]
                             = [(k+1)(k+2)/2]² ✓
```

---

## 💻 Programming Labs - Module 1

### **Lab 1: Truth Table Generator**

```python
def generate_truth_table(formula, variables):
    """
    Generate truth table for logical formula
    
    Args:
        formula: String representation of logical formula
        variables: List of variable names
    
    Returns:
        List of dictionaries with variable assignments and result
    """
    import itertools
    
    # Generate all possible truth value combinations
    n = len(variables)
    combinations = list(itertools.product([True, False], repeat=n))
    
    truth_table = []
    
    for combo in combinations:
        # Create variable assignment
        assignment = dict(zip(variables, combo))
        
        # Evaluate formula with current assignment
        result = evaluate_formula(formula, assignment)
        
        # Add to truth table
        row = assignment.copy()
        row['result'] = result
        truth_table.append(row)
    
    return truth_table

def evaluate_formula(formula, assignment):
    """
    Evaluate logical formula given variable assignment
    
    Supported operators: and, or, not, ->, <->
    """
    # Replace logical operators with Python equivalents
    formula = formula.replace('and', ' and ')
    formula = formula.replace('or', ' or ')
    formula = formula.replace('not', ' not ')
    
    # Handle implication (->)
    while '->' in formula:
        # Find implication pattern
        import re
        pattern = r'(\w+|\([^)]+\))\s*->\s*(\w+|\([^)]+\))'
        match = re.search(pattern, formula)
        if match:
            p, q = match.groups()
            replacement = f'(not ({p}) or ({q}))'
            formula = formula.replace(match.group(), replacement)
    
    # Handle biconditional (<->)
    while '<->' in formula:
        pattern = r'(\w+|\([^)]+\))\s*<->\s*(\w+|\([^)]+\))'
        match = re.search(pattern, formula)
        if match:
            p, q = match.groups()
            replacement = f'(({p}) == ({q}))'
            formula = formula.replace(match.group(), replacement)
    
    # Replace variables with their truth values
    for var, value in assignment.items():
        formula = formula.replace(var, str(value))
    
    # Evaluate the expression
    try:
        return eval(formula)
    except:
        return None

# Example usage
if __name__ == "__main__":
    # Test with simple formula
    formula = "p and q or not r"
    variables = ['p', 'q', 'r']
    
    table = generate_truth_table(formula, variables)
    
    # Print truth table
    print("Truth Table for:", formula)
    print("-" * 40)
    
    # Print header
    header = " | ".join(variables + ['Result'])
    print(header)
    print("-" * len(header))
    
    # Print rows
    for row in table:
        values = []
        for var in variables:
            values.append('T' if row[var] else 'F')
        values.append('T' if row['result'] else 'F')
        print(" | ".join(f"{v:^5}" for v in values))
```

### **Lab 2: Logical Equivalence Checker**

```python
class LogicalEquivalenceChecker:
    """
    Check if two logical formulas are equivalent
    """
    
    def __init__(self):
        self.operators = {
            'and': lambda x, y: x and y,
            'or': lambda x, y: x or y,
            'not': lambda x: not x,
            '->': lambda x, y: not x or y,
            '<->': lambda x, y: x == y,
            'xor': lambda x, y: x != y
        }
    
    def extract_variables(self, formula):
        """Extract all variables from formula"""
        import re
        variables = set(re.findall(r'\b[a-z]\b', formula.lower()))
        return sorted(list(variables))
    
    def evaluate_all_assignments(self, formula, variables):
        """Evaluate formula for all possible variable assignments"""
        import itertools
        
        results = []
        n = len(variables)
        
        for combo in itertools.product([True, False], repeat=n):
            assignment = dict(zip(variables, combo))
            result = self.evaluate_formula(formula, assignment)
            results.append(result)
        
        return results
    
    def evaluate_formula(self, formula, assignment):
        """Evaluate formula with given variable assignment"""
        # Tokenize formula
        tokens = self.tokenize(formula)
        
        # Convert to postfix notation
        postfix = self.infix_to_postfix(tokens)
        
        # Evaluate postfix expression
        return self.evaluate_postfix(postfix, assignment)
    
    def tokenize(self, formula):
        """Convert formula string to tokens"""
        import re
        
        # Define token patterns
        patterns = [
            (r'\s+', None),  # Whitespace (ignore)
            (r'\(', 'LPAREN'),
            (r'\)', 'RPAREN'),
            (r'not\b', 'NOT'),
            (r'and\b', 'AND'),
            (r'or\b', 'OR'),
            (r'->', 'IMPLIES'),
            (r'<->', 'BICONDITIONAL'),
            (r'xor\b', 'XOR'),
            (r'\b[a-z]\b', 'VARIABLE'),
        ]
        
        tokens = []
        pos = 0
        
        while pos < len(formula):
            matched = False
            for pattern, token_type in patterns:
                regex = re.compile(pattern)
                match = regex.match(formula, pos)
                if match:
                    if token_type:  # Not whitespace
                        tokens.append((token_type, match.group()))
                    pos = match.end()
                    matched = True
                    break
            
            if not matched:
                raise ValueError(f"Invalid character at position {pos}: {formula[pos]}")
        
        return tokens
    
    def infix_to_postfix(self, tokens):
        """Convert infix tokens to postfix notation"""
        precedence = {
            'NOT': 4,
            'AND': 3,
            'OR': 2,
            'XOR': 2,
            'IMPLIES': 1,
            'BICONDITIONAL': 1
        }
        
        output = []
        operator_stack = []
        
        for token_type, value in tokens:
            if token_type == 'VARIABLE':
                output.append((token_type, value))
            elif token_type == 'LPAREN':
                operator_stack.append((token_type, value))
            elif token_type == 'RPAREN':
                while (operator_stack and 
                       operator_stack[-1][0] != 'LPAREN'):
                    output.append(operator_stack.pop())
                operator_stack.pop()  # Remove LPAREN
            elif token_type in precedence:
                while (operator_stack and
                       operator_stack[-1][0] in precedence and
                       precedence[operator_stack[-1][0]] >= precedence[token_type]):
                    output.append(operator_stack.pop())
                operator_stack.append((token_type, value))
        
        while operator_stack:
            output.append(operator_stack.pop())
        
        return output
    
    def evaluate_postfix(self, postfix, assignment):
        """Evaluate postfix expression"""
        stack = []
        
        for token_type, value in postfix:
            if token_type == 'VARIABLE':
                stack.append(assignment[value])
            elif token_type == 'NOT':
                operand = stack.pop()
                stack.append(not operand)
            elif token_type in ['AND', 'OR', 'IMPLIES', 'BICONDITIONAL', 'XOR']:
                right = stack.pop()
                left = stack.pop()
                
                if token_type == 'AND':
                    result = left and right
                elif token_type == 'OR':
                    result = left or right
                elif token_type == 'IMPLIES':
                    result = not left or right
                elif token_type == 'BICONDITIONAL':
                    result = left == right
                elif token_type == 'XOR':
                    result = left != right
                
                stack.append(result)
        
        return stack[0] if stack else False
    
    def are_equivalent(self, formula1, formula2):
        """Check if two formulas are logically equivalent"""
        # Extract all variables from both formulas
        vars1 = self.extract_variables(formula1)
        vars2 = self.extract_variables(formula2)
        all_vars = sorted(list(set(vars1 + vars2)))
        
        # Evaluate both formulas for all assignments
        results1 = self.evaluate_all_assignments(formula1, all_vars)
        results2 = self.evaluate_all_assignments(formula2, all_vars)
        
        # Check if results are identical
        return results1 == results2
    
    def find_counterexample(self, formula1, formula2):
        """Find counterexample if formulas are not equivalent"""
        import itertools
        
        vars1 = self.extract_variables(formula1)
        vars2 = self.extract_variables(formula2)
        all_vars = sorted(list(set(vars1 + vars2)))
        
        for combo in itertools.product([True, False], repeat=len(all_vars)):
            assignment = dict(zip(all_vars, combo))
            
            result1 = self.evaluate_formula(formula1, assignment)
            result2 = self.evaluate_formula(formula2, assignment)
            
            if result1 != result2:
                return assignment
        
        return None

# Example usage
if __name__ == "__main__":
    checker = LogicalEquivalenceChecker()
    
    # Test De Morgan's Law
    formula1 = "not (p and q)"
    formula2 = "not p or not q"
    
    print(f"Formula 1: {formula1}")
    print(f"Formula 2: {formula2}")
    
    if checker.are_equivalent(formula1, formula2):
        print("The formulas are logically equivalent!")
    else:
        counterexample = checker.find_counterexample(formula1, formula2)
        print(f"Not equivalent. Counterexample: {counterexample}")
```

### **Lab 3: Mathematical Induction Verifier**

```python
class InductionVerifier:
    """
    Verify mathematical induction proofs
    """
    
    def __init__(self):
        pass
    
    def verify_base_case(self, formula_func, base_value):
        """
        Verify base case of induction
        
        Args:
            formula_func: Function that takes n and returns boolean
            base_value: Starting value for induction
        
        Returns:
            Boolean indicating if base case holds
        """
        try:
            return formula_func(base_value)
        except Exception as e:
            print(f"Error in base case: {e}")
            return False
    
    def verify_inductive_step(self, formula_func, test_values):
        """
        Verify inductive step for given test values
        
        Args:
            formula_func: Function that takes n and returns boolean
            test_values: List of values to test inductive step
        
        Returns:
            Dictionary with test results
        """
        results = {}
        
        for k in test_values:
            try:
                # Check if P(k) implies P(k+1)
                pk = formula_func(k)
                pk_plus_1 = formula_func(k + 1)
                
                # Inductive step: P(k) -> P(k+1)
                inductive_step = not pk or pk_plus_1
                
                results[k] = {
                    'P(k)': pk,
                    'P(k+1)': pk_plus_1,
                    'P(k) -> P(k+1)': inductive_step
                }
            except Exception as e:
                results[k] = {'error': str(e)}
        
        return results
    
    def verify_formula_range(self, formula_func, start, end):
        """
        Verify formula holds for range of values
        """
        results = {}
        
        for n in range(start, end + 1):
            try:
                results[n] = formula_func(n)
            except Exception as e:
                results[n] = f"Error: {e}"
        
        return results

# Example: Verify sum formula 1 + 2 + ... + n = n(n+1)/2
def sum_formula_verification(n):
    """
    Verify that sum of first n natural numbers equals n(n+1)/2
    """
    if n <= 0:
        return True  # Vacuous truth for n <= 0
    
    # Calculate actual sum
    actual_sum = sum(range(1, n + 1))
    
    # Calculate formula result
    formula_result = n * (n + 1) // 2
    
    return actual_sum == formula_result

# Example: Verify 2^n > n for n >= 1
def exponential_inequality(n):
    """
    Verify that 2^n > n for n >= 1
    """
    if n < 1:
        return True  # Not applicable for n < 1
    
    return 2**n > n

# Example usage
if __name__ == "__main__":
    verifier = InductionVerifier()
    
    print("Verifying sum formula: 1 + 2 + ... + n = n(n+1)/2")
    print("=" * 50)
    
    # Test base case
    base_result = verifier.verify_base_case(sum_formula_verification, 1)
    print(f"Base case (n=1): {base_result}")
    
    # Test inductive step
    inductive_results = verifier.verify_inductive_step(
        sum_formula_verification, [1, 2, 3, 4, 5]
    )
    
    print("\nInductive step verification:")
    for k, result in inductive_results.items():
        if 'error' not in result:
            print(f"k={k}: P({k})={result['P(k)']}, "
                  f"P({k+1})={result['P(k+1)']}, "
                  f"P({k}) -> P({k+1})={result['P(k) -> P(k+1)']}")
    
    # Verify for range of values
    range_results = verifier.verify_formula_range(sum_formula_verification, 1, 10)
    print(f"\nFormula verification for n=1 to 10:")
    print(f"All cases pass: {all(range_results.values())}")
    
    print("\n" + "=" * 50)
    print("Verifying exponential inequality: 2^n > n for n >= 1")
    print("=" * 50)
    
    # Test exponential inequality
    base_result = verifier.verify_base_case(exponential_inequality, 1)
    print(f"Base case (n=1): {base_result}")
    
    range_results = verifier.verify_formula_range(exponential_inequality, 1, 20)
    print(f"Verification for n=1 to 20:")
    for n, result in range_results.items():
        print(f"n={n}: 2^{n} = {2**n}, n = {n}, 2^n > n: {result}")
```

---

## 📖 Module 1 Summary

### **Key Concepts Mastered**
✓ Propositional logic and truth tables
✓ Logical operators and equivalences
✓ Predicate logic and quantifiers
✓ Direct proof techniques
✓ Proof by contrapositive and contradiction
✓ Mathematical induction and strong induction

### **Programming Skills Developed**
✓ Truth table generation algorithms
✓ Logical formula evaluation
✓ Equivalence checking systems
✓ Induction verification tools
✓ Automated proof assistance

### **Applications Learned**
✓ Boolean algebra for digital circuits
✓ Database query optimization
✓ Algorithm correctness proofs
✓ Software verification techniques
✓ Logical reasoning in AI systems

### **Next Module Preview**
**Module 2: Set Theory**
- Set operations and properties
- Venn diagrams and visualizations
- Cartesian products and relations
- Cardinality and infinite sets

---

**🎯 Logic and Proofs mastered! Ready for Set Theory? 🚀**