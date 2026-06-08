# Computer Networks - Practice Questions Bank

## Module 1: Introduction to Networks

### Multiple Choice Questions

1. **Which layer of the OSI model is responsible for routing packets between networks?**
   a) Physical Layer
   b) Data Link Layer
   c) Network Layer ✓
   d) Transport Layer

2. **What is the maximum number of hosts in a Class C network?**
   a) 254 ✓
   b) 256
   c) 65,534
   d) 16,777,214

3. **Which topology provides the highest level of redundancy?**
   a) Bus
   b) Star
   c) Ring
   d) Mesh ✓

4. **What does the acronym LAN stand for?**
   a) Large Area Network
   b) Local Area Network ✓
   c) Long Area Network
   d) Limited Area Network

5. **Which device operates at the Physical layer of the OSI model?**
   a) Switch
   b) Router
   c) Hub ✓
   d) Bridge

### Short Answer Questions

1. **Explain the difference between a hub and a switch.**
   - Hub: Operates at Physical layer, creates single collision domain, half-duplex
   - Switch: Operates at Data Link layer, separate collision domains per port, full-duplex

2. **List the 7 layers of the OSI model from bottom to top.**
   1. Physical, 2. Data Link, 3. Network, 4. Transport, 5. Session, 6. Presentation, 7. Application

3. **What are the three main types of network topologies?**
   - Physical topology: Actual layout of cables and devices
   - Logical topology: How data flows through the network
   - Signal topology: How signals travel through the medium

## Module 2: Physical Layer

### Multiple Choice Questions

1. **What is the maximum distance for Cat6 UTP cable?**
   a) 90 meters
   b) 100 meters ✓
   c) 185 meters
   d) 500 meters

2. **Which type of fiber optic cable is used for long-distance transmission?**
   a) Multi-mode fiber
   b) Single-mode fiber ✓
   c) Step-index fiber
   d) Graded-index fiber

3. **What encoding method is used by 10Base-T Ethernet?**
   a) NRZ
   b) Manchester ✓
   c) Differential Manchester
   d) 4B/5B

4. **Which PoE standard provides 30W of power?**
   a) 802.3af
   b) 802.3at ✓
   c) 802.3bt Type 3
   d) 802.3bt Type 4

5. **What is the frequency range for 2.4 GHz WiFi?**
   a) 2.400-2.485 GHz ✓
   b) 2.300-2.400 GHz
   c) 2.485-2.500 GHz
   d) 2.200-2.300 GHz

### Practical Questions

1. **Calculate the attenuation for a 1000-meter Cat6 cable at 100 MHz.**
   - Cat6 attenuation: ~2.0 dB/100m at 100 MHz
   - Total attenuation: 1000m × (2.0 dB/100m) = 20 dB

2. **What cable type would you use for the following scenarios?**
   - Desktop to switch (100m): Cat6 UTP
   - Building-to-building (2km): Multi-mode fiber
   - Campus backbone (10km): Single-mode fiber
   - Industrial environment: Shielded twisted pair (STP)

## Module 3: Data Link Layer

### Multiple Choice Questions

1. **What is the purpose of the Frame Check Sequence (FCS) in an Ethernet frame?**
   a) Flow control
   b) Error detection ✓
   c) Address resolution
   d) Frame synchronization

2. **How many bytes is a MAC address?**
   a) 4 bytes
   b) 6 bytes ✓
   c) 8 bytes
   d) 12 bytes

3. **Which protocol prevents loops in switched networks?**
   a) OSPF
   b) RIP
   c) STP ✓
   d) EIGRP

4. **What is the maximum frame size for standard Ethernet?**
   a) 1518 bytes ✓
   b) 1522 bytes
   c) 9000 bytes
   d) 65535 bytes

5. **In CSMA/CD, what happens when a collision is detected?**
   a) Retransmit immediately
   b) Send jam signal and use exponential backoff ✓
   c) Drop the frame
   d) Wait for ACK

### Configuration Questions

1. **Configure a Cisco switch port for VLAN 10:**
```cisco
interface fastethernet0/1
switchport mode access
switchport access vlan 10
```

2. **Configure a trunk port allowing VLANs 10, 20, 30:**
```cisco
interface fastethernet0/24
switchport mode trunk
switchport trunk allowed vlan 10,20,30
```

## Module 4: Network Layer

### Subnetting Questions

1. **Subnet 192.168.1.0/24 into 4 equal subnets:**
   - Subnet 1: 192.168.1.0/26 (192.168.1.1-62)
   - Subnet 2: 192.168.1.64/26 (192.168.1.65-126)
   - Subnet 3: 192.168.1.128/26 (192.168.1.129-190)
   - Subnet 4: 192.168.1.192/26 (192.168.1.193-254)

2. **What is the network address for 10.1.1.100/28?**
   - /28 = 255.255.255.240
   - Network: 10.1.1.96/28
   - Broadcast: 10.1.1.111
   - Usable: 10.1.1.97-110

3. **How many host addresses are available in a /22 network?**
   - /22 = 22 network bits, 10 host bits
   - 2^10 - 2 = 1022 host addresses

### VLSM Questions

1. **Design VLSM for the following requirements:**
   - Network A: 100 hosts → /25 (126 hosts)
   - Network B: 50 hosts → /26 (62 hosts)
   - Network C: 25 hosts → /27 (30 hosts)
   - Point-to-point links: 2 hosts → /30 (2 hosts)

## Module 5: Transport Layer

### Multiple Choice Questions

1. **Which transport protocol is connectionless?**
   a) TCP
   b) UDP ✓
   c) SCTP
   d) SPX

2. **What is the purpose of the TCP three-way handshake?**
   a) Error correction
   b) Flow control
   c) Connection establishment ✓
   d) Congestion control

3. **Which TCP flag is used to terminate a connection?**
   a) SYN
   b) ACK
   c) FIN ✓
   d) RST

4. **What is the range of well-known port numbers?**
   a) 0-1023 ✓
   b) 1024-49151
   c) 49152-65535
   d) 0-65535

5. **Which mechanism does TCP use for flow control?**
   a) Stop-and-wait
   b) Sliding window ✓
   c) Token bucket
   d) Leaky bucket

### Port Number Questions

1. **Match the following services with their port numbers:**
   - HTTP: 80
   - HTTPS: 443
   - FTP: 20/21
   - SSH: 22
   - Telnet: 23
   - SMTP: 25
   - DNS: 53
   - DHCP: 67/68
   - POP3: 110
   - IMAP: 143

## Module 6: Application Layer

### Multiple Choice Questions

1. **Which HTTP method is used to retrieve data from a server?**
   a) POST
   b) PUT
   c) GET ✓
   d) DELETE

2. **What does a DNS A record contain?**
   a) IPv6 address
   b) IPv4 address ✓
   c) Mail server
   d) Canonical name

3. **Which protocol is used for secure email retrieval?**
   a) POP3
   b) IMAP
   c) IMAPS ✓
   d) SMTP

4. **What is the default port for HTTPS?**
   a) 80
   b) 443 ✓
   c) 8080
   d) 8443

5. **Which DHCP message is sent first in the DORA process?**
   a) Offer
   b) Request
   c) Discover ✓
   d) Acknowledge

### DNS Questions

1. **What type of DNS record would you use for:**
   - IPv4 address mapping: A record
   - IPv6 address mapping: AAAA record
   - Mail server: MX record
   - Alias: CNAME record
   - Reverse lookup: PTR record

## Module 7: Network Security

### Multiple Choice Questions

1. **Which encryption algorithm is used in WPA2?**
   a) WEP
   b) TKIP
   c) AES ✓
   d) RC4

2. **What is the main difference between symmetric and asymmetric encryption?**
   a) Speed
   b) Key usage ✓
   c) Algorithm complexity
   d) Security level

3. **Which VPN protocol operates at Layer 2?**
   a) IPSec
   b) L2TP ✓
   c) PPTP
   d) SSL

4. **What does a digital certificate contain?**
   a) Private key
   b) Public key ✓
   c) Symmetric key
   d) Hash value

5. **Which firewall type examines the state of network connections?**
   a) Packet filtering
   b) Stateful inspection ✓
   c) Application gateway
   d) Circuit gateway

### Security Configuration

1. **Configure a basic ACL to block Telnet from 192.168.1.0/24:**
```cisco
access-list 100 deny tcp 192.168.1.0 0.0.0.255 any eq 23
access-list 100 permit ip any any
interface g0/0
ip access-group 100 in
```

## Module 8: Wireless Networks

### Multiple Choice Questions

1. **Which WiFi standard supports the highest data rate?**
   a) 802.11n
   b) 802.11ac
   c) 802.11ax ✓
   d) 802.11be

2. **How many non-overlapping channels are available in 2.4 GHz?**
   a) 11
   b) 3 ✓
   c) 14
   d) 23

3. **Which security protocol replaced WEP?**
   a) WPA ✓
   b) WPA2
   c) WPA3
   d) 802.1X

4. **What is the typical range of Bluetooth Low Energy?**
   a) 1 meter
   b) 10 meters
   c) 50 meters ✓
   d) 100 meters

5. **Which 5G use case requires ultra-low latency?**
   a) eMBB
   b) URLLC ✓
   c) mMTC
   d) FWA

## Module 9: Network Management

### SNMP Questions

1. **Which SNMP version provides security features?**
   a) SNMPv1
   b) SNMPv2c
   c) SNMPv3 ✓
   d) All versions

2. **What does OID stand for?**
   a) Object Identification
   b) Object Identifier ✓
   c) Operational ID
   d) Organizational Identifier

3. **Which SNMP operation is used for unsolicited notifications?**
   a) GET
   b) SET
   c) TRAP ✓
   d) WALK

## Module 10: Enterprise Networking

### Multiple Choice Questions

1. **Which routing protocol is best for large enterprise networks?**
   a) RIP
   b) EIGRP
   c) OSPF ✓
   d) Static routing

2. **What is the purpose of a distribution layer in hierarchical design?**
   a) User connectivity
   b) Policy enforcement ✓
   c) High-speed switching
   d) Internet access

3. **Which QoS mechanism provides guaranteed bandwidth?**
   a) Traffic shaping
   b) Traffic policing
   c) Priority queuing ✓
   d) Fair queuing

## Module 11: Cloud Networking

### Multiple Choice Questions

1. **What does VPC stand for?**
   a) Virtual Private Cloud ✓
   b) Virtual Public Cloud
   c) Virtual Protected Cloud
   d) Virtual Provisioned Cloud

2. **Which AWS service provides dedicated network connectivity?**
   a) VPN Gateway
   b) Internet Gateway
   c) Direct Connect ✓
   d) NAT Gateway

3. **What is the purpose of a service mesh?**
   a) Load balancing
   b) Service-to-service communication ✓
   c) Container orchestration
   d) Network monitoring

## Module 12: Emerging Technologies

### Multiple Choice Questions

1. **What is the main principle of Software-Defined Networking?**
   a) Hardware acceleration
   b) Centralized control ✓
   c) Distributed processing
   d) Protocol optimization

2. **Which protocol is commonly used in SDN?**
   a) OSPF
   b) BGP
   c) OpenFlow ✓
   d) EIGRP

3. **What does NFV stand for?**
   a) Network Function Virtualization ✓
   b) Network Flow Verification
   c) Network Fault Validation
   d) Network Feature Verification

## Answer Key Summary

### Module 1: 1-c, 2-a, 3-d, 4-b, 5-c
### Module 2: 1-b, 2-b, 3-b, 4-b, 5-a
### Module 3: 1-b, 2-b, 3-c, 4-a, 5-b
### Module 5: 1-b, 2-c, 3-c, 4-a, 5-b
### Module 6: 1-c, 2-b, 3-c, 4-b, 5-c
### Module 7: 1-c, 2-b, 3-b, 4-b, 5-b
### Module 8: 1-c, 2-b, 3-a, 4-c, 5-b
### Module 9: 1-c, 2-b, 3-c
### Module 10: 1-c, 2-b, 3-c
### Module 11: 1-a, 2-c, 3-b
### Module 12: 1-b, 2-c, 3-a

## Practice Exam Format

### CCNA Style Questions (200-301)
- 120 questions in 120 minutes
- Multiple choice, drag-and-drop, simulation
- Passing score: 825/1000
- Topics: Network Fundamentals, Network Access, IP Connectivity, IP Services, Security, Automation

### Network+ Style Questions (N10-008)
- 90 questions in 90 minutes
- Multiple choice, performance-based questions
- Passing score: 720/900
- Topics: Networking Fundamentals, Network Implementations, Network Operations, Network Security, Network Troubleshooting

**Regular practice with these questions will help reinforce your understanding and prepare you for certification exams.**