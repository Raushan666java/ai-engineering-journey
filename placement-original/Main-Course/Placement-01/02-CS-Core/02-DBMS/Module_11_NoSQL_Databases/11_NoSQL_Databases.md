# Module 11: NoSQL Databases

## What is NoSQL?

### Definition
- "Not Only SQL" or "Non-SQL"
- Non-relational database systems
- Designed for specific data models
- Horizontal scalability focus

### Why NoSQL?
- **Big Data**: Handle massive volumes
- **Scalability**: Horizontal scaling
- **Flexibility**: Schema-less design
- **Performance**: Optimized for specific use cases
- **Variety**: Handle different data types

## NoSQL Categories

### 1. Document Databases

#### MongoDB Example
```javascript
// Insert document
db.users.insertOne({
    name: "John Doe",
    email: "john@example.com",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        zipcode: "10001"
    },
    hobbies: ["reading", "swimming"]
});

// Query documents
db.users.find({age: {$gte: 25}});

// Update document
db.users.updateOne(
    {email: "john@example.com"},
    {$set: {age: 31}}
);
```

#### Use Cases
- Content management
- User profiles
- Product catalogs
- Real-time analytics

### 2. Key-Value Stores

#### Redis Example
```bash
# Set key-value pairs
SET user:1001 "John Doe"
SET user:1001:email "john@example.com"

# Get values
GET user:1001

# Hash operations
HSET user:1002 name "Jane Smith" email "jane@example.com" age 28
HGET user:1002 name

# List operations
LPUSH tasks "task1" "task2" "task3"
LRANGE tasks 0 -1
```

#### Use Cases
- Session storage
- Caching
- Real-time recommendations
- Gaming leaderboards

### 3. Column-Family

#### Cassandra Example
```sql
-- Create keyspace
CREATE KEYSPACE company WITH replication = {
    'class': 'SimpleStrategy',
    'replication_factor': 3
};

-- Create table
CREATE TABLE employees (
    dept_id int,
    emp_id uuid,
    name text,
    salary decimal,
    PRIMARY KEY (dept_id, emp_id)
);

-- Insert data
INSERT INTO employees (dept_id, emp_id, name, salary)
VALUES (101, uuid(), 'John Doe', 50000);

-- Query data
SELECT * FROM employees WHERE dept_id = 101;
```

#### Use Cases
- Time-series data
- IoT sensor data
- Log analysis
- Financial data

### 4. Graph Databases

#### Neo4j Example
```cypher
// Create nodes
CREATE (john:Person {name: 'John Doe', age: 30})
CREATE (company:Company {name: 'Tech Corp'})
CREATE (skill:Skill {name: 'Python'})

// Create relationships
CREATE (john)-[:WORKS_FOR]->(company)
CREATE (john)-[:HAS_SKILL]->(skill)

// Query relationships
MATCH (p:Person)-[:WORKS_FOR]->(c:Company)
WHERE c.name = 'Tech Corp'
RETURN p.name

// Find connections
MATCH (p1:Person)-[:HAS_SKILL]->(s:Skill)<-[:HAS_SKILL]-(p2:Person)
WHERE p1.name = 'John Doe'
RETURN p2.name
```

#### Use Cases
- Social networks
- Recommendation engines
- Fraud detection
- Knowledge graphs

## CAP Theorem

### Three Properties
- **Consistency**: All nodes see same data simultaneously
- **Availability**: System remains operational
- **Partition Tolerance**: System continues despite network failures

### Trade-offs
- **CA**: Traditional RDBMS (MySQL, PostgreSQL)
- **CP**: MongoDB, Redis, HBase
- **AP**: Cassandra, DynamoDB, CouchDB

## ACID vs BASE

### ACID (Traditional)
- **Atomicity**: All or nothing
- **Consistency**: Valid state always
- **Isolation**: Concurrent execution
- **Durability**: Permanent storage

### BASE (NoSQL)
- **Basically Available**: System available
- **Soft State**: State may change
- **Eventually Consistent**: Consistency over time

## MongoDB Deep Dive

### Installation
```bash
# Ubuntu
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```

### Basic Operations
```javascript
// Database operations
use company_db
show dbs
show collections

// CRUD operations
// Create
db.employees.insertMany([
    {name: "John", dept: "IT", salary: 50000},
    {name: "Jane", dept: "HR", salary: 45000}
]);

// Read
db.employees.find({dept: "IT"});
db.employees.findOne({name: "John"});

// Update
db.employees.updateMany(
    {dept: "IT"},
    {$inc: {salary: 5000}}
);

// Delete
db.employees.deleteOne({name: "John"});
```

### Advanced Queries
```javascript
// Aggregation pipeline
db.employees.aggregate([
    {$match: {salary: {$gte: 40000}}},
    {$group: {
        _id: "$dept",
        avgSalary: {$avg: "$salary"},
        count: {$sum: 1}
    }},
    {$sort: {avgSalary: -1}}
]);

// Indexing
db.employees.createIndex({name: 1});
db.employees.createIndex({dept: 1, salary: -1});

// Text search
db.employees.createIndex({name: "text", dept: "text"});
db.employees.find({$text: {$search: "john"}});
```

## Redis Deep Dive

### Data Types
```bash
# Strings
SET counter 1
INCR counter
GET counter

# Lists
LPUSH mylist "item1" "item2"
RPOP mylist

# Sets
SADD myset "member1" "member2"
SMEMBERS myset

# Hashes
HSET user:1 name "John" age 30
HGETALL user:1

# Sorted Sets
ZADD leaderboard 100 "player1" 200 "player2"
ZRANGE leaderboard 0 -1 WITHSCORES
```

### Advanced Features
```bash
# Expiration
SETEX session:123 3600 "user_data"
TTL session:123

# Pub/Sub
SUBSCRIBE notifications
PUBLISH notifications "New message"

# Transactions
MULTI
SET key1 "value1"
SET key2 "value2"
EXEC
```

## Cassandra Deep Dive

### Data Modeling
```sql
-- Time-series data model
CREATE TABLE sensor_data (
    sensor_id text,
    timestamp timestamp,
    temperature double,
    humidity double,
    PRIMARY KEY (sensor_id, timestamp)
) WITH CLUSTERING ORDER BY (timestamp DESC);

-- Insert data
INSERT INTO sensor_data (sensor_id, timestamp, temperature, humidity)
VALUES ('sensor1', '2023-12-01 10:00:00', 25.5, 60.2);

-- Query recent data
SELECT * FROM sensor_data 
WHERE sensor_id = 'sensor1' 
AND timestamp >= '2023-12-01 09:00:00'
LIMIT 100;
```

## NoSQL vs SQL Comparison

| Aspect | SQL | NoSQL |
|--------|-----|-------|
| Schema | Fixed | Flexible |
| Scalability | Vertical | Horizontal |
| ACID | Full ACID | Eventually consistent |
| Queries | SQL | Various APIs |
| Joins | Supported | Limited/None |
| Use Cases | Complex transactions | Big data, real-time |

## Choosing the Right NoSQL Database

### Decision Matrix
1. **Data Structure**
   - Structured → Document DB
   - Key-Value → Key-Value Store
   - Relationships → Graph DB
   - Time-series → Column-family

2. **Scalability Requirements**
   - High write volume → Cassandra
   - High read volume → Redis
   - Balanced → MongoDB

3. **Consistency Requirements**
   - Strong consistency → MongoDB
   - Eventual consistency → Cassandra
   - Real-time → Redis

## Practical Implementation

### Node.js with MongoDB
```javascript
const { MongoClient } = require('mongodb');

async function main() {
    const client = new MongoClient('mongodb://localhost:27017');
    
    try {
        await client.connect();
        const db = client.db('company');
        const collection = db.collection('employees');
        
        // Insert
        await collection.insertOne({
            name: 'John Doe',
            department: 'IT',
            salary: 50000
        });
        
        // Find
        const employees = await collection.find({
            department: 'IT'
        }).toArray();
        
        console.log(employees);
    } finally {
        await client.close();
    }
}
```

### Python with Redis
```python
import redis

# Connect to Redis
r = redis.Redis(host='localhost', port=6379, db=0)

# Set data
r.set('user:1001', 'John Doe')
r.hset('user:1002', mapping={
    'name': 'Jane Smith',
    'email': 'jane@example.com'
})

# Get data
name = r.get('user:1001')
user_data = r.hgetall('user:1002')

print(f"User: {name.decode()}")
print(f"User data: {user_data}")
```

## Practical Exercises
1. Set up MongoDB and create a blog application
2. Implement caching with Redis
3. Design a time-series database with Cassandra
4. Build a social network with Neo4j

## Migration Strategies

### SQL to NoSQL Migration
1. **Analyze current schema**
2. **Choose appropriate NoSQL type**
3. **Design new data model**
4. **Create migration scripts**
5. **Test thoroughly**
6. **Gradual migration**

## Assignment
Design a complete NoSQL solution for:
- E-commerce platform
- Real-time analytics
- User session management
- Product recommendations

Include:
- Database selection rationale
- Data modeling
- Implementation code
- Performance considerations

## Next Module
Module 12: Projects & Case Studies