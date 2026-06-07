# 🔐 **MODULE 05: CRYPTOGRAPHY**
## Encryption, Key Management & Cryptographic Protocols

---

## 🎯 **CRYPTOGRAPHY FUNDAMENTALS**

### **Cryptography Principles**
- **Confidentiality:** Protecting information from unauthorized access
- **Integrity:** Ensuring data has not been modified
- **Authentication:** Verifying identity and origin of data
- **Non-Repudiation:** Preventing denial of actions or transactions
- **Key Management:** Secure generation, storage, and distribution of keys
- **Digital Signatures:** Providing authenticity and integrity verification

### **Cryptographic Systems Architecture**
```python
class CryptographicSystem:
    def __init__(self):
        self.components = {
            'algorithms': 'Encryption/decryption methods',
            'keys': 'Cryptographic key management',
            'protocols': 'Secure communication protocols',
            'certificates': 'Digital certificate management',
            'randomness': 'Cryptographically secure random number generation'
        }

    def implement_crypto_system(self):
        return {
            'symmetric': self.configure_symmetric_crypto(),
            'asymmetric': self.configure_asymmetric_crypto(),
            'hashing': self.configure_hash_functions(),
            'key_management': self.implement_key_management(),
            'protocols': self.secure_communication_protocols()
        }
```

### **Cryptography Types**
- **Symmetric Cryptography:** Same key for encryption/decryption
- **Asymmetric Cryptography:** Public/private key pairs
- **Hash Functions:** One-way data transformation
- **Digital Signatures:** Authentication and integrity
- **Key Exchange:** Secure key distribution protocols

---

## 🔑 **SYMMETRIC ENCRYPTION**

### **Block Ciphers**
- **AES (Advanced Encryption Standard):** 128/192/256-bit keys
- **DES (Data Encryption Standard):** 56-bit keys (deprecated)
- **3DES (Triple DES):** Enhanced DES with three keys
- **Blowfish/Twofish:** Alternative symmetric algorithms
- **Block Cipher Modes:** ECB, CBC, CTR, GCM modes

### **Stream Ciphers**
- **RC4:** Stream cipher (deprecated due to vulnerabilities)
- **ChaCha20:** Modern stream cipher for high performance
- **Salsa20:** Stream cipher with strong security properties
- **Key Stream Generation:** Pseudo-random key stream creation
- **Initialization Vectors:** Random values for encryption uniqueness

### **Symmetric Encryption Implementation**
```python
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend
import os

class SymmetricEncryption:
    def __init__(self, key_size=32):  # 256-bit key
        self.key = os.urandom(key_size)

    def encrypt_aes_gcm(self, plaintext):
        # Generate random nonce
        nonce = os.urandom(12)

        # Create cipher
        cipher = Cipher(
            algorithms.AES(self.key),
            modes.GCM(nonce),
            backend=default_backend()
        )

        # Encrypt data
        encryptor = cipher.encryptor()
        ciphertext = encryptor.update(plaintext) + encryptor.finalize()

        return nonce, ciphertext, encryptor.tag

    def decrypt_aes_gcm(self, nonce, ciphertext, tag):
        # Create cipher for decryption
        cipher = Cipher(
            algorithms.AES(self.key),
            modes.GCM(nonce, tag),
            backend=default_backend()
        )

        # Decrypt data
        decryptor = cipher.decryptor()
        plaintext = decryptor.update(ciphertext) + decryptor.finalize()

        return plaintext
```

---

## 🔐 **ASYMMETRIC ENCRYPTION**

### **RSA Algorithm**
- **Key Generation:** Large prime number multiplication
- **Public Key:** Encryption key (can be shared)
- **Private Key:** Decryption key (must be secret)
- **Key Sizes:** 2048-bit, 3072-bit, 4096-bit recommended
- **Padding Schemes:** OAEP, PKCS#1 v1.5

### **Elliptic Curve Cryptography (ECC)**
- **ECDH:** Elliptic curve Diffie-Hellman key exchange
- **ECDSA:** Elliptic curve digital signature algorithm
- **Curve Types:** secp256r1, secp384r1, Curve25519
- **Key Sizes:** Smaller keys with equivalent security
- **Performance:** Faster operations with smaller keys

### **Asymmetric Encryption Implementation**
```python
from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.hazmat.primitives import hashes, serialization

class AsymmetricEncryption:
    def __init__(self):
        # Generate RSA key pair
        self.private_key = rsa.generate_private_key(
            public_exponent=65537,
            key_size=2048,
            backend=default_backend()
        )
        self.public_key = self.private_key.public_key()

    def encrypt_rsa(self, plaintext):
        # Encrypt with public key
        ciphertext = self.public_key.encrypt(
            plaintext,
            padding.OAEP(
                mgf=padding.MGF1(algorithm=hashes.SHA256()),
                algorithm=hashes.SHA256(),
                label=None
            )
        )
        return ciphertext

    def decrypt_rsa(self, ciphertext):
        # Decrypt with private key
        plaintext = self.private_key.decrypt(
            ciphertext,
            padding.OAEP(
                mgf=padding.MGF1(algorithm=hashes.SHA256()),
                algorithm=hashes.SHA256(),
                label=None
            )
        )
        return plaintext
```

---

## 🏗️ **HASH FUNCTIONS & DIGITAL SIGNATURES**

### **Cryptographic Hash Functions**
- **SHA-256:** 256-bit hash output, widely used
- **SHA-3:** Next-generation hash function
- **Blake2:** High-performance hash function
- **Properties:** Pre-image resistance, second pre-image resistance, collision resistance
- **Applications:** Password hashing, digital signatures, integrity checking

### **Digital Signature Algorithms**
- **RSA Digital Signatures:** RSA with hash functions
- **ECDSA:** Elliptic curve digital signatures
- **EdDSA:** Edwards curve digital signatures
- **Signature Verification:** Public key signature validation
- **Certificate Signing:** CA-signed certificates

### **Hash Functions and Signatures**
```python
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import padding

class DigitalSignatures:
    def __init__(self, private_key, public_key):
        self.private_key = private_key
        self.public_key = public_key

    def create_signature(self, message):
        # Create digital signature
        signature = self.private_key.sign(
            message,
            padding.PSS(
                mgf=padding.MGF1(hashes.SHA256()),
                salt_length=padding.PSS.MAX_LENGTH
            ),
            hashes.SHA256()
        )
        return signature

    def verify_signature(self, message, signature):
        # Verify digital signature
        try:
            self.public_key.verify(
                signature,
                message,
                padding.PSS(
                    mgf=padding.MGF1(hashes.SHA256()),
                    salt_length=padding.PSS.MAX_LENGTH
                ),
                hashes.SHA256()
            )
            return True
        except:
            return False

    def hash_message(self, message):
        # Create cryptographic hash
        digest = hashes.Hash(hashes.SHA256(), backend=default_backend())
        digest.update(message)
        return digest.finalize()
```

---

## 🔑 **KEY MANAGEMENT**

### **Key Lifecycle Management**
- **Key Generation:** Secure random key creation
- **Key Distribution:** Secure key exchange protocols
- **Key Storage:** Hardware security modules (HSM)
- **Key Rotation:** Periodic key replacement
- **Key Revocation:** Compromised key invalidation

### **Key Exchange Protocols**
- **Diffie-Hellman:** Key exchange over public channels
- **ECDH:** Elliptic curve Diffie-Hellman
- **RSA Key Transport:** Public key encryption of symmetric keys
- **Perfect Forward Secrecy:** Session key protection
- **Quantum-Resistant Algorithms:** Post-quantum cryptography

### **Public Key Infrastructure (PKI)**
```python
class PublicKeyInfrastructure:
    def __init__(self):
        self.certificates = {}
        self.crl = []  # Certificate Revocation List

    def create_certificate(self, subject, public_key, issuer_private_key):
        # Create X.509 certificate
        from cryptography import x509
        from cryptography.x509.oid import NameOID

        subject_name = x509.Name([
            x509.NameAttribute(NameOID.COMMON_NAME, subject),
        ])

        # Certificate builder
        cert = x509.CertificateBuilder().subject_name(
            subject_name
        ).issuer_name(
            subject_name  # Self-signed for example
        ).public_key(
            public_key
        ).serial_number(
            x509.random_serial_number()
        ).not_valid_before(
            datetime.utcnow()
        ).not_valid_after(
            datetime.utcnow() + timedelta(days=365)
        ).add_extension(
            x509.SubjectAlternativeName([
                x509.DNSName(subject),
            ]),
            critical=False,
        ).sign(issuer_private_key, hashes.SHA256(), default_backend())

        return cert

    def verify_certificate_chain(self, certificate, trusted_anchors):
        # Certificate chain validation
        # Implementation would verify signature chain
        pass
```

---

## 📡 **CRYPTOGRAPHIC PROTOCOLS**

### **Transport Layer Security (TLS)**
- **SSL/TLS Handshake:** Secure connection establishment
- **Certificate Validation:** Server certificate verification
- **Cipher Suite Negotiation:** Algorithm selection
- **Session Resumption:** Optimized reconnections
- **Forward Secrecy:** Perfect forward secrecy implementation

### **Secure Communication Protocols**
- **HTTPS:** Secure HTTP with TLS
- **SSH:** Secure shell protocol
- **IPsec:** Network layer security
- **PGP/GPG:** Email encryption and signing
- **S/MIME:** Secure email messaging

### **Cryptographic Attacks & Mitigations**
- **Brute Force:** Key length and complexity
- **Dictionary Attacks:** Password policies
- **Rainbow Tables:** Salted password hashing
- **Man-in-the-Middle:** Certificate pinning
- **Side-Channel Attacks:** Constant-time operations

---

## 🎯 **KEY LEARNING OBJECTIVES**

- ✅ Understand cryptography principles and algorithms
- ✅ Implement symmetric and asymmetric encryption
- ✅ Master hash functions and digital signatures
- ✅ Manage cryptographic keys and certificates
- ✅ Secure communication with cryptographic protocols
- ✅ Protect against cryptographic attacks and vulnerabilities

---

## 🛠️ **ESSENTIAL TOOLS & TECHNIQUES**

- **Cryptography Libraries:** OpenSSL, cryptography (Python), Bouncy Castle
- **Key Management:** HashiCorp Vault, AWS KMS, Azure Key Vault
- **Certificate Management:** Let's Encrypt, DigiCert, GlobalSign
- **Encryption Tools:** GPG, VeraCrypt, BitLocker
- **Protocol Analyzers:** Wireshark, ssldump, SSL Labs
- **Vulnerability Scanners:** SSLyze, testssl.sh

---

## 📚 **QUICK REFERENCE**

| Algorithm Type | Examples | Key Sizes | Use Cases |
|----------------|----------|-----------|-----------|
| **Symmetric** | AES, ChaCha20 | 128-256 bits | Bulk encryption, fast operations |
| **Asymmetric** | RSA, ECC | 2048-4096 bits | Key exchange, digital signatures |
| **Hash Functions** | SHA-256, SHA-3 | 256-512 bits | Integrity checking, password hashing |
| **Key Exchange** | ECDH, DH | Curve sizes | Secure key distribution |
| **Digital Signatures** | ECDSA, RSA-PSS | Key-dependent | Authentication, non-repudiation |

---

*Module 05 provides essential knowledge for implementing secure cryptographic systems and protecting sensitive data.*