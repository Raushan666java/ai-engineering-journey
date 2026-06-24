# Chapter 5: Cloud Database Services

> **Previous:** [Chapter 4: Cloud Storage Services](./04-cloud-storage.md) | **Next:** [Chapter 6: Cloud Networking](./06-cloud-networking.md)

## Learning Objectives

After completing this chapter, students will be able to:

1. Differentiate between relational, NoSQL, in-memory, and data warehouse database services.
2. Design migration strategies from on-premises databases to managed cloud databases.
3. Configure high availability and disaster recovery for managed databases.
4. Implement read replicas and connection pooling for scalability.
5. Apply data encryption and network isolation to secure database access.
6. Compare managed database costs against self-hosted alternatives.
7. Understand the CAP theorem trade-offs when choosing between consistency and availability.
8. Explain multi-tenant database isolation models in SaaS architectures.

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|--------------------|
| Relational Databases | RDS, Cloud SQL — managed PostgreSQL/MySQL/SQL Server | Best for structured data with ACID transactions |
| NoSQL Databases | DynamoDB, CosmosDB, Firestore | Best for high-scale, flexible-schema workloads |
| In-Memory Caches | ElastiCache (Redis/Memcached) | Sub-millisecond latency for hot data |
| Data Warehouses | Redshift, Synapse, BigQuery | Analytics and OLAP at scale |
| Read Replicas | Horizontal scaling for read-heavy workloads | Reduces primary load, improves query perf |
| Multi-AZ Deployment | Synchronous standby replica for DR | Automatic failover, no data loss |
| Managed vs Self-Hosted | Trade-offs of operational overhead vs cost | Managed reduces toil, costs more at high scale |
| Multi-Tenancy | Shared, dedicated, or hybrid database per tenant | Isolation vs cost efficiency trade-off |

## Chapter Roadmap

\\\mermaid
flowchart LR
    A[Database Landscape] --> B[Relational RDS]
    A --> C[NoSQL DynamoDB]
    A --> D[Cache ElastiCache]
    A --> E[Warehouse Redshift]
    B --> F[Deployment: Multi-AZ + Read Replicas]
    C --> G[Scaling: Partitioning + TTL]
    D --> H[Patterns: Cache-Aside, Write-Through]
    E --> I[Analytics: Columnar + MPP]
\\\

## Theory

### 5.1 The CAP Theorem

The CAP theorem states that a distributed data system can only provide two of three guarantees:

- **Consistency (C):** Every read receives the most recent write or an error.
- **Availability (A):** Every request receives a non-error response, without necessarily containing the most recent write.
- **Partition Tolerance (P):** The system continues to operate despite network partitions.

Since network partitions are inevitable in distributed systems (the network can always fail), you must choose between CP (Consistency + Partition Tolerance) and AP (Availability + Partition Tolerance).

\\\mermaid
graph TB
    subgraph "CAP Theorem Triangle"
        CAP[CAP Theorem] --> C["Consistency (C)"]
        CAP --> A["Availability (A)"]
        CAP --> P["Partition Tolerance (P)"]
        
        C -.-> CP[CP Systems: HBase, MongoDB]
        A -.-> AP[AP Systems: DynamoDB, Cassandra]
        P -.-> CA[CA Systems: Single-node RDS]
    end
\\\

| Database | C | A | P | Description |
|----------|---|---|---|-------------|
| RDS (Single-AZ) | Y | Y | N | Single node, no partition |
| DynamoDB | N | Y | Y | Eventual consistency default |
| Cassandra | N | Y | Y | Tunable consistency |
| HBase | Y | N | Y | Strong consistency, partition tolerant |
| MongoDB | Y | N | Y | Primary handles writes |

### 5.2 Managed Relational Databases (RDS, Cloud SQL, Azure SQL)

**AWS RDS** supports multiple database engines (PostgreSQL, MySQL, MariaDB, Oracle, SQL Server, and Amazon Aurora). Offers automated backups, patching, Multi-AZ deployments, and read replicas.

**Key Features:**

| Feature | Benefit | Trade-off |
|---------|---------|-----------|
| Automated Backups | Point-in-time recovery within retention window | Backup window uses I/O |
| Multi-AZ Deployment | Synchronous standby replica in different AZ | Doubles costs |
| Read Replicas | Offload read traffic (up to 15 replicas) | Replica lag possible |
| Storage Auto-Scaling | Grow storage without downtime | Only upward scaling |
| Encryption at Rest | KMS-managed encryption for data and backups | Minimal performance overhead |

**Read Replica Architecture:**

\\\mermaid
graph TB
    subgraph "Read Replica Deployment"
        P[Primary DB] --> R1[Read Replica 1 - us-east-1a]
        P --> R2[Read Replica 2 - us-east-1b]
        P --> R3[Read Replica 3 - us-west-2a]
        
        APP[Application] --> P
        WR[Web Readers] --> R1
        WR2[Analytics] --> R2
        WR3[Global Users] --> R3
    end
\\\

### 5.3 NoSQL Databases

**Amazon DynamoDB:** Fully managed, key-value and document database. Offers single-digit millisecond latency at any scale.

| Feature | DynamoDB | Cosmos DB | Firestore |
|---------|----------|-----------|-----------|
| Model | Key-Value + Document | Multi-model | Document |
| Consistency | Eventual / Strong | 5 consistency levels | Strong / Eventual |
| Scaling | Auto (provisioned or on-demand) | Auto (RU/s) | Auto |
| Query | Key lookup, secondary indexes | SQL-like, MongoDB API | Real-time listeners |
| Use Case | Session store, gaming, IoT | Global apps, multi-API | Mobile apps, real-time sync |

**DynamoDB Capacity Modes:**

- **Provisioned:** Specify read/write capacity units. Good for predictable workloads. Auto-scaling adjusts within limits.
- **On-Demand:** Pay per request. Good for unpredictable workloads. Unlimited throughput but higher per-request cost.

\\\	ypescript
interface DynamoDBConfig {
  tableName: string;
  partitionKey: string;
  sortKey?: string;
  capacityMode: "provisioned" | "on-demand";
  readCapacityUnits?: number;
  writeCapacityUnits?: number;
  autoScalingEnabled?: boolean;
  ttlAttribute?: string;
  pointInTimeRecovery?: boolean;
}

class DynamoDBTable {
  private config: DynamoDBConfig;

  constructor(config: DynamoDBConfig) {
    this.config = config;
  }

  estimateMonthlyCost(): number {
    if (this.config.capacityMode === "on-demand") {
      // On-demand: ~.25 per million write units, ~.25 per million read units
      return 0;
    }

    const storageGb = 10;
    const wcu = this.config.writeCapacityUnits || 5;
    const rcu = this.config.readCapacityUnits || 10;

    // WCU: .00065 per WCU per hour
    // RCU: .00013 per RCU per hour
    // Storage: .25 per GB/month
    const writeCost = wcu * 0.00065 * 730;
    const readCost = rcu * 0.00013 * 730;
    const storageCost = storageGb * 0.25;

    return writeCost + readCost + storageCost;
  }
}

const sessionTable = new DynamoDBTable({
  tableName: "user-sessions",
  partitionKey: "sessionId",
  capacityMode: "provisioned",
  readCapacityUnits: 50,
  writeCapacityUnits: 25,
  autoScalingEnabled: true,
  ttlAttribute: "expiresAt",
  pointInTimeRecovery: false,
});

console.log("Estimated monthly cost:", sessionTable.estimateMonthlyCost(), "USD");
\\\

### 5.4 In-Memory Caching

**Amazon ElastiCache:** Managed Redis or Memcached for sub-millisecond data access.

**Caching Patterns:**

- **Cache-Aside:** Application checks cache first, fetches from DB on miss, writes to cache.
- **Write-Through:** Data is written to cache and DB simultaneously.
- **Write-Behind:** Data is written to cache first, DB update is queued asynchronously.

\\\	ypescript
class CacheAsideStrategy<T> {
  private cache: Map<string, { data: T; expiry: number }> = new Map();
  private defaultTTL: number;

  constructor(defaultTTLMs: number = 300000) {
    this.defaultTTL = defaultTTLMs;
  }

  async get(
    key: string,
    fetchFromDb: () => Promise<T | null>,
    ttlMs?: number
  ): Promise<T | null> {
    const cached = this.cache.get(key);
    if (cached && Date.now() < cached.expiry) {
      return cached.data;
    }

    const data = await fetchFromDb();
    if (data !== null) {
      this.cache.set(key, {
        data,
        expiry: Date.now() + (ttlMs || this.defaultTTL),
      });
    }

    return data;
  }

  invalidate(key: string): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }
}

class UserService {
  private cache = new CacheAsideStrategy<{ id: number; name: string }>(60000);

  async getUser(id: number): Promise<{ id: number; name: string } | null> {
    return this.cache.get(
      "user:" + id,
      async () => {
        console.log("Cache miss — fetching from database");
        return { id, name: "User_" + id };
      }
    );
  }

  async updateUser(id: number, name: string): Promise<void> {
    console.log("Updated user", id, "with name", name);
    this.cache.invalidate("user:" + id);
  }
}

async function run() {
  const service = new UserService();

  console.time("First fetch");
  await service.getUser(1);
  console.timeEnd("First fetch");

  console.time("Cached fetch");
  await service.getUser(1);
  console.timeEnd("Cached fetch");
}

run();
\\\

### 5.5 Data Warehousing

**OLTP vs OLAP:**

| Dimension | OLTP (Online Transaction Processing) | OLAP (Online Analytical Processing) |
|-----------|--------------------------------------|--------------------------------------|
| Purpose | Day-to-day transactions | Business intelligence and analytics |
| Query Pattern | Many small queries | Few large complex queries |
| Data Model | Normalized | Denormalized, star/snowflake schema |
| Performance Metric | Transactions per second | Query execution time |
| Typical Database | RDS, DynamoDB | Redshift, BigQuery, Snowflake |

### 5.6 Multi-Tenancy Models

In a SaaS database architecture, tenants can be isolated at different levels:

\\\mermaid
graph LR
    subgraph "Multi-Tenant Isolation Models"
        A[Shared Database] --> B[Separate Schema per Tenant]
        B --> C[Separate Database per Tenant]
        C --> D[Separate Server per Tenant]
    end
    
    subgraph "Trade-offs"
        E[Low cost, complex isolation] --> A
        F[Moderate cost, good isolation] --> B
        G[Higher cost, strong isolation] --> C
        H[Highest cost, complete isolation] --> D
    end
\\\

**Multi-Tenancy Considerations:**

- **Data Privacy:** Encryption per tenant, row-level security policies.
- **Noisy Neighbors:** Resource contention with shared databases.
- **Scaling:** Can scale per tenant or globally.
- **Pricing:** Tiered pricing per tenant to account for isolation level.
- **SLAs:** Availability guarantees should account for tenant isolation boundaries.

## Examples

### Example 5.1: Multi-AZ Deployment for HA

\\\ash
aws rds create-db-instance \
  --db-instance-identifier my-production-db \
  --db-instance-class db.r5.large \
  --engine postgres \
  --multi-az \
  --storage-type gp3 \
  --allocated-storage 100 \
  --master-username admin \
  --master-user-password secret123 \
  --backup-retention-period 7 \
  --deletion-protection
\\\

### Example 5.2: Connection Pooling with PgBouncer

\\\	ypescript
class ConnectionPool {
  private pool: string[] = [];
  private maxSize: number;
  private acquired: number = 0;

  constructor(maxSize: number = 10) {
    this.maxSize = maxSize;
  }

  async acquire(): Promise<string> {
    if (this.pool.length > 0) {
      this.acquired++;
      return this.pool.pop()!;
    }

    if (this.acquired < this.maxSize) {
      this.acquired++;
      return "new-connection-" + this.acquired;
    }

    throw new Error("Connection pool exhausted");
  }

  release(connection: string): void {
    this.acquired--;
    this.pool.push(connection);
  }
}

const pool = new ConnectionPool(5);
async function query(sql: string): Promise<any[]> {
  const conn = await pool.acquire();
  try {
    console.log("Executing query on", conn);
    return [{ result: "simulated data" }];
  } finally {
    pool.release(conn);
  }
}

query("SELECT * FROM users");
\\\

### Example 5.3: Read Replica Configuration

\\\ash
aws rds create-db-instance-read-replica \
  --db-instance-identifier my-db-read-replica \
  --source-db-instance-identifier my-production-db \
  --db-instance-class db.r5.large \
  --region eu-west-1
\\\

> **One-Sentence Takeaway:** Match your database to your workload — relational for ACID, NoSQL for scale, in-memory for speed, and a warehouse for analytics — and always plan for HA with Multi-AZ deployment.

> **Pro Tip:** For cost-sensitive applications, start with DynamoDB On-Demand or Aurora Serverless to avoid provisioning excess capacity. Switch to provisioned capacity only after your workload pattern stabilizes.

> **Warning:** Single-AZ RDS instances offer no automatic failover. A zone outage or hardware failure results in downtime. Always use Multi-AZ for production unless the application can tolerate temporary database unavailability.

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| RDS | Managed relational DB with automated ops | Multi-engine support | Traditional web apps |
| DynamoDB | Serverless NoSQL key-value store | Auto-scaling, single-digit ms | Session stores, leaderboards |
| ElastiCache | In-memory Redis/Memcached | Sub-ms latency | Caching, rate limiting |
| Redshift | Columnar data warehouse | Massively parallel processing | Analytics and BI |
| Multi-AZ | Synchronous standby in another AZ | Automatic failover | High availability |
| Read Replica | Asynchronous read-only copy | Offloads read traffic | Reporting, analytics |

## Quick Reference

| Category | Key Concepts | Notes |
|----------|-------------|-------|
| **Relational** | RDS, Aurora, Cloud SQL, Azure SQL | ACID, joins, normalized data |
| **NoSQL** | DynamoDB, CosmosDB, Firestore | Flexible schema, high scale |
| **In-Memory** | ElastiCache, Memorystore | Cache-aside, write-through patterns |
| **Warehouse** | Redshift, BigQuery, Synapse | Columnar, MPP, OLAP workloads |
| **HA** | Multi-AZ, auto-failover, backup/restore | RPO seconds, RTO minutes |
| **Scaling** | Read replicas, sharding, connection pooling | Horizontal scale for reads |

## Cross-Application Matrix

| Technique | Cloud Architecture | DevOps | Security | Enterprise |
|-----------|-------------------|--------|----------|------------|
| Multi-AZ | HA architecture | Zero-downtime deployments | Data center isolation | DR compliance |
| Read Replicas | Read scaling | Reporting isolation | Encryption in transit | Analytics offload |
| Connection Pooling | Connection management | Lambda DB connections | Least privileged access | Consistent performance |
| Encryption at Rest | Security baseline | Key rotation automation | KMS integration | Compliance (HIPAA, SOC) |
| Managed Services | Lower operational burden | Automated patching | IAM-based access | Audit trails |

## Chapter Quiz

1. What does the CAP theorem say a distributed data system must sacrifice when a network partition occurs?
   - A) Partition Tolerance
   - B) Consistency or Availability
   - C) Durability
   - D) Performance

<details>
<summary>Answer</summary>
**B) Consistency or Availability.** Since network partitions are inevitable, you must choose between CP (sacrifice availability) and AP (sacrifice consistency). You cannot have all three.
</details>

2. Which DynamoDB capacity mode is best for unpredictable workloads?
   - A) Provisioned
   - B) On-Demand
   - C) Reserved
   - D) Spot

<details>
<summary>Answer</summary>
**B) On-Demand.** On-Demand mode charges per request and scales automatically to handle any traffic spike. Provisioned mode requires predicting capacity in advance, which can lead to throttling or over-provisioning for unpredictable workloads.
</details>

3. What is the primary benefit of Multi-AZ deployment for RDS?
   - A) Faster read performance
   - B) Automatic failover during an AZ outage
   - C) Reduced storage costs
   - D) Data replication to a different region

<details>
<summary>Answer</summary>
**B) Automatic failover during an AZ outage.** Multi-AZ maintains a synchronous standby replica in a different Availability Zone. If the primary fails, RDS automatically fails over to the standby with no data loss.
</details>

4. In the Cache-Aside pattern, what happens on a cache miss?
   - A) An error is returned to the client
   - B) The application fetches data from the database and writes it to the cache
   - C) The cache automatically loads the data from the database
   - D) The request is queued for later processing

<details>
<summary>Answer</summary>
**B) The application fetches data from the database and writes it to the cache.** In cache-aside, the application is responsible for loading cache misses: check cache → miss → query DB → populate cache → return to caller.
</details>

5. Which database type uses a denormalized star or snowflake schema?
   - A) NoSQL database
   - B) In-memory cache
   - C) OLAP data warehouse
   - D) Relational OLTP database

<details>
<summary>Answer</summary>
**C) OLAP data warehouse.** Data warehouses like Redshift and BigQuery use denormalized schemas optimized for complex analytical queries. OLTP databases typically use normalized schemas optimized for fast transactions.
</details>

## Summary

- The CAP theorem forces a choice between consistency and availability during partitions.
- Managed relational databases reduce operational overhead with automated backups, patching, and HA.
- DynamoDB provides single-digit millisecond latency with auto-scaling for unpredictable workloads.
- In-memory caches dramatically improve read performance for frequently accessed data.
- Data warehouses optimize for complex analytical queries over large datasets.
- Multi-tenancy isolation models range from shared databases to dedicated servers per tenant.
- Read replicas offload read traffic and improve global performance.

## Exercises

### Review Questions

1. Explain the CAP theorem and how it influences database selection for cloud applications.
2. Compare DynamoDB Provisioned vs On-Demand capacity modes and when to use each.
3. What is the difference between Multi-AZ deployment and Read Replicas?
4. Describe the Cache-Aside pattern and its advantages over other caching strategies.
5. How does a data warehouse differ from an OLTP database in terms of schema design and query patterns?
6. What are the trade-offs of shared database vs separate database per tenant in SaaS?

### Application Problems

1. Design a database architecture for a social media app that needs low-latency profile reads, ACID transactions for payments, and real-time analytics.

2. A web application experiences 10:1 read-to-write ratio. Propose an architecture using RDS and ElastiCache to handle 100,000 reads/second.

3. Write a TypeScript function that chooses between DynamoDB On-Demand and Provisioned capacity based on monthly cost estimates for a given workload pattern.

4. A healthcare SaaS needs per-tenant data isolation. Design a multi-tenancy model that balances HIPAA compliance requirements with cost efficiency.

5. Calculate the cost of running a 2 TB data warehouse on Redshift vs BigQuery for a team of 50 analysts running 500 queries/day.

### Challenge Problem

Design a global e-commerce database architecture handling 1M products, 10M users, and 100K orders/day across US, EU, and APAC. The system needs: 1) Fast product catalog reads globally, 2) ACID-compliant order processing, 3) Real-time inventory updates, 4) Analytics on sales trends, and 5) Per-region data residency compliance. Propose specific database services and replication strategies.
