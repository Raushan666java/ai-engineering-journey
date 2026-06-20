# Security Engineering

## Learning Objectives

After completing this chapter, the student will be able to: explain the principles of the secure development lifecycle; apply threat modelling using STRIDE and attack trees; describe security design patterns; identify the OWASP Top 10 vulnerabilities and their mitigations; implement input validation, authentication, and authorisation; apply cryptography in software; and describe penetration testing methodology.

## Theory

![Security Engineering Overview](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/software-engineering/ch-13-security-engineering.png)

### Security as an Engineering Discipline

Security engineering is the discipline of building systems that remain dependable in the face of malice, error, or mischance. Unlike safety engineering, which addresses accidental failures, security engineering addresses intentional attacks. Security must be engineered into software from the beginning; retrofitting security is significantly more expensive and less effective.

The fundamental security goals are captured by the CIA triad: confidentiality, which ensures that information is not disclosed to unauthorised parties; integrity, which ensures that information is not modified by unauthorised parties; and availability, which ensures that authorised parties can access information when needed. Additional goals include authentication, which verifies the identity of users; authorisation, which controls what authenticated users can do; non-repudiation, which prevents parties from denying their actions; and accountability, which ensures that actions can be traced to responsible parties.

### The Secure Development Lifecycle

The Secure Development Lifecycle (SDL) integrates security activities throughout the software development process. Microsoft's SDL includes: training, where developers learn secure coding practices; requirements, where security requirements are defined; design, where threat modelling is performed; implementation, where security tools are used and secure coding standards are enforced; verification, where security testing and code review are conducted; release, where the final security review is performed; and response, where a security incident response plan is established.

The Building Security In Maturity Model (BSIMM) provides a framework for measuring and improving security practices across organisations.

### Threat Modelling

Threat modelling is a structured approach to identifying and mitigating security threats during design. It answers four questions: what are we building; what can go wrong; what should we do about it; and did we do a good job.

STRIDE is a mnemonic for six categories of security threats developed at Microsoft: Spoofing, where an attacker impersonates a user or system; Tampering, where data is maliciously modified; Repudiation, where an attacker denies performing an action; Information Disclosure, where sensitive data is exposed; Denial of Service, where system availability is compromised; and Elevation of Privilege, where an attacker gains unauthorised access to higher-level functions.

STRIDE is applied by analysing each component of the system against each threat category, typically using a data flow diagram as the analytical basis.

Attack trees model threats hierarchically. The root of the tree represents the attacker's goal. Children represent alternative ways to achieve the goal. Attack trees enable systematic analysis of attack paths and identification of controls that break the tree.

### Security Patterns

Security patterns are reusable solutions to common security problems. Examples include: the Single Access Point pattern, which centralises all authentication through a gatekeeper component; the Check Point pattern, which enforces authorisation at specific boundaries; the Secure Session pattern, which manages authenticated sessions with timeouts and encryption; the Role-Based Access Control pattern, which authorises actions based on role membership; and the Secure Factory pattern, which creates security-relevant objects through validated factories.

### OWASP Top 10

The OWASP Top 10 is a widely referenced list of the most critical web application security risks.

Injection occurs when untrusted data is sent to an interpreter as part of a command or query. SQL injection is the most common form. Mitigations include parameterised queries, input validation, and least privilege for database accounts.

Broken Authentication encompasses vulnerabilities in authentication and session management. Common problems include weak password policies, credential stuffing, session fixation, and exposed session tokens. Mitigations include multi-factor authentication, secure password storage with salted hashing, and secure session management.

Sensitive Data Exposure occurs when sensitive information such as financial data or passwords is inadequately protected. Mitigations include encryption at rest and in transit, secure key management, and minimising the collection of sensitive data.

XML External Entities (XXE) occurs when XML processors process external entity references. Mitigations include disabling external entity processing and using less complex data formats.

Broken Access Control occurs when users can act outside their intended permissions. Mitigations include enforcing access controls on the server side, denying access by default, and implementing strict role-based or attribute-based access control.

Security Misconfiguration is among the most common vulnerabilities. It includes default credentials, unnecessary features, unprotected cloud storage, and overly permissive cross-origin resource sharing. Mitigations include automated configuration scanning and minimal configurations.

Cross-Site Scripting (XSS) occurs when untrusted data is included in web pages without proper validation or escaping. Stored XSS persists in the application; reflected XSS appears in immediate responses; DOM-based XSS occurs in client-side scripts. Mitigations include context-appropriate output encoding and content security policies.

Insecure Deserialisation occurs when application data is deserialised without validation, potentially enabling remote code execution. Mitigations include not deserialising data from untrusted sources and using integrity checks.

Using Components with Known Vulnerabilities is a growing risk as applications incorporate more third-party code. Mitigations include maintaining a software bill of materials, scanning dependencies for vulnerabilities, and promptly updating affected components.

Insufficient Logging and Monitoring enables attackers to maintain persistence and exfiltrate data without detection. Mitigations include logging security-relevant events, monitoring for anomalies, and establishing incident response procedures.

### Input Validation

Input validation is the first line of defence against injection and other input-related attacks. Input validation should be positive (accept known-good input) rather than negative (reject known-bad input). Validation checks include: type checking, which verifies that input matches the expected data type; length checking, which ensures input does not exceed expected limits; range checking, which verifies values fall within acceptable bounds; format checking, which validates against expected patterns using regular expressions; and whitelist validation, which accepts only values from a set of allowed values.

### Authentication and Authorisation

Authentication verifies the identity of a user. Strong authentication requires multiple factors: something you know (password), something you have (token), and something you are (biometric). Password best practices include: minimum length requirements, salted hashing with algorithms such as bcrypt or Argon2, rate limiting on login attempts, and multi-factor authentication support.

Authorisation determines what an authenticated user is permitted to do. Access control models include: Discretionary Access Control (DAC), where owners control access to their resources; Mandatory Access Control (MAC), where system-wide policies control access; Role-Based Access Control (RBAC), where permissions are assigned to roles; and Attribute-Based Access Control (ABAC), where access decisions are based on user attributes, resource attributes, and environment conditions.

### Cryptography in Software

Cryptography provides the technical foundation for confidentiality, integrity, and authentication. Software engineers should use well-vetted cryptographic libraries rather than implementing cryptographic algorithms themselves.

Encryption transforms data with a key such that only parties with the appropriate key can recover the original data. Symmetric encryption uses the same key for encryption and decryption. AES is the standard symmetric algorithm. Asymmetric encryption uses a public-private key pair. RSA and ECC are common asymmetric algorithms.

Hashing produces a fixed-length digest of data. Cryptographic hash functions are one-way and collision-resistant. SHA-256 is widely used. Hashing is used for password storage, data integrity verification, and digital signatures.

Key management is the most challenging aspect of applied cryptography. Keys must be generated securely, stored safely, rotated periodically, and revoked when compromised. Hardware security modules (HSMs) provide tamper-resistant key storage.

### Penetration Testing

Penetration testing simulates real-world attacks to identify security vulnerabilities. Testing methodologies follow a standard process: reconnaissance, where information about the target is gathered; enumeration, where services, protocols, and applications are identified; vulnerability analysis, where potential vulnerabilities are identified; exploitation, where vulnerabilities are exploited to gain access; post-exploitation, where the extent of compromise is assessed; and reporting, where findings are documented with remediation recommendations.

Penetration testing may be internal or external, white-box (with full knowledge of the system) or black-box (with no prior knowledge). Responsible disclosure requires that findings be reported to the system owner before public disclosure.

## Examples

### Case Study: OWASP Top 10 in an E-Commerce Application

A security audit of an e-commerce application found SQL injection in the product search function, broken authentication allowing credential stuffing, and sensitive customer data stored without encryption. The remediation included parameterised queries, rate limiting on login, integration of an OAuth provider, encryption of stored payment data, and a comprehensive input validation framework.

### Template: STRIDE Threat Model for Login Component

| Threat | Description | Mitigation |
|--------|-------------|------------|
| Spoofing | Attacker impersonates legitimate user | Multi-factor authentication |
| Tampering | Attacker modifies login request | TLS, request signing |
| Repudiation | User denies logging in | Audit logging |
| Information Disclosure | Attacker intercepts credentials | TLS, password hashing |
| Denial of Service | Attacker floods login endpoint | Rate limiting, CAPTCHA |
| Elevation of Privilege | Attacker escalates from standard user to admin | Server-side authorisation checks |

### Template: Security Checklist for Code Review

- Is input validated against a whitelist?
- Are queries parameterised?
- Are passwords stored with salted hashing?
- Is TLS enforced for all sensitive communications?
- Are authorisation checks performed on the server side?
- Are session tokens secure (random, HTTP-only, SameSite)?
- Are error messages free of information leakage?
- Are third-party dependencies scanned for vulnerabilities?

## Summary

Security engineering embeds security throughout the software lifecycle. The SDL integrates security into every phase. Threat modelling with STRIDE and attack trees identifies risks systematically. Security patterns provide reusable solutions. The OWASP Top 10 catalogues the most critical web vulnerabilities. Input validation, strong authentication, and server-side authorisation are foundational controls. Cryptography provides confidentiality, integrity, and authentication. Penetration testing validates the effectiveness of security controls.

## Exercises

### Review Questions

1. What are the three goals of the CIA triad?
2. List the phases of the Microsoft SDL.
3. What does the STRIDE acronym represent?
4. How does an attack tree model threats?
5. List five entries from the OWASP Top 10 and their mitigations.
6. Distinguish between positive and negative input validation.
7. What is the difference between authentication and authorisation?
8. Distinguish between symmetric and asymmetric encryption.
9. What is the purpose of a cryptographic hash function as applied to password storage?
10. Describe the phases of a penetration test.

### Application Problems

1. Apply STRIDE threat modelling to a password reset feature. Identify at least one threat in each category and propose a mitigation.
2. A web application accepts user comments and displays them on a public page. Identify the security risks and propose a defence-in-depth approach to mitigate them.
3. Design an authentication architecture for a banking mobile application. Address registration, login, session management, password recovery, and multi-factor authentication.

### Challenge Problem

You are the security architect for a healthcare platform that stores electronic medical records, processes insurance claims, and provides patient portals. The platform must comply with HIPAA regulations. Design a comprehensive security architecture covering: authentication and authorisation; data protection at rest and in transit; network security; application security; incident response; and third-party integration security. For each area, specify the threats you are addressing, the controls you will implement, and how you will verify the effectiveness of the controls. Address the tension between security and usability, particularly for the patient portal. Include a threat model for the most critical use case â€” a physician accessing a patient record.
