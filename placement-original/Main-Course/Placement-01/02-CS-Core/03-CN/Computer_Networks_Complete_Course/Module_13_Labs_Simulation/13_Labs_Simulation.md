# Module 13: Labs and Simulation

## Lab Environment Setup
This module provides hands-on experience with network simulation tools and real-world scenarios to reinforce theoretical concepts.

## Cisco Packet Tracer Labs

### Lab 1: Basic Network Setup
**Objective**: Create a simple LAN with PCs and switches

**Topology**:
```
PC1 ---- Switch1 ---- Switch2 ---- PC2
         |                    |
        PC3                  PC4
```

**Configuration Steps**:
1. Add devices: 4 PCs, 2 switches
2. Connect with straight-through cables
3. Configure IP addresses:
   - PC1: 192.168.1.10/24
   - PC2: 192.168.1.20/24
   - PC3: 192.168.1.30/24
   - PC4: 192.168.1.40/24
4. Test connectivity with ping

**Verification Commands**:
```
PC> ipconfig
PC> ping 192.168.1.20
PC> arp -a
```

### Lab 2: VLAN Configuration
**Objective**: Implement VLANs for network segmentation

**Topology**:
```
PC1(VLAN10) ---- Switch1 ---- Switch2 ---- PC3(VLAN10)
PC2(VLAN20) ----    |    ----    |    ---- PC4(VLAN20)
```

**Switch Configuration**:
```cisco
# Create VLANs
vlan 10
name Sales
vlan 20
name Engineering
exit

# Configure access ports
interface fa0/1
switchport mode access
switchport access vlan 10

interface fa0/2
switchport mode access
switchport access vlan 20

# Configure trunk port
interface fa0/24
switchport mode trunk
switchport trunk allowed vlan 10,20
```

**Testing**:
- PCs in same VLAN should communicate
- PCs in different VLANs should not communicate

### Lab 3: Router Configuration and Inter-VLAN Routing
**Objective**: Configure router for inter-VLAN communication

**Topology**:
```
Router ---- Switch ---- PC1(VLAN10)
              |    ---- PC2(VLAN20)
```

**Router Configuration**:
```cisco
# Configure subinterfaces
interface g0/0.10
encapsulation dot1q 10
ip address 192.168.10.1 255.255.255.0

interface g0/0.20
encapsulation dot1q 20
ip address 192.168.20.1 255.255.255.0

interface g0/0
no shutdown
```

**Switch Configuration**:
```cisco
# Configure trunk to router
interface g0/1
switchport mode trunk
switchport trunk allowed vlan 10,20
```

### Lab 4: OSPF Routing Protocol
**Objective**: Configure OSPF for dynamic routing

**Topology**:
```
Router1 ---- Router2 ---- Router3
   |                         |
Network1                 Network3
192.168.1.0/24          192.168.3.0/24
```

**OSPF Configuration**:
```cisco
# Router1
router ospf 1
network 192.168.1.0 0.0.0.255 area 0
network 10.1.1.0 0.0.0.3 area 0

# Router2
router ospf 1
network 10.1.1.0 0.0.0.3 area 0
network 10.1.2.0 0.0.0.3 area 0

# Router3
router ospf 1
network 192.168.3.0 0.0.0.255 area 0
network 10.1.2.0 0.0.0.3 area 0
```

**Verification**:
```cisco
show ip route
show ip ospf neighbor
show ip ospf database
```

### Lab 5: Access Control Lists (ACLs)
**Objective**: Implement security policies with ACLs

**Scenario**: Block telnet from Sales VLAN to Engineering VLAN

**ACL Configuration**:
```cisco
# Standard ACL
access-list 10 deny 192.168.10.0 0.0.0.255
access-list 10 permit any

# Extended ACL
access-list 100 deny tcp 192.168.10.0 0.0.0.255 192.168.20.0 0.0.0.255 eq 23
access-list 100 permit ip any any

# Apply to interface
interface g0/0.20
ip access-group 100 in
```

## GNS3 Advanced Labs

### Lab 6: Multi-Area OSPF
**Objective**: Configure OSPF with multiple areas

**Topology**:
```
Area 0 (Backbone)
Router1 ---- Router2 ---- Router3
   |                         |
Area 1                    Area 2
Router4                   Router5
```

**Configuration**:
```cisco
# Area Border Router (Router1)
router ospf 1
network 10.0.0.0 0.0.0.3 area 0
network 192.168.1.0 0.0.0.255 area 1
area 1 stub

# Internal Router (Router4 - Area 1)
router ospf 1
network 192.168.1.0 0.0.0.255 area 1
network 192.168.4.0 0.0.0.255 area 1
area 1 stub
```

### Lab 7: BGP Configuration
**Objective**: Configure BGP for inter-AS routing

**Topology**:
```
AS 100          AS 200          AS 300
Router1 ------- Router2 ------- Router3
```

**BGP Configuration**:
```cisco
# Router1 (AS 100)
router bgp 100
neighbor 10.1.1.2 remote-as 200
network 192.168.1.0 mask 255.255.255.0

# Router2 (AS 200)
router bgp 200
neighbor 10.1.1.1 remote-as 100
neighbor 10.1.2.2 remote-as 300
network 192.168.2.0 mask 255.255.255.0

# Router3 (AS 300)
router bgp 300
neighbor 10.1.2.1 remote-as 200
network 192.168.3.0 mask 255.255.255.0
```

### Lab 8: MPLS VPN
**Objective**: Configure MPLS Layer 3 VPN

**Topology**:
```
CE1 ---- PE1 ---- P ---- PE2 ---- CE2
(VRF A)                        (VRF A)
```

**MPLS Configuration**:
```cisco
# PE Router Configuration
ip vrf CUSTOMER_A
rd 65000:100
route-target export 65000:100
route-target import 65000:100

interface g0/1
ip vrf forwarding CUSTOMER_A
ip address 192.168.1.1 255.255.255.0

router bgp 65000
address-family ipv4 vrf CUSTOMER_A
redistribute connected
neighbor 192.168.1.2 remote-as 65001
neighbor 192.168.1.2 activate
```

## Wireshark Protocol Analysis

### Lab 9: HTTP Traffic Analysis
**Objective**: Analyze HTTP communication

**Steps**:
1. Start Wireshark capture
2. Browse to website (http://example.com)
3. Stop capture and analyze

**Analysis Points**:
- HTTP request methods (GET, POST)
- HTTP response codes (200, 404, 500)
- HTTP headers (User-Agent, Content-Type)
- TCP three-way handshake
- TCP connection termination

**Wireshark Filters**:
```
http                    # HTTP traffic only
tcp.port == 80         # Traffic on port 80
ip.addr == 192.168.1.1 # Traffic to/from specific IP
tcp.flags.syn == 1     # TCP SYN packets
```

### Lab 10: DNS Resolution Analysis
**Objective**: Analyze DNS query and response

**Steps**:
1. Clear DNS cache: `ipconfig /flushdns`
2. Start Wireshark capture
3. Perform DNS lookup: `nslookup google.com`
4. Analyze DNS packets

**Analysis Points**:
- DNS query structure
- DNS response with A records
- DNS caching behavior
- Recursive vs iterative queries

### Lab 11: DHCP Process Analysis
**Objective**: Analyze DHCP DORA process

**Steps**:
1. Release IP address: `ipconfig /release`
2. Start Wireshark capture
3. Renew IP address: `ipconfig /renew`
4. Analyze DHCP packets

**DHCP Packet Analysis**:
- DHCP Discover (broadcast)
- DHCP Offer (unicast)
- DHCP Request (broadcast)
- DHCP Acknowledge (unicast)

## Network Troubleshooting Labs

### Lab 12: Connectivity Troubleshooting
**Scenario**: PC cannot reach web server

**Troubleshooting Steps**:
1. **Physical Layer**: Check cables and interfaces
2. **Data Link Layer**: Verify VLAN configuration
3. **Network Layer**: Check IP configuration and routing
4. **Transport Layer**: Test port connectivity
5. **Application Layer**: Verify service status

**Commands**:
```bash
# Layer 1-2 verification
show interfaces
show mac address-table

# Layer 3 verification
ping 8.8.8.8
traceroute google.com
show ip route

# Layer 4 verification
telnet google.com 80
netstat -an
```

### Lab 13: Performance Issues
**Scenario**: Network performance is slow

**Investigation Steps**:
1. **Bandwidth utilization**: Check interface statistics
2. **Latency measurement**: Use ping and traceroute
3. **Packet loss detection**: Monitor error counters
4. **Congestion analysis**: Examine queue depths

**Monitoring Commands**:
```cisco
show interfaces
show interfaces counters
show processes cpu
show memory
```

### Lab 14: Security Incident Response
**Scenario**: Suspicious network activity detected

**Response Steps**:
1. **Isolate affected systems**: VLAN quarantine
2. **Collect evidence**: Packet captures
3. **Analyze traffic patterns**: Identify anomalies
4. **Implement countermeasures**: ACLs and filtering

**Security Analysis**:
```bash
# Monitor connections
netstat -an | grep ESTABLISHED

# Check for suspicious processes
ps aux | grep -v grep

# Analyze logs
tail -f /var/log/syslog
```

## Virtualization Labs

### Lab 15: VMware vSphere Networking
**Objective**: Configure virtual networking

**Components**:
- vSphere Standard Switch (vSS)
- Distributed Switch (vDS)
- Port Groups
- VLAN configuration

**Configuration**:
1. Create virtual switch
2. Configure port groups
3. Assign VLANs
4. Connect VMs to port groups

### Lab 16: Docker Networking
**Objective**: Understand container networking

**Docker Network Types**:
```bash
# Bridge network (default)
docker network create --driver bridge mybridge
docker run -d --network mybridge --name web nginx

# Host network
docker run -d --network host --name web nginx

# Overlay network (Swarm)
docker network create --driver overlay --attachable myoverlay
docker service create --network myoverlay --name web nginx
```

**Network Inspection**:
```bash
docker network ls
docker network inspect bridge
docker exec web ip addr show
```

## Cloud Networking Labs

### Lab 17: AWS VPC Configuration
**Objective**: Build multi-tier VPC architecture

**AWS CLI Commands**:
```bash
# Create VPC
aws ec2 create-vpc --cidr-block 10.0.0.0/16

# Create subnets
aws ec2 create-subnet --vpc-id vpc-12345678 --cidr-block 10.0.1.0/24
aws ec2 create-subnet --vpc-id vpc-12345678 --cidr-block 10.0.2.0/24

# Create Internet Gateway
aws ec2 create-internet-gateway
aws ec2 attach-internet-gateway --vpc-id vpc-12345678 --internet-gateway-id igw-87654321

# Configure routing
aws ec2 create-route-table --vpc-id vpc-12345678
aws ec2 create-route --route-table-id rtb-12345678 --destination-cidr-block 0.0.0.0/0 --gateway-id igw-87654321
```

### Lab 18: Kubernetes Networking
**Objective**: Deploy applications with network policies

**Kubernetes Manifests**:
```yaml
# Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: nginx
        image: nginx
        ports:
        - containerPort: 80

---
# Service
apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  selector:
    app: web
  ports:
  - port: 80
    targetPort: 80
  type: LoadBalancer

---
# Network Policy
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

## Automation Labs

### Lab 19: Ansible Network Automation
**Objective**: Automate network configuration

**Ansible Playbook**:
```yaml
---
- name: Configure Cisco routers
  hosts: routers
  gather_facts: no
  tasks:
    - name: Configure OSPF
      ios_config:
        lines:
          - router ospf 1
          - network 192.168.1.0 0.0.0.255 area 0
          - network 10.1.1.0 0.0.0.3 area 0
        parents: router ospf 1

    - name: Configure interfaces
      ios_config:
        lines:
          - ip address {{ item.ip }} {{ item.mask }}
          - no shutdown
        parents: interface {{ item.interface }}
      loop:
        - { interface: "GigabitEthernet0/0", ip: "192.168.1.1", mask: "255.255.255.0" }
        - { interface: "GigabitEthernet0/1", ip: "10.1.1.1", mask: "255.255.255.252" }
```

### Lab 20: Python Network Programming
**Objective**: Create network automation scripts

**Python Script**:
```python
#!/usr/bin/env python3
import paramiko
import time

def configure_device(hostname, username, password, commands):
    """Configure network device via SSH"""
    try:
        # Create SSH client
        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        
        # Connect to device
        ssh.connect(hostname, username=username, password=password)
        
        # Create shell
        shell = ssh.invoke_shell()
        time.sleep(1)
        
        # Send commands
        for command in commands:
            shell.send(command + '\n')
            time.sleep(1)
        
        # Get output
        output = shell.recv(4096).decode()
        print(f"Configuration completed for {hostname}")
        print(output)
        
        ssh.close()
        
    except Exception as e:
        print(f"Error configuring {hostname}: {str(e)}")

# Configuration commands
commands = [
    'configure terminal',
    'interface GigabitEthernet0/0',
    'ip address 192.168.1.1 255.255.255.0',
    'no shutdown',
    'exit',
    'router ospf 1',
    'network 192.168.1.0 0.0.0.255 area 0',
    'exit',
    'exit',
    'write memory'
]

# Configure multiple devices
devices = [
    {'hostname': '192.168.1.10', 'username': 'admin', 'password': 'cisco'},
    {'hostname': '192.168.1.11', 'username': 'admin', 'password': 'cisco'}
]

for device in devices:
    configure_device(device['hostname'], device['username'], device['password'], commands)
```

## Certification Preparation Labs

### Lab 21: CCNA Practice Scenarios
**Scenario 1**: Configure small office network
- 2 routers, 2 switches, 8 PCs
- OSPF routing
- VLANs and inter-VLAN routing
- DHCP and NAT

**Scenario 2**: Troubleshoot connectivity issues
- Identify and fix configuration errors
- Verify routing and switching
- Test end-to-end connectivity

### Lab 22: Network+ Simulation
**Objectives**:
- Network troubleshooting methodology
- Protocol analysis
- Security implementation
- Performance optimization

## Lab Documentation Template

### Lab Report Structure
```
1. Objective
   - What you're trying to accomplish
   - Learning goals

2. Topology
   - Network diagram
   - Device specifications
   - IP addressing scheme

3. Configuration
   - Step-by-step procedures
   - Command syntax
   - Configuration files

4. Verification
   - Testing procedures
   - Expected results
   - Troubleshooting steps

5. Analysis
   - Packet captures
   - Performance metrics
   - Lessons learned

6. Conclusion
   - Summary of results
   - Recommendations
   - Future improvements
```

## Best Practices for Labs

### Lab Environment Management
1. **Version Control**: Track configuration changes
2. **Documentation**: Maintain detailed records
3. **Backup**: Save working configurations
4. **Testing**: Verify before production
5. **Cleanup**: Reset environment after labs

### Safety Guidelines
1. **Isolated Environment**: Use separate lab network
2. **Change Control**: Document all modifications
3. **Rollback Plan**: Prepare recovery procedures
4. **Access Control**: Limit administrative access
5. **Monitoring**: Watch for unexpected behavior

## Quiz Questions
1. What is the difference between simulation and emulation?
2. How do you configure trunk ports in Cisco switches?
3. What Wireshark filter shows only HTTP traffic?
4. How do you troubleshoot OSPF neighbor relationships?
5. What are the benefits of network automation?

## Next Module
Module 14: Capstone Projects - Real-world Network Implementation