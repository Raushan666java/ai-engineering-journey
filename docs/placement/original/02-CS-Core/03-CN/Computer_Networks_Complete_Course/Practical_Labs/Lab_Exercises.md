# Practical Lab Exercises

## Lab Environment Requirements
- Cisco Packet Tracer (Free with NetAcad account)
- GNS3 Network Simulator
- Wireshark Protocol Analyzer
- VMware/VirtualBox for virtual machines
- Access to cloud platforms (AWS/Azure free tier)

## Module 1 Labs: Network Fundamentals

### Lab 1.1: Basic Network Setup
**Objective**: Create and test basic network connectivity
**Tools**: Packet Tracer
**Duration**: 45 minutes

**Topology**:
```
PC1 --- Switch --- PC2
```

**Tasks**:
1. Add 2 PCs and 1 switch to workspace
2. Connect devices with straight-through cables
3. Configure IP addresses: PC1 (192.168.1.10/24), PC2 (192.168.1.20/24)
4. Test connectivity with ping command
5. Analyze ARP table entries

### Lab 1.2: Network Topology Comparison
**Objective**: Compare different network topologies
**Tools**: Packet Tracer
**Duration**: 60 minutes

**Tasks**:
1. Build bus, star, and ring topologies with 4 PCs each
2. Test connectivity and fault tolerance
3. Measure performance differences
4. Document advantages and disadvantages

## Module 2 Labs: Physical Layer

### Lab 2.1: Cable Types and Standards
**Objective**: Understand different cable types and their applications
**Tools**: Physical cables, cable tester
**Duration**: 30 minutes

**Tasks**:
1. Identify Cat5e, Cat6, and fiber optic cables
2. Create straight-through and crossover cables
3. Test cables with cable tester
4. Measure signal attenuation over distance

### Lab 2.2: Wireless Signal Analysis
**Objective**: Analyze wireless signal propagation
**Tools**: WiFi analyzer software
**Duration**: 45 minutes

**Tasks**:
1. Use WiFi analyzer to scan available networks
2. Measure signal strength at different distances
3. Identify interference sources
4. Plan optimal access point placement

## Module 3 Labs: Data Link Layer

### Lab 3.1: Switch Configuration
**Objective**: Configure basic switch settings
**Tools**: Packet Tracer
**Duration**: 60 minutes

**Topology**:
```
PC1 --- Switch1 --- Switch2 --- PC2
         |             |
        PC3           PC4
```

**Configuration**:
```cisco
# Basic switch configuration
enable
configure terminal
hostname Switch1
enable secret cisco
line console 0
password cisco
login
line vty 0 15
password cisco
login
```

### Lab 3.2: VLAN Implementation
**Objective**: Configure VLANs and trunk links
**Tools**: Packet Tracer
**Duration**: 90 minutes

**Tasks**:
1. Create VLANs 10 (Sales) and 20 (Engineering)
2. Assign switch ports to appropriate VLANs
3. Configure trunk links between switches
4. Test VLAN isolation

**Configuration**:
```cisco
# VLAN creation
vlan 10
name Sales
vlan 20
name Engineering

# Access port configuration
interface fa0/1
switchport mode access
switchport access vlan 10

# Trunk port configuration
interface fa0/24
switchport mode trunk
switchport trunk allowed vlan 10,20
```

## Module 4 Labs: Network Layer

### Lab 4.1: Subnetting Practice
**Objective**: Practice subnetting and VLSM
**Tools**: Calculator, Packet Tracer
**Duration**: 75 minutes

**Scenario**: Subnet 192.168.1.0/24 for:
- Sales: 50 hosts
- Engineering: 25 hosts
- Management: 10 hosts
- Point-to-point links: 2 hosts each

**Solution**:
```
Sales: 192.168.1.0/26 (62 hosts available)
Engineering: 192.168.1.64/27 (30 hosts available)
Management: 192.168.1.96/28 (14 hosts available)
P2P Links: 192.168.1.112/30, 192.168.1.116/30, etc.
```

### Lab 4.2: Router Configuration
**Objective**: Configure basic routing
**Tools**: Packet Tracer
**Duration**: 90 minutes

**Topology**:
```
Network A --- Router1 --- Router2 --- Network B
192.168.1.0/24         10.1.1.0/30         192.168.2.0/24
```

**Configuration**:
```cisco
# Router1
interface g0/0
ip address 192.168.1.1 255.255.255.0
no shutdown

interface s0/0/0
ip address 10.1.1.1 255.255.255.252
no shutdown

# Static routing
ip route 192.168.2.0 255.255.255.0 10.1.1.2
```

## Module 5 Labs: Transport Layer

### Lab 5.1: TCP Analysis with Wireshark
**Objective**: Analyze TCP three-way handshake
**Tools**: Wireshark
**Duration**: 45 minutes

**Tasks**:
1. Start Wireshark capture on network interface
2. Open web browser and navigate to website
3. Stop capture and filter for TCP traffic
4. Analyze SYN, SYN-ACK, ACK sequence
5. Examine TCP window sizes and sequence numbers

### Lab 5.2: Socket Programming
**Objective**: Create TCP client-server application
**Tools**: Python IDE
**Duration**: 120 minutes

**TCP Server**:
```python
import socket

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(('localhost', 8080))
server.listen(5)

while True:
    client, addr = server.accept()
    data = client.recv(1024)
    client.send(b"Echo: " + data)
    client.close()
```

**TCP Client**:
```python
import socket

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(('localhost', 8080))
client.send(b"Hello Server")
response = client.recv(1024)
print(response.decode())
client.close()
```

## Module 6 Labs: Application Layer

### Lab 6.1: DNS Server Configuration
**Objective**: Set up DNS server with multiple zones
**Tools**: Linux VM, BIND9
**Duration**: 90 minutes

**Configuration**:
```bash
# Install BIND9
sudo apt-get install bind9

# Configure named.conf.local
zone "example.com" {
    type master;
    file "/etc/bind/db.example.com";
};

# Create zone file
$TTL 86400
@   IN  SOA ns1.example.com. admin.example.com. (
        2024010101  ; Serial
        3600        ; Refresh
        1800        ; Retry
        604800      ; Expire
        86400       ; Minimum TTL
)

@       IN  NS      ns1.example.com.
@       IN  A       192.168.1.10
www     IN  A       192.168.1.10
mail    IN  A       192.168.1.20
```

### Lab 6.2: Web Server Setup
**Objective**: Configure Apache web server with virtual hosts
**Tools**: Linux VM, Apache
**Duration**: 75 minutes

**Tasks**:
1. Install Apache web server
2. Create multiple virtual hosts
3. Configure SSL certificates
4. Test with different domain names

## Module 7 Labs: Network Security

### Lab 7.1: Firewall Configuration
**Objective**: Configure firewall rules for network security
**Tools**: pfSense VM or Packet Tracer
**Duration**: 90 minutes

**Rules**:
```
# Allow HTTP and HTTPS from any to DMZ
allow tcp from any to 192.168.100.0/24 port 80,443

# Allow SSH from management network only
allow tcp from 192.168.200.0/24 to any port 22

# Block all other traffic
deny all from any to any
```

### Lab 7.2: VPN Setup
**Objective**: Configure site-to-site VPN
**Tools**: GNS3, Cisco routers
**Duration**: 120 minutes

**IPSec Configuration**:
```cisco
# Phase 1 (IKE)
crypto isakmp policy 10
encryption aes 256
hash sha256
authentication pre-share
group 14

# Phase 2 (IPSec)
crypto ipsec transform-set MYSET esp-aes 256 esp-sha256-hmac

# Crypto map
crypto map VPNMAP 10 ipsec-isakmp
set peer 203.0.113.2
set transform-set MYSET
match address VPN_TRAFFIC
```

## Module 8 Labs: Wireless Networks

### Lab 8.1: Wireless Access Point Configuration
**Objective**: Configure enterprise wireless network
**Tools**: Packet Tracer
**Duration**: 75 minutes

**Tasks**:
1. Add wireless router and configure SSIDs
2. Set up WPA2-PSK security
3. Configure guest network isolation
4. Test wireless connectivity

### Lab 8.2: WiFi Site Survey
**Objective**: Conduct wireless site survey
**Tools**: WiFi analyzer, measuring tape
**Duration**: 60 minutes

**Tasks**:
1. Map building layout
2. Measure signal strength at various locations
3. Identify dead zones and interference
4. Plan access point placement

## Module 9 Labs: Network Management

### Lab 9.1: SNMP Configuration
**Objective**: Set up SNMP monitoring
**Tools**: Linux VM, Net-SNMP
**Duration**: 90 minutes

**Configuration**:
```bash
# Install SNMP
sudo apt-get install snmp snmp-mibs-downloader

# Configure snmpd.conf
rocommunity public 192.168.1.0/24
syslocation "Server Room A"
syscontact "admin@company.com"

# Test SNMP
snmpwalk -v2c -c public localhost system
```

### Lab 9.2: Network Monitoring Setup
**Objective**: Deploy network monitoring solution
**Tools**: Nagios or Zabbix
**Duration**: 120 minutes

**Tasks**:
1. Install monitoring software
2. Add network devices to monitoring
3. Configure alerts and notifications
4. Create custom dashboards

## Module 10 Labs: Enterprise Networking

### Lab 10.1: OSPF Configuration
**Objective**: Configure OSPF routing protocol
**Tools**: GNS3
**Duration**: 90 minutes

**Topology**:
```
Area 0: Router1 --- Router2 --- Router3
Area 1: Router4 connected to Router1
Area 2: Router5 connected to Router3
```

**Configuration**:
```cisco
# Router1 (ABR)
router ospf 1
network 10.0.0.0 0.0.0.3 area 0
network 192.168.1.0 0.0.0.255 area 1
area 1 stub
```

### Lab 10.2: QoS Implementation
**Objective**: Configure Quality of Service
**Tools**: GNS3
**Duration**: 75 minutes

**Configuration**:
```cisco
# Traffic classification
class-map match-all VOICE
match ip dscp ef

# Policy map
policy-map QOS_POLICY
class VOICE
priority percent 30
class class-default
fair-queue

# Apply to interface
interface s0/0/0
service-policy output QOS_POLICY
```

## Module 11 Labs: Cloud Networking

### Lab 11.1: AWS VPC Setup
**Objective**: Create multi-tier VPC architecture
**Tools**: AWS Console
**Duration**: 90 minutes

**Tasks**:
1. Create VPC with public and private subnets
2. Configure Internet Gateway and NAT Gateway
3. Set up security groups and NACLs
4. Launch EC2 instances in different subnets

### Lab 11.2: Kubernetes Networking
**Objective**: Deploy applications with network policies
**Tools**: Minikube or cloud Kubernetes
**Duration**: 120 minutes

**Network Policy**:
```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: web-netpol
spec:
  podSelector:
    matchLabels:
      app: web
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend
    ports:
    - protocol: TCP
      port: 80
```

## Module 12 Labs: Emerging Technologies

### Lab 12.1: SDN with OpenDaylight
**Objective**: Program SDN controller
**Tools**: OpenDaylight, Mininet
**Duration**: 120 minutes

**Tasks**:
1. Install OpenDaylight controller
2. Create virtual network with Mininet
3. Program flow rules via REST API
4. Test traffic steering

### Lab 12.2: Network Automation
**Objective**: Automate network configuration
**Tools**: Ansible
**Duration**: 90 minutes

**Playbook**:
```yaml
---
- name: Configure network devices
  hosts: routers
  tasks:
    - name: Configure OSPF
      ios_config:
        lines:
          - router ospf 1
          - network 192.168.1.0 0.0.0.255 area 0
```

## Lab Report Template

### Required Sections
1. **Objective**: What you're trying to accomplish
2. **Topology**: Network diagram with IP addresses
3. **Configuration**: Step-by-step commands and settings
4. **Testing**: Verification commands and results
5. **Analysis**: Performance metrics and observations
6. **Conclusion**: Lessons learned and recommendations

### Submission Requirements
- Complete lab report in PDF format
- Configuration files and scripts
- Screenshots of key verification steps
- Packet captures where applicable
- Performance measurements and analysis