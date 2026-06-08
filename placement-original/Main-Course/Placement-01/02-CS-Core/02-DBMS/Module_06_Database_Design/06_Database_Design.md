# Module 6: Database Design & Normalization

## Database Design Process

### 1. Requirements Analysis
- Identify entities and relationships
- Determine data requirements
- Understand business rules

### 2. Conceptual Design
- Create Entity-Relationship (ER) model
- Define entities, attributes, relationships

### 3. Logical Design
- Convert ER model to relational schema
- Apply normalization rules

### 4. Physical Design
- Choose storage structures
- Design indexes and partitions

## Entity-Relationship (ER) Model

### Entities
- Real-world objects (Student, Course, Employee)
- Represented as rectangles in ER diagrams

### Attributes
- Properties of entities
- Simple, Composite, Derived, Multi-valued

### Relationships
- Associations between entities
- One-to-One, One-to-Many, Many-to-Many

### ER Diagram Example
```
[Student] ----< Enrolls >---- [Course]
    |                           |
StudentID                   CourseID
Name                       CourseName
Age                        Credits
Email
```

## Normalization

### Purpose
- Eliminate data redundancy
- Reduce update anomalies
- Improve data integrity

### First Normal Form (1NF)
- Each column contains atomic values
- No repeating groups

**Before 1NF:**
| StudentID | Name | Courses |
|-----------|------|---------|
| 1 | John | Math, Physics |

**After 1NF:**
| StudentID | Name | Course |
|-----------|------|--------|
| 1 | John | Math |
| 1 | John | Physics |

### Second Normal Form (2NF)
- Must be in 1NF
- No partial dependencies on composite primary key

**Before 2NF:**
| StudentID | CourseID | StudentName | CourseName |
|-----------|----------|-------------|------------|
| 1 | 101 | John | Math |

**After 2NF:**
Students: | StudentID | StudentName |
Courses: | CourseID | CourseName |
Enrollments: | StudentID | CourseID |

### Third Normal Form (3NF)
- Must be in 2NF
- No transitive dependencies

**Before 3NF:**
| StudentID | Name | DeptID | DeptName |
|-----------|------|--------|----------|
| 1 | John | 10 | Computer Science |

**After 3NF:**
Students: | StudentID | Name | DeptID |
Departments: | DeptID | DeptName |

### Boyce-Codd Normal Form (BCNF)
- Stronger version of 3NF
- Every determinant must be a candidate key

### Fourth Normal Form (4NF)
- Must be in BCNF
- No multi-valued dependencies

### Fifth Normal Form (5NF)
- Must be in 4NF
- No join dependencies

## Functional Dependencies

### Definition
- X → Y means Y is functionally dependent on X
- If we know X, we can determine Y

### Types
- **Full Dependency**: Y depends on entire X
- **Partial Dependency**: Y depends on part of X
- **Transitive Dependency**: X → Y → Z

## Denormalization

### When to Denormalize
- Performance requirements
- Read-heavy applications
- Data warehousing

### Techniques
- Storing calculated fields
- Duplicating data across tables
- Creating summary tables

## Database Design Best Practices

1. **Use meaningful names** for tables and columns
2. **Choose appropriate data types** and sizes
3. **Define proper constraints** and relationships
4. **Consider indexing strategy** early
5. **Plan for scalability** and growth
6. **Document design decisions**

## Practical Exercise
Design a normalized database for:
1. Library Management System
2. E-commerce Platform
3. Hospital Management System

Include:
- ER diagrams
- Normalized tables (up to 3NF)
- Sample data
- Common queries

## Assignment
Create a complete database design document for a social media platform including:
- Requirements analysis
- ER model
- Normalized schema
- Sample data and queries

## Next Module
Module 7: Indexing & Query Optimization