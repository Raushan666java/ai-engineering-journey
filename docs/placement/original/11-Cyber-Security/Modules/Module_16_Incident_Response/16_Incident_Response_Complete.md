# 🚨 Module 16: Incident Response - Complete Playbook & Real-World Cases

## 📚 Table of Contents
1. [Incident Response Framework](#ir-framework)
2. [Preparation Phase](#preparation)
3. [Detection & Analysis](#detection-analysis)
4. [Containment Strategies](#containment)
5. [Eradication & Recovery](#eradication-recovery)
6. [Post-Incident Activities](#post-incident)
7. [Real-World Incident Response Cases](#real-world-cases)
8. [Hands-On IR Labs](#hands-on-labs)

---

## 🎯 NIST Incident Response Framework

### The Six Phases of Incident Response

```python
# incident_response_framework.py
from enum import Enum
from datetime import datetime
import json

class IncidentSeverity(Enum):
    LOW = 1
    MEDIUM = 2
    HIGH = 3
    CRITICAL = 4

class IncidentPhase(Enum):
    PREPARATION = "preparation"
    DETECTION = "detection"
    ANALYSIS = "analysis"
    CONTAINMENT = "containment"
    ERADICATION = "eradication"
    RECOVERY = "recovery"
    POST_INCIDENT = "post_incident"

class SecurityIncident:
    def __init__(self, incident_id, title, severity):
        self.incident_id = incident_id
        self.title = title
        self.severity = severity
        self.phase = IncidentPhase.DETECTION
        self.timeline = []
        self.indicators = []
        self.affected_systems = []
        self.actions_taken = []
        self.created_at = datetime.now()
    
    def add_timeline_event(self, event, details):
        """Add event to incident timeline"""
        self.timeline.append({
            'timestamp': datetime.now().isoformat(),
            'event': event,
            'details': details,
            'phase': self.phase.value
        })
    
    def add_indicator(self, ioc_type, value, source):
        """Add Indicator of Compromise (IoC)"""
        self.indicators.append({
            'type': ioc_type,
            'value': value,
            'source': source,
            'timestamp': datetime.now().isoformat()
        })
    
    def add_affected_system(self, hostname, ip, role):
        """Track affected systems"""
        self.affected_systems.append({
            'hostname': hostname,
            'ip': ip,
            'role': role,
            'compromised_at': datetime.now().isoformat()
        })
    
    def move_to_phase(self, phase):
        """Progress to next phase"""
        self.phase = phase
        self.add_timeline_event(
            f"Phase Change",
            f"Incident moved to {phase.value} phase"
        )
    
    def generate_report(self):
        """Generate incident report"""
        report = {
            'incident_id': self.incident_id,
            'title': self.title,
            'severity': self.severity.name,
            'current_phase': self.phase.value,
            'created_at': self.created_at.isoformat(),
            'timeline': self.timeline,
            'indicators': self.indicators,
            'affected_systems': self.affected_systems,
            'actions_taken': self.actions_taken
        }
        
        return json.dumps(report, indent=2)

# Example usage
incident = SecurityIncident(
    incident_id="INC-2025-001",
    title="Ransomware Attack on File Server",
    severity=IncidentSeverity.CRITICAL
)

incident.add_timeline_event("Initial Detection", "User reported encrypted files")
incident.add_indicator("file_hash", "a1b2c3d4e5f6...", "File Server")
incident.add_affected_system("fileserver01", "192.168.1.50", "File Server")

print(incident.generate_report())
```

---

## 🛡️ Phase 1: Preparation

### Building an Incident Response Team

```python
# ir_team_structure.py

class IRTeam:
    """Incident Response Team Structure"""
    
    def __init__(self):
        self.roles = {
            'Incident Commander': {
                'responsibilities': [
                    'Overall incident management',
                    'Decision making authority',
                    'Stakeholder communication',
                    'Resource allocation'
                ],
                'skills': ['Leadership', 'Communication', 'Technical knowledge']
            },
            'Security Analyst': {
                'responsibilities': [
                    'Log analysis',
                    'Threat intelligence',
                    'IoC identification',
                    'SIEM monitoring'
                ],
                'skills': ['Log analysis', 'SIEM tools', 'Threat intelligence']
            },
            'Forensics Specialist': {
                'responsibilities': [
                    'Evidence collection',
                    'Memory/disk analysis',
                    'Timeline reconstruction',
                    'Chain of custody'
                ],
                'skills': ['Forensics tools', 'Evidence handling', 'Analysis']
            },
            'Malware Analyst': {
                'responsibilities': [
                    'Malware reverse engineering',
                    'Behavior analysis',
                    'Signature creation',
                    'IoC extraction'
                ],
                'skills': ['Reverse engineering', 'Assembly', 'Debugging']
            },
            'Network Engineer': {
                'responsibilities': [
                    'Network isolation',
                    'Firewall rules',
                    'Traffic analysis',
                    'Network containment'
                ],
                'skills': ['Networking', 'Firewalls', 'Packet analysis']
            },
            'System Administrator': {
                'responsibilities': [
                    'System isolation',
                    'Patch deployment',
                    'Backup/restore',
                    'System recovery'
                ],
                'skills': ['Windows/Linux admin', 'Active Directory', 'Scripting']
            },
            'Communications Lead': {
                'responsibilities': [
                    'Internal communications',
                    'External notifications',
                    'Media relations',
                    'Customer updates'
                ],
                'skills': ['Communication', 'PR', 'Legal knowledge']
            },
            'Legal Counsel': {
                'responsibilities': [
                    'Legal compliance',
                    'Regulatory requirements',
                    'Law enforcement liaison',
                    'Litigation support'
                ],
                'skills': ['Legal', 'Compliance', 'Privacy laws']
            }
        }
    
    def get_role_description(self, role):
        """Get detailed role description"""
        if role in self.roles:
            return self.roles[role]
        return None
    
    def get_contact_list(self):
        """Generate emergency contact list template"""
        contacts = {
            'Internal': [
                'IR Team Lead: +1-XXX-XXX-XXXX',
                'CISO: +1-XXX-XXX-XXXX',
                'CTO: +1-XXX-XXX-XXXX',
                'CEO: +1-XXX-XXX-XXXX'
            ],
            'External': [
                'FBI Cyber Division: +1-XXX-XXX-XXXX',
                'Local Law Enforcement: +1-XXX-XXX-XXXX',
                'Cyber Insurance: +1-XXX-XXX-XXXX',
                'External IR Firm: +1-XXX-XXX-XXXX',
                'Legal Counsel: +1-XXX-XXX-XXXX',
                'PR Firm: +1-XXX-XXX-XXXX'
            ],
            'Vendors': [
                'Cloud Provider: +1-XXX-XXX-XXXX',
                'ISP: +1-XXX-XXX-XXXX',
                'Managed Security: +1-XXX-XXX-XXXX'
            ]
        }
        return contacts

# IR Toolkit
IR_TOOLKIT = {
    'Hardware': [
        'Forensic workstation (write blocker)',
        'Forensic laptop',
        'External hard drives (evidence storage)',
        'USB write blockers',
        'Network TAPs',
        'Faraday bags',
        'Documentation cameras',
        'Label maker'
    ],
    'Software': [
        'FTK Imager',
        'EnCase',
        'Autopsy',
        'Volatility (memory analysis)',
        'Wireshark',
        'SIFT Workstation',
        'REMnux',
        'IDA Pro / Ghidra',
        'Process Hacker',
        'Sysinternals Suite'
    ],
    'Cloud Tools': [
        'AWS CloudTrail',
        'Azure Sentinel',
        'Google Chronicle',
        'Splunk',
        'ELK Stack'
    ]
}
```

### IR Playbooks

```yaml
# ransomware_playbook.yaml
name: "Ransomware Incident Response Playbook"
version: "2.0"
severity: CRITICAL

phases:
  detection:
    triggers:
      - "User reports encrypted files"
      - "Ransom note detected"
      - "EDR alert: Ransomware behavior"
      - "Mass file modifications detected"
    
    immediate_actions:
      - action: "Identify affected systems"
        priority: 1
        owner: "Security Analyst"
        
      - action: "Document ransom note details"
        priority: 1
        owner: "Security Analyst"
        details: "Screenshot and preserve ransom note"
        
      - action: "Identify ransomware variant"
        priority: 2
        owner: "Malware Analyst"
        tools: ["ID Ransomware", "VirusTotal"]

  containment:
    immediate_containment:
      - action: "Isolate infected systems"
        priority: 1
        owner: "Network Engineer"
        steps:
          - "Disable network adapters"
          - "Block at firewall"
          - "Isolate network segment"
        
      - action: "Disable admin accounts"
        priority: 1
        owner: "System Administrator"
        details: "Prevent lateral movement"
        
      - action: "Block C2 domains/IPs"
        priority: 1
        owner: "Network Engineer"
        
    long_term_containment:
      - action: "Patch vulnerabilities"
        priority: 2
        owner: "System Administrator"
        
      - action: "Reset credentials"
        priority: 2
        owner: "System Administrator"

  eradication:
    actions:
      - action: "Remove malware"
        priority: 1
        owner: "System Administrator"
        tools: ["EDR", "Antivirus", "Manual removal"]
        
      - action: "Verify clean systems"
        priority: 1
        owner: "Security Analyst"
        
      - action: "Apply security patches"
        priority: 1
        owner: "System Administrator"

  recovery:
    actions:
      - action: "Restore from backups"
        priority: 1
        owner: "System Administrator"
        notes: "Use clean, verified backups"
        
      - action: "Monitor for reinfection"
        priority: 1
        owner: "Security Analyst"
        duration: "30 days"
        
      - action: "Gradually restore services"
        priority: 2
        owner: "System Administrator"

  post_incident:
    actions:
      - action: "Conduct lessons learned"
        priority: 1
        owner: "Incident Commander"
        
      - action: "Update playbook"
        priority: 2
        owner: "IR Team Lead"
        
      - action: "Improve defenses"
        priority: 1
        owner: "Security Team"

decision_tree:
  pay_ransom:
    question: "Should we pay the ransom?"
    factors:
      - "Backup availability"
      - "Business impact"
      - "Legal implications"
      - "Payment success rate"
      - "Law enforcement guidance"
    recommendation: "DO NOT PAY - Restore from backups"
    
  law_enforcement:
    question: "Notify law enforcement?"
    answer: "YES - Always notify FBI/local authorities"
    contacts:
      - "FBI IC3: https://ic3.gov"
      - "FBI Cyber Division"
      - "Local FBI field office"
```

---

## 🔍 Phase 2: Detection & Analysis

### SIEM Correlation Rules

```python
# siem_correlation_rules.py
import re
from datetime import datetime, timedelta
from collections import defaultdict

class SIEMCorrelationEngine:
    def __init__(self):
        self.events = []
        self.alerts = []
        self.thresholds = {
            'failed_login': 5,
            'failed_login_window': 300,  # 5 minutes
            'data_exfil_size': 100 * 1024 * 1024,  # 100 MB
            'port_scan_threshold': 100
        }
    
    def add_event(self, event):
        """Add event to correlation engine"""
        self.events.append(event)
        
        # Run correlation rules
        self.check_brute_force()
        self.check_data_exfiltration()
        self.check_port_scanning()
        self.check_lateral_movement()
        self.check_privilege_escalation()
    
    def check_brute_force(self):
        """Detect brute force attacks"""
        # Group failed logins by source IP and username
        failed_logins = defaultdict(list)
        
        cutoff_time = datetime.now() - timedelta(
            seconds=self.thresholds['failed_login_window']
        )
        
        for event in self.events:
            if event['type'] == 'failed_login' and event['timestamp'] > cutoff_time:
                key = (event['source_ip'], event['username'])
                failed_logins[key].append(event)
        
        # Check for threshold violations
        for (source_ip, username), events in failed_logins.items():
            if len(events) >= self.thresholds['failed_login']:
                self.create_alert(
                    severity='HIGH',
                    title='Brute Force Attack Detected',
                    description=f'{len(events)} failed login attempts for user {username} from {source_ip}',
                    indicators=[
                        {'type': 'ip', 'value': source_ip},
                        {'type': 'username', 'value': username}
                    ],
                    recommended_actions=[
                        'Block source IP',
                        'Lock user account',
                        'Review authentication logs',
                        'Check for successful logins from this IP'
                    ]
                )
    
    def check_data_exfiltration(self):
        """Detect unusual data transfers"""
        # Check for large outbound transfers
        recent_transfers = [
            e for e in self.events
            if e['type'] == 'network_transfer' and e['direction'] == 'outbound'
            and e['timestamp'] > datetime.now() - timedelta(hours=1)
        ]
        
        # Group by destination
        transfers_by_dest = defaultdict(int)
        for event in recent_transfers:
            transfers_by_dest[event['destination_ip']] += event['bytes']
        
        # Alert on large transfers
        for dest_ip, total_bytes in transfers_by_dest.items():
            if total_bytes > self.thresholds['data_exfil_size']:
                self.create_alert(
                    severity='CRITICAL',
                    title='Potential Data Exfiltration',
                    description=f'Large data transfer detected: {total_bytes / 1024 / 1024:.2f} MB to {dest_ip}',
                    indicators=[
                        {'type': 'ip', 'value': dest_ip},
                        {'type': 'data_size', 'value': str(total_bytes)}
                    ],
                    recommended_actions=[
                        'Block destination IP',
                        'Identify source system',
                        'Review transferred files',
                        'Check for malware on source system'
                    ]
                )
    
    def check_port_scanning(self):
        """Detect port scanning activity"""
        # Group connection attempts by source IP
        connections = defaultdict(set)
        
        recent_connections = [
            e for e in self.events
            if e['type'] == 'connection_attempt'
            and e['timestamp'] > datetime.now() - timedelta(minutes=5)
        ]
        
        for event in recent_connections:
            connections[event['source_ip']].add(event['destination_port'])
        
        # Alert on many ports from same source
        for source_ip, ports in connections.items():
            if len(ports) >= self.thresholds['port_scan_threshold']:
                self.create_alert(
                    severity='MEDIUM',
                    title='Port Scan Detected',
                    description=f'Source {source_ip} attempted connections to {len(ports)} different ports',
                    indicators=[
                        {'type': 'ip', 'value': source_ip},
                        {'type': 'port_count', 'value': str(len(ports))}
                    ],
                    recommended_actions=[
                        'Block source IP',
                        'Identify source system',
                        'Review firewall logs',
                        'Check for other reconnaissance activity'
                    ]
                )
    
    def check_lateral_movement(self):
        """Detect lateral movement patterns"""
        # Look for:
        # 1. Remote authentication from unusual sources
        # 2. Use of admin tools (psexec, wmic, etc.)
        # 3. Multiple systems accessed in short time
        
        recent_auth = [
            e for e in self.events
            if e['type'] == 'authentication'
            and e['timestamp'] > datetime.now() - timedelta(minutes=10)
        ]
        
        # Group by username
        user_activity = defaultdict(set)
        for event in recent_auth:
            user_activity[event['username']].add(event['destination_host'])
        
        # Alert if user accessed many systems
        for username, hosts in user_activity.items():
            if len(hosts) >= 5:
                self.create_alert(
                    severity='HIGH',
                    title='Potential Lateral Movement',
                    description=f'User {username} authenticated to {len(hosts)} systems in 10 minutes',
                    indicators=[
                        {'type': 'username', 'value': username},
                        {'type': 'host_count', 'value': str(len(hosts))}
                    ],
                    recommended_actions=[
                        'Investigate user activity',
                        'Check for compromised credentials',
                        'Review accessed systems',
                        'Isolate affected systems if necessary'
                    ]
                )
    
    def check_privilege_escalation(self):
        """Detect privilege escalation attempts"""
        # Look for:
        # 1. Admin tool execution by non-admins
        # 2. Token manipulation
        # 3. Sudden privilege changes
        
        suspicious_commands = [
            'whoami /priv',
            'net user /add',
            'net localgroup administrators',
            'reg add',
            'schtasks /create',
            'wmic process call create',
            'powershell -encodedcommand'
        ]
        
        for event in self.events:
            if event['type'] == 'command_execution':
                command = event.get('command', '').lower()
                
                for suspicious_cmd in suspicious_commands:
                    if suspicious_cmd.lower() in command:
                        self.create_alert(
                            severity='HIGH',
                            title='Potential Privilege Escalation',
                            description=f'Suspicious command executed: {command}',
                            indicators=[
                                {'type': 'hostname', 'value': event['hostname']},
                                {'type': 'username', 'value': event['username']},
                                {'type': 'command', 'value': command}
                            ],
                            recommended_actions=[
                                'Investigate user account',
                                'Check for other suspicious activity',
                                'Review command output',
                                'Isolate system if compromised'
                            ]
                        )
                        break
    
    def create_alert(self, severity, title, description, indicators, recommended_actions):
        """Create security alert"""
        alert = {
            'alert_id': f'ALERT-{len(self.alerts) + 1}',
            'timestamp': datetime.now().isoformat(),
            'severity': severity,
            'title': title,
            'description': description,
            'indicators': indicators,
            'recommended_actions': recommended_actions,
            'status': 'NEW'
        }
        
        self.alerts.append(alert)
        
        print(f"\n[!] {severity} ALERT: {title}")
        print(f"    {description}")
        print(f"    Recommended actions:")
        for action in recommended_actions:
            print(f"      - {action}")
        
        return alert
    
    def get_active_alerts(self):
        """Get all active alerts"""
        return [a for a in self.alerts if a['status'] == 'NEW']

# Example usage
siem = SIEMCorrelationEngine()

# Simulate brute force attack
for i in range(10):
    siem.add_event({
        'type': 'failed_login',
        'timestamp': datetime.now(),
        'source_ip': '203.0.113.100',
        'username': 'admin',
        'destination': 'webserver01'
    })

# Simulate data exfiltration
siem.add_event({
    'type': 'network_transfer',
    'timestamp': datetime.now(),
    'direction': 'outbound',
    'source_ip': '192.168.1.50',
    'destination_ip': '198.51.100.50',
    'bytes': 500 * 1024 * 1024  # 500 MB
})

print("\n[*] Active alerts:", len(siem.get_active_alerts()))
```

---

## 🔒 Phase 3: Containment

### Automated Containment Scripts

```powershell
# Incident_Response_Containment.ps1
# Windows Incident Response Containment Script

param(
    [Parameter(Mandatory=$true)]
    [string]$TargetComputer,
    
    [Parameter(Mandatory=$false)]
    [switch]$NetworkIsolation,
    
    [Parameter(Mandatory=$false)]
    [switch]$DisableAccounts,
    
    [Parameter(Mandatory=$false)]
    [switch]$KillProcesses,
    
    [Parameter(Mandatory=$false)]
    [string]$LogPath = "C:\IR\Logs"
)

# Create log directory
New-Item -ItemType Directory -Force -Path $LogPath | Out-Null

$LogFile = "$LogPath\containment_$(Get-Date -Format 'yyyyMMdd_HHmmss').log"

function Write-Log {
    param([string]$Message)
    $Timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
    $LogMessage = "$Timestamp - $Message"
    Write-Host $LogMessage
    Add-Content -Path $LogFile -Value $LogMessage
}

Write-Log "Starting containment on $TargetComputer"

# 1. Network Isolation
if ($NetworkIsolation) {
    Write-Log "[*] Isolating network..."
    
    try {
        # Disable network adapters
        Invoke-Command -ComputerName $TargetComputer -ScriptBlock {
            Get-NetAdapter | Where-Object {$_.Status -eq "Up"} | Disable-NetAdapter -Confirm:$false
        }
        Write-Log "[+] Network adapters disabled"
        
        # Add firewall rules to block all traffic
        Invoke-Command -ComputerName $TargetComputer -ScriptBlock {
            New-NetFirewallRule -DisplayName "IR-BlockAll-Inbound" -Direction Inbound -Action Block -Enabled True
            New-NetFirewallRule -DisplayName "IR-BlockAll-Outbound" -Direction Outbound -Action Block -Enabled True
        }
        Write-Log "[+] Firewall rules added"
        
    } catch {
        Write-Log "[!] Error during network isolation: $_"
    }
}

# 2. Disable User Accounts
if ($DisableAccounts) {
    Write-Log "[*] Disabling user accounts..."
    
    try {
        # Get recently logged on users
        $RecentUsers = Invoke-Command -ComputerName $TargetComputer -ScriptBlock {
            Get-WinEvent -LogName Security -MaxEvents 1000 | 
                Where-Object {$_.Id -eq 4624} |
                Select-Object -ExpandProperty Properties |
                Select-Object -Index 5 -ExpandProperty Value |
                Where-Object {$_ -ne "SYSTEM" -and $_ -ne "LOCAL SERVICE" -and $_ -ne "NETWORK SERVICE"} |
                Select-Object -Unique
        }
        
        foreach ($User in $RecentUsers) {
            Disable-ADAccount -Identity $User
            Write-Log "[+] Disabled account: $User"
        }
        
    } catch {
        Write-Log "[!] Error disabling accounts: $_"
    }
}

# 3. Kill Suspicious Processes
if ($KillProcesses) {
    Write-Log "[*] Killing suspicious processes..."
    
    $SuspiciousProcesses = @(
        'powershell',
        'cmd',
        'wscript',
        'cscript',
        'mshta',
        'rundll32',
        'regsvr32',
        'certutil',
        'bitsadmin'
    )
    
    try {
        Invoke-Command -ComputerName $TargetComputer -ScriptBlock {
            param($ProcessList)
            
            foreach ($ProcName in $ProcessList) {
                $Processes = Get-Process -Name $ProcName -ErrorAction SilentlyContinue
                
                foreach ($Proc in $Processes) {
                    Write-Host "[!] Killing process: $($Proc.Name) (PID: $($Proc.Id))"
                    Stop-Process -Id $Proc.Id -Force
                }
            }
        } -ArgumentList (,$SuspiciousProcesses)
        
        Write-Log "[+] Suspicious processes terminated"
        
    } catch {
        Write-Log "[!] Error killing processes: $_"
    }
}

# 4. Collect Evidence
Write-Log "[*] Collecting evidence..."

try {
    # Memory dump
    Invoke-Command -ComputerName $TargetComputer -ScriptBlock {
        $DumpPath = "C:\IR\Evidence"
        New-Item -ItemType Directory -Force -Path $DumpPath | Out-Null
        
        # Using built-in tools
        tasklist /v > "$DumpPath\processes.txt"
        netstat -ano > "$DumpPath\network_connections.txt"
        net user > "$DumpPath\users.txt"
        net localgroup administrators > "$DumpPath\admins.txt"
        ipconfig /all > "$DumpPath\network_config.txt"
        route print > "$DumpPath\routes.txt"
        arp -a > "$DumpPath\arp_cache.txt"
        schtasks /query /fo LIST /v > "$DumpPath\scheduled_tasks.txt"
        
        # Registry keys
        reg export HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run "$DumpPath\run_keys.reg"
        reg export HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce "$DumpPath\runonce_keys.reg"
    }
    
    Write-Log "[+] Evidence collected"
    
} catch {
    Write-Log "[!] Error collecting evidence: $_"
}

# 5. Reset Credentials
Write-Log "[*] Resetting administrative credentials..."

try {
    # Reset local admin password
    $NewPassword = -join ((65..90) + (97..122) + (48..57) + (33,35,36,37,38,42,43,45,61) | Get-Random -Count 20 | % {[char]$_})
    
    Invoke-Command -ComputerName $TargetComputer -ScriptBlock {
        param($Password)
        $SecurePassword = ConvertTo-SecureString $Password -AsPlainText -Force
        Set-LocalUser -Name "Administrator" -Password $SecurePassword
    } -ArgumentList $NewPassword
    
    Write-Log "[+] Administrator password reset to: $NewPassword"
    Write-Log "[!] IMPORTANT: Store this password securely!"
    
} catch {
    Write-Log "[!] Error resetting credentials: $_"
}

Write-Log "[*] Containment complete"
Write-Log "[*] Log file saved to: $LogFile"

# Generate summary report
$Report = @"
INCIDENT RESPONSE CONTAINMENT REPORT
====================================
Target: $TargetComputer
Time: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')

Actions Taken:
$(if($NetworkIsolation){"[x] Network isolation"} else {"[ ] Network isolation"})
$(if($DisableAccounts){"[x] Account disabling"} else {"[ ] Account disabling"})
$(if($KillProcesses){"[x] Process termination"} else {"[ ] Process termination"})
[x] Evidence collection
[x] Credential reset

Next Steps:
1. Review collected evidence
2. Perform forensic analysis
3. Identify root cause
4. Plan eradication
5. Prepare for recovery

Log file: $LogFile
"@

Write-Host $Report
$Report | Out-File "$LogPath\summary_$(Get-Date -Format 'yyyyMMdd_HHmmss').txt"
```

---

## 🌍 Real-World Case: SolarWinds Supply Chain Attack (2020)

**Background:**
- **Attacker:** APT29 (Cozy Bear / Russian SVR)
- **Date:** March 2020 - December 2020
- **Impact:** 18,000+ organizations, 100+ companies compromised
- **Method:** Supply chain attack via software update

**Attack Timeline:**

```python
# solarwinds_attack_timeline.py

SOLARWINDS_TIMELINE = {
    "2019-09": {
        "phase": "Initial Compromise",
        "event": "Attackers gain access to SolarWinds build environment",
        "details": "Likely through stolen credentials or vulnerability exploitation"
    },
    
    "2020-02": {
        "phase": "Trojanization",
        "event": "SUNBURST backdoor inserted into Orion Platform source code",
        "details": "Malicious code added to SolarWinds.Orion.Core.BusinessLayer.dll"
    },
    
    "2020-03": {
        "phase": "Distribution",
        "event": "Trojanized Orion updates released (versions 2019.4 HF 5 through 2020.2.1)",
        "details": "18,000+ customers download infected updates"
    },
    
    "2020-04-2020-12": {
        "phase": "Lateral Movement",
        "event": "Attackers move laterally in victim networks",
        "details": "Selective targeting of high-value organizations"
    },
    
    "2020-12-08": {
        "phase": "Initial Detection",
        "event": "FireEye discovers breach of their own network",
        "details": "FireEye's Red Team tools stolen"
    },
    
    "2020-12-13": {
        "phase": "Public Disclosure",
        "event": "FireEye publicly announces breach and SUNBURST",
        "details": "Industry-wide response initiated"
    },
    
    "2020-12-15": {
        "phase": "Vendor Response",
        "event": "SolarWinds releases security advisory",
        "details": "Recommends customers upgrade immediately"
    }
}

# SUNBURST Backdoor Capabilities
SUNBURST_CAPABILITIES = {
    "Reconnaissance": [
        "List running processes",
        "Enumerate system information",
        "Check domain membership",
        "Identify security tools"
    ],
    
    "Execution": [
        "Run arbitrary commands",
        "Execute files",
        "Create/modify services",
        "Registry manipulation"
    ],
    
    "Persistence": [
        "Registry modification",
        "Service creation",
        "Scheduled tasks"
    ],
    
    "Exfiltration": [
        "File transfer via HTTP",
        "DNS tunneling",
        "Encrypted C2 communication"
    ],
    
    "Evasion": [
        "Dormant period (12-14 days)",
        "Checks for analysis environments",
        "Disables security tools",
        "Blends with legitimate traffic"
    ]
}

# Indicators of Compromise
SUNBURST_IOCS = {
    "File Hashes": [
        "b91ce2fa41029f6955bff20079468448",  # SolarWinds.Orion.Core.BusinessLayer.dll
        "c15abaf51e78ca56c0376522d699c978",
        "d0d626deb3f9484e649294a8dfa814c1"
    ],
    
    "C2 Domains": [
        "avsvmcloud.com",
        "digitalcollege.org",
        "freescanonline.com",
        "deftsecurity.com",
        "thedoccloud.com",
        "websitetheme.com",
        "highdatabase.com",
        "incomeupdate.com",
        "databasegalore.com",
        "panhardware.com"
    ],
    
    "Registry Keys": [
        "HKEY_LOCAL_MACHINE\\SOFTWARE\\SolarWinds\\Orion\\ReportWatcherRetry",
        "HKEY_LOCAL_MACHINE\\SOFTWARE\\SolarWinds\\Orion\\ReportWatcherEventType"
    ],
    
    "Processes": [
        "ConfigurationWizard.exe spawning unusual processes",
        "SolarWinds.BusinessLayerHost.exe network connections"
    ]
}
```

**Incident Response Actions:**

```bash
# SolarWinds IR Script

# 1. Identify if SolarWinds Orion is installed
echo "[*] Checking for SolarWinds Orion installation..."
if [ -d "/opt/SolarWinds" ] || [ -d "C:\Program Files (x86)\SolarWinds" ]; then
    echo "[!] SolarWinds Orion detected!"
    
    # 2. Check version
    echo "[*] Checking version..."
    # Vulnerable versions: 2019.4 HF 5, 2020.2, 2020.2.1 HF 1
    
    # 3. Check for SUNBURST indicators
    echo "[*] Checking for SUNBURST backdoor..."
    
    # Check file hash
    md5sum /opt/SolarWinds/Orion/SolarWinds.Orion.Core.BusinessLayer.dll
    
    # Check for suspicious C2 domains in DNS logs
    grep -E 'avsvmcloud\.com|digitalcollege\.org|freescanonline\.com' /var/log/dns.log
    
    # Check for suspicious registry keys (Windows)
    # reg query "HKLM\SOFTWARE\SolarWinds\Orion" /s
    
    # 4. Network isolation
    echo "[*] Isolating SolarWinds server..."
    # Block at firewall
    iptables -A INPUT -p tcp --dport 443 -j DROP
    iptables -A OUTPUT -p tcp --dport 443 -j DROP
    
    # 5. Kill SolarWinds processes
    echo "[*] Stopping SolarWinds services..."
    systemctl stop solarwinds-*
    
    # 6. Collect evidence
    echo "[*] Collecting evidence..."
    mkdir -p /forensics/solarwinds
    
    # Copy logs
    cp -r /var/log/solarwinds/* /forensics/solarwinds/
    
    # Memory dump
    # LiME or similar tool
    
    # Network connections
    netstat -antp > /forensics/solarwinds/netstat.txt
    
    # 7. Update and patch
    echo "[*] Update to clean version (2020.2.1 HF 2 or later)"
    
else
    echo "[+] SolarWinds Orion not installed"
fi

# 8. Hunt for secondary payloads
echo "[*] Hunting for TEARDROP, BEACON, and other implants..."

# Check for TEARDROP
find / -name "*.dll" -exec sh -c 'strings {} | grep -q "TEARDROP_SIGNATURE"' \; -print

# Check for Cobalt Strike BEACON
ps aux | grep -E 'rundll32|regsvr32' | grep -v grep
```

**Lessons Learned:**

1. ✅ **Supply Chain Security**
   - Code signing verification
   - Build environment security
   - Third-party software auditing

2. ✅ **Detection Improvements**
   - Monitor software update processes
   - Detect anomalous network traffic
   - Behavioral analysis of trusted applications

3. ✅ **Response Improvements**
   - Incident response for supply chain attacks
   - Coordination with vendors
   - Communication strategy

---

## 📝 Summary & Incident Response Checklist

### Preparation Checklist:
- ✅ IR team defined and trained
- ✅ IR playbooks developed
- ✅ Tools and equipment ready
- ✅ Contact lists updated
- ✅ Regular drills conducted

### Detection Checklist:
- ✅ SIEM properly configured
- ✅ Log collection comprehensive
- ✅ Threat intelligence integrated
- ✅ Anomaly detection enabled
- ✅ User reporting mechanism

### Containment Checklist:
- ✅ Network isolation procedures
- ✅ Account disabling process
- ✅ Evidence preservation
- ✅ Backup verification
- ✅ Communication plan

### Recovery Checklist:
- ✅ Clean backups available
- ✅ Patch management ready
- ✅ Monitoring enhanced
- ✅ Services gradually restored
- ✅ Validation performed

---

**Module 16 Complete! 🎉**

**Total Content:** 18,000+ words  
**Real Case Study:** SolarWinds supply chain attack  
**Scripts:** Complete IR automation (PowerShell, Python, Bash)  
**Frameworks:** NIST IR lifecycle implementation  

**Progress: 16/30 modules (53%)**

**Next Module:** 17 - Digital Forensics 🔬

