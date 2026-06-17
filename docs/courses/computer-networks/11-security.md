# Chapter 11: Network Security

## Learning Objectives

1. Identify the principal threats to network security: eavesdropping, tampering, impersonation, and denial of service.
2. Explain the principles of symmetric and asymmetric key cryptography.
3. Describe digital signatures, message authentication codes, and public-key certificates.
4. Compare packet-filter, stateful, and application-layer firewalls.
5. Analyze IPSec and TLS in the context of virtual private networks.

## 11.1 Network Security Threats

![Network Security, Cryptography and Wireless Networking](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/computer-networks/ch08-security-wireless.png)

![Network Security Overview](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/computer-networks/ch-14-network-security.png)

Network security encompasses the policies and mechanisms that protect the confidentiality, integrity, and availability of data in transit.

**Eavesdropping (sniffing).** An adversary captures packets traversing a network segment. On shared media (wireless, Ethernet hubs), any station on the segment can capture all traffic. On switched networks, ARP spoofing or port mirroring enables packet capture.

**Tampering.** An adversary modifies packets in transit. Without integrity protection, a router or middlebox can alter packet content undetected.

**Impersonation (spoofing).** An adversary sends packets with a forged source IP address. IP spoofing enables amplification attacks (e.g., DNS amplification) and session hijacking.

**Denial of service (DoS).** An adversary overwhelms a target with traffic, exhausting bandwidth, CPU, or memory resources. Distributed DoS (DDoS) uses many compromised hosts (botnet) to amplify the attack.

**Man-in-the-middle (MITM).** An adversary intercepts communication between two parties, relaying messages while potentially modifying them. Both parties believe they are communicating directly.

## 11.2 Cryptography Basics

### 11.2.1 Symmetric Key Cryptography

In symmetric key cryptography, both sender and receiver share a single secret key $K$. The encryption function $E$ and decryption function $D$ satisfy:

$$D(K, E(K, M)) = M$$

**Stream ciphers** encrypt one bit or byte at a time by XORing the plaintext with a pseudorandom keystream (e.g., RC4, ChaCha20).

**Block ciphers** encrypt fixed-size blocks (typically 128 bits). AES (Advanced Encryption Standard) processes 128-bit blocks with key sizes of 128, 192, or 256 bits. Modes of operation:

- **ECB (Electronic Codebook):** each block encrypted independently; identical plaintext blocks produce identical ciphertext blocks.
- **CBC (Cipher Block Chaining):** each plaintext block is XORed with the previous ciphertext block before encryption. Requires an initialization vector (IV).
- **CTR (Counter):** encrypts a counter value and XORs with plaintext; parallelizable, random access.

AES-128 with CBC mode is widely used for file and link encryption. The security of symmetric key systems depends on key distribution: both parties must share the key through a secure channel.

### 11.2.2 Asymmetric Key Cryptography

Asymmetric (public-key) cryptography uses a pair of keys: a public key $K_{pub}$ that can be freely distributed and a private key $K_{priv}$ that must be kept secret. A message encrypted with the public key can only be decrypted with the corresponding private key:

$$D(K_{priv}, E(K_{pub}, M)) = M$$

**RSA** (Rivest-Shamir-Adleman) security relies on the difficulty of factoring large composite numbers. Key generation:

1. Choose two large primes $p$ and $q$ (2048 bits each for security).
2. Compute $n = p \cdot q$.
3. Compute $\phi(n) = (p-1)(q-1)$.
4. Choose $e$ such that $1 < e < \phi(n)$ and $\gcd(e, \phi(n)) = 1$ (commonly $e = 65537$).
5. Compute $d = e^{-1} \mod \phi(n)$.
6. Public key: $(n, e)$; private key: $(n, d)$.

Encryption: $c = m^e \mod n$. Decryption: $m = c^d \mod n$.

**Elliptic Curve Cryptography (ECC)** provides equivalent security with smaller key sizes (256-bit ECC ≈ 3072-bit RSA). ECC is used in modern protocols including TLS 1.3 and Bitcoin.

### 11.2.3 Diffie-Hellman Key Exchange

Diffie-Hellman (DH) allows two parties to establish a shared secret over an insecure channel.

1. Alice and Bob agree on public parameters $g$ (generator) and $p$ (large prime).
2. Alice chooses random private $a$, sends $g^a \mod p$ to Bob.
3. Bob chooses random private $b$, sends $g^b \mod p$ to Alice.
4. Alice computes $(g^b)^a = g^{ab} \mod p$.
5. Bob computes $(g^a)^b = g^{ab} \mod p$.

The shared secret $g^{ab}$ is used as a key for symmetric encryption. DH is vulnerable to MITM attacks unless the public values are authenticated. Elliptic Curve Diffie-Hellman (ECDHE) is used in TLS 1.3.

## 11.3 Integrity and Authentication

### 11.3.1 Cryptographic Hash Functions

A hash function $H$ maps an arbitrary-length input to a fixed-length output (digest). Cryptographic hash functions must be:

- **Preimage resistant**: given $y$, infeasible to find $x$ such that $H(x) = y$.
- **Second preimage resistant**: given $x$, infeasible to find $x' \ne x$ such that $H(x') = H(x)$.
- **Collision resistant**: infeasible to find any $x_1 \ne x_2$ such that $H(x_1) = H(x_2)$.

**SHA-256** produces a 256-bit digest. **SHA-3** is the latest NIST standard.

### 11.3.2 Message Authentication Code

A MAC uses a shared secret key $K$ to produce an authentication tag for a message:

$$T = MAC(K, M)$$

The receiver recomputes the tag and compares. Any change to the message or use of a different key produces a different tag. HMAC (Hash-based MAC, RFC 2104) uses a cryptographic hash function: $HMAC(K, M) = H((K \oplus \text{opad}) || H((K \oplus \text{ipad}) || M))$.

### 11.3.3 Digital Signatures

A digital signature provides non-repudiation: the sender cannot deny having signed the message. The sender signs with their private key:

$$S = E(K_{priv}, H(M))$$

The receiver verifies with the sender's public key:

$$H(M) \stackrel{?}{=} D(K_{pub}, S)$$

RSA signatures work analogously to encryption but with the roles of public and private keys reversed. ECDSA (Elliptic Curve Digital Signature Algorithm) provides signatures with ECC keys.

### 11.3.4 Certificates and PKI

A digital certificate binds a public key to an identity. X.509 certificates contain:

- Version, serial number, signature algorithm
- Issuer (Certificate Authority, CA)
- Validity period (notBefore, notAfter)
- Subject (the entity the certificate identifies)
- Subject's public key
- CA's signature

The CA is a trusted third party. Certificate chains establish trust: a root CA certificate is self-signed and distributed with the operating system. Intermediate CAs issue end-entity certificates. The client validates the chain up to a trusted root.

## 11.4 Firewalls

A firewall is a system that controls network traffic based on a security policy.

### 11.4.1 Packet-Filter Firewalls

Packet filters examine IP and transport header fields: source/destination address, port, protocol type, and interface. Rules are evaluated in order; the first matching rule determines the action (allow or deny).

Example iptables rules:
```
iptables -A INPUT -p tcp --dport 22 -s 10.0.0.0/8 -j ACCEPT
iptables -A INPUT -p tcp --dport 22 -j DROP
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A OUTPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
```

Packet filters are stateless — each packet is evaluated independently. They cannot detect attacks spread across multiple packets.

### 11.4.2 Stateful Firewalls

Stateful firewalls track connection state. A connection table records (src IP, src port, dst IP, dst port, state). Inbound packets are allowed only if they correspond to an established outbound connection. Stateful inspection prevents many blind injection attacks.

### 11.4.3 Application-Layer Firewalls

Application firewalls (proxies) inspect application-layer content. An HTTP proxy can block URLs matching malware patterns, validate HTTP headers, and filter file types. Next-generation firewalls (NGFW) combine stateful inspection with intrusion prevention, application identification, and TLS decryption.

## 11.5 VPNs

A Virtual Private Network (VPN) secures communication over an untrusted network by encrypting traffic between endpoints.

### 11.5.1 IPSec

IPSec (RFC 4301) provides security at the network layer. Modes: transport mode (protects payload only) and tunnel mode (protects entire IP packet). Security protocols:

- **Authentication Header (AH):** provides integrity and authentication but not confidentiality.
- **Encapsulating Security Payload (ESP):** provides confidentiality, integrity, and authentication.

Security associations (SAs) define the security parameters for communication. Internet Key Exchange (IKE) establishes SAs through authenticated Diffie-Hellman.

### 11.5.2 SSL/TLS

TLS (Transport Layer Security) operates at the transport layer between TCP and the application. The TLS handshake:

1. Client sends ClientHello (supported cipher suites, TLS version, random nonce).
2. Server responds with ServerHello (chosen cipher suite, certificate, random nonce).
3. Client verifies the certificate, generates a pre-master secret, encrypts with server's public key, sends to server.
4. Both parties derive session keys from the pre-master secret.
5. Client sends Finished (encrypted handshake hash); server responds with Finished.
6. Application data flows encrypted with session keys.

TLS 1.3 (RFC 8446) reduces the handshake to one round trip (0-RTT for resuming) and removes insecure options.

## 11.6 IDS/IPS

Intrusion Detection Systems (IDS) monitor traffic for suspicious patterns. Intrusion Prevention Systems (IPS) sit inline and can block detected attacks. Detection methods:

- **Signature-based:** matches known attack patterns (Snort, Suricata).
- **Anomaly-based:** detects deviations from normal traffic baselines.
- **Behavioral:** identifies sequences of actions that indicate compromise.

## Summary

Network security relies on cryptography for confidentiality, integrity, and authentication. Symmetric encryption (AES) provides efficient bulk encryption. Asymmetric encryption (RSA, ECC) enables key exchange and digital signatures. PKI binds public keys to identities through CAs. Firewalls enforce access control at the packet, state, or application level. VPNs (IPSec, TLS) protect communication over untrusted networks. IDS/IPS detect and block malicious traffic.

## Exercises

### Review Questions

1. What are the three properties that a cryptographic hash function must satisfy?
2. Why is Diffie-Hellman key exchange vulnerable to man-in-the-middle attacks?
3. What information does an X.509 certificate contain?
4. How does a stateful firewall differ from a packet-filter firewall?
5. What is the difference between IPSec transport mode and tunnel mode?

### Application Problems

6. In RSA with $p = 61$, $q = 53$, compute $n$, $\phi(n)$, and find $d$ for $e = 17$. Encrypt $m = 65$ and decrypt the resulting ciphertext.
7. A network has 1000 hosts. Design a firewall rule set that: allows outbound HTTP/HTTPS and DNS, allows inbound SSH from the management subnet (10.0.0.0/24), allows inbound SMTP to the mail server (10.0.1.10), and drops everything else. Express the rules in stateful firewall syntax.
8. A TLS 1.3 handshake takes 1 RTT for a new connection and 0 RTT for a resumed connection. Explain the security implications of 0-RTT data, particularly regarding replay attacks.

### Challenge Problem

9. **Design a secure messaging protocol.** Two users communicate over an untrusted network. Design a protocol that provides: (a) end-to-end encryption, (b) forward secrecy (compromise of long-term keys does not expose past messages), (c) deniability (neither party can prove to a third party that a specific message was sent), and (d) authentication (each party knows the other's identity). Specify the handshake, key derivation, and message encryption steps. Compare your design with the Signal protocol's double ratchet algorithm.
