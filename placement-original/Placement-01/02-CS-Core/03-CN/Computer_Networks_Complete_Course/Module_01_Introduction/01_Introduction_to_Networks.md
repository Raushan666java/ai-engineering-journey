# Module 1: Introduction to Computer Networks

## What is a Computer Network?
A computer network is a collection of interconnected devices that can communicate and share resources.

## Key Components
- **Nodes**: Computers, servers, printers, routers
- **Links**: Physical or wireless connections
- **Protocols**: Rules for communication
- **Services**: Applications and resources shared

## Types of Networks

### By Geographic Scope
1. **PAN (Personal Area Network)**
   - Range: 1-10 meters
   - Examples: Bluetooth, USB connections

2. **LAN (Local Area Network)**
   - Range: Building or campus
   - Examples: Office networks, home WiFi

3. **MAN (Metropolitan Area Network)**
   - Range: City or metropolitan area
   - Examples: Cable TV networks, city WiFi

4. **WAN (Wide Area Network)**
   - Range: Countries or continents
   - Examples: Internet, corporate networks

### By Topology
1. **Bus Topology**
   - Single cable backbone
   - All devices share the medium

2. **Star Topology**
   - Central hub/switch
   - Most common in modern LANs

3. **Ring Topology**
   - Circular connection
   - Data flows in one direction

4. **Mesh Topology**
   - Multiple interconnections
   - High redundancy and reliability

## Network Models

### OSI Model (7 Layers)
```
7. Application Layer    - User Interface
6. Presentation Layer   - Data Format/Encryption
5. Session Layer        - Session Management
4. Transport Layer      - End-to-End Delivery
3. Network Layer        - Routing
2. Data Link Layer      - Frame Delivery
1. Physical Layer       - Bits Transmission
```

### TCP/IP Model (4 Layers)
```
4. Application Layer    - HTTP, FTP, SMTP, DNS
3. Transport Layer      - TCP, UDP
2. Internet Layer       - IP, ICMP, ARP
1. Network Access Layer - Ethernet, WiFi
```

## Network Devices

### Basic Devices
- **Hub**: Repeats signals to all ports
- **Switch**: Intelligent frame forwarding
- **Router**: Routes packets between networks
- **Bridge**: Connects network segments

### Advanced Devices
- **Firewall**: Security filtering
- **Load Balancer**: Distributes traffic
- **Proxy Server**: Intermediary for requests
- **Gateway**: Protocol conversion

## Network Services
- **File Sharing**: Access remote files
- **Print Sharing**: Shared printers
- **Internet Access**: Web browsing
- **Email**: Electronic messaging
- **Remote Access**: Control distant computers

## Network Protocols
- **HTTP/HTTPS**: Web communication
- **FTP**: File transfer
- **SMTP**: Email sending
- **DNS**: Domain name resolution
- **DHCP**: Automatic IP assignment

## Advantages of Networks
1. **Resource Sharing**: Printers, files, internet
2. **Communication**: Email, messaging, video calls
3. **Centralized Management**: User accounts, security
4. **Cost Efficiency**: Shared resources reduce costs
5. **Scalability**: Easy to add new devices

## Disadvantages of Networks
1. **Security Risks**: Unauthorized access, malware
2. **Complexity**: Setup and maintenance
3. **Cost**: Initial setup and ongoing maintenance
4. **Dependency**: Single point of failure
5. **Performance**: Network congestion

## Practical Exercise
1. Identify network devices in your environment
2. Draw network topology of your home/office
3. Use `ipconfig` (Windows) or `ifconfig` (Linux) to view network settings
4. Test connectivity using `ping` command

## Lab Assignment
Create a simple network diagram showing:
- 5 computers connected to a switch
- Switch connected to a router
- Router connected to the Internet
- Label all connections and IP addresses

## Quiz Questions
1. What is the difference between LAN and WAN?
2. Name the 7 layers of the OSI model
3. What device operates at Layer 3 of the OSI model?
4. Explain the difference between a hub and a switch

## Next Module
Module 2: Physical Layer - Transmission Media and Signals