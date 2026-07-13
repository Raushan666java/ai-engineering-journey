# Chapter 11: Cloud Platforms

> **Previous:** [SRE and Monitoring](./10-monitoring.md) | **Next:** [Monitoring and Logging](./12-monitoring-logging.md)

## Learning Objectives

By the end of this chapter, students will be able to:

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/devops/11-cloud-platforms/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/devops/11-cloud-platforms/hero.svg" alt="Chapter Banner: Chapter 11: Cloud Platforms" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/devops/11-cloud-platforms/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/devops/11-cloud-platforms/handwritten-notes.svg" alt="Handwritten Notes: Chapter 11: Cloud Platforms" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/devops/11-cloud-platforms/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/devops/11-cloud-platforms/sticky-notes.svg" alt="Sticky Notes: Chapter 11: Cloud Platforms" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/devops/11-cloud-platforms/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/devops/11-cloud-platforms/visual-explanation.svg" alt="Visual Explanation: Chapter 11: Cloud Platforms" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/devops/11-cloud-platforms/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/devops/11-cloud-platforms/architecture.svg" alt="Architecture: Chapter 11: Cloud Platforms" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/devops/11-cloud-platforms/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/devops/11-cloud-platforms/workflow.svg" alt="Workflow: Chapter 11: Cloud Platforms" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/devops/11-cloud-platforms/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/devops/11-cloud-platforms/mindmap.svg" alt="Mind Map: Chapter 11: Cloud Platforms" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/devops/11-cloud-platforms/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/devops/11-cloud-platforms/comparison.svg" alt="Comparison: Chapter 11: Cloud Platforms" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/devops/11-cloud-platforms/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/devops/11-cloud-platforms/cheatsheet.svg" alt="Cheat Sheet: Chapter 11: Cloud Platforms" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/devops/11-cloud-platforms/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/devops/11-cloud-platforms/interview-quiz.svg" alt="Quiz Card: Chapter 11: Cloud Platforms" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/devops/11-cloud-platforms/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/devops/11-cloud-platforms/social-card.svg" alt="Social Card: Chapter 11: Cloud Platforms" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->


1. Describe the core compute, storage, networking, and identity services of AWS, Azure, and GCP
2. Compare cloud providers across service models, pricing, and capabilities
3. Design multi-cloud and hybrid cloud architectures
4. Apply FinOps principles for cloud cost optimization
5. Configure auto-scaling, reserved instances, and spot instances for cost efficiency
6. Implement cloud governance with tagging, budgets, and compliance controls

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| AWS | 200+ services, largest market share, broadest catalog | Best for comprehensive cloud strategy |
| Azure | Deep enterprise integration with Microsoft ecosystem | Best for Microsoft-centric organizations |
| GCP | Data analytics, ML, and container-native services | Best for data-driven and container-first orgs |
| Multi-Cloud | Using multiple providers to avoid lock-in | Adds complexity; use only when necessary |
| FinOps | Cloud cost optimization through accountability | Tag resources, right-size, use reserved instances |
| Cloud Governance | Policies, compliance, and cost controls | Automate with policy-as-code and budget alerts |
| Auto-Scaling | Dynamic resource adjustment | Scale horizontally for stateless workloads |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Cloud Providers] --> B[AWS]
    A --> C[Azure]
    A --> D[GCP]
    B & C & D --> E[Comparison]
    E --> F[Multi-Cloud]
    E --> G[Hybrid Cloud]
    F & G --> H[Cloud Governance]
    H --> I[FinOps]
    I --> J[Auto-Scaling]
    J --> K[Cost Optimization]
```

## Theory

### 11.1 Amazon Web Services (AWS)


AWS is the largest and most mature public cloud provider, offering over 200 services across 30+ global regions.

**Compute:**
- **EC2 (Elastic Compute Cloud)** — Virtual machines optimized for general purpose (t3, m6i), compute (c6i), memory (r6i), storage (i3), and GPU (p4). Supports spot instances (60-90% discount), reserved instances (up to 72% discount), and dedicated hosts.
- **Lambda** — Serverless function execution supporting Node.js, Python, Java, Go, Ruby, .NET, and custom runtimes. Scales automatically. Billed per invocation and duration (rounded to 1ms).
- **ECS (Elastic Container Service)** — Docker container orchestration with Fargate (serverless) and EC2 launch types.
- **EKS (Elastic Kubernetes Service)** — Managed Kubernetes control plane with automated upgrades and IAM integration.

**Storage:**
- **S3 (Simple Storage Service)** — Object storage with 99.999999999% durability. Storage classes: Standard, Intelligent-Tiering, Infrequent Access, Glacier, Deep Archive. Lifecycle policies automate tier transitions.
- **EBS (Elastic Block Store)** — Block storage with gp3 (general purpose), io2 (provisioned IOPS up to 256K), st1 (throughput), sc1 (cold). Snapshots are incremental and stored in S3.
- **RDS (Relational Database Service)** — Managed MySQL, PostgreSQL, Oracle, SQL Server, MariaDB, Aurora. Multi-AZ for high availability, Read Replicas for read scaling.

**Networking:**
- **VPC (Virtual Private Cloud)** — Isolated network environment with subnets, route tables, internet/NAT gateways, security groups, network ACLs, VPC peering, Transit Gateway.
- **CloudFront** — CDN with 400+ edge locations. Supports Lambda@Edge for custom logic at the edge.
- **Route 53** — DNS with routing policies: simple, weighted, latency-based, geolocation, geonear, failover, multi-value.

**IAM (Identity and Access Management)** — Fine-grained access control with users, groups, roles, policies, and identity federation. Supports SCIM, SAML 2.0, and OIDC. IAM Roles Anywhere for on-premises workloads.

### 11.2 Microsoft Azure


Azure is the second-largest cloud provider with deep enterprise and Microsoft ecosystem integration across 60+ regions.

**Compute:**
- **Virtual Machines** — Windows and Linux VMs with flexible sizing. Availability sets (99.95% SLA) and availability zones (99.99% SLA) for high availability. Supports spot VMs and reserved instances.
- **Azure Functions** — Serverless compute supporting C#, JavaScript, Python, Java, PowerShell. Consumption, Premium, and Dedicated plans.
- **AKS (Azure Kubernetes Service)** — Managed Kubernetes with Azure AD integration, managed identity, and Azure Policy for governance.
- **App Service** — Managed platform for web apps and APIs. Supports Windows and Linux, auto-scale, staging slots, and integrated CI/CD.

**Storage:**
- **Blob Storage** — Object storage with hot, cool, cold, and archive tiers. Supports lifecycle management and immutable storage for compliance.
- **Azure SQL Database** — Managed SQL Server with built-in HA, auto-tuning, serverless compute, and geo-replication.
- **Cosmos DB** — Globally distributed NoSQL database with turnkey distribution, multi-master, and five consistency models (strong, bounded staleness, session, consistent prefix, eventual).

**Networking:**
- **Virtual Network (VNet)** — Network isolation with subnets, peering, VPN gateways, ExpressRoute for dedicated private connections.
- **Azure DNS** — Domain hosting with 100% SLA.
- **Azure Front Door** — Global load balancing and CDN with WAF, SSL termination, and URL-based routing.

**Identity:**
- **Microsoft Entra ID (formerly Azure AD)** — Identity and access management with SSO, MFA, conditional access, identity protection, and privileged identity management (PIM).

### 11.3 Google Cloud Platform (GCP)


GCP excels in data analytics, machine learning, and container-native services across 35+ global regions.

**Compute:**
- **Compute Engine** — Virtual machines with live migration, custom machine types, sustained-use discounts (automatic 30% for full month), and committed use discounts (up to 57% for 1-3 year commitments).
- **Cloud Functions** — Serverless functions (Node.js, Python, Go, Java, .NET, Ruby, PHP). 1st gen and 2nd gen (Cloud Run-based).
- **GKE (Google Kubernetes Engine)** — Managed Kubernetes with Autopilot mode (serverless), integrated Cloud NAT, workload identity, and GKE Sandbox for extra isolation.
- **Cloud Run** — Serverless container execution. Runs any containerized application with automatic scale-to-zero. Billed per 100ms of CPU and memory usage.

**Storage:**
- **Cloud Storage** — Object storage with standard, nearline, coldline, and archive classes. Uniform and fine-grained access control through IAM and ACLs. Object lifecycle management.
- **Cloud SQL** — Managed MySQL, PostgreSQL, SQL Server with automatic replication, backups, and failover.
- **Cloud Spanner** — Horizontally scalable relational database with strong consistency and 99.999% SLA. Supports SQL queries and transactions.

**Networking:**
- **VPC** — Global virtual network (not regional like AWS). Subnets, firewall rules, Cloud NAT, Cloud VPN, Dedicated Interconnect.
- **Cloud CDN** — Content delivery with global edge caching using Google's global fiber network.
- **Cloud DNS** — Managed DNS with 100% SLA.

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
| Networking | VPC (regional) | VNet (regional) | VPC (global) |
| Identity | IAM | Entra ID | Cloud IAM |
| AI/ML | SageMaker | Azure AI | Vertex AI |
| Global network | 400+ CloudFront PoPs | 160+ edge nodes | 140+ edge nodes (fastest fiber) |

### 11.5 Multi-Cloud and Hybrid Cloud


**Multi-Cloud** — Using multiple cloud providers to avoid vendor lock-in, optimize costs, leverage best-of-breed services, or meet regulatory requirements.

**Challenges:**
- Increased operational complexity and skill requirements
- Data transfer costs between providers (egress fees)
- Inconsistent security models and tooling
- Latency between services on different providers

**Hybrid Cloud** — Connecting on-premises infrastructure with cloud resources.

**Use cases:**
- Legacy application migration (lift-and-shift, re-platform)
- Data residency compliance (keep sensitive data on-premises)
- Burst capacity for peak workloads (cloud bursting)
- Disaster recovery (on-premises primary, cloud secondary)

**Hybrid management platforms:**
- **AWS Outposts** — AWS infrastructure on-premises
- **Azure Arc** — Manage multi-cloud and on-prem from Azure
- **Google Anthos** — Multi-cloud and on-prem Kubernetes management

### 11.6 Cloud Governance


Cloud governance ensures security, compliance, and cost control across cloud environments:

**Identity and Access Management:**
- Implement least-privilege access with IAM roles and policies
- Use identity federation with existing identity providers (Okta, Azure AD)
- Enable MFA for all human users
- Use temporary credentials (STS) for automation

**Policy as Code:**
- **AWS Service Control Policies (SCPs)** — Guardrails for accounts in AWS Organizations
- **Azure Policy** — Enforce compliance rules across subscriptions
- **GCP Organization Policies** — Constraints at the organization level

**Compliance Automation:**
- Automated compliance scanning (AWS Config, Azure Policy, GCP Security Command Center)
- Continuous monitoring with CIS benchmarks
- Automated remediation for common violations
- Audit logging with CloudTrail, Azure Monitor, Cloud Audit Logs

### 11.7 Cloud Cost Optimization (FinOps)


FinOps is the practice of managing cloud costs through cultural change, financial accountability, and engineering excellence.

**Key Practices:**
- **Right-sizing** — Match instance types to workload requirements. Use AWS Compute Optimizer, Azure Advisor, GCP Rightsizing Recommendations.
- **Reserved Instances and Savings Plans** — Commit to 1-year or 3-year terms for 30-72% discount over on-demand.
- **Spot Instances** — Use spare compute capacity at 60-90% discount. Suitable for fault-tolerant workloads.
- **Auto-scaling** — Scale resources to match demand. Scale down during low-traffic periods.
- **Storage Lifecycle Policies** — Move data to cheaper storage tiers as it ages (automate with lifecycle rules).
- **Tagging and Cost Allocation** — Tag resources by team, project, environment. Track spending with cost allocation reports.
- **Budget Alerts** — Configure budgets with alert thresholds at 50%, 80%, 90%, 100%.

### 11.8 Auto-Scaling Strategies


Auto-scaling adjusts compute resources dynamically based on demand:

- **Horizontal Scaling** — Add/remove instances. Preferred for stateless applications. Near-infinite scaling.
- **Vertical Scaling** — Increase/decrease instance size. Limited by maximum instance size. Requires restart.
- **Predictive Scaling** — ML-based scaling based on historical patterns. Available in AWS Predictive Scaling.
- **Scheduled Scaling** — Scale based on known traffic patterns (scale up at 8 AM, scale down at 8 PM).

**Auto-scaling configuration considerations:**
- Cooldown periods between scaling activities
- Warm-up time for new instances (affects aggressive scaling)
- Scale-in protection to prevent terminating instances with active connections
- Metrics selection (CPU, memory, request count, custom metrics)

### 11.9 Infrastructure as Code Across Clouds


Each cloud provider offers its own IaC tooling, but Pulumi and CDK enable a unified TypeScript experience:

```mermaid
flowchart LR
    subgraph "IaC Layer"
        A[Pulumi / CDK / Terraform]
    end
    subgraph "Cloud Providers"
        B[AWS]
        C[Azure]
        D[GCP]
    end
    A --> B
    A --> C
    A --> D
    E[TypeScript] --> A
```

**Terraform (multi-cloud):** HCL-based, works across all three providers with state management and module reuse.

**AWS CDK (TypeScript):** Define AWS infrastructure as TypeScript classes. Offers higher-level constructs (L2/L3) that reduce boilerplate.

**Pulumi (TypeScript):** Native TypeScript/JavaScript SDK. Works across AWS, Azure, GCP, and Kubernetes. Supports unit testing of infrastructure code.

**Cross-cloud patterns with TypeScript:**
- Use a unified `CloudProvider` interface to abstract resource creation
- Define environment-specific configuration via typed config objects
- Share types between infrastructure and application code
- Write infrastructure tests with Pulumi's `Policy as Code` or CDK's `assertions`

### 11.10 Serverless Comparison


| Aspect | AWS Lambda | Azure Functions | GCP Cloud Functions |
|--------|-----------|-----------------|-------------------|
| Max memory | 10,240 MB | 1,536 MB (Premium: 14 GB) | 32 GB (2nd gen) |
| Max timeout | 15 min | 10 min (Premium: 60 min) | 60 min (2nd gen) |
| Languages | Node, Python, Java, Go, Ruby, .NET | C#, JS, Python, Java, PowerShell | Node, Python, Go, Java, .NET, Ruby, PHP |
| Cold start | ~100-500ms | ~200-800ms | ~100-300ms |
| Concurrent exec | 1,000 (can increase) | Unlimited (Consumption) | 3,000 |
| Trigger sources | 15+ (S3, SQS, SNS, DynamoDB, etc.) | 20+ (Blob, Queue, Event Grid, etc.) | 10+ (Storage, Pub/Sub, Firestore, etc.) |
| Pricing | $0.20/1M requests + $0.0000166667/GB-s | $0.20/1M executions + $0.000016/GB-s | $0.40/1M invocations + $0.0000025/GB-s (1st gen) |

### 11.11 Cloud Migration Strategies


The **7 Rs of cloud migration** guide workload migration decisions:

| Strategy | Description | Tooling | Effort |
|----------|-------------|---------|--------|
| **Retire** | Decommission unused applications | Application portfolio analysis | Low |
| **Retain** | Keep on-premises for compliance/latency | Keep existing infrastructure | None |
| **Rehost** | Lift-and-shift, move as-is | AWS SMS, Azure Migrate, Migrate for Compute Engine | Low |
| **Relocate** | Move to cloud-native VMs | AWS Replication Agent, Azure Site Recovery | Low-Medium |
| **Replatform** | Move with minimal optimizations (e.g., to managed DB) | AWS DMS, Azure Database Migration Service | Medium |
| **Refactor** | Re-architect for cloud-native patterns | Strangler fig pattern, event-driven architecture | High |
| **Reimagine** | Rebuild using cloud-native services entirely | Serverless, managed services, SaaS | Very High |

**Migration assessment steps:**
1. Inventory all workloads and dependencies
2. Classify each workload into one of the 7 Rs
3. Assess data gravity and network bandwidth constraints
4. Plan migration waves with rollback criteria
5. Execute with automated testing at each wave

---

## Examples

### Example 1: Multi-Cloud Cost Comparison

```typescript
interface CloudPricing {
  provider: string;
  compute: { instance: string; hourly: number; monthly: number };
  storage: { tier: string; perGB: number };
  network: { egressPerGB: number };
  support: string;
}

class CostEstimator {
  estimateMonthly(pricing: CloudPricing, instances: number, storageGB: number, egressGB: number): string {
    const computeCost = pricing.compute.monthly * instances;
    const storageCost = pricing.storage.perGB * storageGB;
    const egressCost = pricing.network.egressPerGB * egressGB;
    const total = computeCost + storageCost + egressCost;

    return JSON.stringify({
      provider: pricing.provider,
      breakdown: { compute: computeCost, storage: storageCost, egress: egressCost },
      total: Math.round(total * 100) / 100,
      currency: 'USD',
    }, null, 2);
  }
}

const estimator = new CostEstimator();
const aws = {
  provider: 'AWS', compute: { instance: 'm6i.large', hourly: 0.096, monthly: 70.08 },
  storage: { perGB: 0.023 }, network: { egressPerGB: 0.09 }, support: 'Developer',
};
const azure = {
  provider: 'Azure', compute: { instance: 'D2s v3', hourly: 0.096, monthly: 70.08 },
  storage: { perGB: 0.0208 }, network: { egressPerGB: 0.087 }, support: 'Developer',
};
const gcp = {
  provider: 'GCP', compute: { instance: 'e2-standard-2', hourly: 0.067, monthly: 48.91 },
  storage: { perGB: 0.020 }, network: { egressPerGB: 0.12 }, support: 'Developer',
};

console.log(estimator.estimateMonthly(aws, 10, 500, 1000));
console.log(estimator.estimateMonthly(azure, 10, 500, 1000));
console.log(estimator.estimateMonthly(gcp, 10, 500, 1000));
```

### Example 2: Tagging Strategy and Cost Allocation

```typescript
interface Tag {
  key: string;
  value: string;
}

interface Resource {
  id: string;
  type: string;
  tags: Tag[];
  monthlyCost: number;
}

class CostAllocator {
  private resources: Resource[] = [];

  addResource(resource: Resource): void {
    this.resources.push(resource);
  }

  getCostByTag(tagKey: string): Record<string, number> {
    const costs: Record<string, number> = {};

    for (const resource of this.resources) {
      const tag = resource.tags.find(t => t.key === tagKey);
      const group = tag ? tag.value : 'untagged';
      costs[group] = (costs[group] || 0) + resource.monthlyCost;
    }

    return costs;
  }

  findUntaggedResources(): Resource[] {
    return this.resources.filter(r => r.tags.length === 0);
  }

  enforceTaggingPolicy(requiredTags: string[]): string[] {
    const violations: string[] = [];

    for (const resource of this.resources) {
      const resourceKeys = resource.tags.map(t => t.key);
      const missing = requiredTags.filter(k => !resourceKeys.includes(k));
      if (missing.length > 0) {
        violations.push(`${resource.id} missing tags: ${missing.join(', ')}`);
      }
    }

    return violations;
  }

  generateReport(): string {
    let report = '# Cloud Cost Allocation Report\n\n';
    report += '## Cost by Team\n';

    const byTeam = this.getCostByTag('team');
    for (const [team, cost] of Object.entries(byTeam)) {
      report += `- ${team}: $${cost.toFixed(2)}/month\n`;
    }

    report += '\n## Cost by Environment\n';
    const byEnv = this.getCostByTag('environment');
    for (const [env, cost] of Object.entries(byEnv)) {
      report += `- ${env}: $${cost.toFixed(2)}/month\n`;
    }

    report += '\n## Untagged Resources\n';
    const untagged = this.findUntaggedResources();
    report += untagged.length === 0 ? 'None\n' : untagged.map(r => `- ${r.id}\n`).join('');

    report += '\n## Policy Violations\n';
    const violations = this.enforceTaggingPolicy(['team', 'environment', 'project']);
    report += violations.length === 0 ? 'None\n' : violations.map(v => `- ${v}\n`).join('');

    return report;
  }
}

const allocator = new CostAllocator();
allocator.addResource({ id: 'ec2-web-01', type: 'EC2', tags: [{ key: 'team', value: 'frontend' }, { key: 'environment', value: 'production' }, { key: 'project', value: 'web-app' }], monthlyCost: 70.08 });
allocator.addResource({ id: 'rds-db-01', type: 'RDS', tags: [{ key: 'team', value: 'backend' }, { key: 'environment', value: 'production' }, { key: 'project', value: 'web-app' }], monthlyCost: 120.00 });
allocator.addResource({ id: 's3-data-01', type: 'S3', tags: [], monthlyCost: 15.50 });
allocator.addResource({ id: 'elb-prod', type: 'ELB', tags: [{ key: 'team', value: 'platform' }, { key: 'environment', value: 'production' }], monthlyCost: 22.30 });

console.log(allocator.generateReport());
```

### Example 3: Auto-Scaling Policy Simulator

```typescript
interface ScalingPolicy {
  metric: string;
  targetValue: number;
  minInstances: number;
  maxInstances: number;
  cooldownSeconds: number;
  scaleUpBy: number;
  scaleDownBy: number;
}

interface AutoScalerState {
  currentInstances: number;
  lastScalingAction: number; // timestamp
  metricValues: number[]; // recent metric values
}

class AutoScalerSimulator {
  private state: AutoScalerState;

  constructor(private policy: ScalingPolicy) {
    this.state = {
      currentInstances: policy.minInstances,
      lastScalingAction: Date.now(),
      metricValues: [],
    };
  }

  ingestMetric(value: number): string | null {
    this.state.metricValues.push(value);
    if (this.state.metricValues.length > 5) this.state.metricValues.shift();

    return this.evaluate();
  }

  private evaluate(): string | null {
    const now = Date.now();
    if (now - this.state.lastScalingAction < this.policy.cooldownSeconds * 1000) return null;

    const avg = this.state.metricValues.reduce((a, b) => a + b, 0) / this.state.metricValues.length;
    const { currentInstances } = this.state;
    const { targetValue, minInstances, maxInstances } = this.policy;

    if (avg > targetValue * 1.2 && currentInstances < maxInstances) {
      const newCount = Math.min(currentInstances + this.policy.scaleUpBy, maxInstances);
      this.state.currentInstances = newCount;
      this.state.lastScalingAction = now;
      return `SCALE_UP: ${currentInstances} ? ${newCount} (avg: ${avg.toFixed(1)} > ${targetValue})`;
    }

    if (avg < targetValue * 0.6 && currentInstances > minInstances) {
      const newCount = Math.max(currentInstances - this.policy.scaleDownBy, minInstances);
      this.state.currentInstances = newCount;
      this.state.lastScalingAction = now;
      return `SCALE_DOWN: ${currentInstances} ? ${newCount} (avg: ${avg.toFixed(1)} < ${targetValue})`;
    }

    return null;
  }

  simulate(metrics: number[]): string[] {
    const actions: string[] = [];
    for (const m of metrics) {
      const action = this.ingestMetric(m);
      if (action) actions.push(action);
    }
    return actions;
  }
}

const policy: ScalingPolicy = {
  metric: 'cpu', targetValue: 70, minInstances: 2, maxInstances: 10,
  cooldownSeconds: 120, scaleUpBy: 2, scaleDownBy: 1,
};

const simulator = new AutoScalerSimulator(policy);
const cpuMetrics = [45, 50, 55, 60, 75, 85, 90, 95, 30, 25, 20, 35, 40, 45, 50];
console.log('Auto-scaling decisions:', simulator.simulate(cpuMetrics));
```

---

## Concept Comparison Table

| Concept | Description |
|---------|-------------|
| AWS | Broadest service catalog, largest market share |
| Azure | Deep Microsoft integration, enterprise focus |
| GCP | Data/ML leadership, container-native, global network |
| Multi-Cloud | Multiple providers, complex operations |
| Hybrid Cloud | On-prem + cloud integration |
| FinOps | Right-size, Reserved/Spot, Auto-scale, Tagging |
| Cloud Governance | IAM, policies, compliance, budget controls |

## Quick Reference

| Topic | Key Points |
|-------|------------|
| AWS Services | EC2, Lambda, S3, RDS, EKS, IAM |
| Azure Services | VMs, Functions, Blob, SQL, AKS, Entra ID |
| GCP Services | Compute Engine, Functions, Storage, Cloud SQL, GKE |
| FinOps | Right-size, Reserved/Spot, Auto-scaling, Tagging |
| Comparison | 200+ services each, K8s (EKS/AKS/GKE) |
| Governance | SCPs, Azure Policy, Org Policies, Config rules |

## Cross-Application Matrix

| Domain | Application |
|--------|-------------|
| Web | Global CDN and web hosting |
| Cloud | Multi-cloud workload orchestration |
| Enterprise | Hybrid cloud with on-prem integration |
| ML | Vertex AI vs SageMaker for ML pipelines |

### Cloud Cost Calculator

Understanding cloud costs across providers is essential for budget management. The following tool compares pricing across AWS, Azure, and GCP for common resource types.

```typescript
interface ResourcePricing {
  provider: string;
  resourceType: string;
  hourlyRate: number;
  monthlyRate: number;
  region: string;
}

interface CostEstimate {
  resources: ResourcePricing[];
  totalMonthly: number;
  totalAnnual: number;
  recommendations: string[];
}

class CloudCostCalculator {
  private pricingCatalog: ResourcePricing[] = [
    { provider: 'AWS', resourceType: 't3.medium', hourlyRate: 0.0416, monthlyRate: 30.37, region: 'us-east-1' },
    { provider: 'Azure', resourceType: 'D2s_v3', hourlyRate: 0.0392, monthlyRate: 28.62, region: 'eastus' },
    { provider: 'GCP', resourceType: 'e2-standard-2', hourlyRate: 0.0365, monthlyRate: 26.65, region: 'us-central1' },
    { provider: 'AWS', resourceType: 't3.large', hourlyRate: 0.0832, monthlyRate: 60.74, region: 'us-east-1' },
    { provider: 'Azure', resourceType: 'D4s_v3', hourlyRate: 0.0784, monthlyRate: 57.23, region: 'eastus' },
    { provider: 'GCP', resourceType: 'e2-standard-4', hourlyRate: 0.0730, monthlyRate: 53.29, region: 'us-central1' },
    { provider: 'AWS', resourceType: 'm5.xlarge', hourlyRate: 0.192, monthlyRate: 140.16, region: 'us-east-1' },
    { provider: 'Azure', resourceType: 'D8s_v3', hourlyRate: 0.179, monthlyRate: 130.67, region: 'eastus' },
    { provider: 'GCP', resourceType: 'n2-standard-8', hourlyRate: 0.168, monthlyRate: 122.64, region: 'us-central1' },
  ];

  estimate(requirements: { vcpu: number; memoryGB: number; hoursPerMonth: number }): CostEstimate {
    const matched = this.pricingCatalog.filter(p => {
      const specs = this.parseSpecs(p.resourceType);
      return specs.vcpu >= requirements.vcpu && specs.memoryGB >= requirements.memoryGB;
    });

    const monthlyCosts = matched.map(r => ({
      ...r,
      actualMonthly: r.hourlyRate * requirements.hoursPerMonth,
    }));

    monthlyCosts.sort((a, b) => a.actualMonthly - b.actualMonthly);

    const cheapest = monthlyCosts[0];
    const recommendations: string[] = [];
    if (cheapest) {
      const mostExpensive = monthlyCosts[monthlyCosts.length - 1];
      const savings = mostExpensive.actualMonthly - cheapest.actualMonthly;
      recommendations.push(`Cheapest: ${cheapest.provider} ${cheapest.resourceType} at $${cheapest.actualMonthly.toFixed(2)}/mo`);
      if (savings > 0) recommendations.push(`Potential savings: $${savings.toFixed(2)}/mo by choosing ${cheapest.provider}`);
    }

    const totalMonthly = monthlyCosts.reduce((s, r) => s + r.actualMonthly, 0) / Math.max(monthlyCosts.length, 1);
    return {
      resources: monthlyCosts,
      totalMonthly: Math.round(totalMonthly * 100) / 100,
      totalAnnual: Math.round(totalMonthly * 12 * 100) / 100,
      recommendations,
    };
  }

  private parseSpecs(type: string): { vcpu: number; memoryGB: number } {
    const map: Record<string, { vcpu: number; memoryGB: number }> = {
      't3.medium': { vcpu: 2, memoryGB: 4 },
      'D2s_v3': { vcpu: 2, memoryGB: 8 },
      'e2-standard-2': { vcpu: 2, memoryGB: 8 },
      't3.large': { vcpu: 2, memoryGB: 8 },
      'D4s_v3': { vcpu: 4, memoryGB: 16 },
      'e2-standard-4': { vcpu: 4, memoryGB: 16 },
      'm5.xlarge': { vcpu: 4, memoryGB: 16 },
      'D8s_v3': { vcpu: 8, memoryGB: 32 },
      'n2-standard-8': { vcpu: 8, memoryGB: 32 },
    };
    return map[type] || { vcpu: 2, memoryGB: 4 };
  }
}

const calculator = new CloudCostCalculator();
const estimate = calculator.estimate({ vcpu: 4, memoryGB: 16, hoursPerMonth: 730 });
console.log(`Monthly: $${estimate.totalMonthly}, Annual: $${estimate.totalAnnual}`);
estimate.recommendations.forEach(r => console.log(r));
```

**What this demonstrates:** Multi-cloud cost comparison enables data-driven provider selection and identifies savings opportunities across AWS, Azure, and GCP.

---

## Chapter Quiz

<details><summary>Question 1: Which provider has the most global regions?</summary>**A)** AWS<br>**B)** Azure<br>**C)** GCP<br>**D)** DigitalOcean<br><br>**Answer: B)** Azure with 60+ regions&lt;/details&gt;

<details><summary>Question 2: What is FinOps?</summary>**A)** A cloud provider<br>**B)** Cloud cost management practice<br>**C)** A monitoring tool<br>**D)** A deployment strategy<br><br>**Answer: B)** Cloud cost management practice&lt;/details&gt;

<details><summary>Question 3: Which GCP service excels at serverless containers?</summary>**A)** Compute Engine<br>**B)** Cloud Functions<br>**C)** Cloud Run<br>**D)** GKE<br><br>**Answer: C)** Cloud Run&lt;/details&gt;

<details><summary>Question 4: What is the primary benefit of spot instances?</summary>**A)** Higher performance<br>**B)** 60-90% cost discount<br>**C)** Better security<br>**D)** Guaranteed availability<br><br>**Answer: B)** 60-90% cost discount&lt;/details&gt;

<details><summary>Question 5: Which AWS service provides DNS with routing policies?</summary>**A)** CloudFront<br>**B)** Route 53<br>**C)** ELB<br>**D)** VPC<br><br>**Answer: B)** Route 53&lt;/details&gt;

---

### Multi-Cloud Cost Comparator

Choosing the optimal cloud provider for each workload requires detailed cost comparison. The following tool estimates and compares costs across providers for a given workload profile.

```typescript
// cloud-cost-comparator.ts
// Compare costs across cloud providers for given workload profiles

interface WorkloadProfile {
  vCPUs: number;
  memoryGB: number;
  storageGB: number;
  storageType: 'ssd' | 'hdd' | 'object';
  networkEgressGB: number;
  hoursPerMonth: number;
  databaseType: 'managed-sql' | 'managed-nosql' | 'self-hosted';
  dbStorageGB: number;
}

interface ProviderPricing {
  computeHourly: number;
  storageGBMonthly: number;
  networkEgressPerGB: number;
  managedDbHourly: number;
  managedDbStorageGBMonthly: number;
  discountReserved1yr: number;
  discountReserved3yr: number;
  discountSpot: number;
}

interface CostBreakdown {
  provider: string;
  compute: number;
  storage: number;
  network: number;
  database: number;
  totalMonthly: number;
  savingsWithReserved1yr: number;
  savingsWithSpot: number;
  recommendation: string;
}

class CloudCostComparator {
  private pricing: Record<string, ProviderPricing> = {
    aws: { computeHourly: 0.0864, storageGBMonthly: 0.023, networkEgressPerGB: 0.09, managedDbHourly: 0.17, managedDbStorageGBMonthly: 0.115, discountReserved1yr: 0.4, discountReserved3yr: 0.6, discountSpot: 0.7 },
    azure: { computeHourly: 0.0792, storageGBMonthly: 0.0208, networkEgressPerGB: 0.087, managedDbHourly: 0.156, managedDbStorageGBMonthly: 0.108, discountReserved1yr: 0.38, discountReserved3yr: 0.58, discountSpot: 0.65 },
    gcp: { computeHourly: 0.0768, storageGBMonthly: 0.02, networkEgressPerGB: 0.12, managedDbHourly: 0.15, managedDbStorageGBMonthly: 0.10, discountReserved1yr: 0.35, discountReserved3yr: 0.55, discountSpot: 0.6 },
  };

  compare(workload: WorkloadProfile): CostBreakdown[] {
    return Object.entries(this.pricing).map(([provider, p]) => {
      const compute = workload.vCPUs * p.computeHourly * workload.hoursPerMonth;
      const storage = workload.storageGB * p.storageGBMonthly;
      const network = workload.networkEgressGB * p.networkEgressPerGB;
      const database = workload.databaseType.startsWith('managed')
        ? (p.managedDbHourly * workload.hoursPerMonth) + (workload.dbStorageGB * p.managedDbStorageGBMonthly)
        : 0;
      const totalMonthly = compute + storage + network + database;

      const recommended = this.getRecommendation(workload, provider, totalMonthly);

      return {
        provider, compute: Math.round(compute * 100) / 100,
        storage: Math.round(storage * 100) / 100,
        network: Math.round(network * 100) / 100,
        database: Math.round(database * 100) / 100,
        totalMonthly: Math.round(totalMonthly * 100) / 100,
        savingsWithReserved1yr: Math.round(totalMonthly * p.discountReserved1yr * 100) / 100,
        savingsWithSpot: Math.round(totalMonthly * p.discountSpot * 100) / 100,
        recommendation: recommended,
      };
    }).sort((a, b) => a.totalMonthly - b.totalMonthly);
  }

  generateReport(workload: WorkloadProfile): string {
    const breakdowns = this.compare(workload);
    const lines = [
      `# Multi-Cloud Cost Comparison`,
      `Workload: ${workload.vCPUs} vCPU, ${workload.memoryGB}GB RAM, ${workload.storageGB}GB storage`,
      '',
      '| Provider | Compute | Storage | Network | Database | Total/Month | 1yr Reserved | Spot |',
      '|----------|---------|---------|---------|----------|-------------|--------------|------|',
    ];
    for (const b of breakdowns) {
      lines.push(`| ${b.provider} | $${b.compute} | $${b.storage} | $${b.network} | $${b.database} | **$${b.totalMonthly}** | $${b.savingsWithReserved1yr} | $${b.savingsWithSpot} |`);
    }
    lines.push('', '**Recommendations:**');
    for (const b of breakdowns) lines.push(`- ${b.provider}: ${b.recommendation}`);
    return lines.join('\n');
  }

  private getRecommendation(workload: WorkloadProfile, provider: string, cost: number): string {
    if (workload.networkEgressGB > 1000) return 'High egress cost risk — consider CDN or multi-region';
    if (workload.databaseType === 'managed-sql') return 'Good fit for managed SQL workloads';
    if (workload.storageType === 'object' && workload.storageGB > 10000) return 'Object storage cost-effective at scale';
    return `$${cost.toFixed(0)}/mo — ${cost < 500 ? 'cost-effective' : 'consider reserved instances'}`;
  }
}

const comparator = new CloudCostComparator();
const workload: WorkloadProfile = { vCPUs: 4, memoryGB: 16, storageGB: 500, storageType: 'ssd', networkEgressGB: 500, hoursPerMonth: 730, databaseType: 'managed-sql', dbStorageGB: 100 };
console.log(comparator.generateReport(workload));
```

**What this demonstrates:** Automated multi-cloud cost comparison enables data-driven provider selection and identifies savings opportunities through reserved instances and spot pricing.

---


// cloud platforms
// cicd-infrastructure-automation implementation

interface Task { id: string; name: string; status: string; data: unknown }
class Processor {
  private tasks: Task[] = []
  private maxConcurrency: number
  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }
  async add(task: Omit&lt;Task, "status"&gt;): Promise&lt;void&gt; {
    this.tasks.push({ ...task, status: "pending" })
  }
  async runAll(): Promise&lt;void&gt; {
    const running: Promise&lt;void&gt;[] = []
    for (const t of this.tasks) {
      if (running.length >= this.maxConcurrency) { await Promise.race(running) }
      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })
      running.push(p)
    }
    await Promise.all(running)
  }
  private async execute(t: Task): Promise&lt;void&gt; {
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
  await proc.add({ id: '1', name: 'cloud platforms', data: { topic: 'cicd-infrastructure-automation' } })
  await proc.runAll()
  console.log('Stats:', proc.getStats())
}
main().catch(console.error)
export { Processor, Task }
## Summary

Each major cloud provider offers comprehensive compute, storage, networking, and identity services. AWS provides the broadest service catalog. Azure excels in enterprise integration and Microsoft ecosystem. GCP leads in data analytics, ML, and container-native services. Multi-cloud and hybrid cloud strategies address specific business needs but add operational complexity. Cloud governance ensures security, compliance, and cost control. FinOps practices optimize cloud costs through right-sizing, reservation models, spot instances, and budget governance. Auto-scaling ensures cost-efficient capacity management for variable workloads.

---

### Cloud Disaster Recovery Strategies

Every cloud architecture needs a disaster recovery plan aligned to Recovery Time Objective (RTO) and Recovery Point Objective (RPO):

| Strategy | RTO | RPO | Cost | Description |
|----------|-----|-----|------|-------------|
| **Backup & Restore** | Hours | 24h | Low | Periodic backups to object storage, restore when needed |
| **Pilot Light** | Minutes | Minutes | Medium | Core services running minimal, scale up on failover |
| **Warm Standby** | Minutes | Seconds | Medium-High | Scaled-down full copy, scale up on failover |
| **Multi-Site Active/Active** | Near-zero | Seconds | High | Full production in two regions, traffic split |
| **Multi-Cloud DR** | Minutes | Minutes | High | Secondary provider for critical workloads |

```mermaid
flowchart LR
    subgraph "Primary Region"
        A[Production<br/>us-east-1]
    end
    subgraph "DR Region"
        B[Standby<br/>us-west-2]
    end
    A -->|Data Replication| B
    A -->|Route 53 Failover| C[DNS]
    B --> C
    C --> D[Users]
```

```typescript
interface DRPlan {
  strategy: string;
  rto: number; // minutes
  rpo: number; // minutes
  costPerMonth: number;
  steps: string[];
}

class DisasterRecoveryPlanner {
  generatePlan(service: string, criticality: 'critical' | 'high' | 'medium'): DRPlan {
    const plans: Record<string, DRPlan> = {
      critical: {
        strategy: 'Multi-Site Active/Active',
        rto: 1, rpo: 1, costPerMonth: 15000,
        steps: [
          'Deploy identical infrastructure in second region',
          'Configure synchronous database replication',
          'Set up global load balancer with health checks',
          'Implement automated failover and failback',
          'Run quarterly Game Day exercises',
        ],
      },
      high: {
        strategy: 'Warm Standby',
        rto: 15, rpo: 5, costPerMonth: 5000,
        steps: [
          'Deploy scaled-down infrastructure in DR region',
          'Configure asynchronous replication',
          'Automate scale-up and DNS switch on failover',
          'Test failover monthly',
        ],
      },
      medium: {
        strategy: 'Pilot Light',
        rto: 60, rpo: 30, costPerMonth: 1000,
        steps: [
          'Store AMIs and database snapshots in DR region',
          'Maintain minimal networking in DR region',
          'Automate infrastructure provisioning on failover',
          'Test quarterly',
        ],
      },
    };
    return plans[criticality];
  }
}
```

## Exercises

### Review Questions

1. Compare EC2, Lambda, and ECS in terms of management overhead, scaling characteristics, and billing model.
2. How does GCP's global VPC differ from AWS's regional VPC model?
3. What are the primary cost drivers in cloud computing? How does FinOps address each?
4. Under what circumstances would you choose multi-cloud over single-cloud architecture?
5. Compare spot instances across AWS, Azure, and GCP. What workloads are suitable each?

### Application Problems

1. Create an AWS architecture diagram for a three-tier web application (web, API, database) using VPC, ALB, EC2 auto-scaling group, RDS Multi-AZ, ElastiCache, and S3 for static assets. Justify each service choice.
2. Calculate the cost comparison for a workload running 24/7: on-demand vs 1-year reserved vs 3-year reserved vs spot instances using public pricing.
3. Set up budget alerts on a cloud provider. Create a tagging strategy that allocates costs by project, environment, and team.
4. Write a TypeScript Pulumi program that deploys an S3 bucket with versioning, lifecycle rules to transition objects to Glacier after 90 days, and public access blocking. Use the CostAllocator class to estimate monthly costs based on 100GB storage with 10GB daily uploads.
5. Using the AutoScalerSimulator class from this chapter, configure a policy that: scales up when CPU exceeds 60% (add 1 instance), scales down when CPU drops below 30% (remove 1 instance), has min 3 and max 15 instances, and has a 60-second cooldown. Simulate with a workload pattern that spikes to 90% CPU during business hours (8 AM-6 PM) and drops to 10% overnight.
6. Extend the `CostEstimator` class to support: monthly cost projections accounting for reserved instance discounts (1-year: 40% off, 3-year: 60% off), spot instance pricing (70% off on-demand), and data transfer costs between providers (AWS?GCP $0.09/GB, GCP?AWS $0.12/GB, Azure?AWS $0.087/GB). Generate a 12-month cost projection for a multi-cloud deployment with 5 EC2-equivalent instances, 2TB storage, and 5TB monthly egress split 60/40 across two providers.
7. Write a `CloudGovernanceEnforcer` class that: defines required tagging policies (team, environment, project, cost-center), scans a list of resources for compliance, generates weekly violation reports with cost impact of untagged resources, and auto-remediates by applying default tags to non-compliant resources (with dry-run mode). Use the `CostAllocator` class for the cost impact calculation.

### Challenge Problems

8. Write a TypeScript class `CloudMigrationPlanner` that implements the 7 Rs migration strategy. The class should: accept a list of workloads (each with name, dependencies, current location, criticality, and data size), classify each workload into one of the 7 Rs based on dependency analysis and criticality, generate a migration wave schedule respecting dependency ordering (critical path), calculate total data transfer costs based on egress pricing from the source provider, and output a JSON migration plan with per-wave resource requirements and rollback criteria.
9. Design a `MultiCloudOrchestrator` class that: defines a unified `CloudProvider` interface with methods `provisionCompute()`, `provisionStorage()`, `provisionDatabase()`, and `createNetwork()`; implements the interface for AWS (using EC2/S3/RDS/VPC), Azure (VM/Blob/SQL/VNet), and GCP (Compute Engine/Storage/Cloud SQL/VPC); provides a `selectOptimalProvider` method that picks the cheapest provider for each resource type given a workload profile; and generates a combined Terraform/Pulumi configuration that provisions resources across all three providers from a single deployment script.

### Challenge Problem

Design a multi-cloud architecture for a global SaaS platform with the following requirements: primary workload on AWS for compute, secondary on GCP for data analytics, disaster recovery across providers, data residency compliance (EU data stays in EU, US data stays in US), global CDN for static assets, managed Kubernetes for container orchestration, and a monthly cloud budget not exceeding $50,000. Define the architecture, provider service mapping, networking topology, data replication strategy, cost allocation model, and governance policies with estimated cost breakdown.
