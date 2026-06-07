# 🔐 Security Fundamentals - Complete Deep Dive

## CIA Triad

### Confidentiality
**Definition:** Ensuring information is accessible only to authorized parties

**Examples:**
```
✅ Good: Encrypted database passwords
❌ Bad: Passwords stored in plain text

✅ Good: Role-based access control
❌ Bad: Everyone has admin access

✅ Good: HTTPS for data transmission
❌ Bad: HTTP for sensitive data
```

**Implementation:**
```python
# Encryption for confidentiality
from cryptography.fernet import Fernet

# Generate key
key = Fernet.generate_key()
cipher = Fernet(key)

# Encrypt sensitive data
sensitive_data = "user_password_123"
encrypted = cipher.encrypt(sensitive_data.encode())

# Only authorized parties can decrypt
decrypted = cipher.decrypt(encrypted).decode()
```

### Integrity
**Definition:** Ensuring information is accurate and unmodified

**Examples:**
```
✅ Good: Digital signatures on software
❌ Bad: No verification of downloads

✅ Good: Checksums for file verification
❌ Bad: No integrity checks

✅ Good: Database transaction logs
❌ Bad: No audit trail
```

**Implementation:**
```python
import hashlib

# Create hash for integrity
def create_hash(data):
    return hashlib.sha256(data.encode()).hexdigest()

# Verify integrity
original_hash = create_hash("important_data")
current_hash = create_hash("important_data")

if original_hash == current_hash:
    print("Data integrity verified ✅")
else:
    print("Data has been tampered! ❌")
```

### Availability
**Definition:** Ensuring information is accessible when needed

**Examples:**
```
✅ Good: Redundant servers (99.99% uptime)
❌ Bad: Single point of failure

✅ Good: DDoS protection
❌ Bad: No rate limiting

✅ Good: Regular backups
❌ Bad: No disaster recovery plan
```

**Implementation:**
```python
# Rate limiting for availability
from functools import wraps
import time

def rate_limit(max_calls=10, time_window=60):
    calls = []
    
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            now = time.time()
            # Remove old calls
            calls[:] = [c for c in calls if c > now - time_window]
            
            if len(calls) >= max_calls:
                raise Exception("Rate limit exceeded")
            
            calls.append(now)
            return func(*args, **kwargs)
        return wrapper
    return decorator

@rate_limit(max_calls=100, time_window=60)
def api_endpoint():
    return "Data"
```

---

## Security Principles

### 1. Least Privilege
**Principle:** Grant minimum permissions necessary

```python
# Bad: Everyone is admin
user_role = "admin"

# Good: Role-based access
class User:
    def __init__(self, role):
        self.role = role
    
    def can_delete(self):
        return self.role in ["admin", "moderator"]
    
    def can_edit(self):
        return self.role in ["admin", "moderator", "editor"]
    
    def can_view(self):
        return True  # Everyone can view

user = User("editor")
if user.can_delete():
    delete_record()  # Won't execute
```

### 2. Defense in Depth
**Principle:** Multiple layers of security

```
Layer 1: Firewall (network level)
Layer 2: WAF (application level)
Layer 3: Authentication (user level)
Layer 4: Authorization (permission level)
Layer 5: Encryption (data level)
Layer 6: Monitoring (detection level)

If one layer fails, others still protect
```

### 3. Fail Securely
**Principle:** Failures should not compromise security

```python
# Bad: Fail open
def authenticate(username, password):
    try:
        return check_credentials(username, password)
    except:
        return True  # ❌ Grants access on error!

# Good: Fail closed
def authenticate(username, password):
    try:
        return check_credentials(username, password)
    except:
        log_error("Authentication failed")
        return False  # ✅ Denies access on error
```

### 4. Separation of Duties
**Principle:** No single person has complete control

```
Example: Financial System
- Person A: Creates payment request
- Person B: Approves payment
- Person C: Executes payment

Prevents: Fraud, unauthorized transactions
```

### 5. Keep Security Simple
**Principle:** Complex systems have more vulnerabilities

```python
# Bad: Complex custom encryption
def custom_encrypt(data):
    # 500 lines of custom crypto code
    # Likely has vulnerabilities

# Good: Use proven libraries
from cryptography.fernet import Fernet
cipher = Fernet(key)
encrypted = cipher.encrypt(data)
```

---

## Threat Modeling

### STRIDE Framework

#### Spoofing
```
Threat: Attacker pretends to be legitimate user
Example: Fake login page
Mitigation: Multi-factor authentication
```

#### Tampering
```
Threat: Unauthorized modification of data
Example: Changing price in shopping cart
Mitigation: Input validation, integrity checks
```

#### Repudiation
```
Threat: User denies performing action
Example: "I didn't make that purchase"
Mitigation: Audit logs, digital signatures
```

#### Information Disclosure
```
Threat: Exposing sensitive information
Example: SQL injection reveals database
Mitigation: Encryption, access controls
```

#### Denial of Service
```
Threat: Making system unavailable
Example: DDoS attack
Mitigation: Rate limiting, CDN, auto-scaling
```

#### Elevation of Privilege
```
Threat: Gaining unauthorized permissions
Example: SQL injection to admin account
Mitigation: Least privilege, input validation
```

---

## Risk Assessment

### Risk Formula
```
Risk = Likelihood × Impact

Likelihood:
1 = Very Low (< 1% chance)
2 = Low (1-25% chance)
3 = Medium (25-50% chance)
4 = High (50-75% chance)
5 = Very High (> 75% chance)

Impact:
1 = Negligible (< $1K loss)
2 = Minor ($1K-$10K loss)
3 = Moderate ($10K-$100K loss)
4 = Major ($100K-$1M loss)
5 = Catastrophic (> $1M loss)
```

### Risk Matrix
```
Impact →
↓ Likelihood    1    2    3    4    5
    5          5   10   15   20   25
    4          4    8   12   16   20
    3          3    6    9   12   15
    2          2    4    6    8   10
    1          1    2    3    4    5

Risk Score:
1-5:   Low (Accept)
6-10:  Medium (Monitor)
11-15: High (Mitigate)
16-25: Critical (Immediate action)
```

### Example Assessment
```
Vulnerability: Unencrypted database passwords
Likelihood: 4 (High - common attack)
Impact: 5 (Catastrophic - all accounts compromised)
Risk Score: 20 (Critical)

Action: Immediate mitigation required
Solution: Implement bcrypt password hashing
Timeline: 1 week
```

---

## Security Frameworks

### NIST Cybersecurity Framework

#### 1. Identify
```
- Asset inventory
- Risk assessment
- Governance policies
- Business context

Example:
- List all systems and data
- Classify data sensitivity
- Identify critical assets
```

#### 2. Protect
```
- Access control
- Data security
- Security training
- Protective technology

Example:
- Implement MFA
- Encrypt sensitive data
- Train employees on phishing
```

#### 3. Detect
```
- Continuous monitoring
- Anomaly detection
- Security alerts
- Detection processes

Example:
- Deploy IDS/IPS
- Monitor logs
- Set up alerts
```

#### 4. Respond
```
- Response planning
- Communications
- Analysis
- Mitigation

Example:
- Incident response plan
- Isolate affected systems
- Notify stakeholders
```

#### 5. Recover
```
- Recovery planning
- Improvements
- Communications
- Lessons learned

Example:
- Restore from backups
- Update security controls
- Document incident
```

---

## Common Vulnerabilities

### 1. Weak Passwords
```python
# Bad passwords
"password123"
"admin"
"123456"

# Good password policy
import re

def is_strong_password(password):
    if len(password) < 12:
        return False
    if not re.search(r"[a-z]", password):
        return False
    if not re.search(r"[A-Z]", password):
        return False
    if not re.search(r"\d", password):
        return False
    if not re.search(r"[!@#$%^&*]", password):
        return False
    return True

# Enforce: 12+ chars, upper, lower, digit, special
```

### 2. Unvalidated Input
```python
# Bad: No validation
def search(query):
    sql = f"SELECT * FROM users WHERE name = '{query}'"
    return db.execute(sql)
# Vulnerable to SQL injection!

# Good: Parameterized queries
def search(query):
    sql = "SELECT * FROM users WHERE name = ?"
    return db.execute(sql, (query,))
```

### 3. Insecure Direct Object References
```python
# Bad: Predictable IDs
@app.get("/user/{user_id}")
def get_user(user_id: int):
    return db.get_user(user_id)
# Attacker can access any user by changing ID

# Good: Authorization check
@app.get("/user/{user_id}")
def get_user(user_id: int, current_user: User):
    if current_user.id != user_id and not current_user.is_admin:
        raise HTTPException(403, "Forbidden")
    return db.get_user(user_id)
```

### 4. Missing Encryption
```python
# Bad: Plain text storage
password = "user_password"
db.save(password)

# Good: Hashed with salt
import bcrypt

password = "user_password"
hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
db.save(hashed)

# Verify
if bcrypt.checkpw(password.encode(), hashed):
    print("Password correct")
```

---

## Security Best Practices

### Secure Coding Checklist
```
Input Validation:
- [ ] Validate all user input
- [ ] Use whitelist, not blacklist
- [ ] Sanitize output
- [ ] Use parameterized queries

Authentication:
- [ ] Enforce strong passwords
- [ ] Implement MFA
- [ ] Use secure session management
- [ ] Hash passwords with bcrypt/argon2

Authorization:
- [ ] Implement least privilege
- [ ] Check permissions on every request
- [ ] Use role-based access control
- [ ] Validate object ownership

Data Protection:
- [ ] Encrypt sensitive data at rest
- [ ] Use HTTPS for data in transit
- [ ] Implement proper key management
- [ ] Regular security backups

Error Handling:
- [ ] Don't expose stack traces
- [ ] Log errors securely
- [ ] Fail securely
- [ ] Generic error messages to users

Logging & Monitoring:
- [ ] Log security events
- [ ] Monitor for anomalies
- [ ] Set up alerts
- [ ] Regular log review
```

---

## Summary

### Key Takeaways
1. **CIA Triad:** Foundation of security
2. **Defense in Depth:** Multiple security layers
3. **Least Privilege:** Minimum necessary access
4. **Threat Modeling:** Identify risks early
5. **Risk Assessment:** Prioritize security efforts
6. **Secure Coding:** Prevent vulnerabilities

### Security Mindset
```
Always Ask:
- What could go wrong?
- Who might attack this?
- What's the worst case scenario?
- How can I make this more secure?
- Is this the simplest secure solution?
```

### Next Steps
1. Study OWASP Top 10
2. Practice on vulnerable apps (DVWA, WebGoat)
3. Learn penetration testing basics
4. Implement security in your projects
5. Stay updated on security news

---

**Next:** [02_Network_Security.md](./02_Network_Security.md)
