# Module 11: Cloud Networking

## Cloud Networking Overview
Cloud networking provides virtualized network infrastructure and services delivered over the internet, enabling scalable, flexible, and cost-effective network solutions.

## Cloud Service Models

### Infrastructure as a Service (IaaS)
- **Virtual Machines**: Compute resources
- **Virtual Networks**: Network infrastructure
- **Storage**: Block and object storage
- **Examples**: AWS EC2, Azure VMs, Google Compute Engine

### Platform as a Service (PaaS)
- **Application Platform**: Runtime environment
- **Database Services**: Managed databases
- **Development Tools**: CI/CD pipelines
- **Examples**: AWS Elastic Beanstalk, Azure App Service, Google App Engine

### Software as a Service (SaaS)
- **Complete Applications**: Ready-to-use software
- **Web-based Access**: Browser interface
- **Subscription Model**: Pay-per-use
- **Examples**: Office 365, Salesforce, Google Workspace

## Virtual Private Cloud (VPC)

### VPC Concepts
- **Isolated Network**: Logically separated environment
- **Subnets**: Network segments within VPC
- **Route Tables**: Control traffic routing
- **Security Groups**: Virtual firewalls
- **Network ACLs**: Subnet-level security

### AWS VPC Architecture
```
VPC (10.0.0.0/16)
├── Public Subnet (10.0.1.0/24)
│   ├── Internet Gateway
│   ├── NAT Gateway
│   └── Web Servers
├── Private Subnet (10.0.2.0/24)
│   ├── Application Servers
│   └── Database Servers
└── Database Subnet (10.0.3.0/24)
    └── RDS Instances
```

### AWS VPC Configuration
```bash
# Create VPC
aws ec2 create-vpc --cidr-block 10.0.0.0/16

# Create Internet Gateway
aws ec2 create-internet-gateway

# Attach Internet Gateway to VPC
aws ec2 attach-internet-gateway --vpc-id vpc-12345678 --internet-gateway-id igw-87654321

# Create Subnet
aws ec2 create-subnet --vpc-id vpc-12345678 --cidr-block 10.0.1.0/24

# Create Route Table
aws ec2 create-route-table --vpc-id vpc-12345678

# Add Route to Internet Gateway
aws ec2 create-route --route-table-id rtb-12345678 --destination-cidr-block 0.0.0.0/0 --gateway-id igw-87654321
```

### Azure Virtual Network
```
Virtual Network (10.0.0.0/16)
├── Frontend Subnet (10.0.1.0/24)
│   ├── Application Gateway
│   └── Web VMs
├── Backend Subnet (10.0.2.0/24)
│   ├── Application VMs
│   └── Load Balancer
└── Database Subnet (10.0.3.0/24)
    └── SQL Database
```

### Google Cloud VPC
```
VPC Network (Global)
├── us-central1 (10.1.0.0/16)
│   ├── web-subnet (10.1.1.0/24)
│   └── app-subnet (10.1.2.0/24)
├── us-east1 (10.2.0.0/16)
│   ├── web-subnet (10.2.1.0/24)
│   └── app-subnet (10.2.2.0/24)
└── europe-west1 (10.3.0.0/16)
    ├── web-subnet (10.3.1.0/24)
    └── app-subnet (10.3.2.0/24)
```

## Cloud Security

### Security Groups (AWS)
```json
{
  "GroupName": "web-servers",
  "Description": "Security group for web servers",
  "IpPermissions": [
    {
      "IpProtocol": "tcp",
      "FromPort": 80,
      "ToPort": 80,
      "IpRanges": [{"CidrIp": "0.0.0.0/0"}]
    },
    {
      "IpProtocol": "tcp",
      "FromPort": 443,
      "ToPort": 443,
      "IpRanges": [{"CidrIp": "0.0.0.0/0"}]
    },
    {
      "IpProtocol": "tcp",
      "FromPort": 22,
      "ToPort": 22,
      "IpRanges": [{"CidrIp": "10.0.0.0/16"}]
    }
  ]
}
```

### Network Security Groups (Azure)
```json
{
  "name": "web-nsg",
  "properties": {
    "securityRules": [
      {
        "name": "Allow-HTTP",
        "properties": {
          "protocol": "Tcp",
          "sourcePortRange": "*",
          "destinationPortRange": "80",
          "sourceAddressPrefix": "*",
          "destinationAddressPrefix": "*",
          "access": "Allow",
          "priority": 100,
          "direction": "Inbound"
        }
      }
    ]
  }
}
```

### Cloud Firewall Rules (GCP)
```bash
# Create firewall rule
gcloud compute firewall-rules create allow-http \
    --allow tcp:80 \
    --source-ranges 0.0.0.0/0 \
    --description "Allow HTTP traffic"

# Create firewall rule for specific tags
gcloud compute firewall-rules create allow-ssh-web \
    --allow tcp:22 \
    --source-ranges 10.0.0.0/16 \
    --target-tags web-servers
```

## Hybrid Cloud Connectivity

### Site-to-Site VPN

#### AWS VPN Gateway
```bash
# Create Customer Gateway
aws ec2 create-customer-gateway \
    --type ipsec.1 \
    --public-ip 203.0.113.12 \
    --bgp-asn 65000

# Create VPN Gateway
aws ec2 create-vpn-gateway --type ipsec.1

# Create VPN Connection
aws ec2 create-vpn-connection \
    --type ipsec.1 \
    --customer-gateway-id cgw-12345678 \
    --vpn-gateway-id vgw-87654321
```

#### Azure VPN Gateway
```bash
# Create VPN Gateway
az network vnet-gateway create \
    --resource-group myResourceGroup \
    --name myVpnGateway \
    --public-ip-address myGatewayIp \
    --vnet myVnet \
    --gateway-type Vpn \
    --vpn-type RouteBased \
    --sku VpnGw1

# Create Local Network Gateway
az network local-gateway create \
    --resource-group myResourceGroup \
    --name myLocalGateway \
    --local-address-prefixes 192.168.0.0/16 \
    --gateway-ip-address 203.0.113.12
```

### Direct Connect Services

#### AWS Direct Connect
```
On-Premises Data Center
├── Customer Router
├── Cross Connect
├── AWS Direct Connect Location
├── AWS Direct Connect Gateway
└── Virtual Private Gateway
    └── VPC
```

**Benefits:**
- **Consistent Performance**: Dedicated bandwidth
- **Lower Costs**: Reduced data transfer charges
- **Private Connectivity**: Bypass internet
- **Higher Bandwidth**: Up to 100 Gbps

#### Azure ExpressRoute
```
On-Premises Network
├── Edge Router
├── Connectivity Provider
├── Microsoft Edge Router
├── ExpressRoute Gateway
└── Virtual Network
```

#### Google Cloud Interconnect
**Dedicated Interconnect:**
- Direct physical connection
- 10 Gbps or 100 Gbps
- Colocation facility required

**Partner Interconnect:**
- Through service provider
- 50 Mbps to 50 Gbps
- No colocation required

## Multi-Cloud Networking

### Multi-Cloud Architecture
```
Application Layer
├── AWS (Primary)
├── Azure (Secondary)
└── GCP (Analytics)

Network Layer
├── Transit Gateway (AWS)
├── Virtual WAN (Azure)
├── Cloud Router (GCP)
└── SD-WAN Overlay

Connectivity Layer
├── Direct Connect
├── ExpressRoute
├── Cloud Interconnect
└── Internet VPN
```

### Multi-Cloud Challenges
1. **Complexity**: Different APIs and tools
2. **Security**: Consistent policies across clouds
3. **Networking**: Inter-cloud connectivity
4. **Management**: Unified monitoring and control
5. **Cost**: Data transfer charges

### Multi-Cloud Solutions
- **Cloud Management Platforms**: Unified control
- **SD-WAN**: Overlay networking
- **Container Orchestration**: Kubernetes across clouds
- **Service Mesh**: Application connectivity
- **Monitoring Tools**: Cross-cloud visibility

## Container Networking

### Docker Networking
**Bridge Network:**
```bash
# Create custom bridge network
docker network create --driver bridge mynetwork

# Run container on custom network
docker run -d --name web --network mynetwork nginx

# Connect existing container to network
docker network connect mynetwork mycontainer
```

**Host Network:**
```bash
# Use host networking
docker run -d --network host nginx
```

**Overlay Network:**
```bash
# Create overlay network (Docker Swarm)
docker network create --driver overlay --attachable myoverlay

# Deploy service on overlay network
docker service create --name web --network myoverlay nginx
```

### Kubernetes Networking

#### Container Network Interface (CNI)
**Popular CNI Plugins:**
- **Calico**: Layer 3 networking with BGP
- **Flannel**: Simple overlay network
- **Weave**: Mesh networking
- **Cilium**: eBPF-based networking
- **Antrea**: VMware's CNI plugin

#### Kubernetes Network Policies
```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all
  namespace: production
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress
---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-web-to-db
  namespace: production
spec:
  podSelector:
    matchLabels:
      app: database
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: web
    ports:
    - protocol: TCP
      port: 3306
```

#### Service Types
```yaml
# ClusterIP Service (Internal)
apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  selector:
    app: web
  ports:
  - port: 80
    targetPort: 8080
  type: ClusterIP

---
# LoadBalancer Service (External)
apiVersion: v1
kind: Service
metadata:
  name: web-external
spec:
  selector:
    app: web
  ports:
  - port: 80
    targetPort: 8080
  type: LoadBalancer

---
# Ingress Controller
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: web-ingress
spec:
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: web-service
            port:
              number: 80
```

## Service Mesh

### Service Mesh Architecture
```
Data Plane (Sidecar Proxies)
├── Envoy Proxy
├── Traffic Management
├── Security Policies
└── Observability

Control Plane
├── Configuration Management
├── Certificate Management
├── Policy Enforcement
└── Telemetry Collection
```

### Istio Service Mesh
```yaml
# Virtual Service
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: reviews
spec:
  http:
  - match:
    - headers:
        end-user:
          exact: jason
    route:
    - destination:
        host: reviews
        subset: v2
  - route:
    - destination:
        host: reviews
        subset: v1

---
# Destination Rule
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: reviews
spec:
  host: reviews
  subsets:
  - name: v1
    labels:
      version: v1
  - name: v2
    labels:
      version: v2
```

## Content Delivery Networks (CDN)

### CDN Architecture
```
Origin Server
├── Original content
├── Dynamic content
└── API endpoints

Edge Locations
├── Cached content
├── Static assets
├── Geographic distribution
└── Low latency delivery

Client Requests
├── DNS resolution to nearest edge
├── Cache hit/miss logic
├── Origin fetch if needed
└── Content delivery
```

### CDN Configuration
**AWS CloudFront:**
```json
{
  "DistributionConfig": {
    "CallerReference": "my-distribution",
    "Origins": {
      "Quantity": 1,
      "Items": [
        {
          "Id": "myorigin",
          "DomainName": "example.com",
          "CustomOriginConfig": {
            "HTTPPort": 80,
            "HTTPSPort": 443,
            "OriginProtocolPolicy": "https-only"
          }
        }
      ]
    },
    "DefaultCacheBehavior": {
      "TargetOriginId": "myorigin",
      "ViewerProtocolPolicy": "redirect-to-https",
      "TrustedSigners": {
        "Enabled": false,
        "Quantity": 0
      }
    },
    "Enabled": true
  }
}
```

## Serverless Networking

### AWS Lambda Networking
**VPC Configuration:**
```json
{
  "FunctionName": "my-function",
  "VpcConfig": {
    "SubnetIds": ["subnet-12345678", "subnet-87654321"],
    "SecurityGroupIds": ["sg-12345678"]
  }
}
```

**API Gateway Integration:**
```yaml
Resources:
  MyApi:
    Type: AWS::ApiGateway::RestApi
    Properties:
      Name: MyAPI
      
  MyResource:
    Type: AWS::ApiGateway::Resource
    Properties:
      RestApiId: !Ref MyApi
      ParentId: !GetAtt MyApi.RootResourceId
      PathPart: myresource
      
  MyMethod:
    Type: AWS::ApiGateway::Method
    Properties:
      RestApiId: !Ref MyApi
      ResourceId: !Ref MyResource
      HttpMethod: GET
      Integration:
        Type: AWS_PROXY
        IntegrationHttpMethod: POST
        Uri: !Sub arn:aws:apigateway:${AWS::Region}:lambda:path/2015-03-31/functions/${MyFunction.Arn}/invocations
```

## Cloud Network Monitoring

### AWS CloudWatch
```bash
# Create custom metric
aws cloudwatch put-metric-data \
    --namespace "Custom/Network" \
    --metric-data MetricName=Latency,Value=100,Unit=Milliseconds

# Create alarm
aws cloudwatch put-metric-alarm \
    --alarm-name "High-Latency" \
    --alarm-description "Alert when latency exceeds threshold" \
    --metric-name Latency \
    --namespace Custom/Network \
    --statistic Average \
    --period 300 \
    --threshold 200 \
    --comparison-operator GreaterThanThreshold
```

### Azure Monitor
```bash
# Create action group
az monitor action-group create \
    --resource-group myResourceGroup \
    --name myActionGroup \
    --short-name myAG

# Create metric alert
az monitor metrics alert create \
    --name myAlert \
    --resource-group myResourceGroup \
    --scopes /subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myVNet \
    --condition "avg Network In > 1000000" \
    --action myActionGroup
```

## Practical Exercises

### Exercise 1: Multi-Tier VPC Design
1. Design three-tier architecture in AWS VPC
2. Configure public and private subnets
3. Set up NAT Gateway for outbound connectivity
4. Implement security groups and NACLs

### Exercise 2: Hybrid Connectivity
1. Set up site-to-site VPN connection
2. Configure BGP routing
3. Test connectivity and failover
4. Monitor connection status

### Exercise 3: Container Networking
1. Deploy Kubernetes cluster
2. Configure network policies
3. Set up ingress controller
4. Implement service mesh

## Lab Assignment
1. Build complete cloud networking solution
2. Implement multi-cloud connectivity
3. Deploy containerized applications
4. Set up monitoring and alerting
5. Document architecture and procedures

## Cloud Networking Best Practices

### Design Principles
1. **Security First**: Implement zero trust
2. **Scalability**: Plan for growth
3. **Resilience**: Design for failure
4. **Performance**: Optimize for latency
5. **Cost Optimization**: Monitor and optimize costs

### Implementation Guidelines
1. **Network Segmentation**: Isolate workloads
2. **Automation**: Use Infrastructure as Code
3. **Monitoring**: Implement comprehensive monitoring
4. **Documentation**: Maintain accurate documentation
5. **Testing**: Validate configurations

## Quiz Questions
1. What are the key components of a VPC?
2. How does Direct Connect differ from VPN?
3. What are the benefits of using a service mesh?
4. Explain the difference between ClusterIP and LoadBalancer services in Kubernetes
5. What are the advantages of using CDN for content delivery?

## Next Module
Module 12: Emerging Technologies - SDN, NFV, and Future Networks