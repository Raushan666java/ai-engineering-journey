# 🌐 Networking Concepts - Complete Theory

## 📋 Network Fundamentals

### OSI Model
```
7. Application  - HTTP, HTTPS, FTP, SSH
6. Presentation - SSL/TLS, Encryption
5. Session      - NetBIOS, RPC
4. Transport    - TCP, UDP
3. Network      - IP, ICMP, Routing
2. Data Link    - Ethernet, WiFi
1. Physical     - Cables, Hubs, Repeaters
```

### TCP/IP Model
```
4. Application  - HTTP, HTTPS, DNS, DHCP
3. Transport    - TCP, UDP
2. Internet     - IP, ICMP, ARP
1. Network      - Ethernet, WiFi
```

## 🔗 Network Protocols

### HTTP/HTTPS
```bash
# HTTP Request Structure
GET /api/users HTTP/1.1
Host: api.example.com
User-Agent: Mozilla/5.0
Accept: application/json
Authorization: Bearer token123

# HTTPS with SSL/TLS
curl -k https://api.example.com/users
openssl s_client -connect example.com:443
```

### DNS (Domain Name System)
```bash
# DNS Resolution Process
1. Browser cache
2. OS cache
3. Router cache
4. ISP DNS server
5. Root DNS server
6. TLD DNS server
7. Authoritative DNS server

# DNS Commands
nslookup google.com
dig google.com
host google.com

# DNS Record Types
A     - IPv4 address
AAAA  - IPv6 address
CNAME - Canonical name
MX    - Mail exchange
TXT   - Text records
NS    - Name server
```

### DHCP (Dynamic Host Configuration Protocol)
```bash
# DHCP Process (DORA)
1. Discover - Client broadcasts DHCP discover
2. Offer    - Server offers IP configuration
3. Request  - Client requests offered configuration
4. Acknowledge - Server acknowledges assignment

# DHCP Configuration
subnet 192.168.1.0 netmask 255.255.255.0 {
  range 192.168.1.100 192.168.1.200;
  option routers 192.168.1.1;
  option domain-name-servers 8.8.8.8, 8.8.4.4;
  option domain-name "example.com";
}
```

## 🏗️ Network Architecture

### Subnetting
```bash
# CIDR Notation
192.168.1.0/24  = 256 addresses (192.168.1.0 - 192.168.1.255)
192.168.1.0/25  = 128 addresses (192.168.1.0 - 192.168.1.127)
192.168.1.0/26  = 64 addresses  (192.168.1.0 - 192.168.1.63)

# Subnet Calculation
Network: 192.168.1.0/24
Subnet Mask: 255.255.255.0
Broadcast: 192.168.1.255
Usable IPs: 192.168.1.1 - 192.168.1.254
```

### VLANs (Virtual LANs)
```bash
# VLAN Configuration
interface GigabitEthernet0/1
 switchport mode access
 switchport access vlan 10

interface GigabitEthernet0/2
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30

# VLAN Benefits
- Network segmentation
- Improved security
- Broadcast domain control
- Flexible network design
```

### VPN (Virtual Private Network)
```bash
# VPN Types
Site-to-Site VPN - Connect networks
Remote Access VPN - Connect users
SSL VPN - Web-based access
IPSec VPN - Encrypted tunnels

# OpenVPN Configuration
port 1194
proto udp
dev tun
server 10.8.0.0 255.255.255.0
push "redirect-gateway def1 bypass-dhcp"
push "dhcp-option DNS 8.8.8.8"
```

## 🔒 Network Security

### Firewalls
```bash
# iptables Rules
# Allow SSH
iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Allow HTTP/HTTPS
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Block all other incoming
iptables -A INPUT -j DROP

# UFW (Uncomplicated Firewall)
ufw enable
ufw allow ssh
ufw allow 80/tcp
ufw allow 443/tcp
ufw deny 23/tcp
```

### Network Access Control
```bash
# Security Groups (AWS)
{
  "GroupId": "sg-12345678",
  "IpPermissions": [
    {
      "IpProtocol": "tcp",
      "FromPort": 80,
      "ToPort": 80,
      "IpRanges": [{"CidrIp": "0.0.0.0/0"}]
    },
    {
      "IpProtocol": "tcp",
      "FromPort": 22,
      "ToPort": 22,
      "IpRanges": [{"CidrIp": "10.0.0.0/8"}]
    }
  ]
}

# Network ACLs
Rule | Type | Protocol | Port | Source | Action
100  | HTTP | TCP      | 80   | 0.0.0.0/0 | ALLOW
200  | HTTPS| TCP      | 443  | 0.0.0.0/0 | ALLOW
*    | ALL  | ALL      | ALL  | 0.0.0.0/0 | DENY
```

## ⚖️ Load Balancing

### Load Balancer Types
```bash
# Layer 4 (Transport Layer)
- Routes based on IP and port
- Faster processing
- Protocol agnostic
- Examples: AWS NLB, HAProxy

# Layer 7 (Application Layer)
- Routes based on content
- HTTP header inspection
- SSL termination
- Examples: AWS ALB, Nginx
```

### Load Balancing Algorithms
```bash
# Round Robin
Server 1 → Server 2 → Server 3 → Server 1...

# Weighted Round Robin
Server 1 (weight: 3) → Server 2 (weight: 1) → Server 3 (weight: 2)

# Least Connections
Route to server with fewest active connections

# IP Hash
hash(client_ip) % server_count = server_index
```

### Nginx Load Balancer
```nginx
upstream backend {
    # Round robin (default)
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
    
    # Weighted
    server backend1.example.com weight=3;
    server backend2.example.com weight=1;
    
    # Health checks
    server backend1.example.com max_fails=3 fail_timeout=30s;
}

server {
    listen 80;
    location / {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

### HAProxy Configuration
```bash
global
    daemon
    maxconn 4096

defaults
    mode http
    timeout connect 5000ms
    timeout client 50000ms
    timeout server 50000ms

frontend web_frontend
    bind *:80
    default_backend web_servers

backend web_servers
    balance roundrobin
    option httpchk GET /health
    server web1 192.168.1.10:80 check
    server web2 192.168.1.11:80 check
    server web3 192.168.1.12:80 check
```

## 🌍 Content Delivery Networks (CDN)

### CDN Architecture
```
User → Edge Server → Origin Server
     ↓
   Cached Content
```

### CDN Benefits
- Reduced latency
- Decreased server load
- Improved availability
- DDoS protection
- Global content distribution

### CloudFront Configuration
```json
{
  "DistributionConfig": {
    "CallerReference": "my-distribution",
    "Origins": {
      "Quantity": 1,
      "Items": [
        {
          "Id": "origin1",
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
      "TargetOriginId": "origin1",
      "ViewerProtocolPolicy": "redirect-to-https",
      "MinTTL": 0,
      "DefaultTTL": 86400
    },
    "Enabled": true
  }
}
```

## 🐳 Container Networking

### Docker Networking
```bash
# Network Types
bridge   - Default network driver
host     - Use host's network stack
none     - No networking
overlay  - Multi-host networking

# Create custom network
docker network create --driver bridge my-network

# Connect container to network
docker run --network my-network nginx

# Inspect network
docker network inspect my-network
```

### Kubernetes Networking
```yaml
# Pod-to-Pod Communication
apiVersion: v1
kind: Pod
metadata:
  name: frontend
spec:
  containers:
  - name: app
    image: nginx
    ports:
    - containerPort: 80

---
# Service for load balancing
apiVersion: v1
kind: Service
metadata:
  name: frontend-service
spec:
  selector:
    app: frontend
  ports:
  - port: 80
    targetPort: 80
  type: LoadBalancer

---
# Network Policy
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress
```

### Service Mesh
```yaml
# Istio Service Mesh
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

## 📊 Network Monitoring

### Network Monitoring Tools
```bash
# Basic network commands
ping google.com              # Test connectivity
traceroute google.com        # Trace route
netstat -tulpn              # Show listening ports
ss -tulpn                   # Modern netstat
iftop                       # Network usage by host
nethogs                     # Network usage by process
tcpdump -i eth0             # Packet capture
wireshark                   # GUI packet analyzer
```

### SNMP Monitoring
```bash
# SNMP Configuration
# /etc/snmp/snmpd.conf
community public
syslocation "Data Center"
syscontact "admin@example.com"

# SNMP Queries
snmpwalk -v2c -c public localhost system
snmpget -v2c -c public localhost 1.3.6.1.2.1.1.1.0
```

### Network Performance Metrics
```bash
# Key Metrics
Bandwidth utilization
Packet loss
Latency/RTT
Jitter
Error rates
Connection counts

# Monitoring with Prometheus
# Network exporter metrics
node_network_receive_bytes_total
node_network_transmit_bytes_total
node_network_receive_packets_total
node_network_transmit_packets_total
```

## 🔧 Network Troubleshooting

### Common Network Issues
```bash
# Connectivity Issues
1. Physical layer - Check cables, ports
2. Network layer - Check IP configuration
3. Transport layer - Check port accessibility
4. Application layer - Check service status

# Troubleshooting Commands
ip addr show                 # Show IP configuration
ip route show               # Show routing table
ping -c 4 8.8.8.8          # Test internet connectivity
nslookup google.com         # Test DNS resolution
telnet google.com 80        # Test port connectivity
curl -I http://google.com   # Test HTTP connectivity
```

### Network Diagnostics
```bash
# MTU Discovery
ping -M do -s 1472 google.com

# Bandwidth Testing
iperf3 -s                   # Server mode
iperf3 -c server_ip         # Client mode

# DNS Troubleshooting
dig @8.8.8.8 google.com     # Query specific DNS server
nslookup google.com 8.8.8.8 # Alternative DNS query

# Port Scanning
nmap -p 80,443 google.com   # Scan specific ports
nmap -sS google.com         # SYN scan
```

## 🚀 Network Automation

### Network as Code
```python
# Python network automation
import paramiko
import netmiko
from netmiko import ConnectHandler

# Device connection
device = {
    'device_type': 'cisco_ios',
    'host': '192.168.1.1',
    'username': 'admin',
    'password': 'password',
}

# Connect and execute commands
connection = ConnectHandler(**device)
output = connection.send_command('show ip interface brief')
print(output)
connection.disconnect()
```

### Ansible Network Modules
```yaml
- name: Configure VLAN
  cisco.ios.ios_vlans:
    config:
      - vlan_id: 100
        name: production
        state: active
      - vlan_id: 200
        name: development
        state: active

- name: Configure interface
  cisco.ios.ios_interfaces:
    config:
      - name: GigabitEthernet0/1
        description: "Production VLAN"
        enabled: true
```

## 🎯 Best Practices

### Network Security
- Implement defense in depth
- Use network segmentation
- Regular security audits
- Monitor network traffic
- Keep firmware updated

### Performance Optimization
- Optimize routing protocols
- Implement QoS policies
- Monitor bandwidth usage
- Use caching strategies
- Load balance traffic

### Documentation
- Network topology diagrams
- IP address management
- Configuration backups
- Change management procedures
- Incident response plans