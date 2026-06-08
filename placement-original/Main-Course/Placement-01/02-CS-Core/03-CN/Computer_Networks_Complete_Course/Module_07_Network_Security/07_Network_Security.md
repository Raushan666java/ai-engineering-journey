# Module 7: Network Security

## Security Fundamentals

### CIA Triad
1. **Confidentiality**: Data privacy and access control
2. **Integrity**: Data accuracy and completeness
3. **Availability**: System accessibility when needed

### Security Threats
- **Malware**: Viruses, worms, trojans, ransomware
- **Social Engineering**: Phishing, pretexting, baiting
- **Network Attacks**: DoS, DDoS, man-in-the-middle
- **Physical Attacks**: Device theft, unauthorized access

## Cryptography Basics

### Symmetric Encryption
- **Same key** for encryption and decryption
- **Fast** but key distribution challenge
- **Examples**: AES, DES, 3DES

```
Plaintext → [Encryption Key] → Ciphertext
Ciphertext → [Same Key] → Plaintext
```

### Asymmetric Encryption
- **Key pair**: Public and private keys
- **Slower** but solves key distribution
- **Examples**: RSA, ECC, Diffie-Hellman

```
Plaintext → [Public Key] → Ciphertext → [Private Key] → Plaintext
```

### Hash Functions
- **One-way** mathematical function
- **Fixed-length** output regardless of input size
- **Examples**: MD5, SHA-1, SHA-256

```
Input Data → Hash Function → Fixed-Length Hash
```

## SSL/TLS Protocols

### SSL/TLS Handshake Process
1. **Client Hello**: Supported cipher suites
2. **Server Hello**: Selected cipher suite and certificate
3. **Certificate Verification**: Client validates server certificate
4. **Key Exchange**: Establish session keys
5. **Finished**: Secure communication begins

### TLS Versions
- **TLS 1.0**: Deprecated (security vulnerabilities)
- **TLS 1.1**: Deprecated (weak encryption)
- **TLS 1.2**: Widely used (secure)
- **TLS 1.3**: Latest (improved security and performance)

### Certificate Management
```bash
# Generate private key
openssl genrsa -out server.key 2048

# Generate certificate signing request
openssl req -new -key server.key -out server.csr

# Generate self-signed certificate
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
```

## Firewalls

### Types of Firewalls
1. **Packet Filtering**: Examines packet headers
2. **Stateful Inspection**: Tracks connection state
3. **Application Gateway**: Deep packet inspection
4. **Next-Generation**: Advanced threat protection

### Firewall Rules Example
```bash
# Allow HTTP traffic
iptables -A INPUT -p tcp --dport 80 -j ACCEPT

# Allow HTTPS traffic
iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Allow SSH from specific network
iptables -A INPUT -p tcp -s 192.168.1.0/24 --dport 22 -j ACCEPT

# Block all other traffic
iptables -A INPUT -j DROP
```

### Cisco ASA Firewall Configuration
```
# Configure inside interface
interface GigabitEthernet0/1
nameif inside
security-level 100
ip address 192.168.1.1 255.255.255.0

# Configure outside interface
interface GigabitEthernet0/0
nameif outside
security-level 0
ip address dhcp

# Allow inside to outside traffic
access-list INSIDE_IN extended permit ip 192.168.1.0 255.255.255.0 any
access-group INSIDE_IN in interface inside
```

## VPN (Virtual Private Network)

### VPN Types
1. **Site-to-Site**: Connects entire networks
2. **Remote Access**: Individual user connections
3. **Client-to-Site**: Remote users to corporate network

### VPN Protocols
- **IPSec**: Network layer security protocol
- **L2TP**: Layer 2 tunneling protocol
- **PPTP**: Point-to-point tunneling protocol
- **OpenVPN**: Open-source SSL/TLS VPN
- **WireGuard**: Modern, fast VPN protocol

### IPSec Configuration
```
# Phase 1 (IKE) Configuration
crypto isakmp policy 10
encryption aes 256
hash sha256
authentication pre-share
group 14
lifetime 86400

# Phase 2 (IPSec) Configuration
crypto ipsec transform-set MYSET esp-aes 256 esp-sha256-hmac
crypto map MYMAP 10 ipsec-isakmp
set peer 203.0.113.2
set transform-set MYSET
match address VPN_TRAFFIC
```

## Network Attacks and Defense

### Common Network Attacks

#### 1. Denial of Service (DoS)
- **SYN Flood**: Overwhelm with connection requests
- **UDP Flood**: Flood with UDP packets
- **Ping of Death**: Oversized ping packets

#### 2. Man-in-the-Middle (MITM)
- **ARP Spoofing**: Fake ARP responses
- **DNS Spoofing**: Redirect DNS queries
- **SSL Stripping**: Downgrade HTTPS to HTTP

#### 3. Password Attacks
- **Brute Force**: Try all combinations
- **Dictionary**: Use common passwords
- **Rainbow Tables**: Pre-computed hashes

### Defense Mechanisms

#### 1. Intrusion Detection System (IDS)
```bash
# Snort rule example
alert tcp any any -> 192.168.1.0/24 80 (msg:"HTTP GET Request"; content:"GET"; sid:1001;)
```

#### 2. Intrusion Prevention System (IPS)
- **Signature-based**: Known attack patterns
- **Anomaly-based**: Unusual behavior detection
- **Hybrid**: Combination of both approaches

#### 3. Network Segmentation
```
DMZ Network: 192.168.100.0/24 (Web servers)
Internal Network: 192.168.1.0/24 (User workstations)
Server Network: 192.168.10.0/24 (Database servers)
Management Network: 192.168.200.0/24 (Network devices)
```

## Wireless Security

### WiFi Security Protocols
1. **WEP**: Deprecated (easily cracked)
2. **WPA**: Better than WEP but vulnerable
3. **WPA2**: Strong security (AES encryption)
4. **WPA3**: Latest standard (enhanced security)

### WiFi Security Configuration
```
# WPA2-PSK Configuration
ssid MySecureNetwork
wpa_passphrase MyStrongPassword123!
wpa=2
wpa_key_mgmt=WPA-PSK
wpa_pairwise=CCMP
rsn_pairwise=CCMP
```

### Enterprise WiFi Security
- **802.1X Authentication**: Certificate-based
- **RADIUS Server**: Centralized authentication
- **EAP Methods**: EAP-TLS, PEAP, EAP-TTLS

## Security Best Practices

### Network Security Checklist
- [ ] **Strong Passwords**: Complex, unique passwords
- [ ] **Regular Updates**: Keep systems patched
- [ ] **Principle of Least Privilege**: Minimal access rights
- [ ] **Network Segmentation**: Isolate critical systems
- [ ] **Monitoring**: Log and monitor network activity
- [ ] **Backup**: Regular data backups
- [ ] **Incident Response**: Plan for security breaches
- [ ] **User Training**: Security awareness education

### Security Policies
1. **Acceptable Use Policy**: Define proper network usage
2. **Password Policy**: Password requirements and rotation
3. **Access Control Policy**: User access management
4. **Incident Response Policy**: Security breach procedures

## Practical Exercises

### Exercise 1: Firewall Configuration
Configure a firewall to:
- Allow web traffic (HTTP/HTTPS)
- Allow SSH from management network only
- Block all other inbound traffic
- Allow all outbound traffic

### Exercise 2: VPN Setup
Set up site-to-site VPN between two offices:
- Office A: 192.168.1.0/24
- Office B: 192.168.2.0/24
- Configure IPSec tunnel

### Exercise 3: Wireless Security
Configure secure wireless network:
- WPA2-Enterprise with RADIUS
- Certificate-based authentication
- Guest network isolation

## Lab Assignment
1. Design secure network architecture for small company
2. Implement firewall rules and VPN connectivity
3. Configure wireless security with multiple SSIDs
4. Document security policies and procedures

## Security Tools

### Network Security Tools
- **Nmap**: Network discovery and security auditing
- **Wireshark**: Network protocol analyzer
- **Metasploit**: Penetration testing framework
- **Nessus**: Vulnerability scanner
- **Burp Suite**: Web application security testing

### Command Examples
```bash
# Network scan with Nmap
nmap -sS -O 192.168.1.0/24

# Capture packets with tcpdump
tcpdump -i eth0 -w capture.pcap

# Check SSL certificate
openssl s_client -connect google.com:443

# Test firewall rules
telnet 192.168.1.1 80
```

## Quiz Questions
1. What are the three components of the CIA triad?
2. Explain the difference between symmetric and asymmetric encryption
3. What is the purpose of a digital certificate?
4. How does a stateful firewall differ from a packet filter?
5. What are the main differences between WPA2 and WPA3?

## Next Module
Module 8: Wireless Networks - WiFi, Bluetooth, and Cellular Technologies