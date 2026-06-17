# Chapter 5: Ethernet Switching

## Learning Objectives

![Ethernet Switching](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/computer-networks/ch05-ethernet-switching.png)

1. Trace the evolution of Ethernet from 10 Mbps shared media to 100 Gbps switched networks.
2. Explain the operation of learning bridges and transparent switching.
3. Describe the Spanning Tree Protocol and its role in loop prevention.
4. Contrast traditional VLANs with modern VLAN trunking protocols.
5. Analyze the role of MPLS in carrier-grade Ethernet networks.

## 5.1 Ethernet Evolution

### 5.1.1 10 Mbps Ethernet (10Base5, 10Base2, 10BaseT)

The original Ethernet standard published in 1980 by DEC, Intel, and Xerox (DIX) operated at 10 Mbps over coaxial cable. 10Base5 (thicknet) used a vampire tap to connect stations to a long coaxial segment up to 500 meters. 10Base2 (thinnet) used BNC T-connectors on thinner, more flexible RG-58 cable with 185 m segments. Both were shared-media bus topologies — all stations on a segment belonged to the same collision domain.

10BaseT introduced twisted-pair cabling and a star topology centered on a hub. Hubs were repeaters: signals received on any port were regenerated and transmitted on all other ports. While easier to cable, hubs still created a single collision domain and limited aggregate throughput to 10 Mbps.

### 5.1.2 Fast Ethernet (100BaseTX, 100BaseFX)

Fast Ethernet (IEEE 802.3u, 1995) increased speed to 100 Mbps while preserving the CSMA/CD access method and frame format. 100BaseTX uses two pairs of Cat 5 UTP; 100BaseFX uses two multimode fiber strands for runs up to 2 km. The slot time was reduced from 512 bits to 512 bits (shorter time at 100 Mbps required the same minimum frame size but smaller network diameter: 205 m for half-duplex).

### 5.1.3 Gigabit Ethernet (1000BaseT, 1000BaseSX, 1000BaseLX)

Gigabit Ethernet (IEEE 802.3z, 1998; 802.3ab, 1999) pushed the data rate to 1000 Mbps while maintaining compatibility. 1000BaseSX (short-wavelength laser) operates over multimode fiber up to 550 m; 1000BaseLX (long-wavelength) over single-mode fiber up to 5 km; 1000BaseT over Cat 5e UTP up to 100 m. Carrier extension (padding frames to 512 bytes) and frame bursting (transmitting multiple frames consecutively) were introduced to maintain the CSMA/CD collision constraint.

### 5.1.4 10 Gigabit Ethernet

10GbE (IEEE 802.3ae, 2002) is full-duplex only — CSMA/CD is disabled because switched networks make collisions irrelevant. 10GBASE-SR (short-range, 300 m MMF), 10GBASE-LR (10 km SMF), 10GBASE-ER (40 km SMF), and 10GBASE-T (Cat 6a UTP, 100 m) serve data center and metropolitan applications.

### 5.1.5 40, 100, 200, 400 Gigabit Ethernet

IEEE 802.3ba (2010) defined 40 Gbps and 100 Gbps Ethernet using parallel lanes of 10 Gbps or 25 Gbps physical channels. 400 Gbps (802.3bs, 2017) uses 16 lanes of 25 Gbps or 8 lanes of 50 Gbps. Modern switches support aggregation of multiple links via Link Aggregation Control Protocol (LACP, IEEE 802.1AX).

## 5.2 Switches and Bridges

A bridge operates at the data link layer, connecting two or more LAN segments and forwarding frames based on MAC addresses. A switch is a multi-port bridge with high-speed backplane and dedicated per-port buffer memory.

**Store-and-forward switching.** The switch receives the entire frame, checks the FCS for errors, and then forwards. This ensures no corrupted frames propagate but adds latency proportional to frame size.

**Cut-through switching.** The switch begins forwarding before the complete frame arrives — typically after reading only the destination MAC address (first 6 bytes). Latency is minimized but damaged frames are forwarded.

**Fragment-free switching.** The switch reads the first 64 bytes before forwarding (the collision window). This rejects runt frames while keeping latency low.

## 5.3 Learning Bridges

A learning bridge automatically builds a forwarding table by observing traffic. The algorithm:

1. Initially, the forwarding table is empty.
2. When a frame arrives on port $P$ with source address $S$, the bridge records $(S, P)$ in the table with a timestamp.
3. When a frame arrives with destination $D$:
   - If the table contains an entry for $D$ on port $Q$, forward the frame only on port $Q$ (if $Q \ne P$).
   - If no entry exists for $D$, flood the frame on all ports except $P$.
4. Entries are aged out (default 300 seconds) to handle station movement.

Learning bridges are transparent — stations are unaware of their existence.

## 5.4 Spanning Tree Protocol

Spanning Tree Protocol (STP, IEEE 802.1D) prevents loops in networks with redundant bridges. Without STP, loops cause broadcast storms (infinite circulation of broadcast frames) and table instability.

STP elects a root bridge (the bridge with the lowest bridge ID, which combines priority and MAC address). Each non-root bridge computes the shortest path to the root and designates one root port. Each LAN segment selects one designated bridge (the one closest to the root). Ports that are not root ports or designated ports are placed in blocking state.

STP uses Bridge Protocol Data Units (BPDUs) exchanged every 2 seconds. The four states are:

1. **Blocking**: no data forwarding, no MAC learning.
2. **Listening**: no forwarding, no learning; listening for BPDUs.
3. **Learning**: no forwarding; learning MAC addresses.
4. **Forwarding**: normal operation.

Transition from blocking to forwarding takes 30–50 seconds. Rapid Spanning Tree Protocol (RSTP, 802.1w) reduces convergence time to 1–3 seconds through active negotiation of edge and alternate ports. Multiple Spanning Tree Protocol (MSTP, 802.1s) allows multiple VLANs to be mapped to fewer spanning tree instances, reducing overhead in large VLAN deployments.

### 5.4.1 STP Example: Triangle Topology

Consider three bridges B1 (priority 4096, MAC 00:01), B2 (priority 8192, MAC 00:02), B3 (priority 8192, MAC 00:03). B1 has the lowest bridge ID and becomes root. B2 and B3 each have one root port (the port closest to B1). The segment between B2 and B3 has designated bridge B2 (lower bridge ID). B3's port to B2 becomes non-designated and is blocked. After convergence, only two logical paths exist; the redundant link remains available as backup.

## 5.5 Virtual LANs

A Virtual LAN (VLAN, IEEE 802.1Q) partitions a physical switch into multiple logical broadcast domains. Stations in the same VLAN can communicate as if on the same physical segment; stations in different VLANs require a router (Layer 3) to communicate.

IEEE 802.1Q inserts a 4-byte VLAN tag into the Ethernet frame:

| TPID (2 B) | Priority (3 b) | DEI (1 b) | VLAN ID (12 b) |
|------------|----------------|-----------|-----------------|

- TPID: Tag Protocol Identifier (0x8100), marks the frame as tagged.
- Priority: 802.1p class of service (0–7).
- DEI: Drop Eligible Indicator.
- VLAN ID: uniquely identifies the VLAN (1–4094; 0 and 4095 reserved).

VLAN trunking allows frames from multiple VLANs to traverse a single link between switches. The trunk port adds and removes 802.1Q tags; access ports strip the tag and deliver untagged frames to endpoints.

## 5.6 Link Aggregation

Link Aggregation Control Protocol (LACP, IEEE 802.1AX) combines multiple physical links into a single logical link. Benefits: increased aggregate bandwidth (up to 8 links, typically) and link-level redundancy. Traffic distribution across member links uses a hash of source/destination MAC, IP, and port fields. LACP negotiates link membership through LACPDU frames exchanged every 30 seconds. Aggregation requires that all member links have the same speed, duplex mode, and VLAN configuration.

## 5.7 MPLS

Multiprotocol Label Switching (MPLS) inserts a 32-bit label between the link-layer header and the network-layer header:

| Label (20 b) | Exp (3 b) | S (1 b) | TTL (8 b) |
|--------------|-----------|---------|-----------|

MPLS routers use label-switched paths (LSPs) determined by the Label Distribution Protocol (LDP) or RSVP-TE. The forwarding decision is a simple label lookup in the Label Information Base (LIB), faster than IP longest-prefix matching. MPLS supports traffic engineering, explicit path control, and VPNs (MPLS L3VPN and L2VPN). Modern carrier and data center networks extensively use MPLS for traffic steering and service chaining.

## Summary

Ethernet has evolved from 10 Mbps shared-media coaxial segments to 400 Gbps full-duplex switched networks. Switches learn MAC addresses automatically and make forwarding decisions at line rate. STP prevents loops in redundant topologies. VLANs segment broadcast domains without additional hardware. MPLS extends Ethernet capabilities with label-based forwarding for traffic engineering and VPN services.

## Exercises

### Review Questions

1. What is the difference between a hub, a bridge, and a switch?
2. How does a learning bridge discover that a station has moved from one port to another?
3. Why do cut-through switches sometimes forward corrupted frames?
4. What problem does the Spanning Tree Protocol solve?
5. How many bits does a VLAN ID have, and how many distinct VLANs can it represent?

### Application Problems

6. A switch receives three frames on port 2: source A, source B, source C. Then a frame arrives on port 5 with destination A. On which ports does the switch forward this frame? Explain.
7. Draw a network of three switches in a triangle configuration. Assign bridge IDs and determine the root bridge, root ports, and designated ports after STP converges.
8. A 10 Gbps link has a propagation delay of 1 microsecond per kilometer. A 100 km link carries 1500-byte frames. What is the bandwidth-delay product in frames? How many frames must be in flight to achieve 100% utilization?

### Challenge Problem

9. **Design a data center topology.** An enterprise has 5000 servers in rows of 50 racks, each rack containing 40 servers. Design the network topology using top-of-rack (ToR) switches, end-of-row (EoR) aggregation switches, and core switches. Specify the required port counts and speeds at each tier. Then compute the worst-case oversubscription ratio if the core has 4 switches and each ToR has 4 uplinks. Propose a modification to reduce the oversubscription ratio to 3:1 or lower.
