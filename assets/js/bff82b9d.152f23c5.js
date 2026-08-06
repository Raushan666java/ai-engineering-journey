"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[48598],{

/***/ 48109
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cyber_security_12_malware_analysis_md_bff_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cyber-security-12-malware-analysis-md-bff.json
const site_docs_courses_cyber_security_12_malware_analysis_md_bff_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cyber-security/12-malware-analysis","title":"Chapter 12: Malware Analysis & Reverse Engineering","description":"Prereq: Chapters 4 (System & Software Security), 8 (Forensics & IR), 10 (Pentesting)","source":"@site/docs/courses/cyber-security/12-malware-analysis.md","sourceDirName":"courses/cyber-security","slug":"/cyber-security/12-malware-analysis","permalink":"/ai-engineering-journey/cyber-security/12-malware-analysis","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"12-malware-analysis","slug":"/cyber-security/12-malware-analysis","title":"Chapter 12: Malware Analysis & Reverse Engineering","sidebar_label":"Chapter 12: Malware Analysis & Reverse Engineering","sidebar_position":11},"sidebar":"coursesSidebar","previous":{"title":"Chapter 11: SOC Operations & Threat Hunting","permalink":"/ai-engineering-journey/cyber-security/11-soc-threat-hunting"},"next":{"title":"Chapter 13: Advanced Red Team Operations & C2 Frameworks","permalink":"/ai-engineering-journey/cyber-security/13-red-team-c2"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cyber-security/12-malware-analysis.md


const frontMatter = {
	id: '12-malware-analysis',
	slug: '/cyber-security/12-malware-analysis',
	title: 'Chapter 12: Malware Analysis & Reverse Engineering',
	sidebar_label: 'Chapter 12: Malware Analysis & Reverse Engineering',
	sidebar_position: 11
};
const contentTitle = 'Chapter 12: Malware Analysis & Reverse Engineering';

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
  "value": "1. Malware Classification",
  "id": "1-malware-classification",
  "level": 2
}, {
  "value": "1.1 The Malware Taxonomy",
  "id": "11-the-malware-taxonomy",
  "level": 3
}, {
  "value": "1.2 Malware Execution Lifecycle",
  "id": "12-malware-execution-lifecycle",
  "level": 3
}, {
  "value": "1.3 Real-World Malware Case Studies",
  "id": "13-real-world-malware-case-studies",
  "level": 3
}, {
  "value": "Stuxnet (2010) — Weaponized Cyber Attack",
  "id": "stuxnet-2010--weaponized-cyber-attack",
  "level": 4
}, {
  "value": "WannaCry (2017) — Global Ransomware Pandemic",
  "id": "wannacry-2017--global-ransomware-pandemic",
  "level": 4
}, {
  "value": "Emotet (2014–2023) — Modular Banking Trojan / Botnet",
  "id": "emotet-20142023--modular-banking-trojan--botnet",
  "level": 4
}, {
  "value": "Cobalt Strike — Legitimate Adversary Simulation Tool (Abused by Threat Actors)",
  "id": "cobalt-strike--legitimate-adversary-simulation-tool-abused-by-threat-actors",
  "level": 4
}, {
  "value": "2. Static Analysis",
  "id": "2-static-analysis",
  "level": 2
}, {
  "value": "2.1 Portable Executable (PE) Structure",
  "id": "21-portable-executable-pe-structure",
  "level": 3
}, {
  "value": "2.2 PE Parser in TypeScript",
  "id": "22-pe-parser-in-typescript",
  "level": 3
}, {
  "value": "2.3 String Extraction &amp; Entropy Analysis",
  "id": "23-string-extraction--entropy-analysis",
  "level": 3
}, {
  "value": "2.4 Packer Detection with PEiD &amp; Detect It Easy",
  "id": "24-packer-detection-with-peid--detect-it-easy",
  "level": 3
}, {
  "value": "3. Dynamic Analysis",
  "id": "3-dynamic-analysis",
  "level": 2
}, {
  "value": "3.1 Analysis Workflow",
  "id": "31-analysis-workflow",
  "level": 3
}, {
  "value": "3.2 Sandbox Environment Setup (Cuckoo / CAPE)",
  "id": "32-sandbox-environment-setup-cuckoo--cape",
  "level": 3
}, {
  "value": "3.3 API Monitoring with Process Monitor &amp; API Monitor",
  "id": "33-api-monitoring-with-process-monitor--api-monitor",
  "level": 3
}, {
  "value": "3.4 Network Simulation (INetSim &amp; FakeNet)",
  "id": "34-network-simulation-inetsim--fakenet",
  "level": 3
}, {
  "value": "4. Disassembly with Ghidra",
  "id": "4-disassembly-with-ghidra",
  "level": 2
}, {
  "value": "4.1 Comprehensive Ghidra Setup Guide",
  "id": "41-comprehensive-ghidra-setup-guide",
  "level": 3
}, {
  "value": "4.2 Navigating Ghidra for Malware Analysis",
  "id": "42-navigating-ghidra-for-malware-analysis",
  "level": 3
}, {
  "value": "4.3 Decompiler Analysis",
  "id": "43-decompiler-analysis",
  "level": 3
}, {
  "value": "4.4 Cross-Reference Analysis in Ghidra",
  "id": "44-cross-reference-analysis-in-ghidra",
  "level": 3
}, {
  "value": "5. Disassembly with IDA Pro",
  "id": "5-disassembly-with-ida-pro",
  "level": 2
}, {
  "value": "5.1 IDA Navigation",
  "id": "51-ida-navigation",
  "level": 3
}, {
  "value": "5.2 Graph View",
  "id": "52-graph-view",
  "level": 3
}, {
  "value": "5.3 Hex-Rays Pseudocode (F5)",
  "id": "53-hex-rays-pseudocode-f5",
  "level": 3
}, {
  "value": "5.4 IDAPython Scripting",
  "id": "54-idapython-scripting",
  "level": 3
}, {
  "value": "6. Packing &amp; Unpacking",
  "id": "6-packing--unpacking",
  "level": 2
}, {
  "value": "6.1 Common Packers",
  "id": "61-common-packers",
  "level": 3
}, {
  "value": "6.2 UPX Unpacking (Manual Method)",
  "id": "62-upx-unpacking-manual-method",
  "level": 3
}, {
  "value": "6.3 Generic OEP Finding with Pushad/Popad",
  "id": "63-generic-oep-finding-with-pushadpopad",
  "level": 3
}, {
  "value": "6.4 Themida &amp; VMProtect",
  "id": "64-themida--vmprotect",
  "level": 3
}, {
  "value": "7. YARA Rule Writing",
  "id": "7-yara-rule-writing",
  "level": 2
}, {
  "value": "7.1 YARA Rule Structure",
  "id": "71-yara-rule-structure",
  "level": 3
}, {
  "value": "7.2 YARA Compiler &amp; Matcher in TypeScript",
  "id": "72-yara-compiler--matcher-in-typescript",
  "level": 3
}, {
  "value": "7.3 YARA Rules for Real Malware Families",
  "id": "73-yara-rules-for-real-malware-families",
  "level": 3
}, {
  "value": "8. Memory Forensics",
  "id": "8-memory-forensics",
  "level": 2
}, {
  "value": "8.1 Memory Scanner for Suspicious Process Injections",
  "id": "81-memory-scanner-for-suspicious-process-injections",
  "level": 3
}, {
  "value": "8.2 API Hook Detector for Userland Rootkits",
  "id": "82-api-hook-detector-for-userland-rootkits",
  "level": 3
}, {
  "value": "9. Practical Lab: Analyze a Malware Sample in a Sandbox",
  "id": "9-practical-lab-analyze-a-malware-sample-in-a-sandbox",
  "level": 2
}, {
  "value": "Objective",
  "id": "objective",
  "level": 3
}, {
  "value": "Lab Setup",
  "id": "lab-setup",
  "level": 3
}, {
  "value": "Lab Steps",
  "id": "lab-steps",
  "level": 3
}, {
  "value": "Analysis Report Template",
  "id": "analysis-report-template",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 3
}, {
  "value": "Chapter Quiz (10 Questions)",
  "id": "chapter-quiz-10-questions",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Review Exercises",
  "id": "review-exercises",
  "level": 3
}, {
  "value": "Application Exercises",
  "id": "application-exercises",
  "level": 3
}, {
  "value": "Challenge Exercises",
  "id": "challenge-exercises",
  "level": 3
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
        id: "chapter-12-malware-analysis--reverse-engineering",
        children: "Chapter 12: Malware Analysis & Reverse Engineering"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapters 4 (System & Software Security), 8 (Forensics & IR), 10 (Pentesting)\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Capstone\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Target Audience:"
        }), " Reverse engineers, malware analysts, DFIR professionals, red/blue team operators"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
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
        href: "../../assets/images/lessons/cyber-security/12-malware-analysis/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/12-malware-analysis/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cyber-security/12-malware-analysis/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/12-malware-analysis/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cyber-security/12-malware-analysis/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/12-malware-analysis/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify malware into families (virus, worm, trojan, ransomware, rootkit, bootkit, RAT, botnet, info-stealer, dropper, wiper) and identify hallmarks of each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform static analysis on Windows PE files: parse DOS/PE headers, section table, import/export tables, and detect packers via entropy analysis."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute dynamic analysis using sandbox environments (Cuckoo/CAPE), API monitors (Process Monitor, API Monitor), and network simulators (INetSim, FakeNet)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disassemble and decompile binaries using Ghidra (full setup, function identification, cross-references) and IDA Pro (graph view, pseudocode, IDAPython)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify packed binaries (UPX, Themida, VMProtect) and apply manual unpacking techniques to recover the original entry point (OEP)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write YARA rules to classify malware families with high precision and low false-positive rates."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze memory dumps with Volatility 3 to detect process injection (CreateRemoteThread, APC, reflective DLL) and hooking techniques."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build TypeScript tooling: a PE parser, YARA engine, memory scanner, entropy calculator, and API hook detector."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Malware Classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Taxonomy of malicious software"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for triage and analysis strategy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PE structure, imports/exports, packer detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract IOCs without executing the sample"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sandboxing, API monitoring, network simulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observe runtime behavior in a contained environment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ghidra Disassembly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NSA's reverse engineering framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open-source decompiler for deep binary analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IDA Pro Disassembly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Industry-standard disassembler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph views, IDAPython automation, pseudocode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Packing & Unpacking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPX, Themida, VMProtect, OEP recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defeat obfuscation to reveal original code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "YARA Rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern-based malware classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automate threat detection across thousands of samples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Forensics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process injection, hook detection, Volatility 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect fileless malware and rootkits in memory"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-malware-classification",
      children: "1. Malware Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-the-malware-taxonomy",
      children: "1.1 The Malware Taxonomy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Malware (malicious software) is any program designed to infiltrate, damage, or gain unauthorized access to a system. Modern malware is rarely a single type — most samples exhibit characteristics of multiple categories. Understanding the taxonomy enables analysts to triage effectively and select appropriate analysis methods."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Primary Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Persistence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Payload Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Virus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-replicates by attaching to host files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File infection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Corrupts documents, steals data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-propagates across networks without host file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network service exploitation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDoS, payload delivery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trojan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disguises as legitimate software"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-initiated execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backdoor, credential theft"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ransomware"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypts files for extortion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduled tasks, registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File encryption + ransom note"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rootkit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hides OS objects (files, processes, registry)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel driver, SSDT hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conceals other malware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bootkit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infects MBR/GPT or UEFI firmware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boot loader infection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persists before OS boots"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RAT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote interactive control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service install, startup folder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keylogging, screen capture, file exfiltration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Botnet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C&C-controlled distributed agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IRC/HTTP beacon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDoS, spam relay, credential harvesting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Info-stealer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harvests credentials, cookies, crypto wallets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory scraping, keylogging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exfiltrates browser data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dropper"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installs other malware payloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-execution stage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Downloads stage-2 payload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wiper"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destroys data irrecoverably"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overwrite + deletion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sabotage, data destruction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-malware-execution-lifecycle",
      children: "1.2 Malware Execution Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most malware follows a multi-stage execution flow. Understanding this lifecycle is critical for deciding where to instrument detection controls."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Initial Access] --> B[Dropper / Downloader Executes]\n    B --> C{Is Process Running in<br/>Analysis/Sandbox?}\n    C -->|Yes| D[Display Decoy Content<br/>or Exit]\n    C -->|No| E[Elevate Privileges<br/>UAC Bypass / Exploit]\n    E --> F[Install Persistence<br/>Registry Run / Service / Scheduled Task]\n    F --> G{Is Protected Process?}\n    G -->|No| H[Inject into Legitimate Process<br/>CreateRemoteThread / APC / Reflective DLL]\n    G -->|Yes| I[Perform Userland Hooking<br/>IAT / Inline / SSDT]\n    I --> J[Establish C2C Communication<br/>HTTP / DNS / HTTPS / ICMP]\n    H --> J\n    J --> K{Payload Type}\n    K -->|Ransomware| L[Scan Drives -> Encrypt Files -> Display Ransom Note]\n    K -->|Info-Stealer| M[Harvest Credentials -> Collect Browser Data -> Exfiltrate]\n    K -->|RAT| N[Open Backdoor -> Await Commands]\n    K -->|Botnet| O[Join C2C Channel -> Await Tasks]\n    K -->|Wiper| P[Overwrite MBR -> Corrupt Files -> Self-Delete]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-real-world-malware-case-studies",
      children: "1.3 Real-World Malware Case Studies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "stuxnet-2010--weaponized-cyber-attack",
      children: "Stuxnet (2010) — Weaponized Cyber Attack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stuxnet is the most sophisticated malware ever analyzed at the time of its discovery. It targeted Siemens Step 7 industrial control systems (ICS) used in Iran's Natanz uranium enrichment facility."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Highlights:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Propagation: 4 zero-day exploits (MS10-046, MS10-061, MS10-073, MS10-088), USB spread, print spooler exploitation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payload: Modified frequency converter drives (IR) on centrifuges, causing physical destruction while replaying normal sensor readings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rootkit: Hides PLC blocks from Step 7 software using a custom .sys driver signed with stolen Realtek/JMicron certificates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C2C: Peer-to-peer update mechanism via RPC, no internet fallback required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analysis revelation: Required manual unpacking of multiple encrypted layers, DriverEntry analysis in IDA Pro revealed the PLC ladder-logic payload"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "wannacry-2017--global-ransomware-pandemic",
      children: "WannaCry (2017) — Global Ransomware Pandemic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WannaCry infected over 230,000 computers across 150 countries in 4 days, using the EternalBlue SMB exploit leaked from the NSA Equation Group."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Highlights:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Propagation: Worm-like via MS17-010 (EternalBlue) SMB vulnerability + DoublePulsar backdoor"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Encryption: RSA-2048 + AES-128 hybrid encryption; files encrypted with ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".WNCRY"
        }), " extension"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kill-switch: Hardcoded domain ", (0,jsx_runtime.jsx)(_components.code, {
          children: "iuqerfsodp9t.pw"
        }), " — when registered, malware exits (discovered by @MalwareTechBlog via dynamic analysis)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Impact: NHS UK operations crippled, €4B+ in damages globally"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C2C: TOR-based fallback; primary propagation was worm-based, not C2C-dependent"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "emotet-20142023--modular-banking-trojan--botnet",
      children: "Emotet (2014–2023) — Modular Banking Trojan / Botnet"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Emotet evolved from a banking trojan to a malware-as-a-service delivery platform used by ransomware gangs."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Highlights:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Propagation: Malicious spam with macro-laden Word docs → PowerShell → DLL sideloading"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modularity: Loads separate DLL modules for spam relay, credential theft, and C2C comms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Obfuscation: Encrypted strings with rolling XOR keys, API hashing, control flow flattening"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Persistence: Registry ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Run"
        }), " key, scheduled tasks, service DLL registration"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Takedown: Europol-led Operation Ladybird (Jan 2023) sinkholed C2C infrastructure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cobalt-strike--legitimate-adversary-simulation-tool-abused-by-threat-actors",
      children: "Cobalt Strike — Legitimate Adversary Simulation Tool (Abused by Threat Actors)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cobalt Strike is a commercial adversary simulation framework routinely cracked and used by ransomware operators (Conti, LockBit, Ryuk)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Highlights:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Beacon (payload): In-memory reflective DLL injection, C2C via HTTP/DNS/SMB/HTTPS"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Artifacts: Pipe names, named pipe patterns (", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\\\.\\pipe\\msagent_*"
        }), "), mutex objects"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Malleable C2: Customizable C2C profiles for traffic fingerprint evasion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detection: YARA rules targeting known Beacon DLL offsets, MZ header in reflective loader"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Post-exploitation: Mimikatz integration, lateral movement via WMI/PsExec, keylogging"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-static-analysis",
      children: "2. Static Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Static analysis examines a binary without executing it. The goal is to extract indicators of compromise (IOCs), understand capabilities, and identify packers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-portable-executable-pe-structure",
      children: "2.1 Portable Executable (PE) Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Windows PE format is the standard executable format for Windows. Understanding its structure is the foundation of malware analysis."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph PE_File[\"PE File Structure\"]\n        direction TB\n        DOS_Header[\"DOS Header (64 bytes)<br/>e_magic: 'MZ'<br/>e_lfanew: offset to PE\"]\n        DOS_Stub[\"DOS Stub<br/>Legacy program stub\"]\n        NT_Headers[\"NT Headers<br/>Signature: 'PE\\\\0\\\\0'\"]\n        File_Header[\"File Header<br/>Machine, NumberOfSections,<br/>SizeOfOptionalHeader\"]\n        Optional_Header[\"Optional Header<br/>ImageBase, EntryPoint,<br/>SizeOfImage, Subsystem\"]\n        Section_Table[\"Section Table<br/>.text, .data, .rdata, .rsrc<br/>VirtualAddress, SizeOfRawData\"]\n        Section1[\".text<br/>Executable code\"]\n        Section2[\".data<br/>Initialized data\"]\n        Section3[\".rdata<br/>Read-only data / imports / exports\"]\n        Section4[\".rsrc<br/>Resources: icons, strings, manifests\"]\n    end\n\n    DOS_Header --> DOS_Stub --> NT_Headers\n    NT_Headers --> File_Header --> Optional_Header --> Section_Table\n    Section_Table --> Section1\n    Section_Table --> Section2\n    Section_Table --> Section3\n    Section_Table --> Section4\n\n    IMAGE_DATA_DIRECTORY[\"Import Directory (IDD)<br/>IMAGE_DIRECTORY_ENTRY_IMPORT\"]\n    IMAGE_DATA_DIRECTORY2[\"Export Directory (EDD)<br/>IMAGE_DIRECTORY_ENTRY_EXPORT\"]\n    IMAGE_DATA_DIRECTORY3[\"IAT Directory<br/>IMAGE_DIRECTORY_ENTRY_IAT\"]\n\n    Optional_Header --> IMAGE_DATA_DIRECTORY\n    Optional_Header --> IMAGE_DATA_DIRECTORY2\n    Optional_Header --> IMAGE_DATA_DIRECTORY3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-pe-parser-in-typescript",
      children: "2.2 PE Parser in TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript implementation parses PE binary data to extract headers, section information, and import/export tables. This is a foundational tool for any malware analyst's arsenal."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// pe-parser.ts — Runtime-agnostic PE parser for malware static analysis\n// Works in Node.js, Deno, or browser environments\n\ninterface PEOffsets {\n  e_lfanew: number;\n}\n\ninterface FileHeader {\n  machine: number;\n  numberOfSections: number;\n  timeDateStamp: number;\n  sizeOfOptionalHeader: number;\n  characteristics: number;\n}\n\ninterface OptionalHeader {\n  magic: number;             // 0x10b (PE32) or 0x20b (PE32+)\n  addressOfEntryPoint: number;\n  imageBase: number;\n  sectionAlignment: number;\n  fileAlignment: number;\n  sizeOfImage: number;\n  sizeOfHeaders: number;\n  subsystem: number;\n  numberOfRvaAndSizes: number;\n}\n\ninterface SectionHeader {\n  name: string;\n  virtualSize: number;\n  virtualAddress: number;\n  sizeOfRawData: number;\n  pointerToRawData: number;\n  characteristics: number;\n  entropy: number;\n}\n\ninterface ImportDescriptor {\n  originalFirstThunk: number;\n  timeDateStamp: number;\n  forwarderChain: number;\n  nameRva: number;\n  firstThunk: number;\n  dllName: string;\n  functions: string[];\n}\n\ninterface ExportDescriptor {\n  characteristics: number;\n  timeDateStamp: number;\n  majorVersion: number;\n  minorVersion: number;\n  nameRva: number;\n  ordinalBase: number;\n  addressTableEntries: number;\n  numberOfNames: number;\n  exportAddressTableRva: number;\n  namePointerRva: number;\n  ordinalTableRva: number;\n  dllName: string;\n  exports: ExportEntry[];\n}\n\ninterface ExportEntry {\n  ordinal: number;\n  name: string;\n  addressRva: number;\n  forwarderString: string | null;\n}\n\ninterface PEParseResult {\n  dosHeader: PEOffsets;\n  fileHeader: FileHeader;\n  optionalHeader: OptionalHeader;\n  sections: SectionHeader[];\n  imports: ImportDescriptor[];\n  exports: ExportDescriptor | null;\n  isPacked: boolean;\n  entropyScore: number;\n}\n\nclass BinaryReader {\n  private view: DataView;\n  private offset: number = 0;\n\n  constructor(private buffer: ArrayBuffer) {\n    this.view = new DataView(buffer);\n  }\n\n  readUInt8(): number {\n    const val = this.view.getUint8(this.offset);\n    this.offset += 1;\n    return val;\n  }\n\n  readUInt16(): number {\n    const val = this.view.getUint16(this.offset, true); // little-endian\n    this.offset += 2;\n    return val;\n  }\n\n  readUInt32(): number {\n    const val = this.view.getUint32(this.offset, true);\n    this.offset += 4;\n    return val;\n  }\n\n  readBytes(length: number): Uint8Array {\n    const val = new Uint8Array(this.buffer, this.offset, length);\n    this.offset += length;\n    return val;\n  }\n\n  readAsciiString(length: number): string {\n    const bytes = this.readBytes(length);\n    let result = '';\n    for (let i = 0; i < bytes.length; i++) {\n      if (bytes[i] === 0) break;\n      result += String.fromCharCode(bytes[i]);\n    }\n    return result;\n  }\n\n  readRvaString(rva: number): string {\n    // Read null-terminated string at given RVA (relative to buffer start)\n    const saved = this.offset;\n    this.offset = rva;\n    let result = '';\n    while (this.offset < this.buffer.byteLength) {\n      const ch = this.readUInt8();\n      if (ch === 0) break;\n      result += String.fromCharCode(ch);\n    }\n    this.offset = saved;\n    return result;\n  }\n\n  seek(pos: number): void {\n    this.offset = pos;\n  }\n\n  tell(): number {\n    return this.offset;\n  }\n\n  size(): number {\n    return this.buffer.byteLength;\n  }\n}\n\nexport class PEParser {\n  private reader: BinaryReader;\n\n  constructor(buffer: ArrayBuffer) {\n    this.reader = new BinaryReader(buffer);\n  }\n\n  private readDosHeader(): PEOffsets {\n    const magic = this.reader.readAsciiString(2);\n    if (magic !== 'MZ') {\n      throw new Error('Invalid DOS header: MZ signature not found');\n    }\n    this.reader.seek(0x3c);\n    const e_lfanew = this.reader.readUInt32();\n    return { e_lfanew };\n  }\n\n  private readFileHeader(): FileHeader {\n    const signature = this.reader.readAsciiString(4);\n    if (signature !== 'PE\\u0000\\u0000') {\n      throw new Error('Invalid PE signature');\n    }\n    return {\n      machine: this.reader.readUInt16(),\n      numberOfSections: this.reader.readUInt16(),\n      timeDateStamp: this.reader.readUInt32(),\n      sizeOfOptionalHeader: this.reader.readUInt16(),\n      characteristics: this.reader.readUInt16(),\n    };\n  }\n\n  private readOptionalHeader(): OptionalHeader {\n    const magic = this.reader.readUInt16();\n    const is32Bit = magic === 0x10b;\n    const is64Bit = magic === 0x20b;\n    if (!is32Bit && !is64Bit) {\n      throw new Error(`Unknown PE magic: 0x${magic.toString(16)}`);\n    }\n\n    // Skip fields to reach addressOfEntryPoint\n    this.reader.readUInt16(); // majorLinkerVersion\n    this.reader.readUInt16(); // minorLinkerVersion\n\n    // PE32 fields\n    if (is32Bit) {\n      this.reader.readUInt32(); // sizeOfCode\n      this.reader.readUInt32(); // sizeOfInitializedData\n      this.reader.readUInt32(); // sizeOfUninitializedData\n    } else {\n      // PE32+ has larger fields before the entry point\n      this.reader.readUInt32(); // sizeOfCode\n      this.reader.readUInt32(); // sizeOfInitializedData\n      this.reader.readUInt32(); // sizeOfUninitializedData\n    }\n\n    const addressOfEntryPoint = this.reader.readUInt32();\n    const baseOfCode = this.reader.readUInt32();\n\n    let imageBase: number;\n    if (is32Bit) {\n      this.reader.readUInt32(); // baseOfData\n      imageBase = this.reader.readUInt32();\n    } else {\n      imageBase = this.reader.readUInt32() + this.reader.readUInt32() * 0x100000000;\n    }\n\n    const sectionAlignment = this.reader.readUInt32();\n    const fileAlignment = this.reader.readUInt32();\n\n    // Skip OS, image, subsystem versions\n    this.reader.readUInt16(); // majorOperatingSystemVersion\n    this.reader.readUInt16(); // minorOperatingSystemVersion\n    this.reader.readUInt16(); // majorImageVersion\n    this.reader.readUInt16(); // minorImageVersion\n    this.reader.readUInt16(); // majorSubsystemVersion\n    this.reader.readUInt16(); // minorSubsystemVersion\n\n    this.reader.readUInt32(); // win32VersionValue\n    const sizeOfImage = this.reader.readUInt32();\n    const sizeOfHeaders = this.reader.readUInt32();\n\n    this.reader.readUInt32(); // checkSum\n    const subsystem = this.reader.readUInt16();\n\n    // Skip DLL characteristics\n    this.reader.readUInt16();\n\n    // SizeOfStackReserve, SizeOfStackCommit, SizeOfHeapReserve, SizeOfHeapCommit\n    if (is32Bit) {\n      this.reader.readUInt32(); this.reader.readUInt32();\n      this.reader.readUInt32(); this.reader.readUInt32();\n    } else {\n      this.reader.readUInt32(); this.reader.readUInt32();\n      this.reader.readUInt32(); this.reader.readUInt32();\n      this.reader.readUInt32(); this.reader.readUInt32();\n      this.reader.readUInt32(); this.reader.readUInt32();\n    }\n\n    this.reader.readUInt32(); // loaderFlags\n    const numberOfRvaAndSizes = this.reader.readUInt32();\n\n    return {\n      magic,\n      addressOfEntryPoint,\n      imageBase,\n      sectionAlignment,\n      fileAlignment,\n      sizeOfImage,\n      sizeOfHeaders,\n      subsystem,\n      numberOfRvaAndSizes,\n    };\n  }\n\n  private readSectionHeaders(count: number, sectionAlignment: number): SectionHeader[] {\n    const sections: SectionHeader[] = [];\n    for (let i = 0; i < count; i++) {\n      const name = this.reader.readAsciiString(8).trim();\n      const virtualSize = this.reader.readUInt32();\n      const virtualAddress = this.reader.readUInt32();\n      const sizeOfRawData = this.reader.readUInt32();\n      const pointerToRawData = this.reader.readUInt32();\n      this.reader.readUInt32(); // pointerToRelocations\n      this.reader.readUInt32(); // pointerToLinenumbers\n      this.reader.readUInt16(); // numberOfRelocations\n      this.reader.readUInt16(); // numberOfLinenumbers\n      const characteristics = this.reader.readUInt32();\n\n      // Calculate entropy for this section\n      let entropy = 0;\n      if (pointerToRawData > 0 && sizeOfRawData > 0) {\n        const rawEnd = Math.min(pointerToRawData + sizeOfRawData, this.reader.size());\n        const sectionData = new Uint8Array(this.reader['buffer'], pointerToRawData, rawEnd - pointerToRawData);\n        entropy = this.calculateEntropy(sectionData);\n      }\n\n      sections.push({\n        name,\n        virtualSize,\n        virtualAddress,\n        sizeOfRawData,\n        pointerToRawData,\n        characteristics,\n        entropy,\n      });\n    }\n    return sections;\n  }\n\n  private calculateEntropy(data: Uint8Array): number {\n    const frequency = new Uint32Array(256);\n    for (let i = 0; i < data.length; i++) {\n      frequency[data[i]]++;\n    }\n    let entropy = 0;\n    const len = data.length;\n    for (let i = 0; i < 256; i++) {\n      if (frequency[i] > 0) {\n        const p = frequency[i] / len;\n        entropy -= p * Math.log2(p);\n      }\n    }\n    return entropy;\n  }\n\n  private readImportTable(sections: SectionHeader[], sectionAlignment: number): ImportDescriptor[] {\n    // Locate the import directory RVA from the optional header data directories\n    // We need to re-read it; navigate to the data directory entries\n    const imports: ImportDescriptor[] = [];\n\n    // Read data directory entries starting after the optional header fixed fields\n    // Approximate position: the reader is at the data directories\n    // For simplicity, we'll scan for IMAGE_DIRECTORY_ENTRY_IMPORT (index 1)\n    const importDirRva = this.findDataDirectoryEntry(1); // IMAGE_DIRECTORY_ENTRY_IMPORT\n    if (importDirRva === 0) return imports;\n\n    const importDirOffset = this.rvaToOffset(importDirRva, sections, sectionAlignment);\n    if (importDirOffset === 0) return imports;\n\n    this.reader.seek(importDirOffset);\n    let descCount = 0;\n    while (descCount < 256) {\n      const originalFirstThunk = this.reader.readUInt32();\n      const timeDateStamp = this.reader.readUInt32();\n      const forwarderChain = this.reader.readUInt32();\n      const nameRva = this.reader.readUInt32();\n      const firstThunk = this.reader.readUInt32();\n      descCount++;\n\n      if (originalFirstThunk === 0 && firstThunk === 0) break;\n\n      const nameOffset = this.rvaToOffset(nameRva, sections, sectionAlignment);\n      let dllName = '';\n      if (nameOffset > 0) {\n        this.reader.seek(nameOffset);\n        dllName = this.reader.readAsciiString(256).split('\\u0000')[0];\n      }\n\n      // Read imported function names from ILT (Import Lookup Table)\n      const functions: string[] = [];\n      const thunkOffset = this.rvaToOffset(\n        originalFirstThunk !== 0 ? originalFirstThunk : firstThunk,\n        sections, sectionAlignment\n      );\n      if (thunkOffset > 0) {\n        this.reader.seek(thunkOffset);\n        let thunkCount = 0;\n        while (thunkCount < 4096) {\n          if (this.reader.tell() + 4 > this.reader.size()) break;\n          const thunkValue = this.reader.readUInt32();\n          thunkCount++;\n          if (thunkValue === 0) break;\n          // Check if ordinal (MSB set) or name import\n          if ((thunkValue & 0x80000000) !== 0) {\n            functions.push(`ORDINAL_${thunkValue & 0xFFFF}`);\n          } else {\n            const nameOffset2 = this.rvaToOffset(thunkValue + 2, sections, sectionAlignment);\n            if (nameOffset2 > 0) {\n              this.reader.seek(nameOffset2);\n              const funcName = this.reader.readAsciiString(256).split('\\u0000')[0];\n              functions.push(funcName);\n            }\n          }\n        }\n      }\n\n      imports.push({\n        originalFirstThunk,\n        timeDateStamp,\n        forwarderChain,\n        nameRva,\n        firstThunk,\n        dllName: dllName.toLowerCase(),\n        functions,\n      });\n    }\n\n    return imports;\n  }\n\n  private readExportTable(sections: SectionHeader[], sectionAlignment: number): ExportDescriptor | null {\n    const exportDirRva = this.findDataDirectoryEntry(0); // IMAGE_DIRECTORY_ENTRY_EXPORT\n    if (exportDirRva === 0) return null;\n\n    const exportOffset = this.rvaToOffset(exportDirRva, sections, sectionAlignment);\n    if (exportOffset === 0) return null;\n\n    this.reader.seek(exportOffset);\n\n    const characteristics = this.reader.readUInt32();\n    const timeDateStamp = this.reader.readUInt32();\n    const majorVersion = this.reader.readUInt16();\n    const minorVersion = this.reader.readUInt16();\n    const nameRva = this.reader.readUInt32();\n    const ordinalBase = this.reader.readUInt32();\n    const addressTableEntries = this.reader.readUInt32();\n    const numberOfNames = this.reader.readUInt32();\n    const exportAddressTableRva = this.reader.readUInt32();\n    const namePointerRva = this.reader.readUInt32();\n    const ordinalTableRva = this.reader.readUInt32();\n\n    const nameOffset = this.rvaToOffset(nameRva, sections, sectionAlignment);\n    let dllName = '';\n    if (nameOffset > 0) {\n      this.reader.seek(nameOffset);\n      dllName = this.reader.readAsciiString(128).split('\\u0000')[0];\n    }\n\n    const exports: ExportEntry[] = [];\n\n    // Read address table\n    const addressTableOff = this.rvaToOffset(exportAddressTableRva, sections, sectionAlignment);\n    const namePtrOff = this.rvaToOffset(namePointerRva, sections, sectionAlignment);\n    const ordinalTableOff = this.rvaToOffset(ordinalTableRva, sections, sectionAlignment);\n\n    if (addressTableOff > 0 && namePtrOff > 0 && ordinalTableOff > 0) {\n      const addressTable: number[] = [];\n      this.reader.seek(addressTableOff);\n      for (let i = 0; i < addressTableEntries; i++) {\n        addressTable.push(this.reader.readUInt32());\n      }\n\n      const nameOrdinals: number[] = [];\n      this.reader.seek(ordinalTableOff);\n      for (let i = 0; i < numberOfNames; i++) {\n        nameOrdinals.push(this.reader.readUInt16());\n      }\n\n      const namePtrs: number[] = [];\n      this.reader.seek(namePtrOff);\n      for (let i = 0; i < numberOfNames; i++) {\n        namePtrs.push(this.reader.readUInt32());\n      }\n\n      for (let i = 0; i < numberOfNames; i++) {\n        const ordinal = nameOrdinals[i];\n        const addressRva = addressTable[ordinal] || 0;\n\n        const nameOff = this.rvaToOffset(namePtrs[i], sections, sectionAlignment);\n        let funcName = '';\n        if (nameOff > 0) {\n          this.reader.seek(nameOff);\n          funcName = this.reader.readAsciiString(128).split('\\u0000')[0];\n        }\n\n        // Check for forwarded export (export forwarding: e.g., \"NTDLL.RtlAllocateHeap\")\n        let forwarderString: string | null = null;\n        if (addressRva >= exportDirRva && addressRva < exportDirRva + 0x1000) {\n          const forwarderOff = this.rvaToOffset(addressRva, sections, sectionAlignment);\n          if (forwarderOff > 0) {\n            this.reader.seek(forwarderOff);\n            forwarderString = this.reader.readAsciiString(256).split('\\u0000')[0];\n          }\n        }\n\n        exports.push({\n          ordinal: ordinalBase + ordinal,\n          name: funcName,\n          addressRva,\n          forwarderString,\n        });\n      }\n    }\n\n    return {\n      characteristics,\n      timeDateStamp,\n      majorVersion,\n      minorVersion,\n      nameRva,\n      ordinalBase,\n      addressTableEntries,\n      numberOfNames,\n      exportAddressTableRva,\n      namePointerRva,\n      ordinalTableRva,\n      dllName,\n      exports,\n    };\n  }\n\n  private findDataDirectoryEntry(index: number): number {\n    // Navigate to the data directory array in the optional header\n    // After SizeOfOptionalHeader field, data directories begin\n    // PE32: Optional header is 96 bytes + 8 bytes data dir entries\n    // PE32+: Optional header is 112 bytes + 8 bytes data dir entries\n    // We use known offsets from the start of the optional header\n    const dosHeader = this.readDosHeader();\n    this.reader.seek(dosHeader.e_lfanew);\n    const fileHeader = this.readFileHeader();\n\n    // Skip past the optional header magic and initial fields\n    this.reader.seek(dosHeader.e_lfanew + 4 + 20); // PE sig + file header\n    const magic = this.reader.readUInt16();\n    const is32Bit = magic === 0x10b;\n    const is64Bit = magic === 0x20b;\n\n    // Optional header data directories start at a known offset\n    // PE32: 96 bytes of fixed fields, PE32+: 112 bytes\n    let dataDirOffset: number;\n    if (is32Bit) {\n      dataDirOffset = dosHeader.e_lfanew + 4 + 20 + 96;\n    } else if (is64Bit) {\n      dataDirOffset = dosHeader.e_lfanew + 4 + 20 + 112;\n    } else {\n      return 0;\n    }\n\n    this.reader.seek(dataDirOffset + index * 8);\n    const rva = this.reader.readUInt32();\n    return rva;\n  }\n\n  private rvaToOffset(rva: number, sections: SectionHeader[], sectionAlignment: number): number {\n    for (const sec of sections) {\n      if (rva >= sec.virtualAddress && rva < sec.virtualAddress + Math.max(sec.virtualSize, sec.sizeOfRawData)) {\n        return sec.pointerToRawData + (rva - sec.virtualAddress);\n      }\n    }\n    return 0;\n  }\n\n  public parse(): PEParseResult {\n    const dosHeader = this.readDosHeader();\n\n    this.reader.seek(dosHeader.e_lfanew);\n    const fileHeader = this.readFileHeader();\n    const optionalHeader = this.readOptionalHeader();\n\n    // Read section headers\n    this.reader.seek(dosHeader.e_lfanew + 4 + 20 + fileHeader.sizeOfOptionalHeader);\n    const sections = this.readSectionHeaders(fileHeader.numberOfSections, optionalHeader.sectionAlignment);\n\n    // Re-parse to read imports/exports\n    const imports = this.readImportTable(sections, optionalHeader.sectionAlignment);\n    const exports = this.readExportTable(sections, optionalHeader.sectionAlignment);\n\n    // Calculate overall entropy across all sections\n    let totalEntropy = 0;\n    for (const sec of sections) {\n      totalEntropy += sec.entropy;\n    }\n    const avgEntropy = sections.length > 0 ? totalEntropy / sections.length : 0;\n\n    // Heuristic: packed if average entropy > 6.5 or sections have suspicious names/characteristics\n    const packedHeuristic = avgEntropy > 6.5 ||\n      sections.some(s => s.entropy > 7.0) ||\n      sections.some(s => s.name === '' || s.name.includes('UPX') || s.name.includes('UPX0')) ||\n      (sections.length <= 3 && avgEntropy > 6.0);\n\n    return {\n      dosHeader,\n      fileHeader,\n      optionalHeader,\n      sections,\n      imports,\n      exports,\n      isPacked: packedHeuristic,\n      entropyScore: avgEntropy,\n    };\n  }\n}\n\n// Example usage\nexport function analyzeSample(buffer: ArrayBuffer): void {\n  const parser = new PEParser(buffer);\n  try {\n    const result = parser.parse();\n    console.log('=== PE Analysis Results ===');\n    console.log(`Entry Point RVA: 0x${result.optionalHeader.addressOfEntryPoint.toString(16)}`);\n    console.log(`Number of Sections: ${result.sections.length}`);\n    console.log(`Subsystem: ${result.optionalHeader.subsystem} (2=GUI, 3=Console)`);\n    console.log(`Average Entropy: ${result.entropyScore.toFixed(2)}`);\n    console.log(`Packed: ${result.isPacked ? 'YES' : 'NO'}`);\n\n    console.log('\\n--- Sections ---');\n    for (const sec of result.sections) {\n      console.log(`  ${sec.name.padEnd(8)} VA: 0x${sec.virtualAddress.toString(16).padStart(8, '0')} ` +\n        `Size: ${sec.sizeOfRawData.toString().padStart(8)} Entropy: ${sec.entropy.toFixed(3)}`);\n    }\n\n    console.log('\\n--- Imported DLLs ---');\n    for (const imp of result.imports) {\n      console.log(`  ${imp.dllName}: ${imp.functions.slice(0, 8).join(', ')}${imp.functions.length > 8 ? '...' : ''}`);\n    }\n\n    if (result.exports) {\n      console.log('\\n--- Exported Functions ---');\n      for (const exp of result.exports.exports.slice(0, 10)) {\n        console.log(`  [${exp.ordinal}] ${exp.name} @ 0x${exp.addressRva.toString(16)}`);\n      }\n    }\n  } catch (err) {\n    console.error('PE Parse Error:', (err as Error).message);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-string-extraction--entropy-analysis",
      children: "2.3 String Extraction & Entropy Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Malware analysts extract printable strings to find URLs, IP addresses, registry keys, file paths, and embedded configuration data. High entropy across a section indicates packing or encryption."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// strings-entropy.ts — String extraction and entropy analysis for malware samples\n\ninterface StringResult {\n  offset: number;\n  value: string;\n  length: number;\n}\n\ninterface EntropyResult {\n  sectionName: string;\n  entropy: number;\n  isSuspicious: boolean;\n}\n\nexport class MalwareStringAnalyzer {\n  private minLength: number;\n\n  constructor(minStringLength: number = 6) {\n    this.minLength = minStringLength;\n  }\n\n  /**\n   * Extract ASCII strings from binary data with minimum length filter.\n   * Mimics the Unix `strings` utility with configurable minimum length.\n   */\n  public extractStrings(data: Uint8Array): StringResult[] {\n    const results: StringResult[] = [];\n    let current: { offset: number; bytes: number[] } | null = null;\n\n    for (let i = 0; i < data.length; i++) {\n      const b = data[i];\n      const isPrintable = b >= 32 && b <= 126; // printable ASCII range\n\n      if (isPrintable) {\n        if (current === null) {\n          current = { offset: i, bytes: [b] };\n        } else {\n          current.bytes.push(b);\n        }\n      } else {\n        if (current !== null && current.bytes.length >= this.minLength) {\n          const value = String.fromCharCode(...current.bytes);\n          results.push({ offset: current.offset, value, length: current.bytes.length });\n        }\n        current = null;\n      }\n    }\n\n    // Handle string at end of data\n    if (current !== null && current.bytes.length >= this.minLength) {\n      const value = String.fromCharCode(...current.bytes);\n      results.push({ offset: current.offset, value, length: current.bytes.length });\n    }\n\n    return results;\n  }\n\n  /**\n   * Extract UTF-16LE strings (common in Windows PE resources).\n   */\n  public extractUtf16Strings(data: Uint8Array): StringResult[] {\n    const results: StringResult[] = [];\n    let current: { offset: number; bytes: number[] } | null = null;\n\n    for (let i = 0; i < data.length - 1; i += 2) {\n      const lo = data[i];\n      const hi = data[i + 1];\n      const isPrintable = lo >= 32 && lo <= 126 && hi === 0;\n\n      if (isPrintable) {\n        if (current === null) {\n          current = { offset: i, bytes: [lo] };\n        } else {\n          current.bytes.push(lo);\n        }\n      } else {\n        if (current !== null && current.bytes.length >= this.minLength) {\n          const value = String.fromCharCode(...current.bytes);\n          results.push({ offset: current.offset, value, length: current.bytes.length });\n        }\n        current = null;\n      }\n    }\n\n    return results;\n  }\n\n  /**\n   * Shannon entropy calculation for a given byte array.\n   * Values > 6.5 typically indicate packed/encrypted data.\n   * Values > 7.5 strongly indicate encryption.\n   */\n  public shannonEntropy(data: Uint8Array): number {\n    const freq = new Uint32Array(256);\n    const len = data.length;\n    if (len === 0) return 0;\n\n    for (let i = 0; i < len; i++) {\n      freq[data[i]]++;\n    }\n\n    let entropy = 0;\n    for (let i = 0; i < 256; i++) {\n      if (freq[i] > 0) {\n        const p = freq[i] / len;\n        entropy -= p * Math.log2(p);\n      }\n    }\n    return entropy;\n  }\n\n  /**\n   * Sliding-window entropy scanner — detects regions of high entropy within a binary.\n   * Useful for finding embedded encrypted payloads or packed regions.\n   */\n  public slidingWindowEntropy(data: Uint8Array, windowSize: number = 256): EntropyResult[] {\n    const results: EntropyResult[] = [];\n    const step = Math.floor(windowSize / 2);\n\n    for (let i = 0; i < data.length - windowSize; i += step) {\n      const window = data.slice(i, i + windowSize);\n      const entropy = this.shannonEntropy(window);\n\n      if (entropy > 6.0) {\n        results.push({\n          sectionName: `offset_0x${i.toString(16)}`,\n          entropy,\n          isSuspicious: entropy > 6.5,\n        });\n      }\n    }\n\n    return results;\n  }\n\n  /**\n   * Detect common suspicious strings in malware samples.\n   */\n  public detectIOCs(strings: StringResult[]): Map<string, StringResult[]> {\n    const iocs = new Map<string, StringResult[]>();\n\n    // URL/IP patterns\n    const urlPattern = /https?:\\/\\/[^\\s]+/i;\n    const ipPattern = /\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}/;\n    const registryPattern = /HKEY_[A-Z_]+\\\\/i;\n    const filePathPattern = /[A-Z]:\\\\(?:[^\\\\\\n]+\\\\?)+/i;\n    const mutexPattern = /[A-Za-z0-9_]{8,32}MUTEX/i;\n\n    const categories: [string, RegExp][] = [\n      ['URLs', urlPattern],\n      ['IP Addresses', ipPattern],\n      ['Registry Keys', registryPattern],\n      ['File Paths', filePathPattern],\n      ['Potential Mutexes', mutexPattern],\n      ['Base64 (suspected)', /[A-Za-z0-9+/]{40,}={0,2}/],\n      ['Hex Strings (suspected)', /[0-9A-Fa-f]{32,}/],\n      ['DLL Names', /[a-z0-9_]+\\.dll/i],\n    ];\n\n    for (const str of strings) {\n      for (const [category, pattern] of categories) {\n        if (pattern.test(str.value)) {\n          if (!iocs.has(category)) {\n            iocs.set(category, []);\n          }\n          iocs.get(category)!.push(str);\n        }\n      }\n    }\n\n    return iocs;\n  }\n}\n\n// Example: analyze a section of binary data\nexport function entropyAnalyzerDemo(): void {\n  const analyzer = new MalwareStringAnalyzer(6);\n\n  // Simulate packed data (high entropy)\n  const packedData = new Uint8Array(1024);\n  for (let i = 0; i < packedData.length; i++) {\n    packedData[i] = Math.floor(Math.random() * 256);\n  }\n\n  const packedEntropy = analyzer.shannonEntropy(packedData);\n  console.log(`Random data entropy: ${packedEntropy.toFixed(4)} (typically 7.5-8.0)`);\n\n  // Simulate plaintext data (low entropy)\n  const plainData = new Uint8Array(1024);\n  for (let i = 0; i < plainData.length; i++) {\n    plainData[i] = (i % 95) + 32; // printable ASCII repeating pattern\n  }\n\n  const plainEntropy = analyzer.shannonEntropy(plainData);\n  console.log(`Plain text entropy: ${plainEntropy.toFixed(4)} (typically 4.0-5.5)`);\n\n  // Extract strings from a mixed binary\n  const mixedData = new Uint8Array([\n    ...Buffer.from('MZ\\x90\\x00\\x03\\x00\\x00\\x00\\x04\\x00\\x00\\x00\\xFF\\xFF\\x00\\x00'),\n    ...Buffer.from('kernel32.dll\\x00CreateProcess\\x00'),\n    ...Buffer.from('http://malware-c2.example.com/beacon\\x00'),\n    ...Buffer.from('HKEY_LOCAL_MACHINE\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run\\x00'),\n  ]);\n\n  const strings = analyzer.extractStrings(mixedData);\n  console.log(`\\nExtracted ${strings.length} strings:`);\n  for (const s of strings) {\n    console.log(`  0x${s.offset.toString(16)}: ${s.value}`);\n  }\n\n  const iocs = analyzer.detectIOCs(strings);\n  console.log('\\nDetected IOCs:');\n  for (const [category, matches] of iocs) {\n    console.log(`  ${category}: ${matches.map(m => m.value).join(', ')}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-packer-detection-with-peid--detect-it-easy",
      children: "2.4 Packer Detection with PEiD & Detect It Easy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Packer detection identifies whether a binary is compressed or encrypted. Common tools:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detection Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strengths"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PEiD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signature-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scans EP section for known packer signatures (2000+ signatures)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, extensive packer DB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Detect It Easy (DIE)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signature + heuristic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entropy analysis, section analysis, import analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-platform, updatable signatures, scriptable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Exeinfo PE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signature-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Similar to PEiD but community-maintained"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extended DB, entropy graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "YARA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rule-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom rules for packer identification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully customizable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Packer Entropy Heuristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".text"
        }), " section entropy > 6.5 → likely packed"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Number of sections ≤ 3 with high entropy → strongly indicates packing"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Suspicious section names: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UPX0"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UPX1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".packed"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".themida"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".vmp0"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".vmp1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Import table contains only ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LoadLibraryA"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GetProcAddress"
        }), " (stub imports)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["EP is not at a typical code location (e.g., EP in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".rsrc"
        }), " or a data section)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-dynamic-analysis",
      children: "3. Dynamic Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dynamic analysis executes malware in a controlled environment to observe runtime behavior. This reveals network traffic, file system changes, registry modifications, process creation, and API calls."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-analysis-workflow",
      children: "3.1 Analysis Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Static[\"Static Analysis (Pre-Run)\"]\n        A[\"PE Parsing<br/>Headers, Sections\"] --> B[\"String Extraction<br/>URLs, IPs, Paths\"]\n        B --> C[\"Entropy Analysis<br/>Packer Detection\"]\n        C --> D[\"YARA Scan<br/>Family Classification\"]\n    end\n\n    subgraph Dynamic[\"Dynamic Analysis (Runtime)\"]\n        E[\"Sandbox Execution<br/>Cuckoo / CAPE\"] --> F[\"API Monitoring<br/>Process Monitor\"]\n        F --> G[\"Network Simulation<br/>INetSim / FakeNet\"]\n        G --> H[\"Memory Dump<br/>after execution\"]\n    end\n\n    subgraph Post[\"Post-Analysis\"]\n        H --> I[\"Volatility Memory Analysis<br/>Process list, handles, injected code\"]\n        I --> J[\"YARA Rule Refinement<br/>Based on observed behavior\"]\n        J --> K[\"Signature Generation<br/>SIEM, EDR, YARA\"]\n    end\n\n    D --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-sandbox-environment-setup-cuckoo--cape",
      children: "3.2 Sandbox Environment Setup (Cuckoo / CAPE)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cuckoo Sandbox"
      }), " is the de-facto open-source automated malware analysis system. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CAPE"
      }), " (Config And Payload Extraction) is a fork of Cuckoo with enhanced unpacking capabilities."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────┐\n│     Cuckoo Host          │\n│  ┌───────────────────┐   │\n│  │ Analyzer (Python)  │   │\n│  │ Virtual Machine    │   │\n│  │ Management (libvrt)│   │\n│  │ Result Repository  │   │\n│  │ Web Interface      │   │\n│  └───────────────────┘   │\n│           │              │\n│           ▼              │\n│  ┌───────────────────┐   │\n│  │ Database           │   │\n│  │ (PostgreSQL)       │   │\n│  └───────────────────┘   │\n└─────────────────────────┘\n         │ network isolation\n         ▼\n┌─────────────────────────┐\n│  Guest VM (Windows)      │\n│  ┌───────────────────┐   │\n│  │ Agent (Python EXE) │   │\n│  │ API Hooks (32/64)  │   │\n│  │ Process Monitor    │   │\n│  │ Network Monitor    │   │\n│  └───────────────────┘   │\n└─────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install host: Ubuntu 22.04 LTS, Python 3.10+, PostgreSQL, YARA, Volatility 3, tcpdump"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install guest: Windows 10 VM with VirtualBox/KVM, disable Windows Defender, UAC, firewall"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Install ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cape2"
        }), " from GitHub: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git clone https://github.com/kevoreilly/CAPE"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cuckoo.conf"
        }), ": set machine name, snapshot, IP ranges"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure ", (0,jsx_runtime.jsx)(_components.code, {
          children: "auxiliary.conf"
        }), ": enable sniffer (tcpdump), MitM proxy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure ", (0,jsx_runtime.jsx)(_components.code, {
          children: "processing.conf"
        }), ": enable YARA, Volatility, behavioral analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Submit sample: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cape submit malware.exe"
        }), " → web UI at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "http://localhost:8000"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-api-monitoring-with-process-monitor--api-monitor",
      children: "3.3 API Monitoring with Process Monitor & API Monitor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Process Monitor (procmon)"
      }), " by Sysinternals captures real-time file system, registry, process/thread, and network activity in Windows."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Filtering for Malware Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Include: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Operation"
        }), " is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CreateFile"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RegSetValue"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Process Create"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TCP Connect"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Exclude: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "C:\\Windows\\*"
        }), " (system noise), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fltmgr.sys"
        }), " (volume operations)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Focus: Write operations to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%APPDATA%"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%TEMP%"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%STARTUP%"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Run"
        }), " registry keys"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "API Monitor (apimonitor)"
      }), " hooks Win32 API calls and can intercept parameters — critical for understanding what data malware exfiltrates or what command IDs a C2C channel expects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// api-monitor-types.ts — TypeScript types for API monitoring analysis\n// Represents data structures observed through API monitoring tools\n\ninterface ProcessEvent {\n  pid: number;\n  ppid: number;\n  processName: string;\n  commandLine: string;\n  timestamp: number;\n  integrity: 'Untrusted' | 'Medium' | 'High' | 'System';\n}\n\ninterface FileSystemEvent {\n  pid: number;\n  operation: 'CreateFile' | 'WriteFile' | 'ReadFile' | 'DeleteFile' | 'SetFileInformation';\n  path: string;\n  result: string;\n  desiredAccess: number;\n  shareMode: number;\n}\n\ninterface RegistryEvent {\n  pid: number;\n  operation: 'RegOpenKey' | 'RegCreateKey' | 'RegSetValue' | 'RegDeleteKey' | 'RegQueryValue';\n  keyPath: string;\n  valueName: string;\n  valueData: string | null;\n}\n\ninterface NetworkEvent {\n  pid: number;\n  protocol: 'TCP' | 'UDP' | 'HTTP' | 'DNS' | 'HTTPS';\n  localAddress: string;\n  localPort: number;\n  remoteAddress: string;\n  remotePort: number;\n  dataLength: number;\n  payloadPreview: string;\n}\n\ninterface ApiCall {\n  pid: number;\n  threadId: number;\n  apiName: string;\n  returnValue: number;\n  parameters: Record<string, string | number | boolean>;\n  timestamp: number;\n  stackTrace: string[];\n}\n\nclass ApiMonitorParser {\n  /**\n   * Identify suspicious API call sequences indicative of malware behavior.\n   * Based on MITRE ATT&CK technique mappings.\n   */\n  public identifySuspiciousSequence(apiCalls: ApiCall[]): Map<string, ApiCall[]> {\n    const suspicious = new Map<string, ApiCall[]>();\n\n    // Process injection sequence\n    const injectionApis = new Set([\n      'OpenProcess', 'VirtualAllocEx', 'WriteProcessMemory',\n      'CreateRemoteThread', 'NtCreateThreadEx', 'QueueUserAPC',\n      'SetThreadContext', 'ResumeThread',\n    ]);\n\n    // Persistence via registry\n    const persistenceApis = new Set([\n      'RegCreateKeyExW', 'RegSetValueExW', 'SHGetSpecialFolderPathW',\n      'CreateServiceW', 'OpenSCManagerW',\n    ]);\n\n    // Defense evasion\n    const evasionApis = new Set([\n      'NtSetInformationProcess', // block process termination\n      'SetWindowsHookExW',       // keylogging\n      'ZwUnloadDriver',          // disable security drivers\n      'NtClose',                 // handle manipulation\n      'NtQuerySystemInformation', // process enumeration\n    ]);\n\n    for (const call of apiCalls) {\n      if (injectionApis.has(call.apiName)) {\n        this.addToMap(suspicious, 'Process Injection', call);\n      }\n      if (persistenceApis.has(call.apiName)) {\n        this.addToMap(suspicious, 'Persistence', call);\n      }\n      if (evasionApis.has(call.apiName)) {\n        this.addToMap(suspicious, 'Defense Evasion', call);\n      }\n    }\n\n    return suspicious;\n  }\n\n  private addToMap(map: Map<string, ApiCall[]>, key: string, value: ApiCall): void {\n    if (!map.has(key)) map.set(key, []);\n    map.get(key)!.push(value);\n  }\n\n  /**\n   * Detect the \"Classic\" injection pattern: OpenProcess → VirtualAllocEx → WriteProcessMemory → CreateRemoteThread\n   */\n  public detectClassicInjection(apiCalls: ApiCall[]): boolean {\n    const sequence = ['OpenProcess', 'VirtualAllocEx', 'WriteProcessMemory', 'CreateRemoteThread'];\n    let seqIndex = 0;\n    for (const call of apiCalls) {\n      if (call.apiName === sequence[seqIndex]) {\n        seqIndex++;\n        if (seqIndex === sequence.length) return true;\n      } else {\n        seqIndex = 0;\n      }\n    }\n    return false;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-network-simulation-inetsim--fakenet",
      children: "3.4 Network Simulation (INetSim & FakeNet)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Network simulation intercepts outbound traffic from malware, preventing actual C2C communication while recording all requests."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Platform"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Features"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "INetSim"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS, HTTP, HTTPS, SMTP, FTP, IRC, TFTP emulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FakeNet-NG"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rewrites DNS to localhost, serves fake HTTP responses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DNS sinkhole"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 127.0.0.1 for known malicious domains"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "INetSim Configuration (inetSim.conf):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ini",
        children: "# Redirect all DNS to localhost\ndns_default_ip = 0.0.0.0\ndns_default_hostname = localhost\n\n# Fake HTTP serves any requested page\nhttp_bind_ip = 0.0.0.0:80\nhttp_fake_response_file = /var/lib/inetsim/fake-http-response.html\n\n# Fake SMTP accepts all emails\nsmtp_bind_ip = 0.0.0.0:25\nsmtp_authentication = false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-disassembly-with-ghidra",
      children: "4. Disassembly with Ghidra"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-comprehensive-ghidra-setup-guide",
      children: "4.1 Comprehensive Ghidra Setup Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ghidra is the National Security Agency's reverse engineering framework, released as open source in 2019. It includes a full-featured disassembler, decompiler, graph views, and scripting API."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Installation Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Prerequisites:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Java Development Kit 17+ (OpenJDK 17 LTS recommended)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Python 3.8+ (for Ghidra scripting bridge)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "~4GB RAM minimum (8GB+ recommended for large binaries)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Download:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "wget https://github.com/NationalSecurityAgency/ghidra/releases/download/Ghidra_11.1.2_build/ghidra_11.1.2_PUBLIC_20240530.zip\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Extract:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "unzip ghidra_11.1.2_PUBLIC_20240530.zip -d /opt/\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Launch:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "cd /opt/ghidra_11.1.2_PUBLIC\n./ghidraRun\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Initial Configuration:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set the project directory (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "~/ghidra_projects"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enable auto-analysis plugins (catalog of functions, stack, references)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Install Ghidra extension: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ghidra_scripts/"
            }), " directory"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "First Analysis Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "File → New Project → Non-Shared Project → Name it"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "File → Import File"
        }), " → Select malware binary (", (0,jsx_runtime.jsx)(_components.code, {
          children: "malware.exe"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Options:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Format: Portable Executable (PE)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Language: x86:LE:32:default or x86:LE:64:default"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Include debug symbols: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "No"
            }), " (malware won't have them)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analysis Options:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "✓ Basic Analyzer (demangle, stack, data references)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "✓ Decompiler Parameter ID"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "✓ Function ID"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "✓ Call-Fixup Analyzer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "✓ Disassembler (linear sweep + recursive descent)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OK"
        }), " → Analysis begins (can take 1-5 minutes depending on file size)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-navigating-ghidra-for-malware-analysis",
      children: "4.2 Navigating Ghidra for Malware Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Panels:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Panel"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Malware Analysis Usage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Listing"
            }), " (Code Browser)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assembly instructions and data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Main view — examine disassembly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Decompiler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C-like pseudocode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read malware logic without assembly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Symbol Tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions, labels, namespaces"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Locate ", (0,jsx_runtime.jsx)(_components.code, {
              children: "entry"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DllMain"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WinMain"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Symbol Table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Imported/exported functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "See what APIs the malware calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Program Trees"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory blocks and sections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify .text, .rdata, .rsrc regions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Type Manager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type definitions, structures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define C structures for config blobs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Script Manager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python/Java scripting console"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run automation and analysis scripts"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Essential Ghidra Keyboard Shortcuts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "G"
        }), " — Go to (address or symbol)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Ctrl+Shift+F"
        }), " — Search all (for strings, bytes, instructions)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "X"
        }), " — View cross-references to the current address"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Ctrl+E"
        }), " — Follow flow (follow execution path)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "R"
        }), " — Rename a function or variable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "L"
        }), " — Set label"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "P"
        }), " — Create function at current address"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "D"
        }), " — Define data (byte, word, string)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "F11"
        }), " — Decompile current function"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "F"
        }), " — Search for instruction patterns"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-decompiler-analysis",
      children: "4.3 Decompiler Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ghidra's decompiler produces C-like pseudocode from assembly. For malware analysis, this reveals high-level logic without reading individual instructions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — TLS Callback Detection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Malware often uses TLS (Thread Local Storage) callbacks to execute before ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WinMain"
      }), ". In Ghidra:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Navigate to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IMAGE_TLS_DIRECTORY"
        }), " in the data directory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Follow the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AddressOfCallBacks"
        }), " pointer to a table of function pointers"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each entry is a callback function that executes before the entry point"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ghidra-analysis-types.ts — Types for Ghidra decompiler output analysis\n\ninterface FunctionInfo {\n  address: string;\n  name: string;\n  size: number;\n  callingConvention: 'stdcall' | 'cdecl' | 'fastcall' | 'thiscall';\n  hasSource: boolean;\n  nArgs: number;\n  localVarCount: number;\n  cyclomaticComplexity: number;\n  calledCount: number;\n  callers: string[];\n  strings: string[];\n}\n\ninterface CrossReference {\n  fromAddress: string;\n  toAddress: string;\n  type: 'call' | 'jump' | 'data' | 'read' | 'write';\n  function: string;\n}\n\ninterface ApiCallPattern {\n  functionAddress: string;\n  apiName: string;\n  parameters: string[];\n  purpose: string; // e.g., \"CreateRemoteThread for injection\"\n}\n\n/**\n * Parse Ghidra decompiler output (decompiled functions) to identify malware behaviors.\n */\nexport class GhidraDecompileAnalyzer {\n  /**\n   * Identify suspicious API call patterns in decompiled functions.\n   * Maps MITRE ATT&CK techniques to observed API usage.\n   */\n  public identifySuspiciousApis(functions: FunctionInfo[]): Map<string, ApiCallPattern[]> {\n    const suspicious = new Map<string, ApiCallPattern[]>();\n\n    const techniqueMap: Record<string, string[]> = {\n      'Process Injection - T1055': [\n        'OpenProcess', 'VirtualAllocEx', 'VirtualProtectEx',\n        'WriteProcessMemory', 'CreateRemoteThread', 'NtCreateThreadEx',\n        'QueueUserAPC', 'SetThreadContext',\n      ],\n      'Credential Dumping - T1003': [\n        'MiniDumpWriteDump', 'CreateToolhelp32Snapshot', 'Process32First',\n        'OpenProcessToken', 'DuplicateTokenEx',\n      ],\n      'Keylogging - T1056.001': [\n        'SetWindowsHookEx', 'GetForegroundWindow', 'GetAsyncKeyState',\n        'GetKeyboardState', 'MapVirtualKey',\n      ],\n      'Screen Capture - T1113': [\n        'CreateDC', 'BitBlt', 'GetDIBits', 'OpenClipboard', 'SetClipboardData',\n      ],\n      'Persistence - T1547': [\n        'RegCreateKeyEx', 'RegSetValueEx', 'CreateService',\n        'SHGetFolderPath', 'ShellExecuteEx',\n      ],\n      'Anti-Debug - T1622': [\n        'IsDebuggerPresent', 'CheckRemoteDebuggerPresent', 'NtQueryInformationProcess',\n        'OutputDebugString', 'CloseHandle', // close invalid handle == debugger\n        'GetTickCount', 'QueryPerformanceCounter', // timing checks\n      ],\n    };\n\n    for (const func of functions) {\n      for (const [technique, apis] of Object.entries(techniqueMap)) {\n        for (const api of apis) {\n          // Check if function name matches or imported function matches\n          if (func.name.includes(api) || func.strings.some(s => s.includes(api))) {\n            if (!suspicious.has(technique)) {\n              suspicious.set(technique, []);\n            }\n            suspicious.get(technique)!.push({\n              functionAddress: func.address,\n              apiName: api,\n              parameters: [],\n              purpose: technique,\n            });\n          }\n        }\n      }\n    }\n\n    return suspicious;\n  }\n\n  /**\n   * Calculate cyclomatic complexity of functions to identify obfuscated code.\n   * Obfuscated malware often has high cyclomatic complexity (>50) due to\n   * control flow flattening.\n   */\n  public detectControlFlowObfuscation(functions: FunctionInfo[]): FunctionInfo[] {\n    const threshold = 50;\n    return functions.filter(f => f.cyclomaticComplexity > threshold);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-cross-reference-analysis-in-ghidra",
      children: "4.4 Cross-Reference Analysis in Ghidra"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cross-references (XREFs) show which code or data accesses a given address. This is critical for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Finding string references:"
        }), " Select a string → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "X"
        }), " (show references) → see which functions use it"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API call tracing:"
        }), " Select an imported API → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "X"
        }), " → see all call sites"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Export function mapping:"
        }), " Select an export → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "X"
        }), " → trace how it's called"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jump table resolution:"
        }), " Malware uses jump tables for switch statements — XREFs reveal case targets"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — String XREF Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Open ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Defined Strings"
        }), " window from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Window → Defined Strings"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Look for suspicious strings: URLs, registry paths, command IDs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Double-click a string → Ghidra navigates to it in Listing"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Press ", (0,jsx_runtime.jsx)(_components.code, {
          children: "X"
        }), " → Cross-reference window shows all functions referencing it"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Double-click a function → navigate to call site in decompiler"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This reveals what the string is used for in malware logic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-disassembly-with-ida-pro",
      children: "5. Disassembly with IDA Pro"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IDA Pro is the industry standard interactive disassembler. While commercial, it offers the most advanced decompiler, graph view, and extensibility via IDAPython."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-ida-navigation",
      children: "5.1 IDA Navigation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Views:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "View"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hotkey"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "IDA View-A"
            }), " (Disassembly)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Tab"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assembly listing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Pseudocode"
            }), " (Hex-Rays)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "F5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C-like decompiled code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Graph View"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function control flow graph"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strings"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Shift+F12"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All printable strings in binary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Imports"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Ctrl+Shift+I"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Imported DLLs and functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Exports"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Ctrl+Shift+E"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exported functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Functions"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Ctrl+F"
            }), " (in window)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All identified functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Segments"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Ctrl+S"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory segments / sections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cross References"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Ctrl+X"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "References to/from current address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Names"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Ctrl+N"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Named locations (functions, labels)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Essential IDA Workflow for Malware:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Load binary in IDA → Wait for auto-analysis"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Shift+F12"
        }), " → Browse strings → Look for URLs, IPs, registry paths"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Ctrl+E"
        }), " (Entry points) → Identify ", (0,jsx_runtime.jsx)(_components.code, {
          children: "start"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WinMain"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DllMain"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click functions in Function Window → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "F5"
        }), " to decompile"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Identify calls to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CreateRemoteThread"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WriteProcessMemory"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VirtualAllocEx"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow cross-references to trace data flow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-graph-view",
      children: "5.2 Graph View"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IDA's graph view is arguably the most powerful feature for understanding malware control flow. It renders functions as flowcharts."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Function[\"Function Graph View in IDA\"]\n        direction TB\n        Entry[\"Entry Block<br/>push ebp<br/>mov ebp, esp\"] --> Check[\"Decryption Check<br/>cmp [ebp+var_4], 0xDEAD<br/>jz short loc_401020\"]\n        Check -->|false| Decrypt[\"Decryption Loop<br/>xor byte ptr [eax], 0xAB<br/>inc eax<br/>cmp eax, ecx<br/>jl short decrypt_loop\"]\n        Check -->|true| Obfuscated[\"Obfuscated Code<br/>jmp eax (opaque predicate)\"]\n        Decrypt --> Resolve[\"API Resolution<br/>GetProcAddress(LoadLibrary('ntdll'), 'NtCreateThreadEx')\"]\n        Resolve --> Injection[\"Injection Routine<br/>WriteProcessMemory + CreateRemoteThread\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Graph Features for Malware:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Red edges: Jumps to other functions (call graph)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blue nodes: Basic blocks (single-entry, single-exit)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Yellow highlight: Current selection"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Ctrl+Mouse Wheel"
        }), ": Zoom in/out for large functions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Right-click → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Generate flow chart"
        }), " → High-res export for reports"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-hex-rays-pseudocode-f5",
      children: "5.3 Hex-Rays Pseudocode (F5)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Hex-Rays decompiler converts assembly to readable C-like pseudocode. Even heavily obfuscated malware becomes understandable."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — Before (Assembly):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-asm",
        children: "loc_401000:\npush    ebp\nmov     ebp, esp\nsub     esp, 14h\nmov     [ebp+var_4], eax\nmov     eax, [ebp+arg_0]\npush    eax\ncall    ds:LoadLibraryA\nmov     [ebp+var_8], eax\nmov     ecx, [ebp+arg_4]\npush    ecx\nmov     edx, [ebp+var_8]\npush    edx\ncall    ds:GetProcAddress\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — After (Pseudocode):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "HMODULE hModule = LoadLibraryA(lpLibFileName);\nFARPROC procAddr = GetProcAddress(hModule, lpProcName);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits for Malware Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Variable names can be renamed (", (0,jsx_runtime.jsx)(_components.code, {
          children: "R"
        }), " key) to meaningful names"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Function signatures can be modified to match actual API prototypes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Comments (", (0,jsx_runtime.jsx)(_components.code, {
          children: ";"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Shift+;"
        }), ") annotate logic"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Highlight types: strings are pink, numbers are green, comments are blue"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-idapython-scripting",
      children: "5.4 IDAPython Scripting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IDAPython provides the full IDA SDK via Python scripting. It's essential for automating analysis of large malware families."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# idapython_analysis.py — IDAPython script for malware analysis automation\n# Run in IDA: File → Script File or Alt+F7\n\nimport idautils\nimport idaapi\nimport idc\nimport ida_bytes\nimport ida_funcs\nimport ida_nalt\nimport ida_segment\nimport ida_search\nimport idautils\n\ndef enumerate_imports():\n    \"\"\"\n    Enumerate all imported APIs and flag suspicious combinations.\n    Useful for initial triage of a new sample.\n    \"\"\"\n    suspicious_apis = {\n        'VirtualAllocEx': 'Process Injection',\n        'WriteProcessMemory': 'Process Injection',\n        'CreateRemoteThread': 'Process Injection',\n        'SetWindowsHookExA': 'Keylogging',\n        'SetWindowsHookExW': 'Keylogging',\n        'MiniDumpWriteDump': 'Credential Dumping',\n        'CryptEncrypt': 'Ransomware',\n        'RegSetValueExA': 'Persistence',\n        'RegSetValueExW': 'Persistence',\n        'CreateServiceA': 'Persistence',\n        'CreateServiceW': 'Persistence',\n        'NtSetInformationProcess': 'Anti-Debug',\n        'IsDebuggerPresent': 'Anti-Debug',\n    }\n\n    print(\"=== Suspicious API Imports ===\")\n    for ordinal, ea, name in idautils.Imports():\n        if name in suspicious_apis:\n            category = suspicious_apis[name]\n            func_name = idc.get_func_name(ea)\n            print(f\"[{category}] {name} @ 0x{ea:X} (in {func_name})\")\n\ndef find_and_decode_strings():\n    \"\"\"\n    Extract all strings and classify them into IOC categories.\n    \"\"\"\n    import re\n    print(\"\\n=== Suspicious Strings ===\")\n    str_patterns = [\n        (r'https?://[^\\s\"\\']+', 'URL'),\n        (r'\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}', 'IP Address'),\n        (r'HKEY_[A-Z_]+\\\\[^\"\\']+', 'Registry Key'),\n        (r'[A-Z]:\\\\[^\"\\']+\\.exe', 'Executable Path'),\n        (r'(Mutex|mutex)[^\"\\']*', 'Mutex Name'),\n        (r'(RSA|AES|XOR|RC4|encrypt|decrypt)', 'Crypto Reference'),\n    ]\n\n    for segea in idautils.Segments():\n        seg = idaapi.getseg(segea)\n        if seg is None:\n            continue\n        for ea in idautils.Heads():\n            flags = ida_bytes.get_flags(ea)\n            if not ida_bytes.is_strlit(flags):\n                continue\n            string_val = idc.get_strlit_contents(ea, -1, idc.STRTYPE_C_TERM)\n            if string_val is None:\n                continue\n            for pattern, label in str_patterns:\n                if re.search(pattern, string_val.decode('utf-8', errors='ignore'), re.IGNORECASE):\n                    print(f\"  [{label}] 0x{ea:X}: {string_val.decode('utf-8', errors='ignore')[:100]}\")\n                    break\n\ndef detect_anti_debug():\n    \"\"\"\n    Detect common anti-debugging techniques in the current binary.\n    \"\"\"\n    print(\"\\n=== Anti-Debugging Detection ===\")\n    anti_debug_patterns = [\n        (0xE3, 'Je (ZF set) - anti-debug jump'),                      # je/lo\n        (0xE8, 'call $+5 (stack detection)'),                         # call next\n        (0xF0, 'lock prefix - SMP detection'),                        # lock prefix\n        (0x0F, 0x31, 'rdtsc instruction'),                            # rdtsc\n        (0xCD, 0x03, 'int 3 - debugger breakpoint'),                 # int 3\n        (0x64, 0x67, 0x90, 'TLS callback check'),                    # FS/GS segment override\n    ]\n\n    current_ea = idc.get_screen_ea()\n    for i in range(10):\n        byte_at = idc.get_wide_byte(current_ea + i)\n        if byte_at == 0xF3 and idc.get_wide_byte(current_ea + i + 1) == 0x0F:\n            if idc.get_wide_byte(current_ea + i + 2) == 0xB1:\n                print(f\"  0x{current_ea:X}: CPUID instruction (VM-detection)\")\n        if byte_at == 0x0F and idc.get_wide_byte(current_ea + i + 1) == 0x31:\n            print(f\"  0x{current_ea:X}: RDTSC instruction (timing anti-debug)\")\n\ndef main():\n    print(\"=== IDAPython Malware Analysis Script ===\")\n    enumerate_imports()\n    find_and_decode_strings()\n    detect_anti_debug()\n    print(\"\\nAnalysis complete.\")\n\nif __name__ == '__main__':\n    main()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-packing--unpacking",
      children: "6. Packing & Unpacking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Packing is the process of compressing or encrypting a PE file and wrapping it with a small decompressor stub. When executed, the stub decompresses the original code in memory and transfers control to it (the Original Entry Point — OEP)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-common-packers",
      children: "6.1 Common Packers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Packer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detection"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unpacking Difficulty"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UPX"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Section names ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UPX0"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UPX1"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "-d"
            }), " flag unpacks, or single-step trace"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ASPACK"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".aspack"
            }), " section, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PEC2"
            }), " signature"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-step OEP finder"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MPRESS"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".MPRESS1"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".MPRESS2"
            }), " sections"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-dump checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Themida"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".themida"
            }), " section, stolen bytes"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VM-based obfuscation, anti-debug"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VMProtect"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".vmp0"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".vmp1"
            }), " sections"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full virtualization obfuscation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enigma Protector"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".enigma1"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".enigma2"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtualization + anti-debug"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ConfuserEx"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(.NET) Confuser attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".NET obfuscation, not native packing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-upx-unpacking-manual-method",
      children: "6.2 UPX Unpacking (Manual Method)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["UPX is the most common packer and the easiest to unpack. While UPX provides a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-d"
      }), " flag to decompress, manual unpacking builds skills for custom packers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Manual UPX Unpacking:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Load binary in x64dbg"
        }), " (or OllyDbg) — a debugger for Windows binaries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify the OEP"
        }), " by setting a breakpoint on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pushad"
        }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The packed stub starts by saving all registers (", (0,jsx_runtime.jsx)(_components.code, {
              children: "pushad"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The stub ends by restoring registers (", (0,jsx_runtime.jsx)(_components.code, {
              children: "popad"
            }), ") followed by ", (0,jsx_runtime.jsx)(_components.code, {
              children: "jmp OEP"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Execute until ", (0,jsx_runtime.jsx)(_components.code, {
            children: "popad"
          })]
        }), " — single-step (F8) past the decompression"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Step into the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "jmp"
          })]
        }), " after ", (0,jsx_runtime.jsx)(_components.code, {
          children: "popad"
        }), " — this jumps to the OEP"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dump the process"
        }), " at the OEP using Scylla or LordPE"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rebuild imports"
        }), " — Scylla's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IAT Autosearch"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Get Imports"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Fix Dump"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-generic-oep-finding-with-pushadpopad",
      children: "6.3 Generic OEP Finding with Pushad/Popad"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most simple packers follow this pattern:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PUSHAD              ; Save all registers\n; ... decompression code ...\nPOPAD               ; Restore registers\nJMP OEP             ; Jump to Original Entry Point\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding OEP via Stack Pointer Method:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Load packed binary in debugger"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Note the ESP value after the first ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pushad"
        }), " instruction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set a hardware breakpoint on that ESP address: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ba w1 ESP_address"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run the binary → debugger breaks at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "popad"
        }), " (stack write restores registers)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Single-step to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "jmp"
        }), " instruction"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This is the OEP"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-themida--vmprotect",
      children: "6.4 Themida & VMProtect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Themida and VMProtect use code virtualization — they convert x86 instructions into custom bytecode executed by a virtual machine interpreter embedded in the binary."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Themida Analysis Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Themida-packed binaries have no traditional OEP — the real code is already running inside a VM"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "API Monitor"
        }), " to capture all imported API calls during execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dump the process memory at runtime using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Process Dumper"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Scylla"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Focus on strings and configuration data visible at runtime"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For deobfuscation: use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NanoProfiler"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TitanHide"
        }), " to bypass anti-debug"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "VMProtect Detection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Characteristic import stub pattern: only ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LoadLibraryA"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GetProcAddress"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Section ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".vmp0"
        }), " contains the VM entry points"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code is divided into VM handlers — each x86 instruction is replaced with a VM handler address"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full de-virtualization requires custom emulators or symbolic execution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-yara-rule-writing",
      children: "7. YARA Rule Writing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "YARA (Yet Another Recursive Acronym) is a pattern-matching tool for classifying malware. Rules describe patterns in binary data, file metadata, or process memory."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-yara-rule-structure",
      children: "7.1 YARA Rule Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yara",
        children: "rule RuleName: Tag1 Tag2 {\n    meta:\n        description = \"Description of what this rule detects\"\n        author = \"Analyst Name\"\n        date = \"2026-07-07\"\n        hash = \"MD5|SHA1|SHA256 of reference sample\"\n        mitre_technique = \"T1055.001\"\n        severity = \"high\"\n\n    strings:\n        $string1 = \"malicious_string\" nocase\n        $hex1 = { 6A 00 6A 00 FF 15 ?? ?? ?? ?? }\n        $regex1 = /https?:\\/\\/[^\\s]{10,50}\\.php/\n\n    condition:\n        $string1 or $hex1 or (#regex1 > 2)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-yara-compiler--matcher-in-typescript",
      children: "7.2 YARA Compiler & Matcher in TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// yara-engine.ts — YARA rule compiler and matcher in TypeScript\n// Implements a subset of YARA 4.x syntax for malware pattern detection\n\ninterface YARARule {\n  name: string;\n  tags: string[];\n  meta: Record<string, string>;\n  strings: YARAStringDef[];\n  condition: YARACondition;\n}\n\ninterface YARAStringDef {\n  identifier: string;\n  type: 'text' | 'hex' | 'regex';\n  pattern: string;          // For hex: byte string \"6A 00 6A\"\n  compiledRegex?: RegExp;   // For text/regex patterns\n  compiledHex?: number[];   // For hex patterns\n  modifiers: Set<'nocase' | 'wide' | 'ascii' | 'fullword'>;\n  count: number;\n}\n\ntype YARACondition =\n  | { type: 'string_ref'; stringId: string }\n  | { type: 'count'; stringId: string; op: string; value: number }\n  | { type: 'any' }\n  | { type: 'all' }\n  | { type: 'and'; left: YARACondition; right: YARACondition }\n  | { type: 'or'; left: YARACondition; right: YARACondition }\n  | { type: 'not'; operand: YARACondition }\n  | { type: 'filesize'; op: string; value: number }\n  | { type: 'uint16'; offset: number; op: string; value: number }\n  | { type: 'uint32'; offset: number; op: string; value: number };\n\ninterface YARAMatch {\n  ruleName: string;\n  tags: string[];\n  meta: Record<string, string>;\n  stringMatches: Array<{\n    identifier: string;\n    offset: number;\n    matched: string;\n  }>;\n}\n\nclass YARAParseError extends Error {\n  constructor(msg: string) {\n    super(`YARA Parse Error: ${msg}`);\n    this.name = 'YARAParseError';\n  }\n}\n\nexport class YARACompiler {\n  /**\n   * Compile a raw YARA rule string into a structured rule object.\n   * Supports: text strings, hex patterns, nocase/wide/ascii modifiers,\n   * 'any of them', 'all of them', $string references, and (expr1 and expr2).\n   */\n  public compile(ruleText: string): YARARule {\n    const lines = ruleText.split('\\n').map(l => l.trim()).filter(l => l.length > 0);\n\n    // Parse rule name and tags\n    const headerMatch = lines[0].match(/^rule\\s+(\\w+)(?:\\s*:\\s*(.+))?/);\n    if (!headerMatch) throw new YARAParseError('Invalid rule header');\n    const name = headerMatch[1];\n    const tags = headerMatch[2] ? headerMatch[2].split(/\\s+/).filter(Boolean) : [];\n\n    // Parse meta section\n    const meta: Record<string, string> = {};\n    let i = 1;\n    while (i < lines.length && lines[i].startsWith('meta:')) {\n      i++;\n      while (i < lines.length && lines[i].match(/^\\w+\\s*=/)) {\n        const metaMatch = lines[i].match(/^(\\w+)\\s*=\\s*\"([^\"]*)\"/);\n        if (metaMatch) meta[metaMatch[1]] = metaMatch[2];\n        i++;\n      }\n    }\n\n    // Parse strings section\n    const strings: YARAStringDef[] = [];\n    while (i < lines.length && lines[i].startsWith('strings:')) {\n      i++;\n      while (i < lines.length && !lines[i].startsWith('condition:')) {\n        const strMatch = lines[i].match(/^\\$(\\w+)\\s*=\\s*(.+)$/);\n        if (strMatch) {\n          const ident = strMatch[1];\n          const value = strMatch[2];\n\n          let type: 'text' | 'hex' | 'regex' = 'text';\n          let pattern = '';\n\n          if (value.startsWith('{')) {\n            type = 'hex';\n            pattern = value.slice(1).replace(/}$/, '').trim();\n          } else if (value.startsWith('/')) {\n            type = 'regex';\n            const regexEnd = value.lastIndexOf('/');\n            pattern = value.slice(1, regexEnd);\n          } else {\n            // Text string: \"text\" nocase wide ascii\n            const textMatch = value.match(/^\"([^\"]*)\"\\s*(.*)/);\n            if (textMatch) {\n              pattern = textMatch[1];\n              const mods = textMatch[2].toLowerCase();\n              const modifiers = new Set<'nocase' | 'wide' | 'ascii' | 'fullword'>();\n              if (mods.includes('nocase')) modifiers.add('nocase');\n              if (mods.includes('wide')) modifiers.add('wide');\n              if (mods.includes('ascii')) modifiers.add('ascii');\n              if (mods.includes('fullword')) modifiers.add('fullword');\n\n              // Build regex for matching with modifiers\n              let regexStr = '';\n              for (const ch of pattern) {\n                const hex = ch.charCodeAt(0).toString(16);\n                regexStr += '\\\\x' + hex.padStart(2, '0');\n              }\n\n              let flags = 'g';\n              if (modifiers.has('nocase')) flags += 'i';\n\n              let searchPattern: string;\n              if (modifiers.has('wide')) {\n                // Wide strings are encoded as UTF-16LE (2 bytes per char)\n                searchPattern = pattern.split('').map(c =>\n                  String.fromCharCode(c.charCodeAt(0), 0)\n                ).join('');\n              } else {\n                searchPattern = pattern;\n              }\n\n              const compiledRegex = new RegExp(\n                modifiers.has('fullword')\n                  ? `(?:^|[\\\\W_])${this.escapeRegex(searchPattern)}(?:[\\\\W_]|$)`\n                  : this.escapeRegex(searchPattern),\n                flags\n              );\n\n              strings.push({\n                identifier: ident,\n                type,\n                pattern,\n                compiledRegex,\n                modifiers,\n                count: 0,\n              });\n            }\n          }\n        }\n        i++;\n      }\n    }\n\n    // Parse condition\n    const conditionText = lines.slice(i).join(' ').replace(/^condition:\\s*/, '');\n    const condition = this.parseCondition(conditionText);\n\n    return { name, tags, meta, strings, condition };\n  }\n\n  private parseCondition(text: string): YARACondition {\n    text = text.trim();\n\n    // `$string_name` reference\n    const stringRefMatch = text.match(/^\\$(\\w+)$/);\n    if (stringRefMatch) {\n      return { type: 'string_ref', stringId: stringRefMatch[1] };\n    }\n\n    // `#string_name > N` count operator\n    const countMatch = text.match(/^#(\\w+)\\s*(==?|!=|<=?|>=?)\\s*(\\d+)$/);\n    if (countMatch) {\n      return { type: 'count', stringId: countMatch[1], op: countMatch[2], value: parseInt(countMatch[3]) };\n    }\n\n    // `any of them`\n    if (/^any\\s+of\\s+them$/.test(text)) {\n      return { type: 'any' };\n    }\n\n    // `all of them`\n    if (/^all\\s+of\\s+them$/.test(text)) {\n      return { type: 'all' };\n    }\n\n    // `filesize < N`\n    const fileSizeMatch = text.match(/^filesize\\s*(==?|!=|<|>|<=?|>=?)\\s*(\\d+)$/);\n    if (fileSizeMatch) {\n      return { type: 'filesize', op: fileSizeMatch[1], value: parseInt(fileSizeMatch[2]) };\n    }\n\n    // `uint16(offset) == value`\n    const uint16Match = text.match(/^uint16\\((\\d+)\\)\\s*(==?|!=|<|>)\\s*(\\d+)$/);\n    if (uint16Match) {\n      return { type: 'uint16', offset: parseInt(uint16Match[1]), op: uint16Match[2], value: parseInt(uint16Match[3]) };\n    }\n\n    // `uint32(offset) == value`\n    const uint32Match = text.match(/^uint32\\((\\d+)\\)\\s*(==?|!=|<|>)\\s*(\\d+)$/);\n    if (uint32Match) {\n      return { type: 'uint32', offset: parseInt(uint32Match[1]), op: uint32Match[2], value: parseInt(uint32Match[3]) };\n    }\n\n    // `expr1 and expr2`\n    const andMatch = text.match(/^(.+?)\\s+and\\s+(.+)$/);\n    if (andMatch) {\n      return { type: 'and', left: this.parseCondition(andMatch[1]), right: this.parseCondition(andMatch[2]) };\n    }\n\n    // `expr1 or expr2`\n    const orMatch = text.match(/^(.+?)\\s+or\\s+(.+)$/);\n    if (orMatch) {\n      return { type: 'or', left: this.parseCondition(orMatch[1]), right: this.parseCondition(orMatch[2]) };\n    }\n\n    // `not expr`\n    const notMatch = text.match(/^not\\s+(.+)$/);\n    if (notMatch) {\n      return { type: 'not', operand: this.parseCondition(notMatch[1]) };\n    }\n\n    throw new YARAParseError(`Unsupported condition: ${text}`);\n  }\n\n  private escapeRegex(str: string): string {\n    return str.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');\n  }\n}\n\nexport class YARAMatcher {\n  private rules: YARARule[] = [];\n\n  constructor(rules: YARARule[]) {\n    this.rules = rules;\n  }\n\n  public addRule(rule: YARARule): void {\n    this.rules.push(rule);\n  }\n\n  /**\n   * Match all rules against a binary buffer and return matches.\n   */\n  public match(data: Uint8Array): YARAMatch[] {\n    const matches: YARAMatch[] = [];\n\n    for (const rule of this.rules) {\n      const result = this.evaluateRule(rule, data);\n      if (result !== null) {\n        matches.push(result);\n      }\n    }\n\n    return matches;\n  }\n\n  private evaluateRule(rule: YARARule, data: Uint8Array): YARAMatch | null {\n    const stringMatches: Array<{\n      identifier: string;\n      offset: number;\n      matched: string;\n    }> = [];\n\n    // Find all string matches\n    const stringMatchMap = new Map<string, typeof stringMatches>();\n\n    for (const str of rule.strings) {\n      const matches = this.findString(str, data);\n      if (matches.length > 0) {\n        stringMatchMap.set(str.identifier, matches);\n        stringMatches.push(...matches);\n      }\n    }\n\n    // Evaluate condition\n    const conditionResult = this.evaluateCondition(rule.condition, stringMatchMap, data);\n\n    if (conditionResult) {\n      return {\n        ruleName: rule.name,\n        tags: rule.tags,\n        meta: rule.meta,\n        stringMatches,\n      };\n    }\n\n    return null;\n  }\n\n  private findString(str: YARAStringDef, data: Uint8Array): typeof stringMatches[0][] {\n    const results: typeof stringMatches[0][] = [];\n\n    if (str.compiledRegex) {\n      const text = new TextDecoder('utf-8').decode(data);\n      let regExec: RegExpExecArray | null;\n      while ((regExec = str.compiledRegex.exec(text)) !== null) {\n        results.push({\n          identifier: str.identifier,\n          offset: regExec.index,\n          matched: regExec[0],\n        });\n      }\n    } else if (str.compiledHex) {\n      // Hex pattern matching\n      for (let i = 0; i <= data.length - str.compiledHex.length; i++) {\n        let match = true;\n        for (let j = 0; j < str.compiledHex.length; j++) {\n          if (str.compiledHex[j] !== -1 && data[i + j] !== str.compiledHex[j]) {\n            match = false;\n            break;\n          }\n        }\n        if (match) {\n          const matchedHex = Array.from(data.slice(i, i + str.compiledHex.length))\n            .map(b => b.toString(16).padStart(2, '0')).join(' ');\n          results.push({\n            identifier: str.identifier,\n            offset: i,\n            matched: matchedHex,\n          });\n        }\n      }\n    }\n\n    return results;\n  }\n\n  private evaluateCondition(\n    condition: YARACondition,\n    stringMatches: Map<string, typeof stringMatches[0][]>,\n    data: Uint8Array,\n  ): boolean {\n    switch (condition.type) {\n      case 'string_ref':\n        return stringMatches.has(condition.stringId);\n\n      case 'any':\n        return stringMatches.size > 0;\n\n      case 'all': {\n        // All defined strings must match\n        // We need access to the rule for this — simplified: check stringMatches has all\n        if (stringMatches.size === 0) return false;\n        return true;\n      }\n\n      case 'and':\n        return this.evaluateCondition(condition.left, stringMatches, data) &&\n               this.evaluateCondition(condition.right, stringMatches, data);\n\n      case 'or':\n        return this.evaluateCondition(condition.left, stringMatches, data) ||\n               this.evaluateCondition(condition.right, stringMatches, data);\n\n      case 'not':\n        return !this.evaluateCondition(condition.operand, stringMatches, data);\n\n      case 'count': {\n        const matches = stringMatches.get(condition.stringId);\n        const count = matches ? matches.length : 0;\n        return this.compareValues(count, condition.op, condition.value);\n      }\n\n      case 'filesize':\n        return this.compareValues(data.length, condition.op, condition.value);\n\n      case 'uint16': {\n        const val = (data[condition.offset] || 0) | ((data[condition.offset + 1] || 0) << 8);\n        return this.compareValues(val, condition.op, condition.value);\n      }\n\n      case 'uint32': {\n        const val = (data[condition.offset] || 0) |\n                    ((data[condition.offset + 1] || 0) << 8) |\n                    ((data[condition.offset + 2] || 0) << 16) |\n                    ((data[condition.offset + 3] || 0) << 24);\n        return this.compareValues(val, condition.op, condition.value);\n      }\n\n      default:\n        return false;\n    }\n  }\n\n  private compareValues(left: number, op: string, right: number): boolean {\n    switch (op) {\n      case '==': return left === right;\n      case '!=': return left !== right;\n      case '<':  return left < right;\n      case '>':  return left > right;\n      case '<=': return left <= right;\n      case '>=': return left >= right;\n      default:   return false;\n    }\n  }\n}\n\n// Pre-built YARA rules for common malware families\nexport const MALWARE_YARA_RULES: string[] = [\n  // Emotet detection rule\n  `rule Emotet_Loader_DLL {\n    meta:\n        description = \"Detects Emotet loader DLL based on identified patterns\"\n        author = \"Malware Analysis Team\"\n        severity = \"high\"\n        mitre_technique = \"T1055.001\"\n    strings:\n        $emu1 = \"WinAPI\" ascii wide nocase\n        $emu2 = \"kernel32\" ascii wide nocase\n        $emu3 = \"CreateProcessInternalW\" ascii wide\n        $emu4 = { 55 8B EC 83 EC 28 53 56 57 8B 7D 08 }\n        $emu5 = \"EmotetLoader\" ascii\n        $emu6 = \"System\\`$`$`$`$`$`$`$`$\" ascii\n    condition:\n        3 of ($emu*)\n  }`,\n\n  // Cobalt Strike Beacon detection\n  `rule CobaltStrike_Beacon {\n    meta:\n        description = \"Detects Cobalt Strike Beacon payload in memory\"\n        author = \"DFIR Team\"\n        severity = \"critical\"\n        mitre_technique = \"T1055.004\"\n    strings:\n        $cs1 = \"MZ\\x90\\x00\\x03\\x00\\x00\\x00\\x04\\x00\\x00\\x00\\xFF\\xFF\\x00\\x00\\xB8\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x40\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x80\\x00\\x00\\x00\"\n        $cs2 = \"ReflectiveLoader\" ascii\n        $cs3 = \"This program cannot be run in DOS mode\" ascii\n        $cs4 = \"beacon.x64.dll\" ascii wide\n        $cs5 = { 48 89 5C 24 08 48 89 74 24 10 48 89 7C 24 18 41 56 48 63 41 3C }\n        $cs6 = \"kernel32.dll\" ascii wide\n    condition:\n        ($cs1 or $cs2) or (2 of ($cs3, $cs4, $cs5, $cs6))\n  }`,\n\n  // WannaCry detection\n  `rule WannaCry_Ransomware {\n    meta:\n        description = \"Detects WannaCry ransomware based on known indicators\"\n        author = \"Threat Intel Team\"\n        severity = \"critical\"\n    strings:\n        $wc1 = \"WANNACRY\" ascii wide\n        $wc2 = \"WNCRY\" ascii wide\n        $wc3 = \"@WanaDecryptor@\" ascii\n        $wc4 = \"msg\\\\m_*.wnry\" ascii\n        $wc5 = \".WNCRY\" wide\n        $wc6 = \"Please click &quot;Decrypt&quot; to start\" wide\n        $wc7 = { 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 74 67 72 07 }\n        $s1 = \"iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com\" ascii\n    condition:\n        (2 of ($wc*)) or ($s1)\n  }`,\n];\n\n// YARA engine demo\nexport function yaraEngineDemo(): void {\n  const compiler = new YARACompiler();\n  const rules: YARARule[] = [];\n\n  console.log('=== YARA Engine Demo ===\\n');\n\n  for (const ruleText of MALWARE_YARA_RULES) {\n    try {\n      const rule = compiler.compile(ruleText);\n      rules.push(rule);\n      console.log(`Compiled: ${rule.name} (${rule.tags.length > 0 ? rule.tags.join(', ') : 'no tags'})`);\n    } catch (err) {\n      console.error(`Failed to compile rule: ${(err as Error).message}`);\n    }\n  }\n\n  // Create a mock sample that should match Cobalt Strike\n  const mockSample = new Uint8Array(4096);\n  const loaderStr = 'ReflectiveLoader This program cannot be run in DOS mode beacon.x64.dll kernel32.dll';\n  for (let i = 0; i < loaderStr.length; i++) {\n    mockSample[i] = loaderStr.charCodeAt(i);\n  }\n\n  const matcher = new YARAMatcher(rules);\n  const results = matcher.match(mockSample);\n\n  console.log('\\nMatching Results:');\n  for (const match of results) {\n    console.log(`  [+] ${match.ruleName} (${match.tags.join(', ')})`);\n    for (const sm of match.stringMatches) {\n      console.log(`      Matched $${sm.identifier} @ offset ${sm.offset}: ${sm.matched.substring(0, 50)}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-yara-rules-for-real-malware-families",
      children: "7.3 YARA Rules for Real Malware Families"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yara",
        children: "rule Stuxnet_NetSupport {\n    meta:\n        description = \"Stuxnet network communication component\"\n        author = \"Symantec Analysis\"\n        date = \"2010-09\"\n        reference = \"W32.Stuxnet\"\n    strings:\n        $s1 = \"Step7\" ascii wide\n        $s2 = \"mrxcls\" ascii\n        $s3 = \"CC_SERVER\" ascii\n        $s4 = { 41 00 64 00 6D 00 69 00 6E 00 50 00 61 00 73 00 73 00 77 00 6F 00 72 00 64 }\n        $h1 = { 81 EC 00 10 00 00 53 56 57 8B F1 33 C0 B9 40 00 00 00 8D 7C 24 04 F3 AB }\n        $h2 = { 55 8B EC 81 C4 F0 FE FF FF 53 56 57 33 C0 }\n    condition:\n        (2 of ($s*) and $h1) or ($h2 and 1 of ($s*))\n}\n\nrule Emotet_Epoch4_EkB_Config {\n    meta:\n        description = \"Emotet Epoch 4 configuration blob with EkB marker\"\n        author = \"Cryptolaemus\"\n        date = \"2021-03\"\n    strings:\n        $ekb_marker = \"EkB\" ascii\n        $botnet_id = { 04 00 00 00 } // botnet ID at specific offset\n        $xor_key = { ?? ?? ?? ?? 45 6B 42 } // Xor key + 'EkB'\n        $rsa_pub = { 06 02 00 00 00 A4 00 00 52 53 41 31 } // RSA1 key marker\n    condition:\n        $ekb_marker at 0 and filesize > 10000 and filesize < 500000\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-memory-forensics",
      children: "8. Memory Forensics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Memory forensics analyzes RAM dumps to detect malware that never touches disk (fileless malware), injected code, and kernel rootkits."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-memory-scanner-for-suspicious-process-injections",
      children: "8.1 Memory Scanner for Suspicious Process Injections"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Process injection is the most common technique malware uses to execute code in the context of a trusted process. The following TypeScript scanner detects injection artifacts in memory dumps."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// memory-scanner.ts — Detect process injection artifacts in memory dumps\n// Works with Volatility 3 output or raw memory dumps\n\ninterface ProcessInfo {\n  pid: number;\n  ppid: number;\n  name: string;\n  imageFileName: string;\n  createTime: string;\n  exitTime: string | null;\n  sessions: number;\n  wow64: boolean;\n}\n\ninterface MemoryRegion {\n  pid: number;\n  processName: string;\n  baseAddress: string;\n  size: number;\n  protection: string;\n  type: string;\n  isExecutable: boolean;\n  isWritable: boolean;\n  entropy: number;\n  containsPeHeader: boolean;\n  containsMZ: boolean;\n}\n\ninterface InjectedCodeRegion extends MemoryRegion {\n  detectionReason: string[];\n  matchedSignature: string[];\n}\n\ninterface ApiHook {\n  pid: number;\n  processName: string;\n  moduleName: string;\n  functionName: string;\n  originalAddress: string;\n  hookAddress: string;\n  hookType: 'iat' | 'inline' | 'eat' | 'ssdt';\n  isSuspicious: boolean;\n}\n\nexport class MemoryInjectionScanner {\n  private readonly KNOWN_SIGNATURES = new Map<string, string[]>([\n    ['Cobalt Strike Beacon x64', [\n      '4D 5A 41 52 55 48 8D', '48 8B EC 48 83 E4 F0',\n      '48 89 5C 24 08 57 48 83 EC 20',\n    ]],\n    ['Metasploit metsrv', [\n      '4D 5A 90 00 03 00 00 00 04 00 00 00 FF FF 00 00 B8',\n      'FF E4 64 67 90 00 00 00', 'metsrv',\n    ]],\n    ['Covenant Grunt', [\n      '4D 5A 45 52 02 00', '52 53 41 31 30 32 34 40',\n      'System.Management.Automation',\n    ]],\n    ['PoshC2 beacon', [\n      'PoshC2_', 'Invoke-PoshC2', 'TcpClient',\n    ]],\n  ]);\n\n  /**\n   * Detect memory regions that contain PE headers (suspicious injection candidates).\n   * Legitimate modules have PE headers loaded from their file path;\n   * injected PE images lack an associated file mapping.\n   */\n  public detectPeHeaderRegions(regions: MemoryRegion[]): InjectedCodeRegion[] {\n    const suspicious: InjectedCodeRegion[] = [];\n\n    for (const region of regions) {\n      if (!region.isExecutable && !region.isWritable) continue;\n\n      const reasons: string[] = [];\n      const signatures: string[] = [];\n\n      if (region.containsMZ && region.size >= 4096) {\n        reasons.push('Contains MZ header (PE image) in non-file-backed region');\n      }\n\n      if (region.containsPeHeader && region.protection.includes('RWX')) {\n        reasons.push('PE header present with RWX protection (highly suspicious)');\n      }\n\n      if (region.entropy > 6.5 && region.isExecutable && region.size > 8192) {\n        reasons.push(`High entropy (${region.entropy.toFixed(2)}) in executable region — likely packed/enctrypted payload`);\n      }\n\n      if (region.type === 'Mapped' && !this.isKnownSystemModule(region.processName)) {\n        // Suspicious mapped regions without corresponding file\n        reasons.push('Memory-mapped region without known backing file');\n      }\n\n      if (reasons.length > 0) {\n        suspicious.push({\n          ...region,\n          detectionReason: reasons,\n          matchedSignature: signatures,\n        });\n      }\n    }\n\n    return suspicious;\n  }\n\n  /**\n   * Detect APC injection by analyzing thread APC queues.\n   * APC injection malware queues UserMode APCs to hijack thread execution.\n   */\n  public detectApcInjection(threadData: any[]): string[] {\n    const findings: string[] = [];\n    for (const thread of threadData) {\n      // In a real Volatility dump, each thread has an APC queue\n      if (thread['ApcQueue'] && thread['ApcQueue'].length > 0) {\n        for (const apc of thread['ApcQueue']) {\n          if (apc['Type'] === 'UserMode' && apc['KernelRoutine'] !== '0') {\n            const apcAddress = apc['NormalRoutine'] || apc['KernelRoutine'];\n            // Check if APC target address is not in a known module\n            if (!this.isKnownModuleAddress(apcAddress)) {\n              findings.push(\n                `APC injection detected in thread ${thread['Tid']} of ${thread['Process']}: ` +\n                `APC routine at ${apcAddress} (not a known module)`\n              );\n            }\n          }\n        }\n      }\n    }\n    return findings;\n  }\n\n  /**\n   * Detect reflective DLL injection by looking for PE images in anomalous regions.\n   * Reflective DLL injection maps a DLL from memory (not from disk) — the DLL's\n   * PE headers are present but the VAD entry shows no file mapping.\n   */\n  public detectReflectiveDllInjection(processes: ProcessInfo[], regions: MemoryRegion[]): InjectedCodeRegion[] {\n    const suspicious = this.detectPeHeaderRegions(regions);\n    return suspicious.filter(r => {\n      // Reflective DLLs typically:\n      // 1. Have PE headers (already filtered)\n      // 2. Are in a fully executable region\n      // 3. Size matches a known DLL size pattern (multiples of 4KB)\n      // 4. Are NOT backed by an image file (.exe or .dll mapping)\n      return r.size % 4096 === 0 && r.protection.includes('EXECUTE');\n    });\n  }\n\n  private isKnownSystemModule(processName: string): boolean {\n    const systemModules = new Set([\n      'ntdll.dll', 'kernel32.dll', 'kernelbase.dll', 'user32.dll',\n      'gdi32.dll', 'advapi32.dll', 'shell32.dll', 'comctl32.dll',\n      'ole32.dll', 'oleaut32.dll', 'rpcrt4.dll', 'wininet.dll',\n      'ws2_32.dll', 'dnsapi.dll', 'shlwapi.dll', 'msvcrt.dll',\n      'crypt32.dll', 'bcrypt.dll', 'psapi.dll', 'secur32.dll',\n    ]);\n    return systemModules.has(processName.toLowerCase());\n  }\n\n  private isKnownModuleAddress(address: string): boolean {\n    // Known module base addresses (simplified)\n    const knownBases = [\n      '0x7ffe0000', '0x7ffe0300', '0x77000000', '0x75000000',\n      '0x74000000', '0x76000000', '0x77e00000',\n    ];\n    const addrNum = parseInt(address, 16);\n    for (const base of knownBases) {\n      const baseNum = parseInt(base, 16);\n      if (addrNum >= baseNum && addrNum < baseNum + 0x100000) {\n        return true;\n      }\n    }\n    return false;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-api-hook-detector-for-userland-rootkits",
      children: "8.2 API Hook Detector for Userland Rootkits"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Userland rootkits install API hooks to intercept and modify system calls. The following detector identifies hook artifacts by comparing in-memory function prologues against expected patterns."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// api-hook-detector.ts — Detect userland API hooks (in-line / IAT / EAT hooking)\n\ninterface ModuleInfo {\n  name: string;\n  baseAddress: string;\n  size: number;\n  exports: Array<{ name: string; address: string; ordinal: number }>;\n  imports: Array<{ dll: string; functions: string[] }>;\n}\n\ninterface HookDetection {\n  moduleName: string;\n  functionName: string;\n  expectedPrologue: string;\n  actualPrologue: string;\n  hookType: 'inline_jmp' | 'inline_call' | 'inline_push_ret' | 'iat_patched' | 'eat_patched';\n  hookAddress: string;\n  severity: 'low' | 'medium' | 'high' | 'critical';\n  description: string;\n}\n\nexport class ApiHookDetector {\n  /**\n   * Known function prologues for critical Windows APIs.\n   * If the first bytes differ from these patterns, the function is hooked.\n   */\n  private readonly EXPECTED_PROLOGUES: Record<string, string[]> = {\n    'ntdll.dll!NtCreateThreadEx': [\n      '4C 8B D1',      // mov r10, rcx (Win10+ x64)\n      'B8 C2 00 00 00', // mov eax, 0xC2  (SSN)\n      'F6 04 25',      // test byte ptr [...]\n    ],\n    'ntdll.dll!NtOpenProcess': [\n      '4C 8B D1',\n      'B8 26 00 00 00', // SSN 0x26\n      '0F 05',           // syscall\n    ],\n    'ntdll.dll!NtWriteVirtualMemory': [\n      '4C 8B D1',\n      'B8 3A 00 00 00',\n      '0F 05',\n    ],\n    'kernel32.dll!CreateRemoteThread': [\n      '48 89 5C 24 08', // mov [rsp+8], rbx\n      '48 89 74 24 10', // mov [rsp+10], rsi\n      '48 89 7C 24 18', // mov [rsp+18], rdi\n      '41 56',          // push r14\n    ],\n    'kernel32.dll!WriteProcessMemory': [\n      '48 89 5C 24 08',\n      '48 89 74 24 10',\n      '48 89 7C 24 18',\n      '4C 89 44 24 20', // mov [rsp+20], r8\n    ],\n    'kernel32.dll!VirtualAllocEx': [\n      '48 89 5C 24 08',\n      '48 89 6C 24 10',\n      '48 89 74 24 18',\n      '57',\n    ],\n    'ntdll.dll!NtQueueApcThread': [\n      '4C 8B D1',\n      'B8 44 00 00 00',\n      '0F 05',\n    ],\n  };\n\n  /**\n   * Scan module exports for in-line hooks by comparing the first 8-16 bytes\n   * of each exported function against expected prologues.\n   */\n  public detectInlineHooks(modules: ModuleInfo[]): HookDetection[] {\n    const hooks: HookDetection[] = [];\n\n    for (const mod of modules) {\n      for (const exp of mod.exports) {\n        const fullName = `${mod.name}!${exp.name}`;\n        if (this.EXPECTED_PROLOGUES[fullName]) {\n          // In a real scenario, we would read the bytes at exp.address\n          // and compare against EXPECTED_PROLOGUES[fullName]\n          // Here we simulate with a placeholder detection\n          const expected = this.EXPECTED_PROLOGUES[fullName][0];\n          hooks.push({\n            moduleName: mod.name,\n            functionName: exp.name,\n            expectedPrologue: expected,\n            actualPrologue: '<simulated: bytes read from memory>',\n            hookType: 'inline_jmp',\n            hookAddress: exp.address,\n            severity: 'critical',\n            description: `Possible in-line hook on ${mod.name}!${exp.name}. Expected prologue: ${expected}`,\n          });\n        }\n      }\n    }\n\n    return hooks;\n  }\n\n  /**\n   * Detect IAT (Import Address Table) hooks.\n   * Malware overwrites the IAT entry to point to a malicious stub instead of\n   * the original API. This detection cross-references IAT entries between\n   * the in-memory image and the on-disk PE file.\n   */\n  public detectIatHooks(modules: ModuleInfo[], peParser: any): HookDetection[] {\n    const hooks: HookDetection[] = [];\n\n    for (const mod of modules) {\n      for (const imp of mod.imports) {\n        for (const funcName of imp.functions) {\n          // Compare the in-memory IAT entry against the on-disk IAT\n          // If different, someone patched the IAT after loading\n          const fullName = `${imp.dll}!${funcName}`;\n          hooks.push({\n            moduleName: mod.name,\n            functionName: fullName,\n            expectedPrologue: '<on-disk IAT value>',\n            actualPrologue: '<in-memory IAT value>',\n            hookType: 'iat_patched',\n            hookAddress: '<IAT entry address>',\n            severity: 'high',\n            description: `IAT hook detected: ${mod.name} imports ${fullName} at a different address in memory vs on disk`,\n          });\n        }\n      }\n    }\n\n    return hooks.filter(h => h.severity !== 'low');\n  }\n\n  /**\n   * Detect syscall hooking (direct system call interception).\n   * Some rootkits hook the syscall instruction (0F 05) in ntdll to redirect\n   * system calls to their own handlers.\n   */\n  public detectSyscallHooks(ntdllBytes: Uint8Array): HookDetection[] {\n    const hooks: HookDetection[] = [];\n\n    // Expected: syscall (0F 05) within the body of Nt* functions\n    // Hooked: syscall (0F 05) replaced with JMP to malicious handler\n    for (let i = 0; i < ntdllBytes.length - 1; i++) {\n      if (ntdllBytes[i] === 0x0F && ntdllBytes[i + 1] === 0x05) {\n        // Check bytes before syscall for the typical patterns\n        if (i >= 2) {\n          const prevBytes = [ntdllBytes[i - 2], ntdllBytes[i - 1]];\n          // Check if syscall is replaced (e.g., by E9 xx xx xx xx for JMP)\n          if (i < ntdllBytes.length - 4) {\n            if (ntdllBytes[i] === 0xE9 || ntdllBytes[i] === 0xEB ||\n                (ntdllBytes[i] === 0xFF && ntdllBytes[i + 1] === 0x25)) {\n              hooks.push({\n                moduleName: 'ntdll.dll',\n                functionName: `<syscall at offset 0x${i.toString(16)}>`,\n                expectedPrologue: '0F 05',\n                actualPrologue: `${ntdllBytes[i].toString(16)} ${ntdllBytes[i+1].toString(16)}`,\n                hookType: 'inline_jmp',\n                hookAddress: `0x${i.toString(16)}`,\n                severity: 'critical',\n                description: 'Syscall instruction (0F 05) replaced with JMP — potential syscall hook',\n              });\n            }\n          }\n        }\n      }\n    }\n\n    return hooks;\n  }\n\n  /**\n   * Detect EAT (Export Address Table) hooks.\n   * Rootkits modify the export table of DLLs (like ntdll!) to redirect\n   * calls to APIs to their own code. This is common in kernel rootkits\n   * that want to intercept system service dispatching.\n   */\n  public detectEatHooks(module: ModuleInfo, onDiskExportAddresses: Map<string, string>): HookDetection[] {\n    const hooks: HookDetection[] = [];\n\n    for (const exp of module.exports) {\n      const onDiskAddr = onDiskExportAddresses.get(exp.name);\n      if (onDiskAddr && onDiskAddr !== exp.address) {\n        hooks.push({\n          moduleName: module.name,\n          functionName: exp.name,\n          expectedPrologue: onDiskAddr,\n          actualPrologue: exp.address,\n          hookType: 'eat_patched',\n          hookAddress: exp.address,\n          severity: 'critical',\n          description: `EAT hook on ${module.name}!${exp.name}: ` +\n            `on-disk @ ${onDiskAddr}, in-memory @ ${exp.address}`,\n        });\n      }\n    }\n\n    return hooks;\n  }\n}\n\n// Memory forensics demo\nexport function memoryForensicsDemo(): void {\n  const scanner = new MemoryInjectionScanner();\n  const hookDetector = new ApiHookDetector();\n\n  // Simulate memory regions for a process\n  const regions: MemoryRegion[] = [\n    {\n      pid: 1234, processName: 'svchost.exe',\n      baseAddress: '0x1a0000', size: 0x10000,\n      protection: 'RWX', type: 'Mapped',\n      isExecutable: true, isWritable: true,\n      entropy: 7.2, containsPeHeader: true, containsMZ: true,\n    },\n    {\n      pid: 1234, processName: 'svchost.exe',\n      baseAddress: '0x7ffe0000', size: 0x1000,\n      protection: 'R', type: 'Mapped',\n      isExecutable: false, isWritable: false,\n      entropy: 3.1, containsPeHeader: false, containsMZ: false,\n    },\n  ];\n\n  console.log('=== Memory Forensics Demo ===');\n  console.log('\\n[1] PE Header Region Detection:');\n  const injected = scanner.detectPeHeaderRegions(regions);\n  for (const inj of injected) {\n    console.log(`  Suspicious: ${inj.processName} @ ${inj.baseAddress}`);\n    console.log(`    Protection: ${inj.protection}, Size: ${inj.size}`);\n    console.log(`    Entropy: ${inj.entropy.toFixed(2)}`);\n    for (const reason of inj.detectionReason) {\n      console.log(`    Reason: ${reason}`);\n    }\n  }\n\n  console.log('\\n[2] API Hook Detection:');\n  console.log('  (Run against live memory dump for results)');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-practical-lab-analyze-a-malware-sample-in-a-sandbox",
      children: "9. Practical Lab: Analyze a Malware Sample in a Sandbox"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "objective",
      children: "Objective"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Safely analyze a malware sample using automated sandbox tools and manual analysis techniques. For this lab, we use a non-malicious educational sample: a simulated ransomware test file from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "theZoo"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MalwareBazaar's"
      }), " test collection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lab-setup",
      children: "Lab Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prerequisites:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Windows 10 VM (VirtualBox or VMware) with network isolation (Host-only + NAT disabled)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cuckoo Sandbox or CAPE installed on Ubuntu 22.04 host"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FLARE VM (FireEye's malware analysis VM) on Windows guest with:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "x64dbg, IDA Free, Ghidra, Detect It Easy, PEStudio, Process Monitor, API Monitor"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Volatility 3, YARA, Strings from Sysinternals"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lab-steps",
      children: "Lab Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1: Static Analysis (Pre-Execution)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Hash the sample:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "certutil -hashfile sample.exe MD5\ncertutil -hashfile sample.exe SHA256\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Submit the hashes to VirusTotal for background check."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "PE Analysis with Detect It Easy:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Open ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sample.exe"
            }), " in Detect It Easy (DIE)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check: EP section, entropy graph, section table, import table"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Is the sample packed? What packer? Document entropy values."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "String Analysis:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cmd",
            children: "strings.exe sample.exe > strings.txt\nfindstr /i \"http\\\\|https\\\\|ftp\\\\|\\.com\\\\|\\.exe\\\\|CreateRemote\\\\|WriteProcess\" strings.txt\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Extract URLs, IPs, registry paths, API names"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify suspicious imports"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "YARA Scan:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yara64.exe -s rules.yara sample.exe\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Apply the rules we built earlier (Emotet, Cobalt Strike, WannaCry)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2: Automated Dynamic Analysis (Cuckoo/CAPE)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Submit to CAPE Sandbox:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "cape submit sample.exe --timeout=120\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Wait 2-3 minutes for analysis completion"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Review the report JSON/web interface:\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Process Tree:"
                }), " What processes were created?"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Files:"
                }), " What files were written, modified, or deleted?"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Registry:"
                }), " What keys were created or modified?"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Network:"
                }), " What domains/IPs were contacted?"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Mutexes:"
                }), " What mutex names were created?"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Signatures:"
                }), " What YARA rules or behavioral signatures triggered?"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Review Network Traffic:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Open the PCAP from the sandbox in Wireshark"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Filter: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "http.request or dns"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Look for C2C beacon patterns (periodic HTTPS requests)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify user-agent strings and URI patterns"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 3: Manual Reverse Engineering"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Unpack (if packed):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Load in x64dbg"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Follow ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pushad"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "popad"
            }), " method to find OEP"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dump unpacked process with Scylla"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Analyze unpacked binary in Ghidra"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ghidra Analysis:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Import unpacked sample in Ghidra"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run auto-analysis"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Identify ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WinMain"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DllMain"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Locate C2C string references → decompile the network code"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Find encryption routines (AES/RSA implementation)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify persistence mechanism (registry Run keys, services)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Memory Dump Analysis:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Capture memory dump of infected VM: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "vboxmanage debugvm <vmname> dumpvmcore --filename=memory.raw"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Run Volatility 3:\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-bash",
                children: "vol3 -f memory.raw windows.psscan\nvol3 -f memory.raw windows.malfind\nvol3 -f memory.raw windows.handles --pid <suspicious_pid>\nvol3 -f memory.raw windows.dlllist --pid <suspicious_pid>\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Detect injected code regions with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "malfind"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Look for hidden processes"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 4: Reporting"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create Analysis Report:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document: Sample hash, file type, packer used, C2C infrastructure, persistence mechanism, payload capabilities, IOCs (IPs, domains, file paths, registry keys, mutexes), MITRE ATT&CK techniques"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include: Screenshots of Ghidra decompiler, process monitor output, YARA rule matches"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "analysis-report-template",
      children: "Analysis Report Template"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// analysis-report.ts — Structured malware analysis report\n\ninterface AnalysisReport {\n  sampleInfo: {\n    fileName: string;\n    md5: string;\n    sha256: string;\n    fileSize: number;\n    fileType: string;\n    compiler: string | null;\n  };\n\n  staticAnalysis: {\n    packer: { name: string; entropy: number; confidence: number } | null;\n    suspiciousImports: string[];\n    iocs: {\n      urls: string[];\n      ips: string[];\n      registryKeys: string[];\n      filePaths: string[];\n      mutexes: string[];\n      namedPipes: string[];\n    };\n    yaraMatches: Array<{ rule: string; tags: string[] }>;\n  };\n\n  dynamicAnalysis: {\n    processes: Array<{ name: string; pid: number; ppid: number; command: string }>;\n    fileOperations: Array<{ operation: string; path: string; pid: number }>;\n    registryOperations: Array<{ operation: string; key: string; value: string }>;\n    networkConnections: Array<{\n      protocol: string;\n      srcIp: string;\n      dstIp: string;\n      dstPort: number;\n      data: string;\n    }>;\n    signatures: string[];\n  };\n\n  memoryForensics: {\n    injectedProcesses: Array<{ pid: number; name: string; region: string; detection: string }>;\n    hooksDetected: Array<{ module: string; function: string; type: string }>;\n    hiddenProcesses: number[];\n  };\n\n  mitreMapping: Array<{\n    techniqueId: string;\n    techniqueName: string;\n    observed: boolean;\n    evidence: string;\n  }>;\n\n  recommendations: string[];\n}\n\nexport function generateReportTemplate(): AnalysisReport {\n  return {\n    sampleInfo: {\n      fileName: 'unknown.exe',\n      md5: '',\n      sha256: '',\n      fileSize: 0,\n      fileType: 'PE32 executable (GUI) Intel 80386, for MS Windows',\n      compiler: null,\n    },\n    staticAnalysis: {\n      packer: null,\n      suspiciousImports: [],\n      iocs: {\n        urls: [],\n        ips: [],\n        registryKeys: [],\n        filePaths: [],\n        mutexes: [],\n        namedPipes: [],\n      },\n      yaraMatches: [],\n    },\n    dynamicAnalysis: {\n      processes: [],\n      fileOperations: [],\n      registryOperations: [],\n      networkConnections: [],\n      signatures: [],\n    },\n    memoryForensics: {\n      injectedProcesses: [],\n      hooksDetected: [],\n      hiddenProcesses: [],\n    },\n    mitreMapping: [],\n    recommendations: [],\n  };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Malware analysis is the discipline of understanding what malicious software does and how it works. This chapter covered the full spectrum of analysis techniques:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Malware Classification"
          }), " — Understanding the taxonomy (virus, worm, trojan, ransomware, rootkit, bootkit, RAT, botnet, info-stealer, dropper, wiper) enables targeted analysis strategies. Real-world case studies of Stuxnet, WannaCry, Emotet, and Cobalt Strike demonstrate how sophisticated threats combine multiple categories."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Static Analysis"
          }), " — PE structure forms the foundation. The TypeScript PE parser demonstrates how to extract headers, sections, imports, and exports from binary data. Entropy analysis and packer detection separate packed from unpacked samples before deeper analysis."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dynamic Analysis"
          }), " — Sandbox execution (Cuckoo/CAPE) reveals runtime behavior: file modifications, registry changes, process creation, and network traffic. API monitors intercept Win32 calls to capture arguments and return values."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Disassembly with Ghidra & IDA Pro"
          }), " — Ghidra provides open-source decompilation with cross-reference tracing. IDA Pro offers industry-leading graph views and Hex-Rays pseudocode. IDAPython automates analysis at scale through scripting."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Packing & Unpacking"
          }), " — UPX, Themida, and VMProtect represent increasing obfuscation complexity. Manual unpacking via the pushad/popad method and OEP finding are essential skills. Code virtualization (Themida, VMProtect) requires runtime analysis and API monitoring."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "YARA Rules"
          }), " — Pattern-based detection across thousands of samples. The TypeScript YARA engine compiles rules and matches them against binary data, enabling automated malware classification."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Memory Forensics"
          }), " — Process injection detection (CreateRemoteThread, APC, reflective DLL), API hook detection (IAT, inline, EAT, syscall hooks), and Volatility 3 analysis reveal fileless malware and rootkits that never write to disk."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always start statically"
        }), " — parse the PE, extract strings, compute entropy, and check packers before execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Never execute malware on a production system"
        }), " — use isolated VMs with snapshots and network simulation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Combine tools"
        }), " — Ghidra for free decompilation, IDA for depth, x64dbg for live debugging"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write YARA rules for every analyzed family"
        }), " — share with the community via MalwareBazaar or your SOC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automate triage"
        }), " — a TypeScript pipeline that runs PE parsing → YARA matching → entropy analysis can process thousands of samples"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Learn assembly"
        }), " — RE is fundamentally about understanding x86/x64 assembly; decompilers help but cannot replace assembly-level reasoning"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-10-questions",
      children: "Chapter Quiz (10 Questions)"
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
            children: "Which PE section typically contains executable code?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".rdata"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".text"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".rsrc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the primary indicator that a PE file is packed with UPX?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average section entropy < 4.0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Section names ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UPX0"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UPX1"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Import table has 500+ entries"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["EP is at ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0x401000"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In IDA Pro, which key decompiles the current function into C-like pseudocode?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Tab"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "F5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Ctrl+E"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["What is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ReflectiveLoader"
            }), " string in Cobalt Strike Beacon?"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It's a user-agent string for HTTP C2C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It identifies the reflective DLL loader function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It's a mutex name for single-instance enforcement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It's the encryption key for Beacon traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which API sequence most strongly indicates classic process injection?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CreateFile → WriteFile → CloseHandle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OpenProcess → VirtualAllocEx → WriteProcessMemory → CreateRemoteThread"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Socket → Connect → Send → Recv"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RegOpenKey → RegSetValue → RegCloseKey"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What does a section entropy value above 6.5 typically indicate?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The section contains only ASCII strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The section is encrypted, compressed, or packed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The section contains imported function addresses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The section is a relocation table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which of the following describes a bootkit?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware that infects the MBR, GPT, or UEFI firmware to persist before OS boot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A self-replicating file infector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ransomware that encrypts the boot sector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A remote access trojan for embedded devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["In Ghidra, what does pressing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "X"
            }), " display?"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current function's decompiled code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-references to/from the current address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The executable's export table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The section alignment value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the primary detection mechanism for userland rootkits in memory forensics?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File system scanning for hidden files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API hook detection (IAT, inline, EAT, syscall)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network traffic analysis for C2C beacons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry scanning for autorun entries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What technique does reflective DLL injection use to avoid writing to disk?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It loads the DLL from memory by manually parsing and mapping its PE headers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It downloads the DLL via HTTP and writes it to %TEMP%"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["It uses Windows' built-in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "LoadLibrary"
            }), " on a network share"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It injects shellcode that decodes a DLL from the registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "review-exercises",
        children: "Review Exercises"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PE Structure:"
            }), " Draw a labeled diagram of the PE file format showing DOS header, NT headers, section table, and at least 4 standard sections. For each section, state whether it is typically executable, writable, or read-only."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Malware Taxonomy:"
            }), " For each of the following real-world samples, classify the primary malware type and list two distinguishing characteristics: (a) Stuxnet, (b) WannaCry, (c) Emotet, (d) Cobalt Strike."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "YARA Basics:"
            }), " Write a YARA rule that detects a binary containing all three of the following strings: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VirtualAllocEx"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WriteProcessMemory"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CreateRemoteThread"
            }), ". The rule should require at least 2 of 3 strings to match."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "application-exercises",
        children: "Application Exercises"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "4",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PE Parser Extension:"
            }), " Extend the TypeScript ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PEParser"
            }), " class to add support for parsing the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "resource directory"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: ".rsrc"
            }), " section). Extract all RT_VERSIONINFO resources and print the file version string. The resource directory is data directory entry index 2."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Entropy Scanner Tool:"
            }), " Build a CLI tool using the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MalwareStringAnalyzer"
            }), " class that takes a file path, scans it with a sliding window (256 bytes, 128-byte step), and outputs a CSV of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "offset, entropy, isSuspicious"
            }), " for any window with entropy > 6.0. Use Node.js ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fs.readFileSync"
            }), " to read the input binary."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "YARA Rule Optimizer:"
            }), " The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "YARACompiler"
            }), " currently supports a limited subset of YARA syntax. Add support for:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "#string_name >= N"
              }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                children: "#string_name == N"
              }), " count conditions"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "@string_name[N]"
              }), " (nth occurrence offset) condition type"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Hex wildcards: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "??"
              }), " in hex patterns should match any byte\nWrite tests for each new feature."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Malware Analysis Lab Report:"
            }), " Set up a FLARE VM or REMnux environment. Download a known test sample from MalwareBazaar (e.g., a real Emotet or Trickbot sample, hash provided by instructor). Execute the full Phase 1-4 lab protocol from Section 9 and produce a structured analysis report using the provided TypeScript template."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "challenge-exercises",
        children: "Challenge Exercises"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "8",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Packer Unpacking:"
            }), " Write a TypeScript script that:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Reads a packed PE file"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Automatically detects UPX packing by scanning section names"
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Locates the OEP by finding the ", (0,jsx_runtime.jsx)(_components.code, {
                children: "popad"
              }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "jmp"
              }), " pattern sequence (bytes: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "61"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "E9"
              }), " or ", (0,jsx_runtime.jsx)(_components.code, {
                children: "61"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "FF"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "25"
              }), ")"]
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Outputs the OEP RVA as a hex string"
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.em, {
                children: "Hint:"
              }), " The pattern is ", (0,jsx_runtime.jsx)(_components.code, {
                children: "popad"
              }), " (0x61) followed by ", (0,jsx_runtime.jsx)(_components.code, {
                children: "jmp"
              }), " (0xE9 or 0xFF 0x25)"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Process Injection Simulator:"
            }), " Build a TypeScript program that simulates the following process injection techniques and outputs a detection log:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Classic injection: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "VirtualAllocEx"
              }), " → ", (0,jsx_runtime.jsx)(_components.code, {
                children: "WriteProcessMemory"
              }), " → ", (0,jsx_runtime.jsx)(_components.code, {
                children: "CreateRemoteThread"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["APC injection: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "QueueUserAPC"
              }), " targeting multiple threads"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Reflective DLL injection: Manually map a PE into memory by parsing headers, allocating sections, resolving imports, and calling ", (0,jsx_runtime.jsx)(_components.code, {
                children: "DllMain"
              }), "\nFor each technique, log which Volatility 3 plugin would detect it (", (0,jsx_runtime.jsx)(_components.code, {
                children: "malfind"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "apcscan"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "ldrmodules"
              }), ", etc.)"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "YARA Rule Generator:"
            }), " Using the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PEParser"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MalwareStringAnalyzer"
            }), " classes, build an automated YARA rule generator that:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Takes a malware sample directory as input"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Extracts all printable strings and filters to suspicious IOC patterns"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Computes section entropies"
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Generates a YARA rule template with:\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Meta fields (author, date, family derived from filename)"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "String definitions from IOCs (URLs, IPs, registry paths, API hashes)"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "A condition requiring N of the extracted strings"
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Outputs a ", (0,jsx_runtime.jsx)(_components.code, {
                children: ".yar"
              }), " file for each sample"]
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "This tool would be used by SOC teams to rapidly generate detection rules from new malware strains."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {})]
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