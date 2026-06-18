# Chapter 7: Cloud & Mobile Security

> **Prereq:** Chapter 6 (IAM) â€” cloud security extends IAM to cloud provider and mobile device identities.
> **Next:** Chapter 8 (Forensics & IR) â€” incident response in cloud and mobile environments requires specialised processes.

---

## Learning Objectives

- Explain the Shared Responsibility Model in cloud computing.
- Understand the security implications of virtualization and containerization.
- Identify common security threats and vulnerabilities in mobile operating systems (iOS and Android).
- Describe the concepts of Mobile Device Management (MDM) and Mobile Application Management (MAM).
- Discuss the security challenges associated with serverless computing and cloud-native applications.

### Chapter at a Glance

| Section | Key Concept | Why It Matters |
|---------|-------------|----------------|
| Shared Responsibility | CSP vs customer | Know what you must secure |
| Virtualisation | VM escape, hypervisor | Isolation boundaries in cloud |
| Container Security | Image scanning, runtime | Default container security posture |
| Mobile Security | Sandboxing, permissions | iOS vs Android threat models |
| MDM/MAM | Device and app management | BYOD and enterprise mobility |

```mermaid
flowchart LR
    A[Cloud Security] --> B[Shared Responsibility]
    A --> C[Virtualisation]
    A --> D[Containers]
    A --> E[Serverless]
    F[Mobile Security] --> G[OS Sandboxing]
    F --> H[MDM]
    F --> I[App Permissions]
    style A fill:#e1f5fe
    style F fill:#fff3e0
```

---

## Theory

![Cloud & Mobile Security](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/cyber-security/ch07-cloud-mobile.png)

> **One-Sentence Takeaway:** Cloud and mobile security shift the model â€” the shared responsibility model clarifies who secures what, while virtualization, containers, and mobile sandboxing each introduce unique attack surfaces.

### Shared Responsibility Model
In cloud security, responsibility is divided between the Cloud Service Provider (CSP) and the customer.
- **Provider Responsibility (Security *of* the Cloud):** Protecting the underlying infrastructure (hardware, networking, physical facilities).
- **Customer Responsibility (Security *in* the Cloud):** Protecting the data, applications, and operating systems deployed on the infrastructure.
- The boundary varies by service model (IaaS, PaaS, SaaS).

### Virtualization and Container Security
- **Virtual Machines (VMs):** Rely on a hypervisor to isolate multiple guest operating systems. Vulnerabilities in the hypervisor ("VM escape") can compromise all guest systems.
- **Containers (Docker, Kubernetes):** Share the host OS kernel, making them lightweight but potentially less isolated than VMs. Security requires kernel hardening (seccomp, AppArmor) and strict resource limits.
- **Images:** Both VMs and containers rely on images. Securing the "supply chain" by scanning these images for vulnerabilities and secrets is essential.

### Mobile Security
Mobile devices face unique challenges due to their portability and the app ecosystem.
- **OS Security:**
    - **iOS:** Uses mandatory code signing and a very strict "walled garden" approach.
    - **Android:** Relies on process sandboxing and user permissions, but is more open to third-party app stores and customization.
- **App Sandboxing:** Each app runs in its own isolated environment with limited access to the system and other apps.
- **Jailbreaking/Rooting:** Bypassing the built-in security controls of a mobile device, which significantly increases its vulnerability.

### MDM and MAM
- **Mobile Device Management (MDM):** Corporate control over the entire device (e.g., remote wipe, enforcing encryption, disabling cameras).
- **Mobile Application Management (MAM):** Control over specific corporate apps and data on a device, often used for "Bring Your Own Device" (BYOD) scenarios to maintain user privacy.

### Serverless and Cloud-Native Security
- **Serverless (Lambda, Functions):** The CSP manages the execution environment, but the customer is still responsible for secure code and proper IAM permissions.
- **Microservices:** Increases the attack surface due to the high number of inter-service communications, requiring "service mesh" security and mutual TLS (mTLS).

---

## Examples

### Example 1: Shared Responsibility in Action (Amazon S3)
Scenario: A company stores customer database backups in an Amazon S3 bucket.
- **AWS Responsibility:** Ensuring that the physical data centers are secure and that the S3 service is available and resilient.
- **Customer Responsibility:** Configuring the bucket to be private, enabling encryption at rest, and using IAM policies to restrict who can access the backups.
*If the bucket is left public and data is stolen, the responsibility lies with the customer.*

### Example 2: Container Vulnerability Scanning
Using `trivy` to scan a Docker image for known CVEs:
```bash
# Scan a specific Docker image
trivy image nginx:1.18.0
```
*Expected Output:* A list of vulnerable packages found in the image, categorized by severity (High, Critical, etc.), along with the fixed versions.
*Demonstrates the importance of securing the container supply chain.*

---

## Summary

- The Shared Responsibility Model defines the clear boundaries between what the cloud provider protects and what the customer must secure.
- Virtualization and containerization introduce new security layers that require specialized controls (e.g., hypervisor security, image scanning).
- Mobile security relies heavily on OS sandboxing and strict application permissions.
- MDM and MAM are essential tools for organizations managing a mobile workforce and BYOD policies.
- Moving to cloud-native architectures (microservices, serverless) shifts the focus from infrastructure security to application and identity-centric security.

---

## Exercises

### Review Questions
1. In an Infrastructure-as-a-Service (IaaS) model, who is responsible for patching the guest operating system?
2. What is a "VM Escape" attack?
3. Explain the difference between MDM and MAM.
4. Why is "sandboxing" a critical security feature for mobile operating systems?

### Application Problems
1. A company is moving its web application from an on-premises data center to a serverless platform (e.g., AWS Lambda). List three security tasks that they no longer need to perform, and three that they must still address.
2. An employee wants to use their personal Android phone for work email. The company has a strict data protection policy. Propose a solution that protects corporate data while respecting the employee's privacy.
3. You are building a Docker image for a Python application. What steps can you take during the build process to minimize its attack surface?

### Challenge Problem
1. Research the "Side-Channel Attacks" (like Spectre and Meltdown) in the context of cloud computing. Explain how these hardware-level vulnerabilities can be used to bypass the isolation between virtual machines or containers on the same physical host. Discuss the mitigations implemented by cloud providers.

### Concept Comparison

| Layer | IaaS | PaaS | SaaS |
|-------|------|------|------|
| Customer secures | Apps, data, OS, network | Apps, data | Data |
| Provider secures | Virtualisation, hardware | Runtime, OS, hardware | Everything below data |

### Cross-Application Matrix

| Domain | Application | Relevance |
|--------|-------------|-----------|
| Network Security | Cloud security groups, VPC | Cloud networking inherits all network security |
| App Security | Serverless function security | Cloud-native app security model |
| Cloud Security | CSPM, CWPP, CASB | Cloud-specific security tool categories |
| Research | Confidential computing | Hardware-enforced isolation for cloud workloads |

### Chapter Quiz

1. In the Shared Responsibility Model, the customer is always responsible for:
   - A) Physical data center security
   - B) Securing customer data and applications
   - C) Hypervisor security
   - D) Network infrastructure

2. Mobile OS sandboxing means:
   - A) Apps run in a remote sandbox environment
   - B) Each app runs in its own isolated environment
   - C) The OS is sandboxed from the hardware
   - D) All data is encrypted at rest

3. Container escape is a risk because:
   - A) Containers share the host OS kernel
   - B) Containers cannot be patched
   - C) Containers run as root by default
   - D) Container images are always public

<details>
<summary>Answers</summary>
1. B, 2. B, 3. A
</details>
