# Chapter 4: Cloud Storage Services

> **Previous:** [Chapter 3: Cloud Compute Services](./03-cloud-compute.md) | **Next:** [Chapter 5: Cloud Database Services](./05-cloud-database.md)

## Learning Objectives

After completing this chapter, students will be able to:

1. Differentiate between object, block, and file storage models and their use cases.
2. Compare object storage offerings (S3, Azure Blob, GCS) including buckets/containers and tiers.
3. Configure persistent block storage for virtual machines across different performance tiers.
4. Implement shared file systems using NFS and SMB protocols in the cloud.
5. Apply lifecycle management policies to automate data tiering and cost optimization.
6. Evaluate data durability and availability through replication strategies.
7. Design content delivery strategies using global CDN services.
8. Understand S3 consistency model and object versioning.

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|--------------------|
| Object Storage | S3, Blob, GCS ? infinite scale via HTTP | Best for static files, backups, data lakes |
| Block Storage | EBS, Disk, PD ? raw volumes for VMs | Best for databases, OS boot volumes |
| File Storage | EFS, Azure Files, Filestore ? shared NFS/SMB | Best for multi-VM shared access |
| Storage Tiers | Hot, Cool, Archive | Automate tier transitions for cost savings |
| Lifecycle Policies | Auto-move data between tiers | Essential for cost management at scale |
| CDN | Edge caching for global performance | Cuts latency, reduces origin load |
| Replication | Same-region vs cross-region | DR and compliance requirements drive choice |

## Chapter Roadmap

\\\mermaid
flowchart LR
    A[Storage Taxonomy] --> B[Object Storage]
    A --> C[Block Storage]
    A --> D[File Storage]
    B --> E[Versioning and Lifecycle]
    C --> F[Performance Tiers]
    D --> G[Shared Access Protocols]
    E --> H[CDN and Distribution]
    F --> H
\\\

## Theory

### 4.1 Taxonomy of Cloud Storage

Cloud providers offer three primary categories of storage, each optimized for different data access patterns and architectural requirements:

1. **Object Storage:** Stores data as discrete objects with metadata and unique identifiers. Highly scalable, accessed via HTTP/REST APIs. Ideal for static media, backups, and data lakes.
2. **Block Storage:** Provides raw storage volumes that can be formatted with a filesystem. Low latency, high throughput, attached to a single VM (mostly). Ideal for databases and OS boot volumes.
3. **File Storage:** Provides managed file shares accessible via standard network protocols (NFS/SMB). Supports concurrent access by multiple VMs. Ideal for home directories and shared application data.

\\\mermaid
graph TB
    subgraph "Cloud Storage Taxonomy"
        direction TB
        A[Cloud Storage]
        A --> B[Object Storage]
        A --> C[Block Storage]
        A --> D[File Storage]
        
        B --> B1["S3, Blob, GCS<br/>HTTP/REST API<br/>Infinite scale"]
        C --> C1["EBS, Disk, PD<br/>iSCSI/NVMe<br/>Low latency"]
        D --> D1["EFS, Azure Files, Filestore<br/>NFS/SMB<br/>Shared access"]
        
        B1 --> E["Use: Backups, media, data lakes"]
        C1 --> F["Use: Databases, boot volumes"]
        D1 --> G["Use: Shared config, home dirs"]
    end
\\\

### 4.2 Object Storage: S3, Blob, and GCS

Object storage is the "Swiss Army Knife" of cloud storage, offering virtually infinite scale.

| Feature | AWS S3 | Azure Blob Storage | Google Cloud Storage |
|---------|--------|-------------------|----------------------|
| Container Unit | Bucket | Container | Bucket |
| Identification | Key | Name | Name |
| Namespace | Global unique names | Account Level | Global unique names |
| Standard Tier | S3 Standard | Hot | Standard |
| Infrequent Tier | S3 Standard-IA | Cool | Nearline / Coldline |
| Archive Tier | S3 Glacier | Archive | Archive |
| Consistency | Read-after-write, Eventual overwrite | Immediate consistency | Strong consistency |
| Encryption | SSE-S3, SSE-KMS, SSE-C | Azure Storage encryption | Server-side, CMEK |
| Max Object Size | 5 TB | 4.75 TB | 5 TB |

**Consistency Model:** S3 provides read-after-write consistency for PUTS of new objects and eventual consistency for overwrite PUTS and DELETES. Azure Blob and GCS provide strong consistency for all operations.

**Durability and Availability:** Providers typically guarantee "11 nines" (99.999999999%) durability by replicating data across multiple physical disks and data centers (Availability Zones). For 10 million objects, this means statistically one object might be lost every 10 million years.

### 4.3 Object Versioning and Lifecycle Policies

**Versioning:** Protects against accidental deletion and allows recovery of previous object states. When enabled, every object modification creates a new version. Delete operations create delete markers instead of permanently removing data.

**Lifecycle Policies:** Automatically transition data from "Hot" (expensive, fast) to "Archive" (cheap, slow) based on time. Example: move to infrequent access after 30 days, archive after 90 days, delete after 365 days.

\\\mermaid
graph LR
    subgraph "Object Versioning"
        A[PUT object.jpg] --> B[Version ID: 111]
        A --> C[Version ID: 222]
        A --> D[Version ID: 333]
        D --> E[Delete Marker]
        E --> F[Previous Versions retained but hidden]
    end
    
    subgraph "Lifecycle Transitions"
        G[Day 0: Standard] --> H[Day 30: Standard-IA]
        H --> I[Day 90: Glacier]
        I --> J[Day 365: Expire/Delete]
    end
\\\

\\\	ypescript
interface LifecycleTransition {
  days: number;
  storageClass: string;
}

interface LifecycleRule {
  id: string;
  enabled: boolean;
  prefix: string;
  transitions: LifecycleTransition[];
  expirationDays?: number;
}

function generateLifecyclePolicy(
  dataCategory: "logs" | "media" | "backups" | "compliance"
): LifecycleRule[] {
  const policies: Record&lt;string, LifecycleRule[]&gt; = {
    logs: [
      {
        id: "logs-lifecycle",
        enabled: true,
        prefix: "logs/",
        transitions: [
          { days: 30, storageClass: "S3 Standard-IA" },
          { days: 90, storageClass: "S3 Glacier" },
        ],
        expirationDays: 365,
      },
    ],
    media: [
      {
        id: "media-hot",
        enabled: true,
        prefix: "media/",
        transitions: [
          { days: 90, storageClass: "S3 Standard-IA" },
          { days: 365, storageClass: "S3 Glacier" },
        ],
      },
    ],
    backups: [
      {
        id: "backups-long-term",
        enabled: true,
        prefix: "backups/",
        transitions: [
          { days: 30, storageClass: "S3 Standard-IA" },
          { days: 180, storageClass: "S3 Glacier Deep Archive" },
        ],
      },
    ],
    compliance: [
      {
        id: "compliance-immutable",
        enabled: true,
        prefix: "compliance/",
        transitions: [
          { days: 365, storageClass: "S3 Glacier" },
        ],
        expirationDays: 2555,
      },
    ],
  };

  return policies[dataCategory] || [];
}

const logRules = generateLifecyclePolicy("logs");
console.log(JSON.stringify(logRules, null, 2));
\\\

Output:
\\\
[
  {
    "id": "logs-lifecycle",
    "enabled": true,
    "prefix": "logs/",
    "transitions": [
      { "days": 30, "storageClass": "S3 Standard-IA" },
      { "days": 90, "storageClass": "S3 Glacier" }
    ],
    "expirationDays": 365
  }
]
\\\

### 4.4 Block Storage: EBS, Azure Disk, and Persistent Disk

Block storage behaves like a physical hard drive. It is typically confined to a specific Availability Zone because it requires low-latency connection to the host.

| Tier | Max IOPS | Max Throughput | Use Case | Cost/GB/month |
|------|----------|----------------|----------|---------------|
| gp3 (General Purpose) | 16,000 | 1,000 MB/s | Boot volumes, dev/test | \.08 |
| io2 (Provisioned IOPS) | 256,000 | 4,000 MB/s | Large databases | \.125 |
| st1 (Throughput Optimized) | 500 | 500 MB/s | Big data, ETL | \.045 |
| sc1 (Cold HDD) | 250 | 250 MB/s | Cold backups | \.015 |

**Key Concepts:**

- **IOPS:** Input/Output Operations Per Second. Measures how many read/write operations per second the volume can handle.
- **Throughput:** Data transfer rate in MB/s. Critical for sequential workloads like data warehousing.
- **Snapshot:** Point-in-time backup stored in S3. Can be used to create new volumes, resize, or migrate across AZs.
- **Encryption:** EBS encryption at rest using KMS. Prevents unauthorized access if a volume or snapshot is compromised.

### 4.5 File Storage: Managed Network Shares

Managed file services eliminate the overhead of managing file servers.

- **AWS EFS / FSx:** EFS for Linux (NFSv4), FSx for Windows (SMB) and Lustre (HPC).
- **Azure Files:** Supports both SMB and NFS. Can be integrated with on-premises Active Directory.
- **GCP Filestore:** Fully managed NFS server for Compute Engine and GKE.

| Service | Protocol | Performance | Use Case |
|---------|----------|-------------|----------|
| EFS | NFSv4 | Bursting to 3 GB/s | Shared storage for Linux VMs |
| FSx for Windows | SMB | Up to 2 GB/s | Windows file servers, AD integration |
| FSx for Lustre | Lustre | Up to 1 TB/s | HPC, ML training |
| Azure Files | SMB/NFS | Up to 100 GB/s | Enterprise file shares |
| Filestore | NFSv3 | Up to 320 GB/s | High-performance shared storage |

### 4.6 Storage Replication and Data Protection

\\\mermaid
graph TB
    subgraph "Replication Strategies"
        A[Source Bucket/Volume]
        A --> B[Same-Region Replication]
        A --> C[Cross-Region Replication]
        B --> D[Compliance, Log aggregation]
        C --> E[DR, Geo-compliance, Latency optimization]
    end
    
    subgraph "Data Protection"
        F[Versioning]
        G[Immutable Object Lock]
        H[Replication]
        I[Snapshots]
        J[MFA Delete]
    end
\\\

**Replication Options:**

- **Same-Region Replication (SRR):** Copies objects to another bucket in the same region. Used for compliance, log aggregation, or data protection within the same geography.
- **Cross-Region Replication (CRR):** Copies objects across AWS regions. Used for disaster recovery, geographic compliance, and latency optimization for global users.

**Data Protection Features:**

- **Versioning:** Preserves all object versions. Protects against accidental deletion and overwrites.
- **Object Lock:** Write-once-read-many (WORM) protection. Prevents object deletion even by root users. Essential for compliance (SEC 17a-4).
- **MFA Delete:** Requires multi-factor authentication to delete objects or change versioning state.
- **Snapshots:** Point-in-time backups of block storage volumes. Incremental ? only changed data is saved.

### 4.7 Content Delivery Networks (CDN)

CDNs cache content at "Edge Locations" closer to the end-users to reduce latency.

\\\mermaid
sequenceDiagram
    participant User as End User
    participant Edge as Edge Location
    participant Origin as Origin Server
    participant S3 as S3 Bucket

    User->>Edge: GET /image.jpg
    Edge->>Edge: Check cache
    alt Cache Hit
        Edge-->>User: 200 OK + image (cached)
    else Cache Miss
        Edge->>Origin: Forward request
        Origin->>S3: Fetch from origin
        S3-->>Origin: image data
        Origin-->>Edge: Cache response
        Edge-->>User: 200 OK + image
    end
\\\

- **AWS CloudFront:** Deeply integrated with S3 and WAF. Supports Lambda@Edge for serverless compute at the edge.
- **Azure CDN / Front Door:** Optimized for enterprise content and global application acceleration.
- **GCP Cloud CDN:** Leverages Google global private network and Anycast IP.

**CDN Cache Behavior:**

- **TTL (Time to Live):** How long the edge keeps content before checking for a new version. Controlled by Cache-Control headers or origin settings.
- **Cache Invalidation:** Manually removing cached content before TTL expires. Use for immediate updates.
- **Origin Shield:** An intermediate caching layer that reduces load on the origin server.

## Examples

### Example 4.1: Object Storage Lifecycle Policy (JSON)

An S3 policy to move objects to Infrequent Access after 30 days and Archive after 90 days:
\\\json
{
  "Rules": [
    {
      "ID": "MoveToArchive",
      "Status": "Enabled",
      "Transitions": [
        { "Days": 30, "StorageClass": "STANDARD_IA" },
        { "Days": 90, "StorageClass": "GLACIER" }
      ]
    }
  ]
}
\\\

### Example 4.2: Mounting a Managed File Share (Linux)

\\\ash
sudo mount -t nfs4 -o nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport fs-01234567.efs.us-east-1.amazonaws.com:/ /mnt/efs
\\\

### Example 4.3: TypeScript Storage Operations Wrapper

\\\	ypescript
interface StorageProvider {
  upload(bucket: string, key: string, data: Buffer, storageClass?: string): Promise&lt;string&gt;;
  download(bucket: string, key: string): Promise&lt;Buffer&gt;;
  delete(bucket: string, key: string): Promise&lt;void&gt;;
  list(bucket: string, prefix: string): Promise&lt;string[]&gt;;
  copy(sourceBucket: string, sourceKey: string, destBucket: string, destKey: string): Promise&lt;void&gt;;
}

class S3StorageProvider implements StorageProvider {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async upload(bucket: string, key: string, data: Buffer, storageClass = "STANDARD"): Promise&lt;string&gt; {
    console.log("Uploading", key, "to", bucket, "class:", storageClass);
    console.log("  Size:", (data.length / 1024 / 1024).toFixed(2), "MB");
    return "https://" + bucket + ".s3.amazonaws.com/" + key;
  }

  async download(bucket: string, key: string): Promise&lt;Buffer&gt; {
    console.log("Downloading", key, "from", bucket);
    return Buffer.from("simulated data");
  }

  async delete(bucket: string, key: string): Promise&lt;void&gt; {
    console.log("Deleted", key, "from", bucket);
  }

  async list(bucket: string, prefix: string): Promise&lt;string[]&gt; {
    return ["file1.txt", "file2.txt", "file3.txt"];
  }

  async copy(sourceBucket: string, sourceKey: string, destBucket: string, destKey: string): Promise&lt;void&gt; {
    console.log("Copied", sourceBucket + "/" + sourceKey, "to", destBucket + "/" + destKey);
  }
}

class StorageManager {
  private provider: StorageProvider;

  constructor(provider: StorageProvider) {
    this.provider = provider;
  }

  async backupDatabase(
    databaseName: string,
    backupData: Buffer,
    retentionDays: number
  ): Promise&lt;string&gt; {
    const bucket = "company-db-backups";
    const key = "databases/" + databaseName + "/" + Date.now() + ".bak";

    let storageClass = "STANDARD";
    if (retentionDays > 90) storageClass = "GLACIER";
    else if (retentionDays > 30) storageClass = "STANDARD_IA";

    return this.provider.upload(bucket, key, backupData, storageClass);
  }

  async replicateAcrossRegions(
    bucket: string,
    key: string,
    destinationRegion: string
  ): Promise&lt;void&gt; {
    const destBucket = bucket + "-" + destinationRegion;
    await this.provider.copy(bucket, key, destBucket, key);
    console.log("Replicated", key, "to", destinationRegion);
  }

  async generateStorageReport(): Promise&lt;void&gt; {
    const buckets = ["company-data", "company-logs", "company-backups"];
    for (const bucket of buckets) {
      const objects = await this.provider.list(bucket, "");
      console.log(bucket + ":", objects.length, "objects");
    }
  }
}

const provider = new S3StorageProvider("https://s3.us-east-1.amazonaws.com");
const manager = new StorageManager(provider);

async function runDemo(): Promise&lt;void&gt; {
  const backupLocation = await manager.backupDatabase(
    "production-db",
    Buffer.alloc(1024 * 1024 * 100),
    180
  );
  console.log("Backup stored at:", backupLocation);
  await manager.replicateAcrossRegions("company-data", "critical-file.pdf", "eu-west-1");
  await manager.generateStorageReport();
}

runDemo();
\\\

> **One-Sentence Takeaway:** The three cloud storage models serve fundamentally different purposes ? object for scale and durability, block for performance, and file for shared access ? and knowing which to use is the key to cost-effective cloud architecture.

> **Pro Tip:** For cost-optimized object storage, set up lifecycle policies on day one ? move objects to infrequent access after 30 days and archive after 90. This can reduce storage costs by 80%+ for data with predictable access decay.

> **Warning:** Object storage does not support file locking or POSIX semantics. If your application needs concurrent writes with locking, use block or file storage. Attempting to use object storage for a database will result in data corruption.

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| Object Storage | HTTP-accessible key-value for files | Infinite scale, eventual consistency | Backups, media, data lakes |
| Block Storage | Raw volumes formatted with FS | Low latency, single-VM attachment | Databases, boot volumes |
| File Storage | Network file system (NFS/SMB) | Multi-VM shared access | Shared configs, home dirs |
| Hot Tier | Frequent access, highest cost | Low latency retrieval | Active data |
| Cool/IA Tier | Infrequent access, lower cost | 30+ day retrieval | Backups, logs |
| Archive Tier | Rare access, lowest cost | Minutes to hours retrieval | Compliance archives |
| Versioning | Object modification history | Protects against accidental deletion | Data protection |
| Replication | Cross-bucket or cross-region copy | DR and compliance | Disaster recovery |

## Quick Reference

| Category | Key Concepts | Notes |
|----------|-------------|-------|
| **Object Storage** | S3, Blob, GCS - buckets, keys, tiers | 99.999999999% durability |
| **Block Storage** | EBS, Disk, PD - IOPS tiers | Provisioned IOPS costs extra |
| **File Storage** | EFS (NFS), Azure Files (SMB), FSx | Scales with connected clients |
| **Lifecycle** | Transition, Expiration, Intelligent-Tiering | Automate data tier movement |
| **CDN** | CloudFront, Azure CDN, Cloud CDN | Edge caching reduces origin load |

## Cross-Application Matrix

| Technique | Cloud Architecture | DevOps | Security | Enterprise |
|-----------|-------------------|--------|----------|------------|
| Object Storage | Data lakes, backups | Artifact storage | Encryption at rest | Long-term archives |
| Block Storage | Database persistence | Dev volumes | Encryption, snapshots | Boot volumes |
| File Storage | Shared application data | Config management | Access control lists | Home directories |
| Lifecycle Policies | Cost governance | Log rotation | Compliance data retention | Archive management |
| CDN | Global distribution | Cache invalidation | DDoS protection | Reduced latency |

## Chapter Quiz

1. What durability guarantee do major cloud providers offer for object storage?
   - A) 99.99%
   - B) 99.999999999% (11 nines)
   - C) 99.9999%
   - D) 100%

<details>
<summary>Answer&lt;/summary&gt;
**B) 99.999999999% (11 nines).** Object storage achieves this by automatically replicating data across multiple physical devices and availability zones. For 10 million objects, this means statistically one object might be lost every 10 million years.
</details>

2. When should you choose File Storage (EFS/Azure Files/Filestore) over attaching Block Storage to each VM?
   - A) Always ? file storage is cheaper
   - B) When multiple VMs need concurrent read/write access to the same data
   - C) File storage is faster than block storage
   - D) When you need a boot volume for VMs

<details>
<summary>Answer&lt;/summary&gt;
**B) When multiple VMs need concurrent read/write access to the same data.** Block storage can only be attached to one VM at a time. File storage provides shared access via NFS or SMB, making it ideal for shared configuration, home directories, and clustered applications.
</details>

3. What happens to data stored on an Instance Store volume when the EC2 instance is stopped?
   - A) Data is automatically saved to S3
   - B) Data persists until the instance is terminated
   - C) Data is permanently lost
   - D) Data is migrated to a new host

<details>
<summary>Answer&lt;/summary&gt;
**C) Data is permanently lost.** Instance store volumes are physically attached to the host server. When the instance stops, the data on instance store volumes is lost. This is why critical data must always use persistent storage like EBS.
</details>

4. What is the purpose of Cross-Region Replication in object storage?
   - A) To make copies for load balancing
   - B) To provide disaster recovery and geographic compliance
   - C) To increase storage capacity
   - D) To reduce latency for local users

<details>
<summary>Answer&lt;/summary&gt;
**B) To provide disaster recovery and geographic compliance.** Cross-Region Replication copies objects to a bucket in a different AWS region, protecting against region-wide outages and meeting data residency requirements.
</details>

5. Which CDN behavior determines how long an edge location keeps content before checking for updates?
   - A) Cache invalidation
   - B) TTL (Time to Live)
   - C) Origin pull
   - D) Edge function

<details>
<summary>Answer&lt;/summary&gt;
**B) TTL (Time to Live).** TTL is set via Cache-Control headers and controls how long the edge location stores content before re-fetching from the origin server.
</details>

### TypeScript: Cost Calculator

```typescript
interface StorageCostConfig {
  tier: "standard" | "infrequent" | "archive" | "glacier";
  storageGb: number;
  monthlyGetRequests: number;
  monthlyPutRequests: number;
}

class StorageCostCalculator {
  rates = {
    standard: { perGb: 0.023, perGet: 4e-7, perPut: 5e-7 },
    infrequent: { perGb: 0.0125, perGet: 1e-6, perPut: 1e-6 },
    glacier: { perGb: 0.004, perGet: 4e-4, perPut: 3e-5 },
    archive: { perGb: 0.001, perGet: 8e-4, perPut: 5e-5 },
  };

  monthlyCost(config: StorageCostConfig): number {
    const r = this.rates[config.tier];
    return config.storageGb * r.perGb + config.monthlyGetRequests * r.perGet + config.monthlyPutRequests * r.perPut;
  }

  compareTiers(config: Omit<StorageCostConfig, "tier">): Record<string, number> {
    const result: Record<string, number> = {};
    for (const tier of Object.keys(this.rates)) {
      result[tier] = this.monthlyCost({ ...config, tier: tier as any });
    }
    return result;
  }
}
// const calc = new StorageCostCalculator();
// console.log(calc.compareTiers({ storageGb: 5000, monthlyGetRequests: 1e6, monthlyPutRequests: 1e5 }));
```

### TypeScript: Storage Lifecycle Policy Simulator

```typescript
type StorageTier = "standard" | "infrequent-access" | "archive" | "deep-archive";

interface LifecycleRule {
  id: string;
  prefix: string;
  transitions: { days: number; tier: StorageTier }[];
  expirationDays?: number;
}

interface StorageObject {
  key: string;
  sizeGB: number;
  lastAccessed: number;
  currentTier: StorageTier;
  age: number;
}

class LifecyclePolicyEngine {
  private rules: LifecycleRule[] = [];
  private objects: StorageObject[] = [];
  private tierCosts: Record<StorageTier, number> = {
    "standard": 0.023, "infrequent-access": 0.0125,
    "archive": 0.004, "deep-archive": 0.001,
  };

  addRule(rule: LifecycleRule): void { this.rules.push(rule); }
  addObject(obj: StorageObject): void { this.objects.push(obj); }

  simulateDay(): StorageObject[] {
    const transitions: StorageObject[] = [];
    for (const obj of this.objects) {
      obj.age++;
      for (const rule of this.rules) {
        if (!obj.key.startsWith(rule.prefix)) continue;
        for (const t of rule.transitions) {
          if (obj.age >= t.days && obj.currentTier !== t.tier) {
            const fromCost = this.tierCosts[obj.currentTier];
            const toCost = this.tierCosts[t.tier];
            const savings = obj.sizeGB * (fromCost - toCost);
            obj.currentTier = t.tier;
            transitions.push({ ...obj, currentTier: obj.currentTier });
            console.log(`Transitioned ${obj.key} to ${t.tier}: saving $${savings.toFixed(3)}/month`);
          }
        }
      }
    }
    return transitions;
  }

  calculateMonthlyCost(): number {
    return this.objects.reduce((sum, obj) => sum + obj.sizeGB * this.tierCosts[obj.currentTier], 0);
  }

  simulateDays(days: number): void {
    for (let d = 0; d < days; d++) this.simulateDay();
  }
}

const engine = new LifecyclePolicyEngine();
engine.addRule({
  id: "logs-lifecycle", prefix: "logs/",
  transitions: [
    { days: 30, tier: "infrequent-access" },
    { days: 90, tier: "archive" },
    { days: 365, tier: "deep-archive" },
  ],
  expirationDays: 2555,
});
engine.addRule({
  id: "media-lifecycle", prefix: "media/",
  transitions: [
    { days: 90, tier: "infrequent-access" },
    { days: 730, tier: "archive" },
  ],
});
for (let i = 1; i <= 5; i++) engine.addObject({ key: `logs/app-${i}.log`, sizeGB: 10, lastAccessed: 0, currentTier: "standard", age: 0 });
for (let i = 1; i <= 3; i++) engine.addObject({ key: `media/video-${i}.mp4`, sizeGB: 50, lastAccessed: 0, currentTier: "standard", age: 0 });
console.log("Monthly cost before lifecycle:", "$" + engine.calculateMonthlyCost().toFixed(2));
engine.simulateDays(400);
console.log("Monthly cost after lifecycle:", "$" + engine.calculateMonthlyCost().toFixed(2));
```

### TypeScript: Replication Manager

```typescript
interface ReplicationConfig {
  sourceBucket: string;
  destinationBucket: string;
  destinationRegion: string;
  prefix: string;
  replicateDeleteMarkers: boolean;
  encryptionEnabled: boolean;
}

interface ReplicationMetrics {
  totalObjects: number;
  replicatedObjects: number;
  failedObjects: number;
  totalBytes: number;
  replicatedBytes: number;
  lastReplicationTime: number | null;
  replicationLag: number;
}

class ReplicationManager {
  private configs: ReplicationConfig[] = [];
  private metrics: Map<string, ReplicationMetrics> = new Map();

  addConfig(config: ReplicationConfig): void {
    this.configs.push(config);
    this.metrics.set(config.sourceBucket + "->" + config.destinationBucket, {
      totalObjects: 0, replicatedObjects: 0, failedObjects: 0,
      totalBytes: 0, replicatedBytes: 0,
      lastReplicationTime: null, replicationLag: 0,
    });
  }

  recordObject(key: string, sizeBytes: number): void {
    for (const cfg of this.configs) {
      if (!key.startsWith(cfg.prefix)) continue;
      const metricKey = cfg.sourceBucket + "->" + cfg.destinationBucket;
      const m = this.metrics.get(metricKey)!;
      m.totalObjects++;
      m.totalBytes += sizeBytes;
    }
  }

  replicate(): void {
    for (const cfg of this.configs) {
      const metricKey = cfg.sourceBucket + "->" + cfg.destinationBucket;
      const m = this.metrics.get(metricKey)!;
      const pending = m.totalObjects - m.replicatedObjects - m.failedObjects;
      const success = Math.floor(pending * 0.95);
      const failed = pending - success;

      m.replicatedObjects += success;
      m.failedObjects += failed;
      m.lastReplicationTime = Date.now();
      m.replicationLag = 5000 + Math.floor(Math.random() * 30000);

      if (failed > 0) {
        console.log(`[${metricKey}] ${success} replicated, ${failed} failed (lag: ${m.replicationLag}ms)`);
      }
    }
  }

  getComplianceReport(): { config: string; progress: number; lag: number }[] {
    return [...this.metrics.entries()].map(([key, m]) => ({
      config: key,
      progress: m.totalObjects > 0 ? Math.round((m.replicatedObjects / m.totalObjects) * 100) : 100,
      lag: m.replicationLag,
    }));
  }
}

const repl = new ReplicationManager();
repl.addConfig({ sourceBucket: "prod-data", destinationBucket: "prod-data-dr", destinationRegion: "eu-west-1", prefix: "critical/", replicateDeleteMarkers: true, encryptionEnabled: true });
for (let i = 1; i <= 100; i++) repl.recordObject(`critical/order-${i}.json`, 1024 * 50);
repl.replicate();
console.log("Replication status:", JSON.stringify(repl.getComplianceReport(), null, 2));
```

### TypeScript: Storage Tier Lifecycle Policy Engine

```typescript
interface TierConfig { name: string; costPerGBMo: number; retrievalHours: number; minDays: number; }
interface LifecycleRule { prefix: string; transitions: { tier: string; afterDays: number }[]; }

class LifecyclePolicyEngine {
  private tiers: TierConfig[] = [
    { name: "Standard", costPerGBMo: 0.023, retrievalHours: 0, minDays: 0 },
    { name: "Infrequent Access", costPerGBMo: 0.0125, retrievalHours: 1, minDays: 30 },
    { name: "Glacier", costPerGBMo: 0.0036, retrievalHours: 12, minDays: 90 },
    { name: "Deep Archive", costPerGBMo: 0.00099, retrievalHours: 48, minDays: 180 },
  ];

  simulateCost(dataGB: number, rules: LifecycleRule[], months: number): { byTier: Record<string, number>; total: number } {
    const monthlyCosts: Record<string, number> = {};
    let currentData = dataGB;
    for (let m = 1; m <= months; m++) {
      for (const rule of rules) {
        for (const t of rule.transitions) {
          if (m === t.afterDays / 30 + 1) {
            const tier = this.tiers.find(ti => ti.name === t.tier)!;
            monthlyCosts[t.tier] = (monthlyCosts[t.tier] || 0) + currentData * tier.costPerGBMo;
          }
        }
      }
    }
    const total = Object.values(monthlyCosts).reduce((a, b) => a + b, 0);
    return { byTier: monthlyCosts, total: Math.round(total * 100) / 100 };
  }
}

const lpe = new LifecyclePolicyEngine();
const cost = lpe.simulateCost(10000, [{ prefix: "logs/", transitions: [{ tier: "Infrequent Access", afterDays: 30 }, { tier: "Glacier", afterDays: 90 }] }], 12);
console.log("Yearly cost:", JSON.stringify(cost, null, 2));
```
```


// cloud storage
// iaas-paas-saas-cloud-native implementation

interface Task { id: string; name: string; status: string; data: unknown }
class Processor {
  private tasks: Task[] = []
  private maxConcurrency: number
  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }
  async add(task: Omit<Task, "status">): Promise<void> {
    this.tasks.push({ ...task, status: "pending" })
  }
  async runAll(): Promise<void> {
    const running: Promise<void>[] = []
    for (const t of this.tasks) {
      if (running.length >= this.maxConcurrency) { await Promise.race(running) }
      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })
      running.push(p)
    }
    await Promise.all(running)
  }
  private async execute(t: Task): Promise<void> {
    t.status = "running"
    await new Promise(r => setTimeout(r, 10))
    t.status = "done"
  }
  getResults(): Task[] { return this.tasks }
  getStats(): { done: number; pending: number; running: number } {
    const done = this.tasks.filter(t => t.status === "done").length
    const pending = this.tasks.filter(t => t.status === "pending").length
    const running = this.tasks.filter(t => t.status === "running").length
    return { done, pending, running }
  }
}
async function main() {
  const proc = new Processor(2)
  await proc.add({ id: '1', name: 'cloud storage', data: { topic: 'iaas-paas-saas-cloud-native' } })
  await proc.runAll()
  console.log('Stats:', proc.getStats())
}
main().catch(console.error)
export { Processor, Task }

// cloud storage - additional TS implementations

interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }
class Cache {
  private store: Map<string, CacheEntry> = new Map()
  constructor(private defaultTTL: number = 60000) {}
  set(key: string, value: unknown, ttl?: number): void {
    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })
  }
  get(key: string): unknown | undefined {
    const entry = this.store.get(key)
    if (!entry) return undefined
    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }
    return entry.value
  }
  delete(key: string): boolean { return this.store.delete(key) }
  clear(): void { this.store.clear() }
  size(): number { return this.store.size }
  keys(): string[] { return Array.from(this.store.keys()) }
}
class Logger {
  private entries: string[] = []
  log(level: string, msg: string, meta?: Record<string, unknown>): void {
    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })
    this.entries.push(entry)
    console.log(entry)
  }
  info(msg: string, meta?: Record<string, unknown>): void { this.log("info", msg, meta) }
  warn(msg: string, meta?: Record<string, unknown>): void { this.log("warn", msg, meta) }
  error(msg: string, meta?: Record<string, unknown>): void { this.log("error", msg, meta) }
  getLogs(): string[] { return [...this.entries] }
  clear(): void { this.entries = [] }
}
function computeHash(input: string): string {
  let hash = 0
  for (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }
  return Math.abs(hash).toString(16)
}
async function demo(): Promise<void> {
  const cache = new Cache(5000)
  cache.set('key1', 'cloud-services demo')
  const log = new Logger()
  log.info('Cache demo started', { course: 'cloud-computing', chapter: 'cloud storage' })
  const v = cache.get("key1")
  console.log('Cached:', v)
  console.log('Hash:', computeHash('cloud-services'))
}
demo()
export { Cache, Logger, computeHash, CacheEntry }
## Summary

- Cloud storage is categorized into Object, Block, and File models.
- Object storage excels at unstructured data with HTTP access and 11 nines durability.
- Block storage provides low-latency random I/O ideal for database workloads.
- File storage enables NFS/SMB shared access across multiple compute instances.
- Object storage (S3/Blob/GCS) provides extreme durability and scale via HTTP access.
- Object versioning protects against accidental deletion and enables data recovery.
- Lifecycle policies automate cost optimization by transitioning data to cheaper tiers.
- Block storage (EBS/Disk/PD) provides high-performance local storage for VMs.
- File storage (EFS/Azure Files/Filestore) enables shared network access across multiple VMs.
- Replication strategies (SRR/CRR) provide disaster recovery and compliance capabilities.
- CDNs improve user experience by caching static and dynamic content at the network edge.

## Exercises

### Review Questions

1. Compare Object Storage and Block Storage in terms of access method and scalability.
2. What are "11 nines" of durability, and how do providers achieve this?
3. When should you use a File Storage service instead of attaching multiple Block volumes?
4. Explain the trade-offs of using an Archive storage tier (e.g., retrieval time vs. cost).
5. How does a CDN improve the performance of a global web application?
6. What is the difference between Same-Region and Cross-Region Replication?
7. How does object versioning protect against data loss?

### Application Problems

1. A hospital needs to store X-ray images. Images are accessed frequently for the first 48 hours, then rarely for the next 5 years, but must be kept for 10 years for legal reasons. Design a storage and lifecycle strategy.

2. A database requires 50,000 IOPS to handle peak transaction volume. Which block storage tier would you select on AWS, and how would you configure it?

3. A team of developers needs to share a set of configuration files across 50 Linux servers. Propose a solution that ensures all servers see the same files in real-time.

4. Write a TypeScript function that calculates the monthly storage cost for 10 TB of data using S3 Standard vs S3 Glacier, assuming 10% of data is accessed monthly.

5. Design a CDN strategy for a global media company that serves 4K video content to users across North America, Europe, and Asia. Consider origin location, edge strategy, and cache TTL.

### Challenge Problem

You are designing the storage backend for a YouTube-like video platform. Users upload 1000 videos per hour. Videos are transcoded into multiple resolutions. Popular videos are accessed globally, while old videos are rarely watched. Propose a comprehensive storage architecture that handles: 1) Initial upload, 2) Transcoding workspace, 3) Global distribution of popular content, 4) Cost-effective long-term retention of unpopular content, and 5) Data durability across regional failures.
