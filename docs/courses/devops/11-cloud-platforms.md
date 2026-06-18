# Chapter 11: Cloud Platforms

## Learning Objectives

By the end of this chapter, students will be able to:

1. Describe the core compute, storage, networking, and identity services of AWS, Azure, and GCP
2. Compare cloud providers across service models, pricing, and capabilities
3. Design multi-cloud and hybrid cloud architectures
4. Apply FinOps principles for cloud cost optimization
5. Configure auto-scaling, reserved instances, and spot instances for cost efficiency

## Theory

![DevSecOps, Cloud Platforms, SRE and Networking](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/devops/ch07-security-cloud-sre-net.png)

### 11.1 Amazon Web Services (AWS)

AWS is the largest and most mature public cloud provider, offering over 200 services.

**Compute**:
- **EC2 (Elastic Compute Cloud)** â€” Virtual machines in the cloud. Instance types optimized for general purpose (t3, m6i), compute (c6i), memory (r6i), storage (i3), and GPU (p4). Supports spot instances, reserved instances, and dedicated hosts.
- **Lambda** â€” Serverless function execution. Supports Node.js, Python, Java, Go, Ruby, .NET, and custom runtimes. Scales automatically. Billed per invocation and execution duration.
- **ECS (Elastic Container Service)** â€” Docker container orchestration. Supports Fargate (serverless) and EC2 launch types.
- **EKS (Elastic Kubernetes Service)** â€” Managed Kubernetes control plane. Automates control plane upgrades, integrates with AWS IAM.

**Storage**:
- **S3 (Simple Storage Service)** â€” Object storage with 99.999999999% durability. Storage classes: Standard, Infrequent Access, Glacier (archive), Deep Archive.
- **EBS (Elastic Block Store)** â€” Block storage for EC2 instances. Types: gp3 (general purpose), io2 (provisioned IOPS), st1 (throughput), sc1 (cold).
- **RDS (Relational Database Service)** â€” Managed databases: MySQL, PostgreSQL, Oracle, SQL Server, MariaDB, Aurora.

**Networking**:
- **VPC (Virtual Private Cloud)** â€” Isolated network environment. Subnets, route tables, internet gateways, NAT gateways, security groups, network ACLs.
- **CloudFront** â€” CDN with global edge locations.
- **Route 53** â€” DNS service with routing policies.

**IAM (Identity and Access Management)** â€” Fine-grained access control with users, groups, roles, policies, and identity federation.

### 11.2 Microsoft Azure

Azure is the second-largest cloud provider with deep enterprise and Microsoft ecosystem integration.

**Compute**:
- **Virtual Machines** â€” Windows and Linux VMs with flexible sizing. Availability sets and availability zones for high availability.
- **Azure Functions** â€” Serverless compute supporting C#, JavaScript, Python, Java, PowerShell.
- **AKS (Azure Kubernetes Service)** â€” Managed Kubernetes with Azure Active Directory integration.
- **App Service** â€” Managed platform for web applications and APIs.

**Storage**:
- **Blob Storage** â€” Object storage with hot, cool, and archive tiers.
- **Azure SQL Database** â€” Managed SQL Server with built-in high availability and intelligent performance.
- **Cosmos DB** â€” Globally distributed NoSQL database with multiple consistency models.

**Networking**:
- **Virtual Network (VNet)** â€” Network isolation with subnets, peering, VPN gateways.
- **Azure DNS** â€” Domain hosting and resolution.
- **Azure Front Door** â€” Global load balancing and CDN.

**Identity**:
- **Microsoft Entra ID (formerly Azure AD)** â€” Identity and access management with SSO, MFA, conditional access.

### 11.3 Google Cloud Platform (GCP)

GCP excels in data analytics, machine learning, and container-native services.

**Compute**:
- **Compute Engine** â€” Virtual machines with live migration, custom machine types, sustained-use discounts.
- **Cloud Functions** â€” Serverless functions (Node.js, Python, Go, Java, .NET, Ruby, PHP).
- **GKE (Google Kubernetes Engine)** â€” Managed Kubernetes with Autopilot mode, integrated Cloud NAT, and workload identity.
- **Cloud Run** â€” Serverless container execution. Runs any containerized application.

**Storage**:
- **Cloud Storage** â€” Object storage with standard, nearline, coldline, and archive classes.
- **Cloud SQL** â€” Managed MySQL, PostgreSQL, SQL Server.
- **Cloud Spanner** â€” Horizontally scalable relational database with strong consistency.

**Networking**:
- **VPC** â€” Global virtual network with subnets, firewall rules, Cloud NAT.
- **Cloud CDN** â€” Content delivery with global edge caching.
- **Cloud DNS** â€” Managed DNS service.

### 11.4 Cloud Provider Comparison

| Aspect | AWS | Azure | GCP |
|--------|-----|-------|-----|
| Market share | Largest | Second | Third |
| Services count | 200+ | 200+ | 120+ |
| Global regions | 30+ | 60+ | 35+ |
| Kubernetes | EKS | AKS | GKE |
| Serverless functions | Lambda | Functions | Cloud Functions |
| Serverless containers | Fargate | Container Instances | Cloud Run |
| Managed K8s cost | Control plane billed | Control plane free | Control plane free (Autopilot has fee) |
| Networking | VPC | VNet | VPC (global) |
| Identity | IAM | Entra ID (Azure AD) | Cloud IAM |
| AI/ML | SageMaker | Azure AI | Vertex AI |

### 11.5 Multi-Cloud and Hybrid Cloud

**Multi-Cloud** â€” Using multiple cloud providers to avoid vendor lock-in, optimize costs, leverage best-of-breed services, or meet regulatory requirements. Challenges include: increased operational complexity, data transfer costs, inconsistent security models, and skill requirements across platforms.

**Hybrid Cloud** â€” Connecting on-premises infrastructure with cloud resources. Use cases include: legacy application migration, data residency compliance, burst capacity, and disaster recovery. AWS Outposts, Azure Arc, and Google Anthos provide hybrid management.

### 11.6 Cloud Cost Optimization (FinOps)

FinOps is the practice of managing cloud costs through cultural change, financial accountability, and engineering excellence.

**Key Practices**:
- **Right-sizing** â€” Match instance types to workload requirements. Use tools like AWS Compute Optimizer, Azure Advisor, GCP Rightsizing Recommendations.
- **Reserved Instances and Savings Plans** â€” Commit to 1-year or 3-year terms for 30-60% discount over on-demand pricing.
- **Spot Instances** â€” Use spare compute capacity at 60-90% discount. Suitable for fault-tolerant, interruptible workloads (batch processing, CI/CD, stateless web servers).
- **Auto-scaling** â€” Scale resources to match demand. Scale down during low-traffic periods.
- **Storage Lifecycle Policies** â€” Move data to cheaper storage tiers as it ages.
- **Tagging and Cost Allocation** â€” Tag resources by team, project, environment. Track spending with cost allocation reports.
- **Budget Alerts** â€” Configure budgets with alert thresholds. Automate responses (e.g., shut down development instances overnight).

### 11.7 Auto-Scaling Strategies

Auto-scaling adjusts compute resources dynamically based on demand:

- **Horizontal Scaling** â€” Add/remove instances. Preferred for stateless applications.
- **Vertical Scaling** â€” Increase/decrease instance size. Limited by maximum instance size.
- **Predictive Scaling** â€” ML-based scaling based on historical patterns.
- **Scheduled Scaling** â€” Scale based on known traffic patterns (e.g., scale up at 8 AM, scale down at 8 PM).

## Summary

Each major cloud provider offers comprehensive compute, storage, networking, and identity services. AWS provides the broadest service catalog and most mature ecosystem. Azure excels in enterprise integration and Microsoft ecosystem. GCP leads in data analytics, ML, and container-native services. Multi-cloud and hybrid cloud strategies address specific business needs but add complexity. FinOps practices optimize cloud costs through right-sizing, reservation models, spot instances, and budget governance. Auto-scaling ensures cost-efficient capacity management.

## Exercises

### Review Questions

1. Compare EC2, Lambda, and ECS in terms of management overhead, scaling characteristics, and billing model.
2. How does GCP's global VPC differ from AWS's regional VPC model?
3. What are the primary cost drivers in cloud computing? How does FinOps address each?
4. Under what circumstances would you choose multi-cloud over single-cloud architecture?
5. Compare spot instances across AWS, Azure, and GCP. What workloads are suitable for each?

### Application Problems

1. Create an AWS architecture diagram for a three-tier web application (web, API, database) using VPC, ALB, EC2 auto-scaling group, RDS Multi-AZ, ElastiCache, and S3 for static assets. Justify each service choice.
2. Calculate the cost comparison for a workload running 24/7: on-demand vs 1-year reserved vs 3-year reserved vs spot instances. Use public pricing for AWS m6i.large or equivalent in another provider.
3. Set up budget alerts on a cloud provider. Create a tagging strategy that allocates costs by project, environment (dev/staging/prod), and team. Demonstrate cost breakdown reports.

### Challenge Problem

Design a multi-cloud architecture for a global SaaS platform with the following requirements: primary workload on AWS for compute, secondary on GCP for data analytics, disaster recovery across providers, data residency compliance (EU data stays in EU, US data stays in US), global CDN for static assets, managed Kubernetes for container orchestration, and a monthly cloud budget not exceeding $50,000. Define the architecture, provider service mapping, networking topology (VPC peering, VPN, Direct Interconnect), data replication strategy, cost allocation model, and governance policies. Include estimated cost breakdown per provider per service category.
