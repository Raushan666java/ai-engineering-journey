# CS 410: Comprehensive Cyber Security (Expanded Edition)

**Course Overview:** A comprehensive, end-to-end exploration of modern cyber security spanning 20 chapters. Students will master everything from cryptographic foundations and network defense to advanced red team operations, AI security, blockchain exploits, and zero trust architecture. Each chapter includes production-grade TypeScript implementations, real attack case studies, and hands-on tool setups.

**Prerequisites:** Computer Networks, Operating Systems, Discrete Mathematics.

**Core Text:** Stallings, Lawrie. *Computer Security: Principles and Practice*, Fifth Edition. Pearson, 2022.

---

## Course Philosophy

In an era of ubiquitous connectivity, security is not a feature but a fundamental requirement of system design. This course approaches cyber security through the lens of the CIA triad, emphasizing a multi-layered defense-in-depth strategy. Each chapter combines rigorous theoretical foundations with practical examples, production-grade TypeScript implementations, full tool setup guides, and Mermaid-based architecture diagrams. The expanded edition adds 10 new chapters covering SOC operations, malware analysis, red teaming, IoT/OT security, supply chain, AI security, privacy, blockchain, and zero trust — providing true end-to-end coverage of the modern security landscape.

---

## Chapter List

| # | Title | Topics |
|---|-------|--------|
| 1 | **Security Fundamentals** | CIA triad, AAA, security principles, threat modeling, risk management |
| 2 | **Cryptography** | Symmetric/asymmetric encryption, hashing, digital signatures, PKI, TLS |
| 3 | **Network Security** | Firewall architectures, IDS/IPS, VPNs, protocol security (IPSec, SSH), wireless security |
| 4 | **System & Software Security** | OS hardening, buffer overflows, malware types, secure software development lifecycle |
| 5 | **Web Security** | OWASP Top 10, XSS, SQL injection, CSRF, Secure headers, HTTPS |
| 6 | **Identity & Access Management** | Authentication factors, RBAC, ABAC, OAuth 2.0, OpenID Connect, MFA |
| 7 | **Cloud & Mobile Security** | Virtualization security, Shared Responsibility Model, Mobile OS sandboxing, App permissions |
| 8 | **Forensics & Incident Response** | Digital evidence, chain of custody, memory forensics, incident lifecycle, recovery |
| 9 | **Governance, Risk & Compliance** | Security frameworks (NIST, ISO), GDPR, HIPAA, policy development, auditing |
| 10 | **Ethical Hacking & Pentesting** | Reconnaissance, scanning, exploitation, post-exploitation, reporting |
| 11 | **SOC Operations & Threat Hunting** | SIEM pipeline (ELK+Wazuh), SOAR automation, playbooks, threat hunting, detection engineering, MTTD/MTTR optimization |
| 12 | **Malware Analysis & Reverse Engineering** | Static/dynamic analysis, Ghidra/IDA Pro, packers, YARA rules, memory forensics, Volatility 3 |
| 13 | **Advanced Red Team & C2 Frameworks** | Cobalt Strike, Sliver, Covenant, phishing ops, adversary emulation, evasion, lateral movement, Kerberos attacks |
| 14 | **Wireless, IoT & Embedded Security** | Wi-Fi pentesting, WPA2/3 attacks, BLE/BT, Zigbee/Z-Wave, RFID/NFC, MQTT, firmware analysis |
| 15 | **OT/ICS & SCADA Security** | Purdue model, Modbus/DNP3/S7comm protocols, PLC attacks, Stuxnet/TRITON, OT segmentation, IEC 62443 |
| 16 | **Supply Chain & CI/CD Security** | SBOM (CycloneDX/SPDX), dependency confusion, CI/CD hardening, Cosign/Sigstore, SLSA levels |
| 17 | **AI Security & Adversarial ML** | Adversarial examples (FGSM/PGD), model poisoning, deepfakes, LLM prompt injection, OWASP ML Top 10 |
| 18 | **Digital Privacy, Anonymity & OSINT** | Tor/I2P, VPNs, OPSEC, browser fingerprinting, OSINT frameworks, dark web, metadata stripping |
| 19 | **Blockchain, Smart Contract & DeFi Security** | Reentrancy/DAO hack, flash loans, MEV, cross-chain bridges, HD wallets, consensus attacks, DeFi exploits |
| 20 | **Zero Trust & Enterprise Security Architecture** | NIST SP 800-207, BeyondCorp, SASE, ZTNA, microsegmentation, policy engine, CISA ZT Maturity Model |
| 21 | **Social Media Security & Account Takeover** | Phishing/SIM swap/MFA bypass attacks, credential stuffing, session hijacking, platform forensics, personal defense architecture, IR playbook, SIM swap prevention, password managers |
| 11 | **SOC & Threat Hunting** | SIEM architecture, detection engineering, threat hunting, incident triage |
| 12 | **Malware Analysis** | Static/dynamic analysis, reverse engineering, packing, anti-analysis |
| 13 | **Red Team & C2** | C2 frameworks, staging, EDR evasion, pivoting, covert channels |
| 14 | **Wireless, IoT & Embedded Security** | 802.11 attacks, BLE, Zigbee, JTAG, firmware reversing, SBOM |
| 15 | **OT, ICS & SCADA Security** | Purdue model, PLC exploits, Modbus/DNP3, safety instrumented systems |
| 16 | **Supply Chain & CI/CD Security** | SLSA framework, SBOM, in-toto attestation, Sigstore, pipeline hardening |
| 17 | **AI Security & Adversarial ML** | OWASP ML Top 10, adversarial examples, model poisoning, deepfakes, LLM security |
| 18 | **Digital Privacy, Anonymity & OSINT** | Tor onion routing, I2P garlic routing, VPN protocols, OPSEC, OSINT, dark web, metadata stripping |

---

## How to Read This Textbook

Each chapter follows a consistent structure:

1. **Learning Objectives** — Concrete skills gained in the chapter.
2. **Theory** — In-depth technical explanation of concepts with Mermaid diagrams.
3. **Examples** — Real-world scenarios and TypeScript code-based implementations.
4. **Summary** — Key takeaways for quick review.
5. **Chapter Quiz** — 10 multiple-choice questions to test understanding.
6. **Exercises** — Three-tiered problem sets: Review, Application, and Challenge.

**Progression:** Chapters 1-10 cover core security foundations. Chapters 11-20 dive into advanced domains — SOC operations, malware analysis, red teaming, IoT/OT, supply chain, AI security, privacy/anonymity, blockchain security, and zero trust architecture.

---

## Notation & Common Terms

| Term | Definition |
|------|------------|
| **CVE** | Common Vulnerabilities and Exposures |
| **CVSS** | Common Vulnerability Scoring System |
| **APT** | Advanced Persistent Threat |
| **PoC** | Proof of Concept |
| **Zero-Day** | A vulnerability unknown to the software vendor |
| **Payload** | The part of transmitted data that is the intended message/malicious action |
