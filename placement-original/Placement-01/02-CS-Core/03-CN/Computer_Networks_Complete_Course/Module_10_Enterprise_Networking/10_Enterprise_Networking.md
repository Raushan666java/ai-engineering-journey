# Module 10: Enterprise Networking

## Enterprise Network Overview
Enterprise networks are large-scale networks that support business operations, connecting thousands of users across multiple locations with high availability and performance requirements.

## Hierarchical Network Design

### Three-Tier Architecture
```
Core Layer (Backbone)
├── High-speed switching
├── Redundancy and fault tolerance
├── Minimal processing
└── Scalability

Distribution Layer (Aggregation)
├── Policy enforcement
├── Routing between VLANs
├── Access control
└── QoS implementation

Access Layer (Edge)
├── User connectivity
├── Port security
├── VLAN assignment
└── Power over Ethernet
```

### Two-Tier (Collapsed Core) Architecture
```
Core/Distribution Layer
├── Combined functionality
├── Cost-effective for smaller networks
├── Reduced complexity
└── Easier management

Access Layer
├── User connectivity
├── Basic security
├── VLAN access
└── PoE support
```

## Campus Network Design

### Campus Network Components
- **Building Distribution**: Aggregates access switches
- **Campus Backbone**: Connects buildings
- **Data Center**: Houses servers and services
- **Internet Edge**: External connectivity
- **WAN Edge**: Remote site connections

### VLAN Design Strategies

#### Functional VLANs
```
VLAN 10 - Management (192.168.10.0/24)
VLAN 20 - Users (192.168.20.0/24)
VLAN 30 - Servers (192.168.30.0/24)
VLAN 40 - Voice (192.168.40.0/24)
VLAN 50 - Guest (192.168.50.0/24)
VLAN 99 - Native (Unused)
```

#### Geographic VLANs
```
VLAN 100 - Building A Users
VLAN 101 - Building A Servers
VLAN 200 - Building B Users
VLAN 201 - Building B Servers
```

### Inter-VLAN Routing
**Router-on-a-Stick:**
```cisco
interface GigabitEthernet0/0.10
encapsulation dot1Q 10
ip address 192.168.10.1 255.255.255.0

interface GigabitEthernet0/0.20
encapsulation dot1Q 20
ip address 192.168.20.1 255.255.255.0
```

**Layer 3 Switch (SVI):**
```cisco
vlan 10
name Users
exit

interface vlan 10
ip address 192.168.10.1 255.255.255.0
no shutdown

ip routing
```

## High Availability Design

### Redundancy Strategies
1. **Device Redundancy**: Multiple devices for failover
2. **Link Redundancy**: Multiple paths between devices
3. **Power Redundancy**: Dual power supplies and UPS
4. **Geographic Redundancy**: Multiple data centers

### First Hop Redundancy Protocols

#### HSRP (Hot Standby Router Protocol)
```cisco
interface vlan 10
ip address 192.168.10.2 255.255.255.0
standby 1 ip 192.168.10.1
standby 1 priority 110
standby 1 preempt
standby 1 track 1 decrement 20
```

#### VRRP (Virtual Router Redundancy Protocol)
```cisco
interface vlan 10
ip address 192.168.10.2 255.255.255.0
vrrp 1 ip 192.168.10.1
vrrp 1 priority 110
vrrp 1 preempt
```

#### GLBP (Gateway Load Balancing Protocol)
```cisco
interface vlan 10
ip address 192.168.10.2 255.255.255.0
glbp 1 ip 192.168.10.1
glbp 1 priority 110
glbp 1 preempt
glbp 1 load-balancing round-robin
```

### Link Aggregation
**EtherChannel Configuration:**
```cisco
interface range GigabitEthernet0/1-2
channel-group 1 mode active
exit

interface port-channel 1
switchport mode trunk
switchport trunk allowed vlan 10,20,30
```

## WAN Technologies

### Traditional WAN Technologies

#### Leased Lines
- **T1/E1**: 1.544/2.048 Mbps
- **T3/E3**: 44.736/34.368 Mbps
- **Point-to-point connectivity**
- **Guaranteed bandwidth**
- **High cost**

#### Frame Relay
- **Packet-switched network**
- **Virtual circuits (PVC/SVC)**
- **Variable bandwidth**
- **Cost-effective for multiple sites**
- **Legacy technology**

#### ATM (Asynchronous Transfer Mode)
- **Cell-based switching**
- **53-byte fixed cells**
- **QoS support**
- **Mostly deprecated**

### Modern WAN Technologies

#### MPLS (Multiprotocol Label Switching)
**MPLS Benefits:**
- **Traffic Engineering**: Optimize path selection
- **QoS Support**: Service differentiation
- **VPN Services**: Layer 2/3 VPNs
- **Scalability**: Large network support

**MPLS VPN Configuration:**
```cisco
# PE Router Configuration
ip vrf CUSTOMER_A
rd 65000:100
route-target export 65000:100
route-target import 65000:100

interface GigabitEthernet0/1
ip vrf forwarding CUSTOMER_A
ip address 192.168.1.1 255.255.255.0

router bgp 65000
address-family ipv4 vrf CUSTOMER_A
redistribute connected
```

#### Metro Ethernet
- **Ethernet over fiber**
- **High bandwidth (1G-100G)**
- **Native Ethernet interface**
- **Cost-effective**
- **Scalable bandwidth**

#### Internet VPN
- **Site-to-Site VPN**: Connect offices
- **Remote Access VPN**: Mobile users
- **Cost-effective**
- **Flexible deployment**
- **Security considerations**

## SD-WAN (Software-Defined WAN)

### SD-WAN Architecture
```
Orchestrator (Cloud Controller)
├── Policy management
├── Analytics and reporting
├── Zero-touch provisioning
└── Centralized control

Edge Devices (SD-WAN Appliances)
├── Multiple WAN connections
├── Application-aware routing
├── Security functions
└── Local policy enforcement

Underlay Networks
├── MPLS
├── Internet
├── 4G/5G
└── Satellite
```

### SD-WAN Benefits
1. **Cost Reduction**: Use cheaper Internet links
2. **Agility**: Rapid deployment and changes
3. **Performance**: Application-aware routing
4. **Visibility**: Centralized monitoring
5. **Security**: Integrated security functions

### SD-WAN Vendors
- **Cisco**: Viptela (acquired)
- **VMware**: VeloCloud (acquired)
- **Silver Peak**: EdgeConnect
- **Fortinet**: FortiGate SD-WAN
- **Juniper**: Contrail SD-WAN

## Quality of Service (QoS)

### QoS Models
**Best Effort:**
- No QoS guarantees
- First-come, first-served
- Default Internet model

**Integrated Services (IntServ):**
- Per-flow reservations
- RSVP signaling
- Resource guarantees
- Not scalable

**Differentiated Services (DiffServ):**
- Class-based treatment
- DSCP markings
- Scalable approach
- Widely deployed

### QoS Mechanisms

#### Classification and Marking
```cisco
# Access Control List
access-list 100 permit tcp any any eq 80

# Class Map
class-map match-all WEB_TRAFFIC
match access-group 100

# Policy Map
policy-map QOS_POLICY
class WEB_TRAFFIC
set dscp af31
```

#### Traffic Shaping and Policing
```cisco
# Traffic Shaping
policy-map SHAPE_POLICY
class class-default
shape average 10000000

# Traffic Policing
policy-map POLICE_POLICY
class class-default
police 10000000 conform-action transmit exceed-action drop
```

#### Congestion Management
```cisco
# Weighted Fair Queuing
interface serial0/0
fair-queue

# Class-Based Weighted Fair Queuing
policy-map CBWFQ_POLICY
class VOICE
priority 1000
class VIDEO
bandwidth 2000
class class-default
fair-queue
```

### Voice over IP (VoIP) QoS
**VoIP Requirements:**
- **Latency**: < 150ms one-way
- **Jitter**: < 30ms
- **Packet Loss**: < 1%
- **Bandwidth**: 64-90 Kbps per call

**VoIP QoS Configuration:**
```cisco
# Voice traffic classification
class-map match-all VOICE
match ip dscp ef

# Voice QoS policy
policy-map VOICE_POLICY
class VOICE
priority percent 20
class class-default
fair-queue
```

## Network Security Architecture

### Defense in Depth
```
Perimeter Security
├── Firewalls
├── IPS/IDS
├── DDoS protection
└── VPN concentrators

Internal Security
├── Network segmentation
├── Access control
├── Endpoint protection
└── Network monitoring

Data Security
├── Encryption
├── Data loss prevention
├── Backup and recovery
└── Access logging
```

### Network Segmentation
**Micro-segmentation:**
- **Zero Trust Model**: Never trust, always verify
- **Application-level control**: Granular policies
- **East-West traffic inspection**: Internal monitoring
- **Dynamic policies**: Adaptive security

**VLAN Segmentation:**
```cisco
# User VLAN
vlan 100
name USERS

# Server VLAN
vlan 200
name SERVERS

# DMZ VLAN
vlan 300
name DMZ

# Access control between VLANs
ip access-list extended USERS_TO_SERVERS
permit tcp 192.168.100.0 0.0.0.255 192.168.200.0 0.0.0.255 eq 80
permit tcp 192.168.100.0 0.0.0.255 192.168.200.0 0.0.0.255 eq 443
deny ip any any
```

## Data Center Networking

### Traditional Data Center Architecture
```
Core Layer
├── High-performance switches
├── Layer 3 routing
├── North-South traffic
└── Internet/WAN connectivity

Aggregation Layer
├── Layer 2/3 switching
├── VLAN aggregation
├── Load balancing
└── Security services

Access Layer (ToR - Top of Rack)
├── Server connectivity
├── 1/10/25 GbE ports
├── Basic switching
└── Server management
```

### Modern Data Center Architecture
**Spine-Leaf (Clos) Architecture:**
```
Spine Switches (Core)
├── High-port density
├── Layer 3 routing only
├── Equal-cost multipath
└── Horizontal scaling

Leaf Switches (ToR)
├── Server connectivity
├── Layer 2/3 switching
├── VXLAN termination
└── Security policies
```

### Data Center Technologies
**VXLAN (Virtual Extensible LAN):**
- **24-bit VNID**: 16M virtual networks
- **Layer 2 over Layer 3**: Overlay networking
- **Multi-tenancy**: Isolated virtual networks
- **Mobility**: VM migration across subnets

**EVPN (Ethernet VPN):**
- **Control plane**: BGP-based
- **MAC learning**: Distributed
- **Multihoming**: Active-active
- **Integration**: With VXLAN data plane

## Load Balancing

### Load Balancing Types
**Layer 4 Load Balancing:**
- **Transport layer**: IP and port-based
- **Fast processing**: Hardware-based
- **Protocol agnostic**: Any TCP/UDP application
- **Limited intelligence**: No application awareness

**Layer 7 Load Balancing:**
- **Application layer**: Content-based routing
- **Advanced features**: SSL termination, compression
- **Application awareness**: HTTP header inspection
- **Higher latency**: More processing required

### Load Balancing Algorithms
```
Round Robin:        Distribute requests equally
Weighted Round Robin: Based on server capacity
Least Connections:  Route to least busy server
Weighted Least Connections: Capacity-aware
IP Hash:           Based on client IP
Least Response Time: Route to fastest server
```

### Load Balancer Configuration
```
# F5 BIG-IP Configuration
ltm pool web_pool {
    members {
        192.168.1.10:80
        192.168.1.11:80
        192.168.1.12:80
    }
    monitor http
    load-balancing-mode round-robin
}

ltm virtual web_vs {
    destination 10.1.1.100:80
    pool web_pool
    profiles {
        http { }
        tcp { }
    }
}
```

## Practical Exercises

### Exercise 1: Campus Network Design
1. Design three-tier campus network
2. Plan VLAN structure and IP addressing
3. Configure inter-VLAN routing
4. Implement redundancy with HSRP

### Exercise 2: WAN Connectivity
1. Compare MPLS vs Internet VPN
2. Design SD-WAN architecture
3. Configure site-to-site VPN
4. Implement QoS for voice traffic

### Exercise 3: Data Center Design
1. Design spine-leaf architecture
2. Configure VXLAN overlay
3. Implement load balancing
4. Plan for high availability

## Lab Assignment
1. Build complete enterprise network simulation
2. Implement hierarchical design with redundancy
3. Configure QoS for different traffic types
4. Set up monitoring and management
5. Document network architecture and procedures

## Enterprise Network Best Practices

### Design Principles
1. **Scalability**: Plan for growth
2. **Redundancy**: Eliminate single points of failure
3. **Security**: Implement defense in depth
4. **Performance**: Optimize for applications
5. **Manageability**: Simplify operations

### Implementation Guidelines
1. **Standardization**: Use consistent designs
2. **Documentation**: Maintain accurate records
3. **Testing**: Validate before deployment
4. **Monitoring**: Implement comprehensive monitoring
5. **Change Control**: Manage changes carefully

## Quiz Questions
1. What are the benefits of hierarchical network design?
2. How does SD-WAN differ from traditional WAN?
3. Explain the difference between traffic shaping and policing
4. What are the advantages of spine-leaf architecture?
5. How does VXLAN enable network virtualization?

## Next Module
Module 11: Cloud Networking - Virtual Networks and Hybrid Connectivity