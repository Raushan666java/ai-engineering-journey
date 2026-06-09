# Incident Response

## Learning Objectives

After completing this chapter, students will be able to describe the NIST SP 800-61 incident response lifecycle, apply the SANS PICERL model, detect incidents through indicators and anomalies, perform containment actions appropriate to threat type, eradicate malware and close attack vectors, recover systems to normal operation, conduct blameless postmortems, maintain chain of custody, and define incident response team structures.

## Theory

### Incident Response Lifecycle

The NIST SP 800-61 revision 2 framework defines four phases: Preparation, Detection and Analysis, Containment, Eradication, and Recovery, and Post-Incident Activity. Preparation establishes policies, tools, communication plans, and training before an incident occurs. Detection and Analysis identifies incidents through indicators, correlates events, and determines scope and impact. Containment, Eradication, and Recovery stops the incident, removes the threat, and restores normal operations. Post-Incident Activity conducts lessons learned and improves security controls.

### SANS PICERL Model

The SANS PICERL model extends the lifecycle with six phases. Preparation is identical to NIST. Identification confirms the incident and gathers initial evidence. Containment isolates affected systems and prevents spread. Eradication removes malware, attacker tools, and persistence mechanisms. Recovery restores data, patches vulnerabilities, and returns systems to production. Lessons Learned documents findings, improvements, and plan updates.

### Detection Methods

Indicator of Compromise (IOC) detection matches known attacker artifacts against system data. IOCs include file hashes, IP addresses, domain names, registry keys, and mutex names. Indicator of Attack (IOA) detection identifies attacker behaviour patterns such as lateral movement, privilege escalation, and data staging. Anomaly detection establishes baselines and alerts on deviations. Signature detection identifies known attack patterns in network traffic and logs.

### Alert Sources

Endpoint detection and response (EDR) alerts on suspicious process execution, network connections, and registry modifications. SIEM correlation rules trigger on multi-event patterns. Network monitoring (IDS, NetFlow analysis) detects anomalous traffic. User reports provide human intelligence. Threat intelligence feeds identify IOCs relevant to the organisation. Cloud security services (GuardDuty, Defender for Cloud) detect cloud-specific threats.

### Containment Strategies

Short-term containment stops immediate damage while preserving evidence. Network containment: blocking IP addresses on firewalls, disabling switch ports, isolating VLAN segments. System containment: suspending virtual machines, disabling user accounts, killing malicious processes. Long-term containment applies while permanent remediation is developed. System imaging for forensics before containment actions is ideal but often impractical.

### Eradication

Eradication removes the threat from all affected systems. Steps include identifying all compromised hosts, removing malware through automated tools (EDR quarantine) or manual clean-up, revoking attacker credentials and certificates, eliminating persistence mechanisms, applying patches for exploited vulnerabilities, and verifying complete removal through additional scans. Cloud eradication revokes IAM keys, rotates credentials, and restores resources from clean snapshots.

### Recovery

Recovery restores systems to normal operation. Data restoration from validated backups ensures data integrity. System re-imaging rebuilds compromised hosts from known-good images. Gradual re-introduction of services monitors for re-infection. Validation confirms that patches are applied, security controls are active, and no residual indicators exist. Monitoring is increased post-recovery to detect persistent threats.

### Postmortems

Post-incident reviews follow a blameless format focused on systemic improvements rather than individual fault. The timeline reconstructs events from first contact through recovery. Contributing factors identify what enabled the incident. Action items are assigned with owners and deadlines. Recommendations are prioritised by risk reduction. Findings feed back into detection rules, security controls, and incident response procedures.

### Chain of Custody

Chain of custody for incident response differs from forensics in that immediate containment may require actions that modify evidence. Where forensic preservation is required, imaging occurs before containment. Documentation records every action with timestamps, justification, and person responsible. Evidence must be labelled, sealed, and logged. Legal counsel should be consulted for incidents with potential litigation or regulatory notification.

### Incident Response Team Structure

Computer Security Incident Response Team (CSIRT) and Computer Incident Response Team (CIRT) are organisational units responsible for incident handling. Team models include: internal (dedicated employees), outsourced (MSSP), virtual (distributed roles), and coordinated (multiple organisations). Roles include incident manager, technical lead, communications lead, legal counsel, and executive liaison.

### Communication Plan

Incident communication must be timely, accurate, and controlled. Internal notifications go to management, legal, and affected teams. External notifications include law enforcement, regulators, affected customers, and public relations. Communication templates prepared during the preparation phase reduce errors. A single designated spokesperson controls external messaging.

## Examples

### Incident Timeline

Detection: EDR alerts on PowerShell executing encoded command from suspicious IP. Analysis: the process is `powershell -enc <base64>`, decoding reveals a C2 download cradle. Scope: three additional workstations show similar activity. Containment: firewall blocks the C2 IP, affected hosts are isolated. Eradication: scheduled tasks removed, malicious DLLs deleted, credentials rotated. Recovery: hosts reimaged from clean gold image. Postmortem: the initial vector was a phishing email; additional email security controls are deployed.

### Containment Decision Matrix

Ransomware: immediate network isolation, do not power off (memory evidence lost), preserve encryption samples. Data exfiltration: block outbound connections, preserve egress logs, determine what data was accessed. Insider threat: disable user account, preserve user profile, interview witnesses. Denial of service: activate DDoS mitigation, engage upstream provider, preserve traffic captures.

### Postmortem Template

Sections include: incident summary, timeline of events, detection and response effectiveness, root cause analysis, what went well, what went wrong, action items (with priority, owner, due date), and lessons learned. Each action item is formulated as a SMART goal with measurable verification criteria.

## Summary

Incident response transforms reactive chaos into structured process. The NIST and SANS frameworks guide teams through detection, containment, eradication, and recovery. Preparation is the most cost-effective phase, as well-resourced teams respond faster and more effectively. Containment decisions balance business continuity with threat mitigation. Blameless postmortems drive continuous improvement. Chain of custody protects legal interests. Every incident is an opportunity to strengthen defences and improve response capability.

## Exercises

### Review Questions

1. Compare the NIST SP 800-61 and SANS PICERL frameworks. What are the key similarities and differences?
2. What is the purpose of short-term containment? How does it differ from long-term containment?
3. Explain why a blameless postmortem is important. How does blame affect the quality of lessons learned?
4. Describe the chain of custody requirements in an incident response context. What must be documented?
5. What are the advantages and disadvantages of an in-house CSIRT versus a managed security service provider?

### Application Problems

1. Develop an incident response plan for a small business. Include team roles, communication plan, severity classification, containment procedures, and post-incident review process.
2. Conduct a tabletop exercise for a ransomware scenario. Prepare injects (emails, detection alerts, phone calls) simulating the incident lifecycle. Facilitate the exercise with a team and document decisions made at each inject.
3. Write a post-incident report for a simulated data breach involving customer PII. Include timeline, root cause analysis, containment actions, findings, and action items. Present it as a formal report suitable for executive leadership and regulatory notification.

### Challenge Problem

Execute a simulated incident response from detection through recovery. The scenario: an EDR alert indicates ransomware deployment on a critical file server containing customer PII. You have 30 minutes from detection to complete containment. The exercise tests: detection analysis (identify the ransomware family, determine the initial vector, assess scope), containment (decide isolation strategy, execute containment, preserve forensic evidence), eradication (remove persistence, identify all compromised systems), recovery (restore from backups, validate integrity, return to production), and postmortem (identify contributing factors, assign action items, improve detection rules). Document every step with timestamps, justification, and evidence. Produce an executive summary suitable for presentation to senior management.
