# Module 5: Transport Layer - Complete Guide
## 🚚 End-to-End Communication

---

## 📚 Chapter 1: Transport Layer Overview

### **1.1 Transport Layer Functions**
```
Primary Functions:
✓ End-to-end message delivery
✓ Process-to-process communication
✓ Segmentation and reassembly
✓ Connection management
✓ Flow control
✓ Error control
✓ Congestion control

Services Provided:
✓ Reliable data transfer
✓ Unreliable data transfer
✓ Connection-oriented service
✓ Connectionless service
✓ Multiplexing/Demultiplexing
```

### **1.2 Port Numbers and Multiplexing**
```
Port Number Ranges:
- Well-known ports: 0-1023 (system services)
- Registered ports: 1024-49151 (user applications)
- Dynamic/Private ports: 49152-65535 (client connections)

Socket Identification:
Socket = (IP Address, Port Number, Protocol)
Connection = (Source IP, Source Port, Dest IP, Dest Port, Protocol)

Multiplexing Process:
- Multiple applications share single network interface
- Transport layer uses port numbers to identify applications
- Demultiplexing delivers data to correct application

Common Well-Known Ports:
20/21 - FTP (File Transfer Protocol)
22 - SSH (Secure Shell)
23 - Telnet
25 - SMTP (Simple Mail Transfer Protocol)
53 - DNS (Domain Name System)
67/68 - DHCP (Dynamic Host Configuration Protocol)
80 - HTTP (Hypertext Transfer Protocol)
110 - POP3 (Post Office Protocol v3)
143 - IMAP (Internet Message Access Protocol)
443 - HTTPS (HTTP Secure)
993 - IMAPS (IMAP Secure)
995 - POP3S (POP3 Secure)
```

---

## 🔄 Chapter 2: User Datagram Protocol (UDP)

### **2.1 UDP Characteristics**
```
Properties:
✓ Connectionless protocol
✓ Unreliable delivery (best effort)
✓ No flow control
✓ No congestion control
✓ No error recovery
✓ Minimal overhead
✓ Fast transmission
✓ Supports broadcast/multicast

When to Use UDP:
✓ Real-time applications (VoIP, video streaming)
✓ Simple request-response protocols (DNS)
✓ Gaming applications
✓ Broadcasting applications
✓ Applications that handle reliability themselves
```

### **2.2 UDP Header Format**
```
UDP Header (8 bytes):
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|          Source Port          |       Destination Port        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|            Length             |           Checksum            |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                             Data                              |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

Field Descriptions:
Source Port (16 bits): Sending application port
Destination Port (16 bits): Receiving application port
Length (16 bits): UDP header + data length
Checksum (16 bits): Error detection (optional in IPv4)
```

### **2.3 UDP Checksum Calculation**
```
Checksum Process:
1. Create pseudo-header from IP header
2. Append UDP header and data
3. Pad to even number of bytes if needed
4. Calculate 16-bit checksum
5. Insert complement in checksum field

Pseudo-Header (IPv4):
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Source IP Address                          |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                 Destination IP Address                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|      Zero     |   Protocol    |          UDP Length           |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

Example Calculation:
Source IP: 192.168.1.1 (C0A80101)
Dest IP: 192.168.1.2 (C0A80102)
Protocol: 17 (UDP)
UDP Length: 12 bytes
UDP Header: Source=1234, Dest=5678, Length=12, Checksum=0000
Data: "Hi" (4869)

Pseudo-header: C0A8 0101 C0A8 0102 0011 000C
UDP: 04D2 162E 000C 0000 4869
Sum: C0A8+0101+C0A8+0102+0011+000C+04D2+162E+000C+0000+4869 = 2C2F7
Carry: 2 + C2F7 = C2F9
Checksum: ~C2F9 = 3D06
```

---

## 🔗 Chapter 3: Transmission Control Protocol (TCP)

### **3.1 TCP Characteristics**
```
Properties:
✓ Connection-oriented protocol
✓ Reliable delivery guaranteed
✓ In-order delivery
✓ Flow control (sliding window)
✓ Congestion control
✓ Error detection and recovery
✓ Full-duplex communication
✓ Point-to-point (no broadcast)

TCP Services:
✓ Stream-oriented data transfer
✓ Buffered transfer
✓ Unstructured stream
✓ Connection establishment/termination
✓ Multiplexing using port numbers
```

### **3.2 TCP Header Format**
```
TCP Header (20-60 bytes):
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
|                    Options                    |    Padding    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                             data                              |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

Field Descriptions:
Source/Dest Port (16 bits each): Application identification
Sequence Number (32 bits): Position of data in stream
Acknowledgment Number (32 bits): Next expected sequence number
Data Offset (4 bits): TCP header length in 32-bit words
Reserved (6 bits): Must be zero
Control Flags (6 bits): URG, ACK, PSH, RST, SYN, FIN
Window (16 bits): Flow control window size
Checksum (16 bits): Error detection
Urgent Pointer (16 bits): Points to urgent data
Options (0-40 bytes): TCP options
```

### **3.3 TCP Control Flags**
```
Flag Functions:
URG (Urgent): Urgent pointer field is valid
ACK (Acknowledgment): Acknowledgment field is valid
PSH (Push): Push data to application immediately
RST (Reset): Reset the connection
SYN (Synchronize): Synchronize sequence numbers
FIN (Finish): No more data from sender

Flag Combinations:
SYN: Connection establishment request
SYN+ACK: Connection establishment response
ACK: Normal data acknowledgment
FIN: Connection termination request
FIN+ACK: Connection termination acknowledgment
RST: Immediate connection termination
PSH+ACK: Push data with acknowledgment
```

### **3.4 TCP Connection Management**

#### **Three-Way Handshake (Connection Establishment)**
```
Process:
Client                           Server
  |                                |
  |  SYN (seq=x)                  |
  |------------------------------>|
  |                               |
  |  SYN+ACK (seq=y, ack=x+1)    |
  |<------------------------------|
  |                               |
  |  ACK (seq=x+1, ack=y+1)      |
  |------------------------------>|
  |                               |
  |     Connection Established    |

Step-by-Step:
1. Client sends SYN with initial sequence number (ISN)
2. Server responds with SYN+ACK (own ISN + client ISN+1)
3. Client sends ACK (server ISN+1)
4. Connection established, data transfer can begin

State Transitions:
Client: CLOSED → SYN-SENT → ESTABLISHED
Server: CLOSED → LISTEN → SYN-RCVD → ESTABLISHED
```

#### **Four-Way Handshake (Connection Termination)**
```
Process:
Client                           Server
  |                                |
  |  FIN (seq=x)                  |
  |------------------------------>|
  |                               |
  |  ACK (ack=x+1)               |
  |<------------------------------|
  |                               |
  |  FIN (seq=y)                 |
  |<------------------------------|
  |                               |
  |  ACK (ack=y+1)               |
  |------------------------------>|
  |                               |
  |     Connection Closed         |

Steps:
1. Active close: Client sends FIN
2. Passive close: Server ACKs FIN
3. Server sends its own FIN
4. Client ACKs server's FIN
5. Connection fully closed

State Transitions:
Client: ESTABLISHED → FIN-WAIT-1 → FIN-WAIT-2 → TIME-WAIT → CLOSED
Server: ESTABLISHED → CLOSE-WAIT → LAST-ACK → CLOSED
```

---

## 🌊 Chapter 4: Flow Control

### **4.1 TCP Sliding Window**
```
Window Mechanism:
- Receiver advertises available buffer space
- Sender limits outstanding data to window size
- Window slides as data is acknowledged
- Prevents buffer overflow at receiver

Window Variables:
Send Window:
- SND.UNA: Oldest unacknowledged sequence number
- SND.NXT: Next sequence number to send
- SND.WND: Send window size

Receive Window:
- RCV.NXT: Next sequence number expected
- RCV.WND: Receive window size

Window Calculation:
Usable window = SND.UNA + SND.WND - SND.NXT
```

### **4.2 Window Management Example**
```
Initial State:
Sender window: [1000-1999] (1000 bytes)
Receiver window: 1000 bytes available

Step 1: Send 500 bytes (seq 1000-1499)
Sender: Outstanding = 500, Can send = 500
Receiver: Buffer used = 500, Advertise = 500

Step 2: Receive ACK 1500, window = 800
Sender: Outstanding = 0, Can send = 800
Window slides to [1500-2299]

Step 3: Application reads 300 bytes
Receiver: Buffer used = 200, Advertise = 800

Window Scaling:
- Original window field: 16 bits (max 65535)
- Window scale option: multiply by 2^n
- Enables windows up to 1 GB
- Negotiated during connection setup
```

### **4.3 Zero Window Handling**
```
Zero Window Condition:
- Receiver buffer full, advertises window = 0
- Sender stops transmitting data
- Sender periodically probes with 1-byte segments
- Receiver eventually advertises non-zero window

Window Probe Process:
1. Receiver advertises window = 0
2. Sender starts persist timer
3. Timer expires, send 1-byte probe
4. Receiver responds with current window size
5. Repeat until window > 0

Silly Window Syndrome:
Problem: Small window advertisements cause inefficiency
Solutions:
- Receiver: Don't advertise small windows (< MSS/2)
- Sender: Don't send small segments (Nagle's algorithm)
```

---

## 🚦 Chapter 5: Congestion Control

### **5.1 Congestion Control Concepts**
```
Congestion Indicators:
✓ Packet loss (timeout or duplicate ACKs)
✓ Increased round-trip time
✓ Explicit congestion notification (ECN)

Congestion Window (cwnd):
- Sender's estimate of network capacity
- Limits outstanding data independent of receiver window
- Effective window = min(cwnd, receiver window)

Congestion Control Goals:
✓ Maximize throughput
✓ Minimize delay
✓ Ensure fairness
✓ Prevent congestion collapse
```

### **5.2 TCP Congestion Control Algorithms**

#### **Slow Start**
```
Algorithm:
1. Initialize cwnd = 1 MSS (Maximum Segment Size)
2. For each ACK received: cwnd += 1 MSS
3. Exponential growth: cwnd doubles each RTT
4. Continue until cwnd reaches ssthresh or loss occurs

Example:
RTT 1: cwnd = 1, send 1 segment
RTT 2: cwnd = 2, send 2 segments  
RTT 3: cwnd = 4, send 4 segments
RTT 4: cwnd = 8, send 8 segments

Characteristics:
✓ Fast ramp-up from zero
✓ Exponential growth
✓ Stops at slow start threshold
✓ Used after timeout or connection start
```

#### **Congestion Avoidance**
```
Algorithm:
1. When cwnd ≥ ssthresh, enter congestion avoidance
2. For each ACK: cwnd += MSS²/cwnd (additive increase)
3. Linear growth: cwnd increases by 1 MSS per RTT
4. Continue until packet loss detected

Example:
RTT 1: cwnd = 8, receive 8 ACKs, cwnd = 8 + 8×(1/8) = 9
RTT 2: cwnd = 9, receive 9 ACKs, cwnd = 9 + 9×(1/9) = 10
RTT 3: cwnd = 10, receive 10 ACKs, cwnd = 10 + 10×(1/10) = 11

Characteristics:
✓ Conservative growth
✓ Additive increase
✓ Probes for available bandwidth
✓ Maintains stability near capacity
```

#### **Fast Retransmit and Fast Recovery**
```
Fast Retransmit:
1. Receiver sends duplicate ACK for out-of-order segments
2. Sender receives 3 duplicate ACKs
3. Retransmit missing segment immediately
4. Don't wait for timeout

Fast Recovery:
1. After fast retransmit, set ssthresh = cwnd/2
2. Set cwnd = ssthresh + 3×MSS
3. For each additional duplicate ACK: cwnd += MSS
4. When new ACK arrives: cwnd = ssthresh

Timeline Example:
Send: 1, 2, 3, 4, 5, 6, 7, 8
Receive: 1, 3, 4, 5, 6, 7, 8 (segment 2 lost)
ACKs: 1, 1, 1, 1, 1, 1, 1 (duplicate ACKs for segment 1)
After 3 duplicates: Fast retransmit segment 2
```

### **5.3 TCP Variants**

#### **TCP Tahoe**
```
Features:
- Slow start
- Congestion avoidance  
- Fast retransmit
- On loss: ssthresh = cwnd/2, cwnd = 1

Behavior:
- Always returns to slow start after loss
- Conservative approach
- Good for high-loss networks
```

#### **TCP Reno**
```
Features:
- All Tahoe features
- Fast recovery
- Distinguishes timeout vs duplicate ACKs

Behavior:
- Fast recovery for duplicate ACKs
- Slow start only for timeouts
- Better performance than Tahoe
- Most common implementation
```

#### **TCP New Reno**
```
Improvements:
- Better handling of multiple losses
- Partial ACK detection
- Stays in fast recovery longer
- Avoids multiple slow starts
```

#### **TCP CUBIC**
```
Features:
- Cubic function for window growth
- Better for high-bandwidth networks
- Faster recovery after loss
- Default in Linux

Window Function:
W(t) = C(t - K)³ + Wmax
where K = ∛(Wmax × β/C)
```

---

## 📊 Chapter 6: Performance Analysis

### **6.1 TCP Throughput Calculation**
```
Mathis Formula (Loss-based):
Throughput ≈ (MSS/RTT) × (1/√p)
where:
MSS = Maximum Segment Size
RTT = Round-Trip Time  
p = Packet loss probability

Example:
MSS = 1460 bytes, RTT = 100ms, p = 0.01%
Throughput = (1460/0.1) × (1/√0.0001) = 14600 × 100 = 1.46 Mbps

Window-Limited Throughput:
Throughput = Window Size / RTT

Bandwidth-Delay Product:
BDP = Bandwidth × RTT
Optimal window size = BDP
```

### **6.2 TCP Performance Factors**
```
Factors Affecting Performance:
✓ Round-trip time (RTT)
✓ Bandwidth-delay product
✓ Packet loss rate
✓ Receiver window size
✓ Network congestion
✓ TCP variant used
✓ Application behavior

Performance Optimization:
✓ Increase window size (window scaling)
✓ Reduce RTT (geographic proximity)
✓ Minimize packet loss (better infrastructure)
✓ Use appropriate TCP variant
✓ Optimize application behavior
✓ Enable TCP options (SACK, timestamps)
```

---

## 🎯 Practice Questions - Module 5 (70 Questions)

### **Multiple Choice Questions (35 Questions)**

**Q1.** What is the size of the UDP header?
a) 4 bytes
b) 8 bytes
c) 20 bytes
d) Variable

**Answer: b) 8 bytes**
*Explanation: UDP header is fixed at 8 bytes, containing source port, destination port, length, and checksum fields.*

**Q2.** Which TCP flag is used to establish a connection?
a) ACK
b) FIN
c) SYN
d) RST

**Answer: c) SYN**
*Explanation: SYN (Synchronize) flag is used to initiate TCP connection establishment in the three-way handshake.*

**Q3.** What happens when TCP receives 3 duplicate ACKs?
a) Connection is reset
b) Slow start is initiated
c) Fast retransmit is triggered
d) Window is closed

**Answer: c) Fast retransmit is triggered**
*Explanation: Three duplicate ACKs indicate a lost segment, triggering fast retransmit without waiting for timeout.*

**Q4.** In TCP slow start, how does the congestion window grow?
a) Linearly
b) Exponentially
c) Quadratically
d) Remains constant

**Answer: b) Exponentially**
*Explanation: In slow start, cwnd doubles each RTT (exponential growth) until reaching ssthresh or detecting loss.*

**Q5.** What is the maximum value of a TCP port number?
a) 1023
b) 49151
c) 65535
d) 65536

**Answer: c) 65535**
*Explanation: Port numbers are 16-bit values, ranging from 0 to 65535 (2^16 - 1).*

### **Calculation Questions (20 Questions)**

**Q1.** Calculate TCP throughput using Mathis formula with MSS=1460 bytes, RTT=50ms, loss rate=0.1%.

**Answer:**
```
Given:
- MSS = 1460 bytes
- RTT = 50 ms = 0.05 s
- Loss rate = 0.1% = 0.001

Mathis Formula:
Throughput = (MSS/RTT) × (1/√p)
Throughput = (1460/0.05) × (1/√0.001)
Throughput = 29,200 × (1/0.0316)
Throughput = 29,200 × 31.62
Throughput ≈ 923,304 bytes/s ≈ 7.39 Mbps

Therefore, maximum TCP throughput ≈ 7.39 Mbps
```

**Q2.** A TCP connection has RTT=100ms and bandwidth=10 Mbps. Calculate the optimal window size.

**Answer:**
```
Given:
- RTT = 100 ms = 0.1 s
- Bandwidth = 10 Mbps = 10 × 10^6 bps

Bandwidth-Delay Product:
BDP = Bandwidth × RTT
BDP = 10 × 10^6 × 0.1 = 1 × 10^6 bits = 125,000 bytes

Optimal window size = BDP = 125,000 bytes ≈ 122 KB

This window size allows full utilization of the available bandwidth.
```

### **Protocol Analysis Questions (15 Questions)**

**Q1.** Trace the TCP three-way handshake with initial sequence numbers.

**Answer:**
```
Assume Client ISN = 1000, Server ISN = 2000

Step 1: Client → Server
TCP Header: SYN=1, seq=1000, ack=0, window=8192
Meaning: "I want to establish connection, my ISN is 1000"

Step 2: Server → Client  
TCP Header: SYN=1, ACK=1, seq=2000, ack=1001, window=4096
Meaning: "I accept connection, my ISN is 2000, I expect your next byte at 1001"

Step 3: Client → Server
TCP Header: ACK=1, seq=1001, ack=2001, window=8192
Meaning: "Connection established, I expect your next byte at 2001"

Result:
- Connection established
- Client can send data starting at seq=1001
- Server can send data starting at seq=2001
- Both sides know each other's initial sequence numbers
```

---

## 🔬 Lab Exercises - Module 5

### **Lab 1: TCP Connection Analysis**

**Exercise 1.1: Wireshark TCP Analysis**
```
Objective: Analyze TCP connection establishment and termination

Procedure:
1. Start Wireshark capture
2. Open web browser and visit a website
3. Stop capture after page loads
4. Filter TCP traffic: tcp

Analysis Tasks:
1. Identify three-way handshake:
   - Find SYN packet (client → server)
   - Find SYN+ACK packet (server → client)
   - Find ACK packet (client → server)

2. Analyze sequence numbers:
   - Record initial sequence numbers
   - Verify acknowledgment numbers
   - Track sequence number progression

3. Examine TCP options:
   - Maximum Segment Size (MSS)
   - Window scaling factor
   - Selective ACK (SACK) permitted
   - Timestamps

4. Study connection termination:
   - Identify FIN packets
   - Trace four-way handshake
   - Note TIME-WAIT state

Sample Analysis Report:
Connection: 192.168.1.100:52341 → 93.184.216.34:80
SYN: seq=0, win=65535, MSS=1460
SYN+ACK: seq=0, ack=1, win=26847, MSS=1460
ACK: seq=1, ack=1, win=65535
Data transfer: 15 packets, 8.2 KB transferred
FIN: Client initiates close
Connection duration: 2.3 seconds
```

**Exercise 1.2: TCP Performance Measurement**
```
Objective: Measure TCP throughput and analyze performance

Tools:
- iperf3 (network performance tool)
- Two computers on same network
- Wireshark for packet analysis

Setup:
Server: iperf3 -s
Client: iperf3 -c <server_ip> -t 60 -i 5

Measurements:
1. Baseline throughput test
2. Different window sizes: -w 32K, -w 128K, -w 1M
3. Multiple parallel streams: -P 4
4. UDP comparison: -u -b 100M

Analysis:
- Compare TCP vs UDP performance
- Effect of window size on throughput
- Impact of parallel connections
- Network utilization efficiency

Expected Results:
Single stream: ~940 Mbps (Gigabit Ethernet)
Multiple streams: Higher aggregate throughput
Larger windows: Better performance on high-delay links
UDP: Higher throughput, potential packet loss
```

### **Lab 2: Congestion Control Simulation**

**Exercise 2.1: TCP Congestion Window Simulation**
```
Objective: Simulate TCP congestion control behavior

Python Implementation:
```python
import matplotlib.pyplot as plt
import numpy as np

class TCPCongestionControl:
    def __init__(self, mss=1460):
        self.mss = mss
        self.cwnd = 1.0  # Congestion window (in MSS units)
        self.ssthresh = 64.0  # Slow start threshold
        self.rtt_count = 0
        self.cwnd_history = []
        
    def slow_start(self):
        """Exponential growth in slow start"""
        self.cwnd *= 2
        
    def congestion_avoidance(self):
        """Linear growth in congestion avoidance"""
        self.cwnd += 1.0 / self.cwnd
        
    def packet_loss(self):
        """Handle packet loss (multiplicative decrease)"""
        self.ssthresh = max(self.cwnd / 2, 2)
        self.cwnd = 1.0  # Return to slow start
        
    def simulate_rtt(self):
        """Simulate one RTT"""
        self.rtt_count += 1
        
        # Record current window size
        self.cwnd_history.append(self.cwnd)
        
        # Determine phase
        if self.cwnd < self.ssthresh:
            self.slow_start()
        else:
            self.congestion_avoidance()
            
        # Simulate random packet loss (1% probability)
        if np.random.random() < 0.01:
            print(f"Packet loss at RTT {self.rtt_count}, cwnd={self.cwnd:.2f}")
            self.packet_loss()
    
    def run_simulation(self, duration_rtts):
        """Run simulation for specified RTTs"""
        for _ in range(duration_rtts):
            self.simulate_rtt()
        
        return self.cwnd_history

# Run simulation
tcp = TCPCongestionControl()
history = tcp.run_simulation(100)

# Plot results
plt.figure(figsize=(12, 6))
plt.plot(history)
plt.xlabel('RTT')
plt.ylabel('Congestion Window (MSS)')
plt.title('TCP Congestion Control Simulation')
plt.grid(True)
plt.show()

# Calculate statistics
max_cwnd = max(history)
avg_cwnd = np.mean(history)
print(f"Maximum cwnd: {max_cwnd:.2f} MSS")
print(f"Average cwnd: {avg_cwnd:.2f} MSS")
```

Analysis Tasks:
1. Observe slow start exponential growth
2. Identify congestion avoidance linear growth
3. Analyze impact of packet loss
4. Compare different loss rates
5. Study fairness between multiple flows
```

### **Lab 3: Socket Programming**

**Exercise 3.1: TCP Client-Server Implementation**
```
Objective: Implement TCP client-server communication

TCP Server (Python):
```python
import socket
import threading
import time

class TCPServer:
    def __init__(self, host='localhost', port=8080):
        self.host = host
        self.port = port
        self.socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        
    def handle_client(self, client_socket, address):
        """Handle individual client connection"""
        print(f"Connection from {address}")
        
        try:
            while True:
                # Receive data
                data = client_socket.recv(1024)
                if not data:
                    break
                    
                message = data.decode('utf-8')
                print(f"Received: {message}")
                
                # Echo back with timestamp
                response = f"Echo: {message} (Time: {time.time()})"
                client_socket.send(response.encode('utf-8'))
                
        except Exception as e:
            print(f"Error handling client {address}: {e}")
        finally:
            client_socket.close()
            print(f"Connection closed: {address}")
    
    def start(self):
        """Start the server"""
        self.socket.bind((self.host, self.port))
        self.socket.listen(5)
        print(f"Server listening on {self.host}:{self.port}")
        
        try:
            while True:
                client_socket, address = self.socket.accept()
                client_thread = threading.Thread(
                    target=self.handle_client,
                    args=(client_socket, address)
                )
                client_thread.daemon = True
                client_thread.start()
                
        except KeyboardInterrupt:
            print("Server shutting down...")
        finally:
            self.socket.close()

# Run server
if __name__ == "__main__":
    server = TCPServer()
    server.start()
```

TCP Client (Python):
```python
import socket
import time

class TCPClient:
    def __init__(self, host='localhost', port=8080):
        self.host = host
        self.port = port
        
    def connect_and_send(self, messages):
        """Connect to server and send messages"""
        try:
            # Create socket and connect
            client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            client_socket.connect((self.host, self.port))
            print(f"Connected to {self.host}:{self.port}")
            
            for message in messages:
                # Send message
                client_socket.send(message.encode('utf-8'))
                print(f"Sent: {message}")
                
                # Receive response
                response = client_socket.recv(1024)
                print(f"Received: {response.decode('utf-8')}")
                
                time.sleep(1)  # Wait between messages
                
        except Exception as e:
            print(f"Client error: {e}")
        finally:
            client_socket.close()
            print("Connection closed")

# Run client
if __name__ == "__main__":
    client = TCPClient()
    messages = ["Hello", "World", "TCP", "Test"]
    client.connect_and_send(messages)
```

Testing Scenarios:
1. Single client connection
2. Multiple concurrent clients
3. Large message transmission
4. Connection timeout testing
5. Error handling verification
```

**Exercise 3.2: UDP Client-Server Implementation**
```
Objective: Compare UDP vs TCP communication

UDP Server (Python):
```python
import socket
import time

class UDPServer:
    def __init__(self, host='localhost', port=8081):
        self.host = host
        self.port = port
        self.socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        
    def start(self):
        """Start UDP server"""
        self.socket.bind((self.host, self.port))
        print(f"UDP Server listening on {self.host}:{self.port}")
        
        try:
            while True:
                # Receive datagram
                data, address = self.socket.recvfrom(1024)
                message = data.decode('utf-8')
                print(f"Received from {address}: {message}")
                
                # Send response
                response = f"UDP Echo: {message} (Time: {time.time()})"
                self.socket.sendto(response.encode('utf-8'), address)
                
        except KeyboardInterrupt:
            print("UDP Server shutting down...")
        finally:
            self.socket.close()

# Run UDP server
if __name__ == "__main__":
    server = UDPServer()
    server.start()
```

UDP Client (Python):
```python
import socket
import time

class UDPClient:
    def __init__(self, host='localhost', port=8081):
        self.host = host
        self.port = port
        
    def send_messages(self, messages):
        """Send UDP messages"""
        try:
            client_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
            
            for message in messages:
                # Send datagram
                client_socket.sendto(
                    message.encode('utf-8'), 
                    (self.host, self.port)
                )
                print(f"Sent: {message}")
                
                # Receive response (with timeout)
                client_socket.settimeout(5.0)
                try:
                    response, address = client_socket.recvfrom(1024)
                    print(f"Received: {response.decode('utf-8')}")
                except socket.timeout:
                    print("No response received (timeout)")
                
                time.sleep(1)
                
        except Exception as e:
            print(f"UDP Client error: {e}")
        finally:
            client_socket.close()

# Run UDP client
if __name__ == "__main__":
    client = UDPClient()
    messages = ["Hello", "World", "UDP", "Test"]
    client.send_messages(messages)
```

Comparison Analysis:
1. Connection setup overhead
2. Reliability differences
3. Performance characteristics
4. Error handling mechanisms
5. Use case suitability
```

---

## 📖 Module 5 Summary

### **Key Concepts Mastered**
✓ Transport layer functions and services
✓ UDP characteristics and applications
✓ TCP connection management and reliability
✓ Flow control mechanisms (sliding window)
✓ Congestion control algorithms
✓ Performance analysis and optimization

### **Practical Skills Developed**
✓ TCP/UDP packet analysis with Wireshark
✓ Socket programming implementation
✓ Performance measurement and tuning
✓ Congestion control simulation
✓ Protocol comparison and selection
✓ Network application development

### **Mathematical Concepts**
✓ Throughput calculations (Mathis formula)
✓ Bandwidth-delay product analysis
✓ Window size optimization
✓ Congestion control modeling
✓ Performance metric calculations
✓ Statistical analysis of network behavior

### **Next Module Preview**
**Module 6: Application Layer**
- HTTP/HTTPS protocols
- DNS and DHCP services
- Email protocols (SMTP, POP3, IMAP)
- File transfer protocols (FTP, SFTP)
- Network management (SNMP)

---

**🎯 Transport Layer mastered! Ready for Application Layer protocols? 🚀**