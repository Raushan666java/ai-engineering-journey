# Chapter 18: Modern Networking

## Learning Objectives

![Modern Networking](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/computer-networks/ch18-modern-networking.png)

1. Describe the QUIC transport protocol and its advantages over TCP.
2. Explain HTTP/3 architecture and its relationship to QUIC.
3. Analyze the 5G core network architecture using service-based interfaces.
4. Evaluate IoT networking protocols: MQTT, CoAP, and LoRaWAN.
5. Discuss emerging paradigms: edge computing, intent-based networking, and network automation.

## 18.1 QUIC

QUIC (Quick UDP Internet Connections, RFC 9000) is a transport protocol originally designed at Google and standardized by the IETF. QUIC runs over UDP and integrates TLS 1.3 at the transport layer.

### 18.1.1 Key Features

**Reduced connection establishment.** QUIC combines the cryptographic and transport handshakes. A new connection completes in 1 RTT (compared to TCP's 2 RTT for TLS). Resumed connections achieve 0 RTT: the client sends data immediately using cached parameters from a previous session.

**Multiplexing without head-of-line blocking.** QUIC supports multiple streams within a single connection. Unlike TCP where a lost segment blocks all streams (HTTP/2 head-of-line blocking), QUIC streams are independent. Loss on one stream does not delay delivery on others.

**Improved loss recovery.** QUIC uses monotonic packet numbers (not retransmission ambiguity) and more precise RTT measurement. Packet numbers increase monotonically; retransmitted packets carry new numbers, eliminating the ambiguity of TCP's retransmission detection. QUIC uses a more accurate loss detection mechanism based on packet thresholds rather than duplicate ACK counting.

**Connection migration.** A QUIC connection is identified by a 64-bit Connection ID, not by the (IP, port) tuple. When the client's IP address changes (e.g., switching from WiFi to cellular), the connection survives. The client sends packets from the new address using the same Connection ID; the server continues the connection without rehandshaking.

**Built-in encryption.** QUIC encrypts almost all transport headers (packet numbers, stream data, ACKs). Only a few fields are visible to intermediaries: source/destination Connection ID, version, and some flags.

### 18.1.2 QUIC Packet Format

```
| Connection ID (0â€“20 B) | Version (4 B) | Packet Number (1â€“4 B) | Encrypted Payload |
```

Long-header packets establish connections; short-header packets carry data. The connection ID may be zero-length for single-path connections to reduce overhead.

### 18.1.3 QUIC Streams

A QUIC connection carries multiple streams, each identified by a 62-bit stream ID. Stream types:
- Client-initiated bidirectional (lowest bit 00)
- Server-initiated bidirectional (lowest bit 01)
- Client-initiated unidirectional (lowest bit 10)
- Server-initiated unidirectional (lowest bit 11)

Streams provide reliable, in-order byte delivery within the stream but are independent across streams. Flow control operates at both the connection level (total bytes across all streams) and stream level.

## 18.2 HTTP/3

HTTP/3 (RFC 9114) maps HTTP semantics onto QUIC. It replaces HTTP/2's TCP-based framing with QUIC streams.

**QPACK.** HTTP/3 uses QPACK header compression (RFC 9204), which adapts HPACK for QUIC's out-of-order delivery. QPACK uses separate encoder and decoder streams to synchronize header table state without blocking.

**Stream mapping.** Each HTTP request-response pair uses one QUIC stream. Server push uses a unidirectional stream. Control messages (SETTINGS, GOAWAY, CANCEL_PUSH) use a dedicated unidirectional stream.

**0-RTT replay protection.** HTTP/3 over QUIC 0-RTT is vulnerable to replay attacks. Servers must implement replay detection (e.g., single-use tokens, timestamp validation).

## 18.3 5G Core Network Architecture

The 5G core (5GC, 3GPP Release 15/16) uses a Service-Based Architecture (SBA). Network functions (NFs) communicate via HTTP/2.

**Key network functions:**

- **AMF (Access and Mobility Management Function):** connection management, mobility management, access authentication.
- **SMF (Session Management Function):** session establishment, IP address allocation, traffic steering.
- **UPF (User Plane Function):** packet routing and forwarding, QoS enforcement, traffic measurement.
- **PCF (Policy Control Function):** policy framework, network slicing decisions.
- **NRF (Network Repository Function):** NF service discovery and registration.
- **UDM (Unified Data Management):** subscription data, authentication credentials.
- **AUSF (Authentication Server Function):** authentication and key agreement.
- **NSSF (Network Slice Selection Function):** selects the network slice instance.

**Network slicing.** Each slice is an end-to-end logical network optimized for specific services: eMBB (enhanced mobile broadband), uRLLC (ultra-reliable low-latency), mMTC (massive machine-type). Slices share physical infrastructure but have independent QoS, routing, and management.

**Multi-access Edge Computing (MEC).** UPF and application servers are deployed at the network edge (near the base station). This enables sub-10 ms latency for applications such as autonomous driving, industrial automation, and augmented reality.

## 18.4 IoT Networking

The Internet of Things (IoT) connects billions of constrained devices â€” sensors, actuators, and controllers â€” with limited power, memory, and processing capability.

### 18.4.1 MQTT

MQTT (Message Queuing Telemetry Transport, OASIS standard) is a publish-subscribe protocol over TCP. The MQTT broker mediates between publishers and subscribers.

**QoS levels:**
- QoS 0 (At most once): fire and forget. No acknowledgment.
- QoS 1 (At least once): PUBLISH sent until PUBACK received; may duplicate.
- QoS 2 (Exactly once): four-way handshake (PUBLISH â†’ PUBREC â†’ PUBREL â†’ PUBCOMP) for exactly-once delivery.

**Last Will and Testament (LWT).** A client registers a will message during connection. If the client disconnects unexpectedly, the broker publishes the will message to specified subscribers.

**MQTT 5.0** adds user properties, session expiry, and enhanced error codes.

### 18.4.2 CoAP

CoAP (Constrained Application Protocol, RFC 7252) provides RESTful communication over UDP for constrained devices. CoAP uses the same request-response model as HTTP with GET, POST, PUT, DELETE methods.

**Message types:**
- Confirmable (CON): requires acknowledgment; retransmitted on timeout.
- Non-confirmable (NON): no acknowledgment; suitable for sensor readings.
- Acknowledgement (ACK): confirms receipt of a CON message.
- Reset (RST): indicates the message was received but cannot be processed.

**Observation.** A client can "observe" a resource; the server sends updates when the resource changes, reducing polling overhead.

**Block-wise transfer.** Large payloads are fragmented into blocks using Block1 (request) and Block2 (response) options.

### 18.4.3 LoRaWAN

LoRaWAN provides long-range, low-power wireless connectivity for IoT devices. It operates in unlicensed sub-GHz bands (868 MHz EU, 915 MHz US).

**Architecture:** End devices communicate with gateways via LoRa radio; gateways forward packets to a network server over IP. The network server handles deduplication, acknowledgment, and application data routing.

**Device classes:**
- Class A: bidirectional. Device transmits; two receive windows follow. Lowest power.
- Class B: scheduled receive slots for server-initiated messages.
- Class C: continuous receive. Highest power, lowest latency.

**Adaptive Data Rate (ADR).** The network server adjusts spreading factor, coding rate, and transmit power based on signal quality, optimizing throughput and battery life.

## 18.5 Edge Computing

Edge computing processes data near its source rather than in a centralized data center. This reduces latency, bandwidth, and privacy concerns.

**Edge tiers:**
- **Device edge:** computation on the endpoint (IoT sensor, smartphone).
- **Local edge:** local gateway or micro data center (within 1â€“5 ms).
- **Regional edge:** small data center (5â€“20 ms).
- **Central cloud:** full data center (20â€“100 ms).

**Use cases:** industrial automation (sub-millisecond control loops), autonomous vehicles (real-time obstacle detection), augmented reality (sub-20 ms pose tracking), video analytics (local processing, cloud aggregation).

**Edge-native protocols:** WebAssembly on edge nodes, eBPF-based service meshes, distributed ledgers for device coordination.

## 18.6 Intent-Based Networking

Intent-Based Networking (IBN) abstracts the network configuration, allowing operators to declare what they want rather than how to achieve it.

**IBN lifecycle:**
1. **Intent translation:** the operator declares intent (e.g., "ensure low-latency path for video traffic").
2. **Policy generation:** the IBN system translates the intent into device-level policies.
3. **Deployment:** configurations are pushed to network devices.
4. **Verification:** the system validates that the deployed configuration satisfies the original intent (often using formal verification methods).
5. **Correction:** if the network state deviates from the intent, self-healing mechanisms restore compliance.

**Formal verification tools** (e.g., Batfish, Minesweeper) model the network control plane and verify properties: no forwarding loops, reachability between specified endpoints, isolation between tenants, and compliance with security policy.

## 18.7 Network Automation

Network automation replaces manual configuration with programmatic management.

**Infrastructure as Code (IaC).** Network configuration is managed as version-controlled code. Tools:

- **Ansible:** agentless automation using SSH. Playbooks define configuration state. Networking modules support IOS, JunOS, NX-OS, and eAPI.
- **Terraform:** declarative resource management. Providers for AWS, Azure, GCP, and network devices.
- **SaltStack:** event-driven automation with remote execution.
- **NETCONF/YANG:** standardized data modeling (YANG) and protocol (NETCONF over SSH) for device configuration.

**CI/CD for networking.** Network changes are tested in virtualized environments (containerlab, EVE-NG) before production deployment. Automated tests verify reachability, latency, and policy compliance.

**Closed-loop automation.** Monitoring systems detect issues and trigger automated remediation. Examples: auto-scaling load balancer capacity, rerouting traffic around congested links, restarting failed services.

## ðŸ’¡ Pro Tips

- **QUIC 0-RTT is powerful but risky**: 0-RTT data is vulnerable to replay attacks. Use single-use tokens, timestamp validation, or idempotent semantics for 0-RTT requests. Never allow 0-RTT for non-idempotent operations like payment submissions.
- **MQTT QoS 2 is expensive**: Exactly-once delivery uses a 4-way handshake per message. For sensor telemetry where occasional duplicates are acceptable, use QoS 0 (fire-and-forget) or QoS 1 (at-least-once with dedup).
- **LoRaWAN ADR is essential at scale**: Without Adaptive Data Rate, all devices use the most robust (slowest) spreading factor, limiting network capacity. Enable ADR for stationary devices and optimize SF allocation for gateways.
- **Intent-based networking â‰  IaC**: IBN translates business intent into policies and verifies them. IaC (Terraform, Ansible) automates device configuration. They complement each other: IBN generates the design; IaC deploys it.

## One-Sentence Takeaways

- QUIC combines transport + TLS handshake (1 RTT new, 0 RTT resumed) with independent multiplexed streams.
- HTTP/3 maps HTTP semantics onto QUIC streams, eliminating TCP head-of-line blocking.
- 5G core uses a service-based architecture with independent network functions communicating via HTTP/2.
- MQTT uses publish-subscribe over TCP; CoAP uses REST-like request-response over UDP.
- LoRaWAN provides long-range low-power IoT connectivity via unlicensed sub-GHz radio.
- Edge computing processes data near the source, reducing latency and bandwidth consumption.

## Concept Comparison Table

| Protocol | Transport | Model | QoS Levels | Power | Best For |
|----------|-----------|-------|------------|-------|----------|
| MQTT | TCP | Pub-sub | 0, 1, 2 | Medium | Sensors, actuators, messaging |
| CoAP | UDP | Request-response (REST) | CON, NON | Low | Constrained devices |
| LoRaWAN | LoRa radio | Star (GW â†’ NS) | Confirmed/Unconfirmed | Very low | Long range, sparse data |
| HTTP/3 | QUIC (UDP) | Request-response | â€” | High | Web browsing |
| gRPC | HTTP/2 (TCP) | RPC + streaming | â€” | High | Microservices |

## Quick Reference: IoT Protocol Comparison

| Feature | MQTT | CoAP | LoRaWAN | HTTP/3 |
|---------|------|------|---------|--------|
| Transport | TCP | UDP | LoRa PHY | QUIC (UDP) |
| Range | Network-dependent | Network-dependent | 5â€“15 km | Network-dependent |
| Power | Moderate | Low | Ultra-low | High |
| Data rate | Unlimited | Unlimited | 0.3â€“50 kbps | Unlimited |
| Encryption | TLS | DTLS | AES-128 | Built-in (TLS 1.3) |
| Standard | OASIS | IETF | LoRa Alliance | IETF |
| Use case | Sensor data | Smart home, constrained | Agriculture, metering | Web |

## Cross-Application Matrix

| Domain | Preferred Protocol | Why |
|--------|-------------------|-----|
| Smart agriculture (soil sensors) | LoRaWAN | Long range (15 km), low power, sparse data |
| Home automation (lights, locks) | CoAP over Thread | Low power, low latency, mesh |
| Industrial sensor telemetry | MQTT QoS 1 | Reliable pub-sub with TCP |
| Video streaming | HTTP/3 over QUIC | Low latency, loss resilience |
| Auto-pilot data (5G) | 5G uRLLC slice | 1 ms latency, 99.999% reliability |
| Edge ML inference | HTTP/2 gRPC streaming | Binary protobuf, low overhead |

## Chapter Quiz

1. **How many RTTs does a new QUIC connection require?**
   - a) 0
   - b) 1 âœ“
   - c) 2
   - d) 3

2. **What problem does QUIC solve that TCP cannot?**
   - a) Encryption
   - b) Head-of-line blocking across streams âœ“
   - c) Congestion control
   - d) Flow control

3. **Which MQTT QoS level uses a 4-way handshake?**
   - a) QoS 0
   - b) QoS 1
   - c) QoS 2 âœ“
   - d) All of the above

4. **Which 5G core function handles session management?**
   - a) AMF
   - b) SMF âœ“
   - c) UPF
   - d) PCF

5. **LoRaWAN Class A devices:**
   - a) Continuously listen
   - b) Transmit then open two receive windows âœ“
   - c) Receive scheduled slots
   - d) Use mesh routing

**Answers:** 1-b, 2-b, 3-c, 4-b, 5-b

## Summary

QUIC provides reduced latency, multiplexed streams without head-of-line blocking, connection migration, and built-in encryption. HTTP/3 maps HTTP onto QUIC, eliminating TCP-level blocking. 5G core uses a service-based architecture with network slicing and edge computing. IoT protocols (MQTT, CoAP, LoRaWAN) address the constraints of low-power devices. Edge computing reduces latency for real-time applications. Intent-based networking automates policy translation and verification. Network automation through IaC and CI/CD reduces operational errors.

## Exercises

### Review Questions

1. How does QUIC avoid head-of-line blocking that affects HTTP/2 over TCP?
2. Why is QUIC connection migration useful for mobile clients?
3. What is the difference between eMBB, uRLLC, and mMTC in 5G?
4. When should MQTT be chosen over CoAP, and vice versa?
5. What is the IBN lifecycle, and how does formal verification ensure intent compliance?

### Application Problems

6. A mobile app connects to a server using QUIC. The app switches from WiFi to 5G. Explain the sequence of packets exchanged during connection migration. Which fields remain constant? Which change?
7. A factory deploys 10,000 sensors using LoRaWAN. Each sensor transmits a 20-byte reading every 10 minutes. The LoRaWAN duty cycle is 1% in the 868 MHz band. Compute: (a) the air time per transmission at SF12 (spreading factor 12), (b) the maximum number of sensors a single gateway can support, and (c) the number of gateways required for 10,000 sensors.
8. An e-commerce application uses HTTP/3. The user's connection has 2% packet loss. Compare the page load time for a page with 100 resources (images, scripts, stylesheets) under HTTP/2 over TCP and HTTP/3 over QUIC. Assume the loss events are random and each resource is 50 KB. State all assumptions.

### Challenge Problem

9. **Design a next-generation IoT networking stack.** Consider 100 million devices of various types: sensors (10 bytes per hour), actuators (command-response, 100 ms latency), and video cameras (1 Mbps continuous). The devices are distributed globally, many with intermittent connectivity. Design a protocol stack that: (a) supports device-to-device communication without cloud intermediation, (b) provides end-to-end encryption with forward secrecy, (c) handles intermittent connectivity through store-and-forward, (d) achieves at least 90% energy efficiency relative to an ideal MAC layer, and (e) supports over-the-air firmware updates to 100,000 devices simultaneously. Specify the physical layer (frequency, modulation), MAC protocol, network layer addressing, transport protocol, and application protocol. Justify each design decision and compute the expected throughput, latency, and power consumption for each device type.
