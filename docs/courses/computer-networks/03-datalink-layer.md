# Chapter 3: The Data Link Layer

## Learning Objectives

1. Describe the services provided by the data link layer to the network layer.
2. Explain and compare framing methods: character count, byte stuffing, and bit stuffing.
3. Compute error-detection codes including parity, checksum, and cyclic redundancy check.
4. Apply Hamming codes for single-bit error correction.
5. Analyze flow control mechanisms including stop-and-wait and sliding window protocols.

## 3.1 Data Link Layer Services

![Data Link Layer: Framing, Error Detection/Correction, Flow Control and ARQ](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/computer-networks/ch03-datalink.png)

The data link layer (Layer 2) provides reliable, efficient communication between two directly connected nodes. It accepts packets from the network layer and encapsulates them into frames for transmission across the physical link. The principal services are:

**Framing.** The data link layer divides the bit stream into discrete frames. The receiver must detect frame boundaries to extract each frame correctly.

**Error detection and correction.** Bits may be corrupted by electrical noise, crosstalk, or signal attenuation. The data link layer adds redundant bits to detect or correct errors.

**Flow control.** If a sender transmits frames faster than a receiver can process them, buffers overflow and frames are discarded. Flow control regulates transmission rate to match receiver capacity.

**Medium access control (Chapter 4).** On shared media, the data link layer coordinates frame transmission among multiple stations.

**Reliability.** Some data link protocols provide automatic repeat request (ARQ) — retransmission of lost or corrupted frames.

## 3.2 Framing

Framing solves the problem of locating the start and end of each frame within a continuous bit stream.

### 3.2.1 Character Count

The character-count method includes a length field in the frame header. The receiver reads the count and extracts that many bytes. This method is fragile because a single-bit error in the count field causes the receiver to lose synchronization permanently. The Bisync protocol (IBM, 1960s) used character count and was susceptible to this flaw.

### 3.2.2 Byte Stuffing

Byte stuffing uses flag bytes (0x7E) to mark frame boundaries. If the flag byte appears in the payload, the sender inserts an escape byte (0x7D) before it; the receiver removes the escape after detecting it. A flag-escape sequence (0x7D 0x7E) signals a literal flag in the data. PPP (Point-to-Point Protocol) uses byte stuffing. The overhead is variable and depends on payload content.

### 3.2.3 Bit Stuffing

Bit stuffing inserts a 0 bit after five consecutive 1 bits in the payload. A flag pattern — typically 01111110 — marks frame boundaries. The sender stuffs a 0 after every five consecutive 1s; the receiver unstuffs (removes) any 0 that follows five 1s. If a 0 is removed and the next bit is 1, the receiver knows to check for the flag (if the sixth bit is also 1, the next seven bits must form the flag). HDLC (High-Level Data Link Control) uses bit stuffing. The overhead is at most one bit per five data bits and is content-independent.

## 3.3 Error Detection and Correction

### 3.3.1 Parity

A single parity bit is appended to a data block such that the total number of 1 bits is even (even parity) or odd (odd parity). Parity detects any odd number of bit errors but misses any even number. Two-dimensional parity arranges data in a matrix and computes parity for each row and column, enabling detection and correction of single-bit errors.

### 3.3.2 Checksum

A checksum is computed by summing the data words (typically 16-bit) and taking the one's complement of the sum. The Internet checksum used in UDP, TCP, and IP works as follows: the sender divides the data into 16-bit words, sums them with one's complement arithmetic, complements the result, and stores it in the checksum field. The receiver performs the same computation on the received data and compares the result to the checksum field. A match indicates no detected error. The Internet checksum detects all errors that affect an odd number of bits and most even-bit errors, but not all.

### 3.3.3 Cyclic Redundancy Check

CRC treats data bits as a polynomial $D(x)$ of degree $n-1$, where $n$ is the number of data bits. The sender divides $D(x) \cdot x^k$ by a generator polynomial $G(x)$ of degree $k$ and appends the remainder as the CRC. The receiver divides the received polynomial by $G(x)$; a non-zero remainder indicates an error.

Common generator polynomials:

- CRC-16: $x^{16} + x^{15} + x^2 + 1$ (USB)
- CRC-32: $x^{32} + x^{26} + x^{23} + x^{22} + x^{16} + x^{12} + x^{11} + x^{10} + x^8 + x^7 + x^5 + x^4 + x^2 + x + 1$ (Ethernet)
- CRC-CCITT: $x^{16} + x^{12} + x^5 + 1$ (HDLC)

CRC-32 detects all single-bit errors, all double-bit errors (when $G(x)$ is primitive), any odd number of errors, any burst of length $\le 32$, and most longer bursts.

### 3.3.4 Hamming Codes

Hamming codes correct single-bit errors and detect double-bit errors with minimal redundancy. For data of length $m$ bits, the number of parity bits $r$ must satisfy $2^r \ge m + r + 1$.

Parity bits are placed at positions that are powers of two (1, 2, 4, 8, ...). Each parity bit covers a specific subset of bit positions: parity bit $p_i$ covers positions whose binary representation has bit $i$ set. For example, with $m = 4$ data bits and $r = 3$ parity bits:

- Position 1 (p1): covers bits 1, 3, 5, 7
- Position 2 (p2): covers bits 2, 3, 6, 7
- Position 4 (p4): covers bits 4, 5, 6, 7

The receiver recomputes the parity bits. The position of the failed parity bits, read as a binary number, gives the position of the erroneous bit. Flipping that bit corrects the error.

## 3.4 Automatic Repeat Request

ARQ protocols combine error detection with retransmission. The three basic ARQ schemes are:

**Stop-and-Wait ARQ.** The sender transmits one frame and waits for an ACK. A timeout triggers retransmission. Sequence numbers alternate between 0 and 1; duplicate detection uses the sequence number. Simple but inefficient on long-delay paths.

**Go-Back-N ARQ.** The sender transmits up to N frames without waiting. On timeout, all unacknowledged frames are retransmitted. The receiver discards out-of-order frames. The sender maintains a timer for the oldest unacknowledged frame.

**Selective Repeat ARQ.** The sender retransmits only lost frames. The receiver buffers out-of-order frames and acknowledges them individually. The sender and receiver windows must satisfy the sequence number constraint to avoid ambiguity.

## 3.5 Flow Control

### 3.4.1 Stop-and-Wait

Stop-and-wait flow control: the sender transmits one frame and waits for an acknowledgment (ACK) before sending the next. This protocol uses a 1-bit sequence number (0/1). The sender tags each frame with a sequence number; the receiver sends an ACK with the same number. If the sender does not receive the ACK within a timeout, it retransmits the frame.

The efficiency of stop-and-wait is limited by the bandwidth-delay product. If the propagation delay is $d_{prop}$, transmission time is $d_{trans}$, and the receiver processing time is negligible:

$$\text{Utilization} = \frac{d_{trans}}{d_{trans} + 2 \cdot d_{prop}}$$

For a 1 Gbps link with 50 ms round-trip time and 1500-byte frames, utilization is under 0.02%.

### 3.4.2 Sliding Window

The sliding window protocol allows the sender to transmit up to $W$ frames before receiving an acknowledgment. The sender maintains a lower edge (LAR — last acknowledgment received) and an upper edge (SWS — send window size). The receiver maintains a receive window (RWS).

**Go-Back-N.** The receiver discards out-of-order frames. When a frame is lost, the sender times out and retransmits all frames from the lost frame forward. This is simple to implement but wastes bandwidth when errors are frequent.

**Selective Repeat.** The receiver buffers out-of-order frames and acknowledges them individually. The sender retransmits only the lost frame. SWS and RWS must satisfy $SWS + RWS \le 2^k$, where $k$ is the number of sequence number bits, to avoid ambiguity between new and retransmitted frames.

Window size is commonly chosen to be at least the bandwidth-delay product in units of frames:

$$W = \frac{2 \cdot d_{prop} \cdot R}{L}$$

where $R$ is the link rate and $L$ is the frame size. This ensures the sender can continuously transmit, achieving 100% utilization.

### 3.5.1 Piggybacking

In full-duplex communication, acknowledgment information can be carried in the header of a data frame traveling in the reverse direction. This piggybacking reduces the number of frames sent. The receiver sets the ACK field in its outgoing data frame; if no data frame is ready, a separate ACK frame is sent. Piggybacking improves efficiency on links with bidirectional traffic but introduces complexity in timeout management.

## 3.6 HDLC

High-Level Data Link Control (HDLC) is a bit-oriented protocol used as the basis for many link-layer standards (PPP, SDLC, LAPD). HDLC supports three station types: primary (controls the link), secondary (follows primary), and combined (both roles). Modes: Normal Response Mode (NRM, primary-initiated), Asynchronous Balanced Mode (ABM, combined stations, point-to-point), and Asynchronous Response Mode (ARM, secondary-initiated).

The HDLC frame format:
| Flag | Address | Control | Information | FCS | Flag |
|------|---------|---------|-------------|-----|------|
| 8 b   | 8+ b    | 8/16 b   | variable    | 16 b | 8 b   |

The control field distinguishes three frame types: Information (I-frames carry data with sequence numbers), Supervisory (S-frames for ACK, NAK, RR, RNR), and Unnumbered (U-frames for link setup and disconnect).

## 3.7 PPP

Point-to-Point Protocol (PPP, RFC 1661) provides encapsulation, authentication, and link control over serial links. PPP uses byte stuffing with flag byte 0x7E. The Link Control Protocol (LCP) negotiates options (MTU, authentication protocol, magic numbers for loop detection). Authentication options: PAP (plaintext passwords, insecure) and CHAP (challenge-response with MD5). The Network Control Protocol (NCP) configures network-layer parameters (IPCP for IP address negotiation).

## Summary

The data link layer provides framing, error detection and correction, and flow control. Framing methods (character count, byte stuffing, bit stuffing) differ in complexity, overhead, and error recovery. CRC provides robust error detection with low computational cost; Hamming codes enable single-bit error correction. Flow control prevents receiver buffer overflow: stop-and-wait is simple but inefficient over high-delay paths; sliding window protocols achieve full link utilization when the window size matches the bandwidth-delay product.

## Exercises

### Review Questions

1. Why does the byte-stuffing overhead depend on payload content while bit-stuffing overhead is bounded?
2. A CRC generator polynomial $G(x)$ detects all single-bit errors if $G(x)$ has at least two terms. Why?
3. What is the minimum Hamming distance required to detect up to $d$ errors? To correct up to $c$ errors?
4. A sliding window protocol uses 3-bit sequence numbers. What is the maximum window size for Go-Back-N? For Selective Repeat?
5. Under what conditions does stop-and-wait achieve acceptable efficiency?

### Application Problems

6. Compute the CRC-3 for the data polynomial $x^6 + x^4 + x^2 + 1$ (binary 1010101) using generator polynomial $x^3 + x + 1$ (binary 1011).
7. A Go-Back-N protocol has a 4-bit sequence number, SWS = 7, and a link with 50 ms RTT and 10 Mbps rate. If frame size is 1000 bytes, what is the maximum throughput assuming no errors?
8. Design a 2D parity scheme for 8 bytes of data arranged in a $4 \times 16$ matrix. Show the resulting codeword. Demonstrate that a double-bit error in the same row is detected.

### Challenge Problem

9. **Analyze the performance of Selective Repeat under correlated errors.** Consider a link with 10 ms propagation delay each direction, 100 Mbps data rate, 1500-byte frames, and a 6-bit sequence number. Errors occur in bursts: each burst corrupts 3 consecutive frames, and bursts occur with probability 0.05 per frame. Compute the efficiency of Selective Repeat with SWS = 31 under this error model. Then propose a modification to improve efficiency by at least 20% and analyze whether your modification introduces any correctness issues with sequence number uniqueness.
