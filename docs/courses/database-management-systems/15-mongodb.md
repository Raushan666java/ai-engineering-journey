# Chapter 15 — MongoDB

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) describe MongoDB's document data model; (2) perform CRUD operations; (3) create and use secondary indices; (4) build aggregation pipelines; (5) configure replication for high availability; (6) configure sharding for horizontal scaling; and (7) decide between embedding and referencing documents.

## 15.1 Document Model

MongoDB is a document-oriented NoSQL database that stores data as BSON (Binary JSON) documents. A document is a set of key-value pairs analogous to a JSON object. Documents are organized into collections, which are analogous to tables in the relational model. Unlike relational tables, collections do not enforce a schema. Documents within the same collection may have different fields, data types, and structures.

A sample MongoDB document representing a student:

{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "student_id": 1001,
  "name": "Alice Zhang",
  "major": "Computer Science",
  "gpa": 3.8,
  "address": {
    "street": "123 College Ave",
    "city": "University City",
    "zip": "12345"
  },
  "enrolled_courses": ["CS101", "CS201", "MATH301"],
  "graduating": true
}

Each document must contain the _id field, which serves as the primary key. The _id is automatically indexed and must be unique within the collection. Applications may assign custom _id values or allow MongoDB to generate ObjectId values automatically.

The document model offers several advantages. Related data that is accessed together can be stored in a single document, avoiding costly join operations. The schema flexibility accommodates evolving application requirements without migration scripts. Nested documents and arrays model complex hierarchical relationships naturally.

## 15.2 CRUD Operations

The insertOne method inserts a single document into a collection. The insertMany method inserts multiple documents in a single operation, which is more efficient than individual inserts.

db.students.insertOne({
  student_id: 1002,
  name: "Bob Chen",
  major: "Mathematics"
});

The find method retrieves documents matching a query filter. The first argument is the filter; the second argument is a projection that specifies which fields to return. The findOne method returns a single document.

db.students.find({ major: "Computer Science" }, { name: 1, gpa: 1, _id: 0 });

The updateOne method updates a single document matching the filter. The updateMany method updates all matching documents. The $set operator sets field values; $unset removes fields; $inc increments numeric fields.

db.students.updateOne(
  { student_id: 1001 },
  { $set: { gpa: 3.9 }, $inc: { credits_completed: 15 } }
);

The deleteOne method deletes a single matching document. The deleteMany method deletes all matching documents.

db.students.deleteMany({ graduating: true });

Replace operations use replaceOne, which replaces an entire document while preserving the _id field.

## 15.3 Indexing

MongoDB supports several index types. The default _id index is created automatically on every collection. Single-field indices accelerate queries on a single field. Compound indices accelerate queries on multiple fields, with the index key order affecting query effectiveness.

db.students.createIndex({ major: 1, gpa: -1 });

Multikey indices are created automatically when indexing an array field; MongoDB creates an index entry for each element of the array. Text indices support full-text search on string content. Geospatial indices support location-based queries. Hashed indices support hash-based sharding.

The explain method provides query execution statistics, including index usage and the number of documents examined. The hint method forces the query optimizer to use a specific index.

## 15.4 Aggregation Pipeline

The aggregation pipeline processes documents through a sequence of stages. Each stage transforms the documents that pass through it. The pipeline is expressed as an array of stage documents.

Common stages include: $match, which filters documents; $group, which groups documents by a specified key and computes aggregate values; $sort, which sorts documents; $project, which shapes documents by including, excluding, or computing new fields; $unwind, which deconstructs an array field into multiple documents; and $lookup, which performs a left outer join with another collection.

An example computing the average GPA by major:

db.students.aggregate([
  { $group: { _id: "$major", avgGpa: { $avg: "$gpa" }, count: { $sum: 1 } } },
  { $sort: { avgGpa: -1 } },
  { $project: { major: "$_id", avgGpa: 1, count: 1, _id: 0 } }
]);

The aggregation pipeline is a powerful alternative to map-reduce and is optimized for efficient execution using indices where possible.

## 15.5 Replication

A replica set in MongoDB is a group of mongod processes that maintain the same data set. One node is the primary, receiving all write operations. The other nodes are secondaries, applying operations from the primary through asynchronous replication. If the primary fails, the replica set automatically elects a new primary through a consensus protocol.

Replication provides high availability and data redundancy. Secondaries can serve read operations, improving throughput. Delayed secondaries provide point-in-time recovery capability. Hidden secondaries are not visible to client applications and can be dedicated to analytics or backup.

The election process uses a majority-based protocol. Each node votes for a candidate based on its optime, which is the timestamp of its most recent applied operation. The node with the highest optime wins the election. A replica set can tolerate the failure of up to floor((n-1)/2) nodes, where n is the number of voting members.

## 15.6 Sharding

Sharding distributes data across multiple servers to support horizontal scaling. A sharded cluster consists of three components. Shards store the data; each shard is typically a replica set. The config server stores cluster metadata. The mongos router directs client requests to the appropriate shard based on the shard key.

The shard key is a field or compound field that determines data distribution. The choice of shard key is critical for performance. A good shard key provides high cardinality, prevents jumbo chunks, and supports the most common query patterns. Hash-based sharding distributes data uniformly. Range-based sharding places related data on the same shard.

When a shard's data exceeds a configurable chunk size, the chunk is split and balanced across shards automatically. The balancer runs in the background and ensures that all shards have approximately equal amounts of data.

## 15.7 Embedded versus Referenced Documents

A central design decision in MongoDB is whether to embed related data within a document or to reference documents in separate collections using manual references or the DBRef convention.

Embedding is appropriate when the embedded data is always accessed with the parent, when the embedded data has a one-to-one or one-to-few cardinality, and when the embedded data does not grow without bound. Embedding provides better read performance because a single query retrieves all related data.

Referencing is appropriate when the related data is accessed independently, when the cardinality is many-to-many, or when the embedded data would cause the document to exceed the 16-megabyte BSON document size limit. Referencing avoids data duplication but requires multiple queries or $lookup stages.

## Summary

MongoDB is the leading document-oriented NoSQL database. Its flexible document model, rich query language, aggregation pipeline, replication, and sharding capabilities make it suitable for a wide range of applications. The design decisions around indexing, shard keys, and document structure have significant performance implications.

## Exercises

### Review Questions

1. What is the difference between a collection and a table?
2. What is the purpose of the _id field?
3. How does MongoDB ensure high availability?
4. What components constitute a sharded cluster?
5. When should embedded documents be preferred over references?

### Application Problems

1. Design a MongoDB document schema for an e-commerce product. Include nested data for variants, reviews, and categories. Justify your embedding and referencing decisions.
2. Write an aggregation pipeline that computes monthly revenue for an orders collection. The orders collection contains documents with order_date, total, and items (array). Include only orders from the current year.
3. Design a shard key strategy for a social media application with 100 million users. The application supports queries for a user's posts (ordered by timestamp) and queries for posts by content.

### Challenge Problem

Implement a migration script in JavaScript (using the MongoDB shell or Node.js driver) that converts a referenced relationship into an embedded one. The source schema has Users and Posts in separate collections with posts referencing users via user_id. The target schema embeds the three most recent posts within each user document. Handle users with no posts, and ensure the migration can be rolled back.
