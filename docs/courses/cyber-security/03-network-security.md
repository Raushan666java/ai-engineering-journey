# Chapter 3: Network Security

---

## Learning Objectives

- Identify common security threats at different layers of the OSI model.
- Compare various firewall architectures, including packet filtering and stateful inspection.
- Explain the functionality and differences between Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS).
- Understand the mechanisms of Virtual Private Networks (VPNs) and secure tunneling protocols.
- Describe the principles of wireless security and common vulnerabilities in Wi-Fi networks.

---

## Theory

### The OSI Model and Security
Security must be addressed at multiple layers of the Open Systems Interconnection (OSI) model:
- **Layer 2 (Data Link):** MAC flooding, ARP spoofing, VLAN hopping.
- **Layer 3 (Network):** IP spoofing, ICMP attacks (Ping of Death), routing protocol attacks.
- **Layer 4 (Transport):** SYN flooding (TCP), port scanning.
- **Layer 7 (Application):** HTTP attacks, DNS poisoning, SMTP spoofing.

### Firewalls
A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on an organization's previously established security policies.
- **Packet Filtering:** Examines individual packets in isolation based on IP addresses and port numbers (stateless).
- **Stateful Inspection:** Tracks the state of active connections and makes decisions based on the context of the entire session.
- **Next-Generation Firewalls (NGFW):** Combines traditional firewalling with additional features like deep packet inspection (DPI), application-level filtering, and encrypted traffic analysis.

### IDS and IPS
Systems designed to detect and respond to malicious activity:
- **Intrusion Detection System (IDS):** A passive system that monitors network traffic or host activity for signs of unauthorized access or policy violations. It generates alerts but does not block traffic.
- **Intrusion Prevention System (IPS):** An active system that sits in-line with network traffic. It can automatically block or drop traffic identified as malicious.
- **Detection Methods:**
    - **Signature-Based:** Matches traffic against a database of known attack patterns.
    - **Anomaly-Based:** Establishes a baseline of "normal" behavior and flags significant deviations.

### Virtual Private Networks (VPNs)
VPNs create a secure, encrypted "tunnel" over an untrusted network (like the internet).
- **Encryption:** Ensures confidentiality of the data in transit.
- **Authentication:** Verifies the identity of the remote user or site.
- **Protocols:**
    - **IPsec (Internet Protocol Security):** Operates at Layer 3; commonly used for site-to-site VPNs.
    - **SSL/TLS (OpenVPN, WireGuard):** Operates at higher layers; flexible for remote access.

### Wireless Security
Wi-Fi networks are inherently vulnerable because signals travel through open space.
- **WPA2 (Wi-Fi Protected Access 2):** Uses CCMP/AES for encryption. Vulnerable to KRACK attacks.
- **WPA3:** Improves security with SAE (Simultaneous Authentication of Equals) to protect against offline brute-force attacks.
- **Common Threats:** Rogue access points, evil twin attacks, packet sniffing.

---

## Examples

### Example 1: Configuring a Simple Packet Filter (iptables)
Blocking all incoming SSH traffic from a specific IP address on a Linux system:
```bash
# Append a rule to the INPUT chain to drop TCP traffic on port 22 from 192.168.1.50
sudo iptables -A INPUT -p tcp -s 192.168.1.50 --dport 22 -j DROP

# List current rules
sudo iptables -L -v
```
*Demonstrates Layer 3/4 filtering based on source IP and destination port.*

### Example 2: Analyzing a SYN Flood Attack
Using `tcpdump` to observe a flood of TCP SYN packets without corresponding ACKs:
```bash
# Capture 100 packets on interface eth0, looking for TCP SYN flags
sudo tcpdump -i eth0 "tcp[tcpflags] & (tcp-syn) != 0" -c 100
```
*Expected Output:* A high volume of SYN packets from various (often spoofed) source IPs directed at a single target port in a very short duration.
*Demonstrates a Layer 4 Denial of Service attack.*

---

## Summary

- Network security requires a multi-layered approach corresponding to the OSI model.
- Firewalls act as the first line of defense, with stateful inspection providing more security than simple packet filtering.
- IDS/IPS systems provide visibility and automated response to network threats.
- VPNs are essential for securing remote access and interconnecting sites over public infrastructure.
- Wireless security must account for the broadcast nature of radio signals and use strong encryption like WPA3.

---

## Exercises

### Review Questions
1. At which OSI layer does an IPsec VPN primarily operate?
2. Explain the difference between signature-based and anomaly-based intrusion detection.
3. Why is stateful inspection more secure than stateless packet filtering?
4. What is an "Evil Twin" attack in the context of wireless security?

### Application Problems
1. Design a firewall rule set for a small company that allows internal users to browse the web (HTTP/HTTPS) and receive email (IMAP/SMTP), but blocks all incoming traffic from the internet to the internal network.
2. An organization is experiencing a sudden spike in traffic that looks like normal web requests but is coming from thousands of different IP addresses. Is a signature-based IDS likely to catch this? Why or why not?
3. What are the security implications of using a public, unencrypted Wi-Fi hotspot for banking? List at least three specific risks.

### Challenge Problem
1. Research the "DNS Cache Poisoning" (Kaminsky) attack. Explain how it works at the network protocol level and why it was so significant. Propose a modern protocol-level solution (e.g., DNSSEC) and explain how it mitigates the threat.
