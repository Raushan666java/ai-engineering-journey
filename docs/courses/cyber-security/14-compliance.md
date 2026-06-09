# Compliance and Governance

## Learning Objectives

After completing this chapter, students will be able to identify major regulatory frameworks and their applicability, implement compliance programmes aligned with GDPR, HIPAA, PCI-DSS, and SOC 2, prepare for and conduct security audits, apply governance frameworks including COBIT and ITIL, classify data by sensitivity, implement data protection controls, understand breach notification obligations, and design privacy-by-default systems.

## Theory

### Regulatory Landscape

Organisations operate under multiple overlapping regulatory obligations. The General Data Protection Regulation (GDPR) governs personal data of EU residents, regardless of where processing occurs. The Health Insurance Portability and Accountability Act (HIPAA) protects US healthcare data. The Payment Card Industry Data Security Standard (PCI-DSS) secures cardholder data. The Sarbanes-Oxley Act (SOX) mandates internal controls for financial reporting. The California Consumer Privacy Act (CCPA) provides privacy rights to California residents. ISO 27001 is an international standard for Information Security Management Systems (ISMS). SOC 2 reports assess service organisation controls. FedRAMP standardises cloud security for US government agencies. NIST SP 800-53 provides a comprehensive security control catalogue for US federal systems.

### GDPR

GDPR applies to any organisation processing personal data of EU data subjects. Key principles: lawfulness, fairness, transparency; purpose limitation; data minimisation; accuracy; storage limitation; integrity and confidentiality; accountability. Data subjects have rights of access, rectification, erasure (right to be forgotten), restriction, data portability, and objection. Breach notification requires reporting to supervisory authority within 72 hours. Fines reach 4% of annual global turnover or EUR 20 million, whichever is greater.

### HIPAA

HIPAA applies to covered entities (healthcare providers, health plans, healthcare clearinghouses) and business associates. The Privacy Rule governs protected health information (PHI) use and disclosure. The Security Rule requires administrative, physical, and technical safeguards for electronic PHI (ePHI). The Breach Notification Rule mandates notification to affected individuals, the Department of Health and Human Services, and sometimes media. Required safeguards include access controls, audit controls, integrity controls, transmission security, and contingency planning.

### PCI-DSS

PCI-DSS applies to any entity that stores, processes, or transmits cardholder data. The standard has six goals and twelve requirements organised across: build and maintain a secure network, protect cardholder data, maintain a vulnerability management programme, implement strong access control measures, regularly monitor and test networks, and maintain an information security policy. Requirement 3 prohibits storing sensitive authentication data after authorisation. Requirement 4 requires encryption of cardholder data over public networks. Compliance validation ranges from Self-Assessment Questionnaires (SAQ) for low-volume merchants to annual on-site assessments by a Qualified Security Assessor (QSA) for Level 1 merchants.

### SOC 2

SOC 2 reports evaluate controls relevant to security, availability, processing integrity, confidentiality, and privacy (the Trust Services Criteria). Type I reports assess control design at a point in time. Type II reports assess operating effectiveness over a period. The auditor tests controls through inspection, observation, inquiry, and re-performance. SOC 2 has become a de facto requirement for SaaS providers serving enterprise customers.

### ISO 27001

ISO 27001 specifies requirements for establishing, implementing, maintaining, and continually improving an ISMS. The standard uses the Plan-Do-Check-Act (PDCA) cycle. Annex A provides a catalogue of 93 controls across 14 domains. Certification requires external audit by an accredited certification body. Surveillance audits occur annually with recertification every three years.

### NIST Frameworks

NIST SP 800-53 provides over 400 security and privacy controls organised into families (Access Control, Identification and Authentication, System and Communications Protection, etc.) for US federal information systems. The NIST Cybersecurity Framework (CSF) consists of five functions: Identify, Protect, Detect, Respond, Recover. The CSF is widely adopted outside government due to its risk-based, outcome-driven approach.

### Security Audits

Audits evaluate control effectiveness through evidence collection. Internal audits are conducted by the organisation's own audit function. External audits are performed by independent third parties. Audit evidence includes policies, procedures, configuration reviews, log analysis, interviews, and technical testing. Findings are classified by severity. Remediation plans specify corrective actions and deadlines. Audit reports are reviewed by management and the board.

### Data Classification

Data classification labels information by sensitivity and criticality. Common categories are Public, Internal, Confidential, and Restricted. Classification determines handling requirements: encryption standards, access controls, retention periods, and disposal methods. Classification decisions are documented in a data inventory or data map.

### Data Protection Controls

Encryption at rest protects stored data through file-level, volume-level, or database-level encryption. Encryption in transit protects data traversing networks via TLS, IPSec, or SSH. Data Loss Prevention (DLP) systems monitor and block unauthorised data transfers. Data masking substitutes sensitive values with realistic but fictional data. Tokenisation replaces sensitive data with non-sensitive tokens. Records management establishes retention schedules and secure disposal methods.

### Breach Notification Laws

All US states have breach notification laws with varying requirements. Most require notification without unreasonable delay following discovery. Some specify timeframes (e.g., 30 days). Notification content includes the nature of the breach, types of data involved, steps taken, and recommendations for affected individuals. GDPR requires notification within 72 hours of becoming aware. Multi-jurisdictional breaches require mapping notification obligations across all applicable laws.

### Privacy by Design

Privacy by Design embeds privacy into system design from inception. The seven foundational principles: proactive not reactive, privacy as default, privacy embedded into design, full functionality (positive-sum), end-to-end security, visibility and transparency, and respect for user privacy.

## Examples

### GDPR Data Subject Access Request

A customer requests access to their personal data. The organisation must respond within one month. Process: verify identity, locate all personal data across systems (CRM, support tickets, analytics), export in machine-readable format, redact third-party data, deliver to the data subject. Complexity arises from data scattered across multiple systems and the challenge of identifying all processing locations.

### PCI-DSS Scope Reduction

Scope reduction minimises the cardholder data environment (CDE). Tokenisation replaces card numbers with tokens, allowing the merchant to process payments without storing sensitive data. Network segmentation isolates the CDE from the corporate network, reducing the number of systems subject to PCI-DSS requirements.

### Data Classification Policy Example

Public: marketing materials, published financial reports. Internal: internal communications, organisational charts. Confidential: customer PII, financial records, source code. Restricted: trade secrets, board materials, merger documents. Each category specifies encryption requirements, access controls, retention period, and disposal method. Training ensures consistent application.

## Summary

Compliance and governance provide the legal and organisational framework for security programmes. Regulations such as GDPR, HIPAA, and PCI-DSS impose mandatory requirements with significant penalties. Frameworks including ISO 27001, SOC 2, and NIST CSF provide structured approaches to control implementation and verification. Data classification and protection controls operationalise security requirements. Breach notification laws create transparency obligations. Privacy by design embeds compliance into the development lifecycle. Security without governance is technically unsound; governance without security is administratively hollow.

## Exercises

### Review Questions

1. Compare the scope and requirements of GDPR and CCPA. How do data subject rights differ between the two?
2. Explain the difference between SOC 2 Type I and Type II reports. Why do most customers require Type II?
3. What is the purpose of PCI-DSS scope reduction? What techniques reduce the cardholder data environment?
4. Describe the five functions of the NIST Cybersecurity Framework. How do they align with the incident response lifecycle?
5. What is data classification and why is it necessary for a data protection programme? What happens if data is improperly classified?

### Application Problems

1. Perform a GDPR compliance gap analysis for a SaaS application handling EU customer data. Assess data inventory completeness, consent mechanisms, data subject request processes, breach notification procedures, and Data Protection Agreement (DPA) status.
2. Complete a PCI-DSS Self-Assessment Questionnaire for a small e-commerce merchant. Determine the applicable SAQ type, assess each requirement, and develop a remediation plan for non-compliant areas.
3. Map five NIST SP 800-53 controls to corresponding ISO 27001 Annex A controls. Identify controls present in one framework but not the other.

### Challenge Problem

Design a compliance programme for a global SaaS company processing data from EU (GDPR), US healthcare (HIPAA), and payment card (PCI-DSS) regulated environments. The programme must include: a unified control framework mapping requirements from all three regimes to common controls; a data inventory and classification scheme; encryption standards for data at rest and in transit; access control policies meeting all regulatory requirements; incident response procedures satisfying GDPR 72-hour notification, HIPAA breach notification, and PCI-DSS incident response requirements; vendor management including DPAs and BAAs; audit preparation procedures; and continuous compliance monitoring through automated controls testing. Justify design decisions with specific regulatory citations.
