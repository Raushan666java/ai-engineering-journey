# Module 3: Data Link Layer - Complete Guide
## 🔗 Reliable Frame Delivery

---

## 📚 Chapter 1: Data Link Layer Overview

### **1.1 Data Link Layer Functions**
```
Primary Functions:
✓ Framing: Organize bits into frames
✓ Physical addressing: MAC addresses
✓ Flow control: Manage data rate
✓ Error control: Detect and correct errors
✓ Access control: Manage shared medium

Sub-layers:
1. Logical Link Control (LLC) - IEEE 802.2
   - Error control and flow control
   - Interface to network layer
   - Protocol multiplexing

2. Media Access Control (MAC) - IEEE 802.3/802.11
   - Medium access control
   - Physical addressing
   - Frame formatting
```

### **1.2 Frame Structure**
```
Generic Frame Format:
┌─────────┬─────────┬──────┬─────────┬─────┐
│ Header  │ Address │ Data │ Control │ FCS │
└─────────┴─────────┴──────┴─────────┴─────┘

Components:
- Header: Synchronization and control
- Address: Source and destination MAC
- Data: Network layer payload
- Control: Protocol and sequence info
- FCS: Frame Check Sequence (error detection)
```

---

## 🔄 Chapter 2: Framing Techniques

### **2.1 Character-Oriented Framing**
```
Byte Stuffing Method:
- Uses special characters as delimiters
- STX (Start of Text): 0x02
- ETX (End of Text): 0x03
- DLE (Data Link Escape): 0x10

Process:
1. Insert STX at beginning
2. Insert ETX at end
3. If data contains STX/ETX/DLE, precede with DLE

Example:
Original data: A DLE B STX C
Stuffed frame: STX A DLE DLE B DLE STX C ETX

Advantages:
✓ Simple implementation
✓ Variable frame size
✓ Easy synchronization

Disadvantages:
✗ Overhead increases with special characters
✗ Character set dependent
✗ Inefficient for binary data
```

### **2.2 Bit-Oriented Framing**
```
Bit Stuffing (HDLC Method):
- Flag sequence: 01111110 (0x7E)
- Frames start and end with flag
- Prevent flag pattern in data

Stuffing Rule:
- After five consecutive 1s in data, insert 0
- Receiver removes stuffed 0s

Example:
Original: 01111110 (would be confused with flag)
Stuffed:  011111010 (0 inserted after five 1s)

HDLC Frame Format:
┌─────┬─────┬─────┬──────┬─────┬─────┐
│Flag │Addr │Ctrl │ Data │ FCS │Flag │
│01111110│8bits│8bits│Variable│16bits│01111110│
└─────┴─────┴─────┴──────┴─────┴─────┘

Advantages:
✓ Efficient for binary data
✓ No character set dependency
✓ Precise frame boundaries

Disadvantages:
✗ More complex implementation
✗ Bit-level processing required
```

### **2.3 Length-Based Framing**
```
Method:
- Frame header contains length field
- Receiver reads specified number of bytes
- No special delimiter characters needed

Format:
┌────────┬──────────────┐
│ Length │     Data     │
│ 2 bytes│ Length bytes │
└────────┴──────────────┘

Advantages:
✓ No stuffing overhead
✓ Simple processing
✓ Efficient bandwidth usage

Disadvantages:
✗ Length field corruption causes problems
✗ Requires reliable length transmission
✗ Synchronization issues if length lost

Applications:
- Ethernet frames (with other methods)
- ATM cells (fixed length)
- Some proprietary protocols
```

---

## 🛡️ Chapter 3: Error Detection and Correction

### **3.1 Error Detection Methods**

#### **Parity Check**
```
Simple Parity:
- Add one bit to make total 1s even (even parity)
- Or make total 1s odd (odd parity)

Example (Even Parity):
Data: 1011001 (four 1s - even)
Parity bit: 0
Transmitted: 10110010

Data: 1011000 (three 1s - odd)  
Parity bit: 1
Transmitted: 10110001

Limitations:
✗ Detects only odd number of errors
✗ Cannot detect even number of errors
✗ Cannot correct errors
✗ 50% error detection capability

Two-Dimensional Parity:
- Arrange data in matrix
- Calculate parity for rows and columns
- Can detect and correct single errors

Example 4x4 Matrix:
1 0 1 1 | 1 (row parity)
0 1 0 1 | 0
1 1 1 0 | 1  
0 0 1 1 | 0
---------
0 0 1 1   (column parity)
```

#### **Checksum**
```
Internet Checksum Algorithm:
1. Divide data into 16-bit words
2. Sum all words using 1's complement arithmetic
3. Take 1's complement of sum
4. Append as checksum

Example:
Data words: 0x4500, 0x003C, 0x1C46, 0x4000
Sum: 4500 + 003C + 1C46 + 4000 = B982
Checksum: ~B982 = 467D

Verification:
Sum all words including checksum
Result should be 0xFFFF (all 1s)

Properties:
✓ Detects all single-bit errors
✓ Detects most burst errors
✓ Simple to implement in software
✗ Weak against systematic errors
✗ Cannot correct errors
```

#### **Cyclic Redundancy Check (CRC)**
```
CRC Principle:
- Treat data as polynomial
- Divide by generator polynomial
- Remainder becomes CRC

Common CRC Polynomials:
CRC-8:   x⁸ + x² + x + 1
CRC-16:  x¹⁶ + x¹⁵ + x² + 1  
CRC-32:  x³² + x²⁶ + x²³ + x²² + x¹⁶ + x¹² + x¹¹ + x¹⁰ + x⁸ + x⁷ + x⁵ + x⁴ + x² + x + 1

CRC Calculation Process:
1. Append n zeros to data (n = degree of generator)
2. Perform polynomial division (XOR operations)
3. Remainder is CRC
4. Replace appended zeros with CRC

Example (CRC-3 with generator x³ + x + 1 = 1011):
Data: 1101011011
Append 3 zeros: 1101011011000

Division:
1101011011000 ÷ 1011 = quotient, remainder 010

CRC = 010
Transmitted: 1101011011010

Error Detection Capability:
✓ All single-bit errors
✓ All double-bit errors  
✓ All odd number of errors (if generator has x+1 factor)
✓ All burst errors ≤ degree of generator
✓ Most other error patterns
```

### **3.2 Error Correction Methods**

#### **Hamming Code**
```
Hamming Distance:
- Minimum number of bit positions where codewords differ
- For error detection: d_min ≥ t + 1
- For error correction: d_min ≥ 2t + 1

Hamming Code Construction:
- Parity bits at positions 2ⁿ (1, 2, 4, 8, 16, ...)
- Each parity bit covers specific data bits
- Can correct single-bit errors

Example (7,4) Hamming Code:
Positions: 1 2 3 4 5 6 7
Bits:      P₁P₂D₁P₃D₂D₃D₄

Parity calculations:
P₁ covers positions 1,3,5,7: P₁ = D₁ ⊕ D₂ ⊕ D₄
P₂ covers positions 2,3,6,7: P₂ = D₁ ⊕ D₃ ⊕ D₄  
P₃ covers positions 4,5,6,7: P₃ = D₂ ⊕ D₃ ⊕ D₄

Error Correction:
Calculate syndrome S = S₃S₂S₁
If S ≠ 0, error at position S
```

#### **Reed-Solomon Codes**
```
Properties:
- Based on finite field arithmetic
- Can correct multiple symbol errors
- Widely used in storage and communication

Applications:
✓ CD/DVD error correction
✓ QR codes
✓ Satellite communication
✓ Digital TV broadcasting

Reed-Solomon (n,k) Code:
- n: Total symbols in codeword
- k: Data symbols
- Can correct up to (n-k)/2 symbol errors

Example RS(255,223):
- 255 total bytes
- 223 data bytes  
- 32 parity bytes
- Can correct up to 16 byte errors
```

---

## 🚦 Chapter 4: Flow Control Protocols

### **4.1 Stop-and-Wait Protocol**
```
Operation:
1. Sender transmits frame
2. Sender waits for acknowledgment
3. Receiver sends ACK if frame correct
4. Sender transmits next frame

Sequence Numbers:
- Use 1-bit sequence numbers (0,1)
- Prevents duplicate frame acceptance
- Handles ACK loss scenarios

Timeline Example:
Sender    |    Receiver
Frame 0 ──────→ Frame 0 received
         ←────── ACK 0
Frame 1 ──────→ Frame 1 received  
         ←────── ACK 1

Problems:
- Low efficiency (one frame at a time)
- Utilization = 1 / (1 + 2a)
  where a = propagation time / transmission time

Efficiency Example:
Satellite link: 270ms propagation, 1ms transmission
a = 270/1 = 270
Utilization = 1/(1+540) = 0.18% (very poor!)
```

### **4.2 Go-Back-N Protocol**
```
Operation:
- Sender can transmit multiple frames
- Uses sliding window mechanism
- Receiver only accepts frames in order
- NAK triggers retransmission of all subsequent frames

Window Size:
- Maximum frames sender can transmit
- Sequence number space: 2ⁿ
- Window size ≤ 2ⁿ - 1

Example (Window size = 4):
Sender window: [0,1,2,3]
Frames 0,1,2,3 transmitted
ACK 0 received → window slides to [1,2,3,4]
Frame 2 lost → NAK 2 received
Retransmit frames 2,3,4,...

Advantages:
✓ Better utilization than Stop-and-Wait
✓ Simple receiver implementation
✓ In-order delivery guaranteed

Disadvantages:
✗ Retransmits correctly received frames
✗ Bandwidth waste on errors
✗ Large window needed for long delays
```

### **4.3 Selective Repeat Protocol**
```
Operation:
- Sender maintains window of outstanding frames
- Receiver accepts frames out of order
- Only lost frames are retransmitted
- Receiver buffers out-of-order frames

Window Management:
- Sender window: frames transmitted but not ACKed
- Receiver window: frames that can be accepted
- Both windows slide independently

Example:
Frames 0,1,2,3,4 transmitted
Frame 2 lost, frames 3,4 received and buffered
NAK 2 received → only frame 2 retransmitted
When frame 2 arrives, deliver 2,3,4 to upper layer

Advantages:
✓ Optimal bandwidth utilization
✓ Only retransmits lost frames
✓ Best performance under errors

Disadvantages:
✗ Complex receiver implementation
✗ Requires frame buffering
✗ More memory requirements
✗ Duplicate detection needed

Window Size Constraint:
Window size ≤ 2ⁿ⁻¹ (to avoid ambiguity)
```

---

## 🌐 Chapter 5: Multiple Access Protocols

### **5.1 ALOHA Protocols**

#### **Pure ALOHA**
```
Operation:
- Stations transmit whenever they have data
- If collision occurs, wait random time and retry
- No coordination between stations

Collision Detection:
- Collision if no ACK received
- Vulnerable period = 2 × frame transmission time
- Collisions occur if transmissions overlap

Throughput Analysis:
S = G × e^(-2G)
where:
S = Throughput (successful transmissions)
G = Offered load (total transmission attempts)

Maximum throughput: 18.4% at G = 0.5

Problems:
✗ Low efficiency (18.4% maximum)
✗ High collision probability
✗ Performance degrades with load
✗ Unbounded delay possible
```

#### **Slotted ALOHA**
```
Improvements:
- Time divided into slots
- Transmissions only at slot boundaries
- Reduces vulnerable period by half

Throughput:
S = G × e^(-G)
Maximum throughput: 36.8% at G = 1

Advantages over Pure ALOHA:
✓ Double the throughput
✓ Reduced collision window
✓ Better synchronization

Requirements:
- Global time synchronization
- Slot boundary detection
- Buffering for slot alignment
```

### **5.2 CSMA Protocols**

#### **CSMA (Carrier Sense Multiple Access)**
```
Basic Principle:
- Listen before transmitting
- If channel busy, defer transmission
- Reduces but doesn't eliminate collisions

Variants:

1-persistent CSMA:
- If channel idle, transmit immediately
- If channel busy, wait until idle then transmit
- High collision probability when channel becomes idle

Non-persistent CSMA:
- If channel idle, transmit immediately  
- If channel busy, wait random time then retry
- Lower collision probability
- Better throughput than 1-persistent

p-persistent CSMA:
- If channel idle, transmit with probability p
- With probability (1-p), wait one slot
- Used in slotted channels
- Balances delay and collision probability
```

#### **CSMA/CD (Collision Detection)**
```
Operation:
1. Listen before transmitting (Carrier Sense)
2. Transmit if channel idle
3. Monitor channel during transmission
4. If collision detected, stop and send jam signal
5. Wait random backoff time before retry

Collision Detection:
- Compare transmitted and received signals
- Voltage level differences indicate collision
- Minimum frame size ensures collision detection

Ethernet CSMA/CD:
- Minimum frame: 64 bytes (512 bits)
- Maximum segment: 2500m (round-trip time)
- Jam signal: 32-bit pattern
- Binary exponential backoff

Backoff Algorithm:
After nth collision:
- Choose random number r from [0, 2^min(n,10) - 1]
- Wait r × slot time before retry
- Slot time = 512 bit times

Advantages:
✓ Efficient use of bandwidth
✓ Simple implementation
✓ Good performance at low loads
✓ Widely deployed (Ethernet)

Limitations:
✗ Performance degrades with load
✗ Collision domain limitations
✗ Not suitable for wireless (hidden terminal)
```

#### **CSMA/CA (Collision Avoidance)**
```
Used in: IEEE 802.11 (WiFi)

Problems with CSMA/CD in Wireless:
- Hidden terminal problem
- Exposed terminal problem  
- Signal attenuation makes collision detection difficult

CSMA/CA Operation:
1. Sense channel before transmission
2. If busy, wait for DIFS (Distributed IFS)
3. If idle for DIFS, start backoff timer
4. Transmit when timer expires
5. Receiver sends ACK after SIFS (Short IFS)

RTS/CTS Mechanism:
- RTS (Request to Send): Reserve channel
- CTS (Clear to Send): Grant channel access
- Solves hidden terminal problem
- Optional for small frames

Backoff Procedure:
- Contention Window (CW) starts at CWmin
- Double CW after each collision (up to CWmax)
- Random backoff in [0, CW-1] slots
- Freeze counter when channel busy

Frame Spacing:
SIFS (10μs): ACK, CTS, data in fragment
DIFS (50μs): New frame transmission  
EIFS (364μs): After error detection

Advantages:
✓ Suitable for wireless medium
✓ Handles hidden terminals (with RTS/CTS)
✓ Collision avoidance reduces waste
✓ Adaptive backoff mechanism

Disadvantages:
✗ Lower efficiency than CSMA/CD
✗ RTS/CTS overhead
✗ Exposed terminal problem remains
✗ Complex timing requirements
```

### **5.3 Token-Based Protocols**

#### **Token Ring**
```
Operation:
- Token circulates around ring
- Station captures token to transmit
- Releases token after transmission
- Deterministic access method

Token Format:
┌─────────┬─────────┬─────────┐
│Start Del│Access Ctl│End Del │
│ 1 byte  │ 1 byte  │ 1 byte │
└─────────┴─────────┴─────────┘

Frame Format:
┌─────┬─────┬─────┬─────┬──────┬─────┬─────┬─────┐
│ SD  │ AC  │ FC  │ DA  │ SA   │Data │ FCS │ ED  │
└─────┴─────┴─────┴─────┴──────┴─────┴─────┴─────┘

Access Control Byte:
PPP T M RRR
P: Priority bits
T: Token bit (0=token, 1=frame)
M: Monitor bit
R: Reservation bits

Advantages:
✓ Deterministic access
✓ No collisions
✓ Bounded delay
✓ Priority mechanism
✓ Efficient at high loads

Disadvantages:
✗ Token overhead
✗ Single point of failure
✗ Complex error recovery
✗ Ring maintenance required
```

#### **Token Bus**
```
Concept:
- Logical ring on physical bus
- Token passed in predetermined order
- Combines bus topology with token access

Station Management:
- Stations know predecessor and successor
- Token passed to next station in sequence
- New stations can join ring
- Failed stations removed from ring

Advantages:
✓ Deterministic like token ring
✓ Bus topology benefits
✓ Priority support
✓ Fault tolerance

Disadvantages:
✗ Complex protocol
✗ Overhead for ring maintenance
✗ Not widely deployed
✗ Superseded by Ethernet
```

---

## 🎯 Practice Questions - Module 3 (80 Questions)

### **Multiple Choice Questions (45 Questions)**

**Q1.** What is the minimum frame size for Ethernet to ensure collision detection?
a) 46 bytes
b) 60 bytes  
c) 64 bytes
d) 72 bytes

**Answer: c) 64 bytes**
*Explanation: Minimum Ethernet frame size is 64 bytes to ensure collision detection works properly in CSMA/CD networks.*

**Q2.** In CRC error detection, what happens if the remainder is zero?
a) Error detected
b) No error detected
c) Frame discarded
d) Retransmission requested

**Answer: b) No error detected**
*Explanation: In CRC, if the remainder after division is zero, it indicates no error was detected in the frame.*

**Q3.** What is the maximum throughput of Pure ALOHA?
a) 18.4%
b) 36.8%
c) 50%
d) 100%

**Answer: a) 18.4%**
*Explanation: Pure ALOHA has maximum throughput of 18.4% due to the 2T vulnerable period.*

**Q4.** Which protocol is used in IEEE 802.11 wireless networks?
a) CSMA/CD
b) CSMA/CA
c) Token Ring
d) Pure ALOHA

**Answer: b) CSMA/CA**
*Explanation: IEEE 802.11 uses CSMA/CA (Collision Avoidance) due to the difficulty of collision detection in wireless.*

**Q5.** In Go-Back-N protocol, what happens when a NAK is received?
a) Only the lost frame is retransmitted
b) All frames from the lost frame onwards are retransmitted
c) The connection is reset
d) An error message is sent

**Answer: b) All frames from the lost frame onwards are retransmitted**
*Explanation: Go-Back-N retransmits all frames starting from the lost frame, even if some were received correctly.*

### **Error Detection Calculations (15 Questions)**

**Q1.** Calculate the CRC for data 1101011011 using generator polynomial x³ + x + 1.

**Answer:**
```
Generator polynomial: x³ + x + 1 = 1011 (binary)
Data: 1101011011
Append 3 zeros: 1101011011000

Polynomial Division:
        1101001101
       _______________
1011 ) 1101011011000
       1011
       ----
        1001
        1011
        ----
         0101
         0000
         ----
          1011
          1011
          ----
           0001
           0000
           ----
            0110
            0000
            ----
             1101
             1011
             ----
              1100
              1011
              ----
               1110
               1011
               ----
                1010
                1011
                ----
                 001 (remainder)

CRC = 001
Transmitted data: 1101011011001
```

**Q2.** For a (7,4) Hamming code, encode the data 1010.

**Answer:**
```
Data bits: D₁D₂D₃D₄ = 1010
Positions: 1 2 3 4 5 6 7
Bits:      P₁P₂D₁P₃D₂D₃D₄

Parity calculations:
P₁ covers positions 1,3,5,7: P₁ = D₁ ⊕ D₂ ⊕ D₄ = 1 ⊕ 0 ⊕ 0 = 1
P₂ covers positions 2,3,6,7: P₂ = D₁ ⊕ D₃ ⊕ D₄ = 1 ⊕ 1 ⊕ 0 = 0  
P₃ covers positions 4,5,6,7: P₃ = D₂ ⊕ D₃ ⊕ D₄ = 0 ⊕ 1 ⊕ 0 = 1

Encoded word: P₁P₂D₁P₃D₂D₃D₄ = 1011010
```

### **Flow Control Analysis (20 Questions)**

**Q1.** Calculate the efficiency of Stop-and-Wait protocol for a 1 Mbps link with 250ms round-trip time and 1000-byte frames.

**Answer:**
```
Given:
- Link speed: 1 Mbps = 10⁶ bps
- Round-trip time: 250 ms = 0.25 s
- Frame size: 1000 bytes = 8000 bits

Transmission time: 8000 bits / 10⁶ bps = 0.008 s = 8 ms
Propagation time: 250 ms / 2 = 125 ms (one way)

a = Propagation time / Transmission time = 125 ms / 8 ms = 15.625

Efficiency = 1 / (1 + 2a) = 1 / (1 + 2×15.625) = 1 / 32.25 = 3.1%

The protocol is very inefficient due to long propagation delay.
```

---

## 🔬 Lab Exercises - Module 3

### **Lab 1: Ethernet Frame Analysis**

**Exercise 1.1: Frame Capture and Analysis**
```
Objective: Analyze Ethernet frame structure using Wireshark

Equipment:
- Computer with Wireshark installed
- Network connection
- Sample network traffic

Procedure:
1. Start Wireshark packet capture
2. Generate network traffic (ping, web browsing)
3. Stop capture after collecting 100+ frames
4. Analyze Ethernet frame structure

Frame Analysis Tasks:
1. Identify frame components:
   - Preamble (if visible)
   - Destination MAC address
   - Source MAC address  
   - EtherType/Length field
   - Payload data
   - Frame Check Sequence

2. Measure frame sizes:
   - Minimum frame size observed
   - Maximum frame size observed
   - Average frame size
   - Frame size distribution

3. MAC address analysis:
   - Identify local vs global addresses
   - Unicast vs multicast addresses
   - Vendor identification (OUI lookup)

Sample Analysis:
Frame 1: 74 bytes
Destination: ff:ff:ff:ff:ff:ff (broadcast)
Source: 00:1b:44:11:3a:b7 (Dell Inc.)
Type: 0x0806 (ARP)
Data: ARP request for 192.168.1.1

Documentation:
Create frame analysis report including:
- Frame structure diagram
- Field explanations
- Size statistics
- Address patterns observed
```

**Exercise 1.2: Frame Generation**
```
Objective: Generate custom Ethernet frames

Tools:
- Packet crafting tools (Scapy, hping3)
- Network interface access
- Wireshark for verification

Tasks:
1. Generate minimum size frame (64 bytes)
2. Generate maximum size frame (1518 bytes)
3. Create broadcast frame
4. Create multicast frame
5. Generate frame with specific EtherType

Python Scapy Example:
```python
from scapy.all import *

# Create minimum Ethernet frame
eth = Ether(dst="ff:ff:ff:ff:ff:ff", src="00:11:22:33:44:55")
data = "A" * 46  # Minimum payload
frame = eth / data
sendp(frame, iface="eth0")

# Create maximum frame
large_data = "B" * 1500
large_frame = eth / large_data
sendp(large_frame, iface="eth0")
```

Verification:
- Capture generated frames with Wireshark
- Verify frame structure and sizes
- Confirm proper frame formatting
- Check FCS calculation (if visible)
```

### **Lab 2: Error Detection Implementation**

**Exercise 2.1: CRC Implementation**
```
Objective: Implement CRC calculation in software

Programming Task:
Implement CRC-8 calculation using polynomial x⁸ + x² + x + 1

C Implementation:
```c
#include <stdio.h>
#include <stdint.h>

#define CRC8_POLY 0x07  // x^8 + x^2 + x + 1

uint8_t crc8_calculate(uint8_t *data, int length) {
    uint8_t crc = 0x00;
    int i, j;
    
    for (i = 0; i < length; i++) {
        crc ^= data[i];
        for (j = 0; j < 8; j++) {
            if (crc & 0x80) {
                crc = (crc << 1) ^ CRC8_POLY;
            } else {
                crc <<= 1;
            }
        }
    }
    return crc;
}

int main() {
    uint8_t test_data[] = {0x31, 0x32, 0x33, 0x34};
    uint8_t crc = crc8_calculate(test_data, 4);
    printf("CRC-8: 0x%02X\n", crc);
    return 0;
}
```

Testing:
1. Test with known data patterns
2. Verify against online CRC calculators
3. Test error detection capability
4. Measure performance

Python Implementation:
```python
def crc8(data, poly=0x07):
    crc = 0x00
    for byte in data:
        crc ^= byte
        for _ in range(8):
            if crc & 0x80:
                crc = (crc << 1) ^ poly
            else:
                crc <<= 1
            crc &= 0xFF
    return crc

# Test
test_data = b"1234"
result = crc8(test_data)
print(f"CRC-8: 0x{result:02X}")
```
```

**Exercise 2.2: Hamming Code Implementation**
```
Objective: Implement Hamming (7,4) error correction

Algorithm Implementation:
```python
def hamming_encode(data_bits):
    """Encode 4 data bits using Hamming (7,4) code"""
    d1, d2, d3, d4 = data_bits
    
    # Calculate parity bits
    p1 = d1 ^ d2 ^ d4
    p2 = d1 ^ d3 ^ d4  
    p3 = d2 ^ d3 ^ d4
    
    # Return 7-bit codeword
    return [p1, p2, d1, p3, d2, d3, d4]

def hamming_decode(received_bits):
    """Decode and correct Hamming (7,4) code"""
    p1, p2, d1, p3, d2, d3, d4 = received_bits
    
    # Calculate syndrome
    s1 = p1 ^ d1 ^ d2 ^ d4
    s2 = p2 ^ d1 ^ d3 ^ d4
    s3 = p3 ^ d2 ^ d3 ^ d4
    
    syndrome = s3 * 4 + s2 * 2 + s1
    
    if syndrome != 0:
        # Error detected, correct it
        received_bits[syndrome - 1] ^= 1
        print(f"Error corrected at position {syndrome}")
    
    # Extract data bits
    return [received_bits[2], received_bits[4], received_bits[5], received_bits[6]]

# Test
original_data = [1, 0, 1, 0]
encoded = hamming_encode(original_data)
print(f"Original: {original_data}")
print(f"Encoded: {encoded}")

# Introduce error
encoded[3] ^= 1  # Flip bit at position 4
decoded = hamming_decode(encoded)
print(f"Decoded: {decoded}")
```

Testing Scenarios:
1. No error case
2. Single-bit error in each position
3. Double-bit error (should be detected but not corrected)
4. Performance measurement
```

### **Lab 3: Protocol Simulation**

**Exercise 3.1: Stop-and-Wait Simulation**
```
Objective: Simulate Stop-and-Wait protocol behavior

Simulation Parameters:
- Frame transmission time: 10ms
- Propagation delay: 50ms  
- Error probability: 1%
- Timeout period: 150ms

Python Simulation:
```python
import random
import time

class StopAndWaitSender:
    def __init__(self, error_prob=0.01, timeout=150):
        self.error_prob = error_prob
        self.timeout = timeout
        self.sequence_num = 0
        self.stats = {'frames_sent': 0, 'retransmissions': 0, 'timeouts': 0}
    
    def send_frame(self, data):
        """Send frame and wait for ACK"""
        while True:
            self.stats['frames_sent'] += 1
            print(f"Sending frame {self.sequence_num} with data: {data}")
            
            # Simulate transmission
            time.sleep(0.01)  # 10ms transmission time
            
            # Simulate propagation and processing
            time.sleep(0.05)  # 50ms propagation
            
            # Simulate errors
            if random.random() < self.error_prob:
                print("Frame lost or corrupted")
                self.stats['retransmissions'] += 1
                continue
            
            # Simulate ACK
            print(f"ACK {self.sequence_num} received")
            self.sequence_num = 1 - self.sequence_num  # Toggle 0/1
            break
    
    def send_multiple_frames(self, frame_count):
        """Send multiple frames and measure performance"""
        start_time = time.time()
        
        for i in range(frame_count):
            self.send_frame(f"Data_{i}")
        
        end_time = time.time()
        total_time = end_time - start_time
        
        print(f"\nStatistics:")
        print(f"Frames sent: {self.stats['frames_sent']}")
        print(f"Retransmissions: {self.stats['retransmissions']}")
        print(f"Total time: {total_time:.2f}s")
        print(f"Throughput: {frame_count/total_time:.2f} frames/s")
        print(f"Efficiency: {frame_count/self.stats['frames_sent']*100:.1f}%")

# Run simulation
sender = StopAndWaitSender(error_prob=0.05)
sender.send_multiple_frames(10)
```

Analysis Tasks:
1. Measure protocol efficiency
2. Analyze impact of error rate
3. Study timeout effects
4. Compare with theoretical calculations
```

**Exercise 3.2: CSMA/CD Simulation**
```
Objective: Simulate Ethernet CSMA/CD behavior

Simulation Components:
- Multiple stations
- Shared medium
- Collision detection
- Binary exponential backoff

```python
import random
import time
from collections import deque

class CSMAStation:
    def __init__(self, station_id, medium):
        self.id = station_id
        self.medium = medium
        self.backoff_stage = 0
        self.frame_queue = deque()
        self.stats = {'frames_sent': 0, 'collisions': 0, 'successful': 0}
    
    def generate_frame(self):
        """Generate frame for transmission"""
        frame = f"Frame_from_Station_{self.id}_{self.stats['frames_sent']}"
        self.frame_queue.append(frame)
    
    def attempt_transmission(self):
        """Attempt to transmit frame using CSMA/CD"""
        if not self.frame_queue:
            return
        
        frame = self.frame_queue[0]
        
        # Carrier sense
        if self.medium.is_busy():
            return  # Defer transmission
        
        # Attempt transmission
        collision = self.medium.transmit(self.id, frame)
        
        if collision:
            self.stats['collisions'] += 1
            self.backoff_stage = min(self.backoff_stage + 1, 10)
            
            # Binary exponential backoff
            backoff_slots = random.randint(0, 2**self.backoff_stage - 1)
            time.sleep(backoff_slots * 0.001)  # Slot time = 1ms
            
        else:
            # Successful transmission
            self.frame_queue.popleft()
            self.stats['successful'] += 1
            self.stats['frames_sent'] += 1
            self.backoff_stage = 0

class SharedMedium:
    def __init__(self):
        self.transmitting_stations = []
        self.busy_until = 0
    
    def is_busy(self):
        return time.time() < self.busy_until
    
    def transmit(self, station_id, frame):
        """Simulate frame transmission"""
        current_time = time.time()
        
        # Check for collision
        if self.transmitting_stations:
            # Collision detected
            self.transmitting_stations.append(station_id)
            return True
        
        # Start transmission
        self.transmitting_stations = [station_id]
        transmission_time = len(frame) * 0.0001  # 0.1ms per character
        self.busy_until = current_time + transmission_time
        
        # Simulate transmission completion
        time.sleep(transmission_time)
        self.transmitting_stations = []
        
        return False  # No collision

# Run simulation
medium = SharedMedium()
stations = [CSMAStation(i, medium) for i in range(5)]

# Generate traffic
for _ in range(50):
    station = random.choice(stations)
    station.generate_frame()

# Simulate transmission attempts
for _ in range(1000):
    station = random.choice(stations)
    station.attempt_transmission()
    time.sleep(0.001)  # 1ms time step

# Print statistics
for station in stations:
    print(f"Station {station.id}: {station.stats}")
```

Performance Analysis:
1. Measure collision rate vs load
2. Analyze backoff effectiveness  
3. Study fairness between stations
4. Compare with theoretical models
```

---

## 📖 Module 3 Summary

### **Key Concepts Mastered**
✓ Data Link Layer functions and frame structure
✓ Framing techniques (character, bit, length-based)
✓ Error detection methods (parity, checksum, CRC)
✓ Error correction codes (Hamming, Reed-Solomon)
✓ Flow control protocols (Stop-and-Wait, Go-Back-N, Selective Repeat)
✓ Multiple access protocols (ALOHA, CSMA, Token-based)

### **Practical Skills Developed**
✓ Ethernet frame analysis with Wireshark
✓ CRC calculation and implementation
✓ Hamming code encoding/decoding
✓ Protocol simulation and analysis
✓ Performance measurement and optimization
✓ Network troubleshooting at data link layer

### **Mathematical Concepts**
✓ CRC polynomial arithmetic
✓ Hamming distance calculations
✓ Protocol efficiency analysis
✓ Throughput and delay calculations
✓ Error probability computations
✓ Backoff algorithm analysis

### **Next Module Preview**
**Module 4: Network Layer**
- IP addressing and subnetting
- Routing algorithms and protocols
- Internet Protocol operations
- ICMP, ARP, and DHCP
- Network design principles

---

**🎯 Data Link Layer mastered! Ready to route packets? 🚀**