# Chapter 6: The Network Layer

## Learning Objectives

1. Describe the IPv4 datagram format and explain the function of each header field.
2. Perform IP fragmentation and reassembly calculations.
3. Design IP addressing schemes using classful addressing, subnetting, CIDR, and VLSM.
4. Explain the operation of NAT and its implications for end-to-end connectivity.
5. Compare IPv4 and IPv6 header formats and describe IPv6 address types.
6. Analyze the protocols that support IP: DHCP, ARP, and ICMP.

## 6.1 IPv4

### 6.1.1 IPv4 Datagram Format

An IPv4 datagram consists of a 20-byte fixed header plus optional fields:

| Field | Size (bits) | Description |
|-------|-------------|-------------|
| Version | 4 | IP version number (4) |
| IHL | 4 | Header length in 32-bit words (min 5) |
| DSCP/ECN | 8 | Differentiated services and congestion notification |
| Total Length | 16 | Entire datagram length in bytes (max 65,535) |
| Identification | 16 | Unique datagram identifier for fragmentation |
| Flags | 3 | DF (Don't Fragment), MF (More Fragments) |
| Fragment Offset | 13 | Offset of this fragment in 8-byte units |
| TTL | 8 | Time to Live (hop count limit) |
| Protocol | 8 | Transport protocol (TCP=6, UDP=17, ICMP=1) |
| Header Checksum | 16 | Checksum of header only |
| Source Address | 32 | Source IP address |
| Destination Address | 32 | Destination IP address |
| Options | variable | Security, record route, timestamp, source routing |

### 6.1.2 Fragmentation

A datagram may be larger than the Maximum Transmission Unit (MTU) of a link (e.g., Ethernet MTU = 1500 bytes). The router fragments the datagram into smaller pieces, each with its own IP header.

The fragmentation algorithm: the router divides the payload into 8-byte-aligned blocks (except the last). Each fragment copies the original datagram's identification field, sets the MF flag (except the last fragment), and records its offset. The receiver reassembles fragments with matching source and destination addresses, protocol, and identification. If any fragment is lost, the entire datagram is discarded after a timeout (typically 60 seconds).

Example: a 4000-byte datagram (3980-byte payload) traverses a link with MTU 1500. The 20-byte header leaves 1480 bytes for payload per fragment:

- Fragment 1: offset 0, MF=1, bytes 0–1479
- Fragment 2: offset 185 (1480/8), MF=1, bytes 1480–2959
- Fragment 3: offset 370, MF=0, bytes 2960–3979

### 6.1.3 IP Addressing

Every IPv4 interface has a 32-bit address, typically written in dotted-decimal notation (e.g., 192.168.1.1). Addresses were originally assigned using classful allocation:

| Class | Prefix | Network Bits | Host Bits | Address Range |
|-------|--------|-------------|-----------|---------------|
| A | 0 | 8 | 24 | 1.0.0.0 – 127.255.255.255 |
| B | 10 | 16 | 16 | 128.0.0.0 – 191.255.255.255 |
| C | 110 | 24 | 8 | 192.0.0.0 – 223.255.255.255 |
| D | 1110 | multicast | — | 224.0.0.0 – 239.255.255.255 |
| E | 1111 | reserved | — | 240.0.0.0 – 255.255.255.255 |

Classful addressing was inefficient — a Class B network provided 65,534 host addresses, far more than most organizations needed, while a Class C network provided only 254. Subnetting and CIDR solved this.

### 6.1.4 Subnetting

Subnetting borrows host bits to create a subnet number. The subnet mask is a 32-bit value where 1-bits represent the network+subnet portion and 0-bits represent the host portion. For example, the network 172.16.0.0 with mask 255.255.255.0 (/24) creates 256 subnets of 254 hosts each.

The subnet mask is expressed in dotted-decimal or CIDR notation (e.g., /24). Host bits all-zero identifies the subnet itself; host bits all-one is the broadcast address.

### 6.1.5 CIDR

Classless Inter-Domain Routing (CIDR, RFC 1519) eliminates the class concept entirely. A prefix-length notation (e.g., /20) specifies the network portion. CIDR enables route aggregation: a single routing entry can cover a contiguous block of addresses (a supernet). For example, eight contiguous /24 networks can be aggregated into a /21.

### 6.1.6 Network Address Translation

NAT (RFC 3022) maps private IP addresses to a public IP address using port multiplexing. Private address ranges (RFC 1918):

- 10.0.0.0/8 (16,777,216 addresses)
- 172.16.0.0/12 (1,048,576 addresses)
- 192.168.0.0/16 (65,536 addresses)

A NAT-enabled router maintains a translation table that maps (private IP, private port) to (public IP, public port). When a response arrives, the router reverse-maps the destination port to the internal host. NAT conserves public IPv4 address space but breaks end-to-end connectivity; hosts behind NAT cannot accept unsolicited inbound connections without manual port forwarding rules.

## 6.2 IPv6

IPv6 (RFC 2460) was designed to address IPv4 address exhaustion. Addresses are 128 bits, written as eight groups of four hexadecimal digits (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334). Leading zeros within a group may be omitted; one sequence of zero groups may be replaced with `::`.

### 6.2.1 IPv6 Header Format

The simplified IPv6 header is 40 bytes:

| Field | Size (bits) | Description |
|-------|-------------|-------------|
| Version | 4 | 6 |
| Traffic Class | 8 | DSCP/ECN |
| Flow Label | 20 | Identifies flows for QoS |
| Payload Length | 16 | Length of payload in bytes |
| Next Header | 8 | Identifies next header type (extension header or transport) |
| Hop Limit | 8 | Replaces TTL |
| Source Address | 128 | Source IPv6 address |
| Destination Address | 128 | Destination IPv6 address |

Features removed: header checksum (redundant with link-layer and transport-layer checksums), fragmentation (handled by sources via Path MTU Discovery), and options (moved to extension headers). The simplified header enables faster hardware forwarding.

### 6.2.2 IPv6 Address Types

- **Unicast**: identifies a single interface. Global unicast addresses (2000::/3) are routable on the Internet; link-local addresses (FE80::/10) are valid only on a single link; unique local addresses (FC00::/7) are analogous to RFC 1918 private addresses.

- **Anycast**: identifies a set of interfaces; packets are delivered to the nearest member. Used for DNS root servers and CDN load balancing.

- **Multicast**: identifies a group of interfaces; packets are delivered to all members. Address prefix FF00::/8.

IPv6 has no broadcast address; multicast replaces broadcast functionality.

### 6.2.3 Transition Mechanisms

- **Dual stack**: hosts and routers run both IPv4 and IPv6 stacks simultaneously.
- **Tunneling**: IPv6 packets are encapsulated in IPv4 datagrams for transport across IPv4-only infrastructure (6in4, Teredo).
- **Translation**: NAT64 translates between IPv6 and IPv4 headers.

## 6.3 Supporting Protocols

### 6.3.1 DHCP

Dynamic Host Configuration Protocol (DHCP) automates IP address assignment. The client broadcasts a DHCPDISCOVER message; DHCP servers respond with DHCPOFFER; the client selects one and sends DHCPREQUEST; the server confirms with DHCPACK. The assignment includes IP address, subnet mask, default gateway, and DNS server. DHCP uses UDP ports 67 (server) and 68 (client).

### 6.3.2 ARP

The Address Resolution Protocol (ARP) maps IP addresses to MAC addresses. When a host needs to send a frame to a target IP on the same subnet, it broadcasts an ARP request: "Who has IP X?" The target responds with its MAC address. The requesting host caches the mapping for a short period (typically 20 minutes). ARP is a link-layer protocol that operates only within a single subnet.

### 6.3.3 ICMP

The Internet Control Message Protocol (ICMP) conveys error messages and operational information. Important message types:

| Type | Code | Description |
|------|------|-------------|
| 0 | 0 | Echo Reply |
| 3 | 0 | Destination Network Unreachable |
| 3 | 1 | Destination Host Unreachable |
| 3 | 3 | Port Unreachable |
| 3 | 4 | Fragmentation Needed (DF set) |
| 8 | 0 | Echo Request |
| 11 | 0 | TTL Expired |

The `ping` utility sends ICMP Echo Requests and measures round-trip time. `traceroute` sends datagrams with increasing TTL values and reads the ICMP TTL Exceeded messages from each router.

## Summary

The network layer provides host-to-host delivery through logical addressing and routing. IPv4 uses 32-bit addresses with fragmentation and checksum support; IPv6 uses 128-bit addresses with a streamlined header. Subnetting and CIDR enable efficient address allocation. NAT extends IPv4 address space at the cost of end-to-end transparency. DHCP automates configuration, ARP resolves addresses on local links, and ICMP provides diagnostic and error-reporting capabilities.

## Exercises

### Review Questions

1. What fields are present in the IPv4 header but absent from the IPv6 header?
2. Why was the IPv4 header checksum not carried forward to IPv6?
3. What is the difference between subnetting and supernetting?
4. How does NAT enable multiple internal hosts to share a single public IP address?
5. What problem does Path MTU Discovery solve, and how does it differ from IPv4 fragmentation?

### Application Problems

6. An organization is assigned the CIDR block 200.100.20.0/24. It needs four subnets with at least 50 hosts each. Design the subnet scheme: provide subnet addresses, masks, and valid host ranges for each subnet.
7. A 3000-byte IP datagram (including 20-byte header) traverses a link with MTU 620 bytes. How many fragments are created? Provide the offset, MF flag, and total length for each fragment.
8. An ARP request is broadcast on an Ethernet LAN with 50 hosts. If each host generates an average of 10 ARP requests per minute, what is the ARP broadcast rate (per second)? How does this change if all hosts have correct ARP caches that never time out?

### Challenge Problem

9. **Design an addressing plan for a multinational corporation.** A company has offices in 50 countries, each containing 3–20 departments with 10–500 devices per department. Corporate headquarters requires 5000 addresses; each country office needs 1000 addresses with room for growth. Design a hierarchical addressing plan using CIDR and VLSM. Show the block allocation for 5 representative countries. Then explain how your plan supports route aggregation at each level of the routing hierarchy.
