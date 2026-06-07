# Module 4: Network Layer - IP Addressing & Subnetting

## IP Addressing Fundamentals

### IPv4 Address Structure
- **32-bit address** divided into 4 octets
- **Dotted decimal notation**: 192.168.1.1
- **Binary representation**: 11000000.10101000.00000001.00000001

### Address Classes
```
Class A: 1.0.0.0    to 126.255.255.255  (/8)  - 16M hosts
Class B: 128.0.0.0  to 191.255.255.255  (/16) - 65K hosts  
Class C: 192.0.0.0  to 223.255.255.255  (/24) - 254 hosts
Class D: 224.0.0.0  to 239.255.255.255  (Multicast)
Class E: 240.0.0.0  to 255.255.255.255  (Reserved)
```

### Private IP Ranges
```
Class A: 10.0.0.0/8        (10.0.0.0 - 10.255.255.255)
Class B: 172.16.0.0/12     (172.16.0.0 - 172.31.255.255)
Class C: 192.168.0.0/16    (192.168.0.0 - 192.168.255.255)
```

### Special Addresses
- **Loopback**: 127.0.0.1 (localhost)
- **Broadcast**: 255.255.255.255
- **Network Address**: First address in subnet
- **Broadcast Address**: Last address in subnet

## Subnetting

### Subnet Mask
- **Purpose**: Separates network and host portions
- **Default Masks**:
  - Class A: 255.0.0.0 (/8)
  - Class B: 255.255.0.0 (/16)
  - Class C: 255.255.255.0 (/24)

### CIDR Notation
```
/24 = 255.255.255.0    (24 network bits, 8 host bits)
/25 = 255.255.255.128  (25 network bits, 7 host bits)
/26 = 255.255.255.192  (26 network bits, 6 host bits)
/27 = 255.255.255.224  (27 network bits, 5 host bits)
```

### Subnetting Example
**Network**: 192.168.1.0/24 (Need 4 subnets)

**Solution**: Use /26 (4 subnets, 62 hosts each)
```
Subnet 1: 192.168.1.0/26   (192.168.1.1 - 192.168.1.62)
Subnet 2: 192.168.1.64/26  (192.168.1.65 - 192.168.1.126)
Subnet 3: 192.168.1.128/26 (192.168.1.129 - 192.168.1.190)
Subnet 4: 192.168.1.192/26 (192.168.1.193 - 192.168.1.254)
```

### VLSM (Variable Length Subnet Masking)
**Scenario**: Different subnet sizes needed
```
Sales Dept:     50 hosts → /26 (62 hosts available)
IT Dept:        20 hosts → /27 (30 hosts available)
Management:     10 hosts → /28 (14 hosts available)
Point-to-Point: 2 hosts  → /30 (2 hosts available)
```

## Routing Fundamentals

### Routing Table
```
Destination     Gateway         Interface    Metric
0.0.0.0         192.168.1.1     eth0         1
192.168.1.0/24  0.0.0.0         eth0         0
10.0.0.0/8      192.168.1.100   eth0         2
```

### Routing Algorithms

#### Distance Vector
- **Examples**: RIP, EIGRP
- **Metric**: Hop count or composite
- **Updates**: Periodic broadcasts

#### Link State
- **Examples**: OSPF, IS-IS
- **Metric**: Cost based on bandwidth
- **Updates**: Triggered by topology changes

#### Path Vector
- **Examples**: BGP
- **Metric**: Path attributes
- **Updates**: Incremental updates

## Network Address Translation (NAT)

### Types of NAT
1. **Static NAT**: One-to-one mapping
2. **Dynamic NAT**: Pool of public IPs
3. **PAT (Port Address Translation)**: Many-to-one with ports

### NAT Configuration Example
```
Router(config)# ip nat inside source list 1 interface serial0/0 overload
Router(config)# access-list 1 permit 192.168.1.0 0.0.0.255
Router(config)# interface fastethernet0/0
Router(config-if)# ip nat inside
Router(config)# interface serial0/0
Router(config-if)# ip nat outside
```

## DHCP (Dynamic Host Configuration Protocol)

### DHCP Process (DORA)
1. **Discover**: Client broadcasts DHCP discover
2. **Offer**: Server offers IP configuration
3. **Request**: Client requests offered configuration
4. **Acknowledge**: Server confirms assignment

### DHCP Configuration
```
Router(config)# ip dhcp pool LAN
Router(dhcp-config)# network 192.168.1.0 255.255.255.0
Router(dhcp-config)# default-router 192.168.1.1
Router(dhcp-config)# dns-server 8.8.8.8 8.8.4.4
Router(dhcp-config)# lease 7
```

## ICMP (Internet Control Message Protocol)

### ICMP Message Types
- **Echo Request/Reply**: ping command
- **Destination Unreachable**: Network/host unreachable
- **Time Exceeded**: TTL expired (traceroute)
- **Redirect**: Better route available

### Troubleshooting Commands
```bash
# Test connectivity
ping 192.168.1.1

# Trace route to destination
tracert google.com

# Display routing table
route print

# Show network configuration
ipconfig /all

# Release/renew DHCP lease
ipconfig /release
ipconfig /renew
```

## IPv6 Fundamentals

### IPv6 Address Format
- **128-bit address**: 8 groups of 4 hexadecimal digits
- **Example**: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
- **Compressed**: 2001:db8:85a3::8a2e:370:7334

### IPv6 Address Types
1. **Unicast**: One-to-one communication
2. **Multicast**: One-to-many communication
3. **Anycast**: One-to-nearest communication

### IPv6 Special Addresses
- **Loopback**: ::1
- **Unspecified**: ::
- **Link-local**: fe80::/10
- **Unique local**: fc00::/7

## Practical Exercises

### Exercise 1: Subnetting Practice
Given network 172.16.0.0/16, create:
- 8 subnets with equal size
- Calculate network, broadcast, and usable IP ranges

### Exercise 2: VLSM Design
Design VLSM for company with:
- Branch A: 100 hosts
- Branch B: 50 hosts  
- Branch C: 25 hosts
- WAN links: 2 hosts each (3 links)

### Exercise 3: Router Configuration
Configure basic routing between two networks:
- Network A: 192.168.1.0/24
- Network B: 192.168.2.0/24

## Lab Assignment
1. Set up Packet Tracer lab with 3 routers and 6 subnets
2. Configure IP addressing and routing
3. Test connectivity between all subnets
4. Document network diagram and configuration

## Quiz Questions
1. How many subnets can you create from 192.168.1.0/24 using /27?
2. What is the broadcast address for 10.1.1.64/26?
3. Explain the difference between static and dynamic routing
4. What are the 4 steps in DHCP process?

## Next Module
Module 5: Transport Layer - TCP and UDP Protocols