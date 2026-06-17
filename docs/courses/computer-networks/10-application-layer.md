# Chapter 10: The Application Layer

## Learning Objectives

1. Describe the DNS name hierarchy and resolution process.
2. Analyze HTTP message formats and the evolution from HTTP/1.1 to HTTP/3.
3. Compare email protocols: SMTP, POP3, and IMAP.
4. Explain the operation of FTP, DHCP, and SNMP.
5. Distinguish between Telnet and SSH and their security properties.

## 10.1 Domain Name System

![Application Layer Protocols and Web Technologies](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/computer-networks/ch07-application.png)

DNS translates human-readable domain names (e.g., www.example.com) to IP addresses. It is a distributed, hierarchical database with client-server architecture.

### 10.1.1 Name Space Hierarchy

The domain name space is a tree structure. The root is unnamed (represented as `.`). Top-level domains (TLDs) include generic TLDs (gTLDs: .com, .org, .net, .edu) and country-code TLDs (ccTLDs: .us, .uk, .jp). Second-level domains are registered by organizations within a TLD. Subdomains further refine the hierarchy.

A fully qualified domain name (FQDN) follows the path from a leaf to the root, with labels separated by dots: `host.subdomain.domain.tld.`

### 10.1.2 Name Servers

The DNS namespace is partitioned into zones, each managed by an authoritative name server. The hierarchy of servers:

- **Root name servers**: 13 logical root server identities (operated by organizations including Verisign, USC/ISI, Cogent, and others), each replicated in many physical instances via anycast.
- **TLD name servers**: responsible for each TLD (e.g., Verisign operates .com and .net).
- **Authoritative name servers**: provide the definitive answer for domains within their zone (e.g., ns1.example.com).
- **Local name resolver**: operated by the ISP or organization, caches results and queries on behalf of clients.

### 10.1.3 Resolution Process

Iterative resolution:

```
Client → Local Resolver → Root → TLD → Authoritative → Response
```

1. Client queries local resolver for www.example.com.
2. Local resolver queries a root server; root responds with addresses of .com TLD servers.
3. Local resolver queries .com TLD server; TLD responds with addresses of example.com authoritative servers.
4. Local resolver queries example.com authoritative server; server responds with the IP address.
5. Local resolver returns the IP address to the client and caches it.

DNS uses UDP on port 53 for queries (limit 512 bytes without EDNS0) and TCP for zone transfers. Caching reduces query latency; each record has a Time-to-Live (TTL) value.

### 10.1.4 DNS Record Types

| Type | Description | Example |
|------|-------------|---------|
| A | IPv4 address | www.example.com → 93.184.216.34 |
| AAAA | IPv6 address | www.example.com → 2606:2800:220:1:248:1893:25c8:1946 |
| CNAME | Canonical name (alias) | www → example.com |
| MX | Mail exchange (priority + hostname) | 10 mail.example.com |
| NS | Name server | ns1.example.com |
| TXT | Arbitrary text (SPF, DKIM, verification) | "v=spf1 mx ~all" |
| PTR | Reverse lookup (IP → name) | 34.216.184.93 → www.example.com |

## 10.2 HTTP

### 10.2.1 HTTP/1.1

HTTP (Hypertext Transfer Protocol) is a request-response protocol using TCP (port 80). HTTP/1.1 (RFC 7230) introduced persistent connections and pipelining.

**Request message format:**
```
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html, application/json
```

**Response message format:**
```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1234
Date: Mon, 01 Jan 2026 12:00:00 GMT

<html>...
```

Status code classes: 1xx (informational), 2xx (success), 3xx (redirection), 4xx (client error), 5xx (server error). Common codes: 200 OK, 301 Moved Permanently, 400 Bad Request, 404 Not Found, 500 Internal Server Error.

### 10.2.2 HTTP/2

HTTP/2 (RFC 7540) improves performance over HTTP/1.1 through:

- **Binary framing**: messages are split into frames (HEADERS, DATA, SETTINGS, etc.) for efficient parsing.
- **Multiplexing**: multiple streams share a single TCP connection, eliminating head-of-line blocking at the application layer.
- **Server push**: the server can send resources the client has not yet requested.
- **Header compression**: HPACK compresses header fields using static and dynamic tables.

### 10.2.3 HTTP/3

HTTP/3 (RFC 9114) operates over QUIC (Chapter 18) rather than TCP, eliminating TCP-level head-of-line blocking. A single HTTP/3 connection carries multiple streams independently; loss in one stream does not affect others. HTTP/3 uses QPACK (header compression adapted for QUIC's out-of-order delivery). HTTP/3 is the default for a growing fraction of web traffic.

## 10.3 Email

### 10.3.1 SMTP

Simple Mail Transfer Protocol (SMTP, RFC 5321) transfers email from a client to a server and between servers. SMTP uses TCP port 25; submission uses port 587. SMTP is a push protocol: the sender initiates the connection and pushes the message.

```
C: HELO client.example.com
S: 250 Hello client.example.com
C: MAIL FROM: <alice@example.com>
S: 250 OK
C: RCPT TO: <bob@other.org>
S: 250 OK
C: DATA
S: 354 Start mail input
C: From: Alice <alice@example.com>
C: To: Bob <bob@other.org>
C: Subject: Hello
C:
C: This is the message body.
C: .
S: 250 OK
C: QUIT
```

SMTP uses persistent connections and can relay messages through multiple MTAs (Message Transfer Agents). MX records direct mail to the appropriate server for each domain.

### 10.3.2 POP3

Post Office Protocol v3 (POP3, RFC 1939) retrieves email from a server. It operates in two modes:

- **Download-and-delete**: messages are downloaded to the client and removed from the server.
- **Download-and-keep**: messages are downloaded but remain on the server.

POP3 is simple and works well for single-device access but does not support server-side folder management.

### 10.3.3 IMAP

Internet Message Access Protocol (IMAP, RFC 3501) provides more sophisticated email access. Messages remain on the server; the client caches headers and downloads messages on demand. IMAP supports folders, search, and simultaneous access from multiple devices. IMAP over TLS uses port 993.

## 10.4 FTP

File Transfer Protocol (FTP, RFC 959) transfers files between hosts. FTP uses two connections: control (TCP port 21) and data (TCP port 20). In active mode, the server initiates the data connection to the client. In passive mode (PASV), the client initiates both connections, which works through NAT and firewalls.

FTP supports list, get, put, delete, rename, and directory operations. Authentication is plaintext; FTPS (FTP over SSL/TLS) and SFTP (SSH File Transfer Protocol, unrelated to FTP) provide encryption.

## 10.5 DHCP

Dynamic Host Configuration Protocol (DHCP, RFC 2131) automatically assigns IP configuration. The four-step DORA process:
- **Discover**: client broadcasts DHCPDISCOVER.
- **Offer**: server(s) respond with DHCPOFFER including IP address, mask, gateway, DNS.
- **Request**: client broadcasts DHCPREQUEST selecting one offer.
- **Acknowledge**: server confirms with DHCPACK.

Lease times govern address reuse. The client may renew the lease before expiration.

## 10.6 SNMP

Simple Network Management Protocol (SNMP, RFC 1157) monitors and manages network devices. The SNMP architecture has:
- **Managed devices**: routers, switches, servers with SNMP agents.
- **Manager**: central system that polls agents and receives traps.
- **Management Information Base (MIB)**: hierarchical object identifier (OID) tree defining manageable attributes.

SNMPv3 adds encryption and authentication, addressing the plaintext security weaknesses of SNMPv1/v2c.

## 10.7 Telnet and SSH

**Telnet** (RFC 854) provides remote terminal access using TCP port 23. All data including passwords is transmitted in plaintext, making Telnet insecure on any untrusted network. Telnet is deprecated for remote administration.

**SSH** (Secure Shell, RFC 4251) provides encrypted remote access. SSH uses TCP port 22, supports public-key authentication, port forwarding (tunneling), and SCP/SFTP file transfer. SSH is the standard protocol for remote system administration.

## Summary

DNS translates domain names to IP addresses through a distributed server hierarchy. HTTP has evolved from simple request-response (HTTP/1.1) to multiplexed connections (HTTP/2) and finally to QUIC-based transport (HTTP/3). Email uses SMTP for transfer and POP3 or IMAP for retrieval. FTP provides file transfer with separate control and data channels. DHCP automates network configuration. SNMP enables network monitoring and management. SSH provides secure remote access, replacing the insecure Telnet protocol.

## Exercises

### Review Questions

1. What is the difference between iterative and recursive DNS resolution?
2. How does HTTP/2 multiplexing differ from HTTP/1.1 pipelining?
3. Why is SMTP a push protocol while HTTP is a pull protocol?
4. What advantage does IMAP offer over POP3 for multi-device email access?
5. What is the purpose of the SNMP MIB?

### Application Problems

6. Trace the DNS resolution for the domain `mail.example.ac.uk` starting from an empty local resolver cache. List each query and response, identifying the server type at each step.
7. An HTTP/1.1 web page references 12 CSS files, 20 images, and 5 JavaScript files. Assuming persistence, how many TCP connections are needed? How does this compare with HTTP/2?
8. An SMTP server receives a message for delivery to a recipient at `example.com`. Explain how the server uses MX records to determine the destination mail server. Consider the case where the DNS returns two MX records with different priorities.

### Challenge Problem

9. **Design an application-layer protocol for a distributed social network.** The network must be decentralized (no central server), provide user discovery, support text/image/video posts, and ensure message delivery even when recipients are offline. Define the protocol messages, the server roles (if any), the addressing scheme, and the data formats. Explain how your design compares with existing protocols (DNS for discovery, SMTP-like store-and-forward for delivery, and HTTP for content retrieval).
