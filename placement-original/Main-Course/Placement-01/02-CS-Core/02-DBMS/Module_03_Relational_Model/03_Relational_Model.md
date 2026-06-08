# Module 3: Relational Model Basics

## Relational Model Concepts

### Table (Relation)
- Collection of related data entries
- Consists of rows and columns

### Tuple (Row)
- Single record in a table
- Represents one entity instance

### Attribute (Column)
- Property or characteristic of an entity
- Has a specific data type

### Domain
- Set of allowable values for an attribute
- Example: Age domain = {0, 1, 2, ..., 150}

## Key Concepts

### 1. Primary Key
- Uniquely identifies each tuple
- Cannot be NULL
- Example: StudentID in Students table

### 2. Foreign Key
- References primary key of another table
- Maintains referential integrity
- Example: CourseID in Enrollments table

### 3. Candidate Key
- Attribute(s) that can serve as primary key
- Minimal set of attributes

### 4. Super Key
- Set of attributes that uniquely identifies tuples
- May contain extra attributes

### 5. Alternate Key
- Candidate keys not chosen as primary key

## Relational Constraints

### 1. Domain Constraints
- Values must be from specified domain
- Data type restrictions

### 2. Key Constraints
- Primary key must be unique and not NULL

### 3. Referential Integrity
- Foreign key must reference existing primary key
- Or be NULL

### 4. Entity Integrity
- Primary key cannot be NULL

## Relational Operations

### 1. Select (σ)
- Selects rows based on condition
- σ(age > 18)(Students)

### 2. Project (π)
- Selects specific columns
- π(name, age)(Students)

### 3. Union (∪)
- Combines two relations
- Must be union compatible

### 4. Intersection (∩)
- Common tuples from two relations

### 5. Difference (-)
- Tuples in first relation but not in second

### 6. Cartesian Product (×)
- All possible combinations of tuples

### 7. Join (⋈)
- Combines related tuples from two relations

## Example Schema
```sql
Students(StudentID, Name, Age, Email)
Courses(CourseID, CourseName, Credits)
Enrollments(StudentID, CourseID, Grade)
```

## Practical Exercise
1. Design a relational schema for a bookstore
2. Identify primary and foreign keys
3. Write relational algebra expressions for:
   - Find all students older than 20
   - Get names of students enrolled in 'DBMS' course

## Assignment
Create a complete relational model for an online shopping system

## Next Module
Module 4: SQL Fundamentals