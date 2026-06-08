# Module 6: Application Layer

## Application Layer Overview
The Application Layer (Layer 7) provides network services directly to end-user applications and handles user interface and data formatting.

## Application Layer Functions
1. **Network Virtual Terminal**: Remote login services
2. **File Transfer and Management**: File operations
3. **Mail Services**: Electronic messaging
4. **Directory Services**: Resource location
5. **Network Management**: Monitor and control network

## HTTP (HyperText Transfer Protocol)

### HTTP Basics
- **Stateless Protocol**: Each request independent
- **Client-Server Model**: Browser requests, server responds
- **Port 80**: Default HTTP port
- **Port 443**: HTTPS (secure HTTP)

### HTTP Methods
```
GET     - Retrieve resource
POST    - Submit data to server
PUT     - Update/create resource
DELETE  - Remove resource
HEAD    - Get headers only
OPTIONS - Get supported methods
PATCH   - Partial resource update
```

### HTTP Request Format
```
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html,application/xhtml+xml
Accept-Language: en-US,en;q=0.5
Connection: keep-alive

[Request Body - for POST/PUT]
```

### HTTP Response Format
```
HTTP/1.1 200 OK
Date: Mon, 23 May 2024 22:38:34 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: text/html; charset=UTF-8
Content-Length: 138
Connection: close

<html>
<body>
<h1>Hello World!</h1>
</body>
</html>
```

### HTTP Status Codes
```
1xx - Informational
100 Continue
101 Switching Protocols

2xx - Success
200 OK
201 Created
204 No Content

3xx - Redirection
301 Moved Permanently
302 Found
304 Not Modified

4xx - Client Error
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found

5xx - Server Error
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable
```

### HTTP/2 and HTTP/3
**HTTP/2 Features:**
- **Binary Protocol**: More efficient than text
- **Multiplexing**: Multiple requests per connection
- **Server Push**: Proactive resource delivery
- **Header Compression**: Reduced overhead

**HTTP/3 Features:**
- **Built on QUIC**: UDP-based transport
- **Faster Connection Setup**: 0-RTT resumption
- **Better Loss Recovery**: Stream-level control
- **Improved Security**: Encrypted by default

## HTTPS (HTTP Secure)

### SSL/TLS Handshake
```
Client                    Server
  |                         |
  |------ Client Hello ---->|
  |                         |
  |<----- Server Hello -----|
  |<----- Certificate ------|
  |<-- Server Hello Done ---|
  |                         |
  |-- Client Key Exchange ->|
  |-- Change Cipher Spec -->|
  |------ Finished -------->|
  |                         |
  |<- Change Cipher Spec ---|
  |<------ Finished --------|
  |                         |
  |   Encrypted Data Exchange
```

### Certificate Validation
1. **Certificate Chain**: Verify issuer hierarchy
2. **Expiration Date**: Check validity period
3. **Domain Name**: Match certificate CN/SAN
4. **Revocation Status**: Check CRL/OCSP

## DNS (Domain Name System)

### DNS Hierarchy
```
Root (.)
├── com.
│   ├── google.com.
│   └── amazon.com.
├── org.
│   └── wikipedia.org.
└── edu.
    └── mit.edu.
```

### DNS Record Types
```
A      - IPv4 address mapping
AAAA   - IPv6 address mapping
CNAME  - Canonical name (alias)
MX     - Mail exchange server
NS     - Name server
PTR    - Reverse DNS lookup
SOA    - Start of authority
TXT    - Text information
SRV    - Service location
```

### DNS Query Process
```
1. Client queries local DNS resolver
2. Resolver checks cache
3. If not cached, query root server
4. Root server returns TLD server
5. Query TLD server for authoritative server
6. Query authoritative server for record
7. Return result to client
```

### DNS Configuration Examples
```bash
# /etc/hosts file
127.0.0.1    localhost
192.168.1.10 server.local

# DNS zone file
$TTL 86400
@   IN  SOA ns1.example.com. admin.example.com. (
        2024052301  ; Serial
        3600        ; Refresh
        1800        ; Retry
        604800      ; Expire
        86400       ; Minimum TTL
)

@       IN  NS      ns1.example.com.
@       IN  A       192.168.1.10
www     IN  A       192.168.1.10
mail    IN  A       192.168.1.20
@       IN  MX  10  mail.example.com.
```

## Email Protocols

### SMTP (Simple Mail Transfer Protocol)
- **Port 25**: Standard SMTP
- **Port 587**: Submission (with authentication)
- **Port 465**: SMTPS (deprecated)

### SMTP Commands
```
HELO/EHLO - Identify client
MAIL FROM - Specify sender
RCPT TO   - Specify recipient
DATA      - Begin message content
QUIT      - End session
```

### SMTP Session Example
```
S: 220 mail.example.com ESMTP
C: EHLO client.example.com
S: 250-mail.example.com Hello client.example.com
S: 250 AUTH PLAIN LOGIN
C: MAIL FROM:<sender@example.com>
S: 250 OK
C: RCPT TO:<recipient@example.com>
S: 250 OK
C: DATA
S: 354 Start mail input
C: Subject: Test Message
C: 
C: This is a test message.
C: .
S: 250 Message accepted
C: QUIT
S: 221 Bye
```

### POP3 (Post Office Protocol v3)
- **Port 110**: Standard POP3
- **Port 995**: POP3S (secure)
- **Download and Delete**: Messages removed from server
- **Single Device Access**: Not suitable for multiple devices

### IMAP (Internet Message Access Protocol)
- **Port 143**: Standard IMAP
- **Port 993**: IMAPS (secure)
- **Server Storage**: Messages remain on server
- **Multi-Device Access**: Synchronization across devices
- **Folder Support**: Server-side folder management

## FTP (File Transfer Protocol)

### FTP Modes
**Active Mode:**
- Client opens command connection to server port 21
- Server opens data connection to client

**Passive Mode:**
- Client opens both command and data connections
- Better for firewalls and NAT

### FTP Commands
```
USER    - Username
PASS    - Password
PWD     - Print working directory
CWD     - Change working directory
LIST    - List directory contents
RETR    - Retrieve file
STOR    - Store file
QUIT    - End session
```

### Secure File Transfer
**SFTP (SSH File Transfer Protocol):**
- Uses SSH for encryption
- Port 22
- Secure authentication and data transfer

**FTPS (FTP Secure):**
- FTP with SSL/TLS encryption
- Explicit (port 21) or Implicit (port 990)

## DHCP (Dynamic Host Configuration Protocol)

### DHCP Process (DORA)
```
1. DISCOVER - Client broadcasts discovery
2. OFFER    - Server offers configuration
3. REQUEST  - Client requests offered config
4. ACK      - Server acknowledges assignment
```

### DHCP Options
```
Option 1   - Subnet Mask
Option 3   - Default Gateway
Option 6   - DNS Servers
Option 15  - Domain Name
Option 51  - Lease Time
Option 66  - TFTP Server
Option 67  - Boot Filename
```

### DHCP Configuration
```
# ISC DHCP Server
subnet 192.168.1.0 netmask 255.255.255.0 {
    range 192.168.1.100 192.168.1.200;
    option routers 192.168.1.1;
    option domain-name-servers 8.8.8.8, 8.8.4.4;
    option domain-name "example.com";
    default-lease-time 86400;
    max-lease-time 172800;
}

# Static reservation
host server {
    hardware ethernet 00:1B:44:11:3A:B7;
    fixed-address 192.168.1.10;
}
```

## Network Time Protocol (NTP)

### NTP Hierarchy (Stratum)
```
Stratum 0 - Reference clocks (GPS, atomic)
Stratum 1 - Primary servers (directly connected to Stratum 0)
Stratum 2 - Secondary servers (sync with Stratum 1)
Stratum 3 - Tertiary servers (sync with Stratum 2)
...up to Stratum 15
```

### NTP Configuration
```
# /etc/ntp.conf
server 0.pool.ntp.org iburst
server 1.pool.ntp.org iburst
server 2.pool.ntp.org iburst

restrict default kod nomodify notrap nopeer noquery
restrict 127.0.0.1
restrict ::1
```

## SNMP (Simple Network Management Protocol)

### SNMP Components
- **Manager**: Monitoring system
- **Agent**: Monitored device
- **MIB**: Management Information Base
- **OID**: Object Identifier

### SNMP Versions
- **SNMPv1**: Original, plain text community strings
- **SNMPv2c**: Improved, still uses community strings
- **SNMPv3**: Secure, authentication and encryption

### SNMP Operations
```
GET     - Retrieve single value
GET-NEXT - Retrieve next value in tree
GET-BULK - Retrieve multiple values
SET     - Modify value
TRAP    - Unsolicited notification
```

## Web Services and APIs

### REST (Representational State Transfer)
**REST Principles:**
- **Stateless**: Each request contains all needed information
- **Cacheable**: Responses can be cached
- **Uniform Interface**: Standard HTTP methods
- **Layered System**: Hierarchical architecture

### RESTful API Example
```http
GET /api/users          - Get all users
GET /api/users/123      - Get user with ID 123
POST /api/users         - Create new user
PUT /api/users/123      - Update user 123
DELETE /api/users/123   - Delete user 123
```

### JSON (JavaScript Object Notation)
```json
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com",
  "active": true,
  "roles": ["user", "admin"]
}
```

### XML (eXtensible Markup Language)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<user>
    <id>123</id>
    <name>John Doe</name>
    <email>john@example.com</email>
    <active>true</active>
    <roles>
        <role>user</role>
        <role>admin</role>
    </roles>
</user>
```

## Practical Exercises

### Exercise 1: HTTP Analysis
1. Use browser developer tools to analyze HTTP requests
2. Examine headers, status codes, and timing
3. Compare HTTP/1.1 vs HTTP/2 performance

### Exercise 2: DNS Configuration
1. Set up local DNS server
2. Create forward and reverse zones
3. Test DNS resolution and caching

### Exercise 3: Email Server Setup
1. Configure SMTP server for sending
2. Set up IMAP server for receiving
3. Test email flow and authentication

## Lab Assignment
1. Build complete web application stack
2. Configure DNS, web server, and database
3. Implement HTTPS with valid certificates
4. Set up monitoring with SNMP

## Application Layer Security

### Common Vulnerabilities
- **SQL Injection**: Malicious database queries
- **Cross-Site Scripting (XSS)**: Client-side code injection
- **Cross-Site Request Forgery (CSRF)**: Unauthorized actions
- **Session Hijacking**: Stolen session tokens

### Security Best Practices
1. **Input Validation**: Sanitize all user input
2. **Authentication**: Strong password policies
3. **Authorization**: Principle of least privilege
4. **Encryption**: Protect data in transit and at rest
5. **Logging**: Monitor and audit activities

## Troubleshooting Application Layer
```bash
# Test HTTP connectivity
curl -I http://www.example.com
wget --spider http://www.example.com

# DNS lookup
nslookup www.example.com
dig www.example.com

# Test email connectivity
telnet mail.example.com 25
openssl s_client -connect mail.example.com:993

# SNMP testing
snmpwalk -v2c -c public 192.168.1.1
```

## Quiz Questions
1. What is the difference between HTTP and HTTPS?
2. Explain the DNS resolution process
3. How does IMAP differ from POP3?
4. What are the main components of SNMP?
5. What is a RESTful API and its principles?

## Next Module
Module 7: Network Security - Firewalls, VPNs, and Encryption