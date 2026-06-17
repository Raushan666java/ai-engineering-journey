# Chapter 5: Cloud Database Services

## Learning Objectives

After completing this chapter, students will be able to:

1. Differentiate between relational (SQL) and non-relational (NoSQL) database services in the cloud.
2. Compare managed relational services across AWS (RDS/Aurora), Azure (SQL Database), and GCP (Cloud SQL/Spanner).
3. Evaluate NoSQL options including Key-Value, Document, and Wide-Column stores.
4. Implement high availability and disaster recovery using Multi-AZ, Read Replicas, and Failover Groups.
5. Configure in-memory caching solutions to optimize application performance.
6. Select appropriate analytical databases (Data Warehouses) for large-scale business intelligence.
7. Design migration strategies for moving on-premises databases to the cloud.

## Theory

### 5.1 The Evolution of Managed Databases

Traditional database management required significant effort in hardware provisioning, OS patching, and manual backups. Cloud providers offer **Managed Database Services** (DBaaS) that automate these "undifferentiated heavy lifting" tasks. This allows organizations to focus on schema design and query optimization.

### 5.2 Relational Databases (SQL)

Relational databases provide ACID (Atomicity, Consistency, Isolation, Durability) compliance and are ideal for structured data and complex joins.

| Feature | AWS | Azure | GCP |
|---------|-----|-------|-----|
| Managed SQL | RDS | Azure SQL Database | Cloud SQL |
| Cloud-Native SQL | Aurora | SQL Hyperscale | Cloud Spanner |
| Engines | MySQL, PostgreSQL, SQL Server, Oracle | SQL Server, PostgreSQL, MySQL | MySQL, PostgreSQL, SQL Server |

- **Cloud-Native SQL:** Services like Amazon Aurora and Google Cloud Spanner decouple compute from storage. Spanner is unique for providing horizontal scalability with global strong consistency.
- **High Availability:** Achieved through synchronous replication to a standby instance in a different Availability Zone (Multi-AZ).
- **Read Scalability:** Achieved through asynchronous Read Replicas.

![Cloud Database Services](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/cloud-computing/ch05-database-services.png)

### 5.3 Non-Relational Databases (NoSQL)

NoSQL databases offer horizontal scalability and schema flexibility, ideal for unstructured or semi-structured data.

- **Key-Value / Document Stores:** 
  - **AWS DynamoDB:** Serverless, single-digit millisecond performance at any scale.
  - **Azure Cosmos DB:** Multi-model (Document, Key-Value, Graph, Columnar) with global distribution.
  - **GCP Firestore:** Document database optimized for mobile and web apps.
- **Wide-Column Stores:** 
  - **GCP Bigtable:** Optimized for high-throughput analytical and operational workloads (used for Search and Maps).
  - **AWS Keyspaces:** Managed Cassandra-compatible service.

### 5.4 In-Memory Caching

Caching stores frequently accessed data in RAM to reduce latency and database load.

- **Redis:** Supports complex data structures and persistence. (ElastiCache, Azure Cache for Redis, Memorystore).
- **Memcached:** Simple, multi-threaded key-value cache.

### 5.5 Data Warehousing and Big Data Analytics

Analytical databases use columnar storage to perform fast queries on petabytes of data.

- **AWS Redshift:** Fast, petabyte-scale data warehouse.
- **Azure Synapse Analytics:** Unified analytics service combining data warehousing and Big Data analytics.
- **GCP BigQuery:** Serverless, highly scalable data warehouse with built-in ML and GIS capabilities.

### 5.6 Specialized Databases

- **Graph Databases:** For highly connected data (Neptune, Cosmos DB Graph API).
- **Ledger Databases:** For cryptographically verifiable transaction logs (QLDB).
- **Time-Series Databases:** For IoT and monitoring data (Timestream).

## Examples

### Example 5.1: Database Provisioning Comparison

**AWS RDS (CLI):**
```bash
aws rds create-db-instance --db-instance-identifier my-db --engine postgres --db-instance-class db.t3.micro --allocated-storage 20 --multi-az
```

**GCP Cloud SQL (gcloud):**
```bash
gcloud sql instances create my-instance --database-version=POSTGRES_14 --tier=db-f1-micro --region=us-central1
```

### Example 5.2: DynamoDB Put Item (JSON/CLI)

Adding a user profile to a NoSQL table:
```bash
aws dynamodb put-item \
    --table-name UserProfiles \
    --item '{
        "UserID": {"S": "u123"},
        "Name": {"S": "Jane Doe"},
        "Preferences": {"M": {"Theme": {"S": "Dark"}, "Language": {"S": "EN"}}}
    }'
```

## Summary

- Managed databases (DBaaS) automate patching, backups, and scaling.
- Relational databases (RDS, Azure SQL, Cloud SQL) maintain ACID compliance.
- NoSQL databases (DynamoDB, Cosmos DB) provide horizontal scale and schema flexibility.
- Aurora and Spanner represent the next generation of cloud-native relational engines.
- In-memory caches (Redis) are critical for sub-millisecond response times.
- Data warehouses (BigQuery, Redshift) are optimized for OLAP workloads.

## Exercises

### Review Questions

1. Explain the "Shared Responsibility Model" as it applies to managed databases.
2. What are the primary differences between Amazon RDS and Amazon Aurora?
3. In which scenario would you choose a NoSQL database over a Relational one?
4. What is "Global Strong Consistency" in the context of Google Cloud Spanner?
5. How does a Read Replica differ from a Multi-AZ Standby instance?

### Application Problems

1. A retail company wants to migrate their SQL Server database to the cloud. They require high availability and the ability to scale reads during holiday sales. Propose a solution on Azure.
2. An IoT platform receives 10,000 sensor readings per second. Each reading is a simple JSON blob. Recommend a database service on GCP and justify your choice.
3. A banking application requires a database that can handle millions of transactions per second with strict ACID compliance and zero data loss. Design the architecture on AWS.

### Challenge Problem

You are building a global social media platform. You need to store: 1) User profiles (rarely change, structured), 2) Real-time "Likes" and "Comments" (high volume, low latency), 3) Social graph of "Followers" (highly connected data), and 4) Historical analytics of user trends (petabytes of data). Propose a **polyglot persistence** strategy using specific services from one major cloud provider of your choice.
