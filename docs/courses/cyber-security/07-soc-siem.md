# Security Operations and SIEM

## Learning Objectives

After completing this chapter, students will be able to describe SOC functions and tier structures, deploy and configure SIEM platforms, write correlation rules for threat detection, perform alert triage and escalation, automate response workflows with SOAR, conduct hypothesis-driven threat hunting, and maintain operational documentation.

## Theory

### Security Operations Center

The SOC is a centralised function responsible for monitoring, detecting, analysing, and responding to security incidents. Tier 1 analysts monitor alerts, perform initial triage, and escalate confirmed incidents. Tier 2 analysts conduct deeper investigation, contain threats, and write detection rules. Tier 3 analysts perform advanced threat hunting, reverse engineering, and incident response coordination. SOC maturity ranges from ad hoc (Level 1) through centralised (Level 2) to proactive threat intelligence-driven operations (Level 3).

### SIEM Architecture

Security Information and Event Management (SIEM) aggregates logs from across the enterprise, normalises them into a common schema, correlates events, generates alerts, and supports forensic investigation. Core components include log collectors, a centralised index, a correlation engine, and a dashboard. Modern SIEMs incorporate user and entity behaviour analytics (UEBA) and machine learning for anomaly detection.

### Log Management

Log sources include firewalls, IDS/IPS, endpoints (Sysmon, EDR), authentication servers (Domain Controllers, RADIUS), web proxies, DNS servers, cloud platforms (CloudTrail, Azure Activity Log), and applications. Logs are typically forwarded using Syslog, Windows Event Forwarding (WEF), or agent-based collectors. The NIST SP 800-92 log management framework guides retention policies, storage sizing, and access controls. Log integrity protections prevent tampering through write-once media, cryptographic signing, or secure forwarding.

### Correlation Rules

Correlation rules transform raw events into actionable alerts. A simple rule may alert on five failed logins within 60 seconds (password guessing). Complex rules aggregate across multiple sources and time windows, such as a successful VPN login followed by impossible travel to an office-based resource access. Rules must balance sensitivity (catching true positives) against specificity (minimising false positives). Use cases are prioritised by risk, with critical alerts demanding immediate response.

### Alert Triage

Triage determines whether an alert represents a true positive, false positive, or benign activity. The analyst enriches the alert with contextual data from the SIEM, threat intelligence, and asset databases. Priority and severity determine escalation urgency. The triage process follows a standardised playbook, ensuring consistent handling. Metrics such as mean time to detect (MTTD) and mean time to respond (MTTR) measure SOC effectiveness.

### SOAR

Security Orchestration, Automation, and Response (SOAR) platforms connect security tools through playbooks that automate response actions. A playbook may automatically isolate an infected endpoint, block an IP address on the firewall, and generate a ticket in the IT service management system. Splunk SOAR (formerly Phantom) and Palo Alto XSOAR are leading platforms. Automation reduces response time for repetitive tasks while preserving human judgment for complex incidents.

### Threat Hunting

Threat hunting proactively searches for adversaries that evaded existing controls. Hypothesis-driven hunting starts with a hypothesis based on threat intelligence, such as "an APT group is using PowerShell Empire in our region." IOC-based hunting searches for known indicators. Anomaly detection identifies deviations from established baselines. The hunting loop consists of hypothesis formation, data collection, analysis, and feedback into detection rules.

### SOC Documentation

Playbooks standardise response procedures for common incident types. Runbooks provide step-by-step instructions for SOC tools. Escalation matrices define the chain of command based on severity. Shift handover reports ensure continuity between SOC teams. Metrics dashboards track operational health, alert volume, response times, and analyst workload.

## Examples

### Splunk Query for Brute Force Detection

```
index=windows EventCode=4625
| bucket _time span=5m
| stats count by Account_Name, Source_Network_Address, _time
| where count > 10
| eval severity = "high"
```

This query counts failed logon attempts (Event ID 4625) per account and source IP in 5-minute buckets, alerting when the threshold of 10 is exceeded.

### Correlation Rule Logic

A rule detecting Kerberoasting: alerts when a single user account queries multiple Service Principal Names (Event ID 4769) using RC4 encryption within a short time window. The rule correlates events across time, filters for the encryption type indicator, and sets severity based on the number of SPNs queried and the requesting account's privilege level.

### SOAR Playbook Steps

When an EDR detects ransomware: isolate the endpoint from the network (API call to EDR), block the C2 IP on the firewall (API call to NGFW), collect a forensic image (trigger automation on endpoint), notify the incident response team (Slack message), create a ticket in the IT ticketing system, and begin a 15-minute countdown timer for analyst review.

## Summary

The SOC operationalises security controls through continuous monitoring, systematic analysis, and coordinated response. SIEM platforms centralise log management and correlation. Triage processes separate genuine threats from noise. SOAR automation accelerates response. Threat hunting surfaces adversaries that evade automated detection. Well-documented procedures ensure consistent operations across shifts and analysts. The measure of a SOC is not the number of alerts it generates but the incidents it prevents and contains.

## Exercises

### Review Questions

1. Describe the responsibilities of each SOC tier. How do tier 1 and tier 3 interactions differ?
2. Explain the difference between a SIEM and a SOAR platform. How do they integrate?
3. What is the purpose of log normalisation? Why do raw logs need to be transformed before correlation?
4. Define MTTD and MTTR. What operational improvements reduce each metric?
5. Distinguish between hypothesis-driven hunting and IOC-based hunting. When is each approach appropriate?

### Application Problems

1. Install the ELK stack (Elasticsearch, Logstash, Kibana). Configure Windows Event Forwarding to send authentication logs. Write a correlation rule detecting password spraying (multiple accounts, single source IP, failed logins).
2. Using a Splunk free tier or ELK, ingest firewall logs and web proxy logs. Write a query that identifies data exfiltration through DNS tunnelling (high entropy subdomains, abnormal query volume per client IP).
3. Create a SOAR playbook for phishing incident response. Use Splunk SOAR or a flowchart tool. Define triggers, enrichment steps (URL scan, hash lookup, email header analysis), containment actions (block sender, quarantine email), and notification procedures.

### Challenge Problem

Design a complete SOC for a mid-sized enterprise. Define the team structure (number of analysts, tiers, shifts), SIEM architecture (log sources, daily log volume, storage sizing, retention policies), detection use cases (minimum 15), alert triage procedures (severity definitions, SLAs, escalation paths), SOAR integration (automation use cases with playbook descriptions), and threat hunting program (quarterly hypotheses, data sources, analysis techniques). Justify each design decision with reference to best practices and operational metrics. Produce a budget estimate including personnel, licensing, and infrastructure costs.
