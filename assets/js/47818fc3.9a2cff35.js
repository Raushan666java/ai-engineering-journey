"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[61181],{

/***/ 71205
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cyber_security_15_ot_ics_scada_md_478_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cyber-security-15-ot-ics-scada-md-478.json
const site_docs_courses_cyber_security_15_ot_ics_scada_md_478_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cyber-security/15-ot-ics-scada","title":"Chapter 15: OT/ICS & SCADA Security","description":"Next Supply Chain & CI/CD Security","source":"@site/docs/courses/cyber-security/15-ot-ics-scada.md","sourceDirName":"courses/cyber-security","slug":"/cyber-security/15-ot-ics-scada","permalink":"/ai-engineering-journey/cyber-security/15-ot-ics-scada","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"id":"15-ot-ics-scada","slug":"/cyber-security/15-ot-ics-scada","title":"Chapter 15: OT/ICS & SCADA Security","sidebar_label":"Chapter 15: OT/ICS & SCADA Security","sidebar_position":14},"sidebar":"course-cyber-security","previous":{"title":"Chapter 14: Wireless, IoT & Embedded Security","permalink":"/ai-engineering-journey/cyber-security/14-wireless-iot-embedded"},"next":{"title":"Chapter 16: Supply Chain & CI/CD Pipeline Security","permalink":"/ai-engineering-journey/cyber-security/16-supply-chain-cicd"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cyber-security/15-ot-ics-scada.md


const frontMatter = {
	id: '15-ot-ics-scada',
	slug: '/cyber-security/15-ot-ics-scada',
	title: 'Chapter 15: OT/ICS & SCADA Security',
	sidebar_label: 'Chapter 15: OT/ICS & SCADA Security',
	sidebar_position: 14
};
const contentTitle = 'Chapter 15: OT/ICS & SCADA Security';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "1. OT/ICS/SCADA Overview",
  "id": "1-oticsscada-overview",
  "level": 2
}, {
  "value": "1.1 What Is OT/ICS/SCADA?",
  "id": "11-what-is-oticsscada",
  "level": 3
}, {
  "value": "1.2 The Purdue Model for Control Hierarchy",
  "id": "12-the-purdue-model-for-control-hierarchy",
  "level": 3
}, {
  "value": "1.3 ISA‑99 / IEC 62443 Standards",
  "id": "13-isa99--iec-62443-standards",
  "level": 3
}, {
  "value": "1.4 IT vs. OT Security: Critical Differences",
  "id": "14-it-vs-ot-security-critical-differences",
  "level": 3
}, {
  "value": "2. PLC Security",
  "id": "2-plc-security",
  "level": 2
}, {
  "value": "2.1 PLC Architecture and Memory Layout",
  "id": "21-plc-architecture-and-memory-layout",
  "level": 3
}, {
  "value": "2.2 Vendor-Specific Security Considerations",
  "id": "22-vendor-specific-security-considerations",
  "level": 3
}, {
  "value": "2.3 Remote Access Protocols",
  "id": "23-remote-access-protocols",
  "level": 3
}, {
  "value": "3. Industrial Protocols Deep-Dive",
  "id": "3-industrial-protocols-deep-dive",
  "level": 2
}, {
  "value": "3.1 Modbus TCP / RTU",
  "id": "31-modbus-tcp--rtu",
  "level": 3
}, {
  "value": "3.2 DNP3",
  "id": "32-dnp3",
  "level": 3
}, {
  "value": "3.3 Siemens S7comm",
  "id": "33-siemens-s7comm",
  "level": 3
}, {
  "value": "3.4 Profinet",
  "id": "34-profinet",
  "level": 3
}, {
  "value": "3.5 OPC UA",
  "id": "35-opc-ua",
  "level": 3
}, {
  "value": "3.6 BACnet",
  "id": "36-bacnet",
  "level": 3
}, {
  "value": "4. ICS Attack Case Studies",
  "id": "4-ics-attack-case-studies",
  "level": 2
}, {
  "value": "4.1 Stuxnet (2010)",
  "id": "41-stuxnet-2010",
  "level": 3
}, {
  "value": "4.2 TRITON / TRISIS (2017)",
  "id": "42-triton--trisis-2017",
  "level": 3
}, {
  "value": "4.3 Industroyer / CrashOverride (2016)",
  "id": "43-industroyer--crashoverride-2016",
  "level": 3
}, {
  "value": "4.4 Incontroller / Pipedream (2022)",
  "id": "44-incontroller--pipedream-2022",
  "level": 3
}, {
  "value": "5. OT Network Segmentation",
  "id": "5-ot-network-segmentation",
  "level": 2
}, {
  "value": "5.1 ISA-99 Zones and Conduits",
  "id": "51-isa-99-zones-and-conduits",
  "level": 3
}, {
  "value": "5.2 Unidirectional Gateways and Data Diodes",
  "id": "52-unidirectional-gateways-and-data-diodes",
  "level": 3
}, {
  "value": "5.3 OT Firewalls (Protocol-Aware)",
  "id": "53-ot-firewalls-protocol-aware",
  "level": 3
}, {
  "value": "6. OT Monitoring",
  "id": "6-ot-monitoring",
  "level": 2
}, {
  "value": "6.1 Passive vs. Active Monitoring",
  "id": "61-passive-vs-active-monitoring",
  "level": 3
}, {
  "value": "6.2 OT-SIEM Architecture",
  "id": "62-ot-siem-architecture",
  "level": 3
}, {
  "value": "6.3 Wireshark Dissectors for Industrial Protocols",
  "id": "63-wireshark-dissectors-for-industrial-protocols",
  "level": 3
}, {
  "value": "6.4 Zeek Script for OT Detection",
  "id": "64-zeek-script-for-ot-detection",
  "level": 3
}, {
  "value": "7. Secure Remote Access",
  "id": "7-secure-remote-access",
  "level": 2
}, {
  "value": "7.1 Jump Box Architecture",
  "id": "71-jump-box-architecture",
  "level": 3
}, {
  "value": "7.2 Vendor MFA and Access Lifecycle",
  "id": "72-vendor-mfa-and-access-lifecycle",
  "level": 3
}, {
  "value": "7.3 Air-Gap Considerations",
  "id": "73-air-gap-considerations",
  "level": 3
}, {
  "value": "8. TypeScript Tooling Lab",
  "id": "8-typescript-tooling-lab",
  "level": 2
}, {
  "value": "8.1 Modbus TCP Scanner",
  "id": "81-modbus-tcp-scanner",
  "level": 3
}, {
  "value": "8.2 S7comm Packet Builder and PLC Info Reader",
  "id": "82-s7comm-packet-builder-and-plc-info-reader",
  "level": 3
}, {
  "value": "8.3 DNP3 Frame Parser",
  "id": "83-dnp3-frame-parser",
  "level": 3
}, {
  "value": "8.4 Purdue Model Validator",
  "id": "84-purdue-model-validator",
  "level": 3
}, {
  "value": "8.5 ICS Threat Detection Rules",
  "id": "85-ics-threat-detection-rules",
  "level": 3
}, {
  "value": "8.6 BACnet Who-Is Service Scanner",
  "id": "86-bacnet-who-is-service-scanner",
  "level": 3
}, {
  "value": "9. PLC Security Hardening Checklist",
  "id": "9-plc-security-hardening-checklist",
  "level": 2
}, {
  "value": "10. ICS Attack Kill Chain (Sample)",
  "id": "10-ics-attack-kill-chain-sample",
  "level": 2
}, {
  "value": "11. Real Attack Timeline",
  "id": "11-real-attack-timeline",
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
  "value": "Chapter Quiz (10 Questions)",
  "id": "chapter-quiz-10-questions",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Exercise 1: Modbus Network Discovery",
  "id": "exercise-1-modbus-network-discovery",
  "level": 3
}, {
  "value": "Exercise 2: Purdue Model Audit Script",
  "id": "exercise-2-purdue-model-audit-script",
  "level": 3
}, {
  "value": "Exercise 3: S7comm Session Logger",
  "id": "exercise-3-s7comm-session-logger",
  "level": 3
}, {
  "value": "Exercise 4: DNP3 Fragment Reassembly",
  "id": "exercise-4-dnp3-fragment-reassembly",
  "level": 3
}, {
  "value": "Exercise 5: ICS Threat Detection Rule Engine",
  "id": "exercise-5-ics-threat-detection-rule-engine",
  "level": 3
}, {
  "value": "Exercise 6: Secure Remote Access Design",
  "id": "exercise-6-secure-remote-access-design",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "chapter-15-otics--scada-security",
        children: "Chapter 15: OT/ICS & SCADA Security"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/cyber-security/16-supply-chain-cicd",
        children: "Chapter 16: Supply Chain & CI/CD Security"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the OT/ICS/SCADA landscape including the Purdue model, ISA-99/IEC 62443 standards, and the fundamental differences between IT and OT security"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze PLC security architectures for Allen-Bradley, Siemens S7, and Modicon/M340 families including memory layout, programming interfaces, and remote access protocols"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deep-dive into industrial protocols — Modbus TCP/RTU, DNP3, Siemens S7comm, Profinet, OPC UA, and BACnet — with TypeScript implementations for scanning and fuzzing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reconstruct major ICS attacks (Stuxnet, TRITON/TRISIS, Industroyer, Incontroller/Pipedream) and extract defensive lessons"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design OT network segmentation using ISA-99 zones/conduits, unidirectional gateways, data diodes, and OT firewalls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement OT monitoring strategies with passive vs active techniques, OT-SIEM, Wireshark dissectors, and Zeek scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure secure remote access including jump boxes, session recording, vendor MFA, and air-gap considerations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build working TypeScript tools: Modbus scanner, S7comm packet builder, DNP3 frame parser, Purdue model validator, ICS threat detection rules, and BACnet who-is scanner"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OT/ICS/SCADA Overview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OT controls physical processes; IT manages data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always map the Purdue model before deploying security controls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PLC Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLCs have minimal authentication and fixed memory maps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory all PLCs and their protocol exposure before hardening"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Industrial Protocols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modbus, DNP3, S7comm lack encryption; many have no auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use protocol-aware firewalls and deep packet inspection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ICS Attacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stuxnet, TRITON, Industroyer show nation-state sophistication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segment safety systems from control networks; monitor for anomalous S7comm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network Segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISA-99 zones/conduits isolate risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy unidirectional gateways between IT and OT; avoid flat OT networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OT Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passive monitoring via SPAN ports avoids disruption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy OT-SIEM with protocol-specific parsers before active scanning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secure Remote Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jump boxes + session recording + vendor MFA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Require out-of-band authentication for ALL remote access to OT"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Chapter Start] --> B[OT/ICS/SCADA Overview]\n    B --> C[Purdue Model & ISA-99]\n    C --> D[PLC Security]\n    D --> E[Industrial Protocols Deep-Dive]\n    E --> F[Modbus TCP/RTU]\n    E --> G[DNP3]\n    E --> H[Siemens S7comm]\n    E --> I[Profinet / OPC UA / BACnet]\n    F --> J[ICS Attack Case Studies]\n    G --> J\n    H --> J\n    I --> J\n    J --> K[Stuxnet, TRITON, Industroyer, Pipedream]\n    K --> L[OT Network Segmentation]\n    L --> M[OT Monitoring & SIEM]\n    M --> N[Secure Remote Access]\n    N --> O[TypeScript Tooling Lab]\n    O --> P[Summary & Exercises]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-oticsscada-overview",
      children: "1. OT/ICS/SCADA Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-what-is-oticsscada",
      children: "1.1 What Is OT/ICS/SCADA?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Operational Technology (OT)"
      }), " refers to hardware and software that detects or causes a change in physical processes through direct monitoring and control of industrial equipment. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Industrial Control Systems (ICS)"
      }), " encompass the broad set of control systems used in industrial production, including ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Supervisory Control and Data Acquisition (SCADA)"
      }), " systems, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Distributed Control Systems (DCS)"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Programmable Logic Controllers (PLC)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SCADA:"
        }), " Centralized systems that monitor and control geographically dispersed assets (pipelines, power grids, water treatment). SCADA typically uses long-haul communication (radio, satellite, cellular)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DCS:"
        }), " Process-oriented control systems for continuous production in a single geographic area (refineries, chemical plants). DCS emphasizes high-availability and redundant controllers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PLC:"
        }), " Ruggedized digital computers that execute ladder logic or structured text to control electromechanical processes. PLCs operate in real-time with deterministic scan cycles."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RTU (Remote Terminal Unit):"
        }), " Telemetry interface devices that connect field sensors to SCADA master stations over serial or IP links."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-the-purdue-model-for-control-hierarchy",
      children: "1.2 The Purdue Model for Control Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Purdue Enterprise Reference Architecture (PERA) defines five functional levels that separate corporate IT from plant-floor OT. This model is foundational for ICS security zoning."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart BT\n    subgraph Level 4[Level 4 - Enterprise IT]\n        EM[Enterprise Network<br/>ERP, MES, Email, Web]\n    end\n    subgraph Level 3[Level 3 - Site Operations]\n        OM[Operations Management<br/>Historian, Ops Console, Domain Controller]\n    end\n    subgraph Level 2[Level 2 - Supervisory Control]\n        SCADA[SCADA Servers / HMI<br/>Alarm Server, Trend Server]\n    end\n    subgraph Level 1[Level 1 - Basic Control]\n        PLC[PLC / DCS / RTU<br/>Logic Engines, PID Controllers]\n    end\n    subgraph Level 0[Level 0 - Physical Process]\n        SENSORS[Sensors & Actuators<br/>VFDs, Valves, Motors, Pumps]\n    end\n\n    SENSORS --> PLC\n    PLC --> SCADA\n    SCADA --> OM\n    OM --> EM\n\n    style EM fill:#e74c3c,color:#fff\n    style OM fill:#e67e22,color:#fff\n    style SCADA fill:#f1c40f,color:#000\n    style PLC fill:#3498db,color:#fff\n    style SENSORS fill:#2ecc71,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security implications per level:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Level 0–1:"
        }), " No security; devices are resource-constrained. Physical access control is critical."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Level 2:"
        }), " HMIs often run Windows with limited patching. App whitelisting and credential hardening needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Level 3:"
        }), " Historians and domain controllers are prime targets. EDR deployment and strict network segmentation required."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Level 4:"
        }), " Standard IT security applies, but trust from OT side must be zero — never allow direct inbound connections."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-isa99--iec-62443-standards",
      children: "1.3 ISA‑99 / IEC 62443 Standards"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IEC 62443 (formerly ISA‑99) is the international standard series for ICS security:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Part"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Title"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Focus"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 62443‑1‑1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminology, concepts, and models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 62443‑2‑1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Establishing an IACS security program"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 62443‑2‑4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security requirements for integrators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supply chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 62443‑3‑2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security risk assessment and system design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk assessment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 62443‑3‑3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System security requirements and security levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SL 1–4 requirements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 62443‑4‑1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure product development lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor processes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 62443‑4‑2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Technical security requirements for components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product certification"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Levels (SL) defined by IEC 62443:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SL 1:"
        }), " Protection against casual or coincidental violation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SL 2:"
        }), " Protection against intentional violation with simple means"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SL 3:"
        }), " Protection against intentional violation with sophisticated means"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SL 4:"
        }), " Protection against intentional violation using extended resources (nation-state)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-it-vs-ot-security-critical-differences",
      children: "1.4 IT vs. OT Security: Critical Differences"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IT Security"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OT Security"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary goal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confidentiality > Integrity > Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Availability > Integrity > Confidentiality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Patch cycle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monthly (automated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yearly or never (requires plant shutdown)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lifetime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3–5 years"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15–30 years"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Communication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request/response (HTTP, SQL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time deterministic (Modbus, DNP3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security controls"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV, EDR, firewalls, IDS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application whitelisting, air gaps, data diodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Risk tolerance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reboot acceptable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reboot = production loss > $1M/hr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authentication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MFA, SSO, PKI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Often none or shared passwords"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Update mechanism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-update via Internet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USB sneakernet, physical media"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-plc-security",
      children: "2. PLC Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-plc-architecture-and-memory-layout",
      children: "2.1 PLC Architecture and Memory Layout"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A PLC executes a cyclic ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "scan loop"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read inputs"
        }), " from field devices"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execute user program"
        }), " (ladder logic, structured text, function block)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write outputs"
        }), " to actuators"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Housekeeping"
        }), " (communications, diagnostics)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Typical PLC memory regions:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Region"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Contents"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security Relevance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I/O image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Digital/analog input and output state snapshots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be read/written over the network"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data block (DB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program variables, timers, counters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contains process setpoints and limits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Organizational block (OB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-triggered code (O100 = startup, O35 = cycle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overwriting OB can disable safety logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function block (FB/Timer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reusable logic with instance data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be reverse-engineered"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firmware, bootloader"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires physical access or signed firmware update"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP settings, module parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker can redirect traffic via ARP spoofing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-vendor-specific-security-considerations",
      children: "2.2 Vendor-Specific Security Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allen-Bradley (Rockwell) ControlLogix / CompactLogix:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Protocol: EtherNet/IP (CIP) over TCP/44818"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No authentication for CIP read/write operations (pre-v31)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CIP security object added in v31+ but rarely enabled"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory: Controller tags accessible via CIP unconnected messages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attack vector: CIP path injection, malformed forward-open requests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardening: Disable unconnected messaging, enable CIP security, use NERC-CIP compliant conduits"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Siemens S7-1200 / S7-1500:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Protocol: S7comm over TCP/102, Profinet for I/O"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S7-1200: No password protection in older firmware (pre-V4.0)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S7-1500: Password protection can be bypassed via SZL read of password hash (SHA-512)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Known attack: S7-PLCSIM V5.4 password crack using rainbow tables for S7-1200"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardening: Set complex password (>15 chars), disable PUT/GET remote access, enable \"know-how protection\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Modicon M340 / Quantum (Schneider Electric):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Protocol: Modbus TCP over port 502"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No authentication on any function code by default"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory: Write %MW (holding registers), %M (coils), %I (discrete inputs) over Modbus"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attack vector: Modbus write to stop CPU (function code 0x05 on specific coils)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardening: Use Unity Pro password, deploy Modbus firewalls that whitelist function codes, enable SNMP trap on unauthorized writes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-remote-access-protocols",
      children: "2.3 Remote Access Protocols"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Port(s)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Risk"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modbus TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "502"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivial to scan and manipulate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S7comm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak password hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offline cracking feasible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EtherNet/IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44818, 2222"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CIP security optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lateral movement to other PLCs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Profinet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "34964, 49153"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLDP / DCP no auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topology spoofing, rogue IO devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNP3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure auth optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fragmentation can bypass IDS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPC UA (Binary)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4840"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X.509 + signing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex trust chain management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BACnet/IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "47808 (0xBAC0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building automation entry point"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-industrial-protocols-deep-dive",
      children: "3. Industrial Protocols Deep-Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-modbus-tcp--rtu",
      children: "3.1 Modbus TCP / RTU"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Modbus"
      }), " is the most widely deployed industrial protocol. Developed by Modicon in 1979, it remains popular due to its simplicity and open specification. Modbus RTU uses serial (RS-232/485) with CRC-16; Modbus TCP wraps the PDU in a TCP frame with a 7-byte MBAP header."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph MBAP[MBAP Header - 7 bytes]\n        TID[Transaction ID - 2B]\n        PID[Protocol ID - 2B<br/>= 0x0000]\n        LEN[Length - 2B]\n        UID[Unit ID - 1B]\n    end\n    subgraph PDU[PDU]\n        FC[Function Code - 1B]\n        DATA[Data - 0-252B]\n    end\n\n    MBAP --> PDU\n\n    style TID fill:#2ecc71,color:#000\n    style PID fill:#2ecc71,color:#000\n    style LEN fill:#2ecc71,color:#000\n    style UID fill:#3498db,color:#fff\n    style FC fill:#e74c3c,color:#fff\n    style DATA fill:#f1c40f,color:#000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common function codes:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Attack Relevance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read Coils"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reconnaissance (read digital outputs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read Discrete Inputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reconnaissance (read digital inputs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read Holding Registers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read setpoints, parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read Input Registers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read analog sensor values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write Single Coil"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Force a digital output ON or OFF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write Single Register"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change a setpoint or parameter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write Multiple Coils"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mass actuator manipulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write Multiple Registers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mass parameter manipulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Report Server ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLC fingerprinting / model discovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x2B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulated Interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read device identification strings"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Modbus TCP frame structure (hex example):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "00 01 00 00 00 06 01 03 00 00 00 0A\n|--| |--| |--| |--| |--| |--| |--|\nTID   PID   LEN   UID   FC   Start  Count\n=0              =6   =1   =3   =0     =10\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical vulnerability:"
      }), " Modbus has no authentication, no encryption, no session integrity. Any device on the network can read or write any register of any Modbus slave."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-dnp3",
      children: "3.2 DNP3"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Distributed Network Protocol 3 (DNP3)"
      }), " is widely used in electrical utilities, water treatment, and oil & gas. It supports time-stamped data, event-based reporting, and secure authentication (SAv5)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Transport[Transport Layer]\n        TH[Transport Header<br/>FIR/FIN/Seq - 1B]\n    end\n    subgraph Application[Application Layer]\n        AH[App Header<br/>AC - 1B | IIN - 2B | App Seq - 1B]\n        subgraph Fragment1[Fragment 1]\n            OH1[Object Header<br/>Group/Var - 2B | Count - 2B]\n            O1[Object Data]\n        end\n        subgraph Fragment2[Fragment 2]\n            OH2[Object Header<br/>Group/Var - 2B | Count - 2B]\n            O2[Object Data]\n        end\n    end\n\n    TH --> AH\n    AH --> Fragment1\n    AH --> Fragment2\n\n    style TH fill:#3498db,color:#fff\n    style AH fill:#e74c3c,color:#fff\n    style OH1 fill:#f1c40f,color:#000\n    style O2 fill:#2ecc71,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DNP3 secure authentication (SAv5):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses HMAC-SHA-256 with pre-shared keys"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Critical parameters: Session key change interval, challenge-response timeout"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weakness: If SA is not enforced, the session proceeds in clear-text"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggressive mode allows session key establishment in one round trip"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack vector:"
      }), " DNP3 fragmentation — an attacker can inject malicious fragments that reassemble into a legitimate-looking message, bypassing signature-based IDS."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-siemens-s7comm",
      children: "3.3 Siemens S7comm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "S7comm is Siemens' proprietary protocol for S7-300/400/1200/1500 PLCs. It operates over TCP/102 using ISO Transport Service (TPKT + COTP)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key S7comm services:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Session setup:"
        }), " Establish a communication channel (needs ISO-1573 CR/CC)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Copy block (0xDD):"
        }), " Write data to a PLC memory block"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SZL read (0x31):"
        }), " Read system status list — returns firmware version, module name, serial number"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SZL write (0x33):"
        }), " Write system status list (restricted on newer firmware)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Password (0x1D):"
        }), " Send password hash comparison or set password"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PI (0x42):"
        }), " Program input — download blocks, start/stop PLC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PL (0x38):"
        }), " Program load — used by Step 7 to load hardware configuration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Password cracking:"
      }), " S7-1200 (pre-V4.x) sends a plaintext session ID instead of a challenge. S7-1500 uses SHA-512 for password verification — offline cracking with a dictionary is feasible if the hash is captured."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-profinet",
      children: "3.4 Profinet"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Profinet is Siemens' real-time Ethernet standard for industrial automation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RT (Real-Time):"
        }), " Cyclic I/O data, cycle times ~1ms"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IRT (Isochronous Real-Time):"
        }), " Deterministic communication for motion control, <1µs jitter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DCP (Discovery and Configuration Protocol):"
        }), " Set IP addresses with no authentication"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LLDP (Link Layer Discovery Protocol):"
        }), " Network topology discovery"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attack vector:"
        }), " A rogue Profinet IO device can inject false I/O data; DCP can be used to change IPs of real devices (DoS)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-opc-ua",
      children: "3.5 OPC UA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OPC Unified Architecture (OPC UA)"
      }), " is a platform-independent standard for machine-to-machine communication:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security: X.509 certificates, signing, encryption (AES-256-GCM)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transport: UA Binary (port 4840) or UA HTTPS (port 443)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security modes: None, Sign, SignAndEncrypt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weakness: Many deployments use \"None\" mode for backward compatibility; certificate validation is often disabled"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-bacnet",
      children: "3.6 BACnet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Building Automation and Control Network (BACnet)"
      }), " controls HVAC, lighting, fire, and access systems:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BACnet/IP: UDP port 47808 (0xBAC0)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BACnet MS/TP: RS-485 (master-slave token passing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BACnet SC (Secure Connect): TLS-based, WebSocket transport"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attack vector: BACnet Who-Is / I-Am discovery can enumerate all building controllers; WriteProperty can override setpoints"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-ics-attack-case-studies",
      children: "4. ICS Attack Case Studies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-stuxnet-2010",
      children: "4.1 Stuxnet (2010)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attribute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Target"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iranian Natanz uranium enrichment centrifuge cascade"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PLCs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Siemens S7-315-2 DP connected to Profibus DP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial vector"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USB stick via Microsoft Windows zero-day (MS10-046, .LNK)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Propagation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Four Windows zero-days, signed with stolen Realtek/JMicron certificates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Payload"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rootkit on S7-315: .lnf file modified to hide attacks; Roo (Step 7 DLL) intercepted read/write calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Effect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changed centrifuge rotor speeds to 1410 Hz (destructive resonance), then reported normal 1064 Hz to operators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key innovation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Man-in-the-middle on Profibus — PLC saw legitimate commands, real hardware saw destructive commands"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stuxnet code characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S7-315 communication via S7comm (TCP/102)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Used ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s7blk_find"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s7blk_write"
        }), " to inject malicious OB1 (main cycle) and OB35 (cyclic interrupt)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ladder logic blocks modified via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s7blk_write"
        }), " — no authentication check on S7-315"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rootkit intercepted ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s7blk_read"
        }), " to return clean data to Step 7"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-triton--trisis-2017",
      children: "4.2 TRITON / TRISIS (2017)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attribute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Target"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Saudi Arabian petrochemical facility (Safety Instrumented System)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PLC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schneider Electric Triconex Safety Controller (Tricon v9–10)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial vector"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spear-phishing — credentials captured for Engineering Workstation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Payload"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malicious TriStation program (Triconex-specific protocol over TCP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Effect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety system forced into halt/run cycle; facility manually shut down"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TRITON technical details:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Targeted Triconex MP3002/MP3004 main processors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reverse-engineered TriStation 1131 protocol (TCP/1437)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Injected code to disable safety trips while manipulating outputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leveraged lack of authentication on TriStation protocol"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key defensive lesson: Safety controllers must be in separate IEC 62443 SL-4 zones with physical unidirectional gateway isolation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-industroyer--crashoverride-2016",
      children: "4.3 Industroyer / CrashOverride (2016)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attribute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Target"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ukrainian Kyivoblenergo power grid substation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Protocols"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 60870-6 (TASE.2/ICCP), IEC 60870-5-104, OPC DA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial vector"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spear-phishing with macro-enabled Office document (BlackEnergy APT)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Payload"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modular framework supporting IEC 104, OPC, serial IEC 101"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Effect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three substations disconnected, 230,000 customers without power for 1–6 hours"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Industroyer technical details:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["IEC 104 module: Issued ", (0,jsx_runtime.jsx)(_components.code, {
          children: "C_SC_NA_1"
        }), " (select/execute control commands) to open circuit breakers"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Included a wiper module that wiped the workstation registry and drives"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Targeted serial-to-Ethernet converters (MOXA, Westermo) used for legacy substation connection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Defense: MAC address filtering on IEC 104, serial link separation, command authentication per IEC 62351"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-incontroller--pipedream-2022",
      children: "4.4 Incontroller / Pipedream (2022)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attribute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Target"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-vendor ICS devices (Omron, Schneider Electric, Siemens, Rockwell)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Discovery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mandiant FOR59 report, CISA advisory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Capabilities"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modbus, S7comm, OPC UA, EtherNet/IP manipulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nation-state framework for pre-positioning in OT environment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unique aspect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First publicly known cross-vendor OT attack framework"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Incontroller modules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IMPLANT/INCONTROLLER:"
        }), " Deployed on OT engineering workstations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modbus scanner:"
        }), " Enumerate all slaves on the network"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "S7comm backdoor:"
        }), " Start/stop Siemens CPUs, modify blocks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Omron backdoor:"
        }), " FINS protocol manipulation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lightweight shell:"
        }), " C2 over protocol tunnels (Modbus payload, S7comm data blocks)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-ot-network-segmentation",
      children: "5. OT Network Segmentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-isa-99-zones-and-conduits",
      children: "5.1 ISA-99 Zones and Conduits"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ISA-99 model divides the ICS network into ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "zones"
      }), " (groups of assets with similar security requirements) connected by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "conduits"
      }), " (secured communication channels)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Zone types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety zone:"
        }), " Safety Instrumented System (SIS) — highest security; physical separation required"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Control zone:"
        }), " PLCs, DCS, SCADA servers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Site operations zone:"
        }), " HMIs, historians, engineering workstations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DMZ:"
        }), " Shared services (patch management, AV updates, domain authentication)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enterprise zone:"
        }), " Corporate IT, ERP, email"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conduit requirements per IEC 62443-3-3:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Access control (layer 3+4 firewall)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deep packet inspection (DPI) for industrial protocols"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate limiting to prevent protocol flooding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Application-layer filtering (whitelist function codes, register ranges)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alarm generation on unauthorized protocol operations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-unidirectional-gateways-and-data-diodes",
      children: "5.2 Unidirectional Gateways and Data Diodes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "data diode"
      }), " (unidirectional gateway) physically enforces one-way data flow using fiber optics — data can only travel from OT to IT, never IT to OT."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "            OT Network               Data Diode                IT Network\n    ┌──────────────────┐        ┌───────────────┐        ┌──────────────────┐\n    │  PLC / Historian  │───────▶│  TX Fiber RX  │───────▶│  OPC UA Server   │\n    │   Level 0–2       │        │  (hardware     │        │  Historian       │\n    │                   │        │   unidirectional)│        │  Level 4         │\n    └──────────────────┘        └───────────────┘        └──────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Physically impossible for malware from IT to reach OT"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No patches needed on OT devices (no TCP/IP stack exposed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports historian data, alarm feeds, and Log/Event forwarding"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Limitations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot support remote maintenance or bidirectional commands"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires buffer management for bursty data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proprietary application layer adapters are expensive"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-ot-firewalls-protocol-aware",
      children: "5.3 OT Firewalls (Protocol-Aware)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Standard firewalls block at layers 3–4 but cannot inspect Modbus, DNP3, or S7comm application payloads. OT firewalls perform ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deep Packet Inspection (DPI)"
      }), " for industrial protocols:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Firewall"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol Support"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Capability"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Claroty Secure Remote Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modbus, DNP3, S7comm, CIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Baseline learning + anomaly alerts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nozomi Guardian"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100+ industrial protocols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol parsing + real-time alerts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dragos Platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modbus, DNP3, S7comm, OPC UA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threat hunting + behavior analytics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Palo Alto OT Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50+ OT protocols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function code whitelist + zone enforcement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fortinet FortiGate OT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modbus, DNP3, IEC 104"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application-specific firewall policies"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Modbus firewall rule example (Claroty syntax):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALLOW Modbus-TCP from HMI-1 to PLC-5 with functions 0x01, 0x03 only\nALLOW Modbus-TCP from SCADA-1 to PLC-5 with functions 0x03, 0x06 only\nDENY Modbus-TCP from any to PLC-5 with function 0x05 (write-coil)\nDENY Modbus-TCP from any to any except registered masters\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-ot-monitoring",
      children: "6. OT Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-passive-vs-active-monitoring",
      children: "6.1 Passive vs. Active Monitoring"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Passive Monitoring"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Active Monitoring"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Method"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPAN port / network TAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset scanning (nmap, Nessus)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Risk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None — no packets injected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can crash PLCs with aggressive scanning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Protocol coverage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on parser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generic (TCP banners, SNMP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Snapshot only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typical tooling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wireshark, Zeek, Nozomi, Claroty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tenable OT, Dragos OSINT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous threat detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset inventory, vulnerability assessment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Safety rule:"
      }), " Never scan a running PLC with aggressive timing (", (0,jsx_runtime.jsx)(_components.code, {
        children: "-T5"
      }), "). Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-T2"
      }), " with retry 0 and avoid all write function codes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-ot-siem-architecture",
      children: "6.2 OT-SIEM Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    ┌──────────────────────────────────────────────────────┐\n    │                  OT-SIEM (Splunk / ELK)               │\n    │  ┌─────────────┐ ┌─────────────┐ ┌───────────────┐  │\n    │  │ Modbus Parser│ │ DNP3 Parser │ │ S7comm Parser │  │\n    │  └──────┬──────┘ └──────┬──────┘ └───────┬───────┘  │\n    │         └───────────────┼────────────────┘           │\n    │                         ▼                            │\n    │              ┌──────────────────┐                     │\n    │              │ Anomaly Detection │                    │\n    │              │ (Baseline + ML)   │                    │\n    │              └────────┬─────────┘                    │\n    │                       ▼                               │\n    │              ┌──────────────────┐                     │\n    │              │ Alert Correlation│                    │\n    │              └──────────────────┘                     │\n    └──────────────────────────────────────────────────────┘\n                         ▲\n    ┌────────────────────┼────────────────────────┐\n    │  Log Collection    │                        │\n    │  ┌──────┐ ┌──────┐ │ ┌──────┐ ┌──────┐    │\n    │  │Modbus│ │ DNP3 │ │ │S7comm│ │Syslog│    │\n    │  │Logs  │ │ Logs │ │ │Logs  │ │Logs  │    │\n    │  └──────┘ └──────┘ │ └──────┘ └──────┘    │\n    │  OT Firewall  PLCs │  HMI   Engineering WS │\n    └────────────────────┼────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-wireshark-dissectors-for-industrial-protocols",
      children: "6.3 Wireshark Dissectors for Industrial Protocols"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wireshark ships with built-in dissectors for most industrial protocols:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wireshark Filter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Display Filter"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modbus TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "modbus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "modbus.func_code"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNP3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dnp3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dnp3.function_code"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S7comm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s7comm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s7comm.param.func"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Profinet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pn_io"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pn_io.cycle_counter"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPC UA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "opcua"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "opcua.requested_node_id"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BACnet/IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bacnet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bacnet.application_tag"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EtherNet/IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cip"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cip.service"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Useful Wireshark OT analysis commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Show all Modbus write operations in capture\nmodbus.func_code == 0x05 || modbus.func_code == 0x06 || modbus.func_code == 0x0F || modbus.func_code == 0x10\n\n# Show all DNP3 unsolicited responses (potential alarm)\ndnp3.function_code == 0x82\n\n# Show all S7comm block write operations\ns7comm.param.func == 0xdd\n\n# Count unique Modbus source IPs\nmodbus and ip.src != 192.168.1.0/24\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-zeek-script-for-ot-detection",
      children: "6.4 Zeek Script for OT Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-zeek",
        children: "# file: ot-modbus-monitor.zeek\nmodule OTModbusMonitor;\n\nexport {\n    redef enum Log::ID += { LOG };\n    type Info: record {\n        ts: time          &log;\n        src: addr         &log;\n        dst: addr         &log;\n        func_code: count  &log;\n        exception: bool   &log;\n        write_op: bool    &log;\n    };\n}\n\nevent modbus::message(c: connection, is_orig: bool, func: count, exception: bool) {\n    local write_codes: set[count] = {5, 6, 15, 16};\n    local info = OTModbusMonitor::Info(\n        $ts = network_time(),\n        $src = (is_orig ? c$id$orig_h : c$id$resp_h),\n        $dst = (is_orig ? c$id$resp_h : c$id$orig_h),\n        $func_code = func,\n        $exception = exception,\n        $write_op = (func in write_codes)\n    );\n    Log::write(OTModbusMonitor::LOG, info);\n\n    # Alert on unauthorized write operations\n    if (func in write_codes && c$id$orig_h !in authorized_masters) {\n        NOTICE([$note=Modbus_Write_Unauthorized,\n                $msg=fmt(\"Unauthorized Modbus write from %s\", c$id$orig_h),\n                $conn=c]);\n    }\n}\n\nevent zeek_init() {\n    Log::create_stream(OTModbusMonitor::LOG);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-secure-remote-access",
      children: "7. Secure Remote Access"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-jump-box-architecture",
      children: "7.1 Jump Box Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "jump box"
      }), " (bastion host) is a hardened gateway that mediates all remote connections to the OT network:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    Remote Vendor           Jump Box (DMZ)          OT Network\n    ┌────────────┐         ┌──────────────┐        ┌────────┐\n    │ Vendor Laptop│───────▶│  RDP / SSH   │───────▶│  HMI   │\n    │ + MFA token │         │ + Session Rec │        │        │\n    └────────────┘         │ + File Xfer │        ├────────┤\n                           │   Scan      │        │  PLC   │\n                           └──────────────┘        └────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Jump box security requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dedicated hardened OS (no email, no web browsing, no USB)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MFA for every login (TOTP + certificate)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full session recording (video + keystroke)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File transfer scanning (all files scanned before transfer to OT)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Outbound-only from OT to DMZ for log forwarding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic session timeout (15 minutes idle)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-vendor-mfa-and-access-lifecycle",
      children: "7.2 Vendor MFA and Access Lifecycle"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technology"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Request"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor submits access ticket with scope + duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ITSM portal (ServiceNow, Jira)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Approval"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OT security manager approves or denies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approval workflow + call-back verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Provision"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall rule opened from vendor IP to jump box"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SDN controller (Tufin, Algosec)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authenticate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MFA + OTP + IP whitelist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duo, RSA SecurID, YubiKey"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authorize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Role-based access (read-only vs. read-write)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jump box RBAC + protocol proxy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Monitor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full session recording + keystroke capture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BeyondTrust, CyberArk, WALLIX"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deprovision"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall rule removed, account disabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated deprovisioning cron job"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-air-gap-considerations",
      children: "7.3 Air-Gap Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A true ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "air gap"
      }), " (no network connectivity between OT and IT) is the most secure but operationally challenging:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Positive air gap:"
        }), " No physical connection at all. Data moves via USB drives (\"sneakernet\"). 100% secure against network-based attacks, but fragile and slow."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logical air gap:"
        }), " Unidirectional gateway (data diode) allows OT→IT data, blocks IT→OT. Realistic alternative for most plants."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid air gap:"
        }), " Data diode for historian data + physically isolated maintenance port for engineering access (requires physical presence)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-typescript-tooling-lab",
      children: "8. TypeScript Tooling Lab"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-modbus-tcp-scanner",
      children: "8.1 Modbus TCP Scanner"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// modbus-scanner.ts — Enumerate function codes, read coils/registers, write coils on Modbus TCP slaves\nimport * as net from 'net';\n\ninterface ModbusSlave {\n  ipAddress: string;\n  unitId: number;\n  supportedFunctions: number[];\n  coilRange: number[];\n  registerRange: number[];\n  vendorInfo?: string;\n}\n\nfunction buildModbusFrame(unitId: number, functionCode: number, address: number, quantityOrValue: number): Buffer {\n  const mbap = Buffer.alloc(7);\n  mbap.writeUInt16BE(0x0001, 0);   // Transaction ID\n  mbap.writeUInt16BE(0x0000, 2);   // Protocol ID\n  mbap.writeUInt16BE(0x0006, 4);   // Length (bytes after MBAP)\n  mbap.writeUInt8(unitId, 6);       // Unit ID\n\n  const pdu = Buffer.alloc(5);\n  pdu.writeUInt8(functionCode, 0);\n  pdu.writeUInt16BE(address, 1);\n  pdu.writeUInt16BE(quantityOrValue, 3);\n\n  return Buffer.concat([mbap, pdu]);\n}\n\nfunction parseModbusResponse(response: Buffer): { functionCode: number; data: number[]; error?: string } {\n  const fc = response[7];\n  if (fc > 0x80) {\n    return { functionCode: fc, data: [], error: `Exception code: 0x${response[8].toString(16)}` };\n  }\n  const byteCount = response[8] || 0;\n  const data: number[] = [];\n  for (let i = 0; i < byteCount; i++) {\n    for (let bit = 0; bit < 8; bit++) {\n      data.push((response[9 + i] >> bit) & 1);\n    }\n  }\n  return { functionCode: fc, data };\n}\n\nasync function probeFunctionCode(ip: string, unitId: number, fc: number, port = 502): Promise<boolean> {\n  return new Promise((resolve) => {\n    const socket = new net.Socket();\n    socket.setTimeout(3000);\n    const frame = buildModbusFrame(unitId, fc, 0, 1);\n\n    socket.on('connect', () => socket.write(frame));\n    socket.on('data', (data) => {\n      socket.destroy();\n      if (data.length >= 9 && data[7] === fc) resolve(true);\n      else resolve(false);\n    });\n    socket.on('error', () => resolve(false));\n    socket.on('timeout', () => { socket.destroy(); resolve(false); });\n\n    socket.connect(port, ip);\n  });\n}\n\nasync function scanModbusSlave(ip: string, unitId: number = 1): Promise<ModbusSlave> {\n  const functionsToProbe = [0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x0F, 0x10, 0x11, 0x2B];\n  const supportedFunctions: number[] = [];\n\n  for (const fc of functionsToProbe) {\n    const supported = await probeFunctionCode(ip, unitId, fc);\n    if (supported) supportedFunctions.push(fc);\n  }\n\n  let vendorInfo: string | undefined;\n  if (supportedFunctions.includes(0x2B)) {\n    const info = await readModbusDeviceIdentification(ip, unitId);\n    vendorInfo = info;\n  }\n\n  return { ipAddress: ip, unitId, supportedFunctions, coilRange: [0, 100], registerRange: [0, 100], vendorInfo };\n}\n\nasync function readModbusDeviceIdentification(ip: string, unitId: number): Promise<string> {\n  return new Promise((resolve) => {\n    const socket = new net.Socket();\n    socket.setTimeout(3000);\n    // Encapsulated interface read — object ID 0x00 (vendor), category 0x01 (basic)\n    const frame = Buffer.from([\n      0x00, 0x01, 0x00, 0x00, 0x00, 0x06, unitId,\n      0x2B, 0x0E, 0x01, 0x00,\n    ]);\n\n    socket.on('connect', () => socket.write(frame));\n    socket.on('data', (data) => {\n      socket.destroy();\n      // Parse the response (simplified)\n      const dataStart = 10;\n      const text = data.slice(dataStart).toString('ascii').replace(/[^\\x20-\\x7E]/g, '').trim();\n      resolve(text || 'Unknown');\n    });\n    socket.on('error', () => resolve('Unreachable'));\n    socket.on('timeout', () => { socket.destroy(); resolve('Timeout'); });\n    socket.connect(502, ip);\n  });\n}\n\nasync function readCoils(ip: string, unitId: number, startAddress: number, count: number): Promise<number[]> {\n  return new Promise((resolve, reject) => {\n    const socket = new net.Socket();\n    socket.setTimeout(3000);\n    const frame = buildModbusFrame(unitId, 0x01, startAddress, count);\n\n    socket.on('connect', () => socket.write(frame));\n    socket.on('data', (data) => {\n      socket.destroy();\n      const parsed = parseModbusResponse(data);\n      if (parsed.error) reject(new Error(parsed.error));\n      else resolve(parsed.data.slice(0, count));\n    });\n    socket.on('error', (err) => reject(err));\n    socket.on('timeout', () => { socket.destroy(); reject(new Error('Timeout')); });\n    socket.connect(502, ip);\n  });\n}\n\nasync function readHoldingRegisters(ip: string, unitId: number, startAddress: number, count: number): Promise<number[]> {\n  return new Promise((resolve, reject) => {\n    const socket = new net.Socket();\n    socket.setTimeout(3000);\n    const frame = buildModbusFrame(unitId, 0x03, startAddress, count);\n\n    socket.on('connect', () => socket.write(frame));\n    socket.on('data', (data) => {\n      socket.destroy();\n      const parsed = parseModbusResponse(data);\n      if (parsed.error) reject(new Error(parsed.error));\n      else resolve(parsed.data);\n    });\n    socket.on('error', (err) => reject(err));\n    socket.on('timeout', () => { socket.destroy(); reject(new Error('Timeout')); });\n    socket.connect(502, ip);\n  });\n}\n\nasync function writeSingleCoil(ip: string, unitId: number, address: number, value: boolean): Promise<boolean> {\n  return new Promise((resolve, reject) => {\n    const socket = new net.Socket();\n    socket.setTimeout(3000);\n    const coilValue = value ? 0xFF00 : 0x0000;\n    const frame = buildModbusFrame(unitId, 0x05, address, coilValue);\n\n    socket.on('connect', () => socket.write(frame));\n    socket.on('data', (data) => {\n      socket.destroy();\n      resolve(data.length >= 12 && data[7] === 0x05);\n    });\n    socket.on('error', (err) => reject(err));\n    socket.on('timeout', () => { socket.destroy(); reject(new Error('Timeout')); });\n    socket.connect(502, ip);\n  });\n}\n\n// Example usage\n(async () => {\n  const targetIP = process.argv[2] || '192.168.1.100';\n  console.log(`Scanning Modbus slave at ${targetIP}...`);\n\n  const slave = await scanModbusSlave(targetIP, 1);\n  console.log(`\\n=== Modbus Slave Report: ${targetIP} ===`);\n  console.log(`Unit ID: ${slave.unitId}`);\n  console.log(`Vendor Info: ${slave.vendorInfo}`);\n  console.log(`Supported Functions: [${slave.supportedFunctions.map(f => `0x${f.toString(16)}`).join(', ')}]`);\n\n  // Read coils 0-15 if supported\n  if (slave.supportedFunctions.includes(0x01)) {\n    try {\n      const coils = await readCoils(targetIP, 1, 0, 16);\n      console.log(`Coils [0-15]: ${JSON.stringify(coils)}`);\n    } catch (e) {\n      console.error('Read coils failed:', (e as Error).message);\n    }\n  }\n\n  // Read holding registers 0-9 if supported\n  if (slave.supportedFunctions.includes(0x03)) {\n    try {\n      const registers = await readHoldingRegisters(targetIP, 1, 0, 10);\n      console.log(`Holding Registers [0-9]: ${JSON.stringify(registers)}`);\n    } catch (e) {\n      console.error('Read registers failed:', (e as Error).message);\n    }\n  }\n\n  console.log('\\nWarning: Modbus has NO authentication. Use only on authorized test networks.');\n})();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-s7comm-packet-builder-and-plc-info-reader",
      children: "8.2 S7comm Packet Builder and PLC Info Reader"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// s7comm-info.ts — Read S7-1200/1500 PLC information via S7comm\nimport * as net from 'net';\n\ninterface S7PlcInfo {\n  moduleName: string;\n  serialNumber: string;\n  firmwareVersion: string;\n  plantIdentification: string;\n}\n\nfunction buildCOTP(frameType: number, destinationRef: number, sourceRef: number): Buffer {\n  const cotp = Buffer.alloc(7);\n  cotp[0] = 0x03;          // Length\n  cotp[1] = 0xC0;          // PDU type: CR (0xE0), CC (0xD0), DT (0xF0)\n  cotp.writeUInt8(frameType, 1);\n  cotp[2] = 0x00;          // Reserved\n  cotp.writeUInt16BE(destinationRef, 3);\n  cotp.writeUInt16BE(sourceRef, 5);\n  return cotp;\n}\n\nfunction buildTPKT(payload: Buffer): Buffer {\n  const tpkt = Buffer.alloc(4);\n  tpkt[0] = 0x03;                         // Version\n  tpkt[1] = 0x00;                         // Reserved\n  tpkt.writeUInt16BE(4 + payload.length, 2); // Total length\n  return Buffer.concat([tpkt, payload]);\n}\n\nfunction buildS7CommHeader(rosctr: number, paramLen: number, dataLen: number): Buffer {\n  const header = Buffer.alloc(10);\n  header[0] = 0x32;                    // Protocol ID\n  header.writeUInt8(rosctr, 1);         // ROSCTR (1=Job, 3=ACK_Data)\n  header[2] = 0x00;                    // Reserved\n  header[3] = 0x00;                    // Reserved\n  header.writeUInt16BE(paramLen, 4);    // Param length\n  header.writeUInt16BE(dataLen, 6);     // Data length\n  header[8] = 0x00;                    // Reserved\n  header[9] = 0x00;                    // Reserved\n  return header;\n}\n\nfunction buildSZLReadHeader(orderNo: number): Buffer {\n  // SZL read request for a specific system status list entry\n  const szlHeader = Buffer.alloc(8);\n  szlHeader.writeUInt8(0x04, 0);    // Prefix: read\n  szlHeader[1] = 0x00;              // Sequence number\n  szlHeader[2] = 0x00;              // Reserved\n  szlHeader[3] = 0x00;              // Reserved\n  szlHeader.writeUInt16BE(orderNo, 4); // SZL ID (e.g., 0x0011 for module identification)\n  szlHeader.writeUInt16BE(0x0000, 6); // Index (0 for first entry)\n  return szlHeader;\n}\n\nasync function readS7PlcInfo(ip: string, rack: number = 0, slot: number = 2): Promise<S7PlcInfo> {\n  return new Promise((resolve, reject) => {\n    const socket = new net.Socket();\n    socket.setTimeout(10000);\n\n    socket.on('connect', () => {\n      // Step 1: ISO Connect (CR)\n      const crPacket = buildCOTP(0xE0, 0x0000, 0x0001);\n      const isoCR = Buffer.from([\n        0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,\n        0x00, 0xC1, 0x02, rack, slot,\n        0xC2, 0x02, rack, slot,\n      ]);\n      socket.write(buildTPKT(Buffer.concat([crPacket, isoCR])));\n    });\n\n    let step = 0;\n    socket.on('data', (data) => {\n      if (step === 0) {\n        // CC received; send SZL read for module identification (SZL_ID 0x0011)\n        step = 1;\n        const s7header = buildS7CommHeader(0x01, 8, 0);\n        const szlRead = buildSZLReadHeader(0x0011);\n        const param = Buffer.alloc(12);\n        param.writeUInt8(0x04, 0);  // Function: read SZL\n        param.writeUInt16BE(0x0011, 4); // SZL ID\n        param.writeUInt16BE(0x0000, 6); // Index\n        param.writeUInt16BE(4, 8);  // Length\n\n        // Actually use the standard S7comm parameter structure\n        const realParam = Buffer.alloc(14);\n        realParam.writeUInt8(0x04, 0);                  // Read SZL\n        realParam.writeUInt16BE(0x0011, 1);              // SZL ID\n        realParam.writeUInt16BE(0x0000, 3);              // Index\n        realParam[5] = 0x00;\n        realParam.writeUInt16BE(0x0000, 6);              // Reserved\n        realParam.writeUInt32BE(0x00000000, 8);          // Reserved\n\n        const s7pkt = Buffer.concat([\n          buildS7CommHeader(0x01, 14, 0),\n          realParam,\n        ]);\n\n        const dt = buildCOTP(0xF0, 0x0000, 0x0000);\n        socket.write(buildTPKT(Buffer.concat([dt, s7pkt])));\n      } else if (step === 1) {\n        step = 2;\n        // Parse SZL read response (simplified — extract text from data section)\n        let raw = data.toString('ascii').replace(/[^\\x20-\\x7E]/g, ' ');\n        const info: S7PlcInfo = {\n          moduleName: raw.substring(30, 50).trim() || 'S7-1500 (simulated)',\n          serialNumber: raw.substring(50, 68).trim() || 'S VP-1234567',\n          firmwareVersion: raw.substring(68, 76).trim() || 'V2.9.1',\n          plantIdentification: raw.substring(76, 100).trim() || 'Plant-A-Line3',\n        };\n        socket.destroy();\n        resolve(info);\n      }\n    });\n\n    socket.on('error', (err) => reject(err));\n    socket.on('timeout', () => { socket.destroy(); reject(new Error('Timeout')); });\n\n    socket.connect(102, ip);\n  });\n}\n\nasync function main(): Promise<void> {\n  const ip = process.argv[2] || '192.168.1.10';\n  console.log(`Reading S7 PLC info from ${ip}:102...`);\n  try {\n    const info = await readS7PlcInfo(ip, 0, 2);\n    console.log('\\n=== S7 PLC Information ===');\n    console.log(`Module Name:       ${info.moduleName}`);\n    console.log(`Serial Number:     ${info.serialNumber}`);\n    console.log(`Firmware Version:  ${info.firmwareVersion}`);\n    console.log(`Plant ID:          ${info.plantIdentification}`);\n    console.log('\\nWarning: S7comm sends this data without authentication on many PLCs.');\n  } catch (err) {\n    console.error(`Failed to read PLC info: ${(err as Error).message}`);\n  }\n}\n\nif (require.main === module) {\n  main().catch(console.error);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-dnp3-frame-parser",
      children: "8.3 DNP3 Frame Parser"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// dnp3-parser.ts — Parse DNP3 frames, extract application fragments and object headers\ninterface Dnp3TransportHeader {\n  fir: boolean;\n  fin: boolean;\n  seq: number;\n}\n\ninterface Dnp3AppHeader {\n  ackCode: number;\n  iin1: number;\n  iin2: number;\n  appSeq: number;\n}\n\ninterface Dnp3ObjectHeader {\n  group: number;\n  variation: number;\n  qualifier: number;\n  count: number;\n  startIndex: number;\n}\n\ninterface Dnp3ParsedFrame {\n  transport: Dnp3TransportHeader;\n  appHeader: Dnp3AppHeader;\n  objects: Dnp3ObjectHeader[];\n  rawHex: string;\n}\n\nfunction parseDnp3Frame(packet: Buffer): Dnp3ParsedFrame | null {\n  if (packet.length < 32) return null;\n\n  // DNP3 starts with 0x0564 (start bytes)\n  let offset = 0;\n  const response = packet.slice(offset, offset + packet.length);\n\n  // Parse transport header\n  const transportByte = response[1];\n  const transport: Dnp3TransportHeader = {\n    fir: (transportByte & 0x80) !== 0,\n    fin: (transportByte & 0x40) !== 0,\n    seq: transportByte & 0x3F,\n  };\n\n  // Parse application header\n  offset = 2; // skip start + transport\n  if (response.length < offset + 4) return null;\n\n  const appHeader: Dnp3AppHeader = {\n    ackCode: response[offset],\n    iin1: response[offset + 1],\n    iin2: response[offset + 2],\n    appSeq: response[offset + 3],\n  };\n  offset += 4;\n\n  // Parse object headers\n  const objects: Dnp3ObjectHeader[] = [];\n  while (offset + 6 <= response.length) {\n    const group = response[offset];\n    const variation = response[offset + 1];\n    const qualifier = response[offset + 2];\n    let count = 0;\n    let startIndex = 0;\n\n    if ((qualifier & 0x07) === 0x00) {\n      // 4-byte count + start (range format)\n      count = response.readUInt16BE(offset + 3);\n      startIndex = response.readUInt16BE(offset + 5);\n      offset += 7;\n    } else if ((qualifier & 0x07) === 0x01) {\n      // 1-byte count, 2-byte start\n      count = response[offset + 3];\n      startIndex = response.readUInt16BE(offset + 4);\n      offset += 6;\n    } else if ((qualifier & 0x07) === 0x06) {\n      // No range (all points)\n      count = 0;\n      startIndex = 0;\n      offset += 3;\n    } else {\n      break; // Unknown qualifier\n    }\n\n    objects.push({ group, variation, qualifier, count, startIndex });\n  }\n\n  return {\n    transport,\n    appHeader,\n    objects,\n    rawHex: packet.toString('hex').toUpperCase(),\n  };\n}\n\nfunction formatDnp3Frame(parsed: Dnp3ParsedFrame): string {\n  let out = '=== DNP3 Frame ===\\n';\n  out += `Transport: FIR=${parsed.transport.fir} FIN=${parsed.transport.fin} Seq=${parsed.transport.seq}\\n`;\n  out += `App Layer: ACK=0x${parsed.appHeader.ackCode.toString(16)} IIN=0x${parsed.appHeader.iin1.toString(16)}${parsed.appHeader.iin2.toString(16)} Seq=${parsed.appHeader.appSeq}\\n`;\n  if (parsed.objects.length === 0) {\n    out += 'Objects: (none)\\n';\n  } else {\n    for (const obj of parsed.objects) {\n      out += `  G${obj.group}V${obj.variation} Q=0x${obj.qualifier.toString(16)} Count=${obj.count} StartIdx=${obj.startIndex}\\n`;\n    }\n  }\n  return out;\n}\n\nfunction parseRawDnp3Hex(hex: string): string {\n  const buf = Buffer.from(hex.replace(/\\s/g, ''), 'hex');\n  const parsed = parseDnp3Frame(buf);\n  if (!parsed) return 'Invalid or incomplete DNP3 frame';\n  return formatDnp3Frame(parsed);\n}\n\n// Example usage\nconst sampleDnp3Frame = Buffer.from([\n  0x05, 0x64, 0xC1, 0x01,  // Start + Transport (FIR|FIN, Seq=1)\n  0xC4, 0x00, 0x00, 0x04,  // App header: AppCtrl=0xC4, IIN1=0x00, IIN2=0x00, Seq=4\n  0x01, 0x02, 0x00, 0x02, 0x00, 0x01,  // G1V2, Q=0x00, Count=2, Start=1 (Binary Inputs)\n  0x20, 0x01, 0x00, 0x02, 0x00, 0x64,  // G32V1, Q=0x00, Count=2, Start=100 (Analog Inputs)\n]);\n\nconst parsed = parseDnp3Frame(sampleDnp3Frame);\nif (parsed) {\n  console.log(formatDnp3Frame(parsed));\n}\n\n// CLI hex parser\nif (process.argv[2]) {\n  console.log(parseRawDnp3Hex(process.argv[2]));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-purdue-model-validator",
      children: "8.4 Purdue Model Validator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// purdue-validator.ts — Check zone isolation compliance based on traffic flows\ninterface NetworkFlow {\n  source: string;\n  destination: string;\n  sourceIp: string;\n  destIp: string;\n  port: number;\n  protocol: string;\n}\n\ninterface ZoneConfig {\n  name: string;\n  level: number;\n  subnets: string[];\n  allowedSources: string[];\n  allowedDestinations: string[];\n}\n\ninterface Violation {\n  flow: NetworkFlow;\n  ruleSource: string;\n  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';\n  description: string;\n}\n\nclass PurdueValidator {\n  private zones: Map<string, ZoneConfig> = new Map();\n\n  constructor() {\n    this.initializeDefaultZones();\n  }\n\n  private initializeDefaultZones(): void {\n    this.addZone({\n      name: 'Enterprise-IT',\n      level: 4,\n      subnets: ['10.0.0.0/16'],\n      allowedSources: ['*'],\n      allowedDestinations: ['Operations-DMZ'],\n    });\n    this.addZone({\n      name: 'Operations-DMZ',\n      level: 3.5,\n      subnets: ['10.10.0.0/24'],\n      allowedSources: ['Enterprise-IT', 'Site-Operations'],\n      allowedDestinations: ['Site-Operations', 'Enterprise-IT'],\n    });\n    this.addZone({\n      name: 'Site-Operations',\n      level: 3,\n      subnets: ['10.20.0.0/24'],\n      allowedSources: ['Operations-DMZ', 'Supervisory-Control'],\n      allowedDestinations: ['Operations-DMZ'],\n    });\n    this.addZone({\n      name: 'Supervisory-Control',\n      level: 2,\n      subnets: ['10.30.0.0/24'],\n      allowedSources: ['Site-Operations'],\n      allowedDestinations: ['Basic-Control'],\n    });\n    this.addZone({\n      name: 'Basic-Control',\n      level: 1,\n      subnets: ['10.40.0.0/24'],\n      allowedSources: ['Supervisory-Control'],\n      allowedDestinations: [],\n    });\n    this.addZone({\n      name: 'Safety-Zone',\n      level: 0.5,\n      subnets: ['10.99.0.0/24'],\n      allowedSources: [],\n      allowedDestinations: [],\n    });\n  }\n\n  addZone(config: ZoneConfig): void {\n    this.zones.set(config.name, config);\n  }\n\n  private ipInSubnets(ip: string, subnets: string[]): boolean {\n    const ipNum = this.ipToNumber(ip);\n    return subnets.some(subnet => {\n      const [base, bits] = subnet.split('/');\n      const mask = ~0 << (32 - parseInt(bits));\n      const baseNum = this.ipToNumber(base);\n      return (ipNum & mask) === (baseNum & mask);\n    });\n  }\n\n  private ipToNumber(ip: string): number {\n    return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet), 0) >>> 0;\n  }\n\n  private getZoneForIp(ip: string): string | undefined {\n    for (const [name, config] of this.zones) {\n      if (this.ipInSubnets(ip, config.subnets)) {\n        return name;\n      }\n    }\n    return undefined;\n  }\n\n  validateFlow(flow: NetworkFlow): Violation | null {\n    const srcZone = this.getZoneForIp(flow.sourceIp);\n    const dstZone = this.getZoneForIp(flow.destIp);\n\n    if (!srcZone || !dstZone) {\n      return {\n        flow,\n        ruleSource: 'zone-membership',\n        severity: 'HIGH',\n        description: `Unrecognized zone: src='${srcZone ?? 'unknown'}' dst='${dstZone ?? 'unknown'}'`,\n      };\n    }\n\n    const srcConfig = this.zones.get(srcZone)!;\n    const dstConfig = this.zones.get(dstZone)!;\n\n    // Safety zone: NO inbound traffic allowed\n    if (srcConfig.level < dstConfig.level) {\n      // Traffic flowing from Level N to Level N-M (upward) is usually OT→IT data\n      // This is allowed only through DMZ\n      if (dstZone !== 'Operations-DMZ' && dstZone !== 'Enterprise-IT') {\n        return {\n          flow,\n          ruleSource: 'purdue-level-direction',\n          severity: 'CRITICAL',\n          description: `Reverse flow: ${srcZone}(L${srcConfig.level}) → ${dstZone}(L${dstConfig.level}). OT→IT traffic must go through DMZ.`,\n        };\n      }\n    }\n\n    // Check cross-zone flow allowed\n    if (srcZone !== dstZone) {\n      const allowedSrc = srcConfig.allowedDestinations;\n      const allowedDst = dstConfig.allowedSources;\n\n      if (!allowedSrc.includes('*') && !allowedSrc.includes(dstZone)) {\n        return {\n          flow,\n          ruleSource: `${srcZone}.allowedDestinations`,\n          severity: 'HIGH',\n          description: `${srcZone} not allowed to communicate with ${dstZone}`,\n        };\n      }\n\n      if (!allowedDst.includes('*') && !allowedDst.includes(srcZone)) {\n        return {\n          flow,\n          ruleSource: `${dstZone}.allowedSources`,\n          severity: 'HIGH',\n          description: `${srcZone} not in ${dstZone} allowed sources`,\n        };\n      }\n    }\n\n    // Check for direct IT→OT violations (Level 4 → Level 0-2)\n    if (srcConfig.level === 4 && dstConfig.level <= 2) {\n      return {\n        flow,\n        ruleSource: 'purdue-level-isolation',\n        severity: 'CRITICAL',\n        description: `DIRECT IT→OT flow: ${srcZone}(L${srcConfig.level}) → ${dstZone}(L${dstConfig.level}). Traffic must pass through DMZ and Site-Operations.`,\n      };\n    }\n\n    return null; // Flow is compliant\n  }\n\n  validateFlows(flows: NetworkFlow[]): Violation[] {\n    return flows.map(f => this.validateFlow(f)).filter((v): v is Violation => v !== null);\n  }\n\n  generateReport(flows: NetworkFlow[]): string {\n    const violations = this.validateFlows(flows);\n    const critical = violations.filter(v => v.severity === 'CRITICAL');\n    const high = violations.filter(v => v.severity === 'HIGH');\n\n    let report = '=== Purdue Model Compliance Report ===\\n';\n    report += `Flows analyzed: ${flows.length}\\n`;\n    report += `Violations found: ${violations.length} (${critical.length} critical, ${high.length} high)\\n\\n`;\n\n    if (violations.length === 0) {\n      report += '✓ ALL FLOWS COMPLIANT with Purdue model zone isolation\\n';\n      return report;\n    }\n\n    for (const v of violations) {\n      report += `[${v.severity}] ${v.description}\\n`;\n      report += `       ${v.flow.sourceIp}:${v.flow.port} → ${v.flow.destIp}:${v.flow.port} (${v.flow.protocol})\\n\\n`;\n    }\n\n    report += 'Recommended actions:\\n';\n    if (critical.length > 0) {\n      report += '- CRITICAL: Deploy unidirectional gateways or data diodes for all reverse flows\\n';\n      report += '- CRITICAL: Remove direct IT→OT connections; route through DMZ + Site-Ops\\n';\n    }\n    report += '- HIGH: Implement firewall rules per ISA-99 zone/conduit model\\n';\n    report += '- HIGH: Enable OT DPI firewall to whitelist specific function codes\\n';\n\n    return report;\n  }\n}\n\n// Example: validate sample network flows\nconst flows: NetworkFlow[] = [\n  // Compliant: DMZ to Site Operations\n  { source: 'DMZ-GW', destination: 'Op-Console-1', sourceIp: '10.10.0.5', destIp: '10.20.0.10', port: 502, protocol: 'Modbus' },\n  // Violation: Enterprise IT direct to Basic Control\n  { source: 'Corp-Laptop', destination: 'PLC-Rack-1', sourceIp: '10.0.0.100', destIp: '10.40.0.50', port: 102, protocol: 'S7comm' },\n  // Violation: Reverse flow from Control to Supervisory (upward without DMZ)\n  { source: 'PLC-Rack-1', destination: 'HMI-Room-1', sourceIp: '10.40.0.50', destIp: '10.30.0.20', port: 502, protocol: 'Modbus' },\n  // Compliant: Supervisory to Basic Control\n  { source: 'SCADA-Server', destination: 'PLC-Rack-2', sourceIp: '10.30.0.5', destIp: '10.40.0.51', port: 502, protocol: 'Modbus' },\n  // Violation: Vendor remote direct to PLC\n  { source: 'Vendor-VPN', destination: 'PLC-Rack-3', sourceIp: '10.0.0.200', destIp: '10.40.0.52', port: 102, protocol: 'S7comm' },\n  // Violation: Traffic to Safety Zone\n  { source: 'SCADA-2', destination: 'SIS-Controller', sourceIp: '10.30.0.6', destIp: '10.99.0.10', port: 502, protocol: 'Modbus' },\n];\n\nconst validator = new PurdueValidator();\nconsole.log(validator.generateReport(flows));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-ics-threat-detection-rules",
      children: "8.5 ICS Threat Detection Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ics-threat-detection.ts — Anomalous protocol behavior detection rules\ninterface PacketEvent {\n  timestamp: Date;\n  srcIp: string;\n  dstIp: string;\n  protocol: string;\n  functionCode: number;\n  length: number;\n  payload: Buffer;\n}\n\ninterface Alert {\n  timestamp: Date;\n  ruleName: string;\n  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';\n  description: string;\n  srcIp: string;\n  dstIp: string;\n  protocol: string;\n  functionCode: number;\n}\n\ninterface DetectionRule {\n  name: string;\n  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';\n  evaluate(event: PacketEvent, state: Map<string, any>): Alert | null;\n}\n\nclass ICSThreatDetector {\n  private rules: DetectionRule[] = [];\n  private alerts: Alert[] = [];\n  private state: Map<string, any> = new Map();\n\n  constructor() {\n    this.registerDefaultRules();\n  }\n\n  private registerDefaultRules(): void {\n    this.addRule(this.modbusWriteCoilFloodRule());\n    this.addRule(this.modbusUnhandledFunctionCodeRule());\n    this.addRule(this.s7commBlockWriteRule());\n    this.addRule(this.dnp3SecureAuthBypassRule());\n    this.addRule(this.protocolAnomalyScanningRule());\n    this.addRule(this.unauthorizedSzlReadRule());\n    this.addRule(this.broadcastWhoIsFloodRule());\n    this.addRule(this.iec104CommandSpikeRule());\n  }\n\n  addRule(rule: DetectionRule): void {\n    this.rules.push(rule);\n  }\n\n  processEvent(event: PacketEvent): Alert | null {\n    for (const rule of this.rules) {\n      const alert = rule.evaluate(event, this.state);\n      if (alert) {\n        this.alerts.push(alert);\n        return alert;\n      }\n    }\n    return null;\n  }\n\n  processBatch(events: PacketEvent[]): Alert[] {\n    const results: Alert[] = [];\n    for (const event of events) {\n      const alert = this.processEvent(event);\n      if (alert) results.push(alert);\n    }\n    return results;\n  }\n\n  getAlerts(): Alert[] {\n    return [...this.alerts];\n  }\n\n  generateReport(): string {\n    let report = '=== ICS Threat Detection Report ===\\n';\n    report += `Events analyzed: ${this.state.get('eventCount') ?? 0}\\n`;\n    report += `Alerts generated: ${this.alerts.length}\\n\\n`;\n\n    const bySeverity = new Map<string, number>();\n    for (const a of this.alerts) {\n      bySeverity.set(a.severity, (bySeverity.get(a.severity) ?? 0) + 1);\n    }\n    report += 'By severity:\\n';\n    for (const [sev, count] of bySeverity) {\n      report += `  ${sev}: ${count}\\n`;\n    }\n    report += '\\nRecent alerts:\\n';\n    for (const a of this.alerts.slice(-10)) {\n      report += `[${a.severity}] ${a.ruleName}: ${a.description} (${a.srcIp} → ${a.dstIp} FC=0x${a.functionCode.toString(16)})\\n`;\n    }\n    return report;\n  }\n\n  // ── Rule implementations ──\n\n  private modbusWriteCoilFloodRule(): DetectionRule {\n    const stateKey = 'modbus-write-count';\n    return {\n      name: 'Modbus Write Coil Flood',\n      severity: 'HIGH',\n      evaluate: (event, state) => {\n        if (event.protocol !== 'Modbus') return null;\n        if (![5, 6, 15, 16].includes(event.functionCode)) return null;\n\n        const key = `write-${event.srcIp}`;\n        const now = event.timestamp.getTime();\n        const window = state.get(key) || [];\n        const recent = window.filter((t: number) => now - t < 5000);\n        recent.push(now);\n        state.set(key, recent);\n\n        if (recent.length > 20) {\n          return {\n            timestamp: event.timestamp,\n            ruleName: this.name,\n            severity: this.severity,\n            description: `Modbus write flood: ${recent.length} writes in 5s from ${event.srcIp}`,\n            srcIp: event.srcIp,\n            dstIp: event.dstIp,\n            protocol: event.protocol,\n            functionCode: event.functionCode,\n          };\n        }\n        return null;\n      },\n    };\n  }\n\n  private modbusUnhandledFunctionCodeRule(): DetectionRule {\n    const knownFunctionCodes = new Set([1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 15, 16, 17, 20, 21, 22, 23, 24, 43]);\n    return {\n      name: 'Modbus Unhandled Function Code',\n      severity: 'MEDIUM',\n      evaluate: (event) => {\n        if (event.protocol !== 'Modbus') return null;\n        if (!knownFunctionCodes.has(event.functionCode)) {\n          return {\n            timestamp: event.timestamp,\n            ruleName: this.name,\n            severity: this.severity,\n            description: `Unhandled Modbus function code: 0x${event.functionCode.toString(16)}`,\n            srcIp: event.srcIp,\n            dstIp: event.dstIp,\n            protocol: event.protocol,\n            functionCode: event.functionCode,\n          };\n        }\n        return null;\n      },\n    };\n  }\n\n  private s7commBlockWriteRule(): DetectionRule {\n    return {\n      name: 'S7comm Block Write',\n      severity: 'CRITICAL',\n      evaluate: (event) => {\n        if (event.protocol !== 'S7comm') return null;\n        if (event.functionCode === 0xDD) {\n          return {\n            timestamp: event.timestamp,\n            ruleName: this.name,\n            severity: this.severity,\n            description: `S7comm block write (0xDD) to PLC — possible code injection`,\n            srcIp: event.srcIp,\n            dstIp: event.dstIp,\n            protocol: event.protocol,\n            functionCode: event.functionCode,\n          };\n        }\n        return null;\n      },\n    };\n  }\n\n  private dnp3SecureAuthBypassRule(): DetectionRule {\n    return {\n      name: 'DNP3 Secure Auth Bypass',\n      severity: 'HIGH',\n      evaluate: (event, state) => {\n        if (event.protocol !== 'DNP3') return null;\n        const key = `dnp3-unsolicited-${event.dstIp}`;\n        const count = (state.get(key) || 0) + 1;\n        state.set(key, count);\n\n        if (count > 50 && event.functionCode === 0x82) {\n          return {\n            timestamp: event.timestamp,\n            ruleName: this.name,\n            severity: this.severity,\n            description: `High volume of unsolicited DNP3 responses (${count}) — possible auth bypass`,\n            srcIp: event.srcIp,\n            dstIp: event.dstIp,\n            protocol: event.protocol,\n            functionCode: event.functionCode,\n          };\n        }\n        return null;\n      },\n    };\n  }\n\n  private protocolAnomalyScanningRule(): DetectionRule {\n    return {\n      name: 'Protocol Scan Detection',\n      severity: 'HIGH',\n      evaluate: (event, state) => {\n        const key = `scan-${event.srcIp}`;\n        const seen = state.get(key) || new Set<string>();\n        seen.add(`${event.dstIp}:${event.functionCode}`);\n        state.set(key, seen);\n\n        if (seen.size > 30) {\n          return {\n            timestamp: event.timestamp,\n            ruleName: this.name,\n            severity: this.severity,\n            description: `Protocol scanning detected: ${seen.size} unique destination/FC from ${event.srcIp}`,\n            srcIp: event.srcIp,\n            dstIp: event.dstIp,\n            protocol: event.protocol,\n            functionCode: event.functionCode,\n          };\n        }\n        return null;\n      },\n    };\n  }\n\n  private unauthorizedSzlReadRule(): DetectionRule {\n    return {\n      name: 'Unauthorized SZL Read',\n      severity: 'MEDIUM',\n      evaluate: (event, state) => {\n        if (event.protocol !== 'S7comm') return null;\n        if (event.functionCode === 0x31) {\n          const key = `szl-read-${event.srcIp}`;\n          const count = (state.get(key) || 0) + 1;\n          state.set(key, count);\n\n          if (count === 1) {\n            return {\n              timestamp: event.timestamp,\n              ruleName: this.name,\n              severity: 'MEDIUM',\n              description: `SZL read from ${event.srcIp} — PLC reconnaissance`,\n              srcIp: event.srcIp,\n              dstIp: event.dstIp,\n              protocol: event.protocol,\n              functionCode: event.functionCode,\n            };\n          }\n        }\n        return null;\n      },\n    };\n  }\n\n  private broadcastWhoIsFloodRule(): DetectionRule {\n    return {\n      name: 'BACnet Who-Is Flood',\n      severity: 'MEDIUM',\n      evaluate: (event, state) => {\n        if (event.protocol !== 'BACnet') return null;\n        if (event.functionCode === 0x00) {\n          const key = `whois-${event.srcIp}`;\n          const count = (state.get(key) || 0) + 1;\n          state.set(key, count);\n\n          if (count > 10) {\n            return {\n              timestamp: event.timestamp,\n              ruleName: this.name,\n              severity: this.severity,\n              description: `BACnet Who-Is flood: ${count} requests from ${event.srcIp}`,\n              srcIp: event.srcIp,\n              dstIp: event.dstIp,\n              protocol: event.protocol,\n              functionCode: event.functionCode,\n            };\n          }\n        }\n        return null;\n      },\n    };\n  }\n\n  private iec104CommandSpikeRule(): DetectionRule {\n    return {\n      name: 'IEC 104 Command Spike',\n      severity: 'CRITICAL',\n      evaluate: (event, state) => {\n        if (event.protocol !== 'IEC-104') return null;\n        // Select/Execute commands (C_SC_NA_1 = type 45, C_DC_NA_1 = type 46)\n        if (event.functionCode === 45 || event.functionCode === 46) {\n          const key = `iec104-cmd-${event.srcIp}`;\n          const cmdLog: number[] = state.get(key) || [];\n          cmdLog.push(event.timestamp.getTime());\n          const recent = cmdLog.filter(t => Date.now() - t < 2000);\n          state.set(key, recent);\n\n          if (recent.length > 5) {\n            return {\n              timestamp: event.timestamp,\n              ruleName: this.name,\n              severity: this.severity,\n              description: `IEC 104 command spike: ${recent.length} select/execute in 2s — possible Industroyer`,\n              srcIp: event.srcIp,\n              dstIp: event.dstIp,\n              protocol: event.protocol,\n              functionCode: event.functionCode,\n            };\n          }\n        }\n        return null;\n      },\n    };\n  }\n}\n\n// Example: simulate events and detect threats\nconst detector = new ICSThreatDetector();\n\nconst testEvents: PacketEvent[] = [\n  // Normal Modbus read\n  { timestamp: new Date(), srcIp: '10.30.0.1', dstIp: '10.40.0.5', protocol: 'Modbus', functionCode: 3, length: 12, payload: Buffer.alloc(0) },\n  // S7comm block write (critical)\n  { timestamp: new Date(), srcIp: '10.0.0.100', dstIp: '10.40.0.5', protocol: 'S7comm', functionCode: 0xDD, length: 100, payload: Buffer.alloc(100) },\n  // SZL read (recon)\n  { timestamp: new Date(), srcIp: '10.0.0.100', dstIp: '10.40.0.5', protocol: 'S7comm', functionCode: 0x31, length: 40, payload: Buffer.alloc(40) },\n  // Unknown Modbus function code\n  { timestamp: new Date(), srcIp: '10.0.0.200', dstIp: '10.40.0.5', protocol: 'Modbus', functionCode: 0x62, length: 8, payload: Buffer.alloc(8) },\n];\n\nfor (const event of testEvents) {\n  const alert = detector.processEvent(event);\n  if (alert) {\n    console.log(`[${alert.severity}] ${alert.ruleName}: ${alert.description}`);\n  }\n}\nconsole.log(detector.generateReport());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "86-bacnet-who-is-service-scanner",
      children: "8.6 BACnet Who-Is Service Scanner"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// bacnet-whois-scanner.ts — Send BACnet Who-Is broadcasts and collect I-Am responses\nimport * as dgram from 'dgram';\n\ninterface BacnetDevice {\n  deviceId: number;\n  ipAddress: string;\n  vendorId: number;\n  vendorName?: string;\n  deviceName?: string;\n}\n\nconst BACNET_PORT = 0xBAC0; // 47808\nconst BACNET_BROADCAST = '255.255.255.255';\n\nfunction buildBacnetNpdu(buffer: Buffer): Buffer {\n  // BACnet Network Protocol Data Unit header\n  const npdu = Buffer.alloc(4);\n  npdu[0] = 0x01;  // Version\n  npdu[1] = 0x08;  // Control: destination present | expecting reply\n  npdu[2] = 0x00;  // DNET (0 = local)\n  npdu[3] = 0x00;  // DADR (empty)\n  return Buffer.concat([npdu, buffer]);\n}\n\nfunction buildBacnetApduConfirmedReq(invokeId: number, serviceChoice: number, data: Buffer): Buffer {\n  const apdu = Buffer.alloc(3);\n  apdu[0] = 0x00;  // Confirmed Request (bits 7-4 = 0, bits 3-0 = 0)\n  apdu[1] = invokeId;\n  apdu[2] = serviceChoice; // Service choice (12 = Who-Is)\n  return Buffer.concat([apdu, data]);\n}\n\nfunction buildBacnetApduUnconfirmedReq(serviceChoice: number, data: Buffer): Buffer {\n  const apdu = Buffer.alloc(2);\n  apdu[0] = 0x10;  // Unconfirmed Request (bits 7-4 = 1)\n  apdu[1] = serviceChoice; // Service choice (8 = Who-Is)\n  return Buffer.concat([apdu, data]);\n}\n\nfunction buildWhoIsRequest(): Buffer {\n  // BACnet Who-Is is an unconfirmed request with optional range limits\n  // Empty data = respond for all devices\n  const unconfirmed = buildBacnetApduUnconfirmedReq(0x08, Buffer.alloc(0));\n  return buildBacnetNpdu(unconfirmed);\n}\n\nfunction parseBacnetTaggedValue(data: Buffer, offset: number): { value: number; length: number; newOffset: number } {\n  const first = data[offset];\n  const tag = (first >> 4) & 0x0F;\n  const classBit = (first >> 3) & 1;\n  let length = first & 0x07;\n  let value = 0;\n  let newOffset = offset + 1;\n\n  if (length === 5) {\n    // Length is in next byte\n    length = data[newOffset];\n    newOffset++;\n  }\n\n  // Read the value\n  for (let i = 0; i < length && newOffset < data.length; i++) {\n    value = (value << 8) | data[newOffset];\n    newOffset++;\n  }\n\n  return { value, length, newOffset };\n}\n\nfunction parseIAmResponse(data: Buffer): BacnetDevice | null {\n  if (data.length < 12) return null;\n\n  // Check BVLL (BACnet Virtual Link Layer)\n  if (data[0] !== 0x81 || data[1] !== 0x0B) return null;\n\n  // Check for BACnet APDU type: Unconfirmed Request (0x10)\n  let offset = 8; // Skip BACnet/IP header (BVLC 4 + NPDU 3 + first APDU byte)\n  const apduType = data[offset] >> 4;\n  if (apduType !== 1) return null; // Not an unconfirmed request\n\n  const serviceChoice = data[offset + 1];\n  if (serviceChoice !== 0x00) return null; // Not I-Am (service 0 = I-Am)\n\n  offset += 2;\n\n  // Parse the I-Am parameters\n  try {\n    // Object Identifier (tag 0, context-specific)\n    const objId = parseBacnetTaggedValue(data, offset);\n    offset = objId.newOffset;\n    const deviceId = objId.value & 0x3FFFFF; // 22-bit device instance\n\n    // Max APDU length (tag 1)\n    const maxApdu = parseBacnetTaggedValue(data, offset);\n    offset = maxApdu.newOffset;\n\n    // Segmentation support (tag 2)\n    const seg = parseBacnetTaggedValue(data, offset);\n    offset = seg.newOffset;\n\n    // Vendor ID (tag 3)\n    const vendor = parseBacnetTaggedValue(data, offset);\n    offset = vendor.newOffset;\n\n    return {\n      deviceId,\n      ipAddress: `${data[4]}.${data[5]}.${data[6]}.${data[7]}`,\n      vendorId: vendor.value,\n    };\n  } catch {\n    return null;\n  }\n}\n\nasync function scanBacnetDevices(timeoutMs: number = 5000): Promise<BacnetDevice[]> {\n  return new Promise((resolve, reject) => {\n    const socket = dgram.createSocket('udp4');\n    const devices: Map<number, BacnetDevice> = new Map();\n\n    socket.on('message', (msg, rinfo) => {\n      const device = parseIAmResponse(msg);\n      if (device && !devices.has(device.deviceId)) {\n        device.ipAddress = rinfo.address;\n        devices.set(device.deviceId, device);\n      }\n    });\n\n    socket.on('error', (err) => {\n      socket.close();\n      reject(err);\n    });\n\n    socket.bind(0, () => {\n      socket.setBroadcast(true);\n      const whoIs = buildWhoIsRequest();\n\n      // Send Who-Is 3 times for reliability\n      for (let i = 0; i < 3; i++) {\n        socket.send(whoIs, 0, whoIs.length, BACNET_PORT, BACNET_BROADCAST);\n      }\n\n      setTimeout(() => {\n        socket.close();\n        resolve(Array.from(devices.values()));\n      }, timeoutMs);\n    });\n  });\n}\n\nasync function main(): Promise<void> {\n  console.log('Sending BACnet Who-Is broadcast...');\n  console.log('Listening for I-Am responses (5s timeout)...\\n');\n\n  try {\n    const devices = await scanBacnetDevices(5000);\n\n    if (devices.length === 0) {\n      console.log('No BACnet devices responded.');\n      console.log('Ensure you are on a BACnet/IP network segment.');\n      return;\n    }\n\n    console.log(`Discovered ${devices.length} BACnet device(s):\\n`);\n    for (const device of devices) {\n      console.log(`  Device ID:      ${device.deviceId}`);\n      console.log(`  IP Address:     ${device.ipAddress}`);\n      console.log(`  Vendor ID:      ${device.vendorId}`);\n      if (device.vendorName) console.log(`  Vendor:         ${device.vendorName}`);\n      if (device.deviceName) console.log(`  Device Name:    ${device.deviceName}`);\n      console.log('');\n    }\n  } catch (err) {\n    console.error(`Scan failed: ${(err as Error).message}`);\n  }\n}\n\nif (require.main === module) {\n  main().catch(console.error);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-plc-security-hardening-checklist",
      children: "9. PLC Security Hardening Checklist"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Priority"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Standard Reference"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change default passwords on ALL PLCs and HMIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 62443-4-2 CR 1.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable unused protocol stacks (Modbus, S7 PUT/GET, EtherNet/IP unconnected)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 62443-3-3 SR 5.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable protocol security features (CIP Security, DNP3 SAv5, OPC UA SignAndEncrypt)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 62443-4-2 CR 3.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whitelist Modbus function codes per slave at OT firewall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 62443-3-3 SR 3.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segment PLCs into IEC 62443 zones with conduit firewalls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 62443-3-2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable remote engineering access (PUT/GET, remote STOP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor-specific"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement application whitelisting on engineering workstations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 62443-3-3 SR 4.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable PLC password protection with >15 character complex passwords"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 62443-4-2 CR 1.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy passive OT monitoring (SPAN port + OT-SIEM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 62443-3-3 SR 6.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log all engineering access (who, when, what block was modified)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 62443-3-3 SR 2.8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use signed firmware updates only — disable unsigned firmware loading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 62443-4-1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate safety controllers (SIS) from control PLCs with data diodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 61511 / IEC 62443"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement jump box for all remote access with MFA + session recording"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIST SP 800-82 Rev 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conduct annual OT penetration testing (with plant shutdown coordination)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 62443-2-1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintain up-to-date asset inventory with firmware versions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 62443-2-4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-ics-attack-kill-chain-sample",
      children: "10. ICS Attack Kill Chain (Sample)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n   A[Reconnaissance] --> B[Weaponization]\n   B --> C[Delivery]\n   C --> D[Exploitation]\n   D --> E[Installation]\n   E --> F[Command & Control]\n   F --> G[Actions on Objectives]\n\n   subgraph Recon\n      A1[OSINT: Shodan, Censys]\n      A2[Network scan: Modbus, S7, DNP3]\n      A --> A1\n      A --> A2\n   end\n\n   subgraph Weaponize\n      B1[Develop rootkit .lnf driver]\n      B2[Craft S7comm block payload]\n      B --> B1\n      B --> B2\n   end\n\n   subgraph Deliver\n      C1[USB drop / Spear-phish]\n      C2[Watering hole / Supply chain]\n      C --> C1\n      C --> C2\n   end\n\n   subgraph Exploit\n      D1[Windows zero-day]\n      D2[Step 7 DLL hijack]\n      D --> D1\n      D --> D2\n   end\n\n   subgraph Install\n      E1[Rootkit on Engineering WS]\n      E2[Modular framework on HMI]\n      E --> E1\n      E --> E2\n   end\n\n   subgraph C2\n      F1[Protocol tunnel: Modbus data block]\n      F2[Reverse connect over OPC UA]\n      F --> F1\n      F --> F2\n   end\n\n   subgraph Objective\n      G1[Change PLC logic/parameters]\n      G2[Disable safety trips]\n      G3[Destroy equipment / DoS]\n      G --> G1\n      G --> G2\n      G --> G3\n   end\n\n   style A fill:#e74c3c,color:#fff\n   style G fill:#c0392b,color:#fff\n   style D fill:#e67e22,color:#fff\n   style E fill:#f1c40f,color:#000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-real-attack-timeline",
      children: "11. Real Attack Timeline"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key OT Technique"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Jun 2010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stuxnet discovered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natanz, Iran (centrifuges)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1,000 centrifuges destroyed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S7-315 rootkit, Profibus MITM, .lnf file manipulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dec 2015"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BlackEnergy/Industroyer (Ukraine grid)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kyivoblenergo substations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "230,000 customers without power for 1–6 hr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 60870-5-104 command injection, wiper module"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dec 2016"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRASHOVERRIDE (Ukraine grid second wave)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ukrainian substation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One substation disconnected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modular ICS attack framework with IEC 104, OPC, serial IEC 101 modules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aug 2017"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRITON/TRISIS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Saudi petrochemical plant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety system forced into halt/run cycle; plant shut down"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triconex TriStation 1131 protocol reverse-engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mar 2019"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XT RAT (Water utility)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US water utility (undisclosed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote access to water treatment PLCs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modbus TCP manipulation via VPN jump"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "May 2021"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Colonial Pipeline (ransomware)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Colonial Pipeline OT environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline shutdown for 6 days; $4.4M ransom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ransomware on IT side cascaded to OT operations shutdown"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Feb 2022"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incontroller/Pipedream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple vendors (Siemens, Schneider, Omron, Rockwell)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-positioned framework; no destructive deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-vendor Modbus/S7/FINS/CIP manipulation framework"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Apr 2022"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPNFilter (re-emergence)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Siemens industrial routers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote access to industrial networking gear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Router-level persistence with modular OT plugin architecture"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Colonial Pipeline lessons:"
      }), " Even though the ransomware only impacted IT billing systems, the company proactively shut down OT pipelines to prevent potential cascading effects. This highlights the critical need for IT/OT separation — but also the operational dependency of OT on IT for scheduling and billing."]
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
            children: "Map the Purdue model before deploying any security controls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit your ICS network to identify all devices by Purdue level and enforce zone-based isolation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory all PLCs and their protocol exposure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy passive monitoring to discover all PLCs, RTUs, and HMIs; document which protocols are active"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy protocol-aware firewalls with DPI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure Modbus/DNP3/S7comm inspection that whitelists allowed function codes and register ranges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Segment safety systems from control networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Place SIS controllers in a dedicated IEC 62443 SL-4 zone with physical unidirectional gateway isolation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use passive monitoring before active scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy OT-SIEM via SPAN ports to establish baseline traffic patterns before any active probing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement jump boxes with MFA and session recording"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set up hardened bastion hosts with TOTP + certificate authentication and full video/keystroke recording"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prepare an offline incident response plan for OT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep paper-based runbooks for manual plant shutdown; test air-gapped recovery procedures quarterly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OT/ICS/SCADA security is fundamentally different from traditional IT security. The priority shift from Confidentiality → Availability, combined with 15–30 year device lifetimes, lack of authentication in legacy industrial protocols, and safety-critical process dependencies, requires specialized knowledge and tools."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key takeaways from this chapter:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The Purdue model remains the foundational architecture"
          }), " for OT security. Every ICS environment must be mapped to Levels 0–4, with zone-based security controls per ISA-99/IEC 62443."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Industrial protocols are designed without security."
          }), " Modbus, DNP3 (without SA), S7comm, and Profinet DCP all lack authentication, encryption, or integrity checking. Deep packet inspection firewalls are essential for compensating controls."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ICS attacks have advanced from nation-state level to commodity."
          }), " Stuxnet (2010) required four zero-days; Incontroller/Pipedream (2022) showed cross-vendor modular frameworks are now available to state actors."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Passive monitoring is the safest first step."
          }), " Deploying passive OT-SIEM via SPAN ports before any active scanning avoids PLC crashes and establishes a protocol baseline."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Network segmentation is non-negotiable."
          }), " Unidirectional gateways/data diodes between IT and OT, plus zone-to-conduit firewalls with DPI, prevent the vast majority of ICS compromise scenarios."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Remote access must be treated as a critical control point."
          }), " Jump boxes, session recording, and vendor MFA should be mandatory; air-gapped systems should remain physically isolated."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TypeScript tooling can simulate OT security tools"
          }), " for testing, training, and validation — Modbus scanners, S7 PLC info readers, DNP3 parsers, and Purdue model validators help practitioners understand protocol behavior without needing expensive testbeds."]
        }), "\n"]
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
            children: "Which Purdue model level contains the actual sensors, actuators, and physical process equipment?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level 0 — Physical Process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level 1 — Basic Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level 2 — Supervisory Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level 4 — Enterprise IT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the primary difference between IT and OT security priorities?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IT prioritizes Availability; OT prioritizes Confidentiality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IT prioritizes Confidentiality; OT prioritizes Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both prioritize Integrity above all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OT has no security priorities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which Modbus function code writes a single holding register?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x01 (Read Coils)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x06 (Write Single Register)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0F (Write Multiple Coils)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x11 (Report Server ID)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In the Stuxnet attack, how did the rootkit hide malicious modifications from the Step 7 engineering software?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "By encrypting the PLC configuration"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["By intercepting ", (0,jsx_runtime.jsx)(_components.code, {
              children: "s7blk_read"
            }), " calls and returning clean data"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "By changing the PLC IP address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "By deleting the engineering software logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the correct port number for BACnet/IP?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP/502"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP/47808 (0xBAC0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP/102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP/20000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which IEC 62443 security level protects against intentional violation using extended resources (nation-state actors)?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SL 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SL 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SL 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SL 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What protocol did the TRITON/TRISIS attack reverse-engineer to compromise the Triconex safety controller?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modbus TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TriStation 1131 (TCP/1437)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S7comm (TCP/102)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNP3 SAv5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which of the following is a critical feature of a unidirectional gateway (data diode)?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It allows bidirectional traffic with deep packet inspection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It physically enforces one-way data flow using fiber optics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It encrypts all OT traffic with AES-256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It provides VPN access for remote vendors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In the DNP3 protocol, what SAv5 mechanism provides authentication?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA-2048 public key encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC-SHA-256 with pre-shared keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS 1.3 mutual authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kerberos ticket exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What was the primary OT technique used by Industroyer/Crashoverride to disconnect power substations in Ukraine?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modbus write coil flood"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEC 60870-5-104 select/execute commands to open circuit breakers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S7comm block write to overwrite safety logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BACnet Who-Is flood to crash building controllers"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "exercise-1-modbus-network-discovery",
        children: "Exercise 1: Modbus Network Discovery"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Using the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "modbus-scanner.ts"
        }), " implementation from Section 8.1, extend it to:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Scan a range of IP addresses (e.g., 192.168.1.1–254) and build a Modbus slave inventory table"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "For each discovered slave, read holding registers 0–9 and display their values"
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Write a function ", (0,jsx_runtime.jsx)(_components.code, {
            children: "detectVulnerableSlaves()"
          }), " that flags slaves supporting write function codes (0x05, 0x06, 0x0F, 0x10)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "exercise-2-purdue-model-audit-script",
        children: "Exercise 2: Purdue Model Audit Script"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Using the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PurdueValidator"
        }), " class from Section 8.4, create a new validation rule:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "A zone must not have more than one path to any other zone (no redundant conduits between same zones)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Detect \"flat network\" violations where Level 0–1 devices appear in the same subnet as Level 3+ devices"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Generate a compliance score from 0–100 based on violations found"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "exercise-3-s7comm-session-logger",
        children: "Exercise 3: S7comm Session Logger"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Extend the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s7comm-info.ts"
        }), " implementation to:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Capture the full ISO COTP CR/CC/TD exchange for every S7 session"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Log the source IP, destination IP, and S7 function codes for every message"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Raise an alert if more than 5 block write (0xDD) operations are seen in a 1-minute window"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Write the logs to a structured JSON file"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "exercise-4-dnp3-fragment-reassembly",
        children: "Exercise 4: DNP3 Fragment Reassembly"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Using the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DNP3 Frame Parser"
        }), " from Section 8.3:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Implement a fragment re-assembler that collects multi-fragment DNP3 messages using the FIR/FIN flags"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Detect \"fragment injection\" attacks where a packet with a duplicate sequence number is inserted mid-stream"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Report the total size of reassembled application messages"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "exercise-5-ics-threat-detection-rule-engine",
        children: "Exercise 5: ICS Threat Detection Rule Engine"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Extend the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ICSThreatDetector"
        }), " from Section 8.5 with:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "A \"Modbus Exception Storm\" rule: >30 exception responses (FC > 0x80) in 1 minute indicates possible scan or crash"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "A \"S7comm Password Brute Force\" rule: >10 password challenge responses (function 0x1D) per minute from the same source"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "A \"Rogue IO Device\" rule: new IP sends Profinet DCP Set IO Device Name without prior discovery"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Export alerts to JSON format with CEF (Common Event Format) headers"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "exercise-6-secure-remote-access-design",
        children: "Exercise 6: Secure Remote Access Design"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Design a complete secure remote access architecture for a chemical plant:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Draw the network diagram (text-based or ASCII) showing vendor → Internet → DMZ → Jump Box → OT Zones"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Specify firewall rule sets for each conduit"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Define the access lifecycle: request → approval → provision → authenticate → authorize → monitor → deprovision"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Calculate the total number of firewall rule changes needed for a 3-day vendor maintenance window"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "challenge-problem",
        children: "Challenge Problem"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "OT Security Assessment Automation Pipeline:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Build a TypeScript script ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ot-assessment.ts"
        }), " that orchestrates the following pipeline:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Discovery Phase:"
          }), " Use the BACnet Who-Is scanner + Modbus TCP scanner to discover all devices on Level 1–2 subnets"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Protocol Analysis Phase:"
          }), " For each discovered device, determine which protocols respond (Modbus, S7comm, DNP3, BACnet) and build a protocol matrix"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Vulnerability Assessment Phase:"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Flag devices that support write function codes on Modbus"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Flag S7 PLCs that respond to SZL read requests (no password protection)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Flag BACnet devices that respond to Who-Is (default)"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Purdue Compliance Phase:"
          }), " Feed discovered IPs into the Purdue validator and check zone isolation compliance"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Report Generation Phase:"
          }), " Output a combined Markdown report with:\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Asset inventory table (IP, MAC, vendor, protocols, risk score)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Violations table (severity, description, recommendation)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Overall OT security posture score (0–100)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Remediation priority list"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Constraints:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "All phases must execute sequentially without user interaction"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Non-responsive devices should be noted but not fail the pipeline"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The pipeline must complete within 5 minutes (use timeouts aggressively)"
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Output format must match the template in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ot-report-template.md"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/cyber-security/16-supply-chain-cicd",
        children: "Chapter 16: Supply Chain & CI/CD Security"
      })]
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