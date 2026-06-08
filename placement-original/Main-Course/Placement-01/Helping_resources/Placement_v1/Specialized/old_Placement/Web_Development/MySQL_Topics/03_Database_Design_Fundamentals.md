# Database Design Fundamentals

## Database Terminology

### Basic Terms
- **Database**: A structured collection of data
- **Table**: A collection of related data organized in rows and columns
- **Row/Record**: A single entry in a table
- **Column/Field**: A specific piece of data in a table
- **Primary Key**: A unique identifier for each record
- **Foreign Key**: A field that links to a primary key in another table
- **Index**: A data structure that improves the speed of data retrieval
- **Query**: A request for data from a database
- **Schema**: The structure that represents the logical view of the entire database

### Relationships
- **One-to-One**: One record in table A relates to exactly one record in table B
- **One-to-Many**: One record in table A relates to multiple records in table B
- **Many-to-Many**: Multiple records in table A relate to multiple records in table B

## Data Types in MySQL

### Numeric Types
- **INT**: Integer (-2,147,483,648 to 2,147,483,647)
- **TINYINT**: Small integer (-128 to 127)
- **SMALLINT**: Small integer (-32,768 to 32,767)
- **MEDIUMINT**: Medium-sized integer (-8,388,608 to 8,388,607)
- **BIGINT**: Large integer (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
- **FLOAT**: Single-precision floating-point number
- **DOUBLE**: Double-precision floating-point number
- **DECIMAL(M,D)**: Fixed-point number with M digits total and D digits after decimal

### String Types
- **CHAR(N)**: Fixed-length string (1 to 255 characters)
- **VARCHAR(N)**: Variable-length string (1 to 65,535 characters)
- **TINYTEXT**: String with a maximum length of 255 characters
- **TEXT**: String with a maximum length of 65,535 characters
- **MEDIUMTEXT**: String with a maximum length of 16,777,215 characters
- **LONGTEXT**: String with a maximum length of 4,294,967,295 characters
- **ENUM**: String object with a value chosen from a list of permitted values
- **SET**: String object that can have zero or more values from a predefined list

### Date and Time Types
- **DATE**: Date in 'YYYY-MM-DD' format
- **TIME**: Time in 'HH:MM:SS' format
- **DATETIME**: Date and time in 'YYYY-MM-DD HH:MM:SS' format
- **TIMESTAMP**: Timestamp stored as the number of seconds since the Unix epoch
- **YEAR**: Year in 2-digit or 4-digit format

### Binary Types
- **BINARY(N)**: Fixed-length binary string
- **VARBINARY(N)**: Variable-length binary string
- **TINYBLOB**: Binary large object up to 255 bytes
- **BLOB**: Binary large object up to 65,535 bytes
- **MEDIUMBLOB**: Binary large object up to 16,777,215 bytes
- **LONGBLOB**: Binary large object up to 4,294,967,295 bytes

### Spatial Types
- **GEOMETRY**: Any type of geometry value
- **POINT**: A point (X,Y coordinates)
- **LINESTRING**: A curve (one or more POINT values)
- **POLYGON**: A polygon
- **MULTIPOINT**: A collection of points
- **MULTILINESTRING**: A collection of curves
- **MULTIPOLYGON**: A collection of polygons
- **GEOMETRYCOLLECTION**: A collection of geometry objects

### JSON Type
- **JSON**: Stores JSON documents

## Normalization

Normalization is the process of organizing data to minimize redundancy and dependency.

### First Normal Form (1NF)
- Each table cell should contain a single value
- Each record needs to be unique

Example:
```
// Not in 1NF (multiple values in one cell)
| StudentID | Name  | Courses         |
|-----------|-------|-----------------|
| 1         | John  | Math, Science   |

// In 1NF
| StudentID | Name  | Course  |
|-----------|-------|---------|
| 1         | John  | Math    |
| 1         | John  | Science |
```

### Second Normal Form (2NF)
- Must be in 1NF
- All non-key attributes must depend on the entire primary key

Example:
```
// Not in 2NF (CourseInstructor depends only on CourseID, not on StudentID)
| StudentID | CourseID | CourseName | CourseInstructor |
|-----------|----------|------------|------------------|
| 1         | C1       | Math       | Prof. Smith      |

// In 2NF
// Table 1: Student_Course
| StudentID | CourseID |
|-----------|----------|
| 1         | C1       |

// Table 2: Course
| CourseID | CourseName | CourseInstructor |
|----------|------------|------------------|
| C1       | Math       | Prof. Smith      |
```

### Third Normal Form (3NF)
- Must be in 2NF
- No transitive dependencies (non-key attributes shouldn't depend on other non-key attributes)

Example:
```
// Not in 3NF (InstructorOffice depends on InstructorID, not directly on CourseID)
| CourseID | CourseName | InstructorID | InstructorOffice |
|----------|------------|--------------|------------------|
| C1       | Math       | I1           | Room 101         |

// In 3NF
// Table 1: Course
| CourseID | CourseName | InstructorID |
|----------|------------|--------------|
| C1       | Math       | I1           |

// Table 2: Instructor
| InstructorID | InstructorOffice |
|--------------|------------------|
| I1           | Room 101         |
```

### Boyce-Codd Normal Form (BCNF)
- Must be in 3NF
- For any dependency A → B, A should be a superkey

## Entity-Relationship Diagrams

Entity-Relationship (ER) diagrams visually represent the relationships between entities in a database.

### Components
- **Entities**: Rectangles representing tables
- **Attributes**: Ovals representing columns
- **Relationships**: Diamond shapes showing how entities relate
- **Cardinality**: Numbers or symbols showing the type of relationship (1:1, 1:N, N:M)

### Example ER Diagram (simplified notation)
```
+-------------+       +--------------+
|   Student   |       |    Course    |
+-------------+       +--------------+
| *StudentID  |       | *CourseID    |
|  Name       |       |  CourseName  |
|  Email      |       |  Credits     |
+-------------+       +--------------+
       |                     |
       |                     |
       +------< Enrolls >----+
              | Grade  |
              +--------+
```

## Primary Keys and Foreign Keys

### Primary Keys
- Uniquely identify each record in a table
- Cannot contain NULL values
- Should be immutable (not change over time)
- Can be a single column or multiple columns (composite key)

```sql
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50)
);
```

### Foreign Keys
- Create relationships between tables
- Reference a primary key in another table
- Enforce referential integrity

```sql
CREATE TABLE Enrollments (
    EnrollmentID INT PRIMARY KEY,
    StudentID INT,
    CourseID INT,
    EnrollmentDate DATE,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);
```

## Indexes and Constraints

### Indexes
- Improve query performance
- Create additional data structures for faster searches
- Can be created on one or multiple columns

```sql
-- Create an index on a single column
CREATE INDEX idx_lastname ON Students(LastName);

-- Create an index on multiple columns
CREATE INDEX idx_name ON Students(LastName, FirstName);

-- Create a unique index
CREATE UNIQUE INDEX idx_email ON Students(Email);
```

### Constraints
- Rules enforced on data columns
- Ensure data integrity

#### Types of Constraints
- **NOT NULL**: Column cannot have NULL values
- **UNIQUE**: All values in the column must be unique
- **PRIMARY KEY**: Combination of NOT NULL and UNIQUE
- **FOREIGN KEY**: Ensures referential integrity
- **CHECK**: Ensures values meet a specific condition
- **DEFAULT**: Sets a default value for a column

```sql
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    Price DECIMAL(10,2) CHECK (Price > 0),
    Category VARCHAR(50) DEFAULT 'Uncategorized',
    SupplierID INT,
    FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID),
    UNIQUE (ProductName)
);
```