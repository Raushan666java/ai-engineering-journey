# 🔴 OWASP Top 10 - Complete Deep Dive

## Overview

OWASP Top 10 = Most critical web application security risks

**Updated:** 2021 version
**Importance:** Must-know for every developer

---

## 1. Broken Access Control

### What is it?
Users can access resources they shouldn't

### Examples
```
❌ User A views User B's private data
❌ Regular user accesses admin panel
❌ Changing URL parameter to access other accounts
```

### Vulnerable Code
```python
# Bad: No authorization check
@app.get("/user/{user_id}/profile")
def get_profile(user_id: int):
    return db.get_user(user_id)
# Anyone can view any profile by changing user_id!

# Bad: Client-side authorization
@app.get("/admin/users")
def admin_panel():
    # Only checks if user claims to be admin
    return render_template("admin.html")
```

### Secure Code
```python
# Good: Server-side authorization
@app.get("/user/{user_id}/profile")
def get_profile(user_id: int, current_user: User):
    # Check if user owns resource or is admin
    if current_user.id != user_id and not current_user.is_admin:
        raise HTTPException(403, "Access denied")
    return db.get_user(user_id)

# Good: Role-based access control
from functools import wraps

def require_role(role):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            if current_user.role != role:
                raise HTTPException(403, "Insufficient permissions")
            return func(*args, **kwargs)
        return wrapper
    return decorator

@app.get("/admin/users")
@require_role("admin")
def admin_panel():
    return db.get_all_users()
```

### Prevention
```
✅ Deny by default
✅ Implement access control checks on every request
✅ Use centralized authorization logic
✅ Log access control failures
✅ Rate limit API calls
```

---

## 2. Cryptographic Failures

### What is it?
Sensitive data exposed due to weak/missing encryption

### Examples
```
❌ Passwords stored in plain text
❌ HTTP instead of HTTPS
❌ Weak encryption algorithms (MD5, SHA1)
❌ Hardcoded encryption keys
```

### Vulnerable Code
```python
# Bad: Plain text passwords
password = "user_password"
db.save({"username": "john", "password": password})

# Bad: Weak hashing
import hashlib
password_hash = hashlib.md5(password.encode()).hexdigest()
# MD5 is broken, easily cracked

# Bad: Hardcoded key
SECRET_KEY = "my_secret_key_123"
```

### Secure Code
```python
# Good: Strong password hashing
import bcrypt

def hash_password(password):
    salt = bcrypt.gensalt(rounds=12)
    return bcrypt.hashpw(password.encode(), salt)

def verify_password(password, hashed):
    return bcrypt.checkpw(password.encode(), hashed)

# Good: Encrypt sensitive data
from cryptography.fernet import Fernet

# Generate and store key securely (not in code!)
key = Fernet.generate_key()
cipher = Fernet(key)

# Encrypt
sensitive_data = "SSN: 123-45-6789"
encrypted = cipher.encrypt(sensitive_data.encode())

# Decrypt
decrypted = cipher.decrypt(encrypted).decode()

# Good: Use environment variables
import os
SECRET_KEY = os.getenv("SECRET_KEY")
```

### Prevention
```
✅ Use HTTPS everywhere
✅ Hash passwords with bcrypt/argon2
✅ Encrypt sensitive data at rest
✅ Use strong encryption (AES-256)
✅ Proper key management
✅ Don't store unnecessary sensitive data
```

---

## 3. Injection

### What is it?
Untrusted data sent to interpreter as command/query

### Types
- SQL Injection
- NoSQL Injection
- OS Command Injection
- LDAP Injection

### SQL Injection Example
```python
# Vulnerable code
username = request.form['username']
password = request.form['password']

query = f"SELECT * FROM users WHERE username='{username}' AND password='{password}'"
user = db.execute(query)

# Attack payload
username = "admin' --"
password = "anything"

# Resulting query
"SELECT * FROM users WHERE username='admin' --' AND password='anything'"
# -- comments out the rest, bypassing password check!
```

### Secure Code
```python
# Good: Parameterized queries
query = "SELECT * FROM users WHERE username=? AND password=?"
user = db.execute(query, (username, password))

# Good: ORM (SQLAlchemy)
from sqlalchemy import select
stmt = select(User).where(
    User.username == username,
    User.password == password
)
user = session.execute(stmt).scalar()
```

### Command Injection Example
```python
# Vulnerable
filename = request.args.get('file')
os.system(f"cat {filename}")

# Attack
filename = "file.txt; rm -rf /"
# Executes: cat file.txt; rm -rf /

# Secure
import subprocess
result = subprocess.run(['cat', filename], capture_output=True)
```

### Prevention
```
✅ Use parameterized queries
✅ Use ORM frameworks
✅ Input validation (whitelist)
✅ Escape special characters
✅ Least privilege database accounts
✅ Use safe APIs
```

---

## 4. Insecure Design

### What is it?
Missing or ineffective security controls in design

### Examples
```
❌ No rate limiting on password reset
❌ Predictable session tokens
❌ No CAPTCHA on registration
❌ Weak password requirements
```

### Vulnerable Design
```python
# Bad: Unlimited password reset attempts
@app.post("/reset-password")
def reset_password(email: str):
    user = db.get_user_by_email(email)
    if user:
        send_reset_email(user)
    return {"message": "If email exists, reset link sent"}
# Attacker can enumerate users, spam reset emails
```

### Secure Design
```python
# Good: Rate limiting + CAPTCHA
from slowapi import Limiter
limiter = Limiter(key_func=get_remote_address)

@app.post("/reset-password")
@limiter.limit("3/hour")
def reset_password(email: str, captcha_token: str):
    # Verify CAPTCHA
    if not verify_captcha(captcha_token):
        raise HTTPException(400, "Invalid CAPTCHA")
    
    # Rate limit per email
    if not check_email_rate_limit(email):
        raise HTTPException(429, "Too many requests")
    
    user = db.get_user_by_email(email)
    if user:
        send_reset_email(user)
    
    # Same response regardless of user existence
    return {"message": "If email exists, reset link sent"}
```

### Prevention
```
✅ Threat modeling during design
✅ Secure design patterns
✅ Rate limiting
✅ Input validation
✅ Security requirements in user stories
✅ Peer review of designs
```

---

## 5. Security Misconfiguration

### What is it?
Insecure default configurations, incomplete setups

### Examples
```
❌ Default passwords unchanged
❌ Directory listing enabled
❌ Detailed error messages
❌ Unnecessary features enabled
❌ Missing security headers
```

### Vulnerable Configuration
```python
# Bad: Debug mode in production
app = Flask(__name__)
app.config['DEBUG'] = True  # Exposes stack traces!

# Bad: Permissive CORS
@app.after_request
def after_request(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response
```

### Secure Configuration
```python
# Good: Production settings
app = Flask(__name__)
app.config['DEBUG'] = False
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

# Good: Restrictive CORS
from flask_cors import CORS
CORS(app, origins=['https://yourdomain.com'])

# Good: Security headers
@app.after_request
def set_security_headers(response):
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    response.headers['Strict-Transport-Security'] = 'max-age=31536000'
    response.headers['Content-Security-Policy'] = "default-src 'self'"
    return response
```

### Prevention
```
✅ Minimal platform (remove unused features)
✅ Secure defaults
✅ Automated security configuration
✅ Regular security updates
✅ Security headers
✅ Disable directory listing
```

---

## 6. Vulnerable Components

### What is it?
Using libraries/frameworks with known vulnerabilities

### Examples
```
❌ Outdated dependencies
❌ Unmaintained libraries
❌ Known CVEs in components
```

### Check Vulnerabilities
```bash
# Python
pip install safety
safety check

# Node.js
npm audit

# Check specific package
pip show package-name
```

### Secure Dependency Management
```python
# requirements.txt with version pinning
Flask==2.3.0
SQLAlchemy==2.0.0
cryptography==41.0.0

# Use virtual environment
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Regular updates
pip list --outdated
pip install --upgrade package-name
```

### Prevention
```
✅ Inventory all components
✅ Monitor for vulnerabilities (Snyk, Dependabot)
✅ Only use trusted sources
✅ Prefer maintained libraries
✅ Remove unused dependencies
✅ Regular updates
```

---

## 7. Authentication Failures

### What is it?
Broken authentication and session management

### Examples
```
❌ Weak passwords allowed
❌ No account lockout
❌ Predictable session IDs
❌ Session fixation
❌ No MFA
```

### Vulnerable Code
```python
# Bad: Weak password policy
def register(username, password):
    if len(password) < 6:  # Too weak!
        return "Password too short"
    db.save_user(username, password)

# Bad: No rate limiting on login
@app.post("/login")
def login(username, password):
    user = db.get_user(username)
    if user and user.password == password:
        session['user_id'] = user.id
        return "Login successful"
    return "Invalid credentials"
# Allows brute force attacks!
```

### Secure Code
```python
# Good: Strong password policy
import re

def is_strong_password(password):
    if len(password) < 12:
        return False, "Password must be at least 12 characters"
    if not re.search(r"[a-z]", password):
        return False, "Password must contain lowercase"
    if not re.search(r"[A-Z]", password):
        return False, "Password must contain uppercase"
    if not re.search(r"\d", password):
        return False, "Password must contain digit"
    if not re.search(r"[!@#$%^&*]", password):
        return False, "Password must contain special character"
    return True, "Password is strong"

# Good: Rate limiting + account lockout
from slowapi import Limiter
limiter = Limiter(key_func=get_remote_address)

@app.post("/login")
@limiter.limit("5/minute")
def login(username, password):
    # Check if account is locked
    if is_account_locked(username):
        return {"error": "Account locked. Try again in 30 minutes"}, 403
    
    user = db.get_user(username)
    if user and bcrypt.checkpw(password.encode(), user.password):
        # Reset failed attempts
        reset_failed_attempts(username)
        
        # Generate secure session
        session_token = secrets.token_urlsafe(32)
        save_session(user.id, session_token)
        
        return {"token": session_token}
    else:
        # Increment failed attempts
        increment_failed_attempts(username)
        return {"error": "Invalid credentials"}, 401

# Good: Multi-factor authentication
import pyotp

def enable_mfa(user_id):
    secret = pyotp.random_base32()
    db.save_mfa_secret(user_id, secret)
    return pyotp.totp.TOTP(secret).provisioning_uri(
        name=user.email,
        issuer_name="YourApp"
    )

def verify_mfa(user_id, token):
    secret = db.get_mfa_secret(user_id)
    totp = pyotp.TOTP(secret)
    return totp.verify(token)
```

### Prevention
```
✅ Implement MFA
✅ Strong password policy
✅ Rate limiting on authentication
✅ Account lockout after failed attempts
✅ Secure session management
✅ Password breach detection
```

---

## 8. Software and Data Integrity Failures

### What is it?
Code/infrastructure without integrity verification

### Examples
```
❌ Unsigned software updates
❌ No CI/CD pipeline security
❌ Insecure deserialization
❌ No integrity checks on dependencies
```

### Insecure Deserialization
```python
# Vulnerable: pickle deserialization
import pickle

def load_user_data(data):
    return pickle.loads(data)
# Attacker can execute arbitrary code!

# Secure: Use JSON
import json

def load_user_data(data):
    return json.loads(data)
```

### Prevention
```
✅ Digital signatures on updates
✅ Verify package integrity (checksums)
✅ Use signed commits
✅ Secure CI/CD pipeline
✅ Avoid insecure deserialization
✅ Integrity monitoring
```

---

## 9. Logging and Monitoring Failures

### What is it?
Insufficient logging, detection, and response

### Examples
```
❌ No logging of security events
❌ Logs not monitored
❌ No alerting on suspicious activity
❌ Logs easily tampered
```

### Secure Logging
```python
import logging
import json
from datetime import datetime

# Configure secure logging
logging.basicConfig(
    filename='security.log',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def log_security_event(event_type, user_id, details):
    log_entry = {
        "timestamp": datetime.utcnow().isoformat(),
        "event_type": event_type,
        "user_id": user_id,
        "ip_address": request.remote_addr,
        "user_agent": request.headers.get('User-Agent'),
        "details": details
    }
    logging.info(json.dumps(log_entry))

# Log important events
@app.post("/login")
def login(username, password):
    user = authenticate(username, password)
    if user:
        log_security_event("login_success", user.id, {"username": username})
        return {"token": create_token(user)}
    else:
        log_security_event("login_failure", None, {"username": username})
        return {"error": "Invalid credentials"}, 401
```

### Prevention
```
✅ Log all security events
✅ Centralized logging
✅ Real-time monitoring
✅ Automated alerts
✅ Log integrity protection
✅ Regular log review
```

---

## 10. Server-Side Request Forgery (SSRF)

### What is it?
Application fetches remote resource without validating URL

### Example Attack
```python
# Vulnerable
@app.get("/fetch")
def fetch_url(url: str):
    response = requests.get(url)
    return response.text

# Attack
url = "http://169.254.169.254/latest/meta-data/"
# Accesses AWS metadata, steals credentials!
```

### Secure Code
```python
# Good: URL validation
from urllib.parse import urlparse

ALLOWED_DOMAINS = ['api.example.com', 'cdn.example.com']

@app.get("/fetch")
def fetch_url(url: str):
    parsed = urlparse(url)
    
    # Check protocol
    if parsed.scheme not in ['http', 'https']:
        raise HTTPException(400, "Invalid protocol")
    
    # Check domain whitelist
    if parsed.netloc not in ALLOWED_DOMAINS:
        raise HTTPException(400, "Domain not allowed")
    
    # Prevent internal network access
    if parsed.netloc.startswith('192.168.') or \
       parsed.netloc.startswith('10.') or \
       parsed.netloc == 'localhost':
        raise HTTPException(400, "Internal network access denied")
    
    response = requests.get(url, timeout=5)
    return response.text
```

### Prevention
```
✅ Whitelist allowed URLs/domains
✅ Disable HTTP redirects
✅ Network segmentation
✅ Input validation
✅ Use DNS resolution checks
```

---

## Summary

### OWASP Top 10 Quick Reference
```
1. Broken Access Control       → Check authorization
2. Cryptographic Failures       → Encrypt sensitive data
3. Injection                    → Parameterized queries
4. Insecure Design             → Threat modeling
5. Security Misconfiguration   → Secure defaults
6. Vulnerable Components       → Update dependencies
7. Authentication Failures     → MFA + strong passwords
8. Integrity Failures          → Verify integrity
9. Logging Failures            → Monitor everything
10. SSRF                       → Validate URLs
```

### Testing Checklist
- [ ] Test for SQL injection
- [ ] Test for XSS
- [ ] Test access controls
- [ ] Check password policy
- [ ] Verify HTTPS everywhere
- [ ] Test rate limiting
- [ ] Check security headers
- [ ] Review dependencies
- [ ] Test authentication
- [ ] Verify logging

---

**Next:** [03_Penetration_Testing.md](./03_Penetration_Testing.md)
