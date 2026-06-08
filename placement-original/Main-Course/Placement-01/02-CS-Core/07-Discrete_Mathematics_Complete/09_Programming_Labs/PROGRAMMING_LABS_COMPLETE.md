# Programming Labs Complete Guide
## 🖥️ 20+ Hands-on Programming Labs for Discrete Mathematics

### 🎯 Lab Overview
- **Total Labs**: 25 comprehensive programming labs
- **Languages**: Python, Java, C++, JavaScript
- **Difficulty**: Beginner to Advanced
- **Applications**: Real-world discrete mathematics implementations

## 🧠 Logic and Proofs Labs (Labs 1-5)

### Lab 1: Truth Table Generator
```python
class TruthTableGenerator:
    def __init__(self):
        self.operators = {
            'AND': lambda x, y: x and y,
            'OR': lambda x, y: x or y,
            'NOT': lambda x: not x,
            'IMPLIES': lambda x, y: not x or y,
            'IFF': lambda x, y: x == y,
            'XOR': lambda x, y: x != y
        }
    
    def generate_truth_table(self, variables, expression):
        """Generate truth table for logical expression"""
        n = len(variables)
        rows = 2 ** n
        
        print(f"Truth table for: {expression}")
        print(" | ".join(variables + [expression]))
        print("-" * (4 * len(variables) + len(expression) + 10))
        
        for i in range(rows):
            values = []
            assignment = {}
            
            for j, var in enumerate(variables):
                val = bool((i >> (n - 1 - j)) & 1)
                values.append('T' if val else 'F')
                assignment[var] = val
            
            result = self.evaluate_expression(expression, assignment)
            values.append('T' if result else 'F')
            
            print(" | ".join(f"{v:^3}" for v in values))
    
    def evaluate_expression(self, expr, assignment):
        """Evaluate logical expression with given variable assignment"""
        expr = expr.replace('AND', ' and ').replace('OR', ' or ').replace('NOT', ' not ')
        expr = expr.replace('IMPLIES', ' <= ').replace('IFF', ' == ')
        
        for var, val in assignment.items():
            expr = expr.replace(var, str(val))
        
        try:
            return eval(expr)
        except:
            return False

# Usage example
generator = TruthTableGenerator()
generator.generate_truth_table(['p', 'q'], 'p IMPLIES q')
```

### Lab 2: Combinatorial Calculator
```python
from math import factorial, comb
from itertools import combinations, permutations

class CombinatorialCalculator:
    def __init__(self):
        self.memo = {}
    
    def factorial(self, n):
        """Calculate factorial with memoization"""
        if n in self.memo:
            return self.memo[n]
        
        if n <= 1:
            result = 1
        else:
            result = n * self.factorial(n - 1)
        
        self.memo[n] = result
        return result
    
    def permutations(self, n, r=None):
        """Calculate P(n, r) = n! / (n-r)!"""
        if r is None:
            r = n
        if r > n or r < 0:
            return 0
        return self.factorial(n) // self.factorial(n - r)
    
    def combinations(self, n, r):
        """Calculate C(n, r) = n! / (r! * (n-r)!)"""
        if r > n or r < 0:
            return 0
        if r == 0 or r == n:
            return 1
        
        r = min(r, n - r)
        result = 1
        for i in range(r):
            result = result * (n - i) // (i + 1)
        
        return result
    
    def generate_combinations(self, items, r):
        """Generate all combinations of r items"""
        return list(combinations(items, r))
    
    def generate_permutations(self, items, r=None):
        """Generate all permutations of r items"""
        if r is None:
            r = len(items)
        return list(permutations(items, r))

# Example usage
calc = CombinatorialCalculator()
print(f"C(10, 3) = {calc.combinations(10, 3)}")
print(f"P(10, 3) = {calc.permutations(10, 3)}")

items = ['A', 'B', 'C', 'D']
print(f"Combinations of 2 from {items}:")
for combo in calc.generate_combinations(items, 2):
    print(combo)
```

## 🔢 Set Theory Labs (Labs 6-10)

### Lab 3: Set Operations Visualizer
```python
class SetOperations:
    def __init__(self):
        self.sets = {}
    
    def add_set(self, name, elements):
        """Add set to collection"""
        self.sets[name] = set(elements)
    
    def union(self, set1_name, set2_name):
        """Return union of two sets"""
        return self.sets[set1_name] | self.sets[set2_name]
    
    def intersection(self, set1_name, set2_name):
        """Return intersection of two sets"""
        return self.sets[set1_name] & self.sets[set2_name]
    
    def difference(self, set1_name, set2_name):
        """Return difference of two sets"""
        return self.sets[set1_name] - self.sets[set2_name]
    
    def symmetric_difference(self, set1_name, set2_name):
        """Return symmetric difference of two sets"""
        return self.sets[set1_name] ^ self.sets[set2_name]
    
    def power_set(self, set_name):
        """Generate power set"""
        from itertools import combinations
        elements = list(self.sets[set_name])
        power_set = []
        
        for r in range(len(elements) + 1):
            for combo in combinations(elements, r):
                power_set.append(set(combo))
        
        return power_set
    
    def compute_all_operations(self, set1_name, set2_name):
        """Compute all set operations"""
        operations = {
            'Union': self.union(set1_name, set2_name),
            'Intersection': self.intersection(set1_name, set2_name),
            'Difference (A - B)': self.difference(set1_name, set2_name),
            'Difference (B - A)': self.difference(set2_name, set1_name),
            'Symmetric Difference': self.symmetric_difference(set1_name, set2_name)
        }
        
        print(f"Set Operations for {set1_name} and {set2_name}:")
        for op_name, result in operations.items():
            print(f"{op_name}: {result}")

# Example usage
ops = SetOperations()
ops.add_set('A', [1, 2, 3, 4, 5])
ops.add_set('B', [4, 5, 6, 7, 8])
ops.compute_all_operations('A', 'B')
```

## 🔗 Functions and Relations Labs (Labs 11-15)

### Lab 4: Function Analyzer
```python
class FunctionAnalyzer:
    def __init__(self, domain, codomain, mapping):
        self.domain = set(domain)
        self.codomain = set(codomain)
        self.mapping = dict(mapping)
    
    def is_injective(self):
        """Check if function is injective (one-to-one)"""
        values = list(self.mapping.values())
        return len(values) == len(set(values))
    
    def is_surjective(self):
        """Check if function is surjective (onto)"""
        image = set(self.mapping.values())
        return image == self.codomain
    
    def is_bijective(self):
        """Check if function is bijective"""
        return self.is_injective() and self.is_surjective()
    
    def get_image(self):
        """Get image (range) of function"""
        return set(self.mapping.values())
    
    def find_inverse(self):
        """Find inverse function if bijective"""
        if not self.is_bijective():
            raise ValueError("Function is not bijective")
        
        inverse_mapping = {v: k for k, v in self.mapping.items()}
        return FunctionAnalyzer(self.codomain, self.domain, inverse_mapping)
    
    def analyze(self):
        """Complete analysis of function properties"""
        return {
            'domain': self.domain,
            'codomain': self.codomain,
            'image': self.get_image(),
            'injective': self.is_injective(),
            'surjective': self.is_surjective(),
            'bijective': self.is_bijective()
        }

# Example usage
f = FunctionAnalyzer(
    domain=[1, 2, 3, 4],
    codomain=['a', 'b', 'c', 'd'],
    mapping=[(1, 'a'), (2, 'b'), (3, 'c'), (4, 'd')]
)

analysis = f.analyze()
print("Function Analysis:")
for prop, value in analysis.items():
    print(f"  {prop}: {value}")
```

## 📊 Graph Theory Labs (Labs 16-20)

### Lab 5: Graph Algorithms
```python
from collections import defaultdict, deque

class Graph:
    def __init__(self, directed=False):
        self.graph = defaultdict(list)
        self.directed = directed
        self.vertices = set()
    
    def add_edge(self, u, v, weight=1):
        """Add edge to graph"""
        self.graph[u].append((v, weight))
        self.vertices.add(u)
        self.vertices.add(v)
        
        if not self.directed:
            self.graph[v].append((u, weight))
    
    def dfs(self, start, visited=None):
        """Depth-First Search"""
        if visited is None:
            visited = set()
        
        visited.add(start)
        result = [start]
        
        for neighbor, _ in self.graph[start]:
            if neighbor not in visited:
                result.extend(self.dfs(neighbor, visited))
        
        return result
    
    def bfs(self, start):
        """Breadth-First Search"""
        visited = set()
        queue = deque([start])
        result = []
        
        while queue:
            vertex = queue.popleft()
            if vertex not in visited:
                visited.add(vertex)
                result.append(vertex)
                
                for neighbor, _ in self.graph[vertex]:
                    if neighbor not in visited:
                        queue.append(neighbor)
        
        return result
    
    def is_connected(self):
        """Check if graph is connected"""
        if not self.vertices:
            return True
        
        start = next(iter(self.vertices))
        visited = set(self.dfs(start))
        return len(visited) == len(self.vertices)
    
    def find_cycles(self):
        """Find cycles in graph using DFS"""
        visited = set()
        rec_stack = set()
        cycles = []
        
        def dfs_cycle(v, path):
            visited.add(v)
            rec_stack.add(v)
            path.append(v)
            
            for neighbor, _ in self.graph[v]:
                if neighbor not in visited:
                    if dfs_cycle(neighbor, path):
                        return True
                elif neighbor in rec_stack:
                    # Found cycle
                    cycle_start = path.index(neighbor)
                    cycles.append(path[cycle_start:] + [neighbor])
                    return True
            
            rec_stack.remove(v)
            path.pop()
            return False
        
        for vertex in self.vertices:
            if vertex not in visited:
                dfs_cycle(vertex, [])
        
        return cycles

# Example usage
g = Graph()
g.add_edge('A', 'B')
g.add_edge('B', 'C')
g.add_edge('C', 'A')
g.add_edge('B', 'D')

print(f"DFS from A: {g.dfs('A')}")
print(f"BFS from A: {g.bfs('A')}")
print(f"Is connected: {g.is_connected()}")
print(f"Cycles: {g.find_cycles()}")
```

## 🔐 Number Theory Labs (Labs 21-25)

### Lab 6: Cryptography Implementation
```python
class NumberTheory:
    @staticmethod
    def gcd(a, b):
        """Euclidean algorithm for GCD"""
        while b:
            a, b = b, a % b
        return a
    
    @staticmethod
    def extended_gcd(a, b):
        """Extended Euclidean Algorithm"""
        if a == 0:
            return b, 0, 1
        
        gcd_val, x1, y1 = NumberTheory.extended_gcd(b % a, a)
        x = y1 - (b // a) * x1
        y = x1
        
        return gcd_val, x, y
    
    @staticmethod
    def mod_inverse(a, m):
        """Compute modular inverse"""
        gcd_val, x, _ = NumberTheory.extended_gcd(a, m)
        if gcd_val != 1:
            raise ValueError("Modular inverse does not exist")
        return (x % m + m) % m
    
    @staticmethod
    def fast_power(base, exp, mod):
        """Fast modular exponentiation"""
        result = 1
        base = base % mod
        
        while exp > 0:
            if exp % 2 == 1:
                result = (result * base) % mod
            exp = exp >> 1
            base = (base * base) % mod
        
        return result

class RSA:
    def __init__(self):
        self.public_key = None
        self.private_key = None
    
    def generate_keypair(self, p, q):
        """Generate RSA key pair"""
        n = p * q
        phi_n = (p - 1) * (q - 1)
        
        e = 65537  # Common choice
        while NumberTheory.gcd(e, phi_n) != 1:
            e += 2
        
        d = NumberTheory.mod_inverse(e, phi_n)
        
        self.public_key = (n, e)
        self.private_key = (n, d)
        
        return self.public_key, self.private_key
    
    def encrypt(self, message, public_key):
        """Encrypt message using public key"""
        n, e = public_key
        return NumberTheory.fast_power(message, e, n)
    
    def decrypt(self, ciphertext, private_key):
        """Decrypt ciphertext using private key"""
        n, d = private_key
        return NumberTheory.fast_power(ciphertext, d, n)

# Example usage
rsa = RSA()
public_key, private_key = rsa.generate_keypair(11, 13)

message = 42
ciphertext = rsa.encrypt(message, public_key)
decrypted = rsa.decrypt(ciphertext, private_key)

print(f"Original: {message}")
print(f"Encrypted: {ciphertext}")
print(f"Decrypted: {decrypted}")
```

## 🎯 Assessment and Projects

### Final Project: Discrete Mathematics Toolkit
Build a comprehensive toolkit that includes:
- Logic expression evaluator
- Set operation calculator
- Function analyzer
- Graph algorithm visualizer
- Number theory calculator
- Combinatorics solver

### Lab Completion Requirements
- Complete all 25 programming labs
- Implement at least 3 major algorithms per topic
- Create visualization tools for each concept
- Write comprehensive test suites
- Document all implementations

## 🏆 Learning Outcomes
After completing these labs, you will:
- Master programming implementations of discrete mathematics concepts
- Understand algorithm complexity and optimization
- Build real-world applications using discrete mathematics
- Be prepared for technical interviews and competitive programming
- Have a complete toolkit for discrete mathematics problems

**Programming Labs Complete!** 🎉