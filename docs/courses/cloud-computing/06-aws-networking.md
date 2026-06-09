# Chapter 6: AWS Networking

## Learning Objectives

After completing this chapter, students will be able to:

1. Design and implement a VPC with public and private subnets.
2. Configure routing with internet gateways, NAT gateways, and VPC peering.
3. Implement transit gateways for multi-VPC and hybrid connectivity.
4. Configure Route 53 hosted zones with various routing policies.
5. Differentiate between security groups and network ACLs.
6. Implement AWS WAF, Shield, and Network Firewall protections.
7. Design hybrid connectivity using Direct Connect and VPN.

## Theory

### 6.1 Amazon VPC

Amazon Virtual Private Cloud (VPC) provides a logically isolated section of the AWS cloud where AWS resources can be launched in a virtual network defined by the user. A VPC closely resembles a traditional data center network but with the benefits of AWS infrastructure. Each VPC is confined to a single AWS region and can span multiple availability zones.

**VPC CIDR.** Each VPC is assigned a Classless Inter-Domain Routing (CIDR) block, typically from private IP ranges: 10.0.0.0/8, 172.16.0.0/12, or 192.168.0.0/16. The CIDR block determines the maximum number of IP addresses available. A /16 block provides 65,536 addresses; a /28 block provides 16. AWS reserves five IP addresses per subnet (first four and last one).

**Subnets.** Subnets are subdivisions of a VPC CIDR block, each confined to a single availability zone. A subnet is considered public if it has a route to an internet gateway; otherwise it is private. Subnets provide fault isolation (different availability zones) and security boundaries (public vs private traffic).

**Internet Gateway (IGW).** An IGW is a horizontally scaled, redundant, and highly available VPC component that enables communication between the VPC and the internet. An IGW serves two purposes: a target in route tables for internet-routable traffic, and network address translation (NAT) for instances with public IP addresses. Only one IGW can be attached to a VPC at a time.

**NAT Gateway.** A NAT gateway enables instances in a private subnet to initiate outbound traffic to the internet (for updates, patches, API calls) while preventing the internet from initiating connections to those instances. NAT gateways are managed by AWS and provide high availability within an availability zone. For multi-AZ resilience, deploy a NAT gateway in each AZ.

**Egress-Only Internet Gateway.** An egress-only IGW provides outbound connectivity for IPv6 traffic from private subnets. It is analogous to a NAT gateway but for IPv6, because IPv6 addresses are globally unique and would otherwise be internet-reachable.

### 6.2 Route Tables

Each subnet must be associated with a route table that determines where network traffic is directed. A main route table is created by default but can be replaced with custom route tables. Route tables contain entries (routes) specifying a destination CIDR and a target (IGW, NAT gateway, VPC peering connection, transit gateway, VPC endpoint, network interface, etc.). The most specific route matching the destination CIDR takes precedence (longest prefix match).

### 6.3 VPC Peering

VPC peering connects two VPCs (in the same or different accounts and regions) using private IP addresses. Peered VPCs behave as if they are on the same network. VPC peering is not transitive: if VPC A peers with VPC B and VPC B peers with VPC C, VPC A cannot communicate with VPC C through VPC B. Full mesh peering requires N(N-1)/2 peering connections. VPC peering has no bandwidth limitation and no single point of failure.

### 6.4 Transit Gateway

Transit Gateway acts as a central hub for connecting VPCs, VPN connections, and Direct Connect connections. It provides transitive routing between all attached networks, eliminating the need for full mesh VPC peering. Transit Gateway supports route tables for segregation and multicast.

**Attachment Types.** VPC attachments connect VPCs to the transit gateway. VPN attachments terminate AWS Site-to-Site VPN connections. Direct Connect Gateway attachments connect Direct Connect virtual interfaces. Transit Gateway peering attachments connect transit gateways across regions.

**Route Tables.** Transit gateway route tables control traffic forwarding between attachments. Each attachment can be associated with a route table and can propagate routes. Route propagation enables automatic learning of routes from attached networks. Static routes and blackhole routes are also supported.

### 6.5 VPC Endpoints

VPC endpoints enable private connectivity to AWS services without traversing the internet. They use AWS PrivateLink, ensuring traffic stays within the AWS network.

**Gateway Endpoints.** Gateway endpoints route traffic to S3 and DynamoDB through route table entries rather than through public endpoints. Gateway endpoints are free and use prefix lists in route tables. They support access policies for granular control.

**Interface Endpoints.** Interface endpoints use AWS PrivateLink to provide private connectivity to AWS services (CloudWatch, EC2, KMS, and many others) as well as third-party services through the AWS Marketplace. Interface endpoints are powered by Elastic Network Interfaces (ENIs) with private IP addresses in the subnet. Interface endpoints incur hourly charges and data processing fees.

**Gateway Load Balancer Endpoints.** Endpoints for routing traffic to Gateway Load Balancers, used for deploying and scaling third-party virtual appliances (firewalls, IDS/IPS).

### 6.6 Route 53

Amazon Route 53 is a scalable, highly available Domain Name System (DNS) web service. It translates human-readable domain names to IP addresses. Route 53 also performs health checking and domain registration.

**Hosted Zones.** A hosted zone is a container for DNS records for a specific domain. Public hosted zones manage DNS records for internet-facing domains. Private hosted zones manage DNS records for internal domains within VPCs. Private hosted zones can be associated with multiple VPCs.

**Routing Policies.** Simple routing maps a domain to a single resource (e.g., one web server). ECMP-style multiple values are supported. Weighted routing distributes traffic across multiple resources with specified weights, used for A/B testing and blue/green deployments. Latency routing directs traffic to the region with the lowest latency for the end user, used for global latency optimization. Failover routing directs traffic to a primary resource and fails over to a secondary resource when health checks fail. Geolocation routing directs traffic based on the geographic location of the user, used for region-specific content. Geoproximity routing directs traffic based on geographic location with optional bias, used for load balancing across close geographic regions. Multivalue answer routing responds to DNS queries with up to eight healthy records, used for simple load balancing with health checks.

**Health Checks.** Route 53 health checks monitor the health of resources (endpoints, CloudWatch alarms, or other health checks). Health checks can be configured with intervals (10 or 30 seconds), thresholds for healthy/unhealthy status, and health check regions for distributed monitoring.

### 6.7 CloudFront (Networking Perspective)

CloudFront is a global content delivery network with over 600 edge locations. From a networking perspective, CloudFront provides: origin shielding at regional edge caches, HTTP/2 and HTTP/3 support, DDoS protection at the edge, SSL/TLS termination, real-time metrics and logs, and integration with AWS WAF for web application firewall at the edge.

### 6.8 AWS Direct Connect

AWS Direct Connect establishes a dedicated private network connection from an on-premises data center to AWS. Direct Connect bypasses the public internet, providing consistent network performance, reduced bandwidth costs, and increased security.

**Connection Types.** Dedicated connections provide 1 Gbps, 10 Gbps, or 100 Gbps capacity. Hosted connections (provided by AWS Direct Connect partners) provide sub-1 Gbps increments (50 Mbps to 10 Gbps).

**Virtual Interfaces (VIFs).** Private VIFs connect to one VPC (associated through a Direct Connect gateway for multi-VPC access). Public VIFs connect to AWS public services (S3, DynamoDB) over Direct Connect. Transit VIFs connect to a transit gateway for multi-VPC connectivity.

**Direct Connect Gateway.** A Direct Connect gateway provides a single connection point for multiple VPCs in any AWS region (global). It enables centralized management of Direct Connect connections across accounts and regions.

### 6.9 AWS Site-to-Site VPN

AWS VPN creates encrypted tunnels between on-premises networks and AWS VPCs over the public internet. A VPN connection consists of two tunnels for high availability. VPN options: AWS Site-to-Site VPN (managed VPN connection), AWS Client VPN (managed OpenVPN-based remote access), and third-party VPN appliances from the AWS Marketplace.

### 6.10 Security Groups vs Network ACLs

**Security Groups.** Security groups are stateful virtual firewalls operating at the instance level (ENI level). They support allow rules only (no explicit deny). Traffic is evaluated as a whole (all rules are evaluated). Security groups are applied to ENIs, not to subnets. Security groups support referencing other security groups as sources.

**Network ACLs (NACLs).** NACLs are stateless firewalls operating at the subnet level. They support both allow and deny rules. Rules are evaluated in order (lowest number first). NACLs are applied to subnets, affecting all instances in the subnet. NACLs are commonly used for explicit deny rules (e.g., block a specific IP range) and for adding an additional layer of defense.

### 6.11 AWS WAF

AWS WAF (Web Application Firewall) protects web applications from common web exploits. WAF operates at CloudFront or ALB. It uses rules to block or allow traffic based on conditions such as IP addresses, HTTP headers, HTTP body, URI strings, SQL injection, cross-site scripting (XSS), size constraints, and geographic location. WAF supports rate-based rules for DDoS protection. AWS Managed Rules provide pre-configured protections for common threats (OWASP Top 10, WordPress, and known bad inputs).

### 6.12 AWS Shield

AWS Shield provides DDoS protection. Shield Standard is automatically included at no cost, protecting against common Layer 3/4 attacks (SYN floods, UDP floods, reflection attacks). Shield Advanced provides enhanced protection against larger, more sophisticated DDoS attacks, including application layer (Layer 7) attacks, cost protection against scaling spikes due to DDoS, and 24/7 access to the AWS DDoS Response Team.

### 6.13 AWS Network Firewall

AWS Network Firewall is a managed firewall service that provides network traffic filtering for VPCs. It inspects traffic at the VPC edge, between subnets, or at the internet gateway. Features include stateful inspection (suricata-compatible rules), domain filtering, protocol detection, and intrusion prevention. Network Firewall integrates with AWS Firewall Manager for centralized policy management across accounts.

## Examples

### Example 6.1: Create a VPC with Public and Private Subnets

```bash
# Create VPC
aws ec2 create-vpc --cidr-block 10.0.0.0/16

# Create subnets
aws ec2 create-subnet --vpc-id vpc-123 --cidr-block 10.0.1.0/24 --availability-zone us-east-1a
aws ec2 create-subnet --vpc-id vpc-123 --cidr-block 10.0.2.0/24 --availability-zone us-east-1b

# Create and attach internet gateway
aws ec2 create-internet-gateway
aws ec2 attach-internet-gateway --vpc-id vpc-123 --internet-gateway-id igw-123

# Create public route table and route
aws ec2 create-route-table --vpc-id vpc-123
aws ec2 create-route --route-table-id rtb-123 --destination-cidr-block 0.0.0.0/0 --gateway-id igw-123

# Create NAT gateway
aws ec2 allocate-address --domain vpc
aws ec2 create-nat-gateway --subnet-id subnet-public --allocation-id eip-123
```

### Example 6.2: Configure VPC Peering

```bash
# Create peering connection
aws ec2 create-vpc-peering-connection \
  --vpc-id vpc-123456 \
  --peer-vpc-id vpc-789012 \
  --peer-region eu-west-1

# Accept the peering connection (in peer account)
aws ec2 accept-vpc-peering-connection \
  --vpc-peering-connection-id pcx-12345678

# Add routes to both VPC route tables
aws ec2 create-route \
  --route-table-id rtb-111 --destination-cidr-block 10.1.0.0/16 \
  --vpc-peering-connection-id pcx-12345678
```

### Example 6.3: Route 53 with Latency Routing

```bash
# Create a latency routing policy record
aws route53 change-resource-record-sets \
  --hosted-zone-id Z123456 \
  --change-batch '{
    "Changes": [{
      "Action": "CREATE",
      "ResourceRecordSet": {
        "Name": "app.example.com",
        "Type": "A",
        "SetIdentifier": "US-East",
        "Region": "us-east-1",
        "AliasTarget": {
          "HostedZoneId": "Z35SXDOTRQ7X7K",
          "DNSName": "us-east-alb-123.elb.amazonaws.com",
          "EvaluateTargetHealth": true
        },
        "Failover": "PRIMARY"
      }
    }]
  }'
```

## Summary

AWS networking is built on VPCs, which provide isolated virtual networks in the cloud. Subnets divide VPCs across availability zones. Internet gateways enable public access, NAT gateways provide outbound-only access for private subnets, and route tables control traffic flow between subnets and external networks. VPC peering connects VPCs directly, while transit gateways provide hub-and-spoke connectivity for larger architectures. VPC endpoints provide private access to AWS services without internet traffic. Route 53 provides DNS services with multiple routing policies for traffic management. Direct Connect establishes dedicated on-premises connectivity. Security groups (stateful, instance-level) and network ACLs (stateless, subnet-level) provide firewall protection. WAF, Shield, and Network Firewall offer additional security layers.

## Exercises

### Review Questions

1. What is the difference between a public subnet and a private subnet in a VPC?
2. How does a NAT gateway differ from an internet gateway? When is each used?
3. Explain why VPC peering is not transitive and how transit gateways solve this limitation.
4. Compare gateway endpoints and interface endpoints. What are the cost implications?
5. Describe six Route 53 routing policies and provide a use case for each.
6. What is the difference between security groups and network ACLs in terms of statefulness and rule evaluation?
7. How does AWS Direct Connect differ from a Site-to-Site VPN? When would you choose each?
8. Explain how AWS WAF integrates with CloudFront and ALB.
9. What protections does AWS Shield Standard provide that Shield Advanced does not?
10. How does AWS Network Firewall differ from security groups and NACLs?

### Application Problems

1. Design a VPC architecture for a three-tier web application spanning two availability zones. Specify CIDR blocks, subnet structure, route tables, and NAT gateway placement.

2. A company has 20 VPCs across three regions (us-east-1, eu-west-1, ap-southeast-1) in two AWS accounts. Design a network connectivity architecture using transit gateways including inter-region peering and cross-account sharing.

3. An organization is migrating from an on-premises data center to AWS and requires private, consistent, high-bandwidth connectivity between the data center and the VPC. Design a hybrid connectivity architecture including Direct Connect, VPN backup, and routing configuration.

4. A global e-commerce site receives traffic from 200 countries. The site supports 12 languages and requires region-specific pricing and inventory. Design a Route 53 and CloudFront architecture for global traffic management.

### Challenge Problem

Design a complete network architecture for a global financial services platform with the following requirements: 99.999% network availability, latency under 10 ms between all peered VPCs within a region, connectivity spanning five AWS regions, connection to three on-premises data centers with at least 10 Gbps bandwidth each, segmentation between production, staging, and development environments, full traffic inspection with intrusion detection, DDoS protection for all public-facing endpoints, private connectivity to all AWS services used by the platform, DNS resolution for both internal services and external customers, and centralized logging of all network traffic metadata. Your design must specify: VPC and subnet architecture per environment, transit gateway design with route tables and segmentation, Direct Connect configuration with redundancy, Route 53 global traffic management strategy, security layer implementation (WAF, Shield, Network Firewall), VPC endpoint strategy, network monitoring and logging architecture, and estimated monthly networking costs.
