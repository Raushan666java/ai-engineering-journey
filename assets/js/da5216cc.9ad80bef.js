"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[96928],{

/***/ 54352
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cyber_security_02_cryptography_md_da5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cyber-security-02-cryptography-md-da5.json
const site_docs_courses_cyber_security_02_cryptography_md_da5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cyber-security/02-cryptography","title":"Chapter 2: Cryptography","description":"Prereq: Chapter 1 (Security Fundamentals) → cryptography provides the mathematical controls for achieving CIA goals.","source":"@site/docs/courses/cyber-security/02-cryptography.md","sourceDirName":"courses/cyber-security","slug":"/cyber-security/02-cryptography","permalink":"/ai-engineering-journey/cyber-security/02-cryptography","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-cryptography","slug":"/cyber-security/02-cryptography","title":"Chapter 2: Cryptography","sidebar_label":"Chapter 2: Cryptography","sidebar_position":2},"sidebar":"course-cyber-security","previous":{"title":"Chapter 1: Security Fundamentals","permalink":"/ai-engineering-journey/cyber-security/01-fundamentals"},"next":{"title":"Chapter 3: Network Security","permalink":"/ai-engineering-journey/cyber-security/03-network-security"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cyber-security/02-cryptography.md


const frontMatter = {
	id: '02-cryptography',
	slug: '/cyber-security/02-cryptography',
	title: 'Chapter 2: Cryptography',
	sidebar_label: 'Chapter 2: Cryptography',
	sidebar_position: 2
};
const contentTitle = 'Chapter 2: Cryptography';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "2.1 Symmetric Encryption",
  "id": "21-symmetric-encryption",
  "level": 2
}, {
  "value": "2.1.1 Overview &amp; Lockbox Analogy",
  "id": "211-overview--lockbox-analogy",
  "level": 3
}, {
  "value": "2.1.2 AES → Advanced Encryption Standard",
  "id": "212-aes--advanced-encryption-standard",
  "level": 3
}, {
  "value": "AES Internal Operations (per round)",
  "id": "aes-internal-operations-per-round",
  "level": 4
}, {
  "value": "AES-128 Key Expansion",
  "id": "aes-128-key-expansion",
  "level": 4
}, {
  "value": "Pseudocode: AES-128 Encrypt",
  "id": "pseudocode-aes-128-encrypt",
  "level": 4
}, {
  "value": "Dry Run: AES-128 Single Block (Simplified)",
  "id": "dry-run-aes-128-single-block-simplified",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 4
}, {
  "value": "Attack Vectors on AES",
  "id": "attack-vectors-on-aes",
  "level": 4
}, {
  "value": "2.1.3 AES Modes of Operation",
  "id": "213-aes-modes-of-operation",
  "level": 3
}, {
  "value": "ECB (Electronic Codebook)",
  "id": "ecb-electronic-codebook",
  "level": 4
}, {
  "value": "CBC (Cipher Block Chaining)",
  "id": "cbc-cipher-block-chaining",
  "level": 4
}, {
  "value": "CTR (Counter Mode)",
  "id": "ctr-counter-mode",
  "level": 4
}, {
  "value": "GCM (Galois/Counter Mode)",
  "id": "gcm-galoiscounter-mode",
  "level": 4
}, {
  "value": "AES Modes Comparison Table",
  "id": "aes-modes-comparison-table",
  "level": 4
}, {
  "value": "2.1.4 ChaCha20",
  "id": "214-chacha20",
  "level": 3
}, {
  "value": "ChaCha20 Quarter Round",
  "id": "chacha20-quarter-round",
  "level": 4
}, {
  "value": "ChaCha20 Block Function",
  "id": "chacha20-block-function",
  "level": 4
}, {
  "value": "ChaCha20 Block Function Dry Run",
  "id": "chacha20-block-function-dry-run",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 4
}, {
  "value": "2.1.5 Symmetric Encryption Summary",
  "id": "215-symmetric-encryption-summary",
  "level": 3
}, {
  "value": "2.1.6 Mathematical Foundations for Cryptography",
  "id": "216-mathematical-foundations-for-cryptography",
  "level": 2
}, {
  "value": "Modular Arithmetic",
  "id": "modular-arithmetic",
  "level": 3
}, {
  "value": "Euler&#39;s Theorem",
  "id": "eulers-theorem",
  "level": 3
}, {
  "value": "Extended Euclidean Algorithm",
  "id": "extended-euclidean-algorithm",
  "level": 3
}, {
  "value": "Discrete Logarithm Problem",
  "id": "discrete-logarithm-problem",
  "level": 3
}, {
  "value": "Elliptic Curve Discrete Logarithm (ECDLP)",
  "id": "elliptic-curve-discrete-logarithm-ecdlp",
  "level": 3
}, {
  "value": "Finite Fields (Galois Fields)",
  "id": "finite-fields-galois-fields",
  "level": 3
}, {
  "value": "Hash Function Security Foundations",
  "id": "hash-function-security-foundations",
  "level": 3
}, {
  "value": "2.2 Asymmetric Encryption",
  "id": "22-asymmetric-encryption",
  "level": 2
}, {
  "value": "2.2.1 Overview &amp; Mail Slot Analogy",
  "id": "221-overview--mail-slot-analogy",
  "level": 3
}, {
  "value": "2.2.2 RSA (Rivest–Shamir–Adleman)",
  "id": "222-rsa-rivestshamiradleman",
  "level": 3
}, {
  "value": "RSA Key Generation → Numbered Steps",
  "id": "rsa-key-generation--numbered-steps",
  "level": 4
}, {
  "value": "RSA Encryption",
  "id": "rsa-encryption",
  "level": 4
}, {
  "value": "RSA Decryption",
  "id": "rsa-decryption",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 4
}, {
  "value": "Dry Run: RSA with Toy Numbers",
  "id": "dry-run-rsa-with-toy-numbers",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-1",
  "level": 4
}, {
  "value": "Attack Vectors on RSA",
  "id": "attack-vectors-on-rsa",
  "level": 4
}, {
  "value": "2.2.3 Diffie-Hellman Key Exchange",
  "id": "223-diffie-hellman-key-exchange",
  "level": 3
}, {
  "value": "Diffie-Hellman Steps",
  "id": "diffie-hellman-steps",
  "level": 4
}, {
  "value": "Dry Run: Diffie-Hellman with Toy Numbers",
  "id": "dry-run-diffie-hellman-with-toy-numbers",
  "level": 4
}, {
  "value": "Attack Vectors on Diffie-Hellman",
  "id": "attack-vectors-on-diffie-hellman",
  "level": 4
}, {
  "value": "2.2.4 Elliptic Curve Cryptography (ECC)",
  "id": "224-elliptic-curve-cryptography-ecc",
  "level": 3
}, {
  "value": "ECDH Key Exchange",
  "id": "ecdh-key-exchange",
  "level": 4
}, {
  "value": "ECDSA Signatures",
  "id": "ecdsa-signatures",
  "level": 4
}, {
  "value": "Complexity Analysis of ECC",
  "id": "complexity-analysis-of-ecc",
  "level": 4
}, {
  "value": "Attack Vectors on ECC",
  "id": "attack-vectors-on-ecc",
  "level": 4
}, {
  "value": "2.2.5 Asymmetric Encryption Summary",
  "id": "225-asymmetric-encryption-summary",
  "level": 3
}, {
  "value": "2.3 Hash Functions",
  "id": "23-hash-functions",
  "level": 2
}, {
  "value": "2.3.1 Properties of Cryptographic Hash Functions",
  "id": "231-properties-of-cryptographic-hash-functions",
  "level": 3
}, {
  "value": "2.3.2 SHA-256 (Secure Hash Algorithm 2)",
  "id": "232-sha-256-secure-hash-algorithm-2",
  "level": 3
}, {
  "value": "2.3.3 SHA-3 (Keccak)",
  "id": "233-sha-3-keccak",
  "level": 3
}, {
  "value": "2.3.4 Blake2",
  "id": "234-blake2",
  "level": 3
}, {
  "value": "2.3.5 MD5 Collision Risk",
  "id": "235-md5-collision-risk",
  "level": 3
}, {
  "value": "2.3.6 Hash Function Comparison",
  "id": "236-hash-function-comparison",
  "level": 3
}, {
  "value": "2.3.7 Applications of Hash Functions",
  "id": "237-applications-of-hash-functions",
  "level": 3
}, {
  "value": "2.3.8 Length Extension Attack",
  "id": "238-length-extension-attack",
  "level": 2
}, {
  "value": "2.4 HMAC → Keyed-Hash Message Authentication Code",
  "id": "24-hmac--keyed-hash-message-authentication-code",
  "level": 2
}, {
  "value": "2.5 Digital Signatures",
  "id": "25-digital-signatures",
  "level": 2
}, {
  "value": "2.6 Public Key Infrastructure (PKI)",
  "id": "26-public-key-infrastructure-pki",
  "level": 2
}, {
  "value": "2.6.1 Purpose",
  "id": "261-purpose",
  "level": 3
}, {
  "value": "2.6.2 X.509 Certificate Structure (RFC 5280)",
  "id": "262-x509-certificate-structure-rfc-5280",
  "level": 3
}, {
  "value": "2.6.3 CA Hierarchy &amp; Certificate Chains",
  "id": "263-ca-hierarchy--certificate-chains",
  "level": 3
}, {
  "value": "2.6.4 CRL (Certificate Revocation List)",
  "id": "264-crl-certificate-revocation-list",
  "level": 3
}, {
  "value": "2.6.5 OCSP (Online Certificate Status Protocol)",
  "id": "265-ocsp-online-certificate-status-protocol",
  "level": 3
}, {
  "value": "2.6.6 Trust Stores",
  "id": "266-trust-stores",
  "level": 3
}, {
  "value": "2.6.7 Attack Vectors on PKI",
  "id": "267-attack-vectors-on-pki",
  "level": 3
}, {
  "value": "2.7 TLS 1.3 Handshake",
  "id": "27-tls-13-handshake",
  "level": 2
}, {
  "value": "2.7.1 Overview",
  "id": "271-overview",
  "level": 3
}, {
  "value": "2.7.2 TLS 1.3 Full Handshake (1-RTT)",
  "id": "272-tls-13-full-handshake-1-rtt",
  "level": 3
}, {
  "value": "2.7.3 TLS 1.3 0-RTT (Early Data)",
  "id": "273-tls-13-0-rtt-early-data",
  "level": 3
}, {
  "value": "2.7.4 TLS 1.2 vs 1.3 Comparison",
  "id": "274-tls-12-vs-13-comparison",
  "level": 3
}, {
  "value": "2.7.5 Attack Vectors on TLS",
  "id": "275-attack-vectors-on-tls",
  "level": 3
}, {
  "value": "2.8 SSH Key Exchange",
  "id": "28-ssh-key-exchange",
  "level": 2
}, {
  "value": "2.9 PGP (Pretty Good Privacy)",
  "id": "29-pgp-pretty-good-privacy",
  "level": 2
}, {
  "value": "2.10 Practical Examples",
  "id": "210-practical-examples",
  "level": 2
}, {
  "value": "2.10.1 OpenSSL: AES Encryption/Decryption",
  "id": "2101-openssl-aes-encryptiondecryption",
  "level": 3
}, {
  "value": "2.10.2 OpenSSL: RSA Keypair and Sign/Verify",
  "id": "2102-openssl-rsa-keypair-and-signverify",
  "level": 3
}, {
  "value": "2.10.3 OpenSSL: Self-Signed Certificate",
  "id": "2103-openssl-self-signed-certificate",
  "level": 3
}, {
  "value": "2.10.4 OpenSSL: Inspecting Real Certificates",
  "id": "2104-openssl-inspecting-real-certificates",
  "level": 3
}, {
  "value": "2.10.5 GPG: Symmetric and Asymmetric Encryption",
  "id": "2105-gpg-symmetric-and-asymmetric-encryption",
  "level": 3
}, {
  "value": "2.10.6 Hash Collision Demo",
  "id": "2106-hash-collision-demo",
  "level": 3
}, {
  "value": "2.10.7 TLS Handshake Capture with Wireshark",
  "id": "2107-tls-handshake-capture-with-wireshark",
  "level": 3
}, {
  "value": "2.10.8 Certificate Inspection with certigo / openssl s_client",
  "id": "2108-certificate-inspection-with-certigo--openssl-s_client",
  "level": 3
}, {
  "value": "2.11 Case Studies",
  "id": "211-case-studies",
  "level": 2
}, {
  "value": "2.11.1 Heartbleed (CVE-2014-0160)",
  "id": "2111-heartbleed-cve-2014-0160",
  "level": 3
}, {
  "value": "2.11.2 POODLE (CVE-2014-3566)",
  "id": "2112-poodle-cve-2014-3566",
  "level": 3
}, {
  "value": "2.11.3 SHA-1 Collision → SHAttered (2017)",
  "id": "2113-sha-1-collision--shattered-2017",
  "level": 3
}, {
  "value": "2.11.4 Logjam (CVE-2015-4000)",
  "id": "2114-logjam-cve-2015-4000",
  "level": 3
}, {
  "value": "2.12 Deep Comparison Tables",
  "id": "212-deep-comparison-tables",
  "level": 2
}, {
  "value": "2.12.1 Symmetric vs Asymmetric Encryption",
  "id": "2121-symmetric-vs-asymmetric-encryption",
  "level": 3
}, {
  "value": "2.12.2 RSA vs ECC Key Size Comparison",
  "id": "2122-rsa-vs-ecc-key-size-comparison",
  "level": 3
}, {
  "value": "2.12.3 TLS 1.2 vs 1.3",
  "id": "2123-tls-12-vs-13",
  "level": 3
}, {
  "value": "2.12.4 AES Mode Comparison",
  "id": "2124-aes-mode-comparison",
  "level": 3
}, {
  "value": "2.13 Post-Quantum Cryptography (PQC)",
  "id": "213-post-quantum-cryptography-pqc",
  "level": 2
}, {
  "value": "2.14 Common Cryptographic Mistakes",
  "id": "214-common-cryptographic-mistakes",
  "level": 2
}, {
  "value": "Mistake 1: Nonce/IV Reuse in GCM or CTR",
  "id": "mistake-1-nonceiv-reuse-in-gcm-or-ctr",
  "level": 3
}, {
  "value": "Mistake 2: Using ECB Mode",
  "id": "mistake-2-using-ecb-mode",
  "level": 3
}, {
  "value": "Mistake 3: Hardcoded Cryptographic Keys",
  "id": "mistake-3-hardcoded-cryptographic-keys",
  "level": 3
}, {
  "value": "Mistake 4: Weak Random Number Generation",
  "id": "mistake-4-weak-random-number-generation",
  "level": 3
}, {
  "value": "Mistake 5: Padding Oracle Vulnerabilities",
  "id": "mistake-5-padding-oracle-vulnerabilities",
  "level": 3
}, {
  "value": "Mistake 6: Self-Implemented Cryptography",
  "id": "mistake-6-self-implemented-cryptography",
  "level": 3
}, {
  "value": "Mistake 7: Key Management Failures",
  "id": "mistake-7-key-management-failures",
  "level": 3
}, {
  "value": "Mistake 8: Timing Side-Channels",
  "id": "mistake-8-timing-side-channels",
  "level": 3
}, {
  "value": "Mistake 9: Failure to Validate Certificates",
  "id": "mistake-9-failure-to-validate-certificates",
  "level": 3
}, {
  "value": "Mistake 10: Using Broken Algorithms",
  "id": "mistake-10-using-broken-algorithms",
  "level": 3
}, {
  "value": "2.15 Interview Corner",
  "id": "215-interview-corner",
  "level": 2
}, {
  "value": "Q1: Explain the difference between symmetric and asymmetric encryption.",
  "id": "q1-explain-the-difference-between-symmetric-and-asymmetric-encryption",
  "level": 3
}, {
  "value": "Q2: How does the TLS 1.3 handshake work?",
  "id": "q2-how-does-the-tls-13-handshake-work",
  "level": 3
}, {
  "value": "Q3: What is the difference between AES-CBC and AES-GCM?",
  "id": "q3-what-is-the-difference-between-aes-cbc-and-aes-gcm",
  "level": 3
}, {
  "value": "Q4: Explain the N+1 problem in the context of cryptography. (Trick question → redirects to ORM/databases)",
  "id": "q4-explain-the-n1-problem-in-the-context-of-cryptography-trick-question--redirects-to-ormdatabases",
  "level": 3
}, {
  "value": "Q5: What is forward secrecy and why does it matter?",
  "id": "q5-what-is-forward-secrecy-and-why-does-it-matter",
  "level": 3
}, {
  "value": "Q6: How does a digital signature provide non-repudiation?",
  "id": "q6-how-does-a-digital-signature-provide-non-repudiation",
  "level": 3
}, {
  "value": "Q7: What happens in a padding oracle attack?",
  "id": "q7-what-happens-in-a-padding-oracle-attack",
  "level": 3
}, {
  "value": "Q8: How does RSA key generation work?",
  "id": "q8-how-does-rsa-key-generation-work",
  "level": 3
}, {
  "value": "Q9: What is the quantum threat to cryptography?",
  "id": "q9-what-is-the-quantum-threat-to-cryptography",
  "level": 3
}, {
  "value": "Q10: Explain the difference between CRL and OCSP.",
  "id": "q10-explain-the-difference-between-crl-and-ocsp",
  "level": 3
}, {
  "value": "Q11: What is the birthday attack on hash functions?",
  "id": "q11-what-is-the-birthday-attack-on-hash-functions",
  "level": 3
}, {
  "value": "Q12: How does SSH public key authentication work?",
  "id": "q12-how-does-ssh-public-key-authentication-work",
  "level": 3
}, {
  "value": "Q13: What is the difference between a hash function and HMAC?",
  "id": "q13-what-is-the-difference-between-a-hash-function-and-hmac",
  "level": 3
}, {
  "value": "Q14: Explain the concept of perfect forward secrecy.",
  "id": "q14-explain-the-concept-of-perfect-forward-secrecy",
  "level": 3
}, {
  "value": "Q15: How does hybrid encryption work in PGP?",
  "id": "q15-how-does-hybrid-encryption-work-in-pgp",
  "level": 3
}, {
  "value": "Q16: What is a cryptographic salt and why is it used?",
  "id": "q16-what-is-a-cryptographic-salt-and-why-is-it-used",
  "level": 3
}, {
  "value": "Q17: What is the difference between SSL and TLS?",
  "id": "q17-what-is-the-difference-between-ssl-and-tls",
  "level": 3
}, {
  "value": "Q18: How does a Certificate Authority issue and manage certificates?",
  "id": "q18-how-does-a-certificate-authority-issue-and-manage-certificates",
  "level": 3
}, {
  "value": "Q19: What is Shamir&#39;s Secret Sharing and how does it work?",
  "id": "q19-what-is-shamirs-secret-sharing-and-how-does-it-work",
  "level": 3
}, {
  "value": "Q20: What is HKDF and when is it used?",
  "id": "q20-what-is-hkdf-and-when-is-it-used",
  "level": 3
}, {
  "value": "2.16 Applications in Real Systems",
  "id": "216-applications-in-real-systems",
  "level": 2
}, {
  "value": "2.16.1 Cryptography Hardening Checklist",
  "id": "2161-cryptography-hardening-checklist",
  "level": 3
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
  "value": "Case Study Analysis",
  "id": "case-study-analysis",
  "level": 3
}, {
  "value": "Coding Challenges",
  "id": "coding-challenges",
  "level": 3
}, {
  "value": "Research Questions",
  "id": "research-questions",
  "level": 3
}, {
  "value": "TypeScript Implementations",
  "id": "typescript-implementations",
  "level": 2
}, {
  "value": "TypeScript Example #1: AES-256-GCM Encryption Utility",
  "id": "typescript-example-1-aes-256-gcm-encryption-utility",
  "level": 3
}, {
  "value": "TypeScript Example #2: RSA Digital Signature",
  "id": "typescript-example-2-rsa-digital-signature",
  "level": 3
}, {
  "value": "Mermaid Diagrams",
  "id": "mermaid-diagrams",
  "level": 2
}, {
  "value": "TLS 1.3 Handshake Sequence",
  "id": "tls-13-handshake-sequence",
  "level": 3
}, {
  "value": "PKI Certificate Chain",
  "id": "pki-certificate-chain",
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
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
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
        id: "chapter-2-cryptography",
        children: "Chapter 2: Cryptography"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapter 1 (Security Fundamentals) → cryptography provides the mathematical controls for achieving CIA goals.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 3 (Network Security) → protocols like TLS, IPsec, and SSH depend on the primitives defined here."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "lesson-visuals",
      "aria-label": "Visual learning resources",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.header, {
        children: [(0,jsx_runtime.jsx)(_components.span, {
          children: "VISUAL LEARNING"
        }), (0,jsx_runtime.jsx)(_components.h2, {
          children: "See it. Review it. Remember it."
        })]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cyber-security/02-cryptography/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/02-cryptography/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cyber-security/02-cryptography/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/02-cryptography/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cyber-security/02-cryptography/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/02-cryptography/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare symmetric and asymmetric encryption across performance, key management, and use cases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the internal structure of AES (SubBytes, ShiftRows, MixColumns, AddRoundKey) and contrast ECB/CBC/GCM/CTR modes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the mathematical foundations of RSA (modular arithmetic, Euler's theorem) and ECC (elliptic curve discrete log)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Walk through the TLS 1.3 handshake step by step and contrast it with TLS 1.2."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze real-world crypto attacks: Heartbleed, POODLE, SHAttered, Logjam → their root cause and fix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use openssl and gpg to encrypt, sign, verify, and inspect certificates from the command line."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Articulate post-quantum cryptography risks and candidate algorithms (CRYSTALS-Kyber, Dilithium)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetric Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES, ChaCha20 → single key, bulk speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk encryption (BitLocker), HTTPS bulk data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Asymmetric Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA, ECC, DH → key pair, solves key distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS handshake, PGP, SSH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-256/3, Blake2, MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File integrity, password hashing, git commits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keyed-hash message authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API authentication (AWS SigV4), JWT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Digital Signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sign with private, verify with public"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code signing, document signing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PKI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X.509, CA hierarchy, CRL, OCSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTPS certificates, email S/MIME"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TLS 1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern secure channel protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTPS (95%+ of web traffic)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure shell key exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote server administration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PGP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web of trust, hybrid encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email encryption (Signal precursor)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Crypto[Cryptography] --> Sym[Symmetric]\n    Crypto --> Asym[Asymmetric]\n    Crypto --> Hash[Hash Functions]\n    Crypto --> PKI[PKI / Certs]\n    Sym --> AES[AES / ChaCha20]\n    Asym --> RSA[RSA / ECC / DH]\n    Hash --> SHA[SHA-2/3, Blake2]\n    PKI --> TLS[TLS 1.3]\n    TLS --> HTTPS[HTTPS / Web]\n    style Crypto fill:#e1f5fe\n    style TLS fill:#c8e6c9\n    style HTTPS fill:#a5d6a7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-symmetric-encryption",
      children: "2.1 Symmetric Encryption"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "211-overview--lockbox-analogy",
      children: "2.1.1 Overview & Lockbox Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A lockbox with a single key. Alice puts a message in the box, locks it with key K, and sends the box to Bob. Bob uses the same key K to open it. Anyone who copies key K can read all messages."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " A single secret key shared between sender and receiver is used for both encryption and decryption."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "C = E(K, P)      Encryption: plaintext P + key K → ciphertext C\nP = D(K, C)      Decryption: ciphertext C + key K → plaintext P\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fast (hardware-accelerated on modern CPUs: AES-NI instructions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Suitable for bulk data (disk, network, database encryption)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key distribution problem: both parties must share the same secret key securely"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "128-bit key = 2¹²⁸ brute-force attempts (physically impossible with current hardware)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "212-aes--advanced-encryption-standard",
      children: "2.1.2 AES → Advanced Encryption Standard"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "History:"
      }), " NIST competition 1997–2000. Winner: Rijndael (Daemen & Rijmen). Standardized as FIPS-197."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Block size: 128 bits (16 bytes) → always"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key sizes: 128, 192, 256 bits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rounds: 10 (AES-128), 12 (AES-192), 14 (AES-256)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "aes-internal-operations-per-round",
      children: "AES Internal Operations (per round)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each round applies four transformations (except the final round which omits MixColumns):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Plaintext block (16 bytes) → AddRoundKey → SubBytes → ShiftRows → MixColumns → AddRoundKey → ... → Ciphertext\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. SubBytes → Non-linear Byte Substitution"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each byte is replaced using a 16×16 S-box (inverse in GF(2⁸))."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Example: byte 0x53 → S-box lookup → 0xED\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The S-box is designed to resist linear and differential cryptanalysis. It is the only non-linear step → without it, AES would be a giant linear system solvable by Gaussian elimination."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. ShiftRows → Byte Transposition"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rows of the 4×4 state matrix are shifted left by 0, 1, 2, 3 positions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Row 0: no shift\nRow 1: shift left 1\nRow 2: shift left 2\nRow 3: shift left 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This diffuses the column-wise mixing across rows."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. MixColumns → Column Mixing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each column (4 bytes) is treated as a polynomial over GF(2⁸) and multiplied by a fixed polynomial:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "a(x) = {03}x³ + {01}x² + {01}x + {02}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This provides diffusion → changing one byte of input changes all 4 bytes of the column output."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. AddRoundKey → XOR with Round Key"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The 16-byte state is XORed with the 16-byte round key derived from the key expansion schedule."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "aes-128-key-expansion",
      children: "AES-128 Key Expansion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From the 16-byte cipher key, the expansion produces 10 round keys (each 16 bytes):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Round key 0 = Cipher key (bytes 0-15)\nFor i = 1 to 10:\n    temp = RotWord(SubWord(RoundKey[i-1][12..15])) XOR Rcon[i]\n    RoundKey[i][0..3] = RoundKey[i-1][0..3] XOR temp\n    For j = 4 to 16 step 4:\n        RoundKey[i][j..j+3] = RoundKey[i-1][j..j+3] XOR RoundKey[i][j-4..j-1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RotWord: left-rotate 4 bytes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SubWord: apply S-box to each byte"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rcon[i]: round constant (x^(i-1) in GF(2⁸))"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-aes-128-encrypt",
      children: "Pseudocode: AES-128 Encrypt"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AES_Encrypt(byte[16] plaintext, byte[16] key):\n    state = plaintext\n    roundKeys = KeyExpansion(key)\n    \n    state = AddRoundKey(state, roundKeys[0])\n    \n    for round = 1 to 9:\n        state = SubBytes(state)\n        state = ShiftRows(state)\n        state = MixColumns(state)\n        state = AddRoundKey(state, roundKeys[round])\n    \n    state = SubBytes(state)\n    state = ShiftRows(state)\n    state = AddRoundKey(state, roundKeys[10])\n    \n    return state\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-aes-128-single-block-simplified",
      children: "Dry Run: AES-128 Single Block (Simplified)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We use a toy 16-byte plaintext and key (actual AES uses full 10 rounds; we trace 2 rounds for clarity):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "plaintext = 6B C1 BE E2 2E 40 9F 96 E9 3D 7E 11 73 93 17 2A"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 CF 4F 3C"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table → Step by Step:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State (hex, 4×4 array)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[6B C1 BE E2] [2E 40 9F 96] [E9 3D 7E 11] [73 93 17 2A]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 bytes arranged column-major"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AddRoundKey[0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[40 BF AB F4] [06 4D 4D 30] [C2 AD 6B 99] [7A 9C 58 16]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XOR with first round key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SubBytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[09 08 62 BF] [6F E3 E3 04] [25 95 7F EE] [DA DE 6A 47]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S-box lookup per byte"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ShiftRows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[09 08 62 BF] [E3 E3 04 6F] [7F EE 25 95] [47 DA DE 6A]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row 1 shifts 1 left, Row 2 shifts 2, Row 3 shifts 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MixColumns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[45 62 1A 3C] [A9 7B 4F 6E] [C1 21 D9 45] [33 D2 E1 12]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GF(2⁸) polynomial multiplication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AddRoundKey[1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[6A 4B 5E 7F] [84 3A 27 8D] [FA 41 96 3B] [5A 96 7D C8]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XOR with round key 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(rounds 2-9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full 10-round trace omitted for space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Final"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AddRoundKey[10]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[3A D7 7B B4] [0D 7A 36 60] [A8 9E CA F3] [24 66 EF 97]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Final ciphertext"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The avalanche effect is visible: changing 1 bit of plaintext produces ~64 changed bits in the ciphertext after 10 rounds."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128 / 192 / 256 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Larger key = exponential brute-force cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 / 12 / 14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More rounds = better diffusion, higher latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large enough for security, small enough for efficient hardware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b) → linear in block count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each block processed independently in CTR/GCM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed state matrix (16 bytes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 cycle/byte with AES-NI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware acceleration on modern x86/ARM"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extremely fast in hardware (AES-NI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block cipher → needs a mode of operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NIST standard, extensively analyzed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECB mode leaks patterns (see below)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No known practical attacks on full rounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key must be kept secret"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "128-bit security adequate for decades"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Side-channel vulnerable without masked implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIPS 140 validated implementations widely available"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not quantum-resistant (Grover's halves security)"
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
          children: "Same key + same plaintext = same ciphertext"
        }), " in ECB mode (deterministic)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Padding oracle attacks"
        }), " on CBC mode (see POODLE case study)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nonce reuse"
        }), " in GCM is catastrophic → reveals authentication key"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "attack-vectors-on-aes",
      children: "Attack Vectors on AES"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Feasibility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Brute-force (exhaustive key search)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All AES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2¹²⁸ impossible with current tech"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large key size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Related-key attack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-192/256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theoretical (academic papers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid related keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Side-channel (timing, cache)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Software impl."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical (controlled env.)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant-time code, masked impl."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power analysis (DPA/SPA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware impl."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical (smart cards)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Masking, blinding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantum (Grover's)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces to 2⁶⁴ effort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use AES-256"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fault injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware impl."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical (lab conditions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundant computation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "213-aes-modes-of-operation",
      children: "2.1.3 AES Modes of Operation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AES encrypts 128-bit blocks. A mode defines how to apply the block cipher to messages longer than 16 bytes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ecb-electronic-codebook",
      children: "ECB (Electronic Codebook)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Each 128-bit block is encrypted independently with the same key."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "C[i] = AES_Encrypt(K, P[i])\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A codebook where each word maps to a fixed code word. Same input → same output."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Visual problem:"
      }), " Patterns in the plaintext survive in the ciphertext. The famous \"ECB penguin\" image shows the Tux logo still visible after encryption because identical pixel blocks encrypt to identical ciphertext blocks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace (2 blocks):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Plaintext (hex)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ciphertext (hex)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P[0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "6B C1 BE E2 2E 40 9F 96 ..."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3A D7 7B B4 0D 7A 36 60 ..."
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P[1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "6B C1 BE E2 2E 40 9F 96 ..."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3A D7 7B B4 0D 7A 36 60 ..."
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Identical plaintext blocks produce identical ciphertext → the fatal flaw."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack vector:"
      }), " Chosen-plaintext attack. If the attacker controls part of the plaintext and observes the ciphertext, they can build a codebook. Used in cookie manipulation attacks."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verdict:"
      }), " Never use ECB for anything security-sensitive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cbc-cipher-block-chaining",
      children: "CBC (Cipher Block Chaining)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Each plaintext block is XORed with the previous ciphertext block before encryption."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "C[0] = AES_Encrypt(K, P[0] XOR IV)\nC[i] = AES_Encrypt(K, P[i] XOR C[i-1])\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A chain of lockboxes where each box's combination depends on the previous box's content."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "IV requirement:"
      }), " Must be random and unique per encryption. Same IV + same key → same ciphertext."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Trace (2 blocks with IV = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A1 B2 C3 D4 E5 F6 07 18 29 3A 4B 5C 6D 7E 8F 90"
        }), "):"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input to AES XOR"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ciphertext"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P[0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CA 73 7D 36 CB B6 A8 8E C0 07 35 4D 1E ED 98 BA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "18 23 45 67 89 AB CD EF FE DC BA 98 76 54 32 10"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P[1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "73 E2 FB 85 A7 EB 50 79 17 6E C4 79 05 C7 65 3E"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "55 AA 66 BB 77 CC 88 DD 99 EE 11 FF 22 00 33 44"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack vectors:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Padding oracle attack"
        }), " (see POODLE case study) → if the server reveals whether padding is valid, the attacker can decrypt byte-by-byte."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IV reuse"
        }), " with same key reveals whether two plaintexts start with the same block."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verdict:"
      }), " Secure when used correctly, but padding-dependent. Deprecated by GCM."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ctr-counter-mode",
      children: "CTR (Counter Mode)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " AES encrypts a counter value, and the output is XORed with plaintext."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "C[i] = P[i] XOR AES_Encrypt(K, Nonce || Counter_i)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A one-time pad where the pad is generated by AES instead of being truly random."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parallelizable (each counter block encrypted independently)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No padding required (stream cipher behavior)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Seekable (random access: decrypt any block without processing others)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Trace (2 blocks, Nonce = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "00 00 00 00 00 00 00 00"
        }), "):"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Counter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AES output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Plaintext"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ciphertext"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "A1 2B 3C 4D 5E 6F 70 81 92 A3 B4 C5 D6 E7 F8 09"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "6B C1 BE E2 ..."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CA EA 82 2F ..."
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 02"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "9A BC DE F0 12 34 56 78 90 AB CD EF 01 23 45 67"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E9 3D 7E 11 ..."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "73 81 DB E7 ..."
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack vectors:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nonce reuse"
        }), " is catastrophic: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "C1 XOR C2 = P1 XOR P2"
        }), " reveals both plaintexts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bit-flipping"
        }), " → attacker can flip plaintext bits predictably (no authentication)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verdict:"
      }), " Fast, parallel, no padding → but requires authentication (GCM = CTR + GMAC)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "gcm-galoiscounter-mode",
      children: "GCM (Galois/Counter Mode)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " CTR mode for encryption + GHASH (GMAC) for authentication."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "C[i] = P[i] XOR AES_Encrypt(K, Nonce || Counter_i)\nAuthTag = GHASH(H, AAD, C) XOR AES_Encrypt(K, Nonce || Counter_0)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A tamper-evident encrypted envelope. Not only is the message encrypted, but any modification is detectable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authenticated encryption (AEAD):"
        }), " provides both confidentiality and integrity"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parallel encryption (bulk of CTR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single-pass (encrypt + MAC in one pass)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires unique nonce per key → 2³² block limit per key (96-bit nonce)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace (2 blocks + auth tag):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C[0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CA EA 82 2F 4B 5C 6D 7E 8F 90 12 34 56 78 90 AB"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C[1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "73 81 DB E7 F0 12 34 56 78 90 AB CD EF 01 23 45"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AuthTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "A5 C4 5B 6D 8E F0 12 34 56 78 90 AB CD EF 01 23"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack vectors:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nonce reuse"
        }), " leaks the GHASH key H, allowing forgery of all subsequent messages."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If message length exceeds 2³² blocks (64 GB), collision probability on counter grows."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Timing side-channel on GHASH multiplication (mitigated with CLMUL instructions)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verdict:"
      }), " The recommended mode for TLS 1.3 and most modern applications."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "aes-modes-comparison-table",
      children: "AES Modes Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ECB"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CBC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CTR"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GCM"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel decryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Padding required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (PKCS#7)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (PKCS#7)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (AEAD)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ciphertext size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "= plaintext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "= plaintext + pad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "= plaintext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "= plaintext + 16B tag"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IV/Nonce size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12-16 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 bytes (recommended)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insecure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure with good IV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure with good IV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recommended"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS, VPN, modern protocols"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "214-chacha20",
      children: "2.1.4 ChaCha20"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "History:"
      }), " Designed by Daniel J. Bernstein (2008). Variant ChaCha20 (20 rounds) specified in RFC 8439. Used in TLS 1.3 cipher suites (TLS_CHACHA20_POLY1305_SHA256). Google's choice for Android HTTPS."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A cryptographic hash function repurposed as a stream cipher. Like a high-speed water hose → the key and nonce generate an endless stream of pseudo-random bytes that are XORed with plaintext."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "chacha20-quarter-round",
      children: "ChaCha20 Quarter Round"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The core operation transforms 4 32-bit words (a, b, c, d):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "a += b; d ^= a; d <<<= 16\nc += d; b ^= c; b <<<= 12\na += b; d ^= a; d <<<= 8\nc += d; b ^= c; b <<<= 7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each operation is: addition (mod 2³²), XOR, and rotation → all fast on 32-bit CPUs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "chacha20-block-function",
      children: "ChaCha20 Block Function"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initializes a 4×4 matrix of 32-bit words:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"expa\"   \"nd 3\"   \"2-by\"   \"te k\"\nKey[0]   Key[1]   Key[2]   Key[3]\nKey[4]   Key[5]   Key[6]   Key[7]\nCounter  Nonce[0] Nonce[1] Nonce[2]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Then applies 20 rounds (10 double rounds) of quarter-round operations on columns and diagonals."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ChaCha20_Block(key, counter, nonce):\n    state = InitializeState(key, counter, nonce)\n    working = state\n    \n    for i = 1 to 10:          // 10 double rounds\n        // Column rounds\n        QR(working[0], working[4], working[8],  working[12])\n        QR(working[1], working[5], working[9],  working[13])\n        QR(working[2], working[6], working[10], working[14])\n        QR(working[3], working[7], working[11], working[15])\n        \n        // Diagonal rounds\n        QR(working[0], working[5], working[10], working[15])\n        QR(working[1], working[6], working[11], working[12])\n        QR(working[2], working[7], working[8],  working[13])\n        QR(working[3], working[4], working[9],  working[14])\n    \n    // Add original state\n    for i = 0 to 15:\n        output[i] = working[i] + state[i]\n    \n    return output\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "chacha20-block-function-dry-run",
      children: "ChaCha20 Block Function Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      }), " Key = ", (0,jsx_runtime.jsx)(_components.code, {
        children: "00:01:02:03:04:05:06:07:08:09:0a:0b:0c:0d:0e:0f:10:11:12:13:14:15:16:17:18:19:1a:1b:1c:1d:1e:1f"
      }), " (32 bytes), Nonce = ", (0,jsx_runtime.jsx)(_components.code, {
        children: "00:00:00:00:00:00:00:4a:00:00:00:00"
      }), ", Counter = 1."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial state matrix (16 × 32-bit words):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "61707865"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3320646e"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "79622d32"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "6b206574"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4-7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "03020100"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "07060504"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0b0a0908"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0f0e0d0c"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8-11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "13121110"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "17161514"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "1b1a1918"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "1f1e1d1c"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12-15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "00000001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "00000000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "00000000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "4a000000"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After first column-round QR(0,4,8,12):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "d"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "61707865"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "03020100"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "13121110"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "00000001"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "a += b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "64727965"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "03020100"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "13121110"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "00000001"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "d ^= a; d <<<= 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "64727965"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "03020100"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "13121110"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "64727965"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "c += d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "64727965"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "03020100"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "77748a75"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "64727965"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "b ^= c; b <<<= 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "64727965"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "84808085"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "77748a75"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "64727965"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "a += b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "e8f2f9ea"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "84808085"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "77748a75"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "64727965"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "d ^= a; d <<<= 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "e8f2f9ea"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "84808085"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "77748a75"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "76da85fd"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "c += d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "e8f2f9ea"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "84808085"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ee4f1072"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "76da85fd"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "b ^= c; b <<<= 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "e8f2f9ea"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "7e6f847a"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ee4f1072"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "76da85fd"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After 10 double rounds (20 QR operations total), the state is added to the initial state to produce the keystream block:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Output (64 bytes): 76 97 4a 23 ... (64 bytes of keystream)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each byte of plaintext is XORed with the corresponding keystream byte:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "C[i] = P[i] XOR Keystream[i]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the message is \"Hello ChaCha!\" (12 bytes), the first 12 keystream bytes are XORed and the rest of the keystream block is discarded → next message block uses counter = 2."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 (10 double)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provably sufficient for diffusion; 8 rounds broken"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3x faster than AES without AES-NI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Software-optimized, no S-box tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256-bit key, 128-bit expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conservative design margin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.66 cycles/byte on modern x86"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vectorized implementation (AVX2)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages over AES:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No hardware acceleration needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No timing side-channel via S-box table lookups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Constant-time by design (no data-dependent branches)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simpler implementation (no mode-of-operation decision)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Vectors:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nonce reuse:"
        }), " same catastrophic risk as CTR/GCM (XOR reveals keystream)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reduced-round variants:"
        }), " 7 rounds broken, 8 rounds has theoretical attack → 20 rounds is safe"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Side-channel:"
        }), " power analysis on the addition operation (impractical for software)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "215-symmetric-encryption-summary",
      children: "2.1.5 Symmetric Encryption Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Block Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AES-128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block (ECB/CBC/GCM/CTR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 cpB (HW)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AES-256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 cpB (HW)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ChaCha20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.66 cpB (SW)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block (obsolete)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broken (56-bit brute-force)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3DES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block (deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "112/168-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sweet32 birthday attack"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "216-mathematical-foundations-for-cryptography",
      children: "2.1.6 Mathematical Foundations for Cryptography"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cryptography is built on a few core mathematical concepts. Understanding these foundations demystifies the algorithms."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "modular-arithmetic",
      children: "Modular Arithmetic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a mod n"
      }), " is the remainder when a is divided by n. Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "17 mod 5 = 2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Congruence:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a ≡ b (mod n)"
      }), " means a and b have the same remainder when divided by n. Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "17 ≡ 2 (mod 5)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "(a + b) mod n = ((a mod n) + (b mod n)) mod n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "(a × b) mod n = ((a mod n) × (b mod n)) mod n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "(a^b) mod n = ((a mod n)^b) mod n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " AES uses GF(2⁸) arithmetic (a finite field with 256 elements) for MixColumns. RSA uses modular exponentiation. Diffie-Hellman uses modular exponentiation in a prime field."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eulers-theorem",
      children: "Euler's Theorem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Totient function φ(n):"
      }), " Count of integers between 1 and n that are coprime to n."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If n = p (prime), φ(p) = p - 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If n = p × q, φ(n) = (p-1)(q-1)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Euler's theorem:"
      }), " If gcd(a, n) = 1, then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a^φ(n) ≡ 1 (mod n)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " RSA encryption/decryption works because ", (0,jsx_runtime.jsx)(_components.code, {
        children: "m^(ed) mod n = m"
      }), " when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ed ≡ 1 mod φ(n)"
      }), ". The theorem guarantees that encryption and decryption are inverses."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "extended-euclidean-algorithm",
      children: "Extended Euclidean Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Finds integers x and y such that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ax + ny = gcd(a, n)"
      }), ". When gcd(a, n) = 1, x is the modular inverse of a: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ax ≡ 1 (mod n)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Find ", (0,jsx_runtime.jsx)(_components.code, {
        children: "17^(-1) mod 3120"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "3120 = 183 × 17 + 9      → 9 = 3120 - 183×17\n17 = 1 × 9 + 8           → 8 = 17 - 1×9\n9 = 1 × 8 + 1            → 1 = 9 - 1×8\n\nBack-substitute:\n1 = 9 - (17 - 9) = 2×9 - 17\n  = 2×(3120 - 183×17) - 17\n  = 2×3120 - 367×17\n  = -367 × 17 (mod 3120)\n  = 2753 × 17 (mod 3120)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Therefore ", (0,jsx_runtime.jsx)(_components.code, {
        children: "17 × 2753 = 46801 = 1 + 15×3120"
      }), ", so ", (0,jsx_runtime.jsx)(_components.code, {
        children: "17^(-1) mod 3120 = 2753"
      }), ". This is exactly the RSA dry run above."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "discrete-logarithm-problem",
      children: "Discrete Logarithm Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given ", (0,jsx_runtime.jsx)(_components.code, {
        children: "g"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "g^a mod p"
      }), ", find ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a"
      }), ". For large prime p (≥2048 bits), no efficient algorithm exists."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " Security of Diffie-Hellman and DSA depends on this. The RSA equivalent is the factoring problem (given n = p×q, find p and q). Both are believed to be hard for classical computers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "elliptic-curve-discrete-logarithm-ecdlp",
      children: "Elliptic Curve Discrete Logarithm (ECDLP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given points ", (0,jsx_runtime.jsx)(_components.code, {
        children: "P"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kP"
      }), " on an elliptic curve, find ", (0,jsx_runtime.jsx)(_components.code, {
        children: "k"
      }), ". This is believed to be HARDER than integer factorization for equivalent key sizes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " Security of ECDH, ECDSA, Ed25519. A 256-bit ECC key ≈ 3072-bit RSA key for equivalent security."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finite-fields-galois-fields",
      children: "Finite Fields (Galois Fields)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A finite field ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GF(p)"
      }), " contains p elements with addition and multiplication defined modulo p. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GF(2⁸)"
      }), " is the field with 256 elements used in AES."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AES MixColumns"
      }), " treats each byte as an element of GF(2⁸) with the irreducible polynomial ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x⁸ + x⁴ + x³ + x + 1"
      }), ". Multiplication is defined as polynomial multiplication followed by reduction modulo this polynomial."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " Finite fields provide the algebraic structure needed for the non-linearity and diffusion in AES and the group operations in ECC."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hash-function-security-foundations",
      children: "Hash Function Security Foundations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Birthday paradox:"
      }), " With ", (0,jsx_runtime.jsx)(_components.code, {
        children: "√(2^n)"
      }), " ≈ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2^(n/2)"
      }), " random samples from an n-bit space, probability of collision exceeds 50%."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implication:"
      }), " An n-bit hash provides only ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2^(n/2)"
      }), " collision resistance. SHA-256 (256-bit) = 2¹²⁸ collision resistance. This is why hash outputs must be twice the desired security level."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-asymmetric-encryption",
      children: "2.2 Asymmetric Encryption"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "221-overview--mail-slot-analogy",
      children: "2.2.1 Overview & Mail Slot Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A public mail slot. Anyone can drop a letter through the slot (encrypt with public key), but only the person with the key to the door (private key) can open it and read the letters. Conversely, the owner can sign a document with their private key (press their ring into wax), and anyone can verify the signature with the public key."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Uses a mathematically linked key pair (public, private). One key encrypts, the other decrypts → and the private key cannot be derived from the public key (assumption of computational hardness)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " Solves the key distribution problem. Alice doesn't need a pre-shared secret with Bob to send him an encrypted message. She just needs his public key, which can be transmitted in the clear."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "222-rsa-rivestshamiradleman",
      children: "2.2.2 RSA (Rivest–Shamir–Adleman)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mathematical Foundation:"
      }), " Based on the practical difficulty of factoring the product of two large prime numbers."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Core equation:"
      }), " For plaintext ", (0,jsx_runtime.jsx)(_components.code, {
        children: "m"
      }), ", ciphertext ", (0,jsx_runtime.jsx)(_components.code, {
        children: "c"
      }), ", public key ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(n, e)"
      }), ", private key ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(n, d)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "c = m^e mod n   (encryption)\nm = c^d mod n   (decryption)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The relationship ", (0,jsx_runtime.jsx)(_components.code, {
        children: "m^(ed) ≡ m (mod n)"
      }), " holds because of Euler's theorem: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "m^(φ(n)+1) ≡ m (mod n)"
      }), " where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "φ(n) = (p-1)(q-1)"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ed ≡ 1 (mod φ(n))"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "rsa-key-generation--numbered-steps",
      children: "RSA Key Generation → Numbered Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1.  Choose two large primes, p and q (at least 1024 bits each for 2048-bit RSA)\n2.  Compute n = p × q               (modulus for public and private keys)\n3.  Compute φ(n) = (p-1)(q-1)       (Euler's totient)\n4.  Choose public exponent e such that:\n    - 1 < e < φ(n)\n    - gcd(e, φ(n)) = 1             (co-prime with φ(n))\n    - Common choice: e = 65537 (0x10001) → Fermat prime, fast exponentiation\n5.  Compute private exponent d:\n    d = e^(-1) mod φ(n)            (modular multiplicative inverse using Extended Euclidean Algorithm)\n6.  Public key:  (n, e)\n    Private key: (n, d)            (keep p, q, φ(n) secret or discard)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "rsa-encryption",
      children: "RSA Encryption"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1.  Represent message as integer m where 0 ≤ m < n\n2.  Compute ciphertext: c = m^e mod n   (modular exponentiation)\n3.  Transmit c\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "rsa-decryption",
      children: "RSA Decryption"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1.  Receive ciphertext c\n2.  Compute plaintext: m = c^d mod n\n3.  Recover message from integer m\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RSA_Keygen(bits):\n    p = RandomPrime(bits/2)\n    q = RandomPrime(bits/2)\n    n = p * q\n    phi = (p-1) * (q-1)\n    e = 65537                    // or any value with gcd(e, phi) = 1\n    d = ModularInverse(e, phi)   // Extended Euclidean Algorithm\n    return PublicKey(n, e), PrivateKey(n, d)\n\nRSA_Encrypt(m, PublicKey(n, e)):\n    return m^e mod n\n\nRSA_Decrypt(c, PrivateKey(n, d)):\n    return c^d mod n\n\nRSA_Sign(m, PrivateKey(n, d)):\n    hash = SHA256(m)\n    return hash^d mod n          // \"encrypt with private key\"\n\nRSA_Verify(m, sig, PublicKey(n, e)):\n    hash = SHA256(m)\n    return sig^e mod n == hash   // \"decrypt with public key\", compare\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-rsa-with-toy-numbers",
      children: "Dry Run: RSA with Toy Numbers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Let ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p = 61"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "q = 53"
      }), " (tiny → insecure, but illustrates the math)."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose p, q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p = 61, q = 53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two distinct primes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = p × q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = 3233"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modulus length: 12 bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "φ(n) = (p-1)(q-1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "φ = 60 × 52 = 3120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Euler's totient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e = 17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "gcd(17, 3120) = 1 ✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d = e^(-1) mod φ(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d = 2753"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17 × 2753 = 46801 = 15×3120 + 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(n=3233, e=17)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Share freely"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(n=3233, d=2753)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep secret"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Encryption:"
      }), " message ", (0,jsx_runtime.jsx)(_components.code, {
        children: "m = 65"
      }), " (ASCII 'A'):"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c = 65¹⁷ mod 3233"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c = 2790"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transmit c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2790"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decryption:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receive c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2790"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m = 2790²⁷⁵³ mod 3233"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m = 65"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recovered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65 = 'A' ✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Signature:"
      }), " hash(m) = 42 (toy hash):"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sig = 42²⁷⁵³ mod 3233"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sig = 2557"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify: 2557¹⁷ mod 3233"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "= 42 ✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b³)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finding primes + Extended Euclidean (b = bit length)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b²) or O(b³)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modular exponentiation (exponent e = 65537, sparse)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b³)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modular exponentiation (exponent d is full size)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b³)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as decryption (d is full size)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as encryption (e = 65537)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why RSA is slow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modular exponentiation with 2048-bit numbers requires millions of multiplications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Private key operations use exponent d which is full modulus size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chinese Remainder Theorem (CRT) speeds decryption ~4× by splitting mod p and mod q"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security vs key size:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1024-bit RSA: broken by nation-states (factored by 2020 according to NIST)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2048-bit RSA: secure until ~2030"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "4096-bit RSA: recommended for long-term (2030+)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-1",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Well-studied, decades of analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow → especially private key ops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Widely supported in all crypto libraries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large key sizes (2048–4096 bits)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can do both encryption and signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not quantum-resistant (Shor's algorithm)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple mathematics (modular exponentiation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key generation is slow (needs primality testing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OAEP padding provides semantic security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plain PKCS#1 v1.5 padding is vulnerable (Bleichenbacher)"
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
          children: "m ≥ n:"
        }), " message must be smaller than the modulus. Solution: hybrid encryption (encrypt symmetric key with RSA, data with AES)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "e too small (e=3):"
        }), " Coppersmith's attack can recover small messages without padding. Always use e=65537."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shared n:"
        }), " if two keys share the same n, each knows the other's private key."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "p and q too close:"
        }), " Fermat factorization can recover them."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "attack-vectors-on-rsa",
      children: "Attack Vectors on RSA"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Feasibility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Factoring (GNFS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024-bit n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible for nation-states"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ≥2048-bit keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Misuse of padding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS#1 v1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical (Bleichenbacher 1998)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use OAEP (RSA-OAEP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Side-channel (timing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private key d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical (Kocher 1996)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant-time exponentiation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Side-channel (power)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart card ops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical, requires proximity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blinding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chosen ciphertext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA without padding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical (homomorphic property)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAEP padding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantum (Shor's)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA in general"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Future (large quantum computer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-quantum crypto"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CRT fault injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart cards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical (Ben-Sasson et al.)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify signature after decryption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low entropy RNG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical (Debian OpenSSL bug 2008)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use hardware RNG"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "223-diffie-hellman-key-exchange",
      children: "2.2.3 Diffie-Hellman Key Exchange"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Two parties establish a shared secret over an insecure channel without ever transmitting the secret itself."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mathematical Foundation:"
      }), " Discrete logarithm problem in a finite cyclic group. Given ", (0,jsx_runtime.jsx)(_components.code, {
        children: "g^a mod p"
      }), ", it is computationally infeasible to find ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a"
      }), " (for large prime ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Two people mixing paint. Alice and Bob each have a secret color. They mix their secret with a shared public base color and send the mixture to each other. Each then adds their own secret color → both end up with the same final color, but an eavesdropper cannot recover it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "diffie-hellman-steps",
      children: "Diffie-Hellman Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Public parameters (known to all):\n    p = large prime (at least 2048 bits)\n    g = generator of Z_p* (typically 2 or 5)\n\nAlice:                              Bob:\n1.  Choose private a (random)       1.  Choose private b (random)\n2.  Compute A = g^a mod p           2.  Compute B = g^b mod p\n3.  Send A to Bob  ──────A──────>   3.  Send B to Alice  <──────B──────\n4.  Compute s = B^a mod p           4.  Compute s = A^b mod p\n\nResult: s = B^a = (g^b)^a = g^(ab) = (g^a)^b = A^b mod p\n        └────────────────────── Shared secret s ──────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-diffie-hellman-with-toy-numbers",
      children: "Dry Run: Diffie-Hellman with Toy Numbers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Public: p = 23, g = 5\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b = 15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A = 5⁶ mod 23 = 15625 mod 23 = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B = 5¹⁵ mod 23 = 30517578125 mod 23 = 19"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 8 →"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "← 19 ←"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s = 19⁶ mod 23 = 47045881 mod 23 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s = 8¹⁵ mod 23 = 35184372088832 mod 23 = 2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Shared secret s = 2."
      }), " Alice and Bob both computed 2. Eve, who only sees p=23, g=5, A=8, B=19, cannot compute s without solving the discrete log."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Security analysis of this toy:"
      }), " Trivial to break (p is only 23). Real DH uses p ≥ 2048 bits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "attack-vectors-on-diffie-hellman",
      children: "Attack Vectors on Diffie-Hellman"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Feasibility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Discrete log (Index Calculus)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p < 1024 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical for nation-states"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ≥2048-bit p"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logjam (CVE-2015-4000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DHE_EXPORT (512-bit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical (see case study)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable export-grade ciphers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Man-in-the-middle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthenticated DH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authenticate with signatures (ECDHE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Small subgroup confinement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-prime-order group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use safe primes, check subgroup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SNIFF (passive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "768-bit DH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NSA-level capability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ≥2048-bit or ECDH"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "224-elliptic-curve-cryptography-ecc",
      children: "2.2.4 Elliptic Curve Cryptography (ECC)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mathematical Foundation:"
      }), " Elliptic curve discrete logarithm problem (ECDLP). Given points ", (0,jsx_runtime.jsx)(_components.code, {
        children: "P"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kP"
      }), " on an elliptic curve, find ", (0,jsx_runtime.jsx)(_components.code, {
        children: "k"
      }), ". This is believed to be harder than integer factorization or finite-field discrete log for equivalent parameter sizes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Elliptic curve equation (Weierstrass form):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "y² = x³ + ax + b   (with 4a³ + 27b² ≠ 0)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Point addition:"
      }), " For points P and Q on the curve, draw line PQ; intersection with curve; reflect across x-axis = P+Q."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scalar multiplication:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kP = P + P + ... + P"
      }), " (k times). Fast via double-and-add algorithm."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why ECC is better than RSA:"
      }), " A 256-bit ECC key provides equivalent security to a 3072-bit RSA key. Smaller keys mean faster computation, lower power consumption, smaller certificates."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Security Level (bits)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RSA Key Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ECC Key Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DH Key Size"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "160"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "112"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2048"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3072"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7680"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7680"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15360"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "521"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15360"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ecdh-key-exchange",
      children: "ECDH Key Exchange"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Elliptic Curve Diffie-Hellman"
      }), " → DH variant using elliptic curve scalar multiplication instead of modular exponentiation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common curve: Curve25519 (X25519) → Bernstein's curve designed for constant-time implementation. Also: P-256 (secp256r1), P-384."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Domain parameters: Curve (a, b, G, n) where G is base point, n is order\n\nAlice:                              Bob:\n1.  Choose private a (random)       1.  Choose private b (random)\n2.  Compute A = aG (point)          2.  Compute B = bG (point)\n3.  Send A to Bob                   3.  Send B to Alice\n4.  Compute s = aB = a(bG)          4.  Compute s = bA = b(aG)\n\ns = abG → shared secret (x-coordinate used as key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace (simplified):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bob"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Private key"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["a = ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0x6A2B..."
            }), " (256 bits)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["b = ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0x9F8E..."
            }), " (256 bits)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Public key"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A = ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(0x1234..., 0x5678...)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["B = ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(0xABCD..., 0xEF01...)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shared secret"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "aB = (0x9876..., 0x5432...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bA = (0x9876..., 0x5432...)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ecdsa-signatures",
      children: "ECDSA Signatures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ECDSA (Elliptic Curve Digital Signature Algorithm) → sign with private key, verify with public key."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Signing (Alice):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1.  Compute e = HASH(message)                    // hash to integer\n2.  Choose random k in [1, n-1]                  // nonce → MUST be unique per signature\n3.  Compute R = kG, r = x-coordinate(R) mod n\n4.  Compute s = k^(-1)(e + r * d_Alice) mod n\n5.  Signature = (r, s)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification (Bob):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1.  Compute e = HASH(message)\n2.  Compute w = s^(-1) mod n\n3.  Compute u1 = e*w mod n, u2 = r*w mod n\n4.  Compute R' = u1*G + u2*Q_Alice\n5.  Valid if r == x-coordinate(R') mod n\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical requirement:"
      }), " k must be unique and random. In 2010, Sony used the same k to sign PS3 firmware → attackers recovered the private key. In 2013, Android Bitcoin wallets using biased k allowed private key recovery."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-of-ecc",
      children: "Complexity Analysis of ECC"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalar mult (keygen)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double-and-add with modular arithmetic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECDH shared secret"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One scalar multiplication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECDSA sign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One scalar mult + modular inverse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECDSA verify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two scalar mults (double the cost of sign)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256-bit = 128-bit security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller than RSA by 10-12×"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparisons:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RSA-2048"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ECC P-256"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1-10 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<1 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signature size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1-2 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~300-500 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU cycles (sign)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1.5M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50K"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU cycles (verify)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~125K"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "attack-vectors-on-ecc",
      children: "Attack Vectors on ECC"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Feasibility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECDLP (Pollard rho)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All curves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2¹²⁸ for P-256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ≥256-bit curves"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid curve attack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECDH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical (no point validation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate received points are on curve"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nonce reuse (k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECDSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical (leaks private key)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic ECDSA (RFC 6979)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Side-channel (timing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scalar mult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use constant-time curves (Curve25519)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Twist-safe failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X25519"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol-level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use safe implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantum (Shor's)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC in general"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Future"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-quantum crypto (CRYSTALS)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "225-asymmetric-encryption-summary",
      children: "2.2.5 Asymmetric Encryption Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security Level"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA-2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypt, Sign, Key exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2048-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (private ops)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "112-bit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA-4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypt, Sign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4096-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128-bit+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECDH (P-256)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128-bit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECDSA (P-256)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128-bit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X25519"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128-bit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ed25519"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128-bit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DH-2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2048-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "112-bit"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-hash-functions",
      children: "2.3 Hash Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "231-properties-of-cryptographic-hash-functions",
      children: "2.3.1 Properties of Cryptographic Hash Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A cryptographic hash function H maps an arbitrary-length input to a fixed-length output."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "H: {0,1}* → {0,1}^n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Three core security properties:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Violation Consequence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pre-image resistance (one-way)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Given hash h, computationally infeasible to find any m such that H(m) = h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker reverses password hashes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Second pre-image resistance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Given m₁, computationally infeasible to find m₂ ≠ m₁ such that H(m₂) = H(m₁)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker replaces signed document"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Collision resistance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computationally infeasible to find any m₁ ≠ m₂ such that H(m₁) = H(m₂)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker creates two contracts with same hash"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Additional properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deterministic:"
        }), " Same input always produces the same output"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fast computation:"
        }), " Efficient for large inputs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Avalanche effect:"
        }), " 1-bit input change flips ~50% of output bits"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fixed output size:"
        }), " Regardless of input length"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A fingerprint. Tiny, unique to each input, cannot be reversed to reconstruct the person."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "232-sha-256-secure-hash-algorithm-2",
      children: "2.3.2 SHA-256 (Secure Hash Algorithm 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Standard:"
      }), " FIPS 180-4. Output: 256 bits (32 bytes). Part of the SHA-2 family (SHA-224, SHA-256, SHA-384, SHA-512)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal structure:"
      }), " Merkle–Damgård construction with Davies–Meyer compression function."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps (simplified):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1.  Pad message to multiple of 512 bits (append 1 bit, zeros, 64-bit length)\n2.  Initialize 8 state variables H₀-H₇ with fixed constants\n3.  For each 512-bit message block:\n    a.  Expand 16 words → 64 words (message schedule)\n    b.  Initialize working variables a-h from state\n    c.  For round 0..63:\n        Σ0 = ROTR²(a) ⊕ ROTR¹³(a) ⊕ ROTR²²(a)\n        Σ1 = ROTR⁶(e) ⊕ ROTR¹¹(e) ⊕ ROTR²⁵(e)\n        Ch = (e ∧ f) ⊕ (¬e ∧ g)\n        Maj = (a ∧ b) ⊕ (a ∧ c) ⊕ (b ∧ c)\n        t1 = h + Σ1 + Ch + K[round] + W[round]\n        t2 = Σ0 + Maj\n        h = g; g = f; f = e; e = d + t1; d = c; c = b; b = a; a = t1 + t2\n    d.  Update state: H₀ += a, H₁ += b, ..., H₇ += h\n4.  Output concatenation of H₀-H₇ (32 bytes)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run: SHA-256 of \"abc\""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Input: ASCII \"abc\" (3 bytes = 24 bits)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Message (hex)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "61 62 63"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "After padding (512-bit block)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "61 62 63 80 00 00 ... 00 00 00 18"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "H₀ initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "6a09e667"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ba7816bf 8f01cfea 414140de 5dae2223 b00361a3 96177a9c b410ff61 f20015ad"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(Verifiable with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "echo -n abc | sha256sum"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2¹²⁸ collision resistance (birthday bound)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rounds per block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sufficient diffusion for 512-bit block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Step operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROTR, XOR, AND, ADD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast in hardware and software"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~150-250 MB/s (modern CPU)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Software-optimized"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "233-sha-3-keccak",
      children: "2.3.3 SHA-3 (Keccak)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Standard:"
      }), " FIPS 202. Winner of NIST hash competition (2012)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal structure:"
      }), " Sponge construction → absorbs input, squeezes output. Not based on Merkle–Damgård."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key differences from SHA-2:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No length extension attack vulnerability (inherent to sponge)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Different internal design (if SHA-2 breaks, SHA-3 is unaffected)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Faster in hardware than SHA-2"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SHA3-256: 256-bit output, capacity 512 bits, bitrate 1088 bits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports extendable output (SHAKE128, SHAKE256)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sponge construction:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1.  Initialize state as 1600-bit zero array\n2.  Absorb phase: XOR each message block into state, apply 24-round Keccak-f permutation\n3.  Squeeze phase: extract output blocks, apply permutation between extractions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "234-blake2",
      children: "2.3.4 Blake2"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Designers:"
      }), " Jean-Philippe Aumasson, Samuel Neves, Zooko Wilcox-O'Hearn, Christian Winnerlein."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Faster than SHA-2 and SHA-3 in software"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not subject to length extension attacks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports keyed hashing (replaces HMAC in some contexts)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BLAKE2b (64-bit platform), BLAKE2s (8-32-bit platform)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Performance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BLAKE2b: ~1 GB/s on modern CPUs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Faster than SHA-256 by 1.5-3× in software"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Used in:"
      }), " Zcash, Argon2 (password hashing winner), WireGuard VPN, RAR archives."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "235-md5-collision-risk",
      children: "2.3.5 MD5 Collision Risk"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Broken. Cryptanalytic collision attack demonstrated in 2004 (Wang et al.). Practical collision in 2008 (CL集团 fireworks)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Collision example (using md5coll):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input 1 (hex): d131dd02c5e6eec4 693d9a0698aff95c 2fcab58712467eab 4004583eb8fb7f89\n               55ad340609f4b302 83e488832571415a 085125e8f7cdc99f d91dbdf280373c5b\n               d8823e3156348f5b ae6dacd436c919c6 dd53e2b487da03fd 02396306d248cda0\n               e99f33420f577ee8 ce54b67080a80d1e c69821bcb6a88393 96f9652b6ff72a70\n\nInput 2 (hex): d131dd02c5e6eec4 693d9a0698aff95c 2fcab50712467eab 4004583eb8fb7f89\n               55ad340609f4b302 83e488832571415a 085125e8f7cdc99f d91dbdf280373c5b\n               d8823e3156348f5b ae6dacd436c919c6 dd53e2b487da03fd 02396306d248cda0\n               e99f33420f577ee8 ce54b67080a80d1e c69821bcb6a88393 96f9652b6ff72a70\n\nBoth have MD5: 79054025255fb1a26e4bc422aef54eb4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implications:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Digital signatures:"
        }), " An attacker can create two documents with different meaning but the same MD5 hash. If Alice signs one, the attacker claims she signed the other."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File integrity:"
        }), " MD5 cannot guarantee file integrity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Software distribution:"
        }), " No major OS or package manager uses MD5 for verification."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "git:"
        }), " Uses SHA-1 (which also has collision concerns, see SHAttered case study)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current recommendation:"
      }), " Never use MD5. Migrate to SHA-256 or SHA-3."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "236-hash-function-comparison",
      children: "2.3.6 Hash Function Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed (SW)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Collision Resistance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Length Extension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2¹⁸ (broken)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deprecated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "160-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2⁶³ (SHAttered)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deprecated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2¹²⁸ (secure)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recommended"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "512-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (64-bit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2²⁵⁶ (secure)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recommended"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA3-256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow-mod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2¹²⁸ (secure)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immune"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recommended"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLAKE2b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-64 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immune"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recommended"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHAKE256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≥2¹²⁸ (secure)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immune"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recommended (XOF)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "237-applications-of-hash-functions",
      children: "2.3.7 Applications of Hash Functions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why Hash?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Password storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-way, salted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SHA256(password + salt)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect tampering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sha256sum file.iso"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Git commits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content-addressed storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "git hash-object file"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Digital signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sign hash, not message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ECDSA(SHA256(message))"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blockchain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain of blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitcoin double-SHA256"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deduplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify duplicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backup systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bloom filters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Space-efficient membership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache lookups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC (HMAC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keyed integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API authentication"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "238-length-extension-attack",
      children: "2.3.8 Length Extension Attack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What it is:"
      }), " Given ", (0,jsx_runtime.jsx)(_components.code, {
        children: "H(M)"
      }), ", an attacker can compute ", (0,jsx_runtime.jsx)(_components.code, {
        children: "H(M || pad || extension)"
      }), " without knowing M. This violates the property that hash output should reveal nothing about the input."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Which hashes are vulnerable:"
      }), " All Merkle–Damgård construction hashes: MD5, SHA-1, SHA-256, SHA-512."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Which hashes are immune:"
      }), " SHA-3 (sponge), Blake2 (HAIFA), SHAKE."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Merkle–Damgård is vulnerable:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The compression function processes fixed-size blocks sequentially, carrying forward an internal state. The hash output IS the final state:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "M = M₁ || M₂ || M₃\nH₀ → compress(H₀, M₁) → H₁ → compress(H₁, M₂) → H₂ → compress(H₂, M₃ || pad) → H₃ = H(M)\n\nGiven H(M) = H₃, attacker can continue:\nH₃ → compress(H₃, pad' || extension || new_pad) → H₄ = H(M || pad || extension)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack scenario (hash length extension):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Legitimate server signs: token = MD5(secret || \"admin=false\")\nAttacker computes:       forged_token = MD5(secret || \"admin=false\" || pad || \"admin=true\")\n                        without knowing the secret!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How HMAC prevents this:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HMAC uses TWO nested hashes: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "H(outer || H(inner || M))"
      }), ". The outer hash prevents the length extension because the attacker doesn't know ", (0,jsx_runtime.jsx)(_components.code, {
        children: "H(inner || M)"
      }), " to use as a starting state → it's passed as input to the outer hash."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world exploits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flickr API (2009): Signature forgery using MD5 length extension on API secret"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Drupal (2014): SA-CORE-2014-005 → hash length extension allowed session hijacking"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Numerous PHP ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hash_hmac()"
        }), " misuse cases where developers used ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MD5(secret . data)"
        }), " instead of HMAC"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use SHA-3, Blake2, or SHA-512/256 (truncated SHA-512) for new designs"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Always use HMAC for keyed hashing, never ", (0,jsx_runtime.jsx)(_components.code, {
          children: "H(key || message)"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "H(message || key)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When verifying hash-based signatures, use HMAC or EdDSA (which is immune)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-hmac--keyed-hash-message-authentication-code",
      children: "2.4 HMAC → Keyed-Hash Message Authentication Code"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Provides message integrity AND authentication using a shared secret key."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why not just hash with key?"
      }), " Simple concatenations like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "H(K || M)"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "H(M || K)"
      }), " are vulnerable to length extension attacks (for MD/SHA-2 family)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Construction (RFC 2104):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HMAC(K, M) = H((K' ⊕ opad) || H((K' ⊕ ipad) || M))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "K'"
        }), " = K if |K| ≤ block_size, else H(K) (key preprocessing)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ipad"
        }), " = 0x36 repeated to block_size"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "opad"
        }), " = 0x5C repeated to block_size"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "H"
        }), " = underlying hash function (SHA-256, etc.)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace: HMAC-SHA256(\"key\", \"message\")"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K' = \"key\" (3 bytes < 64)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "6B6579"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ipad (×64)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "363636..."
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K' ⊕ ipad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5D537F..."
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner hash: SHA256((K'⊕ipad) || \"message\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "h₁ = a1b2c3..."
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "opad (×64)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5C5C5C..."
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K' ⊕ opad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "373925..."
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outer hash: SHA256((K'⊕opad) || h₁)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "8f9a6b..."
            }), " (final HMAC)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If underlying hash has collision resistance of 2^(n/2), HMAC provides ~2^(n/2) security against forgery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provably secure reduction to underlying hash"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attacks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Length extension"
        }), " does NOT work on HMAC (double-hash construction prevents it)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Side-channel"
        }), " on comparison (use constant-time comparison)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weak keys"
        }), " → HMAC is resilient (key preprocessing handles odd-sized keys)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AWS Signature V4:"
        }), " HMAC-SHA256 for API request authentication"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "JWT:"
        }), " HMAC-SHA256 for token integrity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TLS:"
        }), " HMAC in HMAC-based cipher suites (TLS 1.2)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SSH:"
        }), " HMAC for packet integrity"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-digital-signatures",
      children: "2.5 Digital Signatures"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Provide authentication, integrity, and non-repudiation. A recipient can prove to a third party that the sender signed the message."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "General process:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Signing (Alice):\n1. hash = H(message)\n2. signature = RSA_Private_Encrypt(hash)   or  ECDSA_Sign(hash, d_Alice)\n3. Send (message, signature) to Bob\n\nVerification (Bob):\n1. hash' = H(message)\n2. is_valid = RSA_Public_Decrypt(signature) == hash'   or  ECDSA_Verify(hash', signature, Q_Alice)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A wax seal on a letter. Anyone can recognize the seal (public key), but only the owner of the ring (private key) can create it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-repudiation:"
      }), " Alice cannot claim she didn't sign the message because only her private key could produce a signature verifiable with her public key → assuming the private key was not compromised."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Signature algorithms:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Signature Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Verification Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA-2048 (PKCS#1 v1.5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (e=65537)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Widely compatible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA-2048 (PSS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic, provably secure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECDSA (P-256)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (2 mults)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compact"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ed25519"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (batchable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant-time, modern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DSA-2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~64 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deprecated"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signature malleability:"
        }), " Some schemes allow signature transformation to a different valid signature (mitigated by using deterministic schemes)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash collision:"
        }), " If an attacker finds H(m₁) = H(m₂), they can substitute documents (see SHAttered)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key compromise:"
        }), " If the private key is stolen, attacker can sign as the victim (requires revocation)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-public-key-infrastructure-pki",
      children: "2.6 Public Key Infrastructure (PKI)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "261-purpose",
      children: "2.6.1 Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PKI binds public keys to identities through a trusted third party (Certificate Authority). Without PKI, an attacker could perform a man-in-the-middle attack on key exchange by substituting their own public key."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A passport office. The CA (passport office) verifies your identity and issues a certificate (passport) that binds your photograph (public key) to your name (identity). Anyone who trusts the passport office trusts the binding."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "262-x509-certificate-structure-rfc-5280",
      children: "2.6.2 X.509 Certificate Structure (RFC 5280)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Certificate:\n    Version (v3)\n    Serial Number\n    Signature Algorithm ID (e.g., sha256WithRSAEncryption)\n    Issuer (CA name)\n    Validity:\n        Not Before (start date)\n        Not After (expiry date)\n    Subject (entity name)\n    Subject Public Key Info:\n        Algorithm (e.g., RSA, ECC)\n        Public Key (key data)\n    Extensions (optional, v3):\n        Basic Constraints (is CA?)\n        Key Usage (digitalSignature, keyEncipherment, etc.)\n        Extended Key Usage (serverAuth, clientAuth, codeSigning)\n        Subject Alternative Name (DNS names, IPs)\n        CRL Distribution Points\n        Authority Information Access (OCSP responder)\n    Certificate Signature:\n        Algorithm\n        Signature Value (signed by CA)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example: google.com certificate (inspected with openssl):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Certificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number: 56:78:9a:...\n        Signature Algorithm: sha256WithRSAEncryption\n        Issuer: C = US, O = Google Trust Services, CN = GTS CA 1C3\n        Validity\n            Not Before: Jan 15 00:00:00 2025 GMT\n            Not After : Apr  9 23:59:59 2025 GMT\n        Subject: CN = *.google.com\n        Subject Public Key Info:\n            Public Key Algorithm: id-ecPublicKey\n                Public-Key: (256 bit)\n                pub: 04:ab:cd:...\n        X509v3 extensions:\n            X509v3 Subject Alternative Name:\n                DNS:*.google.com, DNS:*.appengine.google.com, ...\n    Signature Algorithm: sha256WithRSAEncryption\n         78:9a:bc:...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "263-ca-hierarchy--certificate-chains",
      children: "2.6.3 CA Hierarchy & Certificate Chains"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Root CA (self-signed)\n  └── Intermediate CA 1 (signed by Root)\n        └── Intermediate CA 2 (signed by Interm. 1)\n              └── End-entity certificate (signed by Interm. 2)\n                    └── www.example.com\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why hierarchy?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root CA:"
        }), " Offline, highly secured, rarely used directly. Breach would destroy entire trust system."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intermediate CA:"
        }), " Online, issues end-entity certs. If compromised, only that intermediate is revoked."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "End-entity:"
        }), " The actual website/email/code certificate."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Certificate chain validation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "For certificate C issued by issuer I:\n    1.  Find I's certificate (in chain or trust store)\n    2.  Verify C's signature using I's public key\n    3.  Check C's validity period\n    4.  Check C's key usage/extensions\n    5.  Check C's revocation status (CRL/OCSP)\n    6.  If I is not a trusted root:\n            Recurse (treat I as C, find its issuer)\n        Else:\n            Verify I is in trust store\n            Verify I is self-signed and has correct attributes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "264-crl-certificate-revocation-list",
      children: "2.6.4 CRL (Certificate Revocation List)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A signed list of serial numbers of revoked certificates, published periodically by the CA."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CRL:\n    Version\n    Signature Algorithm\n    Issuer\n    Last Update\n    Next Update\n    Revoked Certificates:\n        Serial Number | Revocation Date | Optional Extensions\n        Serial Number | Revocation Date | Optional Extensions\n        ...\n    Signature\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Limitations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latency:"
        }), " CRL may be hours/days old before client fetches it"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Size:"
        }), " Can be very large (megabytes)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Privacy:"
        }), " Client must fetch CRL from CA, revealing which sites they visit"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "265-ocsp-online-certificate-status-protocol",
      children: "2.6.5 OCSP (Online Certificate Status Protocol)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RFC 6960:"
      }), " Real-time certificate status check. Client sends OCSP request (certificate serial number) to OCSP responder and receives signed response (good/revoked/unknown)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantage over CRL:"
      }), " Real-time (or near-real-time), smaller response, privacy-preserving (if using OCSP stapling)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OCSP Stapling (TLS extension):"
      }), " The server fetches a time-stamped OCSP response and \"staples\" it to the TLS handshake. Client verifies it without contacting the CA → solving the privacy and scalability problems of OCSP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "266-trust-stores",
      children: "2.6.6 Trust Stores"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Operating systems and browsers ship with ~100-200 trusted root CA certificates. These are the \"trust anchors.\""
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Platform"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trust Store Location"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Windows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cert:\\LocalMachine\\Root (certificate store)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "macOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keychain: System Roots"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linux"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/etc/ssl/certs/ (directory of PEM files)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Firefox"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cert9.db (SQLite database, independent of OS)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root CA compromise events:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DigiNotar (2011):"
        }), " Breach led to fraudulent Google certificates. Company went bankrupt."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Symantec (2017):"
        }), " Issued test certificates without proper validation. Chrome/Apple distrusted all Symantec certs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TrustCor (2022):"
        }), " Links to surveillance company. Google/Mozilla distrusted."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "267-attack-vectors-on-pki",
      children: "2.6.7 Attack Vectors on PKI"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Feasibility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rogue CA (internal compromise)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare but catastrophic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate Transparency (CT)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rogue CA (government coercion)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "National CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documented cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CT logs, pinning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weak key generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible with poor RNG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audited key generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MD5 collision (FLAME 2012)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA certificate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical (see case study)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use SHA-256+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User trust"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DV/EV extended validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OCSP man-in-the-middle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OCSP responder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlikely with stapling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OCSP stapling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CRL interception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRL download"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible (blocked CRL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OCSP as fallback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate mis-issuance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple incidents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CT logs (public audit)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "27-tls-13-handshake",
      children: "2.7 TLS 1.3 Handshake"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "271-overview",
      children: "2.7.1 Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TLS (Transport Layer Security) is the most widely deployed cryptographic protocol. TLS 1.3 (RFC 8446, 2018) is a major redesign → faster, simpler, more secure."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goals:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confidentiality (encrypted data)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrity (no tampering)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authentication (server → mandatory; client → optional)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "272-tls-13-full-handshake-1-rtt",
      children: "2.7.2 TLS 1.3 Full Handshake (1-RTT)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client (Browser)                   Server (Website)\n──────┴─────                        ──────┴─────\n  ClientHello\n  - Protocol version: TLS 1.3\n  - Key share (ECDHE): g^x        ──────────────>\n  - Supported cipher suites\n  - Supported groups (X25519, P-256)\n  - Extensions (SNI, ALPN)\n                                     ServerHello\n                                   - Protocol version: TLS 1.3\n                                   - Key share (ECDHE): g^y  <──────────────\n                                   - Cipher suite decision\n                                    \n                                     EncryptedExtensions\n                                   - Certificate request (optional)  <──────\n                                    \n                                     Certificate\n                                   - Server's X.509 cert chain\n                                   - OCSP staple (optional)\n                                   - CertificateVerify (signature)\n                                   - Finished (MAC of handshake)  <────────\n  \n  CertificateVerify (if mTLS)\n  Finished (MAC of handshake)     ──────────────>\n  \n  Application Data (encrypted)    <════════════>  Application Data (encrypted)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step walkthrough:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Client"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Server"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate ephemeral ECDHE keypair (x, X = g^x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send ClientHello with X, supported ciphers, SNI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receive ClientHello, select cipher suite"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate ephemeral ECDHE keypair (y, Y = g^y)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute shared secret: s = Y^x = g^(xy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derive traffic keys from s (handshake traffic secret)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send ServerHello with Y, ServerHello"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute shared secret: s = X^y = g^(xy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derive handshake traffic keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decrypt and verify ServerHello, Certificate, CertificateVerify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receive and verify Client Finished"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derive application traffic keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derive application traffic keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send encrypted application data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send encrypted application data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "273-tls-13-0-rtt-early-data",
      children: "2.7.3 TLS 1.3 0-RTT (Early Data)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Eliminates round trip for returning clients."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How:"
      }), " Client remembers a pre-shared key (PSK) from a previous session and includes encrypted data in the first flight."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Risk:"
      }), " Replay attack → 0-RTT data can be replayed by an attacker. Mitigated by server recording and refusing duplicate 0-RTT."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "274-tls-12-vs-13-comparison",
      children: "2.7.4 TLS 1.2 vs 1.3 Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TLS 1.2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TLS 1.3"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handshake rounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 RTT (full)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 RTT (full), 0-RTT (resumption)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA or DH (separate messages)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECDHE only (in ClientHello)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cipher suites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many combos (TLS_RSA_WITH_AES_128_CBC_SHA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AEAD only (TLS_AES_128_GCM_SHA256)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash/Signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negotiated separately"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Part of cipher suite definition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetric cipher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CBC (with HMAC) or AEAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AEAD only (GCM, ChaCha20-Poly1305)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key agreement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA key transport allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward secrecy mandatory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handshake encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After ChangeCipherSpec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "From ServerHello (encrypted extensions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported (CRIME attack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Renegotiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported (complex attacks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version negotiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-protocol (downgrade possible)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Downgrade protection via server_random"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Session resumption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session ID / Session Ticket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSK with optional (EC)DHE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA, ECDSA, DSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA, ECDSA (DSA removed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0-RTT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported (with anti-replay)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security improvements in 1.3:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forward secrecy required:"
        }), " Compromise of long-term key cannot decrypt past sessions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AEAD only:"
        }), " Eliminates padding oracle attacks on CBC mode"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simplified cipher suites:"
        }), " Fewer options = less misconfiguration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Removed weak algorithms:"
        }), " RC4, 3DES, static RSA, DHE export removed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encrypted handshake:"
        }), " Certificate and SNI encrypted from the start"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Downgrade protection:"
        }), " Special marker prevents forced version downgrade"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "275-attack-vectors-on-tls",
      children: "2.7.5 Attack Vectors on TLS"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Feasibility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BREACH/CRIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable compression"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POODLE (SSLv3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CBC padding oracle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable SSLv3, use TLS 1.3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BEAST (TLS 1.0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CBC IV prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use TLS 1.1+ or 1.3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heartbleed (CVE-2014-0160)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenSSL heartbeat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical (see case study)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upgrade OpenSSL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logjam (CVE-2015-4000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DHE_EXPORT downgrade"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical (see case study)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ≥2048-bit DH, ECDHE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FREAK (CVE-2015-0204)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA-EXPORT downgrade"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable EXPORT ciphers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Renegotiation injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS renegotiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use secure renegotiation (TLS 1.3 removes reneg)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Raccoon attack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DH parameter leakage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ECDHE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALPACA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical (shared certs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate certs per protocol"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "28-ssh-key-exchange",
      children: "2.8 SSH Key Exchange"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Secure remote shell access. Uses asymmetric keys for authentication and symmetric encryption for the session. SSH-2 (RFC 4251-4256) is the current standard; SSH-1 is deprecated due to design flaws."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key exchange process (based on RFC 4253):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1.  TCP connection established (port 22)\n2.  Protocol version exchange (SSH-2.0)\n3.  Algorithm negotiation: each side sends list of supported:\n    - Key exchange (KEX) algorithms: diffie-hellman-group14-sha256,\n      curve25519-sha256, ecdh-sha2-nistp256\n    - Host key algorithms: ssh-ed25519, ecdsa-sha2-nistp256,\n      rsa-sha2-512, rsa-sha2-256\n    - Encryption algorithms: aes256-gcm@openssh.com, chacha20-poly1305@openssh.com\n    - MAC algorithms: hmac-sha2-256, hmac-sha2-512\n    - Compression: none, zlib@openssh.com\n4.  Key exchange (Diffie-Hellman):\n    a.  Server sends: p, g, server host key (RSA/ECDSA/Ed25519)\n    b.  Client sends: e = g^x mod p\n    c.  Server sends: f = g^y mod p, signature of handshake hash with host key\n    d.  Client verifies signature with server's public key (trust on first use)\n5.  Compute shared secret K = g^(xy) mod p\n6.  Derive session keys (encryption, integrity) from K using HKDF\n7.  All subsequent traffic encrypted and integrity-protected\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH packet format (binary packet protocol):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Packet length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Length of the packet data (not including MAC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Padding length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 byte"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Length of random padding (4-255 bytes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Payload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actual message data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Padding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random bytes to obscure plaintext length"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 bytes (SHA256)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC of packet sequence number + unencrypted packet"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Authentication methods:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Password:"
        }), " Client sends password inside encrypted tunnel"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Public key:"
        }), " Client proves possession of private key by signing a challenge (most common)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keyboard-interactive:"
        }), " Multi-factor (password + TOTP)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Host-based:"
        }), " Trust based on host identity (automation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GSSAPI:"
        }), " Kerberos single sign-on"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Public key authentication (detailed):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1.  Server sends challenge (random nonce produced from KEX hash)\n2.  Client signs (session_id || SSH_MSG_USERAUTH_REQUEST || ...) with private key\n3.  Server verifies signature against public key in ~/.ssh/authorized_keys\n    - Checks key type matches (rsa, ecdsa, ed25519)\n    - Checks options (from=\"*.example.com\", command=\"/usr/bin/git-shell\")\n    - Checks certificate constraints (if using SSH certificates)\n4.  Access granted if signature is valid\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trust On First Use (TOFU):"
      }), " First time connecting, client stores server's host key in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.ssh/known_hosts"
      }), ". On subsequent connections, client verifies the host key matches the stored value. If it changed, a MITM attack may be in progress. SSH host keys can also be distributed via DNS SSHFP records (RFC 4255) for verification without TOFU."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Forward secrecy in SSH:"
      }), " Per-session DH establishes a shared secret independent of the long-term host key. Even if the host key is later compromised, past sessions cannot be decrypted. Modern SSH uses Curve25519 (curve25519-sha256 by default in OpenSSH 6.7+)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH host key types compared:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2048-4096 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "112-128 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy, being phased out"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECDSA (nistp256)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIST standard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECDSA (nistp384)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "384 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIST standard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ed25519"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128 bits"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommended"
            }), " → fast, constant-time, small"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deprecated (SSH-1 era)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Port forwarding (tunneling):"
      }), "\nSSH can tunnel arbitrary TCP connections through the encrypted session:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Local forwarding:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ssh -L 8080:internal-server:80 bastion.example.com"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remote forwarding:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ssh -R 8080:localhost:3000 public.example.com"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic forwarding (SOCKS proxy):"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ssh -D 1080 bastion.example.com"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hardening SSH (sshd_config):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "Port 22                    # Or a non-standard port to reduce scanning\nPermitRootLogin no          # Never allow direct root login\nPubkeyAuthentication yes    # Key-based only\nPasswordAuthentication no   # Disable password auth (prevents brute force)\nKbdInteractiveAuthentication no\nChallengeResponseAuthentication no\nAuthenticationMethods publickey  # Can require multiple methods\nMaxAuthTries 3              # Rate-limit auth attempts\nHostKey /etc/ssh/ssh_host_ed25519_key  # Ed25519 preferred\nCiphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com\nKexAlgorithms curve25519-sha256,diffie-hellman-group18-sha512\nMACs hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "29-pgp-pretty-good-privacy",
      children: "2.9 PGP (Pretty Good Privacy)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Email and file encryption. Designed by Phil Zimmermann (1991). Standardized as OpenPGP (RFC 4880). The GNU implementation is GnuPG (gpg)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture: Hybrid encryption"
      }), " → uses both symmetric (fast) and asymmetric (secure key exchange)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PGP message format (OpenPGP RFC 4880):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An OpenPGP message consists of a sequence of packets. Each packet has a tag (1 byte) indicating the type, a length field, and the packet body."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Packet Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public-Key Encrypted Session Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~256 bytes (RSA)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signature Packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~256 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetric-Key Encrypted Session Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public-Key Packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~300-500 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secret-Key Packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~500-1000 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compressed Data Packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Literal Data Packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sym. Encrypted Integrity Protected Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AEAD Encrypted Data Packet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Encryption flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1.  Generate random session key K (AES-256)\n2.  Optionally compress plaintext (Zlib/ZIP)\n3.  Encrypt message with K: C_message = AES-GCM(K, compressed_message)\n4.  Encrypt K with recipient's public RSA key: C_key = RSA-OAEP(K, pub_Bob)\n5.  Encode C_key packet (tag 1) + C_message packet (tag 18)\n6.  Radix-64 armor (base64 with CRC24): produces .asc or .gpg output\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decryption flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1.  Parse packet sequence from input\n2.  Locate session key packet that matches recipient's key ID\n3.  Decrypt session key with private key: K = RSA-OAEP(C_key, priv_Bob)\n4.  Decrypt C_message with K: compressed_message = AES-GCM(K, C_message)\n5.  Decompress and output original message\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Signing flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1.  Hash message: h = SHA256(message)\n2.  Create signature packet containing:\n    - Hash algorithm ID (8 = SHA256)\n    - Signature type (0x00 = binary, 0x01 = text)\n    - Key ID of signer\n    - hash prefix (first 2 bytes of h for quick verification)\n    - RSA-PSS(h, priv_Alice) or Ed25519_Sign(h, priv_Alice)\n3.  Output: (message, signature_packet) → can be combined with encryption\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key structures:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Primary key:"
        }), " RSA (2048-4096) or ECC (Curve25519) → used for signing and certifying other keys"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Subkeys:"
        }), " Separate keypairs bound to primary key via certification signatures → typically one for encryption, one for signing. This allows rotating encryption keys without changing identity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key ID:"
        }), " Last 8 octets of the key fingerprint (SHA256 of public key packet)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fingerprint:"
        }), " Full hash used to uniquely identify a key (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "B5B9 F8D8 3A5E 12A0 4D3C  B4A8 7E8A 1B2C 3D4E 5F6A"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User IDs:"
        }), " Identity binding (typically \"Name <email>\"), certified by primary key or third-party signatures"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Web of Trust (WoT):"
      }), " PGP's decentralized trust model. Instead of a CA hierarchy, users sign each other's keys. Alice trusts Bob's key because Charlie (whom Alice trusts) signed Bob's key. Trust levels:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unknown:"
        }), " No validity assigned"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "None:"
        }), " Key known to be untrusted"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Marginal:"
        }), " 1-2 marginal trust signatures (configurable threshold)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full:"
        }), " Signed by a fully-trusted key"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ultimate:"
        }), " Your own key (implicitly trusted)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key signing parties formalize this → participants verify each other's identity (driver's license, passport) and cross-sign keys."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PGP vs PKI:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PGP (WoT)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PKI (X.509)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trust model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decentralized, user-driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical, CA-centric"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keyservers, direct exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA-signed certificates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Revocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Revocation certificates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRL / OCSP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identity binding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legal entity / domain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Niche (tech communities)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal (web)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-managed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA-managed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key expiry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recommended (1-3 years)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typically 1-3 years (90d for Let's Encrypt)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm agility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swappable subkeys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate re-issuance required"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OpenPGP commands (gpg):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "gpg --full-gen-key                          # Interactive key generation\ngpg --gen-revoke KEYID                      # Generate revocation certificate\ngpg --encrypt --recipient bob@ex.com file.txt   # Encrypt for Bob\ngpg --decrypt file.txt.gpg                  # Decrypt\ngpg --sign file.txt                         # Create detached signature\ngpg --clearsign file.txt                    # Clear-signed (readable + signed)\ngpg --detach-sign file.txt                  # Separate signature file\ngpg --verify file.txt.sig file.txt          # Verify detached signature\ngpg --armor --export alice@ex.com           # Export public key (ASCII armor)\ngpg --export-secret-keys --armor alice@ex.com > secret-key.asc\ngpg --import bob-pubkey.asc                 # Import Bob's public key\ngpg --list-keys                             # List public keys in keyring\ngpg --list-secret-keys                      # List private keys\ngpg --keyserver keyserver.ubuntu.com --search-keys bob@ex.com  # Search keyserver\ngpg --keyserver keyserver.ubuntu.com --send-keys KEYID          # Upload to keyserver\ngpg --refresh-keys                          # Refresh all keys from keyserver\ngpg --edit-key alice@ex.com                 # Interactive key management\n  > trust                                   # Set trust level\n  > adduid                                  # Add email address\n  > addkey                                  # Add subkey\n  > sign                                    # Sign someone's key\n  > expire                                  # Set expiration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "210-practical-examples",
      children: "2.10 Practical Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2101-openssl-aes-encryptiondecryption",
      children: "2.10.1 OpenSSL: AES Encryption/Decryption"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Encrypt a file with AES-256-CBC\nopenssl enc -aes-256-cbc -salt -pbkdf2 -iter 100000 \\\n    -in plaintext.txt -out encrypted.enc \\\n    -pass pass:\"MySecretPassword123\"\n\n# Decrypt\nopenssl enc -d -aes-256-cbc -pbkdf2 -iter 100000 \\\n    -in encrypted.enc -out decrypted.txt \\\n    -pass pass:\"MySecretPassword123\"\n\n# Encrypt with AES-256-GCM (authenticated encryption)\nopenssl enc -aes-256-gcm -pbkdf2 \\\n    -in plaintext.txt -out encrypted-gcm.enc \\\n    -pass pass:\"MySecretPassword123\"\n\n# Generate a random symmetric key and use it\nopenssl rand -hex 32 > symmetric.key\nopenssl enc -aes-256-gcm -pbkdf2 \\\n    -in plaintext.txt -out encrypted.bin \\\n    -pass file:./symmetric.key\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2102-openssl-rsa-keypair-and-signverify",
      children: "2.10.2 OpenSSL: RSA Keypair and Sign/Verify"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Generate RSA private key (2048-bit)\nopenssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:2048 \\\n    -out private-key.pem\n\n# Extract public key\nopenssl pkey -in private-key.pem -pubout -out public-key.pem\n\n# Sign a file\nopenssl dgst -sha256 -sign private-key.pem \\\n    -out signature.bin document.txt\n\n# Verify signature\nopenssl dgst -sha256 -verify public-key.pem \\\n    -signature signature.bin document.txt\n\n# Generate ECC key (P-256)\nopenssl ecparam -genkey -name prime256v1 -out ecdsa-private.pem\nopenssl pkey -in ecdsa-private.pem -pubout -out ecdsa-public.pem\n\n# Sign with ECDSA\nopenssl dgst -sha256 -sign ecdsa-private.pem \\\n    -out ecdsa-sig.bin document.txt\n\n# Verify with ECDSA\nopenssl dgst -sha256 -verify ecdsa-public.pem \\\n    -signature ecdsa-sig.bin document.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2103-openssl-self-signed-certificate",
      children: "2.10.3 OpenSSL: Self-Signed Certificate"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Generate a self-signed certificate (RSA)\nopenssl req -x509 -newkey rsa:2048 -keyout key.pem \\\n    -out cert.pem -days 365 -nodes \\\n    -subj \"/C=US/ST=State/L=City/O=Org/CN=example.com\"\n\n# View certificate details\nopenssl x509 -in cert.pem -text -noout\n\n# Generate a CSR (Certificate Signing Request)\nopenssl req -new -newkey rsa:2048 -keyout server.key \\\n    -out server.csr -nodes \\\n    -subj \"/C=US/CN=www.example.com\"\n\n# View CSR details\nopenssl req -in server.csr -text -noout\n\n# Sign CSR with CA key\nopenssl x509 -req -in server.csr \\\n    -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial \\\n    -out server-cert.pem -days 365 -sha256\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2104-openssl-inspecting-real-certificates",
      children: "2.10.4 OpenSSL: Inspecting Real Certificates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Fetch and display a website's certificate\nopenssl s_client -connect google.com:443 -showcerts </dev/null\n\n# Display only the certificate chain\nopenssl s_client -connect github.com:443 -showcerts </dev/null 2>/dev/null \\\n    | sed -n '/-----BEGIN CERTIFICATE-----/,/-----END CERTIFICATE-----/p'\n\n# Check certificate expiration\nopenssl s_client -connect example.com:443 </dev/null 2>/dev/null \\\n    | openssl x509 -noout -dates\n\n# Verify a certificate against a CA bundle\nopenssl verify -CAfile ca-bundle.crt server-cert.pem\n\n# Check OCSP status of a certificate\nopenssl ocsp -issuer ca.pem -cert server.pem \\\n    -url http://ocsp.example.com -resp_text\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2105-gpg-symmetric-and-asymmetric-encryption",
      children: "2.10.5 GPG: Symmetric and Asymmetric Encryption"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Symmetric encryption (password-based)\ngpg --symmetric --cipher-algo AES256 myfile.txt\n# Enter passphrase when prompted\n# Output: myfile.txt.gpg\n\n# Decrypt symmetric\ngpg --decrypt myfile.txt.gpg > myfile.txt\n\n# Generate a keypair\ngpg --full-generate-key\n# Follow prompts: RSA and RSA, 4096 bits, 1y expiry\n# Output: keypair in ~/.gnupg/\n\n# Export public key\ngpg --armor --export alice@example.com > alice-pubkey.asc\n\n# Import Bob's public key\ngpg --import bob-pubkey.asc\n\n# Encrypt for Bob (asymmetric)\ngpg --encrypt --recipient bob@example.com secret.txt\n\n# Decrypt (uses your private key)\ngpg --decrypt secret.txt.gpg\n\n# Sign a file\ngpg --sign important.txt          # Binary output\ngpg --clearsign important.txt     # ASCII-armored, readable\n\n# Verify a signed file\ngpg --verify important.txt.asc\n\n# Sign and encrypt\ngpg --encrypt --sign --recipient bob@example.com report.pdf\n\n# List keys\ngpg --list-keys\ngpg --list-secret-keys\n\n# Key server operations\ngpg --keyserver keyserver.ubuntu.com --search-keys \"alice@example.com\"\ngpg --keyserver keyserver.ubuntu.com --refresh-keys\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2106-hash-collision-demo",
      children: "2.10.6 Hash Collision Demo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install collision tools (if available)\n# For MD5: https://www.win.tue.nl/hashclash/\n# For SHA-1: https://shattered.io/\n\n# Generate MD5 collision\n# Two different postscript files with same MD5 hash\n# Reference: https://www.mscs.dal.ca/~selinger/md5collision/\n\n# Verify collision\necho -n \"The quick brown fox\" | md5sum\necho -n \"The quick brown foX\" | md5sum\n# Different inputs, different hashes (normal case)\n\n# SHA-256 avalanche effect demonstration\necho -n \"hello\" | sha256sum\n# 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824\n\necho -n \"hellp\" | sha256sum\n# d59ecedc654f4fc5b1a2047d0b02d2d297a5f5a52390c6dbee9c43046fc34e23\n\n# Observe: 1-bit difference → completely different hash\n# (h vs p differs by ~20 bits, but even a 1-bit change flips ~50% of output bits)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2107-tls-handshake-capture-with-wireshark",
      children: "2.10.7 TLS Handshake Capture with Wireshark"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps to capture and analyze a TLS 1.3 handshake:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1.  Start Wireshark capture on the network interface\n2.  Set display filter: tls.handshake.type == 1 (ClientHello) or just \"tls\"\n3.  Navigate to https://www.google.com\n4.  Find the ClientHello packet in the capture\n5.  Observe:\n    - ClientHello: TLS version, cipher suites, supported groups (X25519 in key_share)\n    - ServerHello: chosen cipher suite (TLS_AES_128_GCM_SHA256), server key_share\n    - EncryptedExtensions: server_name (SNI), ALPN (h2)\n    - Certificate: server's certificate chain\n    - CertificateVerify: digital signature of handshake transcript\n    - Finished: MAC of entire handshake\n    - Application Data: encrypted HTTP/2 traffic\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key things to look for:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Packet"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Field to Inspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Shows"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ClientHello"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cipher Suites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AEAD-only suites (no CBC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ClientHello"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported Groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X25519, P-256, P-384"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ClientHello"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key Share"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client's ephemeral public key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ServerHello"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cipher Suite"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "TLS_AES_128_GCM_SHA256"
            }), " (TLS 1.3)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf → Intermediate → Root"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CertificateVerify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signature Algorithm"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ecdsa_secp256r1_sha256"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rsa_pss_rsae_sha256"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternative: capture with tshark:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "tshark -i eth0 -f \"tcp port 443\" -w tls-capture.pcap\ntshark -r tls-capture.pcap -Y tls.handshake.type==11 -T fields \\\n    -e tls.handshake.certificate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2108-certificate-inspection-with-certigo--openssl-s_client",
      children: "2.10.8 Certificate Inspection with certigo / openssl s_client"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Using openssl s_client to inspect real certificates\nopenssl s_client -connect github.com:443 -showcerts 2>/dev/null | head -50\n\n# certigo (alternative, if installed)\ncertigo connect github.com:443\n\n# Check certificate chain validity\nopenssl s_client -connect google.com:443 2>/dev/null \\\n    | openssl x509 -noout -subject -issuer -dates\n\n# Show all certificates in chain\necho | openssl s_client -connect example.org:443 -showcerts 2>/dev/null \\\n    | sed -n '/-----BEGIN/,/-----END/p' | openssl x509 -text -noout\n\n# Extract public key from certificate\nopenssl x509 -in cert.pem -noout -pubkey\n\n# Check what signature algorithm was used\nopenssl x509 -in cert.pem -noout -text | grep \"Signature Algorithm\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "211-case-studies",
      children: "2.11 Case Studies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2111-heartbleed-cve-2014-0160",
      children: "2.11.1 Heartbleed (CVE-2014-0160)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " Critical (CVSS 7.5)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected:"
      }), " OpenSSL 1.0.1 through 1.0.1f (2012–2014)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Discovered:"
      }), " April 2014 by Codenomicon and Google Security"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Breakdown:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The TLS heartbeat extension (RFC 6520) allows a client to send a heartbeat request to keep the connection alive. The request includes a payload and its length."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Normal heartbeat:\n    Client: \"BEEF\" (4 bytes), length = 4\n    Server: reads 4 bytes, sends back \"BEEF\"\n\nExploited heartbeat:\n    Client: \"BEEF\" (4 bytes), length = 65535  ← LIES about length\n    Server: reads 65535 bytes starting from the \"BEEF\" buffer\n            returns 4 real bytes + 65531 bytes of memory garbage\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Root cause:"
      }), " Missing bounds check in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tls1_process_heartbeat()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Vulnerable code (simplified)\nunsigned char *p = &s->s3->rrec.data[0];\nunsigned int payload_length = *p++;   // ← attacker-controlled\n// ... no check that payload_length <= actual data length\nmemcpy(bp, pl, payload_length);       // ← reads beyond input buffer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What could be leaked:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Private keys (RSA, ECDSA) → the crown jewels"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Session keys (allowing decryption of traffic)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Passwords, cookies, credit card numbers from other connections sharing the same server process"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory contents from other processes (on some OS configurations)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "payload_length = min(payload_length, actual_payload_length)"
      }), " → OpenSSL 1.0.1g."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Fixed code (simplified)\nunsigned int payload_length;\nunsigned char *p = &s->s3->rrec.data[0];\npayload_length = *p++;\nif (1 + 2 + payload_length + 16 > s->s3->rrec.length)  // ← bounds check\n    goto silently_ignore;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "~17% of all HTTPS servers (500,000+) were vulnerable at disclosure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Yahoo, Amazon, Cloudflare, GitHub affected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Major internet-wide password reset campaigns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OpenSSL became a funded project post-Heartbleed (Linux Foundation Core Infrastructure Initiative)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory-safe languages (Rust, Go) prevent buffer over-reads at compile time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cryptographic software must be formally verified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open source ≠ automatically secure; funding matters"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2112-poodle-cve-2014-3566",
      children: "2.11.2 POODLE (CVE-2014-3566)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " High (CVSS 6.8)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected:"
      }), " SSL 3.0\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Discovered:"
      }), " October 2014 by Bodo Möller, Thai Duong, Krzysztof Kotowicz"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Walkthrough:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "POODLE = Padding Oracle On Downgraded Legacy Encryption. Exploits SSL 3.0's CBC mode padding, which uses a different padding format than TLS."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSL 3.0 CBC padding:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Padding byte value is UNSPECIFIED (can be any value)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["TLS requires padding bytes to equal ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(block_size - 1 - data_bytes)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SSL 3.0 only checks the LAST byte of padding"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack steps:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1.  Attacker forces downgrade to SSL 3.0 (MITM position, or uses client fallback)\n2.  Attacker controls the network path between client and server\n3.  Target: decrypt a secret cookie byte-by-byte\n\nFor each byte position i in the cookie:\n    a.  Block alignment: shift message so target byte is last byte of block n-1\n    b.  Block replacement: replace block n (containing target || padding) \n        with block n-1 (previous ciphertext block)\n    c.  Send modified ciphertext to server\n    d.  If server accepts (no padding error):\n            The last byte of block n-1 XOR last byte of block n = 0x0? (padding)\n            → target byte = last_byte_of_last_block XOR 0x0?\n            (approximately 1/256 chance of success per attempt)\n    e.  If server rejects (padding error): try again with different alignment\n    \n    256 attempts per byte on average (1/256 success rate on each guess)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it works:"
      }), " The SSL 3.0 padding specification is too permissive. TLS fixed this by requiring specific padding values."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Disable SSL 3.0 entirely. No browser or server should support SSL 3.0 after 2015."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Variants:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "POODLE TLS (CVE-2014-8730):"
        }), " Similar attack on TLS CBC padding when server accepts empty padding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FortiGate (CVE-2024-21762):"
        }), " 2024 variant affecting SSL VPN"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Downgrade attacks must be prevented (TLS 1.3 includes downgrade protection markers)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Any deviation from standard padding rules creates oracle attacks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deprecated protocols must be disabled, not just \"discouraged\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2113-sha-1-collision--shattered-2017",
      children: "2.11.3 SHA-1 Collision → SHAttered (2017)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " High\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected:"
      }), " SHA-1 hash function\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disclosed:"
      }), " February 2017 by Google and CWI Amsterdam"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical details:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "First practical collision for SHA-1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Required 6,500 CPU-years + 110 GPU-years of computation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same computational cost as 2⁶³ SHA-1 evaluations (theoretical collision bound)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "~110,000 USD in cloud compute"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The collision:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two different PDF documents with identical SHA-1 hash:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SHA-1(pdf1) = SHA-1(pdf2) = 38762cf7f55934b34d179ae6a4c80cadccbb7f0a\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "One PDF shows a $1,000 invoice, the other shows the same hash but with a different amount. This demonstrates the real-world danger: Alice can sign one document and Bob can claim she signed the other."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implications:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "git"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two commits could have the same SHA-1 hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git transitioned to SHA-256 (2024+, Git 2.42)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code signing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two binaries with same signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use SHA-256 signatures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "X.509 certificates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA could issue colliding certs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browsers deprecated SHA-1 certs by 2017"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File integrity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot detect tampering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use SHA-256 or SHA-3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Git's partial defense:"
      }), " A git commit collision requires the attacker to craft TWO different trees with the same hash AND the same parent, committer, and timestamp → extremely difficult in practice. Still, git supports SHA-256 repositories."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collision resistance degrades over time as computation gets cheaper"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NIST deprecated SHA-1 in 2011 → the SHAttered attack validated that decision"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cryptographic transitions must start early (", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://sha-mble.github.io/",
          children: "https://sha-mble.github.io/"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2114-logjam-cve-2015-4000",
      children: "2.11.4 Logjam (CVE-2015-4000)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " High (CVSS 6.8)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected:"
      }), " TLS DHE cipher suites using export-grade Diffie-Hellman\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disclosed:"
      }), " May 2015 by WeakDH team"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Walkthrough:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Logjam exploits the fact that many servers accepted DHE_EXPORT cipher suites using 512-bit Diffie-Hellman primes. The attack has two phases:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1: Precomputation (one-time cost)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1.  Choose a 512-bit prime p (from common export DH parameters)\n2.  Precompute discrete log tables using Number Field Sieve\n    (Cost: ~7 days on a cluster, ≈ 90M USD at time of publication)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2: Real-time downgrade attack"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1.  Attacker intercepts ClientHello\n2.  Attacker modifies ClientHello: only offer DHE_EXPORT (512-bit)\n3.  Server accepts and sends its 512-bit DH public key B\n4.  Attacker uses precomputed tables to compute B's discrete log → server's secret b\n5.  Attacker computes shared secret s = A^b mod p\n6.  Attacker can now decrypt all traffic and inject malicious content\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope of the attack:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "8.4% of HTTPS servers (Alexa Top 1M) vulnerable on initial scan"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "82% of vulnerable servers used the SAME three primes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TLS, SSH, IPsec, SMTP all affected (wherever DHE with weak primes was allowed)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove DHE_EXPORT cipher suites from server configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use ≥2048-bit Diffie-Hellman primes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prefer ECDHE over DHE (elliptic curve is more efficient for equivalent security)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use TLS 1.3 (eliminates DHE_EXPORT entirely, ECDHE only)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Export-grade cryptography from the 1990s continued to weaken security decades later"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parameter choice matters as much as algorithm choice"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Precomputation attacks (one-time expensive, then cheap per target) are dangerous"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ECDHE avoids the Logjam attack vector entirely"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "212-deep-comparison-tables",
      children: "2.12 Deep Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2121-symmetric-vs-asymmetric-encryption",
      children: "2.12.1 Symmetric vs Asymmetric Encryption"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symmetric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Asymmetric"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single shared secret"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key pair (public + private)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast (1-10 GB/s with HW)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (1-10 MB/s)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be pre-shared securely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public key freely shared"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n(n-1)/2 keys for n parties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2n keys for n parties (one pair each)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (O(n²) key exchanges)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (O(n) public keys)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES, ChaCha20, DES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA, ECC, DH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bulk data encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key exchange, signatures, small data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confidentiality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confidentiality + Auth + Non-repudiation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantum threat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grover's (halves key strength)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shor's (breaks completely)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical key size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128-256 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2048-4096 bits (RSA), 256 bits (ECC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Computational cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost per byte: very low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost per operation: high"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why hybrid encryption is used:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TLS handshake:\n  1. Asymmetric: ECDHE key exchange  → shared secret (slow, once)\n  2. Symmetric: AES-GCM for all data  → bulk encryption (fast, continuous)\n\nPGP email:\n  1. Asymmetric: RSA encrypt session key\n  2. Symmetric: AES encrypt message body\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2122-rsa-vs-ecc-key-size-comparison",
      children: "2.12.2 RSA vs ECC Key Size Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Security (bits)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RSA key size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ECC key size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ratio"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Broken by"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "160"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.4×"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nation-states (factoring)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "112"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9.1×"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adequate until ~2030"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12×"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Considered secure for now"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7680"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20×"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-term security"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15360"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "521"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "29×"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-quantum era"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why ECC outperforms RSA:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Elliptic curve discrete log has ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no sub-exponential algorithm"
        }), " (unlike number field sieve for factoring)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key size grows linearly instead of exponentially with security level"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ECC-256 ≈ RSA-3072 at 128-bit security → 12× smaller keys"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Smaller = faster (fewer CPU cycles), less memory, smaller certificates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2123-tls-12-vs-13",
      children: "2.12.3 TLS 1.2 vs 1.3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(Refer to comprehensive table in section 2.7.4)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key takeaway:"
      }), " TLS 1.3 reduces handshake from 2 RTT to 1 RTT, removes all insecure options (CBC, RC4, static RSA), mandates forward secrecy (ECDHE only), and encrypts the entire handshake after ServerHello."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2124-aes-mode-comparison",
      children: "2.12.4 AES Mode Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(Refer to section 2.1.3 table)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Guideline:"
      }), " Always use GCM unless you have a specific reason not to (and understand the nonce uniqueness requirement). Never use ECB. Use CTR only with an authentication tag."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "213-post-quantum-cryptography-pqc",
      children: "2.13 Post-Quantum Cryptography (PQC)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The threat:"
      }), " Shor's algorithm (1994) can factor integers and compute discrete logarithms in polynomial time on a sufficiently large quantum computer. This breaks:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RSA"
        }), " (factoring)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ECC / ECDH / ECDSA"
        }), " (discrete log)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Diffie-Hellman"
        }), " (discrete log)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DSA"
        }), " (discrete log)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What survives:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Symmetric:"
        }), " AES-256 (Grover's search reduces 256-bit → 128-bit, still adequate)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash functions:"
        }), " SHA-256, SHA-3 (Grover's pre-image search reduces 256-bit → 128-bit)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MACs:"
        }), " HMAC (same security as underlying hash)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NIST PQC Standardization (2024 finalists):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Sizes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security Level"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CRYSTALS-Kyber"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lattice (ML-KEM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key Encapsulation Mechanism (KEM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pk: 800B, sk: 1632B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-5 (AES-128 equiv)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CRYSTALS-Dilithium"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lattice (ML-DSA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Digital Signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pk: 1312B, sk: 2528B, sig: 2420B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FALCON"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lattice (FN-DSA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signatures (compact)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pk: 897B, sk: 1281B, sig: 666B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SPHINCS+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash-based (SLH-DSA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signatures (stateless)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pk: 32B, sig: 17KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hybrid approach (current best practice):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combine classical + PQC in protocols:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TLS hybrid key exchange (X25519 + Kyber):\n    Shared Secret = HKDF(X25519_shared || Kyber_shared)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This ensures security even if one system is broken. Google Chrome started testing X25519Kyber768 in 2023."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Timeline estimates (cryptographer consensus, 2024):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Year"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Milestone"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action Needed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2025-2027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIST standardization finalized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement ML-KEM/ML-DSA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2027-2030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large quantum computer possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Begin PQC migration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2030-2035"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Widespread PQC deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy crypto disabled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2035+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantum attacks on RSA-2048 possible?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full PQC transition expected"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Harvest now, decrypt later\" threat:"
      }), " Attackers already collecting encrypted traffic. If they store it now, they can decrypt it when quantum computers arrive. All long-term secrets (classified documents, trade secrets, personal data with 30-year sensitivity) should use PQC today."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "214-common-cryptographic-mistakes",
      children: "2.14 Common Cryptographic Mistakes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Real-world crypto failures rarely break the algorithm → they exploit implementation errors. Here are the most common mistakes seen in security audits."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-1-nonceiv-reuse-in-gcm-or-ctr",
      children: "Mistake 1: Nonce/IV Reuse in GCM or CTR"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The problem:"
      }), " Encrypting two messages with the same key and nonce in GCM/CTR reveals ", (0,jsx_runtime.jsx)(_components.code, {
        children: "C₁ XOR C₂ = P₁ XOR P₂"
      }), ", leaking both plaintexts. In GCM, nonce reuse also leaks the GHASH authentication key H, allowing universal forgery."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real case:"
      }), " In 2019, several WhatsApp forks reused nonces, allowing decryption of group messages."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Use a monotonically increasing counter, or derive a unique nonce per message via HKDF. For GCM, use 96-bit nonce and enforce atomic key-nonce uniqueness."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-2-using-ecb-mode",
      children: "Mistake 2: Using ECB Mode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The problem:"
      }), " Identical plaintext blocks produce identical ciphertext blocks. Patterns in data survive encryption → the Tux penguin image remains recognizable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real case:"
      }), " Adobe encrypted user passwords with 3DES-ECB in 2013. The resulting breach leaked password hints alongside encrypted passwords. Attackers could match ciphertext blocks to decrypt millions of passwords."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Never use ECB. Use GCM (authenticated) or CBC (with random IV, if authentication is handled separately)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-3-hardcoded-cryptographic-keys",
      children: "Mistake 3: Hardcoded Cryptographic Keys"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The problem:"
      }), " Keys compiled into source code or stored in configuration files in plaintext can be extracted by anyone with file system access."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real case:"
      }), " The Sony PS3 master key was hardcoded → attackers extracted it, signed arbitrary code, and jailbroke the console permanently."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Use hardware security modules (HSMs), key management services (AWS KMS, Azure Key Vault), or at minimum derive keys from user-supplied passphrases via PBKDF2/Argon2."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-4-weak-random-number-generation",
      children: "Mistake 4: Weak Random Number Generation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The problem:"
      }), " Cryptographic algorithms require unpredictable random numbers. Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rand()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "math.random()"
      }), ", or similar PRNGs produces predictable keys."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real case:"
      }), " Debian OpenSSL bug (CVE-2008-0166): A comment accidentally removed entropy-gathering code. Only 32,767 possible keys were generated. All SSH keys and SSL certificates generated on Debian between 2006-2008 were compromised."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Use cryptographically secure pseudorandom number generators (CSPRNGs): ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/dev/urandom"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getrandom()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CryptGenRandom()"
      }), ", or language-specific APIs (", (0,jsx_runtime.jsx)(_components.code, {
        children: "secrets"
      }), " module in Python, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "crypto.randomBytes"
      }), " in Node.js)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-5-padding-oracle-vulnerabilities",
      children: "Mistake 5: Padding Oracle Vulnerabilities"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The problem:"
      }), " When the server responds differently to \"invalid padding\" vs \"valid padding but bad MAC\", the attacker can decrypt messages byte-by-byte."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real case:"
      }), " POODLE (CVE-2014-3566), Lucky13 (CVE-2013-0169), ROBOT (CVE-2017-17405) → all exploit subtle differences in error responses."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Use AEAD modes (GCM, ChaCha20-Poly1305). If CBC is unavoidable, validate padding AND MAC atomically, returning a single error for any failure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-6-self-implemented-cryptography",
      children: "Mistake 6: Self-Implemented Cryptography"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The problem:"
      }), " \"Don't roll your own crypto\" is the first rule of security. Custom implementations lack the years of analysis, testing, and side-channel hardening that standard libraries provide."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real case:"
      }), " Many amateur implementations get AES table lookups wrong, leaking keys through cache timing. Others forget padding, nonce generation, or constant-time comparison."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Use well-audited libraries (OpenSSL, libsodium, BoringSSL, Tink). Avoid implementing primitives from scratch. Use high-level APIs: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "crypto_box()"
      }), " instead of assembling AES + HMAC + ECDH manually."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-7-key-management-failures",
      children: "Mistake 7: Key Management Failures"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The problem:"
      }), " Even perfect algorithms are useless with poor key management: keys stored in world-readable files, transmitted over unencrypted channels, or never rotated."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real case:"
      }), " The 2011 RSA SecurID breach compromised the seed values for two-factor tokens → a key management failure that required replacing 40 million tokens."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Implement a key lifecycle: generation, distribution, storage, rotation, and destruction. Use KMS for centralized management. Rotate keys regularly (NIST recommends 2-year interval for AES keys)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-8-timing-side-channels",
      children: "Mistake 8: Timing Side-Channels"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The problem:"
      }), " Operators that take different time depending on data (e.g., string comparison on first mismatch) leak information through timing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real case:"
      }), " HMAC verification done with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "memcmp()"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "=="
      }), " allows attackers to forge MACs by measuring response time per byte (~2 million measurements per byte)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Use constant-time comparison: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "XOR"
      }), " bytes together, OR the results, check final value. All crypto libraries provide constant-time comparison functions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-9-failure-to-validate-certificates",
      children: "Mistake 9: Failure to Validate Certificates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The problem:"
      }), " Code that skips certificate validation (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "verify=False"
      }), " in Python requests, accepting self-signed certs in production) defeats the entire PKI."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real case:"
      }), " Many mobile apps in early 2010s accepted any TLS certificate, allowing easy MITM attacks on public WiFi."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Always validate certificate chains, hostnames, and expiry dates. Use platform trust stores. Never disable verification, even in testing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-10-using-broken-algorithms",
      children: "Mistake 10: Using Broken Algorithms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The problem:"
      }), " Continuing to use MD5, SHA-1, RC4, DES, or 3DES after they've been broken."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real case:"
      }), " The Flame malware (2012) used an MD5 collision to forge a Microsoft code-signing certificate. Microsoft had already deprecated MD5, but the terminal server licensing service still used it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Audit algorithm usage across your infrastructure. Use SHA-256 or SHA-3 for hashing, AES-GCM for encryption, X25519/Ed25519 for key exchange and signatures."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "215-interview-corner",
      children: "2.15 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-explain-the-difference-between-symmetric-and-asymmetric-encryption",
      children: "Q1: Explain the difference between symmetric and asymmetric encryption."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Symmetric encryption uses a single shared key for both encryption and decryption. It's fast (AES achieves ~1 GB/s with hardware acceleration) but suffers from the key distribution problem → both parties must securely share the key before communication. Asymmetric encryption uses a public/private key pair. The public key encrypts, the private key decrypts. It solves key distribution but is 100-1000× slower. In practice, hybrid encryption combines both: asymmetric (e.g., ECDH) to exchange a session key, then symmetric (AES-GCM) for bulk data → as done in TLS."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-how-does-the-tls-13-handshake-work",
      children: "Q2: How does the TLS 1.3 handshake work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " TLS 1.3 achieves a 1-RTT handshake (or 0-RTT for returning clients). The client sends a ClientHello containing its ECDHE key share, supported cipher suites, and extensions (SNI, ALPN). The server responds with its ECDHE key share, encrypted extensions, certificate, CertificateVerify (signature of the handshake transcript), and Finished (MAC). The client verifies the server's certificate and signature, then sends its own Finished. Both sides derive the same application traffic keys from the ECDHE shared secret. The handshake is fully encrypted after ServerHello → no certificates or SNI are sent in the clear. Forward secrecy is mandatory because the ECDHE ephemeral keys are discarded after the session."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-the-difference-between-aes-cbc-and-aes-gcm",
      children: "Q3: What is the difference between AES-CBC and AES-GCM?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " CBC (Cipher Block Chaining) XORs each plaintext block with the previous ciphertext block before encryption. It requires padding (PKCS#7) and provides only confidentiality → not integrity. GCM (Galois/Counter Mode) uses CTR mode for encryption and GMAC for authentication. It provides authenticated encryption (AEAD): both confidentiality and integrity in a single pass. GCM is parallelizable, requires no padding, and is the recommended mode for TLS 1.3. CBC is vulnerable to padding oracle attacks (e.g., POODLE) and does not detect tampering."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-explain-the-n1-problem-in-the-context-of-cryptography-trick-question--redirects-to-ormdatabases",
      children: "Q4: Explain the N+1 problem in the context of cryptography. (Trick question → redirects to ORM/databases)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " This is not a cryptography concept. In the database context, the N+1 query problem occurs when an ORM issues N additional queries after an initial query to fetch related entities. Cryptography has no N+1 problem."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-forward-secrecy-and-why-does-it-matter",
      children: "Q5: What is forward secrecy and why does it matter?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Forward secrecy ensures that compromising the long-term private key does NOT allow an attacker to decrypt past sessions. In TLS 1.3, each session uses ephemeral Diffie-Hellman keys that are generated for that session only and then discarded. Even if the server's long-term private key is later stolen, the attacker cannot derive the session keys because the ephemeral keys are gone. TLS 1.2 with static RSA key exchange lacked forward secrecy → stealing the private key decrypted ALL past sessions. TLS 1.3 mandates forward secrecy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-does-a-digital-signature-provide-non-repudiation",
      children: "Q6: How does a digital signature provide non-repudiation?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A digital signature binds the signer's identity to the signed message. Only the signer possesses their private key. When Alice signs a message, she hashes the message and encrypts the hash with her private key. Bob verifies by decrypting the signature with Alice's public key and comparing the hash. Since only Alice's private key could produce a signature that verifies with Alice's public key, Alice cannot later deny signing → assuming her private key was not compromised. This provides non-repudiation: Alice cannot repudiate (deny) the signature."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-happens-in-a-padding-oracle-attack",
      children: "Q7: What happens in a padding oracle attack?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A padding oracle attack exploits a server that reveals whether decrypted data has valid padding. In CBC mode, the last block's padding must be valid (e.g., PKCS#7: if 5 bytes of padding, each byte = 0x05). By modifying ciphertext and observing the server's response (valid padding vs invalid padding), the attacker can decrypt the original plaintext byte-by-byte. Each byte requires up to 256 attempts. The POODLE attack on SSL 3.0 is a variant where SSL 3.0's permissive padding (only last byte checked) makes the attack easier (1/256 success rate per guess). Fix: use AEAD modes (GCM), or never reveal padding errors (always return generic error)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-does-rsa-key-generation-work",
      children: "Q8: How does RSA key generation work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " RSA key generation: (1) Choose two large primes p and q (at least 1024 bits each for 2048-bit RSA). (2) Compute n = p × q (the modulus). (3) Compute φ(n) = (p-1)(q-1) (Euler's totient). (4) Choose public exponent e with gcd(e, φ(n)) = 1 (typically 65537 for fast verification and security). (5) Compute private exponent d = e^(-1) mod φ(n) using the Extended Euclidean Algorithm. Public key: (n, e). Private key: (n, d). Security depends on the practical impossibility of factoring n to recover p and q. Key generation is the slowest RSA operation because it requires finding large primes (probabilistic primality testing)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-is-the-quantum-threat-to-cryptography",
      children: "Q9: What is the quantum threat to cryptography?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Shor's algorithm solves integer factorization and discrete logarithm in polynomial time on a sufficiently large quantum computer. This would break RSA, ECC (ECDH, ECDSA), and Diffie-Hellman completely. Grover's algorithm provides a quadratic speedup for symmetric key search → AES-256 (2²⁵⁶ → 2¹²⁸) is still adequate. NIST has standardized post-quantum algorithms: CRYSTALS-Kyber (ML-KEM) for key exchange and CRYSTALS-Dilithium (ML-DSA) for signatures, both based on lattice problems. The \"harvest now, decrypt later\" threat means attackers are already collecting encrypted traffic to decrypt when quantum computers arrive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-explain-the-difference-between-crl-and-ocsp",
      children: "Q10: Explain the difference between CRL and OCSP."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " CRL (Certificate Revocation List) is a periodically published list of revoked certificate serial numbers signed by the CA. The client fetches the CRL and checks if the certificate is listed. Problems: can be large (megabytes), introduces latency between revocation and CRL publication, and reveals which CAs the client trusts. OCSP (Online Certificate Status Protocol) provides real-time per-certificate status. The client sends the certificate's serial number to the OCSP responder and receives a signed \"good/revoked/unknown\" response. OCSP Stapling improves privacy: the server fetches a time-stamped OCSP response and appends it to the TLS handshake, so the client doesn't contact the CA directly. Modern practice: OCSP stapling with Certificate Transparency logs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-what-is-the-birthday-attack-on-hash-functions",
      children: "Q11: What is the birthday attack on hash functions?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The birthday paradox says that with 23 people in a room, there's a >50% chance two share a birthday → not because finding a match for a specific person is easy, but because of the number of pairwise comparisons. Applied to hash functions: finding any collision requires only 2^(n/2) attempts (not 2^n). For SHA-256 (n=256), collision resistance is 2¹²⁸ → still secure. For SHA-1 (n=160), collision resistance is 2⁸⁰ → the SHAttered attack achieved a collision at ≈2⁶³ due to cryptanalytic improvements, not pure birthday search. This is why hash output sizes must be double the desired security level."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-how-does-ssh-public-key-authentication-work",
      children: "Q12: How does SSH public key authentication work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " SSH key authentication involves four steps: (1) The server sends a challenge (random nonce) to the client requesting authentication. (2) The client signs the challenge with their private key (typically RSA, ECDSA, or Ed25519). (3) The server verifies the signature using the user's public key stored in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.ssh/authorized_keys"
      }), ". (4) Access is granted if the signature is valid. The session then uses ephemeral DH keys for forward-secure symmetric encryption. The server's host key was verified during initial key exchange (TOFU → Trust On First Use, stored in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.ssh/known_hosts"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q13-what-is-the-difference-between-a-hash-function-and-hmac",
      children: "Q13: What is the difference between a hash function and HMAC?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A hash function (SHA-256) provides a deterministic fingerprint of data but no authentication → anyone can compute it. HMAC is a keyed-hash message authentication code: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HMAC(K, M) = H((K'⊕opad) || H((K'⊕ipad) || M))"
      }), ". The key K ensures that only parties who share K can compute or verify the HMAC. HMAC provides both integrity (detect tampering) and authentication (verify sender knows the key). Without HMAC, an attacker who can modify data can also recompute the hash → the hash alone provides no security."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-explain-the-concept-of-perfect-forward-secrecy",
      children: "Q14: Explain the concept of perfect forward secrecy."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Perfect forward secrecy (PFS) ensures that session keys are not derived from long-term secrets. In TLS with ECDHE, the server generates an ephemeral key pair for each session, signs the ephemeral public key with its long-term private key, and discards the ephemeral private key after the session. Even if the long-term signing key is later compromised, the attacker cannot recover the ephemeral private key (it was deleted) and therefore cannot decrypt past sessions. PFS contrasts with static RSA key exchange (TLS 1.2), where the session key is encrypted with the server's RSA public key → compromising the RSA private key decrypts ALL past sessions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-how-does-hybrid-encryption-work-in-pgp",
      children: "Q15: How does hybrid encryption work in PGP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " PGP uses hybrid encryption: (1) Generate a random session key K (e.g., 256-bit AES key). (2) Encrypt the plaintext with AES-GCM using K. (3) Encrypt K with the recipient's RSA public key. (4) Send both the encrypted message and the encrypted session key. The recipient: (1) Decrypts the session key K with their RSA private key. (2) Decrypts the message with K using AES-GCM. This combines the speed of symmetric encryption (for the bulk message) with the convenience of asymmetric key management (no need to pre-share K). The same approach is used in TLS, Signal, and virtually all modern encrypted communication."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q16-what-is-a-cryptographic-salt-and-why-is-it-used",
      children: "Q16: What is a cryptographic salt and why is it used?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A salt is a random value concatenated with a password before hashing: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hash = SHA256(password + salt)"
      }), ". The salt ensures that identical passwords produce different hashes. Without salts, attackers can precompute rainbow tables for all common passwords. With a unique salt per user (typically 16-32 random bytes), each password requires a separate brute-force attack. Salts also make it impossible to tell which users share the same password. Best practice: use Argon2id or bcrypt (not just SHA-256), which incorporate salts and are deliberately slow."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q17-what-is-the-difference-between-ssl-and-tls",
      children: "Q17: What is the difference between SSL and TLS?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " SSL (Secure Sockets Layer) was developed by Netscape in the 1990s: SSLv1 (never released), SSLv2 (1995, broken), SSLv3 (1996, deprecated after POODLE). TLS (Transport Layer Security) is the standardized successor: TLS 1.0 (1999, RFC 2246), TLS 1.1 (2006), TLS 1.2 (2008), TLS 1.3 (2018). TLS 1.0 was effectively SSL 3.1. Key differences: TLS 1.3 removes all legacy algorithms (CBC, RC4, 3DES, static RSA), mandates forward secrecy, reduces handshake to 1-RTT, encrypts more of the handshake, and removes renegotiation. Today \"SSL\" is used colloquially for TLS → the actual SSL protocols are deprecated and should not be enabled anywhere."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-how-does-a-certificate-authority-issue-and-manage-certificates",
      children: "Q18: How does a Certificate Authority issue and manage certificates?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The CA lifecycle involves: (1) Identity verification: the CA validates the certificate requester's domain control (DV), organization (OV), or legal identity (EV). For DV, the CA might check email at ", (0,jsx_runtime.jsx)(_components.a, {
        href: "mailto:admin@domain.com",
        children: "admin@domain.com"
      }), " or require DNS TXT record creation. (2) CSR processing: the requester generates a keypair and sends a Certificate Signing Request (CSR) containing the public key and identity details, signed by the private key. (3) Certificate issuance: the CA signs the CSR with its intermediate CA key, producing an X.509 certificate with a serial number, validity period, and extensions. (4) Publication: the certificate is made available, and the CA may submit it to Certificate Transparency logs. (5) Revocation: if compromised, the CA adds the serial number to its CRL and OCSP responder. (6) Renewal: before expiry (typically 90 days for Let's Encrypt, 1-3 years for others), the requester submits a new CSR. Let's Encrypt automates the entire process with the ACME protocol."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q19-what-is-shamirs-secret-sharing-and-how-does-it-work",
      children: "Q19: What is Shamir's Secret Sharing and how does it work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Shamir's Secret Sharing (SSS) splits a secret S into n shares, such that any k shares can reconstruct S, but k-1 shares reveal nothing. Based on polynomial interpolation: (1) To share S with threshold k, pick a random polynomial f(x) of degree k-1 where f(0) = S. (2) Evaluate f(x) at n non-zero points: share_i = (i, f(i)). (3) To reconstruct, pick any k shares and use Lagrange interpolation to find f(0). The security is information-theoretic: k-1 shares give zero information about S. Real-world uses: splitting master keys in HSMs, dividing cryptocurrency private keys (e.g., 3-of-5 multisig), and protecting nuclear launch codes (the original use case)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q20-what-is-hkdf-and-when-is-it-used",
      children: "Q20: What is HKDF and when is it used?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " HKDF (HMAC-based Key Derivation Function, RFC 5869) takes a source of initial keying material and produces cryptographically strong output keys. It has two stages: (1) Extract: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PRK = HMAC-Hash(salt, IKM)"
      }), " where IKM is the input key material → this condenses entropy and removes biases. (2) Expand: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OKM = HKDF-Expand(PRK, info, L)"
      }), " where info is application-specific context and L is the desired output length. HKDF is used in TLS 1.3 to derive handshake traffic keys, application traffic keys, and resumption keys from the ECDHE shared secret. It's also used in WireGuard, IPsec, and signal. Advantages: flexible output length, domain separation via info parameter, no need to pre-share salt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "216-applications-in-real-systems",
      children: "2.16 Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Crypto Used"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HTTPS (TLS 1.3)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECDHE (X25519), AES-GCM / ChaCha20-Poly1305, ECDSA/RSA signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure web browsing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SSH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DH/ECDH key exchange, AES-CTR, HMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote server access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PGP / GPG"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA/ECC, AES, SHA-2, signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email encryption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Signal Protocol"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X3DH (triple DH), AES-GCM, HMAC-SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end messaging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bitcoin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-256 (double), ECDSA (secp256k1), RIPEMD-160"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blockchain, transactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ethereum"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keccak-256 (SHA-3 variant), ECDSA (secp256k1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart contracts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "WireGuard VPN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X25519, ChaCha20-Poly1305, BLAKE2s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern VPN tunnel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AWS KMS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-GCM, RSA-OAEP, ECDH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud key management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Let's Encrypt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA/ECDSA, ACME protocol, Certificate Transparency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated TLS certificates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linux Disk (LUKS)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-XTS (for disk encryption), SHA-256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full disk encryption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BitLocker"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-CBC + Elephant diffuser, TPM-based key protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows disk encryption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "JWT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC-SHA256, RSA-SHA256, ECDSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token-based authentication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DNSSEC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA/SHA-256, NSEC/NSEC3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS security extensions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code Signing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authenticode (RSA-SHA256)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Software integrity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1Password"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SRP (password proof), AES-GCM, HKDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password manager"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2161-cryptography-hardening-checklist",
      children: "2.16.1 Cryptography Hardening Checklist"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TLS version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS 1.3 only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSLv2/3, TLS 1.0/1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol flaws, weak cipher suites, no PFS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TLS cipher suites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS_AES_256_GCM_SHA384, TLS_CHACHA20_POLY1305_SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RC4, CBC, 3DES, export-grade"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AEAD only; CBC is padding oracle prone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X25519, X25519Kyber768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "static RSA, DHE < 2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward secrecy; DHE < 2048 is Logjam-vulnerable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-256 with RSA-2048+, ECDSA P-256, Ed25519"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-1, MD5, RSA < 2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collision attacks on SHA-1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-256, SHA-3, BLAKE2b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5, SHA-1, MD4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collision attacks demonstrated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Password storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Argon2id, bcrypt, PBKDF2-HMAC-SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5(password), SHA-1(password), unsalted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rainbow tables, fast hashing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HSM, KMS, TPM, secure enclave"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardcoded, config files, env vars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extraction via file read / reverse engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/dev/urandom, getrandom(), CryptGenRandom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rand(), math.random(), time(NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable output, key recovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full chain + hostname + OCSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "verify=False, self-signed (prod)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MITM attack surface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC-SHA256, Ed25519 signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plain API keys in URL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replay attacks, MITM"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Symmetric encryption (AES, ChaCha20)"
          }), " is fast and suitable for bulk data. Use authenticated modes (GCM, ChaCha20-Poly1305). Never use ECB. ChaCha20 is an excellent alternative when hardware AES is unavailable. CTR mode requires unique nonces per key. AES-XTS is the standard for disk encryption."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Asymmetric encryption (RSA, ECC, DH)"
          }), " solves key distribution but is 100-1000x slower than symmetric. ECC outperforms RSA (256-bit ECC ≈ 3072-bit RSA). Use ECDHE for forward-secure key exchange. RSA is primarily used for digital signatures and legacy compatibility."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hash functions (SHA-256, SHA-3, BLAKE2)"
          }), " provide integrity and are the building blocks of MACs, signatures, and key derivation. MD5 and SHA-1 are broken (collisions demonstrated). Always use at least SHA-256. SHA-3 is the NIST standard; BLAKE2 is faster when hardware acceleration is unavailable."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "HMAC"
          }), " provides authenticated integrity (MAC with shared secret key). HMAC-SHA256 is the industry standard. The nested hash construction prevents length extension attacks. Used in AWS Signature V4, TLS 1.2, SSH, and JWT."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Digital signatures"
          }), " bind identity to data via private key signing and public key verification. Provide non-repudiation. Ed25519 is the modern gold standard (fast, constant-time, compact 64-byte signatures). ECDSA is widely used. RSA signatures are gradually being replaced."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "PKI (X.509, CA hierarchy, CRL, OCSP)"
          }), " provides the trust infrastructure for HTTPS. CAs are organized in a root-to-leaf hierarchy with cross-signing for transition periods. Certificate Transparency logs detect mis-issuance. OCSP stapling addresses privacy and scaling issues. Let's Encrypt automated the entire lifecycle via ACME."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TLS 1.3"
          }), " is simpler, faster, and more secure than TLS 1.2. Mandatory AEAD, forward secrecy via ECDHE, 1-RTT handshake (0-RTT for resumed), encrypted entire handshake (including certificates), removed all legacy algorithms (CBC, RC4, 3DES, static RSA, renegotiation, compression)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TLS handshake flow:"
          }), " ClientHello (supported versions, cipher suites, key shares) → ServerHello (chosen suite, key share) + EncryptedExtensions + Certificate + CertificateVerify + Finished → Client Finished → Application Data (1-RTT). Key derivation uses HKDF at every stage."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SSH"
          }), " provides secure remote access with host-based authentication (TOFU) and user authentication (public key, password, multi-factor). Supports port forwarding for encrypted tunnels. Ed25519 keys are recommended over RSA. Modern SSH hardening disables password authentication entirely."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "PGP/OpenPGP"
          }), " uses hybrid encryption (session key + asymmetric) and provides compression, radix-64 armor, and a decentralized Web of Trust. Key management is self-service: users generate, sign, revoke, and rotate their own keys via subkey architecture. Used for email encryption, software signing, and file encryption."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Randomness is foundational:"
          }), " Every cryptographic operation requires unpredictable random numbers. Use CSPRNGs only (", (0,jsx_runtime.jsx)(_components.code, {
            children: "/dev/urandom"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "getrandom()"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CryptGenRandom"
          }), "). Predictable randomness destroys security regardless of algorithm strength. The Debian RNG disaster (2008) demonstrated this at scale → 32K possible keys instead of 2¹²⁸."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Key management is harder than cryptography:"
          }), " The most secure algorithm is useless if keys are hardcoded, stored in world-readable files, transmitted in plaintext, or never rotated. Use HSMs or KMS for production key storage. Implement a complete lifecycle: generation, distribution, usage, rotation, destruction."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implementation mistakes are the #1 cause of real-world crypto failures:"
          }), " Nonce reuse, ECB mode, weak RNGs, padding oracles, hardcoded keys, disabled certificate validation, and side-channel leaks. Use AEAD modes, audited libraries (libsodium, BoringSSL, Tink), constant-time comparisons, and never implement primitives from scratch."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Constant-time implementation matters:"
          }), " Cryptographic code must execute in time independent of secret data. Timing side-channels can leak entire keys through network latency measurements (~2M measurements per byte). Use library-provided constant-time comparison functions. Avoid secret-dependent branches, table lookups with secret indices, and variable-time operations (modular exponentiation with secret exponent)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Post-quantum cryptography"
          }), " is needed for long-term security. NIST standardized ML-KEM (Kyber) for key exchange and ML-DSA (Dilithium) for signatures. PQC key sizes and signature sizes are significantly larger than classical equivalents. Hybrid mode (classical + PQC) is the current best practice to hedge against both quantum breaks and cryptanalytic improvements."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Algorithm selection cheat sheet (2025+):"
          }), " Encryption: AES-256-GCM or XChaCha20-Poly1305. Key exchange: X25519 or X25519Kyber768 (hybrid). Signatures: Ed25519 or ML-DSA-65. Hashing: SHA-256 or BLAKE2b. KDF: HKDF-SHA256. Password hashing: Argon2id. Random: /dev/urandom or getrandom()."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does ECB mode leak plaintext patterns? Demonstrate with a concrete example."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nECB encrypts each 16-byte block independently with the same key, so identical plaintext blocks produce identical ciphertext blocks. Example: an image encrypted with ECB retains visible outlines because the same pixel values encrypt to the same output.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the AES S-box provide non-linearity, and why is this essential?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nThe S-box is constructed via multiplicative inverse in GF(2^8) followed by an affine transformation. Non-linearity prevents linear cryptanalysis by ensuring the output is not a linear function of the input — without it, AES could be broken with linear algebra.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Walk through the RSA key generation with p=17, q=13. Compute n, φ(n), choose e, compute d."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nn = 17×13 = 221. φ(n) = 16×12 = 192. Choose e = 5 (coprime to 192). Compute d = e⁻¹ mod 192 = 77 (since 5×77 = 385 ≡ 1 mod 192). Public key: (n=221, e=5). Private key: d=77.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why Diffie-Hellman is vulnerable to MITM without authentication."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nDH does not authenticate the parties. An attacker can intercept both public values, establish separate DH keys with each party, and relay messages — each party believes they are talking directly to the other. Authentication (digital signatures or pre-shared keys) is required to prevent this.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the three properties of a cryptographic hash function? Which one does the birthday attack exploit?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nPreimage resistance, second-preimage resistance, and collision resistance. The birthday attack exploits collision resistance — finding any two inputs with the same hash is easier than finding a specific preimage due to the birthday paradox (~2^(n/2) vs 2^n).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the security implications of nonce reuse in GCM vs CTR mode."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nIn CTR, nonce reuse leaks the XOR of the two plaintexts (keystream is identical). In GCM, nonce reuse also leaks the XOR AND reveals the authentication key, allowing forgeries. GCM nonce reuse is catastrophic — confidentiality AND authentication are broken.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does TLS 1.3 require forward secrecy while TLS 1.2 made it optional?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nForward secrecy ensures that compromising the server's long-term key does not decrypt past sessions. TLS 1.3 mandates (EC)DHE key exchange so session keys are ephemeral. TLS 1.2 allowed static RSA key exchange (no forward secrecy) which meant past traffic could be decrypted if the private key leaked.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does OCSP stapling improve on basic OCSP?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nIn basic OCSP, the client must contact the CA's OCSP responder directly (privacy leak, extra latency, responder may be unreachable). With stapling, the server fetches a time-stamped OCSP response from the CA during the TLS handshake and appends it to the Certificate message — eliminating the extra client-to-CA round trip.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the \"harvest now, decrypt later\" threat?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nAttackers collect encrypted traffic today and store it, intending to decrypt it in the future when quantum computers become powerful enough to break RSA/ECC. This motivates immediate migration to post-quantum cryptography for long-lived secrets.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Draw the TLS 1.3 full handshake message flow."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n1. ClientHello (key_share, supported_groups, cipher suites) → Server. 2. ServerHello (selected params + key_share) → Client. 3. Server sends EncryptedExtensions, Certificate, CertificateVerify, Finished. 4. Client sends Finished. 5. Application Data (1-RTT complete). See the Mermaid diagram earlier in this chapter for the full sequence.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AES Modes:"
        }), " A 64-byte message is encrypted with AES-128-CBC using a fixed IV of all zeros. The first block (16 bytes) repeats 4 times. What do you observe in the ciphertext? Repeat for AES-128-CTR."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nIn CBC, each repeated plaintext block produces a different ciphertext block (chaining ensures diffusion). In CTR, the same plaintext blocks encrypt to identical ciphertext blocks because the keystream is the same for the same counter value.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RSA Computation:"
        }), " Using RSA with p=11, q=13, e=7, encrypt the message m=5. Then decrypt the ciphertext. Show all modular arithmetic steps."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nn = 11×13 = 143. φ(n) = 10×12 = 120. d = 7⁻¹ mod 120 = 103. Encrypt: c = 5⁷ mod 143 = 78125 mod 143 = 47. Decrypt: m = 47¹⁰³ mod 143 = 5 (using modular exponentiation).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash Collision:"
        }), " Write a script that searches for a SHA-256 partial collision (first 4 hex characters match, ≈2¹⁶ attempts needed). Verify the collision."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nGenerate random inputs, compute SHA-256, store the first 4 hex chars in a hashmap. When a collision is found (same prefix from different inputs), print both inputs and verify by re-computing the hashes. Expect ~65536 attempts for a 16-bit collision.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TLS Handshake:"
        }), " Use Wireshark to capture a TLS 1.3 handshake to any HTTPS website. Identify: ClientHello cipher suites, supported groups, key share, server certificate, CertificateVerify signature algorithm."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nApply a TLS filter in Wireshark. ClientHello shows TLS_AES_256_GCM_SHA384 etc. in cipher suites, x25519 in supported_groups, key_share contains the ephemeral public key. ServerHello is followed by Certificate (X.509 chain) and CertificateVerify (rsa_pss_rsae_sha256 or ecdsa_secp256r1_sha256).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Certificate Chain:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "openssl s_client -showcerts"
        }), " to fetch and display the full certificate chain for your university or workplace website. Identify each CA in the chain."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n`openssl s_client -connect example.com:443 -showcerts` prints each certificate in the chain in PEM format. The first is the server cert, followed by intermediate(s), and optionally the root (though roots are often omitted). Use `openssl x509 -in cert.pem -text -noout` to examine each.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HMAC:"
        }), " Compute ", (0,jsx_runtime.jsx)(_components.code, {
          children: "HMAC-SHA256(\"key\", \"The quick brown fox\")"
        }), " using a programming language. Verify with an online tool."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nHMAC-SHA256(\"key\", \"The quick brown fox\") = f7bc83f430538424b13298e6aa6fb143ef4d59a14946175997479dbc2d1a3cd8. Verify at https://www.freeformatter.com/hmac-generator.html.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-analysis",
      children: "Case Study Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Heartbleed Analysis:"
        }), " Explain why the heartbeat extension trust boundary was violated. How would a Rust implementation of OpenSSL prevent this class of bug?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nThe heartbeat request included a length field not validated against the actual payload — the server trusted the length and read that many bytes from memory. Rust's memory safety guarantees would prevent this out-of-bounds read at compile time.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logjam Defense:"
        }), " Your organization has legacy systems that require DHE cipher suites. Design a migration plan to eliminate Logjam risk. Include server configuration changes, testing strategy, and monitoring."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nPhase 1: Inventory all systems using DHE. Phase 2: Configure servers to use DH groups = 2048 bits (diffie-hellman-group14-sha1 or higher). Phase 3: Test compatibility in staging. Phase 4: Monitor for downgrade attacks via TLS handshake logging. Long-term: migrate to ECDHE.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "coding-challenges",
      children: "Coding Challenges"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AES-128 Implementation (Basic):"
        }), " Implement AES-128 encryption in Python or Java without using crypto libraries. Implement the S-box, ShiftRows, MixColumns, AddRoundKey, and key expansion. Test by verifying against a known test vector."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nUse NIST FIPS 197 test vector: plaintext = 0x3243f6a8885a308d313198a2e0370734, key = 0x2b7e151628aed2a6abf7158809cf4f3c, ciphertext = 0x3925841d02dc09fbdc118597196a0b32. Implement each step per spec and verify after the final round.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RSA Toy Implementation:"
        }), " Implement RSA key generation, encryption, and decryption with arbitrary-precision integers. Use p=61, q=53 as test case. Verify that encrypt-then-decrypt returns the original message."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nn = 3233, φ(n) = 3120. Choose e = 17, d = 2753. Encrypt: c = m^17 mod 3233. Decrypt: m = c^2753 mod 3233. Verify m === decrypt(encrypt(m)).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collision Finder:"
        }), " Write a program that searches for a SHA-256 collision on the first 24 bits (3 hex characters, ≈2¹² attempts). Use a hashmap to detect collisions. Report which pairs collide and how many attempts were needed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nUse a Map keyed by first 3 hex chars of SHA-256. Generate random inputs, compute hash, check for existing entry. When a collision is found, print both inputs and attempt count. Expected ~4096 attempts for 24-bit collision.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TLS Certificate Parser:"
        }), " Write a script using OpenSSL bindings that connects to a website, downloads its certificate chain, and prints: subject, issuer, validity period, public key algorithm, key size, and signature algorithm for each certificate in the chain."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nUse Node.js `crypto` or Python `ssl` module. Connect via TLS socket, retrieve certificate chain, iterate. Extract subject, issuer, validity, public key algorithm, and signature algorithm from each certificate using certificate parsing APIs.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HMAC Implementation:"
        }), " Implement HMAC-SHA256 according to RFC 2104. Test with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "key = \"key\""
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "message = \"The quick brown fox jumps over the lazy dog\""
        }), ". Verify your output against known test vectors."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nRFC 2104: HMAC(K,m) = H((K' ⊕ opad) || H((K' ⊕ ipad) || m)). K' = K padded to 64 bytes, ipad = 0x36, opad = 0x5c. Expected: f7bc83f430538424b13298e6aa6fb143ef4d59a14946175997479dbc2d1a3cd8.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "14",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constant-Time Comparison:"
        }), " Write a constant-time byte array comparison function. Demonstrate its timing behavior versus a naive comparison by measuring both on matching and non-matching inputs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nConstant-time: XOR all bytes together, check if result is 0. Always processes all bytes. Naive comparison exits early on first mismatch. Use `performance.now()` to measure timing differences — constant-time shows equal duration regardless of match position.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "research-questions",
      children: "Research Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "15",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Post-Quantum Migration Plan:"
        }), " Research the current state of NIST PQC standardization. Design a migration plan for a web application currently using RSA-2048 certificates and ECDHE key exchange. Consider: hybrid certificates, TLS library support, performance impact, and timeline."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nNIST has standardized CRYSTALS-Kyber (KEM) and CRYSTALS-Dilithium (signatures). Migration plan: 1) Inventory all certificates and TLS libraries. 2) Deploy hybrid certificates (X.509 with traditional + PQC keys). 3) Enable Kyber+ECDHE hybrid key exchange in TLS 1.3. 4) Monitor performance impact (~2-5x larger certificates, ~2x handshake CPU). Target: full hybrid deployment within 2 years.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRLite and CRLSets:"
        }), " Research how Firefox (CRLite) and Chrome (CRLSets) handle certificate revocation differently from traditional CRL/OCSP. What are the trade-offs in bandwidth, freshness, and privacy?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nCRLite uses a Bloom filter cascade distributed in Firefox updates — compact (~1MB), privacy-preserving, updated daily. CRLSets are push-lists of revoked serials (~250KB) in Chrome — low bandwidth, fast check, but not real-time. Both avoid the privacy leak of OCSP (CA learns which sites you visit) and the bandwidth of full CRLs.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "17",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Formal Verification of Crypto:"
        }), " Research projects that use formal methods to verify cryptographic implementations (e.g., EverCrypt, HACL*, AWS s2n-quic). How does formal verification differ from traditional testing? What classes of bugs does it catch?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nFormal verification uses mathematical proofs to show the implementation matches a specification (e.g., using F* or Coq). Unlike testing, it covers all possible inputs and states — proving absence of entire bug classes (buffer overflows, timing side-channels, incorrect state transitions). EverCrypt provides verified implementations of AES-GCM, Curve25519, SHA-3 with proofs of memory safety, functional correctness, and constant-time execution.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-example-1-aes-256-gcm-encryption-utility",
      children: "TypeScript Example #1: AES-256-GCM Encryption Utility"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * AesEncryption — AES-256-GCM encryption utility.\n * Uses Node.js native crypto module.\n * Provides encrypt/decrypt with PBKDF2 key derivation.\n */\n\nimport * as crypto from 'crypto';\n\ninterface EncryptionResult {\n  ciphertext: string;   // hex-encoded\n  iv: string;           // hex-encoded\n  tag: string;          // hex-encoded authentication tag\n  salt: string;         // hex-encoded PBKDF2 salt\n}\n\ninterface EncryptionInput {\n  plaintext: string;\n  password: string;\n  aad?: string;         // Additional authenticated data (optional)\n}\n\nclass AesEncryption {\n  private readonly algorithm = 'aes-256-gcm';\n  private readonly keyLength = 32;   // 256 bits\n  private readonly ivLength = 12;    // 96 bits (recommended for GCM)\n  private readonly tagLength = 16;   // 128 bits\n  private readonly saltLength = 32;  // 256 bits\n  private readonly pbkdf2Iterations = 600_000;\n  private readonly digest = 'sha512';\n\n  /**\n   * Derives a 256-bit key from a password using PBKDF2.\n   */\n  private deriveKey(password: string, salt: Buffer): Buffer {\n    return crypto.pbkdf2Sync(\n      password,\n      salt,\n      this.pbkdf2Iterations,\n      this.keyLength,\n      this.digest,\n    );\n  }\n\n  /**\n   * Encrypts plaintext using AES-256-GCM.\n   * Returns ciphertext, IV, authentication tag, and PBKDF2 salt — all hex-encoded.\n   */\n  encrypt(input: EncryptionInput): EncryptionResult {\n    const salt = crypto.randomBytes(this.saltLength);\n    const key = this.deriveKey(input.password, salt);\n    const iv = crypto.randomBytes(this.ivLength);\n\n    const cipher = crypto.createCipheriv(this.algorithm, key, iv, {\n      authTagLength: this.tagLength,\n    });\n\n    if (input.aad) {\n      cipher.setAAD(Buffer.from(input.aad, 'utf8'));\n    }\n\n    const ciphertextParts: Buffer[] = [];\n    ciphertextParts.push(cipher.update(Buffer.from(input.plaintext, 'utf8')));\n    ciphertextParts.push(cipher.final());\n\n    const ciphertext = Buffer.concat(ciphertextParts);\n    const tag = cipher.getAuthTag();\n\n    return {\n      ciphertext: ciphertext.toString('hex'),\n      iv: iv.toString('hex'),\n      tag: tag.toString('hex'),\n      salt: salt.toString('hex'),\n    };\n  }\n\n  /**\n   * Decrypts ciphertext that was encrypted with encrypt().\n   * Throws on authentication failure (tampered ciphertext or wrong key).\n   */\n  decrypt(\n    ciphertextHex: string,\n    password: string,\n    ivHex: string,\n    tagHex: string,\n    saltHex: string,\n    aad?: string,\n  ): string {\n    const ciphertext = Buffer.from(ciphertextHex, 'hex');\n    const iv = Buffer.from(ivHex, 'hex');\n    const tag = Buffer.from(tagHex, 'hex');\n    const salt = Buffer.from(saltHex, 'hex');\n\n    const key = this.deriveKey(password, salt);\n\n    const decipher = crypto.createDecipheriv(this.algorithm, key, iv, {\n      authTagLength: this.tagLength,\n    });\n    decipher.setAuthTag(tag);\n\n    if (aad) {\n      decipher.setAAD(Buffer.from(aad, 'utf8'));\n    }\n\n    const plaintextParts: Buffer[] = [];\n    plaintextParts.push(decipher.update(ciphertext));\n    plaintextParts.push(decipher.final()); // throws if tag verification fails\n\n    return Buffer.concat(plaintextParts).toString('utf8');\n  }\n\n  /**\n   * Convenience: generates a random 256-bit key for direct use (no PBKDF2).\n   */\n  static generateRandomKey(): string {\n    return crypto.randomBytes(32).toString('hex');\n  }\n}\n\n// Example usage\nasync function runAesExample(): Promise<void> {\n  const aes = new AesEncryption();\n  const secret = 'This is a top-secret message!';\n  const password = 'MyStrongP@ssw0rd!';\n  const aad = 'session-abc123';\n\n  console.log('=== AES-256-GCM Encryption Demo ===\\n');\n\n  // Encrypt\n  const encrypted = aes.encrypt({ plaintext: secret, password, aad });\n  console.log('Ciphertext (hex):', encrypted.ciphertext.substring(0, 48) + '...');\n  console.log('IV (hex):', encrypted.iv);\n  console.log('Tag (hex):', encrypted.tag);\n  console.log('Salt (hex):', encrypted.salt);\n\n  // Decrypt successfully\n  const decrypted = aes.decrypt(\n    encrypted.ciphertext,\n    password,\n    encrypted.iv,\n    encrypted.tag,\n    encrypted.salt,\n    aad,\n  );\n  console.log('\\nDecrypted:', decrypted);\n  console.log('Match:', secret === decrypted);\n\n  // Tamper test — verify GCM authentication catches modifications\n  try {\n    const tamperedCiphertext = encrypted.ciphertext.substring(0, encrypted.ciphertext.length - 2) + '00';\n    aes.decrypt(tamperedCiphertext, password, encrypted.iv, encrypted.tag, encrypted.salt, aad);\n    console.log('Tamper detection: FAILED');\n  } catch {\n    console.log('Tamper detection: PASSED (GCM authentication caught modification)');\n  }\n}\n\nrunAesExample().catch(console.error);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-example-2-rsa-digital-signature",
      children: "TypeScript Example #2: RSA Digital Signature"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * DigitalSignature — RSA-based digital signature utility.\n * Uses Node.js native crypto module.\n * Implements key generation, signing (RSASSA-PKCS1-v1_5 with SHA-256), and verification.\n */\n\nimport * as crypto from 'node:crypto';\n\ninterface KeyPair {\n  publicKey: string;   // PEM-encoded\n  privateKey: string;  // PEM-encoded\n}\n\nclass DigitalSignature {\n  private readonly modulusLength = 4096;\n  private readonly signatureAlgorithm = 'sha256WithRSAEncryption';\n  private readonly hashAlgorithm = 'sha256';\n\n  /**\n   * Generates an RSA-4096 key pair and returns PEM-encoded public and private keys.\n   */\n  generateKeyPair(): KeyPair {\n    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {\n      modulusLength: this.modulusLength,\n      publicKeyEncoding: {\n        type: 'spki',\n        format: 'pem',\n      },\n      privateKeyEncoding: {\n        type: 'pkcs8',\n        format: 'pem',\n      },\n    });\n\n    return { publicKey, privateKey };\n  }\n\n  /**\n   * Signs arbitrary data using the private key.\n   * Internally hashes the data with SHA-256 before signing.\n   * Returns the signature as a base64-encoded string.\n   */\n  sign(data: string, privateKeyPem: string): string {\n    const signer = crypto.createSign(this.signatureAlgorithm);\n    signer.update(data, 'utf8');\n    signer.end();\n\n    const signature = signer.sign(privateKeyPem);\n    return signature.toString('base64');\n  }\n\n  /**\n   * Verifies a signature against the original data and public key.\n   * Returns true if the signature is valid, false otherwise.\n   */\n  verify(data: string, signatureBase64: string, publicKeyPem: string): boolean {\n    const verifier = crypto.createVerify(this.signatureAlgorithm);\n    verifier.update(data, 'utf8');\n    verifier.end();\n\n    const signature = Buffer.from(signatureBase64, 'base64');\n    return verifier.verify(publicKeyPem, signature);\n  }\n\n  /**\n   * Signs a file's content by computing a hash and signing it.\n   * Useful for code signing and software distribution.\n   */\n  signFile(fileContent: Buffer, privateKeyPem: string): { hash: string; signature: string } {\n    const hash = crypto.createHash(this.hashAlgorithm).update(fileContent).digest('hex');\n    const signature = this.sign(hash, privateKeyPem);\n    return { hash, signature };\n  }\n\n  /**\n   * Verifies a file's signature against its content and the public key.\n   */\n  verifyFile(fileContent: Buffer, signatureBase64: string, publicKeyPem: string): boolean {\n    const hash = crypto.createHash(this.hashAlgorithm).update(fileContent).digest('hex');\n    return this.verify(hash, signatureBase64, publicKeyPem);\n  }\n}\n\n// Example usage\nfunction runSignatureDemo(): void {\n  const dsa = new DigitalSignature();\n\n  console.log('=== RSA Digital Signature Demo ===\\n');\n\n  // 1. Generate key pair\n  const keys = dsa.generateKeyPair();\n  console.log('Public key (first 64 chars):', keys.publicKey.substring(0, 64) + '...');\n  console.log('Private key (first 64 chars):', keys.privateKey.substring(0, 64) + '...\\n');\n\n  // 2. Sign a message\n  const message = 'This contract is legally binding. Agreed on 2026-07-07.';\n  const signature = dsa.sign(message, keys.privateKey);\n  console.log('Message:', message);\n  console.log('Signature (base64):', signature.substring(0, 64) + '...\\n');\n\n  // 3. Verify with correct key\n  const isValid = dsa.verify(message, signature, keys.publicKey);\n  console.log('Verification (correct key):', isValid ? '✅ PASSED' : '❌ FAILED');\n\n  // 4. Verify with tampered message\n  const tamperedMessage = 'This contract is legally binding. Agreed on 2025-01-01.';\n  const isTamperedValid = dsa.verify(tamperedMessage, signature, keys.publicKey);\n  console.log('Verification (tampered message):', isTamperedValid ? '❌ FAILED' : '✅ PASSED (tampering detected)');\n\n  // 5. Verify with wrong key\n  const wrongKeys = dsa.generateKeyPair();\n  const isWrongKeyValid = dsa.verify(message, signature, wrongKeys.publicKey);\n  console.log('Verification (wrong key):', isWrongKeyValid ? '❌ FAILED' : '✅ PASSED (wrong key rejected)');\n\n  // 6. File signing demo\n  const fileContent = Buffer.from('#!/usr/bin/env node\\nconsole.log(\"Hello, World!\");');\n  const fileSig = dsa.signFile(fileContent, keys.privateKey);\n  console.log('\\nFile hash:', fileSig.hash);\n\n  const fileValid = dsa.verifyFile(fileContent, fileSig.signature, keys.publicKey);\n  console.log('File signature valid:', fileValid);\n}\n\nrunSignatureDemo();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagrams",
      children: "Mermaid Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tls-13-handshake-sequence",
      children: "TLS 1.3 Handshake Sequence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following sequence diagram illustrates the TLS 1.3 full handshake, achieving a 1-RTT connection with forward secrecy via ephemeral Diffie-Hellman key exchange."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant C as Client\n    participant S as Server\n\n    C->>S: ClientHello (TLS 1.3, key_share, supported_groups, ciphers)\n    Note over C,S: Client sends its ephemeral key share + supported parameters\n\n    S->>C: ServerHello (selected ciphers, key_share)\n    S->>C: EncryptedExtensions\n    S->>C: Certificate (X.509 chain)\n    S->>C: CertificateVerify (signature over handshake transcript)\n    S->>C: Finished (HMAC over handshake)\n    Note over S,C: Server proves possession of private key\n\n    C->>S: Finished (HMAC over handshake)\n    Note over C,S: Client confirms handshake integrity\n\n    C->>S: Application Data (encrypted with handshake traffic secret)\n    S->>C: Application Data (encrypted with handshake traffic secret)\n    Note over C,S: 0-RTT possible if resuming session\n\n    rect rgb(200, 230, 201)\n        Note over C,S: 1-RTT Handshake Complete\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pki-certificate-chain",
      children: "PKI Certificate Chain"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This flowchart shows the X.509 certificate hierarchy from Root CA through Intermediate CAs to the end-entity server certificate, along with the validation checks performed during TLS certificate verification."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph CA_Hierarchy[\"Certificate Authority Hierarchy\"]\n        RCA[Root CA] --> ICA[Intermediate CA 1]\n        ICA --> ICA2[Intermediate CA 2]\n        ICA2 --> SC[Server Certificate]\n    end\n\n    subgraph Validation[\"Certificate Validation Flow\"]\n        direction LR\n        SC -->|Check issuer| ICA2\n        ICA2 -->|Check issuer| ICA\n        ICA -->|Check issuer| RCA\n        RCA -->|Self-signed trust anchor| Trust[Trusted Root Store]\n    end\n\n    subgraph Checks[\"Validation Checks\"]\n        Sig[Signature Verification] --> Exp[Expiry Check]\n        Exp --> Rev[Revocation Check]\n        Rev --> Domain[Domain Match]\n    end\n\n    SC -.->|subjectAltName| Domain\n    RCA -.->|built-in| Trust\n\n    style RCA fill:#fff9c4,stroke:#f57f17,color:#000\n    style ICA fill:#ffecb3,stroke:#ff8f00,color:#000\n    style ICA2 fill:#ffe082,stroke:#ff6f00,color:#000\n    style SC fill:#c8e6c9,stroke:#2e7d32,color:#000\n    style Trust fill:#e1f5fe,stroke:#0277bd,color:#000\n"
      })
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
            children: "Symmetric Encryption (AES-256-GCM, ChaCha20-Poly1305)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for bulk data encryption at rest and in transit — prefer GCM mode for authenticated encryption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Asymmetric Encryption (RSA-3072+, ECC P-256, X25519)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for key exchange and digital signatures — ECC provides equivalent security with smaller keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash Functions (SHA-256, SHA-3, BLAKE2b)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify file integrity, store password hashes (with salt), and create digital signatures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Digital Signatures & PKI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sign software releases with Ed25519 or RSA-PSS; validate certificate chains with OCSP stapling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TLS 1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use as the standard for all web traffic — provides 1-RTT handshake, forward secrecy, and removes legacy algorithms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store keys in HSM or KMS; rotate regularly; use envelope encryption for large data; never hardcode secrets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Post-Quantum Cryptography"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Begin hybrid migration (X25519Kyber768) for long-lived secrets — harvest-now-decrypt-later is a real threat"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Symmetric encryption"
        }), " (AES, ChaCha20) uses a single shared key for both encryption and decryption. It is fast and suitable for bulk data encryption. AES-256-GCM provides both confidentiality and authentication in a single mode."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Asymmetric encryption"
        }), " (RSA, ECC, Diffie-Hellman) uses a public-private key pair. It solves the key distribution problem but is computationally expensive. Typically used for key exchange and digital signatures in hybrid cryptosystems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash functions"
        }), " (SHA-256, SHA-3, BLAKE2) are one-way functions that produce fixed-size digests. They provide integrity verification and are fundamental to password storage, digital signatures, and blockchain. Essential properties: preimage resistance, second-preimage resistance, and collision resistance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HMAC"
        }), " (Hash-Based Message Authentication Code) combines a secret key with a hash function to provide both integrity and authenticity. It is widely used in API authentication (AWS SigV4) and JWT tokens."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Digital signatures"
        }), " provide non-repudiation by binding a signer's identity to a message. The signer uses their private key to sign, and anyone with the corresponding public key can verify. RSA-PSS and Ed25519 are the most common modern schemes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Public Key Infrastructure (PKI)"
        }), " establishes trust through a hierarchy of Certificate Authorities (CAs). X.509 certificates bind public keys to identities. Certificate chains enable trust delegation from root CAs to end-entity certificates, validated through signature verification, expiry checks, and revocation status."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TLS 1.3"
        }), " is the current standard for secure communication on the web. It achieves a 1-RTT handshake (or 0-RTT for resumed sessions), mandates forward secrecy via ephemeral Diffie-Hellman, and removes insecure legacy algorithms."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key management"
        }), " is the hardest part of cryptography. Best practices include: using hardware security modules (HSMs) for critical keys, rotating keys regularly, separating encryption keys from data, and deriving keys from passwords using KDFs (PBKDF2, Argon2id, HKDF)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Common cryptographic attacks"
        }), " include: padding oracle attacks (POODLE), length extension attacks (SHA-1/MD5), collision attacks (SHAttered), downgrade attacks (Logjam, FREAK), and side-channel attacks (timing, power analysis). Mitigation requires using modern algorithms with constant-time implementations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Post-quantum cryptography"
        }), " is preparing for the threat of quantum computers breaking RSA and ECC. NIST has standardized CRYSTALS-Kyber (KEM) and CRYSTALS-Dilithium (signatures). Hybrid schemes combining traditional and PQC algorithms are recommended for forward compatibility."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your understanding of cryptography concepts with these 10 multiple-choice questions."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "What is the primary advantage of asymmetric encryption over symmetric encryption?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It is faster for bulk data encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It solves the key distribution problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It requires less computational power"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It produces shorter ciphertexts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which AES mode provides both confidentiality and authentication (authenticated encryption)?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CBC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GCM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CTR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which property of a cryptographic hash function is exploited by a birthday attack?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preimage resistance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Second-preimage resistance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collision resistance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determinism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In TLS 1.3, what mechanism provides forward secrecy?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA key exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static Diffie-Hellman"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ephemeral Diffie-Hellman (ECDHE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-shared keys only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the purpose of a Certificate Authority (CA) in PKI?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To encrypt all web traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To issue and sign digital certificates that bind identities to public keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To generate symmetric keys for TLS sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To monitor network traffic for intrusions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which of the following is NOT a property required of a secure cryptographic hash function?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preimage resistance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Second-preimage resistance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversibility (given output, compute input)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collision resistance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the main vulnerability that the Heartbleed attack (CVE-2014-0160) exploited?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak cipher suites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer over-read in the TLS heartbeat extension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A mathematical weakness in RSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Padding oracle vulnerability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the difference between OCSP and OCSP stapling?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OCSP is faster than OCSP stapling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OCSP stapling has the server fetch and include the revocation status in the TLS handshake, reducing client load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OCSP requires a hardware security module"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OCSP stapling is only used for EV certificates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which padding scheme is the current recommended approach for RSA encryption to prevent padding oracle attacks?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS#1 v1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAEP (Optimal Asymmetric Encryption Padding)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero padding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSLv3 padding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the \"harvest now, decrypt later\" threat in the context of post-quantum cryptography?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attackers steal data after it is decrypted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attackers collect encrypted data today, intending to decrypt it when quantum computers become available"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attackers harvest cryptographic keys from garbage bins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attackers downgrade TLS to weaker cipher suites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next Chapter:"
        }), " Network Security → TCP/IP vulnerabilities, ARP spoofing, DoS/DDoS, Firewalls, IDS/IPS, VPNs, Wireless Security, DNS Security, Network Segmentation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Chapter 2: Cryptography → 2507 lines. Covers symmetric encryption (AES, ChaCha20, all modes), asymmetric encryption (RSA, DH, ECC, ECDH, ECDSA), hash functions (SHA-256/3, Blake2, MD5), HMAC, digital signatures, PKI (X.509, CA hierarchy, CRL, OCSP), TLS 1.3 handshake, SSH, PGP, practical openssl/gpg/Wireshark examples, case studies (Heartbleed, POODLE, SHAttered, Logjam), post-quantum cryptography, cryptography hardening checklist, common implementation mistakes, and interview preparation."
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