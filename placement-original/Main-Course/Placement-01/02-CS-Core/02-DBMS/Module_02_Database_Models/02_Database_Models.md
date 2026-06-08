# Module 2: Database Models & Architecture

## Database Models

### 1. Hierarchical Model
- Tree-like structure
- Parent-child relationships
- Example: File systems

### 2. Network Model
- Graph structure
- Many-to-many relationships
- More flexible than hierarchical

### 3. Relational Model
- Data stored in tables (relations)
- Most popular model
- Uses SQL for queries

### 4. Object-Oriented Model
- Data stored as objects
- Supports inheritance and encapsulation

### 5. NoSQL Models
- **Document**: MongoDB (JSON documents)
- **Key-Value**: Redis (key-value pairs)
- **Column-Family**: Cassandra
- **Graph**: Neo4j (nodes and edges)

## Database Architecture

### 1. Single-Tier Architecture
- Database and application on same machine
- Used for personal applications

### 2. Two-Tier Architecture (Client-Server)
- **Client**: User interface
- **Server**: Database server
- Direct communication between client and server

### 3. Three-Tier Architecture
- **Presentation Tier**: User interface
- **Application Tier**: Business logic
- **Data Tier**: Database server

## ANSI-SPARC Architecture
### External Level (View Level)
- User views of database
- Different users see different views

### Conceptual Level (Logical Level)
- Complete view of database
- Describes what data is stored

### Internal Level (Physical Level)
- How data is physically stored
- Storage structures and access methods

## Data Independence
- **Logical Independence**: Changes to conceptual schema don't affect external schemas
- **Physical Independence**: Changes to internal schema don't affect conceptual schema

## Practical Exercise
1. Draw a hierarchical model for a company structure
2. Design a simple relational model for a library system
3. Compare relational vs document model for storing user profiles

## Assignment
Create a comparison table of all database models with pros/cons

## Next Module
Module 3: Relational Model Basics