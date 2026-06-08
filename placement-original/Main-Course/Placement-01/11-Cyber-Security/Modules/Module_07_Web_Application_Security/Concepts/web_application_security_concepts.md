# 🌐 **MODULE 07: WEB APPLICATION SECURITY**
## OWASP Top 10, Injection Attacks & Web Security Controls

---

## 🎯 **WEB APPLICATION SECURITY FUNDAMENTALS**

### **OWASP Top 10 Overview**
- **A01:2021-Broken Access Control:** Access control vulnerabilities
- **A02:2021-Cryptographic Failures:** Encryption and cryptography issues
- **A03:2021-Injection:** SQL, NoSQL, command injection attacks
- **A04:2021-Insecure Design:** Security design flaws
- **A05:2021-Security Misconfiguration:** Improper security configurations
- **A06:2021-Vulnerable Components:** Outdated or vulnerable libraries
- **A07:2021-Identification & Authentication Failures:** Authentication weaknesses
- **A08:2021-Software & Data Integrity Failures:** Integrity verification issues
- **A09:2021-Security Logging & Monitoring Failures:** Insufficient logging
- **A10:2021-Server-Side Request Forgery (SSRF):** SSRF vulnerabilities

### **Web Application Security Architecture**
```python
class WebApplicationSecurity:
    def __init__(self):
        self.security_layers = {
            'client_side': 'Browser and client security',
            'network_layer': 'Transport security (TLS/SSL)',
            'application_layer': 'Application logic security',
            'data_layer': 'Database and data security',
            'infrastructure': 'Server and infrastructure security'
        }

    def implement_security_controls(self):
        return {
            'input_validation': self.validate_all_inputs(),
            'authentication': self.implement_secure_auth(),
            'authorization': self.enforce_access_control(),
            'session_management': self.secure_session_handling(),
            'cryptography': self.implement_crypto_protection(),
            'error_handling': self.secure_error_responses(),
            'logging': self.implement_security_logging()
        }
```

### **Web Security Threats**
- **Injection Attacks:** SQL, XSS, command injection
- **Broken Authentication:** Session hijacking, credential stuffing
- **Sensitive Data Exposure:** Unencrypted data transmission
- **XML External Entities:** XXE processing vulnerabilities
- **Broken Access Control:** IDOR, privilege escalation
- **Security Misconfiguration:** Default credentials, exposed services

---

## 💉 **INJECTION ATTACKS**

### **SQL Injection (SQLi)**
- **Classic SQLi:** Malicious SQL code injection
- **Blind SQLi:** Inference-based attacks without visible results
- **Time-Based SQLi:** Timing attack techniques
- **Union-Based SQLi:** UNION operator exploitation
- **Error-Based SQLi:** Database error message exploitation

### **Cross-Site Scripting (XSS)**
- **Reflected XSS:** Non-persistent XSS attacks
- **Stored XSS:** Persistent XSS in databases
- **DOM-Based XSS:** Client-side JavaScript manipulation
- **Self-XSS:** User-executed XSS attacks
- **Universal XSS:** Browser or plugin vulnerabilities

### **Injection Prevention Techniques**
```python
import sqlite3
from html import escape
import subprocess
import shlex

class InjectionPrevention:
    def __init__(self):
        self.db_connection = sqlite3.connect(':memory:')

    def secure_sql_query(self, user_id):
        # Use parameterized queries to prevent SQL injection
        cursor = self.db_connection.cursor()

        # SAFE: Parameterized query
        cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))

        # UNSAFE: String concatenation (vulnerable to SQLi)
        # cursor.execute(f"SELECT * FROM users WHERE id = {user_id}")

        return cursor.fetchall()

    def prevent_xss_attack(self, user_input):
        # HTML encode output to prevent XSS
        safe_output = escape(user_input)

        # Additional context-specific encoding
        if self.is_in_attribute_context():
            safe_output = safe_output.replace('"', '&quot;').replace("'", '&#x27;')

        return safe_output

    def secure_command_execution(self, user_command):
        # Use subprocess with shell=False to prevent command injection
        try:
            # SAFE: Use list format, no shell interpretation
            result = subprocess.run(
                ['ls', user_command],  # Only if user_command is a safe filename
                capture_output=True,
                text=True,
                timeout=10
            )
            return result.stdout
        except subprocess.TimeoutExpired:
            return "Command timed out"

    def validate_user_input(self, input_data, input_type):
        # Input validation based on expected type
        validators = {
            'email': self.validate_email,
            'username': self.validate_username,
            'number': self.validate_number,
            'url': self.validate_url
        }

        if input_type in validators:
            return validators[input_type](input_data)

        return False

    def validate_email(self, email):
        import re
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        return bool(re.match(pattern, email))

    def validate_username(self, username):
        # Allow only alphanumeric characters and underscores
        import re
        return bool(re.match(r'^[a-zA-Z0-9_]{3,20}$', username))
```

---

## 🔐 **AUTHENTICATION & SESSION SECURITY**

### **Authentication Vulnerabilities**
- **Weak Password Policies:** Simple or default passwords
- **Credential Stuffing:** Reused password attacks
- **Brute Force Attacks:** Automated password guessing
- **Session Hijacking:** Cookie theft and session takeover
- **Man-in-the-Middle:** Authentication interception

### **Session Management Security**
- **Secure Session IDs:** Cryptographically strong session tokens
- **Session Expiration:** Proper timeout handling
- **Secure Cookies:** HttpOnly, Secure, SameSite attributes
- **Session Fixation:** Prevention of session ID prediction
- **Concurrent Session Control:** Multiple session management

### **Secure Authentication Implementation**
```python
import hashlib
import secrets
from datetime import datetime, timedelta
import bcrypt

class SecureWebAuthentication:
    def __init__(self):
        self.sessions = {}
        self.login_attempts = {}
        self.max_attempts = 5
        self.lockout_duration = timedelta(minutes=15)

    def hash_password(self, password):
        # Use bcrypt for secure password hashing
        salt = bcrypt.gensalt()
        return bcrypt.hashpw(password.encode('utf-8'), salt)

    def verify_password(self, password, hashed):
        # Secure password verification
        return bcrypt.checkpw(password.encode('utf-8'), hashed)

    def generate_session_id(self):
        # Cryptographically secure session ID
        return secrets.token_urlsafe(32)

    def create_secure_session(self, user_id, user_agent=None, ip_address=None):
        session_id = self.generate_session_id()
        expiration = datetime.now() + timedelta(hours=2)  # 2-hour session

        self.sessions[session_id] = {
            'user_id': user_id,
            'created': datetime.now(),
            'expires': expiration,
            'user_agent': user_agent,
            'ip_address': ip_address,
            'last_activity': datetime.now()
        }

        return session_id

    def validate_session(self, session_id, user_agent=None, ip_address=None):
        if session_id not in self.sessions:
            return False

        session = self.sessions[session_id]

        # Check expiration
        if datetime.now() > session['expires']:
            del self.sessions[session_id]
            return False

        # Optional security checks
        if user_agent and session['user_agent'] and user_agent != session['user_agent']:
            # Log suspicious activity
            self.log_suspicious_activity(session_id, 'user_agent_mismatch')
            return False

        if ip_address and session['ip_address'] and ip_address != session['ip_address']:
            # Allow some IP changes (e.g., mobile networks) but log
            self.log_suspicious_activity(session_id, 'ip_address_change')

        # Update last activity
        session['last_activity'] = datetime.now()

        return True

    def implement_account_lockout(self, username):
        # Track failed login attempts
        if username not in self.login_attempts:
            self.login_attempts[username] = {
                'count': 0,
                'lockout_until': None
            }

        attempts = self.login_attempts[username]

        # Check if account is locked
        if attempts['lockout_until'] and datetime.now() < attempts['lockout_until']:
            return False  # Account is locked

        attempts['count'] += 1

        if attempts['count'] >= self.max_attempts:
            attempts['lockout_until'] = datetime.now() + self.lockout_duration
            return False  # Lock account

        return True  # Allow login attempt

    def log_suspicious_activity(self, session_id, activity_type):
        # Log security events
        print(f"SECURITY: Suspicious activity {activity_type} for session {session_id}")
        # In production, this would write to security logs
```

---

## 🛡️ **WEB SECURITY CONTROLS**

### **Content Security Policy (CSP)**
- **Directive Types:** default-src, script-src, style-src, img-src
- **Policy Enforcement:** Block or report policy violations
- **Nonce-Based CSP:** Dynamic script/style authorization
- **Strict CSP:** Highly restrictive security policies
- **CSP Reporting:** Violation reporting and monitoring

### **Security Headers Implementation**
- **X-Frame-Options:** Clickjacking protection
- **X-Content-Type-Options:** MIME type sniffing prevention
- **Strict-Transport-Security:** HTTP to HTTPS enforcement
- **Referrer-Policy:** Referrer information control
- **Permissions-Policy:** Feature access control

### **Web Application Firewall (WAF)**
```python
class WebApplicationFirewall:
    def __init__(self):
        self.rules = {
            'sql_injection': self.detect_sql_injection,
            'xss': self.detect_xss,
            'path_traversal': self.detect_path_traversal,
            'command_injection': self.detect_command_injection,
            'csrf': self.detect_csrf
        }

    def inspect_request(self, request):
        violations = []

        for rule_name, rule_function in self.rules.items():
            if rule_function(request):
                violations.append({
                    'rule': rule_name,
                    'severity': self.get_severity(rule_name),
                    'action': self.get_action(rule_name),
                    'timestamp': datetime.now()
                })

        return violations

    def detect_sql_injection(self, request):
        sql_patterns = [
            r'(\bunion\b|\bselect\b|\binsert\b|\bupdate\b|\bdelete\b|\bdrop\b)',
            r'(\bor\b\s+\d+\s*=\s*\d+)',
            r'(\bscript\b)',
            r'(\bon\w+\s*=)',
        ]

        for pattern in sql_patterns:
            if re.search(pattern, str(request), re.IGNORECASE):
                return True
        return False

    def detect_xss(self, request):
        xss_patterns = [
            r'<script[^>]*>.*?</script>',
            r'javascript:',
            r'on\w+\s*=',
            r'<iframe[^>]*>.*?</iframe>',
        ]

        for pattern in xss_patterns:
            if re.search(pattern, str(request), re.IGNORECASE):
                return True
        return False

    def detect_path_traversal(self, request):
        if '..' in str(request) or '../' in str(request):
            return True
        return False

    def detect_command_injection(self, request):
        command_patterns = [
            r'[;&|]',
            r'\$\(',
            r'`.*`',
        ]

        for pattern in command_patterns:
            if re.search(pattern, str(request)):
                return True
        return False

    def detect_csrf(self, request):
        # Check for CSRF token in state-changing requests
        if request.method in ['POST', 'PUT', 'DELETE', 'PATCH']:
            if 'csrf_token' not in request.headers and 'csrf_token' not in request.data:
                return True
        return False

    def get_severity(self, rule_name):
        severity_map = {
            'sql_injection': 'Critical',
            'xss': 'High',
            'path_traversal': 'High',
            'command_injection': 'Critical',
            'csrf': 'Medium'
        }
        return severity_map.get(rule_name, 'Medium')

    def get_action(self, rule_name):
        action_map = {
            'sql_injection': 'Block',
            'xss': 'Block',
            'path_traversal': 'Block',
            'command_injection': 'Block',
            'csrf': 'Block'
        }
        return action_map.get(rule_name, 'Log')
```

---

## 🔒 **API SECURITY**

### **REST API Security**
- **Authentication:** API key, OAuth 2.0, JWT tokens
- **Authorization:** Scope-based access control
- **Input Validation:** Schema validation and sanitization
- **Rate Limiting:** API abuse prevention
- **HTTPS Enforcement:** Secure communication

### **API Vulnerabilities**
- **Broken Object Level Authorization:** IDOR attacks
- **Broken Authentication:** Weak API authentication
- **Excessive Data Exposure:** Over-exposed data
- **Lack of Resources & Rate Limiting:** DoS vulnerabilities
- **Broken Function Level Authorization:** Privilege escalation

### **Secure API Implementation**
```python
from flask import Flask, request, jsonify
import jwt
from functools import wraps
from datetime import datetime, timedelta
import time

class SecureAPI:
    def __init__(self, secret_key):
        self.app = Flask(__name__)
        self.secret_key = secret_key
        self.rate_limits = {}

    def require_auth(self, f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            token = request.headers.get('Authorization')

            if not token:
                return jsonify({'error': 'Missing authentication token'}), 401

            try:
                # Remove 'Bearer ' prefix if present
                if token.startswith('Bearer '):
                    token = token[7:]

                payload = jwt.decode(token, self.secret_key, algorithms=['HS256'])
                request.user_id = payload['user_id']
            except jwt.ExpiredSignatureError:
                return jsonify({'error': 'Token has expired'}), 401
            except jwt.InvalidTokenError:
                return jsonify({'error': 'Invalid token'}), 401

            return f(*args, **kwargs)
        return decorated_function

    def rate_limit(self, max_requests=100, window_seconds=60):
        def decorator(f):
            @wraps(f)
            def decorated_function(*args, **kwargs):
                client_ip = request.remote_addr
                current_time = time.time()

                if client_ip not in self.rate_limits:
                    self.rate_limits[client_ip] = []

                # Remove old requests outside the window
                self.rate_limits[client_ip] = [
                    req_time for req_time in self.rate_limits[client_ip]
                    if current_time - req_time < window_seconds
                ]

                if len(self.rate_limits[client_ip]) >= max_requests:
                    return jsonify({'error': 'Rate limit exceeded'}), 429

                self.rate_limits[client_ip].append(current_time)
                return f(*args, **kwargs)
            return decorated_function
        return decorator

    def validate_input(self, schema):
        def decorator(f):
            @wraps(f)
            def decorated_function(*args, **kwargs):
                try:
                    # Simple schema validation (in production, use libraries like marshmallow)
                    data = request.get_json()
                    for field, field_type in schema.items():
                        if field not in data:
                            return jsonify({'error': f'Missing required field: {field}'}), 400
                        if not isinstance(data[field], field_type):
                            return jsonify({'error': f'Invalid type for field: {field}'}), 400
                except Exception:
                    return jsonify({'error': 'Invalid JSON data'}), 400

                return f(*args, **kwargs)
            return decorated_function
        return decorator

    def generate_token(self, user_id):
        payload = {
            'user_id': user_id,
            'exp': datetime.utcnow() + timedelta(hours=1),
            'iat': datetime.utcnow()
        }
        return jwt.encode(payload, self.secret_key, algorithm='HS256')
```

---

## 🎯 **KEY LEARNING OBJECTIVES**

- ✅ Understand OWASP Top 10 web application vulnerabilities
- ✅ Prevent injection attacks (SQLi, XSS, command injection)
- ✅ Implement secure authentication and session management
- ✅ Configure web security controls and headers
- ✅ Secure web APIs and prevent API vulnerabilities
- ✅ Conduct web application security testing

---

## 🛠️ **ESSENTIAL TOOLS & TECHNIQUES**

- **Web Vulnerability Scanners:** OWASP ZAP, Burp Suite, Acunetix
- **WAF Solutions:** ModSecurity, Cloudflare WAF, AWS WAF
- **Security Headers:** Security Headers scanner, Mozilla Observatory
- **API Security:** Postman, Insomnia, REST-assured
- **Code Analysis:** SonarQube, ESLint security plugins
- **Browser Security:** Content Security Policy tools, HTTPS enforcement

---

## 📚 **QUICK REFERENCE**

| OWASP Risk | Description | Prevention |
|------------|-------------|------------|
| **A01 - Broken Access Control** | Unauthorized resource access | Access control checks, JWT validation |
| **A02 - Crypto Failures** | Weak encryption, exposed secrets | TLS 1.3, secure key management |
| **A03 - Injection** | Malicious code injection | Parameterized queries, input validation |
| **A04 - Insecure Design** | Security design flaws | Threat modeling, secure design patterns |
| **A05 - Misconfiguration** | Improper security settings | Secure defaults, configuration scanning |
| **A06 - Vulnerable Components** | Outdated libraries | Dependency scanning, patch management |
| **A07 - Auth Failures** | Weak authentication | MFA, secure session management |
| **A08 - Integrity Failures** | Software/data tampering | Digital signatures, integrity checks |
| **A09 - Logging Failures** | Insufficient monitoring | Security logging, alerting |
| **A10 - SSRF** | Server-side request forgery | Input validation, network restrictions |

---

*Module 07 provides essential knowledge for securing web applications and preventing common web-based attacks.*