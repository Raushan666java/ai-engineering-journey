# Chapter 14 — NoSQL Databases

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) explain the motivations for NoSQL databases; (2) state the CAP theorem and its implications; (3) distinguish among document, key-value, column-family, and graph databases; (4) compare BASE with ACID semantics; (5) analyze appropriate use cases for each NoSQL type; and (6) evaluate trade-offs between NoSQL and relational databases.

## 14.1 Motivation for NoSQL

The term NoSQL encompasses a diverse family of database systems that depart from the relational model. The emergence of NoSQL databases in the mid-2000s was driven by several factors. Web-scale applications such as social networks, search engines, and e-commerce platforms required horizontal scalability across hundreds or thousands of servers. Relational databases, designed for vertical scaling on monolithic hardware, faced architectural limitations. The cost of maintaining ACID guarantees across distributed systems proved prohibitive for applications willing to relax consistency for availability and partition tolerance.

Simultaneously, the diversity of data structures expanded dramatically. Semi-structured and unstructured data, including JSON documents, social graphs, and time-series data, did not fit naturally into the rigid schema of relational tables. Agile development methodologies demanded flexible schemas that could evolve rapidly without costly migration operations. NoSQL databases addressed these requirements by offering schema flexibility, horizontal scalability, and specialized data models.

## 14.2 The CAP Theorem

The CAP theorem, formulated by Eric Brewer and later proved by Seth Gilbert and Nancy Lynch, states that a distributed data system can provide at most two of three properties simultaneously: consistency, availability, and partition tolerance.

Consistency means that every read receives the most recent write or an error. In a consistent system, all nodes see the same data at the same time. Availability means that every request receives a non-error response, without guarantee that it contains the most recent write. An available system continues to function even when some nodes are unreachable. Partition tolerance means that the system continues to operate despite arbitrary message loss or network failures between nodes.

In a distributed system, network partitions are inevitable. The CAP theorem therefore forces a choice between consistency and availability when a partition occurs. CP systems choose consistency over availability: they stop accepting writes or reads on the minority side of a partition. AP systems choose availability over consistency: they accept writes on both sides of a partition and reconcile differences later. CA systems, which sacrifice partition tolerance, are effectively non-distributed.

The CAP theorem has been refined over time. Modern systems recognize that partition tolerance is not optional in distributed environments. The practical design space involves tuning consistency levels, ranging from strong to eventual, rather than making a binary CAP choice.

## 14.3 Types of NoSQL Databases

Document databases store data as documents, typically in JSON or BSON format, with each document containing a self-describing set of key-value pairs. Documents are grouped into collections, analogous to tables in the relational model. Unlike relational tables, documents within a collection may have different fields. Document databases support nested structures, arrays, and flexible schemas. Prominent implementations include MongoDB and Couchbase.

Key-value stores are the simplest NoSQL type. Data is stored as a collection of key-value pairs, where the key serves as a unique identifier and the value is opaque to the database. The API provides basic get, put, and delete operations. Key-value stores offer exceptional performance for simple lookup workloads. Redis, DynamoDB, and Riak are representative implementations.

Column-family databases, also called wide-column stores, organize data by columns rather than rows. Each row is identified by a row key, and columns are grouped into column families. Column families are defined in advance, but individual columns within a family can be added dynamically. This design suits workloads involving large-scale analytical queries over a subset of columns. Apache Cassandra, HBase, and Google Bigtable are column-family databases.

Graph databases represent data as nodes, edges, and properties. Nodes represent entities, edges represent relationships, and properties store attributes. Graph databases excel at relationship-heavy queries such as path finding, shortest-path computation, and graph traversal. They are widely used in social networks, recommendation engines, and fraud detection. Neo4j and Amazon Neptune are leading graph databases.

## 14.4 BASE versus ACID

BASE is an acronym that describes the consistency model of many NoSQL systems: Basically Available, Soft state, Eventual consistency. Basically Available means that the system guarantees availability in the sense of the CAP theorem. Soft state means that the state of the system may change over time without input, as nodes converge on consistency. Eventual consistency means that given sufficient time without updates, all replicas will converge to the same value.

ACID provides strong guarantees: transactions are atomic, consistent, isolated, and durable. These guarantees simplify application development because the programmer does not need to reason about partial updates, inconsistent reads, or concurrent interference. However, ACID systems struggle with horizontal scalability and high availability.

BASE sacrifices immediate consistency for availability and scalability. The application programmer must handle the possibility of stale reads and reconcile conflicting writes. The TANGO principle, encapsulated in the phrase pick your trade-offs, guides the decision between ACID and BASE. Financial transaction systems require ACID. Social news feeds can tolerate BASE.

## 14.5 Comparison with RDBMS

The relational model provides a mature, mathematically rigorous framework with standardized SQL, decades of optimization research, and robust tooling. Relational databases excel in environments requiring complex joins, multi-row transactions, ad-hoc analytical queries, and strict consistency. They are the default choice for enterprise applications, financial systems, and any domain where data integrity is paramount.

NoSQL databases offer superior horizontal scalability, flexible schemas, and specialized performance characteristics. They are appropriate for applications with high write throughput, rapidly evolving data structures, naturally hierarchical data (documents), or complex relationship traversal (graphs). Many organizations employ a polyglot persistence strategy, using multiple database types within a single application, each optimized for its specific workload.

The choice between RDBMS and NoSQL should be based on concrete requirements rather than fashion. The relational model remains the most versatile and best-understood data management paradigm. NoSQL databases should be selected when specific requirements for scalability, schema flexibility, or data model fit cannot be met by a relational system.

## 14.6 Polyglot Persistence

Polyglot persistence is the practice of using multiple database types within a single application, each selected for its suitability to a specific workload. A typical e-commerce platform might use a relational database for inventory and order management, a document store for the product catalog, a key-value store for the session cache, a graph database for product recommendations, and a search engine for full-text product search.

The advantages of polyglot persistence include optimal performance for each workload, the ability to use the most natural data model for each component, and the flexibility to adopt new database technologies incrementally. The disadvantages include operational complexity, the need for expertise in multiple systems, and the challenge of maintaining data consistency across heterogeneous databases.

Polyglot persistence represents a mature approach to database selection. Rather than seeking a single database that satisfies all requirements, architects design each component around its specific data access patterns and choose the database that fits best. This approach requires careful system decomposition and well-defined service boundaries.

## 14.7 NewSQL

NewSQL is a category of database systems that aim to provide the horizontal scalability of NoSQL while retaining the relational data model and ACID guarantees. NewSQL systems emerged in response to the limitations of both traditional relational databases (limited scalability) and NoSQL databases (weakened consistency and non-relational interfaces).

Representative NewSQL systems include Google Spanner, which provides global-scale ACID transactions using a TrueTime API for clock synchronization; CockroachDB, a distributed SQL database inspired by Spanner; VoltDB, an in-memory relational database that partitions data and executes transactions sequentially within each partition; and Amazon Aurora, which decouples compute and storage to achieve high performance and durability.

NewSQL systems typically employ a shared-nothing architecture with automatic data partitioning, synchronous replication for fault tolerance, and distributed transaction coordination. They represent a convergence of relational and distributed database technologies and are increasingly adopted for applications that require both ACID guarantees and horizontal scalability.

## Summary

This chapter introduced the NoSQL landscape. The CAP theorem explains the fundamental trade-off in distributed data systems. Document, key-value, column-family, and graph databases each address distinct use cases. BASE semantics trade consistency for availability and scalability. Polyglot persistence recognizes that different workloads benefit from different database types. NewSQL systems aim to combine the scalability of NoSQL with the consistency of relational databases. The appropriate choice between relational and NoSQL depends on the specific requirements of the application.

## Exercises

### Review Questions

1. What problem does the CAP theorem address?
2. What is the difference between CP and AP systems?
3. How does a column-family database differ from a key-value store?
4. What does eventual consistency mean?
5. When would a graph database be preferred over a relational database?

### Application Problems

1. For each of the following applications, recommend a database type and justify your choice: (a) a social network with friend graphs and recommendations, (b) an inventory management system for a retail chain, (c) a real-time analytics pipeline processing millions of events per second, (d) a banking system managing customer accounts and transactions.
2. Consider a social media platform that must support 100,000 writes per second. Explain why a traditional RDBMS might struggle with this workload and how a NoSQL system might handle it.
3. Design a data model in both relational and document form for an e-commerce product catalog. Compare the two approaches for handling products with varying attributes.

### Challenge Problem

Design a distributed key-value store that is AP in the CAP theorem's terms. Describe the replication strategy, conflict resolution mechanism, and read repair approach. Then modify the design to become CP, explaining what must change. Analyze the performance implications of each version under normal operation and during a network partition.
