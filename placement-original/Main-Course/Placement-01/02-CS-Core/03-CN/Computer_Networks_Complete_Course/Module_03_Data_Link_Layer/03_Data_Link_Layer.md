# Module 3: Data Link Layer

## Data Link Layer Overview
The Data Link Layer (Layer 2) provides reliable data transfer between adjacent network nodes and handles error detection/correction.

## Data Link Layer Functions
1. **Framing**: Organize bits into frames
2. **Error Detection/Correction**: Ensure data integrity
3. **Flow Control**: Manage data transmission rate
4. **Access Control**: Coordinate shared medium access

## Framing

### Frame Structure
```
| Start | Header | Data | Trailer | End |
|  Flag |  Info  | Payload | FCS  | Flag|
```

### Framing Methods
1. **Character Count**: Frame length in header
2. **Flag Bytes**: Special characters mark boundaries
3. **Bit Stuffing**: Insert extra bits to avoid confusion
4. **Physical Layer Coding**: Use encoding violations

### Ethernet Frame Format
```
| Preamble | SFD | Dest MAC | Src MAC | Type/Len | Data | FCS |
|  7 bytes | 1B  |  6 bytes | 6 bytes | 2 bytes  |46-1500B| 4B |
```

## Error Detection and Correction

### Error Detection Methods

#### 1. Parity Check
**Simple Parity**
- Add 1 bit to make total 1s even/odd
- Can detect single-bit errors

**Two-Dimensional Parity**
- Parity for rows and columns
- Can detect and correct some errors

#### 2. Checksum
- Sum all data words
- Send complement of sum
- Receiver verifies by adding all including checksum

#### 3. Cyclic Redundancy Check (CRC)
```
Data: 1101011011
Generator: 10011
CRC: Remainder of division = 1110
Transmitted: 11010110111110
```

### Error Correction Methods

#### 1. Hamming Code
- Can correct single-bit errors
- Redundant bits at positions 2^n
- Used in memory systems

#### 2. Reed-Solomon Code
- Can correct multiple errors
- Used in CDs, DVDs, QR codes

## Flow Control

### Stop-and-Wait Protocol
```
Sender: Send Frame → Wait for ACK → Send Next Frame
Receiver: Receive Frame → Send ACK → Wait for Next Frame
```

### Sliding Window Protocol
- Multiple frames in transit
- Window size determines efficiency
- Go-Back-N and Selective Repeat variants

#### Go-Back-N ARQ
- Sender can send N frames without ACK
- If error detected, retransmit from error point
- Simple but inefficient for high error rates

#### Selective Repeat ARQ
- Only retransmit erroneous frames
- More complex but efficient
- Requires buffering at receiver

## Medium Access Control (MAC)

### Random Access Protocols

#### 1. ALOHA
**Pure ALOHA**
- Transmit whenever data available
- Collision probability high
- Efficiency: 18.4%

**Slotted ALOHA**
- Synchronize transmissions to time slots
- Reduces collision probability
- Efficiency: 36.8%

#### 2. CSMA (Carrier Sense Multiple Access)
**1-Persistent CSMA**
- Listen before transmit
- If busy, wait and try again
- If idle, transmit immediately

**Non-Persistent CSMA**
- If busy, wait random time before retry
- Reduces collisions but increases delay

**p-Persistent CSMA**
- If idle, transmit with probability p
- Otherwise wait for next slot

#### 3. CSMA/CD (Collision Detection)
- Used in Ethernet
- Detect collisions during transmission
- Stop transmission and send jam signal
- Use exponential backoff for retry

### Controlled Access Protocols

#### 1. Polling
- Central controller polls each station
- Eliminates collisions
- Introduces polling overhead

#### 2. Token Passing
- Token circulates among stations
- Only token holder can transmit
- Used in Token Ring, FDDI

## Ethernet Technology

### Ethernet Evolution
```
10Base5:     10 Mbps, Thick Coax, 500m
10Base2:     10 Mbps, Thin Coax, 185m
10Base-T:    10 Mbps, Twisted Pair, 100m
100Base-TX:  100 Mbps, Cat5 UTP, 100m
1000Base-T:  1 Gbps, Cat5e/6, 100m
10GBase-T:   10 Gbps, Cat6a, 100m
```

### Ethernet Frame Processing
1. **Frame Reception**: Check destination MAC
2. **Frame Validation**: Verify FCS
3. **Frame Filtering**: Accept or discard
4. **Frame Forwarding**: Send to upper layer

## Switching Concepts

### MAC Address Table
```
MAC Address       Port    VLAN
00:1B:44:11:3A:B7  Fa0/1   1
00:50:56:C0:00:01  Fa0/2   1
00:0C:29:68:4C:A4  Fa0/3   10
```

### Switch Learning Process
1. **Learn**: Record source MAC and port
2. **Forward**: Send to destination port if known
3. **Flood**: Broadcast if destination unknown
4. **Age**: Remove old entries from table

### Switch Types
- **Store-and-Forward**: Receive entire frame before forwarding
- **Cut-Through**: Start forwarding after reading destination
- **Fragment-Free**: Check first 64 bytes for errors

## Virtual LANs (VLANs)

### VLAN Benefits
- **Broadcast Control**: Reduce broadcast domains
- **Security**: Isolate traffic between groups
- **Flexibility**: Logical grouping regardless of location
- **Cost Reduction**: Eliminate need for separate switches

### VLAN Types
1. **Port-Based VLAN**: Assign ports to VLANs
2. **MAC-Based VLAN**: Based on MAC addresses
3. **Protocol-Based VLAN**: Based on network protocols
4. **IP-Based VLAN**: Based on IP subnets

### VLAN Configuration
```cisco
# Create VLAN
vlan 10
name Sales
exit

# Assign port to VLAN
interface fastethernet0/1
switchport mode access
switchport access vlan 10

# Configure trunk port
interface fastethernet0/24
switchport mode trunk
switchport trunk allowed vlan 10,20,30
```

## Spanning Tree Protocol (STP)

### STP Purpose
- Prevent loops in switched networks
- Provide redundant paths
- Automatically recover from failures

### STP Operation
1. **Root Bridge Election**: Lowest Bridge ID
2. **Root Port Selection**: Best path to root
3. **Designated Port Selection**: Best path on each segment
4. **Block Redundant Ports**: Prevent loops

### STP States
- **Disabled**: Port administratively down
- **Blocking**: Receives BPDUs only
- **Listening**: Processes BPDUs, no data forwarding
- **Learning**: Builds MAC address table
- **Forwarding**: Normal operation

### Rapid Spanning Tree (RSTP)
- Faster convergence than STP
- New port roles and states
- Backward compatible with STP

## Practical Exercises

### Exercise 1: Frame Analysis
1. Capture Ethernet frames with Wireshark
2. Analyze frame structure and fields
3. Identify different frame types

### Exercise 2: Switch Configuration
1. Configure VLANs on Cisco switch
2. Assign ports to different VLANs
3. Test inter-VLAN communication

### Exercise 3: STP Analysis
1. Build redundant switched topology
2. Observe STP convergence
3. Test failover scenarios

## Lab Assignment
1. Design switched network with VLANs
2. Configure trunk links between switches
3. Implement STP for redundancy
4. Test and document network behavior

## Troubleshooting Data Link Layer
```cisco
# Show MAC address table
show mac address-table

# Show VLAN information
show vlan brief

# Show spanning tree status
show spanning-tree

# Show interface status
show interfaces status

# Debug spanning tree
debug spanning-tree events
```

## Quiz Questions
1. What is the purpose of the Frame Check Sequence (FCS)?
2. How does CSMA/CD handle collisions?
3. What are the benefits of using VLANs?
4. Explain the difference between store-and-forward and cut-through switching
5. How does Spanning Tree Protocol prevent loops?

## Next Module
Module 4: Network Layer - IP Addressing and Routing