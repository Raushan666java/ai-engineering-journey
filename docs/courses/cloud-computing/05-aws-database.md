# Chapter 5: AWS Database Services

## Learning Objectives

After completing this chapter, students will be able to:

1. Deploy and configure Amazon RDS with Multi-AZ and read replicas.
2. Differentiate between relational and non-relational database services on AWS.
3. Design DynamoDB tables with appropriate partition keys, sort keys, and indexes.
4. Implement DynamoDB auto scaling and DAX caching.
5. Configure ElastiCache for Redis with replication and cluster mode.
6. Select the appropriate AWS database service for a given workload.
7. Implement database backup, recovery, and disaster recovery strategies.

## Theory

### 5.1 Amazon RDS Overview

Amazon Relational Database Service (RDS) simplifies the deployment, management, and scaling of relational databases in the cloud. RDS automates time-consuming administrative tasks such as hardware provisioning, database setup, patching, and backups, freeing database administrators to focus on application optimization. RDS supports six database engines: Amazon Aurora, MySQL, MariaDB, PostgreSQL, Oracle, and Microsoft SQL Server.

**RDS for MySQL and PostgreSQL.** Managed versions of the popular open-source databases. Supported features include automated backups with point-in-time recovery, automated software patching, Multi-AZ deployments, read replicas, and integration with CloudWatch monitoring. These engines are cost-effective for general-purpose web and mobile applications.

**Amazon Aurora.** A MySQL and PostgreSQL-compatible relational database engine designed for the cloud. Aurora offers up to five times the throughput of standard MySQL and three times the throughput of standard PostgreSQL. Aurora achieves this performance through a distributed, SSD-backed, auto-scaling storage system that separates the storage layer from the compute layer.

Aurora storage is distributed across three availability zones with six copies of data, providing 99.9999999% durability. The storage layer automatically scales in increments of 10 GB up to 128 TB. Aurora automatically handles failover with minimal downtime, typically under 30 seconds. Aurora Global Database supports cross-region replication with typical latency under one second.

Aurora Serverless v2 provides auto-scaling capacity suitable for intermittent workloads. It adjusts capacity in single-ACU increments and scales to zero when idle. Aurora Serverless is ideal for variable or unpredictable workloads, multi-tenant applications, and development/test environments.

**RDS Multi-AZ.** Multi-AZ deployments automatically provision and maintain a synchronous standby replica in a different availability zone. In the event of an availability zone failure, an automatic failover promotes the standby to the primary database. Failover typically completes within 60-120 seconds. Multi-AZ is essential for production databases requiring high availability.

**RDS Read Replicas.** Read replicas provide asynchronous replication for offloading read traffic from the primary database. Up to 15 read replicas are supported for Aurora, 5 for RDS MySQL and PostgreSQL. Read replicas can be promoted to standalone databases in place of the source. Cross-region read replicas support disaster recovery and geographic data distribution.

**Automated Backups and Snapshots.** RDS automated backups enable point-in-time recovery to any second within the retention period (1-35 days). Retention uses backup storage during the backup window with minimal performance impact. Manual DB snapshots persist beyond the retention period and can be shared with other AWS accounts. Snapshots can be copied across regions for disaster recovery.

**Parameter Groups and Option Groups.** Parameter groups provide configuration values for database engines (buffer pool size, query cache, time zone, character set). Option groups configure additional features such as Oracle OEM, SQL Server SSRS/SSIS, and MySQL memcached.

### 5.2 Amazon DynamoDB

DynamoDB is a fully managed NoSQL key-value and document database delivering single-digit millisecond performance at any scale. DynamoDB is serverless: there are no servers to provision or manage, and it automatically scales tables to handle capacity. DynamoDB powers many high-traffic AWS services and is used by companies such as Lyft, Airbnb, and Samsung for workloads requiring consistent performance at scale.

**Tables, Items, and Attributes.** Data is organized into tables, which contain items (rows), which contain attributes (columns). Each item is uniquely identified by a primary key. DynamoDB is schema-less at the item level: different items in the same table can have different attributes.

**Primary Key.** The primary key uniquely identifies each item in a table. A simple primary key consists of a single partition key. A composite primary key consists of a partition key and a sort key. The partition key determines the physical partition where data is stored and is used as input to the hash function for data distribution. The sort key determines the order of items within a partition. Choosing a partition key that distributes workload evenly is critical for performance.

**Read/Write Capacity Modes.** On-demand mode charges per request (reads and writes) with no capacity planning required. On-demand scales instantly to handle any request rate but costs more per request. Provisioned mode requires specifying read capacity units (RCU) and write capacity units (WCU) per table. Each RCU provides one strongly consistent read per second for items up to 4 KB. Each WCU provides one write per second for items up to 1 KB. Auto scaling adjusts provisioned capacity based on utilization.

**Secondary Indexes.** Local Secondary Index (LSI) uses the same partition key as the table but a different sort key. LSIs must be created at table creation time. They enable querying data with an alternative sort order within the same partition. Global Secondary Index (GSI) uses a different partition key and sort key from the table. GSIs can be created at any time. They enable querying across all partitions using a different access pattern.

**DynamoDB Accelerator (DAX).** DAX is an in-memory cache for DynamoDB that provides up to 10x read performance improvement. DAX is fully managed and cluster-based. It is write-through: data written to DynamoDB is automatically cached in DAX. DAX is ideal for read-heavy applications such as gaming, social media, and e-commerce product catalogs.

**DynamoDB Streams.** Streams capture a time-ordered sequence of item-level changes (insert, update, delete) in a DynamoDB table. Stream records are organized into shards and provide exactly-once processing. Streams are integrated with AWS Lambda for event-driven processing, enabling use cases such as real-time analytics, cross-region replication, and materialized view maintenance.

**Time to Live (TTL).** TTL enables automatic expiration of items after a specified timestamp. Expired items are deleted at no cost and without consuming write throughput. TTL is commonly used for session data management, event calendars, and temporary data cleanup.

**Transactions.** DynamoDB transactions provide ACID guarantees across one or more tables within a single AWS account and region. Transactions support up to 100 items or 4 MB of data. The `TransactGetItems` and `TransactWriteItems` APIs enable atomic read and write operations.

**Capacity Planning.** Partition count is determined by table capacity: one partition handles up to 3,000 RCU or 1,000 WCU, and up to 10 GB of storage. As capacity increases, DynamoDB automatically splits partitions. Hot partitions (uneven access patterns) can cause throttling. Design for uniform access distribution through partition key selection.

### 5.3 Amazon ElastiCache

ElastiCache is a fully managed in-memory caching service supporting two engines: Redis and Memcached. Caching reduces database load and improves application response times for repetitive read queries.

**Redis Features.** Redis supports data structures (strings, hashes, lists, sets, sorted sets, bitmaps, streams), transactions, Lua scripting, and publish/subscribe messaging. Redis Cluster Mode shards data across up to 500 shards for horizontal scaling. Redis Replication provides multi-AZ failover with automatic replica promotion. Redis Persistence (RDB snapshots, AOF logs) enables data durability. Redis supports sorted sets with leaderboard use cases, streams for message queuing, and geospatial indexing.

**Memcached.** Memcached is a simple, fast, distributed memory object caching system. Its multithreaded architecture utilizes multiple cores efficiently. Memcached lacks data persistence, replication, clustering, and data structure support beyond simple key-value. Best suited for simple caching where data loss is acceptable.

**Cluster Architecture.** Redis Cluster Mode disabled: a single shard with up to 5 read replicas. Replicas serve read traffic and provide failover targets. Redis Cluster Mode enabled: data is partitioned across 1-500 shards, each with up to 5 replicas. Sharding distributes write load and enables horizontal scalability.

**Caching Strategies.** Lazy loading (cache-aside): the application checks the cache first, and on a miss, reads from the database and updates the cache on subsequent reads. Write-through: data written to the cache and database simultaneously. Write-behind: data is written to the cache immediately and asynchronously written to the database. TTL expiration: keys automatically expire after a configured time.

### 5.4 Other AWS Database Services

**Amazon DocumentDB.** MongoDB-compatible document database designed for JSON workloads. Supports MongoDB 3.6, 4.0, and 5.0 APIs. DocumentDB replicates storage across three AZs with six copies of data. Use cases: content management, catalogs, user profiles, and mobile backends.

**Amazon Neptune.** Fully managed graph database supporting both property graph (Gremlin) and RDF (SPARQL) models. Neptune stores billions of relationships and queries with millisecond latency. Use cases: social networks, recommendation engines, fraud detection, knowledge graphs, and identity graphs.

**Amazon Redshift.** Fully managed, petabyte-scale data warehouse. Columnar storage, massively parallel processing (MPP), and data compression deliver fast query performance over large datasets. Redshift Spectrum queries data directly in S3 without loading. Redshift Serverless automatically provisions capacity. Use cases: business intelligence, reporting, and analytical workloads.

**Amazon Keyspaces.** Managed Apache Cassandra-compatible database. Serverless, highly available, and scales automatically. Use cases: time-series data, IoT, and applications using Cassandra.

**Amazon QLDB.** Ledger database providing a transparent, immutable, cryptographically verifiable transaction log. Each data change is recorded and can be audited. Use cases: financial transaction recording, supply chain audit trails, and compliance record-keeping.

**Amazon Timestream.** Serverless time-series database for IoT and operational analytics. Automatically retains data in recent memory tier and moves historical data to a cost-optimized storage tier.

### 5.5 Database Migration Service (DMS)

AWS DMS migrates databases to AWS with minimal downtime. Source databases remain operational during migration, reducing downtime to minutes. DMS supports homogeneous migrations (MySQL to Aurora MySQL) and heterogeneous migrations (Oracle to Aurora PostgreSQL, SQL Server to MySQL) with the Schema Conversion Tool (SCT). DMS also enables ongoing replication for continuous data synchronization.

## Examples

### Example 5.1: Create an RDS Instance

```bash
# Create a MySQL RDS instance with Multi-AZ
aws rds create-db-instance \
  --db-instance-identifier mydb \
  --db-instance-class db.t3.medium \
  --engine mysql \
  --master-username admin \
  --master-user-password password123 \
  --allocated-storage 100 \
  --storage-type gp3 \
  --multi-az \
  --auto-minor-version-upgrade \
  --backup-retention-period 7 \
  --db-subnet-group-name my-subnet-group \
  --vpc-security-group-ids sg-12345678

# Create a read replica
aws rds create-db-instance-read-replica \
  --db-instance-identifier mydb-read-replica \
  --source-db-instance-identifier mydb \
  --db-instance-class db.t3.medium \
  --region eu-west-1
```

### Example 5.2: Create a DynamoDB Table

```bash
# Create a DynamoDB table with composite key and auto scaling
aws dynamodb create-table \
  --table-name Orders \
  --attribute-definitions \
    AttributeName=CustomerId,AttributeType=S \
    AttributeName=OrderDate,AttributeType=S \
  --key-schema \
    AttributeName=CustomerId,KeyType=HASH \
    AttributeName=OrderDate,KeyType=RANGE \
  --billing-mode PAY_PER_REQUEST \
  --global-secondary-indexes \
    "[{
      \"IndexName\": \"OrderStatusIndex\",
      \"KeySchema\": [{\"AttributeName\":\"Status\",\"KeyType\":\"HASH\"}],
      \"Projection\": {\"ProjectionType\":\"ALL\"}
    }]"

# Query an item
aws dynamodb query \
  --table-name Orders \
  --key-condition-expression "CustomerId = :cid" \
  --expression-attribute-values '{":cid":{"S":"user123"}}'
```

### Example 5.3: Create an ElastiCache Redis Cluster

```bash
# Create a Redis cluster with replication
aws elasticache create-cache-cluster \
  --cache-cluster-id my-redis \
  --cache-node-type cache.r5.large \
  --engine redis \
  --num-cache-nodes 1 \
  --az-mode cross-az

# Create a Redis cluster with cluster mode
aws elasticache create-replication-group \
  --replication-group-id my-redis-cluster \
  --replication-group-description "Redis cluster with sharding" \
  --cache-node-type cache.r5.large \
  --engine redis \
  --num-node-groups 3 \
  --replicas-per-node-group 2
```

## Summary

AWS offers a comprehensive portfolio of database services. RDS provides managed relational databases with Multi-AZ for high availability and read replicas for performance. Aurora offers MySQL/PostgreSQL compatibility with 5x throughput and 128 TB auto-scaling storage. DynamoDB is a serverless NoSQL database with single-digit millisecond performance, supporting both document and key-value models. Table design with appropriate partition keys, GSIs, and LSIs is critical for performance. DAX provides caching for high-throughput DynamoDB workloads. ElastiCache supports Redis (with clustering, persistence, and replication) and Memcached for caching use cases. Specialized databases include DocumentDB (MongoDB-compatible), Neptune (graph), Redshift (data warehousing), Keyspaces (Cassandra-compatible), QLDB (ledger), and Timestream (time-series).

## Exercises

### Review Questions

1. What is the difference between Multi-AZ and read replicas in RDS? Can they be used together?
2. How does Amazon Aurora achieve higher throughput than standard MySQL?
3. Explain the difference between a partition key and a sort key in DynamoDB.
4. What is a Global Secondary Index and when should you create one?
5. How does DynamoDB auto scaling work with provisioned capacity?
6. Compare Redis Cluster Mode disabled vs enabled in ElastiCache.
7. Describe three caching strategies supported by ElastiCache.
8. What is the difference between DynamoDB Streams and DynamoDB Transactions?
9. When should you choose DocumentDB over DynamoDB for a new application?
10. How does AWS DMS handle heterogeneous database migrations?

### Application Problems

1. An e-commerce platform with 10 million products needs to support the following access patterns: look up product by ID, search products by category sorted by price, retrieve products by vendor, and track inventory changes in real-time. Design a DynamoDB table structure with appropriate keys and indexes.

2. A financial application requires a relational database with 99.995% availability, read-heavy workload with 80% reads / 20% writes, support for cross-region disaster recovery, and zero downtime during database patching. Design an RDS architecture covering engine selection, deployment configuration, backup strategy, and disaster recovery.

3. A social media app with 50 million users stores user sessions, feeds, notifications, and follows. The application requires sub-10ms read latency for feed data. Design a caching architecture using ElastiCache covering caching strategy, cluster configuration, data eviction policy, and high availability approach.

4. A SaaS company is migrating from MongoDB to a managed AWS database service. They require JSON document storage, secondary indexes, and eventual consistency. Compare DocumentDB and DynamoDB for this migration, recommending one with justification.

### Challenge Problem

Design a complete database architecture for a global ride-sharing platform with the following requirements: 10 million active riders and 1 million drivers across 500 cities in 50 countries. The platform requires: real-time ride matching (sub-100ms geospatial queries), driver location updates at 5-second intervals, transaction history for accounting, real-time pricing adjustments based on demand, driver earnings analytics and reporting, 99.99% availability with cross-region disaster recovery, schema flexibility for future feature additions, and data retention of 7 years for regulatory compliance. Your design must specify: database service selection for each workload, table/schema design with key structures, capacity provisioning (provisioned vs on-demand, RCU/WCU estimates), caching architecture with DAX/ElastiCache placement, replication and disaster recovery strategy, data archival strategy for historical data, and estimated monthly database costs for a mid-size region.
