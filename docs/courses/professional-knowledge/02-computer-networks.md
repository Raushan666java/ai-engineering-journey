# Chapter 2: Computer Networks — Exam Quick Revision

## Learning Objectives
- Compare OSI and TCP/IP reference models with layer responsibilities
- Solve IP addressing and subnetting problems using CIDR notation
- Recall well-known port numbers and protocol operations
- Distinguish TCP features (reliable, connection-oriented) from UDP (stateless, fast)
- Trace TCP connection establishment and termination handshakes
- Analyze routing protocols and congestion control mechanisms

---

## 1. OSI vs TCP/IP Model

| Layer | OSI Model (7 Layers) | TCP/IP Model (4/5 Layers) | Protocols &amp; Devices |
|-------|---------------------|--------------------------|----------------------|
| 7 | Application | Application | HTTP, FTP, SMTP, DNS, DHCP, POP3, Telnet |
| 6 | Presentation | (merged) | SSL/TLS, MIME — encryption, compression |
| 5 | Session | (merged) | NetBIOS, RPC — session management |
| 4 | Transport | Transport | TCP, UDP |
| 3 | Network | Internet | IP, ICMP, ARP, OSPF, RIP, BGP — Router |
| 2 | Data Link | Network Access | Ethernet, PPP, MAC — Bridge, Switch |
| 1 | Physical | (hardware) | Cables, hubs, repeaters, modems |

**Exam Mnemonic for OSI:**
- Layer 7-1 (top→bottom): **A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing
- Layer 1-7 (bottom→top): **P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way

---

## 2. IP Addressing

### Classful Addressing

| Class | Leading Bits | Range | NID Bits | HID Bits | Max Networks | Max Hosts/Network |
|-------|-------------|-------|----------|----------|-------------|-------------------|
| A | 0 | 1.0.0.0 – 126.255.255.255 | 8 | 24 | 126 | 2^24 − 2 = 16,777,214 |
| B | 10 | 128.0.0.0 – 191.255.255.255 | 16 | 16 | 16,384 | 2^16 − 2 = 65,534 |
| C | 110 | 192.0.0.0 – 223.255.255.255 | 24 | 8 | 2,097,152 | 2^8 − 2 = 254 |
| D | 1110 | 224.0.0.0 – 239.255.255.255 | — | — | Multicast | — |
| E | 1111 | 240.0.0.0 – 255.255.255.255 | — | — | Reserved | — |

### Classless Addressing (CIDR)
- Format: `IP_address/PrefixLength` — e.g., `192.168.10.0/24`
- Prefix length = number of bits in network portion
- **Subnet mask:** `255.255.255.0` or `11111111.11111111.11111111.00000000`

### Special Addresses
- **127.0.0.0/8:** Loopback (localhost)
- **0.0.0.0/8:** "This network" — default route
- **255.255.255.255:** Limited broadcast (all hosts on local net)
- **10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16:** Private (non-routable on internet)

### Solved Subnetting Numerical

**Problem:** You have the block `200.100.10.0/24`. Create 4 equal-sized subnets.

**Solution:**
- Need 2 bits for 4 subnets (2^2 = 4)
- New prefix: /24 + 2 = /26
- Subnet mask: 255.255.255.192

| Subnet | CIDR | First Host | Last Host | Broadcast |
|--------|------|-----------|-----------|-----------|
| 0 | 200.100.10.0/26 | 200.100.10.1 | 200.100.10.62 | 200.100.10.63 |
| 1 | 200.100.10.64/26 | 200.100.10.65 | 200.100.10.126 | 200.100.10.127 |
| 2 | 200.100.10.128/26 | 200.100.10.129 | 200.100.10.190 | 200.100.10.191 |
| 3 | 200.100.10.192/26 | 200.100.10.193 | 200.100.10.254 | 200.100.10.255 |

**Formula:** Number of hosts per subnet = 2^(32 − prefix) − 2 = 2^6 − 2 = 62

---

## 3. Protocol Port Numbers &amp; Layers

| Protocol | Port | Transport | Description |
|----------|------|-----------|-------------|
| FTP (data) | 20 | TCP | File transfer data channel |
| FTP (control) | 21 | TCP | File transfer command channel |
| SSH | 22 | TCP | Secure shell remote login |
| Telnet | 23 | TCP | Unencrypted remote login |
| SMTP | 25 | TCP | Email sending (MTA → MTA) |
| DNS | 53 | UDP (primary) | Domain name resolution |
| DHCP | 67/68 | UDP | Dynamic IP address allocation |
| HTTP | 80 | TCP | Web page transfer |
| POP3 | 110 | TCP | Email retrieval (download) |
| IMAP | 143 | TCP | Email retrieval (server-side) |
| HTTPS | 443 | TCP | HTTP over SSL/TLS |
| RDP | 3389 | TCP | Remote Desktop Protocol |

### Key Protocol Operations

| Protocol | Operation Summary |
|----------|------------------|
| **ARP** | Broadcast "Who has IP X?" → Host with IP X replies with MAC address. Cached in ARP table. |
| **RARP** | Reverse of ARP — given MAC, find IP (used by diskless workstations) |
| **DHCP (DORA)** | D: Discover (client broadcast), O: Offer (server), R: Request (client), A: Acknowledge (server) |
| **DNS** | Hierarchical: Root → TLD (.com, .org) → Authoritative. Recursive vs Iterative queries. |
| **HTTP/2** | Multiplexed streams, header compression (HPACK), server push, binary framing layer |
| **FTP** | Two connections: control (21) + data (20). Active vs Passive modes. |
| **SMTP** | Push protocol — uses port 25. MTA transfers between mail servers. |
| **POP3** | Download-then-delete model. Port 110. |
| **IMAP** | Server-side mail storage, folders, partial fetch. Port 143. |

---

## 4. TCP vs UDP

| Feature | TCP | UDP |
|---------|-----|-----|
| Connection | Connection-oriented (3-way handshake) | Connectionless |
| Reliability | Reliable (ACK + retransmission) | Unreliable (best-effort) |
| Ordered delivery | Yes (sequence numbers) | No (no ordering guarantee) |
| Flow control | Sliding window (RWND) | None |
| Congestion control | Slow start, congestion avoidance | None |
| Header size | 20–60 bytes | 8 bytes |
| State | Stateful | Stateless |
| Use cases | HTTP, FTP, SMTP, SSH | DNS, VoIP, DHCP, video streaming |

---

## 5. TCP Connection Management

### 3-Way Handshake (Establishment)
```
Client (SYN=1, seq=100) ---------------→ Server
Client ←------ (SYN=1, ACK=1, seq=300, ack=101) Server
Client (ACK=1, seq=101, ack=301) -----→ Server
```
**Step 1:** Client sends SYN with initial sequence number (ISN)
**Step 2:** Server responds with SYN+ACK (own ISN + client ISN+1)
**Step 3:** Client sends ACK confirming server ISN+1

### Connection Termination (4-Way)
```
Client (FIN=1, seq=x) ----→ Server
Client ←--- (ACK=1, ack=x+1) ---- Server
Client ←--- (FIN=1, seq=y) ------ Server
Client (ACK=1, ack=y+1) ---→ Server
```
**States:** FIN_WAIT_1 → FIN_WAIT_2 → TIME_WAIT → CLOSED

---

## 6. Sliding Window &amp; Flow Control

- **Send window:** Allows multiple unacknowledged packets in flight
- **Receiver window (RWND):** Advertised by receiver — available buffer space
- **Congestion window (CWND):** Sender's estimate of network capacity
- **Effective window = min(RWND, CWND)**

---

## 7. Congestion Control — TCP States

```
          +----------+
          |  Slow    |  (exponential growth: CWND × 2 each RTT
          |  Start   |   until ssthresh)
          +----+-----+
               |
         (CWND ≥ ssthresh)
               |
          +----v-----+
          |Congestion |  (additive increase: CWND += 1 MSS per RTT)
          |Avoidance  |
          +----+-----+
               |
           (3 dup ACK)
               |
          +----v-----+
          |  Fast     |  (CWND = CWND/2, ssthresh = CWND/2, enter CA)
          |Retransmit |
          +----------+
```

### Congestion Control Algorithms
| Algorithm | Trigger | Response |
|-----------|---------|----------|
| Slow Start | Connection start / timeout | CWND = 1, double each RTT until ssthresh |
| Congestion Avoidance | CWND ≥ ssthresh | CWND += 1 per RTT (linear) |
| Fast Retransmit | 3 duplicate ACKs | Retransmit lost segment immediately |
| Fast Recovery | After fast retransmit | CWND = ssthresh, enter CA (Tahoe: set CWND=1) |

---

## 8. Routing Algorithms

### Distance Vector (RIP)
- Each router shares its full routing table with **neighbors only**
- Uses Bellman-Ford algorithm
- **Metric:** Hop count (max 15 — infinity)
- **Count-to-infinity problem:** Solved by split horizon + poison reverse
- **Updates:** Every 30 seconds
- **Hold-down timer:** 180 seconds

### Link State (OSPF)
- Each router floods its **local link state** to all routers in the area
- All routers build the complete network topology (LSDB)
- **Dijkstra's algorithm** computes shortest path tree
- **Metric:** Bandwidth-based cost (10^8 / bandwidth in bps)
- **Fast convergence** — no count-to-infinity
- **Hierarchical:** Areas (Backbone area 0, normal areas)

### Comparison

| Feature | Distance Vector (RIP-2) | Link State (OSPF) |
|---------|------------------------|-------------------|
| Algorithm | Bellman-Ford (distributed) | Dijkstra (global) |
| Convergence | Slow | Fast |
| Update type | Full table (periodic) | Link state (triggered) |
| Metric | Hop count (max 15) | Cost (bandwidth) |
| Scalability | Small networks | Large enterprise |
| VLSM/CIDR | Supported (RIP-2) | Supported |

### BGP (Border Gateway Protocol)
- **Path vector protocol** — exchanges reachability information between ASes
- Uses TCP (port 179)
- **Attributes:** AS_PATH, NEXT_HOP, LOCAL_PREF, MED
- **Policy-based** routing (not metric-based)
- **eBGP:** Between different ASes; **iBGP:** Within same AS

---

## Solved MCQs

**Q1:** In CIDR notation, the block 192.168.10.0/28 can support how many hosts?
- (a) 14
- (b) 16
- (c) 28
- (d) 30

**Answer:** (a) 14. 2^(32−28) − 2 = 2^4 − 2 = 16 − 2 = 14.

**Q2:** During TCP slow start, if CWND = 2 MSS and 2 ACKs are received, CWND becomes:
- (a) 2
- (b) 4
- (c) 6
- (d) 8

**Answer:** (b) 4. Each ACK increases CWND by 1 MSS. Two ACKs = CWND + 2 = 4 MSS. (Slow start doubles CWND per RTT, not per ACK; but per-ACK increment is 1 MSS × number of ACKs.)

**Q3:** Which protocol uses DORA sequence for IP address assignment?
- (a) DNS
- (b) DHCP
- (c) ARP
- (d) ICMP

**Answer:** (b) DHCP. Discover → Offer → Request → Acknowledge.

---

## 9. Error Detection Methods

### Parity Check
- **Simple parity:** Add single bit to make total 1s even/odd
- **Detects:** Odd number of bit errors
- **Fails:** Even number of bit errors

### Checksum (Internet Checksum)
- Sum all 16-bit words, take 1's complement
- Used in: TCP, UDP, IP headers
- **Detects:** Most common transmission errors

### Cyclic Redundancy Check (CRC)
- Treat data as binary polynomial; divide by generator polynomial G(x)
- Append remainder (CRC) to data
- **Detects:** All single-bit errors, all double-bit errors, odd number of errors, burst errors &lt; degree of G(x)

| Standard | Generator Polynomial | CRC Size | Used In |
|----------|---------------------|----------|---------|
| CRC-8 | x^8 + x^2 + x + 1 | 8 bits | 1-Wire |
| CRC-16-CCITT | x^16 + x^12 + x^5 + 1 | 16 bits | Bluetooth, XMODEM |
| CRC-32 | x^32 + x^26 + x^23 + x^22 + x^16 + x^12 + x^11 + x^10 + x^8 + x^7 + x^5 + x^4 + x^2 + x + 1 | 32 bits | Ethernet, PNG, ZIP |

### Hamming Code
- **Single error correction (SEC):** Add parity bits at positions 2^k
- **Hamming distance:** Minimum bit flips between valid codewords
- **Detection:** d+1. **Correction:** 2d+1 (where d = distance to detect)

## 10. CSMA/CD &amp; CSMA/CA

### CSMA/CD (Carrier Sense Multiple Access / Collision Detection)
Used in: **Ethernet (802.3)**

```
1. Sense channel
2. If idle → transmit; else wait
3. If collision detected → send jam signal
4. Exponential backoff: wait random time (0 to 2^k−1 slots)
5. Retry
```

**Minimum frame size** requirement: Must be &gt; 2 × propagation delay × bandwidth (to detect all collisions)

### CSMA/CA (Collision Avoidance)
Used in: **Wi-Fi (802.11)**

- **Virtual carrier sensing:** RTS/CTS (Request to Send / Clear to Send)
- **Physical carrier sensing:** Listen before talk
- **Random backoff:** Avoid simultaneous transmission
- **ACK:** Receiver acknowledges successful frame (missing ACK ⇒ retransmit)

| Feature | CSMA/CD (Ethernet) | CSMA/CA (Wi-Fi) |
|---------|-------------------|-----------------|
| Collision handling | Detect + jam signal | Avoid + ACK |
| Wired/wireless | Wired | Wireless |
| Hidden node problem | No | Yes (solved by RTS/CTS) |
| Frame size requirement | Minimum frame | Maximum frame (fragmentation) |

## 11. IPv6 Essentials

### IPv4 vs IPv6
| Aspect | IPv4 | IPv6 |
|--------|------|------|
| Address size | 32 bits | 128 bits |
| Address format | Dotted decimal (192.168.1.1) | Hexadecimal (2001:db8::1) |
| Address count | ~4.3 billion | ~3.4×10^38 |
| Header size | 20-60 bytes | 40 bytes (fixed) |
| Fragmentation | Routers can fragment | Only sender fragments |
| Checksum | Yes (header) | No (rely on link layer) |
| NAT | Common practice | Not needed (enough addresses) |
| Broadcast | Yes | No (uses multicast/anycast) |

### IPv6 Address Types
- **Unicast:** One-to-one communication
- **Multicast:** One-to-many (prefix FF00::/8)
- **Anycast:** One-to-nearest (multiple nodes share address)
- **No broadcast** in IPv6 — replaced by multicast

### IPv6 Header Simplification
- No checksum (end-to-end reliability delegated to transport)
- No fragmentation fields (path MTU discovery only)
- Flow label for QoS
- Extension headers for options (instead of variable-length base header)

## 12. Network Devices Comparison

| Device | Layer | Function | Collision Domain | Broadcast Domain |
|--------|-------|----------|-----------------|------------------|
| **Hub** | 1 (Physical) | Repeats signal to all ports | Single | Single |
| **Switch** | 2 (Data Link) | Forwards frames by MAC address | Per port | Single |
| **Bridge** | 2 (Data Link) | Connects two LAN segments | Per segment | Single |
| **Router** | 3 (Network) | Forwards packets by IP address | Per port | Per port |
| **Gateway** | 3-7 | Protocol translation (network ↔ network) | N/A | N/A |
| **Modem** | 1-2 | Modulates/demodulates analog ↔ digital | N/A | N/A |
| **Access Point** | 2 | Wireless ↔ wired bridge | Per radio | Single |

---

## Summary
- **OSI (7 layers):** Physical → Data Link → Network → Transport → Session → Presentation → Application
- **TCP/IP (4 layers):** Network Access → Internet → Transport → Application
- **IP addressing:** Classful (A/B/C default masks) → Classless CIDR (/prefix)
- **Key protocols:** ARP (MAC resolution), DHCP (auto IP), DNS (name → IP), HTTP/2 (multiplexed)
- **TCP:** Reliable, connection-oriented, 3-way handshake, sliding window, congestion control
- **UDP:** Lightweight, connectionless, 8-byte header, no reliability
- **Congestion control:** Slow start → congestion avoidance → fast retransmit/recovery
- **Routing:** Distance vector (RIP, 15 hops) vs Link state (OSPF, Dijkstra)
- **Error detection:** Parity (simple), Checksum (TCP/IP), CRC (Ethernet), Hamming (ECC)
- **Ethernet:** CSMA/CD with exponential backoff; **Wi-Fi:** CSMA/CA with RTS/CTS
- **IPv6:** 128-bit, no NAT needed, fixed header, extension headers for options
- **Devices:** Hub (L1), Switch (L2), Router (L3), Gateway (L3-7)

---

## HOT Topics (Frequently Asked in IBPS SO IT Mains)
1. Subnetting numericals — given IP block, find subnet mask, number of hosts, subnet addresses
2. OSI layer functions — which layer does encryption/segmentation/routing/error detection
3. TCP header fields — sequence number, acknowledgment number, window size, flags
4. Congestion control — slow start threshold calculation, CWND graph interpretation
5. Switching techniques (circuit vs packet vs message) with examples
6. IP fragmentation — MF flag, offset field, fragment sizes
7. CSMA/CD vs CSMA/CA — collision detection vs collision avoidance
8. DNS resolution process — recursive vs iterative query types

---

## Chapter Quiz (MCQs)

<details>
<summary>Q1: Which layer of the OSI model is responsible for routing and logical addressing?</summary>
A1: Network layer (Layer 3). It handles IP addressing, routing, and packet forwarding using routers.
</details>

<details>
<summary>Q2: In TCP, what does a RST flag indicate?</summary>
A2: Reset — used to abort a connection abruptly (e.g., connection refused, host unreachable, protocol error).
</details>

<details>
<summary>Q3: Which routing protocol uses the Bellman-Ford algorithm?</summary>
A3: RIP (Routing Information Protocol). It uses hop count as metric and exchanges full routing table with neighbors every 30 seconds.
</details>

<details>
<summary>Q4: What is the network address of IP 172.16.45.10 with subnet mask 255.255.240.0?</summary>
A4: 172.16.32.0. The network bits in third octet are the first 4 bits (240 = 11110000). 45 &amp; 240 = 32. So network address = 172.16.32.0.
</details>

<details>
<summary>Q5: Which HTTP method is idempotent but NOT safe?</summary>
A5: PUT (and DELETE). They are idempotent (same result on repeated calls) but modify state, so not safe. GET, HEAD, OPTIONS are both safe and idempotent.
</details>
