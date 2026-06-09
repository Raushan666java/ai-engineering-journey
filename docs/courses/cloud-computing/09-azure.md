# Chapter 9: Microsoft Azure Fundamentals

## Learning Objectives

After completing this chapter, students will be able to:

1. Map Azure service names to equivalent AWS services.
2. Deploy and manage Azure Virtual Machines.
3. Implement Azure Blob, Disk, and File storage.
4. Configure Azure SQL Database and Azure Functions.
5. Deploy applications using Azure Kubernetes Service (AKS).
6. Manage identity with Azure Active Directory (Entra ID).
7. Design Azure networking with VNet, load balancers, and Traffic Manager.
8. Navigate the Azure portal, CLI, and pricing calculator.

## Theory

### 9.1 Azure Overview and Terminology

Microsoft Azure, launched in 2010, is the second-largest cloud provider by market share. Azure differentiates through deep integration with Microsoft enterprise products (Active Directory, SQL Server, .NET, Visual Studio), strong hybrid cloud capabilities, and comprehensive support for Windows workloads. Azure operates in 60+ regions worldwide, more than any other cloud provider.

**Azure vs AWS Terminology Mapping:**

| AWS | Azure | Description |
|-----|-------|-------------|
| EC2 | Virtual Machines | Virtual compute instances |
| S3 | Blob Storage | Object storage |
| EBS | Managed Disks | Block storage for VMs |
| EFS | Azure Files | Shared file storage |
| VPC | Virtual Network (VNet) | Isolated network |
| Security Group | Network Security Group (NSG) | Instance-level firewall |
| IAM | Azure AD + RBAC | Identity and access |
| Lambda | Azure Functions | Serverless compute |
| RDS | Azure SQL Database / SQL Managed Instance | Managed relational databases |
| DynamoDB | Cosmos DB | NoSQL database |
| CloudWatch | Azure Monitor | Monitoring and logging |
| CloudTrail | Activity Log / Azure Monitor | Audit logging |
| KMS | Azure Key Vault | Key and secret management |
| Route 53 | Azure DNS / Traffic Manager | DNS and traffic routing |
| CloudFront | Azure CDN | Content delivery network |
| Direct Connect | ExpressRoute | Private dedicated connection |

### 9.2 Azure Virtual Machines

Azure VMs provide IaaS compute comparable to AWS EC2. VMs are organized into series optimized for different workloads: general purpose (B, D, F series), compute optimized (F series), memory optimized (E, M series), storage optimized (L series), and GPU (N series). Azure offers both Windows and Linux VM images through the Azure Marketplace.

**Availability Options.** Availability Sets distribute VMs across fault domains (physical hardware) and update domains (maintenance windows) within a data center. Availability Zones provide physical separation across multiple data centers within a region (similar to AWS AZs). Virtual Machine Scale Sets provide auto-scaling for VM groups, analogous to AWS Auto Scaling Groups.

**Managed Disks.** Azure Managed Disks are persistent block storage for VMs, comparable to EBS. Disk types include: Ultra Disk (highest performance, sub-millisecond latency), Premium SSD (consistent high performance for production workloads), Standard SSD (cost-effective for moderate IOPS), and Standard HDD (lowest cost for infrequent access). Disks support encryption at rest using Azure Storage Service Encryption (SSE) or Azure Disk Encryption (BitLocker for Windows, DM-Crypt for Linux).

**Pricing Models.** Pay-as-you-go: per-second billing with no upfront commitment. Reserved Instances: one-year or three-year commitment for up to 72% discount. Spot VMs: unused capacity at up to 90% discount, can be evicted with 30-second notice. Azure Hybrid Benefit: use existing Windows Server and SQL Server licenses in Azure for reduced costs.

### 9.3 Azure Storage

**Blob Storage (Object Storage).** Azure Blob Storage is the equivalent of S3. Blobs are stored in containers within storage accounts. Three blob types: Block blobs (text and binary data, up to 4.7 TB), Append blobs (optimized for append operations, ideal for logging), and Page blobs (random access, used for VM disks). Access tiers: Hot (frequent access), Cool (infrequent, 30+ days), Cold (rarely accessed, 90+ days), and Archive (backup, 180+ days, hours to retrieve). Blob Storage supports versioning, soft delete, lifecycle management, and static website hosting.

**Storage Account Types.** Standard general-purpose v2 accounts support blobs, files, queues, and tables. Premium block blob accounts for high throughput. Premium file shares for low-latency file storage. Premium page blob accounts for managed disks.

**Replication Options.** Locally redundant storage (LRS): three copies within a single data center. Zone-redundant storage (ZRS): three copies across availability zones. Geo-redundant storage (GRS): LRS in primary region plus LRS in secondary region. Read-access geo-redundant storage (RA-GRS): GRS with read access to secondary region. Geo-zone-redundant storage (GZRS): ZRS in primary region plus LRS in secondary region.

**Azure Files.** Managed SMB and NFS file shares that can be mounted concurrently by multiple VMs. Azure Files supports Active Directory integration for permission management. Azure File Sync enables caching Azure file shares on on-premises Windows Servers.

**Azure Disks.** (Covered under Managed Disks in 9.2.)

### 9.4 Azure SQL Database

Azure SQL Database is a fully managed relational database based on SQL Server. It provides automated patching, backups, and high availability. Key features include: built-in high availability (99.99% SLA), automated backups with point-in-time recovery (up to 35 days), geo-replication for disaster recovery, elastic pools for sharing resources across multiple databases, and serverless compute for intermittent workloads.

**Deployment Options.** Single Database: a single database with dedicated resources, equivalent to an RDS instance. Elastic Pool: a pool of databases sharing resources, cost-effective for databases with variable usage. SQL Managed Instance: near 100% compatibility with on-premises SQL Server, including SQL Server Agent and cross-database queries.

**Azure Cosmos DB.** Cosmos DB is Azure's globally distributed, multi-model NoSQL database, comparable to DynamoDB. It supports multiple APIs: SQL, MongoDB, Cassandra, Gremlin (graph), and Table. Cosmos DB provides single-digit-millisecond latency at the 99th percentile, automatic indexing, and five consistency levels (strong, bounded staleness, session, consistent prefix, eventual).

### 9.5 Azure Functions

Azure Functions is the serverless compute service, comparable to Lambda. Functions can be triggered by HTTP requests, timers, queue messages, blob events, event hub messages, and Cosmos DB changes. Functions support multiple languages: C#, JavaScript/TypeScript, Python, Java, Go, and PowerShell.

**Plans.** Consumption plan: auto-scaling, pay-per-execution (similar to Lambda). Premium plan: pre-warmed instances, no cold starts, unlimited execution duration, VNet connectivity. Dedicated plan: runs on App Service plan VMs, predictable pricing for long-running workloads.

**Durable Functions.** Durable Functions is an extension for orchestrating stateful workflows, comparable to Step Functions. Patterns include function chaining, fan-out/fan-in, human interaction (approvals), and monitor (asynchronous polling).

### 9.6 Azure DevOps

Azure DevOps provides developer services for building, testing, and deploying applications. It includes: Azure Repos (Git repositories), Azure Pipelines (CI/CD), Azure Boards (work tracking), Azure Test Plans (testing), and Azure Artifacts (package management). Azure Pipelines supports multi-platform builds (Windows, Linux, macOS) and deployment to any cloud. It integrates with GitHub, Docker, Kubernetes, and most cloud providers.

### 9.7 Azure Kubernetes Service (AKS)

AKS is a managed Kubernetes service, comparable to EKS. AKS simplifies Kubernetes cluster deployment by managing the control plane (API server, etcd) and offering automated upgrades, scaling, and security patching. AKS supports: virtual nodes (serverless Kubernetes pods using ACI), cluster auto-scaler, Azure AD integration for authentication, managed identity for pod access to Azure resources, Azure Policy for governance, and Istio and Open Service Mesh for service mesh.

### 9.8 Azure Active Directory (Entra ID)

Microsoft Entra ID (formerly Azure Active Directory) is Microsoft's cloud-based identity and access management service. It provides: single sign-on (SSO) to thousands of SaaS applications, multi-factor authentication (MFA), conditional access policies, identity protection for detecting compromised identities, and privileged identity management (PIM) for just-in-time administrative access.

**Azure RBAC.** Azure Role-Based Access Control is similar to AWS IAM. Roles are defined at three levels: management plane (subscription, resource group, resource), data plane (access to data within a resource), and Azure AD (identity operations). Built-in roles include Owner, Contributor, Reader, and User Access Administrator. Custom roles can be defined with specific permissions.

### 9.9 Azure Networking

**Virtual Network (VNet).** VNet is the Azure equivalent of VPC, providing isolation and segmentation. Subnets divide the VNet address space. Each subnet can have a Network Security Group (NSG) for filtering traffic.

**Azure Load Balancer.** Layer 4 load balancer distributing traffic to VMs within a region. Supports inbound and outbound scenarios, health probes, and port forwarding.

**Application Gateway.** Layer 7 load balancer with HTTP/HTTPS support, SSL termination, URL path-based routing, web application firewall (WAF), and session affinity. Comparable to ALB.

**Azure Traffic Manager.** DNS-based traffic routing globally across regions (comparable to Route 53 latency routing). Supports six routing methods: priority, weighted, performance, geographic, multi-value, and subnet.

**Azure Front Door.** Global Layer 7 load balancer and CDN, combining Application Gateway features with global routing. Comparable to CloudFront with advanced routing.

**Azure Firewall.** Managed cloud-based network security service protecting VNet resources. Stateful firewall with built-in high availability and auto-scaling.

**ExpressRoute.** Dedicated private connection from on-premises data centers to Azure (comparable to Direct Connect). Options: 50 Mbps to 100 Gbps.

**VPN Gateway.** Site-to-site and point-to-site VPN connectivity, supporting both policy-based and route-based VPNs.

### 9.10 Azure Pricing and Portal

**Azure Portal.** The web-based management console (portal.azure.com) provides visual management of Azure resources. Dashboards, resource groups, and the Marketplace are accessible from the portal.

**Azure CLI.** The cross-platform command-line tool (az) provides scriptable resource management. Azure PowerShell is also available for Windows-focused management.

**Pricing Calculator.** The Azure Pricing Calculator (azure.microsoft.com/pricing/calculator) estimates monthly costs. Azure TCO Calculator compares on-premises vs Azure costs. Azure Cost Management provides ongoing visibility into spending.

**Azure Subscriptions.** Subscriptions are billing containers. Management groups organize subscriptions into hierarchies for policy and compliance management. Resource groups organize resources within a subscription.

**Azure Blueprints.** Blueprints define a repeatable set of Azure resources and policies for deploying compliant environments (comparable to AWS CloudFormation with service control policies).

## Examples

### Example 9.1: Create a VM with Azure CLI

```bash
# Create a resource group
az group create --name myResourceGroup --location eastus

# Create a VM
az vm create \
  --resource-group myResourceGroup \
  --name myVM \
  --image UbuntuLTS \
  --admin-username azureuser \
  --generate-ssh-keys \
  --size Standard_D2s_v3

# Open port 80
az vm open-port --port 80 --resource-group myResourceGroup --name myVM
```

### Example 9.2: Deploy an Azure Function

```bash
# Create a storage account
az storage account create \
  --name mystorageaccount \
  --location eastus \
  --resource-group myResourceGroup \
  --sku Standard_LRS

# Create a function app
az functionapp create \
  --resource-group myResourceGroup \
  --consumption-plan-location eastus \
  --runtime python \
  --runtime-version 3.9 \
  --functions-version 4 \
  --name myfunctionapp \
  --storage-account mystorageaccount \
  --os-type Linux
```

### Example 9.3: Create an AKS Cluster

```bash
# Create an AKS cluster
az aks create \
  --resource-group myResourceGroup \
  --name myAKSCluster \
  --node-count 3 \
  --enable-addons monitoring \
  --generate-ssh-keys

# Get credentials
az aks get-credentials --resource-group myResourceGroup --name myAKSCluster

# Verify cluster access
kubectl get nodes
```

## Summary

Azure provides comprehensive cloud services comparable to AWS with unique strengths in enterprise integration. Azure VMs offer various pricing models including Hybrid Benefit for existing Microsoft licenses. Blob Storage provides object storage with tiers, replication options, and lifecycle management. Azure Files offers managed SMB shares with AD integration. Azure SQL Database provides managed SQL Server databases with elastic pools and geo-replication. Azure Functions delivers serverless computing with durable function orchestration. AKS provides managed Kubernetes with Azure AD integration. Microsoft Entra ID offers identity and access management with conditional access and PIM. Azure networking includes VNet, load balancers, Application Gateway, and ExpressRoute. The Azure portal, CLI, and pricing calculator provide management and cost visibility.

## Exercises

### Review Questions

1. Map five Azure services to their AWS equivalents.
2. What are availability sets and how do they differ from availability zones in Azure?
3. Describe the four Azure Blob Storage access tiers and their use cases.
4. How does Azure SQL Database Elastic Pool differ from a single database?
5. Compare the Azure Functions Consumption plan, Premium plan, and Dedicated plan.
6. What is Azure Kubernetes Service and how is it managed?
7. Describe the key features of Microsoft Entra ID for identity management.
8. How does Azure Front Door differ from Traffic Manager?
9. What is ExpressRoute and how does it compare to VPN Gateway?
10. Explain Azure RBAC and how it relates to Azure AD roles.

### Application Problems

1. A .NET application using SQL Server must be migrated to Azure. The database requires 99.99% availability and the application includes SQL Server Agent jobs. Recommend the appropriate Azure SQL deployment option and justify your choice.

2. A global e-commerce company needs to distribute traffic to web applications running in Azure regions in North America, Europe, and Asia. Design a global traffic management architecture using Azure Front Door or Traffic Manager, including routing policy selection and health monitoring.

3. An enterprise application requires VMs with 200,000 IOPS for a high-performance database. Design the storage architecture using Azure Managed Disks, including disk type selection, striping configuration, and caching settings.

4. A SaaS company uses Azure Functions for event processing. During peak hours, cold starts cause unacceptable latency for customer-facing endpoints. Design a strategy to eliminate cold starts using the right Azure Functions plan and configuration.

### Challenge Problem

Design a complete Azure architecture for a financial services application migrating from on-premises infrastructure. Requirements: 50 virtual machines (mixed Windows and Linux) running custom .NET applications and SQL Server databases, with a mix of production, staging, and development environments. The architecture must include: virtual network with segmentation across environments, hybrid connectivity to the on-premises network via ExpressRoute, high availability for production databases across regions, monitoring and alerting for all resources, cost management with reserved instances for baseline capacity, role-based access control across 5 teams, backup and disaster recovery with a 1-hour RPO and 4-hour RTO, CI/CD pipeline for application deployments, and integration with on-premises Active Directory for authentication. Provide your design with specific Azure service selections, network architecture, and estimated monthly costs using the Azure Pricing Calculator.
