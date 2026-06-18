# Chapter 1: Security Fundamentals

> **Prereq:** None â€” this chapter introduces core security concepts.
> **Next:** Chapter 2 (Cryptography & TLS) â€” encryption and PKI build on the CIA triad.

---

## Learning Objectives

- Define the CIA triad and explain the importance of each component.
- Understand the AAA framework (Authentication, Authorization, and Accounting).
- Apply fundamental security principles like Least Privilege and Defense in Depth.
- Perform basic threat modeling using the STRIDE methodology.
- Differentiate between various types of security threats and vulnerabilities.

### Chapter at a Glance

| Section | Key Concept | Why It Matters |
|---------|-------------|----------------|
| CIA Triad | Confidentiality, Integrity, Availability | The three pillars of all security |
| AAA | Authn, Authz, Accounting | Who, what, and when for access |
| STRIDE | Spoofing, Tampering, etc. | Systematic threat identification |
| Least Privilege | Minimal permissions | Reduces blast radius |
| Defense in Depth | Multiple security layers | No single point of failure |

```mermaid
flowchart LR
    A[Security] --> B[CIA Triad]
    A --> C[AAA]
    A --> D[STRIDE]
    A --> E[Principles]
    B --> F[Confidentiality]
    B --> G[Integrity]
    B --> H[Availability]
    E --> I[Least Privilege]
    E --> J[Defense in Depth]
    style A fill:#e1f5fe
    style B fill:#c8e6c9
    style C fill:#fff3e0
    style D fill:#fce4ec
```

---

## Theory

![CIA Triad & STRIDE Threat Model](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/cyber-security/ch01-cia-stride.png)

> **One-Sentence Takeaway:** Security fundamentals rest on the CIA triad and AAA, with STRIDE providing a systematic lens to identify threats and Defense in Depth ensuring no single control bears the full burden.

### The CIA Triad
The core of cyber security is built upon the CIA triad: Confidentiality, Integrity, and Availability.
- **Confidentiality:** Ensuring that sensitive information is only accessible to authorized individuals. This is achieved through encryption, access controls, and data masking.
- **Integrity:** Maintaining the accuracy and consistency of data throughout its lifecycle. It ensures that data has not been altered in an unauthorized manner. Mechanisms include hashing and digital signatures.
- **Availability:** Guaranteeing that systems and data are accessible to authorized users when needed. This involves protecting against hardware failures, software bugs, and Denial-of-Service (DoS) attacks.

### AAA Framework
The AAA framework governs how users and systems interact with resources:
- **Authentication:** Verifying the identity of a user or system (e.g., "Who are you?").
- **Authorization:** Determining what an authenticated user is allowed to do (e.g., "What can you do?").
- **Accounting:** Tracking the actions performed by a user during their session (e.g., "What did you do?").

### Security Principles
Several guiding principles inform secure system design:
- **Least Privilege:** Entities should be granted only the minimum level of access necessary to perform their functions.
- **Defense in Depth:** Implementing multiple layers of security controls so that if one fails, others are in place to provide protection.
- **Economy of Mechanism:** Keeping security designs as simple and small as possible to reduce the attack surface and simplify verification.
- **Fail-Safe Defaults:** Systems should default to a secure state in the event of a failure.

### Threat Modeling (STRIDE)
Threat modeling is a structured approach to identifying security threats. The STRIDE model categorizes threats as:
- **S**poofing: Impersonating something or someone else.
- **T**ampering: Unauthorized modification of data.
- **R**epudiation: Claiming not to have performed an action.
- **I**nformation Disclosure: Unauthorized exposure of data.
- **D**enial of Service: Disrupting legitimate access to resources.
- **E**levation of Privilege: Gaining higher-level permissions than intended.

---

## Examples

### Example 1: Applying Least Privilege
In a corporate environment, a junior accountant should have "Read" and "Write" access to the accounts receivable folder, but should not have access to the payroll folder or administrative rights on their local machine. This limits the potential damage if the account is compromised.

### Example 2: Defense in Depth in a Web Application
A secure web application implementation:
1.  **Network Layer:** A firewall filtering incoming traffic.
2.  **Application Layer:** Strict input validation to prevent SQL injection.
3.  **Data Layer:** Encrypting sensitive user data at rest in the database.
4.  **Operational Layer:** Regular security audits and logging of all administrative actions.

---

## Summary

- The CIA triad (Confidentiality, Integrity, Availability) defines the primary goals of security.
- AAA (Authentication, Authorization, Accounting) provides a framework for managing resource access.
- Secure design relies on principles like Least Privilege, Defense in Depth, and Fail-Safe Defaults.
- STRIDE is a powerful tool for systematic threat identification during the design phase.
- Security is a continuous process of risk management rather than a single technical solution.

---

## Exercises

### Review Questions
1. Explain the difference between Authentication and Authorization.
2. Why is "Availability" considered a security property?
3. What is the primary goal of the "Least Privilege" principle?
4. List the components of the STRIDE model and provide a brief definition for each.

### Application Problems
1. For a small e-commerce website, identify one specific control for each component of the CIA triad.
2. Imagine a scenario where "Fail-Safe Defaults" are not implemented in an electronic door lock. What would be the security implication if the power fails?
3. Perform a basic STRIDE analysis on an automated teller machine (ATM).

### Challenge Problem
1. Propose a multi-layered "Defense in Depth" strategy for a hospital's patient record system. Your strategy must address at least three different STRIDE threat categories and explain how the layers work together.

### Concept Comparison

| Principle | Focus | Example |
|-----------|-------|---------|
| Least Privilege | Minimise permissions | Read-only access for auditors |
| Defense in Depth | Multiple layers | Firewall + IDS + EDR |
| Fail-Safe Defaults | Secure by default | Deny-all firewall rules |
| Separation of Duties | No single control | Two-person signing |

### Cross-Application Matrix

| Domain | Application | Relevance |
|--------|-------------|-----------|
| Network Security | Firewall rules, ACLs | CIA guides all network controls |
| App Security | Input validation, auth | STRIDE for design-phase threat modelling |
| Cloud Security | IAM policies, encryption | Least privilege in cloud IAM |
| Research | Formal verification of security | Proving CIA properties mathematically |

### Chapter Quiz

1. Which STRIDE threat corresponds to an attacker impersonating a user?
   - A) Tampering
   - B) Spoofing
   - C) Repudiation
   - D) Information Disclosure

2. "Defense in Depth" means:
   - A) Using the strongest possible firewall
   - B) Layering multiple independent security controls
   - C) Burying cables underground
   - D) Encrypting all data at rest

3. The "Availability" pillar of CIA ensures:
   - A) Data is only read by authorised users
   - B) Data is correct and unmodified
   - C) Systems are accessible when needed
   - D) Users are authenticated before access

<details>
<summary>Answers</summary>
1. B, 2. B, 3. C
</details>
