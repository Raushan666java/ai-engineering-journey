---
title: "Ethical Hacking Complete Setup Guide"
status: "completed"
difficulty: "intermediate"
module: "ethical_hacking"
tags: ["ethical_hacking", "penetration_testing", "kali_linux", "tools_setup"]
---

# 🎯 **ETHICAL HACKING COMPLETE SETUP GUIDE**
## Professional Penetration Testing Environment

---

## 📋 **EXECUTIVE SUMMARY**

### **Setup Overview**
This comprehensive guide provides a complete ethical hacking environment setup, covering:
- **Virtual Machine Configuration** - Kali Linux installation and optimization
- **Essential Tools Installation** - Core penetration testing toolkit
- **Environment Configuration** - Network setup and security hardening
- **Practice Labs** - Safe testing environments and vulnerable targets
- **Legal Framework** - Ethical guidelines and compliance requirements

### **Target Audience**
- Aspiring penetration testers
- Security professionals
- Students preparing for CEH/OSCP certifications
- IT professionals expanding into cybersecurity

### **Prerequisites**
- Computer with at least 8GB RAM (16GB recommended)
- 50GB free disk space
- Basic Linux command-line knowledge
- Understanding of networking fundamentals

---

## 🖥️ **PHASE 1: VIRTUAL MACHINE SETUP**

### **1.1 Kali Linux Installation**

#### **Download Kali Linux**
```bash
# Download Kali Linux ISO (latest version)
wget https://cdimage.kali.org/kali-2024.4/kali-linux-2024.4-installer-amd64.iso

# Verify download integrity
wget https://cdimage.kali.org/kali-2024.4/SHA256SUMS
sha256sum -c SHA256SUMS --ignore-missing
```

#### **VirtualBox Setup**
```bash
# Install VirtualBox (Ubuntu/Debian)
sudo apt update
sudo apt install -y virtualbox virtualbox-ext-pack

# Create Kali VM
VBoxManage createvm --name "Kali-Ethical-Hacking" --register
VBoxManage modifyvm "Kali-Ethical-Hacking" --memory 4096 --cpus 2
VBoxManage modifyvm "Kali-Ethical-Hacking" --nic1 bridged --bridgeadapter1 eth0
VBoxManage modifyvm "Kali-Ethical-Hacking" --usb off --audio none
VBoxManage createhd --filename ~/VirtualBox\ VMs/Kali-Ethical-Hacking/Kali.vdi --size 50000
VBoxManage storagectl "Kali-Ethical-Hacking" --name "SATA Controller" --add sata
VBoxManage storageattach "Kali-Ethical-Hacking" --storagectl "SATA Controller" --port 0 --device 0 --type hdd --medium ~/VirtualBox\ VMs/Kali-Ethical-Hacking/Kali.vdi
VBoxManage storageattach "Kali-Ethical-Hacking" --storagectl "IDE Controller" --port 0 --device 0 --type dvddrive --medium /path/to/kali-linux.iso
```

#### **VMware Workstation Setup**
```bash
# Create VM configuration
vmware-vmx -c Kali-Ethical-Hacking.vmx

# VM configuration content
cat > Kali-Ethical-Hacking.vmx << EOF
.encoding = "UTF-8"
config.version = "8"
virtualHW.version = "21"
guestOS = "debian11-64"
memsize = "4096"
numvcpus = "2"
cpuid.coresPerSocket = "1"
EOF
```

### **1.2 Post-Installation Configuration**

#### **System Updates**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install essential packages
sudo apt install -y curl wget git vim htop tmux python3-pip golang-go

# Configure bash
echo 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> ~/.bashrc
echo 'alias ll="ls -la"' >> ~/.bashrc
echo 'alias grep="grep --color=auto"' >> ~/.bashrc
source ~/.bashrc
```

#### **User Environment Setup**
```bash
# Create workspace directories
mkdir -p ~/workspace/{recon,scanning,exploitation,post-exploitation,reporting}
mkdir -p ~/tools/{custom,scripts,wordlists}
mkdir -p ~/labs/{targets,vulnerable-machines,ctf-challenges}

# Configure git
git config --global user.name "Ethical Hacker"
git config --global user.email "ethical.hacker@example.com"

# Install Oh My Zsh (optional)
sudo apt install -y zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

---

## 🛠️ **PHASE 2: ESSENTIAL TOOLS INSTALLATION**

### **2.1 Information Gathering Tools**

#### **Reconnaissance Suite**
```bash
# Install recon tools
sudo apt install -y nmap masscan dnsrecon dnsenum fierce
sudo apt install -y theharvester maltego recon-ng spiderfoot

# Install additional recon tools
pip3 install shodan censys

# Install Amass
go install -v github.com/owasp-amass/amass/v4/...@master

# Install Sublist3r
git clone https://github.com/aboul3la/Sublist3r.git ~/tools/Sublist3r
cd ~/tools/Sublist3r && pip3 install -r requirements.txt
```

#### **OSINT Framework**
```bash
# Install OSINT tools
pip3 install waybackpy social-analyzer holehe
sudo apt install -y exiftool

# Install Photon
git clone https://github.com/s0md3v/Photon.git ~/tools/Photon
cd ~/tools/Photon && pip3 install -r requirements.txt
```

### **2.2 Vulnerability Scanning**

#### **Web Application Scanners**
```bash
# Install web scanners
sudo apt install -y nikto dirb dirbuster gobuster wfuzz
sudo apt install -y sqlmap nosqlmap

# Install OWASP ZAP
wget https://github.com/zaproxy/zaproxy/releases/download/v2.15.0/ZAP_2.15.0_Linux.tar.gz
tar -xzf ZAP_2.15.0_Linux.tar.gz
sudo mv ZAP_2.15.0 /opt/zaproxy

# Install Nuclei
go install -v github.com/projectdiscovery/nuclei/v3/cmd/nuclei@latest
nuclei -update-templates
```

#### **Network Scanners**
```bash
# Install network scanners
sudo apt install -y openvas nessus
sudo apt install -y qualysguard

# Install custom scanners
pip3 install nmapthon scapy
```

### **2.3 Exploitation Framework**

#### **Metasploit Installation**
```bash
# Install Metasploit
sudo apt install -y metasploit-framework

# Initialize database
sudo systemctl start postgresql
sudo systemctl enable postgresql
sudo msfdb init

# Update Metasploit
sudo apt update && sudo apt install metasploit-framework

# Create workspace
msfconsole -q -x "workspace -a ethical_hacking; db_status; exit"
```

#### **Exploit Development Tools**
```bash
# Install exploit dev tools
sudo apt install -y gdb peda pwntools
pip3 install pwntools ropgadget

# Install Ghidra
wget https://github.com/NationalSecurityAgency/ghidra/releases/download/Ghidra_11.0_build/ghidra_11.0_PUBLIC_20231222.zip
unzip ghidra_11.0_PUBLIC_20231222.zip
sudo mv ghidra_11.0_PUBLIC /opt/ghidra
```

### **2.4 Password Cracking**

#### **Password Tools Suite**
```bash
# Install password cracking tools
sudo apt install -y john the-ripper hashcat
sudo apt install -y hydra medusa patator
sudo apt install -y cewl crunch

# Install wordlists
cd ~/tools/wordlists
wget https://github.com/danielmiessler/SecLists/archive/master.zip
unzip master.zip
git clone https://github.com/berzerk0/Probable-Wordlists.git
```

#### **GPU Acceleration Setup**
```bash
# Install CUDA for hashcat (NVIDIA)
sudo apt install -y nvidia-cuda-toolkit

# Test hashcat
hashcat --benchmark
```

### **2.5 Wireless & IoT Hacking**

#### **Wireless Tools**
```bash
# Install wireless tools
sudo apt install -y aircrack-ng reaver bully pixie-dust
sudo apt install -y kismet wifite

# Install Bluetooth tools
sudo apt install -y bluez-tools blueranger bluesnarfer
```

#### **IoT & Hardware Tools**
```bash
# Install IoT tools
pip3 install scapy-iot
sudo apt install -y binwalk firmware-mod-kit

# Install SDR tools
sudo apt install -y rtl-sdr gqrx-sdr
```

### **2.6 Web Application Testing**

#### **Burp Suite Professional**
```bash
# Download Burp Suite
wget https://portswigger.net/burp/releases/download?product=pro&version=2024.9.5&type=Linux
# Note: Requires license for professional version

# Install Burp Suite Community
sudo apt install -y burpsuite
```

#### **Web Testing Tools**
```bash
# Install additional web tools
sudo apt install -y zaproxy wpscan joomlavs
pip3 install dirsearch

# Install XSStrike
git clone https://github.com/s0md3v/XSStrike.git ~/tools/XSStrike
cd ~/tools/XSStrike && pip3 install -r requirements.txt
```

### **2.7 Post-Exploitation**

#### **Privilege Escalation Tools**
```bash
# Install privesc tools
sudo apt install -y linux-exploit-suggester
git clone https://github.com/rebootuser/LinEnum.git ~/tools/LinEnum
git clone https://github.com/carlospolop/PEASS-ng.git ~/tools/PEASS-ng

# Install Windows privesc tools
git clone https://github.com/GhostPack/Seatbelt.git ~/tools/Seatbelt
```

#### **Persistence & C2**
```bash
# Install C2 frameworks
git clone https://github.com/ZeroPointSecurity/Covenant.git ~/tools/Covenant
git clone https://github.com/BloodHoundAD/BloodHound.git ~/tools/BloodHound

# Install Empire
git clone https://github.com/EmpireProject/Empire.git ~/tools/Empire
cd ~/tools/Empire && ./setup/install.sh
```

---

## ⚙️ **PHASE 3: ENVIRONMENT CONFIGURATION**

### **3.1 Network Configuration**

#### **VPN Setup**
```bash
# Install OpenVPN
sudo apt install -y openvpn network-manager-openvpn

# Configure VPN for testing
sudo openvpn --config /path/to/vpn/config.ovpn

# Setup proxychains
sudo apt install -y proxychains
echo "socks5 127.0.0.1 9050" >> /etc/proxychains.conf
```

#### **Firewall Configuration**
```bash
# Configure UFW
sudo apt install -y ufw
sudo ufw enable
sudo ufw allow ssh
sudo ufw allow 80,443/tcp

# Test firewall
sudo ufw status
```

### **3.2 Development Environment**

#### **Python Environment**
```bash
# Install Python tools
pip3 install requests beautifulsoup4 lxml selenium
pip3 install scapy paramiko netmiko

# Install virtualenv
pip3 install virtualenv
virtualenv -p python3 ~/venv/ethical-hacking
source ~/venv/ethical-hacking/bin/activate
```

#### **Go Environment**
```bash
# Install Go tools
go install github.com/ffuf/ffuf@latest
go install github.com/tomnomnom/waybackurls@latest
go install github.com/tomnomnom/gf@latest

# Setup Go workspace
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin
```

### **3.3 Automation Scripts**

#### **Recon Automation Script**
```python
#!/usr/bin/env python3
"""
Automated Reconnaissance Script
Performs comprehensive information gathering
"""

import subprocess
import sys
import os
from datetime import datetime

class ReconAutomation:
    def __init__(self, target):
        self.target = target
        self.output_dir = f"recon_{target}_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
        os.makedirs(self.output_dir, exist_ok=True)

    def run_nmap(self):
        """Run comprehensive Nmap scan"""
        print("[+] Running Nmap scan...")
        cmd = f"nmap -sV -sC -A -p- -T4 -oA {self.output_dir}/nmap {self.target}"
        subprocess.run(cmd, shell=True)

    def run_dns_enum(self):
        """DNS enumeration"""
        print("[+] DNS enumeration...")
        cmd = f"dnsrecon -d {self.target} -t std -c {self.output_dir}/dnsrecon.csv"
        subprocess.run(cmd, shell=True)

    def run_subdomain_enum(self):
        """Subdomain enumeration"""
        print("[+] Subdomain enumeration...")
        cmd = f"sublist3r -d {self.target} -o {self.output_dir}/subdomains.txt"
        subprocess.run(cmd, shell=True)

    def run_dirbusting(self):
        """Directory busting"""
        print("[+] Directory busting...")
        cmd = f"gobuster dir -u http://{self.target} -w /usr/share/wordlists/dirb/common.txt -o {self.output_dir}/directories.txt"
        subprocess.run(cmd, shell=True)

    def generate_report(self):
        """Generate recon report"""
        print("[+] Generating report...")
        with open(f"{self.output_dir}/recon_report.txt", 'w') as f:
            f.write(f"Recon Report for {self.target}\n")
            f.write(f"Generated: {datetime.now()}\n")
            f.write("=" * 50 + "\n")

            # Add findings summary
            f.write("Findings Summary:\n")
            # Add logic to parse results and summarize

    def run_full_recon(self):
        """Run complete reconnaissance"""
        print(f"[+] Starting reconnaissance on {self.target}")
        self.run_nmap()
        self.run_dns_enum()
        self.run_subdomain_enum()
        self.run_dirbusting()
        self.generate_report()
        print(f"[+] Recon complete. Results in {self.output_dir}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python3 recon_auto.py <target>")
        sys.exit(1)

    target = sys.argv[1]
    recon = ReconAutomation(target)
    recon.run_full_recon()
```

#### **Vulnerability Scanner**
```bash
#!/bin/bash
# Automated Vulnerability Scanner

TARGET=$1
OUTPUT_DIR="scan_$(date +%Y%m%d_%H%M%S)"

mkdir -p $OUTPUT_DIR

echo "[+] Starting vulnerability scan on $TARGET"

# Nmap vulnerability scan
echo "[+] Running Nmap vuln scan..."
nmap -sV --script vuln $TARGET -oN $OUTPUT_DIR/nmap_vuln.txt

# Nikto web scan
echo "[+] Running Nikto web scan..."
nikto -h $TARGET -o $OUTPUT_DIR/nikto.txt

# OpenVAS scan (if configured)
echo "[+] Running OpenVAS scan..."
omp -u admin -w password -h localhost -p 9390 --xml $OUTPUT_DIR/openvas.xml

# Nuclei scan
echo "[+] Running Nuclei scan..."
nuclei -u $TARGET -o $OUTPUT_DIR/nuclei.txt

echo "[+] Scan complete. Results in $OUTPUT_DIR"
```

---

## 🏋️ **PHASE 4: PRACTICE LABS SETUP**

### **4.1 Vulnerable Machines**

#### **Metasploitable Setup**
```bash
# Download Metasploitable
wget https://sourceforge.net/projects/metasploitable/files/Metasploitable2/metasploitable-linux-2.0.0.zip
unzip metasploitable-linux-2.0.0.zip

# Import to VirtualBox
VBoxManage import Metasploitable.vbox

# Configure network
VBoxManage modifyvm Metasploitable --nic1 hostonly --hostonlyadapter1 vboxnet0
```

#### **DVWA (Damn Vulnerable Web App)**
```bash
# Install DVWA
sudo apt install -y apache2 mysql-server php php-mysqli
git clone https://github.com/digininja/DVWA.git /var/www/html/dvwa
cd /var/www/html/dvwa
cp config/config.inc.php.dist config/config.inc.php

# Configure database
mysql -u root -p
CREATE DATABASE dvwa;
CREATE USER 'dvwa'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON dvwa.* TO 'dvwa'@'localhost';
FLUSH PRIVILEGES;
EXIT;

# Setup DVWA
sudo chown -R www-data:www-data /var/www/html/dvwa
sudo chmod -R 755 /var/www/html/dvwa
```

#### **OWASP Juice Shop**
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Juice Shop
npm install -g @cyclonedx/cyclonedx-cli
git clone https://github.com/juice-shop/juice-shop.git
cd juice-shop
npm install
npm start
```

### **4.2 CTF Platforms**

#### **HackTheBox Setup**
```bash
# Install OpenVPN
sudo apt install -y openvpn

# Download HTB VPN config
# Connect to HTB network
sudo openvpn /path/to/htb.ovpn
```

#### **TryHackMe Setup**
```bash
# Install OpenVPN
sudo apt install -y openvpn

# Download THM VPN config
# Connect to THM network
sudo openvpn /path/to/thm.ovpn
```

#### **VulnHub Setup**
```bash
# Download vulnerable machines
wget https://download.vulnhub.com/[machine]/[machine].zip
unzip [machine].zip

# Import to VirtualBox/VMware
VBoxManage import [machine].vbox
```

### **4.3 Local Lab Network**

#### **Virtual Network Configuration**
```bash
# Create isolated network
VBoxManage hostonlyif create
VBoxManage hostonlyif ipconfig vboxnet0 --ip 192.168.56.1 --netmask 255.255.255.0

# Configure VMs
VBoxManage modifyvm Kali --nic1 hostonly --hostonlyadapter1 vboxnet0
VBoxManage modifyvm Target1 --nic1 hostonly --hostonlyadapter1 vboxnet0
VBoxManage modifyvm Target2 --nic1 hostonly --hostonlyadapter1 vboxnet0
```

#### **DHCP Server Setup**
```bash
# Install DHCP server
sudo apt install -y isc-dhcp-server

# Configure DHCP
sudo tee /etc/dhcp/dhcpd.conf > /dev/null <<EOF
subnet 192.168.56.0 netmask 255.255.255.0 {
  range 192.168.56.100 192.168.56.200;
  option routers 192.168.56.1;
  option domain-name-servers 8.8.8.8, 8.8.4.4;
}
EOF

# Start DHCP service
sudo systemctl start isc-dhcp-server
sudo systemctl enable isc-dhcp-server
```

---

## ⚖️ **PHASE 5: LEGAL & ETHICAL FRAMEWORK**

### **5.1 Legal Compliance**

#### **Rules of Engagement**
```markdown
# Penetration Testing Rules of Engagement

## Scope
- Target systems: [List approved targets]
- Testing timeframe: [Start date] to [End date]
- Testing hours: [Business hours/24x7]
- Contact information: [Point of contact]

## Rules
1. No disruption to production systems
2. Maintain confidentiality of findings
3. Follow chain of command for critical issues
4. Document all activities and findings
5. Obtain explicit written permission

## Out of Scope
- Physical security testing
- Social engineering
- Denial of service attacks
- Third-party systems not listed in scope
```

#### **Legal Requirements**
- **Written Authorization** - Get explicit permission in writing
- **Scope Definition** - Clearly define what's being tested
- **Data Handling** - Protect sensitive information discovered
- **Reporting** - Provide detailed findings and remediation advice
- **Compliance** - Follow relevant laws (Computer Fraud and Abuse Act, etc.)

### **5.2 Ethical Guidelines**

#### **Ethical Hacking Code**
1. **Integrity** - Act with honesty and integrity
2. **Confidentiality** - Protect client information
3. **Professionalism** - Maintain professional standards
4. **Competence** - Stay current with knowledge and skills
5. **Legal Compliance** - Follow all applicable laws and regulations

#### **Responsible Disclosure**
```python
# Responsible Disclosure Template
def responsible_disclosure():
    """
    Template for responsible vulnerability disclosure
    """
    disclosure_process = {
        'step_1': 'Verify vulnerability exists',
        'step_2': 'Determine impact and severity',
        'step_3': 'Contact vendor/organization privately',
        'step_4': 'Provide detailed technical information',
        'step_5': 'Allow reasonable time for fix',
        'step_6': 'Public disclosure if no response',
        'step_7': 'Credit researchers appropriately'
    }
    return disclosure_process
```

---

## 📚 **PHASE 6: LEARNING CURRICULUM**

### **6.1 Beginner Level**

#### **Module 1: Introduction to Ethical Hacking**
- What is ethical hacking?
- Types of hackers (White, Black, Gray)
- Ethical hacking methodology
- Legal and ethical considerations

#### **Module 2: Networking Fundamentals**
- TCP/IP protocol suite
- Network devices and topologies
- Subnetting and CIDR
- Network security basics

#### **Module 3: Linux Fundamentals**
- Linux command line
- File system navigation
- User management
- Basic scripting

### **6.2 Intermediate Level**

#### **Module 4: Reconnaissance**
- Passive reconnaissance
- Active reconnaissance
- OSINT techniques
- DNS enumeration

#### **Module 5: Scanning**
- Port scanning techniques
- Service enumeration
- Vulnerability scanning
- Network mapping

#### **Module 6: Web Application Hacking**
- OWASP Top 10
- SQL injection
- XSS attacks
- CSRF vulnerabilities

### **6.3 Advanced Level**

#### **Module 7: Exploitation**
- Metasploit framework
- Exploit development
- Buffer overflow attacks
- Privilege escalation

#### **Module 8: Post-Exploitation**
- Maintaining access
- Data exfiltration
- Covering tracks
- Reporting

#### **Module 9: Wireless & IoT Hacking**
- Wireless network attacks
- Bluetooth vulnerabilities
- IoT device hacking
- SDR (Software Defined Radio)

---

## 🏆 **PHASE 7: CERTIFICATION PREPARATION**

### **7.1 CEH (Certified Ethical Hacker)**

#### **CEH Study Plan**
```markdown
Week 1-2: Introduction & Networking
- Ethical hacking concepts
- TCP/IP fundamentals
- Network security

Week 3-4: Reconnaissance & Scanning
- Footprinting
- Scanning networks
- Enumeration

Week 5-6: System Hacking
- Malware threats
- Sniffing
- Social engineering

Week 7-8: Web & Mobile Hacking
- Web server hacking
- Web application hacking
- Mobile platform hacking

Week 9-10: Wireless & Cloud
- Wireless networks
- Cloud computing
- IoT & OT hacking

Week 11-12: Review & Practice
- Practice exams
- Lab exercises
- Final preparation
```

#### **CEH Practice Labs**
```bash
# Setup CEH lab environment
mkdir -p ~/ceh_labs/{recon,scanning,system_hacking,web_hacking}

# Download practice materials
wget https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/lab-manual/
```

### **7.2 OSCP (Offensive Security Certified Professional)**

#### **OSCP Preparation**
```bash
# Setup OSCP lab environment
mkdir -p ~/oscp/{tools,targets,reports}

# Install OSCP tools
sudo apt install -y seclists curl wget vim

# Download wordlists
git clone https://github.com/danielmiessler/SecLists.git ~/oscp/wordlists
```

#### **OSCP Methodology**
1. **Reconnaissance** - Comprehensive information gathering
2. **Scanning** - Detailed vulnerability assessment
3. **Exploitation** - Gain initial access
4. **Privilege Escalation** - Elevate privileges
5. **Post-Exploitation** - Maintain access and pivot
6. **Reporting** - Document findings professionally

---

## 🔧 **PHASE 8: AUTOMATION & CUSTOM TOOLS**

### **8.1 Custom Scripts**

#### **Port Scanner**
```python
#!/usr/bin/env python3
"""
Custom Port Scanner
Multi-threaded port scanning with service detection
"""

import socket
import threading
import argparse
from queue import Queue
import time

class PortScanner:
    def __init__(self, target, ports, threads=100):
        self.target = target
        self.ports = ports
        self.threads = threads
        self.queue = Queue()
        self.open_ports = []

    def scan_port(self, port):
        """Scan individual port"""
        try:
            sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            sock.settimeout(1)
            result = sock.connect_ex((self.target, port))
            if result == 0:
                try:
                    service = socket.getservbyport(port)
                except:
                    service = "unknown"
                self.open_ports.append((port, service))
            sock.close()
        except:
            pass

    def worker(self):
        """Worker thread"""
        while not self.queue.empty():
            port = self.queue.get()
            self.scan_port(port)
            self.queue.task_done()

    def scan(self):
        """Main scanning function"""
        print(f"[+] Scanning {self.target} for open ports...")

        # Fill queue
        for port in self.ports:
            self.queue.put(port)

        # Start threads
        for _ in range(self.threads):
            thread = threading.Thread(target=self.worker)
            thread.daemon = True
            thread.start()

        # Wait for completion
        self.queue.join()

        # Sort results
        self.open_ports.sort()

        return self.open_ports

def main():
    parser = argparse.ArgumentParser(description="Custom Port Scanner")
    parser.add_argument("target", help="Target IP address")
    parser.add_argument("-p", "--ports", help="Port range (e.g., 1-1000)", default="1-1024")
    parser.add_argument("-t", "--threads", type=int, help="Number of threads", default=100)

    args = parser.parse_args()

    # Parse port range
    if "-" in args.ports:
        start, end = map(int, args.ports.split("-"))
        ports = range(start, end + 1)
    else:
        ports = [int(args.ports)]

    scanner = PortScanner(args.target, ports, args.threads)
    start_time = time.time()
    results = scanner.scan()
    end_time = time.time()

    print(f"\n[+] Scan completed in {end_time - start_time:.2f} seconds")
    print(f"[+] Open ports on {args.target}:")

    for port, service in results:
        print(f"  {port}/tcp - {service}")

if __name__ == "__main__":
    main()
```

#### **Web Vulnerability Scanner**
```python
#!/usr/bin/env python3
"""
Custom Web Vulnerability Scanner
Checks for common web vulnerabilities
"""

import requests
import sys
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup

class WebVulnScanner:
    def __init__(self, url):
        self.url = url.rstrip('/')
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })

    def check_sql_injection(self):
        """Check for SQL injection vulnerabilities"""
        payloads = [
            "' OR '1'='1",
            "' OR '1'='1' --",
            "1' OR '1'='1",
            "admin' --",
            "1; DROP TABLE users--"
        ]

        vulnerable = False
        for payload in payloads:
            test_url = f"{self.url}?id={payload}"
            try:
                response = self.session.get(test_url, timeout=5)
                if any(error in response.text.lower() for error in
                       ['sql', 'mysql', 'syntax', 'oracle', 'sqlite']):
                    vulnerable = True
                    break
            except:
                continue

        return vulnerable

    def check_xss(self):
        """Check for XSS vulnerabilities"""
        payloads = [
            "<script>alert('XSS')</script>",
            "<img src=x onerror=alert('XSS')>",
            "<svg onload=alert('XSS')>",
            "javascript:alert('XSS')"
        ]

        vulnerable = False
        for payload in payloads:
            test_url = f"{self.url}?search={payload}"
            try:
                response = self.session.get(test_url, timeout=5)
                if payload in response.text:
                    vulnerable = True
                    break
            except:
                continue

        return vulnerable

    def check_open_redirect(self):
        """Check for open redirect vulnerabilities"""
        payloads = [
            "http://evil.com",
            "//evil.com",
            "https://evil.com"
        ]

        vulnerable = False
        for payload in payloads:
            test_url = f"{self.url}?redirect={payload}"
            try:
                response = self.session.get(test_url, allow_redirects=False, timeout=5)
                if response.status_code in [301, 302] and 'evil.com' in response.headers.get('Location', ''):
                    vulnerable = True
                    break
            except:
                continue

        return vulnerable

    def check_directory_traversal(self):
        """Check for directory traversal vulnerabilities"""
        payloads = [
            "../../../etc/passwd",
            "..\\..\\..\\windows\\system32\\config\\sam",
            "....//....//....//etc/passwd"
        ]

        vulnerable = False
        for payload in payloads:
            test_url = f"{self.url}?file={payload}"
            try:
                response = self.session.get(test_url, timeout=5)
                if any(indicator in response.text for indicator in ['root:', 'bash', '[boot loader]']):
                    vulnerable = True
                    break
            except:
                continue

        return vulnerable

    def scan(self):
        """Run complete vulnerability scan"""
        print(f"[+] Scanning {self.url} for vulnerabilities...")

        vulnerabilities = {
            'SQL Injection': self.check_sql_injection(),
            'Cross-Site Scripting (XSS)': self.check_xss(),
            'Open Redirect': self.check_open_redirect(),
            'Directory Traversal': self.check_directory_traversal()
        }

        print("\n[+] Scan Results:")
        for vuln, found in vulnerabilities.items():
            status = "VULNERABLE" if found else "Not Found"
            print(f"  {vuln}: {status}")

        return vulnerabilities

def main():
    if len(sys.argv) != 2:
        print("Usage: python3 web_vuln_scanner.py <url>")
        sys.exit(1)

    url = sys.argv[1]
    scanner = WebVulnScanner(url)
    scanner.scan()

if __name__ == "__main__":
    main()
```

---

## 📊 **PHASE 9: MONITORING & REPORTING**

### **9.1 Progress Tracking**

#### **Learning Progress Script**
```python
#!/usr/bin/env python3
"""
Ethical Hacking Learning Progress Tracker
"""

import json
import os
from datetime import datetime, timedelta

class EthicalHackingTracker:
    def __init__(self):
        self.progress_file = os.path.expanduser("~/.ethical_hacking_progress.json")
        self.load_progress()

    def load_progress(self):
        """Load progress from file"""
        if os.path.exists(self.progress_file):
            with open(self.progress_file, 'r') as f:
                self.progress = json.load(f)
        else:
            self.progress = self.initialize_progress()

    def initialize_progress(self):
        """Initialize default progress structure"""
        return {
            'start_date': datetime.now().isoformat(),
            'modules': {
                'networking_fundamentals': {'completed': False, 'score': 0},
                'linux_basics': {'completed': False, 'score': 0},
                'reconnaissance': {'completed': False, 'score': 0},
                'scanning': {'completed': False, 'score': 0},
                'web_hacking': {'completed': False, 'score': 0},
                'system_hacking': {'completed': False, 'score': 0},
                'wireless_hacking': {'completed': False, 'score': 0},
                'exploitation': {'completed': False, 'score': 0},
                'post_exploitation': {'completed': False, 'score': 0},
                'reporting': {'completed': False, 'score': 0}
            },
            'certifications': {
                'ceh': {'studying': False, 'exam_date': None, 'passed': False},
                'oscp': {'studying': False, 'exam_date': None, 'passed': False}
            },
            'practice_labs': [],
            'achievements': []
        }

    def update_module(self, module_name, completed=False, score=0):
        """Update module progress"""
        if module_name in self.progress['modules']:
            self.progress['modules'][module_name]['completed'] = completed
            if score > 0:
                self.progress['modules'][module_name]['score'] = score
            self.save_progress()

    def add_lab_completion(self, lab_name):
        """Add completed lab"""
        if lab_name not in self.progress['practice_labs']:
            self.progress['practice_labs'].append({
                'name': lab_name,
                'completed_date': datetime.now().isoformat()
            })
            self.save_progress()

    def calculate_overall_progress(self):
        """Calculate overall learning progress"""
        modules = self.progress['modules']
        completed_modules = sum(1 for m in modules.values() if m['completed'])
        total_modules = len(modules)

        return {
            'module_completion': f"{completed_modules}/{total_modules}",
            'percentage': (completed_modules / total_modules) * 100,
            'labs_completed': len(self.progress['practice_labs'])
        }

    def save_progress(self):
        """Save progress to file"""
        with open(self.progress_file, 'w') as f:
            json.dump(self.progress, f, indent=2)

    def print_report(self):
        """Print progress report"""
        progress = self.calculate_overall_progress()

        print("🎯 Ethical Hacking Learning Progress Report")
        print("=" * 50)
        print(f"Started: {self.progress['start_date'][:10]}")
        print(f"Modules Completed: {progress['module_completion']}")
        print(f"Overall Progress: {progress['percentage']:.1f}%")
        print(f"Labs Completed: {progress['labs_completed']}")
        print()

        print("📚 Module Status:")
        for module, data in self.progress['modules'].items():
            status = "✅" if data['completed'] else "❌"
            score = f" ({data['score']}%)" if data['score'] > 0 else ""
            print(f"  {status} {module.replace('_', ' ').title()}{score}")

        if self.progress['practice_labs']:
            print("\n🧪 Completed Labs:")
            for lab in self.progress['practice_labs'][-5:]:  # Show last 5
                print(f"  ✅ {lab['name']} ({lab['completed_date'][:10]})")

def main():
    tracker = EthicalHackingTracker()

    # Example usage
    if len(os.sys.argv) > 1:
        command = os.sys.argv[1]
        if command == 'complete' and len(os.sys.argv) > 2:
            module = os.sys.argv[2]
            tracker.update_module(module, completed=True)
            print(f"Marked {module} as completed")
        elif command == 'lab' and len(os.sys.argv) > 2:
            lab = os.sys.argv[2]
            tracker.add_lab_completion(lab)
            print(f"Added lab completion: {lab}")
        elif command == 'report':
            tracker.print_report()
        else:
            print("Usage: python3 progress_tracker.py [complete <module>|lab <lab_name>|report]")
    else:
        tracker.print_report()

if __name__ == "__main__":
    main()
```

### **9.2 Automated Reporting**

#### **Penetration Test Report Generator**
```python
#!/usr/bin/env python3
"""
Automated Penetration Test Report Generator
Creates professional PDF reports
"""

import json
import os
from datetime import datetime
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

class PTReportGenerator:
    def __init__(self, client_name, target_info):
        self.client_name = client_name
        self.target_info = target_info
        self.findings = []
        self.styles = getSampleStyleSheet()

    def add_finding(self, title, severity, description, impact, remediation):
        """Add security finding"""
        self.findings.append({
            'title': title,
            'severity': severity,
            'description': description,
            'impact': impact,
            'remediation': remediation
        })

    def generate_report(self, filename):
        """Generate PDF report"""
        doc = SimpleDocTemplate(filename, pagesize=letter)
        story = []

        # Title page
        title_style = ParagraphStyle(
            'CustomTitle',
            parent=self.styles['Heading1'],
            fontSize=24,
            spaceAfter=30,
            alignment=1  # Center
        )

        story.append(Paragraph("Penetration Testing Report", title_style))
        story.append(Spacer(1, 12))

        # Client and target info
        info_style = self.styles['Normal']
        story.append(Paragraph(f"<b>Client:</b> {self.client_name}", info_style))
        story.append(Paragraph(f"<b>Target:</b> {self.target_info}", info_style))
        story.append(Paragraph(f"<b>Date:</b> {datetime.now().strftime('%Y-%m-%d')}", info_style))
        story.append(Spacer(1, 20))

        # Executive summary
        story.append(Paragraph("Executive Summary", self.styles['Heading2']))
        summary_text = """
        This report contains the findings of a comprehensive penetration test conducted
        against the specified target systems. The assessment identified several security
        vulnerabilities that should be addressed to improve the overall security posture.
        """
        story.append(Paragraph(summary_text, self.styles['Normal']))
        story.append(Spacer(1, 20))

        # Findings table
        if self.findings:
            story.append(Paragraph("Security Findings", self.styles['Heading2']))

            data = [['Title', 'Severity', 'Description', 'Impact', 'Remediation']]
            for finding in self.findings:
                data.append([
                    finding['title'],
                    finding['severity'],
                    finding['description'][:50] + "...",
                    finding['impact'][:50] + "...",
                    finding['remediation'][:50] + "..."
                ])

            table = Table(data)
            table.setStyle(TableStyle([
                ('BACKGROUND', (0, 0), (-1, 0), colors.grey),
                ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
                ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
                ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
                ('FONTSIZE', (0, 0), (-1, 0), 14),
                ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
                ('BACKGROUND', (0, 1), (-1, -1), colors.beige),
                ('GRID', (0, 0), (-1, -1), 1, colors.black)
            ]))

            story.append(table)

        # Build PDF
        doc.build(story)
        print(f"[+] Report generated: {filename}")

# Example usage
def main():
    generator = PTReportGenerator("Example Corp", "example.com")

    # Add sample findings
    generator.add_finding(
        "SQL Injection Vulnerability",
        "High",
        "SQL injection found in login form allowing unauthorized database access",
        "Potential data breach and system compromise",
        "Implement prepared statements and input validation"
    )

    generator.add_finding(
        "Weak SSL Configuration",
        "Medium",
        "SSL certificate uses weak encryption algorithms",
        "Potential man-in-the-middle attacks",
        "Upgrade to modern SSL/TLS configuration"
    )

    generator.generate_report("pentest_report.pdf")

if __name__ == "__main__":
    main()
```

---

## 🎯 **IMPLEMENTATION CHECKLIST**

### **Environment Setup**
- [ ] Kali Linux installed and configured
- [ ] Virtual machine networking configured
- [ ] Essential tools installed (Metasploit, Nmap, Burp Suite)
- [ ] Development environment set up (Python, Go)
- [ ] Workspace directories created

### **Tool Installation**
- [ ] Information gathering tools installed
- [ ] Vulnerability scanners configured
- [ ] Exploitation frameworks set up
- [ ] Password cracking tools installed
- [ ] Wireless and IoT tools configured

### **Practice Environment**
- [ ] Vulnerable machines downloaded and configured
- [ ] Local lab network set up
- [ ] CTF platforms configured
- [ ] Practice targets deployed

### **Skills Development**
- [ ] Learning curriculum followed
- [ ] Hands-on labs completed
- [ ] Certification preparation started
- [ ] Custom tools developed

### **Professional Practice**
- [ ] Legal and ethical guidelines understood
- [ ] Rules of engagement documented
- [ ] Reporting templates created
- [ ] Professional development plan established

---

## 📚 **ADDITIONAL RESOURCES**

### **Online Learning Platforms**
- [HackTheBox](https://www.hackthebox.com) - Hands-on penetration testing labs
- [TryHackMe](https://tryhackme.com) - Guided cybersecurity challenges
- [VulnHub](https://vulnhub.com) - Vulnerable machine downloads
- [OverTheWire](https://overthewire.org) - Wargame challenges

### **Documentation & References**
- [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [MITRE ATT&CK Framework](https://attack.mitre.org/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [SANS Penetration Testing Resources](https://www.sans.org/cyber-security-skills/penetration-testing/)

### **Communities**
- [Reddit r/netsec](https://reddit.com/r/netsec)
- [Reddit r/HowToHack](https://reddit.com/r/HowToHack)
- [Nullcon](https://nullcon.net)
- [DEF CON](https://defcon.org)

### **Certifications**
- [CEH (Certified Ethical Hacker)](https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/)
- [OSCP (Offensive Security Certified Professional)](https://www.offsec.com/courses/pen-200/)
- [GPEN (GIAC Penetration Tester)](https://www.giac.org/certification/penetration-tester-gpen/)
- [eJPT (eLearnSecurity Junior Penetration Tester)](https://elearnsecurity.com/product/ejpt-certification/)

---

## ⚠️ **LEGAL DISCLAIMER**

This guide is for educational purposes only. Ethical hacking requires explicit written permission from system owners. Unauthorized access to computer systems is illegal and may result in criminal prosecution. Always follow legal and ethical guidelines when conducting security assessments.

**Remember:** With great power comes great responsibility. Use these skills ethically and legally.

---

*This comprehensive setup guide provides everything needed to establish a professional ethical hacking environment. Follow the phases sequentially and practice regularly to develop expertise in penetration testing.*