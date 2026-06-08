# Relational Model

## Introduction to Relational Model

The **Relational Model** is a database model introduced by E.F. Codd in 1970. It organizes data into tables (relations) consisting of rows and columns, where each row represents a record and each column represents an attribute.

## Basic Terminology

- **Relation**: A table with rows and columns
- **Tuple**: A row in a relation (record)
- **Attribute**: A column in a relation (field)
- **Domain**: Set of allowed values for an attribute
- **Cardinality**: Number of tuples in a relation
- **Degree**: Number of attributes in a relation
- **Schema**: Structure of a relation (relation name with attributes)
- **Instance**: Actual data in a relation at a particular moment

## Keys in Relational Model

### 1. Super Key
- Set of attributes that uniquely identifies a tuple
- May contain redundant attributes

### 2. Candidate Key
- Minimal super key (no redundant attributes)
- Multiple candidate keys may exist in a relation

### 3. Primary Key
- Candidate key selected to uniquely identify tuples
- Cannot contain NULL values
- Should be simple and stable

### 4. Foreign Key
- Attribute that refers to primary key of another relation
- Creates relationship between tables
- Enforces referential integrity

### 5. Alternate Key
- Candidate keys not chosen as primary key

### 6. Composite Key
- Key that consists of two or more attributes

## Integrity Constraints

### 1. Domain Constraints
- Attributes must take values from their defined domains
- Example: Age must be a positive integer

### 2. Key Constraints
- No two tuples can have the same value for primary key
- Primary key cannot be NULL

### 3. Referential Integrity Constraints
- If foreign key in Table A refers to primary key in Table B, then:
  - The referenced value must exist in Table B
  - Or the foreign key value must be NULL (if allowed)

### 4. Entity Integrity Constraint
- Primary key attributes cannot be NULL

## Relational Algebra

Relational algebra is a procedural query language that works on relations. It consists of a set of operations that take one or more relations as input and produce a new relation as output.

### Basic Operations

#### 1. Selection (σ)
- Selects tuples that satisfy a given condition
- Notation: σ<sub>condition</sub>(relation)
- Example: σ<sub>age>25</sub>(Employee)

#### 2. Projection (π)
- Extracts specified columns from a relation
- Notation: π<sub>attributes</sub>(relation)
- Example: π<sub>name,salary</sub>(Employee)

#### 3. Union (∪)
- Combines tuples from two relations (must be union-compatible)
- Notation: relation1 ∪ relation2
- Example: Employee ∪ NewEmployee

#### 4. Set Difference (-)
- Returns tuples in first relation but not in second
- Notation: relation1 - relation2
- Example: Employee - TerminatedEmployee

#### 5. Cartesian Product (×)
- Combines each tuple from first relation with every tuple from second
- Notation: relation1 × relation2
- Example: Employee × Department

### Additional Operations

#### 6. Join (⋈)
- Combines related tuples from two relations based on condition
- Types:
  - **Natural Join**: Join on common attributes
  - **Theta Join**: Join based on condition
  - **Equi Join**: Join with equality condition
  - **Outer Join**: Preserves unmatched tuples (Left, Right, Full)

#### 7. Intersection (∩)
- Returns tuples present in both relations
- Notation: relation1 ∩ relation2

#### 8. Division (÷)
- Returns values from first relation that match all values in second
- Notation: relation1 ÷ relation2

## Relational Calculus

Relational calculus is a non-procedural query language that describes what data to retrieve rather than how to retrieve it.

### Types of Relational Calculus

#### 1. Tuple Relational Calculus (TRC)
- Uses tuple variables that range over tuples
- Notation: {T | condition(T)}
- Example: {T | T ∈ Employee ∧ T.salary > 50000}

#### 2. Domain Relational Calculus (DRC)
- Uses domain variables that range over attribute domains
- Notation: {⟨x,y,z⟩ | condition(x,y,z)}
- Example: {⟨name,salary⟩ | ⟨name,salary,dept⟩ ∈ Employee ∧ salary > 50000}

## SQL and Relational Model

SQL (Structured Query Language) is based on the relational model and implements:
- Data Definition Language (DDL): CREATE, ALTER, DROP
- Data Manipulation Language (DML): SELECT, INSERT, UPDATE, DELETE
- Data Control Language (DCL): GRANT, REVOKE
- Transaction Control Language (TCL): COMMIT, ROLLBACK

## References
1. [GeeksforGeeks - Introduction of Relational Model](https://www.geeksforgeeks.org/relational-model-in-dbms/)
2. [GeeksforGeeks - Keys in Relational Model](https://www.geeksforgeeks.org/types-of-keys-in-relational-model-candidate-super-primary-alternate-and-foreign/)
3. [GeeksforGeeks - Relational Algebra](https://www.geeksforgeeks.org/relational-algebra-in-dbms/)
4. [GeeksforGeeks - Relational Calculus](https://www.geeksforgeeks.org/relational-calculus-in-dbms/)