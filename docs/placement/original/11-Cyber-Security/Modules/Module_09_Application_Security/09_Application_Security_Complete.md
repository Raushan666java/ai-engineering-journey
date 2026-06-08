# 🛡️ Module 9: Application Security - Complete Guide

## 📚 Table of Contents
1. [Introduction to Application Security](#introduction)
2. [Secure Software Development Lifecycle (SSDLC)](#ssdlc)
3. [Static Application Security Testing (SAST)](#sast)
4. [Dynamic Application Security Testing (DAST)](#dast)
5. [Interactive Application Security Testing (IAST)](#iast)
6. [Software Composition Analysis (SCA)](#sca)
7. [Threat Modeling](#threat-modeling)
8. [Security Code Review](#code-review)
9. [Security Testing Automation](#automation)
10. [Container & Kubernetes Security](#container-security)

---

## 🎯 Introduction to Application Security

### Application Security Landscape

```
Application Security Pillars:
├── Prevention
│   ├── Secure coding practices
│   ├── Security training
│   └── Design reviews
├── Detection
│   ├── SAST tools
│   ├── DAST tools
│   └── Penetration testing
├── Response
│   ├── Vulnerability management
│   ├── Patch management
│   └── Incident response
└── Continuous Improvement
    ├── Metrics & KPIs
    ├── Lessons learned
    └── Process optimization
```

### Application Security vs Network Security

| Aspect | Network Security | Application Security |
|--------|-----------------|---------------------|
| **Focus** | Infrastructure | Code & Logic |
| **Layer** | OSI Layers 3-4 | OSI Layer 7 |
| **Tools** | Firewall, IDS/IPS | SAST, DAST, WAF |
| **Threats** | DDoS, Port scan | SQL injection, XSS |
| **Testing** | Vulnerability scan | Code review, Pentest |

---

## 🔄 Secure Software Development Lifecycle (SSDLC)

### 1. SSDLC Phases

```
1. Requirements Phase
   ├── Security requirements gathering
   ├── Compliance requirements (PCI-DSS, HIPAA, GDPR)
   └── Risk assessment

2. Design Phase
   ├── Threat modeling (STRIDE, PASTA)
   ├── Security architecture review
   └── Data flow diagrams

3. Development Phase
   ├── Secure coding guidelines
   ├── Static analysis (SAST)
   └── Code review

4. Testing Phase
   ├── Dynamic testing (DAST)
   ├── Penetration testing
   └── Security test cases

5. Deployment Phase
   ├── Security configuration
   ├── Hardening
   └── Security monitoring

6. Maintenance Phase
   ├── Vulnerability management
   ├── Patch management
   └── Security updates
```

### 2. Security Requirements

```yaml
# Example security requirements document

application_name: "E-Commerce Platform"

authentication:
  - Multi-factor authentication for admin users
  - Password complexity: min 12 chars, uppercase, lowercase, number, special
  - Account lockout after 5 failed attempts
  - Session timeout: 30 minutes inactivity

authorization:
  - Role-based access control (RBAC)
  - Principle of least privilege
  - Separation of duties

data_protection:
  - Encrypt sensitive data at rest (AES-256)
  - Encrypt data in transit (TLS 1.3+)
  - PII data tokenization
  - Secure key management (HSM or KMS)

input_validation:
  - Whitelist input validation
  - Parameterized queries for database
  - Output encoding based on context
  - File upload restrictions

logging_monitoring:
  - Log all authentication attempts
  - Log all administrative actions
  - Real-time security monitoring
  - Log retention: 90 days

compliance:
  - PCI-DSS Level 1
  - GDPR compliance
  - SOC 2 Type II
```

### 3. Security Design Patterns

```python
# 1. Secure Factory Pattern
class UserFactory:
    @staticmethod
    def create_user(user_type, data):
        # Validate input
        if not UserFactory.validate_user_data(data):
            raise ValueError("Invalid user data")
        
        # Create user based on type
        if user_type == "admin":
            return AdminUser(data)
        elif user_type == "customer":
            return CustomerUser(data)
        else:
            raise ValueError("Invalid user type")
    
    @staticmethod
    def validate_user_data(data):
        # Input validation logic
        required_fields = ['username', 'email', 'password']
        return all(field in data for field in required_fields)

# 2. Secure Singleton Pattern
class DatabaseConnection:
    _instance = None
    _lock = threading.Lock()
    
    def __new__(cls):
        if cls._instance is None:
            with cls._lock:
                if cls._instance is None:
                    cls._instance = super().__new__(cls)
                    cls._instance.connection = cls._create_secure_connection()
        return cls._instance
    
    @staticmethod
    def _create_secure_connection():
        # Secure connection with encryption
        return psycopg2.connect(
            host=os.getenv('DB_HOST'),
            database=os.getenv('DB_NAME'),
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASSWORD'),
            sslmode='require'
        )

# 3. Decorator Pattern for Authorization
def require_permission(permission):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            user = get_current_user()
            if not user.has_permission(permission):
                raise PermissionError(f"User lacks {permission} permission")
            return func(*args, **kwargs)
        return wrapper
    return decorator

@require_permission('delete_user')
def delete_user(user_id):
    # Delete user logic
    pass

# 4. Strategy Pattern for Authentication
class AuthenticationStrategy:
    def authenticate(self, credentials):
        raise NotImplementedError

class PasswordAuthStrategy(AuthenticationStrategy):
    def authenticate(self, credentials):
        # Password validation
        user = User.get_by_username(credentials['username'])
        return bcrypt.checkpw(credentials['password'], user.password_hash)

class MFAAuthStrategy(AuthenticationStrategy):
    def authenticate(self, credentials):
        # MFA validation
        user = User.get_by_username(credentials['username'])
        return pyotp.TOTP(user.mfa_secret).verify(credentials['otp_code'])

class AuthenticationContext:
    def __init__(self, strategy: AuthenticationStrategy):
        self.strategy = strategy
    
    def authenticate(self, credentials):
        return self.strategy.authenticate(credentials)
```

---

## 🔍 Static Application Security Testing (SAST)

### 1. SAST Tools Overview

```
Commercial SAST Tools:
├── Checkmarx
├── Fortify SCA
├── Veracode
└── Coverity

Open Source SAST Tools:
├── SonarQube
├── Bandit (Python)
├── Brakeman (Ruby)
├── FindBugs/SpotBugs (Java)
├── ESLint (JavaScript)
└── Semgrep
```

### 2. SonarQube Integration

```yaml
# sonar-project.properties
sonar.projectKey=my-project
sonar.projectName=My Project
sonar.projectVersion=1.0
sonar.sources=src
sonar.tests=tests
sonar.language=py
sonar.python.coverage.reportPaths=coverage.xml
sonar.python.pylint.reportPath=pylint-report.txt

# Security rules
sonar.security.hotspots=true
sonar.security.sql-injection=true
sonar.security.xss=true
sonar.security.csrf=true
```

```bash
# Run SonarQube scan
sonar-scanner \
  -Dsonar.projectKey=my-project \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=admin_token
```

### 3. Bandit (Python SAST)

```bash
# Install Bandit
pip install bandit

# Run scan on single file
bandit example.py

# Run scan on directory
bandit -r /path/to/project

# Generate report
bandit -r /path/to/project -f json -o report.json
bandit -r /path/to/project -f html -o report.html

# Exclude directories
bandit -r /path/to/project --exclude tests/,venv/

# Custom configuration
bandit -r /path/to/project -c bandit.yaml
```

```yaml
# .bandit configuration
exclude_dirs:
  - /tests
  - /venv
  - /.git

tests:
  - B201  # Flask debug mode
  - B301  # Pickle
  - B302  # Marshal
  - B303  # MD5
  - B304  # SHA1
  - B305  # Cipher
  - B306  # TempFile
  - B307  # Eval
  - B308  # Mark_safe
  - B309  # HTTPSConnection
  - B310  # URLopen
  - B311  # Random
  - B312  # Telnetlib
  - B313  # XML
  - B314  # XML
  - B315  # XML
  - B316  # XML
  - B317  # XML
  - B318  # XML
  - B319  # XML
  - B320  # XML
  - B321  # FTP
  - B322  # Input
  - B323  # Unverified SSL
  - B324  # Weak hash
  - B325  # Tempfile
  - B401  # Import telnetlib
  - B402  # Import ftplib
  - B403  # Import pickle
  - B404  # Import subprocess
  - B405  # Import lxml
  - B406  # Import mktemp
  - B407  # Eval
  - B408  # Exec
  - B410  # Import lxml
  - B411  # Import xmlrpclib
  - B412  # Import cryptography
  - B413  # Import pycrypto
  - B501  # SSL insecure request
  - B502  # SSL bad certificate
  - B503  # SSL bad cipher
  - B504  # SSL bad defaults
  - B505  # Weak crypto
  - B506  # YAML load
  - B507  # SSH no host key
  - B601  # Paramiko exec
  - B602  # Shell injection
  - B603  # Shell=True
  - B604  # Shell injection
  - B605  # Shell injection
  - B606  # Shell injection
  - B607  # Partial path
  - B608  # SQL injection
  - B609  # Wildcard injection
```

### 4. Semgrep Rules

```yaml
# .semgrep.yml
rules:
  - id: sql-injection
    patterns:
      - pattern: cursor.execute($QUERY + $INPUT)
      - pattern: cursor.execute(f"... {$INPUT} ...")
      - pattern: cursor.execute("... %s ..." % $INPUT)
    message: Potential SQL injection vulnerability
    languages: [python]
    severity: ERROR
    
  - id: hardcoded-password
    patterns:
      - pattern: password = "..."
      - pattern: PASSWORD = "..."
    message: Hardcoded password detected
    languages: [python]
    severity: WARNING
    
  - id: insecure-random
    patterns:
      - pattern: random.random()
      - pattern: random.randint(...)
    message: Use secrets module for cryptographic randomness
    languages: [python]
    severity: WARNING
    
  - id: unsafe-deserialization
    patterns:
      - pattern: pickle.loads($INPUT)
      - pattern: yaml.load($INPUT)
    message: Unsafe deserialization
    languages: [python]
    severity: ERROR
```

```bash
# Run Semgrep
semgrep --config=.semgrep.yml src/

# Use predefined rulesets
semgrep --config=p/security-audit
semgrep --config=p/owasp-top-ten
semgrep --config=p/cwe-top-25
```

### 5. Custom SAST Rules Example

```python
# custom_sast_checker.py
import ast
import sys

class SecurityChecker(ast.NodeVisitor):
    def __init__(self):
        self.issues = []
    
    def visit_Call(self, node):
        # Check for eval()
        if isinstance(node.func, ast.Name) and node.func.id == 'eval':
            self.issues.append({
                'line': node.lineno,
                'issue': 'Use of eval() detected',
                'severity': 'HIGH'
            })
        
        # Check for exec()
        if isinstance(node.func, ast.Name) and node.func.id == 'exec':
            self.issues.append({
                'line': node.lineno,
                'issue': 'Use of exec() detected',
                'severity': 'HIGH'
            })
        
        # Check for pickle.loads()
        if (isinstance(node.func, ast.Attribute) and 
            node.func.attr == 'loads' and
            isinstance(node.func.value, ast.Name) and
            node.func.value.id == 'pickle'):
            self.issues.append({
                'line': node.lineno,
                'issue': 'Unsafe deserialization with pickle.loads()',
                'severity': 'HIGH'
            })
        
        self.generic_visit(node)
    
    def visit_Str(self, node):
        # Check for hardcoded passwords
        if any(keyword in node.s.lower() for keyword in ['password', 'secret', 'api_key']):
            self.issues.append({
                'line': node.lineno,
                'issue': 'Potential hardcoded credential',
                'severity': 'MEDIUM'
            })
        
        self.generic_visit(node)

def analyze_file(filename):
    with open(filename, 'r') as f:
        tree = ast.parse(f.read(), filename=filename)
    
    checker = SecurityChecker()
    checker.visit(tree)
    
    return checker.issues

if __name__ == '__main__':
    issues = analyze_file(sys.argv[1])
    for issue in issues:
        print(f"Line {issue['line']}: [{issue['severity']}] {issue['issue']}")
```

---

## 🌐 Dynamic Application Security Testing (DAST)

### 1. DAST Tools

```
Commercial DAST Tools:
├── Burp Suite Professional
├── Acunetix
├── AppScan
└── Netsparker

Open Source DAST Tools:
├── OWASP ZAP
├── Nikto
├── W3af
└── Arachni
```

### 2. OWASP ZAP Automation

```python
# zap_scan.py
from zapv2 import ZAPv2
import time

# ZAP configuration
zap = ZAPv2(apikey='your-api-key', proxies={
    'http': 'http://127.0.0.1:8080',
    'https': 'http://127.0.0.1:8080'
})

target = 'http://example.com'

# Spider the target
print('Spidering target...')
scan_id = zap.spider.scan(target)
while int(zap.spider.status(scan_id)) < 100:
    print(f'Spider progress: {zap.spider.status(scan_id)}%')
    time.sleep(2)

print('Spider completed')

# Active scan
print('Starting active scan...')
scan_id = zap.ascan.scan(target)
while int(zap.ascan.status(scan_id)) < 100:
    print(f'Scan progress: {zap.ascan.status(scan_id)}%')
    time.sleep(5)

print('Scan completed')

# Get alerts
print('Retrieving alerts...')
alerts = zap.core.alerts(baseurl=target)

# Generate report
high_alerts = [alert for alert in alerts if alert['risk'] == 'High']
medium_alerts = [alert for alert in alerts if alert['risk'] == 'Medium']
low_alerts = [alert for alert in alerts if alert['risk'] == 'Low']

print(f'\nHigh: {len(high_alerts)}')
print(f'Medium: {len(medium_alerts)}')
print(f'Low: {len(low_alerts)}')

# Save HTML report
with open('zap_report.html', 'w') as f:
    f.write(zap.core.htmlreport())

print('Report saved to zap_report.html')
```

```bash
# Run ZAP in daemon mode
zap.sh -daemon -port 8080 -config api.key=your-api-key

# Run Python script
python zap_scan.py
```

### 3. Nikto Web Scanner

```bash
# Basic scan
nikto -h http://example.com

# Scan with specific port
nikto -h http://example.com -p 8080

# SSL scan
nikto -h https://example.com -ssl

# Scan with authentication
nikto -h http://example.com -id username:password

# Use specific plugins
nikto -h http://example.com -Plugins "apache;cgi"

# Save report
nikto -h http://example.com -o report.html -Format html

# Scan multiple hosts
nikto -h hosts.txt

# Tune options (reduce false positives)
nikto -h http://example.com -Tuning 123bde
```

### 4. Burp Suite Automation

```python
# burp_api.py
import requests
import json

class BurpAPI:
    def __init__(self, api_url, api_key):
        self.api_url = api_url
        self.api_key = api_key
        self.headers = {'Authorization': f'Bearer {api_key}'}
    
    def create_scan(self, target_url, scan_type='active'):
        data = {
            'target': target_url,
            'scan_type': scan_type
        }
        response = requests.post(
            f'{self.api_url}/scans',
            headers=self.headers,
            json=data
        )
        return response.json()['scan_id']
    
    def get_scan_status(self, scan_id):
        response = requests.get(
            f'{self.api_url}/scans/{scan_id}',
            headers=self.headers
        )
        return response.json()
    
    def get_scan_results(self, scan_id):
        response = requests.get(
            f'{self.api_url}/scans/{scan_id}/results',
            headers=self.headers
        )
        return response.json()

# Usage
burp = BurpAPI('http://localhost:1337', 'your-api-key')
scan_id = burp.create_scan('http://example.com')
print(f'Scan started: {scan_id}')
```

---

## 🔄 Interactive Application Security Testing (IAST)

### 1. IAST Concept

```
Traditional Testing:
SAST (Code) -----> DAST (Running App)
    ↓                      ↓
False Positives      No Code Context

IAST:
Runtime Instrumentation
    ↓
Code + Data Flow + HTTP Traffic
    ↓
Accurate Vulnerability Detection
```

### 2. Contrast Security IAST Example

```python
# Install Contrast agent
# pip install contrast-agent

# app.py with Contrast
from contrast import ContrastAgent
from flask import Flask

# Initialize Contrast agent
agent = ContrastAgent(
    api_key='your-api-key',
    service_key='your-service-key',
    username='your-username',
    api_url='https://app.contrastsecurity.com/Contrast/api'
)

app = Flask(__name__)

# Agent automatically instruments the application
agent.instrument(app)

@app.route('/user/<user_id>')
def get_user(user_id):
    # Contrast monitors this at runtime
    query = f"SELECT * FROM users WHERE id = {user_id}"  # SQL injection!
    result = db.execute(query)
    return result

if __name__ == '__main__':
    app.run()
```

### 3. Seeker IAST Integration

```yaml
# Dockerfile with Seeker
FROM python:3.9

# Install Seeker agent
RUN curl -o seeker-agent.jar \
    https://seeker-server/rest/api/latest/agents/java

# Configure Seeker
ENV SEEKER_SERVER_URL=https://seeker-server
ENV SEEKER_PROJECT_KEY=your-project-key

# Run application with Seeker
CMD ["java", "-javaagent:seeker-agent.jar", "-jar", "app.jar"]
```

---

## 📦 Software Composition Analysis (SCA)

### 1. Dependency Scanning

```bash
# Python - Safety
pip install safety
safety check
safety check --json --output safety-report.json

# Python - pip-audit
pip install pip-audit
pip-audit
pip-audit --fix

# Node.js - npm audit
npm audit
npm audit fix
npm audit --json > npm-audit.json

# Node.js - Snyk
npm install -g snyk
snyk auth
snyk test
snyk monitor

# Java - OWASP Dependency-Check
dependency-check --project "My Project" --scan /path/to/project
```

### 2. GitHub Dependabot

```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    reviewers:
      - "security-team"
    labels:
      - "dependencies"
      - "security"
    
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10
    
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
```

### 3. Automated Vulnerability Scanning

```python
# vulnerability_scanner.py
import requests
import json

class VulnerabilityScanner:
    def __init__(self):
        self.ossindex_api = "https://ossindex.sonatype.org/api/v3/component-report"
    
    def scan_dependencies(self, packages):
        """
        Scan dependencies using OSS Index API
        """
        components = []
        for package, version in packages.items():
            # Format: pkg:pypi/package@version
            purl = f"pkg:pypi/{package}@{version}"
            components.append({"coordinates": purl})
        
        response = requests.post(
            self.ossindex_api,
            json={"coordinates": [c["coordinates"] for c in components]}
        )
        
        vulnerabilities = []
        for component in response.json():
            if component.get('vulnerabilities'):
                vulnerabilities.append({
                    'package': component['coordinates'],
                    'vulnerabilities': component['vulnerabilities']
                })
        
        return vulnerabilities
    
    def generate_report(self, vulnerabilities):
        """
        Generate HTML report
        """
        html = "<html><body><h1>Vulnerability Report</h1>"
        
        for vuln in vulnerabilities:
            html += f"<h2>{vuln['package']}</h2>"
            html += "<ul>"
            for v in vuln['vulnerabilities']:
                html += f"<li><b>{v['cve']}</b>: {v['description']}</li>"
            html += "</ul>"
        
        html += "</body></html>"
        
        with open('vulnerability_report.html', 'w') as f:
            f.write(html)

# Usage
scanner = VulnerabilityScanner()
packages = {
    'django': '2.2.0',
    'requests': '2.20.0',
    'flask': '0.12.0'
}
vulnerabilities = scanner.scan_dependencies(packages)
scanner.generate_report(vulnerabilities)
```

---

## 🎯 Threat Modeling

### 1. STRIDE Methodology

```
Spoofing Identity
├── User impersonation
├── IP spoofing
└── Session hijacking

Tampering with Data
├── SQL injection
├── MITM attacks
└── Data manipulation

Repudiation
├── Missing audit logs
├── Non-traceable actions
└── Denial of actions

Information Disclosure
├── Sensitive data exposure
├── Information leakage
└── Insufficient encryption

Denial of Service
├── Resource exhaustion
├── Application crash
└── Service unavailable

Elevation of Privilege
├── Privilege escalation
├── Admin access bypass
└── Unauthorized actions
```

### 2. Threat Modeling Example

```python
# threat_model.py
class ThreatModel:
    def __init__(self, application_name):
        self.application_name = application_name
        self.assets = []
        self.threats = []
        self.mitigations = []
    
    def add_asset(self, name, value, sensitivity):
        self.assets.append({
            'name': name,
            'value': value,
            'sensitivity': sensitivity
        })
    
    def identify_threats(self):
        """
        Apply STRIDE to each asset
        """
        for asset in self.assets:
            # Spoofing
            self.threats.append({
                'asset': asset['name'],
                'category': 'Spoofing',
                'threat': 'Attacker impersonates legitimate user',
                'impact': asset['value'],
                'likelihood': 'Medium'
            })
            
            # Tampering
            self.threats.append({
                'asset': asset['name'],
                'category': 'Tampering',
                'threat': 'Unauthorized modification of data',
                'impact': asset['value'],
                'likelihood': 'High'
            })
            
            # Repudiation
            self.threats.append({
                'asset': asset['name'],
                'category': 'Repudiation',
                'threat': 'User denies performing action',
                'impact': asset['value'],
                'likelihood': 'Low'
            })
            
            # Information Disclosure
            if asset['sensitivity'] == 'High':
                self.threats.append({
                    'asset': asset['name'],
                    'category': 'Information Disclosure',
                    'threat': 'Sensitive data exposure',
                    'impact': 'Critical',
                    'likelihood': 'Medium'
                })
            
            # Denial of Service
            self.threats.append({
                'asset': asset['name'],
                'category': 'Denial of Service',
                'threat': 'Service unavailability',
                'impact': asset['value'],
                'likelihood': 'Medium'
            })
            
            # Elevation of Privilege
            self.threats.append({
                'asset': asset['name'],
                'category': 'Elevation of Privilege',
                'threat': 'Unauthorized privilege escalation',
                'impact': 'Critical',
                'likelihood': 'High'
            })
    
    def calculate_risk(self, threat):
        impact_values = {'Low': 1, 'Medium': 2, 'High': 3, 'Critical': 4}
        likelihood_values = {'Low': 1, 'Medium': 2, 'High': 3}
        
        impact = impact_values.get(threat['impact'], 2)
        likelihood = likelihood_values.get(threat['likelihood'], 2)
        
        risk_score = impact * likelihood
        
        if risk_score >= 9:
            return 'Critical'
        elif risk_score >= 6:
            return 'High'
        elif risk_score >= 3:
            return 'Medium'
        else:
            return 'Low'
    
    def generate_report(self):
        print(f"Threat Model for: {self.application_name}\n")
        print("=" * 80)
        
        for threat in self.threats:
            risk = self.calculate_risk(threat)
            print(f"\nAsset: {threat['asset']}")
            print(f"Category: {threat['category']}")
            print(f"Threat: {threat['threat']}")
            print(f"Impact: {threat['impact']}")
            print(f"Likelihood: {threat['likelihood']}")
            print(f"Risk Level: {risk}")
            print("-" * 80)

# Usage
tm = ThreatModel("E-Commerce Application")
tm.add_asset("Customer Database", "Critical", "High")
tm.add_asset("Payment Gateway", "Critical", "High")
tm.add_asset("Product Catalog", "Medium", "Low")
tm.identify_threats()
tm.generate_report()
```

---

## 🔐 Security Code Review Checklist

```python
# security_code_review_checklist.py

CHECKLIST = {
    "Authentication & Authorization": [
        "Multi-factor authentication implemented?",
        "Password complexity requirements enforced?",
        "Session timeout configured?",
        "Secure password storage (bcrypt, Argon2)?",
        "Role-based access control implemented?",
        "Principle of least privilege applied?",
        "API authentication (OAuth 2.0, JWT)?",
    ],
    
    "Input Validation": [
        "All user inputs validated?",
        "Whitelist validation used?",
        "Parameterized queries for database?",
        "File upload restrictions?",
        "Content-Type validation?",
        "Size limits enforced?",
    ],
    
    "Output Encoding": [
        "HTML encoding for HTML context?",
        "JavaScript encoding for JS context?",
        "URL encoding for URL context?",
        "SQL encoding for SQL context?",
        "XML encoding for XML context?",
    ],
    
    "Cryptography": [
        "Strong encryption algorithms (AES-256)?",
        "Secure random number generation?",
        "Proper key management?",
        "TLS 1.2+ for data in transit?",
        "Certificate validation?",
        "No hardcoded secrets?",
    ],
    
    "Error Handling": [
        "Generic error messages to users?",
        "Detailed logging for debugging?",
        "No sensitive data in error messages?",
        "Proper exception handling?",
        "No stack traces exposed?",
    ],
    
    "Session Management": [
        "Secure session ID generation?",
        "HttpOnly and Secure flags set?",
        "SameSite cookie attribute?",
        "Session regeneration after login?",
        "Logout functionality secure?",
    ],
    
    "API Security": [
        "Rate limiting implemented?",
        "API versioning?",
        "Input validation on API endpoints?",
        "CORS properly configured?",
        "API authentication & authorization?",
    ],
    
    "Database Security": [
        "Parameterized queries/ORMs used?",
        "Principle of least privilege for DB user?",
        "Database encryption at rest?",
        "Regular backups?",
        "SQL injection prevention?",
    ],
    
    "File Operations": [
        "Path traversal prevention?",
        "File type validation?",
        "Virus scanning for uploads?",
        "Secure file permissions?",
        "No untrusted data in file paths?",
    ],
    
    "Logging & Monitoring": [
        "Authentication events logged?",
        "Authorization failures logged?",
        "Admin actions logged?",
        "No sensitive data in logs?",
        "Log integrity protection?",
        "Security monitoring configured?",
    ]
}

def generate_review_report(checklist_results):
    """
    Generate security code review report
    """
    total_items = sum(len(items) for items in CHECKLIST.values())
    passed_items = sum(1 for results in checklist_results.values() 
                      for result in results if result)
    
    score = (passed_items / total_items) * 100
    
    print(f"Security Code Review Report")
    print(f"Overall Score: {score:.2f}%\n")
    
    for category, items in CHECKLIST.items():
        print(f"\n{category}:")
        for i, item in enumerate(items):
            status = "✓" if checklist_results.get(category, [])[i] else "✗"
            print(f"  {status} {item}")
```

---

## 🐋 Container & Kubernetes Security

### 1. Docker Security Best Practices

```dockerfile
# ❌ INSECURE Dockerfile
FROM ubuntu:latest
RUN apt-get update && apt-get install -y python3
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
CMD ["python3", "app.py"]

# ✅ SECURE Dockerfile
FROM python:3.11-slim-bookworm

# Create non-root user
RUN useradd -m -u 1000 appuser

# Set working directory
WORKDIR /app

# Copy only requirements first (layer caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY --chown=appuser:appuser . .

# Switch to non-root user
USER appuser

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD python -c "import requests; requests.get('http://localhost:8000/health')"

# Expose port
EXPOSE 8000

# Run application
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "app:app"]
```

### 2. Container Image Scanning

```bash
# Trivy - Container vulnerability scanner
trivy image python:3.11-slim
trivy image --severity HIGH,CRITICAL myapp:latest
trivy image --format json --output results.json myapp:latest

# Clair - Container vulnerability analysis
clairctl analyze myapp:latest
clairctl report myapp:latest

# Snyk Container
snyk container test myapp:latest
snyk container monitor myapp:latest

# Anchore
anchore-cli image add myapp:latest
anchore-cli image wait myapp:latest
anchore-cli image vuln myapp:latest all
```

### 3. Kubernetes Security

```yaml
# secure-pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: secure-app
spec:
  # Security Context for Pod
  securityContext:
    runAsNonRoot: true
    runAsUser: 1000
    fsGroup: 2000
    seccompProfile:
      type: RuntimeDefault
  
  containers:
  - name: app
    image: myapp:latest
    
    # Security Context for Container
    securityContext:
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: true
      runAsNonRoot: true
      runAsUser: 1000
      capabilities:
        drop:
          - ALL
        add:
          - NET_BIND_SERVICE
    
    # Resource limits
    resources:
      limits:
        cpu: "1"
        memory: "512Mi"
      requests:
        cpu: "100m"
        memory: "128Mi"
    
    # Liveness & Readiness probes
    livenessProbe:
      httpGet:
        path: /health
        port: 8000
      initialDelaySeconds: 10
      periodSeconds: 30
    
    readinessProbe:
      httpGet:
        path: /ready
        port: 8000
      initialDelaySeconds: 5
      periodSeconds: 10
    
    # Volume mounts
    volumeMounts:
    - name: tmp
      mountPath: /tmp
    - name: cache
      mountPath: /app/cache
  
  volumes:
  - name: tmp
    emptyDir: {}
  - name: cache
    emptyDir: {}
```

```yaml
# network-policy.yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: app-network-policy
spec:
  podSelector:
    matchLabels:
      app: myapp
  policyTypes:
  - Ingress
  - Egress
  
  ingress:
  - from:
    - podSelector:
        matchLabels:
          role: frontend
    ports:
    - protocol: TCP
      port: 8000
  
  egress:
  - to:
    - podSelector:
        matchLabels:
          role: database
    ports:
    - protocol: TCP
      port: 5432
  - to:
    - namespaceSelector: {}
    ports:
    - protocol: TCP
      port: 53  # DNS
```

---

## 📊 Summary & Metrics

### Key Application Security Metrics
1. **Vulnerability Density**: Vulnerabilities per 1000 lines of code
2. **Mean Time to Remediate (MTTR)**: Average time to fix vulnerabilities
3. **Security Test Coverage**: % of code covered by security tests
4. **False Positive Rate**: % of false positives from scans
5. **Deployment Frequency**: Deployments with security checks passed

**Module 9 Complete! Next: Module 10 - Cloud Security** ☁️
