# Chapter 10: Google Cloud Platform Fundamentals

## Learning Objectives

After completing this chapter, students will be able to:

1. Map GCP service names to equivalent AWS services.
2. Deploy and manage Compute Engine instances.
3. Implement Cloud Storage with appropriate storage classes and lifecycle policies.
4. Configure Cloud SQL and BigQuery for relational and analytical workloads.
5. Deploy serverless applications using Cloud Functions and Cloud Run.
6. Manage containerized applications using GKE.
7. Design GCP networking with VPC, Cloud CDN, and IAM.
8. Build CI/CD pipelines with Cloud Build.

## Theory

### 10.1 GCP Overview and Terminology

Google Cloud Platform (GCP) was launched in 2010 and is the third-largest cloud provider. GCP differentiates through leadership in data analytics (BigQuery), machine learning (Vertex AI), container-native infrastructure (GKE and Cloud Run), and network infrastructure leveraging Google's global fiber network. GCP operates in over 200 countries and territories with more than 140 edge points of presence.

**GCP vs AWS Terminology Mapping:**

| AWS | GCP | Description |
|-----|-----|-------------|
| EC2 | Compute Engine | Virtual compute instances |
| S3 | Cloud Storage | Object storage |
| EBS | Persistent Disk | Block storage |
| EFS | Filestore | Shared file storage |
| VPC | VPC (same name) | Isolated network |
| Security Group | Firewall Rules | Instance-level firewall |
| IAM | IAM (same name) | Identity and access |
| Lambda | Cloud Functions | Serverless compute |
| RDS | Cloud SQL | Managed relational databases |
| DynamoDB | Firestore / Bigtable | NoSQL databases |
| Redshift | BigQuery | Data warehousing |
| CloudWatch | Cloud Monitoring | Monitoring and logging |
| CloudTrail | Cloud Audit Logs | Audit logging |
| KMS | Cloud KMS | Key management |
| Route 53 | Cloud DNS | DNS services |
| CloudFront | Cloud CDN | Content delivery network |
| ECS/EKS | GKE | Container orchestration |
| SQS | Pub/Sub | Message queuing |
| Lambda + API GW | Cloud Run | Serverless containers |

### 10.2 Compute Engine

Compute Engine provides virtual machine instances running on Google's infrastructure. Instances boot quickly, come with consistent performance, and support a wide range of operating systems and machine types.

**Machine Families.** General-purpose (E2, N2, N2D, N1) for balanced CPU/memory workloads: web servers, application servers, small databases. Compute-optimized (C2, C2D, C3) for compute-intensive workloads: gaming, HPC, batch processing. Memory-optimized (M1, M2, M3) for memory-intensive workloads: SAP HANA, large in-memory databases. Accelerator-optimized (A2, G2) with GPUs for ML, rendering, and scientific computing.

**Predefined vs Custom Machine Types.** Predefined machine types provide standard combinations of vCPU and memory. Custom machine types allow specifying exact vCPU (1-96) and memory (up to 6.5 GB per vCPU), enabling cost optimization for workloads with non-standard resource requirements.

**Pricing Models.** Sustained use discounts apply automatically for instances running more than 25% of a month (up to 30% discount). Committed use discounts provide up to 70% discount for one-year or three-year commitments. Preemptible VMs are short-lived (up to 24 hours), offering up to 80% discount with no SLA. Spot VMs are the evolution of preemptible VMs with no maximum runtime.

**Images.** GCP provides public images for major operating systems: Ubuntu, Debian, CentOS, Rocky Linux, RHEL, SUSE, Windows Server. Custom images can be created from instances or imported. Shielded VMs provide UEFI firmware, Secure Boot, and vTPM for enhanced security.

**Instance Groups.** Managed instance groups (MIGs) provide auto-scaling, auto-healing, rolling updates, and multi-zone deployment for groups of identical instances. MIGs are the equivalent of AWS Auto Scaling Groups.

### 10.3 Cloud Storage

Cloud Storage is GCP's object storage service, comparable to S3. Data is stored in buckets with globally unique names. Cloud Storage provides 11 nines durability and gzip compression on the fly.

**Storage Classes.** Standard: for frequently accessed data. Nearline: for data accessed less than once every 30 days. Coldline: for data accessed less than once every 90 days. Archive: for data accessed less than once per year (coldest storage). Object lifecycle management automatically transitions objects between classes and deletes expired objects.

**Uniform vs Fine-Grained Access Control.** Uniform bucket-level access enforces IAM permissions at the bucket level only (recommended). Fine-grained access control uses ACLs at the object level (legacy approach).

**Object Versioning.** Cloud Storage versioning preserves all object versions, enabling rollback and recovery. Object holds keep-delete markers for indefinite retention. Lifecycle policies can manage old versions.

**Encryption.** Data is encrypted at rest by default (Google-managed keys). Customer-managed encryption keys (CMEK) via Cloud KMS provide key rotation and audit controls. Customer-supplied encryption keys (CSEK) allow the customer to provide the encryption key.

**Transfer Service.** Cloud Storage Transfer Service imports data from online sources (S3, HTTP servers) and supports scheduled transfers. Transfer Appliance ships physical storage devices for large-scale data migration.

### 10.4 Cloud SQL

Cloud SQL provides managed relational databases for MySQL, PostgreSQL, and SQL Server. Features include: automated backups, point-in-time recovery, read replicas, failover replicas for high availability, and automatic storage increase.

**Cloud SQL vs RDS.** Cloud SQL offers similar capabilities to RDS with some differences: includes automatic encryption by default, supports database flags (parameter groups), provides integrated Cloud IAM authentication, and offers 99.95% SLA for single zone, 99.99% for HA configuration.

**Cloud Spanner.** Cloud Spanner is a globally distributed, horizontally scalable relational database service offering strong consistency and SQL queries. Spanner combines the benefits of relational database structure with horizontal scalability. It is ideal for globally distributed applications requiring ACID transactions at scale.

### 10.5 BigQuery

BigQuery is Google's fully managed, serverless data warehouse. It enables petabyte-scale analytics using SQL queries without managing infrastructure. BigQuery separates compute from storage, allowing queries to scale to thousands of nodes.

**Datasets and Tables.** A dataset is a container organizing tables, views, and routines. Tables store data in a columnar format optimized for analytical queries. Tables can be native BigQuery tables, external tables (data in Cloud Storage, Drive, Cloud Bigtable), or views.

**Partitioning and Clustering.** Partitioning divides tables into segments based on a date, timestamp, or integer column. Partition pruning limits query scans to relevant partitions, reducing cost and improving performance. Clustering organizes data within partitions based on column values. Clustering improves filtering and aggregation performance for specific columns.

**Query Pricing.** On-demand pricing charges per byte processed ($5 per TB). Flat-rate pricing provides predictable costs for consistent workloads with slot reservations (2,000+ slots minimum). Cached query results are free if the underlying data has not changed.

**BigQuery ML.** BigQuery ML enables creating and executing machine learning models using SQL. Supported model types include linear regression, logistic regression, k-means clustering, matrix factorization, time series (ARIMA), and imported TensorFlow models. This brings ML capabilities directly to data analysts without requiring Python or dedicated ML infrastructure.

### 10.6 Cloud Functions

Cloud Functions is GCP's event-driven serverless compute service, comparable to Lambda. Functions in 2nd gen run on Cloud Run infrastructure, providing longer timeouts (up to 60 minutes) and more memory (up to 32 GB).

**Triggers.** HTTP triggers invoke functions via HTTP requests. Eventarc triggers invoke functions in response to events from Google services (Cloud Storage, Pub/Sub, Firestore, BigQuery). Cloud Scheduler triggers invoke functions on a schedule.

**Runtimes.** Node.js, Python, Go, Java, .NET Core, Ruby, and PHP are supported. Functions 2nd gen supports container-based deployments for custom runtimes.

### 10.7 Cloud Run

Cloud Run is a fully managed serverless container platform that abstracts infrastructure management. It executes containers on a serverless infrastructure, automatically scaling from zero based on traffic. Cloud Run is unique in that it accepts any container image, making it more flexible than Cloud Functions while maintaining serverless benefits.

**Key Features.** Automatic scaling from zero to thousands of instances. Pay-per-use billing (charged for CPU and memory during request processing). Built-in HTTPS, custom domains, and TLS certificates. Traffic splitting for canary deployments. VPC access for connecting to private resources. Concurrency controls for optimizing instance utilization.

**Cloud Run vs Cloud Functions.** Cloud Functions is optimized for event-driven, single-purpose functions. Cloud Run accepts any containerized application, making it suitable for full web applications, APIs, and background workers. Cloud Run supports any HTTP framework (Express, Flask, Django, FastAPI, Spring Boot).

### 10.8 Google Kubernetes Engine (GKE)

GKE is Google's managed Kubernetes service. Google is a founding contributor to Kubernetes, and GKE benefits from deep integration with Kubernetes upstream development. GKE offers: auto-pilot mode (fully managed node infrastructure), release channels (rapid, regular, stable), workload identity (fine-grained pod-level IAM), integrated Cloud Monitoring and logging, GKE Marketplace for third-party applications, and Config Connector for managing GCP resources through Kubernetes.

**Node Management.** GKE supports standard mode (user-managed node pools) and autopilot mode (fully managed nodes, pay per pod). Autopilot eliminates node management overhead at a premium. Node auto-repair detects and replaces unhealthy nodes. Node auto-upgrade applies security patches automatically. Cluster auto-scaler adjusts node pool size based on pending pods.

### 10.9 GCP IAM

GCP IAM provides unified access control for all GCP resources. The IAM policy consists of a role (collection of permissions) assigned to a principal (user, group, service account, or workspace identity) applied to a resource (organization, folder, project, or service).

**Roles.** Basic roles (Owner, Editor, Viewer) are legacy and grant broad permissions. Predefined roles are service-specific (compute.instanceAdmin, storage.objectViewer). Custom roles provide granular permission selection. AWS equivalents: basic roles resemble AWS managed policies; custom roles resemble AWS customer-managed policies.

**Service Accounts.** Service accounts are identities used by applications and workloads (equivalent to IAM roles in AWS). Each service account is both an identity and a resource. Workload Identity Federation allows non-GCP workloads to impersonate service accounts.

**Resource Hierarchy.** Organization (root node, related to G Suite or Cloud Identity) -> Folders (optional grouping) -> Projects (billing and isolation boundary) -> Resources (individual services). Policies are inherited downward through the hierarchy.

### 10.10 GCP Networking

**VPC.** GCP VPCs are global (span all regions), unlike AWS VPCs which are regional. This enables global communication without VPC peering overhead. Firewall rules filter traffic at instance level (similar to security groups) and are global. Shared VPC allows project-level resource organization within a common network.

**Cloud Load Balancing.** GCP offers a single anycast IP for global load balancing. Types: Global HTTP(S) load balancer (Layer 7, cross-region), global SSL proxy load balancer, global TCP proxy load balancer, regional internal/external load balancers.

**Cloud CDN.** Uses Google's global edge network for content caching and delivery. Integration with Cloud Load Balancing enables one-click CDN enablement.

**Cloud DNS.** Managed DNS service with 100% SLA. Supports DNSSEC, routing policies, and integration with Cloud Load Balancing.

**Cloud Interconnect.** Dedicated connectivity from on-premises to GCP: Dedicated Interconnect (10 Gbps or 100 Gbps), Partner Interconnect (50 Mbps to 50 Gbps), and VPN for encrypted connectivity.

### 10.11 Cloud Build

Cloud Build is a fully managed CI/CD service for building, testing, and deploying software. Build configurations are defined in YAML or JSON. Cloud Build integrates with Cloud Source Repositories, GitHub, and Bitbucket. Build steps execute in Docker containers. Deployments can target Compute Engine, GKE, Cloud Run, and Cloud Functions.

### 10.12 GCP Pricing and Free Tier

GCP offers a unique approach to pricing with sustained use discounts (automatic), committed use discounts (manual), and preemptible VMs. The free tier includes: Compute Engine (one f1-micro instance per month), Cloud Storage (5 GB per month), Cloud Functions (2 million invocations), Cloud Run (2 million requests), BigQuery (1 TB of queries per month), and Cloud Build (120 build-minutes per day). The GCP Pricing Calculator estimates monthly costs.

## Examples

### Example 10.1: Create a Compute Engine Instance

```bash
# Create a VM instance
gcloud compute instances create my-instance \
  --zone us-central1-a \
  --machine-type e2-medium \
  --image-family ubuntu-2204-lts \
  --image-project ubuntu-os-cloud \
  --boot-disk-size 50GB \
  --boot-disk-type pd-ssd \
  --tags http-server

# Create a firewall rule for HTTP
gcloud compute firewall-rules create allow-http \
  --allow tcp:80 \
  --target-tags http-server
```

### Example 10.2: Query BigQuery

```bash
# Query public dataset
bq query --use_legacy_sql=false '
  SELECT
    name, SUM(number) as total
  FROM
    `bigquery-public-data.usa_names.usa_1910_current`
  WHERE
    state = "CA"
  GROUP BY name
  ORDER BY total DESC
  LIMIT 10
'
```

### Example 10.3: Deploy to Cloud Run

```bash
# Build and deploy a containerized app
gcloud builds submit --tag gcr.io/my-project/my-app

gcloud run deploy my-app \
  --image gcr.io/my-project/my-app \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --concurrency 80
```

## Summary

GCP differentiates through global networking, data analytics leadership, and container-native services. Compute Engine provides VMs with custom machine types and sustained use discounts. Cloud Storage offers object storage with four classes and lifecycle management. Cloud SQL provides managed relational databases, while Cloud Spanner offers globally distributed relational storage. BigQuery delivers petabyte-scale analytics with SQL, partitioning, clustering, and built-in ML. Cloud Functions and Cloud Run offer serverless compute for event-driven and containerized workloads. GKE provides managed Kubernetes with autopilot mode. IAM uses a hierarchical resource model with inheritance. GCP VPCs are global, simplifying multi-region networking. The free tier and automatic sustained use discounts provide cost advantages for many workloads.

## Exercises

### Review Questions

1. Map five GCP services to their AWS equivalents.
2. How do GCP VPCs differ from AWS VPCs in scope?
3. Describe the four Cloud Storage classes and their use cases.
4. What is BigQuery and how does it achieve petabyte-scale analytics?
5. Compare Cloud Functions and Cloud Run for serverless deployments.
6. What is GKE Autopilot and how does it differ from standard mode?
7. Describe the GCP resource hierarchy (organization, folder, project, resource).
8. How does GCP IAM differ from AWS IAM in terms of policy structure?
9. What is Cloud Spanner and when should it be used instead of Cloud SQL?
10. Explain GCP sustained use discounts and how they are automatically applied.

### Application Problems

1. A data analytics team needs to query 50 TB of log data daily. The data is stored in Cloud Storage and accessed through SQL queries. Design a BigQuery architecture including partitioning and clustering strategies, query pricing approach (on-demand vs flat-rate), and estimated monthly costs.

2. A company runs containerized microservices on Compute Engine instances. They want to eliminate server management overhead while keeping container flexibility. Design a migration strategy to Cloud Run including considerations for state, database connections, VPC access, and traffic splitting for blue/green deployments.

3. A global gaming platform needs to serve users in 15 regions with ultra-low latency and strong database consistency for player transactions. Design a GCP architecture for the database and networking tiers.

4. An organization migrating from AWS to GCP needs to map their existing IAM roles and policies. Design an IAM strategy for GCP that replicates their AWS permissions structure using the GCP resource hierarchy and custom roles.

### Challenge Problem

Design a complete GCP architecture for a real-time analytics platform processing 100 TB of streaming data daily from 500,000 IoT devices. Requirements: IoT devices send metrics every 5 seconds, data must be ingested with sub-second latency, raw data is stored for 30 days before archiving, streaming aggregation computes real-time dashboards, batch processing generates daily and weekly reports, queryable via SQL with sub-10-second response times on 90-day data, machine learning models predict device failures from historical data, all components must be serverless or managed (no Compute Engine VMs for the main pipeline), and monthly cost must not exceed $50,000. Your design must include: data ingestion using Pub/Sub, stream processing architecture, storage design using Cloud Storage with lifecycle policies, BigQuery design for analytical queries (partitioning, clustering, slot allocation), Cloud Functions or Cloud Run for enrichment, ML prediction pipeline using BigQuery ML, networking and security (IAM, VPC, private access), monitoring using Cloud Monitoring and Logging, and detailed cost estimate.
