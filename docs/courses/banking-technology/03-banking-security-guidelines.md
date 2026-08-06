# Chapter 03: Banking Security Guidelines

## Learning Objectives

By the end of this chapter, you will be able to:

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/banking-technology/03-banking-security-guidelines/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/banking-technology/03-banking-security-guidelines/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/banking-technology/03-banking-security-guidelines/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/banking-technology/03-banking-security-guidelines/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/banking-technology/03-banking-security-guidelines/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/banking-technology/03-banking-security-guidelines/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->

- Explain the RBI cybersecurity framework including the 2020 circular and baseline requirements
- Describe the IT Act 2000 and its amendments relevant to banking
- Understand data protection in banking (DSCI, ISO 27001)
- Analyze Basel III technology implications for banking IT
- Explain SWIFT security (CSP program) and its requirements
- Describe BCP/DR planning for banks
- Understand PCI DSS compliance for card data security
- Analyze 2FA in internet banking and OTP generation infrastructure
- Explain CMS security and e-KYC/Aadhaar authentication architecture

## Theory

### 1. Introduction to Banking Security

Banking security is governed by a multi-layered regulatory framework in India. The primary regulators and their guidelines:

- **RBI:** Cybersecurity framework, BASEL implementation, IT governance
- **SEBI:** Securities market security (for bank treasury operations)
- **IRDAI:** Insurance security (for bancassurance)
- **UIDAI:** Aadhaar authentication security
- **NPCI:** Payment system security (UPI, IMPS, RuPay)
- **DSCI (Data Security Council of India):** Data protection guidelines
- **GOI:** IT Act 2000, National Cyber Security Policy

The banking IT security architecture follows the **Defense-in-Depth** model with multiple layers:

```
+--------------------------------------------+
|  Layer 7: Application Security             |
|  (OAuth, 2FA, Session Management)          |
+--------------------------------------------+
|  Layer 6: Data Security                    |
|  (Encryption at rest/in transit, DLP)      |
+--------------------------------------------+
|  Layer 5: Access Control                   |
|  (RBAC, PIM, SSO, Directory Services)      |
+--------------------------------------------+
|  Layer 4: Network Security                 |
|  (Firewall, IDS/IPS, NAC, VPN, DDoS)       |
+--------------------------------------------+
|  Layer 3: Platform Security                |
|  (OS hardening, Patch Mgmt, AV/EDR)        |
+--------------------------------------------+
|  Layer 2: Physical Security                |
|  (Data Center access, CCTV, Biometrics)    |
+--------------------------------------------+
|  Layer 1: Governance & Compliance          |
|  (ISO 27001, BCMS, ISMS, Audit Trails)     |
+--------------------------------------------+
```

### 2. RBI Cybersecurity Framework

#### 2.1 Baseline Requirements (2016 Circular)

RBI's first comprehensive cybersecurity circular (`RBI/2015-16/425 DBR.CIT.No.19/31.02.003/2015-16`) mandated baseline requirements for all scheduled commercial banks.

**Key Requirements:**

| Area | Requirement |
|------|-------------|
| Board-level IS Steering Committee | Quarterly review of cybersecurity |
| CISO | Designated Chief Information Security Officer |
| Cyber Security Policy | Documented and board-approved |
| IS Audit | Independent audit of IT systems |
| Business Continuity Plan | Annual DR drills |
| Incident Reporting | Report to RBI within 2 hours |
| Vendor Risk Assessment | Security assessment of all vendors |
| Penetration Testing | Annual external + internal pen test |
| User Access Review | Quarterly review of privileged access |

#### 2.2 RBI 2020 Cybersecurity Circular

The June 2020 circular (`RBI/2019-20/170 DOR.CFG.No.2/23.04.01/2019-20`) enhanced requirements significantly.

**Key 2020 Enhancements:**

1. **Advanced Persistent Threat (APT) Defense:**
   - Implement network segmentation (DMZ, internal, sensitive zones)
   - Deploy sandboxing for threat analysis
   - Use deception technology (honeypots/honeynets)
   - Implement cyber threat intelligence (CTI) feeds

2. **Data Leak Prevention (DLP):**
   - Deploy DLP solutions for network, endpoint, and storage
   - Implement UEBA (User Entity Behavior Analytics) tools
   - Monitor PII and sensitive data movement

3. **SOC (Security Operations Center):**
   - 24x7 SOC with SIEM (Security Information and Event Management)
   - SOAR (Security Orchestration Automation Response) for automated incident response
   - Use of MITRE ATT&CK framework for threat analysis

4. **Supply Chain Security:**
   - Pre-engagement assessment of all third-party vendors
   - Continuous monitoring of vendor access
   - Data localization compliance for vendors

5. **Cloud Security:**
   - RBI-approved cloud providers only
   - Data classification before cloud migration
   - Encryption key management in HSM (not in cloud)

#### 2.3 Cyber Crisis Management Plan (CCMP)

Banks must maintain a Cyber Crisis Management Plan covering:

```
Cyber Crisis Lifecycle:
1. Detection: SIEM alerts, SOC analysis, external threat feeds
2. Declaration: CISO declares crisis based on severity
3. Containment: Isolate affected systems, network segregation
4. Eradication: Remove malware, patch vulnerability
5. Recovery: Restore from clean backups, DR site activation
6. Post-mortem: Root cause analysis, lessons learned
```

**Crisis Severity Levels:**

| Level | Description | Response Team | Reporting |
|-------|-------------|---------------|-----------|
| L1 | Low (isolated malware) | IT Team | Internal only |
| L2 | Medium (limited data exposure) | CISO + IT | RBI within 2 hours |
| L3 | High (system compromise) | CISO + CEO | RBI, CERT-IN |
| L4 | Critical (multi-system breach) | Board + CISO | RBI, CERT-IN, NCIIPC |

### 3. IT Act 2000 and Amendments

#### 3.1 The Information Technology Act, 2000

The IT Act 2000 is the primary law dealing with cybercrime and electronic commerce in India. Key sections relevant to banking:

**Section 43:** Penalty for unauthorized access to computer systems
**Section 66:** Computer-related offenses (hacking, identity theft)
**Section 66B:** Receiving stolen computer resources
**Section 66C:** Identity theft (punishment: up to 3 years + Rs. 1 lakh fine)
**Section 66D:** Cheating by impersonation using computer
**Section 66E:** Privacy violation (punishment: up to 3 years + Rs. 2 lakh)
**Section 67:** Publishing obscene material electronically
**Section 67A:** Publishing sexually explicit material
**Section 72:** Breach of confidentiality and privacy
**Section 72A:** Disclosure of personal information without consent

#### 3.2 IT (Amendment) Act, 2008

Key amendments relevant to banking:

- **Section 66A:** Offensive messages through communication service (struck down by SC in 2015 — Shreya Singhal vs. Union of India)
- **Section 69:** Government's power to intercept, monitor, or decrypt information
- **Section 69A:** Blocking of websites (by Department of IT)
- **Section 69B:** Monitor network traffic (computer resource)
- **Section 70B:** CERT-IN designated as the national agency for cyber security incident response
- **Section 79:** Safe harbor for intermediaries (conditional exemption from liability)

**Safe Harbor (Section 79):** Intermediaries (ISPs, payment gateways, banks) are not liable for third-party content if:

```
a) The intermediary provides only access (no content creation)
b) The intermediary exercises "due diligence" (published policy, grievance mechanism)
c) The intermediary removes/takes down upon receiving actual knowledge or government notification
```

#### 3.3 Digital Signature and Electronic Records

**Sections 3-15:** Legal recognition of digital signatures using asymmetric cryptosystem
- Hash function + public/private key pair
- Certifying Authorities (CAs) licensed by Controller of Certifying Authorities (CCA)

**Section 4:** Legal recognition of electronic records
**Section 5:** Legal recognition of electronic signatures
**Section 10A:** Validity of contracts formed through electronic means

### 4. Data Protection in Banking

#### 4.1 DSCI (Data Security Council of India) Guidelines

DSCI provides sector-specific data protection frameworks for banking:

**DSCI Privacy Framework for Banks:**
```
1. Notice: Customers must be informed about data collection
2. Purpose: Data collected only for specific, explicit purposes
3. Consent: Prior consent for data usage
4. Collection Limitation: Minimum necessary data only
5. Access & Correction: Customers can view/update their data
6. Security Safeguards: Technical and organizational measures
7. Data Retention: Not longer than necessary (RBI: 10 years for records)
8. Accountability: Data Protection Officer (DPO) appointment
```

**Specific DSCI Recommendations for Banks:**
- Customer data must be stored in India (data localization as per RBI 2018 circular)
- Payment data (card, bank account) cannot be stored abroad
- Cloud storage allowed only with RBI-approved CSPs
- Implement privacy by design in all digital products

#### 4.2 ISO 27001 in Banking

ISO 27001 is the international standard for Information Security Management System (ISMS).

**ISMS Components for Banks:**
```
ISMS Policy -> Scope Definition -> Risk Assessment
-> Control Selection (Annex A: 114 controls in 14 domains)
-> Implementation -> Monitoring -> Internal Audit -> Certification
```

**Key ISO 27001 Controls for Banks (Annex A):**

| Domain | Key Controls for Banking |
|--------|-------------------------|
| A.5 — Information Security Policies | Board-approved IS policy |
| A.6 — Organization of IS | CISO, IS Steering Committee |
| A.7 — Human Resource Security | Background checks, NDAs |
| A.8 — Asset Management | Asset inventory, classification |
| A.9 — Access Control | RBAC, PAM, MFA |
| A.10 — Cryptography | Key management, encryption policies |
| A.11 — Physical Security | Data center security, CCTV |
| A.12 — Operations Security | Change management, backup, malware protection |
| A.13 — Communications Security | Network security, segregation |
| A.14 — System Acquisition & Dev | SDLC security, secure coding |
| A.15 — Supplier Relationships | Vendor risk assessments |
| A.16 — Incident Management | Incident response, reporting |
| A.17 — Business Continuity | BCP, DR testing |
| A.18 — Compliance | IT Act, RBI guidelines, PCI DSS |

### 5. Basel III Technology Implications

#### 5.1 Overview

Basel III is a global regulatory framework for banks, issued by the Basel Committee on Banking Supervision (BCBS). Technology implications are significant.

**Technology Requirements Under Basel III:**

```
Basel III Pillars:
├── Pillar 1: Minimum Capital Requirements
│   ├── Credit Risk: Data aggregation, risk weighting engines
│   ├── Market Risk: VaR computation, trading systems
│   └── Operational Risk: Loss data collection, AMA systems
├── Pillar 2: Supervisory Review
│   ├── ICAAP (Internal Capital Adequacy Assessment Process)
│   ├── Risk appetite framework (automated dashboards)
│   └── Stress testing models (IT infrastructure for simulation)
└── Pillar 3: Market Discipline
    ├── Disclosure requirements (XBRL-based reporting)
    ├── Pillar 3 reports (automated generation)
    └── Public dashboards
```

**IT Systems Required for Basel III:**

1. **Data Warehouse/Lake for Risk Data:**
   - Risk data aggregation capabilities (BCBS 239)
   - Single source of truth for all risk data
   - Automated reconciliation between systems
   - Data lineage tracking

2. **Credit Risk System:**
   - PD, LGD, EAD calculation engines
   - Risk-weighted asset (RWA) computation
   - Credit risk mitigation tracking
   - Counterparty credit risk (CCR) under SA-CCR

3. **Market Risk System:**
   - FRTB (Fundamental Review of Trading Book) implementation
   - VaR (Value at Risk) / Expected Shortfall computation
   - Backtesting and P&L attribution
   - Real-time position and limit monitoring

4. **Operational Risk System:**
   - Loss event database
   - RCSA (Risk Control Self-Assessment) tools
   - Scenario analysis and stress testing
   - AMA (Advanced Measurement Approach) OR models

5. **Liquidity Risk System:**
   - LCR (Liquidity Coverage Ratio) computation
   - NSFR (Net Stable Funding Ratio) tracking
   - Cash flow forecasting
   - Collateral management

#### 5.2 BCBS 239 — Risk Data Aggregation

BCBS 239 (Principles for Effective Risk Data Aggregation and Risk Reporting) is critical for bank IT:

```
Principle 1: Governance — Risk data architecture must have board/management oversight
Principle 2: Data Architecture — Robust infrastructure across the bank
Principle 3: Accuracy — Data must be accurate; automated reconciliation
Principle 4: Completeness — All material risk data must be included
Principle 5: Timeliness — Data available within regulatory timeframes
Principle 6: Adaptation — System must adapt to changing risk profile
Principle 7: Accuracy of Reports — Reports must be accurate and reviewed
Principle 8: Comprehensiveness of Reports — Cover all risk areas
Principle 9: Clear Reports — Reports must be clear and actionable
Principle 10: Frequency — Reports at frequency appropriate for risk type
Principle 11: Distribution — Reports must reach the right stakeholders
```

### 6. SWIFT Security (CSP Program)

SWIFT (Society for Worldwide Interbank Financial Telecommunication) is the global messaging network for cross-border payments. The Customer Security Programme (CSP) was mandated after the Bangladesh Bank heist (2016).

#### 6.1 SWIFT CSP Mandatory Controls

As of 2023, SWIFT CSP has 21 mandatory controls and 12 advisory controls.

**Mandatory Controls (Key Ones):**

| Control ID | Description | Technical Implementation |
|-----------|-------------|------------------------|
| 1.1 | Restrict internet access + protect critical systems | Air-gapped SWIFT environment |
| 1.2 | Operating system privilege control | Least privilege, admin restriction |
| 1.3 | Virtualization platform protection | Secure hypervisor configuration |
| 1.4 | Restrict physical access | Biometric access + CCTV |
| 1.5 | User/entity authentication for non-repudiation | PKI-based authentication |
| 2.1 | Multi-factor authentication for SWIFT admin | Hardware token + biometric |
| 2.2 | Timely clean-up of user accounts | Quarterly access review |
| 2.3 | Physical and logical segregation | SWIFT network separate from all other networks |
| 2.4 | Detect anomalous activity | SIEM, UEBA on SWIFT logs |
| 2.5 | Transaction business controls | Dual authorization, whitelist validation |
| 2.6 | Request validation | Message format validation, screening |
| 2.7 | Operator segregation | Maker-checker (4-eyes principle) |
| 2.8 | New software validation | Change management, testing |
| 2.9 | Cyber incident response | Incident playbook for SWIFT compromise |
| 2.10 | Security training | Annual SWIFT-specific training |

#### 6.2 SWIFT Security Architecture in Indian Banks

```
+------------------+      +-------------------+
|    SWIFT Network |      |    FIREWALL       |
|    (SIB/Alliance)|      |    (Hardened)     |
+--------+---------+      +---------+---------+
         |                          |
         |  Dedicated Leased Line    |  VPN
         |  (No Internet)            |  (Site-to-Site)
+--------v---------+      +---------v---------+
|   SWIFT HSM      |      |   SWIFT Gateway   |
|   (Key Mgmt)     |      |   (Alliance)      |
+--------+---------+      +---------+---------+
         |                          |
+--------v--------------------------v---------+
|              SWIFT Interface                 |
|         (Dual Control Required)             |
+-----------------------+---------------------+
                        |
            +-----------v-----------+
            |    CBS Integration    |
            |    (MT103 / MT202)    |
            +-----------------------+            
```

**Key Security Requirements:**
- SWIFT infrastructure must be logically and physically segregated
- No internet connectivity to SWIFT systems
- Dual control for all SWIFT operations
- Transaction whitelist (only pre-approved counterparties)
- Daily reconciliation of SWIFT messages with CBS entries

### 7. BCP/DR for Banks

#### 7.1 Regulatory Requirements

RBI mandates that all banks maintain a Business Continuity Plan (BCP) and Disaster Recovery (DR) setup.

**Key RBI Directives on BCP/DR:**

| Requirement | Specification |
|-------------|---------------|
| DR Site Location | Minimum 300 km from primary site (different seismic zone) |
| Synchronization | Real-time/synchronous for critical systems (RPO: &lt; 15 minutes) |
| RTO (Recovery Time Objective) | Critical systems: &lt; 2-4 hours |
| RPO (Recovery Point Objective) | Critical systems: &lt; 15 minutes |
| DR Testing | Minimum once per year (full simulated failover) |
| Alternate Channel DR | Internet Banking, ATM switch, UPI — independent DR |
| Live Data Testing | Actual customer data used in DR test (with safeguards) |

#### 7.2 Bank DR Architecture

```
Primary Data Center (PDC)                 Disaster Recovery (DR)
+---------------------------+              +---------------------------+
| Active CBS Cluster       |              | Passive CBS Cluster       |
| Oracle RAC + Application |              | Oracle DataGuard + App    |
+---------------------------+              +---------------------------+
         |   Synchronous Replication               |
         +--- (Fiber Channel / DWDM) -------------+
         |   OR Async (IP-based, &gt; 300 km)         |
+---------------------------+              +---------------------------+
| Active ATM Switch         |              | Standby ATM Switch        |
+---------------------------+              +---------------------------+
         |   Active-Active for UPI                    |
         +-------------------------------------------+
```

**DR Architecture Types in Banks:**

| Type | Description | RPO | RTO | Cost |
|------|-------------|-----|-----|------|
| Active-Active | Both sites serve traffic | zero | minutes | Very High |
| Active-Passive | DR on standby, sync replication | &lt; 15 min | 2-4 hrs | High |
| Active-Standby | DR, async replication | &lt; 1 hr | 4-8 hrs | Medium |
| Warm Standby | DR with partial sync | 4-24 hrs | 24-48 hrs | Low |
| Cold Standby | DR with backup restore | 24+ hrs | 48+ hrs | Minimal |

#### 7.3 RBI Mandated DR Testing

```
DR Test Phases (as per RBI):
├── Phase 1: Table-top exercise (quarterly)
│   ├── Review BCP documentation
│   └── Simulate crisis scenarios
├── Phase 2: Technical DR test (half-yearly)
│   ├── Failover application servers
│   └── Verify data synchronization
├── Phase 3: Full business DR test (annual)
│   ├── Actual failover of production CBS
│   ├── Business operations from DR
│   └── Customer-facing channels tested
└── Phase 4: Independent audit (annual)
    ├── External auditor reviews DR setup
    └── Compliance report to RBI
```

### 8. PCI DSS for Card Data

#### 8.1 PCI DSS Overview

Payment Card Industry Data Security Standard (PCI DSS) applies to all entities that store, process, or transmit cardholder data. Currently version 4.0 (effective March 2024, with v3.2.1 retired).

**PCI DSS 12 Requirements (6 Goals):**

```
Goal 1: Build and Maintain a Secure Network
├── Req 1: Install and maintain firewalls
└── Req 2: Change vendor defaults (passwords, configs)

Goal 2: Protect Cardholder Data
├── Req 3: Protect stored cardholder data
└── Req 4: Encrypt transmission of cardholder data

Goal 3: Maintain Vulnerability Management
├── Req 5: Use anti-malware solutions
└── Req 6: Develop and maintain secure systems

Goal 4: Implement Strong Access Control
├── Req 7: Restrict access to cardholder data
├── Req 8: Identify and authenticate system users
└── Req 9: Restrict physical access

Goal 5: Monitor and Test Networks
├── Req 10: Track and monitor all access
└── Req 11: Test security systems regularly

Goal 6: Maintain Information Security Policy
└── Req 12: Maintain policy for information security
```

#### 8.2 Card Data Storage Requirements

PCI DSS strictly limits storage of card data:

**Permitted Storage (must be protected):**
- Cardholder Name (primary account holder)
- PAN (Primary Account Number) — must be rendered unreadable (tokenized, truncated, hashed, or encrypted)
- Expiration Date

**NEVER Store (prohibited — even if encrypted):**
- Full Track Data (Track 1 and Track 2)
- CVV/CVC (card verification code)
- PIN or PIN Block

**Encryption Requirements:**
- PAN must be encrypted at rest (AES-256) and in transit (TLS 1.2+)
- Encryption keys must be stored in HSM or equivalent
- Key rotation: at least annually

#### 8.3 Tokenization per PCI DSS

As per PCI DSS v4.0, tokenization is recommended to reduce scope:

```
Tokenization Reduces PCI DSS Scope:
├── Token replaces PAN in merchant systems
├── Merchant/PSP only stores token (not in PCI scope)
├── Token stored in merchant database = out of scope
├── Actual PAN stored only at token vault
│   (Token vault is in PCI scope but isolated)
└── Network(s) between token vault and PAN storage must be segmented
```

### 9. 2FA in Internet Banking

#### 9.1 RBI's Two-Factor Authentication Mandate

RBI mandated two-factor authentication (2FA) for all internet banking transactions from 2006.

**Authentication Factors:**
```
Factor 1: Something you KNOW
├── Password / PIN
├── Security questions
└── Transaction password

Factor 2: Something you HAVE
├── OTP on registered mobile/SMS
├── Hardware token (RSA SecurID, Yubico)
├── Software token (authenticator app)
└── Smart card (rare in retail banking)

Factor 3: Something you ARE (biometric)
├── Fingerprint
├── Iris scan
└── Facial recognition
```

**RBI Mandated Levels:**

| Transaction Type | Authentication Required |
|-----------------|------------------------|
| Login (view only) | Single factor (password) |
| View beneficiary list | Single factor (password) |
| Add beneficiary | Two-factor (password + OTP/token) |
| Fund transfer (within bank, own accounts) | Single factor OR 2FA (bank policy) |
| Fund transfer (third-party, &lt; Rs. 5,000) | Two-factor (password + OTP/sms) |
| Fund transfer (third-party, &gt; Rs. 5,000) | Two-factor + transaction signing |
| Card not present (e-commerce) | 3D Secure (OTP-based) |
| Card present (POS/ATM) | Offline/Online PIN + chip |

#### 9.2 OTP Generation Infrastructure

```
+------------------+     +------------------+
| OTP Request      |     | OTP Validation   |
| (from CBS/App)   |     | (from CBS/App)   |
+--------+---------+     +--------+---------+
         |                        |
+--------v------------------------v--------+
|           OTP Management System         |
|  (On-premise or HSM-integrated)         |
+----+-------------------+----------------+
     |                   |
+----v----+       +------v------+
| OTP     |       | OTP Channel |
| Engine  |       | Gateway     |
| (HSM)   |       +------+------+
+----+----+              |
     |              +-----+-----+-----+
     |              |     |     |     |
     |           SMS   Voice  App  Email
     |           GW    GW     Push
+----v------------+
| HSM             |
| (OTP master key)|
| OTP =            |
| HMAC-SHA1/      |
| HOTP/TOTP       |
+-----------------+
```

**OTP Generation Algorithm (HOTP / TOTP):**

```
HOTP (HMAC-based One-Time Password):
  OTP = Truncate(HMAC-SHA1(K, C))
  where K = Secret Key (stored in HSM)
  and C = Moving Factor (event counter, incremented each time)

TOTP (Time-based OTP):
  OTP = Truncate(HMAC-SHA1(K, T))
  where T = floor(Current Unix Time / Time Step)
  Time Step = 30 seconds (standard)
```

**OTP Delivery Channels:**
- **SMS:** Most common; sent through SMS gateways (aggregators)
- **Voice:** IVR call for visually impaired users / feature phones
- **App Push:** In-app notification (faster, cheaper than SMS)
- **Email:** Secondary channel; less secure

### 10. CMS (Cash Management System) Security

#### 10.1 CMS Overview

Cash Management System (CMS) handles cash logistics for banks — CIT (Cash-In-Transit), ATM cash replenishment, cash vaults, and currency verification.

**CMS Architecture:**

```
+------------------+     +------------------+
| Bank CBS         |     | CIT Vendor       |
| (Account Mgmt)   |     | (Cash Logistics) |
+--------+---------+     +--------+---------+
         |                        |
+--------v------------------------v--------+
|           CMS Application                |
|  (Cash forecasting, ATM scheduling,      |
|   Vault management, Reconciliation)       |
+----+-----------+-----------+------------+
     |           |           |
+----v---+ +-----v----+ +---v------+
| ATM     | | Bank     | | Vendor  |
| Module  | | Vault    | | Module  |
+---------+ +----------+ +---------+
```

#### 10.2 CMS Security Controls

| Control | Description |
|---------|-------------|
| User Authentication | Biometric (fingerprint) + smart card for cash handlers |
| Dual Control | Two persons required for vault access |
| GPS Tracking | Real-time GPS on cash vans, geo-fencing |
| Tamper Detection | ATM cassettes with tamper sensors |
| e-KYC Verification | Cash handlers verified through Aadhaar |
| Automated Reconciliation | CBS integration for real-time cash balance |
| Trip Management | Pre-defined routes, no deviations allowed |
| Cash-in-Transit Tracking | Real-time visibility of cash movement |
| Dynamic QR Codes | For cash pick-up authorization |

### 11. e-KYC and Aadhaar Authentication

#### 11.1 Aadhaar Authentication Architecture

Aadhaar authentication is the process by which Aadhaar number + biometric/demographic data is verified against UIDAI's centralized database.

```
+------------------+     +------------------+
| Bank (AUA)       |     | Customer         |
| Aadhaar-         |     | (Aadhaar Number  |
| Enabled System   |     | + Biometric/OTP) |
+--------+---------+     +--------+---------+
         |                        |
         | 1. Authentication       |
         | Request (Aadhaar +      |
         | Biometric/OTP + PID)    |
+--------v------------------------v--------+
|           UIDAI's Authentication         |
|           Gateway (ASA)                  |
|                                          |
|   2. KUA receives, validates, and        |
|      routes to CIDR (Central Identities  |
|      Data Repository)                    |
+------------------+----------------------+
                   |
            +------v------+
            |   CIDR      |
            | (Aadhaar DB)|
            | 3. Match    |
            | Yes/No      |
            +------+------+
                   |
+------------------v----------------------+
|   4. Response (yes/no) + e-KYC data     |
|      (if requested, with consent)       |
+-----------------------------------------+
```

**Key Terms:**

| Acronym | Full Form | Role |
|---------|-----------|------|
| AUA | Authentication User Agency | Bank using Aadhaar auth |
| KUA | KYC User Agency | Bank using Aadhaar e-KYC |
| ASA | Authentication Service Agency | Routing agency (e.g., NPCI) |
| CIDR | Central Identities Data Repository | UIDAI's Aadhaar database |
| PID | Personal Identity Data | Biometric + demographic + OTP |

#### 11.2 Digital e-KYC Flow

**Aadhaar e-KYC (XML-based):**

```
Step 1: Customer provides consent + Aadhaar number
Step 2: Customer authenticates via:
        ├── Biometric (fingerprint at branch/micro-ATM)
        ├── OTP on registered mobile (for non-face-to-face)
        └── Iris (for specialized use cases)
Step 3: Bank (KUA) sends request to UIDAI
Step 4: UIDAI returns XML response with:
        ├── Name
        ├── DOB (Year/Date of Birth)
        ├── Gender
        ├── Address
        └── Photo (base64 encoded)
Step 5: Bank records in CBS as valid KYC
```

**Offline e-KYC (XML/Paper):**

Introduced for privacy — the customer downloads digitally signed XML from UIDAI website and shares with bank. No UIDAI server transaction at the time of KYC.

```
Offline e-KYC:
├── Signed XML (Aadhaar-issued, digitally signed by UIDAI)
├── ZIP file (password-protected, password = last 4 digits + PIN)
├── Tamper-evident (digital signature verification)
└── Valid for: 6 months from download
```

#### 11.3 Aadhaar Authentication Security

```
Security Architecture:
├── Transport Security: TLS 1.2+ (end-to-end)
├── Payload Encryption: XML encrypted with UIDAI public key
├── Session Key: Each request has unique session key
├── Timestamp: All requests timestamped (anti-replay)
├── Licence Key: AUA-specific encryption key (rotated periodically)
├── Biometric Data: Encrypted at device level (PID block)
│   ├── PID block encrypted using UIDAI public key
│   └── Biometric never stored at AUA
└── Logging: All auth attempts logged, reported to UIDAI
```

### 12. Architecture Diagrams

#### Bank Security Layered Architecture

```mermaid
graph TB
    subgraph Perimeter
        FW[Firewall]
        WAF[WAF]
        DDoS[DDoS Protection]
    end
    
    subgraph DMZ
        LB[Load Balancer]
        IB[Internet Banking Server]
        MB[Mobile Backend]
    end
    
    subgraph Core
        CBS[CBS Server]
        DB[Database<br/>Oracle RAC]
        HSM[HSM Cluster]
    end
    
    subgraph Security
        SOC[SOC / SIEM]
        DLP[DLP System]
        EDR[EDR / AV]
        IDS[IDS / IPS]
        
        subgraph Auth
            OTP[OTP Server]
            BIO[Biometric Auth]
            PKI[PKI / CA]
        end
    end
    
    subgraph Interbank
        NFS[NPCI NFS]
        SWIFT[SWIFT Gateway]
        RTGS[RTGS Gateway]
    end
    
    subgraph DR
        DRC[DR Site<br/>300+ km]
        DRDB[DR Database<br/>DataGuard]
    end
    
    FW --> WAF
    WAF --> DDoS
    DDoS --> LB
    LB --> IB
    LB --> MB
    LB --> CBS
    IB --> OTP
    MB --> OTP
    CBS --> DB
    CBS --> HSM
    CBS --> DRC
    DB -.-> DRDB
    SOC --> FW
    SOC --> IDS
    SOC --> EDR
    SOC --> DLP
    CBS --> SWIFT
    CBS --> NFS
    CBS --> RTGS
```

## Examples (Exam-Style MCQs)

**Example 1:**
As per RBI's cybersecurity framework, what is the maximum time allowed for a bank to report a cybersecurity incident to RBI?

A) 6 hours
B) 2 hours
C) 24 hours
D) 1 hour

<details>
<summary>Answer</summary>
**Answer: B) 2 hours**

As per RBI guidelines, cybersecurity incidents must be reported to RBI within 2 hours of detection. This was enhanced in the 2020 circular.
</details>

**Example 2:**
Which section of the IT Act 2000 deals with punishment for identity theft?

A) Section 66
B) Section 66B
C) Section 66C
D) Section 72

<details>
<summary>Answer</summary>
**Answer: C) Section 66C**

Section 66C specifically deals with identity theft (punishment: up to 3 years + Rs. 1 lakh fine). Section 66 covers computer-related offenses, 66B covers receiving stolen resources, and 72 covers breach of confidentiality.
</details>

**Example 3:**
Under PCI DSS, which of the following card data is NEVER allowed to be stored?

A) Cardholder Name
B) Primary Account Number (encrypted)
C) CVV/CVC
D) Expiration Date

<details>
<summary>Answer</summary>
**Answer: C) CVV/CVC**

CVV/CVC must NEVER be stored even if encrypted. Cardholder name, PAN (encrypted), and expiration date may be stored with appropriate protection. Full track data and PIN are also prohibited from storage.
</details>

**Example 4:**
What is the recommended minimum distance between a bank's primary data center and DR site as per RBI?

A) 100 km
B) 200 km
C) 300 km
D) 500 km

<details>
<summary>Answer</summary>
**Answer: C) 300 km**

RBI mandates minimum 300 km distance between primary and DR sites, and they must be in different seismic zones to ensure that a natural disaster does not affect both sites simultaneously.
</details>

**Example 5:**
In the HOTP algorithm used for OTP generation, what does the moving factor "C" represent?

A) Current system time
B) Event counter (incremented on each use)
C) Challenge from server
D) Customer account number

<details>
<summary>Answer</summary>
**Answer: B) Event counter**

HOTP uses an event counter that increments on each OTP generation. TOTP (time-based variant) uses time instead of counter. HOTP = Truncate(HMAC-SHA1(K, C)).
</details>

### 13. TypeScript Code Examples

#### 13.1 Security Audit Simulation

```typescript
interface SecurityAuditEvent {
  eventId: string;
  timestamp: Date;
  eventType: 'LOGIN' | 'LOGOUT' | 'TRANSACTION' | 'ADMIN_ACTION' | 'PASSWORD_CHANGE' | 'ACCESS_DENIED';
  userId: string;
  ipAddress: string;
  sessionId: string;
  riskScore: number;
  details: string;
}

interface ComplianceCheckResult {
  checkName: string;
  passed: boolean;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  details: string;
  recommendation: string;
}

class SecurityAuditor {
  private auditLog: SecurityAuditEvent[] = [];
  private suspiciousPatterns: Map&lt;string, number&gt; = new Map();

  logEvent(event: Omit&lt;SecurityAuditEvent, 'eventId' | 'riskScore'&gt;): SecurityAuditEvent {
    const auditEvent: SecurityAuditEvent = {
      ...event,
      eventId: `AUD${Date.now()}${Math.random().toString(36).substring(2, 8)}`,
      riskScore: this.calculateRiskScore(event),
    };
    this.auditLog.push(auditEvent);
    this.detectAnomalies(auditEvent);
    return auditEvent;
  }

  private calculateRiskScore(event: Omit&lt;SecurityAuditEvent, 'eventId' | 'riskScore'&gt;): number {
    let score = 0;
    if (event.eventType === 'ACCESS_DENIED') { score += 30; }
    if (event.eventType === 'ADMIN_ACTION') { score += 20; }
    if (event.eventType === 'PASSWORD_CHANGE') { score += 15; }
    const recentCount = this.auditLog.filter(e =>
      e.userId === event.userId &&
      e.timestamp > new Date(Date.now() - 5 * 60 * 1000)
    ).length;
    if (recentCount > 10) { score += 25; }
    return Math.min(score, 100);
  }

  private detectAnomalies(event: SecurityAuditEvent): void {
    const key = `${event.userId}:${event.ipAddress}`;
    const count = (this.suspiciousPatterns.get(key) || 0) + 1;
    this.suspiciousPatterns.set(key, count);
    if (event.eventType === 'ACCESS_DENIED' && count >= 5) {
      console.log(`[ALERT] Brute force detected - User: ${event.userId}, IP: ${event.ipAddress}`);
    }
    if (event.riskScore > 70) {
      console.log(`[ALERT] High risk event: ${event.eventType} for user ${event.userId} (Score: ${event.riskScore})`);
    }
  }

  getEventsByUser(userId: string): SecurityAuditEvent[] {
    return this.auditLog.filter(e => e.userId === userId);
  }

  getHighRiskEvents(threshold: number = 50): SecurityAuditEvent[] {
    return this.auditLog.filter(e => e.riskScore >= threshold);
  }

  generateReport(): object {
    return {
      totalEvents: this.auditLog.length,
      highRiskCount: this.getHighRiskEvents().length,
      uniqueUsers: new Set(this.auditLog.map(e => e.userId)).size,
      suspiciousIPs: Array.from(this.suspiciousPatterns.entries())
        .filter(([_, count]) => count >= 10)
        .map(([ip, count]) => ({ ip, count })),
    };
  }
}

// Usage
const auditor = new SecurityAuditor();
auditor.logEvent({
  timestamp: new Date(), eventType: 'LOGIN', userId: 'U001',
  ipAddress: '192.168.1.100', sessionId: 'SES123', details: 'Login from Mumbai branch'
});
auditor.logEvent({
  timestamp: new Date(), eventType: 'ACCESS_DENIED', userId: 'U001',
  ipAddress: '10.0.0.50', sessionId: 'SES124', details: 'Invalid password attempt 1'
});
console.log('Audit Report:', JSON.stringify(auditor.generateReport(), null, 2));
```

#### 13.2 RBI Compliance Checker

```typescript
interface RBIComplianceRule {
  ruleId: string;
  category: 'CYBERSECURITY' | 'BCP_DR' | 'DATA_PROTECTION' | 'PAYMENT_SYSTEM' | 'KYC' | 'IT_GOVERNANCE';
  description: string;
  requirement: string;
  checkFunction: () =&gt; ComplianceCheckResult;
}

interface BankComplianceProfile {
  bankName: string;
  bankCode: string;
  hasCISO: boolean;
  hasSOC: boolean;
  hasDLP: boolean;
  hasHSM: boolean;
  drSiteDistanceKm: number;
  lastDRTestDate: Date | null;
  swiftCSPCompliant: boolean;
  pciDSSVersion: string;
  lastPenTestDate: Date | null;
  incidentReportedWithin2Hours: boolean;
  iso27001Certified: boolean;
  dataLocalizationCompliant: boolean;
}

class RBIComplianceEngine {
  private rules: RBIComplianceRule[] = [];
  private profile: BankComplianceProfile;

  constructor(profile: BankComplianceProfile) {
    this.profile = profile;
    this.registerRules();
  }

  private registerRules(): void {
    this.rules.push({
      ruleId: 'RBI-CS-001', category: 'CYBERSECURITY',
      description: 'CISO Appointment',
      requirement: 'Bank must have a designated CISO at board level',
      checkFunction: () =&gt; ({
        checkName: 'CISO Appointment',
        passed: this.profile.hasCISO,
        severity: 'CRITICAL',
        details: `CISO appointed: ${this.profile.hasCISO}`,
        recommendation: 'Appoint a CISO reporting directly to the board',
      }),
    });

    this.rules.push({
      ruleId: 'RBI-CS-002', category: 'CYBERSECURITY',
      description: '24x7 SOC with SIEM',
      requirement: 'Bank must operate a 24x7 SOC with SIEM and SOAR',
      checkFunction: () =&gt; ({
        checkName: 'SOC Operations',
        passed: this.profile.hasSOC,
        severity: 'CRITICAL',
        details: `SOC operational: ${this.profile.hasSOC}`,
        recommendation: this.profile.hasSOC ? 'None' : 'Set up 24x7 SOC with SIEM and SOAR',
      }),
    });

    this.rules.push({
      ruleId: 'RBI-BCP-001', category: 'BCP_DR',
      description: 'DR Site Distance',
      requirement: 'DR site must be at least 300 km from primary site',
      checkFunction: () =&gt; ({
        checkName: 'DR Site Distance',
        passed: this.profile.drSiteDistanceKm >= 300,
        severity: 'HIGH',
        details: `DR distance: ${this.profile.drSiteDistanceKm} km`,
        recommendation: this.profile.drSiteDistanceKm >= 300 ? 'None' : 'Establish DR site at minimum 300 km distance',
      }),
    });

    this.rules.push({
      ruleId: 'RBI-DP-001', category: 'DATA_PROTECTION',
      description: 'Data Localization',
      requirement: 'Payment data must be stored only in India',
      checkFunction: () =&gt; ({
        checkName: 'Data Localization',
        passed: this.profile.dataLocalizationCompliant,
        severity: 'CRITICAL',
        details: `Localization compliant: ${this.profile.dataLocalizationCompliant}`,
        recommendation: 'Ensure all payment data resides on servers within India',
      }),
    });

    this.rules.push({
      ruleId: 'RBI-SWIFT-001', category: 'PAYMENT_SYSTEM',
      description: 'SWIFT CSP Compliance',
      requirement: 'Bank must comply with SWIFT CSP mandatory controls',
      checkFunction: () =&gt; ({
        checkName: 'SWIFT CSP Compliance',
        passed: this.profile.swiftCSPCompliant,
        severity: 'CRITICAL',
        details: `SWIFT CSP compliant: ${this.profile.swiftCSPCompliant}`,
        recommendation: 'Implement air-gapped SWIFT, dual control, and transaction whitelisting',
      }),
    });

    this.rules.push({
      ruleId: 'RBI-INC-001', category: 'IT_GOVERNANCE',
      description: 'Incident Reporting Timeline',
      requirement: 'Cybersecurity incidents must be reported to RBI within 2 hours',
      checkFunction: () =&gt; ({
        checkName: 'Incident Reporting',
        passed: this.profile.incidentReportedWithin2Hours,
        severity: 'HIGH',
        details: `Reporting compliance: ${this.profile.incidentReportedWithin2Hours}`,
        recommendation: 'Implement automated incident reporting to RBI via SIMS portal',
      }),
    });
  }

  runAllChecks(): ComplianceCheckResult[] {
    return this.rules.map(r =&gt; r.checkFunction());
  }

  getFailedChecks(): ComplianceCheckResult[] {
    return this.runAllChecks().filter(c =&gt; !c.passed);
  }

  getComplianceScore(): number {
    const results = this.runAllChecks();
    const passed = results.filter(r =&gt; r.passed).length;
    return Math.round((passed / results.length) * 100);
  }
}

// Usage
const sbiProfile: BankComplianceProfile = {
  bankName: 'State Bank of India', bankCode: 'SBIN',
  hasCISO: true, hasSOC: true, hasDLP: true, hasHSM: true,
  drSiteDistanceKm: 1200, lastDRTestDate: new Date('2026-06-15'),
  swiftCSPCompliant: true, pciDSSVersion: '4.0',
  lastPenTestDate: new Date('2026-05-01'), incidentReportedWithin2Hours: true,
  iso27001Certified: true, dataLocalizationCompliant: true,
};
const compliance = new RBIComplianceEngine(sbiProfile);
console.log('Compliance Score:', compliance.getComplianceScore() + '%');
const failed = compliance.getFailedChecks();
if (failed.length > 0) {
  console.log('Failed checks:', failed.map(f =&gt; f.checkName));
} else {
  console.log('All checks passed');
}
```

#### 13.3 OTP Generation and Validation with HSM Simulation

```typescript
interface OTPRecord {
  hash: string;
  createdAt: Date;
  expiresAt: Date;
  validated: boolean;
  attempts: number;
  channel: 'SMS' | 'VOICE' | 'APP' | 'EMAIL';
}

class OTPManager {
  private otpStore: Map&lt;string, OTPRecord&gt; = new Map();
  private readonly OTP_LENGTH: number = 6;
  private readonly OTP_VALIDITY_SECONDS: number = 300;
  private readonly MAX_ATTEMPTS: number = 3;
  private readonly HSM_MASTER_KEY: string = 'hsm-master-key-2026';

  private generateHOTP(counter: number): string {
    const data = this.HSM_MASTER_KEY + counter;
    let hash = 0;
    for (let i = 0; i &lt; data.length; i++) {
      hash = ((hash &lt;&lt; 5) - hash) + data.charCodeAt(i);
      hash = hash & hash;
    }
    const truncated = Math.abs(hash) % 1000000;
    return String(truncated).padStart(this.OTP_LENGTH, '0');
  }

  private generateTOTP(): string {
    const timeStep = Math.floor(Date.now() / 1000 / 30);
    return this.generateHOTP(timeStep);
  }

  generateOTP(identifier: string, channel: OTPRecord['channel']): string {
    const otp = this.generateTOTP();
    const hash = this.hashOTP(otp, identifier);
    this.otpStore.set(identifier, {
      hash,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + this.OTP_VALIDITY_SECONDS * 1000),
      validated: false,
      attempts: 0,
      channel,
    });
    console.log(`[HSM] OTP generated for ${identifier} via ${channel}`);
    return otp;
  }

  private hashOTP(otp: string, identifier: string): string {
    let hash = this.HSM_MASTER_KEY + otp + identifier;
    for (let i = 0; i &lt; 1000; i++) {
      let h = 0;
      for (let j = 0; j &lt; hash.length; j++) {
        h = ((h &lt;&lt; 5) - h) + hash.charCodeAt(j);
        h = h & h;
      }
      hash = Math.abs(h).toString(36);
    }
    return hash;
  }

  validateOTP(identifier: string, enteredOTP: string): boolean {
    const record = this.otpStore.get(identifier);
    if (!record) { throw new Error('OTP not generated for this identifier'); }
    if (record.validated) { throw new Error('OTP already used'); }
    if (new Date() > record.expiresAt) { throw new Error('OTP expired'); }
    record.attempts++;
    if (record.attempts > this.MAX_ATTEMPTS) {
      this.otpStore.delete(identifier);
      throw new Error('Max OTP attempts exceeded');
    }
    const expectedHash = this.hashOTP(enteredOTP, identifier);
    if (expectedHash === record.hash) {
      record.validated = true;
      console.log(`[HSM] OTP validated for ${identifier}`);
      return true;
    }
    console.log(`[HSM] OTP failed for ${identifier} (${record.attempts}/${this.MAX_ATTEMPTS})`);
    return false;
  }
}

// Usage
const otpManager = new OTPManager();
const otp = otpManager.generateOTP('ram@sbi', 'SMS');
console.log('OTP sent:', otp);
const isValid = otpManager.validateOTP('ram@sbi', otp);
console.log('OTP Valid:', isValid);
```

#### 13.4 PCI DSS Compliance Checker

```typescript
interface CardDataStorage {
  pan: string;
  panEncrypted: boolean;
  panTokenized: boolean;
  cardholderName: string;
  expiryDate: string;
  cvv: string | null;
  trackData: string | null;
  pin: string | null;
}

interface PCIRequirement {
  id: string;
  goal: number;
  requirement: string;
  passed: boolean;
  details: string;
}

class PCIDSSComplianceChecker {
  checkCardDataStorage(data: CardDataStorage): PCIRequirement[] {
    const results: PCIRequirement[] = [];
    results.push({
      id: 'PCI-REQ-3.1', goal: 2,
      requirement: 'PAN must be encrypted at rest',
      passed: data.panEncrypted || data.panTokenized,
      details: data.panEncrypted ? 'PAN encrypted' : data.panTokenized ? 'PAN tokenized' : 'PAN in clear - VIOLATION',
    });
    results.push({
      id: 'PCI-REQ-3.2', goal: 2,
      requirement: 'Do not store sensitive auth data after auth',
      passed: !data.cvv && !data.trackData && !data.pin,
      details: data.cvv ? 'CVV stored - PROHIBITED' : data.trackData ? 'Track data stored - PROHIBITED' : data.pin ? 'PIN stored - PROHIBITED' : 'No prohibited data stored',
    });
    results.push({
      id: 'PCI-REQ-3.3', goal: 2,
      requirement: 'Mask PAN when displayed (first 6, last 4)',
      passed: !data.pan || data.pan.length === 0,
      details: `Display: ${data.pan ? data.pan.substring(0,6) + 'XXXXXX' + data.pan.substring(data.pan.length-4) : 'None'}`,
    });
    results.push({
      id: 'PCI-REQ-4.1', goal: 2,
      requirement: 'Encrypt cardholder data in transit',
      passed: true,
      details: 'TLS 1.2+ enforced',
    });
    return results;
  }

  checkAllRequirements(data: CardDataStorage): { passed: number; failed: number } {
    const results = this.checkCardDataStorage(data);
    const passed = results.filter(r =&gt; r.passed).length;
    const failed = results.filter(r =&gt; !r.passed).length;
    return { passed, failed };
  }

  isCompliant(data: CardDataStorage): boolean {
    return this.checkAllRequirements(data).failed === 0;
  }
}

// Usage
const pciChecker = new PCIDSSComplianceChecker();
const merchantData: CardDataStorage = {
  pan: '4111111111111111', panEncrypted: true, panTokenized: false,
  cardholderName: 'Ram Sharma', expiryDate: '12/28',
  cvv: null, trackData: null, pin: null,
};
const pciResult = pciChecker.checkAllRequirements(merchantData);
console.log('PCI DSS:', pciResult.passed + '/4 passed');
console.log('Compliant:', pciChecker.isCompliant(merchantData));
```

### 14. Architecture Diagrams — Additional

#### Bank SOC / SIEM Integration Architecture

```mermaid
graph TB
    subgraph Data_Sources[Security Data Sources]
        CBS[CBS Logs]
        ATM[ATM Switch Logs]
        UPI[UPI Gateway Logs]
        IB[Internet Banking Logs]
        FW[Firewall Logs]
        EDR[EDR/AV Logs]
    end
    subgraph SIEM[SIEM Platform]
        COL[Log Collector]
        CORR[Correlation Engine]
        STOR[Storage]
        DASH[Visualization]
    end
    subgraph SOAR[SOAR Platform]
        PLAY[Playbook Engine]
        TICKET[Ticketing]
        AUTO[Auto-Response]
    end
    subgraph RBI_Reporting[RBI Reporting]
        SIMS[SIMS Portal]
        CERT[CERT-IN]
        DAKSH[RBI DAKSH]
    end
    CBS --> COL; ATM --> COL; UPI --> COL; IB --> COL; FW --> COL; EDR --> COL
    COL --> CORR; CORR --> STOR; STOR --> DASH
    CORR --> PLAY; PLAY --> TICKET; PLAY --> AUTO
    DASH --> SIMS; DASH --> CERT; AUTO --> DAKSH
```

#### Bank BCP/DR Architecture

```mermaid
flowchart TB
    subgraph PDC[Primary Data Center]
        CBS_A[(CBS Oracle RAC Active)]
        ATM_A[ATM Switch Active]
        IB_A[Internet Banking Active]
    end
    subgraph DR[DR Site - 800km away]
        CBS_B[(CBS Oracle DataGuard Standby)]
        ATM_B[ATM Switch Standby]
        IB_B[Internet Banking Standby]
    end
    subgraph Sync[Replication]
        SYNC[Real-time Sync]
        ASYNC[Async Replication]
    end
    PDC --> SYNC; PDC --> ASYNC
    SYNC --> DR; ASYNC --> DR
    subgraph Testing[DR Testing]
        T1[Table-top - Quarterly]
        T2[Technical Failover - Half-yearly]
        T3[Full Business DR - Annual]
        T4[Independent Audit - Annual]
    end
    T1 --> T2 --> T3 --> T4
```

### 15. Latest Developments (2024-2026)

#### 15.1 New RBI Cybersecurity Circulars

- **July 2024:** "Cyber Resilience and Payment Security" circular — all payment transactions above Rs. 5,000 must use transaction signing. Banks must implement AI/ML transaction monitoring. Quarterly external pen testing (up from annual).

- **January 2025:** "Digital Payment Security Controls" — tokenization extended to all card-on-file transactions. All payment aggregators must obtain PCI DSS v4.0 by June 2025. Mandatory 3DS 2.0 for e-commerce. UPI/IMPS fraud reporting within 1 hour.

- **August 2025:** Enhanced BCP/DR guidelines — RTO reduced to 1 hour for critical systems, RPO to 5 minutes for payment systems. Two full DR tests per year. DR must be active-active for UPI/payment switches.

- **March 2026:** "AI Governance in Banking" — all AI/ML models must be explainable (XAI). Mandatory model validation and fairness testing. AI model inventory with risk classification. Third-party AI vendor security assessment.

#### 15.2 IT Act Amendments

- **2024:** IT (Amendment) Act — Section 66F (cyber terrorism, life imprisonment), Section 66G (data breach notification within 72 hours, penalty up to Rs. 5 crore/2% turnover), Section 72B (re-identification of anonymized data, penalty Rs. 3 crore), Section 79A (AI-based content moderation for intermediaries).

- **2025:** DPDP Act rules notified — DPO appointment mandatory for banks. Consent managers registered with Data Protection Board. Data localization for critical personal data (financial, health, biometric). Penalties up to Rs. 250 crore.

- **2026:** Proposed AI regulation amendments — mandatory watermarking of AI-generated content. Liability framework for AI-based banking decisions. Algorithmic audit for credit scoring models.

#### 15.3 SWIFT & Security Updates

- **2024:** SWIFT CSP 2024 — 24 mandatory controls (up from 21). AI-based anomaly detection, enhanced sanctions screening, 6-monthly pen testing.

- **2025:** ISO 20022 migration complete — all cross-border payments use ISO 20022 XML. Indian banks completed by November 2025.

- **2026:** SWIFT Neural — AI-based fraud detection for real-time payment screening. Indian banks to implement by December 2026.

#### 15.4 Security Incidents

- **2024:** Rise in UPI "screen sharing" attacks. RBI banned screen sharing during UPI transactions.
- **2025:** Major PSB ransomware attack on CBS — restored from DR in 4 hours. Mandatory offline backups for all CBS systems.
- **2026:** First AI deepfake voice attack on phone banking. RBI mandated voice biometric liveness detection.

#### 15.5 E-KYC Updates

- **2024:** UIDAI "Aadhaar Face Authentication" — facial recognition for e-KYC with liveness detection.
- **2025:** Aadhaar authentication limit increased to Rs. 1,00,000.
- **2026:** Offline e-KYC with QR code verification — no internet required.

## 📝 Solved Examples (20 MCQs)

**1.** As per RBI 2020 cybersecurity circular, which technology is recommended for detecting APTs?

A) Perimeter firewall
B) Deception technology (honeypots/honeynets)
C) Antivirus software
D) SSL certificates

<details>
<summary>Answer</summary>
**Answer: B) Deception technology**

RBI's 2020 cybersecurity circular specifically recommends deception technology (honeypots, honeynets) to detect APTs and sophisticated threats that have bypassed traditional perimeter defenses.
</details>

**2.** Under the IT Act 2000, which section provides safe harbor protection to intermediaries?

A) Section 43
B) Section 66
C) Section 79
D) Section 69

<details>
<summary>Answer</summary>
**Answer: C) Section 79**

Section 79 provides conditional safe harbor to intermediaries (including banks, ISPs, payment gateways) from liability for third-party content, provided they exercise due diligence.
</details>

**3.** What is the maximum RPO mandated by RBI for critical banking systems?

A) 1 hour
B) 30 minutes
C) 15 minutes
D) 5 minutes

<details>
<summary>Answer</summary>
**Answer: C) 15 minutes**

RBI mandates RPO of less than 15 minutes for critical systems. RTO should be 2-4 hours (reduced to 1 hour for payment systems as of 2025).
</details>

**4.** Which of the following card data is NEVER allowed to be stored under PCI DSS?

A) Cardholder name
B) PAN (encrypted)
C) CVV/CVC
D) Expiration date

<details>
<summary>Answer</summary>
**Answer: C) CVV/CVC**

CVV/CVC, full track data, and PIN must NEVER be stored — even if encrypted. Cardholder name, PAN (encrypted/truncated/tokenized), and expiration date may be stored with protection.
</details>

**5.** Under SWIFT CSP, what is the primary requirement for SWIFT system connectivity?

A) VPN over internet
B) Dedicated leased line with no internet connectivity
C) Wireless connection
D) Cloud-based SWIFT connector

<details>
<summary>Answer</summary>
**Answer: B) Dedicated leased line with no internet connectivity**

SWIFT CSP mandates that SWIFT infrastructure must be logically and physically segregated with no internet connectivity. Only dedicated leased lines are permitted.
</details>

**6.** What is the RBI mandated minimum distance between a bank's primary data center and DR site?

A) 100 km
B) 200 km
C) 300 km
D) 500 km

<details>
<summary>Answer</summary>
**Answer: C) 300 km**

RBI mandates minimum 300 km distance between primary and DR sites in different seismic zones, ensuring a natural disaster does not affect both sites.
</details>

**7.** In the HOTP algorithm, what parameter serves as the moving factor?

A) Time (T)
B) Counter (C)
C) Secret key (K)
D) Challenge (Q)

<details>
<summary>Answer</summary>
**Answer: B) Counter (C)**

HOTP uses a counter (event-based) moving factor that increments each time an OTP is generated. TOTP uses time. HOTP = Truncate(HMAC-SHA1(K, C)).
</details>

**8.** Under BCP/DR, what is the difference between RTO and RPO?

A) RTO is data loss, RPO is downtime
B) RTO is recovery time, RPO is data loss tolerance
C) Both are the same
D) RTO is for applications, RPO is for network

<details>
<summary>Answer</summary>
**Answer: B) RTO is recovery time, RPO is data loss tolerance**

RTO (Recovery Time Objective) = maximum acceptable downtime. RPO (Recovery Point Objective) = maximum acceptable data loss. RBI: RTO &lt; 2-4 hrs, RPO &lt; 15 min.
</details>

**9.** Under the IT (Amendment) Act 2008, which section designated CERT-IN as the national cyber security incident response agency?

A) Section 66A
B) Section 69
C) Section 70B
D) Section 79

<details>
<summary>Answer</summary>
**Answer: C) Section 70B**

Section 70B of the IT (Amendment) Act 2008 designates CERT-IN as the national agency for cyber security incident response, coordination, and emergency measures.
</details>

**10.** How many mandatory controls does the SWIFT CSP require as of 2024 version?

A) 21
B) 22
C) 24
D) 31

<details>
<summary>Answer</summary>
**Answer: C) 24**

SWIFT CSP 2024 version increased mandatory controls from 21 to 24. New controls include AI-based anomaly detection, enhanced sanctions screening, and biannual pen testing.
</details>

**11.** In the Aadhaar authentication architecture, what is an AUA?

A) Authentication User Agency — the bank using Aadhaar auth
B) Aadhaar Validation Authority
C) Automated User Authenticator
D) Aadhaar Verification Agency

<details>
<summary>Answer</summary>
**Answer: A) Authentication User Agency — the bank using Aadhaar auth**

AUA (Authentication User Agency) is the entity (typically a bank) that uses Aadhaar authentication for customer verification. KUA is for e-KYC, ASA routes requests to UIDAI.
</details>

**12.** What is the RBI mandated time frame for reporting a cybersecurity incident?

A) Within 6 hours
B) Within 2 hours
C) Within 24 hours
D) Within 72 hours

<details>
<summary>Answer</summary>
**Answer: B) Within 2 hours**

RBI mandates that cybersecurity incidents must be reported within 2 hours of detection. As of 2025, UPI/IMPS fraud must be reported within 1 hour.
</details>

**13.** Under PCI DSS v4.0, which encryption algorithm is required for PAN at rest?

A) DES
B) 3DES
C) AES-256
D) RC4

<details>
<summary>Answer</summary>
**Answer: C) AES-256**

PCI DSS v4.0 requires AES-256 for PAN encryption at rest. TLS 1.2+ for data in transit. Keys stored in HSM and rotated at least annually.
</details>

**14.** In the IT Act 2000, what is the punishment for identity theft under Section 66C?

A) Up to 1 year + Rs. 50,000 fine
B) Up to 3 years + Rs. 1 lakh fine
C) Up to 5 years + Rs. 5 lakh fine
D) Up to 7 years + Rs. 10 lakh fine

<details>
<summary>Answer</summary>
**Answer: B) Up to 3 years + Rs. 1 lakh fine**

Section 66C deals with identity theft — punishment up to 3 years and/or fine up to Rs. 1 lakh.
</details>

**15.** What is the purpose of e-KYC in banking?

A) Encrypting customer communications
B) Electronic Know Your Customer for identity verification
C) Electronic Key management for CBS
D) End-to-end KYC audit trail

<details>
<summary>Answer</summary>
**Answer: B) Electronic Know Your Customer for identity verification**

e-KYC uses Aadhaar-based electronic identity verification to onboard customers without physical documents, enabling instant account opening through UIDAI verification.
</details>

**16.** Under Basel III, which principle of BCBS 239 deals with data accuracy?

A) Principle 1 — Governance
B) Principle 2 — Data Architecture
C) Principle 3 — Accuracy
D) Principle 7 — Accuracy of Reports

<details>
<summary>Answer</summary>
**Answer: C) Principle 3 — Accuracy**

BCBS 239 Principle 3 mandates data accuracy with automated reconciliation. Principle 7 covers report accuracy. Principle 3 specifically addresses data accuracy and integrity.
</details>

**17.** In the SWIFT CSP maker-checker principle, what is the 4-eyes principle?

A) Four people must approve each transaction
B) Dual control — one person creates, another approves
C) Four-factor authentication
D) Four different systems must verify

<details>
<summary>Answer</summary>
**Answer: B) Dual control — one person creates, another approves**

The 4-eyes principle (maker-checker) requires the person who initiates a transaction is different from the person who authorizes it. SWIFT CSP Control 2.7 mandates this.
</details>

**18.** What is the encryption standard required for Aadhaar PID (Personal Identity Data) block?

A) AES-128
B) AES-256
C) RSA-2048
D) UIDAI-specific encryption with public key

<details>
<summary>Answer</summary>
**Answer: D) UIDAI-specific encryption with public key**

The PID block containing biometric data is encrypted using UIDAI's public key at the device level. Each request uses a unique session key. Biometric data is never stored at the AUA/bank.
</details>

**19.** Under the RBI BCP/DR guidelines, how many full DR tests must banks conduct per year as of 2025?

A) One per year
B) Two per year
C) Four per year
D) One every two years

<details>
<summary>Answer</summary>
**Answer: B) Two per year**

As per RBI's 2025 enhanced BCP/DR guidelines, banks must conduct two full DR tests per year (increased from one). Quarterly table-top exercises and half-yearly technical failover tests are also required.
</details>

**20.** Under the IT (Amendment) Act 2024, what is the penalty for data breach?

A) Up to Rs. 1 crore
B) Up to Rs. 5 crore or 2% of global turnover
C) Up to Rs. 10 crore
D) Up to Rs. 50 lakh

<details>
<summary>Answer</summary>
**Answer: B) Up to Rs. 5 crore or 2% of global turnover**

The 2024 amendment introduced Section 66G requiring data breach notification within 72 hours, with penalties up to Rs. 5 crore or 2% of global turnover.
</details>

## 📖 Exercise Bank (30 Questions)

### Section A: Short Answer (Questions 1-10)

**1.** List the six goals of PCI DSS and briefly describe each.

**2.** What is the Defense-in-Depth model? List its seven layers.

**3.** Explain the difference between RegTech and SupTech with examples.

**4.** What are the four severity levels (L1-L4) in RBI's Cyber Crisis Management Plan?

**5.** List five key sections of the IT Act 2000 relevant to banking.

**6.** What is the difference between HOTP and TOTP algorithms for OTP generation?

**7.** Explain SWIFT CSP Control 2.7 (Operator Segregation) and why it is critical.

**8.** What is the role of a DPO (Data Protection Officer) under the DPDP Act 2023?

**9.** List the five mandatory technical controls from the RBI 2020 cybersecurity circular.

**10.** What are the three authentication factors in RBI's 2FA mandate?

### Section B: Long Answer (Questions 11-20)

**11.** Describe the RBI cybersecurity framework evolution from 2016 to 2020. Include key enhancements in the 2020 circular.

**12.** Explain the Defense-in-Depth security architecture for a bank. Describe each of the seven layers with specific technologies.

**13.** Compare PCI DSS v3.2.1 with v4.0. What are the key changes and new requirements?

**14.** Describe the complete DR test lifecycle as mandated by RBI. Include all four phases with frequency and scope.

**15.** Explain the AML/CFT transaction monitoring architecture used by banks. Include rules engine, ML models, and SAR generation.

**16.** Describe the Aadhaar e-KYC flow. Include AUA, KUA, ASA, and CIDR roles, encryption, and XML response format.

**17.** Explain the SWIFT CSP mandatory controls for Indian banks. Cover at least 10 controls with technical implementation details.

**18.** Describe the BCP/DR architecture for a mid-sized Indian bank. Include RPO/RTO, replication type, site selection, and failover procedure.

**19.** Explain how Basel III technology requirements drive bank IT architecture. Cover BCBS 239, risk data warehousing, and reporting systems.

**20.** Compare ISO 27001 vs PCI DSS vs RBI cybersecurity framework. Where do they overlap and where do they differ?

### Section C: Application / Design (Questions 21-30)

**21.** Design a SIEM architecture for a bank that ingests logs from CBS, ATM switch, UPI gateway, and internet banking. Include log collection, correlation, alerting, and RBI reporting.

**22.** Write a TypeScript class for a DLP (Data Leak Prevention) system that monitors outbound data transfers and blocks sensitive data (PAN, Aadhaar, account numbers).

**23.** Design a User Entity Behavior Analytics (UEBA) system that detects anomalous user behavior based on login patterns, transaction amounts, and access times.

**24.** Implement a password policy enforcer in TypeScript that validates passwords against minimum length, complexity, history, and expiry rules.

**25.** Design an access control system for a bank's CBS administrative functions with RBAC, maker-checker, and privileged access management.

**26.** Write TypeScript code for a vulnerability scanner that checks CBS endpoints against OWASP Top 10 vulnerabilities.

**27.** Design a security incident response playbook automation (SOAR) that handles phishing incidents, ransomware, and data breaches automatically.

**28.** Implement a session management system for internet banking with concurrent session limits, idle timeout, and forced re-authentication for sensitive actions.

**29.** Design a real-time fraud detection engine for UPI transactions that uses rules + ML scoring with sub-100ms response time.

**30.** Write TypeScript code for an RBI compliance report generator that creates automated XBRL reports for off-site surveillance.

**Answer Key:**

<details>
<summary>Section A Answers (1-10)</summary>

**1.** Goal 1: Build secure network (firewall, change defaults). Goal 2: Protect cardholder data (encrypt storage/transmission). Goal 3: Vulnerability management (anti-malware, secure systems). Goal 4: Access control (RBAC, authentication, physical). Goal 5: Monitor and test (logging, pen testing). Goal 6: Information security policy.

**2.** Layer 7: Application (OAuth, 2FA). Layer 6: Data (encryption, DLP). Layer 5: Access (RBAC, PIM). Layer 4: Network (firewall, IDS/IPS). Layer 3: Platform (OS hardening, EDR). Layer 2: Physical (CCTV, biometrics). Layer 1: Governance (ISO 27001, ISMS).

**3.** RegTech: Technology for regulatory compliance (AML screening, KYC automation). SupTech: Technology used by regulators for supervision (RBI's DAKSH). Example: RegTech = automated suspicious transaction reporting; SupTech = RBI using DAKSH to analyze bank data.

**4.** L1 (Low): Isolated malware, IT team. L2 (Medium): Limited data exposure, CISO+IT, RBI 2hrs. L3 (High): System compromise, CISO+CEO, RBI+CERT-IN. L4 (Critical): Multi-system breach, Board+CISO, RBI+CERT-IN+NCIIPC.

**5.** Section 43 (unauthorized access), 66C (identity theft), 66D (cheating by impersonation), 72 (breach of confidentiality), 79 (safe harbor).
</details>

<details>
<summary>Section B Answers (11-20)</summary>

**11.** 2016: Baseline — CISO, IS steering committee, cyber policy, IS audit, BCP, incident reporting (2hrs), vendor assessment, annual pen test. 2020: Enhanced — APT defense, network segmentation, sandboxing, deception tech, DLP, UEBA, 24x7 SOC/SIEM, SOAR, MITRE ATT and CK, supply chain security, cloud security.

**12.** Layer 1 (Governance): ISO 27001, ISMS. Layer 2 (Physical): DC access, CCTV, biometrics. Layer 3 (Platform): OS hardening, patching, EDR. Layer 4 (Network): Firewalls, IDS/IPS, VPN, DDoS. Layer 5 (Access): RBAC, PIM/PAM, SSO, MFA. Layer 6 (Data): AES-256, DLP, tokenization. Layer 7 (Application): OAuth 2.0, 2FA, session management.

**13.** v3.2.1: 12 requirements, annual validation, ASV quarterly. v4.0: Customized approach, continuous validation, enhanced MFA, expanded CDE definition, new e-commerce requirements (3DS), flexible pen testing.

**14.** Phase 1: Table-top (quarterly) — review BCP, simulate crises. Phase 2: Technical DR (half-yearly) — failover app servers, verify sync. Phase 3: Full business DR (annual/semi-annual from 2025) — actual CBS failover. Phase 4: Independent audit (annual) — external review, report to RBI.

**15.** CBS/TXN data → Rules Engine (PEP, sanctions, velocity, geo) → ML models (XGBoost, neural nets) → Alert generation → SAR creation → Automated filing to FIU-IND.

**16.** Customer consent + Aadhaar + biometric/OTP → Bank (AUA/KUA) formats PID block (encrypted with UIDAI public key) → ASA routes to UIDAI → CIDR matches → Response XML: name, DOB, gender, address, photo → Bank stores as valid KYC.

**17.** Key 10 controls: 1.1 (restrict internet), 1.2 (OS privilege), 1.3 (virtualization protection), 1.5 (PKI auth), 2.1 (MFA), 2.3 (segregation), 2.4 (anomaly detection), 2.5 (transaction controls), 2.7 (maker-checker), 2.9 (incident response).

**18.** Active-Passive with sync replication to DR site 300+ km away. Oracle DataGuard SYNC. RPO &lt; 15 min, RTO &lt; 2-4 hrs. Auto-failover on PDC heartbeat loss. DR activates CBS, ATM switch, and internet banking.

**19.** Basel III requires: Risk data warehouse (BCBS 239), PD/LGD/EAD engines, FRTB for market risk, LCR/NSFR for liquidity risk, XBRL-based Pillar 3 reporting, automated stress testing infrastructure.

**20.** ISO 27001: Broad ISMS (114 controls, 14 domains). PCI DSS: Card data specific (12 requirements). RBI: Banking-specific cybersecurity (2020 circular). Overlap: access control, incident response, encryption. Differences: scope (PCI is card-only, RBI is bank-wide).
</details>

<details>
<summary>Section C Answers (21-30)</summary>

**21.** SIEM: Log shippers (Filebeat) on CBS/ATM/UPI/IB servers → Kafka for buffering → Elasticsearch for storage → Kibana for visualization → Correlation rules for alerting → SOAR for auto-response → SIMS/CERT-IN for RBI reporting.

**22.** DLP class: Monitor outbound HTTP/SMTP/FTP. Regex patterns for PAN (/\d{16}/), Aadhaar (/\d{12}/), account numbers. Block/alert on match. Use content inspection and contextual analysis.

**23.** UEBA: Build baseline of user behavior (login time, location, transaction amount, frequency). Flag deviations: login from new city + large transaction + unusual time. Use statistical models (z-score, moving average).

**24.** Password policy: min 8 chars, 1 upper, 1 lower, 1 digit, 1 special. No last 5 passwords. Expiry 90 days. Failed attempt lockout after 5 attempts. TypeScript: regex validation + history storage (hashed).

**25.** RBAC: Role hierarchy (admin, supervisor, teller, auditor). Maker-checker for critical ops (payment approval, customer creation). PAM for admin access with session recording and approval workflows.

**26.** Vulnerability scanner: HTTP client checks CBS endpoints for: SQLi (parameter tampering), XSS (script injection), CSRF (missing tokens), insecure headers, outdated TLS. Report with severity and remediation.

**27.** SOAR playbook: (1) Phishing — auto-analyze email headers, quarantine, notify user. (2) Ransomware — isolate host, block C2, restore from backup. (3) Data breach — identify leaked data, notify DPO, report to RBI/CERT-IN within 2hrs.

**28.** Session management: max 2 concurrent sessions per user. Idle timeout 15 min. Absolute timeout 8 hrs. Forced re-auth for beneficiary addition, high-value transactions, password changes. All sessions logged.

**29.** Fraud detection: Transaction enters → Rule checks (velocity, amount threshold, geo-match) → ML score (XGBoost model, 100ms inference) → Hotlist check → Composite score → Allow/Block/Review. Feedback loop for model retraining.

**30.** XBRL generator: Fetch data from CBS (CRAR, NPA, LCR, NSFR) → Map to XBRL taxonomy (RBI DAKSH schema) → Generate XBRL instance document → Validate against XSD → Submit via API to RBI's DAKSH portal.
</details>

## Summary

RBI's cybersecurity framework evolved from the 2016 baseline requirements to the enhanced 2020 circular mandating APT defense, DLP, SOC/SIEM, and supply chain security. The Cyber Crisis Management Plan has four severity levels (L1-L4) with specific reporting timelines.

The IT Act 2000 (amended 2008) provides the legal framework for banking cybersecurity through sections covering unauthorized access, identity theft, privacy breach, and safe harbor for intermediaries. Section 79 provides conditional exemption for banks as intermediaries.

Data protection follows DSCI guidelines (data localization, privacy by design) and ISO 27001 ISMS framework. Basel III requires significant IT infrastructure including risk data warehouses, PD/LGD/EAD engines, FRTB systems, and BCBS 239 compliance.

SWIFT CSP has 21 mandatory controls including air-gapped SWIFT environment, dual control, multi-factor authentication, and transaction whitelisting. BCP/DR mandates minimum 300 km separation with RTO of 2-4 hours and RPO of less than 15 minutes.

PCI DSS (v4.0) prohibits storage of CVV and full track data. Tokenization reduces PCI scope. 2FA is mandatory for internet banking with OTP generated via HOTP/TOTP algorithms on HSMs. CMS security involves dual control, GPS tracking, and biometric authentication. e-KYC uses UIDAI's Aadhaar authentication (AUA/KUA/ASA model) with encrypted PID blocks.

## Practical Takeaways

1. **RBI Compliance First:** All banking security implementations must start with RBI circulars. The 2020 cybersecurity circular is the baseline reference for any bank IT project.

2. **SWIFT Air Gap:** Never allow internet connectivity to SWIFT systems. Banks that were breached (Bangladesh Bank) had weak/absent segregation. This is the single most critical SWIFT CSP control.

3. **2FA Design:** For internet banking, implement risk-based authentication — step up authentication only for high-value transactions. Users accept friction better when it is proportional to risk.

4. **PCI DSS Scoping:** Use tokenization to reduce PCI DSS scope. A tokenized merchant environment has significantly fewer requirements than one storing actual PAN.

5. **DR Testing:** Full failover tests must use actual customer data. Table-top exercises are insufficient for validating DR readiness. Run at least one unannounced test per year.

6. **OTP Delivery Diversity:** Do not rely solely on SMS OTP — SMS has latency and SIM swap vulnerabilities. Implement app push OTP and software tokens as alternatives.

7. **e-KYC Encryption:** Always use the latest PID block encryption standards from UIDAI. The encryption key must be rotated per UIDAI schedule. Never store biometric data after authentication.

## Chapter Quiz

**Q1:** How many mandatory controls does the SWIFT Customer Security Programme (CSP) require?

A) 12
B) 15
C) 21
D) 31

<details>
<summary>Answer</summary>
**Answer: C) 21**

SWIFT CSP has 21 mandatory controls (as of current version) and 12 advisory controls. Compliance is attested annually.
</details>

**Q2:** Under the RBI 2020 cybersecurity circular, what is the recommended approach to detect sophisticated threats that evade traditional perimeter defenses?

A) Perimeter firewall upgrade
B) Deception technology (honeypots/honeynets)
C) Annual penetration testing
D) User awareness training

<details>
<summary>Answer</summary>
**Answer: B) Deception technology**

The 2020 circular recommends deception technology (honeypots, honeynets) to detect APTs and sophisticated threats that have bypassed traditional defenses. This provides early warning of active breaches.
</details>

**Q3:** What is the maximum RTO (Recovery Time Objective) that RBI specifies for critical banking systems?

A) 15 minutes
B) 1 hour
C) 2-4 hours
D) 8 hours

<details>
<summary>Answer</summary>
**Answer: C) 2-4 hours**

RBI mandates RTO of 2-4 hours for critical systems with RPO of less than 15 minutes. Less critical systems may have longer RTO.
</details>

**Q4:** In Aadhaar authentication architecture, what is the role of an ASA?

A) Store Aadhaar numbers
B) Route authentication requests between AUA and UIDAI
C) Generate Aadhaar numbers
D) Verify biometric data

<details>
<summary>Answer</summary>
**Answer: B) Route authentication requests between AUA and UIDAI**

ASA (Authentication Service Agency) acts as a routing intermediary between the AUA (bank) and UIDAI's CIDR. NPCI is the largest ASA. ASAs do NOT store Aadhaar data.
</details>

**Q5:** Which section of the IT Act 2000 provides safe harbor protection for intermediaries like banks and payment gateways?

A) Section 66A
B) Section 69
C) Section 79
D) Section 43

<details>
<summary>Answer</summary>
**Answer: C) Section 79**

Section 79 provides safe harbor to intermediaries (including banks) from liability for third-party content, provided they exercise due diligence and take down content upon receiving knowledge of violation.
</details>
