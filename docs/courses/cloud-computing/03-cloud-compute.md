# Chapter 3: Cloud Compute Services

## Learning Objectives

After completing this chapter, students will be able to:

1. Compare and contrast compute services across AWS (EC2), Azure (Virtual Machines), and GCP (Compute Engine).
2. Categorize instance families and select the appropriate type for specific workload profiles.
3. Evaluate pricing models including on-demand, spot/preemptible, and commitment-based options.
4. Implement automated scaling using Auto Scaling Groups, Scale Sets, and Managed Instance Groups.
5. Configure persistent block storage and instance-store volumes.
6. Design high-availability architectures using placement groups and availability zones.
7. Deploy and configure multi-layer load balancing solutions.

## Theory

### 3.1 The Virtual Machine Model in the Cloud

Cloud compute services provide resizable, on-demand virtual machine (VM) instances. These services form the fundamental "Infrastructure as a Service" (IaaS) layer. While the underlying hypervisors vary—AWS uses Nitro (KVM-based), Azure uses Hyper-V, and GCP uses KVM—the abstraction provided to the consumer is a consistent set of virtual CPU (vCPU), memory, storage, and networking resources.

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

- **General Purpose:** Balanced resources. Ideal for web servers, development environments, and small databases.
- **Compute Optimized:** High vCPU-to-memory ratio. Used for batch processing, media transcoding, and scientific modeling.
- **Memory Optimized:** High memory-to-vCPU ratio. Designed for in-memory databases (SAP HANA, Redis) and real-time analytics.
- **Storage Optimized:** Focused on high-throughput, low-latency local NVMe storage. Suited for NoSQL databases and data warehousing.
- **Accelerated Computing:** Equipped with GPUs (NVIDIA) or TPUs (GCP) for machine learning, 3D rendering, and financial modeling.

![Cloud Compute Instances](../assets/images/diagrams/cloud-computing/ch03-compute-instances.png)

### 3.4 Lifecycle and Pricing Models

Cloud compute economics allow for significant cost optimization through tiered pricing:

- **On-Demand:** Pay-per-second or per-hour with no commitment. Highest cost but maximum flexibility.
- **Spot (AWS/Azure) / Preemptible (GCP):** Access to spare capacity at up to 90% discount. Instances can be reclaimed by the provider with short notice (30s to 2min). Best for fault-tolerant, stateless workloads.
- **Reserved / Committed Use:** Discount for committing to 1- or 3-year usage. AWS uses Reserved Instances and Savings Plans; GCP uses Committed Use Discounts (CUDs); Azure uses Reserved Virtual Machine Instances.
- **Dedicated Hardware:** Physical servers dedicated to a single tenant. Necessary for specific licensing (BYOL) or strict regulatory compliance.

### 3.5 Storage for Compute

VMs typically interact with two types of block storage:

1. **Ephemeral / Instance Store:** Physically attached to the host computer. Offers high IOPS and low latency but data is lost if the instance is stopped or terminated. Used for swap space, caches, and temporary data.
2. **Persistent Block Storage:** Network-attached storage that persists independently of the VM lifecycle. Can be detached from one instance and attached to another.
   - **Performance Tiers:** Standard HDD, Balanced SSD, High-Performance SSD (Provisioned IOPS), and Ultra Disks for sub-millisecond latency.

### 3.6 Scaling and Availability Patterns

**Horizontal Scaling** involves adding more instances to a fleet, while **Vertical Scaling** involves increasing the size of an existing instance.

- **Auto Scaling:** Providers use metrics (CPU utilization, request count) to dynamically adjust the number of instances.
- **Availability Sets / Placement Groups:** Strategies to ensure VMs are placed on different physical racks or power sources to avoid correlated failures.
- **Health Checks:** The scaling service monitors instance health and automatically replaces failed instances.

### 3.7 Load Balancing

Load balancers distribute incoming traffic across a pool of healthy VM instances.

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

## Summary

- Cloud compute provides virtualized hardware (IaaS) through VMs.
- Compute resources are organized into families (General Purpose, Compute, Memory, Storage, GPU).
- Pricing models range from expensive but flexible (On-Demand) to cheap but interruptible (Spot).
- Persistent storage (EBS/PD) survives instance termination, while instance store is ephemeral.
- Horizontal scaling via managed groups ensures application availability and cost efficiency.
- Load balancers (L4/L7) act as the entry point, distributing traffic and performing health checks.

## Exercises

### Review Questions

1. Explain the difference between horizontal and vertical scaling.
2. Under what circumstances should a Spot or Preemptible instance be avoided?
3. What is the difference between a Layer 4 and a Layer 7 load balancer?
4. How does persistent block storage differ from local instance storage?
5. Define "Noisy Neighbor" and explain how dedicated hosts mitigate this issue.

### Application Problems

1. A news website expects a massive traffic spike during an election. The current load is 2 VMs. Recommend a scaling policy and load balancer configuration to handle the spike while maintaining 99.9% availability.
2. A developer needs to run a 24-hour batch processing job that is checkpointed (saves state every 10 minutes). Compare the cost of using an On-Demand m5.large instance versus a Spot instance for this task.
3. Design a high-availability architecture for a web application using two Availability Zones. Specify the components required to ensure the app stays online if one AZ fails.

### Challenge Problem

A company is migrating a legacy application that requires a specific hardware ID for licensing and cannot be scaled horizontally. The application is mission-critical and requires 128GB of RAM. Propose a cloud compute architecture that addresses: 1) Hardware-dependent licensing, 2) High availability despite no horizontal scaling, 3) Performance consistency, and 4) Cost-effective disaster recovery in a different region.
