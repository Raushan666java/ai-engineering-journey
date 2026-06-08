# 🔐 Cryptography - Complete Deep Dive

## Symmetric Encryption

### What is it?
Same key for encryption and decryption

### AES (Advanced Encryption Standard)
```python
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend
import os

# Generate key (256-bit)
key = os.urandom(32)  # 32 bytes = 256 bits
iv = os.urandom(16)   # Initialization vector

# Encrypt
cipher = Cipher(algorithms.AES(key), modes.CBC(iv), backend=default_backend())
encryptor = cipher.encryptor()
plaintext = b"Secret message"
padded = plaintext + b' ' * (16 - len(plaintext) % 16)  # Padding
ciphertext = encryptor.update(padded) + encryptor.finalize()

# Decrypt
decryptor = cipher.decryptor()
decrypted = decryptor.update(ciphertext) + decryptor.finalize()

# Use Cases: File encryption, database encryption
# Speed: Very fast
# Key Distribution: Problem (need secure channel)
```

### ChaCha20 (Modern Alternative)
```python
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes

key = os.urandom(32)
nonce = os.urandom(16)

cipher = Cipher(algorithms.ChaCha20(key, nonce), mode=None)
encryptor = cipher.encryptor()
ciphertext = encryptor.update(b"Secret message")

# Advantages: Faster than AES on mobile, more secure
```

---

## Asymmetric Encryption

### RSA
```python
from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.hazmat.primitives import hashes

# Generate key pair
private_key = rsa.generate_private_key(
    public_exponent=65537,
    key_size=2048
)
public_key = private_key.public_key()

# Encrypt with public key
message = b"Secret message"
ciphertext = public_key.encrypt(
    message,
    padding.OAEP(
        mgf=padding.MGF1(algorithm=hashes.SHA256()),
        algorithm=hashes.SHA256(),
        label=None
    )
)

# Decrypt with private key
plaintext = private_key.decrypt(
    ciphertext,
    padding.OAEP(
        mgf=padding.MGF1(algorithm=hashes.SHA256()),
        algorithm=hashes.SHA256(),
        label=None
    )
)

# Use Cases: Key exchange, digital signatures
# Speed: Slow (1000x slower than AES)
# Key Distribution: Easy (public key can be shared)
```

### Elliptic Curve (ECC)
```python
from cryptography.hazmat.primitives.asymmetric import ec

# Generate key pair (smaller keys, same security)
private_key = ec.generate_private_key(ec.SECP256R1())
public_key = private_key.public_key()

# Advantages:
# - 256-bit ECC = 3072-bit RSA security
# - Faster than RSA
# - Smaller keys
```

---

## Hashing

### SHA-256
```python
import hashlib

# Create hash
data = b"Important data"
hash_value = hashlib.sha256(data).hexdigest()

# Properties:
# - One-way (can't reverse)
# - Deterministic (same input = same output)
# - Avalanche effect (small change = completely different hash)
# - Collision resistant

# Use Cases: Data integrity, password storage (with salt)
```

### Password Hashing (bcrypt)
```python
import bcrypt

# Hash password
password = b"user_password"
salt = bcrypt.gensalt(rounds=12)  # Cost factor
hashed = bcrypt.hashpw(password, salt)

# Verify
if bcrypt.checkpw(password, hashed):
    print("Password correct")

# Why bcrypt?
# - Slow by design (prevents brute force)
# - Automatic salt
# - Adaptive (can increase cost over time)
```

### Argon2 (Modern Alternative)
```python
from argon2 import PasswordHasher

ph = PasswordHasher()

# Hash
hashed = ph.hash("user_password")

# Verify
try:
    ph.verify(hashed, "user_password")
    print("Password correct")
except:
    print("Password incorrect")

# Advantages: Winner of Password Hashing Competition
# - Memory-hard (resistant to GPU attacks)
# - Configurable memory, time, parallelism
```

---

## Digital Signatures

### RSA Signature
```python
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import padding

# Sign with private key
message = b"I agree to terms"
signature = private_key.sign(
    message,
    padding.PSS(
        mgf=padding.MGF1(hashes.SHA256()),
        salt_length=padding.PSS.MAX_LENGTH
    ),
    hashes.SHA256()
)

# Verify with public key
try:
    public_key.verify(
        signature,
        message,
        padding.PSS(
            mgf=padding.MGF1(hashes.SHA256()),
            salt_length=padding.PSS.MAX_LENGTH
        ),
        hashes.SHA256()
    )
    print("Signature valid ✅")
except:
    print("Signature invalid ❌")

# Use Cases: Software signing, document signing, blockchain
```

---

## SSL/TLS

### How HTTPS Works
```
1. Client Hello
   - Supported cipher suites
   - Random number

2. Server Hello
   - Selected cipher suite
   - Server certificate (public key)
   - Random number

3. Key Exchange
   - Client generates pre-master secret
   - Encrypts with server's public key
   - Sends to server

4. Session Keys
   - Both derive session keys from:
     * Pre-master secret
     * Client random
     * Server random

5. Encrypted Communication
   - All data encrypted with session keys (symmetric)
```

### Implement HTTPS in Python
```python
from flask import Flask
import ssl

app = Flask(__name__)

# Generate self-signed certificate (for testing)
# openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365

context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)
context.load_cert_chain('cert.pem', 'key.pem')

app.run(ssl_context=context, host='0.0.0.0', port=443)

# Production: Use Let's Encrypt for free certificates
```

---

## Key Management

### Key Derivation (PBKDF2)
```python
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
import os

# Derive key from password
password = b"user_password"
salt = os.urandom(16)

kdf = PBKDF2HMAC(
    algorithm=hashes.SHA256(),
    length=32,
    salt=salt,
    iterations=100000
)
key = kdf.derive(password)

# Use Cases: Encrypt files with password
```

### Key Storage
```python
# Bad: Hardcoded
SECRET_KEY = "my_secret_key"  # ❌

# Good: Environment variable
import os
SECRET_KEY = os.getenv("SECRET_KEY")  # ✅

# Better: Key management service
import boto3
kms = boto3.client('kms')
response = kms.decrypt(CiphertextBlob=encrypted_key)
SECRET_KEY = response['Plaintext']  # ✅✅
```

---

## Common Attacks

### 1. Brute Force
```python
# Attack
import hashlib
password_hash = "5f4dcc3b5aa765d61d8327deb882cf99"  # MD5 hash

wordlist = ["password", "123456", "admin", ...]
for word in wordlist:
    if hashlib.md5(word.encode()).hexdigest() == password_hash:
        print(f"Password found: {word}")
        break

# Defense: Use slow hashing (bcrypt, argon2)
```

### 2. Rainbow Tables
```python
# Attack: Pre-computed hash tables
# password → hash lookup

# Defense: Salt
import bcrypt
salt = bcrypt.gensalt()  # Random salt per password
hashed = bcrypt.hashpw(password, salt)
# Same password = different hash (due to different salt)
```

### 3. Timing Attacks
```python
# Vulnerable
def verify_token(user_token, valid_token):
    if user_token == valid_token:  # ❌ Stops at first mismatch
        return True
    return False

# Secure: Constant-time comparison
import hmac
def verify_token(user_token, valid_token):
    return hmac.compare_digest(user_token, valid_token)  # ✅
```

---

## Best Practices

### Encryption Checklist
```
✅ Use AES-256 for symmetric encryption
✅ Use RSA-2048+ or ECC-256+ for asymmetric
✅ Use bcrypt/argon2 for passwords
✅ Use SHA-256+ for hashing
✅ Always use random IVs/nonces
✅ Use authenticated encryption (GCM mode)
✅ Rotate keys regularly
✅ Store keys securely (KMS)
✅ Use TLS 1.2+ for transport
✅ Implement perfect forward secrecy
```

### Common Mistakes
```
❌ Using ECB mode (patterns visible)
❌ Reusing IVs/nonces
❌ Using MD5/SHA1 (broken)
❌ Rolling your own crypto
❌ Hardcoding keys
❌ Using weak random (random.random())
❌ Not using salt for passwords
❌ Storing passwords in plain text
```

---

## Summary

### Algorithm Selection
```
Purpose              Algorithm        Key Size
─────────────────────────────────────────────
Symmetric encryption AES-GCM         256-bit
Asymmetric encryption RSA            2048-bit
                     ECC             256-bit
Password hashing     bcrypt          Cost 12+
                     Argon2          Memory-hard
General hashing      SHA-256         256-bit
Digital signatures   RSA-PSS         2048-bit
                     ECDSA           256-bit
Key derivation       PBKDF2          100k+ iterations
```

### Quick Reference
```python
# Encrypt file
from cryptography.fernet import Fernet
key = Fernet.generate_key()
f = Fernet(key)
encrypted = f.encrypt(data)

# Hash password
import bcrypt
hashed = bcrypt.hashpw(password, bcrypt.gensalt())

# Sign data
signature = private_key.sign(data)

# Verify signature
public_key.verify(signature, data)
```

---

**Next:** [04_Penetration_Testing.md](./04_Penetration_Testing.md)
