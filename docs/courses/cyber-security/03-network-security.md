# Network Security

## Learning Objectives

After completing this chapter, students will be able to differentiate firewall architectures and select appropriate types for network segments, configure intrusion detection and prevention systems, establish site-to-site and remote-access VPNs, design network segmentation schemes using VLANs and DMZs, implement network access control with 802.1X, secure wireless networks with enterprise-grade authentication, deploy network monitoring tools, and design honeypot-based deception systems.

## Theory

### Firewalls

Packet-filtering firewalls inspect packet headers against rules based on source and destination IP addresses, ports, and protocols at the network layer. They are fast but lack application-layer awareness. Stateful firewalls maintain connection state tables, allowing return traffic for established connections while blocking unsolicited packets. Application gateways (proxies) terminate and re-establish connections, inspecting application-layer payload. Next-Generation Firewalls (NGFWs) integrate intrusion prevention, TLS inspection, identity awareness, and application identification into a single platform.

### Intrusion Detection and Prevention

Intrusion Detection Systems (IDS) monitor network traffic and generate alerts without blocking. Intrusion Prevention Systems (IPS) are inline and can drop malicious traffic. Signature-based detection matches traffic against known attack patterns, producing few false positives but missing novel attacks. Anomaly-based detection establishes a baseline of normal behaviour and flags deviations, detecting unknown attacks but generating more false positives. Snort is an open-source IDS/IPS using rule-based detection. Suricata is a multi-threaded successor supporting HTTP, TLS, and file inspection.

### Virtual Private Networks

VPNs create encrypted tunnels over untrusted networks. IPSec operates at the network layer in transport mode (protecting payload only) or tunnel mode (encapsulating entire packets). IKEv2 handles key exchange. SSL/TLS VPNs operate at the application layer, accessible through a web browser without dedicated client software. WireGuard is a modern VPN protocol using state-of-the-art cryptography (Curve25519, ChaCha20, Poly1305, BLAKE2s) with a minimal codebase of approximately 4,000 lines.

### Network Segmentation

Segmentation limits lateral movement by isolating network zones. Virtual LANs (VLANs) segment broadcast domains logically, with inter-VLAN routing controlled by a firewall. Demilitarised Zones (DMZs) host public-facing servers with strict access controls from both internal and external networks. Micro-segmentation extends segmentation to the workload level, often implemented through software-defined networking.

### Network Access Control

NAC ensures that only compliant devices gain network access. 802.1X is a port-based authentication standard. The supplicant (client) authenticates to an authenticator (switch or wireless access point), which forwards credentials to an authentication server (RADIUS). Upon successful authentication, the port is opened, and the device is placed on the appropriate VLAN. MAB (MAC Authentication Bypass) provides fallback for devices that do not support 802.1X.

### Port Security and MAC Filtering

Port security limits the number of MAC addresses per switch port, preventing CAM table overflow attacks and rogue device connections. Violations can be configured to shut down the port, restrict traffic, or generate an alert. Static MAC filtering is trivial to bypass through MAC spoofing and provides minimal security in isolation.

### Wireless Security

WPA3 replaces WPA2, replacing the Pre-Shared Key (PSK) model with Simultaneous Authentication of Equals (SAE), which provides forward secrecy and resists offline dictionary attacks. Enterprise deployments use 802.1X with EAP methods (PEAP, EAP-TLS, EAP-TTLS) for per-user authentication. The RADIUS server centralises authentication and can enforce policies such as device compliance checks and VLAN assignment.

### Network Monitoring

Monitoring provides visibility for incident detection and capacity planning. SNMP (Simple Network Management Protocol) collects device metrics. NetFlow, sFlow, and IPFIX provide flow-level traffic analysis. PCAP-based analysis with tools such as tcpdump and Wireshark enables deep packet inspection. Zeek (formerly Bro) is a network analysis framework that generates connection, protocol, and file logs for threat detection.

### Honeypots

Honeypots are decoy systems designed to attract attackers, providing early warning and intelligence on attacker techniques. Low-interaction honeypots emulate services with limited functionality. High-interaction honeypots run full operating systems and applications, capturing detailed attacker activity. Honeynets are networks of honeypots. Cowrie is a medium-interaction SSH and Telnet honeypot. T-Pot is a platform that bundles multiple honeypot types.

## Examples

### Firewall Rule Design

A perimeter firewall should deny all inbound traffic by default, permitting only necessary services. Example rules: permit HTTP/HTTPS to web server (10.0.1.10:80/443), permit SMTP to mail server (10.0.1.20:25), permit DNS queries to DNS server (10.0.1.30:53), deny all other inbound traffic. Outbound traffic may be restricted to prevent data exfiltration and C2 communication.

### Snort Rule Syntax

A Snort rule detecting SQL injection attempts: `alert tcp $EXTERNAL_NET any -> $HTTP_SERVERS $HTTP_PORTS (msg:"SQL Injection - UNION SELECT"; content:"UNION"; nocase; content:"SELECT"; nocase; distance:1; within:10; sid:1000001; rev:1;)`. This rule alerts when UNION and SELECT appear in proximity within HTTP traffic to web servers.

### WireGuard Configuration

WireGuard configuration consists of a simple INI-style file. Interface section contains the private key and listening port. Peer section contains the public key, allowed IPs (tunnel subnets), and endpoint (public IP and port). Key exchange occurs through out-of-band sharing or dynamic QR codes.

### VLAN Segmentation Example

A typical segmented network includes VLAN 10 (management, 10.0.10.0/24), VLAN 20 (servers, 10.0.20.0/24), VLAN 30 (user workstations, 10.0.30.0/24), VLAN 40 (DMZ, 10.0.40.0/24), and VLAN 50 (guest wireless, 10.0.50.0/24). Inter-VLAN routing policies permit traffic from VLAN 30 to VLAN 20 on ports 80/443, allow DMZ to internet, and block VLAN 50 from all internal subnets.

## Summary

Network security controls form the perimeter defence layer of an organisation. Firewalls filter traffic, IDS/IPS detect and prevent attacks, VPNs secure remote access, segmentation limits breach propagation, NAC validates device posture, and wireless security extends controls to radio-frequency environments. Monitoring and honeypots provide visibility and deception. These controls must be layered, consistently configured, and regularly audited to remain effective.

## Exercises

### Review Questions

1. Compare packet filtering, stateful inspection, and application-level gateway firewalls. When is each appropriate?
2. Explain the differences between signature-based and anomaly-based intrusion detection. Why do many organisations use both?
3. Describe the 802.1X authentication process. What roles do the supplicant, authenticator, and authentication server play?
4. How does WPA3 SAE improve upon WPA2 PSK? What attack does it specifically prevent?
5. What information can a honeypot capture that a firewall or IDS cannot?

### Application Problems

1. Using VirtualBox, create a network with three VMs. Configure iptables on one VM as a stateful firewall. Verify connection tracking, and demonstrate that unsolicited inbound packets are dropped.
2. Install Snort on a Linux machine. Write a custom rule detecting SYN flood attempts. Test by generating a SYN flood with hping3 and verify the alert.
3. Configure a site-to-site WireGuard VPN between two Linux VMs. Verify that traffic between two private subnets is encrypted. Capture traffic with tcpdump and confirm the payload is not readable.

### Challenge Problem

Design a complete network architecture for a small enterprise with 200 employees, a public web application, remote worker access, and PCI-DSS compliance requirements. Specify firewall placement and rule sets, VLAN layout, IDS/IPS deployment, VPN configuration for remote access and site-to-site, wireless security architecture, NAC implementation, and monitoring strategy. Defend each design decision with reference to security principles from Chapter 1.
