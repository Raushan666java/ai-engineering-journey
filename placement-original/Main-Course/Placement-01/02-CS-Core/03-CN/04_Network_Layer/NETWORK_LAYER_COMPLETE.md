# Module 4: Network Layer (Layer 3)
## 🌐 Routing and Logical Addressing

---

## 📚 Chapter 1: Network Layer Overview

### **Network Layer Functions**
```
Primary Functions:
✓ Logical Addressing (IP addresses)
✓ Routing (Path determination)
✓ Packet Forwarding
✓ Fragmentation and Reassembly
✓ Error Reporting (ICMP)
✓ Quality of Service (QoS)

Key Protocols:
✓ Internet Protocol (IP) - IPv4/IPv6
✓ Internet Control Message Protocol (ICMP)
✓ Address Resolution Protocol (ARP)
✓ Reverse ARP (RARP)
✓ Dynamic Host Configuration Protocol (DHCP)
✓ Routing Protocols (RIP, OSPF, BGP)
```

### **Network Layer Services**
```
Connectionless Service:
✓ Each packet treated independently
✓ No connection establishment
✓ Best-effort delivery
✓ Example: IP protocol

Connection-Oriented Service:
✓ Virtual circuit establishment
✓ Guaranteed delivery order
✓ Resource reservation
✓ Example: ATM, Frame Relay
```

---

## 🔢 Chapter 2: IP Addressing (IPv4)

### **2.1 IPv4 Address Structure**

#### **Basic Format**
```
IPv4 Address: 32-bit number (4 bytes)
Format: X.X.X.X (dotted decimal notation)
Range: 0.0.0.0 to 255.255.255.255
Total Addresses: 2^32 = 4,294,967,296

Example: 192.168.1.100
Binary: 11000000.10101000.00000001.01100100

Address Components:
- Network Portion: Identifies the network
- Host Portion: Identifies the host within network
```

#### **Address Classes (Classful Addressing)**
```
Class A:
Range: 1.0.0.0 to 126.255.255.255
Default Mask: 255.0.0.0 (/8)
Networks: 126 (2^7 - 2)
Hosts per Network: 16,777,214 (2^24 - 2)
Usage: Large organizations

Class B:
Range: 128.0.0.0 to 191.255.255.255
Default Mask: 255.255.0.0 (/16)
Networks: 16,384 (2^14)
Hosts per Network: 65,534 (2^16 - 2)
Usage: Medium organizations

Class C:
Range: 192.0.0.0 to 223.255.255.255
Default Mask: 255.255.255.0 (/24)
Networks: 2,097,152 (2^21)
Hosts per Network: 254 (2^8 - 2)
Usage: Small organizations

Class D (Multicast):
Range: 224.0.0.0 to 239.255.255.255
Usage: Multicast groups

Class E (Experimental):
Range: 240.0.0.0 to 255.255.255.255
Usage: Research and development
```

#### **Special IP Addresses**
```
Reserved Addresses:
✓ 0.0.0.0: This network
✓ 127.0.0.1: Loopback address
✓ 255.255.255.255: Limited broadcast
✓ Network address: All host bits = 0
✓ Broadcast address: All host bits = 1

Private IP Ranges (RFC 1918):
✓ Class A: 10.0.0.0 to 10.255.255.255
✓ Class B: 172.16.0.0 to 172.31.255.255
✓ Class C: 192.168.0.0 to 192.168.255.255

Link-Local Addresses:
✓ Range: 169.254.0.0 to 169.254.255.255
✓ Used when DHCP fails
✓ Automatic Private IP Addressing (APIPA)
```

### **2.2 Subnetting**

#### **Subnet Mask**
```
Purpose: Separates network and host portions
Format: Consecutive 1s followed by consecutive 0s

Examples:
255.255.255.0 = /24 = 11111111.11111111.11111111.00000000
255.255.240.0 = /20 = 11111111.11111111.11110000.00000000
255.255.255.192 = /26 = 11111111.11111111.11111111.11000000

CIDR Notation:
/24 = 24 network bits, 8 host bits
/20 = 20 network bits, 12 host bits
/26 = 26 network bits, 6 host bits
```

#### **Subnetting Process**
```
Example: Subnet 192.168.1.0/24 into 4 subnets

Step 1: Determine required subnet bits
4 subnets = 2^2, so need 2 bits
New mask: /24 + 2 = /26 (255.255.255.192)

Step 2: Calculate subnet increment
256 - 192 = 64 (increment)

Step 3: List subnets
Subnet 1: 192.168.1.0/26 (hosts: 1-62, broadcast: 63)
Subnet 2: 192.168.1.64/26 (hosts: 65-126, broadcast: 127)
Subnet 3: 192.168.1.128/26 (hosts: 129-190, broadcast: 191)
Subnet 4: 192.168.1.192/26 (hosts: 193-254, broadcast: 255)

Each subnet: 64 addresses (62 usable hosts)
```

#### **Variable Length Subnet Masking (VLSM)**
```
Purpose: Efficient IP address utilization
Concept: Different subnet sizes for different requirements

Example Network: 172.16.0.0/16
Requirements:
- Sales: 100 hosts
- Engineering: 50 hosts
- Management: 20 hosts
- Point-to-point links: 2 hosts each

Solution:
1. Sales: 172.16.1.0/25 (126 hosts available)
2. Engineering: 172.16.2.0/26 (62 hosts available)
3. Management: 172.16.3.0/27 (30 hosts available)
4. P2P Link 1: 172.16.4.0/30 (2 hosts available)
5. P2P Link 2: 172.16.4.4/30 (2 hosts available)
```

### **2.3 Supernetting (Route Aggregation)**
```
Purpose: Combine multiple networks into single route
Benefits: Reduces routing table size

Example:
Individual networks:
192.168.0.0/24
192.168.1.0/24
192.168.2.0/24
192.168.3.0/24

Supernet: 192.168.0.0/22
Covers: 192.168.0.0 to 192.168.3.255
Routing table: 1 entry instead of 4
```

---

## 🌐 Chapter 3: IPv6 Addressing

### **3.1 IPv6 Overview**

#### **Why IPv6?**
```
IPv4 Limitations:
✗ Address exhaustion (4.3 billion addresses)
✗ Complex NAT requirements
✗ Limited QoS support
✗ No built-in security

IPv6 Advantages:
✓ Huge address space (2^128 addresses)
✓ Simplified header format
✓ Built-in security (IPSec)
✓ Better QoS support
✓ Auto-configuration capabilities
✓ No NAT required
```

#### **IPv6 Address Format**
```
Length: 128 bits (16 bytes)
Format: 8 groups of 4 hexadecimal digits
Separator: Colon (:)

Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334

Compression Rules:
1. Leading zeros can be omitted
   2001:0db8:85a3:0000:0000:8a2e:0370:7334
   → 2001:db8:85a3:0:0:8a2e:370:7334

2. Consecutive zero groups can be replaced with ::
   2001:db8:85a3:0:0:8a2e:370:7334
   → 2001:db8:85a3::8a2e:370:7334

Note: :: can only be used once per address
```

#### **IPv6 Address Types**
```
Unicast Addresses:
✓ Global Unicast: Internet routable (2000::/3)
✓ Link-Local: Local network only (fe80::/10)
✓ Unique Local: Private networks (fc00::/7)
✓ Loopback: ::1 (equivalent to 127.0.0.1)

Multicast Addresses:
✓ Range: ff00::/8
✓ All nodes: ff02::1
✓ All routers: ff02::2

Anycast Addresses:
✓ Same as unicast format
✓ Assigned to multiple interfaces
✓ Packet delivered to nearest interface
```

### **3.2 IPv6 Subnetting**
```
Standard Allocation:
/48 - Site prefix (organization)
/64 - Subnet prefix (network segment)
/128 - Host address (single interface)

Example:
ISP allocation: 2001:db8::/32
Organization: 2001:db8:1234::/48
Subnets: 2001:db8:1234:0001::/64
         2001:db8:1234:0002::/64
         2001:db8:1234:0003::/64

Interface ID: Usually 64 bits
Can be:
- EUI-64 format (based on MAC address)
- Random (privacy extensions)
- Manual configuration
```

---

## 🔄 Chapter 4: Routing Concepts

### **4.1 Routing Fundamentals**

#### **What is Routing?**
```
Definition: Process of selecting paths in a network to send packets

Key Components:
✓ Routing Table: Database of network destinations
✓ Routing Algorithm: Method to calculate best path
✓ Routing Protocol: Rules for sharing routing information
✓ Routing Metrics: Criteria for path selection

Routing Decisions Based On:
✓ Destination IP address
✓ Routing table entries
✓ Administrative distance
✓ Metric values
```

#### **Routing Table Structure**
```
Routing Table Entry Components:
✓ Destination Network: Target network address
✓ Subnet Mask: Network/host boundary
✓ Next Hop: Next router IP address
✓ Interface: Outgoing interface
✓ Metric: Cost of the route
✓ Administrative Distance: Route reliability

Example Routing Table:
Destination    Mask           Next Hop      Interface  Metric
0.0.0.0        0.0.0.0        192.168.1.1   Eth0       1
192.168.1.0    255.255.255.0  0.0.0.0       Eth0       0
10.0.0.0       255.0.0.0      192.168.1.2   Eth0       2
172.16.0.0     255.255.0.0    192.168.1.3   Eth0       3
```

### **4.2 Routing Types**

#### **Static Routing**
```
Characteristics:
✓ Manually configured routes
✓ No automatic updates
✓ Low overhead
✓ Predictable paths

Advantages:
✓ Simple configuration
✓ No routing protocol overhead
✓ Secure (no routing updates)
✓ Predictable behavior

Disadvantages:
✗ Manual maintenance required
✗ No automatic failover
✗ Not scalable for large networks
✗ Administrative overhead

Configuration Example (Cisco):
Router(config)# ip route 10.0.0.0 255.0.0.0 192.168.1.2
Router(config)# ip route 0.0.0.0 0.0.0.0 192.168.1.1
```

#### **Dynamic Routing**
```
Characteristics:
✓ Automatic route discovery
✓ Adaptive to network changes
✓ Protocol-based communication
✓ Scalable solution

Types:
1. Distance Vector Protocols
2. Link State Protocols
3. Hybrid Protocols

Advantages:
✓ Automatic network discovery
✓ Fault tolerance
✓ Scalability
✓ Load balancing

Disadvantages:
✗ Protocol overhead
✗ Convergence time
✗ Complexity
✗ Security concerns
```

### **4.3 Routing Algorithms**

#### **Distance Vector Algorithm**
```
Concept: Each router maintains distance to all destinations
Algorithm: Bellman-Ford algorithm
Information Shared: Distance and direction to destinations

Characteristics:
✓ Periodic updates (every 30 seconds)
✓ Full routing table shared
✓ Hop count as metric
✓ Split horizon to prevent loops

Examples: RIP, IGRP

RIP (Routing Information Protocol):
- Metric: Hop count (max 15)
- Update timer: 30 seconds
- Hold-down timer: 180 seconds
- Flush timer: 240 seconds

Routing Loop Prevention:
✓ Maximum hop count (15)
✓ Split horizon
✓ Route poisoning
✓ Hold-down timers
```

#### **Link State Algorithm**
```
Concept: Each router has complete network topology
Algorithm: Dijkstra's shortest path first (SPF)
Information Shared: Link state advertisements (LSAs)

Characteristics:
✓ Triggered updates
✓ Link state database
✓ SPF calculation
✓ Hierarchical design

Examples: OSPF, IS-IS

OSPF (Open Shortest Path First):
- Metric: Cost (based on bandwidth)
- Areas for scalability
- Fast convergence
- VLSM support

LSA Types:
1. Router LSA: Router's links
2. Network LSA: Multi-access networks
3. Summary LSA: Inter-area routes
4. ASBR Summary LSA: External routes
5. AS External LSA: External destinations
```

#### **Path Vector Algorithm**
```
Concept: Maintains path information to prevent loops
Used in: Border Gateway Protocol (BGP)

Characteristics:
✓ Path attributes for decision making
✓ Policy-based routing
✓ Loop prevention through path information
✓ Scalable for internet routing

BGP Attributes:
✓ AS_PATH: Autonomous system path
✓ NEXT_HOP: Next hop IP address
✓ LOCAL_PREF: Local preference
✓ MED: Multi-exit discriminator
✓ ORIGIN: Route origin
✓ COMMUNITY: Route tagging
```

---

## 📡 Chapter 5: Internet Protocol (IP)

### **5.1 IPv4 Header Format**

#### **IPv4 Header Structure (20-60 bytes)**
```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|Version|  IHL  |Type of Service|          Total Length         |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|         Identification        |Flags|      Fragment Offset    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  Time to Live |    Protocol   |         Header Checksum       |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                       Source Address                          |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Destination Address                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Options                    |    Padding    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

Field Descriptions:
Version (4 bits): IP version (4 for IPv4)
IHL (4 bits): Internet Header Length (5-15)
Type of Service (8 bits): QoS markings
Total Length (16 bits): Packet size (header + data)
Identification (16 bits): Fragment identification
Flags (3 bits): Control fragmentation
Fragment Offset (13 bits): Fragment position
Time to Live (8 bits): Maximum hops
Protocol (8 bits): Next layer protocol
Header Checksum (16 bits): Error detection
Source Address (32 bits): Sender IP
Destination Address (32 bits): Receiver IP
Options (0-40 bytes): Optional fields
```

#### **Key Fields Explained**
```
Type of Service (ToS) / DSCP:
- Precedence (3 bits): Priority level
- Delay (1 bit): Low delay requirement
- Throughput (1 bit): High throughput requirement
- Reliability (1 bit): High reliability requirement
- Cost (1 bit): Low cost requirement

Flags:
- Bit 0: Reserved (must be 0)
- Bit 1: Don't Fragment (DF)
- Bit 2: More Fragments (MF)

Protocol Field Values:
1 = ICMP (Internet Control Message Protocol)
6 = TCP (Transmission Control Protocol)
17 = UDP (User Datagram Protocol)
89 = OSPF (Open Shortest Path First)
```

### **5.2 IPv6 Header Format**

#### **IPv6 Header Structure (40 bytes fixed)**
```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|Version| Traffic Class |           Flow Label                  |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|         Payload Length        |  Next Header  |   Hop Limit   |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
+                                                               +
|                                                               |
+                         Source Address                        +
|                                                               |
+                                                               +
|                                                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
+                                                               +
|                                                               |
+                      Destination Address                      +
|                                                               |
+                                                               +
|                                                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

Improvements over IPv4:
✓ Fixed header size (40 bytes)
✓ No header checksum (faster processing)
✓ No fragmentation by routers
✓ Better QoS support
✓ Extension headers for options
```

### **5.3 IP Fragmentation**

#### **IPv4 Fragmentation**
```
When Required:
- Packet size > MTU (Maximum Transmission Unit)
- Router fragments large packets
- Destination reassembles fragments

Fragmentation Process:
1. Check if DF (Don't Fragment) flag is set
2. If DF=1, drop packet and send ICMP error
3. If DF=0, fragment the packet

Fragment Fields:
- Identification: Same for all fragments
- More Fragments (MF): 1 for all except last
- Fragment Offset: Position in original packet

Example:
Original packet: 4000 bytes, MTU: 1500 bytes
Fragment 1: Bytes 0-1479 (MF=1, Offset=0)
Fragment 2: Bytes 1480-2959 (MF=1, Offset=185)
Fragment 3: Bytes 2960-3999 (MF=0, Offset=370)
```

#### **IPv6 Fragmentation**
```
Key Differences:
✓ Only source can fragment
✓ Routers never fragment
✓ Path MTU Discovery required
✓ Fragment header used

Fragment Header Format:
- Next Header (8 bits)
- Reserved (8 bits)
- Fragment Offset and Flags (16 bits)
- Identification (32 bits)
```

---

## 🔧 Chapter 6: Supporting Protocols

### **6.1 Internet Control Message Protocol (ICMP)**

#### **ICMP Overview**
```
Purpose: Error reporting and network diagnostics
Layer: Network layer (but uses IP for transport)
Protocol Number: 1 (in IP header)

ICMP Message Types:
✓ Error Messages: Report problems
✓ Query Messages: Network diagnostics

Common ICMP Messages:
Type 0: Echo Reply (ping response)
Type 3: Destination Unreachable
Type 5: Redirect
Type 8: Echo Request (ping)
Type 11: Time Exceeded
Type 12: Parameter Problem
```

#### **ICMP Message Format**
```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|     Type      |     Code      |          Checksum             |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                             Data                              |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

Destination Unreachable Codes:
0: Network unreachable
1: Host unreachable
2: Protocol unreachable
3: Port unreachable
4: Fragmentation needed but DF set
5: Source route failed
```

#### **ICMP Applications**
```
Ping (Echo Request/Reply):
- Tests connectivity
- Measures round-trip time
- Command: ping 8.8.8.8

Traceroute (Time Exceeded):
- Traces packet path
- Uses TTL manipulation
- Command: tracert google.com (Windows)
           traceroute google.com (Linux/Mac)

Path MTU Discovery:
- Finds maximum packet size
- Uses fragmentation needed message
- Optimizes packet transmission
```

### **6.2 Address Resolution Protocol (ARP)**

#### **ARP Overview**
```
Purpose: Maps IP addresses to MAC addresses
Scope: Local network segment only
Protocol Type: 0x0806 (in Ethernet frame)

ARP Process:
1. Host needs to send packet to IP address
2. Checks ARP cache for MAC address
3. If not found, sends ARP request (broadcast)
4. Target host sends ARP reply (unicast)
5. Sender updates ARP cache
6. Packet transmitted using MAC address
```

#### **ARP Message Format**
```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|         Hardware Type         |         Protocol Type         |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  HW Addr Len | Proto Addr Len|           Operation           |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Sender Hardware Address                    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|     Sender Hardware Address   |    Sender Protocol Address    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|    Sender Protocol Address    |    Target Hardware Address    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|     Target Hardware Address   |    Target Protocol Address    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|    Target Protocol Address    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

Operation Codes:
1: ARP Request
2: ARP Reply
3: RARP Request
4: RARP Reply
```

#### **ARP Cache Management**
```
ARP Cache Entry:
- IP Address: Logical address
- MAC Address: Physical address
- Type: Static or Dynamic
- Timeout: Entry expiration time

Commands:
Windows: arp -a (view cache)
         arp -d (clear cache)
Linux:   arp -n (view cache)
         arp -d <ip> (delete entry)

Cache Timeout:
- Dynamic entries: 2-20 minutes
- Static entries: Permanent until reboot
- Incomplete entries: Few seconds
```

### **6.3 Dynamic Host Configuration Protocol (DHCP)**

#### **DHCP Overview**
```
Purpose: Automatic IP address assignment
Port Numbers: 67 (server), 68 (client)
Protocol: UDP
Scope: Network segment (with relay agents for remote)

DHCP Benefits:
✓ Centralized IP management
✓ Automatic configuration
✓ Reduced configuration errors
✓ Efficient IP utilization
✓ Easy network changes
```

#### **DHCP Process (DORA)**
```
1. DISCOVER (Client → Broadcast):
   - Client broadcasts DHCP discover
   - Source: 0.0.0.0, Destination: 255.255.255.255
   - Requests IP configuration

2. OFFER (Server → Client):
   - Server offers IP configuration
   - Includes IP, subnet mask, gateway, DNS
   - Lease time specified

3. REQUEST (Client → Broadcast):
   - Client requests specific configuration
   - May receive multiple offers
   - Broadcasts acceptance of one offer

4. ACKNOWLEDGE (Server → Client):
   - Server confirms configuration
   - Client can use IP address
   - Lease timer starts
```

#### **DHCP Message Format**
```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|     op (1)    |   htype (1)   |   hlen (1)    |   hops (1)    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                            xid (4)                            |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|           secs (2)            |           flags (2)           |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                          ciaddr  (4)                          |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                          yiaddr  (4)                          |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                          siaddr  (4)                          |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                          giaddr  (4)                          |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
|                          chaddr  (16)                         |
|                                                               |
|                                                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
|                          sname   (64)                         |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
|                          file    (128)                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
|                        options (variable)                     |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

Key Fields:
op: Operation (1=request, 2=reply)
xid: Transaction ID
ciaddr: Client IP address
yiaddr: Your IP address (offered)
siaddr: Server IP address
giaddr: Gateway IP address
chaddr: Client hardware address
```

#### **DHCP Options**
```
Common DHCP Options:
Option 1: Subnet Mask
Option 3: Router (Default Gateway)
Option 6: DNS Servers
Option 15: Domain Name
Option 51: Lease Time
Option 53: DHCP Message Type
Option 54: Server Identifier
Option 55: Parameter Request List

Example Configuration:
IP Address: 192.168.1.100
Subnet Mask: 255.255.255.0
Default Gateway: 192.168.1.1
DNS Servers: 8.8.8.8, 8.8.4.4
Lease Time: 24 hours
```

---

## 🎯 Practice Questions - Module 4

### **Multiple Choice Questions (100 Questions)**

**Q1.** What is the maximum number of hosts in a /26 subnet?
a) 30
b) 62
c) 126
d) 254

**Answer: b) 62**
*Explanation: /26 means 26 network bits, leaving 6 host bits. 2^6 - 2 = 64 - 2 = 62 usable host addresses.*

**Q2.** Which IPv4 address class has the default subnet mask of 255.255.0.0?
a) Class A
b) Class B
c) Class C
d) Class D

**Answer: b) Class B**
*Explanation: Class B networks use /16 or 255.255.0.0 as the default subnet mask.*

**Q3.** What is the network address for host 172.16.45.200/20?
a) 172.16.32.0
b) 172.16.40.0
c) 172.16.45.0
d) 172.16.48.0

**Answer: a) 172.16.32.0**
*Explanation: /20 means first 20 bits are network. 172.16.45.200 in binary has network portion 172.16.32.0.*

**Q4.** Which protocol is used to map IP addresses to MAC addresses?
a) RARP
b) ICMP
c) ARP
d) DHCP

**Answer: c) ARP**
*Explanation: Address Resolution Protocol (ARP) maps IP addresses to MAC addresses on local networks.*

**Q5.** What is the purpose of the TTL field in an IP header?
a) To specify packet priority
b) To prevent routing loops
c) To identify packet fragments
d) To indicate packet size

**Answer: b) To prevent routing loops**
*Explanation: Time To Live (TTL) decrements at each router and prevents packets from circulating indefinitely.*

### **Subnetting Practice Questions (25 Questions)**

**Q1.** Subnet the network 10.0.0.0/8 to create 16 subnets. What is the new subnet mask?

**Answer:**
```
Original: 10.0.0.0/8
Required subnets: 16 = 2^4
Subnet bits needed: 4
New mask: /8 + 4 = /12 or 255.240.0.0

Subnets:
10.0.0.0/12
10.16.0.0/12
10.32.0.0/12
...
10.240.0.0/12

Each subnet has 2^20 - 2 = 1,048,574 hosts
```

**Q2.** What is the broadcast address for the network 192.168.100.64/27?

**Answer:**
```
Network: 192.168.100.64/27
Subnet mask: 255.255.255.224
Host bits: 32 - 27 = 5
Hosts per subnet: 2^5 = 32

Network range: 192.168.100.64 to 192.168.100.95
Broadcast address: 192.168.100.95
```

### **IPv6 Questions (15 Questions)**

**Q1.** Compress the IPv6 address: 2001:0db8:0000:0000:0000:0000:0000:0001

**Answer:**
```
Original: 2001:0db8:0000:0000:0000:0000:0000:0001
Step 1: Remove leading zeros: 2001:db8:0:0:0:0:0:1
Step 2: Compress consecutive zeros: 2001:db8::1
```

**Q2.** What is the IPv6 loopback address?

**Answer: ::1**
*Explanation: IPv6 loopback address is ::1, equivalent to 127.0.0.1 in IPv4.*

### **Routing Questions (30 Questions)**

**Q1.** What is the administrative distance of a directly connected route?
a) 0
b) 1
c) 90
d) 120

**Answer: a) 0**
*Explanation: Directly connected routes have the highest trustworthiness with AD = 0.*

**Q2.** Which routing protocol uses the Bellman-Ford algorithm?
a) OSPF
b) RIP
c) BGP
d) IS-IS

**Answer: b) RIP**
*Explanation: RIP (Routing Information Protocol) uses the Bellman-Ford distance vector algorithm.*

### **Protocol Questions (30 Questions)**

**Q1.** What ICMP message type is used by the ping command?
a) Type 3 (Destination Unreachable)
b) Type 5 (Redirect)
c) Type 8 (Echo Request)
d) Type 11 (Time Exceeded)

**Answer: c) Type 8 (Echo Request)**
*Explanation: Ping uses ICMP Echo Request (Type 8) and expects Echo Reply (Type 0).*

**Q2.** In the DHCP process, what does the client send after receiving a DHCP Offer?
a) DHCP Discover
b) DHCP Request
c) DHCP Acknowledge
d) DHCP Release

**Answer: b) DHCP Request**
*Explanation: After receiving offers, the client sends a DHCP Request to accept one of the offers.*

---

## 🔬 Lab Exercises - Module 4

### **Lab 1: IP Addressing and Subnetting**

**Exercise 1.1: Subnet Design**
```
Scenario: Design subnets for a company with following requirements:
- Sales Department: 50 hosts
- Engineering: 100 hosts  
- Management: 20 hosts
- Guest Network: 30 hosts
- Point-to-point links: 3 links

Given Network: 172.16.0.0/16

Solution:
1. Engineering: 172.16.1.0/25 (126 hosts)
2. Sales: 172.16.2.0/26 (62 hosts)
3. Guest: 172.16.3.0/27 (30 hosts)
4. Management: 172.16.4.0/27 (30 hosts)
5. P2P Link 1: 172.16.5.0/30 (2 hosts)
6. P2P Link 2: 172.16.5.4/30 (2 hosts)
7. P2P Link 3: 172.16.5.8/30 (2 hosts)

Verification:
- All requirements met
- Efficient address utilization
- Room for future growth
```

**Exercise 1.2: VLSM Implementation**
```
Network: 10.0.0.0/8
Requirements:
- Region A: 1000 hosts
- Region B: 500 hosts
- Region C: 250 hosts
- Region D: 100 hosts
- WAN Links: 10 links

Solution Process:
1. Sort by size (largest first)
2. Assign appropriate subnet sizes
3. Verify no overlap

Assignments:
Region A: 10.1.0.0/22 (1022 hosts)
Region B: 10.2.0.0/23 (510 hosts)
Region C: 10.3.0.0/24 (254 hosts)
Region D: 10.4.0.0/25 (126 hosts)
WAN Links: 10.5.0.0/30, 10.5.0.4/30, etc.
```

### **Lab 2: Router Configuration**

**Exercise 2.1: Static Routing Configuration**
```
Topology:
Router A (192.168.1.1) ---- Router B (192.168.2.1) ---- Router C (192.168.3.1)
    |                           |                           |
  LAN A                       LAN B                       LAN C
(10.1.0.0/24)              (10.2.0.0/24)              (10.3.0.0/24)

Router A Configuration:
RouterA(config)# interface fastethernet0/0
RouterA(config-if)# ip address 10.1.0.1 255.255.255.0
RouterA(config-if)# no shutdown
RouterA(config-if)# exit

RouterA(config)# interface serial0/0
RouterA(config-if)# ip address 192.168.1.1 255.255.255.0
RouterA(config-if)# no shutdown
RouterA(config-if)# exit

RouterA(config)# ip route 10.2.0.0 255.255.255.0 192.168.1.2
RouterA(config)# ip route 10.3.0.0 255.255.255.0 192.168.1.2
RouterA(config)# ip route 192.168.2.0 255.255.255.0 192.168.1.2

Verification Commands:
RouterA# show ip route
RouterA# show ip interface brief
RouterA# ping 10.2.0.1
RouterA# ping 10.3.0.1
```

**Exercise 2.2: Dynamic Routing (RIP)**
```
RIP Configuration:
RouterA(config)# router rip
RouterA(config-router)# version 2
RouterA(config-router)# network 10.1.0.0
RouterA(config-router)# network 192.168.1.0
RouterA(config-router)# no auto-summary

RouterB(config)# router rip
RouterB(config-router)# version 2
RouterB(config-router)# network 10.2.0.0
RouterB(config-router)# network 192.168.1.0
RouterB(config-router)# network 192.168.2.0
RouterB(config-router)# no auto-summary

RouterC(config)# router rip
RouterC(config-router)# version 2
RouterC(config-router)# network 10.3.0.0
RouterC(config-router)# network 192.168.2.0
RouterC(config-router)# no auto-summary

Verification:
RouterA# show ip protocols
RouterA# show ip rip database
RouterA# debug ip rip
```

### **Lab 3: DHCP Configuration**

**Exercise 3.1: DHCP Server Setup**
```
DHCP Server Configuration (Cisco Router):
Router(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.10
Router(config)# ip dhcp excluded-address 192.168.1.250 192.168.1.255

Router(config)# ip dhcp pool LAN_POOL
Router(dhcp-config)# network 192.168.1.0 255.255.255.0
Router(dhcp-config)# default-router 192.168.1.1
Router(dhcp-config)# dns-server 8.8.8.8 8.8.4.4
Router(dhcp-config)# lease 7
Router(dhcp-config)# exit

Router(config)# service dhcp

Verification:
Router# show ip dhcp binding
Router# show ip dhcp pool
Router# show ip dhcp conflict
Router# debug ip dhcp server events
```

**Exercise 3.2: DHCP Client Configuration**
```
Windows Client:
1. Open Network Adapter Properties
2. Select "Obtain an IP address automatically"
3. Select "Obtain DNS server address automatically"
4. Click OK

Command Line Verification:
C:\> ipconfig /all
C:\> ipconfig /release
C:\> ipconfig /renew

Linux Client:
# dhclient eth0
# dhclient -r eth0  (release)
# dhclient eth0     (renew)

Verification:
# ifconfig
# cat /var/lib/dhcp/dhclient.leases
```

### **Lab 4: Network Troubleshooting**

**Exercise 4.1: Connectivity Testing**
```
Troubleshooting Steps:
1. Physical Layer Check:
   - Cable connections
   - Link lights
   - Interface status

2. Data Link Layer Check:
   - ARP table entries
   - Switch MAC table
   - VLAN configuration

3. Network Layer Check:
   - IP configuration
   - Routing table
   - Ping tests

4. Transport Layer Check:
   - Port connectivity
   - Firewall rules
   - Service status

Commands:
Windows:
C:\> ping 8.8.8.8
C:\> tracert google.com
C:\> arp -a
C:\> ipconfig /all
C:\> netstat -rn

Linux:
# ping 8.8.8.8
# traceroute google.com
# arp -n
# ifconfig
# route -n
# netstat -rn

Cisco:
Router# ping 8.8.8.8
Router# traceroute google.com
Router# show arp
Router# show ip interface brief
Router# show ip route
```

**Exercise 4.2: Packet Analysis with Wireshark**
```
Capture Scenarios:
1. DHCP Process Analysis:
   - Start Wireshark capture
   - Release and renew IP address
   - Analyze DORA process
   - Examine DHCP options

2. ARP Process Analysis:
   - Clear ARP cache
   - Ping remote host
   - Observe ARP request/reply
   - Analyze ARP packet structure

3. ICMP Analysis:
   - Perform ping test
   - Analyze echo request/reply
   - Test unreachable destination
   - Examine ICMP error messages

Wireshark Filters:
dhcp - DHCP traffic only
arp - ARP traffic only
icmp - ICMP traffic only
ip.addr == 192.168.1.1 - Specific IP traffic
```

---

## 📚 Additional Resources

### **Recommended Books**
```
1. "TCP/IP Illustrated, Volume 1" - W. Richard Stevens
   - Detailed protocol analysis
   - Packet-level explanations
   - Real-world examples

2. "Routing TCP/IP, Volume 1" - Jeff Doyle
   - Comprehensive routing coverage
   - Protocol implementations
   - Troubleshooting techniques

3. "Internet Routing Architectures" - Bassam Halabi
   - BGP and internet routing
   - ISP-level concepts
   - Advanced routing topics
```

### **Online Tools**
```
IP Calculators:
✓ subnet-calculator.com
✓ ipcalc.org
✓ calculator.net/ip-subnet-calculator.html

Network Simulators:
✓ Cisco Packet Tracer
✓ GNS3
✓ EVE-NG
✓ Boson NetSim

Protocol Analyzers:
✓ Wireshark
✓ tcpdump
✓ Microsoft Network Monitor
✓ SolarWinds Network Performance Monitor
```

### **Certification Preparation**
```
CCNA (200-301):
✓ IP addressing and subnetting
✓ Routing protocols (OSPF, EIGRP)
✓ Network troubleshooting
✓ IPv6 implementation

CompTIA Network+ (N10-008):
✓ Network concepts
✓ Infrastructure implementation
✓ Network operations
✓ Network security

JNCIA-Junos:
✓ Juniper routing concepts
✓ Junos OS fundamentals
✓ Routing policy implementation
```

---

## 🎯 Module 4 Summary

### **Key Concepts Mastered**
✓ IPv4 and IPv6 addressing schemes
✓ Subnetting and VLSM techniques
✓ Routing concepts and algorithms
✓ IP protocol operations
✓ Supporting protocols (ICMP, ARP, DHCP)

### **Practical Skills Developed**
✓ Subnet design and implementation
✓ Router configuration and management
✓ Network troubleshooting methodology
✓ Protocol analysis with packet captures
✓ DHCP server configuration

### **Interview Preparation**
✓ Subnetting calculations
✓ Routing protocol comparisons
✓ Network troubleshooting scenarios
✓ Protocol operation explanations
✓ Network design principles

### **Next Module Preview**
**Module 5: Transport Layer**
- TCP and UDP protocols
- Port numbers and socket programming
- Flow control and congestion control
- Connection management

---

**🎯 Excellent progress! Ready to tackle the Transport Layer? 🚀**