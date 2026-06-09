# Chapter 3: AWS Compute

## Learning Objectives

After completing this chapter, students will be able to:

1. Describe EC2 instance types and their appropriate use cases.
2. Compare EC2 pricing models and recommend the most cost-effective option for a given workload.
3. Create and configure AMIs, security groups, and key pairs.
4. Implement EBS volumes including snapshots, encryption, and performance optimization.
5. Configure placement groups to optimize application performance.
6. Design auto scaling groups with launch templates.
7. Deploy and configure Application Load Balancers, Network Load Balancers, and Classic Load Balancers.

## Theory

### 3.1 Amazon EC2 Overview

Amazon Elastic Compute Cloud (EC2) is the core compute service of AWS, providing resizable virtual machines in the cloud. EC2 fundamentally changed infrastructure provisioning by allowing users to launch instances in minutes rather than the weeks required for physical server procurement. EC2 instances run on Xen and KVM hypervisors (the Nitro system uses KVM), providing strong isolation between tenants.

The EC2 ecosystem includes the instances themselves, Amazon Machine Images (AMIs) for boot images, Elastic Block Store (EBS) for persistent storage, security groups for firewall rules, key pairs for SSH access, elastic IP addresses for static public IPs, and placement groups for influencing instance placement.

### 3.2 EC2 Instance Types

AWS organizes instance types into families optimized for different workload profiles. Each instance type specifies the virtual CPU count, memory size, storage configuration, and network performance. Instance types follow a naming convention: family generation.size (e.g., m5.large).

**General Purpose (A1, M5, M6g, M7g).** Balanced CPU, memory, and networking. Suitable for web servers, small databases, development environments, and application servers. The M5 instances use Intel Xeon processors; M6g uses AWS Graviton2 ARM processors offering up to 40% better price-performance.

**Compute Optimized (C5, C6g, C7g).** High vCPU-to-memory ratio. Designed for compute-bound applications: batch processing, scientific modeling, gaming servers, media transcoding, and high-performance computing (HPC) workloads. These instances provide the fastest processors in EC2.

**Memory Optimized (R5, R6g, X1, X2gd, z1d).** High memory-to-vCPU ratio. Suited for memory-intensive workloads: large in-memory databases (SAP HANA), real-time analytics, Redis caching, and memory-intensive enterprise applications. X1 instances offer up to 3,904 GB of memory.

**Storage Optimized (I3, I3en, D2, H1).** High, low-latency local storage. I3 instances use NVMe SSDs for high random I/O, suitable for NoSQL databases (Cassandra, MongoDB). D2 instances provide dense HDD storage for data warehousing and MapReduce. H1 instances balance HDD storage for big data applications.

**Accelerated Computing (P3, P4, G4, G5, Inf1, Trainium).** Provide GPU, FPGA, or custom ASIC accelerators. P3 and P4 instances feature NVIDIA Tesla GPUs for machine learning and HPC. G4 and G5 are graphics-optimized for gaming, virtual workstations, and video rendering. Inf1 instances use AWS Inferentia chips for high-throughput, low-latency machine learning inference. Trainium instances use AWS-designed training chips for model training.

**Nitro System.** Modern EC2 instance types (starting from the 5th generation) are built on the AWS Nitro System, a combination of dedicated hardware and lightweight hypervisor. Nitro offloads virtualization functions (networking, storage, management) to dedicated cards, improving performance and security. Nitro instances offer near-bare-metal performance, support for EBS-optimized by default, and enhanced networking up to 100 Gbps.

### 3.3 Pricing Models

**On-Demand Instances.** Pay per second (minimum 60 seconds) with no upfront commitment and no termination fees. Ideal for unpredictable workloads, development and testing, and applications that cannot be interrupted. On-demand is the most flexible but most expensive standard pricing option.

**Spot Instances.** Purchase unused EC2 capacity at discounts of up to 90% compared to on-demand. Spot instances can be interrupted (terminated) by AWS with a two-minute warning when capacity is needed elsewhere. Suitable for fault-tolerant, stateless workloads such as batch processing, big data analytics, CI/CD pipelines, and image rendering. Spot instance interruptions can be handled through Spot Fleet diversification across instance types and availability zones, and using hibernation for state preservation.

**Reserved Instances (RI).** Reserve capacity for a one-year or three-year term in exchange for a significant discount (up to 72% compared to on-demand). RIs require a commitment to a specific instance family in a specific region. Standard RIs provide the largest discount, convertible RIs allow changing instance attributes, and scheduled RIs enable recurring capacity reservations. RIs are optimal for steady-state, predictable workloads.

**Dedicated Hosts.** Provide physical servers dedicated to a single customer, offering visibility and control over instance placement. Dedicated hosts are necessary for licensing requirements (e.g., Windows Server, SQL Server licenses bound to physical cores), regulatory compliance, or security requirements. Dedicated hosts are charged per host (not per instance), making them cost-effective only for high-density deployments.

**Savings Plans.** A flexible pricing model offering lower prices in exchange for a commitment to a consistent amount of compute usage (measured in dollars per hour) for a one-year or three-year term. Compute Savings Plans apply to any EC2 instance, Lambda, and Fargate usage regardless of region, instance family, or OS. EC2 Instance Savings Plans apply to a specific instance family within a region. Savings Plans offer similar discounts to RIs with more flexibility.

**Dedicated Instances.** Instances running on single-tenant hardware but without the visibility and control of dedicated hosts. Dedicated instances are charged per instance (with a per-region fee) and are less flexible than dedicated hosts.

### 3.4 Amazon Machine Images (AMIs)

An AMI is a template containing the operating system, application server, and applications needed to launch an EC2 instance. AMIs are region-specific and consist of a root volume template, launch permissions, and a block device mapping.

**AMI Sources.** AWS-provided AMIs include Amazon Linux 2, Amazon Linux 2023, Ubuntu, Windows Server, Red Hat Enterprise Linux, and SUSE Linux Enterprise Server. Marketplace AMIs are pre-configured by third-party vendors (e.g., Trend Micro, Palo Alto Networks) often with paid licensing. Custom AMIs are created from existing instances or imported from on-premises virtualization platforms.

**AMI Lifecycle.** An instance can be launched from an AMI, configured, and then a new AMI can be created from that instance using the _Create Image_ action. AWS automatically reboots the instance during the creation process to ensure filesystem consistency. Custom AMIs reduce launch time because software is pre-installed, and they provide a consistent, repeatable deployment mechanism.

### 3.5 Security Groups

Security groups act as virtual firewalls controlling inbound and outbound traffic for EC2 instances. They operate at the instance level rather than the subnet level (unlike network ACLs). Security groups support allow rules only; there is no explicit deny — all traffic is denied by default, and only specified traffic is permitted.

**Key Characteristics.** Security groups are stateful: if traffic is allowed inbound, the response is automatically allowed outbound regardless of outbound rules. Security groups can reference other security groups as sources, enabling inter-instance communication rules without IP addresses. A maximum of five security groups can be attached to an instance. Each security group supports up to 60 inbound and 60 outbound rules. Security groups evaluate all rules before making a decision; there is no rule ordering.

### 3.6 Key Pairs

AWS uses public-key cryptography to secure SSH access to Linux instances and RDP access to Windows instances. The public key is stored by AWS; the private key is the responsibility of the user. AWS supports RSA (2048, 3072, 4096-bit) and ED25519 key types. For Windows instances, the administrator password is decrypted using the private key.

### 3.7 User Data

User data allows passing scripts or cloud-init directives to an instance at launch time. Cloud-init, the industry-standard method for early initialization of cloud instances, processes user data and executes configuration tasks such as installing packages, writing files, and configuring services. User data can be specified as a shell script or as cloud-init YAML format. User data executes only on the first boot cycle by default.

### 3.8 Elastic Block Store (EBS)

EBS provides persistent block-level storage volumes for use with EC2 instances. Volumes are automatically replicated within an availability zone to protect from hardware failure.

**Volume Types.** gp3 (general purpose SSD) is the default volume type, offering baseline performance of 3,000 IOPS and 125 MB/s for any volume size, with the ability to independently increase IOPS (up to 16,000) and throughput (up to 1,000 MB/s). gp2 provides baseline performance proportional to volume size (3 IOPS per GB, minimum 100 IOPS) with burst credits. io1 and io2 Block Express provide provisioned IOPS (up to 256,000 for io2) for mission-critical, high-performance databases. st1 (throughput-optimized HDD) is designed for big data and data warehouses. sc1 (cold HDD) is the lowest-cost option for infrequently accessed data.

**Snapshots.** EBS snapshots are point-in-time backups stored in S3. Snapshots are incremental: only data that has changed since the last snapshot is stored, reducing storage costs and backup time. Snapshots can be used to create new volumes in any availability zone, migrate volumes between regions (by copying snapshots), and create AMIs from instance volumes.

**Encryption.** EBS encryption uses AWS KMS to encrypt volumes, snapshots, and AMIs. Encryption occurs on the server hosting the EC2 instance, minimizing performance impact. Encrypted volumes are seamlessly decrypted when read by authorized instances. Data at rest is encrypted, data in transit between the instance and EBS is encrypted, and snapshots of encrypted volumes are also encrypted.

### 3.9 Elastic File System (EFS)

EFS provides scalable, fully managed NFS file storage for use with EC2 instances. Unlike EBS, which can only be attached to one instance at a time, EFS can be mounted concurrently by thousands of EC2 instances across availability zones.

**Performance Modes.** General Purpose (default) is suitable for latency-sensitive applications like web serving and content management. Max I/O is designed for highly parallelized workloads such as big data and media processing, scaling to higher levels of aggregate throughput and IOPS at the cost of slightly higher latency.

**Storage Classes.** Standard is for frequently accessed data. Infrequent Access (IA) is for files accessed less frequently, offering lower storage costs with a retrieval fee. Archive is the lowest-cost option for data accessed fewer than a few times per year. EFS lifecycle management automatically moves files between storage classes based on access patterns.

**Throughput Modes.** Bursting provides throughput proportional to stored data size (50 MB/s per TB). Provisioned allows specifying a fixed throughput independent of data size. Elastic automatically scales throughput based on workload.

### 3.10 Placement Groups

Placement groups influence the physical placement of EC2 instances within an availability zone to optimize application performance.

**Cluster Placement Group.** Instances are placed within a single availability zone in a low-latency, high-throughput network. Best for tightly coupled, high-performance computing (HPC) applications, and workloads requiring low network latency and high inter-instance throughput. All instances must be in the same AZ. Cluster placement groups are limited by the physical rack capacity, so large deployments may require multiple cluster groups.

**Spread Placement Group.** Instances are placed on distinct physical hardware, each on a different rack with independent power and network. Spread groups provide high availability and reduce the risk of correlated failures. A spread placement group supports a maximum of seven instances per availability zone. Suitable for a small number of critical instances that need to be isolated.

**Partition Placement Group.** Instances are divided into logical partitions, each on separate hardware racks with independent power and networking. A partition placement group can host hundreds of EC2 instances, distributed across up to seven partitions per availability zone. Designed for large distributed systems such as HDFS, Cassandra, and Kafka that need to be aware of failure domain boundaries.

### 3.11 Auto Scaling Groups

Auto Scaling Groups (ASGs) automatically adjust the number of EC2 instances in response to demand or a schedule. ASGs maintain a minimum, desired, and maximum number of instances across availability zones.

**Scaling Policies.** Target Tracking Scaling adjusts the instance count to maintain a specific CloudWatch metric target (e.g., average CPU utilization at 50%). Simple Scaling adds or removes instances based on a single alarm. Step Scaling allows different scaling adjustments based on the magnitude of the alarm breach. Scheduled Scaling adjusts capacity on a recurring schedule for predictable traffic patterns. Predictive Scaling uses machine learning to forecast traffic and proactively adjust capacity.

**Health Checks.** ASGs replace instances that fail EC2 status checks, ELB health checks, or custom health checks. The ASG terminates the unhealthy instance and launches a new one in a different availability zone if needed.

**Cooldown and Warm-Up.** The cooldown period prevents ASGs from launching additional instances before previous scaling activities take effect. Warm-up time addresses the time between launching an instance and when it begins serving traffic.

### 3.12 Launch Templates and Launch Configurations

Launch templates specify the configuration parameters for instances launched by ASGs or Spot Fleets. They include the AMI, instance type, key pair, security groups, block device mappings, user data, instance profile (IAM role), and placement group. Launch templates support versioning, allowing smooth updates to instance configurations. AWS recommends launch templates over the older launch configurations.

### 3.13 Elastic Load Balancing

**Application Load Balancer (ALB).** Operates at Layer 7 (HTTP/HTTPS). ALB routes traffic based on content: host headers, path patterns, HTTP methods, query parameters, and source IP. Supports WebSockets, HTTP/2, gRPC, and AWS Lambda as a target. ALB supports weighted target groups, redirects, fixed responses, and authentication integration with Cognito and OIDC. Ideal for microservices and container-based architectures.

**Network Load Balancer (NLB).** Operates at Layer 4 (TCP/UDP/TLS). NLB handles millions of requests per second with ultra-low latency. It preserves the source IP address of clients (not available with ALB by default). NLB supports static IP addresses for whitelisting scenarios. Suitable for TCP/UDP-based applications, extreme performance requirements, and scenarios requiring static or elastic IP addresses.

**Classic Load Balancer (CLB).** The legacy load balancer supporting both Layer 4 and Layer 7, but lacking advanced features of ALB and NLB. CLB is not recommended for new deployments; AWS encourages migration to ALB or NLB.

**Target Groups.** Target groups route requests to registered targets (EC2 instances, Lambda functions, IP addresses). ALB supports a single target group per rule; traffic can be distributed to multiple target groups based on content-based routing rules. NLB supports a single target group per listener. Target group health checks monitor targets at configured intervals.

**Stickiness (Session Affinity).** Session stickiness binds a user's session to a specific target using cookies (application-generated or load balancer-generated). This ensures that subsequent requests from the same user are directed to the same target throughout the session.

## Examples

### Example 3.1: Launch an EC2 Instance with CLI

```bash
# Create a security group
aws ec2 create-security-group \
  --group-name web-sg \
  --description "Security group for web servers"

# Authorize SSH and HTTP access
aws ec2 authorize-security-group-ingress \
  --group-name web-sg \
  --protocol tcp --port 22 --cidr 0.0.0.0/0

aws ec2 authorize-security-group-ingress \
  --group-name web-sg \
  --protocol tcp --port 80 --cidr 0.0.0.0/0

# Launch an EC2 instance
aws ec2 run-instances \
  --image-id ami-0c55b159cbfafe1f0 \
  --instance-type t3.micro \
  --key-name my-key-pair \
  --security-group-ids sg-12345678 \
  --user-data file://user-data.sh \
  --block-device-mappings "[{\"DeviceName\":\"/dev/sda1\",\"Ebs\":{\"VolumeSize\":30,\"VolumeType\":\"gp3\"}}]"
```

### Example 3.2: Create an Auto Scaling Group with ALB

```bash
# Create a launch template
aws ec2 create-launch-template \
  --launch-template-name web-template \
  --launch-template-data file://launch-template-data.json

# Create an ALB
aws elbv2 create-load-balancer \
  --name web-alb \
  --subnets subnet-abc123 subnet-def456 \
  --security-groups sg-12345678

# Create a target group
aws elbv2 create-target-group \
  --name web-targets \
  --protocol HTTP --port 80 \
  --vpc-id vpc-12345678 \
  --health-check-path /health

# Create an auto scaling group
aws autoscaling create-auto-scaling-group \
  --auto-scaling-group-name web-asg \
  --launch-template LaunchTemplateName=web-template \
  --min-size 2 --max-size 10 --desired-capacity 2 \
  --target-group-arns arn:aws:elasticloadbalancing:... \
  --vpc-zone-identifier "subnet-abc123,subnet-def456" \
  --health-check-type ELB \
  --health-check-grace-period 300
```

## Summary

AWS Compute centers on EC2, a comprehensive service providing virtual machines across dozens of instance types optimized for general-purpose, compute, memory, storage, and accelerated computing workloads. Five pricing models (on-demand, spot, reserved, savings plans, dedicated hosts) accommodate diverse usage patterns and budgets. Security groups implement instance-level stateful firewalling. EBS provides persistent block storage with multiple volume types, snapshots, and encryption. EFS offers shared NFS storage for concurrent multi-instance access. Placement groups optimize instance placement for performance or availability. Auto scaling groups automatically maintain the desired instance count based on policies. Elastic Load Balancing distributes traffic with three load balancer options: ALB for content-based HTTP/HTTPS routing, NLB for high-performance TCP/UDP, and CLB for legacy compatibility.

## Exercises

### Review Questions

1. Describe the naming convention for EC2 instance types and explain what each component indicates.
2. Compare on-demand, spot, reserved, and savings plan pricing. When is each most appropriate?
3. What is the Nitro System and how does it improve EC2 performance?
4. Explain how security groups differ from traditional firewalls. Why are they stateful?
5. What is the difference between EBS and EFS in terms of attachment, availability zone, and use case?
6. Describe the three placement group types and the workload most suited to each.
7. How do auto scaling groups determine when to add or remove instances?
8. Compare ALB, NLB, and CLB across OSI layer, features, and typical use cases.
9. What are target groups and how do they relate to load balancers?
10. Explain EBS snapshots: how they work, what they are used for, and costing implications.

### Application Problems

1. An e-commerce application needs to handle Black Friday traffic that peaks at 50,000 requests per second for two hours. The baseline traffic is 1,000 requests per second. Design the EC2 and auto scaling architecture including instance types, scaling policies, and load balancer configuration.

2. A SaaS company runs 200 microservices on EC2 instances. Currently using on-demand instances, the monthly compute bill is $150,000. The workloads are steady-state with predictable growth. Design a cost optimization strategy estimating the savings from committing to Savings Plans or Reserved Instances.

3. A genomics research lab runs compute-intensive analysis jobs that can be interrupted and resumed. They need 500 vCPUs of compute capacity but can tolerate interruptions. The budget is limited. Design a Spot Instance strategy covering instance diversification, interruption handling, and cost optimization.

4. A database administrator is migrating a production Oracle database to EC2. The workload requires 80,000 IOPS consistently and 500 GB of storage. Recommend the EBS volume type, configuration, and any performance tuning to meet these requirements.

### Challenge Problem

Design a complete EC2-based architecture for a global social media platform with the following requirements: 50 million monthly active users, 50 TB of user-uploaded content, 99.99% availability SLA, sub-200ms global latency, variable traffic with 10x spikes during events, and a monthly compute budget of $200,000. Your design must include: instance type selection across at least three instance families, pricing model mix with rationale, multi-region deployment strategy, auto scaling configuration, load balancing architecture across regions, storage architecture for both application data and user content, placement group strategy for database tier, and security group design for a multi-tier architecture.
