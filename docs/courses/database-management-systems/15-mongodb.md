# Chapter 15: MongoDB

## Learning Objectives

- Understand MongoDB's document data model and BSON format
- Perform CRUD operations using MongoDB Query Language
- Design and use indexes for query optimization
- Build aggregation pipelines for data analysis
- Explain replication and sharding for high availability and scaling
- Apply best practices for schema design

## Theory

![MongoDB Mindmap](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/database-management-systems/ch15-mongodb.png)

### 15.1 MongoDB Overview

MongoDB is a **document-oriented NoSQL database** released in 2009. It stores data as BSON (Binary JSON) documents in collections.

**Key Concepts:**
- **Database:** Container for collections
- **Collection:** Group of documents (similar to a table)
- **Document:** A single record (similar to a row)
- **Field:** A key-value pair in a document (similar to a column)
- **\_id:** Every document has a unique primary key field

```
Database (ecommerce)
  └── Collection (users)
  │     ├── Document {_id: 1, name: "Alice", email: "alice@example.com"}
  │     ├── Document {_id: 2, name: "Bob", email: "bob@example.com"}
  │     └── ...
  └── Collection (orders)
        ├── Document {_id: 101, user_id: 1, total: 59.99, items: [...]}
        └── ...
```

**BSON Format:**
- Extends JSON with additional data types: ObjectId, Date, Binary, Decimal128, Timestamp
- BSON documents are traversable (unlike plain JSON, BSON encodes type and length info)

### 15.2 CRUD Operations

**Create (Insert):**

```javascript
// Insert a single document
db.users.insertOne({
    name: "Alice Chen",
    email: "alice@example.com",
    age: 28,
    address: {
        street: "123 Main St",
        city: "San Francisco",
        state: "CA",
        zip: "94102"
    },
    interests: ["reading", "hiking", "photography"],
    created_at: new Date()
})

// Insert multiple documents
db.users.insertMany([
    { name: "Bob", email: "bob@example.com", age: 35 },
    { name: "Carol", email: "carol@example.com", age: 42 },
    { name: "Dave", email: "dave@example.com", age: 29 }
])
```

**Read (Query):**

```javascript
// Find all users
db.users.find()

// Find with filter
db.users.find({ age: { $gt: 30 } })

// Find with projection (only return specific fields)
db.users.find(
    { age: { $gt: 30 } },
    { name: 1, email: 1, _id: 0 }
)

// Find a single document
db.users.findOne({ email: "alice@example.com" })

// Query operators
db.users.find({ age: { $gte: 25, $lte: 40 } })
db.users.find({ name: { $in: ["Alice", "Bob"] } })
db.users.find({ interests: "hiking" }) // array contains
db.users.find({ "address.city": "San Francisco" }) // nested field

// Logical operators
db.users.find({
    $and: [
        { age: { $gte: 25 } },
        { "address.state": "CA" }
    ]
})

// Sort, limit, skip
db.users.find()
    .sort({ age: -1 })   // descending
    .limit(10)
    .skip(20)           // pagination

// Count
db.users.countDocuments({ age: { $gt: 30 } })
```

**Update:**

```javascript
// Update one document (replace matching document)
db.users.updateOne(
    { email: "alice@example.com" },
    { $set: { age: 29, "address.city": "Los Angeles" } }
)

// Update with increment
db.users.updateOne(
    { name: "Alice Chen" },
    { $inc: { login_count: 1 } }
)

// Add to array, remove duplicates
db.users.updateOne(
    { name: "Alice Chen" },
    { $addToSet: { interests: "cycling" } }
)

// Pull from array
db.users.updateOne(
    { name: "Alice Chen" },
    { $pull: { interests: "photography" } }
)

// Update many
db.users.updateMany(
    { "address.state": "CA" },
    { $set: { region: "West Coast" } }
)

// Upsert (insert if not found)
db.users.updateOne(
    { email: "newuser@example.com" },
    { $set: { name: "New User", age: 25 } },
    { upsert: true }
)
```

**Delete:**

```javascript
// Delete one document
db.users.deleteOne({ email: "bob@example.com" })

// Delete many documents
db.users.deleteMany({ age: { $lt: 18 } })

// Drop entire collection
db.users.drop()

// Delete all documents but keep collection
db.users.deleteMany({})
```

### 15.3 Indexing

Indexes in MongoDB work similarly to B+ tree indexes in relational databases.

**Types of Indexes:**

```javascript
// Single field index
db.users.createIndex({ email: 1 })  // 1 = ascending, -1 = descending

// Compound index (order matters!)
db.orders.createIndex({ user_id: 1, created_at: -1 })

// Multikey index (for array fields)
db.users.createIndex({ interests: 1 })

// Text index (full-text search)
db.articles.createIndex({ content: "text", title: "text" })

// Geospatial index
db.places.createIndex({ location: "2dsphere" })

// Unique index
db.users.createIndex({ email: 1 }, { unique: true })

// TTL index (auto-expire documents after time)
db.sessions.createIndex({ created_at: 1 }, { expireAfterSeconds: 3600 })

// Partial index (index only matching documents)
db.users.createIndex(
    { age: 1 },
    { partialFilterExpression: { age: { $gte: 18 } } }
)

// Sparse index (only index documents with the field)
db.users.createIndex({ optional_field: 1 }, { sparse: true })
```

**Index Usage:**

```javascript
// Check query plan
db.users.find({ age: { $gt: 30 } }).explain("executionStats")

// Output shows:
// - winningPlan (which index was used, or COLLSCAN)
// - executionTimeMillis
// - totalDocsExamined
// - nReturned
```

**Hinting the Optimizer:**

```javascript
// Force the query to use a specific index
db.users.find({ age: { $gt: 30 } }).hint({ age: 1 })
```

### 15.4 Aggregation Pipeline

The aggregation pipeline is MongoDB's equivalent of GROUP BY and complex transformations.

```
db.collection.aggregate([
    { $match: { status: "active" } },      // Stage 1: Filter
    { $group: { _id: "$city", count: { $sum: 1 } } },  // Stage 2: Group
    { $sort: { count: -1 } },               // Stage 3: Sort
    { $limit: 10 }                          // Stage 4: Limit
])
```

**Pipeline Stages:**

```javascript
// $match: Filter documents (like WHERE)
db.orders.aggregate([
    { $match: { status: "shipped", total: { $gte: 50 } } }
])

// $group: Group documents (like GROUP BY)
db.orders.aggregate([
    { $group: {
        _id: "$customer_id",
        total_spent: { $sum: "$total" },
        order_count: { $sum: 1 },
        avg_order: { $avg: "$total" },
        first_order: { $min: "$order_date" },
        last_order: { $max: "$order_date" }
    }}
])

// $project: Reshape documents (like SELECT with expressions)
db.users.aggregate([
    { $project: {
        full_name: { $concat: ["$first_name", " ", "$last_name"] },
        age_plus_10: { $add: ["$age", 10] },
        is_adult: { $gte: ["$age", 18] },
        _id: 0
    }}
])

// $lookup: Join collections (like SQL JOIN)
db.orders.aggregate([
    { $lookup: {
        from: "customers",
        localField: "customer_id",
        foreignField: "_id",
        as: "customer"
    }},
    { $unwind: "$customer" },  // Deconstruct array
    { $project: {
        order_id: 1,
        total: 1,
        "customer.name": 1,
        "customer.email": 1
    }}
])

// $unwind: Deconstruct arrays into separate documents
db.articles.aggregate([
    { $unwind: "$tags" },
    { $group: { _id: "$tags", count: { $sum: 1 } } },
    { $sort: { count: -1 } }
])

// $bucket: Bucketing (like CASE WHEN)
db.orders.aggregate([
    { $bucket: {
        groupBy: "$total",
        boundaries: [0, 50, 100, 200, 500, 1000],
        default: "1000+",
        output: {
            count: { $sum: 1 },
            avg_total: { $avg: "$total" }
        }
    }}
])

// $facet: Multiple aggregations in parallel
db.orders.aggregate([
    { $facet: {
        by_status: [
            { $group: { _id: "$status", count: { $sum: 1 } } }
        ],
        by_year: [
            { $group: {
                _id: { $year: "$order_date" },
                total: { $sum: "$total" }
            }}
        ]
    }}
])
```

**Aggregation Pipeline vs. SQL:**

| SQL | MongoDB Aggregation |
|-----|-------------------|
| WHERE | $match |
| GROUP BY | $group |
| HAVING | $match after $group |
| SELECT | $project |
| ORDER BY | $sort |
| LIMIT | $limit |
| JOIN | $lookup |
| DISTINCT | $group with $addToSet |
| UNION | Not directly (use $unionWith in 4.4+) |

### 15.5 Replication

**Replica Set:** A group of MongoDB servers that maintain the same data set.

```
┌──────────────┐
│  Primary      │  ← All writes go here
│  (active)     │
└──────┬───────┘
       │ replication (oplog)
       ├─────────────────┐
       ▼                 ▼
┌──────────────┐  ┌──────────────┐
│  Secondary 1  │  │  Secondary 2  │  ← Read may go here (optional)
│  (hot standby)│  │  (hot standby)│
└──────────────┘  └──────────────┘
```

- **Primary:** Accepts all write operations
- **Secondary:** Replicates data from primary (async)
- **Arbiter:** Votes in elections but stores no data

```javascript
// Configure read preference (client-side)
// Primary: Default. All reads from primary
// PrimaryPreferred: Read from primary; fallback to secondary
// Secondary: Read only from secondaries
// SecondaryPreferred: Read from secondary; fallback to primary
// Nearest: Read from lowest-latency node

// Connection string with read preference
mongodb://host1:27017,host2:27017,host3:27017/mydb?replicaSet=rs0&readPreference=secondaryPreferred
```

**Election:** If the primary fails, secondaries hold an election to choose a new primary.

### 15.6 Sharding

**Sharding:** Horizontal partitioning of data across multiple servers.

```
┌──────────────────────────────────────────┐
│              mongos (Router)              │
│  Routes queries to appropriate shard     │
└────┬──────────┬──────────────┬───────────┘
     │          │              │
     ▼          ▼              ▼
┌──────────┐ ┌──────────┐ ┌──────────┐
│ Shard A   │ │ Shard B  │ │ Shard C  │
│ (chunks   │ │ (chunks  │ │ (chunks  │
│  user_0.. │ │  user_1M │ │  user_2M │
│  1M)      │ │  ..2M)   │ │  ..3M)   │
└──────────┘ └──────────┘ └──────────┘
```

**Shard Key:** The field MongoDB uses to distribute documents across shards.

```javascript
// Enable sharding on a database
sh.enableSharding("ecommerce")

// Shard a collection by hashed _id (good for uniform distribution)
sh.shardCollection("ecommerce.orders", { _id: "hashed" })

// Shard by range on a natural key
sh.shardCollection("ecommerce.users", { country: 1, user_id: 1 })
```

**Shard Key Selection:**
- **Good:** High cardinality, monotonically distributed (hashed, or highly varied)
- **Bad:** Low cardinality (boolean), monotonically increasing without hashing
- **Impact:** Poor shard key leads to "jumbo chunks" and uneven distribution

**Components of Sharding:**
- **mongos:** Query router (client connects to this)
- **Config Server:** Stores metadata about which data is on which shard
- **Shard:** Individual replica set holding a portion of the data

### 15.7 Schema Design Best Practices

**Embedding vs. Referencing:**

```javascript
// EMBEDDING (preferred when data is accessed together)
// Good for: one-to-few, read-heavy, data that changes together
{
    user: "Alice",
    orders: [
        { item: "laptop", price: 999 },
        { item: "mouse", price: 25 }
    ]
}

// REFERENCING (preferred when data grows unbounded or is shared)
// Good for: one-to-many, many-to-many, frequently updated separately
{
    user: "Alice"
}
// Separate collection
{
    user_id: ObjectId("..."),
    item: "laptop",
    price: 999
}
```

**Design Principles:**
1. **Data that is accessed together should be stored together** (embed)
2. **Arrays should not grow unboundedly** (max ~100 embedded items)
3. **Use references for shared or frequently updated data**
4. **Prefer $lookup (joins) over application-side joins**
5. **Design for your query patterns, not for normalization**

## Examples

**Example 15.1: Complete E-commerce Schema**

```javascript
// Users collection
db.users.createIndex({ email: 1 }, { unique: true })
db.users.insertOne({
    _id: ObjectId(),
    name: "Alice Chen",
    email: "alice@example.com",
    addresses: [
        { label: "home", street: "123 Main St", city: "SF", zip: "94102" },
        { label: "work", street: "456 Market St", city: "SF", zip: "94105" }
    ],
    created_at: new Date()
})

// Products collection
db.products.createIndex({ category: 1, price: 1 })
db.products.insertOne({
    sku: "LAP-001",
    name: "UltraBook Pro 15",
    category: "electronics",
    price: 1499.99,
    stock: 50,
    specs: { cpu: "Intel i7", ram: "16GB", storage: "512GB SSD" },
    tags: ["laptop", "ultrabook", "new"]
})

// Orders collection
db.orders.createIndex({ customer_id: 1, created_at: -1 })
db.orders.insertOne({
    customer_id: ObjectId("..."),
    items: [
        { product_id: ObjectId("..."), qty: 1, price: 1499.99 },
        { product_id: ObjectId("..."), qty: 2, price: 24.99 }
    ],
    shipping_address: { street: "123 Main St", city: "SF", zip: "94102" },
    total: 1549.97,
    status: "pending",
    created_at: new Date()
})
```

**Example 15.2: Aggregation for Sales Report**

```javascript
// Monthly sales report by category
db.orders.aggregate([
    { $match: { status: { $in: ["shipped", "delivered"] } } },
    { $unwind: "$items" },
    { $lookup: {
        from: "products",
        localField: "items.product_id",
        foreignField: "_id",
        as: "product"
    }},
    { $unwind: "$product" },
    { $group: {
        _id: {
            year: { $year: "$created_at" },
            month: { $month: "$created_at" },
            category: "$product.category"
        },
        total_sales: { $sum: { $multiply: ["$items.qty", "$items.price"] } },
        units_sold: { $sum: "$items.qty" },
        avg_price: { $avg: "$items.price" }
    }},
    { $sort: { "_id.year": 1, "_id.month": 1 } }
])
```

## Summary

- MongoDB stores documents in BSON format within collections.
- CRUD operations use a JSON-like query syntax with rich operators.
- Indexes support single, compound, multikey, text, geospatial, TTL, and partial types.
- The aggregation pipeline provides powerful data processing with $match, $group, $lookup, $unwind, $project, etc.
- Replica sets provide high availability via primary-secondary replication.
- Sharding horizontally partitions data across servers using a shard key.
- Schema design should favor embedding for co-accessed data and referencing for shared/growing data.

## Exercises

### Basic

1. Create a MongoDB collection called `books`. Insert five book documents with fields: title, author, year, genres (array), rating.

2. Write queries to: a) Find books published after 2020, b) Find books by a specific author, c) Find books containing "sci-fi" in their genres array.

3. Create an index on the `author` field and verify the query uses it with `.explain()`.

4. Update a book's rating by 0.5. Then delete a book by its `_id`.

### Intermediate

5. Design a MongoDB schema for a blog platform with users, posts, comments, and tags. Show embedded vs. referenced relationships. Justify your choices.

6. Write an aggregation pipeline that counts the number of posts per tag, sorted by popularity, returning the top 10 tags.

7. Create a compound index on { category: 1, price: -1 }. Write a query that uses it. Verify with `.explain("executionStats")`. What happens if you filter by price without category?

8. A product collection has 500,000 documents with schema: name, category, price, stock. Queries filter by category + sort by price, or filter by price range only. Design the indexes. Explain why.

### Advanced

9. Design a shard key for a global e-commerce order database with 100M+ orders. Queries: by customer_id (customer sees their own orders), by date range (admin reports), by order_id (lookup). What shard key do you choose? What are the trade-offs?

10. In a MongoDB replica set, a network partition isolates the primary from two secondaries. What happens? Can the secondaries elect a new primary? What happens to writes sent to the isolated primary? How does the system recover when the partition heals?

11. Design and implement an aggregation pipeline that generates a real-time sales dashboard:
    - Revenue by hour (last 24 hours)
    - Top 5 selling products this week
    - Average order value by customer segment
    - Geographic distribution of orders
    Show the complete pipeline stages for each metric.
