# Week 8: Security & Infrastructure - Complete Content

> **Master authentication, authorization, encryption, API security, and infrastructure deployment**

## 📚 Week Overview

**Duration**: 7 days  
**Difficulty**: Advanced  
**Prerequisites**: Weeks 1-7 completed

### Learning Objectives

By the end of this week, you will:
- ✅ Implement secure authentication systems (JWT, OAuth 2.0)
- ✅ Design authorization with RBAC and ABAC
- ✅ Master encryption (at rest, in transit, end-to-end)
- ✅ Secure APIs (rate limiting, API keys, CORS)
- ✅ Deploy with Docker and Kubernetes
- ✅ Implement Infrastructure as Code
- ✅ Build cloud-native applications

---

## 🎯 Day 1: Authentication & Authorization

### 1.1 JWT (JSON Web Tokens)

```python
import jwt
import hashlib
import secrets
from datetime import datetime, timedelta
from typing import Dict, Optional

class AuthService:
    """Production-grade authentication service"""
    
    def __init__(self, secret_key: str):
        self.secret_key = secret_key
        self.refresh_tokens: Dict[str, str] = {}  # user_id -> refresh_token
    
    @staticmethod
    def hash_password(password: str, salt: Optional[str] = None) -> tuple:
        """Hash password with salt"""
        if salt is None:
            salt = secrets.token_hex(16)
        
        # Use PBKDF2 with SHA256
        password_hash = hashlib.pbkdf2_hmac(
            'sha256',
            password.encode('utf-8'),
            salt.encode('utf-8'),
            iterations=100000
        ).hex()
        
        return password_hash, salt
    
    @staticmethod
    def verify_password(password: str, password_hash: str, salt: str) -> bool:
        """Verify password against hash"""
        new_hash, _ = AuthService.hash_password(password, salt)
        return new_hash == password_hash
    
    def generate_access_token(self, user_id: str, roles: list, expires_in_minutes: int = 15) -> str:
        """Generate short-lived access token"""
        payload = {
            "user_id": user_id,
            "roles": roles,
            "type": "access",
            "exp": datetime.utcnow() + timedelta(minutes=expires_in_minutes),
            "iat": datetime.utcnow()
        }
        return jwt.encode(payload, self.secret_key, algorithm="HS256")
    
    def generate_refresh_token(self, user_id: str, expires_in_days: int = 30) -> str:
        """Generate long-lived refresh token"""
        payload = {
            "user_id": user_id,
            "type": "refresh",
            "exp": datetime.utcnow() + timedelta(days=expires_in_days),
            "iat": datetime.utcnow()
        }
        token = jwt.encode(payload, self.secret_key, algorithm="HS256")
        self.refresh_tokens[user_id] = token
        return token
    
    def verify_token(self, token: str, token_type: str = "access") -> Dict:
        """Verify and decode token"""
        try:
            payload = jwt.decode(token, self.secret_key, algorithms=["HS256"])
            
            if payload.get("type") != token_type:
                raise Exception(f"Invalid token type. Expected {token_type}")
            
            return payload
        except jwt.ExpiredSignatureError:
            raise Exception("Token expired")
        except jwt.InvalidTokenError:
            raise Exception("Invalid token")
    
    def refresh_access_token(self, refresh_token: str) -> str:
        """Generate new access token using refresh token"""
        payload = self.verify_token(refresh_token, token_type="refresh")
        user_id = payload["user_id"]
        
        # Verify refresh token matches stored one
        if self.refresh_tokens.get(user_id) != refresh_token:
            raise Exception("Invalid refresh token")
        
        # Generate new access token (fetch roles from DB in production)
        return self.generate_access_token(user_id, roles=["user"])
    
    def revoke_refresh_token(self, user_id: str):
        """Revoke refresh token (logout)"""
        if user_id in self.refresh_tokens:
            del self.refresh_tokens[user_id]

# Demo: JWT Authentication Flow
print("🔐 JWT Authentication Demo\n")

auth = AuthService(secret_key="your-super-secret-key-change-in-production")

# 1. User Registration
print("1️⃣ User Registration:")
password = "MySecurePassword123!"
password_hash, salt = auth.hash_password(password)
print(f"   Password hash: {password_hash[:50]}...")
print(f"   Salt: {salt}")

# 2. User Login
print("\n2️⃣ User Login:")
is_valid = auth.verify_password(password, password_hash, salt)
print(f"   Password valid: {is_valid}")

if is_valid:
    access_token = auth.generate_access_token("user_123", roles=["user", "admin"])
    refresh_token = auth.generate_refresh_token("user_123")
    print(f"   Access token: {access_token[:50]}...")
    print(f"   Refresh token: {refresh_token[:50]}...")

# 3. Verify Access Token
print("\n3️⃣ Verify Access Token:")
try:
    payload = auth.verify_token(access_token)
    print(f"   User ID: {payload['user_id']}")
    print(f"   Roles: {payload['roles']}")
    print(f"   Expires: {datetime.fromtimestamp(payload['exp'])}")
except Exception as e:
    print(f"   Error: {e}")

# 4. Refresh Token Flow
print("\n4️⃣ Refresh Access Token:")
try:
    new_access_token = auth.refresh_access_token(refresh_token)
    print(f"   New access token: {new_access_token[:50]}...")
except Exception as e:
    print(f"   Error: {e}")

# 5. Logout
print("\n5️⃣ Logout:")
auth.revoke_refresh_token("user_123")
print("   Refresh token revoked")
```

### 1.2 Role-Based Access Control (RBAC)

```python
from enum import Enum
from typing import Set, List
from dataclasses import dataclass

class Permission(Enum):
    """System permissions"""
    READ = "read"
    WRITE = "write"
    DELETE = "delete"
    ADMIN = "admin"
    MANAGE_USERS = "manage_users"
    VIEW_ANALYTICS = "view_analytics"
    EXPORT_DATA = "export_data"

@dataclass
class Role:
    """Role with permissions"""
    name: str
    permissions: Set[Permission]
    description: str = ""

class RBACManager:
    """Role-Based Access Control Manager"""
    
    def __init__(self):
        self.roles: Dict[str, Role] = {}
        self.user_roles: Dict[str, Set[str]] = {}  # user_id -> set of role names
        self._initialize_default_roles()
    
    def _initialize_default_roles(self):
        """Create default roles"""
        self.create_role("guest", {Permission.READ}, "Guest user with read-only access")
        self.create_role("user", {Permission.READ, Permission.WRITE}, "Regular user")
        self.create_role("moderator", {Permission.READ, Permission.WRITE, Permission.DELETE}, "Content moderator")
        self.create_role("admin", {
            Permission.READ, Permission.WRITE, Permission.DELETE,
            Permission.ADMIN, Permission.MANAGE_USERS, Permission.VIEW_ANALYTICS, Permission.EXPORT_DATA
        }, "Full system administrator")
    
    def create_role(self, name: str, permissions: Set[Permission], description: str = ""):
        """Create a new role"""
        self.roles[name] = Role(name, permissions, description)
    
    def assign_role(self, user_id: str, role_name: str):
        """Assign role to user"""
        if role_name not in self.roles:
            raise Exception(f"Role '{role_name}' does not exist")
        
        if user_id not in self.user_roles:
            self.user_roles[user_id] = set()
        
        self.user_roles[user_id].add(role_name)
    
    def revoke_role(self, user_id: str, role_name: str):
        """Revoke role from user"""
        if user_id in self.user_roles:
            self.user_roles[user_id].discard(role_name)
    
    def get_user_permissions(self, user_id: str) -> Set[Permission]:
        """Get all permissions for user"""
        permissions = set()
        
        for role_name in self.user_roles.get(user_id, set()):
            if role_name in self.roles:
                permissions.update(self.roles[role_name].permissions)
        
        return permissions
    
    def has_permission(self, user_id: str, permission: Permission) -> bool:
        """Check if user has specific permission"""
        return permission in self.get_user_permissions(user_id)
    
    def has_any_permission(self, user_id: str, permissions: List[Permission]) -> bool:
        """Check if user has any of the specified permissions"""
        user_perms = self.get_user_permissions(user_id)
        return any(perm in user_perms for perm in permissions)
    
    def has_all_permissions(self, user_id: str, permissions: List[Permission]) -> bool:
        """Check if user has all specified permissions"""
        user_perms = self.get_user_permissions(user_id)
        return all(perm in user_perms for perm in permissions)

# Demo: RBAC
print("\n🔐 Role-Based Access Control Demo\n")

rbac = RBACManager()

# Assign roles
rbac.assign_role("user_001", "guest")
rbac.assign_role("user_002", "user")
rbac.assign_role("user_003", "moderator")
rbac.assign_role("user_004", "admin")

# Check permissions
users = [
    ("user_001", "Guest"),
    ("user_002", "Regular User"),
    ("user_003", "Moderator"),
    ("user_004", "Admin")
]

print("Permission Matrix:")
print(f"{'User':<15} {'READ':<8} {'WRITE':<8} {'DELETE':<8} {'ADMIN':<8}")
print("-" * 50)

for user_id, user_type in users:
    read = "✅" if rbac.has_permission(user_id, Permission.READ) else "❌"
    write = "✅" if rbac.has_permission(user_id, Permission.WRITE) else "❌"
    delete = "✅" if rbac.has_permission(user_id, Permission.DELETE) else "❌"
    admin = "✅" if rbac.has_permission(user_id, Permission.ADMIN) else "❌"
    
    print(f"{user_type:<15} {read:<8} {write:<8} {delete:<8} {admin:<8}")
```

### 1.3 OAuth 2.0 Flow

```python
import secrets
from typing import Dict, Optional

class OAuthProvider:
    """OAuth 2.0 Authorization Server"""
    
    def __init__(self):
        self.authorization_codes: Dict[str, Dict] = {}
        self.access_tokens: Dict[str, Dict] = {}
        self.clients: Dict[str, Dict] = {}
    
    def register_client(self, client_name: str, redirect_uri: str) -> tuple:
        """Register OAuth client"""
        client_id = f"client_{secrets.token_hex(8)}"
        client_secret = secrets.token_hex(32)
        
        self.clients[client_id] = {
            "name": client_name,
            "secret": client_secret,
            "redirect_uri": redirect_uri
        }
        
        return client_id, client_secret
    
    def authorize(self, client_id: str, redirect_uri: str, scope: str, user_id: str) -> str:
        """Generate authorization code (Step 1: Authorization Code)"""
        if client_id not in self.clients:
            raise Exception("Invalid client_id")
        
        if self.clients[client_id]["redirect_uri"] != redirect_uri:
            raise Exception("Redirect URI mismatch")
        
        # Generate authorization code
        code = secrets.token_hex(16)
        
        self.authorization_codes[code] = {
            "client_id": client_id,
            "redirect_uri": redirect_uri,
            "scope": scope,
            "user_id": user_id
        }
        
        return code
    
    def exchange_code_for_token(self, code: str, client_id: str, client_secret: str) -> Dict:
        """Exchange authorization code for access token (Step 2: Token Exchange)"""
        if code not in self.authorization_codes:
            raise Exception("Invalid authorization code")
        
        auth_data = self.authorization_codes[code]
        
        if auth_data["client_id"] != client_id:
            raise Exception("Client ID mismatch")
        
        if self.clients[client_id]["secret"] != client_secret:
            raise Exception("Invalid client secret")
        
        # Generate access token
        access_token = secrets.token_hex(32)
        refresh_token = secrets.token_hex(32)
        
        self.access_tokens[access_token] = {
            "user_id": auth_data["user_id"],
            "scope": auth_data["scope"],
            "client_id": client_id
        }
        
        # Remove used authorization code
        del self.authorization_codes[code]
        
        return {
            "access_token": access_token,
            "refresh_token": refresh_token,
            "token_type": "Bearer",
            "expires_in": 3600,
            "scope": auth_data["scope"]
        }
    
    def verify_access_token(self, access_token: str) -> Optional[Dict]:
        """Verify access token"""
        return self.access_tokens.get(access_token)

# Demo: OAuth 2.0 Authorization Code Flow
print("\n🔐 OAuth 2.0 Authorization Code Flow Demo\n")

oauth = OAuthProvider()

# 1. Register client application
print("1️⃣ Register OAuth Client:")
client_id, client_secret = oauth.register_client(
    client_name="My Awesome App",
    redirect_uri="https://myapp.com/callback"
)
print(f"   Client ID: {client_id}")
print(f"   Client Secret: {client_secret[:20]}...")

# 2. User authorizes application
print("\n2️⃣ User Authorizes Application:")
auth_code = oauth.authorize(
    client_id=client_id,
    redirect_uri="https://myapp.com/callback",
    scope="read write",
    user_id="user_123"
)
print(f"   Authorization Code: {auth_code}")

# 3. Exchange code for access token
print("\n3️⃣ Exchange Code for Access Token:")
tokens = oauth.exchange_code_for_token(auth_code, client_id, client_secret)
print(f"   Access Token: {tokens['access_token'][:20]}...")
print(f"   Refresh Token: {tokens['refresh_token'][:20]}...")
print(f"   Expires In: {tokens['expires_in']} seconds")
print(f"   Scope: {tokens['scope']}")

# 4. Use access token
print("\n4️⃣ Verify Access Token:")
token_data = oauth.verify_access_token(tokens['access_token'])
if token_data:
    print(f"   Valid! User ID: {token_data['user_id']}")
    print(f"   Scope: {token_data['scope']}")
else:
    print("   Invalid token")
```

---

## 🎯 Day 2: Encryption

### 2.1 Symmetric Encryption (AES)

```python
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend
import os
import base64

class EncryptionService:
    """Encryption service with multiple algorithms"""
    
    def __init__(self):
        # Generate Fernet key (symmetric encryption)
        self.fernet_key = Fernet.generate_key()
        self.fernet = Fernet(self.fernet_key)
    
    def encrypt_simple(self, data: str) -> bytes:
        """Encrypt data using Fernet (AES-128 in CBC mode)"""
        return self.fernet.encrypt(data.encode())
    
    def decrypt_simple(self, encrypted_data: bytes) -> str:
        """Decrypt data using Fernet"""
        return self.fernet.decrypt(encrypted_data).decode()
    
    def encrypt_aes_256(self, data: str, key: bytes) -> tuple:
        """Encrypt using AES-256 in GCM mode"""
        # Generate random IV (Initialization Vector)
        iv = os.urandom(12)  # 96-bit IV for GCM
        
        # Create cipher
        cipher = Cipher(
            algorithms.AES(key),
            modes.GCM(iv),
            backend=default_backend()
        )
        
        encryptor = cipher.encryptor()
        ciphertext = encryptor.update(data.encode()) + encryptor.finalize()
        
        return ciphertext, iv, encryptor.tag
    
    def decrypt_aes_256(self, ciphertext: bytes, key: bytes, iv: bytes, tag: bytes) -> str:
        """Decrypt using AES-256 in GCM mode"""
        cipher = Cipher(
            algorithms.AES(key),
            modes.GCM(iv, tag),
            backend=default_backend()
        )
        
        decryptor = cipher.decryptor()
        plaintext = decryptor.update(ciphertext) + decryptor.finalize()
        
        return plaintext.decode()

# Demo: Encryption
print("🔒 Encryption Demo\n")

crypto = EncryptionService()

# 1. Simple encryption (Fernet)
print("1️⃣ Fernet Encryption (AES-128):")
secret_message = "This is a secret message!"
encrypted = crypto.encrypt_simple(secret_message)
decrypted = crypto.decrypt_simple(encrypted)

print(f"   Original: {secret_message}")
print(f"   Encrypted: {encrypted[:50]}...")
print(f"   Decrypted: {decrypted}")

# 2. AES-256 encryption
print("\n2️⃣ AES-256-GCM Encryption:")
key = os.urandom(32)  # 256-bit key
ciphertext, iv, tag = crypto.encrypt_aes_256(secret_message, key)
decrypted = crypto.decrypt_aes_256(ciphertext, key, iv, tag)

print(f"   Key: {base64.b64encode(key).decode()[:30]}...")
print(f"   IV: {base64.b64encode(iv).decode()}")
print(f"   Tag: {base64.b64encode(tag).decode()}")
print(f"   Ciphertext: {base64.b64encode(ciphertext).decode()}")
print(f"   Decrypted: {decrypted}")
```

### 2.2 Asymmetric Encryption (RSA)

```python
from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.hazmat.primitives import hashes, serialization

class RSAEncryption:
    """RSA public-key encryption"""
    
    def __init__(self):
        # Generate RSA key pair
        self.private_key = rsa.generate_private_key(
            public_exponent=65537,
            key_size=2048
        )
        self.public_key = self.private_key.public_key()
    
    def get_public_key_pem(self) -> bytes:
        """Export public key as PEM"""
        return self.public_key.public_bytes(
            encoding=serialization.Encoding.PEM,
            format=serialization.PublicFormat.SubjectPublicKeyInfo
        )
    
    def get_private_key_pem(self, password: Optional[bytes] = None) -> bytes:
        """Export private key as PEM"""
        encryption = serialization.NoEncryption()
        if password:
            encryption = serialization.BestAvailableEncryption(password)
        
        return self.private_key.private_bytes(
            encoding=serialization.Encoding.PEM,
            format=serialization.PrivateFormat.PKCS8,
            encryption_algorithm=encryption
        )
    
    def encrypt(self, message: str) -> bytes:
        """Encrypt message with public key"""
        ciphertext = self.public_key.encrypt(
            message.encode(),
            padding.OAEP(
                mgf=padding.MGF1(algorithm=hashes.SHA256()),
                algorithm=hashes.SHA256(),
                label=None
            )
        )
        return ciphertext
    
    def decrypt(self, ciphertext: bytes) -> str:
        """Decrypt message with private key"""
        plaintext = self.private_key.decrypt(
            ciphertext,
            padding.OAEP(
                mgf=padding.MGF1(algorithm=hashes.SHA256()),
                algorithm=hashes.SHA256(),
                label=None
            )
        )
        return plaintext.decode()
    
    def sign(self, message: str) -> bytes:
        """Sign message with private key"""
        signature = self.private_key.sign(
            message.encode(),
            padding.PSS(
                mgf=padding.MGF1(hashes.SHA256()),
                salt_length=padding.PSS.MAX_LENGTH
            ),
            hashes.SHA256()
        )
        return signature
    
    def verify(self, message: str, signature: bytes) -> bool:
        """Verify signature with public key"""
        try:
            self.public_key.verify(
                signature,
                message.encode(),
                padding.PSS(
                    mgf=padding.MGF1(hashes.SHA256()),
                    salt_length=padding.PSS.MAX_LENGTH
                ),
                hashes.SHA256()
            )
            return True
        except:
            return False

# Demo: RSA Encryption
print("\n🔒 RSA Encryption Demo\n")

rsa_crypto = RSAEncryption()

# 1. Encrypt with public key
print("1️⃣ Encrypt with Public Key:")
message = "Confidential information"
ciphertext = rsa_crypto.encrypt(message)
print(f"   Message: {message}")
print(f"   Ciphertext: {base64.b64encode(ciphertext).decode()[:50]}...")

# 2. Decrypt with private key
print("\n2️⃣ Decrypt with Private Key:")
decrypted = rsa_crypto.decrypt(ciphertext)
print(f"   Decrypted: {decrypted}")

# 3. Digital signature
print("\n3️⃣ Digital Signature:")
signature = rsa_crypto.sign(message)
is_valid = rsa_crypto.verify(message, signature)
print(f"   Signature: {base64.b64encode(signature).decode()[:50]}...")
print(f"   Valid: {is_valid}")

# 4. Tampered message
print("\n4️⃣ Verify Tampered Message:")
is_valid = rsa_crypto.verify("Tampered message", signature)
print(f"   Valid: {is_valid}")
```

---

## 🎯 Day 3: API Security

### 3.1 Rate Limiting

```python
import time
from collections import defaultdict
from typing import Dict

class TokenBucketRateLimiter:
    """Token bucket algorithm for rate limiting"""
    
    def __init__(self, capacity: int, refill_rate: float):
        """
        capacity: Maximum tokens in bucket
        refill_rate: Tokens added per second
        """
        self.capacity = capacity
        self.refill_rate = refill_rate
        self.buckets: Dict[str, Dict] = defaultdict(lambda: {
            "tokens": capacity,
            "last_refill": time.time()
        })
    
    def allow_request(self, user_id: str, tokens_required: int = 1) -> bool:
        """Check if request is allowed"""
        bucket = self.buckets[user_id]
        current_time = time.time()
        
        # Refill tokens
        time_passed = current_time - bucket["last_refill"]
        tokens_to_add = time_passed * self.refill_rate
        bucket["tokens"] = min(self.capacity, bucket["tokens"] + tokens_to_add)
        bucket["last_refill"] = current_time
        
        # Check if enough tokens
        if bucket["tokens"] >= tokens_required:
            bucket["tokens"] -= tokens_required
            return True
        
        return False
    
    def get_remaining_tokens(self, user_id: str) -> float:
        """Get remaining tokens for user"""
        bucket = self.buckets[user_id]
        current_time = time.time()
        time_passed = current_time - bucket["last_refill"]
        tokens_to_add = time_passed * self.refill_rate
        return min(self.capacity, bucket["tokens"] + tokens_to_add)

class SlidingWindowRateLimiter:
    """Sliding window log algorithm"""
    
    def __init__(self, max_requests: int, window_seconds: int):
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self.request_logs: Dict[str, List[float]] = defaultdict(list)
    
    def allow_request(self, user_id: str) -> bool:
        """Check if request is allowed"""
        current_time = time.time()
        window_start = current_time - self.window_seconds
        
        # Remove old requests
        self.request_logs[user_id] = [
            timestamp for timestamp in self.request_logs[user_id]
            if timestamp > window_start
        ]
        
        # Check if limit reached
        if len(self.request_logs[user_id]) < self.max_requests:
            self.request_logs[user_id].append(current_time)
            return True
        
        return False
    
    def get_remaining_requests(self, user_id: str) -> int:
        """Get remaining requests in window"""
        current_time = time.time()
        window_start = current_time - self.window_seconds
        
        # Count valid requests
        valid_requests = sum(
            1 for timestamp in self.request_logs[user_id]
            if timestamp > window_start
        )
        
        return max(0, self.max_requests - valid_requests)

# Demo: Rate Limiting
print("🚦 Rate Limiting Demo\n")

# Token Bucket
print("1️⃣ Token Bucket (10 requests/second):")
token_limiter = TokenBucketRateLimiter(capacity=10, refill_rate=10.0)

for i in range(12):
    allowed = token_limiter.allow_request("user_123")
    remaining = token_limiter.get_remaining_tokens("user_123")
    status = "✅ Allowed" if allowed else "❌ Blocked"
    print(f"   Request {i+1:2d}: {status} (Tokens: {remaining:.1f})")

# Sliding Window
print("\n2️⃣ Sliding Window (5 requests per 10 seconds):")
sliding_limiter = SlidingWindowRateLimiter(max_requests=5, window_seconds=10)

for i in range(7):
    allowed = sliding_limiter.allow_request("user_456")
    remaining = sliding_limiter.get_remaining_requests("user_456")
    status = "✅ Allowed" if allowed else "❌ Blocked"
    print(f"   Request {i+1}: {status} (Remaining: {remaining})")
```

### 3.2 API Key Management

```python
import secrets
import hmac
import hashlib

class APIKeyManager:
    """API key generation and validation"""
    
    def __init__(self):
        self.api_keys: Dict[str, Dict] = {}
    
    def generate_api_key(self, client_name: str, permissions: List[str]) -> tuple:
        """Generate API key and secret"""
        # Generate public API key
        api_key = f"ak_{secrets.token_urlsafe(24)}"
        
        # Generate secret key
        api_secret = secrets.token_urlsafe(32)
        
        # Hash secret for storage
        secret_hash = hashlib.sha256(api_secret.encode()).hexdigest()
        
        self.api_keys[api_key] = {
            "client_name": client_name,
            "secret_hash": secret_hash,
            "permissions": permissions,
            "created_at": time.time(),
            "active": True
        }
        
        return api_key, api_secret
    
    def verify_api_key(self, api_key: str, api_secret: str) -> bool:
        """Verify API key and secret"""
        if api_key not in self.api_keys:
            return False
        
        key_data = self.api_keys[api_key]
        
        if not key_data["active"]:
            return False
        
        # Verify secret
        secret_hash = hashlib.sha256(api_secret.encode()).hexdigest()
        return hmac.compare_digest(secret_hash, key_data["secret_hash"])
    
    def has_permission(self, api_key: str, permission: str) -> bool:
        """Check if API key has permission"""
        if api_key not in self.api_keys:
            return False
        
        return permission in self.api_keys[api_key]["permissions"]
    
    def revoke_api_key(self, api_key: str):
        """Revoke API key"""
        if api_key in self.api_keys:
            self.api_keys[api_key]["active"] = False

# Demo: API Key Management
print("\n🔑 API Key Management Demo\n")

api_manager = APIKeyManager()

# Generate API key
print("1️⃣ Generate API Key:")
api_key, api_secret = api_manager.generate_api_key(
    client_name="Mobile App",
    permissions=["read", "write"]
)
print(f"   API Key: {api_key}")
print(f"   API Secret: {api_secret[:20]}...")

# Verify API key
print("\n2️⃣ Verify API Key:")
is_valid = api_manager.verify_api_key(api_key, api_secret)
print(f"   Valid: {is_valid}")

# Check permissions
print("\n3️⃣ Check Permissions:")
can_read = api_manager.has_permission(api_key, "read")
can_delete = api_manager.has_permission(api_key, "delete")
print(f"   Can read: {can_read}")
print(f"   Can delete: {can_delete}")

# Revoke API key
print("\n4️⃣ Revoke API Key:")
api_manager.revoke_api_key(api_key)
is_valid = api_manager.verify_api_key(api_key, api_secret)
print(f"   Valid after revocation: {is_valid}")
```

### 3.3 CORS (Cross-Origin Resource Sharing)

```python
class CORSMiddleware:
    """CORS middleware for API"""
    
    def __init__(self, allowed_origins: List[str], allowed_methods: List[str], allowed_headers: List[str]):
        self.allowed_origins = allowed_origins
        self.allowed_methods = allowed_methods
        self.allowed_headers = allowed_headers
    
    def handle_preflight(self, origin: str, request_method: str, request_headers: str) -> Dict:
        """Handle OPTIONS preflight request"""
        if origin not in self.allowed_origins and "*" not in self.allowed_origins:
            return {"status": 403, "body": "Origin not allowed"}
        
        if request_method not in self.allowed_methods:
            return {"status": 403, "body": "Method not allowed"}
        
        return {
            "status": 200,
            "headers": {
                "Access-Control-Allow-Origin": origin,
                "Access-Control-Allow-Methods": ", ".join(self.allowed_methods),
                "Access-Control-Allow-Headers": ", ".join(self.allowed_headers),
                "Access-Control-Max-Age": "86400"  # 24 hours
            }
        }
    
    def add_cors_headers(self, origin: str, response: Dict) -> Dict:
        """Add CORS headers to response"""
        if origin in self.allowed_origins or "*" in self.allowed_origins:
            response["headers"] = response.get("headers", {})
            response["headers"]["Access-Control-Allow-Origin"] = origin
            response["headers"]["Access-Control-Allow-Credentials"] = "true"
        
        return response

# Demo: CORS
print("\n🌐 CORS Demo\n")

cors = CORSMiddleware(
    allowed_origins=["https://example.com", "https://app.example.com"],
    allowed_methods=["GET", "POST", "PUT", "DELETE"],
    allowed_headers=["Content-Type", "Authorization"]
)

# Preflight request
print("1️⃣ Preflight Request:")
preflight_response = cors.handle_preflight(
    origin="https://example.com",
    request_method="POST",
    request_headers="Content-Type, Authorization"
)
print(f"   Status: {preflight_response['status']}")
print(f"   Headers: {preflight_response.get('headers', {})}")

# Actual request
print("\n2️⃣ Actual Request:")
response = {"status": 200, "body": {"data": "Success"}}
response_with_cors = cors.add_cors_headers("https://example.com", response)
print(f"   CORS Headers: {response_with_cors['headers']}")
```

---

## 🎯 Day 4-7: Infrastructure & Deployment

### Day 4: Docker

```dockerfile
# Dockerfile for Python microservice
FROM python:3.9-slim

WORKDIR /app

# Copy requirements
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application
COPY . .

# Non-root user for security
RUN useradd -m appuser && chown -R appuser:appuser /app
USER appuser

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD python -c "import requests; requests.get('http://localhost:8000/health')"

# Run application
CMD ["python", "app.py"]
```

```yaml
# docker-compose.yml
version: '3.8'

services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
    networks:
      - app-network
    restart: unless-stopped
  
  db:
    image: postgres:13
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=mydb
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - app-network
  
  redis:
    image: redis:6-alpine
    networks:
      - app-network

networks:
  app-network:

volumes:
  postgres-data:
```

### Day 5: Kubernetes

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-deployment
  labels:
    app: api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api
  template:
    metadata:
      labels:
        app: api
    spec:
      containers:
      - name: api
        image: myregistry/api:v1.0.0
        ports:
        - containerPort: 8000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: api-secrets
              key: database-url
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 8000
          initialDelaySeconds: 5
          periodSeconds: 5

---
apiVersion: v1
kind: Service
metadata:
  name: api-service
spec:
  selector:
    app: api
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8000
  type: LoadBalancer

---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api-deployment
  minReplicas: 3
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
```

### Day 6: Infrastructure as Code (Terraform)

```hcl
# main.tf - AWS Infrastructure
provider "aws" {
  region = "us-east-1"
}

# VPC
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  
  tags = {
    Name = "main-vpc"
  }
}

# ECS Cluster
resource "aws_ecs_cluster" "main" {
  name = "production-cluster"
}

# ECS Task Definition
resource "aws_ecs_task_definition" "api" {
  family                   = "api"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"
  
  container_definitions = jsonencode([{
    name  = "api"
    image = "myregistry/api:v1.0.0"
    portMappings = [{
      containerPort = 8000
      protocol      = "tcp"
    }]
    environment = [
      {
        name  = "ENV"
        value = "production"
      }
    ]
  }])
}

# RDS Database
resource "aws_db_instance" "main" {
  identifier        = "production-db"
  engine            = "postgres"
  engine_version    = "13.7"
  instance_class    = "db.t3.micro"
  allocated_storage = 20
  
  username = "admin"
  password = var.db_password
  
  vpc_security_group_ids = [aws_security_group.db.id]
  
  backup_retention_period = 7
  skip_final_snapshot     = false
}

# ElastiCache Redis
resource "aws_elasticache_cluster" "main" {
  cluster_id      = "production-cache"
  engine          = "redis"
  node_type       = "cache.t3.micro"
  num_cache_nodes = 1
  port            = 6379
}
```

### Day 7: CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: 3.9
      
      - name: Install dependencies
        run: |
          pip install -r requirements.txt
          pip install pytest pytest-cov
      
      - name: Run tests
        run: pytest --cov=./ --cov-report=xml
      
      - name: Upload coverage
        uses: codecov/codecov-action@v2

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Build Docker image
        run: docker build -t myregistry/api:${{ github.sha }} .
      
      - name: Push to registry
        run: |
          echo ${{ secrets.DOCKER_PASSWORD }} | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin
          docker push myregistry/api:${{ github.sha }}

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to Kubernetes
        run: |
          kubectl set image deployment/api-deployment api=myregistry/api:${{ github.sha }}
          kubectl rollout status deployment/api-deployment
```

---

## 📚 Week 8 Summary

### What You've Mastered

✅ **Authentication**
- JWT tokens (access + refresh)
- Password hashing (PBKDF2)
- OAuth 2.0 flows

✅ **Authorization**
- RBAC (Role-Based Access Control)
- Permission systems
- Token verification

✅ **Encryption**
- Symmetric (AES-128, AES-256)
- Asymmetric (RSA)
- Digital signatures

✅ **API Security**
- Rate limiting (Token Bucket, Sliding Window)
- API key management
- CORS configuration

✅ **Infrastructure**
- Docker containerization
- Kubernetes orchestration
- Infrastructure as Code
- CI/CD pipelines

### Next Steps

- **Week 9**: Advanced Patterns (Service Mesh, API Gateway, GraphQL)
- **Week 10**: Interview Mastery
- **Practice**: Secure your existing projects

**Congratulations on completing Week 8! 🎉**
