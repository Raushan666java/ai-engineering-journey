# Chapter 3: Cloud Compute Services

> **Previous:** [Chapter 2: Virtualization](./02-virtualization.md) | **Next:** [Chapter 4: Cloud Storage Services](./04-cloud-storage.md)

## Learning Objectives

After completing this chapter, students will be able to:

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/cloud-computing/03-cloud-compute/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/cloud-computing/03-cloud-compute/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/cloud-computing/03-cloud-compute/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/cloud-computing/03-cloud-compute/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/cloud-computing/03-cloud-compute/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/cloud-computing/03-cloud-compute/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


1. Compare and contrast compute services across AWS (EC2), Azure (Virtual Machines), and GCP (Compute Engine).
2. Categorize instance families and select the appropriate type for specific workload profiles.
3. Evaluate pricing models including on-demand, spot/preemptible, and commitment-based options.
4. Implement automated scaling using Auto Scaling Groups, Scale Sets, and Managed Instance Groups.
5. Configure persistent block storage and instance-store volumes.
6. Design high-availability architectures using placement groups and availability zones.
7. Deploy and configure multi-layer load balancing solutions.
8. Understand auto-scaling strategies and load balancing algorithms.

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|--------------------|
| VM Models | EC2, Azure VMs, GCE ? same concept, different implementations | Choose provider by integrated services, not VM features |
| Instance Families | General purpose, Compute, Memory, Storage, GPU | Match instance type to workload profile |
| Pricing Models | On-Demand, Spot, Reserved, Dedicated | Mix models to optimize cost: baseline ? Reserved, spikes ? On-Demand, batch ? Spot |
| Scaling | Auto Scaling Groups, Scale Sets, MIGs | Horizontal scaling is the cloud-native approach |
| Storage Types | Ephemeral (instance store) vs Persistent (EBS/PD) | Never store critical data on ephemeral volumes |
| Load Balancing | L4 (network) vs L7 (application) | Use L7 for HTTP apps, L4 for ultra-low latency |
| Autoscaling Strategies | Target tracking, Step scaling, Scheduled | Match scaling strategy to traffic pattern |

## Chapter Roadmap

```mermaid
flowchart LR
    A[VM Model Overview] --> B[Instance Families]
    B --> C[Pricing Models]
    C --> D[Storage Options]
    D --> E[Scaling & HA]
    E --> F[Auto Scaling Strategies]
    F --> G[Load Balancing Algorithms]
```

## Theory

### 3.1 The Virtual Machine Model in the Cloud


Cloud compute services provide resizable, on-demand virtual machine (VM) instances. These services form the fundamental "Infrastructure as a Service" (IaaS) layer. While the underlying hypervisors vary ? AWS uses Nitro (KVM-based), Azure uses Hyper-V, and GCP uses KVM ? the abstraction provided to the consumer is a consistent set of virtual CPU (vCPU), memory, storage, and networking resources.

The primary advantage of cloud compute is the shift from physical hardware procurement to software-defined provisioning. This enables "just-in-time" infrastructure where resources are created in seconds and terminated when no longer needed, supporting the cloud's core promise of agility and elasticity.

### 3.2 Provider Service Comparison


| Feature | AWS EC2 | Azure Virtual Machines | GCP Compute Engine |
|---------|---------|-----------------------|--------------------|
| Core Service | Elastic Compute Cloud | Virtual Machines | Compute Engine |
| Image Format | AMI (Amazon Machine Image) | Azure Image / VHD | Compute Engine Image |
| Scaling | Auto Scaling Groups (ASG) | VM Scale Sets (VMSS) | Managed Instance Groups (MIG) |
| Local Storage | Instance Store | Temporary Disk | Local SSD |
| Persistent Block | EBS (Elastic Block Store) | Azure Managed Disks | Persistent Disk (PD) |
| Dedicated Hosts | Dedicated Hosts | Dedicated Hosts | Sole-Tenant Nodes |

### 3.3 Instance Families and Selection


Providers organize instances into families optimized for different workloads. Naming conventions typically include a family identifier, a generation number, and a size (e.g., AWS `m5.large`, Azure `D2s_v5`, GCP `n2-standard-2`).

```mermaid
graph TB
    subgraph "Instance Families"
        A[General Purpose] --> A1[Web servers]
        A --> A2[Dev/test]
        A --> A3[Small DBs]
        
        B[Compute Optimized] --> B1[Batch processing]
        B --> B2[Media transcoding]
        B --> B3[Scientific modeling]
        
        C[Memory Optimized] --> C1[In-memory DBs]
        C --> C2[Real-time analytics]
        C --> C3[SAP HANA]
        
        D[Storage Optimized] --> D1[NoSQL DBs]
        D --> D2[Data warehousing]
        D --> D3[Distributed FS]
        
        E[Accelerated Computing] --> E1[ML training]
        E --> E2[3D rendering]
        E --> E3[Financial modeling]
    end
```

| Family | vCPU:Memory Ratio | Typical Use Case | AWS Example | Azure Example | GCP Example |
|--------|-------------------|------------------|-------------|---------------|-------------|
| General Purpose | 1:4 | Balanced workloads | t3, m5 | D-series | n2, e2 |
| Compute Optimized | 1:2 | CPU-intensive | c5, c6g | F-series | c2, c3 |
| Memory Optimized | 1:8 to 1:16 | Large in-memory | r5, x1 | E-series | m1, m3 |
| Storage Optimized | 1:4 to 1:8 | High I/O | i3, d2 | L-series | l2 |
| Accelerated | Varies | GPU/FPGA workloads | p3, g4 | NC, ND-series | a2, g2 |

### 3.4 Detailed Instance Type Specifications


| AWS Type | vCPUs | Memory (GB) | Network (Gbps) | Price/hr (On-Demand) | Best For |
|----------|-------|-------------|----------------|---------------------|----------|
| t3.micro | 2 | 1 | Up to 5 | $0.0104 | Low-traffic web, dev |
| t3.medium | 2 | 4 | Up to 5 | $0.0416 | Small apps, dev |
| m5.large | 2 | 8 | Up to 10 | $0.096 | General purpose |
| c5.2xlarge | 8 | 16 | Up to 10 | $0.34 | Batch processing |
| r5.4xlarge | 16 | 128 | Up to 10 | $1.008 | In-memory databases |
| p3.2xlarge | 8 | 61 | Up to 10 | $3.06 | ML training (1 GPU) |
| i3.2xlarge | 8 | 61 | Up to 10 | $0.624 | NoSQL, NVMe SSD |

### 3.5 Lifecycle and Pricing Models


Cloud compute economics allow for significant cost optimization through tiered pricing:

```mermaid
graph LR
    subgraph "Pricing Models"
        A[On-Demand] -->|Highest cost,<br/>Max flexibility| D[Workload Matching]
        B[Spot/Preemptible] -->|Up to 90% off,<br/>Can be interrupted| D
        C[Reserved/CUD] -->|40-60% off,<br/>1-3yr commitment| D
        E[Dedicated] -->|Full host,<br/>BYOL/Compliance| D
    end
    D --> F[Optimal Cost]
```

- **On-Demand:** Pay-per-second or per-hour with no commitment. Highest cost but maximum flexibility.
- **Spot (AWS/Azure) / Preemptible (GCP):** Access to spare capacity at up to 90% discount. Instances can be reclaimed by the provider with short notice (30s to 2min). Best for fault-tolerant, stateless workloads.
- **Reserved / Committed Use:** Discount for committing to 1- or 3-year usage. AWS uses Reserved Instances and Savings Plans; GCP uses Committed Use Discounts (CUDs); Azure uses Reserved Virtual Machine Instances.
- **Dedicated Hardware:** Physical servers dedicated to a single tenant. Necessary for specific licensing (BYOL) or strict regulatory compliance.

**Spot Instance Lifecycle:**

```mermaid
sequenceDiagram
    participant User as User
    participant Spot as Spot Request
    participant EC2 as EC2 Service

    User->>Spot: Create spot request
    Spot->>EC2: Bid for capacity
    EC2-->>Spot: Instance launched
    Spot-->>User: Instance running
    Note over User,EC2: Normal operation
    EC2->>Spot: Capacity needed elsewhere
    Spot->>User: 2-minute termination notice
    User->>EC2: Checkpoint state
    EC2-->>Spot: Instance terminated
    User->>Spot: Request new capacity
```

### 3.6 Storage for Compute


VMs typically interact with two types of block storage:

1. **Ephemeral / Instance Store:** Physically attached to the host computer. Offers high IOPS and low latency but data is lost if the instance is stopped or terminated. Used for swap space, caches, and temporary data.
2. **Persistent Block Storage:** Network-attached storage that persists independently of the VM lifecycle. Can be detached from one instance and attached to another.
   - **Performance Tiers:** Standard HDD, Balanced SSD, High-Performance SSD (Provisioned IOPS), and Ultra Disks for sub-millisecond latency.

```typescript
interface StorageVolume {
  type: "instance-store" | "ebs" | "persistent-disk";
  sizeGB: number;
  iops: number;
  throughputMBps: number;
  persistent: boolean;
}

function selectStorageForWorkload(
  needsPersistence: boolean,
  requiredIOPS: number,
  budgetDollarsPerGB: number
): StorageVolume {
  if (!needsPersistence) {
    return {
      type: "instance-store",
      sizeGB: 100,
      iops: 30000,
      throughputMBps: 500,
      persistent: false,
    };
  }

  if (requiredIOPS > 10000) {
    return {
      type: "ebs",
      sizeGB: 500,
      iops: requiredIOPS,
      throughputMBps: 1000,
      persistent: true,
    }; // Provisioned IOPS SSD
  }

  return {
    type: "ebs",
    sizeGB: 500,
    iops: 3000,
    throughputMBps: 250,
    persistent: true,
  }; // General Purpose SSD
}

const dbStorage = selectStorageForWorkload(true, 20000, 0.5);
console.log("Database storage:", JSON.stringify(dbStorage, null, 2));

const cacheStorage = selectStorageForWorkload(false, 5000, 0.1);
console.log("Cache storage:", JSON.stringify(cacheStorage, null, 2));
```

Output:
```
Database storage: {
  "type": "ebs",
  "sizeGB": 500,
  "iops": 20000,
  "throughputMBps": 1000,
  "persistent": true
}
Cache storage: {
  "type": "instance-store",
  "sizeGB": 100,
  "iops": 30000,
  "throughputMBps": 500,
  "persistent": false
}
```

### 3.7 Scaling and Availability Patterns


**Horizontal Scaling** involves adding more instances to a fleet, while **Vertical Scaling** involves increasing the size of an existing instance.

```mermaid
graph TB
    subgraph "Vertical Scaling (Scale Up)"
        A1[2 vCPU / 8 GB] --> A2[4 vCPU / 16 GB] --> A3[8 vCPU / 32 GB]
    end
    subgraph "Horizontal Scaling (Scale Out)"
        B1[1 instance] --> B2[2 instances] --> B3[5 instances]
    end
    subgraph "Key Differences"
        C1[Vertical: Limited by max instance size, requires restart]
        C2[Horizontal: Unlimited scale, no downtime, cloud-native]
    end
```

**Auto Scaling:** Providers use metrics (CPU utilization, request count) to dynamically adjust the number of instances.

**Auto Scaling Strategies:**

| Strategy | Description | Best For | Example |
|----------|-------------|----------|---------|
| Target Tracking | Maintain a metric at target value | Steady-state workloads | CPU at 50% |
| Step Scaling | Add/remove instances in steps based on metric magnitude | Variable traffic | Add 2 instances when CPU > 70% |
| Scheduled Scaling | Scale at specific times | Predictable patterns | Scale up at 8 AM daily |
| Predictive Scaling | ML-based future load prediction | Cyclical patterns | Scale for weekly peaks |

**Virtual Machine Restart Policy:**

```typescript
type ScalingStrategy = "target-tracking" | "step-scaling" | "scheduled" | "predictive";

interface ScalingPolicy {
  strategy: ScalingStrategy;
  minInstances: number;
  maxInstances: number;
  targetMetric?: string;
  targetValue?: number;
}

function configureAutoScaling(
  trafficPattern: "steady" | "variable" | "predictable" | "cyclical"
): ScalingPolicy {
  switch (trafficPattern) {
    case "steady":
      return { strategy: "target-tracking", minInstances: 2, maxInstances: 10, targetMetric: "CPUUtilization", targetValue: 50 };
    case "variable":
      return { strategy: "step-scaling", minInstances: 2, maxInstances: 20 };
    case "predictable":
      return { strategy: "scheduled", minInstances: 2, maxInstances: 50 };
    case "cyclical":
      return { strategy: "predictive", minInstances: 2, maxInstances: 30 };
  }
}

console.log(configureAutoScaling("steady"));
```

- **Availability Sets / Placement Groups:** Strategies to ensure VMs are placed on different physical racks or power sources to avoid correlated failures.

**Placement Group Types:**

| Type | Description | Use Case | Limitations |
|------|-------------|----------|-------------|
| Cluster | Low latency, same rack | HPC, tightly coupled apps | Single AZ, limited instances |
| Spread | Distinct hardware | Critical VMs, HA | 7 instances per AZ max |
| Partition | Logical groups across racks | Distributed systems (Hadoop, Kafka) | 7 partitions per AZ |

- **Health Checks:** The scaling service monitors instance health and automatically replaces failed instances.

### 3.8 Load Balancing


Load balancers distribute incoming traffic across a pool of healthy VM instances.

**Load Balancer Types:**

| Type | OSI Layer | Routing | Latency | Use Case |
|------|-----------|---------|---------|----------|
| Classic LB (CLB) | L4/L7 | TCP/HTTP | Moderate | Legacy apps |
| Application LB (ALB) | L7 | HTTP/HTTPS, path, host, header | Low | Microservices, HTTP apps |
| Network LB (NLB) | L4 | TCP/UDP, IP | Ultra-low | Ultra-low latency, static IP |
| Gateway LB (GLB) | L3 | IP | Low | Inline network appliances |

**Load Balancing Algorithms:**

| Algorithm | Description | Best For |
|-----------|-------------|----------|
| Round Robin | Requests distributed sequentially | Equal-capacity servers |
| Least Connections | Sends to server with fewest active connections | Variable request duration |
| IP Hash | Client IP determines target server | Session persistence (sticky sessions) |
| Weighted Round Robin | Servers receive proportional traffic | Heterogeneous server capacity |
| Random | Random selection with optional weighting | Large server pools |

```typescript
interface LoadBalancerConfig {
  type: "alb" | "nlb" | "clb" | "glb";
  algorithm: "round-robin" | "least-connections" | "ip-hash" | "weighted";
  healthCheckPath: string;
  healthCheckInterval: number; // seconds
  unhealthyThreshold: number;
  stickySessions: boolean;
}

function configureLoadBalancer(
  isHttp: boolean,
  needStaticIp: boolean,
  needPathRouting: boolean
): LoadBalancerConfig {
  if (isHttp && needPathRouting) {
    return {
      type: "alb",
      algorithm: "least-connections",
      healthCheckPath: "/health",
      healthCheckInterval: 30,
      unhealthyThreshold: 3,
      stickySessions: false,
    };
  }

  if (!isHttp && needStaticIp) {
    return {
      type: "nlb",
      algorithm: "round-robin",
      healthCheckPath: "",
      healthCheckInterval: 10,
      unhealthyThreshold: 2,
      stickySessions: false,
    };
  }

  return {
    type: "alb",
    algorithm: "round-robin",
    healthCheckPath: "/health",
    healthCheckInterval: 30,
    unhealthyThreshold: 3,
    stickySessions: false,
  };
}

const webLB = configureLoadBalancer(true, false, true);
console.log("Web app LB:", webLB.type, "with", webLB.algorithm);
```

- **Layer 7 (Application):** Inspects HTTP/HTTPS headers, paths, and cookies. Useful for microservices and URL-based routing.
- **Layer 4 (Network):** Routes based on IP and TCP/UDP ports. Offers ultra-high performance and low latency.
- **Global vs. Regional:** Some load balancers (like GCP's Cloud Load Balancing) are global, while others are confined to a specific region.

## Examples

### Example 3.1: Multi-Cloud Instance Deployment (CLI)

**AWS EC2 Launch:**
```bash
aws ec2 run-instances --image-id ami-0123456789 --count 1 --instance-type t3.micro --key-name MyKeyPair
```

**Azure VM Launch:**
```azurecli
az vm create --resource-group MyRG --name MyVM --image Ubuntu2204 --admin-username azureuser --generate-ssh-keys
```

**GCP GCE Launch:**
```bash
gcloud compute instances create my-vm --zone=us-central1-a --machine-type=e2-micro --image-family=debian-11
```

### Example 3.2: Configure Auto-Scaling Policy (AWS)

To maintain average CPU utilization at 50%:
```bash
aws autoscaling put-scaling-policy \
  --auto-scaling-group-name my-asg \
  --policy-name cpu50-target-tracking \
  --policy-type TargetTrackingScaling \
  --target-tracking-configuration "{\"TargetValue\": 50.0, \"PredefinedMetricSpecification\": {\"PredefinedMetricType\": \"ASGAverageCPUUtilization\"}}"
```

### Example 3.3: TypeScript AWS SDK ? Launch Instances

```typescript
import { EC2, AutoScaling, ElasticLoadBalancingV2 } from "@aws-sdk/client-ec2";

interface LaunchConfig {
  imageId: string;
  instanceType: string;
  minCount: number;
  maxCount: number;
  securityGroupIds: string[];
  subnetIds: string[];
}

async function launchInstances(config: LaunchConfig): Promise<void> {
  const ec2 = new EC2({ region: "us-east-1" });

  const result = await ec2.runInstances({
    ImageId: config.imageId,
    InstanceType: config.instanceType,
    MinCount: config.minCount,
    MaxCount: config.maxCount,
    SecurityGroupIds: config.securityGroupIds,
    SubnetId: config.subnetIds[0],
  });

  const instanceIds = result.Instances?.map(i => i.InstanceId!) || [];
  console.log(`Launched ${instanceIds.length} instances:`, instanceIds);
}

async function configureScaling(
  asgName: string,
  launchTemplateId: string,
  subnetIds: string[]
): Promise<void> {
  const asg = new AutoScaling({ region: "us-east-1" });

  await asg.createAutoScalingGroup({
    AutoScalingGroupName: asgName,
    LaunchTemplate: { LaunchTemplateId: launchTemplateId, Version: "$Default" },
    MinSize: 2,
    MaxSize: 10,
    DesiredCapacity: 2,
    VPCZoneIdentifier: subnetIds.join(","),
    HealthCheckType: "ELB",
    HealthCheckGracePeriod: 300,
  });

  await asg.putScalingPolicy({
    AutoScalingGroupName: asgName,
    PolicyName: "cpu-target-50",
    PolicyType: "TargetTrackingScaling",
    TargetTrackingConfiguration: {
      TargetValue: 50,
      PredefinedMetricSpecification: { PredefinedMetricType: "ASGAverageCPUUtilization" },
    },
  });

  console.log(`Auto Scaling Group "${asgName}" configured with CPU tracking at 50%`);
}

async function createLoadBalancer(name: string, subnetIds: string[], vpcId: string): Promise<void> {
  const elbv2 = new ElasticLoadBalancingV2({ region: "us-east-1" });

  const lbResult = await elbv2.createLoadBalancer({
    Name: name,
    Subnets: subnetIds,
    Scheme: "internet-facing",
    Type: "application",
    IpAddressType: "ipv4",
  });

  const lbArn = lbResult.LoadBalancers![0].LoadBalancerArn!;
  console.log(`ALB "${name}" created with ARN: ${lbArn}`);
}

export { launchInstances, configureScaling, createLoadBalancer };
```

> **One-Sentence Takeaway:** Cloud compute is about matching the right instance family, pricing model, and scaling strategy to your workload ? the cheapest instance is the one you don't leave running idle.

> **Pro Tip:** For cost optimization, always start with Reserved Instances (or Savings Plans) for baseline capacity and use Spot Instances for fault-tolerant batch workloads. This combination can reduce compute costs by 50-70%.

> **Warning:** Spot/Preemptible instances can be terminated with as little as 30 seconds notice. Never use them for stateful workloads, databases, or any application that cannot handle sudden interruptions.

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| On-Demand | Pay per hour/second, no commitment | Maximum flexibility, highest cost | Unpredictable workloads |
| Spot/Preemptible | Spare capacity at discount | Up to 90% off, can be terminated | Batch processing, stateless |
| Reserved/CUD | 1-3 year commitment | 40-60% discount | Baseline, predictable capacity |
| Dedicated Host | Physical server for single tenant | Compliance, BYOL licensing | Regulated industries |
| Instance Store | Local physical storage | High IOPS, data lost on stop | Cache, temp data |
| EBS/Persistent Disk | Network-attached block storage | Survives instance terminations | Databases, boot volumes |
| Placement Group | Physical placement strategy | Cluster: low latency; Spread: HA | HPC vs critical apps |

## Quick Reference

| Category | Key Concepts | Notes |
|----------|-------------|-------|
| **Instance Families** | General, Compute, Memory, Storage, GPU | Choose by workload profile |
| **Pricing Tiers** | On-Demand, Spot, Reserved, Dedicated | Mix for optimal cost |
| **Scaling** | Horizontal (more instances) vs Vertical (bigger instance) | Horizontal is more resilient |
| **Scaling Strategies** | Target tracking, Step, Scheduled, Predictive | Match to traffic pattern |
| **Load Balancer Types** | L4 (TCP/UDP), L7 (HTTP/HTTPS) | L7 supports path-based routing |
| **HA Patterns** | Multi-AZ, Auto Scaling, Health Checks | Design for failure from day one |

## Cross-Application Matrix

| Technique | Cloud Architecture | DevOps | Security | Enterprise |
|-----------|-------------------|--------|----------|------------|
| Auto Scaling | Elastic workload management | Immutable deployments | DDoS absorption | Cost-efficient capacity |
| Spot Instances | Cost optimization | CI/CD worker nodes | Disposable build agents | Batch processing |
| Reserved Instances | Baseline capacity planning | N/A | N/A | Long-term cost mgmt |
| Load Balancing | HA architecture | Blue-green deployment | TLS termination | Global traffic distribution |
| Instance Families | Workload matching | Dev/test environments | Isolated GPU/Compute | Database provisioning |
| Placement Groups | Performance optimization | Test isolation | Physical isolation | Compliance patterns |

## Chapter Quiz

1. Which pricing model offers the deepest discount but carries the highest risk of interruption?
   - A) On-Demand
   - B) Reserved Instances
   - C) Spot/Preemptible Instances
   - D) Dedicated Hosts

<details>
<summary>Answer&lt;/summary&gt;
**C) Spot/Preemptible Instances.** These use spare cloud capacity at up to 90% discount but can be reclaimed by the provider with minimal notice (30 seconds to 2 minutes). They're ideal for fault-tolerant, stateless workloads.
</details>

2. What is the primary difference between an Application Load Balancer (L7) and a Network Load Balancer (L4)?
   - A) L7 is faster than L4
   - B) L7 inspects HTTP headers for intelligent routing; L4 routes by IP and port only
   - C) L4 is more expensive
   - D) L7 only works with AWS

<details>
<summary>Answer&lt;/summary&gt;
**B) L7 inspects HTTP headers for intelligent routing; L4 routes by IP and port only.** L7 load balancers can route based on URL path, host header, cookies, and HTTP methods. L4 load balancers offer lower latency and are protocol-agnostic.
</details>

3. A company runs a critical database 24/7 on a cloud VM. Which storage type should they use?
   - A) Instance Store (ephemeral)
   - B) Persistent Block Storage (EBS/Azure Disk/Persistent Disk)
   - C) Temporary Disk
   - D) RAM disk

<details>
<summary>Answer&lt;/summary&gt;
**B) Persistent Block Storage.** Instance store data is lost when the VM stops or terminates. Persistent block storage survives VM lifecycle events and supports snapshots, replication, and independent resizing ? essential for databases.
</details>

4. Which auto-scaling strategy is best for an application with predictable peak traffic every weekday at 9 AM?
   - A) Target Tracking
   - B) Step Scaling
   - C) Scheduled Scaling
   - D) Predictive Scaling

<details>
<summary>Answer&lt;/summary&gt;
**C) Scheduled Scaling.** Scheduled scaling allows you to set specific times to increase or decrease capacity, making it ideal for predictable traffic patterns like morning rush.
</details>

5. What is the maximum number of instances per AZ in a spread placement group?
   - A) 7
   - B) 20
   - C) 100
   - D) Unlimited

<details>
<summary>Answer&lt;/summary&gt;
**A) 7.** Spread placement groups are limited to 7 running instances per Availability Zone because each instance runs on distinct hardware, ensuring maximum fault isolation.
</details>

### TypeScript: Auto Scaling Group Simulator

```typescript
interface ASGConfig {
  minSize: number;
  maxSize: number;
  desiredCapacity: number;
  cooldownSeconds: number;
  scaleUpThreshold: number;
  scaleDownThreshold: number;
}

class AutoScalingGroup {
  private instances: { id: string; state: string; cpuUtil: number; healthy: boolean }[] = [];
  private config: ASGConfig;
  private time: number = 0;
  private counter: number = 0;
  private lastScale: number = 0;

  constructor(config: ASGConfig) {
    this.config = config;
    for (let i = 0; i < config.desiredCapacity; i++) this.launchInstance();
  }

  private launchInstance(): void {
    this.instances.push({
      id: `i-${++this.counter}`, state: "running",
      cpuUtil: Math.random() * 30 + 10, healthy: true,
    });
  }

  setCPU(utils: number[]): void {
    this.instances.filter((i) => i.state === "running")
      .forEach((inst, idx) => { inst.cpuUtil = utils[idx % utils.length]; });
  }

  tick(): void {
    this.time++;
    const running = this.instances.filter((i) => i.state === "running");
    const avgCPU = running.length > 0
      ? running.reduce((s, i) => s + i.cpuUtil, 0) / running.length : 0;

    if (this.time - this.lastScale >= this.config.cooldownSeconds) {
      if (avgCPU > this.config.scaleUpThreshold && this.instances.length < this.config.maxSize) {
        this.launchInstance();
        this.lastScale = this.time;
      } else if (avgCPU < this.config.scaleDownThreshold && this.instances.length > this.config.minSize) {
        const t = this.instances.find((i) => i.state === "running");
        if (t) { t.state = "terminated"; this.lastScale = this.time; }
      }
    }
  }

  getActive(): number { return this.instances.filter((i) => i.state === "running").length; }
  getAvgCPU(): number {
    const r = this.instances.filter((i) => i.state === "running");
    return r.length > 0 ? r.reduce((s, i) => s + i.cpuUtil, 0) / r.length : 0;
  }
}

const asg = new AutoScalingGroup({ minSize: 2, maxSize: 8, desiredCapacity: 2, cooldownSeconds: 3, scaleUpThreshold: 70, scaleDownThreshold: 30 });
const load = [20, 25, 30, 40, 55, 65, 80, 85, 90, 85, 75, 60, 45, 35, 25, 20, 30, 50, 70, 85];
load.forEach((l) => {
  asg.setCPU(new Array(asg.getActive()).fill(l));
  asg.tick();
});
console.log(`Final: ${asg.getActive()} instances, avg CPU: ${asg.getAvgCPU().toFixed(1)}%`);
```

### TypeScript: Spot Fleet Optimizer

```typescript
interface SpotOption {
  type: string;
  price: number;
  onDemand: number;
  interruptRate: "low" | "medium" | "high";
}

class SpotFleetOptimizer {
  private options: SpotOption[] = [];

  addOption(opt: SpotOption): void { this.options.push(opt); }

  optimize(budget: number, diversity: number = 0.3): SpotOption[] {
    const ranked = [...this.options]
      .filter((o) => o.price <= budget)
      .sort((a, b) => a.price / a.onDemand - b.price / b.onDemand);

    const result: SpotOption[] = [];
    const maxTypes = Math.max(1, Math.floor(ranked.length * diversity));
    let remaining = budget;

    for (let i = 0; i < Math.min(maxTypes, ranked.length); i++) {
      const count = Math.floor(remaining / (ranked.length - i) / ranked[i].price);
      if (count > 0) {
        result.push(ranked[i]);
        remaining -= count * ranked[i].price;
      }
    }
    return result;
  }
}

const fleet = new SpotFleetOptimizer();
fleet.addOption({ type: "t3.medium", price: 0.015, onDemand: 0.0416, interruptRate: "low" });
fleet.addOption({ type: "m5.large", price: 0.038, onDemand: 0.096, interruptRate: "medium" });
fleet.addOption({ type: "c5.large", price: 0.034, onDemand: 0.085, interruptRate: "high" });
console.log("Spot fleet plan:", fleet.optimize(0.5).map((o) => o.type + " @ $" + o.price));
```

### TypeScript: Instance Config Validator

```typescript
interface InstanceConfig {
  family: string; vCores: number; memoryGB: number; networkGbps: number; ebsBandwidthMbps: number;
}

class InstanceValidator {
  validate(config: InstanceConfig, requirements: { minCores: number; minMemoryGB: number; minNetworkGbps: number }): { pass: boolean; issues: string[] } {
    const issues: string[] = [];
    if (config.vCores < requirements.minCores) issues.push(`Needs ${requirements.minCores} vCores, has ${config.vCores}`);
    if (config.memoryGB < requirements.minMemoryGB) issues.push(`Needs ${requirements.minMemoryGB} GB, has ${config.memoryGB}`);
    if (config.networkGbps < requirements.minNetworkGbps) issues.push(`Needs ${requirements.minNetworkGbps} Gbps, has ${config.networkGbps}`);
    return { pass: issues.length === 0, issues };
  }

  recommendMonthly(requirements: { minCores: number; minMemoryGB: number; minNetworkGbps: number }, budget: number): InstanceConfig[] {
    const catalog: InstanceConfig[] = [
      { family: "t3.medium", vCores: 2, memoryGB: 4, networkGbps: 0.5, ebsBandwidthMbps: 2085 },
      { family: "m5.large", vCores: 2, memoryGB: 8, networkGbps: 10, ebsBandwidthMbps: 4750 },
      { family: "c5.xlarge", vCores: 4, memoryGB: 8, networkGbps: 10, ebsBandwidthMbps: 4750 },
      { family: "r5.xlarge", vCores: 4, memoryGB: 32, networkGbps: 10, ebsBandwidthMbps: 4750 },
    ];
    const prices: Record<string, number> = { "t3.medium": 30, "m5.large": 69, "c5.xlarge": 85, "r5.xlarge": 126 };
    return catalog.filter(c => {
      const valid = this.validate(c, requirements);
      return valid.pass && (prices[c.family] || 0) <= budget;
    });
  }
}

const iv = new InstanceValidator();
console.log("m5.large validation:", JSON.stringify(iv.validate({ family: "m5.large", vCores: 2, memoryGB: 8, networkGbps: 10, ebsBandwidthMbps: 4750 }, { minCores: 4, minMemoryGB: 16, minNetworkGbps: 5 }), null, 2));
console.log("Recommended under $100/month:", iv.recommendMonthly({ minCores: 2, minMemoryGB: 8, minNetworkGbps: 5 }, 100).map(c => c.family));
```
```


// cloud compute
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
  await proc.add({ id: '1', name: 'cloud compute', data: { topic: 'iaas-paas-saas-cloud-native' } })
  await proc.runAll()
  console.log('Stats:', proc.getStats())
}
main().catch(console.error)
export { Processor, Task }

// cloud compute - additional TS implementations

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
  log.info('Cache demo started', { course: 'cloud-computing', chapter: 'cloud compute' })
  const v = cache.get("key1")
  console.log('Cached:', v)
  console.log('Hash:', computeHash('cloud-services'))
}
demo()
export { Cache, Logger, computeHash, CacheEntry }
## Summary

- Cloud compute provides virtualized hardware (IaaS) through VMs.
- Compute resources are organized into families (General Purpose, Compute, Memory, Storage, GPU).
- Pricing models range from expensive but flexible (On-Demand) to cheap but interruptible (Spot).
- Persistent storage (EBS/PD) survives instance termination, while instance store is ephemeral.
- Auto-scaling strategies include target tracking, step scaling, scheduled, and predictive.
- Load balancers (L4/L7) distribute traffic using algorithms like round robin, least connections, and IP hash.
- Placement groups control physical server placement for performance or high availability.
- Horizontal scaling via managed groups ensures application availability and cost efficiency.

## Exercises

### Review Questions

1. Explain the difference between horizontal and vertical scaling.
2. Under what circumstances should a Spot or Preemptible instance be avoided?
3. What is the difference between a Layer 4 and a Layer 7 load balancer?
4. How does persistent block storage differ from local instance storage?
5. Define "Noisy Neighbor" and explain how dedicated hosts mitigate this issue.
6. Compare target tracking, step scaling, and scheduled scaling strategies.
7. What are the three types of placement groups and when should each be used?

### Application Problems

1. A news website expects a massive traffic spike during an election. The current load is 2 VMs. Recommend a scaling policy and load balancer configuration to handle the spike while maintaining 99.9% availability.

2. A developer needs to run a 24-hour batch processing job that is checkpointed (saves state every 10 minutes). Compare the cost of using an On-Demand m5.large instance versus a Spot instance for this task.

3. Design a high-availability architecture for a web application using two Availability Zones. Specify the components required to ensure the app stays online if one AZ fails.

4. Write a TypeScript function that recommends an instance family given a workload description (CPU-intensive vs memory-intensive vs I/O-intensive) and a monthly budget.

5. An e-commerce site experiences traffic spikes on holidays. Configure a combination of auto-scaling strategies to handle both predictable holiday spikes and unpredictable flash sales.

### Challenge Problem

A company is migrating a legacy application that requires a specific hardware ID for licensing and cannot be scaled horizontally. The application is mission-critical and requires 128GB of RAM. Propose a cloud compute architecture that addresses: 1) Hardware-dependent licensing, 2) High availability despite no horizontal scaling, 3) Performance consistency, and 4) Cost-effective disaster recovery in a different region.
