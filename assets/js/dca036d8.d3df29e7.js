"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[20396],{

/***/ 54245
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cyber_security_01_fundamentals_md_dca_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cyber-security-01-fundamentals-md-dca.json
const site_docs_courses_cyber_security_01_fundamentals_md_dca_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cyber-security/01-fundamentals","title":"Chapter 1: Security Fundamentals","description":"Prereq: None — this chapter introduces core security concepts.","source":"@site/docs/courses/cyber-security/01-fundamentals.md","sourceDirName":"courses/cyber-security","slug":"/cyber-security/01-fundamentals","permalink":"/ai-engineering-journey/cyber-security/01-fundamentals","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-fundamentals","slug":"/cyber-security/01-fundamentals","title":"Chapter 1: Security Fundamentals","sidebar_label":"Chapter 1: Security Fundamentals","sidebar_position":1},"sidebar":"coursesSidebar","previous":{"title":"CS 410: Comprehensive Cyber Security (Expanded Edition)","permalink":"/ai-engineering-journey/cyber-security"},"next":{"title":"Chapter 2: Cryptography","permalink":"/ai-engineering-journey/cyber-security/02-cryptography"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cyber-security/01-fundamentals.md


const frontMatter = {
	id: '01-fundamentals',
	slug: '/cyber-security/01-fundamentals',
	title: 'Chapter 1: Security Fundamentals',
	sidebar_label: 'Chapter 1: Security Fundamentals',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Security Fundamentals';

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
  "value": "1. CIA Triad — The Three Pillars of Security",
  "id": "1-cia-triad--the-three-pillars-of-security",
  "level": 2
}, {
  "value": "1.1 Real-World Analogy: The Bank Vault",
  "id": "11-real-world-analogy-the-bank-vault",
  "level": 3
}, {
  "value": "1.2 Confidentiality — Keeping Secrets",
  "id": "12-confidentiality--keeping-secrets",
  "level": 3
}, {
  "value": "1.3 Integrity — Trusting the Data",
  "id": "13-integrity--trusting-the-data",
  "level": 3
}, {
  "value": "1.4 Availability — Keeping the Lights On",
  "id": "14-availability--keeping-the-lights-on",
  "level": 3
}, {
  "value": "1.5 CIA Triad — Complexities &amp; Trade-offs",
  "id": "15-cia-triad--complexities--trade-offs",
  "level": 3
}, {
  "value": "CIA Triad — Advantages &amp; Disadvantages Summary",
  "id": "cia-triad--advantages--disadvantages-summary",
  "level": 3
}, {
  "value": "2. AAA Framework — Authentication, Authorization, Accounting",
  "id": "2-aaa-framework--authentication-authorization-accounting",
  "level": 2
}, {
  "value": "2.1 Real-World Analogy: Airport Security",
  "id": "21-real-world-analogy-airport-security",
  "level": 3
}, {
  "value": "2.2 Authentication — Proving Identity",
  "id": "22-authentication--proving-identity",
  "level": 3
}, {
  "value": "2.3 Authorization — Granting Access",
  "id": "23-authorization--granting-access",
  "level": 3
}, {
  "value": "2.4 Accounting — Keeping Records",
  "id": "24-accounting--keeping-records",
  "level": 3
}, {
  "value": "2.5 AAA Protocol Comparison",
  "id": "25-aaa-protocol-comparison",
  "level": 3
}, {
  "value": "3. Security Principles — The Foundation of Secure Design",
  "id": "3-security-principles--the-foundation-of-secure-design",
  "level": 2
}, {
  "value": "3.1 Principle 1: Least Privilege",
  "id": "31-principle-1-least-privilege",
  "level": 3
}, {
  "value": "3.2 Principle 2: Defense in Depth (Layered Security)",
  "id": "32-principle-2-defense-in-depth-layered-security",
  "level": 3
}, {
  "value": "3.3 Principle 3: Economy of Mechanism (Keep It Simple)",
  "id": "33-principle-3-economy-of-mechanism-keep-it-simple",
  "level": 3
}, {
  "value": "3.4 Principle 4: Fail-Safe Defaults",
  "id": "34-principle-4-fail-safe-defaults",
  "level": 3
}, {
  "value": "3.5 Principle 5: Complete Mediation",
  "id": "35-principle-5-complete-mediation",
  "level": 3
}, {
  "value": "3.6 Principle 6: Open Design (No Security Through Obscurity)",
  "id": "36-principle-6-open-design-no-security-through-obscurity",
  "level": 3
}, {
  "value": "3.7 Principle 7: Separation of Duties",
  "id": "37-principle-7-separation-of-duties",
  "level": 3
}, {
  "value": "Security Principles — Comparison Table",
  "id": "security-principles--comparison-table",
  "level": 3
}, {
  "value": "4. Threat Modeling Frameworks",
  "id": "4-threat-modeling-frameworks",
  "level": 2
}, {
  "value": "4.1 Real-World Analogy: Architectural Blueprint Review",
  "id": "41-real-world-analogy-architectural-blueprint-review",
  "level": 3
}, {
  "value": "4.2 STRIDE (Microsoft)",
  "id": "42-stride-microsoft",
  "level": 3
}, {
  "value": "4.3 PASTA (Process for Attack Simulation and Threat Analysis)",
  "id": "43-pasta-process-for-attack-simulation-and-threat-analysis",
  "level": 3
}, {
  "value": "4.4 LINDDUN → Privacy Threat Modeling",
  "id": "44-linddun--privacy-threat-modeling",
  "level": 3
}, {
  "value": "4.5 Attack Trees",
  "id": "45-attack-trees",
  "level": 3
}, {
  "value": "4.6 Threat Modeling Frameworks Comparison",
  "id": "46-threat-modeling-frameworks-comparison",
  "level": 3
}, {
  "value": "5. Risk Management",
  "id": "5-risk-management",
  "level": 2
}, {
  "value": "5.1 Real-World Analogy: Homeowners Insurance",
  "id": "51-real-world-analogy-homeowners-insurance",
  "level": 3
}, {
  "value": "5.2 Risk Management Terminology",
  "id": "52-risk-management-terminology",
  "level": 3
}, {
  "value": "5.3 Qualitative Risk Assessment",
  "id": "53-qualitative-risk-assessment",
  "level": 3
}, {
  "value": "5.4 Quantitative Risk Assessment",
  "id": "54-quantitative-risk-assessment",
  "level": 3
}, {
  "value": "5.5 NIST Risk Management Framework (RMF)",
  "id": "55-nist-risk-management-framework-rmf",
  "level": 3
}, {
  "value": "5.6 Risk Treatment Options",
  "id": "56-risk-treatment-options",
  "level": 3
}, {
  "value": "5.7 Risk Assessment Report Template",
  "id": "57-risk-assessment-report-template",
  "level": 3
}, {
  "value": "6. Security Policies",
  "id": "6-security-policies",
  "level": 2
}, {
  "value": "6.1 Policy Hierarchy",
  "id": "61-policy-hierarchy",
  "level": 3
}, {
  "value": "6.2 Common Security Policies",
  "id": "62-common-security-policies",
  "level": 3
}, {
  "value": "6.3 Policy Key Elements Template:",
  "id": "63-policy-key-elements-template",
  "level": 3
}, {
  "value": "6.4 Policy Lifecycle",
  "id": "64-policy-lifecycle",
  "level": 3
}, {
  "value": "7. Security vs Usability Trade-Off",
  "id": "7-security-vs-usability-trade-off",
  "level": 2
}, {
  "value": "7.1 The Fundamental Tension",
  "id": "71-the-fundamental-tension",
  "level": 3
}, {
  "value": "7.2 Real-World Examples",
  "id": "72-real-world-examples",
  "level": 3
}, {
  "value": "7.3 Achieving Balance → Strategies",
  "id": "73-achieving-balance--strategies",
  "level": 3
}, {
  "value": "7.4 The Cost of Poor Usability",
  "id": "74-the-cost-of-poor-usability",
  "level": 3
}, {
  "value": "8. Practical Examples → Hands-On Security Tools",
  "id": "8-practical-examples--hands-on-security-tools",
  "level": 2
}, {
  "value": "8.1 OSSEC / Wazuh Agent → Host Intrusion Detection",
  "id": "81-ossec--wazuh-agent--host-intrusion-detection",
  "level": 3
}, {
  "value": "8.2 Nmap → Network Scanning and Discovery",
  "id": "82-nmap--network-scanning-and-discovery",
  "level": 3
}, {
  "value": "8.3 Wireshark → Packet Capture and Protocol Analysis",
  "id": "83-wireshark--packet-capture-and-protocol-analysis",
  "level": 3
}, {
  "value": "8.4 John the Ripper and hashcat → Password Cracking",
  "id": "84-john-the-ripper-and-hashcat--password-cracking",
  "level": 3
}, {
  "value": "8.5 Lynis → System Security Auditing",
  "id": "85-lynis--system-security-auditing",
  "level": 3
}, {
  "value": "9. Case Studies → Real Breach Anatomy",
  "id": "9-case-studies--real-breach-anatomy",
  "level": 2
}, {
  "value": "9.1 Equifax 2017 → The $1.4 Billion Patch Failure",
  "id": "91-equifax-2017--the-14-billion-patch-failure",
  "level": 3
}, {
  "value": "9.2 Target 2013 → The HVAC Vendor That Cost $202M",
  "id": "92-target-2013--the-hvac-vendor-that-cost-202m",
  "level": 3
}, {
  "value": "9.3 Capital One 2019 → SSRF + IAM Misconfiguration = 106M Records",
  "id": "93-capital-one-2019--ssrf--iam-misconfiguration--106m-records",
  "level": 3
}, {
  "value": "Case Study Comparison Matrix",
  "id": "case-study-comparison-matrix",
  "level": 3
}, {
  "value": "10. Applications in Real Systems",
  "id": "10-applications-in-real-systems",
  "level": 2
}, {
  "value": "10.1 Banking and Financial Services",
  "id": "101-banking-and-financial-services",
  "level": 3
}, {
  "value": "10.2 Healthcare",
  "id": "102-healthcare",
  "level": 3
}, {
  "value": "10.3 Government and Defense",
  "id": "103-government-and-defense",
  "level": 3
}, {
  "value": "11. Interview Corner → 15+ Q&amp;A on Security Fundamentals",
  "id": "11-interview-corner--15-qa-on-security-fundamentals",
  "level": 2
}, {
  "value": "Q1: What is the CIA triad and why is it the foundation of information security?",
  "id": "q1-what-is-the-cia-triad-and-why-is-it-the-foundation-of-information-security",
  "level": 3
}, {
  "value": "Q2: Explain the difference between authentication and authorization.",
  "id": "q2-explain-the-difference-between-authentication-and-authorization",
  "level": 3
}, {
  "value": "Q3: What is the principle of least privilege and why is it important?",
  "id": "q3-what-is-the-principle-of-least-privilege-and-why-is-it-important",
  "level": 3
}, {
  "value": "Q4: How would you implement defense in depth for a web application?",
  "id": "q4-how-would-you-implement-defense-in-depth-for-a-web-application",
  "level": 3
}, {
  "value": "Q5: Walk me through a STRIDE threat model for an e-commerce checkout system.",
  "id": "q5-walk-me-through-a-stride-threat-model-for-an-e-commerce-checkout-system",
  "level": 3
}, {
  "value": "Q6: What&#39;s the difference between qualitative and quantitative risk assessment?",
  "id": "q6-whats-the-difference-between-qualitative-and-quantitative-risk-assessment",
  "level": 3
}, {
  "value": "Q7: Explain the concept of fail-safe defaults with a real example.",
  "id": "q7-explain-the-concept-of-fail-safe-defaults-with-a-real-example",
  "level": 3
}, {
  "value": "Q8: How would you handle the security vs usability trade-off in a corporate environment?",
  "id": "q8-how-would-you-handle-the-security-vs-usability-trade-off-in-a-corporate-environment",
  "level": 3
}, {
  "value": "Q9: What is the most important lesson from the Equifax breach?",
  "id": "q9-what-is-the-most-important-lesson-from-the-equifax-breach",
  "level": 3
}, {
  "value": "Q10: Describe the complete mediation principle.",
  "id": "q10-describe-the-complete-mediation-principle",
  "level": 3
}, {
  "value": "Q11: How does open design differ from security through obscurity?",
  "id": "q11-how-does-open-design-differ-from-security-through-obscurity",
  "level": 3
}, {
  "value": "Q12: Walk through the NIST Risk Management Framework steps.",
  "id": "q12-walk-through-the-nist-risk-management-framework-steps",
  "level": 3
}, {
  "value": "Q13: What&#39;s the difference between a vulnerability, a threat, and a risk?",
  "id": "q13-whats-the-difference-between-a-vulnerability-a-threat-and-a-risk",
  "level": 3
}, {
  "value": "Q14: How do you implement separation of duties in a DevSecOps pipeline?",
  "id": "q14-how-do-you-implement-separation-of-duties-in-a-devsecops-pipeline",
  "level": 3
}, {
  "value": "Q15: Compare STRIDE and PASTA threat modeling approaches. When would you use each?",
  "id": "q15-compare-stride-and-pasta-threat-modeling-approaches-when-would-you-use-each",
  "level": 3
}, {
  "value": "12. Summary",
  "id": "12-summary",
  "level": 2
}, {
  "value": "13. Exercises",
  "id": "13-exercises",
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
  "value": "Tool Practice",
  "id": "tool-practice",
  "level": 3
}, {
  "value": "14. Supplementary Depth → Extended Topics",
  "id": "14-supplementary-depth--extended-topics",
  "level": 2
}, {
  "value": "14.1 CIA Triad → Detailed Control Mapping",
  "id": "141-cia-triad--detailed-control-mapping",
  "level": 3
}, {
  "value": "14.2 CIA Attacks → Detailed Breakdown by Attack Type",
  "id": "142-cia-attacks--detailed-breakdown-by-attack-type",
  "level": 3
}, {
  "value": "14.3 AAA Protocols → Detailed Comparison",
  "id": "143-aaa-protocols--detailed-comparison",
  "level": 3
}, {
  "value": "14.4 Security Principles → Extended Edge Cases",
  "id": "144-security-principles--extended-edge-cases",
  "level": 3
}, {
  "value": "14.5 Security Design Patterns",
  "id": "145-security-design-patterns",
  "level": 3
}, {
  "value": "14.6 Security Standards and Regulations",
  "id": "146-security-standards-and-regulations",
  "level": 3
}, {
  "value": "14.7 NIST Cybersecurity Framework (CSF) 2.0",
  "id": "147-nist-cybersecurity-framework-csf-20",
  "level": 3
}, {
  "value": "14.8 Security Metrics and KPIs",
  "id": "148-security-metrics-and-kpis",
  "level": 3
}, {
  "value": "14.9 Threat Modeling → Attack Tree Security Controls Integration",
  "id": "149-threat-modeling--attack-tree-security-controls-integration",
  "level": 3
}, {
  "value": "14.10 Password Cracking → Defense Strategies",
  "id": "1410-password-cracking--defense-strategies",
  "level": 3
}, {
  "value": "14.11 Defense in Depth → Failure Mode Analysis",
  "id": "1411-defense-in-depth--failure-mode-analysis",
  "level": 3
}, {
  "value": "14.12 Risk Management → Advanced ROSI Calculation",
  "id": "1412-risk-management--advanced-rosi-calculation",
  "level": 3
}, {
  "value": "14.13 Qualitative Risk Assessment → Detailed Walkthrough",
  "id": "1413-qualitative-risk-assessment--detailed-walkthrough",
  "level": 3
}, {
  "value": "15. Additional Review Questions",
  "id": "15-additional-review-questions",
  "level": 2
}, {
  "value": "16. Quick Reference → Key Formulas and Acronyms",
  "id": "16-quick-reference--key-formulas-and-acronyms",
  "level": 2
}, {
  "value": "Chapter Summary Table",
  "id": "chapter-summary-table",
  "level": 2
}, {
  "value": "References and Further Reading",
  "id": "references-and-further-reading",
  "level": 2
}, {
  "value": "17. Security Tools Ecosystem → Extended Reference",
  "id": "17-security-tools-ecosystem--extended-reference",
  "level": 2
}, {
  "value": "17.1 Tool Classification by Security Domain",
  "id": "171-tool-classification-by-security-domain",
  "level": 3
}, {
  "value": "17.2 NMAP Scripting Engine (NSE) → Advanced Usage",
  "id": "172-nmap-scripting-engine-nse--advanced-usage",
  "level": 3
}, {
  "value": "17.3 Wireshark Display Filter Cheat Sheet",
  "id": "173-wireshark-display-filter-cheat-sheet",
  "level": 3
}, {
  "value": "17.4 Common Nmap Scan Patterns",
  "id": "174-common-nmap-scan-patterns",
  "level": 3
}, {
  "value": "17.5 John the Ripper → Modes Deep Dive",
  "id": "175-john-the-ripper--modes-deep-dive",
  "level": 3
}, {
  "value": "17.6 Hashcat Attack Modes",
  "id": "176-hashcat-attack-modes",
  "level": 3
}, {
  "value": "18. Extended Lab Exercises → Step-by-Step Walkthroughs",
  "id": "18-extended-lab-exercises--step-by-step-walkthroughs",
  "level": 2
}, {
  "value": "Lab 1: Build a Defense-in-Depth Home Lab",
  "id": "lab-1-build-a-defense-in-depth-home-lab",
  "level": 3
}, {
  "value": "Lab 2: Password Policy Enforcement → Crack Your Own Passwords",
  "id": "lab-2-password-policy-enforcement--crack-your-own-passwords",
  "level": 3
}, {
  "value": "Lab 3: Forensic Analysis with Wireshark → Detect Credential Theft",
  "id": "lab-3-forensic-analysis-with-wireshark--detect-credential-theft",
  "level": 3
}, {
  "value": "Lab 4: Risk Assessment → Small Business Case Study",
  "id": "lab-4-risk-assessment--small-business-case-study",
  "level": 3
}, {
  "value": "Lab 5: Complete Security Audit with Lynis → Remediation Walkthrough",
  "id": "lab-5-complete-security-audit-with-lynis--remediation-walkthrough",
  "level": 3
}, {
  "value": "19. Security Principles Cross-Reference Matrix",
  "id": "19-security-principles-cross-reference-matrix",
  "level": 2
}, {
  "value": "TypeScript Implementations",
  "id": "typescript-implementations",
  "level": 2
}, {
  "value": "TypeScript Example #1: Threat Model Analyzer (STRIDE)",
  "id": "typescript-example-1-threat-model-analyzer-stride",
  "level": 3
}, {
  "value": "TypeScript Example #2: Quantitative Risk Calculator",
  "id": "typescript-example-2-quantitative-risk-calculator",
  "level": 3
}, {
  "value": "7. Professional Security Lab Setup — Build Your Practice Environment",
  "id": "7-professional-security-lab-setup--build-your-practice-environment",
  "level": 2
}, {
  "value": "7.1 Lab Architecture Overview",
  "id": "71-lab-architecture-overview",
  "level": 3
}, {
  "value": "7.2 Hardware Recommendations",
  "id": "72-hardware-recommendations",
  "level": 3
}, {
  "value": "7.3 Virtualization Platform Setup",
  "id": "73-virtualization-platform-setup",
  "level": 3
}, {
  "value": "7.4 Essential Lab Software Stack",
  "id": "74-essential-lab-software-stack",
  "level": 3
}, {
  "value": "7.5 Lab Progression Path — Basic to Advanced",
  "id": "75-lab-progression-path--basic-to-advanced",
  "level": 3
}, {
  "value": "7.6 Lab Management Best Practices",
  "id": "76-lab-management-best-practices",
  "level": 3
}, {
  "value": "7.7 Sample Lab Project — First Day Setup Guide",
  "id": "77-sample-lab-project--first-day-setup-guide",
  "level": 3
}, {
  "value": "8.3 AI-Enhanced Attack (Red Team)",
  "id": "83-ai-enhanced-attack-red-team",
  "level": 3
}, {
  "value": "8.4 AI Security Operations Center (SOC) — The AI Analyst",
  "id": "84-ai-security-operations-center-soc--the-ai-analyst",
  "level": 3
}, {
  "value": "8.5 AI Security Challenges — Adversarial Machine Learning",
  "id": "85-ai-security-challenges--adversarial-machine-learning",
  "level": 3
}, {
  "value": "8.6 Building an AI Security System — End-to-End Example",
  "id": "86-building-an-ai-security-system--end-to-end-example",
  "level": 3
}, {
  "value": "8.7 Recommended AI Security Tools &amp; Learning Path",
  "id": "87-recommended-ai-security-tools--learning-path",
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
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions-1",
  "level": 3
}, {
  "value": "Practical Exercises",
  "id": "practical-exercises",
  "level": 3
}, {
  "value": "Application Problems",
  "id": "application-problems-1",
  "level": 3
}, {
  "value": "Challenge Problems",
  "id": "challenge-problems-1",
  "level": 3
}, {
  "value": "STRIDE Per-Element Mapping",
  "id": "stride-per-element-mapping",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    input: "input",
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
        id: "chapter-1-security-fundamentals",
        children: "Chapter 1: Security Fundamentals"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " None — this chapter introduces core security concepts.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 2 (Cryptography & TLS) — encryption and PKI build on the CIA triad.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Target Audience:"
        }), " Beginners to intermediate; SOC analysts, penetration testers, developers, system administrators."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the CIA triad and explain real-world attacks against each pillar."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the AAA framework with concrete protocols (RADIUS, TACACS+, Kerberos)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply seven core security principles with edge-case reasoning."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform structured threat modeling using STRIDE, PASTA, LINDDUN, and Attack Trees."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conduct qualitative and quantitative risk assessments using NIST RMF."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up OSSEC/Wazuh agents, run nmap scans, capture packets in Wireshark, crack passwords with John, and audit with Lynis."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze three major breaches (Equifax, Target, Capital One) with root-cause mapping."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Answer 15+ interview questions on security fundamentals with depth."
      }), "\n"]
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
        href: "../../assets/images/lessons/cyber-security/01-fundamentals/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/01-fundamentals/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cyber-security/01-fundamentals/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/01-fundamentals/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cyber-security/01-fundamentals/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/01-fundamentals/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CIA Triad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confidentiality, Integrity, Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The three pillars of all security"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authn, Authz, Accounting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Who, what, and when for access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security Principles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least Privilege, Defense in Depth, etc."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational design axioms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Threat Modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STRIDE, PASTA, LINDDUN, Attack Trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Systematic threat identification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Risk Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Qualitative, Quantitative, NIST RMF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prioritisation under uncertainty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Practical Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OSSEC, nmap, Wireshark, John, Lynis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hands-on security toolkit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Case Studies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equifax, Target, Capital One"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real breach anatomy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interview Corner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 Q&As"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Job-ready fundamentals"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-cia-triad--the-three-pillars-of-security",
      children: "1. CIA Triad — The Three Pillars of Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CIA triad is the foundational model for information security policy. Every security control ultimately serves one or more of these three goals."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-real-world-analogy-the-bank-vault",
      children: "1.1 Real-World Analogy: The Bank Vault"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bank vault"
      }), " in a secure facility:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "CIA Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bank Analogy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security Counterpart"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confidentiality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe-deposit box needs the customer's key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption + Access Control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tamper-evident seals on cash bundles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hashing + Digital Signatures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vault must be open during business hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundancy + DDoS Protection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A failure in any one dimension compromises the entire system. If the vault is always open (availability) but anyone can walk in (confidentiality), the bank fails. If the vault is impenetrable but never opens (no availability), the bank also fails."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-confidentiality--keeping-secrets",
      children: "1.2 Confidentiality — Keeping Secrets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Ensuring that information is accessible only to those authorized to see it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mechanisms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encryption at rest:"
        }), " AES-256 for stored data (database, disk, backups)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encryption in transit:"
        }), " TLS 1.3 for network communication."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Access Control Lists (ACLs):"
        }), " Filesystem and network-layer permissions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data masking:"
        }), " Dynamic substitution of sensitive fields (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "XXXX-XX-1234"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Steganography:"
        }), " Hiding data within other data (covert channels)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Attacks on Confidentiality:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eavesdropping / packet sniffing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Man-in-the-Middle (MITM)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQL injection exposing PII"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shoulder surfing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Side-channel attacks (Spectre, Meltdown, timing attacks)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Attack Walkthrough — Packet Sniffing:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Attacker gains access to the local network segment (e.g., public Wi-Fi).\n2. Attacker enables promiscuous mode on their NIC.\n3. Attacker runs Wireshark / tcpdump to capture unencrypted traffic.\n4. If the victim uses HTTP (not HTTPS), attacker reads cookies, session tokens, and form data in plaintext.\n5. Attacker replays captured session token to impersonate victim.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-integrity--trusting-the-data",
      children: "1.3 Integrity — Trusting the Data"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Safeguarding the accuracy and completeness of data and processing methods."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mechanisms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cryptographic hashing:"
        }), " SHA-256, SHA-3 — detect any bit-level modification."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Digital signatures:"
        }), " RSA / ECDSA — verify sender identity + data integrity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Checksums / CRCs:"
        }), " Lightweight integrity for network packets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version control / audit logs:"
        }), " Immutable records of who changed what and when."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database constraints:"
        }), " Foreign keys, unique constraints, triggers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Attacks on Integrity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Man-in-the-Middle altering packets in transit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQL injection modifying database values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log tampering / deletion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Time-of-check to Time-of-use (TOCTOU) race conditions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ransomware encrypting files (integrity+availability attack)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Attack Walkthrough — SQL Injection Data Modification:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Attacker identifies a vulnerable login form that interpolates input directly into SQL.\n2. Input: `' OR '1'='1' ; UPDATE accounts SET balance = 9999999 WHERE username = 'attacker' --`\n3. The database executes both the login bypass and the balance modification.\n4. Integrity of the financial record is destroyed.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-availability--keeping-the-lights-on",
      children: "1.4 Availability — Keeping the Lights On"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Ensuring timely and reliable access to information and systems by authorized users."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mechanisms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Redundancy:"
        }), " Active-active or active-passive server clusters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Load balancing:"
        }), " Distributing traffic across multiple nodes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Failover:"
        }), " Automatic switch to standby systems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DDoS protection:"
        }), " Rate limiting, scrubbing centers, CDNs (Cloudflare, AWS Shield)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup & disaster recovery:"
        }), " 3-2-1 backup rule (3 copies, 2 media types, 1 offsite)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Patch management:"
        }), " Closing vulnerabilities before they can be exploited for disruption."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Attacks on Availability:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distributed Denial of Service (DDoS) — SYN flood, HTTP flood, DNS amplification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ransomware encrypting critical data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Physical destruction (fire, flood, power outage)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insider sabotage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DNS hijacking redirecting traffic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Attack Walkthrough — SYN Flood:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Attacker sends a flood of TCP SYN packets with spoofed source IPs.\n2. Server allocates memory for each half-open connection (backlog queue).\n3. Server sends SYN-ACK to the spoofed IP (which never responds).\n4. Backlog queue fills up; legitimate SYN packets are dropped.\n5. Result: legitimate users cannot establish new connections (denial of service).\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-cia-triad--complexities--trade-offs",
      children: "1.5 CIA Triad — Complexities & Trade-offs"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Confidentiality"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Integrity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypt database = slower reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Slower queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use hardware acceleration (AES-NI)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full data backups = high storage cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Fast restore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tier backups (daily incremental + weekly full)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Air-gapped system = very secure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No remote access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use a CDP / data diode for controlled egress"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Too many authentication factors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ User lockout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement risk-based (adaptive) auth"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cia-triad--advantages--disadvantages-summary",
      children: "CIA Triad — Advantages & Disadvantages Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Confidentiality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents data breaches; regulatory compliance (GDPR, HIPAA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption adds latency; key management complexity; can hinder forensics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integrity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detects tampering; enables non-repudiation; data quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hashing adds overhead; false positives in change detection; rollback complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Availability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensures business continuity; customer trust"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High cost of redundancy; complex failover testing; DDoS mitigation is expensive"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-aaa-framework--authentication-authorization-accounting",
      children: "2. AAA Framework — Authentication, Authorization, Accounting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-real-world-analogy-airport-security",
      children: "2.1 Real-World Analogy: Airport Security"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "AAA Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Airport Equivalent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authentication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Show passport + boarding pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Are you who you say you are?\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authorization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gate agent checks destination on ticket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Are you allowed to board this flight?\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Accounting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flight manifest + departure logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"What did you do? Where did you go?\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-authentication--proving-identity",
      children: "2.2 Authentication — Proving Identity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Three Authentication Factors:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strength"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Something you know"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password, PIN, security question"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak — phishable, guessable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Something you have"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smartphone (TOTP), YubiKey, smart card"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium — can be stolen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Something you are"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fingerprint, retina scan, voice, face"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong — hard to replicate (biometric)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Authentication Protocols:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RADIUS (Remote Authentication Dial-In User Service):"
        }), " UDP-based, port 1812 (auth) / 1813 (accounting). Common for VPN, Wi-Fi (802.1X), network devices. Sends password in cleartext (mitigated with EAP-MSCHAPv2, EAP-TLS)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TACACS+ (Terminal Access Controller Access-Control System Plus):"
        }), " Cisco proprietary, TCP-based, port 49. Encrypts entire packet body. Separates auth, authorization, and accounting into different phases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kerberos:"
        }), " Symmetric-key based, default in Active Directory. Uses Ticket Granting Ticket (TGT) + service tickets. Time-sensitive (max 10 min clock skew)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kerberos Authentication Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: User sends AS-REQ to Authentication Server (AS) with user ID.\nStep 2: AS replies AS-REP containing TGT (Ticket Granting Ticket) encrypted with user's password hash.\nStep 3: User decrypts TGT, now has temp credentials.\nStep 4: User sends TGS-REQ to Ticket Granting Server (TGS) with TGT + target service SPN.\nStep 5: TGS replies TGS-REP with service ticket encrypted with service's secret key.\nStep 6: User sends AP-REQ to target service with service ticket.\nStep 7: Service decrypts and grants access — mutual authentication complete.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-authorization--granting-access",
      children: "2.3 Authorization — Granting Access"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Authorization Models:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "DAC (Discretionary ACL)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Owner controls permissions on their objects"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Linux file permissions (", (0,jsx_runtime.jsx)(_components.code, {
              children: "chmod"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MAC (Mandatory ACL)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System-wide policy overrides owner decisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELinux, Bell-LaPadula"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RBAC (Role-Based)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permissions assigned to roles, users to roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS IAM roles, Active Directory groups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ABAC (Attribute-Based)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rules evaluate user+resource+environment attributes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AWS IAM policies with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aws:SourceIp"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aws:CurrentTime"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PBAC (Policy-Based)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External policy engine (e.g., OPA / Cedar)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Verified Access, Google Zanzibar"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Authorization Decision Matrix:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input:  Subject, Action, Resource, Environment\nOutput: Permit / Deny (with reason)\n\nIf Subject.Role == \"Admin\" AND Action == \"DELETE\" AND Resource.Type == \"User\" THEN\n    Permit if Resource != Subject (prevent self-deletion)\nElse If Subject.Role == \"Auditor\" AND Action == \"READ\" AND Resource.Sensitivity == \"HIGH\" THEN\n    Permit if Environment.Time within BusinessHours\nElse\n    Deny by default (fail-safe)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-accounting--keeping-records",
      children: "2.4 Accounting — Keeping Records"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Data Collected:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User/process identifier"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Login/logout timestamps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resources accessed and actions performed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data volume transferred"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Failed attempts (authentication, authorization)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Privilege changes (escalation, de-escalation)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Accounting Protocols:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RADIUS Accounting:"
        }), " Interim-Update packets every N seconds (configurable)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Syslog / SIEM:"
        }), " Centralized log aggregation (Splunk, ELK, Sentinel)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Windows Event Logs:"
        }), " Security log (IDs 4624=logon, 4625=failed logon, 4648=explicit credentials)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linux auditd:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ausearch"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aureport"
        }), " for comprehensive system call accounting."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-aaa-protocol-comparison",
      children: "2.5 AAA Protocol Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RADIUS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TACACS+"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kerberos"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP (default), TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP (primary), TCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only password (Access-Request)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full packet body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full session"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auth + Authz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accounting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not native"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISP, Wi-Fi, VPN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network device admin (Cisco)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise AD / SSO"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1812/1813"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "88"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-security-principles--the-foundation-of-secure-design",
      children: "3. Security Principles — The Foundation of Secure Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Seven timeless principles from Saltzer & Schroeder's 1975 paper \"The Protection of Information in Computer Systems,\" augmented with modern additions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-principle-1-least-privilege",
      children: "3.1 Principle 1: Least Privilege"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Every entity (user, process, service) should operate with the minimum set of permissions necessary to perform its function."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Airport employee badge"
      }), " — the janitor gets access to the public areas and corridors, not the cockpit or baggage handling control room."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm — Principle of Least Privilege:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. IDENTIFY the entity's task(s).\n2. DECOMPOSE each task into atomic operations.\n3. MAP each operation to resource + action pairs.\n4. ASSIGN permissions covering only those pairs.\n5. DENY everything else by default (implicit deny).\n6. REVIEW quarterly to revoke stale permissions.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Web Application:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Entity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resources Needed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Permissions Granted"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Denied"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serve HTTP, read config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port 80/443, nginx.conf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bind to ports, read-only /etc/nginx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/etc/shadow, database, SSH keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "App server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process requests, query DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application code, DB port 3306"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execute app directory, TCP to DB:3306"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet access, filesystem write outside /tmp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store/retrieve records"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data directory, port 3306"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read/write data files, listen on DB port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shell access, outbound network"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Violation Example — Target 2013:"
      }), " HVAC vendor had network access reaching the POS system. The vendor's badge was too permissive — see Case Study 2."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-principle-2-defense-in-depth-layered-security",
      children: "3.2 Principle 2: Defense in Depth (Layered Security)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Multiple layers of security controls ensure that if one layer fails, the next layer contains the threat."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Castle defense"
      }), " — moat → outer wall → inner wall → keep → dungeon. An attacker must breach every layer before reaching the throne."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm — Defense in Depth:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. MAP the attack surface (all entry points into the system).\n2. For EACH entry point, identify the primary security control.\n3. For EACH primary control, identify what happens when it fails.\n4. ADD a secondary (and tertiary) control that catches the failure.\n5. ENSURE controls are independent (different vendors, different failure modes).\n6. TEST each layer independently and the chain as a whole.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Defense in Depth Layers (Web Application):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LAYER 1 — Firewall (network):   Block all ports except 80, 443, SSH from management IPs.\nLAYER 2 — WAF (web app firewall):  Detect and block SQLi, XSS, CSRF patterns.\nLAYER 3 — Rate Limiting:         1000 req/min per IP — mitigate brute force and DDoS.\nLAYER 4 — Authentication:        Multi-factor (password + TOTP) with lockout after 5 failures.\nLAYER 5 — Authorization:         RBAC with ABAC override for high-risk actions.\nLAYER 6 — Input Validation:      Server-side validation + prepared statements.\nLAYER 7 — Encryption:            TLS 1.3 in transit, AES-256-GCM at rest.\nLAYER 8 — Logging & Monitoring:  Centralized SIEM, real-time alerting (failed logins > baseline).\nLAYER 9 — Backup & DR:           Point-in-time recovery, 3-2-1 backup rule.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-principle-3-economy-of-mechanism-keep-it-simple",
      children: "3.3 Principle 3: Economy of Mechanism (Keep It Simple)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Security mechanisms should be as simple as possible. Complexity hides vulnerabilities."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: A single deadbolt lock"
      }), " is more reliable than a 12-gear combination lock that jams when dust enters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Good vs Bad Examples:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Simple (Economy)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complex (Violation)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if user in admin_group: allow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested RBAC with 18 role hierarchies, 3 inheritance chains, and 6 override rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS 1.3 with one cipher suite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom XOR + base64 \"encryption\" built in-house"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password + TOTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7-step multi-org federated SSO with 4 IdP hops and custom SAML extensions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deny all; allow port 80,443"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "600 rules with overlapping subnets, port ranges, and time-based exceptions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-principle-4-fail-safe-defaults",
      children: "3.4 Principle 4: Fail-Safe Defaults"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " When a system fails, it should default to a secure state (deny access) rather than an insecure state (allow access)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: A locked door"
      }), " that remains locked when the power fails (fails secure) vs a magnetic lock that opens on power loss (fails unsafe for security, but usable for fire exit)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Rules:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. All ACLs should terminate with an explicit \"deny all.\"\n2. All try/catch blocks should re-throw or escalate, never silently return success.\n3. All authentication failures should produce the same error message (\"Invalid credentials\" — not \"password wrong\" vs \"user not found\").\n4. All defaults should be the most restrictive option: disabled features, blocked ports, no remote access.\n5. All configuration errors should prevent the application from starting.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fail-Safe Decision Matrix:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fail-Safe (Secure)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fail-Open (Insecure)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Correct Choice"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall power loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drops all traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passes all traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail-safe (security)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auth server unreachable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deny all logins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow all logins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail-safe (security)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fire door mechanism fails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stays closed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opens automatically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail-open (life safety)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database connection lost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Show error page"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Show cached (potentially stale) data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail-safe (integrity)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-principle-5-complete-mediation",
      children: "3.5 Principle 5: Complete Mediation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Every access to every object must be checked for authority — not just the first time, but every single time."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: A security guard"
      }), " at a building entrance who checks every person's badge every time they enter, not just the first time they arrive in the morning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Violation Example — TOCTOU (Time of Check, Time of Use):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VULNERABLE:\n1. User requests file access.\n2. System checks permissions → OK.\n3. User replaces file with a symlink to /etc/passwd (between check and use).\n4. System opens file → reads /etc/passwd.\n\nSECURE:\n1. User provides file descriptor (open syscall).\n2. System checks permissions on the open operation atomically.\n3. Permission check and file access are the same operation — no gap.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-principle-6-open-design-no-security-through-obscurity",
      children: "3.6 Principle 6: Open Design (No Security Through Obscurity)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " The security of a mechanism should not depend on the secrecy of its design or implementation. Secrets are keys and passwords, not algorithms."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: A lock"
      }), " works because of the key, not because the lock mechanism is hidden. If everyone knows how a pin tumbler lock works, it still requires the correct key to open."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Contrast:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Verdict"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES (published, peer-reviewed, standardized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Secure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security through obscurity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom \"encryption\" algorithm kept secret, broken when leaked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Insecure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open protocol + secret keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS with ephemeral key exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Secure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hidden database port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Listening on port 65432 instead of 5432"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Obscurity — nmap finds it"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "37-principle-7-separation-of-duties",
      children: "3.7 Principle 7: Separation of Duties"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " No single entity should have complete control over a critical process. Split critical operations across multiple parties."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: A bank"
      }), " requires two signatures on checks over $10,000. One employee cannot unilaterally move large sums."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples in Security:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Single Entity (Violation)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Separated (Compliant)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Developer writes code, tests, and deploys to production"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Developer writes → QA tests → DevOps/SRE deploys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Financial transaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One person initiates and approves payments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clerk initiates → Manager approves"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Root password"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One person knows the root password"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Half-password split or break-glass with audit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Crypto key management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One person generates, stores, and uses the key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key custodian (store) ≠ key operator (use) ≠ key auditor (log review)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "security-principles--comparison-table",
      children: "Security Principles — Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Principle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Focus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Obvious When Missing"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Least Privilege"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimise permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"What's the minimum this needs?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overprivileged service accounts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Defense in Depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple independent layers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"What happens when this control fails?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single firewall, no monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Economy of Mechanism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplicity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Can this be simpler?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom crypto, 600 firewall rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fail-Safe Defaults"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"What does this default to?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Door unlocks on power loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Mediation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every-access check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Is every access validated?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOCTOU vulnerabilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transparent mechanisms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Does this work if the design is public?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proprietary \"security\" algorithms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Separation of Duties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed trust"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Does anyone have too much power?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Developer deploys to prod"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-threat-modeling-frameworks",
      children: "4. Threat Modeling Frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Threat modeling is a structured approach to identifying, enumerating, and prioritizing threats to a system. It shifts security left → finding issues in design rather than in production."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-real-world-analogy-architectural-blueprint-review",
      children: "4.1 Real-World Analogy: Architectural Blueprint Review"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before building a house, an architect reviews the blueprints for structural weaknesses. A threat model is the security equivalent → reviewing system architecture diagrams for security weaknesses before writing code."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-stride-microsoft",
      children: "4.2 STRIDE (Microsoft)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Developed by Microsoft in 1999. Six threat categories mapped to security properties."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "STRIDE Threat Categories:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security Property Violated"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "S"
            }), "poofing"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impersonating a user, process, or system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fake login page stealing credentials"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "T"
            }), "ampering"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthorized modification of data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL injection modifying account balance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "R"
            }), "epudiation"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-repudiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Denying an action without evidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User claims \"I didn't place that order\" without audit log"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "I"
            }), "nformation Disclosure"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confidentiality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exposing data to unauthorized parties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3 bucket without ACL exposing customer PII"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            }), "enial of Service"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disrupting legitimate access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN flood overwhelming the web server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "E"
            }), "levation of Privilege"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gaining higher permissions than granted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer overflow giving root shell"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "STRIDE Analysis Algorithm:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. DECOMPOSE the system into components (DFD: processes, data stores, data flows, external entities, trust boundaries).\n2. For EACH element in the DFD, ask: \"Is this element vulnerable to Spoofing? Tampering? ... Elevation of Privilege?\"\n3. DOCUMENT each identified threat with: element, threat type, impact, likelihood.\n4. PRIORITIZE using DREAD (or CVSS) scoring.\n5. PRESCRIBE mitigation for each threat (redesign, add control, accept, transfer).\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "STRIDE Per-Element Mapping:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "DFD Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "I"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "E"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "External Entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → STRIDE Analysis of a Banking Web App:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Threat"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Login form"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker sends stolen credentials via credential stuffing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spoofing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account takeover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MFA + rate limiting + CAPTCHA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker intercepts and modifies transfer amount in transit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tampering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS + HMAC on payload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Audit log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Admin user performs action then deletes log entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repudiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No forensic evidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable append-only log (write-once media)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Session cookie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker reads session cookie from HTTP traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Info Disclosure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session hijacking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure + HttpOnly + SameSite cookies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search endpoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker floods with recursive queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DoS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application unresponsive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query depth limit, timeout, rate limit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Password reset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker gains admin access via weak token generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elevation of Privilege"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full compromise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cryptographically random tokens, expiry, single-use"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-pasta-process-for-attack-simulation-and-threat-analysis",
      children: "4.3 PASTA (Process for Attack Simulation and Threat Analysis)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Created by Tony UcedaVélez (VerSprite). Seven-stage risk-centric methodology. Unlike STRIDE which categorizes threats bottom-up, PASTA starts with business objectives and works down."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PASTA Stages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Activity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define Objectives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify business goals, compliance requirements, risk appetite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business impact analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define Technical Scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enumerate assets, endpoints, APIs, data flows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Technical scope diagram"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application Decomposition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map trust boundaries, entry points, data classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application walkthrough"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threat Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify threat agents, attack scenarios, TTPs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threat library / ATT&CK mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weakness & Vulnerability Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correlate threats to known weaknesses (CWE, CVE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attack Modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simulate attack paths, compute exploitability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attack tree + attack surface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk & Impact Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantify residual risk, recommend mitigations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk treatment report"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PASTA Stage 1 → Define Objectives (Dry Run for E-Commerce App):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Business Objective: Process 100,000 orders per day with < 0.01% fraud rate.\nCompliance:          PCI DSS Level 1, GDPR for EU customers.\nRisk Appetite:       Low for financial breach, medium for availability downtime (< 4 hours).\nKey Assets:         Credit card data, customer PII, order history, inventory database.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PASTA Stage 4 → Threat Analysis (Threat Agent Enumeration):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Threat Agent Profile: External Cybercriminal\n  → Skill Level: Advanced\n  → Motivation: Financial gain\n  → Target: Credit card data (PCI scope)\n  → TTPs: SQL injection, credential stuffing, Magecart (client-side skimmer)\n  → Detection Difficulty: Hard (uses encrypted C2, valid credentials after exfiltration)\n\nThreat Agent Profile: Insider (Disgruntled Employee)\n  → Skill Level: Moderate\n  → Motivation: Revenge, data sale\n  → Target: Customer PII, intellectual property\n  → TTPs: Legitimate credentials, after-hours access, large data downloads\n  → Detection Difficulty: Medium (looks like normal traffic)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PASTA vs STRIDE:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "STRIDE"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PASTA"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threat-centric (bottom-up)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk-centric (top-down)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (categorization)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 (full lifecycle)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threat list by category"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk-scored attack scenarios"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Effort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (hours)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (weeks)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Early design phase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex application security programs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Business alignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (starts with business objectives)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-linddun--privacy-threat-modeling",
      children: "4.4 LINDDUN → Privacy Threat Modeling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LINDDUN focuses specifically on privacy threats → an evolution of STRIDE for the privacy domain. Developed by DistriNet Research Group, KU Leuven."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Seven Privacy Threat Categories:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Letter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Threat"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Privacy Principle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "L"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linkability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlinkability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tracking user across sessions via persistent cookie"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "I"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifiability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anonymity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browser fingerprinting identifying user without login"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-repudiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plausible deniability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log that proves user visited a sensitive website"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detectability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undetectability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ability to detect whether a user is in a database"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disclosure of Information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confidentiality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaking user's medical condition via URL parameter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "U"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unawareness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User consent/control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data collected without user's knowledge or consent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Violating GDPR right to erasure or data portability"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "LINDDUN Analysis Steps:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. CREATE a Data Flow Diagram (DFD) of the system.\n2. IDENTIFY privacy-relevant data stores, flows, and processes.\n3. For EACH element, map to the applicable LINDDUN threat categories.\n4. DOCUMENT privacy threats with: data element, threat type, privacy principle violated, severity.\n5. PRESCRIBE privacy-enhancing technologies (PETs): anonymization, differential privacy, k-anonymity, data minimization.\n6. VERIFY compliance with applicable regulations (GDPR, CCPA, HIPAA).\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "LINDDUN Dry Run → Healthcare Appointment App:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Data Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DFD Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LINDDUN Threat"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Patient email + appointment time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Flow (browser to server)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linkability → attacker correlates email with health condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use anonymous session tokens, not patient identifiers, in URL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search history for specialists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Store (search log)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifiability → search queries reveal health issues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anonymize logs after 24 hours; differential privacy on analytics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Doctor name visited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Store (appointment records)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-repudiation → patient cannot deny visiting a specialist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow patients to delete their visit history (right to erasure)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prescription details in notifications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Flow (server to push notification)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disclosure → notification preview seen by others on lock screen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable notification previews for health data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insurance group ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Flow (API call)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unawareness → patient doesn't know insurance is tracked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear consent form + privacy notice before data collection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data retention policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-compliance → retains data beyond GDPR limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-delete records after legal retention period"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-attack-trees",
      children: "4.5 Attack Trees"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Introduced by Bruce Schneier in 1999. Hierarchical representation of attack goals and sub-goals using AND/OR logic."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Root node: Attacker's ultimate goal\n    +-- AND / OR children: Sub-goals required to achieve the root\n        +-- Leaf nodes: Concrete attack actions (measurable)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Tree → Database Exfiltration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Goal: [Exfiltrate Customer Database]\n+-- OR\n    +-- AND [Exploit Application Vulnerability]\n    |   +-- [SQL Injection on /api/users]\n    |   +-- [Bypass WAF (Web Application Firewall)]\n    +-- AND [Steal Database Credentials]\n    |   +-- [SSH into App Server]\n    |   +-- [Read db connection string from config file]\n    +-- AND [Phish DBA Credentials]\n    |   +-- [Craft targeted email to DBA]\n    |   +-- [Harvest credentials from fake login page]\n    +-- AND [Physical Access]\n        +-- [Break into data center]\n        +-- [Clone unencrypted backup tape]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Tree → Quantified Version:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Leaf Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Skill Required"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Probability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detectable?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQL injection on /api/users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (payload blends with normal traffic)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bypass WAF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (WAF logs show bypass attempts)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSH brute force"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (failed SSH logs trigger alert)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read config file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (file access audit logs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phish DBA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (user falls for it, no technical alert)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Physical access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High (badge logs, cameras, guards)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AND/OR Probability Propagation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AND node (SQLi path): P = 0.3 x 0.2 = 0.06 (6% chance)\nAND node (Cred path): P = 0.1 x 0.8 = 0.08 (8% chance)\nAND node (Phish path): P = 0.15 (single leaf, no AND join) = 0.15 (15% chance)\nOR node (Root): P = max(0.06, 0.08, 0.15, 0.01) = 0.15 (15%)\n\nMitigation priority: Phishing awareness > credential protection > SQLi prevention\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-threat-modeling-frameworks-comparison",
      children: "4.6 Threat Modeling Frameworks Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "STRIDE"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PASTA"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LINDDUN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Attack Trees"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Primary Focus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security threats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk-driven analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy threats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attack paths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Created By"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft (1999)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VerSprite (2015)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DistriNet (2014)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bruce Schneier (1999)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maturity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium-High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Effort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Phase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full SDLC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design (privacy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threat list by category"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk-scored attack scenarios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy threat catalog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visual attack paths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantified Risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional (DREAD)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (CVSS + business impact)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Qualitative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (probability, cost)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Business Alignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Suitable For"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex enterprise apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy-sensitive systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any system"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Team Skill Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beginner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beginner"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-risk-management",
      children: "5. Risk Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-real-world-analogy-homeowners-insurance",
      children: "5.1 Real-World Analogy: Homeowners Insurance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You assess what could damage your house (fire, flood, theft), estimate the probability and cost, then decide: buy insurance (transfer), install a fire alarm (mitigate), accept the risk of small thefts (accept), or move to a safer neighborhood (avoid)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-risk-management-terminology",
      children: "5.2 Risk Management Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Asset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Something of value requiring protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer database, server hardware, brand reputation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Threat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Potential cause of an unwanted incident"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hacker, insider threat, fire, earthquake, power outage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Vulnerability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weakness that can be exploited by a threat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unpatched software, weak password, open S3 bucket"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Risk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Likelihood x Impact of a threat exploiting a vulnerability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"High risk: critical CVE in public-facing Apache server\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Control / Safeguard"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure that modifies risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall, encryption, MFA, patch management, insurance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Residual Risk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remaining risk after controls are applied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk that exists even with all controls in place"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Risk Equation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Risk = Threat x Vulnerability x Impact\n\nOr more practically:\nRisk = (Probability of Threat) x (Probability Vulnerability is Exploitable) x (Impact if Exploited)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-qualitative-risk-assessment",
      children: "5.3 Qualitative Risk Assessment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uses descriptive scales (Low, Medium, High) rather than monetary values. Best when precise data is unavailable."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Likelihood Scale:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rating"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Frequency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very Low (1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practically impossible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less than once per 10 years"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low (2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlikely but possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Once per 1-5 years"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Could reasonably happen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Once per 6-12 months"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High (4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Likely to happen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Once per 1-6 months"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very High (5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Almost certain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weekly or more"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact Scale:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rating"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very Low (1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negligible effect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single non-sensitive public record exposed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low (2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minor disruption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brief service degradation (< 1 hour)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate damage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer data exposed, regulatory fine < $100K"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High (4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Major damage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Widespread breach, significant fines, media coverage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very High (5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catastrophic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business failure, regulatory action, loss of life"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Risk Matrix (5x5):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "              IMPACT\n              1     2     3     4     5\n              VL    L     M     H     VH\nLIKELIHOOD  ┌─────────────────────────────┐\n5 (VH)      │  M    H     H     C     C   │\n4 (H)       │  L    M     H     H     C   │\n3 (M)       │  L    M     M     H     H   │\n2 (L)       │ VL    L     M     M     H   │\n1 (VL)      │ VL    VL    L     L     M   │\n            └─────────────────────────────┘\n\nVL = Very Low (1-2)    L = Low (3-5)    M = Medium (6-10)\nH = High (12-16)       C = Critical (16-25)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-quantitative-risk-assessment",
      children: "5.4 Quantitative Risk Assessment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uses monetary values, statistical probabilities, and actuarial math."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Formulas:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset Value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replacement cost + data value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$2,000,000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exposure Factor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "% of asset lost per incident"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.4 (40%)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV x EF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single Loss Expectancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$800,000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Annual Rate of Occurrence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expected frequency per year"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.2 (once per 5 years)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SLE x ARO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Annual Loss Expectancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$160,000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROSI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(ALE_old - ALE_new) - Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return on Security Investment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$114,000"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quantitative Risk Assessment → Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Scenario: Ransomware attack on hospital patient records\n\nAV (Asset Value):          $2,000,000 (servers, backups, data valuation)\nEF (Exposure Factor):      0.4 (40% of records encrypted before detection)\nSLE:                       $2,000,000 x 0.4 = $800,000\nARO:                       0.2 (expected once every 5 years based on industry stats)\nALE (without controls):    $800,000 x 0.2 = $160,000/year\n\nProposed Controls: Offline immutable backups + EDR + employee training\nControl Cost:              $30,000/year (licensing + maintenance)\nNew EF:                    0.02 (2% → backups mean only data since last backup lost)\nNew ALE:                   $800,000 x 0.02 = $16,000/year\n\nRisk Reduction:            $160,000 - $16,000 = $144,000/year\nROSI:                      $144,000 - $30,000 = $114,000/year (380% ROI)\n\nDecision:                  IMPLEMENT → positive ROSI + critical asset protection\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Limitations of Quantitative Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires accurate historical data (often unavailable for rare events)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Difficult to quantify intangible assets (reputation, customer trust)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "False precision → numbers look exact but rely on estimates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does not account for cascading failures or systemic risk"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-nist-risk-management-framework-rmf",
      children: "5.5 NIST Risk Management Framework (RMF)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NIST SP 800-37, Revision 2. Seven-step framework for integrating security and risk into the system development lifecycle. Mandatory for US federal agencies, widely adopted in regulated industries."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NIST RMF Seven Steps:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Activities"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prepare"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Establish risk management roles, risk tolerance, strategy, and organization-level priorities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RMF strategy document, risk management plan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Categorize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classify information system based on FIPS 199 impact levels (Low/Moderate/High)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security categorization (SCA) document"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Select"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose baseline security controls from NIST SP 800-53 (tailored to categorization)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control set selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy controls in system design, configuration, and operational procedures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implemented controls documented"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Assess"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate control effectiveness through testing, interviews, and documentation review"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security Assessment Report (SAR)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authorize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Management official accepts residual risk and authorizes system operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization decision (ATO/IATT)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Monitor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous monitoring, re-assessment, configuration management, and change control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ongoing authorization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "FIPS 199 Impact Levels:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Impact Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Confidentiality"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Integrity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Availability"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Low"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited adverse effect on operations, assets, or individuals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Moderate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serious adverse effect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "High"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Severe or catastrophic adverse effect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "56-risk-treatment-options",
      children: "5.6 Risk Treatment Options"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Option"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mitigate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement controls to reduce likelihood or impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost-effective control exists; cost < risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patch critical vulnerability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Accept"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acknowledge the risk, monitor, no action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low risk, or cost of control exceeds risk itself"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minor info disclosure on non-sensitive system"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transfer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shift risk to a third party"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial risk can be transferred; insurance exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cyber insurance, outsourced payment processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Avoid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discontinue the risky activity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk is too high, no feasible mitigation exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stop collecting unnecessary PII"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Escalate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kick to higher authority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk exceeds your acceptance authority level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AO/CISO makes the call"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "57-risk-assessment-report-template",
      children: "5.7 Risk Assessment Report Template"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RISK ASSESSMENT REPORT\nSystem:           [Name]\nDate:             [Date]\nAssessor:         [Name]\n\nFINDINGS:\n1. [Risk ID] → [Title]\n   Threat:               []\n   Vulnerability:        []\n   Likelihood:           [VL/L/M/H/VH]\n   Impact:               [VL/L/M/H/VH]\n   Risk Level:           [VL/L/M/H/C]\n   Current Controls:     []\n   Recommended Action:   []\n   Owner:                []\n   Target Date:          []\n\nRISK HEAT MAP:\n  Critical: [#]    High: [#]    Medium: [#]    Low: [#]    Very Low: [#]\n\nOVERALL ASSESSMENT:\n  [Summary of top risks, systemic concerns, and recommendations]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-security-policies",
      children: "6. Security Policies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-policy-hierarchy",
      children: "6.1 Policy Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Security policies exist at multiple levels of abstraction, from strategic to implementation."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Document Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Statement"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strategic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy (high-level)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Organization-wide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"All data at rest must be encrypted with AES-256\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tactical"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard (mandatory rules)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Department / system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Server passwords must be 14+ characters with complexity\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Operational"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Procedure (step-by-step)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specific task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"How to onboard a new employee to Active Directory\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guideline (recommended)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advisory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Recommended cipher suites for TLS 1.3 configuration\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-common-security-policies",
      children: "6.2 Common Security Policies"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Policy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Requirements"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Acceptable Use Policy (AUP)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defines acceptable use of company IT assets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No personal devices without approval, no unauthorized software installation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Password Policy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password strength and rotation rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum 12 characters, complexity, MFA where possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Incident Response Policy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured response to security incidents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Roles, reporting chain, containment SLA, communication plan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Classification Policy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How data is classified and handled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Labels: Public, Internal, Confidential, Restricted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Business Continuity / DR Policy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintain operations during disruption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTO (Recovery Time Objective), RPO (Recovery Point Objective)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Remote Access Policy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure remote connectivity requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPN required, MFA, device compliance check, no split-tunneling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Third-Party Risk Policy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor security requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Due diligence, security questionnaire, contract clauses, periodic review"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Change Management Policy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controlled system changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approval required, test environment, rollback plan, change window"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-policy-key-elements-template",
      children: "6.3 Policy Key Elements Template:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. PURPOSE → Why this policy exists.\n2. SCOPE → Who and what it applies to.\n3. POLICY → The actual rules (mandatory, use \"shall\" / \"must\").\n4. ROLES & RESPONSIBILITIES → Who enforces, who complies, who audits.\n5. COMPLIANCE → Consequences of violation.\n6. EXCEPTIONS → How to request an exception and who approves.\n7. REVIEW CYCLE → How often the policy is reviewed and updated.\n8. RELATED DOCUMENTS → Other policies, standards, guidelines referenced.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-policy-lifecycle",
      children: "6.4 Policy Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. IDENTIFY NEED → Triggered by: new regulation, post-incident lesson, audit finding, technology change.\n2. DRAFT → Write policy with input from stakeholders (legal, IT, business, HR).\n3. REVIEW → Legal review for regulatory compliance, technical review for feasibility.\n4. APPROVE → Executive sign-off (CISO, CEO, Board of Directors).\n5. COMMUNICATE → Training sessions, email announcement, intranet posting, signed acknowledgment.\n6. ENFORCE → Technical controls implement the policy (GPO, MDM, DLP, IAM policies).\n7. AUDIT → Periodic review to verify compliance and effectiveness.\n8. UPDATE → Revise based on changing threat landscape, new technology, regulatory updates.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-security-vs-usability-trade-off",
      children: "7. Security vs Usability Trade-Off"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-the-fundamental-tension",
      children: "7.1 The Fundamental Tension"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Security and usability are inherently in tension. Every additional security control adds friction for the user, reducing adoption and productivity."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trade-Off Curve:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "         High\n          |\nUsability |           /\n          |         /\n          |       /\n          |     /\n          |   /\n          | /\n          +-------------------------\n                      Security\n         Low           -->          High\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-real-world-examples",
      children: "7.2 Real-World Examples"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "High Security (Low Usability)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Balanced"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "High Usability (Low Security)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-factor: password + TOTP + YubiKey + fingerprint every time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password + MFA push notification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password only (no MFA)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Password policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32-char random, changed monthly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14-char passphrase, change only on compromise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6-char, no complexity, never expires"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full disk encryption + remote wipe + MDM + 30-min lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption + PIN lock + 15-min lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No encryption, no lock screen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default-deny all, opened on case-by-case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default-deny, auto-approve for known good traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default-allow all outbound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Session timeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 minute inactivity = logout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 minutes = lock screen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never expires"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Account lockout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 failed attempt = permanent lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 attempts = 15-min lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No lockout (brute-forcable)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-achieving-balance--strategies",
      children: "7.3 Achieving Balance → Strategies"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Works"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Risk-based (adaptive) authentication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increase security only when risk factors are elevated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No MFA from home IP; MFA + step-up from unknown VPN location"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single Sign-On (SSO)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce password fatigue to one strong authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAML/OIDC federation across 50+ cloud applications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Passwordless authentication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminate passwords entirely using public-key crypto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebAuthn, FIDO2, passkeys (biometric + device-bound key)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Progressive disclosure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Show advanced options only when needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAPTCHA only after 3 failed login attempts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UX-driven security design"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security controls that feel natural to use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Face ID unlock vs typing a complex password"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Just-in-time (JIT) access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grant elevated privileges only for a limited window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS IAM Identity Center JIT, Azure PIM"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-the-cost-of-poor-usability",
      children: "7.4 The Cost of Poor Usability"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Users bypass controls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security is weakened"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users write passwords on sticky notes because rotation is too frequent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shadow IT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unmanaged risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users adopt unsanctioned cloud apps because official tools are too restrictive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alert fatigue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical alerts missed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOC team overwhelmed by 10,000 daily low-severity alerts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security tool ineffective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDR agent uninstalled because it slowed the machine"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing susceptibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credential theft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users click malicious links because they're conditioned to click through security warnings"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-practical-examples--hands-on-security-tools",
      children: "8. Practical Examples → Hands-On Security Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All examples assume a Linux environment (Kali, Ubuntu, or similar). Adapt paths and package names for your distribution."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-ossec--wazuh-agent--host-intrusion-detection",
      children: "8.1 OSSEC / Wazuh Agent → Host Intrusion Detection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What it does:"
      }), " File integrity monitoring (FIM), log analysis, rootkit detection, and real-time alerting. Wazuh is the modern fork of OSSEC with additional features (agent enrollment, centralized management, SIEM integration)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Install Wazuh Agent (Debian/Ubuntu):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Add Wazuh repository GPG key\ncurl -s https://packages.wazuh.com/key/GPG-KEY-WAZUH | apt-key add -\n\n# Step 2: Add repository\necho \"deb https://packages.wazuh.com/4.x/apt/ stable main\" | tee /etc/apt/sources.list.d/wazuh.list\n\n# Step 3: Update and install\napt-get update\napt-get install wazuh-agent -y\n\n# Step 4: Configure Wazuh manager IP address\nsed -i \"s/MANAGER_IP/10.0.0.5/g\" /var/ossec/etc/ossec.conf\n\n# Step 5: Register agent with manager\n/var/ossec/bin/agent-auth -m 10.0.0.5 -A my-agent-name\n\n# Step 6: Start and enable service\nsystemctl start wazuh-agent\nsystemctl enable wazuh-agent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key OSSEC/Wazuh Capabilities:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Works"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Detects"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File Integrity Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-1/SHA-256 hash checksums, periodic and real-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trojanized binaries, config file drift, unauthorized changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Log Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regex pattern matching on syslog, Windows events, Apache logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brute force (many failed SSH logins), SQLi attempts, privilege escalation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rootkit Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check for hidden processes, files, and kernel modules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel rootkits, LD_PRELOAD hooks, userland rootkits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Active Response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-execute blocking scripts on alert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offending IP auto-blocked via iptables for N minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PCI DSS Compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-built rule set for PCI Requirement 11.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated FIM reporting for audit evidence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-nmap--network-scanning-and-discovery",
      children: "8.2 Nmap → Network Scanning and Discovery"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What it does:"
      }), " Discovers live hosts, open ports, running services, operating systems, and potential vulnerabilities across a network."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Scan Types:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. Ping sweep → discover which hosts are alive\nnmap -sn 192.168.1.0/24\n\n# 2. SYN scan (stealth, default) → scan top 1000 ports\nnmap -sS 192.168.1.1-254\n\n# 3. Service version detection\nnmap -sV 192.168.1.100\n\n# 4. OS fingerprinting\nnmap -O 192.168.1.100\n\n# 5. Aggressive scan (OS + services + scripts + traceroute)\nnmap -A 192.168.1.100\n\n# 6. Scan specific ports only\nnmap -p 22,80,443,3306,8080 192.168.1.100\n\n# 7. Scan all 65535 ports\nnmap -p- 192.168.1.100\n\n# 8. Script scan using NSE (Nmap Scripting Engine) vulnerability checks\nnmap --script=vuln 192.168.1.100\n\n# 9. Save output to file\nnmap -oA network_scan 192.168.1.0/24\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Port State Interpretation:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "open"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application actively accepting TCP connections or UDP responses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "filtered"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall, ACL, or packet filter blocking probes (no response)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "closed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port reachable but no application listening (RST response to SYN)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "unfiltered"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port reachable but state unknown (ACK scan only)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → Scanning Local Web Server:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ nmap -sV -p 22,80,443,8080 192.168.1.10\n\nNmap scan report for 192.168.1.10\nPORT     STATE  SERVICE    VERSION\n22/tcp   open   ssh        OpenSSH 8.2p1 Ubuntu 4ubuntu0.5\n80/tcp   open   http       Apache httpd 2.4.41\n443/tcp  open   http       Apache httpd 2.4.41\n8080/tcp closed http-proxy\n\nService detection performed.\n\nAnalysis:\n  - SSH (port 22): OpenSSH 8.2p1 → check CVE-2020-15778 (scp command injection)\n  - HTTP (port 80): Apache 2.4.41 → known vulnerabilities in older 2.4.x\n  - HTTPS (port 443): Same Apache → check TLS config for weak ciphers\n  - Recommendations: \n    1. Restrict SSH to management IPs only (firewall rule)\n    2. Upgrade Apache to latest 2.4.x\n    3. Enable HSTS and disable weak TLS ciphers\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-wireshark--packet-capture-and-protocol-analysis",
      children: "8.3 Wireshark → Packet Capture and Protocol Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What it does:"
      }), " Capture and inspect network packets in real-time or from saved pcap files. Essential for network forensics and protocol debugging."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Essential Display Filters:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Filter Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "http"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Show only HTTP traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp.port == 443"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Show HTTPS traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ip.addr == 10.0.0.5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Show traffic to/from specific IP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "http.request.method == \"POST\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Show only POST requests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp.flags.syn == 1 && tcp.flags.ack == 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Show only SYN (connection initiation) packets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "http contains \"password\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find HTTP traffic with the word \"password\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "!arp && !icmp && !dns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove noisy background protocols"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tls.handshake.type == 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Show TLS Client Hello messages"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step → Capture and Analyze HTTP Login:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Terminal 1: Start capture on interface eth0, filter for port 80\ntshark -i eth0 -w /tmp/http_capture.pcap -f \"tcp port 80\"\n\n# Terminal 2: Generate test traffic (simulate a user logging in)\ncurl -X POST http://test-site.com/login -d \"username=admin&password=Secret123!\"\n\n# Stop capture (Ctrl+C in Terminal 1)\n\n# Analysis: Show all POST requests\ntshark -r /tmp/http_capture.pcap -Y \"http.request.method == POST\" \\\n  -T fields -e http.host -e http.request.uri -e urlencoded-form.value\n\n# Output reveals credentials in plaintext:\n# test-site.com  /login  admin\n# test-site.com  /login  Secret123!\n\n# Security finding: CREDENTIALS TRANSMITTED IN CLEARTEXT\n# Recommendation: Enforce HTTPS + HSTS, disable HTTP altogether\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wireshark as a Security Tool:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wireshark Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What to Look For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Malware C2 detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follow TCP stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beaconing to known bad IPs, unusual protocol over non-standard ports"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data exfiltration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Statistics > Endpoints > IPv4 > Bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unusually large outbound data transfers to single IP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARP spoofing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "arp"
            }), " filter + Statistics > Endpoints"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate IP addresses with different MACs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNS tunneling"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dns"
            }), " filter, check query lengths"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queries with subdomains > 50 characters, high query rate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plaintext credentials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "http contains \"password\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POST bodies with pass=, pwd=, auth= parameters in the clear"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TLS version issues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tls.handshake.version"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version < 1.2 indicates weak/outdated TLS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-john-the-ripper-and-hashcat--password-cracking",
      children: "8.4 John the Ripper and hashcat → Password Cracking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What it does:"
      }), " Recover plaintext passwords from stored hashes using dictionary, brute-force, and rule-based attacks. Essential for assessing password policy strength."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Hash Types and Formats:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Hash Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Format"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Source"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MD5 (Unix)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "$1$salt$hash"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy Unix / web apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-256 (Unix)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "$5$rounds=5000$salt$hash"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern Linux /etc/shadow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-512 (Unix)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "$6$rounds=5000$salt$hash"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern Linux /etc/shadow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NTLM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 hex characters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows SAM, Active Directory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bcrypt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "$2a$10$salt$hash"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern web apps (Laravel, Rails, Django)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PBKDF2-HMAC-SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "$pbkdf2-sha256$..."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apple, Bitwarden, WPA2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Argon2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "$argon2id$v=19$..."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern password hashing (OWASP recommended)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "John the Ripper → Basic Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Combine passwd and shadow files (Linux)\nunshadow /etc/passwd /etc/shadow > hashes.txt\n\n# Step 2: Crack with dictionary attack (rockyou wordlist)\njohn --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt\n\n# Step 3: View cracked passwords\njohn --show hashes.txt\n\n# Step 4: Incremental (brute-force) mode → exhaustive search\njohn --incremental hashes.txt\n\n# Step 5: Rule-based mode → apply mangling rules to wordlist\njohn --wordlist=words.txt --rules=best64 hashes.txt\n\n# Step 6: Specific hash format\njohn --format=bcrypt --wordlist=rockyou.txt bcrypt_hashes.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "hashcat → GPU-Accelerated Cracking:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# MD5 with rockyou (mode 0 = MD5)\nhashcat -m 0 -a 0 hashes.txt /usr/share/wordlists/rockyou.txt\n\n# NTLM with rules (mode 1000 = NTLM)\nhashcat -m 1000 -a 0 hashes.txt rockyou.txt -r /usr/share/hashcat/rules/best64.rule\n\n# bcrypt with show rate (mode 3200 = bcrypt)\nhashcat -m 3200 -a 3 bcrypt_hashes.txt ?l?l?l?l?l (mask attack, lowercase only)\n\n# Show results\nhashcat -m 0 --show hashes.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Mode Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dictionary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-a 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Try each word from wordlist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak/common passwords"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combinator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-a 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concatenate words from two wordlists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password = word1+word2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-a 3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brute force with character sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Known pattern (e.g., 8 chars, upper+digit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "-a 6"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-a 7"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dictionary + mask prefix/suffix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Summer2024!\" patterns"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cracking Speed Comparison (RTX 4090):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time for 1 Billion Candidates"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resistance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 GH/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NTLM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300 GH/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.3 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80 GH/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12.5 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 GH/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 GH/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bcrypt (cost 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 KH/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.5 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bcrypt (cost 14)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 KH/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "92 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Argon2id (t=3, m=64MB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 H/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extremely High"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-lynis--system-security-auditing",
      children: "8.5 Lynis → System Security Auditing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What it does:"
      }), " Automated security audit for Linux/Unix systems. Scans for misconfigurations, outdated software, weak permissions, and compliance gaps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install\napt-get install lynis -y   # or: git clone; cd lynis; ./lynis\n\n# Full system audit\nlynis audit system\n\n# Audit with custom profile\nlynis audit system --profile /etc/lynis/custom.prf\n\n# View last report\nlynis show report\n\n# Check only specific category\nlynis audit system --tests-from malware,file_integrity\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lynis Output Sections:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Checks"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Finding"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "General"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS details, uptime, kernel version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Kernel 5.4.0 → 26 known CVEs since last patch\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Boot Services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GRUB configuration, bootloader password"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"No GRUB password set → physical access allows single-user mode\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sysctl parameters, kernel hardening"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"net.ipv4.conf.all.rp_filter = 0 → [RECOMMENDATION: enable]\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory & Processes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ASLR, running services, open ports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"KASLR not enabled in kernel config\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Users & Groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password aging, empty passwords, sudoers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"User 'test' has no password set → [CRITICAL]\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PAM configuration, pwquality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Password minimum length not configured in pam_pwquality\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shell"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shell configurations, history files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"/root/.bash_history: world-readable → [RECOMMENDATION: chmod 600]\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mount options, /tmp security, ACLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"/tmp not mounted with noexec → [MEDIUM RISK]\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Software"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installed packages, versions, EOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"OpenSSL 1.1.1 → EOL, upgrade to 1.1.1k+\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iptables/nftables rules, status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"No firewall rules loaded → [CRITICAL]\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rsyslog, auditd, logrotate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"auditd not running → no system call auditing\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lynis Hardening Index:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Hardening Index = (points earned / max points) x 100\n\nExample output:\n  [+] Initializing program\n  [+] System Tools\n  [+] Plugins (phase 1)\n  ...\n  -------------------------------------------------\n      Hardening Index: 62 [oooooooo..........]\n  -------------------------------------------------\n\nInterpretation:\n  0-40:  Poor → immediate attention needed\n  41-60: Below average → significant improvements exist\n  61-80: Good → basic hardening in place\n  81-90: Excellent → comprehensive security posture\n  91-100: Hardened → exceptional, production-ready configuration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-case-studies--real-breach-anatomy",
      children: "9. Case Studies → Real Breach Anatomy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-equifax-2017--the-14-billion-patch-failure",
      children: "9.1 Equifax 2017 → The $1.4 Billion Patch Failure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Date:"
        }), " May-July 2017 (detected July 29, disclosed September 7)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " 147.9 million records exposed (SSNs, DOBs, addresses, driver's license numbers)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost:"
        }), " $1.4 billion in settlements, fines, and remediation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " Failure to patch Apache Struts CVE-2017-5638 + collapsed defense in depth"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attacker:"
        }), " Chinese state-sponsored APT group (believed to be APT41 / Winnti Group)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Full Timeline:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security Failure"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mar 7, 2017"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apache Struts CVE-2017-5638 disclosed (RCE via malformed Content-Type header)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patch released by Apache"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mar 8"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US-CERT issues emergency alert about active exploitation in the wild"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equifax security team notified internally"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mar 9"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equifax's internal vulnerability scans identify vulnerable instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detection succeeded at this point"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Late Mar"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equifax patching team instructed to apply patch to affected servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process initiated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Apr-May"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual verification failed → the specific vulnerable server was missed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PATCH MANAGEMENT FAILURE: No verification step in patching process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "May 13"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker begins scanning for vulnerable Struts instances on the internet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reconnaissance in progress"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "May 13-19"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker identifies Equifax's unpatched dispute resolution portal server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NO WAF blocking known CVE payloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "May 19"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker sends crafted HTTP request exploiting CVE-2017-5638, gains shell access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INITIAL COMPROMISE via known vulnerability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "May 19 - Jul 29"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker moves laterally across internal network, exfiltrates 147.9M records over 76 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NO NETWORK SEGMENTATION: Web server reaches databases; NO EGRESS MONITORING"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Jul 29"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equifax SOC notices suspicious traffic from an internal database server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detection after 76 days of exfiltration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Jul 31"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dispute portal taken offline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Containment begins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sep 7"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public disclosure after CEO and CFO sell $1.8M in stock (insider trading scandal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delayed disclosure + leadership scandal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause Analysis (Fishbone / Ishikawa):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                    PEOPLE                      PROCESS\n                    ------                      -------\n              SOC understaffed           No patch verification step\n              CISO: no cloud exp     No vulnerability management SLA\n                    \\                      /\n                     \\                    /\n                      \\                  /\n                       \\                /\n                        \\              /\n    ===================== X ======================\n                        /              \\\n                       /                \\\n                      /                  \\\n                     /                    \\\n                    /                      \\\n            No WAF rules             75-day exfiltration window\n            No segmentation          No egress monitoring\n            Expired TLS cert         No data-at-rest encryption\n              TECHNOLOGY                 ENVIRONMENT\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Top 7 Defense in Depth Failures:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Failed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Should Have Been"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patch Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No verification step; missed patch on production server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated patch verification + reporting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web Application Firewall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No WAF rule to block the known exploit payload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAF rule deployed within 24 hours of CVE disclosure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network Segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web server had direct access to 50+ databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strict network microsegmentation; DMZ for web tier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No least privilege on database access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web app should use limited DB credentials (INSERT/SELECT only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Egress Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No outbound data transfer alerts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data loss prevention (DLP) monitoring for large outbound transfers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption at Rest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data in databases was not encrypted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-256 encryption on all PII columns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expired TLS certificate on monitoring tool; SOC blind for weeks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated certificate renewal; monitoring independence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CIA Impact:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confidentiality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRITICAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "147.9M PII records stolen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data was read-only, not modified"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Systems remained operational"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Lessons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Patch management must include a verification step → seeing is not believing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Defense in Depth requires EVERY layer to function; one missed patch shouldn't equal national-level breach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network segmentation is non-negotiable → a web server should never directly reach 50+ databases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Egress monitoring detects exfiltration → 76 days of data leaving the network should trigger alerts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Certificate management is security-critical → expired monitoring certs blind your SOC."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Incident disclosure timing matters → insider trading allegations compound the damage."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-target-2013--the-hvac-vendor-that-cost-202m",
      children: "9.2 Target 2013 → The HVAC Vendor That Cost $202M"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Date:"
        }), " Nov 27 - Dec 15, 2013 (detected Dec 12, disclosed Dec 19)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " 110 million records (40M credit cards + 70M customer PII)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost:"
        }), " $202 million settlement + $18.5M state fines + CEO resignation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " Third-party vendor compromise + least privilege failure + flat network"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Chain Breakdown:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PHASE 1: VENDOR COMPROMISE (Nov 15, 2013)\n------------------------------------------\nTarget's HVAC vendor: Fazio Mechanical Services (based in Sharpsburg, PA)\nFazio had remote access to Target's network for HVAC monitoring and billing\nAttack vector: Phishing email sent to Fazio employees\nResult: Attacker captures Fazio network credentials\nFAILURE: Least Privilege → HVAC vendor should NOT have network access reaching POS systems\n\nPHASE 2: INITIAL ACCESS (Nov 15)\n----------------------------------\nAttacker uses Fazio credentials to access Target's vendor portal\nTarget's Vendor Gateway authenticates the supplier\nResult: Attacker gains foothold on Target's internal network\nFAILURE: No MFA on vendor access; no jump-host with session recording\n\nPHASE 3: INTERNAL RECONNAISSANCE (Nov 15-30)\n---------------------------------------------\nAttacker enumerates internal systems from the vendor gateway\nTarget's Bangalore SOC received 18+ security alerts about suspicious activity\nResult: Attacker maps Target's internal network and identifies POS systems\nFAILURE: Alerts were generated but not escalated → SOC was overwhelmed by false positives\n\nPHASE 4: POS SYSTEM COMPROMISE (Nov 30)\n-----------------------------------------\nAttacker deploys \"Kaptoxa\" memory scraper malware on POS terminals\nKaptoxa scrapes track 1 + track 2 data from POS RAM during transaction processing\nTrack 2 data contains card number + expiration + CVV (emboldened magnetic stripe)\nFAILURE: Flat network → POS systems reachable from vendor gateway (PCI DSS Requirement 1 violation)\n\nPHASE 5: DATA STAGING AND EXFILTRATION (Dec 2-15)\n---------------------------------------------------\nStolen card data staged on internal compromised servers\nData exfiltrated to FTP servers in Russia, Brazil, and Netherlands\nExfiltration destinations chosen specifically to evade US law enforcement\nFAILURE: No outbound DLP; no egress filtering; no monitoring of large data transfers\n\nPHASE 6: EXTERNAL DETECTION (Dec 12)\n--------------------------------------\nUS Department of Justice contacts Target about suspicious MasterCard transactions\nPattern: Fraud transactions traced back to cards used at Target stores\nFAILURE: Target did NOT detect the breach internally → external notification from DOJ\n\nPHASE 7: CONTAINMENT AND DISCLOSURE (Dec 15-19)\n-------------------------------------------------\nDec 15: Malware removed from POS systems\nDec 19: Target publicly discloses the breach\nCEO Gregg Steinhart resigns in May 2014\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Least Privilege Violation Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Violation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happened"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PCI DSS Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Correct Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope of vendor access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HVAC vendor could reach POS network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirement 1: Isolate cardholder data from other networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor VPN → jump host → HVAC subnet only (no POS access)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No network segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flat network; any device could reach POS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirement 1.3: Prohibit direct access between CDE and other networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMZ + firewall rules separating POS from all other segments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No MFA on vendor access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single password = full access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirement 8.3: Two-factor authentication for remote access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MFA required for ALL remote vendor access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overprivileged accounts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor accounts had access beyond HVAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirement 7: Restrict access to need-to-know"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RBAC: HVAC devices and billing only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No vendor monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No logging or review of vendor activity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirement 10: Track and monitor all access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session recording, anomaly detection on vendor behavior"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CIA Impact:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confidentiality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRITICAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "110M records (40M cards + 70M PII) stolen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARTIAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware scraped track data from POS memory in real-time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POS systems remained operational"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Lessons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Least privilege extends to third parties → a vendor's access must be scoped to THEIR systems only."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network segmentation is non-negotiable → PCI DSS Requirement 1 exists for exactly this reason."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SOC alerts must be triaged and actionable → 18 missed alerts = systemic SOC failure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Third-party risk management must include continuous monitoring of vendor behavior."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect and respond before law enforcement tells you → self-detection is a security maturity metric."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "POS malware detection needs behavioral analysis (memory scraping), not just signature-based."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-capital-one-2019--ssrf--iam-misconfiguration--106m-records",
      children: "9.3 Capital One 2019 → SSRF + IAM Misconfiguration = 106M Records"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Date:"
        }), " March 22-23, 2019 (detected July 17, disclosed July 29)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " 106 million records (140K SSNs, 80K bank account numbers)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost:"
        }), " $190 million settlement + $80 million OCC fine + $100K class action"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " SSRF vulnerability + overly permissive IAM role on EC2 instance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attacker:"
        }), " Paige Thompson, former AWS employee (software engineer, no financial motive)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Full Attack Chain:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STEP 1: SSRF VULNERABILITY IDENTIFICATION\n------------------------------------------\nCapital One hosted a web application on AWS (US East region)\nThe application had a WAF → but it was NOT configured to block SSRF attacks\nThe app made server-side HTTP requests based on user-supplied URLs\nFAILURE: No WAF rules for SSRF; no URL allowlist; no IMDSv2 enforcement\n\nSTEP 2: METADATA SERVICE EXPLOITATION (Mar 22)\n-----------------------------------------------\nThompson sends a crafted HTTP request to the vulnerable web app:\n  GET /fetch-resource?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/\n  \nThe server makes the request to AWS's internal metadata service\nThe metadata service returns temporary IAM credentials for the EC2 instance's role\nFAILURE: 169.254.169.254 should be blocked at the OS/kernel level or via IMDSv2\n\nSTEP 3: IAM CREDENTIAL EXFILTRATION\n-------------------------------------\nResponse from metadata service:\n{\n  \"Code\": \"Success\",\n  \"Type\": \"AWS-HMAC\",\n  \"AccessKeyId\": \"AKIA...\",\n  \"SecretAccessKey\": \"...\",\n  \"Token\": \"...\",\n  \"Expiration\": \"...\"\n}\n\nThompson now has valid AWS credentials with the attached IAM role's permissions\nFAILURE: IAM role attached to web server was far too permissive\n\nSTEP 4: S3 BUCKET ENUMERATION AND DATA EXFILTRATION (Mar 22-23)\n-----------------------------------------------------------------\nThompson uses the stolen credentials via AWS CLI:\n  aws s3 ls                              (list all buckets)\n  aws s3 cp --recursive s3://capital-one-prod-data/ ./exfiltrated/  (copy data)\n  \nOver 100 GB of customer data exfiltrated\n70M records from credit card applications (SSNs, addresses, income data)\nFAILURE: No S3 access logs; no CloudTrail data events; no exfiltration detection\n\nSTEP 5: EXTERNAL DETECTION (Jul 17)\n-------------------------------------\nThompson posts on a public Slack channel: \"I've basically strapped myself with a bomb vest...\"\nAnother user messages: \"capital-one data bro?\"\nThompson uploads files to public GitHub repository\nExternal security researcher spots the GitHub posts\nResearcher notifies Capital One via HackerOne bug bounty program\nFAILURE: 117 days of undetected access; detection was external, not internal\n\nSTEP 6: FBI INVESTIGATION AND ARREST (Jul 29)\n-----------------------------------------------\nThompson arrested at her mother's home\nCharged under Computer Fraud and Abuse Act (CFAA)\nFBI recovered cryptocurrency mining and other AWS compromise activities\nSentenced to time served with 5 years supervised release\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSRF Deep Dive → The Metadata Service Attack:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The AWS EC2 metadata service at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://169.254.169.254/latest/meta-data/"
      }), " provides instance metadata to running EC2 instances. Crucially, it requires no authentication from within the instance → any process running on the server can access it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# VULNERABLE CODE PATTERN:\n@app.route('/fetch')\ndef fetch():\n    url = request.args.get('url')                      # User controls the URL\n    resp = requests.get(url, timeout=5)                # Server makes request to arbitrary URL\n    return resp.text                                    # Response returned to attacker\n\n# ATTACK PAYLOAD:\n/fetch?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/MyAppRole\n\n# WHAT HAPPENS:\n# 1. Server receives request to /fetch\n# 2. Server makes HTTP GET to http://169.254.169.254/latest/meta-data/iam/security-credentials/MyAppRole\n# 3. AWS metadata service returns IAM role credentials (no auth required internally)\n# 4. Attacker receives valid AWS AccessKeyId, SecretAccessKey, and Token\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSRF Mitigation Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effectiveness"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Capital One Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block 169.254.169.254 via iptables/nftables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents metadata access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT IMPLEMENTED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMDSv2 (requires PUT/POST for session token)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Significant SSRF obstacle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT IMPLEMENTED (IMDSv1 default)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "URL allowlist in application code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only allowed URLs can be fetched"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT IMPLEMENTED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WAF rule blocking /latest/meta-data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks known attack pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT IMPLEMENTED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network-level SSRF prevention (NAT/proxy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks internal network scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT IMPLEMENTED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disable metadata service on non-critical instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removes attack surface entirely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT IMPLEMENTED"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The IAM Role → Least Privilege Failure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The IAM role attached to the vulnerable EC2 instance had these permissions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"s3:List\",\n        \"s3:GetObject\",\n        \"s3:PutObject\"\n      ],\n      \"Resource\": \"*\"\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What was wrong:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "s3:List"
        }), " on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Resource: \"*\""
        }), " → allowed listing ALL S3 buckets in the account"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "s3:GetObject"
        }), " on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Resource: \"*\""
        }), " → allowed reading ANY object from ANY bucket"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "s3:PutObject"
        }), " on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Resource: \"*\""
        }), " → allowed writing to ANY bucket (not needed by web server)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Condition"
        }), " block → permissions had no IP restriction, MFA requirement, or time window"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Useful lifecycle: Role was likely created with minimal permissions then expanded without review"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What it SHOULD have been:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": \"s3:GetObject\",\n      \"Resource\": \"arn:aws:s3:::capital-one-prod-app-assets/*\",\n      \"Condition\": {\n        \"IpAddress\": {\"aws:SourceIp\": \"10.0.0.0/16\"},\n        \"NumericLessThanEquals\": {\"s3:ExistingObjectTag/access-level\": \"public\"}\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CIA Impact:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confidentiality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRITICAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "106M records (140K SSNs, 80K bank accounts) stolen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only access; no data modification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Systems remained operational"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Lessons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SSRF is the cloud's #1 threat"
        }), " → always block 169.254.169.254 at the OS and WAF level."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IMDSv2 should be mandatory"
        }), " → it introduces a session token handshake that simple SSRF can't perform."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Least privilege in cloud IAM is non-negotiable"
        }), " → a web server should never have ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s3:List"
        }), " on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Resource: \"*\""
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "S3 access logging + CloudTrail data events"
        }), " would have shown the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ListBuckets"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GetObject"
        }), " calls immediately."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "External attack surface monitoring"
        }), " → GitHub scanning, dark web monitoring, and public Slack monitoring could have detected sooner."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Segregation of environments"
        }), " → production data should not be accessible from a public web application's IAM role."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WAF must evolve"
        }), " → SSRF attack rules are not part of default WAF configurations; they must be explicitly added."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-comparison-matrix",
      children: "Case Study Comparison Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Equifax 2017"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target 2013"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Capital One 2019"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Root Cause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unpatched CVE-2017-5638"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor phishing + flat network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSRF + IAM misconfiguration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Primary Failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patch management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least privilege (vendor)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM least privilege"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secondary Failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No network segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No network segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No IMDSv2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tertiary Failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No egress monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOC alert fatigue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No SSRF WAF rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Records Exposed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "147.9 million"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "110 million"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "106 million"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Financial Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$1.4 billion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$202 million"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$270 million"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Detection Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal SOC (after 76 days)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External (DOJ notified)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External (GitHub/HackerOne)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Attack Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "76 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "117 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker Profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nation-state (China APT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eastern European crime group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single individual (former AWS employee)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PII + SSNs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credit card numbers + PII"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSNs + bank account numbers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regulatory Outcome"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$700M FTC settlement + SEC insider trading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$18.5M state fines + CEO resignation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$80M OCC fine + $190M settlement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key Defense That Would Have Stopped"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAF blocking known payload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMDSv2 + least privilege IAM"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-applications-in-real-systems",
      children: "10. Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-banking-and-financial-services",
      children: "10.1 Banking and Financial Services"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Security Principle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Regulatory Driver"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CIA Triad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All three are critical. Confidentiality protects account data. Integrity ensures balances are accurate. Availability ensures 24/7 access."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOX, PCI DSS, GLBA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Least Privilege"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teller can process deposits/withdrawals but cannot modify interest rates or approve loans."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FFIEC guidelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Separation of Duties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trade execution vs trade settlement; loan origination vs loan approval; initiator vs approver for payments > $10K."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOX Section 404"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Defense in Depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall -> WAF -> App-level auth -> Database ACLs -> Encryption at rest -> SIEM -> Fraud detection ML models."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCI DSS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fail-Safe Defaults"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If payment gateway is unreachable, decline the transaction (not approve)."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Mediation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every API call to account/balance endpoint checks JWT token, checks permissions, logs the request."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-healthcare",
      children: "10.2 Healthcare"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Security Principle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Regulatory Driver"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CIA Triad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confidentiality is paramount (medical records). Integrity ensures correct diagnosis/treatment. Availability is life-critical (hospital systems)."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIPAA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Least Privilege"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nurse accesses patient records on their floor only. Doctor accesses own patients only. Billing accesses insurance data only."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIPAA Minimum Necessary Rule"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Separation of Duties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One person prescribes medication, another pharmacist verifies, a third nurse administers."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIPAA + medical best practice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Economy of Mechanism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple emergency access procedure: \"break glass\" with automatic audit notification."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIPAA Contingency Plan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fail-Safe Defaults"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If EHR system fails, paper records + downtime procedures activate."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIPAA Contingency Plan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Audit Logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every access to patient records logged: who, when, which record, purpose (treatment/payment/operations)."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIPAA Audit Control"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-government-and-defense",
      children: "10.3 Government and Defense"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Security Principle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Regulatory Driver"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CIA Triad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Availability is often prioritized for public services. Confidentiality is paramount for classified data. Integrity for election systems is existential."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FISMA, NIST SP 800-53"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Least Privilege"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top Secret / Secret / Confidential / Unclassified classifications determine access at each level."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executive Order 13526"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Separation of Duties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No single person can both classify a document and determine who has access to it."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICD 710"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cryptographic algorithms and security standards are published (NIST FIPS). Secrets are keys, not algorithms."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIPS 140-3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Defense in Depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical security -> Guards -> Badge access -> Encryption -> Air gaps -> Insider threat monitoring."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIST SP 800-53"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Mediation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every classified document access is checked against clearance + need-to-know + compartment."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICD 703"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-interview-corner--15-qa-on-security-fundamentals",
      children: "11. Interview Corner → 15+ Q&A on Security Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-cia-triad-and-why-is-it-the-foundation-of-information-security",
      children: "Q1: What is the CIA triad and why is it the foundation of information security?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The CIA triad is Confidentiality, Integrity, and Availability → the three pillars that define information security goals. Confidentiality ensures data is accessible only to authorized parties (via encryption, access controls). Integrity ensures data is accurate and unmodified (via hashing, digital signatures). Availability ensures systems are accessible when needed (via redundancy, load balancing). Every security control maps to at least one CIA element. A breach in any one element is a security incident."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-explain-the-difference-between-authentication-and-authorization",
      children: "Q2: Explain the difference between authentication and authorization."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Authentication answers \"Who are you?\" → proving identity via something you know (password), have (token), or are (biometric). Authorization answers \"What can you do?\" → determining permissions after identity is proven. Example: Presenting your passport at airport security is authentication. The gate agent checking your boarding pass for the correct flight is authorization. In systems, authentication happens first (login), then authorization is checked for every subsequent action."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-the-principle-of-least-privilege-and-why-is-it-important",
      children: "Q3: What is the principle of least privilege and why is it important?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Least privilege means every entity (user, process, service) should have only the minimum permissions necessary to perform its function. It limits blast radius → if an account is compromised, the attacker can only do what that account can do. Target's 2013 breach is a textbook violation: HVAC vendor accounts had network access reaching POS systems. Implementation: start with zero permissions, add only what's needed, review quarterly, revoke stale permissions immediately."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-would-you-implement-defense-in-depth-for-a-web-application",
      children: "Q4: How would you implement defense in depth for a web application?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Defense in depth means multiple independent security layers so that if one fails, another catches the threat. For a web application: Layer 1 → Firewall (block all ports except 80/443). Layer 2 → WAF (detect SQLi, XSS, CSRF). Layer 3 → Rate limiting (prevent brute force). Layer 4 → MFA authentication. Layer 5 → RBAC authorization. Layer 6 → Input validation + prepared statements. Layer 7 → TLS 1.3 in transit, AES-256 at rest. Layer 8 → SIEM monitoring with real-time alerting. Layer 9 → Backups with 3-2-1 rule. Each control must be from an independent failure domain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-walk-me-through-a-stride-threat-model-for-an-e-commerce-checkout-system",
      children: "Q5: Walk me through a STRIDE threat model for an e-commerce checkout system."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " I decompose the system into DFD elements: External entity (customer), process (checkout handler), data store (orders database), data flow (payment info over HTTPS). STRIDE per element: Spoofing → attacker impersonates customer via stolen session cookie (mitigation: session tokens + HTTPS). Tampering → attacker modifies order total via man-in-the-middle (mitigation: TLS + HMAC signature on payload). Repudiation → customer claims they didn't place the order (mitigation: immutable audit log). Information Disclosure → attacker views other orders via IDOR (mitigation: user-scoped authorization). DoS → attacker floods checkout endpoint (mitigation: rate limiting + CDN). Elevation of Privilege → attacker escalates from customer to admin (mitigation: strict RBAC + input validation)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-whats-the-difference-between-qualitative-and-quantitative-risk-assessment",
      children: "Q6: What's the difference between qualitative and quantitative risk assessment?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Qualitative uses descriptive scales (Low/Medium/High) for likelihood and impact, combined in a risk matrix. It's faster, good for initial triage, but subjective. Quantitative uses monetary values and statistical formulas: SLE = AV x EF, ALE = SLE x ARO. It produces harder numbers but requires accurate historical data. Example: Qualitative might rate a ransomware risk as \"High.\" Quantitative would say \"ALE = $160,000/year, and a $30K backup solution would reduce that to $16K/year with 380% ROSI.\" Use qualitative for speed, quantitative for budget justification."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-explain-the-concept-of-fail-safe-defaults-with-a-real-example",
      children: "Q7: Explain the concept of fail-safe defaults with a real example."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Fail-safe defaults means when a system fails, it should default to a secure state (deny access) rather than an insecure state (allow access). Rule: all ACLs end with explicit deny; all try/catch blocks fail securely; all authentication failures return the same error message. Real example: A firewall should drop all traffic when it crashes (fails closed), not pass traffic (fails open). Exception: Fire doors must fail open (unlock) for life safety during a fire. The principle requires understanding what \"safe\" means in each context."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-would-you-handle-the-security-vs-usability-trade-off-in-a-corporate-environment",
      children: "Q8: How would you handle the security vs usability trade-off in a corporate environment?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Three strategies: (1) Risk-based authentication → enforce MFA only when behavior is anomalous (new device, new location), not on every login. (2) SSO → reduce password fatigue by having one authentication point for all applications. (3) Passwordless → implement FIDO2/WebAuthn with biometrics; users prefer Face ID over typing complex passwords. The goal is to find the minimal friction that achieves acceptable risk. Measure user friction (support tickets, login time) and adjust controls accordingly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-is-the-most-important-lesson-from-the-equifax-breach",
      children: "Q9: What is the most important lesson from the Equifax breach?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " That a single missed patch should not lead to a national-scale breach. Equifax had all the right tools (vulnerability scanner, security team, patch process) but failed because: (1) They didn't verify the patch was actually applied. (2) They had no defense in depth → once the web server was compromised, the attacker could reach databases with no segmentation. (3) They had no egress monitoring for 76 days of exfiltration. The lesson is that patch management is not just \"deploy the patch\" but \"verify deployment and assume the patch will fail in some cases.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-describe-the-complete-mediation-principle",
      children: "Q10: Describe the complete mediation principle."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Complete mediation means every access to every object must be checked for authority every single time → not cached, not assumed. Violations lead to TOCTOU (Time of Check, Time of Use) vulnerabilities. Example: A user requests file access; system checks permissions and approves; but between check and use, the user replaces the file with a symlink to /etc/passwd. The fix is to make the permission check and the file access an atomic operation (open syscall checks permissions at the moment of access, not before)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-how-does-open-design-differ-from-security-through-obscurity",
      children: "Q11: How does open design differ from security through obscurity?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Open design means the security of a system depends on the secrecy of its keys, not the secrecy of its design. AES, RSA, TLS are all published, peer-reviewed standards → they work because keys are secret, not because the algorithm is hidden. Security through obscurity (hiding the algorithm, using non-standard ports, custom encryption) provides no real security → once the design is discovered (and it will be), the system is completely vulnerable. Kerckhoffs's Principle (1883): \"A cryptosystem should be secure even if everything about the system, except the key, is public knowledge.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-walk-through-the-nist-risk-management-framework-steps",
      children: "Q12: Walk through the NIST Risk Management Framework steps."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The NIST RMF has seven steps: (1) Prepare → establish risk management roles, risk tolerance, and strategy. (2) Categorize → classify the system as Low/Moderate/High impact using FIPS 199. (3) Select → choose security controls from NIST SP 800-53 baseline for the categorization level. (4) Implement → deploy the controls in system design and configuration. (5) Assess → evaluate whether controls are effectively implemented (testing, documentation review). (6) Authorize → a designated authorizing official accepts residual risk and issues an Authority to Operate (ATO). (7) Monitor → continuous monitoring, periodic reassessment, and change management."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q13-whats-the-difference-between-a-vulnerability-a-threat-and-a-risk",
      children: "Q13: What's the difference between a vulnerability, a threat, and a risk?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A vulnerability is a weakness (unpatched software, weak password). A threat is what exploits that weakness (hacker, malware, insider). Risk is the combination: the likelihood that a threat will exploit a vulnerability, multiplied by the impact. Formula: Risk = Threat x Vulnerability x Impact. Example: A missing security patch (vulnerability) + an attacker scanning for that CVE (threat) = high risk that the system will be compromised (risk). You fix vulnerabilities to reduce risk; you can't eliminate threats."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-how-do-you-implement-separation-of-duties-in-a-devsecops-pipeline",
      children: "Q14: How do you implement separation of duties in a DevSecOps pipeline?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Separation of duties means no single person controls a critical process from start to finish. In CI/CD: Developer writes code -> QA tests (separate person) -> Security scans (automated, gated) -> Lead approves PR (different person) -> CI runs tests (automated) -> Release manager (separate person) deploys to production. No developer can unilaterally push code to production. For infrastructure: Who creates the change vs who approves it vs who implements it vs who audits the change should be different people."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-compare-stride-and-pasta-threat-modeling-approaches-when-would-you-use-each",
      children: "Q15: Compare STRIDE and PASTA threat modeling approaches. When would you use each?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " STRIDE is a threat-centric approach from Microsoft → six categories (Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation of Privilege). Fast, lightweight, good for design-phase threat identification. Best for early-stage projects with limited time. PASTA is a risk-centric approach from VerSprite → seven stages starting with business objectives and ending with quantified risk. Comprehensive but resource-intensive (weeks vs hours). Best for complex enterprise applications where security investment needs business justification. Use STRIDE for sprint-level threat modeling; use PASTA for annual application security assessments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-summary",
      children: "12. Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CIA Triad"
        }), " (Confidentiality, Integrity, Availability) defines the three primary goals of information security. Every control serves at least one."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AAA"
        }), " (Authentication, Authorization, Accounting) governs who can access what and tracks their actions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Seven Security Principles"
        }), " → Least Privilege, Defense in Depth, Economy of Mechanism, Fail-Safe Defaults, Complete Mediation, Open Design, Separation of Duties → form the foundation of secure system design."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Threat Modeling"
        }), " frameworks (STRIDE, PASTA, LINDDUN, Attack Trees) provide systematic approaches to identifying threats before they materialize."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Risk Management"
        }), " (qualitative, quantitative, NIST RMF) provides structure for prioritizing security investments under uncertainty."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Case Studies"
        }), " (Equifax, Target, Capital One) demonstrate that security failures are almost never technical → they are process failures: missed patches, overprivileged accounts, collapsed defense layers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Practical Tools"
        }), " (Wazuh, nmap, Wireshark, John/hashcat, Lynis) are essential hands-on skills for security practitioners."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-exercises",
      children: "13. Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define each element of the CIA triad and give a real-world attack against each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between RBAC and ABAC authorization models?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List and explain all seven security principles from Saltzer & Schroeder."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each STRIDE category, name the security property it violates."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the formula for SLE, ALE, and ROSI in quantitative risk assessment?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform a STRIDE analysis on an ATM (Automated Teller Machine). Identify at least one threat per category and propose a mitigation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A hospital's patient portal has no WAF, uses HTTP (not HTTPS), and stores SSNs in plaintext. Map each failure to the Defense in Depth layer it belongs to."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given: Asset value = $5M, Exposure Factor = 0.5, ARO = 0.1. Calculate SLE, ALE. If a $50K control reduces ARO to 0.01, what is the ROSI?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply LINDDUN to a mobile fitness tracking app that collects GPS location, heart rate, and sleep patterns. Identify three privacy threats."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a defense in depth strategy for a cloud-based payment processing system handling credit card data. You must address all six STRIDE categories and cover at least five independent layers. Justify each layer's failure independence from the others."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Analyze your home network or a small office network. Run nmap against it, document all open ports. Write a one-page risk assessment using qualitative methodology (identify assets, threats, vulnerabilities, likelihood, impact, and recommended controls)."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tool-practice",
      children: "Tool Practice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Install and configure a Wazuh agent on a test machine. Verify it communicates with the manager by checking agent status. Generate a test alert by creating a new file in /tmp and confirm the alert appears in the Wazuh dashboard."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
            children: "nmap -sV -A 192.168.1.1"
          }), " against your router. Identify any unexpected open ports. Research what each open service does and whether it should be exposed."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Use Wireshark/tshark to capture the TLS handshake between your browser and ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.google.com",
            children: "https://www.google.com"
          }), ". Identify the TLS version, cipher suite, and certificate details."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a test user with password \"password123\" on a Linux VM. Extract the password hash from /etc/shadow and crack it with John the Ripper using rockyou.txt. Measure how long it takes."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Run Lynis on a Linux system and achieve a hardening index of 80+ by implementing the recommended changes."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-supplementary-depth--extended-topics",
      children: "14. Supplementary Depth → Extended Topics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "141-cia-triad--detailed-control-mapping",
      children: "14.1 CIA Triad → Detailed Control Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every security control maps to one or more CIA elements. Understanding which CIA element a control serves helps prioritize investment."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Control Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Confidentiality"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Integrity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Technologies"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption (transit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Primary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Secondary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS, IPsec, SSH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption (rest)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Primary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-256, BitLocker, LUKS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Primary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-256, SHA-3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Digital Signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Primary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA, ECDSA, Ed25519"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access Control (DAC/MAC/RBAC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Primary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux ACLs, Windows NTFS, AWS IAM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iptables, pfSense, AWS SG"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WAF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Data flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ModSecurity, AWS WAF, Cloudflare"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IDS/IPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Prevention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Snort, Suricata, Wazuh"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Primary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Veeam, rsync, AWS Backup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load Balancer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Primary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAProxy, NGINX, ELB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MFA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOTP, FIDO2, Push notification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DDoS Protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Primary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloudflare, AWS Shield, Akamai"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Audit Logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Non-repudiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "auditd, Windows Event Log, SIEM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Masking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Primary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic masking, Tokenization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "142-cia-attacks--detailed-breakdown-by-attack-type",
      children: "14.2 CIA Attacks → Detailed Breakdown by Attack Type"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "CIA Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Works"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eavesdropping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passive interception of communications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet capture on public Wi-Fi"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Man-in-the-Middle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "C + I"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active interception with modification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARP spoofing + SSL stripping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Replay Attack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "I"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capturing and retransmitting valid data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replaying captured Kerberos ticket"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQL Injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "C + I"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Injecting SQL queries via user input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extracting/modifying database contents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-Site Scripting (XSS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Injecting malicious scripts into web pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stealing session cookies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-Site Request Forgery (CSRF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "I"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forcing authenticated user to perform actions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changing email address on account"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer Overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "A + EoP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overflowing buffer to crash or redirect execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gaining shell from HTTP daemon"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DDoS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overwhelming resources with traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN flood, HTTP flood, DNS amplification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ransomware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "C + I + A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypting data and demanding ransom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WannaCry, NotPetya, REvil"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Side-Channel Attack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exploiting physical characteristics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timing attacks, power analysis, Spectre"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social Engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "C + A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manipulating humans to reveal information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CEO fraud, spear phishing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Password Spraying"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trying common passwords across many accounts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testing \"Spring2024!\" against 10K accounts"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "143-aaa-protocols--detailed-comparison",
      children: "14.3 AAA Protocols → Detailed Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RADIUS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TACACS+"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kerberos"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LDAP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP (primary), TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP (primary), TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default Ports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1812 (auth), 1813 (acct)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "88"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "389 (636 LDAPS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password only (Access-Request)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire payload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full session (symmetric keys)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional (startTLS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auth + Authz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate phases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accounting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in (RADIUS Accounting)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not native"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not native"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor Support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cisco-specific"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft AD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Use Case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISP, Wi-Fi 802.1X, VPN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network device admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise SSO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directory queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Session Tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (Interim-Update)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (ticket lifetime)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RADIUS Packet Types:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Packet Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access-Request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client -> Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User authentication request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access-Accept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server -> Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auth successful"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access-Reject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server -> Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auth denied"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accounting-Request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client -> Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start/stop/interim accounting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accounting-Response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server -> Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accounting acknowledgement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access-Challenge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server -> Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MFA challenge (e.g., push notification)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RADIUS Authentication Flow (802.1X with EAP-TLS):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Supplicant        NAS/AP           RADIUS Server       PKI/CA\n   |                |                   |                 |\n   |--- EAPOL Start -->|                |                 |\n   |<-- EAP-Identity Request ---|       |                 |\n   |--- EAP-Identity Response -->|       |                 |\n   |                |--- Access-Request -->|               |\n   |                |   (EAP-Response)     |               |\n   |                |                   |--- Verify Cert ->|\n   |                |                   |<-- Cert Valid ---|\n   |<-- EAP-TLS: Server Cert ---|       |                 |\n   |--- EAP-TLS: Client Cert -->|       |                 |\n   |                |--- Access-Request -->|               |\n   |                |   (EAP-Response)     |               |\n   |                |                   |--- Verify Cert ->|\n   |<-- EAP-Success ---|<-- Access-Accept ---|              |\n   |                |                   |                 |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "144-security-principles--extended-edge-cases",
      children: "14.4 Security Principles → Extended Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Principle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Least Privilege"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service account needs to read /etc/shadow for authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use PAM with dedicated auth service; do not give web app direct shadow access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Defense in Depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All layers use the same vendor/technology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent failure domains → different vendors, different admin teams, different failure modes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Economy of Mechanism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple password check vs complex SSO federation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSO is more complex but reduces total auth points; evaluate net complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fail-Safe Defaults"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hospital fire door vs security door"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fire door fails open (life safety); security door fails closed (asset protection). Define \"safe\" per context"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Mediation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel checks permissions on open() but not on read()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure every syscall checks; Linux does this correctly via the VFS layer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Company wants to use proprietary encryption to \"hide\" algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot rely on obscurity. Use standard algorithms (AES, ChaCha20). Keys are secret, not algorithms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Separation of Duties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Startup with 3-person team → one person must wear multiple hats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use compensating controls: mandatory PR review, break-glass procedures with audit, quarterly access reviews"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "145-security-design-patterns",
      children: "14.5 Security Design Patterns"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "CIA Focus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Proxy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediary between client and server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "C + A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward proxy, reverse proxy, TLS termination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Broker"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mediates service discovery and binding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service registry, DNS, API gateway"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Guard"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single point of authentication/authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "C + I"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSO portal, OAuth authorization server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Monitor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observes and reports on system behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "I + A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intrusion detection, SIEM, audit logging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Redundancy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate critical components for failover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active-passive DB cluster, multi-region deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Checkpoint"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save state for recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "A + I"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database snapshots, transaction logs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Privilege Separation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split processes by privilege level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "C + I"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web server runs as www-data, not root"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sandbox"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolated execution environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "C + I"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container, jail, VM, seccomp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "146-security-standards-and-regulations",
      children: "14.6 Security Standards and Regulations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Standard/Regulation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Requirements"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Jurisdiction"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ISO 27001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Information Security Management System (ISMS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk assessment, controls (Annex A), continuous improvement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "International"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PCI DSS 4.0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payment card data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption, access control, network segmentation, quarterly scans, annual audit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global (card brands)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HIPAA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protected Health Information (PHI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy Rule, Security Rule (administrative, physical, technical safeguards), Breach Notification Rule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US (healthcare)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GDPR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Personal data of EU citizens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data minimization, consent, right to erasure, breach notification (72h), DPIA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EU (extraterritorial)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SOX"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial data of public companies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal controls over financial reporting, Section 404 audits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US (public companies)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FISMA / NIST RMF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US federal information systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIPS 199 categorization, NIST SP 800-53 controls, continuous monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US federal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CCPA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Personal data of California residents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer right to know, delete, opt-out of sale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "California (US)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FedRAMP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud services for US government"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Third-party assessment, continuous monitoring, reuse of authorizations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US federal cloud"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SOC 2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service organization controls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trust Services Criteria: Security, Availability, Processing Integrity, Confidentiality, Privacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US (service providers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NIST CSF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cybersecurity program improvement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify, Protect, Detect, Respond, Recover framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US (voluntary, widely adopted)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "147-nist-cybersecurity-framework-csf-20",
      children: "14.7 NIST Cybersecurity Framework (CSF) 2.0"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Controls"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Govern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context, risk management strategy, roles, policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Establish cybersecurity oversight, define risk appetite"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Identify"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset management, risk assessment, governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintain inventory, conduct risk assessments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Protect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access control, awareness, data security, maintenance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MFA, training, encryption, patching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Detect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anomalies, monitoring, continuous detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIEM, intrusion detection, alert triage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Respond"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incident management, analysis, mitigation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IR playbook, forensic analysis, containment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recover"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery planning, improvements, communications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backup restoration, lessons learned, public relations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "148-security-metrics-and-kpis",
      children: "14.8 Security Metrics and KPIs"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MTTD (Mean Time to Detect)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average time from compromise to detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 24 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shorter = better detection capabilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MTTR (Mean Time to Respond)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average time from detection to containment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 4 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shorter = faster incident response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability Remediation Rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "% of critical vulns patched within SLA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 95% within 48 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measures patch management effectiveness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Click Rate (Phishing Simulation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "% of employees who click test phishing emails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measures security awareness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alert-to-Incident Ratio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "% of security alerts that become confirmed incidents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measures detection rule quality (lower = more noise)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardening Index (Lynis)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security posture score"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measures baseline configuration security"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Privileged Account Count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of users with admin access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (< total users)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blast radius measure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Patching Coverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "% of systems with latest critical patches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 99%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measures patch deployment completeness"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "149-threat-modeling--attack-tree-security-controls-integration",
      children: "14.9 Threat Modeling → Attack Tree Security Controls Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Practical Approach → Integrating Attack Trees with Controls:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Attack Tree Node                            Control / Mitigation\n──────────────────────────────              ─────────────────────────────────\nGoal: Exfiltrate Customer DB                \n+-- OR                                       \n    +-- AND [SQL Injection]                 Prepared statements + ORM\n    |   +-- Identify injectable param       Input validation + allowlist\n    |   +-- Bypass WAF                      WAF with anomaly scoring, not just regex\n    +-- AND [Steal DB credentials]          \n    |   +-- SSH into web server             Key-only SSH, MFA, bastion host\n    |   +-- Read config file                Encrypt config files, Secrets Manager\n    +-- AND [Phish DBA]                     \n    |   +-- Craft convincing email          Email security: SPF/DKIM/DMARC\n    |   +-- Credential harvesting page      Browser isolation, MFA blocks harvesting\n    +-- [Physical break-in]                 Biometric + badge + guard + cameras\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Tree Cost-Benefit Mitigation Prioritization:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Leaf Node                  Cost to Exploit   Detection Difficulty   Cost to Mitigate   Priority\n─────────────────────────  ────────────────  ────────────────────  ─────────────────  ────────\nSQL inject vulnerable input      $0                 Low (WAF)            $5K (WAF)       HIGH\nRead unencrypted config          $0                 Low (FIM)            $2K (Vault)      HIGH\nPhish DBA credentials            $500               Low (awareness)      $20K (training)  MEDIUM\nPhysical data center access      $50K               High (guards)        $200K (locks)    LOW\n\nPriority ranking: Mitigate what can be exploited for least cost AND is cheapest to fix.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1410-password-cracking--defense-strategies",
      children: "14.10 Password Cracking → Defense Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How Password Hashes Are Stolen:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQL injection extracting database tables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compromised server reading /etc/shadow (Linux) or SAM (Windows)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Man-in-the-Middle intercepting NTLMv1/v2 challenge-response"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data breach from cloud providers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Physical access to backup tapes / discarded hard drives"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Defending Against Password Cracking:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Helps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use strong hashing algorithms"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bcrypt, Argon2id, scrypt are memory-hard and slow → thousands of years to crack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OWASP recommends Argon2id, fallback bcrypt (cost >= 10)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Add salt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents rainbow table attacks; each hash must be cracked individually"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Salt = random per-password, stored alongside hash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Add pepper"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-side secret; attacker needs both DB and server compromise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store pepper in secure vault (HSM, AWS Secrets Manager)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enforce password complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increases keyspace; passphrases > complex gibberish"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+ characters, no dictionary words minimum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rate limiting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents online brute force"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lockout after N failures, progressive delays, CAPTCHA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MFA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password alone is insufficient for access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOTP, FIDO2 WebAuthn, push notifications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Passwordless authentication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminates the password attack surface entirely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passkeys (FIDO2/WebAuthn), biometric authentication"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1411-defense-in-depth--failure-mode-analysis",
      children: "14.11 Defense in Depth → Failure Mode Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For each layer in a defense-in-depth strategy, define:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How can this layer fail?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What does the next layer do when this one fails?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Web Application → Layer Failure Cascade:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Can Fail"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Next Layer Catches"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network Firewall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Misconfigured rule allows port 3306 through"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host firewall (iptables) blocks it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAF signature doesn't cover new attack variant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input validation rejects malicious payload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate Limiting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker uses distributed botnet (10K IPs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication lockout after N failures per account"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MFA implementation bug allows bypass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization checks still limit what attacker can do"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RBAC model has privilege escalation bug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit log captures blamable evidence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validation logic has bypass (e.g., alternate encoding)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameterized queries prevent SQL injection regardless"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS certificate expires or cipher broken"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data stored encrypted at rest → decryption key is separate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logging & Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIEM ingestion pipeline fails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backups still exist → data can be restored"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backup corrupted or encrypted by ransomware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable/offline backups (3-2-1 rule) survive"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1412-risk-management--advanced-rosi-calculation",
      children: "14.12 Risk Management → Advanced ROSI Calculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-Control ROSI Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Scenario: E-commerce company processing 1M transactions/month.\nThreat: Payment card data breach.\n\nAsset Value (AV):            $5,000,000 (card data + systems + brand value)\nExposure Factor (EF):        0.6 (60% of data exposed in typical breach)\nSLE:                         $5,000,000 x 0.6 = $3,000,000\nARO (without controls):      0.2 (once every 5 years based on industry avg)\nALE (without controls):      $3,000,000 x 0.2 = $600,000/year\n\nControls Implemented:\n  A. WAF + IDS:                    $40,000/year (reduces ARO by 60%)\n  B. Encryption at rest:           $25,000/year (reduces EF by 80%)\n  C. Security awareness training:  $15,000/year (reduces ARO by 30%)\n  D. Incident response retainer:   $30,000/year (reduces SLE by 40%)\n\nCombined effect (not additive → controls interact):\n  New ARO: 0.02 (90% reduction from combination of A + C)\n  New EF:  0.12 (80% reduction from B, 40% reduction from D = 0.6 x 0.2 x 0.6 = 0.072)\n  New SLE: $5,000,000 x 0.072 = $360,000\n  New ALE: $360,000 x 0.02 = $7,200/year\n\nTotal Control Cost:           $110,000/year (A + B + C + D)\nRisk Reduction:               $600,000 - $7,200 = $592,800/year\nROSI:                         ($592,800 - $110,000) / $110,000 = 439% ROI\n\nConclusion: Strong positive ROI. Every $1 spent on security saves $4.39 in expected loss.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1413-qualitative-risk-assessment--detailed-walkthrough",
      children: "14.13 Qualitative Risk Assessment → Detailed Walkthrough"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario: Assess risk of ransomware for a small law firm."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Identify Assets"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client case files (confidential legal data)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Email system (Exchange/Office 365)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File server (shared documents)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accounting system (billing, invoices)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backup system"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Identify Threats and Vulnerabilities"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Threat"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Vulnerability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Existing Controls"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ransomware via phishing email"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No DMARC enforcement; employees not trained"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic antivirus only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ransomware via drive-by download"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No web filtering; outdated browsers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ransomware via remote desktop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDP exposed to internet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password-only, no MFA"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Determine Likelihood and Impact"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Likelihood"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Risk Level"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing leads to ransomware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70% of ransomware starts with phishing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High (5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 months of case files unrecoverable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical (20)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDP brute force leads to ransomware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDP exposed but not well-known"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High (5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full system compromise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (15)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Drive-by download malware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users browse non-work sites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial file encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (12)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Risk Treatment"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended Treatment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "New Risk Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Residual Risk"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MFA + DMARC + training + offline backups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some risk of zero-day"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close RDP port; use VPN only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very Low (2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Drive-by"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web filtering + browser isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited to unmanaged devices"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5: Residual Risk Acceptance"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The managing partner accepts residual risk of Low-Medium after controls are implemented. Annual review scheduled."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-additional-review-questions",
      children: "15. Additional Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between a qualitative and quantitative risk assessment? When would you use each?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the Capital One breach, what specific AWS metadata service endpoint was exploited? Why was IMDSv2 not used?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the 3-2-1 backup rule and why it's critical for ransomware defense."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between TLS and SSL? Why should SSL never be used?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Describe a scenario where economy of mechanism conflicts with defense in depth. How do you resolve it?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is TOCTOU? Provide a code example showing the vulnerability and the fix."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does LINDDUN differ from STRIDE? Give an example threat that LINDDUN captures but STRIDE does not."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What are the five functions of the NIST Cybersecurity Framework? Give one example control per function."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the concept of residual risk. How is it determined in the NIST RMF authorization step?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between a standard, a policy, and a guideline in security governance?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For the Target 2013 breach, identify three specific PCI DSS requirements that were violated."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How would you design a security awareness training program to reduce phishing click rates?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between RADIUS and TACACS+? When would you choose one over the other?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the role of chain of custody in security investigations and how it relates to the integrity pillar."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is cyber insurance and how does it relate to the risk transfer treatment option?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-quick-reference--key-formulas-and-acronyms",
      children: "16. Quick Reference → Key Formulas and Acronyms"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Acronym"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stands For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CIA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confidentiality, Integrity, Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core security model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication, Authorization, Accounting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STRIDE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threat modeling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PASTA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process for Attack Simulation and Threat Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threat modeling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LINDDUN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linkability, Identifiability, Non-repudiation, Detectability, Disclosure, Unawareness, Non-compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy threat modeling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DREAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Damage, Reproducibility, Exploitability, Affected Users, Discoverability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk scoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CVSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common Vulnerability Scoring System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability scoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common Vulnerabilities and Exposures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability identification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common Weakness Enumeration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weakness classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROSI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return on Security Investment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single Loss Expectancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantitative risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Annual Loss Expectancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantitative risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Annual Rate of Occurrence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantitative risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset Value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantitative risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exposure Factor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantitative risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RMF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk Management Framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIST framework"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cybersecurity Framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIST framework"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ISMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Information Security Management System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISO 27001"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy-Enhancing Technology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOCTOU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time of Check, Time of Use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability class"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RBAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Role-Based Access Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attribute-Based Access Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MFA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Factor Authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single Sign-On"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security Operations Center"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Organization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security Information and Event Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WAF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web Application Firewall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application security"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IDS/IPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intrusion Detection / Prevention System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network security"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File Integrity Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrity monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DLP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Loss Prevention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confidentiality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PII"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Personally Identifiable Information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PHI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protected Health Information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Healthcare"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DPIA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Protection Impact Assessment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GDPR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ATO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authority to Operate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIST RMF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security Assessment Report"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIST RMF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MTTD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mean Time to Detect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MTTR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mean Time to Respond"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EDR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Endpoint Detection and Response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Endpoint security"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nmap Scripting Engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network scanning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMDS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instance Metadata Service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud security"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-summary-table",
      children: "Chapter Summary Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exam / Interview Focus"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CIA Triad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three pillars: Confidentiality (secrecy), Integrity (accuracy), Availability (access)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Explain how [attack] violates which CIA element\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication (who), Authorization (what), Accounting (when)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Difference between authn and authz\" + protocols"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Least Privilege"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal permissions = limited blast radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Target 2013: what principle was violated?\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Defense in Depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple independent layers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Design a layered defense for [system]\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Economy of Mechanism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplicity = security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Why is simple more secure?\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fail-Safe Defaults"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default to secure state on failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Should this door fail open or closed?\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Mediation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check every access every time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Explain TOCTOU\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secrets are keys, not algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Kerckhoffs's Principle\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Separation of Duties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No single person has full control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"CI/CD deployment: who does what?\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STRIDE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Six threat categories by security property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Walk through STRIDE for [system]\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PASTA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seven-stage risk-centric threat modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"When would you use PASTA over STRIDE?\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Risk Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Qualitative (scales) vs Quantitative ($)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Calculate ALE and ROSI\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NIST RMF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 steps: Prepare -> Categorize -> Select -> Implement -> Assess -> Authorize -> Monitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Explain the RMF authorization process\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Password Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use bcrypt/Argon2, MFA, rate limiting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"How are passwords stored?\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references-and-further-reading",
      children: "References and Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Saltzer, J.H. and Schroeder, M.D. (1975). \"The Protection of Information in Computer Systems.\" → The original seven security principles."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Microsoft Corporation. (1999). \"The STRIDE Threat Model.\" → Original STRIDE documentation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UcedaVélez, T. and Morana, M.M. (2015). \"Risk Centric Threat Modeling: Process for Attack Simulation and Threat Analysis.\" → PASTA methodology book."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deng, M. et al. (2011). \"A Privacy Threat Analysis Framework: LINDDUN.\" → Original LINDDUN paper."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schneier, B. (1999). \"Attack Trees.\" Dr. Dobb's Journal. → Attack tree methodology."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NIST SP 800-37 Rev. 2. (2018). \"Risk Management Framework for Information Systems and Organizations.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NIST SP 800-53 Rev. 5. (2020). \"Security and Privacy Controls for Information Systems and Organizations.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NIST CSF 2.0. (2024). \"Cybersecurity Framework.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OWASP. (2024). \"Password Storage Cheat Sheet.\" → Password hashing recommendations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PCI Security Standards Council. (2022). \"PCI DSS v4.0.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "US Senate Committee on Banking, Housing, and Urban Affairs. (2014). \"Target Data Breach Hearing.\" → Congressional testimony on the Target breach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "US House Committee on Oversight and Government Reform. (2018). \"Equifax Data Breach Hearing.\" → Congressional testimony on the Equifax breach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "US Department of Justice. (2020). \"United States v. Paige Thompson.\" → Capital One breach criminal case."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17-security-tools-ecosystem--extended-reference",
      children: "17. Security Tools Ecosystem → Extended Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "171-tool-classification-by-security-domain",
      children: "17.1 Tool Classification by Security Domain"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tools"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network Scanning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nmap, Masscan, Zmap, Angry IP Scanner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host discovery, port enumeration, service detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Vulnerability Scanning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nessus, OpenVAS, Qualys, Nexpose, Nikto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated vulnerability identification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Web Application Testing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Burp Suite, OWASP ZAP, sqlmap, dirb, ffuf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web app security assessment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Password Cracking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "John the Ripper, hashcat, Hydra, Medusa, oclHashcat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash cracking, online brute force"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Packet Analysis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wireshark, tshark, tcpdump, Zeek (Bro), ngrep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network traffic inspection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Endpoint Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wazuh/OSSEC, CrowdStrike, SentinelOne, Defender"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host intrusion detection, EDR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Forensics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autopsy, Volatility, FTK Imager, dd, guymager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk and memory forensics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Log Management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splunk, ELK Stack, Graylog, Loki, Wazuh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized log aggregation and analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloud Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ScoutSuite, Prowler, CloudSploit, Pacu, CloudMapper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud infrastructure auditing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Container Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivy, Clair, Falco, Docker Bench, kube-bench"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container and Kubernetes security"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Identity & Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FreeIPA, ForgeRock, Keycloak, Authentik"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM, SSO, identity management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SIEM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splunk ES, ELK Security, Wazuh, Sentinel, QRadar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security event correlation and alerting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Threat Intelligence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MISP, OpenCTI, TheHive, YARA, STIX/TAXII"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threat intel platform, IOC management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compliance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lynis, OpenSCAP, Inspec, Chef Compliance, Wazuh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security auditing, compliance checking"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "172-nmap-scripting-engine-nse--advanced-usage",
      children: "17.2 NMAP Scripting Engine (NSE) → Advanced Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NSE Script Categories:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Scripts"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "safe"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-disruptive, unlikely to crash services"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ssl-enum-ciphers"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dns-brute"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "http-title"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "default"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Standard scripts included in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-sC"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-A"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ssh2-enum-algos"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "http-headers"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "intrusive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May crash services or trigger alerts"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "http-sql-injection"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "smb-brute"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "vuln"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check for specific vulnerabilities"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "http-vuln-cve2017-5638"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ssl-heartbleed"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "exploit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attempt exploitation (risky)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "smb-vuln-ms17-010"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "auth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bypass authentication or find credentials"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ftp-anon-login"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "http-brute"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "broadcast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network broadcasts, not target-specific"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dhcp-discover"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "nbstat"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "discovery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Information gathering"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "whois-domain"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hostmap-ip2hosts"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dos"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Denial of service tests (very risky)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "http-slowloris-check"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "malware"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect malware infections"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "http-malware-host"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "smb-known-vulns"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NSE Custom Script Example (nse_vuln_check.nse):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-- Check if server responds to HTTP TRACE method (XST vulnerability)\ndescription = [[Checks if HTTP TRACE method is enabled (XSS/Tracing vulnerability)]]\nauthor = \"Security Analyst\"\ncategories = {\"discovery\", \"safe\"}\n\nportrule = function(host, port)\n    return port.protocol == \"tcp\" and port.number == 80\nend\n\naction = function(host, port)\n    local response = http.get(host, port, \"/\")\n    if response.status then\n        local options = http.can(host, port, \"TRACE\")\n        if options then\n            return \"TRACE method enabled - XST vulnerability possible\"\n        end\n        return \"TRACE method disabled\"\n    end\nend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "173-wireshark-display-filter-cheat-sheet",
      children: "17.3 Wireshark Display Filter Cheat Sheet"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Filter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Address"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ip.addr == 10.0.0.1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic to/from 10.0.0.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ip.src == 10.0.0.0/24"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic from 10.0.0.0/24 subnet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ip.dst == 8.8.8.8"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic to 8.8.8.8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "eth.addr == 00:11:22:aa:bb:cc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic to/from MAC address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Port"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp.port == 80"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP traffic on port 80"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp.srcport == 443"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP traffic from port 443"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "udp.port == 53"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Protocol"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "http"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All HTTP traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tls"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ssl"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS/SSL traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS queries and responses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "arp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARP traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "icmp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICMP (ping) traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dhcp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DHCP traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flags"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp.flags.syn == 1 && tcp.flags.ack == 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYN packets only (connection attempts)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp.flags.reset == 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RST packets (connection resets)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp.analysis.retransmission"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP retransmissions (network issues)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Content"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "http contains \"password\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP with \"password\" in body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp.payload contains 00"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP payload with null bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "frame contains \"GET\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frames containing \"GET\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "frame.time_relative > 10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packets after 10 seconds into capture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "frame.time_delta > 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packets with >1 second gap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Expert"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp.analysis.flags"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All TCP analysis flags"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "!_ws.expert"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hide expert info (errors/warnings)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compound"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "http && ip.src == 10.0.0.1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP from 10.0.0.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "!arp && !icmp && !dns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hide background noise protocols"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "`(http"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "174-common-nmap-scan-patterns",
      children: "17.4 Common Nmap Scan Patterns"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Command"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quick scan (top ports)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "nmap -sT 192.168.1.1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast check of common ports"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Comprehensive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "nmap -sS -sV -O -A -T4 192.168.1.1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full fingerprint in 2-5 min"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stealthy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "nmap -sS -T2 --max-retries 1 192.168.1.1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow, avoid IDS detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "nmap -p- -T4 192.168.1.1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All 65535 ports (slow)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDP scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "nmap -sU --top-ports 100 192.168.1.1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP services (DNS, SNMP, DHCP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Script scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "nmap -sV --script=vuln 192.168.1.1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall evasion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "nmap -sS -f --mtu 32 192.168.1.1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fragment packets to bypass filters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subnet scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "nmap -sn 192.168.0.0/16"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discover all live hosts on /16"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple targets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "nmap -iL targets.txt -A"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan from target list file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output all formats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "nmap -oA scan_output 192.168.1.0/24"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output in .nmap, .gnmap, .xml"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "175-john-the-ripper--modes-deep-dive",
      children: "17.5 John the Ripper → Modes Deep Dive"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Crack Rate"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wordlist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--wordlist=FILE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Try each word from dictionary file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~70% (with good wordlist)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--single"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Try mangling based on user info (login, full name)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Incremental"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--incremental"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brute-force with configurable character set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5% (within time limit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Markov"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--markov"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Statistical guessing based on adjacent letter patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~15%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRINCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--prince=FILE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probability-based generation from wordlist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~15%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--rules=RULE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply word-mangling rules (leet, append, prepend)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~15% additional over wordlist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loopback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--loopback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use cracked passwords as input for further cracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5% additional"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "John Configuration Tuning (/etc/john/john.conf):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Rule example: Toggle case of first two characters\n[List.Rules:myrules]\n# Add \"123\" to end of each word\n$1$2$3\n# Toggle case of first letter\nc\n# Leet speak substitutions\nso0 si1 se3 sa4 ss5 sg9 st7 sb8\n# Prepend \"Super\" and append \"!\"\n^S^u^p^e^r $!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "176-hashcat-attack-modes",
      children: "17.6 Hashcat Attack Modes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Straight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-a 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hashcat -m 0 -a 0 hashes.txt rockyou.txt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dictionary attack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-a 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hashcat -m 0 -a 1 words1.txt words2.txt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-word passwords"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-a 3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hashcat -m 0 -a 3 ?u?l?l?l?d?d?d?d"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern-based (Upper+lower+4digits)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid (wordlist + mask)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-a 6"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hashcat -a 6 rockyou.txt ?d?d?d?d"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"password\" + 4 digits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid (mask + wordlist)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-a 7"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hashcat -a 7 ?u?l?l?l rockyou.txt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Pass\" + wordlist word"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-a 0 -r RULE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hashcat -a 0 hashes.txt -r best64.rule"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Word mangling rules"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hashcat Mask Character Sets:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Character Set"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "?l"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowercase letters (a-z)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "?l?l?l?l?l?l?l?l"
            }), " = 8 lowercase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "?u"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uppercase letters (A-Z)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "?u?l?l?l?d?d?d?d"
            }), " = \"Pass1234\""]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "?d"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Digits (0-9)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "?d?d?d?d"
            }), " = 4-digit PIN"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "?s"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Special characters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "?s"
            }), " = ", (0,jsx_runtime.jsx)(_components.code, {
              children: "!@#$%^&*()-_+="
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "?a"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All characters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "?a?a?a?a"
            }), " = 4 chars brute force"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "?h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hex lowercase (0-9, a-f)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "?h?h?h?h"
            }), " = 4 hex chars"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "?H"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hex uppercase (0-9, A-F)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as above but uppercase"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "?b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bytes 0x00-0xFF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary brute force"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom Charset:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hashcat -m 0 -a 3 -1 ?l?d hashes.txt ?1?1?1?1?1?1?1?1\n  |                                                                                \n  |-- Custom charset -1 = lowercase + digits\n  |-- Mask uses charset -1 for all 8 positions  \n  |-- Keyspace: 36^8 = 2.8 trillion combinations\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18-extended-lab-exercises--step-by-step-walkthroughs",
      children: "18. Extended Lab Exercises → Step-by-Step Walkthroughs"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lab-1-build-a-defense-in-depth-home-lab",
      children: "Lab 1: Build a Defense-in-Depth Home Lab"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Objective:"
      }), " Set up a small home lab with multiple security layers to practice defense in depth."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Virtual Machine (VirtualBox or VMware) running Ubuntu Server 22.04"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internet connection for updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Set up the base VM\n# Install Ubuntu Server 22.04 with SSH server\n\n# Step 2: Layer 1 → Host-based Firewall (iptables/nftables)\nsudo ufw enable\nsudo ufw default deny incoming\nsudo ufw default allow outgoing\nsudo ufw allow ssh\nsudo ufw allow 80/tcp\nsudo ufw allow 443/tcp\nsudo ufw status verbose\n\n# Step 3: Layer 2 → Fail2ban (brute-force protection)\nsudo apt install fail2ban -y\nsudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local\nsudo systemctl start fail2ban\nsudo systemctl enable fail2ban\n\n# Verify:\nsudo fail2ban-client status sshd\n\n# Step 4: Layer 3 → File Integrity Monitoring (AIDE)\nsudo apt install aide -y\nsudo aideinit   # Initialize database (takes several minutes)\nsudo mv /var/lib/aide/aide.db.new /var/lib/aide/aide.db\n\n# Check integrity:\nsudo aide --check\n\n# Step 5: Layer 4 → Audit logging\nsudo apt install auditd audispd-plugins -y\nsudo systemctl start auditd\nsudo systemctl enable auditd\n\n# Add audit rule for /etc/passwd monitoring\necho \"-w /etc/passwd -p wa -k passwd_changes\" | sudo tee -a /etc/audit/rules.d/audit.rules\nsudo systemctl restart auditd\n\n# Step 6: Layer 5 → Intrusion Detection with Wazuh agent\n# (See Section 8.1 for installation)\n\n# Step 7: Layer 6 → Regular backups\nsudo apt install rsync -y\n# Daily backup script:\necho '#!/bin/bash\nrsync -avz --delete /home/ user@backup-server:/backups/' | sudo tee /etc/cron.daily/backup\nsudo chmod +x /etc/cron.daily/backup\n\n# Step 8: Layer 7 → Lynis audit\nsudo apt install lynis -y\nsudo lynis audit system\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lab-2-password-policy-enforcement--crack-your-own-passwords",
      children: "Lab 2: Password Policy Enforcement → Crack Your Own Passwords"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Objective:"
      }), " Understand password strength by cracking hashes of known passwords. NEVER crack passwords you don't own."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Create test passwords of varying strengths\necho \"password123\" > /tmp/pass1.txt\necho \"P@ssw0rd!\" > /tmp/pass2.txt\necho \"MyD0gN4m3!2024\" > /tmp/pass3.txt\necho \"correct-horse-battery-staple\" > /tmp/pass4.txt\necho \"j8#mK2pL9qR!vX5n\" > /tmp/pass5.txt\n\n# Step 2: Generate MD5 hashes (use only for lab testing)\nfor f in /tmp/pass*.txt; do\n    echo \"Hash for $(cat $f):\"\n    echo -n \"$(cat $f)\" | md5sum\ndone\n\n# Step 3: Crack with John (time each)\ntime john --format=raw-md5 --wordlist=/usr/share/wordlists/rockyou.txt hashes_md5.txt\n\n# Step 4: Try SHA-512 with higher cost\n# These will take significantly longer\n\n# Expected results:\n# password123           : cracked instantly (< 1 second)\n# P@ssw0rd!            : cracked instantly (common in wordlists)\n# MyD0gN4m3!2024       : cracked with rules (minutes)\n# correct-horse-battery-staple : NOT cracked (not in any wordlist, long)\n# j8#mK2pL9qR!vX5n     : NOT cracked (random, 16 chars, all 4 char types)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lab-3-forensic-analysis-with-wireshark--detect-credential-theft",
      children: "Lab 3: Forensic Analysis with Wireshark → Detect Credential Theft"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Objective:"
      }), " Capture HTTP traffic and identify cleartext credentials."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Set up a test HTTP environment\n# Create a simple Python HTTP server (NEVER use in production)\nmkdir /tmp/webtest\ncd /tmp/webtest\necho '<html><body><form method=\"POST\" action=\"/login\">\n  Username: <input type=\"text\" name=\"username\"><br>\n  Password: <input type=\"password\" name=\"password\"><br>\n  <input type=\"submit\">\n</form></body></html>' > login.html\n\n# Step 2: Start the HTTP server (port 8080)\npython3 -m http.server 8080 &\n\n# Step 3: Start packet capture\nsudo tshark -i lo -w /tmp/http_capture.pcap -f \"tcp port 8080\" &\nsleep 2\n\n# Step 4: Simulate user login\ncurl -X POST http://127.0.0.1:8080/login \\\n  -d \"username=testuser&password=SuperSecret123%21\"\n\nsleep 2\n# Stop capture\nsudo pkill -f tshark\n\n# Step 5: Analyze capture\ntshark -r /tmp/http_capture.pcap -Y \"http.request.method == POST\" \\\n  -T fields -e http.host -e http.request.uri -e urlencoded-form.key -e urlencoded-form.value\n\n# Output:\n# 127.0.0.1:8080  /login  username  testuser\n# 127.0.0.1:8080  /login  password  SuperSecret123!\n\n# Step 6: Security lesson\necho \"MITIGATION: This is why HTTPS exists. \nWith TLS, the POST body would be encrypted. \nThe username and password would not be visible in the capture.\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lab-4-risk-assessment--small-business-case-study",
      children: "Lab 4: Risk Assessment → Small Business Case Study"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " You are hired to perform a risk assessment for \"BookNest,\" a small independent bookstore with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 Windows Server (files, inventory)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3 Windows workstations (POS, admin)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 Linux web server (e-commerce, WordPress)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 network printer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 consumer-grade router (ISP provided)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Square payment terminal for credit cards"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: External reconnaissance\nnmap -sV --script=http-headers booknest.com\n\n# Step 2: Internal scan\nnmap -sS -sV -O 192.168.1.0/24\n\n# Step 3: Web server security check\nnikto -h https://booknest.com\n\n# Step 4: WordPress vulnerability scan\nwpscan --url https://booknest.com --enumerate u,vp,t\n\n# Step 5: Security header check\ncurl -I https://booknest.com\n# Expected: Strict-Transport-Security, X-Content-Type-Options,\n# X-Frame-Options, Content-Security-Policy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Findings Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ASSET: Linux web server (192.168.1.10)\n  Scanner: Nikto\n  Finding: WordPress 5.8.3 → 47 known vulnerabilities\n  Risk: HIGH (CVE-2022-21661 SQL injection in WP_Query)\n  Recommendation: Update WordPress to latest version immediately\n  Owner: Store Manager\n  Due: 7 days\n\nASSET: Router (192.168.1.1)\n  Scanner: Nmap\n  Finding: Telnet (port 23) open → no encryption on admin interface\n  Risk: CRITICAL (credentials transmitted in cleartext)\n  Recommendation: Disable Telnet, use SSH. Change default admin password.\n  Owner: Store Manager\n  Due: 1 day\n\nASSET: POS Terminal\n  Observation: Shared Wi-Fi network with guest network\n  Risk: HIGH (card data at risk on same network as customers)\n  Recommendation: Implement separate VLAN for POS system (PCI DSS Req 1)\n  Owner: Store Manager\n  Due: 30 days\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lab-5-complete-security-audit-with-lynis--remediation-walkthrough",
      children: "Lab 5: Complete Security Audit with Lynis → Remediation Walkthrough"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Run initial audit\nsudo lynis audit system --quiet\n\n# Step 2: Identify critical findings\nsudo grep \"WARNING\\|CRITICAL\" /var/log/lynis-report.dat\n\n# Common critical findings and fixes:\n\n# Finding 1: No firewall\n# Fix:\nsudo ufw enable\nsudo ufw default deny incoming\nsudo ufw allow ssh\n\n# Finding 2: /tmp not noexec\n# Fix: Add noexec to /etc/fstab\necho \"tmpfs /tmp tmpfs defaults,noexec,nosuid,nodev 0 0\" | sudo tee -a /etc/fstab\n\n# Finding 3: Password policy not enforced\n# Fix: Install and configure pam_pwquality\nsudo apt install libpam-pwquality -y\necho \"minlen = 14\nminclass = 4\nmaxrepeat = 3\ndifok = 8\nreject_username = true\" | sudo tee -a /etc/security/pwquality.conf\n\n# Finding 4: Audit daemon not running\n# Fix:\nsudo apt install auditd -y\nsudo systemctl start auditd\nsudo systemctl enable auditd\n\n# Finding 5: Kernel hardening missing\n# Fix: Add to /etc/sysctl.d/99-security.conf\necho \"net.ipv4.conf.all.rp_filter = 1\nnet.ipv4.conf.default.rp_filter = 1\nnet.ipv4.tcp_syncookies = 1\nnet.ipv4.icmp_echo_ignore_broadcasts = 1\nnet.ipv4.conf.all.accept_source_route = 0\nnet.ipv6.conf.all.accept_source_route = 0\nkernel.randomize_va_space = 2\" | sudo tee /etc/sysctl.d/99-security.conf\nsudo sysctl -p /etc/sysctl.d/99-security.conf\n\n# Step 3: Re-run audit\nsudo lynis audit system --quiet\n# Compare hardening index before vs after\n# Typical improvement: 40-60 -> 75-85\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "19-security-principles-cross-reference-matrix",
      children: "19. Security Principles Cross-Reference Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Security Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Principle(s)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Worst Violation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Setting permissions for a new employee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least Privilege"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Granting admin \"just in case\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Designing a new microservice API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defense in Depth + Complete Mediation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single auth check at ingress only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deciding whether to use custom encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proprietary cipher that \"nobody knows\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall rule for a failing power supply"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail-Safe Defaults"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rule that allows all traffic on failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Processing EFT > $100K payment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separation of Duties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One person creates and approves payment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuring a new cloud storage bucket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least Privilege + Fail-Safe Defaults"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public-read bucket because \"easier\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reviewing a 15,000-line authentication class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Economy of Mechanism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15KLOC single class doing auth+profile+billing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Designing an audit logging system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Mediation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User action not logged because \"it's internal\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Third-party vendor integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least Privilege + Separation of Duties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full VPN access for limited functionality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Incident response plan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defense in Depth + Fail-Safe Defaults"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No backup if primary IR tool is compromised"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-example-1-threat-model-analyzer-stride",
      children: "TypeScript Example #1: Threat Model Analyzer (STRIDE)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * ThreatModelAnalyzer — STRIDE-based threat modeling engine.\n * Takes a system description with DFD elements and generates\n * categorized threats with mitigations and risk levels.\n */\n\ninterface SystemElement {\n  name: string;\n  type: 'external_entity' | 'process' | 'data_store' | 'data_flow';\n  description: string;\n}\n\ninterface SystemDescription {\n  name: string;\n  elements: SystemElement[];\n}\n\ninterface Threat {\n  category: 'S' | 'T' | 'R' | 'I' | 'D' | 'E';\n  categoryName: string;\n  property: string;\n  description: string;\n  mitigation: string;\n  risk: 'low' | 'medium' | 'high';\n  affectedElement: string;\n}\n\nconst STRIDE_CATEGORIES = [\n  { id: 'S' as const, name: 'Spoofing', property: 'Authentication' },\n  { id: 'T' as const, name: 'Tampering', property: 'Integrity' },\n  { id: 'R' as const, name: 'Repudiation', property: 'Non-Repudiation' },\n  { id: 'I' as const, name: 'Information Disclosure', property: 'Confidentiality' },\n  { id: 'D' as const, name: 'Denial of Service', property: 'Availability' },\n  { id: 'E' as const, name: 'Elevation of Privilege', property: 'Authorization' },\n];\n\nclass ThreatModelAnalyzer {\n  private threatTemplates: Record<string, Array<{ category: string; description: string; mitigation: string; risk: 'low' | 'medium' | 'high' }>> = {\n    external_entity: [\n      { category: 'S', description: 'Attacker impersonates the external entity via stolen credentials or session hijacking.', mitigation: 'Implement multi-factor authentication (MFA) and certificate-based mutual TLS.', risk: 'high' },\n      { category: 'T', description: 'Data from the external entity is tampered with in transit.', mitigation: 'Enforce TLS 1.3 with certificate pinning and message integrity checks.', risk: 'high' },\n      { category: 'R', description: 'External entity denies having sent a request or transaction.', mitigation: 'Enable digital signatures and audit logging with non-repudiation.', risk: 'medium' },\n    ],\n    process: [\n      { category: 'S', description: 'Attacker spoofs a process by exploiting unauthenticated inter-process communication.', mitigation: 'Use service-to-service authentication (mTLS, SPIFFE).', risk: 'high' },\n      { category: 'T', description: 'Malicious input is processed, causing code execution or data corruption.', mitigation: 'Implement input validation, parameterized queries, and allow-lists.', risk: 'high' },\n      { category: 'R', description: 'Process actions lack audit trails, enabling repudiation of operations.', mitigation: 'Centralized audit logging with tamper-evident logs (e.g., syslog + hash chains).', risk: 'medium' },\n      { category: 'I', description: 'Process leaks sensitive data through error messages, debug logs, or side channels.', mitigation: 'Sanitize error outputs, use structured logging without secrets, apply constant-time comparisons.', risk: 'high' },\n      { category: 'D', description: 'Process is overwhelmed by resource exhaustion (CPU, memory, file handles).', mitigation: 'Implement rate limiting, resource quotas, and auto-scaling.', risk: 'medium' },\n      { category: 'E', description: 'Process runs with excessive privileges, allowing privilege escalation.', mitigation: 'Apply least privilege principle; use containerization with read-only root filesystems.', risk: 'high' },\n    ],\n    data_store: [\n      { category: 'T', description: 'Data at rest is tampered with by an unauthorized actor.', mitigation: 'Apply integrity monitoring (tripwire, AIDE) and signed snapshots.', risk: 'high' },\n      { category: 'I', description: 'Sensitive data stored without encryption is exposed via backup compromise.', mitigation: 'Encrypt all data at rest using AES-256-GCM; encrypt backups with separate keys.', risk: 'high' },\n      { category: 'D', description: 'Data store is flooded with requests causing denial of service.', mitigation: 'Connection pooling, query optimization, read replicas, and DDoS protection.', risk: 'medium' },\n    ],\n    data_flow: [\n      { category: 'S', description: 'Data flow source is spoofed via ARP/DNS spoofing or BGP hijacking.', mitigation: 'Use DNSSEC, IPsec, or MACsec for network-level authentication.', risk: 'high' },\n      { category: 'T', description: 'Data in transit is intercepted and modified (man-in-the-middle).', mitigation: 'End-to-end encryption with TLS 1.3 and certificate validation.', risk: 'high' },\n      { category: 'I', description: 'Sensitive data in transit is eavesdropped on an unencrypted channel.', mitigation: 'Encrypt all data in transit; avoid plaintext protocols (HTTP, FTP, Telnet).', risk: 'high' },\n      { category: 'D', description: 'Network flow is flooded or disrupted, breaking communication.', mitigation: 'Redundant network paths, traffic shaping, and anti-DDoS infrastructure.', risk: 'medium' },\n    ],\n  };\n\n  analyze(system: SystemDescription): Threat[] {\n    const threats: Threat[] = [];\n\n    for (const element of system.elements) {\n      const templates = this.threatTemplates[element.type];\n      if (!templates) continue;\n\n      for (const template of templates) {\n        const categoryInfo = STRIDE_CATEGORIES.find(c => c.id === template.category)!;\n        threats.push({\n          category: template.category as Threat['category'],\n          categoryName: categoryInfo.name,\n          property: categoryInfo.property,\n          description: `[${element.name}] ${template.description}`,\n          mitigation: template.mitigation,\n          risk: template.risk,\n          affectedElement: element.name,\n        });\n      }\n    }\n\n    return threats;\n  }\n\n  groupByCategory(threats: Threat[]): Record<string, Threat[]> {\n    const grouped: Record<string, Threat[]> = {};\n    for (const threat of threats) {\n      if (!grouped[threat.categoryName]) {\n        grouped[threat.categoryName] = [];\n      }\n      grouped[threat.categoryName].push(threat);\n    }\n    return grouped;\n  }\n\n  calculateRiskScore(threats: Threat[]): { total: number; high: number; medium: number; low: number } {\n    const weights = { high: 3, medium: 2, low: 1 };\n    const counts = { high: 0, medium: 0, low: 0 };\n    for (const t of threats) {\n      counts[t.risk]++;\n    }\n    return {\n      total: counts.high * weights.high + counts.medium * weights.medium + counts.low * weights.low,\n      ...counts,\n    };\n  }\n}\n\n// Example usage\nconst system: SystemDescription = {\n  name: 'E-Commerce Platform',\n  elements: [\n    { name: 'Web Browser', type: 'external_entity', description: 'Customer web browser' },\n    { name: 'Payment Gateway', type: 'external_entity', description: 'Third-party payment processor' },\n    { name: 'Auth Service', type: 'process', description: 'Authentication and session management' },\n    { name: 'Order API', type: 'process', description: 'Order processing microservice' },\n    { name: 'User Database', type: 'data_store', description: 'Customer credentials and PII' },\n    { name: 'Payment Flow', type: 'data_flow', description: 'Credit card data transmission' },\n  ],\n};\n\nconst analyzer = new ThreatModelAnalyzer();\nconst threats = analyzer.analyze(system);\nconst grouped = analyzer.groupByCategory(threats);\nconst score = analyzer.calculateRiskScore(threats);\n\nconsole.log(`=== Threat Model: ${system.name} ===\\n`);\nfor (const [category, catThreats] of Object.entries(grouped)) {\n  console.log(`[${category}] — ${catThreats.length} threat(s)`);\n  for (const t of catThreats) {\n    console.log(`   ${t.risk.toUpperCase()}: ${t.description}`);\n    console.log(`   Mitigation: ${t.mitigation}\\n`);\n  }\n}\nconsole.log(`Risk Score: ${score.total} (High: ${score.high}, Medium: ${score.medium}, Low: ${score.low})`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-example-2-quantitative-risk-calculator",
      children: "TypeScript Example #2: Quantitative Risk Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Quantitative Risk Calculator\n * Implements SLE, ARO, ALE, and ROSI formulas per NIST SP 800-30.\n */\n\ninterface RiskInput {\n  /** Asset value in monetary units (e.g., USD) */\n  assetValue: number;\n  /** Exposure factor as a decimal (0.0 – 1.0), e.g., 0.3 = 30% loss */\n  exposureFactor: number;\n  /** Annualized rate of occurrence (e.g., 4 = four times per year) */\n  annualRateOfOccurrence: number;\n}\n\ninterface RiskOutput {\n  sle: number;\n  ale: number;\n  riskLevel: 'low' | 'medium' | 'high' | 'critical';\n}\n\ninterface RosiInput {\n  /** ALE before implementing the control */\n  aleBeforeControl: number;\n  /** ALE after implementing the control */\n  aleAfterControl: number;\n  /** Annual cost of the control */\n  annualControlCost: number;\n}\n\nclass RiskCalculator {\n  /**\n   * Single Loss Expectancy (SLE) = Asset Value × Exposure Factor\n   * Represents the monetary loss from a single incident.\n   */\n  calculateSLE(input: RiskInput): number {\n    if (input.assetValue < 0) throw new Error('Asset value must be non-negative.');\n    if (input.exposureFactor < 0 || input.exposureFactor > 1) {\n      throw new Error('Exposure factor must be between 0 and 1.');\n    }\n    return Math.round(input.assetValue * input.exposureFactor * 100) / 100;\n  }\n\n  /**\n   * Annualized Loss Expectancy (ALE) = SLE × ARO\n   * Represents the expected annual monetary loss.\n   */\n  calculateALE(input: RiskInput): number {\n    if (input.annualRateOfOccurrence < 0) {\n      throw new Error('Annual rate of occurrence must be non-negative.');\n    }\n    const sle = this.calculateSLE(input);\n    return Math.round(sle * input.annualRateOfOccurrence * 100) / 100;\n  }\n\n  /**\n   * Return on Security Investment (ROSI) = (ALE_before - ALE_after - ControlCost) / ControlCost\n   * Positive ROSI means the control is cost-effective.\n   */\n  calculateROSI(aleBeforeControl: number, aleAfterControl: number, annualControlCost: number): number {\n    if (annualControlCost <= 0) {\n      throw new Error('Control cost must be positive.');\n    }\n    const reduction = aleBeforeControl - aleAfterControl;\n    const netBenefit = reduction - annualControlCost;\n    return Math.round((netBenefit / annualControlCost) * 10000) / 100; // return as percentage\n  }\n\n  /**\n   * Compute both SLE and ALE plus a qualitative risk level.\n   */\n  assess(input: RiskInput): RiskOutput {\n    const sle = this.calculateSLE(input);\n    const ale = this.calculateALE(input);\n\n    let riskLevel: RiskOutput['riskLevel'];\n    if (ale >= 1_000_000) {\n      riskLevel = 'critical';\n    } else if (ale >= 100_000) {\n      riskLevel = 'high';\n    } else if (ale >= 10_000) {\n      riskLevel = 'medium';\n    } else {\n      riskLevel = 'low';\n    }\n\n    return { sle, ale, riskLevel };\n  }\n\n  /**\n   * Monte Carlo simulation for ALE with uncertain ARO and EF distributions.\n   * Uses a triangular distribution for stochastic modeling.\n   */\n  simulateALE(\n    assetValue: number,\n    efMin: number,\n    efMax: number,\n    efLikely: number,\n    aroMin: number,\n    aroMax: number,\n    aroLikely: number,\n    iterations: number = 10000,\n  ): { mean: number; p10: number; p90: number; stdDev: number } {\n    const results: number[] = [];\n\n    for (let i = 0; i < iterations; i++) {\n      const ef = this.triangularRandom(efMin, efMax, efLikely);\n      const aro = this.triangularRandom(aroMin, aroMax, aroLikely);\n      const sle = assetValue * ef;\n      const ale = sle * aro;\n      results.push(ale);\n    }\n\n    results.sort((a, b) => a - b);\n    const mean = results.reduce((s, v) => s + v, 0) / results.length;\n    const variance = results.reduce((s, v) => s + (v - mean) ** 2, 0) / results.length;\n    const stdDev = Math.sqrt(variance);\n\n    return {\n      mean: Math.round(mean * 100) / 100,\n      p10: Math.round(results[Math.floor(iterations * 0.1)] * 100) / 100,\n      p90: Math.round(results[Math.floor(iterations * 0.9)] * 100) / 100,\n      stdDev: Math.round(stdDev * 100) / 100,\n    };\n  }\n\n  private triangularRandom(min: number, max: number, mode: number): number {\n    const u = Math.random();\n    const f = (mode - min) / (max - min);\n    if (u < f) {\n      return min + Math.sqrt(u * (max - min) * (mode - min));\n    }\n    return max - Math.sqrt((1 - u) * (max - min) * (max - mode));\n  }\n}\n\n// Example usage\nconst calc = new RiskCalculator();\n\nconst asset: RiskInput = {\n  assetValue: 2_500_000,   // $2.5M customer database\n  exposureFactor: 0.4,      // 40% of data compromised\n  annualRateOfOccurrence: 2, // 2 expected incidents per year\n};\n\nconst sle = calc.calculateSLE(asset);\nconst ale = calc.calculateALE(asset);\nconsole.log(`SLE: $${sle.toLocaleString()}`);\nconsole.log(`ALE: $${ale.toLocaleString()}`);\n\nconst assessment = calc.assess(asset);\nconsole.log(`Risk Level: ${assessment.riskLevel.toUpperCase()}`);\n\n// ROSI: evaluate a WAF costing $50K/year that reduces ALE from $2M to $200K\nconst rosi = calc.calculateROSI(2_000_000, 200_000, 50_000);\nconsole.log(`ROSI: ${rosi}%`);\n\n// Monte Carlo simulation for uncertainty analysis\nconst sim = calc.simulateALE(2_500_000, 0.2, 0.6, 0.4, 1, 5, 2, 50000);\nconsole.log(`Simulated ALE — Mean: $${sim.mean.toLocaleString()}, P10: $${sim.p10.toLocaleString()}, P90: $${sim.p90.toLocaleString()}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-professional-security-lab-setup--build-your-practice-environment",
      children: "7. Professional Security Lab Setup — Build Your Practice Environment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A professional cyber security lab is mandatory for hands-on learning. You cannot learn security from theory alone — you must break things, analyze attacks, and build defenses in a controlled environment."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-lab-architecture-overview",
      children: "7.1 Lab Architecture Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROFESSIONAL SECURITY LAB — NETWORK TOPOLOGY\n═════════════════════════════════════════════════════════════════\n\n                   ┌─────────────────────────┐\n                   │    INTERNET / VPN        │\n                   │  (Cloud VPS + Tailscale) │\n                   └────────────┬────────────┘\n                                │\n                   ┌────────────▼────────────┐\n                   │   ROUTER / FIREWALL     │\n                   │  pfSense / OPNsense     │\n                   │  VLAN separation        │\n                   └────────────┬────────────┘\n                                │\n        ┌───────────────────────┼───────────────────────┐\n        │                       │                       │\n   ┌────▼────┐           ┌──────▼──────┐         ┌─────▼─────┐\n   │  GREEN   │           │   ORANGE    │         │   RED     │\n   │  Trusted │           │  DMZ / Lab  │         │  Attacker │\n   │  Network │           │  Services   │         │  Network  │\n   │           │           │             │         │           │\n   │ • Kali    │           │ • Metasploit│         │ • C2      │\n   │ • Windows │           │ • VulnHub   │         │ • Phishing│\n   │ • Filesvr │           │ • Web Apps  │         │ • Botnet  │\n   └───────────┘           └─────────────┘         └───────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-hardware-recommendations",
      children: "7.2 Hardware Recommendations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hardware"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Capabilities"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Minimal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8GB RAM laptop, 256GB SSD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0 (what you have)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run Kali Linux VM, basic nmap, Wireshark"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Standard"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32GB RAM desktop, 1TB NVMe, i7/Ryzen7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$800-1200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run 4-5 VMs simultaneously (Kali, Windows, Ubuntu, AD)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Professional"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64GB+ RAM, 2TB NVMe, Threadripper/i9, dedicated GPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$2000-3000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run full enterprise simulation (SIEM, EDR, domain controller, 10+ VMs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloud Hybrid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local + AWS/Azure/GCP instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$50-200/month"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scale to 50+ instances, realistic enterprise network simulation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Essential Hardware Checklist:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Computer with virtualization support (VT-x/AMD-V enabled in BIOS)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Minimum 16GB RAM (32GB recommended)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " 512GB+ SSD (1TB+ for storing VM images and PCAPs)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Second monitor (significantly improves workflow)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " USB 3.0 drive for backup of lab configurations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Spare router (TP-Link or used enterprise switch for VLAN lab)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-virtualization-platform-setup",
      children: "7.3 Virtualization Platform Setup"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Platform"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VMware Workstation Pro"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-featured lab"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$199 / Free Player"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Industry standard, snapshots, linked clones"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VirtualBox"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Budget option"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower, fewer features but works for basic labs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Proxmox VE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise lab (bare metal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free (open source)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-1 hypervisor, clustering, backups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hyper-V"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows-focused labs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free (Windows Pro)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native Windows integration, nested virtualization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ESXi Free"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise simulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free (limited)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 vCPU limit per VM, no vCenter"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Proxmox Lab Setup Script:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// proxmox-lab-setup.ts — Automated Security Lab Provisioning\n\ninterface LabVM {\n  name: string;\n  os: string;\n  ramMB: number;\n  cpuCores: number;\n  diskGB: number;\n  network: 'green' | 'orange' | 'red';\n  role: string;\n  iso_path: string;\n}\n\ninterface LabNetwork {\n  name: string;\n  vlan: number;\n  subnet: string;\n  purpose: string;\n}\n\nclass SecurityLabProvisioner {\n  private readonly labNetworks: LabNetwork[] = [\n    { name: 'Green_Trusted', vlan: 10, subnet: '10.10.10.0/24', purpose: 'Trusted internal network' },\n    { name: 'Orange_DMZ', vlan: 20, subnet: '10.10.20.0/24', purpose: 'Vulnerable services and targets' },\n    { name: 'Red_Attacker', vlan: 30, subnet: '10.10.30.0/24', purpose: 'Attacker-controlled network' },\n  ];\n\n  private readonly defaultVMs: LabVM[] = [\n    { name: 'kali-attacker', os: 'debian-12', ramMB: 4096, cpuCores: 2, diskGB: 40, network: 'red', role: 'Penetration Testing', iso_path: 'iso/kali-linux-2024.1.iso' },\n    { name: 'windows-target', os: 'win-10', ramMB: 4096, cpuCores: 2, diskGB: 60, network: 'green', role: 'Target Workstation', iso_path: 'iso/Win10_22H2.iso' },\n    { name: 'metasploitable', os: 'ubuntu-20', ramMB: 1024, cpuCores: 1, diskGB: 10, network: 'orange', role: 'Vulnerable Target', iso_path: 'iso/metasploitable3.iso' },\n    { name: 'ad-controller', os: 'win-server-22', ramMB: 4096, cpuCores: 2, diskGB: 60, network: 'green', role: 'Active Directory DC', iso_path: 'iso/WinServer2022.iso' },\n    { name: 'splunk-siem', os: 'ubuntu-22', ramMB: 8192, cpuCores: 4, diskGB: 100, network: 'green', role: 'SIEM / Log Management', iso_path: 'iso/ubuntu-22.04.iso' },\n    { name: 'pfsense-firewall', os: 'freebsd', ramMB: 2048, cpuCores: 2, diskGB: 10, network: 'green', role: 'Firewall / Router', iso_path: 'iso/pfsense-2.7.iso' },\n  ];\n\n  generateProxmoxScript(): string {\n    let script = `#!/bin/bash\n# Security Lab Auto-Provisioning Script for Proxmox VE\n# Generated: ${new Date().toISOString()}\n\n# Create VM bridges for each network\n`;\n\n    for (const net of this.labNetworks) {\n      script += `# Create bridge for ${net.name} (VLAN ${net.vlan})\nqm create 9${net.vlan}0 --name \"${net.name}-bridge\" --memory 512 --cores 1\n# Note: In production, use /etc/network/interfaces to add Linux bridge\\n`;\n    }\n\n    let vmId = 100;\n    for (const vm of this.defaultVMs) {\n      script += `\n# VM: ${vm.name} (${vm.role})\n# OS: ${vm.os} | RAM: ${vm.ramMB}MB | CPU: ${vm.cores}vCPU | Disk: ${vm.diskGB}GB\nqm create ${vmId} --name \"${vm.name}\" --memory ${vm.ramMB} --cores ${vm.cores} --net0 virtio,bridge=vmbr${this.getVLANNumber(vm.network)}\nqm set ${vmId} --ide2 ${vm.iso_path} --boot order=ide2\nqm set ${vmId} --scsihw virtio-scsi-pci --virtio0 local-lvm:${vm.diskGB}\nqm set ${vmId} --agent enabled=1\necho \"  → VM ${vm.name} (ID: ${vmId}) configured\"\n`;\n      vmId += 10;\n    }\n\n    script += `\necho \"\"\necho \"═══════════════════════════════════════════════════\"\necho \"Security Lab Provisioning Complete!\"\necho \"Total VMs: ${this.defaultVMs.length}\"\necho \"Networks: ${this.labNetworks.length} (Green/Orange/Red)\"\necho \"Next Steps:\"\necho \"  1. Start pfSense first → configure interfaces\"\necho \"  2. Start Windows Server → promote to Domain Controller\"\necho \"  3. Start Kali → verify connectivity to all networks\"\necho \"  4. Start Splunk → configure log ingestion\"\necho \"  5. Start Metasploitable → practice exploitation\"\necho \"═══════════════════════════════════════════════════\"\n`;\n    return script;\n  }\n\n  private getVLANNumber(network: string): number {\n    const map: Record<string, number> = { 'green': 10, 'orange': 20, 'red': 30 };\n    return map[network] || 1;\n  }\n\n  generateLabTopology(): string {\n    return `\n┌────────────────────────────────────────────────────────────┐\n│                  PROFESSIONAL SECURITY LAB                   │\n│                      Network Topology                        │\n├────────────────────────────────────────────────────────────┤\n│                                                            │\n│  GREEN (Trusted)          ORANGE (DMZ)    RED (Attacker)   │\n│  VLAN 10                  VLAN 20         VLAN 30          │\n│  10.10.10.0/24           10.10.20.0/24   10.10.30.0/24     │\n│                                                            │\n│  ┌──────────────┐    ┌──────────────┐  ┌──────────────┐   │\n│  │ AD Controller│    │Metasploitable│  │ Kali Linux   │   │\n│  │ 10.10.10.10  │    │ 10.10.20.50  │  │ 10.10.30.100 │   │\n│  ├──────────────┤    ├──────────────┤  ├──────────────┤   │\n│  │ Windows 10   │    │ VulnWeb App  │  │ C2 Server    │   │\n│  │ 10.10.10.20  │    │ 10.10.20.60  │  │ 10.10.30.200 │   │\n│  ├──────────────┤    └──────────────┘  └──────────────┘   │\n│  │ Splunk SIEM  │                                          │\n│  │ 10.10.10.30  │        pfSense Firewall                  │\n│  └──────────────┘    ┌──────────────────┐                  │\n│                      │ WAN: DHCP        │                  │\n│                      │ LAN: 10.10.10.1  │                  │\n│                      │ OPT1: 10.10.20.1 │                  │\n│                      │ OPT2: 10.10.30.1 │                  │\n│                      │ FW Rules:        │                  │\n│                      │  - Green → All   │                  │\n│                      │  - Orange → Green: deny             │\n│                      │  - Red → Green:   deny              │\n│                      │  - Red → Orange:  allow (targets)   │\n│                      └──────────────────┘                  │\n└────────────────────────────────────────────────────────────┘\n`;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-essential-lab-software-stack",
      children: "7.4 Essential Lab Software Stack"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tools"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Operating Systems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kali Linux, Parrot OS, Commando VM (Windows for offensive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attack platforms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Vulnerable Targets"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metasploitable 2/3, DVWA, VulnHub, HackTheBox, TryHackMe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practice targets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network Analysis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wireshark, tcpdump, Zeek/Bro, NetworkMiner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet capture and analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Vulnerability Scanners"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nessus, OpenVAS, Nuclei, Nikto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated vuln detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Exploitation Frameworks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metasploit, Empire, Covenant, Sliver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-exploitation and C2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Web Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Burp Suite Pro, OWASP ZAP, SQLMap, ffuf, dirsearch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web app testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Password Cracking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "John the Ripper, Hashcat, Hydra, Medusa"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credential attacks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SIEM & Logging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splunk Free, ELK Stack (Elastic), Wazuh, Security Onion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log analysis and detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EDR/AV Testing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Velociraptor, osquery, YARA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Endpoint detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wireless"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aircrack-ng, Wifite, Bettercap, Hak5 tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wireless security"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloud Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ScoutSuite, Prowler, CloudSploit, Pacu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud auditing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AI/ML Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adversarial Robustness Toolbox, SecML, Counterfit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI security testing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-lab-progression-path--basic-to-advanced",
      children: "7.5 Lab Progression Path — Basic to Advanced"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SECURITY LAB PROGRESSION — BASIC TO ADVANCED\n═════════════════════════════════════════════════════════════════\n\nLEVEL 1: BEGINNER (Weeks 1-4)\n─────────────────────────────────────────────────────────────────\nGoal: Understand basic tools and network concepts\nSetup:\n  □ Install VMware/VirtualBox on your main machine\n  □ Download Kali Linux VM → boot it → explore the desktop\n  □ Run: nmap -sV localhost → what services do you see?\n  □ Run: wireshark → capture loopback traffic → understand packets\n  □ Target: TryHackMe free rooms (Pre Security path)\n  \nKey Skills Gained:\n  ■ Linux command line basics (ls, cd, chmod, grep, ps, netstat)\n  ■ IP addressing, ports, protocols (TCP/UDP fundamentals)\n  ■ Basic nmap scans (SYN scan, service detection, OS detection)\n  ■ Wireshark filtering basics (tcp.port==80, http.request)\n  ■ Virtual machine management (snapshots, networking modes)\n\nLEVEL 2: INTERMEDIATE (Weeks 5-12)\n─────────────────────────────────────────────────────────────────\nGoal: Build multi-VM lab with segmentation\nSetup:\n  □ Set up pfSense/OPNsense VM with 3 networks (Green/Orange/Red)\n  □ Deploy Windows 10 target VM\n  □ Deploy Metasploitable 2 vulnerable VM\n  □ Deploy Active Directory (Windows Server 2019/2022)\n  □ Configure Splunk Free or Wazuh for log collection\n  □ Set up Kali Linux on the Red network\n  \nKey Skills Gained:\n  ■ Firewall rule creation and network segmentation\n  ■ Active Directory enumeration (LDAP, Kerberos, SMB)\n  ■ Web application testing (SQL injection, XSS, CSRF)\n  ■ Password cracking (hash extraction, cracking methodology)\n  ■ Log analysis (Splunk search, correlation rules)\n  ■ Basic exploitation (Metasploit, manual exploitation)\n\nLEVEL 3: ADVANCED (Weeks 13-24)\n─────────────────────────────────────────────────────────────────\nGoal: Enterprise simulation with SIEM, EDR, and C2\nSetup:\n  □ Deploy Elastic SIEM (Elasticsearch + Kibana + Fleet)\n  □ Install Velociraptor for endpoint visibility\n  □ Set up Cobalt Strike/Covenant/Sliver C2 framework\n  □ Deploy Windows Domain with multiple workstations\n  □ Configure Sysmon on all Windows machines\n  □ Set up attack simulations (Atomic Red Team, CALDERA)\n  □ Integrate threat intelligence feeds (MISP, OpenCTI)\n  \nKey Skills Gained:\n  ■ SIEM rule creation (Sigma rules, correlation searches)\n  ■ Threat hunting (process injection detection, persistence mechanisms)\n  ■ C2 communication detection (beaconing analysis, JA3 hashes)\n  ■ Lateral movement detection (pass-the-hash, RDP, WMI, PsExec)\n  ■ Memory forensics (Volatility, dumping lsass.exe)\n  ■ Active Directory attack paths (Kerberoasting, AS-REP roasting, DCSync)\n\nLEVEL 4: EXPERT (Week 25+)\n─────────────────────────────────────────────────────────────────\nGoal: Purple team operations, custom tooling, AI integration\nSetup:\n  □ Deploy cloud infrastructure (AWS/GCP free tier for C2 redirectors)\n  □ Build custom detection rules and automated response playbooks\n  □ Integrate AI/ML models for anomaly detection\n  □ Deploy honeypot infrastructure (T-Pot, Cowrie)\n  □ Set up continuous security validation (AttackIQ, Pentera)\n  □ Implement SOAR (Shuffle, Wazuh + TheHive + Cortex)\n  □ Cross-train: Red team → write exploits, Blue team → write detections\n  \nKey Skills Gained:\n  ■ Custom exploit development (buffer overflows, ROP chaining)\n  ■ Detection engineering (Sigma, YARA, KQL, EQL)\n  ■ Cloud security (IAM policy auditing, container escape)\n  ■ AI security (adversarial ML, model poisoning, data poisoning)\n  ■ Malware analysis (static + dynamic, unpacking, sandbox evasion)\n  ■ Zero-day research (fuzzing, patch diffing, exploit dev)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "76-lab-management-best-practices",
      children: "7.6 Lab Management Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// lab-management.ts — Security Lab Maintenance and Hygiene\n\ninterface LabSnapshot {\n  id: string;\n  name: string;\n  vmName: string;\n  created: Date;\n  description: string;\n}\n\ninterface LabHygieneCheck {\n  name: string;\n  frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly';\n  description: string;\n  automationScript?: string;\n}\n\nclass LabManagementSystem {\n  getHygieneChecks(): LabHygieneCheck[] {\n    return [\n      { name: 'Snapshot base VMs', frequency: 'weekly', \n        description: 'Take clean snapshots of all base VMs AFTER patching but BEFORE testing. Roll back after each test session.' },\n      { name: 'Revert to clean state', frequency: 'daily', \n        description: 'After each lab session, revert all VMs to clean snapshots. Never leave VMs in a compromised state.' },\n      { name: 'Isolate from production', frequency: 'daily', \n        description: 'Verify lab network is NOT bridging to your home network. Use NAT or host-only networking. Run: ping 8.8.8.8 from Kali — if it works, you are NOT isolated.' },\n      { name: 'Update VM templates', frequency: 'monthly', \n        description: 'Patch base VMs: Windows Update, apt update/upgrade for Linux, update Kali repositories.' },\n      { name: 'Disk space check', frequency: 'weekly', \n        description: 'VMs grow quickly. Compact virtual disks, delete old snapshots, archive PCAPs. Run: df -h, check VMware/VirtualBox disk usage.' },\n      { name: 'License audit', frequency: 'quarterly', \n        description: 'Verify all tools are properly licensed. Renew Burp Suite, Nessus, etc. as needed.' },\n      { name: 'Backup lab configs', frequency: 'monthly', \n        description: 'Export VM configurations, save firewall configs, backup Splunk dashboards to external drive.' },\n    ];\n  }\n\n  getLabSecurityRules(): string[] {\n    return [\n      'NEVER connect your lab to your corporate network',\n      'NEVER use your real personal accounts in lab VMs',\n      'NEVER test against systems you do not own',\n      'ALWAYS use separate VLANs for attacker/target networks',\n      'ALWAYS revert to clean snapshots after each session',\n      'ALWAYS disable the lab network when not in use',\n      'DO install updates on base VM templates monthly',\n      'DO document your lab topology and IP addresses',\n      'DO keep a lab journal recording what you broke and fixed',\n      'DO have a \"Reset Everything\" script for quick cleanup',\n    ];\n  }\n\n  generateLabJournalEntry(): string {\n    const now = new Date();\n    return `\n═══════════════════════════════════════════════════\nSECURITY LAB JOURNAL\nDate: ${now.toISOString().split('T')[0]}\nTime: ${now.toTimeString().split(' ')[0]}\n═══════════════════════════════════════════════════\n\nSESSION OBJECTIVE:\n  [What did you plan to learn/practice today?]\n\nVMs USED:\n  - [VM Name] → [IP] → [Role]\n  - [VM Name] → [IP] → [Role]\n\nCOMMANDS EXECUTED:\n  [ ] $ [command and output]\n  [ ] $ [command and output]\n\nWHAT WORKED:\n  [What did you successfully accomplish?]\n\nWHAT BROKE:\n  [What went wrong? What did you learn from it?]\n\nKEY FINDINGS:\n  [Vulnerabilities discovered, techniques learned, \n   detection rules triggered]\n\nNEXT SESSION:\n  [What will you work on next?]\n\nTIME SPENT: [hours]\n═══════════════════════════════════════════════════\n`;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "77-sample-lab-project--first-day-setup-guide",
      children: "7.7 Sample Lab Project — First Day Setup Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step: Set up your first professional security lab in 2 hours:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FIRST DAY LAB SETUP\n═══════════════════════════════════════════════════\n\nTIME: 0:00-0:15 — INSTALL VIRTUALIZATION\n─────────────────────────────────────────────────\nDownload and install VMware Workstation Player (free) or VirtualBox.\n\nConfigure host networking:\n  • VMnet1 (Host-only): 192.168.56.0/24 — for isolated lab communication\n  • VMnet8 (NAT): 192.168.100.0/24 — for internet access from VMs\n\nTIME: 0:15-0:45 — DOWNLOAD AND SET UP KALI LINUX\n─────────────────────────────────────────────────\n1. Download Kali Linux VM from: kali.org/get-kali/#kali-virtual-machines\n2. Import OVA into VMware/VirtualBox\n3. Configure VM:\n   - RAM: 4096 MB\n   - CPUs: 2\n   - Network: Host-only (VMnet1) + NAT (VMnet8)\n4. Boot Kali → credentials: kali/kali\n5. Update: sudo apt update && sudo apt full-upgrade -y\n6. Install essentials: sudo apt install -y gobuster dirsearch ffuf\n\n✓ VERIFY: Open terminal → \"ping 8.8.8.8\" → should respond\n✓ VERIFY: \"ip a\" → should show eth0 with 192.168.56.x IP\n\nTIME: 0:45-1:15 — DOWNLOAD AND SET UP METASPLOITABLE 2\n─────────────────────────────────────────────────\n1. Download from: sourceforge.net/projects/metasploitable/\n2. Import into VMware/VirtualBox\n3. Configure VM:\n   - Network: Host-only (VMnet1) ONLY (do NOT give internet access)\n   - RAM: 1024 MB\n4. Boot → login: msfadmin/msfadmin\n5. Run: ifconfig → note IP (should be 192.168.56.x)\n\n✓ VERIFY: From Kali → \"nmap -sV 192.168.56.1xx\" → ports should appear\n\nTIME: 1:15-1:30 — BASIC ATTACK SCENARIO\n─────────────────────────────────────────────────\nFrom Kali:\n  $ nmap -sV -p- 192.168.56.1xx              # Find all open ports\n  $ searchsploit vsftpd 2.3.4                 # Look for exploits\n  $ msfconsole                                # Launch Metasploit\n  msf6 > use exploit/unix/ftp/vsftpd_234_backdoor\n  msf6 > set RHOSTS 192.168.56.1xx\n  msf6 > exploit\n  # You should get a root shell on Metasploitable!\n  whoami → root\n\nTIME: 1:30-1:45 — BASIC DEFENSE\n─────────────────────────────────────────────────\n1. Revert Metasploitable to clean state\n2. From Kali: capture attack with tcpdump:\n   $ sudo tcpdump -i eth0 -w vsftpd-attack.pcap\n3. Re-run the attack\n4. Open the PCAP in Wireshark:\n   $ wireshark vsftpd-attack.pcap\n5. Filter: ftp or ftp-data → see the exploitation traffic\n\nTIME: 1:45-2:00 — FIRST DETECTION RULE\n─────────────────────────────────────────────────\nCreate a simple detection for this attack:\n  • What network signature does it leave? (unusual FTP commands)\n  • What log does it generate? (/var/log/vsftpd.log on target)\n  • Create a Sigma rule for the detection:\n  \n```yaml\ntitle: vsFTPd 2.3.4 Backdoor Exploitation\ndescription: Detects exploitation of vsFTPd 2.3.4 backdoor\nlogsource:\n  product: linux\n  service: vsftpd\ndetection:\n  selection:\n    - ':*)'\n  condition: selection\nfalsepositives:\n  - Legitimate FTP with unusual characters\nlevel: high\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TIME: 2:00 — DONE! You now have a functional security lab.\n═══════════════════════════════════════════════════"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n---\n\n## 8. AI in Cybersecurity — How Artificial Intelligence Plays a Role\n\nAI has transformed cybersecurity from reactive to predictive. Security analysts now use AI for threat detection, response automation, vulnerability discovery, and adversarial simulation. Understanding AI's role is essential for any modern security professional.\n\n### 8.1 The AI-Security Landscape\n\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI IN CYBERSECURITY — ECOSYSTEM OVERVIEW\n═════════════════════════════════════════════════════════════════"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                     ┌─────────────────────────┐\n                     │    AI IN CYBERSECURITY   │\n                     └────────────┬────────────┘\n                                  │\n        ┌─────────────────────────┼─────────────────────────┐\n        │                         │                         │\n   ┌────▼────┐             ┌──────▼──────┐           ┌─────▼─────┐\n   │ DEFENSE  │             │   OFFENSE   │           │  OPS      │\n   │ (Blue)   │             │   (Red)     │           │ (Purple)  │\n   └────┬────┘             └──────┬──────┘           └─────┬─────┘\n        │                         │                         │\n┌───────┼───────┐         ┌───────┼───────┐         ┌───────┼───────┐\n│       │       │         │       │       │         │       │       │\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "┌▼┐     ┌▼┐     ┌▼┐      ┌▼┐     ┌▼┐     ┌▼┐      ┌▼┐     ┌▼┐     ┌▼┐\n│ML for │Anomaly│SEIM AI │Auto-  │AI-    │AI-    │AI-   │Phish-│Model │\n│Detect │Detect │Analyst │Exploit│Pwnd   │Phish  │assist│Detect│Monit │\n└─┬─────┴─┬─────┴─┬─────┴─┬─────┴─┬─────┴─┬─────┴─┬─────┴─┬─────┴─┬──┘\n│       │       │       │       │       │       │       │       │\nMalware  Net     Log     Auto-   Auto-   Smart   Alert   Phish   Adver-\nDetect   Detect  Correl   pwn     matic   Phish   Triage  Page    sarial\n(CNN)    (AE)    (GNN)    (RL)   (LLM)   (GenAI)  (NLP)   Detect  Robust\n(CNN)   (GAN)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n### 8.2 AI-Enhanced Defense (Blue Team)\n\n\n| AI Technique | Application | Example Tool | How It Works |\n|-------------|------------|-------------|--------------|\n| **Deep Learning (CNN)** | Malware detection from binary bytes | MalConv, EMBER | CNN processes raw bytes of executables to classify malicious vs benign |\n| **Autoencoders** | Anomaly detection on network traffic | DeepLog, AI2 | Learns \"normal\" traffic patterns; flags deviations as potential attacks |\n| **Graph Neural Networks** | Attack path detection in AD | BloodHound + ML | Models Active Directory as graph; predicts privilege escalation paths |\n| **Natural Language Processing** | Phishing email detection | PhishAI, abnormal detection | BERT/GPT models analyze email text for phishing indicators |\n| **Reinforcement Learning** | Automated incident response | SOAR platforms | RL agent learns optimal response actions based on attack type and context |\n| **Time-Series Forecasting** | DDoS prediction | Cloudflare ML | LSTM models predict traffic spikes and block before impact |\n| **Generative AI (LLM)** | SOC analyst co-pilot | Microsoft Security Copilot, Splunk AI | LLMs summarize incidents, write detection rules, suggest remediation steps |\n\n**AI-Based Malware Detection — TypeScript:**\n\n```typescript\n// ai-malware-detector.ts — Deep Learning Based Malware Detection\n\ninterface FileFeatures {\n  entropy: number;           // Shannon entropy (packed/encrypted files have high entropy)\n  fileSize: number;          // Bytes\n  sectionCount: number;      // Number of PE sections\n  importCount: number;       // Number of imported functions\n  suspiciousAPIs: string[];  // Detected suspicious API calls\n  has_tls: boolean;          // Has TLS (Thread Local Storage) callbacks\n  has_overlay: boolean;      // Has data appended after PE signature\n  machine: string;           // Target architecture\n  compileTimestamp: string;  // PE compile timestamp\n}\n\ninterface MalwarePrediction {\n  probability: number;       // 0.0 (benign) to 1.0 (malicious)\n  confidence: number;        // 0.0 to 1.0\n  topFeatures: string[];     // Most influential features for this decision\n  suggestedAction: 'allow' | 'quarantine' | 'sandbox' | 'block';\n}\n\nclass AIMalwareDetector {\n  // Feature weights trained on millions of samples (simulated)\n  private readonly FEATURE_WEIGHTS: Record<string, number> = {\n    'entropy_high': 0.85,\n    'suspicious_api_count': 0.75,\n    'tls_callbacks': 0.90,\n    'overlay_data': 0.60,\n    'section_anomaly': 0.80,\n    'compile_timestamp_anomaly': 0.55,\n    'import_anomaly': 0.65,\n  };\n\n  predict(features: FileFeatures): MalwarePrediction {\n    let score = 0;\n    let featureCount = 0;\n    const topFeatures: string[] = [];\n\n    // 1. Entropy analysis — packed malware has entropy > 7.5\n    if (features.entropy > 7.5) {\n      score += this.FEATURE_WEIGHTS['entropy_high'];\n      topFeatures.push(`High entropy (${features.entropy.toFixed(2)}) — possible packed/encrypted payload`);\n      featureCount++;\n    }\n\n    // 2. Suspicious API calls\n    const apiBlacklist = ['CreateRemoteThread', 'WriteProcessMemory', 'VirtualAllocEx', \n                          'NtUnmapViewOfSection', 'SetWindowsHookEx', 'RegSetValue'];\n    const foundAPIs = features.suspiciousAPIs.filter(api => apiBlacklist.includes(api));\n    if (foundAPIs.length >= 3) {\n      score += this.FEATURE_WEIGHTS['suspicious_api_count'];\n      topFeatures.push(`${foundAPIs.length} suspicious API calls: ${foundAPIs.join(', ')}`);\n      featureCount++;\n    }\n\n    // 3. TLS Callbacks — commonly used by malware for anti-debugging\n    if (features.has_tls) {\n      score += this.FEATURE_WEIGHTS['tls_callbacks'];\n      topFeatures.push('TLS callbacks present — common anti-analysis technique');\n      featureCount++;\n    }\n\n    // 4. Overlay data — data appended after PE signature (common in malware droppers)\n    if (features.has_overlay) {\n      score += this.FEATURE_WEIGHTS['overlay_data'];\n      topFeatures.push('Overlay data detected — possible appended payload');\n      featureCount++;\n    }\n\n    // 5. Section count anomaly (too few or too many)\n    if (features.sectionCount < 3 || features.sectionCount > 10) {\n      score += this.FEATURE_WEIGHTS['section_anomaly'];\n      topFeatures.push(`Unusual section count: ${features.sectionCount}`);\n      featureCount++;\n    }\n\n    // 6. Compile timestamp analysis — future timestamps = forged\n    if (features.compileTimestamp) {\n      const compileDate = new Date(features.compileTimestamp);\n      if (compileDate > new Date() || compileDate < new Date('2000-01-01')) {\n        score += this.FEATURE_WEIGHTS['compile_timestamp_anomaly'];\n        topFeatures.push(`Suspicious compile timestamp: ${features.compileTimestamp}`);\n        featureCount++;\n      }\n    }\n\n    // 7. Statistical model — section entropy variance\n    if (features.entropy > 7.0 && features.entropy < 7.2) {\n      score += 0.3; // Mild suspicion\n    }\n\n    // Calculate final probability\n    const maxScore = Object.values(this.FEATURE_WEIGHTS).reduce((a, b) => a + b, 0);\n    const probability = Math.min(score / maxScore, 1.0);\n    const confidence = Math.min(featureCount / Object.keys(this.FEATURE_WEIGHTS).length, 1.0);\n\n    return {\n      probability: Math.round(probability * 1000) / 1000,\n      confidence: Math.round(confidence * 1000) / 1000,\n      topFeatures,\n      suggestedAction: probability >= 0.8 ? 'block' : probability >= 0.6 ? 'quarantine' : probability >= 0.4 ? 'sandbox' : 'allow',\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-ai-enhanced-attack-red-team",
      children: "8.3 AI-Enhanced Attack (Red Team)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI is also used offensively. Security professionals must understand these techniques to defend against them."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "AI Attack Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Countermeasure"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AI-Powered Phishing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLMs generate highly personalized, grammatically perfect phishing emails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom GPT + OSINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI-based phishing detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adversarial Examples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small perturbations to input that cause ML models to misclassify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foolbox, CleverHans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adversarial training"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Automated Exploit Discovery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RL agents learn to find vulnerabilities in software"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FuzzRL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fuzzing with coverage guidance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AI C2 Communication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI-generated traffic that mimics legitimate patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Statistical traffic analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Model Inversion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract training data from ML models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIRAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Differential privacy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Generative Malware"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI-generated malware that evades signature detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral detection (not signature)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deepfake Social Engineering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI-generated voice/video for vishing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ElevenLabs voice clone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verification code words"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Adversarial Phishing Generator (Educational Only):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ai-phishing-simulator.ts — AI-Generated Phishing for Red Team Training (AUTHORIZED USE ONLY)\n\ninterface PhishingTarget {\n  name: string;\n  email: string;\n  company: string;\n  role: string;\n  interests: string[];\n  recentActivity: string[];\n  colleagues: string[];\n}\n\ninterface PhishingTemplate {\n  subject: string;\n  body: string;\n  fromName: string;\n  fromEmail: string;\n  urgencyLevel: 'low' | 'medium' | 'high' | 'critical';\n  pretext: string;\n}\n\nclass AIPhishingSimulator {\n  /**\n   * Generate a personalized phishing template for authorized red team exercises.\n   * WARNING: For authorized security testing ONLY. Unauthorized use is illegal.\n   */\n  generatePhishing(target: PhishingTarget): PhishingTemplate {\n    // Use target OSINT to craft context-aware pretext\n    const pretext = this.buildPretext(target);\n    \n    const urgencyPhrases = [\n      'requires immediate attention',\n      'action needed within 24 hours',\n      'time-sensitive security update',\n      'urgent compliance requirement',\n    ];\n\n    const subject = `${pretext.action}: ${this.truncate(target.recentActivity[0] || 'Important Update')}`;\n\n    const body = `Hi ${target.name.split(' ')[0]},\n\nI'm reaching out regarding ${pretext.context}. ${pretext.request}.\n\n${pretext.consequence}\n\nPlease complete this at your earliest convenience — ${urgencyPhrases[Math.floor(Math.random() * urgencyPhrases.length)]}.\n\nBest,\n${this.generateFromName(target)}`;\n\n    return {\n      subject,\n      body,\n      fromName: this.generateFromName(target),\n      fromEmail: this.generateSpoofedEmail(target),\n      urgencyLevel: 'high',\n      pretext: pretext.type,\n    };\n  }\n\n  private buildPretext(target: PhishingTarget): {\n    type: string;\n    action: string;\n    context: string;\n    request: string;\n    consequence: string;\n  } {\n    // AI uses the target's OSINT to construct a believable scenario\n    if (target.role.toLowerCase().includes('admin') || target.role.toLowerCase().includes('it')) {\n      return {\n        type: 'IT Security Alert',\n        action: 'Security Patch Required',\n        context: `a critical vulnerability (CVE-2024-XXXX) affecting all systems we use at ${target.company}. As part of our ${target.interests[0] || 'security'} team, `,\n        request: 'I need you to verify your access credentials to ensure your account is not affected by the breach',\n        consequence: 'Failure to verify within 24 hours will result in temporary account suspension as a precautionary measure.',\n      };\n    }\n    if (target.role.toLowerCase().includes('finance') || target.role.toLowerCase().includes('account')) {\n      return {\n        type: 'Vendor Payment Update',\n        action: 'Payment Confirmation Required',\n        context: `an update to our vendor payment system that affects all ${target.company} financial operations`,\n        request: 'Please confirm your banking details and outstanding invoices via the secure portal below',\n        consequence: 'Delayed confirmation may result in payment holds for all pending invoices.',\n      };\n    }\n    return {\n      type: 'Internal Policy Update',\n      action: 'Policy Acknowledgment Required',\n      context: `recent changes to ${target.company}'s information security policy that affects your role as ${target.role}`,\n      request: 'Please review and acknowledge the updated policy via the link below',\n      consequence: 'Access to company resources will be restricted until acknowledgment is complete.',\n    };\n  }\n\n  private generateFromName(target: PhishingTarget): string {\n    const sources = [\n      `${target.colleagues[0] || 'IT Support'}`,\n      `${target.company} Security Team`,\n      `${target.company} HR Department`,\n    ];\n    return sources[Math.floor(Math.random() * sources.length)];\n  }\n\n  private generateSpoofedEmail(target: PhishingTarget): string {\n    const domains = [`${target.company.toLowerCase().replace(/\\s+/g, '')}.com`,\n                     `security-${target.company.toLowerCase().replace(/\\s+/g, '')}.com`];\n    return `security@${domains[0]}`;\n  }\n\n  private truncate(str: string): string {\n    return str.length > 60 ? str.substring(0, 57) + '...' : str;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-ai-security-operations-center-soc--the-ai-analyst",
      children: "8.4 AI Security Operations Center (SOC) — The AI Analyst"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern SOCs use AI to augment human analysts. The AI handles Level 1 triage (80% of alerts are false positives), freeing humans for Level 2+ deep investigations."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI SOC Analyst Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AI-POWERED SOC ALERT TRIAGE\n═══════════════════════════════════════════════════\n\nRAW ALERT (from EDR/Network/SIEM)\n  ↓\nSTEP 1: AI ENRICHMENT (5ms)\n  ┌─────────────────────────────────────────────┐\n  │ ■ IP reputation check (VirusTotal, AbuseIPDB)│\n  │ ■ User behavior baseline deviation score     │\n  │ ■ Asset criticality (is this a domain cont?) │\n  │ ■ MITRE ATT&CK technique mapping             │\n  │ ■ Historical context (similar alerts before?)│\n  └─────────────────────────────────────────────┘\n  ↓\nSTEP 2: AI TRIAGE (50ms)\n  ┌─────────────────────────────────────────────┐\n  │ Score: 0-100                               │\n  │ 0-30 → Auto-close (benign)                 │\n  │ 30-60 → Auto-investigate + suggest          │\n  │ 60-85 → Escalate to L1 analyst with summary │\n  │ 85-100 → Escalate to L2 with priority       │\n  └─────────────────────────────────────────────┘\n  ↓\nSTEP 3: AI INVESTIGATION (2-30 seconds)\n  ┌─────────────────────────────────────────────┐\n  │ ■ Trace process ancestry (parent → child)   │\n  │ ■ Check 30-day process history              │\n  │ ■ Review network connections (IP, DNS, HTTP) │\n  │ ■ Check file reputation (hash lookup)        │\n  │ ■ Query threat intelligence feeds           │\n  │ ■ Generate natural language summary          │\n  └─────────────────────────────────────────────┘\n  ↓\nSTEP 4: AI RECOMMENDATION\n  ┌─────────────────────────────────────────────┐\n  │ Suggested actions:                          │\n  │ □ Isolate endpoint                          │\n  │ □ Disable user account                      │\n  │ □ Block IP/domain (firewall)                │\n  │ □ Rollback file changes                     │\n  │ □ Run memory scan                           │\n  │ □ Preserve forensic evidence                │\n  └─────────────────────────────────────────────┘\n  ↓\nHUMAN ANALYST REVIEW (30-180 seconds instead of 15-30 minutes)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI SOC Analyst — TypeScript:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ai-soc-analyst.ts — AI-Powered Security Operations Center Analyst\n\ninterface SecurityAlert {\n  id: string;\n  source: 'EDR' | 'SIEM' | 'Firewall' | 'Network' | 'Email';\n  severity: 'info' | 'low' | 'medium' | 'high' | 'critical';\n  title: string;\n  description: string;\n  timestamp: Date;\n  ip: string;\n  user: string;\n  deviceName: string;\n  processName: string;\n  fileHash: string;\n  mitreTechnique: string[];\n}\n\ninterface AlertEnrichment {\n  ipReputation: number; // 0 (clean) to 100 (malicious)\n  userRiskScore: number; // 0 to 100\n  assetCriticality: 'low' | 'medium' | 'high' | 'critical';\n  similarAlerts: number; // count in last 7 days\n  historicalUserBaseline: string; // description of normal behavior\n}\n\ninterface AIAnalysis {\n  triageScore: number; // 0-100\n  recommendation: 'auto_close' | 'auto_investigate' | 'escalate_l1' | 'escalate_l2';\n  summary: string;\n  mitreMapping: string[];\n  suggestedActions: string[];\n  confidenceScore: number;\n}\n\nclass AISOCAnalyst {\n  private readonly MITRE_ATTACK_MAP: Record<string, string[]> = {\n    'powershell': ['T1059.001', 'T1086'],\n    'wmi': ['T1047'],\n    'winrm': ['T1021.006'],\n    'schtasks': ['T1053.005'],\n    'regsvr32': ['T1218.010'],\n    'rundll32': ['T1218.011'],\n    'mshta': ['T1218.005'],\n    'certutil': ['T1105'],\n    'bitsadmin': ['T1197'],\n    'cmstp': ['T1191'],\n  };\n\n  analyze(alert: SecurityAlert): AIAnalysis {\n    const enrichment = this.enrich(alert);\n    const score = this.calculateScore(alert, enrichment);\n    \n    return {\n      triageScore: score,\n      recommendation: this.getRecommendation(score),\n      summary: this.generateSummary(alert, enrichment),\n      mitreMapping: this.mapMitreTechniques(alert),\n      suggestedActions: this.getSuggestedActions(alert, score),\n      confidenceScore: Math.min(0.95, score / 100 + 0.3),\n    };\n  }\n\n  private enrich(alert: SecurityAlert): AlertEnrichment {\n    return {\n      ipReputation: this.checkIPReputation(alert.ip),\n      userRiskScore: this.getUserRiskScore(alert.user),\n      assetCriticality: this.getAssetCriticality(alert.deviceName),\n      similarAlerts: this.getSimilarAlertCount(alert),\n      historicalUserBaseline: this.getUserBaseline(alert.user),\n    };\n  }\n\n  private calculateScore(alert: SecurityAlert, enrichment: AlertEnrichment): number {\n    let score = 0;\n\n    // 1. Alert severity from source system\n    const severityScores: Record<string, number> = { 'info': 0, 'low': 10, 'medium': 30, 'high': 60, 'critical': 80 };\n    score += severityScores[alert.severity] || 0;\n\n    // 2. IP reputation\n    if (enrichment.ipReputation > 70) score += 25;\n    else if (enrichment.ipReputation > 40) score += 10;\n\n    // 3. Process name analysis — suspicious processes\n    const suspiciousProcesses = ['powershell.exe', 'cmd.exe', 'wscript.exe', 'cscript.exe', \n                                 'regsvr32.exe', 'rundll32.exe', 'mshta.exe', 'certutil.exe'];\n    if (suspiciousProcesses.some(p => alert.processName.toLowerCase().includes(p))) {\n      score += 20;\n    }\n\n    // 4. Time anomaly — alerts at 3 AM are more suspicious\n    const hour = alert.timestamp.getHours();\n    if (hour >= 0 && hour <= 5) score += 10;\n\n    // 5. Asset criticality\n    if (enrichment.assetCriticality === 'critical') score += 20;\n    else if (enrichment.assetCriticality === 'high') score += 10;\n\n    // 6. User risk score\n    score += enrichment.userRiskScore * 0.2;\n\n    // 7. Alert frequency — if many similar alerts, could be actual attack\n    if (enrichment.similarAlerts > 10) score += 15;\n    if (enrichment.similarAlerts > 50) score += 10;\n\n    return Math.min(100, Math.round(score));\n  }\n\n  private getRecommendation(score: number): AIAnalysis['recommendation'] {\n    if (score >= 85) return 'escalate_l2';\n    if (score >= 60) return 'escalate_l1';\n    if (score >= 30) return 'auto_investigate';\n    return 'auto_close';\n  }\n\n  private generateSummary(alert: SecurityAlert, enrichment: AlertEnrichment): string {\n    return `Alert from ${alert.source}: \"${alert.title}\" on ${alert.deviceName} by ${alert.user}.\n    IP ${alert.ip} has ${enrichment.ipReputation > 50 ? 'poor' : 'good'} reputation.\n    Asset criticality: ${enrichment.assetCriticality}.\n    This is 1 of ${enrichment.similarAlerts} similar alerts in the past 7 days.`;\n  }\n\n  private mapMitreTechniques(alert: SecurityAlert): string[] {\n    const techniques: string[] = [];\n    for (const [process, ttp] of Object.entries(this.MITRE_ATTACK_MAP)) {\n      if (alert.processName.toLowerCase().includes(process)) {\n        techniques.push(...ttp);\n      }\n    }\n    return techniques.length > 0 ? techniques : ['T1078 (Valid Accounts)']; // Default guess\n  }\n\n  private getSuggestedActions(alert: SecurityAlert, score: number): string[] {\n    const actions: string[] = [];\n    if (score >= 60) actions.push('Isolate endpoint from network');\n    if (score >= 40) actions.push('Collect process memory dump');\n    if (alert.ip && alert.ip !== '127.0.0.1') actions.push('Block IP at firewall');\n    if (alert.user) actions.push('Verify user with out-of-band communication');\n    actions.push('Create forensic timeline (Plaso)');\n    return actions;\n  }\n\n  private checkIPReputation(ip: string): number {\n    // In production: query AbuseIPDB, VirusTotal, AlienVault OTX\n    return 30; // Placeholder — simulate medium reputation\n  }\n\n  private getUserRiskScore(user: string): number {\n    // In production: query UEBA system for user risk score\n    return 15; // Placeholder\n  }\n\n  private getAssetCriticality(deviceName: string): 'low' | 'medium' | 'high' | 'critical' {\n    // In production: query CMDB for asset classification\n    return 'medium'; // Placeholder\n  }\n\n  private getSimilarAlertCount(alert: SecurityAlert): number {\n    // In production: query SIEM for similar alerts in time window\n    return 3; // Placeholder\n  }\n\n  private getUserBaseline(user: string): string {\n    return `${user} typically logs in from 9 AM-6 PM, accesses CRM and email only.`;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-ai-security-challenges--adversarial-machine-learning",
      children: "8.5 AI Security Challenges — Adversarial Machine Learning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "While AI enhances security, AI systems themselves are vulnerable to attacks."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Surface of ML Systems:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AI SECURITY — ML ATTACK SURFACE\n═══════════════════════════════════════════════════\n\n                           ┌──────────────────┐\n                           │   TRAINING DATA   │\n                           ├──────────────────┤\n                    ┌──────┤ Data Poisoning    │\n                    │      │ Backdoor Attacks  │\n                    │      │ Label Flipping   │\n                    │      └────────┬─────────┘\n                    │               │\n┌───────────────────▼──┐   ┌───────▼──────────┐\n│    FEATURE EXTRACTION│   │   MODEL TRAINING  │\n├──────────────────────┤   ├──────────────────┤\n│ Feature Manipulation │   │ Model Stealing   │\n│ Adversarial Perturb  │   │ Membership Inf   │\n└──────────────────────┘   └───────┬──────────┘\n                                   │\n                    ┌──────────────▼──────────┐\n                    │   INFERENCE / DEPLOY    │\n                    ├─────────────────────────┤\n                    │ Evasion Attacks         │\n                    │ Adversarial Examples    │\n                    │ Model Inversion         │\n                    └─────────────────────────┘\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ML Attack Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Defense"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Poisoning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker injects malicious samples into training data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model learns wrong patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data validation, robust aggregation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Backdoor Attack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker inserts a trigger that causes misclassification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model works normally but fails on triggered inputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neural cleanse, pruning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Evasion (Adversarial Examples)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small perturbations to input cause misclassification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware evades ML detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adversarial training, defensive distillation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Model Inversion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker extracts training data from model outputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy violation (medical, financial data leaked)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Differential privacy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Membership Inference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker determines if a specific sample was in training data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy violation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Differential privacy, regularization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Model Stealing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker extracts model parameters via API queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP theft, competitive advantage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query limiting, watermarking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gradient Leakage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker recovers training data from shared gradients"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Federated learning privacy breach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient perturbation, secure aggregation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "86-building-an-ai-security-system--end-to-end-example",
      children: "8.6 Building an AI Security System — End-to-End Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ai-security-system.ts — Complete AI Security Pipeline\n\ninterface SecurityEvent {\n  timestamp: Date;\n  source: string;\n  eventType: string;\n  data: Record<string, any>;\n}\n\ninterface FeatureVector {\n  normalized: number[];\n  labels: string[];\n}\n\nclass AIBasedSecuritySystem {\n  private model: AISecurityModel;\n  private anomalyDetector: AnomalyDetector;\n  private socAnalyst: AISOCAnalyst;\n\n  constructor() {\n    this.model = new AISecurityModel();\n    this.anomalyDetector = new AnomalyDetector();\n    this.socAnalyst = new AISOCAnalyst();\n  }\n\n  processEvent(event: SecurityEvent): AnalysisResult {\n    // Step 1: Extract features\n    const features = this.extractFeatures(event);\n    \n    // Step 2: ML classification\n    const mlPrediction = this.model.predict(features.toArray());\n    \n    // Step 3: Anomaly detection\n    const anomalyScore = this.anomalyDetector.score(event);\n    \n    // Step 4: Context enrichment\n    const context = this.enrichContext(event);\n    \n    // Step 5: Combine signals into final verdict\n    return this.combineSignals(mlPrediction, anomalyScore, context);\n  }\n\n  private extractFeatures(event: SecurityEvent): FeatureVector {\n    // Normalize raw event into ML-compatible feature vector\n    const features: number[] = [\n      this.hourOfDay(event.timestamp),\n      this.dayOfWeek(event.timestamp),\n      event.source === 'EDR' ? 1 : 0,\n      event.source === 'SIEM' ? 1 : 0,\n      this.hashString(event.eventType),\n      this.countOccurrences(event.eventType, 3600), // last hour\n    ];\n    return {\n      normalized: this.normalize(features),\n      labels: ['hour', 'day_of_week', 'is_edr', 'is_siem', 'event_type_hash', 'frequency_1h'],\n    };\n  }\n\n  private combineSignals(\n    mlPrediction: MLResult,\n    anomalyScore: number,\n    context: any,\n  ): AnalysisResult {\n    const finalScore = (\n      mlPrediction.probability * 0.5 +\n      anomalyScore * 0.3 +\n      (context.assetCriticality === 'critical' ? 20 : 0) / 100 * 0.2\n    );\n\n    // Alert only if combined score above threshold\n    if (finalScore > 0.7) {\n      return {\n        alert: true,\n        score: Math.round(finalScore * 100),\n        recommendation: finalScore > 0.9 ? 'block' : 'investigate',\n        summary: `AI detected anomalous ${context.eventType} from ${context.source} with ${Math.round(finalScore * 100)}% confidence. ML model: ${Math.round(mlPrediction.probability * 100)}%, Anomaly score: ${Math.round(anomalyScore * 100)}%`,\n        evidence: {\n          mlPrediction,\n          anomalyScore,\n          features: context.featureLabels,\n        },\n      };\n    }\n\n    return {\n      alert: false,\n      score: Math.round(finalScore * 100),\n      recommendation: 'allow',\n      summary: 'Event evaluated as benign by AI pipeline',\n      evidence: { mlPrediction, anomalyScore },\n    };\n  }\n\n  private hourOfDay(date: Date): number { return date.getHours() / 23; }\n  private dayOfWeek(date: Date): number { return date.getDay() / 6; }\n  private hashString(str: string): number {\n    let hash = 0;\n    for (let i = 0; i < str.length; i++) hash = ((hash << 5) - hash) + str.charCodeAt(i);\n    return Math.abs(hash) % 100 / 100;\n  }\n  private countOccurrences(eventType: string, seconds: number): number {\n    return Math.random() * 50 / 100; // Placeholder\n  }\n  private normalize(features: number[]): number[] {\n    const max = Math.max(...features, 1);\n    return features.map(f => f / max);\n  }\n  private enrichContext(event: SecurityEvent): any {\n    return { ...event.data, source: event.source, eventType: event.eventType, featureLabels: [] };\n  }\n}\n\nclass AISecurityModel {\n  predict(features: number[]): MLResult {\n    // In production: load trained model (TensorFlow.js, ONNX, custom)\n    const weights = features.map(() => Math.random());\n    const probability = weights.reduce((a, b) => a + b, 0) / weights.length;\n    return { probability, classification: probability > 0.5 ? 'malicious' : 'benign', confidence: 0.85 };\n  }\n}\n\nclass AnomalyDetector {\n  score(event: SecurityEvent): number {\n    // Autoencoder-based anomaly scoring\n    return Math.random(); // Placeholder\n  }\n}\n\ninterface MLResult {\n  probability: number;\n  classification: 'benign' | 'malicious';\n  confidence: number;\n}\n\ninterface AnalysisResult {\n  alert: boolean;\n  score: number;\n  recommendation: 'allow' | 'investigate' | 'block';\n  summary: string;\n  evidence: any;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "87-recommended-ai-security-tools--learning-path",
      children: "8.7 Recommended AI Security Tools & Learning Path"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Skill Level"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TensorFlow / PyTorch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build ML models for security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TensorFlow.js"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run ML models in browser/Node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ONNX Runtime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-platform ML inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OpenAI / Claude / Gemini"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM for SOC analysis, report generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free/Paid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beginner"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Microsoft Security Copilot"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI co-pilot for security operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Paid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beginner"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Splunk AI Assistant"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI-assisted SIEM queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Paid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Elastic AI Assistant"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI-powered security analytics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free/Paid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adversarial Robustness Toolbox (ART)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test ML models against attacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CleverHans"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adversarial example generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Foolbox"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adversarial attack toolkit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Counterfit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated AI security testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SecML"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure machine learning library"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
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
            children: "CIA Triad (Confidentiality, Integrity, Availability)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply to every security control decision — ask which pillar each control serves"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AAA Framework (Authentication, Authorization, Accounting)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use RADIUS for Wi-Fi/VPN auth, TACACS+ for network device admin, Kerberos for AD environments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security Principles (Least Privilege, Defense in Depth, etc.)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design systems with default-deny, layered controls, and minimum permissions for every entity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Threat Modeling (STRIDE, PASTA, LINDDUN, Attack Trees)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conduct threat models during design phase — map threats per DFD element and score with DREAD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Risk Management (Qualitative/Quantitative, NIST RMF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calculate ALE and ROSI to justify security investments; use NIST RMF for compliance-driven environments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security Controls & Policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement administrative, technical, and physical controls aligned with organizational policies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI in Cybersecurity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ML for malware detection, SOC triage automation, and anomaly detection; defend against adversarial ML"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CIA Triad:"
        }), " Confidentiality (encryption, access control), Integrity (hashing, digital signatures), Availability (redundancy, DDoS protection) — every security control maps to one or more of these three pillars. Trade-offs between them require careful balancing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AAA Framework:"
        }), " Authentication (who you are — password, TOTP, biometrics), Authorization (what you can do — RBAC, ABAC, PBAC), Accounting (what you did — logs, SIEM). Protocols: RADIUS (Wi-Fi/VPN), TACACS+ (network devices), Kerberos (Active Directory)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security Principles:"
        }), " Least Privilege (minimum permissions), Defense in Depth (layered controls), Fail-Safe Defaults (deny by default), Economy of Mechanism (simple is secure), Complete Mediation (verify every access), Open Design (security through transparency), Psychological Acceptability (usable security), Separation of Duties (split critical operations), and least common mechanism."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Threat Modeling:"
        }), " STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, DoS, Elevation of Privilege) — apply per DFD element. PASTA (7-step risk-centric methodology). LINDDUN (privacy-specific threats). Attack Trees (AND/OR decomposition). Process: define scope → decompose → identify threats → rank → document → mitigate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Risk Management:"
        }), " Quantitative (SLE/ALE/ROSI with Monte Carlo simulation) and Qualitative (heat maps, ordinal scales). NIST RMF 7-step process (Prepare → Categorize → Select → Implement → Assess → Authorize → Monitor). Risk treatment: Mitigate, Accept, Transfer, Avoid, Escalate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security Policies:"
        }), " Hierarchical (Policy → Standard → Procedure → Guideline). Common policies include Acceptable Use, Password, Incident Response, Data Classification, Business Continuity, Vendor, Remote Access, and Social Media policies."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security Controls:"
        }), " Administrative (policies, training, background checks), Technical (firewalls, encryption, SIEM), Physical (guards, locks, cameras). Preventive, Detective, Corrective, Deterrent, and Compensating categories."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Core Security Processes:"
        }), " Vulnerability Management (identify → assess → remediate → verify), Patch Management (test → deploy → confirm), Change Management (request → review → approve → implement → review), Incident Response (Prepare → Detect → Analyze → Contain → Eradicate → Recover → Post-Mortem)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Professional Security Lab:"
        }), " Build a multi-VM environment with VLAN segmentation (Green/Trusted, Orange/DMZ, Red/Attacker). Use Proxmox or VMware. Progression: Beginner (TryHackMe, basic tools) → Intermediate (AD lab with SIEM) → Advanced (EDR, C2, purple team) → Expert (AI integration, custom tooling). Always isolate from production, use snapshots, document everything."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AI in Cybersecurity:"
        }), " ML for defense (malware detection with CNN, anomaly detection with autoencoders, phishing detection with NLP, SOC triage with AI). AI for offense (automated phishing generation, adversarial examples, deepfake social engineering). ML model vulnerabilities (data poisoning, evasion attacks, model inversion, membership inference). AI SOC workflow cuts triage time from 15-30 minutes to 30-180 seconds."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is NOT a pillar of the CIA triad?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Confidentiality"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Integrity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Accountability"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Availability"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What protocol is the default authentication protocol in Microsoft Active Directory?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) RADIUS"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) TACACS+"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Kerberos"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) LDAP"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which security principle states that every entity should operate with the minimum set of permissions necessary?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Defense in Depth"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Least Privilege"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Separation of Duties"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Fail-Safe Defaults"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In STRIDE threat modeling, what does the 'E' stand for?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Encryption"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Elevation of Privilege"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Enterprise Security"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Endpoint Security"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the formula for Annualized Loss Expectancy (ALE)?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) ALE = AV × EF"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) ALE = SLE × ARO"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) ALE = AV / EF"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) ALE = SLE / ARO"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is a quantitative risk analysis technique?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Risk heat map"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Monte Carlo simulation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Delphi method"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Likelihood × Impact matrix"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the purpose of the \"Fail-Safe Defaults\" principle?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The system should always be available"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Access should be denied unless explicitly granted"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) All data should be encrypted by default"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Backups must be maintained at all times"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which authorization model uses user+resource+environment attributes to make decisions?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) RBAC"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) DAC"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) MAC"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) ABAC"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a professional security lab, what is the recommended network architecture?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Single flat network for simplicity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Three segmented VLANs (Green/Orange/Red) with firewall rules"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Direct internet connection for all VMs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) All VMs isolated from each other"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is an adversarial example in the context of AI security?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) A type of malware that targets AI systems"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Small perturbations to input that cause ML models to misclassify"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) A hostile prompt given to an LLM"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Training data that contains malicious samples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the primary benefit of AI integration in SOC operations?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Replacing all human analysts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Reducing alert triage time from 15-30 minutes to 30-180 seconds"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Eliminating all false positives"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Automating patch management"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which AI technique is most commonly used for malware detection from raw binary files?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Natural Language Processing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Convolutional Neural Networks (CNN)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Reinforcement Learning"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Graph Neural Networks"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between STRIDE and PASTA?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) PASTA is threat-centric; STRIDE is vulnerability-centric"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) PASTA includes risk analysis; STRIDE focuses on threat categories per element"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) STRIDE is for web apps; PASTA is for network security"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) There is no difference — they are the same methodology"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is a data poisoning attack on ML systems?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Attacker causes data to become corrupted during storage"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Attacker injects malicious samples into training data to corrupt the model"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Attacker steals training data via SQL injection"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Attacker encrypts training data for ransom"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the recommended progression path for building security lab skills?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Expert → Advanced → Intermediate → Beginner"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Beginner (basic tools) → Intermediate (AD lab + SIEM) → Advanced (EDR + C2) → Expert (AI integration)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Start with enterprise tools first"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Only use cloud labs, no local VMs needed"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is a correct application of defense in depth?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Single firewall at the network perimeter"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Password-only authentication"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Firewall + WAF + rate limiting + MFA + encryption + monitoring"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Encrypting all data at rest"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What does the \"Separation of Duties\" principle prevent?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Unauthorized data access by external attackers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) A single person having too much power to abuse the system"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) System administrators from doing their jobs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Data encryption key loss"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the context of AI for red teams, what is an AI-powered phishing attack?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Using AI to detect phishing emails"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Using LLMs to generate personalized, grammatically perfect phishing emails"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Using machine learning to block spam"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Using computer vision to read CAPTCHAs"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the purpose of taking VM snapshots in a security lab?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) To save disk space"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) To revert to a clean state after testing compromised systems"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) To increase VM performance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) To share VMs with other users"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the main vulnerability of SMS 2FA in the context of the CIA triad?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) It violates confidentiality because SMS can be intercepted"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) It violates availability because SMS might not be delivered"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) It violates integrity because SMS messages can be modified"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) All of the above"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Quiz Answers"
      }), "\n1. C, 2. C, 3. B, 4. B, 5. B, 6. B, 7. B, 8. D, 9. B, 10. B, 11. B, 12. B, 13. B, 14. B, 15. B, 16. C, 17. B, 18. B, 19. B, 20. D\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions-1",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the CIA triad and give a real-world attack that violates each pillar."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List the three AAA components and describe a protocol for each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between qualitative and quantitative risk assessment? When would you use each?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List and explain 5 of Saltzer & Schroeder's security design principles."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the STRIDE threat modeling methodology and explain which STRIDE categories apply to each DFD element type."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between RADIUS, TACACS+, and Kerberos?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the NIST RMF seven-step process."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is ROSI and how is it calculated?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List 5 types of security controls and give an example of each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how AI enhances blue team operations and red team operations differently."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-exercises",
      children: "Practical Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Set Up Your First Security Lab:"
          }), " Follow the First Day Lab Setup guide in Section 7.7. Install VMware/VirtualBox, Kali Linux, and Metasploitable 2. Successfully exploit vsFTPd backdoor and capture the traffic in Wireshark. Document every step in your lab journal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Threat Model a Web Application:"
          }), " Choose a simple web application (e.g., a todo app, note-taking app). Draw a Data Flow Diagram (DFD) with at least 4 external entities, 4 processes, 3 data stores, and 5 data flows. Apply STRIDE to each element and identify at least 10 threats. Document mitigations for each threat."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Perform a Risk Assessment:"
          }), " Choose a real or hypothetical system (e.g., a hospital patient portal, an e-commerce site). Complete a quantitative risk assessment:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify 5 assets and estimate their value"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Determine exposure factor and ARO for each"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Calculate SLE and ALE"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Propose controls and calculate ROSI"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create a risk heat map"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "AI Security Tool Exploration:"
          }), " Use the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AIMalwareDetector"
          }), " class from Section 8.2 to analyze at least 5 files from your computer (or use sample PE files). For each file:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Calculate the entropy"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check for suspicious API imports"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run through the prediction pipeline"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document whether the prediction matches the ground truth (actual malicious/benign status)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Lab Progression Plan:"
          }), " Based on Section 7.5 (Lab Progression Path), assess your current skill level (Beginner/Intermediate/Advanced/Expert). Create a 12-week plan to move to the next level, including:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Specific VMs to set up"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tools to learn"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Labs to complete (TryHackMe, Hack The Box)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Weekly time commitment"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Success metrics for each week"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Password Security Audit:"
          }), " Create a TypeScript script using the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PasswordStrengthCalculator"
          }), " concepts from the AI security section to analyze your own password habits:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Count how many services you use"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Estimate how many unique passwords you have"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Calculate your credential reuse ratio"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify which accounts share passwords"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create a plan to transition to a password manager"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems-1",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Security Policy Creation:"
          }), " Write a complete Acceptable Use Policy (AUP) for a small business with 50 employees. Include: scope, policy statements, acceptable/unacceptable uses, monitoring provisions, enforcement, and reporting procedures. Follow the policy hierarchy (Policy → Standard → Procedure → Guideline)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Incident Response Plan:"
          }), " For a ransomware attack on a small business:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Write a detailed IR plan following NIST SP 800-61"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include: preparation, detection & analysis, containment/eradication/recovery, post-incident activity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Specify roles, tools, communication templates, and evidence preservation procedures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create a \"runbook\" for the first 60 minutes of the incident"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Network Security Assessment:"
          }), " Given the following network topology, identify at least 10 security issues:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Network: 192.168.1.0/24 (single flat network)\n- Windows 10 workstation (no firewall, single user admin)\n- Ubuntu web server (port 80 open to internet, no WAF)\n- Network printer (default password)\n- WiFi: WPA2-PSK with password \"password123\"\n- No logging enabled\n- No antivirus\n- All devices can reach each other\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ML Security Analysis:"
          }), " For a fraud detection ML model used by a bank:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify 3 potential adversarial attacks on this system"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Describe the impact of each attack (financial, reputational, regulatory)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Propose mitigations for each attack"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Design a monitoring system to detect when the model is under attack"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems-1",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Build a Complete Security Operations Center (SOC) Lab:"
          }), " Deploy the full lab architecture from Section 7 including:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "pfSense with 3 VLANs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Active Directory domain controller"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Windows 10 workstations joined to domain"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Splunk Free or Elastic SIEN collecting all logs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kali Linux on attacker VLAN"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generate attacks from Kali → detect in SIEM"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create at least 5 detection rules (Sigma rules)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document the complete setup with screenshots"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "AI-Powered Threat Detection System:"
          }), " Build a TypeScript application combining:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "AISOCAnalyst"
            }), " for alert triage"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "AIMalwareDetector"
            }), " for file analysis"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "AIBasedSecuritySystem"
            }), " for pipeline orchestration"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Custom anomaly detection using statistical methods (z-score, moving average)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Real-time dashboard visualization (use a simple web framework)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Feed the system simulated security events and demonstrate end-to-end processing"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Security Lab Automation:"
          }), " Write a complete automation script (TypeScript → PowerShell/Bash) that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Creates the full lab topology (VMs, networks, firewall rules)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Installs and configures all tools"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sets up the SIEM to receive logs from all VMs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Deploys detection rules"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validates the setup with a test attack"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Includes a \"reset everything\" command"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Red Team vs Blue Team AI Challenge:"
          }), " Design and run a competition:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Red Team (AI): Use the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AIPhishingSimulator"
            }), " to craft targeted phishing emails"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Blue Team (AI): Use the phishing detection techniques from Section 8.2 to detect them"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Score: True positives, false positives, detection latency"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run 10 rounds and analyze which AI strategies work best for both sides"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document findings and create a defense playbook"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Zero Trust Implementation Plan:"
          }), " Based on the principles from this chapter, design a Zero Trust architecture for a small company (100 employees, hybrid work):"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Network segmentation (micro-segmentation)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identity-based access control"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Device trust (device posture checks)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Continuous verification (not just at login)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Data classification and protection"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Monitoring and analytics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementation timeline and cost estimate"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Full Incident Response Exercise:"
          }), " Create a tabletop exercise scenario:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Scenario: Ransomware attack on a hospital's patient records system"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Inject 1: Initial detection (EDR alert on encryption behavior)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Inject 2: Spread to domain controller"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Inject 3: Backup system also encrypted"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Inject 4: Attacker demands $5M Bitcoin ransom"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Inject 5: Patient data leaked on dark web"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Exercise guide: Roles, injects, expected actions, decision points, debrief questions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Post-exercise: Improvement plan with specific action items"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File Statistics:"
        }), " This chapter now contains over 4,500 lines covering the complete cybersecurity fundamentals syllabus — CIA triad, AAA, security principles, threat modeling, risk management, security policies & controls, professional lab setup, AI in cybersecurity, adversarial ML, and full hands-on exercises."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following diagram illustrates the CIA triad, its supporting controls, the attacks that violate each pillar, and the security mechanisms that enforce them."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph CIA[\"CIA Triad\"]\n        C[Confidentiality] -->|protected by| Enc[Encryption]\n        I[Integrity] -->|protected by| Hash[Hashing]\n        A[Availability] -->|protected by| Red[Redundancy]\n    end\n\n    subgraph Attacks[\"Common Attacks\"]\n        C -->|violated by| Ca[Data Breach / Eavesdropping]\n        I -->|violated by| Ia[Unauthorized Modification]\n        A -->|violated by| Aa[DDoS / Ransomware]\n    end\n\n    subgraph Controls[\"Security Controls\"]\n        Enc -->|ensures| Secrecy[Secrecy]\n        Hash -->|ensures| Trust[Trustworthiness]\n        Red -->|ensures| Uptime[Continuity]\n    end\n\n    style C fill:#e3f2fd,stroke:#1565c0,color:#000\n    style I fill:#e8f5e9,stroke:#2e7d32,color:#000\n    style A fill:#fff3e0,stroke:#e65100,color:#000\n    style Ca fill:#ffebee,stroke:#c62828,color:#000\n    style Ia fill:#ffebee,stroke:#c62828,color:#000\n    style Aa fill:#ffebee,stroke:#c62828,color:#000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stride-per-element-mapping",
      children: "STRIDE Per-Element Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This diagram maps each DFD element type (External Entity, Process, Data Store, Data Flow) to the STRIDE categories that apply during threat modeling, based on Microsoft's official STRIDE per-element methodology."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Legend[\"STRIDE Categories\"]\n        S[Spoofing]\n        T[Tampering]\n        R[Repudiation]\n        I[Information Disclosure]\n        D[Denial of Service]\n        E[Elevation of Privilege]\n    end\n\n    subgraph DFD_Elements[\"DFD Elements\"]\n        EE[External Entity]\n        Proc[Process]\n        DS[Data Store]\n        DF[Data Flow]\n    end\n\n    EE -->|applicable| S\n    EE -->|applicable| T\n    EE -->|applicable| R\n\n    Proc -->|applicable| S\n    Proc -->|applicable| T\n    Proc -->|applicable| R\n    Proc -->|applicable| I\n    Proc -->|applicable| D\n    Proc -->|applicable| E\n\n    DS -->|applicable| T\n    DS -->|applicable| I\n    DS -->|applicable| D\n\n    DF -->|applicable| S\n    DF -->|applicable| T\n    DF -->|applicable| I\n    DF -->|applicable| D\n\n    style S fill:#ffcdd2,stroke:#c62828,color:#000\n    style T fill:#f8bbd0,stroke:#ad1457,color:#000\n    style R fill:#e1bee7,stroke:#6a1b9a,color:#000\n    style I fill:#bbdefb,stroke:#1565c0,color:#000\n    style D fill:#b2dfdb,stroke:#00695c,color:#000\n    style E fill:#ffe0b2,stroke:#e65100,color:#000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File Statistics:"
        }), " This chapter contains over 2000 lines covering the complete cybersecurity fundamentals syllabus."]
      }), "\n"]
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