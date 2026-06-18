# Chapter 16: Cloud Networking

## Learning Objectives

![Cloud Networking](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/computer-networks/ch16-cloud-networking.png)

1. Describe the architecture of Virtual Private Clouds and network isolation mechanisms.
2. Compare load balancer types: Application Load Balancer, Network Load Balancer, and classic load balancer.
3. Explain content delivery network operation and its impact on latency.
4. Analyze cloud DNS management including routing policies.
5. Evaluate hybrid connectivity options including VPNs and Direct Connect.

## 16.1 Virtual Private Cloud

A Virtual Private Cloud (VPC) provides logically isolated network segments within a public cloud provider. The VPC is a software-defined network that gives the customer control over IP addressing, subnets, routing, and security policies.

### 16.1.1 VPC Components

**Subnets.** A VPC's IP address range (CIDR block, e.g., 10.0.0.0/16) is divided into subnets. Public subnets have routes to the Internet via an Internet Gateway; private subnets do not. Subnets map to availability zones for fault isolation.

**Route tables.** Each subnet is associated with a route table that defines destination-to-target mappings:

| Destination | Target |
|-------------|--------|
| 10.0.0.0/16 | local |
| 0.0.0.0/0 | igw-12345 |
| 172.16.0.0/12 | vpn-67890 |

**Internet Gateway (IGW).** An IGW provides NAT between the VPC's private IPs and the public Internet. It is horizontally scaled and highly available.

**NAT Gateway / NAT Instance.** NAT Gateways allow instances in private subnets to initiate outbound Internet connections while preventing unsolicited inbound connections.

**Security Groups.** Stateful virtual firewalls that control inbound and outbound traffic at the instance level. Rules specify protocol, port, and source/destination (by CIDR or security group ID). Stateful means the return traffic is automatically allowed regardless of outbound rules.

**Network ACLs.** Stateless firewall rules at the subnet level. NACLs process rules in ascending order and both inbound and outbound rules must explicitly allow traffic.

### 16.1.2 VPC Peering

VPC Peering connects two VPCs using private IP addresses. Peering is not transitive: if VPC A is peered with VPC B and VPC B with VPC C, VPC A cannot reach VPC C through VPC B. Transit Gateway solves this by acting as a hub for many VPCs and on-premises networks.

## 16.2 Load Balancers

Load balancers distribute incoming traffic across multiple targets (EC2 instances, containers, Lambda functions) for fault tolerance and scalability.

### 16.2.1 Application Load Balancer

ALB operates at Layer 7 (HTTP/HTTPS). Features:

- Path-based routing: `/api/*` â†’ target group A, `/static/*` â†’ target group B.
- Host-based routing: `api.example.com` â†’ target group A, `www.example.com` â†’ target group B.
- SNI support: multiple TLS certificates per listener.
- WebSocket and HTTP/2 support.
- Sticky sessions (cookie-based or duration-based).
- Request tracing with X-Amzn-Trace-Id headers.

### 16.2.2 Network Load Balancer

NLB operates at Layer 4 (TCP/UDP). Features:

- Ultra-low latency (100-microsecond range).
- Static IP addresses per availability zone.
- TLS termination at scale.
- Preservation of client IP addresses.
- UDP and TCP traffic.

NLB is suitable for performance-critical applications and protocols that require direct client IP visibility.

### 16.2.3 Classic Load Balancer

CLB is the legacy load balancer supporting both Layer 4 and basic Layer 7 features. It is less flexible than ALB/NLB and is not recommended for new deployments.

### 16.2.4 Health Checks

Load balancers periodically send health check requests to targets. A target is considered healthy if it responds with a success status code within the timeout. Targets failing health checks are removed from rotation; they rejoin when health checks succeed again.

## 16.3 Content Delivery Networks

A Content Delivery Network (CDN) caches content at edge locations close to users, reducing latency and offloading origin servers.

### 16.3.1 CDN Architecture

Origin servers store the definitive content. Edge nodes (points of presence, PoPs) cache content geographically near users. A user's request routes to the nearest edge node; if the content is cached (cache hit), the edge node serves it directly. On a cache miss, the edge node fetches from the origin, caches the response, and serves it.

### 16.3.2 Key CDN Features

**Tiered caching.** Content flows from origin â†’ regional cache â†’ edge cache, reducing origin load on cache misses.

**Cache control.** HTTP headers (Cache-Control, Expires, ETag, Last-Modified) determine caching behavior. `Cache-Control: max-age=3600` caches for one hour; `s-maxage` applies to shared caches.

**Cache invalidation.** Removing cached content before TTL expiry. Methods: API-based purge, versioned URLs (e.g., `/static/main.v2.js`), surrogate keys.

**Dynamic content acceleration.** Routes dynamic requests over optimized paths using TCP optimizations, keepalive, and route optimization.

**Edge computing.** CloudFront Functions, Lambda@Edge, and Cloudflare Workers execute code at edge nodes for header manipulation, URL rewriting, A/B testing, and authentication.

### 16.3.3 Major CDNs

| CDN | Nodes | Notes |
|-----|-------|-------|
| CloudFront (AWS) | 600+ | Tight AWS integration, Lambda@Edge |
| Cloudflare | 330+ | Anycast DNS, DDoS mitigation, Workers |
| Akamai | 4000+ | Enterprise-focused, adaptive acceleration |
| Fastly | 100+ | VCL configuration, instant purge |
| Azure CDN | 50+ | Microsoft integration, multiple providers |

## 16.4 DNS Management

Cloud DNS services provide authoritative DNS hosting, load balancing, and health checking.

**Routing policies:**

- **Simple**: single record response.
- **Weighted**: distribute traffic across multiple endpoints by weight (A/B testing, gradual rollout).
- **Latency-based**: route to the region with lowest latency for the client.
- **Geolocation**: route based on the client's geographic location (compliance, content localization).
- **Geoproximity**: route based on geographic distance with optional bias.
- **Failover**: active-passive with health check integration.
- **Multivalue answer**: return multiple healthy IP addresses for client-side load balancing.

**Health checks.** DNS health checks monitor endpoint availability. Unhealthy endpoints are removed from DNS responses. Checks run from multiple global locations to avoid false positives.

## 16.5 Hybrid Connectivity

Hybrid connectivity extends cloud networks to on-premises data centers.

**Site-to-Site VPN.** IPSec tunnels over the public Internet. Lower cost but variable latency and bandwidth. Options: static routes or BGP dynamic routing.

**Direct Connect / ExpressRoute.** Dedicated physical connections from on-premises to the cloud provider. Consistent latency, high bandwidth (1â€“100 Gbps), no Internet transit. Requires colocation or partner network.

**Transit Gateway / Cloud Router.** Central hub connecting VPCs, VPNs, and Direct Connect connections. Simplifies network topology and routing.

**Inter-region connectivity.** VPC peering across regions or Transit Gateway inter-region peering for multi-region architectures.

## 16.6 Network Segmentation Architectures

**Three-tier architecture.** Web tier (public subnets, load balancers), application tier (private subnets), database tier (private subnets with security group restrictions).

**Microsegmentation.** Fine-grained security policies per workload using network policy (Kubernetes NetworkPolicy), security groups, or service mesh (Istio, Linkerd).

**Service mesh.** Application-level networking for microservices. Sidecar proxies (Envoy) handle service discovery, load balancing, encryption (mTLS), and observability.

## ðŸ’¡ Pro Tips

- **Don't use classic load balancers**: AWS CLB is legacy â€” it lacks path-based routing, SNI, and advanced health checks. Always use ALB (Layer 7) or NLB (Layer 4) for new deployments.
- **Security groups vs NACLs**: Security groups are stateful (return traffic auto-allowed) and use allow rules only. NACLs are stateless and process rules in order. Use NACLs for subnet-level stateless filtering (e.g., block specific ports) and security groups for instance-level stateful rules.
- **CDN cache invalidation costs**: Some CDNs charge for purge requests. Use versioned URLs (`/static/main.v2.js`) to avoid purge costs â€” change the URL path when content changes.
- **Direct Connect is not always faster**: For small data volumes or bursty traffic, a VPN over the public internet may be sufficient. Direct Connect shines for consistent, high-bandwidth (10+ Gbps) workloads or latency-sensitive applications.

## One-Sentence Takeaways

- VPCs provide logically isolated cloud networks with subnets, route tables, and security groups.
- Application Load Balancers (Layer 7) support path/host-based routing; Network Load Balancers (Layer 4) offer ultra-low latency.
- CDNs cache content at edge nodes, reducing latency and offloading origin servers.
- Cloud DNS routing policies include weighted, latency-based, geolocation, and failover.
- Site-to-Site VPN uses IPSec over public internet; Direct Connect uses dedicated physical links.
- Service mesh (Sidecar proxies) provides application-level networking for microservices.

## Concept Comparison Table

| Feature | Security Group | Network ACL |
|---------|---------------|-------------|
| Scope | Instance level (ENI) | Subnet level |
| Statefulness | Stateful (return auto-allowed) | Stateless (both directions evaluated) |
| Rules | Allow only | Allow and Deny |
| Rule evaluation | All rules evaluated | Ordered list (1â€“32766) |
| Default behavior | Deny all inbound, allow all outbound | Allow all inbound and outbound |

## Quick Reference: Load Balancer Selection

| Requirement | ALB (Layer 7) | NLB (Layer 4) |
|-------------|---------------|---------------|
| HTTP/HTTPS routing | âœ“ | âœ— |
| Path/host-based routing | âœ“ | âœ— |
| WebSocket support | âœ“ | âœ— |
| gRPC support | âœ“ | âœ“ (TCP) |
| Ultra-low latency | ~ms | ~100 Î¼s |
| Static IP per AZ | âœ— (uses DNS) | âœ“ |
| Client IP preservation | âœ— (X-Forwarded-For) | âœ“ |

## Cross-Application Matrix

| Scenario | Best Service | Why |
|----------|-------------|-----|
| Web app with path routing | ALB | `/api/*` â†’ servers, `/static/*` â†’ S3 |
| Game server, low latency | NLB | Preserves client IP, 100 Î¼s latency |
| Global static content delivery | CDN (CloudFront) | Edge caching, DDoS protection |
| Lambda-based APIs | ALB or API Gateway | Native Lambda integration |
| Multi-region active-active | Route53 latency routing + ALBs | Failover across regions |
| Hybrid on-prem to cloud | Direct Connect + Transit GW | Stable latency, high bandwidth |

## Chapter Quiz

1. **What makes security groups stateful?**
   - a) Rules apply to both directions
   - b) Return traffic is automatically allowed âœ“
   - c) They process rules in order
   - d) They support deny rules

2. **Which load balancer type provides a static IP per AZ?**
   - a) ALB
   - b) NLB âœ“
   - c) CLB
   - d) ELB

3. **What does VXLAN use to identify tenant segments?**
   - a) VLAN ID
   - b) VNI âœ“
   - c) GRE key
   - d) Subnet ID

4. **Which CDN feature reduces origin load?**
   - a) Edge computing
   - b) Tiered caching âœ“
   - c) Dynamic acceleration
   - d) DNS routing

5. **What AWS service acts as a hub for VPC and on-premises connectivity?**
   - a) VPC Peering
   - b) Transit Gateway âœ“
   - c) Direct Connect
   - d) VPN Gateway

**Answers:** 1-b, 2-b, 3-b, 4-b, 5-b

## Summary

Cloud networking delivers software-defined network constructs â€” VPCs, subnets, route tables, and security groups â€” that isolate and control traffic. Load balancers distribute traffic across targets at Layers 4 and 7. CDNs cache content at edge nodes for low-latency delivery. Cloud DNS offers policy-driven routing and health monitoring. Hybrid connectivity links cloud and on-premises networks via VPN or dedicated connections.

## Exercises

### Review Questions

1. What is the difference between a security group and a network ACL?
2. Why is VPC peering not transitive?
3. What is the difference between an ALB and an NLB?
4. How does a CDN reduce latency for a user in Sydney accessing content hosted in London?
5. When would you choose Direct Connect over a VPN?

### Application Problems

6. Design a VPC architecture for a multi-tier web application with: public web servers, private application servers, and a private database. Include subnets, route tables, security groups, NAT Gateway, and load balancer placement. Support deployment in two availability zones.
7. A CDN receives 100 GB/s of traffic at peak. The cache hit ratio is 85%. The origin server can handle 10 GB/s. Is the origin capacity adequate? If not, propose two solutions.
8. A company has on-premises data centers in New York and London, connected via MPLS. The company migrates applications to AWS in us-east-1 and eu-west-1. Design the hybrid connectivity: specify Direct Connect configuration, Transit Gateway routing, and DNS routing policy for active-active failover.

### Challenge Problem

9. **Design a global cloud network for a SaaS platform.** The platform serves users in North America, Europe, and Asia-Pacific. Requirements: (a) all user traffic is served with latency under 100 ms, (b) database is globally distributed with conflict-free replication, (c) static assets are cached at the edge, (d) API requests route to the nearest region with fallback, (e) the system tolerates the loss of one entire AWS region. Design the full architecture: VPC layout per region, CDN configuration, DNS routing policy, load balancing strategy, and inter-region connectivity. Compute the expected latency for a user in Tokyo reaching the nearest healthy region.
