"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[86908],{

/***/ 47550
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cyber_security_06_iam_md_c2c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cyber-security-06-iam-md-c2c.json
const site_docs_courses_cyber_security_06_iam_md_c2c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cyber-security/06-iam","title":"Chapter 6: Identity & Access Management","description":"Prereq: Chapter 5 (Web Security) → OAuth 2.0 and SAML secure web authentication.","source":"@site/docs/courses/cyber-security/06-iam.md","sourceDirName":"courses/cyber-security","slug":"/cyber-security/06-iam","permalink":"/ai-engineering-journey/cyber-security/06-iam","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"06-iam","slug":"/cyber-security/06-iam","title":"Chapter 6: Identity & Access Management","sidebar_label":"Chapter 6: Identity & Access Management","sidebar_position":6},"sidebar":"course-cyber-security","previous":{"title":"Chapter 5: Web Security","permalink":"/ai-engineering-journey/cyber-security/05-web-security"},"next":{"title":"Chapter 7: Cloud & Mobile Security","permalink":"/ai-engineering-journey/courses/cyber-security/cloud-mobile"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cyber-security/06-iam.md


const frontMatter = {
	id: '06-iam',
	slug: '/cyber-security/06-iam',
	title: 'Chapter 6: Identity & Access Management',
	sidebar_label: 'Chapter 6: Identity & Access Management',
	sidebar_position: 6
};
const contentTitle = 'Chapter 6: Identity & Access Management';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Contents",
  "id": "contents",
  "level": 2
}, {
  "value": "1. Core IAM Concepts",
  "id": "1-core-iam-concepts",
  "level": 2
}, {
  "value": "The IAM Triangle",
  "id": "the-iam-triangle",
  "level": 3
}, {
  "value": "Identity Lifecycle",
  "id": "identity-lifecycle",
  "level": 3
}, {
  "value": "2. Authentication Factors",
  "id": "2-authentication-factors",
  "level": 2
}, {
  "value": "2.1 Something You Know (Knowledge Factor)",
  "id": "21-something-you-know-knowledge-factor",
  "level": 3
}, {
  "value": "2.2 Something You Have (Possession Factor)",
  "id": "22-something-you-have-possession-factor",
  "level": 3
}, {
  "value": "2.3 Something You Are (Inherence Factor)",
  "id": "23-something-you-are-inherence-factor",
  "level": 3
}, {
  "value": "2.4 Extended Factors",
  "id": "24-extended-factors",
  "level": 3
}, {
  "value": "Auth Factor Comparison",
  "id": "auth-factor-comparison",
  "level": 3
}, {
  "value": "3. Password Security",
  "id": "3-password-security",
  "level": 2
}, {
  "value": "3.1 Password Hashing Fundamentals",
  "id": "31-password-hashing-fundamentals",
  "level": 3
}, {
  "value": "3.2 Salting",
  "id": "32-salting",
  "level": 3
}, {
  "value": "3.3 Password Hashing Algorithms",
  "id": "33-password-hashing-algorithms",
  "level": 3
}, {
  "value": "bcrypt",
  "id": "bcrypt",
  "level": 4
}, {
  "value": "scrypt",
  "id": "scrypt",
  "level": 4
}, {
  "value": "argon2",
  "id": "argon2",
  "level": 4
}, {
  "value": "PBKDF2 (Password-Based Key Derivation Function 2)",
  "id": "pbkdf2-password-based-key-derivation-function-2",
  "level": 4
}, {
  "value": "Password Hash Comparison",
  "id": "password-hash-comparison",
  "level": 3
}, {
  "value": "3.4 Password Policies (NIST SP 800-63B Guidelines)",
  "id": "34-password-policies-nist-sp-800-63b-guidelines",
  "level": 3
}, {
  "value": "3.5 Linux Password Policies (passwd / chage)",
  "id": "35-linux-password-policies-passwd--chage",
  "level": 3
}, {
  "value": "3.6 Hashcat NTLM Hash Cracking Demo",
  "id": "36-hashcat-ntlm-hash-cracking-demo",
  "level": 3
}, {
  "value": "4. Multi-Factor Authentication (MFA)",
  "id": "4-multi-factor-authentication-mfa",
  "level": 2
}, {
  "value": "4.1 TOTP (Time-based OTP) → RFC 6238",
  "id": "41-totp-time-based-otp--rfc-6238",
  "level": 3
}, {
  "value": "4.2 HOTP (HMAC-based OTP) → RFC 4226",
  "id": "42-hotp-hmac-based-otp--rfc-4226",
  "level": 3
}, {
  "value": "4.3 TOTP Generator in PowerShell",
  "id": "43-totp-generator-in-powershell",
  "level": 3
}, {
  "value": "4.4 SMS and Push MFA",
  "id": "44-sms-and-push-mfa",
  "level": 3
}, {
  "value": "4.5 Hardware Tokens (U2F / FIDO2 / WebAuthn Passkeys)",
  "id": "45-hardware-tokens-u2f--fido2--webauthn-passkeys",
  "level": 3
}, {
  "value": "4.6 YubiKey FIDO2 Setup",
  "id": "46-yubikey-fido2-setup",
  "level": 3
}, {
  "value": "MFA Method Comparison",
  "id": "mfa-method-comparison",
  "level": 3
}, {
  "value": "5. Biometrics",
  "id": "5-biometrics",
  "level": 2
}, {
  "value": "5.1 Metrics",
  "id": "51-metrics",
  "level": 3
}, {
  "value": "5.2 Types",
  "id": "52-types",
  "level": 3
}, {
  "value": "Biometric Comparison",
  "id": "biometric-comparison",
  "level": 3
}, {
  "value": "6. Single Sign-On (SSO)",
  "id": "6-single-sign-on-sso",
  "level": 2
}, {
  "value": "SSO Models",
  "id": "sso-models",
  "level": 3
}, {
  "value": "7. SAML 2.0",
  "id": "7-saml-20",
  "level": 2
}, {
  "value": "Components",
  "id": "components",
  "level": 3
}, {
  "value": "SAML SP-Initiated Flow",
  "id": "saml-sp-initiated-flow",
  "level": 3
}, {
  "value": "Assertion XML Structure",
  "id": "assertion-xml-structure",
  "level": 3
}, {
  "value": "OpenSSL Certificate for SAML Signing",
  "id": "openssl-certificate-for-saml-signing",
  "level": 3
}, {
  "value": "SAML Security",
  "id": "saml-security",
  "level": 3
}, {
  "value": "8. OAuth 2.0",
  "id": "8-oauth-20",
  "level": 2
}, {
  "value": "8.1 Core Concepts",
  "id": "81-core-concepts",
  "level": 3
}, {
  "value": "8.2 Grant Types",
  "id": "82-grant-types",
  "level": 3
}, {
  "value": "Authorization Code + PKCE (Best for web/mobile/SPAs)",
  "id": "authorization-code--pkce-best-for-webmobilespas",
  "level": 4
}, {
  "value": "Client Credentials (Machine-to-Machine)",
  "id": "client-credentials-machine-to-machine",
  "level": 4
}, {
  "value": "Implicit (Deprecated)",
  "id": "implicit-deprecated",
  "level": 4
}, {
  "value": "ROPC (Deprecated)",
  "id": "ropc-deprecated",
  "level": 4
}, {
  "value": "Device Authorization (TVs, CLI, IoT)",
  "id": "device-authorization-tvs-cli-iot",
  "level": 4
}, {
  "value": "Grant Types Comparison",
  "id": "grant-types-comparison",
  "level": 3
}, {
  "value": "8.3 OAuth 2.0 with curl + PKCE",
  "id": "83-oauth-20-with-curl--pkce",
  "level": 3
}, {
  "value": "8.4 OAuth Security",
  "id": "84-oauth-security",
  "level": 3
}, {
  "value": "9. OpenID Connect (OIDC)",
  "id": "9-openid-connect-oidc",
  "level": 2
}, {
  "value": "ID Token (JWT)",
  "id": "id-token-jwt",
  "level": 3
}, {
  "value": "Flow",
  "id": "flow",
  "level": 3
}, {
  "value": "SAML vs OAuth vs OIDC",
  "id": "saml-vs-oauth-vs-oidc",
  "level": 3
}, {
  "value": "10. JWT",
  "id": "10-jwt",
  "level": 2
}, {
  "value": "Structure",
  "id": "structure",
  "level": 3
}, {
  "value": "JWT Generation and Validation",
  "id": "jwt-generation-and-validation",
  "level": 3
}, {
  "value": "JWT Security Attacks",
  "id": "jwt-security-attacks",
  "level": 3
}, {
  "value": "11. RBAC vs ABAC vs ReBAC",
  "id": "11-rbac-vs-abac-vs-rebac",
  "level": 2
}, {
  "value": "11.1 RBAC (NIST INCITS 359)",
  "id": "111-rbac-nist-incits-359",
  "level": 3
}, {
  "value": "11.2 ABAC (NIST SP 800-162)",
  "id": "112-abac-nist-sp-800-162",
  "level": 3
}, {
  "value": "11.3 ReBAC (Relationship-Based)",
  "id": "113-rebac-relationship-based",
  "level": 3
}, {
  "value": "Comparison Table",
  "id": "comparison-table",
  "level": 3
}, {
  "value": "12. LDAP",
  "id": "12-ldap",
  "level": 2
}, {
  "value": "12.1 Concepts",
  "id": "121-concepts",
  "level": 3
}, {
  "value": "12.2 Directory Structure",
  "id": "122-directory-structure",
  "level": 3
}, {
  "value": "12.3 LDAP Search with ldapsearch",
  "id": "123-ldap-search-with-ldapsearch",
  "level": 3
}, {
  "value": "12.4 LDIF (Import/Export)",
  "id": "124-ldif-importexport",
  "level": 3
}, {
  "value": "13. Active Directory",
  "id": "13-active-directory",
  "level": 2
}, {
  "value": "13.1 AD Components",
  "id": "131-ad-components",
  "level": 3
}, {
  "value": "13.2 Windows AD PowerShell",
  "id": "132-windows-ad-powershell",
  "level": 3
}, {
  "value": "13.3 AD Security Best Practices",
  "id": "133-ad-security-best-practices",
  "level": 3
}, {
  "value": "14. Kerberos",
  "id": "14-kerberos",
  "level": 2
}, {
  "value": "14.1 Components",
  "id": "141-components",
  "level": 3
}, {
  "value": "14.2 Authentication Flow",
  "id": "142-authentication-flow",
  "level": 3
}, {
  "value": "14.3 Kerberos kinit / klist",
  "id": "143-kerberos-kinit--klist",
  "level": 3
}, {
  "value": "14.4 Kerberos Windows",
  "id": "144-kerberos-windows",
  "level": 3
}, {
  "value": "Kerberos Attacks",
  "id": "kerberos-attacks",
  "level": 3
}, {
  "value": "15. Zero Trust Identity",
  "id": "15-zero-trust-identity",
  "level": 2
}, {
  "value": "15.1 Principles (NIST SP 800-207)",
  "id": "151-principles-nist-sp-800-207",
  "level": 3
}, {
  "value": "15.2 Google BeyondCorp",
  "id": "152-google-beyondcorp",
  "level": 3
}, {
  "value": "15.3 ZTA Architecture",
  "id": "153-zta-architecture",
  "level": 3
}, {
  "value": "ZTA vs Traditional VPN",
  "id": "zta-vs-traditional-vpn",
  "level": 3
}, {
  "value": "16. Privileged Access Management (PAM)",
  "id": "16-privileged-access-management-pam",
  "level": 2
}, {
  "value": "16.1 PAM Concepts",
  "id": "161-pam-concepts",
  "level": 3
}, {
  "value": "16.2 Flow",
  "id": "162-flow",
  "level": 3
}, {
  "value": "16.3 PAM Best Practices",
  "id": "163-pam-best-practices",
  "level": 3
}, {
  "value": "17. Just-in-Time (JIT) Access",
  "id": "17-just-in-time-jit-access",
  "level": 2
}, {
  "value": "JIT vs Standing Privileges",
  "id": "jit-vs-standing-privileges",
  "level": 3
}, {
  "value": "18. Session Management",
  "id": "18-session-management",
  "level": 2
}, {
  "value": "18.1 Lifecycle",
  "id": "181-lifecycle",
  "level": 3
}, {
  "value": "18.2 Session Token vs JWT",
  "id": "182-session-token-vs-jwt",
  "level": 3
}, {
  "value": "18.3 Best Practices",
  "id": "183-best-practices",
  "level": 3
}, {
  "value": "19. Case Studies",
  "id": "19-case-studies",
  "level": 2
}, {
  "value": "Case Study 1: Okta 2022 → LAPSUS$ Breach",
  "id": "case-study-1-okta-2022--lapsus-breach",
  "level": 3
}, {
  "value": "Case Study 2: SolarWinds MFA Bypass → Orion Build Pipeline",
  "id": "case-study-2-solarwinds-mfa-bypass--orion-build-pipeline",
  "level": 3
}, {
  "value": "Case Study 3: Microsoft 2024 → Midnight Blizzard Nation-State Attack",
  "id": "case-study-3-microsoft-2024--midnight-blizzard-nation-state-attack",
  "level": 3
}, {
  "value": "Case Studies Summary",
  "id": "case-studies-summary",
  "level": 3
}, {
  "value": "20. Interview Corner",
  "id": "20-interview-corner",
  "level": 2
}, {
  "value": "Q1: What is the difference between authentication and authorization?",
  "id": "q1-what-is-the-difference-between-authentication-and-authorization",
  "level": 3
}, {
  "value": "Q2: Explain OAuth 2.0 Authorization Code flow with PKCE. Why PKCE?",
  "id": "q2-explain-oauth-20-authorization-code-flow-with-pkce-why-pkce",
  "level": 3
}, {
  "value": "Q3: Compare passwords, TOTP, and FIDO2/WebAuthn passkeys.",
  "id": "q3-compare-passwords-totp-and-fido2webauthn-passkeys",
  "level": 3
}, {
  "value": "Q4: What is the N+1 problem in RBAC?",
  "id": "q4-what-is-the-n1-problem-in-rbac",
  "level": 3
}, {
  "value": "Q5: Explain Kerberos delegation types.",
  "id": "q5-explain-kerberos-delegation-types",
  "level": 3
}, {
  "value": "Q6: How does SAML prevent assertion replay?",
  "id": "q6-how-does-saml-prevent-assertion-replay",
  "level": 3
}, {
  "value": "Q7: Design IAM for microservice architecture.",
  "id": "q7-design-iam-for-microservice-architecture",
  "level": 3
}, {
  "value": "Q8: JWT vs opaque session tokens → security implications?",
  "id": "q8-jwt-vs-opaque-session-tokens--security-implications",
  "level": 3
}, {
  "value": "Q9: SAML vs OAuth 2.0 → security boundaries?",
  "id": "q9-saml-vs-oauth-20--security-boundaries",
  "level": 3
}, {
  "value": "Q10: Implement passwordless authentication.",
  "id": "q10-implement-passwordless-authentication",
  "level": 3
}, {
  "value": "Q11: DAC vs MAC vs RBAC vs ABAC?",
  "id": "q11-dac-vs-mac-vs-rbac-vs-abac",
  "level": 3
}, {
  "value": "Q12: How does Google BeyondCorp change security?",
  "id": "q12-how-does-google-beyondcorp-change-security",
  "level": 3
}, {
  "value": "Q13: Detect Kerberoasting attacks?",
  "id": "q13-detect-kerberoasting-attacks",
  "level": 3
}, {
  "value": "Q14: Compare password hashing algorithms for production.",
  "id": "q14-compare-password-hashing-algorithms-for-production",
  "level": 3
}, {
  "value": "Q15: Secure a multi-tenant SaaS identity layer?",
  "id": "q15-secure-a-multi-tenant-saas-identity-layer",
  "level": 3
}, {
  "value": "21. Applications in Real Systems",
  "id": "21-applications-in-real-systems",
  "level": 2
}, {
  "value": "Enterprise IAM",
  "id": "enterprise-iam",
  "level": 3
}, {
  "value": "Operating System IAM",
  "id": "operating-system-iam",
  "level": 3
}, {
  "value": "Cloud IAM",
  "id": "cloud-iam",
  "level": 3
}, {
  "value": "Password Managers",
  "id": "password-managers",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Challenge Problems",
  "id": "challenge-problems",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}, {
  "value": "Appendix A: Deep Dive → Password Hashing Algorithm Internals",
  "id": "appendix-a-deep-dive--password-hashing-algorithm-internals",
  "level": 2
}, {
  "value": "bcrypt Internal Algorithm (EksBlowfish)",
  "id": "bcrypt-internal-algorithm-eksblowfish",
  "level": 3
}, {
  "value": "argon2id Parameter Selection",
  "id": "argon2id-parameter-selection",
  "level": 3
}, {
  "value": "PBKDF2-HMAC-SHA256 Iteration Counts",
  "id": "pbkdf2-hmac-sha256-iteration-counts",
  "level": 3
}, {
  "value": "Constant-Time Comparison (Critical Implementation Detail)",
  "id": "constant-time-comparison-critical-implementation-detail",
  "level": 3
}, {
  "value": "Appendix B: Deep Dive → OAuth 2.0 Token Handling",
  "id": "appendix-b-deep-dive--oauth-20-token-handling",
  "level": 2
}, {
  "value": "Access Token vs Refresh Token Lifecycle",
  "id": "access-token-vs-refresh-token-lifecycle",
  "level": 3
}, {
  "value": "Token Storage Security (SPA / Mobile)",
  "id": "token-storage-security-spa--mobile",
  "level": 3
}, {
  "value": "BFF Pattern (Backend For Frontend)",
  "id": "bff-pattern-backend-for-frontend",
  "level": 3
}, {
  "value": "Appendix C: Deep Dive → WebAuthn/FIDO2 Protocol Detail",
  "id": "appendix-c-deep-dive--webauthnfido2-protocol-detail",
  "level": 2
}, {
  "value": "Authenticator Attachment Modalities",
  "id": "authenticator-attachment-modalities",
  "level": 3
}, {
  "value": "Resident Key (Discoverable Credential) vs Non-Resident",
  "id": "resident-key-discoverable-credential-vs-non-resident",
  "level": 3
}, {
  "value": "User Verification Methods",
  "id": "user-verification-methods",
  "level": 3
}, {
  "value": "Attestation Types",
  "id": "attestation-types",
  "level": 3
}, {
  "value": "Appendix D: Deep Dive → Kerberos Protocol Messages",
  "id": "appendix-d-deep-dive--kerberos-protocol-messages",
  "level": 2
}, {
  "value": "AS-REQ Message Structure",
  "id": "as-req-message-structure",
  "level": 3
}, {
  "value": "AS-REP Message Structure",
  "id": "as-rep-message-structure",
  "level": 3
}, {
  "value": "TGS-REQ to AP-REP Exchange (Service Access)",
  "id": "tgs-req-to-ap-rep-exchange-service-access",
  "level": 3
}, {
  "value": "Encryption Key Hierarchy",
  "id": "encryption-key-hierarchy",
  "level": 3
}, {
  "value": "Appendix E: Deep Dive → LDAP Operations and Schema",
  "id": "appendix-e-deep-dive--ldap-operations-and-schema",
  "level": 2
}, {
  "value": "LDAP Operations List",
  "id": "ldap-operations-list",
  "level": 3
}, {
  "value": "LDAP Search Filter Grammar",
  "id": "ldap-search-filter-grammar",
  "level": 3
}, {
  "value": "LDAP Result Codes",
  "id": "ldap-result-codes",
  "level": 3
}, {
  "value": "LDAP vs Active Directory Comparison",
  "id": "ldap-vs-active-directory-comparison",
  "level": 3
}, {
  "value": "Appendix F: Deep Dive → FIDO2 / WebAuthn CBOR Encoding",
  "id": "appendix-f-deep-dive--fido2--webauthn-cbor-encoding",
  "level": 2
}, {
  "value": "CTAP2 Message Structure (CBOR)",
  "id": "ctap2-message-structure-cbor",
  "level": 3
}, {
  "value": "WebAuthn Authenticator Data",
  "id": "webauthn-authenticator-data",
  "level": 3
}, {
  "value": "COSE Key Format (ES256 Example)",
  "id": "cose-key-format-es256-example",
  "level": 3
}, {
  "value": "Appendix G: Comparison Tables",
  "id": "appendix-g-comparison-tables",
  "level": 2
}, {
  "value": "Password Change Policies → Historical vs NIST",
  "id": "password-change-policies--historical-vs-nist",
  "level": 3
}, {
  "value": "Identity Protocols → Transport Security",
  "id": "identity-protocols--transport-security",
  "level": 3
}, {
  "value": "Security Controls by Authentication Factor",
  "id": "security-controls-by-authentication-factor",
  "level": 3
}, {
  "value": "Enterprise SSO Protocols → Feature Matrix",
  "id": "enterprise-sso-protocols--feature-matrix",
  "level": 3
}, {
  "value": "Appendix H: Real-World IAM Architecture Example",
  "id": "appendix-h-real-world-iam-architecture-example",
  "level": 2
}, {
  "value": "Hybrid IAM Architecture (Enterprise)",
  "id": "hybrid-iam-architecture-enterprise",
  "level": 3
}, {
  "value": "Appendix I: IAM Threat Model (STRIDE per Component)",
  "id": "appendix-i-iam-threat-model-stride-per-component",
  "level": 2
}, {
  "value": "Appendix J: IAM Compliance Mapping",
  "id": "appendix-j-iam-compliance-mapping",
  "level": 2
}, {
  "value": "Appendix K: Session Management Deep Dive",
  "id": "appendix-k-session-management-deep-dive",
  "level": 2
}, {
  "value": "Session ID Generation Best Practices",
  "id": "session-id-generation-best-practices",
  "level": 3
}, {
  "value": "Session Token Format Examples",
  "id": "session-token-format-examples",
  "level": 3
}, {
  "value": "Session Revocation Strategies",
  "id": "session-revocation-strategies",
  "level": 3
}, {
  "value": "Session Security Headers (OWASP)",
  "id": "session-security-headers-owasp",
  "level": 3
}, {
  "value": "Session Security Maturity Model",
  "id": "session-security-maturity-model",
  "level": 3
}, {
  "value": "Appendix L: Comparison → Cloud Identity Providers",
  "id": "appendix-l-comparison--cloud-identity-providers",
  "level": 2
}, {
  "value": "Appendix M: IAM Implementation Checklist",
  "id": "appendix-m-iam-implementation-checklist",
  "level": 2
}, {
  "value": "Password Security",
  "id": "password-security",
  "level": 3
}, {
  "value": "Multi-Factor Authentication",
  "id": "multi-factor-authentication",
  "level": 3
}, {
  "value": "RBAC Design",
  "id": "rbac-design",
  "level": 3
}, {
  "value": "API Security",
  "id": "api-security",
  "level": 3
}, {
  "value": "Session Management",
  "id": "session-management",
  "level": 3
}, {
  "value": "Monitoring &amp; Alerting",
  "id": "monitoring--alerting",
  "level": 3
}, {
  "value": "Appendix N: IAM in Cloud-Native Architectures",
  "id": "appendix-n-iam-in-cloud-native-architectures",
  "level": 2
}, {
  "value": "Kubernetes Identity (SPIFFE / SPIRE)",
  "id": "kubernetes-identity-spiffe--spire",
  "level": 3
}, {
  "value": "Service Mesh IAM",
  "id": "service-mesh-iam",
  "level": 3
}, {
  "value": "TypeScript Implementations",
  "id": "typescript-implementations",
  "level": 2
}, {
  "value": "RBAC Authorization Engine",
  "id": "rbac-authorization-engine",
  "level": 3
}, {
  "value": "JWT Auth Middleware",
  "id": "jwt-auth-middleware",
  "level": 3
}, {
  "value": "Mermaid Diagrams",
  "id": "mermaid-diagrams",
  "level": 2
}, {
  "value": "OAuth 2.0 Authorization Code Flow",
  "id": "oauth-20-authorization-code-flow",
  "level": 3
}, {
  "value": "SAML SSO Authentication Flow",
  "id": "saml-sso-authentication-flow",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    annotation: "annotation",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    math: "math",
    mn: "mn",
    mo: "mo",
    mrow: "mrow",
    ol: "ol",
    p: "p",
    pre: "pre",
    semantics: "semantics",
    span: "span",
    strong: "strong",
    summary: "summary",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "chapter-6-identity--access-management",
        children: "Chapter 6: Identity & Access Management"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapter 5 (Web Security) → OAuth 2.0 and SAML secure web authentication.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 7 (Cloud & Mobile Security) → cloud IAM extends enterprise identity to cloud providers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the core concepts of Identity and Access Management (IAM): identity, authentication, authorization, accounting."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare authentication factors (knowledge, possession, inherence) and their real-world security properties."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze password security mechanisms: hashing, salting, bcrypt, argon2, NIST guidelines."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement and explain TOTP/HOTP algorithms, FIDO2/WebAuthn passkeys, and biometric systems with FAR/FRR/EER."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate SAML 2.0, OAuth 2.0 grant types, and OpenID Connect with practical flow diagrams."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare access control models: RBAC, ABAC, ReBAC with trade-offs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy LDAP queries, Active Directory management, Kerberos ticket inspection, and Zero Trust architecture."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate real-world IAM failures through case studies (Okta 2022, SolarWinds, Midnight Blizzard)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply IAM concepts in interview settings with deep technical Q&A."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contents",
      children: "Contents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1-core-iam-concepts",
          children: "Core IAM Concepts"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#2-authentication-factors",
          children: "Authentication Factors"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#3-password-security",
          children: "Password Security"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#4-multi-factor-authentication-mfa",
          children: "Multi-Factor Authentication (MFA)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#5-biometrics",
          children: "Biometrics"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#6-single-sign-on-sso",
          children: "Single Sign-On (SSO)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#7-saml-20",
          children: "SAML 2.0"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#8-oauth-20",
          children: "OAuth 2.0"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#9-openid-connect-oidc",
          children: "OpenID Connect (OIDC)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#10-jwt",
          children: "JWT"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#11-rbac-vs-abac-vs-rebac",
          children: "RBAC vs ABAC vs ReBAC"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#12-ldap",
          children: "LDAP"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#13-active-directory",
          children: "Active Directory"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#14-kerberos",
          children: "Kerberos"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#15-zero-trust-identity",
          children: "Zero Trust Identity"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#16-privileged-access-management-pam",
          children: "Privileged Access Management (PAM)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#17-just-in-time-jit-access",
          children: "Just-in-Time (JIT) Access"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#18-session-management",
          children: "Session Management"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#19-case-studies",
          children: "Case Studies"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#20-interview-corner",
          children: "Interview Corner"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#21-applications-in-real-systems",
          children: "Applications in Real Systems"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-core-iam-concepts",
      children: "1. Core IAM Concepts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IAM is the security discipline that ensures the right entity accesses the right resource at the right time for the right reason."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " An airport security checkpoint. Your passport is your ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Identity"
      }), ". The officer verifying your face matches the photo is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Authentication"
      }), ". The gate agent checking your boarding pass for a specific flight is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Authorization"
      }), ". The log of who boarded which flight is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Accounting"
      }), "."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Airport Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Identity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique representation of an entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passport number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authentication (AuthN)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proving you are who you claim"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Face match + passport scan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authorization (AuthZ)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Granting/denying resource access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boarding pass check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Accounting (Audit)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logging who did what"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flight manifest"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-iam-triangle",
      children: "The IAM Triangle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                    +----------------------+\n                    |         IAM          |\n                    +----------------------+\n                    | AuthN: Are you who   |\n                    |        you say?      |\n                    | AuthZ: What allowed? |\n                    | Acct:  What did you? |\n                    +----------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "identity-lifecycle",
      children: "Identity Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROVISION --> AUTHENTICATION --> AUTHORIZATION --> AUDIT --> DEPROVISION\n    |                                                       |\n    +------------------- RE-PROVISION <--------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provisioning:"
        }), " Create digital identity (HR hires employee, creates account in IdP)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Credential Issuance:"
        }), " Assign passwords, certificates, tokens, biometric enrollment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authentication:"
        }), " Entity presents credentials; system verifies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authorization:"
        }), " System checks policy for resource access"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Audit Logging:"
        }), " Every access event recorded for compliance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review:"
        }), " Periodic access reviews (quarterly recertification)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deprovisioning:"
        }), " Account disabled/deleted (employee leaves, service decommissioned)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Orphan accounts: Deprovisioning missed, account persists with active permissions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shared accounts: Violates non-repudiation; cannot attribute actions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Service accounts: Non-human identities that need rotation, not MFA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Emergency break-glass: Accounts bypassing normal controls, must be monitored"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-authentication-factors",
      children: "2. Authentication Factors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Authentication factors are categories of evidence used to prove identity. Three classic factors plus extensions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Securing a treasure chest. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Something you know"
      }), " = the combination. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Something you have"
      }), " = the key. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Something you are"
      }), " = your fingerprint. A single factor is like one lock; two factors is like two different locks of different types."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-something-you-know-knowledge-factor",
      children: "2.1 Something You Know (Knowledge Factor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Passwords, PINs, security questions, passphrases."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strengths:"
      }), " Simple, cheap, well-understood.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Weaknesses:"
      }), " Forgettable, guessable, phishable, reusable across services."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NIST SP 800-63B Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimum entropy: 8+ character minimum (memorized secrets)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate limiting: Account lockout after 5-10 failed attempts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No composition rules: \"Must include uppercase, number, symbol\" deprecated by NIST"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-something-you-have-possession-factor",
      children: "2.2 Something You Have (Possession Factor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Physical devices: smart cards, hardware tokens (YubiKey), TOTP authenticator apps, SMS phone, certificates on smart card."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strengths:"
      }), " Harder to remotely compromise (requires physical access or proximity).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Weaknesses:"
      }), " Can be lost, stolen, or cloned (SMS has SIM-swap risk)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-something-you-are-inherence-factor",
      children: "2.3 Something You Are (Inherence Factor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Biometrics: fingerprint, face, iris, voice, gait, keystroke dynamics."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strengths:"
      }), " Cannot be forgotten or easily shared.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Weaknesses:"
      }), " Cannot be revoked if compromised (you have 10 fingers, 2 eyes); privacy concerns; sensor dependency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-extended-factors",
      children: "2.4 Extended Factors"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security Level"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Location"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Where you are"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPS, IP geolocation, WiFi SSID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (spoofable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Behavior"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How you act"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typing rhythm, mouse movement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When you access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-based restrictions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (easily bypassed)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "auth-factor-comparison",
      children: "Auth Factor Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criteria"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Knowledge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Possession"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inherence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Location"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Revocability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy (change password)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy (revoke token)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impossible (fingerprint)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phishable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOTP: no, SMS: yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mn, {
                        children: "10"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "10-"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.7278em",
                      verticalAlign: "-0.0833em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "10"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "50 per token"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mn, {
                        children: "50"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "50-"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.7278em",
                      verticalAlign: "-0.0833em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "50"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "200 per sensor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free (SW only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "User Convenience"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Forgot/Recovery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lost token process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Privacy Risk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (biometric data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Attack Surface"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing, breach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theft, cloning, SIM swap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spoofing, database leak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spoofing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML mimicry"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fallback mechanisms:"
        }), " MFA with SMS fallback undermines security (SIM swap attacks)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recovery codes:"
        }), " printed backup codes are a possession factor on paper"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wearable devices:"
        }), " Smartwatch as possession factor → proximity-based unlock chains"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-password-security",
      children: "3. Password Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-password-hashing-fundamentals",
      children: "3.1 Password Hashing Fundamentals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A meat grinder. You put a steak in (password), you get ground beef out (hash). You cannot reconstruct the steak from ground beef (one-way function). Every time you put the exact same steak in, you get the exact same ground beef out (deterministic). A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "salt"
      }), " is like adding a unique spice blend to each steak so even identical steaks produce different ground beef."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hashing vs Encryption:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hashing"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Encryption"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Direction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-way only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-way (encrypt/decrypt)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No key used"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key required to decrypt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrity verification, password storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confidentiality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reversible"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (preimage resistance)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (with correct key)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Examples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-256, bcrypt, argon2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES, RSA, ChaCha20"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → Password Storage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["User creates password ", (0,jsx_runtime.jsx)(_components.code, {
          children: "P@ssw0rd!"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["System generates unique random salt: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s = random(16 bytes)"
        }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a1b2c3d4e5f6g7h8"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["System computes hash: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "h = hash(password || salt)"
        }), " with work factor"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Store ", (0,jsx_runtime.jsx)(_components.code, {
          children: "salt || hash"
        }), " in database"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On login, user provides password attempt"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["System looks up stored ", (0,jsx_runtime.jsx)(_components.code, {
          children: "salt || hash"
        }), " for user"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["System computes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "h' = hash(attempt || salt)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["System compares ", (0,jsx_runtime.jsx)(_components.code, {
          children: "h == h'"
        }), " (constant-time comparison to prevent timing attacks)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-salting",
      children: "3.2 Salting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Salt?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevents rainbow table attacks (precomputed hash dictionaries)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Makes identical passwords produce different hashes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adds entropy to low-entropy passwords"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Without Salt:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hash(\"password123\")"
      }), " -> same hash for all users with same password.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "With Salt:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hash(\"password123\" + random_salt)"
      }), " -> different hash per user."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-password-hashing-algorithms",
      children: "3.3 Password Hashing Algorithms"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bcrypt",
      children: "bcrypt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Based on Blowfish cipher. Configurable cost factor (2^cost iterations)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bcrypt(cost, salt, password) = hash\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cost: 10-14 (default 10 = 2^10 = 1024 iterations)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Salt: 16 bytes (128 bits)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Output: 184 bits (23 bytes) stored in modular crypt format"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Modular Crypt Format:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$2b$10$[22-char-salt][31-char-hash]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Password:    \"hunter2\"\nSalt:        \"abcdefghijklmnopqrstuv\" (22 chars base64)\nCost:        12 (2^12 = 4096 iterations)\n\nStep 1:  Initialize Blowfish with salt-derived subkeys\nStep 2:  ExpandKey(password) → 4096 iterations\nStep 3:  Encrypt \"OrpheanBeholderScryDoubt\" 64 times with EksBlowfish\nOutput:   $2b$12$abcdefghijklmnopqrstuv.9E6uGX7YvZ8W2rN5qL3mT...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Time: O(2^cost) → exponential in cost factor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory: ~4 KB (fixed, low → weakness against GPU/ASIC attacks)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cost 12 on modern CPU: ~250ms per hash"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Widely deployed, battle-tested"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low memory footprint (GPU-friendly)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost factor future-proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "72-byte password input limit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in salt generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truncates passwords >72 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Many language bindings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Older than argon2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "scrypt",
      children: "scrypt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Designed to be memory-hard (requires large memory), making GPU/ASIC attacks expensive."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "N: CPU/memory cost (must be power of 2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "r: Block size (multiplies memory/cost)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "p: Parallelization factor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dkLen: Output hash length"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-hard (resists GPU/ASIC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less battle-tested than bcrypt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable memory and CPU cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex parameter selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Used in cryptocurrency (Litecoin)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware-optimized scrypt ASICs exist"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "argon2",
      children: "argon2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Winner of the 2015 Password Hashing Competition (PHC). Gold standard for new implementations."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Variants:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "argon2id"
        }), " (RECOMMENDED): Hybrid → side-channel resistance + GPU resistance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "argon2i:"
        }), " Data-independent → side-channel resistant"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "argon2d:"
        }), " Data-dependent → GPU resistant"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "t: Time cost (iterations)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "m: Memory cost (KB)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "p: Parallelism (threads)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recommended: t=3, m=65536 (64MB), p=4"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PHC winner, most modern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not universally available in libraries (growing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable memory/time/parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter confusion (three dimensions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resists side-channel (argon2id)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Newer than bcrypt, less audit history"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No input length limits"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pbkdf2-password-based-key-derivation-function-2",
      children: "PBKDF2 (Password-Based Key Derivation Function 2)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NIST-approved (FIPS 140). Used in WPA2, iOS, many legacy systems."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DK = PBKDF2(PRF, Password, Salt, c, dkLen)"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PRF: HMAC-SHA256 typically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c: Iteration count (e.g., 600,000 for SHA256 per OWASP 2023)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dkLen: Desired output length"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantage:"
      }), " FIPS-approved, widely available.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantage:"
      }), " Not memory-hard → trivial to parallelize on GPU (billions of hash/sec)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "password-hash-comparison",
      children: "Password Hash Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory-Hard"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GPU-Resistant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Configurable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PHC Winner"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "argon2id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (tunable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time/Memory/P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "New implementations"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "scrypt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (tunable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/r/p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cryptocurrency, legacy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "bcrypt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (fixed ~4KB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost factor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Systems with bcrypt only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PBKDF2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIPS compliance, legacy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Use argon2id with t=3, m=65536, p=4. Fallback to bcrypt cost=12."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-password-policies-nist-sp-800-63b-guidelines",
      children: "3.4 Password Policies (NIST SP 800-63B Guidelines)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Policy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Old Approach (Deprecated)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NIST 800-63B Approach"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8+ chars, mixed case"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MIN 8, recommend 15+"
            }), " → length > complexity"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Composition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must have upper, lower, digit, symbol"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NO composition rules"
            }), " → allow any printable ASCII"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Expiration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expire every 90 days"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No periodic expiration"
            }), " → only on compromise suspicion"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "History"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remember 24 previous passwords"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Check against known breach databases"
            }), " (HIBP)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow password hints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No hints, no security questions"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security questions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Out-of-band verification"
            }), " (email, SMS, authenticator)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rate limiting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rate-limit to 10 attempts in 2 minutes"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why no expiration?"
      }), " Research shows users choose weaker passwords and predictable patterns (Password1! -> Password2!) when forced to rotate. Only expire on known compromise, forgotten password, or idle > 60 days."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-linux-password-policies-passwd--chage",
      children: "3.5 Linux Password Policies (passwd / chage)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examining password status:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "chage -l username\n# Last password change                    : Jan 15, 2026\n# Password expires                        : Apr 15, 2026\n# Minimum number of days between change   : 7\n# Maximum number of days between change   : 90\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Setting password policies:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo chage -m 7 username     # Min days between changes\nsudo chage -M 90 username    # Max days before expiry\nsudo chage -W 14 username    # Warning period before expiry\nsudo chage -d 0 username     # Force password change on next login\nsudo chage -E 0 username     # Expire account immediately\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Password hashing on Linux:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# View hash type in /etc/shadow\nsudo cat /etc/shadow | grep username\n# $y$ = yescrypt, $6$ = SHA-512 (legacy), $2b$ = bcrypt, $argon2id$ = argon2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-hashcat-ntlm-hash-cracking-demo",
      children: "3.6 Hashcat NTLM Hash Cracking Demo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# NTLM hash format: username:RID:LM:NT:::\n# Administrator:500:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b7...\n# Hashcat mode 1000 = NTLM\nhashcat -m 1000 -a 0 hashes.txt /usr/share/wordlists/rockyou.txt\n\n# Rule-based attack\nhashcat -m 1000 -a 0 hashes.txt rockyou.txt -r /usr/share/hashcat/rules/best64.rule\n\n# Show cracked passwords\nhashcat -m 1000 --show hashes.txt\n\n# Performance: 28.3 GH/s on RTX 4090 for NTLM\n# 8-char NTLM cracked in ~15 minutes at full speed\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why this matters:"
      }), " NTLM has NO salt. A single RTX 4090 cracks NTLM at 28 GH/s. Mitigation: Use argon2id or bcrypt; disable NTLM; enforce 12+ char passwords."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unicode normalization:"
        }), " Normalize to NFKC before hashing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Password truncation:"
        }), " bcrypt truncates at 72 bytes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pepper:"
        }), " App-level secret stored outside database"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Timing attacks:"
        }), " Use constant-time comparison (HMAC of hashes)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Breach databases:"
        }), " Check against HIBP k-anonymity API"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-multi-factor-authentication-mfa",
      children: "4. Multi-Factor Authentication (MFA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MFA requires two or more ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "different"
      }), " authentication factors. 2FA uses exactly two."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Entering a high-security lab. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " PIN at door (know). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Badge swipe (have). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Fingerprint scan (are). All three must match."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-totp-time-based-otp--rfc-6238",
      children: "4.1 TOTP (Time-based OTP) → RFC 6238"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TOTP = HOTP(K, T)"
      }), " where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T = floor((time - T0) / X)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Server and client share secret ", (0,jsx_runtime.jsx)(_components.code, {
          children: "K"
        }), " (base32)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Both compute ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T = floor((time() - 0) / 30)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Both compute ", (0,jsx_runtime.jsx)(_components.code, {
          children: "HOTP(K, T)"
        }), " = HMAC-SHA1 + dynamic truncation"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Result truncated to 6-8 digits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User enters code; server verifies by computing same value"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Window of +/- 1 step for clock skew"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Time: 1740249600, T0: 0, Step: 30\nT = 58008320\nSecret base32: JBSWY3DPEHPK3PXP\nHMAC-SHA1 result -> dynamic truncation -> mod 10^6 = 123456\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(1) time, O(1) space → single HMAC computation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No internet after setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clock skew tolerance required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works offline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secret provisioning is single point of compromise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open standard (RFC 6238)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phishable if user enters code on fake site"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inexpensive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No origin binding"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      }), " Clock drift (>30s = all codes fail), secret compromise via QR shoulder-surfing, recovery codes needed for lost device."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-hotp-hmac-based-otp--rfc-4226",
      children: "4.2 HOTP (HMAC-based OTP) → RFC 4226"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "HOTP(K, C) = Truncate(HMAC-SHA1(K, C))"
      }), " where C is a counter."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No clock required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counter sync issues"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-generatable codes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server must maintain look-ahead window"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-totp-generator-in-powershell",
      children: "4.3 TOTP Generator in PowerShell"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "function ConvertFrom-Base32 {\n    param([string]$Base32)\n    $alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'\n    $b32 = $Base32 -replace '=', '' -replace ' ', ''\n    $bits = [System.Collections.BitArray]::new($b32.Length * 5)\n    $bitIdx = 0\n    foreach ($char in $b32.ToUpper().ToCharArray()) {\n        $val = $alphabet.IndexOf($char)\n        for ($j = 4; $j -ge 0; $j--) {\n            $bits[$bitIdx] = [bool]($val -band [Math]::Pow(2, $j))\n            $bitIdx++\n        }\n    }\n    $bytes = New-object byte[] ($bits.Length / 8)\n    for ($i = 0; $i -lt $bytes.Length; $i++) {\n        for ($j = 0; $j -lt 8; $j++) {\n            if ($bits[$i * 8 + $j]) { $bytes[$i] = [byte]($bytes[$i] -bor [Math]::Pow(2, 7 - $j)) }\n        }\n    }\n    return $bytes\n}\n\nfunction New-TOTPCode {\n    param(\n        [string]$Secret,\n        [int]$Digits = 6,\n        [int]$Step = 30,\n        [int]$Offset = 0\n    )\n    $hmac = [System.Security.Cryptography.HMACSHA1]::new()\n    $hmac.Key = ConvertFrom-Base32 -Base32 $Secret\n    $unixTime = [int][Math]::Floor((Get-Date -UFormat %s))\n    $timeStep = [Math]::Floor(($unixTime - 0) / $Step) + $Offset\n    $counterBytes = [byte[]]::new(8)\n    $val = [UInt64]$timeStep\n    for ($i = 7; $i -ge 0; $i--) {\n        $counterBytes[$i] = [byte]($val -band 0xFF)\n        $val = $val -shr 8\n    }\n    $hash = $hmac.ComputeHash($counterBytes)\n    $offset = $hash[19] -band 0x0F\n    $code = ([int](($hash[$offset] -band 0x7F) -shl 24) -bor\n             [int](($hash[$offset+1] -band 0xFF) -shl 16) -bor\n             [int](($hash[$offset+2] -band 0xFF) -shl 8) -bor\n             [int]($hash[$offset+3] -band 0xFF))\n    return ($code % [Math]::Pow(10, $Digits)).ToString(\"D$Digits\")\n}\n\n# Usage: New-TOTPCode -Secret \"JBSWY3DPEHPK3PXP\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-sms-and-push-mfa",
      children: "4.4 SMS and Push MFA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SMS:"
      }), " NIST deprecated as \"restricted\" (SP 800-63B). Risks: SIM swap, SS7 interception."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Push:"
      }), " Better than SMS (device binding + signature). Risk: Push fatigue → users approve without verifying."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-hardware-tokens-u2f--fido2--webauthn-passkeys",
      children: "4.5 Hardware Tokens (U2F / FIDO2 / WebAuthn Passkeys)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "U2F Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User --[login+password]--> Website\n  |<--challenge---[origin]-- User touches YubiKey\n  |---[signature]----------> Verify with public key\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "FIDO2 / WebAuthn Terms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WebAuthn:"
        }), " W3C browser API"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CTAP2:"
        }), " Client-to-Authenticator Protocol (USB/NFC/BLE)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FIDO2:"
        }), " WebAuthn + CTAP2"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Passkey:"
        }), " FIDO2 credential synced via iCloud/Google/1Password"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Passkey Registration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User clicks \"Create Passkey\""
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Browser sends ", (0,jsx_runtime.jsx)(_components.code, {
          children: "navigator.credentials.create({publicKey: {...}})"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authenticator generates keypair (sk, pk); private key never leaves device"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server stores pk + credential ID"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Passkey Authentication:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User clicks \"Sign in with Passkey\""
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Browser calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "navigator.credentials.get({publicKey: {...}})"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User authenticates via FaceID/fingerprint/PIN"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authenticator signs challenge with sk"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server verifies with pk → user is authenticated"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Security:"
      }), " Phishing-resistant (origin-bound), no shared secrets, device binding."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing-resistant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires hardware/platform support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No shared secrets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device loss = lockout (unless synced)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Passwordless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browser/OS fragmentation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-yubikey-fido2-setup",
      children: "4.6 YubiKey FIDO2 Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List connected YubiKeys\nykman list\n# Check FIDO2 status\nykman fido info\n# Set FIDO2 PIN\nykman fido access change-pin\n# Register for Linux login\npamu2fcfg -u $USER -o /etc/u2f_mappings\n# Add backup key\npamu2fcfg -u $USER -n -o /etc/u2f_mappings\n# Enable in PAM: /etc/pam.d/sudo: auth required pam_u2f.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mfa-method-comparison",
      children: "MFA Method Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Phishing Resistant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "User Experience"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Offline"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FIPS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FIDO2/Passkey"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free-$50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best (tap/biometric)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TOTP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free-$10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (type 6 digits)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Push"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best (tap approve)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SMS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (SIM swap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carrier cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (auto-fill)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hardware OTP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mn, {
                        children: "10"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "10-"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.7278em",
                      verticalAlign: "-0.0833em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "10"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "50"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (press button)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      }), " Device loss, SIM swap attacks, backup codes (store hashed), MFA for non-interactive service accounts (use cert-based auth)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-biometrics",
      children: "5. Biometrics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Car keyless entry. Reads fingerprint/face. Cannot lose like a key. Cannot change like a password."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-metrics",
      children: "5.1 Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FAR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False Accept Rate → impostor incorrectly accepted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FRR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False Reject Rate → legitimate user incorrectly rejected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EER"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equal Error Rate → where FAR == FRR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FTC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failure to Capture → system cannot capture input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FTE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failure to Enroll → system cannot create template"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FAR/FRR Trade-off:"
      }), " Lower threshold = lower FRR (fewer rejections) but higher FAR (more false accepts). EER is the single comparison point."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-types",
      children: "5.2 Types"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fingerprint:"
      }), " FAR ~0.001%, FRR ~2-5%, EER ~2%. Spoofable with gelatin copies."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Face:"
      }), " FAR ~0.0001%, FRR ~1-3%, EER ~0.5%. Challenges: twins, masks, lighting, adversarial glasses."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Iris:"
      }), " FAR ~0.00001%, FRR ~0.1-1%, EER ~0.01%. Most accurate. Requires cooperative user close to camera."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biometric-comparison",
      children: "Biometric Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fingerprint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Face"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Iris"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Voice"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FAR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.001%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0001%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00001%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EER"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.01%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3-5%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spoof Risk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Revocability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (10 fingers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (1 face)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (2 irises)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Privacy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      }), " Liveness detection (blink, smile challenge), biometric revocation impossible, demographic bias in training data, twins, medical changes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-single-sign-on-sso",
      children: "6. Single Sign-On (SSO)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Concert wristband. Show ID once at entrance, wristband lets you enter any area without re-identifying."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSO Flow (SAML):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User requests SP resource (e.g., Salesforce)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SP redirects to IdP (e.g., Okta)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User authenticates at IdP (password + MFA)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IdP issues signed assertion to SP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SP validates signature, creates session"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sso-models",
      children: "SSO Models"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Centralized"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single IdP for all apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Okta, Azure AD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Federated"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-org IdP trust"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAML federation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Social"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google/Facebook login"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth + OIDC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cross-domain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared cookies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Fewer passwords, centralized MFA, centralized deprovisioning, lower helpdesk costs.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Single point of failure, one compromised IdP = all apps compromised, complex troubleshooting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-saml-20",
      children: "7. SAML 2.0"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Notarized document. IdP = notary who verifies identity and stamps assertion. SP trusts the stamp."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "components",
      children: "Components"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IdP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authenticates users, issues assertions (Okta, Azure AD, Keycloak)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trusts assertions, provides service (Salesforce, Workday, AWS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Assertion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML: authentication statement + attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Metadata"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML config: endpoints, certs, bindings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Binding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transport: HTTP Redirect, HTTP POST, Artifact"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "saml-sp-initiated-flow",
      children: "SAML SP-Initiated Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["User navigates to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://app.example.com/dashboard"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SP generates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<AuthnRequest>"
        }), ", redirects browser to IdP"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IdP challenges user for credentials (password + MFA)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["IdP generates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<Response>"
        }), " with signed ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<Assertion>"
        }), " containing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<Subject>"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<Conditions>"
        }), " (validity window, audience), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<AttributeStatement>"
        }), " (email, roles), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<AuthnStatement>"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Browser auto-POSTs assertion to SP's ACS URL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SP validates signature, extracts attributes, creates session"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "assertion-xml-structure",
      children: "Assertion XML Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<samlp:Response ...>\n  <saml:Issuer>https://idp.company.com</saml:Issuer>\n  <saml:Assertion>\n    <saml:Subject>\n      <saml:NameID>user@company.com</saml:NameID>\n    </saml:Subject>\n    <saml:Conditions NotBefore=\"2026-01-15T14:29:00Z\"\n                     NotOnOrAfter=\"2026-01-15T14:35:00Z\">\n      <saml:AudienceRestriction>\n        <saml:Audience>https://app.example.com</saml:Audience>\n      </saml:AudienceRestriction>\n    </saml:Conditions>\n  </saml:Assertion>\n</samlp:Response>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "openssl-certificate-for-saml-signing",
      children: "OpenSSL Certificate for SAML Signing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Generate key\nopenssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:2048 -out saml-signing.key\n# Generate self-signed cert\nopenssl req -new -x509 -key saml-signing.key -out saml-signing.crt \\\n  -days 1825 -subj \"/C=US/O=Company Inc/CN=saml-signing\"\n# Sign metadata\nopenssl dgst -sha256 -sign saml-signing.key -out request.sig request.xml\n# Verify\nopenssl dgst -sha256 -verify saml-signing.pub -signature request.sig request.xml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "saml-security",
      children: "SAML Security"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XML Signature Wrapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate entire XML tree, not just signature"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clock skew"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow max 5 min drift"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assertion replay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track unique assertion IDs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Audience restriction"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SP validates ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<Audience>"
            }), " matches its entity ID"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-oauth-20",
      children: "8. OAuth 2.0"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Valet parking ticket. Valet (client) gets token to park car (access) but NOT open trunk (scoped). Token expires."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-core-concepts",
      children: "8.1 Core Concepts"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resource Owner"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User who owns data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Car owner"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Client"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App requesting access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authorization Server"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Issues tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parking company"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resource Server"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hosts protected data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parking garage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access Token"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credential for resource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valet ticket"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limits token actions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Park only\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-grant-types",
      children: "8.2 Grant Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "authorization-code--pkce-best-for-webmobilespas",
      children: "Authorization Code + PKCE (Best for web/mobile/SPAs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client generates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "state"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "code_verifier"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "code_challenge = SHA256(verifier)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Redirect to AS: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?response_type=code&client_id=...&redirect_uri=...&state=...&code_challenge=..."
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User authenticates, consents"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["AS redirects to redirect_uri with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?code=AUTH_CODE&state=STATE"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client POSTs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "code + code_verifier"
        }), " to token endpoint"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["AS verifies ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SHA256(verifier) == challenge"
        }), ", returns access_token + refresh_token"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PKCE prevents"
      }), " authorization code interception → attacker with code cannot exchange without verifier."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "client-credentials-machine-to-machine",
      children: "Client Credentials (Machine-to-Machine)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /token\ngrant_type=client_credentials&client_id=ID&client_secret=SECRET\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use case:"
      }), " Backend service calling another service. No user involved."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implicit-deprecated",
      children: "Implicit (Deprecated)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Token returned directly in URL fragment. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Risks:"
      }), " Browser history, referrer headers, JS error logging."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ropc-deprecated",
      children: "ROPC (Deprecated)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Password sent to client, exchanged for token. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Risks:"
      }), " Client sees password, no MFA support."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "device-authorization-tvs-cli-iot",
      children: "Device Authorization (TVs, CLI, IoT)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Device requests code: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "POST /devicecode"
        }), " -> returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "user_code"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "verification_uri"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User visits URL on phone, enters code, authenticates"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Device polls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/token"
        }), " every 5s until authorized"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "grant-types-comparison",
      children: "Grant Types Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Grant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "User Present"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MFA Support"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Secure"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Auth Code + PKCE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web, mobile, SPA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Auth Code"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-side web"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Implicit"
            }), " (depr)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy SPA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Client Credentials"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API-to-API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (machine)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ROPC"
            }), " (depr)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy migration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Device"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TV, CLI, IoT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (secondary)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-oauth-20-with-curl--pkce",
      children: "8.3 OAuth 2.0 with curl + PKCE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "CLIENT_ID=\"your-client-id\"\nREDIRECT_URI=\"https://localhost:8080/callback\"\nAUTH=\"https://auth.example.com/authorize\"\nTOKEN=\"https://auth.example.com/token\"\n\n# Generate PKCE\nCODE_VERIFIER=$(openssl rand -base64 48 | tr -d '/+=' | cut -c1-64)\nCODE_CHALLENGE=$(printf '%s' \"$CODE_VERIFIER\" | openssl dgst -sha256 -binary | openssl base64 -A | tr '/+' '_-' | tr -d '=')\nSTATE=$(openssl rand -hex 16)\n\necho \"Open: $AUTH?response_type=code&client_id=$CLIENT_ID&redirect_uri=$REDIRECT_URI&state=$STATE&code_challenge=$CODE_CHALLENGE&code_challenge_method=S256\"\n\n# After user authenticates, paste auth code:\nread -p \"Auth code: \" AUTH_CODE\n# Exchange\ncurl -X POST \"$TOKEN\" -d \"grant_type=authorization_code&code=$AUTH_CODE&redirect_uri=$REDIRECT_URI&client_id=$CLIENT_ID&code_verifier=$CODE_VERIFIER\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-oauth-security",
      children: "8.4 OAuth Security"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSRF"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Random ", (0,jsx_runtime.jsx)(_components.code, {
              children: "state"
            }), " parameter, validate on return"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code interception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCE code_verifier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redirect manipulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strict URI registration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token theft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short TTL (1h), TLS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope elevation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server validates against client registration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-openid-connect-oidc",
      children: "9. OpenID Connect (OIDC)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " OAuth 2.0 = valet ticket (access to car). OIDC = ID card on top that says who you are."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OIDC = OAuth 2.0 + Identity Layer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "id-token-jwt",
      children: "ID Token (JWT)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"iss\": \"https://accounts.google.com\",\n  \"sub\": \"1234567890\",\n  \"aud\": \"client-id-123.apps.googleusercontent.com\",\n  \"exp\": 1740249600,\n  \"iat\": 1740246000,\n  \"nonce\": \"n-0S6_WzA2Mj\",\n  \"name\": \"John Doe\",\n  \"email\": \"john@example.com\",\n  \"email_verified\": true\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "flow",
      children: "Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User --[scope=openid]--> AS\n   |<--- ID Token (JWT) -- sub, name, email\n   |<--- Access Token ---- call UserInfo endpoint\n   |---[Access Token]--> UserInfo endpoint\n   |<---[JSON claims]---- more attributes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "saml-vs-oauth-vs-oidc",
      children: "SAML vs OAuth vs OIDC"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SAML 2.0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OAuth 2.0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OIDC"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise SSO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delegated authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auth + delegated auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Format"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML + signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON + Bearer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JWT + JSON"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "User Info"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In assertion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource Server API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID Token + UserInfo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mobile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "API Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Domain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B2B Enterprise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B2C/B2B APIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer + Enterprise"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-jwt",
      children: "10. JWT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Tamper-evident envelope. Name/address visible (header + payload base64). Wax seal (signature) proves no tampering."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "structure",
      children: "Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "base64url(Header) . base64url(Payload) . Signature\n\nHeader:  {\"alg\":\"RS256\",\"typ\":\"JWT\"}\nPayload: {\"sub\":\"user123\",\"iat\":1740246000,\"exp\":1740249600,\"iss\":\"auth.example.com\",\"aud\":\"api.example.com\"}\nSignature = RSASHA256(base64url(Header) + \".\" + base64url(Payload), privateKey)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jwt-generation-and-validation",
      children: "JWT Generation and Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Generate RSA key pair\nopenssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:2048 -out jwt-private.pem\nopenssl pkey -in jwt-private.pem -pubout -out jwt-public.pem\n\n# Create header and payload\nHEADER='{\"alg\":\"RS256\",\"typ\":\"JWT\"}'\nPAYLOAD='{\"sub\":\"1234567890\",\"name\":\"John Doe\",\"iat\":1740246000,\"exp\":1740249600}'\n\n# Base64URL encode\nB64_HEADER=$(printf '%s' \"$HEADER\" | openssl base64 -A | tr '/+' '_-' | tr -d '=\\n')\nB64_PAYLOAD=$(printf '%s' \"$PAYLOAD\" | openssl base64 -A | tr '/+' '_-' | tr -d '=\\n')\nSIGNING_INPUT=\"$B64_HEADER.$B64_PAYLOAD\"\n\n# Sign\nSIGNATURE=$(printf '%s' \"$SIGNING_INPUT\" | openssl dgst -sha256 -sign jwt-private.pem | openssl base64 -A | tr '/+' '_-' | tr -d '=\\n')\nJWT=\"$SIGNING_INPUT.$SIGNATURE\"\necho \"$JWT\"\n\n# Verify\necho \"$JWT\" | cut -d. -f3 | tr '_-' '/+' | openssl base64 -d -A > sig.bin\nprintf '%s' \"$(echo \"$JWT\" | cut -d. -f1-2)\" | openssl dgst -sha256 -verify jwt-public.pem -signature sig.bin\n# Output: Verified OK\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jwt-security-attacks",
      children: "JWT Security Attacks"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "alg=none"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reject tokens with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"alg\":\"none\""
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "alg confusion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reject HS256 when expecting RS256"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key confusion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate keystores per algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Token replay"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Short TTL, include ", (0,jsx_runtime.jsx)(_components.code, {
              children: "jti"
            }), " for revocation"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Weak secret"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use RSA/ECDSA; minimum 256-bit HMAC key"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-rbac-vs-abac-vs-rebac",
      children: "11. RBAC vs ABAC vs ReBAC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RBAC:"
        }), " Library cards. Student card, Faculty card, Visitor card. Card type determines access."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ABAC:"
        }), " Nightclub rules. \"Age > 21 AND VIP member AND dress code = formal AND time < 2AM.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ReBAC:"
        }), " Office building. \"Alice can enter room 301 because Bob granted her access.\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-rbac-nist-incits-359",
      children: "11.1 RBAC (NIST INCITS 359)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define roles: Admin, Manager, Engineer, Viewer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign permissions to roles: Engineer = read/write code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign users to roles: Alice -> Engineer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optional hierarchy: Admin inherits Manager inherits Engineer"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE roles (id SERIAL PRIMARY KEY, name VARCHAR(100) UNIQUE);\nCREATE TABLE permissions (id SERIAL PRIMARY KEY, resource VARCHAR(200), action VARCHAR(50));\nCREATE TABLE role_permissions (role_id INT, permission_id INT, PRIMARY KEY (role_id, permission_id));\nCREATE TABLE user_roles (user_id INT, role_id INT, PRIMARY KEY (user_id, role_id));\n\n-- Check: user 42 delete document:finance:report?\nSELECT EXISTS (\n  SELECT 1 FROM user_roles ur\n  JOIN role_permissions rp ON ur.role_id = rp.role_id\n  JOIN permissions p ON rp.permission_id = p.id\n  WHERE ur.user_id = 42 AND p.resource = 'document:finance:report' AND p.action = 'delete'\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to understand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Role explosion (hundreds of narrow roles)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to audit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static → no time/location expressions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Well-supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission creep over time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coarse-grained"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-abac-nist-sp-800-162",
      children: "11.2 ABAC (NIST SP 800-162)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Access allowed if ALL of:\n  1. user.department == resource.owner_department\n  2. user.clearance >= resource.classification\n  3. environment.time BETWEEN \"09:00\" AND \"17:00\"\n  4. environment.network == \"corporate-vpn\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-grained access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex policy management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic (time, location, risk)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expensive policy evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No role explosion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard to audit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context-aware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tooling maturity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-rebac-relationship-based",
      children: "11.3 ReBAC (Relationship-Based)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Used in Google Drive, GitHub, Slack, Facebook. Access based on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "relationships"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example (Google Drive):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "File \"Budget.xlsx\": Owner=Alice, Editor=Bob, Viewer=Charlie, Team=Engineering\nCan Dave access? -> If Dave in Engineering -> YES\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Google Zanzibar"
      }), " (USENIX ATC 2019): Global-scale ReBAC."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Tuple: (object, relation, user)\n(doc:budget-2026, viewer, team:engineering#member)\n(team:engineering, member, user:dave)\nCheck(doc:budget-2026, viewer, user:dave) -> true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural for social structures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex at scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supports delegation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive resolution expensive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Global scale (Zanzibar)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency challenges"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-table",
      children: "Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RBAC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ABAC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ReBAC"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Policy Basis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Role membership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relationships"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Granularity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dynamic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semi-dynamic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Admin Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Eval Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(d) depth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best For"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud, IoT, fine-grained"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social, sharing apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Examples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS IAM roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3 bucket policies, Azure CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google Drive, GitHub"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Standards"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIST INCITS 359"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIST SP 800-162, XACML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zanzibar (OpenFGA)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-ldap",
      children: "12. LDAP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Company phone directory. Look up a person (DN) and find details (attributes). LDAP is the protocol for querying/modifying this directory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-concepts",
      children: "12.1 Concepts"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distinguished Name (unique path)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cn=John Doe,ou=Engineering,dc=company,dc=com"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RDN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entry name within parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cn=John Doe"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OU"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Organizational Unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ou=Engineering"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain Component"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dc=company, dc=com"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cn=John Doe"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Base DN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search starting point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dc=company,dc=com"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-directory-structure",
      children: "12.2 Directory Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "dc=company,dc=com\n +-- ou=People\n |    +-- cn=Alice Smith (uid=alice, mail=alice@company.com, department=Engineering)\n |    +-- cn=Bob Jones (uid=bob, mail=bob@company.com)\n +-- ou=Groups\n |    +-- cn=Engineering (member: cn=Alice Smith, cn=Bob Jones)\n +-- ou=Servers\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-ldap-search-with-ldapsearch",
      children: "12.3 LDAP Search with ldapsearch"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Simple search\nldapsearch -H ldap://ldap.company.com:389 -x \\\n  -D \"cn=admin,dc=company,dc=com\" -W \\\n  -b \"dc=company,dc=com\" \\\n  \"(uid=alice)\" cn mail department\n\n# With LDAPS (TLS)\nldapsearch -H ldaps://ldap.company.com:636 -x \\\n  -D \"cn=admin,dc=company,dc=com\" -W \\\n  -b \"ou=Engineering,dc=company,dc=com\" \\\n  \"(&(objectClass=inetOrgPerson)(mail=*@company.com))\"\n\n# Common filters:\n# All people:                     (objectClass=inetOrgPerson)\n# Specific user:                  (uid=jdoe)\n# Department:                     (department=Engineering)\n# AND:                            (&(department=Engineering)(title=Manager))\n# OR:                             (|(department=Engineering)(department=Sales))\n# NOT:                            (!(title=Intern))\n# Existence:                      (mail=*)\n\n# Count users\nldapsearch -H ldap://ldap.company.com -x \\\n  -D \"cn=admin,dc=company,dc=com\" -W \\\n  -b \"dc=company,dc=com\" \"(objectClass=user)\" dn | grep \"^dn:\" | wc -l\n\n# Paginated search\nldapsearch ... -E pr=500/noprompt \"(objectClass=user)\" dn\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "124-ldif-importexport",
      children: "12.4 LDIF (Import/Export)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ldif",
        children: "dn: cn=Alice Smith,ou=People,dc=company,dc=com\nobjectClass: inetOrgPerson\ncn: Alice Smith\nuid: alice\nmail: alice@company.com\ndepartment: Engineering\nuserPassword: {SSHA}encryptedHash\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Import\nldapadd -H ldap://ldap.company.com -x -D \"cn=admin,dc=company,dc=com\" -W -f new-user.ldif\n# Export\nldapsearch -H ldap://ldap.company.com -x -D \"cn=admin,dc=company,dc=com\" -W \\\n  -b \"dc=company,dc=com\" -L \"(objectClass=inetOrgPerson)\" > export.ldif\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-active-directory",
      children: "13. Active Directory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Central HR system. Knows every employee, title (group), floor access (permissions), manager (hierarchy). AD = Microsoft's LDAP + Kerberos + DNS + GPOs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "131-ad-components",
      children: "13.1 AD Components"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Domain Controller"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server running AD DS, authenticates users, stores NTDS.DIT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Domain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security boundary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Forest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collection of domains with shared schema"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OU"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container for objects, GPO application"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GPO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group Policy Object (password policy, software, desktop config)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security Group"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain Local (single domain), Global (usable across domains), Universal (forest-wide)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "132-windows-ad-powershell",
      children: "13.2 Windows AD PowerShell"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "Import-Module ActiveDirectory\n\n# Create OU\nNew-ADOrganizationalUnit -Name \"Engineering\" -Path \"DC=company,DC=com\"\n\n# Create user\nNew-ADUser -Name \"Alice Smith\" -GivenName Alice -Surname Smith `\n  -SamAccountName \"alice.smith\" -UserPrincipalName \"alice.smith@company.com\" `\n  -Title \"Senior Engineer\" -Department \"Engineering\" `\n  -Path \"OU=Engineering,DC=company,DC=com\" `\n  -AccountPassword (ConvertTo-SecureString \"TempP@ss123!\" -AsPlainText -Force) `\n  -Enabled $true\n\n# Create group and add member\nNew-ADGroup -Name \"Engineering-Global\" -GroupScope Global -GroupCategory Security `\n  -Path \"OU=Groups,DC=company,DC=com\"\nAdd-ADGroupMember -Identity \"Engineering-Global\" -Members \"alice.smith\"\n\n# List all users with properties\nGet-ADUser -Filter * -Properties Department, Title, LastLogonDate |\n    Select-Object Name, SamAccountName, Department, LastLogonDate | Format-Table\n\n# Find inactive users (90 days)\n$cutoff = (Get-Date).AddDays(-90)\nGet-ADUser -Filter {LastLogonDate -lt $cutoff -and Enabled -eq $true} -Properties LastLogonDate\n\n# Disabled users\nSearch-ADAccount -AccountDisabled -UsersOnly\n\n# Domain Admin members\nGet-ADGroupMember -Identity \"Domain Admins\" | Select-Object Name, SamAccountName\n\n# Delegate control (reset passwords)\ndsacls \"OU=Engineering,DC=company,DC=com\" /G \"company\\Helpdesk:CA;Reset Password;user\"\n\n# Create gMSA (auto password rotation)\nNew-ADServiceAccount -Name \"SVC-WebApp\" -DNSHostName \"webapp.company.com\" `\n  -PrincipalsAllowedToRetrieveManagedPassword \"Engineering-Global\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "133-ad-security-best-practices",
      children: "13.3 AD Security Best Practices"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Practice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Least privilege"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No permanent Domain Admin; use JIT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tier 0/1/2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate admin per tier (DC, server, workstation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Monitor Tier 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alert on non-DC querying AdminCount"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "KRBTGT rotation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rotate twice after domain admin compromise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Monitor events"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4624 (logon), 4732 (group member), 4740 (lockout), 5136 (LDAP modify)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-kerberos",
      children: "14. Kerberos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Convention badge system. Check in at front desk (AS) -> get badge (TGT). Show badge at session desk (TGS) -> get session pass (Service Ticket). Show pass at door (Service)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "141-components",
      children: "14.1 Components"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "KDC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key Distribution Center = AS + TGS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication Server → validates credentials, issues TGT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TGS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ticket Granting Service → issues service tickets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TGT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ticket Granting Ticket → proves authentication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ST"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service Ticket → for specific service"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Principal"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Unique identity: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "user@REALM"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "HTTP/server.company.com@REALM"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Realm"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Kerberos domain: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPANY.COM"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "142-authentication-flow",
      children: "14.2 Authentication Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. AS-REQ: Client -> AS (\"I am Alice\")\n2. AS-REP: AS -> Client (TGT encrypted with KDC key + Session Key SK1 encrypted with Alice's key)\n3. TGS-REQ: Client -> TGS (TGT + Authenticator[SK1] + \"I want Service X\")\n4. TGS-REP: TGS -> Client (Service Ticket encrypted with Service's key + SK2)\n5. AP-REQ: Client -> Service (ST + Authenticator[SK2])\n6. AP-REP: Service -> Client (timestamp for mutual auth)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Points:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["TGT encrypted with KDC's key → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "client cannot decrypt TGT"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Service Ticket encrypted with service's key → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "client cannot decrypt ST"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Session keys are what client actually uses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mutual authentication: service proves it knows its own key"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "143-kerberos-kinit--klist",
      children: "14.3 Kerberos kinit / klist"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Obtain TGT\nkinit alice@COMPANY.COM\n# Enter password: ********\n\n# View tickets\nklist\n# Ticket cache: FILE:/tmp/krb5cc_1000\n# Default principal: alice@COMPANY.COM\n# Valid starting       Expires              Service principal\n# 01/15/2026 14:30:00  01/16/2026 00:30:00  krbtgt/COMPANY.COM@COMPANY.COM\n\n# Verbose with flags\nklist -Ave\nklist -f   # F=Forwardable, R=Renewable, I=Initial, A=Pre-authenticated\n\n# Renew TGT\nkinit -R\n\n# Request specific service ticket (automatic, but can pre-fetch)\nkvno HTTP/webserver.company.com\n\n# Use keytab for automation\nkinit -k -t /etc/krb5.keytab svc-webapp@COMPANY.COM\n\n# Destroy tickets (logout)\nkdestroy\n\n# Configuration\ncat /etc/krb5.conf\n# [libdefaults]\n#   default_realm = COMPANY.COM\n#   ticket_lifetime = 24h\n#   renew_lifetime = 7d\n#   forwardable = true\n# [realms]\n#   COMPANY.COM = { kdc = dc01.company.com }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "144-kerberos-windows",
      children: "14.4 Kerberos Windows"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "klist                    # View tickets\nklist get HTTP/webserver # Request service ticket\nklist purge              # Purge all tickets\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kerberos-attacks",
      children: "Kerberos Attacks"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kerberoasting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request TGS for service account, crack hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25+ char service passwords, gMSA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AS-REP Roasting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User without pre-auth, crack AS-REP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable pre-authentication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Golden Ticket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forge TGT with stolen KRBTGT hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rotate KRBTGT after compromise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Silver Ticket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forge service ticket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limit service account privileges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pass-the-Ticket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replay captured TGT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor anomalous access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DCSync"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replicate credentials via MS-DRSR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restrict Replication privilege"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-zero-trust-identity",
      children: "15. Zero Trust Identity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Spy movie nightclub. Every door has a separate guard who independently verifies identity. No \"inside = safe\" assumption."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "151-principles-nist-sp-800-207",
      children: "15.1 Principles (NIST SP 800-207)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Never trust, always verify"
        }), " → every request authenticated and authorized"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assume breach"
        }), " → design for compromise, limit blast radius"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Least privilege"
        }), " → minimum access necessary, time-bound"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Micro-segmentation"
        }), " → all communication encrypted and authenticated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Continuous validation"
        }), " → re-evaluate trust at every request"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "152-google-beyondcorp",
      children: "15.2 Google BeyondCorp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No VPN"
        }), " → all access via internet, no corporate network boundary"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Device Inventory"
        }), " → every device tracked, must be managed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Access Proxy"
        }), " → IAP (Identity-Aware Proxy) in front of all apps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trust scoring"
        }), " → device state + user identity + context -> access decision"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User --[Managed Device + SSO]--> Internet --[IAP]--> App\n                                     |\n                               Policy: user=alice, device=managed, OS=up-to-date\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "153-zta-architecture",
      children: "15.3 ZTA Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User on managed device requests App access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Control Plane queries Policy Engine: user, device health, location, time"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Policy evaluates: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "User.alice + Device.compliant + Time.biz_hours -> PERMIT"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy Administrator issues short-lived access token"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data Plane (Gateway) validates token"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gateway proxies to App 1 with JWT assertion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "App validates JWT, allows access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Token expires in 15 min; continuous re-evaluation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zta-vs-traditional-vpn",
      children: "ZTA vs Traditional VPN"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traditional VPN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Zero Trust"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trust"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inside = trusted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No implicit trust"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Corporate LAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet-only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-app authorization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Device Check"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Posture assessment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lateral Movement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy inside"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Micro-segmentation prevents"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-privileged-access-management-pam",
      children: "16. Privileged Access Management (PAM)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Bank vault with dual-control. Two managers each insert key simultaneously. Neither opens alone. Vault logs who, when, and why."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "161-pam-concepts",
      children: "16.1 PAM Concepts"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Privileged Account"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root, Domain Admin, service account"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PAM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solutions and controls for privileged accounts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Vault"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypted credential repository"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Session Manager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Records/monitors privileged sessions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Check-out/-in"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary credential retrieval and return"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "162-flow",
      children: "16.2 Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User --[Request elevation]--> PAM\n   |--- Policy check: authorized? Time? Justification? Approver?\n   |--- [APPROVED] Vault releases credential, session recorded\n   |--- [DENIED] Access denied, logged\n   |--- On check-in: credential rotated, session stored, audit complete\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "163-pam-best-practices",
      children: "16.3 PAM Best Practices"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Practice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Vaulting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypted storage, never hardcoded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Credential rotation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-rotate after check-in"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Session recording"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keystroke + video recording"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "JIT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elevate only when needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Approval workflows"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manager required for privileged access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Break-glass"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Emergency accounts, monitored and alerted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "gMSA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto password rotation for service accounts"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17-just-in-time-jit-access",
      children: "17. Just-in-Time (JIT) Access"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Conference room booking. 4-digit code works only during booked 2-hour slot. Cannot enter before/after. Code expires after use."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jit-vs-standing-privileges",
      children: "JIT vs Standing Privileges"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Standing Privileges"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "JIT"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permanent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-bound (hours)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Activation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always active"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-demand"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Approval"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Audit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard to track use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every elevation logged"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Risk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent surface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporal reduction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "JIT Elevation Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Engineer requests root for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prod-web01"
        }), " (reason: deploy hotfix APP-4321)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PAM checks: member of on-call group AND within business hours"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PAM provisions temporary credential (valid 4h)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PAM adds user to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sudo.prod-web01"
        }), " group"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After 4h, PAM removes group membership, rotates SSH key"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18-session-management",
      children: "18. Session Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Hotel key card. Check-in/out dates (session start/expiry). Extending requires front desk (re-auth). Card works only for your floor (scope)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "181-lifecycle",
      children: "18.1 Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CREATION --> ACTIVE --> EXPIRATION --> TERMINATION\n    |                            |\n    +------ IDLE TIMEOUT -------+\n    +------ RE-AUTH ------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "182-session-token-vs-jwt",
      children: "18.2 Session Token vs JWT"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Session Token"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "JWT"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-side (Redis/DB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-side (cookie/storage)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Revocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard (valid until expiry)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small (16-32 bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large (1-2 KB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared store needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any server validates"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "183-best-practices",
      children: "18.3 Best Practices"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Practice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Secure cookie"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Secure"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "HttpOnly"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SameSite=Lax"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Session ID entropy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128+ bits, CSPRNG"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Expiry"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15-30 min idle; 8-24h absolute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sliding expiration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reset on activity; don't extend absolute max"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Refresh token rotation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalidate old on each use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Device fingerprint"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP, User-Agent, TLS fingerprint binding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrent sessions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max 10 per user"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Re-auth for sensitive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password/MFA for password change, 2FA disable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "19-case-studies",
      children: "19. Case Studies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-1-okta-2022--lapsus-breach",
      children: "Case Study 1: Okta 2022 → LAPSUS$ Breach"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Timeline:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jan 2022:"
        }), " LAPSUS$ targets Okta customer support system"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jan 21:"
        }), " Attacker accesses a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "third-party support engineer's"
        }), " Okta account"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jan 21-27:"
        }), " Attacker uses ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SUPERUSER.AccessAdmin"
        }), " role in support system"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mar 1:"
        }), " Okta discloses: 366 customers affected (~2.5% of customer base)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mar 22:"
        }), " Root cause analysis published"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Vector:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Third-party support engineer (Sitel/OneLogin employee) used personal Google account"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google account contained Okta credentials/session tokens for support portal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LAPSUS$ obtained access via credential theft / SIM swap"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Support portal had ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "superuser"
        }), " access level → could impersonate any customer admin"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MFA was NOT enforced"
        }), " on the third-party syslog access"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No MFA enforcement"
        }), " on third-party support accounts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-privileged accounts:"
        }), " Superuser role could view/reset any customer's admin credentials"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Third-party risk:"
        }), " Sitel had no device management or account controls"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delayed detection:"
        }), " 5 weeks between intrusion and disclosure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Cloudflare, BeyondTrust, CrowdStrike affected. Okta stock dropped ~12%."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remediation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardened third-party access:"
        }), " Mandatory FIDO2 hardware keys for privileged access"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MFA enforcement:"
        }), " Required for ALL support personnel"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Session controls:"
        }), " 1-hour timeout, no persistent sessions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Least privilege:"
        }), " Support = read-only by default; escalation requires approval"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Third-party device policy:"
        }), " Managed devices with EDR required"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Third-party security IS your security"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Superuser accounts must be time-bound with break-glass approval"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FIDO2 prevents session cookie theft (origin-bound credentials)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zero Trust for ALL privileged access, including support systems"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-2-solarwinds-mfa-bypass--orion-build-pipeline",
      children: "Case Study 2: SolarWinds MFA Bypass → Orion Build Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Timeline:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jan 2019:"
        }), " Initial compromise of SolarWinds internal systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sep 2019:"
        }), " Attacker injects SUNBURST backdoor into Orion build process"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mar 2020:"
        }), " Malicious update signed with valid SolarWinds code signing certificate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jun 2020:"
        }), " Updates pushed to 18,000 customers (govt agencies, Fortune 500)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dec 8, 2020:"
        }), " FireEye discloses SUNBURST"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dec 13, 2020:"
        }), " SolarWinds discloses supply chain attack"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MFA Bypass Vector:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build agents (TeamCity) used ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "standalone Windows accounts"
        }), " with local admin"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["These accounts had ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NO MFA"
        }), " (machine accounts cannot do interactive MFA)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attacker compromised build system, stole build agent credentials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Injected code into build process → code signing certs on same server"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why MFA Did Not Help:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build agents are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "non-interactive"
        }), " → cannot respond to MFA prompts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["This was a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "pipeline compromise"
        }), ", not a user login"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The attacker never authenticated as a human user"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MFA protects logins, not build pipelines"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MFA not applicable"
        }), " to non-human accounts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signing keys co-located"
        }), " with compilation server → no separation of duties"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Build pipeline integrity"
        }), " → no attestation or reproducible builds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code review blind spot"
        }), " → injected code looked legitimate"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remediations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Separation of duties:"
        }), " Build server != signing server; HSM for signing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Build attestation:"
        }), " SBOM for all artifacts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pipeline integrity:"
        }), " Immutable logs, signed commits"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HSM signing:"
        }), " Hardware Security Module for code signing keys"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NIST SP 800-218 (SSDF):"
        }), " Secure Software Development Framework mandate"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MFA protects humans, NOT non-human accounts (service accounts, build agents, API tokens)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identity includes machine identity and software identity (code signing, attestation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build pipeline trust must be cryptographically verifiable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-3-microsoft-2024--midnight-blizzard-nation-state-attack",
      children: "Case Study 3: Microsoft 2024 → Midnight Blizzard Nation-State Attack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Timeline:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nov 2023:"
        }), " Midnight Blizzard (APT29/Cozy Bear) begins password spray"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Late Nov 2023:"
        }), " Password spray against Microsoft ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "corporate test tenant"
        }), " accounts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jan 2024:"
        }), " Microsoft detects breach, discloses"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mar 2024:"
        }), " Confirms access to senior leadership email + source code repos"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Vector (Password Spray + Token Theft):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1 → Password Spray:"
      }), " Attacker sprayed passwords against a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "non-production test tenant"
      }), ". Legacy test account compromised."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2 → Token Theft:"
      }), " Compromised account had OAuth apps with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "delegated permissions"
      }), " granting access to corporate email."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 3 → Pivot:"
      }), " Attacker accessed C-suite, cybersecurity, and legal email via OAuth tokens."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 4 → Source Code:"
      }), " OAuth permissions also allowed access to source code repositories."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why MFA / Identity Controls Failed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test tenants exempt"
        }), " from baseline policies (no MFA, no Conditional Access)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OAuth token theft:"
        }), " Stolen ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "tokens"
        }), " are valid until expiry → MFA at login doesn't help"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excessive OAuth permissions:"
        }), " Legacy app had ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mail.read"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Sites.Read.All"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No token binding:"
        }), " Tokens not bound to device or location"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inconsistent policy enforcement:"
        }), " Test tenant had no MFA"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OAuth token theft:"
        }), " Tokens are bearer tokens → possession = access"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detection delay:"
        }), " Password spray in November, not detected until January"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remediations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardened test tenants:"
        }), " MFA + Conditional Access enforced everywhere"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OAuth token lifetime reduction:"
        }), " Shorter TTLs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Token Binding (CFT):"
        }), " Cryptographically bind tokens to device"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detection:"
        }), " Atypical IP + new client ID patterns for OAuth theft detection"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration drift:"
        }), " Non-production environments with weaker security are entry points"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Token theft is the new perimeter:"
        }), " MFA does not help against stolen tokens"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Continuous token validation:"
        }), " Short TTLs, evaluate risk continuously"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Token binding:"
        }), " DPoP (RFC 9449) → Demonstrating Proof of Possession"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scoped access:"
        }), " Minimal OAuth scopes per application"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-studies-summary",
      children: "Case Studies Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Okta 2022"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SolarWinds"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Midnight Blizzard"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Threat Actor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LAPSUS$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNC2452 (Russian APT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Midnight Blizzard (APT29)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Third-party credential theft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build pipeline compromise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password spray on test tenant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IAM Failure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No MFA for third-party support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MFA not applicable to build agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No MFA on test tenant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Escalation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Superuser excessive access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Co-located signing keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth token theft, excessive permissions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weeks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Months (Mar-Dec 2020)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Months (Nov 2023-Jan 2024)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "366 customers exposed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18,000 organizations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C-suite email + source code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Mitigation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2 for privileged access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HSM signing, separated build/sign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device-bound tokens, CA policies"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "20-interview-corner",
      children: "20. Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-difference-between-authentication-and-authorization",
      children: "Q1: What is the difference between authentication and authorization?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Authentication (AuthN) verifies identity → \"who are you?\" Authorization (AuthZ) determines access → \"what are you allowed to do?\" At airport security, passport check = authentication. Boarding pass check = authorization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Authentication\npublic boolean authenticate(String username, String password) {\n    String storedHash = userRepo.getPasswordHash(username);\n    return bcryptCheck(password, storedHash);\n}\n// Authorization\npublic boolean authorize(String username, String resource, String action) {\n    Set<String> perms = permissionService.getPermissions(username);\n    return perms.contains(resource + \":\" + action);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-explain-oauth-20-authorization-code-flow-with-pkce-why-pkce",
      children: "Q2: Explain OAuth 2.0 Authorization Code flow with PKCE. Why PKCE?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Auth Code flow exchanges a temporary code for tokens. PKCE prevents authorization code interception → even if attacker intercepts the code, they cannot exchange it without the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "code_verifier"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "code_verifier = CSPRNG(64 chars)\ncode_challenge = SHA256(code_verifier)\n// Send challenge with auth request, verifier with token exchange\n// AS checks: SHA256(verifier) == challenge\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-compare-passwords-totp-and-fido2webauthn-passkeys",
      children: "Q3: Compare passwords, TOTP, and FIDO2/WebAuthn passkeys."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Password"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TOTP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FIDO2/Passkey"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phishable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (origin-bound)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Shared Secret"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (hash)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (seed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (public key only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MITM Resistant"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "User Experience"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memorable, unsafe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type 6 digits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Face/Touch + tap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free-$10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free (passkeys) or $25+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-the-n1-problem-in-rbac",
      children: "Q4: What is the N+1 problem in RBAC?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Role explosion → creating too many granular roles (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Editor-DocTypeA-NorthAmerica"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Editor-DocTypeB-Europe"
      }), "). Mitigations: ABAC attributes, role hierarchies, automated role mining."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-explain-kerberos-delegation-types",
      children: "Q5: Explain Kerberos delegation types."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unconstrained delegation:"
        }), " Service impersonates user to ANY service (dangerous)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constrained delegation:"
        }), " Service impersonates user only to SPECIFIC services"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource-based constrained delegation:"
        }), " Target service controls who delegates to it"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-does-saml-prevent-assertion-replay",
      children: "Q6: How does SAML prevent assertion replay?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Three mechanisms: 1) Timestamp validity window (NotBefore/NotOnOrAfter, ~5 min), 2) Unique assertion ID (SP tracks used IDs), 3) SubjectConfirmation with InResponseTo (matches specific AuthnRequest)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-design-iam-for-microservice-architecture",
      children: "Q7: Design IAM for microservice architecture."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Service-to-service:"
        }), " OAuth 2.0 Client Credentials with JWTs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "End-user to app:"
        }), " OIDC via API Gateway (Auth Code + PKCE)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RPC identity propagation:"
        }), " JWT serialization headers (", (0,jsx_runtime.jsx)(_components.code, {
          children: "x-user-id"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x-user-roles"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Short-lived tokens:"
        }), " Access 15 min, refresh 24h with rotation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "mTLS:"
        }), " Certificate-based auth between services"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Centralized policy:"
        }), " OPA (Open Policy Agent) for ABAC"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-jwt-vs-opaque-session-tokens--security-implications",
      children: "Q8: JWT vs opaque session tokens → security implications?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "JWT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Opaque"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Validation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless (no DB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful (Redis/DB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Revocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impossible before expiry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large (1-2KB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small (~32 bytes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless APIs, short TTL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long sessions, need revocation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " JWT for API access (15-min TTL), opaque for UI sessions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-saml-vs-oauth-20--security-boundaries",
      children: "Q9: SAML vs OAuth 2.0 → security boundaries?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " SAML = federated identity (IdP tells SP who you are). OAuth = delegated authorization (app gets limited access to your resources on another service). SAML: \"I trust my IdP to tell me who you are.\" OAuth: \"This app can view your Drive files if you approve.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-implement-passwordless-authentication",
      children: "Q10: Implement passwordless authentication."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Using FIDO2/WebAuthn passkeys:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Registration\nconst cred = await navigator.credentials.create({\n    publicKey: {\n        challenge: new Uint8Array(serverChallenge),\n        rp: { name: \"Company\", id: \"company.com\" },\n        user: { id: new Uint8Array(userId), name: \"alice@company.com\" },\n        pubKeyCredParams: [{ type: \"public-key\", alg: -7 }],\n        authenticatorSelection: { residentKey: \"required\", userVerification: \"required\" }\n    }\n});\n// Authentication\nconst assertion = await navigator.credentials.get({\n    publicKey: { challenge: new Uint8Array(serverChallenge), userVerification: \"required\" }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      }), " Phishing-resistant, passwordless, no shared secrets."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-dac-vs-mac-vs-rbac-vs-abac",
      children: "Q11: DAC vs MAC vs RBAC vs ABAC?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DAC:"
        }), " Object owner controls access (Linux file perms)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAC:"
        }), " System-enforced labels, clearance (SELinux, military)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RBAC:"
        }), " Permissions via roles (enterprise apps)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ABAC:"
        }), " Attributes-based policy (fine-grained, dynamic)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-how-does-google-beyondcorp-change-security",
      children: "Q12: How does Google BeyondCorp change security?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Removes corporate network as trust boundary. Uses device inventory + device identity (certificates) + SSO + IAP proxy. No VPN. Network location is no longer a trust indicator."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q13-detect-kerberoasting-attacks",
      children: "Q13: Detect Kerberoasting attacks?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Monitor Event ID 4769 (TGS request) with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Service name NOT ending in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$"
        }), " (not machine account)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Ticket Encryption Type: 0x17"
        }), " (RC4-HMAC → crackable)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same user requesting multiple different service tickets"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-compare-password-hashing-algorithms-for-production",
      children: "Q14: Compare password hashing algorithms for production."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Preference order: 1) argon2id (PHC winner, t=3/m=65536/p=4), 2) bcrypt (cost=12+, 72-byte limit), 3) scrypt, 4) PBKDF2 (FIPS but not memory-hard). Never: MD5, SHA-1, SHA-256 alone, NTLM."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-secure-a-multi-tenant-saas-identity-layer",
      children: "Q15: Secure a multi-tenant SaaS identity layer?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " 1) Tenant isolation (separate IdP config), 2) SCIM provisioning, 3) Custom domains, 4) SAML/OIDC federation (bring your own IdP), 5) Per-tenant RBAC, 6) Tenant-aware JWTs (", (0,jsx_runtime.jsx)(_components.code, {
        children: "tenant_id"
      }), " claim), 7) Per-tenant rate limiting, 8) Cross-tenant audit for support access."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-applications-in-real-systems",
      children: "21. Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enterprise-iam",
      children: "Enterprise IAM"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Protocols"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Features"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Okta"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAML, OIDC, SCIM, LDAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSO, MFA, lifecycle, API Access Management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Azure AD (Entra ID)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAML, OIDC, Kerberos, LDAP, WS-Fed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional Access, Identity Protection, PIM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Keycloak"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAML, OIDC, LDAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open-source IAM, social login, user federation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Auth0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OIDC, OAuth 2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal Login, MFA, Actions, breach detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AWS IAM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom REST API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Roles, policies, permission boundaries, SCP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "operating-system-iam",
      children: "Operating System IAM"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "OS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Authentication"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Authorization"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Directory"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linux"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PAM (pam_unix, pam_ldap), /etc/shadow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rwx perms, ACLs, capabilities, SELinux"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenLDAP, FreeIPA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Windows"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kerberos, NTLM, Credential Manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTFS ACLs, GPO, User Rights"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active Directory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "macOS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open Directory, PAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX, sandbox, SIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OD, LDAP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cloud-iam",
      children: "Cloud IAM"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Provider"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Service"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Identity Types"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AWS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RBAC + ABAC (condition keys)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users, Groups, Roles, Federated (SAML/OIDC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Azure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entra ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RBAC + ABAC + Azure Policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users, Groups, Service Principals, Managed IDs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GCP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud IAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primitive + Custom roles, ABAC via conditions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google Accounts, Service Accounts, GSuite"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "password-managers",
      children: "Password Managers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MFA"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sync"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Architecture"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1Password"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secret Key + Master Password + biometric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypted vault sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SRP + AES-256"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bitwarden"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOTP, Duo, FIDO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-host or cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PBKDF2 / argon2id encryption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Apple iCloud Keychain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device biometric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end encrypted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECDH key exchange"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Factor Authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy FIDO2/WebAuthn passkeys for phishing resistance, TOTP as fallback, eliminate SMS-based MFA where possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Password Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash with argon2id (t=3, m=65536, p=4) or bcrypt (cost=12); follow NIST SP 800-63B — no periodic expiration, check against breach databases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Federation (SAML 2.0 + OIDC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use SAML for enterprise SSO (Salesforce, Workday), OIDC for consumer-facing apps, always validate signatures and audience restrictions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth 2.0 Grant Selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Authorization Code + PKCE for web/mobile apps, Client Credentials for machine-to-machine, never use Implicit or ROPC grants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access Control Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start with RBAC for simplicity, evolve to ABAC for fine-grained control, consider ReBAC for social/collaboration platforms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Privileged Access Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vault all admin credentials, implement JIT elevation with approval workflows, record all privileged sessions, rotate credentials after use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero Trust Identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove VPN dependency, implement device posture checks, use short-lived tokens, continuously re-evaluate access decisions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "One-Sentence Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authentication Factors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You need at least two of: something you know, have, and are"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Password Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash with argon2id, salt each password, never expire without cause (NIST 800-63B)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MFA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2/Passkeys are phish-resistant; TOTP is good; SMS is restricted per NIST"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Biometrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Great UX, cannot be revoked → FAR/FRR/EER tell you accuracy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SSO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized authentication; fewer passwords, single point of failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SAML 2.0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML enterprise federation; XML Signature Wrapping is top attack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OAuth 2.0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 grant types; always use Auth Code + PKCE for user-facing apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OIDC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth 2.0 + identity layer (ID Token JWT)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "JWT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless bearer tokens; verify signature AND algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RBAC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple role-based access; role explosion is main pitfall"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ABAC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attribute-based policies; flexible but complex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ReBAC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relationship-based; natural for sharing apps; Zanzibar at scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LDAP/AD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directory services; AD = LDAP + Kerberos + GPOs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kerberos"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ticket-based protocol; Kerberoasting and Golden/Silver tickets are key attacks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zero Trust"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never trust, always verify → BeyondCorp removes network from trust equation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PAM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vault privileged credentials, rotate frequently, record sessions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "JIT Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary elevation; reduces standing privilege surface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Session Management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short TTLs, secure cookies, refresh token rotation, device binding"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name the three primary authentication factors. Give an example of each."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n1) Something you know (password, PIN). 2) Something you have (phone, hardware token, smart card). 3) Something you are (fingerprint, face, iris). MFA requires at least two different factors.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Draw the OAuth 2.0 Authorization Code flow with PKCE. Label all components and messages."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nComponents: Client, Authorization Server (AS), Resource Server. Flow: 1) Client generates code_verifier + code_challenge. 2) Client → AS: authorize?response_type=code&code_challenge=... 3) AS → User: authenticate + consent. 4) AS → Client: authorization code (via redirect). 5) Client → AS: POST /token?code=...&code_verifier=... 6) AS → Client: access_token + refresh_token. 7) Client → RS: GET /resource (Authorization: Bearer token).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between TOTP and HOTP? When would you use each?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nHOTP (HMAC-based): counter-based — OTP changes after each successful use. TOTP (Time-based): time-window-based — OTP changes every 30 seconds. Use TOTP for most MFA scenarios (authenticator apps). Use HOTP when time synchronization is unreliable (offline systems, hardware tokens with no clock).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the FAR/FRR/EER trade-off in biometric systems."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nFAR (False Acceptance Rate): impostor incorrectly accepted. FRR (False Rejection Rate): legitimate user incorrectly rejected. EER (Equal Error Rate): threshold where FAR = FRR. Lowering the threshold decreases FRR but increases FAR, and vice versa. The EER is typically used to compare biometric system accuracy.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What attack does PKCE prevent? Why was it needed for mobile apps?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nPKCE prevents the authorization code interception attack. In mobile/native apps, the redirect URI (e.g., custom scheme) can be intercepted by a malicious app on the same device. PKCE uses a code verifier (cryptographically random) that only the original client knows — the intercepted code alone is useless without the verifier.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare Kerberos TGT vs Service Ticket. Who can decrypt each?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nTGT (Ticket-Granting Ticket): encrypted with the KDC's krbtgt key — only KDC can decrypt. Contains session key SK1. Service Ticket: encrypted with the target service's key — only the service can decrypt. Contains session key SK2. TGT proves identity to KDC; Service Ticket proves identity to the specific service.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the SAML ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AudienceRestriction"
        }), " condition for?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n`AudienceRestriction` specifies the intended recipient (service provider) of a SAML assertion. If the SP receiving the assertion is not in the audience list, it must reject it. This prevents assertion replay across different SPs — an assertion issued for SP-A cannot be used to authenticate at SP-B.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain unconstrained vs constrained Kerberos delegation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nUnconstrained delegation (legacy): the service can impersonate the user to any other service — extremely dangerous if the service is compromised. Constrained delegation: the service can only impersonate the user to specifically configured services. Resource-based constrained delegation: the target service controls who can delegate to it (Windows Server 2012+).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does Google BeyondCorp implement Zero Trust without a VPN?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nBeyondCorp moves access control from the network perimeter to the device and user. All access is authenticated and authorized based on: device inventory (managed + patch level), user identity + group, and context (location, time). An access proxy enforces policy before allowing connections to internal applications — there is no trusted internal network.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the three case studies and what IAM lessons does each teach?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n1) SolarWinds: build agents need MFA (non-interactive auth must be secured differently). 2) Okta (2022): support portal with weak access control → contractor breached and viewed customer data. 3) Microsoft Midnight Blizzard: password spray attack against legacy non-MFA accounts. Lesson: all accounts must have MFA, including service accounts and contractors.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why NIST SP 800-63B deprecated periodic password expiration."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nResearch shows users respond to forced rotation by choosing predictable patterns (Password1! → Password2!). The cost (help desk calls, weaker passwords) outweighs the benefit. NIST now recommends: no periodic expiration, check passwords against known breach databases, enforce minimum 8 characters, and use MFA as the primary protection.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between SAML and OAuth 2.0 in terms of primary purpose?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nSAML is primarily an authentication protocol — it asserts identity (who you are) using XML assertions. OAuth 2.0 is an authorization framework — it grants delegated access (what you can do) using tokens. SAML is about single sign-on; OAuth is about API access delegation. OpenID Connect bridges this by providing authentication on top of OAuth 2.0.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does a FIDO2 passkey prevent phishing attacks?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nFIDO2 passkeys are scoped to the origin (protocol + domain + port). The private key never leaves the device. The browser/platform verifies the origin matches the credential's RP ID before allowing authentication. Even if a user visits a phishing site (evil.com), the passkey will not authenticate because the origin does not match the legitimate RP ID.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "14",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is push fatigue and how do you mitigate it?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nPush fatigue occurs when users receive too many push MFA notifications and accidentally approve a fraudulent one. Mitigations: 1) Number matching (user must enter the number shown on screen). 2) Location-based policies (only prompt for push from trusted networks). 3) Rate limiting push requests per user. 4) FIDO2 as alternative (phishing-resistant, no push).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "15",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why was the SolarWinds build pipeline not protected by MFA?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nBuild agents and CI/CD pipelines run non-interactively — they cannot respond to MFA prompts (no human in the loop). The attacker compromised credentials or code-signing certificates used in automated builds. Solutions: hardware-bound ephemeral credentials (OIDC), short-lived tokens, code signing with HSM, and build attestation.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Password policy design:"
        }), " A company has 10,000 employees. Design a password policy following NIST SP 800-63B. Justify each rule."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nMinimum 8 characters (no complexity rules — users pick longer phrases). Check against breach databases (HaveIBeenPwned API). No periodic expiration. Allow paste in password fields (enables password managers). MFA required for all accounts. Justification: NIST research shows complexity rules produce weaker passwords, and periodic rotation causes predictable patterns. Breach checking and MFA are more effective.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ABAC policy for healthcare:"
        }), " A hospital wants access to patient records based on: doctor-patient relationship, time of day, location, emergency override. Write ABAC policies for: scheduled visit, emergency, remote consultation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nScheduled visit: `allow if user.role == \"doctor\" AND patient.assignedDoctor == user AND time between 8:00-18:00 AND location == \"hospital\"`. Emergency: `allow if user.role in [\"doctor\",\"nurse\"] AND context.emergency == true AND action == \"read\"`. Remote consultation: `allow if user.role == \"doctor\" AND patient.assignedDoctor == user AND context.telehealth == true AND MFA.verified == true`.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MFA deployment plan:"
        }), " A 200-person startup uses passwords only. Propose phased MFA deployment: Phase 1 (low friction), Phase 2 (high security), Phase 3 (passwordless). Include timeline, tools, user communication."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nPhase 1 (Month 1-2): Enable TOTP via authenticator app for all accounts — low friction, no hardware cost. Phase 2 (Month 3-4): Require MFA for admin roles, deploy push-based MFA (Okta Verify/MS Authenticator). Phase 3 (Month 5-6): FIDO2 hardware keys for admins, WebAuthn passkeys for all users — goal of 50% passwordless logins. Communication: weekly email tips, help desk training, dedicated Slack channel.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OAuth token theft scenario:"
        }), " A web app uses OAuth 2.0 tokens valid 24h with offline access. Describe what happens if tokens are stolen. Propose mitigations: token binding, rotation, shorter TTL."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nStolen tokens can be used for 24h to access the API and refresh for new tokens. Mitigations: 1) Token binding (tokens tied to TLS client certificate or device proof-of-possession). 2) Refresh token rotation (each refresh invalidates previous token; theft is detected when the stolen token fails). 3) Shorter TTL (access token: 15min, refresh token: 24h with rotation).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero Trust migration:"
        }), " A company with HQ VPN + office network wants Zero Trust. Design migration stages: VPN removal, device management, app proxy, policy engine."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nStage 1: Enroll all devices in MDM (Intune/Jamf), deploy device certificates. Stage 2: Deploy identity-aware proxy (Pomerium/Cloudflare Access) for web apps. Stage 3: Migrate non-web apps to use mTLS or WireGuard + device auth. Stage 4: Remove VPN — all access goes through the proxy with policy evaluation at every request. Stage 5: Continuous monitoring and policy refinement.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OIDC provider implementation:"
        }), " Design a minimal OIDC provider from scratch. Cover ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/authorize"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/token"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/userinfo"
        }), ", JWKS rotation, ID Token signing. What crypto choices and why?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n/authorize: authenticate user, generate authorization code. /token: exchange code for ID token (JWT signed with RS256) + access token (opaque or JWT). /userinfo: return claims from access token. JWKS: publish public keys at /.well-known/jwks.json for token verification. Crypto: RS256 (RSA-2048 with SHA-256) — widely supported; ES256 (ECDSA P-256) for smaller tokens. Rotate signing keys every 90 days.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-cloud SaaS IAM:"
        }), " A SaaS runs on AWS, uses GCP BigQuery, integrates with customer Azure AD for SSO. Design IAM for: internal service-to-service auth, end-user auth, customer federation, cloud provider access controls."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nInternal: service mesh with mTLS (SPIFFE/SPIRE for workload identity). End-user: OIDC with customer's Azure AD as IdP (federation through our OIDC provider). Cloud provider: AWS IAM roles for EC2/Lambda, GCP service accounts for BigQuery (workload identity federation). Use a central authorization service (e.g., OPA) for cross-cloud policy evaluation.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kerberos cross-realm trust:"
        }), " Two companies merge with realms ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPANY-A.COM"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPANY-B.COM"
        }), ". Design trust path. How does a user in Company A access a service in Company B?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nEstablish a two-way cross-realm trust. Configure both KDCs with trust relationship (shared inter-realm key). User obtains TGT from COMPANY-A.COM KDC, then requests a referral ticket to COMPANY-B.COM, then requests a service ticket from COMPANY-B.COM KDC for the target service. The trust path is COMPANY-A → COMPANY-B (direct trust). The service ticket is encrypted with the target service's key in COMPANY-B.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RBAC grants permissions based on:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The user's identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The user's role in the organization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security clearance labels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environmental attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth 2.0 is primarily:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An authentication protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An authorization framework for delegated access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A password hashing standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A single sign-on protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCE prevents:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization code interception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-site scripting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session fixation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The most phishing-resistant MFA method is:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMS code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOTP authenticator app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2/WebAuthn passkey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push notification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIST SP 800-63B recommends:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expire passwords every 90 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Require uppercase, lowercase, digit, symbol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No periodic expiration; check against breach databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password hints allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kerberos TGT is encrypted with:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The user's password hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The KDC's secret key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The service's secret key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The session key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAML assertion replay is prevented by:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique assertion ID + timestamp window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP filtering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate pinning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The SolarWinds attack succeeded because:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MFA was bypassed on human users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build agents did not support interactive MFA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAML was misconfigured"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kerberos tickets were forged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NIST SP 800-63B: Digital Identity Guidelines → Authentication and Lifecycle Management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NIST SP 800-207: Zero Trust Architecture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RFC 6238: TOTP → Time-Based One-Time Password Algorithm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RFC 4226: HOTP → HMAC-Based One-Time Password Algorithm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RFC 7636: PKCE → Proof Key for Code Exchange"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RFC 7519: JSON Web Token (JWT)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RFC 7515: JSON Web Signature (JWS)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "WebAuthn: W3C Recommendation → Web Authentication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BeyondCorp: Google's Zero Trust Implementation (USENIX ;login: 2014-2020)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google Zanzibar: Consistent, Global Authorization System (USENIX ATC 2019)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Okta Security Incident → March 2022 (okta.com/security)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SolarWinds SUNBURST → FireEye/Mandiant Reports (2020-2021)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Microsoft Midnight Blizzard → Microsoft Security Response Center (2024)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OWASP Password Storage Cheat Sheet"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OAuth 2.0 Security Best Current Practice (RFC 9700)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-a-deep-dive--password-hashing-algorithm-internals",
      children: "Appendix A: Deep Dive → Password Hashing Algorithm Internals"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bcrypt-internal-algorithm-eksblowfish",
      children: "bcrypt Internal Algorithm (EksBlowfish)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize P-array (18 entries) and S-boxes (4 x 256 entries) with digits of PI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "XOR P-array with salt-derived key material (128-bit salt expanded to 448 bits)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encrypt zero block with current state -> P1, P2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Swap P1, P2 into P-array, re-encrypt zero block -> P3, P4"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat until all P-array entries and S-box entries are populated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat entire process 2^cost times (cost=12 -> 4096 rounds)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Final state = encrypted \"OrpheanBeholderScryDoubt\" (24 bytes) 64 times"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory usage:"
      }), " ~4 KB (fixed) → all data in P-array and S-boxes fits in L1 cache"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why this matters for security:"
      }), " The fixed 4 KB memory footprint means an ASIC can pack many cores. A modern ASIC for bcrypt achieves ~100x speedup over CPU. Contrast with argon2id's 64 MB requirement which makes ASIC impractical."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "argon2id-parameter-selection",
      children: "argon2id Parameter Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Formulas for parameter selection:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Memory required (bytes) = m * 1024\nTime required (seconds) ~ (t * m * p) / 10^6 * CPU_factor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended parameters for different use cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "t (time)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "m (memory KB)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "p (parallelism)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approx Time (4-core)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security Level"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Web login (slow acceptable)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65536"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Web login (balanced)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19456"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~500ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mobile device"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interactive CLI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acceptable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "argon2id encoding format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$argon2id$v=19$m=65536,t=3,p=4$<salt_b64>$<hash_b64>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pbkdf2-hmac-sha256-iteration-counts",
      children: "PBKDF2-HMAC-SHA256 Iteration Counts"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Year"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended Iterations"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GPU Hash Rate (RTX 4090)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time to hash 1 password"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 GH/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 GH/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "600,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 GH/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~60ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1,000,000+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 GH/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100ms+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: Even at 1M iterations, PBKDF2 is weak because it's NOT memory-hard. An attacker with 100 RTX 4090 GPUs can test 50 billion passwords/second regardless of iteration count, by parallelizing across GPUs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constant-time-comparison-critical-implementation-detail",
      children: "Constant-Time Comparison (Critical Implementation Detail)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// VULNERABLE: Timing attack via early exit\npublic boolean compare(String a, String b) {\n    if (a.length() != b.length()) return false;  // Timing leak!\n    for (int i = 0; i < a.length(); i++) {\n        if (a.charAt(i) != b.charAt(i)) return false;  // Timing leak!\n    }\n    return true;\n}\n\n// SECURE: Constant-time comparison\npublic boolean constantTimeCompare(byte[] a, byte[] b) {\n    if (a.length != b.length) return false;\n    int result = 0;\n    for (int i = 0; i < a.length; i++) {\n        result |= a[i] ^ b[i];  // XOR always, even after mismatch\n    }\n    return result == 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " Timing attacks can recover passwords byte-by-byte over the network. A 1 microsecond timing difference per byte = 8-character password recovered in ~8 network requests. Constant-time comparison eliminates this side channel."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-b-deep-dive--oauth-20-token-handling",
      children: "Appendix B: Deep Dive → OAuth 2.0 Token Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "access-token-vs-refresh-token-lifecycle",
      children: "Access Token vs Refresh Token Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "REGISTRATION:\n  User authenticates, grants consent\n  AS issues:\n    - access_token (short-lived, 15-60 min)\n    - refresh_token (long-lived, days-months)\n    - id_token (OIDC only)\n\nNORMAL FLOW:\n  Client uses access_token for API calls\n  When access_token expires (401 response):\n    Client performs refresh:\n      POST /token\n      grant_type=refresh_token\n      refresh_token=REFRESH_TOKEN\n    AS verifies and issues NEW access_token + NEW refresh_token (rotation)\n\nTOKEN ROTATION (RFC 6749 bis):\n  Each refresh token use invalidates the previous refresh token\n  Prevents: stolen refresh token used by attacker\n  If refresh fails (token already used): attacker has the token, revoke all sessions\n\nREFRESH GRANT RESPONSE:\n  {\n    \"access_token\": \"eyJhbG...\",\n    \"token_type\": \"Bearer\",\n    \"expires_in\": 3600,\n    \"refresh_token\": \"new-refresh-token-here\",\n    \"scope\": \"openid profile\"\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "token-storage-security-spa--mobile",
      children: "Token Storage Security (SPA / Mobile)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Risk"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HttpOnly Secure SameSite cookie"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSRF protection, no JS access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "In-memory (variable)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lost on page refresh"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Web Worker (isolated scope)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not accessible from main thread"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SessionStorage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cleared on tab close; accessible to JS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LocalStorage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XSS can read all tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "URL fragment (#)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exposed in browser history"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best practice:"
      }), " Use BFF (Backend For Frontend) pattern. Frontend stores nothing; backend manages tokens via HttpOnly cookies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bff-pattern-backend-for-frontend",
      children: "BFF Pattern (Backend For Frontend)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Browser -(HttpOnly Cookie)-> BFF (Backend) -(OAuth 2.0)-> Authorization Server\n                                 |\n                          Internal JWT propagation\n                                 |\n                          APIs / Resource Servers\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tokens never touch browser"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BFF handles PKCE + token refresh"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BFF runs in same domain → no CORS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Refresh token rotation hidden from client"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Token theft from browser is impossible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-c-deep-dive--webauthnfido2-protocol-detail",
      children: "Appendix C: Deep Dive → WebAuthn/FIDO2 Protocol Detail"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "authenticator-attachment-modalities",
      children: "Authenticator Attachment Modalities"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Platform"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built into device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Touch ID, Windows Hello, Android fingerprint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cross-platform"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External device (USB/NFC/BLE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YubiKey, SoloKey, Feitian"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hybrid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone acts as roaming authenticator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passkey on phone, scanned via QR (CABLE)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resident-key-discoverable-credential-vs-non-resident",
      children: "Resident Key (Discoverable Credential) vs Non-Resident"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resident Key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Non-Resident"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credential stored on authenticator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credential stored on server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "User identification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Username NOT needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server provides credential ID list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Capacity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (~25-100 keys on YubiKey)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passwordless (no username)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2FA (user enters username first)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-verification-methods",
      children: "User Verification Methods"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "UV Flag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "None"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No local auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just press button"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2 PIN on YubiKey"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fingerprint"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Biometric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Touch ID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Face"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Biometric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Face ID, Windows Hello"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Palm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Biometric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon One"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "attestation-types",
      children: "Attestation Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Privacy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trust"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "None"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No attestation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Self"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attestation key generated by authenticator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Basic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch-specific attestation cert from manufacturer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Privacy CA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anonymized cert per attestation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ECA (Endorsement CA)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device-specific but rotated per request"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Enterprise use case:"
      }), " Basic attestation allows server to verify authenticator model (e.g., \"Only YubiKey 5 series allowed\"). Privacy CA is preferred compromise."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-d-deep-dive--kerberos-protocol-messages",
      children: "Appendix D: Deep Dive → Kerberos Protocol Messages"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "as-req-message-structure",
      children: "AS-REQ Message Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-asn1",
        children: "AS-REQ ::= {\n  pvno: 5,                          -- Kerberos version\n  msg-type: 10,                     -- AS-REQ\n  padata: [{                         -- Pre-authentication data\n    padata-type: 2,                  -- PA-ENC-TIMESTAMP\n    padata-value: EncryptedTimestamp\n  }],\n  req-body: {\n    cname: { name-type: 1, name-string: [\"alice\"] },\n    realm: \"COMPANY.COM\",\n    sname: { name-type: 2, name-string: [\"krbtgt\", \"COMPANY.COM\"] },\n    till: 2026-01-16T00:30:00Z,\n    nonce: 12345678,\n    etype: [18, 17, 23]             -- AES256, AES128, RC4-HMAC\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "as-rep-message-structure",
      children: "AS-REP Message Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-asn1",
        children: "AS-REP ::= {\n  pvno: 5,\n  msg-type: 11,                     -- AS-REP\n  crealm: \"COMPANY.COM\",\n  cname: { name-type: 1, name-string: [\"alice\"] },\n  ticket: EncryptedTGT,             -- Encrypted with krbtgt key\n  enc-part: {                       -- Encrypted with Alice's password hash\n    key: { keytype: 18, keyvalue: SK1 },\n    last-req: [2026-01-15T14:30:00Z],\n    nonce: 12345678,\n    key-expiration: 2026-01-22T14:30:00Z,\n    flags: [Forwardable, Renewable, Initial, Pre-authenticated],\n    authtime: 2026-01-15T14:30:00Z,\n    starttime: 2026-01-15T14:30:00Z,\n    endtime: 2026-01-16T00:30:00Z,\n    renew-till: 2026-01-22T14:30:00Z,\n    srealm: \"COMPANY.COM\",\n    sname: { name-type: 2, name-string: [\"krbtgt\", \"COMPANY.COM\"] }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tgs-req-to-ap-rep-exchange-service-access",
      children: "TGS-REQ to AP-REP Exchange (Service Access)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TGS-REQ:\n  Client sends TGT (from AS-REP) + Authenticator (encrypted with SK1)\n  + requested service principal: \"HTTP/webserver.company.com@COMPANY.COM\"\n\nTGS-REP:\n  Client receives:\n    - Service Ticket (encrypted with webserver's key)\n    - SK2 (encrypted with SK1)\n\nAP-REQ:\n  Client sends to webserver:\n    - Service Ticket (client cannot decrypt)\n    - Authenticator (encrypted with SK2) containing:\n      { cname: \"alice\", realm: \"COMPANY.COM\", timestamp: 2026-01-15T14:31:00Z }\n\nAP-REP (optional, mutual authentication):\n  Webserver returns:\n    - { timestamp + 1 } (encrypted with SK2)\n    - Proves webserver knows its own key\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "encryption-key-hierarchy",
      children: "Encryption Key Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client's password hash:\n  Used to encrypt AS-REP enc-part (contains SK1)\n  Only client can decrypt (knows password)\n\nkrbtgt key (KDC's master key):\n  Used to encrypt TGT\n  Only KDC can decrypt (not client, not service)\n\nService key (service principal key):\n  Used to encrypt Service Ticket\n  Only service can decrypt (not client, not KDC)\n\nSK1 (Session Key from AS):\n  Used to encrypt TGS-REQ Authenticator\n  Shared between client and KDC via TGT\n\nSK2 (Service Session Key from TGS):\n  Used to encrypt AP-REQ Authenticator\n  Shared between client and service via Service Ticket\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Security property:"
      }), " The KDC is the only entity that knows both the krbtgt key and all service keys. This makes the KDC the most critical component to protect."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-e-deep-dive--ldap-operations-and-schema",
      children: "Appendix E: Deep Dive → LDAP Operations and Schema"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ldap-operations-list",
      children: "LDAP Operations List"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LDAP Request Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bind"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authenticate to directory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x60 (Request)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query directory entries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x63"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Add"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create new entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x68"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x6A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Modify"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change entry attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x66"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Modify DN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rename/move entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x6C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compare"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check if entry has specific attribute value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x6E"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Abandon"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cancel pending operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x70"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Extended"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extended operations (StartTLS, password modify)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x77"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unbind"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x42"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ldap-search-filter-grammar",
      children: "LDAP Search Filter Grammar"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    filter     = \"(\" item \")\"\n    item       = simple | complex | \"!\" filter\n    simple     = attr filtertype value\n    filtertype = \"=\" | \"~=\" (approx) | \">=\" | \"<=\"\n    complex    = \"&\" filter+  |  \"|\" filter+\n    presence   = attr \"=*\"\n    substring  = attr \"=\" [value] \"*\" [value] \"*\" [value]\n    extensible = attr \":dn\" \":rule\" \":=\" value\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples parsed:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "(&(department=Engineering)(!(title=Intern)))\n  AND:\n    department EQUALS \"Engineering\"\n    NOT:\n      title EQUALS \"Intern\"\n\n(|(mail=*@company.com)(mail=*@company.co.uk))\n  OR:\n    mail ENDS_WITH \"@company.com\"\n    mail ENDS_WITH \"@company.co.uk\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ldap-result-codes",
      children: "LDAP Result Codes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Success"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation completed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No Such Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entry not found"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alias Problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dangling alias"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid DN Syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malformed distinguished name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inappropriate Authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bind auth type not accepted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid Credentials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong password"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insufficient Access Rights"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bind DN lacks permission"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unwilling to Perform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server refuses (policy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entry Already Exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate add attempt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Other"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unspecified error"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ldap-vs-active-directory-comparison",
      children: "LDAP vs Active Directory Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OpenLDAP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Active Directory"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RFC 4519 (core.schema)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proprietary + RFC extensions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authentication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple (password), SASL (GSSAPI, DIGEST-MD5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kerberos (primary), NTLM (fallback)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Replication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syncrepl (RFC 4533)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-master (Dirsync, FRS/DFSR)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Group Types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "staticGroup, dynamicGroup (memberURL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security, Distribution, Universal, Global, Domain Local"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Policy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "slapd.conf / cn=config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group Policy Objects (GPO)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Password Policies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ppolicy overlay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-grained password policies (PSO)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Extensions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overlays (auditlog, ppolicy, memberOf, syncprov)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AD LDS, ADFS, Azure AD Connect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Port"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "389 (LDAP), 636 (LDAPS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "389 (LDAP/Kerberos), 636 (LDAPS), 3268 (Global Catalog)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-f-deep-dive--fido2--webauthn-cbor-encoding",
      children: "Appendix F: Deep Dive → FIDO2 / WebAuthn CBOR Encoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ctap2-message-structure-cbor",
      children: "CTAP2 Message Structure (CBOR)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CTAP2 uses CBOR (Concise Binary Object Representation) for compact binary encoding."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cbor",
        children: "// authenticatorMakeCredential request\n{\n  0x01: [0x1B, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],  // clientDataHash (SHA-256)\n  0x02: {                                                      // rp\n    0x01: \"company.com\",                                       // rpId\n    0x02: \"Company Inc\"                                        // rpDisplayName\n  },\n  0x03: {                                                      // user\n    0x01: h'616C696365',                                       // userId\n    0x02: \"alice@company.com\",                                 // userName\n    0x03: \"Alice Smith\",                                       // userDisplayName\n    0x04: h'01'                                                // userIcon (optional)\n  },\n  0x04: [{ 0x03: -7 }, { 0x03: -257 }],                       // pubKeyCredParams (ES256, RS256)\n  0x05: { 0x01: \"required\" },                                  // authenticatorSelection (residentKey)\n  0x06: \"none\",                                                 // attestation\n  0x07: [0x01, 0x02, 0x03, 0x04]                              // extensions\n}\n\n// authenticatorGetAssertion request\n{\n  0x01: h'1B00000000000000',                                   // rpIdHash\n  0x02: h'1B00000000000000',                                   // clientDataHash\n  0x03: h'0C0A0B0C0102030405060708090A0B0C0D0E0F',           // allowList (credential ID)\n  0x04: { 0x02: true },                                        // extensions (hmac-secret)\n  0x05: true,                                                   // userVerification\n  0x06: 0x04                                                    // pinUvAuthParam\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "webauthn-authenticator-data",
      children: "WebAuthn Authenticator Data"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Byte 0:     Flags (UP, UV, AT, ED, etc.)\nBytes 1-32: RP ID Hash (SHA-256 of origin.rpId)\nBytes 33+:  Credential Data (if AT flag set)\n\nCredential Data format:\n  Bytes 0-15:   AAGUID (Authenticator Attestation GUID)\n  Bytes 16-17:  Credential ID length (L)\n  Bytes 18-(18+L-1): Credential ID\n  Bytes (18+L)+:   Public Key (COSE_Key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cose-key-format-es256-example",
      children: "COSE Key Format (ES256 Example)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cbor",
        children: "{\n  1: 2,                     // kty: EC2\n  3: -7,                    // alg: ES256\n  -1: 1,                    // crv: P-256\n  -2: h'A5B5B6C7D8E9F0A1B2C3D4E5F6A7B8C9D0E1F2A3B4C5D6E7F8F9A0B1C2D3E4',  // x (32 bytes)\n  -3: h'D4E5F6A7B8C9D0E1F2A3B4C5D6E7F8F9A0B1C2D3E4F5A6B7C8D9E0F1A2B3C4D5'   // y (32 bytes)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-g-comparison-tables",
      children: "Appendix G: Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "password-change-policies--historical-vs-nist",
      children: "Password Change Policies → Historical vs NIST"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "90-Day Rotation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NIST 800-63B"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rationale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limit exposure window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users pick weaker patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "User behavior"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password1! -> Password2!"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong passphrase kept for years"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Help desk calls"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (forgotten passwords)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Breach detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reactive (rotation assumes eventual breach)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proactive (check against known breaches)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MFA requirement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Somewhat mitigated rotation need"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MFA independent of password policy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "identity-protocols--transport-security",
      children: "Identity Protocols → Transport Security"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default Port"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mutual Auth"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Channel Binding"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LDAP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "389"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StartTLS (optional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LDAPS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "636"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS (mandatory)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kerberos"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "88"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (encrypted tickets only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (optional AP-REP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SAML HTTP-POST"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "443 (HTTPS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS (mandatory)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via XML signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (InResponseTo)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OAuth 2.0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "443 (HTTPS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS (mandatory)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via client auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (tls_client_ca)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OpenID Connect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "443 (HTTPS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS (mandatory)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via client auth + JWT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (s_hash, at_hash)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "security-controls-by-authentication-factor",
      children: "Security Controls by Authentication Factor"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Password"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TOTP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FIDO2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Smart Card"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Biometric"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rate limiting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (offline)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (local)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Account lockout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cooldown"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Geofencing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (IP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (origin)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Device binding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (phone)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (hardware)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (physical)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (body)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Session revocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (seed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (cred ID)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (cert)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Backup/recovery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email reset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery codes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iCloud/Google sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backup key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password fallback"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enterprise-sso-protocols--feature-matrix",
      children: "Enterprise SSO Protocols → Feature Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SAML 2.0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OIDC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CAS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WS-Federation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Format"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML/Form"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML/SOAP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bindings"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redirect, POST, Artifact, PAOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redirect, POST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP, proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP, SOAP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Logout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SLO (backchannel + frontchannel)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RP-initiated, session management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SLO (proxy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SignOut"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Attribute exchange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AttributeStatement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UserInfo + claims"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy ticket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Claim types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Encryption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JWE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WS-Security"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maturity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2005 (20+ years)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2014 (10+ years)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2006"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Market"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise (SaaS, Edu, Govt)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer + Enterprise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher Education"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft/.NET"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-h-real-world-iam-architecture-example",
      children: "Appendix H: Real-World IAM Architecture Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hybrid-iam-architecture-enterprise",
      children: "Hybrid IAM Architecture (Enterprise)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                         +------------------+\n                         |  Identity Store  |\n                         |  (AD + Azure AD) |\n                         +--------+---------+\n                                  |\n                    +-------------+-------------+\n                    |                           |\n            +-------v------+          +---------v--------+\n            |  SAML IdP    |          |  OIDC Provider   |\n            |  (ADFS/Okta) |          |  (Azure AD/Auth0)|\n            +------+-------+          +---------+--------+\n                   |                            |\n    +--------------+-----+          +-----------+-----------+\n    |                    |          |                       |\n+---v----+   +----------v---+  +---v----+           +------v-------+\n| HR App |   | SaaS Apps   |  | Mobile |           | Partner API  |\n| (SAML) |   | (SAML/OIDC) |  | (OIDC) |           | (OAuth 2.0)  |\n+--------+   +-------------+  +--------+           +--------------+\n                                  |\n                         +--------v--------+\n                         | API Gateway     |\n                         | (Token exchange)|\n                         +--------+--------+\n                                  |\n                    +-------------+-------------+\n                    |             |             |\n              +-----v--+   +-----v--+   +------v---+\n              |Svc A   |   |Svc B   |   |Svc C    |\n              |(mTLS)  |   |(mTLS)  |   |(mTLS)   |\n              +--------+   +--------+   +---------+\n\n\nInternal:\n  - AD: Kerberos for Windows authentication\n  - gMSA: Auto-rotated service accounts\n  - JIT: PIM for admin elevation\n\nExternal:\n  - SAML: Enterprise SSO for HR + legacy\n  - OIDC: Customer-facing mobile + web\n  - OAuth 2.0: Partner API access\n\nMachine identity:\n  - mTLS: Certificate-based microservice auth\n  - SPIFFE: Workload identity for containers\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps → New Employee Onboarding:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HR system creates employee record (Workday)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HR triggers SCIM provisioning to Azure AD"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Azure AD creates user in AD via AD Connect"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Azure AD assigns user to groups: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Engineering"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VPN-Users"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Office365-E3"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Group membership triggers:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "AD creates user account + mailbox (Exchange)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SAML access configured for SaaS apps (Salesforce, Jira)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OIDC application assigned (Slack, GitHub Enterprise)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PAM system provisions break-glass account (different password, hardware key enforced)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User receives enrollment email: set password, register MFA (TOTP + FIDO2), download recovery codes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JIT access policy: admin roles require approval; auto-expire after 24h"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Zero Trust Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conditional Access: MFA required for all external access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Device compliance: Intune enrollment + patch compliance check"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Session risk: Sign-in frequency = every 4 hours for sensitive apps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Token Protection: Device-bound tokens (PRT + primary refresh token)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-i-iam-threat-model-stride-per-component",
      children: "Appendix I: IAM Threat Model (STRIDE per Component)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Spoofing"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tampering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Repudiation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Info Disclosure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DoS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Elevation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Password DB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash collisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modify stored hashes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash dump (breach)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add admin hash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TOTP Secret"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clone secret"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modify seed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QR code shoulder surf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enroll new device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FIDO2 Key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware clone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modify firmware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key extraction (side channel)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destroy key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Register malicious cred"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AD Server"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fake DC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modify ACLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear event logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTDS.dit dump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ransom DC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add user to Domain Admins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "KDC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fake KDC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modify ticket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear audit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract krbtgt hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DoS KDC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forge TGT (Golden Ticket)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SAML IdP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fake IdP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modify assertion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No audit log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate private key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deny SSO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Issue assertion for any user"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OAuth AS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fake AS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modify token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client secret dump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limit exhaustion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elevate token scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "API Gateway"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token forgery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modify policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No request audit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token in logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic flood"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bypass auth check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Session Store"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session fixation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modify session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No audit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session ID leak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flush all sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hijack admin session"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Top 3 threats by likelihood:"
      }), " Password hash dump, Session ID leak, TOTP secret compromise"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Top 3 threats by impact:"
      }), " KDC compromise (Golden Ticket), AD compromise (Domain Admin), SAML IdP compromise (persistent trust breach)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-j-iam-compliance-mapping",
      children: "Appendix J: IAM Compliance Mapping"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Regulation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IAM Control"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SOC 2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CC6.1: Logical access controls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MFA, RBAC, access reviews"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PCI-DSS 4.0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.3: MFA for all admin access to CDE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2 or TOTP; never SMS for CDE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HIPAA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45 CFR 164.312(d): Person/entity authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique user IDs, automatic logoff"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GDPR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Art. 32: Appropriate technical measures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pseudonymization, access logs, breach notification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SOX"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section 404: Internal controls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segregation of duties, access certifications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NIST 800-53"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC-2: Account management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lifecycle management, JIT, PAM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FedRAMP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IA-2: Identification and authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PIV/CAC smart card, FIPS 140-2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ISO 27001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A.9: Access control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access policy, user access reviews, privileged access"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-k-session-management-deep-dive",
      children: "Appendix K: Session Management Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "session-id-generation-best-practices",
      children: "Session ID Generation Best Practices"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Minimum length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128 bits (16 bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 hex chars"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Entropy source"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSPRNG (SecureRandom)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Java: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SecureRandom.nextBytes()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Character set"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alphanumeric"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[A-Za-z0-9_-]"
            }), " = 64 chars"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Collision probability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 2^-64 at 10M sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SecureRandom guarantees this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-predictable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No timestamp/username basis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SHA-256(SRNG(128))"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "session-token-format-examples",
      children: "Session Token Format Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// TOKEN: Random 256-bit hex\n// m9xK2pQ7... (64 hex chars)\n// 2^256 = 1.16 x 10^77 possible values\n\n// TOKEN: JWT-based session\n// eyJhbGciOiJIUzI1NiJ9...\n// Payload contains:\n//   - jti: unique session ID\n//   - sub: user identifier\n//   - exp: expiration (absolute timestamp)\n//   - sid: server-side session reference (for revocation)\n\n// TOKEN: AppAuth opaque token (Azure AD style)\n// JWT-like header + opaque reference\n// Server maps reference to internal session state\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "session-revocation-strategies",
      children: "Session Revocation Strategies"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "In-memory map"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HashMap<token, session>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Redis/Distributed cache"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEL key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database-backed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE sessions SET revoked=true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cluster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Token blacklist"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bloom filter for invalidated tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (false positives)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "JWKS rotation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New signing key invalidates all JWTs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1h propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (coarse)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Issued-at filter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accept only tokens issued after revoke timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best practice for high-security:"
      }), " Redis cache (fast revocation) + JWT blacklist (distributed check)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "session-security-headers-owasp",
      children: "Session Security Headers (OWASP)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Set-Cookie: session=abc123;\n  HttpOnly;        // NOT accessible to JavaScript\n  Secure;          // TLS only\n  SameSite=Lax;    // CSRF protection\n  Path=/;          // Scope limited\n  Max-Age=3600;    // 1 hour lifetime\n  Domain=example.com; // Not too broad\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attribute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OWASP Recommendation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HttpOnly"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents XSS access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Secure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only over HTTPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SameSite=Strict"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSRF prevention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strict for core auth, Lax for UX"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "__Host- prefix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain/Path lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recommended for session cookies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Max-Age"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lifetime limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "per application risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Domain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cookie scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Omit or narrow explicitly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "session-security-maturity-model",
      children: "Session Security Maturity Model"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Characteristics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cookie-based auth, no flags, 30-day expiry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HttpOnly + Secure set, 24h expiry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SameSite=Strict, 4h expiry, idle timeout 30min"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ Refresh token rotation, HPKP or preload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero Trust"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ Device binding, continuous auth, session risk scoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passwordless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2/WebAuthn, biometric, no session tokens (short-lived assertions)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-l-comparison--cloud-identity-providers",
      children: "Appendix L: Comparison → Cloud Identity Providers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Azure AD (Entra ID)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AWS IAM Identity Center"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Okta"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Auth0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Google Workspace"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Directory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AD + Azure AD hybrid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS IAM + external IDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal Directory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User Store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Identity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SSO protocols"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAML 2.0, OIDC, WS-Fed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAML 2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAML, OIDC, SCIM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OIDC, SAML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAML, OIDC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MFA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS MFA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Okta Verify, SMS, TOTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guardian, SMS, TOTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2SV (Google Prompt)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Passwordless"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2, MS Authenticator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YubiKey (IAM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2, Okta FastPass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passkeys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passkeys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SCIM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure AD Connect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM Identity Center SCIM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Okta SCIM Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auth0 SCIM API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directory Sync"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "JIT Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PIM (Privileged Identity Management)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM Roles Anywhere + STS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Okta Privileged Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Support for delegated admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Identity Premium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conditional Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (sign-in risk, user risk, device, location, app)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM policy + SCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Okta Identity Engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actions + Breached Password"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context-Aware Access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "API Rate Limits"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "150K requests/tenant/10min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 req/sec (IAM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies (Okta API Management)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 req/sec (free tier)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies by SKU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pricing Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-user (Free/P1/P2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per user + per management request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per user per month"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per active user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per user per month"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft shops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS native shops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Developer products"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google shops"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-m-iam-implementation-checklist",
      children: "Appendix M: IAM Implementation Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "password-security",
      children: "Password Security"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " bcrypt/argon2id with cost ≥ 12 / t=2,m=19456"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Password policy: minimum 12 characters (not complexity rules)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Check passwords against breached password list (HaveIBeenPwned API)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " No password hints, no security questions (use recovery codes/email reset)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Rate limiting: 5 attempts before 30-second cooldown"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Account lockout: 10 attempts → 15-minute lockout (with CAPTCHA after 3)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-factor-authentication",
      children: "Multi-Factor Authentication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " All user accounts require at least 2 factors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " TOTP seed generated server-side, QR delivered via secure channel"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Recovery codes: 10 codes, single-use, regenerate after use of 8+"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " FIDO2: Prevent duplicate credential registration, allow multiple keys"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " SMS used only as last resort factor"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Rate limit TOTP verification (resists brute force of 6-digit codes)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rbac-design",
      children: "RBAC Design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Role hierarchy defined: no more than 3 levels deep"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Each role has documented, single-purpose permission assignments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " No direct permission assignments to users (RBAC violation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Separation of duties: conflicting roles must be flagged during assignment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Role review cycle: quarterly for privileged roles, annually for all roles"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Default-deny: new users start with no roles; explicit assignment needed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Temporary privileged roles use JIT/approval workflow"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "api-security",
      children: "API Security"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " All API calls require authentication (except public/health endpoints)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " API keys (OAuth 2.0 Client Credentials) with per-client scopes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Rate limit: 1000 req/min per API key standard, 100 req/min for sensitive"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Audit logging for all auth failures and token grants"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " CORS: specific origins only (no wildcard)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " JWT validation: verify signature, issuer, audience, expiration in that order"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Refresh token rotation: invalidate previous refresh token on each use"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "session-management",
      children: "Session Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Session timeout: idle 15 min, absolute 8 hours"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Re-authentication for sensitive operations (password/factor change)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Concurrent session limit: 5 per user"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Log-out from all devices functionality"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Session invalidation on password change/forced reset"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Cookie security: HttpOnly + Secure + SameSite=Strict + __Host- prefix"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Session fixation protection: regenerate session after login"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monitoring--alerting",
      children: "Monitoring & Alerting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Alert on: >10 failed logins/min from single IP"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Alert on: new device/location for privileged user"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Alert on: MFA disabled for any user"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Alert on: privileged role assignment outside JIT"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Audit all auth events: login, logout, MFA, password change, token grant"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Weekly token usage report for anomaly detection"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-n-iam-in-cloud-native-architectures",
      children: "Appendix N: IAM in Cloud-Native Architectures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kubernetes-identity-spiffe--spire",
      children: "Kubernetes Identity (SPIFFE / SPIRE)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Workload identity concept:"
      }), "\nKubernetes pods cannot use passwords or long-lived secrets. Instead, SPIRE assigns a SPIFFE ID (Secure Production Identity Framework for Everyone) to each workload via X.509 SVIDs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Pod (my-service) -> SPIFFE ID: spiffe://company.com/ns/default/sa/my-sa                    X.509 SVID: short-lived certificate, auto-rotated"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Workload attestation:"
      }), "\nK8s workload registrar validates pod identity via:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kubelet API call (verify pod exists)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ServiceAccount token (verify ownership)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process UID / cgroup (verify container boundary)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service-to-service mTLS:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Service A (caller)                        Service B (callee)     |                                          |     |--- mTLS handshake ---------------------->|     |    Client cert: SPIFFE ID A              |     |    Server cert: SPIFFE ID B              |     |                                          |     |--- Verify B is authorized to callee ---->|     |    (SPIRE bundle check)                  |     |                                          |     |--- Request ---------------------------->|"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "service-mesh-iam",
      children: "Service Mesh IAM"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Identity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Auth mechanism"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Istio"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPIFFE via Citadel/istiod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mTLS (STRICT mode)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linkerd"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPIFFE via identity controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mTLS (auto-injected)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consul"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consul service identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mTLS + intentions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cilium"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kubernetes identities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetworkPolicy + L7 policy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Authorization down to HTTP method:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`yaml\napiVersion: security.istio.io/v1beta1\nkind: AuthorizationPolicy\nmetadata:\nname: payment-service-policy\nspec:\nselector:\nmatchLabels:\napp: payment\nrules:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["from:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "source:\nprincipals: [\"cluster.local/ns/default/sa/order-service\"]\nto:"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "operation:\nmethods: [\"POST\"]\npaths: [\"/api/payments\"]\nwhen:"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "key: request.headers[X-Idempotency-Key]\nvalues: [\"*\"]"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rbac-authorization-engine",
      children: "RBAC Authorization Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript class implements a full Role-Based Access Control (RBAC) engine with role hierarchy, permission inheritance, and effective-permissions computation. It supports CRUD + execute actions, resource-pattern matching, and user-role assignment validation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * User — represents an authenticated entity in the system.\n * @property id — unique identifier\n * @property roles — list of role names assigned directly to the user\n * @property attributes — key-value map for attribute-based extensions (ABAC bridging)\n */\ninterface User {\n  id: string;\n  roles: string[];\n  attributes: Record<string, string>;\n}\n\n/**\n * Permission — a specific action on a resource.\n * @property resource — the target resource or pattern (supports glob: \"document:*\")\n * @property action — the operation type\n */\ninterface Permission {\n  resource: string;\n  action: 'create' | 'read' | 'update' | 'delete' | 'execute';\n}\n\n/**\n * Role — a named collection of permissions with optional inheritance.\n * @property name — unique role identifier\n * @property permissions — direct permissions assigned to this role\n * @property inherits — parent role names from which permissions are inherited\n */\ninterface Role {\n  name: string;\n  permissions: Permission[];\n  inherits: string[];\n}\n\n/**\n * RBACEngine — provides permission checking with role hierarchy resolution,\n * effective-permissions aggregation, and audit-friendly decision logging.\n *\n * Features:\n * - Role inheritance (directed acyclic graph) with cycle detection\n * - Resource-pattern matching (exact match, prefix match, glob)\n * - Effective permissions computation flattened across the hierarchy\n * - Decision logging for compliance and audit trails\n */\nclass RBACEngine {\n  private roles: Map<string, Role> = new Map();\n  private roleAssignments: Map<string, Set<string>> = new Map();\n  private decisionLog: Array<{\n    timestamp: Date;\n    user: string;\n    resource: string;\n    action: string;\n    allowed: boolean;\n    reason: string;\n  }> = [];\n\n  /**\n   * Register a role definition. Throws if a cycle is detected.\n   */\n  public registerRole(role: Role): void {\n    if (this.roles.has(role.name)) {\n      throw new Error(`Role \"${role.name}\" already registered`);\n    }\n    // Validate inheritance chain for cycles\n    this.validateAcyclic(role.name, role.inherits, new Set());\n    this.roles.set(role.name, role);\n  }\n\n  /**\n   * Validate that adding this role would not create a cycle.\n   * Uses DFS from the inherits list upward.\n   */\n  private validateAcyclic(\n    roleName: string,\n    inherits: string[],\n    visited: Set<string>\n  ): void {\n    for (const parent of inherits) {\n      if (parent === roleName) {\n        throw new Error(`Cycle detected: role \"${roleName}\" cannot inherit from itself`);\n      }\n      if (visited.has(parent)) {\n        throw new Error(\n          `Cycle detected via \"${parent}\" in inheritance of \"${roleName}\"`\n        );\n      }\n      visited.add(parent);\n      const parentRole = this.roles.get(parent);\n      if (parentRole) {\n        this.validateAcyclic(roleName, parentRole.inherits, new Set(visited));\n      }\n    }\n  }\n\n  /**\n   * Assign a role to a user.\n   */\n  public assignRole(userId: string, roleName: string): void {\n    if (!this.roles.has(roleName)) {\n      throw new Error(`Role \"${roleName}\" does not exist`);\n    }\n    if (!this.roleAssignments.has(userId)) {\n      this.roleAssignments.set(userId, new Set());\n    }\n    this.roleAssignments.get(userId)!.add(roleName);\n  }\n\n  /**\n   * Remove a role from a user.\n   */\n  public removeRole(userId: string, roleName: string): void {\n    const userRoles = this.roleAssignments.get(userId);\n    if (userRoles) {\n      userRoles.delete(roleName);\n    }\n  }\n\n  /**\n   * Check whether a user has permission to perform an action on a resource.\n   * Resolves the full role hierarchy and compares against all permissions.\n   */\n  public hasPermission(\n    user: User,\n    resource: string,\n    action: string\n  ): boolean {\n    const effectivePerms = this.getEffectivePermissions(user);\n    const allowed = effectivePerms.some(\n      (p) =>\n        p.action === action && this.resourceMatches(p.resource, resource)\n    );\n\n    this.decisionLog.push({\n      timestamp: new Date(),\n      user: user.id,\n      resource,\n      action,\n      allowed,\n      reason: allowed\n        ? 'Matched effective permission'\n        : 'No matching permission in any role',\n    });\n\n    return allowed;\n  }\n\n  /**\n   * Retrieve all effective permissions for a user by flattening\n   * the role hierarchy. Deduplicates identical (resource, action) pairs.\n   */\n  public getEffectivePermissions(user: User): Permission[] {\n    const visitedRoles = new Set<string>();\n    const permissionSet = new Map<string, Permission>();\n    const queue: string[] = [];\n\n    // Seed with direct roles\n    const directRoles = this.roleAssignments.get(user.id);\n    if (directRoles) {\n      for (const roleName of directRoles) {\n        queue.push(roleName);\n      }\n    }\n\n    // BFS through the inheritance graph\n    while (queue.length > 0) {\n      const currentName = queue.shift()!;\n      if (visitedRoles.has(currentName)) continue;\n      visitedRoles.add(currentName);\n\n      const role = this.roles.get(currentName);\n      if (!role) continue;\n\n      // Add direct permissions\n      for (const perm of role.permissions) {\n        const key = `${perm.resource}:${perm.action}`;\n        if (!permissionSet.has(key)) {\n          permissionSet.set(key, perm);\n        }\n      }\n\n      // Enqueue parent roles\n      for (const inherited of role.inherits) {\n        if (!visitedRoles.has(inherited)) {\n          queue.push(inherited);\n        }\n      }\n    }\n\n    return Array.from(permissionSet.values());\n  }\n\n  /**\n   * Check whether a resource string matches a permission resource pattern.\n   * Supports:\n   * - Exact match: \"document:report-q4\" === \"document:report-q4\"\n   * - Prefix wildcard: \"document:*\" matches \"document:anything\"\n   * - Full wildcard: \"*\" matches any resource\n   */\n  private resourceMatches(pattern: string, resource: string): boolean {\n    if (pattern === '*') return true;\n    if (pattern.endsWith(':*')) {\n      const prefix = pattern.slice(0, -2);\n      return resource === prefix || resource.startsWith(prefix + ':');\n    }\n    return pattern === resource;\n  }\n\n  /**\n   * Export the decision log for audit and compliance review.\n   */\n  public getAuditLog() {\n    return [...this.decisionLog];\n  }\n\n  /**\n   * List all roles assigned to a user.\n   */\n  public getUserRoles(userId: string): string[] {\n    const roles = this.roleAssignments.get(userId);\n    return roles ? Array.from(roles) : [];\n  }\n}\n\n// ---- Usage example ----\nconst engine = new RBACEngine();\n\n// Define roles with inheritance\nengine.registerRole({\n  name: 'viewer',\n  permissions: [{ resource: 'document:*', action: 'read' }],\n  inherits: [],\n});\n\nengine.registerRole({\n  name: 'editor',\n  permissions: [\n    { resource: 'document:*', action: 'update' },\n    { resource: 'document:draft', action: 'create' },\n  ],\n  inherits: ['viewer'], // inherits read access\n});\n\nengine.registerRole({\n  name: 'admin',\n  permissions: [\n    { resource: 'document:*', action: 'delete' },\n    { resource: 'user:*', action: 'execute' },\n  ],\n  inherits: ['editor'], // inherits editor + viewer permissions\n});\n\n// Assign roles to users\nengine.assignRole('alice', 'viewer');\nengine.assignRole('bob', 'editor');\nengine.assignRole('charlie', 'admin');\n\n// Test permissions\nconst alice: User = { id: 'alice', roles: ['viewer'], attributes: {} };\nconst bob: User = { id: 'bob', roles: ['editor'], attributes: {} };\nconst charlie: User = { id: 'charlie', roles: ['admin'], attributes: {} };\n\nconsole.log(`Alice can read document:report → ${engine.hasPermission(alice, 'document:report', 'read')}`);\nconsole.log(`Alice can delete document:report → ${engine.hasPermission(alice, 'document:report', 'delete')}`);\nconsole.log(`Bob can update document:draft → ${engine.hasPermission(bob, 'document:draft', 'update')}`);\nconsole.log(`Bob can delete document:final → ${engine.hasPermission(bob, 'document:final', 'delete')}`);\nconsole.log(`Charlie can delete document:anything → ${engine.hasPermission(charlie, 'document:anything', 'delete')}`);\nconsole.log(`Charlie can read document:secret → ${engine.hasPermission(charlie, 'document:secret', 'read')}`);\n\n// Effective permissions\nconsole.log(`\\nAlice's effective permissions: ${engine.getEffectivePermissions(alice).length}`);\nconsole.log(`Charlie's effective permissions: ${engine.getEffectivePermissions(charlie).length}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jwt-auth-middleware",
      children: "JWT Auth Middleware"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This TypeScript implementation provides a production-grade JWT authentication service with HS256 signing, token expiry validation, refresh token rotation, and issuer/audience verification. It follows the RFC 7519 specification and incorporates security best practices to prevent common JWT attacks."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * TokenPayload — the decoded contents of a JWT.\n * @property sub — subject (typically user ID)\n * @property roles — array of role names for authorization\n * @property iat — issued-at timestamp (seconds since epoch, set automatically)\n * @property exp — expiration timestamp (seconds since epoch, computed from TTL)\n * @property iss — issuer claim (validates token provenance)\n */\ninterface TokenPayload {\n  sub: string;\n  roles: string[];\n  iat: number;\n  exp: number;\n  iss: string;\n}\n\n/**\n * TokenPair — returned by token generation and refresh operations.\n */\ninterface TokenPair {\n  accessToken: string;\n  refreshToken: string;\n  expiresAt: number;\n}\n\n/**\n * JWT header for HS256 algorithm.\n */\ninterface JWTHeader {\n  alg: 'HS256';\n  typ: 'JWT';\n}\n\n/**\n * Base64URL encoding utilities (RFC 4648 §5).\n * Uses URL-safe characters and omits padding.\n */\nfunction base64URLEncode(data: Uint8Array): string {\n  const base64 = btoa(String.fromCharCode(...data));\n  return base64.replace(/\\+/g, '-').replace(/\\//g, '_').replace(/=+$/, '');\n}\n\nfunction base64URLDecode(str: string): Uint8Array {\n  const base64 = str.replace(/-/g, '+').replace(/_/g, '/');\n  const padding = 4 - (base64.length % 4);\n  const padded = padding === 4 ? base64 : base64 + '='.repeat(padding);\n  const binaryStr = atob(padded);\n  return new Uint8Array(binaryStr.length).map((_, i) => binaryStr.charCodeAt(i));\n}\n\n/**\n * JWTService — complete HS256-based JWT management with\n * generation, verification, and refresh-token rotation.\n *\n * Security features:\n * - HS256 signing with a minimum 256-bit secret\n * - Automatic iat (issued-at) and exp (expiration) computation\n * - Issuer verification against expected value\n * - Refresh token rotation (each use invalidates the previous)\n * - Reject tokens with \"alg\":\"none\" (algorithm confusion prevention)\n * - Constant-time signature comparison (timing attack mitigation)\n */\nclass JWTService {\n  private readonly secret: Uint8Array;\n  private readonly issuer: string;\n  private readonly accessTokenTTL: number; // seconds\n  private readonly refreshTokenTTL: number; // seconds\n  private refreshTokenStore: Map<\n    string,\n    { userId: string; expiresAt: number; rotated: boolean }\n  > = new Map();\n\n  /**\n   * @param secret — raw key material (must be at least 32 bytes for HS256)\n   * @param issuer — the \"iss\" claim value (e.g., \"https://auth.example.com\")\n   * @param accessTokenTTL — access token lifetime in seconds (default 900 = 15 min)\n   * @param refreshTokenTTL — refresh token lifetime in seconds (default 86400 = 24 h)\n   */\n  constructor(\n    secret: string,\n    issuer: string,\n    accessTokenTTL: number = 900,\n    refreshTokenTTL: number = 86400\n  ) {\n    if (secret.length < 32) {\n      throw new Error(\n        'HS256 secret must be at least 32 bytes (256 bits) for adequate security'\n      );\n    }\n    this.secret = new TextEncoder().encode(secret);\n    this.issuer = issuer;\n    this.accessTokenTTL = accessTokenTTL;\n    this.refreshTokenTTL = refreshTokenTTL;\n  }\n\n  /**\n   * Generate an access token + refresh token pair for a user.\n   */\n  public generateToken(\n    payload: Omit<TokenPayload, 'iat' | 'exp'>\n  ): TokenPair {\n    const now = Math.floor(Date.now() / 1000);\n\n    // Build access token\n    const accessPayload: TokenPayload = {\n      ...payload,\n      iat: now,\n      exp: now + this.accessTokenTTL,\n      iss: this.issuer,\n    };\n    const accessToken = this.signToken(accessPayload);\n\n    // Build refresh token (stored server-side for rotation)\n    const refreshId = crypto.randomUUID();\n    this.refreshTokenStore.set(refreshId, {\n      userId: payload.sub,\n      expiresAt: now + this.refreshTokenTTL,\n      rotated: false,\n    });\n\n    // Return refresh token as an opaque string (not a JWT)\n    const refreshToken = `rt_${refreshId}`;\n\n    return {\n      accessToken,\n      refreshToken,\n      expiresAt: accessPayload.exp,\n    };\n  }\n\n  /**\n   * Verify a JWT access token and return its decoded payload.\n   * Throws on invalid signature, expired token, or wrong issuer.\n   */\n  public verifyToken(token: string): TokenPayload {\n    // Reject obvious \"alg\":\"none\" tokens before parsing\n    if (token.split('.').length === 2) {\n      throw new Error('JWT algorithm \"none\" is not allowed');\n    }\n\n    const parts = token.split('.');\n    if (parts.length !== 3) {\n      throw new Error('Malformed JWT: expected 3 parts (header.payload.signature)');\n    }\n\n    const [headerB64, payloadB64, signatureB64] = parts;\n\n    // Verify algorithm is HS256\n    const header: JWTHeader = JSON.parse(\n      new TextDecoder().decode(base64URLDecode(headerB64))\n    );\n    if (header.alg !== 'HS256') {\n      throw new Error(`Unexpected JWT algorithm: \"${header.alg}\". Expected HS256`);\n    }\n\n    // Verify signature\n    const signatureInput = `${headerB64}.${payloadB64}`;\n    const expectedSig = this.computeSignature(signatureInput);\n    const actualSig = base64URLDecode(signatureB64);\n\n    if (!this.constantTimeEqual(expectedSig, actualSig)) {\n      throw new Error('JWT signature verification failed');\n    }\n\n    // Decode and validate payload\n    const payload: TokenPayload = JSON.parse(\n      new TextDecoder().decode(base64URLDecode(payloadB64))\n    );\n\n    // Expiry check\n    const now = Math.floor(Date.now() / 1000);\n    if (payload.exp <= now) {\n      throw new Error('JWT has expired');\n    }\n\n    // Issuer check\n    if (payload.iss !== this.issuer) {\n      throw new Error(\n        `JWT issuer mismatch: expected \"${this.issuer}\", got \"${payload.iss}\"`\n      );\n    }\n\n    return payload;\n  }\n\n  /**\n   * Refresh an access token using a refresh token.\n   * Implements rotation: the old refresh token is invalidated\n   * and a new token pair is issued.\n   */\n  public refreshToken(refreshToken: string): TokenPair {\n    const prefix = 'rt_';\n    if (!refreshToken.startsWith(prefix)) {\n      throw new Error('Invalid refresh token format');\n    }\n\n    const refreshId = refreshToken.slice(prefix.length);\n    const stored = this.refreshTokenStore.get(refreshId);\n\n    if (!stored) {\n      throw new Error('Refresh token not found or already rotated');\n    }\n\n    if (stored.rotated) {\n      // Token reuse detected — potential theft. Invalidate ALL tokens for this user.\n      this.invalidateAllForUser(stored.userId);\n      throw new Error(\n        'Refresh token reuse detected — all tokens for this user have been revoked'\n      );\n    }\n\n    const now = Math.floor(Date.now() / 1000);\n    if (stored.expiresAt <= now) {\n      this.refreshTokenStore.delete(refreshId);\n      throw new Error('Refresh token has expired');\n    }\n\n    // Rotate: mark old as used\n    stored.rotated = true;\n\n    // Issue new token pair\n    const newPayload: Omit<TokenPayload, 'iat' | 'exp'> = {\n      sub: stored.userId,\n      roles: [],\n      iss: this.issuer,\n    };\n\n    return this.generateToken(newPayload);\n  }\n\n  /**\n   * Sign a payload and produce a complete JWT string.\n   */\n  private signToken(payload: TokenPayload): string {\n    const header: JWTHeader = { alg: 'HS256', typ: 'JWT' };\n    const headerB64 = base64URLEncode(\n      new TextEncoder().encode(JSON.stringify(header))\n    );\n    const payloadB64 = base64URLEncode(\n      new TextEncoder().encode(JSON.stringify(payload))\n    );\n    const signatureInput = `${headerB64}.${payloadB64}`;\n    const signature = base64URLEncode(this.computeSignature(signatureInput));\n    return `${signatureInput}.${signature}`;\n  }\n\n  /**\n   * Compute HMAC-SHA256 signature.\n   * Uses the Web Crypto API (available in modern runtimes and browsers).\n   */\n  private async computeSignature(input: string): Promise<Uint8Array> {\n    const key = await crypto.subtle.importKey(\n      'raw',\n      this.secret,\n      { name: 'HMAC', hash: 'SHA-256' },\n      false,\n      ['sign']\n    );\n    const signature = await crypto.subtle.sign(\n      'HMAC',\n      key,\n      new TextEncoder().encode(input)\n    );\n    return new Uint8Array(signature);\n  }\n\n  /**\n   * Constant-time comparison of two byte arrays.\n   * Prevents timing attacks that could leak the signature byte-by-byte.\n   */\n  private constantTimeEqual(a: Uint8Array, b: Uint8Array): boolean {\n    if (a.length !== b.length) return false;\n    let diff = 0;\n    for (let i = 0; i < a.length; i++) {\n      diff |= a[i] ^ b[i];\n    }\n    return diff === 0;\n  }\n\n  /**\n   * Invalidate all refresh tokens for a specific user.\n   * Called when refresh token rotation detects potential theft.\n   */\n  private invalidateAllForUser(userId: string): void {\n    for (const [id, stored] of this.refreshTokenStore) {\n      if (stored.userId === userId) {\n        this.refreshTokenStore.delete(id);\n      }\n    }\n  }\n\n  /**\n   * Clean up expired refresh tokens from the store.\n   * Call periodically to prevent unbounded growth.\n   */\n  public purgeExpiredTokens(): number {\n    const now = Math.floor(Date.now() / 1000);\n    let purged = 0;\n    for (const [id, stored] of this.refreshTokenStore) {\n      if (stored.expiresAt <= now) {\n        this.refreshTokenStore.delete(id);\n        purged++;\n      }\n    }\n    return purged;\n  }\n}\n\n// ---- Usage example ----\nasync function demoJWT() {\n  const jwtService = new JWTService(\n    'this-is-a-very-long-secret-key-that-is-at-least-32-bytes!!', // 256-bit key\n    'https://auth.example.com',\n    900,   // 15 min access token\n    86400  // 24 h refresh token\n  );\n\n  // Generate tokens for user\n  const tokens = jwtService.generateToken({\n    sub: 'user_42',\n    roles: ['admin', 'editor'],\n    iss: 'https://auth.example.com',\n  });\n\n  console.log('Access Token:', tokens.accessToken.slice(0, 50) + '…');\n  console.log('Refresh Token:', tokens.refreshToken);\n  console.log('Expires At:', new Date(tokens.expiresAt * 1000).toISOString());\n\n  // Verify the access token\n  try {\n    const payload = jwtService.verifyToken(tokens.accessToken);\n    console.log(`\\nVerified: subject=${payload.sub}, roles=[${payload.roles.join(', ')}]`);\n  } catch (err) {\n    console.error('Verification failed:', (err as Error).message);\n  }\n\n  // Refresh the token\n  try {\n    const newTokens = jwtService.refreshToken(tokens.refreshToken);\n    console.log('\\nToken refreshed successfully');\n    console.log('New Access Token:', newTokens.accessToken.slice(0, 50) + '…');\n    console.log('New Refresh Token:', newTokens.refreshToken);\n\n    // Old refresh token should now be invalid\n    const willFail = jwtService.refreshToken(tokens.refreshToken);\n  } catch (err) {\n    console.log('Expected error on reuse:', (err as Error).message);\n  }\n}\n\ndemoJWT();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagrams",
      children: "Mermaid Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oauth-20-authorization-code-flow",
      children: "OAuth 2.0 Authorization Code Flow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following sequence diagram illustrates the OAuth 2.0 Authorization Code grant flow with PKCE (Proof Key for Code Exchange). This is the recommended grant type for web, mobile, and single-page applications. PKCE prevents authorization code interception attacks by binding the authorization code to the client's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "code_verifier"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant RO as Resource Owner (User)\n    participant UA as User Agent (Browser)\n    participant Client as Client Application\n    participant AS as Authorization Server\n    participant RS as Resource Server\n\n    Note over RO,RS: OAuth 2.0 Authorization Code Flow + PKCE\n\n    rect rgb(240, 245, 255)\n    Note over Client: Generate PKCE parameters\n    Note over Client: code_verifier = CSPRNG(64 chars)\n    Note over Client: code_challenge = SHA256(verifier)\n    end\n\n    rect rgb(255, 248, 240)\n    Note over RO,AS: Step 1 - Authorization Request\n    RO->>UA: Click \"Sign in with Provider\"\n    UA->>Client: Redirect to /auth/login\n    Client->>UA: 302 Redirect to AS authorize endpoint\n    UA->>AS: GET /authorize?response_type=code&client_id=app123&redirect_uri=https://client/callback&scope=openid%20profile&state=xyz789&code_challenge=challenge_hash&code_challenge_method=S256\n    AS->>RO: Present login form + consent screen\n    RO->>AS: Enter credentials + grant consent\n    end\n\n    rect rgb(240, 255, 245)\n    Note over UA,Client: Step 2 - Authorization Code Grant\n    AS->>UA: 302 Redirect to client callback with ?code=AUTH_CODE_123&state=xyz789\n    UA->>Client: Follow redirect to /callback?code=AUTH_CODE_123&state=xyz789\n    Note over Client: Validate state matches original\n    end\n\n    rect rgb(255, 240, 245)\n    Note over Client,AS: Step 3 - Token Exchange (Back Channel)\n    Client->>AS: POST /token (grant_type=authorization_code&code=AUTH_CODE_123&redirect_uri=https://client/callback&client_id=app123&client_secret=secret&code_verifier=original_verifier)\n    Note over AS: Verify code_challenge == SHA256(code_verifier)\n    AS->>Client: 200 OK { access_token, refresh_token, id_token, expires_in }\n    end\n\n    rect rgb(245, 245, 255)\n    Note over Client,RS: Step 4 - Protected Resource Access\n    Client->>RS: GET /api/userinfo (Authorization: Bearer access_token)\n    RS->>RS: Validate access_token signature + expiry + scope\n    RS->>Client: 200 OK { user profile data }\n    Client->>UA: Render user interface\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "saml-sso-authentication-flow",
      children: "SAML SSO Authentication Flow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This sequence diagram details the SAML 2.0 Single Sign-On flow (SP-initiated). The Service Provider generates an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<AuthnRequest>"
      }), ", the Identity Provider authenticates the user and issues a signed ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Response>"
      }), " containing the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Assertion>"
      }), ", and the SP validates the signature and creates a session."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant User as User (Browser)\n    participant SP as Service Provider\n    participant IdP as Identity Provider\n\n    Note over User,IdP: SAML 2.0 SP-Initiated SSO Flow\n\n    rect rgb(240, 248, 255)\n    Note over User,SP: Step 1 - Access Request\n    User->>SP: Navigate to https://app.example.com/dashboard\n    SP->>SP: Check for existing session — none found\n    end\n\n    rect rgb(255, 245, 240)\n    Note over SP,IdP: Step 2 - AuthnRequest Generation\n    SP->>SP: Generate unique AuthnRequest ID (uuid)\n    SP->>SP: Sign AuthnRequest with SP private key\n    SP->>User: HTTP 302 Redirect to IdP SSO URL\n    Note over User: Location includes SAMLRequest parameter (base64 + deflated XML)\n    User->>IdP: GET /sso?SAMLRequest=base64_encoded_authn_request&RelayState=app_dashboard\n    end\n\n    rect rgb(240, 255, 245)\n    Note over User,IdP: Step 3 - Authentication at IdP\n    IdP->>IdP: Decode and verify SP signature on AuthnRequest\n    IdP->>User: Present login form (username + password)\n    User->>IdP: Submit credentials\n    IdP->>IdP: Verify credentials (password hash + MFA challenge)\n    Note over IdP: Optionally challenge for 2nd factor (TOTP, FIDO2)\n    User->>IdP: Complete MFA\n    IdP->>IdP: Authentication successful\n    end\n\n    rect rgb(255, 255, 240)\n    Note over IdP: Step 4 - Assertion Generation\n    IdP->>IdP: Create SAML Assertion with:\n    Note over IdP: <Subject> user@company.com\n    Note over IdP: <Conditions> NotBefore / NotOnOrAfter (5 min window)\n    Note over IdP: <AudienceRestriction> https://app.example.com\n    Note over IdP: <AttributeStatement> email, roles, department\n    IdP->>IdP: Sign Assertion with IdP private key\n    IdP->>IdP: Optionally encrypt Assertion for SP\n    end\n\n    rect rgb(245, 240, 255)\n    Note over IdP,User: Step 5 - Response Delivery\n    IdP->>User: Auto-submit HTML form POST to SP ACS URL\n    Note over User: Form contains SAMLResponse (base64 XML) + RelayState\n    User->>SP: POST /acs (SAMLResponse=base64_assertion&RelayState=app_dashboard)\n    end\n\n    rect rgb(240, 255, 255)\n    Note over SP: Step 6 - Assertion Validation\n    SP->>SP: Decode and verify IdP signature on Assertion\n    SP->>SP: Validate Conditions (NotBefore/NotOnOrAfter)\n    SP->>SP: Validate AudienceRestriction matches SP entity ID\n    SP->>SP: Check for assertion replay (unique ID not used before)\n    SP->>SP: Extract attributes from AttributeStatement\n    SP->>SP: Create local session for user\n    SP->>User: Redirect to https://app.example.com/dashboard\n    User->>SP: Access dashboard — session established\n    SP->>User: 200 OK — Dashboard rendered\n    end\n\n    Note over User,SP: SSO Complete — user is logged in without separate credentials at SP\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }

}]);