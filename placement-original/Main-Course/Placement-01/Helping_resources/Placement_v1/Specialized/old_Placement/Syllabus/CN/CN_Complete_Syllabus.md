# 🌐 Computer Networks - Complete Syllabus
*Duration: 10-12 weeks | Focus: Theory + Practical Implementation*

## Week 1-2: Network Fundamentals 🟢

### Network Basics
**Core Concepts (3 days)**
- Network definition: interconnected devices for communication
- Network components: nodes, links, protocols, services
- Network criteria: performance, reliability, security
- Network types: LAN, MAN, WAN, PAN, VPN

**Network Topologies (2 days)**
```
Physical Topologies:
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│    Star     │    │    Ring     │    │    Mesh     │
│      *      │    │   ○─○─○     │    │  ○─○─○     │
│    / | \    │    │   |   |     │    │  |X|X|     │
│   ○  ○  ○   │    │   ○───○     │    │  ○─○─○     │
└─────────────┘    └─────────────┘    └─────────────┘

Logical Topologies:
- Ethernet: CSMA/CD
- Token Ring: Token passing
- Wireless: CSMA/CA
```

**Network Performance Metrics (2 days)**
```
Bandwidth: Maximum data rate (bps)
Throughput: Actual data rate achieved
Latency: Time delay (propagation + transmission + processing + queuing)
Jitter: Variation in latency
Packet Loss: Percentage of lost packets

Calculations:
Transmission Time = Data Size / Bandwidth
Propagation Time = Distance / Speed of Signal
Total Delay = Transmission + Propagation + Processing + Queuing
```

### Transmission Media
**Guided Media (2 days)**
```
Twisted Pair:
- UTP (Unshielded): Cat5e, Cat6, Cat6a
- STP (Shielded): Better noise immunity
- Applications: Ethernet, telephone

Coaxial Cable:
- Better bandwidth than twisted pair
- Applications: Cable TV, older Ethernet

Fiber Optic:
- Single-mode: Long distance, laser
- Multi-mode: Short distance, LED
- Advantages: High bandwidth, no EMI, secure
```

**Unguided Media (1 day)**
```
Radio Waves: 3 KHz - 1 GHz
- AM/FM radio, WiFi, Bluetooth

Microwaves: 1 GHz - 300 GHz
- Point-to-point communication, satellite

Infrared: 300 GHz - 400 THz
- Remote controls, short-range communication
```

## Week 3: OSI Reference Model 🟡

### Seven Layer Architecture
**Layer Functions (4 days)**
```
Layer 7 - Application:
- User interface to network
- Protocols: HTTP, FTP, SMTP, DNS
- Services: File transfer, email, web browsing

Layer 6 - Presentation:
- Data encryption/decryption
- Data compression
- Data format conversion (ASCII, JPEG, MPEG)

Layer 5 - Session:
- Session establishment, maintenance, termination
- Dialog control (half-duplex, full-duplex)
- Synchronization and checkpointing

Layer 4 - Transport:
- End-to-end delivery
- Error detection and correction
- Flow control, congestion control
- Protocols: TCP, UDP

Layer 3 - Network:
- Routing between networks
- Logical addressing (IP addresses)
- Path determination
- Protocols: IP, ICMP, ARP

Layer 2 - Data Link:
- Frame synchronization
- Error detection/correction
- Flow control
- MAC addressing

Layer 1 - Physical:
- Bit transmission
- Electrical/optical signals
- Hardware specifications
```

**Data Encapsulation (2 days)**
```
Application Data
↓ (Application Layer)
Application Data + Application Header
↓ (Transport Layer)
Segment = Transport Header + Application Data
↓ (Network Layer)
Packet = Network Header + Segment
↓ (Data Link Layer)
Frame = Data Link Header + Packet + Trailer
↓ (Physical Layer)
Bits transmitted over medium
```

**Protocol Examples by Layer (1 day)**
```
Layer 7: HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS, DHCP
Layer 6: SSL/TLS, JPEG, MPEG, ASCII
Layer 5: NetBIOS, RPC, SQL sessions
Layer 4: TCP, UDP, SCTP
Layer 3: IP, ICMP, ARP, OSPF, BGP
Layer 2: Ethernet, WiFi, PPP, Frame Relay
Layer 1: Ethernet physical, WiFi physical, fiber optic
```

## Week 4: TCP/IP Model 🟡

### Four Layer Architecture
**Layer Comparison (2 days)**
```
TCP/IP Model          OSI Model
┌─────────────────┐   ┌─────────────────┐
│   Application   │   │   Application   │
│                 │   ├─────────────────┤
│                 │   │  Presentation   │
│                 │   ├─────────────────┤
│                 │   │    Session      │
├─────────────────┤   ├─────────────────┤
│   Transport     │   │   Transport     │
├─────────────────┤   ├─────────────────┤
│   Internet      │   │    Network      │
├─────────────────┤   ├─────────────────┤
│Network Access   │   │   Data Link     │
│                 │   ├─────────────────┤
│                 │   │    Physical     │
└─────────────────┘   └─────────────────┘
```

**Protocol Suite (3 days)**
```
Application Layer Protocols:
- HTTP/HTTPS: Web communication
- FTP: File transfer
- SMTP: Email sending
- POP3/IMAP: Email receiving
- DNS: Domain name resolution
- DHCP: Dynamic IP assignment
- Telnet/SSH: Remote access

Transport Layer:
- TCP: Reliable, connection-oriented
- UDP: Unreliable, connectionless

Internet Layer:
- IP: Packet routing and addressing
- ICMP: Error reporting and diagnostics
- ARP: Address resolution (IP to MAC)

Network Access:
- Ethernet, WiFi, PPP
```

**Internet Protocol (IP) (2 days)**
```
IPv4 Header Format:
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

Key Fields:
- Version: 4 for IPv4, 6 for IPv6
- IHL: Internet Header Length
- TTL: Time to Live (hop count)
- Protocol: Next layer protocol (TCP=6, UDP=17)
```

## Week 5-6: Data Link Layer 🟠

### Frame Structure & Error Control
**Framing Methods (2 days)**
```
Character Count:
[4][A][B][C][D] - First byte indicates frame length

Flag Bytes with Byte Stuffing:
[FLAG][DATA with escaped FLAGS][FLAG]

Starting/Ending Flags:
[01111110][DATA][01111110]

Physical Layer Coding:
Manchester encoding, differential encoding
```

**Error Detection (3 days)**
```
Parity Check:
Even Parity: 1011001 → 10110010 (add 0)
Odd Parity: 1011001 → 10110011 (add 1)

Checksum:
Data: 1001 1100 1010 0011
Sum:  1001 + 1100 = 10101
      10101 + 1010 = 11111
      11111 + 0011 = 100010
Carry: 1 + 00010 = 00011
Checksum: ~00011 = 11100

CRC (Cyclic Redundancy Check):
Generator: x³ + x + 1 = 1011
Data: 1101011011
Dividend: 1101011011000 (append 3 zeros)
CRC calculation using polynomial division
```

**Error Correction (2 days)**
```
Hamming Code:
- Single error correction
- Parity bits at positions 2^n (1,2,4,8,...)
- Each parity bit covers specific bit positions

Example for 4-bit data (1011):
Position: 1 2 3 4 5 6 7
Data:     P P 1 P 0 1 1
P1 covers: 1,3,5,7 → P1 = 1⊕0⊕1 = 0
P2 covers: 2,3,6,7 → P2 = 1⊕1⊕1 = 1  
P4 covers: 4,5,6,7 → P4 = 0⊕1⊕1 = 0
Result: 0110011
```

### Medium Access Control
**CSMA/CD (Ethernet) (2 days)**
```
Algorithm:
1. Listen before transmit (Carrier Sense)
2. Transmit if medium idle
3. Monitor for collisions while transmitting
4. If collision detected:
   - Send jam signal
   - Wait random backoff time
   - Retry transmission

Backoff Algorithm:
- Binary exponential backoff
- Wait time = random(0, 2^min(n,10)) × slot_time
- n = number of collisions
```

**CSMA/CA (WiFi) (2 days)**
```
Algorithm:
1. Listen before transmit
2. If busy, wait for DIFS period
3. Choose random backoff time
4. Transmit RTS (Request to Send)
5. Receive CTS (Clear to Send)
6. Transmit data
7. Receive ACK

Hidden Terminal Problem:
A ←→ B ←→ C
A and C can't hear each other but both can reach B
Solution: RTS/CTS mechanism
```

**Token Ring (1 day)**
```
Operation:
- Token circulates around ring
- Station captures token to transmit
- Releases token after transmission
- No collisions, deterministic access
- Priority mechanism available
```

## Week 7-8: Network Layer 🔴

### IP Addressing
**IPv4 Addressing (3 days)**
```
Address Classes:
Class A: 0.0.0.0 to 127.255.255.255 (8 network bits)
Class B: 128.0.0.0 to 191.255.255.255 (16 network bits)  
Class C: 192.0.0.0 to 223.255.255.255 (24 network bits)
Class D: 224.0.0.0 to 239.255.255.255 (Multicast)
Class E: 240.0.0.0 to 255.255.255.255 (Reserved)

Private IP Ranges:
Class A: 10.0.0.0/8
Class B: 172.16.0.0/12
Class C: 192.168.0.0/16

Special Addresses:
127.0.0.1: Loopback
0.0.0.0: Default route
255.255.255.255: Broadcast
```

**Subnetting (3 days)**
```
Example: 192.168.1.0/24 divided into 4 subnets

Original: 192.168.1.0/24 (256 addresses)
Subnet mask: 255.255.255.0 (/24)

New subnets (/26 - borrow 2 bits):
Subnet 1: 192.168.1.0/26 (192.168.1.0 - 192.168.1.63)
Subnet 2: 192.168.1.64/26 (192.168.1.64 - 192.168.1.127)
Subnet 3: 192.168.1.128/26 (192.168.1.128 - 192.168.1.191)
Subnet 4: 192.168.1.192/26 (192.168.1.192 - 192.168.1.255)

Each subnet: 64 addresses (62 usable)
```

**CIDR (Classless Inter-Domain Routing) (2 days)**
```
CIDR Notation: IP/prefix_length
Example: 203.0.113.0/25

Advantages:
- Eliminates class boundaries
- Reduces routing table size
- More efficient address allocation

Route Aggregation:
203.0.113.0/25 and 203.0.113.128/25
Can be aggregated to: 203.0.113.0/24
```

### Routing Algorithms
**Distance Vector (RIP) (2 days)**
```
Bellman-Ford Algorithm:
D(x,y) = min{c(x,v) + D(v,y)} for all neighbors v

RIP Characteristics:
- Hop count metric (max 15)
- Updates every 30 seconds
- Split horizon to prevent loops
- Count-to-infinity problem

Example:
Router A knows:
- To B: 1 hop
- To C: 2 hops (via B)
- To D: 3 hops (via B→C)
```

**Link State (OSPF) (3 days)**
```
Dijkstra's Algorithm:
1. Initialize distances (0 to source, ∞ to others)
2. Mark source as visited
3. Update distances to neighbors
4. Select unvisited node with minimum distance
5. Repeat until all nodes visited

OSPF Features:
- Area-based hierarchy
- Fast convergence
- Load balancing
- Authentication support
- VLSM support
```

**Path Vector (BGP) (2 days)**
```
BGP Characteristics:
- Inter-AS routing protocol
- Policy-based routing
- Path vector algorithm
- Prevents loops using AS path

BGP Message Types:
- OPEN: Establish connection
- UPDATE: Route advertisements
- KEEPALIVE: Maintain connection
- NOTIFICATION: Error reporting
```

## Week 9-10: Transport Layer 🔴

### TCP (Transmission Control Protocol)
**TCP Features (2 days)**
```
Connection-oriented: 3-way handshake
Reliable: Acknowledgments, retransmissions
Ordered: Sequence numbers
Flow control: Sliding window
Congestion control: Slow start, congestion avoidance
Full-duplex: Bidirectional communication
```

**TCP Header (2 days)**
```
0                   1                   2                   3
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|          Source Port          |       Destination Port        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                        Sequence Number                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Acknowledgment Number                      |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  Data |           |U|A|P|R|S|F|                               |
| Offset| Reserved  |R|C|S|S|Y|I|            Window             |
|       |           |G|K|H|T|N|N|                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|           Checksum            |         Urgent Pointer        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

Flags:
URG: Urgent pointer valid
ACK: Acknowledgment valid  
PSH: Push data immediately
RST: Reset connection
SYN: Synchronize sequence numbers
FIN: Finish connection
```

**TCP Connection Management (2 days)**
```
3-Way Handshake (Connection Establishment):
Client → Server: SYN (seq=x)
Server → Client: SYN+ACK (seq=y, ack=x+1)
Client → Server: ACK (seq=x+1, ack=y+1)

4-Way Handshake (Connection Termination):
Client → Server: FIN (seq=x)
Server → Client: ACK (ack=x+1)
Server → Client: FIN (seq=y)
Client → Server: ACK (ack=y+1)
```

**Flow Control (2 days)**
```
Sliding Window Protocol:
- Receiver advertises window size
- Sender can send up to window size
- Window slides as ACKs received

Example:
Window size = 4
Sender can send packets 1,2,3,4
After ACK for packet 1, window slides
Now can send packets 2,3,4,5
```

**Congestion Control (2 days)**
```
Slow Start:
- cwnd starts at 1 MSS
- Doubles every RTT until threshold
- Exponential growth

Congestion Avoidance:
- Linear increase after threshold
- cwnd += 1/cwnd for each ACK

Fast Retransmit:
- 3 duplicate ACKs trigger retransmission
- Don't wait for timeout

Fast Recovery:
- After fast retransmit, enter fast recovery
- Maintain high throughput
```

### UDP (User Datagram Protocol)
**UDP Characteristics (1 day)**
```
Connectionless: No handshake
Unreliable: No acknowledgments
Unordered: No sequence numbers
No flow control
No congestion control
Low overhead: 8-byte header

UDP Header:
0      7 8     15 16    23 24    31
+--------+--------+--------+--------+
|     Source      |   Destination   |
|      Port       |      Port       |
+--------+--------+--------+--------+
|                 |                 |
|     Length      |    Checksum     |
+--------+--------+--------+--------+
```

**TCP vs UDP Comparison (1 day)**
```
Feature          TCP              UDP
Connection       Connection-oriented  Connectionless
Reliability      Reliable         Unreliable
Ordering         Ordered          Unordered
Speed            Slower           Faster
Overhead         High (20+ bytes) Low (8 bytes)
Applications     HTTP, FTP, SMTP  DNS, DHCP, Video streaming
```

## Week 11-12: Application Layer 🔴

### Web Protocols
**HTTP/HTTPS (3 days)**
```
HTTP Methods:
GET: Retrieve resource
POST: Submit data
PUT: Update resource
DELETE: Remove resource
HEAD: Get headers only
OPTIONS: Get allowed methods

HTTP Status Codes:
1xx: Informational
2xx: Success (200 OK, 201 Created)
3xx: Redirection (301 Moved, 302 Found)
4xx: Client Error (400 Bad Request, 404 Not Found)
5xx: Server Error (500 Internal Server Error)

HTTP Headers:
Host: www.example.com
User-Agent: Mozilla/5.0...
Accept: text/html,application/xhtml+xml
Content-Type: application/json
Content-Length: 1234
```

**HTTPS & Security (2 days)**
```
TLS Handshake:
1. Client Hello (supported ciphers)
2. Server Hello (chosen cipher, certificate)
3. Client verifies certificate
4. Key exchange (RSA/DH)
5. Finished messages
6. Encrypted communication begins

Certificate Chain:
Root CA → Intermediate CA → Server Certificate
```

### Email Protocols
**SMTP (2 days)**
```
SMTP Commands:
HELO/EHLO: Identify client
MAIL FROM: Sender address
RCPT TO: Recipient address
DATA: Message content
QUIT: End session

SMTP Response Codes:
220: Service ready
250: OK
354: Start mail input
550: Mailbox unavailable
```

**POP3 vs IMAP (2 days)**
```
POP3 (Post Office Protocol):
- Download and delete from server
- Offline access
- Single device access
- Commands: USER, PASS, LIST, RETR, DELE

IMAP (Internet Message Access Protocol):
- Messages stay on server
- Multi-device synchronization
- Server-side search
- Folder management
- Commands: LOGIN, SELECT, FETCH, STORE
```

### DNS (Domain Name System)
**DNS Hierarchy (2 days)**
```
DNS Tree Structure:
                    . (root)
                   /|\
                  / | \
               com org net gov edu
              /    |    \
           google yahoo amazon
           /      |      \
        www     mail    ftp

DNS Record Types:
A: IPv4 address
AAAA: IPv6 address
CNAME: Canonical name (alias)
MX: Mail exchange
NS: Name server
PTR: Pointer (reverse lookup)
SOA: Start of authority
```

**DNS Resolution Process (1 day)**
```
Recursive Query Process:
1. Client queries local DNS server
2. Local DNS queries root server
3. Root server returns TLD server
4. Local DNS queries TLD server
5. TLD server returns authoritative server
6. Local DNS queries authoritative server
7. Authoritative server returns IP address
8. Local DNS returns IP to client
```

### DHCP (Dynamic Host Configuration Protocol)
**DHCP Process (1 day)**
```
DORA Process:
1. DISCOVER: Client broadcasts discovery
2. OFFER: Server offers IP configuration
3. REQUEST: Client requests offered configuration
4. ACKNOWLEDGE: Server confirms assignment

DHCP Options:
- IP address and subnet mask
- Default gateway
- DNS servers
- Lease time
- Domain name
```

## Network Security & Devices

### Network Devices (1 day)
```
Hub: Physical layer, collision domain shared
Switch: Data link layer, separate collision domains
Router: Network layer, connects different networks
Gateway: Application layer, protocol conversion
Bridge: Data link layer, connects LAN segments
```

### Security Fundamentals (2 days)
```
Firewall Types:
- Packet filtering: Based on IP/port
- Stateful: Track connection state
- Application: Deep packet inspection

VPN (Virtual Private Network):
- Site-to-site VPN
- Remote access VPN
- Protocols: IPSec, L2TP, PPTP, OpenVPN

Encryption:
- Symmetric: Same key for encrypt/decrypt
- Asymmetric: Public/private key pairs
- Hashing: One-way functions (MD5, SHA)
```

## Interview Preparation

### Common Questions
1. Explain OSI vs TCP/IP model
2. How does TCP ensure reliability?
3. Difference between hub, switch, and router
4. What happens when you type a URL?
5. Explain DNS resolution process
6. TCP vs UDP comparison
7. How does DHCP work?
8. What is subnetting and why is it used?
9. Explain different routing protocols
10. How does HTTP/HTTPS work?

### Practical Scenarios
```bash
# Network troubleshooting commands
ping google.com                    # Test connectivity
traceroute google.com             # Trace route path
nslookup google.com               # DNS lookup
netstat -an                       # Show network connections
ifconfig / ipconfig               # Show network configuration
arp -a                           # Show ARP table
```

## Resources
- **Books**: "Computer Networks" by Tanenbaum, "TCP/IP Illustrated" by Stevens
- **Tools**: Wireshark, Packet Tracer, GNS3
- **Practice**: Set up home lab, capture packets, configure routers
- **Certifications**: CCNA, Network+, JNCIA