# Cloud Security

## Learning Objectives

After completing this chapter, students will be able to explain the shared responsibility model and its implications, configure AWS IAM policies with least privilege, secure S3 buckets with appropriate policies, implement network security controls in VPCs, use cloud-native security services (KMS, GuardDuty, Security Hub), manage Azure RBAC and NSGs, deploy Google Cloud security controls, and evaluate cloud security posture using CASB, CSPM, and CWPP tools.

## Theory

### Shared Responsibility Model

In the shared responsibility model, the cloud provider secures the infrastructure (physical security, network, hypervisor), while the customer secures everything deployed in the cloud (data, applications, access management). The boundary varies by service model: IaaS leaves more responsibility to the customer, SaaS transfers most responsibility to the provider, and PaaS lies in between. Misunderstandings of this boundary are a primary cause of cloud breaches.

### AWS Security

AWS Identity and Access Management (IAM) defines users, groups, roles, and policies. Policies are JSON documents that specify allowed or denied actions on resources. IAM roles are assumed by services or federated identities, avoiding long-lived access keys. S3 bucket policies and Access Control Lists (ACLs) control object-level permissions. Bucket policies can enforce encryption, restrict access by IP address, or deny HTTP requests.

Security Groups act as stateful firewalls at the instance level, permitting inbound and outbound traffic. Network ACLs (NACLs) are stateless subnet-level firewalls. AWS Key Management Service (KMS) manages encryption keys for AWS services and customer applications. CloudTrail records API activity for auditing. GuardDuty provides intelligent threat detection using machine learning and integrated threat intelligence. Security Hub aggregates security findings across AWS services. AWS Config evaluates resource configurations against compliance rules. AWS WAF protects web applications. Shield provides DDoS protection, with Advanced tier offering enhanced detection.

### Azure Security

Microsoft Entra ID (formerly Azure AD) provides identity and access management for Azure resources. Azure RBAC assigns roles at management group, subscription, resource group, or resource scope. Built-in roles include Owner, Contributor, Reader, and custom roles. Network Security Groups (NSGs) filter traffic at the subnet or NIC level. Azure Key Vault stores secrets, keys, and certificates with hardware security module (HSM) backing. Microsoft Defender for Cloud provides unified security management and threat protection across Azure, on-premises, and multi-cloud environments. Azure Sentinel is a cloud-native SIEM.

### GCP Security

Google Cloud IAM uses roles (primitive, predefined, custom) to grant access. Cloud Armor provides web application firewall and DDoS protection. Security Command Center centralises vulnerability and threat findings. VPC Service Controls mitigate data exfiltration risks by defining perimeters around managed services. Access Transparency logs record Google Cloud employee access to customer data. CMEK (Customer-Managed Encryption Keys) and CSEK (Customer-Supplied Encryption Keys) provide encryption control.

### CASB

Cloud Access Security Brokers (CASBs) sit between users and cloud services, enforcing security policies for sanctioned and unsanctioned cloud applications. Discovery mode identifies shadow IT. Proxy mode enforces policies inline. API mode integrates with cloud provider APIs for Data Loss Prevention (DLP), encryption, and access control. Microsoft Defender for Cloud Apps and Netskope are prominent CASB solutions.

### CSPM

Cloud Security Posture Management (CSPM) continuously assesses cloud configurations against compliance frameworks (CIS, NIST, SOC 2) and security best practices. CSPM detects misconfigurations such as publicly accessible storage, unencrypted databases, overly permissive IAM roles, and logging deficiencies. Wiz, Prisma Cloud, and Check Point CloudGuard are leading CSPM platforms.

### CWPP

Cloud Workload Protection Platforms (CWPP) secure workloads across virtual machines, containers, and serverless functions. Capabilities include vulnerability scanning, runtime protection, file integrity monitoring, and network segmentation. CWPP agents are deployed on each workload or integrated at the hypervisor or orchestration layer.

## Examples

### AWS IAM Least Privilege Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": ["s3:GetObject", "s3:ListBucket"],
    "Resource": [
      "arn:aws:s3:::data-bucket",
      "arn:aws:s3:::data-bucket/*"
    ],
    "Condition": {
      "IpAddress": {"aws:SourceIp": "203.0.113.0/24"}
    }
  }]
}
```

This policy grants read-only access to a specific S3 bucket from the corporate IP range only.

### AWS VPC Public and Private Subnets

A VPC is divided into public subnets (with internet gateway route) for load balancers and bastion hosts, and private subnets (without internet gateway) for application servers and databases. NAT Gateways in public subnets enable outbound internet access for private instances. Security Groups restrict traffic between tiers: the web tier accepts HTTP/HTTPS from the internet, the application tier accepts traffic only from the web security group, and the database tier accepts traffic only from the application security group on port 3306.

### Azure NSG Rule Creation

Create an NSG rule to allow SSH only from a management subnet: source = management subnet CIDR, source port ranges = *, destination = VirtualNetwork, destination port = 22, protocol = TCP, action = Allow, priority = 100. A corresponding high-priority Deny rule blocks SSH from all other sources. NSG flow logs enable traffic analysis and threat detection.

## Summary

Cloud security extends traditional security principles to elastic, API-driven infrastructure. The shared responsibility model clarifies the division of security obligations. IAM is the most critical control, as misconfigured permissions are the leading cause of cloud data breaches. Network security groups, encryption services, and threat detection services provide layered protection. CASB, CSPM, and CWPP tools address visibility and compliance gaps across multi-cloud environments. Security in the cloud is primarily configuration management, and automation is essential at scale.

## Exercises

### Review Questions

1. Explain the shared responsibility model. How does the boundary shift between IaaS, PaaS, and SaaS?
2. What is the difference between an IAM user and an IAM role? Why are roles preferred for service-to-service authentication?
3. Describe the purpose of CloudTrail in AWS security. How does it differ from AWS Config?
4. Compare Security Groups and Network ACLs in AWS. What are the functional differences?
5. What is shadow IT in the cloud, and how does a CASB detect and control it?

### Application Problems

1. Create an AWS free tier account. Configure a VPC with public and private subnets. Launch an EC2 instance in each subnet. Configure Security Groups that allow HTTP from the internet to the public instance and SSH from the public instance to the private instance only.
2. Write a Terraform script that deploys an S3 bucket with server-side encryption, versioning, and a bucket policy that denies all HTTP requests. Apply the script and verify enforcement.
3. Configure Azure RBAC by creating a custom role with read-only access to virtual machines and Key Vault secrets. Assign the role to a test user and verify that the user can read VM properties but cannot start or stop VMs.

### Challenge Problem

Design a secure multi-account AWS architecture for a SaaS company. The architecture must include: separate accounts for logging, security, development, staging, and production; centralised CloudTrail and GuardDuty in the security account; cross-account IAM roles for admin access; VPCs with private subnets and NAT Gateways across availability zones; encrypted RDS databases with automated backups; S3 buckets with Object Lock for immutable log storage; WAF and Shield Advanced for application protection; and a landing zone configuration using AWS Control Tower or Terraform. Justify each architectural decision with reference to the shared responsibility model, least privilege, and defence in depth.
