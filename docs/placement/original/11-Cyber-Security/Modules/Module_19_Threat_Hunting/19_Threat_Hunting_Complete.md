# 🎯 Module 19: Threat Hunting - Proactive Defense Operations

## 📋 Module Overview

**Duration:** 3 weeks (30 hours)
**Difficulty:** Advanced
**Prerequisites:** Modules 1-18, SIEM Experience, Log Analysis
**Tools Required:** ELK Stack, Splunk, Sigma, MITRE ATT&CK Navigator

**Learning Objectives:**
- Master hypothesis-driven threat hunting methodologies
- Use MITRE ATT&CK framework for hunt planning
- Create and deploy Sigma detection rules
- Build automated hunting pipelines and playbooks
- Analyze telemetry data for threat indicators
- Conduct proactive threat discovery operations

---

## 🔍 19.1 Threat Hunting Fundamentals

### 19.1.1 What is Threat Hunting?

Threat hunting is the **proactive** search for cyber threats hiding in your environment, before automated detection systems alert on them.

**Key Differences:**

```
Traditional Security Operations:
Alert → Investigate → Respond

Threat Hunting:
Hypothesis → Hunt → Discover → Respond
```

**Hunting Maturity Model:**

```
Level 0: No hunting capability
Level 1: Automated alerting only
Level 2: Data-driven hunting with basic tools
Level 3: Hypothesis-driven hunting with advanced analytics
Level 4: Fully automated continuous hunting
Level 5: Machine learning-powered predictive hunting
```

### 19.1.2 The Hunting Process

```python
"""
Threat Hunting Methodology Framework
"""

class ThreatHuntingProcess:
    """Structured threat hunting workflow"""
    
    def __init__(self, hunt_name, hypothesis):
        self.hunt_name = hunt_name
        self.hypothesis = hypothesis
        self.findings = []
        self.iocs = []
        
    def phase_1_hypothesis(self):
        """Develop hunting hypothesis based on threat intelligence"""
        return {
            'hypothesis': self.hypothesis,
            'threat_actor': 'APT29',
            'ttps': ['T1003.001', 'T1059.001', 'T1055'],
            'data_sources': ['process_creation', 'network_traffic', 'file_modifications'],
            'expected_artifacts': ['lsass.exe memory dump', 'powershell.exe -enc', 'rundll32.exe suspicious']
        }
    
    def phase_2_investigate(self, data_sources):
        """Query and analyze data sources"""
        queries = {
            'lsass_access': """
                EventCode:10 AND TargetImage:*lsass.exe
                | stats count by SourceImage, SourceUser
            """,
            'encoded_powershell': """
                process.name:powershell.exe AND 
                process.command_line:*-enc* OR process.command_line:*-e*
            """,
            'rundll32_suspicious': """
                process.name:rundll32.exe AND NOT
                process.command_line:(*shell32.dll* OR *apphelp.dll*)
            """
        }
        return queries
    
    def phase_3_pattern_discovery(self, results):
        """Identify patterns and anomalies"""
        patterns = {
            'temporal_analysis': 'Unusual activity timing',
            'frequency_analysis': 'Spike in specific behaviors',
            'relationship_analysis': 'Parent-child process anomalies',
            'baseline_deviation': 'Deviation from normal behavior'
        }
        return patterns
    
    def phase_4_validation(self, findings):
        """Validate findings and eliminate false positives"""
        validated = []
        for finding in findings:
            if self.validate_finding(finding):
                validated.append(finding)
        return validated
    
    def validate_finding(self, finding):
        """Validate individual finding"""
        checks = [
            finding.get('confidence') > 0.7,
            finding.get('iocs') is not None,
            finding.get('timeline_correlation') == True
        ]
        return all(checks)
    
    def phase_5_response(self, validated_findings):
        """Create actionable response"""
        response = {
            'severity': self.calculate_severity(validated_findings),
            'containment_actions': ['Isolate host', 'Block IOCs', 'Reset credentials'],
            'remediation_steps': ['Remove malware', 'Patch vulnerabilities', 'Restore from backup'],
            'detection_rules': self.create_detection_rules(validated_findings)
        }
        return response
    
    def calculate_severity(self, findings):
        """Calculate hunt severity score"""
        if len(findings) > 10:
            return 'CRITICAL'
        elif len(findings) > 5:
            return 'HIGH'
        elif len(findings) > 1:
            return 'MEDIUM'
        return 'LOW'
    
    def create_detection_rules(self, findings):
        """Generate Sigma/SIEM rules from findings"""
        rules = []
        for finding in findings:
            rule = {
                'title': f"Detection for {finding.get('technique')}",
                'description': f"Automated rule from hunt: {self.hunt_name}",
                'logsource': finding.get('log_source'),
                'detection': finding.get('detection_logic')
            }
            rules.append(rule)
        return rules

# Example Hunt
hunt = ThreatHuntingProcess(
    hunt_name="Credential Dumping Detection",
    hypothesis="Adversary is using Mimikatz to dump credentials"
)

hypothesis = hunt.phase_1_hypothesis()
queries = hunt.phase_2_investigate(['sysmon', 'windows_security'])
print(f"Hunt initiated: {hunt.hunt_name}")
print(f"Queries generated: {len(queries)}")
```

---

## 🗺️ 19.2 MITRE ATT&CK Framework Integration

### 19.2.1 ATT&CK-Based Hunt Planning

```python
"""
MITRE ATT&CK Framework Integration for Threat Hunting
"""

import requests
import json

class MITREAttackHunter:
    """Use MITRE ATT&CK for structured hunting"""
    
    def __init__(self):
        self.attack_url = "https://raw.githubusercontent.com/mitre/cti/master/enterprise-attack/enterprise-attack.json"
        self.techniques = {}
        self.load_attack_data()
    
    def load_attack_data(self):
        """Load MITRE ATT&CK data"""
        try:
            response = requests.get(self.attack_url)
            data = response.json()
            
            for obj in data['objects']:
                if obj['type'] == 'attack-pattern':
                    self.techniques[obj['external_references'][0]['external_id']] = {
                        'name': obj['name'],
                        'description': obj.get('description', ''),
                        'tactics': [phase['phase_name'] for phase in obj.get('kill_chain_phases', [])],
                        'data_sources': obj.get('x_mitre_data_sources', [])
                    }
            
            print(f"Loaded {len(self.techniques)} ATT&CK techniques")
        except Exception as e:
            print(f"Error loading ATT&CK data: {e}")
    
    def get_technique_details(self, technique_id):
        """Get details for specific technique"""
        return self.techniques.get(technique_id)
    
    def generate_hunt_from_technique(self, technique_id):
        """Generate hunt queries based on ATT&CK technique"""
        technique = self.get_technique_details(technique_id)
        
        if not technique:
            return None
        
        hunt_plan = {
            'technique_id': technique_id,
            'technique_name': technique['name'],
            'tactics': technique['tactics'],
            'data_sources': technique['data_sources'],
            'hunt_queries': self.create_hunt_queries(technique),
            'expected_indicators': self.get_expected_indicators(technique_id)
        }
        
        return hunt_plan
    
    def create_hunt_queries(self, technique):
        """Create hunt queries based on technique"""
        queries = []
        
        # Map data sources to query logic
        data_source_queries = {
            'Process monitoring': 'process.name:* AND process.command_line:*',
            'File monitoring': 'file.path:* AND event.action:(creation OR modification)',
            'Network traffic': 'network.protocol:* AND destination.ip:*',
            'Windows event logs': 'event.code:* AND winlog.event_data.*',
            'API monitoring': 'api.name:* AND api.parameters:*'
        }
        
        for data_source in technique.get('data_sources', []):
            if data_source in data_source_queries:
                queries.append({
                    'data_source': data_source,
                    'query': data_source_queries[data_source],
                    'fields': ['@timestamp', 'host.name', 'user.name', 'process.*']
                })
        
        return queries
    
    def get_expected_indicators(self, technique_id):
        """Get expected indicators for technique"""
        indicator_map = {
            'T1003.001': ['lsass.exe access', 'sekurlsa::logonpasswords', 'procdump.exe'],
            'T1059.001': ['powershell.exe -enc', 'Invoke-Expression', 'downloadstring'],
            'T1055': ['CreateRemoteThread', 'WriteProcessMemory', 'process injection'],
            'T1071.001': ['HTTP C2 beaconing', 'base64 encoded data', 'unusual user-agent']
        }
        
        return indicator_map.get(technique_id, [])
    
    def map_hunt_to_attack_matrix(self, hunt_results):
        """Map hunt results to ATT&CK matrix for coverage visualization"""
        coverage = {}
        
        for result in hunt_results:
            technique = result.get('technique_id')
            if technique:
                coverage[technique] = {
                    'detected': result.get('detected', False),
                    'confidence': result.get('confidence', 0),
                    'findings_count': len(result.get('findings', []))
                }
        
        return coverage

# Usage Example
attack_hunter = MITREAttackHunter()

# Generate hunt for credential dumping
hunt_plan = attack_hunter.generate_hunt_from_technique('T1003.001')
print(json.dumps(hunt_plan, indent=2))

# Plan multi-technique hunt campaign
campaign_techniques = ['T1003.001', 'T1059.001', 'T1055', 'T1071.001']
for tech_id in campaign_techniques:
    plan = attack_hunter.generate_hunt_from_technique(tech_id)
    print(f"\nHunt Plan for {plan['technique_name']}:")
    print(f"Data Sources: {', '.join(plan['data_sources'])}")
```

---

## 📊 19.3 Sigma Rule Development

### 19.3.1 Sigma Rule Syntax and Creation

```yaml
# Example Sigma Rule: Credential Dumping Detection

title: LSASS Memory Dump Detection
id: 9f0a8bf3-a65a-4e3f-a5d6-8c8c8a8b8c8d
status: stable
description: Detects attempts to dump LSASS process memory for credential theft
author: Threat Hunter Team
date: 2025/10/31
references:
    - https://attack.mitre.org/techniques/T1003/001/
tags:
    - attack.credential_access
    - attack.t1003.001
logsource:
    product: windows
    service: sysmon
detection:
    selection_process:
        EventID: 10
        TargetImage|endswith: '\lsass.exe'
    selection_access:
        GrantedAccess|contains:
            - '0x1010'
            - '0x1038'
            - '0x1400'
            - '0x1410'
            - '0x1438'
            - '0x143a'
            - '0x1fffff'
    filter_known_good:
        SourceImage|endswith:
            - '\svchost.exe'
            - '\wmiprvse.exe'
            - '\taskmgr.exe'
            - '\procexp64.exe'
    condition: selection_process and selection_access and not filter_known_good
falsepositives:
    - Legitimate security tools
    - System monitoring software
    - Backup solutions
level: high
```

**Python Sigma Rule Manager:**

```python
"""
Sigma Rule Management and Deployment
"""

import yaml
import os
from pathlib import Path

class SigmaRuleManager:
    """Manage Sigma detection rules"""
    
    def __init__(self, rules_directory='sigma_rules'):
        self.rules_directory = Path(rules_directory)
        self.rules = {}
        self.load_rules()
    
    def load_rules(self):
        """Load all Sigma rules from directory"""
        if not self.rules_directory.exists():
            self.rules_directory.mkdir(parents=True)
            return
        
        for rule_file in self.rules_directory.glob('*.yml'):
            try:
                with open(rule_file, 'r') as f:
                    rule = yaml.safe_load(f)
                    self.rules[rule['id']] = rule
                    print(f"Loaded rule: {rule['title']}")
            except Exception as e:
                print(f"Error loading {rule_file}: {e}")
    
    def create_rule(self, rule_data):
        """Create new Sigma rule"""
        rule_template = {
            'title': rule_data.get('title', 'New Rule'),
            'id': rule_data.get('id'),
            'status': rule_data.get('status', 'experimental'),
            'description': rule_data.get('description', ''),
            'author': rule_data.get('author', 'Unknown'),
            'date': rule_data.get('date'),
            'tags': rule_data.get('tags', []),
            'logsource': rule_data.get('logsource', {}),
            'detection': rule_data.get('detection', {}),
            'falsepositives': rule_data.get('falsepositives', []),
            'level': rule_data.get('level', 'medium')
        }
        
        # Save rule
        filename = f"{rule_template['id']}.yml"
        filepath = self.rules_directory / filename
        
        with open(filepath, 'w') as f:
            yaml.dump(rule_template, f, default_flow_style=False)
        
        self.rules[rule_template['id']] = rule_template
        print(f"Created rule: {rule_template['title']}")
        
        return rule_template
    
    def convert_to_siem_query(self, rule_id, target_siem='elastic'):
        """Convert Sigma rule to SIEM-specific query"""
        rule = self.rules.get(rule_id)
        if not rule:
            return None
        
        detection = rule.get('detection', {})
        
        if target_siem == 'elastic':
            return self.convert_to_elastic(detection)
        elif target_siem == 'splunk':
            return self.convert_to_splunk(detection)
        elif target_siem == 'qradar':
            return self.convert_to_qradar(detection)
        
        return None
    
    def convert_to_elastic(self, detection):
        """Convert to Elasticsearch/Kibana query"""
        selection = detection.get('selection_process', {})
        query_parts = []
        
        for field, value in selection.items():
            if isinstance(value, list):
                values = ' OR '.join([f'"{v}"' for v in value])
                query_parts.append(f"{field}:({values})")
            else:
                query_parts.append(f'{field}:"{value}"')
        
        return ' AND '.join(query_parts)
    
    def convert_to_splunk(self, detection):
        """Convert to Splunk SPL query"""
        selection = detection.get('selection_process', {})
        query_parts = []
        
        for field, value in selection.items():
            if isinstance(value, list):
                values = ' OR '.join([f'{field}="{v}"' for v in value])
                query_parts.append(f"({values})")
            else:
                query_parts.append(f'{field}="{value}"')
        
        return ' '.join(query_parts)
    
    def validate_rule(self, rule_id):
        """Validate Sigma rule syntax"""
        rule = self.rules.get(rule_id)
        if not rule:
            return False
        
        required_fields = ['title', 'id', 'detection', 'logsource']
        
        for field in required_fields:
            if field not in rule:
                print(f"Missing required field: {field}")
                return False
        
        return True
    
    def batch_convert_rules(self, target_siem='elastic'):
        """Convert all rules to target SIEM format"""
        converted = {}
        
        for rule_id, rule in self.rules.items():
            query = self.convert_to_siem_query(rule_id, target_siem)
            if query:
                converted[rule['title']] = query
        
        return converted

# Usage Example
sigma_mgr = SigmaRuleManager()

# Create new rule from hunt findings
new_rule = sigma_mgr.create_rule({
    'title': 'Suspicious PowerShell Encoded Command',
    'id': 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'description': 'Detects PowerShell with encoded commands',
    'tags': ['attack.execution', 'attack.t1059.001'],
    'logsource': {
        'product': 'windows',
        'service': 'powershell'
    },
    'detection': {
        'selection': {
            'EventID': 4104,
            'ScriptBlockText|contains': ['-enc', '-encodedcommand']
        },
        'condition': 'selection'
    },
    'level': 'high'
})

# Convert to Elasticsearch query
elastic_query = sigma_mgr.convert_to_siem_query(new_rule['id'], 'elastic')
print(f"Elastic Query: {elastic_query}")

# Batch convert all rules
all_queries = sigma_mgr.batch_convert_rules('splunk')
print(f"Converted {len(all_queries)} rules to Splunk SPL")
```

---

## 🤖 19.4 Automated Hunting Pipelines

```python
"""
Automated Threat Hunting Pipeline
"""

import schedule
import time
from datetime import datetime, timedelta
from elasticsearch import Elasticsearch

class AutomatedHuntingPipeline:
    """Continuous automated threat hunting system"""
    
    def __init__(self, elasticsearch_host='localhost:9200'):
        self.es = Elasticsearch([elasticsearch_host])
        self.hunt_results = []
        self.active_hunts = []
    
    def schedule_hunt(self, hunt_name, query, interval_minutes=60):
        """Schedule recurring hunt"""
        hunt = {
            'name': hunt_name,
            'query': query,
            'interval': interval_minutes,
            'last_run': None,
            'findings': []
        }
        
        self.active_hunts.append(hunt)
        
        # Schedule with schedule library
        schedule.every(interval_minutes).minutes.do(
            self.execute_hunt, hunt
        )
        
        print(f"Scheduled hunt: {hunt_name} (every {interval_minutes} minutes)")
    
    def execute_hunt(self, hunt):
        """Execute hunting query"""
        print(f"[{datetime.now()}] Executing hunt: {hunt['name']}")
        
        try:
            # Execute Elasticsearch query
            result = self.es.search(
                index='logs-*',
                body={
                    'query': hunt['query'],
                    'size': 100,
                    'sort': [{'@timestamp': {'order': 'desc'}}]
                }
            )
            
            hits = result['hits']['hits']
            
            if hits:
                print(f"  ✓ Found {len(hits)} potential threats")
                
                # Analyze findings
                findings = self.analyze_findings(hits, hunt['name'])
                hunt['findings'].extend(findings)
                
                # Generate alerts for high-confidence findings
                for finding in findings:
                    if finding['confidence'] > 0.8:
                        self.create_alert(finding, hunt['name'])
            else:
                print(f"  ✓ No threats detected")
            
            hunt['last_run'] = datetime.now()
            
        except Exception as e:
            print(f"  ✗ Hunt failed: {e}")
    
    def analyze_findings(self, hits, hunt_name):
        """Analyze hunt results for true positives"""
        findings = []
        
        for hit in hits:
            source = hit['_source']
            
            finding = {
                'timestamp': source.get('@timestamp'),
                'host': source.get('host', {}).get('name'),
                'user': source.get('user', {}).get('name'),
                'process': source.get('process', {}).get('name'),
                'command_line': source.get('process', {}).get('command_line'),
                'confidence': self.calculate_confidence(source),
                'severity': self.calculate_severity(source),
                'hunt_name': hunt_name,
                'raw_event': source
            }
            
            findings.append(finding)
        
        return findings
    
    def calculate_confidence(self, event):
        """Calculate confidence score for finding"""
        confidence = 0.5  # baseline
        
        # Increase confidence based on indicators
        indicators = {
            'known_bad_process': 0.3,
            'suspicious_command': 0.2,
            'unusual_network': 0.2,
            'privilege_escalation': 0.3
        }
        
        if event.get('process', {}).get('name') in ['mimikatz.exe', 'procdump.exe']:
            confidence += indicators['known_bad_process']
        
        cmd_line = event.get('process', {}).get('command_line', '')
        if any(sus in cmd_line.lower() for sus in ['-enc', 'invoke-expression', 'downloadstring']):
            confidence += indicators['suspicious_command']
        
        return min(confidence, 1.0)
    
    def calculate_severity(self, event):
        """Calculate severity level"""
        confidence = self.calculate_confidence(event)
        
        if confidence > 0.9:
            return 'CRITICAL'
        elif confidence > 0.7:
            return 'HIGH'
        elif confidence > 0.5:
            return 'MEDIUM'
        return 'LOW'
    
    def create_alert(self, finding, hunt_name):
        """Create alert for high-confidence finding"""
        alert = {
            'timestamp': datetime.now().isoformat(),
            'title': f"Threat Detected: {hunt_name}",
            'severity': finding['severity'],
            'confidence': finding['confidence'],
            'host': finding['host'],
            'user': finding['user'],
            'details': {
                'process': finding['process'],
                'command_line': finding['command_line']
            },
            'recommended_actions': self.get_recommended_actions(finding)
        }
        
        # Send alert (integrate with SIEM, SOAR, or ticketing system)
        print(f"  🚨 ALERT: {alert['title']} - Severity: {alert['severity']}")
        
        return alert
    
    def get_recommended_actions(self, finding):
        """Get recommended response actions"""
        actions = [
            'Isolate affected host',
            'Collect memory dump',
            'Capture network traffic',
            'Review user activity',
            'Check for lateral movement'
        ]
        
        if finding['severity'] == 'CRITICAL':
            actions.insert(0, 'Immediate incident response required')
        
        return actions
    
    def generate_hunt_report(self, hunt_name):
        """Generate hunt summary report"""
        hunt = next((h for h in self.active_hunts if h['name'] == hunt_name), None)
        
        if not hunt:
            return None
        
        report = {
            'hunt_name': hunt['name'],
            'total_runs': len([f for f in hunt['findings']]),
            'total_findings': len(hunt['findings']),
            'high_confidence': len([f for f in hunt['findings'] if f['confidence'] > 0.8]),
            'last_run': hunt['last_run'].isoformat() if hunt['last_run'] else None,
            'findings_by_severity': {
                'CRITICAL': len([f for f in hunt['findings'] if f['severity'] == 'CRITICAL']),
                'HIGH': len([f for f in hunt['findings'] if f['severity'] == 'HIGH']),
                'MEDIUM': len([f for f in hunt['findings'] if f['severity'] == 'MEDIUM']),
                'LOW': len([f for f in hunt['findings'] if f['severity'] == 'LOW'])
            }
        }
        
        return report
    
    def run_pipeline(self):
        """Start continuous hunting pipeline"""
        print("🎯 Starting Automated Threat Hunting Pipeline")
        print(f"Active hunts: {len(self.active_hunts)}")
        
        while True:
            schedule.run_pending()
            time.sleep(60)

# Usage Example
pipeline = AutomatedHuntingPipeline()

# Schedule various hunts
pipeline.schedule_hunt(
    hunt_name="Credential Dumping",
    query={
        'bool': {
            'must': [
                {'match': {'event.code': '10'}},
                {'match': {'winlog.event_data.TargetImage': '*lsass.exe'}}
            ]
        }
    },
    interval_minutes=30
)

pipeline.schedule_hunt(
    hunt_name="Suspicious PowerShell",
    query={
        'bool': {
            'must': [
                {'match': {'process.name': 'powershell.exe'}},
                {'wildcard': {'process.command_line': '*-enc*'}}
            ]
        }
    },
    interval_minutes=15
)

pipeline.schedule_hunt(
    hunt_name="Lateral Movement",
    query={
        'bool': {
            'should': [
                {'match': {'event.code': '4624'}},
                {'match': {'winlog.event_data.LogonType': '3'}},
                {'match': {'process.name': 'psexec.exe'}}
            ],
            'minimum_should_match': 2
        }
    },
    interval_minutes=60
)

# Start pipeline (runs continuously)
# pipeline.run_pipeline()

# Generate report
report = pipeline.generate_hunt_report("Credential Dumping")
print(json.dumps(report, indent=2))
```

---

## 📈 19.5 Hunt Metrics and KPIs

```python
"""
Threat Hunting Metrics and Effectiveness Tracking
"""

class HuntMetricsTracker:
    """Track threat hunting program effectiveness"""
    
    def __init__(self):
        self.hunts = []
        self.metrics = {}
    
    def record_hunt(self, hunt_data):
        """Record hunt activity and results"""
        self.hunts.append(hunt_data)
        self.update_metrics()
    
    def update_metrics(self):
        """Calculate hunting program metrics"""
        total_hunts = len(self.hunts)
        
        if total_hunts == 0:
            return
        
        self.metrics = {
            'total_hunts': total_hunts,
            'total_findings': sum(len(h.get('findings', [])) for h in self.hunts),
            'true_positives': sum(h.get('true_positives', 0) for h in self.hunts),
            'false_positives': sum(h.get('false_positives', 0) for h in self.hunts),
            'mean_time_to_hunt': self.calculate_mtth(),
            'detection_coverage': self.calculate_coverage(),
            'hunt_efficiency': self.calculate_efficiency()
        }
        
        # Calculate derived metrics
        if self.metrics['true_positives'] + self.metrics['false_positives'] > 0:
            self.metrics['precision'] = (
                self.metrics['true_positives'] / 
                (self.metrics['true_positives'] + self.metrics['false_positives'])
            )
        else:
            self.metrics['precision'] = 0
        
        return self.metrics
    
    def calculate_mtth(self):
        """Calculate Mean Time To Hunt"""
        hunt_times = [h.get('duration_minutes', 0) for h in self.hunts]
        return sum(hunt_times) / len(hunt_times) if hunt_times else 0
    
    def calculate_coverage(self):
        """Calculate ATT&CK technique coverage"""
        covered_techniques = set()
        for hunt in self.hunts:
            covered_techniques.update(hunt.get('techniques', []))
        
        # Assuming 200 total enterprise techniques
        return len(covered_techniques) / 200
    
    def calculate_efficiency(self):
        """Calculate hunting efficiency (findings per hour)"""
        total_hours = sum(h.get('duration_minutes', 0) for h in self.hunts) / 60
        total_findings = self.metrics.get('total_findings', 0)
        
        return total_findings / total_hours if total_hours > 0 else 0
    
    def generate_dashboard_data(self):
        """Generate data for hunting dashboard"""
        return {
            'summary': self.metrics,
            'hunt_timeline': self.get_hunt_timeline(),
            'technique_heatmap': self.get_technique_heatmap(),
            'top_hunters': self.get_top_hunters(),
            'trending_threats': self.get_trending_threats()
        }
    
    def get_hunt_timeline(self):
        """Get hunt activity over time"""
        timeline = {}
        for hunt in self.hunts:
            date = hunt.get('date', 'unknown')
            timeline[date] = timeline.get(date, 0) + 1
        return timeline
    
    def get_technique_heatmap(self):
        """Get ATT&CK technique coverage heatmap"""
        technique_counts = {}
        for hunt in self.hunts:
            for technique in hunt.get('techniques', []):
                technique_counts[technique] = technique_counts.get(technique, 0) + 1
        return technique_counts
    
    def get_top_hunters(self):
        """Get top performing hunters"""
        hunter_stats = {}
        for hunt in self.hunts:
            hunter = hunt.get('hunter', 'unknown')
            if hunter not in hunter_stats:
                hunter_stats[hunter] = {'hunts': 0, 'findings': 0, 'true_positives': 0}
            
            hunter_stats[hunter]['hunts'] += 1
            hunter_stats[hunter]['findings'] += len(hunt.get('findings', []))
            hunter_stats[hunter]['true_positives'] += hunt.get('true_positives', 0)
        
        return sorted(
            hunter_stats.items(),
            key=lambda x: x[1]['true_positives'],
            reverse=True
        )[:5]
    
    def get_trending_threats(self):
        """Identify trending threat patterns"""
        threat_counts = {}
        for hunt in self.hunts:
            for finding in hunt.get('findings', []):
                threat_type = finding.get('threat_type', 'unknown')
                threat_counts[threat_type] = threat_counts.get(threat_type, 0) + 1
        
        return sorted(
            threat_counts.items(),
            key=lambda x: x[1],
            reverse=True
        )[:10]

# Usage
tracker = HuntMetricsTracker()

# Record hunts
tracker.record_hunt({
    'date': '2025-10-31',
    'hunter': 'Alice',
    'duration_minutes': 120,
    'techniques': ['T1003.001', 'T1059.001'],
    'findings': [{'threat_type': 'credential_theft'}] * 5,
    'true_positives': 3,
    'false_positives': 2
})

# Get metrics
metrics = tracker.update_metrics()
print(f"Hunting Precision: {metrics['precision']:.2%}")
print(f"Detection Coverage: {metrics['detection_coverage']:.2%}")
print(f"Efficiency: {metrics['hunt_efficiency']:.2f} findings/hour")
```

---

## 📚 19.6 Practical Hunting Playbooks

### Playbook 1: Credential Dumping Hunt

```markdown
# Credential Dumping Hunt Playbook

## Hypothesis
Adversaries are using Mimikatz or similar tools to dump credentials from LSASS memory.

## ATT&CK Techniques
- T1003.001 - LSASS Memory
- T1078 - Valid Accounts

## Data Sources
- Sysmon Event ID 10 (ProcessAccess)
- Windows Security Event ID 4656 (Handle to Object)
- EDR telemetry

## Hunt Queries

### Elasticsearch/Kibana:
```
event.code:10 AND winlog.event_data.TargetImage:*lsass.exe 
AND NOT winlog.event_data.SourceImage:(*svchost.exe OR *wmiprvse.exe)
```

### Splunk:
```
index=windows EventCode=10 TargetImage="*lsass.exe"
| stats count by Computer, SourceImage, SourceUser
| where count > 5
```

## Expected Indicators
- Process accessing lsass.exe with suspicious access rights
- Tools: mimikatz.exe, procdump.exe, comsvcs.dll
- Suspicious parent processes

## Validation Steps
1. Check source process reputation
2. Verify user account legitimacy
3. Review timeline for other suspicious activity
4. Check for credential usage after dump

## Response Actions
1. Isolate affected system
2. Reset compromised credentials
3. Collect memory dump for analysis
4. Review authentication logs for lateral movement
```

---

## 🎓 19.7 Module Summary

### Key Concepts Mastered:
✅ Hypothesis-driven threat hunting methodology
✅ MITRE ATT&CK framework integration
✅ Sigma rule development and deployment
✅ Automated hunting pipeline creation
✅ Hunt metrics and KPI tracking
✅ Practical hunting playbooks

### Essential Tools:
- **SIEM Platforms:** Splunk, Elastic Stack, QRadar
- **Detection Frameworks:** Sigma, YARA
- **Threat Intelligence:** MITRE ATT&CK, Threat Intel Feeds
- **Hunting Tools:** Velociraptor, OSQuery, GRR

### Career Paths:
- Threat Hunter
- Detection Engineer
- SOC Analyst (Advanced)
- Threat Intelligence Analyst
- Purple Team Operator

### Certifications:
- GIAC Cyber Threat Intelligence (GCTI)
- SANS FOR508: Advanced Incident Response
- Certified Threat Intelligence Analyst (CTIA)

---

**Module 19 Complete! Next: Module 20 - Security Governance**
