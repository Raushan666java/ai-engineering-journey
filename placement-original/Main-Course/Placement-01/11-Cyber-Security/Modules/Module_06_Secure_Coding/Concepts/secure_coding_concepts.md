# 💻 **MODULE 06: SECURE CODING**
## Secure Development Practices & Vulnerability Prevention

---

## 🎯 **SECURE CODING FUNDAMENTALS**

### **Secure Development Lifecycle (SDLC)**
- **Requirements:** Security requirements gathering
- **Design:** Secure architecture and threat modeling
- **Implementation:** Secure coding practices
- **Testing:** Security testing and code review
- **Deployment:** Secure configuration and monitoring
- **Maintenance:** Patch management and updates

### **Secure Coding Principles**
```python
class SecureCodingPrinciples:
    def __init__(self):
        self.principles = {
            'defense_in_depth': 'Multiple layers of security',
            'least_privilege': 'Minimal required permissions',
            'fail_safe': 'Secure failure handling',
            'secure_defaults': 'Secure default configurations',
            'zero_trust': 'Never trust, always verify',
            'input_validation': 'Validate all input data'
        }

    def implement_secure_practices(self):
        return {
            'input_validation': self.validate_all_inputs(),
            'output_encoding': self.encode_all_outputs(),
            'authentication': self.implement_secure_auth(),
            'authorization': self.enforce_access_control(),
            'session_management': self.secure_session_handling(),
            'error_handling': self.implement_secure_errors()
        }
```

### **Common Security Vulnerabilities**
- **Injection Attacks:** SQL, NoSQL, command injection
- **Broken Authentication:** Weak password policies, session management
- **Sensitive Data Exposure:** Unencrypted data transmission
- **XML External Entities (XXE):** External entity processing
- **Broken Access Control:** Insecure direct object references
- **Security Misconfiguration:** Default configurations, unnecessary features

---

## 🛡️ **INPUT VALIDATION & SANITIZATION**

### **Input Validation Techniques**
- **Whitelist Validation:** Allow only known good input
- **Blacklist Validation:** Block known bad input patterns
- **Type Checking:** Validate data types and ranges
- **Length Limits:** Restrict input size limits
- **Format Validation:** Regular expression pattern matching
- **Canonicalization:** Normalize input before validation

### **Input Sanitization Methods**
- **HTML Encoding:** Prevent XSS in web output
- **SQL Escaping:** Prevent SQL injection attacks
- **Command Escaping:** Prevent command injection
- **Path Sanitization:** Prevent directory traversal
- **Email Validation:** Proper email format checking
- **URL Validation:** Safe URL handling

### **Secure Input Handling**
```python
import re
from html import escape

class InputValidation:
    def __init__(self):
        self.sql_injection_patterns = [
            r'(\b(union|select|insert|update|delete|drop|create|alter)\b)',
            r'(\bor\b\s+\d+\s*=\s*\d+)',
            r'(\bscript\b)',
            r'(\bon\w+\s*=)',
        ]

    def validate_email(self, email):
        # Email validation with regex
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        return bool(re.match(pattern, email))

    def sanitize_html(self, input_string):
        # HTML encoding to prevent XSS
        return escape(input_string)

    def validate_sql_input(self, user_input):
        # Check for SQL injection patterns
        for pattern in self.sql_injection_patterns:
            if re.search(pattern, user_input, re.IGNORECASE):
                raise ValueError("Potential SQL injection detected")
        return user_input

    def validate_file_path(self, file_path):
        # Prevent directory traversal
        if '..' in file_path or file_path.startswith('/'):
            raise ValueError("Invalid file path")
        return file_path
```

---

## 🔒 **AUTHENTICATION & AUTHORIZATION**

### **Secure Authentication Implementation**
- **Password Storage:** Bcrypt, Argon2, PBKDF2 hashing
- **Multi-Factor Authentication:** 2FA/3FA implementation
- **Session Management:** Secure session handling
- **Password Policies:** Complexity and rotation requirements
- **Account Lockout:** Brute force attack prevention
- **Password Reset:** Secure password recovery

### **Authorization Controls**
- **Role-Based Access Control (RBAC):** Role-based permissions
- **Attribute-Based Access Control (ABAC):** Context-aware access
- **Access Control Lists (ACLs):** Resource-level permissions
- **Object-Level Permissions:** Fine-grained access control
- **Privilege Escalation Prevention:** Least privilege principle

### **Secure Authentication Code**
```python
import bcrypt
import secrets
from datetime import datetime, timedelta

class SecureAuthentication:
    def __init__(self):
        self.sessions = {}
        self.max_login_attempts = 5
        self.lockout_duration = timedelta(minutes=15)

    def hash_password(self, password):
        # Secure password hashing
        salt = bcrypt.gensalt()
        return bcrypt.hashpw(password.encode('utf-8'), salt)

    def verify_password(self, password, hashed):
        # Password verification
        return bcrypt.checkpw(password.encode('utf-8'), hashed)

    def generate_session_token(self):
        # Cryptographically secure session token
        return secrets.token_urlsafe(32)

    def create_session(self, user_id):
        # Create secure session
        token = self.generate_session_token()
        expiration = datetime.now() + timedelta(hours=1)

        self.sessions[token] = {
            'user_id': user_id,
            'expires': expiration,
            'ip_address': None,  # Should be set from request
            'user_agent': None   # Should be set from request
        }

        return token

    def validate_session(self, token, ip_address=None, user_agent=None):
        # Session validation with additional checks
        if token not in self.sessions:
            return False

        session = self.sessions[token]

        # Check expiration
        if datetime.now() > session['expires']:
            del self.sessions[token]
            return False

        # Optional: Check IP address and user agent for additional security
        if ip_address and session['ip_address'] and ip_address != session['ip_address']:
            return False

        if user_agent and session['user_agent'] and user_agent != session['user_agent']:
            return False

        return True
```

---

## 🛡️ **SECURE ERROR HANDLING**

### **Error Handling Best Practices**
- **Generic Error Messages:** Avoid information disclosure
- **Logging Security Events:** Secure logging implementation
- **Exception Handling:** Proper exception management
- **Fail-Safe Defaults:** Secure failure behavior
- **Resource Cleanup:** Proper resource management
- **Error Monitoring:** Security event monitoring

### **Secure Logging Implementation**
- **Log Injection Prevention:** Sanitize log input
- **Sensitive Data Protection:** Avoid logging secrets
- **Log Rotation:** Secure log file management
- **Centralized Logging:** Aggregated security logging
- **Log Analysis:** Automated security event detection

### **Secure Error Handling**
```python
import logging
import traceback
from contextlib import contextmanager

class SecureErrorHandling:
    def __init__(self):
        self.logger = logging.getLogger('security')
        self.logger.setLevel(logging.INFO)

        # Secure logging configuration
        handler = logging.FileHandler('security.log')
        formatter = logging.Formatter(
            '%(asctime)s - %(levelname)s - %(message)s'
        )
        handler.setFormatter(formatter)
        self.logger.addHandler(handler)

    def log_security_event(self, event_type, details, user_id=None):
        # Sanitize log input to prevent log injection
        safe_details = self.sanitize_log_input(str(details))

        log_message = f"SECURITY_EVENT: {event_type}"
        if user_id:
            log_message += f" - User: {user_id}"
        log_message += f" - Details: {safe_details}"

        self.logger.warning(log_message)

    def sanitize_log_input(self, input_string):
        # Remove or escape potentially dangerous characters
        dangerous_chars = ['\n', '\r', '\t']
        for char in dangerous_chars:
            input_string = input_string.replace(char, ' ')
        return input_string

    @contextmanager
    def secure_error_context(self, operation_name):
        try:
            yield
        except Exception as e:
            # Log security-relevant errors
            self.log_security_event(
                'OPERATION_ERROR',
                f"{operation_name} failed: {type(e).__name__}",
                getattr(e, 'user_id', None)
            )
            # Re-raise with generic message
            raise Exception("An error occurred during the operation") from None

    def handle_database_error(self, error):
        # Generic error message to avoid information disclosure
        self.log_security_event('DATABASE_ERROR', str(error))
        return "Database operation failed. Please try again later."
```

---

## 🔒 **SECURE DATA HANDLING**

### **Data Protection Techniques**
- **Encryption at Rest:** Database and file encryption
- **Encryption in Transit:** TLS/SSL implementation
- **Data Classification:** Sensitive data identification
- **Secure Storage:** Secure credential and key storage
- **Data Sanitization:** Secure data disposal
- **Memory Protection:** Secure memory handling

### **Secure Configuration Management**
- **Default Credentials:** Change all default passwords
- **Unnecessary Services:** Disable unused services
- **Security Headers:** Implement security headers
- **Configuration Files:** Secure configuration storage
- **Environment Variables:** Secure environment handling

### **Secure Data Operations**
```python
import os
from cryptography.fernet import Fernet
import secrets

class SecureDataHandling:
    def __init__(self):
        # Generate or load encryption key
        self.key = self.load_or_generate_key()
        self.cipher = Fernet(self.key)

    def load_or_generate_key(self):
        key_file = 'encryption.key'
        if os.path.exists(key_file):
            with open(key_file, 'rb') as f:
                return f.read()
        else:
            key = Fernet.generate_key()
            with open(key_file, 'wb') as f:
                f.write(key)
            return key

    def encrypt_sensitive_data(self, data):
        # Encrypt sensitive data
        if isinstance(data, str):
            data = data.encode('utf-8')
        return self.cipher.encrypt(data)

    def decrypt_sensitive_data(self, encrypted_data):
        # Decrypt sensitive data
        return self.cipher.decrypt(encrypted_data).decode('utf-8')

    def generate_secure_token(self, length=32):
        # Generate cryptographically secure random token
        return secrets.token_urlsafe(length)

    def secure_file_operations(self, file_path, operation, data=None):
        # Secure file operations with proper permissions
        try:
            if operation == 'write':
                with open(file_path, 'wb', opener=self.secure_opener) as f:
                    if data:
                        f.write(data)
            elif operation == 'read':
                with open(file_path, 'rb', opener=self.secure_opener) as f:
                    return f.read()
        except Exception as e:
            raise Exception("File operation failed") from e

    def secure_opener(self, path, flags):
        # Set secure file permissions (owner read/write only)
        os.chmod(path, 0o600)
        return os.open(path, flags)
```

---

## 🧪 **SECURITY TESTING & CODE REVIEW**

### **Static Application Security Testing (SAST)**
- **Code Analysis:** Automated vulnerability detection
- **Dependency Scanning:** Third-party library vulnerabilities
- **Configuration Review:** Security configuration analysis
- **Compliance Checking:** Security standard compliance
- **Custom Rules:** Organization-specific security rules

### **Dynamic Application Security Testing (DAST)**
- **Runtime Analysis:** Application behavior testing
- **Input Fuzzing:** Unexpected input testing
- **Authentication Testing:** Access control verification
- **Session Management Testing:** Session security validation
- **API Testing:** Web service security testing

### **Security Code Review Process**
```python
class SecurityCodeReview:
    def __init__(self):
        self.security_rules = {
            'input_validation': self.check_input_validation,
            'authentication': self.check_authentication,
            'authorization': self.check_authorization,
            'error_handling': self.check_error_handling,
            'cryptography': self.check_cryptography_usage,
            'logging': self.check_secure_logging
        }

    def perform_security_review(self, code_files):
        findings = []

        for file_path in code_files:
            with open(file_path, 'r') as f:
                code = f.read()

            for rule_name, check_function in self.security_rules.items():
                issues = check_function(code, file_path)
                findings.extend(issues)

        return self.prioritize_findings(findings)

    def check_input_validation(self, code, file_path):
        issues = []
        # Check for dangerous functions without validation
        dangerous_patterns = [
            (r'execute\(', 'Potential SQL injection'),
            (r'eval\(', 'Dangerous eval usage'),
            (r'exec\(', 'Dangerous exec usage'),
            (r'input\(', 'Unvalidated input usage')
        ]

        for pattern, description in dangerous_patterns:
            if re.search(pattern, code):
                issues.append({
                    'file': file_path,
                    'type': 'Input Validation',
                    'severity': 'High',
                    'description': description,
                    'line': self.find_line_number(code, pattern)
                })

        return issues

    def check_authentication(self, code, file_path):
        issues = []
        # Check for hardcoded credentials
        if re.search(r'password\s*=\s*[\'"][^\'"]*[\'"]', code, re.IGNORECASE):
            issues.append({
                'file': file_path,
                'type': 'Authentication',
                'severity': 'Critical',
                'description': 'Hardcoded password detected',
                'line': 'Multiple'
            })
        return issues

    def prioritize_findings(self, findings):
        severity_order = {'Critical': 0, 'High': 1, 'Medium': 2, 'Low': 3}
        return sorted(findings, key=lambda x: severity_order.get(x['severity'], 4))
```

---

## 🎯 **KEY LEARNING OBJECTIVES**

- ✅ Understand secure coding principles and practices
- ✅ Implement input validation and sanitization
- ✅ Secure authentication and authorization mechanisms
- ✅ Handle errors securely without information disclosure
- ✅ Protect sensitive data and secure configurations
- ✅ Conduct security testing and code reviews

---

## 🛠️ **ESSENTIAL TOOLS & TECHNIQUES**

- **SAST Tools:** SonarQube, Checkmarx, Fortify SCA
- **DAST Tools:** OWASP ZAP, Burp Suite, Acunetix
- **Dependency Scanning:** OWASP Dependency-Check, Snyk
- **Code Review Tools:** GitHub Security, GitLab SAST
- **Vulnerability Scanners:** Nessus, OpenVAS, Qualys
- **Cryptography Libraries:** OpenSSL, cryptography (Python)

---

## 📚 **QUICK REFERENCE**

| Vulnerability | Prevention Technique | Example |
|---------------|---------------------|---------|
| **SQL Injection** | Prepared statements, input validation | Use parameterized queries |
| **XSS** | Output encoding, CSP headers | HTML entity encoding |
| **CSRF** | Anti-CSRF tokens, SameSite cookies | Token validation |
| **Broken Auth** | Secure session management, MFA | Proper session handling |
| **IDOR** | Access control checks, indirect references | Object-level permissions |
| **Security Misconfig** | Secure defaults, configuration management | Automated configuration |

---

*Module 06 provides essential knowledge for writing secure code and preventing common security vulnerabilities.*