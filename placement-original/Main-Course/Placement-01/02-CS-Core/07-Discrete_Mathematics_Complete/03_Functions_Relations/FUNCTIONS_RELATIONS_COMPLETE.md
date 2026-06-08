# Module 3: Functions and Relations Complete Guide
## 📚 Comprehensive Functions and Relations for Computer Science

### 🎯 Module Overview
- **Duration**: 4 weeks (60 hours)
- **Difficulty**: Intermediate to Advanced
- **Prerequisites**: Set Theory, Basic Logic
- **Applications**: Database design, algorithm analysis, data structures

## 📋 Learning Objectives
- Master function types and properties
- Understand relation types and equivalence classes
- Apply functions and relations to CS problems
- Implement function and relation algorithms
- Solve complex mathematical problems

## 🔗 Topic 1: Relations Fundamentals

### 1.1 Basic Relation Concepts
```
Definition: A relation R from set A to set B is a subset of A × B
- R ⊆ A × B
- If (a, b) ∈ R, we write aRb or R(a, b)

Types of Relations:
1. Binary Relations: R ⊆ A × B
2. n-ary Relations: R ⊆ A₁ × A₂ × ... × Aₙ
3. Relations on a set: R ⊆ A × A

Examples:
- "Less than" relation on ℕ: {(1,2), (1,3), (2,3), (2,4), ...}
- "Divides" relation on ℤ⁺: {(1,n), (2,4), (2,6), (3,6), (3,9), ...}
- "Parent of" relation on people
```

### 1.2 Relation Properties
```
Let R be a relation on set A:

Reflexive: ∀a ∈ A, aRa
- Every element is related to itself
- Example: ≤ on ℝ (a ≤ a for all a)

Irreflexive: ∀a ∈ A, ¬(aRa)
- No element is related to itself
- Example: < on ℝ

Symmetric: ∀a,b ∈ A, aRb → bRa
- If a is related to b, then b is related to a
- Example: "is sibling of"

Antisymmetric: ∀a,b ∈ A, (aRb ∧ bRa) → a = b
- If both aRb and bRa, then a = b
- Example: ≤ on ℝ

Asymmetric: ∀a,b ∈ A, aRb → ¬(bRa)
- If aRb, then bRa is false
- Example: < on ℝ

Transitive: ∀a,b,c ∈ A, (aRb ∧ bRc) → aRc
- If a relates to b and b relates to c, then a relates to c
- Example: ≤ on ℝ
```

### 1.3 Special Types of Relations
```
Equivalence Relations:
- Reflexive, Symmetric, and Transitive
- Partitions the set into equivalence classes
- Examples: Congruence modulo n, "same age as"

Partial Orders:
- Reflexive, Antisymmetric, and Transitive
- Examples: ≤ on ℝ, ⊆ on power sets, divisibility on ℕ

Total Orders (Linear Orders):
- Partial order where every pair is comparable
- ∀a,b ∈ A, either aRb or bRa
- Example: ≤ on ℝ

Strict Orders:
- Irreflexive and Transitive
- Often Asymmetric
- Example: < on ℝ
```

### 1.4 Equivalence Classes and Partitions
```
Equivalence Class: [a] = {x ∈ A | xRa}
- Set of all elements equivalent to a

Properties:
- Every element belongs to exactly one equivalence class
- [a] = [b] if and only if aRb
- [a] ∩ [b] = ∅ if a and b are not equivalent

Partition: A collection of non-empty, disjoint subsets whose union is A
- Every equivalence relation induces a partition
- Every partition induces an equivalence relation

Quotient Set: A/R = {[a] | a ∈ A}
- Set of all equivalence classes
```

## 🔢 Topic 2: Functions Fundamentals

### 2.1 Function Definitions
```
Function: f: A → B is a relation where each element in A is related to exactly one element in B
- Domain: A (set of all inputs)
- Codomain: B (set of possible outputs)
- Range/Image: f(A) = {f(a) | a ∈ A} ⊆ B

Function Notation:
- f(a) = b means (a, b) ∈ f
- f: A → B or A →f B

Well-defined Function:
- Every element in domain has exactly one image
- ∀a ∈ A, ∃!b ∈ B such that f(a) = b
```

### 2.2 Types of Functions
```
Injective (One-to-One):
- ∀a₁, a₂ ∈ A, f(a₁) = f(a₂) → a₁ = a₂
- Different inputs give different outputs
- |A| ≤ |B| for finite sets

Surjective (Onto):
- ∀b ∈ B, ∃a ∈ A such that f(a) = b
- Every element in codomain is mapped to
- Range = Codomain
- |A| ≥ |B| for finite sets

Bijective (One-to-One Correspondence):
- Both injective and surjective
- Perfect pairing between A and B
- |A| = |B| for finite sets
- Has an inverse function

Examples:
- f: ℝ → ℝ, f(x) = 2x (injective, surjective, bijective)
- f: ℝ → ℝ⁺, f(x) = x² (neither injective nor surjective)
- f: ℝ⁺ → ℝ⁺, f(x) = x² (bijective)
```

### 2.3 Function Operations
```
Composition: (g ∘ f)(x) = g(f(x))
- Domain of g ∘ f: {x ∈ A | f(x) ∈ domain of g}
- Associative: (h ∘ g) ∘ f = h ∘ (g ∘ f)
- Generally not commutative: g ∘ f ≠ f ∘ g

Inverse Function: f⁻¹: B → A
- Exists if and only if f is bijective
- f⁻¹(f(x)) = x and f(f⁻¹(y)) = y
- (f⁻¹)⁻¹ = f
- (g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹

Identity Function: iₐ: A → A, iₐ(x) = x
- f ∘ iₐ = f and i_B ∘ f = f

Restriction: f|_S where S ⊆ A
- f|_S: S → B, (f|_S)(x) = f(x) for x ∈ S

Extension: Extending domain of function
```

## 🖥️ Topic 3: Programming Implementation

### 3.1 Relation Implementation
```python
class Relation:
    def __init__(self, domain, codomain, pairs=None):
        self.domain = set(domain)
        self.codomain = set(codomain)
        self.pairs = set(pairs) if pairs else set()
        self._validate()
    
    def _validate(self):
        """Validate that all pairs are from domain × codomain"""
        for a, b in self.pairs:
            if a not in self.domain or b not in self.codomain:
                raise ValueError(f"Invalid pair ({a}, {b})")
    
    def add_pair(self, a, b):
        """Add a pair to the relation"""
        if a in self.domain and b in self.codomain:
            self.pairs.add((a, b))
        else:
            raise ValueError(f"Invalid pair ({a}, {b})")
    
    def is_related(self, a, b):
        """Check if a is related to b"""
        return (a, b) in self.pairs
    
    def is_reflexive(self):
        """Check if relation is reflexive"""
        for a in self.domain:
            if (a, a) not in self.pairs:
                return False
        return True
    
    def is_symmetric(self):
        """Check if relation is symmetric"""
        for a, b in self.pairs:
            if (b, a) not in self.pairs:
                return False
        return True
    
    def is_antisymmetric(self):
        """Check if relation is antisymmetric"""
        for a, b in self.pairs:
            if a != b and (b, a) in self.pairs:
                return False
        return True
    
    def is_transitive(self):
        """Check if relation is transitive"""
        for a, b in self.pairs:
            for c in self.domain:
                if (b, c) in self.pairs and (a, c) not in self.pairs:
                    return False
        return True
    
    def is_equivalence(self):
        """Check if relation is an equivalence relation"""
        return (self.is_reflexive() and 
                self.is_symmetric() and 
                self.is_transitive())
    
    def is_partial_order(self):
        """Check if relation is a partial order"""
        return (self.is_reflexive() and 
                self.is_antisymmetric() and 
                self.is_transitive())
    
    def equivalence_classes(self):
        """Find equivalence classes if relation is equivalence"""
        if not self.is_equivalence():
            raise ValueError("Not an equivalence relation")
        
        classes = []
        processed = set()
        
        for a in self.domain:
            if a not in processed:
                eq_class = {a}
                for b in self.domain:
                    if (a, b) in self.pairs:
                        eq_class.add(b)
                        processed.add(b)
                classes.append(eq_class)
        
        return classes
    
    def transitive_closure(self):
        """Compute transitive closure using Floyd-Warshall"""
        closure_pairs = self.pairs.copy()
        domain_list = list(self.domain)
        
        # Floyd-Warshall algorithm
        for k in domain_list:
            for i in domain_list:
                for j in domain_list:
                    if (i, k) in closure_pairs and (k, j) in closure_pairs:
                        closure_pairs.add((i, j))
        
        return Relation(self.domain, self.codomain, closure_pairs)
    
    def __str__(self):
        return f"R = {self.pairs}"

# Example usage
if __name__ == "__main__":
    # Equivalence relation example
    domain = {1, 2, 3, 4}
    pairs = {(1,1), (2,2), (3,3), (4,4), (1,2), (2,1), (3,4), (4,3)}
    R = Relation(domain, domain, pairs)
    
    print(f"Reflexive: {R.is_reflexive()}")
    print(f"Symmetric: {R.is_symmetric()}")
    print(f"Transitive: {R.is_transitive()}")
    print(f"Equivalence: {R.is_equivalence()}")
    
    if R.is_equivalence():
        print(f"Equivalence classes: {R.equivalence_classes()}")
```

### 3.2 Function Implementation
```python
class Function:
    def __init__(self, domain, codomain, mapping=None):
        self.domain = set(domain)
        self.codomain = set(codomain)
        self.mapping = mapping if mapping else {}
        self._validate()
    
    def _validate(self):
        """Validate function properties"""
        # Check if every domain element is mapped
        for x in self.domain:
            if x not in self.mapping:
                raise ValueError(f"Domain element {x} not mapped")
        
        # Check if all mapped values are in codomain
        for x, y in self.mapping.items():
            if y not in self.codomain:
                raise ValueError(f"Value {y} not in codomain")
    
    def __call__(self, x):
        """Function call notation f(x)"""
        if x not in self.domain:
            raise ValueError(f"{x} not in domain")
        return self.mapping[x]
    
    def image(self):
        """Return the image/range of the function"""
        return set(self.mapping.values())
    
    def preimage(self, y):
        """Return preimage of y"""
        return {x for x in self.domain if self.mapping[x] == y}
    
    def is_injective(self):
        """Check if function is injective (one-to-one)"""
        values = list(self.mapping.values())
        return len(values) == len(set(values))
    
    def is_surjective(self):
        """Check if function is surjective (onto)"""
        return self.image() == self.codomain
    
    def is_bijective(self):
        """Check if function is bijective"""
        return self.is_injective() and self.is_surjective()
    
    def compose(self, other):
        """Compose this function with another: (self ∘ other)"""
        if other.codomain != self.domain:
            raise ValueError("Cannot compose: codomain of g ≠ domain of f")
        
        new_mapping = {}
        for x in other.domain:
            if other(x) in self.domain:
                new_mapping[x] = self(other(x))
        
        return Function(other.domain, self.codomain, new_mapping)
    
    def inverse(self):
        """Return inverse function if bijective"""
        if not self.is_bijective():
            raise ValueError("Function is not bijective")
        
        inverse_mapping = {v: k for k, v in self.mapping.items()}
        return Function(self.codomain, self.domain, inverse_mapping)
    
    def restrict(self, subset):
        """Restrict function to subset of domain"""
        if not subset.issubset(self.domain):
            raise ValueError("Subset not contained in domain")
        
        restricted_mapping = {x: self.mapping[x] for x in subset}
        return Function(subset, self.codomain, restricted_mapping)
    
    def __str__(self):
        return f"f: {self.domain} → {self.codomain}, f = {self.mapping}"

# Advanced function operations
class FunctionOperations:
    @staticmethod
    def identity(domain):
        """Create identity function on domain"""
        mapping = {x: x for x in domain}
        return Function(domain, domain, mapping)
    
    @staticmethod
    def constant(domain, codomain, value):
        """Create constant function"""
        if value not in codomain:
            raise ValueError("Value not in codomain")
        mapping = {x: value for x in domain}
        return Function(domain, codomain, mapping)
    
    @staticmethod
    def characteristic(universal_set, subset):
        """Create characteristic function of subset"""
        mapping = {x: 1 if x in subset else 0 for x in universal_set}
        return Function(universal_set, {0, 1}, mapping)
    
    @staticmethod
    def power_function(base, domain):
        """Create power function f(x) = base^x"""
        mapping = {x: base ** x for x in domain}
        codomain = set(mapping.values())
        return Function(domain, codomain, mapping)

# Example usage
if __name__ == "__main__":
    # Create a bijective function
    domain = {1, 2, 3, 4}
    codomain = {'a', 'b', 'c', 'd'}
    mapping = {1: 'a', 2: 'b', 3: 'c', 4: 'd'}
    f = Function(domain, codomain, mapping)
    
    print(f"Injective: {f.is_injective()}")
    print(f"Surjective: {f.is_surjective()}")
    print(f"Bijective: {f.is_bijective()}")
    
    if f.is_bijective():
        f_inv = f.inverse()
        print(f"Inverse: {f_inv}")
    
    # Function composition
    g_mapping = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
    g = Function(codomain, domain, g_mapping)
    
    composition = g.compose(f)
    print(f"g ∘ f = {composition}")
```

### 3.3 Database Applications
```python
class DatabaseRelations:
    def __init__(self):
        self.tables = {}
        self.relations = {}
    
    def create_table(self, name, attributes, primary_key):
        """Create a table with attributes"""
        self.tables[name] = {
            'attributes': attributes,
            'primary_key': primary_key,
            'records': set()
        }
    
    def insert_record(self, table_name, record):
        """Insert a record (tuple) into table"""
        if table_name not in self.tables:
            raise ValueError(f"Table {table_name} does not exist")
        
        table = self.tables[table_name]
        if len(record) != len(table['attributes']):
            raise ValueError("Record length doesn't match attributes")
        
        table['records'].add(record)
    
    def create_foreign_key(self, table1, attr1, table2, attr2):
        """Create foreign key relationship"""
        relation_name = f"{table1}.{attr1} -> {table2}.{attr2}"
        
        # Get attribute indices
        idx1 = self.tables[table1]['attributes'].index(attr1)
        idx2 = self.tables[table2]['attributes'].index(attr2)
        
        # Create relation pairs
        pairs = set()
        for record1 in self.tables[table1]['records']:
            for record2 in self.tables[table2]['records']:
                if record1[idx1] == record2[idx2]:
                    pairs.add((record1, record2))
        
        self.relations[relation_name] = pairs
    
    def join(self, table1, table2, condition):
        """Perform join operation using relations"""
        result = set()
        for r1 in self.tables[table1]['records']:
            for r2 in self.tables[table2]['records']:
                if condition(r1, r2):
                    result.add(r1 + r2)  # Concatenate tuples
        return result
    
    def project(self, table_name, attributes):
        """Project table onto specified attributes"""
        table = self.tables[table_name]
        indices = [table['attributes'].index(attr) for attr in attributes]
        
        result = set()
        for record in table['records']:
            projected = tuple(record[i] for i in indices)
            result.add(projected)
        
        return result
    
    def select(self, table_name, condition):
        """Select records satisfying condition"""
        return {record for record in self.tables[table_name]['records'] 
                if condition(record)}

# Example usage
db = DatabaseRelations()

# Create tables
db.create_table('Students', ['id', 'name', 'age'], 'id')
db.create_table('Courses', ['code', 'title', 'credits'], 'code')
db.create_table('Enrollments', ['student_id', 'course_code', 'grade'], None)

# Insert data
db.insert_record('Students', (1, 'Alice', 20))
db.insert_record('Students', (2, 'Bob', 21))
db.insert_record('Courses', ('CS101', 'Intro to CS', 3))
db.insert_record('Courses', ('MATH201', 'Calculus', 4))
db.insert_record('Enrollments', (1, 'CS101', 'A'))
db.insert_record('Enrollments', (2, 'CS101', 'B'))

# Create relationships
db.create_foreign_key('Enrollments', 'student_id', 'Students', 'id')
db.create_foreign_key('Enrollments', 'course_code', 'Courses', 'code')

# Perform operations
students_in_cs101 = db.select('Enrollments', lambda r: r[1] == 'CS101')
print(f"Students in CS101: {students_in_cs101}")
```

## 📝 Practice Problems (200+ Problems)

### Relations Problems (1-75)
1. Let A = {1, 2, 3} and R = {(1,1), (1,2), (2,2), (2,3), (3,3)}. Check all properties of R.
2. Find the equivalence classes of the relation "congruent modulo 3" on {0, 1, 2, 3, 4, 5, 6}.
3. Prove that the relation "has the same remainder when divided by n" is an equivalence relation.
4. Draw the Hasse diagram for the divisibility relation on {1, 2, 3, 4, 6, 8, 12}.
5. Find the transitive closure of R = {(1,2), (2,3), (3,1), (4,4)} on {1, 2, 3, 4}.

### Functions Problems (76-150)
26. Determine if f: ℝ → ℝ, f(x) = x³ - x is injective, surjective, or bijective.
27. Find the inverse of f: ℝ⁺ → ℝ⁺, f(x) = 2x + 3.
28. If f: A → B and g: B → C are both bijective, prove that g ∘ f is bijective.
29. Find all functions from {1, 2} to {a, b}.
30. Prove that if f: A → B is bijective, then |A| = |B|.

### Advanced Problems (151-200)
76. Prove that the composition of equivalence relations is not necessarily an equivalence relation.
77. Show that every function f: A → B can be factored as f = i ∘ g where g is surjective and i is injective.
78. Prove that if R is an equivalence relation on A, then A/R forms a partition of A.
79. Find the number of reflexive relations on a set with n elements.
80. Prove that the set of all bijective functions from A to A forms a group under composition.

## 🧪 Programming Labs

### Lab 1: Relation Analyzer
```python
class RelationAnalyzer:
    def __init__(self, relation):
        self.relation = relation
    
    def analyze_properties(self):
        """Comprehensive analysis of relation properties"""
        properties = {
            'reflexive': self.relation.is_reflexive(),
            'symmetric': self.relation.is_symmetric(),
            'antisymmetric': self.relation.is_antisymmetric(),
            'transitive': self.relation.is_transitive(),
            'equivalence': self.relation.is_equivalence(),
            'partial_order': self.relation.is_partial_order()
        }
        return properties
    
    def visualize_matrix(self):
        """Create matrix representation"""
        domain_list = sorted(list(self.relation.domain))
        n = len(domain_list)
        matrix = [[0 for _ in range(n)] for _ in range(n)]
        
        for i, a in enumerate(domain_list):
            for j, b in enumerate(domain_list):
                if (a, b) in self.relation.pairs:
                    matrix[i][j] = 1
        
        return matrix, domain_list
    
    def find_strongly_connected_components(self):
        """Find SCCs using Tarjan's algorithm"""
        # Implementation of Tarjan's algorithm
        pass
```

### Lab 2: Function Composer
```python
class FunctionComposer:
    def __init__(self):
        self.functions = {}
    
    def add_function(self, name, function):
        """Add a function to the composer"""
        self.functions[name] = function
    
    def compose_chain(self, function_names):
        """Compose a chain of functions"""
        if len(function_names) < 2:
            raise ValueError("Need at least 2 functions to compose")
        
        result = self.functions[function_names[0]]
        for name in function_names[1:]:
            result = self.functions[name].compose(result)
        
        return result
    
    def find_inverse_chain(self, function_names):
        """Find inverse of composition"""
        composition = self.compose_chain(function_names)
        if composition.is_bijective():
            return composition.inverse()
        else:
            raise ValueError("Composition is not bijective")
```

### Lab 3: Equivalence Class Partitioner
```python
class EquivalencePartitioner:
    def __init__(self, universe, relation_function):
        self.universe = set(universe)
        self.relation_function = relation_function
    
    def partition(self):
        """Partition universe into equivalence classes"""
        classes = []
        processed = set()
        
        for element in self.universe:
            if element not in processed:
                eq_class = self.find_equivalence_class(element)
                classes.append(eq_class)
                processed.update(eq_class)
        
        return classes
    
    def find_equivalence_class(self, element):
        """Find equivalence class of given element"""
        eq_class = {element}
        for other in self.universe:
            if self.relation_function(element, other):
                eq_class.add(other)
        return eq_class
    
    def quotient_set_operations(self, classes):
        """Define operations on quotient set"""
        # Implementation of operations on equivalence classes
        pass
```

## 🎯 Assessment and Evaluation

### Quiz Questions (30 questions)
1. What is the difference between a relation and a function?
2. Give an example of a relation that is symmetric but not transitive.
3. Prove that the identity function is bijective.
4. Find the number of functions from a set of size m to a set of size n.
5. What conditions must a relation satisfy to be a partial order?

### Programming Assignments
1. Build a complete relation and function library
2. Implement a database query system using relations
3. Create an equivalence class calculator
4. Develop a function composition visualizer

### Major Project: Social Network Analyzer
Build a system that uses relations and functions to analyze social networks:
- Model friendships as symmetric relations
- Implement equivalence relations for communities
- Use functions to model influence propagation
- Analyze network properties using graph theory

## 📚 Resources and References

### Textbooks
- "Discrete Mathematics and Its Applications" by Kenneth Rosen (Chapters 9-10)
- "A Mathematical Introduction to Logic" by Herbert Enderton
- "Abstract Algebra" by David Dummit and Richard Foote

### Online Resources
- [Relation and Function Visualizer](https://www.geogebra.org/m/relations-functions)
- [Wolfram MathWorld - Relations](https://mathworld.wolfram.com/Relation.html)
- [MIT OpenCourseWare - Discrete Mathematics](https://ocw.mit.edu)

## 🏆 Learning Outcomes
After completing this module, you will:
- Master all types of relations and their properties
- Understand function types and operations
- Apply relations and functions to database design
- Implement efficient algorithms for relation operations
- Solve complex problems involving equivalence classes
- Score 95%+ on relation and function problems
- Be prepared for advanced topics in discrete mathematics

**Next Module**: Number Theory →