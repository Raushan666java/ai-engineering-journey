# Cryptography

## Learning Objectives

After completing this chapter, students will be able to distinguish symmetric and asymmetric encryption, select appropriate cipher modes for given use cases, explain the mathematical foundations of RSA and elliptic curve cryptography, evaluate hash function properties and identify weaknesses in MD5 and SHA-1, describe the TLS handshake protocol, manage cryptographic keys throughout their lifecycle, and apply PGP/GPG for secure communication.

## Theory

### Symmetric Encryption

Symmetric encryption uses a single shared key for both encryption and decryption. The Advanced Encryption Standard (AES) operates on 128-bit blocks with key sizes of 128, 192, or 256 bits. AES replaced the Data Encryption Standard (DES), whose 56-bit key is vulnerable to brute force. Triple DES (3DES) applies DES three times but is computationally inefficient and deprecated. Blowfish is a fast 64-bit block cipher; its successor Twofish uses 128-bit blocks. ChaCha20 is a stream cipher providing high performance on mobile devices, widely adopted in TLS and SSH.

### Block Cipher Modes

Electronic Codebook (ECB) encrypts each block independently, producing identical ciphertext for identical plaintext blocks, leaking pattern information. Cipher Block Chaining (CBC) XORs each plaintext block with the previous ciphertext block before encryption, requiring an initialisation vector (IV). Cipher Feedback (CFB) and Output Feedback (OFB) convert a block cipher into a stream cipher. Counter (CTR) mode encrypts incrementing counter values, enabling parallel encryption and decryption. Galois Counter Mode (GCM) combines CTR mode with authentication, providing both confidentiality and integrity.

### Asymmetric Encryption

Asymmetric encryption uses a public-private key pair. RSA security relies on the computational difficulty of factoring large semiprime numbers. Typical key sizes range from 2048 to 4096 bits. Elliptic Curve Cryptography (ECC) provides equivalent security with significantly smaller keys, based on the elliptic curve discrete logarithm problem. The Diffie-Hellman key exchange enables two parties to establish a shared secret over an insecure channel. Elliptic Curve Diffie-Hellman (ECDH) provides the same functionality with ECC efficiency.

### Hash Functions

Cryptographic hash functions map arbitrary-length input to fixed-length output with three critical properties: preimage resistance (given a hash, finding any input that produces it is infeasible), second preimage resistance (given an input, finding a different input with the same hash is infeasible), and collision resistance (finding any two inputs with the same hash is infeasible). SHA-256 and SHA-3 are current standards. MD5 produces 128-bit hashes and is collision-broken; it must not be used for security. SHA-1 (160-bit) is deprecated due to demonstrated collision attacks.

### Digital Signatures

Digital signatures provide authentication, integrity, and non-repudiation. The signer hashes the message and encrypts the hash with their private key. The verifier decrypts the hash with the signer's public key and compares it to a freshly computed hash. Standards include RSA-PSS, ECDSA, and EdDSA (Ed25519).

### Public Key Infrastructure

A PKI binds public keys to identities through certificates. X.509 certificates contain the subject identity, public key, issuer identity, validity period, and digital signature. Certificate Authorities (CAs) issue certificates after verifying identity. A certificate chain traces from an end-entity certificate through intermediate CAs to a trusted root CA. Certificate Revocation Lists (CRLs) and the Online Certificate Status Protocol (OCSP) provide revocation status.

### TLS Protocol

Transport Layer Security (TLS) provides authenticated, encrypted communication. The TLS handshake begins with a ClientHello specifying supported cipher suites and TLS version. The server responds with its certificate and selects parameters. For key exchange, the client generates a pre-master secret, encrypts it with the server's public key (RSA key exchange), or both parties contribute to key agreement via Diffie-Hellman (preferred). Certificate verification confirms the server's identity. Finished messages confirm the handshake integrity. TLS 1.3 reduces handshake round trips to one and removes insecure options.

### Key Management

Key management encompasses generation, distribution, storage, rotation, and destruction. Keys must be generated using cryptographically secure random number generators. Hardware Security Modules (HSMs) and Trusted Platform Modules (TPMs) provide tamper-resistant key storage. Key rotation limits exposure from key compromise. Key destruction must render the key irrecoverable, accomplished through cryptographic erase or physical destruction.

### PGP and GPG

Pretty Good Privacy (PGP) and its open implementation GNU Privacy Guard (GPG) provide email and file encryption. The Web of Trust model allows users to sign each other's keys, creating a decentralised trust network. GPG operations include key generation (`--gen-key`), encryption (`--encrypt`), signing (`--sign`), and verification (`--verify`).

## Examples

### AES-CBC vs AES-GCM

AES-CBC with HMAC provides confidentiality and integrity but requires two separate operations and careful IV management. AES-GCM provides both in a single mode, is faster, and is the recommended choice for TLS and most modern applications. CBC is vulnerable to padding oracle attacks if error messages leak padding validity.

### TLS 1.3 Handshake

The TLS 1.3 handshake completes in one round trip. The client sends a ClientHello with key share (from ECDHE). The server responds with ServerHello, its certificate, certificate verification, and finished message. The client sends finished message. All handshake messages after ServerHello are encrypted, protecting certificate privacy.

### GPG Encryption

To encrypt a file for recipient: `gpg --encrypt --recipient alice@example.com document.pdf`. To decrypt: `gpg --decrypt document.pdf.gpg`. To sign: `gpg --sign document.pdf`. To verify: `gpg --verify document.pdf.sig`.

## Summary

Cryptography is the engineering of secure communication in the presence of adversaries. Symmetric ciphers provide performance; asymmetric ciphers enable key distribution. Hash functions ensure integrity; digital signatures provide non-repudiation. PKI and TLS enable secure communications across the internet. Key management is often the most vulnerable component in practice. Subsequent chapters will apply these primitives to network security, web security, and beyond.

## Exercises

### Review Questions

1. Why is ECB mode considered dangerous for encrypting structured data? Provide a visual example.
2. Compare RSA-2048 and ECC-256 in terms of security level, computational cost, and key size.
3. Explain why MD5 is unsuitable for digital signatures but may still be acceptable for non-security checksums. Reference specific attacks.
4. Describe the role of the Certificate Authority in the PKI model. What happens if a root CA is compromised?
5. Differentiate between preimage resistance and collision resistance. Which property is more relevant for password storage?

### Application Problems

1. Using OpenSSL, generate an RSA key pair, create a self-signed certificate, and configure a TLS listener on port 443. Verify the connection with `openssl s_client`.
2. Encrypt a file with AES-256-GCM using GPG. Verify that tampering with the ciphertext causes decryption to fail. Document the commands and observations.
3. Analyse the certificate chain of any HTTPS website. Identify the root CA, intermediate CAs, and certificate properties including validity period, key usage, and signature algorithm.

### Challenge Problem

Design a secure messaging protocol for a two-party chat application. Specify the cryptographic primitives for encryption, authentication, and key exchange. Address forward secrecy (compromise of long-term keys does not compromise past sessions) and deniability (messages are not digitally attributable to the sender). Implement a proof-of-concept in Python using the `cryptography` library, demonstrating key agreement, message encryption, and verification.
