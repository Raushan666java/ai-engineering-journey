# Module 5: Transport Layer

## Transport Layer Overview
The Transport Layer (Layer 4) provides end-to-end communication services and ensures reliable data delivery between applications.

## Transport Layer Functions
1. **Segmentation**: Break data into manageable segments
2. **Reassembly**: Reconstruct original data at destination
3. **Connection Management**: Establish, maintain, terminate connections
4. **Flow Control**: Prevent overwhelming receiver
5. **Error Recovery**: Detect and recover from errors
6. **Multiplexing**: Support multiple applications simultaneously

## Port Numbers and Sockets

### Port Number Ranges
```
Well-Known Ports:    0 - 1023    (System/privileged services)
Registered Ports:    1024 - 49151 (User/application services)
Dynamic/Private:     49152 - 65535 (Temporary/ephemeral ports)
```

### Common Port Numbers
```
20/21  - FTP (Data/Control)
22     - SSH (Secure Shell)
23     - Telnet
25     - SMTP (Simple Mail Transfer)
53     - DNS (Domain Name System)
67/68  - DHCP (Server/Client)
80     - HTTP (Web)
110    - POP3 (Post Office Protocol)
143    - IMAP (Internet Message Access)
443    - HTTPS (Secure Web)
993    - IMAPS (Secure IMAP)
995    - POP3S (Secure POP3)
```

### Socket Concept
```
Socket = IP Address + Port Number
Example: 192.168.1.100:80 (Web server)
         192.168.1.50:8080 (Client connection)
```

## TCP (Transmission Control Protocol)

### TCP Characteristics
- **Connection-Oriented**: Establish connection before data transfer
- **Reliable**: Guaranteed delivery with error checking
- **Ordered**: Data arrives in correct sequence
- **Flow Control**: Prevents buffer overflow
- **Congestion Control**: Adapts to network conditions

### TCP Header Format
```
|Source Port|Dest Port|Sequence Number|Acknowledgment|
|Hdr Len|Flags|Window Size|Checksum|Urgent Pointer|
|                Options                |  Data      |
```

### TCP Flags
- **SYN**: Synchronize sequence numbers (connection setup)
- **ACK**: Acknowledgment field valid
- **FIN**: Finish connection (connection teardown)
- **RST**: Reset connection (abort)
- **PSH**: Push data to application immediately
- **URG**: Urgent pointer field valid

### TCP Three-Way Handshake
```
Client                    Server
  |                         |
  |-------- SYN ----------->|  (Seq=100)
  |                         |
  |<----- SYN+ACK ----------|  (Seq=300, Ack=101)
  |                         |
  |-------- ACK ----------->|  (Seq=101, Ack=301)
  |                         |
  |    Connection Established
```

### TCP Connection Termination
```
Client                    Server
  |                         |
  |-------- FIN ----------->|  (Seq=1000)
  |                         |
  |<------- ACK ------------|  (Ack=1001)
  |                         |
  |<------- FIN ------------|  (Seq=2000)
  |                         |
  |-------- ACK ----------->|  (Ack=2001)
  |                         |
  |    Connection Closed
```

### TCP Flow Control (Sliding Window)
```
Sender Window:     [1][2][3][4][5][ ][ ][ ]
                    ^           ^
                  Sent &      Can Send
                  ACKed       (Window=3)

Receiver Window:   [ ][1][2][3][ ][ ][ ][ ]
                      ^       ^
                   Expected  Buffer
                             Space
```

### TCP Congestion Control

#### 1. Slow Start
- Start with small congestion window (cwnd = 1)
- Double cwnd for each ACK received
- Continue until threshold reached

#### 2. Congestion Avoidance
- Increase cwnd by 1 for each RTT
- Linear increase phase
- More conservative than slow start

#### 3. Fast Retransmit
- Retransmit on 3 duplicate ACKs
- Don't wait for timeout
- Faster error recovery

#### 4. Fast Recovery
- After fast retransmit, enter fast recovery
- Maintain higher throughput
- Avoid slow start phase

## UDP (User Datagram Protocol)

### UDP Characteristics
- **Connectionless**: No connection establishment
- **Unreliable**: No guaranteed delivery
- **Fast**: Minimal overhead
- **Simple**: Basic error checking only

### UDP Header Format
```
|Source Port|Dest Port|Length|Checksum|Data...|
```

### UDP Applications
- **DNS**: Quick queries and responses
- **DHCP**: Network configuration
- **SNMP**: Network management
- **Streaming Media**: Real-time applications
- **Gaming**: Low-latency requirements
- **VoIP**: Voice over IP

### TCP vs UDP Comparison
```
Feature          TCP              UDP
Connection       Connection-based Connectionless
Reliability      Reliable         Unreliable
Ordering         Ordered          No ordering
Speed            Slower           Faster
Overhead         High             Low
Flow Control     Yes              No
Error Recovery   Yes              No
Applications     Web, Email, FTP  DNS, Streaming
```

## Socket Programming

### TCP Socket Programming
```python
# TCP Server
import socket

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('localhost', 8080))
server_socket.listen(5)

while True:
    client_socket, address = server_socket.accept()
    data = client_socket.recv(1024)
    client_socket.send(b"Hello from server")
    client_socket.close()
```

```python
# TCP Client
import socket

client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect(('localhost', 8080))
client_socket.send(b"Hello from client")
response = client_socket.recv(1024)
client_socket.close()
```

### UDP Socket Programming
```python
# UDP Server
import socket

server_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
server_socket.bind(('localhost', 8080))

while True:
    data, address = server_socket.recvfrom(1024)
    server_socket.sendto(b"Hello from server", address)
```

```python
# UDP Client
import socket

client_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
client_socket.sendto(b"Hello from client", ('localhost', 8080))
response, address = client_socket.recvfrom(1024)
client_socket.close()
```

## Quality of Service (QoS)

### QoS Parameters
1. **Bandwidth**: Data transmission rate
2. **Latency**: End-to-end delay
3. **Jitter**: Variation in latency
4. **Packet Loss**: Percentage of lost packets

### QoS Mechanisms
1. **Traffic Shaping**: Control transmission rate
2. **Traffic Policing**: Enforce traffic contracts
3. **Queue Management**: Prioritize different traffic types
4. **Admission Control**: Accept/reject new flows

### Differentiated Services (DiffServ)
- **DSCP**: DiffServ Code Point in IP header
- **Traffic Classes**: Different service levels
- **Per-Hop Behavior**: Treatment at each router

## Practical Exercises

### Exercise 1: TCP Analysis
1. Use Wireshark to capture TCP handshake
2. Analyze sequence and acknowledgment numbers
3. Observe window size changes

### Exercise 2: Socket Programming
1. Create TCP echo server and client
2. Implement UDP chat application
3. Compare performance and behavior

### Exercise 3: Port Scanning
1. Use Nmap to scan open ports
2. Identify services running on ports
3. Analyze TCP connection attempts

## Lab Assignment
1. Implement reliable file transfer using UDP
2. Add error detection and retransmission
3. Compare with TCP file transfer
4. Measure and analyze performance

## Transport Layer Protocols

### SCTP (Stream Control Transmission Protocol)
- **Multi-streaming**: Multiple data streams
- **Multi-homing**: Multiple IP addresses
- **Message-oriented**: Preserves message boundaries
- **Applications**: Telephony signaling

### QUIC (Quick UDP Internet Connections)
- **Built on UDP**: Faster than TCP
- **Encrypted by default**: Integrated TLS
- **Multiplexing**: Multiple streams per connection
- **Used by**: HTTP/3, Google services

## Troubleshooting Transport Layer
```bash
# Show active connections
netstat -an
ss -tuln

# Show listening ports
netstat -l
ss -l

# Test port connectivity
telnet google.com 80
nc -zv google.com 80

# Monitor TCP connections
tcpdump -i eth0 port 80

# Show socket statistics
ss -s
```

## Performance Optimization

### TCP Tuning Parameters
```bash
# TCP window scaling
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216

# TCP congestion control
net.ipv4.tcp_congestion_control = cubic

# TCP buffer sizes
net.ipv4.tcp_rmem = 4096 65536 16777216
net.ipv4.tcp_wmem = 4096 65536 16777216
```

### Application Design Considerations
1. **Choose appropriate protocol**: TCP vs UDP
2. **Optimize buffer sizes**: Match network conditions
3. **Handle errors gracefully**: Implement retry logic
4. **Use connection pooling**: Reduce overhead
5. **Implement timeouts**: Prevent hanging connections

## Quiz Questions
1. What is the purpose of the TCP three-way handshake?
2. When would you choose UDP over TCP?
3. How does TCP flow control work?
4. What is the difference between flow control and congestion control?
5. Explain the concept of socket programming

## Next Module
Module 6: Application Layer - HTTP, DNS, and Network Services