# Chapter 2: Cryptography

---

## Learning Objectives

- Distinguish between symmetric and asymmetric encryption algorithms.
- Explain the role of cryptographic hash functions in ensuring data integrity.
- Describe the process of digital signatures and their use for non-repudiation.
- Understand the components and purpose of a Public Key Infrastructure (PKI).
- Discuss the fundamental mechanics of the TLS/SSL protocol for secure communication.

---

## Theory

### Symmetric Encryption
In symmetric-key cryptography, a single shared secret key is used for both encryption and decryption.
- **Characteristics:** Fast and computationally efficient. Ideal for bulk data encryption.
- **Challenge:** The key must be securely shared between parties before communication can begin (the key distribution problem).
- **Common Algorithms:** AES (Advanced Encryption Standard), ChaCha20, DES (obsolete).

### Asymmetric Encryption
Asymmetric-key cryptography uses a pair of mathematically related keys: a **public key** (shared with everyone) and a **private key** (kept secret).
- **Mechanism:** Data encrypted with the public key can only be decrypted with the corresponding private key, and vice versa.
- **Purpose:** Solves the key distribution problem and provides a basis for digital signatures.
- **Common Algorithms:** RSA, Diffie-Hellman, Elliptic Curve Cryptography (ECC).

### Cryptographic Hash Functions
A hash function takes an input of any size and produces a fixed-size output (digest).
- **Properties:**
    1.  **Deterministic:** Same input always produces the same output.
    2.  **Pre-image Resistance:** Computationally infeasible to reverse the hash to find the original input.
    3.  **Collision Resistance:** Computationally infeasible to find two different inputs that produce the same hash output.
- **Common Algorithms:** SHA-256, SHA-3, Blake2.

### Digital Signatures
A digital signature provides authentication, integrity, and non-repudiation.
1.  The sender hashes the message.
2.  The sender encrypts the hash with their **private key** to create the signature.
3.  The recipient decrypts the signature with the sender's **public key** to retrieve the hash.
4.  The recipient hashes the received message and compares it to the decrypted hash. If they match, the signature is valid.

### Public Key Infrastructure (PKI)
PKI is a system of hardware, software, people, and policies used to manage digital certificates.
- **Certificate Authority (CA):** A trusted third party that issues digital certificates.
- **Digital Certificate:** Binds a public key to an identity (using the X.509 standard).
- **Registration Authority (RA):** Verifies the identity of entities requesting certificates.

---

## Examples

### Example 1: Symmetric Encryption with Python (AES)
Using the `cryptography` library to encrypt a message:
```python
from cryptography.fernet import Fernet

# Generate a key
key = Fernet.generate_key()
cipher_suite = Fernet(key)

# Encrypt a message
message = b"Secret university data"
cipher_text = cipher_suite.encrypt(message)
print(f"Encrypted: {cipher_text}")

# Decrypt the message
plain_text = cipher_suite.decrypt(cipher_text)
print(f"Decrypted: {plain_text.decode()}")
```
*Demonstrates the use of a single shared key for both operations.*

### Example 2: Hashing for File Integrity
Verifying that a downloaded file has not been tampered with:
```bash
# Calculate the SHA-256 hash of a file
sha256sum software_update.tar.gz
# Output: a1b2c3d4e5f6g7h8... software_update.tar.gz

# Compare this output with the hash provided on the official website.
```
*Demonstrates how hashes can be used to detect even a single-bit change in a large file.*

---

## Summary

- Symmetric encryption is fast but requires secure key sharing; Asymmetric encryption uses public/private keys for secure exchange and signatures.
- Hash functions provide a "fingerprint" of data, essential for verifying integrity.
- Digital signatures use asymmetric encryption to ensure authenticity and non-repudiation.
- PKI provides the trust framework necessary for global secure communication (like the web's HTTPS).
- Modern security protocols (like TLS) often combine symmetric and asymmetric encryption to achieve both speed and security.

---

## Exercises

### Review Questions
1. Compare and contrast symmetric and asymmetric encryption in terms of speed and key management.
2. What are the three essential properties of a cryptographic hash function?
3. How does a digital signature provide non-repudiation?
4. What is the role of a Certificate Authority (CA) in a PKI?

### Application Problems
1. Explain the step-by-step process of how Alice can send an encrypted message to Bob that only Bob can read, using asymmetric cryptography.
2. Calculate the SHA-256 hash of the string "CyberSecurity" using a tool or programming language of your choice.
3. If an attacker manages to find a collision in a hash function used for digital signatures, what type of attack can they perform?

### Challenge Problem
1. Research and explain the "Diffie-Hellman Key Exchange" algorithm. Show mathematically (using modular arithmetic) how two parties can arrive at a shared secret over an insecure channel without ever transmitting the secret itself.
