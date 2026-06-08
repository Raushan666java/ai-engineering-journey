# Networking Commands Cheat Sheet

## Windows Commands

### Network Configuration
```cmd
# Display network configuration
ipconfig
ipconfig /all

# Release/Renew DHCP lease
ipconfig /release
ipconfig /renew

# Flush DNS cache
ipconfig /flushdns

# Display DNS cache
ipconfig /displaydns
```

### Connectivity Testing
```cmd
# Test connectivity
ping 8.8.8.8
ping -t google.com

# Trace route to destination
tracert google.com

# Test specific port
telnet google.com 80

# Network statistics
netstat -an
netstat -r
```

### Network Troubleshooting
```cmd
# ARP table
arp -a

# Route table
route print

# Network connections
netstat -an | findstr :80

# DNS lookup
nslookup google.com
```

## Linux Commands

### Network Configuration
```bash
# Display network interfaces
ifconfig
ip addr show

# Configure IP address
sudo ifconfig eth0 192.168.1.100 netmask 255.255.255.0
sudo ip addr add 192.168.1.100/24 dev eth0

# Enable/disable interface
sudo ifconfig eth0 up
sudo ifconfig eth0 down
```

### Connectivity Testing
```bash
# Test connectivity
ping -c 4 8.8.8.8

# Trace route
traceroute google.com

# Test port connectivity
telnet google.com 80
nc -zv google.com 80
```

### Network Analysis
```bash
# Network statistics
netstat -tuln
ss -tuln

# ARP table
arp -a
ip neigh show

# Route table
route -n
ip route show
```

## Cisco IOS Commands

### Basic Configuration
```cisco
# Enter privileged mode
enable

# Enter configuration mode
configure terminal

# Set hostname
hostname Router1

# Configure interface
interface fastethernet0/0
ip address 192.168.1.1 255.255.255.0
no shutdown
```

### Routing Configuration
```cisco
# Static route
ip route 192.168.2.0 255.255.255.0 192.168.1.2

# Default route
ip route 0.0.0.0 0.0.0.0 192.168.1.1

# Enable RIP
router rip
version 2
network 192.168.1.0
```

### Show Commands
```cisco
# Interface status
show interfaces
show ip interface brief

# Routing table
show ip route

# Running configuration
show running-config

# Version information
show version
```

## Network Troubleshooting Tools

### Wireshark Filters
```
# HTTP traffic only
http

# Traffic to/from specific IP
ip.addr == 192.168.1.1

# TCP traffic on port 80
tcp.port == 80

# DNS queries
dns
```

### Advanced Tools
```bash
# Network mapper
nmap -sS 192.168.1.0/24

# Bandwidth testing
iperf3 -s (server)
iperf3 -c server_ip (client)

# Network monitoring
tcpdump -i eth0 -w capture.pcap

# Port scanning
nmap -p 1-1000 192.168.1.1
```

## Subnetting Quick Reference

### Subnet Mask Table
```
/24 = 255.255.255.0   = 256 hosts
/25 = 255.255.255.128 = 128 hosts
/26 = 255.255.255.192 = 64 hosts
/27 = 255.255.255.224 = 32 hosts
/28 = 255.255.255.240 = 16 hosts
/29 = 255.255.255.248 = 8 hosts
/30 = 255.255.255.252 = 4 hosts
```

### Common Port Numbers
```
20/21  - FTP
22     - SSH
23     - Telnet
25     - SMTP
53     - DNS
67/68  - DHCP
80     - HTTP
110    - POP3
143    - IMAP
443    - HTTPS
993    - IMAPS
995    - POP3S
```