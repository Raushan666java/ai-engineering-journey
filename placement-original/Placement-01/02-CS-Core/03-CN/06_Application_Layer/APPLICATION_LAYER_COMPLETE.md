# Module 6: Application Layer - Complete Guide
## 🌐 Network Services and Applications

---

## 📚 Chapter 1: Application Layer Overview

### **1.1 Application Layer Functions**
```
Primary Functions:
✓ Network process to application
✓ User interface to network services
✓ Data representation and encryption
✓ Session management
✓ Application-specific protocols

Services Provided:
✓ File transfer and access
✓ Electronic mail
✓ Web browsing
✓ Remote login
✓ Directory services
✓ Network management
```

### **1.2 Client-Server vs Peer-to-Peer**
```
Client-Server Architecture:
✓ Centralized server provides services
✓ Multiple clients request services
✓ Server always on and available
✓ Clients connect when needed
✓ Examples: Web, email, DNS

Advantages:
- Centralized control and management
- Better security and authentication
- Consistent service availability
- Easier maintenance and updates

Disadvantages:
- Single point of failure
- Scalability limitations
- Higher infrastructure costs

Peer-to-Peer (P2P) Architecture:
✓ No dedicated servers
✓ Peers act as both clients and servers
✓ Direct communication between peers
✓ Distributed resource sharing
✓ Examples: BitTorrent, Skype

Advantages:
- High scalability
- No single point of failure
- Lower infrastructure costs
- Better resource utilization

Disadvantages:
- Security challenges
- Difficult to manage
- Inconsistent availability
- Complex protocols
```

---

## 🌐 Chapter 2: World Wide Web (HTTP/HTTPS)

### **2.1 HTTP Protocol Overview**
```
HTTP Characteristics:
✓ Stateless protocol
✓ Request-response model
✓ Text-based protocol
✓ Uses TCP port 80
✓ Application layer protocol

HTTP Versions:
- HTTP/0.9 (1991): Simple GET requests
- HTTP/1.0 (1996): Headers, status codes, methods
- HTTP/1.1 (1997): Persistent connections, chunked encoding
- HTTP/2 (2015): Binary protocol, multiplexing, server push
- HTTP/3 (2020): QUIC transport, improved performance
```

### **2.2 HTTP Request Format**
```
HTTP Request Structure:
┌─────────────────────────────────────┐
│ Request Line                        │
├─────────────────────────────────────┤
│ Header Fields                       │
├─────────────────────────────────────┤
│ Empty Line                          │
├─────────────────────────────────────┤
│ Message Body (optional)             │
└─────────────────────────────────────┘

Request Line Format:
Method SP Request-URI SP HTTP-Version CRLF

Example HTTP Request:
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Accept: text/html,application/xhtml+xml
Accept-Language: en-US,en;q=0.9
Accept-Encoding: gzip, deflate
Connection: keep-alive

HTTP Methods:
GET: Retrieve resource
POST: Submit data to server
PUT: Update/create resource
DELETE: Remove resource
HEAD: Get headers only
OPTIONS: Get allowed methods
PATCH: Partial resource update
TRACE: Diagnostic trace
CONNECT: Establish tunnel (for HTTPS proxy)
```

### **2.3 HTTP Response Format**
```
HTTP Response Structure:
┌─────────────────────────────────────┐
│ Status Line                         │
├─────────────────────────────────────┤
│ Header Fields                       │
├─────────────────────────────────────┤
│ Empty Line                          │
├─────────────────────────────────────┤
│ Message Body                        │
└─────────────────────────────────────┘

Status Line Format:
HTTP-Version SP Status-Code SP Reason-Phrase CRLF

Example HTTP Response:
HTTP/1.1 200 OK
Date: Mon, 23 May 2022 22:38:34 GMT
Server: Apache/2.4.41 (Ubuntu)
Content-Type: text/html; charset=UTF-8
Content-Length: 1234
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
Accept-Ranges: bytes
Connection: keep-alive

<!DOCTYPE html>
<html>
<head><title>Example</title></head>
<body><h1>Hello World!</h1></body>
</html>

Status Code Categories:
1xx: Informational (100 Continue, 101 Switching Protocols)
2xx: Success (200 OK, 201 Created, 204 No Content)
3xx: Redirection (301 Moved Permanently, 302 Found, 304 Not Modified)
4xx: Client Error (400 Bad Request, 401 Unauthorized, 404 Not Found)
5xx: Server Error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)
```

### **2.4 HTTPS and Security**
```
HTTPS (HTTP Secure):
✓ HTTP over TLS/SSL
✓ Uses TCP port 443
✓ Provides encryption, authentication, integrity
✓ Certificate-based trust model

TLS Handshake Process:
1. Client Hello: Supported cipher suites, random number
2. Server Hello: Selected cipher suite, certificate, random number
3. Key Exchange: Client generates pre-master secret
4. Finished: Both sides verify handshake integrity
5. Application Data: Encrypted HTTP communication

Certificate Validation:
✓ Certificate Authority (CA) signature verification
✓ Domain name matching
✓ Certificate expiration check
✓ Certificate revocation status

Security Benefits:
✓ Data confidentiality (encryption)
✓ Data integrity (MAC/HMAC)
✓ Server authentication (certificates)
✓ Protection against eavesdropping and tampering
```

---

## 📧 Chapter 3: Electronic Mail

### **3.1 Email System Architecture**
```
Email Components:
✓ Mail User Agent (MUA): Email client
✓ Mail Transfer Agent (MTA): Email server
✓ Mail Delivery Agent (MDA): Local delivery
✓ Mail Access Agent (MAA): Retrieve mail

Email Flow:
Sender MUA → Sender MTA → Recipient MTA → Recipient MDA → Recipient MUA

Protocols Used:
- SMTP: Mail transfer between servers
- POP3: Mail retrieval (download and delete)
- IMAP: Mail access (server-based storage)
```

### **3.2 Simple Mail Transfer Protocol (SMTP)**
```
SMTP Characteristics:
✓ Text-based protocol
✓ Uses TCP port 25 (587 for submission, 465 for SMTPS)
✓ Push protocol (sender initiated)
✓ Reliable delivery mechanism

SMTP Commands:
HELO/EHLO: Identify client to server
MAIL FROM: Specify sender address
RCPT TO: Specify recipient address
DATA: Begin message content
QUIT: End session
RSET: Reset session
VRFY: Verify email address
EXPN: Expand mailing list

SMTP Session Example:
S: 220 mail.example.com ESMTP Postfix
C: EHLO client.example.org
S: 250-mail.example.com
S: 250-PIPELINING
S: 250-SIZE 10240000
S: 250-VRFY
S: 250-ETRN
S: 250-STARTTLS
S: 250 8BITMIME
C: MAIL FROM:<sender@example.org>
S: 250 2.1.0 Ok
C: RCPT TO:<recipient@example.com>
S: 250 2.1.5 Ok
C: DATA
S: 354 End data with <CR><LF>.<CR><LF>
C: From: sender@example.org
C: To: recipient@example.com
C: Subject: Test Message
C: 
C: This is a test message.
C: .
S: 250 2.0.0 Ok: queued as 12345
C: QUIT
S: 221 2.0.0 Bye

SMTP Response Codes:
2xx: Success (250 OK, 251 User not local)
3xx: Intermediate (354 Start mail input)
4xx: Temporary failure (450 Mailbox unavailable)
5xx: Permanent failure (550 No such user)
```

### **3.3 Post Office Protocol (POP3)**
```
POP3 Characteristics:
✓ Download-and-delete model
✓ Uses TCP port 110 (995 for POP3S)
✓ Simple protocol
✓ Offline mail reading

POP3 States:
1. Authorization: User authentication
2. Transaction: Mail operations
3. Update: Apply changes and disconnect

POP3 Commands:
USER: Specify username
PASS: Specify password
STAT: Get mailbox statistics
LIST: List messages
RETR: Retrieve message
DELE: Mark message for deletion
QUIT: End session and update mailbox

POP3 Session Example:
S: +OK POP3 server ready
C: USER alice
S: +OK
C: PASS secret123
S: +OK alice's maildrop has 2 messages (320 octets)
C: STAT
S: +OK 2 320
C: LIST
S: +OK 2 messages (320 octets)
S: 1 120
S: 2 200
S: .
C: RETR 1
S: +OK 120 octets
S: <message content>
S: .
C: DELE 1
S: +OK message 1 deleted
C: QUIT
S: +OK POP3 server signing off (1 message deleted)
```

### **3.4 Internet Message Access Protocol (IMAP)**
```
IMAP Characteristics:
✓ Server-based mail storage
✓ Uses TCP port 143 (993 for IMAPS)
✓ Multiple folder support
✓ Partial message retrieval
✓ Online and offline operation

IMAP Features:
✓ Multiple mailbox support
✓ Server-side search
✓ Message flags and keywords
✓ Partial message fetch
✓ Multiple client synchronization

IMAP Commands:
LOGIN: Authenticate user
SELECT: Select mailbox
EXAMINE: Read-only mailbox access
FETCH: Retrieve message data
SEARCH: Search messages
STORE: Modify message flags
EXPUNGE: Permanently remove deleted messages
LOGOUT: End session

IMAP Session Example:
S: * OK IMAP4rev1 Service Ready
C: a001 LOGIN alice secret123
S: a001 OK LOGIN completed
C: a002 SELECT INBOX
S: * 18 EXISTS
S: * FLAGS (\Answered \Flagged \Deleted \Seen \Draft)
S: * OK [PERMANENTFLAGS (\Deleted \Seen \*)] Limited
S: * OK [UIDVALIDITY 3857529045] UIDs valid
S: * OK [UIDNEXT 4392] Predicted next UID
S: a002 OK [READ-WRITE] SELECT completed
C: a003 FETCH 12 (FLAGS BODY[HEADER.FIELDS (DATE FROM)])
S: * 12 FETCH (FLAGS (\Seen) BODY[HEADER.FIELDS (DATE FROM)] {77}
S: Date: Wed, 17 Jul 1996 02:23:25 -0700 (PDT)
S: From: Terry Gray <gray@cac.washington.edu>
S: )
S: a003 OK FETCH completed
C: a004 LOGOUT
S: * BYE IMAP4rev1 Server logging out
S: a004 OK LOGOUT completed
```

---

## 🔍 Chapter 4: Domain Name System (DNS)

### **4.1 DNS Overview**
```
DNS Functions:
✓ Translate domain names to IP addresses
✓ Hierarchical distributed database
✓ Scalable naming system
✓ Load distribution and fault tolerance

DNS Hierarchy:
Root (.) → Top-Level Domain (com, org, edu) → Second-Level Domain (example) → Subdomain (www)

Example: www.example.com.
- Root: . (implicit)
- TLD: com
- SLD: example
- Subdomain: www

DNS Components:
✓ Name servers: Store DNS records
✓ Resolvers: Query DNS on behalf of clients
✓ Resource records: DNS database entries
✓ Zones: Administrative domains
```

### **4.2 DNS Record Types**
```
Common DNS Record Types:

A Record (Address):
- Maps domain name to IPv4 address
- Example: www.example.com. IN A 93.184.216.34

AAAA Record:
- Maps domain name to IPv6 address
- Example: www.example.com. IN AAAA 2606:2800:220:1:248:1893:25c8:1946

CNAME Record (Canonical Name):
- Maps alias to canonical name
- Example: ftp.example.com. IN CNAME www.example.com.

MX Record (Mail Exchange):
- Specifies mail server for domain
- Example: example.com. IN MX 10 mail.example.com.

NS Record (Name Server):
- Specifies authoritative name servers
- Example: example.com. IN NS ns1.example.com.

PTR Record (Pointer):
- Reverse DNS lookup (IP to name)
- Example: 34.216.184.93.in-addr.arpa. IN PTR www.example.com.

SOA Record (Start of Authority):
- Zone configuration information
- Example: example.com. IN SOA ns1.example.com. admin.example.com. (
    2022052301 ; Serial number
    3600       ; Refresh interval
    1800       ; Retry interval
    604800     ; Expire time
    86400      ; Minimum TTL
)

TXT Record:
- Arbitrary text information
- Example: example.com. IN TXT "v=spf1 include:_spf.google.com ~all"

SRV Record (Service):
- Service location information
- Example: _sip._tcp.example.com. IN SRV 10 5 5060 sip.example.com.
```

### **4.3 DNS Resolution Process**
```
Recursive Resolution:
1. Client queries local resolver
2. Resolver queries root name server
3. Root returns TLD name server
4. Resolver queries TLD name server
5. TLD returns authoritative name server
6. Resolver queries authoritative name server
7. Authoritative server returns answer
8. Resolver caches and returns result to client

Example Resolution for www.example.com:
Client → Local Resolver
Local Resolver → Root Name Server (.)
Root → com Name Server
Local Resolver → com Name Server
com → example.com Name Server
Local Resolver → example.com Name Server
example.com → IP address (93.184.216.34)
Local Resolver → Client (with answer)

DNS Caching:
✓ Reduces query load
✓ Improves response time
✓ TTL controls cache duration
✓ Hierarchical caching (client, resolver, servers)

DNS Message Format:
┌─────────────────────────────────────┐
│ Header (12 bytes)                   │
├─────────────────────────────────────┤
│ Question Section                    │
├─────────────────────────────────────┤
│ Answer Section                      │
├─────────────────────────────────────┤
│ Authority Section                   │
├─────────────────────────────────────┤
│ Additional Section                  │
└─────────────────────────────────────┘
```

---

## 🔧 Chapter 5: Dynamic Host Configuration Protocol (DHCP)

### **5.1 DHCP Overview**
```
DHCP Functions:
✓ Automatic IP address assignment
✓ Network configuration distribution
✓ Centralized network management
✓ IP address pool management

DHCP Components:
✓ DHCP Server: Assigns IP addresses
✓ DHCP Client: Requests configuration
✓ DHCP Relay Agent: Forwards requests across subnets
✓ IP Address Pool: Available addresses for assignment

Configuration Parameters:
✓ IP address and subnet mask
✓ Default gateway
✓ DNS servers
✓ Domain name
✓ Lease time
✓ NTP servers
✓ TFTP server (for network booting)
```

### **5.2 DHCP Process (DORA)**
```
DHCP Discover:
- Client broadcasts request for IP configuration
- Source: 0.0.0.0, Destination: 255.255.255.255
- UDP ports: 68 (client) → 67 (server)

DHCP Offer:
- Server responds with IP configuration offer
- Includes IP address, lease time, server ID
- May receive multiple offers from different servers

DHCP Request:
- Client selects one offer and broadcasts acceptance
- Includes server identifier of chosen server
- Other servers withdraw their offers

DHCP Acknowledge:
- Selected server confirms configuration
- Client can now use assigned IP address
- Lease timer starts

DHCP Message Format:
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|     op (1)    |   htype (1)   |   hlen (1)    |   hops (1)    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                            xid (4)                            |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|           secs (2)            |           flags (2)           |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                          ciaddr  (4)                          |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                          yiaddr  (4)                          |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                          siaddr  (4)                          |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                          giaddr  (4)                          |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                          chaddr  (16)                         |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                          sname   (64)                         |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                          file    (128)                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                        options (variable)                     |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

### **5.3 DHCP Options**
```
Common DHCP Options:
Option 1: Subnet Mask
Option 3: Router (Default Gateway)
Option 6: Domain Name Server
Option 12: Host Name
Option 15: Domain Name
Option 28: Broadcast Address
Option 42: NTP Servers
Option 51: IP Address Lease Time
Option 53: DHCP Message Type
Option 54: Server Identifier
Option 55: Parameter Request List
Option 58: Renewal Time (T1)
Option 59: Rebinding Time (T2)

DHCP Lease Management:
✓ Lease time: Duration of IP assignment
✓ Renewal (T1): 50% of lease time
✓ Rebinding (T2): 87.5% of lease time
✓ Release: Client voluntarily gives up lease
✓ Decline: Client rejects offered address

DHCP Reservations:
✓ Static IP assignment based on MAC address
✓ Ensures specific devices get same IP
✓ Useful for servers, printers, network devices
```

---

## 📁 Chapter 6: File Transfer Protocol (FTP)

### **6.1 FTP Overview**
```
FTP Characteristics:
✓ File transfer between systems
✓ Uses two TCP connections
✓ Text-based command protocol
✓ Anonymous and authenticated access

FTP Connections:
Control Connection (Port 21):
- Commands and responses
- Persistent throughout session
- Text-based protocol

Data Connection (Port 20 or dynamic):
- File transfers and directory listings
- Created for each transfer
- Binary or ASCII mode

FTP Modes:
Active Mode:
- Server initiates data connection to client
- Client listens on specified port
- Firewall issues for clients

Passive Mode:
- Client initiates data connection to server
- Server listens on specified port
- Better for firewalled clients
```

### **6.2 FTP Commands and Responses**
```
Common FTP Commands:
USER: Specify username
PASS: Specify password
PWD: Print working directory
CWD: Change working directory
LIST: List directory contents
RETR: Retrieve (download) file
STOR: Store (upload) file
DELE: Delete file
MKD: Make directory
RMD: Remove directory
TYPE: Set transfer type (A=ASCII, I=Binary)
PASV: Enter passive mode
PORT: Specify client data port
QUIT: End session

FTP Response Codes:
1xx: Positive preliminary (150 Opening data connection)
2xx: Positive completion (200 Command okay, 226 Transfer complete)
3xx: Positive intermediate (331 Password required)
4xx: Transient negative (425 Can't open data connection)
5xx: Permanent negative (550 File not found)

FTP Session Example:
C: USER anonymous
S: 331 Password required for anonymous
C: PASS guest@example.com
S: 230 User logged in, proceed
C: PWD
S: 257 "/" is current directory
C: TYPE I
S: 200 Type set to I
C: PASV
S: 227 Entering Passive Mode (192,168,1,100,195,149)
C: RETR file.txt
S: 150 Opening BINARY mode data connection for file.txt
S: 226 Transfer complete
C: QUIT
S: 221 Goodbye
```

### **6.3 Secure File Transfer**
```
FTPS (FTP Secure):
✓ FTP over TLS/SSL
✓ Explicit FTPS: AUTH TLS command
✓ Implicit FTPS: SSL from start
✓ Encrypts both control and data connections

SFTP (SSH File Transfer Protocol):
✓ File transfer over SSH
✓ Uses TCP port 22
✓ Single encrypted connection
✓ Integrated authentication and encryption

SCP (Secure Copy Protocol):
✓ Simple file copy over SSH
✓ Command-line tool
✓ No interactive session
✓ Good for scripting

Comparison:
Protocol | Port | Encryption | Authentication | Firewall Friendly
FTP      | 21   | None       | Basic/Anonymous| No (active mode)
FTPS     | 21   | TLS/SSL    | Certificate    | Partial
SFTP     | 22   | SSH        | SSH keys/pwd   | Yes
SCP      | 22   | SSH        | SSH keys/pwd   | Yes
```

---

## 🎯 Practice Questions - Module 6 (65 Questions)

### **Multiple Choice Questions (35 Questions)**

**Q1.** Which HTTP status code indicates a successful request?
a) 100
b) 200
c) 300
d) 400

**Answer: b) 200**
*Explanation: HTTP status code 200 means "OK" and indicates that the request was successful.*

**Q2.** What port does HTTPS use by default?
a) 80
b) 443
c) 8080
d) 8443

**Answer: b) 443**
*Explanation: HTTPS (HTTP Secure) uses TCP port 443 by default for encrypted web traffic.*

**Q3.** Which email protocol is used for sending mail between servers?
a) POP3
b) IMAP
c) SMTP
d) HTTP

**Answer: c) SMTP**
*Explanation: SMTP (Simple Mail Transfer Protocol) is used for transferring email between mail servers.*

**Q4.** What does the DNS A record contain?
a) IPv6 address
b) IPv4 address
c) Mail server information
d) Canonical name

**Answer: b) IPv4 address**
*Explanation: DNS A record maps a domain name to an IPv4 address.*

**Q5.** In DHCP, what does the "O" in DORA stand for?
a) Open
b) Offer
c) Option
d) Obtain

**Answer: b) Offer**
*Explanation: DORA stands for Discover, Offer, Request, Acknowledge - the four steps in DHCP lease process.*

### **Protocol Analysis Questions (20 Questions)**

**Q1.** Analyze this HTTP request and identify potential issues:
```
GET /admin/users HTTP/1.1
Host: example.com
Authorization: Basic YWRtaW46cGFzc3dvcmQ=
```

**Answer:**
```
Analysis:
1. Method: GET request to /admin/users endpoint
2. Version: HTTP/1.1 (standard)
3. Host header: Properly specified (example.com)
4. Authorization: Basic authentication used

Security Issues:
✗ Basic authentication over HTTP (not HTTPS)
✗ Credentials transmitted in base64 (easily decoded)
✗ No encryption of sensitive admin endpoint access
✗ Vulnerable to man-in-the-middle attacks

Decoded credentials: admin:password (weak password)

Recommendations:
✓ Use HTTPS instead of HTTP
✓ Implement stronger authentication (OAuth, JWT)
✓ Use strong passwords or certificate-based auth
✓ Add additional security headers
✓ Implement rate limiting for admin endpoints
```

**Q2.** Trace the DNS resolution process for www.github.com:

**Answer:**
```
DNS Resolution Steps:

1. Client Query:
   Client → Local Resolver: "What is the IP of www.github.com?"

2. Root Server Query:
   Local Resolver → Root Server (.): "Where is .com?"
   Root Server → Local Resolver: "Ask .com server at 192.5.6.30"

3. TLD Server Query:
   Local Resolver → .com Server: "Where is github.com?"
   .com Server → Local Resolver: "Ask github.com server at 192.30.252.153"

4. Authoritative Server Query:
   Local Resolver → github.com Server: "What is www.github.com?"
   github.com Server → Local Resolver: "140.82.112.4"

5. Response to Client:
   Local Resolver → Client: "www.github.com is 140.82.112.4"

Caching:
- Each response cached with TTL
- Subsequent queries served from cache
- Reduces resolution time and server load

Actual DNS Records (example):
www.github.com. 3600 IN CNAME github.com.
github.com. 60 IN A 140.82.112.4
```

### **Configuration Questions (10 Questions)**

**Q1.** Configure a DHCP server for network 192.168.1.0/24 with the following requirements:
- IP range: 192.168.1.100-192.168.1.200
- Gateway: 192.168.1.1
- DNS: 8.8.8.8, 8.8.4.4
- Lease time: 24 hours

**Answer:**
```
DHCP Server Configuration (ISC DHCP):

/etc/dhcp/dhcpd.conf:
# Global settings
default-lease-time 86400;        # 24 hours in seconds
max-lease-time 86400;
authoritative;

# Subnet declaration
subnet 192.168.1.0 netmask 255.255.255.0 {
    # IP address range
    range 192.168.1.100 192.168.1.200;
    
    # Network configuration
    option routers 192.168.1.1;
    option domain-name-servers 8.8.8.8, 8.8.4.4;
    option subnet-mask 255.255.255.0;
    option broadcast-address 192.168.1.255;
    
    # Optional settings
    option domain-name "local.domain";
    option ntp-servers 192.168.1.1;
}

# Static reservations (example)
host printer {
    hardware ethernet 00:11:22:33:44:55;
    fixed-address 192.168.1.10;
}

# Start DHCP service
systemctl start dhcpd
systemctl enable dhcpd

Verification Commands:
# Check DHCP leases
cat /var/lib/dhcp/dhcpd.leases

# Monitor DHCP logs
tail -f /var/log/messages | grep dhcpd

# Test DHCP client
dhclient -v eth0
```

---

## 🔬 Lab Exercises - Module 6

### **Lab 1: Web Server and HTTP Analysis**

**Exercise 1.1: HTTP Traffic Analysis**
```
Objective: Analyze HTTP communication using Wireshark

Setup:
1. Start Wireshark capture on network interface
2. Open web browser and visit http://httpbin.org
3. Perform various HTTP operations
4. Stop capture and analyze traffic

Analysis Tasks:

1. HTTP Request Analysis:
   - Identify HTTP methods used (GET, POST, etc.)
   - Examine request headers
   - Analyze User-Agent strings
   - Check Accept headers

2. HTTP Response Analysis:
   - Identify status codes
   - Examine response headers
   - Analyze Content-Type headers
   - Check caching headers (Cache-Control, ETag)

3. Performance Analysis:
   - Measure request-response times
   - Identify keep-alive connections
   - Analyze connection reuse
   - Check compression usage (gzip)

Sample Analysis Report:
Request: GET /get HTTP/1.1
Host: httpbin.org
User-Agent: Mozilla/5.0...
Accept: text/html,application/xhtml+xml...

Response: HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 256
Server: nginx/1.10.0

Performance Metrics:
- DNS Resolution: 45ms
- TCP Connection: 120ms
- HTTP Request: 180ms
- Total Time: 345ms
```

**Exercise 1.2: Simple Web Server Implementation**
```
Objective: Implement basic HTTP server

Python HTTP Server:
```python
import socket
import threading
import os
from datetime import datetime

class SimpleHTTPServer:
    def __init__(self, host='localhost', port=8080, document_root='./www'):
        self.host = host
        self.port = port
        self.document_root = document_root
        self.socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        
    def start(self):
        """Start the HTTP server"""
        self.socket.bind((self.host, self.port))
        self.socket.listen(5)
        print(f"HTTP Server running on http://{self.host}:{self.port}")
        
        try:
            while True:
                client_socket, address = self.socket.accept()
                client_thread = threading.Thread(
                    target=self.handle_request,
                    args=(client_socket, address)
                )
                client_thread.daemon = True
                client_thread.start()
        except KeyboardInterrupt:
            print("Server shutting down...")
        finally:
            self.socket.close()
    
    def handle_request(self, client_socket, address):
        """Handle HTTP request"""
        try:
            # Receive request
            request = client_socket.recv(1024).decode('utf-8')
            if not request:
                return
            
            # Parse request line
            lines = request.split('\n')
            request_line = lines[0].strip()
            method, path, version = request_line.split()
            
            print(f"{address[0]} - {method} {path}")
            
            # Handle different methods
            if method == 'GET':
                self.handle_get(client_socket, path)
            elif method == 'POST':
                self.handle_post(client_socket, path, request)
            else:
                self.send_error(client_socket, 405, "Method Not Allowed")
                
        except Exception as e:
            print(f"Error handling request: {e}")
            self.send_error(client_socket, 500, "Internal Server Error")
        finally:
            client_socket.close()
    
    def handle_get(self, client_socket, path):
        """Handle GET request"""
        if path == '/':
            path = '/index.html'
        
        file_path = os.path.join(self.document_root, path.lstrip('/'))
        
        try:
            if os.path.exists(file_path) and os.path.isfile(file_path):
                # Serve file
                with open(file_path, 'rb') as f:
                    content = f.read()
                
                content_type = self.get_content_type(file_path)
                self.send_response(client_socket, 200, "OK", content, content_type)
            else:
                # File not found
                self.send_error(client_socket, 404, "Not Found")
                
        except Exception as e:
            self.send_error(client_socket, 500, "Internal Server Error")
    
    def handle_post(self, client_socket, path, request):
        """Handle POST request"""
        # Extract content length and body
        headers = {}
        lines = request.split('\n')
        
        for line in lines[1:]:
            if ':' in line:
                key, value = line.split(':', 1)
                headers[key.strip().lower()] = value.strip()
            elif line.strip() == '':
                break
        
        # Simple echo response
        response_body = f"Received POST to {path}\n"
        response_body += f"Headers: {headers}\n"
        
        self.send_response(client_socket, 200, "OK", 
                          response_body.encode(), "text/plain")
    
    def send_response(self, client_socket, status_code, status_text, 
                     content, content_type="text/html"):
        """Send HTTP response"""
        response = f"HTTP/1.1 {status_code} {status_text}\r\n"
        response += f"Date: {datetime.now().strftime('%a, %d %b %Y %H:%M:%S GMT')}\r\n"
        response += f"Server: SimpleHTTPServer/1.0\r\n"
        response += f"Content-Type: {content_type}\r\n"
        response += f"Content-Length: {len(content)}\r\n"
        response += f"Connection: close\r\n"
        response += "\r\n"
        
        client_socket.send(response.encode())
        client_socket.send(content)
    
    def send_error(self, client_socket, status_code, status_text):
        """Send HTTP error response"""
        content = f"<html><body><h1>{status_code} {status_text}</h1></body></html>"
        self.send_response(client_socket, status_code, status_text, 
                          content.encode(), "text/html")
    
    def get_content_type(self, file_path):
        """Determine content type based on file extension"""
        ext = os.path.splitext(file_path)[1].lower()
        content_types = {
            '.html': 'text/html',
            '.css': 'text/css',
            '.js': 'application/javascript',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.gif': 'image/gif',
            '.txt': 'text/plain'
        }
        return content_types.get(ext, 'application/octet-stream')

# Create document root and sample files
os.makedirs('./www', exist_ok=True)
with open('./www/index.html', 'w') as f:
    f.write("""
<!DOCTYPE html>
<html>
<head><title>Simple HTTP Server</title></head>
<body>
    <h1>Welcome to Simple HTTP Server</h1>
    <p>This is a basic HTTP server implementation.</p>
    <form method="POST" action="/submit">
        <input type="text" name="message" placeholder="Enter message">
        <button type="submit">Submit</button>
    </form>
</body>
</html>
""")

# Run server
if __name__ == "__main__":
    server = SimpleHTTPServer()
    server.start()
```

Testing:
1. Access http://localhost:8080 in browser
2. Test different file types
3. Submit POST form
4. Analyze server logs
5. Use curl for testing:
   ```bash
   curl -v http://localhost:8080/
   curl -X POST -d "test=data" http://localhost:8080/submit
   ```
```

### **Lab 2: DNS Server Configuration**

**Exercise 2.1: DNS Server Setup (BIND)**
```
Objective: Configure authoritative DNS server

Installation (Ubuntu/Debian):
sudo apt update
sudo apt install bind9 bind9utils bind9-doc

Configuration Files:

1. Main Configuration (/etc/bind/named.conf.local):
zone "example.local" {
    type master;
    file "/etc/bind/db.example.local";
    allow-update { none; };
};

zone "1.168.192.in-addr.arpa" {
    type master;
    file "/etc/bind/db.192.168.1";
    allow-update { none; };
};

2. Forward Zone File (/etc/bind/db.example.local):
$TTL    604800
@       IN      SOA     ns1.example.local. admin.example.local. (
                     2022052301         ; Serial
                         604800         ; Refresh
                          86400         ; Retry
                        2419200         ; Expire
                         604800 )       ; Negative Cache TTL

; Name servers
@       IN      NS      ns1.example.local.
@       IN      NS      ns2.example.local.

; A records
ns1     IN      A       192.168.1.10
ns2     IN      A       192.168.1.11
www     IN      A       192.168.1.20
mail    IN      A       192.168.1.30
ftp     IN      A       192.168.1.40

; CNAME records
web     IN      CNAME   www.example.local.

; MX records
@       IN      MX      10      mail.example.local.

; TXT records
@       IN      TXT     "v=spf1 mx ~all"

3. Reverse Zone File (/etc/bind/db.192.168.1):
$TTL    604800
@       IN      SOA     ns1.example.local. admin.example.local. (
                     2022052301         ; Serial
                         604800         ; Refresh
                          86400         ; Retry
                        2419200         ; Expire
                         604800 )       ; Negative Cache TTL

; Name servers
@       IN      NS      ns1.example.local.
@       IN      NS      ns2.example.local.

; PTR records
10      IN      PTR     ns1.example.local.
11      IN      PTR     ns2.example.local.
20      IN      PTR     www.example.local.
30      IN      PTR     mail.example.local.
40      IN      PTR     ftp.example.local.

Service Management:
# Check configuration
sudo named-checkconf
sudo named-checkzone example.local /etc/bind/db.example.local
sudo named-checkzone 1.168.192.in-addr.arpa /etc/bind/db.192.168.1

# Start/restart service
sudo systemctl restart bind9
sudo systemctl enable bind9

# Check status
sudo systemctl status bind9

Testing:
# Test forward lookup
nslookup www.example.local 192.168.1.10
dig @192.168.1.10 www.example.local

# Test reverse lookup
nslookup 192.168.1.20 192.168.1.10
dig @192.168.1.10 -x 192.168.1.20

# Test MX record
dig @192.168.1.10 MX example.local

# Test zone transfer
dig @192.168.1.10 AXFR example.local
```

### **Lab 3: Email Server Configuration**

**Exercise 3.1: Postfix SMTP Server Setup**
```
Objective: Configure mail server with SMTP, POP3, and IMAP

Installation:
sudo apt update
sudo apt install postfix dovecot-core dovecot-imapd dovecot-pop3d

Postfix Configuration (/etc/postfix/main.cf):
# Basic settings
myhostname = mail.example.local
mydomain = example.local
myorigin = $mydomain
inet_interfaces = all
mydestination = $myhostname, localhost.$mydomain, localhost, $mydomain

# Network settings
mynetworks = 127.0.0.0/8, 192.168.1.0/24

# Mailbox settings
home_mailbox = Maildir/
mailbox_command = 

# SMTP authentication
smtpd_sasl_auth_enable = yes
smtpd_sasl_type = dovecot
smtpd_sasl_path = private/auth
smtpd_sasl_security_options = noanonymous

# TLS settings
smtpd_tls_cert_file = /etc/ssl/certs/ssl-cert-snakeoil.pem
smtpd_tls_key_file = /etc/ssl/private/ssl-cert-snakeoil.key
smtpd_use_tls = yes
smtpd_tls_session_cache_database = btree:${data_directory}/smtpd_scache
smtp_tls_session_cache_database = btree:${data_directory}/smtp_scache

Dovecot Configuration (/etc/dovecot/dovecot.conf):
# Protocols
protocols = imap pop3

# Mail location
mail_location = maildir:~/Maildir

# Authentication
auth_mechanisms = plain login
passdb {
  driver = pam
}
userdb {
  driver = passwd
}

# SSL settings
ssl = yes
ssl_cert = </etc/ssl/certs/ssl-cert-snakeoil.pem
ssl_key = </etc/ssl/private/ssl-cert-snakeoil.key

# Service settings
service auth {
  unix_listener /var/spool/postfix/private/auth {
    mode = 0666
    user = postfix
    group = postfix
  }
}

User Management:
# Create mail users
sudo adduser alice
sudo adduser bob

# Create mail directories
sudo mkdir -p /home/alice/Maildir/{cur,new,tmp}
sudo mkdir -p /home/bob/Maildir/{cur,new,tmp}
sudo chown -R alice:alice /home/alice/Maildir
sudo chown -R bob:bob /home/bob/Maildir

Service Management:
sudo systemctl restart postfix
sudo systemctl restart dovecot
sudo systemctl enable postfix
sudo systemctl enable dovecot

Testing:
# Test SMTP (send mail)
telnet localhost 25
EHLO mail.example.local
MAIL FROM:<alice@example.local>
RCPT TO:<bob@example.local>
DATA
Subject: Test Message
From: alice@example.local
To: bob@example.local

This is a test message.
.
QUIT

# Test POP3 (retrieve mail)
telnet localhost 110
USER bob
PASS bobpassword
STAT
LIST
RETR 1
QUIT

# Test IMAP (access mail)
telnet localhost 143
LOGIN bob bobpassword
SELECT INBOX
FETCH 1 BODY[]
LOGOUT

# Use mail clients
# Thunderbird, Outlook, or command-line tools
mail -s "Test Subject" bob@example.local < /dev/null
```

---

## 📖 Module 6 Summary

### **Key Concepts Mastered**
✓ Application layer protocols and services
✓ HTTP/HTTPS web communication
✓ Email protocols (SMTP, POP3, IMAP)
✓ DNS hierarchical naming system
✓ DHCP automatic configuration
✓ File transfer protocols (FTP, SFTP)

### **Practical Skills Developed**
✓ Web server implementation and configuration
✓ DNS server setup and zone management
✓ Email server configuration (Postfix/Dovecot)
✓ Protocol analysis with Wireshark
✓ Network service troubleshooting
✓ Security implementation (TLS/SSL)

### **Real-World Applications**
✓ Web application development
✓ Network service administration
✓ Email system management
✓ DNS infrastructure planning
✓ Network automation and scripting
✓ Security protocol implementation

### **Course Completion**
**🎉 Congratulations! You have completed the comprehensive Computer Networks course covering:**
- Physical Layer fundamentals
- Data Link Layer protocols
- Network Layer routing
- Transport Layer reliability
- Application Layer services

**Next Steps:**
- Practice with real network equipment
- Pursue industry certifications (CCNA, Network+)
- Build home lab for experimentation
- Contribute to open-source networking projects
- Explore advanced topics (SDN, Network Security, Cloud Networking)

---

**🎯 Application Layer mastered! You're now ready for professional networking roles! 🚀**