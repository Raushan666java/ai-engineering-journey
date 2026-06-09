# Security Fundamentals

## Learning Objectives

After completing this chapter, students will be able to define the CIA triad and its operational implications, explain authentication-authorisation-accounting (AAA) models, apply fundamental security principles to system design, perform qualitative risk assessments, construct threat models using STRIDE and DREAD, differentiate attacker types, and identify common attack vectors.

## Theory

### The CIA Triad

Confidentiality, Integrity, and Availability constitute the foundational pillars of information security. Confidentiality ensures that data is accessible only to authorised parties. Encryption, access controls, and data classification are primary mechanisms. Integrity guarantees that data has not been altered by unauthorised parties. Hashing, checksums, and version control provide integrity verification. Availability ensures that systems and data are accessible when needed. Redundancy, failover clustering, and disaster recovery planning underpin availability.

### Authentication, Authorisation, and Accounting

AAA frameworks govern access to resources. Authentication verifies identity through factors: something you know (password), something you have (token), something you are (biometric), or somewhere you are (geolocation). Authorisation determines what an authenticated entity may do, typically enforced through access control lists or policy engines. Accounting records what the entity did, producing audit logs essential for forensic investigation and compliance.

### Security Principles

Least privilege dictates that every entity should operate with the minimum permissions necessary to perform its function. Defence in depth layers independent controls so that failure of any single control does not compromise the system. Separation of duties divides critical operations across multiple individuals to prevent fraud. Fail-safe states ensure that when a control fails, the system defaults to a secure state rather than an insecure one. Economy of mechanism favours simple, small designs that are easier to verify and less likely to contain flaws. Open design holds that security should not depend on secrecy of the mechanism. Psychological acceptability means security controls should not unduly hinder users, or they will be bypassed.

### Risk Management

Risk is the product of likelihood and impact. An asset is anything of value. A threat is a potential cause of an incident. A vulnerability is a weakness that can be exploited. Risk management involves identification, assessment, treatment (avoidance, mitigation, transfer, acceptance), and monitoring. Quantitative risk analysis assigns monetary values; qualitative analysis uses ordinal scales.

### Threat Modelling

Threat modelling identifies and prioritises threats systematically. STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) categorises threats by security property violated. DREAD (Damage potential, Reproducibility, Exploitability, Affected users, Discoverability) provides a risk-scoring framework. PASTA (Process for Attack Simulation and Threat Analysis) is a seven-stage methodology integrating business context with technical analysis.

### Security Policies

Security policies are high-level statements of management intent. Acceptable use policies define permitted behaviour. Password policies specify complexity, rotation, and storage requirements. Data classification policies categorise information by sensitivity. Incident response policies establish reporting and escalation procedures. Policies must be enforceable, communicated, and reviewed periodically.

### Types of Attackers

Script kiddies use automated tools without deep understanding. Hacktivists pursue political or ideological objectives. Insider threats may be malicious employees or negligent users. Cyber criminals seek financial gain through ransomware, fraud, or data theft. Nation-state actors conduct espionage, sabotage, and influence operations. Advanced Persistent Threats (APTs) are highly resourced groups that maintain long-term access to targeted networks.

### Attack Vectors

Phishing and spear-phishing target human trust. Malicious attachments and drive-by downloads exploit client software. Weak credentials are compromised through brute force or credential stuffing. Unpatched software is exploited via known vulnerabilities. Social engineering manipulates victims into divulging information or performing actions. Physical attacks include tailgating, dumpster diving, and device theft. Supply chain attacks compromise software or hardware before delivery to the victim.

## Examples

### STRIDE Threat Modelling Example

Consider a web application storing customer payment data. Spoofing threats include credential theft via phishing. Tampering threats include SQL injection modifying database records. Repudiation threats arise if audit logging is absent. Information disclosure threats include misconfigured cloud storage exposing data. Denial of service threats include resource exhaustion attacks. Elevation of privilege threats include exploiting an admin panel vulnerability.

### Qualitative Risk Assessment

A vulnerability in a public-facing web server with CVSS 9.0, no compensating control, and sensitive data exposure yields a critical risk rating. The organisation may choose to apply a virtual patch (mitigation), accept the risk for a defined period, or take the server offline (avoidance).

### Attack Vector Classification

A targeted email containing a malicious macro-enabled document delivered via a compromised vendor account represents a combined social engineering and supply chain attack vector. The attacker exploits human trust (spear-phishing) and technological weakness (macro execution policies, lack of email sandboxing).

## Summary

Security fundamentals provide the conceptual framework upon which all subsequent chapters build. The CIA triad defines security goals; AAA governs access. Principles such as least privilege, defence in depth, and separation of duties guide secure system design. Risk management and threat modelling enable organisations to identify and prioritise controls proportional to business impact. Understanding attacker motivations and attack vectors informs defensive prioritisation.

### Security Policies Implementation

Security policies must be implemented through standards, procedures, and guidelines. Standards specify mandatory technologies and configurations. Procedures provide step-by-step instructions for tasks such as account provisioning and incident reporting. Guidelines offer recommended practices that are not mandatory. Policy enforcement mechanisms include technical controls (automated policy enforcement points), administrative controls (audit and review), and physical controls (access logs). Non-compliance procedures define consequences and remediation paths. Policies must be reviewed annually and updated in response to regulatory changes, new threats, or organisational restructuring.

### Information Security Management Systems

An ISMS provides a systematic approach to managing sensitive information. The Plan-Do-Check-Act (PDCA) cycle underpins continuous improvement. Plan phase establishes policy, objectives, processes, and risk assessment. Do phase implements and operates the controls. Check phase monitors and reviews performance. Act phase takes corrective and preventive action. ISO 27001 is the leading ISMS standard, requiring documented risk assessment, treatment plans, and internal audits. Certification demonstrates due diligence and regulatory compliance.

## Exercises

### Review Questions

1. Explain the relationship between a threat, a vulnerability, and risk. Provide an original example.
2. Contrast qualitative and quantitative risk analysis. What are the advantages of each approach?
3. A developer proposes storing database credentials in application source code. Which security principle does this violate? Defend your answer.
4. Describe how the STRIDE model maps each threat category to a violated security property of the CIA triad.
5. Why is psychological acceptability important? What happens when security controls fail this principle?

### Application Problems

1. Conduct a STRIDE analysis of an online banking application. Identify at least two threats per category and propose a control for each.
2. Perform a qualitative risk assessment for a hospital's electronic health record system. Define the assets, threats, vulnerabilities, and controls. Calculate risk ratings using a 5x5 likelihood-impact matrix.
3. Draft an acceptable use policy for a corporate network that covers personal device usage, social media access, and data handling. Include enforcement provisions.

### Challenge Problem

Design a threat model for a smart home IoT ecosystem consisting of a cloud-connected door lock, camera, and thermostat. Use PASTA methodology. Identify three attack paths, each involving a different attack vector. For each path, propose layered controls that implement defence in depth. Justify your control selection with reference to the security principles discussed in this chapter.
