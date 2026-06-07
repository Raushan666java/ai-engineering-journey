# Entity-Relationship Model

## Introduction to ER Model

The **Entity-Relationship (ER) Model** is a high-level conceptual data model used to define data elements and relationships for a system. It creates a diagram of entities and their relationships to each other, which is essential for designing databases.

## Components of ER Model

### 1. Entity
- A real-world object with an independent existence
- Can be physical (person, car) or conceptual (account, course)
- Represented by a **rectangle** in ER diagram

#### Types of Entities:
- **Strong Entity**: Exists independently (e.g., Student)
- **Weak Entity**: Depends on another entity for existence (e.g., Dependent)

### 2. Attributes
- Properties that describe an entity
- Represented by **ovals** in ER diagram

#### Types of Attributes:
- **Simple**: Cannot be divided further (e.g., age)
- **Composite**: Can be divided into smaller parts (e.g., address)
- **Single-valued**: Have single value (e.g., SSN)
- **Multi-valued**: Have multiple values (e.g., phone numbers)
- **Derived**: Can be derived from other attributes (e.g., age from DOB)
- **Key Attribute**: Uniquely identifies an entity (e.g., student ID)

### 3. Relationships
- Association between two or more entities
- Represented by **diamond** in ER diagram

#### Types of Relationships:
- **One-to-One (1:1)**: One entity is associated with exactly one other entity
- **One-to-Many (1:N)**: One entity can be associated with multiple entities
- **Many-to-One (N:1)**: Multiple entities associated with one entity
- **Many-to-Many (M:N)**: Multiple entities associated with multiple entities

### 4. Cardinality
- Maximum number of relationship instances an entity can participate in
- Minimum cardinality (participation): 
  - **Total**: Every entity must participate (double line)
  - **Partial**: Participation is optional (single line)

## ER Diagram Notation

### Chen Notation
- Entities: Rectangles
- Attributes: Ovals
- Relationships: Diamonds
- Cardinality: 1, N, M

### Crow's Foot Notation
- One: Single line
- Many: Crow's foot (three lines)
- Optional: Circle
- Mandatory: Vertical bar

## Advanced Concepts

### 1. Generalization
- Process of extracting common characteristics from entities to create a generalized entity
- Represented by a triangle with "ISA" (is a) label
- Example: Employee (generalized) → Manager, Engineer (specialized)

### 2. Specialization
- Process of defining subgroups within an entity based on characteristics
- Inverse of generalization
- Can be:
  - **Total**: Every entity in parent must belong to a child
  - **Partial**: Entity in parent may not belong to any child

### 3. Aggregation
- Represents a relationship between a whole object and its component parts
- Allows treating relationships as entities
- Represented by nesting one entity within another

## Converting ER Diagram to Tables

### Steps:
1. **Strong Entity**: Create table with all simple attributes and primary key
2. **Weak Entity**: Create table with all attributes and foreign key from owner entity
3. **1:1 Relationship**: Include primary key of one entity as foreign key in other
4. **1:N Relationship**: Include primary key of "one" side as foreign key in "many" side
5. **M:N Relationship**: Create a new table with primary keys of both entities
6. **Multi-valued Attribute**: Create separate table with entity's primary key
7. **Composite Attribute**: Either include component attributes or create as single attribute

## Example ER to Relational Schema

**ER Components:**
- Entity: Student (student_id, name, address)
- Entity: Course (course_id, title, credits)
- Relationship: Enrolls (Student to Course, M:N)

**Relational Schema:**
```
Student(student_id, name, address)
Course(course_id, title, credits)
Enrolls(student_id, course_id, grade, date)
```

## References
1. [GeeksforGeeks - Introduction of ER Model](https://www.geeksforgeeks.org/introduction-of-er-model/)
2. [GeeksforGeeks - Entity Relationship Diagram](https://www.geeksforgeeks.org/entity-relationship-diagram-erd/)
3. [GeeksforGeeks - Generalization, Specialization and Aggregation in ER Model](https://www.geeksforgeeks.org/generalization-specialization-and-aggregation-in-er-model/)