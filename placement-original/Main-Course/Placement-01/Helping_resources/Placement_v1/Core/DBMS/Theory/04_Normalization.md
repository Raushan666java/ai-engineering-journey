# Normalization

## Introduction to Normalization

**Normalization** is a database design technique that reduces data redundancy and eliminates undesirable characteristics like Insertion, Update, and Deletion Anomalies. It divides larger tables into smaller tables and links them using relationships.

## Database Anomalies

### 1. Insertion Anomaly
- Cannot insert certain data because other data is missing
- Example: Cannot add a new course without assigning a student

### 2. Update Anomaly
- Changing data in one tuple requires changing many others
- Example: Changing a professor's office requires updating multiple records

### 3. Deletion Anomaly
- Deleting data causes unintended loss of other data
- Example: Deleting a student record removes the only information about a course

## Functional Dependencies

A **Functional Dependency (FD)** is a constraint between two sets of attributes in a relation. If A and B are attributes of a relation, A → B means B is functionally dependent on A if each A value is associated with exactly one B value.

### Properties of Functional Dependencies

#### 1. Armstrong's Axioms
- **Reflexivity**: If Y ⊆ X, then X → Y
- **Augmentation**: If X → Y, then XZ → YZ
- **Transitivity**: If X → Y and Y → Z, then X → Z

#### 2. Additional Rules
- **Union**: If X → Y and X → Z, then X → YZ
- **Decomposition**: If X → YZ, then X → Y and X → Z
- **Pseudotransitivity**: If X → Y and WY → Z, then WX → Z

## Normal Forms

### 1. First Normal Form (1NF)
- Each table cell should contain a single value
- Each record needs to be unique
- Eliminates repeating groups

**Example:**
```
Before 1NF:
Student(ID, Name, Courses)
1, John, [Math, Physics, Chemistry]

After 1NF:
Student(ID, Name, Course)
1, John, Math
1, John, Physics
1, John, Chemistry
```

### 2. Second Normal Form (2NF)
- Must be in 1NF
- All non-key attributes must depend on the entire primary key
- Eliminates partial dependencies

**Example:**
```
Before 2NF:
Student_Course(StudentID, CourseID, CourseName, StudentName)
Primary Key: (StudentID, CourseID)
Dependency: StudentID → StudentName, CourseID → CourseName

After 2NF:
Student(StudentID, StudentName)
Course(CourseID, CourseName)
Enrollment(StudentID, CourseID)
```

### 3. Third Normal Form (3NF)
- Must be in 2NF
- No transitive dependencies (non-key attributes depending on other non-key attributes)
- Every non-key attribute must depend directly on the primary key

**Example:**
```
Before 3NF:
Department(DeptID, DeptName, ManagerID, ManagerName)
Primary Key: DeptID
Dependency: DeptID → ManagerID, ManagerID → ManagerName

After 3NF:
Department(DeptID, DeptName, ManagerID)
Manager(ManagerID, ManagerName)
```

### 4. Boyce-Codd Normal Form (BCNF)
- Stricter version of 3NF
- For any dependency X → Y, X must be a super key
- Addresses certain anomalies not handled by 3NF

**Example:**
```
Before BCNF:
Course_Offering(CourseID, Professor, Semester)
Primary Key: (CourseID, Professor)
Dependencies: CourseID → Professor, Professor → Semester

After BCNF:
Professor_Semester(Professor, Semester)
Course_Professor(CourseID, Professor)
```

### 5. Fourth Normal Form (4NF)
- Must be in BCNF
- No multi-valued dependencies
- Addresses independent multi-valued facts about an entity

**Example:**
```
Before 4NF:
Student_Skills_Languages(StudentID, Skill, Language)

After 4NF:
Student_Skills(StudentID, Skill)
Student_Languages(StudentID, Language)
```

### 6. Fifth Normal Form (5NF)
- Also called Project-Join Normal Form (PJNF)
- Deals with join dependencies
- A table is in 5NF if it cannot be decomposed into smaller tables without loss of information

## Denormalization

**Denormalization** is the process of adding redundant data to one or more tables to improve read performance. It's a trade-off that sacrifices some write performance and storage space for read performance.

### When to Denormalize
- Read-heavy workloads
- Complex queries involving many joins
- Reporting and analytical applications
- When performance is critical

### Techniques
- Combining tables
- Adding redundant columns
- Pre-calculating values
- Creating summary tables

## References
1. [GeeksforGeeks - Introduction to Normalization](https://www.geeksforgeeks.org/introduction-of-database-normalization/)
2. [GeeksforGeeks - Normal Forms in DBMS](https://www.geeksforgeeks.org/normal-forms-in-dbms/)
3. [GeeksforGeeks - Functional Dependencies](https://www.geeksforgeeks.org/functional-dependency-and-attribute-closure/)
4. [GeeksforGeeks - Boyce-Codd Normal Form](https://www.geeksforgeeks.org/boyce-codd-normal-form-bcnf/)