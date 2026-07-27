---
id: 06-cloud-networking
slug: /cloud-computing/06-cloud-networking
title: "Chapter 6: Cloud Networking"
sidebar_label: "Chapter 6: Cloud Networking"
sidebar_position: 6
---
# Chapter 6: Cloud Networking

> **Previous:** [Chapter 5: Cloud Database Services](./05-cloud-database.md) | **Next:** [Chapter 7: Cloud Security](./07-cloud-security.md)

## Learning Objectives

After completing this chapter, students will be able to:

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/cloud-computing/06-cloud-networking/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/cloud-computing/06-cloud-networking/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/cloud-computing/06-cloud-networking/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/cloud-computing/06-cloud-networking/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/cloud-computing/06-cloud-networking/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/cloud-computing/06-cloud-networking/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


1. Design Virtual Private Cloud (VPC) architectures with subnets, route tables, and gateways.
2. Configure security groups and network ACLs for traffic filtering.
3. Implement load balancers to distribute traffic across multiple targets.
4. Establish private connectivity between on-premises and cloud networks.
5. Design global network architectures using Direct Connect, VPN, and peering.
6. Configure DNS resolution and routing policies with Route 53.
7. Apply traffic shaping and bandwidth management strategies.
8. Troubleshoot network connectivity using cloud-native diagnostic tools.

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|--------------------|
| VPC Design | Virtual network in the cloud | Isolation through CIDR + subnets |
| Security Groups | Stateful instance-level firewall | Allow rules only, evaluated as a whole |
| Network ACLs | Stateless subnet-level firewall | Allow/deny rules, evaluated in order |
| Load Balancers | ALB, NLB ? distribute traffic across targets | Health checks + auto-scaling integration |
| VPN | Encrypted tunnels via public internet | Simple site-to-site connectivity |
| Direct Connect | Dedicated private bandwidth to cloud | Consistent latency, higher capacity |
| DNS | Route 53 ? global DNS resolution | Routing policies: latency, geo, weighted |
| Peering | Connect VPCs across accounts/regions | Non-transitive, no overlapping CIDRs |

## Chapter Roadmap

\\\mermaid
flowchart LR
    A[Cloud Networking] --> B[VPC and Subnets]
    A --> C[Security: SGs + NACLs]
    A --> D[Load Balancers]
    A --> E[Hybrid Connectivity]
    B --> F[Route Tables + IGW + NAT]
    C --> G[Tiered Security Architecture]
    D --> H[ALB / NLB / GLB]
    E --> I[VPN / Direct Connect / Peering]
\\\

## Theory

### 6.1 VPC Architecture


A Virtual Private Cloud (VPC) is a logically isolated section of the cloud where you launch resources.

**CIDR Notation:** Defines the IP address range for the VPC (e.g., 10.0.0.0/16 = 65,536 addresses). Choose CIDR blocks that don't overlap with on-premises networks.

\\\mermaid
graph TB
    subgraph "VPC - 10.0.0.0/16"
        subgraph "Public Subnet A - 10.0.1.0/24"
            WEB1[Web Server 1]
            WEB2[Web Server 2]
            ALB[Application Load Balancer]
        end
        
        subgraph "Private Subnet A - 10.0.2.0/24"
            APP1[App Server 1]
            APP2[App Server 2]
        end
        
        subgraph "DB Subnet A - 10.0.3.0/24"
            DB1[RDS Primary]
            DB2[RDS Standby]
        end
        
        IGW[Internet Gateway]
        NAT[NAT Gateway]
        
        IGW --> ALB
        APP1 --> NAT
        APP2 --> NAT
        NAT --> IGW
    end
    
    INTERNET[Internet] --> IGW
\\\

**Key VPC Components:**

| Component | Purpose | Direction |
|-----------|---------|-----------|
| Internet Gateway (IGW) | Allows inbound/outbound internet access | Bidirectional |
| NAT Gateway | Allows private subnets to reach internet | Outbound only |
| Route Table | Controls traffic between subnets and gateways | Per-subnet association |
| VPC Peering | Connects VPCs privately | Direct, non-transitive |
| Transit Gateway | Hub for connecting multiple VPCs/on-prem | Central routing |

### 6.2 Security Groups vs Network ACLs


\\\mermaid
graph TB
    subgraph "Network Perimeter"
        SUBNET[Subnet Boundary]
        ACL[Network ACL - Stateless]
        SG[Security Group - Stateful]
        INSTANCE[EC2 Instance]
        
        TRAFFIC[Incoming Traffic] --> ACL
        ACL -- "Allow/Deny rules<br/>Evaluated by number" --> SG
        SG -- "Allow rules only<br/>Evaluated as a whole" --> INSTANCE
    end
\\\

| Feature | Security Group | Network ACL |
|---------|---------------|-------------|
| Scope | Instance-level (ENI) | Subnet-level |
| State | Stateful (return traffic auto-allowed) | Stateless (must allow both directions) |
| Rules | Allow only | Allow and Deny |
| Evaluation | All rules evaluated together | Rules evaluated in number order |
| Default | Deny all inbound, allow all outbound | Allow all inbound and outbound |
| Use Case | Instance-level micro-segmentation | Subnet-level guard rails |

\\\	ypescript
interface SecurityGroupRule {
  protocol: "tcp" | "udp" | "icmp";
  fromPort: number;
  toPort: number;
  source: string;
  description: string;
}

interface SecurityGroup {
  groupName: string;
  description: string;
  vpcId: string;
  ingressRules: SecurityGroupRule[];
  egressRules: SecurityGroupRule[];
}

function createWebSecurityGroup(vpcId: string): SecurityGroup {
  return {
    groupName: "web-sg",
    description: "Web tier security group",
    vpcId: vpcId,
    ingressRules: [
      {
        protocol: "tcp",
        fromPort: 80,
        toPort: 80,
        source: "0.0.0.0/0",
        description: "HTTP from anywhere",
      },
      {
        protocol: "tcp",
        fromPort: 443,
        toPort: 443,
        source: "0.0.0.0/0",
        description: "HTTPS from anywhere",
      },
      {
        protocol: "tcp",
        fromPort: 22,
        toPort: 22,
        source: "10.0.0.0/8",
        description: "SSH from internal network",
      },
    ],
    egressRules: [
      {
        protocol: "tcp",
        fromPort: 443,
        toPort: 443,
        source: "0.0.0.0/0",
        description: "Allow outbound HTTPS",
      },
    ],
  };
}

function createAppSecurityGroup(vpcId: string): SecurityGroup {
  return {
    groupName: "app-sg",
    description: "Application tier ? only accessible from web tier",
    vpcId: vpcId,
    ingressRules: [
      {
        protocol: "tcp",
        fromPort: 3000,
        toPort: 3000,
        source: "sg-web-sg", // Reference to web SG
        description: "App traffic from web tier only",
      },
    ],
    egressRules: [],
  };
}
\\\

### 6.3 Load Balancers


Cloud load balancers distribute traffic across multiple targets (EC2 instances, Lambda, IP addresses).

**Types of Load Balancers (AWS):**

| Type | Layer | Protocol | Best For |
|------|-------|----------|----------|
| ALB (Application) | L7 | HTTP, HTTPS, gRPC | Web apps, microservices |
| NLB (Network) | L4 | TCP, UDP, TLS | High-throughput, static IP |
| GLB (Gateway) | L3 | IP | Virtual appliances, firewall |

**Load Balancing Algorithms:**

- **Round Robin:** Default. Distributes evenly across targets.
- **Least Outstanding Requests:** Sends to targets with fewest pending requests.
- **Weighted:** Routes based on target weights (canary deployments).

\\\mermaid
sequenceDiagram
    participant Client as Client
    participant ALB as ALB
    participant TG1 as Target Group 1 v1
    participant TG2 as Target Group 2 v2 (Canary)

    Client->>ALB: HTTP Request
    ALB->>ALB: Evaluate listener rules
    
    alt 90% Traffic
        ALB->>TG1: Forward to v1
        TG1-->>ALB: Response
    else 10% Traffic
        ALB->>TG2: Forward to v2 (canary)
        TG2-->>ALB: Response
    end
    
    ALB-->>Client: HTTP Response
\\\

### 6.4 Hybrid Connectivity


**VPN vs Direct Connect:**

| Feature | Site-to-Site VPN | Direct Connect |
|---------|-----------------|----------------|
| Connectivity | Over public internet | Dedicated private line |
| Bandwidth | Up to 1.25 Gbps per tunnel | 50 Mbps to 100 Gbps |
| Latency | Variable (internet dependent) | Consistent, low |
| Security | IPSec encryption | Private (can add encryption) |
| Setup Time | Hours | Weeks to months |
| Cost | Low (per hour + data out) | High (port hours + data out) |
| SLA | No SLA on VPN | 99.99% availability |

\\\mermaid
graph TB
    subgraph "On-Premises"
        DC[Data Center]
        CGW[Customer Gateway]
        ROUTER[Router]
    end
    
    subgraph "Cloud (AWS)"
        VGW[Virtual Private Gateway]
        VPC[VPC]
    end
    
    subgraph "VPN Connection"
        T1[Tunnel 1 - Primary]
        T2[Tunnel 2 - Secondary]
    end
    
    DC --> ROUTER
    ROUTER --> CGW
    CGW --> T1
    CGW --> T2
    T1 --> VGW
    T2 --> VGW
    VGW --> VPC
\\\

### 6.5 DNS and Route 53


**Amazon Route 53** provides DNS resolution, domain registration, and health checking.

**Routing Policies:**

| Policy | Purpose | Example |
|--------|---------|---------|
| Simple | Route to a single resource | Basic A record |
| Weighted | Route to multiple resources with weights | Canary deployments |
| Latency | Route to lowest-latency region | Global applications |
| Geolocation | Route based on user location | Content restrictions |
| Failover | Route to primary, fail to secondary | Disaster recovery |
| Multi-Value | Return multiple healthy records | Simple load balancing |

**DNS Resolution Flow:**

\\\mermaid
sequenceDiagram
    participant User as User Browser
    participant Recursive as Recursive Resolver
    participant Root as Root DNS
    participant TLD as TLD (.com)
    participant Route53 as Route 53 (example.com)
    participant ALB as ALB IP

    User->>Recursive: example.com?
    Recursive->>Root: Where is .com?
    Root-->>Recursive: Go to .com TLD servers
    Recursive->>TLD: Where is example.com?
    TLD-->>Recursive: Go to ns-xxx.awsdns-xx.com
    Recursive->>Route53: example.com?
    Route53-->>Recursive: ALB IP address (latency-based)
    Recursive->>ALB: HTTP request
    ALB-->>User: HTTP response
\\\

### 6.6 VPC Peering and Transit Gateway


**VPC Peering:** Direct network connection between two VPCs. Non-transitive ? if VPC A peers with B and B peers with C, A cannot reach C through B.

**Transit Gateway:** A hub that connects multiple VPCs and on-premises networks through a central router.

\\\mermaid
graph TB
    subgraph "Transit Gateway Hub"
        TG[Transit Gateway]
    end
    
    subgraph "VPC A - Production"
        A1[App]
    end
    
    subgraph "VPC B - Staging"
        B1[App]
    end
    
    subgraph "VPC C - Shared Services"
        C1[Logging]
        C2[Monitoring]
        C3[AD]
    end
    
    subgraph "On-Premises"
        DC[Data Center]
    end
    
    A1 --> TG
    B1 --> TG
    C1 --> TG
    C2 --> TG
    C3 --> TG
    DC --> TG
    
    TG --> TG
\\\

## Examples

### Example 6.1: VPC with Public and Private Subnets

\\\ash
aws ec2 create-vpc --cidr-block 10.0.0.0/16
aws ec2 create-subnet --vpc-id vpc-xxx --cidr-block 10.0.1.0/24
aws ec2 create-internet-gateway
aws ec2 attach-internet-gateway --vpc-id vpc-xxx --internet-gateway-id igw-xxx
aws ec2 create-route-table --vpc-id vpc-xxx
aws ec2 create-route --route-table-id rtb-xxx --destination-cidr-block 0.0.0.0/0 --gateway-id igw-xxx
\\\

### Example 6.2: TypeScript Network Architecture Validator

\\\	ypescript
interface SubnetConfig {
  name: string;
  cidr: string;
  availabilityZone: string;
  isPublic: boolean;
}

interface VPCPeerConfig {
  sourceVpc: string;
  destinationVpc: string;
  sourceCidr: string;
  destCidr: string;
}

class NetworkArchitect {
  private subnets: SubnetConfig[] = [];

  addSubnet(config: SubnetConfig): void {
    if (this.cidrOverlaps(config.cidr)) {
      throw new Error("CIDR overlaps with existing subnet: " + config.cidr);
    }
    this.subnets.push(config);
  }

  private cidrOverlaps(cidr: string): boolean {
    return this.subnets.some((s) => s.cidr === cidr);
  }

  validatePeering(config: VPCPeerConfig): string[] {
    const issues: string[] = [];

    if (config.sourceCidr === config.destCidr) {
      issues.push("VPCs cannot peer with overlapping CIDR blocks");
    }

    return issues;
  }

  generateRouteTable(): Record&lt;string, string&gt; {
    const routes: Record&lt;string, string&gt; = {};
    for (const subnet of this.subnets) {
      routes[subnet.name] = subnet.isPublic ? "igw-xxx" : "nat-xxx";
    }
    return routes;
  }

  generateNatGateway(count: number): string[] {
    const azs = [...new Set(this.subnets.map((s) => s.availabilityZone))];
    return Array.from({ length: Math.min(count, azs.length) }, (_, i) =>
      "nat-" + azs[i]
    );
  }
}

const architect = new NetworkArchitect();
architect.addSubnet({
  name: "web",
  cidr: "10.0.1.0/24",
  availabilityZone: "us-east-1a",
  isPublic: true,
});
architect.addSubnet({
  name: "app",
  cidr: "10.0.2.0/24",
  availabilityZone: "us-east-1a",
  isPublic: false,
});
architect.addSubnet({
  name: "db",
  cidr: "10.0.3.0/24",
  availabilityZone: "us-east-1b",
  isPublic: false,
});

console.log("Route table:", architect.generateRouteTable());
console.log("NAT Gateways:", architect.generateNatGateway(2));
\\\

> **One-Sentence Takeaway:** A well-designed VPC with tiered subnets, stateful security groups, and stateless NACLs provides defense-in-depth for cloud workloads.

> **Pro Tip:** Use VPC endpoints (Gateway and Interface) to privately access AWS services like S3 and DynamoDB without traversing the public internet ? eliminates the need for NAT gateways for service access.

> **Warning:** VPC Peering is non-transitive. If you need hub-and-spoke routing between multiple VPCs and on-premises, use Transit Gateway. Peering alone cannot route through intermediate VPCs.

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| VPC | Virtual private cloud network | CIDR-isolated segment | All cloud resources |
| Security Group | Instance-level stateful firewall | Allow rules, auto-return traffic | Instance micro-segmentation |
| NACL | Subnet-level stateless firewall | Numbered allow/deny rules | Subnet guard rails |
| ALB | L7 application load balancer | HTTP/HTTPS aware | Web traffic distribution |
| NLB | L4 network load balancer | TCP/UDP, static IP | High-throughput scenarios |
| VPN | Encrypted tunnel over internet | Quick setup, variable latency | Branch office connectivity |
| Direct Connect | Dedicated private line | Consistent performance | Data center integration |
| Route 53 | Cloud DNS service | Global routing policies | Traffic management |

## Quick Reference

| Category | Key Concepts | Notes |
|----------|-------------|-------|
| **VPC Design** | CIDR, subnets, route tables, IGW, NAT | Plan CIDR to avoid overlaps |
| **Security** | Security Groups (stateful), NACLs (stateless) | SG allow only, NACL allow+deny |
| **Load Balancing** | ALB (L7), NLB (L4), GLB (L3) | Health checks are mandatory |
| **Hybrid** | VPN, Direct Connect, Transit Gateway | DX for prod, VPN for backup |
| **DNS** | Route 53 routing policies | Latency-based for global apps |
| **Peering** | VPC Peering, Transit Gateway | TG for hub-and-spoke |

## Cross-Application Matrix

| Technique | Cloud Architecture | DevOps | Security | Enterprise |
|-----------|-------------------|--------|----------|------------|
| VPC Isolation | Multi-account strategy | Environment separation | Network segmentation | Compliance boundaries |
| Security Groups | Tiered architecture | CI/CD security scanning | Micro-segmentation | Zero trust networking |
| Load Balancers | Auto-scaling integration | Blue/green deployments | TLS termination | High availability |
| VPN/DX | Hybrid cloud | Build pipeline connectivity | Encrypted data in transit | Data center integration |
| Transit Gateway | Hub-and-spoke | Shared services access | Centralized inspection | Multi-account networking |

## Chapter Quiz

1. What is the key difference between a Security Group and a Network ACL?
   - A) SGs are cheaper than NACLs
   - B) SGs are stateful and allow-only; NACLs are stateless with allow/deny
   - C) SGs apply to subnets; NACLs apply to instances
   - D) There is no difference

<details>
<summary>Answer&lt;/summary&gt;
**B) SGs are stateful and allow-only; NACLs are stateless with allow/deny.** Security Groups automatically allow return traffic; NACLs require explicit rules for both directions. SGs support only allow rules; NACLs support both allow and deny with numbered evaluation.
</details>

2. Which AWS load balancer type operates at Layer 4 (TCP/UDP)?
   - A) Application Load Balancer
   - B) Network Load Balancer
   - C) Gateway Load Balancer
   - D) Classic Load Balancer

<details>
<summary>Answer&lt;/summary&gt;
**B) Network Load Balancer.** NLB operates at the transport layer (L4) and is designed for high-throughput TCP/UDP traffic requiring static IP addresses.
</details>

3. Why might you choose Direct Connect over Site-to-Site VPN?
   - A) Direct Connect is cheaper
   - B) Direct Connect provides consistent low latency and higher bandwidth
   - C) Direct Connect is easier to set up
   - D) VPN does not encrypt traffic

<details>
<summary>Answer&lt;/summary&gt;
**B) Direct Connect provides consistent low latency and higher bandwidth.** Direct Connect uses a dedicated private line, offering consistent performance from 50 Mbps to 100 Gbps. VPN uses the public internet with variable performance and lower bandwidth limits.
</details>

4. What is the limitation of VPC Peering?
   - A) It requires a VPN connection
   - B) It is non-transitive ? traffic cannot route through an intermediate VPC
   - C) It only works within the same region
   - D) It only works between accounts in the same organization

<details>
<summary>Answer&lt;/summary&gt;
**B) It is non-transitive ? traffic cannot route through an intermediate VPC.** If VPC A is peered with B and B with C, A cannot reach C through B. For hub-and-spoke routing, use Transit Gateway.
</details>

5. Which Route 53 routing policy is best for distributing traffic globally to the lowest-latency region?
   - A) Simple routing
   - B) Weighted routing
   - C) Latency-based routing
   - D) Geolocation routing

<details>
<summary>Answer&lt;/summary&gt;
**C) Latency-based routing.** Latency-based routing directs traffic to the region that provides the lowest latency for the user. Geolocation routing routes based on the user's physical location, which is not the same as latency.
</details>

### TypeScript: CIDR Calculator

```typescript
function cidrRange(cidr: string): { network: string; broadcast: string; count: number } {
  const [base, bits] = cidr.split("/");
  const mask = ~(2 ** (32 - parseInt(bits)) - 1) >>> 0;
  const ip = base.split(".").reduce((acc, oct) => (acc << 8) + parseInt(oct), 0) >>> 0;
  const network = ip & mask;
  const count = 2 ** (32 - parseInt(bits));
  const broadcast = network | (count - 1);
  const toIp = (n: number) => [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join(".");
  return { network: toIp(network), broadcast: toIp(broadcast), count };
}

function availableSubnets(vpcCidr: string, subnetSize: number): string[] {
  const { network, count } = cidrRange(vpcCidr);
  const ips = network.split(".").reduce((acc, oct) => (acc << 8) + parseInt(oct), 0) >>> 0;
  const subnetsPerVpc = count / subnetSize;
  return Array.from({ length: subnetsPerVpc }, (_, i) => {
    const start = ips + i * subnetSize;
    const bits = 32 - Math.log2(subnetSize);
    return `${[(start >>> 24) & 255, (start >>> 16) & 255, (start >>> 8) & 255, start & 255].join(".")}/${bits}`;
  });
}
// console.log(availableSubnets("10.0.0.0/16", 256)); // 256 /24 subnets
```

### TypeScript: VPC Subnet & NAT Gateway Calculator

```typescript
interface SubnetPlan {
  cidr: string;
  az: string;
  type: "public" | "private" | "database";
  availableIPs: number;
  natGatewayRequired: boolean;
  natGatewayMonthlyCost: number;
}

class VPCDesigner {
  private vpcCIDR: string;
  private azs: string[];

  constructor(vpcCIDR: string, azs: string[]) {
    this.vpcCIDR = vpcCIDR;
    this.azs = azs;
  }

  private cidrToMask(cidr: string): number { return parseInt(cidr.split("/")[1]); }

  private maskToIPs(mask: number): number { return Math.pow(2, 32 - mask) - 5; }

  private generateSubnetCIDR(baseCIDR: string, index: number, newMask: number): string {
    const baseMask = this.cidrToMask(baseCIDR);
    const baseIP = 0;
    const blockSize = Math.pow(2, 32 - newMask);
    const baseBlock = Math.pow(2, 32 - baseMask);
    const offset = index * blockSize;
    const octets = [
      (baseIP + (offset >> 24)) & 255,
      (baseIP + (offset >> 16)) & 255,
      (baseIP + (offset >> 8)) & 255,
      (baseIP + offset) & 255,
    ];
    return `${octets.join(".")}/${newMask}`;
  }

  designSubnets(publicPerAZ: number, privatePerAZ: number, subnetMask: number): SubnetPlan[] {
    const plans: SubnetPlan[] = [];
    let index = 0;

    for (const az of this.azs) {
      for (let p = 0; p < publicPerAZ; p++) {
        plans.push({
          cidr: this.generateSubnetCIDR(this.vpcCIDR, index++, subnetMask),
          az, type: "public",
          availableIPs: this.maskToIPs(subnetMask),
          natGatewayRequired: false,
          natGatewayMonthlyCost: 0,
        });
      }
      for (let p = 0; p < privatePerAZ; p++) {
        plans.push({
          cidr: this.generateSubnetCIDR(this.vpcCIDR, index++, subnetMask),
          az, type: "private",
          availableIPs: this.maskToIPs(subnetMask),
          natGatewayRequired: true,
          natGatewayMonthlyCost: 32.40,
        });
      }
    }
    return plans;
  }

  calculateMonthlyNATCost(subnets: SubnetPlan[]): number {
    const uniqueAZs = new Set(subnets.filter((s) => s.natGatewayRequired).map((s) => s.az));
    return uniqueAZs.size * 32.40 + uniqueAZs.size * 0.045 * 730;
  }

  summarize(subnets: SubnetPlan[]): { totalIPs: number; publicSubnets: number; privateSubnets: number; natCost: number } {
    return {
      totalIPs: subnets.reduce((s, n) => s + n.availableIPs, 0),
      publicSubnets: subnets.filter((s) => s.type === "public").length,
      privateSubnets: subnets.filter((s) => s.type === "private").length,
      natCost: this.calculateMonthlyNATCost(subnets),
    };
  }
}

const designer = new VPCDesigner("10.0.0.0/16", ["us-east-1a", "us-east-1b", "us-east-1c"]);
const subnets = designer.designSubnets(1, 2, 24);
console.log("VPC design:", JSON.stringify(designer.summarize(subnets), null, 2));
console.log("Subnet plan:", subnets.map((s) => `${s.cidr} (${s.az}, ${s.type})`).join(", "));
```

### TypeScript: Traffic Flow Monitor

```typescript
interface FlowRecord {
  sourceIP: string;
  destIP: string;
  sourcePort: number;
  destPort: number;
  protocol: "TCP" | "UDP";
  bytes: number;
  packets: number;
  timestamp: number;
  action: "allow" | "deny";
}

class TrafficFlowMonitor {
  private flows: FlowRecord[] = [];
  private alertThresholds = { deniedPercent: 20, bandwidthPerSecond: 1e9 };

  recordFlow(flow: FlowRecord): void {
    this.flows.push(flow);
    this.checkAlerts();
  }

  private checkAlerts(): void {
    const window = this.flows.filter((f) => Date.now() - f.timestamp < 60000);
    const denied = window.filter((f) => f.action === "deny").length;
    const deniedPercent = window.length > 0 ? (denied / window.length) * 100 : 0;
    const bandwidth = window.reduce((s, f) => s + f.bytes, 0) / 60;

    if (deniedPercent > this.alertThresholds.deniedPercent) {
      console.log(`ALERT: ${deniedPercent.toFixed(1)}% traffic denied (threshold: ${this.alertThresholds.deniedPercent}%)`);
    }
    if (bandwidth > this.alertThresholds.bandwidthPerSecond) {
      console.log(`ALERT: Bandwidth ${(bandwidth / 1e9).toFixed(2)} Gbps exceeds threshold`);
    }
  }

  getTopTalkers(limit: number = 5): { ip: string; bytes: number }[] {
    const aggregated: Record<string, number> = {};
    this.flows.forEach((f) => { aggregated[f.sourceIP] = (aggregated[f.sourceIP] || 0) + f.bytes; });
    return Object.entries(aggregated)
      .map(([ip, bytes]) => ({ ip, bytes }))
      .sort((a, b) => b.bytes - a.bytes)
      .slice(0, limit);
  }
}

const monitor = new TrafficFlowMonitor();
for (let i = 0; i < 100; i++) {
  monitor.recordFlow({
    sourceIP: `10.0.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`,
    destIP: "10.0.1.100", sourcePort: 30000 + i, destPort: 443,
    protocol: "TCP", bytes: Math.random() * 10000, packets: Math.ceil(Math.random() * 20),
    timestamp: Date.now() - Math.floor(Math.random() * 30000),
    action: Math.random() > 0.85 ? "deny" : "allow",
  });
}
console.log("Top talkers:", JSON.stringify(monitor.getTopTalkers(), null, 2));
```

### TypeScript: Subnet Calculator & Peering Validator

```typescript
class SubnetCalculator {
  calculate(cidr: string, subnetSize: number): { totalIPs: number; usableIPs: number; subnetMask: string; maxSubnets: number } {
    const maskBits = 32 - Math.log2(subnetSize);
    const [, prefix] = cidr.split("/");
    const totalIPs = Math.pow(2, 32 - parseInt(prefix));
    const usable = Math.max(0, subnetSize - 5); // AWS reserves 5 IPs per subnet
    const maxSubnets = Math.floor(totalIPs / subnetSize);
    return { totalIPs, usableIPs: usable, subnetMask: `${Math.ceil(maskBits)}`, maxSubnets };
  }
}

class PeeringValidator {
  validate(peerings: { vpcId: string; cidr: string; peerVpcId: string; peerCidr: string }[]): { valid: boolean; overlaps: { vpc1: string; vpc2: string; overlappingCIDR: string }[] } {
    const overlaps: { vpc1: string; vpc2: string; overlappingCIDR: string }[] = [];
    for (let i = 0; i < peerings.length; i++) {
      for (let j = i + 1; j < peerings.length; j++) {
        const [a1, b1] = peerings[i].cidr.split("/").map(Number);
        const [a2, b2] = peerings[j].cidr.split("/").map(Number);
        const minBits = Math.min(b1, b2);
        const mask1 = a1 >>> (32 - minBits);
        const mask2 = a2 >>> (32 - minBits);
        if (mask1 === mask2) {
          overlaps.push({ vpc1: peerings[i].vpcId, vpc2: peerings[j].vpcId, overlappingCIDR: `${Math.min(b1, b2)}-bit overlap` });
        }
      }
    }
    return { valid: overlaps.length === 0, overlaps };
  }
}

const sc = new SubnetCalculator();
console.log("Subnet (/20 ? /24):", JSON.stringify(sc.calculate("10.0.0.0/20", 256)));

const pv = new PeeringValidator();
const result = pv.validate([
  { vpcId: "vpc-1", cidr: "10.0.0.0/16", peerVpcId: "vpc-2", peerCidr: "10.0.0.0/24" },
  { vpcId: "vpc-3", cidr: "10.1.0.0/16", peerVpcId: "vpc-4", peerCidr: "10.1.0.0/24" },
]);
console.log("Overlap check:", result.overlaps.length > 0 ? `Overlap detected: ${result.overlaps[0].vpc1} ? ${result.overlaps[0].vpc2}` : "No overlaps");
```
```


// cloud networking
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
  await proc.add({ id: '1', name: 'cloud networking', data: { topic: 'iaas-paas-saas-cloud-native' } })
  await proc.runAll()
  console.log('Stats:', proc.getStats())
}
main().catch(console.error)
export { Processor, Task }

// cloud networking - additional TS implementations

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
  log.info('Cache demo started', { course: 'cloud-computing', chapter: 'cloud networking' })
  const v = cache.get("key1")
  console.log('Cached:', v)
  console.log('Hash:', computeHash('cloud-services'))
}
demo()
export { Cache, Logger, computeHash, CacheEntry }
## Summary

- VPCs isolate cloud resources within user-defined IP address ranges.
- Security groups (stateful) and NACLs (stateless) provide layered firewall protection.
- Load balancers distribute traffic and perform health checks across targets.
- VPN and Direct Connect provide secure hybrid connectivity to on-premises.
- Transit Gateway enables hub-and-spoke routing across VPCs and on-prem networks.
- Route 53 offers latency, geo, weighted, and failover routing policies.
- Multi-AZ architecture is essential for high availability in cloud networking.
- A VPC provides network isolation with CIDR-defined IP ranges and subnet segmentation.
- Security Groups are stateful instance-level firewalls; NACLs are stateless subnet-level firewalls.
- ALB (L7) and NLB (L4) distribute traffic across targets with health check integration.
- VPN provides quick encrypted connectivity; Direct Connect offers dedicated high-bandwidth links.
- Transit Gateway enables hub-and-spoke routing across multiple VPCs and on-premises.
- Route 53 routing policies (latency, weighted, geo, failover) enable global traffic management.
- VPC Peering is non-transitive; use Transit Gateway for complex multi-VPC connectivity.

## Exercises

### Review Questions

1. Explain the difference between Security Groups and Network ACLs in terms of state and rule evaluation.
2. When would you use an NLB instead of an ALB?
3. Describe the architecture of a three-tier VPC with public, private, and database subnets.
4. Compare Site-to-Site VPN vs Direct Connect in terms of latency, bandwidth, and setup time.
5. What is the purpose of a NAT Gateway in a VPC?
6. Explain the different Route 53 routing policies and when to use each.
7. What is Transit Gateway and when would you use it instead of VPC Peering?

### Application Problems

1. Design a VPC architecture for a global e-commerce application with web, app, and database tiers across two Availability Zones.

2. A company has 20 VPCs across 4 AWS accounts. Propose a networking strategy that allows all VPCs to communicate and share services like Active Directory and logging.

3. Write a TypeScript function that calculates monthly networking cost given NAT Gateway hours, data transfer volume, and Direct Connect port hours.

4. Design a hybrid network architecture for connecting a corporate data center to AWS with both primary (high-bandwidth) and backup (low-cost) connectivity options.

5. Configure a load balancing strategy for a global web application that requires canary deployments, health-based routing, and geographic traffic distribution.

### Challenge Problem

Design a multi-region network architecture for a global SaaS platform with the following requirements: 1) Primary region us-east-1, DR region eu-west-2, 2) Active-active web tier across both regions, 3) Database writes only in primary with cross-region replication, 4) Private connectivity between on-premises data center and both cloud regions, 5) Latency-based global traffic distribution, 6) Centralized inspection and logging across all VPCs, 7) No overlapping CIDR blocks. Propose specific services, configurations, and a traffic flow diagram.
